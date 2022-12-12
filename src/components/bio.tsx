import { GlobalContext } from "../App";
import { useContext } from "react";

export const Bio = () => {
  const name = useContext(GlobalContext);
  return (
    <div>
      <p>My Name is {name}</p>
    </div>
  );
};
