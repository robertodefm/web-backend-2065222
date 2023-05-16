var array=[];

array.push(function(){
    console.log("Hello World 1");
});

array.push(function(){
    console.log("Hello World 2");
});

array.push(function(){
    console.log("Hello World 3");
});

// for (let i = 0; i < array.length; i++) {
//     array[i]();   
// };

array.forEach(element => {element()
    
});
