import {useState, useEffect} from 'react'
import Data from '../components/Data'
import Hero from '../components/Hero'
import Search from '../components/Search';

const Landing = () => {

    const [coronavirusData, setCoronavirusData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);


    const getCoronavirusData = async () => {
      const response = await fetch("http://localhost:8080/data");
      const data = await response.json();
      setCoronavirusData(data);
      setFilteredData(data)
    };
  
    useEffect(() => {
      getCoronavirusData();
    }, []);

    return (
        <div>
            <Hero />
            <Search data={coronavirusData} setFilteredData={setFilteredData}/>
            <Data data={filteredData}/>
        </div>
    )
}

export default Landing
