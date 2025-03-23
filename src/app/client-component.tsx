"use client";

import { AlertModal } from "@/components/modals/alert-modal";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import React, { useState } from "react";

export const Client = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(true);
    console.log("hello world");
    setOpen(false);
    setLoading(false);
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        loading={loading}
        onClose={() => {
          setOpen(false);
        }}
        onConfirm={onSubmit}
      />
      <div>
        <Button variant="outline" onClick={() => setOpen(true)}>
          <Trash className="h-4 w-4" /> Delete
        </Button>
      </div>
    </>
  );
};
