(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-js'.");
    }
    root['kotlin-js'] = factory(typeof this['kotlin-js'] === 'undefined' ? {} : this['kotlin-js'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Iterator = Kotlin.kotlin.collections.Iterator;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Annotation = Kotlin.kotlin.Annotation;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var DurationUnit = Kotlin.kotlin.time.DurationUnit;
  return _;
}));

//# sourceMappingURL=kotlin-js.js.map
