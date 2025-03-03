
function nextSlide(url) {
    window.location.href = url;
}

function prevSlide(url) {
    window.location.href = url;
}

function showMore(type) {
    let extraImage = document.getElementById(`${type}-sample-extra`);
    if (extraImage.style.display === "none" || extraImage.classList.contains("hidden")) {
        extraImage.style.display = "block";
        extraImage.classList.remove("hidden");
    } else {
        extraImage.style.display = "none";
        extraImage.classList.add("hidden");
    }
}

// Open Modal Function
function openModal(imgElement) {
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("modalImg");

    modal.style.display = "block";
    modalImg.src = imgElement.src;
}

// Close Modal Function
function closeModal() {
    let modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
