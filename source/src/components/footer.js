import React from 'react'
import "../styles/styles.css";
import logo from "../img/github/PNG/GitHub-Mark-Light-32px.png";
export default function footer() {
    return (
			<div>
				<footer className="footer">
					<a
						href="https://github.com/ThatGuyJamal"
						target="_blank"
						rel="noopener noreferrer"
						alt="Footer link to Nextjs"
					>
						Powered by ThatGuyJamal
						<img src={logo} alt="github logo"></img>
					</a>
				</footer>
			</div>
		);
}
