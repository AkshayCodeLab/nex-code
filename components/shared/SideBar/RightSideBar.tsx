import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "../RenderTag";

const hotQuestions = [
  { _id: 1, title: "How to I use express as a custom server in NextJS ?" },
  { _id: 2, title: "Cascading Deletes in SQLAlchemy?" },
  { _id: 3, title: "How to perfectly centre a div with Tailwind CSS?" },
  {
    _id: 4,
    title:
      "Best practices for data fetching in a NextJS application with server-side Rendering (SSR)?",
  },
  { _id: 5, title: "Redux toolkit not updating the state as expected." },
];

const popularTags = [
  {
    _id: 1,
    name: "JavaScript",
    totalQuestions: 5,
  },
  {
    _id: 2,
    name: "Next",
    totalQuestions: 2,
  },
  {
    _id: 3,
    name: "React",
    totalQuestions: 3,
  },
  {
    _id: 4,
    name: "VueJs",
    totalQuestions: 10,
  },
  {
    _id: 5,
    name: "Redux",
    totalQuestions: 8,
  },
];

const RightSideBar = () => {
  return (
    <section
      className="background-light900_dark200 light-border
        custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col 
        overflow-y-auto rounded-lg border-l p-6 pt-36 shadow-lg dark:shadow-none
        max-xl:hidden"
    >
      <div>
        <h3 className="h3-bold text-dark200_light900 border-b pb-3 text-lg font-semibold">
          Top Questions
        </h3>
        <div className="mt-7 flex w-full flex-col gap-[20px]">
          {hotQuestions.map((question) => {
            return (
              <Link
                href={`questions/${question._id}`}
                key={question._id}
                className="flex cursor-pointer items-center justify-between gap-7 rounded-md 
                          p-3 transition-colors duration-300 ease-in-out 
                          hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <p className="body-medium text-dark500_light700 leading-relaxed">
                  {question.title}
                </p>

                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="chevron right"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900 border-b pb-3 text-lg font-semibold">
          Popular Tags
        </h3>
        <div className="mt-7 flex flex-col gap-3">
          {popularTags.map((tag) => {
            return (
              <RenderTag
                key={tag._id}
                _id={tag._id}
                name={tag.name}
                totalQuestions={tag.totalQuestions}
                showCount
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
