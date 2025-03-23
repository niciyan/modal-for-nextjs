import { PhoneList } from "@/components/phone/phone-list";
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
    // console.log(pageNum);

    if (!pageNum) {
      notFound();
    }
  }

  const { count, pageCount, phones } = await getPhonesPagination(pageNum);
  return (
    <div className="px-6 py-4">
      <PhoneList
        page={pageNum}
        phones={phones}
        count={count}
        pageCount={pageCount}
      />
    </div>
  );
}
