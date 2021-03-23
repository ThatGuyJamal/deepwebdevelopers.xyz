import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Loadfooter from "../footer";

function projectsPage() {
	return (
		<div>
			<div className={styles.projects_container}>
				<main className={styles.projects_main}>
					<div className={styles.projects_header}>
						<h2>Our Projects!</h2>
					</div>
					<h2>Hello world</h2>
					<div className={styles.projects_code_block}>
						<code>hi</code>
					</div>
					<a className={styles.about_link}>
						<Link href="/">
							<a>Back</a>
						</Link>
					</a>
				</main>
			</div>
			<div>
				<Loadfooter />
			</div>
		</div>
	);
}

export default projectsPage;
