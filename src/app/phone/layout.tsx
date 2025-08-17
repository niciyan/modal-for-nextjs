import { getAllPhones } from "@/data/phone";

export default async function PhoneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
