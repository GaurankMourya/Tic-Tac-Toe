const buttons = document.querySelectorAll('.cross-circle');
const start = document.querySelector('.start');
const reset = document.querySelector('.reset');
const outerstructure = document.querySelector('#outer-structure');
const structure = document.querySelector('.game-structure');
const finaldisplay = document.querySelector('section');
const winnerdisplay = document.querySelector('#winner');
const playagainbutton = document.querySelector('.play-again');
const custom = document.querySelector('.custom');
const Artificial = document.querySelector('.Artificial');
const mode = document.querySelector('aside');
const text = document.querySelector('.text');


let counter = 1;
let storeinputs = "";
let image;
var i;

let Crossrow1 = 0;
let Crossrow2 = 0;
let Crossrow3 = 0;
let Crosscol1 = 0;
let Crosscol2 = 0;
let Crosscol3 = 0;
let Crossdig1 = 0;
let Crossdig2 = 0;
let Circlerow1 = 0;
let Circlerow2 = 0;
let Circlerow3 = 0;
let Circlecol1 = 0;
let Circlecol2 = 0;
let Circlecol3 = 0;
let Circledig1 = 0;
let Circledig2 = 0;


custom.addEventListener('click', function (event) {
    start.style.display = 'block'
    reset.style.display = 'block'
    mode.style.display = 'none'
    outerstructure.style.opacity = '1'
    CustomPlay();
})
Artificial.addEventListener('click', function (event) {
    start.style.display = 'block'
    reset.style.display = 'block'
    mode.style.display = 'none'
    outerstructure.style.opacity = '1'
    ArtificialPlay();
})

function CustomPlay() {
    start.addEventListener('click', function (event) {
        ButtonWorking();
        structure.style.opacity = '1';
        setTimeout(function () {
            start.style.display = 'none'
        }, 1000);
    })
}

function ButtonWorking() {
    Array.from(buttons).forEach(function (item) {
        item.addEventListener('click', function (event) {
            image = document.createElement('img');
            if (counter % 2 != 0) {
                image.src = 'Cross.png'
                counter++;
                logicCross(item);
                logicCrossCol(item);
                logicCrossDigonal(item);
            } else {
                image.src = 'Circle.png'
                counter++;
                logicCircle(item);
                logicCirleCol(item);
                logicCircleDignal(item);
            }
            image.style.height = '120px'
            image.style.width = '120px'
            item.appendChild(image);
            Gamedraw();
        })
    })
}

function Gamedraw() {
    if (counter === 10 || counter === 11) {
        if (Crossrow1 < 3 && Crossrow2 < 3 && Crossrow3 < 3 && Crosscol1 < 3 && Crosscol2 < 3 && Crosscol3 < 3 && Crossdig1 < 3 && Crossdig2 < 3) {
            if (Circlerow1 < 3 && Circlerow2 < 3 && Circlerow3 < 3 && Circlecol1 < 3 && Circlecol2 < 3 && Circlecol3 < 3 && Circledig1 < 3 && Circledig2 < 3) {
                Draw();
            }
        }
    }
}

function ArtificialPlay() {
    start.addEventListener('click', function (event) {
        ArtificialButtonWorking();
        structure.style.opacity = '1';
        setTimeout(function () {
            start.style.display = 'none'
        }, 1000);
    })
}

function ArtificialButtonWorking() {
    Array.from(buttons).forEach(function (item) {
        item.addEventListener('click', function (event) {
            image = document.createElement('img');
            if (counter % 2 != 0) {
                image.src = 'Cross.png'
                storeinputs += `${item.textContent}`;
                counter++;
                logicCross(item);
                logicCrossCol(item);
                logicCrossDigonal(item);
            }
            image.style.height = '120px'
            image.style.width = '120px'
            item.appendChild(image);

            setTimeout(function () {
                ArtificialWorking();
            }, 1000);
            counter++;
            Gamedraw();
        })
    })
}

function ArtificialWorking() {
    if (counter < 10) {
        let random = Math.floor(Math.random() * 9) + 1;
        for (i = 0; i < storeinputs.length; i++) {
            if (storeinputs.charAt(i) == random) {
                i=-1;
                random = Math.floor(Math.random() * 9) + 1;
            }
        }
        Artificialimage(random);
    }
}

function Artificialimage(randomnumber) {
    Array.from(buttons).forEach(function (item) {
        if (item.id === "one" && randomnumber == "1") {
            storeinputs += `${item.textContent}`;
            Createimage(item);
        } if (item.id === "two" && randomnumber == "2") {
            storeinputs += `${item.textContent}`;
            Createimage(item);
        } if (item.id === "three" && randomnumber == "3") {
            storeinputs += `${item.textContent}`;
            Createimage(item);
        } if (item.id === "four" && randomnumber == "4") {
            storeinputs += `${item.textContent}`;
            Createimage(item);
        } if (item.id === "five" && randomnumber == "5") {
            storeinputs += `${item.textContent}`;
            Createimage(item);
        } if (item.id === "six" && randomnumber == "6") {
            storeinputs += `${item.textContent}`;
            Createimage(item);
        } if (item.id === "seven" && randomnumber == "7") {
            storeinputs += `${item.textContent}`;
            Createimage(item);
        } if (item.id === "eight" && randomnumber == "8") {
            storeinputs += `${item.textContent}`;
            Createimage(item);
        } if (item.id === "nine" && randomnumber == "9") {
            storeinputs += `${item.textContent}`;
            Createimage(item);
        }
    });
}

