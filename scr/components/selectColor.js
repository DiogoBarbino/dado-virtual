import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
import Color from '../helpers/colors';

const selectColor = ({ selected, onSelect }) => {
  
    let buttons = [...Color];


    buttons = buttons.map((item, index) => {
      let buttonStyle = [{fontSize: 20, padding: 8, borderWidth: 2, borderRadius: 10}];
      let buttonStyleDefault = { borderColor: item.color, color: item.color, backgroundColor: '#FFF' };
      let buttonStyleReverse = { borderColor: '#f3f3f3', color: '#f3f3f3', backgroundColor: item.color }
      
      if (selected === index) {
        buttonStyle.push(buttonStyleReverse);
      } else {
        buttonStyle.push(buttonStyleDefault);
      }

      return <TouchableOpacity onPressIn={() => onSelect(index)} key={"btn"+index} style={{marginBottom:10}}>
        <Text style={buttonStyle}>{item.name}</Text>
      </TouchableOpacity>
    })
  
    return (<View style={{ width: '100%', flexDirection: 'row',flexWrap:'wrap', justifyContent: 'space-around', paddingHorizontal: 10 }}>
      {buttons}
    </View>)
  }

  export default selectColor;