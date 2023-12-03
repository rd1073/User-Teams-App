import React from 'react';
import { useState, useEffect } from "react";
 import { useNavigate, useParams } from 'react-router-dom';
import Pagination from './Pagination';
import Cardd from './Card';
const AllUsers = ({ match }) => {
    const { pageNumber } = useParams();

 
    const pageNumberr = pageNumber || 1;
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
  
    const [page, setPage] = useState(pageNumberr);
    const [pages, setPages] = useState(1);

    useEffect(() => {
        const fecthUsers = async () => {
          setLoading(true);
          try {
            const res = await fetch(`http://localhost:4000/api/get/?page=${page}`);
    
            const { data, pages: totalPages } = await res.json();
    
            setPages(totalPages);
            setPosts(data);
            setLoading(false);
          } catch (error) {
            console.log(error);
            setLoading(false);
            setError("Some error occured");
          }
        };
    
        fecthUsers();
      }, [page]);
  return (
    <div className="app">
      {loading ? (
        <h3 className="loading-text">Loading...</h3>
      ) : error ? (
        <h3 className="error-text">{error}</h3>
      ) : (
        <>
          <Pagination page={page} pages={pages} changePage={setPage} />
          <div className="app__posts">
            {posts.map((post) => (
              <Cardd key={post._id} post={post} />
            ))}
          </div>
          <Pagination page={page} pages={pages} changePage={setPage} />
        </>
      )}
    </div>
  )
}

export default AllUsers;