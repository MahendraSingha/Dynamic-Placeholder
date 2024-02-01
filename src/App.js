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

  // useEffect(() => {
  //   var s = ["Dancing", "Swimming", "Singing"];
  //   var i = 0;
  //   function loop() {
  //     console.log(s[i], "hobby");
  //     document.getElementById("target").placeholder = s[i];
  //     setTimeout(loop, 3000); // call myself in 3 seconds time if required
  //     if (i === s.length - 1) {
  //       i = 0;
  //     } else {
  //       i++;
  //     }
  //   }
  //   loop();
  // }, []);



  return (
    <div className="App">
      <h3>dynamic placeholder</h3>

      <label htmlFor="cnt">Search Content :  </label>
      <input type="text" id="cnt" name="cnt" placeholder={placeholderText[index]} />
    </div>
  );
}

export default App;
