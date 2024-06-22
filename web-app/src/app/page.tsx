const Page: React.FC = async () => {
  const response = await fetch("http://localhost:3001/");
  const body = await response.json();

  return <>{JSON.stringify(body)}</>;
};

export default Page;
