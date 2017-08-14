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
var MembersListComponent = (function () {
    function MembersListComponent(memberService) {
        var _this = this;
        this.memberService = memberService;
        this.memberService.findAll()
            .subscribe(function (members) {
            _this.members = members;
        });
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
