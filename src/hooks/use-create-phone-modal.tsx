import { create } from "zustand";

interface CreatePhoneInterface {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

/**
 * Custom hook for managing the state of a phone modal.
 *
 * This hook provides an interface to control the open/close state of a modal,
 * exposing methods to open and close the modal, as well as a boolean indicating
 * whether the modal is currently open.
 *
 * @returns {CreatePhoneInterface} An object containing:
 * - `isOpen`: A boolean indicating if the modal is open.
 * - `onOpen`: A function to open the modal.
 * - `onClose`: A function to close the modal.
 */
export const useCreatePhoneModal = create<CreatePhoneInterface>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
