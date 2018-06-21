function search() {
    let searchTxt = $('#searchText').val();
    let target = $(`#towns li:contains(${searchTxt})`);
    $('#towns li').css('font-weight', '');
    target.css('font-weight', 'bold');
    //$(`#towns li:not(:contains(${searchTxt}))`).css('font-weight',''); // rol 4 or this (6) row are used to remove bold from previous search result
    $('#result').text(target.length + " matches found");
}