import { Session } from 'apps/WorkerQueue/src/modules/whatsapp/core/session.entity';

export class SessionRepositoryPort {
  addSession: (session: Session) => Promise<void>;
  getSession: (phone: string) => Promise<Session>;
  getSessionByTopic: (topic: string) => Promise<Session>;
  getSessionByPhone: (phone: string) => Promise<Session>;
  getSessions: () => Promise<Session[]>;
  updateSession: (session: Session) => Promise<void>;
  deleteSession: (phone: string) => Promise<void>;
}
