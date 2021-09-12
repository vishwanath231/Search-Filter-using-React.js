import React,{useState, useEffect} from 'react'
import axios from 'axios';
import DisplayData from './components/DisplayData';

const App = () => {

    const [APIdata, setAPIData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(() => {
        
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => 
            setAPIData(response.data)
        );

    }, [])

    const searchItem = (searchValue) => {
        setSearchText(searchValue)
        if (searchText !== '') {
        const filterData = APIdata.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchText.toLowerCase())
        })
        setFilteredResults(filterData)
        }else{
            setFilteredResults(APIdata);
        }
    }



    return (
        <div className="container px-4 mx-auto">
            
            <div className="text-center font-semibold m-4 text-2xl">SEARCH FILTER</div>

            <div className="flex justify-center align-center my-8">
                <input 
                    type="text"
                    placeholder="Enter name..."
                    onChange={e => searchItem(e.target.value)}
                    className="border-2 focus:outline-none py-2 px-4 rounded text-base font-medium"
                />
            </div>
            
            
            <div className="flex flex-wrap justify-center align-center mt-10">
                { 
                    searchText.length > 1 ? (
                        filteredResults.map((item) => (
                            <DisplayData item={item} /> 
                        ))
                    ):(
                        APIdata.map((item) => (
                            <DisplayData item={item} /> 
                        ))
                    )
                }
            </div>
            
        </div>
    )
}

export default App;
