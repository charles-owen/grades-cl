/**
 * @file
 * Install into the grades console system.
 */

import {Member} from 'course-cl/js/Members/Member';

import GradingVue from './Grading.vue';
import GradingAssignmentVue from './GradingAssignment.vue';
import GradingAssignmentMemberVue from './GradingAssignmentMember.vue'
import GradesLinksVue from './GradesLinks.vue';
import GradesAllVue from './GradesAll.vue';
import GradesMemberVue from './GradesMember.vue';

export const GradesConsole = function() {
}

GradesConsole.install = function(Console) {
    Console.components.addOption({
        atLeast: Member.GRADER,
        page: {
            title: 'Grading',
            route: '/grading',
            order: 4,
            component: GradingVue
        }
    });

    Console.components.addRoutes([
        {route: '/grading/:assigntag', component: GradingAssignmentVue, props: true},
        {route: '/grading/:assigntag/:memberid', component: GradingAssignmentMemberVue, props: true},
        {route: '/grades/links', component: GradesLinksVue},
        {route: '/grades/all', component: GradesAllVue},
        {route: '/grades/:memberid', component: GradesMemberVue, props: true}
    ]);

    Console.tables.add({
        title: 'Grades',
        order: 11,
        api: '/api/grade/tables'
    });
}

