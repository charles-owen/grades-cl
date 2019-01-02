import GradingVue from './Grading.vue';
import GradingAssignmentVue from './GradingAssignment.vue';
import GradingAssignmentMemberVue from './GradingAssignmentMember.vue'
import GradesLinksVue from './GradesLinks.vue';
import GradesAllVue from './GradesAll.vue';
import GradesMemberVue from './GradesMember.vue';
import RubricsEditorVue from './RubricsEditor.vue';

const Member = Site.Member;

/**
 * The grades console component.
 *
 * Handles installations in the console system.
 * @constructor
 */
export const GradesConsole = function() {
}

/**
 * Install functionality into the console system.
 * @param Console
 */
GradesConsole.install = function(Console) {
    Console.components.addOption({
        atLeast: Member.GRADER,
        page: {
            atLeast: Member.GRADER,
            title: 'Grading',
            route: '/grading',
            order: 4,
            component: GradingVue
        }
    });

    Console.components.addRoutes([
        {route: '/grading/:assigntag', component: GradingAssignmentVue, props: true},
        {route: '/grading/:assigntag/:memberid', component: GradingAssignmentMemberVue, props: true},
        {route: '/rubric/:assigntag', component: RubricsEditorVue, props: true},
        {route: '/grades/links', component: GradesLinksVue},
        {route: '/grades/all', component: GradesAllVue},
        {route: '/grades/:memberid', component: GradesMemberVue, props: true}
    ]);

    Console.tables.add({
        title: 'Grades',
        order: 40,
        api: '/api/grade/tables'
    });
}

