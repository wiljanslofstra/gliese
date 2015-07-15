/* For detailed credits and licence information see http://github.com/financial-times/polyfill-service.
 * 
 * UA detected: ie/8.0.0
 * Features requested: default
 * Library version: latest
 * 
 * - Object.defineProperty-ie8, License: CC0  (required by "default", "Array.isArray", "Element.prototype.classList", "Function.prototype.bind", "Object.defineProperties")
 * - Array.isArray, License: CC0  (required by "default")
 * - Array.prototype.every, License: CC0  (required by "default")
 * - Array.prototype.filter, License: CC0  (required by "default")
 * - Array.prototype.forEach, License: CC0  (required by "default")
 * - Array.prototype.indexOf, License: CC0  (required by "default")
 * - Array.prototype.lastIndexOf, License: CC0  (required by "default")
 * - Array.prototype.map, License: CC0  (required by "default")
 * - Array.prototype.reduce, License: CC0  (required by "default")
 * - Array.prototype.reduceRight, License: CC0  (required by "default")
 * - Array.prototype.some, License: CC0  (required by "default")
 * - Document-ie8, License: CC0  (required by "default", "Event")
 * - Element-ie8, License: CC0  (required by "default", "Event", "Element.prototype.classList", "Element.prototype.cloneNode", "Element.prototype.matches")
 * - Event-ie8, License: CC0  (required by "default", "CustomEvent", "Event.DOMContentLoaded", "XMLHttpRequest")
 * - CustomEvent-ie8, License: CC0  (required by "default")
 * - DOMTokenList, License: CC0  (required by "default", "Element.prototype.classList")
 * - Date.now, License: CC0  (required by "default", "requestAnimationFrame", "performance.now")
 * - Date.prototype.toISOString, License: CC0  (required by "default")
 * - Element.prototype.classList, License: CC0  (required by "default")
 * - Element.prototype.cloneNode-ie8, License: CC0  (required by "default")
 * - Element.prototype.matches, License: CC0  (required by "default", "Element.prototype.closest")
 * - Element.prototype.closest, License: CC0  (required by "default")
 * - Event.DOMContentLoaded, License: CC0  (required by "default")
 * - Function.prototype.bind, License: MIT  (required by "default")
 * - Object.assign, License: CC0  (required by "default")
 * - Object.defineProperties, License: CC0  (required by "default", "Object.create")
 * - Object.create, License: CC0  (required by "default")
 * - Object.getOwnPropertyNames-ie8, License: CC0  (required by "default")
 * - Object.getPrototypeOf, License: CC0  (required by "default")
 * - Object.keys, License: CC0  (required by "default")
 * - String.prototype.includes, License: CC0  (required by "default")
 * - String.prototype.trim, License: CC0  (required by "default")
 * - XMLHttpRequest, License: CC0  (required by "default")
 * - atob, License: MIT  (required by "default")
 * - performance.now, License: CC0  (required by "requestAnimationFrame")
 * - requestAnimationFrame, License: requestAnimationFrame polyfill by Erik Möller, fixes from Paul Irish, Tino Zijdel, and Jonathan Neal  (required by "default")
 * - ~html5-elements, License: MIT  (required by "default") */

