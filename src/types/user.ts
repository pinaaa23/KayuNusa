export interface UserProfile {
  uid: string; // Firebase Auth UID
  email: string;
  displayName: string;
  phoneNumber?: string;
  address?: {
    firstName: string;
    lastName: string;
    companyName?: string;
    country: string;
    streetAddress: string;
    city: string;
    province: string;
    zipCode: string;
    phone: string;
  };
  createdAt: string;
}
