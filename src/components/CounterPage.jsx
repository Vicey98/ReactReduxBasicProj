import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import Counter from './Counter'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const CounterPage = () => {
    const count = useSelector((state) => state.counter.count);
    const classes = useStyles();
    const [counterList, setCounterList] = useState([1,2,3,4,5,6,7,8,9,10,11,12]);

    return (
        <>
            <h1 style = {{textAlign: "center"}}>{`Total Votes is ${count}`}</h1>
            <hr/>

            <div className={classes.root}>
                <Grid container spacing={3}>
                    {counterList.map((count) => 
                        <Grid key={count.toString()} item xs={3}>
                            <Counter name={count}/>
                        </Grid>
                    )}
                </Grid>
            </div>
        </>
      );
}
 
export default CounterPage;