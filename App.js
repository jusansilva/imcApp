/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { black } from 'color-name';
import { tsConstructorType } from '@babel/types';


export default class App extends Component {
constructor(props){
  super(props)
  this.state = { altura: 0, massa: 0, result: 0, textResposta: ""}
  this.calcular = this.calcular.bind(this)
}
 calcular(){
   let imc = this.state.massa / (this.state.altura * this.state.altura);
   console.log(this.state.altura);
   let nowState = this.state;
   nowState.result = imc;
   this.setState({nowState});

 }

render(){

  return (
    <>
      <View style={styles.conteiner}>
        <View style={styles.inputConteiner}>
          <TextInput placeholder='Altura' keyboardType='numeric' style={styles.input}  onChangeText={(altura) => {this.setState({altura})}}/>
          <TextInput placeholder='Massa' keyboardType='numeric' style={styles.input} onChangeText={(massa) => {this.setState({massa})}}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.textButton}>Calcular</Text></TouchableOpacity>
        <Text style={styles.result}>{this.state.result.toFixed(2)}</Text>
        <Text style={[styles.result, { fontSize: 35 }]}>{this.state.textResposta}</Text>
      </View>
    </>
  );
}

};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputConteiner: {
    flexDirection: 'row',

  },
  input: {
    height: 80,
    textAlign: 'center',
    width: '50%',
    fontSize: 50,
    marginTop: 60,
    color: "#5201cf"
  },
  button: {
    backgroundColor: '#3399ff'
  },
  textButton: {
    alignSelf: 'center',
    padding: 25,
    fontSize: 35,
    color: "#fff"
  },
  result: {
    alignSelf: 'center',
    color: '#5201cf',
    fontSize: 60,
    padding: 10,
  }

});


