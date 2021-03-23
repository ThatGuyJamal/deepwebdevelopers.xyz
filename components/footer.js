import React from 'react'
import styles from "../styles/Home.module.css";
export default function footer() {
    return (
			<div>
				<footer className={styles.footer}>
					<a
						href="https://nextjs.org/"
						target="_blank"
						rel="noopener noreferrer"
						alt="Footer link to Nextjs"
					>
						Powered by Nextjs
					</a>
				</footer>
			</div>
		);
}
