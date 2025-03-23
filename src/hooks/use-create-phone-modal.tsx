import { create } from "zustand";

interface CreatePhoneInterface {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useCreatPhoneModal = create<CreatePhoneInterface>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
