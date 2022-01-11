

export class SketchFabViewer {

    constructor() {

        this.iframe = document.getElementById('api-frame');
        this.uid = '19f04b255c3849c3ab3b1238ec531640';

        this.client = new window.Sketchfab(this.iframe);
        this.carpaints = [];
        this.carpaintOnCar = null;
        this.isReady = false;
        this.sketchfabAPI = null;

        this.optionsRIM = [];
        this.animations = [];
        this.annotations = [];
        this.rimMaterials = {RIM_01: {chrome:null, black:null},RIM_02: {chrome:null, black:null}}

        this.currentAnimationID = -1;
        this.forward = false;

        this.defaultCamConstraints = { 
            down: 0.1,
            zoomIn: 0,
            zoomOut: 5,
            usePanConstraints: true,
            usePitchConstraints: true,
            useYawConstraints: false,
            useZoomConstraints: true,
        };

        this.noCamConstraints = { 
            up: 1.5,
            down: -1.5,
            left: -3.14,
            right: 3.14,
            zoomIn: 0,
            zoomOut: 9999,
            usePanConstraints: true,
            usePitchConstraints: true,
            useYawConstraints: true,
            useZoomConstraints: true,
        };

        this.exterLargeCamConstraints = { 
            down: 0.1,
            zoomIn: 4,
            zoomOut: 10,
            usePanConstraints: true,
            usePitchConstraints: true,
            useYawConstraints: false,
            useZoomConstraints: true,
        };

        this.inter1CamConstraints = { 
           /* up: 1.5,
            down: -0.3,
            left: -1.25,
            right: 1.25,*/
            down: 0.1,
            zoomIn: 0,
            zoomOut: 0,
            usePanConstraints: true,
            usePitchConstraints: true,
            useYawConstraints: false,
            useZoomConstraints: true,
        };

        this.inter2CamConstraints = { 
           /* up: 1.5,
            down: 0,*/
            down: 0.1,
            zoomIn: 0,
            zoomOut: 0,
            usePanConstraints: true,
            usePitchConstraints: true,
            useYawConstraints: false,
            useZoomConstraints: true,
        };

        this.testCamConstraints = { 
            /* up: 1.5,
             down: 0,*/
            
             zoomIn: 0,
             zoomOut: 0,
             usePanConstraints: true,
             usePitchConstraints: false,
             useYawConstraints: false,
             useZoomConstraints: true,
         };

        this.inter3CamConstraints = { 
            down: 0.1,
            zoomIn: 0,
            zoomOut: 0,
            usePanConstraints: true,
            usePitchConstraints: true,
            useYawConstraints: false,
            useZoomConstraints: true,
        };

        document.getElementById('CP1').onclick = ()=>this.setCarPaint(this,0);
        document.getElementById('CP2').onclick = ()=>this.setCarPaint(this,1);
        document.getElementById('CP3').onclick = ()=>this.setCarPaint(this,2);
        document.getElementById('CP4').onclick = ()=>this.setCarPaint(this,3);
        document.getElementById('CP5').onclick = ()=>this.setCarPaint(this,4);
        document.getElementById('CP6').onclick = ()=>this.setCarPaint(this,5);

        document.getElementById('RIM_01').onclick = ()=>this.selectOptionRIM(this,'RIM_01');
        document.getElementById('RIM_01 W').onclick = ()=>this.setRimColor(this,'RIM_01', 'chrome');
        document.getElementById('RIM_01 B').onclick = ()=>this.setRimColor(this,'RIM_01', 'black');
        document.getElementById('RIM_02').onclick = ()=>this.selectOptionRIM(this,'RIM_02');
        document.getElementById('RIM_02 W').onclick = ()=>this.setRimColor(this,'RIM_02', 'chrome');
        document.getElementById('RIM_02 B').onclick = ()=>this.setRimColor(this,'RIM_02', 'black');

        document.getElementById('DOORS').onclick = ()=>this.setAnimation(this,0);

        document.getElementById('test').onclick = ()=>this.setCamConstraints(this,8);

        this.initSketchfabClient();

        
    }

