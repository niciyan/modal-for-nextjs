"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FileQuestion, Menu } from "lucide-react";
import Image from "next/image";

export default function HeadphonePage() {
  return (
    <div className="space-y-8">
      <div className="flex-col ">
        <div className="flex items-center justify-between py-4">
          <div>
            <h1 className="font-bold text-2xl">
              オーディオテクニカ ATH-250AV ヘッドホン 有線 音楽・映画観賞用 軽量
              3.5mm接続 ブラック
              <span className="ml-2 text-rose-600 text-sm bg-rose-200 border rounded-sm px-2">
                貸し出し中
              </span>
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={() => {
                alert("deleted");
              }}
              size="sm"
            >
              <Menu />
            </Button>
          </div>
        </div>
        <Separator />
        <div className="flex gap-12 mt-8">
          <div className="relative border rounded-md w-[300px] h-[300px] overflow-hidden">
            <Image
              src="https://m.media-amazon.com/images/I/51aI17JcyOL.__AC_SX300_SY300_QL70_ML2_.jpg"
              alt=""
              width={300}
              height={300}
              className="object-cover transition hover:scale-110"
            />
            {/* <FileQuestion />
            画像が見つかりませんでした */}
          </div>
          <div className="space-y-2">
            <p>著者名: Kitayama Junko</p>
            <p>分類: Ok</p>
            <p>追加された日: 2022/1/22</p>
            <p>更新された日: 2022/1/22</p>
          </div>
        </div>
      </div>
      <Separator />
      <div className="mt-4">
        <div className="py-3">
          <h1 className="font-semibold text-xl">本の履歴（最新5件）</h1>
        </div>
        <div className="ml-6">
          <ul className="list-disc">
            <li>ありあけ構築</li>
            <li>Nishiyama Takahiro : 2022/5/5</li>
            <li>Nishiyama Takahiro : 2022/5/5</li>
            <li>Nishiyama Takahiro : 2022/5/5</li>
            <li>すべての人間</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
