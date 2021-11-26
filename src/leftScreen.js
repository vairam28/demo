import React from "react";
import Grid from '@mui/material/Grid';
import { withStyles } from "@mui/styles";
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import InstagramIcon from '@mui/icons-material/Instagram';


const styles = (theme) => ({
    backGrou: {
        background: "#f7f7f9",
        minHeight: "100%"
    },
    card_: {
        padding: "20px 0px",
        "& .css-et1ao3-MuiTypography-root": {
            fontSize: "15px",
            fontWeight: 600
        },
        // "& .css-83ijpv-MuiTypography-root": {
        //     color: "blue"
        // }
    },
    text: {
        fontSize: "30px",
        marginTop: "80px",
        fontWeight: "600",
    },
    accessText: {
        fontSize: "30px",
        marginTop: "44px",
        fontWeight: 600
    },
    subtext: {
        fontSize: "16px",
        marginTop: "20px",
    },
    character: {
        fontSize: "16px",
        color: "grey"
    },
    pass: {
        width: "100%",
        "& .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root": {
            borderRadius: "10px",
            marginTop: "16px",
            marginBottom: "30px",
            backgroundColor: "white",
        },
        "& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
            backgroundColor: "white",
            borderRadius: "10px",

        }
    },
    account: {

        "& .css-sghohy-MuiButtonBase-root-MuiButton-root": {
            fontSize: "14px",
            textTransform: "initial",
            borderRadius: "8px",
            // padding: "4px 50px",
            backgroundColor: "#6e46e7",
            // justifyContent: "flex-end",
            width: "200px",
            height: "40px",
        }
    },
    violet: {
        justifyContent: "flex-end",
    }

});

class LeftScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            showPassword: false,
        };
    }

    handleChange = (event, key) => {
        this.setState({ ...this.state, [key]: event.target.value });
    };


    handleClickShowPassword = () => {
        this.setState({
            ...this.state, showPassword: !this.state.showPassword
        });
    };

    handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    render() {
        const { classes } = this.props;
        return (
            <Grid container spacing={2} className={classes.backGrou}>
                <Grid item xs={1} md={2}>
                </Grid>
                <Grid item xs={10} md={8}>
                    <Typography variant="h3" className={classes.text}>
                        My Orders
                    </Typography>
                    {/* CARD */}
                    {/* <Card sx={{ maxWidth: 345 }}> */}
                    <CardHeader className={classes.card_}
                        avatar={
                            <Avatar aria-label="recipe">
                                R
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <ArrowForwardIcon />
                            </IconButton>
                        }
                        title="Wireframing Kit for Figma"
                        subheader="The Basic kit"
                    />
                    {/* </Card> */}
                    {/* Acccess */}
                    <Typography variant="h3" className={classes.accessText}>
                        Access this later?
                    </Typography>
                    <Typography variant="subtitle1" className={classes.subtext}>
                        Enter a password below to create a Lemon Squeezy account.
                        Keep track of orders and access downloads at any time.
                    </Typography>

                    {/* PASSWORD */}
                    <FormControl variant="outlined" className={classes.pass}>
                        {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.password}
                            placeholder={"password"}
                            onChange={(e) => this.handleChange(e, "password")}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={this.handleClickShowPassword}
                                        onMouseDown={this.handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        //label="Password"
                        />
                    </FormControl>

                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="caption" className={classes.character}>
                                8 characters minimum
                            </Typography>
                        </Grid>
                        <Grid item xs={6} className={classes.account}>
                            <Stack spacing={2} direction="row" className={classes.violet}>
                                <Button variant="contained">Create Account</Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1} md={2}>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(LeftScreen);