    setCarPaint(self,index) {

        if (self.isReady === true) {
            self.carpaints[index].stateSetID = self.carpaintOnCar.stateSetID;

            self.sketchfabAPI.setMaterial(self.carpaints[index], function () {
                //console.log(self.carpaintOnCar.stateSetID + ' Material updated: ' + index);
            });
        }
    }

    setRimColor(self, rim, color) {
        if (self.isReady === true) {
            self.rimMaterials[rim].black.stateSetID = self.rimMaterials[rim].chrome.stateSetID;
            self.sketchfabAPI.setMaterial(self.rimMaterials[rim][color], function () {
               // console.log(self.rimMaterials);
              //  console.log(rim);
              //  console.log(color);
            });
        }
    }

    initSketchfabClient() {

        var self = this;

        this.client.init(this.uid, {
            animation_autoplay: 0,
            autostart: 1,
            camera: 0,
            dof_circle: 0,
            preload: 1,
            ui_stop: 0,
            ui_controls: 0,
            ui_fullscreen: 1,
            ui_general_controls: 0,
            ui_start: 0,
            ui_watermark: 0,
            ui_infos: 0,
            ui_sound : 0,
            double_click : 0,
            orbit_constraint_pan : 1,
         
            success: function onSuccess(api) {

                self.sketchfabAPI = api;
                api.start();
                api.addEventListener('viewerready', function () {

                  /*  api.addEventListener('animationEnded', function() {
                        if (self.forward === true) api.seekTo(1.16, {});
                    });*/

                   /* api.setCameraLookAtEndAnimationCallback(function(err) {
                        if (!err) {
                            window.console.log('Camera animation ended.');
                            api.getCameraLookAt(function(err, camera) {
                                window.console.log(camera.position); // [x, y, z]
                                window.console.log(camera.target); // [x, y, z]
                            });
                        }
                    });*/


                    api.getMaterialList(function (err, materials) {
                        if (!err) {

                            materials.forEach((item, index) => {
                                if (item.name.includes('EXT_carpaint_')) {

                                    self.carpaints.push(item);
                                }

                                if (item.name === 'EXT_rim') {

                                    self.rimMaterials['RIM_01'].chrome = item;
                                }

                                if (item.name === 'EXT_rim_black') {

                                    self.rimMaterials['RIM_01'].black = item;
                                }

                                if (item.name === 'EXT_rim2') {

                                    self.rimMaterials['RIM_02'].chrome = item;
                                }

                                if (item.name === 'EXT_rim2_black') {

                                    self.rimMaterials['RIM_02'].black = item;
                                }

                                if (item.name === 'EXT_carpaint') {

                                    self.carpaintOnCar = item;
                                }

                                if (item.name === 'EXT_rim2_transparent') {

                                    self.invisibleMaterial = item;
                                }
                            });

                            //console.log(self.carpaints);
                            //console.log(self.carpaintOnCar);

                            api.getAnnotationList(function(err, annotations) {
                                if (!err) {
                                    annotations.forEach((item, index) => {
                                        let btn = document.createElement("button");
                                        btn.innerHTML = item.name;
                                        document.getElementById('ui_cameras').appendChild(btn);
                                        btn.onclick = ()=>self.setCamera(self,index);
                                        annotations.push(item);
                                    });
                                }
                            });

                            /*api.addEventListener('annotationFocus', function(index) {
                                window.console.log('Reached annotation', index);
                               
                                switch(index) {
                                    case 0:
                                        api.setCameraConstraints(self.exterLargeCamConstraints, {});
                                        console.log("setting constraints LARGE");
                                       //self.sketchfabAPI.setFov(35, {});
                                        break;
                                    case 7:
                                        api.setCameraConstraints(self.inter1CamConstraints, {});
                                        console.log("setting constraints INTER 1");
                                       // self.sketchfabAPI.setFov(65, {});
                                        break;
                                    case 8:
                                        api.setCameraConstraints(self.inter2CamConstraints, {});
                                        console.log("setting constraints INTER 2");
                                      //  self.sketchfabAPI.setFov(65, {});
                                        break;
                                    case 9:
                                        api.setCameraConstraints(self.inter3CamConstraints, {});
                                        console.log("setting constraints INTER 3");
                                       // self.sketchfabAPI.setFov(65, {});
                                        break;
                                    default:
                                        api.setCameraConstraints(self.defaultCamConstraints, {});
                                        console.log("setting constraints DEFAULT");
                                      //  self.sketchfabAPI.setFov(35, {});
                                }

                                api.gotoAnnotation(index,  {preventCameraAnimation: false, preventCameraMove: false},  {});

                           
                            });*/

                            self.initializeOptionsRIM(function () { 
                                console.log('RIMS variants :', self.optionsRIM);
                                //select one rim by default
                                self.selectOptionRIM(self,'RIM_01');
                            });


                            //collect animations
                            api.getAnimations(function(err, animations) {
                                if (!err) {
                                    animations.forEach((item, index) => {
                                        self.animations.push(item);
                                    });
                                    console.log(self.animations);

                                    self.currentAnimationID = self.animations[0][0];
                                    api.setCurrentAnimationByUID(self.currentAnimationID, {});
                                }
                            });

                            api.setCycleMode('one', function(err) {
                                if (!err) {
                                    window.console.log('Set animation cycle mode to one');
                                }
                            });

                            //set default cam constraints
                            api.setCameraConstraints(self.defaultCamConstraints, {});

                           

                            self.isReady = true;
                        }
                    });

                });
            },
            error: function onError() {
                console.log('Viewer error');
            }
        });
    }

