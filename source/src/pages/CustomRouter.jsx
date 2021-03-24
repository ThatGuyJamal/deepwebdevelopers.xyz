import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route } from "react-router-dom";
// ! pages
import LoadHomePage from "../components/home/HomePage";
import LoadAboutPage from '../pages/views/about'
import LoadProjectsPage from '../pages/views/projects'
// ? mics
import Footer from "../components/footer"
import Navbar from "../components/navBar"
import NF_404 from '../components/NF_404'

export class CustomRouter extends Component {
    render() {
        return (
					<div>
						<Router>
							<Navbar />
							<Switch>
								<Route path="/" exact component={LoadHomePage} />
								<Route path="/views/about" exact component={LoadAboutPage} />
								<Route
									path="/views/projects"
									exact
									component={LoadProjectsPage}
								/>
								{/* <Route path="/" exact component={} /> */}
								<Route path="*" component={NF_404} />
							</Switch>
							<Footer />
						</Router>
					</div>
				);
    }
}

export default CustomRouter
