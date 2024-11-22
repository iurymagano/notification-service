import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send notification', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'Você recebeu uma solicitação de amizade',
      category: 'social',
      recipientId: 'example-recipient-id',
    });
    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
