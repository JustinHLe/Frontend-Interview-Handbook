import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyCarousel } from './components/coding/Carousel/Carousel'
import { Table } from './components/coding/SortedDataTable/Table';
import useFetch from './components/coding/useFetch';
import { useEffect } from 'react';

function App() {
  const [loading, data, error] = useFetch('https://v2.jokeapi.dev/joke/Any')
  return (
    <div>
      {/* <MyCarousel/> */}
      {/* <Table /> */}
      Hello World
    </div>
  );
}

export default App;
