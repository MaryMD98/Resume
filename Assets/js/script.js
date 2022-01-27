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

function Display () {
    var worksEI = document.querySelector(".works");

    for(var i=0; i<6; i++){
        var colEI = document.createElement("div");
        colEI.setAttribute("class","col-sm-4");
        var cardEI = document.createElement("div");
        cardEI.setAttribute("class","card");
        var cardBodyEl = document.createElement("div");
        cardBodyEl.setAttribute("class","card-body");

        var h4El = document.createElement("h4");
        h4El.setAttribute("class","card-title");
        h4El.textContent = worksInfo.title[i];

        var pEl = document.createElement("p");
        pEl.setAttribute("class","card-text");
        pEl.textContent = worksInfo.cardTXT[i];

        var aEl = document.createElement("a");
        aEl.setAttribute("href",worksInfo.urlLink[i]);

        var imgEl = document.createElement("img");
        imgEl.setAttribute("src",worksInfo.imgSRC[i]);

        aEl.appendChild(imgEl);

        cardBodyEl.append(h4El,pEl,aEl);
        cardEI.append(cardBodyEl);
        colEI.append(cardEI);

        worksEI.append(colEI);
    }
}

Display ();