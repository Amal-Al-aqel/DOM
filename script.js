
let canvas = document.querySelector('#canvas');

let context = canvas.getContext("2d");

// let imgObj = new Image();
// imgObj.onload = function()
// {
//     context.drawImage(imgObj, canvas.width/20, 10, 100, 100);
// };

// let image = document.createElement("img");
// image.src = "https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png";
// context.drawImage(image, canvas.width/20, 10, 100, 100);

// context.beginPath();

// context.arc(300, 300, 100, 0, Math.PI*5);
// context.stroke();
// context.fillStyle = "#338800"
// context.fill();
// context.linewidth = 20;

// var pos = Math.floor(Math.random() * 600); 

// function makeCircles(){
//     for(i=0; i< 100; i++){
//         let x = Math.floor(Math.random()*canvas.clientWidth)
//         let y = Math.floor(Math.random()*canvas.clientHeight)
//         context.moveTo(x + 20, y);
//         context.arc(x, y, 20, Math.PI / 180 * 0, Math.PI / 180 * 360);
//     }
    // context.stroke();
// }


function depth(parent, descendant) {
    var depth = 0;
    while (!descendant.isEqualNode(parent)) {
      depth++;
      descendant = descendant.parentElement;
    }
    return depth;
}



const drawNode = (x, y, tagName) => {
    context.beginPath();
    context.arc(x , y , 30, 0, Math.PI * 2);
    context.stroke();
    context.font = "15px";
    context.fillText(tagName, x-15, y);
  };


let level = 0;

const  traverseTree = (element) => {
    if (element.firstChild) {
        for (let i = 0; i < element.children.length; i++) {
            let childElement = element.children[i];
            level =  depth(root, childElement)+1;
            drawNode ((i+1)*70, 100*level, childElement.tagName);            
}

for (let i = 0; i < element.children.length; i++) {
    let childElement = element.children[i];
    if (childElement.firstChild) {
        console.log("traverse tree");
        traverseTree (childElement);        
    }            
}
}
}


let root = document.querySelector("body");
drawNode (70, 100, root.tagName);
traverseTree(root);


//elem.childNodes[0] === elem.firstChild

console.log("root.firstChild  "+root.firstElementChild.nodeName);
let myChild =  root.children[3];
myGrandChild = myChild.children[0];
console.log(myChild.tagName);
console.log(myChild.children[0]);

//myChild = myChild.children[3];
let myDepth = depth(root, myGrandChild);
let windowWidth =  window.innerWidth;

console.log("depth    "+myDepth);



function element_list(el,depth) {
    if (el.nodeType === 3) return;
    console.log(el.tagName+' '+depth);
    for(var i=0; i<el.children.length; i++) {
        element_list(el.children[i],depth+1);
    }
}

element_list(document,0);


let bfsOnHTMLNodes = (node = document.body) => {

    let queue = [];
    queue.push(node);
    console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHH");

    while (queue.length !== 0) {
        console.log("queue.length  "+queue.length);

        let currentNode = queue.shift();

        //check for the condiditon or just console.log
        console.log(currentNode);

        if (currentNode && currentNode.childNodes && currentNode.childNodes.length > 0) {

            for (let i = 0; i < currentNode.childNodes.length; i++) {
                queue.push(currentNode.childNodes[i]);
            }
        }
    }

}


bfsOnHTMLNodes();


//   const traverseTree = (element) => {
//     for (let i = 0; i < element.children.length; i++) {
//         let childElement = element.children[i];
//         if (childElement.firstChild) 
//         {
//             traverseTree(childElement);
//         } else 
//         {
//             drawNode ((i+1)*70, 100*level, childElement.tagName);
//         }
//   };



// drawNode (50, 100, bodyElement.tagName);  
// //let level = 1;     
// if (bodyElement.firstChild) {
//     // do something interesting
//     level+=1;
//     for (let i = 0; i < bodyElement.children.length; i++) {
//         let childElement = bodyElement.children[i];
//         if (childElement.firstChild) {
//             traverseTree(childElement);
//         }
    
//         //document.writeln(childElement.tagName);
//         drawNode ((i+1)*70, 100*level, childElement.tagName);
//     }
    
// }


// let children = root.childNodes;
// getChildren(children);


// function getChildren(childern) {
//     childern.forEach(child => {
//         if(child.nodeName!="#text"&&child.nodeName!="#comment"){
//             console.log(child.nodeName)
//         }
//         if(child.childNodes.length>0){
//             let descendants =child.childNodes;
//             drawNode = (x, y, tagName) 
//             getChildren(descendants)
//         }  
//     });
// }


// for (var i = 0; i < 200; i++) {
//     context.beginPath();

//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;

//     context.arc(x, y, 50, 0, Math.PI*2);
//     context.stroke();
//     //pos = Math.floor(Math.random() * 600); 
//   }


// console.log(context);

// context.fillStyle="purple";
// context.fillRect(20,20,50,50);

// context.fillStyle="green";
// context.fillRect(100,20,50,50);

// context.beginPath();
// context.moveTo(300, 0);
// context.lineTo(300,300);
// context.lineTo(400, 400);
// context.stroke();


// context.beginPath();
// context.moveTo(200, 150);
// context.lineTo(200, 250);
// context.lineTo(290, 200);
// context.lineTo(150, 200);
// context.lineTo(250, 250);
// context.lineTo(200, 150);
// context.stroke();


// context.font = "30px Arial";
// context.fillText("Amal Fahad Al-Aqel", 300, 300);


