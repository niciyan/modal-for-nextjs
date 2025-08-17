import { Phone } from "@prisma/client";
import React from "react";

interface Props {
  phone: Phone | null;
}

const PhoneSummary = ({ phone }: Props) => {
  if (!phone) {
    return null;
  }
  return (
    <div className="px-1 py-3">
      <div className="flex flex-col gap-y-4">
        <div>
          <p className="text-sm">Name</p>
          <p className="text-muted-foreground">{phone.name}</p>
        </div>
        <div>
          <p className="text-sm">Price</p>
          <p className="text-muted-foreground">{phone.price}</p>
        </div>
        <div>
          <p className="text-sm">Type</p>
          <p className="text-muted-foreground">{phone.type || "-"}</p>
        </div>
        <div>
          <p className="text-sm">Company</p>
          <p className="text-muted-foreground">{phone.company || "-"}</p>
        </div>
        <div>
          <p className="text-sm">Comment</p>
          <p className="text-muted-foreground">{phone.comment || "-"}</p>
        </div>
        <div>
          <p className="text-sm">Created At</p>
          <p className="text-muted-foreground">
            {phone.createdAt.toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhoneSummary;
