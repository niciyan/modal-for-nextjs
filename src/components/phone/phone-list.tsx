"use client";
import { Button } from "@/components/ui/button";
import { useEditPhoneModal } from "@/hooks/use-edit-phone-modal";
import { Phone } from "@prisma/client";
import {
  ChevronLeft,
  ChevronRight,
  CopyIcon,
  Edit3Icon,
  InfoIcon,
} from "lucide-react";
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
  const editPhoneModal = useEditPhoneModal();

  // const formattedItems = phones.map

  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    toast.success("Phone id copied to the clipboard.");
  };

  return (
    <div className="flex flex-col gap-y-5 py-2">
      <div className="flex justify-start gap-x-1">
        {hasPrev && (
          <Button
            variant="outline"
            size="sm"
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
            size="sm"
            onClick={() => {
              router.push(`/phone?page=${page + 1}`);
            }}
          >
            次のページ
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>
      {phones.map((phone) => (
        <div
          key={phone.id}
          className="w-[480px] p-4 group relative border rounded-md"
        >
          <div className="flex justify-start items-center gap-x-3">
            <h3 className="font-semibold">{phone.name}</h3>
            {/* Buttons */}
            <div className="hidden absolute top-1 right-1 group-hover:flex gap-x-1 ">
              <Button
                onClick={() => editPhoneModal.onOpen(phone)}
                variant="ghost"
                size="iconSm"
              >
                <Edit3Icon className="h-3 w-3" />
              </Button>
              <Button
                onClick={() => onCopy(phone.id)}
                variant="ghost"
                size="iconSm"
              >
                <CopyIcon className="h-3 w-3" />
              </Button>
              <Button
                onClick={() => {
                  console.log("hello");
                  router.push(`/phone/${phone.id}`);
                }}
                variant="ghost"
                size="iconSm"
              >
                <InfoIcon className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <div className="flex justify-start gap-x-4 mt-2">
            <p className="text-sm text-muted-foreground">
              作成日: {phone.createdAt.toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground">値段: {phone.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
