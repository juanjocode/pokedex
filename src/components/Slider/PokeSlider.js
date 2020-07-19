import React from 'react';
import PokeData from '../PokeData';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';
import PokeFilter from '../PokeFilter';
import './pokeSlider.scss';


const API = 'https://jsonplaceholder.typicode.com/users';

const PokeSlider = (props) => {

  const[num1, setNum1] = React.useState(100);
  const[num2, setNum2] = React.useState(500);
  const[click1, setClick1] = React.useState(0);
  const[click2, setClick2] = React.useState(0);
  
  

  const initialPokeSlider = PokeData(API);

  return (
      <div className='pokeSlider'>
          <div>
              {/* {initialPokeSlider.filter(person => person.id === props.valueAttack).map(filteredPerson => (
                <p key={filteredPerson.id}>
                  {filteredPerson.id}
                </p> 
              ))} */}
            <h3>Attack</h3>
            <div className='Buttons'>
              <div className='Button__one'>
                <p className='num1'>{num1}</p>
                <button onClick={() => num1 > 0 ? setNum1(num1 - 20) : setNum1(0)}>
                  <ArrowBackIcon color='primary' />    
                </button>
                <button onClick={() => num1 < num2-21 ? setNum1(num1 + 20) : setNum1(num1)}>
                  <ArrowForwardIcon color='primary' />    
                </button>
              </div>
              <div className='Button__two'>
                <p className='num1'>{num2}</p>
                <button onClick={() => num2 > num1+21 ? setNum2(num2 - 20) : setNum2(num1+20)}>
                  <ArrowBackIcon color='primary' />    
                </button>
                <button onClick={() => num2 < 820 ? setNum2(num2 + 20) : setNum2(num2)}>
                  <ArrowForwardIcon color='primary' />    
                </button>
              </div>
          </div>
          <div>
            <Button  color='primary' variant='contained' onClick={() => {
              setClick1(num1)
              setClick2(num2)
              }}>
              Filter
            </Button>
          </div>
          
        </div>
        {initialPokeSlider.filter(person => person.id >= click1 && person.id <= click2).map(filteredPerson => (
          <h1 key={filteredPerson.id}>
            <PokeFilter key={filteredPerson.id} {...filteredPerson}/>
          </h1> 
        ))}






        {/* <PokeFilter range1={click1} range2={click2}/> */}

        {/* {initialPokeSlider.map((option) => (
          <p key={option.id}>
            {option.id}
            {option.name}
            {option.username}
            {option.email}
            {option.address.street}
            {option.address.suite}
            {option.address.city}
            {option.address.zipcode}
            {option.address.geo.lat}
            {option.address.geo.lng}
          </p>
        ))} */}

      </div>
  );
}

export default PokeSlider;