// function Trianglearea(){
// // base value
//     const basefield = document.getElementById('base-input').value;
//     base = parseFloat(basefield);
//     console.log(base);


//     // height value
//     const heightfield = document.getElementById('height-input').value;
//     height = parseFloat(heightfield);
//     console.log(height);

// // calculate the area
// const areafield1 = document.getElementById('area-input');
// const result1 = 0.5 * base * height;
// areafield1.innerText = result1;
// }

// function Rectanglearea(){
//     const lengthfield = document.getElementById('length-input').value;
//      length = parseFloat(lengthfield);

//     const widthfield = document.getElementById('width-input').value;
//     const width = parseFloat(widthfield);

//     const areafield2 = document.getElementById('area-input2');
//     const result2 = length * width;
//     areafield2.innerText = result2;
// }

function reuseableget(inputid){
    const getinput = document.getElementById(inputid).value;
const value = parseFloat(getinput);
return value;
}

function reuseableset(valeuid,area){
    const setresult = document.getElementById(valeuid);
    setresult.innerText = area;
}

// 1st card
function Trianglearea(){
    const  base = reuseableget('base-input');

    const height = reuseableget('height-input');
    
    let area = 0.5*base* height;
reuseableset('area-input',area);

}
// 2nd card
function Rectanglearea(){
    const  length = reuseableget('length-input');

    const width = reuseableget('width-input');
    
    let area = length * width;
reuseableset('area-input2',area);

}

// 3rd card 

function Parallelogramarea(){
    const  base1 = reuseableget('base-input1');
 
    const height1 = reuseableget('height-input1');


    let area = base1 * height1 ;
reuseableset('area-input3',area);

}