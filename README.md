
```
document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.slider1 [data-slider]').forEach(function (islider) {
		UnobtrusiveSlider(islider);
	});
});
```

```
<div class="slider1">
	<div class="container slider1-container" data-slider="" data-slider-timeout="5000">
		<div class="slider1-items" data-slider-items="">
			<div class="slider1-item active" style="background-image:url('image1.jpg')"></div>
			<div class="slider1-item" style="background-image:url('image2.jpg')"></div>
			<div class="slider1-item" style="background-image:url('image3.jpg')"></div>
			<div class="slider1-item" style="background-image:url('image4.jpg')"></div>
			<div class="slider1-item" style="background-image:url('image5.jpg')"></div>
		</div>
		<div class="slider1-nav" data-slider-nav></div>
		<div class="slider1-nav-item slider1-nav-prev" data-slider-nav-prev></div>
		<div class="slider1-nav-item slider1-nav-next" data-slider-nav-next></div>
	</div>
</div>
```

```
.slider1 {
	height: 448px;
	background-color: #f1efec;
}
.slider1-container {
	overflow: hidden;
	position: relative;
}
.slider1-item {
	width: 100%;
	height: 100%;
	background-position: center center;
	background-size: cover;
	position: absolute;
	left: 0;
	top: 0;
}
.slider1-item {
	transition: opacity .5s;
}
.slider1-item:not(.active) {
	opacity: 0;
}

.slider1-nav {
	background-color: rgba(172, 169, 159, 0.9);
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-right: 34px;
}
.slider1-nav > * {
	background-color: rgba(255, 255, 255, 0.6);
	width: 51px;
	height: 4px;
	margin-left: 1px;
	cursor: pointer;
}
.slider1-nav > *:hover {
	background-color: rgba(255, 255, 255, 0.902);
}
.slider1-nav > *.active {
	background-color: rgb(240, 201, 0);
	cursor: default;
}

.slider1-nav-item {
	display: none;
	cursor: pointer;
	position: absolute;
	top: calc(50% - 110px);
	opacity: 0.7;
}
.slider1-container:hover .slider1-nav-item {
	display: block;
}
.slider1-nav-prev {
	left: 0.6em;
	border-top: 110px solid transparent;
	border-bottom: 110px solid transparent;
	border-right: 40px solid #FFF;
}
.slider1-nav-next {
	right: 0.6em;
	border-top: 110px solid transparent;
	border-bottom: 110px solid transparent;
	border-left: 40px solid #FFF;
}
```
