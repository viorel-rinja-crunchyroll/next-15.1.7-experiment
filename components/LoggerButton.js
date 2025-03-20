'use client';

import { useState } from "react";

const LoggerButton = ({text}) => {
  const [data] = useState(() => () => null);

  console.log('a-1', data);

  return <button onClick={data}>Log this!</button>
}

export default LoggerButton;