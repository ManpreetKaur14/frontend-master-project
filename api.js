// const DOG_URL = "https://dog.ceo/api/breeds/image/random";

// const doggos = document.getElementById("dog-target");

// function addNewDoggo() {
//   const promise = fetch(DOG_URL);
//   promise
//     .then(function (response) {
//       const processingPromise = response.text();
//       return processingPromise;
//     })
//     .then(function (processedResponse) {
//       const dogObject = JSON.parse(processedResponse);
//       const img = document.createElement("img");
//       img.src = dogObject.message;
//       img.alt = "Cute doggo";
//       doggos.appendChild(img);
//     });
// }

// document.getElementById("dog-btn").addEventListener("click", addNewDoggo);

const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.getElementById("dog-target");

async function addNewDoggo() {
  const promise = await fetch(DOG_URL);
  const processedResponse = await promise.json();
  const img = document.createElement("img");
  img.src = processedResponse.message;
  img.alt = "Cute Dog";
  doggos.appendChild(img);
}

document.getElementById("dog-btn").addEventListener("click", addNewDoggo);


async function getName() {
  return "Brian";
}

const name = getName().then(function (name) {
  console.log(name);
});