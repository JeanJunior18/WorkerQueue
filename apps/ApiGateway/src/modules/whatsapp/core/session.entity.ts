export class Session {
  id: string;
  topic: string;
  phone: string;
  name: string;

  constructor(data: Session) {
    Object.assign(this, data);
  }
}
