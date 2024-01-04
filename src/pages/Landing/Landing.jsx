import FeatureItem from "../../components/FeatureItem/FeatureItem";
import Hero from "../../components/Hero/Hero";

import styles from "./Landing.module.scss";

const Landing = () => {
	return (
		<div className={styles.landing}>
			<Hero />
			<div className={styles.features}>
				<FeatureItem
					title="You are our #1 priority"
					description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
					imageName="chat"
				/>
				<FeatureItem
					title="More savings means higher rates"
					description="The more you save with us, the higher your interest rate will be!"
					imageName="money"
				/>
				<FeatureItem
					title="Security you can trust"
					description="We use top of the line encryption to make sure your data and money is always safe."
					imageName="security"
				/>
			</div>
		</div>
	);
};

export default Landing;
