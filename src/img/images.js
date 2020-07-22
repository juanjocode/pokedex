const images = {
    bug: require('./types/bug.svg'),
    dark: require( './types/dark.svg'),
    dragon: require( './types/dragon.svg'),
    electric: require( './types/electric.svg'),
    fairy: require( './types/fairy.svg'),
    fight: require( './types/fight.svg'),
    fire: require( './types/fire.svg'),
    flying: require( './types/flying.svg'),
    ghost: require( './types/ghost.svg'),
    grass: require( './types/grass.svg'),
    ground: require( './types/ground.svg'),
    ice: require( './types/ice.svg'),
    normal: require( './types/normal.svg'),
    poison: require( './types/poison.svg'),
    psychic: require( './types/psychic.svg'),
    rock: require( './types/rock.svg'),
    steel: require( './types/steel.svg'),
    water: require( './types/water.svg'),
    default: require( './types/water.svg'),
}

export const getType = (type) => {
    let typePokemon = images[type];
    if (typePokemon === undefined) {
        typePokemon = images.default
    }
    return typePokemon;
}

export default images;