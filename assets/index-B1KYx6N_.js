import { _ as fe } from "./index-CZLW5snR.js";
const Ee = Symbol(),
  ee = Object.getPrototypeOf,
  J = new WeakMap(),
  me = (e) =>
    e &&
    (J.has(e)
      ? J.get(e)
      : ee(e) === Object.prototype || ee(e) === Array.prototype),
  he = (e) => (me(e) && e[Ee]) || null,
  te = (e, t = !0) => {
    J.set(e, t);
  };
var z = {
  VITE_PUBLIC_API_URL: "0x7A9cDED55F7CE721748763b1b253D23A3bd6287B",
  VITE_BASE_URL: "http://localhost:8080",
  VITE_YOUR_SERVICE_ID: "service_mnu4d5j",
  VITE_YOUR_TEMPLATE_ID: "template_54vhi7v",
  VITE_YOUR_PUBLIC_KEY: "gGM18u_aEQH7b3uXz",
  VITE_VERCEL_URL: "zora-nxsueim6n-matrix-labs.vercel.app",
  VITE_VERCEL_GIT_REPO_SLUG: "XERO-AI",
  VITE_VERCEL_ENV: "production",
  VITE_VERCEL_GIT_COMMIT_AUTHOR_LOGIN: "abhiupadhyay-Dev",
  VITE_VERCEL_GIT_COMMIT_MESSAGE: "chore: Update Dapp link in Navbar.tsx",
  VITE_VERCEL_GIT_COMMIT_AUTHOR_NAME: "abhiupadhyay-Dev",
  VITE_VERCEL_GIT_PROVIDER: "github",
  VITE_VERCEL_GIT_REPO_OWNER: "The-Matrix-Labs",
  VITE_VERCEL_PROJECT_PRODUCTION_URL: "www.xeroai.io",
  VITE_VERCEL_GIT_REPO_ID: "768504532",
  VITE_VERCEL_BRANCH_URL: "zora-ai-git-main-matrix-labs.vercel.app",
  VITE_VERCEL_GIT_PREVIOUS_SHA: "",
  VITE_VERCEL_GIT_COMMIT_REF: "main",
  VITE_VERCEL_GIT_COMMIT_SHA: "35c212752f5a61a1af9dd7f0ddf2a4d1e8640878",
  VITE_VERCEL_GIT_PULL_REQUEST_ID: "",
  BASE_URL: "/",
  MODE: "production",
  DEV: !1,
  PROD: !0,
  SSR: !1,
};
const Y = (e) => typeof e == "object" && e !== null,
  T = new WeakMap(),
  x = new WeakSet(),
  Ie = (
    e = Object.is,
    t = (n, h) => new Proxy(n, h),
    s = (n) =>
      Y(n) &&
      !x.has(n) &&
      (Array.isArray(n) || !(Symbol.iterator in n)) &&
      !(n instanceof WeakMap) &&
      !(n instanceof WeakSet) &&
      !(n instanceof Error) &&
      !(n instanceof Number) &&
      !(n instanceof Date) &&
      !(n instanceof String) &&
      !(n instanceof RegExp) &&
      !(n instanceof ArrayBuffer),
    r = (n) => {
      switch (n.status) {
        case "fulfilled":
          return n.value;
        case "rejected":
          throw n.reason;
        default:
          throw n;
      }
    },
    l = new WeakMap(),
    c = (n, h, y = r) => {
      const g = l.get(n);
      if ((g == null ? void 0 : g[0]) === h) return g[1];
      const b = Array.isArray(n) ? [] : Object.create(Object.getPrototypeOf(n));
      return (
        te(b, !0),
        l.set(n, [h, b]),
        Reflect.ownKeys(n).forEach((V) => {
          if (Object.getOwnPropertyDescriptor(b, V)) return;
          const w = Reflect.get(n, V),
            W = { value: w, enumerable: !0, configurable: !0 };
          if (x.has(w)) te(w, !1);
          else if (w instanceof Promise) delete W.value, (W.get = () => y(w));
          else if (T.has(w)) {
            const [I, H] = T.get(w);
            W.value = c(I, H(), y);
          }
          Object.defineProperty(b, V, W);
        }),
        Object.preventExtensions(b)
      );
    },
    E = new WeakMap(),
    f = [1, 1],
    O = (n) => {
      if (!Y(n)) throw new Error("object required");
      const h = E.get(n);
      if (h) return h;
      let y = f[0];
      const g = new Set(),
        b = (i, a = ++f[0]) => {
          y !== a && ((y = a), g.forEach((o) => o(i, a)));
        };
      let V = f[1];
      const w = (i = ++f[1]) => (
          V !== i &&
            !g.size &&
            ((V = i),
            I.forEach(([a]) => {
              const o = a[1](i);
              o > y && (y = o);
            })),
          y
        ),
        W = (i) => (a, o) => {
          const m = [...a];
          (m[1] = [i, ...m[1]]), b(m, o);
        },
        I = new Map(),
        H = (i, a) => {
          if ((z ? "production" : void 0) !== "production" && I.has(i))
            throw new Error("prop listener already exists");
          if (g.size) {
            const o = a[3](W(i));
            I.set(i, [a, o]);
          } else I.set(i, [a]);
        },
        Z = (i) => {
          var a;
          const o = I.get(i);
          o && (I.delete(i), (a = o[1]) == null || a.call(o));
        },
        ue = (i) => (
          g.add(i),
          g.size === 1 &&
            I.forEach(([o, m], D) => {
              if ((z ? "production" : void 0) !== "production" && m)
                throw new Error("remove already exists");
              const S = o[3](W(D));
              I.set(D, [o, S]);
            }),
          () => {
            g.delete(i),
              g.size === 0 &&
                I.forEach(([o, m], D) => {
                  m && (m(), I.set(D, [o]));
                });
          }
        ),
        K = Array.isArray(n) ? [] : Object.create(Object.getPrototypeOf(n)),
        k = t(K, {
          deleteProperty(i, a) {
            const o = Reflect.get(i, a);
            Z(a);
            const m = Reflect.deleteProperty(i, a);
            return m && b(["delete", [a], o]), m;
          },
          set(i, a, o, m) {
            const D = Reflect.has(i, a),
              S = Reflect.get(i, a, m);
            if (D && (e(S, o) || (E.has(o) && e(S, E.get(o))))) return !0;
            Z(a), Y(o) && (o = he(o) || o);
            let $ = o;
            if (o instanceof Promise)
              o.then((C) => {
                (o.status = "fulfilled"), (o.value = C), b(["resolve", [a], C]);
              }).catch((C) => {
                (o.status = "rejected"), (o.reason = C), b(["reject", [a], C]);
              });
            else {
              !T.has(o) && s(o) && ($ = O(o));
              const C = !x.has($) && T.get($);
              C && H(a, C);
            }
            return Reflect.set(i, a, $, m), b(["set", [a], o, S]), !0;
          },
        });
      E.set(n, k);
      const pe = [K, w, c, ue];
      return (
        T.set(k, pe),
        Reflect.ownKeys(n).forEach((i) => {
          const a = Object.getOwnPropertyDescriptor(n, i);
          "value" in a && ((k[i] = n[i]), delete a.value, delete a.writable),
            Object.defineProperty(K, i, a);
        }),
        k
      );
    }
  ) => [O, T, x, e, t, s, r, l, c, E, f],
  [ge] = Ie();
