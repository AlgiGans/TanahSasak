import React, { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const destinations = [
  { id: "1", title: "Pantai Kuta", location: "Lombok Tengah", icon: "beach" },
  { id: "2", title: "Gunung Rinjani", location: "Lombok Utara", icon: "mountain" },
  { id: "3", title: "Desa Sade", location: "Lombok Tengah", icon: "home" },
  { id: "4", title: "Gili Trawangan", location: "Lombok Utara", icon: "ferry" },
];

const HomeScreen = () => {
  const [search, setSearch] = useState("");

  const filteredDestinations = destinations.filter((destination) =>
    destination.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>TanahSasak</Text>
        <Icon name="account-circle" size={32} color="#4CAF50" />
      </View>

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <Icon name="magnify" size={24} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Cari destinasi..."
          placeholderTextColor="#aaa"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
      </View>

      {/* Destinations List */}
      <FlatList
        data={filteredDestinations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Icon name={item.icon} size={40} color="#4CAF50" />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSubtitle}>{item.location}</Text>
            </View>
            <Icon name="chevron-right" size={24} color="#999" />
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8" },
  header: { padding: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#ddd" },
  headerText: { fontSize: 24, fontWeight: "bold", color: "#4CAF50" },
  searchContainer: { flexDirection: "row", alignItems: "center", backgroundColor: "#fff", borderRadius: 10, padding: 10, margin: 20, elevation: 4 },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 16, color: "#333" },
  card: { flexDirection: "row", alignItems: "center", backgroundColor: "#fff", padding: 15, borderRadius: 12, marginVertical: 8, marginHorizontal: 20, elevation: 5 },
  cardInfo: { flex: 1, marginLeft: 15 },
  cardTitle: { fontSize: 16, fontWeight: "bold" },
  cardSubtitle: { fontSize: 14, color: "#777" },
});

export default HomeScreen;