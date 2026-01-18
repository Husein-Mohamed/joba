import Link from "next/link";
import Image from "next/image";
import Button from "./ui/Button";

export default function Header() {
  return (
    <header className="w-full py-4 bg-transparent">
      <div className="site-container panel flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 relative">
            <Image src="/images/joba images/WhatsApp Image 2025-12-28 at 12.24.42 PM.jpeg" alt="Zeytun Restaurant" fill className="object-contain" />
          </div>
          <div className="hidden sm:block text-lg font-semibold">Zeytun Restaurant</div>
        </Link>

        <nav className="flex-1">
          <ul className="hidden md:flex items-center justify-center gap-8 text-sm font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/menu">Menu</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/menu">
            <Button>Order</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
