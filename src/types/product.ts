export interface ProductVariant {
  sizes?: string[]; // e.g. ['L', 'XL', 'XS']
  colors?: { name: string; hex: string; image?: string }[]; // Optional image for color variant
}

export interface ProductReview {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number; // 1 to 5
  comment: string;
  createdAt: string;
}

export interface ProductSpecifications {
  umum?: {
    paketPenjualan?: string;
    materialSekunder?: string;
    konfigurasi?: string;
    bahanPelapis?: string;
    warnaPelapis?: string;
  };
  produk?: {
    materialIsi?: string;
    jenisFinishing?: string;
    sandaranKepalaDisesuaikan?: string;
    kapasitasBebanMaksimum?: string;
  };
  ukuran?: {
    lebar?: string;
    tinggi?: string;
    kedalaman?: string;
  };
  garansi?: {
    ringkasan?: string;
  };
}

export interface Product {
  id: string; // Firestore document ID
  name: string;
  slug: string;
  subtitle: string; // Short description e.g. "Kursi Kafe Bergaya Modern"
  description: string;
  additionalInfo?: string;
  price: number; // Original price or current price
  originalPrice?: number; // Previous price for discount calculation
  discountPercent?: number; // e.g. 30 for -30%
  isNew?: boolean;
  rating: number; // e.g. 4.5
  reviewCount: number; // e.g. 5
  category: string; // Category name or ID
  categoryId: string;
  sku: string; // e.g. "SS001"
  tags: string[];
  mainImage: string;
  images: string[];
  variants?: ProductVariant;
  specifications?: ProductSpecifications;
  stock: number;
  featured?: boolean;
  createdAt: string;
  updatedAt?: string;
}
