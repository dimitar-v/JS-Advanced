function createBook(selector, title, author, isbn) {
    let div = $('<div>');
    let id = $('div button[Select]').length + 1;

    div.attr('id',`book${id}`)
        .attr('style','border: medium none;')

        .append($('<p>')
            .addClass('title')
            .text(title))

        .append($('<p>')
            .addClass('author')
            .text(author))

        .append($('<p>')
            .addClass('isbn')
            .text(isbn))

        .append($('<button>')
            .text('Select')
            .click(select))

        .append($('<button>')
            .text('Deselect')
            .click(deselect))

        .appendTo(selector);

    function select() {
        div.attr('style','border: 2px solid blue;')
    }

    function deselect() {
        div.attr('style','border: none;')
    }
}