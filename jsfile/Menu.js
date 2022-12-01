        // 라벨 클릭 시 보여지는 스크립트
        $(function() {
            $('.menuList label:nth-of-type(1)').click(function() {
                $("#CoffeeList").fadeIn();
                $("#IceBlendedList").hide();
                $("#BakeryList").hide();
            });


            $('.menuList label:nth-of-type(2)').click(function() {
                $("#IceBlendedList").fadeIn().css('display', 'flex');
                $("#CoffeeList").hide();
                $("#BakeryList").hide();
            });


            $('.menuList label:nth-of-type(3)').click(function() {
                $("#BakeryList").fadeIn().css('display', 'flex');
                $("#IceBlendedList").hide();
                $("#CoffeeList").hide();
            });
        });


        // 커피 이미지 호버 시 상품 설명
        $(document).ready(function () {
            $('.textbox').hide();

            $('#CoffeeList > div').hover(function () {
                $(this).children('.textbox').stop().fadeIn().css('display', 'flex');
            }, function () {
                $(this).children('.textbox').stop().fadeOut();
            });
        });


        // 블렌디드 이미지 호버 시 상품 설명
        $(document).ready(function () {
            $('.textbox').hide();

            $('#IceBlendedList > div').hover(function () {
                $(this).children('.textbox').stop().fadeIn().css('display', 'flex');
            }, function () {
                $(this).children('.textbox').stop().fadeOut();
            });
        });


        // 베이커리 이미지 호버 시 상품 설명
        $(document).ready(function () {
            $('.textbox').hide();

            $('#BakeryList > div').hover(function () {
                $(this).children('.textbox').stop().fadeIn().css('display', 'flex');
            }, function () {
                $(this).children('.textbox').stop().fadeOut();
            });
        });