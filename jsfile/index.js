// 디저트 호버 + 이벤트 깜빡임 효과
        $(document).ready(function () {
            $('#dessert img').hover(function () {
                $(this).siblings('.best').stop().fadeIn();
            }, function () {
                $(this).siblings('.best').stop().fadeOut();
            });
        });

        setInterval(function () {
            $('.Event').toggle();
        }, 350);