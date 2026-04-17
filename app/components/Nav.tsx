import Link from "next/link";

export default function Nav() {
  return (
    <nav className="site-nav">
      <Link href="/" className="nav-brand">
        Brand Rosetta
      </Link>
      <div className="nav-links">
        <Link href="/vocab">Vocabulary</Link>
        <Link href="/spec">Specification</Link>
        <Link href="/implement">Implement</Link>
      </div>
    </nav>
  );
}
