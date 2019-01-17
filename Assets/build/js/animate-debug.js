$(function () {

    var selectors = [
                     [".firstSlide > header", "fadeInDown"],
                     [".firstSlide > .content > div", "fadeInDown"],
                     [".secondSlide .txtcenter:nth-child(1), .secondSlide .txtcenter:nth-child(2)", "fadeInLeft"],
                     [".secondSlide .txtcenter:nth-child(3), .secondSlide .txtcenter:nth-child(4)", "fadeInRight"],
                     [".thirdSlide .content", "fadeInDown"],
                     [".fourthSlide>div>div:nth-child(1)", "fadeInLeft"],
                     [".fourthSlide>div>div:nth-child(2)", "fadeInDown"],
                     [".fourthSlide>div>div:nth-child(3)", "fadeInRight"],
                     [".quote > img", "fadeInLeft"],
                     [".quote > div", "fadeInRight"],
                     [".sixth .quad > div:nth-child(1)", "fadeInDown"],
                     [".sixth .quad > div:nth-child(2)", "fadeInDown"],
                     [".sixth .quad > div:nth-child(3)", "fadeInUp"],
                     [".sixth .quad > div:nth-child(4)", "fadeInUp"],
                     [".sixth .solo", "fadeInRight"],
                     ["footer>.links>ul:nth-child(1), footer>.links>ul:nth-child(2)", "fadeInLeft"],
                     ["footer>.links>ul:nth-child(3), footer>.links>ul:nth-child(4)", "fadeInRight"]
                    ];

    $(selectors).each(function (key, step) {
        var selector = step[0];
        var animation = step[1];
        $(selector).css('visibility', 'hidden');

        $(selector).bind('inview', function (event, isInView) {
            if (isInView) {
                $(selector).css('visibility', 'visible');
                $(this).addClass('animated ' + animation);
            }
        });
    });


});