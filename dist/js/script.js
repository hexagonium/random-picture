const img = document.getElementById("img");
const button = document.getElementById("button");
const url = "https://aws.random.cat/meow";

async function fetchHandler() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        img.src = data.file;
    } catch (error) {
        console.error(error);
    }
}

button.addEventListener("click", () => {
    let isLoaded = img.complete;

    if (isLoaded) {
        fetchHandler();
    }
});