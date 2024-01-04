import PropTypes from "prop-types";

import styles from "./AccountPreview.module.scss";
import Button from "../Button/Button";

const AccountPreview = ({ accountTitle, balance, balanceDescription }) => {
	return (
		<div className={styles.accountPreview}>
			<div className={styles.accountPreview__left}>
				<div className={styles.accountTitle}>{accountTitle}</div>
				<div className={styles.accountBalance}>${balance}</div>
				<div className={styles.accountDescription}>{balanceDescription}</div>
			</div>
			<div className={styles.accountPreview__right}>
				<Button text="View transactions" onClick={() => {}} />
			</div>
		</div>
	);
};

export default AccountPreview;

AccountPreview.propTypes = {
	accountTitle: PropTypes.string.isRequired,
	balance: PropTypes.number.isRequired,
	balanceDescription: PropTypes.string.isRequired,
};
