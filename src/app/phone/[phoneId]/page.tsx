import db from "@/lib/db";
import { notFound } from "next/navigation";
import { PhoneToolButton } from "./components/phone-tool-button";

interface Props {
  params: {
    phoneId: string;
  };
}

const PhoneIdPage = async ({ params }: Props) => {
  const phone = await db.phone.findUnique({
    where: {
      id: params.phoneId,
    },
  });

  if (!phone) {
    notFound();
  }

  return (
    <div>
      {phone.name}
      <PhoneToolButton phone={phone} />
    </div>
  );
};

export default PhoneIdPage;
