import saveLocal from './saveLocal';
import render from './render';

export function trash(listObject){
  document.querySelectorAll('#button-trash').forEach(btn => btn.addEventListener('click', (event) => {
    const i = event.target.closest('.card').dataset.index;
    listObject.deleteItem(i);
    saveLocal(listObject);
    render(listObject.getList());
    trash(listObject);
  }));
}

export function drop(){
  const arr = document.querySelectorAll('#button-drop');
  arr.forEach(el => el.addEventListener('click', (event) =>{
    const div = event.target.closest('.card');
    if(div.classList.length === 2){
      div.className = 'card';
    }
    else{
      div.className = 'card hidden';
    }
  })
  );
  trash();
}

export function check(){
  const arr = document.querySelectorAll('#button-check');
  arr.forEach(el => el.addEventListener('click', (event) =>{

  }));
}
