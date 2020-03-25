import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import Color from '../helpers/colors';

const screenSize = Dimensions.get('window').width

const GroupDice = (props) => {

    let selectedColor = Color[props.colorIndex].color || '#6AC0FF';
    if(props.active){selectedColor="#FFD700";}
    let quantity = (props.dices.length) || 1;
    if (quantity > 9) quantity = 9;
    if (quantity < 1) quantity = 1;


    let diceSize = screenSize;
    switch (quantity) {
        case 1: { diceSize = screenSize * 0.8; } break;
        case 2:
        case 4: { diceSize = screenSize * 0.4; } break;
        default: { diceSize = screenSize * 0.3; } break;
    }

    let diceBoxStyle = {
        ...styles.diceBox,
        borderColor: selectedColor,
        width: diceSize, 
        height: diceSize,
        borderRadius: diceSize*0.1
    }
    
    let dices = props.dices.map((item, index) => {
        return <View key={'dd' + index} style={diceBoxStyle}>
            <Text style={[styles.diceNumber, { color: selectedColor,fontSize: diceSize*0.6 }]}>{item}</Text>
        </View>
    })

    return (<View style={styles.container}>
        {dices}
    </View>)
}

const styles = StyleSheet.create({
    container: {
        width: screenSize,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems:"flex-end"
    },
    diceBox: {
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    diceNumber: {
        textAlign: 'center'
    }
});


const mapStateToProps = (state) => ({
    numberOfDice: state.settingsReducer.numberOfDice,
    numberOfFaces: state.settingsReducer.numberOfFaces,
    colorIndex: state.settingsReducer.colorIndex,
    dices: state.settingsReducer.dices,
    active: state.settingsReducer.active
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupDice);