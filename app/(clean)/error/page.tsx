import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function ErrorPage() {
  return <div className="flex min-h-screen items-center justify-center bg-[#FFF9E6] p-4" data-api-unique-id='page-r3adbeef5efefcf49-s492563206' data-api-unique-page-name='app/(clean)/error/page'>
      <div className="w-full max-w-md space-y-6 rounded-2xl bg-white p-8 shadow-lg border border-red-200 text-center" data-api-unique-id='page-r973f7a6961406434-s492563206' data-api-unique-page-name='app/(clean)/error/page'>
        <div className="h-20 w-20 mx-auto bg-red-100 rounded-full flex items-center justify-center text-3xl" data-api-unique-id='page-r59f3f5794b62f272-s492563206' data-api-unique-page-name='app/(clean)/error/page'>
          ⚠️
        </div>
        
        <div data-api-unique-id='page-r6d304fcd31ecc738-s492563206' data-api-unique-page-name='app/(clean)/error/page'>
          <h2 className="text-2xl font-bold text-[#3E2723]" data-api-unique-id='page-r8f97e5b5dc402271-s492563206' data-api-unique-page-name='app/(clean)/error/page'>Something went wrong</h2>
          <p className="mt-2 text-[#5D4037]" data-api-unique-id='page-r19321128204e683a-s492563206' data-api-unique-page-name='app/(clean)/error/page'>We encountered an error while processing your request.</p>
        </div>
        
        <Button asChild className="w-full bg-[#FFA726] hover:bg-[#FF9800]" data-api-unique-id='page-r9138d4f1690a9545-s492563206' data-api-unique-page-name='app/(clean)/error/page'>
          <Link href="/" data-api-unique-id='page-r35334be9cf756845-s492563206' data-api-unique-page-name='app/(clean)/error/page'>Return Home</Link>
        </Button>
      </div>
    </div>;
}