import Link from "next/link";
import Image from "next/image";
import parkinsonBg from "@/../public/parkinson.png"
import backmaiImg from "@/../public/backmai.jpg"
import _108Img from "@/../public/108.jpg"
import laokhoaImg from "@/../public/laokhoa.jpg"

export default function Parkinson() {
  return (
    <div className="pt-28">
      <div className="flex flex-col sm:justify-around justify-start relative p-10 md:p-20 lg:p-28">
        <h1 className="text-2xl">🌟 Giới thiệu</h1>
        <p className="text-xl">Đây là một hệ thống <span class="highlight">chẩn đoán</span> sử dụng <strong>thị giác máy tính</strong> để chuẩn đoán Parkinson.</p>
        <h1 className="text-2xl mt-10">🎯 Ứng dụng</h1>
        <ul className="text-xl">
          <li>Phát hiện sớm các bệnh lý</li>
          <li>Hỗ trợ chẩn đoán hình ảnh trong y học</li>
        </ul>
        <Link href="mindtest/parkinson" className="text-2xl text-blue-500 underline mt-10">Làm trắc nghiệm câu hỏi tại đây</Link>
        <h1 className="text-2xl mt-10">Các trung tâm tư vấn bệnh lí</h1>
        <ul className="flex">
          <Link href="https://bachmai.gov.vn/" className="w-1/3 justify-center">
            <Image src={backmaiImg} alt="fdsf" className="rounded" />
            <p>Bệnh viện Bạch Mai</p>
          </Link>
          <Link href="https://benhvien108.vn/home.htm" className="w-1/3 justify-center">
            <Image src={_108Img}  alt="sdfsdf" className="rounded" />
            <p>Bệnh viện 108</p>
          </Link>
          <Link href="https://benhvienlaokhoa.vn/" className="w-1/3 justify-center">
            <Image src={laokhoaImg}  alt="sdfsdf" className="rounded" />
            <p>Bệnh viện lão khoa Trung ương</p>
          </Link>
        </ul>
      </div>
    </div>
  )
}