import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ user, children, redirectLink = "/login" }) => {
	if (!user) {
		return <Navigate to={redirectLink} replace />;
	}

	return children;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
	user: PropTypes.object,
	children: PropTypes.element.isRequired,
	redirectLink: PropTypes.string,
};
