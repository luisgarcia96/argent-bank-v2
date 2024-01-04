import { Link } from "react-router-dom";
import Logo from "../../assets/img/argentBankLogo.png";

import styles from "./Header.module.scss";

const Header = () => {
	return (
		<header className={styles.header}>
			<Link to="/">
				<img className={styles.header__logo} src={Logo} alt="logo" />
			</Link>

			<div className={styles.header__signIn}>
				<i className="fa-solid fa-circle-user"></i>
				<Link to="/login">Sign In</Link>
			</div>
		</header>
	);
};

export default Header;
