import { PhoneList } from "@/components/phone/phone-list";
import { Separator } from "@/components/ui/separator";
import { getPhonesPagination } from "@/data/phone";
import { notFound } from "next/navigation";

interface Props {
  searchParams: {
    page: string;
  };
}

export default async function PhonePage({ searchParams }: Props) {
  let pageNum: number;
  if (!searchParams.page) {
    pageNum = 1;
  } else {
    pageNum = parseInt(searchParams.page);
    console.log(pageNum);

    if (!pageNum) {
      notFound();
    }
  }

  const { count, pageCount, phones } = await getPhonesPagination(pageNum);
  return (
    <div className="p-10">
      <div className="space-y-2 mb-2">
        <h1 className="text-2xl">
          Phones <span className="text-muted-foreground">({count})</span>
        </h1>
      </div>
      <Separator />
      <PhoneList
        page={pageNum}
        phones={phones}
        count={count}
        pageCount={pageCount}
      />
    </div>
  );
}
