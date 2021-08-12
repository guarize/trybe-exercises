const backgroundBtn = document.getElementById('background-button');
const fontColorBtn = document.getElementById('font-color-button');
const fontSizeBtn = document.getElementById('font-size-button');
const letterSpacingBtn = document.getElementById('letter-spacing-button');
const fontFamilyBtn = document.getElementById('font-family-button');
const body = document.querySelector('body');

// Change background-color
backgroundBtn.addEventListener('input', function () {
  body.style.backgroundColor = document.getElementById('background-button').value;
});

// Change font color
fontColorBtn.addEventListener('input', function () {
  body.style.color = document.getElementById('font-color-button').value;
});

// Change font size
fontSizeBtn.addEventListener('keyup', function () {
  if (document.getElementById('font-size-button').value === '') {
    body.style.fontSize = '16px'
  } else {
    body.style.fontSize = document.getElementById('font-size-button').value + 'px';
  }
});

// Change letter-spacing
letterSpacingBtn.addEventListener('keyup', function () {
  body.style.letterSpacing = document.getElementById('letter-spacing-button').value + 'px';
});

// Change font-family
fontFamilyBtn.addEventListener('keyup', function () {
  body.style.fontFamily = document.getElementById('font-family-button').value
})