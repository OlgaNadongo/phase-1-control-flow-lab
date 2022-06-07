function scuberGreetingForFeet(feet){
  // Write your code here!
  let cost;
  if(feet <= 400){
    cost="This one is on me!"
  }else if(feet>2000 && feet<=2500){
    cost="I will gladly take your thirty bucks."
  } else if(feet>2500){
    cost="No can do."
  }
  return cost
}

function ternaryCheckCity(city){
  // Write your code here!
  const cityMessage=
  city==='NYC'? "Ok, sounds good.": "No go.";
  return cityMessage;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
   let tipMessage;
   if(tip==="generous"){
     tipMessage="Thank you so much."
   }else if(tip==="not as generous"){
     tipMessage="Thank you."
   }
   else{
     tipMessage="Bye."
   }
   return tipMessage

}