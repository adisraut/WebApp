import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-white text-center">Login</h2>

      {/* Email Field */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-white text-sm font-semibold">
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-zinc-800 text-white placeholder-zinc-400"
        />
      </div>

      {/* Password Field */}
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-white text-sm font-semibold">
          Password
        </label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-zinc-800 text-white placeholder-zinc-400"
        />
        {/* Forgot password link */}
        <div className="mt-1">
          <span className="text-sm text-blue-400 hover:underline cursor-pointer">
            Forgot password?
          </span>
        </div>
      </div>

      {/* Login Button */}
      <Button
        type="submit"
        className="w-full bg-zinc-700 hover:bg-zinc-600 text-white"
      >
        Log In
      </Button>

      {/* Footer Link */}
      <p className="text-center text-sm text-zinc-400">
        New user?{" "}
        <Link to="/register" className="text-blue-500 hover:underline">
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
