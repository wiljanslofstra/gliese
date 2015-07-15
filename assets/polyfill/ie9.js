/* For detailed credits and licence information see http://github.com/financial-times/polyfill-service.
 * 
 * UA detected: ie/9.0.0
 * Features requested: default
 * Library version: latest
 * 
 * - Event, License: CC0  (required by "default", "CustomEvent")
 * - CustomEvent, License: CC0  (required by "default")
 * - DOMTokenList, License: CC0  (required by "default", "Element.prototype.classList")
 * - Element.prototype.classList, License: CC0  (required by "default")
 * - Element.prototype.matches-ms, License: CC0  (required by "default", "Element.prototype.closest")
 * - Element.prototype.closest, License: CC0  (required by "default")
 * - Object.assign, License: CC0  (required by "default")
 * - String.prototype.includes, License: CC0  (required by "default")
 * - atob, License: MIT  (required by "default")
 * - performance.now, License: CC0  (required by "requestAnimationFrame")
 * - requestAnimationFrame, License: requestAnimationFrame polyfill by Erik Möller, fixes from Paul Irish, Tino Zijdel, and Jonathan Neal  (required by "default")
 * - ~html5-elements, License: MIT  (required by "default") */

(function(undefined) {

// Event
this.Event = function Event(type, eventInitDict) {
  if (!type) {
    throw new Error('Not enough arguments');
  }

  var
  event = document.createEvent('Event'),
  bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false,
  cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;

  event.initEvent(type, bubbles, cancelable);

  return event;
};

// CustomEvent
this.CustomEvent = function CustomEvent(type, eventInitDict) {
  if (!type) {
    throw Error('TypeError: Failed to construct "CustomEvent": An event name must be provided.');
  }

  var event;
  eventInitDict = eventInitDict || {bubbles: false, cancelable: false, detail: null};

  try {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent(type, eventInitDict.bubbles, eventInitDict.cancelable, eventInitDict.detail);
  } catch (error) {
    // for browsers which don't support CustomEvent at all, we use a regular event instead
    event = document.createEvent('Event');
    event.initEvent(type, eventInitDict.bubbles, eventInitDict.cancelable);
    event.detail = eventInitDict.detail;
  }

  return event;
};

CustomEvent.prototype = Event.prototype;

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

// Element.prototype.matches
// <Element>.matches
Element.prototype.matches = Element.prototype.matchesSelector = Element.prototype.msMatchesSelector;

// Element.prototype.closest
Element.prototype.closest = function closest(selector) {
  var node = this;

  while (node) {
    if (node.matches(selector)) return node;
    else node = node.parentElement;
  }

  return null;
};

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

// String.prototype.includes
String.prototype.includes = function (string, index) {
  if (typeof string === 'object' && string instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
  return this.indexOf(string, index) !== -1;
};

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
