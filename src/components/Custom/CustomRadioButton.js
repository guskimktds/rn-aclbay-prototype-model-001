import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class CustomRadioButton extends Component {
	state = {
		value: "SELL",
	};

	render() {
		const { tradeTypeCodes, selectTradeTypeCode } = this.props;
		//console.log(this.props);
		const { value } = this.state;

		return (
			<View style={styles.container}>
				{tradeTypeCodes.map(res => {
					return (
						<View key={res.value} style={styles.subContainer}>
							<TouchableOpacity
								style={styles.radioCircle}
								onPress={() => {
									this.setState({
										value: res.value,
									});
									selectTradeTypeCode(res.value);
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
    marginBottom: 35,
    alignItems: 'center',
    flexDirection: 'row',
		justifyContent: 'space-between',
	},
	subContainer: {
    alignItems: 'center',
    flexDirection: 'row',
		justifyContent: 'space-between',
		marginLeft: 10
	},
  radioText: {
    marginRight: 15,
		marginLeft: 5,
    fontSize: 22,
    color: '#0B173B',
    fontWeight: '800'
  },
	radioCircle: {
		height: 24,
		width: 24,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#01A9DB',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 12,
		height: 12,
		borderRadius: 50,
		backgroundColor: '#0B173B',
  }
});
