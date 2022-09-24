import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { AlfaSlabOne_400Regular } from "@expo-google-fonts/alfa-slab-one";
import { DaysOne_400Regular } from "@expo-google-fonts/days-one";
import {
  ElMessiri_400Regular,
  ElMessiri_500Medium,
  ElMessiri_600SemiBold,
  ElMessiri_700Bold,
} from "@expo-google-fonts/el-messiri";

const Home = () => {
  let [fontloaded] = useFonts({
    AlfaSlabOne_400Regular: AlfaSlabOne_400Regular,
    DaysOne_400Regular: DaysOne_400Regular,
    ElMessiri_400Regular: ElMessiri_400Regular,
    ElMessiri_500Medium: ElMessiri_500Medium,
    ElMessiri_600SemiBold: ElMessiri_600SemiBold,
    ElMessiri_700Bold: ElMessiri_700Bold,
  });
  if (!fontloaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={styles.Main}>
      <ScrollView>
        <View style={styles.header}>
            <Text style={styles.headerText}>Mensa App</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.bodyText}>
              An app made by one student for all students
            </Text>
            <Text style={styles.bodyText}>Emojis meaning:</Text>
            <Text style={styles.bodyTextIcons}>
              🐷 : <Text style={styles.bodyText}>Schwein / Pig</Text>
            </Text>
            <Text style={styles.bodyTextIcons}>
              🌱 : <Text style={styles.bodyText}>Vegan</Text>
            </Text>
            <Text style={styles.bodyTextIcons}>
              🥗 : <Text style={styles.bodyText}>Vegetarisch / Vegetarian</Text>
            </Text>
            <Text style={styles.bodyTextIcons}>
              🐮 : <Text style={styles.bodyText}>Rind / Beef</Text>
            </Text>
            <Text style={styles.bodyTextIcons}>
              🐟 : <Text style={styles.bodyText}>Fisch / Fish</Text>
            </Text>
            <Text style={styles.bodyTextIcons}>
              🐑 : <Text style={styles.bodyText}>Lamm / Lamb</Text>{" "}
            </Text>
            <Text style={styles.bodyTextIcons}>
              🐔 : <Text style={styles.bodyText}>Hähnchen / Chicken</Text>{" "}
            </Text>
            <Text style={styles.bodyTextIcons}>
              🤷 : <Text style={styles.bodyText}>Unbekannt / Unknown</Text>{" "}
            </Text>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  Main: {
    display: "flex",
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    alignSelf: "stretch",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 5,
    borderBottomColor: "black",
  },
  headerText: {
    fontSize: 22,
    fontFamily: "AlfaSlabOne_400Regular",
  },
  body: {
    marginTop: 40,
    alignSelf: "stretch",
    paddingLeft: 5,
  },
  bodyText: {
    fontFamily: "ElMessiri_600SemiBold",
    fontSize: 20,
    marginBottom: 20,
  },
  bodyTextIcons: {
    paddingLeft: 20,
    fontSize: 30,
  },
});
