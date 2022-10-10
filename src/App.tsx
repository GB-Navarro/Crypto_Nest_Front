import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import GlobalStyles from "./globalStyles";
import Coins from "./pages/Coins/Coins";
import Coin from "./pages/Coin/Coin";

function App() {
	return (
		<>
			<GlobalStyles></GlobalStyles>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={ <Home /> }></Route>
					<Route path="/sign-up" element={ <SignUp/> }></Route>
					<Route path="/sign-in" element={ <SignIn/> }></Route>
					<Route path="/user" element={ <User/> }></Route>
					<Route path="/coins" element={ <Coins/> }></Route>
					<Route path="/coin/:id" element={ <Coin/>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
