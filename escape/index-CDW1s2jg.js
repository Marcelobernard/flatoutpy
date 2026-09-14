(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === "childList")
        for (const o of a.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(i) {
    const a = {};
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (a.credentials = "omit")
          : (a.credentials = "same-origin"),
      a
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = r(i);
    fetch(i.href, a);
  }
})();
var Ml =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function pe(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Rx = { exports: {} },
  Ys = {},
  Fx = { exports: {} },
  te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hl = Symbol.for("react.element"),
  N_ = Symbol.for("react.portal"),
  I_ = Symbol.for("react.fragment"),
  D_ = Symbol.for("react.strict_mode"),
  L_ = Symbol.for("react.profiler"),
  R_ = Symbol.for("react.provider"),
  F_ = Symbol.for("react.context"),
  B_ = Symbol.for("react.forward_ref"),
  z_ = Symbol.for("react.suspense"),
  U_ = Symbol.for("react.memo"),
  W_ = Symbol.for("react.lazy"),
  $m = Symbol.iterator;
function H_(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($m && e[$m]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Bx = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  zx = Object.assign,
  Ux = {};
function ca(e, t, r) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Ux),
    (this.updater = r || Bx));
}
ca.prototype.isReactComponent = {};
ca.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ca.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Wx() {}
Wx.prototype = ca.prototype;
function _h(e, t, r) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Ux),
    (this.updater = r || Bx));
}
var Ah = (_h.prototype = new Wx());
Ah.constructor = _h;
zx(Ah, ca.prototype);
Ah.isPureReactComponent = !0;
var Tm = Array.isArray,
  Hx = Object.prototype.hasOwnProperty,
  Eh = { current: null },
  Vx = { key: !0, ref: !0, __self: !0, __source: !0 };
function Kx(e, t, r) {
  var n,
    i = {},
    a = null,
    o = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (a = "" + t.key),
    t))
      Hx.call(t, n) && !Vx.hasOwnProperty(n) && (i[n] = t[n]);
  var l = arguments.length - 2;
  if (l === 1) i.children = r;
  else if (1 < l) {
    for (var u = Array(l), s = 0; s < l; s++) u[s] = arguments[s + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (n in ((l = e.defaultProps), l)) i[n] === void 0 && (i[n] = l[n]);
  return {
    $$typeof: hl,
    type: e,
    key: a,
    ref: o,
    props: i,
    _owner: Eh.current,
  };
}
function V_(e, t) {
  return {
    $$typeof: hl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function jh(e) {
  return typeof e == "object" && e !== null && e.$$typeof === hl;
}
function K_(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var Cm = /\/+/g;
function Jc(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? K_("" + e.key)
    : t.toString(36);
}
function cu(e, t, r, n, i) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (a) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case hl:
          case N_:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = n === "" ? "." + Jc(o, 0) : n),
      Tm(i)
        ? ((r = ""),
          e != null && (r = e.replace(Cm, "$&/") + "/"),
          cu(i, t, r, "", function (s) {
            return s;
          }))
        : i != null &&
          (jh(i) &&
            (i = V_(
              i,
              r +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Cm, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (n = n === "" ? "." : n + ":"), Tm(e)))
    for (var l = 0; l < e.length; l++) {
      a = e[l];
      var u = n + Jc(a, l);
      o += cu(a, t, r, u, i);
    }
  else if (((u = H_(e)), typeof u == "function"))
    for (e = u.call(e), l = 0; !(a = e.next()).done; )
      ((a = a.value), (u = n + Jc(a, l++)), (o += cu(a, t, r, u, i)));
  else if (a === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return o;
}
function Nl(e, t, r) {
  if (e == null) return e;
  var n = [],
    i = 0;
  return (
    cu(e, n, "", "", function (a) {
      return t.call(r, a, i++);
    }),
    n
  );
}
function G_(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var st = { current: null },
  fu = { transition: null },
  q_ = {
    ReactCurrentDispatcher: st,
    ReactCurrentBatchConfig: fu,
    ReactCurrentOwner: Eh,
  };
function Gx() {
  throw Error("act(...) is not supported in production builds of React.");
}
te.Children = {
  map: Nl,
  forEach: function (e, t, r) {
    Nl(
      e,
      function () {
        t.apply(this, arguments);
      },
      r,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Nl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Nl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!jh(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
te.Component = ca;
te.Fragment = I_;
te.Profiler = L_;
te.PureComponent = _h;
te.StrictMode = D_;
te.Suspense = z_;
te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q_;
te.act = Gx;
te.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var n = zx({}, e.props),
    i = e.key,
    a = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (o = Eh.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (u in t)
      Hx.call(t, u) &&
        !Vx.hasOwnProperty(u) &&
        (n[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) n.children = r;
  else if (1 < u) {
    l = Array(u);
    for (var s = 0; s < u; s++) l[s] = arguments[s + 2];
    n.children = l;
  }
  return { $$typeof: hl, type: e.type, key: i, ref: a, props: n, _owner: o };
};
te.createContext = function (e) {
  return (
    (e = {
      $$typeof: F_,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: R_, _context: e }),
    (e.Consumer = e)
  );
};
te.createElement = Kx;
te.createFactory = function (e) {
  var t = Kx.bind(null, e);
  return ((t.type = e), t);
};
te.createRef = function () {
  return { current: null };
};
te.forwardRef = function (e) {
  return { $$typeof: B_, render: e };
};
te.isValidElement = jh;
te.lazy = function (e) {
  return { $$typeof: W_, _payload: { _status: -1, _result: e }, _init: G_ };
};
te.memo = function (e, t) {
  return { $$typeof: U_, type: e, compare: t === void 0 ? null : t };
};
te.startTransition = function (e) {
  var t = fu.transition;
  fu.transition = {};
  try {
    e();
  } finally {
    fu.transition = t;
  }
};
te.unstable_act = Gx;
te.useCallback = function (e, t) {
  return st.current.useCallback(e, t);
};
te.useContext = function (e) {
  return st.current.useContext(e);
};
te.useDebugValue = function () {};
te.useDeferredValue = function (e) {
  return st.current.useDeferredValue(e);
};
te.useEffect = function (e, t) {
  return st.current.useEffect(e, t);
};
te.useId = function () {
  return st.current.useId();
};
te.useImperativeHandle = function (e, t, r) {
  return st.current.useImperativeHandle(e, t, r);
};
te.useInsertionEffect = function (e, t) {
  return st.current.useInsertionEffect(e, t);
};
te.useLayoutEffect = function (e, t) {
  return st.current.useLayoutEffect(e, t);
};
te.useMemo = function (e, t) {
  return st.current.useMemo(e, t);
};
te.useReducer = function (e, t, r) {
  return st.current.useReducer(e, t, r);
};
te.useRef = function (e) {
  return st.current.useRef(e);
};
te.useState = function (e) {
  return st.current.useState(e);
};
te.useSyncExternalStore = function (e, t, r) {
  return st.current.useSyncExternalStore(e, t, r);
};
te.useTransition = function () {
  return st.current.useTransition();
};
te.version = "18.3.1";
Fx.exports = te;
var B = Fx.exports;
const E = pe(B);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var X_ = B,
  Y_ = Symbol.for("react.element"),
  Q_ = Symbol.for("react.fragment"),
  Z_ = Object.prototype.hasOwnProperty,
  J_ = X_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  eA = { key: !0, ref: !0, __self: !0, __source: !0 };
function qx(e, t, r) {
  var n,
    i = {},
    a = null,
    o = null;
  (r !== void 0 && (a = "" + r),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (o = t.ref));
  for (n in t) Z_.call(t, n) && !eA.hasOwnProperty(n) && (i[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) i[n] === void 0 && (i[n] = t[n]);
  return {
    $$typeof: Y_,
    type: e,
    key: a,
    ref: o,
    props: i,
    _owner: J_.current,
  };
}
Ys.Fragment = Q_;
Ys.jsx = qx;
Ys.jsxs = qx;
Rx.exports = Ys;
var O = Rx.exports,
  ad = {},
  Xx = { exports: {} },
  $t = {},
  Yx = { exports: {} },
  Qx = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, I) {
    var R = T.length;
    T.push(I);
    e: for (; 0 < R; ) {
      var V = (R - 1) >>> 1,
        W = T[V];
      if (0 < i(W, I)) ((T[V] = I), (T[R] = W), (R = V));
      else break e;
    }
  }
  function r(T) {
    return T.length === 0 ? null : T[0];
  }
  function n(T) {
    if (T.length === 0) return null;
    var I = T[0],
      R = T.pop();
    if (R !== I) {
      T[0] = R;
      e: for (var V = 0, W = T.length, X = W >>> 1; V < X; ) {
        var ne = 2 * (V + 1) - 1,
          xe = T[ne],
          Te = ne + 1,
          Ct = T[Te];
        if (0 > i(xe, R))
          Te < W && 0 > i(Ct, xe)
            ? ((T[V] = Ct), (T[Te] = R), (V = Te))
            : ((T[V] = xe), (T[ne] = R), (V = ne));
        else if (Te < W && 0 > i(Ct, R)) ((T[V] = Ct), (T[Te] = R), (V = Te));
        else break e;
      }
    }
    return I;
  }
  function i(T, I) {
    var R = T.sortIndex - I.sortIndex;
    return R !== 0 ? R : T.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var u = [],
    s = [],
    f = 1,
    c = null,
    d = 3,
    p = !1,
    m = !1,
    y = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    v = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(T) {
    for (var I = r(s); I !== null; ) {
      if (I.callback === null) n(s);
      else if (I.startTime <= T)
        (n(s), (I.sortIndex = I.expirationTime), t(u, I));
      else break;
      I = r(s);
    }
  }
  function S(T) {
    if (((y = !1), g(T), !m))
      if (r(u) !== null) ((m = !0), L(b));
      else {
        var I = r(s);
        I !== null && F(S, I.startTime - T);
      }
  }
  function b(T, I) {
    ((m = !1), y && ((y = !1), v(_), (_ = -1)), (p = !0));
    var R = d;
    try {
      for (
        g(I), c = r(u);
        c !== null && (!(c.expirationTime > I) || (T && !C()));

      ) {
        var V = c.callback;
        if (typeof V == "function") {
          ((c.callback = null), (d = c.priorityLevel));
          var W = V(c.expirationTime <= I);
          ((I = e.unstable_now()),
            typeof W == "function" ? (c.callback = W) : c === r(u) && n(u),
            g(I));
        } else n(u);
        c = r(u);
      }
      if (c !== null) var X = !0;
      else {
        var ne = r(s);
        (ne !== null && F(S, ne.startTime - I), (X = !1));
      }
      return X;
    } finally {
      ((c = null), (d = R), (p = !1));
    }
  }
  var w = !1,
    P = null,
    _ = -1,
    A = 5,
    $ = -1;
  function C() {
    return !(e.unstable_now() - $ < A);
  }
  function j() {
    if (P !== null) {
      var T = e.unstable_now();
      $ = T;
      var I = !0;
      try {
        I = P(!0, T);
      } finally {
        I ? D() : ((w = !1), (P = null));
      }
    } else w = !1;
  }
  var D;
  if (typeof h == "function")
    D = function () {
      h(j);
    };
  else if (typeof MessageChannel < "u") {
    var N = new MessageChannel(),
      M = N.port2;
    ((N.port1.onmessage = j),
      (D = function () {
        M.postMessage(null);
      }));
  } else
    D = function () {
      x(j, 0);
    };
  function L(T) {
    ((P = T), w || ((w = !0), D()));
  }
  function F(T, I) {
    _ = x(function () {
      T(e.unstable_now());
    }, I);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || p || ((m = !0), L(b));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (A = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(u);
    }),
    (e.unstable_next = function (T) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = d;
      }
      var R = d;
      d = I;
      try {
        return T();
      } finally {
        d = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, I) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var R = d;
      d = T;
      try {
        return I();
      } finally {
        d = R;
      }
    }),
    (e.unstable_scheduleCallback = function (T, I, R) {
      var V = e.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? V + R : V))
          : (R = V),
        T)
      ) {
        case 1:
          var W = -1;
          break;
        case 2:
          W = 250;
          break;
        case 5:
          W = 1073741823;
          break;
        case 4:
          W = 1e4;
          break;
        default:
          W = 5e3;
      }
      return (
        (W = R + W),
        (T = {
          id: f++,
          callback: I,
          priorityLevel: T,
          startTime: R,
          expirationTime: W,
          sortIndex: -1,
        }),
        R > V
          ? ((T.sortIndex = R),
            t(s, T),
            r(u) === null &&
              T === r(s) &&
              (y ? (v(_), (_ = -1)) : (y = !0), F(S, R - V)))
          : ((T.sortIndex = W), t(u, T), m || p || ((m = !0), L(b))),
        T
      );
    }),
    (e.unstable_shouldYield = C),
    (e.unstable_wrapCallback = function (T) {
      var I = d;
      return function () {
        var R = d;
        d = I;
        try {
          return T.apply(this, arguments);
        } finally {
          d = R;
        }
      };
    }));
})(Qx);
Yx.exports = Qx;
var tA = Yx.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rA = B,
  Et = tA;
function U(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Zx = new Set(),
  ho = {};
function Qn(e, t) {
  (Ii(e, t), Ii(e + "Capture", t));
}
function Ii(e, t) {
  for (ho[e] = t, e = 0; e < t.length; e++) Zx.add(t[e]);
}
var Tr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  od = Object.prototype.hasOwnProperty,
  nA =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  km = {},
  Mm = {};
function iA(e) {
  return od.call(Mm, e)
    ? !0
    : od.call(km, e)
      ? !1
      : nA.test(e)
        ? (Mm[e] = !0)
        : ((km[e] = !0), !1);
}
function aA(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function oA(e, t, r, n) {
  if (t === null || typeof t > "u" || aA(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ct(e, t, r, n, i, a, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = i),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o));
}
var Ze = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ze[e] = new ct(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ze[t] = new ct(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ze[e] = new ct(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ze[e] = new ct(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ze[e] = new ct(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ze[e] = new ct(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ze[e] = new ct(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ze[e] = new ct(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ze[e] = new ct(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var $h = /[\-:]([a-z])/g;
function Th(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace($h, Th);
    Ze[t] = new ct(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace($h, Th);
    Ze[t] = new ct(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace($h, Th);
  Ze[t] = new ct(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ze[e] = new ct(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ze.xlinkHref = new ct(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ze[e] = new ct(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ch(e, t, r, n) {
  var i = Ze.hasOwnProperty(t) ? Ze[t] : null;
  (i !== null
    ? i.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (oA(t, r, i, n) && (r = null),
    n || i === null
      ? iA(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : i.mustUseProperty
        ? (e[i.propertyName] = r === null ? (i.type === 3 ? !1 : "") : r)
        : ((t = i.attributeName),
          (n = i.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (r = i === 3 || (i === 4 && r === !0) ? "" : "" + r),
              n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var Rr = rA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Il = Symbol.for("react.element"),
  ci = Symbol.for("react.portal"),
  fi = Symbol.for("react.fragment"),
  kh = Symbol.for("react.strict_mode"),
  ld = Symbol.for("react.profiler"),
  Jx = Symbol.for("react.provider"),
  e1 = Symbol.for("react.context"),
  Mh = Symbol.for("react.forward_ref"),
  ud = Symbol.for("react.suspense"),
  sd = Symbol.for("react.suspense_list"),
  Nh = Symbol.for("react.memo"),
  Vr = Symbol.for("react.lazy"),
  t1 = Symbol.for("react.offscreen"),
  Nm = Symbol.iterator;
function ja(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Nm && e[Nm]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var _e = Object.assign,
  ef;
function qa(e) {
  if (ef === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      ef = (t && t[1]) || "";
    }
  return (
    `
` +
    ef +
    e
  );
}
var tf = !1;
function rf(e, t) {
  if (!e || tf) return "";
  tf = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var n = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          n = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        n = s;
      }
      e();
    }
  } catch (s) {
    if (s && n && typeof s.stack == "string") {
      for (
        var i = s.stack.split(`
`),
          a = n.stack.split(`
`),
          o = i.length - 1,
          l = a.length - 1;
        1 <= o && 0 <= l && i[o] !== a[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== a[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== a[l])) {
                var u =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    ((tf = !1), (Error.prepareStackTrace = r));
  }
  return (e = e ? e.displayName || e.name : "") ? qa(e) : "";
}
function lA(e) {
  switch (e.tag) {
    case 5:
      return qa(e.type);
    case 16:
      return qa("Lazy");
    case 13:
      return qa("Suspense");
    case 19:
      return qa("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = rf(e.type, !1)), e);
    case 11:
      return ((e = rf(e.type.render, !1)), e);
    case 1:
      return ((e = rf(e.type, !0)), e);
    default:
      return "";
  }
}
function cd(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case fi:
      return "Fragment";
    case ci:
      return "Portal";
    case ld:
      return "Profiler";
    case kh:
      return "StrictMode";
    case ud:
      return "Suspense";
    case sd:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case e1:
        return (e.displayName || "Context") + ".Consumer";
      case Jx:
        return (e._context.displayName || "Context") + ".Provider";
      case Mh:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Nh:
        return (
          (t = e.displayName || null),
          t !== null ? t : cd(e.type) || "Memo"
        );
      case Vr:
        ((t = e._payload), (e = e._init));
        try {
          return cd(e(t));
        } catch {}
    }
  return null;
}
function uA(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return cd(t);
    case 8:
      return t === kh ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function fn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function r1(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function sA(e) {
  var t = r1(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var i = r.get,
      a = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          ((n = "" + o), a.call(this, o));
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (o) {
          n = "" + o;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Dl(e) {
  e._valueTracker || (e._valueTracker = sA(e));
}
function n1(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return (
    e && (n = r1(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function Ou(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function fd(e, t) {
  var r = t.checked;
  return _e({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function Im(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  ((r = fn(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function i1(e, t) {
  ((t = t.checked), t != null && Ch(e, "checked", t, !1));
}
function dd(e, t) {
  i1(e, t);
  var r = fn(t.value),
    n = t.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? pd(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && pd(e, t.type, fn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Dm(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r));
}
function pd(e, t, r) {
  (t !== "number" || Ou(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var Xa = Array.isArray;
function _i(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < r.length; i++) t["$" + r[i]] = !0;
    for (r = 0; r < e.length; r++)
      ((i = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== i && (e[r].selected = i),
        i && n && (e[r].defaultSelected = !0));
  } else {
    for (r = "" + fn(r), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === r) {
        ((e[i].selected = !0), n && (e[i].defaultSelected = !0));
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function hd(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(U(91));
  return _e({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Lm(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(U(92));
      if (Xa(r)) {
        if (1 < r.length) throw Error(U(93));
        r = r[0];
      }
      t = r;
    }
    (t == null && (t = ""), (r = t));
  }
  e._wrapperState = { initialValue: fn(r) };
}
function a1(e, t) {
  var r = fn(t.value),
    n = fn(t.defaultValue);
  (r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n));
}
function Rm(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function o1(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function vd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? o1(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Ll,
  l1 = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ll = Ll || document.createElement("div"),
          Ll.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ll.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function vo(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ja = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  cA = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ja).forEach(function (e) {
  cA.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ja[t] = Ja[e]));
  });
});
function u1(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (Ja.hasOwnProperty(e) && Ja[e])
      ? ("" + t).trim()
      : t + "px";
}
function s1(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        i = u1(r, t[r], n);
      (r === "float" && (r = "cssFloat"), n ? e.setProperty(r, i) : (e[r] = i));
    }
}
var fA = _e(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function md(e, t) {
  if (t) {
    if (fA[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(U(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(U(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(U(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(U(62));
  }
}
function yd(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var gd = null;
function Ih(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var bd = null,
  Ai = null,
  Ei = null;
function Fm(e) {
  if ((e = yl(e))) {
    if (typeof bd != "function") throw Error(U(280));
    var t = e.stateNode;
    t && ((t = tc(t)), bd(e.stateNode, e.type, t));
  }
}
function c1(e) {
  Ai ? (Ei ? Ei.push(e) : (Ei = [e])) : (Ai = e);
}
function f1() {
  if (Ai) {
    var e = Ai,
      t = Ei;
    if (((Ei = Ai = null), Fm(e), t)) for (e = 0; e < t.length; e++) Fm(t[e]);
  }
}
function d1(e, t) {
  return e(t);
}
function p1() {}
var nf = !1;
function h1(e, t, r) {
  if (nf) return e(t, r);
  nf = !0;
  try {
    return d1(e, t, r);
  } finally {
    ((nf = !1), (Ai !== null || Ei !== null) && (p1(), f1()));
  }
}
function mo(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = tc(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(U(231, t, typeof r));
  return r;
}
var xd = !1;
if (Tr)
  try {
    var $a = {};
    (Object.defineProperty($a, "passive", {
      get: function () {
        xd = !0;
      },
    }),
      window.addEventListener("test", $a, $a),
      window.removeEventListener("test", $a, $a));
  } catch {
    xd = !1;
  }
function dA(e, t, r, n, i, a, o, l, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, s);
  } catch (f) {
    this.onError(f);
  }
}
var eo = !1,
  Pu = null,
  _u = !1,
  wd = null,
  pA = {
    onError: function (e) {
      ((eo = !0), (Pu = e));
    },
  };
function hA(e, t, r, n, i, a, o, l, u) {
  ((eo = !1), (Pu = null), dA.apply(pA, arguments));
}
function vA(e, t, r, n, i, a, o, l, u) {
  if ((hA.apply(this, arguments), eo)) {
    if (eo) {
      var s = Pu;
      ((eo = !1), (Pu = null));
    } else throw Error(U(198));
    _u || ((_u = !0), (wd = s));
  }
}
function Zn(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (r = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function v1(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Bm(e) {
  if (Zn(e) !== e) throw Error(U(188));
}
function mA(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Zn(e)), t === null)) throw Error(U(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var i = r.return;
    if (i === null) break;
    var a = i.alternate;
    if (a === null) {
      if (((n = i.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (i.child === a.child) {
      for (a = i.child; a; ) {
        if (a === r) return (Bm(i), e);
        if (a === n) return (Bm(i), t);
        a = a.sibling;
      }
      throw Error(U(188));
    }
    if (r.return !== n.return) ((r = i), (n = a));
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === r) {
          ((o = !0), (r = i), (n = a));
          break;
        }
        if (l === n) {
          ((o = !0), (n = i), (r = a));
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = a.child; l; ) {
          if (l === r) {
            ((o = !0), (r = a), (n = i));
            break;
          }
          if (l === n) {
            ((o = !0), (n = a), (r = i));
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(U(189));
      }
    }
    if (r.alternate !== n) throw Error(U(190));
  }
  if (r.tag !== 3) throw Error(U(188));
  return r.stateNode.current === r ? e : t;
}
function m1(e) {
  return ((e = mA(e)), e !== null ? y1(e) : null);
}
function y1(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = y1(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var g1 = Et.unstable_scheduleCallback,
  zm = Et.unstable_cancelCallback,
  yA = Et.unstable_shouldYield,
  gA = Et.unstable_requestPaint,
  Ce = Et.unstable_now,
  bA = Et.unstable_getCurrentPriorityLevel,
  Dh = Et.unstable_ImmediatePriority,
  b1 = Et.unstable_UserBlockingPriority,
  Au = Et.unstable_NormalPriority,
  xA = Et.unstable_LowPriority,
  x1 = Et.unstable_IdlePriority,
  Qs = null,
  dr = null;
function wA(e) {
  if (dr && typeof dr.onCommitFiberRoot == "function")
    try {
      dr.onCommitFiberRoot(Qs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ir = Math.clz32 ? Math.clz32 : PA,
  SA = Math.log,
  OA = Math.LN2;
function PA(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((SA(e) / OA) | 0)) | 0);
}
var Rl = 64,
  Fl = 4194304;
function Ya(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Eu(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    i = e.suspendedLanes,
    a = e.pingedLanes,
    o = r & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (n = Ya(l)) : ((a &= o), a !== 0 && (n = Ya(a)));
  } else ((o = r & ~i), o !== 0 ? (n = Ya(o)) : a !== 0 && (n = Ya(a)));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    !(t & i) &&
    ((i = n & -n), (a = t & -t), i >= a || (i === 16 && (a & 4194240) !== 0))
  )
    return t;
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      ((r = 31 - ir(t)), (i = 1 << r), (n |= e[r]), (t &= ~i));
  return n;
}
function _A(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function AA(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      i = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var o = 31 - ir(a),
      l = 1 << o,
      u = i[o];
    (u === -1
      ? (!(l & r) || l & n) && (i[o] = _A(l, t))
      : u <= t && (e.expiredLanes |= l),
      (a &= ~l));
  }
}
function Sd(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function w1() {
  var e = Rl;
  return ((Rl <<= 1), !(Rl & 4194240) && (Rl = 64), e);
}
function af(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function vl(e, t, r) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ir(t)),
    (e[t] = r));
}
function EA(e, t) {
  var r = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var i = 31 - ir(r),
      a = 1 << i;
    ((t[i] = 0), (n[i] = -1), (e[i] = -1), (r &= ~a));
  }
}
function Lh(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - ir(r),
      i = 1 << n;
    ((i & t) | (e[n] & t) && (e[n] |= t), (r &= ~i));
  }
}
var se = 0;
function S1(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var O1,
  Rh,
  P1,
  _1,
  A1,
  Od = !1,
  Bl = [],
  en = null,
  tn = null,
  rn = null,
  yo = new Map(),
  go = new Map(),
  qr = [],
  jA =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Um(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      en = null;
      break;
    case "dragenter":
    case "dragleave":
      tn = null;
      break;
    case "mouseover":
    case "mouseout":
      rn = null;
      break;
    case "pointerover":
    case "pointerout":
      yo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      go.delete(t.pointerId);
  }
}
function Ta(e, t, r, n, i, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: a,
        targetContainers: [i],
      }),
      t !== null && ((t = yl(t)), t !== null && Rh(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function $A(e, t, r, n, i) {
  switch (t) {
    case "focusin":
      return ((en = Ta(en, e, t, r, n, i)), !0);
    case "dragenter":
      return ((tn = Ta(tn, e, t, r, n, i)), !0);
    case "mouseover":
      return ((rn = Ta(rn, e, t, r, n, i)), !0);
    case "pointerover":
      var a = i.pointerId;
      return (yo.set(a, Ta(yo.get(a) || null, e, t, r, n, i)), !0);
    case "gotpointercapture":
      return (
        (a = i.pointerId),
        go.set(a, Ta(go.get(a) || null, e, t, r, n, i)),
        !0
      );
  }
  return !1;
}
function E1(e) {
  var t = Tn(e.target);
  if (t !== null) {
    var r = Zn(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = v1(r)), t !== null)) {
          ((e.blockedOn = t),
            A1(e.priority, function () {
              P1(r);
            }));
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function du(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Pd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      ((gd = n), r.target.dispatchEvent(n), (gd = null));
    } else return ((t = yl(r)), t !== null && Rh(t), (e.blockedOn = r), !1);
    t.shift();
  }
  return !0;
}
function Wm(e, t, r) {
  du(e) && r.delete(t);
}
function TA() {
  ((Od = !1),
    en !== null && du(en) && (en = null),
    tn !== null && du(tn) && (tn = null),
    rn !== null && du(rn) && (rn = null),
    yo.forEach(Wm),
    go.forEach(Wm));
}
function Ca(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Od ||
      ((Od = !0),
      Et.unstable_scheduleCallback(Et.unstable_NormalPriority, TA)));
}
function bo(e) {
  function t(i) {
    return Ca(i, e);
  }
  if (0 < Bl.length) {
    Ca(Bl[0], e);
    for (var r = 1; r < Bl.length; r++) {
      var n = Bl[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    en !== null && Ca(en, e),
      tn !== null && Ca(tn, e),
      rn !== null && Ca(rn, e),
      yo.forEach(t),
      go.forEach(t),
      r = 0;
    r < qr.length;
    r++
  )
    ((n = qr[r]), n.blockedOn === e && (n.blockedOn = null));
  for (; 0 < qr.length && ((r = qr[0]), r.blockedOn === null); )
    (E1(r), r.blockedOn === null && qr.shift());
}
var ji = Rr.ReactCurrentBatchConfig,
  ju = !0;
function CA(e, t, r, n) {
  var i = se,
    a = ji.transition;
  ji.transition = null;
  try {
    ((se = 1), Fh(e, t, r, n));
  } finally {
    ((se = i), (ji.transition = a));
  }
}
function kA(e, t, r, n) {
  var i = se,
    a = ji.transition;
  ji.transition = null;
  try {
    ((se = 4), Fh(e, t, r, n));
  } finally {
    ((se = i), (ji.transition = a));
  }
}
function Fh(e, t, r, n) {
  if (ju) {
    var i = Pd(e, t, r, n);
    if (i === null) (vf(e, t, n, $u, r), Um(e, n));
    else if ($A(i, e, t, r, n)) n.stopPropagation();
    else if ((Um(e, n), t & 4 && -1 < jA.indexOf(e))) {
      for (; i !== null; ) {
        var a = yl(i);
        if (
          (a !== null && O1(a),
          (a = Pd(e, t, r, n)),
          a === null && vf(e, t, n, $u, r),
          a === i)
        )
          break;
        i = a;
      }
      i !== null && n.stopPropagation();
    } else vf(e, t, n, null, r);
  }
}
var $u = null;
function Pd(e, t, r, n) {
  if ((($u = null), (e = Ih(n)), (e = Tn(e)), e !== null))
    if (((t = Zn(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = v1(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (($u = e), null);
}
function j1(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (bA()) {
        case Dh:
          return 1;
        case b1:
          return 4;
        case Au:
        case xA:
          return 16;
        case x1:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Qr = null,
  Bh = null,
  pu = null;
function $1() {
  if (pu) return pu;
  var e,
    t = Bh,
    r = t.length,
    n,
    i = "value" in Qr ? Qr.value : Qr.textContent,
    a = i.length;
  for (e = 0; e < r && t[e] === i[e]; e++);
  var o = r - e;
  for (n = 1; n <= o && t[r - n] === i[a - n]; n++);
  return (pu = i.slice(e, 1 < n ? 1 - n : void 0));
}
function hu(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function zl() {
  return !0;
}
function Hm() {
  return !1;
}
function Tt(e) {
  function t(r, n, i, a, o) {
    ((this._reactName = r),
      (this._targetInst = i),
      (this.type = n),
      (this.nativeEvent = a),
      (this.target = o),
      (this.currentTarget = null));
    for (var l in e)
      e.hasOwnProperty(l) && ((r = e[l]), (this[l] = r ? r(a) : a[l]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? zl
        : Hm),
      (this.isPropagationStopped = Hm),
      this
    );
  }
  return (
    _e(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = zl));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = zl));
      },
      persist: function () {},
      isPersistent: zl,
    }),
    t
  );
}
var fa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  zh = Tt(fa),
  ml = _e({}, fa, { view: 0, detail: 0 }),
  MA = Tt(ml),
  of,
  lf,
  ka,
  Zs = _e({}, ml, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Uh,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ka &&
            (ka && e.type === "mousemove"
              ? ((of = e.screenX - ka.screenX), (lf = e.screenY - ka.screenY))
              : (lf = of = 0),
            (ka = e)),
          of);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : lf;
    },
  }),
  Vm = Tt(Zs),
  NA = _e({}, Zs, { dataTransfer: 0 }),
  IA = Tt(NA),
  DA = _e({}, ml, { relatedTarget: 0 }),
  uf = Tt(DA),
  LA = _e({}, fa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  RA = Tt(LA),
  FA = _e({}, fa, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  BA = Tt(FA),
  zA = _e({}, fa, { data: 0 }),
  Km = Tt(zA),
  UA = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  WA = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  HA = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function VA(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = HA[e]) ? !!t[e] : !1;
}
function Uh() {
  return VA;
}
var KA = _e({}, ml, {
    key: function (e) {
      if (e.key) {
        var t = UA[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = hu(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? WA[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Uh,
    charCode: function (e) {
      return e.type === "keypress" ? hu(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? hu(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  GA = Tt(KA),
  qA = _e({}, Zs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Gm = Tt(qA),
  XA = _e({}, ml, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Uh,
  }),
  YA = Tt(XA),
  QA = _e({}, fa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ZA = Tt(QA),
  JA = _e({}, Zs, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  eE = Tt(JA),
  tE = [9, 13, 27, 32],
  Wh = Tr && "CompositionEvent" in window,
  to = null;
Tr && "documentMode" in document && (to = document.documentMode);
var rE = Tr && "TextEvent" in window && !to,
  T1 = Tr && (!Wh || (to && 8 < to && 11 >= to)),
  qm = " ",
  Xm = !1;
function C1(e, t) {
  switch (e) {
    case "keyup":
      return tE.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function k1(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var di = !1;
function nE(e, t) {
  switch (e) {
    case "compositionend":
      return k1(t);
    case "keypress":
      return t.which !== 32 ? null : ((Xm = !0), qm);
    case "textInput":
      return ((e = t.data), e === qm && Xm ? null : e);
    default:
      return null;
  }
}
function iE(e, t) {
  if (di)
    return e === "compositionend" || (!Wh && C1(e, t))
      ? ((e = $1()), (pu = Bh = Qr = null), (di = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return T1 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var aE = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ym(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!aE[e.type] : t === "textarea";
}
function M1(e, t, r, n) {
  (c1(n),
    (t = Tu(t, "onChange")),
    0 < t.length &&
      ((r = new zh("onChange", "change", null, r, n)),
      e.push({ event: r, listeners: t })));
}
var ro = null,
  xo = null;
function oE(e) {
  H1(e, 0);
}
function Js(e) {
  var t = vi(e);
  if (n1(t)) return e;
}
function lE(e, t) {
  if (e === "change") return t;
}
var N1 = !1;
if (Tr) {
  var sf;
  if (Tr) {
    var cf = "oninput" in document;
    if (!cf) {
      var Qm = document.createElement("div");
      (Qm.setAttribute("oninput", "return;"),
        (cf = typeof Qm.oninput == "function"));
    }
    sf = cf;
  } else sf = !1;
  N1 = sf && (!document.documentMode || 9 < document.documentMode);
}
function Zm() {
  ro && (ro.detachEvent("onpropertychange", I1), (xo = ro = null));
}
function I1(e) {
  if (e.propertyName === "value" && Js(xo)) {
    var t = [];
    (M1(t, xo, e, Ih(e)), h1(oE, t));
  }
}
function uE(e, t, r) {
  e === "focusin"
    ? (Zm(), (ro = t), (xo = r), ro.attachEvent("onpropertychange", I1))
    : e === "focusout" && Zm();
}
function sE(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Js(xo);
}
function cE(e, t) {
  if (e === "click") return Js(t);
}
function fE(e, t) {
  if (e === "input" || e === "change") return Js(t);
}
function dE(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var or = typeof Object.is == "function" ? Object.is : dE;
function wo(e, t) {
  if (or(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var i = r[n];
    if (!od.call(t, i) || !or(e[i], t[i])) return !1;
  }
  return !0;
}
function Jm(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ey(e, t) {
  var r = Jm(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = Jm(r);
  }
}
function D1(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? D1(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function L1() {
  for (var e = window, t = Ou(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = Ou(e.document);
  }
  return t;
}
function Hh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function pE(e) {
  var t = L1(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    D1(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && Hh(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        "selectionStart" in r)
      )
        ((r.selectionStart = t),
          (r.selectionEnd = Math.min(e, r.value.length)));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = r.textContent.length,
          a = Math.min(n.start, i);
        ((n = n.end === void 0 ? a : Math.min(n.end, i)),
          !e.extend && a > n && ((i = n), (n = a), (a = i)),
          (i = ey(r, a)));
        var o = ey(r, n);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          a > n
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      ((e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var hE = Tr && "documentMode" in document && 11 >= document.documentMode,
  pi = null,
  _d = null,
  no = null,
  Ad = !1;
function ty(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Ad ||
    pi == null ||
    pi !== Ou(n) ||
    ((n = pi),
    "selectionStart" in n && Hh(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (no && wo(no, n)) ||
      ((no = n),
      (n = Tu(_d, "onSelect")),
      0 < n.length &&
        ((t = new zh("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = pi))));
}
function Ul(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var hi = {
    animationend: Ul("Animation", "AnimationEnd"),
    animationiteration: Ul("Animation", "AnimationIteration"),
    animationstart: Ul("Animation", "AnimationStart"),
    transitionend: Ul("Transition", "TransitionEnd"),
  },
  ff = {},
  R1 = {};
Tr &&
  ((R1 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete hi.animationend.animation,
    delete hi.animationiteration.animation,
    delete hi.animationstart.animation),
  "TransitionEvent" in window || delete hi.transitionend.transition);
function ec(e) {
  if (ff[e]) return ff[e];
  if (!hi[e]) return e;
  var t = hi[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in R1) return (ff[e] = t[r]);
  return e;
}
var F1 = ec("animationend"),
  B1 = ec("animationiteration"),
  z1 = ec("animationstart"),
  U1 = ec("transitionend"),
  W1 = new Map(),
  ry =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function hn(e, t) {
  (W1.set(e, t), Qn(t, [e]));
}
for (var df = 0; df < ry.length; df++) {
  var pf = ry[df],
    vE = pf.toLowerCase(),
    mE = pf[0].toUpperCase() + pf.slice(1);
  hn(vE, "on" + mE);
}
hn(F1, "onAnimationEnd");
hn(B1, "onAnimationIteration");
hn(z1, "onAnimationStart");
hn("dblclick", "onDoubleClick");
hn("focusin", "onFocus");
hn("focusout", "onBlur");
hn(U1, "onTransitionEnd");
Ii("onMouseEnter", ["mouseout", "mouseover"]);
Ii("onMouseLeave", ["mouseout", "mouseover"]);
Ii("onPointerEnter", ["pointerout", "pointerover"]);
Ii("onPointerLeave", ["pointerout", "pointerover"]);
Qn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Qn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Qn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Qn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Qn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Qn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Qa =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  yE = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qa));
function ny(e, t, r) {
  var n = e.type || "unknown-event";
  ((e.currentTarget = r), vA(n, t, void 0, e), (e.currentTarget = null));
}
function H1(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      i = n.event;
    n = n.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var o = n.length - 1; 0 <= o; o--) {
          var l = n[o],
            u = l.instance,
            s = l.currentTarget;
          if (((l = l.listener), u !== a && i.isPropagationStopped())) break e;
          (ny(i, l, s), (a = u));
        }
      else
        for (o = 0; o < n.length; o++) {
          if (
            ((l = n[o]),
            (u = l.instance),
            (s = l.currentTarget),
            (l = l.listener),
            u !== a && i.isPropagationStopped())
          )
            break e;
          (ny(i, l, s), (a = u));
        }
    }
  }
  if (_u) throw ((e = wd), (_u = !1), (wd = null), e);
}
function me(e, t) {
  var r = t[Cd];
  r === void 0 && (r = t[Cd] = new Set());
  var n = e + "__bubble";
  r.has(n) || (V1(t, e, 2, !1), r.add(n));
}
function hf(e, t, r) {
  var n = 0;
  (t && (n |= 4), V1(r, e, n, t));
}
var Wl = "_reactListening" + Math.random().toString(36).slice(2);
function So(e) {
  if (!e[Wl]) {
    ((e[Wl] = !0),
      Zx.forEach(function (r) {
        r !== "selectionchange" && (yE.has(r) || hf(r, !1, e), hf(r, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Wl] || ((t[Wl] = !0), hf("selectionchange", !1, t));
  }
}
function V1(e, t, r, n) {
  switch (j1(t)) {
    case 1:
      var i = CA;
      break;
    case 4:
      i = kA;
      break;
    default:
      i = Fh;
  }
  ((r = i.bind(null, t, r, e)),
    (i = void 0),
    !xd ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    n
      ? i !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: i })
        : e.addEventListener(t, r, !0)
      : i !== void 0
        ? e.addEventListener(t, r, { passive: i })
        : e.addEventListener(t, r, !1));
}
function vf(e, t, r, n, i) {
  var a = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var o = n.tag;
      if (o === 3 || o === 4) {
        var l = n.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = n.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = Tn(l)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            n = a = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      n = n.return;
    }
  h1(function () {
    var s = a,
      f = Ih(r),
      c = [];
    e: {
      var d = W1.get(e);
      if (d !== void 0) {
        var p = zh,
          m = e;
        switch (e) {
          case "keypress":
            if (hu(r) === 0) break e;
          case "keydown":
          case "keyup":
            p = GA;
            break;
          case "focusin":
            ((m = "focus"), (p = uf));
            break;
          case "focusout":
            ((m = "blur"), (p = uf));
            break;
          case "beforeblur":
          case "afterblur":
            p = uf;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = Vm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = IA;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = YA;
            break;
          case F1:
          case B1:
          case z1:
            p = RA;
            break;
          case U1:
            p = ZA;
            break;
          case "scroll":
            p = MA;
            break;
          case "wheel":
            p = eE;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = BA;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Gm;
        }
        var y = (t & 4) !== 0,
          x = !y && e === "scroll",
          v = y ? (d !== null ? d + "Capture" : null) : d;
        y = [];
        for (var h = s, g; h !== null; ) {
          g = h;
          var S = g.stateNode;
          if (
            (g.tag === 5 &&
              S !== null &&
              ((g = S),
              v !== null && ((S = mo(h, v)), S != null && y.push(Oo(h, S, g)))),
            x)
          )
            break;
          h = h.return;
        }
        0 < y.length &&
          ((d = new p(d, m, null, r, f)), c.push({ event: d, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          d &&
            r !== gd &&
            (m = r.relatedTarget || r.fromElement) &&
            (Tn(m) || m[Cr]))
        )
          break e;
        if (
          (p || d) &&
          ((d =
            f.window === f
              ? f
              : (d = f.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          p
            ? ((m = r.relatedTarget || r.toElement),
              (p = s),
              (m = m ? Tn(m) : null),
              m !== null &&
                ((x = Zn(m)), m !== x || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((p = null), (m = s)),
          p !== m)
        ) {
          if (
            ((y = Vm),
            (S = "onMouseLeave"),
            (v = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Gm),
              (S = "onPointerLeave"),
              (v = "onPointerEnter"),
              (h = "pointer")),
            (x = p == null ? d : vi(p)),
            (g = m == null ? d : vi(m)),
            (d = new y(S, h + "leave", p, r, f)),
            (d.target = x),
            (d.relatedTarget = g),
            (S = null),
            Tn(f) === s &&
              ((y = new y(v, h + "enter", m, r, f)),
              (y.target = g),
              (y.relatedTarget = x),
              (S = y)),
            (x = S),
            p && m)
          )
            t: {
              for (y = p, v = m, h = 0, g = y; g; g = ii(g)) h++;
              for (g = 0, S = v; S; S = ii(S)) g++;
              for (; 0 < h - g; ) ((y = ii(y)), h--);
              for (; 0 < g - h; ) ((v = ii(v)), g--);
              for (; h--; ) {
                if (y === v || (v !== null && y === v.alternate)) break t;
                ((y = ii(y)), (v = ii(v)));
              }
              y = null;
            }
          else y = null;
          (p !== null && iy(c, d, p, y, !1),
            m !== null && x !== null && iy(c, x, m, y, !0));
        }
      }
      e: {
        if (
          ((d = s ? vi(s) : window),
          (p = d.nodeName && d.nodeName.toLowerCase()),
          p === "select" || (p === "input" && d.type === "file"))
        )
          var b = lE;
        else if (Ym(d))
          if (N1) b = fE;
          else {
            b = sE;
            var w = uE;
          }
        else
          (p = d.nodeName) &&
            p.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (b = cE);
        if (b && (b = b(e, s))) {
          M1(c, b, r, f);
          break e;
        }
        (w && w(e, d, s),
          e === "focusout" &&
            (w = d._wrapperState) &&
            w.controlled &&
            d.type === "number" &&
            pd(d, "number", d.value));
      }
      switch (((w = s ? vi(s) : window), e)) {
        case "focusin":
          (Ym(w) || w.contentEditable === "true") &&
            ((pi = w), (_d = s), (no = null));
          break;
        case "focusout":
          no = _d = pi = null;
          break;
        case "mousedown":
          Ad = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Ad = !1), ty(c, r, f));
          break;
        case "selectionchange":
          if (hE) break;
        case "keydown":
        case "keyup":
          ty(c, r, f);
      }
      var P;
      if (Wh)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        di
          ? C1(e, r) && (_ = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (_ = "onCompositionStart");
      (_ &&
        (T1 &&
          r.locale !== "ko" &&
          (di || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && di && (P = $1())
            : ((Qr = f),
              (Bh = "value" in Qr ? Qr.value : Qr.textContent),
              (di = !0))),
        (w = Tu(s, _)),
        0 < w.length &&
          ((_ = new Km(_, e, null, r, f)),
          c.push({ event: _, listeners: w }),
          P ? (_.data = P) : ((P = k1(r)), P !== null && (_.data = P)))),
        (P = rE ? nE(e, r) : iE(e, r)) &&
          ((s = Tu(s, "onBeforeInput")),
          0 < s.length &&
            ((f = new Km("onBeforeInput", "beforeinput", null, r, f)),
            c.push({ event: f, listeners: s }),
            (f.data = P))));
    }
    H1(c, t);
  });
}
function Oo(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Tu(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var i = e,
      a = i.stateNode;
    (i.tag === 5 &&
      a !== null &&
      ((i = a),
      (a = mo(e, r)),
      a != null && n.unshift(Oo(e, a, i)),
      (a = mo(e, t)),
      a != null && n.push(Oo(e, a, i))),
      (e = e.return));
  }
  return n;
}
function ii(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function iy(e, t, r, n, i) {
  for (var a = t._reactName, o = []; r !== null && r !== n; ) {
    var l = r,
      u = l.alternate,
      s = l.stateNode;
    if (u !== null && u === n) break;
    (l.tag === 5 &&
      s !== null &&
      ((l = s),
      i
        ? ((u = mo(r, a)), u != null && o.unshift(Oo(r, u, l)))
        : i || ((u = mo(r, a)), u != null && o.push(Oo(r, u, l)))),
      (r = r.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var gE = /\r\n?/g,
  bE = /\u0000|\uFFFD/g;
function ay(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      gE,
      `
`,
    )
    .replace(bE, "");
}
function Hl(e, t, r) {
  if (((t = ay(t)), ay(e) !== t && r)) throw Error(U(425));
}
function Cu() {}
var Ed = null,
  jd = null;
function $d(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Td = typeof setTimeout == "function" ? setTimeout : void 0,
  xE = typeof clearTimeout == "function" ? clearTimeout : void 0,
  oy = typeof Promise == "function" ? Promise : void 0,
  wE =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof oy < "u"
        ? function (e) {
            return oy.resolve(null).then(e).catch(SE);
          }
        : Td;
function SE(e) {
  setTimeout(function () {
    throw e;
  });
}
function mf(e, t) {
  var r = t,
    n = 0;
  do {
    var i = r.nextSibling;
    if ((e.removeChild(r), i && i.nodeType === 8))
      if (((r = i.data), r === "/$")) {
        if (n === 0) {
          (e.removeChild(i), bo(t));
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = i;
  } while (r);
  bo(t);
}
function nn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ly(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var da = Math.random().toString(36).slice(2),
  cr = "__reactFiber$" + da,
  Po = "__reactProps$" + da,
  Cr = "__reactContainer$" + da,
  Cd = "__reactEvents$" + da,
  OE = "__reactListeners$" + da,
  PE = "__reactHandles$" + da;
function Tn(e) {
  var t = e[cr];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[Cr] || r[cr])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = ly(e); e !== null; ) {
          if ((r = e[cr])) return r;
          e = ly(e);
        }
      return t;
    }
    ((e = r), (r = e.parentNode));
  }
  return null;
}
function yl(e) {
  return (
    (e = e[cr] || e[Cr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function vi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(U(33));
}
function tc(e) {
  return e[Po] || null;
}
var kd = [],
  mi = -1;
function vn(e) {
  return { current: e };
}
function be(e) {
  0 > mi || ((e.current = kd[mi]), (kd[mi] = null), mi--);
}
function ve(e, t) {
  (mi++, (kd[mi] = e.current), (e.current = t));
}
var dn = {},
  at = vn(dn),
  mt = vn(!1),
  zn = dn;
function Di(e, t) {
  var r = e.type.contextTypes;
  if (!r) return dn;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    a;
  for (a in r) i[a] = t[a];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function yt(e) {
  return ((e = e.childContextTypes), e != null);
}
function ku() {
  (be(mt), be(at));
}
function uy(e, t, r) {
  if (at.current !== dn) throw Error(U(168));
  (ve(at, t), ve(mt, r));
}
function K1(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
    return r;
  n = n.getChildContext();
  for (var i in n) if (!(i in t)) throw Error(U(108, uA(e) || "Unknown", i));
  return _e({}, r, n);
}
function Mu(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dn),
    (zn = at.current),
    ve(at, e),
    ve(mt, mt.current),
    !0
  );
}
function sy(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(U(169));
  (r
    ? ((e = K1(e, t, zn)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      be(mt),
      be(at),
      ve(at, e))
    : be(mt),
    ve(mt, r));
}
var xr = null,
  rc = !1,
  yf = !1;
function G1(e) {
  xr === null ? (xr = [e]) : xr.push(e);
}
function _E(e) {
  ((rc = !0), G1(e));
}
function mn() {
  if (!yf && xr !== null) {
    yf = !0;
    var e = 0,
      t = se;
    try {
      var r = xr;
      for (se = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      ((xr = null), (rc = !1));
    } catch (i) {
      throw (xr !== null && (xr = xr.slice(e + 1)), g1(Dh, mn), i);
    } finally {
      ((se = t), (yf = !1));
    }
  }
  return null;
}
var yi = [],
  gi = 0,
  Nu = null,
  Iu = 0,
  It = [],
  Dt = 0,
  Un = null,
  wr = 1,
  Sr = "";
function _n(e, t) {
  ((yi[gi++] = Iu), (yi[gi++] = Nu), (Nu = e), (Iu = t));
}
function q1(e, t, r) {
  ((It[Dt++] = wr), (It[Dt++] = Sr), (It[Dt++] = Un), (Un = e));
  var n = wr;
  e = Sr;
  var i = 32 - ir(n) - 1;
  ((n &= ~(1 << i)), (r += 1));
  var a = 32 - ir(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    ((a = (n & ((1 << o) - 1)).toString(32)),
      (n >>= o),
      (i -= o),
      (wr = (1 << (32 - ir(t) + i)) | (r << i) | n),
      (Sr = a + e));
  } else ((wr = (1 << a) | (r << i) | n), (Sr = e));
}
function Vh(e) {
  e.return !== null && (_n(e, 1), q1(e, 1, 0));
}
function Kh(e) {
  for (; e === Nu; )
    ((Nu = yi[--gi]), (yi[gi] = null), (Iu = yi[--gi]), (yi[gi] = null));
  for (; e === Un; )
    ((Un = It[--Dt]),
      (It[Dt] = null),
      (Sr = It[--Dt]),
      (It[Dt] = null),
      (wr = It[--Dt]),
      (It[Dt] = null));
}
var At = null,
  _t = null,
  we = !1,
  er = null;
function X1(e, t) {
  var r = Lt(5, null, null, 0);
  ((r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r));
}
function cy(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (At = e), (_t = nn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (At = e), (_t = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = Un !== null ? { id: wr, overflow: Sr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = Lt(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (At = e),
            (_t = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Md(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Nd(e) {
  if (we) {
    var t = _t;
    if (t) {
      var r = t;
      if (!cy(e, t)) {
        if (Md(e)) throw Error(U(418));
        t = nn(r.nextSibling);
        var n = At;
        t && cy(e, t)
          ? X1(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (we = !1), (At = e));
      }
    } else {
      if (Md(e)) throw Error(U(418));
      ((e.flags = (e.flags & -4097) | 2), (we = !1), (At = e));
    }
  }
}
function fy(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  At = e;
}
function Vl(e) {
  if (e !== At) return !1;
  if (!we) return (fy(e), (we = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !$d(e.type, e.memoizedProps))),
    t && (t = _t))
  ) {
    if (Md(e)) throw (Y1(), Error(U(418)));
    for (; t; ) (X1(e, t), (t = nn(t.nextSibling)));
  }
  if ((fy(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(U(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              _t = nn(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      _t = null;
    }
  } else _t = At ? nn(e.stateNode.nextSibling) : null;
  return !0;
}
function Y1() {
  for (var e = _t; e; ) e = nn(e.nextSibling);
}
function Li() {
  ((_t = At = null), (we = !1));
}
function Gh(e) {
  er === null ? (er = [e]) : er.push(e);
}
var AE = Rr.ReactCurrentBatchConfig;
function Ma(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(U(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(U(147, e));
      var i = n,
        a = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === a
        ? t.ref
        : ((t = function (o) {
            var l = i.refs;
            o === null ? delete l[a] : (l[a] = o);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != "string") throw Error(U(284));
    if (!r._owner) throw Error(U(290, e));
  }
  return e;
}
function Kl(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      U(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function dy(e) {
  var t = e._init;
  return t(e._payload);
}
function Q1(e) {
  function t(v, h) {
    if (e) {
      var g = v.deletions;
      g === null ? ((v.deletions = [h]), (v.flags |= 16)) : g.push(h);
    }
  }
  function r(v, h) {
    if (!e) return null;
    for (; h !== null; ) (t(v, h), (h = h.sibling));
    return null;
  }
  function n(v, h) {
    for (v = new Map(); h !== null; )
      (h.key !== null ? v.set(h.key, h) : v.set(h.index, h), (h = h.sibling));
    return v;
  }
  function i(v, h) {
    return ((v = un(v, h)), (v.index = 0), (v.sibling = null), v);
  }
  function a(v, h, g) {
    return (
      (v.index = g),
      e
        ? ((g = v.alternate),
          g !== null
            ? ((g = g.index), g < h ? ((v.flags |= 2), h) : g)
            : ((v.flags |= 2), h))
        : ((v.flags |= 1048576), h)
    );
  }
  function o(v) {
    return (e && v.alternate === null && (v.flags |= 2), v);
  }
  function l(v, h, g, S) {
    return h === null || h.tag !== 6
      ? ((h = Pf(g, v.mode, S)), (h.return = v), h)
      : ((h = i(h, g)), (h.return = v), h);
  }
  function u(v, h, g, S) {
    var b = g.type;
    return b === fi
      ? f(v, h, g.props.children, S, g.key)
      : h !== null &&
          (h.elementType === b ||
            (typeof b == "object" &&
              b !== null &&
              b.$$typeof === Vr &&
              dy(b) === h.type))
        ? ((S = i(h, g.props)), (S.ref = Ma(v, h, g)), (S.return = v), S)
        : ((S = wu(g.type, g.key, g.props, null, v.mode, S)),
          (S.ref = Ma(v, h, g)),
          (S.return = v),
          S);
  }
  function s(v, h, g, S) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== g.containerInfo ||
      h.stateNode.implementation !== g.implementation
      ? ((h = _f(g, v.mode, S)), (h.return = v), h)
      : ((h = i(h, g.children || [])), (h.return = v), h);
  }
  function f(v, h, g, S, b) {
    return h === null || h.tag !== 7
      ? ((h = Rn(g, v.mode, S, b)), (h.return = v), h)
      : ((h = i(h, g)), (h.return = v), h);
  }
  function c(v, h, g) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return ((h = Pf("" + h, v.mode, g)), (h.return = v), h);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Il:
          return (
            (g = wu(h.type, h.key, h.props, null, v.mode, g)),
            (g.ref = Ma(v, null, h)),
            (g.return = v),
            g
          );
        case ci:
          return ((h = _f(h, v.mode, g)), (h.return = v), h);
        case Vr:
          var S = h._init;
          return c(v, S(h._payload), g);
      }
      if (Xa(h) || ja(h))
        return ((h = Rn(h, v.mode, g, null)), (h.return = v), h);
      Kl(v, h);
    }
    return null;
  }
  function d(v, h, g, S) {
    var b = h !== null ? h.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return b !== null ? null : l(v, h, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Il:
          return g.key === b ? u(v, h, g, S) : null;
        case ci:
          return g.key === b ? s(v, h, g, S) : null;
        case Vr:
          return ((b = g._init), d(v, h, b(g._payload), S));
      }
      if (Xa(g) || ja(g)) return b !== null ? null : f(v, h, g, S, null);
      Kl(v, g);
    }
    return null;
  }
  function p(v, h, g, S, b) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return ((v = v.get(g) || null), l(h, v, "" + S, b));
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Il:
          return (
            (v = v.get(S.key === null ? g : S.key) || null),
            u(h, v, S, b)
          );
        case ci:
          return (
            (v = v.get(S.key === null ? g : S.key) || null),
            s(h, v, S, b)
          );
        case Vr:
          var w = S._init;
          return p(v, h, g, w(S._payload), b);
      }
      if (Xa(S) || ja(S)) return ((v = v.get(g) || null), f(h, v, S, b, null));
      Kl(h, S);
    }
    return null;
  }
  function m(v, h, g, S) {
    for (
      var b = null, w = null, P = h, _ = (h = 0), A = null;
      P !== null && _ < g.length;
      _++
    ) {
      P.index > _ ? ((A = P), (P = null)) : (A = P.sibling);
      var $ = d(v, P, g[_], S);
      if ($ === null) {
        P === null && (P = A);
        break;
      }
      (e && P && $.alternate === null && t(v, P),
        (h = a($, h, _)),
        w === null ? (b = $) : (w.sibling = $),
        (w = $),
        (P = A));
    }
    if (_ === g.length) return (r(v, P), we && _n(v, _), b);
    if (P === null) {
      for (; _ < g.length; _++)
        ((P = c(v, g[_], S)),
          P !== null &&
            ((h = a(P, h, _)),
            w === null ? (b = P) : (w.sibling = P),
            (w = P)));
      return (we && _n(v, _), b);
    }
    for (P = n(v, P); _ < g.length; _++)
      ((A = p(P, v, _, g[_], S)),
        A !== null &&
          (e && A.alternate !== null && P.delete(A.key === null ? _ : A.key),
          (h = a(A, h, _)),
          w === null ? (b = A) : (w.sibling = A),
          (w = A)));
    return (
      e &&
        P.forEach(function (C) {
          return t(v, C);
        }),
      we && _n(v, _),
      b
    );
  }
  function y(v, h, g, S) {
    var b = ja(g);
    if (typeof b != "function") throw Error(U(150));
    if (((g = b.call(g)), g == null)) throw Error(U(151));
    for (
      var w = (b = null), P = h, _ = (h = 0), A = null, $ = g.next();
      P !== null && !$.done;
      _++, $ = g.next()
    ) {
      P.index > _ ? ((A = P), (P = null)) : (A = P.sibling);
      var C = d(v, P, $.value, S);
      if (C === null) {
        P === null && (P = A);
        break;
      }
      (e && P && C.alternate === null && t(v, P),
        (h = a(C, h, _)),
        w === null ? (b = C) : (w.sibling = C),
        (w = C),
        (P = A));
    }
    if ($.done) return (r(v, P), we && _n(v, _), b);
    if (P === null) {
      for (; !$.done; _++, $ = g.next())
        (($ = c(v, $.value, S)),
          $ !== null &&
            ((h = a($, h, _)),
            w === null ? (b = $) : (w.sibling = $),
            (w = $)));
      return (we && _n(v, _), b);
    }
    for (P = n(v, P); !$.done; _++, $ = g.next())
      (($ = p(P, v, _, $.value, S)),
        $ !== null &&
          (e && $.alternate !== null && P.delete($.key === null ? _ : $.key),
          (h = a($, h, _)),
          w === null ? (b = $) : (w.sibling = $),
          (w = $)));
    return (
      e &&
        P.forEach(function (j) {
          return t(v, j);
        }),
      we && _n(v, _),
      b
    );
  }
  function x(v, h, g, S) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === fi &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Il:
          e: {
            for (var b = g.key, w = h; w !== null; ) {
              if (w.key === b) {
                if (((b = g.type), b === fi)) {
                  if (w.tag === 7) {
                    (r(v, w.sibling),
                      (h = i(w, g.props.children)),
                      (h.return = v),
                      (v = h));
                    break e;
                  }
                } else if (
                  w.elementType === b ||
                  (typeof b == "object" &&
                    b !== null &&
                    b.$$typeof === Vr &&
                    dy(b) === w.type)
                ) {
                  (r(v, w.sibling),
                    (h = i(w, g.props)),
                    (h.ref = Ma(v, w, g)),
                    (h.return = v),
                    (v = h));
                  break e;
                }
                r(v, w);
                break;
              } else t(v, w);
              w = w.sibling;
            }
            g.type === fi
              ? ((h = Rn(g.props.children, v.mode, S, g.key)),
                (h.return = v),
                (v = h))
              : ((S = wu(g.type, g.key, g.props, null, v.mode, S)),
                (S.ref = Ma(v, h, g)),
                (S.return = v),
                (v = S));
          }
          return o(v);
        case ci:
          e: {
            for (w = g.key; h !== null; ) {
              if (h.key === w)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === g.containerInfo &&
                  h.stateNode.implementation === g.implementation
                ) {
                  (r(v, h.sibling),
                    (h = i(h, g.children || [])),
                    (h.return = v),
                    (v = h));
                  break e;
                } else {
                  r(v, h);
                  break;
                }
              else t(v, h);
              h = h.sibling;
            }
            ((h = _f(g, v.mode, S)), (h.return = v), (v = h));
          }
          return o(v);
        case Vr:
          return ((w = g._init), x(v, h, w(g._payload), S));
      }
      if (Xa(g)) return m(v, h, g, S);
      if (ja(g)) return y(v, h, g, S);
      Kl(v, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        h !== null && h.tag === 6
          ? (r(v, h.sibling), (h = i(h, g)), (h.return = v), (v = h))
          : (r(v, h), (h = Pf(g, v.mode, S)), (h.return = v), (v = h)),
        o(v))
      : r(v, h);
  }
  return x;
}
var Ri = Q1(!0),
  Z1 = Q1(!1),
  Du = vn(null),
  Lu = null,
  bi = null,
  qh = null;
function Xh() {
  qh = bi = Lu = null;
}
function Yh(e) {
  var t = Du.current;
  (be(Du), (e._currentValue = t));
}
function Id(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function $i(e, t) {
  ((Lu = e),
    (qh = bi = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ht = !0), (e.firstContext = null)));
}
function Ut(e) {
  var t = e._currentValue;
  if (qh !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), bi === null)) {
      if (Lu === null) throw Error(U(308));
      ((bi = e), (Lu.dependencies = { lanes: 0, firstContext: e }));
    } else bi = bi.next = e;
  return t;
}
var Cn = null;
function Qh(e) {
  Cn === null ? (Cn = [e]) : Cn.push(e);
}
function J1(e, t, r, n) {
  var i = t.interleaved;
  return (
    i === null ? ((r.next = r), Qh(t)) : ((r.next = i.next), (i.next = r)),
    (t.interleaved = r),
    kr(e, n)
  );
}
function kr(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return));
  return r.tag === 3 ? r.stateNode : null;
}
var Kr = !1;
function Zh(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ew(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function Ar(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function an(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), ae & 2)) {
    var i = n.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (n.pending = t),
      kr(e, r)
    );
  }
  return (
    (i = n.interleaved),
    i === null ? ((t.next = t), Qh(n)) : ((t.next = i.next), (i.next = t)),
    (n.interleaved = t),
    kr(e, r)
  );
}
function vu(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes;
    ((n &= e.pendingLanes), (r |= n), (t.lanes = r), Lh(e, r));
  }
}
function py(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var i = null,
      a = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var o = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        (a === null ? (i = a = o) : (a = a.next = o), (r = r.next));
      } while (r !== null);
      a === null ? (i = a = t) : (a = a.next = t);
    } else i = a = t;
    ((r = {
      baseState: n.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: a,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r));
    return;
  }
  ((e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t));
}
function Ru(e, t, r, n) {
  var i = e.updateQueue;
  Kr = !1;
  var a = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var u = l,
      s = u.next;
    ((u.next = null), o === null ? (a = s) : (o.next = s), (o = u));
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (l = f.lastBaseUpdate),
      l !== o &&
        (l === null ? (f.firstBaseUpdate = s) : (l.next = s),
        (f.lastBaseUpdate = u)));
  }
  if (a !== null) {
    var c = i.baseState;
    ((o = 0), (f = s = u = null), (l = a));
    do {
      var d = l.lane,
        p = l.eventTime;
      if ((n & d) === d) {
        f !== null &&
          (f = f.next =
            {
              eventTime: p,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var m = e,
            y = l;
          switch (((d = t), (p = r), y.tag)) {
            case 1:
              if (((m = y.payload), typeof m == "function")) {
                c = m.call(p, c, d);
                break e;
              }
              c = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = y.payload),
                (d = typeof m == "function" ? m.call(p, c, d) : m),
                d == null)
              )
                break e;
              c = _e({}, c, d);
              break e;
            case 2:
              Kr = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l));
      } else
        ((p = {
          eventTime: p,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          f === null ? ((s = f = p), (u = c)) : (f = f.next = p),
          (o |= d));
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        ((d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null));
      }
    } while (!0);
    if (
      (f === null && (u = c),
      (i.baseState = u),
      (i.firstBaseUpdate = s),
      (i.lastBaseUpdate = f),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do ((o |= i.lane), (i = i.next));
      while (i !== t);
    } else a === null && (i.shared.lanes = 0);
    ((Hn |= o), (e.lanes = o), (e.memoizedState = c));
  }
}
function hy(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        i = n.callback;
      if (i !== null) {
        if (((n.callback = null), (n = r), typeof i != "function"))
          throw Error(U(191, i));
        i.call(n);
      }
    }
}
var gl = {},
  pr = vn(gl),
  _o = vn(gl),
  Ao = vn(gl);
function kn(e) {
  if (e === gl) throw Error(U(174));
  return e;
}
function Jh(e, t) {
  switch ((ve(Ao, t), ve(_o, e), ve(pr, gl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : vd(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = vd(t, e)));
  }
  (be(pr), ve(pr, t));
}
function Fi() {
  (be(pr), be(_o), be(Ao));
}
function tw(e) {
  kn(Ao.current);
  var t = kn(pr.current),
    r = vd(t, e.type);
  t !== r && (ve(_o, e), ve(pr, r));
}
function ev(e) {
  _o.current === e && (be(pr), be(_o));
}
var Oe = vn(0);
function Fu(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var gf = [];
function tv() {
  for (var e = 0; e < gf.length; e++)
    gf[e]._workInProgressVersionPrimary = null;
  gf.length = 0;
}
var mu = Rr.ReactCurrentDispatcher,
  bf = Rr.ReactCurrentBatchConfig,
  Wn = 0,
  Pe = null,
  Be = null,
  Ve = null,
  Bu = !1,
  io = !1,
  Eo = 0,
  EE = 0;
function Je() {
  throw Error(U(321));
}
function rv(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!or(e[r], t[r])) return !1;
  return !0;
}
function nv(e, t, r, n, i, a) {
  if (
    ((Wn = a),
    (Pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (mu.current = e === null || e.memoizedState === null ? CE : kE),
    (e = r(n, i)),
    io)
  ) {
    a = 0;
    do {
      if (((io = !1), (Eo = 0), 25 <= a)) throw Error(U(301));
      ((a += 1),
        (Ve = Be = null),
        (t.updateQueue = null),
        (mu.current = ME),
        (e = r(n, i)));
    } while (io);
  }
  if (
    ((mu.current = zu),
    (t = Be !== null && Be.next !== null),
    (Wn = 0),
    (Ve = Be = Pe = null),
    (Bu = !1),
    t)
  )
    throw Error(U(300));
  return e;
}
function iv() {
  var e = Eo !== 0;
  return ((Eo = 0), e);
}
function sr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (Ve === null ? (Pe.memoizedState = Ve = e) : (Ve = Ve.next = e), Ve);
}
function Wt() {
  if (Be === null) {
    var e = Pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Be.next;
  var t = Ve === null ? Pe.memoizedState : Ve.next;
  if (t !== null) ((Ve = t), (Be = e));
  else {
    if (e === null) throw Error(U(310));
    ((Be = e),
      (e = {
        memoizedState: Be.memoizedState,
        baseState: Be.baseState,
        baseQueue: Be.baseQueue,
        queue: Be.queue,
        next: null,
      }),
      Ve === null ? (Pe.memoizedState = Ve = e) : (Ve = Ve.next = e));
  }
  return Ve;
}
function jo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function xf(e) {
  var t = Wt(),
    r = t.queue;
  if (r === null) throw Error(U(311));
  r.lastRenderedReducer = e;
  var n = Be,
    i = n.baseQueue,
    a = r.pending;
  if (a !== null) {
    if (i !== null) {
      var o = i.next;
      ((i.next = a.next), (a.next = o));
    }
    ((n.baseQueue = i = a), (r.pending = null));
  }
  if (i !== null) {
    ((a = i.next), (n = n.baseState));
    var l = (o = null),
      u = null,
      s = a;
    do {
      var f = s.lane;
      if ((Wn & f) === f)
        (u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (n = s.hasEagerState ? s.eagerState : e(n, s.action)));
      else {
        var c = {
          lane: f,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        (u === null ? ((l = u = c), (o = n)) : (u = u.next = c),
          (Pe.lanes |= f),
          (Hn |= f));
      }
      s = s.next;
    } while (s !== null && s !== a);
    (u === null ? (o = n) : (u.next = l),
      or(n, t.memoizedState) || (ht = !0),
      (t.memoizedState = n),
      (t.baseState = o),
      (t.baseQueue = u),
      (r.lastRenderedState = n));
  }
  if (((e = r.interleaved), e !== null)) {
    i = e;
    do ((a = i.lane), (Pe.lanes |= a), (Hn |= a), (i = i.next));
    while (i !== e);
  } else i === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function wf(e) {
  var t = Wt(),
    r = t.queue;
  if (r === null) throw Error(U(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    i = r.pending,
    a = t.memoizedState;
  if (i !== null) {
    r.pending = null;
    var o = (i = i.next);
    do ((a = e(a, o.action)), (o = o.next));
    while (o !== i);
    (or(a, t.memoizedState) || (ht = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (r.lastRenderedState = a));
  }
  return [a, n];
}
function rw() {}
function nw(e, t) {
  var r = Pe,
    n = Wt(),
    i = t(),
    a = !or(n.memoizedState, i);
  if (
    (a && ((n.memoizedState = i), (ht = !0)),
    (n = n.queue),
    av(ow.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || a || (Ve !== null && Ve.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      $o(9, aw.bind(null, r, n, i, t), void 0, null),
      Ke === null)
    )
      throw Error(U(349));
    Wn & 30 || iw(r, t, i);
  }
  return i;
}
function iw(e, t, r) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = Pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Pe.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e)));
}
function aw(e, t, r, n) {
  ((t.value = r), (t.getSnapshot = n), lw(t) && uw(e));
}
function ow(e, t, r) {
  return r(function () {
    lw(t) && uw(e);
  });
}
function lw(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !or(e, r);
  } catch {
    return !0;
  }
}
function uw(e) {
  var t = kr(e, 1);
  t !== null && ar(t, e, 1, -1);
}
function vy(e) {
  var t = sr();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: jo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = TE.bind(null, Pe, e)),
    [t.memoizedState, e]
  );
}
function $o(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = Pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Pe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function sw() {
  return Wt().memoizedState;
}
function yu(e, t, r, n) {
  var i = sr();
  ((Pe.flags |= e),
    (i.memoizedState = $o(1 | t, r, void 0, n === void 0 ? null : n)));
}
function nc(e, t, r, n) {
  var i = Wt();
  n = n === void 0 ? null : n;
  var a = void 0;
  if (Be !== null) {
    var o = Be.memoizedState;
    if (((a = o.destroy), n !== null && rv(n, o.deps))) {
      i.memoizedState = $o(t, r, a, n);
      return;
    }
  }
  ((Pe.flags |= e), (i.memoizedState = $o(1 | t, r, a, n)));
}
function my(e, t) {
  return yu(8390656, 8, e, t);
}
function av(e, t) {
  return nc(2048, 8, e, t);
}
function cw(e, t) {
  return nc(4, 2, e, t);
}
function fw(e, t) {
  return nc(4, 4, e, t);
}
function dw(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function pw(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null),
    nc(4, 4, dw.bind(null, t, e), r)
  );
}
function ov() {}
function hw(e, t) {
  var r = Wt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && rv(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function vw(e, t) {
  var r = Wt();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && rv(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function mw(e, t, r) {
  return Wn & 21
    ? (or(r, t) || ((r = w1()), (Pe.lanes |= r), (Hn |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ht = !0)), (e.memoizedState = r));
}
function jE(e, t) {
  var r = se;
  ((se = r !== 0 && 4 > r ? r : 4), e(!0));
  var n = bf.transition;
  bf.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((se = r), (bf.transition = n));
  }
}
function yw() {
  return Wt().memoizedState;
}
function $E(e, t, r) {
  var n = ln(e);
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    gw(e))
  )
    bw(t, r);
  else if (((r = J1(e, t, r, n)), r !== null)) {
    var i = ut();
    (ar(r, e, n, i), xw(r, t, n));
  }
}
function TE(e, t, r) {
  var n = ln(e),
    i = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (gw(e)) bw(t, i);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = a(o, r);
        if (((i.hasEagerState = !0), (i.eagerState = l), or(l, o))) {
          var u = t.interleaved;
          (u === null
            ? ((i.next = i), Qh(t))
            : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i));
          return;
        }
      } catch {
      } finally {
      }
    ((r = J1(e, t, i, n)),
      r !== null && ((i = ut()), ar(r, e, n, i), xw(r, t, n)));
  }
}
function gw(e) {
  var t = e.alternate;
  return e === Pe || (t !== null && t === Pe);
}
function bw(e, t) {
  io = Bu = !0;
  var r = e.pending;
  (r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t));
}
function xw(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    ((n &= e.pendingLanes), (r |= n), (t.lanes = r), Lh(e, r));
  }
}
var zu = {
    readContext: Ut,
    useCallback: Je,
    useContext: Je,
    useEffect: Je,
    useImperativeHandle: Je,
    useInsertionEffect: Je,
    useLayoutEffect: Je,
    useMemo: Je,
    useReducer: Je,
    useRef: Je,
    useState: Je,
    useDebugValue: Je,
    useDeferredValue: Je,
    useTransition: Je,
    useMutableSource: Je,
    useSyncExternalStore: Je,
    useId: Je,
    unstable_isNewReconciler: !1,
  },
  CE = {
    readContext: Ut,
    useCallback: function (e, t) {
      return ((sr().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Ut,
    useEffect: my,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        yu(4194308, 4, dw.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return yu(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return yu(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = sr();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (r.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, r) {
      var n = sr();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = $E.bind(null, Pe, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = sr();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: vy,
    useDebugValue: ov,
    useDeferredValue: function (e) {
      return (sr().memoizedState = e);
    },
    useTransition: function () {
      var e = vy(!1),
        t = e[0];
      return ((e = jE.bind(null, e[1])), (sr().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = Pe,
        i = sr();
      if (we) {
        if (r === void 0) throw Error(U(407));
        r = r();
      } else {
        if (((r = t()), Ke === null)) throw Error(U(349));
        Wn & 30 || iw(n, t, r);
      }
      i.memoizedState = r;
      var a = { value: r, getSnapshot: t };
      return (
        (i.queue = a),
        my(ow.bind(null, n, a, e), [e]),
        (n.flags |= 2048),
        $o(9, aw.bind(null, n, a, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = sr(),
        t = Ke.identifierPrefix;
      if (we) {
        var r = Sr,
          n = wr;
        ((r = (n & ~(1 << (32 - ir(n) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = Eo++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":"));
      } else ((r = EE++), (t = ":" + t + "r" + r.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  kE = {
    readContext: Ut,
    useCallback: hw,
    useContext: Ut,
    useEffect: av,
    useImperativeHandle: pw,
    useInsertionEffect: cw,
    useLayoutEffect: fw,
    useMemo: vw,
    useReducer: xf,
    useRef: sw,
    useState: function () {
      return xf(jo);
    },
    useDebugValue: ov,
    useDeferredValue: function (e) {
      var t = Wt();
      return mw(t, Be.memoizedState, e);
    },
    useTransition: function () {
      var e = xf(jo)[0],
        t = Wt().memoizedState;
      return [e, t];
    },
    useMutableSource: rw,
    useSyncExternalStore: nw,
    useId: yw,
    unstable_isNewReconciler: !1,
  },
  ME = {
    readContext: Ut,
    useCallback: hw,
    useContext: Ut,
    useEffect: av,
    useImperativeHandle: pw,
    useInsertionEffect: cw,
    useLayoutEffect: fw,
    useMemo: vw,
    useReducer: wf,
    useRef: sw,
    useState: function () {
      return wf(jo);
    },
    useDebugValue: ov,
    useDeferredValue: function (e) {
      var t = Wt();
      return Be === null ? (t.memoizedState = e) : mw(t, Be.memoizedState, e);
    },
    useTransition: function () {
      var e = wf(jo)[0],
        t = Wt().memoizedState;
      return [e, t];
    },
    useMutableSource: rw,
    useSyncExternalStore: nw,
    useId: yw,
    unstable_isNewReconciler: !1,
  };
function Xt(e, t) {
  if (e && e.defaultProps) {
    ((t = _e({}, t)), (e = e.defaultProps));
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function Dd(e, t, r, n) {
  ((t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : _e({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r));
}
var ic = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Zn(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = ut(),
      i = ln(e),
      a = Ar(n, i);
    ((a.payload = t),
      r != null && (a.callback = r),
      (t = an(e, a, i)),
      t !== null && (ar(t, e, i, n), vu(t, e, i)));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = ut(),
      i = ln(e),
      a = Ar(n, i);
    ((a.tag = 1),
      (a.payload = t),
      r != null && (a.callback = r),
      (t = an(e, a, i)),
      t !== null && (ar(t, e, i, n), vu(t, e, i)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = ut(),
      n = ln(e),
      i = Ar(r, n);
    ((i.tag = 2),
      t != null && (i.callback = t),
      (t = an(e, i, n)),
      t !== null && (ar(t, e, n, r), vu(t, e, n)));
  },
};
function yy(e, t, r, n, i, a, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, a, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !wo(r, n) || !wo(i, a)
        : !0
  );
}
function ww(e, t, r) {
  var n = !1,
    i = dn,
    a = t.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = Ut(a))
      : ((i = yt(t) ? zn : at.current),
        (n = t.contextTypes),
        (a = (n = n != null) ? Di(e, i) : dn)),
    (t = new t(r, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ic),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function gy(e, t, r, n) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && ic.enqueueReplaceState(t, t.state, null));
}
function Ld(e, t, r, n) {
  var i = e.stateNode;
  ((i.props = r), (i.state = e.memoizedState), (i.refs = {}), Zh(e));
  var a = t.contextType;
  (typeof a == "object" && a !== null
    ? (i.context = Ut(a))
    : ((a = yt(t) ? zn : at.current), (i.context = Di(e, a))),
    (i.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" && (Dd(e, t, a, r), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && ic.enqueueReplaceState(i, i.state, null),
      Ru(e, r, i, n),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308));
}
function Bi(e, t) {
  try {
    var r = "",
      n = t;
    do ((r += lA(n)), (n = n.return));
    while (n);
    var i = r;
  } catch (a) {
    i =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Sf(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function Rd(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var NE = typeof WeakMap == "function" ? WeakMap : Map;
function Sw(e, t, r) {
  ((r = Ar(-1, r)), (r.tag = 3), (r.payload = { element: null }));
  var n = t.value;
  return (
    (r.callback = function () {
      (Wu || ((Wu = !0), (qd = n)), Rd(e, t));
    }),
    r
  );
}
function Ow(e, t, r) {
  ((r = Ar(-1, r)), (r.tag = 3));
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var i = t.value;
    ((r.payload = function () {
      return n(i);
    }),
      (r.callback = function () {
        Rd(e, t);
      }));
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (r.callback = function () {
        (Rd(e, t),
          typeof n != "function" &&
            (on === null ? (on = new Set([this])) : on.add(this)));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    r
  );
}
function by(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new NE();
    var i = new Set();
    n.set(t, i);
  } else ((i = n.get(t)), i === void 0 && ((i = new Set()), n.set(t, i)));
  i.has(r) || (i.add(r), (e = qE.bind(null, e, t, r)), t.then(e, e));
}
function xy(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function wy(e, t, r, n, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = Ar(-1, 1)), (t.tag = 2), an(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var IE = Rr.ReactCurrentOwner,
  ht = !1;
function ot(e, t, r, n) {
  t.child = e === null ? Z1(t, null, r, n) : Ri(t, e.child, r, n);
}
function Sy(e, t, r, n, i) {
  r = r.render;
  var a = t.ref;
  return (
    $i(t, i),
    (n = nv(e, t, r, n, a, i)),
    (r = iv()),
    e !== null && !ht
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Mr(e, t, i))
      : (we && r && Vh(t), (t.flags |= 1), ot(e, t, n, i), t.child)
  );
}
function Oy(e, t, r, n, i) {
  if (e === null) {
    var a = r.type;
    return typeof a == "function" &&
      !hv(a) &&
      a.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), Pw(e, t, a, n, i))
      : ((e = wu(r.type, null, n, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), !(e.lanes & i))) {
    var o = a.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : wo), r(o, n) && e.ref === t.ref)
    )
      return Mr(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = un(a, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Pw(e, t, r, n, i) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (wo(a, n) && e.ref === t.ref)
      if (((ht = !1), (t.pendingProps = n = a), (e.lanes & i) !== 0))
        e.flags & 131072 && (ht = !0);
      else return ((t.lanes = e.lanes), Mr(e, t, i));
  }
  return Fd(e, t, r, n, i);
}
function _w(e, t, r) {
  var n = t.pendingProps,
    i = n.children,
    a = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ve(wi, St),
        (St |= r));
    else {
      if (!(r & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ve(wi, St),
          (St |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = a !== null ? a.baseLanes : r),
        ve(wi, St),
        (St |= n));
    }
  else
    (a !== null ? ((n = a.baseLanes | r), (t.memoizedState = null)) : (n = r),
      ve(wi, St),
      (St |= n));
  return (ot(e, t, i, r), t.child);
}
function Aw(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Fd(e, t, r, n, i) {
  var a = yt(r) ? zn : at.current;
  return (
    (a = Di(t, a)),
    $i(t, i),
    (r = nv(e, t, r, n, a, i)),
    (n = iv()),
    e !== null && !ht
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Mr(e, t, i))
      : (we && n && Vh(t), (t.flags |= 1), ot(e, t, r, i), t.child)
  );
}
function Py(e, t, r, n, i) {
  if (yt(r)) {
    var a = !0;
    Mu(t);
  } else a = !1;
  if (($i(t, i), t.stateNode === null))
    (gu(e, t), ww(t, r, n), Ld(t, r, n, i), (n = !0));
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var u = o.context,
      s = r.contextType;
    typeof s == "object" && s !== null
      ? (s = Ut(s))
      : ((s = yt(r) ? zn : at.current), (s = Di(t, s)));
    var f = r.getDerivedStateFromProps,
      c =
        typeof f == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    (c ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== n || u !== s) && gy(t, o, n, s)),
      (Kr = !1));
    var d = t.memoizedState;
    ((o.state = d),
      Ru(t, n, o, i),
      (u = t.memoizedState),
      l !== n || d !== u || mt.current || Kr
        ? (typeof f == "function" && (Dd(t, r, f, n), (u = t.memoizedState)),
          (l = Kr || yy(t, r, l, n, d, u, s))
            ? (c ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = u)),
          (o.props = n),
          (o.state = u),
          (o.context = s),
          (n = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (n = !1)));
  } else {
    ((o = t.stateNode),
      ew(e, t),
      (l = t.memoizedProps),
      (s = t.type === t.elementType ? l : Xt(t.type, l)),
      (o.props = s),
      (c = t.pendingProps),
      (d = o.context),
      (u = r.contextType),
      typeof u == "object" && u !== null
        ? (u = Ut(u))
        : ((u = yt(r) ? zn : at.current), (u = Di(t, u))));
    var p = r.getDerivedStateFromProps;
    ((f =
      typeof p == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== c || d !== u) && gy(t, o, n, u)),
      (Kr = !1),
      (d = t.memoizedState),
      (o.state = d),
      Ru(t, n, o, i));
    var m = t.memoizedState;
    l !== c || d !== m || mt.current || Kr
      ? (typeof p == "function" && (Dd(t, r, p, n), (m = t.memoizedState)),
        (s = Kr || yy(t, r, s, n, d, m, u) || !1)
          ? (f ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(n, m, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(n, m, u)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = m)),
        (o.props = n),
        (o.state = m),
        (o.context = u),
        (n = s))
      : (typeof o.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return Bd(e, t, r, n, a, i);
}
function Bd(e, t, r, n, i, a) {
  Aw(e, t);
  var o = (t.flags & 128) !== 0;
  if (!n && !o) return (i && sy(t, r, !1), Mr(e, t, a));
  ((n = t.stateNode), (IE.current = t));
  var l =
    o && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Ri(t, e.child, null, a)), (t.child = Ri(t, null, l, a)))
      : ot(e, t, l, a),
    (t.memoizedState = n.state),
    i && sy(t, r, !0),
    t.child
  );
}
function Ew(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? uy(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && uy(e, t.context, !1),
    Jh(e, t.containerInfo));
}
function _y(e, t, r, n, i) {
  return (Li(), Gh(i), (t.flags |= 256), ot(e, t, r, n), t.child);
}
var zd = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ud(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function jw(e, t, r) {
  var n = t.pendingProps,
    i = Oe.current,
    a = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    ve(Oe, i & 1),
    e === null)
  )
    return (
      Nd(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = n.children),
          (e = n.fallback),
          a
            ? ((n = t.mode),
              (a = t.child),
              (o = { mode: "hidden", children: o }),
              !(n & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = o))
                : (a = lc(o, n, 0, null)),
              (e = Rn(e, n, r, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = Ud(r)),
              (t.memoizedState = zd),
              e)
            : lv(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return DE(e, t, o, n, l, i, r);
  if (a) {
    ((a = n.fallback), (o = t.mode), (i = e.child), (l = i.sibling));
    var u = { mode: "hidden", children: n.children };
    return (
      !(o & 1) && t.child !== i
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = u),
          (t.deletions = null))
        : ((n = un(i, u)), (n.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (a = un(l, a)) : ((a = Rn(a, o, r, null)), (a.flags |= 2)),
      (a.return = t),
      (n.return = t),
      (n.sibling = a),
      (t.child = n),
      (n = a),
      (a = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ud(r)
          : {
              baseLanes: o.baseLanes | r,
              cachePool: null,
              transitions: o.transitions,
            }),
      (a.memoizedState = o),
      (a.childLanes = e.childLanes & ~r),
      (t.memoizedState = zd),
      n
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (n = un(a, { mode: "visible", children: n.children })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function lv(e, t) {
  return (
    (t = lc({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Gl(e, t, r, n) {
  return (
    n !== null && Gh(n),
    Ri(t, e.child, null, r),
    (e = lv(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function DE(e, t, r, n, i, a, o) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = Sf(Error(U(422)))), Gl(e, t, o, n))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((a = n.fallback),
          (i = t.mode),
          (n = lc({ mode: "visible", children: n.children }, i, 0, null)),
          (a = Rn(a, i, o, null)),
          (a.flags |= 2),
          (n.return = t),
          (a.return = t),
          (n.sibling = a),
          (t.child = n),
          t.mode & 1 && Ri(t, e.child, null, o),
          (t.child.memoizedState = Ud(o)),
          (t.memoizedState = zd),
          a);
  if (!(t.mode & 1)) return Gl(e, t, o, null);
  if (i.data === "$!") {
    if (((n = i.nextSibling && i.nextSibling.dataset), n)) var l = n.dgst;
    return (
      (n = l),
      (a = Error(U(419))),
      (n = Sf(a, n, void 0)),
      Gl(e, t, o, n)
    );
  }
  if (((l = (o & e.childLanes) !== 0), ht || l)) {
    if (((n = Ke), n !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      ((i = i & (n.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== a.retryLane &&
          ((a.retryLane = i), kr(e, i), ar(n, e, i, -1)));
    }
    return (pv(), (n = Sf(Error(U(421)))), Gl(e, t, o, n));
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = XE.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (_t = nn(i.nextSibling)),
      (At = t),
      (we = !0),
      (er = null),
      e !== null &&
        ((It[Dt++] = wr),
        (It[Dt++] = Sr),
        (It[Dt++] = Un),
        (wr = e.id),
        (Sr = e.overflow),
        (Un = t)),
      (t = lv(t, n.children)),
      (t.flags |= 4096),
      t);
}
function Ay(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  (n !== null && (n.lanes |= t), Id(e.return, t, r));
}
function Of(e, t, r, n, i) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: i,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = n),
      (a.tail = r),
      (a.tailMode = i));
}
function $w(e, t, r) {
  var n = t.pendingProps,
    i = n.revealOrder,
    a = n.tail;
  if ((ot(e, t, n.children, r), (n = Oe.current), n & 2))
    ((n = (n & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ay(e, r, t);
        else if (e.tag === 19) Ay(e, r, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    n &= 1;
  }
  if ((ve(Oe, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (r = t.child, i = null; r !== null; )
          ((e = r.alternate),
            e !== null && Fu(e) === null && (i = r),
            (r = r.sibling));
        ((r = i),
          r === null
            ? ((i = t.child), (t.child = null))
            : ((i = r.sibling), (r.sibling = null)),
          Of(t, !1, i, r, a));
        break;
      case "backwards":
        for (r = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Fu(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = r), (r = i), (i = e));
        }
        Of(t, !0, r, null, a);
        break;
      case "together":
        Of(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function gu(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Mr(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Hn |= t.lanes),
    !(r & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(U(153));
  if (t.child !== null) {
    for (
      e = t.child, r = un(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      ((e = e.sibling),
        (r = r.sibling = un(e, e.pendingProps)),
        (r.return = t));
    r.sibling = null;
  }
  return t.child;
}
function LE(e, t, r) {
  switch (t.tag) {
    case 3:
      (Ew(t), Li());
      break;
    case 5:
      tw(t);
      break;
    case 1:
      yt(t.type) && Mu(t);
      break;
    case 4:
      Jh(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        i = t.memoizedProps.value;
      (ve(Du, n._currentValue), (n._currentValue = i));
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (ve(Oe, Oe.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
            ? jw(e, t, r)
            : (ve(Oe, Oe.current & 1),
              (e = Mr(e, t, r)),
              e !== null ? e.sibling : null);
      ve(Oe, Oe.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return $w(e, t, r);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ve(Oe, Oe.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), _w(e, t, r));
  }
  return Mr(e, t, r);
}
var Tw, Wd, Cw, kw;
Tw = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      ((r.child.return = r), (r = r.child));
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    ((r.sibling.return = r.return), (r = r.sibling));
  }
};
Wd = function () {};
Cw = function (e, t, r, n) {
  var i = e.memoizedProps;
  if (i !== n) {
    ((e = t.stateNode), kn(pr.current));
    var a = null;
    switch (r) {
      case "input":
        ((i = fd(e, i)), (n = fd(e, n)), (a = []));
        break;
      case "select":
        ((i = _e({}, i, { value: void 0 })),
          (n = _e({}, n, { value: void 0 })),
          (a = []));
        break;
      case "textarea":
        ((i = hd(e, i)), (n = hd(e, n)), (a = []));
        break;
      default:
        typeof i.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = Cu);
    }
    md(r, n);
    var o;
    r = null;
    for (s in i)
      if (!n.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null)
        if (s === "style") {
          var l = i[s];
          for (o in l) l.hasOwnProperty(o) && (r || (r = {}), (r[o] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (ho.hasOwnProperty(s)
              ? a || (a = [])
              : (a = a || []).push(s, null));
    for (s in n) {
      var u = n[s];
      if (
        ((l = i != null ? i[s] : void 0),
        n.hasOwnProperty(s) && u !== l && (u != null || l != null))
      )
        if (s === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (r || (r = {}), (r[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                l[o] !== u[o] &&
                (r || (r = {}), (r[o] = u[o]));
          } else (r || (a || (a = []), a.push(s, r)), (r = u));
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (l = l ? l.__html : void 0),
              u != null && l !== u && (a = a || []).push(s, u))
            : s === "children"
              ? (typeof u != "string" && typeof u != "number") ||
                (a = a || []).push(s, "" + u)
              : s !== "suppressContentEditableWarning" &&
                s !== "suppressHydrationWarning" &&
                (ho.hasOwnProperty(s)
                  ? (u != null && s === "onScroll" && me("scroll", e),
                    a || l === u || (a = []))
                  : (a = a || []).push(s, u));
    }
    r && (a = a || []).push("style", r);
    var s = a;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
kw = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function Na(e, t) {
  if (!we)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          (t.alternate !== null && (r = t), (t = t.sibling));
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; )
          (r.alternate !== null && (n = r), (r = r.sibling));
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function et(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t)
    for (var i = e.child; i !== null; )
      ((r |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags & 14680064),
        (n |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling));
  else
    for (i = e.child; i !== null; )
      ((r |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags),
        (n |= i.flags),
        (i.return = e),
        (i = i.sibling));
  return ((e.subtreeFlags |= n), (e.childLanes = r), t);
}
function RE(e, t, r) {
  var n = t.pendingProps;
  switch ((Kh(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (et(t), null);
    case 1:
      return (yt(t.type) && ku(), et(t), null);
    case 3:
      return (
        (n = t.stateNode),
        Fi(),
        be(mt),
        be(at),
        tv(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (Vl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), er !== null && (Qd(er), (er = null)))),
        Wd(e, t),
        et(t),
        null
      );
    case 5:
      ev(t);
      var i = kn(Ao.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        (Cw(e, t, r, n, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(U(166));
          return (et(t), null);
        }
        if (((e = kn(pr.current)), Vl(t))) {
          ((n = t.stateNode), (r = t.type));
          var a = t.memoizedProps;
          switch (((n[cr] = t), (n[Po] = a), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              (me("cancel", n), me("close", n));
              break;
            case "iframe":
            case "object":
            case "embed":
              me("load", n);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Qa.length; i++) me(Qa[i], n);
              break;
            case "source":
              me("error", n);
              break;
            case "img":
            case "image":
            case "link":
              (me("error", n), me("load", n));
              break;
            case "details":
              me("toggle", n);
              break;
            case "input":
              (Im(n, a), me("invalid", n));
              break;
            case "select":
              ((n._wrapperState = { wasMultiple: !!a.multiple }),
                me("invalid", n));
              break;
            case "textarea":
              (Lm(n, a), me("invalid", n));
          }
          (md(r, a), (i = null));
          for (var o in a)
            if (a.hasOwnProperty(o)) {
              var l = a[o];
              o === "children"
                ? typeof l == "string"
                  ? n.textContent !== l &&
                    (a.suppressHydrationWarning !== !0 &&
                      Hl(n.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    n.textContent !== "" + l &&
                    (a.suppressHydrationWarning !== !0 &&
                      Hl(n.textContent, l, e),
                    (i = ["children", "" + l]))
                : ho.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  me("scroll", n);
            }
          switch (r) {
            case "input":
              (Dl(n), Dm(n, a, !0));
              break;
            case "textarea":
              (Dl(n), Rm(n));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (n.onclick = Cu);
          }
          ((n = i), (t.updateQueue = n), n !== null && (t.flags |= 4));
        } else {
          ((o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = o1(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                  ? (e = o.createElement(r, { is: n.is }))
                  : ((e = o.createElement(r)),
                    r === "select" &&
                      ((o = e),
                      n.multiple
                        ? (o.multiple = !0)
                        : n.size && (o.size = n.size)))
              : (e = o.createElementNS(e, r)),
            (e[cr] = t),
            (e[Po] = n),
            Tw(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = yd(r, n)), r)) {
              case "dialog":
                (me("cancel", e), me("close", e), (i = n));
                break;
              case "iframe":
              case "object":
              case "embed":
                (me("load", e), (i = n));
                break;
              case "video":
              case "audio":
                for (i = 0; i < Qa.length; i++) me(Qa[i], e);
                i = n;
                break;
              case "source":
                (me("error", e), (i = n));
                break;
              case "img":
              case "image":
              case "link":
                (me("error", e), me("load", e), (i = n));
                break;
              case "details":
                (me("toggle", e), (i = n));
                break;
              case "input":
                (Im(e, n), (i = fd(e, n)), me("invalid", e));
                break;
              case "option":
                i = n;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!n.multiple }),
                  (i = _e({}, n, { value: void 0 })),
                  me("invalid", e));
                break;
              case "textarea":
                (Lm(e, n), (i = hd(e, n)), me("invalid", e));
                break;
              default:
                i = n;
            }
            (md(r, i), (l = i));
            for (a in l)
              if (l.hasOwnProperty(a)) {
                var u = l[a];
                a === "style"
                  ? s1(e, u)
                  : a === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && l1(e, u))
                    : a === "children"
                      ? typeof u == "string"
                        ? (r !== "textarea" || u !== "") && vo(e, u)
                        : typeof u == "number" && vo(e, "" + u)
                      : a !== "suppressContentEditableWarning" &&
                        a !== "suppressHydrationWarning" &&
                        a !== "autoFocus" &&
                        (ho.hasOwnProperty(a)
                          ? u != null && a === "onScroll" && me("scroll", e)
                          : u != null && Ch(e, a, u, o));
              }
            switch (r) {
              case "input":
                (Dl(e), Dm(e, n, !1));
                break;
              case "textarea":
                (Dl(e), Rm(e));
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + fn(n.value));
                break;
              case "select":
                ((e.multiple = !!n.multiple),
                  (a = n.value),
                  a != null
                    ? _i(e, !!n.multiple, a, !1)
                    : n.defaultValue != null &&
                      _i(e, !!n.multiple, n.defaultValue, !0));
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Cu);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (et(t), null);
    case 6:
      if (e && t.stateNode != null) kw(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(U(166));
        if (((r = kn(Ao.current)), kn(pr.current), Vl(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[cr] = t),
            (a = n.nodeValue !== r) && ((e = At), e !== null))
          )
            switch (e.tag) {
              case 3:
                Hl(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Hl(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          ((n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[cr] = t),
            (t.stateNode = n));
      }
      return (et(t), null);
    case 13:
      if (
        (be(Oe),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (we && _t !== null && t.mode & 1 && !(t.flags & 128))
          (Y1(), Li(), (t.flags |= 98560), (a = !1));
        else if (((a = Vl(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(U(318));
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(U(317));
            a[cr] = t;
          } else
            (Li(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (et(t), (a = !1));
        } else (er !== null && (Qd(er), (er = null)), (a = !0));
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Oe.current & 1 ? ze === 0 && (ze = 3) : pv())),
          t.updateQueue !== null && (t.flags |= 4),
          et(t),
          null);
    case 4:
      return (
        Fi(),
        Wd(e, t),
        e === null && So(t.stateNode.containerInfo),
        et(t),
        null
      );
    case 10:
      return (Yh(t.type._context), et(t), null);
    case 17:
      return (yt(t.type) && ku(), et(t), null);
    case 19:
      if ((be(Oe), (a = t.memoizedState), a === null)) return (et(t), null);
      if (((n = (t.flags & 128) !== 0), (o = a.rendering), o === null))
        if (n) Na(a, !1);
        else {
          if (ze !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Fu(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Na(a, !1),
                    n = o.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  ((a = r),
                    (e = n),
                    (a.flags &= 14680066),
                    (o = a.alternate),
                    o === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = o.childLanes),
                        (a.lanes = o.lanes),
                        (a.child = o.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = o.memoizedProps),
                        (a.memoizedState = o.memoizedState),
                        (a.updateQueue = o.updateQueue),
                        (a.type = o.type),
                        (e = o.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling));
                return (ve(Oe, (Oe.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          a.tail !== null &&
            Ce() > zi &&
            ((t.flags |= 128), (n = !0), Na(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = Fu(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              Na(a, !0),
              a.tail === null && a.tailMode === "hidden" && !o.alternate && !we)
            )
              return (et(t), null);
          } else
            2 * Ce() - a.renderingStartTime > zi &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), Na(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((r = a.last),
            r !== null ? (r.sibling = o) : (t.child = o),
            (a.last = o));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = Ce()),
          (t.sibling = null),
          (r = Oe.current),
          ve(Oe, n ? (r & 1) | 2 : r & 1),
          t)
        : (et(t), null);
    case 22:
    case 23:
      return (
        dv(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? St & 1073741824 && (et(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : et(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(U(156, t.tag));
}
function FE(e, t) {
  switch ((Kh(t), t.tag)) {
    case 1:
      return (
        yt(t.type) && ku(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Fi(),
        be(mt),
        be(at),
        tv(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (ev(t), null);
    case 13:
      if (
        (be(Oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(U(340));
        Li();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (be(Oe), null);
    case 4:
      return (Fi(), null);
    case 10:
      return (Yh(t.type._context), null);
    case 22:
    case 23:
      return (dv(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var ql = !1,
  rt = !1,
  BE = typeof WeakSet == "function" ? WeakSet : Set,
  G = null;
function xi(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        Ee(e, t, n);
      }
    else r.current = null;
}
function Hd(e, t, r) {
  try {
    r();
  } catch (n) {
    Ee(e, t, n);
  }
}
var Ey = !1;
function zE(e, t) {
  if (((Ed = ju), (e = L1()), Hh(e))) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var i = n.anchorOffset,
            a = n.focusNode;
          n = n.focusOffset;
          try {
            (r.nodeType, a.nodeType);
          } catch {
            r = null;
            break e;
          }
          var o = 0,
            l = -1,
            u = -1,
            s = 0,
            f = 0,
            c = e,
            d = null;
          t: for (;;) {
            for (
              var p;
              c !== r || (i !== 0 && c.nodeType !== 3) || (l = o + i),
                c !== a || (n !== 0 && c.nodeType !== 3) || (u = o + n),
                c.nodeType === 3 && (o += c.nodeValue.length),
                (p = c.firstChild) !== null;

            )
              ((d = c), (c = p));
            for (;;) {
              if (c === e) break t;
              if (
                (d === r && ++s === i && (l = o),
                d === a && ++f === n && (u = o),
                (p = c.nextSibling) !== null)
              )
                break;
              ((c = d), (d = c.parentNode));
            }
            c = p;
          }
          r = l === -1 || u === -1 ? null : { start: l, end: u };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (jd = { focusedElem: e, selectionRange: r }, ju = !1, G = t; G !== null; )
    if (((t = G), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (G = e));
    else
      for (; G !== null; ) {
        t = G;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var y = m.memoizedProps,
                    x = m.memoizedState,
                    v = t.stateNode,
                    h = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Xt(t.type, y),
                      x,
                    );
                  v.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(U(163));
            }
        } catch (S) {
          Ee(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (G = e));
          break;
        }
        G = t.return;
      }
  return ((m = Ey), (Ey = !1), m);
}
function ao(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var i = (n = n.next);
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        ((i.destroy = void 0), a !== void 0 && Hd(t, r, a));
      }
      i = i.next;
    } while (i !== n);
  }
}
function ac(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function Vd(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Mw(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Mw(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[cr], delete t[Po], delete t[Cd], delete t[OE], delete t[PE])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Nw(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function jy(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Nw(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Kd(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    ((e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = Cu)));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Kd(e, t, r), e = e.sibling; e !== null; )
      (Kd(e, t, r), (e = e.sibling));
}
function Gd(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    ((e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Gd(e, t, r), e = e.sibling; e !== null; )
      (Gd(e, t, r), (e = e.sibling));
}
var Xe = null,
  Yt = !1;
function Wr(e, t, r) {
  for (r = r.child; r !== null; ) (Iw(e, t, r), (r = r.sibling));
}
function Iw(e, t, r) {
  if (dr && typeof dr.onCommitFiberUnmount == "function")
    try {
      dr.onCommitFiberUnmount(Qs, r);
    } catch {}
  switch (r.tag) {
    case 5:
      rt || xi(r, t);
    case 6:
      var n = Xe,
        i = Yt;
      ((Xe = null),
        Wr(e, t, r),
        (Xe = n),
        (Yt = i),
        Xe !== null &&
          (Yt
            ? ((e = Xe),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : Xe.removeChild(r.stateNode)));
      break;
    case 18:
      Xe !== null &&
        (Yt
          ? ((e = Xe),
            (r = r.stateNode),
            e.nodeType === 8
              ? mf(e.parentNode, r)
              : e.nodeType === 1 && mf(e, r),
            bo(e))
          : mf(Xe, r.stateNode));
      break;
    case 4:
      ((n = Xe),
        (i = Yt),
        (Xe = r.stateNode.containerInfo),
        (Yt = !0),
        Wr(e, t, r),
        (Xe = n),
        (Yt = i));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !rt &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        i = n = n.next;
        do {
          var a = i,
            o = a.destroy;
          ((a = a.tag),
            o !== void 0 && (a & 2 || a & 4) && Hd(r, t, o),
            (i = i.next));
        } while (i !== n);
      }
      Wr(e, t, r);
      break;
    case 1:
      if (
        !rt &&
        (xi(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          ((n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount());
        } catch (l) {
          Ee(r, t, l);
        }
      Wr(e, t, r);
      break;
    case 21:
      Wr(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((rt = (n = rt) || r.memoizedState !== null), Wr(e, t, r), (rt = n))
        : Wr(e, t, r);
      break;
    default:
      Wr(e, t, r);
  }
}
function $y(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    (r === null && (r = e.stateNode = new BE()),
      t.forEach(function (n) {
        var i = YE.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(i, i));
      }));
  }
}
function Gt(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var i = r[n];
      try {
        var a = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              ((Xe = l.stateNode), (Yt = !1));
              break e;
            case 3:
              ((Xe = l.stateNode.containerInfo), (Yt = !0));
              break e;
            case 4:
              ((Xe = l.stateNode.containerInfo), (Yt = !0));
              break e;
          }
          l = l.return;
        }
        if (Xe === null) throw Error(U(160));
        (Iw(a, o, i), (Xe = null), (Yt = !1));
        var u = i.alternate;
        (u !== null && (u.return = null), (i.return = null));
      } catch (s) {
        Ee(i, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Dw(t, e), (t = t.sibling));
}
function Dw(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Gt(t, e), ur(e), n & 4)) {
        try {
          (ao(3, e, e.return), ac(3, e));
        } catch (y) {
          Ee(e, e.return, y);
        }
        try {
          ao(5, e, e.return);
        } catch (y) {
          Ee(e, e.return, y);
        }
      }
      break;
    case 1:
      (Gt(t, e), ur(e), n & 512 && r !== null && xi(r, r.return));
      break;
    case 5:
      if (
        (Gt(t, e),
        ur(e),
        n & 512 && r !== null && xi(r, r.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          vo(i, "");
        } catch (y) {
          Ee(e, e.return, y);
        }
      }
      if (n & 4 && ((i = e.stateNode), i != null)) {
        var a = e.memoizedProps,
          o = r !== null ? r.memoizedProps : a,
          l = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            (l === "input" && a.type === "radio" && a.name != null && i1(i, a),
              yd(l, o));
            var s = yd(l, a);
            for (o = 0; o < u.length; o += 2) {
              var f = u[o],
                c = u[o + 1];
              f === "style"
                ? s1(i, c)
                : f === "dangerouslySetInnerHTML"
                  ? l1(i, c)
                  : f === "children"
                    ? vo(i, c)
                    : Ch(i, f, c, s);
            }
            switch (l) {
              case "input":
                dd(i, a);
                break;
              case "textarea":
                a1(i, a);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!a.multiple;
                var p = a.value;
                p != null
                  ? _i(i, !!a.multiple, p, !1)
                  : d !== !!a.multiple &&
                    (a.defaultValue != null
                      ? _i(i, !!a.multiple, a.defaultValue, !0)
                      : _i(i, !!a.multiple, a.multiple ? [] : "", !1));
            }
            i[Po] = a;
          } catch (y) {
            Ee(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Gt(t, e), ur(e), n & 4)) {
        if (e.stateNode === null) throw Error(U(162));
        ((i = e.stateNode), (a = e.memoizedProps));
        try {
          i.nodeValue = a;
        } catch (y) {
          Ee(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Gt(t, e), ur(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          bo(t.containerInfo);
        } catch (y) {
          Ee(e, e.return, y);
        }
      break;
    case 4:
      (Gt(t, e), ur(e));
      break;
    case 13:
      (Gt(t, e),
        ur(e),
        (i = e.child),
        i.flags & 8192 &&
          ((a = i.memoizedState !== null),
          (i.stateNode.isHidden = a),
          !a ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (cv = Ce())),
        n & 4 && $y(e));
      break;
    case 22:
      if (
        ((f = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((rt = (s = rt) || f), Gt(t, e), (rt = s)) : Gt(t, e),
        ur(e),
        n & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !f && e.mode & 1)
        )
          for (G = e, f = e.child; f !== null; ) {
            for (c = G = f; G !== null; ) {
              switch (((d = G), (p = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ao(4, d, d.return);
                  break;
                case 1:
                  xi(d, d.return);
                  var m = d.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    ((n = d), (r = d.return));
                    try {
                      ((t = n),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount());
                    } catch (y) {
                      Ee(n, r, y);
                    }
                  }
                  break;
                case 5:
                  xi(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Cy(c);
                    continue;
                  }
              }
              p !== null ? ((p.return = d), (G = p)) : Cy(c);
            }
            f = f.sibling;
          }
        e: for (f = null, c = e; ; ) {
          if (c.tag === 5) {
            if (f === null) {
              f = c;
              try {
                ((i = c.stateNode),
                  s
                    ? ((a = i.style),
                      typeof a.setProperty == "function"
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none"))
                    : ((l = c.stateNode),
                      (u = c.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (l.style.display = u1("display", o))));
              } catch (y) {
                Ee(e, e.return, y);
              }
            }
          } else if (c.tag === 6) {
            if (f === null)
              try {
                c.stateNode.nodeValue = s ? "" : c.memoizedProps;
              } catch (y) {
                Ee(e, e.return, y);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            ((c.child.return = c), (c = c.child));
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            (f === c && (f = null), (c = c.return));
          }
          (f === c && (f = null),
            (c.sibling.return = c.return),
            (c = c.sibling));
        }
      }
      break;
    case 19:
      (Gt(t, e), ur(e), n & 4 && $y(e));
      break;
    case 21:
      break;
    default:
      (Gt(t, e), ur(e));
  }
}
function ur(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (Nw(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(U(160));
      }
      switch (n.tag) {
        case 5:
          var i = n.stateNode;
          n.flags & 32 && (vo(i, ""), (n.flags &= -33));
          var a = jy(e);
          Gd(e, a, i);
          break;
        case 3:
        case 4:
          var o = n.stateNode.containerInfo,
            l = jy(e);
          Kd(e, l, o);
          break;
        default:
          throw Error(U(161));
      }
    } catch (u) {
      Ee(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function UE(e, t, r) {
  ((G = e), Lw(e));
}
function Lw(e, t, r) {
  for (var n = (e.mode & 1) !== 0; G !== null; ) {
    var i = G,
      a = i.child;
    if (i.tag === 22 && n) {
      var o = i.memoizedState !== null || ql;
      if (!o) {
        var l = i.alternate,
          u = (l !== null && l.memoizedState !== null) || rt;
        l = ql;
        var s = rt;
        if (((ql = o), (rt = u) && !s))
          for (G = i; G !== null; )
            ((o = G),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? ky(i)
                : u !== null
                  ? ((u.return = o), (G = u))
                  : ky(i));
        for (; a !== null; ) ((G = a), Lw(a), (a = a.sibling));
        ((G = i), (ql = l), (rt = s));
      }
      Ty(e);
    } else
      i.subtreeFlags & 8772 && a !== null ? ((a.return = i), (G = a)) : Ty(e);
  }
}
function Ty(e) {
  for (; G !== null; ) {
    var t = G;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              rt || ac(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !rt)
                if (r === null) n.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : Xt(t.type, r.memoizedProps);
                  n.componentDidUpdate(
                    i,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var a = t.updateQueue;
              a !== null && hy(t, a, n);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                hy(t, o, r);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (r === null && t.flags & 4) {
                r = l;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && r.focus();
                    break;
                  case "img":
                    u.src && (r.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var f = s.memoizedState;
                  if (f !== null) {
                    var c = f.dehydrated;
                    c !== null && bo(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(U(163));
          }
        rt || (t.flags & 512 && Vd(t));
      } catch (d) {
        Ee(t, t.return, d);
      }
    }
    if (t === e) {
      G = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      ((r.return = t.return), (G = r));
      break;
    }
    G = t.return;
  }
}
function Cy(e) {
  for (; G !== null; ) {
    var t = G;
    if (t === e) {
      G = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      ((r.return = t.return), (G = r));
      break;
    }
    G = t.return;
  }
}
function ky(e) {
  for (; G !== null; ) {
    var t = G;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            ac(4, t);
          } catch (u) {
            Ee(t, r, u);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var i = t.return;
            try {
              n.componentDidMount();
            } catch (u) {
              Ee(t, i, u);
            }
          }
          var a = t.return;
          try {
            Vd(t);
          } catch (u) {
            Ee(t, a, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Vd(t);
          } catch (u) {
            Ee(t, o, u);
          }
      }
    } catch (u) {
      Ee(t, t.return, u);
    }
    if (t === e) {
      G = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      ((l.return = t.return), (G = l));
      break;
    }
    G = t.return;
  }
}
var WE = Math.ceil,
  Uu = Rr.ReactCurrentDispatcher,
  uv = Rr.ReactCurrentOwner,
  Ft = Rr.ReactCurrentBatchConfig,
  ae = 0,
  Ke = null,
  Ne = null,
  Qe = 0,
  St = 0,
  wi = vn(0),
  ze = 0,
  To = null,
  Hn = 0,
  oc = 0,
  sv = 0,
  oo = null,
  pt = null,
  cv = 0,
  zi = 1 / 0,
  br = null,
  Wu = !1,
  qd = null,
  on = null,
  Xl = !1,
  Zr = null,
  Hu = 0,
  lo = 0,
  Xd = null,
  bu = -1,
  xu = 0;
function ut() {
  return ae & 6 ? Ce() : bu !== -1 ? bu : (bu = Ce());
}
function ln(e) {
  return e.mode & 1
    ? ae & 2 && Qe !== 0
      ? Qe & -Qe
      : AE.transition !== null
        ? (xu === 0 && (xu = w1()), xu)
        : ((e = se),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : j1(e.type))),
          e)
    : 1;
}
function ar(e, t, r, n) {
  if (50 < lo) throw ((lo = 0), (Xd = null), Error(U(185)));
  (vl(e, r, n),
    (!(ae & 2) || e !== Ke) &&
      (e === Ke && (!(ae & 2) && (oc |= r), ze === 4 && Xr(e, Qe)),
      gt(e, n),
      r === 1 && ae === 0 && !(t.mode & 1) && ((zi = Ce() + 500), rc && mn())));
}
function gt(e, t) {
  var r = e.callbackNode;
  AA(e, t);
  var n = Eu(e, e === Ke ? Qe : 0);
  if (n === 0)
    (r !== null && zm(r), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && zm(r), t === 1))
      (e.tag === 0 ? _E(My.bind(null, e)) : G1(My.bind(null, e)),
        wE(function () {
          !(ae & 6) && mn();
        }),
        (r = null));
    else {
      switch (S1(n)) {
        case 1:
          r = Dh;
          break;
        case 4:
          r = b1;
          break;
        case 16:
          r = Au;
          break;
        case 536870912:
          r = x1;
          break;
        default:
          r = Au;
      }
      r = Vw(r, Rw.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = r));
  }
}
function Rw(e, t) {
  if (((bu = -1), (xu = 0), ae & 6)) throw Error(U(327));
  var r = e.callbackNode;
  if (Ti() && e.callbackNode !== r) return null;
  var n = Eu(e, e === Ke ? Qe : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = Vu(e, n);
  else {
    t = n;
    var i = ae;
    ae |= 2;
    var a = Bw();
    (Ke !== e || Qe !== t) && ((br = null), (zi = Ce() + 500), Ln(e, t));
    do
      try {
        KE();
        break;
      } catch (l) {
        Fw(e, l);
      }
    while (!0);
    (Xh(),
      (Uu.current = a),
      (ae = i),
      Ne !== null ? (t = 0) : ((Ke = null), (Qe = 0), (t = ze)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Sd(e)), i !== 0 && ((n = i), (t = Yd(e, i)))), t === 1)
    )
      throw ((r = To), Ln(e, 0), Xr(e, n), gt(e, Ce()), r);
    if (t === 6) Xr(e, n);
    else {
      if (
        ((i = e.current.alternate),
        !(n & 30) &&
          !HE(i) &&
          ((t = Vu(e, n)),
          t === 2 && ((a = Sd(e)), a !== 0 && ((n = a), (t = Yd(e, a)))),
          t === 1))
      )
        throw ((r = To), Ln(e, 0), Xr(e, n), gt(e, Ce()), r);
      switch (((e.finishedWork = i), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(U(345));
        case 2:
          An(e, pt, br);
          break;
        case 3:
          if (
            (Xr(e, n), (n & 130023424) === n && ((t = cv + 500 - Ce()), 10 < t))
          ) {
            if (Eu(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & n) !== n)) {
              (ut(), (e.pingedLanes |= e.suspendedLanes & i));
              break;
            }
            e.timeoutHandle = Td(An.bind(null, e, pt, br), t);
            break;
          }
          An(e, pt, br);
          break;
        case 4:
          if ((Xr(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, i = -1; 0 < n; ) {
            var o = 31 - ir(n);
            ((a = 1 << o), (o = t[o]), o > i && (i = o), (n &= ~a));
          }
          if (
            ((n = i),
            (n = Ce() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                  ? 480
                  : 1080 > n
                    ? 1080
                    : 1920 > n
                      ? 1920
                      : 3e3 > n
                        ? 3e3
                        : 4320 > n
                          ? 4320
                          : 1960 * WE(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = Td(An.bind(null, e, pt, br), n);
            break;
          }
          An(e, pt, br);
          break;
        case 5:
          An(e, pt, br);
          break;
        default:
          throw Error(U(329));
      }
    }
  }
  return (gt(e, Ce()), e.callbackNode === r ? Rw.bind(null, e) : null);
}
function Yd(e, t) {
  var r = oo;
  return (
    e.current.memoizedState.isDehydrated && (Ln(e, t).flags |= 256),
    (e = Vu(e, t)),
    e !== 2 && ((t = pt), (pt = r), t !== null && Qd(t)),
    e
  );
}
function Qd(e) {
  pt === null ? (pt = e) : pt.push.apply(pt, e);
}
function HE(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var i = r[n],
            a = i.getSnapshot;
          i = i.value;
          try {
            if (!or(a(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      ((r.return = t), (t = r));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Xr(e, t) {
  for (
    t &= ~sv,
      t &= ~oc,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - ir(t),
      n = 1 << r;
    ((e[r] = -1), (t &= ~n));
  }
}
function My(e) {
  if (ae & 6) throw Error(U(327));
  Ti();
  var t = Eu(e, 0);
  if (!(t & 1)) return (gt(e, Ce()), null);
  var r = Vu(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Sd(e);
    n !== 0 && ((t = n), (r = Yd(e, n)));
  }
  if (r === 1) throw ((r = To), Ln(e, 0), Xr(e, t), gt(e, Ce()), r);
  if (r === 6) throw Error(U(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    An(e, pt, br),
    gt(e, Ce()),
    null
  );
}
function fv(e, t) {
  var r = ae;
  ae |= 1;
  try {
    return e(t);
  } finally {
    ((ae = r), ae === 0 && ((zi = Ce() + 500), rc && mn()));
  }
}
function Vn(e) {
  Zr !== null && Zr.tag === 0 && !(ae & 6) && Ti();
  var t = ae;
  ae |= 1;
  var r = Ft.transition,
    n = se;
  try {
    if (((Ft.transition = null), (se = 1), e)) return e();
  } finally {
    ((se = n), (Ft.transition = r), (ae = t), !(ae & 6) && mn());
  }
}
function dv() {
  ((St = wi.current), be(wi));
}
function Ln(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), xE(r)), Ne !== null))
    for (r = Ne.return; r !== null; ) {
      var n = r;
      switch ((Kh(n), n.tag)) {
        case 1:
          ((n = n.type.childContextTypes), n != null && ku());
          break;
        case 3:
          (Fi(), be(mt), be(at), tv());
          break;
        case 5:
          ev(n);
          break;
        case 4:
          Fi();
          break;
        case 13:
          be(Oe);
          break;
        case 19:
          be(Oe);
          break;
        case 10:
          Yh(n.type._context);
          break;
        case 22:
        case 23:
          dv();
      }
      r = r.return;
    }
  if (
    ((Ke = e),
    (Ne = e = un(e.current, null)),
    (Qe = St = t),
    (ze = 0),
    (To = null),
    (sv = oc = Hn = 0),
    (pt = oo = null),
    Cn !== null)
  ) {
    for (t = 0; t < Cn.length; t++)
      if (((r = Cn[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var i = n.next,
          a = r.pending;
        if (a !== null) {
          var o = a.next;
          ((a.next = i), (n.next = o));
        }
        r.pending = n;
      }
    Cn = null;
  }
  return e;
}
function Fw(e, t) {
  do {
    var r = Ne;
    try {
      if ((Xh(), (mu.current = zu), Bu)) {
        for (var n = Pe.memoizedState; n !== null; ) {
          var i = n.queue;
          (i !== null && (i.pending = null), (n = n.next));
        }
        Bu = !1;
      }
      if (
        ((Wn = 0),
        (Ve = Be = Pe = null),
        (io = !1),
        (Eo = 0),
        (uv.current = null),
        r === null || r.return === null)
      ) {
        ((ze = 1), (To = t), (Ne = null));
        break;
      }
      e: {
        var a = e,
          o = r.return,
          l = r,
          u = t;
        if (
          ((t = Qe),
          (l.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            f = l,
            c = f.tag;
          if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var d = f.alternate;
            d
              ? ((f.updateQueue = d.updateQueue),
                (f.memoizedState = d.memoizedState),
                (f.lanes = d.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var p = xy(o);
          if (p !== null) {
            ((p.flags &= -257),
              wy(p, o, l, a, t),
              p.mode & 1 && by(a, s, t),
              (t = p),
              (u = s));
            var m = t.updateQueue;
            if (m === null) {
              var y = new Set();
              (y.add(u), (t.updateQueue = y));
            } else m.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              (by(a, s, t), pv());
              break e;
            }
            u = Error(U(426));
          }
        } else if (we && l.mode & 1) {
          var x = xy(o);
          if (x !== null) {
            (!(x.flags & 65536) && (x.flags |= 256),
              wy(x, o, l, a, t),
              Gh(Bi(u, l)));
            break e;
          }
        }
        ((a = u = Bi(u, l)),
          ze !== 4 && (ze = 2),
          oo === null ? (oo = [a]) : oo.push(a),
          (a = o));
        do {
          switch (a.tag) {
            case 3:
              ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
              var v = Sw(a, u, t);
              py(a, v);
              break e;
            case 1:
              l = u;
              var h = a.type,
                g = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (on === null || !on.has(g))))
              ) {
                ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
                var S = Ow(a, l, t);
                py(a, S);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      Uw(r);
    } catch (b) {
      ((t = b), Ne === r && r !== null && (Ne = r = r.return));
      continue;
    }
    break;
  } while (!0);
}
function Bw() {
  var e = Uu.current;
  return ((Uu.current = zu), e === null ? zu : e);
}
function pv() {
  ((ze === 0 || ze === 3 || ze === 2) && (ze = 4),
    Ke === null || (!(Hn & 268435455) && !(oc & 268435455)) || Xr(Ke, Qe));
}
function Vu(e, t) {
  var r = ae;
  ae |= 2;
  var n = Bw();
  (Ke !== e || Qe !== t) && ((br = null), Ln(e, t));
  do
    try {
      VE();
      break;
    } catch (i) {
      Fw(e, i);
    }
  while (!0);
  if ((Xh(), (ae = r), (Uu.current = n), Ne !== null)) throw Error(U(261));
  return ((Ke = null), (Qe = 0), ze);
}
function VE() {
  for (; Ne !== null; ) zw(Ne);
}
function KE() {
  for (; Ne !== null && !yA(); ) zw(Ne);
}
function zw(e) {
  var t = Hw(e.alternate, e, St);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Uw(e) : (Ne = t),
    (uv.current = null));
}
function Uw(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = FE(r, t)), r !== null)) {
        ((r.flags &= 32767), (Ne = r));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((ze = 6), (Ne = null));
        return;
      }
    } else if (((r = RE(r, t, St)), r !== null)) {
      Ne = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ne = t;
      return;
    }
    Ne = t = e;
  } while (t !== null);
  ze === 0 && (ze = 5);
}
function An(e, t, r) {
  var n = se,
    i = Ft.transition;
  try {
    ((Ft.transition = null), (se = 1), GE(e, t, r, n));
  } finally {
    ((Ft.transition = i), (se = n));
  }
  return null;
}
function GE(e, t, r, n) {
  do Ti();
  while (Zr !== null);
  if (ae & 6) throw Error(U(327));
  r = e.finishedWork;
  var i = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(U(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var a = r.lanes | r.childLanes;
  if (
    (EA(e, a),
    e === Ke && ((Ne = Ke = null), (Qe = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      Xl ||
      ((Xl = !0),
      Vw(Au, function () {
        return (Ti(), null);
      })),
    (a = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || a)
  ) {
    ((a = Ft.transition), (Ft.transition = null));
    var o = se;
    se = 1;
    var l = ae;
    ((ae |= 4),
      (uv.current = null),
      zE(e, r),
      Dw(r, e),
      pE(jd),
      (ju = !!Ed),
      (jd = Ed = null),
      (e.current = r),
      UE(r),
      gA(),
      (ae = l),
      (se = o),
      (Ft.transition = a));
  } else e.current = r;
  if (
    (Xl && ((Xl = !1), (Zr = e), (Hu = i)),
    (a = e.pendingLanes),
    a === 0 && (on = null),
    wA(r.stateNode),
    gt(e, Ce()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      ((i = t[r]), n(i.value, { componentStack: i.stack, digest: i.digest }));
  if (Wu) throw ((Wu = !1), (e = qd), (qd = null), e);
  return (
    Hu & 1 && e.tag !== 0 && Ti(),
    (a = e.pendingLanes),
    a & 1 ? (e === Xd ? lo++ : ((lo = 0), (Xd = e))) : (lo = 0),
    mn(),
    null
  );
}
function Ti() {
  if (Zr !== null) {
    var e = S1(Hu),
      t = Ft.transition,
      r = se;
    try {
      if (((Ft.transition = null), (se = 16 > e ? 16 : e), Zr === null))
        var n = !1;
      else {
        if (((e = Zr), (Zr = null), (Hu = 0), ae & 6)) throw Error(U(331));
        var i = ae;
        for (ae |= 4, G = e.current; G !== null; ) {
          var a = G,
            o = a.child;
          if (G.flags & 16) {
            var l = a.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var s = l[u];
                for (G = s; G !== null; ) {
                  var f = G;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ao(8, f, a);
                  }
                  var c = f.child;
                  if (c !== null) ((c.return = f), (G = c));
                  else
                    for (; G !== null; ) {
                      f = G;
                      var d = f.sibling,
                        p = f.return;
                      if ((Mw(f), f === s)) {
                        G = null;
                        break;
                      }
                      if (d !== null) {
                        ((d.return = p), (G = d));
                        break;
                      }
                      G = p;
                    }
                }
              }
              var m = a.alternate;
              if (m !== null) {
                var y = m.child;
                if (y !== null) {
                  m.child = null;
                  do {
                    var x = y.sibling;
                    ((y.sibling = null), (y = x));
                  } while (y !== null);
                }
              }
              G = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) ((o.return = a), (G = o));
          else
            e: for (; G !== null; ) {
              if (((a = G), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ao(9, a, a.return);
                }
              var v = a.sibling;
              if (v !== null) {
                ((v.return = a.return), (G = v));
                break e;
              }
              G = a.return;
            }
        }
        var h = e.current;
        for (G = h; G !== null; ) {
          o = G;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) ((g.return = o), (G = g));
          else
            e: for (o = h; G !== null; ) {
              if (((l = G), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ac(9, l);
                  }
                } catch (b) {
                  Ee(l, l.return, b);
                }
              if (l === o) {
                G = null;
                break e;
              }
              var S = l.sibling;
              if (S !== null) {
                ((S.return = l.return), (G = S));
                break e;
              }
              G = l.return;
            }
        }
        if (
          ((ae = i), mn(), dr && typeof dr.onPostCommitFiberRoot == "function")
        )
          try {
            dr.onPostCommitFiberRoot(Qs, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      ((se = r), (Ft.transition = t));
    }
  }
  return !1;
}
function Ny(e, t, r) {
  ((t = Bi(r, t)),
    (t = Sw(e, t, 1)),
    (e = an(e, t, 1)),
    (t = ut()),
    e !== null && (vl(e, 1, t), gt(e, t)));
}
function Ee(e, t, r) {
  if (e.tag === 3) Ny(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ny(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (on === null || !on.has(n)))
        ) {
          ((e = Bi(r, e)),
            (e = Ow(t, e, 1)),
            (t = an(t, e, 1)),
            (e = ut()),
            t !== null && (vl(t, 1, e), gt(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function qE(e, t, r) {
  var n = e.pingCache;
  (n !== null && n.delete(t),
    (t = ut()),
    (e.pingedLanes |= e.suspendedLanes & r),
    Ke === e &&
      (Qe & r) === r &&
      (ze === 4 || (ze === 3 && (Qe & 130023424) === Qe && 500 > Ce() - cv)
        ? Ln(e, 0)
        : (sv |= r)),
    gt(e, t));
}
function Ww(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Fl), (Fl <<= 1), !(Fl & 130023424) && (Fl = 4194304))
      : (t = 1));
  var r = ut();
  ((e = kr(e, t)), e !== null && (vl(e, t, r), gt(e, r)));
}
function XE(e) {
  var t = e.memoizedState,
    r = 0;
  (t !== null && (r = t.retryLane), Ww(e, r));
}
function YE(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        i = e.memoizedState;
      i !== null && (r = i.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(U(314));
  }
  (n !== null && n.delete(t), Ww(e, r));
}
var Hw;
Hw = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || mt.current) ht = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return ((ht = !1), LE(e, t, r));
      ht = !!(e.flags & 131072);
    }
  else ((ht = !1), we && t.flags & 1048576 && q1(t, Iu, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      (gu(e, t), (e = t.pendingProps));
      var i = Di(t, at.current);
      ($i(t, r), (i = nv(null, t, n, e, i, r)));
      var a = iv();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            yt(n) ? ((a = !0), Mu(t)) : (a = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Zh(t),
            (i.updater = ic),
            (t.stateNode = i),
            (i._reactInternals = t),
            Ld(t, n, e, r),
            (t = Bd(null, t, n, !0, a, r)))
          : ((t.tag = 0), we && a && Vh(t), ot(null, t, i, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (gu(e, t),
          (e = t.pendingProps),
          (i = n._init),
          (n = i(n._payload)),
          (t.type = n),
          (i = t.tag = ZE(n)),
          (e = Xt(n, e)),
          i)
        ) {
          case 0:
            t = Fd(null, t, n, e, r);
            break e;
          case 1:
            t = Py(null, t, n, e, r);
            break e;
          case 11:
            t = Sy(null, t, n, e, r);
            break e;
          case 14:
            t = Oy(null, t, n, Xt(n.type, e), r);
            break e;
        }
        throw Error(U(306, n, ""));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : Xt(n, i)),
        Fd(e, t, n, i, r)
      );
    case 1:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : Xt(n, i)),
        Py(e, t, n, i, r)
      );
    case 3:
      e: {
        if ((Ew(t), e === null)) throw Error(U(387));
        ((n = t.pendingProps),
          (a = t.memoizedState),
          (i = a.element),
          ew(e, t),
          Ru(t, n, null, r));
        var o = t.memoizedState;
        if (((n = o.element), a.isDehydrated))
          if (
            ((a = {
              element: n,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            ((i = Bi(Error(U(423)), t)), (t = _y(e, t, n, r, i)));
            break e;
          } else if (n !== i) {
            ((i = Bi(Error(U(424)), t)), (t = _y(e, t, n, r, i)));
            break e;
          } else
            for (
              _t = nn(t.stateNode.containerInfo.firstChild),
                At = t,
                we = !0,
                er = null,
                r = Z1(t, null, n, r),
                t.child = r;
              r;

            )
              ((r.flags = (r.flags & -3) | 4096), (r = r.sibling));
        else {
          if ((Li(), n === i)) {
            t = Mr(e, t, r);
            break e;
          }
          ot(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        tw(t),
        e === null && Nd(t),
        (n = t.type),
        (i = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (o = i.children),
        $d(n, i) ? (o = null) : a !== null && $d(n, a) && (t.flags |= 32),
        Aw(e, t),
        ot(e, t, o, r),
        t.child
      );
    case 6:
      return (e === null && Nd(t), null);
    case 13:
      return jw(e, t, r);
    case 4:
      return (
        Jh(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = Ri(t, null, n, r)) : ot(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : Xt(n, i)),
        Sy(e, t, n, i, r)
      );
    case 7:
      return (ot(e, t, t.pendingProps, r), t.child);
    case 8:
      return (ot(e, t, t.pendingProps.children, r), t.child);
    case 12:
      return (ot(e, t, t.pendingProps.children, r), t.child);
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (i = t.pendingProps),
          (a = t.memoizedProps),
          (o = i.value),
          ve(Du, n._currentValue),
          (n._currentValue = o),
          a !== null)
        )
          if (or(a.value, o)) {
            if (a.children === i.children && !mt.current) {
              t = Mr(e, t, r);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var l = a.dependencies;
              if (l !== null) {
                o = a.child;
                for (var u = l.firstContext; u !== null; ) {
                  if (u.context === n) {
                    if (a.tag === 1) {
                      ((u = Ar(-1, r & -r)), (u.tag = 2));
                      var s = a.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var f = s.pending;
                        (f === null
                          ? (u.next = u)
                          : ((u.next = f.next), (f.next = u)),
                          (s.pending = u));
                      }
                    }
                    ((a.lanes |= r),
                      (u = a.alternate),
                      u !== null && (u.lanes |= r),
                      Id(a.return, r, t),
                      (l.lanes |= r));
                    break;
                  }
                  u = u.next;
                }
              } else if (a.tag === 10) o = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((o = a.return), o === null)) throw Error(U(341));
                ((o.lanes |= r),
                  (l = o.alternate),
                  l !== null && (l.lanes |= r),
                  Id(o, r, t),
                  (o = a.sibling));
              } else o = a.child;
              if (o !== null) o.return = a;
              else
                for (o = a; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((a = o.sibling), a !== null)) {
                    ((a.return = o.return), (o = a));
                    break;
                  }
                  o = o.return;
                }
              a = o;
            }
        (ot(e, t, i.children, r), (t = t.child));
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (n = t.pendingProps.children),
        $i(t, r),
        (i = Ut(i)),
        (n = n(i)),
        (t.flags |= 1),
        ot(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (i = Xt(n, t.pendingProps)),
        (i = Xt(n.type, i)),
        Oy(e, t, n, i, r)
      );
    case 15:
      return Pw(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (i = t.pendingProps),
        (i = t.elementType === n ? i : Xt(n, i)),
        gu(e, t),
        (t.tag = 1),
        yt(n) ? ((e = !0), Mu(t)) : (e = !1),
        $i(t, r),
        ww(t, n, i),
        Ld(t, n, i, r),
        Bd(null, t, n, !0, e, r)
      );
    case 19:
      return $w(e, t, r);
    case 22:
      return _w(e, t, r);
  }
  throw Error(U(156, t.tag));
};
function Vw(e, t) {
  return g1(e, t);
}
function QE(e, t, r, n) {
  ((this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Lt(e, t, r, n) {
  return new QE(e, t, r, n);
}
function hv(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function ZE(e) {
  if (typeof e == "function") return hv(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Mh)) return 11;
    if (e === Nh) return 14;
  }
  return 2;
}
function un(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = Lt(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function wu(e, t, r, n, i, a) {
  var o = 2;
  if (((n = e), typeof e == "function")) hv(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case fi:
        return Rn(r.children, i, a, t);
      case kh:
        ((o = 8), (i |= 8));
        break;
      case ld:
        return (
          (e = Lt(12, r, t, i | 2)),
          (e.elementType = ld),
          (e.lanes = a),
          e
        );
      case ud:
        return ((e = Lt(13, r, t, i)), (e.elementType = ud), (e.lanes = a), e);
      case sd:
        return ((e = Lt(19, r, t, i)), (e.elementType = sd), (e.lanes = a), e);
      case t1:
        return lc(r, i, a, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Jx:
              o = 10;
              break e;
            case e1:
              o = 9;
              break e;
            case Mh:
              o = 11;
              break e;
            case Nh:
              o = 14;
              break e;
            case Vr:
              ((o = 16), (n = null));
              break e;
          }
        throw Error(U(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Lt(o, r, t, i)),
    (t.elementType = e),
    (t.type = n),
    (t.lanes = a),
    t
  );
}
function Rn(e, t, r, n) {
  return ((e = Lt(7, e, n, t)), (e.lanes = r), e);
}
function lc(e, t, r, n) {
  return (
    (e = Lt(22, e, n, t)),
    (e.elementType = t1),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Pf(e, t, r) {
  return ((e = Lt(6, e, null, t)), (e.lanes = r), e);
}
function _f(e, t, r) {
  return (
    (t = Lt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function JE(e, t, r, n, i) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = af(0)),
    (this.expirationTimes = af(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = af(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null));
}
function vv(e, t, r, n, i, a, o, l, u) {
  return (
    (e = new JE(e, t, r, l, u)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = Lt(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Zh(a),
    e
  );
}
function ej(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ci,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function Kw(e) {
  if (!e) return dn;
  e = e._reactInternals;
  e: {
    if (Zn(e) !== e || e.tag !== 1) throw Error(U(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (yt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(U(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (yt(r)) return K1(e, r, t);
  }
  return t;
}
function Gw(e, t, r, n, i, a, o, l, u) {
  return (
    (e = vv(r, n, !0, e, i, a, o, l, u)),
    (e.context = Kw(null)),
    (r = e.current),
    (n = ut()),
    (i = ln(r)),
    (a = Ar(n, i)),
    (a.callback = t ?? null),
    an(r, a, i),
    (e.current.lanes = i),
    vl(e, i, n),
    gt(e, n),
    e
  );
}
function uc(e, t, r, n) {
  var i = t.current,
    a = ut(),
    o = ln(i);
  return (
    (r = Kw(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = Ar(a, o)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = an(i, t, o)),
    e !== null && (ar(e, i, o, a), vu(e, i, o)),
    o
  );
}
function Ku(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Iy(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function mv(e, t) {
  (Iy(e, t), (e = e.alternate) && Iy(e, t));
}
function tj() {
  return null;
}
var qw =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function yv(e) {
  this._internalRoot = e;
}
sc.prototype.render = yv.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(U(409));
  uc(e, t, null, null);
};
sc.prototype.unmount = yv.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Vn(function () {
      uc(null, e, null, null);
    }),
      (t[Cr] = null));
  }
};
function sc(e) {
  this._internalRoot = e;
}
sc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = _1();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < qr.length && t !== 0 && t < qr[r].priority; r++);
    (qr.splice(r, 0, e), r === 0 && E1(e));
  }
};
function gv(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function cc(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Dy() {}
function rj(e, t, r, n, i) {
  if (i) {
    if (typeof n == "function") {
      var a = n;
      n = function () {
        var s = Ku(o);
        a.call(s);
      };
    }
    var o = Gw(t, n, e, 0, null, !1, !1, "", Dy);
    return (
      (e._reactRootContainer = o),
      (e[Cr] = o.current),
      So(e.nodeType === 8 ? e.parentNode : e),
      Vn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof n == "function") {
    var l = n;
    n = function () {
      var s = Ku(u);
      l.call(s);
    };
  }
  var u = vv(e, 0, !1, null, null, !1, !1, "", Dy);
  return (
    (e._reactRootContainer = u),
    (e[Cr] = u.current),
    So(e.nodeType === 8 ? e.parentNode : e),
    Vn(function () {
      uc(t, u, r, n);
    }),
    u
  );
}
function fc(e, t, r, n, i) {
  var a = r._reactRootContainer;
  if (a) {
    var o = a;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var u = Ku(o);
        l.call(u);
      };
    }
    uc(t, o, e, i);
  } else o = rj(r, t, e, i, n);
  return Ku(o);
}
O1 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = Ya(t.pendingLanes);
        r !== 0 &&
          (Lh(t, r | 1), gt(t, Ce()), !(ae & 6) && ((zi = Ce() + 500), mn()));
      }
      break;
    case 13:
      (Vn(function () {
        var n = kr(e, 1);
        if (n !== null) {
          var i = ut();
          ar(n, e, 1, i);
        }
      }),
        mv(e, 1));
  }
};
Rh = function (e) {
  if (e.tag === 13) {
    var t = kr(e, 134217728);
    if (t !== null) {
      var r = ut();
      ar(t, e, 134217728, r);
    }
    mv(e, 134217728);
  }
};
P1 = function (e) {
  if (e.tag === 13) {
    var t = ln(e),
      r = kr(e, t);
    if (r !== null) {
      var n = ut();
      ar(r, e, t, n);
    }
    mv(e, t);
  }
};
_1 = function () {
  return se;
};
A1 = function (e, t) {
  var r = se;
  try {
    return ((se = e), t());
  } finally {
    se = r;
  }
};
bd = function (e, t, r) {
  switch (t) {
    case "input":
      if ((dd(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var i = tc(n);
            if (!i) throw Error(U(90));
            (n1(n), dd(n, i));
          }
        }
      }
      break;
    case "textarea":
      a1(e, r);
      break;
    case "select":
      ((t = r.value), t != null && _i(e, !!r.multiple, t, !1));
  }
};
d1 = fv;
p1 = Vn;
var nj = { usingClientEntryPoint: !1, Events: [yl, vi, tc, c1, f1, fv] },
  Ia = {
    findFiberByHostInstance: Tn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  ij = {
    bundleType: Ia.bundleType,
    version: Ia.version,
    rendererPackageName: Ia.rendererPackageName,
    rendererConfig: Ia.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Rr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = m1(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Ia.findFiberByHostInstance || tj,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Yl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Yl.isDisabled && Yl.supportsFiber)
    try {
      ((Qs = Yl.inject(ij)), (dr = Yl));
    } catch {}
}
$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nj;
$t.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!gv(t)) throw Error(U(200));
  return ej(e, t, null, r);
};
$t.createRoot = function (e, t) {
  if (!gv(e)) throw Error(U(299));
  var r = !1,
    n = "",
    i = qw;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = vv(e, 1, !1, null, null, r, !1, n, i)),
    (e[Cr] = t.current),
    So(e.nodeType === 8 ? e.parentNode : e),
    new yv(t)
  );
};
$t.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(U(188))
      : ((e = Object.keys(e).join(",")), Error(U(268, e)));
  return ((e = m1(t)), (e = e === null ? null : e.stateNode), e);
};
$t.flushSync = function (e) {
  return Vn(e);
};
$t.hydrate = function (e, t, r) {
  if (!cc(t)) throw Error(U(200));
  return fc(null, e, t, !0, r);
};
$t.hydrateRoot = function (e, t, r) {
  if (!gv(e)) throw Error(U(405));
  var n = (r != null && r.hydratedSources) || null,
    i = !1,
    a = "",
    o = qw;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (i = !0),
      r.identifierPrefix !== void 0 && (a = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (o = r.onRecoverableError)),
    (t = Gw(t, null, e, 1, r ?? null, i, !1, a, o)),
    (e[Cr] = t.current),
    So(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      ((r = n[e]),
        (i = r._getVersion),
        (i = i(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, i])
          : t.mutableSourceEagerHydrationData.push(r, i));
  return new sc(t);
};
$t.render = function (e, t, r) {
  if (!cc(t)) throw Error(U(200));
  return fc(null, e, t, !1, r);
};
$t.unmountComponentAtNode = function (e) {
  if (!cc(e)) throw Error(U(40));
  return e._reactRootContainer
    ? (Vn(function () {
        fc(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Cr] = null));
        });
      }),
      !0)
    : !1;
};
$t.unstable_batchedUpdates = fv;
$t.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!cc(r)) throw Error(U(200));
  if (e == null || e._reactInternals === void 0) throw Error(U(38));
  return fc(e, t, r, !1, n);
};
$t.version = "18.3.1-next-f1338f8080-20240426";
function Xw() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xw);
    } catch (e) {
      console.error(e);
    }
}
(Xw(), (Xx.exports = $t));
var aj = Xx.exports,
  Ly = aj;
((ad.createRoot = Ly.createRoot), (ad.hydrateRoot = Ly.hydrateRoot));
const Ry = [
    {
      id: "na_original",
      label: "Motor original aspirado",
      range: [80, 90],
      suggested: 85,
    },
    {
      id: "na_preparado",
      label: "Aspirado preparado",
      range: [90, 105],
      suggested: 95,
    },
    {
      id: "turbo_original",
      label: "Turbo original",
      range: [85, 95],
      suggested: 90,
    },
    {
      id: "turbo_preparado",
      label: "Turbo preparado",
      range: [95, 110],
      suggested: 100,
    },
  ],
  Fy = [
    {
      id: "baixa_carga",
      label: "Baixa carga",
      range: [400, 500],
      suggested: 450,
    },
    {
      id: "uso_normal",
      label: "Uso normal",
      range: [500, 650],
      suggested: 600,
    },
    {
      id: "alta_carga",
      label: "Alta carga",
      range: [650, 800],
      suggested: 700,
    },
    {
      id: "performance",
      label: "Performance",
      range: [750, 900],
      suggested: 800,
    },
  ],
  By = [
    {
      id: "torque",
      label: "Baixa rotação / torque",
      minFtMin: 9e3,
      maxFtMin: 12e3,
      description:
        "Prioriza velocidade dos gases e resposta em baixa rotação, aceitando menor capacidade de fluxo de pico.",
    },
    {
      id: "rua",
      label: "Uso de rua / equilíbrio",
      minFtMin: 8e3,
      maxFtMin: 11e3,
      description:
        "Equilíbrio entre resposta em baixa, ruído e capacidade de fluxo em rotações mais altas.",
    },
    {
      id: "performance",
      label: "Alta rotação / performance",
      minFtMin: 7e3,
      maxFtMin: 10e3,
      description:
        "Permite maior diâmetro e menor velocidade dos gases para favorecer fluxo em alta rotação.",
    },
    {
      id: "limite",
      label: "Alta potência / baixa restrição",
      minFtMin: 5.5e3,
      maxFtMin: 8.5e3,
      description:
        "Prioriza capacidade de fluxo e baixa restrição; diâmetros maiores podem reduzir velocidade e resposta em baixa.",
    },
  ],
  Zd = [
    {
      id: "original",
      label: "Original / conforto",
      description: "Comportamento civilizado e ruído moderado.",
      targetRangeId: "torque",
    },
    {
      id: "rua",
      label: "Rua / equilíbrio",
      description:
        "Equilíbrio entre velocidade dos gases e capacidade de fluxo.",
      targetRangeId: "rua",
    },
    {
      id: "performance",
      label: "Performance",
      description: "Prioriza fluxo em alta rotação.",
      targetRangeId: "performance",
    },
    {
      id: "alta_potencia",
      label: "Alta potência",
      description:
        "Baixa restrição — o diâmetro cresce, e as consequências (perda de velocidade/resposta) ficam evidentes nos resultados.",
      targetRangeId: "limite",
    },
    {
      id: "customizado",
      label: "Customizado",
      description: "Você define a velocidade-alvo manualmente.",
      targetRangeId: "rua",
    },
  ],
  Hr = {
    name: "Infiniti G37 2012",
    displacementL: 3.7,
    cylinders: 6,
    aspiration: "aspirado",
    rpmMax: 7500,
    power: 330,
    powerUnit: "cv",
    vePreset: "na_original",
    ve: 0.85,
    fuel: "gasolina",
    pipeCount: 2,
    currentDiameterIn: "2.5",
    egtC: 650,
  },
  pa = [1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.5, 4],
  oj = {
    muito_pequeno: "Muito pequeno",
    pequeno: "Pequeno",
    ideal: "Ideal",
    grande: "Grande",
    muito_grande: "Muito grande",
  },
  Yw = 61.0237;
function lj(e) {
  return e * Yw;
}
function uj(e) {
  return e / Yw;
}
function Gu(e) {
  return e + 273.15;
}
function sj(e) {
  return ((e - 32) * 5) / 9;
}
function cj(e) {
  return (e * 9) / 5 + 32;
}
function Qw(e) {
  return e * 1e3;
}
function fj(e) {
  return e * 101.325;
}
function dj(e) {
  return e * 6.894757;
}
function pj(e) {
  return e * 100;
}
const Zw = 0.0004719474432;
function hj(e) {
  return e * Zw;
}
function vj(e) {
  return e / Zw;
}
function mj(e) {
  return e * 1e3;
}
function yj(e) {
  return e / 0.0254;
}
function gj(e) {
  return e / 12;
}
const bj = 196.8503937;
function xj(e) {
  return e / bj;
}
function je({ children: e, className: t = "" }) {
  return O.jsx("div", { className: `card ${t}`, children: e });
}
function pn({ eyebrow: e, title: t, children: r }) {
  return O.jsxs("div", {
    className: "section-heading",
    children: [
      e && O.jsx("div", { className: "section-eyebrow", children: e }),
      O.jsx("h2", { children: t }),
      r && O.jsx("p", { className: "section-sub", children: r }),
    ],
  });
}
const wj = {
  muito_pequeno: "tone-danger",
  pequeno: "tone-warn",
  ideal: "tone-good",
  grande: "tone-warn",
  muito_grande: "tone-danger",
};
function Jw({ status: e }) {
  return O.jsx("span", { className: `status-pill ${wj[e]}`, children: oj[e] });
}
function zy({ show: e, label: t }) {
  return e
    ? O.jsx("span", {
        className: "assumed-flag",
        title: t ?? "Valor assumido — não informado explicitamente",
        children: "⚠️",
      })
    : null;
}
function Af({ label: e, value: t, unit: r, sub: n }) {
  return O.jsxs("div", {
    className: "stat-block",
    children: [
      O.jsx("div", { className: "stat-label", children: e }),
      O.jsxs("div", {
        className: "stat-value",
        children: [
          t,
          r && O.jsx("span", { className: "stat-unit", children: r }),
        ],
      }),
      n && O.jsx("div", { className: "stat-sub", children: n }),
    ],
  });
}
function Ef(e, t) {
  switch (t) {
    case "kPa":
      return e;
    case "atm":
      return e / 101.325;
    case "psi":
      return e / 6.894757;
    case "bar":
      return e / 100;
  }
}
function jf(e, t) {
  switch (t) {
    case "kPa":
      return e;
    case "atm":
      return fj(e);
    case "psi":
      return dj(e);
    case "bar":
      return pj(e);
  }
}
function Sj({ value: e, onChange: t, onLoadExample: r }) {
  const [n, i] = B.useState(""),
    [d, h] = B.useState(String(e.displacement).replace(".", ",")),
    a = e.egtUnit === "C" ? e.egt : cj(e.egt),
    o = Ef(e.atmPressure, e.pressureUnit),
    l = Ef(e.backpressure, e.pressureUnit);
  B.useEffect(() => {
    const parsed = parseFloat(d.replace(",", "."));
    if ((d === "" && e.displacement === 0) || parsed === e.displacement) return;
    h(String(e.displacement).replace(".", ","));
  }, [e.displacement]);
  return O.jsxs("div", {
    className: "input-form",
    children: [
      O.jsx("div", {
        className: "form-top-actions",
        children: O.jsxs("button", {
          type: "button",
          className: "btn btn-ghost",
          onClick: r,
          children: [
            "Carregar exemplo: Infiniti G37 2012 "
          ],
        }),
      }),
      O.jsxs(je, {
        children: [
          O.jsx("h3", { className: "form-section-title", children: "Motor" }),
          O.jsxs("div", {
            className: "form-grid",
            children: [
              O.jsxs("label", {
                className: "field",
                children: [
                  O.jsx("span", { children: "Cilindrada" }),
                  O.jsxs("div", {
                    className: "field-inline",
                    children: [
                      O.jsx("input", {
                        type: "text",
                        inputMode: "decimal",
                        value: d,
                        onChange: (u) => {
                          const raw = u.target.value.replace(",", ".");
                          h(u.target.value);
                          t({ displacement: raw === "" ? 0 : parseFloat(raw) || 0 });
                        },
                      }),
                      O.jsxs("select", {
                        value: e.displacementUnit,
                        onChange: (u) =>
                          t({ displacementUnit: u.target.value }),
                        children: [
                          O.jsx("option", { value: "L", children: "L" }),
                          O.jsx("option", { value: "in3", children: "in³" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              O.jsxs("label", {
                className: "field",
                children: [
                  O.jsx("span", { children: "Número de cilindros" }),
                  O.jsx("input", {
                    type: "number",
                    min: 1,
                    step: 1,
                    value: e.cylinders,
                    onChange: (u) =>
                      t({
                        cylinders: u.target.value === "" ? "" : parseInt(u.target.value) || 1,
                      }),
                  }),
                ],
              }),
              O.jsxs("label", {
                className: "field",
                children: [
                  O.jsx("span", { children: "Tipo de motor" }),
                  O.jsxs("select", {
                    value: e.aspiration,
                    onChange: (u) => t({ aspiration: u.target.value }),
                    children: [
                      O.jsx("option", {
                        value: "aspirado",
                        children: "Aspirado",
                      }),
                      O.jsx("option", { value: "turbo", children: "Turbo" }),
                      O.jsx("option", {
                        value: "supercharger",
                        children: "Supercharger",
                      }),
                    ],
                  }),
                ],
              }),
              O.jsxs("label", {
                className: "field",
                children: [
                  O.jsx("span", { children: "RPM máxima" }),
                  O.jsx("input", {
                    type: "number",
                    min: 500,
                    step: 100,
                    value: e.rpmMax,
                    onChange: (u) =>
                      t({
                        rpmMax: u.target.value === "" ? "" : parseInt(u.target.value) || 0,
                      }),
                  }),
                ],
              }),
              O.jsxs("label", {
                className: "field",
                children: [
                  O.jsxs("span", {
                    children: [
                      "RPM de torque máximo ",
                      O.jsx("em", { children: "(opcional)" }),
                    ],
                  }),
                  O.jsx("input", {
                    type: "number",
                    value: e.rpmTorquePeak,
                    onChange: (u) => t({ rpmTorquePeak: u.target.value }),
                  }),
                ],
              }),
              O.jsxs("label", {
                className: "field",
                children: [
                  O.jsxs("span", {
                    children: [
                      "RPM de potência máxima ",
                      O.jsx("em", { children: "(opcional)" }),
                    ],
                  }),
                  O.jsx("input", {
                    type: "number",
                    value: e.rpmPowerPeak,
                    onChange: (u) => t({ rpmPowerPeak: u.target.value }),
                  }),
                ],
              }),
              O.jsxs("label", {
                className: "field",
                children: [
                  O.jsxs("span", {
                    children: [
                      "Potência ",
                      O.jsx("em", { children: "(opcional, referência)" }),
                    ],
                  }),
                  O.jsxs("div", {
                    className: "field-inline",
                    children: [
                      O.jsx("input", {
                        type: "number",
                        value: e.power,
                        onChange: (u) => t({ power: u.target.value }),
                      }),
                      O.jsxs("select", {
                        value: e.powerUnit,
                        onChange: (u) => t({ powerUnit: u.target.value }),
                        children: [
                          O.jsx("option", { value: "cv", children: "cv" }),
                          O.jsx("option", { value: "hp", children: "hp" }),
                          O.jsx("option", { value: "kW", children: "kW" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      O.jsxs(je, {
        children: [
          O.jsx("h3", {
            className: "form-section-title",
            children: "Eficiência volumétrica (VE)",
          }),
          O.jsxs("div", {
            className: "form-grid",
            children: [
              O.jsxs("label", {
                className: "field",
                children: [
                  O.jsx("span", { children: "Preset" }),
                  O.jsxs("select", {
                    value: e.vePreset,
                    onChange: (u) => {
                      const s = Ry.find((f) => f.id === u.target.value);
                      t({
                        vePreset: u.target.value,
                        ve: s ? s.suggested / 100 : e.ve,
                      });
                    },
                    children: [
                      Ry.map((u) =>
                        O.jsxs(
                          "option",
                          {
                            value: u.id,
                            children: [
                              u.label,
                              " (",
                              u.range[0],
                              "–",
                              u.range[1],
                              "%)",
                            ],
                          },
                          u.id,
                        ),
                      ),
                      O.jsx("option", {
                        value: "custom",
                        children: "Personalizado",
                      }),
                    ],
                  }),
                ],
              }),
              O.jsxs("label", {
                className: "field",
                children: [
                  O.jsx("span", { children: "VE utilizada (%)" }),
                  O.jsx("input", {
                    type: "number",
                    min: 40,
                    max: 140,
                    value: Math.round(e.ve * 100),
                    onChange: (u) =>
                      t({
                        ve: (parseFloat(u.target.value) || 0) / 100,
                        vePreset: "custom",
                      }),
                  }),
                ],
              }),
            ],
          }),
          O.jsx("p", {
            className: "field-note",
            children:
              "Presets são estimativas de referência, não valores universais — ajuste conforme o motor real.",
          }),
        ],
      }),
      O.jsxs(je, {
        children: [
          O.jsx("h3", {
            className: "form-section-title",
            children: "Combustível / combustão",
          }),
          O.jsxs("div", {
            className: "form-grid",
            children: [
              O.jsxs("label", {
                className: "field",
                children: [
                  O.jsx("span", { children: "Combustível" }),
                  O.jsxs("select", {
                    value: e.fuel,
                    onChange: (u) => t({ fuel: u.target.value }),
                    children: [
                      O.jsx("option", {
                        value: "gasolina",
                        children: "Gasolina",
                      }),
                      O.jsx("option", { value: "etanol", children: "Etanol" }),
                      O.jsx("option", { value: "flex", children: "Flex" }),
                      O.jsx("option", { value: "diesel", children: "Diesel" }),
                      O.jsx("option", { value: "outro", children: "Outro" }),
                    ],
                  }),
                ],
              }),
              O.jsxs("label", {
                className: "field",
                children: [
                  O.jsxs("span", {
                    children: [
                      "AFR / Lambda ",
                      O.jsx("em", { children: "(opcional)" }),
                      " ",
                      O.jsx(zy, {
                        show: e.afr === "",
                        label:
                          "Será usado um AFR padrão para o combustível selecionado",
                      }),
                    ],
                  }),
                  O.jsx("input", {
                    type: "number",
                    step: 0.1,
                    placeholder: "Padrão do combustível",
                    value: e.afr,
                    onChange: (u) => t({ afr: u.target.value }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      O.jsxs(je, {
        children: [
          O.jsx("h3", { className: "form-section-title", children: "Escape" }),
          O.jsxs("div", {
            className: "form-grid",
            children: [
              O.jsxs("label", {
                className: "field",
                children: [
                  O.jsx("span", { children: "Configuração" }),
                  O.jsxs("select", {
                    value: e.layout,
                    onChange: (u) => {
                      const s = u.target.value;
                      t({
                        layout: s,
                        pipeCount:
                          s === "simples" ? 1 : Math.max(2, e.pipeCount),
                      });
                    },
                    children: [
                      O.jsx("option", {
                        value: "simples",
                        children: "Escape simples",
                      }),
                      O.jsx("option", {
                        value: "duplo",
                        children: "Escape duplo",
                      }),
                    ],
                  }),
                ],
              }),
              O.jsxs("label", {
                className: "field",
                children: [
                  O.jsx("span", { children: "Número de tubos após coletor" }),
                  O.jsx("input", {
                    type: "number",
                    min: 1,
                    step: 1,
                    value: e.pipeCount,
                    onChange: (u) =>
                      t({
                        pipeCount: u.target.value === "" ? "" : parseInt(u.target.value) || 1,
                      }),
                  }),
                ],
              }),
              O.jsxs("label", {
                className: "field",
                children: [
                  O.jsxs("span", {
                    children: [
                      "Diâmetro atual ",
                      O.jsx("em", { children: "(opcional)" }),
                    ],
                  }),
                  O.jsx("input", {
                    type: "number",
                    step: 0.05,
                    placeholder: "polegadas",
                    value: e.currentDiameterIn,
                    onChange: (u) => t({ currentDiameterIn: u.target.value }),
                  }),
                ],
              }),
            ],
          }),
          O.jsxs("div", {
            className: "field",
            style: { marginTop: 12 },
            children: [
              O.jsx("span", { children: "Diâmetro personalizado adicional" }),
              O.jsxs("div", {
                className: "field-inline",
                children: [
                  O.jsx("input", {
                    type: "number",
                    step: 0.05,
                    placeholder: "ex.: 2.375",
                    value: n,
                    onChange: (u) => i(u.target.value),
                  }),
                  O.jsx("button", {
                    type: "button",
                    className: "btn btn-ghost",
                    onClick: () => {
                      const u = parseFloat(n);
                      u > 0 &&
                        !e.customDiameters.includes(u) &&
                        (t({ customDiameters: [...e.customDiameters, u] }),
                        i(""));
                    },
                    children: "Adicionar",
                  }),
                ],
              }),
              e.customDiameters.length > 0 &&
                O.jsx("div", {
                  className: "chip-row",
                  children: e.customDiameters.map((u) =>
                    O.jsxs(
                      "span",
                      {
                        className: "chip",
                        children: [
                          u,
                          '"',
                          O.jsx("button", {
                            type: "button",
                            onClick: () =>
                              t({
                                customDiameters: e.customDiameters.filter(
                                  (s) => s !== u,
                                ),
                              }),
                            children: "×",
                          }),
                        ],
                      },
                      u,
                    ),
                  ),
                }),
              O.jsxs("p", {
                className: "field-note",
                children: [
                  "Diâmetros padrão sempre incluídos: ",
                  pa.map((u) => `${u}"`).join(", "),
                ],
              }),
            ],
          }),
        ],
      }),
      O.jsxs(je, {
        children: [
          O.jsx("h3", {
            className: "form-section-title",
            children: "Objetivo do projeto",
          }),
          O.jsx("div", {
            className: "goal-grid",
            children: Zd.map((u) =>
              O.jsxs(
                "button",
                {
                  type: "button",
                  className: `goal-card ${e.goal === u.id ? "goal-card-active" : ""}`,
                  onClick: () => t({ goal: u.id }),
                  children: [
                    O.jsx("div", {
                      className: "goal-card-title",
                      children: u.label,
                    }),
                    O.jsx("div", {
                      className: "goal-card-desc",
                      children: u.description,
                    }),
                  ],
                },
                u.id,
              ),
            ),
          }),
          e.goal === "customizado" &&
            O.jsxs("div", {
              className: "form-grid",
              style: { marginTop: 12 },
              children: [
                O.jsxs("label", {
                  className: "field",
                  children: [
                    O.jsx("span", {
                      children: "Velocidade-alvo mínima (ft/min)",
                    }),
                    O.jsx("input", {
                      type: "number",
                      value: e.customTargetMin,
                      onChange: (u) =>
                        t({ customTargetMin: parseInt(u.target.value) || 0 }),
                    }),
                  ],
                }),
                O.jsxs("label", {
                  className: "field",
                  children: [
                    O.jsx("span", {
                      children: "Velocidade-alvo máxima (ft/min)",
                    }),
                    O.jsx("input", {
                      type: "number",
                      value: e.customTargetMax,
                      onChange: (u) =>
                        t({ customTargetMax: parseInt(u.target.value) || 0 }),
                    }),
                  ],
                }),
              ],
            }),
        ],
      }),
      O.jsxs(je, {
        children: [
          O.jsx("h3", {
            className: "form-section-title",
            children: "Temperatura dos gases de escape (EGT)",
          }),
          O.jsxs("div", {
            className: "form-grid",
            children: [
              O.jsxs("label", {
                className: "field",
                children: [
                  O.jsx("span", { children: "Preset" }),
                  O.jsxs("select", {
                    value: e.egtPreset,
                    onChange: (u) => {
                      const s = Fy.find((f) => f.id === u.target.value);
                      t({
                        egtPreset: u.target.value,
                        egt: s ? s.suggested : e.egt,
                      });
                    },
                    children: [
                      Fy.map((u) =>
                        O.jsxs(
                          "option",
                          {
                            value: u.id,
                            children: [
                              u.label,
                              " (",
                              u.range[0],
                              "–",
                              u.range[1],
                              " °C)",
                            ],
                          },
                          u.id,
                        ),
                      ),
                      O.jsx("option", {
                        value: "custom",
                        children: "Personalizado",
                      }),
                    ],
                  }),
                ],
              }),
              O.jsxs("label", {
                className: "field",
                children: [
                  O.jsxs("span", {
                    children: [
                      "EGT utilizada ",
                      O.jsx(zy, {
                        show: !0,
                        label:
                          "Valor assumido — EGT real varia conforme carga, AFR, ignição e posição do sensor",
                      }),
                    ],
                  }),
                  O.jsxs("div", {
                    className: "field-inline",
                    children: [
                      O.jsx("input", {
                        type: "number",
                        value: Math.round(a),
                        onChange: (u) => {
                          const s = parseFloat(u.target.value) || 0,
                            f = e.egtUnit === "C" ? s : sj(s);
                          t({ egt: f, egtPreset: "custom" });
                        },
                      }),
                      O.jsxs("select", {
                        value: e.egtUnit,
                        onChange: (u) => t({ egtUnit: u.target.value }),
                        children: [
                          O.jsx("option", { value: "C", children: "°C" }),
                          O.jsx("option", { value: "F", children: "°F" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          O.jsx("p", {
            className: "field-note",
            children:
              "EGT varia muito conforme motor, carga, AFR, ignição e posição do sensor.",
          }),
        ],
      }),
      O.jsxs(je, {
        children: [
          O.jsx("h3", { className: "form-section-title", children: "Pressão" }),
          O.jsxs("div", {
            className: "form-grid",
            children: [
              O.jsxs("label", {
                className: "field",
                children: [
                  O.jsx("span", { children: "Unidade de pressão" }),
                  O.jsxs("select", {
                    value: e.pressureUnit,
                    onChange: (u) => t({ pressureUnit: u.target.value }),
                    children: [
                      O.jsx("option", { value: "kPa", children: "kPa" }),
                      O.jsx("option", { value: "atm", children: "atm" }),
                      O.jsx("option", { value: "psi", children: "psi" }),
                      O.jsx("option", { value: "bar", children: "bar" }),
                    ],
                  }),
                ],
              }),
              O.jsxs("label", {
                className: "field",
                children: [
                  O.jsx("span", { children: "Pressão atmosférica" }),
                  O.jsx("input", {
                    type: "number",
                    step: 0.01,
                    value: $f(o),
                    onChange: (u) =>
                      t({
                        atmPressure: jf(
                          parseFloat(u.target.value) || 0,
                          e.pressureUnit,
                        ),
                      }),
                  }),
                ],
              }),
              O.jsxs("label", {
                className: "field",
                children: [
                  O.jsx("span", {
                    children: "Backpressure / pressão do sistema estimada",
                  }),
                  O.jsx("input", {
                    type: "number",
                    step: 0.01,
                    value: $f(l),
                    onChange: (u) =>
                      t({
                        backpressure: jf(
                          parseFloat(u.target.value) || 0,
                          e.pressureUnit,
                        ),
                      }),
                  }),
                ],
              }),
            ],
          }),
          e.aspiration !== "aspirado" &&
            O.jsxs("div", {
              className: "form-grid",
              style: { marginTop: 12 },
              children: [
                O.jsxs("label", {
                  className: "field checkbox-field",
                  children: [
                    O.jsx("input", {
                      type: "checkbox",
                      checked: e.useAbsolutePressure,
                      onChange: (u) =>
                        t({ useAbsolutePressure: u.target.checked }),
                    }),
                    O.jsx("span", {
                      children:
                        "Usar pressão absoluta no escape (recomendado para turbo)",
                    }),
                  ],
                }),
                e.useAbsolutePressure &&
                  O.jsxs("label", {
                    className: "field",
                    children: [
                      O.jsxs("span", {
                        children: ["Pressão absoluta (", e.pressureUnit, ")"],
                      }),
                      O.jsx("input", {
                        type: "number",
                        step: 0.01,
                        value: $f(Ef(e.absolutePressure, e.pressureUnit)),
                        onChange: (u) =>
                          t({
                            absolutePressure: jf(
                              parseFloat(u.target.value) || 0,
                              e.pressureUnit,
                            ),
                          }),
                      }),
                    ],
                  }),
              ],
            }),
          O.jsx("p", {
            className: "field-note",
            children:
              "Padrão: 1 atm (101.325 kPa) como primeira aproximação, sem backpressure adicional.",
          }),
        ],
      }),
      O.jsxs(je, {
        children: [
          O.jsxs("div", {
            className: "section-toggle-row",
            children: [
              O.jsx("h3", {
                className: "form-section-title",
                style: { margin: 0 },
                children: "Header / coletor (primários) — opcional",
              }),
              O.jsxs("label", {
                className: "switch",
                children: [
                  O.jsx("input", {
                    type: "checkbox",
                    checked: e.headerEnabled,
                    onChange: (u) => t({ headerEnabled: u.target.checked }),
                  }),
                  O.jsx("span", { className: "switch-track" }),
                ],
              }),
            ],
          }),
          e.headerEnabled &&
            O.jsxs("div", {
              className: "form-grid",
              style: { marginTop: 12 },
              children: [
                O.jsxs("label", {
                  className: "field",
                  children: [
                    O.jsx("span", { children: "RPM alvo de sintonia" }),
                    O.jsx("input", {
                      type: "number",
                      value: e.headerRpmTarget,
                      onChange: (u) =>
                        t({ headerRpmTarget: parseInt(u.target.value) || 0 }),
                    }),
                  ],
                }),
                O.jsxs("label", {
                  className: "field",
                  children: [
                    O.jsx("span", { children: "Número de primários" }),
                    O.jsx("input", {
                      type: "number",
                      min: 1,
                      value: e.headerPrimaryCount,
                      onChange: (u) =>
                        t({
                          headerPrimaryCount: parseInt(u.target.value) || 1,
                        }),
                    }),
                  ],
                }),
                O.jsxs("label", {
                  className: "field",
                  children: [
                    O.jsxs("span", {
                      children: [
                        "Ordem de ignição ",
                        O.jsx("em", { children: "(referência)" }),
                      ],
                    }),
                    O.jsx("input", {
                      type: "text",
                      value: e.headerIgnitionOrder,
                      onChange: (u) =>
                        t({ headerIgnitionOrder: u.target.value }),
                    }),
                  ],
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
function $f(e) {
  return Math.round(e * 1e3) / 1e3;
}
function Oj({ result: e, targetRange: t, goalLabel: r }) {
  const { intake: n, exhaustFlow: i, recommendation: a } = e;
  return O.jsxs("div", {
    className: "results-grid",
    children: [
      O.jsx(je, {
        className: "stat-card",
        children: O.jsx(Af, {
          label: "Vazão de admissão",
          value: n.cfm.toFixed(1),
          unit: "CFM",
          sub: `≈ ${(n.m3s * 1e3).toFixed(1)} L/s de ar`,
        }),
      }),
      O.jsx(je, {
        className: "stat-card",
        children: O.jsx(Af, {
          label: "Vazão volumétrica do escape",
          value: i.exhaustCfm.toFixed(1),
          unit: "CFM",
          sub: `${i.exhaustLps.toFixed(1)} L/s a ${(i.egtKelvin - 273.15).toFixed(0)} °C`,
        }),
      }),
      O.jsx(je, {
        className: "stat-card",
        children: O.jsx(Af, {
          label: "Vazão mássica do escape",
          value: (i.exhaustMassFlowKgS * 1e3).toFixed(2),
          unit: "g/s",
          sub: "Ar + combustível (conservação de massa)",
        }),
      }),
      O.jsxs(je, {
        className: "stat-card highlight-card",
        children: [
          O.jsx("div", {
            className: "stat-label",
            children: "Diâmetro calculado",
          }),
          O.jsxs("div", {
            className: "stat-value stat-value-lg",
            children: [
              a.calculatedDiameterIn.toFixed(2),
              O.jsx("span", { className: "stat-unit", children: '"' }),
            ],
          }),
          O.jsxs("div", {
            className: "stat-sub",
            children: [
              "Próximo tamanho comercial: ",
              a.nextCommercialDiameterIn.toFixed(2),
              '"',
            ],
          }),
        ],
      }),
      O.jsxs(je, {
        className: "stat-card highlight-card",
        children: [
          O.jsx("div", {
            className: "stat-label",
            children: "Faixa recomendada",
          }),
          O.jsxs("div", {
            className: "stat-value stat-value-lg",
            children: [
              a.recommendedRangeIn[0].toFixed(2),
              '" – ',
              a.recommendedRangeIn[1].toFixed(2),
              '"',
            ],
          }),
          O.jsxs("div", { className: "stat-sub", children: ["Objetivo: ", r] }),
        ],
      }),
      O.jsxs(je, {
        className: "stat-card",
        children: [
          O.jsx("div", {
            className: "stat-label",
            children: "Classificação (diâmetro comercial)",
          }),
          O.jsx("div", {
            style: { marginTop: 8 },
            children: O.jsx(Jw, { status: a.status }),
          }),
          O.jsxs("div", {
            className: "stat-sub",
            style: { marginTop: 8 },
            children: [
              "Faixa-alvo: ",
              t.minFtMin.toLocaleString("pt-BR"),
              "–",
              t.maxFtMin.toLocaleString("pt-BR"),
              " ft/min",
            ],
          }),
        ],
      }),
    ],
  });
}
function Pj({ data: e }) {
  return O.jsxs(je, {
    children: [
      O.jsx(pn, {
        eyebrow: "Comparador",
        title: "Diâmetro × área × velocidade",
        children:
          "Vazão por tubo aplicada a cada diâmetro candidato, na RPM de referência.",
      }),
      O.jsx("div", {
        className: "table-wrap",
        children: O.jsxs("table", {
          className: "data-table",
          children: [
            O.jsx("thead", {
              children: O.jsxs("tr", {
                children: [
                  O.jsx("th", { children: "Diâmetro" }),
                  O.jsx("th", { children: "Área" }),
                  O.jsx("th", { children: "Velocidade" }),
                  O.jsx("th", { children: "Status" }),
                ],
              }),
            }),
            O.jsx("tbody", {
              children: e.map((t) =>
                O.jsxs(
                  "tr",
                  {
                    children: [
                      O.jsxs("td", {
                        className: "mono",
                        children: [t.diameterIn.toFixed(2), '"'],
                      }),
                      O.jsxs("td", {
                        className: "mono",
                        children: [t.areaIn2.toFixed(2), " in²"],
                      }),
                      O.jsxs("td", {
                        className: "mono",
                        children: [
                          t.velocityFtMin.toLocaleString("pt-BR", {
                            maximumFractionDigits: 0,
                          }),
                          " ft/min",
                          O.jsxs("span", {
                            className: "table-sub",
                            children: [" · ", t.velocityMs.toFixed(1), " m/s"],
                          }),
                        ],
                      }),
                      O.jsx("td", {
                        children: O.jsx(Jw, { status: t.status }),
                      }),
                    ],
                  },
                  t.diameterIn,
                ),
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
function eS(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (r = eS(e[t])) && (n && (n += " "), (n += r));
    } else for (r in e) e[r] && (n && (n += " "), (n += r));
  return n;
}
function oe() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++)
    (e = arguments[r]) && (t = eS(e)) && (n && (n += " "), (n += t));
  return n;
}
var _j = Array.isArray,
  bt = _j,
  Aj = typeof Ml == "object" && Ml && Ml.Object === Object && Ml,
  tS = Aj,
  Ej = tS,
  jj = typeof self == "object" && self && self.Object === Object && self,
  $j = Ej || jj || Function("return this")(),
  yr = $j,
  Tj = yr,
  Cj = Tj.Symbol,
  bl = Cj,
  Uy = bl,
  rS = Object.prototype,
  kj = rS.hasOwnProperty,
  Mj = rS.toString,
  Da = Uy ? Uy.toStringTag : void 0;
function Nj(e) {
  var t = kj.call(e, Da),
    r = e[Da];
  try {
    e[Da] = void 0;
    var n = !0;
  } catch {}
  var i = Mj.call(e);
  return (n && (t ? (e[Da] = r) : delete e[Da]), i);
}
var Ij = Nj,
  Dj = Object.prototype,
  Lj = Dj.toString;
function Rj(e) {
  return Lj.call(e);
}
var Fj = Rj,
  Wy = bl,
  Bj = Ij,
  zj = Fj,
  Uj = "[object Null]",
  Wj = "[object Undefined]",
  Hy = Wy ? Wy.toStringTag : void 0;
function Hj(e) {
  return e == null
    ? e === void 0
      ? Wj
      : Uj
    : Hy && Hy in Object(e)
      ? Bj(e)
      : zj(e);
}
var Fr = Hj;
function Vj(e) {
  return e != null && typeof e == "object";
}
var Br = Vj,
  Kj = Fr,
  Gj = Br,
  qj = "[object Symbol]";
function Xj(e) {
  return typeof e == "symbol" || (Gj(e) && Kj(e) == qj);
}
var ha = Xj,
  Yj = bt,
  Qj = ha,
  Zj = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  Jj = /^\w*$/;
function e$(e, t) {
  if (Yj(e)) return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Qj(e)
    ? !0
    : Jj.test(e) || !Zj.test(e) || (t != null && e in Object(t));
}
var bv = e$;
function t$(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var yn = t$;
const va = pe(yn);
var r$ = Fr,
  n$ = yn,
  i$ = "[object AsyncFunction]",
  a$ = "[object Function]",
  o$ = "[object GeneratorFunction]",
  l$ = "[object Proxy]";
function u$(e) {
  if (!n$(e)) return !1;
  var t = r$(e);
  return t == a$ || t == o$ || t == i$ || t == l$;
}
var xv = u$;
const J = pe(xv);
var s$ = yr,
  c$ = s$["__core-js_shared__"],
  f$ = c$,
  Tf = f$,
  Vy = (function () {
    var e = /[^.]+$/.exec((Tf && Tf.keys && Tf.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
function d$(e) {
  return !!Vy && Vy in e;
}
var p$ = d$,
  h$ = Function.prototype,
  v$ = h$.toString;
function m$(e) {
  if (e != null) {
    try {
      return v$.call(e);
    } catch {}
    try {
      return e + "";
    } catch {}
  }
  return "";
}
var nS = m$,
  y$ = xv,
  g$ = p$,
  b$ = yn,
  x$ = nS,
  w$ = /[\\^$.*+?()[\]{}|]/g,
  S$ = /^\[object .+?Constructor\]$/,
  O$ = Function.prototype,
  P$ = Object.prototype,
  _$ = O$.toString,
  A$ = P$.hasOwnProperty,
  E$ = RegExp(
    "^" +
      _$.call(A$)
        .replace(w$, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?",
        ) +
      "$",
  );
function j$(e) {
  if (!b$(e) || g$(e)) return !1;
  var t = y$(e) ? E$ : S$;
  return t.test(x$(e));
}
var $$ = j$;
function T$(e, t) {
  return e == null ? void 0 : e[t];
}
var C$ = T$,
  k$ = $$,
  M$ = C$;
function N$(e, t) {
  var r = M$(e, t);
  return k$(r) ? r : void 0;
}
var Jn = N$,
  I$ = Jn,
  D$ = I$(Object, "create"),
  dc = D$,
  Ky = dc;
function L$() {
  ((this.__data__ = Ky ? Ky(null) : {}), (this.size = 0));
}
var R$ = L$;
function F$(e) {
  var t = this.has(e) && delete this.__data__[e];
  return ((this.size -= t ? 1 : 0), t);
}
var B$ = F$,
  z$ = dc,
  U$ = "__lodash_hash_undefined__",
  W$ = Object.prototype,
  H$ = W$.hasOwnProperty;
function V$(e) {
  var t = this.__data__;
  if (z$) {
    var r = t[e];
    return r === U$ ? void 0 : r;
  }
  return H$.call(t, e) ? t[e] : void 0;
}
var K$ = V$,
  G$ = dc,
  q$ = Object.prototype,
  X$ = q$.hasOwnProperty;
function Y$(e) {
  var t = this.__data__;
  return G$ ? t[e] !== void 0 : X$.call(t, e);
}
var Q$ = Y$,
  Z$ = dc,
  J$ = "__lodash_hash_undefined__";
function eT(e, t) {
  var r = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (r[e] = Z$ && t === void 0 ? J$ : t),
    this
  );
}
var tT = eT,
  rT = R$,
  nT = B$,
  iT = K$,
  aT = Q$,
  oT = tT;
function ma(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ma.prototype.clear = rT;
ma.prototype.delete = nT;
ma.prototype.get = iT;
ma.prototype.has = aT;
ma.prototype.set = oT;
var lT = ma;
function uT() {
  ((this.__data__ = []), (this.size = 0));
}
var sT = uT;
function cT(e, t) {
  return e === t || (e !== e && t !== t);
}
var wv = cT,
  fT = wv;
function dT(e, t) {
  for (var r = e.length; r--; ) if (fT(e[r][0], t)) return r;
  return -1;
}
var pc = dT,
  pT = pc,
  hT = Array.prototype,
  vT = hT.splice;
function mT(e) {
  var t = this.__data__,
    r = pT(t, e);
  if (r < 0) return !1;
  var n = t.length - 1;
  return (r == n ? t.pop() : vT.call(t, r, 1), --this.size, !0);
}
var yT = mT,
  gT = pc;
function bT(e) {
  var t = this.__data__,
    r = gT(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var xT = bT,
  wT = pc;
function ST(e) {
  return wT(this.__data__, e) > -1;
}
var OT = ST,
  PT = pc;
function _T(e, t) {
  var r = this.__data__,
    n = PT(r, e);
  return (n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this);
}
var AT = _T,
  ET = sT,
  jT = yT,
  $T = xT,
  TT = OT,
  CT = AT;
function ya(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ya.prototype.clear = ET;
ya.prototype.delete = jT;
ya.prototype.get = $T;
ya.prototype.has = TT;
ya.prototype.set = CT;
var hc = ya,
  kT = Jn,
  MT = yr,
  NT = kT(MT, "Map"),
  Sv = NT,
  Gy = lT,
  IT = hc,
  DT = Sv;
function LT() {
  ((this.size = 0),
    (this.__data__ = {
      hash: new Gy(),
      map: new (DT || IT)(),
      string: new Gy(),
    }));
}
var RT = LT;
function FT(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean"
    ? e !== "__proto__"
    : e === null;
}
var BT = FT,
  zT = BT;
function UT(e, t) {
  var r = e.__data__;
  return zT(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var vc = UT,
  WT = vc;
function HT(e) {
  var t = WT(this, e).delete(e);
  return ((this.size -= t ? 1 : 0), t);
}
var VT = HT,
  KT = vc;
function GT(e) {
  return KT(this, e).get(e);
}
var qT = GT,
  XT = vc;
function YT(e) {
  return XT(this, e).has(e);
}
var QT = YT,
  ZT = vc;
function JT(e, t) {
  var r = ZT(this, e),
    n = r.size;
  return (r.set(e, t), (this.size += r.size == n ? 0 : 1), this);
}
var eC = JT,
  tC = RT,
  rC = VT,
  nC = qT,
  iC = QT,
  aC = eC;
function ga(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ga.prototype.clear = tC;
ga.prototype.delete = rC;
ga.prototype.get = nC;
ga.prototype.has = iC;
ga.prototype.set = aC;
var Ov = ga,
  iS = Ov,
  oC = "Expected a function";
function Pv(e, t) {
  if (typeof e != "function" || (t != null && typeof t != "function"))
    throw new TypeError(oC);
  var r = function () {
    var n = arguments,
      i = t ? t.apply(this, n) : n[0],
      a = r.cache;
    if (a.has(i)) return a.get(i);
    var o = e.apply(this, n);
    return ((r.cache = a.set(i, o) || a), o);
  };
  return ((r.cache = new (Pv.Cache || iS)()), r);
}
Pv.Cache = iS;
var aS = Pv;
const lC = pe(aS);
var uC = aS,
  sC = 500;
function cC(e) {
  var t = uC(e, function (n) {
      return (r.size === sC && r.clear(), n);
    }),
    r = t.cache;
  return t;
}
var fC = cC,
  dC = fC,
  pC =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  hC = /\\(\\)?/g,
  vC = dC(function (e) {
    var t = [];
    return (
      e.charCodeAt(0) === 46 && t.push(""),
      e.replace(pC, function (r, n, i, a) {
        t.push(i ? a.replace(hC, "$1") : n || r);
      }),
      t
    );
  }),
  mC = vC;
function yC(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var _v = yC,
  qy = bl,
  gC = _v,
  bC = bt,
  xC = ha,
  Xy = qy ? qy.prototype : void 0,
  Yy = Xy ? Xy.toString : void 0;
function oS(e) {
  if (typeof e == "string") return e;
  if (bC(e)) return gC(e, oS) + "";
  if (xC(e)) return Yy ? Yy.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var wC = oS,
  SC = wC;
function OC(e) {
  return e == null ? "" : SC(e);
}
var lS = OC,
  PC = bt,
  _C = bv,
  AC = mC,
  EC = lS;
function jC(e, t) {
  return PC(e) ? e : _C(e, t) ? [e] : AC(EC(e));
}
var uS = jC,
  $C = ha;
function TC(e) {
  if (typeof e == "string" || $C(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var mc = TC,
  CC = uS,
  kC = mc;
function MC(e, t) {
  t = CC(t, e);
  for (var r = 0, n = t.length; e != null && r < n; ) e = e[kC(t[r++])];
  return r && r == n ? e : void 0;
}
var Av = MC,
  NC = Av;
function IC(e, t, r) {
  var n = e == null ? void 0 : NC(e, t);
  return n === void 0 ? r : n;
}
var sS = IC;
const Bt = pe(sS);
function DC(e) {
  return e == null;
}
var LC = DC;
const ee = pe(LC);
var RC = Fr,
  FC = bt,
  BC = Br,
  zC = "[object String]";
function UC(e) {
  return typeof e == "string" || (!FC(e) && BC(e) && RC(e) == zC);
}
var WC = UC;
const Kn = pe(WC);
var cS = { exports: {} },
  ce = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ev = Symbol.for("react.element"),
  jv = Symbol.for("react.portal"),
  yc = Symbol.for("react.fragment"),
  gc = Symbol.for("react.strict_mode"),
  bc = Symbol.for("react.profiler"),
  xc = Symbol.for("react.provider"),
  wc = Symbol.for("react.context"),
  HC = Symbol.for("react.server_context"),
  Sc = Symbol.for("react.forward_ref"),
  Oc = Symbol.for("react.suspense"),
  Pc = Symbol.for("react.suspense_list"),
  _c = Symbol.for("react.memo"),
  Ac = Symbol.for("react.lazy"),
  VC = Symbol.for("react.offscreen"),
  fS;
fS = Symbol.for("react.module.reference");
function Vt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ev:
        switch (((e = e.type), e)) {
          case yc:
          case bc:
          case gc:
          case Oc:
          case Pc:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case HC:
              case wc:
              case Sc:
              case Ac:
              case _c:
              case xc:
                return e;
              default:
                return t;
            }
        }
      case jv:
        return t;
    }
  }
}
ce.ContextConsumer = wc;
ce.ContextProvider = xc;
ce.Element = Ev;
ce.ForwardRef = Sc;
ce.Fragment = yc;
ce.Lazy = Ac;
ce.Memo = _c;
ce.Portal = jv;
ce.Profiler = bc;
ce.StrictMode = gc;
ce.Suspense = Oc;
ce.SuspenseList = Pc;
ce.isAsyncMode = function () {
  return !1;
};
ce.isConcurrentMode = function () {
  return !1;
};
ce.isContextConsumer = function (e) {
  return Vt(e) === wc;
};
ce.isContextProvider = function (e) {
  return Vt(e) === xc;
};
ce.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ev;
};
ce.isForwardRef = function (e) {
  return Vt(e) === Sc;
};
ce.isFragment = function (e) {
  return Vt(e) === yc;
};
ce.isLazy = function (e) {
  return Vt(e) === Ac;
};
ce.isMemo = function (e) {
  return Vt(e) === _c;
};
ce.isPortal = function (e) {
  return Vt(e) === jv;
};
ce.isProfiler = function (e) {
  return Vt(e) === bc;
};
ce.isStrictMode = function (e) {
  return Vt(e) === gc;
};
ce.isSuspense = function (e) {
  return Vt(e) === Oc;
};
ce.isSuspenseList = function (e) {
  return Vt(e) === Pc;
};
ce.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === yc ||
    e === bc ||
    e === gc ||
    e === Oc ||
    e === Pc ||
    e === VC ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Ac ||
        e.$$typeof === _c ||
        e.$$typeof === xc ||
        e.$$typeof === wc ||
        e.$$typeof === Sc ||
        e.$$typeof === fS ||
        e.getModuleId !== void 0))
  );
};
ce.typeOf = Vt;
cS.exports = ce;
var KC = cS.exports,
  GC = Fr,
  qC = Br,
  XC = "[object Number]";
function YC(e) {
  return typeof e == "number" || (qC(e) && GC(e) == XC);
}
var dS = YC;
const QC = pe(dS);
var ZC = dS;
function JC(e) {
  return ZC(e) && e != +e;
}
var ek = JC;
const xl = pe(ek);
var nr = function (t) {
    return t === 0 ? 0 : t > 0 ? 1 : -1;
  },
  Mn = function (t) {
    return Kn(t) && t.indexOf("%") === t.length - 1;
  },
  H = function (t) {
    return QC(t) && !xl(t);
  },
  tk = function (t) {
    return ee(t);
  },
  Ue = function (t) {
    return H(t) || Kn(t);
  },
  rk = 0,
  wl = function (t) {
    var r = ++rk;
    return "".concat(t || "").concat(r);
  },
  Gn = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    if (!H(t) && !Kn(t)) return n;
    var a;
    if (Mn(t)) {
      var o = t.indexOf("%");
      a = (r * parseFloat(t.slice(0, o))) / 100;
    } else a = +t;
    return (xl(a) && (a = n), i && a > r && (a = r), a);
  },
  Yr = function (t) {
    if (!t) return null;
    var r = Object.keys(t);
    return r && r.length ? t[r[0]] : null;
  },
  nk = function (t) {
    if (!Array.isArray(t)) return !1;
    for (var r = t.length, n = {}, i = 0; i < r; i++)
      if (!n[t[i]]) n[t[i]] = !0;
      else return !0;
    return !1;
  },
  tr = function (t, r) {
    return H(t) && H(r)
      ? function (n) {
          return t + n * (r - t);
        }
      : function () {
          return r;
        };
  };
function qu(e, t, r) {
  return !e || !e.length
    ? null
    : e.find(function (n) {
        return n && (typeof t == "function" ? t(n) : Bt(n, t)) === r;
      });
}
var ik = function (t, r) {
  return H(t) && H(r)
    ? t - r
    : Kn(t) && Kn(r)
      ? t.localeCompare(r)
      : t instanceof Date && r instanceof Date
        ? t.getTime() - r.getTime()
        : String(t).localeCompare(String(r));
};
function Ci(e, t) {
  for (var r in e)
    if (
      {}.hasOwnProperty.call(e, r) &&
      (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r])
    )
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function Jd(e) {
  "@babel/helpers - typeof";
  return (
    (Jd =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Jd(e)
  );
}
var ak = ["viewBox", "children"],
  ok = [
    "aria-activedescendant",
    "aria-atomic",
    "aria-autocomplete",
    "aria-busy",
    "aria-checked",
    "aria-colcount",
    "aria-colindex",
    "aria-colspan",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-details",
    "aria-disabled",
    "aria-errormessage",
    "aria-expanded",
    "aria-flowto",
    "aria-haspopup",
    "aria-hidden",
    "aria-invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-level",
    "aria-live",
    "aria-modal",
    "aria-multiline",
    "aria-multiselectable",
    "aria-orientation",
    "aria-owns",
    "aria-placeholder",
    "aria-posinset",
    "aria-pressed",
    "aria-readonly",
    "aria-relevant",
    "aria-required",
    "aria-roledescription",
    "aria-rowcount",
    "aria-rowindex",
    "aria-rowspan",
    "aria-selected",
    "aria-setsize",
    "aria-sort",
    "aria-valuemax",
    "aria-valuemin",
    "aria-valuenow",
    "aria-valuetext",
    "className",
    "color",
    "height",
    "id",
    "lang",
    "max",
    "media",
    "method",
    "min",
    "name",
    "style",
    "target",
    "width",
    "role",
    "tabIndex",
    "accentHeight",
    "accumulate",
    "additive",
    "alignmentBaseline",
    "allowReorder",
    "alphabetic",
    "amplitude",
    "arabicForm",
    "ascent",
    "attributeName",
    "attributeType",
    "autoReverse",
    "azimuth",
    "baseFrequency",
    "baselineShift",
    "baseProfile",
    "bbox",
    "begin",
    "bias",
    "by",
    "calcMode",
    "capHeight",
    "clip",
    "clipPath",
    "clipPathUnits",
    "clipRule",
    "colorInterpolation",
    "colorInterpolationFilters",
    "colorProfile",
    "colorRendering",
    "contentScriptType",
    "contentStyleType",
    "cursor",
    "cx",
    "cy",
    "d",
    "decelerate",
    "descent",
    "diffuseConstant",
    "direction",
    "display",
    "divisor",
    "dominantBaseline",
    "dur",
    "dx",
    "dy",
    "edgeMode",
    "elevation",
    "enableBackground",
    "end",
    "exponent",
    "externalResourcesRequired",
    "fill",
    "fillOpacity",
    "fillRule",
    "filter",
    "filterRes",
    "filterUnits",
    "floodColor",
    "floodOpacity",
    "focusable",
    "fontFamily",
    "fontSize",
    "fontSizeAdjust",
    "fontStretch",
    "fontStyle",
    "fontVariant",
    "fontWeight",
    "format",
    "from",
    "fx",
    "fy",
    "g1",
    "g2",
    "glyphName",
    "glyphOrientationHorizontal",
    "glyphOrientationVertical",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "hanging",
    "horizAdvX",
    "horizOriginX",
    "href",
    "ideographic",
    "imageRendering",
    "in2",
    "in",
    "intercept",
    "k1",
    "k2",
    "k3",
    "k4",
    "k",
    "kernelMatrix",
    "kernelUnitLength",
    "kerning",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "letterSpacing",
    "lightingColor",
    "limitingConeAngle",
    "local",
    "markerEnd",
    "markerHeight",
    "markerMid",
    "markerStart",
    "markerUnits",
    "markerWidth",
    "mask",
    "maskContentUnits",
    "maskUnits",
    "mathematical",
    "mode",
    "numOctaves",
    "offset",
    "opacity",
    "operator",
    "order",
    "orient",
    "orientation",
    "origin",
    "overflow",
    "overlinePosition",
    "overlineThickness",
    "paintOrder",
    "panose1",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointerEvents",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "r",
    "radius",
    "refX",
    "refY",
    "renderingIntent",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "restart",
    "result",
    "rotate",
    "rx",
    "ry",
    "seed",
    "shapeRendering",
    "slope",
    "spacing",
    "specularConstant",
    "specularExponent",
    "speed",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stemh",
    "stemv",
    "stitchTiles",
    "stopColor",
    "stopOpacity",
    "strikethroughPosition",
    "strikethroughThickness",
    "string",
    "stroke",
    "strokeDasharray",
    "strokeDashoffset",
    "strokeLinecap",
    "strokeLinejoin",
    "strokeMiterlimit",
    "strokeOpacity",
    "strokeWidth",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textAnchor",
    "textDecoration",
    "textLength",
    "textRendering",
    "to",
    "transform",
    "u1",
    "u2",
    "underlinePosition",
    "underlineThickness",
    "unicode",
    "unicodeBidi",
    "unicodeRange",
    "unitsPerEm",
    "vAlphabetic",
    "values",
    "vectorEffect",
    "version",
    "vertAdvY",
    "vertOriginX",
    "vertOriginY",
    "vHanging",
    "vIdeographic",
    "viewTarget",
    "visibility",
    "vMathematical",
    "widths",
    "wordSpacing",
    "writingMode",
    "x1",
    "x2",
    "x",
    "xChannelSelector",
    "xHeight",
    "xlinkActuate",
    "xlinkArcrole",
    "xlinkHref",
    "xlinkRole",
    "xlinkShow",
    "xlinkTitle",
    "xlinkType",
    "xmlBase",
    "xmlLang",
    "xmlns",
    "xmlnsXlink",
    "xmlSpace",
    "y1",
    "y2",
    "y",
    "yChannelSelector",
    "z",
    "zoomAndPan",
    "ref",
    "key",
    "angle",
  ],
  Qy = ["points", "pathLength"],
  Cf = { svg: ak, polygon: Qy, polyline: Qy },
  $v = [
    "dangerouslySetInnerHTML",
    "onCopy",
    "onCopyCapture",
    "onCut",
    "onCutCapture",
    "onPaste",
    "onPasteCapture",
    "onCompositionEnd",
    "onCompositionEndCapture",
    "onCompositionStart",
    "onCompositionStartCapture",
    "onCompositionUpdate",
    "onCompositionUpdateCapture",
    "onFocus",
    "onFocusCapture",
    "onBlur",
    "onBlurCapture",
    "onChange",
    "onChangeCapture",
    "onBeforeInput",
    "onBeforeInputCapture",
    "onInput",
    "onInputCapture",
    "onReset",
    "onResetCapture",
    "onSubmit",
    "onSubmitCapture",
    "onInvalid",
    "onInvalidCapture",
    "onLoad",
    "onLoadCapture",
    "onError",
    "onErrorCapture",
    "onKeyDown",
    "onKeyDownCapture",
    "onKeyPress",
    "onKeyPressCapture",
    "onKeyUp",
    "onKeyUpCapture",
    "onAbort",
    "onAbortCapture",
    "onCanPlay",
    "onCanPlayCapture",
    "onCanPlayThrough",
    "onCanPlayThroughCapture",
    "onDurationChange",
    "onDurationChangeCapture",
    "onEmptied",
    "onEmptiedCapture",
    "onEncrypted",
    "onEncryptedCapture",
    "onEnded",
    "onEndedCapture",
    "onLoadedData",
    "onLoadedDataCapture",
    "onLoadedMetadata",
    "onLoadedMetadataCapture",
    "onLoadStart",
    "onLoadStartCapture",
    "onPause",
    "onPauseCapture",
    "onPlay",
    "onPlayCapture",
    "onPlaying",
    "onPlayingCapture",
    "onProgress",
    "onProgressCapture",
    "onRateChange",
    "onRateChangeCapture",
    "onSeeked",
    "onSeekedCapture",
    "onSeeking",
    "onSeekingCapture",
    "onStalled",
    "onStalledCapture",
    "onSuspend",
    "onSuspendCapture",
    "onTimeUpdate",
    "onTimeUpdateCapture",
    "onVolumeChange",
    "onVolumeChangeCapture",
    "onWaiting",
    "onWaitingCapture",
    "onAuxClick",
    "onAuxClickCapture",
    "onClick",
    "onClickCapture",
    "onContextMenu",
    "onContextMenuCapture",
    "onDoubleClick",
    "onDoubleClickCapture",
    "onDrag",
    "onDragCapture",
    "onDragEnd",
    "onDragEndCapture",
    "onDragEnter",
    "onDragEnterCapture",
    "onDragExit",
    "onDragExitCapture",
    "onDragLeave",
    "onDragLeaveCapture",
    "onDragOver",
    "onDragOverCapture",
    "onDragStart",
    "onDragStartCapture",
    "onDrop",
    "onDropCapture",
    "onMouseDown",
    "onMouseDownCapture",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseMove",
    "onMouseMoveCapture",
    "onMouseOut",
    "onMouseOutCapture",
    "onMouseOver",
    "onMouseOverCapture",
    "onMouseUp",
    "onMouseUpCapture",
    "onSelect",
    "onSelectCapture",
    "onTouchCancel",
    "onTouchCancelCapture",
    "onTouchEnd",
    "onTouchEndCapture",
    "onTouchMove",
    "onTouchMoveCapture",
    "onTouchStart",
    "onTouchStartCapture",
    "onPointerDown",
    "onPointerDownCapture",
    "onPointerMove",
    "onPointerMoveCapture",
    "onPointerUp",
    "onPointerUpCapture",
    "onPointerCancel",
    "onPointerCancelCapture",
    "onPointerEnter",
    "onPointerEnterCapture",
    "onPointerLeave",
    "onPointerLeaveCapture",
    "onPointerOver",
    "onPointerOverCapture",
    "onPointerOut",
    "onPointerOutCapture",
    "onGotPointerCapture",
    "onGotPointerCaptureCapture",
    "onLostPointerCapture",
    "onLostPointerCaptureCapture",
    "onScroll",
    "onScrollCapture",
    "onWheel",
    "onWheelCapture",
    "onAnimationStart",
    "onAnimationStartCapture",
    "onAnimationEnd",
    "onAnimationEndCapture",
    "onAnimationIteration",
    "onAnimationIterationCapture",
    "onTransitionEnd",
    "onTransitionEndCapture",
  ],
  Xu = function (t, r) {
    if (!t || typeof t == "function" || typeof t == "boolean") return null;
    var n = t;
    if ((B.isValidElement(t) && (n = t.props), !va(n))) return null;
    var i = {};
    return (
      Object.keys(n).forEach(function (a) {
        $v.includes(a) &&
          (i[a] =
            r ||
            function (o) {
              return n[a](n, o);
            });
      }),
      i
    );
  },
  lk = function (t, r, n) {
    return function (i) {
      return (t(r, n, i), null);
    };
  },
  Yu = function (t, r, n) {
    if (!va(t) || Jd(t) !== "object") return null;
    var i = null;
    return (
      Object.keys(t).forEach(function (a) {
        var o = t[a];
        $v.includes(a) &&
          typeof o == "function" &&
          (i || (i = {}), (i[a] = lk(o, r, n)));
      }),
      i
    );
  },
  uk = ["children"],
  sk = ["children"];
function Zy(e, t) {
  if (e == null) return {};
  var r = ck(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function ck(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function ep(e) {
  "@babel/helpers - typeof";
  return (
    (ep =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ep(e)
  );
}
var Jy = {
    click: "onClick",
    mousedown: "onMouseDown",
    mouseup: "onMouseUp",
    mouseover: "onMouseOver",
    mousemove: "onMouseMove",
    mouseout: "onMouseOut",
    mouseenter: "onMouseEnter",
    mouseleave: "onMouseLeave",
    touchcancel: "onTouchCancel",
    touchend: "onTouchEnd",
    touchmove: "onTouchMove",
    touchstart: "onTouchStart",
    contextmenu: "onContextMenu",
    dblclick: "onDoubleClick",
  },
  Er = function (t) {
    return typeof t == "string"
      ? t
      : t
        ? t.displayName || t.name || "Component"
        : "";
  },
  eg = null,
  kf = null,
  Tv = function e(t) {
    if (t === eg && Array.isArray(kf)) return kf;
    var r = [];
    return (
      B.Children.forEach(t, function (n) {
        ee(n) ||
          (KC.isFragment(n) ? (r = r.concat(e(n.props.children))) : r.push(n));
      }),
      (kf = r),
      (eg = t),
      r
    );
  };
function zt(e, t) {
  var r = [],
    n = [];
  return (
    Array.isArray(t)
      ? (n = t.map(function (i) {
          return Er(i);
        }))
      : (n = [Er(t)]),
    Tv(e).forEach(function (i) {
      var a = Bt(i, "type.displayName") || Bt(i, "type.name");
      n.indexOf(a) !== -1 && r.push(i);
    }),
    r
  );
}
function Ot(e, t) {
  var r = zt(e, t);
  return r && r[0];
}
var tg = function (t) {
    if (!t || !t.props) return !1;
    var r = t.props,
      n = r.width,
      i = r.height;
    return !(!H(n) || n <= 0 || !H(i) || i <= 0);
  },
  fk = [
    "a",
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animate",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "circle",
    "clipPath",
    "color-profile",
    "cursor",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColormatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "font",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-url",
    "foreignObject",
    "g",
    "glyph",
    "glyphRef",
    "hkern",
    "image",
    "line",
    "lineGradient",
    "marker",
    "mask",
    "metadata",
    "missing-glyph",
    "mpath",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "script",
    "set",
    "stop",
    "style",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "title",
    "tref",
    "tspan",
    "use",
    "view",
    "vkern",
  ],
  dk = function (t) {
    return t && t.type && Kn(t.type) && fk.indexOf(t.type) >= 0;
  },
  pk = function (t) {
    return t && ep(t) === "object" && "clipDot" in t;
  },
  hk = function (t, r, n, i) {
    var a,
      o = (a = Cf == null ? void 0 : Cf[i]) !== null && a !== void 0 ? a : [];
    return (
      r.startsWith("data-") ||
      (!J(t) && ((i && o.includes(r)) || ok.includes(r))) ||
      (n && $v.includes(r))
    );
  },
  re = function (t, r, n) {
    if (!t || typeof t == "function" || typeof t == "boolean") return null;
    var i = t;
    if ((B.isValidElement(t) && (i = t.props), !va(i))) return null;
    var a = {};
    return (
      Object.keys(i).forEach(function (o) {
        var l;
        hk((l = i) === null || l === void 0 ? void 0 : l[o], o, r, n) &&
          (a[o] = i[o]);
      }),
      a
    );
  },
  tp = function e(t, r) {
    if (t === r) return !0;
    var n = B.Children.count(t);
    if (n !== B.Children.count(r)) return !1;
    if (n === 0) return !0;
    if (n === 1)
      return rg(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
    for (var i = 0; i < n; i++) {
      var a = t[i],
        o = r[i];
      if (Array.isArray(a) || Array.isArray(o)) {
        if (!e(a, o)) return !1;
      } else if (!rg(a, o)) return !1;
    }
    return !0;
  },
  rg = function (t, r) {
    if (ee(t) && ee(r)) return !0;
    if (!ee(t) && !ee(r)) {
      var n = t.props || {},
        i = n.children,
        a = Zy(n, uk),
        o = r.props || {},
        l = o.children,
        u = Zy(o, sk);
      return i && l ? Ci(a, u) && tp(i, l) : !i && !l ? Ci(a, u) : !1;
    }
    return !1;
  },
  ng = function (t, r) {
    var n = [],
      i = {};
    return (
      Tv(t).forEach(function (a, o) {
        if (dk(a)) n.push(a);
        else if (a) {
          var l = Er(a.type),
            u = r[l] || {},
            s = u.handler,
            f = u.once;
          if (s && (!f || !i[l])) {
            var c = s(a, l, o);
            (n.push(c), (i[l] = !0));
          }
        }
      }),
      n
    );
  },
  vk = function (t) {
    var r = t && t.type;
    return r && Jy[r] ? Jy[r] : null;
  },
  mk = function (t, r) {
    return Tv(r).indexOf(t);
  },
  yk = [
    "children",
    "width",
    "height",
    "viewBox",
    "className",
    "style",
    "title",
    "desc",
  ];
function rp() {
  return (
    (rp = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    rp.apply(this, arguments)
  );
}
function gk(e, t) {
  if (e == null) return {};
  var r = bk(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function bk(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function np(e) {
  var t = e.children,
    r = e.width,
    n = e.height,
    i = e.viewBox,
    a = e.className,
    o = e.style,
    l = e.title,
    u = e.desc,
    s = gk(e, yk),
    f = i || { width: r, height: n, x: 0, y: 0 },
    c = oe("recharts-surface", a);
  return E.createElement(
    "svg",
    rp({}, re(s, !0, "svg"), {
      className: c,
      width: r,
      height: n,
      style: o,
      viewBox: ""
        .concat(f.x, " ")
        .concat(f.y, " ")
        .concat(f.width, " ")
        .concat(f.height),
    }),
    E.createElement("title", null, l),
    E.createElement("desc", null, u),
    t,
  );
}
var xk = ["children", "className"];
function ip() {
  return (
    (ip = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ip.apply(this, arguments)
  );
}
function wk(e, t) {
  if (e == null) return {};
  var r = Sk(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function Sk(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var ke = E.forwardRef(function (e, t) {
    var r = e.children,
      n = e.className,
      i = wk(e, xk),
      a = oe("recharts-layer", n);
    return E.createElement("g", ip({ className: a }, re(i, !0), { ref: t }), r);
  }),
  jr = function (t, r) {
    for (
      var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2;
      a < n;
      a++
    )
      i[a - 2] = arguments[a];
  };
function Ok(e, t, r) {
  var n = -1,
    i = e.length;
  (t < 0 && (t = -t > i ? 0 : i + t),
    (r = r > i ? i : r),
    r < 0 && (r += i),
    (i = t > r ? 0 : (r - t) >>> 0),
    (t >>>= 0));
  for (var a = Array(i); ++n < i; ) a[n] = e[n + t];
  return a;
}
var Pk = Ok,
  _k = Pk;
function Ak(e, t, r) {
  var n = e.length;
  return ((r = r === void 0 ? n : r), !t && r >= n ? e : _k(e, t, r));
}
var Ek = Ak,
  jk = "\\ud800-\\udfff",
  $k = "\\u0300-\\u036f",
  Tk = "\\ufe20-\\ufe2f",
  Ck = "\\u20d0-\\u20ff",
  kk = $k + Tk + Ck,
  Mk = "\\ufe0e\\ufe0f",
  Nk = "\\u200d",
  Ik = RegExp("[" + Nk + jk + kk + Mk + "]");
function Dk(e) {
  return Ik.test(e);
}
var pS = Dk;
function Lk(e) {
  return e.split("");
}
var Rk = Lk,
  hS = "\\ud800-\\udfff",
  Fk = "\\u0300-\\u036f",
  Bk = "\\ufe20-\\ufe2f",
  zk = "\\u20d0-\\u20ff",
  Uk = Fk + Bk + zk,
  Wk = "\\ufe0e\\ufe0f",
  Hk = "[" + hS + "]",
  ap = "[" + Uk + "]",
  op = "\\ud83c[\\udffb-\\udfff]",
  Vk = "(?:" + ap + "|" + op + ")",
  vS = "[^" + hS + "]",
  mS = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  yS = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  Kk = "\\u200d",
  gS = Vk + "?",
  bS = "[" + Wk + "]?",
  Gk = "(?:" + Kk + "(?:" + [vS, mS, yS].join("|") + ")" + bS + gS + ")*",
  qk = bS + gS + Gk,
  Xk = "(?:" + [vS + ap + "?", ap, mS, yS, Hk].join("|") + ")",
  Yk = RegExp(op + "(?=" + op + ")|" + Xk + qk, "g");
function Qk(e) {
  return e.match(Yk) || [];
}
var Zk = Qk,
  Jk = Rk,
  e2 = pS,
  t2 = Zk;
function r2(e) {
  return e2(e) ? t2(e) : Jk(e);
}
var n2 = r2,
  i2 = Ek,
  a2 = pS,
  o2 = n2,
  l2 = lS;
function u2(e) {
  return function (t) {
    t = l2(t);
    var r = a2(t) ? o2(t) : void 0,
      n = r ? r[0] : t.charAt(0),
      i = r ? i2(r, 1).join("") : t.slice(1);
    return n[e]() + i;
  };
}
var s2 = u2,
  c2 = s2,
  f2 = c2("toUpperCase"),
  d2 = f2;
const Ec = pe(d2);
function he(e) {
  return function () {
    return e;
  };
}
const xS = Math.cos,
  Qu = Math.sin,
  lr = Math.sqrt,
  Zu = Math.PI,
  jc = 2 * Zu,
  lp = Math.PI,
  up = 2 * lp,
  En = 1e-6,
  p2 = up - En;
function wS(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t) this._ += arguments[t] + e[t];
}
function h2(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return wS;
  const r = 10 ** t;
  return function (n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class v2 {
  constructor(t) {
    ((this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ""),
      (this._append = t == null ? wS : h2(t)));
  }
  moveTo(t, r) {
    this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +r)}`;
  }
  closePath() {
    this._x1 !== null &&
      ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${(this._x1 = +t)},${(this._y1 = +r)}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${(this._x1 = +n)},${(this._y1 = +i)}`;
  }
  bezierCurveTo(t, r, n, i, a, o) {
    this
      ._append`C${+t},${+r},${+n},${+i},${(this._x1 = +a)},${(this._y1 = +o)}`;
  }
  arcTo(t, r, n, i, a) {
    if (((t = +t), (r = +r), (n = +n), (i = +i), (a = +a), a < 0))
      throw new Error(`negative radius: ${a}`);
    let o = this._x1,
      l = this._y1,
      u = n - t,
      s = i - r,
      f = o - t,
      c = l - r,
      d = f * f + c * c;
    if (this._x1 === null) this._append`M${(this._x1 = t)},${(this._y1 = r)}`;
    else if (d > En)
      if (!(Math.abs(c * u - s * f) > En) || !a)
        this._append`L${(this._x1 = t)},${(this._y1 = r)}`;
      else {
        let p = n - o,
          m = i - l,
          y = u * u + s * s,
          x = p * p + m * m,
          v = Math.sqrt(y),
          h = Math.sqrt(d),
          g = a * Math.tan((lp - Math.acos((y + d - x) / (2 * v * h))) / 2),
          S = g / h,
          b = g / v;
        (Math.abs(S - 1) > En && this._append`L${t + S * f},${r + S * c}`,
          this
            ._append`A${a},${a},0,0,${+(c * p > f * m)},${(this._x1 = t + b * u)},${(this._y1 = r + b * s)}`);
      }
  }
  arc(t, r, n, i, a, o) {
    if (((t = +t), (r = +r), (n = +n), (o = !!o), n < 0))
      throw new Error(`negative radius: ${n}`);
    let l = n * Math.cos(i),
      u = n * Math.sin(i),
      s = t + l,
      f = r + u,
      c = 1 ^ o,
      d = o ? i - a : a - i;
    (this._x1 === null
      ? this._append`M${s},${f}`
      : (Math.abs(this._x1 - s) > En || Math.abs(this._y1 - f) > En) &&
        this._append`L${s},${f}`,
      n &&
        (d < 0 && (d = (d % up) + up),
        d > p2
          ? this
              ._append`A${n},${n},0,1,${c},${t - l},${r - u}A${n},${n},0,1,${c},${(this._x1 = s)},${(this._y1 = f)}`
          : d > En &&
            this
              ._append`A${n},${n},0,${+(d >= lp)},${c},${(this._x1 = t + n * Math.cos(a))},${(this._y1 = r + n * Math.sin(a))}`));
  }
  rect(t, r, n, i) {
    this
      ._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +r)}h${(n = +n)}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Cv(e) {
  let t = 3;
  return (
    (e.digits = function (r) {
      if (!arguments.length) return t;
      if (r == null) t = null;
      else {
        const n = Math.floor(r);
        if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
        t = n;
      }
      return e;
    }),
    () => new v2(t)
  );
}
function kv(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function SS(e) {
  this._context = e;
}
SS.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  },
};
function $c(e) {
  return new SS(e);
}
function OS(e) {
  return e[0];
}
function PS(e) {
  return e[1];
}
function _S(e, t) {
  var r = he(!0),
    n = null,
    i = $c,
    a = null,
    o = Cv(l);
  ((e = typeof e == "function" ? e : e === void 0 ? OS : he(e)),
    (t = typeof t == "function" ? t : t === void 0 ? PS : he(t)));
  function l(u) {
    var s,
      f = (u = kv(u)).length,
      c,
      d = !1,
      p;
    for (n == null && (a = i((p = o()))), s = 0; s <= f; ++s)
      (!(s < f && r((c = u[s]), s, u)) === d &&
        ((d = !d) ? a.lineStart() : a.lineEnd()),
        d && a.point(+e(c, s, u), +t(c, s, u)));
    if (p) return ((a = null), p + "" || null);
  }
  return (
    (l.x = function (u) {
      return arguments.length
        ? ((e = typeof u == "function" ? u : he(+u)), l)
        : e;
    }),
    (l.y = function (u) {
      return arguments.length
        ? ((t = typeof u == "function" ? u : he(+u)), l)
        : t;
    }),
    (l.defined = function (u) {
      return arguments.length
        ? ((r = typeof u == "function" ? u : he(!!u)), l)
        : r;
    }),
    (l.curve = function (u) {
      return arguments.length ? ((i = u), n != null && (a = i(n)), l) : i;
    }),
    (l.context = function (u) {
      return arguments.length
        ? (u == null ? (n = a = null) : (a = i((n = u))), l)
        : n;
    }),
    l
  );
}
function Ql(e, t, r) {
  var n = null,
    i = he(!0),
    a = null,
    o = $c,
    l = null,
    u = Cv(s);
  ((e = typeof e == "function" ? e : e === void 0 ? OS : he(+e)),
    (t = typeof t == "function" ? t : he(t === void 0 ? 0 : +t)),
    (r = typeof r == "function" ? r : r === void 0 ? PS : he(+r)));
  function s(c) {
    var d,
      p,
      m,
      y = (c = kv(c)).length,
      x,
      v = !1,
      h,
      g = new Array(y),
      S = new Array(y);
    for (a == null && (l = o((h = u()))), d = 0; d <= y; ++d) {
      if (!(d < y && i((x = c[d]), d, c)) === v)
        if ((v = !v)) ((p = d), l.areaStart(), l.lineStart());
        else {
          for (l.lineEnd(), l.lineStart(), m = d - 1; m >= p; --m)
            l.point(g[m], S[m]);
          (l.lineEnd(), l.areaEnd());
        }
      v &&
        ((g[d] = +e(x, d, c)),
        (S[d] = +t(x, d, c)),
        l.point(n ? +n(x, d, c) : g[d], r ? +r(x, d, c) : S[d]));
    }
    if (h) return ((l = null), h + "" || null);
  }
  function f() {
    return _S().defined(i).curve(o).context(a);
  }
  return (
    (s.x = function (c) {
      return arguments.length
        ? ((e = typeof c == "function" ? c : he(+c)), (n = null), s)
        : e;
    }),
    (s.x0 = function (c) {
      return arguments.length
        ? ((e = typeof c == "function" ? c : he(+c)), s)
        : e;
    }),
    (s.x1 = function (c) {
      return arguments.length
        ? ((n = c == null ? null : typeof c == "function" ? c : he(+c)), s)
        : n;
    }),
    (s.y = function (c) {
      return arguments.length
        ? ((t = typeof c == "function" ? c : he(+c)), (r = null), s)
        : t;
    }),
    (s.y0 = function (c) {
      return arguments.length
        ? ((t = typeof c == "function" ? c : he(+c)), s)
        : t;
    }),
    (s.y1 = function (c) {
      return arguments.length
        ? ((r = c == null ? null : typeof c == "function" ? c : he(+c)), s)
        : r;
    }),
    (s.lineX0 = s.lineY0 =
      function () {
        return f().x(e).y(t);
      }),
    (s.lineY1 = function () {
      return f().x(e).y(r);
    }),
    (s.lineX1 = function () {
      return f().x(n).y(t);
    }),
    (s.defined = function (c) {
      return arguments.length
        ? ((i = typeof c == "function" ? c : he(!!c)), s)
        : i;
    }),
    (s.curve = function (c) {
      return arguments.length ? ((o = c), a != null && (l = o(a)), s) : o;
    }),
    (s.context = function (c) {
      return arguments.length
        ? (c == null ? (a = l = null) : (l = o((a = c))), s)
        : a;
    }),
    s
  );
}
class AS {
  constructor(t, r) {
    ((this._context = t), (this._x = r));
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  }
  point(t, r) {
    switch (((t = +t), (r = +r), this._point)) {
      case 0: {
        ((this._point = 1),
          this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r));
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x
          ? this._context.bezierCurveTo(
              (this._x0 = (this._x0 + t) / 2),
              this._y0,
              this._x0,
              r,
              t,
              r,
            )
          : this._context.bezierCurveTo(
              this._x0,
              (this._y0 = (this._y0 + r) / 2),
              t,
              this._y0,
              t,
              r,
            );
        break;
      }
    }
    ((this._x0 = t), (this._y0 = r));
  }
}
function m2(e) {
  return new AS(e, !0);
}
function y2(e) {
  return new AS(e, !1);
}
const Mv = {
    draw(e, t) {
      const r = lr(t / Zu);
      (e.moveTo(r, 0), e.arc(0, 0, r, 0, jc));
    },
  },
  g2 = {
    draw(e, t) {
      const r = lr(t / 5) / 2;
      (e.moveTo(-3 * r, -r),
        e.lineTo(-r, -r),
        e.lineTo(-r, -3 * r),
        e.lineTo(r, -3 * r),
        e.lineTo(r, -r),
        e.lineTo(3 * r, -r),
        e.lineTo(3 * r, r),
        e.lineTo(r, r),
        e.lineTo(r, 3 * r),
        e.lineTo(-r, 3 * r),
        e.lineTo(-r, r),
        e.lineTo(-3 * r, r),
        e.closePath());
    },
  },
  ES = lr(1 / 3),
  b2 = ES * 2,
  x2 = {
    draw(e, t) {
      const r = lr(t / b2),
        n = r * ES;
      (e.moveTo(0, -r),
        e.lineTo(n, 0),
        e.lineTo(0, r),
        e.lineTo(-n, 0),
        e.closePath());
    },
  },
  w2 = {
    draw(e, t) {
      const r = lr(t),
        n = -r / 2;
      e.rect(n, n, r, r);
    },
  },
  S2 = 0.8908130915292852,
  jS = Qu(Zu / 10) / Qu((7 * Zu) / 10),
  O2 = Qu(jc / 10) * jS,
  P2 = -xS(jc / 10) * jS,
  _2 = {
    draw(e, t) {
      const r = lr(t * S2),
        n = O2 * r,
        i = P2 * r;
      (e.moveTo(0, -r), e.lineTo(n, i));
      for (let a = 1; a < 5; ++a) {
        const o = (jc * a) / 5,
          l = xS(o),
          u = Qu(o);
        (e.lineTo(u * r, -l * r), e.lineTo(l * n - u * i, u * n + l * i));
      }
      e.closePath();
    },
  },
  Mf = lr(3),
  A2 = {
    draw(e, t) {
      const r = -lr(t / (Mf * 3));
      (e.moveTo(0, r * 2),
        e.lineTo(-Mf * r, -r),
        e.lineTo(Mf * r, -r),
        e.closePath());
    },
  },
  kt = -0.5,
  Mt = lr(3) / 2,
  sp = 1 / lr(12),
  E2 = (sp / 2 + 1) * 3,
  j2 = {
    draw(e, t) {
      const r = lr(t / E2),
        n = r / 2,
        i = r * sp,
        a = n,
        o = r * sp + r,
        l = -a,
        u = o;
      (e.moveTo(n, i),
        e.lineTo(a, o),
        e.lineTo(l, u),
        e.lineTo(kt * n - Mt * i, Mt * n + kt * i),
        e.lineTo(kt * a - Mt * o, Mt * a + kt * o),
        e.lineTo(kt * l - Mt * u, Mt * l + kt * u),
        e.lineTo(kt * n + Mt * i, kt * i - Mt * n),
        e.lineTo(kt * a + Mt * o, kt * o - Mt * a),
        e.lineTo(kt * l + Mt * u, kt * u - Mt * l),
        e.closePath());
    },
  };
function $2(e, t) {
  let r = null,
    n = Cv(i);
  ((e = typeof e == "function" ? e : he(e || Mv)),
    (t = typeof t == "function" ? t : he(t === void 0 ? 64 : +t)));
  function i() {
    let a;
    if (
      (r || (r = a = n()),
      e.apply(this, arguments).draw(r, +t.apply(this, arguments)),
      a)
    )
      return ((r = null), a + "" || null);
  }
  return (
    (i.type = function (a) {
      return arguments.length
        ? ((e = typeof a == "function" ? a : he(a)), i)
        : e;
    }),
    (i.size = function (a) {
      return arguments.length
        ? ((t = typeof a == "function" ? a : he(+a)), i)
        : t;
    }),
    (i.context = function (a) {
      return arguments.length ? ((r = a ?? null), i) : r;
    }),
    i
  );
}
function Ju() {}
function es(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6,
  );
}
function $S(e) {
  this._context = e;
}
$S.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        es(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        ((this._point = 3),
          this._context.lineTo(
            (5 * this._x0 + this._x1) / 6,
            (5 * this._y0 + this._y1) / 6,
          ));
      default:
        es(this, e, t);
        break;
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function T2(e) {
  return new $S(e);
}
function TS(e) {
  this._context = e;
}
TS.prototype = {
  areaStart: Ju,
  areaEnd: Ju,
  lineStart: function () {
    ((this._x0 =
      this._x1 =
      this._x2 =
      this._x3 =
      this._x4 =
      this._y0 =
      this._y1 =
      this._y2 =
      this._y3 =
      this._y4 =
        NaN),
      (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 1: {
        (this._context.moveTo(this._x2, this._y2), this._context.closePath());
        break;
      }
      case 2: {
        (this._context.moveTo(
          (this._x2 + 2 * this._x3) / 3,
          (this._y2 + 2 * this._y3) / 3,
        ),
          this._context.lineTo(
            (this._x3 + 2 * this._x2) / 3,
            (this._y3 + 2 * this._y2) / 3,
          ),
          this._context.closePath());
        break;
      }
      case 3: {
        (this.point(this._x2, this._y2),
          this.point(this._x3, this._y3),
          this.point(this._x4, this._y4));
        break;
      }
    }
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1), (this._x2 = e), (this._y2 = t));
        break;
      case 1:
        ((this._point = 2), (this._x3 = e), (this._y3 = t));
        break;
      case 2:
        ((this._point = 3),
          (this._x4 = e),
          (this._y4 = t),
          this._context.moveTo(
            (this._x0 + 4 * this._x1 + e) / 6,
            (this._y0 + 4 * this._y1 + t) / 6,
          ));
        break;
      default:
        es(this, e, t);
        break;
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function C2(e) {
  return new TS(e);
}
function CS(e) {
  this._context = e;
}
CS.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
  },
  lineEnd: function () {
    ((this._line || (this._line !== 0 && this._point === 3)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6,
          n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      default:
        es(this, e, t);
        break;
    }
    ((this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t));
  },
};
function k2(e) {
  return new CS(e);
}
function kS(e) {
  this._context = e;
}
kS.prototype = {
  areaStart: Ju,
  areaEnd: Ju,
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    this._point && this._context.closePath();
  },
  point: function (e, t) {
    ((e = +e),
      (t = +t),
      this._point
        ? this._context.lineTo(e, t)
        : ((this._point = 1), this._context.moveTo(e, t)));
  },
};
function M2(e) {
  return new kS(e);
}
function ig(e) {
  return e < 0 ? -1 : 1;
}
function ag(e, t, r) {
  var n = e._x1 - e._x0,
    i = t - e._x1,
    a = (e._y1 - e._y0) / (n || (i < 0 && -0)),
    o = (r - e._y1) / (i || (n < 0 && -0)),
    l = (a * i + o * n) / (n + i);
  return (
    (ig(a) + ig(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(l)) || 0
  );
}
function og(e, t) {
  var r = e._x1 - e._x0;
  return r ? ((3 * (e._y1 - e._y0)) / r - t) / 2 : t;
}
function Nf(e, t, r) {
  var n = e._x0,
    i = e._y0,
    a = e._x1,
    o = e._y1,
    l = (a - n) / 3;
  e._context.bezierCurveTo(n + l, i + l * t, a - l, o - l * r, a, o);
}
function ts(e) {
  this._context = e;
}
ts.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
      (this._point = 0));
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Nf(this, this._t0, og(this, this._t0));
        break;
    }
    ((this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line));
  },
  point: function (e, t) {
    var r = NaN;
    if (((e = +e), (t = +t), !(e === this._x1 && t === this._y1))) {
      switch (this._point) {
        case 0:
          ((this._point = 1),
            this._line
              ? this._context.lineTo(e, t)
              : this._context.moveTo(e, t));
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          ((this._point = 3), Nf(this, og(this, (r = ag(this, e, t))), r));
          break;
        default:
          Nf(this, this._t0, (r = ag(this, e, t)));
          break;
      }
      ((this._x0 = this._x1),
        (this._x1 = e),
        (this._y0 = this._y1),
        (this._y1 = t),
        (this._t0 = r));
    }
  },
};
function MS(e) {
  this._context = new NS(e);
}
(MS.prototype = Object.create(ts.prototype)).point = function (e, t) {
  ts.prototype.point.call(this, t, e);
};
function NS(e) {
  this._context = e;
}
NS.prototype = {
  moveTo: function (e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function () {
    this._context.closePath();
  },
  lineTo: function (e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function (e, t, r, n, i, a) {
    this._context.bezierCurveTo(t, e, n, r, a, i);
  },
};
function N2(e) {
  return new ts(e);
}
function I2(e) {
  return new MS(e);
}
function IS(e) {
  this._context = e;
}
IS.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x = []), (this._y = []));
  },
  lineEnd: function () {
    var e = this._x,
      t = this._y,
      r = e.length;
    if (r)
      if (
        (this._line
          ? this._context.lineTo(e[0], t[0])
          : this._context.moveTo(e[0], t[0]),
        r === 2)
      )
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = lg(e), i = lg(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(
            n[0][a],
            i[0][a],
            n[1][a],
            i[1][a],
            e[o],
            t[o],
          );
    ((this._line || (this._line !== 0 && r === 1)) && this._context.closePath(),
      (this._line = 1 - this._line),
      (this._x = this._y = null));
  },
  point: function (e, t) {
    (this._x.push(+e), this._y.push(+t));
  },
};
function lg(e) {
  var t,
    r = e.length - 1,
    n,
    i = new Array(r),
    a = new Array(r),
    o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t)
    ((i[t] = 1), (a[t] = 4), (o[t] = 4 * e[t] + 2 * e[t + 1]));
  for (
    i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1;
    t < r;
    ++t
  )
    ((n = i[t] / a[t - 1]), (a[t] -= n), (o[t] -= n * o[t - 1]));
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t)
    i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t)
    a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function D2(e) {
  return new IS(e);
}
function Tc(e, t) {
  ((this._context = e), (this._t = t));
}
Tc.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    ((this._x = this._y = NaN), (this._point = 0));
  },
  lineEnd: function () {
    (0 < this._t &&
      this._t < 1 &&
      this._point === 2 &&
      this._context.lineTo(this._x, this._y),
      (this._line || (this._line !== 0 && this._point === 1)) &&
        this._context.closePath(),
      this._line >= 0 &&
        ((this._t = 1 - this._t), (this._line = 1 - this._line)));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        ((this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          (this._context.lineTo(this._x, t), this._context.lineTo(e, t));
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          (this._context.lineTo(r, this._y), this._context.lineTo(r, t));
        }
        break;
      }
    }
    ((this._x = e), (this._y = t));
  },
};
function L2(e) {
  return new Tc(e, 0.5);
}
function R2(e) {
  return new Tc(e, 0);
}
function F2(e) {
  return new Tc(e, 1);
}
function Ui(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, l = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < l; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function cp(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function B2(e, t) {
  return e[t];
}
function z2(e) {
  const t = [];
  return ((t.key = e), t);
}
function U2() {
  var e = he([]),
    t = cp,
    r = Ui,
    n = B2;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), z2),
      l,
      u = o.length,
      s = -1,
      f;
    for (const c of a)
      for (l = 0, ++s; l < u; ++l)
        (o[l][s] = [0, +n(c, o[l].key, s, a)]).data = c;
    for (l = 0, f = kv(t(o)); l < u; ++l) o[f[l]].index = l;
    return (r(o, f), o);
  }
  return (
    (i.keys = function (a) {
      return arguments.length
        ? ((e = typeof a == "function" ? a : he(Array.from(a))), i)
        : e;
    }),
    (i.value = function (a) {
      return arguments.length
        ? ((n = typeof a == "function" ? a : he(+a)), i)
        : n;
    }),
    (i.order = function (a) {
      return arguments.length
        ? ((t =
            a == null ? cp : typeof a == "function" ? a : he(Array.from(a))),
          i)
        : t;
    }),
    (i.offset = function (a) {
      return arguments.length ? ((r = a ?? Ui), i) : r;
    }),
    i
  );
}
function W2(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
    }
    Ui(e, t);
  }
}
function H2(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, l = 0; o < i; ++o) l += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -l / 2;
    }
    Ui(e, t);
  }
}
function V2(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var l = 0, u = 0, s = 0; l < o; ++l) {
        for (
          var f = e[t[l]],
            c = f[n][1] || 0,
            d = f[n - 1][1] || 0,
            p = (c - d) / 2,
            m = 0;
          m < l;
          ++m
        ) {
          var y = e[t[m]],
            x = y[n][1] || 0,
            v = y[n - 1][1] || 0;
          p += x - v;
        }
        ((u += c), (s += p * c));
      }
      ((i[n - 1][1] += i[n - 1][0] = r), u && (r -= s / u));
    }
    ((i[n - 1][1] += i[n - 1][0] = r), Ui(e, t));
  }
}
function Co(e) {
  "@babel/helpers - typeof";
  return (
    (Co =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Co(e)
  );
}
var K2 = ["type", "size", "sizeType"];
function fp() {
  return (
    (fp = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    fp.apply(this, arguments)
  );
}
function ug(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function sg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ug(Object(r), !0).forEach(function (n) {
          G2(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ug(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function G2(e, t, r) {
  return (
    (t = q2(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function q2(e) {
  var t = X2(e, "string");
  return Co(t) == "symbol" ? t : t + "";
}
function X2(e, t) {
  if (Co(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Co(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Y2(e, t) {
  if (e == null) return {};
  var r = Q2(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function Q2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var DS = {
    symbolCircle: Mv,
    symbolCross: g2,
    symbolDiamond: x2,
    symbolSquare: w2,
    symbolStar: _2,
    symbolTriangle: A2,
    symbolWye: j2,
  },
  Z2 = Math.PI / 180,
  J2 = function (t) {
    var r = "symbol".concat(Ec(t));
    return DS[r] || Mv;
  },
  eM = function (t, r, n) {
    if (r === "area") return t;
    switch (n) {
      case "cross":
        return (5 * t * t) / 9;
      case "diamond":
        return (0.5 * t * t) / Math.sqrt(3);
      case "square":
        return t * t;
      case "star": {
        var i = 18 * Z2;
        return (
          1.25 *
          t *
          t *
          (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2))
        );
      }
      case "triangle":
        return (Math.sqrt(3) * t * t) / 4;
      case "wye":
        return ((21 - 10 * Math.sqrt(3)) * t * t) / 8;
      default:
        return (Math.PI * t * t) / 4;
    }
  },
  tM = function (t, r) {
    DS["symbol".concat(Ec(t))] = r;
  },
  Nv = function (t) {
    var r = t.type,
      n = r === void 0 ? "circle" : r,
      i = t.size,
      a = i === void 0 ? 64 : i,
      o = t.sizeType,
      l = o === void 0 ? "area" : o,
      u = Y2(t, K2),
      s = sg(sg({}, u), {}, { type: n, size: a, sizeType: l }),
      f = function () {
        var x = J2(n),
          v = $2()
            .type(x)
            .size(eM(a, l, n));
        return v();
      },
      c = s.className,
      d = s.cx,
      p = s.cy,
      m = re(s, !0);
    return d === +d && p === +p && a === +a
      ? E.createElement(
          "path",
          fp({}, m, {
            className: oe("recharts-symbols", c),
            transform: "translate(".concat(d, ", ").concat(p, ")"),
            d: f(),
          }),
        )
      : null;
  };
Nv.registerSymbol = tM;
function Wi(e) {
  "@babel/helpers - typeof";
  return (
    (Wi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Wi(e)
  );
}
function dp() {
  return (
    (dp = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    dp.apply(this, arguments)
  );
}
function cg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function rM(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? cg(Object(r), !0).forEach(function (n) {
          ko(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : cg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function nM(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function iM(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, RS(n.key), n));
  }
}
function aM(e, t, r) {
  return (
    t && iM(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function oM(e, t, r) {
  return (
    (t = rs(t)),
    lM(
      e,
      LS() ? Reflect.construct(t, r || [], rs(e).constructor) : t.apply(e, r),
    )
  );
}
function lM(e, t) {
  if (t && (Wi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return uM(e);
}
function uM(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function LS() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (LS = function () {
    return !!e;
  })();
}
function rs(e) {
  return (
    (rs = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    rs(e)
  );
}
function sM(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && pp(e, t));
}
function pp(e, t) {
  return (
    (pp = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    pp(e, t)
  );
}
function ko(e, t, r) {
  return (
    (t = RS(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function RS(e) {
  var t = cM(e, "string");
  return Wi(t) == "symbol" ? t : t + "";
}
function cM(e, t) {
  if (Wi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Wi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Nt = 32,
  Iv = (function (e) {
    function t() {
      return (nM(this, t), oM(this, t, arguments));
    }
    return (
      sM(t, e),
      aM(t, [
        {
          key: "renderIcon",
          value: function (n) {
            var i = this.props.inactiveColor,
              a = Nt / 2,
              o = Nt / 6,
              l = Nt / 3,
              u = n.inactive ? i : n.color;
            if (n.type === "plainline")
              return E.createElement("line", {
                strokeWidth: 4,
                fill: "none",
                stroke: u,
                strokeDasharray: n.payload.strokeDasharray,
                x1: 0,
                y1: a,
                x2: Nt,
                y2: a,
                className: "recharts-legend-icon",
              });
            if (n.type === "line")
              return E.createElement("path", {
                strokeWidth: 4,
                fill: "none",
                stroke: u,
                d: "M0,"
                  .concat(a, "h")
                  .concat(
                    l,
                    `
            A`,
                  )
                  .concat(o, ",")
                  .concat(o, ",0,1,1,")
                  .concat(2 * l, ",")
                  .concat(
                    a,
                    `
            H`,
                  )
                  .concat(Nt, "M")
                  .concat(2 * l, ",")
                  .concat(
                    a,
                    `
            A`,
                  )
                  .concat(o, ",")
                  .concat(o, ",0,1,1,")
                  .concat(l, ",")
                  .concat(a),
                className: "recharts-legend-icon",
              });
            if (n.type === "rect")
              return E.createElement("path", {
                stroke: "none",
                fill: u,
                d: "M0,"
                  .concat(Nt / 8, "h")
                  .concat(Nt, "v")
                  .concat((Nt * 3) / 4, "h")
                  .concat(-Nt, "z"),
                className: "recharts-legend-icon",
              });
            if (E.isValidElement(n.legendIcon)) {
              var s = rM({}, n);
              return (delete s.legendIcon, E.cloneElement(n.legendIcon, s));
            }
            return E.createElement(Nv, {
              fill: u,
              cx: a,
              cy: a,
              size: Nt,
              sizeType: "diameter",
              type: n.type,
            });
          },
        },
        {
          key: "renderItems",
          value: function () {
            var n = this,
              i = this.props,
              a = i.payload,
              o = i.iconSize,
              l = i.layout,
              u = i.formatter,
              s = i.inactiveColor,
              f = { x: 0, y: 0, width: Nt, height: Nt },
              c = {
                display: l === "horizontal" ? "inline-block" : "block",
                marginRight: 10,
              },
              d = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4,
              };
            return a.map(function (p, m) {
              var y = p.formatter || u,
                x = oe(
                  ko(
                    ko(
                      { "recharts-legend-item": !0 },
                      "legend-item-".concat(m),
                      !0,
                    ),
                    "inactive",
                    p.inactive,
                  ),
                );
              if (p.type === "none") return null;
              var v = J(p.value) ? null : p.value;
              jr(
                !J(p.value),
                `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`,
              );
              var h = p.inactive ? s : p.color;
              return E.createElement(
                "li",
                dp(
                  { className: x, style: c, key: "legend-item-".concat(m) },
                  Yu(n.props, p, m),
                ),
                E.createElement(
                  np,
                  { width: o, height: o, viewBox: f, style: d },
                  n.renderIcon(p),
                ),
                E.createElement(
                  "span",
                  {
                    className: "recharts-legend-item-text",
                    style: { color: h },
                  },
                  y ? y(v, p, m) : v,
                ),
              );
            });
          },
        },
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.payload,
              a = n.layout,
              o = n.align;
            if (!i || !i.length) return null;
            var l = {
              padding: 0,
              margin: 0,
              textAlign: a === "horizontal" ? o : "left",
            };
            return E.createElement(
              "ul",
              { className: "recharts-default-legend", style: l },
              this.renderItems(),
            );
          },
        },
      ])
    );
  })(B.PureComponent);
ko(Iv, "displayName", "Legend");
ko(Iv, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc",
});
var fM = hc;
function dM() {
  ((this.__data__ = new fM()), (this.size = 0));
}
var pM = dM;
function hM(e) {
  var t = this.__data__,
    r = t.delete(e);
  return ((this.size = t.size), r);
}
var vM = hM;
function mM(e) {
  return this.__data__.get(e);
}
var yM = mM;
function gM(e) {
  return this.__data__.has(e);
}
var bM = gM,
  xM = hc,
  wM = Sv,
  SM = Ov,
  OM = 200;
function PM(e, t) {
  var r = this.__data__;
  if (r instanceof xM) {
    var n = r.__data__;
    if (!wM || n.length < OM - 1)
      return (n.push([e, t]), (this.size = ++r.size), this);
    r = this.__data__ = new SM(n);
  }
  return (r.set(e, t), (this.size = r.size), this);
}
var _M = PM,
  AM = hc,
  EM = pM,
  jM = vM,
  $M = yM,
  TM = bM,
  CM = _M;
function ba(e) {
  var t = (this.__data__ = new AM(e));
  this.size = t.size;
}
ba.prototype.clear = EM;
ba.prototype.delete = jM;
ba.prototype.get = $M;
ba.prototype.has = TM;
ba.prototype.set = CM;
var FS = ba,
  kM = "__lodash_hash_undefined__";
function MM(e) {
  return (this.__data__.set(e, kM), this);
}
var NM = MM;
function IM(e) {
  return this.__data__.has(e);
}
var DM = IM,
  LM = Ov,
  RM = NM,
  FM = DM;
function ns(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.__data__ = new LM(); ++t < r; ) this.add(e[t]);
}
ns.prototype.add = ns.prototype.push = RM;
ns.prototype.has = FM;
var BS = ns;
function BM(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e)) return !0;
  return !1;
}
var zS = BM;
function zM(e, t) {
  return e.has(t);
}
var US = zM,
  UM = BS,
  WM = zS,
  HM = US,
  VM = 1,
  KM = 2;
function GM(e, t, r, n, i, a) {
  var o = r & VM,
    l = e.length,
    u = t.length;
  if (l != u && !(o && u > l)) return !1;
  var s = a.get(e),
    f = a.get(t);
  if (s && f) return s == t && f == e;
  var c = -1,
    d = !0,
    p = r & KM ? new UM() : void 0;
  for (a.set(e, t), a.set(t, e); ++c < l; ) {
    var m = e[c],
      y = t[c];
    if (n) var x = o ? n(y, m, c, t, e, a) : n(m, y, c, e, t, a);
    if (x !== void 0) {
      if (x) continue;
      d = !1;
      break;
    }
    if (p) {
      if (
        !WM(t, function (v, h) {
          if (!HM(p, h) && (m === v || i(m, v, r, n, a))) return p.push(h);
        })
      ) {
        d = !1;
        break;
      }
    } else if (!(m === y || i(m, y, r, n, a))) {
      d = !1;
      break;
    }
  }
  return (a.delete(e), a.delete(t), d);
}
var WS = GM,
  qM = yr,
  XM = qM.Uint8Array,
  YM = XM;
function QM(e) {
  var t = -1,
    r = Array(e.size);
  return (
    e.forEach(function (n, i) {
      r[++t] = [i, n];
    }),
    r
  );
}
var ZM = QM;
function JM(e) {
  var t = -1,
    r = Array(e.size);
  return (
    e.forEach(function (n) {
      r[++t] = n;
    }),
    r
  );
}
var Dv = JM,
  fg = bl,
  dg = YM,
  eN = wv,
  tN = WS,
  rN = ZM,
  nN = Dv,
  iN = 1,
  aN = 2,
  oN = "[object Boolean]",
  lN = "[object Date]",
  uN = "[object Error]",
  sN = "[object Map]",
  cN = "[object Number]",
  fN = "[object RegExp]",
  dN = "[object Set]",
  pN = "[object String]",
  hN = "[object Symbol]",
  vN = "[object ArrayBuffer]",
  mN = "[object DataView]",
  pg = fg ? fg.prototype : void 0,
  If = pg ? pg.valueOf : void 0;
function yN(e, t, r, n, i, a, o) {
  switch (r) {
    case mN:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      ((e = e.buffer), (t = t.buffer));
    case vN:
      return !(e.byteLength != t.byteLength || !a(new dg(e), new dg(t)));
    case oN:
    case lN:
    case cN:
      return eN(+e, +t);
    case uN:
      return e.name == t.name && e.message == t.message;
    case fN:
    case pN:
      return e == t + "";
    case sN:
      var l = rN;
    case dN:
      var u = n & iN;
      if ((l || (l = nN), e.size != t.size && !u)) return !1;
      var s = o.get(e);
      if (s) return s == t;
      ((n |= aN), o.set(e, t));
      var f = tN(l(e), l(t), n, i, a, o);
      return (o.delete(e), f);
    case hN:
      if (If) return If.call(e) == If.call(t);
  }
  return !1;
}
var gN = yN;
function bN(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
  return e;
}
var HS = bN,
  xN = HS,
  wN = bt;
function SN(e, t, r) {
  var n = t(e);
  return wN(e) ? n : xN(n, r(e));
}
var ON = SN;
function PN(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (a[i++] = o);
  }
  return a;
}
var _N = PN;
function AN() {
  return [];
}
var EN = AN,
  jN = _N,
  $N = EN,
  TN = Object.prototype,
  CN = TN.propertyIsEnumerable,
  hg = Object.getOwnPropertySymbols,
  kN = hg
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            jN(hg(e), function (t) {
              return CN.call(e, t);
            }));
      }
    : $N,
  MN = kN;
function NN(e, t) {
  for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
  return n;
}
var IN = NN,
  DN = Fr,
  LN = Br,
  RN = "[object Arguments]";
function FN(e) {
  return LN(e) && DN(e) == RN;
}
var BN = FN,
  vg = BN,
  zN = Br,
  VS = Object.prototype,
  UN = VS.hasOwnProperty,
  WN = VS.propertyIsEnumerable,
  HN = vg(
    (function () {
      return arguments;
    })(),
  )
    ? vg
    : function (e) {
        return zN(e) && UN.call(e, "callee") && !WN.call(e, "callee");
      },
  Lv = HN,
  is = { exports: {} };
function VN() {
  return !1;
}
var KN = VN;
is.exports;
(function (e, t) {
  var r = yr,
    n = KN,
    i = t && !t.nodeType && t,
    a = i && !0 && e && !e.nodeType && e,
    o = a && a.exports === i,
    l = o ? r.Buffer : void 0,
    u = l ? l.isBuffer : void 0,
    s = u || n;
  e.exports = s;
})(is, is.exports);
var KS = is.exports,
  GN = 9007199254740991,
  qN = /^(?:0|[1-9]\d*)$/;
function XN(e, t) {
  var r = typeof e;
  return (
    (t = t ?? GN),
    !!t &&
      (r == "number" || (r != "symbol" && qN.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
  );
}
var Rv = XN,
  YN = 9007199254740991;
function QN(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= YN;
}
var Fv = QN,
  ZN = Fr,
  JN = Fv,
  eI = Br,
  tI = "[object Arguments]",
  rI = "[object Array]",
  nI = "[object Boolean]",
  iI = "[object Date]",
  aI = "[object Error]",
  oI = "[object Function]",
  lI = "[object Map]",
  uI = "[object Number]",
  sI = "[object Object]",
  cI = "[object RegExp]",
  fI = "[object Set]",
  dI = "[object String]",
  pI = "[object WeakMap]",
  hI = "[object ArrayBuffer]",
  vI = "[object DataView]",
  mI = "[object Float32Array]",
  yI = "[object Float64Array]",
  gI = "[object Int8Array]",
  bI = "[object Int16Array]",
  xI = "[object Int32Array]",
  wI = "[object Uint8Array]",
  SI = "[object Uint8ClampedArray]",
  OI = "[object Uint16Array]",
  PI = "[object Uint32Array]",
  ye = {};
ye[mI] =
  ye[yI] =
  ye[gI] =
  ye[bI] =
  ye[xI] =
  ye[wI] =
  ye[SI] =
  ye[OI] =
  ye[PI] =
    !0;
ye[tI] =
  ye[rI] =
  ye[hI] =
  ye[nI] =
  ye[vI] =
  ye[iI] =
  ye[aI] =
  ye[oI] =
  ye[lI] =
  ye[uI] =
  ye[sI] =
  ye[cI] =
  ye[fI] =
  ye[dI] =
  ye[pI] =
    !1;
function _I(e) {
  return eI(e) && JN(e.length) && !!ye[ZN(e)];
}
var AI = _I;
function EI(e) {
  return function (t) {
    return e(t);
  };
}
var GS = EI,
  as = { exports: {} };
as.exports;
(function (e, t) {
  var r = tS,
    n = t && !t.nodeType && t,
    i = n && !0 && e && !e.nodeType && e,
    a = i && i.exports === n,
    o = a && r.process,
    l = (function () {
      try {
        var u = i && i.require && i.require("util").types;
        return u || (o && o.binding && o.binding("util"));
      } catch {}
    })();
  e.exports = l;
})(as, as.exports);
var jI = as.exports,
  $I = AI,
  TI = GS,
  mg = jI,
  yg = mg && mg.isTypedArray,
  CI = yg ? TI(yg) : $I,
  qS = CI,
  kI = IN,
  MI = Lv,
  NI = bt,
  II = KS,
  DI = Rv,
  LI = qS,
  RI = Object.prototype,
  FI = RI.hasOwnProperty;
function BI(e, t) {
  var r = NI(e),
    n = !r && MI(e),
    i = !r && !n && II(e),
    a = !r && !n && !i && LI(e),
    o = r || n || i || a,
    l = o ? kI(e.length, String) : [],
    u = l.length;
  for (var s in e)
    (t || FI.call(e, s)) &&
      !(
        o &&
        (s == "length" ||
          (i && (s == "offset" || s == "parent")) ||
          (a && (s == "buffer" || s == "byteLength" || s == "byteOffset")) ||
          DI(s, u))
      ) &&
      l.push(s);
  return l;
}
var zI = BI,
  UI = Object.prototype;
function WI(e) {
  var t = e && e.constructor,
    r = (typeof t == "function" && t.prototype) || UI;
  return e === r;
}
var HI = WI;
function VI(e, t) {
  return function (r) {
    return e(t(r));
  };
}
var XS = VI,
  KI = XS,
  GI = KI(Object.keys, Object),
  qI = GI,
  XI = HI,
  YI = qI,
  QI = Object.prototype,
  ZI = QI.hasOwnProperty;
function JI(e) {
  if (!XI(e)) return YI(e);
  var t = [];
  for (var r in Object(e)) ZI.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var eD = JI,
  tD = xv,
  rD = Fv;
function nD(e) {
  return e != null && rD(e.length) && !tD(e);
}
var Sl = nD,
  iD = zI,
  aD = eD,
  oD = Sl;
function lD(e) {
  return oD(e) ? iD(e) : aD(e);
}
var Cc = lD,
  uD = ON,
  sD = MN,
  cD = Cc;
function fD(e) {
  return uD(e, cD, sD);
}
var dD = fD,
  gg = dD,
  pD = 1,
  hD = Object.prototype,
  vD = hD.hasOwnProperty;
function mD(e, t, r, n, i, a) {
  var o = r & pD,
    l = gg(e),
    u = l.length,
    s = gg(t),
    f = s.length;
  if (u != f && !o) return !1;
  for (var c = u; c--; ) {
    var d = l[c];
    if (!(o ? d in t : vD.call(t, d))) return !1;
  }
  var p = a.get(e),
    m = a.get(t);
  if (p && m) return p == t && m == e;
  var y = !0;
  (a.set(e, t), a.set(t, e));
  for (var x = o; ++c < u; ) {
    d = l[c];
    var v = e[d],
      h = t[d];
    if (n) var g = o ? n(h, v, d, t, e, a) : n(v, h, d, e, t, a);
    if (!(g === void 0 ? v === h || i(v, h, r, n, a) : g)) {
      y = !1;
      break;
    }
    x || (x = d == "constructor");
  }
  if (y && !x) {
    var S = e.constructor,
      b = t.constructor;
    S != b &&
      "constructor" in e &&
      "constructor" in t &&
      !(
        typeof S == "function" &&
        S instanceof S &&
        typeof b == "function" &&
        b instanceof b
      ) &&
      (y = !1);
  }
  return (a.delete(e), a.delete(t), y);
}
var yD = mD,
  gD = Jn,
  bD = yr,
  xD = gD(bD, "DataView"),
  wD = xD,
  SD = Jn,
  OD = yr,
  PD = SD(OD, "Promise"),
  _D = PD,
  AD = Jn,
  ED = yr,
  jD = AD(ED, "Set"),
  YS = jD,
  $D = Jn,
  TD = yr,
  CD = $D(TD, "WeakMap"),
  kD = CD,
  hp = wD,
  vp = Sv,
  mp = _D,
  yp = YS,
  gp = kD,
  QS = Fr,
  xa = nS,
  bg = "[object Map]",
  MD = "[object Object]",
  xg = "[object Promise]",
  wg = "[object Set]",
  Sg = "[object WeakMap]",
  Og = "[object DataView]",
  ND = xa(hp),
  ID = xa(vp),
  DD = xa(mp),
  LD = xa(yp),
  RD = xa(gp),
  jn = QS;
((hp && jn(new hp(new ArrayBuffer(1))) != Og) ||
  (vp && jn(new vp()) != bg) ||
  (mp && jn(mp.resolve()) != xg) ||
  (yp && jn(new yp()) != wg) ||
  (gp && jn(new gp()) != Sg)) &&
  (jn = function (e) {
    var t = QS(e),
      r = t == MD ? e.constructor : void 0,
      n = r ? xa(r) : "";
    if (n)
      switch (n) {
        case ND:
          return Og;
        case ID:
          return bg;
        case DD:
          return xg;
        case LD:
          return wg;
        case RD:
          return Sg;
      }
    return t;
  });
var FD = jn,
  Df = FS,
  BD = WS,
  zD = gN,
  UD = yD,
  Pg = FD,
  _g = bt,
  Ag = KS,
  WD = qS,
  HD = 1,
  Eg = "[object Arguments]",
  jg = "[object Array]",
  Zl = "[object Object]",
  VD = Object.prototype,
  $g = VD.hasOwnProperty;
function KD(e, t, r, n, i, a) {
  var o = _g(e),
    l = _g(t),
    u = o ? jg : Pg(e),
    s = l ? jg : Pg(t);
  ((u = u == Eg ? Zl : u), (s = s == Eg ? Zl : s));
  var f = u == Zl,
    c = s == Zl,
    d = u == s;
  if (d && Ag(e)) {
    if (!Ag(t)) return !1;
    ((o = !0), (f = !1));
  }
  if (d && !f)
    return (
      a || (a = new Df()),
      o || WD(e) ? BD(e, t, r, n, i, a) : zD(e, t, u, r, n, i, a)
    );
  if (!(r & HD)) {
    var p = f && $g.call(e, "__wrapped__"),
      m = c && $g.call(t, "__wrapped__");
    if (p || m) {
      var y = p ? e.value() : e,
        x = m ? t.value() : t;
      return (a || (a = new Df()), i(y, x, r, n, a));
    }
  }
  return d ? (a || (a = new Df()), UD(e, t, r, n, i, a)) : !1;
}
var GD = KD,
  qD = GD,
  Tg = Br;
function ZS(e, t, r, n, i) {
  return e === t
    ? !0
    : e == null || t == null || (!Tg(e) && !Tg(t))
      ? e !== e && t !== t
      : qD(e, t, r, n, ZS, i);
}
var Bv = ZS,
  XD = FS,
  YD = Bv,
  QD = 1,
  ZD = 2;
function JD(e, t, r, n) {
  var i = r.length,
    a = i,
    o = !n;
  if (e == null) return !a;
  for (e = Object(e); i--; ) {
    var l = r[i];
    if (o && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1;
  }
  for (; ++i < a; ) {
    l = r[i];
    var u = l[0],
      s = e[u],
      f = l[1];
    if (o && l[2]) {
      if (s === void 0 && !(u in e)) return !1;
    } else {
      var c = new XD();
      if (n) var d = n(s, f, u, e, t, c);
      if (!(d === void 0 ? YD(f, s, QD | ZD, n, c) : d)) return !1;
    }
  }
  return !0;
}
var eL = JD,
  tL = yn;
function rL(e) {
  return e === e && !tL(e);
}
var JS = rL,
  nL = JS,
  iL = Cc;
function aL(e) {
  for (var t = iL(e), r = t.length; r--; ) {
    var n = t[r],
      i = e[n];
    t[r] = [n, i, nL(i)];
  }
  return t;
}
var oL = aL;
function lL(e, t) {
  return function (r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var eO = lL,
  uL = eL,
  sL = oL,
  cL = eO;
function fL(e) {
  var t = sL(e);
  return t.length == 1 && t[0][2]
    ? cL(t[0][0], t[0][1])
    : function (r) {
        return r === e || uL(r, e, t);
      };
}
var dL = fL;
function pL(e, t) {
  return e != null && t in Object(e);
}
var hL = pL,
  vL = uS,
  mL = Lv,
  yL = bt,
  gL = Rv,
  bL = Fv,
  xL = mc;
function wL(e, t, r) {
  t = vL(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var o = xL(t[n]);
    if (!(a = e != null && r(e, o))) break;
    e = e[o];
  }
  return a || ++n != i
    ? a
    : ((i = e == null ? 0 : e.length),
      !!i && bL(i) && gL(o, i) && (yL(e) || mL(e)));
}
var SL = wL,
  OL = hL,
  PL = SL;
function _L(e, t) {
  return e != null && PL(e, t, OL);
}
var AL = _L,
  EL = Bv,
  jL = sS,
  $L = AL,
  TL = bv,
  CL = JS,
  kL = eO,
  ML = mc,
  NL = 1,
  IL = 2;
function DL(e, t) {
  return TL(e) && CL(t)
    ? kL(ML(e), t)
    : function (r) {
        var n = jL(r, e);
        return n === void 0 && n === t ? $L(r, e) : EL(t, n, NL | IL);
      };
}
var LL = DL;
function RL(e) {
  return e;
}
var wa = RL;
function FL(e) {
  return function (t) {
    return t == null ? void 0 : t[e];
  };
}
var BL = FL,
  zL = Av;
function UL(e) {
  return function (t) {
    return zL(t, e);
  };
}
var WL = UL,
  HL = BL,
  VL = WL,
  KL = bv,
  GL = mc;
function qL(e) {
  return KL(e) ? HL(GL(e)) : VL(e);
}
var XL = qL,
  YL = dL,
  QL = LL,
  ZL = wa,
  JL = bt,
  eR = XL;
function tR(e) {
  return typeof e == "function"
    ? e
    : e == null
      ? ZL
      : typeof e == "object"
        ? JL(e)
          ? QL(e[0], e[1])
          : YL(e)
        : eR(e);
}
var gn = tR;
function rR(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
    if (t(e[a], a, e)) return a;
  return -1;
}
var tO = rR;
function nR(e) {
  return e !== e;
}
var iR = nR;
function aR(e, t, r) {
  for (var n = r - 1, i = e.length; ++n < i; ) if (e[n] === t) return n;
  return -1;
}
var oR = aR,
  lR = tO,
  uR = iR,
  sR = oR;
function cR(e, t, r) {
  return t === t ? sR(e, t, r) : lR(e, uR, r);
}
var fR = cR,
  dR = fR;
function pR(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && dR(e, t, 0) > -1;
}
var hR = pR;
function vR(e, t, r) {
  for (var n = -1, i = e == null ? 0 : e.length; ++n < i; )
    if (r(t, e[n])) return !0;
  return !1;
}
var mR = vR;
function yR() {}
var gR = yR,
  Lf = YS,
  bR = gR,
  xR = Dv,
  wR = 1 / 0,
  SR =
    Lf && 1 / xR(new Lf([, -0]))[1] == wR
      ? function (e) {
          return new Lf(e);
        }
      : bR,
  OR = SR,
  PR = BS,
  _R = hR,
  AR = mR,
  ER = US,
  jR = OR,
  $R = Dv,
  TR = 200;
function CR(e, t, r) {
  var n = -1,
    i = _R,
    a = e.length,
    o = !0,
    l = [],
    u = l;
  if (r) ((o = !1), (i = AR));
  else if (a >= TR) {
    var s = t ? null : jR(e);
    if (s) return $R(s);
    ((o = !1), (i = ER), (u = new PR()));
  } else u = t ? [] : l;
  e: for (; ++n < a; ) {
    var f = e[n],
      c = t ? t(f) : f;
    if (((f = r || f !== 0 ? f : 0), o && c === c)) {
      for (var d = u.length; d--; ) if (u[d] === c) continue e;
      (t && u.push(c), l.push(f));
    } else i(u, c, r) || (u !== l && u.push(c), l.push(f));
  }
  return l;
}
var kR = CR,
  MR = gn,
  NR = kR;
function IR(e, t) {
  return e && e.length ? NR(e, MR(t)) : [];
}
var DR = IR;
const Cg = pe(DR);
function rO(e, t, r) {
  return t === !0 ? Cg(e, r) : J(t) ? Cg(e, t) : e;
}
function Hi(e) {
  "@babel/helpers - typeof";
  return (
    (Hi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Hi(e)
  );
}
var LR = ["ref"];
function kg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function gr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? kg(Object(r), !0).forEach(function (n) {
          kc(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : kg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function RR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Mg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, iO(n.key), n));
  }
}
function FR(e, t, r) {
  return (
    t && Mg(e.prototype, t),
    r && Mg(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function BR(e, t, r) {
  return (
    (t = os(t)),
    zR(
      e,
      nO() ? Reflect.construct(t, r || [], os(e).constructor) : t.apply(e, r),
    )
  );
}
function zR(e, t) {
  if (t && (Hi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return UR(e);
}
function UR(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function nO() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (nO = function () {
    return !!e;
  })();
}
function os(e) {
  return (
    (os = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    os(e)
  );
}
function WR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && bp(e, t));
}
function bp(e, t) {
  return (
    (bp = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    bp(e, t)
  );
}
function kc(e, t, r) {
  return (
    (t = iO(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function iO(e) {
  var t = HR(e, "string");
  return Hi(t) == "symbol" ? t : t + "";
}
function HR(e, t) {
  if (Hi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Hi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function VR(e, t) {
  if (e == null) return {};
  var r = KR(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function KR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function GR(e) {
  return e.value;
}
function qR(e, t) {
  if (E.isValidElement(e)) return E.cloneElement(e, t);
  if (typeof e == "function") return E.createElement(e, t);
  t.ref;
  var r = VR(t, LR);
  return E.createElement(Iv, r);
}
var Ng = 1,
  ki = (function (e) {
    function t() {
      var r;
      RR(this, t);
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
        i[a] = arguments[a];
      return (
        (r = BR(this, t, [].concat(i))),
        kc(r, "lastBoundingBox", { width: -1, height: -1 }),
        r
      );
    }
    return (
      WR(t, e),
      FR(
        t,
        [
          {
            key: "componentDidMount",
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: "componentDidUpdate",
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: "getBBox",
            value: function () {
              if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                var n = this.wrapperNode.getBoundingClientRect();
                return (
                  (n.height = this.wrapperNode.offsetHeight),
                  (n.width = this.wrapperNode.offsetWidth),
                  n
                );
              }
              return null;
            },
          },
          {
            key: "updateBBox",
            value: function () {
              var n = this.props.onBBoxUpdate,
                i = this.getBBox();
              i
                ? (Math.abs(i.width - this.lastBoundingBox.width) > Ng ||
                    Math.abs(i.height - this.lastBoundingBox.height) > Ng) &&
                  ((this.lastBoundingBox.width = i.width),
                  (this.lastBoundingBox.height = i.height),
                  n && n(i))
                : (this.lastBoundingBox.width !== -1 ||
                    this.lastBoundingBox.height !== -1) &&
                  ((this.lastBoundingBox.width = -1),
                  (this.lastBoundingBox.height = -1),
                  n && n(null));
            },
          },
          {
            key: "getBBoxSnapshot",
            value: function () {
              return this.lastBoundingBox.width >= 0 &&
                this.lastBoundingBox.height >= 0
                ? gr({}, this.lastBoundingBox)
                : { width: 0, height: 0 };
            },
          },
          {
            key: "getDefaultPosition",
            value: function (n) {
              var i = this.props,
                a = i.layout,
                o = i.align,
                l = i.verticalAlign,
                u = i.margin,
                s = i.chartWidth,
                f = i.chartHeight,
                c,
                d;
              if (
                !n ||
                ((n.left === void 0 || n.left === null) &&
                  (n.right === void 0 || n.right === null))
              )
                if (o === "center" && a === "vertical") {
                  var p = this.getBBoxSnapshot();
                  c = { left: ((s || 0) - p.width) / 2 };
                } else
                  c =
                    o === "right"
                      ? { right: (u && u.right) || 0 }
                      : { left: (u && u.left) || 0 };
              if (
                !n ||
                ((n.top === void 0 || n.top === null) &&
                  (n.bottom === void 0 || n.bottom === null))
              )
                if (l === "middle") {
                  var m = this.getBBoxSnapshot();
                  d = { top: ((f || 0) - m.height) / 2 };
                } else
                  d =
                    l === "bottom"
                      ? { bottom: (u && u.bottom) || 0 }
                      : { top: (u && u.top) || 0 };
              return gr(gr({}, c), d);
            },
          },
          {
            key: "render",
            value: function () {
              var n = this,
                i = this.props,
                a = i.content,
                o = i.width,
                l = i.height,
                u = i.wrapperStyle,
                s = i.payloadUniqBy,
                f = i.payload,
                c = gr(
                  gr(
                    {
                      position: "absolute",
                      width: o || "auto",
                      height: l || "auto",
                    },
                    this.getDefaultPosition(u),
                  ),
                  u,
                );
              return E.createElement(
                "div",
                {
                  className: "recharts-legend-wrapper",
                  style: c,
                  ref: function (p) {
                    n.wrapperNode = p;
                  },
                },
                qR(a, gr(gr({}, this.props), {}, { payload: rO(f, s, GR) })),
              );
            },
          },
        ],
        [
          {
            key: "getWithHeight",
            value: function (n, i) {
              var a = gr(gr({}, this.defaultProps), n.props),
                o = a.layout;
              return o === "vertical" && H(n.props.height)
                ? { height: n.props.height }
                : o === "horizontal"
                  ? { width: n.props.width || i }
                  : null;
            },
          },
        ],
      )
    );
  })(B.PureComponent);
kc(ki, "displayName", "Legend");
kc(ki, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom",
});
var Ig = bl,
  XR = Lv,
  YR = bt,
  Dg = Ig ? Ig.isConcatSpreadable : void 0;
function QR(e) {
  return YR(e) || XR(e) || !!(Dg && e && e[Dg]);
}
var ZR = QR,
  JR = HS,
  e3 = ZR;
function aO(e, t, r, n, i) {
  var a = -1,
    o = e.length;
  for (r || (r = e3), i || (i = []); ++a < o; ) {
    var l = e[a];
    t > 0 && r(l)
      ? t > 1
        ? aO(l, t - 1, r, n, i)
        : JR(i, l)
      : n || (i[i.length] = l);
  }
  return i;
}
var oO = aO;
function t3(e) {
  return function (t, r, n) {
    for (var i = -1, a = Object(t), o = n(t), l = o.length; l--; ) {
      var u = o[e ? l : ++i];
      if (r(a[u], u, a) === !1) break;
    }
    return t;
  };
}
var r3 = t3,
  n3 = r3,
  i3 = n3(),
  a3 = i3,
  o3 = a3,
  l3 = Cc;
function u3(e, t) {
  return e && o3(e, t, l3);
}
var lO = u3,
  s3 = Sl;
function c3(e, t) {
  return function (r, n) {
    if (r == null) return r;
    if (!s3(r)) return e(r, n);
    for (
      var i = r.length, a = t ? i : -1, o = Object(r);
      (t ? a-- : ++a < i) && n(o[a], a, o) !== !1;

    );
    return r;
  };
}
var f3 = c3,
  d3 = lO,
  p3 = f3,
  h3 = p3(d3),
  zv = h3,
  v3 = zv,
  m3 = Sl;
function y3(e, t) {
  var r = -1,
    n = m3(e) ? Array(e.length) : [];
  return (
    v3(e, function (i, a, o) {
      n[++r] = t(i, a, o);
    }),
    n
  );
}
var uO = y3;
function g3(e, t) {
  var r = e.length;
  for (e.sort(t); r--; ) e[r] = e[r].value;
  return e;
}
var b3 = g3,
  Lg = ha;
function x3(e, t) {
  if (e !== t) {
    var r = e !== void 0,
      n = e === null,
      i = e === e,
      a = Lg(e),
      o = t !== void 0,
      l = t === null,
      u = t === t,
      s = Lg(t);
    if (
      (!l && !s && !a && e > t) ||
      (a && o && u && !l && !s) ||
      (n && o && u) ||
      (!r && u) ||
      !i
    )
      return 1;
    if (
      (!n && !a && !s && e < t) ||
      (s && r && i && !n && !a) ||
      (l && r && i) ||
      (!o && i) ||
      !u
    )
      return -1;
  }
  return 0;
}
var w3 = x3,
  S3 = w3;
function O3(e, t, r) {
  for (
    var n = -1, i = e.criteria, a = t.criteria, o = i.length, l = r.length;
    ++n < o;

  ) {
    var u = S3(i[n], a[n]);
    if (u) {
      if (n >= l) return u;
      var s = r[n];
      return u * (s == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var P3 = O3,
  Rf = _v,
  _3 = Av,
  A3 = gn,
  E3 = uO,
  j3 = b3,
  $3 = GS,
  T3 = P3,
  C3 = wa,
  k3 = bt;
function M3(e, t, r) {
  t.length
    ? (t = Rf(t, function (a) {
        return k3(a)
          ? function (o) {
              return _3(o, a.length === 1 ? a[0] : a);
            }
          : a;
      }))
    : (t = [C3]);
  var n = -1;
  t = Rf(t, $3(A3));
  var i = E3(e, function (a, o, l) {
    var u = Rf(t, function (s) {
      return s(a);
    });
    return { criteria: u, index: ++n, value: a };
  });
  return j3(i, function (a, o) {
    return T3(a, o, r);
  });
}
var N3 = M3;
function I3(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var D3 = I3,
  L3 = D3,
  Rg = Math.max;
function R3(e, t, r) {
  return (
    (t = Rg(t === void 0 ? e.length - 1 : t, 0)),
    function () {
      for (
        var n = arguments, i = -1, a = Rg(n.length - t, 0), o = Array(a);
        ++i < a;

      )
        o[i] = n[t + i];
      i = -1;
      for (var l = Array(t + 1); ++i < t; ) l[i] = n[i];
      return ((l[t] = r(o)), L3(e, this, l));
    }
  );
}
var F3 = R3;
function B3(e) {
  return function () {
    return e;
  };
}
var z3 = B3,
  U3 = Jn,
  W3 = (function () {
    try {
      var e = U3(Object, "defineProperty");
      return (e({}, "", {}), e);
    } catch {}
  })(),
  sO = W3,
  H3 = z3,
  Fg = sO,
  V3 = wa,
  K3 = Fg
    ? function (e, t) {
        return Fg(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: H3(t),
          writable: !0,
        });
      }
    : V3,
  G3 = K3,
  q3 = 800,
  X3 = 16,
  Y3 = Date.now;
function Q3(e) {
  var t = 0,
    r = 0;
  return function () {
    var n = Y3(),
      i = X3 - (n - r);
    if (((r = n), i > 0)) {
      if (++t >= q3) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
var Z3 = Q3,
  J3 = G3,
  eF = Z3,
  tF = eF(J3),
  rF = tF,
  nF = wa,
  iF = F3,
  aF = rF;
function oF(e, t) {
  return aF(iF(e, t, nF), e + "");
}
var lF = oF,
  uF = wv,
  sF = Sl,
  cF = Rv,
  fF = yn;
function dF(e, t, r) {
  if (!fF(r)) return !1;
  var n = typeof t;
  return (n == "number" ? sF(r) && cF(t, r.length) : n == "string" && t in r)
    ? uF(r[t], e)
    : !1;
}
var Mc = dF,
  pF = oO,
  hF = N3,
  vF = lF,
  Bg = Mc,
  mF = vF(function (e, t) {
    if (e == null) return [];
    var r = t.length;
    return (
      r > 1 && Bg(e, t[0], t[1])
        ? (t = [])
        : r > 2 && Bg(t[0], t[1], t[2]) && (t = [t[0]]),
      hF(e, pF(t, 1), [])
    );
  }),
  yF = mF;
const Uv = pe(yF);
function Mo(e) {
  "@babel/helpers - typeof";
  return (
    (Mo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Mo(e)
  );
}
function xp() {
  return (
    (xp = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    xp.apply(this, arguments)
  );
}
function gF(e, t) {
  return SF(e) || wF(e, t) || xF(e, t) || bF();
}
function bF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xF(e, t) {
  if (e) {
    if (typeof e == "string") return zg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return zg(e, t);
  }
}
function zg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function wF(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      l = [],
      u = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(u = (n = a.call(r)).done) && (l.push(n.value), l.length !== t);
          u = !0
        );
    } catch (f) {
      ((s = !0), (i = f));
    } finally {
      try {
        if (!u && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return l;
  }
}
function SF(e) {
  if (Array.isArray(e)) return e;
}
function Ug(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ff(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ug(Object(r), !0).forEach(function (n) {
          OF(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ug(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function OF(e, t, r) {
  return (
    (t = PF(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function PF(e) {
  var t = _F(e, "string");
  return Mo(t) == "symbol" ? t : t + "";
}
function _F(e, t) {
  if (Mo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Mo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function AF(e) {
  return Array.isArray(e) && Ue(e[0]) && Ue(e[1]) ? e.join(" ~ ") : e;
}
var EF = function (t) {
  var r = t.separator,
    n = r === void 0 ? " : " : r,
    i = t.contentStyle,
    a = i === void 0 ? {} : i,
    o = t.itemStyle,
    l = o === void 0 ? {} : o,
    u = t.labelStyle,
    s = u === void 0 ? {} : u,
    f = t.payload,
    c = t.formatter,
    d = t.itemSorter,
    p = t.wrapperClassName,
    m = t.labelClassName,
    y = t.label,
    x = t.labelFormatter,
    v = t.accessibilityLayer,
    h = v === void 0 ? !1 : v,
    g = function () {
      if (f && f.length) {
        var j = { padding: 0, margin: 0 },
          D = (d ? Uv(f, d) : f).map(function (N, M) {
            if (N.type === "none") return null;
            var L = Ff(
                {
                  display: "block",
                  paddingTop: 4,
                  paddingBottom: 4,
                  color: N.color || "#000",
                },
                l,
              ),
              F = N.formatter || c || AF,
              T = N.value,
              I = N.name,
              R = T,
              V = I;
            if (F && R != null && V != null) {
              var W = F(T, I, N, M, f);
              if (Array.isArray(W)) {
                var X = gF(W, 2);
                ((R = X[0]), (V = X[1]));
              } else R = W;
            }
            return E.createElement(
              "li",
              {
                className: "recharts-tooltip-item",
                key: "tooltip-item-".concat(M),
                style: L,
              },
              Ue(V)
                ? E.createElement(
                    "span",
                    { className: "recharts-tooltip-item-name" },
                    V,
                  )
                : null,
              Ue(V)
                ? E.createElement(
                    "span",
                    { className: "recharts-tooltip-item-separator" },
                    n,
                  )
                : null,
              E.createElement(
                "span",
                { className: "recharts-tooltip-item-value" },
                R,
              ),
              E.createElement(
                "span",
                { className: "recharts-tooltip-item-unit" },
                N.unit || "",
              ),
            );
          });
        return E.createElement(
          "ul",
          { className: "recharts-tooltip-item-list", style: j },
          D,
        );
      }
      return null;
    },
    S = Ff(
      {
        margin: 0,
        padding: 10,
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        whiteSpace: "nowrap",
      },
      a,
    ),
    b = Ff({ margin: 0 }, s),
    w = !ee(y),
    P = w ? y : "",
    _ = oe("recharts-default-tooltip", p),
    A = oe("recharts-tooltip-label", m);
  w && x && f !== void 0 && f !== null && (P = x(y, f));
  var $ = h ? { role: "status", "aria-live": "assertive" } : {};
  return E.createElement(
    "div",
    xp({ className: _, style: S }, $),
    E.createElement(
      "p",
      { className: A, style: b },
      E.isValidElement(P) ? P : "".concat(P),
    ),
    g(),
  );
};
function No(e) {
  "@babel/helpers - typeof";
  return (
    (No =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    No(e)
  );
}
function Jl(e, t, r) {
  return (
    (t = jF(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function jF(e) {
  var t = $F(e, "string");
  return No(t) == "symbol" ? t : t + "";
}
function $F(e, t) {
  if (No(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (No(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var La = "recharts-tooltip-wrapper",
  TF = { visibility: "hidden" };
function CF(e) {
  var t = e.coordinate,
    r = e.translateX,
    n = e.translateY;
  return oe(
    La,
    Jl(
      Jl(
        Jl(
          Jl({}, "".concat(La, "-right"), H(r) && t && H(t.x) && r >= t.x),
          "".concat(La, "-left"),
          H(r) && t && H(t.x) && r < t.x,
        ),
        "".concat(La, "-bottom"),
        H(n) && t && H(t.y) && n >= t.y,
      ),
      "".concat(La, "-top"),
      H(n) && t && H(t.y) && n < t.y,
    ),
  );
}
function Wg(e) {
  var t = e.allowEscapeViewBox,
    r = e.coordinate,
    n = e.key,
    i = e.offsetTopLeft,
    a = e.position,
    o = e.reverseDirection,
    l = e.tooltipDimension,
    u = e.viewBox,
    s = e.viewBoxDimension;
  if (a && H(a[n])) return a[n];
  var f = r[n] - l - i,
    c = r[n] + i;
  if (t[n]) return o[n] ? f : c;
  if (o[n]) {
    var d = f,
      p = u[n];
    return d < p ? Math.max(c, u[n]) : Math.max(f, u[n]);
  }
  var m = c + l,
    y = u[n] + s;
  return m > y ? Math.max(f, u[n]) : Math.max(c, u[n]);
}
function kF(e) {
  var t = e.translateX,
    r = e.translateY,
    n = e.useTranslate3d;
  return {
    transform: n
      ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)")
      : "translate(".concat(t, "px, ").concat(r, "px)"),
  };
}
function MF(e) {
  var t = e.allowEscapeViewBox,
    r = e.coordinate,
    n = e.offsetTopLeft,
    i = e.position,
    a = e.reverseDirection,
    o = e.tooltipBox,
    l = e.useTranslate3d,
    u = e.viewBox,
    s,
    f,
    c;
  return (
    o.height > 0 && o.width > 0 && r
      ? ((f = Wg({
          allowEscapeViewBox: t,
          coordinate: r,
          key: "x",
          offsetTopLeft: n,
          position: i,
          reverseDirection: a,
          tooltipDimension: o.width,
          viewBox: u,
          viewBoxDimension: u.width,
        })),
        (c = Wg({
          allowEscapeViewBox: t,
          coordinate: r,
          key: "y",
          offsetTopLeft: n,
          position: i,
          reverseDirection: a,
          tooltipDimension: o.height,
          viewBox: u,
          viewBoxDimension: u.height,
        })),
        (s = kF({ translateX: f, translateY: c, useTranslate3d: l })))
      : (s = TF),
    {
      cssProperties: s,
      cssClasses: CF({ translateX: f, translateY: c, coordinate: r }),
    }
  );
}
function Vi(e) {
  "@babel/helpers - typeof";
  return (
    (Vi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Vi(e)
  );
}
function Hg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Vg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Hg(Object(r), !0).forEach(function (n) {
          Sp(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Hg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function NF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function IF(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, fO(n.key), n));
  }
}
function DF(e, t, r) {
  return (
    t && IF(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function LF(e, t, r) {
  return (
    (t = ls(t)),
    RF(
      e,
      cO() ? Reflect.construct(t, r || [], ls(e).constructor) : t.apply(e, r),
    )
  );
}
function RF(e, t) {
  if (t && (Vi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return FF(e);
}
function FF(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function cO() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (cO = function () {
    return !!e;
  })();
}
function ls(e) {
  return (
    (ls = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ls(e)
  );
}
function BF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && wp(e, t));
}
function wp(e, t) {
  return (
    (wp = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    wp(e, t)
  );
}
function Sp(e, t, r) {
  return (
    (t = fO(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function fO(e) {
  var t = zF(e, "string");
  return Vi(t) == "symbol" ? t : t + "";
}
function zF(e, t) {
  if (Vi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Vi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Kg = 1,
  UF = (function (e) {
    function t() {
      var r;
      NF(this, t);
      for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
        i[a] = arguments[a];
      return (
        (r = LF(this, t, [].concat(i))),
        Sp(r, "state", {
          dismissed: !1,
          dismissedAtCoordinate: { x: 0, y: 0 },
          lastBoundingBox: { width: -1, height: -1 },
        }),
        Sp(r, "handleKeyDown", function (o) {
          if (o.key === "Escape") {
            var l, u, s, f;
            r.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x:
                  (l =
                    (u = r.props.coordinate) === null || u === void 0
                      ? void 0
                      : u.x) !== null && l !== void 0
                    ? l
                    : 0,
                y:
                  (s =
                    (f = r.props.coordinate) === null || f === void 0
                      ? void 0
                      : f.y) !== null && s !== void 0
                    ? s
                    : 0,
              },
            });
          }
        }),
        r
      );
    }
    return (
      BF(t, e),
      DF(t, [
        {
          key: "updateBBox",
          value: function () {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var n = this.wrapperNode.getBoundingClientRect();
              (Math.abs(n.width - this.state.lastBoundingBox.width) > Kg ||
                Math.abs(n.height - this.state.lastBoundingBox.height) > Kg) &&
                this.setState({
                  lastBoundingBox: { width: n.width, height: n.height },
                });
            } else
              (this.state.lastBoundingBox.width !== -1 ||
                this.state.lastBoundingBox.height !== -1) &&
                this.setState({ lastBoundingBox: { width: -1, height: -1 } });
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            (document.addEventListener("keydown", this.handleKeyDown),
              this.updateBBox());
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            document.removeEventListener("keydown", this.handleKeyDown);
          },
        },
        {
          key: "componentDidUpdate",
          value: function () {
            var n, i;
            (this.props.active && this.updateBBox(),
              this.state.dismissed &&
                (((n = this.props.coordinate) === null || n === void 0
                  ? void 0
                  : n.x) !== this.state.dismissedAtCoordinate.x ||
                  ((i = this.props.coordinate) === null || i === void 0
                    ? void 0
                    : i.y) !== this.state.dismissedAtCoordinate.y) &&
                (this.state.dismissed = !1));
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              i = this.props,
              a = i.active,
              o = i.allowEscapeViewBox,
              l = i.animationDuration,
              u = i.animationEasing,
              s = i.children,
              f = i.coordinate,
              c = i.hasPayload,
              d = i.isAnimationActive,
              p = i.offset,
              m = i.position,
              y = i.reverseDirection,
              x = i.useTranslate3d,
              v = i.viewBox,
              h = i.wrapperStyle,
              g = MF({
                allowEscapeViewBox: o,
                coordinate: f,
                offsetTopLeft: p,
                position: m,
                reverseDirection: y,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: x,
                viewBox: v,
              }),
              S = g.cssClasses,
              b = g.cssProperties,
              w = Vg(
                Vg(
                  {
                    transition:
                      d && a ? "transform ".concat(l, "ms ").concat(u) : void 0,
                  },
                  b,
                ),
                {},
                {
                  pointerEvents: "none",
                  visibility:
                    !this.state.dismissed && a && c ? "visible" : "hidden",
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
                h,
              );
            return E.createElement(
              "div",
              {
                tabIndex: -1,
                className: S,
                style: w,
                ref: function (_) {
                  n.wrapperNode = _;
                },
              },
              s,
            );
          },
        },
      ])
    );
  })(B.PureComponent),
  WF = function () {
    return !(
      typeof window < "u" &&
      window.document &&
      window.document.createElement &&
      window.setTimeout
    );
  },
  Sa = { isSsr: WF() };
function Ki(e) {
  "@babel/helpers - typeof";
  return (
    (Ki =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ki(e)
  );
}
function Gg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function qg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Gg(Object(r), !0).forEach(function (n) {
          Wv(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Gg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function HF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function VF(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, pO(n.key), n));
  }
}
function KF(e, t, r) {
  return (
    t && VF(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function GF(e, t, r) {
  return (
    (t = us(t)),
    qF(
      e,
      dO() ? Reflect.construct(t, r || [], us(e).constructor) : t.apply(e, r),
    )
  );
}
function qF(e, t) {
  if (t && (Ki(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return XF(e);
}
function XF(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function dO() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (dO = function () {
    return !!e;
  })();
}
function us(e) {
  return (
    (us = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    us(e)
  );
}
function YF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Op(e, t));
}
function Op(e, t) {
  return (
    (Op = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Op(e, t)
  );
}
function Wv(e, t, r) {
  return (
    (t = pO(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function pO(e) {
  var t = QF(e, "string");
  return Ki(t) == "symbol" ? t : t + "";
}
function QF(e, t) {
  if (Ki(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ki(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function ZF(e) {
  return e.dataKey;
}
function JF(e, t) {
  return E.isValidElement(e)
    ? E.cloneElement(e, t)
    : typeof e == "function"
      ? E.createElement(e, t)
      : E.createElement(EF, t);
}
var Qt = (function (e) {
  function t() {
    return (HF(this, t), GF(this, t, arguments));
  }
  return (
    YF(t, e),
    KF(t, [
      {
        key: "render",
        value: function () {
          var n = this,
            i = this.props,
            a = i.active,
            o = i.allowEscapeViewBox,
            l = i.animationDuration,
            u = i.animationEasing,
            s = i.content,
            f = i.coordinate,
            c = i.filterNull,
            d = i.isAnimationActive,
            p = i.offset,
            m = i.payload,
            y = i.payloadUniqBy,
            x = i.position,
            v = i.reverseDirection,
            h = i.useTranslate3d,
            g = i.viewBox,
            S = i.wrapperStyle,
            b = m ?? [];
          c &&
            b.length &&
            (b = rO(
              m.filter(function (P) {
                return (
                  P.value != null && (P.hide !== !0 || n.props.includeHidden)
                );
              }),
              y,
              ZF,
            ));
          var w = b.length > 0;
          return E.createElement(
            UF,
            {
              allowEscapeViewBox: o,
              animationDuration: l,
              animationEasing: u,
              isAnimationActive: d,
              active: a,
              coordinate: f,
              hasPayload: w,
              offset: p,
              position: x,
              reverseDirection: v,
              useTranslate3d: h,
              viewBox: g,
              wrapperStyle: S,
            },
            JF(s, qg(qg({}, this.props), {}, { payload: b })),
          );
        },
      },
    ])
  );
})(B.PureComponent);
Wv(Qt, "displayName", "Tooltip");
Wv(Qt, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: { x: !1, y: !1 },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: { x: 0, y: 0 },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !Sa.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: { x: !1, y: !1 },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: { x: 0, y: 0, height: 0, width: 0 },
  wrapperStyle: {},
});
var eB = yr,
  tB = function () {
    return eB.Date.now();
  },
  rB = tB,
  nB = /\s/;
function iB(e) {
  for (var t = e.length; t-- && nB.test(e.charAt(t)); );
  return t;
}
var aB = iB,
  oB = aB,
  lB = /^\s+/;
function uB(e) {
  return e && e.slice(0, oB(e) + 1).replace(lB, "");
}
var sB = uB,
  cB = sB,
  Xg = yn,
  fB = ha,
  Yg = NaN,
  dB = /^[-+]0x[0-9a-f]+$/i,
  pB = /^0b[01]+$/i,
  hB = /^0o[0-7]+$/i,
  vB = parseInt;
function mB(e) {
  if (typeof e == "number") return e;
  if (fB(e)) return Yg;
  if (Xg(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Xg(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = cB(e);
  var r = pB.test(e);
  return r || hB.test(e) ? vB(e.slice(2), r ? 2 : 8) : dB.test(e) ? Yg : +e;
}
var hO = mB,
  yB = yn,
  Bf = rB,
  Qg = hO,
  gB = "Expected a function",
  bB = Math.max,
  xB = Math.min;
function wB(e, t, r) {
  var n,
    i,
    a,
    o,
    l,
    u,
    s = 0,
    f = !1,
    c = !1,
    d = !0;
  if (typeof e != "function") throw new TypeError(gB);
  ((t = Qg(t) || 0),
    yB(r) &&
      ((f = !!r.leading),
      (c = "maxWait" in r),
      (a = c ? bB(Qg(r.maxWait) || 0, t) : a),
      (d = "trailing" in r ? !!r.trailing : d)));
  function p(w) {
    var P = n,
      _ = i;
    return ((n = i = void 0), (s = w), (o = e.apply(_, P)), o);
  }
  function m(w) {
    return ((s = w), (l = setTimeout(v, t)), f ? p(w) : o);
  }
  function y(w) {
    var P = w - u,
      _ = w - s,
      A = t - P;
    return c ? xB(A, a - _) : A;
  }
  function x(w) {
    var P = w - u,
      _ = w - s;
    return u === void 0 || P >= t || P < 0 || (c && _ >= a);
  }
  function v() {
    var w = Bf();
    if (x(w)) return h(w);
    l = setTimeout(v, y(w));
  }
  function h(w) {
    return ((l = void 0), d && n ? p(w) : ((n = i = void 0), o));
  }
  function g() {
    (l !== void 0 && clearTimeout(l), (s = 0), (n = u = i = l = void 0));
  }
  function S() {
    return l === void 0 ? o : h(Bf());
  }
  function b() {
    var w = Bf(),
      P = x(w);
    if (((n = arguments), (i = this), (u = w), P)) {
      if (l === void 0) return m(u);
      if (c) return (clearTimeout(l), (l = setTimeout(v, t)), p(u));
    }
    return (l === void 0 && (l = setTimeout(v, t)), o);
  }
  return ((b.cancel = g), (b.flush = S), b);
}
var SB = wB,
  OB = SB,
  PB = yn,
  _B = "Expected a function";
function AB(e, t, r) {
  var n = !0,
    i = !0;
  if (typeof e != "function") throw new TypeError(_B);
  return (
    PB(r) &&
      ((n = "leading" in r ? !!r.leading : n),
      (i = "trailing" in r ? !!r.trailing : i)),
    OB(e, t, { leading: n, maxWait: t, trailing: i })
  );
}
var EB = AB;
const vO = pe(EB);
function Io(e) {
  "@babel/helpers - typeof";
  return (
    (Io =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Io(e)
  );
}
function Zg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function eu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Zg(Object(r), !0).forEach(function (n) {
          jB(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Zg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function jB(e, t, r) {
  return (
    (t = $B(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function $B(e) {
  var t = TB(e, "string");
  return Io(t) == "symbol" ? t : t + "";
}
function TB(e, t) {
  if (Io(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Io(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function CB(e, t) {
  return IB(e) || NB(e, t) || MB(e, t) || kB();
}
function kB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function MB(e, t) {
  if (e) {
    if (typeof e == "string") return Jg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Jg(e, t);
  }
}
function Jg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function NB(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      l = [],
      u = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(u = (n = a.call(r)).done) && (l.push(n.value), l.length !== t);
          u = !0
        );
    } catch (f) {
      ((s = !0), (i = f));
    } finally {
      try {
        if (!u && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return l;
  }
}
function IB(e) {
  if (Array.isArray(e)) return e;
}
var mO = B.forwardRef(function (e, t) {
    var r = e.aspect,
      n = e.initialDimension,
      i = n === void 0 ? { width: -1, height: -1 } : n,
      a = e.width,
      o = a === void 0 ? "100%" : a,
      l = e.height,
      u = l === void 0 ? "100%" : l,
      s = e.minWidth,
      f = s === void 0 ? 0 : s,
      c = e.minHeight,
      d = e.maxHeight,
      p = e.children,
      m = e.debounce,
      y = m === void 0 ? 0 : m,
      x = e.id,
      v = e.className,
      h = e.onResize,
      g = e.style,
      S = g === void 0 ? {} : g,
      b = B.useRef(null),
      w = B.useRef();
    ((w.current = h),
      B.useImperativeHandle(t, function () {
        return Object.defineProperty(b.current, "current", {
          get: function () {
            return (
              console.warn(
                "The usage of ref.current.current is deprecated and will no longer be supported.",
              ),
              b.current
            );
          },
          configurable: !0,
        });
      }));
    var P = B.useState({ containerWidth: i.width, containerHeight: i.height }),
      _ = CB(P, 2),
      A = _[0],
      $ = _[1],
      C = B.useCallback(function (D, N) {
        $(function (M) {
          var L = Math.round(D),
            F = Math.round(N);
          return M.containerWidth === L && M.containerHeight === F
            ? M
            : { containerWidth: L, containerHeight: F };
        });
      }, []);
    B.useEffect(
      function () {
        var D = function (I) {
          var R,
            V = I[0].contentRect,
            W = V.width,
            X = V.height;
          (C(W, X),
            (R = w.current) === null || R === void 0 || R.call(w, W, X));
        };
        y > 0 && (D = vO(D, y, { trailing: !0, leading: !1 }));
        var N = new ResizeObserver(D),
          M = b.current.getBoundingClientRect(),
          L = M.width,
          F = M.height;
        return (
          C(L, F),
          N.observe(b.current),
          function () {
            N.disconnect();
          }
        );
      },
      [C, y],
    );
    var j = B.useMemo(
      function () {
        var D = A.containerWidth,
          N = A.containerHeight;
        if (D < 0 || N < 0) return null;
        (jr(
          Mn(o) || Mn(u),
          `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,
          o,
          u,
        ),
          jr(!r || r > 0, "The aspect(%s) must be greater than zero.", r));
        var M = Mn(o) ? D : o,
          L = Mn(u) ? N : u;
        (r &&
          r > 0 &&
          (M ? (L = M / r) : L && (M = L * r), d && L > d && (L = d)),
          jr(
            M > 0 || L > 0,
            `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,
            M,
            L,
            o,
            u,
            f,
            c,
            r,
          ));
        var F = !Array.isArray(p) && Er(p.type).endsWith("Chart");
        return E.Children.map(p, function (T) {
          return E.isValidElement(T)
            ? B.cloneElement(
                T,
                eu(
                  { width: M, height: L },
                  F
                    ? {
                        style: eu(
                          {
                            height: "100%",
                            width: "100%",
                            maxHeight: L,
                            maxWidth: M,
                          },
                          T.props.style,
                        ),
                      }
                    : {},
                ),
              )
            : T;
        });
      },
      [r, p, u, d, c, f, A, o],
    );
    return E.createElement(
      "div",
      {
        id: x ? "".concat(x) : void 0,
        className: oe("recharts-responsive-container", v),
        style: eu(
          eu({}, S),
          {},
          { width: o, height: u, minWidth: f, minHeight: c, maxHeight: d },
        ),
        ref: b,
      },
      j,
    );
  }),
  yO = function (t) {
    return null;
  };
yO.displayName = "Cell";
function Do(e) {
  "@babel/helpers - typeof";
  return (
    (Do =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Do(e)
  );
}
function e0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Pp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? e0(Object(r), !0).forEach(function (n) {
          DB(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : e0(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function DB(e, t, r) {
  return (
    (t = LB(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function LB(e) {
  var t = RB(e, "string");
  return Do(t) == "symbol" ? t : t + "";
}
function RB(e, t) {
  if (Do(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Do(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ai = { widthCache: {}, cacheCount: 0 },
  FB = 2e3,
  BB = {
    position: "absolute",
    top: "-20000px",
    left: 0,
    padding: 0,
    margin: 0,
    border: "none",
    whiteSpace: "pre",
  },
  t0 = "recharts_measurement_span";
function zB(e) {
  var t = Pp({}, e);
  return (
    Object.keys(t).forEach(function (r) {
      t[r] || delete t[r];
    }),
    t
  );
}
var uo = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (t == null || Sa.isSsr) return { width: 0, height: 0 };
    var n = zB(r),
      i = JSON.stringify({ text: t, copyStyle: n });
    if (ai.widthCache[i]) return ai.widthCache[i];
    try {
      var a = document.getElementById(t0);
      a ||
        ((a = document.createElement("span")),
        a.setAttribute("id", t0),
        a.setAttribute("aria-hidden", "true"),
        document.body.appendChild(a));
      var o = Pp(Pp({}, BB), n);
      (Object.assign(a.style, o), (a.textContent = "".concat(t)));
      var l = a.getBoundingClientRect(),
        u = { width: l.width, height: l.height };
      return (
        (ai.widthCache[i] = u),
        ++ai.cacheCount > FB && ((ai.cacheCount = 0), (ai.widthCache = {})),
        u
      );
    } catch {
      return { width: 0, height: 0 };
    }
  },
  UB = function (t) {
    return {
      top: t.top + window.scrollY - document.documentElement.clientTop,
      left: t.left + window.scrollX - document.documentElement.clientLeft,
    };
  };
function Lo(e) {
  "@babel/helpers - typeof";
  return (
    (Lo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Lo(e)
  );
}
function ss(e, t) {
  return KB(e) || VB(e, t) || HB(e, t) || WB();
}
function WB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function HB(e, t) {
  if (e) {
    if (typeof e == "string") return r0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return r0(e, t);
  }
}
function r0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function VB(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      l = [],
      u = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        u = !1;
      } else
        for (
          ;
          !(u = (n = a.call(r)).done) && (l.push(n.value), l.length !== t);
          u = !0
        );
    } catch (f) {
      ((s = !0), (i = f));
    } finally {
      try {
        if (!u && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return l;
  }
}
function KB(e) {
  if (Array.isArray(e)) return e;
}
function GB(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function n0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, XB(n.key), n));
  }
}
function qB(e, t, r) {
  return (
    t && n0(e.prototype, t),
    r && n0(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function XB(e) {
  var t = YB(e, "string");
  return Lo(t) == "symbol" ? t : t + "";
}
function YB(e, t) {
  if (Lo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Lo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var i0 = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  a0 = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
  QB = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
  ZB = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
  gO = {
    cm: 96 / 2.54,
    mm: 96 / 25.4,
    pt: 96 / 72,
    pc: 96 / 6,
    in: 96,
    Q: 96 / (2.54 * 40),
    px: 1,
  },
  JB = Object.keys(gO),
  Si = "NaN";
function ez(e, t) {
  return e * gO[t];
}
var tu = (function () {
  function e(t, r) {
    (GB(this, e),
      (this.num = t),
      (this.unit = r),
      (this.num = t),
      (this.unit = r),
      Number.isNaN(t) && (this.unit = ""),
      r !== "" && !QB.test(r) && ((this.num = NaN), (this.unit = "")),
      JB.includes(r) && ((this.num = ez(t, r)), (this.unit = "px")));
  }
  return qB(
    e,
    [
      {
        key: "add",
        value: function (r) {
          return this.unit !== r.unit
            ? new e(NaN, "")
            : new e(this.num + r.num, this.unit);
        },
      },
      {
        key: "subtract",
        value: function (r) {
          return this.unit !== r.unit
            ? new e(NaN, "")
            : new e(this.num - r.num, this.unit);
        },
      },
      {
        key: "multiply",
        value: function (r) {
          return this.unit !== "" && r.unit !== "" && this.unit !== r.unit
            ? new e(NaN, "")
            : new e(this.num * r.num, this.unit || r.unit);
        },
      },
      {
        key: "divide",
        value: function (r) {
          return this.unit !== "" && r.unit !== "" && this.unit !== r.unit
            ? new e(NaN, "")
            : new e(this.num / r.num, this.unit || r.unit);
        },
      },
      {
        key: "toString",
        value: function () {
          return "".concat(this.num).concat(this.unit);
        },
      },
      {
        key: "isNaN",
        value: function () {
          return Number.isNaN(this.num);
        },
      },
    ],
    [
      {
        key: "parse",
        value: function (r) {
          var n,
            i = (n = ZB.exec(r)) !== null && n !== void 0 ? n : [],
            a = ss(i, 3),
            o = a[1],
            l = a[2];
          return new e(parseFloat(o), l ?? "");
        },
      },
    ],
  );
})();
function bO(e) {
  if (e.includes(Si)) return Si;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r,
      n = (r = i0.exec(t)) !== null && r !== void 0 ? r : [],
      i = ss(n, 4),
      a = i[1],
      o = i[2],
      l = i[3],
      u = tu.parse(a ?? ""),
      s = tu.parse(l ?? ""),
      f = o === "*" ? u.multiply(s) : u.divide(s);
    if (f.isNaN()) return Si;
    t = t.replace(i0, f.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var c,
      d = (c = a0.exec(t)) !== null && c !== void 0 ? c : [],
      p = ss(d, 4),
      m = p[1],
      y = p[2],
      x = p[3],
      v = tu.parse(m ?? ""),
      h = tu.parse(x ?? ""),
      g = y === "+" ? v.add(h) : v.subtract(h);
    if (g.isNaN()) return Si;
    t = t.replace(a0, g.toString());
  }
  return t;
}
var o0 = /\(([^()]*)\)/;
function tz(e) {
  for (var t = e; t.includes("("); ) {
    var r = o0.exec(t),
      n = ss(r, 2),
      i = n[1];
    t = t.replace(o0, bO(i));
  }
  return t;
}
function rz(e) {
  var t = e.replace(/\s+/g, "");
  return ((t = tz(t)), (t = bO(t)), t);
}
function nz(e) {
  try {
    return rz(e);
  } catch {
    return Si;
  }
}
function zf(e) {
  var t = nz(e.slice(5, -1));
  return t === Si ? "" : t;
}
var iz = [
    "x",
    "y",
    "lineHeight",
    "capHeight",
    "scaleToFit",
    "textAnchor",
    "verticalAnchor",
    "fill",
  ],
  az = ["dx", "dy", "angle", "className", "breakAll"];
function _p() {
  return (
    (_p = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    _p.apply(this, arguments)
  );
}
function l0(e, t) {
  if (e == null) return {};
  var r = oz(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function oz(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function u0(e, t) {
  return cz(e) || sz(e, t) || uz(e, t) || lz();
}
function lz() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function uz(e, t) {
  if (e) {
    if (typeof e == "string") return s0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return s0(e, t);
  }
}
function s0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function sz(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      l = [],
      u = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        u = !1;
      } else
        for (
          ;
          !(u = (n = a.call(r)).done) && (l.push(n.value), l.length !== t);
          u = !0
        );
    } catch (f) {
      ((s = !0), (i = f));
    } finally {
      try {
        if (!u && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return l;
  }
}
function cz(e) {
  if (Array.isArray(e)) return e;
}
var xO = /[ \f\n\r\t\v\u2028\u2029]+/,
  wO = function (t) {
    var r = t.children,
      n = t.breakAll,
      i = t.style;
    try {
      var a = [];
      ee(r) ||
        (n ? (a = r.toString().split("")) : (a = r.toString().split(xO)));
      var o = a.map(function (u) {
          return { word: u, width: uo(u, i).width };
        }),
        l = n ? 0 : uo(" ", i).width;
      return { wordsWithComputedWidth: o, spaceWidth: l };
    } catch {
      return null;
    }
  },
  fz = function (t, r, n, i, a) {
    var o = t.maxLines,
      l = t.children,
      u = t.style,
      s = t.breakAll,
      f = H(o),
      c = l,
      d = function () {
        var M =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        return M.reduce(function (L, F) {
          var T = F.word,
            I = F.width,
            R = L[L.length - 1];
          if (R && (i == null || a || R.width + I + n < Number(i)))
            (R.words.push(T), (R.width += I + n));
          else {
            var V = { words: [T], width: I };
            L.push(V);
          }
          return L;
        }, []);
      },
      p = d(r),
      m = function (M) {
        return M.reduce(function (L, F) {
          return L.width > F.width ? L : F;
        });
      };
    if (!f) return p;
    for (
      var y = "…",
        x = function (M) {
          var L = c.slice(0, M),
            F = wO({
              breakAll: s,
              style: u,
              children: L + y,
            }).wordsWithComputedWidth,
            T = d(F),
            I = T.length > o || m(T).width > Number(i);
          return [I, T];
        },
        v = 0,
        h = c.length - 1,
        g = 0,
        S;
      v <= h && g <= c.length - 1;

    ) {
      var b = Math.floor((v + h) / 2),
        w = b - 1,
        P = x(w),
        _ = u0(P, 2),
        A = _[0],
        $ = _[1],
        C = x(b),
        j = u0(C, 1),
        D = j[0];
      if ((!A && !D && (v = b + 1), A && D && (h = b - 1), !A && D)) {
        S = $;
        break;
      }
      g++;
    }
    return S || p;
  },
  c0 = function (t) {
    var r = ee(t) ? [] : t.toString().split(xO);
    return [{ words: r }];
  },
  dz = function (t) {
    var r = t.width,
      n = t.scaleToFit,
      i = t.children,
      a = t.style,
      o = t.breakAll,
      l = t.maxLines;
    if ((r || n) && !Sa.isSsr) {
      var u,
        s,
        f = wO({ breakAll: o, children: i, style: a });
      if (f) {
        var c = f.wordsWithComputedWidth,
          d = f.spaceWidth;
        ((u = c), (s = d));
      } else return c0(i);
      return fz(
        { breakAll: o, children: i, maxLines: l, style: a },
        u,
        s,
        r,
        n,
      );
    }
    return c0(i);
  },
  f0 = "#808080",
  cs = function (t) {
    var r = t.x,
      n = r === void 0 ? 0 : r,
      i = t.y,
      a = i === void 0 ? 0 : i,
      o = t.lineHeight,
      l = o === void 0 ? "1em" : o,
      u = t.capHeight,
      s = u === void 0 ? "0.71em" : u,
      f = t.scaleToFit,
      c = f === void 0 ? !1 : f,
      d = t.textAnchor,
      p = d === void 0 ? "start" : d,
      m = t.verticalAnchor,
      y = m === void 0 ? "end" : m,
      x = t.fill,
      v = x === void 0 ? f0 : x,
      h = l0(t, iz),
      g = B.useMemo(
        function () {
          return dz({
            breakAll: h.breakAll,
            children: h.children,
            maxLines: h.maxLines,
            scaleToFit: c,
            style: h.style,
            width: h.width,
          });
        },
        [h.breakAll, h.children, h.maxLines, c, h.style, h.width],
      ),
      S = h.dx,
      b = h.dy,
      w = h.angle,
      P = h.className,
      _ = h.breakAll,
      A = l0(h, az);
    if (!Ue(n) || !Ue(a)) return null;
    var $ = n + (H(S) ? S : 0),
      C = a + (H(b) ? b : 0),
      j;
    switch (y) {
      case "start":
        j = zf("calc(".concat(s, ")"));
        break;
      case "middle":
        j = zf(
          "calc("
            .concat((g.length - 1) / 2, " * -")
            .concat(l, " + (")
            .concat(s, " / 2))"),
        );
        break;
      default:
        j = zf("calc(".concat(g.length - 1, " * -").concat(l, ")"));
        break;
    }
    var D = [];
    if (c) {
      var N = g[0].width,
        M = h.width;
      D.push("scale(".concat((H(M) ? M / N : 1) / N, ")"));
    }
    return (
      w && D.push("rotate(".concat(w, ", ").concat($, ", ").concat(C, ")")),
      D.length && (A.transform = D.join(" ")),
      E.createElement(
        "text",
        _p({}, re(A, !0), {
          x: $,
          y: C,
          className: oe("recharts-text", P),
          textAnchor: p,
          fill: v.includes("url") ? f0 : v,
        }),
        g.map(function (L, F) {
          var T = L.words.join(_ ? "" : " ");
          return E.createElement(
            "tspan",
            { x: $, dy: F === 0 ? j : l, key: "".concat(T, "-").concat(F) },
            T,
          );
        }),
      )
    );
  };
function sn(e, t) {
  return e == null || t == null
    ? NaN
    : e < t
      ? -1
      : e > t
        ? 1
        : e >= t
          ? 0
          : NaN;
}
function pz(e, t) {
  return e == null || t == null
    ? NaN
    : t < e
      ? -1
      : t > e
        ? 1
        : t >= e
          ? 0
          : NaN;
}
function Hv(e) {
  let t, r, n;
  e.length !== 2
    ? ((t = sn), (r = (l, u) => sn(e(l), u)), (n = (l, u) => e(l) - u))
    : ((t = e === sn || e === pz ? e : hz), (r = e), (n = e));
  function i(l, u, s = 0, f = l.length) {
    if (s < f) {
      if (t(u, u) !== 0) return f;
      do {
        const c = (s + f) >>> 1;
        r(l[c], u) < 0 ? (s = c + 1) : (f = c);
      } while (s < f);
    }
    return s;
  }
  function a(l, u, s = 0, f = l.length) {
    if (s < f) {
      if (t(u, u) !== 0) return f;
      do {
        const c = (s + f) >>> 1;
        r(l[c], u) <= 0 ? (s = c + 1) : (f = c);
      } while (s < f);
    }
    return s;
  }
  function o(l, u, s = 0, f = l.length) {
    const c = i(l, u, s, f - 1);
    return c > s && n(l[c - 1], u) > -n(l[c], u) ? c - 1 : c;
  }
  return { left: i, center: o, right: a };
}
function hz() {
  return 0;
}
function SO(e) {
  return e === null ? NaN : +e;
}
function* vz(e, t) {
  for (let r of e) r != null && (r = +r) >= r && (yield r);
}
const mz = Hv(sn),
  Ol = mz.right;
Hv(SO).center;
class d0 extends Map {
  constructor(t, r = bz) {
    if (
      (super(),
      Object.defineProperties(this, {
        _intern: { value: new Map() },
        _key: { value: r },
      }),
      t != null)
    )
      for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(p0(this, t));
  }
  has(t) {
    return super.has(p0(this, t));
  }
  set(t, r) {
    return super.set(yz(this, t), r);
  }
  delete(t) {
    return super.delete(gz(this, t));
  }
}
function p0({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function yz({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function gz({ _intern: e, _key: t }, r) {
  const n = t(r);
  return (e.has(n) && ((r = e.get(n)), e.delete(n)), r);
}
function bz(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function xz(e = sn) {
  if (e === sn) return OO;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function OO(e, t) {
  return (
    (e == null || !(e >= e)) - (t == null || !(t >= t)) ||
    (e < t ? -1 : e > t ? 1 : 0)
  );
}
const wz = Math.sqrt(50),
  Sz = Math.sqrt(10),
  Oz = Math.sqrt(2);
function fs(e, t, r) {
  const n = (t - e) / Math.max(0, r),
    i = Math.floor(Math.log10(n)),
    a = n / Math.pow(10, i),
    o = a >= wz ? 10 : a >= Sz ? 5 : a >= Oz ? 2 : 1;
  let l, u, s;
  return (
    i < 0
      ? ((s = Math.pow(10, -i) / o),
        (l = Math.round(e * s)),
        (u = Math.round(t * s)),
        l / s < e && ++l,
        u / s > t && --u,
        (s = -s))
      : ((s = Math.pow(10, i) * o),
        (l = Math.round(e / s)),
        (u = Math.round(t / s)),
        l * s < e && ++l,
        u * s > t && --u),
    u < l && 0.5 <= r && r < 2 ? fs(e, t, r * 2) : [l, u, s]
  );
}
function Ap(e, t, r) {
  if (((t = +t), (e = +e), (r = +r), !(r > 0))) return [];
  if (e === t) return [e];
  const n = t < e,
    [i, a, o] = n ? fs(t, e, r) : fs(e, t, r);
  if (!(a >= i)) return [];
  const l = a - i + 1,
    u = new Array(l);
  if (n)
    if (o < 0) for (let s = 0; s < l; ++s) u[s] = (a - s) / -o;
    else for (let s = 0; s < l; ++s) u[s] = (a - s) * o;
  else if (o < 0) for (let s = 0; s < l; ++s) u[s] = (i + s) / -o;
  else for (let s = 0; s < l; ++s) u[s] = (i + s) * o;
  return u;
}
function Ep(e, t, r) {
  return ((t = +t), (e = +e), (r = +r), fs(e, t, r)[2]);
}
function jp(e, t, r) {
  ((t = +t), (e = +e), (r = +r));
  const n = t < e,
    i = n ? Ep(t, e, r) : Ep(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function h0(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || (r === void 0 && n >= n)) && (r = n);
  return r;
}
function v0(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || (r === void 0 && n >= n)) && (r = n);
  return r;
}
function PO(e, t, r = 0, n = 1 / 0, i) {
  if (
    ((t = Math.floor(t)),
    (r = Math.floor(Math.max(0, r))),
    (n = Math.floor(Math.min(e.length - 1, n))),
    !(r <= t && t <= n))
  )
    return e;
  for (i = i === void 0 ? OO : xz(i); n > r; ) {
    if (n - r > 600) {
      const u = n - r + 1,
        s = t - r + 1,
        f = Math.log(u),
        c = 0.5 * Math.exp((2 * f) / 3),
        d = 0.5 * Math.sqrt((f * c * (u - c)) / u) * (s - u / 2 < 0 ? -1 : 1),
        p = Math.max(r, Math.floor(t - (s * c) / u + d)),
        m = Math.min(n, Math.floor(t + ((u - s) * c) / u + d));
      PO(e, t, p, m, i);
    }
    const a = e[t];
    let o = r,
      l = n;
    for (Ra(e, r, t), i(e[n], a) > 0 && Ra(e, r, n); o < l; ) {
      for (Ra(e, o, l), ++o, --l; i(e[o], a) < 0; ) ++o;
      for (; i(e[l], a) > 0; ) --l;
    }
    (i(e[r], a) === 0 ? Ra(e, r, l) : (++l, Ra(e, l, n)),
      l <= t && (r = l + 1),
      t <= l && (n = l - 1));
  }
  return e;
}
function Ra(e, t, r) {
  const n = e[t];
  ((e[t] = e[r]), (e[r] = n));
}
function Pz(e, t, r) {
  if (((e = Float64Array.from(vz(e))), !(!(n = e.length) || isNaN((t = +t))))) {
    if (t <= 0 || n < 2) return v0(e);
    if (t >= 1) return h0(e);
    var n,
      i = (n - 1) * t,
      a = Math.floor(i),
      o = h0(PO(e, a).subarray(0, a + 1)),
      l = v0(e.subarray(a + 1));
    return o + (l - o) * (i - a);
  }
}
function _z(e, t, r = SO) {
  if (!(!(n = e.length) || isNaN((t = +t)))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n,
      i = (n - 1) * t,
      a = Math.floor(i),
      o = +r(e[a], a, e),
      l = +r(e[a + 1], a + 1, e);
    return o + (l - o) * (i - a);
  }
}
function Az(e, t, r) {
  ((e = +e),
    (t = +t),
    (r = (i = arguments.length) < 2 ? ((t = e), (e = 0), 1) : i < 3 ? 1 : +r));
  for (
    var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i);
    ++n < i;

  )
    a[n] = e + n * r;
  return a;
}
function Kt(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function zr(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      (this.domain(e),
        typeof t == "function" ? this.interpolator(t) : this.range(t));
      break;
    }
  }
  return this;
}
const $p = Symbol("implicit");
function Vv() {
  var e = new d0(),
    t = [],
    r = [],
    n = $p;
  function i(a) {
    let o = e.get(a);
    if (o === void 0) {
      if (n !== $p) return n;
      e.set(a, (o = t.push(a) - 1));
    }
    return r[o % r.length];
  }
  return (
    (i.domain = function (a) {
      if (!arguments.length) return t.slice();
      ((t = []), (e = new d0()));
      for (const o of a) e.has(o) || e.set(o, t.push(o) - 1);
      return i;
    }),
    (i.range = function (a) {
      return arguments.length ? ((r = Array.from(a)), i) : r.slice();
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((n = a), i) : n;
    }),
    (i.copy = function () {
      return Vv(t, r).unknown(n);
    }),
    Kt.apply(i, arguments),
    i
  );
}
function Ro() {
  var e = Vv().unknown(void 0),
    t = e.domain,
    r = e.range,
    n = 0,
    i = 1,
    a,
    o,
    l = !1,
    u = 0,
    s = 0,
    f = 0.5;
  delete e.unknown;
  function c() {
    var d = t().length,
      p = i < n,
      m = p ? i : n,
      y = p ? n : i;
    ((a = (y - m) / Math.max(1, d - u + s * 2)),
      l && (a = Math.floor(a)),
      (m += (y - m - a * (d - u)) * f),
      (o = a * (1 - u)),
      l && ((m = Math.round(m)), (o = Math.round(o))));
    var x = Az(d).map(function (v) {
      return m + a * v;
    });
    return r(p ? x.reverse() : x);
  }
  return (
    (e.domain = function (d) {
      return arguments.length ? (t(d), c()) : t();
    }),
    (e.range = function (d) {
      return arguments.length
        ? (([n, i] = d), (n = +n), (i = +i), c())
        : [n, i];
    }),
    (e.rangeRound = function (d) {
      return (([n, i] = d), (n = +n), (i = +i), (l = !0), c());
    }),
    (e.bandwidth = function () {
      return o;
    }),
    (e.step = function () {
      return a;
    }),
    (e.round = function (d) {
      return arguments.length ? ((l = !!d), c()) : l;
    }),
    (e.padding = function (d) {
      return arguments.length ? ((u = Math.min(1, (s = +d))), c()) : u;
    }),
    (e.paddingInner = function (d) {
      return arguments.length ? ((u = Math.min(1, d)), c()) : u;
    }),
    (e.paddingOuter = function (d) {
      return arguments.length ? ((s = +d), c()) : s;
    }),
    (e.align = function (d) {
      return arguments.length ? ((f = Math.max(0, Math.min(1, d))), c()) : f;
    }),
    (e.copy = function () {
      return Ro(t(), [n, i]).round(l).paddingInner(u).paddingOuter(s).align(f);
    }),
    Kt.apply(c(), arguments)
  );
}
function _O(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return _O(t());
    }),
    e
  );
}
function so() {
  return _O(Ro.apply(null, arguments).paddingInner(1));
}
function Kv(e, t, r) {
  ((e.prototype = t.prototype = r), (r.constructor = e));
}
function AO(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Pl() {}
var Fo = 0.7,
  ds = 1 / Fo,
  Mi = "\\s*([+-]?\\d+)\\s*",
  Bo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  hr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  Ez = /^#([0-9a-f]{3,8})$/,
  jz = new RegExp(`^rgb\\(${Mi},${Mi},${Mi}\\)$`),
  $z = new RegExp(`^rgb\\(${hr},${hr},${hr}\\)$`),
  Tz = new RegExp(`^rgba\\(${Mi},${Mi},${Mi},${Bo}\\)$`),
  Cz = new RegExp(`^rgba\\(${hr},${hr},${hr},${Bo}\\)$`),
  kz = new RegExp(`^hsl\\(${Bo},${hr},${hr}\\)$`),
  Mz = new RegExp(`^hsla\\(${Bo},${hr},${hr},${Bo}\\)$`),
  m0 = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
Kv(Pl, zo, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: y0,
  formatHex: y0,
  formatHex8: Nz,
  formatHsl: Iz,
  formatRgb: g0,
  toString: g0,
});
function y0() {
  return this.rgb().formatHex();
}
function Nz() {
  return this.rgb().formatHex8();
}
function Iz() {
  return EO(this).formatHsl();
}
function g0() {
  return this.rgb().formatRgb();
}
function zo(e) {
  var t, r;
  return (
    (e = (e + "").trim().toLowerCase()),
    (t = Ez.exec(e))
      ? ((r = t[1].length),
        (t = parseInt(t[1], 16)),
        r === 6
          ? b0(t)
          : r === 3
            ? new vt(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1,
              )
            : r === 8
              ? ru(
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  (t & 255) / 255,
                )
              : r === 4
                ? ru(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = jz.exec(e))
        ? new vt(t[1], t[2], t[3], 1)
        : (t = $z.exec(e))
          ? new vt(
              (t[1] * 255) / 100,
              (t[2] * 255) / 100,
              (t[3] * 255) / 100,
              1,
            )
          : (t = Tz.exec(e))
            ? ru(t[1], t[2], t[3], t[4])
            : (t = Cz.exec(e))
              ? ru(
                  (t[1] * 255) / 100,
                  (t[2] * 255) / 100,
                  (t[3] * 255) / 100,
                  t[4],
                )
              : (t = kz.exec(e))
                ? S0(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = Mz.exec(e))
                  ? S0(t[1], t[2] / 100, t[3] / 100, t[4])
                  : m0.hasOwnProperty(e)
                    ? b0(m0[e])
                    : e === "transparent"
                      ? new vt(NaN, NaN, NaN, 0)
                      : null
  );
}
function b0(e) {
  return new vt((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function ru(e, t, r, n) {
  return (n <= 0 && (e = t = r = NaN), new vt(e, t, r, n));
}
function Dz(e) {
  return (
    e instanceof Pl || (e = zo(e)),
    e ? ((e = e.rgb()), new vt(e.r, e.g, e.b, e.opacity)) : new vt()
  );
}
function Tp(e, t, r, n) {
  return arguments.length === 1 ? Dz(e) : new vt(e, t, r, n ?? 1);
}
function vt(e, t, r, n) {
  ((this.r = +e), (this.g = +t), (this.b = +r), (this.opacity = +n));
}
Kv(
  vt,
  Tp,
  AO(Pl, {
    brighter(e) {
      return (
        (e = e == null ? ds : Math.pow(ds, e)),
        new vt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Fo : Math.pow(Fo, e)),
        new vt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new vt(Fn(this.r), Fn(this.g), Fn(this.b), ps(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: x0,
    formatHex: x0,
    formatHex8: Lz,
    formatRgb: w0,
    toString: w0,
  }),
);
function x0() {
  return `#${Nn(this.r)}${Nn(this.g)}${Nn(this.b)}`;
}
function Lz() {
  return `#${Nn(this.r)}${Nn(this.g)}${Nn(this.b)}${Nn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function w0() {
  const e = ps(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Fn(this.r)}, ${Fn(this.g)}, ${Fn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ps(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Fn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Nn(e) {
  return ((e = Fn(e)), (e < 16 ? "0" : "") + e.toString(16));
}
function S0(e, t, r, n) {
  return (
    n <= 0
      ? (e = t = r = NaN)
      : r <= 0 || r >= 1
        ? (e = t = NaN)
        : t <= 0 && (e = NaN),
    new rr(e, t, r, n)
  );
}
function EO(e) {
  if (e instanceof rr) return new rr(e.h, e.s, e.l, e.opacity);
  if ((e instanceof Pl || (e = zo(e)), !e)) return new rr();
  if (e instanceof rr) return e;
  e = e.rgb();
  var t = e.r / 255,
    r = e.g / 255,
    n = e.b / 255,
    i = Math.min(t, r, n),
    a = Math.max(t, r, n),
    o = NaN,
    l = a - i,
    u = (a + i) / 2;
  return (
    l
      ? (t === a
          ? (o = (r - n) / l + (r < n) * 6)
          : r === a
            ? (o = (n - t) / l + 2)
            : (o = (t - r) / l + 4),
        (l /= u < 0.5 ? a + i : 2 - a - i),
        (o *= 60))
      : (l = u > 0 && u < 1 ? 0 : o),
    new rr(o, l, u, e.opacity)
  );
}
function Rz(e, t, r, n) {
  return arguments.length === 1 ? EO(e) : new rr(e, t, r, n ?? 1);
}
function rr(e, t, r, n) {
  ((this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +n));
}
Kv(
  rr,
  Rz,
  AO(Pl, {
    brighter(e) {
      return (
        (e = e == null ? ds : Math.pow(ds, e)),
        new rr(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? Fo : Math.pow(Fo, e)),
        new rr(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        r = this.l,
        n = r + (r < 0.5 ? r : 1 - r) * t,
        i = 2 * r - n;
      return new vt(
        Uf(e >= 240 ? e - 240 : e + 120, i, n),
        Uf(e, i, n),
        Uf(e < 120 ? e + 240 : e - 120, i, n),
        this.opacity,
      );
    },
    clamp() {
      return new rr(O0(this.h), nu(this.s), nu(this.l), ps(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const e = ps(this.opacity);
      return `${e === 1 ? "hsl(" : "hsla("}${O0(this.h)}, ${nu(this.s) * 100}%, ${nu(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
    },
  }),
);
function O0(e) {
  return ((e = (e || 0) % 360), e < 0 ? e + 360 : e);
}
function nu(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Uf(e, t, r) {
  return (
    (e < 60
      ? t + ((r - t) * e) / 60
      : e < 180
        ? r
        : e < 240
          ? t + ((r - t) * (240 - e)) / 60
          : t) * 255
  );
}
const Gv = (e) => () => e;
function Fz(e, t) {
  return function (r) {
    return e + r * t;
  };
}
function Bz(e, t, r) {
  return (
    (e = Math.pow(e, r)),
    (t = Math.pow(t, r) - e),
    (r = 1 / r),
    function (n) {
      return Math.pow(e + n * t, r);
    }
  );
}
function zz(e) {
  return (e = +e) == 1
    ? jO
    : function (t, r) {
        return r - t ? Bz(t, r, e) : Gv(isNaN(t) ? r : t);
      };
}
function jO(e, t) {
  var r = t - e;
  return r ? Fz(e, r) : Gv(isNaN(e) ? t : e);
}
const P0 = (function e(t) {
  var r = zz(t);
  function n(i, a) {
    var o = r((i = Tp(i)).r, (a = Tp(a)).r),
      l = r(i.g, a.g),
      u = r(i.b, a.b),
      s = jO(i.opacity, a.opacity);
    return function (f) {
      return (
        (i.r = o(f)),
        (i.g = l(f)),
        (i.b = u(f)),
        (i.opacity = s(f)),
        i + ""
      );
    };
  }
  return ((n.gamma = e), n);
})(1);
function Uz(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0,
    n = t.slice(),
    i;
  return function (a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function Wz(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Hz(e, t) {
  var r = t ? t.length : 0,
    n = e ? Math.min(r, e.length) : 0,
    i = new Array(n),
    a = new Array(r),
    o;
  for (o = 0; o < n; ++o) i[o] = Oa(e[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function (l) {
    for (o = 0; o < n; ++o) a[o] = i[o](l);
    return a;
  };
}
function Vz(e, t) {
  var r = new Date();
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return (r.setTime(e * (1 - n) + t * n), r);
    }
  );
}
function hs(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return e * (1 - r) + t * r;
    }
  );
}
function Kz(e, t) {
  var r = {},
    n = {},
    i;
  ((e === null || typeof e != "object") && (e = {}),
    (t === null || typeof t != "object") && (t = {}));
  for (i in t) i in e ? (r[i] = Oa(e[i], t[i])) : (n[i] = t[i]);
  return function (a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var Cp = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  Wf = new RegExp(Cp.source, "g");
function Gz(e) {
  return function () {
    return e;
  };
}
function qz(e) {
  return function (t) {
    return e(t) + "";
  };
}
function Xz(e, t) {
  var r = (Cp.lastIndex = Wf.lastIndex = 0),
    n,
    i,
    a,
    o = -1,
    l = [],
    u = [];
  for (e = e + "", t = t + ""; (n = Cp.exec(e)) && (i = Wf.exec(t)); )
    ((a = i.index) > r &&
      ((a = t.slice(r, a)), l[o] ? (l[o] += a) : (l[++o] = a)),
      (n = n[0]) === (i = i[0])
        ? l[o]
          ? (l[o] += i)
          : (l[++o] = i)
        : ((l[++o] = null), u.push({ i: o, x: hs(n, i) })),
      (r = Wf.lastIndex));
  return (
    r < t.length && ((a = t.slice(r)), l[o] ? (l[o] += a) : (l[++o] = a)),
    l.length < 2
      ? u[0]
        ? qz(u[0].x)
        : Gz(t)
      : ((t = u.length),
        function (s) {
          for (var f = 0, c; f < t; ++f) l[(c = u[f]).i] = c.x(s);
          return l.join("");
        })
  );
}
function Oa(e, t) {
  var r = typeof t,
    n;
  return t == null || r === "boolean"
    ? Gv(t)
    : (r === "number"
        ? hs
        : r === "string"
          ? (n = zo(t))
            ? ((t = n), P0)
            : Xz
          : t instanceof zo
            ? P0
            : t instanceof Date
              ? Vz
              : Wz(t)
                ? Uz
                : Array.isArray(t)
                  ? Hz
                  : (typeof t.valueOf != "function" &&
                        typeof t.toString != "function") ||
                      isNaN(t)
                    ? Kz
                    : hs)(e, t);
}
function qv(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return Math.round(e * (1 - r) + t * r);
    }
  );
}
function Yz(e, t) {
  t === void 0 && ((t = e), (e = Oa));
  for (
    var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n);
    r < n;

  )
    a[r] = e(i, (i = t[++r]));
  return function (o) {
    var l = Math.max(0, Math.min(n - 1, Math.floor((o *= n))));
    return a[l](o - l);
  };
}
function Qz(e) {
  return function () {
    return e;
  };
}
function vs(e) {
  return +e;
}
var _0 = [0, 1];
function lt(e) {
  return e;
}
function kp(e, t) {
  return (t -= e = +e)
    ? function (r) {
        return (r - e) / t;
      }
    : Qz(isNaN(t) ? NaN : 0.5);
}
function Zz(e, t) {
  var r;
  return (
    e > t && ((r = e), (e = t), (t = r)),
    function (n) {
      return Math.max(e, Math.min(t, n));
    }
  );
}
function Jz(e, t, r) {
  var n = e[0],
    i = e[1],
    a = t[0],
    o = t[1];
  return (
    i < n ? ((n = kp(i, n)), (a = r(o, a))) : ((n = kp(n, i)), (a = r(a, o))),
    function (l) {
      return a(n(l));
    }
  );
}
function e4(e, t, r) {
  var n = Math.min(e.length, t.length) - 1,
    i = new Array(n),
    a = new Array(n),
    o = -1;
  for (
    e[n] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++o < n;

  )
    ((i[o] = kp(e[o], e[o + 1])), (a[o] = r(t[o], t[o + 1])));
  return function (l) {
    var u = Ol(e, l, 1, n) - 1;
    return a[u](i[u](l));
  };
}
function _l(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function Nc() {
  var e = _0,
    t = _0,
    r = Oa,
    n,
    i,
    a,
    o = lt,
    l,
    u,
    s;
  function f() {
    var d = Math.min(e.length, t.length);
    return (
      o !== lt && (o = Zz(e[0], e[d - 1])),
      (l = d > 2 ? e4 : Jz),
      (u = s = null),
      c
    );
  }
  function c(d) {
    return d == null || isNaN((d = +d))
      ? a
      : (u || (u = l(e.map(n), t, r)))(n(o(d)));
  }
  return (
    (c.invert = function (d) {
      return o(i((s || (s = l(t, e.map(n), hs)))(d)));
    }),
    (c.domain = function (d) {
      return arguments.length ? ((e = Array.from(d, vs)), f()) : e.slice();
    }),
    (c.range = function (d) {
      return arguments.length ? ((t = Array.from(d)), f()) : t.slice();
    }),
    (c.rangeRound = function (d) {
      return ((t = Array.from(d)), (r = qv), f());
    }),
    (c.clamp = function (d) {
      return arguments.length ? ((o = d ? !0 : lt), f()) : o !== lt;
    }),
    (c.interpolate = function (d) {
      return arguments.length ? ((r = d), f()) : r;
    }),
    (c.unknown = function (d) {
      return arguments.length ? ((a = d), c) : a;
    }),
    function (d, p) {
      return ((n = d), (i = p), f());
    }
  );
}
function Xv() {
  return Nc()(lt, lt);
}
function t4(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString("en").replace(/,/g, "")
    : e.toString(10);
}
function ms(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"),
    n = e.slice(0, r);
  return [n.length > 1 ? n[0] + n.slice(2) : n, +e.slice(r + 1)];
}
function Gi(e) {
  return ((e = ms(Math.abs(e))), e ? e[1] : NaN);
}
function r4(e, t) {
  return function (r, n) {
    for (
      var i = r.length, a = [], o = 0, l = e[0], u = 0;
      i > 0 &&
      l > 0 &&
      (u + l + 1 > n && (l = Math.max(1, n - u)),
      a.push(r.substring((i -= l), i + l)),
      !((u += l + 1) > n));

    )
      l = e[(o = (o + 1) % e.length)];
    return a.reverse().join(t);
  };
}
function n4(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (r) {
      return e[+r];
    });
  };
}
var i4 =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Uo(e) {
  if (!(t = i4.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Yv({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10],
  });
}
Uo.prototype = Yv.prototype;
function Yv(e) {
  ((this.fill = e.fill === void 0 ? " " : e.fill + ""),
    (this.align = e.align === void 0 ? ">" : e.align + ""),
    (this.sign = e.sign === void 0 ? "-" : e.sign + ""),
    (this.symbol = e.symbol === void 0 ? "" : e.symbol + ""),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? "" : e.type + ""));
}
Yv.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? "0" : "") +
    (this.width === void 0 ? "" : Math.max(1, this.width | 0)) +
    (this.comma ? "," : "") +
    (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) +
    (this.trim ? "~" : "") +
    this.type
  );
};
function a4(e) {
  e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = i = r;
        break;
      case "0":
        (n === 0 && (n = r), (i = r));
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var ys;
function o4(e, t) {
  var r = ms(e, t);
  if (!r) return ((ys = void 0), e.toPrecision(t));
  var n = r[0],
    i = r[1],
    a = i - (ys = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    o = n.length;
  return a === o
    ? n
    : a > o
      ? n + new Array(a - o + 1).join("0")
      : a > 0
        ? n.slice(0, a) + "." + n.slice(a)
        : "0." + new Array(1 - a).join("0") + ms(e, Math.max(0, t + a - 1))[0];
}
function A0(e, t) {
  var r = ms(e, t);
  if (!r) return e + "";
  var n = r[0],
    i = r[1];
  return i < 0
    ? "0." + new Array(-i).join("0") + n
    : n.length > i + 1
      ? n.slice(0, i + 1) + "." + n.slice(i + 1)
      : n + new Array(i - n.length + 2).join("0");
}
const E0 = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: t4,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => A0(e * 100, t),
  r: A0,
  s: o4,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function j0(e) {
  return e;
}
var $0 = Array.prototype.map,
  T0 = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "µ",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y",
  ];
function l4(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? j0
        : r4($0.call(e.grouping, Number), e.thousands + ""),
    r = e.currency === void 0 ? "" : e.currency[0] + "",
    n = e.currency === void 0 ? "" : e.currency[1] + "",
    i = e.decimal === void 0 ? "." : e.decimal + "",
    a = e.numerals === void 0 ? j0 : n4($0.call(e.numerals, String)),
    o = e.percent === void 0 ? "%" : e.percent + "",
    l = e.minus === void 0 ? "−" : e.minus + "",
    u = e.nan === void 0 ? "NaN" : e.nan + "";
  function s(c, d) {
    c = Uo(c);
    var p = c.fill,
      m = c.align,
      y = c.sign,
      x = c.symbol,
      v = c.zero,
      h = c.width,
      g = c.comma,
      S = c.precision,
      b = c.trim,
      w = c.type;
    (w === "n"
      ? ((g = !0), (w = "g"))
      : E0[w] || (S === void 0 && (S = 12), (b = !0), (w = "g")),
      (v || (p === "0" && m === "=")) && ((v = !0), (p = "0"), (m = "=")));
    var P =
        (d && d.prefix !== void 0 ? d.prefix : "") +
        (x === "$"
          ? r
          : x === "#" && /[boxX]/.test(w)
            ? "0" + w.toLowerCase()
            : ""),
      _ =
        (x === "$" ? n : /[%p]/.test(w) ? o : "") +
        (d && d.suffix !== void 0 ? d.suffix : ""),
      A = E0[w],
      $ = /[defgprs%]/.test(w);
    S =
      S === void 0
        ? 6
        : /[gprs]/.test(w)
          ? Math.max(1, Math.min(21, S))
          : Math.max(0, Math.min(20, S));
    function C(j) {
      var D = P,
        N = _,
        M,
        L,
        F;
      if (w === "c") ((N = A(j) + N), (j = ""));
      else {
        j = +j;
        var T = j < 0 || 1 / j < 0;
        if (
          ((j = isNaN(j) ? u : A(Math.abs(j), S)),
          b && (j = a4(j)),
          T && +j == 0 && y !== "+" && (T = !1),
          (D = (T ? (y === "(" ? y : l) : y === "-" || y === "(" ? "" : y) + D),
          (N =
            (w === "s" && !isNaN(j) && ys !== void 0 ? T0[8 + ys / 3] : "") +
            N +
            (T && y === "(" ? ")" : "")),
          $)
        ) {
          for (M = -1, L = j.length; ++M < L; )
            if (((F = j.charCodeAt(M)), 48 > F || F > 57)) {
              ((N = (F === 46 ? i + j.slice(M + 1) : j.slice(M)) + N),
                (j = j.slice(0, M)));
              break;
            }
        }
      }
      g && !v && (j = t(j, 1 / 0));
      var I = D.length + j.length + N.length,
        R = I < h ? new Array(h - I + 1).join(p) : "";
      switch (
        (g && v && ((j = t(R + j, R.length ? h - N.length : 1 / 0)), (R = "")),
        m)
      ) {
        case "<":
          j = D + j + N + R;
          break;
        case "=":
          j = D + R + j + N;
          break;
        case "^":
          j = R.slice(0, (I = R.length >> 1)) + D + j + N + R.slice(I);
          break;
        default:
          j = R + D + j + N;
          break;
      }
      return a(j);
    }
    return (
      (C.toString = function () {
        return c + "";
      }),
      C
    );
  }
  function f(c, d) {
    var p = Math.max(-8, Math.min(8, Math.floor(Gi(d) / 3))) * 3,
      m = Math.pow(10, -p),
      y = s(((c = Uo(c)), (c.type = "f"), c), { suffix: T0[8 + p / 3] });
    return function (x) {
      return y(m * x);
    };
  }
  return { format: s, formatPrefix: f };
}
var iu, Qv, $O;
u4({ thousands: ",", grouping: [3], currency: ["$", ""] });
function u4(e) {
  return ((iu = l4(e)), (Qv = iu.format), ($O = iu.formatPrefix), iu);
}
function s4(e) {
  return Math.max(0, -Gi(Math.abs(e)));
}
function c4(e, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(Gi(t) / 3))) * 3 - Gi(Math.abs(e)),
  );
}
function f4(e, t) {
  return (
    (e = Math.abs(e)),
    (t = Math.abs(t) - e),
    Math.max(0, Gi(t) - Gi(e)) + 1
  );
}
function TO(e, t, r, n) {
  var i = jp(e, t, r),
    a;
  switch (((n = Uo(n ?? ",f")), n.type)) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return (
        n.precision == null && !isNaN((a = c4(i, o))) && (n.precision = a),
        $O(n, o)
      );
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null &&
        !isNaN((a = f4(i, Math.max(Math.abs(e), Math.abs(t))))) &&
        (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null &&
        !isNaN((a = s4(i))) &&
        (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return Qv(n);
}
function bn(e) {
  var t = e.domain;
  return (
    (e.ticks = function (r) {
      var n = t();
      return Ap(n[0], n[n.length - 1], r ?? 10);
    }),
    (e.tickFormat = function (r, n) {
      var i = t();
      return TO(i[0], i[i.length - 1], r ?? 10, n);
    }),
    (e.nice = function (r) {
      r == null && (r = 10);
      var n = t(),
        i = 0,
        a = n.length - 1,
        o = n[i],
        l = n[a],
        u,
        s,
        f = 10;
      for (
        l < o && ((s = o), (o = l), (l = s), (s = i), (i = a), (a = s));
        f-- > 0;

      ) {
        if (((s = Ep(o, l, r)), s === u)) return ((n[i] = o), (n[a] = l), t(n));
        if (s > 0) ((o = Math.floor(o / s) * s), (l = Math.ceil(l / s) * s));
        else if (s < 0)
          ((o = Math.ceil(o * s) / s), (l = Math.floor(l * s) / s));
        else break;
        u = s;
      }
      return e;
    }),
    e
  );
}
function gs() {
  var e = Xv();
  return (
    (e.copy = function () {
      return _l(e, gs());
    }),
    Kt.apply(e, arguments),
    bn(e)
  );
}
function CO(e) {
  var t;
  function r(n) {
    return n == null || isNaN((n = +n)) ? t : n;
  }
  return (
    (r.invert = r),
    (r.domain = r.range =
      function (n) {
        return arguments.length ? ((e = Array.from(n, vs)), r) : e.slice();
      }),
    (r.unknown = function (n) {
      return arguments.length ? ((t = n), r) : t;
    }),
    (r.copy = function () {
      return CO(e).unknown(t);
    }),
    (e = arguments.length ? Array.from(e, vs) : [0, 1]),
    bn(r)
  );
}
function kO(e, t) {
  e = e.slice();
  var r = 0,
    n = e.length - 1,
    i = e[r],
    a = e[n],
    o;
  return (
    a < i && ((o = r), (r = n), (n = o), (o = i), (i = a), (a = o)),
    (e[r] = t.floor(i)),
    (e[n] = t.ceil(a)),
    e
  );
}
function C0(e) {
  return Math.log(e);
}
function k0(e) {
  return Math.exp(e);
}
function d4(e) {
  return -Math.log(-e);
}
function p4(e) {
  return -Math.exp(-e);
}
function h4(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function v4(e) {
  return e === 10 ? h4 : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function m4(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)), (t) => Math.log(t) / e);
}
function M0(e) {
  return (t, r) => -e(-t, r);
}
function Zv(e) {
  const t = e(C0, k0),
    r = t.domain;
  let n = 10,
    i,
    a;
  function o() {
    return (
      (i = m4(n)),
      (a = v4(n)),
      r()[0] < 0 ? ((i = M0(i)), (a = M0(a)), e(d4, p4)) : e(C0, k0),
      t
    );
  }
  return (
    (t.base = function (l) {
      return arguments.length ? ((n = +l), o()) : n;
    }),
    (t.domain = function (l) {
      return arguments.length ? (r(l), o()) : r();
    }),
    (t.ticks = (l) => {
      const u = r();
      let s = u[0],
        f = u[u.length - 1];
      const c = f < s;
      c && ([s, f] = [f, s]);
      let d = i(s),
        p = i(f),
        m,
        y;
      const x = l == null ? 10 : +l;
      let v = [];
      if (!(n % 1) && p - d < x) {
        if (((d = Math.floor(d)), (p = Math.ceil(p)), s > 0)) {
          for (; d <= p; ++d)
            for (m = 1; m < n; ++m)
              if (((y = d < 0 ? m / a(-d) : m * a(d)), !(y < s))) {
                if (y > f) break;
                v.push(y);
              }
        } else
          for (; d <= p; ++d)
            for (m = n - 1; m >= 1; --m)
              if (((y = d > 0 ? m / a(-d) : m * a(d)), !(y < s))) {
                if (y > f) break;
                v.push(y);
              }
        v.length * 2 < x && (v = Ap(s, f, x));
      } else v = Ap(d, p, Math.min(p - d, x)).map(a);
      return c ? v.reverse() : v;
    }),
    (t.tickFormat = (l, u) => {
      if (
        (l == null && (l = 10),
        u == null && (u = n === 10 ? "s" : ","),
        typeof u != "function" &&
          (!(n % 1) && (u = Uo(u)).precision == null && (u.trim = !0),
          (u = Qv(u))),
        l === 1 / 0)
      )
        return u;
      const s = Math.max(1, (n * l) / t.ticks().length);
      return (f) => {
        let c = f / a(Math.round(i(f)));
        return (c * n < n - 0.5 && (c *= n), c <= s ? u(f) : "");
      };
    }),
    (t.nice = () =>
      r(
        kO(r(), {
          floor: (l) => a(Math.floor(i(l))),
          ceil: (l) => a(Math.ceil(i(l))),
        }),
      )),
    t
  );
}
function MO() {
  const e = Zv(Nc()).domain([1, 10]);
  return (
    (e.copy = () => _l(e, MO()).base(e.base())),
    Kt.apply(e, arguments),
    e
  );
}
function N0(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function I0(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Jv(e) {
  var t = 1,
    r = e(N0(t), I0(t));
  return (
    (r.constant = function (n) {
      return arguments.length ? e(N0((t = +n)), I0(t)) : t;
    }),
    bn(r)
  );
}
function NO() {
  var e = Jv(Nc());
  return (
    (e.copy = function () {
      return _l(e, NO()).constant(e.constant());
    }),
    Kt.apply(e, arguments)
  );
}
function D0(e) {
  return function (t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function y4(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function g4(e) {
  return e < 0 ? -e * e : e * e;
}
function em(e) {
  var t = e(lt, lt),
    r = 1;
  function n() {
    return r === 1 ? e(lt, lt) : r === 0.5 ? e(y4, g4) : e(D0(r), D0(1 / r));
  }
  return (
    (t.exponent = function (i) {
      return arguments.length ? ((r = +i), n()) : r;
    }),
    bn(t)
  );
}
function tm() {
  var e = em(Nc());
  return (
    (e.copy = function () {
      return _l(e, tm()).exponent(e.exponent());
    }),
    Kt.apply(e, arguments),
    e
  );
}
function b4() {
  return tm.apply(null, arguments).exponent(0.5);
}
function L0(e) {
  return Math.sign(e) * e * e;
}
function x4(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function IO() {
  var e = Xv(),
    t = [0, 1],
    r = !1,
    n;
  function i(a) {
    var o = x4(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return (
    (i.invert = function (a) {
      return e.invert(L0(a));
    }),
    (i.domain = function (a) {
      return arguments.length ? (e.domain(a), i) : e.domain();
    }),
    (i.range = function (a) {
      return arguments.length
        ? (e.range((t = Array.from(a, vs)).map(L0)), i)
        : t.slice();
    }),
    (i.rangeRound = function (a) {
      return i.range(a).round(!0);
    }),
    (i.round = function (a) {
      return arguments.length ? ((r = !!a), i) : r;
    }),
    (i.clamp = function (a) {
      return arguments.length ? (e.clamp(a), i) : e.clamp();
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((n = a), i) : n;
    }),
    (i.copy = function () {
      return IO(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
    }),
    Kt.apply(i, arguments),
    bn(i)
  );
}
function DO() {
  var e = [],
    t = [],
    r = [],
    n;
  function i() {
    var o = 0,
      l = Math.max(1, t.length);
    for (r = new Array(l - 1); ++o < l; ) r[o - 1] = _z(e, o / l);
    return a;
  }
  function a(o) {
    return o == null || isNaN((o = +o)) ? n : t[Ol(r, o)];
  }
  return (
    (a.invertExtent = function (o) {
      var l = t.indexOf(o);
      return l < 0
        ? [NaN, NaN]
        : [l > 0 ? r[l - 1] : e[0], l < r.length ? r[l] : e[e.length - 1]];
    }),
    (a.domain = function (o) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let l of o) l != null && !isNaN((l = +l)) && e.push(l);
      return (e.sort(sn), i());
    }),
    (a.range = function (o) {
      return arguments.length ? ((t = Array.from(o)), i()) : t.slice();
    }),
    (a.unknown = function (o) {
      return arguments.length ? ((n = o), a) : n;
    }),
    (a.quantiles = function () {
      return r.slice();
    }),
    (a.copy = function () {
      return DO().domain(e).range(t).unknown(n);
    }),
    Kt.apply(a, arguments)
  );
}
function LO() {
  var e = 0,
    t = 1,
    r = 1,
    n = [0.5],
    i = [0, 1],
    a;
  function o(u) {
    return u != null && u <= u ? i[Ol(n, u, 0, r)] : a;
  }
  function l() {
    var u = -1;
    for (n = new Array(r); ++u < r; )
      n[u] = ((u + 1) * t - (u - r) * e) / (r + 1);
    return o;
  }
  return (
    (o.domain = function (u) {
      return arguments.length
        ? (([e, t] = u), (e = +e), (t = +t), l())
        : [e, t];
    }),
    (o.range = function (u) {
      return arguments.length
        ? ((r = (i = Array.from(u)).length - 1), l())
        : i.slice();
    }),
    (o.invertExtent = function (u) {
      var s = i.indexOf(u);
      return s < 0
        ? [NaN, NaN]
        : s < 1
          ? [e, n[0]]
          : s >= r
            ? [n[r - 1], t]
            : [n[s - 1], n[s]];
    }),
    (o.unknown = function (u) {
      return (arguments.length && (a = u), o);
    }),
    (o.thresholds = function () {
      return n.slice();
    }),
    (o.copy = function () {
      return LO().domain([e, t]).range(i).unknown(a);
    }),
    Kt.apply(bn(o), arguments)
  );
}
function RO() {
  var e = [0.5],
    t = [0, 1],
    r,
    n = 1;
  function i(a) {
    return a != null && a <= a ? t[Ol(e, a, 0, n)] : r;
  }
  return (
    (i.domain = function (a) {
      return arguments.length
        ? ((e = Array.from(a)), (n = Math.min(e.length, t.length - 1)), i)
        : e.slice();
    }),
    (i.range = function (a) {
      return arguments.length
        ? ((t = Array.from(a)), (n = Math.min(e.length, t.length - 1)), i)
        : t.slice();
    }),
    (i.invertExtent = function (a) {
      var o = t.indexOf(a);
      return [e[o - 1], e[o]];
    }),
    (i.unknown = function (a) {
      return arguments.length ? ((r = a), i) : r;
    }),
    (i.copy = function () {
      return RO().domain(e).range(t).unknown(r);
    }),
    Kt.apply(i, arguments)
  );
}
const Hf = new Date(),
  Vf = new Date();
function We(e, t, r, n) {
  function i(a) {
    return (e((a = arguments.length === 0 ? new Date() : new Date(+a))), a);
  }
  return (
    (i.floor = (a) => (e((a = new Date(+a))), a)),
    (i.ceil = (a) => (e((a = new Date(a - 1))), t(a, 1), e(a), a)),
    (i.round = (a) => {
      const o = i(a),
        l = i.ceil(a);
      return a - o < l - a ? o : l;
    }),
    (i.offset = (a, o) => (
      t((a = new Date(+a)), o == null ? 1 : Math.floor(o)),
      a
    )),
    (i.range = (a, o, l) => {
      const u = [];
      if (
        ((a = i.ceil(a)),
        (l = l == null ? 1 : Math.floor(l)),
        !(a < o) || !(l > 0))
      )
        return u;
      let s;
      do (u.push((s = new Date(+a))), t(a, l), e(a));
      while (s < a && a < o);
      return u;
    }),
    (i.filter = (a) =>
      We(
        (o) => {
          if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
        },
        (o, l) => {
          if (o >= o)
            if (l < 0) for (; ++l <= 0; ) for (; t(o, -1), !a(o); );
            else for (; --l >= 0; ) for (; t(o, 1), !a(o); );
        },
      )),
    r &&
      ((i.count = (a, o) => (
        Hf.setTime(+a),
        Vf.setTime(+o),
        e(Hf),
        e(Vf),
        Math.floor(r(Hf, Vf))
      )),
      (i.every = (a) => (
        (a = Math.floor(a)),
        !isFinite(a) || !(a > 0)
          ? null
          : a > 1
            ? i.filter(
                n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0,
              )
            : i
      ))),
    i
  );
}
const bs = We(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e,
);
bs.every = (e) => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0)
    ? null
    : e > 1
      ? We(
          (t) => {
            t.setTime(Math.floor(t / e) * e);
          },
          (t, r) => {
            t.setTime(+t + r * e);
          },
          (t, r) => (r - t) / e,
        )
      : bs
);
bs.range;
const Or = 1e3,
  Rt = Or * 60,
  Pr = Rt * 60,
  Nr = Pr * 24,
  rm = Nr * 7,
  R0 = Nr * 30,
  Kf = Nr * 365,
  In = We(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * Or);
    },
    (e, t) => (t - e) / Or,
    (e) => e.getUTCSeconds(),
  );
In.range;
const nm = We(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * Or);
  },
  (e, t) => {
    e.setTime(+e + t * Rt);
  },
  (e, t) => (t - e) / Rt,
  (e) => e.getMinutes(),
);
nm.range;
const im = We(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * Rt);
  },
  (e, t) => (t - e) / Rt,
  (e) => e.getUTCMinutes(),
);
im.range;
const am = We(
  (e) => {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * Or - e.getMinutes() * Rt,
    );
  },
  (e, t) => {
    e.setTime(+e + t * Pr);
  },
  (e, t) => (t - e) / Pr,
  (e) => e.getHours(),
);
am.range;
const om = We(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * Pr);
  },
  (e, t) => (t - e) / Pr,
  (e) => e.getUTCHours(),
);
om.range;
const Al = We(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Rt) / Nr,
  (e) => e.getDate() - 1,
);
Al.range;
const Ic = We(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / Nr,
  (e) => e.getUTCDate() - 1,
);
Ic.range;
const FO = We(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / Nr,
  (e) => Math.floor(e / Nr),
);
FO.range;
function ei(e) {
  return We(
    (t) => {
      (t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0));
    },
    (t, r) => {
      t.setDate(t.getDate() + r * 7);
    },
    (t, r) =>
      (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Rt) / rm,
  );
}
const Dc = ei(0),
  xs = ei(1),
  w4 = ei(2),
  S4 = ei(3),
  qi = ei(4),
  O4 = ei(5),
  P4 = ei(6);
Dc.range;
xs.range;
w4.range;
S4.range;
qi.range;
O4.range;
P4.range;
function ti(e) {
  return We(
    (t) => {
      (t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0));
    },
    (t, r) => {
      t.setUTCDate(t.getUTCDate() + r * 7);
    },
    (t, r) => (r - t) / rm,
  );
}
const Lc = ti(0),
  ws = ti(1),
  _4 = ti(2),
  A4 = ti(3),
  Xi = ti(4),
  E4 = ti(5),
  j4 = ti(6);
Lc.range;
ws.range;
_4.range;
A4.range;
Xi.range;
E4.range;
j4.range;
const lm = We(
  (e) => {
    (e.setDate(1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setMonth(e.getMonth() + t);
  },
  (e, t) =>
    t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
  (e) => e.getMonth(),
);
lm.range;
const um = We(
  (e) => {
    (e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCMonth(e.getUTCMonth() + t);
  },
  (e, t) =>
    t.getUTCMonth() -
    e.getUTCMonth() +
    (t.getUTCFullYear() - e.getUTCFullYear()) * 12,
  (e) => e.getUTCMonth(),
);
um.range;
const Ir = We(
  (e) => {
    (e.setMonth(0, 1), e.setHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear(),
);
Ir.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : We(
        (t) => {
          (t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0));
        },
        (t, r) => {
          t.setFullYear(t.getFullYear() + r * e);
        },
      );
Ir.range;
const Dr = We(
  (e) => {
    (e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0));
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear(),
);
Dr.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : We(
        (t) => {
          (t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0));
        },
        (t, r) => {
          t.setUTCFullYear(t.getUTCFullYear() + r * e);
        },
      );
Dr.range;
function BO(e, t, r, n, i, a) {
  const o = [
    [In, 1, Or],
    [In, 5, 5 * Or],
    [In, 15, 15 * Or],
    [In, 30, 30 * Or],
    [a, 1, Rt],
    [a, 5, 5 * Rt],
    [a, 15, 15 * Rt],
    [a, 30, 30 * Rt],
    [i, 1, Pr],
    [i, 3, 3 * Pr],
    [i, 6, 6 * Pr],
    [i, 12, 12 * Pr],
    [n, 1, Nr],
    [n, 2, 2 * Nr],
    [r, 1, rm],
    [t, 1, R0],
    [t, 3, 3 * R0],
    [e, 1, Kf],
  ];
  function l(s, f, c) {
    const d = f < s;
    d && ([s, f] = [f, s]);
    const p = c && typeof c.range == "function" ? c : u(s, f, c),
      m = p ? p.range(s, +f + 1) : [];
    return d ? m.reverse() : m;
  }
  function u(s, f, c) {
    const d = Math.abs(f - s) / c,
      p = Hv(([, , x]) => x).right(o, d);
    if (p === o.length) return e.every(jp(s / Kf, f / Kf, c));
    if (p === 0) return bs.every(Math.max(jp(s, f, c), 1));
    const [m, y] = o[d / o[p - 1][2] < o[p][2] / d ? p - 1 : p];
    return m.every(y);
  }
  return [l, u];
}
const [$4, T4] = BO(Dr, um, Lc, FO, om, im),
  [C4, k4] = BO(Ir, lm, Dc, Al, am, nm);
function Gf(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return (t.setFullYear(e.y), t);
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function qf(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return (t.setUTCFullYear(e.y), t);
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Fa(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function M4(e) {
  var t = e.dateTime,
    r = e.date,
    n = e.time,
    i = e.periods,
    a = e.days,
    o = e.shortDays,
    l = e.months,
    u = e.shortMonths,
    s = Ba(i),
    f = za(i),
    c = Ba(a),
    d = za(a),
    p = Ba(o),
    m = za(o),
    y = Ba(l),
    x = za(l),
    v = Ba(u),
    h = za(u),
    g = {
      a: F,
      A: T,
      b: I,
      B: R,
      c: null,
      d: H0,
      e: H0,
      f: r8,
      g: d8,
      G: h8,
      H: J4,
      I: e8,
      j: t8,
      L: zO,
      m: n8,
      M: i8,
      p: V,
      q: W,
      Q: G0,
      s: q0,
      S: a8,
      u: o8,
      U: l8,
      V: u8,
      w: s8,
      W: c8,
      x: null,
      X: null,
      y: f8,
      Y: p8,
      Z: v8,
      "%": K0,
    },
    S = {
      a: X,
      A: ne,
      b: xe,
      B: Te,
      c: null,
      d: V0,
      e: V0,
      f: b8,
      g: $8,
      G: C8,
      H: m8,
      I: y8,
      j: g8,
      L: WO,
      m: x8,
      M: w8,
      p: Ct,
      q: ft,
      Q: G0,
      s: q0,
      S: S8,
      u: O8,
      U: P8,
      V: _8,
      w: A8,
      W: E8,
      x: null,
      X: null,
      y: j8,
      Y: T8,
      Z: k8,
      "%": K0,
    },
    b = {
      a: $,
      A: C,
      b: j,
      B: D,
      c: N,
      d: U0,
      e: U0,
      f: X4,
      g: z0,
      G: B0,
      H: W0,
      I: W0,
      j: V4,
      L: q4,
      m: H4,
      M: K4,
      p: A,
      q: W4,
      Q: Q4,
      s: Z4,
      S: G4,
      u: R4,
      U: F4,
      V: B4,
      w: L4,
      W: z4,
      x: M,
      X: L,
      y: z0,
      Y: B0,
      Z: U4,
      "%": Y4,
    };
  ((g.x = w(r, g)),
    (g.X = w(n, g)),
    (g.c = w(t, g)),
    (S.x = w(r, S)),
    (S.X = w(n, S)),
    (S.c = w(t, S)));
  function w(K, Q) {
    return function (Z) {
      var z = [],
        Ae = -1,
        ie = 0,
        De = K.length,
        Le,
        dt,
        Ur;
      for (Z instanceof Date || (Z = new Date(+Z)); ++Ae < De; )
        K.charCodeAt(Ae) === 37 &&
          (z.push(K.slice(ie, Ae)),
          (dt = F0[(Le = K.charAt(++Ae))]) != null
            ? (Le = K.charAt(++Ae))
            : (dt = Le === "e" ? " " : "0"),
          (Ur = Q[Le]) && (Le = Ur(Z, dt)),
          z.push(Le),
          (ie = Ae + 1));
      return (z.push(K.slice(ie, Ae)), z.join(""));
    };
  }
  function P(K, Q) {
    return function (Z) {
      var z = Fa(1900, void 0, 1),
        Ae = _(z, K, (Z += ""), 0),
        ie,
        De;
      if (Ae != Z.length) return null;
      if ("Q" in z) return new Date(z.Q);
      if ("s" in z) return new Date(z.s * 1e3 + ("L" in z ? z.L : 0));
      if (
        (Q && !("Z" in z) && (z.Z = 0),
        "p" in z && (z.H = (z.H % 12) + z.p * 12),
        z.m === void 0 && (z.m = "q" in z ? z.q : 0),
        "V" in z)
      ) {
        if (z.V < 1 || z.V > 53) return null;
        ("w" in z || (z.w = 1),
          "Z" in z
            ? ((ie = qf(Fa(z.y, 0, 1))),
              (De = ie.getUTCDay()),
              (ie = De > 4 || De === 0 ? ws.ceil(ie) : ws(ie)),
              (ie = Ic.offset(ie, (z.V - 1) * 7)),
              (z.y = ie.getUTCFullYear()),
              (z.m = ie.getUTCMonth()),
              (z.d = ie.getUTCDate() + ((z.w + 6) % 7)))
            : ((ie = Gf(Fa(z.y, 0, 1))),
              (De = ie.getDay()),
              (ie = De > 4 || De === 0 ? xs.ceil(ie) : xs(ie)),
              (ie = Al.offset(ie, (z.V - 1) * 7)),
              (z.y = ie.getFullYear()),
              (z.m = ie.getMonth()),
              (z.d = ie.getDate() + ((z.w + 6) % 7))));
      } else
        ("W" in z || "U" in z) &&
          ("w" in z || (z.w = "u" in z ? z.u % 7 : "W" in z ? 1 : 0),
          (De =
            "Z" in z
              ? qf(Fa(z.y, 0, 1)).getUTCDay()
              : Gf(Fa(z.y, 0, 1)).getDay()),
          (z.m = 0),
          (z.d =
            "W" in z
              ? ((z.w + 6) % 7) + z.W * 7 - ((De + 5) % 7)
              : z.w + z.U * 7 - ((De + 6) % 7)));
      return "Z" in z
        ? ((z.H += (z.Z / 100) | 0), (z.M += z.Z % 100), qf(z))
        : Gf(z);
    };
  }
  function _(K, Q, Z, z) {
    for (var Ae = 0, ie = Q.length, De = Z.length, Le, dt; Ae < ie; ) {
      if (z >= De) return -1;
      if (((Le = Q.charCodeAt(Ae++)), Le === 37)) {
        if (
          ((Le = Q.charAt(Ae++)),
          (dt = b[Le in F0 ? Q.charAt(Ae++) : Le]),
          !dt || (z = dt(K, Z, z)) < 0)
        )
          return -1;
      } else if (Le != Z.charCodeAt(z++)) return -1;
    }
    return z;
  }
  function A(K, Q, Z) {
    var z = s.exec(Q.slice(Z));
    return z ? ((K.p = f.get(z[0].toLowerCase())), Z + z[0].length) : -1;
  }
  function $(K, Q, Z) {
    var z = p.exec(Q.slice(Z));
    return z ? ((K.w = m.get(z[0].toLowerCase())), Z + z[0].length) : -1;
  }
  function C(K, Q, Z) {
    var z = c.exec(Q.slice(Z));
    return z ? ((K.w = d.get(z[0].toLowerCase())), Z + z[0].length) : -1;
  }
  function j(K, Q, Z) {
    var z = v.exec(Q.slice(Z));
    return z ? ((K.m = h.get(z[0].toLowerCase())), Z + z[0].length) : -1;
  }
  function D(K, Q, Z) {
    var z = y.exec(Q.slice(Z));
    return z ? ((K.m = x.get(z[0].toLowerCase())), Z + z[0].length) : -1;
  }
  function N(K, Q, Z) {
    return _(K, t, Q, Z);
  }
  function M(K, Q, Z) {
    return _(K, r, Q, Z);
  }
  function L(K, Q, Z) {
    return _(K, n, Q, Z);
  }
  function F(K) {
    return o[K.getDay()];
  }
  function T(K) {
    return a[K.getDay()];
  }
  function I(K) {
    return u[K.getMonth()];
  }
  function R(K) {
    return l[K.getMonth()];
  }
  function V(K) {
    return i[+(K.getHours() >= 12)];
  }
  function W(K) {
    return 1 + ~~(K.getMonth() / 3);
  }
  function X(K) {
    return o[K.getUTCDay()];
  }
  function ne(K) {
    return a[K.getUTCDay()];
  }
  function xe(K) {
    return u[K.getUTCMonth()];
  }
  function Te(K) {
    return l[K.getUTCMonth()];
  }
  function Ct(K) {
    return i[+(K.getUTCHours() >= 12)];
  }
  function ft(K) {
    return 1 + ~~(K.getUTCMonth() / 3);
  }
  return {
    format: function (K) {
      var Q = w((K += ""), g);
      return (
        (Q.toString = function () {
          return K;
        }),
        Q
      );
    },
    parse: function (K) {
      var Q = P((K += ""), !1);
      return (
        (Q.toString = function () {
          return K;
        }),
        Q
      );
    },
    utcFormat: function (K) {
      var Q = w((K += ""), S);
      return (
        (Q.toString = function () {
          return K;
        }),
        Q
      );
    },
    utcParse: function (K) {
      var Q = P((K += ""), !0);
      return (
        (Q.toString = function () {
          return K;
        }),
        Q
      );
    },
  };
}
var F0 = { "-": "", _: " ", 0: "0" },
  Ge = /^\s*\d+/,
  N4 = /^%/,
  I4 = /[\\^$*+?|[\]().{}]/g;
function le(e, t, r) {
  var n = e < 0 ? "-" : "",
    i = (n ? -e : e) + "",
    a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function D4(e) {
  return e.replace(I4, "\\$&");
}
function Ba(e) {
  return new RegExp("^(?:" + e.map(D4).join("|") + ")", "i");
}
function za(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function L4(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 1));
  return n ? ((e.w = +n[0]), r + n[0].length) : -1;
}
function R4(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 1));
  return n ? ((e.u = +n[0]), r + n[0].length) : -1;
}
function F4(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 2));
  return n ? ((e.U = +n[0]), r + n[0].length) : -1;
}
function B4(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 2));
  return n ? ((e.V = +n[0]), r + n[0].length) : -1;
}
function z4(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 2));
  return n ? ((e.W = +n[0]), r + n[0].length) : -1;
}
function B0(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 4));
  return n ? ((e.y = +n[0]), r + n[0].length) : -1;
}
function z0(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 2));
  return n ? ((e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length) : -1;
}
function U4(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n
    ? ((e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), r + n[0].length)
    : -1;
}
function W4(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 1));
  return n ? ((e.q = n[0] * 3 - 3), r + n[0].length) : -1;
}
function H4(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 2));
  return n ? ((e.m = n[0] - 1), r + n[0].length) : -1;
}
function U0(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 2));
  return n ? ((e.d = +n[0]), r + n[0].length) : -1;
}
function V4(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 3));
  return n ? ((e.m = 0), (e.d = +n[0]), r + n[0].length) : -1;
}
function W0(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 2));
  return n ? ((e.H = +n[0]), r + n[0].length) : -1;
}
function K4(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 2));
  return n ? ((e.M = +n[0]), r + n[0].length) : -1;
}
function G4(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 2));
  return n ? ((e.S = +n[0]), r + n[0].length) : -1;
}
function q4(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 3));
  return n ? ((e.L = +n[0]), r + n[0].length) : -1;
}
function X4(e, t, r) {
  var n = Ge.exec(t.slice(r, r + 6));
  return n ? ((e.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
}
function Y4(e, t, r) {
  var n = N4.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function Q4(e, t, r) {
  var n = Ge.exec(t.slice(r));
  return n ? ((e.Q = +n[0]), r + n[0].length) : -1;
}
function Z4(e, t, r) {
  var n = Ge.exec(t.slice(r));
  return n ? ((e.s = +n[0]), r + n[0].length) : -1;
}
function H0(e, t) {
  return le(e.getDate(), t, 2);
}
function J4(e, t) {
  return le(e.getHours(), t, 2);
}
function e8(e, t) {
  return le(e.getHours() % 12 || 12, t, 2);
}
function t8(e, t) {
  return le(1 + Al.count(Ir(e), e), t, 3);
}
function zO(e, t) {
  return le(e.getMilliseconds(), t, 3);
}
function r8(e, t) {
  return zO(e, t) + "000";
}
function n8(e, t) {
  return le(e.getMonth() + 1, t, 2);
}
function i8(e, t) {
  return le(e.getMinutes(), t, 2);
}
function a8(e, t) {
  return le(e.getSeconds(), t, 2);
}
function o8(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function l8(e, t) {
  return le(Dc.count(Ir(e) - 1, e), t, 2);
}
function UO(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? qi(e) : qi.ceil(e);
}
function u8(e, t) {
  return ((e = UO(e)), le(qi.count(Ir(e), e) + (Ir(e).getDay() === 4), t, 2));
}
function s8(e) {
  return e.getDay();
}
function c8(e, t) {
  return le(xs.count(Ir(e) - 1, e), t, 2);
}
function f8(e, t) {
  return le(e.getFullYear() % 100, t, 2);
}
function d8(e, t) {
  return ((e = UO(e)), le(e.getFullYear() % 100, t, 2));
}
function p8(e, t) {
  return le(e.getFullYear() % 1e4, t, 4);
}
function h8(e, t) {
  var r = e.getDay();
  return (
    (e = r >= 4 || r === 0 ? qi(e) : qi.ceil(e)),
    le(e.getFullYear() % 1e4, t, 4)
  );
}
function v8(e) {
  var t = e.getTimezoneOffset();
  return (
    (t > 0 ? "-" : ((t *= -1), "+")) +
    le((t / 60) | 0, "0", 2) +
    le(t % 60, "0", 2)
  );
}
function V0(e, t) {
  return le(e.getUTCDate(), t, 2);
}
function m8(e, t) {
  return le(e.getUTCHours(), t, 2);
}
function y8(e, t) {
  return le(e.getUTCHours() % 12 || 12, t, 2);
}
function g8(e, t) {
  return le(1 + Ic.count(Dr(e), e), t, 3);
}
function WO(e, t) {
  return le(e.getUTCMilliseconds(), t, 3);
}
function b8(e, t) {
  return WO(e, t) + "000";
}
function x8(e, t) {
  return le(e.getUTCMonth() + 1, t, 2);
}
function w8(e, t) {
  return le(e.getUTCMinutes(), t, 2);
}
function S8(e, t) {
  return le(e.getUTCSeconds(), t, 2);
}
function O8(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function P8(e, t) {
  return le(Lc.count(Dr(e) - 1, e), t, 2);
}
function HO(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Xi(e) : Xi.ceil(e);
}
function _8(e, t) {
  return (
    (e = HO(e)),
    le(Xi.count(Dr(e), e) + (Dr(e).getUTCDay() === 4), t, 2)
  );
}
function A8(e) {
  return e.getUTCDay();
}
function E8(e, t) {
  return le(ws.count(Dr(e) - 1, e), t, 2);
}
function j8(e, t) {
  return le(e.getUTCFullYear() % 100, t, 2);
}
function $8(e, t) {
  return ((e = HO(e)), le(e.getUTCFullYear() % 100, t, 2));
}
function T8(e, t) {
  return le(e.getUTCFullYear() % 1e4, t, 4);
}
function C8(e, t) {
  var r = e.getUTCDay();
  return (
    (e = r >= 4 || r === 0 ? Xi(e) : Xi.ceil(e)),
    le(e.getUTCFullYear() % 1e4, t, 4)
  );
}
function k8() {
  return "+0000";
}
function K0() {
  return "%";
}
function G0(e) {
  return +e;
}
function q0(e) {
  return Math.floor(+e / 1e3);
}
var oi, VO, KO;
M8({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
});
function M8(e) {
  return (
    (oi = M4(e)),
    (VO = oi.format),
    oi.parse,
    (KO = oi.utcFormat),
    oi.utcParse,
    oi
  );
}
function N8(e) {
  return new Date(e);
}
function I8(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function sm(e, t, r, n, i, a, o, l, u, s) {
  var f = Xv(),
    c = f.invert,
    d = f.domain,
    p = s(".%L"),
    m = s(":%S"),
    y = s("%I:%M"),
    x = s("%I %p"),
    v = s("%a %d"),
    h = s("%b %d"),
    g = s("%B"),
    S = s("%Y");
  function b(w) {
    return (
      u(w) < w
        ? p
        : l(w) < w
          ? m
          : o(w) < w
            ? y
            : a(w) < w
              ? x
              : n(w) < w
                ? i(w) < w
                  ? v
                  : h
                : r(w) < w
                  ? g
                  : S
    )(w);
  }
  return (
    (f.invert = function (w) {
      return new Date(c(w));
    }),
    (f.domain = function (w) {
      return arguments.length ? d(Array.from(w, I8)) : d().map(N8);
    }),
    (f.ticks = function (w) {
      var P = d();
      return e(P[0], P[P.length - 1], w ?? 10);
    }),
    (f.tickFormat = function (w, P) {
      return P == null ? b : s(P);
    }),
    (f.nice = function (w) {
      var P = d();
      return (
        (!w || typeof w.range != "function") &&
          (w = t(P[0], P[P.length - 1], w ?? 10)),
        w ? d(kO(P, w)) : f
      );
    }),
    (f.copy = function () {
      return _l(f, sm(e, t, r, n, i, a, o, l, u, s));
    }),
    f
  );
}
function D8() {
  return Kt.apply(
    sm(C4, k4, Ir, lm, Dc, Al, am, nm, In, VO).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments,
  );
}
function L8() {
  return Kt.apply(
    sm($4, T4, Dr, um, Lc, Ic, om, im, In, KO).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments,
  );
}
function Rc() {
  var e = 0,
    t = 1,
    r,
    n,
    i,
    a,
    o = lt,
    l = !1,
    u;
  function s(c) {
    return c == null || isNaN((c = +c))
      ? u
      : o(
          i === 0
            ? 0.5
            : ((c = (a(c) - r) * i), l ? Math.max(0, Math.min(1, c)) : c),
        );
  }
  ((s.domain = function (c) {
    return arguments.length
      ? (([e, t] = c),
        (r = a((e = +e))),
        (n = a((t = +t))),
        (i = r === n ? 0 : 1 / (n - r)),
        s)
      : [e, t];
  }),
    (s.clamp = function (c) {
      return arguments.length ? ((l = !!c), s) : l;
    }),
    (s.interpolator = function (c) {
      return arguments.length ? ((o = c), s) : o;
    }));
  function f(c) {
    return function (d) {
      var p, m;
      return arguments.length ? (([p, m] = d), (o = c(p, m)), s) : [o(0), o(1)];
    };
  }
  return (
    (s.range = f(Oa)),
    (s.rangeRound = f(qv)),
    (s.unknown = function (c) {
      return arguments.length ? ((u = c), s) : u;
    }),
    function (c) {
      return (
        (a = c),
        (r = c(e)),
        (n = c(t)),
        (i = r === n ? 0 : 1 / (n - r)),
        s
      );
    }
  );
}
function xn(e, t) {
  return t
    .domain(e.domain())
    .interpolator(e.interpolator())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function GO() {
  var e = bn(Rc()(lt));
  return (
    (e.copy = function () {
      return xn(e, GO());
    }),
    zr.apply(e, arguments)
  );
}
function qO() {
  var e = Zv(Rc()).domain([1, 10]);
  return (
    (e.copy = function () {
      return xn(e, qO()).base(e.base());
    }),
    zr.apply(e, arguments)
  );
}
function XO() {
  var e = Jv(Rc());
  return (
    (e.copy = function () {
      return xn(e, XO()).constant(e.constant());
    }),
    zr.apply(e, arguments)
  );
}
function cm() {
  var e = em(Rc());
  return (
    (e.copy = function () {
      return xn(e, cm()).exponent(e.exponent());
    }),
    zr.apply(e, arguments)
  );
}
function R8() {
  return cm.apply(null, arguments).exponent(0.5);
}
function YO() {
  var e = [],
    t = lt;
  function r(n) {
    if (n != null && !isNaN((n = +n)))
      return t((Ol(e, n, 1) - 1) / (e.length - 1));
  }
  return (
    (r.domain = function (n) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let i of n) i != null && !isNaN((i = +i)) && e.push(i);
      return (e.sort(sn), r);
    }),
    (r.interpolator = function (n) {
      return arguments.length ? ((t = n), r) : t;
    }),
    (r.range = function () {
      return e.map((n, i) => t(i / (e.length - 1)));
    }),
    (r.quantiles = function (n) {
      return Array.from({ length: n + 1 }, (i, a) => Pz(e, a / n));
    }),
    (r.copy = function () {
      return YO(t).domain(e);
    }),
    zr.apply(r, arguments)
  );
}
function Fc() {
  var e = 0,
    t = 0.5,
    r = 1,
    n = 1,
    i,
    a,
    o,
    l,
    u,
    s = lt,
    f,
    c = !1,
    d;
  function p(y) {
    return isNaN((y = +y))
      ? d
      : ((y = 0.5 + ((y = +f(y)) - a) * (n * y < n * a ? l : u)),
        s(c ? Math.max(0, Math.min(1, y)) : y));
  }
  ((p.domain = function (y) {
    return arguments.length
      ? (([e, t, r] = y),
        (i = f((e = +e))),
        (a = f((t = +t))),
        (o = f((r = +r))),
        (l = i === a ? 0 : 0.5 / (a - i)),
        (u = a === o ? 0 : 0.5 / (o - a)),
        (n = a < i ? -1 : 1),
        p)
      : [e, t, r];
  }),
    (p.clamp = function (y) {
      return arguments.length ? ((c = !!y), p) : c;
    }),
    (p.interpolator = function (y) {
      return arguments.length ? ((s = y), p) : s;
    }));
  function m(y) {
    return function (x) {
      var v, h, g;
      return arguments.length
        ? (([v, h, g] = x), (s = Yz(y, [v, h, g])), p)
        : [s(0), s(0.5), s(1)];
    };
  }
  return (
    (p.range = m(Oa)),
    (p.rangeRound = m(qv)),
    (p.unknown = function (y) {
      return arguments.length ? ((d = y), p) : d;
    }),
    function (y) {
      return (
        (f = y),
        (i = y(e)),
        (a = y(t)),
        (o = y(r)),
        (l = i === a ? 0 : 0.5 / (a - i)),
        (u = a === o ? 0 : 0.5 / (o - a)),
        (n = a < i ? -1 : 1),
        p
      );
    }
  );
}
function QO() {
  var e = bn(Fc()(lt));
  return (
    (e.copy = function () {
      return xn(e, QO());
    }),
    zr.apply(e, arguments)
  );
}
function ZO() {
  var e = Zv(Fc()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return xn(e, ZO()).base(e.base());
    }),
    zr.apply(e, arguments)
  );
}
function JO() {
  var e = Jv(Fc());
  return (
    (e.copy = function () {
      return xn(e, JO()).constant(e.constant());
    }),
    zr.apply(e, arguments)
  );
}
function fm() {
  var e = em(Fc());
  return (
    (e.copy = function () {
      return xn(e, fm()).exponent(e.exponent());
    }),
    zr.apply(e, arguments)
  );
}
function F8() {
  return fm.apply(null, arguments).exponent(0.5);
}
const X0 = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      scaleBand: Ro,
      scaleDiverging: QO,
      scaleDivergingLog: ZO,
      scaleDivergingPow: fm,
      scaleDivergingSqrt: F8,
      scaleDivergingSymlog: JO,
      scaleIdentity: CO,
      scaleImplicit: $p,
      scaleLinear: gs,
      scaleLog: MO,
      scaleOrdinal: Vv,
      scalePoint: so,
      scalePow: tm,
      scaleQuantile: DO,
      scaleQuantize: LO,
      scaleRadial: IO,
      scaleSequential: GO,
      scaleSequentialLog: qO,
      scaleSequentialPow: cm,
      scaleSequentialQuantile: YO,
      scaleSequentialSqrt: R8,
      scaleSequentialSymlog: XO,
      scaleSqrt: b4,
      scaleSymlog: NO,
      scaleThreshold: RO,
      scaleTime: D8,
      scaleUtc: L8,
      tickFormat: TO,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
var B8 = ha;
function z8(e, t, r) {
  for (var n = -1, i = e.length; ++n < i; ) {
    var a = e[n],
      o = t(a);
    if (o != null && (l === void 0 ? o === o && !B8(o) : r(o, l)))
      var l = o,
        u = a;
  }
  return u;
}
var eP = z8;
function U8(e, t) {
  return e > t;
}
var W8 = U8,
  H8 = eP,
  V8 = W8,
  K8 = wa;
function G8(e) {
  return e && e.length ? H8(e, K8, V8) : void 0;
}
var q8 = G8;
const Bc = pe(q8);
function X8(e, t) {
  return e < t;
}
var Y8 = X8,
  Q8 = eP,
  Z8 = Y8,
  J8 = wa;
function e5(e) {
  return e && e.length ? Q8(e, J8, Z8) : void 0;
}
var t5 = e5;
const zc = pe(t5);
var r5 = _v,
  n5 = gn,
  i5 = uO,
  a5 = bt;
function o5(e, t) {
  var r = a5(e) ? r5 : i5;
  return r(e, n5(t));
}
var l5 = o5,
  u5 = oO,
  s5 = l5;
function c5(e, t) {
  return u5(s5(e, t), 1);
}
var f5 = c5;
const d5 = pe(f5);
var p5 = Bv;
function h5(e, t) {
  return p5(e, t);
}
var v5 = h5;
const Uc = pe(v5);
var Pa = 1e9,
  m5 = {
    precision: 20,
    rounding: 4,
    toExpNeg: -7,
    toExpPos: 21,
    LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
  },
  pm,
  Se = !0,
  Ht = "[DecimalError] ",
  Bn = Ht + "Invalid argument: ",
  dm = Ht + "Exponent out of range: ",
  _a = Math.floor,
  $n = Math.pow,
  y5 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  Pt,
  He = 1e7,
  ge = 7,
  tP = 9007199254740991,
  Ss = _a(tP / ge),
  q = {};
q.absoluteValue = q.abs = function () {
  var e = new this.constructor(this);
  return (e.s && (e.s = 1), e);
};
q.comparedTo = q.cmp = function (e) {
  var t,
    r,
    n,
    i,
    a = this;
  if (((e = new a.constructor(e)), a.s !== e.s)) return a.s || -e.s;
  if (a.e !== e.e) return (a.e > e.e) ^ (a.s < 0) ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t]) return (a.d[t] > e.d[t]) ^ (a.s < 0) ? 1 : -1;
  return n === i ? 0 : (n > i) ^ (a.s < 0) ? 1 : -1;
};
q.decimalPlaces = q.dp = function () {
  var e = this,
    t = e.d.length - 1,
    r = (t - e.e) * ge;
  if (((t = e.d[t]), t)) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
q.dividedBy = q.div = function (e) {
  return $r(this, new this.constructor(e));
};
q.dividedToIntegerBy = q.idiv = function (e) {
  var t = this,
    r = t.constructor;
  return de($r(t, new r(e), 0, 1), r.precision);
};
q.equals = q.eq = function (e) {
  return !this.cmp(e);
};
q.exponent = function () {
  return Ie(this);
};
q.greaterThan = q.gt = function (e) {
  return this.cmp(e) > 0;
};
q.greaterThanOrEqualTo = q.gte = function (e) {
  return this.cmp(e) >= 0;
};
q.isInteger = q.isint = function () {
  return this.e > this.d.length - 2;
};
q.isNegative = q.isneg = function () {
  return this.s < 0;
};
q.isPositive = q.ispos = function () {
  return this.s > 0;
};
q.isZero = function () {
  return this.s === 0;
};
q.lessThan = q.lt = function (e) {
  return this.cmp(e) < 0;
};
q.lessThanOrEqualTo = q.lte = function (e) {
  return this.cmp(e) < 1;
};
q.logarithm = q.log = function (e) {
  var t,
    r = this,
    n = r.constructor,
    i = n.precision,
    a = i + 5;
  if (e === void 0) e = new n(10);
  else if (((e = new n(e)), e.s < 1 || e.eq(Pt))) throw Error(Ht + "NaN");
  if (r.s < 1) throw Error(Ht + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Pt)
    ? new n(0)
    : ((Se = !1), (t = $r(Wo(r, a), Wo(e, a), a)), (Se = !0), de(t, i));
};
q.minus = q.sub = function (e) {
  var t = this;
  return (
    (e = new t.constructor(e)),
    t.s == e.s ? iP(t, e) : rP(t, ((e.s = -e.s), e))
  );
};
q.modulo = q.mod = function (e) {
  var t,
    r = this,
    n = r.constructor,
    i = n.precision;
  if (((e = new n(e)), !e.s)) throw Error(Ht + "NaN");
  return r.s
    ? ((Se = !1), (t = $r(r, e, 0, 1).times(e)), (Se = !0), r.minus(t))
    : de(new n(r), i);
};
q.naturalExponential = q.exp = function () {
  return nP(this);
};
q.naturalLogarithm = q.ln = function () {
  return Wo(this);
};
q.negated = q.neg = function () {
  var e = new this.constructor(this);
  return ((e.s = -e.s || 0), e);
};
q.plus = q.add = function (e) {
  var t = this;
  return (
    (e = new t.constructor(e)),
    t.s == e.s ? rP(t, e) : iP(t, ((e.s = -e.s), e))
  );
};
q.precision = q.sd = function (e) {
  var t,
    r,
    n,
    i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Bn + e);
  if (
    ((t = Ie(i) + 1), (n = i.d.length - 1), (r = n * ge + 1), (n = i.d[n]), n)
  ) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
q.squareRoot = q.sqrt = function () {
  var e,
    t,
    r,
    n,
    i,
    a,
    o,
    l = this,
    u = l.constructor;
  if (l.s < 1) {
    if (!l.s) return new u(0);
    throw Error(Ht + "NaN");
  }
  for (
    e = Ie(l),
      Se = !1,
      i = Math.sqrt(+l),
      i == 0 || i == 1 / 0
        ? ((t = fr(l.d)),
          (t.length + e) % 2 == 0 && (t += "0"),
          (i = Math.sqrt(t)),
          (e = _a((e + 1) / 2) - (e < 0 || e % 2)),
          i == 1 / 0
            ? (t = "5e" + e)
            : ((t = i.toExponential()),
              (t = t.slice(0, t.indexOf("e") + 1) + e)),
          (n = new u(t)))
        : (n = new u(i.toString())),
      r = u.precision,
      i = o = r + 3;
    ;

  )
    if (
      ((a = n),
      (n = a.plus($r(l, a, o + 2)).times(0.5)),
      fr(a.d).slice(0, o) === (t = fr(n.d)).slice(0, o))
    ) {
      if (((t = t.slice(o - 3, o + 1)), i == o && t == "4999")) {
        if ((de(a, r + 1, 0), a.times(a).eq(l))) {
          n = a;
          break;
        }
      } else if (t != "9999") break;
      o += 4;
    }
  return ((Se = !0), de(n, r));
};
q.times = q.mul = function (e) {
  var t,
    r,
    n,
    i,
    a,
    o,
    l,
    u,
    s,
    f = this,
    c = f.constructor,
    d = f.d,
    p = (e = new c(e)).d;
  if (!f.s || !e.s) return new c(0);
  for (
    e.s *= f.s,
      r = f.e + e.e,
      u = d.length,
      s = p.length,
      u < s && ((a = d), (d = p), (p = a), (o = u), (u = s), (s = o)),
      a = [],
      o = u + s,
      n = o;
    n--;

  )
    a.push(0);
  for (n = s; --n >= 0; ) {
    for (t = 0, i = u + n; i > n; )
      ((l = a[i] + p[n] * d[i - n - 1] + t),
        (a[i--] = l % He | 0),
        (t = (l / He) | 0));
    a[i] = (a[i] + t) % He | 0;
  }
  for (; !a[--o]; ) a.pop();
  return (
    t ? ++r : a.shift(),
    (e.d = a),
    (e.e = r),
    Se ? de(e, c.precision) : e
  );
};
q.toDecimalPlaces = q.todp = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    (r = new n(r)),
    e === void 0
      ? r
      : (mr(e, 0, Pa),
        t === void 0 ? (t = n.rounding) : mr(t, 0, 8),
        de(r, e + Ie(r) + 1, t))
  );
};
q.toExponential = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = qn(n, !0))
      : (mr(e, 0, Pa),
        t === void 0 ? (t = i.rounding) : mr(t, 0, 8),
        (n = de(new i(n), e + 1, t)),
        (r = qn(n, !0, e + 1))),
    r
  );
};
q.toFixed = function (e, t) {
  var r,
    n,
    i = this,
    a = i.constructor;
  return e === void 0
    ? qn(i)
    : (mr(e, 0, Pa),
      t === void 0 ? (t = a.rounding) : mr(t, 0, 8),
      (n = de(new a(i), e + Ie(i) + 1, t)),
      (r = qn(n.abs(), !1, e + Ie(n) + 1)),
      i.isneg() && !i.isZero() ? "-" + r : r);
};
q.toInteger = q.toint = function () {
  var e = this,
    t = e.constructor;
  return de(new t(e), Ie(e) + 1, t.rounding);
};
q.toNumber = function () {
  return +this;
};
q.toPower = q.pow = function (e) {
  var t,
    r,
    n,
    i,
    a,
    o,
    l = this,
    u = l.constructor,
    s = 12,
    f = +(e = new u(e));
  if (!e.s) return new u(Pt);
  if (((l = new u(l)), !l.s)) {
    if (e.s < 1) throw Error(Ht + "Infinity");
    return l;
  }
  if (l.eq(Pt)) return l;
  if (((n = u.precision), e.eq(Pt))) return de(l, n);
  if (((t = e.e), (r = e.d.length - 1), (o = t >= r), (a = l.s), o)) {
    if ((r = f < 0 ? -f : f) <= tP) {
      for (
        i = new u(Pt), t = Math.ceil(n / ge + 4), Se = !1;
        r % 2 && ((i = i.times(l)), Q0(i.d, t)), (r = _a(r / 2)), r !== 0;

      )
        ((l = l.times(l)), Q0(l.d, t));
      return ((Se = !0), e.s < 0 ? new u(Pt).div(i) : de(i, n));
    }
  } else if (a < 0) throw Error(Ht + "NaN");
  return (
    (a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1),
    (l.s = 1),
    (Se = !1),
    (i = e.times(Wo(l, n + s))),
    (Se = !0),
    (i = nP(i)),
    (i.s = a),
    i
  );
};
q.toPrecision = function (e, t) {
  var r,
    n,
    i = this,
    a = i.constructor;
  return (
    e === void 0
      ? ((r = Ie(i)), (n = qn(i, r <= a.toExpNeg || r >= a.toExpPos)))
      : (mr(e, 1, Pa),
        t === void 0 ? (t = a.rounding) : mr(t, 0, 8),
        (i = de(new a(i), e, t)),
        (r = Ie(i)),
        (n = qn(i, e <= r || r <= a.toExpNeg, e))),
    n
  );
};
q.toSignificantDigits = q.tosd = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    e === void 0
      ? ((e = n.precision), (t = n.rounding))
      : (mr(e, 1, Pa), t === void 0 ? (t = n.rounding) : mr(t, 0, 8)),
    de(new n(r), e, t)
  );
};
q.toString =
  q.valueOf =
  q.val =
  q.toJSON =
  q[Symbol.for("nodejs.util.inspect.custom")] =
    function () {
      var e = this,
        t = Ie(e),
        r = e.constructor;
      return qn(e, t <= r.toExpNeg || t >= r.toExpPos);
    };
function rP(e, t) {
  var r,
    n,
    i,
    a,
    o,
    l,
    u,
    s,
    f = e.constructor,
    c = f.precision;
  if (!e.s || !t.s) return (t.s || (t = new f(e)), Se ? de(t, c) : t);
  if (
    ((u = e.d),
    (s = t.d),
    (o = e.e),
    (i = t.e),
    (u = u.slice()),
    (a = o - i),
    a)
  ) {
    for (
      a < 0
        ? ((n = u), (a = -a), (l = s.length))
        : ((n = s), (i = o), (l = u.length)),
        o = Math.ceil(c / ge),
        l = o > l ? o + 1 : l + 1,
        a > l && ((a = l), (n.length = 1)),
        n.reverse();
      a--;

    )
      n.push(0);
    n.reverse();
  }
  for (
    l = u.length,
      a = s.length,
      l - a < 0 && ((a = l), (n = s), (s = u), (u = n)),
      r = 0;
    a;

  )
    ((r = ((u[--a] = u[a] + s[a] + r) / He) | 0), (u[a] %= He));
  for (r && (u.unshift(r), ++i), l = u.length; u[--l] == 0; ) u.pop();
  return ((t.d = u), (t.e = i), Se ? de(t, c) : t);
}
function mr(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(Bn + e);
}
function fr(e) {
  var t,
    r,
    n,
    i = e.length - 1,
    a = "",
    o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      ((n = e[t] + ""), (r = ge - n.length), r && (a += Gr(r)), (a += n));
    ((o = e[t]), (n = o + ""), (r = ge - n.length), r && (a += Gr(r)));
  } else if (o === 0) return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var $r = (function () {
  function e(n, i) {
    var a,
      o = 0,
      l = n.length;
    for (n = n.slice(); l--; )
      ((a = n[l] * i + o), (n[l] = a % He | 0), (o = (a / He) | 0));
    return (o && n.unshift(o), n);
  }
  function t(n, i, a, o) {
    var l, u;
    if (a != o) u = a > o ? 1 : -1;
    else
      for (l = u = 0; l < a; l++)
        if (n[l] != i[l]) {
          u = n[l] > i[l] ? 1 : -1;
          break;
        }
    return u;
  }
  function r(n, i, a) {
    for (var o = 0; a--; )
      ((n[a] -= o), (o = n[a] < i[a] ? 1 : 0), (n[a] = o * He + n[a] - i[a]));
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function (n, i, a, o) {
    var l,
      u,
      s,
      f,
      c,
      d,
      p,
      m,
      y,
      x,
      v,
      h,
      g,
      S,
      b,
      w,
      P,
      _,
      A = n.constructor,
      $ = n.s == i.s ? 1 : -1,
      C = n.d,
      j = i.d;
    if (!n.s) return new A(n);
    if (!i.s) throw Error(Ht + "Division by zero");
    for (
      u = n.e - i.e,
        P = j.length,
        b = C.length,
        p = new A($),
        m = p.d = [],
        s = 0;
      j[s] == (C[s] || 0);

    )
      ++s;
    if (
      (j[s] > (C[s] || 0) && --u,
      a == null
        ? (h = a = A.precision)
        : o
          ? (h = a + (Ie(n) - Ie(i)) + 1)
          : (h = a),
      h < 0)
    )
      return new A(0);
    if (((h = (h / ge + 2) | 0), (s = 0), P == 1))
      for (f = 0, j = j[0], h++; (s < b || f) && h--; s++)
        ((g = f * He + (C[s] || 0)), (m[s] = (g / j) | 0), (f = g % j | 0));
    else {
      for (
        f = (He / (j[0] + 1)) | 0,
          f > 1 &&
            ((j = e(j, f)), (C = e(C, f)), (P = j.length), (b = C.length)),
          S = P,
          y = C.slice(0, P),
          x = y.length;
        x < P;

      )
        y[x++] = 0;
      ((_ = j.slice()), _.unshift(0), (w = j[0]), j[1] >= He / 2 && ++w);
      do
        ((f = 0),
          (l = t(j, y, P, x)),
          l < 0
            ? ((v = y[0]),
              P != x && (v = v * He + (y[1] || 0)),
              (f = (v / w) | 0),
              f > 1
                ? (f >= He && (f = He - 1),
                  (c = e(j, f)),
                  (d = c.length),
                  (x = y.length),
                  (l = t(c, y, d, x)),
                  l == 1 && (f--, r(c, P < d ? _ : j, d)))
                : (f == 0 && (l = f = 1), (c = j.slice())),
              (d = c.length),
              d < x && c.unshift(0),
              r(y, c, x),
              l == -1 &&
                ((x = y.length),
                (l = t(j, y, P, x)),
                l < 1 && (f++, r(y, P < x ? _ : j, x))),
              (x = y.length))
            : l === 0 && (f++, (y = [0])),
          (m[s++] = f),
          l && y[0] ? (y[x++] = C[S] || 0) : ((y = [C[S]]), (x = 1)));
      while ((S++ < b || y[0] !== void 0) && h--);
    }
    return (m[0] || m.shift(), (p.e = u), de(p, o ? a + Ie(p) + 1 : a));
  };
})();
function nP(e, t) {
  var r,
    n,
    i,
    a,
    o,
    l,
    u = 0,
    s = 0,
    f = e.constructor,
    c = f.precision;
  if (Ie(e) > 16) throw Error(dm + Ie(e));
  if (!e.s) return new f(Pt);
  for (Se = !1, l = c, o = new f(0.03125); e.abs().gte(0.1); )
    ((e = e.times(o)), (s += 5));
  for (
    n = ((Math.log($n(2, s)) / Math.LN10) * 2 + 5) | 0,
      l += n,
      r = i = a = new f(Pt),
      f.precision = l;
    ;

  ) {
    if (
      ((i = de(i.times(e), l)),
      (r = r.times(++u)),
      (o = a.plus($r(i, r, l))),
      fr(o.d).slice(0, l) === fr(a.d).slice(0, l))
    ) {
      for (; s--; ) a = de(a.times(a), l);
      return ((f.precision = c), t == null ? ((Se = !0), de(a, c)) : a);
    }
    a = o;
  }
}
function Ie(e) {
  for (var t = e.e * ge, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Xf(e, t, r) {
  if (t > e.LN10.sd())
    throw (
      (Se = !0),
      r && (e.precision = r),
      Error(Ht + "LN10 precision limit exceeded")
    );
  return de(new e(e.LN10), t);
}
function Gr(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Wo(e, t) {
  var r,
    n,
    i,
    a,
    o,
    l,
    u,
    s,
    f,
    c = 1,
    d = 10,
    p = e,
    m = p.d,
    y = p.constructor,
    x = y.precision;
  if (p.s < 1) throw Error(Ht + (p.s ? "NaN" : "-Infinity"));
  if (p.eq(Pt)) return new y(0);
  if ((t == null ? ((Se = !1), (s = x)) : (s = t), p.eq(10)))
    return (t == null && (Se = !0), Xf(y, s));
  if (
    ((s += d),
    (y.precision = s),
    (r = fr(m)),
    (n = r.charAt(0)),
    (a = Ie(p)),
    Math.abs(a) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
      ((p = p.times(e)), (r = fr(p.d)), (n = r.charAt(0)), c++);
    ((a = Ie(p)),
      n > 1 ? ((p = new y("0." + r)), a++) : (p = new y(n + "." + r.slice(1))));
  } else
    return (
      (u = Xf(y, s + 2, x).times(a + "")),
      (p = Wo(new y(n + "." + r.slice(1)), s - d).plus(u)),
      (y.precision = x),
      t == null ? ((Se = !0), de(p, x)) : p
    );
  for (
    l = o = p = $r(p.minus(Pt), p.plus(Pt), s), f = de(p.times(p), s), i = 3;
    ;

  ) {
    if (
      ((o = de(o.times(f), s)),
      (u = l.plus($r(o, new y(i), s))),
      fr(u.d).slice(0, s) === fr(l.d).slice(0, s))
    )
      return (
        (l = l.times(2)),
        a !== 0 && (l = l.plus(Xf(y, s + 2, x).times(a + ""))),
        (l = $r(l, new y(c), s)),
        (y.precision = x),
        t == null ? ((Se = !0), de(l, x)) : l
      );
    ((l = u), (i += 2));
  }
}
function Y0(e, t) {
  var r, n, i;
  for (
    (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;

  )
    ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (((t = t.slice(n, i)), t)) {
    if (
      ((i -= n),
      (r = r - n - 1),
      (e.e = _a(r / ge)),
      (e.d = []),
      (n = (r + 1) % ge),
      r < 0 && (n += ge),
      n < i)
    ) {
      for (n && e.d.push(+t.slice(0, n)), i -= ge; n < i; )
        e.d.push(+t.slice(n, (n += ge)));
      ((t = t.slice(n)), (n = ge - t.length));
    } else n -= i;
    for (; n--; ) t += "0";
    if ((e.d.push(+t), Se && (e.e > Ss || e.e < -Ss))) throw Error(dm + r);
  } else ((e.s = 0), (e.e = 0), (e.d = [0]));
  return e;
}
function de(e, t, r) {
  var n,
    i,
    a,
    o,
    l,
    u,
    s,
    f,
    c = e.d;
  for (o = 1, a = c[0]; a >= 10; a /= 10) o++;
  if (((n = t - o), n < 0)) ((n += ge), (i = t), (s = c[(f = 0)]));
  else {
    if (((f = Math.ceil((n + 1) / ge)), (a = c.length), f >= a)) return e;
    for (s = a = c[f], o = 1; a >= 10; a /= 10) o++;
    ((n %= ge), (i = n - ge + o));
  }
  if (
    (r !== void 0 &&
      ((a = $n(10, o - i - 1)),
      (l = (s / a) % 10 | 0),
      (u = t < 0 || c[f + 1] !== void 0 || s % a),
      (u =
        r < 4
          ? (l || u) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : l > 5 ||
            (l == 5 &&
              (r == 4 ||
                u ||
                (r == 6 &&
                  (n > 0 ? (i > 0 ? s / $n(10, o - i) : 0) : c[f - 1]) % 10 &
                    1) ||
                r == (e.s < 0 ? 8 : 7))))),
    t < 1 || !c[0])
  )
    return (
      u
        ? ((a = Ie(e)),
          (c.length = 1),
          (t = t - a - 1),
          (c[0] = $n(10, (ge - (t % ge)) % ge)),
          (e.e = _a(-t / ge) || 0))
        : ((c.length = 1), (c[0] = e.e = e.s = 0)),
      e
    );
  if (
    (n == 0
      ? ((c.length = f), (a = 1), f--)
      : ((c.length = f + 1),
        (a = $n(10, ge - n)),
        (c[f] = i > 0 ? ((s / $n(10, o - i)) % $n(10, i) | 0) * a : 0)),
    u)
  )
    for (;;)
      if (f == 0) {
        (c[0] += a) == He && ((c[0] = 1), ++e.e);
        break;
      } else {
        if (((c[f] += a), c[f] != He)) break;
        ((c[f--] = 0), (a = 1));
      }
  for (n = c.length; c[--n] === 0; ) c.pop();
  if (Se && (e.e > Ss || e.e < -Ss)) throw Error(dm + Ie(e));
  return e;
}
function iP(e, t) {
  var r,
    n,
    i,
    a,
    o,
    l,
    u,
    s,
    f,
    c,
    d = e.constructor,
    p = d.precision;
  if (!e.s || !t.s)
    return (t.s ? (t.s = -t.s) : (t = new d(e)), Se ? de(t, p) : t);
  if (
    ((u = e.d),
    (c = t.d),
    (n = t.e),
    (s = e.e),
    (u = u.slice()),
    (o = s - n),
    o)
  ) {
    for (
      f = o < 0,
        f
          ? ((r = u), (o = -o), (l = c.length))
          : ((r = c), (n = s), (l = u.length)),
        i = Math.max(Math.ceil(p / ge), l) + 2,
        o > i && ((o = i), (r.length = 1)),
        r.reverse(),
        i = o;
      i--;

    )
      r.push(0);
    r.reverse();
  } else {
    for (i = u.length, l = c.length, f = i < l, f && (l = i), i = 0; i < l; i++)
      if (u[i] != c[i]) {
        f = u[i] < c[i];
        break;
      }
    o = 0;
  }
  for (
    f && ((r = u), (u = c), (c = r), (t.s = -t.s)),
      l = u.length,
      i = c.length - l;
    i > 0;
    --i
  )
    u[l++] = 0;
  for (i = c.length; i > o; ) {
    if (u[--i] < c[i]) {
      for (a = i; a && u[--a] === 0; ) u[a] = He - 1;
      (--u[a], (u[i] += He));
    }
    u[i] -= c[i];
  }
  for (; u[--l] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --n;
  return u[0] ? ((t.d = u), (t.e = n), Se ? de(t, p) : t) : new d(0);
}
function qn(e, t, r) {
  var n,
    i = Ie(e),
    a = fr(e.d),
    o = a.length;
  return (
    t
      ? (r && (n = r - o) > 0
          ? (a = a.charAt(0) + "." + a.slice(1) + Gr(n))
          : o > 1 && (a = a.charAt(0) + "." + a.slice(1)),
        (a = a + (i < 0 ? "e" : "e+") + i))
      : i < 0
        ? ((a = "0." + Gr(-i - 1) + a), r && (n = r - o) > 0 && (a += Gr(n)))
        : i >= o
          ? ((a += Gr(i + 1 - o)),
            r && (n = r - i - 1) > 0 && (a = a + "." + Gr(n)))
          : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)),
            r && (n = r - o) > 0 && (i + 1 === o && (a += "."), (a += Gr(n)))),
    e.s < 0 ? "-" + a : a
  );
}
function Q0(e, t) {
  if (e.length > t) return ((e.length = t), !0);
}
function aP(e) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (((o.constructor = i), a instanceof i)) {
      ((o.s = a.s), (o.e = a.e), (o.d = (a = a.d) ? a.slice() : a));
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0) throw Error(Bn + a);
      if (a > 0) o.s = 1;
      else if (a < 0) ((a = -a), (o.s = -1));
      else {
        ((o.s = 0), (o.e = 0), (o.d = [0]));
        return;
      }
      if (a === ~~a && a < 1e7) {
        ((o.e = 0), (o.d = [a]));
        return;
      }
      return Y0(o, a.toString());
    } else if (typeof a != "string") throw Error(Bn + a);
    if (
      (a.charCodeAt(0) === 45 ? ((a = a.slice(1)), (o.s = -1)) : (o.s = 1),
      y5.test(a))
    )
      Y0(o, a);
    else throw Error(Bn + a);
  }
  if (
    ((i.prototype = q),
    (i.ROUND_UP = 0),
    (i.ROUND_DOWN = 1),
    (i.ROUND_CEIL = 2),
    (i.ROUND_FLOOR = 3),
    (i.ROUND_HALF_UP = 4),
    (i.ROUND_HALF_DOWN = 5),
    (i.ROUND_HALF_EVEN = 6),
    (i.ROUND_HALF_CEIL = 7),
    (i.ROUND_HALF_FLOOR = 8),
    (i.clone = aP),
    (i.config = i.set = g5),
    e === void 0 && (e = {}),
    e)
  )
    for (
      n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0;
      t < n.length;

    )
      e.hasOwnProperty((r = n[t++])) || (e[r] = this[r]);
  return (i.config(e), i);
}
function g5(e) {
  if (!e || typeof e != "object") throw Error(Ht + "Object expected");
  var t,
    r,
    n,
    i = [
      "precision",
      1,
      Pa,
      "rounding",
      0,
      8,
      "toExpNeg",
      -1 / 0,
      0,
      "toExpPos",
      0,
      1 / 0,
    ];
  for (t = 0; t < i.length; t += 3)
    if ((n = e[(r = i[t])]) !== void 0)
      if (_a(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(Bn + r + ": " + n);
  if ((n = e[(r = "LN10")]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Bn + r + ": " + n);
  return this;
}
var pm = aP(m5);
Pt = new pm(1);
const fe = pm;
function b5(e) {
  return O5(e) || S5(e) || w5(e) || x5();
}
function x5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function w5(e, t) {
  if (e) {
    if (typeof e == "string") return Mp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Mp(e, t);
  }
}
function S5(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function O5(e) {
  if (Array.isArray(e)) return Mp(e);
}
function Mp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var P5 = function (t) {
    return t;
  },
  oP = {},
  lP = function (t) {
    return t === oP;
  },
  Z0 = function (t) {
    return function r() {
      return arguments.length === 0 ||
        (arguments.length === 1 &&
          lP(arguments.length <= 0 ? void 0 : arguments[0]))
        ? r
        : t.apply(void 0, arguments);
    };
  },
  _5 = function e(t, r) {
    return t === 1
      ? r
      : Z0(function () {
          for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
            i[a] = arguments[a];
          var o = i.filter(function (l) {
            return l !== oP;
          }).length;
          return o >= t
            ? r.apply(void 0, i)
            : e(
                t - o,
                Z0(function () {
                  for (
                    var l = arguments.length, u = new Array(l), s = 0;
                    s < l;
                    s++
                  )
                    u[s] = arguments[s];
                  var f = i.map(function (c) {
                    return lP(c) ? u.shift() : c;
                  });
                  return r.apply(void 0, b5(f).concat(u));
                }),
              );
        });
  },
  Wc = function (t) {
    return _5(t.length, t);
  },
  Np = function (t, r) {
    for (var n = [], i = t; i < r; ++i) n[i - t] = i;
    return n;
  },
  A5 = Wc(function (e, t) {
    return Array.isArray(t)
      ? t.map(e)
      : Object.keys(t)
          .map(function (r) {
            return t[r];
          })
          .map(e);
  }),
  E5 = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    if (!r.length) return P5;
    var i = r.reverse(),
      a = i[0],
      o = i.slice(1);
    return function () {
      return o.reduce(
        function (l, u) {
          return u(l);
        },
        a.apply(void 0, arguments),
      );
    };
  },
  Ip = function (t) {
    return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
  },
  uP = function (t) {
    var r = null,
      n = null;
    return function () {
      for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
        a[o] = arguments[o];
      return (
        (r &&
          a.every(function (l, u) {
            return l === r[u];
          })) ||
          ((r = a), (n = t.apply(void 0, a))),
        n
      );
    };
  };
function j5(e) {
  var t;
  return (
    e === 0
      ? (t = 1)
      : (t = Math.floor(new fe(e).abs().log(10).toNumber()) + 1),
    t
  );
}
function $5(e, t, r) {
  for (var n = new fe(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    (a.push(n.toNumber()), (n = n.add(r)), i++);
  return a;
}
var T5 = Wc(function (e, t, r) {
    var n = +e,
      i = +t;
    return n + r * (i - n);
  }),
  C5 = Wc(function (e, t, r) {
    var n = t - +e;
    return ((n = n || 1 / 0), (r - e) / n);
  }),
  k5 = Wc(function (e, t, r) {
    var n = t - +e;
    return ((n = n || 1 / 0), Math.max(0, Math.min(1, (r - e) / n)));
  });
const Hc = {
  rangeStep: $5,
  getDigitCount: j5,
  interpolateNumber: T5,
  uninterpolateNumber: C5,
  uninterpolateTruncation: k5,
};
function Dp(e) {
  return I5(e) || N5(e) || sP(e) || M5();
}
function M5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function N5(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function I5(e) {
  if (Array.isArray(e)) return Lp(e);
}
function Ho(e, t) {
  return R5(e) || L5(e, t) || sP(e, t) || D5();
}
function D5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sP(e, t) {
  if (e) {
    if (typeof e == "string") return Lp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Lp(e, t);
  }
}
function Lp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function L5(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      i = !1,
      a = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), l;
        !(n = (l = o.next()).done) && (r.push(l.value), !(t && r.length === t));
        n = !0
      );
    } catch (u) {
      ((i = !0), (a = u));
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function R5(e) {
  if (Array.isArray(e)) return e;
}
function cP(e) {
  var t = Ho(e, 2),
    r = t[0],
    n = t[1],
    i = r,
    a = n;
  return (r > n && ((i = n), (a = r)), [i, a]);
}
function fP(e, t, r) {
  if (e.lte(0)) return new fe(0);
  var n = Hc.getDigitCount(e.toNumber()),
    i = new fe(10).pow(n),
    a = e.div(i),
    o = n !== 1 ? 0.05 : 0.1,
    l = new fe(Math.ceil(a.div(o).toNumber())).add(r).mul(o),
    u = l.mul(i);
  return t ? u : new fe(Math.ceil(u));
}
function F5(e, t, r) {
  var n = 1,
    i = new fe(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1
      ? ((n = new fe(10).pow(Hc.getDigitCount(e) - 1)),
        (i = new fe(Math.floor(i.div(n).toNumber())).mul(n)))
      : a > 1 && (i = new fe(Math.floor(e)));
  } else
    e === 0
      ? (i = new fe(Math.floor((t - 1) / 2)))
      : r || (i = new fe(Math.floor(e)));
  var o = Math.floor((t - 1) / 2),
    l = E5(
      A5(function (u) {
        return i.add(new fe(u - o).mul(n)).toNumber();
      }),
      Np,
    );
  return l(0, t);
}
function dP(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return { step: new fe(0), tickMin: new fe(0), tickMax: new fe(0) };
  var a = fP(new fe(t).sub(e).div(r - 1), n, i),
    o;
  e <= 0 && t >= 0
    ? (o = new fe(0))
    : ((o = new fe(e).add(t).div(2)), (o = o.sub(new fe(o).mod(a))));
  var l = Math.ceil(o.sub(e).div(a).toNumber()),
    u = Math.ceil(new fe(t).sub(o).div(a).toNumber()),
    s = l + u + 1;
  return s > r
    ? dP(e, t, r, n, i + 1)
    : (s < r && ((u = t > 0 ? u + (r - s) : u), (l = t > 0 ? l : l + (r - s))),
      {
        step: a,
        tickMin: o.sub(new fe(l).mul(a)),
        tickMax: o.add(new fe(u).mul(a)),
      });
}
function B5(e) {
  var t = Ho(e, 2),
    r = t[0],
    n = t[1],
    i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = Math.max(i, 2),
    l = cP([r, n]),
    u = Ho(l, 2),
    s = u[0],
    f = u[1];
  if (s === -1 / 0 || f === 1 / 0) {
    var c =
      f === 1 / 0
        ? [s].concat(
            Dp(
              Np(0, i - 1).map(function () {
                return 1 / 0;
              }),
            ),
          )
        : [].concat(
            Dp(
              Np(0, i - 1).map(function () {
                return -1 / 0;
              }),
            ),
            [f],
          );
    return r > n ? Ip(c) : c;
  }
  if (s === f) return F5(s, i, a);
  var d = dP(s, f, o, a),
    p = d.step,
    m = d.tickMin,
    y = d.tickMax,
    x = Hc.rangeStep(m, y.add(new fe(0.1).mul(p)), p);
  return r > n ? Ip(x) : x;
}
function z5(e, t) {
  var r = Ho(e, 2),
    n = r[0],
    i = r[1],
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = cP([n, i]),
    l = Ho(o, 2),
    u = l[0],
    s = l[1];
  if (u === -1 / 0 || s === 1 / 0) return [n, i];
  if (u === s) return [u];
  var f = Math.max(t, 2),
    c = fP(new fe(s).sub(u).div(f - 1), a, 0),
    d = [].concat(
      Dp(Hc.rangeStep(new fe(u), new fe(s).sub(new fe(0.99).mul(c)), c)),
      [s],
    );
  return n > i ? Ip(d) : d;
}
var U5 = uP(B5),
  W5 = uP(z5),
  H5 = "Invariant failed";
function Xn(e, t) {
  throw new Error(H5);
}
var V5 = [
  "offset",
  "layout",
  "width",
  "dataKey",
  "data",
  "dataPointFormatter",
  "xAxis",
  "yAxis",
];
function Yi(e) {
  "@babel/helpers - typeof";
  return (
    (Yi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Yi(e)
  );
}
function Os() {
  return (
    (Os = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Os.apply(this, arguments)
  );
}
function K5(e, t) {
  return Y5(e) || X5(e, t) || q5(e, t) || G5();
}
function G5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function q5(e, t) {
  if (e) {
    if (typeof e == "string") return J0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return J0(e, t);
  }
}
function J0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function X5(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      l = [],
      u = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(u = (n = a.call(r)).done) && (l.push(n.value), l.length !== t);
          u = !0
        );
    } catch (f) {
      ((s = !0), (i = f));
    } finally {
      try {
        if (!u && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return l;
  }
}
function Y5(e) {
  if (Array.isArray(e)) return e;
}
function Q5(e, t) {
  if (e == null) return {};
  var r = Z5(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function Z5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function J5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function e6(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, vP(n.key), n));
  }
}
function t6(e, t, r) {
  return (
    t && e6(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function r6(e, t, r) {
  return (
    (t = Ps(t)),
    n6(
      e,
      pP() ? Reflect.construct(t, r || [], Ps(e).constructor) : t.apply(e, r),
    )
  );
}
function n6(e, t) {
  if (t && (Yi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return i6(e);
}
function i6(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function pP() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (pP = function () {
    return !!e;
  })();
}
function Ps(e) {
  return (
    (Ps = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ps(e)
  );
}
function a6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Rp(e, t));
}
function Rp(e, t) {
  return (
    (Rp = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Rp(e, t)
  );
}
function hP(e, t, r) {
  return (
    (t = vP(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function vP(e) {
  var t = o6(e, "string");
  return Yi(t) == "symbol" ? t : t + "";
}
function o6(e, t) {
  if (Yi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Yi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var El = (function (e) {
  function t() {
    return (J5(this, t), r6(this, t, arguments));
  }
  return (
    a6(t, e),
    t6(t, [
      {
        key: "render",
        value: function () {
          var n = this.props,
            i = n.offset,
            a = n.layout,
            o = n.width,
            l = n.dataKey,
            u = n.data,
            s = n.dataPointFormatter,
            f = n.xAxis,
            c = n.yAxis,
            d = Q5(n, V5),
            p = re(d, !1);
          this.props.direction === "x" && f.type !== "number" && Xn();
          var m = u.map(function (y) {
            var x = s(y, l),
              v = x.x,
              h = x.y,
              g = x.value,
              S = x.errorVal;
            if (!S) return null;
            var b = [],
              w,
              P;
            if (Array.isArray(S)) {
              var _ = K5(S, 2);
              ((w = _[0]), (P = _[1]));
            } else w = P = S;
            if (a === "vertical") {
              var A = f.scale,
                $ = h + i,
                C = $ + o,
                j = $ - o,
                D = A(g - w),
                N = A(g + P);
              (b.push({ x1: N, y1: C, x2: N, y2: j }),
                b.push({ x1: D, y1: $, x2: N, y2: $ }),
                b.push({ x1: D, y1: C, x2: D, y2: j }));
            } else if (a === "horizontal") {
              var M = c.scale,
                L = v + i,
                F = L - o,
                T = L + o,
                I = M(g - w),
                R = M(g + P);
              (b.push({ x1: F, y1: R, x2: T, y2: R }),
                b.push({ x1: L, y1: I, x2: L, y2: R }),
                b.push({ x1: F, y1: I, x2: T, y2: I }));
            }
            return E.createElement(
              ke,
              Os(
                {
                  className: "recharts-errorBar",
                  key: "bar-".concat(
                    b.map(function (V) {
                      return ""
                        .concat(V.x1, "-")
                        .concat(V.x2, "-")
                        .concat(V.y1, "-")
                        .concat(V.y2);
                    }),
                  ),
                },
                p,
              ),
              b.map(function (V) {
                return E.createElement(
                  "line",
                  Os({}, V, {
                    key: "line-"
                      .concat(V.x1, "-")
                      .concat(V.x2, "-")
                      .concat(V.y1, "-")
                      .concat(V.y2),
                  }),
                );
              }),
            );
          });
          return E.createElement(ke, { className: "recharts-errorBars" }, m);
        },
      },
    ])
  );
})(E.Component);
hP(El, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal",
});
hP(El, "displayName", "ErrorBar");
function Vo(e) {
  "@babel/helpers - typeof";
  return (
    (Vo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Vo(e)
  );
}
function eb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Pn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? eb(Object(r), !0).forEach(function (n) {
          l6(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : eb(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function l6(e, t, r) {
  return (
    (t = u6(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function u6(e) {
  var t = s6(e, "string");
  return Vo(t) == "symbol" ? t : t + "";
}
function s6(e, t) {
  if (Vo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Vo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var mP = function (t) {
  var r = t.children,
    n = t.formattedGraphicalItems,
    i = t.legendWidth,
    a = t.legendContent,
    o = Ot(r, ki);
  if (!o) return null;
  var l = ki.defaultProps,
    u = l !== void 0 ? Pn(Pn({}, l), o.props) : {},
    s;
  return (
    o.props && o.props.payload
      ? (s = o.props && o.props.payload)
      : a === "children"
        ? (s = (n || []).reduce(function (f, c) {
            var d = c.item,
              p = c.props,
              m = p.sectors || p.data || [];
            return f.concat(
              m.map(function (y) {
                return {
                  type: o.props.iconType || d.props.legendType,
                  value: y.name,
                  color: y.fill,
                  payload: y,
                };
              }),
            );
          }, []))
        : (s = (n || []).map(function (f) {
            var c = f.item,
              d = c.type.defaultProps,
              p = d !== void 0 ? Pn(Pn({}, d), c.props) : {},
              m = p.dataKey,
              y = p.name,
              x = p.legendType,
              v = p.hide;
            return {
              inactive: v,
              dataKey: m,
              type: u.iconType || x || "square",
              color: hm(c),
              value: y || m,
              payload: p,
            };
          })),
    Pn(Pn(Pn({}, u), ki.getWithHeight(o, i)), {}, { payload: s, item: o })
  );
};
function Ko(e) {
  "@babel/helpers - typeof";
  return (
    (Ko =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ko(e)
  );
}
function tb(e) {
  return p6(e) || d6(e) || f6(e) || c6();
}
function c6() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function f6(e, t) {
  if (e) {
    if (typeof e == "string") return Fp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Fp(e, t);
  }
}
function d6(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function p6(e) {
  if (Array.isArray(e)) return Fp(e);
}
function Fp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function rb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function $e(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? rb(Object(r), !0).forEach(function (n) {
          Ni(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : rb(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Ni(e, t, r) {
  return (
    (t = h6(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function h6(e) {
  var t = v6(e, "string");
  return Ko(t) == "symbol" ? t : t + "";
}
function v6(e, t) {
  if (Ko(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ko(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jt(e, t, r) {
  return ee(e) || ee(t) ? r : Ue(t) ? Bt(e, t, r) : J(t) ? t(e) : r;
}
function co(e, t, r, n) {
  var i = d5(e, function (l) {
    return jt(l, t);
  });
  if (r === "number") {
    var a = i.filter(function (l) {
      return H(l) || parseFloat(l);
    });
    return a.length ? [zc(a), Bc(a)] : [1 / 0, -1 / 0];
  }
  var o = n
    ? i.filter(function (l) {
        return !ee(l);
      })
    : i;
  return o.map(function (l) {
    return Ue(l) || l instanceof Date ? l : "";
  });
}
var m6 = function (t) {
    var r,
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      i = arguments.length > 2 ? arguments[2] : void 0,
      a = arguments.length > 3 ? arguments[3] : void 0,
      o = -1,
      l = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
    if (l <= 1) return 0;
    if (
      a &&
      a.axisType === "angleAxis" &&
      Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6
    )
      for (var u = a.range, s = 0; s < l; s++) {
        var f = s > 0 ? i[s - 1].coordinate : i[l - 1].coordinate,
          c = i[s].coordinate,
          d = s >= l - 1 ? i[0].coordinate : i[s + 1].coordinate,
          p = void 0;
        if (nr(c - f) !== nr(d - c)) {
          var m = [];
          if (nr(d - c) === nr(u[1] - u[0])) {
            p = d;
            var y = c + u[1] - u[0];
            ((m[0] = Math.min(y, (y + f) / 2)),
              (m[1] = Math.max(y, (y + f) / 2)));
          } else {
            p = f;
            var x = d + u[1] - u[0];
            ((m[0] = Math.min(c, (x + c) / 2)),
              (m[1] = Math.max(c, (x + c) / 2)));
          }
          var v = [Math.min(c, (p + c) / 2), Math.max(c, (p + c) / 2)];
          if ((t > v[0] && t <= v[1]) || (t >= m[0] && t <= m[1])) {
            o = i[s].index;
            break;
          }
        } else {
          var h = Math.min(f, d),
            g = Math.max(f, d);
          if (t > (h + c) / 2 && t <= (g + c) / 2) {
            o = i[s].index;
            break;
          }
        }
      }
    else
      for (var S = 0; S < l; S++)
        if (
          (S === 0 && t <= (n[S].coordinate + n[S + 1].coordinate) / 2) ||
          (S > 0 &&
            S < l - 1 &&
            t > (n[S].coordinate + n[S - 1].coordinate) / 2 &&
            t <= (n[S].coordinate + n[S + 1].coordinate) / 2) ||
          (S === l - 1 && t > (n[S].coordinate + n[S - 1].coordinate) / 2)
        ) {
          o = n[S].index;
          break;
        }
    return o;
  },
  hm = function (t) {
    var r,
      n = t,
      i = n.type.displayName,
      a =
        (r = t.type) !== null && r !== void 0 && r.defaultProps
          ? $e($e({}, t.type.defaultProps), t.props)
          : t.props,
      o = a.stroke,
      l = a.fill,
      u;
    switch (i) {
      case "Line":
        u = o;
        break;
      case "Area":
      case "Radar":
        u = o && o !== "none" ? o : l;
        break;
      default:
        u = l;
        break;
    }
    return u;
  },
  y6 = function (t) {
    var r = t.barSize,
      n = t.totalSize,
      i = t.stackGroups,
      a = i === void 0 ? {} : i;
    if (!a) return {};
    for (var o = {}, l = Object.keys(a), u = 0, s = l.length; u < s; u++)
      for (
        var f = a[l[u]].stackGroups, c = Object.keys(f), d = 0, p = c.length;
        d < p;
        d++
      ) {
        var m = f[c[d]],
          y = m.items,
          x = m.cateAxisId,
          v = y.filter(function (P) {
            return Er(P.type).indexOf("Bar") >= 0;
          });
        if (v && v.length) {
          var h = v[0].type.defaultProps,
            g = h !== void 0 ? $e($e({}, h), v[0].props) : v[0].props,
            S = g.barSize,
            b = g[x];
          o[b] || (o[b] = []);
          var w = ee(S) ? r : S;
          o[b].push({
            item: v[0],
            stackList: v.slice(1),
            barSize: ee(w) ? void 0 : Gn(w, n, 0),
          });
        }
      }
    return o;
  },
  g6 = function (t) {
    var r = t.barGap,
      n = t.barCategoryGap,
      i = t.bandSize,
      a = t.sizeList,
      o = a === void 0 ? [] : a,
      l = t.maxBarSize,
      u = o.length;
    if (u < 1) return null;
    var s = Gn(r, i, 0, !0),
      f,
      c = [];
    if (o[0].barSize === +o[0].barSize) {
      var d = !1,
        p = i / u,
        m = o.reduce(function (S, b) {
          return S + b.barSize || 0;
        }, 0);
      ((m += (u - 1) * s),
        m >= i && ((m -= (u - 1) * s), (s = 0)),
        m >= i && p > 0 && ((d = !0), (p *= 0.9), (m = u * p)));
      var y = ((i - m) / 2) >> 0,
        x = { offset: y - s, size: 0 };
      f = o.reduce(function (S, b) {
        var w = {
            item: b.item,
            position: {
              offset: x.offset + x.size + s,
              size: d ? p : b.barSize,
            },
          },
          P = [].concat(tb(S), [w]);
        return (
          (x = P[P.length - 1].position),
          b.stackList &&
            b.stackList.length &&
            b.stackList.forEach(function (_) {
              P.push({ item: _, position: x });
            }),
          P
        );
      }, c);
    } else {
      var v = Gn(n, i, 0, !0);
      i - 2 * v - (u - 1) * s <= 0 && (s = 0);
      var h = (i - 2 * v - (u - 1) * s) / u;
      h > 1 && (h >>= 0);
      var g = l === +l ? Math.min(h, l) : h;
      f = o.reduce(function (S, b, w) {
        var P = [].concat(tb(S), [
          {
            item: b.item,
            position: { offset: v + (h + s) * w + (h - g) / 2, size: g },
          },
        ]);
        return (
          b.stackList &&
            b.stackList.length &&
            b.stackList.forEach(function (_) {
              P.push({ item: _, position: P[P.length - 1].position });
            }),
          P
        );
      }, c);
    }
    return f;
  },
  b6 = function (t, r, n, i) {
    var a = n.children,
      o = n.width,
      l = n.margin,
      u = o - (l.left || 0) - (l.right || 0),
      s = mP({ children: a, legendWidth: u });
    if (s) {
      var f = i || {},
        c = f.width,
        d = f.height,
        p = s.align,
        m = s.verticalAlign,
        y = s.layout;
      if (
        (y === "vertical" || (y === "horizontal" && m === "middle")) &&
        p !== "center" &&
        H(t[p])
      )
        return $e($e({}, t), {}, Ni({}, p, t[p] + (c || 0)));
      if (
        (y === "horizontal" || (y === "vertical" && p === "center")) &&
        m !== "middle" &&
        H(t[m])
      )
        return $e($e({}, t), {}, Ni({}, m, t[m] + (d || 0)));
    }
    return t;
  },
  x6 = function (t, r, n) {
    return ee(r)
      ? !0
      : t === "horizontal"
        ? r === "yAxis"
        : t === "vertical" || n === "x"
          ? r === "xAxis"
          : n === "y"
            ? r === "yAxis"
            : !0;
  },
  yP = function (t, r, n, i, a) {
    var o = r.props.children,
      l = zt(o, El).filter(function (s) {
        return x6(i, a, s.props.direction);
      });
    if (l && l.length) {
      var u = l.map(function (s) {
        return s.props.dataKey;
      });
      return t.reduce(
        function (s, f) {
          var c = jt(f, n);
          if (ee(c)) return s;
          var d = Array.isArray(c) ? [zc(c), Bc(c)] : [c, c],
            p = u.reduce(
              function (m, y) {
                var x = jt(f, y, 0),
                  v = d[0] - Math.abs(Array.isArray(x) ? x[0] : x),
                  h = d[1] + Math.abs(Array.isArray(x) ? x[1] : x);
                return [Math.min(v, m[0]), Math.max(h, m[1])];
              },
              [1 / 0, -1 / 0],
            );
          return [Math.min(p[0], s[0]), Math.max(p[1], s[1])];
        },
        [1 / 0, -1 / 0],
      );
    }
    return null;
  },
  w6 = function (t, r, n, i, a) {
    var o = r
      .map(function (l) {
        return yP(t, l, n, a, i);
      })
      .filter(function (l) {
        return !ee(l);
      });
    return o && o.length
      ? o.reduce(
          function (l, u) {
            return [Math.min(l[0], u[0]), Math.max(l[1], u[1])];
          },
          [1 / 0, -1 / 0],
        )
      : null;
  },
  gP = function (t, r, n, i, a) {
    var o = r.map(function (u) {
      var s = u.props.dataKey;
      return (n === "number" && s && yP(t, u, s, i)) || co(t, s, n, a);
    });
    if (n === "number")
      return o.reduce(
        function (u, s) {
          return [Math.min(u[0], s[0]), Math.max(u[1], s[1])];
        },
        [1 / 0, -1 / 0],
      );
    var l = {};
    return o.reduce(function (u, s) {
      for (var f = 0, c = s.length; f < c; f++)
        l[s[f]] || ((l[s[f]] = !0), u.push(s[f]));
      return u;
    }, []);
  },
  bP = function (t, r) {
    return (
      (t === "horizontal" && r === "xAxis") ||
      (t === "vertical" && r === "yAxis") ||
      (t === "centric" && r === "angleAxis") ||
      (t === "radial" && r === "radiusAxis")
    );
  },
  xP = function (t, r, n, i) {
    if (i)
      return t.map(function (u) {
        return u.coordinate;
      });
    var a,
      o,
      l = t.map(function (u) {
        return (
          u.coordinate === r && (a = !0),
          u.coordinate === n && (o = !0),
          u.coordinate
        );
      });
    return (a || l.push(r), o || l.push(n), l);
  },
  _r = function (t, r, n) {
    if (!t) return null;
    var i = t.scale,
      a = t.duplicateDomain,
      o = t.type,
      l = t.range,
      u = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2,
      s = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / u : 0;
    if (
      ((s =
        t.axisType === "angleAxis" && (l == null ? void 0 : l.length) >= 2
          ? nr(l[0] - l[1]) * 2 * s
          : s),
      r && (t.ticks || t.niceTicks))
    ) {
      var f = (t.ticks || t.niceTicks).map(function (c) {
        var d = a ? a.indexOf(c) : c;
        return { coordinate: i(d) + s, value: c, offset: s };
      });
      return f.filter(function (c) {
        return !xl(c.coordinate);
      });
    }
    return t.isCategorical && t.categoricalDomain
      ? t.categoricalDomain.map(function (c, d) {
          return { coordinate: i(c) + s, value: c, index: d, offset: s };
        })
      : i.ticks && !n
        ? i.ticks(t.tickCount).map(function (c) {
            return { coordinate: i(c) + s, value: c, offset: s };
          })
        : i.domain().map(function (c, d) {
            return {
              coordinate: i(c) + s,
              value: a ? a[c] : c,
              index: d,
              offset: s,
            };
          });
  },
  Yf = new WeakMap(),
  au = function (t, r) {
    if (typeof r != "function") return t;
    Yf.has(t) || Yf.set(t, new WeakMap());
    var n = Yf.get(t);
    if (n.has(r)) return n.get(r);
    var i = function () {
      (t.apply(void 0, arguments), r.apply(void 0, arguments));
    };
    return (n.set(r, i), i);
  },
  S6 = function (t, r, n) {
    var i = t.scale,
      a = t.type,
      o = t.layout,
      l = t.axisType;
    if (i === "auto")
      return o === "radial" && l === "radiusAxis"
        ? { scale: Ro(), realScaleType: "band" }
        : o === "radial" && l === "angleAxis"
          ? { scale: gs(), realScaleType: "linear" }
          : a === "category" &&
              r &&
              (r.indexOf("LineChart") >= 0 ||
                r.indexOf("AreaChart") >= 0 ||
                (r.indexOf("ComposedChart") >= 0 && !n))
            ? { scale: so(), realScaleType: "point" }
            : a === "category"
              ? { scale: Ro(), realScaleType: "band" }
              : { scale: gs(), realScaleType: "linear" };
    if (Kn(i)) {
      var u = "scale".concat(Ec(i));
      return { scale: (X0[u] || so)(), realScaleType: X0[u] ? u : "point" };
    }
    return J(i) ? { scale: i } : { scale: so(), realScaleType: "point" };
  },
  nb = 1e-4,
  O6 = function (t) {
    var r = t.domain();
    if (!(!r || r.length <= 2)) {
      var n = r.length,
        i = t.range(),
        a = Math.min(i[0], i[1]) - nb,
        o = Math.max(i[0], i[1]) + nb,
        l = t(r[0]),
        u = t(r[n - 1]);
      (l < a || l > o || u < a || u > o) && t.domain([r[0], r[n - 1]]);
    }
  },
  P6 = function (t, r) {
    if (!t) return null;
    for (var n = 0, i = t.length; n < i; n++)
      if (t[n].item === r) return t[n].position;
    return null;
  },
  _6 = function (t, r) {
    if (!r || r.length !== 2 || !H(r[0]) || !H(r[1])) return t;
    var n = Math.min(r[0], r[1]),
      i = Math.max(r[0], r[1]),
      a = [t[0], t[1]];
    return (
      (!H(t[0]) || t[0] < n) && (a[0] = n),
      (!H(t[1]) || t[1] > i) && (a[1] = i),
      a[0] > i && (a[0] = i),
      a[1] < n && (a[1] = n),
      a
    );
  },
  A6 = function (t) {
    var r = t.length;
    if (!(r <= 0))
      for (var n = 0, i = t[0].length; n < i; ++n)
        for (var a = 0, o = 0, l = 0; l < r; ++l) {
          var u = xl(t[l][n][1]) ? t[l][n][0] : t[l][n][1];
          u >= 0
            ? ((t[l][n][0] = a), (t[l][n][1] = a + u), (a = t[l][n][1]))
            : ((t[l][n][0] = o), (t[l][n][1] = o + u), (o = t[l][n][1]));
        }
  },
  E6 = function (t) {
    var r = t.length;
    if (!(r <= 0))
      for (var n = 0, i = t[0].length; n < i; ++n)
        for (var a = 0, o = 0; o < r; ++o) {
          var l = xl(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
          l >= 0
            ? ((t[o][n][0] = a), (t[o][n][1] = a + l), (a = t[o][n][1]))
            : ((t[o][n][0] = 0), (t[o][n][1] = 0));
        }
  },
  j6 = {
    sign: A6,
    expand: W2,
    none: Ui,
    silhouette: H2,
    wiggle: V2,
    positive: E6,
  },
  $6 = function (t, r, n) {
    var i = r.map(function (l) {
        return l.props.dataKey;
      }),
      a = j6[n],
      o = U2()
        .keys(i)
        .value(function (l, u) {
          return +jt(l, u, 0);
        })
        .order(cp)
        .offset(a);
    return o(t);
  },
  T6 = function (t, r, n, i, a, o) {
    if (!t) return null;
    var l = o ? r.reverse() : r,
      u = {},
      s = l.reduce(function (c, d) {
        var p,
          m =
            (p = d.type) !== null && p !== void 0 && p.defaultProps
              ? $e($e({}, d.type.defaultProps), d.props)
              : d.props,
          y = m.stackId,
          x = m.hide;
        if (x) return c;
        var v = m[n],
          h = c[v] || { hasStack: !1, stackGroups: {} };
        if (Ue(y)) {
          var g = h.stackGroups[y] || {
            numericAxisId: n,
            cateAxisId: i,
            items: [],
          };
          (g.items.push(d), (h.hasStack = !0), (h.stackGroups[y] = g));
        } else
          h.stackGroups[wl("_stackId_")] = {
            numericAxisId: n,
            cateAxisId: i,
            items: [d],
          };
        return $e($e({}, c), {}, Ni({}, v, h));
      }, u),
      f = {};
    return Object.keys(s).reduce(function (c, d) {
      var p = s[d];
      if (p.hasStack) {
        var m = {};
        p.stackGroups = Object.keys(p.stackGroups).reduce(function (y, x) {
          var v = p.stackGroups[x];
          return $e(
            $e({}, y),
            {},
            Ni({}, x, {
              numericAxisId: n,
              cateAxisId: i,
              items: v.items,
              stackedData: $6(t, v.items, a),
            }),
          );
        }, m);
      }
      return $e($e({}, c), {}, Ni({}, d, p));
    }, f);
  },
  C6 = function (t, r) {
    var n = r.realScaleType,
      i = r.type,
      a = r.tickCount,
      o = r.originalDomain,
      l = r.allowDecimals,
      u = n || r.scale;
    if (u !== "auto" && u !== "linear") return null;
    if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
      var s = t.domain();
      if (!s.length) return null;
      var f = U5(s, a, l);
      return (t.domain([zc(f), Bc(f)]), { niceTicks: f });
    }
    if (a && i === "number") {
      var c = t.domain(),
        d = W5(c, a, l);
      return { niceTicks: d };
    }
    return null;
  };
function ib(e) {
  var t = e.axis,
    r = e.ticks,
    n = e.bandSize,
    i = e.entry,
    a = e.index,
    o = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !ee(i[t.dataKey])) {
      var l = qu(r, "value", i[t.dataKey]);
      if (l) return l.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var u = jt(i, ee(o) ? t.dataKey : o);
  return ee(u) ? null : t.scale(u);
}
var ab = function (t) {
    var r = t.axis,
      n = t.ticks,
      i = t.offset,
      a = t.bandSize,
      o = t.entry,
      l = t.index;
    if (r.type === "category") return n[l] ? n[l].coordinate + i : null;
    var u = jt(o, r.dataKey, r.domain[l]);
    return ee(u) ? null : r.scale(u) - a / 2 + i;
  },
  k6 = function (t) {
    var r = t.numericAxis,
      n = r.scale.domain();
    if (r.type === "number") {
      var i = Math.min(n[0], n[1]),
        a = Math.max(n[0], n[1]);
      return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
    }
    return n[0];
  },
  M6 = function (t, r) {
    var n,
      i =
        (n = t.type) !== null && n !== void 0 && n.defaultProps
          ? $e($e({}, t.type.defaultProps), t.props)
          : t.props,
      a = i.stackId;
    if (Ue(a)) {
      var o = r[a];
      if (o) {
        var l = o.items.indexOf(t);
        return l >= 0 ? o.stackedData[l] : null;
      }
    }
    return null;
  },
  N6 = function (t) {
    return t.reduce(
      function (r, n) {
        return [zc(n.concat([r[0]]).filter(H)), Bc(n.concat([r[1]]).filter(H))];
      },
      [1 / 0, -1 / 0],
    );
  },
  wP = function (t, r, n) {
    return Object.keys(t)
      .reduce(
        function (i, a) {
          var o = t[a],
            l = o.stackedData,
            u = l.reduce(
              function (s, f) {
                var c = N6(f.slice(r, n + 1));
                return [Math.min(s[0], c[0]), Math.max(s[1], c[1])];
              },
              [1 / 0, -1 / 0],
            );
          return [Math.min(u[0], i[0]), Math.max(u[1], i[1])];
        },
        [1 / 0, -1 / 0],
      )
      .map(function (i) {
        return i === 1 / 0 || i === -1 / 0 ? 0 : i;
      });
  },
  ob = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  lb = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  Bp = function (t, r, n) {
    if (J(t)) return t(r, n);
    if (!Array.isArray(t)) return r;
    var i = [];
    if (H(t[0])) i[0] = n ? t[0] : Math.min(t[0], r[0]);
    else if (ob.test(t[0])) {
      var a = +ob.exec(t[0])[1];
      i[0] = r[0] - a;
    } else J(t[0]) ? (i[0] = t[0](r[0])) : (i[0] = r[0]);
    if (H(t[1])) i[1] = n ? t[1] : Math.max(t[1], r[1]);
    else if (lb.test(t[1])) {
      var o = +lb.exec(t[1])[1];
      i[1] = r[1] + o;
    } else J(t[1]) ? (i[1] = t[1](r[1])) : (i[1] = r[1]);
    return i;
  },
  _s = function (t, r, n) {
    if (t && t.scale && t.scale.bandwidth) {
      var i = t.scale.bandwidth();
      if (!n || i > 0) return i;
    }
    if (t && r && r.length >= 2) {
      for (
        var a = Uv(r, function (c) {
            return c.coordinate;
          }),
          o = 1 / 0,
          l = 1,
          u = a.length;
        l < u;
        l++
      ) {
        var s = a[l],
          f = a[l - 1];
        o = Math.min((s.coordinate || 0) - (f.coordinate || 0), o);
      }
      return o === 1 / 0 ? 0 : o;
    }
    return n ? void 0 : 0;
  },
  ub = function (t, r, n) {
    return !t || !t.length || Uc(t, Bt(n, "type.defaultProps.domain")) ? r : t;
  },
  SP = function (t, r) {
    var n = t.type.defaultProps
        ? $e($e({}, t.type.defaultProps), t.props)
        : t.props,
      i = n.dataKey,
      a = n.name,
      o = n.unit,
      l = n.formatter,
      u = n.tooltipType,
      s = n.chartType,
      f = n.hide;
    return $e(
      $e({}, re(t, !1)),
      {},
      {
        dataKey: i,
        unit: o,
        formatter: l,
        name: a || i,
        color: hm(t),
        value: jt(r, i),
        type: u,
        payload: r,
        chartType: s,
        hide: f,
      },
    );
  };
function Go(e) {
  "@babel/helpers - typeof";
  return (
    (Go =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Go(e)
  );
}
function sb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function cb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? sb(Object(r), !0).forEach(function (n) {
          I6(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : sb(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function I6(e, t, r) {
  return (
    (t = D6(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function D6(e) {
  var t = L6(e, "string");
  return Go(t) == "symbol" ? t : t + "";
}
function L6(e, t) {
  if (Go(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Go(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var As = Math.PI / 180,
  R6 = function (t) {
    return (t * 180) / Math.PI;
  },
  Ye = function (t, r, n, i) {
    return { x: t + Math.cos(-As * i) * n, y: r + Math.sin(-As * i) * n };
  },
  F6 = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y;
    return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
  },
  B6 = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.cx,
      o = r.cy,
      l = F6({ x: n, y: i }, { x: a, y: o });
    if (l <= 0) return { radius: l };
    var u = (n - a) / l,
      s = Math.acos(u);
    return (
      i > o && (s = 2 * Math.PI - s),
      { radius: l, angle: R6(s), angleInRadian: s }
    );
  },
  z6 = function (t) {
    var r = t.startAngle,
      n = t.endAngle,
      i = Math.floor(r / 360),
      a = Math.floor(n / 360),
      o = Math.min(i, a);
    return { startAngle: r - o * 360, endAngle: n - o * 360 };
  },
  U6 = function (t, r) {
    var n = r.startAngle,
      i = r.endAngle,
      a = Math.floor(n / 360),
      o = Math.floor(i / 360),
      l = Math.min(a, o);
    return t + l * 360;
  },
  fb = function (t, r) {
    var n = t.x,
      i = t.y,
      a = B6({ x: n, y: i }, r),
      o = a.radius,
      l = a.angle,
      u = r.innerRadius,
      s = r.outerRadius;
    if (o < u || o > s) return !1;
    if (o === 0) return !0;
    var f = z6(r),
      c = f.startAngle,
      d = f.endAngle,
      p = l,
      m;
    if (c <= d) {
      for (; p > d; ) p -= 360;
      for (; p < c; ) p += 360;
      m = p >= c && p <= d;
    } else {
      for (; p > c; ) p -= 360;
      for (; p < d; ) p += 360;
      m = p >= d && p <= c;
    }
    return m ? cb(cb({}, r), {}, { radius: o, angle: U6(p, r) }) : null;
  };
function qo(e) {
  "@babel/helpers - typeof";
  return (
    (qo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    qo(e)
  );
}
var W6 = ["offset"];
function H6(e) {
  return q6(e) || G6(e) || K6(e) || V6();
}
function V6() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K6(e, t) {
  if (e) {
    if (typeof e == "string") return zp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return zp(e, t);
  }
}
function G6(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function q6(e) {
  if (Array.isArray(e)) return zp(e);
}
function zp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function X6(e, t) {
  if (e == null) return {};
  var r = Y6(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function Y6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function db(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Fe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? db(Object(r), !0).forEach(function (n) {
          Q6(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : db(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Q6(e, t, r) {
  return (
    (t = Z6(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Z6(e) {
  var t = J6(e, "string");
  return qo(t) == "symbol" ? t : t + "";
}
function J6(e, t) {
  if (qo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (qo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Xo() {
  return (
    (Xo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Xo.apply(this, arguments)
  );
}
var eU = function (t) {
    var r = t.value,
      n = t.formatter,
      i = ee(t.children) ? r : t.children;
    return J(n) ? n(i) : i;
  },
  tU = function (t, r) {
    var n = nr(r - t),
      i = Math.min(Math.abs(r - t), 360);
    return n * i;
  },
  rU = function (t, r, n) {
    var i = t.position,
      a = t.viewBox,
      o = t.offset,
      l = t.className,
      u = a,
      s = u.cx,
      f = u.cy,
      c = u.innerRadius,
      d = u.outerRadius,
      p = u.startAngle,
      m = u.endAngle,
      y = u.clockWise,
      x = (c + d) / 2,
      v = tU(p, m),
      h = v >= 0 ? 1 : -1,
      g,
      S;
    (i === "insideStart"
      ? ((g = p + h * o), (S = y))
      : i === "insideEnd"
        ? ((g = m - h * o), (S = !y))
        : i === "end" && ((g = m + h * o), (S = y)),
      (S = v <= 0 ? S : !S));
    var b = Ye(s, f, x, g),
      w = Ye(s, f, x, g + (S ? 1 : -1) * 359),
      P = "M"
        .concat(b.x, ",")
        .concat(
          b.y,
          `
    A`,
        )
        .concat(x, ",")
        .concat(x, ",0,1,")
        .concat(
          S ? 0 : 1,
          `,
    `,
        )
        .concat(w.x, ",")
        .concat(w.y),
      _ = ee(t.id) ? wl("recharts-radial-line-") : t.id;
    return E.createElement(
      "text",
      Xo({}, n, {
        dominantBaseline: "central",
        className: oe("recharts-radial-bar-label", l),
      }),
      E.createElement("defs", null, E.createElement("path", { id: _, d: P })),
      E.createElement("textPath", { xlinkHref: "#".concat(_) }, r),
    );
  },
  nU = function (t) {
    var r = t.viewBox,
      n = t.offset,
      i = t.position,
      a = r,
      o = a.cx,
      l = a.cy,
      u = a.innerRadius,
      s = a.outerRadius,
      f = a.startAngle,
      c = a.endAngle,
      d = (f + c) / 2;
    if (i === "outside") {
      var p = Ye(o, l, s + n, d),
        m = p.x,
        y = p.y;
      return {
        x: m,
        y,
        textAnchor: m >= o ? "start" : "end",
        verticalAnchor: "middle",
      };
    }
    if (i === "center")
      return { x: o, y: l, textAnchor: "middle", verticalAnchor: "middle" };
    if (i === "centerTop")
      return { x: o, y: l, textAnchor: "middle", verticalAnchor: "start" };
    if (i === "centerBottom")
      return { x: o, y: l, textAnchor: "middle", verticalAnchor: "end" };
    var x = (u + s) / 2,
      v = Ye(o, l, x, d),
      h = v.x,
      g = v.y;
    return { x: h, y: g, textAnchor: "middle", verticalAnchor: "middle" };
  },
  iU = function (t) {
    var r = t.viewBox,
      n = t.parentViewBox,
      i = t.offset,
      a = t.position,
      o = r,
      l = o.x,
      u = o.y,
      s = o.width,
      f = o.height,
      c = f >= 0 ? 1 : -1,
      d = c * i,
      p = c > 0 ? "end" : "start",
      m = c > 0 ? "start" : "end",
      y = s >= 0 ? 1 : -1,
      x = y * i,
      v = y > 0 ? "end" : "start",
      h = y > 0 ? "start" : "end";
    if (a === "top") {
      var g = {
        x: l + s / 2,
        y: u - c * i,
        textAnchor: "middle",
        verticalAnchor: p,
      };
      return Fe(Fe({}, g), n ? { height: Math.max(u - n.y, 0), width: s } : {});
    }
    if (a === "bottom") {
      var S = {
        x: l + s / 2,
        y: u + f + d,
        textAnchor: "middle",
        verticalAnchor: m,
      };
      return Fe(
        Fe({}, S),
        n ? { height: Math.max(n.y + n.height - (u + f), 0), width: s } : {},
      );
    }
    if (a === "left") {
      var b = {
        x: l - x,
        y: u + f / 2,
        textAnchor: v,
        verticalAnchor: "middle",
      };
      return Fe(
        Fe({}, b),
        n ? { width: Math.max(b.x - n.x, 0), height: f } : {},
      );
    }
    if (a === "right") {
      var w = {
        x: l + s + x,
        y: u + f / 2,
        textAnchor: h,
        verticalAnchor: "middle",
      };
      return Fe(
        Fe({}, w),
        n ? { width: Math.max(n.x + n.width - w.x, 0), height: f } : {},
      );
    }
    var P = n ? { width: s, height: f } : {};
    return a === "insideLeft"
      ? Fe(
          { x: l + x, y: u + f / 2, textAnchor: h, verticalAnchor: "middle" },
          P,
        )
      : a === "insideRight"
        ? Fe(
            {
              x: l + s - x,
              y: u + f / 2,
              textAnchor: v,
              verticalAnchor: "middle",
            },
            P,
          )
        : a === "insideTop"
          ? Fe(
              {
                x: l + s / 2,
                y: u + d,
                textAnchor: "middle",
                verticalAnchor: m,
              },
              P,
            )
          : a === "insideBottom"
            ? Fe(
                {
                  x: l + s / 2,
                  y: u + f - d,
                  textAnchor: "middle",
                  verticalAnchor: p,
                },
                P,
              )
            : a === "insideTopLeft"
              ? Fe({ x: l + x, y: u + d, textAnchor: h, verticalAnchor: m }, P)
              : a === "insideTopRight"
                ? Fe(
                    {
                      x: l + s - x,
                      y: u + d,
                      textAnchor: v,
                      verticalAnchor: m,
                    },
                    P,
                  )
                : a === "insideBottomLeft"
                  ? Fe(
                      {
                        x: l + x,
                        y: u + f - d,
                        textAnchor: h,
                        verticalAnchor: p,
                      },
                      P,
                    )
                  : a === "insideBottomRight"
                    ? Fe(
                        {
                          x: l + s - x,
                          y: u + f - d,
                          textAnchor: v,
                          verticalAnchor: p,
                        },
                        P,
                      )
                    : va(a) && (H(a.x) || Mn(a.x)) && (H(a.y) || Mn(a.y))
                      ? Fe(
                          {
                            x: l + Gn(a.x, s),
                            y: u + Gn(a.y, f),
                            textAnchor: "end",
                            verticalAnchor: "end",
                          },
                          P,
                        )
                      : Fe(
                          {
                            x: l + s / 2,
                            y: u + f / 2,
                            textAnchor: "middle",
                            verticalAnchor: "middle",
                          },
                          P,
                        );
  },
  aU = function (t) {
    return "cx" in t && H(t.cx);
  };
function nt(e) {
  var t = e.offset,
    r = t === void 0 ? 5 : t,
    n = X6(e, W6),
    i = Fe({ offset: r }, n),
    a = i.viewBox,
    o = i.position,
    l = i.value,
    u = i.children,
    s = i.content,
    f = i.className,
    c = f === void 0 ? "" : f,
    d = i.textBreakAll;
  if (!a || (ee(l) && ee(u) && !B.isValidElement(s) && !J(s))) return null;
  if (B.isValidElement(s)) return B.cloneElement(s, i);
  var p;
  if (J(s)) {
    if (((p = B.createElement(s, i)), B.isValidElement(p))) return p;
  } else p = eU(i);
  var m = aU(a),
    y = re(i, !0);
  if (m && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return rU(i, p, y);
  var x = m ? nU(i) : iU(i);
  return E.createElement(
    cs,
    Xo({ className: oe("recharts-label", c) }, y, x, { breakAll: d }),
    p,
  );
}
nt.displayName = "Label";
var OP = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.angle,
      a = t.startAngle,
      o = t.endAngle,
      l = t.r,
      u = t.radius,
      s = t.innerRadius,
      f = t.outerRadius,
      c = t.x,
      d = t.y,
      p = t.top,
      m = t.left,
      y = t.width,
      x = t.height,
      v = t.clockWise,
      h = t.labelViewBox;
    if (h) return h;
    if (H(y) && H(x)) {
      if (H(c) && H(d)) return { x: c, y: d, width: y, height: x };
      if (H(p) && H(m)) return { x: p, y: m, width: y, height: x };
    }
    return H(c) && H(d)
      ? { x: c, y: d, width: 0, height: 0 }
      : H(r) && H(n)
        ? {
            cx: r,
            cy: n,
            startAngle: a || i || 0,
            endAngle: o || i || 0,
            innerRadius: s || 0,
            outerRadius: f || u || l || 0,
            clockWise: v,
          }
        : t.viewBox
          ? t.viewBox
          : {};
  },
  oU = function (t, r) {
    return t
      ? t === !0
        ? E.createElement(nt, { key: "label-implicit", viewBox: r })
        : Ue(t)
          ? E.createElement(nt, { key: "label-implicit", viewBox: r, value: t })
          : B.isValidElement(t)
            ? t.type === nt
              ? B.cloneElement(t, { key: "label-implicit", viewBox: r })
              : E.createElement(nt, {
                  key: "label-implicit",
                  content: t,
                  viewBox: r,
                })
            : J(t)
              ? E.createElement(nt, {
                  key: "label-implicit",
                  content: t,
                  viewBox: r,
                })
              : va(t)
                ? E.createElement(
                    nt,
                    Xo({ viewBox: r }, t, { key: "label-implicit" }),
                  )
                : null
      : null;
  },
  lU = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    if (!t || (!t.children && n && !t.label)) return null;
    var i = t.children,
      a = OP(t),
      o = zt(i, nt).map(function (u, s) {
        return B.cloneElement(u, { viewBox: r || a, key: "label-".concat(s) });
      });
    if (!n) return o;
    var l = oU(t.label, r || a);
    return [l].concat(H6(o));
  };
nt.parseViewBox = OP;
nt.renderCallByParent = lU;
function uU(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var sU = uU;
const cU = pe(sU);
function Yo(e) {
  "@babel/helpers - typeof";
  return (
    (Yo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Yo(e)
  );
}
var fU = ["valueAccessor"],
  dU = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function pU(e) {
  return yU(e) || mU(e) || vU(e) || hU();
}
function hU() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vU(e, t) {
  if (e) {
    if (typeof e == "string") return Up(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Up(e, t);
  }
}
function mU(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function yU(e) {
  if (Array.isArray(e)) return Up(e);
}
function Up(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Es() {
  return (
    (Es = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Es.apply(this, arguments)
  );
}
function pb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function hb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? pb(Object(r), !0).forEach(function (n) {
          gU(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : pb(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function gU(e, t, r) {
  return (
    (t = bU(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function bU(e) {
  var t = xU(e, "string");
  return Yo(t) == "symbol" ? t : t + "";
}
function xU(e, t) {
  if (Yo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Yo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function vb(e, t) {
  if (e == null) return {};
  var r = wU(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function wU(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var SU = function (t) {
  return Array.isArray(t.value) ? cU(t.value) : t.value;
};
function cn(e) {
  var t = e.valueAccessor,
    r = t === void 0 ? SU : t,
    n = vb(e, fU),
    i = n.data,
    a = n.dataKey,
    o = n.clockWise,
    l = n.id,
    u = n.textBreakAll,
    s = vb(n, dU);
  return !i || !i.length
    ? null
    : E.createElement(
        ke,
        { className: "recharts-label-list" },
        i.map(function (f, c) {
          var d = ee(a) ? r(f, c) : jt(f && f.payload, a),
            p = ee(l) ? {} : { id: "".concat(l, "-").concat(c) };
          return E.createElement(
            nt,
            Es({}, re(f, !0), s, p, {
              parentViewBox: f.parentViewBox,
              value: d,
              textBreakAll: u,
              viewBox: nt.parseViewBox(
                ee(o) ? f : hb(hb({}, f), {}, { clockWise: o }),
              ),
              key: "label-".concat(c),
              index: c,
            }),
          );
        }),
      );
}
cn.displayName = "LabelList";
function OU(e, t) {
  return e
    ? e === !0
      ? E.createElement(cn, { key: "labelList-implicit", data: t })
      : E.isValidElement(e) || J(e)
        ? E.createElement(cn, {
            key: "labelList-implicit",
            data: t,
            content: e,
          })
        : va(e)
          ? E.createElement(
              cn,
              Es({ data: t }, e, { key: "labelList-implicit" }),
            )
          : null
    : null;
}
function PU(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || (!e.children && r && !e.label)) return null;
  var n = e.children,
    i = zt(n, cn).map(function (o, l) {
      return B.cloneElement(o, { data: t, key: "labelList-".concat(l) });
    });
  if (!r) return i;
  var a = OU(e.label, t);
  return [a].concat(pU(i));
}
cn.renderCallByParent = PU;
function Qo(e) {
  "@babel/helpers - typeof";
  return (
    (Qo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Qo(e)
  );
}
function Wp() {
  return (
    (Wp = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Wp.apply(this, arguments)
  );
}
function mb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function yb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? mb(Object(r), !0).forEach(function (n) {
          _U(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : mb(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function _U(e, t, r) {
  return (
    (t = AU(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function AU(e) {
  var t = EU(e, "string");
  return Qo(t) == "symbol" ? t : t + "";
}
function EU(e, t) {
  if (Qo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Qo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var jU = function (t, r) {
    var n = nr(r - t),
      i = Math.min(Math.abs(r - t), 359.999);
    return n * i;
  },
  ou = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.radius,
      a = t.angle,
      o = t.sign,
      l = t.isExternal,
      u = t.cornerRadius,
      s = t.cornerIsExternal,
      f = u * (l ? 1 : -1) + i,
      c = Math.asin(u / f) / As,
      d = s ? a : a + o * c,
      p = Ye(r, n, f, d),
      m = Ye(r, n, i, d),
      y = s ? a - o * c : a,
      x = Ye(r, n, f * Math.cos(c * As), y);
    return { center: p, circleTangency: m, lineTangency: x, theta: c };
  },
  PP = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.innerRadius,
      a = t.outerRadius,
      o = t.startAngle,
      l = t.endAngle,
      u = jU(o, l),
      s = o + u,
      f = Ye(r, n, a, o),
      c = Ye(r, n, a, s),
      d = "M "
        .concat(f.x, ",")
        .concat(
          f.y,
          `
    A `,
        )
        .concat(a, ",")
        .concat(
          a,
          `,0,
    `,
        )
        .concat(+(Math.abs(u) > 180), ",")
        .concat(
          +(o > s),
          `,
    `,
        )
        .concat(c.x, ",")
        .concat(
          c.y,
          `
  `,
        );
    if (i > 0) {
      var p = Ye(r, n, i, o),
        m = Ye(r, n, i, s);
      d += "L "
        .concat(m.x, ",")
        .concat(
          m.y,
          `
            A `,
        )
        .concat(i, ",")
        .concat(
          i,
          `,0,
            `,
        )
        .concat(+(Math.abs(u) > 180), ",")
        .concat(
          +(o <= s),
          `,
            `,
        )
        .concat(p.x, ",")
        .concat(p.y, " Z");
    } else d += "L ".concat(r, ",").concat(n, " Z");
    return d;
  },
  $U = function (t) {
    var r = t.cx,
      n = t.cy,
      i = t.innerRadius,
      a = t.outerRadius,
      o = t.cornerRadius,
      l = t.forceCornerRadius,
      u = t.cornerIsExternal,
      s = t.startAngle,
      f = t.endAngle,
      c = nr(f - s),
      d = ou({
        cx: r,
        cy: n,
        radius: a,
        angle: s,
        sign: c,
        cornerRadius: o,
        cornerIsExternal: u,
      }),
      p = d.circleTangency,
      m = d.lineTangency,
      y = d.theta,
      x = ou({
        cx: r,
        cy: n,
        radius: a,
        angle: f,
        sign: -c,
        cornerRadius: o,
        cornerIsExternal: u,
      }),
      v = x.circleTangency,
      h = x.lineTangency,
      g = x.theta,
      S = u ? Math.abs(s - f) : Math.abs(s - f) - y - g;
    if (S < 0)
      return l
        ? "M "
            .concat(m.x, ",")
            .concat(
              m.y,
              `
        a`,
            )
            .concat(o, ",")
            .concat(o, ",0,0,1,")
            .concat(
              o * 2,
              `,0
        a`,
            )
            .concat(o, ",")
            .concat(o, ",0,0,1,")
            .concat(
              -o * 2,
              `,0
      `,
            )
        : PP({
            cx: r,
            cy: n,
            innerRadius: i,
            outerRadius: a,
            startAngle: s,
            endAngle: f,
          });
    var b = "M "
      .concat(m.x, ",")
      .concat(
        m.y,
        `
    A`,
      )
      .concat(o, ",")
      .concat(o, ",0,0,")
      .concat(+(c < 0), ",")
      .concat(p.x, ",")
      .concat(
        p.y,
        `
    A`,
      )
      .concat(a, ",")
      .concat(a, ",0,")
      .concat(+(S > 180), ",")
      .concat(+(c < 0), ",")
      .concat(v.x, ",")
      .concat(
        v.y,
        `
    A`,
      )
      .concat(o, ",")
      .concat(o, ",0,0,")
      .concat(+(c < 0), ",")
      .concat(h.x, ",")
      .concat(
        h.y,
        `
  `,
      );
    if (i > 0) {
      var w = ou({
          cx: r,
          cy: n,
          radius: i,
          angle: s,
          sign: c,
          isExternal: !0,
          cornerRadius: o,
          cornerIsExternal: u,
        }),
        P = w.circleTangency,
        _ = w.lineTangency,
        A = w.theta,
        $ = ou({
          cx: r,
          cy: n,
          radius: i,
          angle: f,
          sign: -c,
          isExternal: !0,
          cornerRadius: o,
          cornerIsExternal: u,
        }),
        C = $.circleTangency,
        j = $.lineTangency,
        D = $.theta,
        N = u ? Math.abs(s - f) : Math.abs(s - f) - A - D;
      if (N < 0 && o === 0)
        return "".concat(b, "L").concat(r, ",").concat(n, "Z");
      b += "L"
        .concat(j.x, ",")
        .concat(
          j.y,
          `
      A`,
        )
        .concat(o, ",")
        .concat(o, ",0,0,")
        .concat(+(c < 0), ",")
        .concat(C.x, ",")
        .concat(
          C.y,
          `
      A`,
        )
        .concat(i, ",")
        .concat(i, ",0,")
        .concat(+(N > 180), ",")
        .concat(+(c > 0), ",")
        .concat(P.x, ",")
        .concat(
          P.y,
          `
      A`,
        )
        .concat(o, ",")
        .concat(o, ",0,0,")
        .concat(+(c < 0), ",")
        .concat(_.x, ",")
        .concat(_.y, "Z");
    } else b += "L".concat(r, ",").concat(n, "Z");
    return b;
  },
  TU = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: !1,
    cornerIsExternal: !1,
  },
  _P = function (t) {
    var r = yb(yb({}, TU), t),
      n = r.cx,
      i = r.cy,
      a = r.innerRadius,
      o = r.outerRadius,
      l = r.cornerRadius,
      u = r.forceCornerRadius,
      s = r.cornerIsExternal,
      f = r.startAngle,
      c = r.endAngle,
      d = r.className;
    if (o < a || f === c) return null;
    var p = oe("recharts-sector", d),
      m = o - a,
      y = Gn(l, m, 0, !0),
      x;
    return (
      y > 0 && Math.abs(f - c) < 360
        ? (x = $U({
            cx: n,
            cy: i,
            innerRadius: a,
            outerRadius: o,
            cornerRadius: Math.min(y, m / 2),
            forceCornerRadius: u,
            cornerIsExternal: s,
            startAngle: f,
            endAngle: c,
          }))
        : (x = PP({
            cx: n,
            cy: i,
            innerRadius: a,
            outerRadius: o,
            startAngle: f,
            endAngle: c,
          })),
      E.createElement(
        "path",
        Wp({}, re(r, !0), { className: p, d: x, role: "img" }),
      )
    );
  };
function Zo(e) {
  "@babel/helpers - typeof";
  return (
    (Zo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Zo(e)
  );
}
function Hp() {
  return (
    (Hp = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Hp.apply(this, arguments)
  );
}
function gb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function bb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gb(Object(r), !0).forEach(function (n) {
          CU(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : gb(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function CU(e, t, r) {
  return (
    (t = kU(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function kU(e) {
  var t = MU(e, "string");
  return Zo(t) == "symbol" ? t : t + "";
}
function MU(e, t) {
  if (Zo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Zo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var xb = {
    curveBasisClosed: C2,
    curveBasisOpen: k2,
    curveBasis: T2,
    curveBumpX: m2,
    curveBumpY: y2,
    curveLinearClosed: M2,
    curveLinear: $c,
    curveMonotoneX: N2,
    curveMonotoneY: I2,
    curveNatural: D2,
    curveStep: L2,
    curveStepAfter: F2,
    curveStepBefore: R2,
  },
  lu = function (t) {
    return t.x === +t.x && t.y === +t.y;
  },
  Ua = function (t) {
    return t.x;
  },
  Wa = function (t) {
    return t.y;
  },
  NU = function (t, r) {
    if (J(t)) return t;
    var n = "curve".concat(Ec(t));
    return (n === "curveMonotone" || n === "curveBump") && r
      ? xb["".concat(n).concat(r === "vertical" ? "Y" : "X")]
      : xb[n] || $c;
  },
  IU = function (t) {
    var r = t.type,
      n = r === void 0 ? "linear" : r,
      i = t.points,
      a = i === void 0 ? [] : i,
      o = t.baseLine,
      l = t.layout,
      u = t.connectNulls,
      s = u === void 0 ? !1 : u,
      f = NU(n, l),
      c = s
        ? a.filter(function (y) {
            return lu(y);
          })
        : a,
      d;
    if (Array.isArray(o)) {
      var p = s
          ? o.filter(function (y) {
              return lu(y);
            })
          : o,
        m = c.map(function (y, x) {
          return bb(bb({}, y), {}, { base: p[x] });
        });
      return (
        l === "vertical"
          ? (d = Ql()
              .y(Wa)
              .x1(Ua)
              .x0(function (y) {
                return y.base.x;
              }))
          : (d = Ql()
              .x(Ua)
              .y1(Wa)
              .y0(function (y) {
                return y.base.y;
              })),
        d.defined(lu).curve(f),
        d(m)
      );
    }
    return (
      l === "vertical" && H(o)
        ? (d = Ql().y(Wa).x1(Ua).x0(o))
        : H(o)
          ? (d = Ql().x(Ua).y1(Wa).y0(o))
          : (d = _S().x(Ua).y(Wa)),
      d.defined(lu).curve(f),
      d(c)
    );
  },
  Vp = function (t) {
    var r = t.className,
      n = t.points,
      i = t.path,
      a = t.pathRef;
    if ((!n || !n.length) && !i) return null;
    var o = n && n.length ? IU(t) : i;
    return B.createElement(
      "path",
      Hp({}, re(t, !1), Xu(t), {
        className: oe("recharts-curve", r),
        d: o,
        ref: a,
      }),
    );
  },
  AP = { exports: {} },
  DU = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  LU = DU,
  RU = LU;
function EP() {}
function jP() {}
jP.resetWarningCache = EP;
var FU = function () {
  function e(n, i, a, o, l, u) {
    if (u !== RU) {
      var s = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
      );
      throw ((s.name = "Invariant Violation"), s);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var r = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: jP,
    resetWarningCache: EP,
  };
  return ((r.PropTypes = r), r);
};
AP.exports = FU();
var BU = AP.exports;
const ue = pe(BU),
  { getOwnPropertyNames: zU, getOwnPropertySymbols: UU } = Object,
  { hasOwnProperty: WU } = Object.prototype;
function Ha(e, t) {
  return function (n, i, a) {
    return e(n, i, a) && t(n, i, a);
  };
}
function Va(e) {
  return function (r, n, i) {
    if (!r || !n || typeof r != "object" || typeof n != "object")
      return e(r, n, i);
    const { cache: a } = i,
      o = a.get(r),
      l = a.get(n);
    if (o && l) return o === n && l === r;
    (a.set(r, n), a.set(n, r));
    const u = e(r, n, i);
    return (a.delete(r), a.delete(n), u);
  };
}
function HU(e) {
  return e != null ? e[Symbol.toStringTag] : void 0;
}
function wb(e) {
  return zU(e).concat(UU(e));
}
const VU = Object.hasOwn || ((e, t) => WU.call(e, t));
function ri(e, t) {
  return e === t || (!e && !t && e !== e && t !== t);
}
const KU = "__v",
  GU = "__o",
  qU = "_owner",
  XU = typeof Float16Array < "u",
  { getOwnPropertyDescriptor: Sb, keys: Ob } = Object;
function YU(e, t) {
  return (
    e.byteLength === t.byteLength && js(new Uint8Array(e), new Uint8Array(t))
  );
}
function QU(e, t, r) {
  let n = e.length;
  if (t.length !== n) return !1;
  for (; n-- > 0; ) if (!r.equals(e[n], t[n], n, n, e, t, r)) return !1;
  return !0;
}
function ZU(e, t) {
  return (
    e.byteLength === t.byteLength &&
    js(
      new Uint8Array(e.buffer, e.byteOffset, e.byteLength),
      new Uint8Array(t.buffer, t.byteOffset, t.byteLength),
    )
  );
}
function JU(e, t) {
  return ri(e.getTime(), t.getTime());
}
function Pb(e, t, r) {
  return (
    e.name === t.name &&
    e.message === t.message &&
    e.stack === t.stack &&
    r.equals(e.cause, t.cause, "cause", "cause", e, t, r)
  );
}
function eW(e, t) {
  return e === t;
}
function _b(e, t, r) {
  const n = e.size;
  if (n !== t.size) return !1;
  if (!n) return !0;
  const i = new Array(n),
    a = e.entries();
  let o,
    l,
    u = 0;
  for (; (o = a.next()) && !o.done; ) {
    const s = t.entries();
    let f = !1,
      c = 0;
    for (; (l = s.next()) && !l.done; ) {
      if (i[c]) {
        c++;
        continue;
      }
      const d = o.value,
        p = l.value;
      if (
        r.equals(d[0], p[0], u, c, e, t, r) &&
        r.equals(d[1], p[1], d[0], p[0], e, t, r)
      ) {
        f = i[c] = !0;
        break;
      }
      c++;
    }
    if (!f) return !1;
    u++;
  }
  return !0;
}
const tW = ri;
function Ab(e, t, r) {
  const n = Ob(e);
  let i = n.length;
  if (Ob(t).length !== i) return !1;
  for (; i-- > 0; ) if (!$P(e, t, r, n[i])) return !1;
  return !0;
}
function li(e, t, r) {
  const n = wb(e);
  let i = n.length;
  if (wb(t).length !== i) return !1;
  let a, o, l;
  for (; i-- > 0; )
    if (
      ((a = n[i]),
      !$P(e, t, r, a) ||
        ((o = Sb(e, a)),
        (l = Sb(t, a)),
        (o || l) &&
          (!o ||
            !l ||
            o.configurable !== l.configurable ||
            o.enumerable !== l.enumerable ||
            o.writable !== l.writable)))
    )
      return !1;
  return !0;
}
function rW(e, t) {
  return ri(e.valueOf(), t.valueOf());
}
function nW(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function Eb(e, t, r) {
  const n = e.size;
  if (n !== t.size) return !1;
  if (!n) return !0;
  const i = new Array(n),
    a = e.values();
  let o, l;
  for (; (o = a.next()) && !o.done; ) {
    const u = t.values();
    let s = !1,
      f = 0;
    for (; (l = u.next()) && !l.done; ) {
      if (!i[f] && r.equals(o.value, l.value, o.value, l.value, e, t, r)) {
        s = i[f] = !0;
        break;
      }
      f++;
    }
    if (!s) return !1;
  }
  return !0;
}
function js(e, t) {
  let r = e.length;
  if (t.length !== r || e.byteOffset !== t.byteOffset) return !1;
  if (
    e instanceof Float64Array ||
    e instanceof Float32Array ||
    (XU && e instanceof Float16Array)
  ) {
    for (; r-- > 0; )
      if (e[r] !== t[r] && (e[r] === e[r] || t[r] === t[r])) return !1;
    return !0;
  }
  for (; r-- > 0; ) if (e[r] !== t[r]) return !1;
  return !0;
}
function iW(e, t) {
  return e.href === t.href
    ? !0
    : e.protocol === t.protocol &&
        e.username === t.username &&
        e.password === t.password &&
        e.host === t.host &&
        e.pathname === t.pathname &&
        e.hash === t.hash &&
        aW(e.searchParams, t.searchParams);
}
function aW(e, t) {
  const r = e.toString(),
    n = t.toString();
  return r === n || jb(r) === jb(n);
}
function jb(e) {
  return e.split("&").sort().join("&");
}
function $P(e, t, r, n) {
  return (n === qU || n === GU || n === KU) && (e.$$typeof || t.$$typeof)
    ? !0
    : VU(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
const oW = "[object ArrayBuffer]",
  lW = "[object Arguments]",
  uW = "[object Boolean]",
  sW = "[object DataView]",
  cW = "[object Date]",
  fW = "[object Error]",
  dW = "[object Map]",
  pW = "[object Number]",
  hW = "[object Object]",
  vW = "[object RegExp]",
  mW = "[object Set]",
  yW = "[object String]",
  gW = {
    "[object Int8Array]": !0,
    "[object Uint8Array]": !0,
    "[object Uint8ClampedArray]": !0,
    "[object Int16Array]": !0,
    "[object Uint16Array]": !0,
    "[object Int32Array]": !0,
    "[object Uint32Array]": !0,
    "[object Float16Array]": !0,
    "[object Float32Array]": !0,
    "[object Float64Array]": !0,
    "[object BigInt64Array]": !0,
    "[object BigUint64Array]": !0,
  },
  bW = "[object URL]",
  xW = Object.prototype.toString;
function wW({
  areArrayBuffersEqual: e,
  areArraysEqual: t,
  areDataViewsEqual: r,
  areDatesEqual: n,
  areErrorsEqual: i,
  areFunctionsEqual: a,
  areMapsEqual: o,
  areNumbersEqual: l,
  areObjectsEqual: u,
  arePrimitiveWrappersEqual: s,
  areRegExpsEqual: f,
  areSetsEqual: c,
  areTypedArraysEqual: d,
  areUrlsEqual: p,
  unknownTagComparators: m,
}) {
  return function (x, v, h) {
    if (x === v) return !0;
    if (x == null || v == null) return !1;
    const g = typeof x;
    if (g !== typeof v) return !1;
    if (g !== "object")
      return g === "number" ? l(x, v, h) : g === "function" ? a(x, v, h) : !1;
    const S = x.constructor;
    if (S !== v.constructor) return !1;
    if (S === Object) return u(x, v, h);
    if (Array.isArray(x)) return t(x, v, h);
    if (S === Date) return n(x, v, h);
    if (S === RegExp) return f(x, v, h);
    if (S === Map) return o(x, v, h);
    if (S === Set) return c(x, v, h);
    const b = xW.call(x);
    if (b === cW) return n(x, v, h);
    if (b === vW) return f(x, v, h);
    if (b === dW) return o(x, v, h);
    if (b === mW) return c(x, v, h);
    if (b === hW)
      return (
        typeof x.then != "function" && typeof v.then != "function" && u(x, v, h)
      );
    if (b === bW) return p(x, v, h);
    if (b === fW) return i(x, v, h);
    if (b === lW) return u(x, v, h);
    if (gW[b]) return d(x, v, h);
    if (b === oW) return e(x, v, h);
    if (b === sW) return r(x, v, h);
    if (b === uW || b === pW || b === yW) return s(x, v, h);
    if (m) {
      let w = m[b];
      if (!w) {
        const P = HU(x);
        P && (w = m[P]);
      }
      if (w) return w(x, v, h);
    }
    return !1;
  };
}
function SW({ circular: e, createCustomConfig: t, strict: r }) {
  let n = {
    areArrayBuffersEqual: YU,
    areArraysEqual: r ? li : QU,
    areDataViewsEqual: ZU,
    areDatesEqual: JU,
    areErrorsEqual: r ? Ha(Pb, li) : Ha(Pb, Ab),
    areFunctionsEqual: eW,
    areMapsEqual: r ? Ha(_b, li) : _b,
    areNumbersEqual: tW,
    areObjectsEqual: r ? li : Ab,
    arePrimitiveWrappersEqual: rW,
    areRegExpsEqual: nW,
    areSetsEqual: r ? Ha(Eb, li) : Eb,
    areTypedArraysEqual: r ? Ha(js, li) : js,
    areUrlsEqual: iW,
    unknownTagComparators: void 0,
  };
  if ((t && (n = Object.assign({}, n, t(n))), e)) {
    const i = Va(n.areArraysEqual),
      a = Va(n.areErrorsEqual),
      o = Va(n.areMapsEqual),
      l = Va(n.areObjectsEqual),
      u = Va(n.areSetsEqual);
    n = Object.assign({}, n, {
      areArraysEqual: i,
      areErrorsEqual: a,
      areMapsEqual: o,
      areObjectsEqual: l,
      areSetsEqual: u,
    });
  }
  return n;
}
function OW(e) {
  return function (t, r, n, i, a, o, l) {
    return e(t, r, l);
  };
}
function PW({
  circular: e,
  comparator: t,
  createState: r,
  equals: n,
  strict: i,
}) {
  if (r)
    return function (l, u) {
      const { cache: s = e ? new WeakMap() : void 0, meta: f } = r();
      return t(l, u, { cache: s, equals: n, meta: f, strict: i });
    };
  if (e)
    return function (l, u) {
      return t(l, u, {
        cache: new WeakMap(),
        equals: n,
        meta: void 0,
        strict: i,
      });
    };
  const a = { cache: void 0, equals: n, meta: void 0, strict: i };
  return function (l, u) {
    return t(l, u, a);
  };
}
const _W = wn();
wn({ strict: !0 });
wn({ circular: !0 });
wn({ circular: !0, strict: !0 });
wn({ createInternalComparator: () => ri });
wn({ strict: !0, createInternalComparator: () => ri });
wn({ circular: !0, createInternalComparator: () => ri });
wn({ circular: !0, createInternalComparator: () => ri, strict: !0 });
function wn(e = {}) {
  const {
      circular: t = !1,
      createInternalComparator: r,
      createState: n,
      strict: i = !1,
    } = e,
    a = SW(e),
    o = wW(a),
    l = r ? r(o) : OW(o);
  return PW({
    circular: t,
    comparator: o,
    createState: n,
    equals: l,
    strict: i,
  });
}
function AW(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function $b(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    r = -1,
    n = function i(a) {
      (r < 0 && (r = a), a - r > t ? (e(a), (r = -1)) : AW(i));
    };
  requestAnimationFrame(n);
}
function Kp(e) {
  "@babel/helpers - typeof";
  return (
    (Kp =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Kp(e)
  );
}
function EW(e) {
  return CW(e) || TW(e) || $W(e) || jW();
}
function jW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $W(e, t) {
  if (e) {
    if (typeof e == "string") return Tb(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Tb(e, t);
  }
}
function Tb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function TW(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function CW(e) {
  if (Array.isArray(e)) return e;
}
function kW() {
  var e = {},
    t = function () {
      return null;
    },
    r = !1,
    n = function i(a) {
      if (!r) {
        if (Array.isArray(a)) {
          if (!a.length) return;
          var o = a,
            l = EW(o),
            u = l[0],
            s = l.slice(1);
          if (typeof u == "number") {
            $b(i.bind(null, s), u);
            return;
          }
          (i(u), $b(i.bind(null, s)));
          return;
        }
        (Kp(a) === "object" && ((e = a), t(e)), typeof a == "function" && a());
      }
    };
  return {
    stop: function () {
      r = !0;
    },
    start: function (a) {
      ((r = !1), n(a));
    },
    subscribe: function (a) {
      return (
        (t = a),
        function () {
          t = function () {
            return null;
          };
        }
      );
    },
  };
}
function Jo(e) {
  "@babel/helpers - typeof";
  return (
    (Jo =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Jo(e)
  );
}
function Cb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function kb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Cb(Object(r), !0).forEach(function (n) {
          TP(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Cb(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function TP(e, t, r) {
  return (
    (t = MW(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function MW(e) {
  var t = NW(e, "string");
  return Jo(t) === "symbol" ? t : String(t);
}
function NW(e, t) {
  if (Jo(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Jo(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var IW = function (t, r) {
    return [Object.keys(t), Object.keys(r)].reduce(function (n, i) {
      return n.filter(function (a) {
        return i.includes(a);
      });
    });
  },
  DW = function (t) {
    return t;
  },
  LW = function (t) {
    return t.replace(/([A-Z])/g, function (r) {
      return "-".concat(r.toLowerCase());
    });
  },
  fo = function (t, r) {
    return Object.keys(r).reduce(function (n, i) {
      return kb(kb({}, n), {}, TP({}, i, t(i, r[i])));
    }, {});
  },
  Mb = function (t, r, n) {
    return t
      .map(function (i) {
        return "".concat(LW(i), " ").concat(r, "ms ").concat(n);
      })
      .join(",");
  };
function RW(e, t) {
  return zW(e) || BW(e, t) || CP(e, t) || FW();
}
function FW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function BW(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      l = [],
      u = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(u = (n = a.call(r)).done) && (l.push(n.value), l.length !== t);
          u = !0
        );
    } catch (f) {
      ((s = !0), (i = f));
    } finally {
      try {
        if (!u && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return l;
  }
}
function zW(e) {
  if (Array.isArray(e)) return e;
}
function UW(e) {
  return VW(e) || HW(e) || CP(e) || WW();
}
function WW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CP(e, t) {
  if (e) {
    if (typeof e == "string") return Gp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Gp(e, t);
  }
}
function HW(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function VW(e) {
  if (Array.isArray(e)) return Gp(e);
}
function Gp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var $s = 1e-4,
  kP = function (t, r) {
    return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
  },
  MP = function (t, r) {
    return t
      .map(function (n, i) {
        return n * Math.pow(r, i);
      })
      .reduce(function (n, i) {
        return n + i;
      });
  },
  Nb = function (t, r) {
    return function (n) {
      var i = kP(t, r);
      return MP(i, n);
    };
  },
  KW = function (t, r) {
    return function (n) {
      var i = kP(t, r),
        a = [].concat(
          UW(
            i
              .map(function (o, l) {
                return o * l;
              })
              .slice(1),
          ),
          [0],
        );
      return MP(a, n);
    };
  },
  Ib = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    var i = r[0],
      a = r[1],
      o = r[2],
      l = r[3];
    if (r.length === 1)
      switch (r[0]) {
        case "linear":
          ((i = 0), (a = 0), (o = 1), (l = 1));
          break;
        case "ease":
          ((i = 0.25), (a = 0.1), (o = 0.25), (l = 1));
          break;
        case "ease-in":
          ((i = 0.42), (a = 0), (o = 1), (l = 1));
          break;
        case "ease-out":
          ((i = 0.42), (a = 0), (o = 0.58), (l = 1));
          break;
        case "ease-in-out":
          ((i = 0), (a = 0), (o = 0.58), (l = 1));
          break;
        default: {
          var u = r[0].split("(");
          if (
            u[0] === "cubic-bezier" &&
            u[1].split(")")[0].split(",").length === 4
          ) {
            var s = u[1]
                .split(")")[0]
                .split(",")
                .map(function (x) {
                  return parseFloat(x);
                }),
              f = RW(s, 4);
            ((i = f[0]), (a = f[1]), (o = f[2]), (l = f[3]));
          }
        }
      }
    var c = Nb(i, o),
      d = Nb(a, l),
      p = KW(i, o),
      m = function (v) {
        return v > 1 ? 1 : v < 0 ? 0 : v;
      },
      y = function (v) {
        for (var h = v > 1 ? 1 : v, g = h, S = 0; S < 8; ++S) {
          var b = c(g) - h,
            w = p(g);
          if (Math.abs(b - h) < $s || w < $s) return d(g);
          g = m(g - b / w);
        }
        return d(g);
      };
    return ((y.isStepper = !1), y);
  },
  GW = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = t.stiff,
      n = r === void 0 ? 100 : r,
      i = t.damping,
      a = i === void 0 ? 8 : i,
      o = t.dt,
      l = o === void 0 ? 17 : o,
      u = function (f, c, d) {
        var p = -(f - c) * n,
          m = d * a,
          y = d + ((p - m) * l) / 1e3,
          x = (d * l) / 1e3 + f;
        return Math.abs(x - c) < $s && Math.abs(y) < $s ? [c, 0] : [x, y];
      };
    return ((u.isStepper = !0), (u.dt = l), u);
  },
  qW = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    var i = r[0];
    if (typeof i == "string")
      switch (i) {
        case "ease":
        case "ease-in-out":
        case "ease-out":
        case "ease-in":
        case "linear":
          return Ib(i);
        case "spring":
          return GW();
        default:
          if (i.split("(")[0] === "cubic-bezier") return Ib(i);
      }
    return typeof i == "function" ? i : null;
  };
function el(e) {
  "@babel/helpers - typeof";
  return (
    (el =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    el(e)
  );
}
function Db(e) {
  return QW(e) || YW(e) || NP(e) || XW();
}
function XW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function YW(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function QW(e) {
  if (Array.isArray(e)) return Xp(e);
}
function Lb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Lb(Object(r), !0).forEach(function (n) {
          qp(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Lb(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function qp(e, t, r) {
  return (
    (t = ZW(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function ZW(e) {
  var t = JW(e, "string");
  return el(t) === "symbol" ? t : String(t);
}
function JW(e, t) {
  if (el(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (el(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function e9(e, t) {
  return n9(e) || r9(e, t) || NP(e, t) || t9();
}
function t9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function NP(e, t) {
  if (e) {
    if (typeof e == "string") return Xp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Xp(e, t);
  }
}
function Xp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function r9(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      l = [],
      u = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(u = (n = a.call(r)).done) && (l.push(n.value), l.length !== t);
          u = !0
        );
    } catch (f) {
      ((s = !0), (i = f));
    } finally {
      try {
        if (!u && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return l;
  }
}
function n9(e) {
  if (Array.isArray(e)) return e;
}
var Ts = function (t, r, n) {
    return t + (r - t) * n;
  },
  Yp = function (t) {
    var r = t.from,
      n = t.to;
    return r !== n;
  },
  i9 = function e(t, r, n) {
    var i = fo(function (a, o) {
      if (Yp(o)) {
        var l = t(o.from, o.to, o.velocity),
          u = e9(l, 2),
          s = u[0],
          f = u[1];
        return qe(qe({}, o), {}, { from: s, velocity: f });
      }
      return o;
    }, r);
    return n < 1
      ? fo(function (a, o) {
          return Yp(o)
            ? qe(
                qe({}, o),
                {},
                {
                  velocity: Ts(o.velocity, i[a].velocity, n),
                  from: Ts(o.from, i[a].from, n),
                },
              )
            : o;
        }, r)
      : e(t, i, n - 1);
  };
const a9 = function (e, t, r, n, i) {
  var a = IW(e, t),
    o = a.reduce(function (x, v) {
      return qe(qe({}, x), {}, qp({}, v, [e[v], t[v]]));
    }, {}),
    l = a.reduce(function (x, v) {
      return qe(
        qe({}, x),
        {},
        qp({}, v, { from: e[v], velocity: 0, to: t[v] }),
      );
    }, {}),
    u = -1,
    s,
    f,
    c = function () {
      return null;
    },
    d = function () {
      return fo(function (v, h) {
        return h.from;
      }, l);
    },
    p = function () {
      return !Object.values(l).filter(Yp).length;
    },
    m = function (v) {
      s || (s = v);
      var h = v - s,
        g = h / r.dt;
      ((l = i9(r, l, g)),
        i(qe(qe(qe({}, e), t), d())),
        (s = v),
        p() || (u = requestAnimationFrame(c)));
    },
    y = function (v) {
      f || (f = v);
      var h = (v - f) / n,
        g = fo(function (b, w) {
          return Ts.apply(void 0, Db(w).concat([r(h)]));
        }, o);
      if ((i(qe(qe(qe({}, e), t), g)), h < 1)) u = requestAnimationFrame(c);
      else {
        var S = fo(function (b, w) {
          return Ts.apply(void 0, Db(w).concat([r(1)]));
        }, o);
        i(qe(qe(qe({}, e), t), S));
      }
    };
  return (
    (c = r.isStepper ? m : y),
    function () {
      return (
        requestAnimationFrame(c),
        function () {
          cancelAnimationFrame(u);
        }
      );
    }
  );
};
function Qi(e) {
  "@babel/helpers - typeof";
  return (
    (Qi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Qi(e)
  );
}
var o9 = [
  "children",
  "begin",
  "duration",
  "attributeName",
  "easing",
  "isActive",
  "steps",
  "from",
  "to",
  "canBegin",
  "onAnimationEnd",
  "shouldReAnimate",
  "onAnimationReStart",
];
function l9(e, t) {
  if (e == null) return {};
  var r = u9(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function u9(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    ((i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]));
  return r;
}
function Qf(e) {
  return d9(e) || f9(e) || c9(e) || s9();
}
function s9() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function c9(e, t) {
  if (e) {
    if (typeof e == "string") return Qp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Qp(e, t);
  }
}
function f9(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function d9(e) {
  if (Array.isArray(e)) return Qp(e);
}
function Qp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Rb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function qt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Rb(Object(r), !0).forEach(function (n) {
          Za(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Rb(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Za(e, t, r) {
  return (
    (t = IP(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function p9(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function h9(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, IP(n.key), n));
  }
}
function v9(e, t, r) {
  return (
    t && h9(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function IP(e) {
  var t = m9(e, "string");
  return Qi(t) === "symbol" ? t : String(t);
}
function m9(e, t) {
  if (Qi(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Qi(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function y9(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Zp(e, t));
}
function Zp(e, t) {
  return (
    (Zp = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    Zp(e, t)
  );
}
function g9(e) {
  var t = b9();
  return function () {
    var n = Cs(e),
      i;
    if (t) {
      var a = Cs(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return Jp(this, i);
  };
}
function Jp(e, t) {
  if (t && (Qi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return eh(e);
}
function eh(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function b9() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Cs(e) {
  return (
    (Cs = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Cs(e)
  );
}
var Lr = (function (e) {
  y9(r, e);
  var t = g9(r);
  function r(n, i) {
    var a;
    (p9(this, r), (a = t.call(this, n, i)));
    var o = a.props,
      l = o.isActive,
      u = o.attributeName,
      s = o.from,
      f = o.to,
      c = o.steps,
      d = o.children,
      p = o.duration;
    if (
      ((a.handleStyleChange = a.handleStyleChange.bind(eh(a))),
      (a.changeStyle = a.changeStyle.bind(eh(a))),
      !l || p <= 0)
    )
      return (
        (a.state = { style: {} }),
        typeof d == "function" && (a.state = { style: f }),
        Jp(a)
      );
    if (c && c.length) a.state = { style: c[0].style };
    else if (s) {
      if (typeof d == "function") return ((a.state = { style: s }), Jp(a));
      a.state = { style: u ? Za({}, u, s) : s };
    } else a.state = { style: {} };
    return a;
  }
  return (
    v9(r, [
      {
        key: "componentDidMount",
        value: function () {
          var i = this.props,
            a = i.isActive,
            o = i.canBegin;
          ((this.mounted = !0), !(!a || !o) && this.runAnimation(this.props));
        },
      },
      {
        key: "componentDidUpdate",
        value: function (i) {
          var a = this.props,
            o = a.isActive,
            l = a.canBegin,
            u = a.attributeName,
            s = a.shouldReAnimate,
            f = a.to,
            c = a.from,
            d = this.state.style;
          if (l) {
            if (!o) {
              var p = { style: u ? Za({}, u, f) : f };
              this.state &&
                d &&
                ((u && d[u] !== f) || (!u && d !== f)) &&
                this.setState(p);
              return;
            }
            if (!(_W(i.to, f) && i.canBegin && i.isActive)) {
              var m = !i.canBegin || !i.isActive;
              (this.manager && this.manager.stop(),
                this.stopJSAnimation && this.stopJSAnimation());
              var y = m || s ? c : i.to;
              if (this.state && d) {
                var x = { style: u ? Za({}, u, y) : y };
                ((u && d[u] !== y) || (!u && d !== y)) && this.setState(x);
              }
              this.runAnimation(
                qt(qt({}, this.props), {}, { from: y, begin: 0 }),
              );
            }
          }
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          this.mounted = !1;
          var i = this.props.onAnimationEnd;
          (this.unSubscribe && this.unSubscribe(),
            this.manager && (this.manager.stop(), (this.manager = null)),
            this.stopJSAnimation && this.stopJSAnimation(),
            i && i());
        },
      },
      {
        key: "handleStyleChange",
        value: function (i) {
          this.changeStyle(i);
        },
      },
      {
        key: "changeStyle",
        value: function (i) {
          this.mounted && this.setState({ style: i });
        },
      },
      {
        key: "runJSAnimation",
        value: function (i) {
          var a = this,
            o = i.from,
            l = i.to,
            u = i.duration,
            s = i.easing,
            f = i.begin,
            c = i.onAnimationEnd,
            d = i.onAnimationStart,
            p = a9(o, l, qW(s), u, this.changeStyle),
            m = function () {
              a.stopJSAnimation = p();
            };
          this.manager.start([d, f, m, u, c]);
        },
      },
      {
        key: "runStepAnimation",
        value: function (i) {
          var a = this,
            o = i.steps,
            l = i.begin,
            u = i.onAnimationStart,
            s = o[0],
            f = s.style,
            c = s.duration,
            d = c === void 0 ? 0 : c,
            p = function (y, x, v) {
              if (v === 0) return y;
              var h = x.duration,
                g = x.easing,
                S = g === void 0 ? "ease" : g,
                b = x.style,
                w = x.properties,
                P = x.onAnimationEnd,
                _ = v > 0 ? o[v - 1] : x,
                A = w || Object.keys(b);
              if (typeof S == "function" || S === "spring")
                return [].concat(Qf(y), [
                  a.runJSAnimation.bind(a, {
                    from: _.style,
                    to: b,
                    duration: h,
                    easing: S,
                  }),
                  h,
                ]);
              var $ = Mb(A, h, S),
                C = qt(qt(qt({}, _.style), b), {}, { transition: $ });
              return [].concat(Qf(y), [C, h, P]).filter(DW);
            };
          return this.manager.start(
            [u].concat(Qf(o.reduce(p, [f, Math.max(d, l)])), [
              i.onAnimationEnd,
            ]),
          );
        },
      },
      {
        key: "runAnimation",
        value: function (i) {
          this.manager || (this.manager = kW());
          var a = i.begin,
            o = i.duration,
            l = i.attributeName,
            u = i.to,
            s = i.easing,
            f = i.onAnimationStart,
            c = i.onAnimationEnd,
            d = i.steps,
            p = i.children,
            m = this.manager;
          if (
            ((this.unSubscribe = m.subscribe(this.handleStyleChange)),
            typeof s == "function" || typeof p == "function" || s === "spring")
          ) {
            this.runJSAnimation(i);
            return;
          }
          if (d.length > 1) {
            this.runStepAnimation(i);
            return;
          }
          var y = l ? Za({}, l, u) : u,
            x = Mb(Object.keys(y), o, s);
          m.start([f, a, qt(qt({}, y), {}, { transition: x }), o, c]);
        },
      },
      {
        key: "render",
        value: function () {
          var i = this.props,
            a = i.children;
          i.begin;
          var o = i.duration;
          (i.attributeName, i.easing);
          var l = i.isActive;
          (i.steps,
            i.from,
            i.to,
            i.canBegin,
            i.onAnimationEnd,
            i.shouldReAnimate,
            i.onAnimationReStart);
          var u = l9(i, o9),
            s = B.Children.count(a),
            f = this.state.style;
          if (typeof a == "function") return a(f);
          if (!l || s === 0 || o <= 0) return a;
          var c = function (p) {
            var m = p.props,
              y = m.style,
              x = y === void 0 ? {} : y,
              v = m.className,
              h = B.cloneElement(
                p,
                qt(qt({}, u), {}, { style: qt(qt({}, x), f), className: v }),
              );
            return h;
          };
          return s === 1
            ? c(B.Children.only(a))
            : E.createElement(
                "div",
                null,
                B.Children.map(a, function (d) {
                  return c(d);
                }),
              );
        },
      },
    ]),
    r
  );
})(B.PureComponent);
Lr.displayName = "Animate";
Lr.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function () {},
  onAnimationStart: function () {},
};
Lr.propTypes = {
  from: ue.oneOfType([ue.object, ue.string]),
  to: ue.oneOfType([ue.object, ue.string]),
  attributeName: ue.string,
  duration: ue.number,
  begin: ue.number,
  easing: ue.oneOfType([ue.string, ue.func]),
  steps: ue.arrayOf(
    ue.shape({
      duration: ue.number.isRequired,
      style: ue.object.isRequired,
      easing: ue.oneOfType([
        ue.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]),
        ue.func,
      ]),
      properties: ue.arrayOf("string"),
      onAnimationEnd: ue.func,
    }),
  ),
  children: ue.oneOfType([ue.node, ue.func]),
  isActive: ue.bool,
  canBegin: ue.bool,
  onAnimationEnd: ue.func,
  shouldReAnimate: ue.bool,
  onAnimationStart: ue.func,
  onAnimationReStart: ue.func,
};
function tl(e) {
  "@babel/helpers - typeof";
  return (
    (tl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    tl(e)
  );
}
function ks() {
  return (
    (ks = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ks.apply(this, arguments)
  );
}
function x9(e, t) {
  return P9(e) || O9(e, t) || S9(e, t) || w9();
}
function w9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function S9(e, t) {
  if (e) {
    if (typeof e == "string") return Fb(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Fb(e, t);
  }
}
function Fb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function O9(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      l = [],
      u = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(u = (n = a.call(r)).done) && (l.push(n.value), l.length !== t);
          u = !0
        );
    } catch (f) {
      ((s = !0), (i = f));
    } finally {
      try {
        if (!u && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return l;
  }
}
function P9(e) {
  if (Array.isArray(e)) return e;
}
function Bb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function zb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Bb(Object(r), !0).forEach(function (n) {
          _9(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Bb(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function _9(e, t, r) {
  return (
    (t = A9(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function A9(e) {
  var t = E9(e, "string");
  return tl(t) == "symbol" ? t : t + "";
}
function E9(e, t) {
  if (tl(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (tl(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ub = function (t, r, n, i, a) {
    var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2),
      l = i >= 0 ? 1 : -1,
      u = n >= 0 ? 1 : -1,
      s = (i >= 0 && n >= 0) || (i < 0 && n < 0) ? 1 : 0,
      f;
    if (o > 0 && a instanceof Array) {
      for (var c = [0, 0, 0, 0], d = 0, p = 4; d < p; d++)
        c[d] = a[d] > o ? o : a[d];
      ((f = "M".concat(t, ",").concat(r + l * c[0])),
        c[0] > 0 &&
          (f += "A "
            .concat(c[0], ",")
            .concat(c[0], ",0,0,")
            .concat(s, ",")
            .concat(t + u * c[0], ",")
            .concat(r)),
        (f += "L ".concat(t + n - u * c[1], ",").concat(r)),
        c[1] > 0 &&
          (f += "A "
            .concat(c[1], ",")
            .concat(c[1], ",0,0,")
            .concat(
              s,
              `,
        `,
            )
            .concat(t + n, ",")
            .concat(r + l * c[1])),
        (f += "L ".concat(t + n, ",").concat(r + i - l * c[2])),
        c[2] > 0 &&
          (f += "A "
            .concat(c[2], ",")
            .concat(c[2], ",0,0,")
            .concat(
              s,
              `,
        `,
            )
            .concat(t + n - u * c[2], ",")
            .concat(r + i)),
        (f += "L ".concat(t + u * c[3], ",").concat(r + i)),
        c[3] > 0 &&
          (f += "A "
            .concat(c[3], ",")
            .concat(c[3], ",0,0,")
            .concat(
              s,
              `,
        `,
            )
            .concat(t, ",")
            .concat(r + i - l * c[3])),
        (f += "Z"));
    } else if (o > 0 && a === +a && a > 0) {
      var m = Math.min(o, a);
      f = "M "
        .concat(t, ",")
        .concat(
          r + l * m,
          `
            A `,
        )
        .concat(m, ",")
        .concat(m, ",0,0,")
        .concat(s, ",")
        .concat(t + u * m, ",")
        .concat(
          r,
          `
            L `,
        )
        .concat(t + n - u * m, ",")
        .concat(
          r,
          `
            A `,
        )
        .concat(m, ",")
        .concat(m, ",0,0,")
        .concat(s, ",")
        .concat(t + n, ",")
        .concat(
          r + l * m,
          `
            L `,
        )
        .concat(t + n, ",")
        .concat(
          r + i - l * m,
          `
            A `,
        )
        .concat(m, ",")
        .concat(m, ",0,0,")
        .concat(s, ",")
        .concat(t + n - u * m, ",")
        .concat(
          r + i,
          `
            L `,
        )
        .concat(t + u * m, ",")
        .concat(
          r + i,
          `
            A `,
        )
        .concat(m, ",")
        .concat(m, ",0,0,")
        .concat(s, ",")
        .concat(t, ",")
        .concat(r + i - l * m, " Z");
    } else
      f = "M "
        .concat(t, ",")
        .concat(r, " h ")
        .concat(n, " v ")
        .concat(i, " h ")
        .concat(-n, " Z");
    return f;
  },
  j9 = function (t, r) {
    if (!t || !r) return !1;
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y,
      l = r.width,
      u = r.height;
    if (Math.abs(l) > 0 && Math.abs(u) > 0) {
      var s = Math.min(a, a + l),
        f = Math.max(a, a + l),
        c = Math.min(o, o + u),
        d = Math.max(o, o + u);
      return n >= s && n <= f && i >= c && i <= d;
    }
    return !1;
  },
  $9 = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: !1,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  },
  vm = function (t) {
    var r = zb(zb({}, $9), t),
      n = B.useRef(),
      i = B.useState(-1),
      a = x9(i, 2),
      o = a[0],
      l = a[1];
    B.useEffect(function () {
      if (n.current && n.current.getTotalLength)
        try {
          var S = n.current.getTotalLength();
          S && l(S);
        } catch {}
    }, []);
    var u = r.x,
      s = r.y,
      f = r.width,
      c = r.height,
      d = r.radius,
      p = r.className,
      m = r.animationEasing,
      y = r.animationDuration,
      x = r.animationBegin,
      v = r.isAnimationActive,
      h = r.isUpdateAnimationActive;
    if (u !== +u || s !== +s || f !== +f || c !== +c || f === 0 || c === 0)
      return null;
    var g = oe("recharts-rectangle", p);
    return h
      ? E.createElement(
          Lr,
          {
            canBegin: o > 0,
            from: { width: f, height: c, x: u, y: s },
            to: { width: f, height: c, x: u, y: s },
            duration: y,
            animationEasing: m,
            isActive: h,
          },
          function (S) {
            var b = S.width,
              w = S.height,
              P = S.x,
              _ = S.y;
            return E.createElement(
              Lr,
              {
                canBegin: o > 0,
                from: "0px ".concat(o === -1 ? 1 : o, "px"),
                to: "".concat(o, "px 0px"),
                attributeName: "strokeDasharray",
                begin: x,
                duration: y,
                isActive: v,
                easing: m,
              },
              E.createElement(
                "path",
                ks({}, re(r, !0), {
                  className: g,
                  d: Ub(P, _, b, w, d),
                  ref: n,
                }),
              ),
            );
          },
        )
      : E.createElement(
          "path",
          ks({}, re(r, !0), { className: g, d: Ub(u, s, f, c, d) }),
        );
  };
function th() {
  return (
    (th = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    th.apply(this, arguments)
  );
}
var mm = function (t) {
  var r = t.cx,
    n = t.cy,
    i = t.r,
    a = t.className,
    o = oe("recharts-dot", a);
  return r === +r && n === +n && i === +i
    ? B.createElement(
        "circle",
        th({}, re(t, !1), Xu(t), { className: o, cx: r, cy: n, r: i }),
      )
    : null;
};
function rl(e) {
  "@babel/helpers - typeof";
  return (
    (rl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    rl(e)
  );
}
var T9 = ["x", "y", "top", "left", "width", "height", "className"];
function rh() {
  return (
    (rh = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    rh.apply(this, arguments)
  );
}
function Wb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function C9(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Wb(Object(r), !0).forEach(function (n) {
          k9(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Wb(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function k9(e, t, r) {
  return (
    (t = M9(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function M9(e) {
  var t = N9(e, "string");
  return rl(t) == "symbol" ? t : t + "";
}
function N9(e, t) {
  if (rl(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (rl(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function I9(e, t) {
  if (e == null) return {};
  var r = D9(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function D9(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var L9 = function (t, r, n, i, a, o) {
    return "M"
      .concat(t, ",")
      .concat(a, "v")
      .concat(i, "M")
      .concat(o, ",")
      .concat(r, "h")
      .concat(n);
  },
  R9 = function (t) {
    var r = t.x,
      n = r === void 0 ? 0 : r,
      i = t.y,
      a = i === void 0 ? 0 : i,
      o = t.top,
      l = o === void 0 ? 0 : o,
      u = t.left,
      s = u === void 0 ? 0 : u,
      f = t.width,
      c = f === void 0 ? 0 : f,
      d = t.height,
      p = d === void 0 ? 0 : d,
      m = t.className,
      y = I9(t, T9),
      x = C9({ x: n, y: a, top: l, left: s, width: c, height: p }, y);
    return !H(n) || !H(a) || !H(c) || !H(p) || !H(l) || !H(s)
      ? null
      : E.createElement(
          "path",
          rh({}, re(x, !0), {
            className: oe("recharts-cross", m),
            d: L9(n, a, c, p, l, s),
          }),
        );
  },
  F9 = XS,
  B9 = F9(Object.getPrototypeOf, Object),
  z9 = B9,
  U9 = Fr,
  W9 = z9,
  H9 = Br,
  V9 = "[object Object]",
  K9 = Function.prototype,
  G9 = Object.prototype,
  DP = K9.toString,
  q9 = G9.hasOwnProperty,
  X9 = DP.call(Object);
function Y9(e) {
  if (!H9(e) || U9(e) != V9) return !1;
  var t = W9(e);
  if (t === null) return !0;
  var r = q9.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && DP.call(r) == X9;
}
var Q9 = Y9;
const Z9 = pe(Q9);
var J9 = Fr,
  eH = Br,
  tH = "[object Boolean]";
function rH(e) {
  return e === !0 || e === !1 || (eH(e) && J9(e) == tH);
}
var nH = rH;
const iH = pe(nH);
function nl(e) {
  "@babel/helpers - typeof";
  return (
    (nl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    nl(e)
  );
}
function Ms() {
  return (
    (Ms = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ms.apply(this, arguments)
  );
}
function aH(e, t) {
  return sH(e) || uH(e, t) || lH(e, t) || oH();
}
function oH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lH(e, t) {
  if (e) {
    if (typeof e == "string") return Hb(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Hb(e, t);
  }
}
function Hb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function uH(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      l = [],
      u = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(u = (n = a.call(r)).done) && (l.push(n.value), l.length !== t);
          u = !0
        );
    } catch (f) {
      ((s = !0), (i = f));
    } finally {
      try {
        if (!u && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return l;
  }
}
function sH(e) {
  if (Array.isArray(e)) return e;
}
function Vb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Kb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Vb(Object(r), !0).forEach(function (n) {
          cH(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Vb(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function cH(e, t, r) {
  return (
    (t = fH(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function fH(e) {
  var t = dH(e, "string");
  return nl(t) == "symbol" ? t : t + "";
}
function dH(e, t) {
  if (nl(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (nl(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Gb = function (t, r, n, i, a) {
    var o = n - i,
      l;
    return (
      (l = "M ".concat(t, ",").concat(r)),
      (l += "L ".concat(t + n, ",").concat(r)),
      (l += "L ".concat(t + n - o / 2, ",").concat(r + a)),
      (l += "L ".concat(t + n - o / 2 - i, ",").concat(r + a)),
      (l += "L ".concat(t, ",").concat(r, " Z")),
      l
    );
  },
  pH = {
    x: 0,
    y: 0,
    upperWidth: 0,
    lowerWidth: 0,
    height: 0,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease",
  },
  hH = function (t) {
    var r = Kb(Kb({}, pH), t),
      n = B.useRef(),
      i = B.useState(-1),
      a = aH(i, 2),
      o = a[0],
      l = a[1];
    B.useEffect(function () {
      if (n.current && n.current.getTotalLength)
        try {
          var g = n.current.getTotalLength();
          g && l(g);
        } catch {}
    }, []);
    var u = r.x,
      s = r.y,
      f = r.upperWidth,
      c = r.lowerWidth,
      d = r.height,
      p = r.className,
      m = r.animationEasing,
      y = r.animationDuration,
      x = r.animationBegin,
      v = r.isUpdateAnimationActive;
    if (
      u !== +u ||
      s !== +s ||
      f !== +f ||
      c !== +c ||
      d !== +d ||
      (f === 0 && c === 0) ||
      d === 0
    )
      return null;
    var h = oe("recharts-trapezoid", p);
    return v
      ? E.createElement(
          Lr,
          {
            canBegin: o > 0,
            from: { upperWidth: 0, lowerWidth: 0, height: d, x: u, y: s },
            to: { upperWidth: f, lowerWidth: c, height: d, x: u, y: s },
            duration: y,
            animationEasing: m,
            isActive: v,
          },
          function (g) {
            var S = g.upperWidth,
              b = g.lowerWidth,
              w = g.height,
              P = g.x,
              _ = g.y;
            return E.createElement(
              Lr,
              {
                canBegin: o > 0,
                from: "0px ".concat(o === -1 ? 1 : o, "px"),
                to: "".concat(o, "px 0px"),
                attributeName: "strokeDasharray",
                begin: x,
                duration: y,
                easing: m,
              },
              E.createElement(
                "path",
                Ms({}, re(r, !0), {
                  className: h,
                  d: Gb(P, _, S, b, w),
                  ref: n,
                }),
              ),
            );
          },
        )
      : E.createElement(
          "g",
          null,
          E.createElement(
            "path",
            Ms({}, re(r, !0), { className: h, d: Gb(u, s, f, c, d) }),
          ),
        );
  },
  vH = [
    "option",
    "shapeType",
    "propTransformer",
    "activeClassName",
    "isActive",
  ];
function il(e) {
  "@babel/helpers - typeof";
  return (
    (il =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    il(e)
  );
}
function mH(e, t) {
  if (e == null) return {};
  var r = yH(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function yH(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function qb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ns(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? qb(Object(r), !0).forEach(function (n) {
          gH(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : qb(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function gH(e, t, r) {
  return (
    (t = bH(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function bH(e) {
  var t = xH(e, "string");
  return il(t) == "symbol" ? t : t + "";
}
function xH(e, t) {
  if (il(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (il(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function wH(e, t) {
  return Ns(Ns({}, t), e);
}
function SH(e, t) {
  return e === "symbols";
}
function Xb(e) {
  var t = e.shapeType,
    r = e.elementProps;
  switch (t) {
    case "rectangle":
      return E.createElement(vm, r);
    case "trapezoid":
      return E.createElement(hH, r);
    case "sector":
      return E.createElement(_P, r);
    case "symbols":
      if (SH(t)) return E.createElement(Nv, r);
      break;
    default:
      return null;
  }
}
function OH(e) {
  return B.isValidElement(e) ? e.props : e;
}
function PH(e) {
  var t = e.option,
    r = e.shapeType,
    n = e.propTransformer,
    i = n === void 0 ? wH : n,
    a = e.activeClassName,
    o = a === void 0 ? "recharts-active-shape" : a,
    l = e.isActive,
    u = mH(e, vH),
    s;
  if (B.isValidElement(t)) s = B.cloneElement(t, Ns(Ns({}, u), OH(t)));
  else if (J(t)) s = t(u);
  else if (Z9(t) && !iH(t)) {
    var f = i(t, u);
    s = E.createElement(Xb, { shapeType: r, elementProps: f });
  } else {
    var c = u;
    s = E.createElement(Xb, { shapeType: r, elementProps: c });
  }
  return l ? E.createElement(ke, { className: o }, s) : s;
}
function Vc(e, t) {
  return t != null && "trapezoids" in e.props;
}
function Kc(e, t) {
  return t != null && "sectors" in e.props;
}
function al(e, t) {
  return t != null && "points" in e.props;
}
function _H(e, t) {
  var r,
    n,
    i =
      e.x ===
        (t == null || (r = t.labelViewBox) === null || r === void 0
          ? void 0
          : r.x) || e.x === t.x,
    a =
      e.y ===
        (t == null || (n = t.labelViewBox) === null || n === void 0
          ? void 0
          : n.y) || e.y === t.y;
  return i && a;
}
function AH(e, t) {
  var r = e.endAngle === t.endAngle,
    n = e.startAngle === t.startAngle;
  return r && n;
}
function EH(e, t) {
  var r = e.x === t.x,
    n = e.y === t.y,
    i = e.z === t.z;
  return r && n && i;
}
function jH(e, t) {
  var r;
  return (Vc(e, t) ? (r = _H) : Kc(e, t) ? (r = AH) : al(e, t) && (r = EH), r);
}
function $H(e, t) {
  var r;
  return (
    Vc(e, t)
      ? (r = "trapezoids")
      : Kc(e, t)
        ? (r = "sectors")
        : al(e, t) && (r = "points"),
    r
  );
}
function TH(e, t) {
  if (Vc(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null ||
      r === void 0 ||
      (r = r[0]) === null ||
      r === void 0 ||
      (r = r.payload) === null ||
      r === void 0
      ? void 0
      : r.payload;
  }
  if (Kc(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null ||
      n === void 0 ||
      (n = n[0]) === null ||
      n === void 0 ||
      (n = n.payload) === null ||
      n === void 0
      ? void 0
      : n.payload;
  }
  return al(e, t) ? t.payload : {};
}
function CH(e) {
  var t = e.activeTooltipItem,
    r = e.graphicalItem,
    n = e.itemData,
    i = $H(r, t),
    a = TH(r, t),
    o = n.filter(function (u, s) {
      var f = Uc(a, u),
        c = r.props[i].filter(function (m) {
          var y = jH(r, t);
          return y(m, t);
        }),
        d = r.props[i].indexOf(c[c.length - 1]),
        p = s === d;
      return f && p;
    }),
    l = n.indexOf(o[o.length - 1]);
  return l;
}
var kH = Math.ceil,
  MH = Math.max;
function NH(e, t, r, n) {
  for (var i = -1, a = MH(kH((t - e) / (r || 1)), 0), o = Array(a); a--; )
    ((o[n ? a : ++i] = e), (e += r));
  return o;
}
var IH = NH,
  DH = hO,
  Yb = 1 / 0,
  LH = 17976931348623157e292;
function RH(e) {
  if (!e) return e === 0 ? e : 0;
  if (((e = DH(e)), e === Yb || e === -Yb)) {
    var t = e < 0 ? -1 : 1;
    return t * LH;
  }
  return e === e ? e : 0;
}
var LP = RH,
  FH = IH,
  BH = Mc,
  Zf = LP;
function zH(e) {
  return function (t, r, n) {
    return (
      n && typeof n != "number" && BH(t, r, n) && (r = n = void 0),
      (t = Zf(t)),
      r === void 0 ? ((r = t), (t = 0)) : (r = Zf(r)),
      (n = n === void 0 ? (t < r ? 1 : -1) : Zf(n)),
      FH(t, r, n, e)
    );
  };
}
var UH = zH,
  WH = UH,
  HH = WH(),
  VH = HH;
const Is = pe(VH);
function ol(e) {
  "@babel/helpers - typeof";
  return (
    (ol =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ol(e)
  );
}
function Qb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Zb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Qb(Object(r), !0).forEach(function (n) {
          RP(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Qb(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function RP(e, t, r) {
  return (
    (t = KH(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function KH(e) {
  var t = GH(e, "string");
  return ol(t) == "symbol" ? t : t + "";
}
function GH(e, t) {
  if (ol(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ol(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var qH = ["Webkit", "Moz", "O", "ms"],
  XH = function (t, r) {
    var n = t.replace(/(\w)/, function (a) {
        return a.toUpperCase();
      }),
      i = qH.reduce(function (a, o) {
        return Zb(Zb({}, a), {}, RP({}, o + n, r));
      }, {});
    return ((i[t] = r), i);
  };
function Zi(e) {
  "@babel/helpers - typeof";
  return (
    (Zi =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Zi(e)
  );
}
function Ds() {
  return (
    (Ds = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ds.apply(this, arguments)
  );
}
function Jb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Jf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Jb(Object(r), !0).forEach(function (n) {
          wt(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Jb(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function YH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ex(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, BP(n.key), n));
  }
}
function QH(e, t, r) {
  return (
    t && ex(e.prototype, t),
    r && ex(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function ZH(e, t, r) {
  return (
    (t = Ls(t)),
    JH(
      e,
      FP() ? Reflect.construct(t, r || [], Ls(e).constructor) : t.apply(e, r),
    )
  );
}
function JH(e, t) {
  if (t && (Zi(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return e7(e);
}
function e7(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function FP() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (FP = function () {
    return !!e;
  })();
}
function Ls(e) {
  return (
    (Ls = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ls(e)
  );
}
function t7(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && nh(e, t));
}
function nh(e, t) {
  return (
    (nh = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    nh(e, t)
  );
}
function wt(e, t, r) {
  return (
    (t = BP(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function BP(e) {
  var t = r7(e, "string");
  return Zi(t) == "symbol" ? t : t + "";
}
function r7(e, t) {
  if (Zi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Zi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var n7 = function (t) {
    var r = t.data,
      n = t.startIndex,
      i = t.endIndex,
      a = t.x,
      o = t.width,
      l = t.travellerWidth;
    if (!r || !r.length) return {};
    var u = r.length,
      s = so()
        .domain(Is(0, u))
        .range([a, a + o - l]),
      f = s.domain().map(function (c) {
        return s(c);
      });
    return {
      isTextActive: !1,
      isSlideMoving: !1,
      isTravellerMoving: !1,
      isTravellerFocused: !1,
      startX: s(n),
      endX: s(i),
      scale: s,
      scaleValues: f,
    };
  },
  tx = function (t) {
    return t.changedTouches && !!t.changedTouches.length;
  },
  Ji = (function (e) {
    function t(r) {
      var n;
      return (
        YH(this, t),
        (n = ZH(this, t, [r])),
        wt(n, "handleDrag", function (i) {
          (n.leaveTimer && (clearTimeout(n.leaveTimer), (n.leaveTimer = null)),
            n.state.isTravellerMoving
              ? n.handleTravellerMove(i)
              : n.state.isSlideMoving && n.handleSlideDrag(i));
        }),
        wt(n, "handleTouchMove", function (i) {
          i.changedTouches != null &&
            i.changedTouches.length > 0 &&
            n.handleDrag(i.changedTouches[0]);
        }),
        wt(n, "handleDragEnd", function () {
          (n.setState(
            { isTravellerMoving: !1, isSlideMoving: !1 },
            function () {
              var i = n.props,
                a = i.endIndex,
                o = i.onDragEnd,
                l = i.startIndex;
              o == null || o({ endIndex: a, startIndex: l });
            },
          ),
            n.detachDragEndListener());
        }),
        wt(n, "handleLeaveWrapper", function () {
          (n.state.isTravellerMoving || n.state.isSlideMoving) &&
            (n.leaveTimer = window.setTimeout(
              n.handleDragEnd,
              n.props.leaveTimeOut,
            ));
        }),
        wt(n, "handleEnterSlideOrTraveller", function () {
          n.setState({ isTextActive: !0 });
        }),
        wt(n, "handleLeaveSlideOrTraveller", function () {
          n.setState({ isTextActive: !1 });
        }),
        wt(n, "handleSlideDragStart", function (i) {
          var a = tx(i) ? i.changedTouches[0] : i;
          (n.setState({
            isTravellerMoving: !1,
            isSlideMoving: !0,
            slideMoveStartX: a.pageX,
          }),
            n.attachDragEndListener());
        }),
        (n.travellerDragStartHandlers = {
          startX: n.handleTravellerDragStart.bind(n, "startX"),
          endX: n.handleTravellerDragStart.bind(n, "endX"),
        }),
        (n.state = {}),
        n
      );
    }
    return (
      t7(t, e),
      QH(
        t,
        [
          {
            key: "componentWillUnmount",
            value: function () {
              (this.leaveTimer &&
                (clearTimeout(this.leaveTimer), (this.leaveTimer = null)),
                this.detachDragEndListener());
            },
          },
          {
            key: "getIndex",
            value: function (n) {
              var i = n.startX,
                a = n.endX,
                o = this.state.scaleValues,
                l = this.props,
                u = l.gap,
                s = l.data,
                f = s.length - 1,
                c = Math.min(i, a),
                d = Math.max(i, a),
                p = t.getIndexInRange(o, c),
                m = t.getIndexInRange(o, d);
              return {
                startIndex: p - (p % u),
                endIndex: m === f ? f : m - (m % u),
              };
            },
          },
          {
            key: "getTextOfTick",
            value: function (n) {
              var i = this.props,
                a = i.data,
                o = i.tickFormatter,
                l = i.dataKey,
                u = jt(a[n], l, n);
              return J(o) ? o(u, n) : u;
            },
          },
          {
            key: "attachDragEndListener",
            value: function () {
              (window.addEventListener("mouseup", this.handleDragEnd, !0),
                window.addEventListener("touchend", this.handleDragEnd, !0),
                window.addEventListener("mousemove", this.handleDrag, !0));
            },
          },
          {
            key: "detachDragEndListener",
            value: function () {
              (window.removeEventListener("mouseup", this.handleDragEnd, !0),
                window.removeEventListener("touchend", this.handleDragEnd, !0),
                window.removeEventListener("mousemove", this.handleDrag, !0));
            },
          },
          {
            key: "handleSlideDrag",
            value: function (n) {
              var i = this.state,
                a = i.slideMoveStartX,
                o = i.startX,
                l = i.endX,
                u = this.props,
                s = u.x,
                f = u.width,
                c = u.travellerWidth,
                d = u.startIndex,
                p = u.endIndex,
                m = u.onChange,
                y = n.pageX - a;
              y > 0
                ? (y = Math.min(y, s + f - c - l, s + f - c - o))
                : y < 0 && (y = Math.max(y, s - o, s - l));
              var x = this.getIndex({ startX: o + y, endX: l + y });
              ((x.startIndex !== d || x.endIndex !== p) && m && m(x),
                this.setState({
                  startX: o + y,
                  endX: l + y,
                  slideMoveStartX: n.pageX,
                }));
            },
          },
          {
            key: "handleTravellerDragStart",
            value: function (n, i) {
              var a = tx(i) ? i.changedTouches[0] : i;
              (this.setState({
                isSlideMoving: !1,
                isTravellerMoving: !0,
                movingTravellerId: n,
                brushMoveStartX: a.pageX,
              }),
                this.attachDragEndListener());
            },
          },
          {
            key: "handleTravellerMove",
            value: function (n) {
              var i = this.state,
                a = i.brushMoveStartX,
                o = i.movingTravellerId,
                l = i.endX,
                u = i.startX,
                s = this.state[o],
                f = this.props,
                c = f.x,
                d = f.width,
                p = f.travellerWidth,
                m = f.onChange,
                y = f.gap,
                x = f.data,
                v = { startX: this.state.startX, endX: this.state.endX },
                h = n.pageX - a;
              (h > 0
                ? (h = Math.min(h, c + d - p - s))
                : h < 0 && (h = Math.max(h, c - s)),
                (v[o] = s + h));
              var g = this.getIndex(v),
                S = g.startIndex,
                b = g.endIndex,
                w = function () {
                  var _ = x.length - 1;
                  return (
                    (o === "startX" && (l > u ? S % y === 0 : b % y === 0)) ||
                    (l < u && b === _) ||
                    (o === "endX" && (l > u ? b % y === 0 : S % y === 0)) ||
                    (l > u && b === _)
                  );
                };
              this.setState(
                wt(wt({}, o, s + h), "brushMoveStartX", n.pageX),
                function () {
                  m && w() && m(g);
                },
              );
            },
          },
          {
            key: "handleTravellerMoveKeyboard",
            value: function (n, i) {
              var a = this,
                o = this.state,
                l = o.scaleValues,
                u = o.startX,
                s = o.endX,
                f = this.state[i],
                c = l.indexOf(f);
              if (c !== -1) {
                var d = c + n;
                if (!(d === -1 || d >= l.length)) {
                  var p = l[d];
                  (i === "startX" && p >= s) ||
                    (i === "endX" && p <= u) ||
                    this.setState(wt({}, i, p), function () {
                      a.props.onChange(
                        a.getIndex({
                          startX: a.state.startX,
                          endX: a.state.endX,
                        }),
                      );
                    });
                }
              }
            },
          },
          {
            key: "renderBackground",
            value: function () {
              var n = this.props,
                i = n.x,
                a = n.y,
                o = n.width,
                l = n.height,
                u = n.fill,
                s = n.stroke;
              return E.createElement("rect", {
                stroke: s,
                fill: u,
                x: i,
                y: a,
                width: o,
                height: l,
              });
            },
          },
          {
            key: "renderPanorama",
            value: function () {
              var n = this.props,
                i = n.x,
                a = n.y,
                o = n.width,
                l = n.height,
                u = n.data,
                s = n.children,
                f = n.padding,
                c = B.Children.only(s);
              return c
                ? E.cloneElement(c, {
                    x: i,
                    y: a,
                    width: o,
                    height: l,
                    margin: f,
                    compact: !0,
                    data: u,
                  })
                : null;
            },
          },
          {
            key: "renderTravellerLayer",
            value: function (n, i) {
              var a,
                o,
                l = this,
                u = this.props,
                s = u.y,
                f = u.travellerWidth,
                c = u.height,
                d = u.traveller,
                p = u.ariaLabel,
                m = u.data,
                y = u.startIndex,
                x = u.endIndex,
                v = Math.max(n, this.props.x),
                h = Jf(
                  Jf({}, re(this.props, !1)),
                  {},
                  { x: v, y: s, width: f, height: c },
                ),
                g =
                  p ||
                  "Min value: "
                    .concat(
                      (a = m[y]) === null || a === void 0 ? void 0 : a.name,
                      ", Max value: ",
                    )
                    .concat(
                      (o = m[x]) === null || o === void 0 ? void 0 : o.name,
                    );
              return E.createElement(
                ke,
                {
                  tabIndex: 0,
                  role: "slider",
                  "aria-label": g,
                  "aria-valuenow": n,
                  className: "recharts-brush-traveller",
                  onMouseEnter: this.handleEnterSlideOrTraveller,
                  onMouseLeave: this.handleLeaveSlideOrTraveller,
                  onMouseDown: this.travellerDragStartHandlers[i],
                  onTouchStart: this.travellerDragStartHandlers[i],
                  onKeyDown: function (b) {
                    ["ArrowLeft", "ArrowRight"].includes(b.key) &&
                      (b.preventDefault(),
                      b.stopPropagation(),
                      l.handleTravellerMoveKeyboard(
                        b.key === "ArrowRight" ? 1 : -1,
                        i,
                      ));
                  },
                  onFocus: function () {
                    l.setState({ isTravellerFocused: !0 });
                  },
                  onBlur: function () {
                    l.setState({ isTravellerFocused: !1 });
                  },
                  style: { cursor: "col-resize" },
                },
                t.renderTraveller(d, h),
              );
            },
          },
          {
            key: "renderSlide",
            value: function (n, i) {
              var a = this.props,
                o = a.y,
                l = a.height,
                u = a.stroke,
                s = a.travellerWidth,
                f = Math.min(n, i) + s,
                c = Math.max(Math.abs(i - n) - s, 0);
              return E.createElement("rect", {
                className: "recharts-brush-slide",
                onMouseEnter: this.handleEnterSlideOrTraveller,
                onMouseLeave: this.handleLeaveSlideOrTraveller,
                onMouseDown: this.handleSlideDragStart,
                onTouchStart: this.handleSlideDragStart,
                style: { cursor: "move" },
                stroke: "none",
                fill: u,
                fillOpacity: 0.2,
                x: f,
                y: o,
                width: c,
                height: l,
              });
            },
          },
          {
            key: "renderText",
            value: function () {
              var n = this.props,
                i = n.startIndex,
                a = n.endIndex,
                o = n.y,
                l = n.height,
                u = n.travellerWidth,
                s = n.stroke,
                f = this.state,
                c = f.startX,
                d = f.endX,
                p = 5,
                m = { pointerEvents: "none", fill: s };
              return E.createElement(
                ke,
                { className: "recharts-brush-texts" },
                E.createElement(
                  cs,
                  Ds(
                    {
                      textAnchor: "end",
                      verticalAnchor: "middle",
                      x: Math.min(c, d) - p,
                      y: o + l / 2,
                    },
                    m,
                  ),
                  this.getTextOfTick(i),
                ),
                E.createElement(
                  cs,
                  Ds(
                    {
                      textAnchor: "start",
                      verticalAnchor: "middle",
                      x: Math.max(c, d) + u + p,
                      y: o + l / 2,
                    },
                    m,
                  ),
                  this.getTextOfTick(a),
                ),
              );
            },
          },
          {
            key: "render",
            value: function () {
              var n = this.props,
                i = n.data,
                a = n.className,
                o = n.children,
                l = n.x,
                u = n.y,
                s = n.width,
                f = n.height,
                c = n.alwaysShowText,
                d = this.state,
                p = d.startX,
                m = d.endX,
                y = d.isTextActive,
                x = d.isSlideMoving,
                v = d.isTravellerMoving,
                h = d.isTravellerFocused;
              if (
                !i ||
                !i.length ||
                !H(l) ||
                !H(u) ||
                !H(s) ||
                !H(f) ||
                s <= 0 ||
                f <= 0
              )
                return null;
              var g = oe("recharts-brush", a),
                S = E.Children.count(o) === 1,
                b = XH("userSelect", "none");
              return E.createElement(
                ke,
                {
                  className: g,
                  onMouseLeave: this.handleLeaveWrapper,
                  onTouchMove: this.handleTouchMove,
                  style: b,
                },
                this.renderBackground(),
                S && this.renderPanorama(),
                this.renderSlide(p, m),
                this.renderTravellerLayer(p, "startX"),
                this.renderTravellerLayer(m, "endX"),
                (y || x || v || h || c) && this.renderText(),
              );
            },
          },
        ],
        [
          {
            key: "renderDefaultTraveller",
            value: function (n) {
              var i = n.x,
                a = n.y,
                o = n.width,
                l = n.height,
                u = n.stroke,
                s = Math.floor(a + l / 2) - 1;
              return E.createElement(
                E.Fragment,
                null,
                E.createElement("rect", {
                  x: i,
                  y: a,
                  width: o,
                  height: l,
                  fill: u,
                  stroke: "none",
                }),
                E.createElement("line", {
                  x1: i + 1,
                  y1: s,
                  x2: i + o - 1,
                  y2: s,
                  fill: "none",
                  stroke: "#fff",
                }),
                E.createElement("line", {
                  x1: i + 1,
                  y1: s + 2,
                  x2: i + o - 1,
                  y2: s + 2,
                  fill: "none",
                  stroke: "#fff",
                }),
              );
            },
          },
          {
            key: "renderTraveller",
            value: function (n, i) {
              var a;
              return (
                E.isValidElement(n)
                  ? (a = E.cloneElement(n, i))
                  : J(n)
                    ? (a = n(i))
                    : (a = t.renderDefaultTraveller(i)),
                a
              );
            },
          },
          {
            key: "getDerivedStateFromProps",
            value: function (n, i) {
              var a = n.data,
                o = n.width,
                l = n.x,
                u = n.travellerWidth,
                s = n.updateId,
                f = n.startIndex,
                c = n.endIndex;
              if (a !== i.prevData || s !== i.prevUpdateId)
                return Jf(
                  {
                    prevData: a,
                    prevTravellerWidth: u,
                    prevUpdateId: s,
                    prevX: l,
                    prevWidth: o,
                  },
                  a && a.length
                    ? n7({
                        data: a,
                        width: o,
                        x: l,
                        travellerWidth: u,
                        startIndex: f,
                        endIndex: c,
                      })
                    : { scale: null, scaleValues: null },
                );
              if (
                i.scale &&
                (o !== i.prevWidth ||
                  l !== i.prevX ||
                  u !== i.prevTravellerWidth)
              ) {
                i.scale.range([l, l + o - u]);
                var d = i.scale.domain().map(function (p) {
                  return i.scale(p);
                });
                return {
                  prevData: a,
                  prevTravellerWidth: u,
                  prevUpdateId: s,
                  prevX: l,
                  prevWidth: o,
                  startX: i.scale(n.startIndex),
                  endX: i.scale(n.endIndex),
                  scaleValues: d,
                };
              }
              return null;
            },
          },
          {
            key: "getIndexInRange",
            value: function (n, i) {
              for (var a = n.length, o = 0, l = a - 1; l - o > 1; ) {
                var u = Math.floor((o + l) / 2);
                n[u] > i ? (l = u) : (o = u);
              }
              return i >= n[l] ? l : o;
            },
          },
        ],
      )
    );
  })(B.PureComponent);
wt(Ji, "displayName", "Brush");
wt(Ji, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: { top: 1, right: 1, bottom: 1, left: 1 },
  leaveTimeOut: 1e3,
  alwaysShowText: !1,
});
var i7 = zv;
function a7(e, t) {
  var r;
  return (
    i7(e, function (n, i, a) {
      return ((r = t(n, i, a)), !r);
    }),
    !!r
  );
}
var o7 = a7,
  l7 = zS,
  u7 = gn,
  s7 = o7,
  c7 = bt,
  f7 = Mc;
function d7(e, t, r) {
  var n = c7(e) ? l7 : s7;
  return (r && f7(e, t, r) && (t = void 0), n(e, u7(t)));
}
var p7 = d7;
const h7 = pe(p7);
var vr = function (t, r) {
    var n = t.alwaysShow,
      i = t.ifOverflow;
    return (n && (i = "extendDomain"), i === r);
  },
  rx = sO;
function v7(e, t, r) {
  t == "__proto__" && rx
    ? rx(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
    : (e[t] = r);
}
var m7 = v7,
  y7 = m7,
  g7 = lO,
  b7 = gn;
function x7(e, t) {
  var r = {};
  return (
    (t = b7(t)),
    g7(e, function (n, i, a) {
      y7(r, i, t(n, i, a));
    }),
    r
  );
}
var w7 = x7;
const S7 = pe(w7);
function O7(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (!t(e[r], r, e)) return !1;
  return !0;
}
var P7 = O7,
  _7 = zv;
function A7(e, t) {
  var r = !0;
  return (
    _7(e, function (n, i, a) {
      return ((r = !!t(n, i, a)), r);
    }),
    r
  );
}
var E7 = A7,
  j7 = P7,
  $7 = E7,
  T7 = gn,
  C7 = bt,
  k7 = Mc;
function M7(e, t, r) {
  var n = C7(e) ? j7 : $7;
  return (r && k7(e, t, r) && (t = void 0), n(e, T7(t)));
}
var N7 = M7;
const zP = pe(N7);
var I7 = ["x", "y"];
function ll(e) {
  "@babel/helpers - typeof";
  return (
    (ll =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ll(e)
  );
}
function ih() {
  return (
    (ih = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ih.apply(this, arguments)
  );
}
function nx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Ka(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? nx(Object(r), !0).forEach(function (n) {
          D7(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : nx(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function D7(e, t, r) {
  return (
    (t = L7(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function L7(e) {
  var t = R7(e, "string");
  return ll(t) == "symbol" ? t : t + "";
}
function R7(e, t) {
  if (ll(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ll(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function F7(e, t) {
  if (e == null) return {};
  var r = B7(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function B7(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function z7(e, t) {
  var r = e.x,
    n = e.y,
    i = F7(e, I7),
    a = "".concat(r),
    o = parseInt(a, 10),
    l = "".concat(n),
    u = parseInt(l, 10),
    s = "".concat(t.height || i.height),
    f = parseInt(s, 10),
    c = "".concat(t.width || i.width),
    d = parseInt(c, 10);
  return Ka(
    Ka(Ka(Ka(Ka({}, t), i), o ? { x: o } : {}), u ? { y: u } : {}),
    {},
    { height: f, width: d, name: t.name, radius: t.radius },
  );
}
function ix(e) {
  return E.createElement(
    PH,
    ih(
      {
        shapeType: "rectangle",
        propTransformer: z7,
        activeClassName: "recharts-active-bar",
      },
      e,
    ),
  );
}
var U7 = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return function (n, i) {
      if (typeof t == "number") return t;
      var a = H(n) || tk(n);
      return a ? t(n, i) : (a || Xn(), r);
    };
  },
  W7 = ["value", "background"],
  UP;
function ea(e) {
  "@babel/helpers - typeof";
  return (
    (ea =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ea(e)
  );
}
function H7(e, t) {
  if (e == null) return {};
  var r = V7(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function V7(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Rs() {
  return (
    (Rs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Rs.apply(this, arguments)
  );
}
function ax(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ax(Object(r), !0).forEach(function (n) {
          Jr(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ax(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function K7(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ox(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, HP(n.key), n));
  }
}
function G7(e, t, r) {
  return (
    t && ox(e.prototype, t),
    r && ox(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function q7(e, t, r) {
  return (
    (t = Fs(t)),
    X7(
      e,
      WP() ? Reflect.construct(t, r || [], Fs(e).constructor) : t.apply(e, r),
    )
  );
}
function X7(e, t) {
  if (t && (ea(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return Y7(e);
}
function Y7(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function WP() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (WP = function () {
    return !!e;
  })();
}
function Fs(e) {
  return (
    (Fs = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Fs(e)
  );
}
function Q7(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ah(e, t));
}
function ah(e, t) {
  return (
    (ah = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    ah(e, t)
  );
}
function Jr(e, t, r) {
  return (
    (t = HP(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function HP(e) {
  var t = Z7(e, "string");
  return ea(t) == "symbol" ? t : t + "";
}
function Z7(e, t) {
  if (ea(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ea(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var jl = (function (e) {
  function t() {
    var r;
    K7(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return (
      (r = q7(this, t, [].concat(i))),
      Jr(r, "state", { isAnimationFinished: !1 }),
      Jr(r, "id", wl("recharts-bar-")),
      Jr(r, "handleAnimationEnd", function () {
        var o = r.props.onAnimationEnd;
        (r.setState({ isAnimationFinished: !0 }), o && o());
      }),
      Jr(r, "handleAnimationStart", function () {
        var o = r.props.onAnimationStart;
        (r.setState({ isAnimationFinished: !1 }), o && o());
      }),
      r
    );
  }
  return (
    Q7(t, e),
    G7(
      t,
      [
        {
          key: "renderRectanglesStatically",
          value: function (n) {
            var i = this,
              a = this.props,
              o = a.shape,
              l = a.dataKey,
              u = a.activeIndex,
              s = a.activeBar,
              f = re(this.props, !1);
            return (
              n &&
              n.map(function (c, d) {
                var p = d === u,
                  m = p ? s : o,
                  y = Me(
                    Me(Me({}, f), c),
                    {},
                    {
                      isActive: p,
                      option: m,
                      index: d,
                      dataKey: l,
                      onAnimationStart: i.handleAnimationStart,
                      onAnimationEnd: i.handleAnimationEnd,
                    },
                  );
                return E.createElement(
                  ke,
                  Rs(
                    { className: "recharts-bar-rectangle" },
                    Yu(i.props, c, d),
                    {
                      key: "rectangle-"
                        .concat(c == null ? void 0 : c.x, "-")
                        .concat(c == null ? void 0 : c.y, "-")
                        .concat(c == null ? void 0 : c.value, "-")
                        .concat(d),
                    },
                  ),
                  E.createElement(ix, y),
                );
              })
            );
          },
        },
        {
          key: "renderRectanglesWithAnimation",
          value: function () {
            var n = this,
              i = this.props,
              a = i.data,
              o = i.layout,
              l = i.isAnimationActive,
              u = i.animationBegin,
              s = i.animationDuration,
              f = i.animationEasing,
              c = i.animationId,
              d = this.state.prevData;
            return E.createElement(
              Lr,
              {
                begin: u,
                duration: s,
                isActive: l,
                easing: f,
                from: { t: 0 },
                to: { t: 1 },
                key: "bar-".concat(c),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (p) {
                var m = p.t,
                  y = a.map(function (x, v) {
                    var h = d && d[v];
                    if (h) {
                      var g = tr(h.x, x.x),
                        S = tr(h.y, x.y),
                        b = tr(h.width, x.width),
                        w = tr(h.height, x.height);
                      return Me(
                        Me({}, x),
                        {},
                        { x: g(m), y: S(m), width: b(m), height: w(m) },
                      );
                    }
                    if (o === "horizontal") {
                      var P = tr(0, x.height),
                        _ = P(m);
                      return Me(
                        Me({}, x),
                        {},
                        { y: x.y + x.height - _, height: _ },
                      );
                    }
                    var A = tr(0, x.width),
                      $ = A(m);
                    return Me(Me({}, x), {}, { width: $ });
                  });
                return E.createElement(
                  ke,
                  null,
                  n.renderRectanglesStatically(y),
                );
              },
            );
          },
        },
        {
          key: "renderRectangles",
          value: function () {
            var n = this.props,
              i = n.data,
              a = n.isAnimationActive,
              o = this.state.prevData;
            return a && i && i.length && (!o || !Uc(o, i))
              ? this.renderRectanglesWithAnimation()
              : this.renderRectanglesStatically(i);
          },
        },
        {
          key: "renderBackground",
          value: function () {
            var n = this,
              i = this.props,
              a = i.data,
              o = i.dataKey,
              l = i.activeIndex,
              u = re(this.props.background, !1);
            return a.map(function (s, f) {
              s.value;
              var c = s.background,
                d = H7(s, W7);
              if (!c) return null;
              var p = Me(
                Me(
                  Me(Me(Me({}, d), {}, { fill: "#eee" }, c), u),
                  Yu(n.props, s, f),
                ),
                {},
                {
                  onAnimationStart: n.handleAnimationStart,
                  onAnimationEnd: n.handleAnimationEnd,
                  dataKey: o,
                  index: f,
                  className: "recharts-bar-background-rectangle",
                },
              );
              return E.createElement(
                ix,
                Rs(
                  {
                    key: "background-bar-".concat(f),
                    option: n.props.background,
                    isActive: f === l,
                  },
                  p,
                ),
              );
            });
          },
        },
        {
          key: "renderErrorBar",
          value: function (n, i) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished)
              return null;
            var a = this.props,
              o = a.data,
              l = a.xAxis,
              u = a.yAxis,
              s = a.layout,
              f = a.children,
              c = zt(f, El);
            if (!c) return null;
            var d = s === "vertical" ? o[0].height / 2 : o[0].width / 2,
              p = function (x, v) {
                var h = Array.isArray(x.value) ? x.value[1] : x.value;
                return { x: x.x, y: x.y, value: h, errorVal: jt(x, v) };
              },
              m = { clipPath: n ? "url(#clipPath-".concat(i, ")") : null };
            return E.createElement(
              ke,
              m,
              c.map(function (y) {
                return E.cloneElement(y, {
                  key: "error-bar-".concat(i, "-").concat(y.props.dataKey),
                  data: o,
                  xAxis: l,
                  yAxis: u,
                  layout: s,
                  offset: d,
                  dataPointFormatter: p,
                });
              }),
            );
          },
        },
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.hide,
              a = n.data,
              o = n.className,
              l = n.xAxis,
              u = n.yAxis,
              s = n.left,
              f = n.top,
              c = n.width,
              d = n.height,
              p = n.isAnimationActive,
              m = n.background,
              y = n.id;
            if (i || !a || !a.length) return null;
            var x = this.state.isAnimationFinished,
              v = oe("recharts-bar", o),
              h = l && l.allowDataOverflow,
              g = u && u.allowDataOverflow,
              S = h || g,
              b = ee(y) ? this.id : y;
            return E.createElement(
              ke,
              { className: v },
              h || g
                ? E.createElement(
                    "defs",
                    null,
                    E.createElement(
                      "clipPath",
                      { id: "clipPath-".concat(b) },
                      E.createElement("rect", {
                        x: h ? s : s - c / 2,
                        y: g ? f : f - d / 2,
                        width: h ? c : c * 2,
                        height: g ? d : d * 2,
                      }),
                    ),
                  )
                : null,
              E.createElement(
                ke,
                {
                  className: "recharts-bar-rectangles",
                  clipPath: S ? "url(#clipPath-".concat(b, ")") : null,
                },
                m ? this.renderBackground() : null,
                this.renderRectangles(),
              ),
              this.renderErrorBar(S, b),
              (!p || x) && cn.renderCallByParent(this.props, a),
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (n, i) {
            return n.animationId !== i.prevAnimationId
              ? {
                  prevAnimationId: n.animationId,
                  curData: n.data,
                  prevData: i.curData,
                }
              : n.data !== i.curData
                ? { curData: n.data }
                : null;
          },
        },
      ],
    )
  );
})(B.PureComponent);
UP = jl;
Jr(jl, "displayName", "Bar");
Jr(jl, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !Sa.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease",
});
Jr(jl, "getComposedData", function (e) {
  var t = e.props,
    r = e.item,
    n = e.barPosition,
    i = e.bandSize,
    a = e.xAxis,
    o = e.yAxis,
    l = e.xAxisTicks,
    u = e.yAxisTicks,
    s = e.stackedData,
    f = e.dataStartIndex,
    c = e.displayedData,
    d = e.offset,
    p = P6(n, r);
  if (!p) return null;
  var m = t.layout,
    y = r.type.defaultProps,
    x = y !== void 0 ? Me(Me({}, y), r.props) : r.props,
    v = x.dataKey,
    h = x.children,
    g = x.minPointSize,
    S = m === "horizontal" ? o : a,
    b = s ? S.scale.domain() : null,
    w = k6({ numericAxis: S }),
    P = zt(h, yO),
    _ = c.map(function (A, $) {
      var C, j, D, N, M, L;
      s
        ? (C = _6(s[f + $], b))
        : ((C = jt(A, v)), Array.isArray(C) || (C = [w, C]));
      var F = U7(g, UP.defaultProps.minPointSize)(C[1], $);
      if (m === "horizontal") {
        var T,
          I = [o.scale(C[0]), o.scale(C[1])],
          R = I[0],
          V = I[1];
        ((j = ab({
          axis: a,
          ticks: l,
          bandSize: i,
          offset: p.offset,
          entry: A,
          index: $,
        })),
          (D = (T = V ?? R) !== null && T !== void 0 ? T : void 0),
          (N = p.size));
        var W = R - V;
        if (
          ((M = Number.isNaN(W) ? 0 : W),
          (L = { x: j, y: o.y, width: N, height: o.height }),
          Math.abs(F) > 0 && Math.abs(M) < Math.abs(F))
        ) {
          var X = nr(M || F) * (Math.abs(F) - Math.abs(M));
          ((D -= X), (M += X));
        }
      } else {
        var ne = [a.scale(C[0]), a.scale(C[1])],
          xe = ne[0],
          Te = ne[1];
        if (
          ((j = xe),
          (D = ab({
            axis: o,
            ticks: u,
            bandSize: i,
            offset: p.offset,
            entry: A,
            index: $,
          })),
          (N = Te - xe),
          (M = p.size),
          (L = { x: a.x, y: D, width: a.width, height: M }),
          Math.abs(F) > 0 && Math.abs(N) < Math.abs(F))
        ) {
          var Ct = nr(N || F) * (Math.abs(F) - Math.abs(N));
          N += Ct;
        }
      }
      return Me(
        Me(
          Me({}, A),
          {},
          {
            x: j,
            y: D,
            width: N,
            height: M,
            value: s ? C : C[1],
            payload: A,
            background: L,
          },
          P && P[$] && P[$].props,
        ),
        {},
        {
          tooltipPayload: [SP(r, A)],
          tooltipPosition: { x: j + N / 2, y: D + M / 2 },
        },
      );
    });
  return Me({ data: _, layout: m }, d);
});
function ul(e) {
  "@babel/helpers - typeof";
  return (
    (ul =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ul(e)
  );
}
function J7(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function lx(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, VP(n.key), n));
  }
}
function eV(e, t, r) {
  return (
    t && lx(e.prototype, t),
    r && lx(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function ux(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Zt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ux(Object(r), !0).forEach(function (n) {
          Gc(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ux(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Gc(e, t, r) {
  return (
    (t = VP(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function VP(e) {
  var t = tV(e, "string");
  return ul(t) == "symbol" ? t : t + "";
}
function tV(e, t) {
  if (ul(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ul(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var rV = function (t, r, n, i, a) {
    var o = t.width,
      l = t.height,
      u = t.layout,
      s = t.children,
      f = Object.keys(r),
      c = {
        left: n.left,
        leftMirror: n.left,
        right: o - n.right,
        rightMirror: o - n.right,
        top: n.top,
        topMirror: n.top,
        bottom: l - n.bottom,
        bottomMirror: l - n.bottom,
      },
      d = !!Ot(s, jl);
    return f.reduce(function (p, m) {
      var y = r[m],
        x = y.orientation,
        v = y.domain,
        h = y.padding,
        g = h === void 0 ? {} : h,
        S = y.mirror,
        b = y.reversed,
        w = "".concat(x).concat(S ? "Mirror" : ""),
        P,
        _,
        A,
        $,
        C;
      if (
        y.type === "number" &&
        (y.padding === "gap" || y.padding === "no-gap")
      ) {
        var j = v[1] - v[0],
          D = 1 / 0,
          N = y.categoricalDomain.sort(ik);
        if (
          (N.forEach(function (ne, xe) {
            xe > 0 && (D = Math.min((ne || 0) - (N[xe - 1] || 0), D));
          }),
          Number.isFinite(D))
        ) {
          var M = D / j,
            L = y.layout === "vertical" ? n.height : n.width;
          if (
            (y.padding === "gap" && (P = (M * L) / 2), y.padding === "no-gap")
          ) {
            var F = Gn(t.barCategoryGap, M * L),
              T = (M * L) / 2;
            P = T - F - ((T - F) / L) * F;
          }
        }
      }
      (i === "xAxis"
        ? (_ = [
            n.left + (g.left || 0) + (P || 0),
            n.left + n.width - (g.right || 0) - (P || 0),
          ])
        : i === "yAxis"
          ? (_ =
              u === "horizontal"
                ? [n.top + n.height - (g.bottom || 0), n.top + (g.top || 0)]
                : [
                    n.top + (g.top || 0) + (P || 0),
                    n.top + n.height - (g.bottom || 0) - (P || 0),
                  ])
          : (_ = y.range),
        b && (_ = [_[1], _[0]]));
      var I = S6(y, a, d),
        R = I.scale,
        V = I.realScaleType;
      (R.domain(v).range(_), O6(R));
      var W = C6(R, Zt(Zt({}, y), {}, { realScaleType: V }));
      i === "xAxis"
        ? ((C = (x === "top" && !S) || (x === "bottom" && S)),
          (A = n.left),
          ($ = c[w] - C * y.height))
        : i === "yAxis" &&
          ((C = (x === "left" && !S) || (x === "right" && S)),
          (A = c[w] - C * y.width),
          ($ = n.top));
      var X = Zt(
        Zt(Zt({}, y), W),
        {},
        {
          realScaleType: V,
          x: A,
          y: $,
          scale: R,
          width: i === "xAxis" ? n.width : y.width,
          height: i === "yAxis" ? n.height : y.height,
        },
      );
      return (
        (X.bandSize = _s(X, W)),
        !y.hide && i === "xAxis"
          ? (c[w] += (C ? -1 : 1) * X.height)
          : y.hide || (c[w] += (C ? -1 : 1) * X.width),
        Zt(Zt({}, p), {}, Gc({}, m, X))
      );
    }, {});
  },
  KP = function (t, r) {
    var n = t.x,
      i = t.y,
      a = r.x,
      o = r.y;
    return {
      x: Math.min(n, a),
      y: Math.min(i, o),
      width: Math.abs(a - n),
      height: Math.abs(o - i),
    };
  },
  nV = function (t) {
    var r = t.x1,
      n = t.y1,
      i = t.x2,
      a = t.y2;
    return KP({ x: r, y: n }, { x: i, y: a });
  },
  GP = (function () {
    function e(t) {
      (J7(this, e), (this.scale = t));
    }
    return eV(
      e,
      [
        {
          key: "domain",
          get: function () {
            return this.scale.domain;
          },
        },
        {
          key: "range",
          get: function () {
            return this.scale.range;
          },
        },
        {
          key: "rangeMin",
          get: function () {
            return this.range()[0];
          },
        },
        {
          key: "rangeMax",
          get: function () {
            return this.range()[1];
          },
        },
        {
          key: "bandwidth",
          get: function () {
            return this.scale.bandwidth;
          },
        },
        {
          key: "apply",
          value: function (r) {
            var n =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {},
              i = n.bandAware,
              a = n.position;
            if (r !== void 0) {
              if (a)
                switch (a) {
                  case "start":
                    return this.scale(r);
                  case "middle": {
                    var o = this.bandwidth ? this.bandwidth() / 2 : 0;
                    return this.scale(r) + o;
                  }
                  case "end": {
                    var l = this.bandwidth ? this.bandwidth() : 0;
                    return this.scale(r) + l;
                  }
                  default:
                    return this.scale(r);
                }
              if (i) {
                var u = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(r) + u;
              }
              return this.scale(r);
            }
          },
        },
        {
          key: "isInRange",
          value: function (r) {
            var n = this.range(),
              i = n[0],
              a = n[n.length - 1];
            return i <= a ? r >= i && r <= a : r >= a && r <= i;
          },
        },
      ],
      [
        {
          key: "create",
          value: function (r) {
            return new e(r);
          },
        },
      ],
    );
  })();
Gc(GP, "EPS", 1e-4);
var ym = function (t) {
  var r = Object.keys(t).reduce(function (n, i) {
    return Zt(Zt({}, n), {}, Gc({}, i, GP.create(t[i])));
  }, {});
  return Zt(
    Zt({}, r),
    {},
    {
      apply: function (i) {
        var a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          o = a.bandAware,
          l = a.position;
        return S7(i, function (u, s) {
          return r[s].apply(u, { bandAware: o, position: l });
        });
      },
      isInRange: function (i) {
        return zP(i, function (a, o) {
          return r[o].isInRange(a);
        });
      },
    },
  );
};
function iV(e) {
  return ((e % 180) + 180) % 180;
}
var aV = function (t) {
    var r = t.width,
      n = t.height,
      i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      a = iV(i),
      o = (a * Math.PI) / 180,
      l = Math.atan(n / r),
      u = o > l && o < Math.PI - l ? n / Math.sin(o) : r / Math.cos(o);
    return Math.abs(u);
  },
  oV = gn,
  lV = Sl,
  uV = Cc;
function sV(e) {
  return function (t, r, n) {
    var i = Object(t);
    if (!lV(t)) {
      var a = oV(r);
      ((t = uV(t)),
        (r = function (l) {
          return a(i[l], l, i);
        }));
    }
    var o = e(t, r, n);
    return o > -1 ? i[a ? t[o] : o] : void 0;
  };
}
var cV = sV,
  fV = LP;
function dV(e) {
  var t = fV(e),
    r = t % 1;
  return t === t ? (r ? t - r : t) : 0;
}
var pV = dV,
  hV = tO,
  vV = gn,
  mV = pV,
  yV = Math.max;
function gV(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n) return -1;
  var i = r == null ? 0 : mV(r);
  return (i < 0 && (i = yV(n + i, 0)), hV(e, vV(t), i));
}
var bV = gV,
  xV = cV,
  wV = bV,
  SV = xV(wV),
  OV = SV;
const PV = pe(OV);
var _V = lC(
    function (e) {
      return { x: e.left, y: e.top, width: e.width, height: e.height };
    },
    function (e) {
      return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
    },
  ),
  gm = B.createContext(void 0),
  bm = B.createContext(void 0),
  qP = B.createContext(void 0),
  XP = B.createContext({}),
  YP = B.createContext(void 0),
  QP = B.createContext(0),
  ZP = B.createContext(0),
  sx = function (t) {
    var r = t.state,
      n = r.xAxisMap,
      i = r.yAxisMap,
      a = r.offset,
      o = t.clipPathId,
      l = t.children,
      u = t.width,
      s = t.height,
      f = _V(a);
    return E.createElement(
      gm.Provider,
      { value: n },
      E.createElement(
        bm.Provider,
        { value: i },
        E.createElement(
          XP.Provider,
          { value: a },
          E.createElement(
            qP.Provider,
            { value: f },
            E.createElement(
              YP.Provider,
              { value: o },
              E.createElement(
                QP.Provider,
                { value: s },
                E.createElement(ZP.Provider, { value: u }, l),
              ),
            ),
          ),
        ),
      ),
    );
  },
  AV = function () {
    return B.useContext(YP);
  },
  JP = function (t) {
    var r = B.useContext(gm);
    r == null && Xn();
    var n = r[t];
    return (n == null && Xn(), n);
  },
  EV = function () {
    var t = B.useContext(gm);
    return Yr(t);
  },
  jV = function () {
    var t = B.useContext(bm),
      r = PV(t, function (n) {
        return zP(n.domain, Number.isFinite);
      });
    return r || Yr(t);
  },
  e_ = function (t) {
    var r = B.useContext(bm);
    r == null && Xn();
    var n = r[t];
    return (n == null && Xn(), n);
  },
  $V = function () {
    var t = B.useContext(qP);
    return t;
  },
  TV = function () {
    return B.useContext(XP);
  },
  xm = function () {
    return B.useContext(ZP);
  },
  wm = function () {
    return B.useContext(QP);
  };
function ta(e) {
  "@babel/helpers - typeof";
  return (
    (ta =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ta(e)
  );
}
function CV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function kV(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, r_(n.key), n));
  }
}
function MV(e, t, r) {
  return (
    t && kV(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function NV(e, t, r) {
  return (
    (t = Bs(t)),
    IV(
      e,
      t_() ? Reflect.construct(t, r || [], Bs(e).constructor) : t.apply(e, r),
    )
  );
}
function IV(e, t) {
  if (t && (ta(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return DV(e);
}
function DV(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function t_() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (t_ = function () {
    return !!e;
  })();
}
function Bs(e) {
  return (
    (Bs = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Bs(e)
  );
}
function LV(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && oh(e, t));
}
function oh(e, t) {
  return (
    (oh = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    oh(e, t)
  );
}
function cx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function fx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? cx(Object(r), !0).forEach(function (n) {
          Sm(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : cx(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Sm(e, t, r) {
  return (
    (t = r_(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function r_(e) {
  var t = RV(e, "string");
  return ta(t) == "symbol" ? t : t + "";
}
function RV(e, t) {
  if (ta(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ta(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function FV(e, t) {
  return WV(e) || UV(e, t) || zV(e, t) || BV();
}
function BV() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zV(e, t) {
  if (e) {
    if (typeof e == "string") return dx(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return dx(e, t);
  }
}
function dx(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function UV(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      l = [],
      u = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(u = (n = a.call(r)).done) && (l.push(n.value), l.length !== t);
          u = !0
        );
    } catch (f) {
      ((s = !0), (i = f));
    } finally {
      try {
        if (!u && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return l;
  }
}
function WV(e) {
  if (Array.isArray(e)) return e;
}
function lh() {
  return (
    (lh = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    lh.apply(this, arguments)
  );
}
var HV = function (t, r) {
    var n;
    return (
      E.isValidElement(t)
        ? (n = E.cloneElement(t, r))
        : J(t)
          ? (n = t(r))
          : (n = E.createElement(
              "line",
              lh({}, r, { className: "recharts-reference-line-line" }),
            )),
      n
    );
  },
  VV = function (t, r, n, i, a, o, l, u, s) {
    var f = a.x,
      c = a.y,
      d = a.width,
      p = a.height;
    if (n) {
      var m = s.y,
        y = t.y.apply(m, { position: o });
      if (vr(s, "discard") && !t.y.isInRange(y)) return null;
      var x = [
        { x: f + d, y },
        { x: f, y },
      ];
      return u === "left" ? x.reverse() : x;
    }
    if (r) {
      var v = s.x,
        h = t.x.apply(v, { position: o });
      if (vr(s, "discard") && !t.x.isInRange(h)) return null;
      var g = [
        { x: h, y: c + p },
        { x: h, y: c },
      ];
      return l === "top" ? g.reverse() : g;
    }
    if (i) {
      var S = s.segment,
        b = S.map(function (w) {
          return t.apply(w, { position: o });
        });
      return vr(s, "discard") &&
        h7(b, function (w) {
          return !t.isInRange(w);
        })
        ? null
        : b;
    }
    return null;
  };
function KV(e) {
  var t = e.x,
    r = e.y,
    n = e.segment,
    i = e.xAxisId,
    a = e.yAxisId,
    o = e.shape,
    l = e.className,
    u = e.alwaysShow,
    s = AV(),
    f = JP(i),
    c = e_(a),
    d = $V();
  if (!s || !d) return null;
  jr(
    u === void 0,
    'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
  );
  var p = ym({ x: f.scale, y: c.scale }),
    m = Ue(t),
    y = Ue(r),
    x = n && n.length === 2,
    v = VV(p, m, y, x, d, e.position, f.orientation, c.orientation, e);
  if (!v) return null;
  var h = FV(v, 2),
    g = h[0],
    S = g.x,
    b = g.y,
    w = h[1],
    P = w.x,
    _ = w.y,
    A = vr(e, "hidden") ? "url(#".concat(s, ")") : void 0,
    $ = fx(fx({ clipPath: A }, re(e, !0)), {}, { x1: S, y1: b, x2: P, y2: _ });
  return E.createElement(
    ke,
    { className: oe("recharts-reference-line", l) },
    HV(o, $),
    nt.renderCallByParent(e, nV({ x1: S, y1: b, x2: P, y2: _ })),
  );
}
var Om = (function (e) {
  function t() {
    return (CV(this, t), NV(this, t, arguments));
  }
  return (
    LV(t, e),
    MV(t, [
      {
        key: "render",
        value: function () {
          return E.createElement(KV, this.props);
        },
      },
    ])
  );
})(E.Component);
Sm(Om, "displayName", "ReferenceLine");
Sm(Om, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle",
});
function uh() {
  return (
    (uh = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    uh.apply(this, arguments)
  );
}
function ra(e) {
  "@babel/helpers - typeof";
  return (
    (ra =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ra(e)
  );
}
function px(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function hx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? px(Object(r), !0).forEach(function (n) {
          qc(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : px(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function GV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function qV(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, i_(n.key), n));
  }
}
function XV(e, t, r) {
  return (
    t && qV(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function YV(e, t, r) {
  return (
    (t = zs(t)),
    QV(
      e,
      n_() ? Reflect.construct(t, r || [], zs(e).constructor) : t.apply(e, r),
    )
  );
}
function QV(e, t) {
  if (t && (ra(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return ZV(e);
}
function ZV(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function n_() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (n_ = function () {
    return !!e;
  })();
}
function zs(e) {
  return (
    (zs = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    zs(e)
  );
}
function JV(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && sh(e, t));
}
function sh(e, t) {
  return (
    (sh = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    sh(e, t)
  );
}
function qc(e, t, r) {
  return (
    (t = i_(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function i_(e) {
  var t = eK(e, "string");
  return ra(t) == "symbol" ? t : t + "";
}
function eK(e, t) {
  if (ra(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ra(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var tK = function (t) {
    var r = t.x,
      n = t.y,
      i = t.xAxis,
      a = t.yAxis,
      o = ym({ x: i.scale, y: a.scale }),
      l = o.apply({ x: r, y: n }, { bandAware: !0 });
    return vr(t, "discard") && !o.isInRange(l) ? null : l;
  },
  Xc = (function (e) {
    function t() {
      return (GV(this, t), YV(this, t, arguments));
    }
    return (
      JV(t, e),
      XV(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.x,
              a = n.y,
              o = n.r,
              l = n.alwaysShow,
              u = n.clipPathId,
              s = Ue(i),
              f = Ue(a);
            if (
              (jr(
                l === void 0,
                'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
              ),
              !s || !f)
            )
              return null;
            var c = tK(this.props);
            if (!c) return null;
            var d = c.x,
              p = c.y,
              m = this.props,
              y = m.shape,
              x = m.className,
              v = vr(this.props, "hidden") ? "url(#".concat(u, ")") : void 0,
              h = hx(
                hx({ clipPath: v }, re(this.props, !0)),
                {},
                { cx: d, cy: p },
              );
            return E.createElement(
              ke,
              { className: oe("recharts-reference-dot", x) },
              t.renderDot(y, h),
              nt.renderCallByParent(this.props, {
                x: d - o,
                y: p - o,
                width: 2 * o,
                height: 2 * o,
              }),
            );
          },
        },
      ])
    );
  })(E.Component);
qc(Xc, "displayName", "ReferenceDot");
qc(Xc, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
});
qc(Xc, "renderDot", function (e, t) {
  var r;
  return (
    E.isValidElement(e)
      ? (r = E.cloneElement(e, t))
      : J(e)
        ? (r = e(t))
        : (r = E.createElement(
            mm,
            uh({}, t, {
              cx: t.cx,
              cy: t.cy,
              className: "recharts-reference-dot-dot",
            }),
          )),
    r
  );
});
function ch() {
  return (
    (ch = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ch.apply(this, arguments)
  );
}
function na(e) {
  "@babel/helpers - typeof";
  return (
    (na =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    na(e)
  );
}
function vx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function mx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vx(Object(r), !0).forEach(function (n) {
          Yc(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : vx(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function rK(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function nK(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, o_(n.key), n));
  }
}
function iK(e, t, r) {
  return (
    t && nK(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function aK(e, t, r) {
  return (
    (t = Us(t)),
    oK(
      e,
      a_() ? Reflect.construct(t, r || [], Us(e).constructor) : t.apply(e, r),
    )
  );
}
function oK(e, t) {
  if (t && (na(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return lK(e);
}
function lK(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function a_() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (a_ = function () {
    return !!e;
  })();
}
function Us(e) {
  return (
    (Us = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Us(e)
  );
}
function uK(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && fh(e, t));
}
function fh(e, t) {
  return (
    (fh = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    fh(e, t)
  );
}
function Yc(e, t, r) {
  return (
    (t = o_(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function o_(e) {
  var t = sK(e, "string");
  return na(t) == "symbol" ? t : t + "";
}
function sK(e, t) {
  if (na(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (na(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var cK = function (t, r, n, i, a) {
    var o = a.x1,
      l = a.x2,
      u = a.y1,
      s = a.y2,
      f = a.xAxis,
      c = a.yAxis;
    if (!f || !c) return null;
    var d = ym({ x: f.scale, y: c.scale }),
      p = {
        x: t ? d.x.apply(o, { position: "start" }) : d.x.rangeMin,
        y: n ? d.y.apply(u, { position: "start" }) : d.y.rangeMin,
      },
      m = {
        x: r ? d.x.apply(l, { position: "end" }) : d.x.rangeMax,
        y: i ? d.y.apply(s, { position: "end" }) : d.y.rangeMax,
      };
    return vr(a, "discard") && (!d.isInRange(p) || !d.isInRange(m))
      ? null
      : KP(p, m);
  },
  $l = (function (e) {
    function t() {
      return (rK(this, t), aK(this, t, arguments));
    }
    return (
      uK(t, e),
      iK(t, [
        {
          key: "render",
          value: function () {
            var n = this.props,
              i = n.x1,
              a = n.x2,
              o = n.y1,
              l = n.y2,
              u = n.className,
              s = n.alwaysShow,
              f = n.clipPathId;
            jr(
              s === void 0,
              'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
            );
            var c = Ue(i),
              d = Ue(a),
              p = Ue(o),
              m = Ue(l),
              y = this.props.shape;
            if (!c && !d && !p && !m && !y) return null;
            var x = cK(c, d, p, m, this.props);
            if (!x && !y) return null;
            var v = vr(this.props, "hidden") ? "url(#".concat(f, ")") : void 0;
            return E.createElement(
              ke,
              { className: oe("recharts-reference-area", u) },
              t.renderRect(y, mx(mx({ clipPath: v }, re(this.props, !0)), x)),
              nt.renderCallByParent(this.props, x),
            );
          },
        },
      ])
    );
  })(E.Component);
Yc($l, "displayName", "ReferenceArea");
Yc($l, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1,
});
Yc($l, "renderRect", function (e, t) {
  var r;
  return (
    E.isValidElement(e)
      ? (r = E.cloneElement(e, t))
      : J(e)
        ? (r = e(t))
        : (r = E.createElement(
            vm,
            ch({}, t, { className: "recharts-reference-area-rect" }),
          )),
    r
  );
});
function l_(e, t, r) {
  if (t < 1) return [];
  if (t === 1 && r === void 0) return e;
  for (var n = [], i = 0; i < e.length; i += t) n.push(e[i]);
  return n;
}
function fK(e, t, r) {
  var n = { width: e.width + t.width, height: e.height + t.height };
  return aV(n, r);
}
function dK(e, t, r) {
  var n = r === "width",
    i = e.x,
    a = e.y,
    o = e.width,
    l = e.height;
  return t === 1
    ? { start: n ? i : a, end: n ? i + o : a + l }
    : { start: n ? i + o : a + l, end: n ? i : a };
}
function Ws(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i) return !1;
  var a = r();
  return e * (t - (e * a) / 2 - n) >= 0 && e * (t + (e * a) / 2 - i) <= 0;
}
function pK(e, t) {
  return l_(e, t + 1);
}
function hK(e, t, r, n, i) {
  for (
    var a = (n || []).slice(),
      o = t.start,
      l = t.end,
      u = 0,
      s = 1,
      f = o,
      c = function () {
        var m = n == null ? void 0 : n[u];
        if (m === void 0) return { v: l_(n, s) };
        var y = u,
          x,
          v = function () {
            return (x === void 0 && (x = r(m, y)), x);
          },
          h = m.coordinate,
          g = u === 0 || Ws(e, h, v, f, l);
        (g || ((u = 0), (f = o), (s += 1)),
          g && ((f = h + e * (v() / 2 + i)), (u += s)));
      },
      d;
    s <= a.length;

  )
    if (((d = c()), d)) return d.v;
  return [];
}
function sl(e) {
  "@babel/helpers - typeof";
  return (
    (sl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    sl(e)
  );
}
function yx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function tt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? yx(Object(r), !0).forEach(function (n) {
          vK(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : yx(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function vK(e, t, r) {
  return (
    (t = mK(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function mK(e) {
  var t = yK(e, "string");
  return sl(t) == "symbol" ? t : t + "";
}
function yK(e, t) {
  if (sl(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (sl(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function gK(e, t, r, n, i) {
  for (
    var a = (n || []).slice(),
      o = a.length,
      l = t.start,
      u = t.end,
      s = function (d) {
        var p = a[d],
          m,
          y = function () {
            return (m === void 0 && (m = r(p, d)), m);
          };
        if (d === o - 1) {
          var x = e * (p.coordinate + (e * y()) / 2 - u);
          a[d] = p = tt(
            tt({}, p),
            {},
            { tickCoord: x > 0 ? p.coordinate - x * e : p.coordinate },
          );
        } else a[d] = p = tt(tt({}, p), {}, { tickCoord: p.coordinate });
        var v = Ws(e, p.tickCoord, y, l, u);
        v &&
          ((u = p.tickCoord - e * (y() / 2 + i)),
          (a[d] = tt(tt({}, p), {}, { isShow: !0 })));
      },
      f = o - 1;
    f >= 0;
    f--
  )
    s(f);
  return a;
}
function bK(e, t, r, n, i, a) {
  var o = (n || []).slice(),
    l = o.length,
    u = t.start,
    s = t.end;
  if (a) {
    var f = n[l - 1],
      c = r(f, l - 1),
      d = e * (f.coordinate + (e * c) / 2 - s);
    o[l - 1] = f = tt(
      tt({}, f),
      {},
      { tickCoord: d > 0 ? f.coordinate - d * e : f.coordinate },
    );
    var p = Ws(
      e,
      f.tickCoord,
      function () {
        return c;
      },
      u,
      s,
    );
    p &&
      ((s = f.tickCoord - e * (c / 2 + i)),
      (o[l - 1] = tt(tt({}, f), {}, { isShow: !0 })));
  }
  for (
    var m = a ? l - 1 : l,
      y = function (h) {
        var g = o[h],
          S,
          b = function () {
            return (S === void 0 && (S = r(g, h)), S);
          };
        if (h === 0) {
          var w = e * (g.coordinate - (e * b()) / 2 - u);
          o[h] = g = tt(
            tt({}, g),
            {},
            { tickCoord: w < 0 ? g.coordinate - w * e : g.coordinate },
          );
        } else o[h] = g = tt(tt({}, g), {}, { tickCoord: g.coordinate });
        var P = Ws(e, g.tickCoord, b, u, s);
        P &&
          ((u = g.tickCoord + e * (b() / 2 + i)),
          (o[h] = tt(tt({}, g), {}, { isShow: !0 })));
      },
      x = 0;
    x < m;
    x++
  )
    y(x);
  return o;
}
function Pm(e, t, r) {
  var n = e.tick,
    i = e.ticks,
    a = e.viewBox,
    o = e.minTickGap,
    l = e.orientation,
    u = e.interval,
    s = e.tickFormatter,
    f = e.unit,
    c = e.angle;
  if (!i || !i.length || !n) return [];
  if (H(u) || Sa.isSsr) return pK(i, typeof u == "number" && H(u) ? u : 0);
  var d = [],
    p = l === "top" || l === "bottom" ? "width" : "height",
    m =
      f && p === "width"
        ? uo(f, { fontSize: t, letterSpacing: r })
        : { width: 0, height: 0 },
    y = function (g, S) {
      var b = J(s) ? s(g.value, S) : g.value;
      return p === "width"
        ? fK(uo(b, { fontSize: t, letterSpacing: r }), m, c)
        : uo(b, { fontSize: t, letterSpacing: r })[p];
    },
    x = i.length >= 2 ? nr(i[1].coordinate - i[0].coordinate) : 1,
    v = dK(a, x, p);
  return u === "equidistantPreserveStart"
    ? hK(x, v, y, i, o)
    : (u === "preserveStart" || u === "preserveStartEnd"
        ? (d = bK(x, v, y, i, o, u === "preserveStartEnd"))
        : (d = gK(x, v, y, i, o)),
      d.filter(function (h) {
        return h.isShow;
      }));
}
var xK = ["viewBox"],
  wK = ["viewBox"],
  SK = ["ticks"];
function ia(e) {
  "@babel/helpers - typeof";
  return (
    (ia =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ia(e)
  );
}
function Oi() {
  return (
    (Oi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Oi.apply(this, arguments)
  );
}
function gx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function Re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gx(Object(r), !0).forEach(function (n) {
          _m(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : gx(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function ed(e, t) {
  if (e == null) return {};
  var r = OK(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function OK(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function PK(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bx(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, s_(n.key), n));
  }
}
function _K(e, t, r) {
  return (
    t && bx(e.prototype, t),
    r && bx(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function AK(e, t, r) {
  return (
    (t = Hs(t)),
    EK(
      e,
      u_() ? Reflect.construct(t, r || [], Hs(e).constructor) : t.apply(e, r),
    )
  );
}
function EK(e, t) {
  if (t && (ia(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return jK(e);
}
function jK(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function u_() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (u_ = function () {
    return !!e;
  })();
}
function Hs(e) {
  return (
    (Hs = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Hs(e)
  );
}
function $K(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && dh(e, t));
}
function dh(e, t) {
  return (
    (dh = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    dh(e, t)
  );
}
function _m(e, t, r) {
  return (
    (t = s_(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function s_(e) {
  var t = TK(e, "string");
  return ia(t) == "symbol" ? t : t + "";
}
function TK(e, t) {
  if (ia(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ia(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Aa = (function (e) {
  function t(r) {
    var n;
    return (
      PK(this, t),
      (n = AK(this, t, [r])),
      (n.state = { fontSize: "", letterSpacing: "" }),
      n
    );
  }
  return (
    $K(t, e),
    _K(
      t,
      [
        {
          key: "shouldComponentUpdate",
          value: function (n, i) {
            var a = n.viewBox,
              o = ed(n, xK),
              l = this.props,
              u = l.viewBox,
              s = ed(l, wK);
            return !Ci(a, u) || !Ci(o, s) || !Ci(i, this.state);
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            var n = this.layerReference;
            if (n) {
              var i = n.getElementsByClassName(
                "recharts-cartesian-axis-tick-value",
              )[0];
              i &&
                this.setState({
                  fontSize: window.getComputedStyle(i).fontSize,
                  letterSpacing: window.getComputedStyle(i).letterSpacing,
                });
            }
          },
        },
        {
          key: "getTickLineCoord",
          value: function (n) {
            var i = this.props,
              a = i.x,
              o = i.y,
              l = i.width,
              u = i.height,
              s = i.orientation,
              f = i.tickSize,
              c = i.mirror,
              d = i.tickMargin,
              p,
              m,
              y,
              x,
              v,
              h,
              g = c ? -1 : 1,
              S = n.tickSize || f,
              b = H(n.tickCoord) ? n.tickCoord : n.coordinate;
            switch (s) {
              case "top":
                ((p = m = n.coordinate),
                  (x = o + +!c * u),
                  (y = x - g * S),
                  (h = y - g * d),
                  (v = b));
                break;
              case "left":
                ((y = x = n.coordinate),
                  (m = a + +!c * l),
                  (p = m - g * S),
                  (v = p - g * d),
                  (h = b));
                break;
              case "right":
                ((y = x = n.coordinate),
                  (m = a + +c * l),
                  (p = m + g * S),
                  (v = p + g * d),
                  (h = b));
                break;
              default:
                ((p = m = n.coordinate),
                  (x = o + +c * u),
                  (y = x + g * S),
                  (h = y + g * d),
                  (v = b));
                break;
            }
            return {
              line: { x1: p, y1: y, x2: m, y2: x },
              tick: { x: v, y: h },
            };
          },
        },
        {
          key: "getTickTextAnchor",
          value: function () {
            var n = this.props,
              i = n.orientation,
              a = n.mirror,
              o;
            switch (i) {
              case "left":
                o = a ? "start" : "end";
                break;
              case "right":
                o = a ? "end" : "start";
                break;
              default:
                o = "middle";
                break;
            }
            return o;
          },
        },
        {
          key: "getTickVerticalAnchor",
          value: function () {
            var n = this.props,
              i = n.orientation,
              a = n.mirror,
              o = "end";
            switch (i) {
              case "left":
              case "right":
                o = "middle";
                break;
              case "top":
                o = a ? "start" : "end";
                break;
              default:
                o = a ? "end" : "start";
                break;
            }
            return o;
          },
        },
        {
          key: "renderAxisLine",
          value: function () {
            var n = this.props,
              i = n.x,
              a = n.y,
              o = n.width,
              l = n.height,
              u = n.orientation,
              s = n.mirror,
              f = n.axisLine,
              c = Re(
                Re(Re({}, re(this.props, !1)), re(f, !1)),
                {},
                { fill: "none" },
              );
            if (u === "top" || u === "bottom") {
              var d = +((u === "top" && !s) || (u === "bottom" && s));
              c = Re(
                Re({}, c),
                {},
                { x1: i, y1: a + d * l, x2: i + o, y2: a + d * l },
              );
            } else {
              var p = +((u === "left" && !s) || (u === "right" && s));
              c = Re(
                Re({}, c),
                {},
                { x1: i + p * o, y1: a, x2: i + p * o, y2: a + l },
              );
            }
            return E.createElement(
              "line",
              Oi({}, c, {
                className: oe(
                  "recharts-cartesian-axis-line",
                  Bt(f, "className"),
                ),
              }),
            );
          },
        },
        {
          key: "renderTicks",
          value: function (n, i, a) {
            var o = this,
              l = this.props,
              u = l.tickLine,
              s = l.stroke,
              f = l.tick,
              c = l.tickFormatter,
              d = l.unit,
              p = Pm(Re(Re({}, this.props), {}, { ticks: n }), i, a),
              m = this.getTickTextAnchor(),
              y = this.getTickVerticalAnchor(),
              x = re(this.props, !1),
              v = re(f, !1),
              h = Re(Re({}, x), {}, { fill: "none" }, re(u, !1)),
              g = p.map(function (S, b) {
                var w = o.getTickLineCoord(S),
                  P = w.line,
                  _ = w.tick,
                  A = Re(
                    Re(
                      Re(
                        Re({ textAnchor: m, verticalAnchor: y }, x),
                        {},
                        { stroke: "none", fill: s },
                        v,
                      ),
                      _,
                    ),
                    {},
                    {
                      index: b,
                      payload: S,
                      visibleTicksCount: p.length,
                      tickFormatter: c,
                    },
                  );
                return E.createElement(
                  ke,
                  Oi(
                    {
                      className: "recharts-cartesian-axis-tick",
                      key: "tick-"
                        .concat(S.value, "-")
                        .concat(S.coordinate, "-")
                        .concat(S.tickCoord),
                    },
                    Yu(o.props, S, b),
                  ),
                  u &&
                    E.createElement(
                      "line",
                      Oi({}, h, P, {
                        className: oe(
                          "recharts-cartesian-axis-tick-line",
                          Bt(u, "className"),
                        ),
                      }),
                    ),
                  f &&
                    t.renderTickItem(
                      f,
                      A,
                      "".concat(J(c) ? c(S.value, b) : S.value).concat(d || ""),
                    ),
                );
              });
            return E.createElement(
              "g",
              { className: "recharts-cartesian-axis-ticks" },
              g,
            );
          },
        },
        {
          key: "render",
          value: function () {
            var n = this,
              i = this.props,
              a = i.axisLine,
              o = i.width,
              l = i.height,
              u = i.ticksGenerator,
              s = i.className,
              f = i.hide;
            if (f) return null;
            var c = this.props,
              d = c.ticks,
              p = ed(c, SK),
              m = d;
            return (
              J(u) && (m = d && d.length > 0 ? u(this.props) : u(p)),
              o <= 0 || l <= 0 || !m || !m.length
                ? null
                : E.createElement(
                    ke,
                    {
                      className: oe("recharts-cartesian-axis", s),
                      ref: function (x) {
                        n.layerReference = x;
                      },
                    },
                    a && this.renderAxisLine(),
                    this.renderTicks(
                      m,
                      this.state.fontSize,
                      this.state.letterSpacing,
                    ),
                    nt.renderCallByParent(this.props),
                  )
            );
          },
        },
      ],
      [
        {
          key: "renderTickItem",
          value: function (n, i, a) {
            var o,
              l = oe(i.className, "recharts-cartesian-axis-tick-value");
            return (
              E.isValidElement(n)
                ? (o = E.cloneElement(n, Re(Re({}, i), {}, { className: l })))
                : J(n)
                  ? (o = n(Re(Re({}, i), {}, { className: l })))
                  : (o = E.createElement(
                      cs,
                      Oi({}, i, {
                        className: "recharts-cartesian-axis-tick-value",
                      }),
                      a,
                    )),
              o
            );
          },
        },
      ],
    )
  );
})(B.Component);
_m(Aa, "displayName", "CartesianAxis");
_m(Aa, "defaultProps", {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: { x: 0, y: 0, width: 0, height: 0 },
  orientation: "bottom",
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd",
});
var CK = ["x1", "y1", "x2", "y2", "key"],
  kK = ["offset"];
function Yn(e) {
  "@babel/helpers - typeof";
  return (
    (Yn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Yn(e)
  );
}
function xx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function it(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? xx(Object(r), !0).forEach(function (n) {
          MK(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : xx(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function MK(e, t, r) {
  return (
    (t = NK(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function NK(e) {
  var t = IK(e, "string");
  return Yn(t) == "symbol" ? t : t + "";
}
function IK(e, t) {
  if (Yn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Yn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Dn() {
  return (
    (Dn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Dn.apply(this, arguments)
  );
}
function wx(e, t) {
  if (e == null) return {};
  var r = DK(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function DK(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var LK = function (t) {
  var r = t.fill;
  if (!r || r === "none") return null;
  var n = t.fillOpacity,
    i = t.x,
    a = t.y,
    o = t.width,
    l = t.height,
    u = t.ry;
  return E.createElement("rect", {
    x: i,
    y: a,
    ry: u,
    width: o,
    height: l,
    stroke: "none",
    fill: r,
    fillOpacity: n,
    className: "recharts-cartesian-grid-bg",
  });
};
function c_(e, t) {
  var r;
  if (E.isValidElement(e)) r = E.cloneElement(e, t);
  else if (J(e)) r = e(t);
  else {
    var n = t.x1,
      i = t.y1,
      a = t.x2,
      o = t.y2,
      l = t.key,
      u = wx(t, CK),
      s = re(u, !1);
    s.offset;
    var f = wx(s, kK);
    r = E.createElement(
      "line",
      Dn({}, f, { x1: n, y1: i, x2: a, y2: o, fill: "none", key: l }),
    );
  }
  return r;
}
function RK(e) {
  var t = e.x,
    r = e.width,
    n = e.horizontal,
    i = n === void 0 ? !0 : n,
    a = e.horizontalPoints;
  if (!i || !a || !a.length) return null;
  var o = a.map(function (l, u) {
    var s = it(
      it({}, e),
      {},
      { x1: t, y1: l, x2: t + r, y2: l, key: "line-".concat(u), index: u },
    );
    return c_(i, s);
  });
  return E.createElement(
    "g",
    { className: "recharts-cartesian-grid-horizontal" },
    o,
  );
}
function FK(e) {
  var t = e.y,
    r = e.height,
    n = e.vertical,
    i = n === void 0 ? !0 : n,
    a = e.verticalPoints;
  if (!i || !a || !a.length) return null;
  var o = a.map(function (l, u) {
    var s = it(
      it({}, e),
      {},
      { x1: l, y1: t, x2: l, y2: t + r, key: "line-".concat(u), index: u },
    );
    return c_(i, s);
  });
  return E.createElement(
    "g",
    { className: "recharts-cartesian-grid-vertical" },
    o,
  );
}
function BK(e) {
  var t = e.horizontalFill,
    r = e.fillOpacity,
    n = e.x,
    i = e.y,
    a = e.width,
    o = e.height,
    l = e.horizontalPoints,
    u = e.horizontal,
    s = u === void 0 ? !0 : u;
  if (!s || !t || !t.length) return null;
  var f = l
    .map(function (d) {
      return Math.round(d + i - i);
    })
    .sort(function (d, p) {
      return d - p;
    });
  i !== f[0] && f.unshift(0);
  var c = f.map(function (d, p) {
    var m = !f[p + 1],
      y = m ? i + o - d : f[p + 1] - d;
    if (y <= 0) return null;
    var x = p % t.length;
    return E.createElement("rect", {
      key: "react-".concat(p),
      y: d,
      x: n,
      height: y,
      width: a,
      stroke: "none",
      fill: t[x],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg",
    });
  });
  return E.createElement(
    "g",
    { className: "recharts-cartesian-gridstripes-horizontal" },
    c,
  );
}
function zK(e) {
  var t = e.vertical,
    r = t === void 0 ? !0 : t,
    n = e.verticalFill,
    i = e.fillOpacity,
    a = e.x,
    o = e.y,
    l = e.width,
    u = e.height,
    s = e.verticalPoints;
  if (!r || !n || !n.length) return null;
  var f = s
    .map(function (d) {
      return Math.round(d + a - a);
    })
    .sort(function (d, p) {
      return d - p;
    });
  a !== f[0] && f.unshift(0);
  var c = f.map(function (d, p) {
    var m = !f[p + 1],
      y = m ? a + l - d : f[p + 1] - d;
    if (y <= 0) return null;
    var x = p % n.length;
    return E.createElement("rect", {
      key: "react-".concat(p),
      x: d,
      y: o,
      width: y,
      height: u,
      stroke: "none",
      fill: n[x],
      fillOpacity: i,
      className: "recharts-cartesian-grid-bg",
    });
  });
  return E.createElement(
    "g",
    { className: "recharts-cartesian-gridstripes-vertical" },
    c,
  );
}
var UK = function (t, r) {
    var n = t.xAxis,
      i = t.width,
      a = t.height,
      o = t.offset;
    return xP(
      Pm(
        it(
          it(it({}, Aa.defaultProps), n),
          {},
          { ticks: _r(n, !0), viewBox: { x: 0, y: 0, width: i, height: a } },
        ),
      ),
      o.left,
      o.left + o.width,
      r,
    );
  },
  WK = function (t, r) {
    var n = t.yAxis,
      i = t.width,
      a = t.height,
      o = t.offset;
    return xP(
      Pm(
        it(
          it(it({}, Aa.defaultProps), n),
          {},
          { ticks: _r(n, !0), viewBox: { x: 0, y: 0, width: i, height: a } },
        ),
      ),
      o.top,
      o.top + o.height,
      r,
    );
  },
  ui = {
    horizontal: !0,
    vertical: !0,
    stroke: "#ccc",
    fill: "none",
    verticalFill: [],
    horizontalFill: [],
  };
function Am(e) {
  var t,
    r,
    n,
    i,
    a,
    o,
    l = xm(),
    u = wm(),
    s = TV(),
    f = it(
      it({}, e),
      {},
      {
        stroke: (t = e.stroke) !== null && t !== void 0 ? t : ui.stroke,
        fill: (r = e.fill) !== null && r !== void 0 ? r : ui.fill,
        horizontal:
          (n = e.horizontal) !== null && n !== void 0 ? n : ui.horizontal,
        horizontalFill:
          (i = e.horizontalFill) !== null && i !== void 0
            ? i
            : ui.horizontalFill,
        vertical: (a = e.vertical) !== null && a !== void 0 ? a : ui.vertical,
        verticalFill:
          (o = e.verticalFill) !== null && o !== void 0 ? o : ui.verticalFill,
        x: H(e.x) ? e.x : s.left,
        y: H(e.y) ? e.y : s.top,
        width: H(e.width) ? e.width : s.width,
        height: H(e.height) ? e.height : s.height,
      },
    ),
    c = f.x,
    d = f.y,
    p = f.width,
    m = f.height,
    y = f.syncWithTicks,
    x = f.horizontalValues,
    v = f.verticalValues,
    h = EV(),
    g = jV();
  if (
    !H(p) ||
    p <= 0 ||
    !H(m) ||
    m <= 0 ||
    !H(c) ||
    c !== +c ||
    !H(d) ||
    d !== +d
  )
    return null;
  var S = f.verticalCoordinatesGenerator || UK,
    b = f.horizontalCoordinatesGenerator || WK,
    w = f.horizontalPoints,
    P = f.verticalPoints;
  if ((!w || !w.length) && J(b)) {
    var _ = x && x.length,
      A = b(
        {
          yAxis: g ? it(it({}, g), {}, { ticks: _ ? x : g.ticks }) : void 0,
          width: l,
          height: u,
          offset: s,
        },
        _ ? !0 : y,
      );
    (jr(
      Array.isArray(A),
      "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(
        Yn(A),
        "]",
      ),
    ),
      Array.isArray(A) && (w = A));
  }
  if ((!P || !P.length) && J(S)) {
    var $ = v && v.length,
      C = S(
        {
          xAxis: h ? it(it({}, h), {}, { ticks: $ ? v : h.ticks }) : void 0,
          width: l,
          height: u,
          offset: s,
        },
        $ ? !0 : y,
      );
    (jr(
      Array.isArray(C),
      "verticalCoordinatesGenerator should return Array but instead it returned [".concat(
        Yn(C),
        "]",
      ),
    ),
      Array.isArray(C) && (P = C));
  }
  return E.createElement(
    "g",
    { className: "recharts-cartesian-grid" },
    E.createElement(LK, {
      fill: f.fill,
      fillOpacity: f.fillOpacity,
      x: f.x,
      y: f.y,
      width: f.width,
      height: f.height,
      ry: f.ry,
    }),
    E.createElement(
      RK,
      Dn({}, f, { offset: s, horizontalPoints: w, xAxis: h, yAxis: g }),
    ),
    E.createElement(
      FK,
      Dn({}, f, { offset: s, verticalPoints: P, xAxis: h, yAxis: g }),
    ),
    E.createElement(BK, Dn({}, f, { horizontalPoints: w })),
    E.createElement(zK, Dn({}, f, { verticalPoints: P })),
  );
}
Am.displayName = "CartesianGrid";
var HK = ["type", "layout", "connectNulls", "ref"],
  VK = ["key"];
function aa(e) {
  "@babel/helpers - typeof";
  return (
    (aa =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    aa(e)
  );
}
function Sx(e, t) {
  if (e == null) return {};
  var r = KK(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function KK(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function po() {
  return (
    (po = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    po.apply(this, arguments)
  );
}
function Ox(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function xt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ox(Object(r), !0).forEach(function (n) {
          Jt(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ox(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function si(e) {
  return YK(e) || XK(e) || qK(e) || GK();
}
function GK() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qK(e, t) {
  if (e) {
    if (typeof e == "string") return ph(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ph(e, t);
  }
}
function XK(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function YK(e) {
  if (Array.isArray(e)) return ph(e);
}
function ph(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function QK(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Px(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, d_(n.key), n));
  }
}
function ZK(e, t, r) {
  return (
    t && Px(e.prototype, t),
    r && Px(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function JK(e, t, r) {
  return (
    (t = Vs(t)),
    eG(
      e,
      f_() ? Reflect.construct(t, r || [], Vs(e).constructor) : t.apply(e, r),
    )
  );
}
function eG(e, t) {
  if (t && (aa(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return tG(e);
}
function tG(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function f_() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (f_ = function () {
    return !!e;
  })();
}
function Vs(e) {
  return (
    (Vs = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Vs(e)
  );
}
function rG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && hh(e, t));
}
function hh(e, t) {
  return (
    (hh = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    hh(e, t)
  );
}
function Jt(e, t, r) {
  return (
    (t = d_(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function d_(e) {
  var t = nG(e, "string");
  return aa(t) == "symbol" ? t : t + "";
}
function nG(e, t) {
  if (aa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (aa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Ea = (function (e) {
  function t() {
    var r;
    QK(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return (
      (r = JK(this, t, [].concat(i))),
      Jt(r, "state", { isAnimationFinished: !0, totalLength: 0 }),
      Jt(r, "generateSimpleStrokeDasharray", function (o, l) {
        return "".concat(l, "px ").concat(o - l, "px");
      }),
      Jt(r, "getStrokeDasharray", function (o, l, u) {
        var s = u.reduce(function (v, h) {
          return v + h;
        });
        if (!s) return r.generateSimpleStrokeDasharray(l, o);
        for (
          var f = Math.floor(o / s), c = o % s, d = l - o, p = [], m = 0, y = 0;
          m < u.length;
          y += u[m], ++m
        )
          if (y + u[m] > c) {
            p = [].concat(si(u.slice(0, m)), [c - y]);
            break;
          }
        var x = p.length % 2 === 0 ? [0, d] : [d];
        return []
          .concat(si(t.repeat(u, f)), si(p), x)
          .map(function (v) {
            return "".concat(v, "px");
          })
          .join(", ");
      }),
      Jt(r, "id", wl("recharts-line-")),
      Jt(r, "pathRef", function (o) {
        r.mainCurve = o;
      }),
      Jt(r, "handleAnimationEnd", function () {
        (r.setState({ isAnimationFinished: !0 }),
          r.props.onAnimationEnd && r.props.onAnimationEnd());
      }),
      Jt(r, "handleAnimationStart", function () {
        (r.setState({ isAnimationFinished: !1 }),
          r.props.onAnimationStart && r.props.onAnimationStart());
      }),
      r
    );
  }
  return (
    rG(t, e),
    ZK(
      t,
      [
        {
          key: "componentDidMount",
          value: function () {
            if (this.props.isAnimationActive) {
              var n = this.getTotalLength();
              this.setState({ totalLength: n });
            }
          },
        },
        {
          key: "componentDidUpdate",
          value: function () {
            if (this.props.isAnimationActive) {
              var n = this.getTotalLength();
              n !== this.state.totalLength && this.setState({ totalLength: n });
            }
          },
        },
        {
          key: "getTotalLength",
          value: function () {
            var n = this.mainCurve;
            try {
              return (n && n.getTotalLength && n.getTotalLength()) || 0;
            } catch {
              return 0;
            }
          },
        },
        {
          key: "renderErrorBar",
          value: function (n, i) {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished)
              return null;
            var a = this.props,
              o = a.points,
              l = a.xAxis,
              u = a.yAxis,
              s = a.layout,
              f = a.children,
              c = zt(f, El);
            if (!c) return null;
            var d = function (y, x) {
                return {
                  x: y.x,
                  y: y.y,
                  value: y.value,
                  errorVal: jt(y.payload, x),
                };
              },
              p = { clipPath: n ? "url(#clipPath-".concat(i, ")") : null };
            return E.createElement(
              ke,
              p,
              c.map(function (m) {
                return E.cloneElement(m, {
                  key: "bar-".concat(m.props.dataKey),
                  data: o,
                  xAxis: l,
                  yAxis: u,
                  layout: s,
                  dataPointFormatter: d,
                });
              }),
            );
          },
        },
        {
          key: "renderDots",
          value: function (n, i, a) {
            var o = this.props.isAnimationActive;
            if (o && !this.state.isAnimationFinished) return null;
            var l = this.props,
              u = l.dot,
              s = l.points,
              f = l.dataKey,
              c = re(this.props, !1),
              d = re(u, !0),
              p = s.map(function (y, x) {
                var v = xt(
                  xt(xt({ key: "dot-".concat(x), r: 3 }, c), d),
                  {},
                  {
                    index: x,
                    cx: y.x,
                    cy: y.y,
                    value: y.value,
                    dataKey: f,
                    payload: y.payload,
                    points: s,
                  },
                );
                return t.renderDotItem(u, v);
              }),
              m = {
                clipPath: n
                  ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")")
                  : null,
              };
            return E.createElement(
              ke,
              po({ className: "recharts-line-dots", key: "dots" }, m),
              p,
            );
          },
        },
        {
          key: "renderCurveStatically",
          value: function (n, i, a, o) {
            var l = this.props,
              u = l.type,
              s = l.layout,
              f = l.connectNulls;
            l.ref;
            var c = Sx(l, HK),
              d = xt(
                xt(
                  xt({}, re(c, !0)),
                  {},
                  {
                    fill: "none",
                    className: "recharts-line-curve",
                    clipPath: i ? "url(#clipPath-".concat(a, ")") : null,
                    points: n,
                  },
                  o,
                ),
                {},
                { type: u, layout: s, connectNulls: f },
              );
            return E.createElement(Vp, po({}, d, { pathRef: this.pathRef }));
          },
        },
        {
          key: "renderCurveWithAnimation",
          value: function (n, i) {
            var a = this,
              o = this.props,
              l = o.points,
              u = o.strokeDasharray,
              s = o.isAnimationActive,
              f = o.animationBegin,
              c = o.animationDuration,
              d = o.animationEasing,
              p = o.animationId,
              m = o.animateNewValues,
              y = o.width,
              x = o.height,
              v = this.state,
              h = v.prevPoints,
              g = v.totalLength;
            return E.createElement(
              Lr,
              {
                begin: f,
                duration: c,
                isActive: s,
                easing: d,
                from: { t: 0 },
                to: { t: 1 },
                key: "line-".concat(p),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (S) {
                var b = S.t;
                if (h) {
                  var w = h.length / l.length,
                    P = l.map(function (j, D) {
                      var N = Math.floor(D * w);
                      if (h[N]) {
                        var M = h[N],
                          L = tr(M.x, j.x),
                          F = tr(M.y, j.y);
                        return xt(xt({}, j), {}, { x: L(b), y: F(b) });
                      }
                      if (m) {
                        var T = tr(y * 2, j.x),
                          I = tr(x / 2, j.y);
                        return xt(xt({}, j), {}, { x: T(b), y: I(b) });
                      }
                      return xt(xt({}, j), {}, { x: j.x, y: j.y });
                    });
                  return a.renderCurveStatically(P, n, i);
                }
                var _ = tr(0, g),
                  A = _(b),
                  $;
                if (u) {
                  var C = ""
                    .concat(u)
                    .split(/[,\s]+/gim)
                    .map(function (j) {
                      return parseFloat(j);
                    });
                  $ = a.getStrokeDasharray(A, g, C);
                } else $ = a.generateSimpleStrokeDasharray(g, A);
                return a.renderCurveStatically(l, n, i, { strokeDasharray: $ });
              },
            );
          },
        },
        {
          key: "renderCurve",
          value: function (n, i) {
            var a = this.props,
              o = a.points,
              l = a.isAnimationActive,
              u = this.state,
              s = u.prevPoints,
              f = u.totalLength;
            return l && o && o.length && ((!s && f > 0) || !Uc(s, o))
              ? this.renderCurveWithAnimation(n, i)
              : this.renderCurveStatically(o, n, i);
          },
        },
        {
          key: "render",
          value: function () {
            var n,
              i = this.props,
              a = i.hide,
              o = i.dot,
              l = i.points,
              u = i.className,
              s = i.xAxis,
              f = i.yAxis,
              c = i.top,
              d = i.left,
              p = i.width,
              m = i.height,
              y = i.isAnimationActive,
              x = i.id;
            if (a || !l || !l.length) return null;
            var v = this.state.isAnimationFinished,
              h = l.length === 1,
              g = oe("recharts-line", u),
              S = s && s.allowDataOverflow,
              b = f && f.allowDataOverflow,
              w = S || b,
              P = ee(x) ? this.id : x,
              _ =
                (n = re(o, !1)) !== null && n !== void 0
                  ? n
                  : { r: 3, strokeWidth: 2 },
              A = _.r,
              $ = A === void 0 ? 3 : A,
              C = _.strokeWidth,
              j = C === void 0 ? 2 : C,
              D = pk(o) ? o : {},
              N = D.clipDot,
              M = N === void 0 ? !0 : N,
              L = $ * 2 + j;
            return E.createElement(
              ke,
              { className: g },
              S || b
                ? E.createElement(
                    "defs",
                    null,
                    E.createElement(
                      "clipPath",
                      { id: "clipPath-".concat(P) },
                      E.createElement("rect", {
                        x: S ? d : d - p / 2,
                        y: b ? c : c - m / 2,
                        width: S ? p : p * 2,
                        height: b ? m : m * 2,
                      }),
                    ),
                    !M &&
                      E.createElement(
                        "clipPath",
                        { id: "clipPath-dots-".concat(P) },
                        E.createElement("rect", {
                          x: d - L / 2,
                          y: c - L / 2,
                          width: p + L,
                          height: m + L,
                        }),
                      ),
                  )
                : null,
              !h && this.renderCurve(w, P),
              this.renderErrorBar(w, P),
              (h || o) && this.renderDots(w, M, P),
              (!y || v) && cn.renderCallByParent(this.props, l),
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (n, i) {
            return n.animationId !== i.prevAnimationId
              ? {
                  prevAnimationId: n.animationId,
                  curPoints: n.points,
                  prevPoints: i.curPoints,
                }
              : n.points !== i.curPoints
                ? { curPoints: n.points }
                : null;
          },
        },
        {
          key: "repeat",
          value: function (n, i) {
            for (
              var a = n.length % 2 !== 0 ? [].concat(si(n), [0]) : n,
                o = [],
                l = 0;
              l < i;
              ++l
            )
              o = [].concat(si(o), si(a));
            return o;
          },
        },
        {
          key: "renderDotItem",
          value: function (n, i) {
            var a;
            if (E.isValidElement(n)) a = E.cloneElement(n, i);
            else if (J(n)) a = n(i);
            else {
              var o = i.key,
                l = Sx(i, VK),
                u = oe(
                  "recharts-line-dot",
                  typeof n != "boolean" ? n.className : "",
                );
              a = E.createElement(mm, po({ key: o }, l, { className: u }));
            }
            return a;
          },
        },
      ],
    )
  );
})(B.PureComponent);
Jt(Ea, "displayName", "Line");
Jt(Ea, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  connectNulls: !1,
  activeDot: !0,
  dot: !0,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  fill: "#fff",
  points: [],
  isAnimationActive: !Sa.isSsr,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: !1,
  label: !1,
});
Jt(Ea, "getComposedData", function (e) {
  var t = e.props,
    r = e.xAxis,
    n = e.yAxis,
    i = e.xAxisTicks,
    a = e.yAxisTicks,
    o = e.dataKey,
    l = e.bandSize,
    u = e.displayedData,
    s = e.offset,
    f = t.layout,
    c = u.map(function (d, p) {
      var m = jt(d, o);
      return f === "horizontal"
        ? {
            x: ib({ axis: r, ticks: i, bandSize: l, entry: d, index: p }),
            y: ee(m) ? null : n.scale(m),
            value: m,
            payload: d,
          }
        : {
            x: ee(m) ? null : r.scale(m),
            y: ib({ axis: n, ticks: a, bandSize: l, entry: d, index: p }),
            value: m,
            payload: d,
          };
    });
  return xt({ points: c, layout: f }, s);
});
function oa(e) {
  "@babel/helpers - typeof";
  return (
    (oa =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    oa(e)
  );
}
function iG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function aG(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, v_(n.key), n));
  }
}
function oG(e, t, r) {
  return (
    t && aG(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function lG(e, t, r) {
  return (
    (t = Ks(t)),
    uG(
      e,
      p_() ? Reflect.construct(t, r || [], Ks(e).constructor) : t.apply(e, r),
    )
  );
}
function uG(e, t) {
  if (t && (oa(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return sG(e);
}
function sG(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function p_() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (p_ = function () {
    return !!e;
  })();
}
function Ks(e) {
  return (
    (Ks = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ks(e)
  );
}
function cG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && vh(e, t));
}
function vh(e, t) {
  return (
    (vh = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    vh(e, t)
  );
}
function h_(e, t, r) {
  return (
    (t = v_(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function v_(e) {
  var t = fG(e, "string");
  return oa(t) == "symbol" ? t : t + "";
}
function fG(e, t) {
  if (oa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (oa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function mh() {
  return (
    (mh = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    mh.apply(this, arguments)
  );
}
function dG(e) {
  var t = e.xAxisId,
    r = xm(),
    n = wm(),
    i = JP(t);
  return i == null
    ? null
    : B.createElement(
        Aa,
        mh({}, i, {
          className: oe(
            "recharts-".concat(i.axisType, " ").concat(i.axisType),
            i.className,
          ),
          viewBox: { x: 0, y: 0, width: r, height: n },
          ticksGenerator: function (o) {
            return _r(o, !0);
          },
        }),
      );
}
var Tl = (function (e) {
  function t() {
    return (iG(this, t), lG(this, t, arguments));
  }
  return (
    cG(t, e),
    oG(t, [
      {
        key: "render",
        value: function () {
          return B.createElement(dG, this.props);
        },
      },
    ])
  );
})(B.Component);
h_(Tl, "displayName", "XAxis");
h_(Tl, "defaultProps", {
  allowDecimals: !0,
  hide: !1,
  orientation: "bottom",
  width: 0,
  height: 30,
  mirror: !1,
  xAxisId: 0,
  tickCount: 5,
  type: "category",
  padding: { left: 0, right: 0 },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
  allowDuplicatedCategory: !0,
});
function la(e) {
  "@babel/helpers - typeof";
  return (
    (la =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    la(e)
  );
}
function pG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hG(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, g_(n.key), n));
  }
}
function vG(e, t, r) {
  return (
    t && hG(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function mG(e, t, r) {
  return (
    (t = Gs(t)),
    yG(
      e,
      m_() ? Reflect.construct(t, r || [], Gs(e).constructor) : t.apply(e, r),
    )
  );
}
function yG(e, t) {
  if (t && (la(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return gG(e);
}
function gG(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function m_() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (m_ = function () {
    return !!e;
  })();
}
function Gs(e) {
  return (
    (Gs = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Gs(e)
  );
}
function bG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && yh(e, t));
}
function yh(e, t) {
  return (
    (yh = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    yh(e, t)
  );
}
function y_(e, t, r) {
  return (
    (t = g_(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function g_(e) {
  var t = xG(e, "string");
  return la(t) == "symbol" ? t : t + "";
}
function xG(e, t) {
  if (la(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (la(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function gh() {
  return (
    (gh = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    gh.apply(this, arguments)
  );
}
var wG = function (t) {
    var r = t.yAxisId,
      n = xm(),
      i = wm(),
      a = e_(r);
    return a == null
      ? null
      : B.createElement(
          Aa,
          gh({}, a, {
            className: oe(
              "recharts-".concat(a.axisType, " ").concat(a.axisType),
              a.className,
            ),
            viewBox: { x: 0, y: 0, width: n, height: i },
            ticksGenerator: function (l) {
              return _r(l, !0);
            },
          }),
        );
  },
  Cl = (function (e) {
    function t() {
      return (pG(this, t), mG(this, t, arguments));
    }
    return (
      bG(t, e),
      vG(t, [
        {
          key: "render",
          value: function () {
            return B.createElement(wG, this.props);
          },
        },
      ])
    );
  })(B.Component);
y_(Cl, "displayName", "YAxis");
y_(Cl, "defaultProps", {
  allowDuplicatedCategory: !0,
  allowDecimals: !0,
  hide: !1,
  orientation: "left",
  width: 60,
  height: 0,
  mirror: !1,
  yAxisId: 0,
  tickCount: 5,
  type: "number",
  padding: { top: 0, bottom: 0 },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
});
function _x(e) {
  return _G(e) || PG(e) || OG(e) || SG();
}
function SG() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function OG(e, t) {
  if (e) {
    if (typeof e == "string") return bh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return bh(e, t);
  }
}
function PG(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function _G(e) {
  if (Array.isArray(e)) return bh(e);
}
function bh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var xh = function (t, r, n, i, a) {
    var o = zt(t, Om),
      l = zt(t, Xc),
      u = [].concat(_x(o), _x(l)),
      s = zt(t, $l),
      f = "".concat(i, "Id"),
      c = i[0],
      d = r;
    if (
      (u.length &&
        (d = u.reduce(function (y, x) {
          if (
            x.props[f] === n &&
            vr(x.props, "extendDomain") &&
            H(x.props[c])
          ) {
            var v = x.props[c];
            return [Math.min(y[0], v), Math.max(y[1], v)];
          }
          return y;
        }, d)),
      s.length)
    ) {
      var p = "".concat(c, "1"),
        m = "".concat(c, "2");
      d = s.reduce(function (y, x) {
        if (
          x.props[f] === n &&
          vr(x.props, "extendDomain") &&
          H(x.props[p]) &&
          H(x.props[m])
        ) {
          var v = x.props[p],
            h = x.props[m];
          return [Math.min(y[0], v, h), Math.max(y[1], v, h)];
        }
        return y;
      }, d);
    }
    return (
      a &&
        a.length &&
        (d = a.reduce(function (y, x) {
          return H(x) ? [Math.min(y[0], x), Math.max(y[1], x)] : y;
        }, d)),
      d
    );
  },
  b_ = { exports: {} };
(function (e) {
  var t = Object.prototype.hasOwnProperty,
    r = "~";
  function n() {}
  Object.create &&
    ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
  function i(u, s, f) {
    ((this.fn = u), (this.context = s), (this.once = f || !1));
  }
  function a(u, s, f, c, d) {
    if (typeof f != "function")
      throw new TypeError("The listener must be a function");
    var p = new i(f, c || u, d),
      m = r ? r + s : s;
    return (
      u._events[m]
        ? u._events[m].fn
          ? (u._events[m] = [u._events[m], p])
          : u._events[m].push(p)
        : ((u._events[m] = p), u._eventsCount++),
      u
    );
  }
  function o(u, s) {
    --u._eventsCount === 0 ? (u._events = new n()) : delete u._events[s];
  }
  function l() {
    ((this._events = new n()), (this._eventsCount = 0));
  }
  ((l.prototype.eventNames = function () {
    var s = [],
      f,
      c;
    if (this._eventsCount === 0) return s;
    for (c in (f = this._events)) t.call(f, c) && s.push(r ? c.slice(1) : c);
    return Object.getOwnPropertySymbols
      ? s.concat(Object.getOwnPropertySymbols(f))
      : s;
  }),
    (l.prototype.listeners = function (s) {
      var f = r ? r + s : s,
        c = this._events[f];
      if (!c) return [];
      if (c.fn) return [c.fn];
      for (var d = 0, p = c.length, m = new Array(p); d < p; d++)
        m[d] = c[d].fn;
      return m;
    }),
    (l.prototype.listenerCount = function (s) {
      var f = r ? r + s : s,
        c = this._events[f];
      return c ? (c.fn ? 1 : c.length) : 0;
    }),
    (l.prototype.emit = function (s, f, c, d, p, m) {
      var y = r ? r + s : s;
      if (!this._events[y]) return !1;
      var x = this._events[y],
        v = arguments.length,
        h,
        g;
      if (x.fn) {
        switch ((x.once && this.removeListener(s, x.fn, void 0, !0), v)) {
          case 1:
            return (x.fn.call(x.context), !0);
          case 2:
            return (x.fn.call(x.context, f), !0);
          case 3:
            return (x.fn.call(x.context, f, c), !0);
          case 4:
            return (x.fn.call(x.context, f, c, d), !0);
          case 5:
            return (x.fn.call(x.context, f, c, d, p), !0);
          case 6:
            return (x.fn.call(x.context, f, c, d, p, m), !0);
        }
        for (g = 1, h = new Array(v - 1); g < v; g++) h[g - 1] = arguments[g];
        x.fn.apply(x.context, h);
      } else {
        var S = x.length,
          b;
        for (g = 0; g < S; g++)
          switch (
            (x[g].once && this.removeListener(s, x[g].fn, void 0, !0), v)
          ) {
            case 1:
              x[g].fn.call(x[g].context);
              break;
            case 2:
              x[g].fn.call(x[g].context, f);
              break;
            case 3:
              x[g].fn.call(x[g].context, f, c);
              break;
            case 4:
              x[g].fn.call(x[g].context, f, c, d);
              break;
            default:
              if (!h)
                for (b = 1, h = new Array(v - 1); b < v; b++)
                  h[b - 1] = arguments[b];
              x[g].fn.apply(x[g].context, h);
          }
      }
      return !0;
    }),
    (l.prototype.on = function (s, f, c) {
      return a(this, s, f, c, !1);
    }),
    (l.prototype.once = function (s, f, c) {
      return a(this, s, f, c, !0);
    }),
    (l.prototype.removeListener = function (s, f, c, d) {
      var p = r ? r + s : s;
      if (!this._events[p]) return this;
      if (!f) return (o(this, p), this);
      var m = this._events[p];
      if (m.fn)
        m.fn === f && (!d || m.once) && (!c || m.context === c) && o(this, p);
      else {
        for (var y = 0, x = [], v = m.length; y < v; y++)
          (m[y].fn !== f || (d && !m[y].once) || (c && m[y].context !== c)) &&
            x.push(m[y]);
        x.length ? (this._events[p] = x.length === 1 ? x[0] : x) : o(this, p);
      }
      return this;
    }),
    (l.prototype.removeAllListeners = function (s) {
      var f;
      return (
        s
          ? ((f = r ? r + s : s), this._events[f] && o(this, f))
          : ((this._events = new n()), (this._eventsCount = 0)),
        this
      );
    }),
    (l.prototype.off = l.prototype.removeListener),
    (l.prototype.addListener = l.prototype.on),
    (l.prefixed = r),
    (l.EventEmitter = l),
    (e.exports = l));
})(b_);
var AG = b_.exports;
const EG = pe(AG);
var td = new EG(),
  rd = "recharts.syncMouseEvents";
function cl(e) {
  "@babel/helpers - typeof";
  return (
    (cl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    cl(e)
  );
}
function jG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $G(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, x_(n.key), n));
  }
}
function TG(e, t, r) {
  return (
    t && $G(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function nd(e, t, r) {
  return (
    (t = x_(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function x_(e) {
  var t = CG(e, "string");
  return cl(t) == "symbol" ? t : t + "";
}
function CG(e, t) {
  if (cl(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (cl(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var kG = (function () {
  function e() {
    (jG(this, e),
      nd(this, "activeIndex", 0),
      nd(this, "coordinateList", []),
      nd(this, "layout", "horizontal"));
  }
  return TG(e, [
    {
      key: "setDetails",
      value: function (r) {
        var n,
          i = r.coordinateList,
          a = i === void 0 ? null : i,
          o = r.container,
          l = o === void 0 ? null : o,
          u = r.layout,
          s = u === void 0 ? null : u,
          f = r.offset,
          c = f === void 0 ? null : f,
          d = r.mouseHandlerCallback,
          p = d === void 0 ? null : d;
        ((this.coordinateList =
          (n = a ?? this.coordinateList) !== null && n !== void 0 ? n : []),
          (this.container = l ?? this.container),
          (this.layout = s ?? this.layout),
          (this.offset = c ?? this.offset),
          (this.mouseHandlerCallback = p ?? this.mouseHandlerCallback),
          (this.activeIndex = Math.min(
            Math.max(this.activeIndex, 0),
            this.coordinateList.length - 1,
          )));
      },
    },
    {
      key: "focus",
      value: function () {
        this.spoofMouse();
      },
    },
    {
      key: "keyboardEvent",
      value: function (r) {
        if (this.coordinateList.length !== 0)
          switch (r.key) {
            case "ArrowRight": {
              if (this.layout !== "horizontal") return;
              ((this.activeIndex = Math.min(
                this.activeIndex + 1,
                this.coordinateList.length - 1,
              )),
                this.spoofMouse());
              break;
            }
            case "ArrowLeft": {
              if (this.layout !== "horizontal") return;
              ((this.activeIndex = Math.max(this.activeIndex - 1, 0)),
                this.spoofMouse());
              break;
            }
          }
      },
    },
    {
      key: "setIndex",
      value: function (r) {
        this.activeIndex = r;
      },
    },
    {
      key: "spoofMouse",
      value: function () {
        var r, n;
        if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
          var i = this.container.getBoundingClientRect(),
            a = i.x,
            o = i.y,
            l = i.height,
            u = this.coordinateList[this.activeIndex].coordinate,
            s =
              ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0,
            f =
              ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0,
            c = a + u + s,
            d = o + this.offset.top + l / 2 + f;
          this.mouseHandlerCallback({ pageX: c, pageY: d });
        }
      },
    },
  ]);
})();
function MG(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e == null ? void 0 : e[0],
      i = e == null ? void 0 : e[1];
    if (n && i && H(n) && H(i)) return !0;
  }
  return !1;
}
function NG(e, t, r, n) {
  var i = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - i : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - i,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n,
  };
}
function w_(e) {
  var t = e.cx,
    r = e.cy,
    n = e.radius,
    i = e.startAngle,
    a = e.endAngle,
    o = Ye(t, r, n, i),
    l = Ye(t, r, n, a);
  return {
    points: [o, l],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a,
  };
}
function IG(e, t, r) {
  var n, i, a, o;
  if (e === "horizontal")
    ((n = t.x), (a = n), (i = r.top), (o = r.top + r.height));
  else if (e === "vertical")
    ((i = t.y), (o = i), (n = r.left), (a = r.left + r.width));
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var l = t.cx,
        u = t.cy,
        s = t.innerRadius,
        f = t.outerRadius,
        c = t.angle,
        d = Ye(l, u, s, c),
        p = Ye(l, u, f, c);
      ((n = d.x), (i = d.y), (a = p.x), (o = p.y));
    } else return w_(t);
  return [
    { x: n, y: i },
    { x: a, y: o },
  ];
}
function fl(e) {
  "@babel/helpers - typeof";
  return (
    (fl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    fl(e)
  );
}
function Ax(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function uu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ax(Object(r), !0).forEach(function (n) {
          DG(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Ax(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function DG(e, t, r) {
  return (
    (t = LG(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function LG(e) {
  var t = RG(e, "string");
  return fl(t) == "symbol" ? t : t + "";
}
function RG(e, t) {
  if (fl(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fl(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function FG(e) {
  var t,
    r,
    n = e.element,
    i = e.tooltipEventType,
    a = e.isActive,
    o = e.activeCoordinate,
    l = e.activePayload,
    u = e.offset,
    s = e.activeTooltipIndex,
    f = e.tooltipAxisBandSize,
    c = e.layout,
    d = e.chartName,
    p =
      (t = n.props.cursor) !== null && t !== void 0
        ? t
        : (r = n.type.defaultProps) === null || r === void 0
          ? void 0
          : r.cursor;
  if (!n || !p || !a || !o || (d !== "ScatterChart" && i !== "axis"))
    return null;
  var m,
    y = Vp;
  if (d === "ScatterChart") ((m = o), (y = R9));
  else if (d === "BarChart") ((m = NG(c, o, u, f)), (y = vm));
  else if (c === "radial") {
    var x = w_(o),
      v = x.cx,
      h = x.cy,
      g = x.radius,
      S = x.startAngle,
      b = x.endAngle;
    ((m = {
      cx: v,
      cy: h,
      startAngle: S,
      endAngle: b,
      innerRadius: g,
      outerRadius: g,
    }),
      (y = _P));
  } else ((m = { points: IG(c, o, u) }), (y = Vp));
  var w = uu(
    uu(uu(uu({ stroke: "#ccc", pointerEvents: "none" }, u), m), re(p, !1)),
    {},
    {
      payload: l,
      payloadIndex: s,
      className: oe("recharts-tooltip-cursor", p.className),
    },
  );
  return B.isValidElement(p) ? B.cloneElement(p, w) : B.createElement(y, w);
}
var BG = ["item"],
  zG = [
    "children",
    "className",
    "width",
    "height",
    "style",
    "compact",
    "title",
    "desc",
  ];
function ua(e) {
  "@babel/helpers - typeof";
  return (
    (ua =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ua(e)
  );
}
function Pi() {
  return (
    (Pi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Pi.apply(this, arguments)
  );
}
function Ex(e, t) {
  return HG(e) || WG(e, t) || O_(e, t) || UG();
}
function UG() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function WG(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      i,
      a,
      o,
      l = [],
      u = !0,
      s = !1;
    try {
      if (((a = (r = r.call(e)).next), t !== 0))
        for (
          ;
          !(u = (n = a.call(r)).done) && (l.push(n.value), l.length !== t);
          u = !0
        );
    } catch (f) {
      ((s = !0), (i = f));
    } finally {
      try {
        if (!u && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (s) throw i;
      }
    }
    return l;
  }
}
function HG(e) {
  if (Array.isArray(e)) return e;
}
function jx(e, t) {
  if (e == null) return {};
  var r = VG(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      ((n = a[i]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]));
  }
  return r;
}
function VG(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function KG(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function GG(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, P_(n.key), n));
  }
}
function qG(e, t, r) {
  return (
    t && GG(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function XG(e, t, r) {
  return (
    (t = qs(t)),
    YG(
      e,
      S_() ? Reflect.construct(t, r || [], qs(e).constructor) : t.apply(e, r),
    )
  );
}
function YG(e, t) {
  if (t && (ua(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return QG(e);
}
function QG(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function S_() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
  } catch {}
  return (S_ = function () {
    return !!e;
  })();
}
function qs(e) {
  return (
    (qs = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    qs(e)
  );
}
function ZG(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && wh(e, t));
}
function wh(e, t) {
  return (
    (wh = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, i) {
          return ((n.__proto__ = i), n);
        }),
    wh(e, t)
  );
}
function sa(e) {
  return tq(e) || eq(e) || O_(e) || JG();
}
function JG() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function O_(e, t) {
  if (e) {
    if (typeof e == "string") return Sh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Sh(e, t);
  }
}
function eq(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function tq(e) {
  if (Array.isArray(e)) return Sh(e);
}
function Sh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function $x(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (t &&
      (n = n.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      r.push.apply(r, n));
  }
  return r;
}
function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $x(Object(r), !0).forEach(function (n) {
          Y(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : $x(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
function Y(e, t, r) {
  return (
    (t = P_(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function P_(e) {
  var t = rq(e, "string");
  return ua(t) == "symbol" ? t : t + "";
}
function rq(e, t) {
  if (ua(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ua(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var nq = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
  iq = { width: "100%", height: "100%" },
  __ = { x: 0, y: 0 };
function su(e) {
  return e;
}
var aq = function (t, r) {
    return r === "horizontal"
      ? t.x
      : r === "vertical"
        ? t.y
        : r === "centric"
          ? t.angle
          : t.radius;
  },
  oq = function (t, r, n, i) {
    var a = r.find(function (f) {
      return f && f.index === n;
    });
    if (a) {
      if (t === "horizontal") return { x: a.coordinate, y: i.y };
      if (t === "vertical") return { x: i.x, y: a.coordinate };
      if (t === "centric") {
        var o = a.coordinate,
          l = i.radius;
        return k(
          k(k({}, i), Ye(i.cx, i.cy, l, o)),
          {},
          { angle: o, radius: l },
        );
      }
      var u = a.coordinate,
        s = i.angle;
      return k(k(k({}, i), Ye(i.cx, i.cy, u, s)), {}, { angle: s, radius: u });
    }
    return __;
  },
  Qc = function (t, r) {
    var n = r.graphicalItems,
      i = r.dataStartIndex,
      a = r.dataEndIndex,
      o = (n ?? []).reduce(function (l, u) {
        var s = u.props.data;
        return s && s.length ? [].concat(sa(l), sa(s)) : l;
      }, []);
    return o.length > 0
      ? o
      : t && t.length && H(i) && H(a)
        ? t.slice(i, a + 1)
        : [];
  };
function A_(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var Oh = function (t, r, n, i) {
    var a = t.graphicalItems,
      o = t.tooltipAxis,
      l = Qc(r, t);
    return n < 0 || !a || !a.length || n >= l.length
      ? null
      : a.reduce(function (u, s) {
          var f,
            c = (f = s.props.data) !== null && f !== void 0 ? f : r;
          c &&
            t.dataStartIndex + t.dataEndIndex !== 0 &&
            t.dataEndIndex - t.dataStartIndex >= n &&
            (c = c.slice(t.dataStartIndex, t.dataEndIndex + 1));
          var d;
          if (o.dataKey && !o.allowDuplicatedCategory) {
            var p = c === void 0 ? l : c;
            d = qu(p, o.dataKey, i);
          } else d = (c && c[n]) || l[n];
          return d ? [].concat(sa(u), [SP(s, d)]) : u;
        }, []);
  },
  Tx = function (t, r, n, i) {
    var a = i || { x: t.chartX, y: t.chartY },
      o = aq(a, n),
      l = t.orderedTooltipTicks,
      u = t.tooltipAxis,
      s = t.tooltipTicks,
      f = m6(o, l, s, u);
    if (f >= 0 && s) {
      var c = s[f] && s[f].value,
        d = Oh(t, r, f, c),
        p = oq(n, l, f, a);
      return {
        activeTooltipIndex: f,
        activeLabel: c,
        activePayload: d,
        activeCoordinate: p,
      };
    }
    return null;
  },
  lq = function (t, r) {
    var n = r.axes,
      i = r.graphicalItems,
      a = r.axisType,
      o = r.axisIdKey,
      l = r.stackGroups,
      u = r.dataStartIndex,
      s = r.dataEndIndex,
      f = t.layout,
      c = t.children,
      d = t.stackOffset,
      p = bP(f, a);
    return n.reduce(function (m, y) {
      var x,
        v =
          y.type.defaultProps !== void 0
            ? k(k({}, y.type.defaultProps), y.props)
            : y.props,
        h = v.type,
        g = v.dataKey,
        S = v.allowDataOverflow,
        b = v.allowDuplicatedCategory,
        w = v.scale,
        P = v.ticks,
        _ = v.includeHidden,
        A = v[o];
      if (m[A]) return m;
      var $ = Qc(t.data, {
          graphicalItems: i.filter(function (W) {
            var X,
              ne =
                o in W.props
                  ? W.props[o]
                  : (X = W.type.defaultProps) === null || X === void 0
                    ? void 0
                    : X[o];
            return ne === A;
          }),
          dataStartIndex: u,
          dataEndIndex: s,
        }),
        C = $.length,
        j,
        D,
        N;
      MG(v.domain, S, h) &&
        ((j = Bp(v.domain, null, S)),
        p && (h === "number" || w !== "auto") && (N = co($, g, "category")));
      var M = A_(h);
      if (!j || j.length === 0) {
        var L,
          F = (L = v.domain) !== null && L !== void 0 ? L : M;
        if (g) {
          if (((j = co($, g, h)), h === "category" && p)) {
            var T = nk(j);
            b && T
              ? ((D = j), (j = Is(0, C)))
              : b ||
                (j = ub(F, j, y).reduce(function (W, X) {
                  return W.indexOf(X) >= 0 ? W : [].concat(sa(W), [X]);
                }, []));
          } else if (h === "category")
            b
              ? (j = j.filter(function (W) {
                  return W !== "" && !ee(W);
                }))
              : (j = ub(F, j, y).reduce(function (W, X) {
                  return W.indexOf(X) >= 0 || X === "" || ee(X)
                    ? W
                    : [].concat(sa(W), [X]);
                }, []));
          else if (h === "number") {
            var I = w6(
              $,
              i.filter(function (W) {
                var X,
                  ne,
                  xe =
                    o in W.props
                      ? W.props[o]
                      : (X = W.type.defaultProps) === null || X === void 0
                        ? void 0
                        : X[o],
                  Te =
                    "hide" in W.props
                      ? W.props.hide
                      : (ne = W.type.defaultProps) === null || ne === void 0
                        ? void 0
                        : ne.hide;
                return xe === A && (_ || !Te);
              }),
              g,
              a,
              f,
            );
            I && (j = I);
          }
          p && (h === "number" || w !== "auto") && (N = co($, g, "category"));
        } else
          p
            ? (j = Is(0, C))
            : l && l[A] && l[A].hasStack && h === "number"
              ? (j = d === "expand" ? [0, 1] : wP(l[A].stackGroups, u, s))
              : (j = gP(
                  $,
                  i.filter(function (W) {
                    var X = o in W.props ? W.props[o] : W.type.defaultProps[o],
                      ne =
                        "hide" in W.props
                          ? W.props.hide
                          : W.type.defaultProps.hide;
                    return X === A && (_ || !ne);
                  }),
                  h,
                  f,
                  !0,
                ));
        if (h === "number") ((j = xh(c, j, A, a, P)), F && (j = Bp(F, j, S)));
        else if (h === "category" && F) {
          var R = F,
            V = j.every(function (W) {
              return R.indexOf(W) >= 0;
            });
          V && (j = R);
        }
      }
      return k(
        k({}, m),
        {},
        Y(
          {},
          A,
          k(
            k({}, v),
            {},
            {
              axisType: a,
              domain: j,
              categoricalDomain: N,
              duplicateDomain: D,
              originalDomain: (x = v.domain) !== null && x !== void 0 ? x : M,
              isCategorical: p,
              layout: f,
            },
          ),
        ),
      );
    }, {});
  },
  uq = function (t, r) {
    var n = r.graphicalItems,
      i = r.Axis,
      a = r.axisType,
      o = r.axisIdKey,
      l = r.stackGroups,
      u = r.dataStartIndex,
      s = r.dataEndIndex,
      f = t.layout,
      c = t.children,
      d = Qc(t.data, { graphicalItems: n, dataStartIndex: u, dataEndIndex: s }),
      p = d.length,
      m = bP(f, a),
      y = -1;
    return n.reduce(function (x, v) {
      var h =
          v.type.defaultProps !== void 0
            ? k(k({}, v.type.defaultProps), v.props)
            : v.props,
        g = h[o],
        S = A_("number");
      if (!x[g]) {
        y++;
        var b;
        return (
          m
            ? (b = Is(0, p))
            : l && l[g] && l[g].hasStack
              ? ((b = wP(l[g].stackGroups, u, s)), (b = xh(c, b, g, a)))
              : ((b = Bp(
                  S,
                  gP(
                    d,
                    n.filter(function (w) {
                      var P,
                        _,
                        A =
                          o in w.props
                            ? w.props[o]
                            : (P = w.type.defaultProps) === null || P === void 0
                              ? void 0
                              : P[o],
                        $ =
                          "hide" in w.props
                            ? w.props.hide
                            : (_ = w.type.defaultProps) === null || _ === void 0
                              ? void 0
                              : _.hide;
                      return A === g && !$;
                    }),
                    "number",
                    f,
                  ),
                  i.defaultProps.allowDataOverflow,
                )),
                (b = xh(c, b, g, a))),
          k(
            k({}, x),
            {},
            Y(
              {},
              g,
              k(
                k({ axisType: a }, i.defaultProps),
                {},
                {
                  hide: !0,
                  orientation: Bt(nq, "".concat(a, ".").concat(y % 2), null),
                  domain: b,
                  originalDomain: S,
                  isCategorical: m,
                  layout: f,
                },
              ),
            ),
          )
        );
      }
      return x;
    }, {});
  },
  sq = function (t, r) {
    var n = r.axisType,
      i = n === void 0 ? "xAxis" : n,
      a = r.AxisComp,
      o = r.graphicalItems,
      l = r.stackGroups,
      u = r.dataStartIndex,
      s = r.dataEndIndex,
      f = t.children,
      c = "".concat(i, "Id"),
      d = zt(f, a),
      p = {};
    return (
      d && d.length
        ? (p = lq(t, {
            axes: d,
            graphicalItems: o,
            axisType: i,
            axisIdKey: c,
            stackGroups: l,
            dataStartIndex: u,
            dataEndIndex: s,
          }))
        : o &&
          o.length &&
          (p = uq(t, {
            Axis: a,
            graphicalItems: o,
            axisType: i,
            axisIdKey: c,
            stackGroups: l,
            dataStartIndex: u,
            dataEndIndex: s,
          })),
      p
    );
  },
  cq = function (t) {
    var r = Yr(t),
      n = _r(r, !1, !0);
    return {
      tooltipTicks: n,
      orderedTooltipTicks: Uv(n, function (i) {
        return i.coordinate;
      }),
      tooltipAxis: r,
      tooltipAxisBandSize: _s(r, n),
    };
  },
  Cx = function (t) {
    var r = t.children,
      n = t.defaultShowTooltip,
      i = Ot(r, Ji),
      a = 0,
      o = 0;
    return (
      t.data && t.data.length !== 0 && (o = t.data.length - 1),
      i &&
        i.props &&
        (i.props.startIndex >= 0 && (a = i.props.startIndex),
        i.props.endIndex >= 0 && (o = i.props.endIndex)),
      {
        chartX: 0,
        chartY: 0,
        dataStartIndex: a,
        dataEndIndex: o,
        activeTooltipIndex: -1,
        isTooltipActive: !!n,
      }
    );
  },
  fq = function (t) {
    return !t || !t.length
      ? !1
      : t.some(function (r) {
          var n = Er(r && r.type);
          return n && n.indexOf("Bar") >= 0;
        });
  },
  kx = function (t) {
    return t === "horizontal"
      ? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
      : t === "vertical"
        ? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
        : t === "centric"
          ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
          : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
  },
  dq = function (t, r) {
    var n = t.props,
      i = t.graphicalItems,
      a = t.xAxisMap,
      o = a === void 0 ? {} : a,
      l = t.yAxisMap,
      u = l === void 0 ? {} : l,
      s = n.width,
      f = n.height,
      c = n.children,
      d = n.margin || {},
      p = Ot(c, Ji),
      m = Ot(c, ki),
      y = Object.keys(u).reduce(
        function (b, w) {
          var P = u[w],
            _ = P.orientation;
          return !P.mirror && !P.hide
            ? k(k({}, b), {}, Y({}, _, b[_] + P.width))
            : b;
        },
        { left: d.left || 0, right: d.right || 0 },
      ),
      x = Object.keys(o).reduce(
        function (b, w) {
          var P = o[w],
            _ = P.orientation;
          return !P.mirror && !P.hide
            ? k(k({}, b), {}, Y({}, _, Bt(b, "".concat(_)) + P.height))
            : b;
        },
        { top: d.top || 0, bottom: d.bottom || 0 },
      ),
      v = k(k({}, x), y),
      h = v.bottom;
    (p && (v.bottom += p.props.height || Ji.defaultProps.height),
      m && r && (v = b6(v, i, n, r)));
    var g = s - v.left - v.right,
      S = f - v.top - v.bottom;
    return k(
      k({ brushBottom: h }, v),
      {},
      { width: Math.max(g, 0), height: Math.max(S, 0) },
    );
  },
  pq = function (t, r) {
    if (r === "xAxis") return t[r].width;
    if (r === "yAxis") return t[r].height;
  },
  hq = function (t) {
    var r = t.chartName,
      n = t.GraphicalChild,
      i = t.defaultTooltipEventType,
      a = i === void 0 ? "axis" : i,
      o = t.validateTooltipEventTypes,
      l = o === void 0 ? ["axis"] : o,
      u = t.axisComponents,
      s = t.legendContent,
      f = t.formatAxisMap,
      c = t.defaultProps,
      d = function (v, h) {
        var g = h.graphicalItems,
          S = h.stackGroups,
          b = h.offset,
          w = h.updateId,
          P = h.dataStartIndex,
          _ = h.dataEndIndex,
          A = v.barSize,
          $ = v.layout,
          C = v.barGap,
          j = v.barCategoryGap,
          D = v.maxBarSize,
          N = kx($),
          M = N.numericAxisName,
          L = N.cateAxisName,
          F = fq(g),
          T = [];
        return (
          g.forEach(function (I, R) {
            var V = Qc(v.data, {
                graphicalItems: [I],
                dataStartIndex: P,
                dataEndIndex: _,
              }),
              W =
                I.type.defaultProps !== void 0
                  ? k(k({}, I.type.defaultProps), I.props)
                  : I.props,
              X = W.dataKey,
              ne = W.maxBarSize,
              xe = W["".concat(M, "Id")],
              Te = W["".concat(L, "Id")],
              Ct = {},
              ft = u.reduce(function (Sn, On) {
                var Zc = h["".concat(On.axisType, "Map")],
                  Em = W["".concat(On.axisType, "Id")];
                (Zc && Zc[Em]) || On.axisType === "zAxis" || Xn();
                var jm = Zc[Em];
                return k(
                  k({}, Sn),
                  {},
                  Y(
                    Y({}, On.axisType, jm),
                    "".concat(On.axisType, "Ticks"),
                    _r(jm),
                  ),
                );
              }, Ct),
              K = ft[L],
              Q = ft["".concat(L, "Ticks")],
              Z = S && S[xe] && S[xe].hasStack && M6(I, S[xe].stackGroups),
              z = Er(I.type).indexOf("Bar") >= 0,
              Ae = _s(K, Q),
              ie = [],
              De =
                F && y6({ barSize: A, stackGroups: S, totalSize: pq(ft, L) });
            if (z) {
              var Le,
                dt,
                Ur = ee(ne) ? D : ne,
                ni =
                  (Le =
                    (dt = _s(K, Q, !0)) !== null && dt !== void 0 ? dt : Ur) !==
                    null && Le !== void 0
                    ? Le
                    : 0;
              ((ie = g6({
                barGap: C,
                barCategoryGap: j,
                bandSize: ni !== Ae ? ni : Ae,
                sizeList: De[Te],
                maxBarSize: Ur,
              })),
                ni !== Ae &&
                  (ie = ie.map(function (Sn) {
                    return k(
                      k({}, Sn),
                      {},
                      {
                        position: k(
                          k({}, Sn.position),
                          {},
                          { offset: Sn.position.offset - ni / 2 },
                        ),
                      },
                    );
                  })));
            }
            var kl = I && I.type && I.type.getComposedData;
            kl &&
              T.push({
                props: k(
                  k(
                    {},
                    kl(
                      k(
                        k({}, ft),
                        {},
                        {
                          displayedData: V,
                          props: v,
                          dataKey: X,
                          item: I,
                          bandSize: Ae,
                          barPosition: ie,
                          offset: b,
                          stackedData: Z,
                          layout: $,
                          dataStartIndex: P,
                          dataEndIndex: _,
                        },
                      ),
                    ),
                  ),
                  {},
                  Y(
                    Y(
                      Y({ key: I.key || "item-".concat(R) }, M, ft[M]),
                      L,
                      ft[L],
                    ),
                    "animationId",
                    w,
                  ),
                ),
                childIndex: mk(I, v.children),
                item: I,
              });
          }),
          T
        );
      },
      p = function (v, h) {
        var g = v.props,
          S = v.dataStartIndex,
          b = v.dataEndIndex,
          w = v.updateId;
        if (!tg({ props: g })) return null;
        var P = g.children,
          _ = g.layout,
          A = g.stackOffset,
          $ = g.data,
          C = g.reverseStackOrder,
          j = kx(_),
          D = j.numericAxisName,
          N = j.cateAxisName,
          M = zt(P, n),
          L = T6($, M, "".concat(D, "Id"), "".concat(N, "Id"), A, C),
          F = u.reduce(function (W, X) {
            var ne = "".concat(X.axisType, "Map");
            return k(
              k({}, W),
              {},
              Y(
                {},
                ne,
                sq(
                  g,
                  k(
                    k({}, X),
                    {},
                    {
                      graphicalItems: M,
                      stackGroups: X.axisType === D && L,
                      dataStartIndex: S,
                      dataEndIndex: b,
                    },
                  ),
                ),
              ),
            );
          }, {}),
          T = dq(
            k(k({}, F), {}, { props: g, graphicalItems: M }),
            h == null ? void 0 : h.legendBBox,
          );
        Object.keys(F).forEach(function (W) {
          F[W] = f(g, F[W], T, W.replace("Map", ""), r);
        });
        var I = F["".concat(N, "Map")],
          R = cq(I),
          V = d(
            g,
            k(
              k({}, F),
              {},
              {
                dataStartIndex: S,
                dataEndIndex: b,
                updateId: w,
                graphicalItems: M,
                stackGroups: L,
                offset: T,
              },
            ),
          );
        return k(
          k(
            {
              formattedGraphicalItems: V,
              graphicalItems: M,
              offset: T,
              stackGroups: L,
            },
            R,
          ),
          F,
        );
      },
      m = (function (x) {
        function v(h) {
          var g, S, b;
          return (
            KG(this, v),
            (b = XG(this, v, [h])),
            Y(b, "eventEmitterSymbol", Symbol("rechartsEventEmitter")),
            Y(b, "accessibilityManager", new kG()),
            Y(b, "handleLegendBBoxUpdate", function (w) {
              if (w) {
                var P = b.state,
                  _ = P.dataStartIndex,
                  A = P.dataEndIndex,
                  $ = P.updateId;
                b.setState(
                  k(
                    { legendBBox: w },
                    p(
                      {
                        props: b.props,
                        dataStartIndex: _,
                        dataEndIndex: A,
                        updateId: $,
                      },
                      k(k({}, b.state), {}, { legendBBox: w }),
                    ),
                  ),
                );
              }
            }),
            Y(b, "handleReceiveSyncEvent", function (w, P, _) {
              if (b.props.syncId === w) {
                if (
                  _ === b.eventEmitterSymbol &&
                  typeof b.props.syncMethod != "function"
                )
                  return;
                b.applySyncEvent(P);
              }
            }),
            Y(b, "handleBrushChange", function (w) {
              var P = w.startIndex,
                _ = w.endIndex;
              if (P !== b.state.dataStartIndex || _ !== b.state.dataEndIndex) {
                var A = b.state.updateId;
                (b.setState(function () {
                  return k(
                    { dataStartIndex: P, dataEndIndex: _ },
                    p(
                      {
                        props: b.props,
                        dataStartIndex: P,
                        dataEndIndex: _,
                        updateId: A,
                      },
                      b.state,
                    ),
                  );
                }),
                  b.triggerSyncEvent({ dataStartIndex: P, dataEndIndex: _ }));
              }
            }),
            Y(b, "handleMouseEnter", function (w) {
              var P = b.getMouseInfo(w);
              if (P) {
                var _ = k(k({}, P), {}, { isTooltipActive: !0 });
                (b.setState(_), b.triggerSyncEvent(_));
                var A = b.props.onMouseEnter;
                J(A) && A(_, w);
              }
            }),
            Y(b, "triggeredAfterMouseMove", function (w) {
              var P = b.getMouseInfo(w),
                _ = P
                  ? k(k({}, P), {}, { isTooltipActive: !0 })
                  : { isTooltipActive: !1 };
              (b.setState(_), b.triggerSyncEvent(_));
              var A = b.props.onMouseMove;
              J(A) && A(_, w);
            }),
            Y(b, "handleItemMouseEnter", function (w) {
              b.setState(function () {
                return {
                  isTooltipActive: !0,
                  activeItem: w,
                  activePayload: w.tooltipPayload,
                  activeCoordinate: w.tooltipPosition || { x: w.cx, y: w.cy },
                };
              });
            }),
            Y(b, "handleItemMouseLeave", function () {
              b.setState(function () {
                return { isTooltipActive: !1 };
              });
            }),
            Y(b, "handleMouseMove", function (w) {
              (w.persist(), b.throttleTriggeredAfterMouseMove(w));
            }),
            Y(b, "handleMouseLeave", function (w) {
              b.throttleTriggeredAfterMouseMove.cancel();
              var P = { isTooltipActive: !1 };
              (b.setState(P), b.triggerSyncEvent(P));
              var _ = b.props.onMouseLeave;
              J(_) && _(P, w);
            }),
            Y(b, "handleOuterEvent", function (w) {
              var P = vk(w),
                _ = Bt(b.props, "".concat(P));
              if (P && J(_)) {
                var A, $;
                (/.*touch.*/i.test(P)
                  ? ($ = b.getMouseInfo(w.changedTouches[0]))
                  : ($ = b.getMouseInfo(w)),
                  _((A = $) !== null && A !== void 0 ? A : {}, w));
              }
            }),
            Y(b, "handleClick", function (w) {
              var P = b.getMouseInfo(w);
              if (P) {
                var _ = k(k({}, P), {}, { isTooltipActive: !0 });
                (b.setState(_), b.triggerSyncEvent(_));
                var A = b.props.onClick;
                J(A) && A(_, w);
              }
            }),
            Y(b, "handleMouseDown", function (w) {
              var P = b.props.onMouseDown;
              if (J(P)) {
                var _ = b.getMouseInfo(w);
                P(_, w);
              }
            }),
            Y(b, "handleMouseUp", function (w) {
              var P = b.props.onMouseUp;
              if (J(P)) {
                var _ = b.getMouseInfo(w);
                P(_, w);
              }
            }),
            Y(b, "handleTouchMove", function (w) {
              w.changedTouches != null &&
                w.changedTouches.length > 0 &&
                b.throttleTriggeredAfterMouseMove(w.changedTouches[0]);
            }),
            Y(b, "handleTouchStart", function (w) {
              w.changedTouches != null &&
                w.changedTouches.length > 0 &&
                b.handleMouseDown(w.changedTouches[0]);
            }),
            Y(b, "handleTouchEnd", function (w) {
              w.changedTouches != null &&
                w.changedTouches.length > 0 &&
                b.handleMouseUp(w.changedTouches[0]);
            }),
            Y(b, "handleDoubleClick", function (w) {
              var P = b.props.onDoubleClick;
              if (J(P)) {
                var _ = b.getMouseInfo(w);
                P(_, w);
              }
            }),
            Y(b, "handleContextMenu", function (w) {
              var P = b.props.onContextMenu;
              if (J(P)) {
                var _ = b.getMouseInfo(w);
                P(_, w);
              }
            }),
            Y(b, "triggerSyncEvent", function (w) {
              b.props.syncId !== void 0 &&
                td.emit(rd, b.props.syncId, w, b.eventEmitterSymbol);
            }),
            Y(b, "applySyncEvent", function (w) {
              var P = b.props,
                _ = P.layout,
                A = P.syncMethod,
                $ = b.state.updateId,
                C = w.dataStartIndex,
                j = w.dataEndIndex;
              if (w.dataStartIndex !== void 0 || w.dataEndIndex !== void 0)
                b.setState(
                  k(
                    { dataStartIndex: C, dataEndIndex: j },
                    p(
                      {
                        props: b.props,
                        dataStartIndex: C,
                        dataEndIndex: j,
                        updateId: $,
                      },
                      b.state,
                    ),
                  ),
                );
              else if (w.activeTooltipIndex !== void 0) {
                var D = w.chartX,
                  N = w.chartY,
                  M = w.activeTooltipIndex,
                  L = b.state,
                  F = L.offset,
                  T = L.tooltipTicks;
                if (!F) return;
                if (typeof A == "function") M = A(T, w);
                else if (A === "value") {
                  M = -1;
                  for (var I = 0; I < T.length; I++)
                    if (T[I].value === w.activeLabel) {
                      M = I;
                      break;
                    }
                }
                var R = k(k({}, F), {}, { x: F.left, y: F.top }),
                  V = Math.min(D, R.x + R.width),
                  W = Math.min(N, R.y + R.height),
                  X = T[M] && T[M].value,
                  ne = Oh(b.state, b.props.data, M),
                  xe = T[M]
                    ? {
                        x: _ === "horizontal" ? T[M].coordinate : V,
                        y: _ === "horizontal" ? W : T[M].coordinate,
                      }
                    : __;
                b.setState(
                  k(
                    k({}, w),
                    {},
                    {
                      activeLabel: X,
                      activeCoordinate: xe,
                      activePayload: ne,
                      activeTooltipIndex: M,
                    },
                  ),
                );
              } else b.setState(w);
            }),
            Y(b, "renderCursor", function (w) {
              var P,
                _ = b.state,
                A = _.isTooltipActive,
                $ = _.activeCoordinate,
                C = _.activePayload,
                j = _.offset,
                D = _.activeTooltipIndex,
                N = _.tooltipAxisBandSize,
                M = b.getTooltipEventType(),
                L = (P = w.props.active) !== null && P !== void 0 ? P : A,
                F = b.props.layout,
                T = w.key || "_recharts-cursor";
              return E.createElement(FG, {
                key: T,
                activeCoordinate: $,
                activePayload: C,
                activeTooltipIndex: D,
                chartName: r,
                element: w,
                isActive: L,
                layout: F,
                offset: j,
                tooltipAxisBandSize: N,
                tooltipEventType: M,
              });
            }),
            Y(b, "renderPolarAxis", function (w, P, _) {
              var A = Bt(w, "type.axisType"),
                $ = Bt(b.state, "".concat(A, "Map")),
                C = w.type.defaultProps,
                j = C !== void 0 ? k(k({}, C), w.props) : w.props,
                D = $ && $[j["".concat(A, "Id")]];
              return B.cloneElement(
                w,
                k(
                  k({}, D),
                  {},
                  {
                    className: oe(A, D.className),
                    key: w.key || "".concat(P, "-").concat(_),
                    ticks: _r(D, !0),
                  },
                ),
              );
            }),
            Y(b, "renderPolarGrid", function (w) {
              var P = w.props,
                _ = P.radialLines,
                A = P.polarAngles,
                $ = P.polarRadius,
                C = b.state,
                j = C.radiusAxisMap,
                D = C.angleAxisMap,
                N = Yr(j),
                M = Yr(D),
                L = M.cx,
                F = M.cy,
                T = M.innerRadius,
                I = M.outerRadius;
              return B.cloneElement(w, {
                polarAngles: Array.isArray(A)
                  ? A
                  : _r(M, !0).map(function (R) {
                      return R.coordinate;
                    }),
                polarRadius: Array.isArray($)
                  ? $
                  : _r(N, !0).map(function (R) {
                      return R.coordinate;
                    }),
                cx: L,
                cy: F,
                innerRadius: T,
                outerRadius: I,
                key: w.key || "polar-grid",
                radialLines: _,
              });
            }),
            Y(b, "renderLegend", function () {
              var w = b.state.formattedGraphicalItems,
                P = b.props,
                _ = P.children,
                A = P.width,
                $ = P.height,
                C = b.props.margin || {},
                j = A - (C.left || 0) - (C.right || 0),
                D = mP({
                  children: _,
                  formattedGraphicalItems: w,
                  legendWidth: j,
                  legendContent: s,
                });
              if (!D) return null;
              var N = D.item,
                M = jx(D, BG);
              return B.cloneElement(
                N,
                k(
                  k({}, M),
                  {},
                  {
                    chartWidth: A,
                    chartHeight: $,
                    margin: C,
                    onBBoxUpdate: b.handleLegendBBoxUpdate,
                  },
                ),
              );
            }),
            Y(b, "renderTooltip", function () {
              var w,
                P = b.props,
                _ = P.children,
                A = P.accessibilityLayer,
                $ = Ot(_, Qt);
              if (!$) return null;
              var C = b.state,
                j = C.isTooltipActive,
                D = C.activeCoordinate,
                N = C.activePayload,
                M = C.activeLabel,
                L = C.offset,
                F = (w = $.props.active) !== null && w !== void 0 ? w : j;
              return B.cloneElement($, {
                viewBox: k(k({}, L), {}, { x: L.left, y: L.top }),
                active: F,
                label: M,
                payload: F ? N : [],
                coordinate: D,
                accessibilityLayer: A,
              });
            }),
            Y(b, "renderBrush", function (w) {
              var P = b.props,
                _ = P.margin,
                A = P.data,
                $ = b.state,
                C = $.offset,
                j = $.dataStartIndex,
                D = $.dataEndIndex,
                N = $.updateId;
              return B.cloneElement(w, {
                key: w.key || "_recharts-brush",
                onChange: au(b.handleBrushChange, w.props.onChange),
                data: A,
                x: H(w.props.x) ? w.props.x : C.left,
                y: H(w.props.y)
                  ? w.props.y
                  : C.top + C.height + C.brushBottom - (_.bottom || 0),
                width: H(w.props.width) ? w.props.width : C.width,
                startIndex: j,
                endIndex: D,
                updateId: "brush-".concat(N),
              });
            }),
            Y(b, "renderReferenceElement", function (w, P, _) {
              if (!w) return null;
              var A = b,
                $ = A.clipPathId,
                C = b.state,
                j = C.xAxisMap,
                D = C.yAxisMap,
                N = C.offset,
                M = w.type.defaultProps || {},
                L = w.props,
                F = L.xAxisId,
                T = F === void 0 ? M.xAxisId : F,
                I = L.yAxisId,
                R = I === void 0 ? M.yAxisId : I;
              return B.cloneElement(w, {
                key: w.key || "".concat(P, "-").concat(_),
                xAxis: j[T],
                yAxis: D[R],
                viewBox: {
                  x: N.left,
                  y: N.top,
                  width: N.width,
                  height: N.height,
                },
                clipPathId: $,
              });
            }),
            Y(b, "renderActivePoints", function (w) {
              var P = w.item,
                _ = w.activePoint,
                A = w.basePoint,
                $ = w.childIndex,
                C = w.isRange,
                j = [],
                D = P.props.key,
                N =
                  P.item.type.defaultProps !== void 0
                    ? k(k({}, P.item.type.defaultProps), P.item.props)
                    : P.item.props,
                M = N.activeDot,
                L = N.dataKey,
                F = k(
                  k(
                    {
                      index: $,
                      dataKey: L,
                      cx: _.x,
                      cy: _.y,
                      r: 4,
                      fill: hm(P.item),
                      strokeWidth: 2,
                      stroke: "#fff",
                      payload: _.payload,
                      value: _.value,
                    },
                    re(M, !1),
                  ),
                  Xu(M),
                );
              return (
                j.push(
                  v.renderActiveDot(
                    M,
                    F,
                    "".concat(D, "-activePoint-").concat($),
                  ),
                ),
                A
                  ? j.push(
                      v.renderActiveDot(
                        M,
                        k(k({}, F), {}, { cx: A.x, cy: A.y }),
                        "".concat(D, "-basePoint-").concat($),
                      ),
                    )
                  : C && j.push(null),
                j
              );
            }),
            Y(b, "renderGraphicChild", function (w, P, _) {
              var A = b.filterFormatItem(w, P, _);
              if (!A) return null;
              var $ = b.getTooltipEventType(),
                C = b.state,
                j = C.isTooltipActive,
                D = C.tooltipAxis,
                N = C.activeTooltipIndex,
                M = C.activeLabel,
                L = b.props.children,
                F = Ot(L, Qt),
                T = A.props,
                I = T.points,
                R = T.isRange,
                V = T.baseLine,
                W =
                  A.item.type.defaultProps !== void 0
                    ? k(k({}, A.item.type.defaultProps), A.item.props)
                    : A.item.props,
                X = W.activeDot,
                ne = W.hide,
                xe = W.activeBar,
                Te = W.activeShape,
                Ct = !!(!ne && j && F && (X || xe || Te)),
                ft = {};
              $ !== "axis" && F && F.props.trigger === "click"
                ? (ft = {
                    onClick: au(b.handleItemMouseEnter, w.props.onClick),
                  })
                : $ !== "axis" &&
                  (ft = {
                    onMouseLeave: au(
                      b.handleItemMouseLeave,
                      w.props.onMouseLeave,
                    ),
                    onMouseEnter: au(
                      b.handleItemMouseEnter,
                      w.props.onMouseEnter,
                    ),
                  });
              var K = B.cloneElement(w, k(k({}, A.props), ft));
              function Q(On) {
                return typeof D.dataKey == "function"
                  ? D.dataKey(On.payload)
                  : null;
              }
              if (Ct)
                if (N >= 0) {
                  var Z, z;
                  if (D.dataKey && !D.allowDuplicatedCategory) {
                    var Ae =
                      typeof D.dataKey == "function"
                        ? Q
                        : "payload.".concat(D.dataKey.toString());
                    ((Z = qu(I, Ae, M)), (z = R && V && qu(V, Ae, M)));
                  } else
                    ((Z = I == null ? void 0 : I[N]), (z = R && V && V[N]));
                  if (Te || xe) {
                    var ie =
                      w.props.activeIndex !== void 0 ? w.props.activeIndex : N;
                    return [
                      B.cloneElement(
                        w,
                        k(k(k({}, A.props), ft), {}, { activeIndex: ie }),
                      ),
                      null,
                      null,
                    ];
                  }
                  if (!ee(Z))
                    return [K].concat(
                      sa(
                        b.renderActivePoints({
                          item: A,
                          activePoint: Z,
                          basePoint: z,
                          childIndex: N,
                          isRange: R,
                        }),
                      ),
                    );
                } else {
                  var De,
                    Le =
                      (De = b.getItemByXY(b.state.activeCoordinate)) !== null &&
                      De !== void 0
                        ? De
                        : { graphicalItem: K },
                    dt = Le.graphicalItem,
                    Ur = dt.item,
                    ni = Ur === void 0 ? w : Ur,
                    kl = dt.childIndex,
                    Sn = k(k(k({}, A.props), ft), {}, { activeIndex: kl });
                  return [B.cloneElement(ni, Sn), null, null];
                }
              return R ? [K, null, null] : [K, null];
            }),
            Y(b, "renderCustomized", function (w, P, _) {
              return B.cloneElement(
                w,
                k(
                  k({ key: "recharts-customized-".concat(_) }, b.props),
                  b.state,
                ),
              );
            }),
            Y(b, "renderMap", {
              CartesianGrid: { handler: su, once: !0 },
              ReferenceArea: { handler: b.renderReferenceElement },
              ReferenceLine: { handler: su },
              ReferenceDot: { handler: b.renderReferenceElement },
              XAxis: { handler: su },
              YAxis: { handler: su },
              Brush: { handler: b.renderBrush, once: !0 },
              Bar: { handler: b.renderGraphicChild },
              Line: { handler: b.renderGraphicChild },
              Area: { handler: b.renderGraphicChild },
              Radar: { handler: b.renderGraphicChild },
              RadialBar: { handler: b.renderGraphicChild },
              Scatter: { handler: b.renderGraphicChild },
              Pie: { handler: b.renderGraphicChild },
              Funnel: { handler: b.renderGraphicChild },
              Tooltip: { handler: b.renderCursor, once: !0 },
              PolarGrid: { handler: b.renderPolarGrid, once: !0 },
              PolarAngleAxis: { handler: b.renderPolarAxis },
              PolarRadiusAxis: { handler: b.renderPolarAxis },
              Customized: { handler: b.renderCustomized },
            }),
            (b.clipPathId = "".concat(
              (g = h.id) !== null && g !== void 0 ? g : wl("recharts"),
              "-clip",
            )),
            (b.throttleTriggeredAfterMouseMove = vO(
              b.triggeredAfterMouseMove,
              (S = h.throttleDelay) !== null && S !== void 0 ? S : 1e3 / 60,
            )),
            (b.state = {}),
            b
          );
        }
        return (
          ZG(v, x),
          qG(v, [
            {
              key: "componentDidMount",
              value: function () {
                var g, S;
                (this.addListener(),
                  this.accessibilityManager.setDetails({
                    container: this.container,
                    offset: {
                      left:
                        (g = this.props.margin.left) !== null && g !== void 0
                          ? g
                          : 0,
                      top:
                        (S = this.props.margin.top) !== null && S !== void 0
                          ? S
                          : 0,
                    },
                    coordinateList: this.state.tooltipTicks,
                    mouseHandlerCallback: this.triggeredAfterMouseMove,
                    layout: this.props.layout,
                  }),
                  this.displayDefaultTooltip());
              },
            },
            {
              key: "displayDefaultTooltip",
              value: function () {
                var g = this.props,
                  S = g.children,
                  b = g.data,
                  w = g.height,
                  P = g.layout,
                  _ = Ot(S, Qt);
                if (_) {
                  var A = _.props.defaultIndex;
                  if (
                    !(
                      typeof A != "number" ||
                      A < 0 ||
                      A > this.state.tooltipTicks.length - 1
                    )
                  ) {
                    var $ =
                        this.state.tooltipTicks[A] &&
                        this.state.tooltipTicks[A].value,
                      C = Oh(this.state, b, A, $),
                      j = this.state.tooltipTicks[A].coordinate,
                      D = (this.state.offset.top + w) / 2,
                      N = P === "horizontal",
                      M = N ? { x: j, y: D } : { y: j, x: D },
                      L = this.state.formattedGraphicalItems.find(function (T) {
                        var I = T.item;
                        return I.type.name === "Scatter";
                      });
                    L &&
                      ((M = k(k({}, M), L.props.points[A].tooltipPosition)),
                      (C = L.props.points[A].tooltipPayload));
                    var F = {
                      activeTooltipIndex: A,
                      isTooltipActive: !0,
                      activeLabel: $,
                      activePayload: C,
                      activeCoordinate: M,
                    };
                    (this.setState(F),
                      this.renderCursor(_),
                      this.accessibilityManager.setIndex(A));
                  }
                }
              },
            },
            {
              key: "getSnapshotBeforeUpdate",
              value: function (g, S) {
                if (!this.props.accessibilityLayer) return null;
                if (
                  (this.state.tooltipTicks !== S.tooltipTicks &&
                    this.accessibilityManager.setDetails({
                      coordinateList: this.state.tooltipTicks,
                    }),
                  this.props.layout !== g.layout &&
                    this.accessibilityManager.setDetails({
                      layout: this.props.layout,
                    }),
                  this.props.margin !== g.margin)
                ) {
                  var b, w;
                  this.accessibilityManager.setDetails({
                    offset: {
                      left:
                        (b = this.props.margin.left) !== null && b !== void 0
                          ? b
                          : 0,
                      top:
                        (w = this.props.margin.top) !== null && w !== void 0
                          ? w
                          : 0,
                    },
                  });
                }
                return null;
              },
            },
            {
              key: "componentDidUpdate",
              value: function (g) {
                tp([Ot(g.children, Qt)], [Ot(this.props.children, Qt)]) ||
                  this.displayDefaultTooltip();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                (this.removeListener(),
                  this.throttleTriggeredAfterMouseMove.cancel());
              },
            },
            {
              key: "getTooltipEventType",
              value: function () {
                var g = Ot(this.props.children, Qt);
                if (g && typeof g.props.shared == "boolean") {
                  var S = g.props.shared ? "axis" : "item";
                  return l.indexOf(S) >= 0 ? S : a;
                }
                return a;
              },
            },
            {
              key: "getMouseInfo",
              value: function (g) {
                if (!this.container) return null;
                var S = this.container,
                  b = S.getBoundingClientRect(),
                  w = UB(b),
                  P = {
                    chartX: Math.round(g.pageX - w.left),
                    chartY: Math.round(g.pageY - w.top),
                  },
                  _ = b.width / S.offsetWidth || 1,
                  A = this.inRange(P.chartX, P.chartY, _);
                if (!A) return null;
                var $ = this.state,
                  C = $.xAxisMap,
                  j = $.yAxisMap,
                  D = this.getTooltipEventType(),
                  N = Tx(this.state, this.props.data, this.props.layout, A);
                if (D !== "axis" && C && j) {
                  var M = Yr(C).scale,
                    L = Yr(j).scale,
                    F = M && M.invert ? M.invert(P.chartX) : null,
                    T = L && L.invert ? L.invert(P.chartY) : null;
                  return k(k({}, P), {}, { xValue: F, yValue: T }, N);
                }
                return N ? k(k({}, P), N) : null;
              },
            },
            {
              key: "inRange",
              value: function (g, S) {
                var b =
                    arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : 1,
                  w = this.props.layout,
                  P = g / b,
                  _ = S / b;
                if (w === "horizontal" || w === "vertical") {
                  var A = this.state.offset,
                    $ =
                      P >= A.left &&
                      P <= A.left + A.width &&
                      _ >= A.top &&
                      _ <= A.top + A.height;
                  return $ ? { x: P, y: _ } : null;
                }
                var C = this.state,
                  j = C.angleAxisMap,
                  D = C.radiusAxisMap;
                if (j && D) {
                  var N = Yr(j);
                  return fb({ x: P, y: _ }, N);
                }
                return null;
              },
            },
            {
              key: "parseEventsOfWrapper",
              value: function () {
                var g = this.props.children,
                  S = this.getTooltipEventType(),
                  b = Ot(g, Qt),
                  w = {};
                b &&
                  S === "axis" &&
                  (b.props.trigger === "click"
                    ? (w = { onClick: this.handleClick })
                    : (w = {
                        onMouseEnter: this.handleMouseEnter,
                        onDoubleClick: this.handleDoubleClick,
                        onMouseMove: this.handleMouseMove,
                        onMouseLeave: this.handleMouseLeave,
                        onTouchMove: this.handleTouchMove,
                        onTouchStart: this.handleTouchStart,
                        onTouchEnd: this.handleTouchEnd,
                        onContextMenu: this.handleContextMenu,
                      }));
                var P = Xu(this.props, this.handleOuterEvent);
                return k(k({}, P), w);
              },
            },
            {
              key: "addListener",
              value: function () {
                td.on(rd, this.handleReceiveSyncEvent);
              },
            },
            {
              key: "removeListener",
              value: function () {
                td.removeListener(rd, this.handleReceiveSyncEvent);
              },
            },
            {
              key: "filterFormatItem",
              value: function (g, S, b) {
                for (
                  var w = this.state.formattedGraphicalItems,
                    P = 0,
                    _ = w.length;
                  P < _;
                  P++
                ) {
                  var A = w[P];
                  if (
                    A.item === g ||
                    A.props.key === g.key ||
                    (S === Er(A.item.type) && b === A.childIndex)
                  )
                    return A;
                }
                return null;
              },
            },
            {
              key: "renderClipPath",
              value: function () {
                var g = this.clipPathId,
                  S = this.state.offset,
                  b = S.left,
                  w = S.top,
                  P = S.height,
                  _ = S.width;
                return E.createElement(
                  "defs",
                  null,
                  E.createElement(
                    "clipPath",
                    { id: g },
                    E.createElement("rect", {
                      x: b,
                      y: w,
                      height: P,
                      width: _,
                    }),
                  ),
                );
              },
            },
            {
              key: "getXScales",
              value: function () {
                var g = this.state.xAxisMap;
                return g
                  ? Object.entries(g).reduce(function (S, b) {
                      var w = Ex(b, 2),
                        P = w[0],
                        _ = w[1];
                      return k(k({}, S), {}, Y({}, P, _.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: "getYScales",
              value: function () {
                var g = this.state.yAxisMap;
                return g
                  ? Object.entries(g).reduce(function (S, b) {
                      var w = Ex(b, 2),
                        P = w[0],
                        _ = w[1];
                      return k(k({}, S), {}, Y({}, P, _.scale));
                    }, {})
                  : null;
              },
            },
            {
              key: "getXScaleByAxisId",
              value: function (g) {
                var S;
                return (S = this.state.xAxisMap) === null ||
                  S === void 0 ||
                  (S = S[g]) === null ||
                  S === void 0
                  ? void 0
                  : S.scale;
              },
            },
            {
              key: "getYScaleByAxisId",
              value: function (g) {
                var S;
                return (S = this.state.yAxisMap) === null ||
                  S === void 0 ||
                  (S = S[g]) === null ||
                  S === void 0
                  ? void 0
                  : S.scale;
              },
            },
            {
              key: "getItemByXY",
              value: function (g) {
                var S = this.state,
                  b = S.formattedGraphicalItems,
                  w = S.activeItem;
                if (b && b.length)
                  for (var P = 0, _ = b.length; P < _; P++) {
                    var A = b[P],
                      $ = A.props,
                      C = A.item,
                      j =
                        C.type.defaultProps !== void 0
                          ? k(k({}, C.type.defaultProps), C.props)
                          : C.props,
                      D = Er(C.type);
                    if (D === "Bar") {
                      var N = ($.data || []).find(function (T) {
                        return j9(g, T);
                      });
                      if (N) return { graphicalItem: A, payload: N };
                    } else if (D === "RadialBar") {
                      var M = ($.data || []).find(function (T) {
                        return fb(g, T);
                      });
                      if (M) return { graphicalItem: A, payload: M };
                    } else if (Vc(A, w) || Kc(A, w) || al(A, w)) {
                      var L = CH({
                          graphicalItem: A,
                          activeTooltipItem: w,
                          itemData: j.data,
                        }),
                        F = j.activeIndex === void 0 ? L : j.activeIndex;
                      return {
                        graphicalItem: k(k({}, A), {}, { childIndex: F }),
                        payload: al(A, w) ? j.data[L] : A.props.data[L],
                      };
                    }
                  }
                return null;
              },
            },
            {
              key: "render",
              value: function () {
                var g = this;
                if (!tg(this)) return null;
                var S = this.props,
                  b = S.children,
                  w = S.className,
                  P = S.width,
                  _ = S.height,
                  A = S.style,
                  $ = S.compact,
                  C = S.title,
                  j = S.desc,
                  D = jx(S, zG),
                  N = re(D, !1);
                if ($)
                  return E.createElement(
                    sx,
                    {
                      state: this.state,
                      width: this.props.width,
                      height: this.props.height,
                      clipPathId: this.clipPathId,
                    },
                    E.createElement(
                      np,
                      Pi({}, N, { width: P, height: _, title: C, desc: j }),
                      this.renderClipPath(),
                      ng(b, this.renderMap),
                    ),
                  );
                if (this.props.accessibilityLayer) {
                  var M, L;
                  ((N.tabIndex =
                    (M = this.props.tabIndex) !== null && M !== void 0 ? M : 0),
                    (N.role =
                      (L = this.props.role) !== null && L !== void 0
                        ? L
                        : "application"),
                    (N.onKeyDown = function (T) {
                      g.accessibilityManager.keyboardEvent(T);
                    }),
                    (N.onFocus = function () {
                      g.accessibilityManager.focus();
                    }));
                }
                var F = this.parseEventsOfWrapper();
                return E.createElement(
                  sx,
                  {
                    state: this.state,
                    width: this.props.width,
                    height: this.props.height,
                    clipPathId: this.clipPathId,
                  },
                  E.createElement(
                    "div",
                    Pi(
                      {
                        className: oe("recharts-wrapper", w),
                        style: k(
                          {
                            position: "relative",
                            cursor: "default",
                            width: P,
                            height: _,
                          },
                          A,
                        ),
                      },
                      F,
                      {
                        ref: function (I) {
                          g.container = I;
                        },
                      },
                    ),
                    E.createElement(
                      np,
                      Pi({}, N, {
                        width: P,
                        height: _,
                        title: C,
                        desc: j,
                        style: iq,
                      }),
                      this.renderClipPath(),
                      ng(b, this.renderMap),
                    ),
                    this.renderLegend(),
                    this.renderTooltip(),
                  ),
                );
              },
            },
          ])
        );
      })(B.Component);
    (Y(m, "displayName", r),
      Y(
        m,
        "defaultProps",
        k(
          {
            layout: "horizontal",
            stackOffset: "none",
            barCategoryGap: "10%",
            barGap: 4,
            margin: { top: 5, right: 5, bottom: 5, left: 5 },
            reverseStackOrder: !1,
            syncMethod: "index",
          },
          c,
        ),
      ),
      Y(m, "getDerivedStateFromProps", function (x, v) {
        var h = x.dataKey,
          g = x.data,
          S = x.children,
          b = x.width,
          w = x.height,
          P = x.layout,
          _ = x.stackOffset,
          A = x.margin,
          $ = v.dataStartIndex,
          C = v.dataEndIndex;
        if (v.updateId === void 0) {
          var j = Cx(x);
          return k(
            k(
              k({}, j),
              {},
              { updateId: 0 },
              p(k(k({ props: x }, j), {}, { updateId: 0 }), v),
            ),
            {},
            {
              prevDataKey: h,
              prevData: g,
              prevWidth: b,
              prevHeight: w,
              prevLayout: P,
              prevStackOffset: _,
              prevMargin: A,
              prevChildren: S,
            },
          );
        }
        if (
          h !== v.prevDataKey ||
          g !== v.prevData ||
          b !== v.prevWidth ||
          w !== v.prevHeight ||
          P !== v.prevLayout ||
          _ !== v.prevStackOffset ||
          !Ci(A, v.prevMargin)
        ) {
          var D = Cx(x),
            N = {
              chartX: v.chartX,
              chartY: v.chartY,
              isTooltipActive: v.isTooltipActive,
            },
            M = k(k({}, Tx(v, g, P)), {}, { updateId: v.updateId + 1 }),
            L = k(k(k({}, D), N), M);
          return k(
            k(k({}, L), p(k({ props: x }, L), v)),
            {},
            {
              prevDataKey: h,
              prevData: g,
              prevWidth: b,
              prevHeight: w,
              prevLayout: P,
              prevStackOffset: _,
              prevMargin: A,
              prevChildren: S,
            },
          );
        }
        if (!tp(S, v.prevChildren)) {
          var F,
            T,
            I,
            R,
            V = Ot(S, Ji),
            W =
              V &&
              (F =
                (T = V.props) === null || T === void 0
                  ? void 0
                  : T.startIndex) !== null &&
              F !== void 0
                ? F
                : $,
            X =
              V &&
              (I =
                (R = V.props) === null || R === void 0
                  ? void 0
                  : R.endIndex) !== null &&
              I !== void 0
                ? I
                : C,
            ne = W !== $ || X !== C,
            xe = !ee(g),
            Te = xe && !ne ? v.updateId : v.updateId + 1;
          return k(
            k(
              { updateId: Te },
              p(
                k(
                  k({ props: x }, v),
                  {},
                  { updateId: Te, dataStartIndex: W, dataEndIndex: X },
                ),
                v,
              ),
            ),
            {},
            { prevChildren: S, dataStartIndex: W, dataEndIndex: X },
          );
        }
        return null;
      }),
      Y(m, "renderActiveDot", function (x, v, h) {
        var g;
        return (
          B.isValidElement(x)
            ? (g = B.cloneElement(x, v))
            : J(x)
              ? (g = x(v))
              : (g = E.createElement(mm, v)),
          E.createElement(ke, { className: "recharts-active-dot", key: h }, g)
        );
      }));
    var y = B.forwardRef(function (v, h) {
      return E.createElement(m, Pi({}, v, { ref: h }));
    });
    return ((y.displayName = m.displayName), y);
  },
  E_ = hq({
    chartName: "LineChart",
    GraphicalChild: Ea,
    axisComponents: [
      { axisType: "xAxis", AxisComp: Tl },
      { axisType: "yAxis", AxisComp: Cl },
    ],
    formatAxisMap: rV,
  });
const id = "#d9192c",
  j_ = "#26282e",
  Xs = "#97999f";
function vq({ data: e, targetRange: t }) {
  const r = e.map((n) => ({
    diameter: n.diameterIn,
    velocity: Math.round(n.velocityFtMin),
  }));
  return O.jsxs(je, {
    children: [
      O.jsx(pn, {
        eyebrow: "Gráfico",
        title: "Diâmetro × velocidade dos gases",
        children:
          "Quanto maior o diâmetro, menor a velocidade — a área sombreada é a faixa-alvo escolhida.",
      }),
      O.jsx("div", {
        style: { width: "100%", height: 280 },
        children: O.jsx(mO, {
          children: O.jsxs(E_, {
            data: r,
            margin: { top: 10, right: 16, left: 0, bottom: 0 },
            children: [
              O.jsx(Am, { stroke: j_, strokeDasharray: "3 3" }),
              O.jsx(Tl, {
                dataKey: "diameter",
                stroke: Xs,
                tickFormatter: (n) => `${n}"`,
                fontSize: 12,
              }),
              O.jsx(Cl, {
                stroke: Xs,
                fontSize: 12,
                tickFormatter: (n) => `${(n / 1e3).toFixed(0)}k`,
                width: 40,
              }),
              O.jsx(Qt, {
                contentStyle: {
                  background: "#17181c",
                  border: "1px solid #37393f",
                  borderRadius: 8,
                  fontSize: 13,
                },
                labelFormatter: (n) => `Diâmetro ${n}"`,
                formatter: (n) => [
                  `${n.toLocaleString("pt-BR")} ft/min`,
                  "Velocidade",
                ],
              }),
              O.jsx($l, {
                y1: t.minFtMin,
                y2: t.maxFtMin,
                fill: id,
                fillOpacity: 0.1,
              }),
              O.jsx(Ea, {
                type: "monotone",
                dataKey: "velocity",
                stroke: id,
                strokeWidth: 2.5,
                dot: { r: 3, fill: id },
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function mq({ data: e }) {
  const t = e.map((r) => ({
    rpm: r.rpm,
    velocity: Math.round(r.velocityFtMin),
  }));
  return O.jsxs(je, {
    children: [
      O.jsx(pn, {
        eyebrow: "Gráfico",
        title: "Velocidade dos gases por RPM",
        children:
          "Mesmo diâmetro de tubo, comportamento diferente em cada faixa de rotação.",
      }),
      O.jsx("div", {
        style: { width: "100%", height: 280 },
        children: O.jsx(mO, {
          children: O.jsxs(E_, {
            data: t,
            margin: { top: 10, right: 16, left: 0, bottom: 0 },
            children: [
              O.jsx(Am, { stroke: j_, strokeDasharray: "3 3" }),
              O.jsx(Tl, { dataKey: "rpm", stroke: Xs, fontSize: 12 }),
              O.jsx(Cl, {
                stroke: Xs,
                fontSize: 12,
                tickFormatter: (r) => `${(r / 1e3).toFixed(0)}k`,
                width: 40,
              }),
              O.jsx(Qt, {
                contentStyle: {
                  background: "#17181c",
                  border: "1px solid #37393f",
                  borderRadius: 8,
                  fontSize: 13,
                },
                labelFormatter: (r) => `${r} RPM`,
                formatter: (r) => [
                  `${r.toLocaleString("pt-BR")} ft/min`,
                  "Velocidade",
                ],
              }),
              O.jsx(Ea, {
                type: "monotone",
                dataKey: "velocity",
                stroke: "#f1f1ee",
                strokeWidth: 2.5,
                dot: { r: 3, fill: "#f1f1ee" },
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
const yq = [
  {
    title: "1. Vazão de admissão (CFM)",
    formula: "CFM = CID × RPM × VE / 3456",
    vars: [
      "CID — cilindrada em polegadas cúbicas (in³)",
      "RPM — rotação do motor",
      "VE — eficiência volumétrica (decimal)",
      "3456 — constante padrão para motores 4 tempos",
    ],
  },
  {
    title: "2. Densidade do gás (gás ideal)",
    formula: "ρ = P / (R × T)",
    vars: [
      "P — pressão absoluta (Pa)",
      "R — constante específica do gás (≈287 J/kg·K)",
      "T — temperatura absoluta (K)",
    ],
  },
  {
    title: "3. Vazão mássica",
    formula: "ṁ = ρ × Q",
    vars: ["ρ — densidade (kg/m³)", "Q — vazão volumétrica (m³/s)"],
  },
  {
    title: "4. Vazão mássica do escape (conservação de massa)",
    formula: "ṁ_escape = ṁ_ar × (1 + 1/AFR)",
    vars: [
      "ṁ_ar — vazão mássica de ar admitido",
      "AFR — relação ar/combustível",
    ],
  },
  {
    title: "5. Vazão volumétrica do escape",
    formula: "Q_escape = ṁ_escape / ρ_escape",
    vars: [
      "ρ_escape calculada com a temperatura real dos gases de escape (muito maior que a do ar admitido)",
    ],
  },
  {
    title: "6. Área do tubo",
    formula: "A = π × D² / 4",
    vars: ["D — diâmetro interno do tubo"],
  },
  {
    title: "7. Velocidade dos gases",
    formula: "v = Q / A",
    vars: ["Q — vazão volumétrica no tubo", "A — área de seção transversal"],
  },
];
function gq({ result: e }) {
  const [t, r] = B.useState(!1),
    { intake: n, exhaustFlow: i, recommendation: a } = e;
  return O.jsxs(je, {
    children: [
      O.jsx(pn, {
        eyebrow: "Transparência",
        title: "Como calculamos?",
        children:
          "Nenhuma fórmula fica escondida — veja as equações e, se quiser, os valores intermediários do seu cálculo.",
      }),
      O.jsx("div", {
        className: "formula-list",
        children: yq.map((o) =>
          O.jsxs(
            "div",
            {
              className: "formula-item",
              children: [
                O.jsx("div", {
                  className: "formula-item-title",
                  children: o.title,
                }),
                O.jsx("div", { className: "formula-eq", children: o.formula }),
                O.jsx("ul", {
                  className: "formula-vars",
                  children: o.vars.map((l) => O.jsx("li", { children: l }, l)),
                }),
              ],
            },
            o.title,
          ),
        ),
      }),
      O.jsx("button", {
        type: "button",
        className: "btn btn-outline",
        onClick: () => r((o) => !o),
        children: t ? "Ocultar cálculo completo" : "Ver cálculo completo",
      }),
      t &&
        O.jsxs("div", {
          className: "full-calc",
          children: [
            O.jsxs("div", {
              className: "full-calc-row",
              children: [
                O.jsx("span", { children: "CID (in³)" }),
                O.jsx("span", {
                  className: "mono",
                  children: n.cidInCubicInches.toFixed(3),
                }),
              ],
            }),
            O.jsxs("div", {
              className: "full-calc-row",
              children: [
                O.jsx("span", { children: "CFM de admissão" }),
                O.jsx("span", {
                  className: "mono",
                  children: n.cfm.toFixed(3),
                }),
              ],
            }),
            O.jsxs("div", {
              className: "full-calc-row",
              children: [
                O.jsx("span", { children: "Densidade do ar de admissão (ρ)" }),
                O.jsxs("span", {
                  className: "mono",
                  children: [n.airDensityKgM3.toFixed(4), " kg/m³"],
                }),
              ],
            }),
            O.jsxs("div", {
              className: "full-calc-row",
              children: [
                O.jsx("span", { children: "Vazão mássica de ar (ṁ_ar)" }),
                O.jsxs("span", {
                  className: "mono",
                  children: [(n.airMassFlowKgS * 1e3).toFixed(3), " g/s"],
                }),
              ],
            }),
            O.jsxs("div", {
              className: "full-calc-row",
              children: [
                O.jsx("span", { children: "Temperatura de escape (K)" }),
                O.jsxs("span", {
                  className: "mono",
                  children: [i.egtKelvin.toFixed(2), " K"],
                }),
              ],
            }),
            O.jsxs("div", {
              className: "full-calc-row",
              children: [
                O.jsx("span", {
                  children: "Densidade dos gases de escape (ρ_escape)",
                }),
                O.jsxs("span", {
                  className: "mono",
                  children: [i.exhaustDensityKgM3.toFixed(4), " kg/m³"],
                }),
              ],
            }),
            O.jsxs("div", {
              className: "full-calc-row",
              children: [
                O.jsx("span", {
                  children: "Vazão mássica do escape (ṁ_escape)",
                }),
                O.jsxs("span", {
                  className: "mono",
                  children: [(i.exhaustMassFlowKgS * 1e3).toFixed(3), " g/s"],
                }),
              ],
            }),
            O.jsxs("div", {
              className: "full-calc-row",
              children: [
                O.jsx("span", {
                  children: "Vazão volumétrica do escape (Q_escape)",
                }),
                O.jsxs("span", {
                  className: "mono",
                  children: [i.exhaustCfm.toFixed(3), " CFM"],
                }),
              ],
            }),
            O.jsxs("div", {
              className: "full-calc-row",
              children: [
                O.jsx("span", { children: "Vazão por tubo" }),
                O.jsxs("span", {
                  className: "mono",
                  children: [a.perPipeCfm.toFixed(3), " CFM"],
                }),
              ],
            }),
            O.jsxs("div", {
              className: "full-calc-row",
              children: [
                O.jsx("span", {
                  children: "Diâmetro calculado (velocidade-alvo média)",
                }),
                O.jsxs("span", {
                  className: "mono",
                  children: [a.calculatedDiameterIn.toFixed(4), '"'],
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
function bq({ assumptions: e }) {
  return O.jsxs(je, {
    children: [
      O.jsx(pn, {
        eyebrow: "Premissas",
        title: "Premissas utilizadas neste cálculo",
        children:
          "Valores marcados com ⚠️ foram assumidos e podem não corresponder exatamente ao seu motor.",
      }),
      O.jsx("ul", {
        className: "assumptions-list",
        children: e.map((t) =>
          O.jsxs(
            "li",
            {
              children: [
                O.jsx("span", { children: t.label }),
                O.jsxs("span", {
                  className: "mono",
                  children: [
                    t.value,
                    " ",
                    t.isAssumed &&
                      O.jsx("span", {
                        title: "Valor assumido",
                        children: "⚠️",
                      }),
                  ],
                }),
              ],
            },
            t.key,
          ),
        ),
      }),
    ],
  });
}
const xq = [
  "comando de válvulas",
  "cabeçote",
  "coletor",
  "catalisador",
  "abafadores",
  "curvas",
  "comprimento da tubulação",
  "rugosidade interna",
  "temperatura real",
  "pressão real",
  "pulsação dos gases",
  "restrições existentes no sistema",
  "potência real entregue",
  "faixa de utilização do motor",
];
function wq() {
  return O.jsxs("div", {
    className: "limitations-box",
    children: [
      O.jsx("div", { className: "limitations-title", children: "Importante" }),
      O.jsxs("p", {
        children: [
          "Esta ferramenta fornece uma ",
          O.jsx("strong", { children: "estimativa de dimensionamento" }),
          " baseada em conservação de massa, gás ideal e geometria de tubulação — não é uma simulação de CFD (dinâmica dos fluidos computacional).",
        ],
      }),
      O.jsx("p", {
        children: "O resultado real de um sistema de escape depende também de:",
      }),
      O.jsx("ul", {
        className: "limitations-list",
        children: xq.map((e) => O.jsx("li", { children: e }, e)),
      }),
      O.jsx("p", {
        children:
          'Nenhum diâmetro, por si só, "gera X cavalos". Trate os resultados como um ponto de partida de engenharia, não como uma garantia de potência, torque ou desempenho.',
      }),
    ],
  });
}
function dl(e) {
  if (e <= 0) throw new Error("Diâmetro deve ser positivo");
  const t = gj(e);
  return (Math.PI * t * t) / 4;
}
function Ph(e) {
  if (e <= 0) throw new Error("Diâmetro deve ser positivo");
  return (Math.PI * e * e) / 4;
}
function Su(e) {
  if (e <= 0) throw new Error("Área deve ser positiva");
  return Math.sqrt((4 * e) / Math.PI) * 12;
}
function pl(e, t) {
  if (t <= 0) throw new Error("Área deve ser positiva");
  return e / t;
}
function Sq(e) {
  return xj(e);
}
function $_(e, t, r, n = 0.3) {
  return e > r * (1 + n)
    ? "muito_pequeno"
    : e > r
      ? "pequeno"
      : e >= t
        ? "ideal"
        : e >= t * (1 - n)
          ? "grande"
          : "muito_grande";
}
function Oq(e, t, r, n = pa) {
  return n.map((i) => {
    const a = dl(i),
      o = Ph(i),
      l = pl(e, a),
      u = Sq(l),
      s = $_(l, t, r);
    return {
      diameterIn: i,
      areaFt2: a,
      areaIn2: o,
      velocityFtMin: l,
      velocityMs: u,
      status: s,
    };
  });
}
function T_(e, t = pa) {
  const r = [...t].sort((i, a) => i - a);
  return r.find((i) => i >= e) ?? r[r.length - 1];
}
function Pq(e, t, r, n, i = pa) {
  if (t <= 0) throw new Error("Número de tubos deve ser positivo");
  const a = e / t,
    o = (r + n) / 2,
    l = a / o,
    u = Su(l),
    s = a / n,
    f = a / r,
    c = Su(s),
    d = Su(f),
    h = [...i].sort((g, v) => g - v),
    p =
      h
        .filter((g) => g >= c && g <= d)
        .sort((g, v) => Math.abs(g - u) - Math.abs(v - u))[0] ??
      h.sort((g, v) => Math.abs(g - u) - Math.abs(v - u))[0],
    m = pl(a, dl(p)),
    y = $_(m, r, n);
  return {
    calculatedDiameterIn: u,
    nextCommercialDiameterIn: p,
    recommendedRangeIn: [c, d],
    status: y,
    perPipeCfm: a,
  };
}
const _q = 1.3,
  Aq = 287;
function C_(e, t = _q) {
  const r = Gu(e);
  return Math.sqrt(t * Aq * r);
}
function Eq(e, t) {
  if (e <= 0) throw new Error("RPM alvo deve ser positivo");
  const n = (C_(t) * 15) / e;
  return yj(n);
}
function jq(e) {
  const {
    totalExhaustCfm: t,
    cylinders: r,
    primaryCount: n,
    rpmTarget: i,
    egtC: a,
    targetMinFtMin: o,
    targetMaxFtMin: l,
  } = e;
  if (r <= 0 || n <= 0)
    throw new Error("Número de cilindros e primários deve ser positivo");
  const u = t / r,
    s = (o + l) / 2,
    f = u / s,
    c = Su(f),
    d = T_(c, [1.25, 1.375, 1.5, 1.625, 1.75, 1.875, 2]),
    p = Eq(i, a),
    m = C_(a);
  return {
    perCylinderCfm: u,
    recommendedDiameterIn: c,
    nextCommercialDiameterIn: d,
    estimatedLengthIn: p,
    speedOfSoundMs: m,
  };
}
function $q({ form: e, result: t }) {
  const r = jq({
    totalExhaustCfm: t.exhaustFlow.exhaustCfm,
    cylinders: e.cylinders,
    primaryCount: e.headerPrimaryCount,
    rpmTarget: e.headerRpmTarget,
    egtC: e.egt,
    targetMinFtMin: 9e3,
    targetMaxFtMin: 15e3,
  });
  return O.jsxs(je, {
    children: [
      O.jsx(pn, {
        eyebrow: "Coletor",
        title: "Dimensionamento de primários (header)",
        children:
          "Estimativa acústica simplificada — ponto de partida, não um valor exato.",
      }),
      O.jsxs("div", {
        className: "results-grid",
        style: { marginTop: 4 },
        children: [
          O.jsxs("div", {
            className: "stat-block",
            children: [
              O.jsx("div", {
                className: "stat-label",
                children: "Vazão por cilindro",
              }),
              O.jsxs("div", {
                className: "stat-value",
                children: [
                  r.perCylinderCfm.toFixed(1),
                  O.jsx("span", { className: "stat-unit", children: "CFM" }),
                ],
              }),
            ],
          }),
          O.jsxs("div", {
            className: "stat-block",
            children: [
              O.jsx("div", {
                className: "stat-label",
                children: "Diâmetro recomendado",
              }),
              O.jsxs("div", {
                className: "stat-value",
                children: [
                  r.nextCommercialDiameterIn.toFixed(3),
                  O.jsx("span", { className: "stat-unit", children: '"' }),
                ],
              }),
              O.jsxs("div", {
                className: "stat-sub",
                children: [
                  "Calculado: ",
                  r.recommendedDiameterIn.toFixed(3),
                  '"',
                ],
              }),
            ],
          }),
          O.jsxs("div", {
            className: "stat-block",
            children: [
              O.jsx("div", {
                className: "stat-label",
                children: "Comprimento estimado",
              }),
              O.jsxs("div", {
                className: "stat-value",
                children: [
                  r.estimatedLengthIn.toFixed(1),
                  O.jsx("span", { className: "stat-unit", children: "in" }),
                ],
              }),
              O.jsxs("div", {
                className: "stat-sub",
                children: [
                  "Sintonizado para ~",
                  e.headerRpmTarget.toLocaleString("pt-BR"),
                  " RPM",
                ],
              }),
            ],
          }),
        ],
      }),
      O.jsxs("p", {
        className: "field-note",
        style: { marginTop: 12 },
        children: [
          O.jsx("strong", { children: "Estimativa acústica simplificada." }),
          " O comprimento real de um primário depende de ordem de ignição (",
          e.headerIgnitionOrder || "não informada",
          "), cam overlap, duração de válvulas, velocidade real da onda de pressão, temperatura, geometria do coletor, comprimento efetivo, diâmetro e formato do collector. Use este número como ponto de partida para testes, não como valor final.",
        ],
      }),
    ],
  });
}
function Tq({ result: e, currentDiameterIn: t }) {
  const [r, n] = B.useState(!1);
  if (!t || t <= 0)
    return O.jsx(je, {
      children: O.jsx(pn, {
        eyebrow: "Simulação",
        title: "Sistema atual vs. recomendado",
        children:
          'Informe o diâmetro atual do seu escape (seção "Escape") para comparar com a recomendação.',
      }),
    });
  const i = e.recommendation.nextCommercialDiameterIn,
    a = e.recommendation.perPipeCfm,
    o = Ph(t),
    l = Ph(i),
    u = pl(a, dl(t)),
    s = pl(a, dl(i)),
    f = ((l - o) / o) * 100,
    c = ((s - u) / u) * 100;
  return O.jsxs(je, {
    children: [
      O.jsx(pn, {
        eyebrow: "Simulação",
        title: "Sistema atual vs. recomendado",
      }),
      O.jsx("button", {
        type: "button",
        className: "btn btn-primary",
        onClick: () => n(!0),
        children: "Simular",
      }),
      r &&
        O.jsxs("div", {
          className: "simulation-result",
          children: [
            O.jsxs("div", {
              className: "sim-col",
              children: [
                O.jsx("div", {
                  className: "stat-label",
                  children: "Sistema atual",
                }),
                O.jsxs("div", {
                  className: "stat-value",
                  children: [t.toFixed(2), '"'],
                }),
                O.jsxs("div", {
                  className: "stat-sub",
                  children: [
                    u.toLocaleString("pt-BR", { maximumFractionDigits: 0 }),
                    " ft/min",
                  ],
                }),
              ],
            }),
            O.jsxs("div", {
              className: "sim-col",
              children: [
                O.jsx("div", {
                  className: "stat-label",
                  children: "Sistema recomendado",
                }),
                O.jsxs("div", {
                  className: "stat-value",
                  children: [i.toFixed(2), '"'],
                }),
                O.jsxs("div", {
                  className: "stat-sub",
                  children: [
                    s.toLocaleString("pt-BR", { maximumFractionDigits: 0 }),
                    " ft/min",
                  ],
                }),
              ],
            }),
            O.jsxs("div", {
              className: "sim-col",
              children: [
                O.jsx("div", {
                  className: "stat-label",
                  children: "Diferença",
                }),
                O.jsxs("div", {
                  className: "stat-sub",
                  children: ["Área: ", f >= 0 ? "+" : "", f.toFixed(1), "%"],
                }),
                O.jsxs("div", {
                  className: "stat-sub",
                  children: [
                    "Velocidade: ",
                    c >= 0 ? "+" : "",
                    c.toFixed(1),
                    "%",
                  ],
                }),
                O.jsxs("div", {
                  className: "stat-sub",
                  children: [
                    "Vazão por tubo: ",
                    a.toFixed(1),
                    " CFM (igual nos dois casos)",
                  ],
                }),
              ],
            }),
          ],
        }),
      O.jsx("p", {
        className: "field-note",
        children:
          "Esta comparação mostra apenas mudanças de área, velocidade e vazão — não afirma um ganho específico de cavalos ou torque.",
      }),
    ],
  });
}
const Mx = {
  displacement: 1.6,
  displacementUnit: "L",
  cylinders: 4,
  aspiration: "aspirado",
  rpmMax: 6500,
  rpmTorquePeak: "",
  rpmPowerPeak: "",
  power: "",
  powerUnit: "cv",
  vePreset: "na_original",
  ve: 0.85,
  fuel: "gasolina",
  afr: "",
  layout: "simples",
  pipeCount: 1,
  currentDiameterIn: "",
  customDiameters: [],
  goal: "rua",
  customTargetMin: 5e3,
  customTargetMax: 8e3,
  egtPreset: "uso_normal",
  egt: 600,
  egtUnit: "C",
  atmPressure: 101.325,
  backpressure: 0,
  pressureUnit: "kPa",
  useAbsolutePressure: !1,
  absolutePressure: 150,
  headerEnabled: !1,
  headerRpmTarget: 5500,
  headerPrimaryCount: 4,
  headerIgnitionOrder: "1-3-4-2",
};
function Nx(e, t, r) {
  if (e <= 0 || t <= 0 || r <= 0)
    throw new Error("CID, RPM e VE devem ser valores positivos");
  return (e * t * r) / 3456;
}
const k_ = 287.05,
  Cq = 287;
function M_(e, t, r = k_) {
  if (e <= 0 || t <= 0 || r <= 0)
    throw new Error("Pressão, temperatura e R devem ser valores positivos");
  return e / (r * t);
}
function kq(e, t) {
  return e * t;
}
function Mq(e, t) {
  if (t <= 0) throw new Error("AFR deve ser positivo");
  return e * (1 + 1 / t);
}
function Ix(e, t, r) {
  const n = Gu(r.temperatureC),
    i = Qw(r.pressureKPa),
    a = M_(i, n, k_),
    o = hj(t),
    l = kq(a, o);
  return {
    cidInCubicInches: e,
    cfm: t,
    m3s: o,
    airDensityKgM3: a,
    airMassFlowKgS: l,
  };
}
function Dx(e, t, r, n) {
  const i = Mq(e, t),
    a = Gu(n.egtC),
    o = Qw(n.exhaustPressureKPa),
    l = M_(o, a, Cq),
    u = i / l;
  return {
    exhaustMassFlowKgS: i,
    exhaustDensityKgM3: l,
    exhaustVolumetricFlowM3S: u,
    exhaustCfm: vj(u),
    exhaustLps: mj(u),
    egtKelvin: a,
    intakeKelvin: Gu(r),
    exhaustPressurePa: o,
  };
}
const Nq = { gasolina: 14.7, etanol: 9, flex: 12, diesel: 14.5, outro: 14.7 },
  Ga = 25,
  Lx = 101.325;
function Iq(e) {
  return e.useAbsolutePressure && e.absolutePressureKPa
    ? e.absolutePressureKPa
    : e.atmPressureKPa + e.backpressureKPa;
}
function Dq(e) {
  const { engine: t, exhaust: r, targetRange: n } = e,
    i = e.diametersToCompare ?? pa,
    a = t.afr ?? Nq[t.fuel],
    o = t.afr === void 0,
    l = lj(t.displacementL),
    u = Nx(l, t.rpmMax, t.ve),
    s = Ix(l, u, { pressureKPa: Lx, temperatureC: Ga }),
    f = Iq(r),
    c = Dx(s.airMassFlowKgS, a, Ga, { egtC: r.egtC, exhaustPressureKPa: f }),
    q = Dx(s.airMassFlowKgS, a, Ga, { egtC: 250, exhaustPressureKPa: f }),
    d = q.exhaustCfm / r.pipeCount,
    p = Oq(d, n.minFtMin, n.maxFtMin, i),
    m = Pq(q.exhaustCfm, r.pipeCount, n.minFtMin, n.maxFtMin, i),
    y = e.rpmSweepPoints ?? [1e3, 2e3, 3e3, 4e3, 5e3, 6e3, 7e3],
    x = r.currentDiameterIn ?? m.nextCommercialDiameterIn,
    v = dl(x),
    h = y.map((S) => {
      const b = Nx(l, S, t.ve),
        w = Ix(l, b, { pressureKPa: Lx, temperatureC: Ga }),
        P = Dx(w.airMassFlowKgS, a, Ga, {
          egtC: r.egtC,
          exhaustPressureKPa: f,
        }),
        _ = P.exhaustCfm / r.pipeCount,
        A = pl(_, v);
      return {
        rpm: S,
        cfmIntake: b,
        exhaustCfm: P.exhaustCfm,
        velocityFtMin: A,
      };
    }),
    g = [
      {
        key: "ve",
        label: "Eficiência volumétrica (VE)",
        value: `${(t.ve * 100).toFixed(0)}%`,
        isAssumed: !1,
      },
      {
        key: "egt",
        label: "Temperatura dos gases de escape (EGT)",
        value: `${r.egtC} °C`,
        isAssumed: !0,
      },
      {
        key: "pressure",
        label: "Pressão no sistema de escape",
        value: `${f.toFixed(1)} kPa`,
        isAssumed: r.backpressureKPa === 0 && !r.useAbsolutePressure,
      },
      {
        key: "afr",
        label: "AFR (relação ar/combustível)",
        value: `${a.toFixed(1)}:1`,
        isAssumed: o,
      },
      {
        key: "rpm",
        label: "RPM de referência",
        value: `${t.rpmMax}`,
        isAssumed: !1,
      },
      {
        key: "pipes",
        label: "Número de tubos",
        value: `${r.pipeCount}`,
        isAssumed: !1,
      },
      {
        key: "intake_temp",
        label: "Temperatura do ar de admissão",
        value: `${Ga} °C`,
        isAssumed: !0,
      },
      {
        key: "exhaust_gas_constant",
        label: "Constante de gás dos produtos de escape",
        value: "aproximada à do ar (R ≈ 287 J/kg·K)",
        isAssumed: !0,
      },
    ];
  return {
    intake: s,
    exhaustFlow: c,
    comparison: p,
    recommendation: m,
    rpmSweep: h,
    assumptions: g,
  };
}
function Lq() {
  const [e, t] = B.useState(Mx);
  function r(c) {
    t((d) => ({ ...d, ...c }));
  }
  function n() {
    t({
      ...Mx,
      displacement: Hr.displacementL,
      displacementUnit: "L",
      cylinders: Hr.cylinders,
      aspiration: Hr.aspiration,
      rpmMax: Hr.rpmMax,
      vePreset: Hr.vePreset,
      ve: Hr.ve,
      fuel: Hr.fuel,
      afr: "",
      layout: "simples",
      pipeCount: Hr.pipeCount,
      currentDiameterIn: Hr.currentDiameterIn,
      power: Hr.power,
      powerUnit: Hr.powerUnit,
      egtPreset: "uso_normal",
      egt: Hr.egtC,
      egtUnit: "C",
      atmPressure: 101.325,
      backpressure: 0,
      pressureUnit: "kPa",
      goal: "original",
    });
  }
  const i = Zd.find((c) => c.id === e.goal) ?? Zd[1],
    a = B.useMemo(
      () =>
        e.goal === "customizado"
          ? {
              id: "customizado",
              label: "Customizado",
              minFtMin: e.customTargetMin,
              maxFtMin: e.customTargetMax,
              description: "Faixa definida manualmente pelo usuário.",
            }
          : (By.find((c) => c.id === i.targetRangeId) ?? By[1]),
      [e.goal, e.customTargetMin, e.customTargetMax, i.targetRangeId],
    ),
    o = B.useMemo(() => {
      const c = new Set([...pa, ...e.customDiameters]);
      return Array.from(c).sort((d, p) => d - p);
    }, [e.customDiameters]),
    l = e.displacementUnit === "L" ? e.displacement : uj(e.displacement),
    u = e.currentDiameterIn ? parseFloat(e.currentDiameterIn) : void 0,
    s = e.afr ? parseFloat(e.afr) : void 0,
    f = B.useMemo(() => {
      try {
        return Dq({
          engine: {
            displacementL: l,
            cylinders: e.cylinders,
            aspiration: e.aspiration,
            rpmMax: e.rpmMax,
            ve: e.ve,
            fuel: e.fuel,
            afr: s,
          },
          exhaust: {
            layout: e.layout,
            pipeCount: e.pipeCount,
            currentDiameterIn: u,
            egtC: e.egt,
            atmPressureKPa: e.atmPressure,
            backpressureKPa: e.backpressure,
            useAbsolutePressure:
              e.aspiration !== "aspirado" && e.useAbsolutePressure,
            absolutePressureKPa: e.absolutePressure,
          },
          targetRange: a,
          diametersToCompare: o,
        });
      } catch {
        return null;
      }
    }, [
      l,
      e.cylinders,
      e.aspiration,
      e.rpmMax,
      e.ve,
      e.fuel,
      s,
      e.layout,
      e.pipeCount,
      u,
      e.egt,
      e.atmPressure,
      e.backpressure,
      e.useAbsolutePressure,
      e.absolutePressure,
      a,
      o,
    ]);
  return O.jsxs("div", {
    className: "app-shell",
    children: [
      O.jsx("header", {
        className: "app-header",
        children: O.jsxs("div", {
          className: "app-header-inner",
          children: [
            O.jsxs("div", {
              className: "brand",
              children: [
                O.jsx("div", { className: "brand-mark", children: "FO" }),
                O.jsxs("div", {
                  children: [
                    O.jsx("h1", { children: "FlatOut Exhaust Calculator" }),
                    O.jsx("p", {
                      className: "brand-sub",
                      children: "Exhaust sizing & gas velocity calculator",
                    }),
                  ],
                }),
              ],
            }),
            O.jsx("div", { className: "brand-tag", children: "FlatOutPY" }),
          ],
        }),
      }),
      O.jsxs("main", {
        className: "app-main",
        children: [
          O.jsx("aside", {
            className: "app-sidebar",
            children: O.jsx(Sj, { value: e, onChange: r, onLoadExample: n }),
          }),
          O.jsx("section", {
            className: "app-content",
            children:
              !f || e.rpmMax <= 0 || e.cylinders <= 0 || e.pipeCount <= 0
                ? O.jsx("div", {
                    className: "card",
                    children: O.jsx("p", {
                      children:
                        "Preencha os campos do motor (cilindrada, cilindros, RPM) para ver os resultados.",
                    }),
                  })
                : O.jsxs(O.Fragment, {
                    children: [
                      O.jsx(Oj, {
                        result: f,
                        targetRange: a,
                        goalLabel: i.label,
                      }),
                      O.jsx(vq, { data: f.comparison, targetRange: a }),
                      O.jsx(Pj, { data: f.comparison }),
                      O.jsx(mq, { data: f.rpmSweep }),
                      O.jsx(Tq, { result: f, currentDiameterIn: u }),
                      e.headerEnabled && O.jsx($q, { form: e, result: f }),
                      O.jsx(gq, { result: f }),
                      O.jsx(bq, { assumptions: f.assumptions }),
                      O.jsx(wq, {}),
                    ],
                  }),
          }),
        ],
      }),
      O.jsx("footer", {
        className: "app-footer",
        children: O.jsx("p", {
          children:
            "FlatOut Exhaust Calculator — ferramenta de estimativa de engenharia para a FlatOutPY. Os resultados não substituem testes reais nem constituem garantia de potência, torque ou desempenho.",
        }),
      }),
    ],
  });
}
ad.createRoot(document.getElementById("root")).render(
  O.jsx(E.StrictMode, { children: O.jsx(Lq, {}) }),
);
