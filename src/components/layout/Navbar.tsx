import Link from "next/link";
import { Button } from "@/components/ui/Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-espresso/10 bg-cream/90 backdrop-blur-xl">
      <nav className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="font-serif text-xl font-semibold tracking-tight">
          Play Coffee - Beecroft
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm text-espresso/85 transition-colors hover:text-terracotta">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Button href="/contact#reservation" className="px-4 py-2 text-xs">
          Book a Table
        </Button>
      </nav>
    </header>
  );
}
