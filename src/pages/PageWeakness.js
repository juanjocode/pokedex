import React from 'react';
import Navbar from '../components/Navbar/Navbar';
// import AlternativeMenu from '../components/AlternativeMenu/AlternativeMenu';
import Menu from '../components/Menu/Menu';
// import images from '../img/images';
// import bug from '../img/types/bug.svg';
import CardMain from '../components/CardMain/CardMain';
import FilterAttack from '../components/FilterAttack/FilterAttack';
import { connect } from 'react-redux';
import FilterDefense from '../components/FilterDefense/FilterDefense';
import FilterProbLegend from '../components/FilterProbLegend/FilterProbLegend';
import FilterWeakness from '../components/FilterWeakness/FilterWeakness';
// import { Provider } from 'react-redux';
// import store from '../Store/store';
// import { createStore } from 'redux';

class PageWeakness extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      setValue: "",
      change1: "",
      valor2: "",
      valor3: "",
      valor4: "",
      valor5: "",
      valorStrong: "",
      valorDefense: "",
      valorDefense2: ""
     };
  }

  handleChange = (event, value) => {
    this.setState({
      change1: {
        valor1: value,
      }
    })
  };

  handleChangeDefense = (e, f) => {
    this.setState({
      valorDefense: e,
      valorDefense2: f
    })
  };

  handleData = (e, f) => {
    this.setState({
      valor2: e,
      valor5: f
    })
  };

  handleReset = (e) => {
    this.setState({
      valor3: e,
    })
  };

  handleChangeProb = (e) => {
    this.setState({
      valor4: e 
    });
  };

  handleStrong = (e) => {
    this.setState({
      valorStrong: e 
    });
  };


  render() {
    return (
      <div className="poke-cards">
        <Navbar />
        <div className="content">
          <Menu onChange={this.handleChange} handleStrong={this.handleStrong} handleData={this.handleData} handleChangeDefense={this.handleChangeDefense} handleReset={this.handleReset} handleChangeProb={this.handleChangeProb}/>
          <div className="cards__container">

          {this.state.valor3 === 1 ? window.location.reload() : null}

            {/* {this.state.valor2.length === 0 ? 'No hay datos' : 'Si hay datos'} */}
            <CardMain send={this.state.change1.valor1} />
            <FilterAttack handleData={this.state.valor5} handleData2={this.state.valor2}/>
            <FilterDefense handleChangeDefense={this.state.valorDefense} handleChangeDefense2={this.state.valorDefense2}/>
            <FilterProbLegend  handleChangeProb={this.state.valor4}/>
            {/* <FilterStrong/> */}
            <FilterWeakness/>

          </div> 
        </div>
        {console.log(this.state.valorStrong)} 
        {/* {console.log(this.state.valor5)}  */}

        {/* {console.log(this.state.setValue)}  */}

        {/* <div style={{ background: "black", padding: "20px" }}>
          <img src={images.bug} />
          <img src={bug} />
        </div> */}

      </div>
    )
  }
}

const mapStateToProps = state => ({
  initialPokeSlider: state.pokemon
}) 

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps) (PageWeakness);
