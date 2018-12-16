const applyCanvasGradient = (canvasID, color1, color2) => {
	let canvas = document.getElementById(`${canvasID}`);
	let ctx = canvas.getContext("2d");

	let grid = ctx.createLinearGradient(0, 0, 400, 0);
	grid.addColorStop(0, `${color1}`);
	grid.addColorStop(1, `${color2}`);

	ctx.fillStyle = grid;
	ctx.fillRect(0, 0, 400, 200);
};


