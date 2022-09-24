import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "react-native-axios";
const cheerio = require("react-native-cheerio");
var width = Dimensions.get("window").width;
const DataFetching = (props) => {
    const [data, setData] = useState([]);
    const Food_inforamtion = [];
    useEffect(() => {
        axios
            .get(props.url)
            .then((res) => {
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
                            <Text>{item[0]}</Text>
                        </View>
                        <View style={styles.itemInfo} >
                            <View style={styles.ItemDescription}>
                                <Text style={styles.text}>{item_description}</Text>
                            </View>
                            <View style={styles.ItemPrice}>
                                <Text>{item[2]}</Text>
                            </View>
                        </View>
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
        backgroundColor: "#D9D9D9"
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
        backgroundColor: "white",
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        elevation: 12
    },
    text: {
        fontSize: 40,
    },
    ItemFood: {
        alignItems: "flex-start",
    },
    itemInfo: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    ItemPrice: {
        width: 100,
        height: 50,
        marginRight: 20,
        borderRadius: 20,
        alignSelf: "flex-end",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 1,
    },
});
