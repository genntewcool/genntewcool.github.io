$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300, 650, 105, 20,"hotpink");
    createPlatform(500, 470, 105, 20, "hotpink");
    createPlatform(600, 400, 300, 20, "hotpink");
    createPlatform(200, 545, 105, 20, "hotpink");
    createPlatform(400, 300, 105, 20, "hotpink");
    createPlatform(1000, 550, 105, 20, "hotpink");
    




    // TODO 3 - Create Collectables
    createCollectable("diamond", 850,360)
    createCollectable("diamond", 1035, 515)
    createCollectable("diamond",450, 265)



    
    // TODO 4 - Create Cannons
    createCannon("right", 500, 1300)
    creatCannon("right", 100, 1300)
    createCannon("right", 200, 1300)
    


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
