import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    content: new Content('Você recebeu uma solicitação de amizade'),
    category: 'social',
    recipientId: 'example-recipient-1',
    ...override,
  });
}
