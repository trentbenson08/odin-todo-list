import createList from './createList';
import createItem from './createItem';
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
  render(listObject.getList());
});








saveLocal(listObject);

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