import { type Users } from "./Sort";
import { Button, Text } from "../../ui";
import { sortOptions, sortDirections, useSort } from "./Sort";
import { MouseEventHandler } from "react";
import ArrowDownIcon from "@heroicons/react/24/outline/ArrowDownIcon";
import ArrowUpIcon from "@heroicons/react/24/outline/ArrowUpIcon";

export const UserList = () => {
  const users: Users = [
    {
      id: 1,
      nickname: "john",
      age: 45,
    },
    {
      id: 2,
      nickname: "olivier",
      age: 32,
    },
    {
      id: 3,
      nickname: "macgyver",
      age: 65,
    },
  ];

  const { userData, order, sortKey, sortData } = useSort({ data: users });

  const handleSortByAge: MouseEventHandler<HTMLButtonElement> = () => {
    sortKey(sortOptions.AGE);
    sortData();
  };

  const handleSortById: MouseEventHandler<HTMLButtonElement> = () => {
    sortKey(sortOptions.ID);
    sortData();
  };

  const handleSortByNickname: MouseEventHandler<HTMLButtonElement> = () => {
    sortKey(sortOptions.NICKNAME);
    sortData();
  };

  const sortAscending: MouseEventHandler<SVGSVGElement> = () => {
    order(sortDirections.ASC);
  };

  const sortDescending: MouseEventHandler<SVGSVGElement> = () => {
    order(sortDirections.DESC);
  };

  return (
    <div className="my-3">
      <Text className="text-5xl ">Current Users</Text>
      <div className="flex flex-col items-center justify-center my-4">
        <Text className="text-2xl font-thin">
          Would you like to sort this list?
        </Text>
        <div className="flex">
          <ArrowUpIcon
            className="h-5 w-5 cursor-pointer dark:text-slate-300"
            onClick={sortAscending}
          />
          <ArrowDownIcon
            className="h-5 w-5 cursor-pointer dark:text-slate-300"
            onClick={sortDescending}
          />
        </div>

        <div>
          <Button label="Sort by Nickname" onClick={handleSortByNickname} />
          <Button label="Sort by Id" onClick={handleSortById} />
          <Button label="Sort by Age" onClick={handleSortByAge} />
        </div>
      </div>

      <ul>
        {userData.map((user) => (
          <li key={user.id} className="dark:text-slate-300">
            <div>
              {user.nickname}, {user.age}
            </div>
          </li>
        ))}
      </ul>

      {}
    </div>
  );
};
