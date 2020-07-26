import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles,withStyles  } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Button from 'components/CustomButtons/Button.js'
import FundServer from './FundStartup.js'

import LinearProgress from '@material-ui/core/LinearProgress';
const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }))(LinearProgress);
const styles = {
    cardCategoryWhite: {
      "&,& a,& a:hover,& a:focus": {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
      },
      "& a,& a:hover,& a:focus": {
        color: "#FFFFFF"
      }
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none",
      "& small": {
        color: "#777",
        fontSize: "65%",
        fontWeight: "400",
        lineHeight: "1"
      }
      
    },
    moneyInfo:{
        color:"#43a047",
        fontSize: "20px"
    },
    objectifStyle:{
        textAlign : "center"
    }
  };
  const useStyles = makeStyles(styles);
export default function EquityCrowdFundingPage() {
    const classes = useStyles();
    return (
        <GridContainer>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>HackUp</h4>
                <p className={classes.cardCategoryWhite}>
                  Evenementielle
                </p>
              </CardHeader>
              <CardBody>
                
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        Prédiction de réussite : 80%
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        COLLECTÉS :<br/> <span className={classes.moneyInfo}>2500DT</span>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <span className={classes.objectifStyle}>
                        OBJECTIF :<br/> <span className={classes.moneyInfo}>5000DT</span>
                    </span>
                    </Grid>
                    <Grid item xs={12}>
                    <div className={classes.root}>
                        <BorderLinearProgress variant="determinate" value={50} /> 50%
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                    <div className={classes.root}>
                      <center><h5>Prix d'une action : 10DT</h5></center>  
                    </div>
                    </Grid>
                    <Grid item xs={12}>
                    <div className={classes.root}>
                      <FundServer/>
                    </div>
                    </Grid>
                </Grid>
                
              </CardBody>
            </Card>
            
           
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Intigo</h4>
                <p className={classes.cardCategoryWhite}>
                  Transport
                </p>
              </CardHeader>
              <CardBody>
                
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        Prédiction de réussite : 90%
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        COLLECTÉS :<br/> <span className={classes.moneyInfo}>20000DT</span>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <span className={classes.objectifStyle}>
                        OBJECTIF :<br/> <span className={classes.moneyInfo}>30000DT</span>
                    </span>
                    </Grid>
                    <Grid item xs={12}>
                    <div className={classes.root}>
                        <BorderLinearProgress variant="determinate" value={66} /> 66%
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                    <div className={classes.root}>
                      <center><h5>Prix d'une action : 5DT</h5></center>  
                    </div>
                    </Grid>
                    <Grid item xs={12}>
                    <div className={classes.root}>
                      <FundServer/>
                    </div>
                    </Grid>
                </Grid>
                
              </CardBody>
            </Card>
            
           
          </GridItem>


          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Trust IT</h4>
                <p className={classes.cardCategoryWhite}>
                  Service
                </p>
              </CardHeader>
              <CardBody>
                
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        Prédiction de réussite : 60%
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        COLLECTÉS :<br/> <span className={classes.moneyInfo}>2000DT</span>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <span className={classes.objectifStyle}>
                        OBJECTIF :<br/> <span className={classes.moneyInfo}>10000DT</span>
                    </span>
                    </Grid>
                    <Grid item xs={12}>
                    <div className={classes.root}>
                        <BorderLinearProgress variant="determinate" value={20} /> 20%
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                    <div className={classes.root}>
                      <center><h5>Prix d'une action : 20DT</h5></center>  
                    </div>
                    </Grid>
                    <Grid item xs={12}>
                    <div className={classes.root}>
                    <FundServer/>
                    </div>
                    </Grid>
                </Grid>
                
              </CardBody>
            </Card>
            
           
          </GridItem>


          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Grabingo</h4>
                <p className={classes.cardCategoryWhite}>
                  Service
                </p>
              </CardHeader>
              <CardBody>
                
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        Prédiction de réussite : 40%
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        COLLECTÉS :<br/> <span className={classes.moneyInfo}>10000DT</span>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <span className={classes.objectifStyle}>
                        OBJECTIF :<br/> <span className={classes.moneyInfo}>1000DT</span>
                    </span>
                    </Grid>
                    <Grid item xs={12}>
                    <div className={classes.root}>
                        <BorderLinearProgress variant="determinate" value={10} /> 10%
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                    <div className={classes.root}>
                      <center><h5>Prix d'une action : 20DT</h5></center>  
                    </div>
                    </Grid>
                    <Grid item xs={12}>
                    <div className={classes.root}>
                    <FundServer/>
                    </div>
                    </Grid>
                </Grid>
                
              </CardBody>
            </Card>
            
           
          </GridItem>


          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Chanti.tn</h4>
                <p className={classes.cardCategoryWhite}>
                  Services
                </p>
              </CardHeader>
              <CardBody>
                
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        Prédiction de réussite : 75%
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        COLLECTÉS :<br/> <span className={classes.moneyInfo}>2000DT</span>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <span className={classes.objectifStyle}>
                        OBJECTIF :<br/> <span className={classes.moneyInfo}>10000DT</span>
                    </span>
                    </Grid>
                    <Grid item xs={12}>
                    <div className={classes.root}>
                        <BorderLinearProgress variant="determinate" value={50} /> 25%
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                    <div className={classes.root}>
                      <center><h5>Prix d'une action : 10DT</h5></center>  
                    </div>
                    </Grid>
                    <Grid item xs={12}>
                    <div className={classes.root}>
                    <FundServer/>
                    </div>
                    </Grid>
                </Grid>
                
              </CardBody>
            </Card>
            
           
          </GridItem>


          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>cha9a9a</h4>
                <p className={classes.cardCategoryWhite}>
                  Services
                </p>
              </CardHeader>
              <CardBody>
                
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        Prédiction de réussite : 50%
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        COLLECTÉS :<br/> <span className={classes.moneyInfo}>2500DT</span>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <span className={classes.objectifStyle}>
                        OBJECTIF :<br/> <span className={classes.moneyInfo}>5000DT</span>
                    </span>
                    </Grid>
                    <Grid item xs={12}>
                    <div className={classes.root}>
                        <BorderLinearProgress variant="determinate" value={50} /> 50%
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                    <div className={classes.root}>
                      <center><h5>Prix d'une action : 10DT</h5></center>  
                    </div>
                    </Grid>
                    <Grid item xs={12}>
                    <div className={classes.root}>
                        <FundServer/>
                    </div>
                    </Grid>
                </Grid>
                
              </CardBody>
            </Card>
            
           
          </GridItem>

        </GridContainer>
      );
    
}