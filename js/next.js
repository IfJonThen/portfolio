var about1={"About":"Hello! Welcome to Jonathan's website. I am a Software Engineering student at the University of California. I enjoy learning about new software technologies and building projects. When not programming, I enjoy reading books. I am currently reading Game of Thrones: A Feast for Crows",
    "Skills": "I have experience using many web development technologies. I have lots of practical experience in building both personal websites as well as professional websites for multiple companies. I am skilled at designing dynamic webpages with different languages. I am extremely familiar with jQuery, NodeJS, React and AngularJS.",
    "Goals":"I am currently finishing up my degree at UC Irvine but beyond that I would like to establish a web development career for myself. My current path is leading me to seek a position in Frontend development, however if you have advice or would like to chat, feel free to email me!"};
function changeInfo(id){
    switch(id){
        case 2:
            break;
        case 3:
            document.getElementById("about").innerHTML=about1['About'];
            break;
        case 4:
            if (document.getElementById("content4").childElementCount==0){
                var h = document.createElement("H1");
                var t = document.createTextNode("Skills");
                var p = document.createElement("P");
                p.innerHTML=about1['Skills'];
                t.id="skills";
                h.appendChild(t);
                document.getElementById("content"+(id)).appendChild(h);
                document.getElementById("content"+(id)).appendChild(p);
            }
            break;
        case 5:
            loadGoals();
            break;
        default:
            break;
    }
}
function loadGoals(){
    if (document.getElementById("content5").childElementCount==0){
        let h = document.createElement("H1");
        let t = document.createTextNode("Goals");
        let p = document.createElement("P");
        p.innerHTML=about1['Goals'];
        t.id="goals";
        h.appendChild(t);
        document.getElementById("content5").appendChild(h);
        document.getElementById("content5").appendChild(p);
    }
}


