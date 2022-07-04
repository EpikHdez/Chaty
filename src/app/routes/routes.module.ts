import { NgModule } from '@angular/core';

import { StandardLayoutModule } from '@layout/standard-layout';
import { ChatsModule } from './chats';
import { RoutesRoutingModule } from './routes-routing.module';

@NgModule({
  declarations: [],
  imports: [RoutesRoutingModule, StandardLayoutModule, ChatsModule],
})
export class RoutesModule {}
