import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const Dashboard = ({setUser}) => {

    const history = useHistory();

    const[error, setError]= useState(null);

    const logOut = () => {
        setUser(null);
        setError(null);
        history.push('/login');
    }
    return (
        <div>
            <section class="dash-sec1">
            <div class="spider">
              <h1>Spider-Man:No Way From Home</h1>
              <p>Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man co-produced 
                by Columbia Pictures and Marvel Studios and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: 
                Homecoming (2017) and Spider-Man: Far From Home (2019), and is the 27th film in the Marvel Cinematic Universe.</p>
                <div class="button1"><i class="fa fa-play" aria-hidden="true"></i> Watch Now</div>
                </div>
                <iframe src="https://www.youtube.com/embed/JfVOs4VSpmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            </section>
            <header className="dashHeader">
              <div>
                <img className="dashImg" src="https://icdn.digitaltrends.com/image/digitaltrends/prime-video-logo-streaming-topic-416x416.jpg" alt="primeVideo"/>
                </div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#shows">Tv Shows</a></li>
                    <li><a href="#movies">Movies</a></li>
                    <li><a href="#channels">Channels</a></li>
                    <div className="dropdown">
                        <li><a href="#categories">Categories <i className="fa fa-angle-down" aria-hidden="true"></i></a></li>
                        <div className="dropdown-content">
                            <div className="col1">
                            <h3>Top Categories</h3>
                            <div className="dropdown-style">
                            <button>Included with primes</button>
                            <button>Amazon Originals</button>
                            <button>Movies</button>
                            <button>Tv Shows</button>
                            <button>Kids</button>
                            </div>
                            <div className="col2">
                                <h3>Audio Language</h3>
                                <li>English</li>
                                <li>Hindi</li>
                                <li>Telugu</li>
                                <li>Tamil</li>
                                <li>Cannada</li>
                                <li>Malayalam</li>
                            </div>
                            </div>
                        </div>
                    </div>
                </ul>
                <input className="searchBtn" type="search" placeholder="search"/>
                {error && <p className='error'>{error}</p>}
                <input type="button" value="Log Out" onClick={logOut}/>
            </header>
            <section class="dash-sec2">
                <div>
                    <h2>Amazon Original Series</h2>
                    <h4>See More</h4>
                </div>
                <div class="video-link">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/P3Ld5wHfVW4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/T1y3aIfZXJ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/OstwwYcz8nI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Tjq3UmeAEy8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/D7NCW8gMtVs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/tcrNsIaQkb4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ZNeGF-PvRHY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/XatRGut65VI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </section>
        </div>
    )
}

export default Dashboard
