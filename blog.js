const posts = [];
const TITLE_VALIDATION_LIMIT = 10;
const TEXT_VALIDATION_LIMIT = 20;


const postTitleInputNode = document.querySelector('.js-post-title-input');
const postTextInputNode = document.querySelector('.js-post-text-input');
const newPostBtnNode = document.querySelector('.js-new-post-btn');
const postsNode = document.querySelector('.js-posts');
const validationMessage = document.getElementById('validationMessage');

newPostBtnNode.addEventListener('click', function() {
    const postFromUser = getPostFromUser();
    
    addPost(postFromUser);

    renderPosts();
});

postTitleInputNode.addEventListener('input', function () {
    validation()
});

postTextInputNode.addEventListener('input', function () {
    validation()
});

// Одна функция на проверку и темы и поста

function validation() {
    const titleLen = postTitleInputNode.value.length;
    const textLen = postTextInputNode.value.length;

    if (titleLen > TITLE_VALIDATION_LIMIT) {
        validationMessage.innerText = `Длина текста не должна превышать ${TITLE_VALIDATION_LIMIT} символов`;
        validationMessage.classList.remove("validationMessage_hidden"); // сообщение скрыто remove

        return;
    }

    if (textLen > TEXT_VALIDATION_LIMIT) {
        validationMessage.innerText = `Длина текста не должна превышать ${TEXT_VALIDATION_LIMIT} символов`;
        validationMessage.classList.remove("validationMessage_hidden"); // сообщение скрыто remove

        return;
    }

    validationMessage.classList.add("validationMessage_hidden") // сообщение отображается add
}

// Одна функция на проверку и темы и поста

function getPostFromUser() {
    const title = postTitleInputNode.value;
    const text = postTextInputNode.value;

    return {
        title: title,
        text: text,
    };
}



function addPost({ title, text}) {
    posts.push({
        title: title,
        text: text
    });
}

function getPosts() {
    return posts;
}

function renderPosts() {
    const posts = getPosts();

    let postsHTML = '';

    posts.forEach(post => {
        postsHTML+= `
    <div class='post'>
        <p class='post__title'>${post.title}</p>
        <p class='post__text'>${post.text}</p>
    </div>
    `;
        
    });

    postsNode.innerHTML = postsHTML;
}
