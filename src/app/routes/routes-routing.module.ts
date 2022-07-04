import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandardLayoutComponent } from '@layout/standard-layout';
import { ChatsComponent } from './chats';

const routes: Routes = [
  {
    path: '',
    component: StandardLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'chats' },
      {
        path: 'chats',
        component: ChatsComponent,
        data: { title: 'Chats' },
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class RoutesRoutingModule {}
