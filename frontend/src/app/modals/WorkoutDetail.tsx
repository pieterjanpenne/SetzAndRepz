import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function WorkoutDetail() {
  const { id } = useLocalSearchParams();

  // Voor nu gebruiken we mock data gebaseerd op het ID
  const getWorkoutById = (workoutId: string) => {
    const mockWorkouts = [
      {
        _id: "1",
        name: "Push Day",
        sets: 3,
        reps: 12,
        exercises: ["Push-ups", "Bench Press", "Shoulder Press"],
      },
      {
        _id: "2",
        name: "Pull Day",
        sets: 4,
        reps: 10,
        exercises: ["Pull-ups", "Rows", "Lat Pulldown"],
      },
      {
        _id: "3",
        name: "Leg Day",
        sets: 3,
        reps: 15,
        exercises: ["Squats", "Lunges", "Leg Press"],
      },
    ];
    return mockWorkouts.find((w) => w._id === workoutId);
  };

  const workout = getWorkoutById(id as string);

  if (!workout) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Workout not found</Text>
        <Button title="Go Back" onPress={() => router.back()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{workout.name}</Text>

      <View style={styles.info}>
        <Text style={styles.infoText}>Sets: {workout.sets}</Text>
        <Text style={styles.infoText}>Reps: {workout.reps}</Text>
      </View>

      <Text style={styles.subtitle}>Exercises:</Text>
      {workout.exercises.map((exercise, index) => (
        <View key={index} style={styles.exerciseItem}>
          <Text style={styles.exerciseText}>• {exercise}</Text>
        </View>
      ))}

      <View style={styles.buttons}>
        <Button title="Close" onPress={() => router.back()} />
        <Button
          title="Start Workout"
          onPress={() => {
            // Later: Start workout functionality
            console.log("Starting workout:", workout.name);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
    padding: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
  },
  infoText: {
    fontSize: 18,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  exerciseItem: {
    padding: 10,
    marginBottom: 5,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
  },
  exerciseText: {
    fontSize: 16,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
  error: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "red",
  },
});
