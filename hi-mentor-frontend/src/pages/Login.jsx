import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [role, setRole] = useState("mentee"); // Default selection is "mentee"
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <div className="flex gap-4 mb-4">
          <label>
            <input type="radio" value="mentee" checked={role === "mentee"} onChange={() => setRole("mentee")} />
            Mentee
          </label>
          <label>
            <input type="radio" value="mentor" checked={role === "mentor"} onChange={() => setRole("mentor")} />
            Mentor
          </label>
        </div>

        <input type="email" name="email" placeholder="Email" className="input" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="input" onChange={handleChange} required />
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;