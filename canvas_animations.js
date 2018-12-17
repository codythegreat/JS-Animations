const applyCanvasGradient = (canvasID, color1, color2) => {
	let canvas = document.getElementById(`${canvasID}`);
	let ctx = canvas.getContext("2d");

	let grid = ctx.createLinearGradient(0, 0, 400, 0);
	grid.addColorStop(0, `${color1}`);
	grid.addColorStop(1, `${color2}`);
	ctx.fillStyle = grid;
	ctx.fillRect(0, 0, 400, 200);
};

const canvasRotateAnimation = () => {
  let canvas = document.getElementById("canvas-rotate");
  let ctx = canvas.getContext("2d");

  let intervalRotate = setInterval(function() {rotate();}, 100);
  const rotate = () => {
    ctx.clearRect(175, 75, 50, 50);
	
    ctx.translate(200, 100);
    ctx.rotate(Math.PI / 180);
    ctx.translate(-200, -100);
    ctx.fillStyle = "black";
    ctx.fillRect(175, 75, 50, 50);
  };
}


