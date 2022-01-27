/// links location and information of homework works to be displayed 
var worksInfo = {
    urlLink: ["https://marymd98.github.io/Unit1-Homework/",
            "https://marymd98.github.io/Unit2-Homework/",
            "https://marymd98.github.io/Unit3-Homework/",
            "https://marymd98.github.io/Unit4-Homework/",
            "https://marymd98.github.io/Unit5-Homework/",
            "https://marymd98.github.io/Unit6-Homework/"],
    imgSRC: ["./Assets/pictures/hw-projects/hw1-Screenshot.png",
            "./Assets/pictures/hw-projects/hw2-Screenshot.png",
            "./Assets/pictures/hw-projects/hw3-Screenshot.png",
            "./Assets/pictures/hw-projects/hw4-Screenshot.png",
            "./Assets/pictures/hw-projects/hw5-Screenshot.png",
            "./Assets/pictures/hw-projects/hw6-Screenshot.png",],
    title: ["Code Refactor","Portafolio","Password Generator",
            "Coding Quiz Challenge","Work Day Scheduler",
            "Weather Dashboard"],
    cardTXT:["Homework One","Homework Two","Homework Three",
            "Homework Four","Homework Five","Homework Six"],
};

/// links location and information of projects to be displayed
var ProjectsInfo = {
    urlLink: ["https://sygmo.github.io/stellar-sights/",
            "#",
            "#"],
    imgSRC: ["./Assets/pictures/hw-projects/project1-screenshot.png",
            "./Assets/pictures/image-2.png",
            "./Assets/pictures/image-2.png"],
    title: ["Stellar Sights","Project Two","Project Three"],
    cardTXT:["Project One","Project Two","Project Three"],
};

// initialize the display of works and projects to display on coresponding area
function initDisplay(){
    /// this send the info about projects to the function display
    var index = 3;
    var ProjectsEI = document.querySelector(".projects");
    Display (ProjectsEI, index, ProjectsInfo);

    /// this send the info about works to the function display
    index = 6;
    var worksEI = document.querySelector(".works");
    Display (worksEI, index, worksInfo);
}

/// create the elements to the cards to be dsplayed
// use the info from works and projects to display
function Display (parentEl, indexDIS, info ) {
    
    for(var i=0; i<indexDIS; i++){
        var colEI = document.createElement("div");
        colEI.setAttribute("class","col-sm-4");
        var cardEI = document.createElement("div");
        cardEI.setAttribute("class","card");
        var cardBodyEl = document.createElement("div");
        cardBodyEl.setAttribute("class","card-body");

        var h4El = document.createElement("h4");
        h4El.setAttribute("class","card-title");
        h4El.textContent = info.title[i];

        var pEl = document.createElement("p");
        pEl.setAttribute("class","card-text");
        pEl.textContent = info.cardTXT[i];

        var aEl = document.createElement("a");
        aEl.setAttribute("href",info.urlLink[i]);

        var imgEl = document.createElement("img");
        imgEl.setAttribute("src",info.imgSRC[i]);

        aEl.appendChild(imgEl);

        cardBodyEl.append(h4El,pEl,aEl);
        cardEI.append(cardBodyEl);
        colEI.append(cardEI);

        parentEl.append(colEI);
    }
}

initDisplay();