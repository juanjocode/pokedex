import React from 'react';
// import PokeSeeker from '../components/PokeSeeker';
// import PokeSlider from '../components/Slider/PokeSlider';
import Navbar from '../components/Navbar/Navbar';
import Menu from '../components/Menu/Menu';
import images from '../img/images';
import bug from '../img/types/bug.svg';
import CardMain from '../components/CardMain/CardMain';
import FilterAttack from '../components/FilterAttack/FilterAttack';
// import Menu from '../../src/components/Menu/Menu';
// import PokeAttack from '../components/PokeAttack';
import { Provider } from 'react-redux';
import store from '../Store/store';

class PokeCards extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      setValue: "",
      change1: "",
      valor2: ""
     };
  }

  handleChange = (event, value) => {
    this.setState({
      change1: {
        valor1: value,
      }
    })
  };

  handleData = (e) => {
    this.setState({
      // change2: {
        valor2: e,
      // }
    })
    // setValue(newValue);
  };


  render() {
    return (
      <Provider store={store}>
        <div className="poke-cards">
          <Navbar />
          <div className="content">
            <Menu onChange={this.handleChange} handleData={this.handleData}/>
            {/* <Menu onChange={this.handleChange} onChange2={this.handleChange2} /> */}
            <div className="cards__container">
              <CardMain send={this.state.change1.valor1} />
            </div> 
          </div>
          <FilterAttack handleData={this.state.valor2}/>
          {/* {console.log(this.handleChange2)} */}
          {/* {console.log(this.state.valor2)} */}
          {/* {console.log(this.state.setValue)}  */}

          {/* <div style={{ background: "black", padding: "20px" }}>
            <img src={images.bug} />
            <img src={bug} />
          </div> */}

        </div>
      </Provider>
      
    )
  }
}

export default PokeCards;