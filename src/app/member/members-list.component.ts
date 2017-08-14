import { MemberService } from './member.service'
import { Component } from '@angular/core';
import { Member } from './member.model';

@Component({
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent {

  members: Member[];

  constructor(private memberService: MemberService) {
    this.memberService.findAll()
      .subscribe(members => {
        this.members = members
      });
  }
}

