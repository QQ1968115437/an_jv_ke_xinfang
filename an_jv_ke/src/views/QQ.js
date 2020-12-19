var a=document.querySelectorAll(".info-item-mod>div>span");
var b=[]
for(var m of a){
    b.push(m.innerHTML);
}
b;

var aa=document.querySelectorAll(".info-item-mod>div>div");
var cc=[];
for(var n of aa){
    for(var m of n.children){cc.push(m.innerHTML)};
    console.log(cc);
    cc=[];
}