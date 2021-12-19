import React from 'react'
import { useHistory } from 'react-router-dom'

const Dashboard = ({setUser}) => {

    const history = useHistory();

    const logOut = () => {
        setUser(false);
        history.push='/login';
    }
    return (
        <div>
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
                <input type="button" value="Log Out" onClick={logOut}/>
            </header>
            <section>
              <video>
              <iframe width="560" height="325" src="https://www.youtube.com/embed/JfVOs4VSpmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </video>
            </section>
        </div>
    )
}

export default Dashboard