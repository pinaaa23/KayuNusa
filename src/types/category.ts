export interface Category {
  id: string; // Firestore document ID
  name: string; // e.g. "Ruang Makan", "Ruang Keluarga", "Kamar Tidur"
  slug: string;
  description?: string;
  image: string;
  itemCount?: number;
}
