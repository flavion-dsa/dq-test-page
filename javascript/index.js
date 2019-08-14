const { MDCSlider } = mdc.slider;

const sliders = [].map.call(document.querySelectorAll('.mdc-slider'), el => {
  return new MDCSlider(el);
})

sliders[0].value = 50;
sliders[1].value = 50;
sliders[2].value = 50;