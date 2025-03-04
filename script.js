function nextSlide(url) {
    window.location.href = url;
}
function nextSlide(url) {
    window.location.href = url;
}

function prevSlide(url) {
    window.location.href = url;
}

// Function to open the modal with the clicked image
function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = img.src;
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Function to show more samples
function showMore(type) {
    if (type === "bad") {
        const extraBadSample = document.getElementById("bad-sample-extra");
        extraBadSample.classList.toggle("hidden");
    } else if (type === "good") {
        const extraGoodSample = document.getElementById("good-sample-extra");
        extraGoodSample.classList.toggle("hidden");
    }
}