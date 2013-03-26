describe("EasterEgg", function() {
    beforeEach(function(){
        $('html').removeClass('easteregged');
        new EasterEgg('hello', function(){
            $('html').addClass('easteregged');
        });
    });

    it("triggers a callback when the right chars are typed", function() {
        var e = jQuery.Event("keypress");

        var trigger = 'hello';
        for (var i = 0; i < trigger.length; i++) {
            e.charCode = trigger.charCodeAt(i);
            $("html").trigger(e);
        }

        expect($('html').hasClass('easteregged')).toBe(true);
    });

    it('triggers nothing if the characters are not typed correctly', function(){
        var e = jQuery.Event("keypress");

        var trigger = 'helilo';
        for (var i = 0; i < trigger.length; i++) {
            e.charCode = trigger.charCodeAt(i);
            $("html").trigger(e);
        }

        expect($('html').hasClass('easteregged')).toBe(false);
    });

});

(function() {
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 250;

    /**
    Create the `HTMLReporter`, which Jasmine calls to provide results of each spec and each suite. The Reporter is responsible for presenting results to the user.
    */
    var htmlReporter = new jasmine.HtmlReporter();
    jasmineEnv.addReporter(htmlReporter);

    /**
    Delegate filtering of specs to the reporter. Allows for clicking on single suites or specs in the results to only run a subset of the suite.
    */
    jasmineEnv.specFilter = function(spec) {
        return htmlReporter.specFilter(spec);
    };

    /**
    Run all of the tests when the page finishes loading - and make sure to run any previous `onload` handler

    ### Test Results

    Scroll down to see the results of all of these specs.
    */
    var currentWindowOnload = window.onload;
    window.onload = function() {
        if (currentWindowOnload) {
          currentWindowOnload();
        }

        execJasmine();
    };

    function execJasmine() {
    jasmineEnv.execute();
    }
})();