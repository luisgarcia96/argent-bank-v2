import PropTypes from "prop-types";

import styles from "./Button.module.scss";

const Button = ({ onClick, text, className }) => {
	return (
		<button className={`${styles.button} ${className}`} onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
	className: PropTypes.string,
};
