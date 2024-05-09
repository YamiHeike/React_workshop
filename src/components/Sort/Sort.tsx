import { useEffect, useState } from "react";

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

//TODO: introduce state to here, for sorting management

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

  let sortedData = [...data];

  const sortData = () => {
    if (sortOrder === sortDirections.ASC) {
      if (sortBy === sortOptions.ID) {
        sortedData = sortedData.sort((a, b) => a.id - b.id);
      } else if (sortBy === sortOptions.NICKNAME) {
        sortedData = sortedData.sort((a, b) => {
          return a.nickname.localeCompare(b.nickname);
        });
      } else if (sortBy === sortOptions.AGE) {
        sortedData = sortedData.sort((a, b) => a.age - b.age);
      }
    } else if (sortOrder === sortDirections.DESC) {
      if (sortBy === sortOptions.ID) {
        sortedData = sortedData.sort((a, b) => b.id - a.id);
      } else if (sortBy === sortOptions.NICKNAME) {
        sortedData = sortedData.sort((a, b) =>
          b.nickname.localeCompare(a.nickname)
        );
      } else if (sortBy === sortOptions.AGE) {
        sortedData = sortedData.sort((a, b) => b.age - a.age);
      }
    }
    setUserData(sortedData);
  };

  useEffect(() => {
    sortData();
  }, [sortOrder, sortBy]);

  return { userData, order, sortKey, sortData };
};
