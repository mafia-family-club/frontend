import { RouterModule, Routes } from '@angular/router';

import { MembersListComponent } from './member';
import { MeetingsListComponent } from './meeting';

const appRoutes: Routes = [
  {
    path: 'members',
    component: MembersListComponent
  },
  {
    path: 'meetings',
    component: MeetingsListComponent
  },
  {
    path: '**', component: MembersListComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
