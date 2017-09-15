import React from 'react'
import {
    BrowserRouter,
    Route,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom'

const Matches = ({match}) => {
    return <div style={{border: "2px solid blue", margin: "1em", padding: "0.3em"}}>
        {match.params.pageName
            ? <p><b>pageName: {match.params.pageName}</b></p>
            : <h3>page not match...</h3>}
    </div>
}

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const NoTopic = ({ match }) => (
    <div>
        <h3 style={{color: "red"}}>Sorry, {match.params.topicId} is not found.</h3>
    </div>
)

const Garment = ({match}) => {
    return (
        <div style={{border: "1px solid grey"}}>
            <ul style={{padding: "0.7em"}}>
                <li><NavLink to="/hello">/hello</NavLink></li>
                <li><NavLink to="hello">hello</NavLink></li>
                <li><NavLink to={match.url + "/hello"}>match.url hello</NavLink></li>
                <li><NavLink to="/garment/world">/garment/world</NavLink></li>
            </ul>
            <Switch>
                <Route exact path={match.url + "/hello"} component={Hello} />
                <Route exact path="/garment/world" component={World} />
                <Route exact path="/garment/:topicId" component={NoTopic} />
            </Switch>
        </div>
    )
}

const RootHello = () => <h2 style={{background: "skyblue"}}>(Root)hello hello hello</h2>

const Hello = () => <h2 style={{background: "pink"}}>hello hello hello</h2>

const World = () => <h2 style={{background: "pink"}}>world world world</h2>

const RouterTest = () => {
    const headerfooterstyle = {padding: "0.6em", background: "thistle", borderRadius: "0.2em", }
    return (
    <BrowserRouter>
        <div style={{fontSize: "30px", padding: "1em"}}>
            <h2 style={headerfooterstyle}>HEADER</h2>

            <ul style={{padding: "0.5em"}}>
                <li>NavLink</li>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/garment">Garment</NavLink></li>
            </ul>

            <hr/>

                <Route exact path="/" component={Home} />

                <Route path="/about" component={About} />
                <Route path="/garment" component={Garment} />
                <Route path="/:pageName" component={Matches} />

            <h2 style={headerfooterstyle}>FOOTER</h2>
        </div>

    </BrowserRouter>
)}

export default RouterTest
