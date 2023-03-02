import { useEffect } from "react";

import formatTime from "../utils/formatTime.js";

import "../styles/Posts.css";

function Posts({ baseURL }) {

useEffect(() => { //ComponentDidMount

    function displayData(data) {
        const ul = document.getElementById('posts-list');
        let html = "";
        for (let i = 0; i < data.length; i++) {
            html += `<li><h1>${data[i].title}</h1><p>${data[i].content}</p><time>${formatTime(data[i].timestamp)}</time><button>See post</button></li>`;
        }
        ul.innerHTML = html;
    }

    (async () => {
        const res = await fetch(`${baseURL}/posts`, { mode: 'cors' });
            const data = await res.json();
            displayData(data.posts);
      })()

}, []);

    return <div className="posts">
            <main>
                <ul id="posts-list"></ul>
            </main>
            <aside>
                <img alt="author" src="./img/author.svg"/>
                <h1>About the author</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet feugiat tellus, quis viverra orci. Sed condimentum venenatis tellus, a vulputate massa. In non ligula vel nisi euismod molestie. Maecenas eu maximus justo. In tellus sem, ornare a dignissim in, placerat ac metus. Nulla pellentesque massa at ornare semper. Donec efficitur commodo nunc, ut hendrerit purus feugiat nec. Donec sed urna magna. Suspendisse ac eros et ligula interdum posuere. Curabitur felis lorem, fringilla in sagittis sed, sollicitudin non purus. Nunc feugiat luctus tempor. Aliquam sed neque at ex varius elementum a a erat. Nunc odio lorem, sagittis vitae aliquet auctor, aliquam id mauris. Duis et placerat dui, nec dignissim dui.</p>
            </aside>
        </div>
}

export default Posts;