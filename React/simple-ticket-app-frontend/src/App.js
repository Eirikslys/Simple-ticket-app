import logo from './logo.svg';
import React, {createContext, useEffect, useState } from 'react';
import './App.css';
import CategoryCard from './Components/CategoryColumn'

function App() {
  const [ticketList, setTicketList] = useState([]);
  const [categoryList, setCategoryList] = useState(['Planned', 'Ongoing', 'Completed']);

  const getData = async () => {
    const response = await fetch('https://localhost:7210/api/Ticket/');
    const data = await response.json();
    console.log("in the thing ", data)
    setTicketList(data)
  }
  
  useEffect(() => {
    console.log("ALARM")
    getData()
  }, [])

  useEffect(() => {
    const oldCatList = categoryList;
    setCategoryList(oldCatList);
  }, [ticketList])


  
  return (
    <div className="App">
      {ticketList.count}
      {categoryList && categoryList.map(category =>
                ( <CategoryCard category={category} ticketList={ticketList} setTicketList={setTicketList} key={category}/> ))}
    </div>
  );
}

export default App;
