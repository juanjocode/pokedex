import React, {createContext, useState}  from 'react';

export const GlobalState = createContext();

export const StateProvider = ({children}) => {

const [pokemon, usePokemon] = useState([1, 2, 3, 4, 5]);


  return (
    <GlobalState.Provider value={[pokemon, usePokemon]}>
      {children}
    </GlobalState.Provider>
  )
}