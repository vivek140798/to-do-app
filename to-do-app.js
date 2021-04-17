eventListners();
function eventListners(){
  document.querySelector('form').addEventListener('submit',appender);
  document.getElementById('erase').addEventListener('click',eraseList);
  document.querySelector('ul').addEventListener('click',actionOnATask);
}

function appendTask(task){
  let li = document.createElement('li');
  li.innerHTML = `<input class="marker" type="checkbox"><label> ${task}</label><span class="erase">×</span>`;
  document.querySelector('ul').appendChild(li);
  document.querySelector('.to-do-list').style.display = 'block';
}

function actionOnATask(e){
  if(e.target.className == 'erase'){
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  }
  else {
    if(e.target.className == 'marker'){
      if(e.target.checked){
        e.target.nextSibling.style.textDecoration = "line-through";
      }else {
        e.target.nextSibling.style.textDecoration = "none";
      }
    }  
  }
}

function eraseList(e){
  document.querySelector('ul').innerHTML = '';
}

function appender(e){
  e.preventDefault();
  let entry = document.querySelector('input');
  if(entry.value != ''){
    appendTask(entry.value);
  }
  entry.value = '';
}
