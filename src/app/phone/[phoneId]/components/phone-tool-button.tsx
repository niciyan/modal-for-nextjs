"use client";

import { Phone } from "@prisma/client";
import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEditPhoneModal } from "@/hooks/use-edit-phone-modal";

interface Props {
  phone: Phone;
}

export const PhoneToolButton = ({ phone }: Props) => {
  const editPhoneModal = useEditPhoneModal();

  return (
    <Button
      variant="ghost"
      onClick={() => {
        editPhoneModal.onOpen(phone);
      }}
    >
      <Edit className="h-4 w-4" />
    </Button>
  );
};
