function timer() {
    let buttonStart = $('#start-timer');
    let buttonStop =  $('#stop-timer');
    let hours = $('#hours');
    let min = $('#minutes');
    let sec = $('#seconds');
    let timer = null;
    let seconds = 0;

    buttonStart.attr('disabled', false);
    buttonStop.attr('disabled', true);

    buttonStart.click(function () {
        if (!timer) {
            timer = setInterval(step, 1000);
            buttonStart.attr('disabled', true);
            buttonStop.attr('disabled', false);
        }
    });

    buttonStop.click(function () {
        buttonStart.attr('disabled', false);
        buttonStop.attr('disabled', true);
        clearInterval(timer);
        timer = null;
    });
    
    function step() {
        seconds++;
        showTime(seconds);
    }

    function showTime(t) {
        let s = t%60;
        sec.text(('0' + s).slice(-2));
        t -= s;
        t /= 60;
        let m = t%60;
        min.text(('0' + m).slice(-2));
        t -= m;
        t /= 60;
        hours.text(('0' + t%24).slice(-2));
    }
}