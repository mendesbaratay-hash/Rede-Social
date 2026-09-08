document.addEventListener("DOMContentLoaded", () => {


// Seleciona os elementos
const likeBtn = document.querySelector(".like-btn");
const likesCountSpan = document.querySelector(".likes-count");
const postMedia = document.querySelector(".post-media");
const bookmarkBtn = document.querySelector(".bookmark-btn");

// Se o botão não existir, encerra o código
if (!likeBtn) return;

// Quantidade inicial de curtidas
let baseLikes = 1200;

// Verifica se o usuário já curtiu
let isLiked = false;

// Verifica se o post foi salvo
let isBookmarked = false;


// ============================
// FORMATAR CURTIDAS
// ============================

function formatLikes(num) {

    if (num >= 1000) {
        return (num / 1000).toFixed(1) + "K";
    }

    return num.toString();
}


// ============================
// ATUALIZAR CONTADOR
// ============================

function updateLikes() {

    if (likesCountSpan) {
        likesCountSpan.textContent = formatLikes(baseLikes);
    }

}


// ============================
// ANIMAÇÃO DO CORAÇÃO
// ============================

function animateHeart() {

    const svg = likeBtn.querySelector("svg");

    if (svg) {

        svg.style.transform = "scale(1.4)";

        setTimeout(() => {
            svg.style.transform = "scale(1)";
        }, 150);

    }

}


// ============================
// CURTIR
// ============================

function addLike() {

    // Impede adicionar várias curtidas
    if (isLiked) return;

    baseLikes++;
    isLiked = true;

    likeBtn.classList.add("liked");

    updateLikes();
    animateHeart();

}


// ============================
// DESCURTIR
// ============================

function removeLike() {

    if (!isLiked) return;

    baseLikes--;
    isLiked = false;

    likeBtn.classList.remove("liked");

    updateLikes();

}


// ============================
// CLIQUE NO CORAÇÃO
// ============================

likeBtn.addEventListener("click", (event) => {

    event.stopPropagation();

    if (isLiked) {
        removeLike();
    } else {
        addLike();
    }

});


// ============================
// DUPLO CLIQUE NA FOTO
// ============================

if (postMedia) {

    postMedia.addEventListener("dblclick", () => {

        addLike();

    });

}


// ============================
// BOTÃO SALVAR
// ============================

if (bookmarkBtn) {

    bookmarkBtn.addEventListener("click", (event) => {

        event.stopPropagation();

        isBookmarked = !isBookmarked;

        bookmarkBtn.classList.toggle(
            "bookmarked",
            isBookmarked
        );

    });

}


// ============================
// VALOR INICIAL
// ============================

updateLikes();

});
