import Experience from '../Experience';
import * as THREE from 'three'

import Environment from './Environment';
import Room from './Room';
import Controls from './Controls';

export default class World {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.resources = this.experience.resources
        this.environment = new Environment();


        this.resources.on("ready", () => {
            this.room = new Room();
            this.environment = new Environment();
            this.controls = new Controls();
        })

    }

    resize() {
        
    }

    update() {
        if(this.room){
            this.room.update()
        }
        if(this.controls){
            this.controls.update()
        }
    }
}