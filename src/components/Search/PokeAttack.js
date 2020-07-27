// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Slider from '@material-ui/core/Slider';
// import PokeData from '../PokeData';
// import PokeSlider from './PokeSlider';

// const useStyles = makeStyles({
//   root: {
//     width: 300,
//   },
// });

// function valuetext(value) {
//   return `${value}°C`;
// }

// const API = 'https://jsonplaceholder.typicode.com/users';
// // export default function DiscreteSlider() {
// const PokeAttack = () => {

//   const [value, setValue] = React.useState([])

//   const classes = useStyles();

//   const initialPokeSlider = PokeData(API);

//   return (
//     <div className={classes.root}>
//       <Typography id="discrete-slider" gutterBottom>
//         Attack
//       </Typography>
//       <Slider
//         defaultValue={30}
//         getAriaValueText={valuetext}
//         aria-labelledby="discrete-slider"
//         valueLabelDisplay="auto"
//         step={1}
//         marks
//         min={1}
//         max={194}
//         onChange={(event, value) => {
//             setValue(value)
//           }
//         }
//       />
//       <PokeSlider valueAttack={value}/>

//       <div>
//         {initialPokeSlider.filter(person => person.id === 5).map(filteredPerson => (
//           <p key={filteredPerson.id}>
//             {/* {filteredPerson.id }     */}
//           </p> 
//         ))}  
//       </div>
//       <Typography id="discrete-slider" gutterBottom>
//         Defense
//       </Typography>
//       <Slider
//         defaultValue={30}
//         getAriaValueText={valuetext}
//         aria-labelledby="discrete-slider"
//         valueLabelDisplay="auto"
//         step={1}
//         marks
//         min={20}
//         max={230}
//         onChange={(event, value) => {
//             console.log('Defense: ', value);
//         }}
//         // disabled
//       />
//     </div>
//   );
// }

// export default PokeAttack;