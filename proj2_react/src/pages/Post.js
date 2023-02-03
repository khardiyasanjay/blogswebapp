import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './post.css';

const Post = () => {
    let { pmtr } = useParams();
    //or
    // const params = useParams();
    // const pmtr = params.pmtr;

    // useEffect(() => {
    // // Fetch post using the parameter in server
    // }, [postSlug]); 

    const [authorName, setAuthorName] = useState('');
    const [headingName, setHeading] = useState('');
    const [imagePath, setImagePath] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('')
    // http://localhost:3456
    // https://app-azure-deployment-blogs-dev.azurewebsites.net
    useEffect(() => {
        axios.get("https://mythical-lens-376607.el.r.appspot.com/blogs/getStory/"+pmtr)
            .then((response) => 
            {
                console.log(response.data);
                // const obj = JSON.parse(response.data);
                setAuthorName(response.data.userName);
                setHeading(response.data.storyHeading);
                // let base64String = btoa(String.fromCharCode(...new Uint8Array(response.data.storyImage)));
                // setPicture(base64String);
                setImagePath(response.data.storyImagePath)
                setContent(response.data.storyContent);
                setDate(response.data.dateOfCreation);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    
    return(
        <div className="cont-post"><br/><br/><br/>
            <div className="storyContainer">
                <h3 id="authorName">{authorName}</h3>
                <h1 id="storyHeading">{headingName}</h1>
                {/* <img src={res.imgUrl} id="storyImg" alt="image"></img><br/> */}
                <p id="storyContent">{content}</p>
            </div>
        </div>
    );
}
export default Post;


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