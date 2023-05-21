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
const item2 = createItem('Hello', 'world', '9/1', 'high');
const item3 = createItem('goodbye', 'bluesky', '1/1', 'regular');

// listObject.addItem(item);
// listObject.addItem(item2);
// listObject.addItem(item3);

console.dir(localStorage);

render(listObject.getList());

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