/* eslint-disable no-use-before-define */
import React, {useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import {GlobalState} from '../Providers/GlobalState';
// import PokeViews from '../components/PokeViews';
// import PokeSlider from '../components/PokeSlider'
class PokeSeeker extends React.Component {

  constructor(props) {
    super(props);

    

    this.state = {
      pokemon: []
    }
  }

  componentDidMount () {
    // fetch('https://jsonplaceholder.typicode.com/users')
    fetch('http://localhost:3000/pokemon')
      .then(response => response.json())
      .then(initialData => this.setState({ pokemon: initialData }))
  }

  render () {
    return (
      <>
            <Autocomplete
            id="free-solo-demo"
            freeSolo
            disableClearable
            onChange={this.props.onChange}
            options={this.state.pokemon.map((option) => option.name_pokemon)}
 
            renderInput={(params) => (
              <TextField {...params} label="pokemon" margin="normal"  />
            )}
          />
          
      </>
    )
  }
}

export default PokeSeeker; 