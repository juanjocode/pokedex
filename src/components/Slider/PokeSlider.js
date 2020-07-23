import React from 'react';
import PokeData from '../PokeData';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';
import PokeFilter from '../PokeFilter';
import './pokeSlider.scss';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}


// const API = 'http://localhost:3000/pokemon';

const PokeSlider = (props) => {

  const classes = useStyles();

  // const[num1, setNum1] = React.useState(100);
  // const[num2, setNum2] = React.useState(500);
  // const[click1, setClick1] = React.useState(0);
  // const[click2, setClick2] = React.useState(0);
  // const[click3, setClick3] = React.useState(0);

  // const [value, setValue] = React.useState([20, 37]);

  // const initialPokeSlider = PokeData(API);

  
  // const [value, setValue] = React.useState(30);

  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  // const handleData = (e) => {
  //   console.log(value)
  // }

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Attack
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />

      <Button  color='primary' variant='contained' onClick={() => props.handleData(value)}>
        Filter
      </Button>

      </div>
  );
}

export default PokeSlider;