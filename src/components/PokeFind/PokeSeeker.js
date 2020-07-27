import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Tooltip from '@material-ui/core/Tooltip';
import iconFind from '../../img/icon-search.svg';
import { connect } from 'react-redux';


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

  render() {

    const { handleClick, tooltip } = this.props;
    return (
      <div className="pokefinder">

        <MyTooltip title={tooltip}  >
          <button onClick={handleClick}> <img src={iconFind} alt="IconFind"/></button>
        </MyTooltip>
        {this.props.initialPokeData2.length === 0 ? "" : (
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            disableClearable
            onChange={this.props.onChange}
            options={this.props.initialPokeData2.map((option) => option.name_pokemon)}
            renderInput={(params) => (
              <TextField {...params} label="" margin="normal" placeholder="Search pokémon" />
            )}
          />
        )}
      </ div>
    )
  }
}

const mapStateToProps = state => ({
  initialPokeData2: state.pokemon
}) 

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(PokeSeeker);