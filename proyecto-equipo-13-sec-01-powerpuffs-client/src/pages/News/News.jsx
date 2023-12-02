import HeaderContainer from './HeaderContainer/HeaderContainer';
import NewsContainer from './NewsContainer/NewsContainer';
import { news } from '../../components/initial-data.js';
import AddNews from './AddNews/AddNews.jsx';
import { useUserContext } from '../../UserContext.jsx';

function News() {

  const {user2} = useUserContext();
  
  return (
    <>  
        <div className="News">
          <HeaderContainer/>
          {user2?.roleId === '1' || user2?.roleId === '2' ? (
          <AddNews />
          ): null}
          <NewsContainer news={news}/>
        </div>
     
    </>
  );
}

export default News;