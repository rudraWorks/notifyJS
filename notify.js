function notify(Title,mesage,direction,type,color,textColor,btncolor,btntext,opacity)
{ var center=document.createElement('center');
  center.setAttribute("id","cen");
  document.body.appendChild(center); if(mesage=="simple"||mesage==undefined)  {   type="non";textcolor="black";	color="white";   btncolor="skyblue";mesage="";
  }
  
  if(color==undefined||color=='')color="white";
    if(btncolor==undefined||btncolor=='')btncolor="skyblue";
var cenmain=document.getElementById("cen");
cenmain.innerHTML="<br><div id='alen'></div>";
cenmain.style.position="fixed";var divW=cenmain.offsetWidth;
var divH=cenmain.offsetHeight;var w=window.screen.width;var h=window.screen.height;
cenmain.style.top="10%";cenmain.style.left="10%";
var main=document.getElementById("alen");var typee;
if(type=="alert"||type=="Alert")
typee="<center style='color:navy;font-weight:700;font-size:28px;'>ALERT!</center>";
else if(type=="Success"||type=="success"){
typee="<center  style='color:navy;font-weight:700;font-size:30px;'>SUCCESS!</center>";
//document.getElementById("centype").innerHTML=(String.fromCharCode(10004));}
else if(type=="Danger"||type=="danger")typee="<center style='color:navy;font-weight:700;font-size:28px;'>DANGER!</center>";else if(type=="Message"||type=="message")
typee="<center style='color:navy;font-weight:700;font-size:28px;'>MESSAGE!</center>";else if(type=="non")typee="";else typee="";var title="<span style='color:Navy;text-align:center;font-weight:700;font-size:30px;font-weight:700;'>"+Title+"</span><br>";
main.innerHTML="<style>@keyframes ani{to{transform:translatey(-350px);}}</style><div style='animation: ani .2s alternate 2;' id='alertStyle'><br>"+typee+title+mesage+"<br><div  onclick='rem()' id='span'>close</div></div>";if(direction=="right") main.innerHTML="<style>@keyframes ani{to{transform:translatex(350px);}}</style><div style='animation: ani .2s alternate 2;' id='alertStyle'><br>"+typee+title+mesage+"<br><div  onclick='rem()' id='span'>close</div></div>";if(direction=="bottom") main.innerHTML="<style>@keyframes ani{to{transform:translatey(350px);}}</style><div style='animation: ani .2s alternate 2;' id='alertStyle'><br>"+typee+title+mesage+"<br><div  onclick='rem()' id='span'>close</div></div>";
if(direction=="left")main.innerHTML="<style>@keyframes ani{to{transform:translate(-350px);}}</style><div style='animation: ani .2s alternate 2;' id='alertStyle'><br>"+typee+title+mesage+"<br><div  onclick='rem()' id='span'>close</div></div>";
var styleDiv=document.getElementById("alertStyle"); styleDiv.style.width="290px"; styleDiv.style.height="190px";
  styleDiv.style.border="solid 4px black"; styleDiv.style.color=textColor; 
      styleDiv.style.boxShadow="10px 10px 20px grey";styleDiv.style.backgroundColor=color;if(opacity==undefined||opacity=='')opacity=1;styleDiv.style.opacity=opacity;styleDiv.style.padding="8px";styleDiv.style.fontSize="22px";styleDiv.style.borderRadius="4px";   styleDiv.style.textAlign="center"; styleDiv.style.wordWrap="break-word";styleDiv.style.overflow="scroll";var styleSpan=document.getElementById("span");
styleSpan.style.color="black";styleSpan.style.position="relative";styleSpan.style.left="65%";
styleSpan.style.fontSize="22px";styleSpan.style.border="2px solid black";
  styleSpan.style.bottom="-20%";styleSpan.style.cursor="pointer";styleSpan.style.width="80px";styleSpan.style.height="30px";  styleSpan.style.borderRadius="5px";styleSpan.style.fontWeight="700";  if(btntext==undefined||btntext=='')styleSpan.innerHTML="ok"; else styleSpan.innerHTML=btntext;
							  if(btncolor==undefined)btncolor="skyblue";	 styleSpan.style.backgroundColor=btncolor;
     
					}
function rem(){  var styleDiv=document.getElementById("alertStyle");styleDiv.remove();}

	 
	
	
