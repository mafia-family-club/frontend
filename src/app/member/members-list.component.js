"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var member_service_1 = require("./member.service");
var core_1 = require("@angular/core");
var gender_model_1 = require("./gender.model");
var MembersListComponent = (function () {
    function MembersListComponent(memberService) {
        this.memberService = memberService;
        this.members = [
            {
                id: 1,
                name: 'Михаил',
                surname: 'Зарицкий',
                gender: gender_model_1.Gender.MALE,
                photo: 'https://findoverwatch.com/images/not-found.png'
            },
            {
                id: 2,
                name: 'Лоли',
                surname: 'Зарицкая',
                gender: gender_model_1.Gender.FEMALE,
                photo: 'https://findoverwatch.com/images/not-found.png'
            },
            {
                id: 3,
                name: 'Дановский',
                surname: 'Игорь',
                gender: gender_model_1.Gender.MALE,
                photo: 'https://findoverwatch.com/images/not-found.png'
            },
            {
                id: 4,
                name: 'Фиса',
                surname: 'Лубяная',
                gender: gender_model_1.Gender.FEMALE,
                photo: 'https://findoverwatch.com/images/not-found.png'
            },
            {
                id: 5,
                name: 'Настя',
                surname: 'Инкогнито',
                gender: gender_model_1.Gender.FEMALE,
                photo: 'https://findoverwatch.com/images/not-found.png'
            },
            {
                id: 6,
                name: 'Виталий',
                surname: 'Тютюник',
                gender: gender_model_1.Gender.MALE,
                photo: 'https://findoverwatch.com/images/not-found.png'
            },
            {
                id: 7,
                name: 'Дмитрий',
                surname: 'Бучковский',
                gender: gender_model_1.Gender.MALE,
                photo: 'https://findoverwatch.com/images/not-found.png'
            },
            {
                id: 8,
                name: 'Алексей',
                surname: 'Чапурин',
                gender: gender_model_1.Gender.MALE,
                photo: 'https://findoverwatch.com/images/not-found.png'
            },
            {
                id: 9,
                name: 'Настя',
                surname: 'Мищенко',
                gender: gender_model_1.Gender.FEMALE,
                photo: 'https://findoverwatch.com/images/not-found.png'
            },
            {
                id: 10,
                name: 'Наталья',
                surname: 'Митцукова',
                gender: gender_model_1.Gender.FEMALE,
                photo: 'https://findoverwatch.com/images/not-found.png'
            },
            {
                id: 11,
                name: 'Виктор',
                surname: 'Коваленко',
                gender: gender_model_1.Gender.MALE,
                photo: 'https://findoverwatch.com/images/not-found.png'
            },
            {
                id: 12,
                name: 'Дмитрий',
                surname: 'Артеменко',
                gender: gender_model_1.Gender.MALE,
                photo: 'https://findoverwatch.com/images/not-found.png'
            }
        ];
    }
    MembersListComponent = __decorate([
        core_1.Component({
            templateUrl: './members-list.component.html',
            styleUrls: ['./members-list.component.css']
        }),
        __metadata("design:paramtypes", [member_service_1.MemberService])
    ], MembersListComponent);
    return MembersListComponent;
}());
exports.MembersListComponent = MembersListComponent;
