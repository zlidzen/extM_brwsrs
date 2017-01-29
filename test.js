// window.onload = function () {
//   var el = document.getElementById("btn_action");
//   var at = el.getAttribute("state");
//   var txt_out = document.getElementById("out_area");

// }
// var hero = {
//   name: 0,
//   level: 1,
//   health: 0,
//   strength: 0,
//   endurance: 0,
//   attack: "6d1",
//   block: "6d1",
//   experience: 0
// };

var monstr = {
  name: 0,
  level: 1,
  health: 0,
  strength: 0,
  endurance: 0,
  attack: "6d1",
  block: "6d1"
};

function load_hero() {

var hero = {
  name: 0,
  level: 1,
  health: 0,
  strength: 0,
  endurance: 0,
  attack: "6d1",
  block: "6d1",
  experience: 0
};

  var block_h = document.getElementById('Name_ex');
  block_h.innerHTML = hero.name;
  
  block_h = document.getElementById('Level_ex');
  block_h.innerHTML = hero.level;

  block_h = document.getElementById('Health_ex');
  block_h.innerHTML = hero.health;

  block_h = document.getElementById('Strength_ex');
  block_h.innerHTML = hero.strength;

  block_h = document.getElementById('Endurance_ex');
  block_h.innerHTML = hero.endurance;

  block_h = document.getElementById('Attack_ex');
  block_h.innerHTML = hero.attack;

  block_h = document.getElementById('Block_ex');
  block_h.innerHTML = hero.block;

  block_h = document.getElementById('Experience_ex');   
  block_h.innerHTML = hero.experience;
}

function definition() {
   el = document.getElementById("btn_action");   
   txt_out = document.getElementById("out_area");
   dbtn = document.getElementById("do_btn");
   at = dbtn.getAttribute("Value");
}

function kubik(xDot, dCount) {
  var x = 0;  
  for (var i = 0; i < dCount; i++)
    {
      x = x + Math.floor(Math.random() * xDot) + 1;
    }
  return x;
}

function checkedDotAt(cDot) {
  var gr = document.getElementsByName('shbx');
  for(var i=0; i<gr.length; i++)
  { 
    if (i != cDot) { gr[i].checked = false; }
  }  
}

function checkedDotBlk(cDot) {
  var gr = document.getElementsByName('shbx');
  s = 0;
  for(var i=0; i<gr.length; i++)
  { 
    if (gr[i].checked) { s++; }
  }  
  switch (s) {
    case 1: { iSaveDot1 = cDot; break; } 
    case 2: { iSaveDot2 = cDot; break; }
    case 3: {
      switch (iSaveDot2){
        case  0: { gr[0].checked = false; break;}
        case  1: { gr[1].checked = false; break;}
        case  2: { gr[2].checked = false; break;}
        case  3: { gr[3].checked = false; break;}
        case  4: { gr[4].checked = false; break;}
      }
      switch (cDot) {
        case  0: { gr[0].checked = true; break;}
        case  1: { gr[1].checked = true; break;}
        case  2: { gr[2].checked = true; break;}
        case  3: { gr[3].checked = true; break;}
        case  4: { gr[4].checked = true; break;}
      }                
      iSaveDot2 = cDot;
      break;
    }//3
  }//switch
}

// Head - 0
// Arms - 1
// Body - 2
// Down_Body - 3
// Legs - 4

function chbxEvent(event_p) {    
    var st = getState();
    var el_p = document.getElementById(event_p);
    if (el_p.checked)
      {
          switch(event_p){
            case 'Head_p':{
              if (st == 1) checkedDotAt(0);
              else checkedDotBlk(0);
              break;}
            case 'Arms_p':{
              if (st == 1) checkedDotAt(1);
              else checkedDotBlk(1);
              break;}
            case 'Body_p':{
              if (st == 1) checkedDotAt(2);
              else checkedDotBlk(2);
              break;}
            case 'Body_down_p':{
              if (st == 1) checkedDotAt(3);
              else checkedDotBlk(3);
              break;}
            case 'Legs_p':{
              if (st == 1) checkedDotAt(4);
              else checkedDotBlk(4);
              break;}
          }
    }
}

// function action_btn() {
//   definition();

//   if (at == 'a') {    
//     el.setAttribute("state", "p"); 
//     el.innerHTML = "protect";   
//   } else if (at == 'p') {
//     el.setAttribute("state", "a");
//     el.innerHTML = "attack";  
//   }
//   var e = kubik(6, 1);   
//   out(e);
// }

function out(str) {
  txt_out.innerHTML = txt_out.innerHTML + str + "&#13;&#10;";
  txt_out.scrollTop = txt_out.scrollHeight;
}

function getState() {
  var state = document.getElementById("do_btn").getAttribute("Value");
  if (state == "Action") { return 0; }
  else if (state == "Attack") { return 1; }
  else return 2;
}

function setState(){
  var d = document.getElementById("do_btn");
  var s = getState();  
  var str = "Attack";

  if (s == 0) { 
    var r = kubik(2,1);
    if (r == 2) { str = "Defense"; }
  } else if (s == 1) { str = "Defense"; }
  d.setAttribute("Value", str);
}

function new_btn()
{
  document.getElementById("do_btn").setAttribute("Value", "Action");
  document.getElementById("do_btn").setAttribute("disabled","");
  var gr = document.getElementsByName('shbx');
  for(var i=0; i<gr.length; i++)
  {
    gr[i].setAttribute("disabled","");
    gr[i].checked = false;    
  } 
  //alert("Hi"); 
}

// процедура стартовой кнопки
function start_btn()
{
  //alert("Hi");
  document.getElementById("do_btn").removeAttribute("disabled");
  var gr = document.getElementsByName('shbx');
  for(var i=0; i<gr.length; i++)
  {
    gr[i].removeAttribute("disabled");  
  } 
  setState();
  load_hero();
}
