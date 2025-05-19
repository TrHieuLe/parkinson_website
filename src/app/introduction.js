import Image from "next/image";
import bgPic from "../../public/background.jpg"
import Link from "next/link";

export default function Introdution() {
  return (
    <div className="flex sm:justify-around justify-center items-center relative p-10 md:p-20 lg:p-28 py-8">
      <div className="text-lime-950">
        <h1 
          className="font-bold text-4xl sm:text-7xl my-10"
        >Công cụ chuẩn đoán Parkinson bằng hình ảnh</h1>
        <p className="my-7 text-lg sm:text-xl max-w-96">Sứ mệnh của E-Mind là trở thành cầu nối, 
            giúp mỗi cá nhân hiểu mình hơn và cùng nhau
            xây dựng một xã hội biết trân trọng sức khỏe tinh thần.</p>
        <Link href="mindtest/parkinson" className="text-xl text-white cursor-pointer hover:bg-green-600
          transition bg-green-400 rounded-lg p-3">Làm bài kiểm tra</Link>
      </div>
      <div className="hidden sm:block sm:n sm:static top-0 right-7 scale-125  -z-10">
        <Image src={ bgPic } alt="background" className="sm:scale-100 " />
      </div>
    </div>
  )
}