import { type PropsWithChildren } from "react";

//Other way to define Children props, as it already combines children with the Generic props
type componentProps = PropsWithChildren<{
  name: string;
  id: number;
}>;

//Other way to define Children props
// type componentProps = {
//   name: string;
//   id: number;
//   children?: React.ReactNode;
// };

function Component(props: componentProps) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>ID: {props.id}</h1>
      {props.children}
    </div>
  );
}
export default Component;
