"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (!supabase) {
      setError("Supabase env vars are not configured yet.");
      return;
    }
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    if (signInError) {
      setError(signInError.message);
      return;
    }
    router.push("/admin");
    router.refresh();
  };

  return (
    <div className="mx-auto mt-28 max-w-md rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
      <h1 className="mb-4 text-3xl font-bold">Admin Login</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface2)] p-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface2)] p-3" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="text-sm text-red-400">{error}</p>}
        <button className="w-full rounded-lg bg-[var(--purple)] py-2.5">Login</button>
      </form>
    </div>
  );
}
