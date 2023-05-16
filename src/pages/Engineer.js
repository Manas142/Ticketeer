import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Sidebar from '../components/Sidebar';
import {getAllTickets} from "../api/ticket"
import StatusDashboard from '../components/statusDashboard/statusDashboard';
import { createTicketsCount } from '../handlers/ticketHandler';

function Engineer(){

       const [ticketDetails,setTicketDetails] = useState([]);
       const [ticketStatusCount, setTicketStatusCount] = useState({});

       useEffect(()=>{
        fetchTickets();
       })

        const fetchTickets=()=>{
        getAllTickets()
        .then(res=>{
           setTicketDetails(res.data);
           updateTicketsCount(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }

      const updateTicketsCount=(tickets)=>{
        const ticketsCount=createTicketsCount(tickets);
        setTicketStatusCount({...ticketsCount});
    }

    return (
            <div className="row bg-light" >

            <div className="col-1">
            <Sidebar/>
            </div>

            <StatusDashboard statusDetails={ticketStatusCount} />



             </div>              
    );
}

export default Engineer;