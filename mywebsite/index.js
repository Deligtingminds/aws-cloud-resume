const counter = document.querySelector(".counter-number");
async function updateCounter() {
let response = await fetch("https://3igea5lk7bspzrsc5frk6triim0vnuii.lambda-url.us-east-1.on.aws");
let data = await response.json();
counter.innerHTML = ` Viewer Count: ${data}`;

}

updateCounter();