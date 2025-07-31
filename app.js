function teste(id) {
    const element = document.getElementById(id)

    alert(element.lastElementChild.innerHTML)
}

const isMobile = window.matchMedia("(max-width: 768px)").matches

if (!isMobile) {
    window.location.href = "notMobile.html"
}