import React, { useState } from 'react';
import './Quotes.css';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const getRandomQuote = () => {
    let url="https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    fetch(url)
    .then(res=>res.json())
    .then(json=>{
      let Quotes = json.quotes;
      let randomNum  = Math.floor(Math.random()*Quotes.length);
      let randomQuote = Quotes[randomNum];

      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
    })
  };

  return (
  
    <div className="quote-container">
      <h2 className='head'>Random Quotes</h2>
      <p className="quote-text">{quote}</p>
      <p className="quote-author">{author}</p>
      <br /><br /><br />
      <button className="button" onClick={getRandomQuote}>Random Quote</button>
    </div>
    
  );
};

export default Quote;