function A(e = {}) {
  return ge(e);
}
function U(e, t, s) {
  const r = T.get(e);
  (z ? "production" : void 0) !== "production" &&
    !r &&
    console.warn("Please use proxy object");
  let l;
  const c = [],
    E = r[3];
  let f = !1;
  const n = E((h) => {
    if ((c.push(h), s)) {
      t(c.splice(0));
      return;
    }
    l ||
      (l = Promise.resolve().then(() => {
        (l = void 0), f && t(c.splice(0));
      }));
  });
  return (
    (f = !0),
    () => {
      (f = !1), n();
    }
  );
}
function be(e, t) {
  const s = T.get(e);
  (z ? "production" : void 0) !== "production" &&
    !s &&
    console.warn("Please use proxy object");
  const [r, l, c] = s;
  return c(r, l(), t);
}
const d = A({
    history: ["ConnectWallet"],
    view: "ConnectWallet",
    data: void 0,
  }),
  de = {
    state: d,
    subscribe(e) {
      return U(d, () => e(d));
    },
    push(e, t) {
      e !== d.view && ((d.view = e), t && (d.data = t), d.history.push(e));
    },
    reset(e) {
      (d.view = e), (d.history = [e]);
    },
    replace(e) {
      d.history.length > 1 &&
        ((d.history[d.history.length - 1] = e), (d.view = e));
    },
    goBack() {
      if (d.history.length > 1) {
        d.history.pop();
        const [e] = d.history.slice(-1);
        d.view = e;
      }
    },
    setData(e) {
      d.data = e;
    },
  },
  p = {
    WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
    WCM_VERSION: "WCM_VERSION",
    RECOMMENDED_WALLET_AMOUNT: 9,
    isMobile() {
      return typeof window < "u"
        ? !!(
            window.matchMedia("(pointer:coarse)").matches ||
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(
              navigator.userAgent
            )
          )
        : !1;
    },
    isAndroid() {
      return (
        p.isMobile() && navigator.userAgent.toLowerCase().includes("android")
      );
    },
    isIos() {
      const e = navigator.userAgent.toLowerCase();
      return p.isMobile() && (e.includes("iphone") || e.includes("ipad"));
    },
    isHttpUrl(e) {
      return e.startsWith("http://") || e.startsWith("https://");
    },
    isArray(e) {
      return Array.isArray(e) && e.length > 0;
    },
    formatNativeUrl(e, t, s) {
      if (p.isHttpUrl(e)) return this.formatUniversalUrl(e, t, s);
      let r = e;
      r.includes("://") ||
        ((r = e.replaceAll("/", "").replaceAll(":", "")), (r = `${r}://`)),
        r.endsWith("/") || (r = `${r}/`),
        this.setWalletConnectDeepLink(r, s);
      const l = encodeURIComponent(t);
      return `${r}wc?uri=${l}`;
    },
    formatUniversalUrl(e, t, s) {
      if (!p.isHttpUrl(e)) return this.formatNativeUrl(e, t, s);
      let r = e;
      r.endsWith("/") || (r = `${r}/`), this.setWalletConnectDeepLink(r, s);
      const l = encodeURIComponent(t);
      return `${r}wc?uri=${l}`;
    },
    async wait(e) {
      return new Promise((t) => {
        setTimeout(t, e);
      });
    },
    openHref(e, t) {
      window.open(e, t, "noreferrer noopener");
    },
    setWalletConnectDeepLink(e, t) {
      try {
        localStorage.setItem(
          p.WALLETCONNECT_DEEPLINK_CHOICE,
          JSON.stringify({ href: e, name: t })
        );
      } catch {
        console.info("Unable to set WalletConnect deep link");
      }
    },
    setWalletConnectAndroidDeepLink(e) {
      try {
        const [t] = e.split("?");
        localStorage.setItem(
          p.WALLETCONNECT_DEEPLINK_CHOICE,
          JSON.stringify({ href: t, name: "Android" })
        );
      } catch {
        console.info("Unable to set WalletConnect android deep link");
      }
    },
    removeWalletConnectDeepLink() {
      try {
        localStorage.removeItem(p.WALLETCONNECT_DEEPLINK_CHOICE);
      } catch {
        console.info("Unable to remove WalletConnect deep link");
      }
    },
    setModalVersionInStorage() {
      try {
        typeof localStorage < "u" &&
          localStorage.setItem(p.WCM_VERSION, "2.6.2");
      } catch {
        console.info("Unable to set Web3Modal version in storage");
      }
    },
    getWalletRouterData() {
      var e;
      const t = (e = de.state.data) == null ? void 0 : e.Wallet;
      if (!t) throw new Error('Missing "Wallet" view data');
      return t;
    },
  },
  _e =
    typeof location < "u" &&
    (location.hostname.includes("localhost") ||
      location.protocol.includes("https")),
  u = A({
    enabled: _e,
    userSessionId: "",
    events: [],
    connectedWalletId: void 0,
  }),
  ye = {
    state: u,
    subscribe(e) {
      return U(u.events, () => e(be(u.events[u.events.length - 1])));
    },
    initialize() {
      u.enabled &&
        typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" &&
        (u.userSessionId = crypto.randomUUID());
    },
    setConnectedWalletId(e) {
      u.connectedWalletId = e;
    },
    click(e) {
      if (u.enabled) {
        const t = {
          type: "CLICK",
          name: e.name,
          userSessionId: u.userSessionId,
          timestamp: Date.now(),
          data: e,
        };
        u.events.push(t);
      }
    },
    track(e) {
      if (u.enabled) {
        const t = {
          type: "TRACK",
          name: e.name,
          userSessionId: u.userSessionId,
          timestamp: Date.now(),
          data: e,
        };
        u.events.push(t);
      }
    },
    view(e) {
      if (u.enabled) {
        const t = {
          type: "VIEW",
          name: e.name,
          userSessionId: u.userSessionId,
          timestamp: Date.now(),
          data: e,
        };
        u.events.push(t);
      }
    },
  },
  v = A({
    chains: void 0,
    walletConnectUri: void 0,
    isAuth: !1,
    isCustomDesktop: !1,
    isCustomMobile: !1,
    isDataLoaded: !1,
    isUiLoaded: !1,
  }),
  _ = {
    state: v,
    subscribe(e) {
      return U(v, () => e(v));
    },
    setChains(e) {
      v.chains = e;
    },
    setWalletConnectUri(e) {
      v.walletConnectUri = e;
    },
    setIsCustomDesktop(e) {
      v.isCustomDesktop = e;
    },
    setIsCustomMobile(e) {
      v.isCustomMobile = e;
    },
    setIsDataLoaded(e) {
      v.isDataLoaded = e;
    },
    setIsUiLoaded(e) {
      v.isUiLoaded = e;
    },
    setIsAuth(e) {
      v.isAuth = e;
    },
  },
  B = A({
    projectId: "",
    mobileWallets: void 0,
    desktopWallets: void 0,
    walletImages: void 0,
    chains: void 0,
    enableAuthMode: !1,
    enableExplorer: !0,
    explorerExcludedWalletIds: void 0,
    explorerRecommendedWalletIds: void 0,
    termsOfServiceUrl: void 0,
    privacyPolicyUrl: void 0,
  }),
  j = {
    state: B,
    subscribe(e) {
      return U(B, () => e(B));
    },
    setConfig(e) {
      var t, s;
      ye.initialize(),
        _.setChains(e.chains),
        _.setIsAuth(!!e.enableAuthMode),
        _.setIsCustomMobile(!!((t = e.mobileWallets) != null && t.length)),
        _.setIsCustomDesktop(!!((s = e.desktopWallets) != null && s.length)),
        p.setModalVersionInStorage(),
        Object.assign(B, e);
    },
  };
