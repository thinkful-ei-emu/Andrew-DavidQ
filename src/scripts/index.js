'use strict';
/* global shoppingList, cuid */

// eslint-disable-next-line no-unused-vars
import * as shoppingList from './shopping-list';
import $ from 'jquery';
import cuid from 'cuid';
import '../styles/index.css';
 const store = {
  items: [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ],
  hideCheckedItems: false,
  searchTerm: ''
};
export default store;
function main() {
  shoppingList.bindEventListeners();
  shoppingList.render();
}

$(main);
