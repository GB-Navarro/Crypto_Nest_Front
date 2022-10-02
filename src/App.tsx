import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import GlobalStyles from "./globalStyles";

function App() {
	return (
		<>
			<GlobalStyles></GlobalStyles>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
