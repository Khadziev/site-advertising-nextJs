import { Button, Htag } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Haz</Htag>
      <Button appearance="primary" arrow="right">
        кнока
      </Button>
      <Button appearance="ghost" arrow="down">
        кнока
      </Button>
    </>
  );
}
