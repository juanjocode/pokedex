import React from 'react';
// import PokeSeeker from '../components/PokeSeeker';
// import PokeSlider from '../components/Slider/PokeSlider';
import Navbar from '../components/Navbar/Navbar';
import Menu from '../components/Menu/Menu';
import images from '../img/images';
import bug from '../img/types/bug.svg';
import CardMain from '../components/CardMain/CardMain';
// import Menu from '../../src/components/Menu/Menu';
// import PokeAttack from '../components/PokeAttack';

class PokeCards extends React.Component {

  state = { form: "" };

  handleChange = (event, value) => {
    // const a = value;
    this.setState({
      form: {
        valor: value,
      }
    })
  };
  
  render() {
    return (
      <div>
        <Navbar />
        <Menu onChange={this.handleChange} />
        <CardMain send={this.state.form.valor}/>
        
        <div style={{ background: "black", padding:"20px" }}>
          <img src={images.bug} />
          <img src={bug} />
        </div>
        
        {/* <cardView /> */}
        {/* <PokeSeeker /> */}
        {/* <PokeSlider /> */}

      </div>
    )
  }
}

export default PokeCards;