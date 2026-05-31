import Link from "next/link";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
};

const styles = {
  primary: "bg-[var(--purple)] text-white hover:opacity-90",
  outline: "border border-[var(--border)] text-[var(--text)] hover:border-[var(--purple)]",
  ghost: "text-[var(--text)] hover:bg-[var(--surface2)]",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium transition ${styles[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return <button className={classes}>{children}</button>;
}
