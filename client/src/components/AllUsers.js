import React from 'react';
import { useState, useEffect } from "react";
 import { useNavigate, useParams } from 'react-router-dom';


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
    <div>
      
    </div>
  )
}

export default AllUsers;
