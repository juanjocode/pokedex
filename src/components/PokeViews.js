import React from 'react';
import '../css/pokeViews.scss'
import PokeImage from './PokeImage';
// class PokeViews extends React.Component {

const PokeViews = ({props}) => {

    return (
      <div>

        <div className="card">
          <div className="card__text">
            
            <PokeImage name={props}/>
            {/* {props.hola}  */}

          </div>
        </div>
        
      </div>
    )
}

export default PokeViews;