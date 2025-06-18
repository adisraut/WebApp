import LoginForm from "../components/Login/LoginComp";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900">
      <div className="bg-black p-8 rounded-xl shadow-md w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;