function Createimage(imageindex) {
    image = document.createElement('img');
    image.style.height = '120px'
    image.style.width = '120px'
    imageindex.appendChild(image);
    image.src = "Circle.png";
    logicCircle(imageindex);
    logicCirleCol(imageindex);
    logicCircleDignal(imageindex);
}

reset.addEventListener('click', function (event) {
    location.reload();
});

function logicCross(source) {
    if (source.id === 'one' || source.id === 'two' || source.id === 'three') {
        Crossrow1++;
        if (Crossrow1 === 3) {
            Xwinner();
        }
    }
    else if (source.id === 'four' || source.id === 'five' || source.id === 'six') {
        Crossrow2++;
        if (Crossrow2 === 3) {
            Xwinner();
        }
    }
    else if (source.id === 'seven' || source.id === 'eight' || source.id === 'nine') {
        Crossrow3++;
        if (Crossrow3 === 3) {
            Xwinner();
        }
    }
}

function logicCrossCol(source) {
    if (source.id === 'one' || source.id === 'four' || source.id === 'seven') {
        Crosscol1++;
        if (Crosscol1 === 3) {
            Xwinner();
        }
    }
    else if (source.id === 'two' || source.id === 'five' || source.id === 'eight') {
        Crosscol2++;
        if (Crosscol2 === 3) {
            Xwinner();
        }
    }
    else if (source.id === 'three' || source.id === 'six' || source.id === 'nine') {
        Crosscol3++;
        if (Crosscol3 === 3) {
            Xwinner();
        }
    }
}

function logicCrossDigonal(source) {
    if (source.id === 'one' || source.id === 'five' || source.id === 'nine') {
        Crossdig1++;
        if (Crossdig1 === 3) {
            Xwinner();
        }
    }
    if (source.id === 'three' || source.id === 'five' || source.id === 'seven') {
        Crossdig2++;
        if (Crossdig2 === 3) {
            Xwinner();
        }
    }
}

function logicCircle(source) {
    if (source.id === 'one' || source.id === 'two' || source.id === 'three') {
        Circlerow1++;
        if (Circlerow1 === 3) {
            Ywinner();
        }
    }
    else if (source.id === 'four' || source.id === 'five' || source.id === 'six') {
        Circlerow2++;
        if (Circlerow2 === 3) {
            Ywinner();
        }
    }
    else if (source.id === 'seven' || source.id === 'eight' || source.id === 'nine') {
        Circlerow3++;
        if (Circlerow3 === 3) {
            Ywinner();
        }
    }
}

function logicCirleCol(source) {
    if (source.id === 'one' || source.id === 'four' || source.id === 'seven') {
        Circlecol1++;
        if (Circlecol1 === 3) {
            Ywinner();
        }
    }
    else if (source.id === 'two' || source.id === 'five' || source.id === 'eight') {
        Circlecol2++;
        if (Circlecol2 === 3) {
            Ywinner();
        }
    }
    else if (source.id === 'three' || source.id === 'six' || source.id === 'nine') {
        Circlecol3++;
        if (Circlecol3 === 3) {
            Ywinner();
        }
    }
}

function logicCircleDignal(source) {
    if (source.id === 'one' || source.id === 'five' || source.id === 'nine') {
        Circledig1++;
        if (Circledig1 === 3) {
            Ywinner();
        }
    }
    if (source.id === 'three' || source.id === 'five' || source.id === 'seven') {
        Circledig2++;
        if (Circledig2 === 3) {
            Ywinner();
        }
    }
}

function Xwinner() {
    outerstructure.style.opacity = '0.2'
    finaldisplay.style.marginLeft = '0px'
    reset.style.display = "none";
    winnerdisplay.innerHTML = 'X'
}

function Ywinner() {
    outerstructure.style.opacity = '0.2'
    finaldisplay.style.marginLeft = '0px'
    reset.style.display = "none";
    winnerdisplay.innerHTML = '0'
}

function Draw() {
    outerstructure.style.opacity = '0.2'
    finaldisplay.style.marginLeft = '0px'
    reset.style.display = "none";
    winnerdisplay.style.fontSize = '3rem'
    winnerdisplay.innerHTML = 'NO ONE'
}

playagainbutton.addEventListener('click', function (event) {
    finaldisplay.style.marginLeft = '130vw'
    outerstructure.style.opacity = '1'
    reset.style.display = "block";
    setTimeout(function (event) {
        location.reload();
    }, 1000);
})