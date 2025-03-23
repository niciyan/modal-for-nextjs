import db from "@/lib/db";

export const getPhones = async () => {
  return db.phone.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
