import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Switch } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ListHorizontal, ItemSmall } from "./src/components";
import { destinations } from "./src/data";

const App = () => {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDestination, setSelectedDestination] = useState(null);

  const toggleFavorite = (id) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]));
  };

  const filteredDestinations = destinations.filter(
    (destination) =>
      destination.title.toLowerCase().includes(search.toLowerCase()) &&
      (selectedLocation === "" || destination.location === selectedLocation)
  );

  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.headerText, darkMode && styles.darkText]}>TanahSasak</Text>
        <Switch value={darkMode} onValueChange={() => setDarkMode(!darkMode)} />
      </View>

      {/* Modern Menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="home" size={24} color="#fff" />
          <Text style={styles.menuText}>Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="heart" size={24} color="#fff" />
          <Text style={styles.menuText}>Favorit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="cog" size={24} color="#fff" />
          <Text style={styles.menuText}>Pengaturan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="account" size={24} color="#fff" />
          <Text style={styles.menuText}>Profil</Text>
        </TouchableOpacity>
      </View>

      {/* Search Input */}
<View style={styles.searchContainer}>
  <View style={styles.searchBox}>
    <Icon name="magnify" size={24} color="#888" style={styles.searchIcon} />
    <TextInput
      style={styles.searchInput}
      placeholder="Cari destinasi..."
      placeholderTextColor="#aaa"
      value={search}
      onChangeText={(text) => setSearch(text)}
    />
  </View>
</View>

      {/* Filter Location */}
      <ListHorizontal
        locations={Array.from(new Set(destinations.map((d) => d.location)))}
        selectedLocation={selectedLocation}
        onSelect={setSelectedLocation}
      />

      {/* Destinations List */}
      <FlatList
        data={filteredDestinations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemSmall item={item} toggleFavorite={toggleFavorite} isFavorite={favorites.includes(item.id)} onPress={setSelectedDestination} />
        )}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    paddingHorizontal: 20,
    marginTop: 15,
    marginBottom: 10, // Memberikan jarak agar tidak bertabrakan dengan ListHorizontal
  },
  
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 6, // Sedikit dikurangi agar tidak terlalu besar
    elevation: 2, // Efek bayangan ringan agar tampak elegan
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  
  searchIcon: {
    marginRight: 10,
  },
  
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  
  
  container: { flex: 1, backgroundColor: "#f8f8f8" },
  darkContainer: { backgroundColor: "#333" },
  header: { padding: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#ddd" },
  headerText: { fontSize: 24, fontWeight: "bold", color: "#4CAF50" },
  darkText: { color: "#fff" },
  menuContainer: { flexDirection: "row", justifyContent: "space-around", paddingVertical: 15, backgroundColor: "#4CAF50", position: "absolute", bottom: 0, width: "100%" },
  menuButton: { alignItems: "center", flex: 1, paddingVertical: 10 },
  menuText: { fontSize: 12, color: "#fff", marginTop: 5 },
});

export default App;
