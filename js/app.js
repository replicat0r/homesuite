 (function () {
            var formWrap = document.getElementById('fs-form-wrap-right');

    [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function (el) {
                new SelectFx(el, {
                    stickyPlaceholder: false,
                    onChange: function (val) {
                        document.querySelector('span.cs-placeholder').style.backgroundColor = val;
                    }
                });
            });

            new FForm(formWrap, {
                onReview: function () {
                    classie.add(document.body, 'overview'); // for demo purposes only
                }
            });
        })();

        (function () {
            var formWrap = document.getElementById('fs-form-wrap-left');

    [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function (el) {
                new SelectFx(el, {
                    stickyPlaceholder: false,
                    onChange: function (val) {
                        document.querySelector('span.cs-placeholder').style.backgroundColor = val;
                    }
                });
            });

            new FForm(formWrap, {
                onReview: function () {
                    classie.add(document.body, 'overview'); // for demo purposes only
                }
            });
        })();