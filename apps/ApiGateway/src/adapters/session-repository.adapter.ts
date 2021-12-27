import { Injectable, Provider } from '@nestjs/common';
import { Session } from 'apps/ApiGateway/src/modules/whatsapp/core/session.entity';
import { SessionRepositoryPort } from 'apps/ApiGateway/src/modules/whatsapp/ports/session-repository.port';

@Injectable()
export class SessionRepository implements SessionRepositoryPort {
  private sessions: Session[] = [];

  async addSession(session: Session): Promise<void> {
    this.sessions.push(session);
  }
  async getSession(id: string): Promise<Session> {
    return this.sessions.find((session) => session.id === id);
  }
  async getSessionByTopic(topic: string): Promise<Session> {
    return this.sessions.find((session) => session.topic === topic);
  }
  async getSessionByPhone(phone: string): Promise<Session> {
    return this.sessions.find((session) => session.phone === phone);
  }
  async getSessions(): Promise<Session[]> {
    return this.sessions;
  }
  async updateSession(session: Session): Promise<void> {
    this.sessions = this.sessions.map((s) =>
      s.phone === session.phone ? session : s,
    );
  }
  async deleteSession(phone: string): Promise<void> {
    this.sessions = this.sessions.filter((s) => s.phone !== phone);
  }
}

export const SessionRepositoryProvider: Provider = {
  provide: SessionRepositoryPort,
  useClass: SessionRepository,
};
