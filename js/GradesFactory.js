import {PageVue} from 'site-cl/js/Vue/PageVue';
import AssignmentGradeVue from './AssignmentGrade.vue';

export const GradesFactory = function() {
}

GradesFactory.create = function(site) {

    const Grades = function() {
    }

    site.ready(() => {
        PageVue.create('div.cl-grade-assignment', 'Assignment Grade', AssignmentGradeVue);
    });

    return Grades;
}