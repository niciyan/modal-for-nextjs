import { Phone } from "@prisma/client";
import { create } from "zustand";

interface EditPhoneModalInterface {
  isOpen: boolean;
  onOpen: (data: Phone) => void;
  onClose: () => void;
  data?: Phone;
}

export const useEditPhoneModal = create<EditPhoneModalInterface>((set) => ({
  isOpen: false,
  onOpen: (data: Phone) => set({ isOpen: true, data: data }),
  onClose: () => set({ isOpen: false }),
}));
