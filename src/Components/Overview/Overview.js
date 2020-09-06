import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Home from '../Home/Home';
import LeftBar from '../LeftBar/LeftBar';
import RightBar from '../RightBar/RightBar';

const useStyles = makeStyles((theme)=> ({
    root: {
        flexGrow: 1,

    },
    paper:{
        padding: theme.spacing(2),
        textAlign : 'center',
        color : theme.palette.text.secondary,
    },
}));

const Overview = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs className="sideBar">
                    <Paper className={classes.paper}>
                        <LeftBar></LeftBar>
                    </Paper>
                </Grid >
                <Grid item xs className="sideBar">
                    <Paper className={classes.paper} ><Home></Home></Paper>
                </Grid>
                <Grid item xs className="sideBar">
                    <Paper className={classes.paper}> <RightBar></RightBar>
                    </Paper>
                </Grid>
            </Grid>    
        </div>
    );
};

export default Overview;