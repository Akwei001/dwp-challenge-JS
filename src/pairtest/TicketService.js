import TicketTypeRequest from './lib/TicketTypeRequest.js';
// import InvalidPurchaseException from './lib/InvalidPurchaseException.js';
import SeatReservationService from '../thirdparty/seatbooking/SeatReservationService.js';
import TicketPaymentService from '../thirdparty/paymentgateway/TicketPaymentService.js';

export default class TicketService {
  /**
   * Should only have private methods other than the one below.
   */

  #accountId;
  #ticketpayment = 0;
  #reservedseats = 0;
  #ticketTypeRequests = [];
  #Type = ['ADULT', 'CHILD', 'INFANT'];

  //number of tickets
  // static #MAX_TICKETS = 20;

  // static #tickets = 0;

  constructor(
    accountId,
    ticketTypeRequests,
    ticketpayment,
    reservedseats,
    Type
  ) {
    this.#Type = Type;
    this.#accountId = accountId;
    this.#ticketpayment = ticketpayment;
    this.#reservedseats = reservedseats;
    TicketService.#ticketTypeRequests.push(ticketTypeRequests);
  }

  #totalPayment(ticketTypeRequest, Type) {
    // if ticket type is an adult + 20 or Child + 10
    if (ticketTypeRequest.#Type.includes('ADULT')) {
      return this.#ticketpayment + 20;
    } else if (ticketTypeRequest.#Type.includes('CHILD')) {
      return this.#ticketpayment + 10;
    } else {
      // throw new InvalidPurchaseException();
    }

    // return this.#ticketpayment;
  }

  #seatResevation(ticketTypeRequest, reservedseats) {
    if (reservedseats > 20) {
      // throw new InvalidPurchaseException();
    }
    if (ticketTypeRequest.#Type.includes('ADULT' || 'CHILDREN')) {
      return this.#reservedseats + 1;
    }
  }

  #getId(accountId) {
    Number(accountId);
    return this.#accountId;
  }

  #getTicketType() {
    return this.#ticketTypeRequests;
  }

  purchaseTickets(accountId, ...ticketTypeRequests) {
    if (accountId && ticketTypeRequests) {
      return;

      this.#accountId = accountId;
      this.#ticketTypeRequests = ticketTypeRequests;
      this.#getId();
      this.#getTicketType();
      this.#seatResevation();
      this.#totalPayment();
    }

    // throws InvalidPurchaseException
  }
}

// const testTicket = purchaseTickets(1, ticketType);

// console.log(testTicket);

const ticketType = new TicketTypeRequest('ADULT', 1);

const test = TicketService.purchaseTickets(1, ['ADULT']);

console.log(ticketType.getNoOfTickets());
console.log(ticketType.getTicketType());
console.log(purchaseTickets());
console.log(test.purchaseTickets());

const reserveSeat = new SeatReservationService();

const payment = new TicketPaymentService();
