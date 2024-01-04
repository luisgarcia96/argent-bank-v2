import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../features/authSlice";
import Logo from "../../assets/img/argentBankLogo.png";

import styles from "./Header.module.scss";

const Header = () => {
	const navigate = useNavigate();
	const { token } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	//Handle Logout
	const handleLogout = () => {
		dispatch(logOut());
		navigate("/login");
	};

	return (
		<header className={styles.header}>
			<Link to="/">
				<img className={styles.header__logo} src={Logo} alt="logo" />
			</Link>

			<div className={styles.header__signIn}>
				<i className="fa-solid fa-circle-user"></i>
				{token && <Link to="/user">My Account</Link>}
				{token && <span onClick={handleLogout}>Sign Out</span>}
				{!token && <Link to="/login">Sign In</Link>}
			</div>
		</header>
	);
};

export default Header;
