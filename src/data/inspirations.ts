export interface RoomInspiration {
  id: string;
  number: string;
  category: string;
  title: string;
  image: string;
}

export const mockInspirations: RoomInspiration[] = [
  {
    id: "insp-1",
    number: "01",
    category: "Kamar Tidur",
    title: "Kenyamanan",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "insp-2",
    number: "02",
    category: "Ruang Keluarga",
    title: "Minimalis Warm",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "insp-3",
    number: "03",
    category: "Ruang Makan",
    title: "Estetika Kayu Jati",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1000&auto=format&fit=crop",
  },
];

export const mockInstagramGallery = [
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540518614846-7ede433c517a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
];
