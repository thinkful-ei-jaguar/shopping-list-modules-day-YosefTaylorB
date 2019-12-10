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
    let foundItem = this.findById(id);
    foundItem.checked = !foundItem.checked;
}

function findAndDelete (id) {
    this.items.filter(currentItem => currentItem.id !== id); 
}

export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndDelete
};