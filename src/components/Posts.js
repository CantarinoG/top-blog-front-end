import { useEffect } from "react";

import formatTime from "../utils/formatTime.js";

import "../styles/Posts.css";

function Posts({ baseURL, setCurrentPost, setPath }) {

useEffect(() => { //ComponentDidMount

    function displayData(data) {
        const ul = document.getElementById('posts-list');
        let html = "";
        for (let i = 0; i < data.length; i++) {
            html += `<li><h1>${data[i].title}</h1><p>${data[i].content}</p><time>${formatTime(data[i].timestamp)}</time><button class="see-post" id="${data[i]._id}">See post</button></li>`;
        }
        ul.innerHTML = html;
    }

    function addListeners() {
        const btns = document.getElementsByClassName('see-post');
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', () => {
                setCurrentPost(btns[i].id);
                setPath('/posts/id');
            });
        }
    }

    fetch(`${baseURL}/posts`, { mode: 'cors' }).then(function (response){
        return response.json();
    }).then(function (response){
        displayData(response.posts);
        addListeners();
    }).catch(function (err) {
        document.getElementById('posts-list').innerHTML = "Could not fetch posts."
    });
}, []);

    return <div className="posts">
            <main>
                <ul id="posts-list">Loading posts...</ul>
            </main>
            <aside>
                <img alt="author" src="./img/author.svg"/>
                <h1>About the author</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet feugiat tellus, quis viverra orci. Sed condimentum venenatis tellus, a vulputate massa. In non ligula vel nisi euismod molestie. Maecenas eu maximus justo. In tellus sem, ornare a dignissim in, placerat ac metus. Nulla pellentesque massa at ornare semper. Donec efficitur commodo nunc, ut hendrerit purus feugiat nec. Donec sed urna magna. Suspendisse ac eros et ligula interdum posuere. Curabitur felis lorem, fringilla in sagittis sed, sollicitudin non purus. Nunc feugiat luctus tempor. Aliquam sed neque at ex varius elementum a a erat. Nunc odio lorem, sagittis vitae aliquet auctor, aliquam id mauris. Duis et placerat dui, nec dignissim dui.</p>
            </aside>
        </div>
}

export default Posts;