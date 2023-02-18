// UI 

let trailorBox = document.getElementsByClassName("trailors");
let nextBtn = document.querySelector(".btn-next");
let prevBtn = document.querySelector(".btn-prev");
let iFrame = document.querySelectorAll("iframe");
let trailorContainer = document.getElementsByClassName("trailor-box");

// console.log(trailorBox);
// console.log(trailorBox[0].clientWidth);
// console.log(trailorBox[0].scrollWidth);

trailorBox[0].style.position = "relative";

// console.log(prevBtn);

// console.log(iFrame);
// console.log(iFrame.length);
// console.log(iFrame[0]);

// console.log(trailorContainer[0].clientWidth);

let start = 0 ;

trailorBox[0].style.left = start;

nextBtn.addEventListener("click",function(){

    // console.log("hello");
 
    start += 50;
    
    if( trailorBox[0].style.left != `-${50 * ( iFrame.length - 1 )}vw` ){

        // console.log(start);
    
        trailorBox[0].style.left = `-${start}vw`;
    
        // console.log(trailorBox[0].style.left);
    
    }else if( start > ( 50 * ( iFrame.length - 1 ) ) ){

        start = 0;

        trailorBox[0].style.left = `0vw`;

        // console.log(trailorBox[0].style.left);

        
    }





});

prevBtn.addEventListener("click",function(){

    // console.log("hello");

    start -= 50;
        
    if( trailorBox[0].style.left != `0vw` ){

        // console.log(start);
    
        trailorBox[0].style.left = `-${start}vw`;
    
        // console.log(trailorBox[0].style.left);
    
    }else if( start < 0 ){

        start = 50 * ( iFrame.length - 1 );

        trailorBox[0].style.left = `-${50 * ( iFrame.length - 1 )}vw`;

        // console.log(trailorBox[0].style.left);

        
    }

});
