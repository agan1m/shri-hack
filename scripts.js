

function bubbleSort(arr) {
    let i = 0;
    let j;
    let swap;
    while(i < arr.length) {
        if(i + 1 !== arr.length && arr[i] > arr[i + 1]) {
            j = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = j;
            swap = 1
        }
        i++;
        if (i === arr.length && swap === 1) {
            swap = 0;
            i = 0;
        }
    }
    return arr;
}

 function selectSort(arr) {
     let resultArr = [];
     let min = arr[i];
     for(let i = 0; arr.length; i++) {
         if(arr[i] < min) {
            min = arr[i];

         }
     }
}

let treeObj = {
    node: 'A',
    left: {
        node: 'B',
        left: {
            node: 'C',
            left: {
                node: 'E'
            }
        },
        right: {
            node: 'D'
        }
    },
    right: {
        node: 'F'
    }
}

function preOrder(tree) {
    let result = [];

    result.push(tree.node)
    if(tree.left) {
        checkLeaf(tree.left, result);
    }
    if(tree.right) {
        checkLeaf(tree.right, result);
    }
    return result;
}

function checkLeaf(node, result) {
    result.push(node.node);
    if(node.left) {
        checkLeaf(node.left, result);
    }
    if(node.right) {
        checkLeaf(node.right, result)
    }
}

window.bubbleSort = bubbleSort;

var result = [];

function postOrder(node){
    let result = [];
    if (node == null) return;
    checkLeaf2(node.left, result);
    checkLeaf2(node.right, result);
    result.push(node.node);
    //console.log(node.node);

    return result;
} 

function checkLeaf2(node, result) {
    if(node.left) {
        checkLeaf(node.left, result);
    }
    if(node.right) {
        checkLeaf(node.right, result)
    }
    result.push(node.node);
}

console.log(postOrder(treeObj))

function bracketsFind(str) {
    const hashBrackets = {
        '}': '{',
        ']': '[',
        ')': '('
    };
    let stack = [];
    let result = true;
    for(let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case '(':
            case '{':
            case '[':
                stack.push(str[i]);
                break;
            default:
                break;
        }
        switch (str[i]) {
            case ')':
            case ']':
            case '}':
                if(stack.length === 0 || stack[stack.length - 1] !== hashBrackets[str[i]]) {
                    return result = false;
                } else {
                    stack.pop();
                }
                break;
            default:
                break;
        }
        if(!result) return;
    }
    return result;
}


console.log(bracketsFind('ava()[{]}'));