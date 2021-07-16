function dogFunction() {
    const dog = document.getElementById("dog-img");
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => dog.src = data.message);
  }