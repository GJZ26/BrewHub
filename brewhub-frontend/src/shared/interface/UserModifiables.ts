export default interface UserModifiable {
  name: string;
  email: string;
  password?: string;
  isActive: boolean;
  role: 0 | 1;
}