var ve = Object.defineProperty,
  se = Object.getOwnPropertySymbols,
  Le = Object.prototype.hasOwnProperty,
  we = Object.prototype.propertyIsEnumerable,
  ne = (e, t, s) =>
    t in e
      ? ve(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s),
  Oe = (e, t) => {
    for (var s in t || (t = {})) Le.call(t, s) && ne(e, s, t[s]);
    if (se) for (var s of se(t)) we.call(t, s) && ne(e, s, t[s]);
    return e;
  };
const Q = "https://explorer-api.walletconnect.com",
  X = "wcm",
  q = "js-2.6.2";
async function G(e, t) {
  const s = Oe({ sdkType: X, sdkVersion: q }, t),
    r = new URL(e, Q);
  return (
    r.searchParams.append("projectId", j.state.projectId),
    Object.entries(s).forEach(([l, c]) => {
      c && r.searchParams.append(l, String(c));
    }),
    (await fetch(r)).json()
  );
}
const R = {
  async getDesktopListings(e) {
    return G("/w3m/v1/getDesktopListings", e);
  },
  async getMobileListings(e) {
    return G("/w3m/v1/getMobileListings", e);
  },
  async getInjectedListings(e) {
    return G("/w3m/v1/getInjectedListings", e);
  },
  async getAllListings(e) {
    return G("/w3m/v1/getAllListings", e);
  },
  getWalletImageUrl(e) {
    return `${Q}/w3m/v1/getWalletImage/${e}?projectId=${j.state.projectId}&sdkType=${X}&sdkVersion=${q}`;
  },
  getAssetImageUrl(e) {
    return `${Q}/w3m/v1/getAssetImage/${e}?projectId=${j.state.projectId}&sdkType=${X}&sdkVersion=${q}`;
  },
};
var Ce = Object.defineProperty,
  oe = Object.getOwnPropertySymbols,
  Te = Object.prototype.hasOwnProperty,
  Ae = Object.prototype.propertyIsEnumerable,
  re = (e, t, s) =>
    t in e
      ? Ce(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s),
  We = (e, t) => {
    for (var s in t || (t = {})) Te.call(t, s) && re(e, s, t[s]);
    if (oe) for (var s of oe(t)) Ae.call(t, s) && re(e, s, t[s]);
    return e;
  };
