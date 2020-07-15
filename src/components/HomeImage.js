import React from 'react';
import '../css/homeImagen.scss'
import Button from '@material-ui/core/Button';
import Binoculars from '../components/Binoculars';
import Lookema from '../img/Lookema.png';

class HomeImage extends React.Component {
  render() {
    return (
      <div className="Lookema">
        <div className="center">
          <div className="Lookema__content">
            <img src={ Lookema } alt="Lookema" />
          </div>
          <div className="Lookema__button">
            <Button variant="contained" className="color" href="/" startIcon={ <Binoculars /> }>
                I gotta look'em all
            </Button>
          </div>
        </div>
      </div>
    );
  }
};

export default HomeImage;