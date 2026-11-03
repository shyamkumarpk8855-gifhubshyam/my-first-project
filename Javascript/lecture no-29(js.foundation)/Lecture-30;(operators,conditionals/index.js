//Arithmetic operators

//let num1=2;
//let num2=4;

//console.log(num1 +num2);//6
//console.log(num1 -num2);//-2
//console.log(num1 *num2);//8
//console.log(num2 /num1);//2
//console.log(num2 %num1);//0
//console.log(num1 **num2);//16



// case sensitive
//teeno variable different hai

//let Name="saif"
//let name="juhi"
//let Name="karan"



//let num=45;
//num++;
//console.log(++num); //46-->pre increment
//console.log(num++);//46
//console.log(num);//47

//console.log(--num);//44 ->pre-increment
//console.log(num--);//44
//console.log(num);//43

//let num=2;//Assignment operators start
//num+=5;
//console.log(num);

//let num=2;
//num+=5;
//console.log(num);
//num-=5;
//console.log(num);
//num*=5;
//console.log(num);

//num/=5;
//console.log(num);
//num%=5;
//console.log(num);
//num**=5;
//console.log(num);

//let num=2;
//num+=5;
//console.log(num);
//num-=5;
//console.log(num);
//num*=5;
//console.log(num);
//num/=5;
//console.log(num);
//num**=5;
//console.log(num);

//comparison operators-->always return boolean
//const num1=3;
//const num2=6;

//console.log(3>6)//f
//console.log(3<6)//T
//console.log(3>=6)//F
//console.log(3<=6)//T
//console.log(3==6)//F
//console.log(3!=6)//T

//loose equality

//console.log("5"==5);//T

//strict equality
//console.log("5"===5);

//console.log(true && false);
//console.log(true || false);

//const age=17;
//const hasId=true;
 
//const canEnterclub=age>=18 && hasId===true;
//console.log(canEnterclub);

//console.log(!56);
//console.log("Nishant"/60);
//console.log(typeof NaN);

//if (false) {
 //   console.log("In true block");
//}else{
  //  console.log("In false block");
//}

//const isLoggedIn=false

//if (isLoggedIn) {
  //  console.log("you can Like,comment");
//}else{
  //  console.log("please first login");
//}

//let temp=24
//if (temp>=25){
  //  console.log("Ac chala do");
//}else{
  //  console.log("Ac mat chalao");
//}

//let day="fri";

//if (day==="mon") {
  //  console.log("1st day of the week");
//} else if (day==="tue") {
  //  console.log("2nd day of the week");
//}else if (day==="wed") {
  //  console.log("3rd day of the week");
//}else if (day==="thu") {
  //  console.log("4th day of the week");
//}else if (day==="fri") {
  // console.log("5th day of the week");
//}else if (day==="sat") {
  //  console.log("6th day of the week");
//}else if (day==="sun") {
  //  console.log("7th day of week");
    
//}else{
  //  console.log("Wrong day");
//}

//const isLoggedIn=false;
//const issubscribed=true;

//if (isLoggedIn){
  //  if (issubscribed){
    //    console.log("you can access premimum content.");
    //}else{
      //  console.log("you dont have any premium plan to access this content.");
    //}
//}else{
 //   console.log("please login");
//}

//switch case

//const day="fri";

//switch (day) {
  //  case "mon":
    //    console.log("1st day of the week");
      //  break;
    //case "tue":
      //  console.log("2nd day of the week");
        //break;
    //default:
      //  console.log("wrong day");   
//}

const day="fri";

switch (day){
    case "mon":
        console.log("1st day of the week");
    case "tue":
        console.log("2nd day of the week");
    case "wed":
        console.log("3rd day of the week");
    case "thu":
        console.log("4th day of the week");
    case "fri":
        console.log ("5th day of the week");
    case "sat":
        console.log("6th day of the week");
    case "sun":
        console.log("7th day of the week");
    default:
        console.log("wrong day");


}