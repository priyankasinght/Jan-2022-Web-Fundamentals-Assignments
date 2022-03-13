let second = 59;
let minute = 4;

const timer = function(){
var sec_elem = document.getElementById('sec')
sec_elem.innerText = `${second} s`;
var min_elem = document.getElementById('min')
min_elem.innerText = `${minute} m`;

if(minute == 5){
    minute -=1;
}
else if(minute>0 && second >0){
    second-=1;
}

else if(minute>0 && second==0){
   minute -=1;
   second = 5;
}
else if(minute ==0 && second >0){
    second -=1;
}
 else if(minute== 0 && second ==0){
      clearInterval(id)
      
  }
}
var id = setInterval(timer, 1000)

const stop = function(){
    clearInterval(id);
}
var btn = document.getElementById('btn');
btn.addEventListener('click', stop);