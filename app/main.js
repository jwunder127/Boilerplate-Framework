import './main.scss';
import template from './main.html';

import { ApiService } from './services/api';


/** Main UI Controller Class */
class ViewController {
  /** Initialize Application */
  constructor () {
    document.getElementById('app').outerHTML = template;
    // Initialize API service
    if (window.location.hostname === 'localhost') {
      this.api = new ApiService('http://localhost:5000/');
    } else {
      this.api = new ApiService('');
    }

    this.initializeComponents();
  }

    /** Initialize Components with data and event listeners */
    initializeComponents () {
      // Initialize Info Panel

    }

}

window.ctrl = new ViewController();
