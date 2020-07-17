/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PokeViews from '../components/PokeViews';
import PokeSlider from '../components/PokeSlider'


const PokeSeeker = ({slider}) => {

  const [value, setValue] = React.useState([])
  const [value2, setValue2] = React.useState("")

  React.useEffect(() => {
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await data.json()
      setValue(users)
    } catch (error) {
      alert ("Este es el error", error);
    }
  }

  return (
    <div>
      <div style={{ width: 300 }}>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          disableClearable
          onChange={(event, value) => {
              setValue2(value)
            }
          }
          options={value.map((option) => option.name)}
          renderInput={(params) => (
            <TextField {...params} label="pokemon" margin="normal" variant="outlined" />
          )}
        />
      </div> 
      <PokeViews props={value2} />
      {/* <PokeSlider slider={slider} /> */}
    </div>
  );
}

export default PokeSeeker; 