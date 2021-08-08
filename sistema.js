import { GLTFLoader } from "./GLTFLoader.js";
import { Camera, ColorKeyframeTrack, Loader, Scene } from "./three.module.js";
        
        
        
        let keydown  = [];
        var bullets = []
        
        var player = { speed: 0.7, turnSpeed:Math.PI*0.007, canShoot:0 };
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth,window.innerHeight);
        document.body.appendChild(renderer.domElement)

        
        camera.position.z = 390
        

        const geometry2 = new THREE.BoxGeometry(1500,1,1500);
        const material2 = new THREE.MeshBasicMaterial( { color: "rgb(50,205,50)"  } );
		const cube2 = new THREE.Mesh( geometry2, material2 );
        scene.add(cube2)
        cube2.position.y = -1;
        

        

        

        

        
        

        
        const light = new THREE.AmbientLight( 0xffffff ); // soft white light
        light.position.y = 10
        scene.add( light );
        scene.background = new THREE.Color("rgb(135,206,250)")
        var loader = new GLTFLoader();
        var obj = []
        loader.load("lukbtcupdated.glb", function(gltf) {
            
             obj = gltf.scene
             
             obj.scale.set(1,1,0.2)
             scene.add(gltf.scene)
         })

         var loader2 = new GLTFLoader();
         var obj2 = [];
         loader2.load("parede.glb", function(gltf2) {
             obj2 = gltf2.scene
             obj2.position.z = -300
             obj2.position.y = 20
             obj2.scale.set(280, 150,50)
             scene.add(gltf2.scene)
         })
         var loader3 = new GLTFLoader();
         var obj3 = [];
         loader3.load("parede2.glb", function(gltf3) {
             obj3 = gltf3.scene
             obj3.position.z = 340
             obj3.position.y = 10
             obj3.scale.set(200, 50,50)
             
             scene.add(gltf3.scene)
         })
         var loader13 = new GLTFLoader();
         var perdeu = [];
         loader13.load("parede3.glb", function(gltf13) {
             perdeu = gltf13.scene
             perdeu.position.z = 420
             perdeu.position.y = 10
             perdeu.scale.set(200, 50,50)
             
             scene.add(gltf13.scene)
         })
         var loader14 = new GLTFLoader();
         var ganhou = [];
         loader14.load("parede4.glb", function(gltf14) {
             ganhou = gltf14.scene
             ganhou.position.z = 500
             ganhou.position.y = 10
             ganhou.scale.set(200, 50,50)
             scene.add(gltf14.scene)
         })
         var loader4 = new GLTFLoader();
         var obj4 =[];
         loader4.load("parede.glb", function(gltf4) {
             obj4 = gltf4.scene;
             obj4.position.x= 99 
             obj4.rotation.y = 300
             obj4.position.y = 30
             obj4.position.z = 20
             obj4.scale.set(1500,150,100)
             scene.add(gltf4.scene)
         })
         var loader5 = new GLTFLoader();
         var obj5 =[];
         loader5.load("parede.glb", function(gltf5) {
             obj5 = gltf5.scene;
             obj5.position.x= -99 
             obj5.rotation.y = -300
             obj5.position.y = 30
             obj5.position.z = 20
             obj5.scale.set(1500,150,100)
             scene.add(gltf5.scene)
         })
         var Loader6 = new GLTFLoader();
         var obj6 = [];
         Loader6.load("kebri4f1.glb", function(glft6) {
             obj6 = glft6.scene
             obj6.position.y= 0.5
             obj6.position.z = -320
             obj6.position.x = 0
             obj6.scale.set(16,10,16)
             scene.add(glft6.scene)
         })
         var loader11 = new GLTFLoader();
         var kebri2 = [];
         loader11.load("kebri4f1.glb",function(gltf11) {
            kebri2 = gltf11.scene
            kebri2.position.y= 0.5
            kebri2.position.z = -280
            kebri2.position.x = -7
            kebri2.scale.set(16,10,16)
             scene.add(gltf11.scene)
         })
         var loader10 = new GLTFLoader() ;
         var honda2 = [];
         loader10.load("honamada1.glb", function(gltf10) {
             honda2 = gltf10.scene
             honda2.position.x = 8
             honda2.position.z = -390
             honda2.scale.set(10,10,10)
             scene.add(gltf10.scene)
         })
         var Loader7 = new GLTFLoader();
         var obj7 = [];
         Loader7.load("honamada1.glb", function(glft7) {
             obj7 = glft7.scene
             obj7.position.x = 1
             obj7.position.z = -310
             obj7.scale.set(10,10,10)
             scene.add(glft7.scene)
         })
         var Loader8 = new GLTFLoader();
         var obj8 = [];
         Loader8.load("dudu3d3.glb", function(glft8) {
             obj8 = glft8.scene
             obj8.position.x = -3
             obj8.position.z = -370
             obj8.position.y = 3
             obj8.scale.set(7,7,7)
             scene.add(glft8.scene)
         })
         var loader12 = new GLTFLoader() ;
         var dudu2 = []
         loader12.load("dudu3d3.glb", function(gltf12) {
            dudu2 = gltf12.scene
            dudu2.position.x = -10
            dudu2.position.z = -330
            dudu2.position.y = 3
            dudu2.scale.set(7,7,7)
             scene.add(gltf12.scene)
         })
         var Loader9 = new GLTFLoader();
         var obj9 = [];
         Loader9.load("bgminion888.glb", function(glft9) {
             obj9 = glft9.scene
             obj9.position.x = 9
             obj9.position.z = -300

             
             obj9.scale.set(6,6,6)
             scene.add(glft9.scene)
         })
         var Loader13 = new GLTFLoader();
         var bg2 = [];
         Loader13.load("bgminion888.glb", function(glft13) {
             bg2 = glft13.scene
             bg2.position.x = -15
             bg2.position.z = -270

             
             bg2.scale.set(6,6,6)
             scene.add(glft13.scene)
         })
         
         
        

        window.onkeydown = function(e) {
            keydown[e.key] = true;
        }
        window.onkeyup = function(e) {
            keydown[e.key] = false
        }
        


        var animate = function() {
            
            requestAnimationFrame(animate)
            for(var index=0; index<bullets.length; index+=1){
                if( bullets[index] === undefined ) continue;
                if( bullets[index].alive == false ){
                    bullets.splice(index,1);
                    continue;
                }
                
                bullets[index].position.add(bullets[index].velocity);
            }
            
            if (camera.position.z < -280) {
                camera.position.z = 550
                
            }

            obj6.position.z +=1.8
            obj7.position.z +=2
            obj8.position.z +=1.8
            obj9.position.z +=1.2
            honda2.position.z +=2
            kebri2.position.z +=1.8
            dudu2.position.z += 1.8
            bg2.position.z += 1.2
            
            
            
            if(keydown["w"] || keydown["W"] || keydown["ArrowUp"] ){
                    
                    camera.position.x -= Math.sin(camera.rotation.y) * player.speed;
                    camera.position.z -= Math.cos(camera.rotation.y) * player.speed;
                
                }
                if(keydown["s"]|| keydown["S"]){
                    camera.position.x += Math.sin(camera.rotation.y) * player.speed;
                    camera.position.z += Math.cos(camera.rotation.y) * player.speed;    
                    console.log("z:",camera.position.z)
                    console.log("x:", camera.position.x)
                }
                if(keydown["d"] || keydown["D"] || keydown["ArrowRight"] || keydown["39"]){
                    camera.position.x += Math.sin(camera.rotation.y + Math.PI/2) * player.speed
                    camera.position.z += Math.cos(camera.rotation.y + Math.PI/2) * player.speed
                    
                }
                if(keydown["a"]|| keydown["A"]|| keydown["ArrowLeft"] || keydown["37"]){
                    camera.position.x += Math.sin(camera.rotation.y - Math.PI/2) * player.speed
                    camera.position.z += Math.cos(camera.rotation.y - Math.PI/2) * player.speed
                    
                }
                if (keydown["j"] || keydown["J"]) {
                    camera.position.z = 300
                    camera.position.x = 0
                    obj6.position.z = -320
                    kebri2.position.z = -280
                    honda2.position.z = -390
                    obj7.position.z = -310
                    obj8.position.z = -370
                    obj9.position.z = -300
                    dudu2.position.z = -330
                    bg2.position.z = -270
                    
                }
                
                
                if( keydown["e"] || keydown["E"]  || keydown[";"]  ) {
                    var bullet = new THREE.Mesh(
                        new THREE.SphereGeometry(0.05,8,8),
			            new THREE.MeshBasicMaterial({color: "rgb(255,255,0)"})

                    )
                    bullet.position.set(
                        obj.position.x,
                        obj.position.y + 0.15,
                        obj.position.z
                    )
                    

                    bullet.velocity = new THREE.Vector3(
                        -Math.sin(camera.rotation.y),
                        0,
                        -Math.cos(camera.rotation.y)
                    );
                    
                    bullet.alive = true; 
                    setTimeout(function(){
                        bullet.alive = false;
                        scene.remove(bullet);
                    }, 1000)
                    

                    bullets.push(bullet)
                    scene.add(bullet)
                    
                    //console.log(bullets.position)
                    //console.log(bullet.velocity.x + 0.5)
                    //console.log(obj6.rotation.y)
                    //console.log(obj6.collision)
                    
                    

                    
                    if( camera.position.x == obj6.position.x||camera.position.x <= obj6.position.x + 1.9 && camera.position.x >= obj6.position.x  - 1.9  ) {
                        obj6.position.z = obj6.position.z - 40
                        obj6.position.y = -10
                    }
                    if( camera.position.x == obj7.position.x||camera.position.x <= obj7.position.x + 1.9 && camera.position.x >= obj7.position.x  - 1.9  ) {
                        obj7.position.z = obj7.position.z - 40
                        obj7.position.y = -20
                    }
                    if( camera.position.x == obj8.position.x||camera.position.x <= obj8.position.x + 1.9 && camera.position.x >= obj8.position.x  - 1.9  ) {
                        obj8.position.z = obj8.position.z - 40
                        obj8.position.y = -10
                    }
                    if( camera.position.x == obj9.position.x||camera.position.x <= obj9.position.x + 1.9 && camera.position.x >= obj9.position.x  - 1.9 ) {
                        obj9.position.z = obj9.position.z - 40
                        obj9.position.y = -10
                    }
                    if( camera.position.x == honda2.position.x||camera.position.x <= honda2.position.x + 1.9 && camera.position.x >= honda2.position.x  - 1.9  ) {
                        honda2.position.z = honda2.position.z - 40
                        honda2.position.y = -20
                    }
                    if( camera.position.x == kebri2.position.x||camera.position.x <= kebri2.position.x + 1.9 && camera.position.x >= kebri2.position.x  - 1.9  ) {
                        kebri2.position.z = kebri2.position.z - 40
                        kebri2.position.y = -10
                    }
                    if( camera.position.x == dudu2.position.x||camera.position.x <= dudu2.position.x + 1.9 && camera.position.x >= dudu2.position.x  - 1.9  ) {
                        dudu2.position.z = dudu2.position.z - 40
                        dudu2.position.y = -10
                    }
                    if( camera.position.x == bg2.position.x||camera.position.x <= bg2.position.x + 1.9 && camera.position.x >= bg2.position.x  - 1.9  ) {
                        bg2.position.z = bg2.position.z - 40
                        bg2.position.y = -10
                    }
                    
                    
                    
                    
                    
                    player.canShoot = 5;
                    
                }
                if(player.canShoot > 0) player.canShoot -= 1

                if (camera.position.z == 335) {
                    obj6.position.z = -320
                    kebri2.position.z = -280
                    honda2.position.z = -390
                    obj7.position.z = -310
                    obj8.position.z = -370
                    obj9.position.z = -300
                    dudu2.position.z = -330
                    bg2.position.z = -270
                }

                if (camera.position.z >= 380) {
                    obj6.position.z = -320
                    kebri2.position.z = -280
                    honda2.position.z = -390
                    obj7.position.z = -310
                    obj8.position.z = -370
                    obj9.position.z = -300
                    dudu2.position.z = -330
                    bg2.position.z = -270
                }

                if(obj6.position.z > camera.position.z) {
                    camera.position.z = 470
                    camera.position.x = 0
                }
                if(obj7.position.z > camera.position.z) {
                    camera.position.z = 470
                    camera.position.x = 0
                }
                if(obj8.position.z > camera.position.z) {
                    camera.position.z = 470
                    camera.position.x = 0
                }
                if(obj9.position.z > camera.position.z) {
                    camera.position.z = 470
                    camera.position.x = 0
                }
                if(kebri2.position.z > camera.position.z) {
                    camera.position.z = 470
                    camera.position.x = 0
                }
                if(honda2.position.z > camera.position.z) {
                    camera.position.z = 470
                    camera.position.x = 0
                }
                if(dudu2.position.z > camera.position.z) {
                    camera.position.z = 470
                    camera.position.x = 0
                }
                if(bg2.position.z > camera.position.z) {
                    camera.position.z = 470
                    camera.position.x = 0
                }
                
 
                obj6.position.y += 0.5
                    if(obj6.position.y > 0.8 ) {
                        obj6.position.y = 0.8
                    }

                obj7.position.y += 0.5
                    if(obj7.position.y > 0.7) {
                        obj7.position.y = 0.7
                    }
                obj8.position.y += 0.5
                    if(obj8.position.y > 1.5) {
                        obj8.position.y = 1.5
                    }
                obj9.position.y += 0.5
                    if(obj9.position.y > 0.5) {
                        obj9.position.y = 0.5
                    }
                honda2.position.y += 0.5 
                    if(honda2.position.y >0.7) {
                        honda2.position.y = 0.7
                    }    
                kebri2.position.y += 0.5 
                     if (kebri2.position.y > 0.8) {
                         kebri2.position.y = 0.8
                     }
                dudu2.position.y += 0.5 
                     if (dudu2.position.y > 0.8) {
                         dudu2.position.y = 0.8
                     }
                bg2.position.y += 0.5 
                     if (bg2.position.y > 0.4) {
                         bg2.position.y = 0.4
                     }


                
                
                
                
                if(camera.position.x > 66) {
                    camera.position.x = 66
                }
                if(camera.position.x < -66) {
                    camera.position.x = -66
                }
                                
                obj.position.set(
                    camera.position.x - Math.sin(camera.rotation.y - Math.PI/4)*0.6 ,
                    camera.position.y - 0.2,
                    camera.position.z - Math.cos(camera.rotation.y - Math.PI/4) *0.6
                )
                obj.rotation.set(
                    camera.rotation.x +5,
                    camera.rotation.y +5,
                    camera.rotation.z +5
                )
                
                


            renderer.render(scene, camera)
        }
        animate()
