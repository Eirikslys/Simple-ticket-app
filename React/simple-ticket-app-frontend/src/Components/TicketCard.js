import React, {useEffect, useState} from 'react';
import '../App.css';

const TicketCard = ({ticket, ticketList, setTicketList}) => {
  
  return(
    <div>
      {ticket.description}
    </div>
  )
}

export default TicketCard;