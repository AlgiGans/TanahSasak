import React from "react";
import { ScrollView, TouchableOpacity, Text } from "react-native";

const ListHorizontal = ({ locations, selectedLocation, onSelect }) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterContainer}>
    {locations.map((loc) => (
      <TouchableOpacity
        key={loc}
        style={[styles.filterButton, selectedLocation === loc && styles.activeFilter]}
        onPress={() => onSelect(selectedLocation === loc ? "" : loc)}
      >
        <Text style={styles.filterText}>{loc}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
);

const styles = {
  filterContainer: { flexDirection: "row", paddingHorizontal: 20, marginBottom: 10 },
  filterButton: { backgroundColor: "#ddd", padding: 8, borderRadius: 10, marginRight: 10 },
  activeFilter: { backgroundColor: "#4CAF50" },
  filterText: { fontSize: 14, color: "#333" }
};

export default ListHorizontal;
