import React from "react";
import { Link } from "react-router-dom";
import "../styles/404.css";

export default function NF_404() {
	return (
		<div className="not_found-err">
			<h2 className="this2">PAGE NOT FOUND!</h2>

			<p className="this">
				<Link className="basic-link-this" to="/">
					<p>Return Home</p>
				</Link>{" "}
			</p>
		</div>
	);
}
