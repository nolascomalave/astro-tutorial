import { useState } from 'preact/hooks';

export default function Greeting({messages}: {messages: string[]}) {

  const randomMessage = () => {
    let message = null
    do {
        message = messages[(Math.floor(Math.random() * messages.length))];
    } while(greeting === message);

    return message;
  };

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}