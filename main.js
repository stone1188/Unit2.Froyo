let chooseFroyo = prompt("Choose your flavors", 
            "vanilla,vanilla,vanilla,strawberry,coffee,coffee");

// initialize object
const froyo = {
    vanilla: 0,
    strawberry: 0,
    coffee: 0
};

// split chooseFroyo into an array of strings
const froyoArr = chooseFroyo.split(',');

// call function to count flavor
countFlavor(froyoArr);


// show results in console
console.table(froyo);

//checks froyoArr for each flavor and increases the count of each flavor
function countFlavor(flaarr){
    for(i = 0; i < froyoArr.length; i++){
        if(flaarr[i] === "vanilla"){
            froyo.vanilla += 1;
        } else if (flaarr[i] === "strawberry") {
            froyo.strawberry += 1;
        } else if (flaarr[i] === "coffee"){
            froyo.coffee += 1;
        }
    }
}

/* practicing the other type of for loop  */
// function countFlavor(flaarr){
//     for(const i in froyoArr){   
//         if(flaarr[i] === "vanilla"){
//             froyo.vanilla += 1;
//         } else if (flaarr[i] === "strawberry") {
//             froyo.strawberry += 1;
//         } else if (flaarr[i] === "coffee"){
//             froyo.coffee += 1;
//         }
//     }
// }