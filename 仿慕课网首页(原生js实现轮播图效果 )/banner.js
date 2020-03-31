window.onload = function() {
    //var item = document.getElementsByClassName('item_box');
    //var hidden = document.getElementsByClassName('hidden_meu');
    var banner_container= document.getElementById('banner_container');
    var list = document.getElementById('banner_list');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var timer;
    function animate(offset) {
        banner_list.style.transition = '0.5s';
        //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
        //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
        var newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + 'px';
        
         if(newLeft>-1350){
             list.style.left = -5400+"px";
         }
         if(newLeft<-5400){
                list.style.left = -1350+"px"; 
            }
    }
    function play(){
        //重复执行的定时器
        timer = setInterval(function(){
         
            next.onclick();
        },3000)
    }
    function stop(){
        clearInterval(timer);
    }
    prev.onclick = function() {          
         animate(-1350);
    }
    next.onclick = function() {  
        animate(1350);
    }
     banner_container.onmouseover=stop;
     banner_container.onmouseout=play;
     play();
     //隐藏和显示
     let hiddenMenus = {};
     const menu =  document.querySelector('.meu_container');
     let lastBlockEl = null;
     let lastMenuItem = null;
     document.querySelectorAll('.hidden_meu').forEach( el => {
         hiddenMenus[el.dataset.name] = el; // dataset和html里元素的data-属性有关，这里就是hidden_meu元素的data-name属性
     })
 
 
     menu.addEventListener('mouseover', (e) => {
         const name = e.target.dataset.name;
         if(e.target.className === 'item_box' && name) {
             if(lastMenuItem === e.target) {
                 return;
             }
             if(lastBlockEl !== null) {
                 lastBlockEl.style.display = 'none';
             }
             hiddenMenus[name].style.display = 'block';
             lastMenuItem = e.target;
             lastBlockEl = hiddenMenus[name];
         }
     })
     menu.addEventListener('mouseleave', (e) => {
         lastMenuItem = null;
         lastBlockEl.style.display = 'none';
         lastBlockEl = null;
     })

/*     item[0].onmouseover = function(){
        hidden[0].style.display = 'block';
        // console.log(i);
    }
    item[0].onmouseout = function(){
        hidden[0].style.display = 'none';
    }
    item[1].onmouseover = function(){
        hidden[1].style.display = 'block';
        // console.log(i);
    }
    item[1].onmouseout = function(){
        hidden[1].style.display = 'none';
    }
    item[2].onmouseover = function(){
        hidden[2].style.display = 'block';
        // console.log(i);
    }
    item[2].onmouseout = function(){
        hidden[2].style.display = 'none';
    }
    item[3].onmouseover = function(){
        hidden[3].style.display = 'block';
        // console.log(i);
    }
    item[3].onmouseout = function(){
        hidden[3].style.display = 'none';
    }            
    item[4].onmouseover = function(){
        hidden[4].style.display = 'block';
        // console.log(i);
    }
    item[4].onmouseout = function(){
        hidden[4].style.display = 'none';
    }
    item[5].onmouseover = function(){
        hidden[5].style.display = 'block';
        // console.log(i);
    }
    item[5].onmouseout = function(){
        hidden[5].style.display = 'none';
    }
    item[6].onmouseover = function(){
        hidden[6].style.display = 'block';
        // console.log(i);
    }
    item[6].onmouseout = function(){
        hidden[6].style.display = 'none';
    }    */  
     
}  
    
    // console.log(item.length);
    // console.log(hidden.length);
