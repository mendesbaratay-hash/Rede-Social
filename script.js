document.addEventListener("DOMContentLoaded", () => {
    const likeBtn = document.querySelector(".like-btn");
    const postMedia = documet.querySelector (".post-media");
if (!likeBtn) return;

 const likesCountSpan = likeBtn.querySelector(".likes-count");
 const bookmarkBtn = document.querySelector(".bookmark-btn");
 
let isLiked = false;
let baseLikes = 0;

if (likesCountSpan)
    likesCountSpan.textContent = "0";
}

//números grandes 

function formatLikes(num) {
    if(num >=1000){
        return (num/1000).toFixed(1)+"K";
    }
    return num.toString();
}

function addLike(){
    baseLikes++;
    isLiked = true
    likeBtn.classList.add("liked");

    if(likesCountSpan){
        likesCountSpan.textContent = fortLikes(baseLikes);
    }
}




