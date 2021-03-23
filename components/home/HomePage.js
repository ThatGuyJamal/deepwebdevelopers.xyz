import React, { Component } from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Loadfooter from "../footer";

export default class Home extends Component {
	render() {
		return (
			<div>
				<div className={styles.container}>
					<main className={styles.main}>
						<div className={styles.title}>
							<div className={styles.def_code_block}>
								<h1>
									Welcome to{" "}
									<a href="https://github.com/DeepWebDevelopers">
										DeepWebDevelopers!
									</a>
								</h1>
							</div>
						</div>

						<div className={styles.grid}>
							<Link href="/">
								<a className={styles.card}>
									<h3>Documentation &rarr;</h3>
									<p>Coming soon...</p>
								</a>
							</Link>

							{/* /views/about */}
							<Link href="/views/about">
								<a className={styles.card}>
									<h3>About Us &rarr;</h3>
									<p>Company infomation!</p>
								</a>
							</Link>
							<Link href="/views/projects">
								<a className={styles.card}>
									<h3>Projects &rarr;</h3>
									<p>Things we work on.</p>
								</a>
							</Link>

							<Link href="/">
								<a className={styles.card}>
									<h3>Contribute &rarr;</h3>
									<p>Coming soon...</p>
								</a>
							</Link>
						</div>
					</main>
					<Loadfooter />
				</div>
			</div>
		);
	}
}
