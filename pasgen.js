
function sli(){
 var a = document.getElementById("range").value;
 document.getElementById("num").innerText = a;
}
function random(){
 var num= document.getElementById("range").value;
 var a = Math.floor(Math.random() * 26);
 var b = Math.floor(Math.random() * 26);
 var c = Math.floor(Math.random() * 26);
 var d = Math.floor(Math.random() * 26);
 var e = Math.floor(Math.random() * 26);
 var password = document.getElementById("pass");
 var upl = "QWERTYUIOPASDFGHJKLZXCVBNM";
 var lwl = "qwertyuiopasdfghjklzxcvbnm";
 var num = "12345678901234567890123456";
 var sym = "*#$_&+?!@%-+&+(/:,?!✓¥€¢£)";
 var upc = document.getElementById("up");
 var lwc = document.getElementById("low");
 var numc = document.getElementById("numb");
 var symbc = document.getElementById("symb"); 
 if(upc.checked == true)
 {
 var uplr1 = upl.charAt(a);
 var uplr2 = upl.charAt(b);
 var uplr3 = upl.charAt(c);
 var uplr4 = upl.charAt(d);
 var uplr5 = upl.charAt(e);
 }else{
 var uplr1 ="";
 var uplr2 ="";
 var uplr3 ="";
 var uplr4 ="";
 var uplr5 =""};
 if(lwc.checked==true){
 var lwlr1 = lwl.charAt(e);
 var lwlr2 = lwl.charAt(d);
 var lwlr3 = lwl.charAt(b);
 var lwlr4 = lwl.charAt(c);
 var lwlr5 = lwl.charAt(a);
  }else{
 var lwlr1 ="";
 var lwlr2 ="";
 var lwlr3 ="";
 var lwlr4 ="";
 var lwlr5 ="";
  };if(numc.checked==true){
 var numr1 = num.charAt(a);
 var numr2 = num.charAt(b);
 var numr3 = num.charAt(c);
 var numr4 = num.charAt(d);
 var numr5 = num.charAt(e);
 }else{
 var numr1 ="";
 var numr2 ="";
 var numr3 ="";
 var numr4 ="";
 var numr5 ="";}
 if(symbc.checked==true){
 var symr1 = sym.charAt(a);
 var symr2 = sym.charAt(b);
 var symr3 = sym.charAt(c);
 var symr4 = sym.charAt(d);
 var symr5 = sym.charAt(e);}
 else{
 var symr1 ="";
 var symr2 ="";
 var symr3 ="";
 var symr4 ="";
 var symr5 ="";
 }
 var pv= uplr1 + lwlr1 + numr1 + symr1 +  uplr2 + lwlr2 + numr2 + symr2 + uplr3 + lwlr3 + numr3 + symr3 + uplr4 + lwlr4 + numr4 + symr4 + uplr5 + lwlr5 + numr5 + symr5 ;
 var num = document.getElementById("range").value;
 password.value = pv.slice(0,num);
}
function copy(){
    var copyText = document.getElementById("pass");
 copyText.select();
 copyText.setSelectionRange(0,9999);
navigator.clipboard.writeText(copyText.value);
    alert("copied to clipboard : " + copyText.value +".")
}
var le = 0;
function lev(){
 var level = document.getElementById("level");
 var a = document.getElementById("up");
 var b = document.getElementById("low");
 var c = document.getElementById("numb");
 var d = document.getElementById("symb");
 var levd = document.getElementById("levd");
 if(a.checked==true && b.checked==true && c.checked==true && d.checked==true){le=4;level.innerText="very strong"}
 else if(
a.checked==true && b.checked==true && c.checked==true||
a.checked==true && b.checked==true && d.checked==true||
a.checked==true && c.checked==true && d.checked==true||
d.checked==true && b.checked==true && c.checked==true
 ){le=3;level.innerText="strong"}
 else if(
 a.checked==true && b.checked==true ||
 a.checked==true && c.checked==true || 
 a.checked==true && d.checked==true || 
 b.checked==true && c.checked==true ||
 b.checked==true && d.checked==true ||
 c.checked==true && d.checked==true 
 ){le = 2;level.innerText="medium"}
 else if(a.checked==true || b.checked==true || c.checked==true || d.checked==true){le = 1;level.innerText="weak"}
else{le=0}
  levd.value =le;
}
