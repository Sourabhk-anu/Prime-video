import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = ({setUser}) => {

    const history = useHistory();

    const handleSignin = () => {
        setUser(false);
        history.push('/login');
    }

    const handleJoin = () => {
        setUser(false);
        history.push('/login');
    }

    const getStarted = () => {
        setUser(false);
        history.push('/login');
    }

    const getOpen = () => {
        setUser(false);
        history.push('/login');
    }

    return (
        <div>
            <header className='home'>
                <img src='https://panicdots.com/wp-content/uploads/2019/01/amazon-prime-canada.png' alt='prime video'/>
                <input type='button' value='Sign In' onClick={handleSignin}/>
            </header>
            <div>
                <section className='section1'>
                    <img src="https://cdn.arstechnica.net/wp-content/uploads/2020/07/Amazon-Prime-Video-iPad-Pro-760x380.png" alt='videopic'/>
                    <div>
                    <h1>Welcome To Prime Video</h1>
                    <p>Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals</p>
                    <input type='button' value='Sign in to join Prime' onClick={handleJoin}/>
                    </div>
                </section>
                <section className='section2'>
                    <div className='div1'>
                    <h1>Your favorite channels all in one place</h1>
                    <p>With Prime Video Channels, find shows and movies from your favorite channels all in one place. 
                        Enjoy with an add-on subscription to Channels of your choice</p>
                    </div>
                    <div className="div2">
                        <button>LIONSGATE PLAY</button>
                        <button>discovery+</button>
                        <button>erosnow</button>
                    </div>
                    <div className="div3">
                        <button>ho!cho!</button>
                        <button>docubay</button>
                        <button>SHORTSTV</button>
                    </div>
                    <div className="div4">
                        <button>MUBI</button>
                        <button>MANORAMA</button>
                    </div>
                </section>
                <section className='section3'>
                    <img src="http://www.englishscool.it/wp-content/uploads/2016/07/serie-tv-848x500.jpg" alt='videopic'/>
                    <div>
                    <h1>Welcome To Prime Video</h1>
                    <p>Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals</p>
                    <input type='button' value='Get Started' onClick={getStarted}/>
                    </div>
                </section>
                <section className='section4'>
                <img src="https://www.aftvnews.com/wp-content/uploads/2018/11/Fire-TV-Stick-4K-OTG-cable.jpg" alt='videopic'/>
                    <div>
                    <h1>Welcome To Prime Video</h1>
                    <p>Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals</p>
                    <input type='button' value='Get Started' onClick={getOpen}/>
                    </div>
                </section>
                <footer className='footer'>
                <img src='https://panicdots.com/wp-content/uploads/2019/01/amazon-prime-canada.png' alt='prime video'/>
                <ul>
                    <li><a href='#terms'>Terms and Privacy</a></li>
                    <li><a href='#notice'>Notice</a></li>
                    <li><a href='#feedback'>Send Us Feedback</a></li>
                    <li><a href='#help'>Help</a></li>
                </ul>
                <p></p>
                </footer>
            </div>
        </div>
    )
}

export default Home
