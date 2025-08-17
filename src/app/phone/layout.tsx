import PhoneSwitcher from "@/components/phone-switcher";
import { getAllPhones } from "@/data/phone";

export default async function PhoneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const phones = await getAllPhones();
  return (
    <div className="flex">
      <div className="max-w-60">
        <PhoneSwitcher phones={phones} />
      </div>

      <section>{children}</section>
    </div>
  );
}
