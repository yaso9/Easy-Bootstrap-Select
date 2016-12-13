(function ($) {
  $(document).ready(function () {
    $('.replaceSelect').find('select').each(function (index) {
			let customSelect = '<ul><li class="dropdown" style="list-style: none;"><button class="btn btn-primary dropdown dropdown-toggle" data-toggle="dropdown">' + $(this).find('option:selected').text() + ' <b class="caret"></b></button><ul class="dropdown-menu scrollable-menu">';

			$(this).find('option').each(function (index) {
				let temp = this
				customSelect = customSelect + '<li class="' + index + ' dropdownElement ' + ($(this).prop('disabled') ? 'disabled' : '') + '"><span class="text">' + $(this).html() + '</span></li>'
				setTimeout(function () {
					$('.dropdownElement.' + index).on('click', function () {
						$(temp).parents('select').val($(temp).attr('value'))
						$(temp).parents('select').trigger('change')
					})
				}, 500)
			})

			customSelect = customSelect + '</ul></li></ul>'
			$(this).after(customSelect)
			$(this).hide()
		})
		setTimeout(function () {
			$('li.disabled').off('click')
		}, 500)
  })
})(jQuery)
