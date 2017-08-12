"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var member_1 = require("./member");
var meeting_1 = require("./meeting");
var appRoutes = [
    {
        path: 'members',
        component: member_1.MembersListComponent
    },
    {
        path: 'meetings',
        component: meeting_1.MeetingsListComponent
    },
    {
        path: '**', component: member_1.MembersListComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
