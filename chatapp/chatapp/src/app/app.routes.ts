import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserRoomComponent} from './pages/user-room/user-room.component';
const routes: Routes = [
  // logged routes
  {
    component: UserRoomComponent,
    path: 'userroom'
  }
 
  // not logged routes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
