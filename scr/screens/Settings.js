import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';

import {connect} from 'react-redux';

import {setNumberOfDice,setNumberOfFace,selectColor} from '../redux/actions/settings';

import Color from '../helpers/colors';

import GroupButtons from '../components/groupButtons';
import SelectNumber from '../components/selectNumber';
import SelectColor from '../components/selectColor';

class Settings extends React.Component {

  updateFaces(number){
    if(number>1&&number<100){
      this.props.setNumberOfFace(parseInt(number));
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Color[this.props.colorIndex].color}/>
        <ScrollView>
        <View style={styles.optionBox}>
          <Text style={styles.optionTitle}>Quantidade de dados:</Text>
          <GroupButtons
            onSelect={(number) => this.props.setNumberOfDice(number)}
            selected={this.props.numberOfDice}
            color={Color[this.props.colorIndex].color}
          />
        </View>
        
        <View style={styles.optionBox}>
          <Text style={styles.optionTitle}>Quantidade de faces:</Text>
          <SelectNumber
            value={this.props.numberOfFaces}
            onValueChange={(number)=>this.updateFaces(number)}
            color={Color[this.props.colorIndex].color}
          />
        </View>

        <View style={styles.optionBox}>
          <Text style={styles.optionTitle}>Selecione a cor:</Text>
          <SelectColor
            selected={this.props.colorIndex}
            onSelect={(color)=>this.props.selectColor(color)}
          />
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  optionBox:{
    padding:16,
    borderBottomWidth:2,
    borderBottomColor:"#DDD"
  },
  optionTitle:{
    fontSize: 20,
    marginBottom:10
  }
});

const mapStateToProps = (state) => ({
  numberOfDice: state.settingsReducer.numberOfDice,
  numberOfFaces: state.settingsReducer.numberOfFaces,
  colorIndex: state.settingsReducer.colorIndex,
});

const mapDispatchToProps = dispatch => ({
  setNumberOfDice: (number) => dispatch(setNumberOfDice(number)),
  setNumberOfFace: (number) => dispatch(setNumberOfFace(number)),
  selectColor: (number) => dispatch(selectColor(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings)