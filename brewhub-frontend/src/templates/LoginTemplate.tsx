import LoginForm from "../organisms/LoginForm";

export default function LoginTemplate() {
  return (
    <div className="bg-[url('cafe-interior.jpg')] bg-cover bg-center min-h-screen relative">
      <div className="absolute inset-0 bg-orange-500 opacity-10"></div>
      <LoginForm />
    </div>
  );
}
