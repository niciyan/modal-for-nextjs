import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export const Navbar = async () => {
  return (
    <nav className="flex justify-between items-center border-b h-16 fixed w-full px-8">
      <div className="flex gap-x-8">
        <Link href="/">Home</Link>
        <Link href="/phone">Phone</Link>
        <Link href="/headphone">Headphone</Link>
        <Link href="/dir">Dir</Link>
      </div>
      <div className="">
        <ModeToggle />
      </div>
    </nav>
  );
};
