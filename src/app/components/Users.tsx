import React from "react";

//way 1
// direct props : {name: string, age: number}

//way 2
// variable type with props
type UserProps = { name: string; age: number; isRegistered: boolean };

// way 3
// distructuring
// syntext :
// type UserProps = { name: string; age: number };
// {name: string, age: string}

const Users = ({ name, age, isRegistered }: UserProps) => {
  return (
    <>
      <div>{name}</div> <div>{age}</div> <div>{isRegistered}</div>
    </>
  );
};

export default Users;
