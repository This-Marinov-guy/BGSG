// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Blocks Layout
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// Create Import File
import './index.scss';

import PageScrollTop from './component/PageScrollTop';

// Home layout
import Home from './pages/Home';

// Element Layout
import About from "./pages/About";
import Contact from "./pages/Contact";
import error404 from "./pages/error404";
import Board from './pages/Board';

import LogIn from './pages/LogIn';
import PastEvents from './pages/PastEvents';


class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <PageScrollTop>
                    <Switch>
                        <Route exact path='/' component={Home}/>

                        {/* Element Layot */}
                        <Route exact path={`/contact`} component={Contact}/>
                        <Route exact path={`/about`} component={About}/>
                        <Route exact path={`/board-members`} component={Board}/>
                        <Route exact path={`/active-members`} component={Board}/>
                        <Route exact path={`/past-events`} component={PastEvents}/>

                        {/* Authentication */ }
                        <Route exact path={`/login`} component={LogIn}/>


                        {/* Blocks Elements  */}                        
                        <Route path={`/404`} component={error404}/>
                        <Route component={error404}/>

                    </Switch>
                </PageScrollTop>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();