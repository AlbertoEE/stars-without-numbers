import { ReactNode } from "react";

export default function TabStructure(props: {
  description: string;
  children: ReactNode;
}) {
  return (
    <>
      {props.children}
    </>
  );
}
