import React from "react";
import { View, FlatList, Text } from "react-native";

const ListLabs = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 1 }}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 15,
              marginVertical: 8,
              marginHorizontal: 16,
            }}
          >
            <Text style={{ fontSize: 26 }}>
              • {item.hour} - {item.lab}
            </Text>
          </View>
        )}
        data={props.data}
      />
    </View>
  );
};

export default ListLabs;
