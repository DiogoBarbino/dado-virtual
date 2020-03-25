import {SET_NUMBER_OF_DICE,SET_NUMBER_OF_FACES,SELECT_COLOR,UPDATE_DICES,UPDATE_RANDOM_DICES,SET_ACTIVE} from './types';

export const setNumberOfDice = (number) => ({
    type: SET_NUMBER_OF_DICE,
    payload: number
})

export const setNumberOfFace = (number) => ({
    type: SET_NUMBER_OF_FACES,
    payload: number
})

export const selectColor = (colorIndex) => ({
    type: SELECT_COLOR,
    payload: colorIndex
})

export const updateDices = () => ({
    type: UPDATE_DICES,
})

export const updateRandomDices = () => ({
    type: UPDATE_RANDOM_DICES,
})

export const setActive = (active) =>({
    type: SET_ACTIVE,
    payload: active
})
