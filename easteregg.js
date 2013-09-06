function EasterEgg(egg, cb) {
    this.egg = egg;
    this.cb  = cb;
    this.buffer = [];
    this.hasTimeout = false;
    this.start();
}

EasterEgg.prototype.start = function() {
    var egg    = this.egg;
    var buffer = this.buffer;
    var cb     = this.cb;
    var self = this;

    $('html').keypress(function(event) {
        var letter = String.fromCharCode(event.charCode).toLowerCase();
        if (letter !== ' ') {
            buffer.push(letter);
        }
        self.resetTimeout();
        self.trigger();
    });
};

EasterEgg.prototype.addEvent = function(element, event) {
    var buffer = this.buffer;
    var self = this;

    $(element).on(event.name, function(){
        buffer.push(event.value);
        self.resetTimeout();
        self.trigger();
    });
};

EasterEgg.prototype.addEvents = function(element, events) {
    for (var i = 0; i < events.length; i++) {
        this.addEvent(element, events[i]);
    }
};

EasterEgg.prototype.trigger = function() {
    while (this.buffer.join('').length > this.egg.length) {
        this.buffer.shift();
    }

    if (this.buffer.join('') == this.egg) {
        this.cb();
    }
}

EasterEgg.prototype.setTimeout = function(milliseconds) {
    this.hasTimeout = true;
    this.timeoutDelay = milliseconds;
}

EasterEgg.prototype.resetTimeout = function() {
    if(!this.hasTimeout) {
        return;
    }
    var self = this;

    clearTimeout(this.timeout);
    this.timeout = setTimeout(function(){
        self.buffer.length = 0;
    }, this.timeoutDelay);
}