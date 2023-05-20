import createList from './createList';
import createItem from './createItem';
import saveLocal from './saveLocal';
import loadLocal from './loadLocal';
import render from './render';

import '../styles/reset.css';
import '../styles/style.css';


const listObject = createList();
loadLocal(listObject);

// eslint-disable-next-line no-unused-vars
const item = createItem('title', 'description', 'due', 'prior');


saveLocal(listObject);
 
render();
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