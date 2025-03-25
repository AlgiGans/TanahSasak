import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ItemSmall = ({ item, toggleFavorite, isFavorite, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={() => onPress(item)}>
    <Icon name={item.icon} size={40} color="#4CAF50" />
    <View style={styles.cardInfo}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardSubtitle}>{item.location}</Text>
    </View>
    <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
      <Icon name={isFavorite ? "heart" : "heart-outline"} size={24} color="#e63946" />
    </TouchableOpacity>
  </TouchableOpacity>
);

const styles = {
  card: { flexDirection: "row", alignItems: "center", backgroundColor: "#fff", padding: 15, borderRadius: 12, marginVertical: 8, marginHorizontal: 20, elevation: 5 },
  cardInfo: { flex: 1, marginLeft: 15 },
  cardTitle: { fontSize: 16, fontWeight: "bold" },
  cardSubtitle: { fontSize: 14, color: "#777" }
};

export default ItemSmall;
