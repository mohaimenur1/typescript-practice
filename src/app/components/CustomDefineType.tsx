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
}

const CustomDefineType = ({ lang, user }: combinedProps) => {
  return (
    <div>
      {lang.map((l) => (
        <span>{l}</span>
      ))}
      <div>{user.name}</div>
    </div>
  );
};

export default CustomDefineType;
