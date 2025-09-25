import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { getWorkouts } from "../../services/api";
import { router } from "expo-router";

type Workout = {
  _id: string;
  name: string;
  sets: number;
  reps: number;
};

export default function Home() {
  const [workouts, setWorkouts] = useState<Workout[]>([
    { _id: "1", name: "Push Day", sets: 3, reps: 12 },
    { _id: "2", name: "Pull Day", sets: 4, reps: 10 },
    { _id: "3", name: "Leg Day", sets: 3, reps: 15 },
  ]); // Tijdelijk hard-coded data
  const [loading, setLoading] = useState(false); // Set naar false voor testen

  // Tijdelijk uitcommentariëren van useEffect voor testen
  /*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWorkouts();
        console.log("Received workouts:", data); // Debug log
        setWorkouts(data);
      } catch (error) {
        console.error("Error fetching workouts:", error);
        // Fallback data om te testen
        setWorkouts([
          { _id: "1", name: "Push Day", sets: 3, reps: 12 },
          { _id: "2", name: "Pull Day", sets: 4, reps: 10 },
          { _id: "3", name: "Leg Day", sets: 3, reps: 15 },
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  */

  if (loading) {
    return (
      <View style={styles.center}>
        <Text>Loading workouts...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Workouts</Text>
        <Button
          title="Add Workout"
          onPress={() => router.push("/modals/AddWorkout")}
        />
      </View>
      {workouts.length === 0 ? (
        <Text style={styles.noData}>No workouts found</Text>
      ) : (
        <FlatList
          data={workouts}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                router.push(`/modals/WorkoutDetail?id=${item._id}`)
              }
            >
              <Text style={styles.name}>{item.name}</Text>
              <Text>
                {item.sets} sets x {item.reps} reps
              </Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: { fontSize: 24, fontWeight: "bold" },
  noData: { textAlign: "center", marginTop: 50, fontSize: 16, color: "#666" },
  card: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
  name: { fontSize: 18, fontWeight: "600" },
});
