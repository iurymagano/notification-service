import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { SendNotification } from '@application/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { GetRecipientNotification } from '@application/use-cases/get-recipient-notification';
import { CountRecipientNotification } from '@application/use-cases/count-recipient-notification';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { ReadNotification } from '@application/use-cases/read-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    GetRecipientNotification,
    CountRecipientNotification,
    CancelNotification,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
