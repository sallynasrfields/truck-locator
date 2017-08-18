import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'

import Home from './Home'

export default class Routes extends React.Component {
    render() {
     return <Router>
                <div className="my-div">
                    <Route path="/home" render={()=> "Hello World"} />
                    <Route exact path ="/" render={() => <Redirect to='/home' />} />
                    {/*<Route path="/home" component={Home} />*/}
                    Hello
                </div>
            </Router>
    }
}

// const Redir = {
//     render() {
//         return <Redirect to='/home' />
//     }
// }

