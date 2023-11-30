import { useEffect, useState } from 'react';
import instance from '../instance';
import './Row.css'
function Row({ title, fetchurl }) {
    const [allMovies, setAllMovies] = useState();
    const base_url = "https://image.tmdb.org/t/p/original/";

    //   console.log(props);
    const fetchData = async () => {
        const response = await instance.get(fetchurl);
        console.log(response);
        setAllMovies(response.data.results)
    }
    useEffect(() => {
        fetchData();
    }, []);
    console.log("======all moveie");
    console.log(allMovies);
    return (
        <div className='Row'>
            <h1 style={{ color: "white",  fontSize:"20px"}}> {title} </h1>
            <div className='movie-row'>
                    {
                        allMovies?.map(item=>(
                            <img className='movie' src={`${base_url }${item.poster_path}`} alt="no-image" />
                        ))
                    }
            </div>
        </div>
    )
}
export default Row;