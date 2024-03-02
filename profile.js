let aboutbox=document.getElementById("describe2");
let skiltitle=document.getElementById("skiltitle");
let cetrifititle=document.getElementById("cetrifititle");
let edutitle=document.getElementById("edutitle");
let skilldivEl=document.getElementById("skilldiv");
let cetrifiEl=document.getElementById("cetrifi");
let eduEl=document.getElementById("edu");

skiltitle.onclick=function(){
    skilldivEl.style.display="block"
    cetrifiEl.style.display="none"
    eduEl.style.display="none"
    skiltitle.style.borderBottom = "3px solid #00BFA6"
    cetrifititle.style.borderBottom="none"
    edutitle.style.borderBottom="none"
}
cetrifititle.onclick=function(){
    skilldivEl.style.display="none"
    cetrifiEl.style.display="block"
    eduEl.style.display="none"
    skiltitle.style.borderBottom = "none"
    cetrifititle.style.borderBottom="3px solid #00BFA6"
    edutitle.style.borderBottom="none"
}
edutitle.onclick=function(){
    eduEl.style.display="block"
    skilldivEl.style.display="none"
    cetrifiEl.style.display="none"
    skiltitle.style.borderBottom = "none"
    cetrifititle.style.borderBottom="none"
    edutitle.style.borderBottom="3px solid #00BFA6"
}





let container1=document.getElementById("div1");

let btns1=document.querySelectorAll('.btndiv1');
let imgarr=["dt1","dt2","dt3"];
let index1=0;

btns1.forEach((button)=>{
    button.addEventListener('click',()=>{
       if(button.classList.contains('btn-left')) {
        index1--;
        if(index1<0){
            index1 = imgarr.length-1;
        }
       
        container1.style.backgroundImage=`url("img/${imgarr[index1]}.png") `

       }
       else{
        index1++;
        if(index1==imgarr.length){
            index1=0;
        }
        
        container1.style.backgroundImage= `url("img/${imgarr[index1]}.png") `

       }
        
    })
})
let container2=document.getElementById("div2");

let btns2=document.querySelectorAll('.btndiv2');
let todo=["todo1","todo2","todo3"];
let index2=0;

btns2.forEach((button)=>{
    button.addEventListener('click',()=>{
       if(button.classList.contains('btn-left')) {
        index2--;
        if(index2<0){
            index2 = todo.length-1;
        }
       
        container2.style.backgroundImage=`url("img/${todo[index2]}.png") `

       }
       else{
        index2++;
        if(index2==todo.length){
            index2=0;
        }
        
        container2.style.backgroundImage= `url("img/${todo[index2]}.png") `

       }
        
    })
})
let container3=document.getElementById("div3");

let btns3=document.querySelectorAll('.btndiv3');
let cal=["cal1","cal2","cal3"];
let index3=0;

btns3.forEach((button)=>{
    button.addEventListener('click',()=>{
       if(button.classList.contains('btn-left')) {
        index3--;
        if(index3<0){
            index3 = cal.length-1;
        }
       
        container3.style.backgroundImage=`url("img/${cal[index3]}.png") `

       }
       else{
        index3++;
        if(index3==cal.length){
            index3=0;
        }
        
        container3.style.backgroundImage= `url("img/${cal[index3]}.png") `

       }
        
    })
})

let subbtn=document.getElementById("submit")



let active1=document.getElementById("active1")
let active2=document.getElementById("active2")
let active3=document.getElementById("active3")
let active4=document.getElementById("active4")
console.log(active1)

active1.onclick=function(){
    active2.classList.remove("active")  
    active3.classList.remove("active")  
    active4.classList.remove("active")
    active1.classList.add("active")  
}
active2.onclick=function(){
    active1.classList.remove("active")  
    active3.classList.remove("active")  
    active4.classList.remove("active")
    active2.classList.add("active")   
}
active3.onclick=function(){
    active2.classList.remove("active")  
    active1.classList.remove("active")  
    active4.classList.remove("active")
    active3.classList.add("active")   
}
active4.onclick=function(){
    active2.classList.remove("active")  
    active3.classList.remove("active")  
    active1.classList.remove("active")
    active4.classList.add("active")  
}
let menu=document.getElementById("menubar");
let menuli=document.getElementById("mobilediv")
menu.onclick=function(){
    menuli.style.display="block"
    menu.style.display="none"
}
let multiplay=document.getElementById("miltiplay");
multiplay.onclick=function(){
    menuli.style.display="none"
    menu.style.display="block"
   
}