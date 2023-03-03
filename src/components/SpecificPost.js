import { useEffect } from "react";

import formatTime from "../utils/formatTime.js";

import "../styles/SpecificPost.css";

function SpecificPost({baseURL, currentPost, loggedIn}) {

useEffect(() => { //ComponentDidMount

    function displayPost(post) {
        const div = document.getElementById('post');
        div.innerHTML = `<h1>${post.title}</h1><p>${post.content}</p><time>${formatTime(post.timestamp)}</time>`;
    }

    function displayComments(comments) {
        const ul = document.getElementById('comments');
        let html = "";

        if(!comments.length) {
            html += "No comments yet."
        } else {
            for (let i = 0; i < comments.length; i++) {
                html += `<li><span class="user">${comments[i].user.username}</span><p>${comments[i].content}</p><time>${formatTime(comments[i].timestamp)}</time></li>`;
            }
        }
        ul.innerHTML = html;
    }

    fetch(`${baseURL}/posts/${currentPost}`, { mode: 'cors' }).then(function (response){
        return response.json();
    }).then(function (response){
        console.log(response);
        displayPost(response.post);
        displayComments(response.comments);
    }).catch(function (err) {
        document.getElementById('post').innerText = "Could not fetch post."
        document.getElementById('comments').innerText = "Could not fetch comments."
    });

}, []);

    return <div className="post">
            <div id="post">Loading post...</div>
            <ul id="comments">Loading comments...</ul>
            { loggedIn ? <>Here goes the form </> : <p className="create"> Log in to comment on this post! </p> }
        </div>
}

export default SpecificPost;