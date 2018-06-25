function calendar([day, month, year]) {
    let date = new Date(`${month}, ${day}, ${year}`);
    let monthAsText = date.toLocaleString('en-us', {month: "long"});
    let mainDiv = $('#content');
    let fragment = document.createDocumentFragment();
    let table = $('<tbody>')
        .append($('<tr>'));

    $('<table>')
        .append($('<caption>')
            .text(monthAsText + ' ' + year))
        .append(table)
        .appendTo(fragment);

    let weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    weekDays.forEach(d => table.children().append($('<th>').text(d)));

    date = new Date(`${month}, ${1}, ${year}`);
    date.setDate(date.getDate() - (date.getDay() + 6) % 7); // get day of last monday in previous month

    do {
        table.append($('<tr>'));
        for (let i = 0; i < 7; i++) {
            if (date.getMonth() !== month - 1)
                table.children().last().append($('<td>').text(''));
            else {
                if (date.getDate() === day){
                    table.children().last().append($('<td>').addClass('today').text(date.getDate()));
                } else
                    table.children().last().append($('<td>').text(date.getDate()));
            }
            date.setDate(date.getDate() + 1);
        }
    } while (date.getMonth() === month - 1);

    mainDiv.append(fragment);
}
