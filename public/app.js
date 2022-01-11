import { SketchFabViewer } from './sketchfab.js';

var app;

class App {
    constructor () {

        this.viewer = new SketchFabViewer();

    }
}

document.addEventListener('DOMContentLoaded', () => {app = new App();});