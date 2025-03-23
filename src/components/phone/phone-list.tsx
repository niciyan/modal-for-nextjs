"use client";
import { Phone } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, CopyIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Props {
  page: number;
  count: number;
  phones: Phone[];
  pageCount: number;
}

export const PhoneList = ({ page, phones, pageCount }: Props) => {
  const hasNext = page < pageCount;
  const hasPrev = page > 1;
  const router = useRouter();

  // const formattedItems = phones.map

  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    toast.success("Phone id copied to the clipboard.");
  };

  return (
    <div className="space-y-4 py-2">
      {phones.map((phone) => (
        <div key={phone.id}>
          <div className="flex justify-start items-center gap-x-3">
            <h3 className="font-semibold">{phone.name}</h3>
            <Button onClick={() => onCopy(phone.id)} variant="ghost" size="sm">
              <CopyIcon className="h-3 w-3" />
            </Button>
          </div>
          <div className="flex justify-start">
            <p className="text-sm text-muted-foreground">
              {phone.createdAt.toDateString()}
            </p>
          </div>
        </div>
      ))}
      <div className="flex justify-start gap-x-1">
        {hasPrev && (
          <Button
            variant="outline"
            onClick={() => {
              router.push(`/phone?page=${page - 1}`);
            }}
          >
            <ChevronLeft className="h-4 w-4" />
            前のページ
          </Button>
        )}
        {hasNext && (
          <Button
            variant="outline"
            onClick={() => {
              router.push(`/phone?page=${page + 1}`);
            }}
          >
            次のページ
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};
