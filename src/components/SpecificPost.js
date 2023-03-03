import { useEffect } from "react";

import formatTime from "../utils/formatTime.js";

import "../styles/SpecificPost.css";

function SpecificPost({baseURL, currentPost, loggedIn, token}) {

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
        displayPost(response.post);
        displayComments(response.comments);
    }).catch(function (err) {
        document.getElementById('post').innerText = "Could not fetch post."
        document.getElementById('comments').innerText = "Could not fetch comments."
    });

}, []);

    const sendForm = (event) => {
        event.preventDefault();
        const content = document.getElementById('content').value;
        fetch(`${baseURL}/posts/${currentPost}/comments/create`, { method: 'POST', mode: 'cors', headers: {'Content-Type':'application/x-www-form-urlencoded', 'authorization': `Bearer ${token}`}, body: `content=${content}` }).then(function (response){
            return response.json();
        }).then(function (response){
            console.log(response);
            const alerts = document.getElementById('alert');
            if(response.alerts) {
                alerts.innerHTML = response.alerts[0];
            } else {
                if(response.status == 200) {
                    alerts.innerHTML = "";
                    document.getElementById('success').innerHTML = "Success! Comment created! Reload the page to see your comment.";
            }
                return;
            }
        }).catch(function (err) {
            document.getElementById('error').innerText = err;
        });

    }

    return <div className="post">
            <div id="post">Loading post...</div>
            <ul id="comments">Loading comments...</ul>
            { loggedIn ? 
            <div className="newcomment">
                <h2>Create a Comment</h2>
                <p id="error"></p>
                <p id="success"></p>
                <ul id="alert"></ul>
                <form onSubmit={sendForm}>
                    <label htmlFor="content">Comment</label>
                    <input type="text" name="content" id="content" required/>
                    <button type="submit">Send Comment</button>
                </form>
            </div>
             : <p className="create"> Log in to comment on this post! </p> }
        </div>
}

export default SpecificPost;