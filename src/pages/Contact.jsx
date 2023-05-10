import { useState } from "react";

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <div>
      <h1>Let's talk!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Message:
            <textarea value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact

