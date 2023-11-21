
$(document).ready(function () {
    function onEventClick() {
        const $jsClickEle = $('.js__click'),
            $content = $('.tabcontent');

        // Hide all content 
        $content.hide();
        $content.first().show();
        $jsClickEle.first().addClass('active');

        $jsClickEle.on('click', function (event) {
            event.preventDefault();

            const $thisAttr = $(this).attr('data-attr');

            // Add class active to current and remove class from their sibling
            $jsClickEle.removeClass('active');
            $(this).addClass('active');


            $content.hide();

            $(`.${$thisAttr}`).show();
        })
    }

    $(".radio").click(function () {
        $(".radio > span").removeClass("active");
        $(this).find('span').addClass("active");
    })

    function btnColor() {
        let btn = $('.js-color'),
            imgElement = $(' .img__phone img');

        btn.click(function () {
            let dataColor = $(this).attr('data-color');
            imgElement.hide();
            $(`.${dataColor}_img img`).show();
        })
    }

    $(document).on("click", function (e) {
        const $openDropdown = $('.js__open-dropdown');

        if ($(e.target).is(".js__dropdown") === false) {
            if ($openDropdown.hasClass('active')) {
                $openDropdown.removeClass('active');
            }
        }
    });

    function openDropdown() {
        let $dropdown = $('.dropdown'),
            dropdownChildren = $('.dropdown-toggle');

        $dropdown.each(function () {
            // console.log($(this).length);
            $(this).click(function () {
                $(this).find('.dropdown-content').addClass('active');
                dropdownChildren.click(function () {
                    let btn = $(this).closest('.dropdown').find('.dropbtn');
                    const thisVal = $(this).text();

                    // console.log($(this).text());
                    btn.text(thisVal);
                });



            })
        });




        // btn.click(function (e) {
        //     openDropdown.addClass('active');
        //     const that = $(this);
        // });
    };

    onEventClick();
    btnColor();
    openDropdown();
});
