import React from "react";
import { ScrollView, TouchableOpacity, Image, Text } from "react-native";
import Animated, { SlideInLeft } from "react-native-reanimated";
import styles from "./App.styles";
import userData from "./data.json";

const UserList = ({ navigation }) => {
  return (
    <ScrollView>
      {userData.map((user, index) => (
        <Animated.View
          key={user.name}
          style={styles.card}
          entering={SlideInLeft.delay(index * 100)}
        >
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => navigation.navigate("Profile", { user })}
          >
            <Image
              source={{ uri: user.photo_url }}
              style={styles.avatar}
            />
            <Text style={styles.boldText}>{user.name}</Text>
            <Text>{user.email}</Text>
          </TouchableOpacity>
        </Animated.View>
      ))}
    </ScrollView>
  );
};

export default UserList;
