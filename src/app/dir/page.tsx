"use client";

import { AlertModal } from "@/components/modals/alert-modal";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { useState } from "react";

export default function Page() {
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
          Alert Confirm Test
        </Button>
      </div>
    </>
  );
}
