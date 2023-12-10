"use client";
import BlogCard from "@/components/blog-card";
import React from "react";

const blogs = () => {
  return (
    <section className="pt-10 pr-10 pl-10 grid grid-cols-1 items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-4   ">
      <BlogCard title={"Start-up Blog"} description={"It's a Blog on Startup Journey from zero to advance. A very that shows you how to take your startup to a successfull business"}/>
    </section>
  );
};

export default blogs;
