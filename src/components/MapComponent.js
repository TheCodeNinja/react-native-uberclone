import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "../global/mapStyle";

class MapComponent extends Component {
  render() {
    return (
      <View>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          customMapStyle={mapStyle}
        />
      </View>
    );
  }
}

export default MapComponent;

const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%",
  },
});
