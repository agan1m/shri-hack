

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

treeObj = 
{
    "node": "A",
    "left": {
        "node": "B",
        "left": {
            "node": "C",
            "left": {
                "node": "F",
                "left": {
     "node": "F1",
                    "left": {
                        "node": "F11"
                    },
                    "right": {
                        "node": "F12"
                    }
                },
                "right": {
     "node": "F2",
                    "left": {
                        "node": "F21"
                    },
                    "right": {
                        "node": "F22"
                    }
    }
            }
        },
        "right": {
            "node": "E",
   "left": {
    "node": "E1",
                "left": {
                    "node": "E11"
                },
                "right": {
                    "node": "E12"
                }
            },
   "right": {
    "node": "E2",
                "left": {
                    "node": "E21"
                },
                "right": {
                    "node": "E22"
                }
            }
        }
    },
    "right": {
        "node": "D",
  "left": {
   "node": "G",
   "left": {
    "node": "G1",
                "left": {
                    "node": "G11"
                },
                "right": {
                    "node": "G12"
                }
            },
   "right": {
    "node": "G2",
                "left": {
                    "node": "G21"
                },
                "right": {
                    "node": "G22"
                }
            }
        },
  "right": {
   "node": "H",
   "left": {
    "node": "H1",
                "left": {
                    "node": "H11"
                },
                "right": {
                    "node": "H12"
                }
            },
   "right": {
    "node": "H2",
                "left": {
                    "node": "H21"
                },
                "right": {
                    "node": "H22"
                }
            }
        }
    }
}

// console.log(postOrder(treeObj))

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

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));

function findCombination(num) {
    let str = ''
    let result = [];
    for(let i = 1; i <= num; i++) {
        str += i;
    }
   result = combinations(str.split(''));
   return result; 
}

function create(arr, elem) {
    let i, iM;
    let res = [];
  
    for(i = arr.length; i >= 0; i--) {
      res.push(
        ([]).concat(
          arr.slice(0, i),
          [elem],
          arr.slice(i, iM)
        )
      );
    }
  
    return res;
  }
  
  function combinations(arr) {
    let prev, curr, elem, i;
  
    curr = [[arr[0]]];
  
    for(i = 1; i < arr.length; i++) {
      elem = arr[i];
      prev = curr;
      curr = [];
  
      prev.forEach((item) => {
        curr = curr.concat(
            create(item, elem)
        );
      });
    }
  
    return curr;
}

//console.log(findCombination(5))

function snake(num = 4) {
	let res = [];
	const maxCount = num * num;
	let count = 1;
	let x = num;
	let y = num;

	for (let i = 0; i < num; i++) {
		res.push([]);
	}
	for (let j = 0; j < x; j++) {
		res[0][j] = count;
		count++;
	}
	for (let j = 1; j < y; j++) {
		res[j][x - 1] = count;
		count++;
	}
	for (let j = x - 2; j >= 0; j--) {
		res[y - 1][j] = count;
		count++;
	}
	for (let j = y - 2; j > 0; j--) {
		res[j][0] = count;
		count++;
	}

	let startX = 1;
	let startY = 1;

	while (count < maxCount) {
		while (!res[startY][startX + 1]) {
			res[startY][startX] = count;
			count++;
			startX++;
		}
		while (!res[startY + 1][startX]) {
			res[startY][startX] = count;
			count++;
			startY++;
		}
		while (!res[startY][startX - 1]) {
			res[startY][startX] = count;
			count++;
			startX--;
		}
		while (!res[startY - 1][startX]) {
			res[startY][startX] = count;
			count++;
			startY--;
		}
	}

	for (let x = 0; x < num; x++) {
		for (let y = 0; y < num; y++) {
			if (!res[x][y]) {
				res[x][y] = count;
			}
		}
	}

	let str = ``;

	res.forEach((line) => {
		let s = line.join(' ');
		str = str + s + '\n';
	});

	document.body.innerText = str;
}

snake(8)