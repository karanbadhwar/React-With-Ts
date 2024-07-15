/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

type Link = {
  id: number;
  url: string;
  text: string;
};

const navLinks: Link[] = [
  {
    id: 1,
    url: "some url",
    text: "some random text",
  },
  {
    id: 2,
    url: "some url",
    text: "some random text",
  },
  {
    id: 3,
    url: "some url",
    text: "some random text",
  },
];

function Component() {
  const [text, setText] = useState<string>("Shake And Bake");
  const [list, setList] = useState<string[]>([]);
  //If we dont pass Generic value over here, it infers never[],
  // setList({1,2,3}) //Cannot be done as the type is never[], if we dont pass Generic in this case

  const [links, setLinks] = useState<Link[]>(navLinks);
  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <h2>{text}</h2>
      <button
        className="btn btn-center"
        onClick={() => {
          //
          setText("");
          //
          setList(["hello", "world"]);
          //
          setLinks([
            ...links,
            { id: 4, url: "some again value", text: "heelo again" },
          ]);
        }}
      >
        Click Me
      </button>
    </div>
  );
}
export default Component;
