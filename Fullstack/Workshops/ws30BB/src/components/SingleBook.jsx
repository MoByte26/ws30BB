import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchBookById } from '../API';

const SingleBook = () => {
    const navigate = useNavigate();
    const { id } = useParams();
  
    const [book, setBook] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      async function getSingleBook() {
        setIsLoading(true);
        const book = await fetchBookById(id);
        if (!book) {
          setError(true);
        } else {
          setError(false);
          setBook(book);
        }
        setIsLoading(false);
      }
  
      getSingleBook();
    }, [id]);
  
    if (isLoading) {
      return <CircularProgress />;
    }
  
    if (error || !book) {
      return (
        <Alert severity="error">Failed to load Book. Try again later.</Alert>
      );
    }
  