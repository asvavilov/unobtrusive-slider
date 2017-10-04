var UnobtrusiveSlider = function (islider)
{
	var slides = islider.querySelectorAll('[data-slider-items] > *');
	var sliderNav = islider.querySelector('[data-slider-nav]');
	var sliderNavPrev = islider.querySelector('[data-slider-nav-prev]');
	var sliderNavNext = islider.querySelector('[data-slider-nav-next]');
	var settings = {
		timeout: islider.getAttribute('data-slider-timeout')
	};
	var timeout = null;

	var currentSlide = null;
	var goSlide = function (i) {
		var prevSlide = currentSlide;
		if (isNaN(i))
		{
			currentSlide++;
		}
		else
		{
			currentSlide = i;
		}
		if (currentSlide < 0)
		{
			currentSlide = slides.length - 1;
		}
		else if (currentSlide > slides.length - 1)
		{
			currentSlide = 0;
		}
		slides.item(prevSlide).classList.remove('active');
		slides.item(currentSlide).classList.add('active');
		if (sliderNav)
		{
			sliderNav.children.item(prevSlide).classList.remove('active');
			sliderNav.children.item(currentSlide).classList.add('active');
		}

		if (settings.timeout > 0 && timeout !== false)
		{
			if (timeout) clearTimeout(timeout);
			timeout = setTimeout(function () {
				goSlide();
			}, settings.timeout);
		}

	};

	if (sliderNav)
	{
		var i = 0;
		slides.forEach(function (islide) {
			var navItem = document.createElement('div');
			if (islide.classList.contains('active'))
			{
				navItem.classList.add('active');
			}
			navItem.addEventListener('click', function (i) {
				return function () {
					goSlide(i);
				};
			}(i++));
			sliderNav.appendChild(navItem);
		});
	}
	if (sliderNavPrev)
	{
		sliderNavPrev.addEventListener('click', function () {
			goSlide(currentSlide - 1);
		});
	}
	if (sliderNavNext)
	{
		sliderNavNext.addEventListener('click', function () {
			goSlide(currentSlide + 1);
		});
	}

	if (settings.timeout > 0)
	{
		islider.addEventListener('mouseover', function () {
			if (timeout) clearTimeout(timeout);
			timeout = false;
		});
		islider.addEventListener('mouseout', function () {
			if (timeout) clearTimeout(timeout);
			timeout = setTimeout(function () {
				goSlide();
			}, settings.timeout);
		});
	}

	goSlide(0);
};
