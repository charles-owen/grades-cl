import {GradesFactory} from './js/GradesFactory';
import './_grades.scss';

if(!Site.Grades) {
    Site.Grades = GradesFactory.create(Site);
}

