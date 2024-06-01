
let type3 = document.getElementById("type3");
let text = [ "Web Developer","Android Developer"];
let i = 0;
let j = 0;

function typeEffect() {
    if ( i < text.length)
    {
        if(j < text[i].length) 
        {
        type3.innerHTML += text[i][j];
        j++;
        setTimeout(typeEffect, 100); 
        }
        else
      {
        type3.innerHTML = ""; 
        i++;
        j=0;
        setTimeout(typeEffect, 100); 
        }
    } 
    
    else 
    {
        setTimeout(() => {
            type3.innerHTML = ""; 
            i = 0; 
            j=0;
            typeEffect(); 
        }, 200);
    }
}

typeEffect();

let skills = document.getElementById("skills");
let sk = "SKILLS";
let skillIndex = 0;
function skill() {
    if (skillIndex < sk.length) {
        skills.innerHTML += sk[skillIndex];
        skillIndex++;
        setTimeout(skill, 400);
    } else {
        setTimeout(() => {
            skills.innerHTML = "";
            skillIndex = 0;
            skill();
        }, 400);
    }
}

skill();
let box=document.getElementsByClassName("box")

let isclicked=false
skills.addEventListener("click",function()
{  if(!isclicked){
    skills.style.color="red"
    for(i=0;i<box.length;i++){
    box[i].style.animation="none"
    box[i].style.color="rgb(38, 201, 38)"
  
    }  isclicked=true

}
else{
    skills.style.color="white"
    for(i=0;i<box.length;i++){
    box[i].style.animation=""
    box[i].style.color=""
    }isclicked=0
}
})



let a4 = document.getElementById("a4");
let exp = document.getElementById("exp");
let intern = document.getElementById("intern");

a4.addEventListener("click", function() {
   
    setTimeout(() => {
        exp.style.animation = "none";
        intern.style.animation = "none";
    }, 1);

   
    setTimeout(() => {
        exp.style.animation = "box1 0.5s ease-in 1 normal";
        intern.style.animation = "box2 0.5s ease-in 1 normal";
    }, 20);
});

let li = document.getElementsByTagName('li');
let l = 0;

function fontcol() {
    if (l < li.length) {
        li[l].style.color = "rgb(38, 201, 38)";
        l++;
        setTimeout(fontcol, 1000);
    } else {
        setTimeout(() => {
            for (let i = 0; i < li.length; i++) {
                li[i].style.color = "white";
            }
            l = 0;
            setTimeout(fontcol, 1000); 
        }, 1000); 
    }
}

fontcol();
