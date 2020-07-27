import React from 'react';
// import Button from '@material-ui/core/Button';
import './SliderDefense.scss';
// import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    width: 56,
  },
});

function valuetextDefense(value) {
  return `${value}°C`;
}

const SliderDefense = (props) => {

  const classes = useStyles();

  const [valueDefense, setValueDefense] = React.useState([60, 100]);
  
  const handleChangeDefense = (event, newValue) => {
    setValueDefense(newValue);
  };

  // const [state, setState] = React.useState({
  //   checkedA: true,
  //   checkedB: false,
  // });

  // const handleChangeProb = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };




  const [stateCheck, setStateCheck] = React.useState({
    checkedA: false
  });

  const handleChangeCheck = (event) => {
    setStateCheck({ ...stateCheck, [event.target.name]: event.target.checked });
  };

  return (
    <Box display="flex" className={classes.root}>
      <div>
        <FormControlLabel className="Checkbox"
          control={
            <Checkbox 
              checked={stateCheck.checkedA} 
              onChange={handleChangeCheck} 
              name="checkedA" 
              onClick={() => props.handleChangeDefense(stateCheck.checkedA, valueDefense) }
            />
          }
        />
      </div>
      <div>
        <Typography id="range-slider" gutterBottom style={{ color: "var(--textGeneral)" }}>
          Defense
        </Typography>
        <Slider
          value={valueDefense}
          onChange={handleChangeDefense}
          valueLabelDisplay="auto"
          min={5}
          max={230}
          aria-labelledby="range-slider"
          getAriaValueText={valuetextDefense}
        />
          {/* <Button href="/index/defense" size="small" color='primary' variant='contained' onClick={() => props.handleChangeDefense(valueDefense)}>
          <Link to="/index/defense" className="link">Filter</Link>
          Filter
          </Button> */}

        {/* <Switch
          checked={state.checkedB}
          onChange={handleChangeProb}
          color="primary"
          name="checkedB"
          inputProps={{ 'aria-label': 'primary checkbox' }}
          onClick={() => props.handleChangeDefense(state.checkedB, valueDefense) } 
        /> */}
        

      </div>
    </Box>
  );
}

export default SliderDefense;