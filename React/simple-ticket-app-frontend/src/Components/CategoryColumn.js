import React, {useEffect, useState} from 'react';
import '../App.css';
import TicketCard from './TicketCard';

const CategoryColumn = ({category, ticketList, setTicketList}) => {
  const [localList, setLocalList] = useState([]);
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');


  useEffect(() => {
    const newList = [];
    ticketList.forEach(element => {
      if (element.category === category) {
        newList.push(element)
      }
      setLocalList(newList);
    });
    console.log("updated list ", ticketList);
  }, [ticketList])

  // console.log("this is the localList " + localList[0])
  const handleSubmit = e => {
    e.preventDefault();
    console.log("old list ", ticketList[0]);
    setTicketList([...ticketList,
        {Title: title,
        Description: description,
        category: category,
        Status: 'not done',
        CreatedAt: Date.now()
        }
    ])

    setTitle('');
    setDescription('');
}

  return(
    <div>
      {category}
      {localList.length}
      <form onSubmit={handleSubmit} >
            <input type='text' value={title} className={'titleToAdd'} onChange={e => setTitle(e.target.value)}/>
            <input type='text' value={description} className={'descriptionToAdd'} onChange={e => setDescription(e.target.value)}/>
            <button type='submit'> Add a new ticket </button> 
        </form>
      {ticketList.filter(x => {x.category === category}).map(ticket =>
                ( <TicketCard ticket={ticket} ticketList={ticketList} setTicketList={setTicketList} key={ticket.CreatedAt + title}/>))}
    </div>
  )
}

// ( <TicketCard ticket={ticket} setTicketList={setTicketList} key={ticket.id}/> )
export default CategoryColumn;