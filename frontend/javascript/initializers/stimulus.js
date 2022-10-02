import { Application } from '@hotwired/stimulus';
import NavigationController from '../controllers/navigation_controller';

window.Stimulus = Application.start();

Stimulus.register('navigation', NavigationController)
