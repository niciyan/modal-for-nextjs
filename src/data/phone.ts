import db from "@/lib/db";

export const getAllPhones = async () => {
  return db.phone.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getPhonesPagination = async (page: number) => {
  const perPage = 3;
  const skip = perPage * (page - 1);

  const [phones, phoneCount] = await db.$transaction([
    db.phone.findMany({
      orderBy: {
        createdAt: "desc",
      },
      skip,
      take: perPage,
    }),
    db.phone.count(),
  ]);
  const pageCount = Math.ceil(phoneCount / perPage);

  return { phones, count: phoneCount, pageCount };
};
