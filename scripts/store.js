import item from './item.js';
const hideCheckedItems = false;
const items = [];

function findById (id) {
    items.find(item => item.id === id);
    return id;
}

function addItem (name) {
    try {
        item.validateName(name);
        let newItem = item.create(name);
        this.items.push(newItem);
    }
    catch(e) {
        console.error (`Cannot add item: ${e.message}`);
    }
}

function findAndToggleChecked (id) {
    let foundItem = this.items.find(item => item.id === id);
    foundItem.checked = !foundItem.checked;
}

function findAndDelete (id) {
   //const newItems = this.items.filter(currentItem => currentItem.id !== id); 
    //console.log(newItems);
    const index = this.items.findIndex(item => item.id === id);
    this.items.splice(index, 1);
}

const toggleCheckedFilter = function () {
    this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
    toggleCheckedFilter,
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndDelete,
};