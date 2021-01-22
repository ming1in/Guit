import React, { useState } from "react";
import { LinkParser } from './parsers'

const App = () => {
  const [link, setLink] = useState<string>('https://www.zillow.com/homedetails/3240-NW-17th-St-Miami-FL-33125/43821660_zpid/')

  const parseLink = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault()
    LinkParser(link)
  }

  return (
    <form onSubmit={(event) => parseLink(event)}>
      <input
        type='text'
        onChange={(event) => setLink(event.target.value)}
        value={link}
      />
      <button type='submit'>Parse</button>
    </form>
  );
};

export default App;
