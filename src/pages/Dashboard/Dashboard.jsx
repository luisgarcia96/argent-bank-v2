import Button from "../../components/Button/Button";
import AccountPreview from "../../components/AccountPreview/AccountPreview";
import { useSelector } from "react-redux";
import {
	selectCurrentUser,
	selectIsLoading,
	selectError,
} from "../../features/userSlice";

import styles from "./Dashboard.module.scss";

const Dashboard = () => {
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);
	const userInfo = useSelector(selectCurrentUser);

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

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	if (error) {
		return <h1>There has been an error. Please, try again later</h1>;
	}

	return (
		<div className={styles.dashboard}>
			<div className={styles.dashboard__header}>
				<h1>
					Welcome back <br /> {userInfo.firstName} {userInfo.lastName}!
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
