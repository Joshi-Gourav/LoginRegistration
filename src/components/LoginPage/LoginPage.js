import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { HiArrowNarrowRight } from "react-icons/hi";
import "./loginPage.css";

const LoginPage = () => {
    return (
        <div className="newMainRegisterationPage">
            <div className="newLeftSideVerticalNavSection">
                <div>
                    <h2 className="heading">Risk-centered</h2>
                    <p className="subHeading">Vulnerability Management</p>
                </div>
                <div>
                    <h2 className="footerHeading">Security Workflows</h2>
                    <p className="footerPara">Create and run playbooks to integrate<br />security into your CI/CD pipeline.</p>
                </div>
            </div>
            <div className="newRightSideInputSection">
                <div className="registerationHeading">
                    <h2 className="brandLogo">strobes</h2>
                    <h2 className="pageHeading">Login</h2>
                    <p className="pagesubHeading">Dont u  have an account? <span><a href="#">Register now</a></span></p>
                </div>
                <div>
                    <label>Enter your strobes id: </label><br /><br />
                    <TextField
                        required
                        id="filled-required"
                        label="Email"
                        defaultValue="john.doe@example.com"
                        variant="filled"
                    />
                    <br />
                    <Button className="newb" variant="contained" color="primary">
                        Continue <HiArrowNarrowRight />
                    </Button>
                    <div className="forgotPass">
                        <div>
                            <input type="checkbox" id="ForgotPassword" name="ForgotPassword" value="Remember me" />
                            <label for="ForgotPassword">Remember me</label>
                        </div>
                        <a href="#">Forgot Password</a>
                    </div>
                    <div className="newLog">
                        <a className="AltLogin" href="#">Alternate Login</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LoginPage
