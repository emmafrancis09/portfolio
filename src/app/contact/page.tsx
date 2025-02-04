import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="pb-4 text-4xl">Contact Me</h1>
      <form className="flex flex-col items-center py-4 text-neutral-300">
        <input
          type="text"
          placeholder="John Doe"
          className="outline-none border my-2 rounded-lg py-2 px-2 w-72 border-neutral-600"
        />
        <input
          type="email"
          placeholder="johndoe@gmail.com"
          className="outline-none border my-2 rounded-lg py-2 px-2 w-72 border-neutral-600"
        />
        <textarea
          placeholder="Leave a comment"
          className="border rounded-lg py-2 px-2 w-72 my-2 h-32 outline-none border-neutral-600"
        />
        <button
          type="button"
          className="border-neutral-600 border my-2 py-2 w-32 rounded-md shadow active:opacity-60 cursor-pointer transition-all"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default page;
