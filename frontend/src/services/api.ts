// src/services/api.ts
const API_URL = "http://192.168.1.100:5000/api/workouts";
// ⚠️ LET OP: op je mobiel moet dit jouw PC’s IP-adres zijn, bv: "http://192.168.0.10:5000/api/workouts"

export async function getWorkouts() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch workouts");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
