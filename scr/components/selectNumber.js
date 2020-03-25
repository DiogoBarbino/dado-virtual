import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Icon,Slider } from 'react-native-elements';

const SelectNumber = ({ color, value, onValueChange }) => {
    let selectColor = color || "#6AC0FF"
    return (<View >
        <View style={{flexDirection:"row",justifyContent:'space-evenly',alignItems:'center',marginBottom:10}}>
            <Icon name="chevron-left" type='font-awesome' reverse color={selectColor} onPress={()=>onValueChange(value-1)} />
            <Text style={{paddingHorizontal:16,fontSize:30,color:"#999999"}}>{value}</Text>
            <Icon name="chevron-right" type='font-awesome' reverse color={selectColor} onPress={()=>onValueChange(value+1)}/>
        </View>
        <Slider 
            value={value}
            onValueChange={onValueChange}
            minimumValue={2}
            maximumValue={99}
            thumbStyle={{width:35,height:35,borderRadius:18,backgroundColor:selectColor}}
            
        />
    </View>)
}

export default SelectNumber;