import Display from "./display";

export default function Heading({ text, number }) {
  return (
    <h1>
      {text}
      <Display number={number} />
    </h1>
  );
}
