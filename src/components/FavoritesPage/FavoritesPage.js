import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FavoritesPage.css';

const FavoritesPage = () => {
    const [favoriteAds, setFavoriteAds] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchFavoriteAds = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://65d842e2c96fbb24c1bb1069.mockapi.io/advert/adverts');
                setFavoriteAds(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching favorite adverts:', error);
            }
        };
        fetchFavoriteAds();
    }, []);

    const removeFromFavorites = async (advertId) => {
        try {
            await axios.delete(`https://65d842e2c96fbb24c1bb1069.mockapi.io/advert/adverts/${advertId}`);
            setFavoriteAds(favoriteAds.filter((ad) => ad.id !== advertId));
        } catch (error) {
            console.error('Error removing from favorites:', error);
        }
    };

    return (
        <div className="favorites-page">
            <h2>Favorite Adverts</h2>
            {loading ? (
                <p>Loading favorite adverts...</p>
            ) : (
                <ul>
                    {favoriteAds.map((advert) => (
                        <li key={advert.id}>
                            <h3>{advert.title}</h3>
                            <p>{advert.description}</p>
                            <button onClick={() => removeFromFavorites(advert.id)}>Remove from Favorites</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FavoritesPage;