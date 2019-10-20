

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

function findSimple(n) {
    if(n < 2) return [];
    let result = [2];
    for(let i = 3; i <= n; i++) {
        for(let j = i - 1; j >= 2; j--) {
            if(i % j === 0) {
                break;
            }
            if(j === 2) {
                result.push(i);
            } 
        }
    }
    return result;
}

function binarySearch(arr, num) {
    let i = 0, size = arr.length, half; 
                                 
    while (i < size) {
        half = Math.floor((i + size) / 2);
        if(num <= arr[half]) size = half;
        else i = half + 1;
    }
   
    if(arr[i] === num) return i;
    else return -1;
}


console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));