(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-js', '@emotion/css', 'kotlin-csstype', '@emotion/styled'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-js'), require('@emotion/css'), require('kotlin-csstype'), require('@emotion/styled'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-emotion'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-emotion'.");
    }
    if (typeof this['kotlin-js'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-emotion'. Its dependency 'kotlin-js' was not found. Please, check whether 'kotlin-js' is loaded prior to 'kotlin-emotion'.");
    }
    if (typeof this['@emotion/css'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-emotion'. Its dependency '@emotion/css' was not found. Please, check whether '@emotion/css' is loaded prior to 'kotlin-emotion'.");
    }
    if (typeof this['kotlin-csstype'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-emotion'. Its dependency 'kotlin-csstype' was not found. Please, check whether 'kotlin-csstype' is loaded prior to 'kotlin-emotion'.");
    }
    if (typeof this['@emotion/styled'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-emotion'. Its dependency '@emotion/styled' was not found. Please, check whether '@emotion/styled' is loaded prior to 'kotlin-emotion'.");
    }
    root['kotlin-emotion'] = factory(typeof this['kotlin-emotion'] === 'undefined' ? {} : this['kotlin-emotion'], kotlin, this['kotlin-js'], this['@emotion/css'], this['kotlin-csstype'], this['@emotion/styled']);
  }
}(this, function (_, Kotlin, $module$kotlin_js, $module$_emotion_css, $module$kotlin_csstype, $module$_emotion_styled) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var FROM_PERCENTAGE;
  var TO_PERCENTAGE;
  var index;
  $$importsForInline$$['@emotion/css'] = $module$_emotion_css;
  FROM_PERCENTAGE = (0).toString() + '%';
  TO_PERCENTAGE = (100).toString() + '%';
  index = 0;
  return _;
}));

//# sourceMappingURL=kotlin-emotion.js.map
