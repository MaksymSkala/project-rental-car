import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filters from './Filters';
import CarList from './CarList';
import Pagination from './Pagination';
import './CatalogPage.css';
import brands from './brands';
import prices from './prices';

const CatalogPage = () => {
    const [adverts, setAdverts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [advertsPerPage] = useState(12);
    const [showLoadMore, setShowLoadMore] = useState(false);
    const [appliedFilters, setAppliedFilters] = useState({});
  
    useEffect(() => {
      const fetchAdverts = async () => {
        setLoading(true);
        let url = `https://65d842e2c96fbb24c1bb1069.mockapi.io/advert/adverts?page=${currentPage}&limit=${advertsPerPage}`;
        if (Object.keys(appliedFilters).length > 0) {
          url += `&${new URLSearchParams(appliedFilters).toString()}`;
        }
        try {
          const response = await axios.get(url);
          setAdverts(response.data);
          setLoading(false);
          if (response.data.length === advertsPerPage) {
            setShowLoadMore(true);
          }
        } catch (error) {
          console.error('Error fetching adverts:', error);
        }
      };
      fetchAdverts();
    }, [currentPage, advertsPerPage, appliedFilters]);
  
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    const onLoadMore = async () => {
      setLoading(true);
      try {
        const allAdvertsResponse = await axios.get(`https://65d842e2c96fbb24c1bb1069.mockapi.io/advert/adverts`);
        setAdverts(allAdvertsResponse.data);
        setShowLoadMore(false);
        setLoading(false);
      } catch (error) {
        console.error('Error loading more adverts:', error);
      }
    };
  
    // Apply filters
    const applyFilters = (filters) => {
      setCurrentPage(1); // Reset to first page when filters are applied
      setAppliedFilters(filters);
    };

    // Add to favorites
    const addToFavorites = async (advertId) => {
        try {
            await axios.post(`https://65d842e2c96fbb24c1bb1069.mockapi.io/advert/favorites`, { advertId });
            // You may want to update the state or perform other actions upon success
        } catch (error) {
            console.error('Error adding to favorites:', error);
        }
    };
  
    return (
      <div className="catalog-page">
        <Filters brands={brands} prices={prices} onApplyFilters={applyFilters} />
        <CarList adverts={adverts} loading={loading} addToFavorites={addToFavorites} />
        <Pagination
          advertsPerPage={advertsPerPage}
          totalAdverts={adverts.length}
          paginate={paginate}
        />
        {showLoadMore && (
          <button className="load-more-btn" onClick={onLoadMore}>
            Load more
          </button>
        )}
      </div>
    );
  };
  
  export default CatalogPage;