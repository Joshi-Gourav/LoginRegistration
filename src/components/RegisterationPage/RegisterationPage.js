import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { HiArrowNarrowRight } from "react-icons/hi";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import "./registerationPage.css";


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


const RegisterationPage = () => {
    const classes = useStyles();
    return (
        <div className="mainRegisterationPage">
            <div className="leftSideVerticalNavSection">
                <div>
                <h2 className="heading">Risk-centered</h2>
                <span className="subHeading">Vulnerability Management</span>
                </div>
                <div>
                    <h2 className="footerHeading">Security Workflows</h2>
                    <p className="footerPara">Create and run playbooks to integrate<br />security into your CI/CD pipeline.</p>
                </div>
            </div>
            <div className="rightSideInputSection">
                <div className="registerationHeading">
                    <h2 className="brandLogo">strobes</h2>
                    <h2 className="pageHeading">Register</h2>
                    <p className="pagesubHeading">Already have an account? <span><a href="#">Login</a></span></p>
                </div>
                <div>
                    <TextField
                        required
                        id="filled-required"
                        label="First Name"
                        defaultValue="Hello World"
                        variant="filled"
                    />
                    <TextField
                        required
                        id="filled-required"
                        label="Last Name"
                        defaultValue="Hello World"
                        variant="filled"
                    />
                    <br />
                    <TextField
                        required
                        id="filled-required"
                        label="Company"
                        defaultValue="Hello World"
                        variant="filled"
                    />
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel defaultValue="Hello World" htmlFor="filled-age-native-simple">I am a</InputLabel>
                        <Select
                            native
                            // value={state.age}
                            // onChange={handleChange}
                            inputProps={{
                                name: 'age',
                                id: 'filled-age-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                    </FormControl>
                    <br />
                    <TextField
                        required
                        id="filled-required"
                        label="Email"
                        defaultValue="Hello World"
                        variant="filled"
                    />
                    <FormControl variant="filled">
                        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                        <FilledInput
                            id="filled-adornment-password"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        edge="end"
                                    >
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>


                    <br />

                    <Button variant="contained" color="primary">
                        Continue to your free account <HiArrowNarrowRight />
                    </Button>
                </div>



            </div>
        </div >
    )
}

export default RegisterationPage







