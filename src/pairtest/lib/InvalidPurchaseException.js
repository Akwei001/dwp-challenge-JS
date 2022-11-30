export default class InvalidPurchaseException extends Error {
  //Ticket number error > 20 tickets
  //Infants do not pay and aren't given a seat - maybe this goes in the ticket section - do not allocate
  // Infants and child seats can't be ordered without an adult
  invalidPurchase(accountId, reservedseats, ticketTypeRequests) {
    if (!Number.isInteger(accountId)) {
      throw new TypeError('accountId must be an integer');
    }

    if (reservedseats > 20) {
      throw new TypeError('You can order a maximum of 20 seats');
    }
    //     //if the seat order array does not include an adult - you must include an adult

    if (ticketTypeRequests.#Type[2].includes('INFANT' || 'CHILD')) {
      throw new TypeError(' An adult ticket must be purchased');
    }
  }
}
