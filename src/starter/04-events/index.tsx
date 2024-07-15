/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

type Person = {
  name: string;
};

function Component() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    setEmail(event.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // const formData = new FormData(e.target as HTMLFormElement);

    // const trying = formData.get("text");
    // console.log(trying);

    const data = Object.fromEntries(formData);
    console.log(data);

    // const textValue = formData.get("text") as string;

    const person: Person = {
      name: data.text as string,
    };
  }

  return (
    <section>
      <h2>Events</h2>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="text"
          className="form-input mb-1"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />

        <input
          type="email"
          name="email"
          placeholder="email"
          className="form-input mb-1"
          value={email}
          onChange={(e) => handleChange(e)}
        />

        <button className="btn btn-block" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
export default Component;
