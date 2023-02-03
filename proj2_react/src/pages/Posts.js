import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import axios from "axios";
import './posts.css';

const Posts = () => {
    // const navigate = useNavigate();
    // const [searchParams, setSearchParams] = useSearchParams();
    const [array, setArray] = useState([]);

    // const [ resArr, setArr ] = useState([
    //     {name: 'Matthew R. Manning',
    //      authorId: 'matthewRmanning',
    //      postId: '1',
    //      heading: 'The Unlikely Encounter That Made Me Confront My Male Fragility',
    //      imgUrl: 'https://miro.medium.com/fit/c/250/168/1*Tjwu_KSqNTjvpUqWXExc7A.jpeg',
    //     },
    //     {name: 'Ethan Seigal',
    //      authorId: 'ethanSeigal7',
    //      postId: '2',
    //      heading: 'How physics and a video game trick forever changed the NASCAR Championships',
    //      imgUrl: 'https://miro.medium.com/max/828/1*NZu4c0cqsXNlioZqhwKsiA.gif',
    //     }
    // ]);
    const [ errMsg, setErrMsg ] = useState("");
    // http://localhost:3456
    // https://app-azure-deployment-blogs-dev.azurewebsites.net
    useEffect(() => {
        axios.get("https://mythical-lens-376607.el.r.appspot.com/blogs/getStories")
            .then((response) => 
            {
                console.log(response.data);
                setArray(response.data);
                // const obj = JSON.parse(response.data);
                // setAuthorName(response.data.userName);
                // setHeading(response.data.storyHeading);
                // let base64String = btoa(String.fromCharCode(...new Uint8Array(response.data.storyImage)));
                // setPicture(base64String);
                // setImagePath(response.data.storyImagePath)
                // setContent(response.data.storyContent);
                // setDate(response.data.dateOfCreation);
            })
            .catch(err => {
                console.log(err);
                if(!err?.response){
                    setErrMsg('No server Response');
                } else{
                    setErrMsg('story creation failed');
                }
            })
    }, []);

    return(
        <div>
            {array.map(res => {
                return (
                    <div className='rowP'>
                        <div className='colP leftP'>
                            <Link id='openstoryP' to={res.storyHeading}>
                                <span id='authornameP'>{res.userName}</span><br/>
                                <span id='headingP'>{res.storyHeading}</span>
                            </Link>
                        </div>
                        <div className='colP rightP'>
                            <span id="storydate">{res.dateOfCreation}</span>
                            {/* <img src={res.imgUrl} id='image'></img> */}
                        </div>
                    <br/>
                    </div>
                )
            })
            }
        </div>
    )
}
export default Posts;

// axios.get('URL')
//                     .then(function (responce){
//                         arr.push(responce.data);
//                     })
//                     .catch(function(error){
//                         console.log(error);
//                     })




// const GetStory = () => {
//     const [authorName, setAuthorName] = useState('');
//     const [headingName, setHeading] = useState('');
//     const [imagePath, setImagePath] = useState('');
//     const [content, setContent] = useState('');
//     const [date, setDate] = useState('')

//     useEffect(() => {
//         axios.get("http://localhost:3456/blogs/getStory/this is my story heading")
//             .then((response) => 
//             {
//                 console.log(response.data);
//                 // const obj = JSON.parse(response.data);
//                 setAuthorName(response.data.userName);
//                 setHeading(response.data.storyHeading);
//                 // let base64String = btoa(String.fromCharCode(...new Uint8Array(response.data.storyImage)));
//                 // setPicture(base64String);
//                 setImagePath(response.data.storyImagePath)
//                 setContent(response.data.storyContent);
//                 setDate(response.data.dateOfCreation);
//             })
//             .catch(error => {
//                 console.log(error);
//             })
//     }, []);

//     return(
//         <div>
//             <br/><br/><br/>
//             <h1>this is get story page</h1>
//             <span>{authorName}<br/> {headingName}<br/> {content}<br/> {date}</span><br/>
//             <img src={imagePath} />
//             <h1>end of page</h1>
//         </div>
//     )
// }