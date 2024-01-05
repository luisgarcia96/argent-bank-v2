import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	loginUser,
	selectCurrentToken,
	setCredentials,
} from "../../features/authSlice";
import Button from "../../components/Button/Button";

import styles from "./Login.module.scss";
import { fetchUserInfo } from "../../features/userSlice";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);

	const navigate = useNavigate();

	const token = useSelector(selectCurrentToken);
	const dispatch = useDispatch();

	const handleLogin = () => {
		const userCredentials = {
			email,
			password,
		};
		const response = dispatch(loginUser(userCredentials));

		if (response?.body?.token) { //TODO Ask if this is redundant. Is it done already in the slice?
			console.log("HERE");
			dispatch(setCredentials(response.body.token));
		}
	};

	useEffect(() => {
		if (token) {
			//Get user data
			const response = dispatch(fetchUserInfo(token));
			if (response?.body) { //TODO Ask if this is redundant too. Is it done already in the slice?
				console.log("YESSS", response.body);
			}

			navigate("/user");
		}
	}, [token, navigate, dispatch]);

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
