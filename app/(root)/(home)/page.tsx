import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import Filter from "@/components/shared/search/Filter";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import React from "react";

const questions = [
  {
    _id: 1,
    title: "Cascading Deletes in SQL Alchemy",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" },
    ],
    author: {
      _id: "a1",
      name: "John Duo",
      picture: "https://example.com/john_duo.png",
    },
    upvotes: 10,
    views: 200,
    answers: [
      { _id: "ans1", content: "You can use ON DELETE CASCADE for this." },
      {
        _id: "ans2",
        content: "It's crucial to test cascading behavior carefully.",
      },
    ],
    createdAt: new Date("2024-09-12T12:00:00.000Z"),
  },
  {
    _id: 2,
    title: "How to Center a Div",
    tags: [
      { _id: "3", name: "css" },
      { _id: "4", name: "web" },
    ],
    author: {
      _id: "a2",
      name: "Jane Smith",
      picture: "https://example.com/jane_smith.png",
    },
    upvotes: 25,
    views: 450,
    answers: [
      {
        _id: "ans1",
        content: "Use flexbox or grid for centering elements easily.",
      },
      {
        _id: "ans2",
        content: "You can also use margin: auto for a simple solution.",
      },
    ],
    createdAt: new Date("2024-09-15T15:30:00.000Z"),
  },
];

const Home = () => {
  return (
    <div>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask A Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((item) => {
            return (
              <QuestionCard
                key={item._id}
                _id={item._id}
                title={item.title}
                tags={item.tags}
                author={item.author}
                upvotes={item.upvotes}
                views={item.views}
                answers={item.answers}
                createdAt={item.createdAt}
              />
            );
          })
        ) : (
          <NoResult
            title="Theres No Question to Show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
        discussion. our query could be the next big thing others learn from. Get
        involved!"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </div>
  );
};

export default Home;
