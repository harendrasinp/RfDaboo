import Image from "next/image";
import { tabData } from "@/Data/tab_Data/tabsdata";
import Link from "next/link";
export default function Home() {
  return (
    <div className="relative w-full h-screen  text-center flex flex-col items-center">
      <Image src="/Images/Home/bg-image1.jpg" alt="home page image" fill className="object-cover -z-10 " />
      {/* ----------------------------------Welcome  title of Site------------------------------------- */}
      <h1 className="font-bold text-3xl mt-10 text-orange-700 bg-amber-100 p-2 px-15 rounded-2xl">WELCOME TO R.F.DABOO KELAVNI MANDAL</h1>
        {/* ----------------------------------Logo of Site------------------------------------- */}
      <Image src="/Images/Home/logo.png" alt="logo" width={200} height={100} />
      {/* -------------------------------------Tabs Area----------------------------- */}
      <div className="grid grid-cols-1 gap-4 border-8 border-blue-700/60 p-6 w-fit rounded-[5px] lg:grid-cols-3">
        {tabData.map((item, index) => (
          <div key={index} className='bg-blue-950/40 backdrop-blur-md p-5 w-70 h-auto cursor-pointer
          transform transition-transform duration-300 hover:scale-105 rounded-[7px]'>
            <h1 className='text-yellow-200'>{item.title}</h1>
            <p className='text-blue-100 mb-3'>{item.content}</p>
            <div className="text-blue-50 bg-amber-500 p-2 rounded-2xl transform transition-trasnform duration-200 hover:scale-75">
              <Link href="/kb-patel">Way to Site</Link>
            </div>
          </div>
        ))}
      </div>
      {/* ----------------------------------Footer ------------------------------------- */}
    </div>
  );
}
