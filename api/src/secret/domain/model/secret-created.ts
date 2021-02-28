import { DomainEvent } from 'core/domain/domain-event';

export class SecretCreated implements DomainEvent {
  constructor(public readonly id: string) { }
}
