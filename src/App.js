import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyCarousel } from './components/coding/Carousel/Carousel'
import { Table } from './components/coding/SortedDataTable/Table';
import useFetch from './components/coding/useFetch';
import { useEffect, useState } from 'react';
import useLocalStorage from './components/coding/useLocalStorage';
import useUpdateLogger from './components/coding/useUpdateLogger';
function App() {
  // const [loading, data, error] = useFetch('https://v2.jokeapi.dev/joke/Any')
  const [key, setValue] = useLocalStorage("name", "")
  const [variable, setVariable] = useUpdateLogger("test")
  // const [count, setCount] = useState(0)
  return (
    <>
      <div>
        {/* <MyCarousel/> */}
        {/* <Table /> */}
        Hello World
      </div>
      <input
          placeholder='username'
          onChange={(e) => setVariable(e.target.value)}
      />
      <button onClick={() => {setValue(document.getElementsByTagName('input')[0].value)}}>
        test
      </button>
      {/* <div>{count}</div>
      <div onClick={()=>{setCount(count + 1)}}>+</div> */}
    </>
  );
}

export default App;
