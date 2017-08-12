import { MemberService } from './member.service'
import { Component } from '@angular/core';
import { Member } from './member.model';
import { Gender } from './gender.model';

@Component({
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent {

  members: Member[] = [
    {
      id: 1,
      name: 'Михаил',
      surname: 'Зарицкий',
      gender: Gender.MALE,
      photo: 'https://findoverwatch.com/images/not-found.png'
    },
    {
      id: 2,
      name: 'Лоли',
      surname: 'Зарицкая',
      gender: Gender.FEMALE,
      photo: 'https://findoverwatch.com/images/not-found.png'
    },
    {
      id: 3,
      name: 'Дановский',
      surname: 'Игорь',
      gender: Gender.MALE,
      photo: 'https://findoverwatch.com/images/not-found.png'
    },
    {
      id: 4,
      name: 'Фиса',
      surname: 'Лубяная',
      gender: Gender.FEMALE,
      photo: 'https://findoverwatch.com/images/not-found.png'
    },
    {
      id: 5,
      name: 'Настя',
      surname: 'Инкогнито',
      gender: Gender.FEMALE,
      photo: 'https://findoverwatch.com/images/not-found.png'
    },
    {
      id: 6,
      name: 'Виталий',
      surname: 'Тютюник',
      gender: Gender.MALE,
      photo: 'https://findoverwatch.com/images/not-found.png'
    },
    {
      id: 7,
      name: 'Дмитрий',
      surname: 'Бучковский',
      gender: Gender.MALE,
      photo: 'https://findoverwatch.com/images/not-found.png'
    },
    {
      id: 8,
      name: 'Алексей',
      surname: 'Чапурин',
      gender: Gender.MALE,
      photo: 'https://findoverwatch.com/images/not-found.png'
    },
    {
      id: 9,
      name: 'Настя',
      surname: 'Мищенко',
      gender: Gender.FEMALE,
      photo: 'https://findoverwatch.com/images/not-found.png'
    },
    {
      id: 10,
      name: 'Наталья',
      surname: 'Митцукова',
      gender: Gender.FEMALE,
      photo: 'https://findoverwatch.com/images/not-found.png'
    },
    {
      id: 11,
      name: 'Виктор',
      surname: 'Коваленко',
      gender: Gender.MALE,
      photo: 'https://findoverwatch.com/images/not-found.png'
    },
    {
      id: 12,
      name: 'Дмитрий',
      surname: 'Артеменко',
      gender: Gender.MALE,
      photo: 'https://findoverwatch.com/images/not-found.png'
    }
  ];

  constructor(private memberService: MemberService) {
  }
}

