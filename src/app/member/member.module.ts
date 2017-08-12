import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersListComponent } from './members-list.component';
import { MemberService } from './member.service';

@NgModule({
  imports: [CommonModule],
  declarations: [MembersListComponent],
  exports: [MembersListComponent],
  providers: [MemberService]
})
export class MemberModule {}