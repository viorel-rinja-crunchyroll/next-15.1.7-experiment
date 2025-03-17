'use client';

const LoggerButton = ({text}) => {
  const log = () => {
    console.log(`LoggerButton here. They asked me to log: ${text}`)
  }

  console.log('logger button computed');

  return <button onClick={log}>Log this!</button>
}

export default LoggerButton;