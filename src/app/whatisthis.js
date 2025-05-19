import Image from "next/image"
import { Title } from "./extension"
import aiPic from "../../public/ai.png"

export default function Describe() {
  return (<>
    <div className="my-24 flex flex-col bg-gray-100">
      <Title>Giới thiệu</Title>
      <div className="flex justify-around items-center sm:px-16 sm:py-4 lg:px-32 lg:py-16">
        <div className="w-1/2 hidden sm:block">
          <Image 
            src={ aiPic } 
            width={0} 
            height={0} 
            className="w-full h-auto" 
            alt="computer vision" 
          />
        </div>
        <ul className="sm:py-4 pb-10 lg:py-16 text-lg sm:text-xl opacity-85 list-disc w-1/2">
          <li className="mb-7">E-Mind sử dụng công nghệ AI và phân tích hình ảnh
            để nhận diện cảm xúc trên khuôn mặt người dùng, từ đó
              cung cấp các hỗ trợ tâm lý phù hợp.</li>
          <li>Sau khi khách hàng tham gia khảo sát, hệ thống sẽ 
            thông qua kết quả để tính toán mức độ trầm cảm, kết hợp
            với công nghệ xử lý ảnh sử dụng AI thông qua các hình 
            ảnh thu được qua camera từ đó phân tích dữ liệu từ biểu 
            cảm khuôn mặt và đưa ra kết quả của người sử dụng 
            theo phần trăm.</li>
        </ul>
      </div>
    </div>
  </>)
}