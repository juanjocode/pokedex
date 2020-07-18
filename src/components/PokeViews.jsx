import React from 'react';
import '../css/pokeViews.scss'
import PokeImage from './PokeImage';
// class PokeViews extends React.Component {

const PokeViews = ({ name }) => {

  return (
    <div>

      <div className="card" >

        <div className="card__image-container" style={{ background: "var(--gradientGrass)" }}>

          <div className="card__number-gen">
            <div className="card__number" style={{ color: "var(--colorGrass" }}>#001</div>
            <div className="card__gen" style={{ color: "var(--colorGrass" }}>G1</div>
          </div>

          <PokeImage name={name} />
        </div>

      </div>

    </div>
  )
}

export default PokeViews;