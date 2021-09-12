import React,{useState} from 'react';
import Data from './contact.json';

const MyData = () => {

    const [searchText, setSearchText] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);


    const filterItem = (searchValue) => {
        setSearchText(searchValue);
        if (searchText !== '') {
            const filterData = Data.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchText.toLowerCase())
            })
            setFilteredResults(filterData)
        }else{
            setFilteredResults(Data)
        }
    }

    return (
        <div>

            <div className="">
                <input type="text" 
                    placeholder="Enter name..."
                    onChange = {e => filterItem(e.target.value)}
                />
            </div>

            {
                searchText.length > 1 ? (
                    filteredResults.map((item) => {
                        return(
                            <div className="" id={item.id}>
                                <div className="">{item.name}</div>
                                <div className="">{item.phone}</div>
                            </div>
                        )
                    })
                ):(
                    Data.map((item) => {
                        return(
                            <div className="" id={item.id}>
                                <div className="">{item.name}</div>
                                <div className="">{item.phone}</div>
                            </div>
                        )
                    })
                )
                
            }
            
        </div>
    )
}

export default MyData;
