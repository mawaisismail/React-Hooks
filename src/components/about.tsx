import { Bio } from "./bio";
import { useId } from "react";

export const About = () => {
  const id = useId();
  return (
    <div>
      <p>About</p>
      <p>ID1 {id}</p>
      <Bio />
    </div>
  );
};
