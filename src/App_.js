// import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),

});

function App() {
  return (
    <Box sx={{ width: 1 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 6" style={{
          backgroundColor: '#eeeeee',
        }}>
          <Item style={{
            backgroundColor: '#00897b',
          }}>xs=6</Item>
          <Box sx={{ width: 1 }}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
              <Box gridColumn="span 2">
                <Item style={{
                  backgroundColor: '#455a64',
                }}>xs=2</Item>
              </Box>
              <Box gridColumn="span 8">
                <Item>
                  <Typography variant="h5" gutterBottom component="div">
                    My Orders
                  </Typography>
                  <Card sx={{ maxWidth: 500 }}>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                          R
                        </Avatar>
                      }
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title="Wireframing Kit for Figma"
                      subheader="The Basic kit"
                    />
                  </Card>
                  <Typography variant="h5" gutterBottom component="div">
                    Access this later?
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom component="div">
                    Enter a password below to create a Lemon Squeezy account.
                    Keep track of orders and access downloads at any time.
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Box>
                      <Item>8 characters minimum</Item>
                    </Box>
                    <Box>
                      <Item>
                        <Stack direction="row">
                          <BootstrapButton variant="contained" disableRipple>
                            Create account
                          </BootstrapButton>
                        </Stack>
                      </Item>
                    </Box>
                  </Box>
                </Item>
              </Box>
              <Box gridColumn="span 2">
                <Item style={{
                  backgroundColor: '#455a64',
                }}>xs=2</Item>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box gridColumn="span 6">
          <Item style={{
            backgroundColor: 'grey',
          }}>xs=6</Item>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={12}>
              <Grid item xs={2}>
                <Item style={{
                  backgroundColor: 'pink',
                }}>xs=2</Item>
              </Grid>
              <Grid item xs={8}>
                <Item>
                  <Stack direction="row" spacing={2} style={{ justifyContent: "center" }}>
                    <Avatar
                      alt="Remy Sharp"
                      src=".\Dashboard\my-app\12.jpg"
                      sx={{ width: 56, height: 56 }}
                    />
                  </Stack>
                  <Typography variant="h5" gutterBottom component="div">
                    Orders #1021
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom component="div">
                    Status:  Paid Date: 1 Oct,14:42
                  </Typography>
                  <div>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header" style={{
                          backgroundColor: '#eeeeee',
                        }}
                      >
                        <Typography>Order Summary</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <Card sx={{ maxWidth: 500 }}>
                            <CardHeader
                              avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                  R
                                </Avatar>
                              }
                              action={
                                <div>
                                  $19.99
                                </div>
                              }
                              title="Wireframing Kit for Figma"
                              subheader="The Basic kit"
                            />

                            <CardHeader
                              avatar={
                                <div>
                                  Subtotal
                                </div>
                              }

                              action={
                                <div>
                                  $19.99
                                </div>
                              }
                            />

                            <CardHeader
                              avatar={
                                <div>
                                  Discount
                                </div>
                              }
                              action={
                                <div>
                                  -$5.00
                                </div>
                              }
                            />

                            <CardHeader
                              avatar={
                                <div>
                                  VAT [20%]
                                </div>
                              }
                              action={
                                <div>
                                  $3.00
                                </div>
                              }
                            />
                            <CardHeader
                              avatar={
                                <div>
                                  Total
                                </div>
                              }
                              action={
                                <div>
                                  $17.99
                                </div>
                              }
                            />
                          </Card>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header" style={{
                          backgroundColor: '#eeeeee',
                        }}
                      >
                        <Typography>Files (2)</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <Card sx={{ maxWidth: 500 }}>
                            <CardHeader
                              avatar={
                                <Box>
                                  <Item>.fig</Item>
                                </Box>
                              }
                              avatar={
                                <Box>
                                  <Item>.fig</Item>
                                </Box>
                              }
                              action={
                                <div>
                                  $3.00
                                </div>
                              }
                            />
                          </Card>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header" style={{
                          backgroundColor: '#eeeeee',
                        }}
                      >
                        <Typography>Licenses (1)</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <Card sx={{ maxWidth: 500 }}>
                            <Card sx={{ maxWidth: 500 }}>
                              <CardHeader
                                avatar={
                                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                  </Avatar>
                                }
                                action={
                                  <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                  </IconButton>
                                }
                                title="BADAA81E-D3E64CE2-B5838E50-C9C2F6C0"
                                subheader="Expires on 1 Oct 2021 Active (1/5)"
                              />
                            </Card>
                          </Card>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header" style={{
                          backgroundColor: '#eeeeee',
                        }}
                      >
                        <Typography>Timeline</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <Card sx={{ maxWidth: 500 }}>
                            <Card sx={{ maxWidth: 500 }}>
                              <CardHeader
                                avatar={
                                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                  </Avatar>
                                }
                                action={
                                  <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                  </IconButton>
                                }
                                title="BADAA81E-D3E64CE2-B5838E50-C9C2F6C0"
                                subheader="Expires on 1 Oct 2021 Active (1/5)"
                              />
                            </Card>
                          </Card>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                  <Box sx={{ '& button': { m: 1 } }}>
                    <div>
                      <Button variant="contained" size="small">
                        Generate Invoice
                      </Button>
                    </div>
                  </Box>
                  <Stack direction="row" spacing={2} style={{ justifyContent: "center" }}>
                    <Avatar
                      alt="Remy Sharp"
                      src=".\Dashboard\my-app\12.jpg"
                      sx={{ width: 24, height: 24 }}
                    />
                     <Typography variant="caption" display="block" gutterBottom>
                    Powered by Lemon Squeezy
                  </Typography>
                  </Stack>
                 
                </Item>
              </Grid>
              <Grid item xs={2}>
                <Item style={{
                  backgroundColor: 'pink',
                }}>xs=2</Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
