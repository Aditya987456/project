const form=document.querySelector('form')
//form pe bahut sare event hota hai ... here we wants only submit when user click on calculate form submit.

form.addEventListener('submit', (ev)=>{

   /*    jab bhi form submit hota hai then wo post type ya get type me submit hota hai aur uski val url ke form me server pe chali jati hai iski yahi dafault work ko rokna padega becz hamme val server pe to bhejna hai hi nahhhhhiiiiiii.  */

   ev.preventDefault();

   //height and weight should be defined inside event listner if we define outside then when we click onsubmit then after reload the value in height and weight field will shows empty.

   height=parseInt(document.querySelector('#height').value)   //parseInt -> val will typecast into int
   weight=parseInt(document.querySelector('#weight').value)

   const message=document.querySelector('#message')
   const result=document.querySelector('#results')

   //checks for height and weight.
   if( height==='' || height<0 || isNaN(height)){
     message.innerHTML=`Please enter a valid height`
     results.innerHTML=`Your entered value is ${height}`
   }
   else if(weight==='' || weight<0 || isNaN(weight)){
    message.innerHTML=`Please enter a valid weight`
    results.innerHTML=`Your entered value is ${weight}`
   }else{
     const bmi=(weight / ((height * height) / 10000)).toFixed(2);// to fixed is to upto 2 digit after point.


   //Under Weight = Less than 18.6
   if(bmi<18.6){
    message.innerHTML=`Oh No! You are in Under Weight category.`
    results.innerHTML=`Your BMI value is ${bmi}`
   }

   //Overweight = Greater than 24.9
   else if(bmi>24.9){
    message.innerHTML=`Oh No! You are in Overweight category.`
    results.innerHTML=`Your BMI value is ${bmi}`
   }
   //Normal Range = 18.6 and 24.9
   else{
    message.innerHTML=`Congrats! You are in Normal range.`
    results.innerHTML=`Your BMI value is <span>${bmi}</span>`

   }     
   }

} )
