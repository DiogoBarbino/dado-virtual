import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { StackActions } from '@react-navigation/native';
import { connect } from 'react-redux';
import Color from '../helpers/colors';
import { setNumberOfDice, setNumberOfFace, selectColor, updateRandomDices, updateDices, setActive } from '../redux/actions/settings';

import GroupDice from '../components/groupDice';

class Home extends React.Component {

  constructor(props) {
    super(props);
    // console.log(dices);
    this.state = {
      timer: null,
      counter: 50,
      loading: true
    }
  }

  lancar() {
    this.props.setActive(true);
    this.setState({
      counter: 0
    },()=>this.tick());
    
  }

  async componentDidMount() {
    if (this.state.loading) {
      //console.log('inicializou as variaveis')
      try {
        let data = await AsyncStorage.getItem('numberOfFaces');
        let numberOfFaces = JSON.parse(data) || 6;
        await this.props.setNumberOfFace(numberOfFaces);
        //console.log("Sucesso ao ler o numero de faces!" + numberOfFaces);
      } catch (error) {
        // Error retrieving data
        //console.log("Erro ao ler o numero de faces!" + error);
        await this.props.setNumberOfFace(6);
      }

      try {
        let data = await AsyncStorage.getItem('colorIndex');
        let colorIndex = JSON.parse(data) || 1;
        await this.props.selectColor(colorIndex);
        //console.log("Sucesso ao ler a cor!" + colorIndex);
      } catch (error) {
        // Error retrieving data
        //.log("Erro ao ler a cor!" + error);
        await this.props.selectColor(1);
      }

      try {
        let data = await AsyncStorage.getItem('numberOfDice');
        let numberOfDice = JSON.parse(data) || 1;
        await this.props.setNumberOfDice(numberOfDice);
       // console.log("Sucesso ao ler o numero de dados!" + numberOfDice);
      } catch (error) {
        // Error retrieving data
       // console.log("Erro ao ler o numero de dados!" + error);
        await this.props.setNumberOfDice(0);
      }
      await this.setState({ loading: false });
    }

    //let timer = setInterval(this.tick, 100);
    //await this.setState({ timer });
  }

  componentWillUnmount() {
    //clearInterval(this.state.timer);
  }

  tick = async () => {
    //console.log("Timer:"+this.state.counter);
    if (this.state.counter < 25) {
      if (this.state.counter === 24) {
        await this.props.setActive(false);
      }
      await this.props.updateRandomDices();
      await this.setState({
        counter: this.state.counter + 1,
      });
      await setTimeout(()=>this.tick(),100);
    }
  }

  render() {
    let boxStyle = [styles.box];
    let textStyle = [styles.text];
    if (this.state.counter < 25) boxStyle.push(styles.boxActive);
    if (this.state.counter < 25) textStyle.push(styles.textActive);
    return (
      <View style={styles.container}>
        <Header
          statusBarProps={{ barStyle: 'light-content', backgroundColor: Color[this.props.colorIndex].color }}
          barStyle="light-content"
          rightComponent={<Icon name="settings" size={60} color="#999999" onPress={() => { this.props.navigation.dispatch(StackActions.push('Settings')) }} allowFontScaling={false} />}
          containerStyle={{
            backgroundColor: '#FFF',
            padding: 20
          }}
        />
        <View style={styles.content}>

          <GroupDice />


          <TouchableOpacity
            onPress={() => { this.lancar() }}
          >
            <View style={[styles.btn, { borderColor: Color[this.props.colorIndex].color }]}>
              <Text style={[styles.btnText, { color: Color[this.props.colorIndex].color }]}>Lançar Dado</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  btn: {
    paddingHorizontal: 35,
    paddingVertical: 15,
    borderWidth: 2,
    borderRadius: 10
  },
  btnText: {
    fontSize: 24
  },
  box: {
    width: 200,
    height: 200,
    borderColor: '#6AC0FF',
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30
  },
  text: {
    color: '#6AC0FF',
    fontSize: 120,
    marginBottom: 10
  },
  boxActive: {
    borderColor: '#FFD700',
  },
  textActive: {
    color: '#FFD700',
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
  updateRandomDices: () => dispatch(updateRandomDices()),
  updateDices: () => dispatch(updateDices()),
  setActive: (value) => dispatch(setActive(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);