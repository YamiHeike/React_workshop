import { Header } from "../ui";

export const HomePage = () => {
  const airtableAPIToken = import.meta.env.VITE_AIRTABLE_API_TOKEN;
  return (
    <>
      <Header className="text-5xl">Hello from home</Header>
      {/*<h4 className="dark:text-slate-300">{airtableAPIToken}</h4>*/}
    </>
  );
};
