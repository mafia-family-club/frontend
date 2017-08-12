import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingsListComponent } from './meetings-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    MeetingsListComponent
  ],
  exports: [MeetingsListComponent]
})
export class MeetingModule {}
