function initializeTable() { // judge: Time out => remove fadeIn and fadeOut = 100/100
    $('#createLink').click(addParameters);

    function addParameters() {
        let countryInput = $('#newCountryText');
        let capitalInput = $('#newCapitalText');
        addRow(countryInput.val(), capitalInput.val());
        countryInput.val('');
        capitalInput.val('');
        fixLinks();
    }

    addRow('Bulgaria', 'Sofia');
    addRow('Germany', 'Berlin');
    addRow('Russia', 'Moscow');
    fixLinks();

    function addRow(country, capital) {
        let row = $('<tr>')
            .append($('<td>').text(country))
            .append($('<td>').text(capital))
            .append($('<td>')
                .append($('<a href="#">').text('[Up]').click(rowUp)) // == .append($('<a href="#">[Up]</a>').click(rowUp))
                .append($('<a href="#">').text('[Down]').click(rowDown))
                .append($('<a href="#">').text('[Delete]').click(rowDelete)));
        row.hide();
        row.appendTo($('#countriesTable'));
        row.fadeIn();
    }

    function rowUp() {
        let row = $(this).parent().parent();
        row.fadeOut(() => {
            row.insertBefore(row.prev());
            fixLinks();
            row.fadeIn();
        });
    }

    function rowDown() {
        let row = $(this).parent().parent();
        row.fadeOut(() => {
            row.insertAfter(row.next());
            fixLinks();
            row.fadeIn();
        });
    }

    function rowDelete() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.remove();
            fixLinks();
        });
    }

    function fixLinks() {
        $('tr a').show();
        $('tr:eq(2) a:contains(Up)').hide();
        $('tr:last-child a:contains(Down)').hide();
    }
}