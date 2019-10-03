import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

export type notificationType = 'success' | 'error';

export interface NotificationInterface {
  title: string;
  message: string;
  type: notificationType;
}

@WebSocketGateway(80, {namespace: 'notifications'})
export class NotificationsGateway {

  @WebSocketServer() server: Server | undefined;

  notify(notification: NotificationInterface) {
    if(this.server) {
      this.server.emit('notification', notification);
    }
  }

}
