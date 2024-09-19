"use client";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LeftSideBar = () => {
  const pathname = usePathname();
  return (
    <section
      className="background-light900_dark200 light-border
        custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto 
        rounded-lg border-r p-6 pt-36 shadow-lg dark:shadow-none max-sm:hidden lg:w-[266px]"
    >
      <div className="flex flex-1 flex-col gap-5">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

          return (
            <Link
              key={item.route}
              href={item.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900 hover:text-light-700"
              } flex items-center justify-start gap-4 rounded-md p-4 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p
                className={`${
                  isActive ? "font-semibold" : "font-medium"
                } hidden lg:block`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>

      <SignedOut>
        <div className="flex flex-col gap-3">
          <Link href="/sign-in">
            <Button className="btn-secondary w-full rounded-lg px-4 py-3 shadow-md transition-shadow duration-300 hover:shadow-lg">
              <Image
                src="/assets/icons/account.svg"
                alt="login"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient hidden lg:inline">
                Log In
              </span>
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="btn-tertiary w-full rounded-lg border px-4 py-3 shadow-md transition-shadow duration-300 hover:shadow-lg">
              <Image
                src="/assets/icons/sign-up.svg"
                alt="signup"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="hidden lg:inline">Sign Up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
};

export default LeftSideBar;
