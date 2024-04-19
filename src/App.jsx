import "./App.css";
import Signup from "./components/fcomponents/Signup";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Users from "./components/fcomponents/Users";
import SigninComp from "./components/fcomponents/SignIn";
import Details from "./components/fcomponents/Details";
import Navlinks from "./components/fcomponents/Navlinks";
export const rt = [
	{
		path: "",
		element: (
			<div
				className="container d-flex align-items-center justify-content-center bg-success"
				style={{ minHeight: "100vh" }}
			>
				<SigninComp />
			</div>
		),
	},
	{
		path: "login",
		element: (
			<div
				className="container d-flex align-items-center justify-content-center bg-success"
				style={{ minHeight: "100vh" }}
			>
				<SigninComp />
			</div>
		),
	},
	{
		path: "register",
		element: (
			<div
				className="container d-flex align-items-center justify-content-center bg-success"
				style={{ minHeight: "100vh" }}
			>
				<Signup />
			</div>
		),
	},
	{
		path: "post",
		element: <Details />,
	},
	{
		path: "users",
		element: <Users />,
	},
];
function App() {
	const routes = createBrowserRouter([
		{
			path: "",
			element: <Navlinks />,
			children: rt,
		},
	]);

	return (
		<Provider store={store}>
			<RouterProvider router={routes} />
		</Provider>
	);
}

export default App;
