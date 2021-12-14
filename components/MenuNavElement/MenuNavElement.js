import React from "react";

export default function MenuNavElement({
  marker,
  className,
  activeClass,
  text,
  setContent,
  setOpen,
}) {
  const clickHandler = () => {
    setContent(text);
    setOpen(false);
  };

  return (
    <li
      onClick={clickHandler}
      className={`${className} ${marker === text ? activeClass : ""}`}
    >
      {text}
    </li>
  );
}
