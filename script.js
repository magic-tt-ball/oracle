var x, y, z; //coordonnées accelerometre
var px, py, pz; // p = precedent
var dispo; //shake disponible
var shaked;
var imgIndex;
var nombreImages = 3;
let androide, naif, sorciere;

function setup(){
  x = accelerationX;
  y = accelerationY;
  z = accelerationZ;
  px = x;
  py = y;
  pz = z;
  dispo = true;
  shaked = false;

  androide = select("#androide");
  naif = select("#naif");
  sorciere = select("#sorciere");
  console.log(androide);
  console.log(naif);
  console.log(sorciere);

}

function draw(){

    shakeTrue();

    if(shaked == true){
        // il se passe un tas de choses géniales
        
        console.log("the shaking occured!");
        imgIndex = floor(random(nombreImages));
        //imgIndex = 0;

        if (imgIndex == 0){
            sorciere.style('visibility', 'hidden');
            naif.style('visibility', 'hidden');
            console.log("androide visible");
            androide.style('visibility', 'visible');
            

        } else if (imgIndex == 1){
            androide.style('visibility', 'hidden');
            naif.style('visibility', 'hidden');
            console.log("sorciere visible");
            sorciere.style('visibility', 'visible');
        

    } else if (imgIndex == 2){
        sorciere.style('visibility', 'hidden');
        androide.style('visibility', 'hidden');
        console.log("sorciere visible");
        naif.style('visibility', 'visible');
        }
    }

        shaked = false;
        dispo = true;
        
    }       

//DEBUG
function mouseClicked(){

    if(dispo == true){
        shaked = true;
        dispo = false;
        console.log("click ! ta mère dans un clic clac");
    }

}


function shakeTrue() {
    x = accelerationX;
    y = accelerationY;
    z = accelerationZ;

    
    //console.log(dist(x, y, z, px, py, pz));

    if(dist(x, y, z, px, py, pz) > 40 && dispo == true){
        console.log("shake it shake it up");
        shaked = true;
        dispo = false;
    }


    px = x;
    py = y;
    pz = z;
}