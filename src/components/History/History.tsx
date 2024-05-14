import {
  ChangeEventHandler,
  MouseEventHandler,
  useRef,
  useState,
  useEffect,
} from "react";
import { Input, Text, Button } from "../../ui";
import { z } from "zod";

const HistorySchema = z.object({
  value: z.string(),
  time: z.string(),
});

export const History = () => {
  const [name, setName] = useState("");
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem("fieldHistory");
    if (storedHistory) {
      const parsedHistory = JSON.parse(storedHistory);
      const validation = z.array(HistorySchema).safeParse(parsedHistory);
      if (validation.success) {
        setHistory(validation.data);
      } else {
        console.error("Invalid history:", validation.error);
      }
    }
  }, []);

  const saveToHistory: MouseEventHandler<HTMLButtonElement> = (evt) => {
    evt.preventDefault();
    const newHistoryItem = {
      value: name,
      time: new Date().toISOString(),
    };
    const newHistory = [...history, newHistoryItem];
    localStorage.setItem("fieldHistory", JSON.stringify(newHistory));
    setHistory(newHistory);
  };

  const handleBlur: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  const nameRef = useRef<HTMLInputElement | null>(null);

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (nameRef.current) {
      setName(nameRef.current.value);
    }
  };

  const clearHistory: MouseEventHandler<HTMLButtonElement> = () => {
    setHistory([]);
    localStorage.clear();
  };

  return (
    <>
      <form
        action=""
        className="flex flex-col items-center border-2 border-slate-200 w-fit p-5 mx-auto my-3 rounded-md  shadow-md dark:border-green-900"
      >
        <Input label="Enter your name: " ref={nameRef} onBlur={handleBlur} />
        <Button
          label="Save name"
          className="border-2 border-amber-500 bg-amber-600 py-1 px-4 my-2 rounded text-white hover:bg-amber-500 hover:shadow-md shadow-sm hover:font-bold hover:cursor-pointer dark:border-green-700"
          onClick={saveToHistory}
        />
      </form>

      <div className="flex items-center justify-center">
        <Text className=" text-2xl">History of changes</Text>
        <Button
          label="Clear history"
          onClick={clearHistory}
          className="px-2 py-1 rounded-none disabled:bg-zinc-300 disabled:text-zinc-600 shadow-none"
          disabled={history.length === 0}
        />
      </div>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            <Text>
              {item.value} - {new Date(item.time).toLocaleString()}{" "}
            </Text>
          </li>
        ))}
      </ul>
    </>
  );
};
