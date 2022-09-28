import { StyleSheet, Text, View, Dimensions, Modal } from "react-native";
import { Button, Icon } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import axios from "react-native-axios";
import { WebView } from "react-native-webview";
const cheerio = require("react-native-cheerio");
var width = Dimensions.get("window").width;

const DataFetching = (props) => {
  const [data, setData] = useState([]);
  const Food_inforamtion = [];
  const [modal, setModal] = useState(false);
  const [searchitem, setSearchItem] = useState();
  const handelModal = () => {
    setModal(!modal);
  };
  useEffect(() => {
    axios.get(props.url).then((res) => {
      const $ = cheerio.load(res.data);
      var numItems = $(".aw-meal-description").length;
      for (let i = 0; i < numItems; i++) {
        var Food = $(".aw-meal-description").eq(i).text();
        var Price = $(".aw-meal-price").eq(i).text();
        var Description = $(".aw-meal-attributes").eq(i).text();
        if (
          Description.includes("ZULETZT") ||
          Description.includes("gestern")
        ) {
          Description = Description.replace("ZULETZT", "");
          Description = Description.replace("gestern", "");
        }
        if (!Price.includes("€")) {
          Food_inforamtion.push(Food + " ; " + Description + " ; " + "0€");
        } else {
          Food_inforamtion.push(Food + " ; " + Description + " ; " + Price);
        }
      }
      setData(Food_inforamtion);
    });
  });

  {
    /*
     * Food :  {item[0]}
     * Description :  {item[1]}
     * Price :  {item[2]}
     */
  }

  return (
    <View style={styles.Main}>
      {data.map((data, index) => {
        var item = data.split(";");
        var item_description;
        if (item[1].includes("Schwein")) {
          item_description = "🐷";
        } else if (item[1].includes("vegan")) {
          item_description = "🌱";
        } else if (item[1].includes("vegetarisch")) {
          item_description = "🥗";
        } else if (item[1].includes("Rind")) {
          item_description = "🐮";
        } else if (item[1].includes("Fisch")) {
          item_description = "🐟";
        } else if (item[1].includes("Lamm")) {
          item_description = "🐑";
        } else if (item[1].includes("Hähnchen")) {
          item_description = "🐔";
        } else {
          item_description = "🤷";
        }

        return (
          <View style={styles.item} key={index}>
            <View style={styles.ItemFood}>
              <Text style={{ color: "white" }}>{item[0]}</Text>
            </View>
            <View style={styles.itemInfo}>
              <View style={styles.ItemDescription}>
                <Text style={styles.text}>{item_description}</Text>
              </View>
              <View style={styles.ItemPicture}>
                <Button
                  buttonStyle={{
                    borderColor: "white",
                    backgroundColor: "#121212",
                    borderWidth: 1,
                    borderStyle: "dotted",
                    borderRadius:40,
                  }}
                  containerStyle={{ width: 150 }}
                  onPress={() => {
                    handelModal();
                    setSearchItem(item[0]);
                  }}
                >
                  <Icon name="search" type="font-awesome" color="white" />
                </Button>
              </View>
              <View style={styles.ItemPrice}>
                <Text style={{ color: "white" }}>{item[2]}</Text>
              </View>
            </View>
            <Modal visible={modal} animationType="slide">
              <WebView
                style={{ alignItems: "stretch" }}
                source={{
                  uri:
                    "https://www.google.com/search?q=" +
                    searchitem +
                    "&tbm=isch&sxsrf",
                }}
              />
              <Button
                buttonStyle={{ backgroundColor: "rgba(39, 39, 39, 1)" }}
                titleStyle={{ color: "white" }}
                containerStyle={{ alignItems: "stretch" }}
                onPress={() => {
                  handelModal();
                  setSearchItem("");
                }}
              >
                <Icon name="backward" type="font-awesome" color="#fff" />
              </Button>
            </Modal>
          </View>
        );
      })}
    </View>
  );
};

export default DataFetching;

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#121212",
  },
  item: {
    marginBottom: 10,
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10,
    width: width,
    height: 180,
    backgroundColor: "#121212",
    shadowColor: "green",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    elevation: 20,
  },
  text: {
    fontSize: 40,
    color: "white",
  },
  ItemFood: {
    alignItems: "flex-start",
  },
  itemInfo: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  ItemPrice: {
    width: 100,
    height: 50,
    marginRight: 20,
    borderRadius: 20,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    backgroundColor: "green",
    borderWidth: 1,
    borderStyle: "dotted",
  },
  ItemPicture: {
    marginTop: 20,
  },
});
