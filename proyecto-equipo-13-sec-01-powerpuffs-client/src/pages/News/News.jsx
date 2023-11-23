import HeaderContainer from './HeaderContainer/HeaderContainer';
import NewsContainer from './NewsContainer/NewsContainer';
import { news } from '../../components/initial-data.js';

function News() {
  //const [someState, setSomeState] = useState(initialValue);

  
  // If you want to use state for events, you can use useState
  // const [events, setEvents] = useState([]);

  // Alternatively, you can use useEffect to fetch data if needed
  // useEffect(() => {
  //   fetch('path-to-initial-data.js')
  //     .then(response => response.json())
  //     .then(data => setEvents(data.events));
  // }, []);
  
  return (
    <>  
        <div className="News">
          <HeaderContainer/>
          <NewsContainer news={news}/>
        </div>
     
    </>
  );
}

export default News;