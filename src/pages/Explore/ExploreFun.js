const examplesExplore = [
  {
    id: 1,
    heading: "CodePen Demo",
    content: {
      html: `
    <link href="https://fonts.googleapis.com/css?family=Russo+One" rel="stylesheet">

    <svg viewBox="0 0 1320 300">
        <text x="50%" y="50%" dy=".35em" text-anchor="middle">
        codepen
        </text>
    </svg>  
    `,
      css: `
    body {
        background: #e3f2fd
    }

    svg {
        font-family: 'Russo One', sans-serif;
        position: absolute; 
        width: 100%; height: 100%;
    }
    svg text {
        text-transform: uppercase;
        animation: stroke 5s infinite alternate;
        stroke-width: 2;
        stroke: #365fa0;
        font-size: 140px;
    }

    @keyframes stroke {
        0%   {
            fill: rgba(72,138,20,0); stroke: rgba(54,95,160,1);
            stroke-dashoffset: 25%; stroke-dasharray: 0 50%; stroke-width: 2;
        }
        70%  {fill: rgba(72,138,20,0); stroke: rgba(54,95,160,1); }
        80%  {fill: rgba(72,138,20,0); stroke: rgba(54,95,160,1); stroke-width: 3; }
        100% {
            fill: rgba(72,138,204,1); stroke: rgba(54,95,160,0); 
            stroke-dashoffset: -25%; stroke-dasharray: 50% 0; stroke-width: 0;
        }
    }
    `,
      js: ``,
    },
  },
  {
    id: 2,
    heading: "Menu Animation",
    content: {
      html: `
  <menu class="menu">

    <button class="menu__item active" style="--bgColorItem: #ff8c00;">
      <svg class="icon" viewBox="0 0 24 24">
        <path d="M3.8,6.6h16.4"/>
        <path d="M20.2,12.1H3.8"/>
        <path d="M3.8,17.5h16.4"/>
      </svg>
    </button>

    <button class="menu__item" style="--bgColorItem: #f54888;">
      <svg class="icon" viewBox="0 0 24 24">
        <path d="M6.7,4.8h10.7c0.3,0,0.6,0.2,0.7,0.5l2.8,7.3c0,0.1,0,0.2,0,0.3v5.6c0,0.4-0.4,0.8-0.8,0.8H3.8
        C3.4,19.3,3,19,3,18.5v-5.6c0-0.1,0-0.2,0.1-0.3L6,5.3C6.1,5,6.4,4.8,6.7,4.8z"/>
        <path d="M3.4,12.9H8l1.6,2.8h4.9l1.5-2.8h4.6"/>
      </svg>
    </button>

    <button class="menu__item" style="--bgColorItem: #4343f5;">
      <svg class="icon" viewBox="0 0 24 24">
        <path d="M3.4,11.9l8.8,4.4l8.4-4.4"/>
        <path d="M3.4,16.2l8.8,4.5l8.4-4.5"/>
        <path d="M3.7,7.8l8.6-4.5l8,4.5l-8,4.3L3.7,7.8z"/>
      </svg>
    </button>

    <button class="menu__item" style="--bgColorItem: #e0b115;">
      <svg class="icon" viewBox="0 0 24 24">
        <path d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1
          C3.9,4.4,4.4,3.9,5.1,3.9z"/>
        <path d="M4.2,9.3h15.6"/>
        <path d="M9.1,9.5v10.3"/>
      </svg>
    </button>

    <button class="menu__item" style="--bgColorItem:#65ddb7;">
      <svg class="icon" viewBox="0 0 24 24">
        <path d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1
          C3.9,4.4,4.4,3.9,5.1,3.9z"/>
        <path d="M5.5,20l9.9-9.9l4.7,4.7"/>
        <path d="M10.4,8.8c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6C7.3,8,8,7.3,8.9,7.3C9.7,7.3,10.4,8,10.4,8.8z"/>
      </svg>
    </button>

    <div class="menu__border"></div>

  </menu>

  <div class="svg-container">
    <svg viewBox="0 0 202.9 45.5">
      <clipPath id="menu" clipPathUnits="objectBoundingBox" transform="scale(0.0049285362247413 0.021978021978022)">
        <path d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
          c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
          c9.2,3.6,17.6,4.2,23.3,4H6.7z"/>
      </clipPath>
    </svg>
  </div>
  `,
      css: `
    html {
        box-sizing: border-box;
        --bgColorMenu : #1d1d27;
        --duration: .7s;    
    }

    html *,
    html *::before,
    html *::after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        display: flex;
        height: 100vh;
        overflow: hidden;
        align-items: center;
        justify-content: center;
        background-color: #ffb457;
        -webkit-tap-highlight-color: transparent;
        transition: background-color var(--duration);
    }

    .menu {
        margin: 0;
        display: flex;
        width: 32.05em;
        font-size: 1.5em;
        padding: 0 2.85em;
        position: relative;
        align-items: center;
        justify-content: center;
        background-color: var(--bgColorMenu); 
    }

    .menu__item {
        all: unset;
        flex-grow: 1;
        z-index: 100;
        display: flex;
        cursor: pointer;
        position: relative;
        border-radius: 50%;
        align-items: center;
        will-change: transform;
        justify-content: center;
        padding: 0.55em 0 0.85em;
        transition: transform var(--timeOut , var(--duration));    
    }

    .menu__item::before {
        content: "";
        z-index: -1;
        width: 4.2em;
        height: 4.2em;
        border-radius: 50%;
        position: absolute;
        transform: scale(0);
        transition: background-color var(--duration), transform var(--duration);    
    }

    .menu__item.active {
        transform: translate3d(0, -.8em , 0);
    }

    .menu__item.active::before{
        transform: scale(1);
        background-color: var(--bgColorItem);
    }

    .icon {
        width: 2.6em;
        height: 2.6em;
        stroke: white;
        fill: transparent;
        stroke-width: 1pt;
        stroke-miterlimit: 10;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 400;  
    }

    .menu__item.active .icon {
        animation: strok 1.5s reverse;
    }

    @keyframes strok {
        100% {
            stroke-dashoffset: 400;
        }
    }

    .menu__border {
        left: 0;
        bottom: 99%;
        width: 10.9em;
        height: 2.4em;
        position: absolute;
        clip-path: url(#menu);
        will-change: transform;
        background-color: var(--bgColorMenu);
        transition: transform var(--timeOut , var(--duration));
    }

    .svg-container {
        width: 0;
        height: 0;
    }

    @media screen and (max-width: 50em) {
        .menu {
            font-size: .8em;
        }
    }
  `,
      js: `
    "use strict"; 

    const body = document.body;
    const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
    const menu = body.querySelector(".menu");
    const menuItems = menu.querySelectorAll(".menu__item");
    const menuBorder = menu.querySelector(".menu__border");
    let activeItem = menu.querySelector(".active");

    function clickItem(item, index) {
        menu.style.removeProperty("--timeOut");
        if (activeItem == item) return;
        if (activeItem) {
            activeItem.classList.remove("active");
        }
        item.classList.add("active");
        body.style.backgroundColor = bgColorsBody[index];
        activeItem = item;
        offsetMenuBorder(activeItem, menuBorder);
    }

    function offsetMenuBorder(element, menuBorder) {
        const offsetActiveItem = element.getBoundingClientRect();
        const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth - offsetActiveItem.width) / 2) + "px";
        menuBorder.style.transform = \`translate3d(\${left}, 0 , 0)\`;
    }

    offsetMenuBorder(activeItem, menuBorder);

    menuItems.forEach((item, index) => {
        item.addEventListener("click", () => clickItem(item, index));
    });

    window.addEventListener("resize", () => {
        offsetMenuBorder(activeItem, menuBorder);
        menu.style.setProperty("--timeOut", "none");
    });
  `,
    },
  },
  {
    id: 3,
    heading: "Magic Glow Card",
    content: {
      html: `
    <div class="card">
        Magic Card
    </div>
  `,
      css: `
    @property --rotate {
        syntax: "<angle>";
        initial-value: 132deg;
        inherits: false;
    }

    :root {
        --card-height: 65vh;
        --card-width: calc(var(--card-height) / 1.5);
    }


    body {
        min-height: 100vh;
        background: #212534;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 2rem;
        padding-bottom: 2rem;
        box-sizing: border-box;
    }


    .card {
        background: #191c29;
        width: var(--card-width);
        height: var(--card-height);
        padding: 3px;
        position: relative;
        border-radius: 6px;
        justify-content: center;
        align-items: center;
        text-align: center;
        display: flex;
        font-size: 1.5em;
        color: rgb(88 199 250 / 0%);
        cursor: pointer;
        font-family: cursive;
    }

    .card:hover {
        color: rgb(88 199 250 / 100%);
        transition: color 1s;
    }
    .card:hover:before, .card:hover:after {
        animation: none;
        opacity: 0;
    }


    .card::before {
        content: "";
        width: 104%;
        height: 102%;
        border-radius: 8px;
        background-image: linear-gradient(
        var(--rotate)
        , #5ddcff, #3c67e3 43%, #4e00c2);
        position: absolute;
        z-index: -1;
        top: -1%;
        left: -2%;
        animation: spin 2.5s linear infinite;
    }

    .card::after {
        position: absolute;
        content: "";
        top: calc(var(--card-height) / 6);
        left: 0;
        right: 0;
        z-index: -1;
        height: 100%;
        width: 100%;
        margin: 0 auto;
        transform: scale(0.8);
        filter: blur(calc(var(--card-height) / 6));
        background-image: linear-gradient(
        var(--rotate)
        , #5ddcff, #3c67e3 43%, #4e00c2);
        opacity: 1;
        transition: opacity .5s;
        animation: spin 2.5s linear infinite;
    }

    @keyframes spin {
        0% {
            --rotate: 0deg;
        }
        100% {
            --rotate: 360deg;
        }
    }

    a {
        color: #212534;
        text-decoration: none;
        font-family: sans-serif;
        font-weight: bold;
        margin-top: 2rem;
    }
  `,
      js: ``,
    },
  },
  {
    id: 4,
    heading: "Single Div Fish",
    content: {
      html: `<div class="fish"></div>
  `,
      css: `html{

    box-sizing: border-box ;
    --cream: #f2eee3 ;
    --black: #1b1b1b ;
    --red: #d91729 ; 

}

html *,
html *::before,
html *::after {

    box-sizing: inherit ;

}

*::before,
*::after{

    content: "" ;
    position: absolute ;

}

body{

    margin: 0 ;
    width: 100% ;
    height: 100% ;
    display: flex ;
    overflow: hidden ;
    position: relative ;
    align-items: center ;
    justify-content: center ;
    background-color: var(--cream) ;


}

.fish{

    width: 35em ;
    height: 35em ;
    position: relative ;

    background-image : 

    radial-gradient(circle , var(--red) 23% , transparent 26% ) , 
    radial-gradient(27.6em 32em at -12% 19% , transparent 20.7% , var(--black) 21% , var(--black) 21% , transparent 21.4%) , 
    radial-gradient(circle , var(--red) 23% , transparent 26% ) , 
    radial-gradient(34.5em 41.9em at -7.1% 18.1% , transparent 20.7% , var(--black) 21% , var(--black) 21% , transparent 21.4%) ;
    
    background-size : 

    3.3em 3.3em , 
    8em 9em , 
    3.3em 3.3em , 
    7em 16em ;
    
    background-position : 

    13.8em 29.5em , 
    15.9em 22.6em , 
    12.3em 32.4em , 
    14em 22.2em ;

    background-repeat: no-repeat ;

}


.fish::before {

    width: 23em ;
    height: 23em ;
    top: 6.1em ;
    left: -1.7em ;
    transform: rotate(45deg) ;
  
    background-image : 

    radial-gradient(circle at 49.3% 49.3% , var(--black) 30% , var(--cream) 31.8% , var(--cream) 59% , transparent 61%) , 
    radial-gradient(13.8em 13.8em at 4.9% 94.9% , var(--cream) 66% , var(--black) 66.7% ) , 
    radial-gradient(53em 53em at 0 100% , transparent 43.3% , var(--black) 43.5% , var(--black) 44.5% , transparent 44.7%) , 
    radial-gradient(52em 52em at 0 100% , var(--cream) 42.2% ,var(--black) 42.4% ,var(--black) 43.8% , var(--cream) 44%, var(--cream) 45.2% , var(--black) 45.4% , var(--black) 47% , var(--cream) 47.2% , var(--cream) 48.3% , var(--black) 48.5% , var(--black) 49.8% , var(--cream) 50% , var(--cream) 51.3% , var(--black) 51.5% , var(--black) 53.1% , var(--cream) 53.2% , var(--cream) 54.2% , var(--black) 54.4% , var(--black) 56% , var(--cream) 56.2% , var(--cream) 57.2% , var(--black) 57.4% );
   
    background-size :

    7em 7em , 
    9.6em 9.6em , 
    100% 100% , 
    100% 100% ;

    background-position: 

    15.05em 0.6em , 
    5.5em 7.5em , 
    -.3em .3em , 
    1.35em -1.35em ;

    background-repeat: no-repeat ;
     
}



@media screen and (max-width: 36em) {

  .fish{
    font-size: .8em ;
  }    

}
  `,
      js: ``,
    },
  },
  {
    id: 5,
    heading: "Chameleon in css",
    content: {
      html: `<div class="chameleon">

        <div class="chameleon__head">

            <div class="chameleon__face"></div>

        </div>

        <div class="chameleon__body">

            <div class="chameleon__tummy">

                <div class="chameleon__tail"></div>

            </div>

        </div>

        <div class="chameleon__leg-front"></div>

        <div class="chameleon__leg-back"></div>
        
   </div>
  `,
      css: `html {

    box-sizing: border-box ;
    --gray : #f1f1f1 ;
    --lightGray : #c2c2c2 ;
    --green : #466b21 ;
    --lightGreen : #669933 ;
    --shadow : #2a2d2733 ;
    --darkGreen : #2f4717 ;
    --black : #010101 ;
    --duration-head: .64s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    --duration-body: .18s cubic-bezier(0.6, -0.28, 0.74, 0.05);
    --duration-leg: .64s linear;
    --duration-tail: .36s cubic-bezier(0.54, 0.03, 0, 0.96);
    --duration-shadow: .36s cubic-bezier(0.54, 0.03, 0, 0.96);

}

html *,
html *::before,
html *::after {

    box-sizing: inherit ;

}

body {

    margin: 0 ;
    height: 100vh ;
    display: flex  ;
    overflow: hidden ;
    align-items: center  ;
    justify-content: center ;
    background-color: var(--gray) ;

}

body * {

    position: absolute ;

}

body ::before,
body ::after {

    content: "" ;
    position: absolute ;

}

.chameleon {

    width: 14em ;
    height: 12em ;

}

.chameleon::after {

    top: 89% ;
    width: 10em ;
    left: 3% ;
    height: 0.5em ;
    background-color: var(--lightGray) ;
    animation: shadow var(--duration-shadow) infinite ;
}

.chameleon__head {

    top: 19% ;
    left: 50% ;
    width: 6em ;
    height: 6em ;
    z-index: 100 ;
    border-radius: 50%;
    animation: head var(--duration-head) infinite ;

}

.chameleon__face {

    width: 100% ;
    height: 100% ;
    border-radius: inherit ;
    background-color: var(--green);

}

.chameleon::before,
.chameleon__face::after {
    
    border-radius: 50% ;
    animation: var(--duration-head) infinite ;
    
}

.chameleon::before {

    width: 4em ;
    height: 4em ;
    z-index: -100 ;
    animation-name: eye-b ;
    background-color: var(--lightGreen) ;

}

.chameleon__face::after {
    
    top: 2% ;
    width: 4.5em ;
    height: 4.5em ;
    animation-name: eye-f ;
    background-repeat: no-repeat;

    background-image : 
    radial-gradient(.5em .5em at center center , var(--gray) 37%, transparent 51%) ,
    radial-gradient(1.8em 1.8em at center center , var(--black) 47%, transparent 51%) ,
    radial-gradient(4em 4em at center center , var(--lightGreen) 49%, transparent 50%) ;

    background-size :
    1.5em 1.5em ,
    3em 3em ,
    4.5em 4.5em ;

    background-position : 
    -9% 34% ,
    -53% 24% ,
    center center ;

}

.chameleon__body { 

    top: 18%;
    left: 9.1%;
    width: 10em;
    height: 8em;
    animation: shake var(--duration-body) infinite alternate;

}

.chameleon__tummy {

    top: 54% ;
    left: 31% ;
    width: 6em ;
    height: 3.3em ;
    border-radius: 50% ;
    background-color: var(--green) ;

}

.chameleon__tummy::before {

    top: -1% ;
    left: -5% ;
    width: 2em ;
    height: 2.6em ;
    transform: rotate(13deg) ;
    background-color: var(--green) ;
    box-shadow: 1.4em -1.5em 0 0 var(--green), 2.7em -2.7em 0 0 var(--green) ;

}

.chameleon__tummy::after{

    top: 2.4% ;
    right: 59% ;
    z-index: -50 ;
    width: 9.6em ;
    height: 4.3em ;
    transform: rotate(-12deg) ;
    border-radius: 0 0 50% 50% ;
    border: 0.3125em solid var(--gray) ;

}

.chameleon__tail {

    top: -1% ;
    right: 59% ;
    z-index: -50 ;
    width: 9.6em ;
    height: 4.2em ;
    overflow: hidden ;
    transform: rotate(-12deg) ;
    border-radius: 0 0 50% 50% ;
    
}

.chameleon__tail::before {
    
    left: 0 ;
    top: 47.4% ;
    width: 100% ;
    height: 77% ;
    background-color: var(--green) ;
    
    
}

.chameleon__tail::after {
    
    width: 89% ;
    height: 83% ;
    border-radius: 50% ;
    background-color: var(--gray) ;
    transform: rotate(-18deg) translate3d(-12%, 0% ,0) ;
    animation: tail var(--duration-tail) infinite ;
    
}

.chameleon__leg-front {

    top: 66% ;
    left: 60% ;
    width: 4em ;
    height: 3em ;
    z-index: -5 ;

}

.chameleon__leg-front::before,
.chameleon__leg-front::after {

    width: 1.2em ;
    height: 4em ;
    background-repeat: no-repeat ;
    animation: var(--duration-leg) infinite ;

}

.chameleon__leg-front::before {

    animation-name: leg-2 ;

}

.chameleon__leg-front::after {

    animation-name: leg-1 ;

}

.chameleon__leg-back {

    top: 66% ;
    left: 40% ;
    z-index: -5 ;
    height: 3em ;
    width: 2.5em ;

}

.chameleon__leg-back::before,
.chameleon__leg-back::after {
    
    width: 1.2em ;
    height: 2.2em ;
    animation: var(--duration-leg) infinite ;

}

.chameleon__leg-back::before {
    
    animation-name: leg-4 ;
    background-color: var(--darkGreen) ;

}

.chameleon__leg-back::after {

    animation-name: leg-3 ;
    background-color: var(--green) ;

}

@keyframes head {


    0%, 100% {

        width: 5.85em ;
        box-shadow: unset ;
        transform: translate3d(21% , 1%, 0) ;

    }
 
    5%{

        transform: translate3d(27% , 5%, 0) ;

    }

    10%{
        
        transform: translate3d(14% , 2%, 0) ;
        box-shadow: -6px 6px 2px -6px var(--shadow) ;

    }

    17%{

        width: 5.9em ;
        transform: translate3d(7% , -1%, 0) ;
        box-shadow: -12px 11px 2px -9px var(--shadow) ;
        
    }

    25%{

        width: 5.9em ;
        transform: translate3d(2% , -2%, 0) ;
        box-shadow: -11px 13px 2px -9px var(--shadow) ;
        
    }

    30%, 40%{

        width: 5.9em ;
        transform: translate3d(0 , -2%, 0) ;
        box-shadow: -11px 13px 2px -9px var(--shadow) ;

    }

    50%{

        width: 5.9em ;
        transform: translate3d(6% , 0%, 0) ;
        box-shadow: -11px 13px 2px -9px var(--shadow) ;

    }
   
    60%{

        width: 5.9em ;
        box-shadow: unset ;
        transform: translate3d(15% , -1%, 0) ;

    }
  
    75%{

        width: 5.9em ;
        box-shadow: unset ;
        transform: translate3d(14% , -3%, 0) ;

    }

    80%, 90%{

        width: 5.9em ;
        box-shadow: unset ;
        transform: translate3d(14% , -2%, 0) ;

    }

}

@keyframes eye-b {


    0%, 100%{

        transform: translate3d(241% , 50%, 0) ;

    }
  
    5%{
        
        transform: translate3d(277% , 86%, 0) ;

    }
 
    10%{

        transform: translate3d(260% , 84%, 0) ;

    }

    17%{

        transform: translate3d(242% , 64%, 0) ;

    }

    25%{

        transform: translate3d(234% , 52%, 0) ;

    }

    30%{

        transform: translate3d(231% , 45%, 0) ;
        
    }

    40%{

        transform: translate3d(233% , 44%, 0) ;

    }

    50%{

        transform: translate3d(238% , 48%, 0) ;

    }
 
    60%{

        transform: translate3d(205% , 56%, 0) ;

    }

    75%{

        transform: translate3d(215% , 52%, 0) ;

    } 
 
    80%{
        
        transform: translate3d(189% , 48%, 0) ;

    } 
 
    85%{

        transform: translate3d(181% , 46%, 0) ;

    } 

    90%{

        transform: translate3d(198% , 53%, 0) ;

    } 
}

@keyframes eye-f {

    0%, 100%{

        background-position : 
        40% 22% ,
        55% 23% ,
        center center ;
        transform: translate3d(27% , -18%, 0) ;

    }
 
    5%{

        background-position : 
        16% 38% ,
        19% 41% ,
        center center ;
        transform: translate3d(2% , -13%, 0) ;

    }

    10%{

        background-position : 
        8% 38% ,
        6% 36% ,
        center center ;
        transform: translate3d(2% , -13%, 0) ;

    }

    17%{

        background-position : 
        -1% 38% ,
        -14% 40% ,
        center center ;
        transform: translate3d(2% , -13%, 0) ; 

    }
 
    25%{

        background-position : 
        -4% 36% ,
        -17% 36% ,
        center center ;
        transform: translate3d(-8% , -3%, 0) ;
        
    }

    30%, 40%{

        background-position : 
        -5% 36% ,
        -19% 32% ,
        center center ;
        transform: translate3d(-14% , 4%, 0) ;
        
    }

    50%{

        background-position : 
        -5% 37% ,
        -21% 32% ,
        center center ;
        transform: translate3d(-18% , 6%, 0) ;

    }

    60%{
        
        background-position : 
        45% 21% ,
        74% 14% ,
        center center ;
        transform: translate3d(1% , -13%, 0) ;

    }

    75%{

        background-position : 
        59% 11% ,
        93% 0% ,
        center center ;
        transform: translate3d(12% , -14%, 0) ;

    } 
 
    80%{

        background-position : 
        72% 8% ,
        112% -4% ,
        center center ;
        transform: translate3d(21% , -19%, 0) ;

    } 

    85%{

        background-position : 
        66% 8% ,
        102% 1% ,
        center center ;
        transform: translate3d(27% , -18%, 0) ;

    }

    90%{

        background-position : 
        57% 14% ,
        84% 11% ,
        center center ;
        transform: translate3d(31% , -19%, 0) ;

    }

}

@keyframes tail {

    0%, 100%{
        
        transform: rotate(-18deg) translate3d(-12%, 0% ,0) ;

    }

    50%{

        transform: rotate(-11deg) translate3d(-13%, -5% ,0) ;

    }

}

@keyframes shake {

    100%{

        transform: translate3d(0, 1%, 0) ;

    }

}

@keyframes leg-1 {


    0%, 100%{

        width: 1.23em;
        height: 2.6em;
        border-radius: 0 45% 0 0 ;
        transform: rotate(27deg) translate3d(39%, 14% ,0) ;
        background-image: linear-gradient(205deg, var(--green) 77% , transparent 80%) ;

    }
 
    5%{

        width: 1.5em;
        height: 3em;
        border-radius: 0 100% 100% 0 / 0 50% 50% 0 ;
        transform: rotate(0deg) translate3d(21%, 0% ,0) ;
        background-image: linear-gradient(180deg, var(--green) 100% , transparent 80%) ;


    }
 
    10%{

        width: 1.5em;
        height: 3em;
        border-radius: 0 100% 100% 0 / 0 50% 50% 0 ;
        transform: rotate(0deg) translate3d(38%, 0% ,0) ;
        background-image: linear-gradient(231deg, var(--green) 77% , transparent 80%) ;

    }
 
    18%{

        width: 1.5em;
        height: 3em;
        border-radius: 0 100% 100% 0 / 0 50% 50% 0 ;
        transform: rotate(0deg) translate3d(56%, -7% ,0) ;
        background-image: linear-gradient(222deg, var(--green) 77% , transparent 80%) ;

    }
    
    25%, 40%{

        width: 1.3em;
        height: 2.3em;
        border-radius: 0 60% 0 0 ;
        transform: rotate(25deg) translate3d(91%, -2% ,0) ;
        background-image: linear-gradient(180deg, var(--green) 77% , transparent 80%) ;

    }

    
    50%{

        width: 1.3em;
        height: 2.18em;
        border-radius: 0 48% 20% 0 ;
        transform: rotate(0deg) translate3d(88%, 28% ,0);
        background-image: linear-gradient(201deg, var(--green) 79% , transparent 80%) ;

    }
  
    65%, 85%{

        width: 1.3em;
        height: 3em;
        border-radius: 0 0 0 0 ;
        transform: rotate(0deg) translate3d(9%, 18% ,0) skewX(-8deg);
        background-image: linear-gradient(180deg,  var(--green) 77% , transparent 80%) ;

    }
  
    95%{

        width: 1.3em;
        height: 3em;
        border-radius: 0 0 0 0 ;
        transform: rotate(17deg) translate3d(21%, 12% ,0) skewX(1deg) ;
        background-image: linear-gradient(180deg,  var(--green) 77% , transparent 80%) ;

    }

}


@keyframes leg-2 {

    0%, 100%{

        height: 3em;
        border-radius: 0 100% 0 0 ;
        transform: rotate(-5deg) translate3d(132%, 4% ,0) ;
        background-image: linear-gradient(185deg, var(--darkGreen) 77% , transparent 80%) ;

    }

  
    5%{

        height: 2.7em;
        width: 1.35em;
        border-radius: 0 86% 0 0 ;
        transform: rotate(0deg) translate3d(127%, 9% ,0) ;
        background-image: linear-gradient(180deg, var(--darkGreen) 100% , transparent 0%) ;


    }
 
    10%{

        height: 2.7em;
        width: 1.3em;
        border-radius: 0 86% 0 0 ;
        transform: rotate(0deg) translate3d(86%, 10% ,0) ;
        background-image: linear-gradient(180deg, var(--darkGreen) 100% , transparent 0%) ;

    }

    
    18%{

        height: 2.7em;
        width: 1.3em;
        border-radius: 0 86% 0 0 ;
        transform: rotate(0deg) translate3d(49%, 8% ,0) ;
        background-image: linear-gradient(180deg, var(--darkGreen) 100% , transparent 0%) ;

    }
   

    25%, 45%{

        height: 2.7em;
        width: 1.3em;
        border-radius: 0 86% 0 0 ;
        transform: rotate(0deg) translate3d(30%, 8% ,0) ;
        background-image: linear-gradient(180deg, var(--darkGreen) 100% , transparent 0%) ;

    }

    50%{

        height: 2.7em;
        width: 1.3em;
        border-radius: 0 86% 0 0 ;
        transform: rotate(10deg) translate3d(26%, -1% ,0) ;
        background-image: linear-gradient(180deg, var(--darkGreen) 100% , transparent 0%) ;

    }
 
    60%{

        height: 1.6em;
        width: 1.3em;
        border-radius: 0 100% 0 0 ;
        transform: rotate(19deg) translate3d(109%, -8% ,0) ;
        background-image: linear-gradient(200deg, var(--darkGreen) 77% , transparent 80%) ;


    }

    70%{

        height: 2em;
        width: 1.3em;
        border-radius: 0 100% 0 0 ;
        transform: rotate(-2deg) translate3d(122%, 10% ,0) ;
        background-image: linear-gradient(190deg, var(--darkGreen) 77% , transparent 80%) ;

    }
 
    75%, 82%{

        height: 2em;
        width: 1.25m;
        border-radius: 0 70% 0% 0 ;
        transform: rotate(-19deg) translate3d(120%, 30% ,0) ;
        background-image: linear-gradient(200deg, var(--darkGreen) 77% , transparent 80%) ;

    }
 
    95%{

        height: 2.2em;
        width: 1.25m;
        border-radius: 0 70% 20% 0 ;
        transform: rotate(-19deg) translate3d(115%, 28% ,0) ;
        background-image: linear-gradient(200deg, var(--darkGreen) 77% , transparent 80%) ;

    }

}


@keyframes leg-3 {

    0%, 100%{

        transform: rotate(-5deg) translate3d(95%, 29% ,0) ;

    }
 
    5%{

        transform: rotate(0deg) translate3d(139%, 31% ,0) ;

    }
 
    10%{

        transform: rotate(0deg) translate3d(93%, 32% ,0) ;

    }
 
    18%{

        transform: rotate(0deg) translate3d(50%, 32% ,0) ;

    }

    25%, 35%{

        transform: rotate(0deg) translate3d(30%, 32% ,0) ;

    }

    40%{

        transform: rotate(7deg) translate3d(36%, 22% ,0) ;

    }

    50%{

        border-radius: 0 100% 0 0 ;
        transform: rotate(13deg) translate3d(98%, 3% ,0) ;

    }

    60%{

        border-radius: 0 0 0 0 ;
        transform: rotate(-18deg) translate3d(54%, 26% ,0) ;

    }
 
    65%, 80%{

        border-radius: 0 0 0 0 ;
        transform: rotate(-22deg) translate3d(49%, 28% ,0) ;

    }

    90%{

        border-radius: 0 0 0 0 ;
        transform: rotate(-13deg) translate3d(75%, 29% ,0) ;

    }

}

@keyframes leg-4 {

    0%{

        border-radius: 0 0 0 0 ;
        transform: rotate(48deg) translate3d(94%, -7% ,0) ;

    }
 
    5%{

        border-radius: 0 20% 50% 0 ;
        transform: rotate(0deg) translate3d(41%, 36% ,0) ;

    }

    10%{

        border-radius: 0 0 0 0 ;
        transform: rotate(-28deg) translate3d(33%, 36% ,0) ;

    }

    18%{

        border-radius: 0 0 0 0 ;
        transform: rotate(26deg) translate3d(119%, -10% ,0) ;

    }

    25%, 35%{

        border-radius: 0 0 0 0 ;
        transform: rotate(26deg) translate3d(135%, -19% ,0) ;

    }

    40%{

        border-radius: 0 100% 0 0 ;
        transform: rotate(26deg) translate3d(144%, -19% ,0) ;

    }

    50%{

        border-radius: 0 100% 0 0 ;
        transform: rotate(17deg) translate3d(146%, -3% ,0) ;

    }

    60%{

        border-radius: 0 0 0 0 ;
        transform: rotate(0deg) translate3d(36%, 31% ,0) ;

    }

    65%, 80%{

        border-radius: 0 0 0 0 ;
        transform: rotate(0deg) translate3d(26%, 31% ,0) ;

    }

    90%{

        border-radius: 0 0 0 0 ;
        transform: rotate(12deg) translate3d(44%, 26% ,0) ;

    }

}

@keyframes shadow {

    0%, 100%{
        transform: scaleX(.93);
    }

    50%{
        transform: scaleX(1.19);
    }

} 

@media screen and (max-width: 36em) {

    .chameleon{

        transform: scale(.8) ;

    }

}

  `,
      js: ``,
    },
  },
];

export { examplesExplore };
