import { Category } from "@/types/category";

export const mockCategories: Category[] = [
  {
    id: "cat-1",
    name: "Ruang Makan",
    slug: "ruang-makan",
    description: "Koleksi meja, kursi, dan set ruang makan dari kayu jati dan olahan berkualitas tinggi.",
    image: "/images/categories/ruang-makan.jpg",
    itemCount: 12,
  },
  {
    id: "cat-2",
    name: "Ruang Keluarga",
    slug: "ruang-keluarga",
    description: "Sofa empuk, meja kopi kayu, dan perlengkapan ruang santai keluarga yang hangat.",
    image: "/images/categories/ruang-keluarga.jpg",
    itemCount: 18,
  },
  {
    id: "cat-3",
    name: "Kamar Tidur",
    slug: "kamar-tidur",
    description: "Tempat tidur minimalis, nakas, dan lemari pakaian dengan keindahan serat kayu alami.",
    image: "/images/categories/kamar-tidur.jpg",
    itemCount: 15,
  },
];
