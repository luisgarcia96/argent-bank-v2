import Button from "../../components/Button/Button";
import AccountPreview from "../../components/AccountPreview/AccountPreview";
import { mockedAccounts } from "../../mock/accounts-mock";
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
				{mockedAccounts.map((account, index) => (
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
