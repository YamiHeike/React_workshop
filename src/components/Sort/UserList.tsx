import { type Users } from "./Sort";
import { Button, Select, Text } from "../../ui";
import { sortOptions, sortDirections, useSort } from "./Sort";
import { ChangeEventHandler, MouseEventHandler } from "react";

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

  //TODO: handleClick - sorting function

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

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (evt) => {
    let direction = evt.target.value;
    if (direction === "ASC") {
      order(sortDirections.ASC);
    } else if (direction === "DESC") {
      order(sortDirections.DESC);
    }
  };

  return (
    <div className="my-3">
      <Text className="text-5xl ">Current Users</Text>
      <ul>
        {userData.map((user) => (
          <li key={user.id} className="dark:text-slate-300">
            <div>
              {user.nickname}, {user.age}
            </div>
          </li>
        ))}
      </ul>

      {
        <div className="flex flex-col items-center justify-center my-4">
          <Text className="text-2xl font-thin">
            Would you like to sort this list?
          </Text>
          <div>
            <Select
              options={Object.keys(sortDirections)}
              label="Sort order"
              onChange={handleChange}
            />
          </div>
          <div>
            <Button label="Sort by Nickname" onClick={handleSortByNickname} />
            <Button label="Sort by Id" onClick={handleSortById} />
            <Button label="Sort by Age" onClick={handleSortByAge} />
          </div>
        </div>
      }
    </div>
  );
};
