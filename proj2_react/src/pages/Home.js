import './home.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';



const Home = () => {

    const [ resArr, setArr ] = useState([
    {name: 'Shrey Shivam',
     heading: 'VALUE OF SCIENCE IN EVERYDAY LIFE',
     imgUrl: 'https://miro.medium.com/fit/c/250/168/1*Tjwu_KSqNTjvpUqWXExc7A.jpeg',
    },
    {name: 'Monu Singh Yadav',
     heading: 'How physics and a video game trick forever changed the NASCAR Championships',
     imgUrl: 'https://miro.medium.com/max/828/1*NZu4c0cqsXNlioZqhwKsiA.gif',
    }
    ]);

    return(
        <div>
            <div className="topheader">
                    <span id="bighead">Stay Curious</span>
                    <p id="medhead">Discover stories, thinking and expertise<br/>from writers on any topic</p>
                    <Link id='getstarted'>get started</Link><br/><br/>
            </div>

            <div className="rowH">
                <div className="columnH leftH">
                    <h2 id='lheading'>DISCOVER MORE OF WHAT MATTERS TO YOU</h2>
                    <div className='vermenu'>
                    <Link id='vermenulinks'>programming</Link>
                    <Link id='vermenulinks'>Data Science</Link>
                    <Link id='vermenulinks'>Technology</Link>
                    <Link id='vermenulinks'>Self Improvement</Link>
                    <Link id='vermenulinks'>Writing</Link>
                    <Link id='vermenulinks'>Relationships</Link>
                    <Link id='vermenulinks'>Machine Learning</Link>
                    <Link id='vermenulinks'>Productivity Learning</Link>
                    <Link id='vermenulinks'>Politics</Link>
                    </div>
                          
                </div>

                <div className="columnH rightH">
                    <h2 id='rheading'>Pick from trending blogs</h2>
                    <div className='trendingStories'>
                        {resArr.map(res => {
                            return (
                                <div className='TrenRowH'>
                                    <div className='TrenColH TrenLeftH'>
                                        <Link id='openStoryH' to={'blogs/'+res.heading}>
                                        <span id='authorNameH'>{res.name}</span><br/>
                                        <span id='headingH'>{res.heading}</span>
                                        </Link>
                                    </div>
                                    <div className='TrenColH TrenRightH'>
                                        <img src={res.imgUrl} id='image'></img>
                                    </div>
                                    <br/>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;