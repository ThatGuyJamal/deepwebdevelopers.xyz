import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Loadfooter from "../footer";

export default function aboutPage() {
	return (
		<div>
			<div className={styles.about_container}>
				<main className={styles.about_main}>
					<div className={styles.about_header}>
						<h2>Company information!</h2>
					</div>

					<div className={styles.about_grid}>
						<Link href="/">
							<a className={styles.about_card}>
								<h3>CEO &rarr;</h3>
								<p>The Creator and Leader of D.W.D.</p>
							</a>
						</Link>

						{/* /views/about */}
						<Link href="/views/about">
							<a className={styles.about_card}>
								<h3>Contact Information &rarr;</h3>
								<p>Our contact Page!</p>
							</a>
						</Link>
						<Link href="/">
							<a className={styles.about_card}>
								<h3>n/a &rarr;</h3>
								<p>Coming soon...</p>
							</a>
						</Link>

						<Link href="/">
							<a className={styles.about_card}>
								<h3>n/a &rarr;</h3>
								<p>Coming soon...</p>
							</a>
						</Link>
					</div>

					<a className={styles.about_link}>
						<Link href="/">
							<a>Back to home</a>
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
