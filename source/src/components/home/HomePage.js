import React from "react";
import "../../styles/styles.css";
import { Link } from "react-router-dom";

function HomePage() {
	return (
		<div>
			<div>
				<div className="container">
					<main className="main">
						<div className="title">
							<div className="def_code_block">
								<h1>
									Welcome to{" "}
									<a href="https://github.com/DeepWebDevelopers">
										DeepWebDevelopers!
									</a>
								</h1>
							</div>
						</div>
						<Link to="/">
							<div className="grid">
								<a className="card">
									<h3>Documentation &rarr;</h3>
									<p>Coming soon...</p>
								</a>
							</div>
						</Link>

						<Link to="/views/about">
							<div className="grid">
								<a className="card">
									<h3>About Us &rarr;</h3>
									<p>Company infomation!</p>
								</a>
							</div>
						</Link>
						<Link to="/views/projects">
							<div className="grid">
								<a className="card">
									<h3>Projects &rarr;</h3>
									<p>Things we work on.</p>
								</a>
							</div>
						</Link>

						<Link to="/">
							<div className="grid">
								<a className="card">
									<h3>Contribute &rarr;</h3>
									<p>Coming soon...</p>
								</a>
							</div>
						</Link>
					</main>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
