"use client";

import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import { useCreatPhoneModal } from "@/hooks/use-create-phone-modal";
import { Phone } from "@prisma/client";
import {
  ArrowBigRight,
  CheckIcon,
  ChevronsUpDown,
  PhoneIcon,
  PlusCircle,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  phones: Phone[];
}

const PhoneSwitcher = ({ phones }: Props) => {
  const router = useRouter();
  const { onOpen: createStoreOpen } = useCreatPhoneModal();
  const [open, setOpen] = useState(false);
  const params = useParams();

  const currentPhone = phones.find((phone) => phone.id === params.phoneId);

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[200px]">
            <PhoneIcon className="h-4 w-4 mr-2" />
            {currentPhone?.name}
            <ChevronsUpDown className="ml-auto h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[260px]">
          <Command>
            <CommandInput placeholder="Search" />
            <CommandList>
              <CommandGroup heading="Phones">
                {phones?.map((phone) => (
                  <CommandItem
                    key={phone.id}
                    onSelect={() => {
                      setOpen(false);
                      router.push(`/phone/${phone.id}`);
                    }}
                  >
                    <PhoneIcon className="h-4 w-4" />
                    {phone.name}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        currentPhone?.id === phone.id
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Links">
                <CommandItem
                  onSelect={() => {
                    setOpen(false);
                    router.push("/dir");
                  }}
                >
                  <ArrowBigRight className="h-4 w-4" />
                  Dir
                </CommandItem>
                <CommandItem
                  onSelect={() => {
                    setOpen(false);
                    router.push("/headphone");
                  }}
                >
                  <ArrowBigRight className="h-4 w-4" />
                  Headphone
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandItem onSelect={() => createStoreOpen()}>
                <div className="flex items-center gap-2">
                  <PlusCircle className="h-4 w-4" />
                  Add Phone
                </div>
              </CommandItem>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default PhoneSwitcher;
