function addItem() {
    let textInput = document.getElementById('newItemText');
    let valueInput = document.getElementById('newItemValue');
    let optionText = textInput.value + ' ' + valueInput.value;
    let option = document.createElement('option');
    option.textContent = optionText;
    document.getElementById('menu').appendChild(option);
    textInput.value = "";
    valueInput.value = "";
}