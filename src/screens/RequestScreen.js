import React from "react";
import {
  Dimensions,
  Image,
  Text, 
  View, 
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Avatar, Icon } from "react-native-elements";
import MapComponent from "../components/MapComponent";
import { colors, parameters } from "../global/styles";

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const RequestScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.goBack}>
        <Icon
          type="material-community"
          name="arrow-left"
          color={colors.grey1}
          size={32}
        />
      </View>

      <View style={styles.header}>
        <TouchableOpacity>
          <View style={styles.headerTitle}>
            <Avatar
              rounded
              avatarStyle={{}}
              size={30}
              source={require("../../assets/blankProfilePic.jpg")}
            />
            <Text style={{ marginLeft: 5 }}>For Someone</Text>
            <Icon
              type="material-community"
              name="chevron-down"
              color={colors.grey1}
              size={26}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.headerBody}>
          <View style={styles.headerBodyLeft}>
            <Image
              style={styles.image1}
              source={require("../../assets/transit.png")}
            />
          </View>
          <View style={styles.headerBodyRight}>
            <TouchableOpacity
            // onPress={() => navigation.navigate("DestinationScreen")}
            >
              <View style={styles.fromWhereWrapper}>
                <Text style={styles.fromWhere}>From where</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.row}>
              {/* toWhere Row Left */}
              <TouchableOpacity>
                <View style={styles.toWhereWrapper}>
                  <Text style={styles.toWhere}>...</Text>
                </View>
              </TouchableOpacity>
              {/* toWhere Row Right */}
              <View style={styles.iconPlus}>
                <Icon
                  type="material-community"
                  name="plus-thick"
                  color={colors.black}
                  size={25}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <MapComponent />
    </View>
  );
};

export default RequestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: parameters.statusBarHeight,
  },
  goBack: {
    position: "absolute",
    top: 40,
    left: 12,
    height: 40,
    width: 40,
    backgroundColor: colors.white,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    zIndex: 8,
  },
  header: {
    height: SCREEN_HEIGHT * 0.21,
    alignItems: "center",
    zIndex: 5,
    backgroundColor: colors.white,
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
    marginBottom: 10,
    backgroundColor: colors.white,
    // height:30,
    zIndex: 10,
  },
  headerBody: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "yellow",
  },
  headerBodyLeft: {},
  headerBodyRight: {},
  fromWhereWrapper: {
    backgroundColor: colors.grey6,
    width: SCREEN_WIDTH * 0.7,
    height: 40,
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 10,
    paddingLeft: 10,
  },
  fromWhere: {
    fontSize: 16,
    color: colors.grey1,
  },
  toWhereWrapper: {
    backgroundColor: colors.grey7,
    width: SCREEN_WIDTH * 0.7,
    height: 40,
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 10,
    paddingLeft: 10,
  },
  toWhere: {
    color: colors.grey2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconPlus: {
    marginLeft: 10,
  },
});
