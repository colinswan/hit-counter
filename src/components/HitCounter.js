"use client";
import React from "react";

function HitCounter({ hits }) {
  const [isCensored, setIsCensored] = React.useState(false);

  return (
    <button
      onClick={() => setIsCensored(!isCensored)}
      className={isCensored ? "censored" : undefined}
    >
      {hits}
    </button>
  );
}

export default HitCounter;
