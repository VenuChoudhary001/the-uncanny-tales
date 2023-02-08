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
          alt=""
        />
          <div className=" flex flex-col p-2">

        <div className="text-white  text-lg font-bold  md:text-xl ">
          {post && post.title}
        </div>
        <div className="text-white text-base flex flex-col gap-2   md:text-base font-semibold">
          {/* {post && post.body.map((item,index)=>
                <div className="" key={index}>{item.children[0].text}</div>
        )} */}
        {post && post.description}
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
          alt=""
        />
        <div className="text-white font-bold text-lg md:text-2xl ">{post.title}</div>
        <div className="text-white text-xs md:text-base font-medium">
        {post.body.map((item,index)=>{
                <div className="" key={index}>{item.children.map((data,index)=><span key={index+ 10} className={``}>{data.text}</span>)}</div>
              })}

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
            <div className="text-base flex flex-col gap-4 font-">
            {post.body.map((item,index)=>
                <div className="" key={index}>{item.children.map((data,index)=><span key={index+2} className={`${data.marks.includes('strong') && 'font-semibold'} ${data.marks.includes('em') && 'italic'}`}>{data.text}</span>)}</div>
              )}
              
            </div>
          </div>
          {/* <Image
            src={"/test.jpeg"}
            width={400}
            height={300}
            className="rounded-[10px] object-cover"
            objectFit="cover"
          /> */}
        </div>
      </main>
    </>
  );
};

export const ViewStoryModal = ({viewStory,setView}) => {
  return (
    <>
      <main 
      className=" absolute md:hidden top-0 left-0 z-[99999] p-12 w-screen h-screen overflow-scroll bg-offWhite flex flex-col gap-4"
      >
        <div onClick={()=>setView(false)} className="fixed top-10 bg-white flex items-center justify-center right-3 w-8 h-8 rounded-full cursor-pointer">
          <Image src={"/close.svg"} alt="" width={12} height={12} />
        </div>
        <div className="flex md:flex-row flex-col gap-3 ">
          <div className="flex flex-col gap-3">
            <div className="text-2xl max-w-[400px] font-bold">
              {viewStory && viewStory.title}
            </div>
            <div className="text-[15px]  font- flex flex-col gap-2">
               {viewStory.body.map((item,index)=>
                <div className="" key={index}>{item.children.map((data,index)=><span key={index} className={`${data.marks.includes('strong') && 'font-semibold'} '}`}>{data.text}</span>)}</div>
              )}
            </div>
          </div>
          <Image
            src={"/test.jpeg"}
            width={400}
            height={300}
            className="rounded-[10px] object-cover"
            objectFit="cover"
            alt=""
          />
        </div>
      </main>
    </>
  );
};

export default StoryCard;
