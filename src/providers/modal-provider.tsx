"use client";

import { CreatePhoneModal } from "@/components/modals/create-phone-modal";
import { EditPhoneModal } from "@/components/modals/edit-phone-modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  return (
    <>
      <CreatePhoneModal />
      <EditPhoneModal />
    </>
  );
};
