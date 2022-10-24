import { Application } from '@hotwired/stimulus';
import NavigationController from '../controllers/navigation_controller';
import ScheduleController from '../controllers/schedule_controller';

window.Stimulus = Application.start();

Stimulus.register('navigation', NavigationController);
Stimulus.register('schedule', ScheduleController)
