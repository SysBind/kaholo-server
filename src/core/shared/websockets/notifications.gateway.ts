import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';

export type notificationType = 'success' | 'error';

export interface INotification {
  title: string;
  message: string;
  type: notificationType;
}

@WebSocketGateway()
export class NotificationsGateway {

  @WebSocketServer() server;

  notify(notification: INotification) {
    this.server.emit('notification', notification);
  }

}
