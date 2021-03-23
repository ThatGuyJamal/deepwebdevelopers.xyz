import Head from "next/head";
import LoadHomePage from "../components/home/HomePage";
import FooterComponent from "../components/footer";

export default function Home() {
	return (
		<div>
			<Head>
				<title>DeepWebDevelopers</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				{/* Loads the home page */}
				<LoadHomePage />
			</div>
		</div>
	);
}
