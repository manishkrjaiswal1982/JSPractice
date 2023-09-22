let draggedItemId="", droppedItemId="";
let draggedItemId_P="", droppedItemId_P="";
let dragstart_handler = (e) => {
    console.log("drag start");
    draggedItemId = e.target.id;
    console.log(draggedItemId);
}

let dragend_handler = (e) => {
    console.log("drag end");
}

let drop_handler = (e) => {
    droppedItemId = e.target.id;    
    interChangeItems(draggedItemId, droppedItemId);
}

let dragover_handler = (e) => {
    e.preventDefault();
}
let temp, positionDragItem, positionDropItem;
let interChangeItems = function (a, b) {
console.log(document.querySelector(".NumGame"));
let noOfList = document.querySelector(".NumGame").getElementsByTagName("li").length
pushInArray();
for(let i=0; i<noOfList; i++){
    if (arr1[i].id === a){
        console.log(true);
        temp = arr1[i];
        positionDragItem = i;
    }
    else{
        console.log(false);
        if (arr1[i].id === b) {
            positionDropItem = i;
        }        
    }  
}

arr1[positionDragItem] = arr1[positionDropItem];
arr1[positionDropItem] = temp;
document.querySelector(".NumGame").insertBefore(document.querySelector(".NumGame").getElementsByTagName("li")[positionDropItem], document.querySelector(".NumGame").getElementsByTagName("li")[positionDragItem])
document.querySelector(".NumGame").insertBefore(document.querySelector(".NumGame").getElementsByTagName("li")[positionDropItem], document.querySelector(".NumGame").getElementsByTagName("li")[positionDragItem].nextSibling)
}

let arr1 = [];
let pushInArray = () => {
    arr1 = [];
    let noOfList = document.querySelector(".NumGame").getElementsByTagName("li").length
    for(let i=0; i<noOfList; i++){
    arr1.push(document.querySelector(".NumGame").getElementsByTagName("li")[i]);
    console.log(arr1);
    }
}