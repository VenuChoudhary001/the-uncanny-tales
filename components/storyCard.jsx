import Image from "next/image";
import React from "react";

const StoryCard = ({index,post,handleClick}) => {
  return (
    <>
      <div onClick={handleClick} className="max-w-[400px] h-[280px]  my-1 cursor-pointer flex flex-col gap-1 items-baselin justify-en bg-neutral-800/50 hover:bg-brand/50 rounded-[10px] p- relative">
        <Image
          src={`https://source.unsplash.com/random/${index}`}
          layout="fill"
          className="-z-10 rounded-[10px] "
          objectFit="cover "
        />
          <div className=" flex flex-col p-2">

        <div className="text-white  text-lg font-bold  md:text-xl ">
          {post && post.title}
        </div>
        <div className="text-white text-sm   md:text-base font-medium">
          {post.body[0].children[0].text.substring(0,100)}
        </div>
        </div>
      </div>
    </>
  );
};

export const VerticalStoryCard = ({post,handleClick}) => {
  return (
    <>
      <div onClick={handleClick} className="max-w-[400px] my-1 h-[180px]  cursor-pointer flex flex-col gap-1 items-baselin justify-en bg-neutral-800/50 hover:bg-brand/50 rounded-[10px] p-3 h-full relative">
        <Image
          src={"https://source.unsplash.com/random/2"}
          layout="fill"
          className="-z-10 rounded-[10px] "
          objectFit="cover "
        />
        <div className="text-white font-bold text-lg md:text-2xl ">{post.title}</div>
        <div className="text-white text-xs md:text-base font-medium">
        {post.body[0].children[0].text.substring(0,100)} 
        </div>
      </div>
    </>
  );
};

export const ViewStory = ({post}) => {
  return (
    <>
      <main className="hidden bg-brand/10 p-12 rounded-[15px] lg:flex flex-col gap-4">
        <div className="flex md:flex-row flex-col gap-3 ">
          <div className="flex flex-col gap-3">
            <div className="text-3xl max-w-[400px] font-bold">
             {post && post.title}
            </div>
            <div className="text-base font-">
             {post.body[0].children[0].text.substring(0,150)}
              
            </div>
          </div>
          <Image
            src={"/test.jpeg"}
            width={400}
            height={300}
            className="rounded-[10px] object-cover"
            objectFit="cover"
          />
        </div>
        <div className="text-base font-">
         
        {post.body[0].children[0].text.length>150 && post.body[0].children[0].text.substring(150)}
        </div>
      </main>
    </>
  );
};

export const ViewStoryModal = ({viewStory,setView}) => {
  console.log(viewStory)
  return (
    <>
      <main 
      className=" absolute md:hidden top-0 left-0 z-[99999] p-12 w-screen h-screen overflow-scroll bg-offWhite flex flex-col gap-4"
      >
        <div onClick={()=>setView(false)} className="fixed top-10 bg-white flex items-center justify-center right-3 w-8 h-8 rounded-full cursor-pointer">
          <Image src={"/close.svg"} width={12} height={12} />
        </div>
        <div className="flex md:flex-row flex-col gap-3 ">
          <div className="flex flex-col gap-3">
            <div className="text-2xl max-w-[400px] font-bold">
              {viewStory && viewStory.title}
            </div>
            <div className="text-base font-">
             {viewStory.body[0].children[0].text.substring(0,150)}
            </div>
          </div>
          <Image
            src={"/test.jpeg"}
            width={400}
            height={300}
            className="rounded-[10px] object-cover"
            objectFit="cover"
          />
        </div>
        <div className="text-base font-">
         {viewStory.body[0].children[0].text.length>150 && viewStory.body[0].children[0].text.substring(150)}
        </div>
      </main>
    </>
  );
};

export default StoryCard;
