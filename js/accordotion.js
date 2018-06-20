     function toggleIcon(e) {

        $(e.target)

            .prev('.panel-heading')

            .find(".short-full")

            .toggleClass('glyphicon-plus glyphicon-minus');

    }

    $('.panel-group').on('hidden.bs.collapse', toggleIcon);

    $('.panel-group').on('shown.bs.collapse', toggleIcon);