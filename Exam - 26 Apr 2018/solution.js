class PublicTransportTable  {
    constructor(town){
        this.setName(town);
        this.addListeners()
    }

    setName(town){
        $('table > caption').text(town + '\'s Public Transport');
    }

    addVehicle(obj){
        let table = $('.vehicles-info');
        let vehicle = $(`<tr><td>${obj.type}</td><td>${obj.name}</td></tr>`)
            .append($('<td>')
                .append($('<button>More Info</button>')
                    .on('click', moreData)));

        table.append(vehicle);

        let moreInfo = $(`<tr class="more-info"><td colspan="3"><table><tr><td>Route: ${obj.route}</td></tr><tr><td>Price: ${obj.price}</td></tr><tr><td>Driver: ${obj.driver}</td></tr></table></td></tr>`);

        function moreData() {
            if($(this).text() === 'More Info'){
                $(this).text('Less Info');
                moreInfo.insertAfter(vehicle);
            } else{
                $(this).text('More Info');
                moreInfo.remove();
            }
        }
    }

    addListeners(){
        let inputType = $('input[name ="type"]');
        let inputName = $('input[name ="name"]');
        let rows;
        $('.search-btn').on('click', function () {
            let type = inputType.val();
            let name = inputName.val();

            if(type || name){
                rows = $('.vehicles-info > tr').not('.more-info');
                for (let row of rows) {

                    let rType = $(row).children()[0].textContent;
                    let rName = $(row).children()[1].textContent;
                    if(!rType.includes(type) || !rName.includes(name)){
                        $(row).css('display','none');
                        let btn = $(row).find('td').eq(2).find('button');
                        if (btn.text() === 'Less Info')
                            btn.click();
                    } else {
                        $(row).css('display', '');
                    }
                }
            }
        });

        $('.clear-btn').on('click', function () {
            inputType.val('');
            inputName.val('');

            for (const row of rows) {
                $(row).css('display', '');
            }
        });
    }
}