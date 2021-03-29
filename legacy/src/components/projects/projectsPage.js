import React from "react";
import "../../styles/styles.css";
import { Link } from "react-router-dom";

export default function projectsPage() {
	return (
		<div>
			<div className="projects_container">
				<main className="projects_main">
					<div className="projects_header">
						<h2>Our Projects!</h2>
					</div>
					<div className="projects_code_block">
						<code>Coming soon!</code>
					</div>
					<a className="main_link">
						<Link to="/">
							<a>Back</a>
						</Link>
					</a>
				</main>
			</div>
		</div>
	);
}
