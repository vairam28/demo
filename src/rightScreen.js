import React from "react";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { withStyles } from "@mui/styles";
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ClearIcon from '@mui/icons-material/Clear';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import DeleteIcon from '@mui/icons-material/Delete';
import LocalFloristSharpIcon from '@mui/icons-material/LocalFloristSharp';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import DoneIcon from '@mui/icons-material/Done';
import Box from '@mui/material/Box';

//DRAWER COMPONENT
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { styled, useTheme } from '@mui/material/styles';
const styles = (theme) => ({
    flex_: {
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
    },
    icon: {
        justifyContent: "center",
        marginTop: "70px",

        "& .css-8h65ya-MuiAvatar-root": {
            backgroundColor: "#000000",
        }
    },
    text: {
        fontSize: "30px",
        marginTop: "32px",
        fontWeight: "600",
        textAlign: "center",
    },
    status: {
        display: "flex",
        alignItems: "center",
        justifyContent: "right",
        padding: "0px 10px 20px 0px",
        "& .css-mhc70k-MuiGrid-root>.MuiGrid-item": {
            paddingTop: "30px",
        }
    },

    // stats: {
    //     fontWeight: 600,
    //     fontSize: "16px",
    // },
    stats: {
        fontWeight: "600",
        fontSize: "14px",
        lineHeight: "none",
        "& .css-ati914-MuiTypography-root": {
            lineHeight: "0",
        }
    },
    date: {
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        padding: "0px 0px 20px 10px",

    },
    order: {
        backgroundColor: "#f5f5f5",
    },
    card_: {
        padding: "20px 0px",
        "& .css-et1ao3-MuiTypography-root": {
            fontSize: "15px",
            fontWeight: 600
        },
        "& .css-10wpov9-MuiTypography-root": {
            paddingRight: "26px"
        }
        // "& .css-83ijpv-MuiTypography-root": {
        //     color: "blue"
        // }
    },
    subs: {
        marginBottom: "10px",
    },
    discount: {
        display: "flex",
    },
    pizza: {
        padding: "0px 12px",
        fontWeight: "600",
        backgroundColor: '#f5f5f5',
        marginLeft: "12px",
        borderRadius: "10px",
        fontSize: "14px",
    },
    files: {
        display: "flex",
        backgroundColor: '#f5f5f5',
        marginTop: "15px",
        fontWeight: "600",
        fontSize: "14px",
    },
    activate: {
        display: "flex",
        backgroundColor: '#f5f5f5',
        marginTop: "15px",
        fontWeight: "600",
        fontSize: "16px",
    },
    active: {
        backgroundColor: '#f5f5f5',
        marginTop: "15px",
        fontSize: "14px",
        "& .css-ahj2mt-MuiTypography-root": {
            fontWeight: "600",
        }
    },
    two: {
        padding: "0px 5px",
    },
    fig: {
        marginTop: "10px",
        marginBottom: "10px",
    },
    pads: {
        backgroundColor: '#f5f5f5',
        padding: "12px 20px",
        fontWeight: 600,
    },
    mb: {
        fontSize: "13px",
    },
    account: {
        "& .css-sghohy-MuiButtonBase-root-MuiButton-root": {
            fontSize: "14px",
            textTransform: "initial",
            borderRadius: "10px",
            padding: "6px 50px",
            backgroundColor: "#6e46e7",
        }
    },
    mail: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "-20px",
    },
    visa: {
        fontSize: "11px",
    },
    email: {
        fontWeight: 600,
        fontSize: "16px",
    },
    invoice: {
        fontWeight: 600,
        fontSize: "16px",
        backgroundColor: '#eeeeee',
        padding: "12px 20px",
        textAlign: "center",
        marginTop: "26px",
    },
    // lemon: {
    //     marginTop: "10px",
    //     marginBottom: "20px",
    // },
    flower: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10px",
        marginBottom: "20px",
    },
    common: {
        marginTop: "40px",
        marginBottom: "10px",
    },
    statusdate: {
        paddingTop: "30px",
    },


    details: {
        fontSize: "30px",
        marginTop: "30px",
        fontWeight: "600",
    },
    clear: {
        marginTop: "30px",

    },
    statusing: {
        display: "flex",
        justifyContent: "flex-start",
        marginTop: "28px",
        alignItems: "center",
    },
    copy: {
        padding: "6px 12px",
        fontWeight: 600,
        backgroundColor: "#f5f5f5",
        borderRadius: "10px",
    },
    key: {
        FontSize: "14px",
        fontWeight: 600,
        paddingTop: "9px",
        "& .css-ahj2mt-MuiTypography-root": {
            FontSize: "14px",
        }
    },
    generate: {
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        "& .css-sghohy-MuiButtonBase-root-MuiButton-root": {
            fontSize: "14px",
            fontWeight: "600",
            textTransform: "initial",
            borderRadius: "8px",
            padding: "5px 35px 5px 28px",
            backgroundColor: "#f5f5f5",
            color: "Black",
            marginTop: "38px",
            boxShawdow: "none",
        }
    },
    log: {
        marginTop: "10px",
    },
    dots: {
        height: "7px",
        width: "7px",
        backgroundColor: "#38cc79",
        borderRadius: "50%",
        display: "inline-block",
    },
    red: {
        height: "7px",
        width: "7px",
        backgroundColor: "#f66086",
        borderRadius: "50%",
        display: "inline-block",
    },
    ipads: {
        paddingLeft: "20px",
        fontWeight: "600",
        fontSize: "14px",
        lineHeight: "none",
        "& .css-ati914-MuiTypography-root": {
            lineHeight: "0",
        }
    },
    eva: {
        display: "flex",
        alignItems: "center",
    },
    sep: {
        fontSize: "13px",
        paddingLeft: "16px",
    },
    // pads: {
    //     backgroundColor: '#eeeeee',
    //     padding: "12px 26px",
    //     fontWeight: 600,
    // },
    delete: {
        display: "flex",
        alignItems: "center",
    },
    act: {
        height: "7px",
        width: "7px",
        backgroundColor: "#38cc79",
        borderRadius: "50%",
        display: "inline-block",
        marginLeft: "12px",
    },
    limit: {
        alignItems: "center",
    },
    five: {
        paddingLeft: "4px",
    },
    three: {
        paddingLeft: "11px",
    },
    grandTotal: {
        paddingLeft: "8px",
        fontWeight: "600",
        fontSize: "14px",
        lineHeight: "none",
        "& .css-ati914-MuiTypography-root": {
            lineHeight: "0",
        }
    },
    activity: {
        fontWeight: "600",
        fontSize: "16px",
        //     "& .css-ati914-MuiTypography-root": {
        //         lineHeight: "0",
        // }
    },
    number: {
        fontWeight: 600,
        paddingTop: "9px",
        fontSize: "14px",
        // "& .css-ahj2mt-MuiTypography-root": {
        //     FontSize: "14px",
        // }
        "& .css-ahj2mt-MuiTypography-root": {
            fontSize: "14px",
        }
    },
    data: {
        display: "flex",
        alignItems: "center",
    },
    oct: {
        marginLeft: "10px",
    },
    dotsss: {
        height: "7px",
        width: "7px",
        backgroundColor: "#38cc79",
        borderRadius: "50%",
        display: "inline-block",
        marginLeft: "10px",
    },
    shawdow: {
        // border: "none",
        // boxShawdow:"none",
        "& .css-1elwnq4-MuiPaper-root-MuiAccordion-root": {
            boxShawdow:"none",
        }
    },
    grey: {
        "& .css-11qr2p8-MuiButtonBase-root-MuiButton-root": {
            fontSize: "14px",
            textTransform: "initial",
            borderRadius: "8px",
            // padding: "4px 50px",
            backgroundColor: "#f5f5f5",
            // justifyContent: "flex-end",
            width: "64px",
            height: "40px",
            color: "black",
            fontWeight: "600",
            boxShawdow: "none",
        }
    },
    wire:{
        alignItems:"center",
        marginBottom:"10px",
    },
    read:{
        alignItems:"center",
    },
});

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));
class RightScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }
    handleDrawerOpen = () => {
        this.setState({ ...this.state, open: true })
    }

    handleDrawerClose = () => {
        this.setState({ ...this.state, open: false })
    }

    render() {
        const { classes } = this.props;
        return (
            <>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={1} md={2}>
                        </Grid>
                        <Grid item xs={10} md={8}>
                            <Stack direction="row" spacing={2} className={classes.icon}>
                                <Avatar
                                    alt="P"
                                    src=".\Dashboard\my-app\.jpg"
                                    sx={{ width: 56, height: 56 }}
                                />
                            </Stack>
                            <Typography variant="h3" className={classes.text}>
                                Order #1021
                            </Typography>
                            <Grid container spacing={2} className={classes.statusdate}>
                                <Grid item xs={6} className={classes.status}>
                                    <Typography variant="subtitle2" className={classes.stats}>
                                        Status:
                                    </Typography>
                                    <IconButton aria-label="settings">
                                        <DoneIcon />
                                    </IconButton>
                                    <Typography variant="subtitle2" className={classes.paid}>
                                        Paid
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} className={classes.date}>
                                    <Typography variant="subtitle2" className={classes.stats}>
                                        Date:
                                    </Typography>
                                    <Typography variant="subtitle2" className={classes.paid}>
                                        1 Oct, 14:42
                                    </Typography>
                                </Grid>
                            </Grid>
                            <div>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className={classes.order}
                                    >
                                        <Typography variant="subtitle2" className={classes.stats}>Order Summary</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className={classes.shawdow}>
                                            <CardHeader className={classes.card_}
                                                avatar={
                                                    <Avatar aria-label="recipe">
                                                        R
                                                    </Avatar>
                                                }
                                                action={
                                                    <Typography variant="subtitle1">
                                                        $19.99
                                                    </Typography>
                                                }
                                                title="Wireframing Kit for Figma"
                                                subheader="The Basic kit"
                                            />
                                        </Typography>
                                        <Grid container spacing={2} className={classes.subs}>
                                            <Grid item xs={9} sm={10} md={10}>
                                                <Typography variant="subtitle1">
                                                    Subtotal
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3} sm={2} md={2}>
                                                <Typography variant="subtitle1">
                                                    $19.99
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={2} className={classes.subs}>
                                            <Grid item xs={9} sm={10} md={10} className={classes.discount}>
                                                <Typography variant="subtitle1">
                                                    Discount
                                                </Typography>
                                                <Typography variant="subtitle1" className={classes.pizza}>
                                                    PIZZA20
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3} sm={2} md={2}>
                                                <Typography variant="subtitle1" className={classes.five}>
                                                    -$5.00
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={2} className={classes.subs}>
                                            <Grid item xs={9} sm={10} md={10} >
                                                <Typography variant="subtitle1">
                                                    VAT (20%)
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3} sm={2} md={2}>
                                                <Typography variant="subtitle1" className={classes.three}>
                                                    $3.00
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={2} className={classes.subs}>
                                            <Grid item item xs={9} sm={10} md={10}>
                                                <Typography variant="subtitle1" className={classes.stats}>
                                                    Total
                                                </Typography>
                                            </Grid>
                                            <Grid item item xs={3} sm={2} md={2}>
                                                <Typography variant="subtitle1" className={classes.grandTotal}>
                                                    $17.99
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className={classes.files}
                                    >
                                        <Typography className={classes.stats}>Files</Typography>
                                        <Typography className={classes.two}>(2)</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <Grid container spacing={2} className={classes.wire}>
                                                <Grid item xs={1} sm={2} md={2} className={classes.grey}>
                                                    <Box>
                                                        <div>
                                                            <Button variant="contained" size="small">
                                                                .fig
                                                            </Button>
                                                        </div>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={6} sm={7} md={7}>
                                                    <Typography variant="subtitle1" className={classes.stats}>
                                                        wireframing-kit-for-figma.fig
                                                    </Typography>
                                                    <Typography variant="subtitle1" className={classes.mb}>
                                                        8.3MB
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={5} sm={3} md={3}>
                                                    <Stack spacing={2} direction="row" className={classes.account}>
                                                        <Button variant="contained">Download</Button>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </Typography>
                                        <Typography>
                                            <Grid container spacing={2} className={classes.read}>
                                                <Grid item xs={1} sm={2} md={2} className={classes.grey}>
                                                    <Box>
                                                        <div>
                                                            <Button variant="contained" size="small">
                                                                .txt
                                                            </Button>
                                                        </div>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={6} sm={7} md={7}>
                                                    <Typography variant="subtitle1" className={classes.stats}>
                                                        Readme.txt
                                                    </Typography>
                                                    <Typography variant="subtitle1" className={classes.mb}>
                                                        156KB
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={5} sm={3} md={3}>
                                                    <Stack spacing={2} direction="row" className={classes.account}>
                                                        <Button variant="contained">Download</Button>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className={classes.files}
                                    >
                                        <Typography className={classes.stats}>Licenses</Typography>
                                        <Typography className={classes.two}>(1)</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div style={{ cursor: "pointer" }} onClick={() => this.handleDrawerOpen()}>
                                                <CardHeader className={classes.card_}
                                                    avatar={
                                                        <Avatar aria-label="recipe">
                                                            R
                                                        </Avatar>
                                                    }
                                                    action={
                                                        <IconButton aria-label="settings">
                                                            <MoreHorizIcon />
                                                        </IconButton>
                                                    }
                                                    title="BADAA81E-D3E64CE2-B5838E50-C9C2F6C0"
                                                    subheader={
                                                        <div className={classes.data}>
                                                            <div>Expires on 1 Oct 2021</div>
                                                            <Typography className={classes.dotsss}>
                                                            </Typography>
                                                            <div className={classes.oct}>Active (1/5)</div>
                                                        </div>}
                                                />
                                            </div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        className={classes.files}
                                    >
                                        <Typography className={classes.stats}>Timeline</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <Grid container spacing={2} className={classes.fig}>
                                                <Grid item xs={2} sm={2} md={2}>
                                                    <IconButton aria-label="settings">
                                                        <SendTwoToneIcon />
                                                    </IconButton>
                                                </Grid>
                                                <Grid item xs={4} sm={4} md={4}>
                                                    <Typography variant="subtitle1" className={classes.stats}>
                                                        Email receipt sent
                                                    </Typography>
                                                    <Typography variant="subtitle1" className={classes.mb}>
                                                        1 Oct 2020, 14:43
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={6} sm={6} md={6} className={classes.mail}>
                                                    {/* <Grid container spacing={2} className={classes.fig}>
                                                        <Grid item xs={2} sm={2} md={2}>
                                                        </Grid>
                                                        <Grid item xs={2} sm={2} md={2}>
                                                        </Grid>
                                                    </Grid> */}
                                                    <IconButton aria-label="settings">
                                                        <ArrowForwardIcon />
                                                    </IconButton>
                                                    <Typography variant="subtitle1" className={classes.email}>
                                                        emailaddress@email.com
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={2} className={classes.fig}>
                                                <Grid item xs={2} sm={2} md={2}>
                                                    <IconButton aria-label="settings">
                                                        <DoneIcon />
                                                    </IconButton>
                                                </Grid>
                                                <Grid item xs={6} sm={7} md={7}>
                                                    <Typography variant="subtitle1" className={classes.stats}>
                                                        Order created
                                                    </Typography>
                                                    <Typography variant="subtitle1" className={classes.mb}>
                                                        1 Oct 2020, 14:42
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4} sm={3} md={3}>
                                                    <Typography variant="subtitle1" className={classes.stats}>
                                                        + $17.99
                                                    </Typography>
                                                    <Typography variant="subtitle1" className={classes.visa}>
                                                        VISA *5545
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <Grid container spacing={2}>
                                <Grid item xs={3}>
                                </Grid>
                                <Grid item xs={6}>
                                    <Stack spacing={2} direction="row" className={classes.generate}>
                                        <Button variant="contained">Generate Invoice</Button>
                                    </Stack>
                                </Grid>
                                <Grid item xs={3}>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} className={classes.common}>
                                <Grid item xs={2}>
                                </Grid>
                                <Grid item xs={8} className={classes.flower}>
                                    <IconButton aria-label="settings">
                                        <LocalFloristSharpIcon />
                                    </IconButton>
                                    <Typography variant="subtitle2" className={classes.lemon}>
                                        Powered by Lemon Squeezy
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={1} md={2}>
                        </Grid>
                    </Grid>
                </div>
                <div>
                    {/* DRAWER */}
                    <Drawer
                        sx={{
                            width: 600,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: 600,
                            },
                        }}
                        variant="persistent"
                        anchor="right"
                        open={this.state.open}
                    >
                        <Divider />
                        {/* <DrawerComponent /> */}

                        <div>
                            <Grid container spacing={2}>
                                <Grid item xs={1}>
                                </Grid>
                                <Grid item xs={10}>
                                    <Grid container spacing={2}>
                                        {/* <Grid item xs={1}>
                            </Grid> */}
                                        <Grid item xs={11}>
                                            <Typography variant="h3" className={classes.details}>
                                                License Details
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <IconButton aria-label="settings" className={classes.clear} onClick={() => this.handleDrawerClose()}>
                                                <ClearIcon />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2} className={classes.limit}>
                                        <Grid item xs={4} className={classes.statusing}>
                                            <Typography variant="subtitle2" className={classes.stats}>
                                                Status:
                                            </Typography>
                                            <IconButton aria-label="settings">
                                                <DoneIcon />
                                            </IconButton>
                                            <Typography variant="subtitle2" className={classes.paid}>
                                                Active
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4} className={classes.statusing}>
                                            <Typography variant="subtitle2" className={classes.stats}>
                                                Expiry:
                                            </Typography>
                                            <Typography variant="subtitle2" className={classes.paid}>
                                                27 Feb,2021
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4} className={classes.statusing}>
                                            <Typography variant="subtitle2" className={classes.stats}>
                                                Limit:
                                            </Typography>
                                            <IconButton aria-label="settings">
                                                <AllInclusiveIcon />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                    <div>
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                className={classes.active}
                                            >
                                                <Typography>License Key</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={10}>
                                                        <Typography className={classes.number}>
                                                            BADAA81E-D3E64CE2-B5838E50-C9C2F6C0
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={2}>
                                                        <Typography className={classes.copy}>
                                                            Copy
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </AccordionDetails>
                                        </Accordion>
                                    </div>
                                    <div>
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                className={classes.activate}
                                            >
                                                <Typography className={classes.activity}>Activations</Typography>
                                                <Typography className={classes.two}>(2)</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    <Grid container spacing={2} className={classes.fig}>
                                                        <Grid item xs={2}>
                                                            <Typography variant="subtitle1" className={classes.pads}>
                                                                1
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <div className={classes.delete}>
                                                                <Typography variant="subtitle1" className={classes.stats}>
                                                                    Eva's iPhone
                                                                </Typography>
                                                                <Typography className={classes.act}>
                                                                </Typography>
                                                            </div>
                                                            <Typography variant="subtitle1" className={classes.mb}>
                                                                Activated on 29 Sep, 09:52
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={2}>
                                                            <IconButton aria-label="settings">
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </Grid>
                                                    </Grid>
                                                </Typography>
                                                <Typography>
                                                    <Grid container spacing={2} className={classes.fig}>
                                                        <Grid item xs={2}>
                                                            <Typography variant="subtitle1" className={classes.pads}>
                                                                2
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <div className={classes.delete}>
                                                                <Typography variant="subtitle1" className={classes.stats}>
                                                                    Eva's iPad
                                                                </Typography>
                                                                <Typography className={classes.act}>
                                                                </Typography>
                                                            </div>
                                                            <Typography variant="subtitle1" className={classes.mb}>
                                                                Activated on 29 Sep, 09:52
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={2}>
                                                            <IconButton aria-label="settings">
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </Grid>
                                                    </Grid>
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    </div>
                                    <div>
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                className={classes.active}
                                            >
                                                <Typography>Product</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    <CardHeader className={classes.card_}
                                                        avatar={
                                                            <Avatar aria-label="recipe">
                                                                R
                                                            </Avatar>
                                                        }
                                                        title="Wireframing Kit for Figma"
                                                        subheader="The Basic kit"
                                                    />
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    </div>
                                    <div>
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                className={classes.active}
                                            >
                                                <Typography>Log</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    <Grid container spacing={2} className={classes.log}>
                                                        <Grid item xs={7} className={classes.eva}>
                                                            <Typography className={classes.dots}>
                                                            </Typography>
                                                            <Typography variant="subtitle1" className={classes.ipads}>
                                                                Eva's iPads
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={5}>
                                                            <Typography variant="subtitle1" className={classes.sep}>
                                                                Activated on 29 Sep, 09:52
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container spacing={2} className={classes.log}>
                                                        <Grid item xs={7} className={classes.eva}>
                                                            <Typography className={classes.red}>
                                                            </Typography>
                                                            <Typography variant="subtitle1" className={classes.ipads}>
                                                                Dan's Mobile
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={5}>
                                                            <Typography variant="subtitle1" className={classes.sep}>
                                                                Deactivated on 19 Sep, 09:58
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container spacing={2} className={classes.log}>
                                                        <Grid item xs={7} className={classes.eva}>
                                                            <Typography className={classes.dots}>
                                                            </Typography>
                                                            <Typography variant="subtitle1" className={classes.ipads}>
                                                                Eva's iPhone
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={5}>
                                                            <Typography variant="subtitle1" className={classes.sep}>
                                                                Activated on 27 Sep, 22:51
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid container spacing={2} className={classes.log}>
                                                        <Grid item xs={7} className={classes.eva}>
                                                            <Typography className={classes.dots}>
                                                            </Typography>
                                                            <Typography variant="subtitle1" className={classes.ipads}>
                                                                Dan's Mobile
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={5}>
                                                            <Typography variant="subtitle1" className={classes.sep}>
                                                                Activated on 27 Sep, 22:50
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    </div>
                                </Grid>
                                <Grid item xs={1}>
                                </Grid>
                            </Grid>
                        </div>
                    </Drawer>

                </div>
            </>

            // <div>
            //     <Grid container spacing={2}>
            //         <Grid item xs={1}>
            //         </Grid>
            //         <Grid item xs={10}>
            //             <Grid container spacing={2}>
            //                 {/* <Grid item xs={1}>
            //                 </Grid> */}
            //                 <Grid item xs={11}>
            //                     <Typography variant="h3" className={classes.details}>
            //                         License Details
            //                     </Typography>
            //                 </Grid>
            //                 <Grid item xs={1}>
            //                     <IconButton aria-label="settings" className={classes.clear}>
            //                         <ClearIcon />
            //                     </IconButton>
            //                 </Grid>
            //             </Grid>
            //             <Grid container spacing={2}>
            //                 <Grid item xs={4} className={classes.statusing}>
            //                     <Typography variant="subtitle2" className={classes.stats}>
            //                         Status:
            //                     </Typography>
            //                     <div>
            //                         <Checkbox {...label} defaultChecked color="success" />
            //                     </div>
            //                     <Typography variant="subtitle2" className={classes.paid}>
            //                         Active
            //                     </Typography>
            //                 </Grid>
            //                 <Grid item xs={4} className={classes.date}>
            //                     <Typography variant="subtitle2" className={classes.stats}>
            //                         Expiry:
            //                     </Typography>
            //                     <Typography variant="subtitle2" className={classes.paid}>
            //                         27 Feb,2021
            //                     </Typography>
            //                 </Grid>
            //                 <Grid item xs={4} className={classes.date}>
            //                     <Typography variant="subtitle2" className={classes.stats}>
            //                         Limit:
            //                     </Typography>
            //                     <IconButton aria-label="settings">
            //                         <AllInclusiveIcon />
            //                     </IconButton>
            //                 </Grid>
            //             </Grid>
            //             <div>
            //                 <Accordion>
            //                     <AccordionSummary
            //                         expandIcon={<ExpandMoreIcon />}
            //                         aria-controls="panel1a-content"
            //                         id="panel1a-header"
            //                         className={classes.files}
            //                     >
            //                         <Typography>License Key</Typography>
            //                     </AccordionSummary>
            //                     <AccordionDetails>
            //                         <Grid container spacing={2}>
            //                             <Grid item xs={10}>
            //                                 <Typography className={classes.key}>
            //                                     BADAA81E-D3E64CE2-B5838E50-C9C2F6C0
            //                                 </Typography>
            //                             </Grid>
            //                             <Grid item xs={2}>
            //                                 <Typography className={classes.copy}>
            //                                     Copy
            //                                 </Typography>
            //                             </Grid>
            //                         </Grid>
            //                     </AccordionDetails>
            //                 </Accordion>
            //             </div>
            //             <div>
            //                 <Accordion>
            //                     <AccordionSummary
            //                         expandIcon={<ExpandMoreIcon />}
            //                         aria-controls="panel1a-content"
            //                         id="panel1a-header"
            //                         className={classes.files}
            //                     >
            //                         <Typography className={classes.stats}>Activations</Typography>
            //                         <Typography className={classes.two}>(2)</Typography>
            //                     </AccordionSummary>
            //                     <AccordionDetails>
            //                         <Typography>
            //                             <Grid container spacing={2} className={classes.fig}>
            //                                 <Grid item xs={2}>
            //                                     <Typography variant="subtitle1" className={classes.pads}>
            //                                         1
            //                                     </Typography>
            //                                 </Grid>
            //                                 <Grid item xs={7}>
            //                                     <Typography variant="subtitle1" className={classes.stats}>
            //                                         Eva's iPhone
            //                                     </Typography>
            //                                     <Typography variant="subtitle1" className={classes.mb}>
            //                                         Activated on 29 Sep, 09:52
            //                                     </Typography>
            //                                 </Grid>
            //                                 <Grid item xs={3}>
            //                                     <IconButton aria-label="settings">
            //                                         <DeleteIcon />
            //                                     </IconButton>
            //                                 </Grid>
            //                             </Grid>
            //                         </Typography>
            //                         <Typography>
            //                             <Grid container spacing={2} className={classes.fig}>
            //                                 <Grid item xs={2}>
            //                                     <Typography variant="subtitle1" className={classes.pads}>
            //                                         .txt
            //                                     </Typography>
            //                                 </Grid>
            //                                 <Grid item xs={7}>
            //                                     <Typography variant="subtitle1" className={classes.stats}>
            //                                         Readme.txt
            //                                     </Typography>
            //                                     <Typography variant="subtitle1" className={classes.mb}>
            //                                         156KB
            //                                     </Typography>
            //                                 </Grid>
            //                                 <Grid item xs={3}>
            //                                     <Stack spacing={2} direction="row" className={classes.account}>
            //                                         <Button variant="contained">Download</Button>
            //                                     </Stack>
            //                                 </Grid>
            //                             </Grid>
            //                         </Typography>
            //                     </AccordionDetails>
            //                 </Accordion>
            //             </div>
            //         </Grid>
            //         <Grid item xs={1}>
            //         </Grid>
            //     </Grid>
            // </div>


        )
    }
}

export default withStyles(styles)(RightScreen);