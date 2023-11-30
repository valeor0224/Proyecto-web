import HeaderContainer from './HeaderContainer/HeaderContainer';
import NewsContainer from './NewsContainer/NewsContainer';
import { news } from '../../components/initial-data.js';

function News() {
  
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