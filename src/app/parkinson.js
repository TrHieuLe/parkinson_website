import Link from "next/link";
import Image from "next/image";
import parkinsonBg from "@/../public/parkinson.png"

export default function Parkinson() {
  return (
    <div className="pt-48">
      <div className="flex flex-col sm:justify-around justify-start relative p-10 md:p-20 lg:p-28">
        <h1 className="text-2xl">Tải video</h1>
        <form action="/upload" method="POST" encType="multipart/form-data" className="flex flex-row py-6">
          <label className="block">
            <input type="file" name="file" className="mt-1 block w-full text-sm text-gray-500 "/>
          </label>
          <button type="submit" className="px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Submit
          </button>
        </form>
        <Link href="mindtest/parkinson" className="text-2xl text-blue underline">Trả lời câu hỏi</Link>
        <Image src={ parkinsonBg } alt="afdsf"/>
      </div>
    </div>
  )
}