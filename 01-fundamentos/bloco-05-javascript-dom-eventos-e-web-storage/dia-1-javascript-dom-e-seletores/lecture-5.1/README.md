# Let's practice!

### To start practicing, copy the example below to a file on your machine.

```
<!DOCTYPE html>
<html>
  <body>
    <header>
      <h2 id="page-title">Título</h2>
      <p id="paragraph">Dê uma cor para este parágrafo!</p>
      <h4 id="subtitle">Subtítulo</h4>
      <p id="second-paragraph">Segundo parágrafo!</p>
    </header>
    <script>
      const paragraph = document.getElementById("paragraph");
      paragraph.style.color = "red";
    </script>
  </body>
</html>
```

### Do as follows:

- [ ] Retrieve the element that contains the page title and do something with it, like changing it to the name of your favorite movie.
- [ ] Now retrieve the second paragraph and use your creativity to change it.
- [ ] Por fim, recupere o subtítulo e altere-o também.

### Using the same template as in the previous exercise:

- [ ] Add an equal class for both paragraphs.
- [ ] Retrieve your paragraphs via JavaScript, using getElementsByClassName.
- [ ] Change some of the style of the first one.
- [ ] Retrieve the subtitle and change its color using the function getElementsByTagName.

