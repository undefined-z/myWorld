(function (window,$) {
    window.zUtil={
        getDistance:getDistance
    };
    $.fn.distance=distance;
    function getDistance(obj) {
        if (!obj instanceof $) {
            obj = $(obj);
        }
        var distance = {};
        distance.top = (obj.offset().top - $(document).scrollTop());
        distance.bottom = ($(window).height() - distance.top - obj.outerHeight());
        distance.left = (obj.offset().left - $(document).scrollLeft());
        distance.right = ($(window).width() - distance.left - obj.outerWidth());
        return distance;
    }
    function distance(ele) {
        var distance = {};
        distance.top = (this.offset().top - $(document).scrollTop());
        distance.bottom = ($(window).height() - distance.top - this.outerHeight());
        distance.left = (this.offset().left - $(document).scrollLeft());
        distance.right = ($(window).width() - distance.left - this.outerWidth());
        //$('<div>'+distance.bottom+'</div>').prepend('body').css({position:'fixed',top:0});
        //console.log(distance.bottom);
        if (ele){
            if (!ele instanceof jQuery) {
                ele = $(ele);
            }
            ele.html('<div>距离浏览器左边框:'+parseInt(distance.left)+'</div>' +
                '<div>距离浏览器右边框:'+parseInt(distance.right)+'</div>' +
                '<div>距离浏览器上边框:'+parseInt(distance.top)+'</div>' +
            '<div>距离浏览器下边框:'+parseInt(distance.bottom)+'</div>');
        }
        return distance;
    }
})(window,jQuery);