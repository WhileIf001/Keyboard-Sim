const keyInput = document.querySelector('.keyInput');
 var keyInput1 = "|";
 var keyInput2 = "1";
 var keyInput3 = "2";
 var keyInput4 = "3";
 var keyInput5 = "4";
 var keyInput6 = "5";
 var keyInput7 = "6";
 var keyInput8 = "7";
 var keyInput9 = "8";
 var keyInput10 = "9";
 var keyInput11 = "0";
 var keyInput12 = "-";
 var keyInput13 = "=";
 var keyInput14 = "[";
 var keyInput15 = "]";
 var keyInput16 = ";";
 var keyInput17 = "'";
 var keyInput18 = "#";
 var keyInput19 = ",";
 var keyInput20 = ".";
 var keyInput21 = "/";
const mainKey = document.querySelector(".key");
const Btn61 = document.querySelector('.BTN61');
const Start = document.querySelector('.Start');
const sBtn = document.querySelector(".s-btn");
const form = document.querySelector('.keyboard');
const lform = document.querySelector(".lkeyboard");
keyInput.setAttribute('hidden','');
mainKey.setAttribute('hidden', '');
const P = document.querySelector('.Rotating');
const P2 = document.querySelector('.useH');
var S = new Audio('BackS.ogg');
function SoundB1(){
  var Btn1 = new Audio('KeySound/SOUND BTN1.ogg');
  Btn1.play();
}
function SoundB2(){
  var Btn2 = new Audio('KeySound/SOUND BTN2.ogg');
  Btn2.play();
}
function SoundB3(){
  var Btn3 = new Audio('KeySound/SOUND BTN3.ogg');
  Btn3.play();
}
function SoundB4(){
  var Btn4 = new Audio('KeySound/SOUND BTN4.ogg');
  Btn4.play();
}
function SoundB5(){
  var Btn5 = new Audio('KeySound/SOUND BTN5.ogg');
  Btn5.play();
}
function SoundB6(){
  var Btn6 = new Audio('KeySound/SOUND BTN6.ogg');
  Btn6.play();
}
function SoundB7(){
  var Btn7 = new Audio('KeySound/SOUND BTN7.ogg');
  Btn7.play();
}
function SoundB8(){
  var Btn8 = new Audio('KeySound/SOUND BTN8.ogg');
  Btn8.play();
}
function SoundB9(){
  var Btn9 = new Audio('KeySound/SOUND BTN9.ogg');
  Btn9.play();
}
function SoundB10(){
  var Btn10 = new Audio('KeySound/SOUND BTN10.ogg');
  Btn10.play();
}
function SoundB11(){
  var Btn11 = new Audio('KeySound/SOUND BTN11.ogg');
  Btn11.play();
}
function SoundB12(){
  var Btn12 = new Audio('KeySound/SOUND BTN12.ogg');
  Btn12.play();
}
function SoundB13(){
  var Btn13 = new Audio('KeySound/SOUND BTN13.ogg');
  Btn13.play();
}
function SoundB14(){
  var Btn14 = new Audio('KeySound/SOUND BTN14.ogg');
  Btn14.play();
}
function SoundB15(){
  var Btn15 = new Audio('KeySound/SOUND BTN15.ogg');
  Btn15.play();
}
function SoundB16(){
  var Btn16 = new Audio('KeySound/SOUND BTN16.ogg');
  Btn16.play();
}
function SoundB17(){
  var Btn17 = new Audio('KeySound/SOUND BTN17.ogg');
  Btn17.play();
}
function SoundB18(){
  var Btn18 = new Audio('KeySound/SOUND BTN18.ogg');
  Btn18.play();
  keyInput.value += keyInput1;
}
function SoundB19(){
  var Btn19 = new Audio('KeySound/SOUND BTN19.ogg');
  Btn19.play();
  keyInput.value += keyInput2;
}
function SoundB20(){
  var Btn20 = new Audio('KeySound/SOUND BTN3.ogg');
  Btn20.play();
  keyInput.value += keyInput3;
}
function SoundB21(){
  var Btn21 = new Audio('KeySound/SOUND BTN21.ogg');
  Btn21.play();
  keyInput.value += keyInput4;
}
function SoundB22(){
  var Btn22 = new Audio('KeySound/SOUND BTN22.ogg');
  Btn22.play();
  keyInput.value += keyInput5;
}
function SoundB23(){
  var Btn23 = new Audio('KeySound/SOUND BTN23.ogg');
  Btn23.play();
  keyInput.value += keyInput6;
}
function SoundB24(){
  var Btn24 = new Audio('KeySound/SOUND BTN24.ogg');
  Btn24.play();
  keyInput.value += keyInput7;
}
function SoundB25(){
  var Btn25 = new Audio('KeySound/SOUND BTN25.ogg');
  Btn25.play();
  keyInput.value += keyInput8;
}
function SoundB26(){
  var Btn26 = new Audio('KeySound/SOUND BTN26.ogg');
  Btn26.play();
  keyInput.value += keyInput9;
}
function SoundB27(){
  var Btn27 = new Audio('KeySound/SOUND BTN27.ogg');
  Btn27.play();
  keyInput.value += keyInput10;
}
function SoundB28(){
  var Btn28 = new Audio('KeySound/SOUND BTN28.ogg');
  Btn28.play();
  keyInput.value += keyInput11;
}
function SoundB29(){
  var Btn29 = new Audio('KeySound/SOUND BTN29.ogg');
  Btn29.play();
  keyInput.value += keyInput12;
}
function SoundB30(){
  var Btn30 = new Audio('KeySound/SOUND BTN30.ogg');
  Btn30.play();
  keyInput.value += keyInput13;
}
function SoundB31(){
  var Btn31 = new Audio('KeySound/SOUND BTN Delete.ogg');
  Btn31.play();
  keyInput.value = keyInput.value.slice(0, -1);
}
function SoundB32(){
  var Btn32 = new Audio('KeySound/SOUND BTN Delete.ogg');
  Btn32.play();
}
function SoundB33(){
  var Btn33 = new Audio('KeySound/SOUND BTN32.ogg');
  Btn33.play();
}
function SoundB34(){
  var Btn34 = new Audio('KeySound/SOUND BTN34.ogg');
  Btn34.play();
  keyInput.value += 'Q'
}
function SoundB35(){
  var Btn35 = new Audio('KeySound/SOUND BTN35.ogg');
  Btn35.play();
  keyInput.value += 'W';
}
function SoundB36(){
  var Btn36 = new Audio('KeySound/SOUND BTN36.ogg');
  Btn36.play();
  keyInput.value += 'E';
}
function SoundB37(){
  var Btn37 = new Audio('KeySound/SOUND BTN37.ogg');
  Btn37.play();
  keyInput.value += 'R';
}
function SoundB38(){
  var Btn38 = new Audio('KeySound/SOUND BTN38.ogg');
  Btn38.play();
  keyInput.value += 'T';
}
function SoundB39(){
  var Btn39 = new Audio('KeySound/SOUND BTN39.ogg');
  Btn39.play();
  keyInput.value += 'Y';
}
function SoundB40(){
  var Btn40 = new Audio('KeySound/SOUND BTN40.ogg');
  Btn40.play();
  keyInput.value += 'U';
}
function SoundB41(){
  var Btn41 = new Audio('KeySound/SOUND BTN41.ogg');
  Btn41.play();
  keyInput.value += 'I';
}
function SoundB42(){
  var Btn42 = new Audio('KeySound/SOUND BTN42.ogg');
  Btn42.play();
  keyInput.value += 'O';
}
function SoundB43(){
  var Btn43 = new Audio('KeySound/SOUND BTN43.ogg');
  Btn43.play();
  keyInput.value += 'P';
}
function SoundB44(){
  var Btn44 = new Audio('KeySound/SOUND BTN44.ogg');
  Btn44.play();
  keyInput.value += keyInput14;
}
function SoundB45(){
  var Btn45 = new Audio('KeySound/SOUND BTN45.ogg');
  Btn45.play();
  keyInput.value += keyInput15;
}
function SoundB46(){
  var Btn46 = new Audio('KeySound/SOUND BTN ENTER.ogg');
  Btn46.play();
  keyInput.value = '\n';
}
function SoundB47(){
  var Btn47 = new Audio('KeySound/SOUND BTN47.ogg');
  Btn47.play();
}
function SoundB48(){
  var Btn48 = new Audio('KeySound/SOUND BTN48.ogg');
  Btn48.play();
}
function SoundB49(){
  var Btn49 = new Audio('KeySound/SOUND BTN49.ogg');
  Btn49.play();
  keyInput.value += 'A';
}
function SoundB50(){
  var Btn50 = new Audio('KeySound/SOUND BTN50.ogg');
  Btn50.play();
  keyInput.value += 'S';
}
function SoundB51(){
  var Btn51 = new Audio('KeySound/SOUND BTN51.ogg');
  Btn51.play();
  keyInput.value += 'D';
}
function SoundB52(){
  var Btn52 = new Audio('KeySound/SOUND BTN52.ogg');
  Btn52.play();
  keyInput.value += 'F';
}
function SoundB53(){
  var Btn53 = new Audio('KeySound/SOUND BTN53.ogg');
  Btn53.play();
  keyInput.value += 'G';
}
function SoundB54(){
  var Btn54 = new Audio('KeySound/SOUND BTN54.ogg');
  Btn54.play();
  keyInput.value += 'H';
}
function SoundB55(){
  var Btn55 = new Audio('KeySound/SOUND BTN55.ogg');
  Btn55.play();
  keyInput.value += 'J';
}
function SoundB56(){
  var Btn56 = new Audio('KeySound/SOUND BTN56.ogg');
  Btn56.play();
  keyInput.value += 'K';
}
function SoundB57(){
  var Btn57 = new Audio('KeySound/SOUND BTN46.ogg');
  Btn57.play();
  keyInput.value += 'L';
}
function SoundB58(){
  var Btn58 = new Audio('KeySound/SOUND BTN58.ogg');
  Btn58.play();
  keyInput.value += keyInput16;
}
function SoundB59(){
  var Btn59 = new Audio('KeySound/SOUND BTN59.ogg');
  Btn59.play();
  keyInput.value += keyInput17;
}
function SoundB60(){
  var Btn60 = new Audio('KeySound/SOUND BTN60.ogg');
  Btn60.play();
  keyInput.value += keyInput18;
}
function SoundB61(){
  var Btn61 = new Audio('KeySound/SOUND BTN61.ogg');
  Btn61.play();
}
function SoundB62(){
  var Btn62 = new Audio('KeySound/SOUND BTN62.ogg');
  Btn62.play();
}
function SoundB63(){
  var Btn63 = new Audio('KeySound/SOUND BTN63.ogg');
  Btn63.play();
}
function SoundB64(){
  var Btn64 = new Audio('KeySound/SOUND BTN64.ogg');
  Btn64.play();
  keyInput.value += '/';
}
function SoundB65(){
  var Btn65 = new Audio('KeySound/SOUND BTN65.ogg');
  Btn65.play();
  keyInput.value += 'Z';
}
function SoundB66(){
  var Btn66 = new Audio('KeySound/SOUND BTN66.ogg');
  Btn66.play();
  keyInput.value += 'X';
}
function SoundB67(){
  var Btn67 = new Audio('KeySound/SOUND BTN67.ogg');
  Btn67.play();
  keyInput.value += 'C';
}
function SoundB68(){
  var Btn68 = new Audio('KeySound/SOUND BTN68.ogg');
  Btn68.play();
  keyInput.value += 'V';
}
function SoundB69(){
  var Btn69 = new Audio('KeySound/SOUND BTN69.ogg');
  Btn69.play();
  keyInput.value += 'B';
}
function SoundB70(){
  var Btn70 = new Audio('KeySound/SOUND BTN70.ogg');
  Btn70.play();
  keyInput.value += 'N';
}
function SoundB71(){
  var Btn71 = new Audio('KeySound/SOUND BTN71.ogg');
  Btn71.play();
  keyInput.value += 'M';
}
function SoundB72(){
  var Btn72 = new Audio('KeySound/SOUND BTN72.ogg');
  Btn72.play();
  keyInput.value += keyInput19;
}
function SoundB73(){
  var Btn73 = new Audio('KeySound/SOUND BTN73.ogg');
  Btn73.play();
  keyInput.value += keyInput20;
}
function SoundB74(){
  var Btn74 = new Audio('KeySound/SOUND BTN74.ogg');
  Btn74.play();
  keyInput.value += keyInput21;
}
function SoundB75(){
  var Btn75 = new Audio('KeySound/SOUND BTN75.ogg');
  Btn75.play();
}
function SoundB76(){
  var Btn76 = new Audio('KeySound/SOUND BTN76.ogg');
  Btn76.play();
}
function SoundB77(){
  var Btn77 = new Audio('KeySound/SOUND BTN77.ogg');
  Btn77.play();
}
function SoundB78(){
  var Btn61 = new Audio('KeySound/SOUND BTN61.ogg');
  Btn61.play();
}
function SoundB79(){
  var Btn62 = new Audio('KeySound/SOUND BTN62.ogg');
  Btn62.play();
}
function SoundB80(){
  var Btn63 = new Audio('KeySound/SOUND BTN63.ogg');
  Btn63.play();
}
function SoundB81(){
  var Btn61 = new Audio('KeySound/SOUND BTN61.ogg');
  Btn61.play();
}
function SoundB82(){
  var Btn62 = new Audio('KeySound/SOUND BTN45.ogg');
  Btn62.play();
  keyInput.value += " ";
}
function SoundB83(){
  var Btn63 = new Audio('KeySound/SOUND BTN63.ogg');
  Btn63.play();
}
function SoundB84(){
  var Btn61 = new Audio('KeySound/SOUND BTN61.ogg');
  Btn61.play();
}
function SoundB85(){
  var Btn62 = new Audio('KeySound/SOUND BTN62.ogg');
  Btn62.play();
}
function SoundB86(){
  var Btn63 = new Audio('KeySound/SOUND BTN63.ogg');
  Btn63.play();
}
function SoundB87(){
  var Btn61 = new Audio('KeySound/SOUND BTN61.ogg');
  Btn61.play();
}
function SoundB88(){
  var Btn62 = new Audio('KeySound/SOUND BTN62.ogg');
  Btn62.play();
}
for(i=0; i<lform.children.length; i++){
  lform[i].setAttribute('type', 'button');
}
var Formchild = form.children;
for(i=0; i<Formchild.length; i++){
  Formchild[i].setAttribute('type', 'button');
}
Start.addEventListener('click', ()=>{
  S.play();
  if(screen.orientation.type == 'portrait-primary'){
    document.querySelector('body').style.cssText = "background: url('Background/Backkeyboard.webp'); background-size: 100%;"
    P.innerText = 'For Using Please Rotate the Screen  \n And For Working Right App Turn off Dark Mod :)';
    P.style.cssText = "animation: Attention 2s linear forwards"
    P2.innerText = 'For Better Experience Use From Headphone :)';
    P2.style.cssText = "animation: pAnim 4s linear forwards"
  }
 if(screen.orientation.type == 'landscape-primary'){
   Btn61.addEventListener('click',()=>{
      document.querySelector('body').classList.toggle('SwichBorder');
    })
    document.querySelector('body').style.cssText = "background: black;"
    S.pause();
    sBtn.remove();
    P.remove();
    P2.remove();
    mainKey.removeAttribute('hidden');
    keyInput.removeAttribute('hidden');
  }
 if(screen.orientation.type == 'landscape-secondary'){
    Btn61.addEventListener('click',()=>{
      document.querySelector('body').classList.toggle('SwichBorder');
    })
    document.querySelector('body').style.cssText = "background: black;"
    S.pause();
    sBtn.remove();
    P.remove();
    P2.remove();
    mainKey.removeAttribute('hidden');
    keyInput.removeAttribute('hidden');
  }
  screen.orientation.addEventListener("change", () => {
    if(screen.orientation.type + " " + screen.orientation.angle == 'landscape-primary 90'){
      Btn61.addEventListener('click',()=>{
        document.querySelector('body').classList.toggle('SwichBorder');
      })
      document.querySelector('body').style.cssText = "background: black;"
      S.pause();
      sBtn.remove();
      P.setAttribute('hidden', '');
      P2.remove();
      mainKey.removeAttribute('hidden');
      keyInput.removeAttribute('hidden');
      if(document.querySelector('.Perror')!=null){
        document.querySelector('.Perror').remove();
      }
    }
    if(screen.orientation.type + " " + screen.orientation.angle == 'portrait-primary 0'){
      var PE = document.createElement('p');
      document.querySelector('.mainBox').append(PE);
      PE.className = 'Perror';
      var Perror = document.querySelector('.Perror');
      document.querySelector('body').style.cssText = "background: black;"
      Perror.style.cssText = "animation: Attention 2s linear forwards; color: red"
      Perror.innerText= "ERROR :( \n For Using Please Rest The App or Rotate Your Mobile Screen ;)"
      mainKey.setAttribute('hidden', '');
      keyInput.setAttribute('hidden','');
      Btn61.addEventListener('click',()=>{
        document.querySelector('body').classList.toggle('SwichBorder');
      })
    }
    if(screen.orientation.type + " " + screen.orientation.angle == 'landscape-secondary 270'){
      Btn61.addEventListener('click',()=>{
        document.querySelector('body').classList.toggle('SwichBorder');
      })
      document.querySelector('body').style.cssText = "background: black;"
      S.pause();
      sBtn.remove();
      P.remove();
      P2.remove();
      mainKey.removeAttribute('hidden');
      keyInput.removeAttribute('hidden');
      if(document.querySelector('.Perror')!=null){
        document.querySelector('.Perror').remove();
      }
    }
  });
});