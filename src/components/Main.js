import React, { Component } from "react";
import { Route, NavLink, BrowserRouter, } from "react-router-dom";
import Home from "./Home";
import IndividualDetailController from '../components/IndividualDetailsController';
import search from '../components/Search';
import Add from '../components/Add'

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink  to="/search">Search</NavLink></li>
                        {/* <li><NavLink  to="/Character/add">Add a Character</NavLink></li> */}

                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route  path="/search" component={search} />
                        <Route path="/Characters" component={Home}/>
                        <Route path="/Character/:id" component={IndividualDetailController}/>
                        <Route path="/Character/add" component={Add}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;