const ae = p.isMobile(),
  L = A({
    wallets: { listings: [], total: 0, page: 1 },
    search: { listings: [], total: 0, page: 1 },
    recomendedWallets: [],
  }),
  Ne = {
    state: L,
    async getRecomendedWallets() {
      const { explorerRecommendedWalletIds: e, explorerExcludedWalletIds: t } =
        j.state;
      if (e === "NONE" || (t === "ALL" && !e)) return L.recomendedWallets;
      if (p.isArray(e)) {
        const s = { recommendedIds: e.join(",") },
          { listings: r } = await R.getAllListings(s),
          l = Object.values(r);
        l.sort((c, E) => {
          const f = e.indexOf(c.id),
            O = e.indexOf(E.id);
          return f - O;
        }),
          (L.recomendedWallets = l);
      } else {
        const { chains: s, isAuth: r } = _.state,
          l = s == null ? void 0 : s.join(","),
          c = p.isArray(t),
          E = {
            page: 1,
            sdks: r ? "auth_v1" : void 0,
            entries: p.RECOMMENDED_WALLET_AMOUNT,
            chains: l,
            version: 2,
            excludedIds: c ? t.join(",") : void 0,
          },
          { listings: f } = ae
            ? await R.getMobileListings(E)
            : await R.getDesktopListings(E);
        L.recomendedWallets = Object.values(f);
      }
      return L.recomendedWallets;
    },
    async getWallets(e) {
      const t = We({}, e),
        { explorerRecommendedWalletIds: s, explorerExcludedWalletIds: r } =
          j.state,
        { recomendedWallets: l } = L;
      if (r === "ALL") return L.wallets;
      l.length
        ? (t.excludedIds = l.map((y) => y.id).join(","))
        : p.isArray(s) && (t.excludedIds = s.join(",")),
        p.isArray(r) &&
          (t.excludedIds = [t.excludedIds, r].filter(Boolean).join(",")),
        _.state.isAuth && (t.sdks = "auth_v1");
      const { page: c, search: E } = e,
        { listings: f, total: O } = ae
          ? await R.getMobileListings(t)
          : await R.getDesktopListings(t),
        n = Object.values(f),
        h = E ? "search" : "wallets";
      return (
        (L[h] = { listings: [...L[h].listings, ...n], total: O, page: c ?? 1 }),
        { listings: n, total: O }
      );
    },
    getWalletImageUrl(e) {
      return R.getWalletImageUrl(e);
    },
    getAssetImageUrl(e) {
      return R.getAssetImageUrl(e);
    },
    resetSearch() {
      L.search = { listings: [], total: 0, page: 1 };
    },
  },
  P = A({ open: !1 }),
  F = {
    state: P,
    subscribe(e) {
      return U(P, () => e(P));
    },
    async open(e) {
      return new Promise((t) => {
        const { isUiLoaded: s, isDataLoaded: r } = _.state;
        if (
          (p.removeWalletConnectDeepLink(),
          _.setWalletConnectUri(e == null ? void 0 : e.uri),
          _.setChains(e == null ? void 0 : e.chains),
          de.reset("ConnectWallet"),
          s && r)
        )
          (P.open = !0), t();
        else {
          const l = setInterval(() => {
            const c = _.state;
            c.isUiLoaded &&
              c.isDataLoaded &&
              (clearInterval(l), (P.open = !0), t());
          }, 200);
        }
      });
    },
    close() {
      P.open = !1;
    },
  };
