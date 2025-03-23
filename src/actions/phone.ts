"use server";

import db from "@/lib/db";

export const addPhone = async (name: string, price: number) => {
  const phone = db.phone.create({
    data: {
      name,
      price,
    },
  });
  return phone;
};
