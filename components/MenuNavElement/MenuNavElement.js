import React from "react";

export default function MenuNavElement({
  marker,
  className,
  activeClass,
  text,
  setContent,
}) {
  const clickHandler = () => {
    setContent(text);
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