    setCamConstraints(self, index) {
        //cam constraints
    /*    switch(index) {
            case 0:
                self.sketchfabAPI.setCameraConstraints(self.exterLargeCamConstraints, {});
                break;
            case 7:
                self.sketchfabAPI.setCameraConstraints(self.inter1CamConstraints, {});
                break;
            case 8:
                self.sketchfabAPI.setCameraConstraints(self.inter2CamConstraints, {});
                break;
            case 9:
                self.sketchfabAPI.setCameraConstraints(self.inter3CamConstraints, {});
                break;
            default:
               self.sketchfabAPI.setCameraConstraints(self.defaultCamConstraints, {});
        }*/

       

        self.sketchfabAPI.setCameraLookAt([0, 13, 10], [0, 3, 0], 4.3, function(err) {
            if (!err) {
                self.sketchfabAPI.setCameraLookAtEndAnimationCallback(function(err) {
                    if (!err) {
                        window.console.log('Camera animation ended.');
                        self.sketchfabAPI.setCameraConstraints(self.testCamConstraints, {});
                    }
                });
            }
        });
    }

    setCamera(self,index) {

       // self.sketchfabAPI.setCameraConstraints(self.noCamConstraints, {});

         //cam constraints
         switch(index) {
            case 0:
               // self.sketchfabAPI.setCameraConstraints(self.exterLargeCamConstraints, {});
               // console.log("setting constraints LARGE");
                self.sketchfabAPI.setFov(35, {});
                break;
            case 7:
               // self.sketchfabAPI.setCameraConstraints(self.inter1CamConstraints, {});
                //console.log("setting constraints INTER 1");
                self.sketchfabAPI.setFov(65, {});
                break;
            case 8:
                //self.sketchfabAPI.setCameraConstraints(self.inter2CamConstraints, {});
               // console.log("setting constraints INTER 2");
                self.sketchfabAPI.setFov(65, {});
                break;
            case 9:
               // self.sketchfabAPI.setCameraConstraints(self.inter3CamConstraints, {});
              //  console.log("setting constraints INTER 3");
                self.sketchfabAPI.setFov(65, {});
                break;
            default:
               //self.sketchfabAPI.setCameraConstraints(self.defaultCamConstraints, {});
              //  console.log("setting constraints DEFAULT");
                self.sketchfabAPI.setFov(35, {});
        }

        self.sketchfabAPI.gotoAnnotation(index,  {preventCameraAnimation: false, preventCameraMove: false}, function(err, index) {
            if (!err) {

               /* self.sketchfabAPI.setEnableCameraConstraints(false, {preventCameraConstraintsFocus: true}, function(err) {
                    if (!err) {
                        window.console.log('Camera constraints disabled');
                    }
                });*/

               

               

            }
        });
    }

