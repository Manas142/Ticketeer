import MaterialTable from "material-table";


function TicketsTable(props){

    return (  <MaterialTable

        onRowClick={ (event,rowData)=> props.editTicket(rowData) }

          columns={[
            { title: 'TICKET ID', field: '_id' },
            { title: 'TITLE', field: 'title' },
            { title: 'DESCRIPTION', field: 'description' },
            { title: 'REQUESTOR', field: 'requestor' },
            { title: 'PRIORITY', field: 'ticketPriority' },
            { title: 'ASSIGNEE', field: 'assignee' },
            { title: 'STATUS', field: 'status' },

          ]}
          data={props.ticketDetails}

          title= {props.title}

          options={{
            sorting:true,
            rowStyle:{
                cursor:"pointer"
            }
          }}      
        />);
}

export default TicketsTable;