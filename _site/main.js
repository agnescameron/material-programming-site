function toggleShowImage(params){
    var img_change = params.target;

    //make the big guys smaller
    const big_images = document.getElementById("gallery").getElementsByClassName("large-img");
    for (let image of big_images) {
        if(image !== img_change){
            image.classList.remove("large-img")
            image.classList.add("small-img")
        }
    }

    img_change.classList.toggle("small-img")
    img_change.classList.toggle("large-img")
}


document.addEventListener('DOMContentLoaded', function() {
    console.log('woo js')
    const images = document.getElementById("gallery").getElementsByTagName("img");

    for (let image of images) {
        image.addEventListener('click', toggleShowImage);
    }

}, false);