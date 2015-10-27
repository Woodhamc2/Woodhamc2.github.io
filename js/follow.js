var canvas = $('#canvas');
var width = canvas.width();
var height = canvas.height();
var canvas = document.getElementById("canvas"); 
var renderer = new PIXI.autoDetectRenderer(width,height,{view:canvas, backgroundColor: 0xffffff})

// create the root of the scene graph
var stage = new PIXI.Container();
var dog = new PIXI.Container();

dog.height = 32;
dog.width = 32;
dog.pivot.set(.5,.5);
console.log(dog.getLocalBounds());

PIXI.loader 
    .add('../_assets/dog.json')
    .load(onAssetsLoaded);

var sprite,
    licking,
    dogwalk,
    doglick,
    difx,
    dify,
    divx,
    divy;
var mousePosition = renderer.plugins.interaction.mouse.global;

function onAssetsLoaded(){

    dogwalk = [];
    doglick = [];
    
    for(var i = 1; i<= 6; i++){
        doglick.push(PIXI.Texture.fromFrame('doglick'+i+'.png'));   
    }
    for(var i = 1; i<= 4; i++){
        dogwalk.push(PIXI.Texture.fromFrame('dogwalk'+i+'.png'));   
    }
    walking = new PIXI.extras.MovieClip(dogwalk);
    licking = new PIXI.extras.MovieClip(doglick);


    walking.anchor.set(.8,.3);
    walking.scale.set(1);
    walking.interactive = true;

    licking.anchor.set(.8,.3);
    licking.scale.set(1);
    licking.interactive = true;
    stage.interactive = true;

    dog.addChild(walking);
    dog.addChild(licking);
    stage.addChild(dog);
    walking.animationSpeed = .1;
    walking.alpha = 1;
    walking.play();
    licking.animationSpeed = .1;
    licking.alpha = 0;
    licking.play();
    // start animating
    animate();
}

function animate() {

    requestAnimationFrame(animate);

    difx = mousePosition.x - dog.position.x;
    dify = mousePosition.y - dog.position.y;
    
    dog.position.x += difx/100;
    dog.position.y += dify/100;
    
   if ( ((difx > -15) && (difx < 15)) && ((dify > -15) && (dify < 15)) ){
       walking.alpha = 0;
       licking.alpha = 1;
   } else {
       walking.alpha = 1;
       licking.alpha = 0;
   }
    
    if (difx < 0){
        walking.scale.x = -1;
        licking.scale.x = -1;
    } else {
        walking.scale.x = 1;
        licking.scale.x = 1;
    }
         
         
    // render the root container
    renderer.render(stage);
}