    initializeOptionsRIM(callback) {
        this.sketchfabAPI.getNodeMap(function (err, nodes) {
            if (err) {
                console.error(err);
                return;
            }
            var node;
            var isOptionObject = false;
            var keys = Object.keys(nodes);
            //console.log(nodes);
            for (var i = 0; i < keys.length; i++) {
                node = nodes[keys[i]];
                isOptionObject = node.name && 
                    node.name.indexOf('RIM') !== -1 ;//&&
                   // (node.type === 'Geometry' || node.type === 'Group');
                   //node.type === 'Camera';
                   // (node.type !== 'Geometry' && node.type !== 'Group');
                if (isOptionObject) {
                    this.optionsRIM.push({
                       // type: node.type,
                        id: node.instanceID,
                        name: node.name,
                        selected: false,
                        //obj: node
                    });
                }
            }

            //workaround : set chrome to RIM2 ans set RIM2 to invisible
            this.rimMaterials['RIM_02'].chrome.stateSetID = this.invisibleMaterial.stateSetID;
            this.sketchfabAPI.hide(this.optionsRIM[1].id); 
            this.sketchfabAPI.setMaterial(this.rimMaterials['RIM_02'].chrome, {});



            var self = this;
          /*  this.sketchfabAPI.translate(this.optionsRIM[1].id, [0, 0, 0], {
                duration: 5.0,
                easing: 'easeOutQuad'
            }, function(err, translateTo) {
                if (!err) {
                    window.console.log('Object has been translated to', translateTo);
                    console.log("heho ", self.optionsRIM[1].obj);
                }
                else
                    window.console.log(err);
            });*/
/*
            this.sketchfabAPI.setMatrix(31, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 20000, 50000, 1], function() {
                if (!err) {
                    window.console.log("matrix set", nodes[31]);
                }
            });

            this.sketchfabAPI.hide(31);*/
           
            callback();
        }.bind(this));
    }

    selectOptionRIM(self, name) {
        console.log("options RIM ", this.optionsRIM);
        var options = this.optionsRIM;
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].name === name) {
                options[i].selected = true;
                self.sketchfabAPI.show(options[i].id);
            } else {
                options[i].selected = false;
                self.sketchfabAPI.hide(options[i].id);
            }
        }
    }

    setAnimation(self, index) {

        self.forward = !self.forward;

        self.sketchfabAPI.getCurrentTime(function(err, time) {
            if (!err) {
                window.console.log('Current animation time:', time);

                if ( self.forward === true){
                    if (time == 1.16 ) { 
                        self.sketchfabAPI.seekTo(0, (err) => {
                            self.sketchfabAPI.setSpeed(1.0, (e) => {
                                self.sketchfabAPI.play();
                            });
                        });
                    }
                    else {
                        self.sketchfabAPI.setSpeed(1.0, (e) => {
                            self.sketchfabAPI.play();
                        });
                    }
                    
                }
                else {

                    if (time == 1.16 ) { 
                        self.sketchfabAPI.seekTo(1.16, (err) => {
                            self.sketchfabAPI.setSpeed(-1.0, (e) => {
                                self.sketchfabAPI.play();
                            });
                        });
                    }
                    else {
                        self.sketchfabAPI.setSpeed(-1.0, (e) => {
                            self.sketchfabAPI.play();
                        });
                    }
                    
                }

                

            }
        });

        

       // if (self.currentAnimationID === -1) {
            //self.playAnimation (self, index);

           
      /*  }
        else {

            self.sketchfabAPI.seekTo(1.0, function(err) {
                if (!err) {
                    self.sketchfabAPI.pause(function (err) {
                        if (!err) {
            
                            self.playAnimation (self, index);
    
                        }
                    });
            
                }
            });

        }*/
        
    }

    playAnimation (self, index) {

        self.currentAnimationID = self.animations[index][0];
        self.sketchfabAPI.setCurrentAnimationByUID(self.currentAnimationID, function (err) {
            if (!err) {
               // window.console.log('Set animation track to', self.currentAnimationID);
                self.sketchfabAPI.play(function (err) {
                    if (!err) {
                        window.console.log('Animation playing');
                    }
                });
            }
        });

    }
}
