'use strict';

/**
 * html-to-markdown
 * Copyright(c) 2015-2015 Harminder Virk
 * MIT Licensed
*/

var converter = require('../index');

var html = `<div>
  <h2> This is a dummy heading for Lorem guy </h2>
  <h3> I am sub heading buddy </h3>
  <p> This is a paragrap buddy </p>
  <ul>
    <li> This is ul 1 </li>
  </ul>
  <ol>
    <li> This is ol 1 </li>
  </ol>
  <ul>
    <li> This is ul 2 </li>
  </ul>
  <section> This is a section </section>
  <pre>
    var name = "foo";
  </pre>
  <blockquote>
    This is super quote
    In multiple lines
  </blockquote>
  <b> This is bold tag </b>
  <i> Some italic </i>
</div>
`
console.log(converter.convert(html))