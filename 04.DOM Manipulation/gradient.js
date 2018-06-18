function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);
    let result = document.getElementById('result');

    function gradientMove(event) {
        let x = event.offsetX;
        let percent = (x / (this.clientWidth - 1)) * 100;
        result.textContent = Math.trunc(percent) + '%';
    }

    function gradientOut() {
        result.textContent = "";
    }
}