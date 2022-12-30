import {GradesFactory} from './js/GradesFactory';
import {GradesConsole} from './js/Console/GradesConsole'
import './_grades.scss';

if(!Site.Grades) {
    Site.Grades = GradesFactory.create(Site);

    if(Site.Site.console !== undefined) {
        GradesConsole.install(Site.Console);
    }
}

