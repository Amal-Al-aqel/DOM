class TreeNode {
    constructor(value) {
      this.value = value;
      this.descendants = [];
      this.hasChildren = false;
      this.level = 0;
    }
  }

let canvas = document.querySelector('#canvas');
let context = canvas.getContext("2d");

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
let currentParent = null;

const  traverseTree = (element) => {
    if (element.value.children.length > 0) {
        let parentNode = element;
        if(element.value.children.length > 0) parentNode.hasChildren = true;

        for (let i = 0; i < element.value.children.length; i++) {            
            let childElement = element.value.children[i];
            let childNode = new TreeNode(childElement);             
            parentNode.descendants.push(childNode);
            level =  depth(rootElement, childElement)+1;
            childNode.level = level;
            //drawNode ((i+1)*70, 100*level, childElement.tagName);            
            console.log(childElement.tagName);
}

for (let i = 0; i < element.value.children.length; i++) {
    let childElement = element.value.children[i];
    if (childElement.firstChild) {
        console.log("Recursion!!!");
        traverseTree (parentNode.descendants[i]);        
    }            
}
}
}

let recursionCounter = 1;

const printTree = (node) => {
    if (node.descendants.length > 0) {  
        console.log("hhhhhhhhhhhhhhhhhhhh");      
        for (let i = 0; i < node.descendants.length; i++) {            
            //console.log("dddddddddd "+node.descendants[i].level);
            //console.log(node.descendants[i].value.tagName);
            drawNode ((i+1)*70, 100*node.descendants[i].level, node.descendants[i].value.tagName);            
}

for (let i = 0; i < node.descendants.length; i++) {
    let childElement = node.descendants[i];
    if (childElement.hasChildren) {
        console.log("popopopoppooooo");
        printTree(childElement);        
    }            
}
}
    //drawNode ((i+1)*70, 100*node.level, node.value.tagName);            
}


let rootElement = document.querySelector("body");
drawNode (70, 100, rootElement.tagName);
const rootNode = new TreeNode(rootElement);
rootNode.level = 1;

traverseTree(rootNode);

//drawNode (70, 100, rootNode.value.tagName); 
printTree(rootNode);

