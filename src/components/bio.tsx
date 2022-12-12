import { GlobalContext } from "../App";

export const Bio = () => {
  return (
    <div>
      <GlobalContext.Consumer>
        {(value) => <p>My Name is {value}</p>}
      </GlobalContext.Consumer>
    </div>
  );
};
