import {GradesConsole} from './GradesConsole'
import '../../_grades.scss'

if(Site.Console && !Site.Console.Grades) {
    GradesConsole.install(Site.Console)
    Site.Console.Grades = true
}

