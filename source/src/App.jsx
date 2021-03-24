import React from "react";
import LoadCustomRouter from './route/CustomRouter';
import { HashRouter as Router } from "react-router-dom";
function App() {
	return (
		<div>
			<Router>
				<LoadCustomRouter></LoadCustomRouter>
			</Router>
		</div>
	);
}

export default App;
