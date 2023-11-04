//declare the trelloData variable
//add object with an array of columns, each column is an object with a name and an array of cards
//each card is an object with a title, content, a timestamp
let trelloData = {
    columns: [
        {
            name: "To-Do",
            cards: [
                {
                    title: "Example Card",
                    content: "Drag this card around",
                    timestamp: null
                }
            ]
        }
    ]
}

console.log(trelloData);

function renderColumns() {
    let trelloDataRowRootNode = document.getElementById("dataDisplayRow");
    //Removing any stale or old HTML content
    trelloDataRowRootNode.innerHTML = "";
}

renderColumns();