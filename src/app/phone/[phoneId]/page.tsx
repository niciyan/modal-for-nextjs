import db from "@/lib/db";
import { notFound } from "next/navigation";

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

  return <div>{phone.name}</div>;
};

export default PhoneIdPage;
