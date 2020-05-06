import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class CustomRadioButton extends Component {
	state = {
		value: null,
	};

	render() {
		const { PROP } = this.props;
		const { value } = this.state;

		return (
			<View style={styles.container}>
				{PROP.map(res => {
					return (
						<View key={res.key} style={styles.subContainer}>

							<TouchableOpacity
								style={styles.radioCircle}
								onPress={() => {
									this.setState({
										value: res.key,
									});
								}}>
                {value === res.key && <View style={styles.selectedRb} />}
							</TouchableOpacity>
							<Text style={styles.radioText}>{res.text}</Text>
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
    marginRight: 25,
		marginLeft: 3,
    fontSize: 20,
    color: '#0B173B',
    fontWeight: '500'
  },
	radioCircle: {
		height: 30,
		width: 30,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#01A9DB',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 15,
		height: 15,
		borderRadius: 50,
		backgroundColor: '#0B173B',
  },
	subject: {
		fontSize: 20,
	}
});
