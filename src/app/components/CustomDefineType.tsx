import { Span } from "next/dist/trace";
import React from "react";

//custom userDefined types
// example: array, object, enum, union, any, custom type

interface combinedProps {
  lang: string[];
  user: {
    name: string;
    age: number;
    isRegistered: boolean;
    lang: string[];
  };
  usersArr: {
    name: string;
    age: number;
    isRegistered: boolean;
    location: string;
  }[];
  status: "success" | "error" | "loading";
}

const CustomDefineType = ({ lang, user, usersArr, status }: combinedProps) => {
  //   if (status === "success") {
  //     return <div>Data Fetching Successfully</div>;
  //   } else if (status === "error") {
  //     return <div>Error. Data fetching error</div>;
  //   }
  return (
    <div>
      {lang.map((l) => (
        <span key={l}>{l}</span>
      ))}
      <div>{user.name}</div>
      <div>
        {usersArr.map((user) => {
          return (
            <div key={user.name}>
              <span>{user.name}</span> <span>{user.location}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomDefineType;
