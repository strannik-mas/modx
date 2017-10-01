$.fn.toShowHide = function(a) {
    var b = {box: null};
    return this.each(function() {
        a && $.extend(b, a);
        var f = $(this), c = $(b.box), g = $(".close", c), d = Math.floor(900 * Math.random()) + 100;
        f.on("click", function() {
            c.show();
            var a = !0;
            $(document).bind("click." + d, function(e) {
                !1 != a || 0 != $(e.target).closest(b.box).length && 1 != $(e.target).closest(g).length || (c.hide(), $(document).unbind("click." + d));
                a = !1
            })
        })
    })
};

$(document).ready(function() {

	$("input[NAME='MS_PHONE']").mask("+7 (999) 999-99-99");

    $('#slider').okSlider({
        speed: 750
    });

    $('#promo').okSlider({
        speed: 750, fade: true, carousel: false, button: '#promo .tab a'
    });

    $('select').selectmenu({
        style: 'dropdown', transferClasses: true
    });

    $('input[type="checkbox"], input[type="radio"]').styler();

    $('input[placeholder], textarea[placeholder]').placeholder();

    $('#header a.question').toShowHide({'box': '#question'});

    $.datepicker.setDefaults( $.extend($.datepicker.regional["ru"]) );
    $('.datepicker').datepicker({
        showOn: "both",
        buttonImage: "http://poly-baby.ru/bitrix/templates/pediatria/i/calendar.png",
        buttonImageOnly: true
    });

    $("div.link div.item form#question").validate({
        rules: {
            MS_NAME: "required",
            MS_EMAIL: {required: true, email: true},
            MS_QUESTION: "required",
	    CAPTCHA: "required"
        },
        messages: {
            MS_NAME: "Укажите Имя",
            MS_EMAIL: {
                required: "Введите свою почту",
                email: "Укажите правильную почту"
            },
            MS_QUESTION: "Заполните поле вопроса",
	    CAPTCHA: "Введите контрольные цифры"
        }, errorPlacement: function(error, element) {
            error.insertAfter(element);
        },
        submitHandler: function(form) {
            $.ajax({
                url: $(form).attr('action'),
                type: 'POST',
                data: $(form).serialize(),
                context: $(form),
                dataType: 'json'
            }).done(function(data)
            {
		$(form).find('span.captcha').html(data.CAPTCHA_IMAGE);
                if (data.SUCCESS)
                {
                    $.fancybox('<h1>Ваша заявка принята</h1>');
                    $('.l-4.question').click();
                } else
                {
                    $.fancybox('<h1>Ошибка: ' + data.ERROR_MSG + '</h1>');
                }
            });
        }
    });

    $('.gallery a').fancybox();

    $('.admin-reply > a').click(function () {
        var $this = $(this);

        var active = $this.attr('data-active');
        if (!active || active!=1){
            var height = $this.next().children().height();

            $this.next().animate({height: height, opacity: '1'}, '1000');
            $this.attr('data-active', '1');
        }
        else {
            height = $this.height();

            $this.next().animate({height: '0', opacity: '0'}, '1000');
            $this.attr('data-active', '0');
        }
        return false;
    });

    $('#content.service .block-post img').eq(0).after('<div class="register"><a class="open-register" href=""><i></i>Записаться на прием</a></div>');

    var $register = $('#d-register');
    $('a.open-register').on('click', function() {

        var ajax_data = {
        };

        $.ajax({
            url: '/bitrix/templates/pediatria/ajax/priem.php',
            type: 'POST',
            data: ajax_data,
            context: this,
            dataType: 'json'
        }).done(function(data) {
            $register.dialog({
                autoOpen: false,
                modal: true,
                width: 480,
                open: function() {
                    $('.ui-widget-overlay').on('click', function() {
                        $register.dialog('close');
                    });
                    $register.find('select, input, textarea').first().blur();

                    $("div#d-register div.form form#zapis").validate({
                        rules: {
                            MS_NAME: "required",
                            MS_PHONE: "required",
                            MS_EMAIL: {required: true, email: true}
                        },
                        messages: {
                            MS_NAME: "Укажите ФИО",
                            MS_PHONE: "Укажите свой номер телефона",
                            MS_EMAIL: {
                                required: "Введите свою почту",
                                email: "Укажите правильную почту"
                            }
                        }, errorPlacement: function(error, element) {
                            error.insertAfter(element);
                        },
                        submitHandler: function(form) {
                            $.ajax({
                                url: $(form).attr('action'),
                                type: 'POST',
                                data: $(form).serialize(),
                                context: $(form),
                                dataType: 'json'
                            }).done(function(data)
                            {
                                $(form).find('span.captcha').html(data.CAPTCHA_IMAGE);
                                if (data.SUCCESS)
                                {
                                    $.fancybox('<h1>Ваша заявка принята</h1>', {
                                        afterClose: function()
                                        {
                                            $('#d-register').dialog('close');
                                        }
                                    });
                                } else
                                {
                                    $.fancybox('<h1>Ошибка: ' + data.ERROR_MSG + '</h1>');
                                }
                            });
                        }
                    });

                    $.each(data.SPEC, function(key, value)
                    {
                        $('select[name=MS_SPEC]')
                                .append($("<option></option>")
                                .attr("value", value.ID)
                                .text(value.NAME));
                    });
                    $('select[name=MS_DOCTOR]').change(function()
                    {
                        $('#zapis div.photo img').attr('src', $(this).find(':selected').data('picture'));
                    });

                    $('select[name=MS_SPEC]').change(function()
                    {
                        $('#zapis div.photo img').attr('src', '');

                        var ajax_data = {
                            "SELECTED_SECTION_ID": $(this).val()
                        };

                        $.ajax({
                            url: '/bitrix/templates/pediatria/ajax/priem.php',
                            type: 'POST',
                            data: ajax_data,
                            context: this,
                            dataType: 'json'
                        }).done(function(data) {
                            $('select[name=MS_DOCTOR]').html('<option value="0">- Не указано -</option>');
                            $.each(data.DOCTOR, function(key, value)
                            {
                                $('select[name=MS_DOCTOR]')
                                        .append($("<option></option>")
                                        .attr("value", value.ID)
                                        .data("picture", value.PICTURE)
                                        .text(value.NAME));
                            });

                            $register.find("select").selectmenu("destroy").selectmenu({style: 'dropdown', transferClasses: true});
                        });


                    });
                    $register.find("select").selectmenu("destroy").selectmenu({style: 'dropdown', transferClasses: true});
                },
                close: function() {
                    $register.dialog('destroy');
                }
            });

            $register.parent('.ui-dialog').appendTo('#layout');
            $register.dialog('open');
        });



        return false;
    });

    var photo_cur = 0, $product_photo = $('#content.doctor .photo');
    $('.list li a', $product_photo).click(function() {

        var this_li = $(this).parent();

        if (this_li.index() != photo_cur) {

            $('.big img', $product_photo).attr('src', $(this).attr('data-src'));

            photo_cur = this_li.index();

            $('li.cur', $product_photo).removeClass('cur');
            this_li.addClass('cur');
        }

        return false;
    });

    var $tab = $('#content.doctor .question .tab a'), cur_tab = 0;
    $tab.on('click', function() {

        var cl_tab = $(this).index();

        if (cur_tab != cl_tab) {

            $tab.eq(cur_tab).removeClass('cur');
            $(this).addClass('cur');

            $('#content.doctor .question .form').eq(cur_tab).addClass('hidden');
            $('#content.doctor .question .form').eq(cl_tab).removeClass('hidden');

            cur_tab = cl_tab;
        }

        return false;
    });

});