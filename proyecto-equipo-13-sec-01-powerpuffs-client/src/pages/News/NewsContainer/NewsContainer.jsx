import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NewsContainer.css";
import NewsCard from "../../../components/cards/NewsCard/NewsCard";

const NewsContainer = ({ news }) => {

    const [filters, setFilters] = useState({
        location: "",
        dateCreated: "",
        newsType: "",
    });

    const [filteredNews, setFilteredNews] = useState(news);
    const [isFilterVisible, setFilterVisibility] = useState(true);
    const [visibleCardCount, setVisibleCardCount] = useState(4);

    const handleFilterChange = (filterName, value) => {
        setFilters({
            ...filters,
            [filterName]: value,
        });
    };

    const handleFilterSubmit = () => {
        const newFilteredNews = news.filter((news2) => {
            const isLocationMatch = !filters.location || news2.location.toLowerCase().includes(filters.location.toLowerCase());
            const isDateMatch = !filters.dateCreated || news2.dateCreated.toLowerCase().includes(filters.dateCreated.toLowerCase());
            const isNewsTypeMatch = !filters.newsType || news2.newsType.toLowerCase().includes(filters.newsType.toLowerCase());

            return isLocationMatch && isDateMatch && isNewsTypeMatch;
        });

        setFilteredNews(newFilteredNews);
        setVisibleCardCount(4);
    };

    const handleFilterClear = () => {
        setFilters({
            location: "",
            dateCreated: "",
            newsType: "",
        });

        setFilteredNews(news);
        setVisibleCardCount(6);
    };

    const toggleFilterVisibility = () => {
        setFilterVisibility(!isFilterVisible);
    };

    const handleViewMore = () => {
        setVisibleCardCount((prevCount) => prevCount + 2);
    };

    return (
        <div className="news2-container">

            <div className="event-filter-containerN">
                <div className="event-filter-txtN" >
                    <img id="filter-icon" src="/src/assets/img/Vector.png" alt="Filter-icon" onClick={toggleFilterVisibility}/>
                    <h2>Refina tu búsqueda para encontrar noticias de tu interés.</h2>
                </div>
                {isFilterVisible && (
                    <div className="event-filterN">
                        <div className="event-filter-itemN">
                            <p> Ubicación: </p>
                            <input
                                type="text"
                                placeholder="Ubicación"
                                value={filters.location}
                                onChange={(e) => handleFilterChange("location", e.target.value)}
                            />
                        </div>
                        <div className="event-filter-itemN">
                            <p> Fecha: </p>
                            <input
                                type="text"
                                placeholder="DD/MM/YY"
                                value={filters.dateCreated}
                                onChange={(e) => handleFilterChange("dateCreated", e.target.value)}
                            />
                        </div>
                        <div className="event-filter-itemN">
                            <p> Tipo de noticia: </p>
                            <select
                                value={filters.newsType}
                                onChange={(e) => handleFilterChange("newsType", e.target.value)}
                            >
                                <option value="">Selecciona el tipo de noticia</option>
                                <option value="Recomendaciones">Recomendaciones</option>
                                <option value="Success Story">Success Story</option>
                                <option value="Blog">Blog</option>
                                <option value="Servicio Social">Servicio Social</option>
                            </select>
                        </div>
                        <div className="filter-buttonsN">
                            <button id="submit" onClick={handleFilterSubmit}>BUSCAR</button>
                            <button id="delete" onClick={handleFilterClear}>BORRAR FILTROS</button>
                        </div>
                    </div>
                )}
            </div>
            <div className="news-container">
                {filteredNews.slice(0, visibleCardCount).map((news, index) => (
                     <NewsCard
                     key={index}
                     dateCreated={news.dateCreated}
                     newsTitle={news.newsTitle}
                     location={news.location}
                     description={news.description}
                     buttonText={news.buttonText}
                     viewType=""
                     newsImage={news.newsImage}
                     newsType={news.newsType}
                   />
                ))}
                {filteredNews.length > visibleCardCount && (
                    <div className="view-more-container2">
                        <button onClick={handleViewMore}>VER MÁS</button>
                    </div>
                )}
                {filteredNews.length === 0 && (
                    <div className="no-result">
                        <p>Sin resultados.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewsContainer;