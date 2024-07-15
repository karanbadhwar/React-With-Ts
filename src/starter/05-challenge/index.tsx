interface IPropsBasic {
  type: "basic";
  name: string;
}

interface IProps2Advanced {
  type: "advanced";
  name: string;
  email: string;
}

function Component(props: IPropsBasic | IProps2Advanced) {
  const className =
    props.type === "advanced" ? "alert alert-success" : "alert alert-danger";

  return (
    <article>
      {props.type === "basic" ? (
        <div className={className}>
          <h2>User: {props.name}</h2>
        </div>
      ) : (
        <div className={className}>
          <h2>User: {props.name}</h2>
          <h2>Email: {props.email}</h2>
        </div>
      )}
    </article>
  );
}
export default Component;
