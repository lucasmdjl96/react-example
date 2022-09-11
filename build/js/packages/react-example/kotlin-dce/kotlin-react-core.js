(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'react'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('react'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-core'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-react-core'.");
    }
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-core'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-react-core'.");
    }
    root['kotlin-react-core'] = factory(typeof this['kotlin-react-core'] === 'undefined' ? {} : this['kotlin-react-core'], kotlin, react);
  }
}(this, function (_, Kotlin, $module$react) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Unit = Kotlin.kotlin.Unit;
  var wrapFunction = Kotlin.wrapFunction;
  var isValidElement = $module$react.isValidElement;
  var rawUseEffect = $module$react.useEffect;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  function createEffectCallback$lambda(closure$effect) {
    return function () {
      var cleanups = [];
      closure$effect(cleanups);
      return buildCleanup(cleanups);
    };
  }
  function createEffectCallback(effect) {
    return createEffectCallback$lambda(effect);
  }
  function buildCleanup$lambda(closure$cleanups) {
    return function () {
      var tmp$, tmp$_0;
      tmp$ = closure$cleanups;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var cleanup = tmp$[tmp$_0];
        cleanup();
      }
      return Unit;
    };
  }
  function buildCleanup(cleanups) {
    if (cleanups.length === 0)
      return undefined;
    return buildCleanup$lambda(cleanups);
  }
  function useEffectOnce(effect) {
    var callback = createEffectCallback(effect);
    rawUseEffect(callback, []);
  }
  var package$react = _.react || (_.react = {});
  package$react.createEffectCallback_1ce2r7$ = createEffectCallback;
  $$importsForInline$$.react = $module$react;
  package$react.useEffectOnce_yy86ve$ = useEffectOnce;
  return _;
}));

//# sourceMappingURL=kotlin-react-core.js.map
