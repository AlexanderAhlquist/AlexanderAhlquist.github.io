const body = document.querySelector("body");
const form = document.querySelector("#form");
const info = document.querySelector("#info");
const newPara = document.createElement("p");



function myFunction(){
    if(document.getElementById('info').value == "zine-info") {
        newPara.innerText="A zine (/ziːn/ ZEEN; short for magazine or fanzine) is a small-circulation self-published work of original or appropriated texts and images, usually reproduced via a copy machine. (From Wikipedia)";
        document.body.appendChild(newPara);
    }else if(document.getElementById('info').value == "graphicnovel-info"){
        newPara.innerText="A graphic novel is a book made up of comics with entertainment content in it. (From Wikipedia)";
        document.body.appendChild(newPara);
    }
    else  if(document.getElementById('info').value == "default"){
       newPara.innerText="";
        document.body.appendChild(newPara);

    }else if (document.getElementById('info').value == "traditionalcomic-info"){
        newPara.innerText="Comics is a medium used to express ideas with images, often combined with text or other visual information. (From Wikipedia)";
        document.body.appendChild(newPara);
    }else if (document.getElementById('info').value == "nontradcomic-info"){
    newPara.innerText="A non traditional comic is a comic which breaks the typical rules associated with comics. This can be weird panels, weird materials, or just unconventional storytelling!";
    document.body.appendChild(newPara);
}
}
