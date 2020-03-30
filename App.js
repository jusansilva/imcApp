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
  Image,
  TouchableOpacity
} from 'react-native';
import { black } from 'color-name';
import { tsConstructorType } from '@babel/types';



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { altura: 0, massa: 0, result: 0, textResposta: "", img: " " }
    this.calcular = this.calcular.bind(this)
  }
  calcular() {
    let peso = parseFloat(this.state.massa.toString().replace(",", "."));
    let alturas = parseFloat(this.state.altura.toString().replace(",", ".")) * parseFloat(this.state.altura.toString().replace(",", "."));
    let imc = peso / alturas;
    let nowState = this.state;
    nowState.result = imc;

    if (imc < 18.5) {
      nowState.textResposta = "Abaixo do peso"; 
      nowState.img = <Image style={styles.image} source={require("./resorces/img/abh.jpeg")}/>
    } else if (imc >= 18.5 && imc <= 24.9) {
      nowState.textResposta = "Peso normal";
      nowState.img = <Image style={styles.image} source={require("./resorces/img/pnh.jpeg")}/>
    } else if (imc >= 25 && imc <= 29, 9) {
      nowState.textResposta = "Sobrepeso";
      nowState.img = <Image style={styles.image} source={require("./resorces/img/sph.jpeg")}/>
    } else if (imc <= 30 && imc <= 34.9) {
      nowState.textResposta = "Obesidade grau 1";
      nowState.img = <Image style={styles.image} source={require("./resorces/img/ob1h.jpeg")}/>
    } else if (imc <= 35 && imc <= 39, 9) {
      nowState.textResposta = "Obesidade grau 2";
      nowState.img = <Image style={styles.image} source={require("./resorces/img/ob2h.jpeg")}/>
    } else {
      nowState.textResposta = "Obesidade grau 3";
      nowState.img = <Image style={styles.image} source={require("./resorces/img/ob3h.jpeg")}/>
    }
    console.log(this.state.img);

    this.setState(nowState);

  }

  render() {

    return (
      <>
        <View style={styles.conteiner}>
          <View style={styles.inputConteiner}>
            <TextInput placeholder='Altura' keyboardType='numeric' style={styles.input} onChangeText={(altura) => { this.setState({ altura }) }} />
            <TextInput placeholder='Massa' keyboardType='numeric' style={styles.input} onChangeText={(massa) => { this.setState({ massa }) }} />
          </View>
          <TouchableOpacity style={styles.button} onPress={this.calcular.bind()}><Text style={styles.textButton}>Calcular</Text></TouchableOpacity>
          <Text style={styles.result}>{this.state.result.toFixed(2)}</Text>
          <Text style={[styles.result, { fontSize: 35 }]}>{this.state.textResposta}</Text>
          {this.state.img !== " " && 
          this.state.img}
          
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
  }, 
  image:{
    alignSelf: 'center',
    width: 250,
    height: 250,
    borderColor: '#000',
    resizeMode:"contain",
  }

});


