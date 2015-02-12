;
(function(exports) {
    "use strict";
    //------------------------------------------------------------------------------

    //------------------------------------------------------------------------------


    var SideView = Backbone.View.extend({
        // el: ".side",
        className: "side",
        events: {
            "click": "marco"
        },
        marco: function() {
            console.log("Marco!!")
            s.el.innerHTML += "MARCO!";
            this.trigger("marco")
        },
        initialize: function(){
            document.body.appendChild(this.el)
        }
    })

    var MainView = Backbone.View.extend({
        // el: ".main",
        className: "main",
        initialize: function(options) {
            this.listenTo(options.bodyView, "test", function(e) {
                m.el.innerHTML += "POLO!";
                console.log("Polo!!")
            })
            document.body.appendChild(this.el)
        }
    })

    var BodyView = Backbone.View.extend({
        el: "body",
        initialize: function(options) {
            this.listenTo(options.sideView, "marco", function() {
                console.log("triggering event from body view to main view")
                this.trigger("test");
            })
        }
    })


    var s = new SideView,
        b = new BodyView({ sideView: s }),
        m = new MainView({ bodyView: b });

    exports.b = b;
    exports.m = m;
    exports.s = s;

})(typeof module === "object" ? module.exports : window)