import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

const MensaLocation = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 49.0069,
          longitude: 8.4037,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 49.0263,
            longitude: 8.3854,
          }}
          pinColor="gold"
          title="Menseria Erzbergerstraße"
          description="Erzbergerstraße 121, 76133 Karlsruhe"
        />
        <Marker
          coordinate={{
            latitude: 49.0147,
            longitude: 8.394,
          }}
          pinColor="gold"
          title="Mensa Moltke Karlsruhe"
          description="Moltkestraße 12, 76133 Karlsruhe"
        />
        <Marker
          coordinate={{
            latitude: 49.0119,
            longitude: 8.4169,
          }}
          pinColor="gold"
          title="Mensa am Adenauerring Karlsruhe"
          description="Adenauerring 7, 76131 Karlsruhe"
        />
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
export default MensaLocation;
