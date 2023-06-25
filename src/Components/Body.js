import { useState } from "react";
const Body = () => {
  const [color, setcolor] = useState("red");
  const [bio, setbio] = useState({
    name: "Harshita",
    batch: "2025",
    branch: "ECE",
    college: "MMMUT",
  });

  const handleupdatebio = () => {
    if (bio.name === "Harshita") {
      const newBio = {
        name: "Ganga",
        batch: "2024",
        branch: "CSE",
        college: "IET",
      };
      setbio(newBio);
      setcolor("blue");
    } else if (bio.name === "Ganga") {
      const newBio = {
        name: "Harshita",
        batch: "2025",
        branch: "ECE",
        college: "MMMUT",
      };
      setbio(newBio);
      setcolor("red");
    }
  };
  return (
    <>
      <div style={{ backgroundColor: color }}>
        <h1>
          Hello! My name is {bio.name} and I study in {bio.college}. My branch
          is {bio.branch} and my batch is {bio.batch}.
        </h1>
        <button onClick={() => handleupdatebio()} type="button">
          {""}
          Update Bio{" "}
        </button>
      </div>
    </>
  );
};
export default Body;
