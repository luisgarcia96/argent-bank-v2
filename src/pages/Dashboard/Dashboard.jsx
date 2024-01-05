import PropTypes from "prop-types";
import Button from "../../components/Button/Button";
import AccountPreview from "../../components/AccountPreview/AccountPreview";

import styles from "./Dashboard.module.scss";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../features/authSlice";
import { Navigate } from "react-router-dom";

const Dashboard = ({ user }) => {
	const token = useSelector(selectCurrentToken);

	const accounts = [
		{
			accountTitle: "Argent Bank Checking (x8349)",
			balance: 2082.79,
			balanceDescription: "Available Balance",
		},
		{
			accountTitle: "Argent Bank Savings (x6712)",
			balance: 10928.42,
			balanceDescription: "Available Balance",
		},
		{
			accountTitle: "Argent Bank Credit Card (x8349)",
			balance: 184.3,
			balanceDescription: "Current Balance",
		},
	];

	// useEffect(() => {
	// 	if (!token) {
	// 		return <Navigate to="/login" />;
	// 	}
	// }, [token]);

	useEffect(() => {
		console.log("Dashboard info", user);
	}, [user]);

	return (
		<div className={styles.dashboard}>
			<div className={styles.dashboard__header}>
				<h1>
					Welcome back <br /> {user.firstName} {user.lastName}!
				</h1>
				<Button
					className={styles.editNameBtn}
					text={"Edit Name"}
					onClick={() => {}}
				/>
			</div>
			<div className={styles.dashboard__accounts}>
				{accounts.map((account, index) => (
					<AccountPreview
						key={index}
						accountTitle={account.accountTitle}
						balance={account.balance}
						balanceDescription={account.balanceDescription}
					/>
				))}
			</div>
		</div>
	);
};

export default Dashboard;

Dashboard.propTypes = {
	user: PropTypes.object,
};
