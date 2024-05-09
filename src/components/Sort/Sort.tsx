import { useState } from "react";

export type User = {
  id: number;
  nickname: string;
  age: number;
};

export type Users = User[];

export enum sortOptions {
  ID = "Id",
  NICKNAME = "Nickname",
  AGE = "Age",
}

export enum sortDirections {
  ASC = "Ascending",
  DESC = "Descending",
}

type SortProps = {
  data: Users;
};

//sortBy: sortOptions;
//sortOrder: sortDirections;

/* Body of useAuth for reference:
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleValue = () => setIsLoggedIn((val) => !val);
  const logIn = () => setIsLoggedIn(true);
  const logOut = () => setIsLoggedIn(false);

  return { isLoggedIn, toggleValue, logIn, logOut };
*/

//TODO: introduce state to here, for sorting management

//{ data, sortBy, sortOrder }: SortProps

export const useSort = ({ data }: SortProps) => {
  const [sortOrder, setSortOrder] = useState(sortDirections.ASC);
  const [sortBy, setSortBy] = useState(sortOptions.ID);
  const [userData, setUserData] = useState(data);

  const order = (order: sortDirections) => {
    setSortOrder(order);
  };
  const sortKey = (key: sortOptions) => {
    setSortBy(key);
  };

  const sortData = () => {
    if (sortOrder === sortDirections.ASC) {
      if (sortBy === sortOptions.ID) {
        setUserData(data.sort((a, b) => a.id - b.id));
      } else if (sortBy === sortOptions.NICKNAME) {
        setUserData(
          data.sort((a, b) => {
            return a.nickname.localeCompare(b.nickname);
          })
        );
      } else if (sortBy === sortOptions.AGE) {
        setUserData(data.sort((a, b) => a.age - b.age));
      }
    } else if (sortOrder === sortDirections.DESC) {
      if (sortBy === sortOptions.ID) {
        setUserData(data.sort((a, b) => b.id - a.id));
      } else if (sortBy === sortOptions.NICKNAME) {
        setUserData(data.sort((a, b) => b.nickname.localeCompare(a.nickname)));
      } else if (sortBy === sortOptions.AGE) {
        setUserData(data.sort((a, b) => b.age - a.age));
      }
    }
  };
  return { userData, order, sortKey, sortData };
};
