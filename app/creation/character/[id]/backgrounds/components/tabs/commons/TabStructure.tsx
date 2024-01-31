import { ReactNode } from "react";

export default function TabStructure(props: {
  description: string;
  children: ReactNode;
}) {
  return (
    <>
      <div className="p-5 whitespace-pre-line">{props.description}</div>
      {props.children}
    </>
  );
}
