export const getPokemon = (data) => (dispatch) => {
  dispatch({
    type: "SET_POKEMON",
    payload: data
  })
}

export const setPokemons = (dataPokemons) => (dispatch) => {
  dispatch({
    type: "SET_POKEMONS",
    payload: dataPokemons
  })
}

export const EmptyPokemons = () => (dispatch) => {
  dispatch({
    type: "EMPTY_POKEMONS",
    payload: []
  })
}

// export const getAttack = () => (dispatch) => {
//   dispatch({
//     type: "SET_ATTACK",
//     payload: []
//   })
// }


// export const getFilter = () => (dispatch) => {
//   dispatch({
//     type: "SET_FILTER",
//     payload: []
//   })












// export const getStrongest = (data) => (dispatch) => {
//   dispatch({
//     type: "SET_STRONGEST",
//     payload: data
//   })
// }
