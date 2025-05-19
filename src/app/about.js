import { Title } from "./extension"
import Image from "next/image"
import avatarPic from "../../public/avatar.jpg"
import people from "@/pages/api/about.json"

export default function About() {
  return (
    <div className="flex flex-col justify-center px-10 sm:px-14 md:px-24">
      <Title>Về chúng tôi</Title>
      <div className="flex flex-wrap items-start justify-around gap-4 my-10">
        { people.map((person) => (
          <div key={ person.id } className="flex flex-col items-center h-full place-content-start ">
            <Image 
              className="rounded-full border-2 border-green-900" 
              src={ person.imgLink }
              width={100} height={100}
              alt="avatar" 
            />
            <div className="opacity-80 mt-2 max-w-24 text-xs text-center ">{ person.describe }</div>
            <div className="">{ person.name }</div>
          </div>
        )) }
      </div>
    </div>
  )
}