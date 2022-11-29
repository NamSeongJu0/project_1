// 디저트 호버 + 이벤트 깜빡임 효과
        $(document).ready(function () {
            $('#dessert img').hover(function () {
                $(this).siblings('.best').fadeIn();
            }, function () {
                $(this).siblings('.best').fadeOut();
            });
        });

        setInterval(function () {
            $('.Event').toggle();
        }, 150);