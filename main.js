// function longestDigitsPrefix(inputString) {
//     var string = inputString.split('')
//     var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
//     var output = []
//     for(var i = 0; i < string.length; i++) {
//         if(number.includes(string[i]) === false) {
//             continue;
//         }
//         output.push(string[i])
//     }
//     return output.join("")
// }
// function digitDegree(n) {

//     var count = 0;
//     if(n < 10) {
//         return 0
//     }else {
//         while(true) {
//             count++;
//             n = n.toString().split('').reduce((a,b) => {
//                 return parseInt(a) + parseInt(b)
//             });
//             if(n < 10) {
//                 break;
//             }
//         }
//     }
//     return count
// }

// function bishopAndPawn(bishop, pawn) {
//     var l = Math.abs(parseInt(bishop[0].charCodeAt()) - parseInt(pawn[0].charCodeAt()))
//     return l
// }

function findEmailDomain(address) {
    var index = address.lastIndexOf('@')
    var res = address.substr(index + 1)
    return res
}
function electionsWinners(votes, k) {
    var count = 0;

    // for(var i = 0; i < votes.length; i++) {

    //     var a = votes.every((ele) => {
    //         return votes[i] + k > ele;
    //     })
    //     if(a) {
    //         count++
    //     }
    // }
    return Math.max(...votes)

}
function longestWord(text) {
    var a = text.match(/[A-Za-z]+/g).sort((x, y) => {
        return y.length - x.length
    })
    return a[0]

}
function validTime(time) {
    time = time.split(':');
    if (time[0] > 23 || time[1] > 59) {
        return false;
    }
    return true;
    console.log(time)
}

function sumUpNumbers(inputString) {
    var a = inputString.match(/[\d]+/g)
    return a === null ? 0 : a.reduce((x, y) => {
        return parseInt(x) + parseInt(y);
    }, 0);
}

function messageFromBinaryCode(code) {
    // 00100000
    var arr = []
    while (code !== "") {
        arr.push(code.slice(0, 8))
        code = code.slice(8)
    }
    arr = arr.map((ele) => {
        return String.fromCharCode(parseInt(ele, 2))
    });

    return arr.join('')
}
function spiralNumbers(n) {
    let arr = [];

    let x = 1;
    let y = 1;

    function moveLeft() {
        x--;
    }
    function moveRight() {
        x++;
    }
    function moveUp() {
        y--;
    }

    function moveDown() {
        y++;
    }



    for (let i = 0; i < n; i++) {
        arr.push([]);
    }
    let temp = 0;


    let i = 1;

    while (true) {
        console.log(temp + " " + x + " " + y);
        while (x <= n - temp) {
            console.log("Cswcsc" + x + " " + y);
            arr[y - 1][x - 1] = i;
            moveRight();
            if (i == n * n)
                return arr;
            i++;
        }
        x--;
        y++;
        console.log(x + " " + y);
        while (y <= n - temp) {
            arr[y - 1][x - 1] = i;
            moveDown();
            if (i == n * n)
                return arr;
            i++;
            console.log(x + " " + y);

        }
        y--;
        x--;
        while (x >= 1 + temp) {
            arr[y - 1][x - 1] = i;
            moveLeft();
            if (i == n * n)
                return arr;
            i++;

        }
        temp++;
        x++;
        y--;
        console.log(x + " " + y);
        
        while (y >= 1 + temp) {
            arr[y - 1][x - 1] = i;
            moveUp();
            if (i == n * n)
                return arr;
            i++;
            console.log(x + " " + y);

        }
        
        x++;
        y++;
        

    }

    console.log(arr);
}

function sudoku(grid) {
    var nums  = '123456789';
    var columns = [];
    var boxes = [];
    for(var i = 0; i < 9; i++) {
        columns.push([])
        boxes.push([])
    }
    
    for(var i = 0; i<grid.length;i++){
        for(var j = 0; j<grid[i].length; j++){
            columns[j].push(grid[i][j]);
            boxes[Math.floor(i/3)*3+Math.floor(j/3)].push(grid[i][j]);
        }
        console.log(grid[i])
        if(grid[i].sort().join("")!=nums)return false;
        
    }
    
    console.log(boxes)
    console.log(columns)
    for(var i = 0; i<boxes.length; i++){
        if(boxes[i].sort().join("")!=nums)return false;
        if(columns[i].sort().join("")!=nums)return false;
    }
    
    return true
}
console.log(sudoku([[1,3,2,5,4,6,9,8,7], 
    [4,6,5,8,7,9,3,2,1], 
    [7,9,8,2,1,3,6,5,4], 
    [9,2,1,4,3,5,8,7,6], 
    [3,5,4,7,6,8,2,1,9], 
    [6,8,7,1,9,2,5,4,3], 
    [5,7,6,9,8,1,4,3,2], 
    [2,4,3,6,5,7,1,9,8], 
    [8,1,9,3,2,4,7,6,5]]))