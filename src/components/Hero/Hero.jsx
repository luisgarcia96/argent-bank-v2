import styles from "./Hero.module.scss";

const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className={styles.hero__content}>
				<div className={styles.heroTitle}>
					<h2>No fees.</h2>
					<h2>No minimum deposit.</h2>
					<h2>High interest rates.</h2>
				</div>
				<div className={styles.heroSubtitle}>
					<p>Open a savings account with Argent Bank today!</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
