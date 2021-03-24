import React from "react";
import { Link } from "react-router-dom";
import "../../styles/styles.css";

export default function aboutPage() {
	return (
		<div>
			<div className="about_container">
				<main className="about_main">
					<div className="about_header">
						<h2>Company information!</h2>
					</div>
					<Link to="/">
						<div className="about_grid">
							<a className="about_card">
								<h3>CEO &rarr;</h3>
								<p>The man behind D.W.D</p>
							</a>
						</div>
					</Link>
					<Link to="/views/about">
						<div className="about_grid">
							<a className="about_card">
								<h3>Contact Information &rarr;</h3>
								<p>Get in contact!</p>
							</a>
						</div>
					</Link>
					<Link to="/">
						<div className="about_grid">
							<a className="about_card">
								<h3>n/a &rarr;</h3>
								<p>Coming soon...</p>
							</a>
						</div>
					</Link>

					<Link to="/">
						<div className="about_grid">
							<a className="about_card">
								<h3>n/a &rarr;</h3>
								<p>Coming soon...</p>
							</a>
						</div>
					</Link>

					<a className="about_link">
						<Link to="/">
							<a>Back to home</a>
						</Link>
					</a>
				</main>
			</div>
		</div>
	);
}
