import { SET_NUMBER_OF_DICE, SET_NUMBER_OF_FACES, SELECT_COLOR, UPDATE_DICES, UPDATE_RANDOM_DICES,SET_ACTIVE } from '../actions/types';
import { AsyncStorage } from 'react-native';
import {createDices,createRandomDices} from '../../helpers/dices';

const initialState = {
    numberOfDice: 1,
    numberOfFaces: 6,
    colorIndex: 0,
    dices: [1],
    active: false
}

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NUMBER_OF_DICE:
            try {
                AsyncStorage.setItem('numberOfDice', JSON.stringify(action.payload))
                // console.log("Salvou o numero de dados corretamente!"+action.payload );
            } catch (error) {
                // console.log("Erro ao gravar o numero de dados! - "+error);
            }
            //console.log("Cheguei no numero de dados")
            return {
                ...state,
                numberOfDice: action.payload,
                dices: createDices(action.payload)
            };
        case SET_NUMBER_OF_FACES:
            try {
                AsyncStorage.setItem('numberOfFaces', JSON.stringify(action.payload))
                // console.log("Salvou o numero de faces corretamente!"+action.payload );
            } catch (error) {
                // console.log("Erro ao gravar o numero de faces! - "+error);
            }
            return {
                ...state,
                numberOfFaces: action.payload
            };
        case SELECT_COLOR:
            try {
                AsyncStorage.setItem('colorIndex', JSON.stringify(action.payload))
                // console.log("Salvou a cor corretamente!");
            } catch (error) {
                // console.log("Erro ao gravar a cor! - "+error);
            }
            return {
                ...state,
                colorIndex: action.payload
            };
        case UPDATE_DICES:
            return {
                ...state,
                dices: createDices(state.numberOfDice)
            }
        case UPDATE_RANDOM_DICES:
            return {
                ...state,
                dices: createRandomDices(state.numberOfDice,state.numberOfFaces)
            }
        case SET_ACTIVE:
            //console.log("Setou ativo = "+action.payload)
            return{
                ...state,
                active: action.payload
            }
        default:
            return state;
    }
}

export default settingsReducer;