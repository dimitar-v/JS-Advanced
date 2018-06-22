function increment(selector) {
    let fragment = document.createDocumentFragment();

    let counter =  $('<textarea>');
    counter
        .addClass('counter')
        .attr('disabled',true)
        .val(0)
        .appendTo(fragment);

    let incrementBtn = $('<button>');
    incrementBtn
        .addClass('btn')
        .attr('id','incrementBtn')
        .text('Increment')
        .appendTo(fragment);

    let addBtn = $('<button>');
    addBtn
        .addClass('btn')
        .attr('id','addBtn')
        .text('Add')
        .appendTo(fragment);

    let list = $('<ul>');
    list
        .addClass('results')
        .appendTo(fragment);

    $(selector).append(fragment);

    incrementBtn.click(function () {
        counter.val(+counter.val() + 1);
    });

    addBtn.click(function () {
        $('<li>')
            .text(counter.val())
            .appendTo(list);
    });
}