import createList from './createList';
import createItem from './createItem';

import './styles/reset.css';
import './styles/style.css';


const db = createList();
const i = createItem('title', 'description', 'due date', 'priority');

db.addItem(i);

db.getList()[0].editValue('title', 'HelloWorld');

// eslint-disable-next-line no-debugger
debugger;