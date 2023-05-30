const rootElement = document.getElementById("root");
const loader = document.getElementById("loading");
let currentToyIndex = 0;
let toyCount = passedArray.length;


function BuilCard(t_name, descr, cst, id) {
    let toy_name = t_name;
    let cost = cst;
    let description = descr;
    let identificator = id
    let report_html = `

    <div class="card">
          <img src="toy1.png" alt="Игрушка 1">
          <div class="card-details">
            <h3>${toy_name}</h3>
            <p>${description}</p>
            <span>${cost}p</span>
            <button class = "add-to-cart-btn" data-product-id="${identificator}">В корзину</button>
          </div>
        </div>

`;
    return report_html;
}
function GetToys() {
    
    if (currentToyIndex !== toyCount) {
        setTimeout(() => {
            let counter = 0;
            for (let i = currentToyIndex; (i < currentToyIndex + 7) && i < toyCount; ++i) {

                toy_name = passedArray[i]["toy_name"];
                description = passedArray[i]["description"];
                cost = passedArray[i]["cost"];
                identificator = passedArray[i]["id"];
                const toy_card = document.createElement("div");
                toy_card.innerHTML = BuilCard(toy_name, description, cost,identificator);
                rootElement.append(toy_card);
                counter = i - currentToyIndex;
            }
            currentToyIndex += counter+1;
            
            console.log(currentToyIndex);
            console.log(toyCount);
        }, 500)
    }
}


document.addEventListener("DOMContentLoaded", () => {
    let options = {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: 0
    };

    function handleIntersect(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                
                if (currentToyIndex !== toyCount) {

                    GetToys();
                    
                }
            }
        });
    }

    let observer = new IntersectionObserver(handleIntersect,
        options);
    observer.observe(loader);
})

