import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Typography } from "@mui/material";
import OTPInput from "otp-input-react";
import { useEffect, useState } from 'react';
import classes from "./otpform.module.css";

const OTPForm = ({ phoneNumber, setShowOtpForm, closeAuthDrawer }) => {
	// Manages OTP entered by the user
	const [OTP, setOTP] = useState("");

	// State which disables/enables Login button
	const [disableButton, setDisableButton] = useState(true);

	useEffect(() => {
		if (OTP.length === 4) {
			setDisableButton(false);
		} else {
			setDisableButton(true);
		}
	}, [OTP])

	// Submit form handler
	const submitFormHandler = () => {
		closeAuthDrawer(true);
	}

	const onBackArrowOrEditClickHandler = () => {
		setShowOtpForm(false);
	}

	const handleResendOtpHandler = () => {
		console.log('Resend OTP...')
	}

	return (
		<>
			<div className={classes['modal-header']}>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					<span>
						<ArrowBackIcon fontSize="medium" sx={{ marginBottom: '3px', mr: 2 }} onClick={onBackArrowOrEditClickHandler} />
					</span>
					Please login to continue
				</Typography>
			</div>
			<div className={classes.title}>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					Enter verification code
			</Typography>
			</div>
			<div className={classes.content}>
				<p>We have sent you a 4 digit OTP</p>
				<p>on {phoneNumber} <span className={classes["edit-link"]} onClick={onBackArrowOrEditClickHandler}>Edit</span></p>
			</div>
			<div className={classes.otp}>
				<OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} />
			</div>
			<div className={classes["resend-otp-link"]} onClick={handleResendOtpHandler}>Resend OTP</div>
			<div>
				<Button fullWidth disabled={disableButton} size="large" variant="contained" onClick={submitFormHandler}>Login</Button>
			</div>
		</>
	);
}

export default OTPForm;