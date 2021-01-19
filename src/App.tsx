import React, {useState}  from "react";

const App = () => {

  const [link, setLink] = useState<string>('')

  const parseLink = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault()
    console.log(link)
  }

  return (
    <form onSubmit={(event) => parseLink(event)}>
      <input
        type='text'
        onChange={(event) => setLink(event.target.value)}/>
      <button type='submit'>Parse</button>
    </form>
  );
};

export default App;