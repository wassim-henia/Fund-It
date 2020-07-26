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
              <CardHeader color="info">
                <h4 className={classes.cardTitleWhite}>NGS</h4>
                <p className={classes.cardCategoryWhite}>
                  Fintech
                </p>
              </CardHeader>
              <CardBody>
                
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        Taux de réussite : 80%
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        Periode : <br/> 16 mois
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        Taux d'interet : 2%
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        COLLECTÉS :<br/> <span className={classes.moneyInfo}>750</span>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <span className={classes.objectifStyle}>
                        OBJECTIF :<br/> <span className={classes.moneyInfo}>1500</span>
                    </span>
                    </Grid>
                    <Grid item xs={12}>
                    <div className={classes.root}>
                        <BorderLinearProgress variant="determinate" value={50} /> 50%
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                    <div className={classes.root}>
                        <Button type="button" color="info" block>Preter</Button>
                    </div>
                    </Grid>
                </Grid>
                
              </CardBody>
            </Card>
           
          </GridItem>



          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="info">
                <h4 className={classes.cardTitleWhite}>Farm Trust</h4>
                <p className={classes.cardCategoryWhite}>
                  Bio
                </p>
              </CardHeader>
              <CardBody>
                
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        Taux de réussite : 60%
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        Periode : <br/> 16 mois
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        Taux d'interet : 6%
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        COLLECTÉS :<br/> <span className={classes.moneyInfo}>300</span>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <span className={classes.objectifStyle}>
                        OBJECTIF :<br/> <span className={classes.moneyInfo}>1000</span>
                    </span>
                    </Grid>
                    <Grid item xs={12}>
                    <div className={classes.root}>
                        <BorderLinearProgress variant="determinate" value={30} /> 30%
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                    <div className={classes.root}>
                        <Button type="button" color="info" block>Preter</Button>
                    </div>
                    </Grid>
                </Grid>
                
              </CardBody>
            </Card>
           
          </GridItem>
          

        </GridContainer>
      );
    
}