"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { supabase } from "@/lib/supabase";
import type { Lang } from "@/lib/i18n";

const copy = {
  en: {
    title: "Admin Login",
    email: "Email",
    password: "Password",
    login: "Login",
    supabaseError: "Supabase env vars are not configured yet.",
  },
  ar: {
    title: "تسجيل دخول المشرف",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    login: "دخول",
    supabaseError: "إعدادات Supabase غير مفعّلة بعد.",
  },
} satisfies Record<Lang, Record<string, string>>;

export default function LoginPage() {
  const router = useRouter();
  const { lang } = useLanguage();
  const t = copy[lang];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (!supabase) {
      setError(t.supabaseError);
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
    <div className="mx-auto mt-28 max-w-md rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
      <h1 className="mb-4 text-2xl font-bold sm:text-3xl">{t.title}</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input
          className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface2)] p-3"
          placeholder={t.email}
          aria-label={t.email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface2)] p-3"
          placeholder={t.password}
          aria-label={t.password}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-sm text-red-400">{error}</p>}
        <button className="w-full rounded-lg bg-[var(--purple)] py-2.5">{t.login}</button>
      </form>
    </div>
  );
}
