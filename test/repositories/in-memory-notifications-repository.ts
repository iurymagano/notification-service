import { Notification } from 'src/application/entities/notification';
import { NotificationRepository } from 'src/application/repositories/notification-repository';

export class InMemoryNotificationRepository implements NotificationRepository {
  async countManyByRecipientId(recipientId: string): Promise<number> {
    const notificationsRecipients = this.notifications.filter(
      (item) => item.recipientId === recipientId,
    );

    return notificationsRecipients.length;
  }

  public notifications: Notification[] = [];

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(
      (n) => n.id === notificationId,
    );

    if (!notification) return null;

    return notification;
  }

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (item) => item.id === notification.id,
    );

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const notificationsRecipients = this.notifications.filter(
      (item) => item.recipientId === recipientId,
    );

    return notificationsRecipients;
  }
}
