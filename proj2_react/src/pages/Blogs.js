import { Outlet, useSearchParams, useNavigate, Link } from 'react-router-dom';
import './blogs.css';
import React from 'react';



const Blogs = () => {
    // const [searchParams, setSearchParams] = useSearchParams();
    // const showActivePage = searchParams.get('filter')==='active';

    const navigate = useNavigate();

    return(
        <div>
            <div class="container">
                <h1 id="mt">Blog page</h1>
                
                {/* <a id='postlink' onClick={() => navigate('pmtr')}>link to go to this story</a> */}
                {/* <div>
                    <button onClick={() => setSearchParams({filter: 'active'})}>
                        all stories
                    </button>
                    <button onClick={() => setSearchParams({})}>
                        this story set it as the clicked once
                    </button>
                </div><br/><br/>
                {showActivePage ? (
                    <h2>Showing active page</h2>
                ) : (
                    <h2>showing default page</h2>
                )} */}

                <Outlet />
                
            </div>
        </div>
        );
}
export default Blogs;

