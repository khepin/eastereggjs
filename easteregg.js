function EasterEgg(egg, cb) {
    this.egg = egg;
    this.cb  = cb;
    this.start();
}

EasterEgg.prototype.start = function() {
    var egg    = this.egg;
    var buffer = [];
    var cb     = this.cb;

    $('html').keypress(function(event) {
        var letter = String.fromCharCode(event.charCode).toLowerCase();
        if (letter !== ' ') {
            buffer.push(letter);
        }
        while (buffer.length > egg.length) {
            buffer.shift();
        }
        if (buffer.join('') == egg) {
            cb();
        }
    });
};