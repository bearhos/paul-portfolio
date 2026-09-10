import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found shell">
      <span className="eyebrow">404</span>
      <h1>A small detour.</h1>
      <p>This page doesn’t exist, but there’s plenty to explore.</p>
      <Link href="/" className="button button-primary">
        Back to portfolio
      </Link>
    </main>
  );
}
