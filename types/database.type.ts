import { Models } from "react-native-appwrite";

export interface Habbit extends Models.Document {
  $id: string;
  title: string;
  description: string;
  streak_count: number;
  last_completed: string;
  frequency: string;
  $createdAt: string;
}
