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
    Button,
    TouchableOpacity
} from 'react-native';
import data from './resorces/data';





export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = { altura: 0, massa: 0, result: 0, textResposta: "", img: " ", sexo: true }
        this.calcular = this.calcular.bind(this)
    }
    calcular() {
        const dados = data;
        let peso = parseFloat(this.state.massa.toString().replace(",", "."));
        let alturas = parseFloat(this.state.altura.toString().replace(",", ".")) * parseFloat(this.state.altura.toString().replace(",", "."));
        let imc = peso / alturas;
        let nowState = this.state;
        nowState.result = imc;

        if (imc < 18.5) {
            nowState.textResposta = "Abaixo do peso";
            if (this.state.sexo === true) {
                nowState.img = < Image style={styles.image}
                    source={require("./resorces/img/abh.jpeg")}
                />
            } else {
                nowState.img = < Image style={styles.image}
                    source={require("./resorces/img/abm.jpeg")}
                />
            }
        } else if (imc >= 18.5 && imc <= 24.9) {
            nowState.textResposta = "Peso normal";
            if (this.state.sexo === true) {
                nowState.img = < Image style={styles.image}
                    source={require("./resorces/img/pnh.jpeg")}
                />
            } else {
                nowState.img = < Image style={styles.image}
                    source={require("./resorces/img/pnm.jpeg")}
                />
            }
        } else if (imc >= 25 && imc <= 29, 9) {
            nowState.textResposta = "Sobrepeso";
            if (this.state.sexo === true) {
                nowState.img = < Image style={styles.image}
                    source={require("./resorces/img/sph.jpeg")}
                />
            } else {
                nowState.img = < Image style={styles.image}
                    source={require("./resorces/img/spm.jpeg")}
                />
            }
        } else if (imc <= 30 && imc <= 34.9) {
            nowState.textResposta = "Obesidade grau 1";
            if (this.state.sexo === true) {
                nowState.img = < Image style={styles.image}
                    source={require("./resorces/img/ob1h.jpeg")}
                />
            } else {
                nowState.img = < Image style={styles.image}
                    source={require("./resorces/img/ob1m.jpeg")}
                />
            }
        } else if (imc <= 35 && imc <= 39, 9) {
            nowState.textResposta = "Obesidade grau 2";
            if (this.state.sexo === true) {
                nowState.img = < Image style={styles.image}
                    source={require("./resorces/img/ob2h.jpeg")}
                />
            } else {
                nowState.img = < Image style={styles.image}
                    source={require("./resorces/img/ob2m.jpeg")}
                />
            }
        } else if (imc > 40) {
            nowState.textResposta = "Obesidade grau 3";
            if (this.state.sexo === true) {
                nowState.img = < Image style={styles.image}
                    source={require("./resorces/img/ob3h.jpeg")}
                />
            } else {
                nowState.img = < Image style={styles.image}
                    source={require("./resorces/img/ob3m.jpeg")}
                />
            }
        } else {
            nowState.img = "";
            nowState.result = 0;
            nowState.textResposta = "adicione os parametros Altura e Massa"
        }
        this.setState(nowState);

    }

    render() {
        return(
            <>
            <View style={styles.conteiner}>
                <View style={styles.inputConteiner}>
                    <TextInput placeholder='Altura'
                        keyboardType='numeric'
                        value={this.state.altura}
                        style={this.state.sexo === true ? styles.input : styles.inputf}
                        onChangeText={
                            (altura) => { this.setState({ altura }) }
                        }/>  
                    <TextInput placeholder='Massa'
                        keyboardType='numeric'
                        value={this.state.massa}
                        style={this.state.sexo === true ? styles.input : styles.inputf}
                        onChangeText={
                            (massa) => { this.setState({ massa }) }
                        }/>
            </View > 
            {this.state.sexo === true ?
            <TouchableOpacity style={styles.button}
                onPress={this.calcular.bind()}> 
                <Text style={styles.textButton}> Calcular </Text>
            </TouchableOpacity> : <TouchableOpacity style={styles.buttonF}
                                    onPress={this.calcular.bind()}> 
                                    <Text style={styles.textButton}> Calcular </Text>
                                    </TouchableOpacity>
                                    } 
                                    <Text style={this.state.sexo === true ? styles.result : styles.resultF}> {this.state.result.toFixed(2)} </Text>  
                                    <Text style={[this.state.sexo === true ? styles.result : styles.resultF, { fontSize: 35 }]}> {this.state.textResposta} </Text> 
                                    {
                                        this.state.img !== " " &&
                                        this.state.img
                                    }

                                    <View style={styles.sexo}>
                                        <View style={styles.buttonView}>
                                            <Button style={styles.buttonSexo}
                                                    onPress={
                                                        () => { this.setState({ sexo: true }) }
                                                    }
                                                    title="Masculino"
                                                    color="#fff" />
                                        </View> 
                                        <View style={styles.buttonViewF} >
                                            <Button style={styles.feminino}
                                                onPress={
                                                    () => { this.setState({ sexo: false }) }
                                                }
                                                title="Feminino"
                                                color="#fff"/>
                                        </View> 
                                    </View> 
                                     
            </View> 
            <View>
            <TouchableOpacity style={this.state.sexo === true? styles.button : styles.buttonF}
                onPress={
                    () => {
                        this.setState({ altura: 0, massa: 0, result: 0, textResposta: "", img: " "})
                    }
                }
            ><Text style={styles.textZerar}>Zerar dados</Text></TouchableOpacity>
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
    color: "#3399ff"                                            
},
inputf: {
    height: 80,
    textAlign: 'center',
    width: '50%',
    fontSize: 50,
    marginTop: 60,
    color: "#ff94c2"                                            
},
button: {
    backgroundColor: '#3399ff'                                            
},
buttonF: {
    backgroundColor: '#ff94c2'                                            
},
textButton: {
    alignSelf: 'center',
    padding: 25,
    fontSize: 35,
    color: "#fff"
},
textZerar:{
    alignSelf:'center',
    padding:15,
    fontSize:25,
    color: "#fff"
},
result: {
    alignSelf: 'center',
    color: '#3399ff',
    fontSize: 60,
    padding: 10,
},
resultF: {
    alignSelf: 'center',
    color: '#ff94c2',
    fontSize: 60,
    padding: 10,
},
image: {
    alignSelf: 'center',
    width: 250,
    height: 250,
    borderColor: '#000',
    resizeMode: "contain",
},
sexo: {
    alignSelf: 'center',
    flexDirection: 'row'
},
buttonView: {
    backgroundColor: '#3399ff',
    marginTop: 20,
},
buttonViewF: {
    backgroundColor: '#ff94c2',
    marginTop: 20,
},
buttonSexo: {
    textAlign: 'center',
}
});