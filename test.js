function definition(){
el = document.getElementById("btn_action");
at = el.getAttribute("state");
}

// function ch_cl(){
//  var gr = document.getElementsByName('shbx');
//  for(var i=0; i<gr.length; i++)
//     gr[i].checked = false; 
// }

function checkedDotAt(cDot)
{
  var gr = document.getElementsByName('shbx');
  for(var i=0; i<gr.length; i++)
  { 
    if (i != cDot) { gr[i].checked = false; }
  }  
}

function checkedDotBlk(cDot)
{
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

function chbxEvent(event_p){
    definition();
    el_p = document.getElementById(event_p);
    if (el_p.checked)
      {
          switch(event_p){
            case 'Head_p':{
              if (at == 'a') checkedDotAt(0);
              else checkedDotBlk(0);
              break;}
            case 'Arms_p':{
              if (at == 'a') checkedDotAt(1);
              else checkedDotBlk(1);
              break;}
            case 'Body_p':{
              if (at == 'a') checkedDotAt(2);
              else checkedDotBlk(2);
              break;}
            case 'Body_down_p':{
              if (at == 'a') checkedDotAt(3);
              else checkedDotBlk(3);
              break;}
            case 'Legs_p':{
              if (at == 'a') checkedDotAt(4);
              else checkedDotBlk(4);
              break;}
          }
    }
}

function action_btn() {
  definition();
  if (at == 'a') {
    el.setAttribute("state", "p"); 
    el.innerHTML = "protect";   
  } else if (at == 'p') {
    el.setAttribute("state", "a");
    el.innerHTML = "attack";  
  }
}