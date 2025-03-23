import PhoneSwitcher from "@/components/phone-switcher";
import { getPhones } from "@/data/phone";
import Link from "next/link";

export const Navbar = async () => {
  const phones = await getPhones();

  return (
    <nav className="flex gap-4 items-center border-b h-16 fixed w-full px-4">
      <PhoneSwitcher phones={phones} />
      <Link href="/dir">Dir</Link>
      <Link href="/headphone">Headphone</Link>
      <Link href="/">take</Link>
    </nav>
  );
};
