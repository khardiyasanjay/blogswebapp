import { useRef, useEffect, useState } from "react";
import axios from "axios";
import './addStory.css';
import { Link } from "react-router-dom";
import { format } from 'date-fns'


const AddStory = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [authorName, setAuthorName] = useState('');
    const [headingName, setHeading] = useState('');
    // const [image, setImage] = useState([]);
    const [imagePath, setImagePath] = useState('');
    const [content, setContent] = useState('');
    const today1 = new Date();
    const formattedDate = format(today1, 'yyyy-MM-dd'); 

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // const onChangePicture = e => {
    //     setPicture([...picture, e.target.files[0]]);
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        var formJSON = {
            userName: authorName,
            storyHeading: headingName,
            storyImagePath: imagePath,
            storyContent: content,
            dateOfCreation: formattedDate //or use today1 as well  
        }
        // http://localhost:3456
        // https://app-azure-deployment-blogs-dev.azurewebsites.net
        try{    
            const response = await axios.post("https://mythical-lens-376607.el.r.appspot.com/blogs/addStory", formJSON);
            // clear input fields set them to empty string
            setAuthorName('');
            setHeading('');
            setImagePath('');
            setContent('');
            setSuccess(true);
        }catch(err){
            if(!err?.response){
                setErrMsg('No server Response');
            } else{
                setErrMsg('story creation failed');
            }
            // console.log(errMsg);
            errRef.current.focus();
        }
    }

    return(
        <>
        { success ? (
                <section><br/><br/><br/>
                    <h1>success!</h1>
                    <p>
                        <Link to='/blogs'>Go to Blogs Page</Link>
                    </p>
                </section>
        ) : (
        <div className="outerdiv" ><br/><br/><br/>
            <h1 id="storypageheading">Add your story to showcase your skills ({format(new Date(),'dd-MM-yyyy')})</h1>
            <form className="storyform">
                <label htmlFor="username">
                    AuthorName:
                </label>
                <input 
                    type="text"
                    id="username"
                    ref={userRef}
                    autocomplete="off"
                    onChange={(e) => setAuthorName(e.target.value)}
                    autoFocus
                    required
                />
                <br/>

                <label htmlFor="storyheading">StoryHeading:</label>
                <input 
                    type="text" 
                    id="storyheading" 
                    onChange={(e) => setHeading(e.target.value)}
                    autocomplete="off" 
                    required/>
                <br/>

                <label htmlFor="storyimage">
                    StoryImage(Optional):
                </label>
                <input 
                    type="File" 
                    id="storyimage"
                    // onChange={(e) => setImagePath(e.target.value)}
                    
                    />
                <br/>

                <label htmlFor="storycontaint">
                    StoryContaint:
                </label>
                <textarea 
                    type="text" 
                    id="storycontaint"
                    onChange={(e) => setContent(e.target.value)}
                    required
                    rows="20" 
                    cols="90"
                    />
                <br/>

                <button type="button" onClick={handleSubmit}>AddStory</button>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            
            </form>
        </div>
        )}
        </>
    )
}

export default AddStory;

// var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth()+1; 
// var yyyy = today.getFullYear();
// if(dd<10) {
//     dd='0'+dd;
// } 
// if(mm<10) {
//     mm='0'+mm;
// } 
// today = yyyy+'-'+mm+'-'+dd;


// const res = await axios.post("http://localhost:3456/blogs/addStory", formJSON)
//             .then(res => {
//                 console.log(response.data);
//                 // clear input fields set them to empty string
//                 setAuthorName('');
//                 setHeading('');
//                 setImagePath('');
//                 setContent('');
//                 setSuccess=true;
//             })
//             .catch(err => {
//                 if(!err?.response){
//                     setErrMsg('No server Response');
//                 } else{
//                     setErrMsg('story creation failed');
//                 }
//                 console.log(errMsg);
//             })