//import React, { useState } from "react";
import React, { Component } from 'react';
import { View, Picker, StyleSheet, Text } from "react-native";

export default class CustomPicker extends Component {
	state = {
		value: "FURNITURE",
	};

  updateCategroy = (value) => {
      this.setState({ value: value });
   }

	render() {
    const { tradeCategoryCodes, selectTradeCategoryCode } = this.props;
		//console.log(this.props);
		const { value } = this.state;

		return (
			<View style={styles.container}>
        <Text style={styles.title}>카테고리</Text>
        <View style={styles.inputContainer}>


            <Picker
              style={styles.selectbox}
              selectedValue = {this.state.value}
              onValueChange = {(value) => {
                this.setState({
                  value: value,
                });
                selectTradeCategoryCode(value);
              }}
            >
            {tradeCategoryCodes.map(res => {
    					return (
                  <Picker.Item label={res.label} value={res.value} />
              	);
            	})}
            </Picker>

      </View>
    </View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title:{
    color: '#04B486',
    fontWeight: 'bold',
    fontSize: 20,
  },
  selectbox: {
    height: 30,
    width: 150
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:10,
      borderBottomWidth: 1,
      width:160,
      height:45,
      marginBottom:5,
      flexDirection: 'row',
      alignItems:'center',
      marginTop: 5,
      marginLeft: 10
  },
});
