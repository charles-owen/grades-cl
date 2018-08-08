/**
 * @file
 * Install into the grades console system.
 */

import {Member} from 'course-cl/js/Members/Member';
import GradingMainComponent from './GradingMainComponent.vue';
import AssignmentGradingVue from './AssignmentGrading.vue';
import AssignmentMemberGradingVue from './AssignmentMemberGrading.vue'

export const GradesConsole = function() {
}

GradesConsole.install = function(Console) {
    Console.components.addOption({
        atLeast: Member.GRADER,
        page: {
            title: 'Grading',
            route: '/grading',
            order: 4,
            component: GradingMainComponent
        }
    });

    Console.components.addRoutes([
        {route: '/grading/:assigntag', component: AssignmentGradingVue, props: true},
        {route: '/grading/:assigntag/:memberid', component: AssignmentMemberGradingVue, props: true}
    ]);

    Console.tables.add({
        title: 'Grades',
        order: 11,
        api: '/api/grade/tables'
    });
}

