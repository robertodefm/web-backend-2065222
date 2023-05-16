var started = function (){
    console.log("Download STARTED!");
};

var update = function (progress){
    console.log(progress + "% COMPLETED!");
};

var completed = function (){
    console.log("Download COMPLETED!");
};

function performDowload(fn_s,fn_u,fn_c){
    fn_s();
    for (let i = 0; i <= 100; i++) {
        fn_u(i);       
    };
    fn_c();
};

performDowload(started,update,completed);