import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { Icon } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { colors, parameters } from "../global/styles";
import { filterData } from "../global/data";

const SCREEN_WIDTH = Dimensions.get("window").width;

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.iconHamburgur}>
          <Icon
            type="material-community"
            name="menu"
            color={colors.white}
            size={40}
          />
        </View>
      </View>

      <ScrollView>
        <View style={styles.header}>
          <Text
            style={[styles.fontWhiteH3, { paddingBottom: 20, paddingTop: 16 }]}
          >
            Destress your commute
          </Text>
          <View style={styles.headerRow}>
            <View style={styles.headerBodyLeft}>
              <Text style={styles.fontWhiteH5}>
                Read a book.Take a nap. Stare out the window
              </Text>
              <TouchableOpacity
                onPress={() => {
                  // navigation.navigate("RequestScreen", { state: 0 });
                }}
              >
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Ride with Uber</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.headerBodyRight}>
              <Image
                style={styles.carImage}
                source={require("../../assets/uberCar.png")}
              />
            </View>
          </View>
        </View>

        <View style={styles.horizontalList}>
          <FlatList
            numRows={4}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <View style={styles.cardImageWrapper}>
                  <Image style={styles.cardImage} source={item.image} />
                </View>
                <View style={styles.cardText}>
                  <Text style={styles.fontH3}>{item.name}</Text>
                </View>
              </View>
            )}
          />
        </View>

        <View style={styles.sectionWhereTo}>
          <Text style={[styles.fontDarkH4, { marginLeft: 15 }]}>
            Where to ?
          </Text>
          <View style={styles.sectionWhereToRight}>
            <Icon
              type="material-community"
              name="clock-time-four"
              color={colors.grey1}
              size={26}
            />
            <Text style={{ marginLeft: 5 }}>Now</Text>
            <Icon
              type="material-community"
              name="chevron-down"
              color={colors.grey1}
              size={26}
            />
          </View>
        </View>

        <View style={styles.sectionAddress}>
          <View style={styles.sectionAddressLeft}>
            <View style={styles.iconAddress}>
              <Icon
                type="material-community"
                name="map-marker"
                color={colors.black}
                size={22}
              />
            </View>
            <View>
              <Text style={styles.fontDarkH5}>32 Olivia Rd</Text>
              <Text style={{ color: colors.grey3 }}>
                Klipfontein 83-Ir, Boksburg
              </Text>
            </View>
          </View>
          <View style={styles.sectionAddressRight}>
            <Icon
              type="material-community"
              name="chevron-right"
              color={colors.grey}
              size={26}
            />
          </View>
        </View>

        <View style={{ ...styles.sectionAddress, borderBottomWidth: 0 }}>
          <View style={styles.sectionAddressLeft}>
            <View style={styles.iconAddress}>
              <Icon
                type="material-community"
                name="map-marker"
                color={colors.black}
                size={22}
              />
            </View>
            <View>
              <Text style={styles.fontDarkH5}>32 Olivia Rd</Text>
              <Text style={{ color: colors.grey3 }}>
                Klipfontein 83-Ir, Boksburg
              </Text>
            </View>
          </View>
          <View style={styles.sectionAddressRight}>
            <Icon
              type="material-community"
              name="chevron-right"
              color={colors.grey}
              size={26}
            />
          </View>
        </View>

        <Text style={{ ...styles.fontDarkH4, marginLeft: 20 }}>
          {" "}
          Around you
        </Text>

        <View style={{ alignItems: "center", justifyContent: "center" }}>
          {/* TODO - MapView */}
        </View>
      </ScrollView>

      {/* For Android Only */}
      <StatusBar
        barStyle="light"
        backgroundColor="#2058c0"
        translucent={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fontWhiteH1: {
    color: colors.white,
    fontSize: 34,
  },
  fontWhiteH2: {
    color: colors.white,
    fontSize: 30,
  },
  fontWhiteH3: {
    color: colors.white,
    fontSize: 26,
  },
  fontWhiteH4: {
    color: colors.white,
    fontSize: 22,
  },
  fontWhiteH5: {
    fontSize: 18,
    color: colors.white,
  },
  fontDarkH2: {
    fontSize: 30,
    color: colors.black,
  },
  fontDarkH4: {
    fontSize: 22,
    color: colors.black,
  },
  fontDarkH5: {
    fontSize: 18,
    color: colors.black,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 30,
    paddingTop: parameters.statusBarHeight,
  },
  topBar: {
    height: parameters.headerHeight,
    backgroundColor: colors.blue,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  iconHamburgur: {
    marginLeft: 10,
  },
  header: {
    backgroundColor: colors.blue,
    paddingLeft: 20,
  },
  headerRow: {
    flexDirection: "row",
    paddingTop: 30,
    // backgroundColor: "yellow",
  },
  headerBodyLeft: {
    flex: 1,
    marginTop: -25,
    // backgroundColor: "orange",
  },
  btn: {
    height: 40,
    width: 150,
    backgroundColor: colors.black,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  btnText: {
    color: colors.white,
    fontSize: 17,
    marginTop: -2,
  },
  carImage: {
    height: 100,
    width: 100,
  },
  horizontalList: {
    // backgroundColor: "orange"
  },
  card: {
    alignItems: "center",
    marginHorizontal: SCREEN_WIDTH / 22,
    marginVertical: 14,
  },
  cardImageWrapper: {
    marginBottom: 5,
    borderRadius: 15,
    backgroundColor: colors.grey6,
    // backgroundColor: "orange"
  },
  cardImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  sectionWhereTo: {
    flexDirection: "row",
    marginTop: 5,
    height: 50,
    backgroundColor: colors.grey6,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },
  sectionWhereToRight: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginRight: 15,
    // backgroundColor:"yellow",
  },
  sectionAddress: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingVertical: 25,
    marginHorizontal: 15,

    borderBottomColor: colors.grey4,
    borderBottomWidth: 1,
    // backgroundColor: "yellow",
  },
  sectionAddressLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconAddress: {
    height: 40,
    width: 40,
    backgroundColor: colors.grey6,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginRight: 20,
  },
  sectionAddressRight: {},
});

export default HomeScreen;
