import createList from './createList';
import saveLocal from './saveLocal';
import loadLocal from './loadLocal';
import render from './render';
import handleForm from './handleForm';



import '../styles/reset.css';
import '../styles/style.css';

// MAKE FORM APPEAR/DISAPPEAR
document.querySelector('#form-display').addEventListener('click', ()=>{
  const form = document.querySelector('form');
  form.getAttribute('class');
  switch (form.getAttribute('class')){
    case '':
      form.className = 'hidden';
      break;
    case 'hidden':
      form.className = '';
      break;
  default:
    break;
  }
});

const listObject = createList();
loadLocal(listObject);
render(listObject.getList());

// Handle Form Submit
document.querySelector('#form-button').addEventListener('click', (event) =>{
  const newItem = handleForm(event);
  listObject.addItem(newItem);
  saveLocal(listObject);
  render(listObject.getList());
});


document.getElementById('card-container').addEventListener('click', (event)=>{
  const {target} = event;

  if(target.className === 'button-checkbox'){
    const i = target.closest('.card').dataset.index;
    if(listObject.getList()[i].getValues().complete !== true){listObject.getList()[i].editValue('complete', true);}
    else{listObject.getList()[i].editValue('complete', false);}
    console.log(listObject.getList()[i].getValues().complete);
    render(listObject.getList());
    saveLocal(listObject);
  }
  else if(target.className === 'button-trash'){
    const i = target.closest('.card').dataset.index;
    listObject.deleteItem(i);
    render(listObject.getList());
    saveLocal(listObject);
  }
  else if(target.className === 'button-drop'){
    if(target.closest('.card').className === 'card'){
      target.closest('.card').className = 'card hidden';
    }
    else{
      target.closest('.card').className = 'card';
    }
  }
});









/**
 * renderPage();
 * 
 * renderForm();
 * 
 * listObject = createList();
 * 
 * loadLocal();
 * 
 * renderItems();
 * 
 * 
 * !! ON SUBMIT FORM !!
 * 
 * formHandler(event)
 * 
 * saveLocal(listObject.getList())
 * 
 */