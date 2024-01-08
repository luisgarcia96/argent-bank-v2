import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/authSlice";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children, redirectLink = "/login" }) => {
	const token = useSelector(selectCurrentToken);

	if (!token) {
		return <Navigate to={redirectLink} replace />;
	}

	return children;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
	children: PropTypes.element.isRequired,
	redirectLink: PropTypes.string,
};
