import {GradesFactory} from './js/GradesFactory';
import {GradesConsole} from './js/Console/GradesConsole'
import './_grades.scss';

export const Grades = GradesFactory.create(Site.Site);

if(typeof Console !== 'undefined') {
    GradesConsole.install(Console);
}
