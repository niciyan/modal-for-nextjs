"use server";

import db from "@/lib/db";

export const addPhone = async (name: string, price: number) => {
  try {
    const phone = db.phone.create({
      data: {
        name,
        price,
      },
    });
    return phone;
  } catch (error) {
    console.log(error);
  }
};

export const editPhone = async (id: string, name: string, price: number) => {
  const phone = await db.phone.update({
    where: {
      id: id,
    },
    data: {
      name,
      price,
    },
  });
  return phone;
};
