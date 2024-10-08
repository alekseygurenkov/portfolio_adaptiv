let post = {
    title: '',
    text: '',
};

const postTitleInputNode = document.querySelector('.js-post-title-input');
const postTextInputNode = document.querySelector('.js-post-text-input');
const newPostBtnNode = document.querySelector('.js-new-posr-btn');
const postsNode = document.querySelector('.js-posts');

newPostBtnNode.addEventListener('click', function() {
    const postFromUser = getPostFromUser();
    
    setPost(postFromUser);

    renderPost();
});

function getPostFromUser() {
    const title = postTitleInputNode.value;
    const text = postTextInputNode.value;

    return {
        title: title,
        text: text,
    };
}

function setPost(newPost) {
    post = newPost;
}

function getPost() {
    return post;
}

function renderPost() {
    const postHTML = `
    <div class='post'>
        <p class='post__title'>${post.title}</p>
        <p class='post__text'>${post.text}</p>
    </div>
    `;

    postsNode.innerHTML = postHTML;
}
