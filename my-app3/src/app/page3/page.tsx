"use client";
import React, { useRef, useState } from "react";

export default function Home() {
  const [form, setForm] = useState<{ name: string; email: string; password: string }>({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [registeredUser, setRegisteredUser] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password: string) => {
    return /^(?=.*[A-Z])(?=.*\W).{8,}$/.test(password);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let validationErrors: string[] = [];

    if (form.name.trim() === "") {
      validationErrors.push("El nombre no puede estar vacío.");
    }
    if (!validateEmail(form.email)) {
      validationErrors.push("El correo no es válido.");
    }
    if (!validatePassword(form.password)) {
      validationErrors.push("La contraseña debe tener al menos 8 caracteres, una mayúscula y un carácter especial.");
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors([]);
    setRegisteredUser(form.name);
    setForm({ name: "", email: "", password: "" });
  };

  return (
    <div className="justify-center items-center text-center w-screen h-full min-h-screen pt-10">
      <div className="flex justify-end pr-5">
        {registeredUser && <p className="text-green-500">{registeredUser}</p>}
      </div>

      <div className="flex flex-col items-center text-center">
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-3">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="border p-2 rounded"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Johndoe@gmail.com"
              className="border p-2 rounded"
            />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="********"
              className="border p-2 rounded"
            />
          </div>

          <button type="submit" className="bg-red-500 text-white rounded-lg p-3 mt-3 hover:bg-red-400">
            Submit
          </button>
        </form>

        {errors.length > 0 && (
          <div className="mt-3 text-red-500">
            {errors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}