import createList from './createList';
import saveLocal from './saveLocal';
import loadLocal from './loadLocal';
import render from './render';
import handleForm from './handleForm';
import { trash, drop } from './buttons';


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
drop(listObject);

// Handle Form Submit
document.querySelector('#form-button').addEventListener('click', (event) =>{
  const newItem = handleForm(event);
  listObject.addItem(newItem);
  saveLocal(listObject);
  render(listObject.getList());
  trash(listObject);
  drop(listObject);
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