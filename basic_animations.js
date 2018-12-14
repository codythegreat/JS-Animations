const movingSquare = () => {
	let movingElement = document.getElementById('moving-element');
	let elemPosition = Math.floor(Math.random()*350);
	let animation = setInterval(function() {frame()}, 10);
	let direction = 1; // positive: right, negative: left
	const frame = () => {
		if (elemPosition == 350) {
			direction = -1;
		} else if (elemPosition == 0) {
			direction = 1;
		} 
		elemPosition += direction;
		movingElement.style.left = elemPosition + 'px';
	};
};

const resizingBlocks = () => {
	let horizontalBlock = document.getElementById('resizing-element-horizontal');
	let verticalBlock = document.getElementById('resizing-element-vertical');
	let currentSize = 100;
	let animation = setInterval(function() {resizeBlocks()}, 10);
	let direction = 1;
	const resizeBlocks = () => {
		if (horizontalBlock.style.width == '200px') {
			direction = -1;
		} else if (horizontalBlock.style.width == '100px') {
			direction = 1;
		}
		currentSize += direction;
		horizontalBlock.style.marginRight = `${205-currentSize}px`
		horizontalBlock.style.width = currentSize + 'px';
		verticalBlock.style.height = currentSize + 'px';
	}

}