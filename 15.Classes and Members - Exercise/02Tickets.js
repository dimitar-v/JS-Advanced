function sortTickets(ticketsAsArr, sortBy) {
    let tickets = [];

    class Ticket {
        constructor(destination, price, status) {
            [this.destination, this.price, this.status] = [destination, price, status]
        }
    }

    for (const ticket of ticketsAsArr) {
        [destination, price, status] = ticket.split('|');
        tickets.push(new Ticket(destination, +price, status));
    }

    return tickets.sort((a,b) => a[sortBy] > b[sortBy]);
}


console.log(sortTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));
console.log();
console.log(sortTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'));
console.log(sortTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'price'));