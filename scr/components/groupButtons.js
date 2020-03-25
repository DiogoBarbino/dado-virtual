import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';


const GroupButtons = ({ color, selected, onSelect }) => {

    let selectedColor = color || '#6AC0FF';
  
    let buttons = new Array(9);
    buttons = buttons.fill(0).map((_, index) => {
      let buttonStyle = [{ fontSize: 20, padding: 8, borderWidth: 2, borderRadius: 10 }];
      let buttonStyleDefault = { borderColor: selectedColor, color: selectedColor, backgroundColor: '#FFF' };
      let buttonStyleReverse = { borderColor: '#f3f3f3', color: '#f3f3f3', backgroundColor: selectedColor }
      if (selected === index) {
        buttonStyle.push(buttonStyleReverse);
      } else {
        buttonStyle.push(buttonStyleDefault);
      }
      return <TouchableOpacity onPress={() => onSelect(index)} key={"btn"+index}>
        <Text style={buttonStyle}>{index + 1}</Text>
      </TouchableOpacity>
    })
  
    return (<View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 10 }}>
      {buttons}
    </View>)
  }

  export default GroupButtons;