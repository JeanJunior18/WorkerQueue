export enum TypeEvent {
  SEND_MESSAGE = 'SEND_MESSAGE',
}

export class Event<T> {
  type: TypeEvent;
  data: T;
  createdAt = new Date();

  constructor(type: TypeEvent, data: T) {
    this.type = type;
    this.data = data;
  }
}
