import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import StatusDashboard from '../components/statusDashboard/statusDashboard';
import TicketsUpdateModal from '../components/ticketUpdateModal/ticketUpdateModal';
import TicketCreationModal from '../components/ticketCreationModal/ticketCreationModal';
import TicketsTable from '../components/ticketstable/ticketsTable';
import useFetchTickets from '../hooks/useFetchTicket';
import useTicketUpdate from '../hooks/useTicketUpdate';
import constants from '../utils/constants';
import useCreateTicket from '../hooks/useCreateTicket';
import { useLocation } from 'react-router-dom';


function Customer(){

  const location = useLocation();

  useEffect(()=>{

    const path=location.pathname;

    const isCreateTicketTrue = path.split("/")[2]==="createTicket";
    if(isCreateTicketTrue){
    openCreateTicketModal();
    }


  },[])

      const [ticketDetails, fetchTickets] =  useFetchTickets();
      const {selectedCurrTicket, ticketUpdateModal , editTicket , closeTicketUpdateModal, updateTicketFn, onTicketUpdate} = useTicketUpdate(fetchTickets);
      const {createTicketModal , openCreateTicketModal, closeCreateTicketModal} = useCreateTicket();

    return (
            <div className="row bg-light" >
            <div className="col-1">
            <Sidebar/>
            </div>

            <div className="col my-4">
                <div className='container'>
                   <StatusDashboard ticketDetails={ticketDetails} />
                    <TicketsTable editTicket={editTicket} title={"TICKETS RAISED BY YOU"} ticketDetails={ticketDetails}  />
                    <input className='bg-primary border-white text-white' style={{width:"100%"}} onClick={openCreateTicketModal} type="submit" value="RAISE TICKET"  />
                  <TicketsUpdateModal selectedCurrTicket={selectedCurrTicket} onTicketUpdate={onTicketUpdate} ticketUpdateModal={ticketUpdateModal} closeTicketUpdateModal={closeTicketUpdateModal} updateTicketFn={updateTicketFn} />
                  <TicketCreationModal show={createTicketModal} onClose={closeCreateTicketModal} />
                </div>
            </div>
            <div>
            </div>

             </div>              
    );
}

export default Customer;