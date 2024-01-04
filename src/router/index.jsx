import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Landing from "../pages/Landing/Landing";
import Dashboard from "../pages/Dashboard/Dashboard";
import NotFound from "../pages/NotFound/NotFound";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/login" element={<Login />} />
			<Route path="/user" element={<Dashboard />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default AppRouter;
