import { useState } from "react";
import Button from "../../components/Button/Button";
import AccountPreview from "../../components/AccountPreview/AccountPreview";
import { mockedAccounts } from "../../mock/accounts-mock";
import { useDispatch, useSelector } from "react-redux";
import {
	selectCurrentUser,
	selectIsLoading,
	selectError,
	setUser,
} from "../../features/userSlice";

import styles from "./Dashboard.module.scss";
import { editUserName } from "../../api/apiService";
import { selectCurrentToken } from "../../features/authSlice";

const Dashboard = () => {
	const [isEditingName, setIsEditingName] = useState(false);
	const [newFirstName, setNewFirstName] = useState("");
	const [newLastName, setNewLastName] = useState("");

	const dispatch = useDispatch();

	const token = useSelector(selectCurrentToken);
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);
	const userInfo = useSelector(selectCurrentUser);

	const handleOnClickSave = async () => {
		let res;

		if (newFirstName === "" && newLastName === "") {
			return;
		} else if (newFirstName === "" && newLastName !== "") {
			res = await editUserName(token, { lastName: newLastName });
		} else if (newLastName === "" && newFirstName !== "") {
			res = await editUserName(token, { firstName: newFirstName });
		} else {
			res = await editUserName(token, {
				firstName: newFirstName,
				lastName: newLastName,
			});
		}

		if (!res || res.status !== 200) {
			window.alert("There has been an error. Please, try again later");
		} else {
			dispatch(setUser(res.body));
		}
		setIsEditingName(false);
	};

	if (isLoading) {
		return <h1>Loading...</h1>;
	}
	if (error) {
		return <h1>There has been an error. Please, try again later</h1>;
	}
	return (
		<div className={styles.dashboard}>
			{isEditingName ? (
				<div className={styles.dashboard__header}>
					<h1>Welcome back</h1>
					<div className={styles.editNameInputs}>
						<input
							type="text"
							className={styles.editNameInput}
							placeholder={userInfo.firstName}
							value={newFirstName}
							onChange={(e) => setNewFirstName(e.target.value)}
						/>
						<input
							type="text"
							className={styles.editNameInput}
							placeholder={userInfo.lastName}
							value={newLastName}
							onChange={(e) => setNewLastName(e.target.value)}
						/>
					</div>
					<div className={styles.editNameActions}>
						<Button
							className={styles.editNameSave}
							text={"Save"}
							onClick={handleOnClickSave}
						/>
						<Button
							className={styles.editNameCancel}
							text={"Cancel"}
							onClick={() => setIsEditingName(false)}
						/>
					</div>
				</div>
			) : (
				<div className={styles.dashboard__header}>
					<h1>
						Welcome back <br /> {userInfo.firstName} {userInfo.lastName}!
					</h1>
					<Button
						className={styles.editNameBtn}
						text={"Edit Name"}
						onClick={() => setIsEditingName(true)}
					/>
				</div>
			)}
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