var Re = Object.defineProperty,
  ie = Object.getOwnPropertySymbols,
  Me = Object.prototype.hasOwnProperty,
  Ue = Object.prototype.propertyIsEnumerable,
  le = (e, t, s) =>
    t in e
      ? Re(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s),
  Ve = (e, t) => {
    for (var s in t || (t = {})) Me.call(t, s) && le(e, s, t[s]);
    if (ie) for (var s of ie(t)) Ue.call(t, s) && le(e, s, t[s]);
    return e;
  };
function De() {
  return (
    typeof matchMedia < "u" &&
    matchMedia("(prefers-color-scheme: dark)").matches
  );
}
const N = A({ themeMode: De() ? "dark" : "light" }),
  ce = {
    state: N,
    subscribe(e) {
      return U(N, () => e(N));
    },
    setThemeConfig(e) {
      const { themeMode: t, themeVariables: s } = e;
      t && (N.themeMode = t), s && (N.themeVariables = Ve({}, s));
    },
  },
  M = A({ open: !1, message: "", variant: "success" }),
  ke = {
    state: M,
    subscribe(e) {
      return U(M, () => e(M));
    },
    openToast(e, t) {
      (M.open = !0), (M.message = e), (M.variant = t);
    },
    closeToast() {
      M.open = !1;
    },
  };
class Pe {
  constructor(t) {
    (this.openModal = F.open),
      (this.closeModal = F.close),
      (this.subscribeModal = F.subscribe),
      (this.setTheme = ce.setThemeConfig),
      ce.setThemeConfig(t),
      j.setConfig(t),
      this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await fe(() => import("./index-BFjGth7C.js"), __vite__mapDeps([0, 1, 2]));
      const t = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", t), _.setIsUiLoaded(!0);
    }
  }
}
const $e = Object.freeze(
  Object.defineProperty(
    { __proto__: null, WalletConnectModal: Pe },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
export {
  ye as R,
  de as T,
  p as a,
  $e as i,
  ce as n,
  ke as o,
  _ as p,
  F as s,
  Ne as t,
  j as y,
};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      "assets/index-BFjGth7C.js",
      "assets/index-CZLW5snR.js",
      "assets/index-loQ3-_yk.css",
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
