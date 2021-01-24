import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import { decrement, increment, reset } from "../redux/ducks/counter"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    content: {
        display: "flex",
        justifyContent: "center"
    }
  });

const Counter = (props) => {
    const { name } = props;
    const dispatch = useDispatch();
    const [localVotes, setLocalVotes] = useState(0);

    const classes = useStyles();


    const handleIncrement = () => {
        dispatch(increment());
        setLocalVotes(localVotes + 1);
    };

    const handleDecrement = () => {
        dispatch(decrement());
        setLocalVotes(localVotes - 1);
    }

    const handleReset = () => {
        dispatch(reset());
        setLocalVotes(0);
    }

    return ( 
    <Card className={classes.content}>
        <CardContent>
            <Typography variant="h6" component="h2">
                   {`Counter ${name} - Local Count is ${localVotes}`}
            </Typography>
            <Button onClick={handleIncrement} size="small">Increment</Button>
            <Button onClick={handleDecrement} size="small">Decrement</Button>
            <hr></hr>
            <Button onClick={handleReset} size="medium">Reset</Button>
        </CardContent>
    </Card>
    );
}
 
export default Counter;