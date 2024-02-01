import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [index, setIndex] = useState(0)
  const placeholderText = ['movie', 'tv_shows', 'web_series', 'music']

  useEffect(() => {
    const timer = () => {
      setIndex(prevIndex => {
        // console.log(prevIndex, 'prev')
        if (prevIndex === placeholderText.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      })
    };
    setInterval(timer, 2000)
    return () => { clearInterval(timer) }
  }, [])



  return (
    <div className="App">
      <h3>dynamic placeholder</h3>

      <label htmlFor="cnt">Search Content :  </label>
      <input type="text" id="cnt" name="cnt" placeholder={placeholderText[index]} />
    </div>
  );
}

export default App;
