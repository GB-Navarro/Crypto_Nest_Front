import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import GlobalStyles from "./globalStyles";

function App() {
	return (
		<>
			<GlobalStyles></GlobalStyles>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={ <Home /> }></Route>
					<Route path="/sign-up" element={ <SignUp/> }></Route>
					<Route path="/sign-in" element={ <SignIn/> }></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
