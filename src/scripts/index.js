import createList from './createList';
import createItem from './createItem';
import saveLocal from './saveLocal';
import loadLocal from './loadLocal';

import '../styles/reset.css';
import '../styles/style.css';


const listObject = createList();
loadLocal(listObject);

const item = createItem('title', 'description', 'due', 'prior');


saveLocal(listObject);

// eslint-disable-next-line no-debugger



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