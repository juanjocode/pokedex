import React from 'react';
// import Button from '@material-ui/core/Button';
import './SliderAttack.scss';
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

function valuetext(value) {
  return `${value}°C`;
}

const SliderAttack = (props) => {

  const classes = useStyles();

  const [value, setValue] = React.useState([60, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
      <div >
        <FormControlLabel className="Checkbox"
          control={
            <Checkbox 
              checked={stateCheck.checkedA} 
              onChange={handleChangeCheck} 
              name="checkedA" 
              onClick={() => props.handleData(stateCheck.checkedA, value) }
            />
          }
        />
      </div>
      <div className="attack">
        <Typography id="range-slider" gutterBottom style={{ color: "var(--textGeneral)" }}>
          Attack 
        </Typography>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={5}
          max={185}
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />

        {/* <Switch
          checked={state.checkedB}
          onChange={handleChangeProb}
          color="primary"
          name="checkedB"
          inputProps={{ 'aria-label': 'primary checkbox' }}
          onClick={() => props.handleData(state.checkedB, value) } 
        /> */}
        {/* {console.log(stateCheck.checkedA, value)} */}

      </div>
       
    </Box>
  );
}

export default SliderAttack;