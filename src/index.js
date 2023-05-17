import createList from './createList';
import createItem from './createItem';
import saveLocal from './saveLocal';

import './styles/reset.css';
import './styles/style.css';

const listObject = createList();

for(let i = 0; i < 5; i += 1){
  listObject.addItem(createItem(`title: ${i}`, 'description', 'due date', 'priority'));
}

saveLocal(listObject.getList());
// eslint-disable-next-line no-debugger
debugger;


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