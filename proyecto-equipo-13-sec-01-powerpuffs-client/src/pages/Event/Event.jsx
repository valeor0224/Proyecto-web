import './Event.css'
import EventCalendar from './EventCalendar/EventCalendar';
import EventCarrousel from './EventCarrousel/EventCarrousel';
import EventContainer from './EventContainer/EventContainer';
import AddEvent from './AddEvent/AddEvent';
import { events } from '../../components/initial-data.js';
import { useUserContext } from '../../UserContext.jsx';


function Event( ) {
  const {user2} = useUserContext();
  //const [someState, setSomeState] = useState(initialValue);

  
  // If you want to use state for events, you can use useState
  // const [events, setEvents] = useState([]);

  // Alternatively, you can use useEffect to fetch data if needed
  // useEffect(() => {
  //   fetch('path-to-initial-data.js')
  //     .then(response => response.json())
  //     .then(data => setEvents(data.events));
  // }, []); 
  // console.log(userRole);
  
  return (
    <>  
        <div className="Event">
          <h1 className="Event-title">Eventos</h1>
          <EventCarrousel events={events}/>
          {user2?.roleId === '1' || user2?.roleId === '2' ? (
          <AddEvent />
          ): null}
          <EventContainer events={events} />
          <EventCalendar/>
        </div>
     
    </>
  );
}


export default Event;
