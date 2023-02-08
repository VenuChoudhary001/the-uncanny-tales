import React, { useEffect, useState } from "react";
import StoryCard, {
  VerticalStoryCard,
  ViewStory,
  ViewStoryModal,
} from "../components/storyCard";
import { client } from "../utils/sanity.cli.config";

const Landing = ({ story }) => {
  console.log(story)
  const [view, setView] = useState(false);
  const [viewStory, setViewStory] = useState();
  const handleClick = (item) => {
    setView(true);
    setViewStory(item);
  };

  useEffect(() => {
    if (view) {
      document.body.style.overflow = "hidden";
    }
  }, [view]);

  return (
    <>
      <section className="bg-offWhit w-screen pt-16 md:pt-24">
        <main className="container mx-auto grid md:grid-cols-2 gap-6">
          <main className="flex flex-col gap-4 md:gap-8">
            <div className="flex gap-2">
              <div className="w-10 md:w-16 h-10 md:h-16 rounded-full border-2 md:border-4 border-black"></div>
              <div className="w-10 md:w-16 h-10 md:h-16 rounded-full bg-brand"></div>
            </div>
            <div className="flex flex-col gap-2 md:gap-4 max-w-[550px]">
              <div className="text-4xl md:text-5xl font-semibold">
                The UncannyTales
              </div>
              <div className="text-base md:text-xl font-semibol">
                Daily stories through my spy-lens..The ups and downs of dorm
                life and campus adventures.
              </div>
            </div>
            <hr className="w-full max-w-[600px] h-[2px] bg-gray-300" />
            <main className="h-[500px] overflow-y-scroll scroll">
              <main className="columns-2 md:columns-3  scroll gap-2">
                {story.map((item, index) => {
                  if (index % 2 == 0)
                    return (
                      <StoryCard
                        handleClick={() => handleClick(item)}
                        post={item}
                        index={index}
                      />
                    );
                  else
                    return (
                      <VerticalStoryCard
                        handleClick={() => handleClick(item)}
                        post={item}
                      />
                    );
                })}
              </main>
            </main>
          </main>
          {view && <ViewStory post={viewStory} />}
        </main>
      </section>
      {view && <ViewStoryModal viewStory={viewStory} setView={setView} />}
    </>
  );
};

export async function getStaticProps(context) {
  const data = await client.fetch("*[_type=='post']");
  return {
    props: {
      story: data,
    }, // will be passed to the page component as props
    revalidate:10
  };
}

export default Landing;
