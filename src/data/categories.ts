import { Category } from "@/types/category";

export const mockCategories: Category[] = [
  {
    id: "cat-1",
    name: "Ruang Makan",
    slug: "ruang-makan",
    description: "Koleksi meja, kursi, dan set ruang makan dari kayu jati dan olahan berkualitas tinggi.",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1000&auto=format&fit=crop",
    itemCount: 12,
  },
  {
    id: "cat-2",
    name: "Ruang Keluarga",
    slug: "ruang-keluarga",
    description: "Sofa empuk, meja kopi kayu, dan perlengkapan ruang santai keluarga yang hangat.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop",
    itemCount: 18,
  },
  {
    id: "cat-3",
    name: "Kamar Tidur",
    slug: "kamar-tidur",
    description: "Tempat tidur minimalis, nakas, dan lemari pakaian dengan keindahan serat kayu alami.",
    image: "https://images.unsplash.com/photo-1540518614846-7ede433c517a?q=80&w=1000&auto=format&fit=crop",
    itemCount: 15,
  },
];
