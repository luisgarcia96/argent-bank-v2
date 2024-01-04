import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/authSlice";
import Button from "../../components/Button/Button";

import styles from "./Login.module.scss";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);

	const dispatch = useDispatch();

	const handleLogin = () => {
		const userCredentials = {
			email,
			password,
		};
		const response = dispatch(loginUser(userCredentials));
		if (response) {
			localStorage.setItem("token", response?.body.token);
		}
	};

	return (
		<div className={styles.login}>
			<div className={styles.login__container}>
				<i className="fa-solid fa-circle-user"></i>
				<h1>Sign in</h1>

				<div className={styles.login__input}>
					<label htmlFor="">Email</label>
					<input
						type="text"
						placeholder=""
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className={styles.login__input}>
					<label htmlFor="">Password</label>
					<input
						type="password"
						placeholder=""
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className={styles.login__rememberMe}>
					<input
						type="checkbox"
						checked={rememberMe}
						onChange={() => setRememberMe(!rememberMe)}
					/>
					<p>Remember me</p>
				</div>
				<Button
					className={styles.login__button}
					text="Sign In"
					onClick={handleLogin}
				/>
			</div>
		</div>
	);
};

export default Login;
