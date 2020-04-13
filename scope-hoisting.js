//====================Variable Scope and Hoisting Explained====================//

function startAnimation() {
  //To do code
}

function stopAnimation() {
  //to do code
}

var Anim = function () {
  //To do code
};

Anim.prototype.start = function () {};

Anim.prototype.stop = function () {};

var myAnim = new Anim();
myAnim.start();
myAnim.stop();

/* An anonymous function. */
(function () {
  var foo = 10;
  var bar = 2;
  console.log(`An anonymous function result = ${foo * bar}`);
})();

/* An anonymous function with arguments. */
(function (foo, bar) {
  console.log(`An anonymous function with arguments result =${foo * bar}`);
})(10, 5);

var baz = (function (foo, bar) {
  console.log(`An anonymous function with arguments result =${foo * bar}`);
})(10, 30);

function displayError(mes) {
  displayError.numTimesExecuted++;
  console.log(mes);
}

displayError.numTimesExecuted = 0;
displayError("my message");

(function ($) {
  jQuery.fn.myPlugin = function () {
    //Do your awesome plugin stuff here
  };
})(jQuery);

(function ($) {
  $.fn.myPlugin = function () {
    this.fadeIn("normal", function () {
      // the this keyword is a DOM element
    });
  };
});

$("#element").myPlugin();

(function ($) {
  $.fn.maxHeight = function () {
    var max = 0;
    this.each(function () {
      max = Math.max(max, $(this).height());
    });
    return max;
  };
})(jQuery);

var tallest = $("div").maxHeight();
console.log(`tallest= ${tallest}`);

(function ($) {
  $.fn.lockDimensions = function (type) {
    return this.each(function () {
      var that = $(this);
      if (!type || type == "width") {
        that.width($this.width());
      }
      if (!type || type == "height") {
        that.width($this.height());
      }
    });
  };
})(jQuery);
$("div").lockDimensions("width").css("color", "red");

(function ($) {
  $.fn.tooltip = function (options) {
    // Create some defaults
    var settings = $.extend(
      {
        location: "top",
        "background-color": "blue",
      },
      options
    );
    return this.each(function () {
      // Tooltip plugin code here
    });
  };
})(jQuery);
$("div").tooltip({
  location: "left",
});

(function ($) {
  $.fn.tooltip = function (options) {
    //To do code
  };
  $.fn.tooltipShow = function () {};

  $.fn.tooltipHide = function () {};

  $.fn.tooltipUpdate = function (content) {};
})(jQuery);

(function ($) {
  var methods = {
    init: function (options) {},
    show: function () {
      // IS
    },
    hide: function () {
      // GOOD
    },
    update: function (content) {
      // !!!
    },
  };
  $.fn.tooltip = function (method) {
    /*...*/
  };
})(jQuery);

$.fn.tooltip = function (method) {
  // Method calling logic
  if (methods[method]) {
    return methods[method].apply(
      this,
      Array.prototype.slice.call(arguments, 1)
    );
  } else if (typeof methods === "object" || !method) {
    return methods.init.apply(this, arguments);
  } else {
    $.error("Method " + method + " does not exist on jQuery.tooltip");
  }
};

// calls the init method
$('div').tooltip();
 
// calls the init method
$('div').tooltip({
    foo: 'bar'
});

// calls the hide method
$('div').tooltip('hide');
 
// calls the update method
$('div').tooltip('update', 'new content!'); 


//========Event========//
var methods = {
    init: function(options){
        return this.each(function(){
            $(window).bind('resize.tooltip', methods.reposition);
        });
    },
    destroy: function(){
        return this.each(function () {
            $(window).unbind('.tooltip');
          });
    }
};

//========End Event========//


//========Data========//
var methods = {
    init: function (options) {
        return this.each(function () {
            var $this = $(this),
            data = $this.data('tooltip'),
            tooltip = $('<div />', { text: $this.attr('title') });
            if (!data) {
                $(this).data('tooltip', {
                    target: $this,
                    tooltip: tooltip
                });
            }
        });
    },
    destroy: function () {
        return this.each(function () {
            var $this = $(this),
            data = $this.data('tooltip');
            data.tooltip.remove();
            $this.removeData('tooltip');
        })
    }
};

//========End Data========//

//====================End Variable Scope and Hoisting Explained=====================//