(function(undefined) {

// Object.defineProperty
(function (nativeDefineProperty) {
  var ERR_ACCESSORS_NOT_SUPPORTED = 'Getters & setters cannot be defined on this javascript engine';
  var ERR_VALUE_ACCESSORS = 'A property cannot both have accessors and be writable or have a value';

  Object.defineProperty = function defineProperty(object, property, descriptor) {
    // handle object
    if (object === null || !(object instanceof Object || typeof object === 'object')) {
      throw new TypeError('Object must be an object');
    }

    // handle descriptor
    if (!(descriptor instanceof Object)) {
      throw new TypeError('Descriptor must be an object');
    }

    var
    propertyString = String(property),
    hasValueOrWritable = 'value' in descriptor || 'writable' in descriptor;

    // handle native support
    if (object === window || object === document || object === Element.prototype || object instanceof Element) {
      return nativeDefineProperty(object, propertyString, descriptor);
    }

    if ('get' in descriptor) {
      if (typeof descriptor.get !== 'function') {
        throw new TypeError('Getter expected a function');
      }
      if (hasValueOrWritable) {
        throw new TypeError(ERR_VALUE_ACCESSORS);
      }
      throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
    }

    if ('set' in descriptor) {
      if (typeof descriptor.set !== 'function') {
        throw new TypeError('Setter expected a function');
      }
      if (hasValueOrWritable) {
        throw new TypeError(ERR_VALUE_ACCESSORS);
      }
      throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
    }

    // OK to define value unconditionally, since all supported getter/accessor use cases are handled natively
    object[propertyString] = descriptor.value;

    // return object
    return object;
  };
})(Object.defineProperty);

// Array.isArray
(function (toString) {
  Object.defineProperty(Array, 'isArray', {
    configurable: true,
    value: function isArray(object) {
      return toString.call(object) === '[object Array]';
    },
    writable: true
  });
})(Object.prototype.toString);

// Array.prototype.every
Array.prototype.every = function every(callback) {
  if (this === undefined || this === null) {
    throw new TypeError(this + 'is not an object');
  }

  if (!(callback instanceof Function)) {
    throw new TypeError(callback + ' is not a function');
  }

  var
  object = Object(this),
  scope = arguments[1],
  arraylike = object instanceof String ? object.split('') : object,
  length = Number(arraylike.length) || 0,
  index = -1;

  while (++index < length) {
    if (index in arraylike && !callback.call(scope, arraylike[index], index, object)) {
      return false;
    }
  }

  return true;
};

// Array.prototype.filter
Array.prototype.filter = function filter(callback) {
  if (this === undefined || this === null) {
    throw new TypeError(this + 'is not an object');
  }

  if (!(callback instanceof Function)) {
    throw new TypeError(callback + ' is not a function');
  }

  var
  object = Object(this),
  scope = arguments[1],
  arraylike = object instanceof String ? object.split('') : object,
  length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
  index = -1,
  result = [],
  element;

  while (++index < length) {
    element = arraylike[index];

    if (index in arraylike && callback.call(scope, element, index, object)) {
      result.push(element);
    }
  }

  return result;
};

// Array.prototype.forEach
Array.prototype.forEach = function forEach(callback) {
  if (this === undefined || this === null) {
    throw new TypeError(this + 'is not an object');
  }

  if (!(callback instanceof Function)) {
    throw new TypeError(callback + ' is not a function');
  }

  var
  object = Object(this),
  scope = arguments[1],
  arraylike = object instanceof String ? object.split('') : object,
  length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
  index = -1,
  result = [],
  element;

  while (++index < length) {
    if (index in arraylike) {
      callback.call(scope, arraylike[index], index, object);
    }
  }
};

// Array.prototype.indexOf
Array.prototype.indexOf = function indexOf(searchElement) {
  if (this === undefined || this === null) {
    throw new TypeError(this + 'is not an object');
  }

  var
  arraylike = this instanceof String ? this.split('') : this,
  length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
  index = Number(arguments[1]) || 0;

  index = (index < 0 ? Math.max(length + index, 0) : index) - 1;

  while (++index < length) {
    if (index in arraylike && arraylike[index] === searchElement) {
      return index;
    }
  }

  return -1;
};

// Array.prototype.lastIndexOf
Array.prototype.lastIndexOf = function lastIndexOf(searchElement) {
  if (this === undefined || this === null) {
    throw new TypeError(this + 'is not an object');
  }

  var
  arraylike = this instanceof String ? this.split('') : this,
  length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
  index = Number(arguments[1]) || 0;

  index = 1 in arguments ? (index < 0 ? Math.max(length + index, 0) : index) + 1 : length;

  while (--index >= 0) {
    if (index in arraylike && arraylike[index] === searchElement) {
      return index;
    }
  }

  return -1;
};

// Array.prototype.map
Array.prototype.map = function map(callback) {
  if (this === undefined || this === null) {
    throw new TypeError(this + 'is not an object');
  }

  if (!(callback instanceof Function)) {
    throw new TypeError(callback + ' is not a function');
  }

  var
  object = Object(this),
  scope = arguments[1],
  arraylike = object instanceof String ? object.split('') : object,
  length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
  index = -1,
  result = [],
  element;

  while (++index < length) {
    if (index in arraylike) {
      result[index] = callback.call(scope, arraylike[index], index, object);
    }
  }

  return result;
};

// Array.prototype.reduce
Array.prototype.reduce = function reduce(callback) {
  if (this === undefined || this === null) {
    throw new TypeError(this + 'is not an object');
  }

  if (!(callback instanceof Function)) {
    throw new TypeError(callback + ' is not a function');
  }

  var
  object = Object(this),
  scope = arguments[1],
  arraylike = object instanceof String ? object.split('') : object,
  length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
  index = -1,
  previousValue;

  if (1 in arguments) {
    previousValue = arguments[1];
  } else {
    while (++index < length && !(index in arraylike)) {}

    if (index >= length) {
      throw new TypeError('Reduce of empty array with no initial value');
    }

    previousValue = arraylike[index];
  }

  while (++index < length) {
    if (index in arraylike) {
      previousValue = callback(previousValue, arraylike[index], index, object);
    }
  }

  return previousValue;
};

// Array.prototype.reduceRight
Array.prototype.reduceRight = function reduceRight(callback) {
  if (this === undefined || this === null) {
    throw new TypeError(this + 'is not an object');
  }

  if (!(callback instanceof Function)) {
    throw new TypeError(callback + ' is not a function');
  }

  var
  object = Object(this),
  scope = arguments[1],
  arraylike = object instanceof String ? object.split('') : object,
  length = -1,
  index = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
  previousValue;

  if (1 in arguments) {
    previousValue = arguments[1];
  } else {
    while (--index > length && !(index in arraylike)) {}

    if (index <= length) {
      throw new TypeError('Reduce of empty array with no initial value');
    }

    previousValue = arraylike[index];
  }

  while (--index > length) {
    if (index in arraylike) {
      previousValue = callback(previousValue, arraylike[index], index, object);
    }
  }

  return previousValue;
};

// Array.prototype.some
Array.prototype.some = function some(callback) {
  if (this === undefined || this === null) {
    throw new TypeError(this + 'is not an object');
  }

  if (!(callback instanceof Function)) {
    throw new TypeError(callback + ' is not a function');
  }

  var
  object = Object(this),
  scope = arguments[1],
  arraylike = object instanceof String ? object.split('') : object,
  length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
  index = -1;

  while (++index < length) {
    if (index in arraylike && callback.call(scope, arraylike[index], index, object)) {
      return true;
    }
  }

  return false;
};

// Document
// HTMLDocument is an extension of Document.  If the browser has HTMLDocument but not Document, the former will suffice as an alias for the latter.
this.Document = this.HTMLDocument;

// Element
window.HTMLElement = window.Element;

// Event
(function () {
  function indexOf(array, element) {
    var
    index = -1,
    length = array.length;

    while (++index < length) {
      if (index in array && array[index] === element) {
        return index;
      }
    }

    return -1;
  }

  window.Event = Window.prototype.Event = function Event(type, eventInitDict) {
    if (!type) {
      throw new Error('Not enough arguments');
    }

    var event = document.createEventObject();

    event.type = type;
    event.bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false;
    event.cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;

    return event;
  };

  window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function addEventListener() {
    var
    element = this,
    type = arguments[0],
    listener = arguments[1];

    if (!element._events) {
      element._events = {};
    }

    if (!element._events[type]) {
      element._events[type] = function (event) {
        var
        list = element._events[event.type].list,
        events = list.slice(),
        index = -1,
        length = events.length,
        eventElement;

        event.preventDefault = function preventDefault() {
          if (event.cancelable !== false) {
            event.returnValue = false;
          }
        };

        event.stopPropagation = function stopPropagation() {
          event.cancelBubble = true;
        };

        event.stopImmediatePropagation = function stopImmediatePropagation() {
          event.cancelBubble = true;
          event.cancelImmediate = true;
        };

        event.currentTarget = element;
        event.relatedTarget = event.fromElement || null;
        event.target = event.srcElement || element;
        event.timeStamp = new Date().getTime();

        if (event.clientX) {
          event.pageX = event.clientX + document.documentElement.scrollLeft;
          event.pageY = event.clientY + document.documentElement.scrollTop;
        }

        while (++index < length && !event.cancelImmediate) {
          if (index in events) {
            eventElement = events[index];

            if (indexOf(list, eventElement) !== -1) {
              eventElement.call(element, event);
            }
          }
        }
      };

      element._events[type].list = [];

      if (element.attachEvent) {
        element.attachEvent('on' + type, element._events[type]);
      }
    }

    element._events[type].list.push(listener);
  };

  window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function removeEventListener() {
    var
    element = this,
    type = arguments[0],
    listener = arguments[1],
    index;

    if (element._events && element._events[type] && element._events[type].list) {
      index = indexOf(element._events[type].list, listener);

      if (index !== -1) {
        element._events[type].list.splice(index, 1);

        if (!element._events[type].list.length) {
          if (element.detachEvent) {
            element.detachEvent('on' + type, element._events[type]);
          }
          delete element._events[type];
        }
      }
    }
  };

  window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function dispatchEvent(event) {
    if (!arguments.length) {
      throw new Error('Not enough arguments');
    }

    if (!event || typeof event.type !== 'string') {
      throw new Error('DOM Events Exception 0');
    }

    var element = this, type = event.type;

    try {
      if (!event.bubbles) {
        event.cancelBubble = true;

        var cancelBubbleEvent = function (event) {
          event.cancelBubble = true;

          (element || window).detachEvent('on' + type, cancelBubbleEvent);
        };

        this.attachEvent('on' + type, cancelBubbleEvent);
      }

      this.fireEvent('on' + type, event);
    } catch (error) {
      event.target = element;

      do {
        event.currentTarget = element;

        if ('_events' in element && typeof element._events[type] === 'function') {
          element._events[type].call(element, event);
        }

        if (typeof element['on' + type] === 'function') {
          element['on' + type].call(element, event);
        }

        element = element.nodeType === 9 ? element.parentWindow : element.parentNode;
      } while (element && !event.cancelBubble);
    }

    return true;
  };
})();

// CustomEvent
window.CustomEvent = function CustomEvent(type, eventInitDict) {
  var event = new Event(type, eventInitDict);
  event.detail = eventInitDict && eventInitDict.detail || null;
  return event;
};

// DOMTokenList
(function (global, join, splice) {
  function tokenize(token) {
    if (/^-?[_a-zA-Z]+[_a-zA-Z0-9-]*$/.test(token)) {
      return String(token);
    } else {
      throw new Error('InvalidCharacterError: DOM Exception 5');
    }
  }

  function toObject(self) {
    for (var index = -1, object = {}, element; element = self[++index];) {
      object[element] = true;
    }

    return object;
  }

  function fromObject(self, object) {
    var array = [], token;

    for (token in object) {
      if (object[token]) {
        array.push(token);
      }
    }

    splice.apply(self, [0, self.length].concat(array));
  }

  // <Global>.DOMTokenlist
  global.DOMTokenList = function DOMTokenList() {};

  global.DOMTokenList.prototype = {
    constructor: DOMTokenList,
    item: function item(index) {
      return this[parseFloat(index)] || null;
    },
    length: Array.prototype.length,
    toString: function toString() {
      return join.call(this, ' ');
    },

    add: function add() {
      for (var object = toObject(this), index = 0, token; index in arguments; ++index) {
        token = tokenize(arguments[index]);

        object[token] = true;
      }

      fromObject(this, object);
    },
    contains: function contains(token) {
      return token in toObject(this);
    },
    remove: function remove() {
      for (var object = toObject(this), index = 0, token; index in arguments; ++index) {
        token = tokenize(arguments[index]);

        object[token] = false;
      }

      fromObject(this, object);
    },
    toggle: function toggle(token) {
      var
      object = toObject(this),
      contains = 1 in arguments ? !arguments[1] : tokenize(token) in object;

      object[token] = !contains;

      fromObject(this, object);

      return !contains;
    }
  };
})(this, Array.prototype.join, Array.prototype.splice);

// Date.now
Date.now = function now() {
  return new Date().getTime();
};

// Date.prototype.toISOString
Date.prototype.toISOString = function toISOString() {
  var date = this;

  function pad(str, len) {
    var pad = "0000";
    str = '' + str;
    return pad.substr(0, len - str.length) + str
  }

  var y = date.getUTCFullYear(),
  m = pad(date.getUTCMonth() + 1, 2),
  d = pad(date.getUTCDate(), 2),
  h = pad(date.getUTCHours(), 2),
  i = pad(date.getUTCMinutes(), 2),
  s = pad(date.getUTCSeconds(), 2),
  ms = pad(date.getUTCMilliseconds(), 3);

  return y +'-'+ m +'-'+ d + 'T' + h +':'+ i +':'+ s +'.'+ ms +'Z';
};

// Element.prototype.classList
(function (global, splice) {
  Object.defineProperty(Element.prototype, 'classList', {
    get: function () {
      function pull() {
        splice.apply(classList, [0, classList.length].concat((element.className || '').replace(/^\s+|\s+$/g, '').split(/\s+/)));
      }

      function push() {
        if (element.attachEvent) {
          element.detachEvent('onpropertychange', pull);
        }

        element.className = original.toString.call(classList);

        if (element.attachEvent) {
          element.attachEvent('onpropertychange', pull);
        }
      }

      var
      element = this,
      NativeDOMTokenList = global.DOMTokenList,
      original = NativeDOMTokenList.prototype,
      ClassList = function DOMTokenList() {},
      classList;

      ClassList.prototype = new NativeDOMTokenList;

      ClassList.prototype.item = function item(index) {
        return pull(), original.item.apply(classList, arguments);
      };

      ClassList.prototype.toString = function toString() {
        return pull(), original.toString.apply(classList, arguments);
      };

      ClassList.prototype.add = function add() {
        return pull(), original.add.apply(classList, arguments), push();
      };

      ClassList.prototype.contains = function contains(token) {
        return pull(), original.contains.apply(classList, arguments);
      };

      ClassList.prototype.remove = function remove() {
        return pull(), original.remove.apply(classList, arguments), push();
      };

      ClassList.prototype.toggle = function toggle(token) {
        return pull(), token = original.toggle.apply(classList, arguments), push(), token;
      };

      classList = new ClassList;

      if (element.attachEvent) {
        element.attachEvent('onpropertychange', pull);
      }

      return classList;
    }
  });
})(this, Array.prototype.splice);

// Element.prototype.cloneNode
Element.prototype.cloneNode = (function(nativeFunc) {
  return function(deep) {
    var clone = nativeFunc.call(this, deep);

    if ('checked' in this) clone.checked = this.checked;

    return clone;
  }
})(Element.prototype.cloneNode);

// Element.prototype.matches
Element.prototype.matches = function matches(selector) {
  var
  element = this,
  elements = (element.document || element.ownerDocument).querySelectorAll(selector),
  index = 0;

  while (elements[index] && elements[index] !== element) {
    ++index;
  }

  return !!elements[index];
};

// Element.prototype.closest
Element.prototype.closest = function closest(selector) {
  var node = this;

  while (node) {
    if (node.matches(selector)) return node;
    else node = node.parentElement;
  }

  return null;
};

// Event.DOMContentLoaded
document.attachEvent('onreadystatechange', function() {
  if (document.readyState === 'complete') {
    document.dispatchEvent(new Event('DOMContentLoaded', {
      bubbles: true
    }));
  }
});

// Function.prototype.bind
Object.defineProperty(Function.prototype, 'bind', {
    value: function bind(that) { // .length is 1
        // 1. Let Target be the this value.
        var target = this;
        var Empty = function Empty() {};
        var isCallable = (function() {
            var fnToStr = Function.prototype.toString;
            var tryFunctionObject = function tryFunctionObject(value) {
                try {
                    fnToStr.call(value);
                    return true;
                } catch (e) {
                    return false;
                }
            };
            var toStr = Object.prototype.toString;
            var fnClass = '[object Function]';
            var genClass = '[object GeneratorFunction]';
            var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

            return function isCallable(value) {
                if (typeof value !== 'function') { return false; }
                if (hasToStringTag) { return tryFunctionObject(value); }
                var strClass = toStr.call(value);
                return strClass === fnClass || strClass === genClass;
            };
        })();

        // 2. If IsCallable(Target) is false, throw a TypeError exception.
        if (!isCallable(target)) {
            throw new TypeError('Function.prototype.bind called on incompatible ' + target);
        }
        // 3. Let A be a new (possibly empty) internal list of all of the
        //   argument values provided after thisArg (arg1, arg2 etc), in order.
        // XXX slicedArgs will stand in for "A" if used
        var args = Array.prototype.slice.call(arguments, 1); // for normal call
        // 4. Let F be a new native ECMAScript object.
        // 11. Set the [[Prototype]] internal property of F to the standard
        //   built-in Function prototype object as specified in 15.3.3.1.
        // 12. Set the [[Call]] internal property of F as described in
        //   15.3.4.5.1.
        // 13. Set the [[Construct]] internal property of F as described in
        //   15.3.4.5.2.
        // 14. Set the [[HasInstance]] internal property of F as described in
        //   15.3.4.5.3.
        var bound;
        var binder = function () {

            if (this instanceof bound) {
                // 15.3.4.5.2 [[Construct]]
                // When the [[Construct]] internal method of a function object,
                // F that was created using the bind function is called with a
                // list of arguments ExtraArgs, the following steps are taken:
                // 1. Let target be the value of F's [[TargetFunction]]
                //   internal property.
                // 2. If target has no [[Construct]] internal method, a
                //   TypeError exception is thrown.
                // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Construct]] internal
                //   method of target providing args as the arguments.

                var result = target.apply(
                    this,
                    args.concat(array_slice.call(arguments))
                );
                if (Object(result) === result) {
                    return result;
                }
                return this;

            } else {
                // 15.3.4.5.1 [[Call]]
                // When the [[Call]] internal method of a function object, F,
                // which was created using the bind function is called with a
                // this value and a list of arguments ExtraArgs, the following
                // steps are taken:
                // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 2. Let boundThis be the value of F's [[BoundThis]] internal
                //   property.
                // 3. Let target be the value of F's [[TargetFunction]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Call]] internal method
                //   of target providing boundThis as the this value and
                //   providing args as the arguments.

                // equiv: target.call(this, ...boundArgs, ...args)
                return target.apply(
                    that,
                    args.concat(Array.prototype.slice.call(arguments))
                );

            }

        };

        // 15. If the [[Class]] internal property of Target is "Function", then
        //     a. Let L be the length property of Target minus the length of A.
        //     b. Set the length own property of F to either 0 or L, whichever is
        //       larger.
        // 16. Else set the length own property of F to 0.

        var boundLength = Math.max(0, target.length - args.length);

        // 17. Set the attributes of the length own property of F to the values
        //   specified in 15.3.5.1.
        var boundArgs = [];
        for (var i = 0; i < boundLength; i++) {
            boundArgs.push('$' + i);
        }

        // XXX Build a dynamic function with desired amount of arguments is the only
        // way to set the length property of a function.
        // In environments where Content Security Policies enabled (Chrome extensions,
        // for ex.) all use of eval or Function costructor throws an exception.
        // However in all of these environments Function.prototype.bind exists
        // and so this code will never be executed.
        bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);

        if (target.prototype) {
            Empty.prototype = target.prototype;
            bound.prototype = new Empty();
            // Clean up dangling references.
            Empty.prototype = null;
        }

        // TODO
        // 18. Set the [[Extensible]] internal property of F to true.

        // TODO
        // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
        // 20. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
        //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
        //   false.
        // 21. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
        //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
        //   and false.

        // TODO
        // NOTE Function objects created using Function.prototype.bind do not
        // have a prototype property or the [[Code]], [[FormalParameters]], and
        // [[Scope]] internal properties.
        // XXX can't delete prototype in pure-js.

        // 22. Return F.
        return bound;
    }
});

// Object.assign
Object.assign = function assign(target, source) {
  for (var index = 1, key; index in arguments; ++index) {
    source = arguments[index];

    for (key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

// Object.defineProperties
Object.defineProperties = function defineProperties(object, descriptors) {
  for (var property in descriptors) {
    Object.defineProperty(object, property, descriptors[property]);
  }

  return object;
};

// Object.create
Object.create = function create(prototype, properties) {
  /* jshint evil: true */

  if (!(prototype instanceof Object || prototype === null)) {
    throw new TypeError('Object prototype may only be an Object or null');
  }

  var
  object = new Function('e', 'function Object() {}Object.prototype=e;return new Object')(prototype);

  object.constructor.prototype = prototype;

  if (1 in arguments) {
    Object.defineProperties(object, properties);
  }

  return object;
};

// Object.getOwnPropertyNames
(function (constructors) {
  'Array:length constructor toString toLocaleString join pop push concat reverse shift unshift slice splice sort,Date:constructor toString toDateString toTimeString toLocaleString toLocaleDateString toLocaleTimeString valueOf getTime getFullYear getUTCFullYear getMonth getUTCMonth getDate getUTCDate getDay getUTCDay getHours getUTCHours getMinutes getUTCMinutes getSeconds getUTCSeconds getMilliseconds getUTCMilliseconds getTimezoneOffset setTime setMilliseconds setUTCMilliseconds setSeconds setUTCSeconds setMinutes setUTCMinutes setHours setUTCHours setDate setUTCDate setMonth setUTCMonth setFullYear setUTCFullYear toGMTString toUTCString getYear setYear toJSON,Element:constructor,Function:length constructor toString call apply,Object:constructor toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable,RegExp:multiline,'.replace(/(.+?):(.+?),/g, function (match, constructorName, list) {
    for (var type = constructors['[object ' + constructorName + ']'] = {}, names = list.split(' '), index = 0, name; (name = names[index]); ++index) {
      type[0 + name] = true;
    }
  });

  Object.getOwnPropertyNames = function getOwnPropertyNames(object) {
    var type = constructors[constructors.toString.call(object)], keys = [], key;

    for (key in type) {
      key = key.slice(1);

      if (key in object) {
        keys.push(key);
      }
    }

    for (key in object) {
      if (!(0 + key in type)) {
        keys.push(key);
      }
    }

    return keys;
  };
})({});

// Object.getPrototypeOf
Object.getPrototypeOf = function getPrototypeOf(object) {
  if (object !== Object(object)) {
    throw new TypeError('Object.getPrototypeOf called on non-object');
  }

  return object.constructor ? object.constructor.prototype : null;
};

// Object.keys
Object.keys = (function() {
  'use strict';
  var hasOwnProperty = Object.prototype.hasOwnProperty,
  hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
  dontEnums = [
    'toString',
    'toLocaleString',
    'valueOf',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'constructor'
  ],
  dontEnumsLength = dontEnums.length;

  return function(obj) {
    if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
      throw new TypeError('Object.keys called on non-object');
    }

    var result = [], prop, i;

    for (prop in obj) {
      if (hasOwnProperty.call(obj, prop)) {
        result.push(prop);
      }
    }

    if (hasDontEnumBug) {
      for (i = 0; i < dontEnumsLength; i++) {
        if (hasOwnProperty.call(obj, dontEnums[i])) {
          result.push(dontEnums[i]);
        }
      }
    }
    return result;
  };
}());

// String.prototype.includes
String.prototype.includes = function (string, index) {
  if (typeof string === 'object' && string instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
  return this.indexOf(string, index) !== -1;
};

// String.prototype.trim
String.prototype.trim = function trim() {
  return this.replace(/^\s+|\s+$/g, '');
};

// XMLHttpRequest
(function (global, NativeXMLHttpRequest) {
  // <Global>.XMLHttpRequest
  global.XMLHttpRequest = function XMLHttpRequest() {
    var request = this, nativeRequest = request._request = NativeXMLHttpRequest ? new NativeXMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP.3.0');

    nativeRequest.onreadystatechange = function () {
      request.readyState = nativeRequest.readyState;

      var readyState = request.readyState === 4;

      request.response = request.responseText = readyState ? nativeRequest.responseText : null;
      request.status = readyState ? nativeRequest.status : null;
      request.statusText = readyState ? nativeRequest.statusText : null;

      request.dispatchEvent(new Event('readystatechange'));

      if (readyState) {
        request.dispatchEvent(new Event('load'));
      }
    };

    if ('onerror' in nativeRequest) {
      nativeRequest.onerror = function () {
        request.dispatchEvent(new Event('error'));
      };
    }
  };

  var XMLHttpRequestPrototype = global.XMLHttpRequest.prototype;

  XMLHttpRequestPrototype.addEventListener = global.addEventListener;
  XMLHttpRequestPrototype.removeEventListener = global.removeEventListener;
  XMLHttpRequestPrototype.dispatchEvent = global.dispatchEvent;

  XMLHttpRequestPrototype.abort = function abort() {
    return this._request();
  };

  XMLHttpRequestPrototype.getAllResponseHeaders = function getAllResponseHeaders() {
    return this._request.getAllResponseHeaders();
  };

  XMLHttpRequestPrototype.getResponseHeader = function getResponseHeader(header) {
    return this._request.getResponseHeader(header);
  };

  XMLHttpRequestPrototype.open = function open(method, url) {
    // method, url, async, username, password
    this._request.open(method, url, arguments[2], arguments[3], arguments[4]);
  };

  XMLHttpRequestPrototype.overrideMimeType = function overrideMimeType(mimetype) {
    this._request.overrideMimeType(mimetype);
  };

  XMLHttpRequestPrototype.send = function send() {
    this._request.send(0 in arguments ? arguments[0] : null);
  };

  XMLHttpRequestPrototype.setRequestHeader = function setRequestHeader(header, value) {
    this._request.setRequestHeader(header, value);
  };
})(this, this.XMLHttpRequest);

// atob
(function (global) {
  var keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=', keysRe = new RegExp('[^' + keys + ']');

  // <Global>.atob
  global.atob = function atob(input) {
    var output = [], buffer, bufferB, chrs, index = 0, indexB, length = input.length;

    if ((keysRe.test(input)) || (/=/.test(input) && (/=[^=]/.test(input) || /={3}/.test(input)))) {
      throw new Error('Invalid base64 data');
    }

    if (length % 4 > 0) {
      input += Array(4 - length % 4 + 1).join("=");
      length = input.length;
    }

    while (index < length) {
      for (bufferB = [], indexB = index; index < indexB + 4;) {
        bufferB.push(keys.indexOf(input.charAt(index++)));
      }

      buffer = (bufferB[0] << 18) + (bufferB[1] << 12) + ((bufferB[2] & 63) << 6) + (bufferB[3] & 63);

      chrs = [(buffer & (255 << 16)) >> 16, bufferB[2] === 64 ? -1 : (buffer & (255 << 8)) >> 8, bufferB[3] === 64 ? -1 : buffer & 255];

      for (indexB = 0; indexB < 3; ++indexB) {
        if (chrs[indexB] >= 0 || indexB === 0) {
          output.push(String.fromCharCode(chrs[indexB]));
        }
      }
    }

    return output.join('');
  };

  // <Global>.btoa
  global.btoa = function btoa(input) {
    var output = [], buffer, chrs, index = 0, length = input.length;

    while (index < length) {
      chrs = [input.charCodeAt(index++), input.charCodeAt(index++), input.charCodeAt(index++)];

      buffer = (chrs[0] << 16) + ((chrs[1] || 0) << 8) + (chrs[2] || 0);

      output.push(
        keys.charAt((buffer & (63 << 18)) >> 18),
        keys.charAt((buffer & (63 << 12)) >> 12),
        keys.charAt(isNaN(chrs[1]) ? 64 : (buffer & (63 << 6)) >> 6),
        keys.charAt(isNaN(chrs[2]) ? 64 : (buffer & 63))
      );
    }

    return output.join('');
  };
})(this);

// performance.now
(function (global) {

var
startTime = Date.now();

if (!global.performance) {
    global.performance = {};
}

global.performance.now = function () {
    return Date.now() - startTime;
};

}(this));

// requestAnimationFrame
(function (global) {
  'use strict';

  var
  lastTime = Date.now();

  // <Global>.requestAnimationFrame
  global.requestAnimationFrame = function (callback) {
    if (typeof callback !== 'function') {
      throw new TypeError(callback + 'is not a function');
    }
    
    var
    currentTime = Date.now(),
    delay = 16 + lastTime - currentTime;

    if (delay < 0) {
      delay = 0;
    }

    lastTime = currentTime;

    return setTimeout(function () {
      lastTime = Date.now();

      callback(performance.now());
    }, delay);
  };

  // <Global>.cancelAnimationFrame
  global.cancelAnimationFrame = function (id) {
    clearTimeout(id);
  };
})(this);

// ~html5-elements
/**
* @preserve HTML5 Shiv 3.7.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
;(function(window, document) {
/*jshint evil:true */
  /** version */
  var version = '3.7.2';

  /** Preset options */
  var options = window.html5 || {};

  /** Used to skip problem elements */
  var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

  /** Not all elements can be cloned in IE **/
  var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

  /** Detect whether the browser supports default html5 styles */
  var supportsHtml5Styles;

  /** Name of the expando, to work with multiple documents or to re-shiv one document */
  var expando = '_html5shiv';

  /** The id for the the documents expando */
  var expanID = 0;

  /** Cached data for each document */
  var expandoData = {};

  /** Detect whether the browser supports unknown elements */
  var supportsUnknownElements;

  (function() {
    try {
        var a = document.createElement('a');
        a.innerHTML = '<xyz></xyz>';
        //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
        supportsHtml5Styles = ('hidden' in a);

        supportsUnknownElements = a.childNodes.length == 1 || (function() {
          // assign a false positive if unable to shiv
          (document.createElement)('a');
          var frag = document.createDocumentFragment();
          return (
            typeof frag.cloneNode == 'undefined' ||
            typeof frag.createDocumentFragment == 'undefined' ||
            typeof frag.createElement == 'undefined'
          );
        }());
    } catch(e) {
      // assign a false positive if detection fails => unable to shiv
      supportsHtml5Styles = true;
      supportsUnknownElements = true;
    }

  }());

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a style sheet with the given CSS text and adds it to the document.
   * @private
   * @param {Document} ownerDocument The document.
   * @param {String} cssText The CSS text.
   * @returns {StyleSheet} The style element.
   */
  function addStyleSheet(ownerDocument, cssText) {
    var p = ownerDocument.createElement('p'),
        parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

    p.innerHTML = 'x<style>' + cssText + '</style>';
    return parent.insertBefore(p.lastChild, parent.firstChild);
  }

  /**
   * Returns the value of `html5.elements` as an array.
   * @private
   * @returns {Array} An array of shived element node names.
   */
  function getElements() {
    var elements = html5.elements;
    return typeof elements == 'string' ? elements.split(' ') : elements;
  }

  /**
   * Extends the built-in list of html5 elements
   * @memberOf html5
   * @param {String|Array} newElements whitespace separated list or array of new element names to shiv
   * @param {Document} ownerDocument The context document.
   */
  function addElements(newElements, ownerDocument) {
    var elements = html5.elements;
    if(typeof elements != 'string'){
      elements = elements.join(' ');
    }
    if(typeof newElements != 'string'){
      newElements = newElements.join(' ');
    }
    html5.elements = elements +' '+ newElements;
    shivDocument(ownerDocument);
  }

   /**
   * Returns the data associated to the given document
   * @private
   * @param {Document} ownerDocument The document.
   * @returns {Object} An object of data.
   */
  function getExpandoData(ownerDocument) {
    var data = expandoData[ownerDocument[expando]];
    if (!data) {
        data = {};
        expanID++;
        ownerDocument[expando] = expanID;
        expandoData[expanID] = data;
    }
    return data;
  }

  /**
   * returns a shived element for the given nodeName and document
   * @memberOf html5
   * @param {String} nodeName name of the element
   * @param {Document} ownerDocument The context document.
   * @returns {Object} The shived element.
   */
  function createElement(nodeName, ownerDocument, data){
    if (!ownerDocument) {
        ownerDocument = document;
    }
    if(supportsUnknownElements){
        return ownerDocument.createElement(nodeName);
    }
    if (!data) {
        data = getExpandoData(ownerDocument);
    }
    var node;

    if (data.cache[nodeName]) {
        node = data.cache[nodeName].cloneNode();
    } else if (saveClones.test(nodeName)) {
        node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
    } else {
        node = data.createElem(nodeName);
    }

    // Avoid adding some elements to fragments in IE < 9 because
    // * Attributes like `name` or `type` cannot be set/changed once an element
    //   is inserted into a document/fragment
    // * Link elements with `src` attributes that are inaccessible, as with
    //   a 403 response, will cause the tab/window to crash
    // * Script elements appended to fragments will execute when their `src`
    //   or `text` property is set
    return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
  }

  /**
   * returns a shived DocumentFragment for the given document
   * @memberOf html5
   * @param {Document} ownerDocument The context document.
   * @returns {Object} The shived DocumentFragment.
   */
  function createDocumentFragment(ownerDocument, data){
    if (!ownerDocument) {
        ownerDocument = document;
    }
    if(supportsUnknownElements){
        return ownerDocument.createDocumentFragment();
    }
    data = data || getExpandoData(ownerDocument);
    var clone = data.frag.cloneNode(),
        i = 0,
        elems = getElements(),
        l = elems.length;
    for(;i<l;i++){
        clone.createElement(elems[i]);
    }
    return clone;
  }

  /**
   * Shivs the `createElement` and `createDocumentFragment` methods of the document.
   * @private
   * @param {Document|DocumentFragment} ownerDocument The document.
   * @param {Object} data of the document.
   */
  function shivMethods(ownerDocument, data) {
    if (!data.cache) {
        data.cache = {};
        data.createElem = ownerDocument.createElement;
        data.createFrag = ownerDocument.createDocumentFragment;
        data.frag = data.createFrag();
    }


    ownerDocument.createElement = function(nodeName) {
      //abort shiv
      if (!html5.shivMethods) {
          return data.createElem(nodeName);
      }
      return createElement(nodeName, ownerDocument, data);
    };

    ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
      'var n=f.cloneNode(),c=n.createElement;' +
      'h.shivMethods&&(' +
        // unroll the `createElement` calls
        getElements().join().replace(/[\w\-:]+/g, function(nodeName) {
          data.createElem(nodeName);
          data.frag.createElement(nodeName);
          return 'c("' + nodeName + '")';
        }) +
      ');return n}'
    )(html5, data.frag);
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Shivs the given document.
   * @memberOf html5
   * @param {Document} ownerDocument The document to shiv.
   * @returns {Document} The shived document.
   */
  function shivDocument(ownerDocument) {
    if (!ownerDocument) {
        ownerDocument = document;
    }
    var data = getExpandoData(ownerDocument);

    if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
      data.hasCSS = !!addStyleSheet(ownerDocument,
        // corrects block display not defined in IE6/7/8/9
        'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
        // adds styling not present in IE6/7/8/9
        'mark{background:#FF0;color:#000}' +
        // hides non-rendered elements
        'template{display:none}'
      );
    }
    if (!supportsUnknownElements) {
      shivMethods(ownerDocument, data);
    }
    return ownerDocument;
  }

  /*--------------------------------------------------------------------------*/

  /**
   * The `html5` object is exposed so that more elements can be shived and
   * existing shiving can be detected on iframes.
   * @type Object
   * @example
   *
   * // options can be changed before the script is included
   * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
   */
  var html5 = {

    /**
     * An array or space separated string of node names of the elements to shiv.
     * @memberOf html5
     * @type Array|String
     */
    'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video',

    /**
     * current version of html5shiv
     */
    'version': version,

    /**
     * A flag to indicate that the HTML5 style sheet should be inserted.
     * @memberOf html5
     * @type Boolean
     */
    'shivCSS': (options.shivCSS !== false),

    /**
     * Is equal to true if a browser supports creating unknown/HTML5 elements
     * @memberOf html5
     * @type boolean
     */
    'supportsUnknownElements': supportsUnknownElements,

    /**
     * A flag to indicate that the document's `createElement` and `createDocumentFragment`
     * methods should be overwritten.
     * @memberOf html5
     * @type Boolean
     */
    'shivMethods': (options.shivMethods !== false),

    /**
     * A string to describe the type of `html5` object ("default" or "default print").
     * @memberOf html5
     * @type String
     */
    'type': 'default',

    // shivs the document according to the specified `html5` object options
    'shivDocument': shivDocument,

    //creates a shived element
    createElement: createElement,

    //creates a shived documentFragment
    createDocumentFragment: createDocumentFragment,

    //extends list of elements
    addElements: addElements
  };

  /*--------------------------------------------------------------------------*/

  // expose html5
  window.html5 = html5;

  // shiv the document
  shivDocument(document);

}(this, document));

})
.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
