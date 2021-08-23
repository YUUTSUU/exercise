window.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  let textNodes = [];
  
  function recursy(element) {
    element.childNodes.forEach(node => {
      if(node.nodeName.match(/^H\d/)) {
        const obj = {
          header: node.nodeName,
          content: node.textContent.trim()
        }
        textNodes.push(obj)
      } else {
        recursy(node);
      }
    });
  }

  document.querySelector(".parser").addEventListener("click", () => {
    recursy(body);

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(textNodes)
    })
      .then(response => response.json())
      .then(result => console.log(result))
  });  
});