import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import GlobalStyles from "./globalStyles";

function App() {
	return (
		<>
			<GlobalStyles></GlobalStyles>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={ <Home /> }></Route>
					<Route path="/sign-up" element={ <SignUp/> }></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
