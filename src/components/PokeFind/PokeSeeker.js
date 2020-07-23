import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Tooltip from '@material-ui/core/Tooltip';
import iconFind from '../../img/icon-search.svg';


const MyTooltip = ({title, children}) =>{
  if (title === undefined) {
      return children;
  }
  return (
  <Tooltip title={title}>
      {children}
  </Tooltip>
  )
}

class PokeSeeker extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pokemon: []
    }
  }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    fetch('http://localhost:3000/pokemon')
      .then(response => response.json())
      .then(initialData => this.setState({ pokemon: initialData }))
  }

  render() {

    const { handleClick, tooltip } = this.props;
    return (
      <div className="pokefinder">
        <MyTooltip title={tooltip}  >
          <button onClick={handleClick}> <img src={iconFind} /></button>
        </MyTooltip>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          disableClearable
          onChange={this.props.onChange}
          options={this.state.pokemon.map((option) => option.name_pokemon)}
          renderInput={(params) => (
            <TextField {...params} label="" margin="normal" placeholder="Search pokémon" />
          )}
        />

      </ div>
    )
  }
}

export default PokeSeeker; 