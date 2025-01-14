import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-lightBg">
      <div className="flex flex-wrap items-center gap-4">
        <Link
          className="cursor-pointer rounded-lg bg-primary px-4 py-2 text-white"
          href={"/notes/about"}
        >
          Read Notes
        </Link>
        <Link
          className="cursor-pointer rounded-lg bg-secondary px-4 py-2 text-white"
          href={"https://yasir-etc.medium.com/"}
        >
          Visit Blog
        </Link>
        <Link
          className="cursor-pointer rounded-lg bg-dark px-4 py-2 text-white"
          href={"https://www.linkedin.com/in/yasir-etc/"}
        >
          Visit Portfolio
        </Link>
      </div>
    </section>
  );
};

export default Page;
