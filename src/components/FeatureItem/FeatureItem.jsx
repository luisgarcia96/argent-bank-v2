import PropTypes from "prop-types";

import styles from "./FeatureItem.module.scss";

const FeatureItem = ({ title, description, imageName }) => {
	return (
		<div className={styles.featureItem}>
			<img
				className={styles.image}
				src={`${
					import.meta.env.VITE_PUBLIC_URL
				}/src/assets/img/icon-${imageName}.png`}
				alt={`Image-${imageName}`}
			/>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.description}>{description}</p>
		</div>
	);
};

export default FeatureItem;

FeatureItem.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	imageName: PropTypes.oneOf(["chat", "money", "security"]).isRequired,
};
