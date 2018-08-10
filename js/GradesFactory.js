import {PageVue} from 'site-cl/js/Vue/PageVue';
import GradeAssignmentVue from './User/GradeAssignment.vue';
import GradesVue from './User/Grades.vue';
import PageNav from 'site-cl/js/Vue/PageNav.vue';

export const GradesFactory = function() {
}

GradesFactory.create = function(site) {

    const Grades = function() {
    }

    site.ready(() => {
        PageVue.create('div.cl-grade-assignment', 'Assignment Grade', GradeAssignmentVue, PageNav);
        PageVue.create('div.cl-grades', 'Grades', GradesVue, PageNav);
    });

    return Grades;
}