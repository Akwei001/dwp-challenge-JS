/* eslint-disable */

export default class SeatReservationService {
  reserveSeat(accountId, totalSeatsToAllocate) {
    if (!Number.isInteger(accountId)) {
      throw new TypeError('accountId must be an integer');
    }

    if (!Number.isInteger(totalSeatsToAllocate)) {
      throw new TypeError('totalSeatsToAllocate must be an integer');
    }
  }
}

// const seats = new SeatReservationService(1, 2);

// console.log(seats);
