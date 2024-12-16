import {
  k as te,
  f as jn,
  t as Uh,
  l as Hh,
  h as Wh,
} from "./index-CZLW5snR.js";
import { r as jo, e as Fi } from "./events-OSFpRyuq.js";
function Vh(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(n, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => n[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
var Uo = { exports: {} };
Uo.exports;
(function (e) {
  (function (t, r) {
    function n(E, a) {
      if (!E) throw new Error(a || "Assertion failed");
    }
    function i(E, a) {
      E.super_ = a;
      var p = function () {};
      (p.prototype = a.prototype),
        (E.prototype = new p()),
        (E.prototype.constructor = E);
    }
    function s(E, a, p) {
      if (s.isBN(E)) return E;
      (this.negative = 0),
        (this.words = null),
        (this.length = 0),
        (this.red = null),
        E !== null &&
          ((a === "le" || a === "be") && ((p = a), (a = 10)),
          this._init(E || 0, a || 10, p || "be"));
    }
    typeof t == "object" ? (t.exports = s) : (r.BN = s),
      (s.BN = s),
      (s.wordSize = 26);
    var c;
    try {
      typeof window < "u" && typeof window.Buffer < "u"
        ? (c = window.Buffer)
        : (c = jo.Buffer);
    } catch {}
    (s.isBN = function (a) {
      return a instanceof s
        ? !0
        : a !== null &&
            typeof a == "object" &&
            a.constructor.wordSize === s.wordSize &&
            Array.isArray(a.words);
    }),
      (s.max = function (a, p) {
        return a.cmp(p) > 0 ? a : p;
      }),
      (s.min = function (a, p) {
        return a.cmp(p) < 0 ? a : p;
      }),
      (s.prototype._init = function (a, p, y) {
        if (typeof a == "number") return this._initNumber(a, p, y);
        if (typeof a == "object") return this._initArray(a, p, y);
        p === "hex" && (p = 16),
          n(p === (p | 0) && p >= 2 && p <= 36),
          (a = a.toString().replace(/\s+/g, ""));
        var b = 0;
        a[0] === "-" && (b++, (this.negative = 1)),
          b < a.length &&
            (p === 16
              ? this._parseHex(a, b, y)
              : (this._parseBase(a, p, b),
                y === "le" && this._initArray(this.toArray(), p, y)));
      }),
      (s.prototype._initNumber = function (a, p, y) {
        a < 0 && ((this.negative = 1), (a = -a)),
          a < 67108864
            ? ((this.words = [a & 67108863]), (this.length = 1))
            : a < 4503599627370496
            ? ((this.words = [a & 67108863, (a / 67108864) & 67108863]),
              (this.length = 2))
            : (n(a < 9007199254740992),
              (this.words = [a & 67108863, (a / 67108864) & 67108863, 1]),
              (this.length = 3)),
          y === "le" && this._initArray(this.toArray(), p, y);
      }),
      (s.prototype._initArray = function (a, p, y) {
        if ((n(typeof a.length == "number"), a.length <= 0))
          return (this.words = [0]), (this.length = 1), this;
        (this.length = Math.ceil(a.length / 3)),
          (this.words = new Array(this.length));
        for (var b = 0; b < this.length; b++) this.words[b] = 0;
        var R,
          A,
          B = 0;
        if (y === "be")
          for (b = a.length - 1, R = 0; b >= 0; b -= 3)
            (A = a[b] | (a[b - 1] << 8) | (a[b - 2] << 16)),
              (this.words[R] |= (A << B) & 67108863),
              (this.words[R + 1] = (A >>> (26 - B)) & 67108863),
              (B += 24),
              B >= 26 && ((B -= 26), R++);
        else if (y === "le")
          for (b = 0, R = 0; b < a.length; b += 3)
            (A = a[b] | (a[b + 1] << 8) | (a[b + 2] << 16)),
              (this.words[R] |= (A << B) & 67108863),
              (this.words[R + 1] = (A >>> (26 - B)) & 67108863),
              (B += 24),
              B >= 26 && ((B -= 26), R++);
        return this._strip();
      });
    function o(E, a) {
      var p = E.charCodeAt(a);
      if (p >= 48 && p <= 57) return p - 48;
      if (p >= 65 && p <= 70) return p - 55;
      if (p >= 97 && p <= 102) return p - 87;
      n(!1, "Invalid character in " + E);
    }
    function u(E, a, p) {
      var y = o(E, p);
      return p - 1 >= a && (y |= o(E, p - 1) << 4), y;
    }
    s.prototype._parseHex = function (a, p, y) {
      (this.length = Math.ceil((a.length - p) / 6)),
        (this.words = new Array(this.length));
      for (var b = 0; b < this.length; b++) this.words[b] = 0;
      var R = 0,
        A = 0,
        B;
      if (y === "be")
        for (b = a.length - 1; b >= p; b -= 2)
          (B = u(a, p, b) << R),
            (this.words[A] |= B & 67108863),
            R >= 18
              ? ((R -= 18), (A += 1), (this.words[A] |= B >>> 26))
              : (R += 8);
      else {
        var v = a.length - p;
        for (b = v % 2 === 0 ? p + 1 : p; b < a.length; b += 2)
          (B = u(a, p, b) << R),
            (this.words[A] |= B & 67108863),
            R >= 18
              ? ((R -= 18), (A += 1), (this.words[A] |= B >>> 26))
              : (R += 8);
      }
      this._strip();
    };
    function d(E, a, p, y) {
      for (var b = 0, R = 0, A = Math.min(E.length, p), B = a; B < A; B++) {
        var v = E.charCodeAt(B) - 48;
        (b *= y),
          v >= 49 ? (R = v - 49 + 10) : v >= 17 ? (R = v - 17 + 10) : (R = v),
          n(v >= 0 && R < y, "Invalid character"),
          (b += R);
      }
      return b;
    }
    (s.prototype._parseBase = function (a, p, y) {
      (this.words = [0]), (this.length = 1);
      for (var b = 0, R = 1; R <= 67108863; R *= p) b++;
      b--, (R = (R / p) | 0);
      for (
        var A = a.length - y,
          B = A % b,
          v = Math.min(A, A - B) + y,
          f = 0,
          x = y;
        x < v;
        x += b
      )
        (f = d(a, x, x + b, p)),
          this.imuln(R),
          this.words[0] + f < 67108864 ? (this.words[0] += f) : this._iaddn(f);
      if (B !== 0) {
        var K = 1;
        for (f = d(a, x, a.length, p), x = 0; x < B; x++) K *= p;
        this.imuln(K),
          this.words[0] + f < 67108864 ? (this.words[0] += f) : this._iaddn(f);
      }
      this._strip();
    }),
      (s.prototype.copy = function (a) {
        a.words = new Array(this.length);
        for (var p = 0; p < this.length; p++) a.words[p] = this.words[p];
        (a.length = this.length),
          (a.negative = this.negative),
          (a.red = this.red);
      });
    function m(E, a) {
      (E.words = a.words),
        (E.length = a.length),
        (E.negative = a.negative),
        (E.red = a.red);
    }
    if (
      ((s.prototype._move = function (a) {
        m(a, this);
      }),
      (s.prototype.clone = function () {
        var a = new s(null);
        return this.copy(a), a;
      }),
      (s.prototype._expand = function (a) {
        for (; this.length < a; ) this.words[this.length++] = 0;
        return this;
      }),
      (s.prototype._strip = function () {
        for (; this.length > 1 && this.words[this.length - 1] === 0; )
          this.length--;
        return this._normSign();
      }),
      (s.prototype._normSign = function () {
        return (
          this.length === 1 && this.words[0] === 0 && (this.negative = 0), this
        );
      }),
      typeof Symbol < "u" && typeof Symbol.for == "function")
    )
      try {
        s.prototype[Symbol.for("nodejs.util.inspect.custom")] = g;
      } catch {
        s.prototype.inspect = g;
      }
    else s.prototype.inspect = g;
    function g() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var w = [
        "",
        "0",
        "00",
        "000",
        "0000",
        "00000",
        "000000",
        "0000000",
        "00000000",
        "000000000",
        "0000000000",
        "00000000000",
        "000000000000",
        "0000000000000",
        "00000000000000",
        "000000000000000",
        "0000000000000000",
        "00000000000000000",
        "000000000000000000",
        "0000000000000000000",
        "00000000000000000000",
        "000000000000000000000",
        "0000000000000000000000",
        "00000000000000000000000",
        "000000000000000000000000",
        "0000000000000000000000000",
      ],
      k = [
        0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      ],
      L = [
        0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
        16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
        11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
        5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
        20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
        60466176,
      ];
    (s.prototype.toString = function (a, p) {
      (a = a || 10), (p = p | 0 || 1);
      var y;
      if (a === 16 || a === "hex") {
        y = "";
        for (var b = 0, R = 0, A = 0; A < this.length; A++) {
          var B = this.words[A],
            v = (((B << b) | R) & 16777215).toString(16);
          (R = (B >>> (24 - b)) & 16777215),
            (b += 2),
            b >= 26 && ((b -= 26), A--),
            R !== 0 || A !== this.length - 1
              ? (y = w[6 - v.length] + v + y)
              : (y = v + y);
        }
        for (R !== 0 && (y = R.toString(16) + y); y.length % p !== 0; )
          y = "0" + y;
        return this.negative !== 0 && (y = "-" + y), y;
      }
      if (a === (a | 0) && a >= 2 && a <= 36) {
        var f = k[a],
          x = L[a];
        y = "";
        var K = this.clone();
        for (K.negative = 0; !K.isZero(); ) {
          var Y = K.modrn(x).toString(a);
          (K = K.idivn(x)),
            K.isZero() ? (y = Y + y) : (y = w[f - Y.length] + Y + y);
        }
        for (this.isZero() && (y = "0" + y); y.length % p !== 0; ) y = "0" + y;
        return this.negative !== 0 && (y = "-" + y), y;
      }
      n(!1, "Base should be between 2 and 36");
    }),
      (s.prototype.toNumber = function () {
        var a = this.words[0];
        return (
          this.length === 2
            ? (a += this.words[1] * 67108864)
            : this.length === 3 && this.words[2] === 1
            ? (a += 4503599627370496 + this.words[1] * 67108864)
            : this.length > 2 &&
              n(!1, "Number can only safely store up to 53 bits"),
          this.negative !== 0 ? -a : a
        );
      }),
      (s.prototype.toJSON = function () {
        return this.toString(16, 2);
      }),
      c &&
        (s.prototype.toBuffer = function (a, p) {
          return this.toArrayLike(c, a, p);
        }),
      (s.prototype.toArray = function (a, p) {
        return this.toArrayLike(Array, a, p);
      });
    var H = function (a, p) {
      return a.allocUnsafe ? a.allocUnsafe(p) : new a(p);
    };
    (s.prototype.toArrayLike = function (a, p, y) {
      this._strip();
      var b = this.byteLength(),
        R = y || Math.max(1, b);
      n(b <= R, "byte array longer than desired length"),
        n(R > 0, "Requested array length <= 0");
      var A = H(a, R),
        B = p === "le" ? "LE" : "BE";
      return this["_toArrayLike" + B](A, b), A;
    }),
      (s.prototype._toArrayLikeLE = function (a, p) {
        for (var y = 0, b = 0, R = 0, A = 0; R < this.length; R++) {
          var B = (this.words[R] << A) | b;
          (a[y++] = B & 255),
            y < a.length && (a[y++] = (B >> 8) & 255),
            y < a.length && (a[y++] = (B >> 16) & 255),
            A === 6
              ? (y < a.length && (a[y++] = (B >> 24) & 255), (b = 0), (A = 0))
              : ((b = B >>> 24), (A += 2));
        }
        if (y < a.length) for (a[y++] = b; y < a.length; ) a[y++] = 0;
      }),
      (s.prototype._toArrayLikeBE = function (a, p) {
        for (var y = a.length - 1, b = 0, R = 0, A = 0; R < this.length; R++) {
          var B = (this.words[R] << A) | b;
          (a[y--] = B & 255),
            y >= 0 && (a[y--] = (B >> 8) & 255),
            y >= 0 && (a[y--] = (B >> 16) & 255),
            A === 6
              ? (y >= 0 && (a[y--] = (B >> 24) & 255), (b = 0), (A = 0))
              : ((b = B >>> 24), (A += 2));
        }
        if (y >= 0) for (a[y--] = b; y >= 0; ) a[y--] = 0;
      }),
      Math.clz32
        ? (s.prototype._countBits = function (a) {
            return 32 - Math.clz32(a);
          })
        : (s.prototype._countBits = function (a) {
            var p = a,
              y = 0;
            return (
              p >= 4096 && ((y += 13), (p >>>= 13)),
              p >= 64 && ((y += 7), (p >>>= 7)),
              p >= 8 && ((y += 4), (p >>>= 4)),
              p >= 2 && ((y += 2), (p >>>= 2)),
              y + p
            );
          }),
      (s.prototype._zeroBits = function (a) {
        if (a === 0) return 26;
        var p = a,
          y = 0;
        return (
          p & 8191 || ((y += 13), (p >>>= 13)),
          p & 127 || ((y += 7), (p >>>= 7)),
          p & 15 || ((y += 4), (p >>>= 4)),
          p & 3 || ((y += 2), (p >>>= 2)),
          p & 1 || y++,
          y
        );
      }),
      (s.prototype.bitLength = function () {
        var a = this.words[this.length - 1],
          p = this._countBits(a);
        return (this.length - 1) * 26 + p;
      });
    function D(E) {
      for (var a = new Array(E.bitLength()), p = 0; p < a.length; p++) {
        var y = (p / 26) | 0,
          b = p % 26;
        a[p] = (E.words[y] >>> b) & 1;
      }
      return a;
    }
    (s.prototype.zeroBits = function () {
      if (this.isZero()) return 0;
      for (var a = 0, p = 0; p < this.length; p++) {
        var y = this._zeroBits(this.words[p]);
        if (((a += y), y !== 26)) break;
      }
      return a;
    }),
      (s.prototype.byteLength = function () {
        return Math.ceil(this.bitLength() / 8);
      }),
      (s.prototype.toTwos = function (a) {
        return this.negative !== 0
          ? this.abs().inotn(a).iaddn(1)
          : this.clone();
      }),
      (s.prototype.fromTwos = function (a) {
        return this.testn(a - 1) ? this.notn(a).iaddn(1).ineg() : this.clone();
      }),
      (s.prototype.isNeg = function () {
        return this.negative !== 0;
      }),
      (s.prototype.neg = function () {
        return this.clone().ineg();
      }),
      (s.prototype.ineg = function () {
        return this.isZero() || (this.negative ^= 1), this;
      }),
      (s.prototype.iuor = function (a) {
        for (; this.length < a.length; ) this.words[this.length++] = 0;
        for (var p = 0; p < a.length; p++)
          this.words[p] = this.words[p] | a.words[p];
        return this._strip();
      }),
      (s.prototype.ior = function (a) {
        return n((this.negative | a.negative) === 0), this.iuor(a);
      }),
      (s.prototype.or = function (a) {
        return this.length > a.length
          ? this.clone().ior(a)
          : a.clone().ior(this);
      }),
      (s.prototype.uor = function (a) {
        return this.length > a.length
          ? this.clone().iuor(a)
          : a.clone().iuor(this);
      }),
      (s.prototype.iuand = function (a) {
        var p;
        this.length > a.length ? (p = a) : (p = this);
        for (var y = 0; y < p.length; y++)
          this.words[y] = this.words[y] & a.words[y];
        return (this.length = p.length), this._strip();
      }),
      (s.prototype.iand = function (a) {
        return n((this.negative | a.negative) === 0), this.iuand(a);
      }),
      (s.prototype.and = function (a) {
        return this.length > a.length
          ? this.clone().iand(a)
          : a.clone().iand(this);
      }),
      (s.prototype.uand = function (a) {
        return this.length > a.length
          ? this.clone().iuand(a)
          : a.clone().iuand(this);
      }),
      (s.prototype.iuxor = function (a) {
        var p, y;
        this.length > a.length ? ((p = this), (y = a)) : ((p = a), (y = this));
        for (var b = 0; b < y.length; b++)
          this.words[b] = p.words[b] ^ y.words[b];
        if (this !== p) for (; b < p.length; b++) this.words[b] = p.words[b];
        return (this.length = p.length), this._strip();
      }),
      (s.prototype.ixor = function (a) {
        return n((this.negative | a.negative) === 0), this.iuxor(a);
      }),
      (s.prototype.xor = function (a) {
        return this.length > a.length
          ? this.clone().ixor(a)
          : a.clone().ixor(this);
      }),
      (s.prototype.uxor = function (a) {
        return this.length > a.length
          ? this.clone().iuxor(a)
          : a.clone().iuxor(this);
      }),
      (s.prototype.inotn = function (a) {
        n(typeof a == "number" && a >= 0);
        var p = Math.ceil(a / 26) | 0,
          y = a % 26;
        this._expand(p), y > 0 && p--;
        for (var b = 0; b < p; b++) this.words[b] = ~this.words[b] & 67108863;
        return (
          y > 0 && (this.words[b] = ~this.words[b] & (67108863 >> (26 - y))),
          this._strip()
        );
      }),
      (s.prototype.notn = function (a) {
        return this.clone().inotn(a);
      }),
      (s.prototype.setn = function (a, p) {
        n(typeof a == "number" && a >= 0);
        var y = (a / 26) | 0,
          b = a % 26;
        return (
          this._expand(y + 1),
          p
            ? (this.words[y] = this.words[y] | (1 << b))
            : (this.words[y] = this.words[y] & ~(1 << b)),
          this._strip()
        );
      }),
      (s.prototype.iadd = function (a) {
        var p;
        if (this.negative !== 0 && a.negative === 0)
          return (
            (this.negative = 0),
            (p = this.isub(a)),
            (this.negative ^= 1),
            this._normSign()
          );
        if (this.negative === 0 && a.negative !== 0)
          return (
            (a.negative = 0),
            (p = this.isub(a)),
            (a.negative = 1),
            p._normSign()
          );
        var y, b;
        this.length > a.length ? ((y = this), (b = a)) : ((y = a), (b = this));
        for (var R = 0, A = 0; A < b.length; A++)
          (p = (y.words[A] | 0) + (b.words[A] | 0) + R),
            (this.words[A] = p & 67108863),
            (R = p >>> 26);
        for (; R !== 0 && A < y.length; A++)
          (p = (y.words[A] | 0) + R),
            (this.words[A] = p & 67108863),
            (R = p >>> 26);
        if (((this.length = y.length), R !== 0))
          (this.words[this.length] = R), this.length++;
        else if (y !== this)
          for (; A < y.length; A++) this.words[A] = y.words[A];
        return this;
      }),
      (s.prototype.add = function (a) {
        var p;
        return a.negative !== 0 && this.negative === 0
          ? ((a.negative = 0), (p = this.sub(a)), (a.negative ^= 1), p)
          : a.negative === 0 && this.negative !== 0
          ? ((this.negative = 0), (p = a.sub(this)), (this.negative = 1), p)
          : this.length > a.length
          ? this.clone().iadd(a)
          : a.clone().iadd(this);
      }),
      (s.prototype.isub = function (a) {
        if (a.negative !== 0) {
          a.negative = 0;
          var p = this.iadd(a);
          return (a.negative = 1), p._normSign();
        } else if (this.negative !== 0)
          return (
            (this.negative = 0),
            this.iadd(a),
            (this.negative = 1),
            this._normSign()
          );
        var y = this.cmp(a);
        if (y === 0)
          return (
            (this.negative = 0), (this.length = 1), (this.words[0] = 0), this
          );
        var b, R;
        y > 0 ? ((b = this), (R = a)) : ((b = a), (R = this));
        for (var A = 0, B = 0; B < R.length; B++)
          (p = (b.words[B] | 0) - (R.words[B] | 0) + A),
            (A = p >> 26),
            (this.words[B] = p & 67108863);
        for (; A !== 0 && B < b.length; B++)
          (p = (b.words[B] | 0) + A),
            (A = p >> 26),
            (this.words[B] = p & 67108863);
        if (A === 0 && B < b.length && b !== this)
          for (; B < b.length; B++) this.words[B] = b.words[B];
        return (
          (this.length = Math.max(this.length, B)),
          b !== this && (this.negative = 1),
          this._strip()
        );
      }),
      (s.prototype.sub = function (a) {
        return this.clone().isub(a);
      });
    function I(E, a, p) {
      p.negative = a.negative ^ E.negative;
      var y = (E.length + a.length) | 0;
      (p.length = y), (y = (y - 1) | 0);
      var b = E.words[0] | 0,
        R = a.words[0] | 0,
        A = b * R,
        B = A & 67108863,
        v = (A / 67108864) | 0;
      p.words[0] = B;
      for (var f = 1; f < y; f++) {
        for (
          var x = v >>> 26,
            K = v & 67108863,
            Y = Math.min(f, a.length - 1),
            N = Math.max(0, f - E.length + 1);
          N <= Y;
          N++
        ) {
          var O = (f - N) | 0;
          (b = E.words[O] | 0),
            (R = a.words[N] | 0),
            (A = b * R + K),
            (x += (A / 67108864) | 0),
            (K = A & 67108863);
        }
        (p.words[f] = K | 0), (v = x | 0);
      }
      return v !== 0 ? (p.words[f] = v | 0) : p.length--, p._strip();
    }
    var T = function (a, p, y) {
      var b = a.words,
        R = p.words,
        A = y.words,
        B = 0,
        v,
        f,
        x,
        K = b[0] | 0,
        Y = K & 8191,
        N = K >>> 13,
        O = b[1] | 0,
        W = O & 8191,
        J = O >>> 13,
        he = b[2] | 0,
        C = he & 8191,
        M = he >>> 13,
        q = b[3] | 0,
        G = q & 8191,
        se = q >>> 13,
        fe = b[4] | 0,
        re = fe & 8191,
        ve = fe >>> 13,
        _t = b[5] | 0,
        Re = _t & 8191,
        Se = _t >>> 13,
        Ye = b[6] | 0,
        be = Ye & 8191,
        Ce = Ye >>> 13,
        tt = b[7] | 0,
        Ee = tt & 8191,
        _ = tt >>> 13,
        l = b[8] | 0,
        h = l & 8191,
        S = l >>> 13,
        P = b[9] | 0,
        F = P & 8191,
        U = P >>> 13,
        ce = R[0] | 0,
        ae = ce & 8191,
        ie = ce >>> 13,
        Me = R[1] | 0,
        ne = Me & 8191,
        ke = Me >>> 13,
        Dr = R[2] | 0,
        Ie = Dr & 8191,
        Ae = Dr >>> 13,
        jr = R[3] | 0,
        Te = jr & 8191,
        Ne = jr >>> 13,
        Ur = R[4] | 0,
        Le = Ur & 8191,
        Be = Ur >>> 13,
        Hr = R[5] | 0,
        Pe = Hr & 8191,
        Oe = Hr >>> 13,
        Wr = R[6] | 0,
        $e = Wr & 8191,
        Fe = Wr >>> 13,
        Vr = R[7] | 0,
        De = Vr & 8191,
        je = Vr >>> 13,
        qr = R[8] | 0,
        Ue = qr & 8191,
        He = qr >>> 13,
        zr = R[9] | 0,
        We = zr & 8191,
        Ve = zr >>> 13;
      (y.negative = a.negative ^ p.negative),
        (y.length = 19),
        (v = Math.imul(Y, ae)),
        (f = Math.imul(Y, ie)),
        (f = (f + Math.imul(N, ae)) | 0),
        (x = Math.imul(N, ie));
      var nr = (((B + v) | 0) + ((f & 8191) << 13)) | 0;
      (B = (((x + (f >>> 13)) | 0) + (nr >>> 26)) | 0),
        (nr &= 67108863),
        (v = Math.imul(W, ae)),
        (f = Math.imul(W, ie)),
        (f = (f + Math.imul(J, ae)) | 0),
        (x = Math.imul(J, ie)),
        (v = (v + Math.imul(Y, ne)) | 0),
        (f = (f + Math.imul(Y, ke)) | 0),
        (f = (f + Math.imul(N, ne)) | 0),
        (x = (x + Math.imul(N, ke)) | 0);
      var ir = (((B + v) | 0) + ((f & 8191) << 13)) | 0;
      (B = (((x + (f >>> 13)) | 0) + (ir >>> 26)) | 0),
        (ir &= 67108863),
        (v = Math.imul(C, ae)),
        (f = Math.imul(C, ie)),
        (f = (f + Math.imul(M, ae)) | 0),
        (x = Math.imul(M, ie)),
        (v = (v + Math.imul(W, ne)) | 0),
        (f = (f + Math.imul(W, ke)) | 0),
        (f = (f + Math.imul(J, ne)) | 0),
        (x = (x + Math.imul(J, ke)) | 0),
        (v = (v + Math.imul(Y, Ie)) | 0),
        (f = (f + Math.imul(Y, Ae)) | 0),
        (f = (f + Math.imul(N, Ie)) | 0),
        (x = (x + Math.imul(N, Ae)) | 0);
      var sr = (((B + v) | 0) + ((f & 8191) << 13)) | 0;
      (B = (((x + (f >>> 13)) | 0) + (sr >>> 26)) | 0),
        (sr &= 67108863),
        (v = Math.imul(G, ae)),
        (f = Math.imul(G, ie)),
        (f = (f + Math.imul(se, ae)) | 0),
        (x = Math.imul(se, ie)),
        (v = (v + Math.imul(C, ne)) | 0),
        (f = (f + Math.imul(C, ke)) | 0),
        (f = (f + Math.imul(M, ne)) | 0),
        (x = (x + Math.imul(M, ke)) | 0),
        (v = (v + Math.imul(W, Ie)) | 0),
        (f = (f + Math.imul(W, Ae)) | 0),
        (f = (f + Math.imul(J, Ie)) | 0),
        (x = (x + Math.imul(J, Ae)) | 0),
        (v = (v + Math.imul(Y, Te)) | 0),
        (f = (f + Math.imul(Y, Ne)) | 0),
        (f = (f + Math.imul(N, Te)) | 0),
        (x = (x + Math.imul(N, Ne)) | 0);
      var or = (((B + v) | 0) + ((f & 8191) << 13)) | 0;
      (B = (((x + (f >>> 13)) | 0) + (or >>> 26)) | 0),
        (or &= 67108863),
        (v = Math.imul(re, ae)),
        (f = Math.imul(re, ie)),
        (f = (f + Math.imul(ve, ae)) | 0),
        (x = Math.imul(ve, ie)),
        (v = (v + Math.imul(G, ne)) | 0),
        (f = (f + Math.imul(G, ke)) | 0),
        (f = (f + Math.imul(se, ne)) | 0),
        (x = (x + Math.imul(se, ke)) | 0),
        (v = (v + Math.imul(C, Ie)) | 0),
        (f = (f + Math.imul(C, Ae)) | 0),
        (f = (f + Math.imul(M, Ie)) | 0),
        (x = (x + Math.imul(M, Ae)) | 0),
        (v = (v + Math.imul(W, Te)) | 0),
        (f = (f + Math.imul(W, Ne)) | 0),
        (f = (f + Math.imul(J, Te)) | 0),
        (x = (x + Math.imul(J, Ne)) | 0),
        (v = (v + Math.imul(Y, Le)) | 0),
        (f = (f + Math.imul(Y, Be)) | 0),
        (f = (f + Math.imul(N, Le)) | 0),
        (x = (x + Math.imul(N, Be)) | 0);
      var ar = (((B + v) | 0) + ((f & 8191) << 13)) | 0;
      (B = (((x + (f >>> 13)) | 0) + (ar >>> 26)) | 0),
        (ar &= 67108863),
        (v = Math.imul(Re, ae)),
        (f = Math.imul(Re, ie)),
        (f = (f + Math.imul(Se, ae)) | 0),
        (x = Math.imul(Se, ie)),
        (v = (v + Math.imul(re, ne)) | 0),
        (f = (f + Math.imul(re, ke)) | 0),
        (f = (f + Math.imul(ve, ne)) | 0),
        (x = (x + Math.imul(ve, ke)) | 0),
        (v = (v + Math.imul(G, Ie)) | 0),
        (f = (f + Math.imul(G, Ae)) | 0),
        (f = (f + Math.imul(se, Ie)) | 0),
        (x = (x + Math.imul(se, Ae)) | 0),
        (v = (v + Math.imul(C, Te)) | 0),
        (f = (f + Math.imul(C, Ne)) | 0),
        (f = (f + Math.imul(M, Te)) | 0),
        (x = (x + Math.imul(M, Ne)) | 0),
        (v = (v + Math.imul(W, Le)) | 0),
        (f = (f + Math.imul(W, Be)) | 0),
        (f = (f + Math.imul(J, Le)) | 0),
        (x = (x + Math.imul(J, Be)) | 0),
        (v = (v + Math.imul(Y, Pe)) | 0),
        (f = (f + Math.imul(Y, Oe)) | 0),
        (f = (f + Math.imul(N, Pe)) | 0),
        (x = (x + Math.imul(N, Oe)) | 0);
      var cr = (((B + v) | 0) + ((f & 8191) << 13)) | 0;
      (B = (((x + (f >>> 13)) | 0) + (cr >>> 26)) | 0),
        (cr &= 67108863),
        (v = Math.imul(be, ae)),
        (f = Math.imul(be, ie)),
        (f = (f + Math.imul(Ce, ae)) | 0),
        (x = Math.imul(Ce, ie)),
        (v = (v + Math.imul(Re, ne)) | 0),
        (f = (f + Math.imul(Re, ke)) | 0),
        (f = (f + Math.imul(Se, ne)) | 0),
        (x = (x + Math.imul(Se, ke)) | 0),
        (v = (v + Math.imul(re, Ie)) | 0),
        (f = (f + Math.imul(re, Ae)) | 0),
        (f = (f + Math.imul(ve, Ie)) | 0),
        (x = (x + Math.imul(ve, Ae)) | 0),
        (v = (v + Math.imul(G, Te)) | 0),
        (f = (f + Math.imul(G, Ne)) | 0),
        (f = (f + Math.imul(se, Te)) | 0),
        (x = (x + Math.imul(se, Ne)) | 0),
        (v = (v + Math.imul(C, Le)) | 0),
        (f = (f + Math.imul(C, Be)) | 0),
        (f = (f + Math.imul(M, Le)) | 0),
        (x = (x + Math.imul(M, Be)) | 0),
        (v = (v + Math.imul(W, Pe)) | 0),
        (f = (f + Math.imul(W, Oe)) | 0),
        (f = (f + Math.imul(J, Pe)) | 0),
        (x = (x + Math.imul(J, Oe)) | 0),
        (v = (v + Math.imul(Y, $e)) | 0),
        (f = (f + Math.imul(Y, Fe)) | 0),
        (f = (f + Math.imul(N, $e)) | 0),
        (x = (x + Math.imul(N, Fe)) | 0);
      var lr = (((B + v) | 0) + ((f & 8191) << 13)) | 0;
      (B = (((x + (f >>> 13)) | 0) + (lr >>> 26)) | 0),
        (lr &= 67108863),
        (v = Math.imul(Ee, ae)),
        (f = Math.imul(Ee, ie)),
        (f = (f + Math.imul(_, ae)) | 0),
        (x = Math.imul(_, ie)),
        (v = (v + Math.imul(be, ne)) | 0),
        (f = (f + Math.imul(be, ke)) | 0),
        (f = (f + Math.imul(Ce, ne)) | 0),
        (x = (x + Math.imul(Ce, ke)) | 0),
        (v = (v + Math.imul(Re, Ie)) | 0),
        (f = (f + Math.imul(Re, Ae)) | 0),
        (f = (f + Math.imul(Se, Ie)) | 0),
        (x = (x + Math.imul(Se, Ae)) | 0),
        (v = (v + Math.imul(re, Te)) | 0),
        (f = (f + Math.imul(re, Ne)) | 0),
        (f = (f + Math.imul(ve, Te)) | 0),
        (x = (x + Math.imul(ve, Ne)) | 0),
        (v = (v + Math.imul(G, Le)) | 0),
        (f = (f + Math.imul(G, Be)) | 0),
        (f = (f + Math.imul(se, Le)) | 0),
        (x = (x + Math.imul(se, Be)) | 0),
        (v = (v + Math.imul(C, Pe)) | 0),
        (f = (f + Math.imul(C, Oe)) | 0),
        (f = (f + Math.imul(M, Pe)) | 0),
        (x = (x + Math.imul(M, Oe)) | 0),
        (v = (v + Math.imul(W, $e)) | 0),
        (f = (f + Math.imul(W, Fe)) | 0),
        (f = (f + Math.imul(J, $e)) | 0),
        (x = (x + Math.imul(J, Fe)) | 0),
        (v = (v + Math.imul(Y, De)) | 0),
        (f = (f + Math.imul(Y, je)) | 0),
        (f = (f + Math.imul(N, De)) | 0),
        (x = (x + Math.imul(N, je)) | 0);
      var ur = (((B + v) | 0) + ((f & 8191) << 13)) | 0;
      (B = (((x + (f >>> 13)) | 0) + (ur >>> 26)) | 0),
        (ur &= 67108863),
        (v = Math.imul(h, ae)),
        (f = Math.imul(h, ie)),
        (f = (f + Math.imul(S, ae)) | 0),
        (x = Math.imul(S, ie)),
        (v = (v + Math.imul(Ee, ne)) | 0),
        (f = (f + Math.imul(Ee, ke)) | 0),
        (f = (f + Math.imul(_, ne)) | 0),
        (x = (x + Math.imul(_, ke)) | 0),
        (v = (v + Math.imul(be, Ie)) | 0),
        (f = (f + Math.imul(be, Ae)) | 0),
        (f = (f + Math.imul(Ce, Ie)) | 0),
        (x = (x + Math.imul(Ce, Ae)) | 0),
        (v = (v + Math.imul(Re, Te)) | 0),
        (f = (f + Math.imul(Re, Ne)) | 0),
        (f = (f + Math.imul(Se, Te)) | 0),
        (x = (x + Math.imul(Se, Ne)) | 0),
        (v = (v + Math.imul(re, Le)) | 0),
        (f = (f + Math.imul(re, Be)) | 0),
        (f = (f + Math.imul(ve, Le)) | 0),
        (x = (x + Math.imul(ve, Be)) | 0),
        (v = (v + Math.imul(G, Pe)) | 0),
        (f = (f + Math.imul(G, Oe)) | 0),
        (f = (f + Math.imul(se, Pe)) | 0),
        (x = (x + Math.imul(se, Oe)) | 0),
        (v = (v + Math.imul(C, $e)) | 0),
        (f = (f + Math.imul(C, Fe)) | 0),
        (f = (f + Math.imul(M, $e)) | 0),
        (x = (x + Math.imul(M, Fe)) | 0),
        (v = (v + Math.imul(W, De)) | 0),
        (f = (f + Math.imul(W, je)) | 0),
        (f = (f + Math.imul(J, De)) | 0),
        (x = (x + Math.imul(J, je)) | 0),
        (v = (v + Math.imul(Y, Ue)) | 0),
        (f = (f + Math.imul(Y, He)) | 0),
        (f = (f + Math.imul(N, Ue)) | 0),
        (x = (x + Math.imul(N, He)) | 0);
      var hr = (((B + v) | 0) + ((f & 8191) << 13)) | 0;
      (B = (((x + (f >>> 13)) | 0) + (hr >>> 26)) | 0),
        (hr &= 67108863),
        (v = Math.imul(F, ae)),
        (f = Math.imul(F, ie)),
        (f = (f + Math.imul(U, ae)) | 0),
        (x = Math.imul(U, ie)),
        (v = (v + Math.imul(h, ne)) | 0),
        (f = (f + Math.imul(h, ke)) | 0),
        (f = (f + Math.imul(S, ne)) | 0),
        (x = (x + Math.imul(S, ke)) | 0),
        (v = (v + Math.imul(Ee, Ie)) | 0),
        (f = (f + Math.imul(Ee, Ae)) | 0),
        (f = (f + Math.imul(_, Ie)) | 0),
        (x = (x + Math.imul(_, Ae)) | 0),
        (v = (v + Math.imul(be, Te)) | 0),
        (f = (f + Math.imul(be, Ne)) | 0),
        (f = (f + Math.imul(Ce, Te)) | 0),
        (x = (x + Math.imul(Ce, Ne)) | 0),
        (v = (v + Math.imul(Re, Le)) | 0),
        (f = (f + Math.imul(Re, Be)) | 0),
        (f = (f + Math.imul(Se, Le)) | 0),
        (x = (x + Math.imul(Se, Be)) | 0),
        (v = (v + Math.imul(re, Pe)) | 0),
        (f = (f + Math.imul(re, Oe)) | 0),
        (f = (f + Math.imul(ve, Pe)) | 0),
        (x = (x + Math.imul(ve, Oe)) | 0),
        (v = (v + Math.imul(G, $e)) | 0),
        (f = (f + Math.imul(G, Fe)) | 0),
        (f = (f + Math.imul(se, $e)) | 0),
        (x = (x + Math.imul(se, Fe)) | 0),
        (v = (v + Math.imul(C, De)) | 0),
        (f = (f + Math.imul(C, je)) | 0),
        (f = (f + Math.imul(M, De)) | 0),
        (x = (x + Math.imul(M, je)) | 0),
        (v = (v + Math.imul(W, Ue)) | 0),
        (f = (f + Math.imul(W, He)) | 0),
        (f = (f + Math.imul(J, Ue)) | 0),
        (x = (x + Math.imul(J, He)) | 0),
        (v = (v + Math.imul(Y, We)) | 0),
        (f = (f + Math.imul(Y, Ve)) | 0),
        (f = (f + Math.imul(N, We)) | 0),
        (x = (x + Math.imul(N, Ve)) | 0);
      var fr = (((B + v) | 0) + ((f & 8191) << 13)) | 0;
      (B = (((x + (f >>> 13)) | 0) + (fr >>> 26)) | 0),
        (fr &= 67108863),
        (v = Math.imul(F, ne)),
        (f = Math.imul(F, ke)),
        (f = (f + Math.imul(U, ne)) | 0),
        (x = Math.imul(U, ke)),
        (v = (v + Math.imul(h, Ie)) | 0),
        (f = (f + Math.imul(h, Ae)) | 0),
        (f = (f + Math.imul(S, Ie)) | 0),
        (x = (x + Math.imul(S, Ae)) | 0),
        (v = (v + Math.imul(Ee, Te)) | 0),
        (f = (f + Math.imul(Ee, Ne)) | 0),
        (f = (f + Math.imul(_, Te)) | 0),
        (x = (x + Math.imul(_, Ne)) | 0),
        (v = (v + Math.imul(be, Le)) | 0),
        (f = (f + Math.imul(be, Be)) | 0),
        (f = (f + Math.imul(Ce, Le)) | 0),
        (x = (x + Math.imul(Ce, Be)) | 0),
        (v = (v + Math.imul(Re, Pe)) | 0),
        (f = (f + Math.imul(Re, Oe)) | 0),
        (f = (f + Math.imul(Se, Pe)) | 0),
        (x = (x + Math.imul(Se, Oe)) | 0),
        (v = (v + Math.imul(re, $e)) | 0),
        (f = (f + Math.imul(re, Fe)) | 0),
        (f = (f + Math.imul(ve, $e)) | 0),
        (x = (x + Math.imul(ve, Fe)) | 0),
        (v = (v + Math.imul(G, De)) | 0),
        (f = (f + Math.imul(G, je)) | 0),
        (f = (f + Math.imul(se, De)) | 0),
        (x = (x + Math.imul(se, je)) | 0),
        (v = (v + Math.imul(C, Ue)) | 0),
        (f = (f + Math.imul(C, He)) | 0),
        (f = (f + Math.imul(M, Ue)) | 0),
        (x = (x + Math.imul(M, He)) | 0),
        (v = (v + Math.imul(W, We)) | 0),
        (f = (f + Math.imul(W, Ve)) | 0),
        (f = (f + Math.imul(J, We)) | 0),
        (x = (x + Math.imul(J, Ve)) | 0);
      var dr = (((B + v) | 0) + ((f & 8191) << 13)) | 0;
      (B = (((x + (f >>> 13)) | 0) + (dr >>> 26)) | 0),
        (dr &= 67108863),
        (v = Math.imul(F, Ie)),
        (f = Math.imul(F, Ae)),
        (f = (f + Math.imul(U, Ie)) | 0),
        (x = Math.imul(U, Ae)),
        (v = (v + Math.imul(h, Te)) | 0),
        (f = (f + Math.imul(h, Ne)) | 0),
        (f = (f + Math.imul(S, Te)) | 0),
        (x = (x + Math.imul(S, Ne)) | 0),
        (v = (v + Math.imul(Ee, Le)) | 0),
        (f = (f + Math.imul(Ee, Be)) | 0),
        (f = (f + Math.imul(_, Le)) | 0),
        (x = (x + Math.imul(_, Be)) | 0),
        (v = (v + Math.imul(be, Pe)) | 0),
        (f = (f + Math.imul(be, Oe)) | 0),
        (f = (f + Math.imul(Ce, Pe)) | 0),
        (x = (x + Math.imul(Ce, Oe)) | 0),
        (v = (v + Math.imul(Re, $e)) | 0),
        (f = (f + Math.imul(Re, Fe)) | 0),
        (f = (f + Math.imul(Se, $e)) | 0),
        (x = (x + Math.imul(Se, Fe)) | 0),
        (v = (v + Math.imul(re, De)) | 0),
        (f = (f + Math.imul(re, je)) | 0),
        (f = (f + Math.imul(ve, De)) | 0),
        (x = (x + Math.imul(ve, je)) | 0),
        (v = (v + Math.imul(G, Ue)) | 0),
        (f = (f + Math.imul(G, He)) | 0),
        (f = (f + Math.imul(se, Ue)) | 0),
        (x = (x + Math.imul(se, He)) | 0),
        (v = (v + Math.imul(C, We)) | 0),
        (f = (f + Math.imul(C, Ve)) | 0),
        (f = (f + Math.imul(M, We)) | 0),
        (x = (x + Math.imul(M, Ve)) | 0);
      var pr = (((B + v) | 0) + ((f & 8191) << 13)) | 0;
      (B = (((x + (f >>> 13)) | 0) + (pr >>> 26)) | 0),
        (pr &= 67108863),
        (v = Math.imul(F, Te)),
        (f = Math.imul(F, Ne)),
        (f = (f + Math.imul(U, Te)) | 0),
        (x = Math.imul(U, Ne)),
        (v = (v + Math.imul(h, Le)) | 0),
        (f = (f + Math.imul(h, Be)) | 0),
        (f = (f + Math.imul(S, Le)) | 0),
        (x = (x + Math.imul(S, Be)) | 0),
        (v = (v + Math.imul(Ee, Pe)) | 0),
        (f = (f + Math.imul(Ee, Oe)) | 0),
        (f = (f + Math.imul(_, Pe)) | 0),
        (x = (x + Math.imul(_, Oe)) | 0),
        (v = (v + Math.imul(be, $e)) | 0),
        (f = (f + Math.imul(be, Fe)) | 0),
        (f = (f + Math.imul(Ce, $e)) | 0),
        (x = (x + Math.imul(Ce, Fe)) | 0),
        (v = (v + Math.imul(Re, De)) | 0),
        (f = (f + Math.imul(Re, je)) | 0),
        (f = (f + Math.imul(Se, De)) | 0),
        (x = (x + Math.imul(Se, je)) | 0),
        (v = (v + Math.imul(re, Ue)) | 0),
        (f = (f + Math.imul(re, He)) | 0),
        (f = (f + Math.imul(ve, Ue)) | 0),
        (x = (x + Math.imul(ve, He)) | 0),
        (v = (v + Math.imul(G, We)) | 0),
        (f = (f + Math.imul(G, Ve)) | 0),
        (f = (f + Math.imul(se, We)) | 0),
        (x = (x + Math.imul(se, Ve)) | 0);
      var gr = (((B + v) | 0) + ((f & 8191) << 13)) | 0;
      (B = (((x + (f >>> 13)) | 0) + (gr >>> 26)) | 0),
        (gr &= 67108863),
        (v = Math.imul(F, Le)),
        (f = Math.imul(F, Be)),
        (f = (f + Math.imul(U, Le)) | 0),
        (x = Math.imul(U, Be)),
        (v = (v + Math.imul(h, Pe)) | 0),
        (f = (f + Math.imul(h, Oe)) | 0),
        (f = (f + Math.imul(S, Pe)) | 0),
        (x = (x + Math.imul(S, Oe)) | 0),
        (v = (v + Math.imul(Ee, $e)) | 0),
        (f = (f + Math.imul(Ee, Fe)) | 0),
        (f = (f + Math.imul(_, $e)) | 0),
        (x = (x + Math.imul(_, Fe)) | 0),
        (v = (v + Math.imul(be, De)) | 0),
        (f = (f + Math.imul(be, je)) | 0),
        (f = (f + Math.imul(Ce, De)) | 0),
        (x = (x + Math.imul(Ce, je)) | 0),
        (v = (v + Math.imul(Re, Ue)) | 0),
        (f = (f + Math.imul(Re, He)) | 0),
        (f = (f + Math.imul(Se, Ue)) | 0),
        (x = (x + Math.imul(Se, He)) | 0),
        (v = (v + Math.imul(re, We)) | 0),
        (f = (f + Math.imul(re, Ve)) | 0),
        (f = (f + Math.imul(ve, We)) | 0),
        (x = (x + Math.imul(ve, Ve)) | 0);
      var mr = (((B + v) | 0) + ((f & 8191) << 13)) | 0;
      (B = (((x + (f >>> 13)) | 0) + (mr >>> 26)) | 0),
        (mr &= 67108863),
        (v = Math.imul(F, Pe)),
        (f = Math.imul(F, Oe)),
        (f = (f + Math.imul(U, Pe)) | 0),
        (x = Math.imul(U, Oe)),
        (v = (v + Math.imul(h, $e)) | 0),
        (f = (f + Math.imul(h, Fe)) | 0),
        (f = (f + Math.imul(S, $e)) | 0),
        (x = (x + Math.imul(S, Fe)) | 0),
        (v = (v + Math.imul(Ee, De)) | 0),
        (f = (f + Math.imul(Ee, je)) | 0),
        (f = (f + Math.imul(_, De)) | 0),
        (x = (x + Math.imul(_, je)) | 0),
        (v = (v + Math.imul(be, Ue)) | 0),
        (f = (f + Math.imul(be, He)) | 0),
        (f = (f + Math.imul(Ce, Ue)) | 0),
        (x = (x + Math.imul(Ce, He)) | 0),
        (v = (v + Math.imul(Re, We)) | 0),
        (f = (f + Math.imul(Re, Ve)) | 0),
        (f = (f + Math.imul(Se, We)) | 0),
        (x = (x + Math.imul(Se, Ve)) | 0);
      var $s = (((B + v) | 0) + ((f & 8191) << 13)) | 0;
      (B = (((x + (f >>> 13)) | 0) + ($s >>> 26)) | 0),
        ($s &= 67108863),
        (v = Math.imul(F, $e)),
        (f = Math.imul(F, Fe)),
        (f = (f + Math.imul(U, $e)) | 0),
        (x = Math.imul(U, Fe)),
        (v = (v + Math.imul(h, De)) | 0),
        (f = (f + Math.imul(h, je)) | 0),
        (f = (f + Math.imul(S, De)) | 0),
        (x = (x + Math.imul(S, je)) | 0),
        (v = (v + Math.imul(Ee, Ue)) | 0),
        (f = (f + Math.imul(Ee, He)) | 0),
        (f = (f + Math.imul(_, Ue)) | 0),
        (x = (x + Math.imul(_, He)) | 0),
        (v = (v + Math.imul(be, We)) | 0),
        (f = (f + Math.imul(be, Ve)) | 0),
        (f = (f + Math.imul(Ce, We)) | 0),
        (x = (x + Math.imul(Ce, Ve)) | 0);
      var Fs = (((B + v) | 0) + ((f & 8191) << 13)) | 0;
      (B = (((x + (f >>> 13)) | 0) + (Fs >>> 26)) | 0),
        (Fs &= 67108863),
        (v = Math.imul(F, De)),
        (f = Math.imul(F, je)),
        (f = (f + Math.imul(U, De)) | 0),
        (x = Math.imul(U, je)),
        (v = (v + Math.imul(h, Ue)) | 0),
        (f = (f + Math.imul(h, He)) | 0),
        (f = (f + Math.imul(S, Ue)) | 0),
        (x = (x + Math.imul(S, He)) | 0),
        (v = (v + Math.imul(Ee, We)) | 0),
        (f = (f + Math.imul(Ee, Ve)) | 0),
        (f = (f + Math.imul(_, We)) | 0),
        (x = (x + Math.imul(_, Ve)) | 0);
      var Ds = (((B + v) | 0) + ((f & 8191) << 13)) | 0;
      (B = (((x + (f >>> 13)) | 0) + (Ds >>> 26)) | 0),
        (Ds &= 67108863),
        (v = Math.imul(F, Ue)),
        (f = Math.imul(F, He)),
        (f = (f + Math.imul(U, Ue)) | 0),
        (x = Math.imul(U, He)),
        (v = (v + Math.imul(h, We)) | 0),
        (f = (f + Math.imul(h, Ve)) | 0),
        (f = (f + Math.imul(S, We)) | 0),
        (x = (x + Math.imul(S, Ve)) | 0);
      var js = (((B + v) | 0) + ((f & 8191) << 13)) | 0;
      (B = (((x + (f >>> 13)) | 0) + (js >>> 26)) | 0),
        (js &= 67108863),
        (v = Math.imul(F, We)),
        (f = Math.imul(F, Ve)),
        (f = (f + Math.imul(U, We)) | 0),
        (x = Math.imul(U, Ve));
      var Us = (((B + v) | 0) + ((f & 8191) << 13)) | 0;
      return (
        (B = (((x + (f >>> 13)) | 0) + (Us >>> 26)) | 0),
        (Us &= 67108863),
        (A[0] = nr),
        (A[1] = ir),
        (A[2] = sr),
        (A[3] = or),
        (A[4] = ar),
        (A[5] = cr),
        (A[6] = lr),
        (A[7] = ur),
        (A[8] = hr),
        (A[9] = fr),
        (A[10] = dr),
        (A[11] = pr),
        (A[12] = gr),
        (A[13] = mr),
        (A[14] = $s),
        (A[15] = Fs),
        (A[16] = Ds),
        (A[17] = js),
        (A[18] = Us),
        B !== 0 && ((A[19] = B), y.length++),
        y
      );
    };
    Math.imul || (T = I);
    function $(E, a, p) {
      (p.negative = a.negative ^ E.negative), (p.length = E.length + a.length);
      for (var y = 0, b = 0, R = 0; R < p.length - 1; R++) {
        var A = b;
        b = 0;
        for (
          var B = y & 67108863,
            v = Math.min(R, a.length - 1),
            f = Math.max(0, R - E.length + 1);
          f <= v;
          f++
        ) {
          var x = R - f,
            K = E.words[x] | 0,
            Y = a.words[f] | 0,
            N = K * Y,
            O = N & 67108863;
          (A = (A + ((N / 67108864) | 0)) | 0),
            (O = (O + B) | 0),
            (B = O & 67108863),
            (A = (A + (O >>> 26)) | 0),
            (b += A >>> 26),
            (A &= 67108863);
        }
        (p.words[R] = B), (y = A), (A = b);
      }
      return y !== 0 ? (p.words[R] = y) : p.length--, p._strip();
    }
    function V(E, a, p) {
      return $(E, a, p);
    }
    (s.prototype.mulTo = function (a, p) {
      var y,
        b = this.length + a.length;
      return (
        this.length === 10 && a.length === 10
          ? (y = T(this, a, p))
          : b < 63
          ? (y = I(this, a, p))
          : b < 1024
          ? (y = $(this, a, p))
          : (y = V(this, a, p)),
        y
      );
    }),
      (s.prototype.mul = function (a) {
        var p = new s(null);
        return (p.words = new Array(this.length + a.length)), this.mulTo(a, p);
      }),
      (s.prototype.mulf = function (a) {
        var p = new s(null);
        return (p.words = new Array(this.length + a.length)), V(this, a, p);
      }),
      (s.prototype.imul = function (a) {
        return this.clone().mulTo(a, this);
      }),
      (s.prototype.imuln = function (a) {
        var p = a < 0;
        p && (a = -a), n(typeof a == "number"), n(a < 67108864);
        for (var y = 0, b = 0; b < this.length; b++) {
          var R = (this.words[b] | 0) * a,
            A = (R & 67108863) + (y & 67108863);
          (y >>= 26),
            (y += (R / 67108864) | 0),
            (y += A >>> 26),
            (this.words[b] = A & 67108863);
        }
        return (
          y !== 0 && ((this.words[b] = y), this.length++),
          p ? this.ineg() : this
        );
      }),
      (s.prototype.muln = function (a) {
        return this.clone().imuln(a);
      }),
      (s.prototype.sqr = function () {
        return this.mul(this);
      }),
      (s.prototype.isqr = function () {
        return this.imul(this.clone());
      }),
      (s.prototype.pow = function (a) {
        var p = D(a);
        if (p.length === 0) return new s(1);
        for (var y = this, b = 0; b < p.length && p[b] === 0; b++, y = y.sqr());
        if (++b < p.length)
          for (var R = y.sqr(); b < p.length; b++, R = R.sqr())
            p[b] !== 0 && (y = y.mul(R));
        return y;
      }),
      (s.prototype.iushln = function (a) {
        n(typeof a == "number" && a >= 0);
        var p = a % 26,
          y = (a - p) / 26,
          b = (67108863 >>> (26 - p)) << (26 - p),
          R;
        if (p !== 0) {
          var A = 0;
          for (R = 0; R < this.length; R++) {
            var B = this.words[R] & b,
              v = ((this.words[R] | 0) - B) << p;
            (this.words[R] = v | A), (A = B >>> (26 - p));
          }
          A && ((this.words[R] = A), this.length++);
        }
        if (y !== 0) {
          for (R = this.length - 1; R >= 0; R--)
            this.words[R + y] = this.words[R];
          for (R = 0; R < y; R++) this.words[R] = 0;
          this.length += y;
        }
        return this._strip();
      }),
      (s.prototype.ishln = function (a) {
        return n(this.negative === 0), this.iushln(a);
      }),
      (s.prototype.iushrn = function (a, p, y) {
        n(typeof a == "number" && a >= 0);
        var b;
        p ? (b = (p - (p % 26)) / 26) : (b = 0);
        var R = a % 26,
          A = Math.min((a - R) / 26, this.length),
          B = 67108863 ^ ((67108863 >>> R) << R),
          v = y;
        if (((b -= A), (b = Math.max(0, b)), v)) {
          for (var f = 0; f < A; f++) v.words[f] = this.words[f];
          v.length = A;
        }
        if (A !== 0)
          if (this.length > A)
            for (this.length -= A, f = 0; f < this.length; f++)
              this.words[f] = this.words[f + A];
          else (this.words[0] = 0), (this.length = 1);
        var x = 0;
        for (f = this.length - 1; f >= 0 && (x !== 0 || f >= b); f--) {
          var K = this.words[f] | 0;
          (this.words[f] = (x << (26 - R)) | (K >>> R)), (x = K & B);
        }
        return (
          v && x !== 0 && (v.words[v.length++] = x),
          this.length === 0 && ((this.words[0] = 0), (this.length = 1)),
          this._strip()
        );
      }),
      (s.prototype.ishrn = function (a, p, y) {
        return n(this.negative === 0), this.iushrn(a, p, y);
      }),
      (s.prototype.shln = function (a) {
        return this.clone().ishln(a);
      }),
      (s.prototype.ushln = function (a) {
        return this.clone().iushln(a);
      }),
      (s.prototype.shrn = function (a) {
        return this.clone().ishrn(a);
      }),
      (s.prototype.ushrn = function (a) {
        return this.clone().iushrn(a);
      }),
      (s.prototype.testn = function (a) {
        n(typeof a == "number" && a >= 0);
        var p = a % 26,
          y = (a - p) / 26,
          b = 1 << p;
        if (this.length <= y) return !1;
        var R = this.words[y];
        return !!(R & b);
      }),
      (s.prototype.imaskn = function (a) {
        n(typeof a == "number" && a >= 0);
        var p = a % 26,
          y = (a - p) / 26;
        if (
          (n(this.negative === 0, "imaskn works only with positive numbers"),
          this.length <= y)
        )
          return this;
        if (
          (p !== 0 && y++, (this.length = Math.min(y, this.length)), p !== 0)
        ) {
          var b = 67108863 ^ ((67108863 >>> p) << p);
          this.words[this.length - 1] &= b;
        }
        return this._strip();
      }),
      (s.prototype.maskn = function (a) {
        return this.clone().imaskn(a);
      }),
      (s.prototype.iaddn = function (a) {
        return (
          n(typeof a == "number"),
          n(a < 67108864),
          a < 0
            ? this.isubn(-a)
            : this.negative !== 0
            ? this.length === 1 && (this.words[0] | 0) <= a
              ? ((this.words[0] = a - (this.words[0] | 0)),
                (this.negative = 0),
                this)
              : ((this.negative = 0), this.isubn(a), (this.negative = 1), this)
            : this._iaddn(a)
        );
      }),
      (s.prototype._iaddn = function (a) {
        this.words[0] += a;
        for (var p = 0; p < this.length && this.words[p] >= 67108864; p++)
          (this.words[p] -= 67108864),
            p === this.length - 1
              ? (this.words[p + 1] = 1)
              : this.words[p + 1]++;
        return (this.length = Math.max(this.length, p + 1)), this;
      }),
      (s.prototype.isubn = function (a) {
        if ((n(typeof a == "number"), n(a < 67108864), a < 0))
          return this.iaddn(-a);
        if (this.negative !== 0)
          return (this.negative = 0), this.iaddn(a), (this.negative = 1), this;
        if (((this.words[0] -= a), this.length === 1 && this.words[0] < 0))
          (this.words[0] = -this.words[0]), (this.negative = 1);
        else
          for (var p = 0; p < this.length && this.words[p] < 0; p++)
            (this.words[p] += 67108864), (this.words[p + 1] -= 1);
        return this._strip();
      }),
      (s.prototype.addn = function (a) {
        return this.clone().iaddn(a);
      }),
      (s.prototype.subn = function (a) {
        return this.clone().isubn(a);
      }),
      (s.prototype.iabs = function () {
        return (this.negative = 0), this;
      }),
      (s.prototype.abs = function () {
        return this.clone().iabs();
      }),
      (s.prototype._ishlnsubmul = function (a, p, y) {
        var b = a.length + y,
          R;
        this._expand(b);
        var A,
          B = 0;
        for (R = 0; R < a.length; R++) {
          A = (this.words[R + y] | 0) + B;
          var v = (a.words[R] | 0) * p;
          (A -= v & 67108863),
            (B = (A >> 26) - ((v / 67108864) | 0)),
            (this.words[R + y] = A & 67108863);
        }
        for (; R < this.length - y; R++)
          (A = (this.words[R + y] | 0) + B),
            (B = A >> 26),
            (this.words[R + y] = A & 67108863);
        if (B === 0) return this._strip();
        for (n(B === -1), B = 0, R = 0; R < this.length; R++)
          (A = -(this.words[R] | 0) + B),
            (B = A >> 26),
            (this.words[R] = A & 67108863);
        return (this.negative = 1), this._strip();
      }),
      (s.prototype._wordDiv = function (a, p) {
        var y = this.length - a.length,
          b = this.clone(),
          R = a,
          A = R.words[R.length - 1] | 0,
          B = this._countBits(A);
        (y = 26 - B),
          y !== 0 &&
            ((R = R.ushln(y)), b.iushln(y), (A = R.words[R.length - 1] | 0));
        var v = b.length - R.length,
          f;
        if (p !== "mod") {
          (f = new s(null)),
            (f.length = v + 1),
            (f.words = new Array(f.length));
          for (var x = 0; x < f.length; x++) f.words[x] = 0;
        }
        var K = b.clone()._ishlnsubmul(R, 1, v);
        K.negative === 0 && ((b = K), f && (f.words[v] = 1));
        for (var Y = v - 1; Y >= 0; Y--) {
          var N =
            (b.words[R.length + Y] | 0) * 67108864 +
            (b.words[R.length + Y - 1] | 0);
          for (
            N = Math.min((N / A) | 0, 67108863), b._ishlnsubmul(R, N, Y);
            b.negative !== 0;

          )
            N--,
              (b.negative = 0),
              b._ishlnsubmul(R, 1, Y),
              b.isZero() || (b.negative ^= 1);
          f && (f.words[Y] = N);
        }
        return (
          f && f._strip(),
          b._strip(),
          p !== "div" && y !== 0 && b.iushrn(y),
          { div: f || null, mod: b }
        );
      }),
      (s.prototype.divmod = function (a, p, y) {
        if ((n(!a.isZero()), this.isZero()))
          return { div: new s(0), mod: new s(0) };
        var b, R, A;
        return this.negative !== 0 && a.negative === 0
          ? ((A = this.neg().divmod(a, p)),
            p !== "mod" && (b = A.div.neg()),
            p !== "div" &&
              ((R = A.mod.neg()), y && R.negative !== 0 && R.iadd(a)),
            { div: b, mod: R })
          : this.negative === 0 && a.negative !== 0
          ? ((A = this.divmod(a.neg(), p)),
            p !== "mod" && (b = A.div.neg()),
            { div: b, mod: A.mod })
          : this.negative & a.negative
          ? ((A = this.neg().divmod(a.neg(), p)),
            p !== "div" &&
              ((R = A.mod.neg()), y && R.negative !== 0 && R.isub(a)),
            { div: A.div, mod: R })
          : a.length > this.length || this.cmp(a) < 0
          ? { div: new s(0), mod: this }
          : a.length === 1
          ? p === "div"
            ? { div: this.divn(a.words[0]), mod: null }
            : p === "mod"
            ? { div: null, mod: new s(this.modrn(a.words[0])) }
            : { div: this.divn(a.words[0]), mod: new s(this.modrn(a.words[0])) }
          : this._wordDiv(a, p);
      }),
      (s.prototype.div = function (a) {
        return this.divmod(a, "div", !1).div;
      }),
      (s.prototype.mod = function (a) {
        return this.divmod(a, "mod", !1).mod;
      }),
      (s.prototype.umod = function (a) {
        return this.divmod(a, "mod", !0).mod;
      }),
      (s.prototype.divRound = function (a) {
        var p = this.divmod(a);
        if (p.mod.isZero()) return p.div;
        var y = p.div.negative !== 0 ? p.mod.isub(a) : p.mod,
          b = a.ushrn(1),
          R = a.andln(1),
          A = y.cmp(b);
        return A < 0 || (R === 1 && A === 0)
          ? p.div
          : p.div.negative !== 0
          ? p.div.isubn(1)
          : p.div.iaddn(1);
      }),
      (s.prototype.modrn = function (a) {
        var p = a < 0;
        p && (a = -a), n(a <= 67108863);
        for (var y = (1 << 26) % a, b = 0, R = this.length - 1; R >= 0; R--)
          b = (y * b + (this.words[R] | 0)) % a;
        return p ? -b : b;
      }),
      (s.prototype.modn = function (a) {
        return this.modrn(a);
      }),
      (s.prototype.idivn = function (a) {
        var p = a < 0;
        p && (a = -a), n(a <= 67108863);
        for (var y = 0, b = this.length - 1; b >= 0; b--) {
          var R = (this.words[b] | 0) + y * 67108864;
          (this.words[b] = (R / a) | 0), (y = R % a);
        }
        return this._strip(), p ? this.ineg() : this;
      }),
      (s.prototype.divn = function (a) {
        return this.clone().idivn(a);
      }),
      (s.prototype.egcd = function (a) {
        n(a.negative === 0), n(!a.isZero());
        var p = this,
          y = a.clone();
        p.negative !== 0 ? (p = p.umod(a)) : (p = p.clone());
        for (
          var b = new s(1), R = new s(0), A = new s(0), B = new s(1), v = 0;
          p.isEven() && y.isEven();

        )
          p.iushrn(1), y.iushrn(1), ++v;
        for (var f = y.clone(), x = p.clone(); !p.isZero(); ) {
          for (var K = 0, Y = 1; !(p.words[0] & Y) && K < 26; ++K, Y <<= 1);
          if (K > 0)
            for (p.iushrn(K); K-- > 0; )
              (b.isOdd() || R.isOdd()) && (b.iadd(f), R.isub(x)),
                b.iushrn(1),
                R.iushrn(1);
          for (var N = 0, O = 1; !(y.words[0] & O) && N < 26; ++N, O <<= 1);
          if (N > 0)
            for (y.iushrn(N); N-- > 0; )
              (A.isOdd() || B.isOdd()) && (A.iadd(f), B.isub(x)),
                A.iushrn(1),
                B.iushrn(1);
          p.cmp(y) >= 0
            ? (p.isub(y), b.isub(A), R.isub(B))
            : (y.isub(p), A.isub(b), B.isub(R));
        }
        return { a: A, b: B, gcd: y.iushln(v) };
      }),
      (s.prototype._invmp = function (a) {
        n(a.negative === 0), n(!a.isZero());
        var p = this,
          y = a.clone();
        p.negative !== 0 ? (p = p.umod(a)) : (p = p.clone());
        for (
          var b = new s(1), R = new s(0), A = y.clone();
          p.cmpn(1) > 0 && y.cmpn(1) > 0;

        ) {
          for (var B = 0, v = 1; !(p.words[0] & v) && B < 26; ++B, v <<= 1);
          if (B > 0)
            for (p.iushrn(B); B-- > 0; ) b.isOdd() && b.iadd(A), b.iushrn(1);
          for (var f = 0, x = 1; !(y.words[0] & x) && f < 26; ++f, x <<= 1);
          if (f > 0)
            for (y.iushrn(f); f-- > 0; ) R.isOdd() && R.iadd(A), R.iushrn(1);
          p.cmp(y) >= 0 ? (p.isub(y), b.isub(R)) : (y.isub(p), R.isub(b));
        }
        var K;
        return (
          p.cmpn(1) === 0 ? (K = b) : (K = R), K.cmpn(0) < 0 && K.iadd(a), K
        );
      }),
      (s.prototype.gcd = function (a) {
        if (this.isZero()) return a.abs();
        if (a.isZero()) return this.abs();
        var p = this.clone(),
          y = a.clone();
        (p.negative = 0), (y.negative = 0);
        for (var b = 0; p.isEven() && y.isEven(); b++) p.iushrn(1), y.iushrn(1);
        do {
          for (; p.isEven(); ) p.iushrn(1);
          for (; y.isEven(); ) y.iushrn(1);
          var R = p.cmp(y);
          if (R < 0) {
            var A = p;
            (p = y), (y = A);
          } else if (R === 0 || y.cmpn(1) === 0) break;
          p.isub(y);
        } while (!0);
        return y.iushln(b);
      }),
      (s.prototype.invm = function (a) {
        return this.egcd(a).a.umod(a);
      }),
      (s.prototype.isEven = function () {
        return (this.words[0] & 1) === 0;
      }),
      (s.prototype.isOdd = function () {
        return (this.words[0] & 1) === 1;
      }),
      (s.prototype.andln = function (a) {
        return this.words[0] & a;
      }),
      (s.prototype.bincn = function (a) {
        n(typeof a == "number");
        var p = a % 26,
          y = (a - p) / 26,
          b = 1 << p;
        if (this.length <= y)
          return this._expand(y + 1), (this.words[y] |= b), this;
        for (var R = b, A = y; R !== 0 && A < this.length; A++) {
          var B = this.words[A] | 0;
          (B += R), (R = B >>> 26), (B &= 67108863), (this.words[A] = B);
        }
        return R !== 0 && ((this.words[A] = R), this.length++), this;
      }),
      (s.prototype.isZero = function () {
        return this.length === 1 && this.words[0] === 0;
      }),
      (s.prototype.cmpn = function (a) {
        var p = a < 0;
        if (this.negative !== 0 && !p) return -1;
        if (this.negative === 0 && p) return 1;
        this._strip();
        var y;
        if (this.length > 1) y = 1;
        else {
          p && (a = -a), n(a <= 67108863, "Number is too big");
          var b = this.words[0] | 0;
          y = b === a ? 0 : b < a ? -1 : 1;
        }
        return this.negative !== 0 ? -y | 0 : y;
      }),
      (s.prototype.cmp = function (a) {
        if (this.negative !== 0 && a.negative === 0) return -1;
        if (this.negative === 0 && a.negative !== 0) return 1;
        var p = this.ucmp(a);
        return this.negative !== 0 ? -p | 0 : p;
      }),
      (s.prototype.ucmp = function (a) {
        if (this.length > a.length) return 1;
        if (this.length < a.length) return -1;
        for (var p = 0, y = this.length - 1; y >= 0; y--) {
          var b = this.words[y] | 0,
            R = a.words[y] | 0;
          if (b !== R) {
            b < R ? (p = -1) : b > R && (p = 1);
            break;
          }
        }
        return p;
      }),
      (s.prototype.gtn = function (a) {
        return this.cmpn(a) === 1;
      }),
      (s.prototype.gt = function (a) {
        return this.cmp(a) === 1;
      }),
      (s.prototype.gten = function (a) {
        return this.cmpn(a) >= 0;
      }),
      (s.prototype.gte = function (a) {
        return this.cmp(a) >= 0;
      }),
      (s.prototype.ltn = function (a) {
        return this.cmpn(a) === -1;
      }),
      (s.prototype.lt = function (a) {
        return this.cmp(a) === -1;
      }),
      (s.prototype.lten = function (a) {
        return this.cmpn(a) <= 0;
      }),
      (s.prototype.lte = function (a) {
        return this.cmp(a) <= 0;
      }),
      (s.prototype.eqn = function (a) {
        return this.cmpn(a) === 0;
      }),
      (s.prototype.eq = function (a) {
        return this.cmp(a) === 0;
      }),
      (s.red = function (a) {
        return new oe(a);
      }),
      (s.prototype.toRed = function (a) {
        return (
          n(!this.red, "Already a number in reduction context"),
          n(this.negative === 0, "red works only with positives"),
          a.convertTo(this)._forceRed(a)
        );
      }),
      (s.prototype.fromRed = function () {
        return (
          n(this.red, "fromRed works only with numbers in reduction context"),
          this.red.convertFrom(this)
        );
      }),
      (s.prototype._forceRed = function (a) {
        return (this.red = a), this;
      }),
      (s.prototype.forceRed = function (a) {
        return (
          n(!this.red, "Already a number in reduction context"),
          this._forceRed(a)
        );
      }),
      (s.prototype.redAdd = function (a) {
        return (
          n(this.red, "redAdd works only with red numbers"),
          this.red.add(this, a)
        );
      }),
      (s.prototype.redIAdd = function (a) {
        return (
          n(this.red, "redIAdd works only with red numbers"),
          this.red.iadd(this, a)
        );
      }),
      (s.prototype.redSub = function (a) {
        return (
          n(this.red, "redSub works only with red numbers"),
          this.red.sub(this, a)
        );
      }),
      (s.prototype.redISub = function (a) {
        return (
          n(this.red, "redISub works only with red numbers"),
          this.red.isub(this, a)
        );
      }),
      (s.prototype.redShl = function (a) {
        return (
          n(this.red, "redShl works only with red numbers"),
          this.red.shl(this, a)
        );
      }),
      (s.prototype.redMul = function (a) {
        return (
          n(this.red, "redMul works only with red numbers"),
          this.red._verify2(this, a),
          this.red.mul(this, a)
        );
      }),
      (s.prototype.redIMul = function (a) {
        return (
          n(this.red, "redMul works only with red numbers"),
          this.red._verify2(this, a),
          this.red.imul(this, a)
        );
      }),
      (s.prototype.redSqr = function () {
        return (
          n(this.red, "redSqr works only with red numbers"),
          this.red._verify1(this),
          this.red.sqr(this)
        );
      }),
      (s.prototype.redISqr = function () {
        return (
          n(this.red, "redISqr works only with red numbers"),
          this.red._verify1(this),
          this.red.isqr(this)
        );
      }),
      (s.prototype.redSqrt = function () {
        return (
          n(this.red, "redSqrt works only with red numbers"),
          this.red._verify1(this),
          this.red.sqrt(this)
        );
      }),
      (s.prototype.redInvm = function () {
        return (
          n(this.red, "redInvm works only with red numbers"),
          this.red._verify1(this),
          this.red.invm(this)
        );
      }),
      (s.prototype.redNeg = function () {
        return (
          n(this.red, "redNeg works only with red numbers"),
          this.red._verify1(this),
          this.red.neg(this)
        );
      }),
      (s.prototype.redPow = function (a) {
        return (
          n(this.red && !a.red, "redPow(normalNum)"),
          this.red._verify1(this),
          this.red.pow(this, a)
        );
      });
    var j = { k256: null, p224: null, p192: null, p25519: null };
    function z(E, a) {
      (this.name = E),
        (this.p = new s(a, 16)),
        (this.n = this.p.bitLength()),
        (this.k = new s(1).iushln(this.n).isub(this.p)),
        (this.tmp = this._tmp());
    }
    (z.prototype._tmp = function () {
      var a = new s(null);
      return (a.words = new Array(Math.ceil(this.n / 13))), a;
    }),
      (z.prototype.ireduce = function (a) {
        var p = a,
          y;
        do
          this.split(p, this.tmp),
            (p = this.imulK(p)),
            (p = p.iadd(this.tmp)),
            (y = p.bitLength());
        while (y > this.n);
        var b = y < this.n ? -1 : p.ucmp(this.p);
        return (
          b === 0
            ? ((p.words[0] = 0), (p.length = 1))
            : b > 0
            ? p.isub(this.p)
            : p.strip !== void 0
            ? p.strip()
            : p._strip(),
          p
        );
      }),
      (z.prototype.split = function (a, p) {
        a.iushrn(this.n, 0, p);
      }),
      (z.prototype.imulK = function (a) {
        return a.imul(this.k);
      });
    function ee() {
      z.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    i(ee, z),
      (ee.prototype.split = function (a, p) {
        for (var y = 4194303, b = Math.min(a.length, 9), R = 0; R < b; R++)
          p.words[R] = a.words[R];
        if (((p.length = b), a.length <= 9)) {
          (a.words[0] = 0), (a.length = 1);
          return;
        }
        var A = a.words[9];
        for (p.words[p.length++] = A & y, R = 10; R < a.length; R++) {
          var B = a.words[R] | 0;
          (a.words[R - 10] = ((B & y) << 4) | (A >>> 22)), (A = B);
        }
        (A >>>= 22),
          (a.words[R - 10] = A),
          A === 0 && a.length > 10 ? (a.length -= 10) : (a.length -= 9);
      }),
      (ee.prototype.imulK = function (a) {
        (a.words[a.length] = 0), (a.words[a.length + 1] = 0), (a.length += 2);
        for (var p = 0, y = 0; y < a.length; y++) {
          var b = a.words[y] | 0;
          (p += b * 977),
            (a.words[y] = p & 67108863),
            (p = b * 64 + ((p / 67108864) | 0));
        }
        return (
          a.words[a.length - 1] === 0 &&
            (a.length--, a.words[a.length - 1] === 0 && a.length--),
          a
        );
      });
    function Q() {
      z.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    i(Q, z);
    function Z() {
      z.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    i(Z, z);
    function ue() {
      z.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    i(ue, z),
      (ue.prototype.imulK = function (a) {
        for (var p = 0, y = 0; y < a.length; y++) {
          var b = (a.words[y] | 0) * 19 + p,
            R = b & 67108863;
          (b >>>= 26), (a.words[y] = R), (p = b);
        }
        return p !== 0 && (a.words[a.length++] = p), a;
      }),
      (s._prime = function (a) {
        if (j[a]) return j[a];
        var p;
        if (a === "k256") p = new ee();
        else if (a === "p224") p = new Q();
        else if (a === "p192") p = new Z();
        else if (a === "p25519") p = new ue();
        else throw new Error("Unknown prime " + a);
        return (j[a] = p), p;
      });
    function oe(E) {
      if (typeof E == "string") {
        var a = s._prime(E);
        (this.m = a.p), (this.prime = a);
      } else
        n(E.gtn(1), "modulus must be greater than 1"),
          (this.m = E),
          (this.prime = null);
    }
    (oe.prototype._verify1 = function (a) {
      n(a.negative === 0, "red works only with positives"),
        n(a.red, "red works only with red numbers");
    }),
      (oe.prototype._verify2 = function (a, p) {
        n((a.negative | p.negative) === 0, "red works only with positives"),
          n(a.red && a.red === p.red, "red works only with red numbers");
      }),
      (oe.prototype.imod = function (a) {
        return this.prime
          ? this.prime.ireduce(a)._forceRed(this)
          : (m(a, a.umod(this.m)._forceRed(this)), a);
      }),
      (oe.prototype.neg = function (a) {
        return a.isZero() ? a.clone() : this.m.sub(a)._forceRed(this);
      }),
      (oe.prototype.add = function (a, p) {
        this._verify2(a, p);
        var y = a.add(p);
        return y.cmp(this.m) >= 0 && y.isub(this.m), y._forceRed(this);
      }),
      (oe.prototype.iadd = function (a, p) {
        this._verify2(a, p);
        var y = a.iadd(p);
        return y.cmp(this.m) >= 0 && y.isub(this.m), y;
      }),
      (oe.prototype.sub = function (a, p) {
        this._verify2(a, p);
        var y = a.sub(p);
        return y.cmpn(0) < 0 && y.iadd(this.m), y._forceRed(this);
      }),
      (oe.prototype.isub = function (a, p) {
        this._verify2(a, p);
        var y = a.isub(p);
        return y.cmpn(0) < 0 && y.iadd(this.m), y;
      }),
      (oe.prototype.shl = function (a, p) {
        return this._verify1(a), this.imod(a.ushln(p));
      }),
      (oe.prototype.imul = function (a, p) {
        return this._verify2(a, p), this.imod(a.imul(p));
      }),
      (oe.prototype.mul = function (a, p) {
        return this._verify2(a, p), this.imod(a.mul(p));
      }),
      (oe.prototype.isqr = function (a) {
        return this.imul(a, a.clone());
      }),
      (oe.prototype.sqr = function (a) {
        return this.mul(a, a);
      }),
      (oe.prototype.sqrt = function (a) {
        if (a.isZero()) return a.clone();
        var p = this.m.andln(3);
        if ((n(p % 2 === 1), p === 3)) {
          var y = this.m.add(new s(1)).iushrn(2);
          return this.pow(a, y);
        }
        for (var b = this.m.subn(1), R = 0; !b.isZero() && b.andln(1) === 0; )
          R++, b.iushrn(1);
        n(!b.isZero());
        var A = new s(1).toRed(this),
          B = A.redNeg(),
          v = this.m.subn(1).iushrn(1),
          f = this.m.bitLength();
        for (f = new s(2 * f * f).toRed(this); this.pow(f, v).cmp(B) !== 0; )
          f.redIAdd(B);
        for (
          var x = this.pow(f, b),
            K = this.pow(a, b.addn(1).iushrn(1)),
            Y = this.pow(a, b),
            N = R;
          Y.cmp(A) !== 0;

        ) {
          for (var O = Y, W = 0; O.cmp(A) !== 0; W++) O = O.redSqr();
          n(W < N);
          var J = this.pow(x, new s(1).iushln(N - W - 1));
          (K = K.redMul(J)), (x = J.redSqr()), (Y = Y.redMul(x)), (N = W);
        }
        return K;
      }),
      (oe.prototype.invm = function (a) {
        var p = a._invmp(this.m);
        return p.negative !== 0
          ? ((p.negative = 0), this.imod(p).redNeg())
          : this.imod(p);
      }),
      (oe.prototype.pow = function (a, p) {
        if (p.isZero()) return new s(1).toRed(this);
        if (p.cmpn(1) === 0) return a.clone();
        var y = 4,
          b = new Array(1 << y);
        (b[0] = new s(1).toRed(this)), (b[1] = a);
        for (var R = 2; R < b.length; R++) b[R] = this.mul(b[R - 1], a);
        var A = b[0],
          B = 0,
          v = 0,
          f = p.bitLength() % 26;
        for (f === 0 && (f = 26), R = p.length - 1; R >= 0; R--) {
          for (var x = p.words[R], K = f - 1; K >= 0; K--) {
            var Y = (x >> K) & 1;
            if ((A !== b[0] && (A = this.sqr(A)), Y === 0 && B === 0)) {
              v = 0;
              continue;
            }
            (B <<= 1),
              (B |= Y),
              v++,
              !(v !== y && (R !== 0 || K !== 0)) &&
                ((A = this.mul(A, b[B])), (v = 0), (B = 0));
          }
          f = 26;
        }
        return A;
      }),
      (oe.prototype.convertTo = function (a) {
        var p = a.umod(this.m);
        return p === a ? p.clone() : p;
      }),
      (oe.prototype.convertFrom = function (a) {
        var p = a.clone();
        return (p.red = null), p;
      }),
      (s.mont = function (a) {
        return new pe(a);
      });
    function pe(E) {
      oe.call(this, E),
        (this.shift = this.m.bitLength()),
        this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
        (this.r = new s(1).iushln(this.shift)),
        (this.r2 = this.imod(this.r.sqr())),
        (this.rinv = this.r._invmp(this.m)),
        (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
        (this.minv = this.minv.umod(this.r)),
        (this.minv = this.r.sub(this.minv));
    }
    i(pe, oe),
      (pe.prototype.convertTo = function (a) {
        return this.imod(a.ushln(this.shift));
      }),
      (pe.prototype.convertFrom = function (a) {
        var p = this.imod(a.mul(this.rinv));
        return (p.red = null), p;
      }),
      (pe.prototype.imul = function (a, p) {
        if (a.isZero() || p.isZero())
          return (a.words[0] = 0), (a.length = 1), a;
        var y = a.imul(p),
          b = y.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          R = y.isub(b).iushrn(this.shift),
          A = R;
        return (
          R.cmp(this.m) >= 0
            ? (A = R.isub(this.m))
            : R.cmpn(0) < 0 && (A = R.iadd(this.m)),
          A._forceRed(this)
        );
      }),
      (pe.prototype.mul = function (a, p) {
        if (a.isZero() || p.isZero()) return new s(0)._forceRed(this);
        var y = a.mul(p),
          b = y.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          R = y.isub(b).iushrn(this.shift),
          A = R;
        return (
          R.cmp(this.m) >= 0
            ? (A = R.isub(this.m))
            : R.cmpn(0) < 0 && (A = R.iadd(this.m)),
          A._forceRed(this)
        );
      }),
      (pe.prototype.invm = function (a) {
        var p = this.imod(a._invmp(this.m).mul(this.r2));
        return p._forceRed(this);
      });
  })(e, te);
})(Uo);
var Di = Uo.exports,
  Rl = { exports: {} },
  So = { exports: {} };
typeof Object.create == "function"
  ? (So.exports = function (t, r) {
      r &&
        ((t.super_ = r),
        (t.prototype = Object.create(r.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })));
    })
  : (So.exports = function (t, r) {
      if (r) {
        t.super_ = r;
        var n = function () {};
        (n.prototype = r.prototype),
          (t.prototype = new n()),
          (t.prototype.constructor = t);
      }
    });
var It = So.exports,
  Ro = { exports: {} },
  Un = {},
  ji = {};
ji.byteLength = Gh;
ji.toByteArray = Zh;
ji.fromByteArray = Yh;
var $t = [],
  bt = [],
  qh = typeof Uint8Array < "u" ? Uint8Array : Array,
  Hs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Gr = 0, zh = Hs.length; Gr < zh; ++Gr)
  ($t[Gr] = Hs[Gr]), (bt[Hs.charCodeAt(Gr)] = Gr);
bt[45] = 62;
bt[95] = 63;
function Cl(e) {
  var t = e.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = e.indexOf("=");
  r === -1 && (r = t);
  var n = r === t ? 0 : 4 - (r % 4);
  return [r, n];
}
function Gh(e) {
  var t = Cl(e),
    r = t[0],
    n = t[1];
  return ((r + n) * 3) / 4 - n;
}
function Jh(e, t, r) {
  return ((t + r) * 3) / 4 - r;
}
function Zh(e) {
  var t,
    r = Cl(e),
    n = r[0],
    i = r[1],
    s = new qh(Jh(e, n, i)),
    c = 0,
    o = i > 0 ? n - 4 : n,
    u;
  for (u = 0; u < o; u += 4)
    (t =
      (bt[e.charCodeAt(u)] << 18) |
      (bt[e.charCodeAt(u + 1)] << 12) |
      (bt[e.charCodeAt(u + 2)] << 6) |
      bt[e.charCodeAt(u + 3)]),
      (s[c++] = (t >> 16) & 255),
      (s[c++] = (t >> 8) & 255),
      (s[c++] = t & 255);
  return (
    i === 2 &&
      ((t = (bt[e.charCodeAt(u)] << 2) | (bt[e.charCodeAt(u + 1)] >> 4)),
      (s[c++] = t & 255)),
    i === 1 &&
      ((t =
        (bt[e.charCodeAt(u)] << 10) |
        (bt[e.charCodeAt(u + 1)] << 4) |
        (bt[e.charCodeAt(u + 2)] >> 2)),
      (s[c++] = (t >> 8) & 255),
      (s[c++] = t & 255)),
    s
  );
}
function Kh(e) {
  return (
    $t[(e >> 18) & 63] + $t[(e >> 12) & 63] + $t[(e >> 6) & 63] + $t[e & 63]
  );
}
function Qh(e, t, r) {
  for (var n, i = [], s = t; s < r; s += 3)
    (n =
      ((e[s] << 16) & 16711680) + ((e[s + 1] << 8) & 65280) + (e[s + 2] & 255)),
      i.push(Kh(n));
  return i.join("");
}
function Yh(e) {
  for (
    var t, r = e.length, n = r % 3, i = [], s = 16383, c = 0, o = r - n;
    c < o;
    c += s
  )
    i.push(Qh(e, c, c + s > o ? o : c + s));
  return (
    n === 1
      ? ((t = e[r - 1]), i.push($t[t >> 2] + $t[(t << 4) & 63] + "=="))
      : n === 2 &&
        ((t = (e[r - 2] << 8) + e[r - 1]),
        i.push($t[t >> 10] + $t[(t >> 4) & 63] + $t[(t << 2) & 63] + "=")),
    i.join("")
  );
}
var Ho = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ Ho.read =
  function (e, t, r, n, i) {
    var s,
      c,
      o = i * 8 - n - 1,
      u = (1 << o) - 1,
      d = u >> 1,
      m = -7,
      g = r ? i - 1 : 0,
      w = r ? -1 : 1,
      k = e[t + g];
    for (
      g += w, s = k & ((1 << -m) - 1), k >>= -m, m += o;
      m > 0;
      s = s * 256 + e[t + g], g += w, m -= 8
    );
    for (
      c = s & ((1 << -m) - 1), s >>= -m, m += n;
      m > 0;
      c = c * 256 + e[t + g], g += w, m -= 8
    );
    if (s === 0) s = 1 - d;
    else {
      if (s === u) return c ? NaN : (k ? -1 : 1) * (1 / 0);
      (c = c + Math.pow(2, n)), (s = s - d);
    }
    return (k ? -1 : 1) * c * Math.pow(2, s - n);
  };
Ho.write = function (e, t, r, n, i, s) {
  var c,
    o,
    u,
    d = s * 8 - i - 1,
    m = (1 << d) - 1,
    g = m >> 1,
    w = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
    k = n ? 0 : s - 1,
    L = n ? 1 : -1,
    H = t < 0 || (t === 0 && 1 / t < 0) ? 1 : 0;
  for (
    t = Math.abs(t),
      isNaN(t) || t === 1 / 0
        ? ((o = isNaN(t) ? 1 : 0), (c = m))
        : ((c = Math.floor(Math.log(t) / Math.LN2)),
          t * (u = Math.pow(2, -c)) < 1 && (c--, (u *= 2)),
          c + g >= 1 ? (t += w / u) : (t += w * Math.pow(2, 1 - g)),
          t * u >= 2 && (c++, (u /= 2)),
          c + g >= m
            ? ((o = 0), (c = m))
            : c + g >= 1
            ? ((o = (t * u - 1) * Math.pow(2, i)), (c = c + g))
            : ((o = t * Math.pow(2, g - 1) * Math.pow(2, i)), (c = 0)));
    i >= 8;
    e[r + k] = o & 255, k += L, o /= 256, i -= 8
  );
  for (
    c = (c << i) | o, d += i;
    d > 0;
    e[r + k] = c & 255, k += L, c /= 256, d -= 8
  );
  e[r + k - L] |= H * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ (function (e) {
  const t = ji,
    r = Ho,
    n =
      typeof Symbol == "function" && typeof Symbol.for == "function"
        ? Symbol.for("nodejs.util.inspect.custom")
        : null;
  (e.Buffer = o), (e.SlowBuffer = T), (e.INSPECT_MAX_BYTES = 50);
  const i = 2147483647;
  (e.kMaxLength = i),
    (o.TYPED_ARRAY_SUPPORT = s()),
    !o.TYPED_ARRAY_SUPPORT &&
      typeof console < "u" &&
      typeof console.error == "function" &&
      console.error(
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
      );
  function s() {
    try {
      const _ = new Uint8Array(1),
        l = {
          foo: function () {
            return 42;
          },
        };
      return (
        Object.setPrototypeOf(l, Uint8Array.prototype),
        Object.setPrototypeOf(_, l),
        _.foo() === 42
      );
    } catch {
      return !1;
    }
  }
  Object.defineProperty(o.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (o.isBuffer(this)) return this.buffer;
    },
  }),
    Object.defineProperty(o.prototype, "offset", {
      enumerable: !0,
      get: function () {
        if (o.isBuffer(this)) return this.byteOffset;
      },
    });
  function c(_) {
    if (_ > i)
      throw new RangeError(
        'The value "' + _ + '" is invalid for option "size"'
      );
    const l = new Uint8Array(_);
    return Object.setPrototypeOf(l, o.prototype), l;
  }
  function o(_, l, h) {
    if (typeof _ == "number") {
      if (typeof l == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return g(_);
    }
    return u(_, l, h);
  }
  o.poolSize = 8192;
  function u(_, l, h) {
    if (typeof _ == "string") return w(_, l);
    if (ArrayBuffer.isView(_)) return L(_);
    if (_ == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof _
      );
    if (
      Ye(_, ArrayBuffer) ||
      (_ && Ye(_.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer < "u" &&
        (Ye(_, SharedArrayBuffer) || (_ && Ye(_.buffer, SharedArrayBuffer))))
    )
      return H(_, l, h);
    if (typeof _ == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const S = _.valueOf && _.valueOf();
    if (S != null && S !== _) return o.from(S, l, h);
    const P = D(_);
    if (P) return P;
    if (
      typeof Symbol < "u" &&
      Symbol.toPrimitive != null &&
      typeof _[Symbol.toPrimitive] == "function"
    )
      return o.from(_[Symbol.toPrimitive]("string"), l, h);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof _
    );
  }
  (o.from = function (_, l, h) {
    return u(_, l, h);
  }),
    Object.setPrototypeOf(o.prototype, Uint8Array.prototype),
    Object.setPrototypeOf(o, Uint8Array);
  function d(_) {
    if (typeof _ != "number")
      throw new TypeError('"size" argument must be of type number');
    if (_ < 0)
      throw new RangeError(
        'The value "' + _ + '" is invalid for option "size"'
      );
  }
  function m(_, l, h) {
    return (
      d(_),
      _ <= 0
        ? c(_)
        : l !== void 0
        ? typeof h == "string"
          ? c(_).fill(l, h)
          : c(_).fill(l)
        : c(_)
    );
  }
  o.alloc = function (_, l, h) {
    return m(_, l, h);
  };
  function g(_) {
    return d(_), c(_ < 0 ? 0 : I(_) | 0);
  }
  (o.allocUnsafe = function (_) {
    return g(_);
  }),
    (o.allocUnsafeSlow = function (_) {
      return g(_);
    });
  function w(_, l) {
    if (((typeof l != "string" || l === "") && (l = "utf8"), !o.isEncoding(l)))
      throw new TypeError("Unknown encoding: " + l);
    const h = $(_, l) | 0;
    let S = c(h);
    const P = S.write(_, l);
    return P !== h && (S = S.slice(0, P)), S;
  }
  function k(_) {
    const l = _.length < 0 ? 0 : I(_.length) | 0,
      h = c(l);
    for (let S = 0; S < l; S += 1) h[S] = _[S] & 255;
    return h;
  }
  function L(_) {
    if (Ye(_, Uint8Array)) {
      const l = new Uint8Array(_);
      return H(l.buffer, l.byteOffset, l.byteLength);
    }
    return k(_);
  }
  function H(_, l, h) {
    if (l < 0 || _.byteLength < l)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (_.byteLength < l + (h || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let S;
    return (
      l === void 0 && h === void 0
        ? (S = new Uint8Array(_))
        : h === void 0
        ? (S = new Uint8Array(_, l))
        : (S = new Uint8Array(_, l, h)),
      Object.setPrototypeOf(S, o.prototype),
      S
    );
  }
  function D(_) {
    if (o.isBuffer(_)) {
      const l = I(_.length) | 0,
        h = c(l);
      return h.length === 0 || _.copy(h, 0, 0, l), h;
    }
    if (_.length !== void 0)
      return typeof _.length != "number" || be(_.length) ? c(0) : k(_);
    if (_.type === "Buffer" && Array.isArray(_.data)) return k(_.data);
  }
  function I(_) {
    if (_ >= i)
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          i.toString(16) +
          " bytes"
      );
    return _ | 0;
  }
  function T(_) {
    return +_ != _ && (_ = 0), o.alloc(+_);
  }
  (o.isBuffer = function (l) {
    return l != null && l._isBuffer === !0 && l !== o.prototype;
  }),
    (o.compare = function (l, h) {
      if (
        (Ye(l, Uint8Array) && (l = o.from(l, l.offset, l.byteLength)),
        Ye(h, Uint8Array) && (h = o.from(h, h.offset, h.byteLength)),
        !o.isBuffer(l) || !o.isBuffer(h))
      )
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      if (l === h) return 0;
      let S = l.length,
        P = h.length;
      for (let F = 0, U = Math.min(S, P); F < U; ++F)
        if (l[F] !== h[F]) {
          (S = l[F]), (P = h[F]);
          break;
        }
      return S < P ? -1 : P < S ? 1 : 0;
    }),
    (o.isEncoding = function (l) {
      switch (String(l).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    }),
    (o.concat = function (l, h) {
      if (!Array.isArray(l))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (l.length === 0) return o.alloc(0);
      let S;
      if (h === void 0) for (h = 0, S = 0; S < l.length; ++S) h += l[S].length;
      const P = o.allocUnsafe(h);
      let F = 0;
      for (S = 0; S < l.length; ++S) {
        let U = l[S];
        if (Ye(U, Uint8Array))
          F + U.length > P.length
            ? (o.isBuffer(U) || (U = o.from(U)), U.copy(P, F))
            : Uint8Array.prototype.set.call(P, U, F);
        else if (o.isBuffer(U)) U.copy(P, F);
        else throw new TypeError('"list" argument must be an Array of Buffers');
        F += U.length;
      }
      return P;
    });
  function $(_, l) {
    if (o.isBuffer(_)) return _.length;
    if (ArrayBuffer.isView(_) || Ye(_, ArrayBuffer)) return _.byteLength;
    if (typeof _ != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof _
      );
    const h = _.length,
      S = arguments.length > 2 && arguments[2] === !0;
    if (!S && h === 0) return 0;
    let P = !1;
    for (;;)
      switch (l) {
        case "ascii":
        case "latin1":
        case "binary":
          return h;
        case "utf8":
        case "utf-8":
          return re(_).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return h * 2;
        case "hex":
          return h >>> 1;
        case "base64":
          return Re(_).length;
        default:
          if (P) return S ? -1 : re(_).length;
          (l = ("" + l).toLowerCase()), (P = !0);
      }
  }
  o.byteLength = $;
  function V(_, l, h) {
    let S = !1;
    if (
      ((l === void 0 || l < 0) && (l = 0),
      l > this.length ||
        ((h === void 0 || h > this.length) && (h = this.length), h <= 0) ||
        ((h >>>= 0), (l >>>= 0), h <= l))
    )
      return "";
    for (_ || (_ = "utf8"); ; )
      switch (_) {
        case "hex":
          return A(this, l, h);
        case "utf8":
        case "utf-8":
          return a(this, l, h);
        case "ascii":
          return b(this, l, h);
        case "latin1":
        case "binary":
          return R(this, l, h);
        case "base64":
          return E(this, l, h);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return B(this, l, h);
        default:
          if (S) throw new TypeError("Unknown encoding: " + _);
          (_ = (_ + "").toLowerCase()), (S = !0);
      }
  }
  o.prototype._isBuffer = !0;
  function j(_, l, h) {
    const S = _[l];
    (_[l] = _[h]), (_[h] = S);
  }
  (o.prototype.swap16 = function () {
    const l = this.length;
    if (l % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let h = 0; h < l; h += 2) j(this, h, h + 1);
    return this;
  }),
    (o.prototype.swap32 = function () {
      const l = this.length;
      if (l % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let h = 0; h < l; h += 4) j(this, h, h + 3), j(this, h + 1, h + 2);
      return this;
    }),
    (o.prototype.swap64 = function () {
      const l = this.length;
      if (l % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let h = 0; h < l; h += 8)
        j(this, h, h + 7),
          j(this, h + 1, h + 6),
          j(this, h + 2, h + 5),
          j(this, h + 3, h + 4);
      return this;
    }),
    (o.prototype.toString = function () {
      const l = this.length;
      return l === 0
        ? ""
        : arguments.length === 0
        ? a(this, 0, l)
        : V.apply(this, arguments);
    }),
    (o.prototype.toLocaleString = o.prototype.toString),
    (o.prototype.equals = function (l) {
      if (!o.isBuffer(l)) throw new TypeError("Argument must be a Buffer");
      return this === l ? !0 : o.compare(this, l) === 0;
    }),
    (o.prototype.inspect = function () {
      let l = "";
      const h = e.INSPECT_MAX_BYTES;
      return (
        (l = this.toString("hex", 0, h)
          .replace(/(.{2})/g, "$1 ")
          .trim()),
        this.length > h && (l += " ... "),
        "<Buffer " + l + ">"
      );
    }),
    n && (o.prototype[n] = o.prototype.inspect),
    (o.prototype.compare = function (l, h, S, P, F) {
      if (
        (Ye(l, Uint8Array) && (l = o.from(l, l.offset, l.byteLength)),
        !o.isBuffer(l))
      )
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
            typeof l
        );
      if (
        (h === void 0 && (h = 0),
        S === void 0 && (S = l ? l.length : 0),
        P === void 0 && (P = 0),
        F === void 0 && (F = this.length),
        h < 0 || S > l.length || P < 0 || F > this.length)
      )
        throw new RangeError("out of range index");
      if (P >= F && h >= S) return 0;
      if (P >= F) return -1;
      if (h >= S) return 1;
      if (((h >>>= 0), (S >>>= 0), (P >>>= 0), (F >>>= 0), this === l))
        return 0;
      let U = F - P,
        ce = S - h;
      const ae = Math.min(U, ce),
        ie = this.slice(P, F),
        Me = l.slice(h, S);
      for (let ne = 0; ne < ae; ++ne)
        if (ie[ne] !== Me[ne]) {
          (U = ie[ne]), (ce = Me[ne]);
          break;
        }
      return U < ce ? -1 : ce < U ? 1 : 0;
    });
  function z(_, l, h, S, P) {
    if (_.length === 0) return -1;
    if (
      (typeof h == "string"
        ? ((S = h), (h = 0))
        : h > 2147483647
        ? (h = 2147483647)
        : h < -2147483648 && (h = -2147483648),
      (h = +h),
      be(h) && (h = P ? 0 : _.length - 1),
      h < 0 && (h = _.length + h),
      h >= _.length)
    ) {
      if (P) return -1;
      h = _.length - 1;
    } else if (h < 0)
      if (P) h = 0;
      else return -1;
    if ((typeof l == "string" && (l = o.from(l, S)), o.isBuffer(l)))
      return l.length === 0 ? -1 : ee(_, l, h, S, P);
    if (typeof l == "number")
      return (
        (l = l & 255),
        typeof Uint8Array.prototype.indexOf == "function"
          ? P
            ? Uint8Array.prototype.indexOf.call(_, l, h)
            : Uint8Array.prototype.lastIndexOf.call(_, l, h)
          : ee(_, [l], h, S, P)
      );
    throw new TypeError("val must be string, number or Buffer");
  }
  function ee(_, l, h, S, P) {
    let F = 1,
      U = _.length,
      ce = l.length;
    if (
      S !== void 0 &&
      ((S = String(S).toLowerCase()),
      S === "ucs2" || S === "ucs-2" || S === "utf16le" || S === "utf-16le")
    ) {
      if (_.length < 2 || l.length < 2) return -1;
      (F = 2), (U /= 2), (ce /= 2), (h /= 2);
    }
    function ae(Me, ne) {
      return F === 1 ? Me[ne] : Me.readUInt16BE(ne * F);
    }
    let ie;
    if (P) {
      let Me = -1;
      for (ie = h; ie < U; ie++)
        if (ae(_, ie) === ae(l, Me === -1 ? 0 : ie - Me)) {
          if ((Me === -1 && (Me = ie), ie - Me + 1 === ce)) return Me * F;
        } else Me !== -1 && (ie -= ie - Me), (Me = -1);
    } else
      for (h + ce > U && (h = U - ce), ie = h; ie >= 0; ie--) {
        let Me = !0;
        for (let ne = 0; ne < ce; ne++)
          if (ae(_, ie + ne) !== ae(l, ne)) {
            Me = !1;
            break;
          }
        if (Me) return ie;
      }
    return -1;
  }
  (o.prototype.includes = function (l, h, S) {
    return this.indexOf(l, h, S) !== -1;
  }),
    (o.prototype.indexOf = function (l, h, S) {
      return z(this, l, h, S, !0);
    }),
    (o.prototype.lastIndexOf = function (l, h, S) {
      return z(this, l, h, S, !1);
    });
  function Q(_, l, h, S) {
    h = Number(h) || 0;
    const P = _.length - h;
    S ? ((S = Number(S)), S > P && (S = P)) : (S = P);
    const F = l.length;
    S > F / 2 && (S = F / 2);
    let U;
    for (U = 0; U < S; ++U) {
      const ce = parseInt(l.substr(U * 2, 2), 16);
      if (be(ce)) return U;
      _[h + U] = ce;
    }
    return U;
  }
  function Z(_, l, h, S) {
    return Se(re(l, _.length - h), _, h, S);
  }
  function ue(_, l, h, S) {
    return Se(ve(l), _, h, S);
  }
  function oe(_, l, h, S) {
    return Se(Re(l), _, h, S);
  }
  function pe(_, l, h, S) {
    return Se(_t(l, _.length - h), _, h, S);
  }
  (o.prototype.write = function (l, h, S, P) {
    if (h === void 0) (P = "utf8"), (S = this.length), (h = 0);
    else if (S === void 0 && typeof h == "string")
      (P = h), (S = this.length), (h = 0);
    else if (isFinite(h))
      (h = h >>> 0),
        isFinite(S)
          ? ((S = S >>> 0), P === void 0 && (P = "utf8"))
          : ((P = S), (S = void 0));
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const F = this.length - h;
    if (
      ((S === void 0 || S > F) && (S = F),
      (l.length > 0 && (S < 0 || h < 0)) || h > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    P || (P = "utf8");
    let U = !1;
    for (;;)
      switch (P) {
        case "hex":
          return Q(this, l, h, S);
        case "utf8":
        case "utf-8":
          return Z(this, l, h, S);
        case "ascii":
        case "latin1":
        case "binary":
          return ue(this, l, h, S);
        case "base64":
          return oe(this, l, h, S);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return pe(this, l, h, S);
        default:
          if (U) throw new TypeError("Unknown encoding: " + P);
          (P = ("" + P).toLowerCase()), (U = !0);
      }
  }),
    (o.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0),
      };
    });
  function E(_, l, h) {
    return l === 0 && h === _.length
      ? t.fromByteArray(_)
      : t.fromByteArray(_.slice(l, h));
  }
  function a(_, l, h) {
    h = Math.min(_.length, h);
    const S = [];
    let P = l;
    for (; P < h; ) {
      const F = _[P];
      let U = null,
        ce = F > 239 ? 4 : F > 223 ? 3 : F > 191 ? 2 : 1;
      if (P + ce <= h) {
        let ae, ie, Me, ne;
        switch (ce) {
          case 1:
            F < 128 && (U = F);
            break;
          case 2:
            (ae = _[P + 1]),
              (ae & 192) === 128 &&
                ((ne = ((F & 31) << 6) | (ae & 63)), ne > 127 && (U = ne));
            break;
          case 3:
            (ae = _[P + 1]),
              (ie = _[P + 2]),
              (ae & 192) === 128 &&
                (ie & 192) === 128 &&
                ((ne = ((F & 15) << 12) | ((ae & 63) << 6) | (ie & 63)),
                ne > 2047 && (ne < 55296 || ne > 57343) && (U = ne));
            break;
          case 4:
            (ae = _[P + 1]),
              (ie = _[P + 2]),
              (Me = _[P + 3]),
              (ae & 192) === 128 &&
                (ie & 192) === 128 &&
                (Me & 192) === 128 &&
                ((ne =
                  ((F & 15) << 18) |
                  ((ae & 63) << 12) |
                  ((ie & 63) << 6) |
                  (Me & 63)),
                ne > 65535 && ne < 1114112 && (U = ne));
        }
      }
      U === null
        ? ((U = 65533), (ce = 1))
        : U > 65535 &&
          ((U -= 65536),
          S.push(((U >>> 10) & 1023) | 55296),
          (U = 56320 | (U & 1023))),
        S.push(U),
        (P += ce);
    }
    return y(S);
  }
  const p = 4096;
  function y(_) {
    const l = _.length;
    if (l <= p) return String.fromCharCode.apply(String, _);
    let h = "",
      S = 0;
    for (; S < l; )
      h += String.fromCharCode.apply(String, _.slice(S, (S += p)));
    return h;
  }
  function b(_, l, h) {
    let S = "";
    h = Math.min(_.length, h);
    for (let P = l; P < h; ++P) S += String.fromCharCode(_[P] & 127);
    return S;
  }
  function R(_, l, h) {
    let S = "";
    h = Math.min(_.length, h);
    for (let P = l; P < h; ++P) S += String.fromCharCode(_[P]);
    return S;
  }
  function A(_, l, h) {
    const S = _.length;
    (!l || l < 0) && (l = 0), (!h || h < 0 || h > S) && (h = S);
    let P = "";
    for (let F = l; F < h; ++F) P += Ce[_[F]];
    return P;
  }
  function B(_, l, h) {
    const S = _.slice(l, h);
    let P = "";
    for (let F = 0; F < S.length - 1; F += 2)
      P += String.fromCharCode(S[F] + S[F + 1] * 256);
    return P;
  }
  o.prototype.slice = function (l, h) {
    const S = this.length;
    (l = ~~l),
      (h = h === void 0 ? S : ~~h),
      l < 0 ? ((l += S), l < 0 && (l = 0)) : l > S && (l = S),
      h < 0 ? ((h += S), h < 0 && (h = 0)) : h > S && (h = S),
      h < l && (h = l);
    const P = this.subarray(l, h);
    return Object.setPrototypeOf(P, o.prototype), P;
  };
  function v(_, l, h) {
    if (_ % 1 !== 0 || _ < 0) throw new RangeError("offset is not uint");
    if (_ + l > h)
      throw new RangeError("Trying to access beyond buffer length");
  }
  (o.prototype.readUintLE = o.prototype.readUIntLE =
    function (l, h, S) {
      (l = l >>> 0), (h = h >>> 0), S || v(l, h, this.length);
      let P = this[l],
        F = 1,
        U = 0;
      for (; ++U < h && (F *= 256); ) P += this[l + U] * F;
      return P;
    }),
    (o.prototype.readUintBE = o.prototype.readUIntBE =
      function (l, h, S) {
        (l = l >>> 0), (h = h >>> 0), S || v(l, h, this.length);
        let P = this[l + --h],
          F = 1;
        for (; h > 0 && (F *= 256); ) P += this[l + --h] * F;
        return P;
      }),
    (o.prototype.readUint8 = o.prototype.readUInt8 =
      function (l, h) {
        return (l = l >>> 0), h || v(l, 1, this.length), this[l];
      }),
    (o.prototype.readUint16LE = o.prototype.readUInt16LE =
      function (l, h) {
        return (
          (l = l >>> 0), h || v(l, 2, this.length), this[l] | (this[l + 1] << 8)
        );
      }),
    (o.prototype.readUint16BE = o.prototype.readUInt16BE =
      function (l, h) {
        return (
          (l = l >>> 0), h || v(l, 2, this.length), (this[l] << 8) | this[l + 1]
        );
      }),
    (o.prototype.readUint32LE = o.prototype.readUInt32LE =
      function (l, h) {
        return (
          (l = l >>> 0),
          h || v(l, 4, this.length),
          (this[l] | (this[l + 1] << 8) | (this[l + 2] << 16)) +
            this[l + 3] * 16777216
        );
      }),
    (o.prototype.readUint32BE = o.prototype.readUInt32BE =
      function (l, h) {
        return (
          (l = l >>> 0),
          h || v(l, 4, this.length),
          this[l] * 16777216 +
            ((this[l + 1] << 16) | (this[l + 2] << 8) | this[l + 3])
        );
      }),
    (o.prototype.readBigUInt64LE = tt(function (l) {
      (l = l >>> 0), q(l, "offset");
      const h = this[l],
        S = this[l + 7];
      (h === void 0 || S === void 0) && G(l, this.length - 8);
      const P =
          h + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + this[++l] * 2 ** 24,
        F = this[++l] + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + S * 2 ** 24;
      return BigInt(P) + (BigInt(F) << BigInt(32));
    })),
    (o.prototype.readBigUInt64BE = tt(function (l) {
      (l = l >>> 0), q(l, "offset");
      const h = this[l],
        S = this[l + 7];
      (h === void 0 || S === void 0) && G(l, this.length - 8);
      const P =
          h * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + this[++l],
        F = this[++l] * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + S;
      return (BigInt(P) << BigInt(32)) + BigInt(F);
    })),
    (o.prototype.readIntLE = function (l, h, S) {
      (l = l >>> 0), (h = h >>> 0), S || v(l, h, this.length);
      let P = this[l],
        F = 1,
        U = 0;
      for (; ++U < h && (F *= 256); ) P += this[l + U] * F;
      return (F *= 128), P >= F && (P -= Math.pow(2, 8 * h)), P;
    }),
    (o.prototype.readIntBE = function (l, h, S) {
      (l = l >>> 0), (h = h >>> 0), S || v(l, h, this.length);
      let P = h,
        F = 1,
        U = this[l + --P];
      for (; P > 0 && (F *= 256); ) U += this[l + --P] * F;
      return (F *= 128), U >= F && (U -= Math.pow(2, 8 * h)), U;
    }),
    (o.prototype.readInt8 = function (l, h) {
      return (
        (l = l >>> 0),
        h || v(l, 1, this.length),
        this[l] & 128 ? (255 - this[l] + 1) * -1 : this[l]
      );
    }),
    (o.prototype.readInt16LE = function (l, h) {
      (l = l >>> 0), h || v(l, 2, this.length);
      const S = this[l] | (this[l + 1] << 8);
      return S & 32768 ? S | 4294901760 : S;
    }),
    (o.prototype.readInt16BE = function (l, h) {
      (l = l >>> 0), h || v(l, 2, this.length);
      const S = this[l + 1] | (this[l] << 8);
      return S & 32768 ? S | 4294901760 : S;
    }),
    (o.prototype.readInt32LE = function (l, h) {
      return (
        (l = l >>> 0),
        h || v(l, 4, this.length),
        this[l] | (this[l + 1] << 8) | (this[l + 2] << 16) | (this[l + 3] << 24)
      );
    }),
    (o.prototype.readInt32BE = function (l, h) {
      return (
        (l = l >>> 0),
        h || v(l, 4, this.length),
        (this[l] << 24) | (this[l + 1] << 16) | (this[l + 2] << 8) | this[l + 3]
      );
    }),
    (o.prototype.readBigInt64LE = tt(function (l) {
      (l = l >>> 0), q(l, "offset");
      const h = this[l],
        S = this[l + 7];
      (h === void 0 || S === void 0) && G(l, this.length - 8);
      const P =
        this[l + 4] + this[l + 5] * 2 ** 8 + this[l + 6] * 2 ** 16 + (S << 24);
      return (
        (BigInt(P) << BigInt(32)) +
        BigInt(
          h + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + this[++l] * 2 ** 24
        )
      );
    })),
    (o.prototype.readBigInt64BE = tt(function (l) {
      (l = l >>> 0), q(l, "offset");
      const h = this[l],
        S = this[l + 7];
      (h === void 0 || S === void 0) && G(l, this.length - 8);
      const P =
        (h << 24) + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + this[++l];
      return (
        (BigInt(P) << BigInt(32)) +
        BigInt(
          this[++l] * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + S
        )
      );
    })),
    (o.prototype.readFloatLE = function (l, h) {
      return (
        (l = l >>> 0), h || v(l, 4, this.length), r.read(this, l, !0, 23, 4)
      );
    }),
    (o.prototype.readFloatBE = function (l, h) {
      return (
        (l = l >>> 0), h || v(l, 4, this.length), r.read(this, l, !1, 23, 4)
      );
    }),
    (o.prototype.readDoubleLE = function (l, h) {
      return (
        (l = l >>> 0), h || v(l, 8, this.length), r.read(this, l, !0, 52, 8)
      );
    }),
    (o.prototype.readDoubleBE = function (l, h) {
      return (
        (l = l >>> 0), h || v(l, 8, this.length), r.read(this, l, !1, 52, 8)
      );
    });
  function f(_, l, h, S, P, F) {
    if (!o.isBuffer(_))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (l > P || l < F)
      throw new RangeError('"value" argument is out of bounds');
    if (h + S > _.length) throw new RangeError("Index out of range");
  }
  (o.prototype.writeUintLE = o.prototype.writeUIntLE =
    function (l, h, S, P) {
      if (((l = +l), (h = h >>> 0), (S = S >>> 0), !P)) {
        const ce = Math.pow(2, 8 * S) - 1;
        f(this, l, h, S, ce, 0);
      }
      let F = 1,
        U = 0;
      for (this[h] = l & 255; ++U < S && (F *= 256); )
        this[h + U] = (l / F) & 255;
      return h + S;
    }),
    (o.prototype.writeUintBE = o.prototype.writeUIntBE =
      function (l, h, S, P) {
        if (((l = +l), (h = h >>> 0), (S = S >>> 0), !P)) {
          const ce = Math.pow(2, 8 * S) - 1;
          f(this, l, h, S, ce, 0);
        }
        let F = S - 1,
          U = 1;
        for (this[h + F] = l & 255; --F >= 0 && (U *= 256); )
          this[h + F] = (l / U) & 255;
        return h + S;
      }),
    (o.prototype.writeUint8 = o.prototype.writeUInt8 =
      function (l, h, S) {
        return (
          (l = +l),
          (h = h >>> 0),
          S || f(this, l, h, 1, 255, 0),
          (this[h] = l & 255),
          h + 1
        );
      }),
    (o.prototype.writeUint16LE = o.prototype.writeUInt16LE =
      function (l, h, S) {
        return (
          (l = +l),
          (h = h >>> 0),
          S || f(this, l, h, 2, 65535, 0),
          (this[h] = l & 255),
          (this[h + 1] = l >>> 8),
          h + 2
        );
      }),
    (o.prototype.writeUint16BE = o.prototype.writeUInt16BE =
      function (l, h, S) {
        return (
          (l = +l),
          (h = h >>> 0),
          S || f(this, l, h, 2, 65535, 0),
          (this[h] = l >>> 8),
          (this[h + 1] = l & 255),
          h + 2
        );
      }),
    (o.prototype.writeUint32LE = o.prototype.writeUInt32LE =
      function (l, h, S) {
        return (
          (l = +l),
          (h = h >>> 0),
          S || f(this, l, h, 4, 4294967295, 0),
          (this[h + 3] = l >>> 24),
          (this[h + 2] = l >>> 16),
          (this[h + 1] = l >>> 8),
          (this[h] = l & 255),
          h + 4
        );
      }),
    (o.prototype.writeUint32BE = o.prototype.writeUInt32BE =
      function (l, h, S) {
        return (
          (l = +l),
          (h = h >>> 0),
          S || f(this, l, h, 4, 4294967295, 0),
          (this[h] = l >>> 24),
          (this[h + 1] = l >>> 16),
          (this[h + 2] = l >>> 8),
          (this[h + 3] = l & 255),
          h + 4
        );
      });
  function x(_, l, h, S, P) {
    M(l, S, P, _, h, 7);
    let F = Number(l & BigInt(4294967295));
    (_[h++] = F),
      (F = F >> 8),
      (_[h++] = F),
      (F = F >> 8),
      (_[h++] = F),
      (F = F >> 8),
      (_[h++] = F);
    let U = Number((l >> BigInt(32)) & BigInt(4294967295));
    return (
      (_[h++] = U),
      (U = U >> 8),
      (_[h++] = U),
      (U = U >> 8),
      (_[h++] = U),
      (U = U >> 8),
      (_[h++] = U),
      h
    );
  }
  function K(_, l, h, S, P) {
    M(l, S, P, _, h, 7);
    let F = Number(l & BigInt(4294967295));
    (_[h + 7] = F),
      (F = F >> 8),
      (_[h + 6] = F),
      (F = F >> 8),
      (_[h + 5] = F),
      (F = F >> 8),
      (_[h + 4] = F);
    let U = Number((l >> BigInt(32)) & BigInt(4294967295));
    return (
      (_[h + 3] = U),
      (U = U >> 8),
      (_[h + 2] = U),
      (U = U >> 8),
      (_[h + 1] = U),
      (U = U >> 8),
      (_[h] = U),
      h + 8
    );
  }
  (o.prototype.writeBigUInt64LE = tt(function (l, h = 0) {
    return x(this, l, h, BigInt(0), BigInt("0xffffffffffffffff"));
  })),
    (o.prototype.writeBigUInt64BE = tt(function (l, h = 0) {
      return K(this, l, h, BigInt(0), BigInt("0xffffffffffffffff"));
    })),
    (o.prototype.writeIntLE = function (l, h, S, P) {
      if (((l = +l), (h = h >>> 0), !P)) {
        const ae = Math.pow(2, 8 * S - 1);
        f(this, l, h, S, ae - 1, -ae);
      }
      let F = 0,
        U = 1,
        ce = 0;
      for (this[h] = l & 255; ++F < S && (U *= 256); )
        l < 0 && ce === 0 && this[h + F - 1] !== 0 && (ce = 1),
          (this[h + F] = (((l / U) >> 0) - ce) & 255);
      return h + S;
    }),
    (o.prototype.writeIntBE = function (l, h, S, P) {
      if (((l = +l), (h = h >>> 0), !P)) {
        const ae = Math.pow(2, 8 * S - 1);
        f(this, l, h, S, ae - 1, -ae);
      }
      let F = S - 1,
        U = 1,
        ce = 0;
      for (this[h + F] = l & 255; --F >= 0 && (U *= 256); )
        l < 0 && ce === 0 && this[h + F + 1] !== 0 && (ce = 1),
          (this[h + F] = (((l / U) >> 0) - ce) & 255);
      return h + S;
    }),
    (o.prototype.writeInt8 = function (l, h, S) {
      return (
        (l = +l),
        (h = h >>> 0),
        S || f(this, l, h, 1, 127, -128),
        l < 0 && (l = 255 + l + 1),
        (this[h] = l & 255),
        h + 1
      );
    }),
    (o.prototype.writeInt16LE = function (l, h, S) {
      return (
        (l = +l),
        (h = h >>> 0),
        S || f(this, l, h, 2, 32767, -32768),
        (this[h] = l & 255),
        (this[h + 1] = l >>> 8),
        h + 2
      );
    }),
    (o.prototype.writeInt16BE = function (l, h, S) {
      return (
        (l = +l),
        (h = h >>> 0),
        S || f(this, l, h, 2, 32767, -32768),
        (this[h] = l >>> 8),
        (this[h + 1] = l & 255),
        h + 2
      );
    }),
    (o.prototype.writeInt32LE = function (l, h, S) {
      return (
        (l = +l),
        (h = h >>> 0),
        S || f(this, l, h, 4, 2147483647, -2147483648),
        (this[h] = l & 255),
        (this[h + 1] = l >>> 8),
        (this[h + 2] = l >>> 16),
        (this[h + 3] = l >>> 24),
        h + 4
      );
    }),
    (o.prototype.writeInt32BE = function (l, h, S) {
      return (
        (l = +l),
        (h = h >>> 0),
        S || f(this, l, h, 4, 2147483647, -2147483648),
        l < 0 && (l = 4294967295 + l + 1),
        (this[h] = l >>> 24),
        (this[h + 1] = l >>> 16),
        (this[h + 2] = l >>> 8),
        (this[h + 3] = l & 255),
        h + 4
      );
    }),
    (o.prototype.writeBigInt64LE = tt(function (l, h = 0) {
      return x(
        this,
        l,
        h,
        -BigInt("0x8000000000000000"),
        BigInt("0x7fffffffffffffff")
      );
    })),
    (o.prototype.writeBigInt64BE = tt(function (l, h = 0) {
      return K(
        this,
        l,
        h,
        -BigInt("0x8000000000000000"),
        BigInt("0x7fffffffffffffff")
      );
    }));
  function Y(_, l, h, S, P, F) {
    if (h + S > _.length) throw new RangeError("Index out of range");
    if (h < 0) throw new RangeError("Index out of range");
  }
  function N(_, l, h, S, P) {
    return (
      (l = +l),
      (h = h >>> 0),
      P || Y(_, l, h, 4),
      r.write(_, l, h, S, 23, 4),
      h + 4
    );
  }
  (o.prototype.writeFloatLE = function (l, h, S) {
    return N(this, l, h, !0, S);
  }),
    (o.prototype.writeFloatBE = function (l, h, S) {
      return N(this, l, h, !1, S);
    });
  function O(_, l, h, S, P) {
    return (
      (l = +l),
      (h = h >>> 0),
      P || Y(_, l, h, 8),
      r.write(_, l, h, S, 52, 8),
      h + 8
    );
  }
  (o.prototype.writeDoubleLE = function (l, h, S) {
    return O(this, l, h, !0, S);
  }),
    (o.prototype.writeDoubleBE = function (l, h, S) {
      return O(this, l, h, !1, S);
    }),
    (o.prototype.copy = function (l, h, S, P) {
      if (!o.isBuffer(l)) throw new TypeError("argument should be a Buffer");
      if (
        (S || (S = 0),
        !P && P !== 0 && (P = this.length),
        h >= l.length && (h = l.length),
        h || (h = 0),
        P > 0 && P < S && (P = S),
        P === S || l.length === 0 || this.length === 0)
      )
        return 0;
      if (h < 0) throw new RangeError("targetStart out of bounds");
      if (S < 0 || S >= this.length) throw new RangeError("Index out of range");
      if (P < 0) throw new RangeError("sourceEnd out of bounds");
      P > this.length && (P = this.length),
        l.length - h < P - S && (P = l.length - h + S);
      const F = P - S;
      return (
        this === l && typeof Uint8Array.prototype.copyWithin == "function"
          ? this.copyWithin(h, S, P)
          : Uint8Array.prototype.set.call(l, this.subarray(S, P), h),
        F
      );
    }),
    (o.prototype.fill = function (l, h, S, P) {
      if (typeof l == "string") {
        if (
          (typeof h == "string"
            ? ((P = h), (h = 0), (S = this.length))
            : typeof S == "string" && ((P = S), (S = this.length)),
          P !== void 0 && typeof P != "string")
        )
          throw new TypeError("encoding must be a string");
        if (typeof P == "string" && !o.isEncoding(P))
          throw new TypeError("Unknown encoding: " + P);
        if (l.length === 1) {
          const U = l.charCodeAt(0);
          ((P === "utf8" && U < 128) || P === "latin1") && (l = U);
        }
      } else
        typeof l == "number"
          ? (l = l & 255)
          : typeof l == "boolean" && (l = Number(l));
      if (h < 0 || this.length < h || this.length < S)
        throw new RangeError("Out of range index");
      if (S <= h) return this;
      (h = h >>> 0), (S = S === void 0 ? this.length : S >>> 0), l || (l = 0);
      let F;
      if (typeof l == "number") for (F = h; F < S; ++F) this[F] = l;
      else {
        const U = o.isBuffer(l) ? l : o.from(l, P),
          ce = U.length;
        if (ce === 0)
          throw new TypeError(
            'The value "' + l + '" is invalid for argument "value"'
          );
        for (F = 0; F < S - h; ++F) this[F + h] = U[F % ce];
      }
      return this;
    });
  const W = {};
  function J(_, l, h) {
    W[_] = class extends h {
      constructor() {
        super(),
          Object.defineProperty(this, "message", {
            value: l.apply(this, arguments),
            writable: !0,
            configurable: !0,
          }),
          (this.name = `${this.name} [${_}]`),
          this.stack,
          delete this.name;
      }
      get code() {
        return _;
      }
      set code(P) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: P,
          writable: !0,
        });
      }
      toString() {
        return `${this.name} [${_}]: ${this.message}`;
      }
    };
  }
  J(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function (_) {
      return _
        ? `${_} is outside of buffer bounds`
        : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ),
    J(
      "ERR_INVALID_ARG_TYPE",
      function (_, l) {
        return `The "${_}" argument must be of type number. Received type ${typeof l}`;
      },
      TypeError
    ),
    J(
      "ERR_OUT_OF_RANGE",
      function (_, l, h) {
        let S = `The value of "${_}" is out of range.`,
          P = h;
        return (
          Number.isInteger(h) && Math.abs(h) > 2 ** 32
            ? (P = he(String(h)))
            : typeof h == "bigint" &&
              ((P = String(h)),
              (h > BigInt(2) ** BigInt(32) || h < -(BigInt(2) ** BigInt(32))) &&
                (P = he(P)),
              (P += "n")),
          (S += ` It must be ${l}. Received ${P}`),
          S
        );
      },
      RangeError
    );
  function he(_) {
    let l = "",
      h = _.length;
    const S = _[0] === "-" ? 1 : 0;
    for (; h >= S + 4; h -= 3) l = `_${_.slice(h - 3, h)}${l}`;
    return `${_.slice(0, h)}${l}`;
  }
  function C(_, l, h) {
    q(l, "offset"),
      (_[l] === void 0 || _[l + h] === void 0) && G(l, _.length - (h + 1));
  }
  function M(_, l, h, S, P, F) {
    if (_ > h || _ < l) {
      const U = typeof l == "bigint" ? "n" : "";
      let ce;
      throw (
        (F > 3
          ? l === 0 || l === BigInt(0)
            ? (ce = `>= 0${U} and < 2${U} ** ${(F + 1) * 8}${U}`)
            : (ce = `>= -(2${U} ** ${(F + 1) * 8 - 1}${U}) and < 2 ** ${
                (F + 1) * 8 - 1
              }${U}`)
          : (ce = `>= ${l}${U} and <= ${h}${U}`),
        new W.ERR_OUT_OF_RANGE("value", ce, _))
      );
    }
    C(S, P, F);
  }
  function q(_, l) {
    if (typeof _ != "number") throw new W.ERR_INVALID_ARG_TYPE(l, "number", _);
  }
  function G(_, l, h) {
    throw Math.floor(_) !== _
      ? (q(_, h), new W.ERR_OUT_OF_RANGE(h || "offset", "an integer", _))
      : l < 0
      ? new W.ERR_BUFFER_OUT_OF_BOUNDS()
      : new W.ERR_OUT_OF_RANGE(h || "offset", `>= ${h ? 1 : 0} and <= ${l}`, _);
  }
  const se = /[^+/0-9A-Za-z-_]/g;
  function fe(_) {
    if (((_ = _.split("=")[0]), (_ = _.trim().replace(se, "")), _.length < 2))
      return "";
    for (; _.length % 4 !== 0; ) _ = _ + "=";
    return _;
  }
  function re(_, l) {
    l = l || 1 / 0;
    let h;
    const S = _.length;
    let P = null;
    const F = [];
    for (let U = 0; U < S; ++U) {
      if (((h = _.charCodeAt(U)), h > 55295 && h < 57344)) {
        if (!P) {
          if (h > 56319) {
            (l -= 3) > -1 && F.push(239, 191, 189);
            continue;
          } else if (U + 1 === S) {
            (l -= 3) > -1 && F.push(239, 191, 189);
            continue;
          }
          P = h;
          continue;
        }
        if (h < 56320) {
          (l -= 3) > -1 && F.push(239, 191, 189), (P = h);
          continue;
        }
        h = (((P - 55296) << 10) | (h - 56320)) + 65536;
      } else P && (l -= 3) > -1 && F.push(239, 191, 189);
      if (((P = null), h < 128)) {
        if ((l -= 1) < 0) break;
        F.push(h);
      } else if (h < 2048) {
        if ((l -= 2) < 0) break;
        F.push((h >> 6) | 192, (h & 63) | 128);
      } else if (h < 65536) {
        if ((l -= 3) < 0) break;
        F.push((h >> 12) | 224, ((h >> 6) & 63) | 128, (h & 63) | 128);
      } else if (h < 1114112) {
        if ((l -= 4) < 0) break;
        F.push(
          (h >> 18) | 240,
          ((h >> 12) & 63) | 128,
          ((h >> 6) & 63) | 128,
          (h & 63) | 128
        );
      } else throw new Error("Invalid code point");
    }
    return F;
  }
  function ve(_) {
    const l = [];
    for (let h = 0; h < _.length; ++h) l.push(_.charCodeAt(h) & 255);
    return l;
  }
  function _t(_, l) {
    let h, S, P;
    const F = [];
    for (let U = 0; U < _.length && !((l -= 2) < 0); ++U)
      (h = _.charCodeAt(U)), (S = h >> 8), (P = h % 256), F.push(P), F.push(S);
    return F;
  }
  function Re(_) {
    return t.toByteArray(fe(_));
  }
  function Se(_, l, h, S) {
    let P;
    for (P = 0; P < S && !(P + h >= l.length || P >= _.length); ++P)
      l[P + h] = _[P];
    return P;
  }
  function Ye(_, l) {
    return (
      _ instanceof l ||
      (_ != null &&
        _.constructor != null &&
        _.constructor.name != null &&
        _.constructor.name === l.name)
    );
  }
  function be(_) {
    return _ !== _;
  }
  const Ce = (function () {
    const _ = "0123456789abcdef",
      l = new Array(256);
    for (let h = 0; h < 16; ++h) {
      const S = h * 16;
      for (let P = 0; P < 16; ++P) l[S + P] = _[h] + _[P];
    }
    return l;
  })();
  function tt(_) {
    return typeof BigInt > "u" ? Ee : _;
  }
  function Ee() {
    throw new Error("BigInt not supported");
  }
})(Un);
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ (function (
  e,
  t
) {
  var r = Un,
    n = r.Buffer;
  function i(c, o) {
    for (var u in c) o[u] = c[u];
  }
  n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow
    ? (e.exports = r)
    : (i(r, t), (t.Buffer = s));
  function s(c, o, u) {
    return n(c, o, u);
  }
  (s.prototype = Object.create(n.prototype)),
    i(n, s),
    (s.from = function (c, o, u) {
      if (typeof c == "number")
        throw new TypeError("Argument must not be a number");
      return n(c, o, u);
    }),
    (s.alloc = function (c, o, u) {
      if (typeof c != "number")
        throw new TypeError("Argument must be a number");
      var d = n(c);
      return (
        o !== void 0
          ? typeof u == "string"
            ? d.fill(o, u)
            : d.fill(o)
          : d.fill(0),
        d
      );
    }),
    (s.allocUnsafe = function (c) {
      if (typeof c != "number")
        throw new TypeError("Argument must be a number");
      return n(c);
    }),
    (s.allocUnsafeSlow = function (c) {
      if (typeof c != "number")
        throw new TypeError("Argument must be a number");
      return r.SlowBuffer(c);
    });
})(Ro, Ro.exports);
var rr = Ro.exports,
  Ml = rr.Buffer;
function Ui(e, t) {
  (this._block = Ml.alloc(e)),
    (this._finalSize = t),
    (this._blockSize = e),
    (this._len = 0);
}
Ui.prototype.update = function (e, t) {
  typeof e == "string" && ((t = t || "utf8"), (e = Ml.from(e, t)));
  for (
    var r = this._block,
      n = this._blockSize,
      i = e.length,
      s = this._len,
      c = 0;
    c < i;

  ) {
    for (var o = s % n, u = Math.min(i - c, n - o), d = 0; d < u; d++)
      r[o + d] = e[c + d];
    (s += u), (c += u), s % n === 0 && this._update(r);
  }
  return (this._len += i), this;
};
Ui.prototype.digest = function (e) {
  var t = this._len % this._blockSize;
  (this._block[t] = 128),
    this._block.fill(0, t + 1),
    t >= this._finalSize && (this._update(this._block), this._block.fill(0));
  var r = this._len * 8;
  if (r <= 4294967295) this._block.writeUInt32BE(r, this._blockSize - 4);
  else {
    var n = (r & 4294967295) >>> 0,
      i = (r - n) / 4294967296;
    this._block.writeUInt32BE(i, this._blockSize - 8),
      this._block.writeUInt32BE(n, this._blockSize - 4);
  }
  this._update(this._block);
  var s = this._hash();
  return e ? s.toString(e) : s;
};
Ui.prototype._update = function () {
  throw new Error("_update must be implemented by subclass");
};
var _n = Ui,
  Xh = It,
  xl = _n,
  ef = rr.Buffer,
  tf = [1518500249, 1859775393, -1894007588, -899497514],
  rf = new Array(80);
function Hn() {
  this.init(), (this._w = rf), xl.call(this, 64, 56);
}
Xh(Hn, xl);
Hn.prototype.init = function () {
  return (
    (this._a = 1732584193),
    (this._b = 4023233417),
    (this._c = 2562383102),
    (this._d = 271733878),
    (this._e = 3285377520),
    this
  );
};
function nf(e) {
  return (e << 5) | (e >>> 27);
}
function sf(e) {
  return (e << 30) | (e >>> 2);
}
function of(e, t, r, n) {
  return e === 0
    ? (t & r) | (~t & n)
    : e === 2
    ? (t & r) | (t & n) | (r & n)
    : t ^ r ^ n;
}
Hn.prototype._update = function (e) {
  for (
    var t = this._w,
      r = this._a | 0,
      n = this._b | 0,
      i = this._c | 0,
      s = this._d | 0,
      c = this._e | 0,
      o = 0;
    o < 16;
    ++o
  )
    t[o] = e.readInt32BE(o * 4);
  for (; o < 80; ++o) t[o] = t[o - 3] ^ t[o - 8] ^ t[o - 14] ^ t[o - 16];
  for (var u = 0; u < 80; ++u) {
    var d = ~~(u / 20),
      m = (nf(r) + of(d, n, i, s) + c + t[u] + tf[d]) | 0;
    (c = s), (s = i), (i = sf(n)), (n = r), (r = m);
  }
  (this._a = (r + this._a) | 0),
    (this._b = (n + this._b) | 0),
    (this._c = (i + this._c) | 0),
    (this._d = (s + this._d) | 0),
    (this._e = (c + this._e) | 0);
};
Hn.prototype._hash = function () {
  var e = ef.allocUnsafe(20);
  return (
    e.writeInt32BE(this._a | 0, 0),
    e.writeInt32BE(this._b | 0, 4),
    e.writeInt32BE(this._c | 0, 8),
    e.writeInt32BE(this._d | 0, 12),
    e.writeInt32BE(this._e | 0, 16),
    e
  );
};
var af = Hn,
  cf = It,
  kl = _n,
  lf = rr.Buffer,
  uf = [1518500249, 1859775393, -1894007588, -899497514],
  hf = new Array(80);
function Wn() {
  this.init(), (this._w = hf), kl.call(this, 64, 56);
}
cf(Wn, kl);
Wn.prototype.init = function () {
  return (
    (this._a = 1732584193),
    (this._b = 4023233417),
    (this._c = 2562383102),
    (this._d = 271733878),
    (this._e = 3285377520),
    this
  );
};
function ff(e) {
  return (e << 1) | (e >>> 31);
}
function df(e) {
  return (e << 5) | (e >>> 27);
}
function pf(e) {
  return (e << 30) | (e >>> 2);
}
function gf(e, t, r, n) {
  return e === 0
    ? (t & r) | (~t & n)
    : e === 2
    ? (t & r) | (t & n) | (r & n)
    : t ^ r ^ n;
}
Wn.prototype._update = function (e) {
  for (
    var t = this._w,
      r = this._a | 0,
      n = this._b | 0,
      i = this._c | 0,
      s = this._d | 0,
      c = this._e | 0,
      o = 0;
    o < 16;
    ++o
  )
    t[o] = e.readInt32BE(o * 4);
  for (; o < 80; ++o) t[o] = ff(t[o - 3] ^ t[o - 8] ^ t[o - 14] ^ t[o - 16]);
  for (var u = 0; u < 80; ++u) {
    var d = ~~(u / 20),
      m = (df(r) + gf(d, n, i, s) + c + t[u] + uf[d]) | 0;
    (c = s), (s = i), (i = pf(n)), (n = r), (r = m);
  }
  (this._a = (r + this._a) | 0),
    (this._b = (n + this._b) | 0),
    (this._c = (i + this._c) | 0),
    (this._d = (s + this._d) | 0),
    (this._e = (c + this._e) | 0);
};
Wn.prototype._hash = function () {
  var e = lf.allocUnsafe(20);
  return (
    e.writeInt32BE(this._a | 0, 0),
    e.writeInt32BE(this._b | 0, 4),
    e.writeInt32BE(this._c | 0, 8),
    e.writeInt32BE(this._d | 0, 12),
    e.writeInt32BE(this._e | 0, 16),
    e
  );
};
var mf = Wn,
  _f = It,
  Il = _n,
  yf = rr.Buffer,
  vf = [
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ],
  wf = new Array(64);
function Vn() {
  this.init(), (this._w = wf), Il.call(this, 64, 56);
}
_f(Vn, Il);
Vn.prototype.init = function () {
  return (
    (this._a = 1779033703),
    (this._b = 3144134277),
    (this._c = 1013904242),
    (this._d = 2773480762),
    (this._e = 1359893119),
    (this._f = 2600822924),
    (this._g = 528734635),
    (this._h = 1541459225),
    this
  );
};
function bf(e, t, r) {
  return r ^ (e & (t ^ r));
}
function Ef(e, t, r) {
  return (e & t) | (r & (e | t));
}
function Sf(e) {
  return (
    ((e >>> 2) | (e << 30)) ^
    ((e >>> 13) | (e << 19)) ^
    ((e >>> 22) | (e << 10))
  );
}
function Rf(e) {
  return (
    ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7))
  );
}
function Cf(e) {
  return ((e >>> 7) | (e << 25)) ^ ((e >>> 18) | (e << 14)) ^ (e >>> 3);
}
function Mf(e) {
  return ((e >>> 17) | (e << 15)) ^ ((e >>> 19) | (e << 13)) ^ (e >>> 10);
}
Vn.prototype._update = function (e) {
  for (
    var t = this._w,
      r = this._a | 0,
      n = this._b | 0,
      i = this._c | 0,
      s = this._d | 0,
      c = this._e | 0,
      o = this._f | 0,
      u = this._g | 0,
      d = this._h | 0,
      m = 0;
    m < 16;
    ++m
  )
    t[m] = e.readInt32BE(m * 4);
  for (; m < 64; ++m)
    t[m] = (Mf(t[m - 2]) + t[m - 7] + Cf(t[m - 15]) + t[m - 16]) | 0;
  for (var g = 0; g < 64; ++g) {
    var w = (d + Rf(c) + bf(c, o, u) + vf[g] + t[g]) | 0,
      k = (Sf(r) + Ef(r, n, i)) | 0;
    (d = u),
      (u = o),
      (o = c),
      (c = (s + w) | 0),
      (s = i),
      (i = n),
      (n = r),
      (r = (w + k) | 0);
  }
  (this._a = (r + this._a) | 0),
    (this._b = (n + this._b) | 0),
    (this._c = (i + this._c) | 0),
    (this._d = (s + this._d) | 0),
    (this._e = (c + this._e) | 0),
    (this._f = (o + this._f) | 0),
    (this._g = (u + this._g) | 0),
    (this._h = (d + this._h) | 0);
};
Vn.prototype._hash = function () {
  var e = yf.allocUnsafe(32);
  return (
    e.writeInt32BE(this._a, 0),
    e.writeInt32BE(this._b, 4),
    e.writeInt32BE(this._c, 8),
    e.writeInt32BE(this._d, 12),
    e.writeInt32BE(this._e, 16),
    e.writeInt32BE(this._f, 20),
    e.writeInt32BE(this._g, 24),
    e.writeInt32BE(this._h, 28),
    e
  );
};
var Al = Vn,
  xf = It,
  kf = Al,
  If = _n,
  Af = rr.Buffer,
  Tf = new Array(64);
function Hi() {
  this.init(), (this._w = Tf), If.call(this, 64, 56);
}
xf(Hi, kf);
Hi.prototype.init = function () {
  return (
    (this._a = 3238371032),
    (this._b = 914150663),
    (this._c = 812702999),
    (this._d = 4144912697),
    (this._e = 4290775857),
    (this._f = 1750603025),
    (this._g = 1694076839),
    (this._h = 3204075428),
    this
  );
};
Hi.prototype._hash = function () {
  var e = Af.allocUnsafe(28);
  return (
    e.writeInt32BE(this._a, 0),
    e.writeInt32BE(this._b, 4),
    e.writeInt32BE(this._c, 8),
    e.writeInt32BE(this._d, 12),
    e.writeInt32BE(this._e, 16),
    e.writeInt32BE(this._f, 20),
    e.writeInt32BE(this._g, 24),
    e
  );
};
var Nf = Hi,
  Lf = It,
  Tl = _n,
  Bf = rr.Buffer,
  Na = [
    1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
    3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
    2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
    310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
    1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
    3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
    264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
    1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
    2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
    3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
    113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
    773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
    1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
    2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
    3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
    3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
    430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
    883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
    1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
    2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
    2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
    3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
    3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
    174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
    685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
    1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
    1607167915, 987167468, 1816402316, 1246189591,
  ],
  Pf = new Array(160);
function qn() {
  this.init(), (this._w = Pf), Tl.call(this, 128, 112);
}
Lf(qn, Tl);
qn.prototype.init = function () {
  return (
    (this._ah = 1779033703),
    (this._bh = 3144134277),
    (this._ch = 1013904242),
    (this._dh = 2773480762),
    (this._eh = 1359893119),
    (this._fh = 2600822924),
    (this._gh = 528734635),
    (this._hh = 1541459225),
    (this._al = 4089235720),
    (this._bl = 2227873595),
    (this._cl = 4271175723),
    (this._dl = 1595750129),
    (this._el = 2917565137),
    (this._fl = 725511199),
    (this._gl = 4215389547),
    (this._hl = 327033209),
    this
  );
};
function La(e, t, r) {
  return r ^ (e & (t ^ r));
}
function Ba(e, t, r) {
  return (e & t) | (r & (e | t));
}
function Pa(e, t) {
  return (
    ((e >>> 28) | (t << 4)) ^ ((t >>> 2) | (e << 30)) ^ ((t >>> 7) | (e << 25))
  );
}
function Oa(e, t) {
  return (
    ((e >>> 14) | (t << 18)) ^
    ((e >>> 18) | (t << 14)) ^
    ((t >>> 9) | (e << 23))
  );
}
function Of(e, t) {
  return ((e >>> 1) | (t << 31)) ^ ((e >>> 8) | (t << 24)) ^ (e >>> 7);
}
function $f(e, t) {
  return (
    ((e >>> 1) | (t << 31)) ^ ((e >>> 8) | (t << 24)) ^ ((e >>> 7) | (t << 25))
  );
}
function Ff(e, t) {
  return ((e >>> 19) | (t << 13)) ^ ((t >>> 29) | (e << 3)) ^ (e >>> 6);
}
function Df(e, t) {
  return (
    ((e >>> 19) | (t << 13)) ^ ((t >>> 29) | (e << 3)) ^ ((e >>> 6) | (t << 26))
  );
}
function rt(e, t) {
  return e >>> 0 < t >>> 0 ? 1 : 0;
}
qn.prototype._update = function (e) {
  for (
    var t = this._w,
      r = this._ah | 0,
      n = this._bh | 0,
      i = this._ch | 0,
      s = this._dh | 0,
      c = this._eh | 0,
      o = this._fh | 0,
      u = this._gh | 0,
      d = this._hh | 0,
      m = this._al | 0,
      g = this._bl | 0,
      w = this._cl | 0,
      k = this._dl | 0,
      L = this._el | 0,
      H = this._fl | 0,
      D = this._gl | 0,
      I = this._hl | 0,
      T = 0;
    T < 32;
    T += 2
  )
    (t[T] = e.readInt32BE(T * 4)), (t[T + 1] = e.readInt32BE(T * 4 + 4));
  for (; T < 160; T += 2) {
    var $ = t[T - 30],
      V = t[T - 15 * 2 + 1],
      j = Of($, V),
      z = $f(V, $);
    ($ = t[T - 2 * 2]), (V = t[T - 2 * 2 + 1]);
    var ee = Ff($, V),
      Q = Df(V, $),
      Z = t[T - 7 * 2],
      ue = t[T - 7 * 2 + 1],
      oe = t[T - 16 * 2],
      pe = t[T - 16 * 2 + 1],
      E = (z + ue) | 0,
      a = (j + Z + rt(E, z)) | 0;
    (E = (E + Q) | 0),
      (a = (a + ee + rt(E, Q)) | 0),
      (E = (E + pe) | 0),
      (a = (a + oe + rt(E, pe)) | 0),
      (t[T] = a),
      (t[T + 1] = E);
  }
  for (var p = 0; p < 160; p += 2) {
    (a = t[p]), (E = t[p + 1]);
    var y = Ba(r, n, i),
      b = Ba(m, g, w),
      R = Pa(r, m),
      A = Pa(m, r),
      B = Oa(c, L),
      v = Oa(L, c),
      f = Na[p],
      x = Na[p + 1],
      K = La(c, o, u),
      Y = La(L, H, D),
      N = (I + v) | 0,
      O = (d + B + rt(N, I)) | 0;
    (N = (N + Y) | 0),
      (O = (O + K + rt(N, Y)) | 0),
      (N = (N + x) | 0),
      (O = (O + f + rt(N, x)) | 0),
      (N = (N + E) | 0),
      (O = (O + a + rt(N, E)) | 0);
    var W = (A + b) | 0,
      J = (R + y + rt(W, A)) | 0;
    (d = u),
      (I = D),
      (u = o),
      (D = H),
      (o = c),
      (H = L),
      (L = (k + N) | 0),
      (c = (s + O + rt(L, k)) | 0),
      (s = i),
      (k = w),
      (i = n),
      (w = g),
      (n = r),
      (g = m),
      (m = (N + W) | 0),
      (r = (O + J + rt(m, N)) | 0);
  }
  (this._al = (this._al + m) | 0),
    (this._bl = (this._bl + g) | 0),
    (this._cl = (this._cl + w) | 0),
    (this._dl = (this._dl + k) | 0),
    (this._el = (this._el + L) | 0),
    (this._fl = (this._fl + H) | 0),
    (this._gl = (this._gl + D) | 0),
    (this._hl = (this._hl + I) | 0),
    (this._ah = (this._ah + r + rt(this._al, m)) | 0),
    (this._bh = (this._bh + n + rt(this._bl, g)) | 0),
    (this._ch = (this._ch + i + rt(this._cl, w)) | 0),
    (this._dh = (this._dh + s + rt(this._dl, k)) | 0),
    (this._eh = (this._eh + c + rt(this._el, L)) | 0),
    (this._fh = (this._fh + o + rt(this._fl, H)) | 0),
    (this._gh = (this._gh + u + rt(this._gl, D)) | 0),
    (this._hh = (this._hh + d + rt(this._hl, I)) | 0);
};
qn.prototype._hash = function () {
  var e = Bf.allocUnsafe(64);
  function t(r, n, i) {
    e.writeInt32BE(r, i), e.writeInt32BE(n, i + 4);
  }
  return (
    t(this._ah, this._al, 0),
    t(this._bh, this._bl, 8),
    t(this._ch, this._cl, 16),
    t(this._dh, this._dl, 24),
    t(this._eh, this._el, 32),
    t(this._fh, this._fl, 40),
    t(this._gh, this._gl, 48),
    t(this._hh, this._hl, 56),
    e
  );
};
var Nl = qn,
  jf = It,
  Uf = Nl,
  Hf = _n,
  Wf = rr.Buffer,
  Vf = new Array(160);
function Wi() {
  this.init(), (this._w = Vf), Hf.call(this, 128, 112);
}
jf(Wi, Uf);
Wi.prototype.init = function () {
  return (
    (this._ah = 3418070365),
    (this._bh = 1654270250),
    (this._ch = 2438529370),
    (this._dh = 355462360),
    (this._eh = 1731405415),
    (this._fh = 2394180231),
    (this._gh = 3675008525),
    (this._hh = 1203062813),
    (this._al = 3238371032),
    (this._bl = 914150663),
    (this._cl = 812702999),
    (this._dl = 4144912697),
    (this._el = 4290775857),
    (this._fl = 1750603025),
    (this._gl = 1694076839),
    (this._hl = 3204075428),
    this
  );
};
Wi.prototype._hash = function () {
  var e = Wf.allocUnsafe(48);
  function t(r, n, i) {
    e.writeInt32BE(r, i), e.writeInt32BE(n, i + 4);
  }
  return (
    t(this._ah, this._al, 0),
    t(this._bh, this._bl, 8),
    t(this._ch, this._cl, 16),
    t(this._dh, this._dl, 24),
    t(this._eh, this._el, 32),
    t(this._fh, this._fl, 40),
    e
  );
};
var qf = Wi,
  Lr = (Rl.exports = function (t) {
    t = t.toLowerCase();
    var r = Lr[t];
    if (!r) throw new Error(t + " is not supported (we accept pull requests)");
    return new r();
  });
Lr.sha = af;
Lr.sha1 = mf;
Lr.sha224 = Nf;
Lr.sha256 = Al;
Lr.sha384 = qf;
Lr.sha512 = Nl;
var zf = Rl.exports,
  zn,
  qe,
  Ll,
  Bl,
  br,
  $a,
  Pl,
  Co,
  Wo,
  Mo,
  xo,
  Ol,
  Pn = {},
  $l = [],
  Gf = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  Vi = Array.isArray;
function zt(e, t) {
  for (var r in t) e[r] = t[r];
  return e;
}
function Fl(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function ko(e, t, r) {
  var n,
    i,
    s,
    c = {};
  for (s in t)
    s == "key" ? (n = t[s]) : s == "ref" ? (i = t[s]) : (c[s] = t[s]);
  if (
    (arguments.length > 2 &&
      (c.children = arguments.length > 3 ? zn.call(arguments, 2) : r),
    typeof e == "function" && e.defaultProps != null)
  )
    for (s in e.defaultProps) c[s] === void 0 && (c[s] = e.defaultProps[s]);
  return Tn(e, c, n, i, null);
}
function Tn(e, t, r, n, i) {
  var s = {
    type: e,
    props: t,
    key: r,
    ref: n,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: i ?? ++Ll,
    __i: -1,
    __u: 0,
  };
  return i == null && qe.vnode != null && qe.vnode(s), s;
}
function Jf() {
  return { current: null };
}
function Gn(e) {
  return e.children;
}
function Nn(e, t) {
  (this.props = e), (this.context = t);
}
function Ir(e, t) {
  if (t == null) return e.__ ? Ir(e.__, e.__i + 1) : null;
  for (var r; t < e.__k.length; t++)
    if ((r = e.__k[t]) != null && r.__e != null) return r.__e;
  return typeof e.type == "function" ? Ir(e) : null;
}
function Dl(e) {
  var t, r;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((r = e.__k[t]) != null && r.__e != null) {
        e.__e = e.__c.base = r.__e;
        break;
      }
    return Dl(e);
  }
}
function Io(e) {
  ((!e.__d && (e.__d = !0) && br.push(e) && !Li.__r++) ||
    $a !== qe.debounceRendering) &&
    (($a = qe.debounceRendering) || Pl)(Li);
}
function Li() {
  var e, t, r, n, i, s, c, o;
  for (br.sort(Co); (e = br.shift()); )
    e.__d &&
      ((t = br.length),
      (n = void 0),
      (s = (i = (r = e).__v).__e),
      (c = []),
      (o = []),
      r.__P &&
        (((n = zt({}, i)).__v = i.__v + 1),
        qe.vnode && qe.vnode(n),
        Vo(
          r.__P,
          n,
          i,
          r.__n,
          r.__P.ownerSVGElement !== void 0,
          32 & i.__u ? [s] : null,
          c,
          s ?? Ir(i),
          !!(32 & i.__u),
          o
        ),
        (n.__v = i.__v),
        (n.__.__k[n.__i] = n),
        Wl(c, n, o),
        n.__e != s && Dl(n)),
      br.length > t && br.sort(Co));
  Li.__r = 0;
}
function jl(e, t, r, n, i, s, c, o, u, d, m) {
  var g,
    w,
    k,
    L,
    H,
    D = (n && n.__k) || $l,
    I = t.length;
  for (r.__d = u, Zf(r, t, D), u = r.__d, g = 0; g < I; g++)
    (k = r.__k[g]) != null &&
      typeof k != "boolean" &&
      typeof k != "function" &&
      ((w = k.__i === -1 ? Pn : D[k.__i] || Pn),
      (k.__i = g),
      Vo(e, k, w, i, s, c, o, u, d, m),
      (L = k.__e),
      k.ref &&
        w.ref != k.ref &&
        (w.ref && qo(w.ref, null, k), m.push(k.ref, k.__c || L, k)),
      H == null && L != null && (H = L),
      65536 & k.__u || w.__k === k.__k
        ? (u && !u.isConnected && (u = Ir(w)), (u = Ul(k, u, e)))
        : typeof k.type == "function" && k.__d !== void 0
        ? (u = k.__d)
        : L && (u = L.nextSibling),
      (k.__d = void 0),
      (k.__u &= -196609));
  (r.__d = u), (r.__e = H);
}
function Zf(e, t, r) {
  var n,
    i,
    s,
    c,
    o,
    u = t.length,
    d = r.length,
    m = d,
    g = 0;
  for (e.__k = [], n = 0; n < u; n++)
    (c = n + g),
      (i = e.__k[n] =
        (i = t[n]) == null || typeof i == "boolean" || typeof i == "function"
          ? null
          : typeof i == "string" ||
            typeof i == "number" ||
            typeof i == "bigint" ||
            i.constructor == String
          ? Tn(null, i, null, null, null)
          : Vi(i)
          ? Tn(Gn, { children: i }, null, null, null)
          : i.constructor === void 0 && i.__b > 0
          ? Tn(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v)
          : i) != null
        ? ((i.__ = e),
          (i.__b = e.__b + 1),
          (o = Kf(i, r, c, m)),
          (i.__i = o),
          (s = null),
          o !== -1 && (m--, (s = r[o]) && (s.__u |= 131072)),
          s == null || s.__v === null
            ? (o == -1 && g--, typeof i.type != "function" && (i.__u |= 65536))
            : o !== c &&
              (o === c + 1
                ? g++
                : o > c
                ? m > u - c
                  ? (g += o - c)
                  : g--
                : o < c
                ? o == c - 1 && (g = o - c)
                : (g = 0),
              o !== n + g && (i.__u |= 65536)))
        : (s = r[c]) &&
          s.key == null &&
          s.__e &&
          !(131072 & s.__u) &&
          (s.__e == e.__d && (e.__d = Ir(s)), Ao(s, s, !1), (r[c] = null), m--);
  if (m)
    for (n = 0; n < d; n++)
      (s = r[n]) != null &&
        !(131072 & s.__u) &&
        (s.__e == e.__d && (e.__d = Ir(s)), Ao(s, s));
}
function Ul(e, t, r) {
  var n, i;
  if (typeof e.type == "function") {
    for (n = e.__k, i = 0; n && i < n.length; i++)
      n[i] && ((n[i].__ = e), (t = Ul(n[i], t, r)));
    return t;
  }
  e.__e != t && (r.insertBefore(e.__e, t || null), (t = e.__e));
  do t = t && t.nextSibling;
  while (t != null && t.nodeType === 8);
  return t;
}
function Hl(e, t) {
  return (
    (t = t || []),
    e == null ||
      typeof e == "boolean" ||
      (Vi(e)
        ? e.some(function (r) {
            Hl(r, t);
          })
        : t.push(e)),
    t
  );
}
function Kf(e, t, r, n) {
  var i = e.key,
    s = e.type,
    c = r - 1,
    o = r + 1,
    u = t[r];
  if (u === null || (u && i == u.key && s === u.type && !(131072 & u.__u)))
    return r;
  if (n > (u != null && !(131072 & u.__u) ? 1 : 0))
    for (; c >= 0 || o < t.length; ) {
      if (c >= 0) {
        if ((u = t[c]) && !(131072 & u.__u) && i == u.key && s === u.type)
          return c;
        c--;
      }
      if (o < t.length) {
        if ((u = t[o]) && !(131072 & u.__u) && i == u.key && s === u.type)
          return o;
        o++;
      }
    }
  return -1;
}
function Fa(e, t, r) {
  t[0] === "-"
    ? e.setProperty(t, r ?? "")
    : (e[t] =
        r == null ? "" : typeof r != "number" || Gf.test(t) ? r : r + "px");
}
function gi(e, t, r, n, i) {
  var s;
  e: if (t === "style")
    if (typeof r == "string") e.style.cssText = r;
    else {
      if ((typeof n == "string" && (e.style.cssText = n = ""), n))
        for (t in n) (r && t in r) || Fa(e.style, t, "");
      if (r) for (t in r) (n && r[t] === n[t]) || Fa(e.style, t, r[t]);
    }
  else if (t[0] === "o" && t[1] === "n")
    (s = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1"))),
      (t =
        t.toLowerCase() in e || t === "onFocusOut" || t === "onFocusIn"
          ? t.toLowerCase().slice(2)
          : t.slice(2)),
      e.l || (e.l = {}),
      (e.l[t + s] = r),
      r
        ? n
          ? (r.u = n.u)
          : ((r.u = Wo), e.addEventListener(t, s ? xo : Mo, s))
        : e.removeEventListener(t, s ? xo : Mo, s);
  else {
    if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      t != "width" &&
      t != "height" &&
      t != "href" &&
      t != "list" &&
      t != "form" &&
      t != "tabIndex" &&
      t != "download" &&
      t != "rowSpan" &&
      t != "colSpan" &&
      t != "role" &&
      t in e
    )
      try {
        e[t] = r ?? "";
        break e;
      } catch {}
    typeof r == "function" ||
      (r == null || (r === !1 && t[4] !== "-")
        ? e.removeAttribute(t)
        : e.setAttribute(t, r));
  }
}
function Da(e) {
  return function (t) {
    if (this.l) {
      var r = this.l[t.type + e];
      if (t.t == null) t.t = Wo++;
      else if (t.t < r.u) return;
      return r(qe.event ? qe.event(t) : t);
    }
  };
}
function Vo(e, t, r, n, i, s, c, o, u, d) {
  var m,
    g,
    w,
    k,
    L,
    H,
    D,
    I,
    T,
    $,
    V,
    j,
    z,
    ee,
    Q,
    Z = t.type;
  if (t.constructor !== void 0) return null;
  128 & r.__u && ((u = !!(32 & r.__u)), (s = [(o = t.__e = r.__e)])),
    (m = qe.__b) && m(t);
  e: if (typeof Z == "function")
    try {
      if (
        ((I = t.props),
        (T = (m = Z.contextType) && n[m.__c]),
        ($ = m ? (T ? T.props.value : m.__) : n),
        r.__c
          ? (D = (g = t.__c = r.__c).__ = g.__E)
          : ("prototype" in Z && Z.prototype.render
              ? (t.__c = g = new Z(I, $))
              : ((t.__c = g = new Nn(I, $)),
                (g.constructor = Z),
                (g.render = Yf)),
            T && T.sub(g),
            (g.props = I),
            g.state || (g.state = {}),
            (g.context = $),
            (g.__n = n),
            (w = g.__d = !0),
            (g.__h = []),
            (g._sb = [])),
        g.__s == null && (g.__s = g.state),
        Z.getDerivedStateFromProps != null &&
          (g.__s == g.state && (g.__s = zt({}, g.__s)),
          zt(g.__s, Z.getDerivedStateFromProps(I, g.__s))),
        (k = g.props),
        (L = g.state),
        (g.__v = t),
        w)
      )
        Z.getDerivedStateFromProps == null &&
          g.componentWillMount != null &&
          g.componentWillMount(),
          g.componentDidMount != null && g.__h.push(g.componentDidMount);
      else {
        if (
          (Z.getDerivedStateFromProps == null &&
            I !== k &&
            g.componentWillReceiveProps != null &&
            g.componentWillReceiveProps(I, $),
          !g.__e &&
            ((g.shouldComponentUpdate != null &&
              g.shouldComponentUpdate(I, g.__s, $) === !1) ||
              t.__v === r.__v))
        ) {
          for (
            t.__v !== r.__v && ((g.props = I), (g.state = g.__s), (g.__d = !1)),
              t.__e = r.__e,
              t.__k = r.__k,
              t.__k.forEach(function (ue) {
                ue && (ue.__ = t);
              }),
              V = 0;
            V < g._sb.length;
            V++
          )
            g.__h.push(g._sb[V]);
          (g._sb = []), g.__h.length && c.push(g);
          break e;
        }
        g.componentWillUpdate != null && g.componentWillUpdate(I, g.__s, $),
          g.componentDidUpdate != null &&
            g.__h.push(function () {
              g.componentDidUpdate(k, L, H);
            });
      }
      if (
        ((g.context = $),
        (g.props = I),
        (g.__P = e),
        (g.__e = !1),
        (j = qe.__r),
        (z = 0),
        "prototype" in Z && Z.prototype.render)
      ) {
        for (
          g.state = g.__s,
            g.__d = !1,
            j && j(t),
            m = g.render(g.props, g.state, g.context),
            ee = 0;
          ee < g._sb.length;
          ee++
        )
          g.__h.push(g._sb[ee]);
        g._sb = [];
      } else
        do
          (g.__d = !1),
            j && j(t),
            (m = g.render(g.props, g.state, g.context)),
            (g.state = g.__s);
        while (g.__d && ++z < 25);
      (g.state = g.__s),
        g.getChildContext != null && (n = zt(zt({}, n), g.getChildContext())),
        w ||
          g.getSnapshotBeforeUpdate == null ||
          (H = g.getSnapshotBeforeUpdate(k, L)),
        jl(
          e,
          Vi(
            (Q =
              m != null && m.type === Gn && m.key == null
                ? m.props.children
                : m)
          )
            ? Q
            : [Q],
          t,
          r,
          n,
          i,
          s,
          c,
          o,
          u,
          d
        ),
        (g.base = t.__e),
        (t.__u &= -161),
        g.__h.length && c.push(g),
        D && (g.__E = g.__ = null);
    } catch (ue) {
      (t.__v = null),
        u || s != null
          ? ((t.__e = o), (t.__u |= u ? 160 : 32), (s[s.indexOf(o)] = null))
          : ((t.__e = r.__e), (t.__k = r.__k)),
        qe.__e(ue, t, r);
    }
  else
    s == null && t.__v === r.__v
      ? ((t.__k = r.__k), (t.__e = r.__e))
      : (t.__e = Qf(r.__e, t, r, n, i, s, c, u, d));
  (m = qe.diffed) && m(t);
}
function Wl(e, t, r) {
  t.__d = void 0;
  for (var n = 0; n < r.length; n++) qo(r[n], r[++n], r[++n]);
  qe.__c && qe.__c(t, e),
    e.some(function (i) {
      try {
        (e = i.__h),
          (i.__h = []),
          e.some(function (s) {
            s.call(i);
          });
      } catch (s) {
        qe.__e(s, i.__v);
      }
    });
}
function Qf(e, t, r, n, i, s, c, o, u) {
  var d,
    m,
    g,
    w,
    k,
    L,
    H,
    D = r.props,
    I = t.props,
    T = t.type;
  if ((T === "svg" && (i = !0), s != null)) {
    for (d = 0; d < s.length; d++)
      if (
        (k = s[d]) &&
        "setAttribute" in k == !!T &&
        (T ? k.localName === T : k.nodeType === 3)
      ) {
        (e = k), (s[d] = null);
        break;
      }
  }
  if (e == null) {
    if (T === null) return document.createTextNode(I);
    (e = i
      ? document.createElementNS("http://www.w3.org/2000/svg", T)
      : document.createElement(T, I.is && I)),
      (s = null),
      (o = !1);
  }
  if (T === null) D === I || (o && e.data === I) || (e.data = I);
  else {
    if (
      ((s = s && zn.call(e.childNodes)), (D = r.props || Pn), !o && s != null)
    )
      for (D = {}, d = 0; d < e.attributes.length; d++)
        D[(k = e.attributes[d]).name] = k.value;
    for (d in D)
      if (((k = D[d]), d != "children")) {
        if (d == "dangerouslySetInnerHTML") g = k;
        else if (d !== "key" && !(d in I)) {
          if (
            (d == "value" && "defaultValue" in I) ||
            (d == "checked" && "defaultChecked" in I)
          )
            continue;
          gi(e, d, null, k, i);
        }
      }
    for (d in I)
      (k = I[d]),
        d == "children"
          ? (w = k)
          : d == "dangerouslySetInnerHTML"
          ? (m = k)
          : d == "value"
          ? (L = k)
          : d == "checked"
          ? (H = k)
          : d === "key" ||
            (o && typeof k != "function") ||
            D[d] === k ||
            gi(e, d, k, D[d], i);
    if (m)
      o ||
        (g && (m.__html === g.__html || m.__html === e.innerHTML)) ||
        (e.innerHTML = m.__html),
        (t.__k = []);
    else if (
      (g && (e.innerHTML = ""),
      jl(
        e,
        Vi(w) ? w : [w],
        t,
        r,
        n,
        i && T !== "foreignObject",
        s,
        c,
        s ? s[0] : r.__k && Ir(r, 0),
        o,
        u
      ),
      s != null)
    )
      for (d = s.length; d--; ) s[d] != null && Fl(s[d]);
    o ||
      ((d = "value"),
      L !== void 0 &&
        (L !== e[d] ||
          (T === "progress" && !L) ||
          (T === "option" && L !== D[d])) &&
        gi(e, d, L, D[d], !1),
      (d = "checked"),
      H !== void 0 && H !== e[d] && gi(e, d, H, D[d], !1));
  }
  return e;
}
function qo(e, t, r) {
  try {
    typeof e == "function" ? e(t) : (e.current = t);
  } catch (n) {
    qe.__e(n, r);
  }
}
function Ao(e, t, r) {
  var n, i;
  if (
    (qe.unmount && qe.unmount(e),
    (n = e.ref) && ((n.current && n.current !== e.__e) || qo(n, null, t)),
    (n = e.__c) != null)
  ) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (s) {
        qe.__e(s, t);
      }
    n.base = n.__P = null;
  }
  if ((n = e.__k))
    for (i = 0; i < n.length; i++)
      n[i] && Ao(n[i], t, r || typeof e.type != "function");
  r || e.__e == null || Fl(e.__e), (e.__c = e.__ = e.__e = e.__d = void 0);
}
function Yf(e, t, r) {
  return this.constructor(e, r);
}
function Vl(e, t, r) {
  var n, i, s, c;
  qe.__ && qe.__(e, t),
    (i = (n = typeof r == "function") ? null : (r && r.__k) || t.__k),
    (s = []),
    (c = []),
    Vo(
      t,
      (e = ((!n && r) || t).__k = ko(Gn, null, [e])),
      i || Pn,
      Pn,
      t.ownerSVGElement !== void 0,
      !n && r ? [r] : i ? null : t.firstChild ? zn.call(t.childNodes) : null,
      s,
      !n && r ? r : i ? i.__e : t.firstChild,
      n,
      c
    ),
    Wl(s, e, c);
}
function ql(e, t) {
  Vl(e, t, ql);
}
function Xf(e, t, r) {
  var n,
    i,
    s,
    c,
    o = zt({}, e.props);
  for (s in (e.type && e.type.defaultProps && (c = e.type.defaultProps), t))
    s == "key"
      ? (n = t[s])
      : s == "ref"
      ? (i = t[s])
      : (o[s] = t[s] === void 0 && c !== void 0 ? c[s] : t[s]);
  return (
    arguments.length > 2 &&
      (o.children = arguments.length > 3 ? zn.call(arguments, 2) : r),
    Tn(e.type, o, n || e.key, i || e.ref, null)
  );
}
function ed(e, t) {
  var r = {
    __c: (t = "__cC" + Ol++),
    __: e,
    Consumer: function (n, i) {
      return n.children(i);
    },
    Provider: function (n) {
      var i, s;
      return (
        this.getChildContext ||
          ((i = []),
          ((s = {})[t] = this),
          (this.getChildContext = function () {
            return s;
          }),
          (this.shouldComponentUpdate = function (c) {
            this.props.value !== c.value &&
              i.some(function (o) {
                (o.__e = !0), Io(o);
              });
          }),
          (this.sub = function (c) {
            i.push(c);
            var o = c.componentWillUnmount;
            c.componentWillUnmount = function () {
              i.splice(i.indexOf(c), 1), o && o.call(c);
            };
          })),
        n.children
      );
    },
  };
  return (r.Provider.__ = r.Consumer.contextType = r);
}
(zn = $l.slice),
  (qe = {
    __e: function (e, t, r, n) {
      for (var i, s, c; (t = t.__); )
        if ((i = t.__c) && !i.__)
          try {
            if (
              ((s = i.constructor) &&
                s.getDerivedStateFromError != null &&
                (i.setState(s.getDerivedStateFromError(e)), (c = i.__d)),
              i.componentDidCatch != null &&
                (i.componentDidCatch(e, n || {}), (c = i.__d)),
              c)
            )
              return (i.__E = i);
          } catch (o) {
            e = o;
          }
      throw e;
    },
  }),
  (Ll = 0),
  (Bl = function (e) {
    return e != null && e.constructor == null;
  }),
  (Nn.prototype.setState = function (e, t) {
    var r;
    (r =
      this.__s != null && this.__s !== this.state
        ? this.__s
        : (this.__s = zt({}, this.state))),
      typeof e == "function" && (e = e(zt({}, r), this.props)),
      e && zt(r, e),
      e != null && this.__v && (t && this._sb.push(t), Io(this));
  }),
  (Nn.prototype.forceUpdate = function (e) {
    this.__v && ((this.__e = !0), e && this.__h.push(e), Io(this));
  }),
  (Nn.prototype.render = Gn),
  (br = []),
  (Pl =
    typeof Promise == "function"
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (Co = function (e, t) {
    return e.__v.__b - t.__v.__b;
  }),
  (Li.__r = 0),
  (Wo = 0),
  (Mo = Da(!1)),
  (xo = Da(!0)),
  (Ol = 0);
const td = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Component: Nn,
        Fragment: Gn,
        cloneElement: Xf,
        createContext: ed,
        createElement: ko,
        createRef: Jf,
        h: ko,
        hydrate: ql,
        get isValidElement() {
          return Bl;
        },
        get options() {
          return qe;
        },
        render: Vl,
        toChildArray: Hl,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ft = jn(td);
var Gt,
  xe,
  Ws,
  ja,
  ln = 0,
  zl = [],
  Ii = [],
  Je = qe,
  Ua = Je.__b,
  Ha = Je.__r,
  Wa = Je.diffed,
  Va = Je.__c,
  qa = Je.unmount,
  za = Je.__;
function Br(e, t) {
  Je.__h && Je.__h(xe, e, ln || t), (ln = 0);
  var r = xe.__H || (xe.__H = { __: [], __h: [] });
  return e >= r.__.length && r.__.push({ __V: Ii }), r.__[e];
}
function Gl(e) {
  return (ln = 1), Jl(Kl, e);
}
function Jl(e, t, r) {
  var n = Br(Gt++, 2);
  if (
    ((n.t = e),
    !n.__c &&
      ((n.__ = [
        r ? r(t) : Kl(void 0, t),
        function (o) {
          var u = n.__N ? n.__N[0] : n.__[0],
            d = n.t(u, o);
          u !== d && ((n.__N = [d, n.__[1]]), n.__c.setState({}));
        },
      ]),
      (n.__c = xe),
      !xe.u))
  ) {
    var i = function (o, u, d) {
      if (!n.__c.__H) return !0;
      var m = n.__c.__H.__.filter(function (w) {
        return !!w.__c;
      });
      if (
        m.every(function (w) {
          return !w.__N;
        })
      )
        return !s || s.call(this, o, u, d);
      var g = !1;
      return (
        m.forEach(function (w) {
          if (w.__N) {
            var k = w.__[0];
            (w.__ = w.__N), (w.__N = void 0), k !== w.__[0] && (g = !0);
          }
        }),
        !(!g && n.__c.props === o) && (!s || s.call(this, o, u, d))
      );
    };
    xe.u = !0;
    var s = xe.shouldComponentUpdate,
      c = xe.componentWillUpdate;
    (xe.componentWillUpdate = function (o, u, d) {
      if (this.__e) {
        var m = s;
        (s = void 0), i(o, u, d), (s = m);
      }
      c && c.call(this, o, u, d);
    }),
      (xe.shouldComponentUpdate = i);
  }
  return n.__N || n.__;
}
function rd(e, t) {
  var r = Br(Gt++, 3);
  !Je.__s && Go(r.__H, t) && ((r.__ = e), (r.i = t), xe.__H.__h.push(r));
}
function Zl(e, t) {
  var r = Br(Gt++, 4);
  !Je.__s && Go(r.__H, t) && ((r.__ = e), (r.i = t), xe.__h.push(r));
}
function nd(e) {
  return (
    (ln = 5),
    zo(function () {
      return { current: e };
    }, [])
  );
}
function id(e, t, r) {
  (ln = 6),
    Zl(
      function () {
        return typeof e == "function"
          ? (e(t()),
            function () {
              return e(null);
            })
          : e
          ? ((e.current = t()),
            function () {
              return (e.current = null);
            })
          : void 0;
      },
      r == null ? r : r.concat(e)
    );
}
function zo(e, t) {
  var r = Br(Gt++, 7);
  return Go(r.__H, t) ? ((r.__V = e()), (r.i = t), (r.__h = e), r.__V) : r.__;
}
function sd(e, t) {
  return (
    (ln = 8),
    zo(function () {
      return e;
    }, t)
  );
}
function od(e) {
  var t = xe.context[e.__c],
    r = Br(Gt++, 9);
  return (
    (r.c = e),
    t ? (r.__ == null && ((r.__ = !0), t.sub(xe)), t.props.value) : e.__
  );
}
function ad(e, t) {
  Je.useDebugValue && Je.useDebugValue(t ? t(e) : e);
}
function cd(e) {
  var t = Br(Gt++, 10),
    r = Gl();
  return (
    (t.__ = e),
    xe.componentDidCatch ||
      (xe.componentDidCatch = function (n, i) {
        t.__ && t.__(n, i), r[1](n);
      }),
    [
      r[0],
      function () {
        r[1](void 0);
      },
    ]
  );
}
function ld() {
  var e = Br(Gt++, 11);
  if (!e.__) {
    for (var t = xe.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
    var r = t.__m || (t.__m = [0, 0]);
    e.__ = "P" + r[0] + "-" + r[1]++;
  }
  return e.__;
}
function ud() {
  for (var e; (e = zl.shift()); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Ai), e.__H.__h.forEach(To), (e.__H.__h = []);
      } catch (t) {
        (e.__H.__h = []), Je.__e(t, e.__v);
      }
}
(Je.__b = function (e) {
  (xe = null), Ua && Ua(e);
}),
  (Je.__ = function (e, t) {
    e && t.__k && t.__k.__m && (e.__m = t.__k.__m), za && za(e, t);
  }),
  (Je.__r = function (e) {
    Ha && Ha(e), (Gt = 0);
    var t = (xe = e.__c).__H;
    t &&
      (Ws === xe
        ? ((t.__h = []),
          (xe.__h = []),
          t.__.forEach(function (r) {
            r.__N && (r.__ = r.__N), (r.__V = Ii), (r.__N = r.i = void 0);
          }))
        : (t.__h.forEach(Ai), t.__h.forEach(To), (t.__h = []), (Gt = 0))),
      (Ws = xe);
  }),
  (Je.diffed = function (e) {
    Wa && Wa(e);
    var t = e.__c;
    t &&
      t.__H &&
      (t.__H.__h.length &&
        ((zl.push(t) !== 1 && ja === Je.requestAnimationFrame) ||
          ((ja = Je.requestAnimationFrame) || hd)(ud)),
      t.__H.__.forEach(function (r) {
        r.i && (r.__H = r.i),
          r.__V !== Ii && (r.__ = r.__V),
          (r.i = void 0),
          (r.__V = Ii);
      })),
      (Ws = xe = null);
  }),
  (Je.__c = function (e, t) {
    t.some(function (r) {
      try {
        r.__h.forEach(Ai),
          (r.__h = r.__h.filter(function (n) {
            return !n.__ || To(n);
          }));
      } catch (n) {
        t.some(function (i) {
          i.__h && (i.__h = []);
        }),
          (t = []),
          Je.__e(n, r.__v);
      }
    }),
      Va && Va(e, t);
  }),
  (Je.unmount = function (e) {
    qa && qa(e);
    var t,
      r = e.__c;
    r &&
      r.__H &&
      (r.__H.__.forEach(function (n) {
        try {
          Ai(n);
        } catch (i) {
          t = i;
        }
      }),
      (r.__H = void 0),
      t && Je.__e(t, r.__v));
  });
var Ga = typeof requestAnimationFrame == "function";
function hd(e) {
  var t,
    r = function () {
      clearTimeout(n), Ga && cancelAnimationFrame(t), setTimeout(e);
    },
    n = setTimeout(r, 100);
  Ga && (t = requestAnimationFrame(r));
}
function Ai(e) {
  var t = xe,
    r = e.__c;
  typeof r == "function" && ((e.__c = void 0), r()), (xe = t);
}
function To(e) {
  var t = xe;
  (e.__c = e.__()), (xe = t);
}
function Go(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    t.some(function (r, n) {
      return r !== e[n];
    })
  );
}
function Kl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const fd = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        useCallback: sd,
        useContext: od,
        useDebugValue: ad,
        useEffect: rd,
        useErrorBoundary: cd,
        useId: ld,
        useImperativeHandle: id,
        useLayoutEffect: Zl,
        useMemo: zo,
        useReducer: Jl,
        useRef: nd,
        useState: Gl,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  qi = jn(fd);
var No = { exports: {} },
  Ql = Fi.EventEmitter,
  Vs,
  Ja;
function dd() {
  if (Ja) return Vs;
  Ja = 1;
  function e(L, H) {
    var D = Object.keys(L);
    if (Object.getOwnPropertySymbols) {
      var I = Object.getOwnPropertySymbols(L);
      H &&
        (I = I.filter(function (T) {
          return Object.getOwnPropertyDescriptor(L, T).enumerable;
        })),
        D.push.apply(D, I);
    }
    return D;
  }
  function t(L) {
    for (var H = 1; H < arguments.length; H++) {
      var D = arguments[H] != null ? arguments[H] : {};
      H % 2
        ? e(Object(D), !0).forEach(function (I) {
            r(L, I, D[I]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(L, Object.getOwnPropertyDescriptors(D))
        : e(Object(D)).forEach(function (I) {
            Object.defineProperty(L, I, Object.getOwnPropertyDescriptor(D, I));
          });
    }
    return L;
  }
  function r(L, H, D) {
    return (
      (H = c(H)),
      H in L
        ? Object.defineProperty(L, H, {
            value: D,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (L[H] = D),
      L
    );
  }
  function n(L, H) {
    if (!(L instanceof H))
      throw new TypeError("Cannot call a class as a function");
  }
  function i(L, H) {
    for (var D = 0; D < H.length; D++) {
      var I = H[D];
      (I.enumerable = I.enumerable || !1),
        (I.configurable = !0),
        "value" in I && (I.writable = !0),
        Object.defineProperty(L, c(I.key), I);
    }
  }
  function s(L, H, D) {
    return (
      H && i(L.prototype, H),
      D && i(L, D),
      Object.defineProperty(L, "prototype", { writable: !1 }),
      L
    );
  }
  function c(L) {
    var H = o(L, "string");
    return typeof H == "symbol" ? H : String(H);
  }
  function o(L, H) {
    if (typeof L != "object" || L === null) return L;
    var D = L[Symbol.toPrimitive];
    if (D !== void 0) {
      var I = D.call(L, H || "default");
      if (typeof I != "object") return I;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (H === "string" ? String : Number)(L);
  }
  var u = Un,
    d = u.Buffer,
    m = jo,
    g = m.inspect,
    w = (g && g.custom) || "inspect";
  function k(L, H, D) {
    d.prototype.copy.call(L, H, D);
  }
  return (
    (Vs = (function () {
      function L() {
        n(this, L), (this.head = null), (this.tail = null), (this.length = 0);
      }
      return (
        s(L, [
          {
            key: "push",
            value: function (D) {
              var I = { data: D, next: null };
              this.length > 0 ? (this.tail.next = I) : (this.head = I),
                (this.tail = I),
                ++this.length;
            },
          },
          {
            key: "unshift",
            value: function (D) {
              var I = { data: D, next: this.head };
              this.length === 0 && (this.tail = I),
                (this.head = I),
                ++this.length;
            },
          },
          {
            key: "shift",
            value: function () {
              if (this.length !== 0) {
                var D = this.head.data;
                return (
                  this.length === 1
                    ? (this.head = this.tail = null)
                    : (this.head = this.head.next),
                  --this.length,
                  D
                );
              }
            },
          },
          {
            key: "clear",
            value: function () {
              (this.head = this.tail = null), (this.length = 0);
            },
          },
          {
            key: "join",
            value: function (D) {
              if (this.length === 0) return "";
              for (var I = this.head, T = "" + I.data; (I = I.next); )
                T += D + I.data;
              return T;
            },
          },
          {
            key: "concat",
            value: function (D) {
              if (this.length === 0) return d.alloc(0);
              for (var I = d.allocUnsafe(D >>> 0), T = this.head, $ = 0; T; )
                k(T.data, I, $), ($ += T.data.length), (T = T.next);
              return I;
            },
          },
          {
            key: "consume",
            value: function (D, I) {
              var T;
              return (
                D < this.head.data.length
                  ? ((T = this.head.data.slice(0, D)),
                    (this.head.data = this.head.data.slice(D)))
                  : D === this.head.data.length
                  ? (T = this.shift())
                  : (T = I ? this._getString(D) : this._getBuffer(D)),
                T
              );
            },
          },
          {
            key: "first",
            value: function () {
              return this.head.data;
            },
          },
          {
            key: "_getString",
            value: function (D) {
              var I = this.head,
                T = 1,
                $ = I.data;
              for (D -= $.length; (I = I.next); ) {
                var V = I.data,
                  j = D > V.length ? V.length : D;
                if (
                  (j === V.length ? ($ += V) : ($ += V.slice(0, D)),
                  (D -= j),
                  D === 0)
                ) {
                  j === V.length
                    ? (++T,
                      I.next
                        ? (this.head = I.next)
                        : (this.head = this.tail = null))
                    : ((this.head = I), (I.data = V.slice(j)));
                  break;
                }
                ++T;
              }
              return (this.length -= T), $;
            },
          },
          {
            key: "_getBuffer",
            value: function (D) {
              var I = d.allocUnsafe(D),
                T = this.head,
                $ = 1;
              for (T.data.copy(I), D -= T.data.length; (T = T.next); ) {
                var V = T.data,
                  j = D > V.length ? V.length : D;
                if ((V.copy(I, I.length - D, 0, j), (D -= j), D === 0)) {
                  j === V.length
                    ? (++$,
                      T.next
                        ? (this.head = T.next)
                        : (this.head = this.tail = null))
                    : ((this.head = T), (T.data = V.slice(j)));
                  break;
                }
                ++$;
              }
              return (this.length -= $), I;
            },
          },
          {
            key: w,
            value: function (D, I) {
              return g(this, t(t({}, I), {}, { depth: 0, customInspect: !1 }));
            },
          },
        ]),
        L
      );
    })()),
    Vs
  );
}
function pd(e, t) {
  var r = this,
    n = this._readableState && this._readableState.destroyed,
    i = this._writableState && this._writableState.destroyed;
  return n || i
    ? (t
        ? t(e)
        : e &&
          (this._writableState
            ? this._writableState.errorEmitted ||
              ((this._writableState.errorEmitted = !0),
              process.nextTick(Lo, this, e))
            : process.nextTick(Lo, this, e)),
      this)
    : (this._readableState && (this._readableState.destroyed = !0),
      this._writableState && (this._writableState.destroyed = !0),
      this._destroy(e || null, function (s) {
        !t && s
          ? r._writableState
            ? r._writableState.errorEmitted
              ? process.nextTick(Ti, r)
              : ((r._writableState.errorEmitted = !0),
                process.nextTick(Za, r, s))
            : process.nextTick(Za, r, s)
          : t
          ? (process.nextTick(Ti, r), t(s))
          : process.nextTick(Ti, r);
      }),
      this);
}
function Za(e, t) {
  Lo(e, t), Ti(e);
}
function Ti(e) {
  (e._writableState && !e._writableState.emitClose) ||
    (e._readableState && !e._readableState.emitClose) ||
    e.emit("close");
}
function gd() {
  this._readableState &&
    ((this._readableState.destroyed = !1),
    (this._readableState.reading = !1),
    (this._readableState.ended = !1),
    (this._readableState.endEmitted = !1)),
    this._writableState &&
      ((this._writableState.destroyed = !1),
      (this._writableState.ended = !1),
      (this._writableState.ending = !1),
      (this._writableState.finalCalled = !1),
      (this._writableState.prefinished = !1),
      (this._writableState.finished = !1),
      (this._writableState.errorEmitted = !1));
}
function Lo(e, t) {
  e.emit("error", t);
}
function md(e, t) {
  var r = e._readableState,
    n = e._writableState;
  (r && r.autoDestroy) || (n && n.autoDestroy)
    ? e.destroy(t)
    : e.emit("error", t);
}
var Yl = { destroy: pd, undestroy: gd, errorOrDestroy: md },
  Pr = {};
function _d(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
var Xl = {};
function Ct(e, t, r) {
  r || (r = Error);
  function n(s, c, o) {
    return typeof t == "string" ? t : t(s, c, o);
  }
  var i = (function (s) {
    _d(c, s);
    function c(o, u, d) {
      return s.call(this, n(o, u, d)) || this;
    }
    return c;
  })(r);
  (i.prototype.name = r.name), (i.prototype.code = e), (Xl[e] = i);
}
function Ka(e, t) {
  if (Array.isArray(e)) {
    var r = e.length;
    return (
      (e = e.map(function (n) {
        return String(n);
      })),
      r > 2
        ? "one of "
            .concat(t, " ")
            .concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1]
        : r === 2
        ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1])
        : "of ".concat(t, " ").concat(e[0])
    );
  } else return "of ".concat(t, " ").concat(String(e));
}
function yd(e, t, r) {
  return e.substr(!r || r < 0 ? 0 : +r, t.length) === t;
}
function vd(e, t, r) {
  return (
    (r === void 0 || r > e.length) && (r = e.length),
    e.substring(r - t.length, r) === t
  );
}
function wd(e, t, r) {
  return (
    typeof r != "number" && (r = 0),
    r + t.length > e.length ? !1 : e.indexOf(t, r) !== -1
  );
}
Ct(
  "ERR_INVALID_OPT_VALUE",
  function (e, t) {
    return 'The value "' + t + '" is invalid for option "' + e + '"';
  },
  TypeError
);
Ct(
  "ERR_INVALID_ARG_TYPE",
  function (e, t, r) {
    var n;
    typeof t == "string" && yd(t, "not ")
      ? ((n = "must not be"), (t = t.replace(/^not /, "")))
      : (n = "must be");
    var i;
    if (vd(e, " argument"))
      i = "The ".concat(e, " ").concat(n, " ").concat(Ka(t, "type"));
    else {
      var s = wd(e, ".") ? "property" : "argument";
      i = 'The "'
        .concat(e, '" ')
        .concat(s, " ")
        .concat(n, " ")
        .concat(Ka(t, "type"));
    }
    return (i += ". Received type ".concat(typeof r)), i;
  },
  TypeError
);
Ct("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
Ct("ERR_METHOD_NOT_IMPLEMENTED", function (e) {
  return "The " + e + " method is not implemented";
});
Ct("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
Ct("ERR_STREAM_DESTROYED", function (e) {
  return "Cannot call " + e + " after a stream was destroyed";
});
Ct("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
Ct("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
Ct("ERR_STREAM_WRITE_AFTER_END", "write after end");
Ct("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
Ct(
  "ERR_UNKNOWN_ENCODING",
  function (e) {
    return "Unknown encoding: " + e;
  },
  TypeError
);
Ct("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
Pr.codes = Xl;
var bd = Pr.codes.ERR_INVALID_OPT_VALUE;
function Ed(e, t, r) {
  return e.highWaterMark != null ? e.highWaterMark : t ? e[r] : null;
}
function Sd(e, t, r, n) {
  var i = Ed(t, n, r);
  if (i != null) {
    if (!(isFinite(i) && Math.floor(i) === i) || i < 0) {
      var s = n ? r : "highWaterMark";
      throw new bd(s, i);
    }
    return Math.floor(i);
  }
  return e.objectMode ? 16 : 16 * 1024;
}
var eu = { getHighWaterMark: Sd },
  Rd = Cd;
function Cd(e, t) {
  if (qs("noDeprecation")) return e;
  var r = !1;
  function n() {
    if (!r) {
      if (qs("throwDeprecation")) throw new Error(t);
      qs("traceDeprecation") ? console.trace(t) : console.warn(t), (r = !0);
    }
    return e.apply(this, arguments);
  }
  return n;
}
function qs(e) {
  try {
    if (!te.localStorage) return !1;
  } catch {
    return !1;
  }
  var t = te.localStorage[e];
  return t == null ? !1 : String(t).toLowerCase() === "true";
}
var zs, Qa;
function tu() {
  if (Qa) return zs;
  (Qa = 1), (zs = Q);
  function e(N) {
    var O = this;
    (this.next = null),
      (this.entry = null),
      (this.finish = function () {
        Y(O, N);
      });
  }
  var t;
  Q.WritableState = z;
  var r = { deprecate: Rd },
    n = Ql,
    i = Un.Buffer,
    s =
      (typeof te < "u"
        ? te
        : typeof window < "u"
        ? window
        : typeof self < "u"
        ? self
        : {}
      ).Uint8Array || function () {};
  function c(N) {
    return i.from(N);
  }
  function o(N) {
    return i.isBuffer(N) || N instanceof s;
  }
  var u = Yl,
    d = eu,
    m = d.getHighWaterMark,
    g = Pr.codes,
    w = g.ERR_INVALID_ARG_TYPE,
    k = g.ERR_METHOD_NOT_IMPLEMENTED,
    L = g.ERR_MULTIPLE_CALLBACK,
    H = g.ERR_STREAM_CANNOT_PIPE,
    D = g.ERR_STREAM_DESTROYED,
    I = g.ERR_STREAM_NULL_VALUES,
    T = g.ERR_STREAM_WRITE_AFTER_END,
    $ = g.ERR_UNKNOWN_ENCODING,
    V = u.errorOrDestroy;
  It(Q, n);
  function j() {}
  function z(N, O, W) {
    (t = t || un()),
      (N = N || {}),
      typeof W != "boolean" && (W = O instanceof t),
      (this.objectMode = !!N.objectMode),
      W && (this.objectMode = this.objectMode || !!N.writableObjectMode),
      (this.highWaterMark = m(this, N, "writableHighWaterMark", W)),
      (this.finalCalled = !1),
      (this.needDrain = !1),
      (this.ending = !1),
      (this.ended = !1),
      (this.finished = !1),
      (this.destroyed = !1);
    var J = N.decodeStrings === !1;
    (this.decodeStrings = !J),
      (this.defaultEncoding = N.defaultEncoding || "utf8"),
      (this.length = 0),
      (this.writing = !1),
      (this.corked = 0),
      (this.sync = !0),
      (this.bufferProcessing = !1),
      (this.onwrite = function (he) {
        y(O, he);
      }),
      (this.writecb = null),
      (this.writelen = 0),
      (this.bufferedRequest = null),
      (this.lastBufferedRequest = null),
      (this.pendingcb = 0),
      (this.prefinished = !1),
      (this.errorEmitted = !1),
      (this.emitClose = N.emitClose !== !1),
      (this.autoDestroy = !!N.autoDestroy),
      (this.bufferedRequestCount = 0),
      (this.corkedRequestsFree = new e(this));
  }
  (z.prototype.getBuffer = function () {
    for (var O = this.bufferedRequest, W = []; O; ) W.push(O), (O = O.next);
    return W;
  }),
    (function () {
      try {
        Object.defineProperty(z.prototype, "buffer", {
          get: r.deprecate(
            function () {
              return this.getBuffer();
            },
            "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
            "DEP0003"
          ),
        });
      } catch {}
    })();
  var ee;
  typeof Symbol == "function" &&
  Symbol.hasInstance &&
  typeof Function.prototype[Symbol.hasInstance] == "function"
    ? ((ee = Function.prototype[Symbol.hasInstance]),
      Object.defineProperty(Q, Symbol.hasInstance, {
        value: function (O) {
          return ee.call(this, O)
            ? !0
            : this !== Q
            ? !1
            : O && O._writableState instanceof z;
        },
      }))
    : (ee = function (O) {
        return O instanceof this;
      });
  function Q(N) {
    t = t || un();
    var O = this instanceof t;
    if (!O && !ee.call(Q, this)) return new Q(N);
    (this._writableState = new z(N, this, O)),
      (this.writable = !0),
      N &&
        (typeof N.write == "function" && (this._write = N.write),
        typeof N.writev == "function" && (this._writev = N.writev),
        typeof N.destroy == "function" && (this._destroy = N.destroy),
        typeof N.final == "function" && (this._final = N.final)),
      n.call(this);
  }
  Q.prototype.pipe = function () {
    V(this, new H());
  };
  function Z(N, O) {
    var W = new T();
    V(N, W), process.nextTick(O, W);
  }
  function ue(N, O, W, J) {
    var he;
    return (
      W === null
        ? (he = new I())
        : typeof W != "string" &&
          !O.objectMode &&
          (he = new w("chunk", ["string", "Buffer"], W)),
      he ? (V(N, he), process.nextTick(J, he), !1) : !0
    );
  }
  (Q.prototype.write = function (N, O, W) {
    var J = this._writableState,
      he = !1,
      C = !J.objectMode && o(N);
    return (
      C && !i.isBuffer(N) && (N = c(N)),
      typeof O == "function" && ((W = O), (O = null)),
      C ? (O = "buffer") : O || (O = J.defaultEncoding),
      typeof W != "function" && (W = j),
      J.ending
        ? Z(this, W)
        : (C || ue(this, J, N, W)) &&
          (J.pendingcb++, (he = pe(this, J, C, N, O, W))),
      he
    );
  }),
    (Q.prototype.cork = function () {
      this._writableState.corked++;
    }),
    (Q.prototype.uncork = function () {
      var N = this._writableState;
      N.corked &&
        (N.corked--,
        !N.writing &&
          !N.corked &&
          !N.bufferProcessing &&
          N.bufferedRequest &&
          A(this, N));
    }),
    (Q.prototype.setDefaultEncoding = function (O) {
      if (
        (typeof O == "string" && (O = O.toLowerCase()),
        !(
          [
            "hex",
            "utf8",
            "utf-8",
            "ascii",
            "binary",
            "base64",
            "ucs2",
            "ucs-2",
            "utf16le",
            "utf-16le",
            "raw",
          ].indexOf((O + "").toLowerCase()) > -1
        ))
      )
        throw new $(O);
      return (this._writableState.defaultEncoding = O), this;
    }),
    Object.defineProperty(Q.prototype, "writableBuffer", {
      enumerable: !1,
      get: function () {
        return this._writableState && this._writableState.getBuffer();
      },
    });
  function oe(N, O, W) {
    return (
      !N.objectMode &&
        N.decodeStrings !== !1 &&
        typeof O == "string" &&
        (O = i.from(O, W)),
      O
    );
  }
  Object.defineProperty(Q.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._writableState.highWaterMark;
    },
  });
  function pe(N, O, W, J, he, C) {
    if (!W) {
      var M = oe(O, J, he);
      J !== M && ((W = !0), (he = "buffer"), (J = M));
    }
    var q = O.objectMode ? 1 : J.length;
    O.length += q;
    var G = O.length < O.highWaterMark;
    if ((G || (O.needDrain = !0), O.writing || O.corked)) {
      var se = O.lastBufferedRequest;
      (O.lastBufferedRequest = {
        chunk: J,
        encoding: he,
        isBuf: W,
        callback: C,
        next: null,
      }),
        se
          ? (se.next = O.lastBufferedRequest)
          : (O.bufferedRequest = O.lastBufferedRequest),
        (O.bufferedRequestCount += 1);
    } else E(N, O, !1, q, J, he, C);
    return G;
  }
  function E(N, O, W, J, he, C, M) {
    (O.writelen = J),
      (O.writecb = M),
      (O.writing = !0),
      (O.sync = !0),
      O.destroyed
        ? O.onwrite(new D("write"))
        : W
        ? N._writev(he, O.onwrite)
        : N._write(he, C, O.onwrite),
      (O.sync = !1);
  }
  function a(N, O, W, J, he) {
    --O.pendingcb,
      W
        ? (process.nextTick(he, J),
          process.nextTick(x, N, O),
          (N._writableState.errorEmitted = !0),
          V(N, J))
        : (he(J), (N._writableState.errorEmitted = !0), V(N, J), x(N, O));
  }
  function p(N) {
    (N.writing = !1),
      (N.writecb = null),
      (N.length -= N.writelen),
      (N.writelen = 0);
  }
  function y(N, O) {
    var W = N._writableState,
      J = W.sync,
      he = W.writecb;
    if (typeof he != "function") throw new L();
    if ((p(W), O)) a(N, W, J, O, he);
    else {
      var C = B(W) || N.destroyed;
      !C && !W.corked && !W.bufferProcessing && W.bufferedRequest && A(N, W),
        J ? process.nextTick(b, N, W, C, he) : b(N, W, C, he);
    }
  }
  function b(N, O, W, J) {
    W || R(N, O), O.pendingcb--, J(), x(N, O);
  }
  function R(N, O) {
    O.length === 0 && O.needDrain && ((O.needDrain = !1), N.emit("drain"));
  }
  function A(N, O) {
    O.bufferProcessing = !0;
    var W = O.bufferedRequest;
    if (N._writev && W && W.next) {
      var J = O.bufferedRequestCount,
        he = new Array(J),
        C = O.corkedRequestsFree;
      C.entry = W;
      for (var M = 0, q = !0; W; )
        (he[M] = W), W.isBuf || (q = !1), (W = W.next), (M += 1);
      (he.allBuffers = q),
        E(N, O, !0, O.length, he, "", C.finish),
        O.pendingcb++,
        (O.lastBufferedRequest = null),
        C.next
          ? ((O.corkedRequestsFree = C.next), (C.next = null))
          : (O.corkedRequestsFree = new e(O)),
        (O.bufferedRequestCount = 0);
    } else {
      for (; W; ) {
        var G = W.chunk,
          se = W.encoding,
          fe = W.callback,
          re = O.objectMode ? 1 : G.length;
        if (
          (E(N, O, !1, re, G, se, fe),
          (W = W.next),
          O.bufferedRequestCount--,
          O.writing)
        )
          break;
      }
      W === null && (O.lastBufferedRequest = null);
    }
    (O.bufferedRequest = W), (O.bufferProcessing = !1);
  }
  (Q.prototype._write = function (N, O, W) {
    W(new k("_write()"));
  }),
    (Q.prototype._writev = null),
    (Q.prototype.end = function (N, O, W) {
      var J = this._writableState;
      return (
        typeof N == "function"
          ? ((W = N), (N = null), (O = null))
          : typeof O == "function" && ((W = O), (O = null)),
        N != null && this.write(N, O),
        J.corked && ((J.corked = 1), this.uncork()),
        J.ending || K(this, J, W),
        this
      );
    }),
    Object.defineProperty(Q.prototype, "writableLength", {
      enumerable: !1,
      get: function () {
        return this._writableState.length;
      },
    });
  function B(N) {
    return (
      N.ending &&
      N.length === 0 &&
      N.bufferedRequest === null &&
      !N.finished &&
      !N.writing
    );
  }
  function v(N, O) {
    N._final(function (W) {
      O.pendingcb--,
        W && V(N, W),
        (O.prefinished = !0),
        N.emit("prefinish"),
        x(N, O);
    });
  }
  function f(N, O) {
    !O.prefinished &&
      !O.finalCalled &&
      (typeof N._final == "function" && !O.destroyed
        ? (O.pendingcb++, (O.finalCalled = !0), process.nextTick(v, N, O))
        : ((O.prefinished = !0), N.emit("prefinish")));
  }
  function x(N, O) {
    var W = B(O);
    if (
      W &&
      (f(N, O),
      O.pendingcb === 0 && ((O.finished = !0), N.emit("finish"), O.autoDestroy))
    ) {
      var J = N._readableState;
      (!J || (J.autoDestroy && J.endEmitted)) && N.destroy();
    }
    return W;
  }
  function K(N, O, W) {
    (O.ending = !0),
      x(N, O),
      W && (O.finished ? process.nextTick(W) : N.once("finish", W)),
      (O.ended = !0),
      (N.writable = !1);
  }
  function Y(N, O, W) {
    var J = N.entry;
    for (N.entry = null; J; ) {
      var he = J.callback;
      O.pendingcb--, he(W), (J = J.next);
    }
    O.corkedRequestsFree.next = N;
  }
  return (
    Object.defineProperty(Q.prototype, "destroyed", {
      enumerable: !1,
      get: function () {
        return this._writableState === void 0
          ? !1
          : this._writableState.destroyed;
      },
      set: function (O) {
        this._writableState && (this._writableState.destroyed = O);
      },
    }),
    (Q.prototype.destroy = u.destroy),
    (Q.prototype._undestroy = u.undestroy),
    (Q.prototype._destroy = function (N, O) {
      O(N);
    }),
    zs
  );
}
var Gs, Ya;
function un() {
  if (Ya) return Gs;
  Ya = 1;
  var e =
    Object.keys ||
    function (d) {
      var m = [];
      for (var g in d) m.push(g);
      return m;
    };
  Gs = c;
  var t = nu(),
    r = tu();
  It(c, t);
  for (var n = e(r.prototype), i = 0; i < n.length; i++) {
    var s = n[i];
    c.prototype[s] || (c.prototype[s] = r.prototype[s]);
  }
  function c(d) {
    if (!(this instanceof c)) return new c(d);
    t.call(this, d),
      r.call(this, d),
      (this.allowHalfOpen = !0),
      d &&
        (d.readable === !1 && (this.readable = !1),
        d.writable === !1 && (this.writable = !1),
        d.allowHalfOpen === !1 &&
          ((this.allowHalfOpen = !1), this.once("end", o)));
  }
  Object.defineProperty(c.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._writableState.highWaterMark;
    },
  }),
    Object.defineProperty(c.prototype, "writableBuffer", {
      enumerable: !1,
      get: function () {
        return this._writableState && this._writableState.getBuffer();
      },
    }),
    Object.defineProperty(c.prototype, "writableLength", {
      enumerable: !1,
      get: function () {
        return this._writableState.length;
      },
    });
  function o() {
    this._writableState.ended || process.nextTick(u, this);
  }
  function u(d) {
    d.end();
  }
  return (
    Object.defineProperty(c.prototype, "destroyed", {
      enumerable: !1,
      get: function () {
        return this._readableState === void 0 || this._writableState === void 0
          ? !1
          : this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function (m) {
        this._readableState === void 0 ||
          this._writableState === void 0 ||
          ((this._readableState.destroyed = m),
          (this._writableState.destroyed = m));
      },
    }),
    Gs
  );
}
var Js = {},
  Xa;
function ec() {
  if (Xa) return Js;
  Xa = 1;
  var e = rr.Buffer,
    t =
      e.isEncoding ||
      function (I) {
        switch (((I = "" + I), I && I.toLowerCase())) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
          case "raw":
            return !0;
          default:
            return !1;
        }
      };
  function r(I) {
    if (!I) return "utf8";
    for (var T; ; )
      switch (I) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return I;
        default:
          if (T) return;
          (I = ("" + I).toLowerCase()), (T = !0);
      }
  }
  function n(I) {
    var T = r(I);
    if (typeof T != "string" && (e.isEncoding === t || !t(I)))
      throw new Error("Unknown encoding: " + I);
    return T || I;
  }
  Js.StringDecoder = i;
  function i(I) {
    this.encoding = n(I);
    var T;
    switch (this.encoding) {
      case "utf16le":
        (this.text = g), (this.end = w), (T = 4);
        break;
      case "utf8":
        (this.fillLast = u), (T = 4);
        break;
      case "base64":
        (this.text = k), (this.end = L), (T = 3);
        break;
      default:
        (this.write = H), (this.end = D);
        return;
    }
    (this.lastNeed = 0),
      (this.lastTotal = 0),
      (this.lastChar = e.allocUnsafe(T));
  }
  (i.prototype.write = function (I) {
    if (I.length === 0) return "";
    var T, $;
    if (this.lastNeed) {
      if (((T = this.fillLast(I)), T === void 0)) return "";
      ($ = this.lastNeed), (this.lastNeed = 0);
    } else $ = 0;
    return $ < I.length ? (T ? T + this.text(I, $) : this.text(I, $)) : T || "";
  }),
    (i.prototype.end = m),
    (i.prototype.text = d),
    (i.prototype.fillLast = function (I) {
      if (this.lastNeed <= I.length)
        return (
          I.copy(
            this.lastChar,
            this.lastTotal - this.lastNeed,
            0,
            this.lastNeed
          ),
          this.lastChar.toString(this.encoding, 0, this.lastTotal)
        );
      I.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, I.length),
        (this.lastNeed -= I.length);
    });
  function s(I) {
    return I <= 127
      ? 0
      : I >> 5 === 6
      ? 2
      : I >> 4 === 14
      ? 3
      : I >> 3 === 30
      ? 4
      : I >> 6 === 2
      ? -1
      : -2;
  }
  function c(I, T, $) {
    var V = T.length - 1;
    if (V < $) return 0;
    var j = s(T[V]);
    return j >= 0
      ? (j > 0 && (I.lastNeed = j - 1), j)
      : --V < $ || j === -2
      ? 0
      : ((j = s(T[V])),
        j >= 0
          ? (j > 0 && (I.lastNeed = j - 2), j)
          : --V < $ || j === -2
          ? 0
          : ((j = s(T[V])),
            j >= 0
              ? (j > 0 && (j === 2 ? (j = 0) : (I.lastNeed = j - 3)), j)
              : 0));
  }
  function o(I, T, $) {
    if ((T[0] & 192) !== 128) return (I.lastNeed = 0), "�";
    if (I.lastNeed > 1 && T.length > 1) {
      if ((T[1] & 192) !== 128) return (I.lastNeed = 1), "�";
      if (I.lastNeed > 2 && T.length > 2 && (T[2] & 192) !== 128)
        return (I.lastNeed = 2), "�";
    }
  }
  function u(I) {
    var T = this.lastTotal - this.lastNeed,
      $ = o(this, I);
    if ($ !== void 0) return $;
    if (this.lastNeed <= I.length)
      return (
        I.copy(this.lastChar, T, 0, this.lastNeed),
        this.lastChar.toString(this.encoding, 0, this.lastTotal)
      );
    I.copy(this.lastChar, T, 0, I.length), (this.lastNeed -= I.length);
  }
  function d(I, T) {
    var $ = c(this, I, T);
    if (!this.lastNeed) return I.toString("utf8", T);
    this.lastTotal = $;
    var V = I.length - ($ - this.lastNeed);
    return I.copy(this.lastChar, 0, V), I.toString("utf8", T, V);
  }
  function m(I) {
    var T = I && I.length ? this.write(I) : "";
    return this.lastNeed ? T + "�" : T;
  }
  function g(I, T) {
    if ((I.length - T) % 2 === 0) {
      var $ = I.toString("utf16le", T);
      if ($) {
        var V = $.charCodeAt($.length - 1);
        if (V >= 55296 && V <= 56319)
          return (
            (this.lastNeed = 2),
            (this.lastTotal = 4),
            (this.lastChar[0] = I[I.length - 2]),
            (this.lastChar[1] = I[I.length - 1]),
            $.slice(0, -1)
          );
      }
      return $;
    }
    return (
      (this.lastNeed = 1),
      (this.lastTotal = 2),
      (this.lastChar[0] = I[I.length - 1]),
      I.toString("utf16le", T, I.length - 1)
    );
  }
  function w(I) {
    var T = I && I.length ? this.write(I) : "";
    if (this.lastNeed) {
      var $ = this.lastTotal - this.lastNeed;
      return T + this.lastChar.toString("utf16le", 0, $);
    }
    return T;
  }
  function k(I, T) {
    var $ = (I.length - T) % 3;
    return $ === 0
      ? I.toString("base64", T)
      : ((this.lastNeed = 3 - $),
        (this.lastTotal = 3),
        $ === 1
          ? (this.lastChar[0] = I[I.length - 1])
          : ((this.lastChar[0] = I[I.length - 2]),
            (this.lastChar[1] = I[I.length - 1])),
        I.toString("base64", T, I.length - $));
  }
  function L(I) {
    var T = I && I.length ? this.write(I) : "";
    return this.lastNeed
      ? T + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
      : T;
  }
  function H(I) {
    return I.toString(this.encoding);
  }
  function D(I) {
    return I && I.length ? this.write(I) : "";
  }
  return Js;
}
var tc = Pr.codes.ERR_STREAM_PREMATURE_CLOSE;
function Md(e) {
  var t = !1;
  return function () {
    if (!t) {
      t = !0;
      for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
        n[i] = arguments[i];
      e.apply(this, n);
    }
  };
}
function xd() {}
function kd(e) {
  return e.setHeader && typeof e.abort == "function";
}
function ru(e, t, r) {
  if (typeof t == "function") return ru(e, null, t);
  t || (t = {}), (r = Md(r || xd));
  var n = t.readable || (t.readable !== !1 && e.readable),
    i = t.writable || (t.writable !== !1 && e.writable),
    s = function () {
      e.writable || o();
    },
    c = e._writableState && e._writableState.finished,
    o = function () {
      (i = !1), (c = !0), n || r.call(e);
    },
    u = e._readableState && e._readableState.endEmitted,
    d = function () {
      (n = !1), (u = !0), i || r.call(e);
    },
    m = function (L) {
      r.call(e, L);
    },
    g = function () {
      var L;
      if (n && !u)
        return (
          (!e._readableState || !e._readableState.ended) && (L = new tc()),
          r.call(e, L)
        );
      if (i && !c)
        return (
          (!e._writableState || !e._writableState.ended) && (L = new tc()),
          r.call(e, L)
        );
    },
    w = function () {
      e.req.on("finish", o);
    };
  return (
    kd(e)
      ? (e.on("complete", o),
        e.on("abort", g),
        e.req ? w() : e.on("request", w))
      : i && !e._writableState && (e.on("end", s), e.on("close", s)),
    e.on("end", d),
    e.on("finish", o),
    t.error !== !1 && e.on("error", m),
    e.on("close", g),
    function () {
      e.removeListener("complete", o),
        e.removeListener("abort", g),
        e.removeListener("request", w),
        e.req && e.req.removeListener("finish", o),
        e.removeListener("end", s),
        e.removeListener("close", s),
        e.removeListener("finish", o),
        e.removeListener("end", d),
        e.removeListener("error", m),
        e.removeListener("close", g);
    }
  );
}
var Jo = ru,
  Zs,
  rc;
function Id() {
  if (rc) return Zs;
  rc = 1;
  var e;
  function t($, V, j) {
    return (
      (V = r(V)),
      V in $
        ? Object.defineProperty($, V, {
            value: j,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : ($[V] = j),
      $
    );
  }
  function r($) {
    var V = n($, "string");
    return typeof V == "symbol" ? V : String(V);
  }
  function n($, V) {
    if (typeof $ != "object" || $ === null) return $;
    var j = $[Symbol.toPrimitive];
    if (j !== void 0) {
      var z = j.call($, V || "default");
      if (typeof z != "object") return z;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (V === "string" ? String : Number)($);
  }
  var i = Jo,
    s = Symbol("lastResolve"),
    c = Symbol("lastReject"),
    o = Symbol("error"),
    u = Symbol("ended"),
    d = Symbol("lastPromise"),
    m = Symbol("handlePromise"),
    g = Symbol("stream");
  function w($, V) {
    return { value: $, done: V };
  }
  function k($) {
    var V = $[s];
    if (V !== null) {
      var j = $[g].read();
      j !== null && (($[d] = null), ($[s] = null), ($[c] = null), V(w(j, !1)));
    }
  }
  function L($) {
    process.nextTick(k, $);
  }
  function H($, V) {
    return function (j, z) {
      $.then(function () {
        if (V[u]) {
          j(w(void 0, !0));
          return;
        }
        V[m](j, z);
      }, z);
    };
  }
  var D = Object.getPrototypeOf(function () {}),
    I = Object.setPrototypeOf(
      ((e = {
        get stream() {
          return this[g];
        },
        next: function () {
          var V = this,
            j = this[o];
          if (j !== null) return Promise.reject(j);
          if (this[u]) return Promise.resolve(w(void 0, !0));
          if (this[g].destroyed)
            return new Promise(function (Z, ue) {
              process.nextTick(function () {
                V[o] ? ue(V[o]) : Z(w(void 0, !0));
              });
            });
          var z = this[d],
            ee;
          if (z) ee = new Promise(H(z, this));
          else {
            var Q = this[g].read();
            if (Q !== null) return Promise.resolve(w(Q, !1));
            ee = new Promise(this[m]);
          }
          return (this[d] = ee), ee;
        },
      }),
      t(e, Symbol.asyncIterator, function () {
        return this;
      }),
      t(e, "return", function () {
        var V = this;
        return new Promise(function (j, z) {
          V[g].destroy(null, function (ee) {
            if (ee) {
              z(ee);
              return;
            }
            j(w(void 0, !0));
          });
        });
      }),
      e),
      D
    ),
    T = function (V) {
      var j,
        z = Object.create(
          I,
          ((j = {}),
          t(j, g, { value: V, writable: !0 }),
          t(j, s, { value: null, writable: !0 }),
          t(j, c, { value: null, writable: !0 }),
          t(j, o, { value: null, writable: !0 }),
          t(j, u, { value: V._readableState.endEmitted, writable: !0 }),
          t(j, m, {
            value: function (Q, Z) {
              var ue = z[g].read();
              ue
                ? ((z[d] = null), (z[s] = null), (z[c] = null), Q(w(ue, !1)))
                : ((z[s] = Q), (z[c] = Z));
            },
            writable: !0,
          }),
          j)
        );
      return (
        (z[d] = null),
        i(V, function (ee) {
          if (ee && ee.code !== "ERR_STREAM_PREMATURE_CLOSE") {
            var Q = z[c];
            Q !== null && ((z[d] = null), (z[s] = null), (z[c] = null), Q(ee)),
              (z[o] = ee);
            return;
          }
          var Z = z[s];
          Z !== null &&
            ((z[d] = null), (z[s] = null), (z[c] = null), Z(w(void 0, !0))),
            (z[u] = !0);
        }),
        V.on("readable", L.bind(null, z)),
        z
      );
    };
  return (Zs = T), Zs;
}
var Ks, nc;
function Ad() {
  return (
    nc ||
      ((nc = 1),
      (Ks = function () {
        throw new Error("Readable.from is not available in the browser");
      })),
    Ks
  );
}
var Qs, ic;
function nu() {
  if (ic) return Qs;
  (ic = 1), (Qs = Z);
  var e;
  (Z.ReadableState = Q), Fi.EventEmitter;
  var t = function (M, q) {
      return M.listeners(q).length;
    },
    r = Ql,
    n = Un.Buffer,
    i =
      (typeof te < "u"
        ? te
        : typeof window < "u"
        ? window
        : typeof self < "u"
        ? self
        : {}
      ).Uint8Array || function () {};
  function s(C) {
    return n.from(C);
  }
  function c(C) {
    return n.isBuffer(C) || C instanceof i;
  }
  var o = jo,
    u;
  o && o.debuglog ? (u = o.debuglog("stream")) : (u = function () {});
  var d = dd(),
    m = Yl,
    g = eu,
    w = g.getHighWaterMark,
    k = Pr.codes,
    L = k.ERR_INVALID_ARG_TYPE,
    H = k.ERR_STREAM_PUSH_AFTER_EOF,
    D = k.ERR_METHOD_NOT_IMPLEMENTED,
    I = k.ERR_STREAM_UNSHIFT_AFTER_END_EVENT,
    T,
    $,
    V;
  It(Z, r);
  var j = m.errorOrDestroy,
    z = ["error", "close", "destroy", "pause", "resume"];
  function ee(C, M, q) {
    if (typeof C.prependListener == "function") return C.prependListener(M, q);
    !C._events || !C._events[M]
      ? C.on(M, q)
      : Array.isArray(C._events[M])
      ? C._events[M].unshift(q)
      : (C._events[M] = [q, C._events[M]]);
  }
  function Q(C, M, q) {
    (e = e || un()),
      (C = C || {}),
      typeof q != "boolean" && (q = M instanceof e),
      (this.objectMode = !!C.objectMode),
      q && (this.objectMode = this.objectMode || !!C.readableObjectMode),
      (this.highWaterMark = w(this, C, "readableHighWaterMark", q)),
      (this.buffer = new d()),
      (this.length = 0),
      (this.pipes = null),
      (this.pipesCount = 0),
      (this.flowing = null),
      (this.ended = !1),
      (this.endEmitted = !1),
      (this.reading = !1),
      (this.sync = !0),
      (this.needReadable = !1),
      (this.emittedReadable = !1),
      (this.readableListening = !1),
      (this.resumeScheduled = !1),
      (this.paused = !0),
      (this.emitClose = C.emitClose !== !1),
      (this.autoDestroy = !!C.autoDestroy),
      (this.destroyed = !1),
      (this.defaultEncoding = C.defaultEncoding || "utf8"),
      (this.awaitDrain = 0),
      (this.readingMore = !1),
      (this.decoder = null),
      (this.encoding = null),
      C.encoding &&
        (T || (T = ec().StringDecoder),
        (this.decoder = new T(C.encoding)),
        (this.encoding = C.encoding));
  }
  function Z(C) {
    if (((e = e || un()), !(this instanceof Z))) return new Z(C);
    var M = this instanceof e;
    (this._readableState = new Q(C, this, M)),
      (this.readable = !0),
      C &&
        (typeof C.read == "function" && (this._read = C.read),
        typeof C.destroy == "function" && (this._destroy = C.destroy)),
      r.call(this);
  }
  Object.defineProperty(Z.prototype, "destroyed", {
    enumerable: !1,
    get: function () {
      return this._readableState === void 0
        ? !1
        : this._readableState.destroyed;
    },
    set: function (M) {
      this._readableState && (this._readableState.destroyed = M);
    },
  }),
    (Z.prototype.destroy = m.destroy),
    (Z.prototype._undestroy = m.undestroy),
    (Z.prototype._destroy = function (C, M) {
      M(C);
    }),
    (Z.prototype.push = function (C, M) {
      var q = this._readableState,
        G;
      return (
        q.objectMode
          ? (G = !0)
          : typeof C == "string" &&
            ((M = M || q.defaultEncoding),
            M !== q.encoding && ((C = n.from(C, M)), (M = "")),
            (G = !0)),
        ue(this, C, M, !1, G)
      );
    }),
    (Z.prototype.unshift = function (C) {
      return ue(this, C, null, !0, !1);
    });
  function ue(C, M, q, G, se) {
    u("readableAddChunk", M);
    var fe = C._readableState;
    if (M === null) (fe.reading = !1), y(C, fe);
    else {
      var re;
      if ((se || (re = pe(fe, M)), re)) j(C, re);
      else if (fe.objectMode || (M && M.length > 0))
        if (
          (typeof M != "string" &&
            !fe.objectMode &&
            Object.getPrototypeOf(M) !== n.prototype &&
            (M = s(M)),
          G)
        )
          fe.endEmitted ? j(C, new I()) : oe(C, fe, M, !0);
        else if (fe.ended) j(C, new H());
        else {
          if (fe.destroyed) return !1;
          (fe.reading = !1),
            fe.decoder && !q
              ? ((M = fe.decoder.write(M)),
                fe.objectMode || M.length !== 0 ? oe(C, fe, M, !1) : A(C, fe))
              : oe(C, fe, M, !1);
        }
      else G || ((fe.reading = !1), A(C, fe));
    }
    return !fe.ended && (fe.length < fe.highWaterMark || fe.length === 0);
  }
  function oe(C, M, q, G) {
    M.flowing && M.length === 0 && !M.sync
      ? ((M.awaitDrain = 0), C.emit("data", q))
      : ((M.length += M.objectMode ? 1 : q.length),
        G ? M.buffer.unshift(q) : M.buffer.push(q),
        M.needReadable && b(C)),
      A(C, M);
  }
  function pe(C, M) {
    var q;
    return (
      !c(M) &&
        typeof M != "string" &&
        M !== void 0 &&
        !C.objectMode &&
        (q = new L("chunk", ["string", "Buffer", "Uint8Array"], M)),
      q
    );
  }
  (Z.prototype.isPaused = function () {
    return this._readableState.flowing === !1;
  }),
    (Z.prototype.setEncoding = function (C) {
      T || (T = ec().StringDecoder);
      var M = new T(C);
      (this._readableState.decoder = M),
        (this._readableState.encoding = this._readableState.decoder.encoding);
      for (var q = this._readableState.buffer.head, G = ""; q !== null; )
        (G += M.write(q.data)), (q = q.next);
      return (
        this._readableState.buffer.clear(),
        G !== "" && this._readableState.buffer.push(G),
        (this._readableState.length = G.length),
        this
      );
    });
  var E = 1073741824;
  function a(C) {
    return (
      C >= E
        ? (C = E)
        : (C--,
          (C |= C >>> 1),
          (C |= C >>> 2),
          (C |= C >>> 4),
          (C |= C >>> 8),
          (C |= C >>> 16),
          C++),
      C
    );
  }
  function p(C, M) {
    return C <= 0 || (M.length === 0 && M.ended)
      ? 0
      : M.objectMode
      ? 1
      : C !== C
      ? M.flowing && M.length
        ? M.buffer.head.data.length
        : M.length
      : (C > M.highWaterMark && (M.highWaterMark = a(C)),
        C <= M.length ? C : M.ended ? M.length : ((M.needReadable = !0), 0));
  }
  Z.prototype.read = function (C) {
    u("read", C), (C = parseInt(C, 10));
    var M = this._readableState,
      q = C;
    if (
      (C !== 0 && (M.emittedReadable = !1),
      C === 0 &&
        M.needReadable &&
        ((M.highWaterMark !== 0 ? M.length >= M.highWaterMark : M.length > 0) ||
          M.ended))
    )
      return (
        u("read: emitReadable", M.length, M.ended),
        M.length === 0 && M.ended ? W(this) : b(this),
        null
      );
    if (((C = p(C, M)), C === 0 && M.ended))
      return M.length === 0 && W(this), null;
    var G = M.needReadable;
    u("need readable", G),
      (M.length === 0 || M.length - C < M.highWaterMark) &&
        ((G = !0), u("length less than watermark", G)),
      M.ended || M.reading
        ? ((G = !1), u("reading or ended", G))
        : G &&
          (u("do read"),
          (M.reading = !0),
          (M.sync = !0),
          M.length === 0 && (M.needReadable = !0),
          this._read(M.highWaterMark),
          (M.sync = !1),
          M.reading || (C = p(q, M)));
    var se;
    return (
      C > 0 ? (se = O(C, M)) : (se = null),
      se === null
        ? ((M.needReadable = M.length <= M.highWaterMark), (C = 0))
        : ((M.length -= C), (M.awaitDrain = 0)),
      M.length === 0 &&
        (M.ended || (M.needReadable = !0), q !== C && M.ended && W(this)),
      se !== null && this.emit("data", se),
      se
    );
  };
  function y(C, M) {
    if ((u("onEofChunk"), !M.ended)) {
      if (M.decoder) {
        var q = M.decoder.end();
        q &&
          q.length &&
          (M.buffer.push(q), (M.length += M.objectMode ? 1 : q.length));
      }
      (M.ended = !0),
        M.sync
          ? b(C)
          : ((M.needReadable = !1),
            M.emittedReadable || ((M.emittedReadable = !0), R(C)));
    }
  }
  function b(C) {
    var M = C._readableState;
    u("emitReadable", M.needReadable, M.emittedReadable),
      (M.needReadable = !1),
      M.emittedReadable ||
        (u("emitReadable", M.flowing),
        (M.emittedReadable = !0),
        process.nextTick(R, C));
  }
  function R(C) {
    var M = C._readableState;
    u("emitReadable_", M.destroyed, M.length, M.ended),
      !M.destroyed &&
        (M.length || M.ended) &&
        (C.emit("readable"), (M.emittedReadable = !1)),
      (M.needReadable = !M.flowing && !M.ended && M.length <= M.highWaterMark),
      N(C);
  }
  function A(C, M) {
    M.readingMore || ((M.readingMore = !0), process.nextTick(B, C, M));
  }
  function B(C, M) {
    for (
      ;
      !M.reading &&
      !M.ended &&
      (M.length < M.highWaterMark || (M.flowing && M.length === 0));

    ) {
      var q = M.length;
      if ((u("maybeReadMore read 0"), C.read(0), q === M.length)) break;
    }
    M.readingMore = !1;
  }
  (Z.prototype._read = function (C) {
    j(this, new D("_read()"));
  }),
    (Z.prototype.pipe = function (C, M) {
      var q = this,
        G = this._readableState;
      switch (G.pipesCount) {
        case 0:
          G.pipes = C;
          break;
        case 1:
          G.pipes = [G.pipes, C];
          break;
        default:
          G.pipes.push(C);
          break;
      }
      (G.pipesCount += 1), u("pipe count=%d opts=%j", G.pipesCount, M);
      var se =
          (!M || M.end !== !1) && C !== process.stdout && C !== process.stderr,
        fe = se ? ve : Ee;
      G.endEmitted ? process.nextTick(fe) : q.once("end", fe),
        C.on("unpipe", re);
      function re(_, l) {
        u("onunpipe"),
          _ === q && l && l.hasUnpiped === !1 && ((l.hasUnpiped = !0), Se());
      }
      function ve() {
        u("onend"), C.end();
      }
      var _t = v(q);
      C.on("drain", _t);
      var Re = !1;
      function Se() {
        u("cleanup"),
          C.removeListener("close", Ce),
          C.removeListener("finish", tt),
          C.removeListener("drain", _t),
          C.removeListener("error", be),
          C.removeListener("unpipe", re),
          q.removeListener("end", ve),
          q.removeListener("end", Ee),
          q.removeListener("data", Ye),
          (Re = !0),
          G.awaitDrain &&
            (!C._writableState || C._writableState.needDrain) &&
            _t();
      }
      q.on("data", Ye);
      function Ye(_) {
        u("ondata");
        var l = C.write(_);
        u("dest.write", l),
          l === !1 &&
            (((G.pipesCount === 1 && G.pipes === C) ||
              (G.pipesCount > 1 && he(G.pipes, C) !== -1)) &&
              !Re &&
              (u("false write response, pause", G.awaitDrain), G.awaitDrain++),
            q.pause());
      }
      function be(_) {
        u("onerror", _),
          Ee(),
          C.removeListener("error", be),
          t(C, "error") === 0 && j(C, _);
      }
      ee(C, "error", be);
      function Ce() {
        C.removeListener("finish", tt), Ee();
      }
      C.once("close", Ce);
      function tt() {
        u("onfinish"), C.removeListener("close", Ce), Ee();
      }
      C.once("finish", tt);
      function Ee() {
        u("unpipe"), q.unpipe(C);
      }
      return C.emit("pipe", q), G.flowing || (u("pipe resume"), q.resume()), C;
    });
  function v(C) {
    return function () {
      var q = C._readableState;
      u("pipeOnDrain", q.awaitDrain),
        q.awaitDrain && q.awaitDrain--,
        q.awaitDrain === 0 && t(C, "data") && ((q.flowing = !0), N(C));
    };
  }
  (Z.prototype.unpipe = function (C) {
    var M = this._readableState,
      q = { hasUnpiped: !1 };
    if (M.pipesCount === 0) return this;
    if (M.pipesCount === 1)
      return C && C !== M.pipes
        ? this
        : (C || (C = M.pipes),
          (M.pipes = null),
          (M.pipesCount = 0),
          (M.flowing = !1),
          C && C.emit("unpipe", this, q),
          this);
    if (!C) {
      var G = M.pipes,
        se = M.pipesCount;
      (M.pipes = null), (M.pipesCount = 0), (M.flowing = !1);
      for (var fe = 0; fe < se; fe++)
        G[fe].emit("unpipe", this, { hasUnpiped: !1 });
      return this;
    }
    var re = he(M.pipes, C);
    return re === -1
      ? this
      : (M.pipes.splice(re, 1),
        (M.pipesCount -= 1),
        M.pipesCount === 1 && (M.pipes = M.pipes[0]),
        C.emit("unpipe", this, q),
        this);
  }),
    (Z.prototype.on = function (C, M) {
      var q = r.prototype.on.call(this, C, M),
        G = this._readableState;
      return (
        C === "data"
          ? ((G.readableListening = this.listenerCount("readable") > 0),
            G.flowing !== !1 && this.resume())
          : C === "readable" &&
            !G.endEmitted &&
            !G.readableListening &&
            ((G.readableListening = G.needReadable = !0),
            (G.flowing = !1),
            (G.emittedReadable = !1),
            u("on readable", G.length, G.reading),
            G.length ? b(this) : G.reading || process.nextTick(x, this)),
        q
      );
    }),
    (Z.prototype.addListener = Z.prototype.on),
    (Z.prototype.removeListener = function (C, M) {
      var q = r.prototype.removeListener.call(this, C, M);
      return C === "readable" && process.nextTick(f, this), q;
    }),
    (Z.prototype.removeAllListeners = function (C) {
      var M = r.prototype.removeAllListeners.apply(this, arguments);
      return (C === "readable" || C === void 0) && process.nextTick(f, this), M;
    });
  function f(C) {
    var M = C._readableState;
    (M.readableListening = C.listenerCount("readable") > 0),
      M.resumeScheduled && !M.paused
        ? (M.flowing = !0)
        : C.listenerCount("data") > 0 && C.resume();
  }
  function x(C) {
    u("readable nexttick read 0"), C.read(0);
  }
  Z.prototype.resume = function () {
    var C = this._readableState;
    return (
      C.flowing ||
        (u("resume"), (C.flowing = !C.readableListening), K(this, C)),
      (C.paused = !1),
      this
    );
  };
  function K(C, M) {
    M.resumeScheduled || ((M.resumeScheduled = !0), process.nextTick(Y, C, M));
  }
  function Y(C, M) {
    u("resume", M.reading),
      M.reading || C.read(0),
      (M.resumeScheduled = !1),
      C.emit("resume"),
      N(C),
      M.flowing && !M.reading && C.read(0);
  }
  Z.prototype.pause = function () {
    return (
      u("call pause flowing=%j", this._readableState.flowing),
      this._readableState.flowing !== !1 &&
        (u("pause"), (this._readableState.flowing = !1), this.emit("pause")),
      (this._readableState.paused = !0),
      this
    );
  };
  function N(C) {
    var M = C._readableState;
    for (u("flow", M.flowing); M.flowing && C.read() !== null; );
  }
  (Z.prototype.wrap = function (C) {
    var M = this,
      q = this._readableState,
      G = !1;
    C.on("end", function () {
      if ((u("wrapped end"), q.decoder && !q.ended)) {
        var re = q.decoder.end();
        re && re.length && M.push(re);
      }
      M.push(null);
    }),
      C.on("data", function (re) {
        if (
          (u("wrapped data"),
          q.decoder && (re = q.decoder.write(re)),
          !(q.objectMode && re == null) &&
            !(!q.objectMode && (!re || !re.length)))
        ) {
          var ve = M.push(re);
          ve || ((G = !0), C.pause());
        }
      });
    for (var se in C)
      this[se] === void 0 &&
        typeof C[se] == "function" &&
        (this[se] = (function (ve) {
          return function () {
            return C[ve].apply(C, arguments);
          };
        })(se));
    for (var fe = 0; fe < z.length; fe++)
      C.on(z[fe], this.emit.bind(this, z[fe]));
    return (
      (this._read = function (re) {
        u("wrapped _read", re), G && ((G = !1), C.resume());
      }),
      this
    );
  }),
    typeof Symbol == "function" &&
      (Z.prototype[Symbol.asyncIterator] = function () {
        return $ === void 0 && ($ = Id()), $(this);
      }),
    Object.defineProperty(Z.prototype, "readableHighWaterMark", {
      enumerable: !1,
      get: function () {
        return this._readableState.highWaterMark;
      },
    }),
    Object.defineProperty(Z.prototype, "readableBuffer", {
      enumerable: !1,
      get: function () {
        return this._readableState && this._readableState.buffer;
      },
    }),
    Object.defineProperty(Z.prototype, "readableFlowing", {
      enumerable: !1,
      get: function () {
        return this._readableState.flowing;
      },
      set: function (M) {
        this._readableState && (this._readableState.flowing = M);
      },
    }),
    (Z._fromList = O),
    Object.defineProperty(Z.prototype, "readableLength", {
      enumerable: !1,
      get: function () {
        return this._readableState.length;
      },
    });
  function O(C, M) {
    if (M.length === 0) return null;
    var q;
    return (
      M.objectMode
        ? (q = M.buffer.shift())
        : !C || C >= M.length
        ? (M.decoder
            ? (q = M.buffer.join(""))
            : M.buffer.length === 1
            ? (q = M.buffer.first())
            : (q = M.buffer.concat(M.length)),
          M.buffer.clear())
        : (q = M.buffer.consume(C, M.decoder)),
      q
    );
  }
  function W(C) {
    var M = C._readableState;
    u("endReadable", M.endEmitted),
      M.endEmitted || ((M.ended = !0), process.nextTick(J, M, C));
  }
  function J(C, M) {
    if (
      (u("endReadableNT", C.endEmitted, C.length),
      !C.endEmitted &&
        C.length === 0 &&
        ((C.endEmitted = !0), (M.readable = !1), M.emit("end"), C.autoDestroy))
    ) {
      var q = M._writableState;
      (!q || (q.autoDestroy && q.finished)) && M.destroy();
    }
  }
  typeof Symbol == "function" &&
    (Z.from = function (C, M) {
      return V === void 0 && (V = Ad()), V(Z, C, M);
    });
  function he(C, M) {
    for (var q = 0, G = C.length; q < G; q++) if (C[q] === M) return q;
    return -1;
  }
  return Qs;
}
var iu = Jt,
  zi = Pr.codes,
  Td = zi.ERR_METHOD_NOT_IMPLEMENTED,
  Nd = zi.ERR_MULTIPLE_CALLBACK,
  Ld = zi.ERR_TRANSFORM_ALREADY_TRANSFORMING,
  Bd = zi.ERR_TRANSFORM_WITH_LENGTH_0,
  Gi = un();
It(Jt, Gi);
function Pd(e, t) {
  var r = this._transformState;
  r.transforming = !1;
  var n = r.writecb;
  if (n === null) return this.emit("error", new Nd());
  (r.writechunk = null), (r.writecb = null), t != null && this.push(t), n(e);
  var i = this._readableState;
  (i.reading = !1),
    (i.needReadable || i.length < i.highWaterMark) &&
      this._read(i.highWaterMark);
}
function Jt(e) {
  if (!(this instanceof Jt)) return new Jt(e);
  Gi.call(this, e),
    (this._transformState = {
      afterTransform: Pd.bind(this),
      needTransform: !1,
      transforming: !1,
      writecb: null,
      writechunk: null,
      writeencoding: null,
    }),
    (this._readableState.needReadable = !0),
    (this._readableState.sync = !1),
    e &&
      (typeof e.transform == "function" && (this._transform = e.transform),
      typeof e.flush == "function" && (this._flush = e.flush)),
    this.on("prefinish", Od);
}
function Od() {
  var e = this;
  typeof this._flush == "function" && !this._readableState.destroyed
    ? this._flush(function (t, r) {
        sc(e, t, r);
      })
    : sc(this, null, null);
}
Jt.prototype.push = function (e, t) {
  return (
    (this._transformState.needTransform = !1),
    Gi.prototype.push.call(this, e, t)
  );
};
Jt.prototype._transform = function (e, t, r) {
  r(new Td("_transform()"));
};
Jt.prototype._write = function (e, t, r) {
  var n = this._transformState;
  if (
    ((n.writecb = r),
    (n.writechunk = e),
    (n.writeencoding = t),
    !n.transforming)
  ) {
    var i = this._readableState;
    (n.needTransform || i.needReadable || i.length < i.highWaterMark) &&
      this._read(i.highWaterMark);
  }
};
Jt.prototype._read = function (e) {
  var t = this._transformState;
  t.writechunk !== null && !t.transforming
    ? ((t.transforming = !0),
      this._transform(t.writechunk, t.writeencoding, t.afterTransform))
    : (t.needTransform = !0);
};
Jt.prototype._destroy = function (e, t) {
  Gi.prototype._destroy.call(this, e, function (r) {
    t(r);
  });
};
function sc(e, t, r) {
  if (t) return e.emit("error", t);
  if ((r != null && e.push(r), e._writableState.length)) throw new Bd();
  if (e._transformState.transforming) throw new Ld();
  return e.push(null);
}
var $d = On,
  su = iu;
It(On, su);
function On(e) {
  if (!(this instanceof On)) return new On(e);
  su.call(this, e);
}
On.prototype._transform = function (e, t, r) {
  r(null, e);
};
var Ys;
function Fd(e) {
  var t = !1;
  return function () {
    t || ((t = !0), e.apply(void 0, arguments));
  };
}
var ou = Pr.codes,
  Dd = ou.ERR_MISSING_ARGS,
  jd = ou.ERR_STREAM_DESTROYED;
function oc(e) {
  if (e) throw e;
}
function Ud(e) {
  return e.setHeader && typeof e.abort == "function";
}
function Hd(e, t, r, n) {
  n = Fd(n);
  var i = !1;
  e.on("close", function () {
    i = !0;
  }),
    Ys === void 0 && (Ys = Jo),
    Ys(e, { readable: t, writable: r }, function (c) {
      if (c) return n(c);
      (i = !0), n();
    });
  var s = !1;
  return function (c) {
    if (!i && !s) {
      if (((s = !0), Ud(e))) return e.abort();
      if (typeof e.destroy == "function") return e.destroy();
      n(c || new jd("pipe"));
    }
  };
}
function ac(e) {
  e();
}
function Wd(e, t) {
  return e.pipe(t);
}
function Vd(e) {
  return !e.length || typeof e[e.length - 1] != "function" ? oc : e.pop();
}
function qd() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = Vd(t);
  if ((Array.isArray(t[0]) && (t = t[0]), t.length < 2))
    throw new Dd("streams");
  var i,
    s = t.map(function (c, o) {
      var u = o < t.length - 1,
        d = o > 0;
      return Hd(c, u, d, function (m) {
        i || (i = m), m && s.forEach(ac), !u && (s.forEach(ac), n(i));
      });
    });
  return t.reduce(Wd);
}
var zd = qd;
(function (e, t) {
  (t = e.exports = nu()),
    (t.Stream = t),
    (t.Readable = t),
    (t.Writable = tu()),
    (t.Duplex = un()),
    (t.Transform = iu),
    (t.PassThrough = $d),
    (t.finished = Jo),
    (t.pipeline = zd);
})(No, No.exports);
var au = No.exports;
const { Transform: Gd } = au;
var Jd = (e) =>
  class cu extends Gd {
    constructor(r, n, i, s, c) {
      super(c),
        (this._rate = r),
        (this._capacity = n),
        (this._delimitedSuffix = i),
        (this._hashBitLength = s),
        (this._options = c),
        (this._state = new e()),
        this._state.initialize(r, n),
        (this._finalized = !1);
    }
    _transform(r, n, i) {
      let s = null;
      try {
        this.update(r, n);
      } catch (c) {
        s = c;
      }
      i(s);
    }
    _flush(r) {
      let n = null;
      try {
        this.push(this.digest());
      } catch (i) {
        n = i;
      }
      r(n);
    }
    update(r, n) {
      if (!Buffer.isBuffer(r) && typeof r != "string")
        throw new TypeError("Data must be a string or a buffer");
      if (this._finalized) throw new Error("Digest already called");
      return (
        Buffer.isBuffer(r) || (r = Buffer.from(r, n)),
        this._state.absorb(r),
        this
      );
    }
    digest(r) {
      if (this._finalized) throw new Error("Digest already called");
      (this._finalized = !0),
        this._delimitedSuffix &&
          this._state.absorbLastFewBits(this._delimitedSuffix);
      let n = this._state.squeeze(this._hashBitLength / 8);
      return r !== void 0 && (n = n.toString(r)), this._resetState(), n;
    }
    _resetState() {
      return this._state.initialize(this._rate, this._capacity), this;
    }
    _clone() {
      const r = new cu(
        this._rate,
        this._capacity,
        this._delimitedSuffix,
        this._hashBitLength,
        this._options
      );
      return this._state.copy(r._state), (r._finalized = this._finalized), r;
    }
  };
const { Transform: Zd } = au;
var Kd = (e) =>
  class lu extends Zd {
    constructor(r, n, i, s) {
      super(s),
        (this._rate = r),
        (this._capacity = n),
        (this._delimitedSuffix = i),
        (this._options = s),
        (this._state = new e()),
        this._state.initialize(r, n),
        (this._finalized = !1);
    }
    _transform(r, n, i) {
      let s = null;
      try {
        this.update(r, n);
      } catch (c) {
        s = c;
      }
      i(s);
    }
    _flush() {}
    _read(r) {
      this.push(this.squeeze(r));
    }
    update(r, n) {
      if (!Buffer.isBuffer(r) && typeof r != "string")
        throw new TypeError("Data must be a string or a buffer");
      if (this._finalized) throw new Error("Squeeze already called");
      return (
        Buffer.isBuffer(r) || (r = Buffer.from(r, n)),
        this._state.absorb(r),
        this
      );
    }
    squeeze(r, n) {
      this._finalized ||
        ((this._finalized = !0),
        this._state.absorbLastFewBits(this._delimitedSuffix));
      let i = this._state.squeeze(r);
      return n !== void 0 && (i = i.toString(n)), i;
    }
    _resetState() {
      return this._state.initialize(this._rate, this._capacity), this;
    }
    _clone() {
      const r = new lu(
        this._rate,
        this._capacity,
        this._delimitedSuffix,
        this._options
      );
      return this._state.copy(r._state), (r._finalized = this._finalized), r;
    }
  };
const Qd = Jd,
  Yd = Kd;
var Xd = function (e) {
    const t = Qd(e),
      r = Yd(e);
    return function (n, i) {
      switch (typeof n == "string" ? n.toLowerCase() : n) {
        case "keccak224":
          return new t(1152, 448, null, 224, i);
        case "keccak256":
          return new t(1088, 512, null, 256, i);
        case "keccak384":
          return new t(832, 768, null, 384, i);
        case "keccak512":
          return new t(576, 1024, null, 512, i);
        case "sha3-224":
          return new t(1152, 448, 6, 224, i);
        case "sha3-256":
          return new t(1088, 512, 6, 256, i);
        case "sha3-384":
          return new t(832, 768, 6, 384, i);
        case "sha3-512":
          return new t(576, 1024, 6, 512, i);
        case "shake128":
          return new r(1344, 256, 31, i);
        case "shake256":
          return new r(1088, 512, 31, i);
        default:
          throw new Error("Invald algorithm: " + n);
      }
    };
  },
  uu = {};
const cc = [
  1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
  2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0,
  2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905,
  2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0,
  2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649,
  0, 2147516424, 2147483648,
];
uu.p1600 = function (e) {
  for (let t = 0; t < 24; ++t) {
    const r = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40],
      n = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41],
      i = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42],
      s = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43],
      c = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44],
      o = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45],
      u = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46],
      d = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47],
      m = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48],
      g = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49];
    let w = m ^ ((i << 1) | (s >>> 31)),
      k = g ^ ((s << 1) | (i >>> 31));
    const L = e[0] ^ w,
      H = e[1] ^ k,
      D = e[10] ^ w,
      I = e[11] ^ k,
      T = e[20] ^ w,
      $ = e[21] ^ k,
      V = e[30] ^ w,
      j = e[31] ^ k,
      z = e[40] ^ w,
      ee = e[41] ^ k;
    (w = r ^ ((c << 1) | (o >>> 31))), (k = n ^ ((o << 1) | (c >>> 31)));
    const Q = e[2] ^ w,
      Z = e[3] ^ k,
      ue = e[12] ^ w,
      oe = e[13] ^ k,
      pe = e[22] ^ w,
      E = e[23] ^ k,
      a = e[32] ^ w,
      p = e[33] ^ k,
      y = e[42] ^ w,
      b = e[43] ^ k;
    (w = i ^ ((u << 1) | (d >>> 31))), (k = s ^ ((d << 1) | (u >>> 31)));
    const R = e[4] ^ w,
      A = e[5] ^ k,
      B = e[14] ^ w,
      v = e[15] ^ k,
      f = e[24] ^ w,
      x = e[25] ^ k,
      K = e[34] ^ w,
      Y = e[35] ^ k,
      N = e[44] ^ w,
      O = e[45] ^ k;
    (w = c ^ ((m << 1) | (g >>> 31))), (k = o ^ ((g << 1) | (m >>> 31)));
    const W = e[6] ^ w,
      J = e[7] ^ k,
      he = e[16] ^ w,
      C = e[17] ^ k,
      M = e[26] ^ w,
      q = e[27] ^ k,
      G = e[36] ^ w,
      se = e[37] ^ k,
      fe = e[46] ^ w,
      re = e[47] ^ k;
    (w = u ^ ((r << 1) | (n >>> 31))), (k = d ^ ((n << 1) | (r >>> 31)));
    const ve = e[8] ^ w,
      _t = e[9] ^ k,
      Re = e[18] ^ w,
      Se = e[19] ^ k,
      Ye = e[28] ^ w,
      be = e[29] ^ k,
      Ce = e[38] ^ w,
      tt = e[39] ^ k,
      Ee = e[48] ^ w,
      _ = e[49] ^ k,
      l = L,
      h = H,
      S = (I << 4) | (D >>> 28),
      P = (D << 4) | (I >>> 28),
      F = (T << 3) | ($ >>> 29),
      U = ($ << 3) | (T >>> 29),
      ce = (j << 9) | (V >>> 23),
      ae = (V << 9) | (j >>> 23),
      ie = (z << 18) | (ee >>> 14),
      Me = (ee << 18) | (z >>> 14),
      ne = (Q << 1) | (Z >>> 31),
      ke = (Z << 1) | (Q >>> 31),
      Dr = (oe << 12) | (ue >>> 20),
      Ie = (ue << 12) | (oe >>> 20),
      Ae = (pe << 10) | (E >>> 22),
      jr = (E << 10) | (pe >>> 22),
      Te = (p << 13) | (a >>> 19),
      Ne = (a << 13) | (p >>> 19),
      Ur = (y << 2) | (b >>> 30),
      Le = (b << 2) | (y >>> 30),
      Be = (A << 30) | (R >>> 2),
      Hr = (R << 30) | (A >>> 2),
      Pe = (B << 6) | (v >>> 26),
      Oe = (v << 6) | (B >>> 26),
      Wr = (x << 11) | (f >>> 21),
      $e = (f << 11) | (x >>> 21),
      Fe = (K << 15) | (Y >>> 17),
      Vr = (Y << 15) | (K >>> 17),
      De = (O << 29) | (N >>> 3),
      je = (N << 29) | (O >>> 3),
      qr = (W << 28) | (J >>> 4),
      Ue = (J << 28) | (W >>> 4),
      He = (C << 23) | (he >>> 9),
      zr = (he << 23) | (C >>> 9),
      We = (M << 25) | (q >>> 7),
      Ve = (q << 25) | (M >>> 7),
      nr = (G << 21) | (se >>> 11),
      ir = (se << 21) | (G >>> 11),
      sr = (re << 24) | (fe >>> 8),
      or = (fe << 24) | (re >>> 8),
      ar = (ve << 27) | (_t >>> 5),
      cr = (_t << 27) | (ve >>> 5),
      lr = (Re << 20) | (Se >>> 12),
      ur = (Se << 20) | (Re >>> 12),
      hr = (be << 7) | (Ye >>> 25),
      fr = (Ye << 7) | (be >>> 25),
      dr = (Ce << 8) | (tt >>> 24),
      pr = (tt << 8) | (Ce >>> 24),
      gr = (Ee << 14) | (_ >>> 18),
      mr = (_ << 14) | (Ee >>> 18);
    (e[0] = l ^ (~Dr & Wr)),
      (e[1] = h ^ (~Ie & $e)),
      (e[10] = qr ^ (~lr & F)),
      (e[11] = Ue ^ (~ur & U)),
      (e[20] = ne ^ (~Pe & We)),
      (e[21] = ke ^ (~Oe & Ve)),
      (e[30] = ar ^ (~S & Ae)),
      (e[31] = cr ^ (~P & jr)),
      (e[40] = Be ^ (~He & hr)),
      (e[41] = Hr ^ (~zr & fr)),
      (e[2] = Dr ^ (~Wr & nr)),
      (e[3] = Ie ^ (~$e & ir)),
      (e[12] = lr ^ (~F & Te)),
      (e[13] = ur ^ (~U & Ne)),
      (e[22] = Pe ^ (~We & dr)),
      (e[23] = Oe ^ (~Ve & pr)),
      (e[32] = S ^ (~Ae & Fe)),
      (e[33] = P ^ (~jr & Vr)),
      (e[42] = He ^ (~hr & ce)),
      (e[43] = zr ^ (~fr & ae)),
      (e[4] = Wr ^ (~nr & gr)),
      (e[5] = $e ^ (~ir & mr)),
      (e[14] = F ^ (~Te & De)),
      (e[15] = U ^ (~Ne & je)),
      (e[24] = We ^ (~dr & ie)),
      (e[25] = Ve ^ (~pr & Me)),
      (e[34] = Ae ^ (~Fe & sr)),
      (e[35] = jr ^ (~Vr & or)),
      (e[44] = hr ^ (~ce & Ur)),
      (e[45] = fr ^ (~ae & Le)),
      (e[6] = nr ^ (~gr & l)),
      (e[7] = ir ^ (~mr & h)),
      (e[16] = Te ^ (~De & qr)),
      (e[17] = Ne ^ (~je & Ue)),
      (e[26] = dr ^ (~ie & ne)),
      (e[27] = pr ^ (~Me & ke)),
      (e[36] = Fe ^ (~sr & ar)),
      (e[37] = Vr ^ (~or & cr)),
      (e[46] = ce ^ (~Ur & Be)),
      (e[47] = ae ^ (~Le & Hr)),
      (e[8] = gr ^ (~l & Dr)),
      (e[9] = mr ^ (~h & Ie)),
      (e[18] = De ^ (~qr & lr)),
      (e[19] = je ^ (~Ue & ur)),
      (e[28] = ie ^ (~ne & Pe)),
      (e[29] = Me ^ (~ke & Oe)),
      (e[38] = sr ^ (~ar & S)),
      (e[39] = or ^ (~cr & P)),
      (e[48] = Ur ^ (~Be & He)),
      (e[49] = Le ^ (~Hr & zr)),
      (e[0] ^= cc[t * 2]),
      (e[1] ^= cc[t * 2 + 1]);
  }
};
const Bi = uu;
function yn() {
  (this.state = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]),
    (this.blockSize = null),
    (this.count = 0),
    (this.squeezing = !1);
}
yn.prototype.initialize = function (e, t) {
  for (let r = 0; r < 50; ++r) this.state[r] = 0;
  (this.blockSize = e / 8), (this.count = 0), (this.squeezing = !1);
};
yn.prototype.absorb = function (e) {
  for (let t = 0; t < e.length; ++t)
    (this.state[~~(this.count / 4)] ^= e[t] << (8 * (this.count % 4))),
      (this.count += 1),
      this.count === this.blockSize && (Bi.p1600(this.state), (this.count = 0));
};
yn.prototype.absorbLastFewBits = function (e) {
  (this.state[~~(this.count / 4)] ^= e << (8 * (this.count % 4))),
    e & 128 && this.count === this.blockSize - 1 && Bi.p1600(this.state),
    (this.state[~~((this.blockSize - 1) / 4)] ^=
      128 << (8 * ((this.blockSize - 1) % 4))),
    Bi.p1600(this.state),
    (this.count = 0),
    (this.squeezing = !0);
};
yn.prototype.squeeze = function (e) {
  this.squeezing || this.absorbLastFewBits(1);
  const t = Buffer.alloc(e);
  for (let r = 0; r < e; ++r)
    (t[r] = (this.state[~~(this.count / 4)] >>> (8 * (this.count % 4))) & 255),
      (this.count += 1),
      this.count === this.blockSize && (Bi.p1600(this.state), (this.count = 0));
  return t;
};
yn.prototype.copy = function (e) {
  for (let t = 0; t < 50; ++t) e.state[t] = this.state[t];
  (e.blockSize = this.blockSize),
    (e.count = this.count),
    (e.squeezing = this.squeezing);
};
var e0 = yn,
  t0 = Xd(e0),
  hu = {},
  Ji = {},
  Zo = r0;
function r0(e) {
  e = e || {};
  var t = e.max || Number.MAX_SAFE_INTEGER,
    r = typeof e.start < "u" ? e.start : Math.floor(Math.random() * t);
  return function () {
    return (r = r % t), r++;
  };
}
const lc = (e, t) =>
  function () {
    const r = t.promiseModule,
      n = new Array(arguments.length);
    for (let i = 0; i < arguments.length; i++) n[i] = arguments[i];
    return new r((i, s) => {
      t.errorFirst
        ? n.push(function (c, o) {
            if (t.multiArgs) {
              const u = new Array(arguments.length - 1);
              for (let d = 1; d < arguments.length; d++)
                u[d - 1] = arguments[d];
              c ? (u.unshift(c), s(u)) : i(u);
            } else c ? s(c) : i(o);
          })
        : n.push(function (c) {
            if (t.multiArgs) {
              const o = new Array(arguments.length - 1);
              for (let u = 0; u < arguments.length; u++) o[u] = arguments[u];
              i(o);
            } else i(c);
          }),
        e.apply(this, n);
    });
  };
var n0 = (e, t) => {
    t = Object.assign(
      { exclude: [/.+(Sync|Stream)$/], errorFirst: !0, promiseModule: Promise },
      t
    );
    const r = (i) => {
      const s = (c) => (typeof c == "string" ? i === c : c.test(i));
      return t.include ? t.include.some(s) : !t.exclude.some(s);
    };
    let n;
    typeof e == "function"
      ? (n = function () {
          return t.excludeMain
            ? e.apply(this, arguments)
            : lc(e, t).apply(this, arguments);
        })
      : (n = Object.create(Object.getPrototypeOf(e)));
    for (const i in e) {
      const s = e[i];
      n[i] = typeof s == "function" && r(i) ? lc(s, t) : s;
    }
    return n;
  },
  Jn = {},
  Zn = {};
Object.defineProperty(Zn, "__esModule", { value: !0 });
const i0 = Fi;
function uc(e, t, r) {
  try {
    Reflect.apply(e, t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    });
  }
}
function s0(e) {
  const t = e.length,
    r = new Array(t);
  for (let n = 0; n < t; n += 1) r[n] = e[n];
  return r;
}
let o0 = class extends i0.EventEmitter {
  emit(t, ...r) {
    let n = t === "error";
    const i = this._events;
    if (i !== void 0) n = n && i.error === void 0;
    else if (!n) return !1;
    if (n) {
      let c;
      if ((r.length > 0 && ([c] = r), c instanceof Error)) throw c;
      const o = new Error(`Unhandled error.${c ? ` (${c.message})` : ""}`);
      throw ((o.context = c), o);
    }
    const s = i[t];
    if (s === void 0) return !1;
    if (typeof s == "function") uc(s, this, r);
    else {
      const c = s.length,
        o = s0(s);
      for (let u = 0; u < c; u += 1) uc(o[u], this, r);
    }
    return !0;
  }
};
Zn.default = o0;
var a0 =
  (te && te.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(Jn, "__esModule", { value: !0 });
Jn.BaseBlockTracker = void 0;
const c0 = a0(Zn),
  l0 = 1e3,
  u0 = (e, t) => e + t,
  hc = ["sync", "latest"];
class h0 extends c0.default {
  constructor(t) {
    super(),
      (this._blockResetDuration = t.blockResetDuration || 20 * l0),
      (this._usePastBlocks = t.usePastBlocks || !1),
      (this._currentBlock = null),
      (this._isRunning = !1),
      (this._onNewListener = this._onNewListener.bind(this)),
      (this._onRemoveListener = this._onRemoveListener.bind(this)),
      (this._resetCurrentBlock = this._resetCurrentBlock.bind(this)),
      this._setupInternalEvents();
  }
  async destroy() {
    this._cancelBlockResetTimeout(),
      await this._maybeEnd(),
      super.removeAllListeners();
  }
  isRunning() {
    return this._isRunning;
  }
  getCurrentBlock() {
    return this._currentBlock;
  }
  async getLatestBlock() {
    return this._currentBlock
      ? this._currentBlock
      : await new Promise((r) => this.once("latest", r));
  }
  removeAllListeners(t) {
    return (
      t ? super.removeAllListeners(t) : super.removeAllListeners(),
      this._setupInternalEvents(),
      this._onRemoveListener(),
      this
    );
  }
  _setupInternalEvents() {
    this.removeListener("newListener", this._onNewListener),
      this.removeListener("removeListener", this._onRemoveListener),
      this.on("newListener", this._onNewListener),
      this.on("removeListener", this._onRemoveListener);
  }
  _onNewListener(t) {
    hc.includes(t) && this._maybeStart();
  }
  _onRemoveListener() {
    this._getBlockTrackerEventCount() > 0 || this._maybeEnd();
  }
  async _maybeStart() {
    this._isRunning ||
      ((this._isRunning = !0),
      this._cancelBlockResetTimeout(),
      await this._start(),
      this.emit("_started"));
  }
  async _maybeEnd() {
    this._isRunning &&
      ((this._isRunning = !1),
      this._setupBlockResetTimeout(),
      await this._end(),
      this.emit("_ended"));
  }
  _getBlockTrackerEventCount() {
    return hc.map((t) => this.listenerCount(t)).reduce(u0);
  }
  _shouldUseNewBlock(t) {
    const r = this._currentBlock;
    if (!r) return !0;
    const n = fc(t),
      i = fc(r);
    return (this._usePastBlocks && n < i) || n > i;
  }
  _newPotentialLatest(t) {
    this._shouldUseNewBlock(t) && this._setCurrentBlock(t);
  }
  _setCurrentBlock(t) {
    const r = this._currentBlock;
    (this._currentBlock = t),
      this.emit("latest", t),
      this.emit("sync", { oldBlock: r, newBlock: t });
  }
  _setupBlockResetTimeout() {
    this._cancelBlockResetTimeout(),
      (this._blockResetTimeout = setTimeout(
        this._resetCurrentBlock,
        this._blockResetDuration
      )),
      this._blockResetTimeout.unref && this._blockResetTimeout.unref();
  }
  _cancelBlockResetTimeout() {
    this._blockResetTimeout && clearTimeout(this._blockResetTimeout);
  }
  _resetCurrentBlock() {
    this._currentBlock = null;
  }
}
Jn.BaseBlockTracker = h0;
function fc(e) {
  return Number.parseInt(e, 16);
}
var fu = {},
  du = {},
  at = {};
class pu extends TypeError {
  constructor(t, r) {
    let n;
    const { message: i, explanation: s, ...c } = t,
      { path: o } = t,
      u = o.length === 0 ? i : `At path: ${o.join(".")} -- ${i}`;
    super(s ?? u),
      s != null && (this.cause = u),
      Object.assign(this, c),
      (this.name = this.constructor.name),
      (this.failures = () => n ?? (n = [t, ...r()]));
  }
}
function f0(e) {
  return St(e) && typeof e[Symbol.iterator] == "function";
}
function St(e) {
  return typeof e == "object" && e != null;
}
function dc(e) {
  if (Object.prototype.toString.call(e) !== "[object Object]") return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
function et(e) {
  return typeof e == "symbol"
    ? e.toString()
    : typeof e == "string"
    ? JSON.stringify(e)
    : `${e}`;
}
function d0(e) {
  const { done: t, value: r } = e.next();
  return t ? void 0 : r;
}
function p0(e, t, r, n) {
  if (e === !0) return;
  e === !1 ? (e = {}) : typeof e == "string" && (e = { message: e });
  const { path: i, branch: s } = t,
    { type: c } = r,
    {
      refinement: o,
      message: u = `Expected a value of type \`${c}\`${
        o ? ` with refinement \`${o}\`` : ""
      }, but received: \`${et(n)}\``,
    } = e;
  return {
    value: n,
    type: c,
    refinement: o,
    key: i[i.length - 1],
    path: i,
    branch: s,
    ...e,
    message: u,
  };
}
function* Bo(e, t, r, n) {
  f0(e) || (e = [e]);
  for (const i of e) {
    const s = p0(i, t, r, n);
    s && (yield s);
  }
}
function* Ko(e, t, r = {}) {
  const { path: n = [], branch: i = [e], coerce: s = !1, mask: c = !1 } = r,
    o = { path: n, branch: i };
  if (
    s &&
    ((e = t.coercer(e, o)),
    c && t.type !== "type" && St(t.schema) && St(e) && !Array.isArray(e))
  )
    for (const d in e) t.schema[d] === void 0 && delete e[d];
  let u = "valid";
  for (const d of t.validator(e, o))
    (d.explanation = r.message), (u = "not_valid"), yield [d, void 0];
  for (let [d, m, g] of t.entries(e, o)) {
    const w = Ko(m, g, {
      path: d === void 0 ? n : [...n, d],
      branch: d === void 0 ? i : [...i, m],
      coerce: s,
      mask: c,
      message: r.message,
    });
    for (const k of w)
      k[0]
        ? ((u = k[0].refinement != null ? "not_refined" : "not_valid"),
          yield [k[0], void 0])
        : s &&
          ((m = k[1]),
          d === void 0
            ? (e = m)
            : e instanceof Map
            ? e.set(d, m)
            : e instanceof Set
            ? e.add(m)
            : St(e) && (m !== void 0 || d in e) && (e[d] = m));
  }
  if (u !== "not_valid")
    for (const d of t.refiner(e, o))
      (d.explanation = r.message), (u = "not_refined"), yield [d, void 0];
  u === "valid" && (yield [void 0, e]);
}
class Ke {
  constructor(t) {
    const {
      type: r,
      schema: n,
      validator: i,
      refiner: s,
      coercer: c = (u) => u,
      entries: o = function* () {},
    } = t;
    (this.type = r),
      (this.schema = n),
      (this.entries = o),
      (this.coercer = c),
      i
        ? (this.validator = (u, d) => {
            const m = i(u, d);
            return Bo(m, d, this, u);
          })
        : (this.validator = () => []),
      s
        ? (this.refiner = (u, d) => {
            const m = s(u, d);
            return Bo(m, d, this, u);
          })
        : (this.refiner = () => []);
  }
  assert(t, r) {
    return gu(t, this, r);
  }
  create(t, r) {
    return mu(t, this, r);
  }
  is(t) {
    return Qo(t, this);
  }
  mask(t, r) {
    return _u(t, this, r);
  }
  validate(t, r = {}) {
    return vn(t, this, r);
  }
}
function gu(e, t, r) {
  const n = vn(e, t, { message: r });
  if (n[0]) throw n[0];
}
function mu(e, t, r) {
  const n = vn(e, t, { coerce: !0, message: r });
  if (n[0]) throw n[0];
  return n[1];
}
function _u(e, t, r) {
  const n = vn(e, t, { coerce: !0, mask: !0, message: r });
  if (n[0]) throw n[0];
  return n[1];
}
function Qo(e, t) {
  return !vn(e, t)[0];
}
function vn(e, t, r = {}) {
  const n = Ko(e, t, r),
    i = d0(n);
  return i[0]
    ? [
        new pu(i[0], function* () {
          for (const c of n) c[0] && (yield c[0]);
        }),
        void 0,
      ]
    : [void 0, i[1]];
}
function g0(...e) {
  const t = e[0].type === "type",
    r = e.map((i) => i.schema),
    n = Object.assign({}, ...r);
  return t ? Qn(n) : Kn(n);
}
function dt(e, t) {
  return new Ke({ type: e, schema: null, validator: t });
}
function m0(e, t) {
  return new Ke({
    ...e,
    refiner: (r, n) => r === void 0 || e.refiner(r, n),
    validator(r, n) {
      return r === void 0 ? !0 : (t(r, n), e.validator(r, n));
    },
  });
}
function _0(e) {
  return new Ke({
    type: "dynamic",
    schema: null,
    *entries(t, r) {
      yield* e(t, r).entries(t, r);
    },
    validator(t, r) {
      return e(t, r).validator(t, r);
    },
    coercer(t, r) {
      return e(t, r).coercer(t, r);
    },
    refiner(t, r) {
      return e(t, r).refiner(t, r);
    },
  });
}
function y0(e) {
  let t;
  return new Ke({
    type: "lazy",
    schema: null,
    *entries(r, n) {
      t ?? (t = e()), yield* t.entries(r, n);
    },
    validator(r, n) {
      return t ?? (t = e()), t.validator(r, n);
    },
    coercer(r, n) {
      return t ?? (t = e()), t.coercer(r, n);
    },
    refiner(r, n) {
      return t ?? (t = e()), t.refiner(r, n);
    },
  });
}
function v0(e, t) {
  const { schema: r } = e,
    n = { ...r };
  for (const i of t) delete n[i];
  switch (e.type) {
    case "type":
      return Qn(n);
    default:
      return Kn(n);
  }
}
function w0(e) {
  const t = e instanceof Ke,
    r = t ? { ...e.schema } : { ...e };
  for (const n in r) r[n] = yu(r[n]);
  return t && e.type === "type" ? Qn(r) : Kn(r);
}
function b0(e, t) {
  const { schema: r } = e,
    n = {};
  for (const i of t) n[i] = r[i];
  switch (e.type) {
    case "type":
      return Qn(n);
    default:
      return Kn(n);
  }
}
function E0(e, t) {
  return (
    console.warn(
      "superstruct@0.11 - The `struct` helper has been renamed to `define`."
    ),
    dt(e, t)
  );
}
function S0() {
  return dt("any", () => !0);
}
function R0(e) {
  return new Ke({
    type: "array",
    schema: e,
    *entries(t) {
      if (e && Array.isArray(t))
        for (const [r, n] of t.entries()) yield [r, n, e];
    },
    coercer(t) {
      return Array.isArray(t) ? t.slice() : t;
    },
    validator(t) {
      return (
        Array.isArray(t) || `Expected an array value, but received: ${et(t)}`
      );
    },
  });
}
function C0() {
  return dt("bigint", (e) => typeof e == "bigint");
}
function M0() {
  return dt("boolean", (e) => typeof e == "boolean");
}
function x0() {
  return dt(
    "date",
    (e) =>
      (e instanceof Date && !isNaN(e.getTime())) ||
      `Expected a valid \`Date\` object, but received: ${et(e)}`
  );
}
function k0(e) {
  const t = {},
    r = e.map((n) => et(n)).join();
  for (const n of e) t[n] = n;
  return new Ke({
    type: "enums",
    schema: t,
    validator(n) {
      return (
        e.includes(n) || `Expected one of \`${r}\`, but received: ${et(n)}`
      );
    },
  });
}
function I0() {
  return dt(
    "func",
    (e) =>
      typeof e == "function" || `Expected a function, but received: ${et(e)}`
  );
}
function A0(e) {
  return dt(
    "instance",
    (t) =>
      t instanceof e ||
      `Expected a \`${e.name}\` instance, but received: ${et(t)}`
  );
}
function T0() {
  return dt(
    "integer",
    (e) =>
      (typeof e == "number" && !isNaN(e) && Number.isInteger(e)) ||
      `Expected an integer, but received: ${et(e)}`
  );
}
function N0(e) {
  return new Ke({
    type: "intersection",
    schema: null,
    *entries(t, r) {
      for (const n of e) yield* n.entries(t, r);
    },
    *validator(t, r) {
      for (const n of e) yield* n.validator(t, r);
    },
    *refiner(t, r) {
      for (const n of e) yield* n.refiner(t, r);
    },
  });
}
function L0(e) {
  const t = et(e),
    r = typeof e;
  return new Ke({
    type: "literal",
    schema: r === "string" || r === "number" || r === "boolean" ? e : null,
    validator(n) {
      return n === e || `Expected the literal \`${t}\`, but received: ${et(n)}`;
    },
  });
}
function B0(e, t) {
  return new Ke({
    type: "map",
    schema: null,
    *entries(r) {
      if (e && t && r instanceof Map)
        for (const [n, i] of r.entries()) yield [n, n, e], yield [n, i, t];
    },
    coercer(r) {
      return r instanceof Map ? new Map(r) : r;
    },
    validator(r) {
      return (
        r instanceof Map || `Expected a \`Map\` object, but received: ${et(r)}`
      );
    },
  });
}
function Yo() {
  return dt("never", () => !1);
}
function P0(e) {
  return new Ke({
    ...e,
    validator: (t, r) => t === null || e.validator(t, r),
    refiner: (t, r) => t === null || e.refiner(t, r),
  });
}
function O0() {
  return dt(
    "number",
    (e) =>
      (typeof e == "number" && !isNaN(e)) ||
      `Expected a number, but received: ${et(e)}`
  );
}
function Kn(e) {
  const t = e ? Object.keys(e) : [],
    r = Yo();
  return new Ke({
    type: "object",
    schema: e || null,
    *entries(n) {
      if (e && St(n)) {
        const i = new Set(Object.keys(n));
        for (const s of t) i.delete(s), yield [s, n[s], e[s]];
        for (const s of i) yield [s, n[s], r];
      }
    },
    validator(n) {
      return St(n) || `Expected an object, but received: ${et(n)}`;
    },
    coercer(n) {
      return St(n) ? { ...n } : n;
    },
  });
}
function yu(e) {
  return new Ke({
    ...e,
    validator: (t, r) => t === void 0 || e.validator(t, r),
    refiner: (t, r) => t === void 0 || e.refiner(t, r),
  });
}
function $0(e, t) {
  return new Ke({
    type: "record",
    schema: null,
    *entries(r) {
      if (St(r))
        for (const n in r) {
          const i = r[n];
          yield [n, n, e], yield [n, i, t];
        }
    },
    validator(r) {
      return St(r) || `Expected an object, but received: ${et(r)}`;
    },
  });
}
function F0() {
  return dt("regexp", (e) => e instanceof RegExp);
}
function D0(e) {
  return new Ke({
    type: "set",
    schema: null,
    *entries(t) {
      if (e && t instanceof Set) for (const r of t) yield [r, r, e];
    },
    coercer(t) {
      return t instanceof Set ? new Set(t) : t;
    },
    validator(t) {
      return (
        t instanceof Set || `Expected a \`Set\` object, but received: ${et(t)}`
      );
    },
  });
}
function vu() {
  return dt(
    "string",
    (e) => typeof e == "string" || `Expected a string, but received: ${et(e)}`
  );
}
function j0(e) {
  const t = Yo();
  return new Ke({
    type: "tuple",
    schema: null,
    *entries(r) {
      if (Array.isArray(r)) {
        const n = Math.max(e.length, r.length);
        for (let i = 0; i < n; i++) yield [i, r[i], e[i] || t];
      }
    },
    validator(r) {
      return Array.isArray(r) || `Expected an array, but received: ${et(r)}`;
    },
  });
}
function Qn(e) {
  const t = Object.keys(e);
  return new Ke({
    type: "type",
    schema: e,
    *entries(r) {
      if (St(r)) for (const n of t) yield [n, r[n], e[n]];
    },
    validator(r) {
      return St(r) || `Expected an object, but received: ${et(r)}`;
    },
    coercer(r) {
      return St(r) ? { ...r } : r;
    },
  });
}
function U0(e) {
  const t = e.map((r) => r.type).join(" | ");
  return new Ke({
    type: "union",
    schema: null,
    coercer(r) {
      for (const n of e) {
        const [i, s] = n.validate(r, { coerce: !0 });
        if (!i) return s;
      }
      return r;
    },
    validator(r, n) {
      const i = [];
      for (const s of e) {
        const [...c] = Ko(r, s, n),
          [o] = c;
        if (o[0]) for (const [u] of c) u && i.push(u);
        else return [];
      }
      return [
        `Expected the value to satisfy a union of \`${t}\`, but received: ${et(
          r
        )}`,
        ...i,
      ];
    },
  });
}
function wu() {
  return dt("unknown", () => !0);
}
function Xo(e, t, r) {
  return new Ke({
    ...e,
    coercer: (n, i) => (Qo(n, t) ? e.coercer(r(n, i), i) : e.coercer(n, i)),
  });
}
function H0(e, t, r = {}) {
  return Xo(e, wu(), (n) => {
    const i = typeof t == "function" ? t() : t;
    if (n === void 0) return i;
    if (!r.strict && dc(n) && dc(i)) {
      const s = { ...n };
      let c = !1;
      for (const o in i) s[o] === void 0 && ((s[o] = i[o]), (c = !0));
      if (c) return s;
    }
    return n;
  });
}
function W0(e) {
  return Xo(e, vu(), (t) => t.trim());
}
function V0(e) {
  return Or(e, "empty", (t) => {
    const r = bu(t);
    return (
      r === 0 ||
      `Expected an empty ${e.type} but received one with a size of \`${r}\``
    );
  });
}
function bu(e) {
  return e instanceof Map || e instanceof Set ? e.size : e.length;
}
function q0(e, t, r = {}) {
  const { exclusive: n } = r;
  return Or(e, "max", (i) =>
    n
      ? i < t
      : i <= t ||
        `Expected a ${e.type} less than ${
          n ? "" : "or equal to "
        }${t} but received \`${i}\``
  );
}
function z0(e, t, r = {}) {
  const { exclusive: n } = r;
  return Or(e, "min", (i) =>
    n
      ? i > t
      : i >= t ||
        `Expected a ${e.type} greater than ${
          n ? "" : "or equal to "
        }${t} but received \`${i}\``
  );
}
function G0(e) {
  return Or(
    e,
    "nonempty",
    (t) =>
      bu(t) > 0 || `Expected a nonempty ${e.type} but received an empty one`
  );
}
function J0(e, t) {
  return Or(
    e,
    "pattern",
    (r) =>
      t.test(r) ||
      `Expected a ${e.type} matching \`/${t.source}/\` but received "${r}"`
  );
}
function Z0(e, t, r = t) {
  const n = `Expected a ${e.type}`,
    i = t === r ? `of \`${t}\`` : `between \`${t}\` and \`${r}\``;
  return Or(e, "size", (s) => {
    if (typeof s == "number" || s instanceof Date)
      return (t <= s && s <= r) || `${n} ${i} but received \`${s}\``;
    if (s instanceof Map || s instanceof Set) {
      const { size: c } = s;
      return (
        (t <= c && c <= r) ||
        `${n} with a size ${i} but received one with a size of \`${c}\``
      );
    } else {
      const { length: c } = s;
      return (
        (t <= c && c <= r) ||
        `${n} with a length ${i} but received one with a length of \`${c}\``
      );
    }
  });
}
function Or(e, t, r) {
  return new Ke({
    ...e,
    *refiner(n, i) {
      yield* e.refiner(n, i);
      const s = r(n, i),
        c = Bo(s, i, e, n);
      for (const o of c) yield { ...o, refinement: t };
    },
  });
}
const K0 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Struct: Ke,
        StructError: pu,
        any: S0,
        array: R0,
        assert: gu,
        assign: g0,
        bigint: C0,
        boolean: M0,
        coerce: Xo,
        create: mu,
        date: x0,
        defaulted: H0,
        define: dt,
        deprecated: m0,
        dynamic: _0,
        empty: V0,
        enums: k0,
        func: I0,
        instance: A0,
        integer: T0,
        intersection: N0,
        is: Qo,
        lazy: y0,
        literal: L0,
        map: B0,
        mask: _u,
        max: q0,
        min: z0,
        never: Yo,
        nonempty: G0,
        nullable: P0,
        number: O0,
        object: Kn,
        omit: v0,
        optional: yu,
        partial: w0,
        pattern: J0,
        pick: b0,
        record: $0,
        refine: Or,
        regexp: F0,
        set: D0,
        size: Z0,
        string: vu,
        struct: E0,
        trimmed: W0,
        tuple: j0,
        type: Qn,
        union: U0,
        unknown: wu,
        validate: vn,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  $r = jn(K0);
Object.defineProperty(at, "__esModule", { value: !0 });
at.assertExhaustive = at.assertStruct = at.assert = at.AssertionError = void 0;
const Q0 = $r;
function Y0(e) {
  return typeof e == "object" && e !== null && "message" in e;
}
function X0(e) {
  var t, r;
  return (
    typeof ((r =
      (t = e == null ? void 0 : e.prototype) === null || t === void 0
        ? void 0
        : t.constructor) === null || r === void 0
      ? void 0
      : r.name) == "string"
  );
}
function ep(e) {
  const t = Y0(e) ? e.message : String(e);
  return t.endsWith(".") ? t.slice(0, -1) : t;
}
function Eu(e, t) {
  return X0(e) ? new e({ message: t }) : e({ message: t });
}
class ea extends Error {
  constructor(t) {
    super(t.message), (this.code = "ERR_ASSERTION");
  }
}
at.AssertionError = ea;
function tp(e, t = "Assertion failed.", r = ea) {
  if (!e) throw t instanceof Error ? t : Eu(r, t);
}
at.assert = tp;
function rp(e, t, r = "Assertion failed", n = ea) {
  try {
    (0, Q0.assert)(e, t);
  } catch (i) {
    throw Eu(n, `${r}: ${ep(i)}.`);
  }
}
at.assertStruct = rp;
function np(e) {
  throw new Error(
    "Invalid branch reached. Should be detected during compilation."
  );
}
at.assertExhaustive = np;
var Yn = {};
Object.defineProperty(Yn, "__esModule", { value: !0 });
Yn.base64 = void 0;
const ip = $r,
  sp = at,
  op = (e, t = {}) => {
    var r, n;
    const i = (r = t.paddingRequired) !== null && r !== void 0 ? r : !1,
      s = (n = t.characterSet) !== null && n !== void 0 ? n : "base64";
    let c;
    s === "base64"
      ? (c = String.raw`[A-Za-z0-9+\/]`)
      : ((0, sp.assert)(s === "base64url"), (c = String.raw`[-_A-Za-z0-9]`));
    let o;
    return (
      i
        ? (o = new RegExp(`^(?:${c}{4})*(?:${c}{3}=|${c}{2}==)?$`, "u"))
        : (o = new RegExp(
            `^(?:${c}{4})*(?:${c}{2,3}|${c}{3}=|${c}{2}==)?$`,
            "u"
          )),
      (0, ip.pattern)(e, o)
    );
  };
Yn.base64 = op;
var ye = {},
  Xn = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.remove0x =
      e.add0x =
      e.assertIsStrictHexString =
      e.assertIsHexString =
      e.isStrictHexString =
      e.isHexString =
      e.StrictHexStruct =
      e.HexStruct =
        void 0);
  const t = $r,
    r = at;
  (e.HexStruct = (0, t.pattern)((0, t.string)(), /^(?:0x)?[0-9a-f]+$/iu)),
    (e.StrictHexStruct = (0, t.pattern)((0, t.string)(), /^0x[0-9a-f]+$/iu));
  function n(d) {
    return (0, t.is)(d, e.HexStruct);
  }
  e.isHexString = n;
  function i(d) {
    return (0, t.is)(d, e.StrictHexStruct);
  }
  e.isStrictHexString = i;
  function s(d) {
    (0, r.assert)(n(d), "Value must be a hexadecimal string.");
  }
  e.assertIsHexString = s;
  function c(d) {
    (0, r.assert)(
      i(d),
      'Value must be a hexadecimal string, starting with "0x".'
    );
  }
  e.assertIsStrictHexString = c;
  function o(d) {
    return d.startsWith("0x")
      ? d
      : d.startsWith("0X")
      ? `0x${d.substring(2)}`
      : `0x${d}`;
  }
  e.add0x = o;
  function u(d) {
    return d.startsWith("0x") || d.startsWith("0X") ? d.substring(2) : d;
  }
  e.remove0x = u;
})(Xn);
Object.defineProperty(ye, "__esModule", { value: !0 });
ye.createDataView =
  ye.concatBytes =
  ye.valueToBytes =
  ye.stringToBytes =
  ye.numberToBytes =
  ye.signedBigIntToBytes =
  ye.bigIntToBytes =
  ye.hexToBytes =
  ye.bytesToString =
  ye.bytesToNumber =
  ye.bytesToSignedBigInt =
  ye.bytesToBigInt =
  ye.bytesToHex =
  ye.assertIsBytes =
  ye.isBytes =
    void 0;
const mt = at,
  Po = Xn,
  pc = 48,
  gc = 58,
  mc = 87;
function ap() {
  const e = [];
  return () => {
    if (e.length === 0)
      for (let t = 0; t < 256; t++) e.push(t.toString(16).padStart(2, "0"));
    return e;
  };
}
const cp = ap();
function ta(e) {
  return e instanceof Uint8Array;
}
ye.isBytes = ta;
function wn(e) {
  (0, mt.assert)(ta(e), "Value must be a Uint8Array.");
}
ye.assertIsBytes = wn;
function Su(e) {
  if ((wn(e), e.length === 0)) return "0x";
  const t = cp(),
    r = new Array(e.length);
  for (let n = 0; n < e.length; n++) r[n] = t[e[n]];
  return (0, Po.add0x)(r.join(""));
}
ye.bytesToHex = Su;
function Ru(e) {
  wn(e);
  const t = Su(e);
  return BigInt(t);
}
ye.bytesToBigInt = Ru;
function lp(e) {
  wn(e);
  let t = BigInt(0);
  for (const r of e) t = (t << BigInt(8)) + BigInt(r);
  return BigInt.asIntN(e.length * 8, t);
}
ye.bytesToSignedBigInt = lp;
function up(e) {
  wn(e);
  const t = Ru(e);
  return (
    (0, mt.assert)(
      t <= BigInt(Number.MAX_SAFE_INTEGER),
      "Number is not a safe integer. Use `bytesToBigInt` instead."
    ),
    Number(t)
  );
}
ye.bytesToNumber = up;
function hp(e) {
  return wn(e), new TextDecoder().decode(e);
}
ye.bytesToString = hp;
function Zi(e) {
  var t;
  if (
    ((t = e == null ? void 0 : e.toLowerCase) === null || t === void 0
      ? void 0
      : t.call(e)) === "0x"
  )
    return new Uint8Array();
  (0, Po.assertIsHexString)(e);
  const r = (0, Po.remove0x)(e).toLowerCase(),
    n = r.length % 2 === 0 ? r : `0${r}`,
    i = new Uint8Array(n.length / 2);
  for (let s = 0; s < i.length; s++) {
    const c = n.charCodeAt(s * 2),
      o = n.charCodeAt(s * 2 + 1),
      u = c - (c < gc ? pc : mc),
      d = o - (o < gc ? pc : mc);
    i[s] = u * 16 + d;
  }
  return i;
}
ye.hexToBytes = Zi;
function Cu(e) {
  (0, mt.assert)(typeof e == "bigint", "Value must be a bigint."),
    (0, mt.assert)(e >= BigInt(0), "Value must be a non-negative bigint.");
  const t = e.toString(16);
  return Zi(t);
}
ye.bigIntToBytes = Cu;
function fp(e, t) {
  (0, mt.assert)(t > 0);
  const r = e >> BigInt(31);
  return !(((~e & r) + (e & ~r)) >> BigInt(t * 8 + -1));
}
function dp(e, t) {
  (0, mt.assert)(typeof e == "bigint", "Value must be a bigint."),
    (0, mt.assert)(typeof t == "number", "Byte length must be a number."),
    (0, mt.assert)(t > 0, "Byte length must be greater than 0."),
    (0, mt.assert)(
      fp(e, t),
      "Byte length is too small to represent the given value."
    );
  let r = e;
  const n = new Uint8Array(t);
  for (let i = 0; i < n.length; i++)
    (n[i] = Number(BigInt.asUintN(8, r))), (r >>= BigInt(8));
  return n.reverse();
}
ye.signedBigIntToBytes = dp;
function Mu(e) {
  (0, mt.assert)(typeof e == "number", "Value must be a number."),
    (0, mt.assert)(e >= 0, "Value must be a non-negative number."),
    (0, mt.assert)(
      Number.isSafeInteger(e),
      "Value is not a safe integer. Use `bigIntToBytes` instead."
    );
  const t = e.toString(16);
  return Zi(t);
}
ye.numberToBytes = Mu;
function xu(e) {
  return (
    (0, mt.assert)(typeof e == "string", "Value must be a string."),
    new TextEncoder().encode(e)
  );
}
ye.stringToBytes = xu;
function ku(e) {
  if (typeof e == "bigint") return Cu(e);
  if (typeof e == "number") return Mu(e);
  if (typeof e == "string") return e.startsWith("0x") ? Zi(e) : xu(e);
  if (ta(e)) return e;
  throw new TypeError(`Unsupported value type: "${typeof e}".`);
}
ye.valueToBytes = ku;
function pp(e) {
  const t = new Array(e.length);
  let r = 0;
  for (let i = 0; i < e.length; i++) {
    const s = ku(e[i]);
    (t[i] = s), (r += s.length);
  }
  const n = new Uint8Array(r);
  for (let i = 0, s = 0; i < t.length; i++) n.set(t[i], s), (s += t[i].length);
  return n;
}
ye.concatBytes = pp;
function gp(e) {
  if (typeof Buffer < "u" && e instanceof Buffer) {
    const t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
    return new DataView(t);
  }
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
ye.createDataView = gp;
var Ki = {};
Object.defineProperty(Ki, "__esModule", { value: !0 });
Ki.ChecksumStruct = void 0;
const _c = $r,
  mp = Yn;
Ki.ChecksumStruct = (0, _c.size)(
  (0, mp.base64)((0, _c.string)(), { paddingRequired: !0 }),
  44,
  44
);
var Dt = {};
Object.defineProperty(Dt, "__esModule", { value: !0 });
Dt.createHex = Dt.createBytes = Dt.createBigInt = Dt.createNumber = void 0;
const Ze = $r,
  _p = at,
  Iu = ye,
  Qi = Xn,
  Au = (0, Ze.union)([
    (0, Ze.number)(),
    (0, Ze.bigint)(),
    (0, Ze.string)(),
    Qi.StrictHexStruct,
  ]),
  yp = (0, Ze.coerce)((0, Ze.number)(), Au, Number),
  vp = (0, Ze.coerce)((0, Ze.bigint)(), Au, BigInt);
(0, Ze.union)([Qi.StrictHexStruct, (0, Ze.instance)(Uint8Array)]);
const wp = (0, Ze.coerce)(
    (0, Ze.instance)(Uint8Array),
    (0, Ze.union)([Qi.StrictHexStruct]),
    Iu.hexToBytes
  ),
  bp = (0, Ze.coerce)(
    Qi.StrictHexStruct,
    (0, Ze.instance)(Uint8Array),
    Iu.bytesToHex
  );
function Ep(e) {
  try {
    const t = (0, Ze.create)(e, yp);
    return (
      (0, _p.assert)(
        Number.isFinite(t),
        `Expected a number-like value, got "${e}".`
      ),
      t
    );
  } catch (t) {
    throw t instanceof Ze.StructError
      ? new Error(`Expected a number-like value, got "${e}".`)
      : t;
  }
}
Dt.createNumber = Ep;
function Sp(e) {
  try {
    return (0, Ze.create)(e, vp);
  } catch (t) {
    throw t instanceof Ze.StructError
      ? new Error(`Expected a number-like value, got "${String(t.value)}".`)
      : t;
  }
}
Dt.createBigInt = Sp;
function Rp(e) {
  if (typeof e == "string" && e.toLowerCase() === "0x") return new Uint8Array();
  try {
    return (0, Ze.create)(e, wp);
  } catch (t) {
    throw t instanceof Ze.StructError
      ? new Error(`Expected a bytes-like value, got "${String(t.value)}".`)
      : t;
  }
}
Dt.createBytes = Rp;
function Cp(e) {
  if (
    (e instanceof Uint8Array && e.length === 0) ||
    (typeof e == "string" && e.toLowerCase() === "0x")
  )
    return "0x";
  try {
    return (0, Ze.create)(e, bp);
  } catch (t) {
    throw t instanceof Ze.StructError
      ? new Error(`Expected a bytes-like value, got "${String(t.value)}".`)
      : t;
  }
}
Dt.createHex = Cp;
var hn = {},
  Tu =
    (te && te.__classPrivateFieldSet) ||
    function (e, t, r, n, i) {
      if (n === "m") throw new TypeError("Private method is not writable");
      if (n === "a" && !i)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof t == "function" ? e !== t || !i : !t.has(e))
        throw new TypeError(
          "Cannot write private member to an object whose class did not declare it"
        );
      return n === "a" ? i.call(e, r) : i ? (i.value = r) : t.set(e, r), r;
    },
  ut =
    (te && te.__classPrivateFieldGet) ||
    function (e, t, r, n) {
      if (r === "a" && !n)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof t == "function" ? e !== t || !n : !t.has(e))
        throw new TypeError(
          "Cannot read private member from an object whose class did not declare it"
        );
      return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
    },
  Mt,
  Nt;
Object.defineProperty(hn, "__esModule", { value: !0 });
hn.FrozenSet = hn.FrozenMap = void 0;
class ra {
  constructor(t) {
    Mt.set(this, void 0), Tu(this, Mt, new Map(t), "f"), Object.freeze(this);
  }
  get size() {
    return ut(this, Mt, "f").size;
  }
  [((Mt = new WeakMap()), Symbol.iterator)]() {
    return ut(this, Mt, "f")[Symbol.iterator]();
  }
  entries() {
    return ut(this, Mt, "f").entries();
  }
  forEach(t, r) {
    return ut(this, Mt, "f").forEach((n, i, s) => t.call(r, n, i, this));
  }
  get(t) {
    return ut(this, Mt, "f").get(t);
  }
  has(t) {
    return ut(this, Mt, "f").has(t);
  }
  keys() {
    return ut(this, Mt, "f").keys();
  }
  values() {
    return ut(this, Mt, "f").values();
  }
  toString() {
    return `FrozenMap(${this.size}) {${
      this.size > 0
        ? ` ${[...this.entries()]
            .map(([t, r]) => `${String(t)} => ${String(r)}`)
            .join(", ")} `
        : ""
    }}`;
  }
}
hn.FrozenMap = ra;
class na {
  constructor(t) {
    Nt.set(this, void 0), Tu(this, Nt, new Set(t), "f"), Object.freeze(this);
  }
  get size() {
    return ut(this, Nt, "f").size;
  }
  [((Nt = new WeakMap()), Symbol.iterator)]() {
    return ut(this, Nt, "f")[Symbol.iterator]();
  }
  entries() {
    return ut(this, Nt, "f").entries();
  }
  forEach(t, r) {
    return ut(this, Nt, "f").forEach((n, i, s) => t.call(r, n, i, this));
  }
  has(t) {
    return ut(this, Nt, "f").has(t);
  }
  keys() {
    return ut(this, Nt, "f").keys();
  }
  values() {
    return ut(this, Nt, "f").values();
  }
  toString() {
    return `FrozenSet(${this.size}) {${
      this.size > 0
        ? ` ${[...this.values()].map((t) => String(t)).join(", ")} `
        : ""
    }}`;
  }
}
hn.FrozenSet = na;
Object.freeze(ra);
Object.freeze(ra.prototype);
Object.freeze(na);
Object.freeze(na.prototype);
var Nu = {};
Object.defineProperty(Nu, "__esModule", { value: !0 });
var Lu = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.getJsonRpcIdValidator =
      e.assertIsJsonRpcError =
      e.isJsonRpcError =
      e.assertIsJsonRpcFailure =
      e.isJsonRpcFailure =
      e.assertIsJsonRpcSuccess =
      e.isJsonRpcSuccess =
      e.assertIsJsonRpcResponse =
      e.isJsonRpcResponse =
      e.assertIsPendingJsonRpcResponse =
      e.isPendingJsonRpcResponse =
      e.JsonRpcResponseStruct =
      e.JsonRpcFailureStruct =
      e.JsonRpcSuccessStruct =
      e.PendingJsonRpcResponseStruct =
      e.assertIsJsonRpcRequest =
      e.isJsonRpcRequest =
      e.assertIsJsonRpcNotification =
      e.isJsonRpcNotification =
      e.JsonRpcNotificationStruct =
      e.JsonRpcRequestStruct =
      e.JsonRpcParamsStruct =
      e.JsonRpcErrorStruct =
      e.JsonRpcIdStruct =
      e.JsonRpcVersionStruct =
      e.jsonrpc2 =
      e.getJsonSize =
      e.isValidJson =
      e.JsonStruct =
      e.UnsafeJsonStruct =
        void 0);
  const t = $r,
    r = at,
    n = () =>
      (0, t.define)(
        "finite number",
        (j) => (0, t.is)(j, (0, t.number)()) && Number.isFinite(j)
      );
  (e.UnsafeJsonStruct = (0, t.union)([
    (0, t.literal)(null),
    (0, t.boolean)(),
    n(),
    (0, t.string)(),
    (0, t.array)((0, t.lazy)(() => e.UnsafeJsonStruct)),
    (0, t.record)(
      (0, t.string)(),
      (0, t.lazy)(() => e.UnsafeJsonStruct)
    ),
  ])),
    (e.JsonStruct = (0, t.define)("Json", (j, z) => {
      function ee(Q, Z) {
        const oe = [...Z.validator(Q, z)];
        return oe.length > 0 ? oe : !0;
      }
      try {
        const Q = ee(j, e.UnsafeJsonStruct);
        return Q !== !0
          ? Q
          : ee(JSON.parse(JSON.stringify(j)), e.UnsafeJsonStruct);
      } catch (Q) {
        return Q instanceof RangeError ? "Circular reference detected" : !1;
      }
    }));
  function i(j) {
    return (0, t.is)(j, e.JsonStruct);
  }
  e.isValidJson = i;
  function s(j) {
    (0, r.assertStruct)(j, e.JsonStruct, "Invalid JSON value");
    const z = JSON.stringify(j);
    return new TextEncoder().encode(z).byteLength;
  }
  (e.getJsonSize = s),
    (e.jsonrpc2 = "2.0"),
    (e.JsonRpcVersionStruct = (0, t.literal)(e.jsonrpc2)),
    (e.JsonRpcIdStruct = (0, t.nullable)(
      (0, t.union)([(0, t.number)(), (0, t.string)()])
    )),
    (e.JsonRpcErrorStruct = (0, t.object)({
      code: (0, t.integer)(),
      message: (0, t.string)(),
      data: (0, t.optional)(e.JsonStruct),
      stack: (0, t.optional)((0, t.string)()),
    })),
    (e.JsonRpcParamsStruct = (0, t.optional)(
      (0, t.union)([
        (0, t.record)((0, t.string)(), e.JsonStruct),
        (0, t.array)(e.JsonStruct),
      ])
    )),
    (e.JsonRpcRequestStruct = (0, t.object)({
      id: e.JsonRpcIdStruct,
      jsonrpc: e.JsonRpcVersionStruct,
      method: (0, t.string)(),
      params: e.JsonRpcParamsStruct,
    })),
    (e.JsonRpcNotificationStruct = (0, t.omit)(e.JsonRpcRequestStruct, ["id"]));
  function c(j) {
    return (0, t.is)(j, e.JsonRpcNotificationStruct);
  }
  e.isJsonRpcNotification = c;
  function o(j, z) {
    (0, r.assertStruct)(
      j,
      e.JsonRpcNotificationStruct,
      "Invalid JSON-RPC notification",
      z
    );
  }
  e.assertIsJsonRpcNotification = o;
  function u(j) {
    return (0, t.is)(j, e.JsonRpcRequestStruct);
  }
  e.isJsonRpcRequest = u;
  function d(j, z) {
    (0, r.assertStruct)(
      j,
      e.JsonRpcRequestStruct,
      "Invalid JSON-RPC request",
      z
    );
  }
  (e.assertIsJsonRpcRequest = d),
    (e.PendingJsonRpcResponseStruct = (0, t.object)({
      id: e.JsonRpcIdStruct,
      jsonrpc: e.JsonRpcVersionStruct,
      result: (0, t.optional)((0, t.unknown)()),
      error: (0, t.optional)(e.JsonRpcErrorStruct),
    })),
    (e.JsonRpcSuccessStruct = (0, t.object)({
      id: e.JsonRpcIdStruct,
      jsonrpc: e.JsonRpcVersionStruct,
      result: e.JsonStruct,
    })),
    (e.JsonRpcFailureStruct = (0, t.object)({
      id: e.JsonRpcIdStruct,
      jsonrpc: e.JsonRpcVersionStruct,
      error: e.JsonRpcErrorStruct,
    })),
    (e.JsonRpcResponseStruct = (0, t.union)([
      e.JsonRpcSuccessStruct,
      e.JsonRpcFailureStruct,
    ]));
  function m(j) {
    return (0, t.is)(j, e.PendingJsonRpcResponseStruct);
  }
  e.isPendingJsonRpcResponse = m;
  function g(j, z) {
    (0, r.assertStruct)(
      j,
      e.PendingJsonRpcResponseStruct,
      "Invalid pending JSON-RPC response",
      z
    );
  }
  e.assertIsPendingJsonRpcResponse = g;
  function w(j) {
    return (0, t.is)(j, e.JsonRpcResponseStruct);
  }
  e.isJsonRpcResponse = w;
  function k(j, z) {
    (0, r.assertStruct)(
      j,
      e.JsonRpcResponseStruct,
      "Invalid JSON-RPC response",
      z
    );
  }
  e.assertIsJsonRpcResponse = k;
  function L(j) {
    return (0, t.is)(j, e.JsonRpcSuccessStruct);
  }
  e.isJsonRpcSuccess = L;
  function H(j, z) {
    (0, r.assertStruct)(
      j,
      e.JsonRpcSuccessStruct,
      "Invalid JSON-RPC success response",
      z
    );
  }
  e.assertIsJsonRpcSuccess = H;
  function D(j) {
    return (0, t.is)(j, e.JsonRpcFailureStruct);
  }
  e.isJsonRpcFailure = D;
  function I(j, z) {
    (0, r.assertStruct)(
      j,
      e.JsonRpcFailureStruct,
      "Invalid JSON-RPC failure response",
      z
    );
  }
  e.assertIsJsonRpcFailure = I;
  function T(j) {
    return (0, t.is)(j, e.JsonRpcErrorStruct);
  }
  e.isJsonRpcError = T;
  function $(j, z) {
    (0, r.assertStruct)(j, e.JsonRpcErrorStruct, "Invalid JSON-RPC error", z);
  }
  e.assertIsJsonRpcError = $;
  function V(j) {
    const {
      permitEmptyString: z,
      permitFractions: ee,
      permitNull: Q,
    } = Object.assign(
      { permitEmptyString: !0, permitFractions: !1, permitNull: !0 },
      j
    );
    return (ue) =>
      !!(
        (typeof ue == "number" && (ee || Number.isInteger(ue))) ||
        (typeof ue == "string" && (z || ue.length > 0)) ||
        (Q && ue === null)
      );
  }
  e.getJsonRpcIdValidator = V;
})(Lu);
var Bu = {};
Object.defineProperty(Bu, "__esModule", { value: !0 });
var fn = {},
  Oo = { exports: {} },
  Xs,
  yc;
function Mp() {
  if (yc) return Xs;
  yc = 1;
  var e = 1e3,
    t = e * 60,
    r = t * 60,
    n = r * 24,
    i = n * 7,
    s = n * 365.25;
  Xs = function (m, g) {
    g = g || {};
    var w = typeof m;
    if (w === "string" && m.length > 0) return c(m);
    if (w === "number" && isFinite(m)) return g.long ? u(m) : o(m);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" +
        JSON.stringify(m)
    );
  };
  function c(m) {
    if (((m = String(m)), !(m.length > 100))) {
      var g =
        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          m
        );
      if (g) {
        var w = parseFloat(g[1]),
          k = (g[2] || "ms").toLowerCase();
        switch (k) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return w * s;
          case "weeks":
          case "week":
          case "w":
            return w * i;
          case "days":
          case "day":
          case "d":
            return w * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return w * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return w * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return w * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return w;
          default:
            return;
        }
      }
    }
  }
  function o(m) {
    var g = Math.abs(m);
    return g >= n
      ? Math.round(m / n) + "d"
      : g >= r
      ? Math.round(m / r) + "h"
      : g >= t
      ? Math.round(m / t) + "m"
      : g >= e
      ? Math.round(m / e) + "s"
      : m + "ms";
  }
  function u(m) {
    var g = Math.abs(m);
    return g >= n
      ? d(m, g, n, "day")
      : g >= r
      ? d(m, g, r, "hour")
      : g >= t
      ? d(m, g, t, "minute")
      : g >= e
      ? d(m, g, e, "second")
      : m + " ms";
  }
  function d(m, g, w, k) {
    var L = g >= w * 1.5;
    return Math.round(m / w) + " " + k + (L ? "s" : "");
  }
  return Xs;
}
function xp(e) {
  (r.debug = r),
    (r.default = r),
    (r.coerce = u),
    (r.disable = s),
    (r.enable = i),
    (r.enabled = c),
    (r.humanize = Mp()),
    (r.destroy = d),
    Object.keys(e).forEach((m) => {
      r[m] = e[m];
    }),
    (r.names = []),
    (r.skips = []),
    (r.formatters = {});
  function t(m) {
    let g = 0;
    for (let w = 0; w < m.length; w++)
      (g = (g << 5) - g + m.charCodeAt(w)), (g |= 0);
    return r.colors[Math.abs(g) % r.colors.length];
  }
  r.selectColor = t;
  function r(m) {
    let g,
      w = null,
      k,
      L;
    function H(...D) {
      if (!H.enabled) return;
      const I = H,
        T = Number(new Date()),
        $ = T - (g || T);
      (I.diff = $),
        (I.prev = g),
        (I.curr = T),
        (g = T),
        (D[0] = r.coerce(D[0])),
        typeof D[0] != "string" && D.unshift("%O");
      let V = 0;
      (D[0] = D[0].replace(/%([a-zA-Z%])/g, (z, ee) => {
        if (z === "%%") return "%";
        V++;
        const Q = r.formatters[ee];
        if (typeof Q == "function") {
          const Z = D[V];
          (z = Q.call(I, Z)), D.splice(V, 1), V--;
        }
        return z;
      })),
        r.formatArgs.call(I, D),
        (I.log || r.log).apply(I, D);
    }
    return (
      (H.namespace = m),
      (H.useColors = r.useColors()),
      (H.color = r.selectColor(m)),
      (H.extend = n),
      (H.destroy = r.destroy),
      Object.defineProperty(H, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () =>
          w !== null
            ? w
            : (k !== r.namespaces && ((k = r.namespaces), (L = r.enabled(m))),
              L),
        set: (D) => {
          w = D;
        },
      }),
      typeof r.init == "function" && r.init(H),
      H
    );
  }
  function n(m, g) {
    const w = r(this.namespace + (typeof g > "u" ? ":" : g) + m);
    return (w.log = this.log), w;
  }
  function i(m) {
    r.save(m), (r.namespaces = m), (r.names = []), (r.skips = []);
    let g;
    const w = (typeof m == "string" ? m : "").split(/[\s,]+/),
      k = w.length;
    for (g = 0; g < k; g++)
      w[g] &&
        ((m = w[g].replace(/\*/g, ".*?")),
        m[0] === "-"
          ? r.skips.push(new RegExp("^" + m.slice(1) + "$"))
          : r.names.push(new RegExp("^" + m + "$")));
  }
  function s() {
    const m = [...r.names.map(o), ...r.skips.map(o).map((g) => "-" + g)].join(
      ","
    );
    return r.enable(""), m;
  }
  function c(m) {
    if (m[m.length - 1] === "*") return !0;
    let g, w;
    for (g = 0, w = r.skips.length; g < w; g++)
      if (r.skips[g].test(m)) return !1;
    for (g = 0, w = r.names.length; g < w; g++)
      if (r.names[g].test(m)) return !0;
    return !1;
  }
  function o(m) {
    return m
      .toString()
      .substring(2, m.toString().length - 2)
      .replace(/\.\*\?$/, "*");
  }
  function u(m) {
    return m instanceof Error ? m.stack || m.message : m;
  }
  function d() {
    console.warn(
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    );
  }
  return r.enable(r.load()), r;
}
var kp = xp;
(function (e, t) {
  var r = {};
  (t.formatArgs = i),
    (t.save = s),
    (t.load = c),
    (t.useColors = n),
    (t.storage = o()),
    (t.destroy = (() => {
      let d = !1;
      return () => {
        d ||
          ((d = !0),
          console.warn(
            "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
          ));
      };
    })()),
    (t.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33",
    ]);
  function n() {
    return typeof window < "u" &&
      window.process &&
      (window.process.type === "renderer" || window.process.__nwjs)
      ? !0
      : typeof navigator < "u" &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
      ? !1
      : (typeof document < "u" &&
          document.documentElement &&
          document.documentElement.style &&
          document.documentElement.style.WebkitAppearance) ||
        (typeof window < "u" &&
          window.console &&
          (window.console.firebug ||
            (window.console.exception && window.console.table))) ||
        (typeof navigator < "u" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
          parseInt(RegExp.$1, 10) >= 31) ||
        (typeof navigator < "u" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
  }
  function i(d) {
    if (
      ((d[0] =
        (this.useColors ? "%c" : "") +
        this.namespace +
        (this.useColors ? " %c" : " ") +
        d[0] +
        (this.useColors ? "%c " : " ") +
        "+" +
        e.exports.humanize(this.diff)),
      !this.useColors)
    )
      return;
    const m = "color: " + this.color;
    d.splice(1, 0, m, "color: inherit");
    let g = 0,
      w = 0;
    d[0].replace(/%[a-zA-Z%]/g, (k) => {
      k !== "%%" && (g++, k === "%c" && (w = g));
    }),
      d.splice(w, 0, m);
  }
  t.log = console.debug || console.log || (() => {});
  function s(d) {
    try {
      d ? t.storage.setItem("debug", d) : t.storage.removeItem("debug");
    } catch {}
  }
  function c() {
    let d;
    try {
      d = t.storage.getItem("debug");
    } catch {}
    return !d && typeof process < "u" && "env" in process && (d = r.DEBUG), d;
  }
  function o() {
    try {
      return localStorage;
    } catch {}
  }
  e.exports = kp(t);
  const { formatters: u } = e.exports;
  u.j = function (d) {
    try {
      return JSON.stringify(d);
    } catch (m) {
      return "[UnexpectedJSONParseError]: " + m.message;
    }
  };
})(Oo, Oo.exports);
var Ip = Oo.exports,
  Ap =
    (te && te.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(fn, "__esModule", { value: !0 });
fn.createModuleLogger = fn.createProjectLogger = void 0;
const Tp = Ap(Ip),
  Np = (0, Tp.default)("metamask");
function Lp(e) {
  return Np.extend(e);
}
fn.createProjectLogger = Lp;
function Bp(e, t) {
  return e.extend(t);
}
fn.createModuleLogger = Bp;
var Pu = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.calculateNumberSize =
      e.calculateStringSize =
      e.isASCII =
      e.isPlainObject =
      e.ESCAPE_CHARACTERS_REGEXP =
      e.JsonSize =
      e.hasProperty =
      e.isObject =
      e.isNullOrUndefined =
      e.isNonEmptyArray =
        void 0);
  function t(d) {
    return Array.isArray(d) && d.length > 0;
  }
  e.isNonEmptyArray = t;
  function r(d) {
    return d == null;
  }
  e.isNullOrUndefined = r;
  function n(d) {
    return !!d && typeof d == "object" && !Array.isArray(d);
  }
  e.isObject = n;
  const i = (d, m) => Object.hasOwnProperty.call(d, m);
  (e.hasProperty = i),
    (function (d) {
      (d[(d.Null = 4)] = "Null"),
        (d[(d.Comma = 1)] = "Comma"),
        (d[(d.Wrapper = 1)] = "Wrapper"),
        (d[(d.True = 4)] = "True"),
        (d[(d.False = 5)] = "False"),
        (d[(d.Quote = 1)] = "Quote"),
        (d[(d.Colon = 1)] = "Colon"),
        (d[(d.Date = 24)] = "Date");
    })(e.JsonSize || (e.JsonSize = {})),
    (e.ESCAPE_CHARACTERS_REGEXP = /"|\\|\n|\r|\t/gu);
  function s(d) {
    if (typeof d != "object" || d === null) return !1;
    try {
      let m = d;
      for (; Object.getPrototypeOf(m) !== null; ) m = Object.getPrototypeOf(m);
      return Object.getPrototypeOf(d) === m;
    } catch {
      return !1;
    }
  }
  e.isPlainObject = s;
  function c(d) {
    return d.charCodeAt(0) <= 127;
  }
  e.isASCII = c;
  function o(d) {
    var m;
    return (
      d.split("").reduce((w, k) => (c(k) ? w + 1 : w + 2), 0) +
      ((m = d.match(e.ESCAPE_CHARACTERS_REGEXP)) !== null && m !== void 0
        ? m
        : []
      ).length
    );
  }
  e.calculateStringSize = o;
  function u(d) {
    return d.toString().length;
  }
  e.calculateNumberSize = u;
})(Pu);
var jt = {};
Object.defineProperty(jt, "__esModule", { value: !0 });
jt.hexToBigInt = jt.hexToNumber = jt.bigIntToHex = jt.numberToHex = void 0;
const nn = at,
  $n = Xn,
  Pp = (e) => (
    (0, nn.assert)(typeof e == "number", "Value must be a number."),
    (0, nn.assert)(e >= 0, "Value must be a non-negative number."),
    (0, nn.assert)(
      Number.isSafeInteger(e),
      "Value is not a safe integer. Use `bigIntToHex` instead."
    ),
    (0, $n.add0x)(e.toString(16))
  );
jt.numberToHex = Pp;
const Op = (e) => (
  (0, nn.assert)(typeof e == "bigint", "Value must be a bigint."),
  (0, nn.assert)(e >= 0, "Value must be a non-negative bigint."),
  (0, $n.add0x)(e.toString(16))
);
jt.bigIntToHex = Op;
const $p = (e) => {
  (0, $n.assertIsHexString)(e);
  const t = parseInt(e, 16);
  return (
    (0, nn.assert)(
      Number.isSafeInteger(t),
      "Value is not a safe integer. Use `hexToBigInt` instead."
    ),
    t
  );
};
jt.hexToNumber = $p;
const Fp = (e) => ((0, $n.assertIsHexString)(e), BigInt((0, $n.add0x)(e)));
jt.hexToBigInt = Fp;
var Ou = {};
Object.defineProperty(Ou, "__esModule", { value: !0 });
var $u = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.timeSince = e.inMilliseconds = e.Duration = void 0),
    (function (s) {
      (s[(s.Millisecond = 1)] = "Millisecond"),
        (s[(s.Second = 1e3)] = "Second"),
        (s[(s.Minute = 6e4)] = "Minute"),
        (s[(s.Hour = 36e5)] = "Hour"),
        (s[(s.Day = 864e5)] = "Day"),
        (s[(s.Week = 6048e5)] = "Week"),
        (s[(s.Year = 31536e6)] = "Year");
    })(e.Duration || (e.Duration = {}));
  const t = (s) => Number.isInteger(s) && s >= 0,
    r = (s, c) => {
      if (!t(s))
        throw new Error(
          `"${c}" must be a non-negative integer. Received: "${s}".`
        );
    };
  function n(s, c) {
    return r(s, "count"), s * c;
  }
  e.inMilliseconds = n;
  function i(s) {
    return r(s, "timestamp"), Date.now() - s;
  }
  e.timeSince = i;
})($u);
var Fu = {};
Object.defineProperty(Fu, "__esModule", { value: !0 });
var Du = {},
  $o = { exports: {} };
const Dp = "2.0.0",
  ju = 256,
  jp = Number.MAX_SAFE_INTEGER || 9007199254740991,
  Up = 16,
  Hp = ju - 6,
  Wp = [
    "major",
    "premajor",
    "minor",
    "preminor",
    "patch",
    "prepatch",
    "prerelease",
  ];
var Yi = {
    MAX_LENGTH: ju,
    MAX_SAFE_COMPONENT_LENGTH: Up,
    MAX_SAFE_BUILD_LENGTH: Hp,
    MAX_SAFE_INTEGER: jp,
    RELEASE_TYPES: Wp,
    SEMVER_SPEC_VERSION: Dp,
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2,
  },
  eo = {};
const Vp =
  typeof process == "object" &&
  eo &&
  eo.NODE_DEBUG &&
  /\bsemver\b/i.test(eo.NODE_DEBUG)
    ? (...e) => console.error("SEMVER", ...e)
    : () => {};
var Xi = Vp;
(function (e, t) {
  const {
      MAX_SAFE_COMPONENT_LENGTH: r,
      MAX_SAFE_BUILD_LENGTH: n,
      MAX_LENGTH: i,
    } = Yi,
    s = Xi;
  t = e.exports = {};
  const c = (t.re = []),
    o = (t.safeRe = []),
    u = (t.src = []),
    d = (t.t = {});
  let m = 0;
  const g = "[a-zA-Z0-9-]",
    w = [
      ["\\s", 1],
      ["\\d", i],
      [g, n],
    ],
    k = (H) => {
      for (const [D, I] of w)
        H = H.split(`${D}*`)
          .join(`${D}{0,${I}}`)
          .split(`${D}+`)
          .join(`${D}{1,${I}}`);
      return H;
    },
    L = (H, D, I) => {
      const T = k(D),
        $ = m++;
      s(H, $, D),
        (d[H] = $),
        (u[$] = D),
        (c[$] = new RegExp(D, I ? "g" : void 0)),
        (o[$] = new RegExp(T, I ? "g" : void 0));
    };
  L("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
    L("NUMERICIDENTIFIERLOOSE", "\\d+"),
    L("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${g}*`),
    L(
      "MAINVERSION",
      `(${u[d.NUMERICIDENTIFIER]})\\.(${u[d.NUMERICIDENTIFIER]})\\.(${
        u[d.NUMERICIDENTIFIER]
      })`
    ),
    L(
      "MAINVERSIONLOOSE",
      `(${u[d.NUMERICIDENTIFIERLOOSE]})\\.(${u[d.NUMERICIDENTIFIERLOOSE]})\\.(${
        u[d.NUMERICIDENTIFIERLOOSE]
      })`
    ),
    L(
      "PRERELEASEIDENTIFIER",
      `(?:${u[d.NUMERICIDENTIFIER]}|${u[d.NONNUMERICIDENTIFIER]})`
    ),
    L(
      "PRERELEASEIDENTIFIERLOOSE",
      `(?:${u[d.NUMERICIDENTIFIERLOOSE]}|${u[d.NONNUMERICIDENTIFIER]})`
    ),
    L(
      "PRERELEASE",
      `(?:-(${u[d.PRERELEASEIDENTIFIER]}(?:\\.${u[d.PRERELEASEIDENTIFIER]})*))`
    ),
    L(
      "PRERELEASELOOSE",
      `(?:-?(${u[d.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${
        u[d.PRERELEASEIDENTIFIERLOOSE]
      })*))`
    ),
    L("BUILDIDENTIFIER", `${g}+`),
    L(
      "BUILD",
      `(?:\\+(${u[d.BUILDIDENTIFIER]}(?:\\.${u[d.BUILDIDENTIFIER]})*))`
    ),
    L("FULLPLAIN", `v?${u[d.MAINVERSION]}${u[d.PRERELEASE]}?${u[d.BUILD]}?`),
    L("FULL", `^${u[d.FULLPLAIN]}$`),
    L(
      "LOOSEPLAIN",
      `[v=\\s]*${u[d.MAINVERSIONLOOSE]}${u[d.PRERELEASELOOSE]}?${u[d.BUILD]}?`
    ),
    L("LOOSE", `^${u[d.LOOSEPLAIN]}$`),
    L("GTLT", "((?:<|>)?=?)"),
    L("XRANGEIDENTIFIERLOOSE", `${u[d.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
    L("XRANGEIDENTIFIER", `${u[d.NUMERICIDENTIFIER]}|x|X|\\*`),
    L(
      "XRANGEPLAIN",
      `[v=\\s]*(${u[d.XRANGEIDENTIFIER]})(?:\\.(${
        u[d.XRANGEIDENTIFIER]
      })(?:\\.(${u[d.XRANGEIDENTIFIER]})(?:${u[d.PRERELEASE]})?${
        u[d.BUILD]
      }?)?)?`
    ),
    L(
      "XRANGEPLAINLOOSE",
      `[v=\\s]*(${u[d.XRANGEIDENTIFIERLOOSE]})(?:\\.(${
        u[d.XRANGEIDENTIFIERLOOSE]
      })(?:\\.(${u[d.XRANGEIDENTIFIERLOOSE]})(?:${u[d.PRERELEASELOOSE]})?${
        u[d.BUILD]
      }?)?)?`
    ),
    L("XRANGE", `^${u[d.GTLT]}\\s*${u[d.XRANGEPLAIN]}$`),
    L("XRANGELOOSE", `^${u[d.GTLT]}\\s*${u[d.XRANGEPLAINLOOSE]}$`),
    L(
      "COERCEPLAIN",
      `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`
    ),
    L("COERCE", `${u[d.COERCEPLAIN]}(?:$|[^\\d])`),
    L(
      "COERCEFULL",
      u[d.COERCEPLAIN] + `(?:${u[d.PRERELEASE]})?(?:${u[d.BUILD]})?(?:$|[^\\d])`
    ),
    L("COERCERTL", u[d.COERCE], !0),
    L("COERCERTLFULL", u[d.COERCEFULL], !0),
    L("LONETILDE", "(?:~>?)"),
    L("TILDETRIM", `(\\s*)${u[d.LONETILDE]}\\s+`, !0),
    (t.tildeTrimReplace = "$1~"),
    L("TILDE", `^${u[d.LONETILDE]}${u[d.XRANGEPLAIN]}$`),
    L("TILDELOOSE", `^${u[d.LONETILDE]}${u[d.XRANGEPLAINLOOSE]}$`),
    L("LONECARET", "(?:\\^)"),
    L("CARETTRIM", `(\\s*)${u[d.LONECARET]}\\s+`, !0),
    (t.caretTrimReplace = "$1^"),
    L("CARET", `^${u[d.LONECARET]}${u[d.XRANGEPLAIN]}$`),
    L("CARETLOOSE", `^${u[d.LONECARET]}${u[d.XRANGEPLAINLOOSE]}$`),
    L("COMPARATORLOOSE", `^${u[d.GTLT]}\\s*(${u[d.LOOSEPLAIN]})$|^$`),
    L("COMPARATOR", `^${u[d.GTLT]}\\s*(${u[d.FULLPLAIN]})$|^$`),
    L(
      "COMPARATORTRIM",
      `(\\s*)${u[d.GTLT]}\\s*(${u[d.LOOSEPLAIN]}|${u[d.XRANGEPLAIN]})`,
      !0
    ),
    (t.comparatorTrimReplace = "$1$2$3"),
    L(
      "HYPHENRANGE",
      `^\\s*(${u[d.XRANGEPLAIN]})\\s+-\\s+(${u[d.XRANGEPLAIN]})\\s*$`
    ),
    L(
      "HYPHENRANGELOOSE",
      `^\\s*(${u[d.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[d.XRANGEPLAINLOOSE]})\\s*$`
    ),
    L("STAR", "(<|>)?=?\\s*\\*"),
    L("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"),
    L("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})($o, $o.exports);
var ei = $o.exports;
const qp = Object.freeze({ loose: !0 }),
  zp = Object.freeze({}),
  Gp = (e) => (e ? (typeof e != "object" ? qp : e) : zp);
var ia = Gp;
const vc = /^[0-9]+$/,
  Uu = (e, t) => {
    const r = vc.test(e),
      n = vc.test(t);
    return (
      r && n && ((e = +e), (t = +t)),
      e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1
    );
  },
  Jp = (e, t) => Uu(t, e);
var Hu = { compareIdentifiers: Uu, rcompareIdentifiers: Jp };
const mi = Xi,
  { MAX_LENGTH: wc, MAX_SAFE_INTEGER: _i } = Yi,
  { safeRe: bc, t: Ec } = ei,
  Zp = ia,
  { compareIdentifiers: Jr } = Hu;
let Kp = class Bt {
  constructor(t, r) {
    if (((r = Zp(r)), t instanceof Bt)) {
      if (
        t.loose === !!r.loose &&
        t.includePrerelease === !!r.includePrerelease
      )
        return t;
      t = t.version;
    } else if (typeof t != "string")
      throw new TypeError(
        `Invalid version. Must be a string. Got type "${typeof t}".`
      );
    if (t.length > wc)
      throw new TypeError(`version is longer than ${wc} characters`);
    mi("SemVer", t, r),
      (this.options = r),
      (this.loose = !!r.loose),
      (this.includePrerelease = !!r.includePrerelease);
    const n = t.trim().match(r.loose ? bc[Ec.LOOSE] : bc[Ec.FULL]);
    if (!n) throw new TypeError(`Invalid Version: ${t}`);
    if (
      ((this.raw = t),
      (this.major = +n[1]),
      (this.minor = +n[2]),
      (this.patch = +n[3]),
      this.major > _i || this.major < 0)
    )
      throw new TypeError("Invalid major version");
    if (this.minor > _i || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > _i || this.patch < 0)
      throw new TypeError("Invalid patch version");
    n[4]
      ? (this.prerelease = n[4].split(".").map((i) => {
          if (/^[0-9]+$/.test(i)) {
            const s = +i;
            if (s >= 0 && s < _i) return s;
          }
          return i;
        }))
      : (this.prerelease = []),
      (this.build = n[5] ? n[5].split(".") : []),
      this.format();
  }
  format() {
    return (
      (this.version = `${this.major}.${this.minor}.${this.patch}`),
      this.prerelease.length &&
        (this.version += `-${this.prerelease.join(".")}`),
      this.version
    );
  }
  toString() {
    return this.version;
  }
  compare(t) {
    if (
      (mi("SemVer.compare", this.version, this.options, t), !(t instanceof Bt))
    ) {
      if (typeof t == "string" && t === this.version) return 0;
      t = new Bt(t, this.options);
    }
    return t.version === this.version
      ? 0
      : this.compareMain(t) || this.comparePre(t);
  }
  compareMain(t) {
    return (
      t instanceof Bt || (t = new Bt(t, this.options)),
      Jr(this.major, t.major) ||
        Jr(this.minor, t.minor) ||
        Jr(this.patch, t.patch)
    );
  }
  comparePre(t) {
    if (
      (t instanceof Bt || (t = new Bt(t, this.options)),
      this.prerelease.length && !t.prerelease.length)
    )
      return -1;
    if (!this.prerelease.length && t.prerelease.length) return 1;
    if (!this.prerelease.length && !t.prerelease.length) return 0;
    let r = 0;
    do {
      const n = this.prerelease[r],
        i = t.prerelease[r];
      if ((mi("prerelease compare", r, n, i), n === void 0 && i === void 0))
        return 0;
      if (i === void 0) return 1;
      if (n === void 0) return -1;
      if (n === i) continue;
      return Jr(n, i);
    } while (++r);
  }
  compareBuild(t) {
    t instanceof Bt || (t = new Bt(t, this.options));
    let r = 0;
    do {
      const n = this.build[r],
        i = t.build[r];
      if ((mi("prerelease compare", r, n, i), n === void 0 && i === void 0))
        return 0;
      if (i === void 0) return 1;
      if (n === void 0) return -1;
      if (n === i) continue;
      return Jr(n, i);
    } while (++r);
  }
  inc(t, r, n) {
    switch (t) {
      case "premajor":
        (this.prerelease.length = 0),
          (this.patch = 0),
          (this.minor = 0),
          this.major++,
          this.inc("pre", r, n);
        break;
      case "preminor":
        (this.prerelease.length = 0),
          (this.patch = 0),
          this.minor++,
          this.inc("pre", r, n);
        break;
      case "prepatch":
        (this.prerelease.length = 0),
          this.inc("patch", r, n),
          this.inc("pre", r, n);
        break;
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", r, n),
          this.inc("pre", r, n);
        break;
      case "major":
        (this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0) &&
          this.major++,
          (this.minor = 0),
          (this.patch = 0),
          (this.prerelease = []);
        break;
      case "minor":
        (this.patch !== 0 || this.prerelease.length === 0) && this.minor++,
          (this.patch = 0),
          (this.prerelease = []);
        break;
      case "patch":
        this.prerelease.length === 0 && this.patch++, (this.prerelease = []);
        break;
      case "pre": {
        const i = Number(n) ? 1 : 0;
        if (!r && n === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (this.prerelease.length === 0) this.prerelease = [i];
        else {
          let s = this.prerelease.length;
          for (; --s >= 0; )
            typeof this.prerelease[s] == "number" &&
              (this.prerelease[s]++, (s = -2));
          if (s === -1) {
            if (r === this.prerelease.join(".") && n === !1)
              throw new Error(
                "invalid increment argument: identifier already exists"
              );
            this.prerelease.push(i);
          }
        }
        if (r) {
          let s = [r, i];
          n === !1 && (s = [r]),
            Jr(this.prerelease[0], r) === 0
              ? isNaN(this.prerelease[1]) && (this.prerelease = s)
              : (this.prerelease = s);
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${t}`);
    }
    return (
      (this.raw = this.format()),
      this.build.length && (this.raw += `+${this.build.join(".")}`),
      this
    );
  }
};
var ht = Kp;
const Sc = ht,
  Qp = (e, t, r = !1) => {
    if (e instanceof Sc) return e;
    try {
      return new Sc(e, t);
    } catch (n) {
      if (!r) return null;
      throw n;
    }
  };
var bn = Qp;
const Yp = bn,
  Xp = (e, t) => {
    const r = Yp(e, t);
    return r ? r.version : null;
  };
var e1 = Xp;
const t1 = bn,
  r1 = (e, t) => {
    const r = t1(e.trim().replace(/^[=v]+/, ""), t);
    return r ? r.version : null;
  };
var n1 = r1;
const Rc = ht,
  i1 = (e, t, r, n, i) => {
    typeof r == "string" && ((i = n), (n = r), (r = void 0));
    try {
      return new Rc(e instanceof Rc ? e.version : e, r).inc(t, n, i).version;
    } catch {
      return null;
    }
  };
var s1 = i1;
const Cc = bn,
  o1 = (e, t) => {
    const r = Cc(e, null, !0),
      n = Cc(t, null, !0),
      i = r.compare(n);
    if (i === 0) return null;
    const s = i > 0,
      c = s ? r : n,
      o = s ? n : r,
      u = !!c.prerelease.length;
    if (!!o.prerelease.length && !u)
      return !o.patch && !o.minor
        ? "major"
        : c.patch
        ? "patch"
        : c.minor
        ? "minor"
        : "major";
    const m = u ? "pre" : "";
    return r.major !== n.major
      ? m + "major"
      : r.minor !== n.minor
      ? m + "minor"
      : r.patch !== n.patch
      ? m + "patch"
      : "prerelease";
  };
var a1 = o1;
const c1 = ht,
  l1 = (e, t) => new c1(e, t).major;
var u1 = l1;
const h1 = ht,
  f1 = (e, t) => new h1(e, t).minor;
var d1 = f1;
const p1 = ht,
  g1 = (e, t) => new p1(e, t).patch;
var m1 = g1;
const _1 = bn,
  y1 = (e, t) => {
    const r = _1(e, t);
    return r && r.prerelease.length ? r.prerelease : null;
  };
var v1 = y1;
const Mc = ht,
  w1 = (e, t, r) => new Mc(e, r).compare(new Mc(t, r));
var At = w1;
const b1 = At,
  E1 = (e, t, r) => b1(t, e, r);
var S1 = E1;
const R1 = At,
  C1 = (e, t) => R1(e, t, !0);
var M1 = C1;
const xc = ht,
  x1 = (e, t, r) => {
    const n = new xc(e, r),
      i = new xc(t, r);
    return n.compare(i) || n.compareBuild(i);
  };
var sa = x1;
const k1 = sa,
  I1 = (e, t) => e.sort((r, n) => k1(r, n, t));
var A1 = I1;
const T1 = sa,
  N1 = (e, t) => e.sort((r, n) => T1(n, r, t));
var L1 = N1;
const B1 = At,
  P1 = (e, t, r) => B1(e, t, r) > 0;
var es = P1;
const O1 = At,
  $1 = (e, t, r) => O1(e, t, r) < 0;
var oa = $1;
const F1 = At,
  D1 = (e, t, r) => F1(e, t, r) === 0;
var Wu = D1;
const j1 = At,
  U1 = (e, t, r) => j1(e, t, r) !== 0;
var Vu = U1;
const H1 = At,
  W1 = (e, t, r) => H1(e, t, r) >= 0;
var aa = W1;
const V1 = At,
  q1 = (e, t, r) => V1(e, t, r) <= 0;
var ca = q1;
const z1 = Wu,
  G1 = Vu,
  J1 = es,
  Z1 = aa,
  K1 = oa,
  Q1 = ca,
  Y1 = (e, t, r, n) => {
    switch (t) {
      case "===":
        return (
          typeof e == "object" && (e = e.version),
          typeof r == "object" && (r = r.version),
          e === r
        );
      case "!==":
        return (
          typeof e == "object" && (e = e.version),
          typeof r == "object" && (r = r.version),
          e !== r
        );
      case "":
      case "=":
      case "==":
        return z1(e, r, n);
      case "!=":
        return G1(e, r, n);
      case ">":
        return J1(e, r, n);
      case ">=":
        return Z1(e, r, n);
      case "<":
        return K1(e, r, n);
      case "<=":
        return Q1(e, r, n);
      default:
        throw new TypeError(`Invalid operator: ${t}`);
    }
  };
var qu = Y1;
const X1 = ht,
  eg = bn,
  { safeRe: yi, t: vi } = ei,
  tg = (e, t) => {
    if (e instanceof X1) return e;
    if ((typeof e == "number" && (e = String(e)), typeof e != "string"))
      return null;
    t = t || {};
    let r = null;
    if (!t.rtl)
      r = e.match(t.includePrerelease ? yi[vi.COERCEFULL] : yi[vi.COERCE]);
    else {
      const u = t.includePrerelease ? yi[vi.COERCERTLFULL] : yi[vi.COERCERTL];
      let d;
      for (; (d = u.exec(e)) && (!r || r.index + r[0].length !== e.length); )
        (!r || d.index + d[0].length !== r.index + r[0].length) && (r = d),
          (u.lastIndex = d.index + d[1].length + d[2].length);
      u.lastIndex = -1;
    }
    if (r === null) return null;
    const n = r[2],
      i = r[3] || "0",
      s = r[4] || "0",
      c = t.includePrerelease && r[5] ? `-${r[5]}` : "",
      o = t.includePrerelease && r[6] ? `+${r[6]}` : "";
    return eg(`${n}.${i}.${s}${c}${o}`, t);
  };
var rg = tg,
  to,
  kc;
function ng() {
  return (
    kc ||
      ((kc = 1),
      (to = function (e) {
        e.prototype[Symbol.iterator] = function* () {
          for (let t = this.head; t; t = t.next) yield t.value;
        };
      })),
    to
  );
}
var ig = we;
we.Node = Ar;
we.create = we;
function we(e) {
  var t = this;
  if (
    (t instanceof we || (t = new we()),
    (t.tail = null),
    (t.head = null),
    (t.length = 0),
    e && typeof e.forEach == "function")
  )
    e.forEach(function (i) {
      t.push(i);
    });
  else if (arguments.length > 0)
    for (var r = 0, n = arguments.length; r < n; r++) t.push(arguments[r]);
  return t;
}
we.prototype.removeNode = function (e) {
  if (e.list !== this)
    throw new Error("removing node which does not belong to this list");
  var t = e.next,
    r = e.prev;
  return (
    t && (t.prev = r),
    r && (r.next = t),
    e === this.head && (this.head = t),
    e === this.tail && (this.tail = r),
    e.list.length--,
    (e.next = null),
    (e.prev = null),
    (e.list = null),
    t
  );
};
we.prototype.unshiftNode = function (e) {
  if (e !== this.head) {
    e.list && e.list.removeNode(e);
    var t = this.head;
    (e.list = this),
      (e.next = t),
      t && (t.prev = e),
      (this.head = e),
      this.tail || (this.tail = e),
      this.length++;
  }
};
we.prototype.pushNode = function (e) {
  if (e !== this.tail) {
    e.list && e.list.removeNode(e);
    var t = this.tail;
    (e.list = this),
      (e.prev = t),
      t && (t.next = e),
      (this.tail = e),
      this.head || (this.head = e),
      this.length++;
  }
};
we.prototype.push = function () {
  for (var e = 0, t = arguments.length; e < t; e++) og(this, arguments[e]);
  return this.length;
};
we.prototype.unshift = function () {
  for (var e = 0, t = arguments.length; e < t; e++) ag(this, arguments[e]);
  return this.length;
};
we.prototype.pop = function () {
  if (this.tail) {
    var e = this.tail.value;
    return (
      (this.tail = this.tail.prev),
      this.tail ? (this.tail.next = null) : (this.head = null),
      this.length--,
      e
    );
  }
};
we.prototype.shift = function () {
  if (this.head) {
    var e = this.head.value;
    return (
      (this.head = this.head.next),
      this.head ? (this.head.prev = null) : (this.tail = null),
      this.length--,
      e
    );
  }
};
we.prototype.forEach = function (e, t) {
  t = t || this;
  for (var r = this.head, n = 0; r !== null; n++)
    e.call(t, r.value, n, this), (r = r.next);
};
we.prototype.forEachReverse = function (e, t) {
  t = t || this;
  for (var r = this.tail, n = this.length - 1; r !== null; n--)
    e.call(t, r.value, n, this), (r = r.prev);
};
we.prototype.get = function (e) {
  for (var t = 0, r = this.head; r !== null && t < e; t++) r = r.next;
  if (t === e && r !== null) return r.value;
};
we.prototype.getReverse = function (e) {
  for (var t = 0, r = this.tail; r !== null && t < e; t++) r = r.prev;
  if (t === e && r !== null) return r.value;
};
we.prototype.map = function (e, t) {
  t = t || this;
  for (var r = new we(), n = this.head; n !== null; )
    r.push(e.call(t, n.value, this)), (n = n.next);
  return r;
};
we.prototype.mapReverse = function (e, t) {
  t = t || this;
  for (var r = new we(), n = this.tail; n !== null; )
    r.push(e.call(t, n.value, this)), (n = n.prev);
  return r;
};
we.prototype.reduce = function (e, t) {
  var r,
    n = this.head;
  if (arguments.length > 1) r = t;
  else if (this.head) (n = this.head.next), (r = this.head.value);
  else throw new TypeError("Reduce of empty list with no initial value");
  for (var i = 0; n !== null; i++) (r = e(r, n.value, i)), (n = n.next);
  return r;
};
we.prototype.reduceReverse = function (e, t) {
  var r,
    n = this.tail;
  if (arguments.length > 1) r = t;
  else if (this.tail) (n = this.tail.prev), (r = this.tail.value);
  else throw new TypeError("Reduce of empty list with no initial value");
  for (var i = this.length - 1; n !== null; i--)
    (r = e(r, n.value, i)), (n = n.prev);
  return r;
};
we.prototype.toArray = function () {
  for (var e = new Array(this.length), t = 0, r = this.head; r !== null; t++)
    (e[t] = r.value), (r = r.next);
  return e;
};
we.prototype.toArrayReverse = function () {
  for (var e = new Array(this.length), t = 0, r = this.tail; r !== null; t++)
    (e[t] = r.value), (r = r.prev);
  return e;
};
we.prototype.slice = function (e, t) {
  (t = t || this.length),
    t < 0 && (t += this.length),
    (e = e || 0),
    e < 0 && (e += this.length);
  var r = new we();
  if (t < e || t < 0) return r;
  e < 0 && (e = 0), t > this.length && (t = this.length);
  for (var n = 0, i = this.head; i !== null && n < e; n++) i = i.next;
  for (; i !== null && n < t; n++, i = i.next) r.push(i.value);
  return r;
};
we.prototype.sliceReverse = function (e, t) {
  (t = t || this.length),
    t < 0 && (t += this.length),
    (e = e || 0),
    e < 0 && (e += this.length);
  var r = new we();
  if (t < e || t < 0) return r;
  e < 0 && (e = 0), t > this.length && (t = this.length);
  for (var n = this.length, i = this.tail; i !== null && n > t; n--) i = i.prev;
  for (; i !== null && n > e; n--, i = i.prev) r.push(i.value);
  return r;
};
we.prototype.splice = function (e, t, ...r) {
  e > this.length && (e = this.length - 1), e < 0 && (e = this.length + e);
  for (var n = 0, i = this.head; i !== null && n < e; n++) i = i.next;
  for (var s = [], n = 0; i && n < t; n++)
    s.push(i.value), (i = this.removeNode(i));
  i === null && (i = this.tail),
    i !== this.head && i !== this.tail && (i = i.prev);
  for (var n = 0; n < r.length; n++) i = sg(this, i, r[n]);
  return s;
};
we.prototype.reverse = function () {
  for (var e = this.head, t = this.tail, r = e; r !== null; r = r.prev) {
    var n = r.prev;
    (r.prev = r.next), (r.next = n);
  }
  return (this.head = t), (this.tail = e), this;
};
function sg(e, t, r) {
  var n = t === e.head ? new Ar(r, null, t, e) : new Ar(r, t, t.next, e);
  return (
    n.next === null && (e.tail = n),
    n.prev === null && (e.head = n),
    e.length++,
    n
  );
}
function og(e, t) {
  (e.tail = new Ar(t, e.tail, null, e)),
    e.head || (e.head = e.tail),
    e.length++;
}
function ag(e, t) {
  (e.head = new Ar(t, null, e.head, e)),
    e.tail || (e.tail = e.head),
    e.length++;
}
function Ar(e, t, r, n) {
  if (!(this instanceof Ar)) return new Ar(e, t, r, n);
  (this.list = n),
    (this.value = e),
    t ? ((t.next = this), (this.prev = t)) : (this.prev = null),
    r ? ((r.prev = this), (this.next = r)) : (this.next = null);
}
try {
  ng()(we);
} catch {}
const cg = ig,
  Er = Symbol("max"),
  Vt = Symbol("length"),
  Zr = Symbol("lengthCalculator"),
  Ln = Symbol("allowStale"),
  Cr = Symbol("maxAge"),
  Ht = Symbol("dispose"),
  Ic = Symbol("noDisposeOnSet"),
  nt = Symbol("lruList"),
  kt = Symbol("cache"),
  zu = Symbol("updateAgeOnGet"),
  ro = () => 1;
class lg {
  constructor(t) {
    if (
      (typeof t == "number" && (t = { max: t }),
      t || (t = {}),
      t.max && (typeof t.max != "number" || t.max < 0))
    )
      throw new TypeError("max must be a non-negative number");
    this[Er] = t.max || 1 / 0;
    const r = t.length || ro;
    if (
      ((this[Zr] = typeof r != "function" ? ro : r),
      (this[Ln] = t.stale || !1),
      t.maxAge && typeof t.maxAge != "number")
    )
      throw new TypeError("maxAge must be a number");
    (this[Cr] = t.maxAge || 0),
      (this[Ht] = t.dispose),
      (this[Ic] = t.noDisposeOnSet || !1),
      (this[zu] = t.updateAgeOnGet || !1),
      this.reset();
  }
  set max(t) {
    if (typeof t != "number" || t < 0)
      throw new TypeError("max must be a non-negative number");
    (this[Er] = t || 1 / 0), Mn(this);
  }
  get max() {
    return this[Er];
  }
  set allowStale(t) {
    this[Ln] = !!t;
  }
  get allowStale() {
    return this[Ln];
  }
  set maxAge(t) {
    if (typeof t != "number")
      throw new TypeError("maxAge must be a non-negative number");
    (this[Cr] = t), Mn(this);
  }
  get maxAge() {
    return this[Cr];
  }
  set lengthCalculator(t) {
    typeof t != "function" && (t = ro),
      t !== this[Zr] &&
        ((this[Zr] = t),
        (this[Vt] = 0),
        this[nt].forEach((r) => {
          (r.length = this[Zr](r.value, r.key)), (this[Vt] += r.length);
        })),
      Mn(this);
  }
  get lengthCalculator() {
    return this[Zr];
  }
  get length() {
    return this[Vt];
  }
  get itemCount() {
    return this[nt].length;
  }
  rforEach(t, r) {
    r = r || this;
    for (let n = this[nt].tail; n !== null; ) {
      const i = n.prev;
      Ac(this, t, n, r), (n = i);
    }
  }
  forEach(t, r) {
    r = r || this;
    for (let n = this[nt].head; n !== null; ) {
      const i = n.next;
      Ac(this, t, n, r), (n = i);
    }
  }
  keys() {
    return this[nt].toArray().map((t) => t.key);
  }
  values() {
    return this[nt].toArray().map((t) => t.value);
  }
  reset() {
    this[Ht] &&
      this[nt] &&
      this[nt].length &&
      this[nt].forEach((t) => this[Ht](t.key, t.value)),
      (this[kt] = new Map()),
      (this[nt] = new cg()),
      (this[Vt] = 0);
  }
  dump() {
    return this[nt]
      .map((t) =>
        Pi(this, t) ? !1 : { k: t.key, v: t.value, e: t.now + (t.maxAge || 0) }
      )
      .toArray()
      .filter((t) => t);
  }
  dumpLru() {
    return this[nt];
  }
  set(t, r, n) {
    if (((n = n || this[Cr]), n && typeof n != "number"))
      throw new TypeError("maxAge must be a number");
    const i = n ? Date.now() : 0,
      s = this[Zr](r, t);
    if (this[kt].has(t)) {
      if (s > this[Er]) return sn(this, this[kt].get(t)), !1;
      const u = this[kt].get(t).value;
      return (
        this[Ht] && (this[Ic] || this[Ht](t, u.value)),
        (u.now = i),
        (u.maxAge = n),
        (u.value = r),
        (this[Vt] += s - u.length),
        (u.length = s),
        this.get(t),
        Mn(this),
        !0
      );
    }
    const c = new ug(t, r, s, i, n);
    return c.length > this[Er]
      ? (this[Ht] && this[Ht](t, r), !1)
      : ((this[Vt] += c.length),
        this[nt].unshift(c),
        this[kt].set(t, this[nt].head),
        Mn(this),
        !0);
  }
  has(t) {
    if (!this[kt].has(t)) return !1;
    const r = this[kt].get(t).value;
    return !Pi(this, r);
  }
  get(t) {
    return no(this, t, !0);
  }
  peek(t) {
    return no(this, t, !1);
  }
  pop() {
    const t = this[nt].tail;
    return t ? (sn(this, t), t.value) : null;
  }
  del(t) {
    sn(this, this[kt].get(t));
  }
  load(t) {
    this.reset();
    const r = Date.now();
    for (let n = t.length - 1; n >= 0; n--) {
      const i = t[n],
        s = i.e || 0;
      if (s === 0) this.set(i.k, i.v);
      else {
        const c = s - r;
        c > 0 && this.set(i.k, i.v, c);
      }
    }
  }
  prune() {
    this[kt].forEach((t, r) => no(this, r, !1));
  }
}
const no = (e, t, r) => {
    const n = e[kt].get(t);
    if (n) {
      const i = n.value;
      if (Pi(e, i)) {
        if ((sn(e, n), !e[Ln])) return;
      } else r && (e[zu] && (n.value.now = Date.now()), e[nt].unshiftNode(n));
      return i.value;
    }
  },
  Pi = (e, t) => {
    if (!t || (!t.maxAge && !e[Cr])) return !1;
    const r = Date.now() - t.now;
    return t.maxAge ? r > t.maxAge : e[Cr] && r > e[Cr];
  },
  Mn = (e) => {
    if (e[Vt] > e[Er])
      for (let t = e[nt].tail; e[Vt] > e[Er] && t !== null; ) {
        const r = t.prev;
        sn(e, t), (t = r);
      }
  },
  sn = (e, t) => {
    if (t) {
      const r = t.value;
      e[Ht] && e[Ht](r.key, r.value),
        (e[Vt] -= r.length),
        e[kt].delete(r.key),
        e[nt].removeNode(t);
    }
  };
class ug {
  constructor(t, r, n, i, s) {
    (this.key = t),
      (this.value = r),
      (this.length = n),
      (this.now = i),
      (this.maxAge = s || 0);
  }
}
const Ac = (e, t, r, n) => {
  let i = r.value;
  Pi(e, i) && (sn(e, r), e[Ln] || (i = void 0)),
    i && t.call(n, i.value, i.key, e);
};
var hg = lg,
  io,
  Tc;
function Tt() {
  if (Tc) return io;
  Tc = 1;
  class e {
    constructor(a, p) {
      if (((p = n(p)), a instanceof e))
        return a.loose === !!p.loose &&
          a.includePrerelease === !!p.includePrerelease
          ? a
          : new e(a.raw, p);
      if (a instanceof i)
        return (this.raw = a.value), (this.set = [[a]]), this.format(), this;
      if (
        ((this.options = p),
        (this.loose = !!p.loose),
        (this.includePrerelease = !!p.includePrerelease),
        (this.raw = a.trim().split(/\s+/).join(" ")),
        (this.set = this.raw
          .split("||")
          .map((y) => this.parseRange(y.trim()))
          .filter((y) => y.length)),
        !this.set.length)
      )
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        const y = this.set[0];
        if (
          ((this.set = this.set.filter((b) => !L(b[0]))), this.set.length === 0)
        )
          this.set = [y];
        else if (this.set.length > 1) {
          for (const b of this.set)
            if (b.length === 1 && H(b[0])) {
              this.set = [b];
              break;
            }
        }
      }
      this.format();
    }
    format() {
      return (
        (this.range = this.set
          .map((a) => a.join(" ").trim())
          .join("||")
          .trim()),
        this.range
      );
    }
    toString() {
      return this.range;
    }
    parseRange(a) {
      const y =
          ((this.options.includePrerelease && w) | (this.options.loose && k)) +
          ":" +
          a,
        b = r.get(y);
      if (b) return b;
      const R = this.options.loose,
        A = R ? o[u.HYPHENRANGELOOSE] : o[u.HYPHENRANGE];
      (a = a.replace(A, oe(this.options.includePrerelease))),
        s("hyphen replace", a),
        (a = a.replace(o[u.COMPARATORTRIM], d)),
        s("comparator trim", a),
        (a = a.replace(o[u.TILDETRIM], m)),
        s("tilde trim", a),
        (a = a.replace(o[u.CARETTRIM], g)),
        s("caret trim", a);
      let B = a
        .split(" ")
        .map((K) => I(K, this.options))
        .join(" ")
        .split(/\s+/)
        .map((K) => ue(K, this.options));
      R &&
        (B = B.filter(
          (K) => (
            s("loose invalid filter", K, this.options),
            !!K.match(o[u.COMPARATORLOOSE])
          )
        )),
        s("range list", B);
      const v = new Map(),
        f = B.map((K) => new i(K, this.options));
      for (const K of f) {
        if (L(K)) return [K];
        v.set(K.value, K);
      }
      v.size > 1 && v.has("") && v.delete("");
      const x = [...v.values()];
      return r.set(y, x), x;
    }
    intersects(a, p) {
      if (!(a instanceof e)) throw new TypeError("a Range is required");
      return this.set.some(
        (y) =>
          D(y, p) &&
          a.set.some(
            (b) => D(b, p) && y.every((R) => b.every((A) => R.intersects(A, p)))
          )
      );
    }
    test(a) {
      if (!a) return !1;
      if (typeof a == "string")
        try {
          a = new c(a, this.options);
        } catch {
          return !1;
        }
      for (let p = 0; p < this.set.length; p++)
        if (pe(this.set[p], a, this.options)) return !0;
      return !1;
    }
  }
  io = e;
  const t = hg,
    r = new t({ max: 1e3 }),
    n = ia,
    i = ts(),
    s = Xi,
    c = ht,
    {
      safeRe: o,
      t: u,
      comparatorTrimReplace: d,
      tildeTrimReplace: m,
      caretTrimReplace: g,
    } = ei,
    { FLAG_INCLUDE_PRERELEASE: w, FLAG_LOOSE: k } = Yi,
    L = (E) => E.value === "<0.0.0-0",
    H = (E) => E.value === "",
    D = (E, a) => {
      let p = !0;
      const y = E.slice();
      let b = y.pop();
      for (; p && y.length; )
        (p = y.every((R) => b.intersects(R, a))), (b = y.pop());
      return p;
    },
    I = (E, a) => (
      s("comp", E, a),
      (E = j(E, a)),
      s("caret", E),
      (E = $(E, a)),
      s("tildes", E),
      (E = ee(E, a)),
      s("xrange", E),
      (E = Z(E, a)),
      s("stars", E),
      E
    ),
    T = (E) => !E || E.toLowerCase() === "x" || E === "*",
    $ = (E, a) =>
      E.trim()
        .split(/\s+/)
        .map((p) => V(p, a))
        .join(" "),
    V = (E, a) => {
      const p = a.loose ? o[u.TILDELOOSE] : o[u.TILDE];
      return E.replace(p, (y, b, R, A, B) => {
        s("tilde", E, y, b, R, A, B);
        let v;
        return (
          T(b)
            ? (v = "")
            : T(R)
            ? (v = `>=${b}.0.0 <${+b + 1}.0.0-0`)
            : T(A)
            ? (v = `>=${b}.${R}.0 <${b}.${+R + 1}.0-0`)
            : B
            ? (s("replaceTilde pr", B),
              (v = `>=${b}.${R}.${A}-${B} <${b}.${+R + 1}.0-0`))
            : (v = `>=${b}.${R}.${A} <${b}.${+R + 1}.0-0`),
          s("tilde return", v),
          v
        );
      });
    },
    j = (E, a) =>
      E.trim()
        .split(/\s+/)
        .map((p) => z(p, a))
        .join(" "),
    z = (E, a) => {
      s("caret", E, a);
      const p = a.loose ? o[u.CARETLOOSE] : o[u.CARET],
        y = a.includePrerelease ? "-0" : "";
      return E.replace(p, (b, R, A, B, v) => {
        s("caret", E, b, R, A, B, v);
        let f;
        return (
          T(R)
            ? (f = "")
            : T(A)
            ? (f = `>=${R}.0.0${y} <${+R + 1}.0.0-0`)
            : T(B)
            ? R === "0"
              ? (f = `>=${R}.${A}.0${y} <${R}.${+A + 1}.0-0`)
              : (f = `>=${R}.${A}.0${y} <${+R + 1}.0.0-0`)
            : v
            ? (s("replaceCaret pr", v),
              R === "0"
                ? A === "0"
                  ? (f = `>=${R}.${A}.${B}-${v} <${R}.${A}.${+B + 1}-0`)
                  : (f = `>=${R}.${A}.${B}-${v} <${R}.${+A + 1}.0-0`)
                : (f = `>=${R}.${A}.${B}-${v} <${+R + 1}.0.0-0`))
            : (s("no pr"),
              R === "0"
                ? A === "0"
                  ? (f = `>=${R}.${A}.${B}${y} <${R}.${A}.${+B + 1}-0`)
                  : (f = `>=${R}.${A}.${B}${y} <${R}.${+A + 1}.0-0`)
                : (f = `>=${R}.${A}.${B} <${+R + 1}.0.0-0`)),
          s("caret return", f),
          f
        );
      });
    },
    ee = (E, a) => (
      s("replaceXRanges", E, a),
      E.split(/\s+/)
        .map((p) => Q(p, a))
        .join(" ")
    ),
    Q = (E, a) => {
      E = E.trim();
      const p = a.loose ? o[u.XRANGELOOSE] : o[u.XRANGE];
      return E.replace(p, (y, b, R, A, B, v) => {
        s("xRange", E, y, b, R, A, B, v);
        const f = T(R),
          x = f || T(A),
          K = x || T(B),
          Y = K;
        return (
          b === "=" && Y && (b = ""),
          (v = a.includePrerelease ? "-0" : ""),
          f
            ? b === ">" || b === "<"
              ? (y = "<0.0.0-0")
              : (y = "*")
            : b && Y
            ? (x && (A = 0),
              (B = 0),
              b === ">"
                ? ((b = ">="),
                  x
                    ? ((R = +R + 1), (A = 0), (B = 0))
                    : ((A = +A + 1), (B = 0)))
                : b === "<=" && ((b = "<"), x ? (R = +R + 1) : (A = +A + 1)),
              b === "<" && (v = "-0"),
              (y = `${b + R}.${A}.${B}${v}`))
            : x
            ? (y = `>=${R}.0.0${v} <${+R + 1}.0.0-0`)
            : K && (y = `>=${R}.${A}.0${v} <${R}.${+A + 1}.0-0`),
          s("xRange return", y),
          y
        );
      });
    },
    Z = (E, a) => (s("replaceStars", E, a), E.trim().replace(o[u.STAR], "")),
    ue = (E, a) => (
      s("replaceGTE0", E, a),
      E.trim().replace(o[a.includePrerelease ? u.GTE0PRE : u.GTE0], "")
    ),
    oe = (E) => (a, p, y, b, R, A, B, v, f, x, K, Y, N) => (
      T(y)
        ? (p = "")
        : T(b)
        ? (p = `>=${y}.0.0${E ? "-0" : ""}`)
        : T(R)
        ? (p = `>=${y}.${b}.0${E ? "-0" : ""}`)
        : A
        ? (p = `>=${p}`)
        : (p = `>=${p}${E ? "-0" : ""}`),
      T(f)
        ? (v = "")
        : T(x)
        ? (v = `<${+f + 1}.0.0-0`)
        : T(K)
        ? (v = `<${f}.${+x + 1}.0-0`)
        : Y
        ? (v = `<=${f}.${x}.${K}-${Y}`)
        : E
        ? (v = `<${f}.${x}.${+K + 1}-0`)
        : (v = `<=${v}`),
      `${p} ${v}`.trim()
    ),
    pe = (E, a, p) => {
      for (let y = 0; y < E.length; y++) if (!E[y].test(a)) return !1;
      if (a.prerelease.length && !p.includePrerelease) {
        for (let y = 0; y < E.length; y++)
          if (
            (s(E[y].semver),
            E[y].semver !== i.ANY && E[y].semver.prerelease.length > 0)
          ) {
            const b = E[y].semver;
            if (
              b.major === a.major &&
              b.minor === a.minor &&
              b.patch === a.patch
            )
              return !0;
          }
        return !1;
      }
      return !0;
    };
  return io;
}
var so, Nc;
function ts() {
  if (Nc) return so;
  Nc = 1;
  const e = Symbol("SemVer ANY");
  class t {
    static get ANY() {
      return e;
    }
    constructor(m, g) {
      if (((g = r(g)), m instanceof t)) {
        if (m.loose === !!g.loose) return m;
        m = m.value;
      }
      (m = m.trim().split(/\s+/).join(" ")),
        c("comparator", m, g),
        (this.options = g),
        (this.loose = !!g.loose),
        this.parse(m),
        this.semver === e
          ? (this.value = "")
          : (this.value = this.operator + this.semver.version),
        c("comp", this);
    }
    parse(m) {
      const g = this.options.loose ? n[i.COMPARATORLOOSE] : n[i.COMPARATOR],
        w = m.match(g);
      if (!w) throw new TypeError(`Invalid comparator: ${m}`);
      (this.operator = w[1] !== void 0 ? w[1] : ""),
        this.operator === "=" && (this.operator = ""),
        w[2]
          ? (this.semver = new o(w[2], this.options.loose))
          : (this.semver = e);
    }
    toString() {
      return this.value;
    }
    test(m) {
      if (
        (c("Comparator.test", m, this.options.loose),
        this.semver === e || m === e)
      )
        return !0;
      if (typeof m == "string")
        try {
          m = new o(m, this.options);
        } catch {
          return !1;
        }
      return s(m, this.operator, this.semver, this.options);
    }
    intersects(m, g) {
      if (!(m instanceof t)) throw new TypeError("a Comparator is required");
      return this.operator === ""
        ? this.value === ""
          ? !0
          : new u(m.value, g).test(this.value)
        : m.operator === ""
        ? m.value === ""
          ? !0
          : new u(this.value, g).test(m.semver)
        : ((g = r(g)),
          (g.includePrerelease &&
            (this.value === "<0.0.0-0" || m.value === "<0.0.0-0")) ||
          (!g.includePrerelease &&
            (this.value.startsWith("<0.0.0") || m.value.startsWith("<0.0.0")))
            ? !1
            : !!(
                (this.operator.startsWith(">") && m.operator.startsWith(">")) ||
                (this.operator.startsWith("<") && m.operator.startsWith("<")) ||
                (this.semver.version === m.semver.version &&
                  this.operator.includes("=") &&
                  m.operator.includes("=")) ||
                (s(this.semver, "<", m.semver, g) &&
                  this.operator.startsWith(">") &&
                  m.operator.startsWith("<")) ||
                (s(this.semver, ">", m.semver, g) &&
                  this.operator.startsWith("<") &&
                  m.operator.startsWith(">"))
              ));
    }
  }
  so = t;
  const r = ia,
    { safeRe: n, t: i } = ei,
    s = qu,
    c = Xi,
    o = ht,
    u = Tt();
  return so;
}
const fg = Tt(),
  dg = (e, t, r) => {
    try {
      t = new fg(t, r);
    } catch {
      return !1;
    }
    return t.test(e);
  };
var rs = dg;
const pg = Tt(),
  gg = (e, t) =>
    new pg(e, t).set.map((r) =>
      r
        .map((n) => n.value)
        .join(" ")
        .trim()
        .split(" ")
    );
var mg = gg;
const _g = ht,
  yg = Tt(),
  vg = (e, t, r) => {
    let n = null,
      i = null,
      s = null;
    try {
      s = new yg(t, r);
    } catch {
      return null;
    }
    return (
      e.forEach((c) => {
        s.test(c) &&
          (!n || i.compare(c) === -1) &&
          ((n = c), (i = new _g(n, r)));
      }),
      n
    );
  };
var wg = vg;
const bg = ht,
  Eg = Tt(),
  Sg = (e, t, r) => {
    let n = null,
      i = null,
      s = null;
    try {
      s = new Eg(t, r);
    } catch {
      return null;
    }
    return (
      e.forEach((c) => {
        s.test(c) &&
          (!n || i.compare(c) === 1) &&
          ((n = c), (i = new bg(n, r)));
      }),
      n
    );
  };
var Rg = Sg;
const oo = ht,
  Cg = Tt(),
  Lc = es,
  Mg = (e, t) => {
    e = new Cg(e, t);
    let r = new oo("0.0.0");
    if (e.test(r) || ((r = new oo("0.0.0-0")), e.test(r))) return r;
    r = null;
    for (let n = 0; n < e.set.length; ++n) {
      const i = e.set[n];
      let s = null;
      i.forEach((c) => {
        const o = new oo(c.semver.version);
        switch (c.operator) {
          case ">":
            o.prerelease.length === 0 ? o.patch++ : o.prerelease.push(0),
              (o.raw = o.format());
          case "":
          case ">=":
            (!s || Lc(o, s)) && (s = o);
            break;
          case "<":
          case "<=":
            break;
          default:
            throw new Error(`Unexpected operation: ${c.operator}`);
        }
      }),
        s && (!r || Lc(r, s)) && (r = s);
    }
    return r && e.test(r) ? r : null;
  };
var xg = Mg;
const kg = Tt(),
  Ig = (e, t) => {
    try {
      return new kg(e, t).range || "*";
    } catch {
      return null;
    }
  };
var Ag = Ig;
const Tg = ht,
  Gu = ts(),
  { ANY: Ng } = Gu,
  Lg = Tt(),
  Bg = rs,
  Bc = es,
  Pc = oa,
  Pg = ca,
  Og = aa,
  $g = (e, t, r, n) => {
    (e = new Tg(e, n)), (t = new Lg(t, n));
    let i, s, c, o, u;
    switch (r) {
      case ">":
        (i = Bc), (s = Pg), (c = Pc), (o = ">"), (u = ">=");
        break;
      case "<":
        (i = Pc), (s = Og), (c = Bc), (o = "<"), (u = "<=");
        break;
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (Bg(e, t, n)) return !1;
    for (let d = 0; d < t.set.length; ++d) {
      const m = t.set[d];
      let g = null,
        w = null;
      if (
        (m.forEach((k) => {
          k.semver === Ng && (k = new Gu(">=0.0.0")),
            (g = g || k),
            (w = w || k),
            i(k.semver, g.semver, n)
              ? (g = k)
              : c(k.semver, w.semver, n) && (w = k);
        }),
        g.operator === o ||
          g.operator === u ||
          ((!w.operator || w.operator === o) && s(e, w.semver)))
      )
        return !1;
      if (w.operator === u && c(e, w.semver)) return !1;
    }
    return !0;
  };
var la = $g;
const Fg = la,
  Dg = (e, t, r) => Fg(e, t, ">", r);
var jg = Dg;
const Ug = la,
  Hg = (e, t, r) => Ug(e, t, "<", r);
var Wg = Hg;
const Oc = Tt(),
  Vg = (e, t, r) => (
    (e = new Oc(e, r)), (t = new Oc(t, r)), e.intersects(t, r)
  );
var qg = Vg;
const zg = rs,
  Gg = At;
var Jg = (e, t, r) => {
  const n = [];
  let i = null,
    s = null;
  const c = e.sort((m, g) => Gg(m, g, r));
  for (const m of c)
    zg(m, t, r)
      ? ((s = m), i || (i = m))
      : (s && n.push([i, s]), (s = null), (i = null));
  i && n.push([i, null]);
  const o = [];
  for (const [m, g] of n)
    m === g
      ? o.push(m)
      : !g && m === c[0]
      ? o.push("*")
      : g
      ? m === c[0]
        ? o.push(`<=${g}`)
        : o.push(`${m} - ${g}`)
      : o.push(`>=${m}`);
  const u = o.join(" || "),
    d = typeof t.raw == "string" ? t.raw : String(t);
  return u.length < d.length ? u : t;
};
const $c = Tt(),
  ua = ts(),
  { ANY: ao } = ua,
  xn = rs,
  ha = At,
  Zg = (e, t, r = {}) => {
    if (e === t) return !0;
    (e = new $c(e, r)), (t = new $c(t, r));
    let n = !1;
    e: for (const i of e.set) {
      for (const s of t.set) {
        const c = Qg(i, s, r);
        if (((n = n || c !== null), c)) continue e;
      }
      if (n) return !1;
    }
    return !0;
  },
  Kg = [new ua(">=0.0.0-0")],
  Fc = [new ua(">=0.0.0")],
  Qg = (e, t, r) => {
    if (e === t) return !0;
    if (e.length === 1 && e[0].semver === ao) {
      if (t.length === 1 && t[0].semver === ao) return !0;
      r.includePrerelease ? (e = Kg) : (e = Fc);
    }
    if (t.length === 1 && t[0].semver === ao) {
      if (r.includePrerelease) return !0;
      t = Fc;
    }
    const n = new Set();
    let i, s;
    for (const k of e)
      k.operator === ">" || k.operator === ">="
        ? (i = Dc(i, k, r))
        : k.operator === "<" || k.operator === "<="
        ? (s = jc(s, k, r))
        : n.add(k.semver);
    if (n.size > 1) return null;
    let c;
    if (i && s) {
      if (((c = ha(i.semver, s.semver, r)), c > 0)) return null;
      if (c === 0 && (i.operator !== ">=" || s.operator !== "<=")) return null;
    }
    for (const k of n) {
      if ((i && !xn(k, String(i), r)) || (s && !xn(k, String(s), r)))
        return null;
      for (const L of t) if (!xn(k, String(L), r)) return !1;
      return !0;
    }
    let o,
      u,
      d,
      m,
      g =
        s && !r.includePrerelease && s.semver.prerelease.length ? s.semver : !1,
      w =
        i && !r.includePrerelease && i.semver.prerelease.length ? i.semver : !1;
    g &&
      g.prerelease.length === 1 &&
      s.operator === "<" &&
      g.prerelease[0] === 0 &&
      (g = !1);
    for (const k of t) {
      if (
        ((m = m || k.operator === ">" || k.operator === ">="),
        (d = d || k.operator === "<" || k.operator === "<="),
        i)
      ) {
        if (
          (w &&
            k.semver.prerelease &&
            k.semver.prerelease.length &&
            k.semver.major === w.major &&
            k.semver.minor === w.minor &&
            k.semver.patch === w.patch &&
            (w = !1),
          k.operator === ">" || k.operator === ">=")
        ) {
          if (((o = Dc(i, k, r)), o === k && o !== i)) return !1;
        } else if (i.operator === ">=" && !xn(i.semver, String(k), r))
          return !1;
      }
      if (s) {
        if (
          (g &&
            k.semver.prerelease &&
            k.semver.prerelease.length &&
            k.semver.major === g.major &&
            k.semver.minor === g.minor &&
            k.semver.patch === g.patch &&
            (g = !1),
          k.operator === "<" || k.operator === "<=")
        ) {
          if (((u = jc(s, k, r)), u === k && u !== s)) return !1;
        } else if (s.operator === "<=" && !xn(s.semver, String(k), r))
          return !1;
      }
      if (!k.operator && (s || i) && c !== 0) return !1;
    }
    return !((i && d && !s && c !== 0) || (s && m && !i && c !== 0) || w || g);
  },
  Dc = (e, t, r) => {
    if (!e) return t;
    const n = ha(e.semver, t.semver, r);
    return n > 0
      ? e
      : n < 0 || (t.operator === ">" && e.operator === ">=")
      ? t
      : e;
  },
  jc = (e, t, r) => {
    if (!e) return t;
    const n = ha(e.semver, t.semver, r);
    return n < 0
      ? e
      : n > 0 || (t.operator === "<" && e.operator === "<=")
      ? t
      : e;
  };
var Yg = Zg;
const co = ei,
  Uc = Yi,
  Xg = ht,
  Hc = Hu,
  em = bn,
  tm = e1,
  rm = n1,
  nm = s1,
  im = a1,
  sm = u1,
  om = d1,
  am = m1,
  cm = v1,
  lm = At,
  um = S1,
  hm = M1,
  fm = sa,
  dm = A1,
  pm = L1,
  gm = es,
  mm = oa,
  _m = Wu,
  ym = Vu,
  vm = aa,
  wm = ca,
  bm = qu,
  Em = rg,
  Sm = ts(),
  Rm = Tt(),
  Cm = rs,
  Mm = mg,
  xm = wg,
  km = Rg,
  Im = xg,
  Am = Ag,
  Tm = la,
  Nm = jg,
  Lm = Wg,
  Bm = qg,
  Pm = Jg,
  Om = Yg;
var $m = {
  parse: em,
  valid: tm,
  clean: rm,
  inc: nm,
  diff: im,
  major: sm,
  minor: om,
  patch: am,
  prerelease: cm,
  compare: lm,
  rcompare: um,
  compareLoose: hm,
  compareBuild: fm,
  sort: dm,
  rsort: pm,
  gt: gm,
  lt: mm,
  eq: _m,
  neq: ym,
  gte: vm,
  lte: wm,
  cmp: bm,
  coerce: Em,
  Comparator: Sm,
  Range: Rm,
  satisfies: Cm,
  toComparators: Mm,
  maxSatisfying: xm,
  minSatisfying: km,
  minVersion: Im,
  validRange: Am,
  outside: Tm,
  gtr: Nm,
  ltr: Lm,
  intersects: Bm,
  simplifyRange: Pm,
  subset: Om,
  SemVer: Xg,
  re: co.re,
  src: co.src,
  tokens: co.t,
  SEMVER_SPEC_VERSION: Uc.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: Uc.RELEASE_TYPES,
  compareIdentifiers: Hc.compareIdentifiers,
  rcompareIdentifiers: Hc.rcompareIdentifiers,
};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.satisfiesVersionRange =
      e.gtRange =
      e.gtVersion =
      e.assertIsSemVerRange =
      e.assertIsSemVerVersion =
      e.isValidSemVerRange =
      e.isValidSemVerVersion =
      e.VersionRangeStruct =
      e.VersionStruct =
        void 0);
  const t = $m,
    r = $r,
    n = at;
  (e.VersionStruct = (0, r.refine)((0, r.string)(), "Version", (g) =>
    (0, t.valid)(g) === null ? `Expected SemVer version, got "${g}"` : !0
  )),
    (e.VersionRangeStruct = (0, r.refine)(
      (0, r.string)(),
      "Version range",
      (g) =>
        (0, t.validRange)(g) === null ? `Expected SemVer range, got "${g}"` : !0
    ));
  function i(g) {
    return (0, r.is)(g, e.VersionStruct);
  }
  e.isValidSemVerVersion = i;
  function s(g) {
    return (0, r.is)(g, e.VersionRangeStruct);
  }
  e.isValidSemVerRange = s;
  function c(g) {
    (0, n.assertStruct)(g, e.VersionStruct);
  }
  e.assertIsSemVerVersion = c;
  function o(g) {
    (0, n.assertStruct)(g, e.VersionRangeStruct);
  }
  e.assertIsSemVerRange = o;
  function u(g, w) {
    return (0, t.gt)(g, w);
  }
  e.gtVersion = u;
  function d(g, w) {
    return (0, t.gtr)(g, w);
  }
  e.gtRange = d;
  function m(g, w) {
    return (0, t.satisfies)(g, w, { includePrerelease: !0 });
  }
  e.satisfiesVersionRange = m;
})(Du);
(function (e) {
  var t =
      (te && te.__createBinding) ||
      (Object.create
        ? function (n, i, s, c) {
            c === void 0 && (c = s);
            var o = Object.getOwnPropertyDescriptor(i, s);
            (!o ||
              ("get" in o ? !i.__esModule : o.writable || o.configurable)) &&
              (o = {
                enumerable: !0,
                get: function () {
                  return i[s];
                },
              }),
              Object.defineProperty(n, c, o);
          }
        : function (n, i, s, c) {
            c === void 0 && (c = s), (n[c] = i[s]);
          }),
    r =
      (te && te.__exportStar) ||
      function (n, i) {
        for (var s in n)
          s !== "default" &&
            !Object.prototype.hasOwnProperty.call(i, s) &&
            t(i, n, s);
      };
  Object.defineProperty(e, "__esModule", { value: !0 }),
    r(at, e),
    r(Yn, e),
    r(ye, e),
    r(Ki, e),
    r(Dt, e),
    r(hn, e),
    r(Nu, e),
    r(Xn, e),
    r(Lu, e),
    r(Bu, e),
    r(fn, e),
    r(Pu, e),
    r(jt, e),
    r(Ou, e),
    r($u, e),
    r(Fu, e),
    r(Du, e);
})(du);
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.createModuleLogger = e.projectLogger = void 0);
  const t = du;
  Object.defineProperty(e, "createModuleLogger", {
    enumerable: !0,
    get: function () {
      return t.createModuleLogger;
    },
  }),
    (e.projectLogger = (0, t.createProjectLogger)("eth-block-tracker"));
})(fu);
var Ju =
  (te && te.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(Ji, "__esModule", { value: !0 });
Ji.PollingBlockTracker = void 0;
const Fm = Ju(Zo),
  Dm = Ju(n0),
  jm = Jn,
  Wc = fu,
  Vc = (0, Wc.createModuleLogger)(Wc.projectLogger, "polling-block-tracker"),
  Um = (0, Fm.default)(),
  Hm = 1e3;
class Wm extends jm.BaseBlockTracker {
  constructor(t = {}) {
    var r;
    if (!t.provider)
      throw new Error("PollingBlockTracker - no provider specified.");
    super(
      Object.assign(Object.assign({}, t), {
        blockResetDuration:
          (r = t.blockResetDuration) !== null && r !== void 0
            ? r
            : t.pollingInterval,
      })
    ),
      (this._provider = t.provider),
      (this._pollingInterval = t.pollingInterval || 20 * Hm),
      (this._retryTimeout = t.retryTimeout || this._pollingInterval / 10),
      (this._keepEventLoopActive =
        t.keepEventLoopActive === void 0 ? !0 : t.keepEventLoopActive),
      (this._setSkipCacheFlag = t.setSkipCacheFlag || !1);
  }
  async checkForLatestBlock() {
    return await this._updateLatestBlock(), await this.getLatestBlock();
  }
  async _start() {
    this._synchronize();
  }
  async _end() {}
  async _synchronize() {
    for (var t; this._isRunning; )
      try {
        await this._updateLatestBlock();
        const r = qc(this._pollingInterval, !this._keepEventLoopActive);
        this.emit("_waitingForNextIteration"), await r;
      } catch (r) {
        const n =
          new Error(`PollingBlockTracker - encountered an error while attempting to update latest block:
${(t = r.stack) !== null && t !== void 0 ? t : r}`);
        try {
          this.emit("error", n);
        } catch {
          console.error(n);
        }
        const i = qc(this._retryTimeout, !this._keepEventLoopActive);
        this.emit("_waitingForNextIteration"), await i;
      }
  }
  async _updateLatestBlock() {
    const t = await this._fetchLatestBlock();
    this._newPotentialLatest(t);
  }
  async _fetchLatestBlock() {
    const t = {
      jsonrpc: "2.0",
      id: Um(),
      method: "eth_blockNumber",
      params: [],
    };
    this._setSkipCacheFlag && (t.skipCache = !0), Vc("Making request", t);
    const r = await (0, Dm.default)((n) => this._provider.sendAsync(t, n))();
    if ((Vc("Got response", r), r.error))
      throw new Error(`PollingBlockTracker - encountered error fetching block:
${r.error.message}`);
    return r.result;
  }
}
Ji.PollingBlockTracker = Wm;
function qc(e, t) {
  return new Promise((r) => {
    const n = setTimeout(r, e);
    n.unref && t && n.unref();
  });
}
var ns = {},
  Vm =
    (te && te.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(ns, "__esModule", { value: !0 });
ns.SubscribeBlockTracker = void 0;
const qm = Vm(Zo),
  zm = Jn,
  Gm = (0, qm.default)();
class Jm extends zm.BaseBlockTracker {
  constructor(t = {}) {
    if (!t.provider)
      throw new Error("SubscribeBlockTracker - no provider specified.");
    super(t), (this._provider = t.provider), (this._subscriptionId = null);
  }
  async checkForLatestBlock() {
    return await this.getLatestBlock();
  }
  async _start() {
    if (this._subscriptionId === void 0 || this._subscriptionId === null)
      try {
        const t = await this._call("eth_blockNumber");
        (this._subscriptionId = await this._call("eth_subscribe", "newHeads")),
          this._provider.on("data", this._handleSubData.bind(this)),
          this._newPotentialLatest(t);
      } catch (t) {
        this.emit("error", t);
      }
  }
  async _end() {
    if (this._subscriptionId !== null && this._subscriptionId !== void 0)
      try {
        await this._call("eth_unsubscribe", this._subscriptionId),
          (this._subscriptionId = null);
      } catch (t) {
        this.emit("error", t);
      }
  }
  _call(t, ...r) {
    return new Promise((n, i) => {
      this._provider.sendAsync(
        { id: Gm(), method: t, params: r, jsonrpc: "2.0" },
        (s, c) => {
          s ? i(s) : n(c.result);
        }
      );
    });
  }
  _handleSubData(t, r) {
    var n;
    r.method === "eth_subscription" &&
      ((n = r.params) === null || n === void 0 ? void 0 : n.subscription) ===
        this._subscriptionId &&
      this._newPotentialLatest(r.params.result.number);
  }
}
ns.SubscribeBlockTracker = Jm;
(function (e) {
  var t =
      (te && te.__createBinding) ||
      (Object.create
        ? function (n, i, s, c) {
            c === void 0 && (c = s),
              Object.defineProperty(n, c, {
                enumerable: !0,
                get: function () {
                  return i[s];
                },
              });
          }
        : function (n, i, s, c) {
            c === void 0 && (c = s), (n[c] = i[s]);
          }),
    r =
      (te && te.__exportStar) ||
      function (n, i) {
        for (var s in n)
          s !== "default" &&
            !Object.prototype.hasOwnProperty.call(i, s) &&
            t(i, n, s);
      };
  Object.defineProperty(e, "__esModule", { value: !0 }), r(Ji, e), r(ns, e);
})(hu);
var fa = {},
  is = {},
  ti = {};
Object.defineProperty(ti, "__esModule", { value: !0 });
ti.getUniqueId = void 0;
const Zu = 4294967295;
let lo = Math.floor(Math.random() * Zu);
function Zm() {
  return (lo = (lo + 1) % Zu), lo;
}
ti.getUniqueId = Zm;
Object.defineProperty(is, "__esModule", { value: !0 });
is.createIdRemapMiddleware = void 0;
const Km = ti;
function Qm() {
  return (e, t, r, n) => {
    const i = e.id,
      s = Km.getUniqueId();
    (e.id = s),
      (t.id = s),
      r((c) => {
        (e.id = i), (t.id = i), c();
      });
  };
}
is.createIdRemapMiddleware = Qm;
var ss = {};
Object.defineProperty(ss, "__esModule", { value: !0 });
ss.createAsyncMiddleware = void 0;
function Ym(e) {
  return async (t, r, n, i) => {
    let s;
    const c = new Promise((m) => {
      s = m;
    });
    let o = null,
      u = !1;
    const d = async () => {
      (u = !0),
        n((m) => {
          (o = m), s();
        }),
        await c;
    };
    try {
      await e(t, r, d), u ? (await c, o(null)) : i(null);
    } catch (m) {
      o ? o(m) : i(m);
    }
  };
}
ss.createAsyncMiddleware = Ym;
var os = {};
Object.defineProperty(os, "__esModule", { value: !0 });
os.createScaffoldMiddleware = void 0;
function Xm(e) {
  return (t, r, n, i) => {
    const s = e[t.method];
    return s === void 0
      ? n()
      : typeof s == "function"
      ? s(t, r, n, i)
      : ((r.result = s), i());
  };
}
os.createScaffoldMiddleware = Xm;
var ri = {},
  da = {};
Object.defineProperty(da, "__esModule", { value: !0 });
const e_ = Fi;
function zc(e, t, r) {
  try {
    Reflect.apply(e, t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    });
  }
}
function t_(e) {
  const t = e.length,
    r = new Array(t);
  for (let n = 0; n < t; n += 1) r[n] = e[n];
  return r;
}
let r_ = class extends e_.EventEmitter {
  emit(t, ...r) {
    let n = t === "error";
    const i = this._events;
    if (i !== void 0) n = n && i.error === void 0;
    else if (!n) return !1;
    if (n) {
      let c;
      if ((r.length > 0 && ([c] = r), c instanceof Error)) throw c;
      const o = new Error(`Unhandled error.${c ? ` (${c.message})` : ""}`);
      throw ((o.context = c), o);
    }
    const s = i[t];
    if (s === void 0) return !1;
    if (typeof s == "function") zc(s, this, r);
    else {
      const c = s.length,
        o = t_(s);
      for (let u = 0; u < c; u += 1) zc(o[u], this, r);
    }
    return !0;
  }
};
da.default = r_;
var Ku = {},
  er = {},
  n_ = Fn;
Fn.default = Fn;
Fn.stable = Xu;
Fn.stableStringify = Xu;
var Oi = "[...]",
  Qu = "[Circular]",
  Tr = [],
  Mr = [];
function Yu() {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER,
  };
}
function Fn(e, t, r, n) {
  typeof n > "u" && (n = Yu()), Fo(e, "", 0, [], void 0, 0, n);
  var i;
  try {
    Mr.length === 0
      ? (i = JSON.stringify(e, t, r))
      : (i = JSON.stringify(e, eh(t), r));
  } catch {
    return JSON.stringify(
      "[unable to serialize, circular reference is too complex to analyze]"
    );
  } finally {
    for (; Tr.length !== 0; ) {
      var s = Tr.pop();
      s.length === 4
        ? Object.defineProperty(s[0], s[1], s[3])
        : (s[0][s[1]] = s[2]);
    }
  }
  return i;
}
function on(e, t, r, n) {
  var i = Object.getOwnPropertyDescriptor(n, r);
  i.get !== void 0
    ? i.configurable
      ? (Object.defineProperty(n, r, { value: e }), Tr.push([n, r, t, i]))
      : Mr.push([t, r, e])
    : ((n[r] = e), Tr.push([n, r, t]));
}
function Fo(e, t, r, n, i, s, c) {
  s += 1;
  var o;
  if (typeof e == "object" && e !== null) {
    for (o = 0; o < n.length; o++)
      if (n[o] === e) {
        on(Qu, e, t, i);
        return;
      }
    if (typeof c.depthLimit < "u" && s > c.depthLimit) {
      on(Oi, e, t, i);
      return;
    }
    if (typeof c.edgesLimit < "u" && r + 1 > c.edgesLimit) {
      on(Oi, e, t, i);
      return;
    }
    if ((n.push(e), Array.isArray(e)))
      for (o = 0; o < e.length; o++) Fo(e[o], o, o, n, e, s, c);
    else {
      var u = Object.keys(e);
      for (o = 0; o < u.length; o++) {
        var d = u[o];
        Fo(e[d], d, o, n, e, s, c);
      }
    }
    n.pop();
  }
}
function i_(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function Xu(e, t, r, n) {
  typeof n > "u" && (n = Yu());
  var i = Do(e, "", 0, [], void 0, 0, n) || e,
    s;
  try {
    Mr.length === 0
      ? (s = JSON.stringify(i, t, r))
      : (s = JSON.stringify(i, eh(t), r));
  } catch {
    return JSON.stringify(
      "[unable to serialize, circular reference is too complex to analyze]"
    );
  } finally {
    for (; Tr.length !== 0; ) {
      var c = Tr.pop();
      c.length === 4
        ? Object.defineProperty(c[0], c[1], c[3])
        : (c[0][c[1]] = c[2]);
    }
  }
  return s;
}
function Do(e, t, r, n, i, s, c) {
  s += 1;
  var o;
  if (typeof e == "object" && e !== null) {
    for (o = 0; o < n.length; o++)
      if (n[o] === e) {
        on(Qu, e, t, i);
        return;
      }
    try {
      if (typeof e.toJSON == "function") return;
    } catch {
      return;
    }
    if (typeof c.depthLimit < "u" && s > c.depthLimit) {
      on(Oi, e, t, i);
      return;
    }
    if (typeof c.edgesLimit < "u" && r + 1 > c.edgesLimit) {
      on(Oi, e, t, i);
      return;
    }
    if ((n.push(e), Array.isArray(e)))
      for (o = 0; o < e.length; o++) Do(e[o], o, o, n, e, s, c);
    else {
      var u = {},
        d = Object.keys(e).sort(i_);
      for (o = 0; o < d.length; o++) {
        var m = d[o];
        Do(e[m], m, o, n, e, s, c), (u[m] = e[m]);
      }
      if (typeof i < "u") Tr.push([i, t, e]), (i[t] = u);
      else return u;
    }
    n.pop();
  }
}
function eh(e) {
  return (
    (e =
      typeof e < "u"
        ? e
        : function (t, r) {
            return r;
          }),
    function (t, r) {
      if (Mr.length > 0)
        for (var n = 0; n < Mr.length; n++) {
          var i = Mr[n];
          if (i[1] === t && i[0] === r) {
            (r = i[2]), Mr.splice(n, 1);
            break;
          }
        }
      return e.call(this, t, r);
    }
  );
}
Object.defineProperty(er, "__esModule", { value: !0 });
er.EthereumProviderError = er.EthereumRpcError = void 0;
const s_ = n_;
let th = class extends Error {
  constructor(t, r, n) {
    if (!Number.isInteger(t)) throw new Error('"code" must be an integer.');
    if (!r || typeof r != "string")
      throw new Error('"message" must be a nonempty string.');
    super(r), (this.code = t), n !== void 0 && (this.data = n);
  }
  serialize() {
    const t = { code: this.code, message: this.message };
    return (
      this.data !== void 0 && (t.data = this.data),
      this.stack && (t.stack = this.stack),
      t
    );
  }
  toString() {
    return s_.default(this.serialize(), c_, 2);
  }
};
er.EthereumRpcError = th;
let o_ = class extends th {
  constructor(t, r, n) {
    if (!a_(t))
      throw new Error(
        '"code" must be an integer such that: 1000 <= code <= 4999'
      );
    super(t, r, n);
  }
};
er.EthereumProviderError = o_;
function a_(e) {
  return Number.isInteger(e) && e >= 1e3 && e <= 4999;
}
function c_(e, t) {
  if (t !== "[Circular]") return t;
}
var pa = {},
  tr = {};
Object.defineProperty(tr, "__esModule", { value: !0 });
tr.errorValues = tr.errorCodes = void 0;
tr.errorCodes = {
  rpc: {
    invalidInput: -32e3,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603,
  },
  provider: {
    userRejectedRequest: 4001,
    unauthorized: 4100,
    unsupportedMethod: 4200,
    disconnected: 4900,
    chainDisconnected: 4901,
  },
};
tr.errorValues = {
  "-32700": {
    standard: "JSON RPC 2.0",
    message:
      "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
  },
  "-32600": {
    standard: "JSON RPC 2.0",
    message: "The JSON sent is not a valid Request object.",
  },
  "-32601": {
    standard: "JSON RPC 2.0",
    message: "The method does not exist / is not available.",
  },
  "-32602": {
    standard: "JSON RPC 2.0",
    message: "Invalid method parameter(s).",
  },
  "-32603": { standard: "JSON RPC 2.0", message: "Internal JSON-RPC error." },
  "-32000": { standard: "EIP-1474", message: "Invalid input." },
  "-32001": { standard: "EIP-1474", message: "Resource not found." },
  "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
  "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
  "-32004": { standard: "EIP-1474", message: "Method not supported." },
  "-32005": { standard: "EIP-1474", message: "Request limit exceeded." },
  4001: { standard: "EIP-1193", message: "User rejected the request." },
  4100: {
    standard: "EIP-1193",
    message:
      "The requested account and/or method has not been authorized by the user.",
  },
  4200: {
    standard: "EIP-1193",
    message: "The requested method is not supported by this Ethereum provider.",
  },
  4900: {
    standard: "EIP-1193",
    message: "The provider is disconnected from all chains.",
  },
  4901: {
    standard: "EIP-1193",
    message: "The provider is disconnected from the specified chain.",
  },
};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.serializeError =
      e.isValidCode =
      e.getMessageFromCode =
      e.JSON_RPC_SERVER_ERROR_MESSAGE =
        void 0);
  const t = tr,
    r = er,
    n = t.errorCodes.rpc.internal,
    i = "Unspecified error message. This is a bug, please report it.",
    s = { code: n, message: c(n) };
  e.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
  function c(w, k = i) {
    if (Number.isInteger(w)) {
      const L = w.toString();
      if (g(t.errorValues, L)) return t.errorValues[L].message;
      if (d(w)) return e.JSON_RPC_SERVER_ERROR_MESSAGE;
    }
    return k;
  }
  e.getMessageFromCode = c;
  function o(w) {
    if (!Number.isInteger(w)) return !1;
    const k = w.toString();
    return !!(t.errorValues[k] || d(w));
  }
  e.isValidCode = o;
  function u(w, { fallbackError: k = s, shouldIncludeStack: L = !1 } = {}) {
    var H, D;
    if (!k || !Number.isInteger(k.code) || typeof k.message != "string")
      throw new Error(
        "Must provide fallback error with integer number code and string message."
      );
    if (w instanceof r.EthereumRpcError) return w.serialize();
    const I = {};
    if (
      w &&
      typeof w == "object" &&
      !Array.isArray(w) &&
      g(w, "code") &&
      o(w.code)
    ) {
      const $ = w;
      (I.code = $.code),
        $.message && typeof $.message == "string"
          ? ((I.message = $.message), g($, "data") && (I.data = $.data))
          : ((I.message = c(I.code)), (I.data = { originalError: m(w) }));
    } else {
      I.code = k.code;
      const $ = (H = w) === null || H === void 0 ? void 0 : H.message;
      (I.message = $ && typeof $ == "string" ? $ : k.message),
        (I.data = { originalError: m(w) });
    }
    const T = (D = w) === null || D === void 0 ? void 0 : D.stack;
    return L && w && T && typeof T == "string" && (I.stack = T), I;
  }
  e.serializeError = u;
  function d(w) {
    return w >= -32099 && w <= -32e3;
  }
  function m(w) {
    return w && typeof w == "object" && !Array.isArray(w)
      ? Object.assign({}, w)
      : w;
  }
  function g(w, k) {
    return Object.prototype.hasOwnProperty.call(w, k);
  }
})(pa);
var as = {};
Object.defineProperty(as, "__esModule", { value: !0 });
as.ethErrors = void 0;
const ga = er,
  rh = pa,
  ct = tr;
as.ethErrors = {
  rpc: {
    parse: (e) => yt(ct.errorCodes.rpc.parse, e),
    invalidRequest: (e) => yt(ct.errorCodes.rpc.invalidRequest, e),
    invalidParams: (e) => yt(ct.errorCodes.rpc.invalidParams, e),
    methodNotFound: (e) => yt(ct.errorCodes.rpc.methodNotFound, e),
    internal: (e) => yt(ct.errorCodes.rpc.internal, e),
    server: (e) => {
      if (!e || typeof e != "object" || Array.isArray(e))
        throw new Error(
          "Ethereum RPC Server errors must provide single object argument."
        );
      const { code: t } = e;
      if (!Number.isInteger(t) || t > -32005 || t < -32099)
        throw new Error(
          '"code" must be an integer such that: -32099 <= code <= -32005'
        );
      return yt(t, e);
    },
    invalidInput: (e) => yt(ct.errorCodes.rpc.invalidInput, e),
    resourceNotFound: (e) => yt(ct.errorCodes.rpc.resourceNotFound, e),
    resourceUnavailable: (e) => yt(ct.errorCodes.rpc.resourceUnavailable, e),
    transactionRejected: (e) => yt(ct.errorCodes.rpc.transactionRejected, e),
    methodNotSupported: (e) => yt(ct.errorCodes.rpc.methodNotSupported, e),
    limitExceeded: (e) => yt(ct.errorCodes.rpc.limitExceeded, e),
  },
  provider: {
    userRejectedRequest: (e) =>
      kn(ct.errorCodes.provider.userRejectedRequest, e),
    unauthorized: (e) => kn(ct.errorCodes.provider.unauthorized, e),
    unsupportedMethod: (e) => kn(ct.errorCodes.provider.unsupportedMethod, e),
    disconnected: (e) => kn(ct.errorCodes.provider.disconnected, e),
    chainDisconnected: (e) => kn(ct.errorCodes.provider.chainDisconnected, e),
    custom: (e) => {
      if (!e || typeof e != "object" || Array.isArray(e))
        throw new Error(
          "Ethereum Provider custom errors must provide single object argument."
        );
      const { code: t, message: r, data: n } = e;
      if (!r || typeof r != "string")
        throw new Error('"message" must be a nonempty string');
      return new ga.EthereumProviderError(t, r, n);
    },
  },
};
function yt(e, t) {
  const [r, n] = nh(t);
  return new ga.EthereumRpcError(e, r || rh.getMessageFromCode(e), n);
}
function kn(e, t) {
  const [r, n] = nh(t);
  return new ga.EthereumProviderError(e, r || rh.getMessageFromCode(e), n);
}
function nh(e) {
  if (e) {
    if (typeof e == "string") return [e];
    if (typeof e == "object" && !Array.isArray(e)) {
      const { message: t, data: r } = e;
      if (t && typeof t != "string")
        throw new Error("Must specify string message.");
      return [t || void 0, r];
    }
  }
  return [];
}
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.getMessageFromCode =
      e.serializeError =
      e.EthereumProviderError =
      e.EthereumRpcError =
      e.ethErrors =
      e.errorCodes =
        void 0);
  const t = er;
  Object.defineProperty(e, "EthereumRpcError", {
    enumerable: !0,
    get: function () {
      return t.EthereumRpcError;
    },
  }),
    Object.defineProperty(e, "EthereumProviderError", {
      enumerable: !0,
      get: function () {
        return t.EthereumProviderError;
      },
    });
  const r = pa;
  Object.defineProperty(e, "serializeError", {
    enumerable: !0,
    get: function () {
      return r.serializeError;
    },
  }),
    Object.defineProperty(e, "getMessageFromCode", {
      enumerable: !0,
      get: function () {
        return r.getMessageFromCode;
      },
    });
  const n = as;
  Object.defineProperty(e, "ethErrors", {
    enumerable: !0,
    get: function () {
      return n.ethErrors;
    },
  });
  const i = tr;
  Object.defineProperty(e, "errorCodes", {
    enumerable: !0,
    get: function () {
      return i.errorCodes;
    },
  });
})(Ku);
var l_ =
  (te && te.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(ri, "__esModule", { value: !0 });
ri.JsonRpcEngine = void 0;
const u_ = l_(da),
  vt = Ku;
class Wt extends u_.default {
  constructor() {
    super(), (this._middleware = []);
  }
  push(t) {
    this._middleware.push(t);
  }
  handle(t, r) {
    if (r && typeof r != "function")
      throw new Error('"callback" must be a function if provided.');
    return Array.isArray(t)
      ? r
        ? this._handleBatch(t, r)
        : this._handleBatch(t)
      : r
      ? this._handle(t, r)
      : this._promiseHandle(t);
  }
  asMiddleware() {
    return async (t, r, n, i) => {
      try {
        const [s, c, o] = await Wt._runAllMiddleware(t, r, this._middleware);
        return c
          ? (await Wt._runReturnHandlers(o), i(s))
          : n(async (u) => {
              try {
                await Wt._runReturnHandlers(o);
              } catch (d) {
                return u(d);
              }
              return u();
            });
      } catch (s) {
        return i(s);
      }
    };
  }
  async _handleBatch(t, r) {
    try {
      const n = await Promise.all(t.map(this._promiseHandle.bind(this)));
      return r ? r(null, n) : n;
    } catch (n) {
      if (r) return r(n);
      throw n;
    }
  }
  _promiseHandle(t) {
    return new Promise((r) => {
      this._handle(t, (n, i) => {
        r(i);
      });
    });
  }
  async _handle(t, r) {
    if (!t || Array.isArray(t) || typeof t != "object") {
      const c = new vt.EthereumRpcError(
        vt.errorCodes.rpc.invalidRequest,
        `Requests must be plain objects. Received: ${typeof t}`,
        { request: t }
      );
      return r(c, { id: void 0, jsonrpc: "2.0", error: c });
    }
    if (typeof t.method != "string") {
      const c = new vt.EthereumRpcError(
        vt.errorCodes.rpc.invalidRequest,
        `Must specify a string method. Received: ${typeof t.method}`,
        { request: t }
      );
      return r(c, { id: t.id, jsonrpc: "2.0", error: c });
    }
    const n = Object.assign({}, t),
      i = { id: n.id, jsonrpc: n.jsonrpc };
    let s = null;
    try {
      await this._processRequest(n, i);
    } catch (c) {
      s = c;
    }
    return (
      s && (delete i.result, i.error || (i.error = vt.serializeError(s))),
      r(s, i)
    );
  }
  async _processRequest(t, r) {
    const [n, i, s] = await Wt._runAllMiddleware(t, r, this._middleware);
    if ((Wt._checkForCompletion(t, r, i), await Wt._runReturnHandlers(s), n))
      throw n;
  }
  static async _runAllMiddleware(t, r, n) {
    const i = [];
    let s = null,
      c = !1;
    for (const o of n)
      if ((([s, c] = await Wt._runMiddleware(t, r, o, i)), c)) break;
    return [s, c, i.reverse()];
  }
  static _runMiddleware(t, r, n, i) {
    return new Promise((s) => {
      const c = (u) => {
          const d = u || r.error;
          d && (r.error = vt.serializeError(d)), s([d, !0]);
        },
        o = (u) => {
          r.error
            ? c(r.error)
            : (u &&
                (typeof u != "function" &&
                  c(
                    new vt.EthereumRpcError(
                      vt.errorCodes.rpc.internal,
                      `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof u}" for request:
${uo(t)}`,
                      { request: t }
                    )
                  ),
                i.push(u)),
              s([null, !1]));
        };
      try {
        n(t, r, o, c);
      } catch (u) {
        c(u);
      }
    });
  }
  static async _runReturnHandlers(t) {
    for (const r of t)
      await new Promise((n, i) => {
        r((s) => (s ? i(s) : n()));
      });
  }
  static _checkForCompletion(t, r, n) {
    if (!("result" in r) && !("error" in r))
      throw new vt.EthereumRpcError(
        vt.errorCodes.rpc.internal,
        `JsonRpcEngine: Response has no error or result for request:
${uo(t)}`,
        { request: t }
      );
    if (!n)
      throw new vt.EthereumRpcError(
        vt.errorCodes.rpc.internal,
        `JsonRpcEngine: Nothing ended request:
${uo(t)}`,
        { request: t }
      );
  }
}
ri.JsonRpcEngine = Wt;
function uo(e) {
  return JSON.stringify(e, null, 2);
}
var cs = {};
Object.defineProperty(cs, "__esModule", { value: !0 });
cs.mergeMiddleware = void 0;
const h_ = ri;
function f_(e) {
  const t = new h_.JsonRpcEngine();
  return e.forEach((r) => t.push(r)), t.asMiddleware();
}
cs.mergeMiddleware = f_;
(function (e) {
  var t =
      (te && te.__createBinding) ||
      (Object.create
        ? function (n, i, s, c) {
            c === void 0 && (c = s),
              Object.defineProperty(n, c, {
                enumerable: !0,
                get: function () {
                  return i[s];
                },
              });
          }
        : function (n, i, s, c) {
            c === void 0 && (c = s), (n[c] = i[s]);
          }),
    r =
      (te && te.__exportStar) ||
      function (n, i) {
        for (var s in n)
          s !== "default" &&
            !Object.prototype.hasOwnProperty.call(i, s) &&
            t(i, n, s);
      };
  Object.defineProperty(e, "__esModule", { value: !0 }),
    r(is, e),
    r(ss, e),
    r(os, e),
    r(ti, e),
    r(ri, e),
    r(cs, e);
})(fa);
var ih = {},
  ma = {};
const _a = jn(Uh);
var ls = {};
Object.defineProperty(ls, "__esModule", { value: !0 });
var Gc = _a,
  d_ = (function () {
    function e(t) {
      if (((this._maxConcurrency = t), (this._queue = []), t <= 0))
        throw new Error("semaphore must be initialized to a positive value");
      this._value = t;
    }
    return (
      (e.prototype.acquire = function () {
        var t = this,
          r = this.isLocked(),
          n = new Promise(function (i) {
            return t._queue.push(i);
          });
        return r || this._dispatch(), n;
      }),
      (e.prototype.runExclusive = function (t) {
        return Gc.__awaiter(this, void 0, void 0, function () {
          var r, n, i;
          return Gc.__generator(this, function (s) {
            switch (s.label) {
              case 0:
                return [4, this.acquire()];
              case 1:
                (r = s.sent()), (n = r[0]), (i = r[1]), (s.label = 2);
              case 2:
                return s.trys.push([2, , 4, 5]), [4, t(n)];
              case 3:
                return [2, s.sent()];
              case 4:
                return i(), [7];
              case 5:
                return [2];
            }
          });
        });
      }),
      (e.prototype.isLocked = function () {
        return this._value <= 0;
      }),
      (e.prototype.release = function () {
        if (this._maxConcurrency > 1)
          throw new Error(
            "this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead"
          );
        if (this._currentReleaser) {
          var t = this._currentReleaser;
          (this._currentReleaser = void 0), t();
        }
      }),
      (e.prototype._dispatch = function () {
        var t = this,
          r = this._queue.shift();
        if (r) {
          var n = !1;
          (this._currentReleaser = function () {
            n || ((n = !0), t._value++, t._dispatch());
          }),
            r([this._value--, this._currentReleaser]);
        }
      }),
      e
    );
  })();
ls.default = d_;
Object.defineProperty(ma, "__esModule", { value: !0 });
var Jc = _a,
  p_ = ls,
  g_ = (function () {
    function e() {
      this._semaphore = new p_.default(1);
    }
    return (
      (e.prototype.acquire = function () {
        return Jc.__awaiter(this, void 0, void 0, function () {
          var t, r;
          return Jc.__generator(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, this._semaphore.acquire()];
              case 1:
                return (t = n.sent()), (r = t[1]), [2, r];
            }
          });
        });
      }),
      (e.prototype.runExclusive = function (t) {
        return this._semaphore.runExclusive(function () {
          return t();
        });
      }),
      (e.prototype.isLocked = function () {
        return this._semaphore.isLocked();
      }),
      (e.prototype.release = function () {
        this._semaphore.release();
      }),
      e
    );
  })();
ma.default = g_;
var us = {};
Object.defineProperty(us, "__esModule", { value: !0 });
us.withTimeout = void 0;
var wi = _a;
function m_(e, t, r) {
  var n = this;
  return (
    r === void 0 && (r = new Error("timeout")),
    {
      acquire: function () {
        return new Promise(function (i, s) {
          return wi.__awaiter(n, void 0, void 0, function () {
            var c, o, u;
            return wi.__generator(this, function (d) {
              switch (d.label) {
                case 0:
                  return (
                    (c = !1),
                    setTimeout(function () {
                      (c = !0), s(r);
                    }, t),
                    [4, e.acquire()]
                  );
                case 1:
                  return (
                    (o = d.sent()),
                    c ? ((u = Array.isArray(o) ? o[1] : o), u()) : i(o),
                    [2]
                  );
              }
            });
          });
        });
      },
      runExclusive: function (i) {
        return wi.__awaiter(this, void 0, void 0, function () {
          var s, c;
          return wi.__generator(this, function (o) {
            switch (o.label) {
              case 0:
                (s = function () {}), (o.label = 1);
              case 1:
                return o.trys.push([1, , 7, 8]), [4, this.acquire()];
              case 2:
                return (
                  (c = o.sent()),
                  Array.isArray(c) ? ((s = c[1]), [4, i(c[0])]) : [3, 4]
                );
              case 3:
                return [2, o.sent()];
              case 4:
                return (s = c), [4, i()];
              case 5:
                return [2, o.sent()];
              case 6:
                return [3, 8];
              case 7:
                return s(), [7];
              case 8:
                return [2];
            }
          });
        });
      },
      release: function () {
        e.release();
      },
      isLocked: function () {
        return e.isLocked();
      },
    }
  );
}
us.withTimeout = m_;
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.withTimeout = e.Semaphore = e.Mutex = void 0);
  var t = ma;
  Object.defineProperty(e, "Mutex", {
    enumerable: !0,
    get: function () {
      return t.default;
    },
  });
  var r = ls;
  Object.defineProperty(e, "Semaphore", {
    enumerable: !0,
    get: function () {
      return r.default;
    },
  });
  var n = us;
  Object.defineProperty(e, "withTimeout", {
    enumerable: !0,
    get: function () {
      return n.withTimeout;
    },
  });
})(ih);
var __ = v_,
  y_ = Object.prototype.hasOwnProperty;
function v_() {
  for (var e = {}, t = 0; t < arguments.length; t++) {
    var r = arguments[t];
    for (var n in r) y_.call(r, n) && (e[n] = r[n]);
  }
  return e;
}
const w_ = __,
  b_ = Zo();
var E_ = le;
function le(e) {
  const t = this;
  t.currentProvider = e;
}
le.prototype.getBalance = ni(2, "eth_getBalance");
le.prototype.getCode = ni(2, "eth_getCode");
le.prototype.getTransactionCount = ni(2, "eth_getTransactionCount");
le.prototype.getStorageAt = ni(3, "eth_getStorageAt");
le.prototype.call = ni(2, "eth_call");
le.prototype.protocolVersion = ge("eth_protocolVersion");
le.prototype.syncing = ge("eth_syncing");
le.prototype.coinbase = ge("eth_coinbase");
le.prototype.mining = ge("eth_mining");
le.prototype.hashrate = ge("eth_hashrate");
le.prototype.gasPrice = ge("eth_gasPrice");
le.prototype.accounts = ge("eth_accounts");
le.prototype.blockNumber = ge("eth_blockNumber");
le.prototype.getBlockTransactionCountByHash = ge(
  "eth_getBlockTransactionCountByHash"
);
le.prototype.getBlockTransactionCountByNumber = ge(
  "eth_getBlockTransactionCountByNumber"
);
le.prototype.getUncleCountByBlockHash = ge("eth_getUncleCountByBlockHash");
le.prototype.getUncleCountByBlockNumber = ge("eth_getUncleCountByBlockNumber");
le.prototype.sign = ge("eth_sign");
le.prototype.sendTransaction = ge("eth_sendTransaction");
le.prototype.sendRawTransaction = ge("eth_sendRawTransaction");
le.prototype.estimateGas = ge("eth_estimateGas");
le.prototype.getBlockByHash = ge("eth_getBlockByHash");
le.prototype.getBlockByNumber = ge("eth_getBlockByNumber");
le.prototype.getTransactionByHash = ge("eth_getTransactionByHash");
le.prototype.getTransactionByBlockHashAndIndex = ge(
  "eth_getTransactionByBlockHashAndIndex"
);
le.prototype.getTransactionByBlockNumberAndIndex = ge(
  "eth_getTransactionByBlockNumberAndIndex"
);
le.prototype.getTransactionReceipt = ge("eth_getTransactionReceipt");
le.prototype.getUncleByBlockHashAndIndex = ge(
  "eth_getUncleByBlockHashAndIndex"
);
le.prototype.getUncleByBlockNumberAndIndex = ge(
  "eth_getUncleByBlockNumberAndIndex"
);
le.prototype.getCompilers = ge("eth_getCompilers");
le.prototype.compileLLL = ge("eth_compileLLL");
le.prototype.compileSolidity = ge("eth_compileSolidity");
le.prototype.compileSerpent = ge("eth_compileSerpent");
le.prototype.newFilter = ge("eth_newFilter");
le.prototype.newBlockFilter = ge("eth_newBlockFilter");
le.prototype.newPendingTransactionFilter = ge(
  "eth_newPendingTransactionFilter"
);
le.prototype.uninstallFilter = ge("eth_uninstallFilter");
le.prototype.getFilterChanges = ge("eth_getFilterChanges");
le.prototype.getFilterLogs = ge("eth_getFilterLogs");
le.prototype.getLogs = ge("eth_getLogs");
le.prototype.getWork = ge("eth_getWork");
le.prototype.submitWork = ge("eth_submitWork");
le.prototype.submitHashrate = ge("eth_submitHashrate");
le.prototype.sendAsync = function (e, t) {
  this.currentProvider.sendAsync(S_(e), function (n, i) {
    if (
      (!n &&
        i.error &&
        (n = new Error("EthQuery - RPC Error - " + i.error.message)),
      n)
    )
      return t(n);
    t(null, i.result);
  });
};
function ge(e) {
  return function () {
    const t = this;
    var r = [].slice.call(arguments),
      n = r.pop();
    t.sendAsync({ method: e, params: r }, n);
  };
}
function ni(e, t) {
  return function () {
    const r = this;
    var n = [].slice.call(arguments),
      i = n.pop();
    n.length < e && n.push("latest"), r.sendAsync({ method: t, params: n }, i);
  };
}
function S_(e) {
  return w_({ id: b_(), jsonrpc: "2.0", params: [] }, e);
}
const Zc = (e, t, r, n) =>
    function (...i) {
      const s = t.promiseModule;
      return new s((c, o) => {
        t.multiArgs
          ? i.push((...d) => {
              t.errorFirst ? (d[0] ? o(d) : (d.shift(), c(d))) : c(d);
            })
          : t.errorFirst
          ? i.push((d, m) => {
              d ? o(d) : c(m);
            })
          : i.push(c),
          Reflect.apply(e, this === r ? n : this, i);
      });
    },
  Kc = new WeakMap();
var R_ = (e, t) => {
  t = {
    exclude: [/.+(?:Sync|Stream)$/],
    errorFirst: !0,
    promiseModule: Promise,
    ...t,
  };
  const r = typeof e;
  if (!(e !== null && (r === "object" || r === "function")))
    throw new TypeError(
      `Expected \`input\` to be a \`Function\` or \`Object\`, got \`${
        e === null ? "null" : r
      }\``
    );
  const n = (c, o) => {
      let u = Kc.get(c);
      if ((u || ((u = {}), Kc.set(c, u)), o in u)) return u[o];
      const d = (L) =>
          typeof L == "string" || typeof o == "symbol" ? o === L : L.test(o),
        m = Reflect.getOwnPropertyDescriptor(c, o),
        g = m === void 0 || m.writable || m.configurable,
        k = (t.include ? t.include.some(d) : !t.exclude.some(d)) && g;
      return (u[o] = k), k;
    },
    i = new WeakMap(),
    s = new Proxy(e, {
      apply(c, o, u) {
        const d = i.get(c);
        if (d) return Reflect.apply(d, o, u);
        const m = t.excludeMain ? c : Zc(c, t, s, c);
        return i.set(c, m), Reflect.apply(m, o, u);
      },
      get(c, o) {
        const u = c[o];
        if (!n(c, o) || u === Function.prototype[o]) return u;
        const d = i.get(u);
        if (d) return d;
        if (typeof u == "function") {
          const m = Zc(u, t, s, c);
          return i.set(u, m), m;
        }
        return u;
      },
    });
  return s;
};
const C_ = Zn.default;
let M_ = class extends C_ {
  constructor() {
    super(), (this.updates = []);
  }
  async initialize() {}
  async update() {
    throw new Error("BaseFilter - no update method specified");
  }
  addResults(t) {
    (this.updates = this.updates.concat(t)),
      t.forEach((r) => this.emit("update", r));
  }
  addInitialResults(t) {}
  getChangesAndClear() {
    const t = this.updates;
    return (this.updates = []), t;
  }
};
var ya = M_;
const x_ = ya;
let k_ = class extends x_ {
  constructor() {
    super(), (this.allResults = []);
  }
  async update() {
    throw new Error("BaseFilterWithHistory - no update method specified");
  }
  addResults(t) {
    (this.allResults = this.allResults.concat(t)), super.addResults(t);
  }
  addInitialResults(t) {
    (this.allResults = this.allResults.concat(t)), super.addInitialResults(t);
  }
  getAllResults() {
    return this.allResults;
  }
};
var I_ = k_,
  ii = {
    minBlockRef: A_,
    maxBlockRef: T_,
    sortBlockRefs: va,
    bnToHex: N_,
    blockRefIsNumber: L_,
    hexToInt: $i,
    incrementHexInt: B_,
    intToHex: sh,
    unsafeRandomBytes: P_,
  };
function A_(...e) {
  return va(e)[0];
}
function T_(...e) {
  const t = va(e);
  return t[t.length - 1];
}
function va(e) {
  return e.sort((t, r) =>
    t === "latest" || r === "earliest"
      ? 1
      : r === "latest" || t === "earliest"
      ? -1
      : $i(t) - $i(r)
  );
}
function N_(e) {
  return "0x" + e.toString(16);
}
function L_(e) {
  return e && !["earliest", "latest", "pending"].includes(e);
}
function $i(e) {
  return e == null ? e : Number.parseInt(e, 16);
}
function B_(e) {
  if (e == null) return e;
  const t = $i(e);
  return sh(t + 1);
}
function sh(e) {
  if (e == null) return e;
  let t = e.toString(16);
  return t.length % 2 && (t = "0" + t), "0x" + t;
}
function P_(e) {
  let t = "0x";
  for (let r = 0; r < e; r++) (t += Qc()), (t += Qc());
  return t;
}
function Qc() {
  return Math.floor(Math.random() * 16).toString(16);
}
const O_ = E_,
  $_ = R_,
  F_ = I_,
  {
    bnToHex: tb,
    hexToInt: bi,
    incrementHexInt: D_,
    minBlockRef: j_,
    blockRefIsNumber: U_,
  } = ii;
let H_ = class extends F_ {
  constructor({ provider: t, params: r }) {
    super(),
      (this.type = "log"),
      (this.ethQuery = new O_(t)),
      (this.params = Object.assign(
        { fromBlock: "latest", toBlock: "latest", address: void 0, topics: [] },
        r
      )),
      this.params.address &&
        (Array.isArray(this.params.address) ||
          (this.params.address = [this.params.address]),
        (this.params.address = this.params.address.map((n) =>
          n.toLowerCase()
        )));
  }
  async initialize({ currentBlock: t }) {
    let r = this.params.fromBlock;
    ["latest", "pending"].includes(r) && (r = t),
      r === "earliest" && (r = "0x0"),
      (this.params.fromBlock = r);
    const n = j_(this.params.toBlock, t),
      i = Object.assign({}, this.params, { toBlock: n }),
      s = await this._fetchLogs(i);
    this.addInitialResults(s);
  }
  async update({ oldBlock: t, newBlock: r }) {
    const n = r;
    let i;
    t ? (i = D_(t)) : (i = r);
    const s = Object.assign({}, this.params, { fromBlock: i, toBlock: n }),
      o = (await this._fetchLogs(s)).filter((u) => this.matchLog(u));
    this.addResults(o);
  }
  async _fetchLogs(t) {
    return await $_((n) => this.ethQuery.getLogs(t, n))();
  }
  matchLog(t) {
    if (
      bi(this.params.fromBlock) >= bi(t.blockNumber) ||
      (U_(this.params.toBlock) && bi(this.params.toBlock) <= bi(t.blockNumber))
    )
      return !1;
    const r = t.address && t.address.toLowerCase();
    return this.params.address && r && !this.params.address.includes(r)
      ? !1
      : this.params.topics.every((i, s) => {
          let c = t.topics[s];
          if (!c) return !1;
          c = c.toLowerCase();
          let o = Array.isArray(i) ? i : [i];
          return o.includes(null)
            ? !0
            : ((o = o.map((m) => m.toLowerCase())), o.includes(c));
        });
  }
};
var W_ = H_,
  wa = V_;
async function V_({ provider: e, fromBlock: t, toBlock: r }) {
  t || (t = r);
  const n = Yc(t),
    s = Yc(r) - n + 1,
    c = Array(s)
      .fill()
      .map((u, d) => n + d)
      .map(q_);
  let o = await Promise.all(
    c.map((u) => G_(e, "eth_getBlockByNumber", [u, !1]))
  );
  return (o = o.filter((u) => u !== null)), o;
}
function Yc(e) {
  return e == null ? e : Number.parseInt(e, 16);
}
function q_(e) {
  return e == null ? e : "0x" + e.toString(16);
}
function z_(e, t) {
  return new Promise((r, n) => {
    e.sendAsync(t, (i, s) => {
      i
        ? n(i)
        : s.error
        ? n(s.error)
        : s.result
        ? r(s.result)
        : n(new Error("Result was empty"));
    });
  });
}
async function G_(e, t, r) {
  for (let n = 0; n < 3; n++)
    try {
      return await z_(e, { id: 1, jsonrpc: "2.0", method: t, params: r });
    } catch (i) {
      console.error(`provider.sendAsync failed: ${i.stack || i.message || i}`);
    }
  return null;
}
const J_ = ya,
  Z_ = wa,
  { incrementHexInt: K_ } = ii;
let Q_ = class extends J_ {
  constructor({ provider: t, params: r }) {
    super(), (this.type = "block"), (this.provider = t);
  }
  async update({ oldBlock: t, newBlock: r }) {
    const n = r,
      i = K_(t),
      c = (await Z_({ provider: this.provider, fromBlock: i, toBlock: n })).map(
        (o) => o.hash
      );
    this.addResults(c);
  }
};
var Y_ = Q_;
const X_ = ya,
  ey = wa,
  { incrementHexInt: ty } = ii;
let ry = class extends X_ {
  constructor({ provider: t }) {
    super(), (this.type = "tx"), (this.provider = t);
  }
  async update({ oldBlock: t }) {
    const r = t,
      n = ty(t),
      i = await ey({ provider: this.provider, fromBlock: n, toBlock: r }),
      s = [];
    for (const c of i) s.push(...c.transactions);
    this.addResults(s);
  }
};
var ny = ry;
const iy = ih.Mutex,
  { createAsyncMiddleware: sy, createScaffoldMiddleware: oy } = fa,
  ay = W_,
  cy = Y_,
  ly = ny,
  { intToHex: oh, hexToInt: ho } = ii;
var uy = hy;
function hy({ blockTracker: e, provider: t }) {
  let r = 0,
    n = {};
  const i = new iy(),
    s = fy({ mutex: i }),
    c = oy({
      eth_newFilter: s(fo(u)),
      eth_newBlockFilter: s(fo(d)),
      eth_newPendingTransactionFilter: s(fo(m)),
      eth_uninstallFilter: s(Ni(k)),
      eth_getFilterChanges: s(Ni(g)),
      eth_getFilterLogs: s(Ni(w)),
    }),
    o = async ({ oldBlock: T, newBlock: $ }) => {
      if (n.length === 0) return;
      const V = await i.acquire();
      try {
        await Promise.all(
          Kr(n).map(async (j) => {
            try {
              await j.update({ oldBlock: T, newBlock: $ });
            } catch (z) {
              console.error(z);
            }
          })
        );
      } catch (j) {
        console.error(j);
      }
      V();
    };
  return (
    (c.newLogFilter = u),
    (c.newBlockFilter = d),
    (c.newPendingTransactionFilter = m),
    (c.uninstallFilter = k),
    (c.getFilterChanges = g),
    (c.getFilterLogs = w),
    (c.destroy = () => {
      D();
    }),
    c
  );
  async function u(T) {
    const $ = new ay({ provider: t, params: T });
    return await L($), $;
  }
  async function d() {
    const T = new cy({ provider: t });
    return await L(T), T;
  }
  async function m() {
    const T = new ly({ provider: t });
    return await L(T), T;
  }
  async function g(T) {
    const $ = ho(T),
      V = n[$];
    if (!V) throw new Error(`No filter for index "${$}"`);
    return V.getChangesAndClear();
  }
  async function w(T) {
    const $ = ho(T),
      V = n[$];
    if (!V) throw new Error(`No filter for index "${$}"`);
    let j = [];
    return V.type === "log" && (j = V.getAllResults()), j;
  }
  async function k(T) {
    const $ = ho(T),
      j = !!n[$];
    return j && (await H($)), j;
  }
  async function L(T) {
    const $ = Kr(n).length,
      V = await e.getLatestBlock();
    await T.initialize({ currentBlock: V }),
      r++,
      (n[r] = T),
      (T.id = r),
      (T.idHex = oh(r));
    const j = Kr(n).length;
    return I({ prevFilterCount: $, newFilterCount: j }), r;
  }
  async function H(T) {
    const $ = Kr(n).length;
    delete n[T];
    const V = Kr(n).length;
    I({ prevFilterCount: $, newFilterCount: V });
  }
  async function D() {
    const T = Kr(n).length;
    (n = {}), I({ prevFilterCount: T, newFilterCount: 0 });
  }
  function I({ prevFilterCount: T, newFilterCount: $ }) {
    if (T === 0 && $ > 0) {
      e.on("sync", o);
      return;
    }
    if (T > 0 && $ === 0) {
      e.removeListener("sync", o);
      return;
    }
  }
}
function fo(e) {
  return Ni(async (...t) => {
    const r = await e(...t);
    return oh(r.id);
  });
}
function Ni(e) {
  return sy(async (t, r) => {
    const n = await e.apply(null, t.params);
    r.result = n;
  });
}
function fy({ mutex: e }) {
  return (t) => async (r, n, i, s) => {
    (await e.acquire())(), t(r, n, i, s);
  };
}
function Kr(e, t) {
  const r = [];
  for (let n in e) r.push(e[n]);
  return r;
}
const dy = Zn.default,
  { createAsyncMiddleware: Xc, createScaffoldMiddleware: py } = fa,
  gy = uy,
  { unsafeRandomBytes: my, incrementHexInt: _y } = ii,
  yy = wa;
var vy = wy;
function wy({ blockTracker: e, provider: t }) {
  const r = {},
    n = gy({ blockTracker: e, provider: t });
  let i = !1;
  const s = new dy(),
    c = py({ eth_subscribe: Xc(o), eth_unsubscribe: Xc(u) });
  return (c.destroy = m), { events: s, middleware: c };
  async function o(g, w) {
    if (i)
      throw new Error(
        "SubscriptionManager - attempting to use after destroying"
      );
    const k = g.params[0],
      L = my(16);
    let H;
    switch (k) {
      case "newHeads":
        H = D({ subId: L });
        break;
      case "logs":
        const T = g.params[1],
          $ = await n.newLogFilter(T);
        H = I({ subId: L, filter: $ });
        break;
      default:
        throw new Error(
          `SubscriptionManager - unsupported subscription type "${k}"`
        );
    }
    (r[L] = H), (w.result = L);
    return;
    function D({ subId: T }) {
      const $ = {
        type: k,
        destroy: async () => {
          e.removeListener("sync", $.update);
        },
        update: async ({ oldBlock: V, newBlock: j }) => {
          const z = j,
            ee = _y(V);
          (await yy({ provider: t, fromBlock: ee, toBlock: z }))
            .map(by)
            .filter((ue) => ue !== null)
            .forEach((ue) => {
              d(T, ue);
            });
        },
      };
      return e.on("sync", $.update), $;
    }
    function I({ subId: T, filter: $ }) {
      return (
        $.on("update", (j) => d(T, j)),
        { type: k, destroy: async () => await n.uninstallFilter($.idHex) }
      );
    }
  }
  async function u(g, w) {
    if (i)
      throw new Error(
        "SubscriptionManager - attempting to use after destroying"
      );
    const k = g.params[0],
      L = r[k];
    if (!L) {
      w.result = !1;
      return;
    }
    delete r[k], await L.destroy(), (w.result = !0);
  }
  function d(g, w) {
    s.emit("notification", {
      jsonrpc: "2.0",
      method: "eth_subscription",
      params: { subscription: g, result: w },
    });
  }
  function m() {
    s.removeAllListeners();
    for (const g in r) r[g].destroy(), delete r[g];
    i = !0;
  }
}
function by(e) {
  return e == null
    ? null
    : {
        hash: e.hash,
        parentHash: e.parentHash,
        sha3Uncles: e.sha3Uncles,
        miner: e.miner,
        stateRoot: e.stateRoot,
        transactionsRoot: e.transactionsRoot,
        receiptsRoot: e.receiptsRoot,
        logsBloom: e.logsBloom,
        difficulty: e.difficulty,
        number: e.number,
        gasLimit: e.gasLimit,
        gasUsed: e.gasUsed,
        nonce: e.nonce,
        mixHash: e.mixHash,
        timestamp: e.timestamp,
        extraData: e.extraData,
      };
}
var ba = {},
  Dn = {},
  hs = {};
Object.defineProperty(hs, "__esModule", { value: !0 });
hs.walletLogo = void 0;
const Ey = (e, t) => {
  let r;
  switch (e) {
    case "standard":
      return (
        (r = t),
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `
      );
    case "circle":
      return (
        (r = t),
        `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${t}' height='${r}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`
      );
    case "text":
      return (
        (r = (0.1 * t).toFixed(2)),
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`
      );
    case "textWithLogo":
      return (
        (r = (0.25 * t).toFixed(2)),
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
      );
    case "textLight":
      return (
        (r = (0.1 * t).toFixed(2)),
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`
      );
    case "textWithLogoLight":
      return (
        (r = (0.25 * t).toFixed(2)),
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
      );
    default:
      return (
        (r = t),
        `data:image/svg+xml,%3Csvg width='${t}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `
      );
  }
};
hs.walletLogo = Ey;
var fs = {};
Object.defineProperty(fs, "__esModule", { value: !0 });
fs.LINK_API_URL = void 0;
fs.LINK_API_URL = "https://www.walletlink.org";
var X = {},
  si = {},
  Zt = {};
Object.defineProperty(Zt, "__esModule", { value: !0 });
Zt.errorValues = Zt.standardErrorCodes = void 0;
Zt.standardErrorCodes = {
  rpc: {
    invalidInput: -32e3,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603,
  },
  provider: {
    userRejectedRequest: 4001,
    unauthorized: 4100,
    unsupportedMethod: 4200,
    disconnected: 4900,
    chainDisconnected: 4901,
    unsupportedChain: 4902,
  },
};
Zt.errorValues = {
  "-32700": {
    standard: "JSON RPC 2.0",
    message:
      "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
  },
  "-32600": {
    standard: "JSON RPC 2.0",
    message: "The JSON sent is not a valid Request object.",
  },
  "-32601": {
    standard: "JSON RPC 2.0",
    message: "The method does not exist / is not available.",
  },
  "-32602": {
    standard: "JSON RPC 2.0",
    message: "Invalid method parameter(s).",
  },
  "-32603": { standard: "JSON RPC 2.0", message: "Internal JSON-RPC error." },
  "-32000": { standard: "EIP-1474", message: "Invalid input." },
  "-32001": { standard: "EIP-1474", message: "Resource not found." },
  "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
  "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
  "-32004": { standard: "EIP-1474", message: "Method not supported." },
  "-32005": { standard: "EIP-1474", message: "Request limit exceeded." },
  4001: { standard: "EIP-1193", message: "User rejected the request." },
  4100: {
    standard: "EIP-1193",
    message:
      "The requested account and/or method has not been authorized by the user.",
  },
  4200: {
    standard: "EIP-1193",
    message: "The requested method is not supported by this Ethereum provider.",
  },
  4900: {
    standard: "EIP-1193",
    message: "The provider is disconnected from all chains.",
  },
  4901: {
    standard: "EIP-1193",
    message: "The provider is disconnected from the specified chain.",
  },
  4902: { standard: "EIP-3085", message: "Unrecognized chain ID." },
};
var ds = {},
  ps = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.serialize =
      e.getErrorCode =
      e.isValidCode =
      e.getMessageFromCode =
      e.JSON_RPC_SERVER_ERROR_MESSAGE =
        void 0);
  const t = Zt,
    r = "Unspecified error message.";
  e.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
  function n(w, k = r) {
    if (w && Number.isInteger(w)) {
      const L = w.toString();
      if (m(t.errorValues, L)) return t.errorValues[L].message;
      if (u(w)) return e.JSON_RPC_SERVER_ERROR_MESSAGE;
    }
    return k;
  }
  e.getMessageFromCode = n;
  function i(w) {
    if (!Number.isInteger(w)) return !1;
    const k = w.toString();
    return !!(t.errorValues[k] || u(w));
  }
  e.isValidCode = i;
  function s(w) {
    var k;
    if (typeof w == "number") return w;
    if (c(w)) return (k = w.code) !== null && k !== void 0 ? k : w.errorCode;
  }
  e.getErrorCode = s;
  function c(w) {
    return (
      typeof w == "object" &&
      w !== null &&
      (typeof w.code == "number" || typeof w.errorCode == "number")
    );
  }
  function o(w, { shouldIncludeStack: k = !1 } = {}) {
    const L = {};
    if (
      w &&
      typeof w == "object" &&
      !Array.isArray(w) &&
      m(w, "code") &&
      i(w.code)
    ) {
      const H = w;
      (L.code = H.code),
        H.message && typeof H.message == "string"
          ? ((L.message = H.message), m(H, "data") && (L.data = H.data))
          : ((L.message = n(L.code)), (L.data = { originalError: d(w) }));
    } else
      (L.code = t.standardErrorCodes.rpc.internal),
        (L.message = g(w, "message") ? w.message : r),
        (L.data = { originalError: d(w) });
    return k && (L.stack = g(w, "stack") ? w.stack : void 0), L;
  }
  e.serialize = o;
  function u(w) {
    return w >= -32099 && w <= -32e3;
  }
  function d(w) {
    return w && typeof w == "object" && !Array.isArray(w)
      ? Object.assign({}, w)
      : w;
  }
  function m(w, k) {
    return Object.prototype.hasOwnProperty.call(w, k);
  }
  function g(w, k) {
    return (
      typeof w == "object" && w !== null && k in w && typeof w[k] == "string"
    );
  }
})(ps);
Object.defineProperty(ds, "__esModule", { value: !0 });
ds.standardErrors = void 0;
const st = Zt,
  ah = ps;
ds.standardErrors = {
  rpc: {
    parse: (e) => wt(st.standardErrorCodes.rpc.parse, e),
    invalidRequest: (e) => wt(st.standardErrorCodes.rpc.invalidRequest, e),
    invalidParams: (e) => wt(st.standardErrorCodes.rpc.invalidParams, e),
    methodNotFound: (e) => wt(st.standardErrorCodes.rpc.methodNotFound, e),
    internal: (e) => wt(st.standardErrorCodes.rpc.internal, e),
    server: (e) => {
      if (!e || typeof e != "object" || Array.isArray(e))
        throw new Error(
          "Ethereum RPC Server errors must provide single object argument."
        );
      const { code: t } = e;
      if (!Number.isInteger(t) || t > -32005 || t < -32099)
        throw new Error(
          '"code" must be an integer such that: -32099 <= code <= -32005'
        );
      return wt(t, e);
    },
    invalidInput: (e) => wt(st.standardErrorCodes.rpc.invalidInput, e),
    resourceNotFound: (e) => wt(st.standardErrorCodes.rpc.resourceNotFound, e),
    resourceUnavailable: (e) =>
      wt(st.standardErrorCodes.rpc.resourceUnavailable, e),
    transactionRejected: (e) =>
      wt(st.standardErrorCodes.rpc.transactionRejected, e),
    methodNotSupported: (e) =>
      wt(st.standardErrorCodes.rpc.methodNotSupported, e),
    limitExceeded: (e) => wt(st.standardErrorCodes.rpc.limitExceeded, e),
  },
  provider: {
    userRejectedRequest: (e) =>
      Qr(st.standardErrorCodes.provider.userRejectedRequest, e),
    unauthorized: (e) => Qr(st.standardErrorCodes.provider.unauthorized, e),
    unsupportedMethod: (e) =>
      Qr(st.standardErrorCodes.provider.unsupportedMethod, e),
    disconnected: (e) => Qr(st.standardErrorCodes.provider.disconnected, e),
    chainDisconnected: (e) =>
      Qr(st.standardErrorCodes.provider.chainDisconnected, e),
    unsupportedChain: (e) =>
      Qr(st.standardErrorCodes.provider.unsupportedChain, e),
    custom: (e) => {
      if (!e || typeof e != "object" || Array.isArray(e))
        throw new Error(
          "Ethereum Provider custom errors must provide single object argument."
        );
      const { code: t, message: r, data: n } = e;
      if (!r || typeof r != "string")
        throw new Error('"message" must be a nonempty string');
      return new uh(t, r, n);
    },
  },
};
function wt(e, t) {
  const [r, n] = ch(t);
  return new lh(e, r || (0, ah.getMessageFromCode)(e), n);
}
function Qr(e, t) {
  const [r, n] = ch(t);
  return new uh(e, r || (0, ah.getMessageFromCode)(e), n);
}
function ch(e) {
  if (e) {
    if (typeof e == "string") return [e];
    if (typeof e == "object" && !Array.isArray(e)) {
      const { message: t, data: r } = e;
      if (t && typeof t != "string")
        throw new Error("Must specify string message.");
      return [t || void 0, r];
    }
  }
  return [];
}
class lh extends Error {
  constructor(t, r, n) {
    if (!Number.isInteger(t)) throw new Error('"code" must be an integer.');
    if (!r || typeof r != "string")
      throw new Error('"message" must be a nonempty string.');
    super(r), (this.code = t), n !== void 0 && (this.data = n);
  }
}
class uh extends lh {
  constructor(t, r, n) {
    if (!Sy(t))
      throw new Error(
        '"code" must be an integer such that: 1000 <= code <= 4999'
      );
    super(t, r, n);
  }
}
function Sy(e) {
  return Number.isInteger(e) && e >= 1e3 && e <= 4999;
}
var gs = {},
  En = {};
Object.defineProperty(En, "__esModule", { value: !0 });
En.isErrorResponse = void 0;
function Ry(e) {
  return e.errorMessage !== void 0;
}
En.isErrorResponse = Ry;
var Sn = {};
Object.defineProperty(Sn, "__esModule", { value: !0 });
Sn.LIB_VERSION = void 0;
Sn.LIB_VERSION = "3.9.3";
Object.defineProperty(gs, "__esModule", { value: !0 });
gs.serializeError = void 0;
const Cy = En,
  My = Sn,
  xy = Zt,
  ky = ps;
function Iy(e, t) {
  const r = (0, ky.serialize)(Ay(e), { shouldIncludeStack: !0 }),
    n = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
  n.searchParams.set("version", My.LIB_VERSION),
    n.searchParams.set("code", r.code.toString());
  const i = Ty(r.data, t);
  return (
    i && n.searchParams.set("method", i),
    n.searchParams.set("message", r.message),
    Object.assign(Object.assign({}, r), { docUrl: n.href })
  );
}
gs.serializeError = Iy;
function Ay(e) {
  return typeof e == "string"
    ? { message: e, code: xy.standardErrorCodes.rpc.internal }
    : (0, Cy.isErrorResponse)(e)
    ? Object.assign(Object.assign({}, e), {
        message: e.errorMessage,
        code: e.errorCode,
        data: { method: e.method },
      })
    : e;
}
function Ty(e, t) {
  const r = e == null ? void 0 : e.method;
  if (r) return r;
  if (t !== void 0) {
    if (typeof t == "string") return t;
    if (Array.isArray(t)) {
      if (t.length > 0) return t[0].method;
    } else return t.method;
  }
}
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.standardErrors =
      e.standardErrorCodes =
      e.serializeError =
      e.getMessageFromCode =
      e.getErrorCode =
        void 0);
  const t = Zt;
  Object.defineProperty(e, "standardErrorCodes", {
    enumerable: !0,
    get: function () {
      return t.standardErrorCodes;
    },
  });
  const r = ds;
  Object.defineProperty(e, "standardErrors", {
    enumerable: !0,
    get: function () {
      return r.standardErrors;
    },
  });
  const n = gs;
  Object.defineProperty(e, "serializeError", {
    enumerable: !0,
    get: function () {
      return n.serializeError;
    },
  });
  const i = ps;
  Object.defineProperty(e, "getErrorCode", {
    enumerable: !0,
    get: function () {
      return i.getErrorCode;
    },
  }),
    Object.defineProperty(e, "getMessageFromCode", {
      enumerable: !0,
      get: function () {
        return i.getMessageFromCode;
      },
    });
})(si);
var Xe = {};
Object.defineProperty(Xe, "__esModule", { value: !0 });
Xe.ProviderType =
  Xe.RegExpString =
  Xe.IntNumber =
  Xe.BigIntString =
  Xe.AddressString =
  Xe.HexString =
  Xe.OpaqueType =
    void 0;
function oi() {
  return (e) => e;
}
Xe.OpaqueType = oi;
Xe.HexString = oi();
Xe.AddressString = oi();
Xe.BigIntString = oi();
function Ny(e) {
  return Math.floor(e);
}
Xe.IntNumber = Ny;
Xe.RegExpString = oi();
var el;
(function (e) {
  (e.CoinbaseWallet = "CoinbaseWallet"),
    (e.MetaMask = "MetaMask"),
    (e.Unselected = "");
})(el || (Xe.ProviderType = el = {}));
var Ly =
  (te && te.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(X, "__esModule", { value: !0 });
X.isMobileWeb =
  X.getLocation =
  X.isInIFrame =
  X.createQrUrl =
  X.getFavicon =
  X.range =
  X.isBigNumber =
  X.ensureParsedJSONObject =
  X.ensureBN =
  X.ensureRegExpString =
  X.ensureIntNumber =
  X.ensureBuffer =
  X.ensureAddressString =
  X.ensureEvenLengthHexString =
  X.ensureHexString =
  X.isHexString =
  X.prepend0x =
  X.strip0x =
  X.has0xPrefix =
  X.hexStringFromIntNumber =
  X.intNumberFromHexString =
  X.bigIntStringFromBN =
  X.hexStringFromBuffer =
  X.hexStringToUint8Array =
  X.uint8ArrayToHex =
  X.randomBytesHex =
    void 0;
const Yt = Ly(Di),
  Fr = si,
  Rt = Xe,
  hh = /^[0-9]*$/,
  fh = /^[a-f0-9]*$/;
function By(e) {
  return dh(crypto.getRandomValues(new Uint8Array(e)));
}
X.randomBytesHex = By;
function dh(e) {
  return [...e].map((t) => t.toString(16).padStart(2, "0")).join("");
}
X.uint8ArrayToHex = dh;
function Py(e) {
  return new Uint8Array(e.match(/.{1,2}/g).map((t) => parseInt(t, 16)));
}
X.hexStringToUint8Array = Py;
function Oy(e, t = !1) {
  const r = e.toString("hex");
  return (0, Rt.HexString)(t ? `0x${r}` : r);
}
X.hexStringFromBuffer = Oy;
function $y(e) {
  return (0, Rt.BigIntString)(e.toString(10));
}
X.bigIntStringFromBN = $y;
function Fy(e) {
  return (0, Rt.IntNumber)(new Yt.default(ci(e, !1), 16).toNumber());
}
X.intNumberFromHexString = Fy;
function Dy(e) {
  return (0, Rt.HexString)(`0x${new Yt.default(e).toString(16)}`);
}
X.hexStringFromIntNumber = Dy;
function Ea(e) {
  return e.startsWith("0x") || e.startsWith("0X");
}
X.has0xPrefix = Ea;
function ms(e) {
  return Ea(e) ? e.slice(2) : e;
}
X.strip0x = ms;
function ph(e) {
  return Ea(e) ? `0x${e.slice(2)}` : `0x${e}`;
}
X.prepend0x = ph;
function ai(e) {
  if (typeof e != "string") return !1;
  const t = ms(e).toLowerCase();
  return fh.test(t);
}
X.isHexString = ai;
function gh(e, t = !1) {
  if (typeof e == "string") {
    const r = ms(e).toLowerCase();
    if (fh.test(r)) return (0, Rt.HexString)(t ? `0x${r}` : r);
  }
  throw Fr.standardErrors.rpc.invalidParams(
    `"${String(e)}" is not a hexadecimal string`
  );
}
X.ensureHexString = gh;
function ci(e, t = !1) {
  let r = gh(e, !1);
  return (
    r.length % 2 === 1 && (r = (0, Rt.HexString)(`0${r}`)),
    t ? (0, Rt.HexString)(`0x${r}`) : r
  );
}
X.ensureEvenLengthHexString = ci;
function jy(e) {
  if (typeof e == "string") {
    const t = ms(e).toLowerCase();
    if (ai(t) && t.length === 40) return (0, Rt.AddressString)(ph(t));
  }
  throw Fr.standardErrors.rpc.invalidParams(
    `Invalid Ethereum address: ${String(e)}`
  );
}
X.ensureAddressString = jy;
function Uy(e) {
  if (Buffer.isBuffer(e)) return e;
  if (typeof e == "string") {
    if (ai(e)) {
      const t = ci(e, !1);
      return Buffer.from(t, "hex");
    }
    return Buffer.from(e, "utf8");
  }
  throw Fr.standardErrors.rpc.invalidParams(`Not binary data: ${String(e)}`);
}
X.ensureBuffer = Uy;
function mh(e) {
  if (typeof e == "number" && Number.isInteger(e)) return (0, Rt.IntNumber)(e);
  if (typeof e == "string") {
    if (hh.test(e)) return (0, Rt.IntNumber)(Number(e));
    if (ai(e))
      return (0, Rt.IntNumber)(new Yt.default(ci(e, !1), 16).toNumber());
  }
  throw Fr.standardErrors.rpc.invalidParams(`Not an integer: ${String(e)}`);
}
X.ensureIntNumber = mh;
function Hy(e) {
  if (e instanceof RegExp) return (0, Rt.RegExpString)(e.toString());
  throw Fr.standardErrors.rpc.invalidParams(`Not a RegExp: ${String(e)}`);
}
X.ensureRegExpString = Hy;
function Wy(e) {
  if (e !== null && (Yt.default.isBN(e) || _h(e)))
    return new Yt.default(e.toString(10), 10);
  if (typeof e == "number") return new Yt.default(mh(e));
  if (typeof e == "string") {
    if (hh.test(e)) return new Yt.default(e, 10);
    if (ai(e)) return new Yt.default(ci(e, !1), 16);
  }
  throw Fr.standardErrors.rpc.invalidParams(`Not an integer: ${String(e)}`);
}
X.ensureBN = Wy;
function Vy(e) {
  if (typeof e == "string") return JSON.parse(e);
  if (typeof e == "object") return e;
  throw Fr.standardErrors.rpc.invalidParams(
    `Not a JSON string or an object: ${String(e)}`
  );
}
X.ensureParsedJSONObject = Vy;
function _h(e) {
  if (e == null || typeof e.constructor != "function") return !1;
  const { constructor: t } = e;
  return typeof t.config == "function" && typeof t.EUCLID == "number";
}
X.isBigNumber = _h;
function qy(e, t) {
  return Array.from({ length: t - e }, (r, n) => e + n);
}
X.range = qy;
function zy() {
  const e =
      document.querySelector('link[sizes="192x192"]') ||
      document.querySelector('link[sizes="180x180"]') ||
      document.querySelector('link[rel="icon"]') ||
      document.querySelector('link[rel="shortcut icon"]'),
    { protocol: t, host: r } = document.location,
    n = e ? e.getAttribute("href") : null;
  return !n || n.startsWith("javascript:") || n.startsWith("vbscript:")
    ? null
    : n.startsWith("http://") ||
      n.startsWith("https://") ||
      n.startsWith("data:")
    ? n
    : n.startsWith("//")
    ? t + n
    : `${t}//${r}${n}`;
}
X.getFavicon = zy;
function Gy(e, t, r, n, i, s) {
  const c = n ? "parent-id" : "id",
    o = new URLSearchParams({
      [c]: e,
      secret: t,
      server: r,
      v: i,
      chainId: s.toString(),
    }).toString();
  return `${r}/#/link?${o}`;
}
X.createQrUrl = Gy;
function yh() {
  try {
    return window.frameElement !== null;
  } catch {
    return !1;
  }
}
X.isInIFrame = yh;
function Jy() {
  try {
    return yh() && window.top ? window.top.location : window.location;
  } catch {
    return window.location;
  }
}
X.getLocation = Jy;
function Zy() {
  var e;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    (e = window == null ? void 0 : window.navigator) === null || e === void 0
      ? void 0
      : e.userAgent
  );
}
X.isMobileWeb = Zy;
var _s = {};
Object.defineProperty(_s, "__esModule", { value: !0 });
_s.ScopedLocalStorage = void 0;
class Ky {
  constructor(t) {
    this.scope = t;
  }
  setItem(t, r) {
    localStorage.setItem(this.scopedKey(t), r);
  }
  getItem(t) {
    return localStorage.getItem(this.scopedKey(t));
  }
  removeItem(t) {
    localStorage.removeItem(this.scopedKey(t));
  }
  clear() {
    const t = this.scopedKey(""),
      r = [];
    for (let n = 0; n < localStorage.length; n++) {
      const i = localStorage.key(n);
      typeof i == "string" && i.startsWith(t) && r.push(i);
    }
    r.forEach((n) => localStorage.removeItem(n));
  }
  scopedKey(t) {
    return `${this.scope}:${t}`;
  }
}
_s.ScopedLocalStorage = Ky;
var dn = {},
  li = {},
  ui = {},
  Rn = {};
Object.defineProperty(Rn, "__esModule", { value: !0 });
Rn.EVENTS = void 0;
Rn.EVENTS = {
  STARTED_CONNECTING: "walletlink_sdk.started.connecting",
  CONNECTED_STATE_CHANGE: "walletlink_sdk.connected",
  DISCONNECTED: "walletlink_sdk.disconnected",
  METADATA_DESTROYED: "walletlink_sdk_metadata_destroyed",
  LINKED: "walletlink_sdk.linked",
  FAILURE: "walletlink_sdk.generic_failure",
  SESSION_CONFIG_RECEIVED: "walletlink_sdk.session_config_event_received",
  ETH_ACCOUNTS_STATE: "walletlink_sdk.eth_accounts_state",
  SESSION_STATE_CHANGE: "walletlink_sdk.session_state_change",
  UNLINKED_ERROR_STATE: "walletlink_sdk.unlinked_error_state",
  SKIPPED_CLEARING_SESSION: "walletlink_sdk.skipped_clearing_session",
  GENERAL_ERROR: "walletlink_sdk.general_error",
  WEB3_REQUEST: "walletlink_sdk.web3.request",
  WEB3_REQUEST_PUBLISHED: "walletlink_sdk.web3.request_published",
  WEB3_RESPONSE: "walletlink_sdk.web3.response",
  METHOD_NOT_IMPLEMENTED: "walletlink_sdk.method_not_implemented",
  UNKNOWN_ADDRESS_ENCOUNTERED: "walletlink_sdk.unknown_address_encountered",
};
var Et = {};
Object.defineProperty(Et, "__esModule", { value: !0 });
Et.RelayAbstract =
  Et.APP_VERSION_KEY =
  Et.LOCAL_STORAGE_ADDRESSES_KEY =
  Et.WALLET_USER_NAME_KEY =
    void 0;
const tl = si;
Et.WALLET_USER_NAME_KEY = "walletUsername";
Et.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses";
Et.APP_VERSION_KEY = "AppVersion";
class Qy {
  async makeEthereumJSONRPCRequest(t, r) {
    if (!r) throw new Error("Error: No jsonRpcUrl provided");
    return window
      .fetch(r, {
        method: "POST",
        body: JSON.stringify(t),
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      })
      .then((n) => n.json())
      .then((n) => {
        if (!n) throw tl.standardErrors.rpc.parse({});
        const i = n,
          { error: s } = i;
        if (s) throw (0, tl.serializeError)(s, t.method);
        return i;
      });
  }
}
Et.RelayAbstract = Qy;
var Cn = {};
Object.defineProperty(Cn, "__esModule", { value: !0 });
Cn.Session = void 0;
const rl = zf,
  nl = X,
  il = "session:id",
  sl = "session:secret",
  ol = "session:linked";
class Sa {
  constructor(t, r, n, i) {
    (this._storage = t),
      (this._id = r || (0, nl.randomBytesHex)(16)),
      (this._secret = n || (0, nl.randomBytesHex)(32)),
      (this._key = new rl.sha256()
        .update(`${this._id}, ${this._secret} WalletLink`)
        .digest("hex")),
      (this._linked = !!i);
  }
  static load(t) {
    const r = t.getItem(il),
      n = t.getItem(ol),
      i = t.getItem(sl);
    return r && i ? new Sa(t, r, i, n === "1") : null;
  }
  static hash(t) {
    return new rl.sha256().update(t).digest("hex");
  }
  get id() {
    return this._id;
  }
  get secret() {
    return this._secret;
  }
  get key() {
    return this._key;
  }
  get linked() {
    return this._linked;
  }
  set linked(t) {
    (this._linked = t), this.persistLinked();
  }
  save() {
    return (
      this._storage.setItem(il, this._id),
      this._storage.setItem(sl, this._secret),
      this.persistLinked(),
      this
    );
  }
  persistLinked() {
    this._storage.setItem(ol, this._linked ? "1" : "0");
  }
}
Cn.Session = Sa;
var ys = {},
  vs = {};
Object.defineProperty(vs, "__esModule", { value: !0 });
vs.Cipher = void 0;
const Ei = X;
class Yy {
  constructor(t) {
    this.secret = t;
  }
  async encrypt(t) {
    const r = this.secret;
    if (r.length !== 64) throw Error("secret must be 256 bits");
    const n = crypto.getRandomValues(new Uint8Array(12)),
      i = await crypto.subtle.importKey(
        "raw",
        (0, Ei.hexStringToUint8Array)(r),
        { name: "aes-gcm" },
        !1,
        ["encrypt", "decrypt"]
      ),
      s = new TextEncoder(),
      c = await window.crypto.subtle.encrypt(
        { name: "AES-GCM", iv: n },
        i,
        s.encode(t)
      ),
      o = 16,
      u = c.slice(c.byteLength - o),
      d = c.slice(0, c.byteLength - o),
      m = new Uint8Array(u),
      g = new Uint8Array(d),
      w = new Uint8Array([...n, ...m, ...g]);
    return (0, Ei.uint8ArrayToHex)(w);
  }
  async decrypt(t) {
    const r = this.secret;
    if (r.length !== 64) throw Error("secret must be 256 bits");
    return new Promise((n, i) => {
      (async function () {
        const s = await crypto.subtle.importKey(
            "raw",
            (0, Ei.hexStringToUint8Array)(r),
            { name: "aes-gcm" },
            !1,
            ["encrypt", "decrypt"]
          ),
          c = (0, Ei.hexStringToUint8Array)(t),
          o = c.slice(0, 12),
          u = c.slice(12, 28),
          d = c.slice(28),
          m = new Uint8Array([...d, ...u]),
          g = { name: "AES-GCM", iv: new Uint8Array(o) };
        try {
          const w = await window.crypto.subtle.decrypt(g, s, m),
            k = new TextDecoder();
          n(k.decode(w));
        } catch (w) {
          i(w);
        }
      })();
    });
  }
}
vs.Cipher = Yy;
var ws = {};
Object.defineProperty(ws, "__esModule", { value: !0 });
ws.WalletLinkHTTP = void 0;
class Xy {
  constructor(t, r, n) {
    (this.linkAPIUrl = t), (this.sessionId = r);
    const i = `${r}:${n}`;
    this.auth = `Basic ${btoa(i)}`;
  }
  async markUnseenEventsAsSeen(t) {
    return Promise.all(
      t.map((r) =>
        fetch(`${this.linkAPIUrl}/events/${r.eventId}/seen`, {
          method: "POST",
          headers: { Authorization: this.auth },
        })
      )
    ).catch((r) => console.error("Unabled to mark event as failed:", r));
  }
  async fetchUnseenEvents() {
    var t;
    const r = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
      headers: { Authorization: this.auth },
    });
    if (r.ok) {
      const { events: n, error: i } = await r.json();
      if (i) throw new Error(`Check unseen events failed: ${i}`);
      const s =
        (t =
          n == null
            ? void 0
            : n
                .filter((c) => c.event === "Web3Response")
                .map((c) => ({
                  type: "Event",
                  sessionId: this.sessionId,
                  eventId: c.id,
                  event: c.event,
                  data: c.data,
                }))) !== null && t !== void 0
          ? t
          : [];
      return this.markUnseenEventsAsSeen(s), s;
    }
    throw new Error(`Check unseen events failed: ${r.status}`);
  }
}
ws.WalletLinkHTTP = Xy;
var pn = {};
Object.defineProperty(pn, "__esModule", { value: !0 });
pn.WalletLinkWebSocket = pn.ConnectionState = void 0;
var rn;
(function (e) {
  (e[(e.DISCONNECTED = 0)] = "DISCONNECTED"),
    (e[(e.CONNECTING = 1)] = "CONNECTING"),
    (e[(e.CONNECTED = 2)] = "CONNECTED");
})(rn || (pn.ConnectionState = rn = {}));
class ev {
  setConnectionStateListener(t) {
    this.connectionStateListener = t;
  }
  setIncomingDataListener(t) {
    this.incomingDataListener = t;
  }
  constructor(t, r = WebSocket) {
    (this.WebSocketClass = r),
      (this.webSocket = null),
      (this.pendingData = []),
      (this.url = t.replace(/^http/, "ws"));
  }
  async connect() {
    if (this.webSocket) throw new Error("webSocket object is not null");
    return new Promise((t, r) => {
      var n;
      let i;
      try {
        this.webSocket = i = new this.WebSocketClass(this.url);
      } catch (s) {
        r(s);
        return;
      }
      (n = this.connectionStateListener) === null ||
        n === void 0 ||
        n.call(this, rn.CONNECTING),
        (i.onclose = (s) => {
          var c;
          this.clearWebSocket(),
            r(new Error(`websocket error ${s.code}: ${s.reason}`)),
            (c = this.connectionStateListener) === null ||
              c === void 0 ||
              c.call(this, rn.DISCONNECTED);
        }),
        (i.onopen = (s) => {
          var c;
          t(),
            (c = this.connectionStateListener) === null ||
              c === void 0 ||
              c.call(this, rn.CONNECTED),
            this.pendingData.length > 0 &&
              ([...this.pendingData].forEach((u) => this.sendData(u)),
              (this.pendingData = []));
        }),
        (i.onmessage = (s) => {
          var c, o;
          if (s.data === "h")
            (c = this.incomingDataListener) === null ||
              c === void 0 ||
              c.call(this, { type: "Heartbeat" });
          else
            try {
              const u = JSON.parse(s.data);
              (o = this.incomingDataListener) === null ||
                o === void 0 ||
                o.call(this, u);
            } catch {}
        });
    });
  }
  disconnect() {
    var t;
    const { webSocket: r } = this;
    if (r) {
      this.clearWebSocket(),
        (t = this.connectionStateListener) === null ||
          t === void 0 ||
          t.call(this, rn.DISCONNECTED),
        (this.connectionStateListener = void 0),
        (this.incomingDataListener = void 0);
      try {
        r.close();
      } catch {}
    }
  }
  sendData(t) {
    const { webSocket: r } = this;
    if (!r) {
      this.pendingData.push(t), this.connect();
      return;
    }
    r.send(t);
  }
  clearWebSocket() {
    const { webSocket: t } = this;
    t &&
      ((this.webSocket = null),
      (t.onclose = null),
      (t.onerror = null),
      (t.onmessage = null),
      (t.onopen = null));
  }
}
pn.WalletLinkWebSocket = ev;
Object.defineProperty(ys, "__esModule", { value: !0 });
ys.WalletLinkConnection = void 0;
const Yr = Xe,
  tv = vs,
  Lt = Rn,
  al = Et,
  Xr = Cn,
  rv = ws,
  Si = pn,
  cl = 1e4,
  nv = 6e4;
class iv {
  constructor({
    session: t,
    linkAPIUrl: r,
    listener: n,
    diagnostic: i,
    WebSocketClass: s = WebSocket,
  }) {
    (this.destroyed = !1),
      (this.lastHeartbeatResponse = 0),
      (this.nextReqId = (0, Yr.IntNumber)(1)),
      (this._connected = !1),
      (this._linked = !1),
      (this.shouldFetchUnseenEventsOnConnect = !1),
      (this.requestResolutions = new Map()),
      (this.handleSessionMetadataUpdated = (o) => {
        if (!o) return;
        new Map([
          ["__destroyed", this.handleDestroyed],
          ["EthereumAddress", this.handleAccountUpdated],
          ["WalletUsername", this.handleWalletUsernameUpdated],
          ["AppVersion", this.handleAppVersionUpdated],
          [
            "ChainId",
            (d) => o.JsonRpcUrl && this.handleChainUpdated(d, o.JsonRpcUrl),
          ],
        ]).forEach((d, m) => {
          const g = o[m];
          g !== void 0 && d(g);
        });
      }),
      (this.handleDestroyed = (o) => {
        var u, d;
        o === "1" &&
          ((u = this.listener) === null || u === void 0 || u.resetAndReload(),
          (d = this.diagnostic) === null ||
            d === void 0 ||
            d.log(Lt.EVENTS.METADATA_DESTROYED, {
              alreadyDestroyed: this.isDestroyed,
              sessionIdHash: Xr.Session.hash(this.session.id),
            }));
      }),
      (this.handleAccountUpdated = async (o) => {
        var u, d;
        try {
          const m = await this.cipher.decrypt(o);
          (u = this.listener) === null || u === void 0 || u.accountUpdated(m);
        } catch {
          (d = this.diagnostic) === null ||
            d === void 0 ||
            d.log(Lt.EVENTS.GENERAL_ERROR, {
              message: "Had error decrypting",
              value: "selectedAddress",
            });
        }
      }),
      (this.handleMetadataUpdated = async (o, u) => {
        var d, m;
        try {
          const g = await this.cipher.decrypt(u);
          (d = this.listener) === null ||
            d === void 0 ||
            d.metadataUpdated(o, g);
        } catch {
          (m = this.diagnostic) === null ||
            m === void 0 ||
            m.log(Lt.EVENTS.GENERAL_ERROR, {
              message: "Had error decrypting",
              value: o,
            });
        }
      }),
      (this.handleWalletUsernameUpdated = async (o) => {
        this.handleMetadataUpdated(al.WALLET_USER_NAME_KEY, o);
      }),
      (this.handleAppVersionUpdated = async (o) => {
        this.handleMetadataUpdated(al.APP_VERSION_KEY, o);
      }),
      (this.handleChainUpdated = async (o, u) => {
        var d, m;
        try {
          const g = await this.cipher.decrypt(o),
            w = await this.cipher.decrypt(u);
          (d = this.listener) === null || d === void 0 || d.chainUpdated(g, w);
        } catch {
          (m = this.diagnostic) === null ||
            m === void 0 ||
            m.log(Lt.EVENTS.GENERAL_ERROR, {
              message: "Had error decrypting",
              value: "chainId|jsonRpcUrl",
            });
        }
      }),
      (this.session = t),
      (this.cipher = new tv.Cipher(t.secret)),
      (this.diagnostic = i),
      (this.listener = n);
    const c = new Si.WalletLinkWebSocket(`${r}/rpc`, s);
    c.setConnectionStateListener(async (o) => {
      var u;
      (u = this.diagnostic) === null ||
        u === void 0 ||
        u.log(Lt.EVENTS.CONNECTED_STATE_CHANGE, {
          state: o,
          sessionIdHash: Xr.Session.hash(t.id),
        });
      let d = !1;
      switch (o) {
        case Si.ConnectionState.DISCONNECTED:
          if (!this.destroyed) {
            const m = async () => {
              await new Promise((g) => setTimeout(g, 5e3)),
                this.destroyed ||
                  c.connect().catch(() => {
                    m();
                  });
            };
            m();
          }
          break;
        case Si.ConnectionState.CONNECTED:
          try {
            await this.authenticate(),
              this.sendIsLinked(),
              this.sendGetSessionConfig(),
              (d = !0);
          } catch {}
          this.updateLastHeartbeat(),
            setInterval(() => {
              this.heartbeat();
            }, cl),
            this.shouldFetchUnseenEventsOnConnect &&
              this.fetchUnseenEventsAPI();
          break;
        case Si.ConnectionState.CONNECTING:
          break;
      }
      this.connected !== d && (this.connected = d);
    }),
      c.setIncomingDataListener((o) => {
        var u, d, m;
        switch (o.type) {
          case "Heartbeat":
            this.updateLastHeartbeat();
            return;
          case "IsLinkedOK":
          case "Linked": {
            const g = o.type === "IsLinkedOK" ? o.linked : void 0;
            (u = this.diagnostic) === null ||
              u === void 0 ||
              u.log(Lt.EVENTS.LINKED, {
                sessionIdHash: Xr.Session.hash(t.id),
                linked: g,
                type: o.type,
                onlineGuests: o.onlineGuests,
              }),
              (this.linked = g || o.onlineGuests > 0);
            break;
          }
          case "GetSessionConfigOK":
          case "SessionConfigUpdated": {
            (d = this.diagnostic) === null ||
              d === void 0 ||
              d.log(Lt.EVENTS.SESSION_CONFIG_RECEIVED, {
                sessionIdHash: Xr.Session.hash(t.id),
                metadata_keys:
                  o && o.metadata ? Object.keys(o.metadata) : void 0,
              }),
              this.handleSessionMetadataUpdated(o.metadata);
            break;
          }
          case "Event": {
            this.handleIncomingEvent(o);
            break;
          }
        }
        o.id !== void 0 &&
          ((m = this.requestResolutions.get(o.id)) === null ||
            m === void 0 ||
            m(o));
      }),
      (this.ws = c),
      (this.http = new rv.WalletLinkHTTP(r, t.id, t.key));
  }
  connect() {
    var t;
    if (this.destroyed) throw new Error("instance is destroyed");
    (t = this.diagnostic) === null ||
      t === void 0 ||
      t.log(Lt.EVENTS.STARTED_CONNECTING, {
        sessionIdHash: Xr.Session.hash(this.session.id),
      }),
      this.ws.connect();
  }
  destroy() {
    var t;
    (this.destroyed = !0),
      this.ws.disconnect(),
      (t = this.diagnostic) === null ||
        t === void 0 ||
        t.log(Lt.EVENTS.DISCONNECTED, {
          sessionIdHash: Xr.Session.hash(this.session.id),
        }),
      (this.listener = void 0);
  }
  get isDestroyed() {
    return this.destroyed;
  }
  get connected() {
    return this._connected;
  }
  set connected(t) {
    var r, n;
    (this._connected = t),
      t && ((r = this.onceConnected) === null || r === void 0 || r.call(this)),
      (n = this.listener) === null || n === void 0 || n.connectedUpdated(t);
  }
  setOnceConnected(t) {
    return new Promise((r) => {
      this.connected
        ? t().then(r)
        : (this.onceConnected = () => {
            t().then(r), (this.onceConnected = void 0);
          });
    });
  }
  get linked() {
    return this._linked;
  }
  set linked(t) {
    var r, n;
    (this._linked = t),
      t && ((r = this.onceLinked) === null || r === void 0 || r.call(this)),
      (n = this.listener) === null || n === void 0 || n.linkedUpdated(t);
  }
  setOnceLinked(t) {
    return new Promise((r) => {
      this.linked
        ? t().then(r)
        : (this.onceLinked = () => {
            t().then(r), (this.onceLinked = void 0);
          });
    });
  }
  async handleIncomingEvent(t) {
    var r, n;
    if (!(t.type !== "Event" || t.event !== "Web3Response"))
      try {
        const i = await this.cipher.decrypt(t.data),
          s = JSON.parse(i);
        if (s.type !== "WEB3_RESPONSE") return;
        (r = this.listener) === null ||
          r === void 0 ||
          r.handleWeb3ResponseMessage(s);
      } catch {
        (n = this.diagnostic) === null ||
          n === void 0 ||
          n.log(Lt.EVENTS.GENERAL_ERROR, {
            message: "Had error decrypting",
            value: "incomingEvent",
          });
      }
  }
  async checkUnseenEvents() {
    if (!this.connected) {
      this.shouldFetchUnseenEventsOnConnect = !0;
      return;
    }
    await new Promise((t) => setTimeout(t, 250));
    try {
      await this.fetchUnseenEventsAPI();
    } catch (t) {
      console.error("Unable to check for unseen events", t);
    }
  }
  async fetchUnseenEventsAPI() {
    (this.shouldFetchUnseenEventsOnConnect = !1),
      (await this.http.fetchUnseenEvents()).forEach((r) =>
        this.handleIncomingEvent(r)
      );
  }
  async setSessionMetadata(t, r) {
    const n = {
      type: "SetSessionConfig",
      id: (0, Yr.IntNumber)(this.nextReqId++),
      sessionId: this.session.id,
      metadata: { [t]: r },
    };
    return this.setOnceConnected(async () => {
      const i = await this.makeRequest(n);
      if (i.type === "Fail")
        throw new Error(i.error || "failed to set session metadata");
    });
  }
  async publishEvent(t, r, n = !1) {
    const i = await this.cipher.encrypt(
        JSON.stringify(
          Object.assign(Object.assign({}, r), {
            origin: location.origin,
            relaySource: window.coinbaseWalletExtension
              ? "injected_sdk"
              : "sdk",
          })
        )
      ),
      s = {
        type: "PublishEvent",
        id: (0, Yr.IntNumber)(this.nextReqId++),
        sessionId: this.session.id,
        event: t,
        data: i,
        callWebhook: n,
      };
    return this.setOnceLinked(async () => {
      const c = await this.makeRequest(s);
      if (c.type === "Fail")
        throw new Error(c.error || "failed to publish event");
      return c.eventId;
    });
  }
  sendData(t) {
    this.ws.sendData(JSON.stringify(t));
  }
  updateLastHeartbeat() {
    this.lastHeartbeatResponse = Date.now();
  }
  heartbeat() {
    if (Date.now() - this.lastHeartbeatResponse > cl * 2) {
      this.ws.disconnect();
      return;
    }
    try {
      this.ws.sendData("h");
    } catch {}
  }
  async makeRequest(t, r = nv) {
    const n = t.id;
    this.sendData(t);
    let i;
    return Promise.race([
      new Promise((s, c) => {
        i = window.setTimeout(() => {
          c(new Error(`request ${n} timed out`));
        }, r);
      }),
      new Promise((s) => {
        this.requestResolutions.set(n, (c) => {
          clearTimeout(i), s(c), this.requestResolutions.delete(n);
        });
      }),
    ]);
  }
  async authenticate() {
    const t = {
        type: "HostSession",
        id: (0, Yr.IntNumber)(this.nextReqId++),
        sessionId: this.session.id,
        sessionKey: this.session.key,
      },
      r = await this.makeRequest(t);
    if (r.type === "Fail") throw new Error(r.error || "failed to authentcate");
  }
  sendIsLinked() {
    const t = {
      type: "IsLinked",
      id: (0, Yr.IntNumber)(this.nextReqId++),
      sessionId: this.session.id,
    };
    this.sendData(t);
  }
  sendGetSessionConfig() {
    const t = {
      type: "GetSessionConfig",
      id: (0, Yr.IntNumber)(this.nextReqId++),
      sessionId: this.session.id,
    };
    this.sendData(t);
  }
}
ys.WalletLinkConnection = iv;
var hi = {},
  fi = {},
  Ra = {};
Object.defineProperty(Ra, "__esModule", { value: !0 });
Ra.default =
  '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}';
var sv =
  (te && te.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(fi, "__esModule", { value: !0 });
fi.injectCssReset = void 0;
const ov = sv(Ra);
function av() {
  const e = document.createElement("style");
  (e.type = "text/css"),
    e.appendChild(document.createTextNode(ov.default)),
    document.documentElement.appendChild(e);
}
fi.injectCssReset = av;
var bs = {},
  Es = {};
function vh(e) {
  var t,
    r,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = vh(e[t])) && (n && (n += " "), (n += r));
    else for (t in e) e[t] && (n && (n += " "), (n += t));
  return n;
}
function ll() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = vh(e)) && (n && (n += " "), (n += t));
  return n;
}
const cv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, clsx: ll, default: ll },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  di = jn(cv);
var gn = {},
  Ss = {};
Object.defineProperty(Ss, "__esModule", { value: !0 });
Ss.CloseIcon = void 0;
const ul = ft;
function lv(e) {
  return (0, ul.h)(
    "svg",
    Object.assign(
      {
        width: "40",
        height: "40",
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e
    ),
    (0, ul.h)("path", {
      d: "M13.7677 13L12.3535 14.4142L18.3535 20.4142L12.3535 26.4142L13.7677 27.8284L19.7677 21.8284L25.7677 27.8284L27.1819 26.4142L21.1819 20.4142L27.1819 14.4142L25.7677 13L19.7677 19L13.7677 13Z",
    })
  );
}
Ss.CloseIcon = lv;
var Rs = {};
Object.defineProperty(Rs, "__esModule", { value: !0 });
Rs.CoinbaseWalletRound = void 0;
const Ri = ft;
function uv(e) {
  return (0, Ri.h)(
    "svg",
    Object.assign(
      {
        width: "28",
        height: "28",
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e
    ),
    (0, Ri.h)("circle", { cx: "14", cy: "14", r: "14", fill: "#0052FF" }),
    (0, Ri.h)("path", {
      d: "M23.8521 14.0003C23.8521 19.455 19.455 23.8521 14.0003 23.8521C8.54559 23.8521 4.14844 19.455 4.14844 14.0003C4.14844 8.54559 8.54559 4.14844 14.0003 4.14844C19.455 4.14844 23.8521 8.54559 23.8521 14.0003Z",
      fill: "white",
    }),
    (0, Ri.h)("path", {
      d: "M11.1855 12.5042C11.1855 12.0477 11.1855 11.7942 11.2835 11.642C11.3814 11.4899 11.4793 11.3377 11.6261 11.287C11.8219 11.1855 12.0178 11.1855 12.5073 11.1855H15.4934C15.983 11.1855 16.1788 11.1855 16.3746 11.287C16.5215 11.3884 16.6683 11.4899 16.7173 11.642C16.8152 11.8449 16.8152 12.0477 16.8152 12.5042V15.4965C16.8152 15.953 16.8152 16.2066 16.7173 16.3587C16.6194 16.5109 16.5215 16.663 16.3746 16.7137C16.1788 16.8152 15.983 16.8152 15.4934 16.8152H12.5073C12.0178 16.8152 11.8219 16.8152 11.6261 16.7137C11.4793 16.6123 11.3324 16.5109 11.2835 16.3587C11.1855 16.1558 11.1855 15.953 11.1855 15.4965V12.5042Z",
      fill: "#0052FF",
    })
  );
}
Rs.CoinbaseWalletRound = uv;
var Cs = {};
Object.defineProperty(Cs, "__esModule", { value: !0 });
Cs.QRCodeIcon = void 0;
const In = ft;
function hv(e) {
  return (0, In.h)(
    "svg",
    Object.assign(
      {
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e
    ),
    (0, In.h)("path", { d: "M3 3V8.99939L5 8.99996V5H9V3H3Z" }),
    (0, In.h)("path", { d: "M15 21L21 21V15.0006L19 15V19L15 19V21Z" }),
    (0, In.h)("path", { d: "M21 9H19V5H15.0006L15 3H21V9Z" }),
    (0, In.h)("path", { d: "M3 15V21H8.99939L8.99996 19H5L5 15H3Z" })
  );
}
Cs.QRCodeIcon = hv;
var Ms = {};
function wh(e) {
  (this.mode = gt.MODE_8BIT_BYTE), (this.data = e), (this.parsedData = []);
  for (var t = 0, r = this.data.length; t < r; t++) {
    var n = [],
      i = this.data.charCodeAt(t);
    i > 65536
      ? ((n[0] = 240 | ((i & 1835008) >>> 18)),
        (n[1] = 128 | ((i & 258048) >>> 12)),
        (n[2] = 128 | ((i & 4032) >>> 6)),
        (n[3] = 128 | (i & 63)))
      : i > 2048
      ? ((n[0] = 224 | ((i & 61440) >>> 12)),
        (n[1] = 128 | ((i & 4032) >>> 6)),
        (n[2] = 128 | (i & 63)))
      : i > 128
      ? ((n[0] = 192 | ((i & 1984) >>> 6)), (n[1] = 128 | (i & 63)))
      : (n[0] = i),
      this.parsedData.push(n);
  }
  (this.parsedData = Array.prototype.concat.apply([], this.parsedData)),
    this.parsedData.length != this.data.length &&
      (this.parsedData.unshift(191),
      this.parsedData.unshift(187),
      this.parsedData.unshift(239));
}
wh.prototype = {
  getLength: function (e) {
    return this.parsedData.length;
  },
  write: function (e) {
    for (var t = 0, r = this.parsedData.length; t < r; t++)
      e.put(this.parsedData[t], 8);
  },
};
function Ut(e, t) {
  (this.typeNumber = e),
    (this.errorCorrectLevel = t),
    (this.modules = null),
    (this.moduleCount = 0),
    (this.dataCache = null),
    (this.dataList = []);
}
Ut.prototype = {
  addData: function (e) {
    var t = new wh(e);
    this.dataList.push(t), (this.dataCache = null);
  },
  isDark: function (e, t) {
    if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t)
      throw new Error(e + "," + t);
    return this.modules[e][t];
  },
  getModuleCount: function () {
    return this.moduleCount;
  },
  make: function () {
    this.makeImpl(!1, this.getBestMaskPattern());
  },
  makeImpl: function (e, t) {
    (this.moduleCount = this.typeNumber * 4 + 17),
      (this.modules = new Array(this.moduleCount));
    for (var r = 0; r < this.moduleCount; r++) {
      this.modules[r] = new Array(this.moduleCount);
      for (var n = 0; n < this.moduleCount; n++) this.modules[r][n] = null;
    }
    this.setupPositionProbePattern(0, 0),
      this.setupPositionProbePattern(this.moduleCount - 7, 0),
      this.setupPositionProbePattern(0, this.moduleCount - 7),
      this.setupPositionAdjustPattern(),
      this.setupTimingPattern(),
      this.setupTypeInfo(e, t),
      this.typeNumber >= 7 && this.setupTypeNumber(e),
      this.dataCache == null &&
        (this.dataCache = Ut.createData(
          this.typeNumber,
          this.errorCorrectLevel,
          this.dataList
        )),
      this.mapData(this.dataCache, t);
  },
  setupPositionProbePattern: function (e, t) {
    for (var r = -1; r <= 7; r++)
      if (!(e + r <= -1 || this.moduleCount <= e + r))
        for (var n = -1; n <= 7; n++)
          t + n <= -1 ||
            this.moduleCount <= t + n ||
            ((0 <= r && r <= 6 && (n == 0 || n == 6)) ||
            (0 <= n && n <= 6 && (r == 0 || r == 6)) ||
            (2 <= r && r <= 4 && 2 <= n && n <= 4)
              ? (this.modules[e + r][t + n] = !0)
              : (this.modules[e + r][t + n] = !1));
  },
  getBestMaskPattern: function () {
    for (var e = 0, t = 0, r = 0; r < 8; r++) {
      this.makeImpl(!0, r);
      var n = Ge.getLostPoint(this);
      (r == 0 || e > n) && ((e = n), (t = r));
    }
    return t;
  },
  createMovieClip: function (e, t, r) {
    var n = e.createEmptyMovieClip(t, r),
      i = 1;
    this.make();
    for (var s = 0; s < this.modules.length; s++)
      for (var c = s * i, o = 0; o < this.modules[s].length; o++) {
        var u = o * i,
          d = this.modules[s][o];
        d &&
          (n.beginFill(0, 100),
          n.moveTo(u, c),
          n.lineTo(u + i, c),
          n.lineTo(u + i, c + i),
          n.lineTo(u, c + i),
          n.endFill());
      }
    return n;
  },
  setupTimingPattern: function () {
    for (var e = 8; e < this.moduleCount - 8; e++)
      this.modules[e][6] == null && (this.modules[e][6] = e % 2 == 0);
    for (var t = 8; t < this.moduleCount - 8; t++)
      this.modules[6][t] == null && (this.modules[6][t] = t % 2 == 0);
  },
  setupPositionAdjustPattern: function () {
    for (
      var e = Ge.getPatternPosition(this.typeNumber), t = 0;
      t < e.length;
      t++
    )
      for (var r = 0; r < e.length; r++) {
        var n = e[t],
          i = e[r];
        if (this.modules[n][i] == null)
          for (var s = -2; s <= 2; s++)
            for (var c = -2; c <= 2; c++)
              s == -2 || s == 2 || c == -2 || c == 2 || (s == 0 && c == 0)
                ? (this.modules[n + s][i + c] = !0)
                : (this.modules[n + s][i + c] = !1);
      }
  },
  setupTypeNumber: function (e) {
    for (var t = Ge.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
      var n = !e && ((t >> r) & 1) == 1;
      this.modules[Math.floor(r / 3)][(r % 3) + this.moduleCount - 8 - 3] = n;
    }
    for (var r = 0; r < 18; r++) {
      var n = !e && ((t >> r) & 1) == 1;
      this.modules[(r % 3) + this.moduleCount - 8 - 3][Math.floor(r / 3)] = n;
    }
  },
  setupTypeInfo: function (e, t) {
    for (
      var r = (this.errorCorrectLevel << 3) | t,
        n = Ge.getBCHTypeInfo(r),
        i = 0;
      i < 15;
      i++
    ) {
      var s = !e && ((n >> i) & 1) == 1;
      i < 6
        ? (this.modules[i][8] = s)
        : i < 8
        ? (this.modules[i + 1][8] = s)
        : (this.modules[this.moduleCount - 15 + i][8] = s);
    }
    for (var i = 0; i < 15; i++) {
      var s = !e && ((n >> i) & 1) == 1;
      i < 8
        ? (this.modules[8][this.moduleCount - i - 1] = s)
        : i < 9
        ? (this.modules[8][15 - i - 1 + 1] = s)
        : (this.modules[8][15 - i - 1] = s);
    }
    this.modules[this.moduleCount - 8][8] = !e;
  },
  mapData: function (e, t) {
    for (
      var r = -1,
        n = this.moduleCount - 1,
        i = 7,
        s = 0,
        c = this.moduleCount - 1;
      c > 0;
      c -= 2
    )
      for (c == 6 && c--; ; ) {
        for (var o = 0; o < 2; o++)
          if (this.modules[n][c - o] == null) {
            var u = !1;
            s < e.length && (u = ((e[s] >>> i) & 1) == 1);
            var d = Ge.getMask(t, n, c - o);
            d && (u = !u),
              (this.modules[n][c - o] = u),
              i--,
              i == -1 && (s++, (i = 7));
          }
        if (((n += r), n < 0 || this.moduleCount <= n)) {
          (n -= r), (r = -r);
          break;
        }
      }
  },
};
Ut.PAD0 = 236;
Ut.PAD1 = 17;
Ut.createData = function (e, t, r) {
  for (var n = Ft.getRSBlocks(e, t), i = new bh(), s = 0; s < r.length; s++) {
    var c = r[s];
    i.put(c.mode, 4),
      i.put(c.getLength(), Ge.getLengthInBits(c.mode, e)),
      c.write(i);
  }
  for (var o = 0, s = 0; s < n.length; s++) o += n[s].dataCount;
  if (i.getLengthInBits() > o * 8)
    throw new Error(
      "code length overflow. (" + i.getLengthInBits() + ">" + o * 8 + ")"
    );
  for (
    i.getLengthInBits() + 4 <= o * 8 && i.put(0, 4);
    i.getLengthInBits() % 8 != 0;

  )
    i.putBit(!1);
  for (
    ;
    !(
      i.getLengthInBits() >= o * 8 ||
      (i.put(Ut.PAD0, 8), i.getLengthInBits() >= o * 8)
    );

  )
    i.put(Ut.PAD1, 8);
  return Ut.createBytes(i, n);
};
Ut.createBytes = function (e, t) {
  for (
    var r = 0,
      n = 0,
      i = 0,
      s = new Array(t.length),
      c = new Array(t.length),
      o = 0;
    o < t.length;
    o++
  ) {
    var u = t[o].dataCount,
      d = t[o].totalCount - u;
    (n = Math.max(n, u)), (i = Math.max(i, d)), (s[o] = new Array(u));
    for (var m = 0; m < s[o].length; m++) s[o][m] = 255 & e.buffer[m + r];
    r += u;
    var g = Ge.getErrorCorrectPolynomial(d),
      w = new an(s[o], g.getLength() - 1),
      k = w.mod(g);
    c[o] = new Array(g.getLength() - 1);
    for (var m = 0; m < c[o].length; m++) {
      var L = m + k.getLength() - c[o].length;
      c[o][m] = L >= 0 ? k.get(L) : 0;
    }
  }
  for (var H = 0, m = 0; m < t.length; m++) H += t[m].totalCount;
  for (var D = new Array(H), I = 0, m = 0; m < n; m++)
    for (var o = 0; o < t.length; o++) m < s[o].length && (D[I++] = s[o][m]);
  for (var m = 0; m < i; m++)
    for (var o = 0; o < t.length; o++) m < c[o].length && (D[I++] = c[o][m]);
  return D;
};
var gt = {
    MODE_NUMBER: 1,
    MODE_ALPHA_NUM: 2,
    MODE_8BIT_BYTE: 4,
    MODE_KANJI: 8,
  },
  Xt = { L: 1, M: 0, Q: 3, H: 2 },
  Kt = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7,
  },
  Ge = {
    PATTERN_POSITION_TABLE: [
      [],
      [6, 18],
      [6, 22],
      [6, 26],
      [6, 30],
      [6, 34],
      [6, 22, 38],
      [6, 24, 42],
      [6, 26, 46],
      [6, 28, 50],
      [6, 30, 54],
      [6, 32, 58],
      [6, 34, 62],
      [6, 26, 46, 66],
      [6, 26, 48, 70],
      [6, 26, 50, 74],
      [6, 30, 54, 78],
      [6, 30, 56, 82],
      [6, 30, 58, 86],
      [6, 34, 62, 90],
      [6, 28, 50, 72, 94],
      [6, 26, 50, 74, 98],
      [6, 30, 54, 78, 102],
      [6, 28, 54, 80, 106],
      [6, 32, 58, 84, 110],
      [6, 30, 58, 86, 114],
      [6, 34, 62, 90, 118],
      [6, 26, 50, 74, 98, 122],
      [6, 30, 54, 78, 102, 126],
      [6, 26, 52, 78, 104, 130],
      [6, 30, 56, 82, 108, 134],
      [6, 34, 60, 86, 112, 138],
      [6, 30, 58, 86, 114, 142],
      [6, 34, 62, 90, 118, 146],
      [6, 30, 54, 78, 102, 126, 150],
      [6, 24, 50, 76, 102, 128, 154],
      [6, 28, 54, 80, 106, 132, 158],
      [6, 32, 58, 84, 110, 136, 162],
      [6, 26, 54, 82, 110, 138, 166],
      [6, 30, 58, 86, 114, 142, 170],
    ],
    G15: 1335,
    G18: 7973,
    G15_MASK: 21522,
    getBCHTypeInfo: function (e) {
      for (var t = e << 10; Ge.getBCHDigit(t) - Ge.getBCHDigit(Ge.G15) >= 0; )
        t ^= Ge.G15 << (Ge.getBCHDigit(t) - Ge.getBCHDigit(Ge.G15));
      return ((e << 10) | t) ^ Ge.G15_MASK;
    },
    getBCHTypeNumber: function (e) {
      for (var t = e << 12; Ge.getBCHDigit(t) - Ge.getBCHDigit(Ge.G18) >= 0; )
        t ^= Ge.G18 << (Ge.getBCHDigit(t) - Ge.getBCHDigit(Ge.G18));
      return (e << 12) | t;
    },
    getBCHDigit: function (e) {
      for (var t = 0; e != 0; ) t++, (e >>>= 1);
      return t;
    },
    getPatternPosition: function (e) {
      return Ge.PATTERN_POSITION_TABLE[e - 1];
    },
    getMask: function (e, t, r) {
      switch (e) {
        case Kt.PATTERN000:
          return (t + r) % 2 == 0;
        case Kt.PATTERN001:
          return t % 2 == 0;
        case Kt.PATTERN010:
          return r % 3 == 0;
        case Kt.PATTERN011:
          return (t + r) % 3 == 0;
        case Kt.PATTERN100:
          return (Math.floor(t / 2) + Math.floor(r / 3)) % 2 == 0;
        case Kt.PATTERN101:
          return ((t * r) % 2) + ((t * r) % 3) == 0;
        case Kt.PATTERN110:
          return (((t * r) % 2) + ((t * r) % 3)) % 2 == 0;
        case Kt.PATTERN111:
          return (((t * r) % 3) + ((t + r) % 2)) % 2 == 0;
        default:
          throw new Error("bad maskPattern:" + e);
      }
    },
    getErrorCorrectPolynomial: function (e) {
      for (var t = new an([1], 0), r = 0; r < e; r++)
        t = t.multiply(new an([1, it.gexp(r)], 0));
      return t;
    },
    getLengthInBits: function (e, t) {
      if (1 <= t && t < 10)
        switch (e) {
          case gt.MODE_NUMBER:
            return 10;
          case gt.MODE_ALPHA_NUM:
            return 9;
          case gt.MODE_8BIT_BYTE:
            return 8;
          case gt.MODE_KANJI:
            return 8;
          default:
            throw new Error("mode:" + e);
        }
      else if (t < 27)
        switch (e) {
          case gt.MODE_NUMBER:
            return 12;
          case gt.MODE_ALPHA_NUM:
            return 11;
          case gt.MODE_8BIT_BYTE:
            return 16;
          case gt.MODE_KANJI:
            return 10;
          default:
            throw new Error("mode:" + e);
        }
      else if (t < 41)
        switch (e) {
          case gt.MODE_NUMBER:
            return 14;
          case gt.MODE_ALPHA_NUM:
            return 13;
          case gt.MODE_8BIT_BYTE:
            return 16;
          case gt.MODE_KANJI:
            return 12;
          default:
            throw new Error("mode:" + e);
        }
      else throw new Error("type:" + t);
    },
    getLostPoint: function (e) {
      for (var t = e.getModuleCount(), r = 0, n = 0; n < t; n++)
        for (var i = 0; i < t; i++) {
          for (var s = 0, c = e.isDark(n, i), o = -1; o <= 1; o++)
            if (!(n + o < 0 || t <= n + o))
              for (var u = -1; u <= 1; u++)
                i + u < 0 ||
                  t <= i + u ||
                  (o == 0 && u == 0) ||
                  (c == e.isDark(n + o, i + u) && s++);
          s > 5 && (r += 3 + s - 5);
        }
      for (var n = 0; n < t - 1; n++)
        for (var i = 0; i < t - 1; i++) {
          var d = 0;
          e.isDark(n, i) && d++,
            e.isDark(n + 1, i) && d++,
            e.isDark(n, i + 1) && d++,
            e.isDark(n + 1, i + 1) && d++,
            (d == 0 || d == 4) && (r += 3);
        }
      for (var n = 0; n < t; n++)
        for (var i = 0; i < t - 6; i++)
          e.isDark(n, i) &&
            !e.isDark(n, i + 1) &&
            e.isDark(n, i + 2) &&
            e.isDark(n, i + 3) &&
            e.isDark(n, i + 4) &&
            !e.isDark(n, i + 5) &&
            e.isDark(n, i + 6) &&
            (r += 40);
      for (var i = 0; i < t; i++)
        for (var n = 0; n < t - 6; n++)
          e.isDark(n, i) &&
            !e.isDark(n + 1, i) &&
            e.isDark(n + 2, i) &&
            e.isDark(n + 3, i) &&
            e.isDark(n + 4, i) &&
            !e.isDark(n + 5, i) &&
            e.isDark(n + 6, i) &&
            (r += 40);
      for (var m = 0, i = 0; i < t; i++)
        for (var n = 0; n < t; n++) e.isDark(n, i) && m++;
      var g = Math.abs((100 * m) / t / t - 50) / 5;
      return (r += g * 10), r;
    },
  },
  it = {
    glog: function (e) {
      if (e < 1) throw new Error("glog(" + e + ")");
      return it.LOG_TABLE[e];
    },
    gexp: function (e) {
      for (; e < 0; ) e += 255;
      for (; e >= 256; ) e -= 255;
      return it.EXP_TABLE[e];
    },
    EXP_TABLE: new Array(256),
    LOG_TABLE: new Array(256),
  };
for (var ot = 0; ot < 8; ot++) it.EXP_TABLE[ot] = 1 << ot;
for (var ot = 8; ot < 256; ot++)
  it.EXP_TABLE[ot] =
    it.EXP_TABLE[ot - 4] ^
    it.EXP_TABLE[ot - 5] ^
    it.EXP_TABLE[ot - 6] ^
    it.EXP_TABLE[ot - 8];
for (var ot = 0; ot < 255; ot++) it.LOG_TABLE[it.EXP_TABLE[ot]] = ot;
function an(e, t) {
  if (e.length == null) throw new Error(e.length + "/" + t);
  for (var r = 0; r < e.length && e[r] == 0; ) r++;
  this.num = new Array(e.length - r + t);
  for (var n = 0; n < e.length - r; n++) this.num[n] = e[n + r];
}
an.prototype = {
  get: function (e) {
    return this.num[e];
  },
  getLength: function () {
    return this.num.length;
  },
  multiply: function (e) {
    for (
      var t = new Array(this.getLength() + e.getLength() - 1), r = 0;
      r < this.getLength();
      r++
    )
      for (var n = 0; n < e.getLength(); n++)
        t[r + n] ^= it.gexp(it.glog(this.get(r)) + it.glog(e.get(n)));
    return new an(t, 0);
  },
  mod: function (e) {
    if (this.getLength() - e.getLength() < 0) return this;
    for (
      var t = it.glog(this.get(0)) - it.glog(e.get(0)),
        r = new Array(this.getLength()),
        n = 0;
      n < this.getLength();
      n++
    )
      r[n] = this.get(n);
    for (var n = 0; n < e.getLength(); n++)
      r[n] ^= it.gexp(it.glog(e.get(n)) + t);
    return new an(r, 0).mod(e);
  },
};
function Ft(e, t) {
  (this.totalCount = e), (this.dataCount = t);
}
Ft.RS_BLOCK_TABLE = [
  [1, 26, 19],
  [1, 26, 16],
  [1, 26, 13],
  [1, 26, 9],
  [1, 44, 34],
  [1, 44, 28],
  [1, 44, 22],
  [1, 44, 16],
  [1, 70, 55],
  [1, 70, 44],
  [2, 35, 17],
  [2, 35, 13],
  [1, 100, 80],
  [2, 50, 32],
  [2, 50, 24],
  [4, 25, 9],
  [1, 134, 108],
  [2, 67, 43],
  [2, 33, 15, 2, 34, 16],
  [2, 33, 11, 2, 34, 12],
  [2, 86, 68],
  [4, 43, 27],
  [4, 43, 19],
  [4, 43, 15],
  [2, 98, 78],
  [4, 49, 31],
  [2, 32, 14, 4, 33, 15],
  [4, 39, 13, 1, 40, 14],
  [2, 121, 97],
  [2, 60, 38, 2, 61, 39],
  [4, 40, 18, 2, 41, 19],
  [4, 40, 14, 2, 41, 15],
  [2, 146, 116],
  [3, 58, 36, 2, 59, 37],
  [4, 36, 16, 4, 37, 17],
  [4, 36, 12, 4, 37, 13],
  [2, 86, 68, 2, 87, 69],
  [4, 69, 43, 1, 70, 44],
  [6, 43, 19, 2, 44, 20],
  [6, 43, 15, 2, 44, 16],
  [4, 101, 81],
  [1, 80, 50, 4, 81, 51],
  [4, 50, 22, 4, 51, 23],
  [3, 36, 12, 8, 37, 13],
  [2, 116, 92, 2, 117, 93],
  [6, 58, 36, 2, 59, 37],
  [4, 46, 20, 6, 47, 21],
  [7, 42, 14, 4, 43, 15],
  [4, 133, 107],
  [8, 59, 37, 1, 60, 38],
  [8, 44, 20, 4, 45, 21],
  [12, 33, 11, 4, 34, 12],
  [3, 145, 115, 1, 146, 116],
  [4, 64, 40, 5, 65, 41],
  [11, 36, 16, 5, 37, 17],
  [11, 36, 12, 5, 37, 13],
  [5, 109, 87, 1, 110, 88],
  [5, 65, 41, 5, 66, 42],
  [5, 54, 24, 7, 55, 25],
  [11, 36, 12],
  [5, 122, 98, 1, 123, 99],
  [7, 73, 45, 3, 74, 46],
  [15, 43, 19, 2, 44, 20],
  [3, 45, 15, 13, 46, 16],
  [1, 135, 107, 5, 136, 108],
  [10, 74, 46, 1, 75, 47],
  [1, 50, 22, 15, 51, 23],
  [2, 42, 14, 17, 43, 15],
  [5, 150, 120, 1, 151, 121],
  [9, 69, 43, 4, 70, 44],
  [17, 50, 22, 1, 51, 23],
  [2, 42, 14, 19, 43, 15],
  [3, 141, 113, 4, 142, 114],
  [3, 70, 44, 11, 71, 45],
  [17, 47, 21, 4, 48, 22],
  [9, 39, 13, 16, 40, 14],
  [3, 135, 107, 5, 136, 108],
  [3, 67, 41, 13, 68, 42],
  [15, 54, 24, 5, 55, 25],
  [15, 43, 15, 10, 44, 16],
  [4, 144, 116, 4, 145, 117],
  [17, 68, 42],
  [17, 50, 22, 6, 51, 23],
  [19, 46, 16, 6, 47, 17],
  [2, 139, 111, 7, 140, 112],
  [17, 74, 46],
  [7, 54, 24, 16, 55, 25],
  [34, 37, 13],
  [4, 151, 121, 5, 152, 122],
  [4, 75, 47, 14, 76, 48],
  [11, 54, 24, 14, 55, 25],
  [16, 45, 15, 14, 46, 16],
  [6, 147, 117, 4, 148, 118],
  [6, 73, 45, 14, 74, 46],
  [11, 54, 24, 16, 55, 25],
  [30, 46, 16, 2, 47, 17],
  [8, 132, 106, 4, 133, 107],
  [8, 75, 47, 13, 76, 48],
  [7, 54, 24, 22, 55, 25],
  [22, 45, 15, 13, 46, 16],
  [10, 142, 114, 2, 143, 115],
  [19, 74, 46, 4, 75, 47],
  [28, 50, 22, 6, 51, 23],
  [33, 46, 16, 4, 47, 17],
  [8, 152, 122, 4, 153, 123],
  [22, 73, 45, 3, 74, 46],
  [8, 53, 23, 26, 54, 24],
  [12, 45, 15, 28, 46, 16],
  [3, 147, 117, 10, 148, 118],
  [3, 73, 45, 23, 74, 46],
  [4, 54, 24, 31, 55, 25],
  [11, 45, 15, 31, 46, 16],
  [7, 146, 116, 7, 147, 117],
  [21, 73, 45, 7, 74, 46],
  [1, 53, 23, 37, 54, 24],
  [19, 45, 15, 26, 46, 16],
  [5, 145, 115, 10, 146, 116],
  [19, 75, 47, 10, 76, 48],
  [15, 54, 24, 25, 55, 25],
  [23, 45, 15, 25, 46, 16],
  [13, 145, 115, 3, 146, 116],
  [2, 74, 46, 29, 75, 47],
  [42, 54, 24, 1, 55, 25],
  [23, 45, 15, 28, 46, 16],
  [17, 145, 115],
  [10, 74, 46, 23, 75, 47],
  [10, 54, 24, 35, 55, 25],
  [19, 45, 15, 35, 46, 16],
  [17, 145, 115, 1, 146, 116],
  [14, 74, 46, 21, 75, 47],
  [29, 54, 24, 19, 55, 25],
  [11, 45, 15, 46, 46, 16],
  [13, 145, 115, 6, 146, 116],
  [14, 74, 46, 23, 75, 47],
  [44, 54, 24, 7, 55, 25],
  [59, 46, 16, 1, 47, 17],
  [12, 151, 121, 7, 152, 122],
  [12, 75, 47, 26, 76, 48],
  [39, 54, 24, 14, 55, 25],
  [22, 45, 15, 41, 46, 16],
  [6, 151, 121, 14, 152, 122],
  [6, 75, 47, 34, 76, 48],
  [46, 54, 24, 10, 55, 25],
  [2, 45, 15, 64, 46, 16],
  [17, 152, 122, 4, 153, 123],
  [29, 74, 46, 14, 75, 47],
  [49, 54, 24, 10, 55, 25],
  [24, 45, 15, 46, 46, 16],
  [4, 152, 122, 18, 153, 123],
  [13, 74, 46, 32, 75, 47],
  [48, 54, 24, 14, 55, 25],
  [42, 45, 15, 32, 46, 16],
  [20, 147, 117, 4, 148, 118],
  [40, 75, 47, 7, 76, 48],
  [43, 54, 24, 22, 55, 25],
  [10, 45, 15, 67, 46, 16],
  [19, 148, 118, 6, 149, 119],
  [18, 75, 47, 31, 76, 48],
  [34, 54, 24, 34, 55, 25],
  [20, 45, 15, 61, 46, 16],
];
Ft.getRSBlocks = function (e, t) {
  var r = Ft.getRsBlockTable(e, t);
  if (r == null)
    throw new Error(
      "bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t
    );
  for (var n = r.length / 3, i = [], s = 0; s < n; s++)
    for (
      var c = r[s * 3 + 0], o = r[s * 3 + 1], u = r[s * 3 + 2], d = 0;
      d < c;
      d++
    )
      i.push(new Ft(o, u));
  return i;
};
Ft.getRsBlockTable = function (e, t) {
  switch (t) {
    case Xt.L:
      return Ft.RS_BLOCK_TABLE[(e - 1) * 4 + 0];
    case Xt.M:
      return Ft.RS_BLOCK_TABLE[(e - 1) * 4 + 1];
    case Xt.Q:
      return Ft.RS_BLOCK_TABLE[(e - 1) * 4 + 2];
    case Xt.H:
      return Ft.RS_BLOCK_TABLE[(e - 1) * 4 + 3];
    default:
      return;
  }
};
function bh() {
  (this.buffer = []), (this.length = 0);
}
bh.prototype = {
  get: function (e) {
    var t = Math.floor(e / 8);
    return ((this.buffer[t] >>> (7 - (e % 8))) & 1) == 1;
  },
  put: function (e, t) {
    for (var r = 0; r < t; r++) this.putBit(((e >>> (t - r - 1)) & 1) == 1);
  },
  getLengthInBits: function () {
    return this.length;
  },
  putBit: function (e) {
    var t = Math.floor(this.length / 8);
    this.buffer.length <= t && this.buffer.push(0),
      e && (this.buffer[t] |= 128 >>> this.length % 8),
      this.length++;
  },
};
var po = [
  [17, 14, 11, 7],
  [32, 26, 20, 14],
  [53, 42, 32, 24],
  [78, 62, 46, 34],
  [106, 84, 60, 44],
  [134, 106, 74, 58],
  [154, 122, 86, 64],
  [192, 152, 108, 84],
  [230, 180, 130, 98],
  [271, 213, 151, 119],
  [321, 251, 177, 137],
  [367, 287, 203, 155],
  [425, 331, 241, 177],
  [458, 362, 258, 194],
  [520, 412, 292, 220],
  [586, 450, 322, 250],
  [644, 504, 364, 280],
  [718, 560, 394, 310],
  [792, 624, 442, 338],
  [858, 666, 482, 382],
  [929, 711, 509, 403],
  [1003, 779, 565, 439],
  [1091, 857, 611, 461],
  [1171, 911, 661, 511],
  [1273, 997, 715, 535],
  [1367, 1059, 751, 593],
  [1465, 1125, 805, 625],
  [1528, 1190, 868, 658],
  [1628, 1264, 908, 698],
  [1732, 1370, 982, 742],
  [1840, 1452, 1030, 790],
  [1952, 1538, 1112, 842],
  [2068, 1628, 1168, 898],
  [2188, 1722, 1228, 958],
  [2303, 1809, 1283, 983],
  [2431, 1911, 1351, 1051],
  [2563, 1989, 1423, 1093],
  [2699, 2099, 1499, 1139],
  [2809, 2213, 1579, 1219],
  [2953, 2331, 1663, 1273],
];
function Eh(e) {
  if (
    ((this.options = {
      padding: 4,
      width: 256,
      height: 256,
      typeNumber: 4,
      color: "#000000",
      background: "#ffffff",
      ecl: "M",
      image: { svg: "", width: 0, height: 0 },
    }),
    typeof e == "string" && (e = { content: e }),
    e)
  )
    for (var t in e) this.options[t] = e[t];
  if (typeof this.options.content != "string")
    throw new Error("Expected 'content' as string!");
  if (this.options.content.length === 0)
    throw new Error("Expected 'content' to be non-empty!");
  if (!(this.options.padding >= 0))
    throw new Error("Expected 'padding' value to be non-negative!");
  if (!(this.options.width > 0) || !(this.options.height > 0))
    throw new Error(
      "Expected 'width' or 'height' value to be higher than zero!"
    );
  function r(u) {
    switch (u) {
      case "L":
        return Xt.L;
      case "M":
        return Xt.M;
      case "Q":
        return Xt.Q;
      case "H":
        return Xt.H;
      default:
        throw new Error("Unknwon error correction level: " + u);
    }
  }
  function n(u, d) {
    for (var m = i(u), g = 1, w = 0, k = 0, L = po.length; k <= L; k++) {
      var H = po[k];
      if (!H)
        throw new Error("Content too long: expected " + w + " but got " + m);
      switch (d) {
        case "L":
          w = H[0];
          break;
        case "M":
          w = H[1];
          break;
        case "Q":
          w = H[2];
          break;
        case "H":
          w = H[3];
          break;
        default:
          throw new Error("Unknwon error correction level: " + d);
      }
      if (m <= w) break;
      g++;
    }
    if (g > po.length) throw new Error("Content too long");
    return g;
  }
  function i(u) {
    var d = encodeURI(u)
      .toString()
      .replace(/\%[0-9a-fA-F]{2}/g, "a");
    return d.length + (d.length != u ? 3 : 0);
  }
  var s = this.options.content,
    c = n(s, this.options.ecl),
    o = r(this.options.ecl);
  (this.qrcode = new Ut(c, o)), this.qrcode.addData(s), this.qrcode.make();
}
Eh.prototype.svg = function (e) {
  var t = this.options || {},
    r = this.qrcode.modules;
  typeof e > "u" && (e = { container: t.container || "svg" });
  for (
    var n = typeof t.pretty < "u" ? !!t.pretty : !0,
      i = n ? "  " : "",
      s = n
        ? `\r
`
        : "",
      c = t.width,
      o = t.height,
      u = r.length,
      d = c / (u + 2 * t.padding),
      m = o / (u + 2 * t.padding),
      g = typeof t.join < "u" ? !!t.join : !1,
      w = typeof t.swap < "u" ? !!t.swap : !1,
      k = typeof t.xmlDeclaration < "u" ? !!t.xmlDeclaration : !0,
      L = typeof t.predefined < "u" ? !!t.predefined : !1,
      H = L
        ? i +
          '<defs><path id="qrmodule" d="M0 0 h' +
          m +
          " v" +
          d +
          ' H0 z" style="fill:' +
          t.color +
          ';shape-rendering:crispEdges;" /></defs>' +
          s
        : "",
      D =
        i +
        '<rect x="0" y="0" width="' +
        c +
        '" height="' +
        o +
        '" style="fill:' +
        t.background +
        ';shape-rendering:crispEdges;"/>' +
        s,
      I = "",
      T = "",
      $ = 0;
    $ < u;
    $++
  )
    for (var V = 0; V < u; V++) {
      var j = r[V][$];
      if (j) {
        var z = V * d + t.padding * d,
          ee = $ * m + t.padding * m;
        if (w) {
          var Q = z;
          (z = ee), (ee = Q);
        }
        if (g) {
          var Z = d + z,
            ue = m + ee;
          (z = Number.isInteger(z) ? Number(z) : z.toFixed(2)),
            (ee = Number.isInteger(ee) ? Number(ee) : ee.toFixed(2)),
            (Z = Number.isInteger(Z) ? Number(Z) : Z.toFixed(2)),
            (ue = Number.isInteger(ue) ? Number(ue) : ue.toFixed(2)),
            (T +=
              "M" +
              z +
              "," +
              ee +
              " V" +
              ue +
              " H" +
              Z +
              " V" +
              ee +
              " H" +
              z +
              " Z ");
        } else
          L
            ? (I +=
                i +
                '<use x="' +
                z.toString() +
                '" y="' +
                ee.toString() +
                '" href="#qrmodule" />' +
                s)
            : (I +=
                i +
                '<rect x="' +
                z.toString() +
                '" y="' +
                ee.toString() +
                '" width="' +
                d +
                '" height="' +
                m +
                '" style="fill:' +
                t.color +
                ';shape-rendering:crispEdges;"/>' +
                s);
      }
    }
  g &&
    (I =
      i +
      '<path x="0" y="0" style="fill:' +
      t.color +
      ';shape-rendering:crispEdges;" d="' +
      T +
      '" />');
  let oe = "";
  if (this.options.image !== void 0 && this.options.image.svg) {
    const E = (c * this.options.image.width) / 100,
      a = (o * this.options.image.height) / 100,
      p = c / 2 - E / 2,
      y = o / 2 - a / 2;
    (oe += `<svg x="${p}" y="${y}" width="${E}" height="${a}" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">`),
      (oe += this.options.image.svg + s),
      (oe += "</svg>");
  }
  var pe = "";
  switch (e.container) {
    case "svg":
      k && (pe += '<?xml version="1.0" standalone="yes"?>' + s),
        (pe +=
          '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' +
          c +
          '" height="' +
          o +
          '">' +
          s),
        (pe += H + D + I),
        (pe += oe),
        (pe += "</svg>");
      break;
    case "svg-viewbox":
      k && (pe += '<?xml version="1.0" standalone="yes"?>' + s),
        (pe +=
          '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' +
          c +
          " " +
          o +
          '">' +
          s),
        (pe += H + D + I),
        (pe += oe),
        (pe += "</svg>");
      break;
    case "g":
      (pe += '<g width="' + c + '" height="' + o + '">' + s),
        (pe += H + D + I),
        (pe += oe),
        (pe += "</g>");
      break;
    default:
      pe += (H + D + I + oe).replace(/^\s+/, "");
      break;
  }
  return pe;
};
var fv = Eh,
  dv =
    (te && te.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(Ms, "__esModule", { value: !0 });
Ms.QRCode = void 0;
const pv = ft,
  hl = qi,
  gv = dv(fv),
  mv = (e) => {
    const [t, r] = (0, hl.useState)("");
    return (
      (0, hl.useEffect)(() => {
        var n, i;
        const s = new gv.default({
            content: e.content,
            background: e.bgColor || "#ffffff",
            color: e.fgColor || "#000000",
            container: "svg",
            ecl: "M",
            width: (n = e.width) !== null && n !== void 0 ? n : 256,
            height: (i = e.height) !== null && i !== void 0 ? i : 256,
            padding: 0,
            image: e.image,
          }),
          c = Buffer.from(s.svg(), "utf8").toString("base64");
        r(`data:image/svg+xml;base64,${c}`);
      }, [e.bgColor, e.content, e.fgColor, e.height, e.image, e.width]),
      t ? (0, pv.h)("img", { src: t, alt: "QR Code" }) : null
    );
  };
Ms.QRCode = mv;
var xs = {},
  Ca = {};
Object.defineProperty(Ca, "__esModule", { value: !0 });
Ca.default =
  ".-cbwsdk-css-reset .-cbwsdk-spinner{display:inline-block}.-cbwsdk-css-reset .-cbwsdk-spinner svg{display:inline-block;animation:2s linear infinite -cbwsdk-spinner-svg}.-cbwsdk-css-reset .-cbwsdk-spinner svg circle{animation:1.9s ease-in-out infinite both -cbwsdk-spinner-circle;display:block;fill:rgba(0,0,0,0);stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -cbwsdk-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -cbwsdk-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}";
var _v =
  (te && te.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(xs, "__esModule", { value: !0 });
xs.Spinner = void 0;
const Ci = ft,
  yv = _v(Ca),
  vv = (e) => {
    var t;
    const r = (t = e.size) !== null && t !== void 0 ? t : 64,
      n = e.color || "#000";
    return (0, Ci.h)(
      "div",
      { class: "-cbwsdk-spinner" },
      (0, Ci.h)("style", null, yv.default),
      (0, Ci.h)(
        "svg",
        {
          viewBox: "0 0 100 100",
          xmlns: "http://www.w3.org/2000/svg",
          style: { width: r, height: r },
        },
        (0, Ci.h)("circle", { style: { cx: 50, cy: 50, r: 45, stroke: n } })
      )
    );
  };
xs.Spinner = vv;
var Ma = {};
Object.defineProperty(Ma, "__esModule", { value: !0 });
Ma.default =
  ".-cbwsdk-css-reset .-cbwsdk-connect-content{height:430px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-connect-content.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-header{display:flex;align-items:center;justify-content:space-between;margin:0 0 30px}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading{font-style:normal;font-weight:500;font-size:28px;line-height:36px;margin:0}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-layout{display:flex;flex-direction:row}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-left{margin-right:30px;display:flex;flex-direction:column;justify-content:space-between}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-right{flex:25%;margin-right:34px}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-wrapper{width:220px;height:220px;border-radius:12px;display:flex;justify-content:center;align-items:center;background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light{background-color:rgba(255,255,255,.95)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light>p{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark{background-color:rgba(10,11,13,.9)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark>p{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting>p{font-size:12px;font-weight:bold;margin-top:16px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app{border-radius:8px;font-size:14px;line-height:20px;padding:12px;width:339px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.light{background:#eef0f3;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.dark{background:#1e2025;color:#8a919e}.-cbwsdk-css-reset .-cbwsdk-cancel-button{-webkit-appearance:none;border:none;background:none;cursor:pointer;padding:0;margin:0}.-cbwsdk-css-reset .-cbwsdk-cancel-button-x{position:relative;display:block;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-wallet-steps{padding:0 0 0 16px;margin:0;width:100%;list-style:decimal}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item{list-style-type:decimal;display:list-item;font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:20px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item-wrapper{display:flex;align-items:center}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-pad-left{margin-left:6px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon{display:flex;border-radius:50%;height:24px;width:24px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.light{background:#0052ff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.dark{background:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item{align-items:center;display:flex;flex-direction:row;padding:16px 24px;gap:12px;cursor:pointer;border-radius:100px;font-weight:600}.-cbwsdk-css-reset .-cbwsdk-connect-item.light{background:#f5f8ff;color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark{background:#001033;color:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item-copy-wrapper{margin:0 4px 0 8px}.-cbwsdk-css-reset .-cbwsdk-connect-item-title{margin:0 0 0;font-size:16px;line-height:24px;font-weight:500}.-cbwsdk-css-reset .-cbwsdk-connect-item-description{font-weight:400;font-size:14px;line-height:20px;margin:0}";
var Sh =
  (te && te.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(gn, "__esModule", { value: !0 });
gn.CoinbaseWalletSteps = gn.ConnectContent = void 0;
const kr = Sh(di),
  _e = ft,
  wv = X,
  bv = Sn,
  Ev = Ss,
  Sv = Rs,
  Rv = Cs,
  Cv = Ms,
  Mv = xs,
  xv = Sh(Ma),
  go = {
    title: "Coinbase Wallet app",
    description: "Connect with your self-custody wallet",
    steps: Rh,
  },
  kv = (e) => (e === "light" ? "#FFFFFF" : "#0A0B0D");
function Iv(e) {
  const { theme: t } = e,
    r = (0, wv.createQrUrl)(
      e.sessionId,
      e.sessionSecret,
      e.linkAPIUrl,
      e.isParentConnection,
      e.version,
      e.chainId
    ),
    n = go.steps;
  return (0, _e.h)(
    "div",
    {
      "data-testid": "connect-content",
      className: (0, kr.default)("-cbwsdk-connect-content", t),
    },
    (0, _e.h)("style", null, xv.default),
    (0, _e.h)(
      "div",
      { className: "-cbwsdk-connect-content-header" },
      (0, _e.h)(
        "h2",
        { className: (0, kr.default)("-cbwsdk-connect-content-heading", t) },
        "Scan to connect with our mobile app"
      ),
      e.onCancel &&
        (0, _e.h)(
          "button",
          {
            type: "button",
            className: "-cbwsdk-cancel-button",
            onClick: e.onCancel,
          },
          (0, _e.h)(Ev.CloseIcon, {
            fill: t === "light" ? "#0A0B0D" : "#FFFFFF",
          })
        )
    ),
    (0, _e.h)(
      "div",
      { className: "-cbwsdk-connect-content-layout" },
      (0, _e.h)(
        "div",
        { className: "-cbwsdk-connect-content-column-left" },
        (0, _e.h)(Av, {
          title: go.title,
          description: go.description,
          theme: t,
        })
      ),
      (0, _e.h)(
        "div",
        { className: "-cbwsdk-connect-content-column-right" },
        (0, _e.h)(
          "div",
          { className: "-cbwsdk-connect-content-qr-wrapper" },
          (0, _e.h)(Cv.QRCode, {
            content: r,
            width: 200,
            height: 200,
            fgColor: "#000",
            bgColor: "transparent",
          }),
          (0, _e.h)("input", {
            type: "hidden",
            name: "cbw-cbwsdk-version",
            value: bv.LIB_VERSION,
          }),
          (0, _e.h)("input", { type: "hidden", value: r })
        ),
        (0, _e.h)(n, { theme: t }),
        !e.isConnected &&
          (0, _e.h)(
            "div",
            {
              "data-testid": "connecting-spinner",
              className: (0, kr.default)(
                "-cbwsdk-connect-content-qr-connecting",
                t
              ),
            },
            (0, _e.h)(Mv.Spinner, {
              size: 36,
              color: t === "dark" ? "#FFF" : "#000",
            }),
            (0, _e.h)("p", null, "Connecting...")
          )
      )
    )
  );
}
gn.ConnectContent = Iv;
function Av({ title: e, description: t, theme: r }) {
  return (0, _e.h)(
    "div",
    { className: (0, kr.default)("-cbwsdk-connect-item", r) },
    (0, _e.h)("div", null, (0, _e.h)(Sv.CoinbaseWalletRound, null)),
    (0, _e.h)(
      "div",
      { className: "-cbwsdk-connect-item-copy-wrapper" },
      (0, _e.h)("h3", { className: "-cbwsdk-connect-item-title" }, e),
      (0, _e.h)("p", { className: "-cbwsdk-connect-item-description" }, t)
    )
  );
}
function Rh({ theme: e }) {
  return (0, _e.h)(
    "ol",
    { className: "-cbwsdk-wallet-steps" },
    (0, _e.h)(
      "li",
      { className: (0, kr.default)("-cbwsdk-wallet-steps-item", e) },
      (0, _e.h)(
        "div",
        { className: "-cbwsdk-wallet-steps-item-wrapper" },
        "Open Coinbase Wallet app"
      )
    ),
    (0, _e.h)(
      "li",
      { className: (0, kr.default)("-cbwsdk-wallet-steps-item", e) },
      (0, _e.h)(
        "div",
        { className: "-cbwsdk-wallet-steps-item-wrapper" },
        (0, _e.h)("span", null, "Tap ", (0, _e.h)("strong", null, "Scan"), " "),
        (0, _e.h)(
          "span",
          {
            className: (0, kr.default)(
              "-cbwsdk-wallet-steps-pad-left",
              "-cbwsdk-wallet-steps-icon",
              e
            ),
          },
          (0, _e.h)(Rv.QRCodeIcon, { fill: kv(e) })
        )
      )
    )
  );
}
gn.CoinbaseWalletSteps = Rh;
var ks = {},
  Is = {};
Object.defineProperty(Is, "__esModule", { value: !0 });
Is.ArrowLeftIcon = void 0;
const fl = ft;
function Tv(e) {
  return (0, fl.h)(
    "svg",
    Object.assign(
      {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e
    ),
    (0, fl.h)("path", {
      d: "M8.60675 0.155884L7.37816 1.28209L12.7723 7.16662H0V8.83328H12.6548L6.82149 14.6666L8 15.8451L15.8201 8.02501L8.60675 0.155884Z",
    })
  );
}
Is.ArrowLeftIcon = Tv;
var As = {};
Object.defineProperty(As, "__esModule", { value: !0 });
As.LaptopIcon = void 0;
const mo = ft;
function Nv(e) {
  return (0, mo.h)(
    "svg",
    Object.assign(
      {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e
    ),
    (0, mo.h)("path", {
      d: "M1.8001 2.2002H12.2001V9.40019H1.8001V2.2002ZM3.4001 3.8002V7.80019H10.6001V3.8002H3.4001Z",
    }),
    (0, mo.h)("path", {
      d: "M13.4001 10.2002H0.600098C0.600098 11.0838 1.31644 11.8002 2.2001 11.8002H11.8001C12.6838 11.8002 13.4001 11.0838 13.4001 10.2002Z",
    })
  );
}
As.LaptopIcon = Nv;
var Ts = {};
Object.defineProperty(Ts, "__esModule", { value: !0 });
Ts.SafeIcon = void 0;
const dl = ft;
function Lv(e) {
  return (0, dl.h)(
    "svg",
    Object.assign(
      {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        xmlns: "http://www.w3.org/2000/svg",
      },
      e
    ),
    (0, dl.h)("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M0.600098 0.600098V11.8001H13.4001V0.600098H0.600098ZM7.0001 9.2001C5.3441 9.2001 4.0001 7.8561 4.0001 6.2001C4.0001 4.5441 5.3441 3.2001 7.0001 3.2001C8.6561 3.2001 10.0001 4.5441 10.0001 6.2001C10.0001 7.8561 8.6561 9.2001 7.0001 9.2001ZM0.600098 12.6001H3.8001V13.4001H0.600098V12.6001ZM10.2001 12.6001H13.4001V13.4001H10.2001V12.6001ZM8.8001 6.2001C8.8001 7.19421 7.99421 8.0001 7.0001 8.0001C6.00598 8.0001 5.2001 7.19421 5.2001 6.2001C5.2001 5.20598 6.00598 4.4001 7.0001 4.4001C7.99421 4.4001 8.8001 5.20598 8.8001 6.2001Z",
    })
  );
}
Ts.SafeIcon = Lv;
var xa = {};
Object.defineProperty(xa, "__esModule", { value: !0 });
xa.default =
  ".-cbwsdk-css-reset .-cbwsdk-try-extension{display:flex;margin-top:12px;height:202px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-try-extension.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-column-half{flex:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading{font-style:normal;font-weight:500;font-size:25px;line-height:32px;margin:0;max-width:204px}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta{appearance:none;border:none;background:none;color:#0052ff;cursor:pointer;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.light{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.dark{color:#588af5}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-wrapper{display:flex;align-items:center;margin-top:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-icon{display:block;margin-left:4px;height:14px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;list-style:none;height:100%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item{display:flex;align-items:center;flex-flow:nowrap;margin-top:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item:first-of-type{margin-top:0}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon-wrapper{display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon{display:flex;height:32px;width:32px;border-radius:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.light{background:#eef0f3}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.dark{background:#1e2025}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy{display:block;font-weight:400;font-size:14px;line-height:20px;padding-left:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.light{color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.dark{color:#8a919e}";
var Ch =
  (te && te.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(ks, "__esModule", { value: !0 });
ks.TryExtensionContent = void 0;
const _r = Ch(di),
  Qe = ft,
  _o = qi,
  Bv = Is,
  Pv = As,
  Ov = Ts,
  $v = Ch(xa);
function Fv({ theme: e }) {
  const [t, r] = (0, _o.useState)(!1),
    n = (0, _o.useCallback)(() => {
      window.open(
        "https://api.wallet.coinbase.com/rpc/v2/desktop/chrome",
        "_blank"
      );
    }, []),
    i = (0, _o.useCallback)(() => {
      t ? window.location.reload() : (n(), r(!0));
    }, [n, t]);
  return (0, Qe.h)(
    "div",
    { class: (0, _r.default)("-cbwsdk-try-extension", e) },
    (0, Qe.h)("style", null, $v.default),
    (0, Qe.h)(
      "div",
      { class: "-cbwsdk-try-extension-column-half" },
      (0, Qe.h)(
        "h3",
        { class: (0, _r.default)("-cbwsdk-try-extension-heading", e) },
        "Or try the Coinbase Wallet browser extension"
      ),
      (0, Qe.h)(
        "div",
        { class: "-cbwsdk-try-extension-cta-wrapper" },
        (0, Qe.h)(
          "button",
          {
            class: (0, _r.default)("-cbwsdk-try-extension-cta", e),
            onClick: i,
          },
          t ? "Refresh" : "Install"
        ),
        (0, Qe.h)(
          "div",
          null,
          !t &&
            (0, Qe.h)(Bv.ArrowLeftIcon, {
              class: "-cbwsdk-try-extension-cta-icon",
              fill: e === "light" ? "#0052FF" : "#588AF5",
            })
        )
      )
    ),
    (0, Qe.h)(
      "div",
      { class: "-cbwsdk-try-extension-column-half" },
      (0, Qe.h)(
        "ul",
        { class: "-cbwsdk-try-extension-list" },
        (0, Qe.h)(
          "li",
          { class: "-cbwsdk-try-extension-list-item" },
          (0, Qe.h)(
            "div",
            { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
            (0, Qe.h)(
              "span",
              {
                class: (0, _r.default)(
                  "-cbwsdk-try-extension-list-item-icon",
                  e
                ),
              },
              (0, Qe.h)(Pv.LaptopIcon, {
                fill: e === "light" ? "#0A0B0D" : "#FFFFFF",
              })
            )
          ),
          (0, Qe.h)(
            "div",
            {
              class: (0, _r.default)("-cbwsdk-try-extension-list-item-copy", e),
            },
            "Connect with dapps with just one click on your desktop browser"
          )
        ),
        (0, Qe.h)(
          "li",
          { class: "-cbwsdk-try-extension-list-item" },
          (0, Qe.h)(
            "div",
            { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
            (0, Qe.h)(
              "span",
              {
                class: (0, _r.default)(
                  "-cbwsdk-try-extension-list-item-icon",
                  e
                ),
              },
              (0, Qe.h)(Ov.SafeIcon, {
                fill: e === "light" ? "#0A0B0D" : "#FFFFFF",
              })
            )
          ),
          (0, Qe.h)(
            "div",
            {
              class: (0, _r.default)("-cbwsdk-try-extension-list-item-copy", e),
            },
            "Add an additional layer of security by using a supported Ledger hardware wallet"
          )
        )
      )
    )
  );
}
ks.TryExtensionContent = Fv;
var ka = {};
Object.defineProperty(ka, "__esModule", { value: !0 });
ka.default =
  ".-cbwsdk-css-reset .-cbwsdk-connect-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.light{background-color:rgba(0,0,0,.5)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.dark{background-color:rgba(50,53,61,.4)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box{display:flex;position:relative;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container{display:block}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container-hidden{display:none}";
var Mh =
  (te && te.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(Es, "__esModule", { value: !0 });
Es.ConnectDialog = void 0;
const yo = Mh(di),
  yr = ft,
  vo = qi,
  Dv = gn,
  jv = ks,
  Uv = Mh(ka),
  Hv = (e) => {
    const { isOpen: t, darkMode: r } = e,
      [n, i] = (0, vo.useState)(!t),
      [s, c] = (0, vo.useState)(!t);
    (0, vo.useEffect)(() => {
      const u = [
        window.setTimeout(() => {
          c(!t);
        }, 10),
      ];
      return (
        t
          ? i(!1)
          : u.push(
              window.setTimeout(() => {
                i(!0);
              }, 360)
            ),
        () => {
          u.forEach(window.clearTimeout);
        }
      );
    }, [t]);
    const o = r ? "dark" : "light";
    return (0, yr.h)(
      "div",
      {
        class: (0, yo.default)(
          "-cbwsdk-connect-dialog-container",
          n && "-cbwsdk-connect-dialog-container-hidden"
        ),
      },
      (0, yr.h)("style", null, Uv.default),
      (0, yr.h)("div", {
        class: (0, yo.default)(
          "-cbwsdk-connect-dialog-backdrop",
          o,
          s && "-cbwsdk-connect-dialog-backdrop-hidden"
        ),
      }),
      (0, yr.h)(
        "div",
        { class: "-cbwsdk-connect-dialog" },
        (0, yr.h)(
          "div",
          {
            class: (0, yo.default)(
              "-cbwsdk-connect-dialog-box",
              s && "-cbwsdk-connect-dialog-box-hidden"
            ),
          },
          e.connectDisabled
            ? null
            : (0, yr.h)(Dv.ConnectContent, {
                theme: o,
                version: e.version,
                sessionId: e.sessionId,
                sessionSecret: e.sessionSecret,
                linkAPIUrl: e.linkAPIUrl,
                isConnected: e.isConnected,
                isParentConnection: e.isParentConnection,
                chainId: e.chainId,
                onCancel: e.onCancel,
              }),
          (0, yr.h)(jv.TryExtensionContent, { theme: o })
        )
      )
    );
  };
Es.ConnectDialog = Hv;
Object.defineProperty(bs, "__esModule", { value: !0 });
bs.LinkFlow = void 0;
const wo = ft,
  Wv = Es;
class Vv {
  constructor(t) {
    (this.connected = !1),
      (this.chainId = 1),
      (this.isOpen = !1),
      (this.onCancel = null),
      (this.root = null),
      (this.connectDisabled = !1),
      (this.darkMode = t.darkMode),
      (this.version = t.version),
      (this.sessionId = t.sessionId),
      (this.sessionSecret = t.sessionSecret),
      (this.linkAPIUrl = t.linkAPIUrl),
      (this.isParentConnection = t.isParentConnection);
  }
  attach(t) {
    (this.root = document.createElement("div")),
      (this.root.className = "-cbwsdk-link-flow-root"),
      t.appendChild(this.root),
      this.render();
  }
  setConnected(t) {
    this.connected !== t && ((this.connected = t), this.render());
  }
  setChainId(t) {
    this.chainId !== t && ((this.chainId = t), this.render());
  }
  detach() {
    var t;
    this.root &&
      ((0, wo.render)(null, this.root),
      (t = this.root.parentElement) === null ||
        t === void 0 ||
        t.removeChild(this.root));
  }
  setConnectDisabled(t) {
    this.connectDisabled = t;
  }
  open(t) {
    (this.isOpen = !0), (this.onCancel = t.onCancel), this.render();
  }
  close() {
    (this.isOpen = !1), (this.onCancel = null), this.render();
  }
  render() {
    this.root &&
      (0, wo.render)(
        (0, wo.h)(Wv.ConnectDialog, {
          darkMode: this.darkMode,
          version: this.version,
          sessionId: this.sessionId,
          sessionSecret: this.sessionSecret,
          linkAPIUrl: this.linkAPIUrl,
          isOpen: this.isOpen,
          isConnected: this.connected,
          isParentConnection: this.isParentConnection,
          chainId: this.chainId,
          onCancel: this.onCancel,
          connectDisabled: this.connectDisabled,
        }),
        this.root
      );
  }
}
bs.LinkFlow = Vv;
var Ia = {},
  Aa = {};
Object.defineProperty(Aa, "__esModule", { value: !0 });
Aa.default =
  ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}";
(function (e) {
  var t =
    (te && te.__importDefault) ||
    function (g) {
      return g && g.__esModule ? g : { default: g };
    };
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.SnackbarInstance = e.SnackbarContainer = e.Snackbar = void 0);
  const r = t(di),
    n = ft,
    i = qi,
    s = t(Aa),
    c =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
    o =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=";
  class u {
    constructor(w) {
      (this.items = new Map()),
        (this.nextItemKey = 0),
        (this.root = null),
        (this.darkMode = w.darkMode);
    }
    attach(w) {
      (this.root = document.createElement("div")),
        (this.root.className = "-cbwsdk-snackbar-root"),
        w.appendChild(this.root),
        this.render();
    }
    presentItem(w) {
      const k = this.nextItemKey++;
      return (
        this.items.set(k, w),
        this.render(),
        () => {
          this.items.delete(k), this.render();
        }
      );
    }
    clear() {
      this.items.clear(), this.render();
    }
    render() {
      this.root &&
        (0, n.render)(
          (0, n.h)(
            "div",
            null,
            (0, n.h)(
              e.SnackbarContainer,
              { darkMode: this.darkMode },
              Array.from(this.items.entries()).map(([w, k]) =>
                (0, n.h)(e.SnackbarInstance, Object.assign({}, k, { key: w }))
              )
            )
          ),
          this.root
        );
    }
  }
  e.Snackbar = u;
  const d = (g) =>
    (0, n.h)(
      "div",
      { class: (0, r.default)("-cbwsdk-snackbar-container") },
      (0, n.h)("style", null, s.default),
      (0, n.h)("div", { class: "-cbwsdk-snackbar" }, g.children)
    );
  e.SnackbarContainer = d;
  const m = ({ autoExpand: g, message: w, menuItems: k }) => {
    const [L, H] = (0, i.useState)(!0),
      [D, I] = (0, i.useState)(g ?? !1);
    (0, i.useEffect)(() => {
      const $ = [
        window.setTimeout(() => {
          H(!1);
        }, 1),
        window.setTimeout(() => {
          I(!0);
        }, 1e4),
      ];
      return () => {
        $.forEach(window.clearTimeout);
      };
    });
    const T = () => {
      I(!D);
    };
    return (0, n.h)(
      "div",
      {
        class: (0, r.default)(
          "-cbwsdk-snackbar-instance",
          L && "-cbwsdk-snackbar-instance-hidden",
          D && "-cbwsdk-snackbar-instance-expanded"
        ),
      },
      (0, n.h)(
        "div",
        { class: "-cbwsdk-snackbar-instance-header", onClick: T },
        (0, n.h)("img", {
          src: c,
          class: "-cbwsdk-snackbar-instance-header-cblogo",
        }),
        " ",
        (0, n.h)(
          "div",
          { class: "-cbwsdk-snackbar-instance-header-message" },
          w
        ),
        (0, n.h)(
          "div",
          { class: "-gear-container" },
          !D &&
            (0, n.h)(
              "svg",
              {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              (0, n.h)("circle", {
                cx: "12",
                cy: "12",
                r: "12",
                fill: "#F5F7F8",
              })
            ),
          (0, n.h)("img", { src: o, class: "-gear-icon", title: "Expand" })
        )
      ),
      k &&
        k.length > 0 &&
        (0, n.h)(
          "div",
          { class: "-cbwsdk-snackbar-instance-menu" },
          k.map(($, V) =>
            (0, n.h)(
              "div",
              {
                class: (0, r.default)(
                  "-cbwsdk-snackbar-instance-menu-item",
                  $.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"
                ),
                onClick: $.onClick,
                key: V,
              },
              (0, n.h)(
                "svg",
                {
                  width: $.svgWidth,
                  height: $.svgHeight,
                  viewBox: "0 0 10 11",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                (0, n.h)("path", {
                  "fill-rule": $.defaultFillRule,
                  "clip-rule": $.defaultClipRule,
                  d: $.path,
                  fill: "#AAAAAA",
                })
              ),
              (0, n.h)(
                "span",
                {
                  class: (0, r.default)(
                    "-cbwsdk-snackbar-instance-menu-item-info",
                    $.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red"
                  ),
                },
                $.info
              )
            )
          )
        )
    );
  };
  e.SnackbarInstance = m;
})(Ia);
Object.defineProperty(hi, "__esModule", { value: !0 });
hi.WalletLinkRelayUI = void 0;
const qv = fi,
  zv = bs,
  Gv = Ia;
class Jv {
  constructor(t) {
    (this.standalone = null),
      (this.attached = !1),
      (this.snackbar = new Gv.Snackbar({ darkMode: t.darkMode })),
      (this.linkFlow = new zv.LinkFlow({
        darkMode: t.darkMode,
        version: t.version,
        sessionId: t.session.id,
        sessionSecret: t.session.secret,
        linkAPIUrl: t.linkAPIUrl,
        isParentConnection: !1,
      }));
  }
  attach() {
    if (this.attached)
      throw new Error("Coinbase Wallet SDK UI is already attached");
    const t = document.documentElement,
      r = document.createElement("div");
    (r.className = "-cbwsdk-css-reset"),
      t.appendChild(r),
      this.linkFlow.attach(r),
      this.snackbar.attach(r),
      (this.attached = !0),
      (0, qv.injectCssReset)();
  }
  setConnected(t) {
    this.linkFlow.setConnected(t);
  }
  setChainId(t) {
    this.linkFlow.setChainId(t);
  }
  setConnectDisabled(t) {
    this.linkFlow.setConnectDisabled(t);
  }
  addEthereumChain() {}
  watchAsset() {}
  switchEthereumChain() {}
  requestEthereumAccounts(t) {
    this.linkFlow.open({ onCancel: t.onCancel });
  }
  hideRequestEthereumAccounts() {
    this.linkFlow.close();
  }
  signEthereumMessage() {}
  signEthereumTransaction() {}
  submitEthereumTransaction() {}
  ethereumAddressFromSignedMessage() {}
  showConnecting(t) {
    let r;
    return (
      t.isUnlinkedErrorState
        ? (r = {
            autoExpand: !0,
            message: "Connection lost",
            menuItems: [
              {
                isRed: !1,
                info: "Reset connection",
                svgWidth: "10",
                svgHeight: "11",
                path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                defaultFillRule: "evenodd",
                defaultClipRule: "evenodd",
                onClick: t.onResetConnection,
              },
            ],
          })
        : (r = {
            message: "Confirm on phone",
            menuItems: [
              {
                isRed: !0,
                info: "Cancel transaction",
                svgWidth: "11",
                svgHeight: "11",
                path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                defaultFillRule: "inherit",
                defaultClipRule: "inherit",
                onClick: t.onCancel,
              },
              {
                isRed: !1,
                info: "Reset connection",
                svgWidth: "10",
                svgHeight: "11",
                path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                defaultFillRule: "evenodd",
                defaultClipRule: "evenodd",
                onClick: t.onResetConnection,
              },
            ],
          }),
      this.snackbar.presentItem(r)
    );
  }
  reloadUI() {
    document.location.reload();
  }
  inlineAccountsResponse() {
    return !1;
  }
  inlineAddEthereumChain() {
    return !1;
  }
  inlineWatchAsset() {
    return !1;
  }
  inlineSwitchEthereumChain() {
    return !1;
  }
  setStandalone(t) {
    this.standalone = t;
  }
  isStandalone() {
    var t;
    return (t = this.standalone) !== null && t !== void 0 ? t : !1;
  }
}
hi.WalletLinkRelayUI = Jv;
Object.defineProperty(ui, "__esModule", { value: !0 });
ui.WalletLinkRelay = void 0;
const en = si,
  Zv = Xe,
  ze = X,
  vr = Rn,
  pl = Et,
  Qt = Cn,
  Kv = ys,
  wr = En,
  Qv = hi;
class qt extends pl.RelayAbstract {
  constructor(t) {
    var r;
    super(),
      (this.accountsCallback = null),
      (this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" }),
      (this.chainCallback = null),
      (this.dappDefaultChain = 1),
      (this.appName = ""),
      (this.appLogoUrl = null),
      (this.linkedUpdated = (c) => {
        var o;
        this.isLinked = c;
        const u = this.storage.getItem(pl.LOCAL_STORAGE_ADDRESSES_KEY);
        if (
          (c && (this.session.linked = c), (this.isUnlinkedErrorState = !1), u)
        ) {
          const d = u.split(" "),
            m = this.storage.getItem("IsStandaloneSigning") === "true";
          if (d[0] !== "" && !c && this.session.linked && !m) {
            this.isUnlinkedErrorState = !0;
            const g = this.getSessionIdHash();
            (o = this.diagnostic) === null ||
              o === void 0 ||
              o.log(vr.EVENTS.UNLINKED_ERROR_STATE, { sessionIdHash: g });
          }
        }
      }),
      (this.metadataUpdated = (c, o) => {
        this.storage.setItem(c, o);
      }),
      (this.chainUpdated = (c, o) => {
        (this.chainCallbackParams.chainId === c &&
          this.chainCallbackParams.jsonRpcUrl === o) ||
          ((this.chainCallbackParams = { chainId: c, jsonRpcUrl: o }),
          this.chainCallback && this.chainCallback(c, o));
      }),
      (this.accountUpdated = (c) => {
        this.accountsCallback && this.accountsCallback([c]),
          qt.accountRequestCallbackIds.size > 0 &&
            (Array.from(qt.accountRequestCallbackIds.values()).forEach((o) => {
              const u = {
                type: "WEB3_RESPONSE",
                id: o,
                response: { method: "requestEthereumAccounts", result: [c] },
              };
              this.invokeCallback(
                Object.assign(Object.assign({}, u), { id: o })
              );
            }),
            qt.accountRequestCallbackIds.clear());
      }),
      (this.connectedUpdated = (c) => {
        this.ui.setConnected(c);
      }),
      (this.resetAndReload = this.resetAndReload.bind(this)),
      (this.linkAPIUrl = t.linkAPIUrl),
      (this.storage = t.storage),
      (this.options = t);
    const { session: n, ui: i, connection: s } = this.subscribe();
    (this._session = n),
      (this.connection = s),
      (this.relayEventManager = t.relayEventManager),
      (this.diagnostic = t.diagnosticLogger),
      (this._reloadOnDisconnect =
        (r = t.reloadOnDisconnect) !== null && r !== void 0 ? r : !0),
      (this.ui = i);
  }
  subscribe() {
    const t =
        Qt.Session.load(this.storage) || new Qt.Session(this.storage).save(),
      { linkAPIUrl: r, diagnostic: n } = this,
      i = new Kv.WalletLinkConnection({
        session: t,
        linkAPIUrl: r,
        diagnostic: n,
        listener: this,
      }),
      { version: s, darkMode: c } = this.options,
      o = this.options.uiConstructor({
        linkAPIUrl: r,
        version: s,
        darkMode: c,
        session: t,
      });
    return i.connect(), { session: t, ui: o, connection: i };
  }
  attachUI() {
    this.ui.attach();
  }
  resetAndReload() {
    Promise.race([
      this.connection.setSessionMetadata("__destroyed", "1"),
      new Promise((t) => setTimeout(() => t(null), 1e3)),
    ])
      .then(() => {
        var t, r;
        const n = this.ui.isStandalone();
        (t = this.diagnostic) === null ||
          t === void 0 ||
          t.log(vr.EVENTS.SESSION_STATE_CHANGE, {
            method: "relay::resetAndReload",
            sessionMetadataChange: "__destroyed, 1",
            sessionIdHash: this.getSessionIdHash(),
          }),
          this.connection.destroy();
        const i = Qt.Session.load(this.storage);
        if (
          ((i == null ? void 0 : i.id) === this._session.id
            ? this.storage.clear()
            : i &&
              ((r = this.diagnostic) === null ||
                r === void 0 ||
                r.log(vr.EVENTS.SKIPPED_CLEARING_SESSION, {
                  sessionIdHash: this.getSessionIdHash(),
                  storedSessionIdHash: Qt.Session.hash(i.id),
                })),
          this._reloadOnDisconnect)
        ) {
          this.ui.reloadUI();
          return;
        }
        this.accountsCallback && this.accountsCallback([], !0);
        const { session: s, ui: c, connection: o } = this.subscribe();
        (this._session = s),
          (this.connection = o),
          (this.ui = c),
          n && this.ui.setStandalone && this.ui.setStandalone(!0),
          this.options.headlessMode || this.attachUI();
      })
      .catch((t) => {
        var r;
        (r = this.diagnostic) === null ||
          r === void 0 ||
          r.log(vr.EVENTS.FAILURE, {
            method: "relay::resetAndReload",
            message: `failed to reset and reload with ${t}`,
            sessionIdHash: this.getSessionIdHash(),
          });
      });
  }
  setAppInfo(t, r) {
    (this.appName = t), (this.appLogoUrl = r);
  }
  getStorageItem(t) {
    return this.storage.getItem(t);
  }
  get session() {
    return this._session;
  }
  setStorageItem(t, r) {
    this.storage.setItem(t, r);
  }
  signEthereumMessage(t, r, n, i) {
    return this.sendRequest({
      method: "signEthereumMessage",
      params: {
        message: (0, ze.hexStringFromBuffer)(t, !0),
        address: r,
        addPrefix: n,
        typedDataJson: i || null,
      },
    });
  }
  ethereumAddressFromSignedMessage(t, r, n) {
    return this.sendRequest({
      method: "ethereumAddressFromSignedMessage",
      params: {
        message: (0, ze.hexStringFromBuffer)(t, !0),
        signature: (0, ze.hexStringFromBuffer)(r, !0),
        addPrefix: n,
      },
    });
  }
  signEthereumTransaction(t) {
    return this.sendRequest({
      method: "signEthereumTransaction",
      params: {
        fromAddress: t.fromAddress,
        toAddress: t.toAddress,
        weiValue: (0, ze.bigIntStringFromBN)(t.weiValue),
        data: (0, ze.hexStringFromBuffer)(t.data, !0),
        nonce: t.nonce,
        gasPriceInWei: t.gasPriceInWei
          ? (0, ze.bigIntStringFromBN)(t.gasPriceInWei)
          : null,
        maxFeePerGas: t.gasPriceInWei
          ? (0, ze.bigIntStringFromBN)(t.gasPriceInWei)
          : null,
        maxPriorityFeePerGas: t.gasPriceInWei
          ? (0, ze.bigIntStringFromBN)(t.gasPriceInWei)
          : null,
        gasLimit: t.gasLimit ? (0, ze.bigIntStringFromBN)(t.gasLimit) : null,
        chainId: t.chainId,
        shouldSubmit: !1,
      },
    });
  }
  signAndSubmitEthereumTransaction(t) {
    return this.sendRequest({
      method: "signEthereumTransaction",
      params: {
        fromAddress: t.fromAddress,
        toAddress: t.toAddress,
        weiValue: (0, ze.bigIntStringFromBN)(t.weiValue),
        data: (0, ze.hexStringFromBuffer)(t.data, !0),
        nonce: t.nonce,
        gasPriceInWei: t.gasPriceInWei
          ? (0, ze.bigIntStringFromBN)(t.gasPriceInWei)
          : null,
        maxFeePerGas: t.maxFeePerGas
          ? (0, ze.bigIntStringFromBN)(t.maxFeePerGas)
          : null,
        maxPriorityFeePerGas: t.maxPriorityFeePerGas
          ? (0, ze.bigIntStringFromBN)(t.maxPriorityFeePerGas)
          : null,
        gasLimit: t.gasLimit ? (0, ze.bigIntStringFromBN)(t.gasLimit) : null,
        chainId: t.chainId,
        shouldSubmit: !0,
      },
    });
  }
  submitEthereumTransaction(t, r) {
    return this.sendRequest({
      method: "submitEthereumTransaction",
      params: {
        signedTransaction: (0, ze.hexStringFromBuffer)(t, !0),
        chainId: r,
      },
    });
  }
  scanQRCode(t) {
    return this.sendRequest({ method: "scanQRCode", params: { regExp: t } });
  }
  getQRCodeUrl() {
    return (0, ze.createQrUrl)(
      this._session.id,
      this._session.secret,
      this.linkAPIUrl,
      !1,
      this.options.version,
      this.dappDefaultChain
    );
  }
  genericRequest(t, r) {
    return this.sendRequest({
      method: "generic",
      params: { action: r, data: t },
    });
  }
  sendGenericMessage(t) {
    return this.sendRequest(t);
  }
  sendRequest(t) {
    let r = null;
    const n = (0, ze.randomBytesHex)(8),
      i = (c) => {
        this.publishWeb3RequestCanceledEvent(n),
          this.handleErrorResponse(n, t.method, c),
          r == null || r();
      };
    return {
      promise: new Promise((c, o) => {
        this.ui.isStandalone() ||
          (r = this.ui.showConnecting({
            isUnlinkedErrorState: this.isUnlinkedErrorState,
            onCancel: i,
            onResetConnection: this.resetAndReload,
          })),
          this.relayEventManager.callbacks.set(n, (u) => {
            if ((r == null || r(), (0, wr.isErrorResponse)(u)))
              return o(new Error(u.errorMessage));
            c(u);
          }),
          this.ui.isStandalone()
            ? this.sendRequestStandalone(n, t)
            : this.publishWeb3RequestEvent(n, t);
      }),
      cancel: i,
    };
  }
  setConnectDisabled(t) {
    this.ui.setConnectDisabled(t);
  }
  setAccountsCallback(t) {
    this.accountsCallback = t;
  }
  setChainCallback(t) {
    this.chainCallback = t;
  }
  setDappDefaultChainCallback(t) {
    (this.dappDefaultChain = t),
      this.ui instanceof Qv.WalletLinkRelayUI && this.ui.setChainId(t);
  }
  publishWeb3RequestEvent(t, r) {
    var n;
    const i = { type: "WEB3_REQUEST", id: t, request: r },
      s = Qt.Session.load(this.storage);
    (n = this.diagnostic) === null ||
      n === void 0 ||
      n.log(vr.EVENTS.WEB3_REQUEST, {
        eventId: i.id,
        method: `relay::${r.method}`,
        sessionIdHash: this.getSessionIdHash(),
        storedSessionIdHash: s ? Qt.Session.hash(s.id) : "",
        isSessionMismatched: (
          (s == null ? void 0 : s.id) !== this._session.id
        ).toString(),
      }),
      this.publishEvent("Web3Request", i, !0)
        .then((c) => {
          var o;
          (o = this.diagnostic) === null ||
            o === void 0 ||
            o.log(vr.EVENTS.WEB3_REQUEST_PUBLISHED, {
              eventId: i.id,
              method: `relay::${r.method}`,
              sessionIdHash: this.getSessionIdHash(),
              storedSessionIdHash: s ? Qt.Session.hash(s.id) : "",
              isSessionMismatched: (
                (s == null ? void 0 : s.id) !== this._session.id
              ).toString(),
            });
        })
        .catch((c) => {
          this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id: i.id,
            response: { method: r.method, errorMessage: c.message },
          });
        });
  }
  publishWeb3RequestCanceledEvent(t) {
    const r = { type: "WEB3_REQUEST_CANCELED", id: t };
    this.publishEvent("Web3RequestCanceled", r, !1).then();
  }
  publishEvent(t, r, n) {
    return this.connection.publishEvent(t, r, n);
  }
  handleWeb3ResponseMessage(t) {
    var r;
    const { response: n } = t;
    if (
      ((r = this.diagnostic) === null ||
        r === void 0 ||
        r.log(vr.EVENTS.WEB3_RESPONSE, {
          eventId: t.id,
          method: `relay::${n.method}`,
          sessionIdHash: this.getSessionIdHash(),
        }),
      n.method === "requestEthereumAccounts")
    ) {
      qt.accountRequestCallbackIds.forEach((i) =>
        this.invokeCallback(Object.assign(Object.assign({}, t), { id: i }))
      ),
        qt.accountRequestCallbackIds.clear();
      return;
    }
    this.invokeCallback(t);
  }
  handleErrorResponse(t, r, n, i) {
    var s;
    const c =
      (s = n == null ? void 0 : n.message) !== null && s !== void 0
        ? s
        : (0, en.getMessageFromCode)(i);
    this.handleWeb3ResponseMessage({
      type: "WEB3_RESPONSE",
      id: t,
      response: { method: r, errorMessage: c, errorCode: i },
    });
  }
  invokeCallback(t) {
    const r = this.relayEventManager.callbacks.get(t.id);
    r && (r(t.response), this.relayEventManager.callbacks.delete(t.id));
  }
  requestEthereumAccounts() {
    const t = {
        method: "requestEthereumAccounts",
        params: { appName: this.appName, appLogoUrl: this.appLogoUrl || null },
      },
      r = (0, ze.randomBytesHex)(8),
      n = (s) => {
        this.publishWeb3RequestCanceledEvent(r),
          this.handleErrorResponse(r, t.method, s);
      };
    return {
      promise: new Promise((s, c) => {
        if (
          (this.relayEventManager.callbacks.set(r, (o) => {
            if (
              (this.ui.hideRequestEthereumAccounts(),
              (0, wr.isErrorResponse)(o))
            )
              return c(new Error(o.errorMessage));
            s(o);
          }),
          this.ui.inlineAccountsResponse())
        ) {
          const o = (u) => {
            this.handleWeb3ResponseMessage({
              type: "WEB3_RESPONSE",
              id: r,
              response: { method: "requestEthereumAccounts", result: u },
            });
          };
          this.ui.requestEthereumAccounts({ onCancel: n, onAccounts: o });
        } else {
          const o = en.standardErrors.provider.userRejectedRequest(
            "User denied account authorization"
          );
          this.ui.requestEthereumAccounts({ onCancel: () => n(o) });
        }
        qt.accountRequestCallbackIds.add(r),
          !this.ui.inlineAccountsResponse() &&
            !this.ui.isStandalone() &&
            this.publishWeb3RequestEvent(r, t);
      }),
      cancel: n,
    };
  }
  selectProvider(t) {
    const r = { method: "selectProvider", params: { providerOptions: t } },
      n = (0, ze.randomBytesHex)(8),
      i = (c) => {
        this.publishWeb3RequestCanceledEvent(n),
          this.handleErrorResponse(n, r.method, c);
      },
      s = new Promise((c, o) => {
        this.relayEventManager.callbacks.set(n, (m) => {
          if ((0, wr.isErrorResponse)(m)) return o(new Error(m.errorMessage));
          c(m);
        });
        const u = (m) => {
            this.handleWeb3ResponseMessage({
              type: "WEB3_RESPONSE",
              id: n,
              response: {
                method: "selectProvider",
                result: Zv.ProviderType.Unselected,
              },
            });
          },
          d = (m) => {
            this.handleWeb3ResponseMessage({
              type: "WEB3_RESPONSE",
              id: n,
              response: { method: "selectProvider", result: m },
            });
          };
        this.ui.selectProvider &&
          this.ui.selectProvider({
            onApprove: d,
            onCancel: u,
            providerOptions: t,
          });
      });
    return { cancel: i, promise: s };
  }
  watchAsset(t, r, n, i, s, c) {
    const o = {
      method: "watchAsset",
      params: {
        type: t,
        options: { address: r, symbol: n, decimals: i, image: s },
        chainId: c,
      },
    };
    let u = null;
    const d = (0, ze.randomBytesHex)(8),
      m = (w) => {
        this.publishWeb3RequestCanceledEvent(d),
          this.handleErrorResponse(d, o.method, w),
          u == null || u();
      };
    this.ui.inlineWatchAsset() ||
      (u = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: m,
        onResetConnection: this.resetAndReload,
      }));
    const g = new Promise((w, k) => {
      this.relayEventManager.callbacks.set(d, (D) => {
        if ((u == null || u(), (0, wr.isErrorResponse)(D)))
          return k(new Error(D.errorMessage));
        w(D);
      });
      const L = (D) => {
          this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id: d,
            response: { method: "watchAsset", result: !1 },
          });
        },
        H = () => {
          this.handleWeb3ResponseMessage({
            type: "WEB3_RESPONSE",
            id: d,
            response: { method: "watchAsset", result: !0 },
          });
        };
      this.ui.inlineWatchAsset() &&
        this.ui.watchAsset({
          onApprove: H,
          onCancel: L,
          type: t,
          address: r,
          symbol: n,
          decimals: i,
          image: s,
          chainId: c,
        }),
        !this.ui.inlineWatchAsset() &&
          !this.ui.isStandalone() &&
          this.publishWeb3RequestEvent(d, o);
    });
    return { cancel: m, promise: g };
  }
  addEthereumChain(t, r, n, i, s, c) {
    const o = {
      method: "addEthereumChain",
      params: {
        chainId: t,
        rpcUrls: r,
        blockExplorerUrls: i,
        chainName: s,
        iconUrls: n,
        nativeCurrency: c,
      },
    };
    let u = null;
    const d = (0, ze.randomBytesHex)(8),
      m = (w) => {
        this.publishWeb3RequestCanceledEvent(d),
          this.handleErrorResponse(d, o.method, w),
          u == null || u();
      };
    return (
      this.ui.inlineAddEthereumChain(t) ||
        (u = this.ui.showConnecting({
          isUnlinkedErrorState: this.isUnlinkedErrorState,
          onCancel: m,
          onResetConnection: this.resetAndReload,
        })),
      {
        promise: new Promise((w, k) => {
          this.relayEventManager.callbacks.set(d, (D) => {
            if ((u == null || u(), (0, wr.isErrorResponse)(D)))
              return k(new Error(D.errorMessage));
            w(D);
          });
          const L = (D) => {
              this.handleWeb3ResponseMessage({
                type: "WEB3_RESPONSE",
                id: d,
                response: {
                  method: "addEthereumChain",
                  result: { isApproved: !1, rpcUrl: "" },
                },
              });
            },
            H = (D) => {
              this.handleWeb3ResponseMessage({
                type: "WEB3_RESPONSE",
                id: d,
                response: {
                  method: "addEthereumChain",
                  result: { isApproved: !0, rpcUrl: D },
                },
              });
            };
          this.ui.inlineAddEthereumChain(t) &&
            this.ui.addEthereumChain({
              onCancel: L,
              onApprove: H,
              chainId: o.params.chainId,
              rpcUrls: o.params.rpcUrls,
              blockExplorerUrls: o.params.blockExplorerUrls,
              chainName: o.params.chainName,
              iconUrls: o.params.iconUrls,
              nativeCurrency: o.params.nativeCurrency,
            }),
            !this.ui.inlineAddEthereumChain(t) &&
              !this.ui.isStandalone() &&
              this.publishWeb3RequestEvent(d, o);
        }),
        cancel: m,
      }
    );
  }
  switchEthereumChain(t, r) {
    const n = {
        method: "switchEthereumChain",
        params: Object.assign({ chainId: t }, { address: r }),
      },
      i = (0, ze.randomBytesHex)(8),
      s = (o) => {
        this.publishWeb3RequestCanceledEvent(i),
          this.handleErrorResponse(i, n.method, o);
      };
    return {
      promise: new Promise((o, u) => {
        this.relayEventManager.callbacks.set(i, (g) => {
          if ((0, wr.isErrorResponse)(g) && g.errorCode)
            return u(
              en.standardErrors.provider.custom({
                code: g.errorCode,
                message:
                  "Unrecognized chain ID. Try adding the chain using addEthereumChain first.",
              })
            );
          if ((0, wr.isErrorResponse)(g)) return u(new Error(g.errorMessage));
          o(g);
        });
        const d = (g) => {
            var w;
            if (g) {
              const k =
                (w = (0, en.getErrorCode)(g)) !== null && w !== void 0
                  ? w
                  : en.standardErrorCodes.provider.unsupportedChain;
              this.handleErrorResponse(
                i,
                "switchEthereumChain",
                g instanceof Error
                  ? g
                  : en.standardErrors.provider.unsupportedChain(t),
                k
              );
            } else
              this.handleWeb3ResponseMessage({
                type: "WEB3_RESPONSE",
                id: i,
                response: {
                  method: "switchEthereumChain",
                  result: { isApproved: !1, rpcUrl: "" },
                },
              });
          },
          m = (g) => {
            this.handleWeb3ResponseMessage({
              type: "WEB3_RESPONSE",
              id: i,
              response: {
                method: "switchEthereumChain",
                result: { isApproved: !0, rpcUrl: g },
              },
            });
          };
        this.ui.switchEthereumChain({
          onCancel: d,
          onApprove: m,
          chainId: n.params.chainId,
          address: n.params.address,
        }),
          !this.ui.inlineSwitchEthereumChain() &&
            !this.ui.isStandalone() &&
            this.publishWeb3RequestEvent(i, n);
      }),
      cancel: s,
    };
  }
  inlineAddEthereumChain(t) {
    return this.ui.inlineAddEthereumChain(t);
  }
  getSessionIdHash() {
    return Qt.Session.hash(this._session.id);
  }
  sendRequestStandalone(t, r) {
    const n = (s) => {
        this.handleErrorResponse(t, r.method, s);
      },
      i = (s) => {
        this.handleWeb3ResponseMessage({
          type: "WEB3_RESPONSE",
          id: t,
          response: s,
        });
      };
    switch (r.method) {
      case "signEthereumMessage":
        this.ui.signEthereumMessage({ request: r, onSuccess: i, onCancel: n });
        break;
      case "signEthereumTransaction":
        this.ui.signEthereumTransaction({
          request: r,
          onSuccess: i,
          onCancel: n,
        });
        break;
      case "submitEthereumTransaction":
        this.ui.submitEthereumTransaction({
          request: r,
          onSuccess: i,
          onCancel: n,
        });
        break;
      case "ethereumAddressFromSignedMessage":
        this.ui.ethereumAddressFromSignedMessage({ request: r, onSuccess: i });
        break;
      default:
        n();
        break;
    }
  }
}
ui.WalletLinkRelay = qt;
qt.accountRequestCallbackIds = new Set();
var pi = {},
  Ns = {},
  xh = {};
(function (e) {
  var t =
      (te && te.__createBinding) ||
      (Object.create
        ? function (n, i, s, c) {
            c === void 0 && (c = s);
            var o = Object.getOwnPropertyDescriptor(i, s);
            (!o ||
              ("get" in o ? !i.__esModule : o.writable || o.configurable)) &&
              (o = {
                enumerable: !0,
                get: function () {
                  return i[s];
                },
              }),
              Object.defineProperty(n, c, o);
          }
        : function (n, i, s, c) {
            c === void 0 && (c = s), (n[c] = i[s]);
          }),
    r =
      (te && te.__exportStar) ||
      function (n, i) {
        for (var s in n)
          s !== "default" &&
            !Object.prototype.hasOwnProperty.call(i, s) &&
            t(i, n, s);
      };
  Object.defineProperty(e, "__esModule", { value: !0 }), r(Ia, e);
})(xh);
var Ta = {};
Object.defineProperty(Ta, "__esModule", { value: !0 });
Ta.default =
  ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}";
var kh =
  (te && te.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(Ns, "__esModule", { value: !0 });
Ns.RedirectDialog = void 0;
const Yv = kh(di),
  Ot = ft,
  Xv = fi,
  ew = xh,
  tw = kh(Ta);
class rw {
  constructor() {
    this.root = null;
  }
  attach() {
    const t = document.documentElement;
    (this.root = document.createElement("div")),
      (this.root.className = "-cbwsdk-css-reset"),
      t.appendChild(this.root),
      (0, Xv.injectCssReset)();
  }
  present(t) {
    this.render(t);
  }
  clear() {
    this.render(null);
  }
  render(t) {
    this.root &&
      ((0, Ot.render)(null, this.root),
      t &&
        (0, Ot.render)(
          (0, Ot.h)(
            nw,
            Object.assign({}, t, {
              onDismiss: () => {
                this.clear();
              },
            })
          ),
          this.root
        ));
  }
}
Ns.RedirectDialog = rw;
const nw = ({
  title: e,
  buttonText: t,
  darkMode: r,
  onButtonClick: n,
  onDismiss: i,
}) => {
  const s = r ? "dark" : "light";
  return (0, Ot.h)(
    ew.SnackbarContainer,
    { darkMode: r },
    (0, Ot.h)(
      "div",
      { class: "-cbwsdk-redirect-dialog" },
      (0, Ot.h)("style", null, tw.default),
      (0, Ot.h)("div", {
        class: "-cbwsdk-redirect-dialog-backdrop",
        onClick: i,
      }),
      (0, Ot.h)(
        "div",
        { class: (0, Yv.default)("-cbwsdk-redirect-dialog-box", s) },
        (0, Ot.h)("p", null, e),
        (0, Ot.h)("button", { onClick: n }, t)
      )
    )
  );
};
Object.defineProperty(pi, "__esModule", { value: !0 });
pi.MobileRelayUI = void 0;
const iw = Ns;
class sw {
  constructor(t) {
    (this.attached = !1),
      (this.darkMode = !1),
      (this.redirectDialog = new iw.RedirectDialog()),
      (this.darkMode = t.darkMode);
  }
  attach() {
    if (this.attached)
      throw new Error("Coinbase Wallet SDK UI is already attached");
    this.redirectDialog.attach(), (this.attached = !0);
  }
  setConnected(t) {}
  redirectToCoinbaseWallet(t) {
    const r = new URL("https://go.cb-w.com/walletlink");
    r.searchParams.append("redirect_url", window.location.href),
      t && r.searchParams.append("wl_url", t);
    const n = document.createElement("a");
    (n.target = "cbw-opener"),
      (n.href = r.href),
      (n.rel = "noreferrer noopener"),
      n.click();
  }
  openCoinbaseWalletDeeplink(t) {
    this.redirectDialog.present({
      title: "Redirecting to Coinbase Wallet...",
      buttonText: "Open",
      darkMode: this.darkMode,
      onButtonClick: () => {
        this.redirectToCoinbaseWallet(t);
      },
    }),
      setTimeout(() => {
        this.redirectToCoinbaseWallet(t);
      }, 99);
  }
  showConnecting(t) {
    return () => {
      this.redirectDialog.clear();
    };
  }
  hideRequestEthereumAccounts() {
    this.redirectDialog.clear();
  }
  requestEthereumAccounts() {}
  addEthereumChain() {}
  watchAsset() {}
  selectProvider() {}
  switchEthereumChain() {}
  signEthereumMessage() {}
  signEthereumTransaction() {}
  submitEthereumTransaction() {}
  ethereumAddressFromSignedMessage() {}
  reloadUI() {}
  setStandalone() {}
  setConnectDisabled() {}
  inlineAccountsResponse() {
    return !1;
  }
  inlineAddEthereumChain() {
    return !1;
  }
  inlineWatchAsset() {
    return !1;
  }
  inlineSwitchEthereumChain() {
    return !1;
  }
  isStandalone() {
    return !1;
  }
}
pi.MobileRelayUI = sw;
Object.defineProperty(li, "__esModule", { value: !0 });
li.MobileRelay = void 0;
const ow = X,
  aw = ui,
  cw = pi;
class lw extends aw.WalletLinkRelay {
  constructor(t) {
    var r;
    super(t),
      (this._enableMobileWalletLink =
        (r = t.enableMobileWalletLink) !== null && r !== void 0 ? r : !1);
  }
  requestEthereumAccounts() {
    return this._enableMobileWalletLink
      ? super.requestEthereumAccounts()
      : {
          promise: new Promise(() => {
            const t = (0, ow.getLocation)();
            t.href = `https://go.cb-w.com/dapp?cb_url=${encodeURIComponent(
              t.href
            )}`;
          }),
          cancel: () => {},
        };
  }
  publishWeb3RequestEvent(t, r) {
    if (
      (super.publishWeb3RequestEvent(t, r),
      !(this._enableMobileWalletLink && this.ui instanceof cw.MobileRelayUI))
    )
      return;
    let n = !1;
    switch (r.method) {
      case "requestEthereumAccounts":
      case "connectAndSignIn":
        (n = !0), this.ui.openCoinbaseWalletDeeplink(this.getQRCodeUrl());
        break;
      case "switchEthereumChain":
        return;
      default:
        (n = !0), this.ui.openCoinbaseWalletDeeplink();
        break;
    }
    n &&
      window.addEventListener(
        "blur",
        () => {
          window.addEventListener(
            "focus",
            () => {
              this.connection.checkUnseenEvents();
            },
            { once: !0 }
          );
        },
        { once: !0 }
      );
  }
  handleWeb3ResponseMessage(t) {
    super.handleWeb3ResponseMessage(t);
  }
  connectAndSignIn(t) {
    if (!this._enableMobileWalletLink)
      throw new Error(
        "connectAndSignIn is supported only when enableMobileWalletLink is on"
      );
    return this.sendRequest({
      method: "connectAndSignIn",
      params: {
        appName: this.appName,
        appLogoUrl: this.appLogoUrl,
        domain: window.location.hostname,
        aud: window.location.href,
        version: "1",
        type: "eip4361",
        nonce: t.nonce,
        iat: new Date().toISOString(),
        chainId: `eip155:${this.dappDefaultChain}`,
        statement: t.statement,
        resources: t.resources,
      },
    });
  }
}
li.MobileRelay = lw;
const uw = t0,
  hw = Di;
function Ih(e) {
  return Buffer.allocUnsafe(e).fill(0);
}
function Ah(e, t, r) {
  const n = Ih(t);
  return (
    (e = Ls(e)),
    r
      ? e.length < t
        ? (e.copy(n), n)
        : e.slice(0, t)
      : e.length < t
      ? (e.copy(n, t - e.length), n)
      : e.slice(-t)
  );
}
function fw(e, t) {
  return Ah(e, t, !0);
}
function Ls(e) {
  if (!Buffer.isBuffer(e))
    if (Array.isArray(e)) e = Buffer.from(e);
    else if (typeof e == "string")
      Th(e) ? (e = Buffer.from(gw(Nh(e)), "hex")) : (e = Buffer.from(e));
    else if (typeof e == "number") e = intToBuffer(e);
    else if (e == null) e = Buffer.allocUnsafe(0);
    else if (hw.isBN(e)) e = e.toArrayLike(Buffer);
    else if (e.toArray) e = Buffer.from(e.toArray());
    else throw new Error("invalid type");
  return e;
}
function dw(e) {
  return (e = Ls(e)), "0x" + e.toString("hex");
}
function pw(e, t) {
  return (
    (e = Ls(e)),
    t || (t = 256),
    uw("keccak" + t)
      .update(e)
      .digest()
  );
}
function gw(e) {
  return e.length % 2 ? "0" + e : e;
}
function Th(e) {
  return typeof e == "string" && e.match(/^0x[0-9A-Fa-f]*$/);
}
function Nh(e) {
  return typeof e == "string" && e.startsWith("0x") ? e.slice(2) : e;
}
var Lh = {
  zeros: Ih,
  setLength: Ah,
  setLengthRight: fw,
  isHexString: Th,
  stripHexPrefix: Nh,
  toBuffer: Ls,
  bufferToHex: dw,
  keccak: pw,
};
const Nr = Lh,
  xr = Di;
function Bh(e) {
  return e.startsWith("int[")
    ? "int256" + e.slice(3)
    : e === "int"
    ? "int256"
    : e.startsWith("uint[")
    ? "uint256" + e.slice(4)
    : e === "uint"
    ? "uint256"
    : e.startsWith("fixed[")
    ? "fixed128x128" + e.slice(5)
    : e === "fixed"
    ? "fixed128x128"
    : e.startsWith("ufixed[")
    ? "ufixed128x128" + e.slice(6)
    : e === "ufixed"
    ? "ufixed128x128"
    : e;
}
function cn(e) {
  return parseInt(/^\D+(\d+)$/.exec(e)[1], 10);
}
function gl(e) {
  var t = /^\D+(\d+)x(\d+)$/.exec(e);
  return [parseInt(t[1], 10), parseInt(t[2], 10)];
}
function Ph(e) {
  var t = e.match(/(.*)\[(.*?)\]$/);
  return t ? (t[2] === "" ? "dynamic" : parseInt(t[2], 10)) : null;
}
function Sr(e) {
  var t = typeof e;
  if (t === "string")
    return Nr.isHexString(e) ? new xr(Nr.stripHexPrefix(e), 16) : new xr(e, 10);
  if (t === "number") return new xr(e);
  if (e.toArray) return e;
  throw new Error("Argument is not a number");
}
function Pt(e, t) {
  var r, n, i, s;
  if (e === "address") return Pt("uint160", Sr(t));
  if (e === "bool") return Pt("uint8", t ? 1 : 0);
  if (e === "string") return Pt("bytes", new Buffer(t, "utf8"));
  if (_w(e)) {
    if (typeof t.length > "u") throw new Error("Not an array?");
    if (((r = Ph(e)), r !== "dynamic" && r !== 0 && t.length > r))
      throw new Error("Elements exceed array size: " + r);
    (i = []),
      (e = e.slice(0, e.lastIndexOf("["))),
      typeof t == "string" && (t = JSON.parse(t));
    for (s in t) i.push(Pt(e, t[s]));
    if (r === "dynamic") {
      var c = Pt("uint256", t.length);
      i.unshift(c);
    }
    return Buffer.concat(i);
  } else {
    if (e === "bytes")
      return (
        (t = new Buffer(t)),
        (i = Buffer.concat([Pt("uint256", t.length), t])),
        t.length % 32 !== 0 &&
          (i = Buffer.concat([i, Nr.zeros(32 - (t.length % 32))])),
        i
      );
    if (e.startsWith("bytes")) {
      if (((r = cn(e)), r < 1 || r > 32))
        throw new Error("Invalid bytes<N> width: " + r);
      return Nr.setLengthRight(t, 32);
    } else if (e.startsWith("uint")) {
      if (((r = cn(e)), r % 8 || r < 8 || r > 256))
        throw new Error("Invalid uint<N> width: " + r);
      if (((n = Sr(t)), n.bitLength() > r))
        throw new Error(
          "Supplied uint exceeds width: " + r + " vs " + n.bitLength()
        );
      if (n < 0) throw new Error("Supplied uint is negative");
      return n.toArrayLike(Buffer, "be", 32);
    } else if (e.startsWith("int")) {
      if (((r = cn(e)), r % 8 || r < 8 || r > 256))
        throw new Error("Invalid int<N> width: " + r);
      if (((n = Sr(t)), n.bitLength() > r))
        throw new Error(
          "Supplied int exceeds width: " + r + " vs " + n.bitLength()
        );
      return n.toTwos(256).toArrayLike(Buffer, "be", 32);
    } else if (e.startsWith("ufixed")) {
      if (((r = gl(e)), (n = Sr(t)), n < 0))
        throw new Error("Supplied ufixed is negative");
      return Pt("uint256", n.mul(new xr(2).pow(new xr(r[1]))));
    } else if (e.startsWith("fixed"))
      return (r = gl(e)), Pt("int256", Sr(t).mul(new xr(2).pow(new xr(r[1]))));
  }
  throw new Error("Unsupported or invalid type: " + e);
}
function mw(e) {
  return e === "string" || e === "bytes" || Ph(e) === "dynamic";
}
function _w(e) {
  return e.lastIndexOf("]") === e.length - 1;
}
function yw(e, t) {
  var r = [],
    n = [],
    i = 32 * e.length;
  for (var s in e) {
    var c = Bh(e[s]),
      o = t[s],
      u = Pt(c, o);
    mw(c) ? (r.push(Pt("uint256", i)), n.push(u), (i += u.length)) : r.push(u);
  }
  return Buffer.concat(r.concat(n));
}
function Oh(e, t) {
  if (e.length !== t.length)
    throw new Error("Number of types are not matching the values");
  for (var r, n, i = [], s = 0; s < e.length; s++) {
    var c = Bh(e[s]),
      o = t[s];
    if (c === "bytes") i.push(o);
    else if (c === "string") i.push(new Buffer(o, "utf8"));
    else if (c === "bool") i.push(new Buffer(o ? "01" : "00", "hex"));
    else if (c === "address") i.push(Nr.setLength(o, 20));
    else if (c.startsWith("bytes")) {
      if (((r = cn(c)), r < 1 || r > 32))
        throw new Error("Invalid bytes<N> width: " + r);
      i.push(Nr.setLengthRight(o, r));
    } else if (c.startsWith("uint")) {
      if (((r = cn(c)), r % 8 || r < 8 || r > 256))
        throw new Error("Invalid uint<N> width: " + r);
      if (((n = Sr(o)), n.bitLength() > r))
        throw new Error(
          "Supplied uint exceeds width: " + r + " vs " + n.bitLength()
        );
      i.push(n.toArrayLike(Buffer, "be", r / 8));
    } else if (c.startsWith("int")) {
      if (((r = cn(c)), r % 8 || r < 8 || r > 256))
        throw new Error("Invalid int<N> width: " + r);
      if (((n = Sr(o)), n.bitLength() > r))
        throw new Error(
          "Supplied int exceeds width: " + r + " vs " + n.bitLength()
        );
      i.push(n.toTwos(r).toArrayLike(Buffer, "be", r / 8));
    } else throw new Error("Unsupported or invalid type: " + c);
  }
  return Buffer.concat(i);
}
function vw(e, t) {
  return Nr.keccak(Oh(e, t));
}
var ww = { rawEncode: yw, solidityPack: Oh, soliditySHA3: vw };
const xt = Lh,
  Bn = ww,
  $h = {
    type: "object",
    properties: {
      types: {
        type: "object",
        additionalProperties: {
          type: "array",
          items: {
            type: "object",
            properties: { name: { type: "string" }, type: { type: "string" } },
            required: ["name", "type"],
          },
        },
      },
      primaryType: { type: "string" },
      domain: { type: "object" },
      message: { type: "object" },
    },
    required: ["types", "primaryType", "domain", "message"],
  },
  bo = {
    encodeData(e, t, r, n = !0) {
      const i = ["bytes32"],
        s = [this.hashType(e, r)];
      if (n) {
        const c = (o, u, d) => {
          if (r[u] !== void 0)
            return [
              "bytes32",
              d == null
                ? "0x0000000000000000000000000000000000000000000000000000000000000000"
                : xt.keccak(this.encodeData(u, d, r, n)),
            ];
          if (d === void 0)
            throw new Error(`missing value for field ${o} of type ${u}`);
          if (u === "bytes") return ["bytes32", xt.keccak(d)];
          if (u === "string")
            return (
              typeof d == "string" && (d = Buffer.from(d, "utf8")),
              ["bytes32", xt.keccak(d)]
            );
          if (u.lastIndexOf("]") === u.length - 1) {
            const m = u.slice(0, u.lastIndexOf("[")),
              g = d.map((w) => c(o, m, w));
            return [
              "bytes32",
              xt.keccak(
                Bn.rawEncode(
                  g.map(([w]) => w),
                  g.map(([, w]) => w)
                )
              ),
            ];
          }
          return [u, d];
        };
        for (const o of r[e]) {
          const [u, d] = c(o.name, o.type, t[o.name]);
          i.push(u), s.push(d);
        }
      } else
        for (const c of r[e]) {
          let o = t[c.name];
          if (o !== void 0)
            if (c.type === "bytes")
              i.push("bytes32"), (o = xt.keccak(o)), s.push(o);
            else if (c.type === "string")
              i.push("bytes32"),
                typeof o == "string" && (o = Buffer.from(o, "utf8")),
                (o = xt.keccak(o)),
                s.push(o);
            else if (r[c.type] !== void 0)
              i.push("bytes32"),
                (o = xt.keccak(this.encodeData(c.type, o, r, n))),
                s.push(o);
            else {
              if (c.type.lastIndexOf("]") === c.type.length - 1)
                throw new Error("Arrays currently unimplemented in encodeData");
              i.push(c.type), s.push(o);
            }
        }
      return Bn.rawEncode(i, s);
    },
    encodeType(e, t) {
      let r = "",
        n = this.findTypeDependencies(e, t).filter((i) => i !== e);
      n = [e].concat(n.sort());
      for (const i of n) {
        if (!t[i]) throw new Error("No type definition specified: " + i);
        r +=
          i +
          "(" +
          t[i].map(({ name: c, type: o }) => o + " " + c).join(",") +
          ")";
      }
      return r;
    },
    findTypeDependencies(e, t, r = []) {
      if (((e = e.match(/^\w*/)[0]), r.includes(e) || t[e] === void 0))
        return r;
      r.push(e);
      for (const n of t[e])
        for (const i of this.findTypeDependencies(n.type, t, r))
          !r.includes(i) && r.push(i);
      return r;
    },
    hashStruct(e, t, r, n = !0) {
      return xt.keccak(this.encodeData(e, t, r, n));
    },
    hashType(e, t) {
      return xt.keccak(this.encodeType(e, t));
    },
    sanitizeData(e) {
      const t = {};
      for (const r in $h.properties) e[r] && (t[r] = e[r]);
      return (
        t.types && (t.types = Object.assign({ EIP712Domain: [] }, t.types)), t
      );
    },
    hash(e, t = !0) {
      const r = this.sanitizeData(e),
        n = [Buffer.from("1901", "hex")];
      return (
        n.push(this.hashStruct("EIP712Domain", r.domain, r.types, t)),
        r.primaryType !== "EIP712Domain" &&
          n.push(this.hashStruct(r.primaryType, r.message, r.types, t)),
        xt.keccak(Buffer.concat(n))
      );
    },
  };
var bw = {
  TYPED_MESSAGE_SCHEMA: $h,
  TypedDataUtils: bo,
  hashForSignTypedDataLegacy: function (e) {
    return Ew(e.data);
  },
  hashForSignTypedData_v3: function (e) {
    return bo.hash(e.data, !1);
  },
  hashForSignTypedData_v4: function (e) {
    return bo.hash(e.data);
  },
};
function Ew(e) {
  const t = new Error("Expect argument to be non-empty array");
  if (typeof e != "object" || !e.length) throw t;
  const r = e.map(function (s) {
      return s.type === "bytes" ? xt.toBuffer(s.value) : s.value;
    }),
    n = e.map(function (s) {
      return s.type;
    }),
    i = e.map(function (s) {
      if (!s.name) throw t;
      return s.type + " " + s.name;
    });
  return Bn.soliditySHA3(
    ["bytes32", "bytes32"],
    [
      Bn.soliditySHA3(new Array(e.length).fill("string"), i),
      Bn.soliditySHA3(n, r),
    ]
  );
}
var mn = {};
Object.defineProperty(mn, "__esModule", { value: !0 });
mn.filterFromParam = mn.FilterPolyfill = void 0;
const tn = Xe,
  lt = X,
  Sw = 5 * 60 * 1e3,
  Rr = { jsonrpc: "2.0", id: 0 };
class Rw {
  constructor(t) {
    (this.logFilters = new Map()),
      (this.blockFilters = new Set()),
      (this.pendingTransactionFilters = new Set()),
      (this.cursors = new Map()),
      (this.timeouts = new Map()),
      (this.nextFilterId = (0, tn.IntNumber)(1)),
      (this.REQUEST_THROTTLE_INTERVAL = 1e3),
      (this.lastFetchTimestamp = new Date(0)),
      (this.resolvers = []),
      (this.provider = t);
  }
  async newFilter(t) {
    const r = Fh(t),
      n = this.makeFilterId(),
      i = await this.setInitialCursorPosition(n, r.fromBlock);
    return (
      console.info(
        `Installing new log filter(${n}):`,
        r,
        "initial cursor position:",
        i
      ),
      this.logFilters.set(n, r),
      this.setFilterTimeout(n),
      (0, lt.hexStringFromIntNumber)(n)
    );
  }
  async newBlockFilter() {
    const t = this.makeFilterId(),
      r = await this.setInitialCursorPosition(t, "latest");
    return (
      console.info(
        `Installing new block filter (${t}) with initial cursor position:`,
        r
      ),
      this.blockFilters.add(t),
      this.setFilterTimeout(t),
      (0, lt.hexStringFromIntNumber)(t)
    );
  }
  async newPendingTransactionFilter() {
    const t = this.makeFilterId(),
      r = await this.setInitialCursorPosition(t, "latest");
    return (
      console.info(
        `Installing new block filter (${t}) with initial cursor position:`,
        r
      ),
      this.pendingTransactionFilters.add(t),
      this.setFilterTimeout(t),
      (0, lt.hexStringFromIntNumber)(t)
    );
  }
  uninstallFilter(t) {
    const r = (0, lt.intNumberFromHexString)(t);
    return console.info(`Uninstalling filter (${r})`), this.deleteFilter(r), !0;
  }
  getFilterChanges(t) {
    const r = (0, lt.intNumberFromHexString)(t);
    return (
      this.timeouts.has(r) && this.setFilterTimeout(r),
      this.logFilters.has(r)
        ? this.getLogFilterChanges(r)
        : this.blockFilters.has(r)
        ? this.getBlockFilterChanges(r)
        : this.pendingTransactionFilters.has(r)
        ? this.getPendingTransactionFilterChanges(r)
        : Promise.resolve(Mi())
    );
  }
  async getFilterLogs(t) {
    const r = (0, lt.intNumberFromHexString)(t),
      n = this.logFilters.get(r);
    return n
      ? this.sendAsyncPromise(
          Object.assign(Object.assign({}, Rr), {
            method: "eth_getLogs",
            params: [ml(n)],
          })
        )
      : Mi();
  }
  makeFilterId() {
    return (0, tn.IntNumber)(++this.nextFilterId);
  }
  sendAsyncPromise(t) {
    return new Promise((r, n) => {
      this.provider.sendAsync(t, (i, s) => {
        if (i) return n(i);
        if (Array.isArray(s) || s == null)
          return n(
            new Error(`unexpected response received: ${JSON.stringify(s)}`)
          );
        r(s);
      });
    });
  }
  deleteFilter(t) {
    console.info(`Deleting filter (${t})`),
      this.logFilters.delete(t),
      this.blockFilters.delete(t),
      this.pendingTransactionFilters.delete(t),
      this.cursors.delete(t),
      this.timeouts.delete(t);
  }
  async getLogFilterChanges(t) {
    const r = this.logFilters.get(t),
      n = this.cursors.get(t);
    if (!n || !r) return Mi();
    const i = await this.getCurrentBlockHeight(),
      s = r.toBlock === "latest" ? i : r.toBlock;
    if (n > i || n > Number(r.toBlock)) return xi();
    console.info(`Fetching logs from ${n} to ${s} for filter ${t}`);
    const c = await this.sendAsyncPromise(
      Object.assign(Object.assign({}, Rr), {
        method: "eth_getLogs",
        params: [
          ml(Object.assign(Object.assign({}, r), { fromBlock: n, toBlock: s })),
        ],
      })
    );
    if (Array.isArray(c.result)) {
      const o = c.result.map((d) =>
          (0, lt.intNumberFromHexString)(d.blockNumber || "0x0")
        ),
        u = Math.max(...o);
      if (u && u > n) {
        const d = (0, tn.IntNumber)(u + 1);
        console.info(
          `Moving cursor position for filter (${t}) from ${n} to ${d}`
        ),
          this.cursors.set(t, d);
      }
    }
    return c;
  }
  async getBlockFilterChanges(t) {
    const r = this.cursors.get(t);
    if (!r) return Mi();
    const n = await this.getCurrentBlockHeight();
    if (r > n) return xi();
    console.info(`Fetching blocks from ${r} to ${n} for filter (${t})`);
    const i = (
        await Promise.all(
          (0, lt.range)(r, n + 1).map((c) =>
            this.getBlockHashByNumber((0, tn.IntNumber)(c))
          )
        )
      ).filter((c) => !!c),
      s = (0, tn.IntNumber)(r + i.length);
    return (
      console.info(
        `Moving cursor position for filter (${t}) from ${r} to ${s}`
      ),
      this.cursors.set(t, s),
      Object.assign(Object.assign({}, Rr), { result: i })
    );
  }
  async getPendingTransactionFilterChanges(t) {
    return Promise.resolve(xi());
  }
  async setInitialCursorPosition(t, r) {
    const n = await this.getCurrentBlockHeight(),
      i = typeof r == "number" && r > n ? r : n;
    return this.cursors.set(t, i), i;
  }
  setFilterTimeout(t) {
    const r = this.timeouts.get(t);
    r && window.clearTimeout(r);
    const n = window.setTimeout(() => {
      console.info(`Filter (${t}) timed out`), this.deleteFilter(t);
    }, Sw);
    this.timeouts.set(t, n);
  }
  async getCurrentBlockHeight() {
    const t = new Date();
    if (
      t.getTime() - this.lastFetchTimestamp.getTime() >
      this.REQUEST_THROTTLE_INTERVAL
    ) {
      this.lastFetchTimestamp = t;
      const r = await this._getCurrentBlockHeight();
      (this.currentBlockHeight = r),
        this.resolvers.forEach((n) => n(r)),
        (this.resolvers = []);
    }
    return this.currentBlockHeight
      ? this.currentBlockHeight
      : new Promise((r) => this.resolvers.push(r));
  }
  async _getCurrentBlockHeight() {
    const { result: t } = await this.sendAsyncPromise(
      Object.assign(Object.assign({}, Rr), {
        method: "eth_blockNumber",
        params: [],
      })
    );
    return (0, lt.intNumberFromHexString)((0, lt.ensureHexString)(t));
  }
  async getBlockHashByNumber(t) {
    const r = await this.sendAsyncPromise(
      Object.assign(Object.assign({}, Rr), {
        method: "eth_getBlockByNumber",
        params: [(0, lt.hexStringFromIntNumber)(t), !1],
      })
    );
    return r.result && typeof r.result.hash == "string"
      ? (0, lt.ensureHexString)(r.result.hash)
      : null;
  }
}
mn.FilterPolyfill = Rw;
function Fh(e) {
  return {
    fromBlock: _l(e.fromBlock),
    toBlock: _l(e.toBlock),
    addresses:
      e.address === void 0
        ? null
        : Array.isArray(e.address)
        ? e.address
        : [e.address],
    topics: e.topics || [],
  };
}
mn.filterFromParam = Fh;
function ml(e) {
  const t = {
    fromBlock: yl(e.fromBlock),
    toBlock: yl(e.toBlock),
    topics: e.topics,
  };
  return e.addresses !== null && (t.address = e.addresses), t;
}
function _l(e) {
  if (e === void 0 || e === "latest" || e === "pending") return "latest";
  if (e === "earliest") return (0, tn.IntNumber)(0);
  if ((0, lt.isHexString)(e)) return (0, lt.intNumberFromHexString)(e);
  throw new Error(`Invalid block option: ${String(e)}`);
}
function yl(e) {
  return e === "latest" ? e : (0, lt.hexStringFromIntNumber)(e);
}
function Mi() {
  return Object.assign(Object.assign({}, Rr), {
    error: { code: -32e3, message: "filter not found" },
  });
}
function xi() {
  return Object.assign(Object.assign({}, Rr), { result: [] });
}
var Bs = {};
Object.defineProperty(Bs, "__esModule", { value: !0 });
Bs.SubscriptionManager = void 0;
const Cw = hu,
  Mw = vy,
  vl = () => {};
class xw {
  constructor(t) {
    const r = new Cw.PollingBlockTracker({
        provider: t,
        pollingInterval: 15e3,
        setSkipCacheFlag: !0,
      }),
      { events: n, middleware: i } = Mw({ blockTracker: r, provider: t });
    (this.events = n), (this.subscriptionMiddleware = i);
  }
  async handleRequest(t) {
    const r = {};
    return await this.subscriptionMiddleware(t, r, vl, vl), r;
  }
  destroy() {
    this.subscriptionMiddleware.destroy();
  }
}
Bs.SubscriptionManager = xw;
var Dh =
  (te && te.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(dn, "__esModule", { value: !0 });
dn.CoinbaseWalletProvider = void 0;
const kw = Dh(Di),
  Iw = Hh,
  me = si,
  de = X,
  Aw = li,
  wl = Et,
  ki = Cn,
  pt = En,
  Eo = Dh(bw),
  An = Rn,
  Tw = mn,
  Nw = Bs,
  bl = "DefaultChainId",
  El = "DefaultJsonRpcUrl";
class Lw extends Iw.EventEmitter {
  constructor(t) {
    var r, n;
    super(),
      (this._filterPolyfill = new Tw.FilterPolyfill(this)),
      (this._subscriptionManager = new Nw.SubscriptionManager(this)),
      (this._relay = null),
      (this._addresses = []),
      (this.hasMadeFirstChainChangedEmission = !1),
      (this.setProviderInfo = this.setProviderInfo.bind(this)),
      (this.updateProviderInfo = this.updateProviderInfo.bind(this)),
      (this.getChainId = this.getChainId.bind(this)),
      (this.setAppInfo = this.setAppInfo.bind(this)),
      (this.enable = this.enable.bind(this)),
      (this.close = this.close.bind(this)),
      (this.send = this.send.bind(this)),
      (this.sendAsync = this.sendAsync.bind(this)),
      (this.request = this.request.bind(this)),
      (this._setAddresses = this._setAddresses.bind(this)),
      (this.scanQRCode = this.scanQRCode.bind(this)),
      (this.genericRequest = this.genericRequest.bind(this)),
      (this._chainIdFromOpts = t.chainId),
      (this._jsonRpcUrlFromOpts = t.jsonRpcUrl),
      (this._overrideIsMetaMask = t.overrideIsMetaMask),
      (this._relayProvider = t.relayProvider),
      (this._storage = t.storage),
      (this._relayEventManager = t.relayEventManager),
      (this.diagnostic = t.diagnosticLogger),
      (this.reloadOnDisconnect = !0),
      (this.isCoinbaseWallet =
        (r = t.overrideIsCoinbaseWallet) !== null && r !== void 0 ? r : !0),
      (this.isCoinbaseBrowser =
        (n = t.overrideIsCoinbaseBrowser) !== null && n !== void 0 ? n : !1),
      (this.qrUrl = t.qrUrl);
    const i = this.getChainId(),
      s = (0, de.prepend0x)(i.toString(16));
    this.emit("connect", { chainIdStr: s });
    const c = this._storage.getItem(wl.LOCAL_STORAGE_ADDRESSES_KEY);
    if (c) {
      const o = c.split(" ");
      o[0] !== "" &&
        ((this._addresses = o.map((u) => (0, de.ensureAddressString)(u))),
        this.emit("accountsChanged", o));
    }
    this._subscriptionManager.events.on("notification", (o) => {
      this.emit("message", { type: o.method, data: o.params });
    }),
      this._isAuthorized() && this.initializeRelay(),
      window.addEventListener("message", (o) => {
        var u;
        if (
          !(o.origin !== location.origin || o.source !== window) &&
          o.data.type === "walletLinkMessage" &&
          o.data.data.action === "dappChainSwitched"
        ) {
          const d = o.data.data.chainId,
            m =
              (u = o.data.data.jsonRpcUrl) !== null && u !== void 0
                ? u
                : this.jsonRpcUrl;
          this.updateProviderInfo(m, Number(d));
        }
      });
  }
  get selectedAddress() {
    return this._addresses[0] || void 0;
  }
  get networkVersion() {
    return this.getChainId().toString(10);
  }
  get chainId() {
    return (0, de.prepend0x)(this.getChainId().toString(16));
  }
  get isWalletLink() {
    return !0;
  }
  get isMetaMask() {
    return this._overrideIsMetaMask;
  }
  get host() {
    return this.jsonRpcUrl;
  }
  get connected() {
    return !0;
  }
  isConnected() {
    return !0;
  }
  get jsonRpcUrl() {
    var t;
    return (t = this._storage.getItem(El)) !== null && t !== void 0
      ? t
      : this._jsonRpcUrlFromOpts;
  }
  set jsonRpcUrl(t) {
    this._storage.setItem(El, t);
  }
  disableReloadOnDisconnect() {
    this.reloadOnDisconnect = !1;
  }
  setProviderInfo(t, r) {
    this.isCoinbaseBrowser ||
      ((this._chainIdFromOpts = r), (this._jsonRpcUrlFromOpts = t)),
      this.updateProviderInfo(this.jsonRpcUrl, this.getChainId());
  }
  updateProviderInfo(t, r) {
    this.jsonRpcUrl = t;
    const n = this.getChainId();
    this._storage.setItem(bl, r.toString(10)),
      ((0, de.ensureIntNumber)(r) !== n ||
        !this.hasMadeFirstChainChangedEmission) &&
        (this.emit("chainChanged", this.getChainId()),
        (this.hasMadeFirstChainChangedEmission = !0));
  }
  async watchAsset(t, r, n, i, s, c) {
    const u = await (
      await this.initializeRelay()
    ).watchAsset(t, r, n, i, s, c == null ? void 0 : c.toString()).promise;
    return (0, pt.isErrorResponse)(u) ? !1 : !!u.result;
  }
  async addEthereumChain(t, r, n, i, s, c) {
    var o, u;
    if ((0, de.ensureIntNumber)(t) === this.getChainId()) return !1;
    const d = await this.initializeRelay(),
      m = d.inlineAddEthereumChain(t.toString());
    !this._isAuthorized() && !m && (await d.requestEthereumAccounts().promise);
    const g = await d.addEthereumChain(t.toString(), r, s, n, i, c).promise;
    return (0, pt.isErrorResponse)(g)
      ? !1
      : (((o = g.result) === null || o === void 0 ? void 0 : o.isApproved) ===
          !0 && this.updateProviderInfo(r[0], t),
        ((u = g.result) === null || u === void 0 ? void 0 : u.isApproved) ===
          !0);
  }
  async switchEthereumChain(t) {
    const n = await (
      await this.initializeRelay()
    ).switchEthereumChain(t.toString(10), this.selectedAddress || void 0)
      .promise;
    if ((0, pt.isErrorResponse)(n)) {
      if (!n.errorCode) return;
      throw n.errorCode === me.standardErrorCodes.provider.unsupportedChain
        ? me.standardErrors.provider.unsupportedChain()
        : me.standardErrors.provider.custom({
            message: n.errorMessage,
            code: n.errorCode,
          });
    }
    const i = n.result;
    i.isApproved && i.rpcUrl.length > 0 && this.updateProviderInfo(i.rpcUrl, t);
  }
  setAppInfo(t, r) {
    this.initializeRelay().then((n) => n.setAppInfo(t, r));
  }
  async enable() {
    var t;
    return (
      (t = this.diagnostic) === null ||
        t === void 0 ||
        t.log(An.EVENTS.ETH_ACCOUNTS_STATE, {
          method: "provider::enable",
          addresses_length: this._addresses.length,
          sessionIdHash: this._relay
            ? ki.Session.hash(this._relay.session.id)
            : void 0,
        }),
      this._isAuthorized()
        ? [...this._addresses]
        : await this.send("eth_requestAccounts")
    );
  }
  async close() {
    (await this.initializeRelay()).resetAndReload();
  }
  send(t, r) {
    try {
      const n = this._send(t, r);
      if (n instanceof Promise)
        return n.catch((i) => {
          throw (0, me.serializeError)(i, t);
        });
    } catch (n) {
      throw (0, me.serializeError)(n, t);
    }
  }
  _send(t, r) {
    if (typeof t == "string") {
      const i = t,
        s = Array.isArray(r) ? r : r !== void 0 ? [r] : [],
        c = { jsonrpc: "2.0", id: 0, method: i, params: s };
      return this._sendRequestAsync(c).then((o) => o.result);
    }
    if (typeof r == "function") {
      const i = t,
        s = r;
      return this._sendAsync(i, s);
    }
    if (Array.isArray(t)) return t.map((s) => this._sendRequest(s));
    const n = t;
    return this._sendRequest(n);
  }
  async sendAsync(t, r) {
    try {
      return this._sendAsync(t, r).catch((n) => {
        throw (0, me.serializeError)(n, t);
      });
    } catch (n) {
      return Promise.reject((0, me.serializeError)(n, t));
    }
  }
  async _sendAsync(t, r) {
    if (typeof r != "function") throw new Error("callback is required");
    if (Array.isArray(t)) {
      const i = r;
      this._sendMultipleRequestsAsync(t)
        .then((s) => i(null, s))
        .catch((s) => i(s, null));
      return;
    }
    const n = r;
    return this._sendRequestAsync(t)
      .then((i) => n(null, i))
      .catch((i) => n(i, null));
  }
  async request(t) {
    try {
      return this._request(t).catch((r) => {
        throw (0, me.serializeError)(r, t.method);
      });
    } catch (r) {
      return Promise.reject((0, me.serializeError)(r, t.method));
    }
  }
  async _request(t) {
    if (!t || typeof t != "object" || Array.isArray(t))
      throw me.standardErrors.rpc.invalidRequest({
        message: "Expected a single, non-array, object argument.",
        data: t,
      });
    const { method: r, params: n } = t;
    if (typeof r != "string" || r.length === 0)
      throw me.standardErrors.rpc.invalidRequest({
        message: "'args.method' must be a non-empty string.",
        data: t,
      });
    if (
      n !== void 0 &&
      !Array.isArray(n) &&
      (typeof n != "object" || n === null)
    )
      throw me.standardErrors.rpc.invalidRequest({
        message: "'args.params' must be an object or array if provided.",
        data: t,
      });
    const i = n === void 0 ? [] : n,
      s = this._relayEventManager.makeRequestId();
    return (
      await this._sendRequestAsync({
        method: r,
        params: i,
        jsonrpc: "2.0",
        id: s,
      })
    ).result;
  }
  async scanQRCode(t) {
    const n = await (
      await this.initializeRelay()
    ).scanQRCode((0, de.ensureRegExpString)(t)).promise;
    if ((0, pt.isErrorResponse)(n))
      throw (0, me.serializeError)(n.errorMessage, "scanQRCode");
    if (typeof n.result != "string")
      throw (0, me.serializeError)("result was not a string", "scanQRCode");
    return n.result;
  }
  async genericRequest(t, r) {
    const i = await (await this.initializeRelay()).genericRequest(t, r).promise;
    if ((0, pt.isErrorResponse)(i))
      throw (0, me.serializeError)(i.errorMessage, "generic");
    if (typeof i.result != "string")
      throw (0, me.serializeError)("result was not a string", "generic");
    return i.result;
  }
  async connectAndSignIn(t) {
    var r;
    (r = this.diagnostic) === null ||
      r === void 0 ||
      r.log(An.EVENTS.ETH_ACCOUNTS_STATE, {
        method: "provider::connectAndSignIn",
        sessionIdHash: this._relay
          ? ki.Session.hash(this._relay.session.id)
          : void 0,
      });
    let n;
    try {
      const s = await this.initializeRelay();
      if (!(s instanceof Aw.MobileRelay))
        throw new Error("connectAndSignIn is only supported on mobile");
      if (
        ((n = await s.connectAndSignIn(t).promise), (0, pt.isErrorResponse)(n))
      )
        throw new Error(n.errorMessage);
    } catch (s) {
      throw typeof s.message == "string" &&
        s.message.match(/(denied|rejected)/i)
        ? me.standardErrors.provider.userRejectedRequest(
            "User denied account authorization"
          )
        : s;
    }
    if (!n.result) throw new Error("accounts received is empty");
    const { accounts: i } = n.result;
    return (
      this._setAddresses(i),
      this.isCoinbaseBrowser ||
        (await this.switchEthereumChain(this.getChainId())),
      n.result
    );
  }
  async selectProvider(t) {
    const n = await (await this.initializeRelay()).selectProvider(t).promise;
    if ((0, pt.isErrorResponse)(n))
      throw (0, me.serializeError)(n.errorMessage, "selectProvider");
    if (typeof n.result != "string")
      throw (0, me.serializeError)("result was not a string", "selectProvider");
    return n.result;
  }
  supportsSubscriptions() {
    return !1;
  }
  subscribe() {
    throw new Error("Subscriptions are not supported");
  }
  unsubscribe() {
    throw new Error("Subscriptions are not supported");
  }
  disconnect() {
    return !0;
  }
  _sendRequest(t) {
    const r = { jsonrpc: "2.0", id: t.id },
      { method: n } = t;
    if (((r.result = this._handleSynchronousMethods(t)), r.result === void 0))
      throw new Error(
        `Coinbase Wallet does not support calling ${n} synchronously without a callback. Please provide a callback parameter to call ${n} asynchronously.`
      );
    return r;
  }
  _setAddresses(t, r) {
    if (!Array.isArray(t)) throw new Error("addresses is not an array");
    const n = t.map((i) => (0, de.ensureAddressString)(i));
    JSON.stringify(n) !== JSON.stringify(this._addresses) &&
      ((this._addresses = n),
      this.emit("accountsChanged", this._addresses),
      this._storage.setItem(wl.LOCAL_STORAGE_ADDRESSES_KEY, n.join(" ")));
  }
  _sendRequestAsync(t) {
    return new Promise((r, n) => {
      try {
        const i = this._handleSynchronousMethods(t);
        if (i !== void 0) return r({ jsonrpc: "2.0", id: t.id, result: i });
        const s = this._handleAsynchronousFilterMethods(t);
        if (s !== void 0) {
          s.then((o) =>
            r(Object.assign(Object.assign({}, o), { id: t.id }))
          ).catch((o) => n(o));
          return;
        }
        const c = this._handleSubscriptionMethods(t);
        if (c !== void 0) {
          c.then((o) =>
            r({ jsonrpc: "2.0", id: t.id, result: o.result })
          ).catch((o) => n(o));
          return;
        }
      } catch (i) {
        return n(i);
      }
      this._handleAsynchronousMethods(t)
        .then((i) => i && r(Object.assign(Object.assign({}, i), { id: t.id })))
        .catch((i) => n(i));
    });
  }
  _sendMultipleRequestsAsync(t) {
    return Promise.all(t.map((r) => this._sendRequestAsync(r)));
  }
  _handleSynchronousMethods(t) {
    const { method: r } = t,
      n = t.params || [];
    switch (r) {
      case "eth_accounts":
        return this._eth_accounts();
      case "eth_coinbase":
        return this._eth_coinbase();
      case "eth_uninstallFilter":
        return this._eth_uninstallFilter(n);
      case "net_version":
        return this._net_version();
      case "eth_chainId":
        return this._eth_chainId();
      default:
        return;
    }
  }
  async _handleAsynchronousMethods(t) {
    const { method: r } = t,
      n = t.params || [];
    switch (r) {
      case "eth_requestAccounts":
        return this._eth_requestAccounts();
      case "eth_sign":
        return this._eth_sign(n);
      case "eth_ecRecover":
        return this._eth_ecRecover(n);
      case "personal_sign":
        return this._personal_sign(n);
      case "personal_ecRecover":
        return this._personal_ecRecover(n);
      case "eth_signTransaction":
        return this._eth_signTransaction(n);
      case "eth_sendRawTransaction":
        return this._eth_sendRawTransaction(n);
      case "eth_sendTransaction":
        return this._eth_sendTransaction(n);
      case "eth_signTypedData_v1":
        return this._eth_signTypedData_v1(n);
      case "eth_signTypedData_v2":
        return this._throwUnsupportedMethodError();
      case "eth_signTypedData_v3":
        return this._eth_signTypedData_v3(n);
      case "eth_signTypedData_v4":
      case "eth_signTypedData":
        return this._eth_signTypedData_v4(n);
      case "cbWallet_arbitrary":
        return this._cbwallet_arbitrary(n);
      case "wallet_addEthereumChain":
        return this._wallet_addEthereumChain(n);
      case "wallet_switchEthereumChain":
        return this._wallet_switchEthereumChain(n);
      case "wallet_watchAsset":
        return this._wallet_watchAsset(n);
    }
    return (await this.initializeRelay())
      .makeEthereumJSONRPCRequest(t, this.jsonRpcUrl)
      .catch((s) => {
        var c;
        throw (
          ((s.code === me.standardErrorCodes.rpc.methodNotFound ||
            s.code === me.standardErrorCodes.rpc.methodNotSupported) &&
            ((c = this.diagnostic) === null ||
              c === void 0 ||
              c.log(An.EVENTS.METHOD_NOT_IMPLEMENTED, {
                method: t.method,
                sessionIdHash: this._relay
                  ? ki.Session.hash(this._relay.session.id)
                  : void 0,
              })),
          s)
        );
      });
  }
  _handleAsynchronousFilterMethods(t) {
    const { method: r } = t,
      n = t.params || [];
    switch (r) {
      case "eth_newFilter":
        return this._eth_newFilter(n);
      case "eth_newBlockFilter":
        return this._eth_newBlockFilter();
      case "eth_newPendingTransactionFilter":
        return this._eth_newPendingTransactionFilter();
      case "eth_getFilterChanges":
        return this._eth_getFilterChanges(n);
      case "eth_getFilterLogs":
        return this._eth_getFilterLogs(n);
    }
  }
  _handleSubscriptionMethods(t) {
    switch (t.method) {
      case "eth_subscribe":
      case "eth_unsubscribe":
        return this._subscriptionManager.handleRequest(t);
    }
  }
  _isKnownAddress(t) {
    try {
      const r = (0, de.ensureAddressString)(t);
      return this._addresses
        .map((i) => (0, de.ensureAddressString)(i))
        .includes(r);
    } catch {}
    return !1;
  }
  _ensureKnownAddress(t) {
    var r;
    if (!this._isKnownAddress(t))
      throw (
        ((r = this.diagnostic) === null ||
          r === void 0 ||
          r.log(An.EVENTS.UNKNOWN_ADDRESS_ENCOUNTERED),
        new Error("Unknown Ethereum address"))
      );
  }
  _prepareTransactionParams(t) {
    const r = t.from
      ? (0, de.ensureAddressString)(t.from)
      : this.selectedAddress;
    if (!r) throw new Error("Ethereum address is unavailable");
    this._ensureKnownAddress(r);
    const n = t.to ? (0, de.ensureAddressString)(t.to) : null,
      i = t.value != null ? (0, de.ensureBN)(t.value) : new kw.default(0),
      s = t.data ? (0, de.ensureBuffer)(t.data) : Buffer.alloc(0),
      c = t.nonce != null ? (0, de.ensureIntNumber)(t.nonce) : null,
      o = t.gasPrice != null ? (0, de.ensureBN)(t.gasPrice) : null,
      u = t.maxFeePerGas != null ? (0, de.ensureBN)(t.maxFeePerGas) : null,
      d =
        t.maxPriorityFeePerGas != null
          ? (0, de.ensureBN)(t.maxPriorityFeePerGas)
          : null,
      m = t.gas != null ? (0, de.ensureBN)(t.gas) : null,
      g = t.chainId ? (0, de.ensureIntNumber)(t.chainId) : this.getChainId();
    return {
      fromAddress: r,
      toAddress: n,
      weiValue: i,
      data: s,
      nonce: c,
      gasPriceInWei: o,
      maxFeePerGas: u,
      maxPriorityFeePerGas: d,
      gasLimit: m,
      chainId: g,
    };
  }
  _isAuthorized() {
    return this._addresses.length > 0;
  }
  _requireAuthorization() {
    if (!this._isAuthorized())
      throw me.standardErrors.provider.unauthorized({});
  }
  _throwUnsupportedMethodError() {
    throw me.standardErrors.provider.unsupportedMethod({});
  }
  async _signEthereumMessage(t, r, n, i) {
    this._ensureKnownAddress(r);
    try {
      const c = await (
        await this.initializeRelay()
      ).signEthereumMessage(t, r, n, i).promise;
      if ((0, pt.isErrorResponse)(c)) throw new Error(c.errorMessage);
      return { jsonrpc: "2.0", id: 0, result: c.result };
    } catch (s) {
      throw typeof s.message == "string" &&
        s.message.match(/(denied|rejected)/i)
        ? me.standardErrors.provider.userRejectedRequest(
            "User denied message signature"
          )
        : s;
    }
  }
  async _ethereumAddressFromSignedMessage(t, r, n) {
    const s = await (
      await this.initializeRelay()
    ).ethereumAddressFromSignedMessage(t, r, n).promise;
    if ((0, pt.isErrorResponse)(s)) throw new Error(s.errorMessage);
    return { jsonrpc: "2.0", id: 0, result: s.result };
  }
  _eth_accounts() {
    return [...this._addresses];
  }
  _eth_coinbase() {
    return this.selectedAddress || null;
  }
  _net_version() {
    return this.getChainId().toString(10);
  }
  _eth_chainId() {
    return (0, de.hexStringFromIntNumber)(this.getChainId());
  }
  getChainId() {
    const t = this._storage.getItem(bl);
    if (!t) return (0, de.ensureIntNumber)(this._chainIdFromOpts);
    const r = parseInt(t, 10);
    return (0, de.ensureIntNumber)(r);
  }
  async _eth_requestAccounts() {
    var t;
    if (
      ((t = this.diagnostic) === null ||
        t === void 0 ||
        t.log(An.EVENTS.ETH_ACCOUNTS_STATE, {
          method: "provider::_eth_requestAccounts",
          addresses_length: this._addresses.length,
          sessionIdHash: this._relay
            ? ki.Session.hash(this._relay.session.id)
            : void 0,
        }),
      this._isAuthorized())
    )
      return Promise.resolve({
        jsonrpc: "2.0",
        id: 0,
        result: this._addresses,
      });
    let r;
    try {
      if (
        ((r = await (await this.initializeRelay()).requestEthereumAccounts()
          .promise),
        (0, pt.isErrorResponse)(r))
      )
        throw new Error(r.errorMessage);
    } catch (n) {
      throw typeof n.message == "string" &&
        n.message.match(/(denied|rejected)/i)
        ? me.standardErrors.provider.userRejectedRequest(
            "User denied account authorization"
          )
        : n;
    }
    if (!r.result) throw new Error("accounts received is empty");
    return (
      this._setAddresses(r.result),
      this.isCoinbaseBrowser ||
        (await this.switchEthereumChain(this.getChainId())),
      { jsonrpc: "2.0", id: 0, result: this._addresses }
    );
  }
  _eth_sign(t) {
    this._requireAuthorization();
    const r = (0, de.ensureAddressString)(t[0]),
      n = (0, de.ensureBuffer)(t[1]);
    return this._signEthereumMessage(n, r, !1);
  }
  _eth_ecRecover(t) {
    const r = (0, de.ensureBuffer)(t[0]),
      n = (0, de.ensureBuffer)(t[1]);
    return this._ethereumAddressFromSignedMessage(r, n, !1);
  }
  _personal_sign(t) {
    this._requireAuthorization();
    const r = (0, de.ensureBuffer)(t[0]),
      n = (0, de.ensureAddressString)(t[1]);
    return this._signEthereumMessage(r, n, !0);
  }
  _personal_ecRecover(t) {
    const r = (0, de.ensureBuffer)(t[0]),
      n = (0, de.ensureBuffer)(t[1]);
    return this._ethereumAddressFromSignedMessage(r, n, !0);
  }
  async _eth_signTransaction(t) {
    this._requireAuthorization();
    const r = this._prepareTransactionParams(t[0] || {});
    try {
      const i = await (await this.initializeRelay()).signEthereumTransaction(r)
        .promise;
      if ((0, pt.isErrorResponse)(i)) throw new Error(i.errorMessage);
      return { jsonrpc: "2.0", id: 0, result: i.result };
    } catch (n) {
      throw typeof n.message == "string" &&
        n.message.match(/(denied|rejected)/i)
        ? me.standardErrors.provider.userRejectedRequest(
            "User denied transaction signature"
          )
        : n;
    }
  }
  async _eth_sendRawTransaction(t) {
    const r = (0, de.ensureBuffer)(t[0]),
      i = await (
        await this.initializeRelay()
      ).submitEthereumTransaction(r, this.getChainId()).promise;
    if ((0, pt.isErrorResponse)(i)) throw new Error(i.errorMessage);
    return { jsonrpc: "2.0", id: 0, result: i.result };
  }
  async _eth_sendTransaction(t) {
    this._requireAuthorization();
    const r = this._prepareTransactionParams(t[0] || {});
    try {
      const i = await (
        await this.initializeRelay()
      ).signAndSubmitEthereumTransaction(r).promise;
      if ((0, pt.isErrorResponse)(i)) throw new Error(i.errorMessage);
      return { jsonrpc: "2.0", id: 0, result: i.result };
    } catch (n) {
      throw typeof n.message == "string" &&
        n.message.match(/(denied|rejected)/i)
        ? me.standardErrors.provider.userRejectedRequest(
            "User denied transaction signature"
          )
        : n;
    }
  }
  async _eth_signTypedData_v1(t) {
    this._requireAuthorization();
    const r = (0, de.ensureParsedJSONObject)(t[0]),
      n = (0, de.ensureAddressString)(t[1]);
    this._ensureKnownAddress(n);
    const i = Eo.default.hashForSignTypedDataLegacy({ data: r }),
      s = JSON.stringify(r, null, 2);
    return this._signEthereumMessage(i, n, !1, s);
  }
  async _eth_signTypedData_v3(t) {
    this._requireAuthorization();
    const r = (0, de.ensureAddressString)(t[0]),
      n = (0, de.ensureParsedJSONObject)(t[1]);
    this._ensureKnownAddress(r);
    const i = Eo.default.hashForSignTypedData_v3({ data: n }),
      s = JSON.stringify(n, null, 2);
    return this._signEthereumMessage(i, r, !1, s);
  }
  async _eth_signTypedData_v4(t) {
    this._requireAuthorization();
    const r = (0, de.ensureAddressString)(t[0]),
      n = (0, de.ensureParsedJSONObject)(t[1]);
    this._ensureKnownAddress(r);
    const i = Eo.default.hashForSignTypedData_v4({ data: n }),
      s = JSON.stringify(n, null, 2);
    return this._signEthereumMessage(i, r, !1, s);
  }
  async _cbwallet_arbitrary(t) {
    const r = t[0],
      n = t[1];
    if (typeof n != "string") throw new Error("parameter must be a string");
    if (typeof r != "object" || r === null)
      throw new Error("parameter must be an object");
    return { jsonrpc: "2.0", id: 0, result: await this.genericRequest(r, n) };
  }
  async _wallet_addEthereumChain(t) {
    var r, n, i, s;
    const c = t[0];
    if (((r = c.rpcUrls) === null || r === void 0 ? void 0 : r.length) === 0)
      return {
        jsonrpc: "2.0",
        id: 0,
        error: { code: 2, message: "please pass in at least 1 rpcUrl" },
      };
    if (!c.chainName || c.chainName.trim() === "")
      throw me.standardErrors.rpc.invalidParams(
        "chainName is a required field"
      );
    if (!c.nativeCurrency)
      throw me.standardErrors.rpc.invalidParams(
        "nativeCurrency is a required field"
      );
    const o = parseInt(c.chainId, 16);
    return (await this.addEthereumChain(
      o,
      (n = c.rpcUrls) !== null && n !== void 0 ? n : [],
      (i = c.blockExplorerUrls) !== null && i !== void 0 ? i : [],
      c.chainName,
      (s = c.iconUrls) !== null && s !== void 0 ? s : [],
      c.nativeCurrency
    ))
      ? { jsonrpc: "2.0", id: 0, result: null }
      : {
          jsonrpc: "2.0",
          id: 0,
          error: { code: 2, message: "unable to add ethereum chain" },
        };
  }
  async _wallet_switchEthereumChain(t) {
    const r = t[0];
    return (
      await this.switchEthereumChain(parseInt(r.chainId, 16)),
      { jsonrpc: "2.0", id: 0, result: null }
    );
  }
  async _wallet_watchAsset(t) {
    const r = Array.isArray(t) ? t[0] : t;
    if (!r.type) throw me.standardErrors.rpc.invalidParams("Type is required");
    if ((r == null ? void 0 : r.type) !== "ERC20")
      throw me.standardErrors.rpc.invalidParams(
        `Asset of type '${r.type}' is not supported`
      );
    if (!(r != null && r.options))
      throw me.standardErrors.rpc.invalidParams("Options are required");
    if (!(r != null && r.options.address))
      throw me.standardErrors.rpc.invalidParams("Address is required");
    const n = this.getChainId(),
      { address: i, symbol: s, image: c, decimals: o } = r.options;
    return {
      jsonrpc: "2.0",
      id: 0,
      result: await this.watchAsset(r.type, i, s, o, c, n),
    };
  }
  _eth_uninstallFilter(t) {
    const r = (0, de.ensureHexString)(t[0]);
    return this._filterPolyfill.uninstallFilter(r);
  }
  async _eth_newFilter(t) {
    const r = t[0];
    return {
      jsonrpc: "2.0",
      id: 0,
      result: await this._filterPolyfill.newFilter(r),
    };
  }
  async _eth_newBlockFilter() {
    return {
      jsonrpc: "2.0",
      id: 0,
      result: await this._filterPolyfill.newBlockFilter(),
    };
  }
  async _eth_newPendingTransactionFilter() {
    return {
      jsonrpc: "2.0",
      id: 0,
      result: await this._filterPolyfill.newPendingTransactionFilter(),
    };
  }
  _eth_getFilterChanges(t) {
    const r = (0, de.ensureHexString)(t[0]);
    return this._filterPolyfill.getFilterChanges(r);
  }
  _eth_getFilterLogs(t) {
    const r = (0, de.ensureHexString)(t[0]);
    return this._filterPolyfill.getFilterLogs(r);
  }
  initializeRelay() {
    return this._relay
      ? Promise.resolve(this._relay)
      : this._relayProvider().then(
          (t) => (
            t.setAccountsCallback((r, n) => this._setAddresses(r, n)),
            t.setChainCallback((r, n) => {
              this.updateProviderInfo(n, parseInt(r, 10));
            }),
            t.setDappDefaultChainCallback(this._chainIdFromOpts),
            (this._relay = t),
            t
          )
        );
  }
}
dn.CoinbaseWalletProvider = Lw;
var Ps = {};
Object.defineProperty(Ps, "__esModule", { value: !0 });
Ps.RelayEventManager = void 0;
const Bw = X;
class Pw {
  constructor() {
    (this._nextRequestId = 0), (this.callbacks = new Map());
  }
  makeRequestId() {
    this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
    const t = this._nextRequestId,
      r = (0, Bw.prepend0x)(t.toString(16));
    return this.callbacks.get(r) && this.callbacks.delete(r), t;
  }
}
Ps.RelayEventManager = Pw;
Object.defineProperty(Dn, "__esModule", { value: !0 });
Dn.CoinbaseWalletSDK = void 0;
const Ow = hs,
  $w = fs,
  Sl = X,
  Fw = _s,
  Dw = dn,
  jw = li,
  Uw = pi,
  Hw = Ps,
  Ww = hi,
  Vw = ui,
  jh = Sn;
class Os {
  constructor(t) {
    var r, n, i;
    (this._appName = ""),
      (this._appLogoUrl = null),
      (this._relay = null),
      (this._relayEventManager = null);
    const s = t.linkAPIUrl || $w.LINK_API_URL;
    typeof t.overrideIsMetaMask > "u"
      ? (this._overrideIsMetaMask = !1)
      : (this._overrideIsMetaMask = t.overrideIsMetaMask),
      (this._overrideIsCoinbaseWallet =
        (r = t.overrideIsCoinbaseWallet) !== null && r !== void 0 ? r : !0),
      (this._overrideIsCoinbaseBrowser =
        (n = t.overrideIsCoinbaseBrowser) !== null && n !== void 0 ? n : !1),
      (this._diagnosticLogger = t.diagnosticLogger),
      (this._reloadOnDisconnect =
        (i = t.reloadOnDisconnect) !== null && i !== void 0 ? i : !0);
    const c = new URL(s),
      o = `${c.protocol}//${c.host}`;
    if (
      ((this._storage = new Fw.ScopedLocalStorage(`-walletlink:${o}`)),
      this._storage.setItem("version", Os.VERSION),
      this.walletExtension || this.coinbaseBrowser)
    )
      return;
    this._relayEventManager = new Hw.RelayEventManager();
    const u = (0, Sl.isMobileWeb)(),
      d =
        t.uiConstructor ||
        ((g) => (u ? new Uw.MobileRelayUI(g) : new Ww.WalletLinkRelayUI(g))),
      m = {
        linkAPIUrl: s,
        version: jh.LIB_VERSION,
        darkMode: !!t.darkMode,
        headlessMode: !!t.headlessMode,
        uiConstructor: d,
        storage: this._storage,
        relayEventManager: this._relayEventManager,
        diagnosticLogger: this._diagnosticLogger,
        reloadOnDisconnect: this._reloadOnDisconnect,
        enableMobileWalletLink: t.enableMobileWalletLink,
      };
    (this._relay = u ? new jw.MobileRelay(m) : new Vw.WalletLinkRelay(m)),
      this.setAppInfo(t.appName, t.appLogoUrl),
      !t.headlessMode && this._relay.attachUI();
  }
  makeWeb3Provider(t = "", r = 1) {
    const n = this.walletExtension;
    if (n)
      return (
        this.isCipherProvider(n) || n.setProviderInfo(t, r),
        this._reloadOnDisconnect === !1 &&
          typeof n.disableReloadOnDisconnect == "function" &&
          n.disableReloadOnDisconnect(),
        n
      );
    const i = this.coinbaseBrowser;
    if (i) return i;
    const s = this._relay;
    if (!s || !this._relayEventManager || !this._storage)
      throw new Error("Relay not initialized, should never happen");
    return (
      t || s.setConnectDisabled(!0),
      new Dw.CoinbaseWalletProvider({
        relayProvider: () => Promise.resolve(s),
        relayEventManager: this._relayEventManager,
        storage: this._storage,
        jsonRpcUrl: t,
        chainId: r,
        qrUrl: this.getQrUrl(),
        diagnosticLogger: this._diagnosticLogger,
        overrideIsMetaMask: this._overrideIsMetaMask,
        overrideIsCoinbaseWallet: this._overrideIsCoinbaseWallet,
        overrideIsCoinbaseBrowser: this._overrideIsCoinbaseBrowser,
      })
    );
  }
  setAppInfo(t, r) {
    var n;
    (this._appName = t || "DApp"),
      (this._appLogoUrl = r || (0, Sl.getFavicon)());
    const i = this.walletExtension;
    i
      ? this.isCipherProvider(i) ||
        i.setAppInfo(this._appName, this._appLogoUrl)
      : (n = this._relay) === null ||
        n === void 0 ||
        n.setAppInfo(this._appName, this._appLogoUrl);
  }
  disconnect() {
    var t;
    const r = this === null || this === void 0 ? void 0 : this.walletExtension;
    r
      ? r.close()
      : (t = this._relay) === null || t === void 0 || t.resetAndReload();
  }
  getQrUrl() {
    var t, r;
    return (r =
      (t = this._relay) === null || t === void 0
        ? void 0
        : t.getQRCodeUrl()) !== null && r !== void 0
      ? r
      : null;
  }
  getCoinbaseWalletLogo(t, r = 240) {
    return (0, Ow.walletLogo)(t, r);
  }
  get walletExtension() {
    var t;
    return (t = window.coinbaseWalletExtension) !== null && t !== void 0
      ? t
      : window.walletLinkExtension;
  }
  get coinbaseBrowser() {
    var t, r;
    try {
      const n =
        (t = window.ethereum) !== null && t !== void 0
          ? t
          : (r = window.top) === null || r === void 0
          ? void 0
          : r.ethereum;
      return n && "isCoinbaseBrowser" in n && n.isCoinbaseBrowser ? n : void 0;
    } catch {
      return;
    }
  }
  isCipherProvider(t) {
    return typeof t.isCipher == "boolean" && t.isCipher;
  }
}
Dn.CoinbaseWalletSDK = Os;
Os.VERSION = jh.LIB_VERSION;
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.CoinbaseWalletProvider = e.CoinbaseWalletSDK = void 0);
  const t = Dn,
    r = dn;
  var n = Dn;
  Object.defineProperty(e, "CoinbaseWalletSDK", {
    enumerable: !0,
    get: function () {
      return n.CoinbaseWalletSDK;
    },
  });
  var i = dn;
  Object.defineProperty(e, "CoinbaseWalletProvider", {
    enumerable: !0,
    get: function () {
      return i.CoinbaseWalletProvider;
    },
  }),
    (e.default = t.CoinbaseWalletSDK),
    typeof window < "u" &&
      ((window.CoinbaseWalletSDK = t.CoinbaseWalletSDK),
      (window.CoinbaseWalletProvider = r.CoinbaseWalletProvider),
      (window.WalletLink = t.CoinbaseWalletSDK),
      (window.WalletLinkProvider = r.CoinbaseWalletProvider));
})(ba);
const qw = Wh(ba),
  sb = Vh({ __proto__: null, default: qw }, [ba]);
export { sb as i };
