import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Image
 } from 'react-native';

export default class PriceRadioButton extends Component {
	state = {
		value: 'MONEY',
	};

	render() {
    const { priceTypeCodes, selectPriceTypeCode } = this.props;
		//console.log(this.props);
		const { value } = this.state;

		return (
			<View style={styles.container}>
				{priceTypeCodes.map(res => {
					return (
						<View key={res.value} style={styles.radioContainer}>
							<TouchableOpacity
								style={styles.radioCircle}
								onPress={() => {
									this.setState({
										value: res.value,
									});
                  selectPriceTypeCode(res.value);
								}}>
                {value === res.value && <View style={styles.selectedRb} />}
							</TouchableOpacity>
              <Text style={styles.radioText}>{res.label}</Text>
						</View>
					);
				})}


			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10,
    borderWidth: 0
  },
  radioText: {
    marginRight: 5,
		marginLeft: 3,
    fontSize: 17,
    color: '#0B173B',
    fontWeight: '500'
  },
	radioCircle: {
    height: 20,
		width: 20,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#01A9DB',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 10,
		height: 10,
		borderRadius: 50,
		backgroundColor: '#3740ff',
  }
});
