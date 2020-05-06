import React, { useState } from "react";
import { View, Picker, StyleSheet, Text } from "react-native";

export default function CustomPicker() {
  const [selectedValue, setSelectedValue] = useState("furniture");
  return (
    <View >
      <Text>카테고리</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="가구" value="furniture" />
        <Picker.Item label="삽" value="shovel" />
        <Picker.Item label="낚시대" value="fishingrod" />
        <Picker.Item label="사다리" value="ladder" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});
