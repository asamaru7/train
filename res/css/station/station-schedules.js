(function () {
    $(function () {
        alert(1);
        $('.cSchedulesBox').each(function () {
            var $cSchedulesBox = $(this);

            $('.cSelectDate', $cSchedulesBox).on('change', function () {
                $('.cDateSection', $cSchedulesBox).hide();
                $('.cDateSection.c-' + this.value, $cSchedulesBox).show();
            });
        });
    });
})();