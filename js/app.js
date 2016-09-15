var main = function() {
    $(".name").click(function () {
        $(".name").animate({font-size: "100px"}, 500);
    });
};

$(document).ready(main);