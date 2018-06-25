function domSearch(selector,isCaseSensitive) {
    let mainDiv = $(selector)
        .addClass('items-control');
    let fragment = document.createDocumentFragment();
    let addField = $('<input>');
    let addButton = $('<a>');
    let searchField = $('<input>');
    let resultList = $('<ul>');

    $('<div>')
        .addClass('add-controls')
        .append($('<label>Enter text: </label>')
            .append(addField))
        .append(addButton
            .addClass('button')
            .text('Add')
            .css('display', 'inline-block'))
        .appendTo(fragment);

    $('<div>')
        .addClass('search-controls')
        .append($('<label>Search: </label>'))
        .append(searchField)
        .appendTo(fragment);

    $('<div>')
        .addClass('result-controls ')
        .append(resultList
            .addClass('items-list'))
        .appendTo(fragment);

    mainDiv.append(fragment);


    addButton.click(function () {
        if (addField.val() !== ''){
            let removeBtn = $('<a class="button">X</a>');
            $('<li class="list-item">'+
                '<strong>'+addField.val().trim()+'</strong>'+
                '</li>')
                .prepend(removeBtn)
                .appendTo(resultList);

            removeBtn.on('click', function () {
                $(this).parent().remove();
            });
            addField.val('');
        }
    });

    searchField.on('input', function () {
        let target = searchField.val();
        resultList.children().each((i,e) => {
            let liText = $(e.children[1]).text();
            if (!isCaseSensitive){
                target = target.toLowerCase();
                liText = liText.toLowerCase();
            }

            if (liText.indexOf(target) === -1){
                $(e).css('display', 'none');
            } else{
                $(e).css('display', 'block');
            }
        });
    });
}