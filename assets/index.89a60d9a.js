var Wt = Object.defineProperty,
  Ut = Object.defineProperties;
var Nt = Object.getOwnPropertyDescriptors;
var re = Object.getOwnPropertySymbols;
var Ne = Object.prototype.hasOwnProperty,
  ze = Object.prototype.propertyIsEnumerable;
var _e = (t, n, s) =>
    n in t
      ? Wt(t, n, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (t[n] = s),
  w = (t, n) => {
    for (var s in n || (n = {})) Ne.call(n, s) && _e(t, s, n[s]);
    if (re) for (var s of re(n)) ze.call(n, s) && _e(t, s, n[s]);
    return t;
  },
  $ = (t, n) => Ut(t, Nt(n));
var L = (t, n) => {
  var s = {};
  for (var a in t) Ne.call(t, a) && n.indexOf(a) < 0 && (s[a] = t[a]);
  if (t != null && re)
    for (var a of re(t)) n.indexOf(a) < 0 && ze.call(t, a) && (s[a] = t[a]);
  return s;
};
import {
  c as zt,
  B as _t,
  I as jt,
  a as Vt,
  W as Gt,
  b as oe,
  f as qt,
  p as Xt,
  d as _,
  e as Yt,
  n as de,
  r as Zt,
  u as X,
  g as j,
  h as Kt,
  i,
  U as Qt,
  N as Jt,
  j as $t,
  k as en,
  l as V,
  m as je,
  R as Ve,
  J as Ge,
  P as tn,
  C as nn,
  o as an,
  q as qe,
  s as P,
  t as ee,
  v as e,
  w as sn,
  x as rn,
  y as me,
  z as m,
  L as Xe,
  A as Ye,
  D as C,
  E as on,
  F as ye,
  G as ln,
  H as cn,
  K as fe,
  M as be,
  O as ge,
  Q as xe,
  S as he,
  T as un,
  V as Ze,
  X as pn,
  Y as we,
  Z as x,
  _ as dn,
  $ as mn,
  a0 as yn,
  a1 as Ee,
  a2 as fn,
  a3 as bn,
  a4 as ve,
  a5 as gn,
  a6 as xn,
  a7 as hn,
  a8 as Ke,
  a9 as Qe,
  aa as Je,
  ab as ie,
  ac as $e,
  ad as wn,
  ae as et,
  af as En,
  ag as vn,
  ah as tt,
  ai as nt,
  aj as at,
  ak as kn,
  al as Tn,
  am as te,
  an as Cn,
  ao as Sn,
  ap as Bn,
  aq as st,
  ar as An,
  as as Pn,
  at as Mn,
  au as Hn,
  av as Fn,
  aw as In,
  ax as Rn,
  ay as Ln,
  az as Dn,
  aA as On,
  aB as Wn,
} from "./vendor.5cd29b4a.js";
const Un = function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) a(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && a(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerpolicy && (o.referrerPolicy = r.referrerpolicy),
      r.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function a(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = s(r);
    fetch(r.href, o);
  }
};
Un();
const rt = zt({
  palette: {
    primary: { main: "#FFF" },
    secondary: { main: "#1D2024" },
    text: { primary: "#FFFFFF", secondary: "rgba(255,255,255, 0.6)" },
    background: { default: "#1D2024", paper: "#272B2F" },
    divider: "rgba(255, 255, 255, 0.1)",
  },
  typography: {
    fontFamily: [
      "Work Sans",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
var Nn = "/assets/binance.91c52b85.svg",
  zn = "/assets/metamask.c0a14428.svg",
  _n = "/assets/trust.a32f745a.svg",
  F;
(function (t) {
  (t.Injected = "injected"), (t.BSC = "bsc");
})(F || (F = {}));
const ot = [
    { key: "Metamask", label: "Metamask", logo: zn, connectorId: F.Injected },
    { key: "Binance", label: "Binance Wallet", logo: Nn, connectorId: F.BSC },
    { key: "Trust", label: "Trust Wallet", logo: _n, connectorId: F.Injected },
  ],
  jn = { 56: "BSC Mainnet", 97: "BSC Testnet" },
  Vn = { 56: "https://bscscan.com/", 97: "https://testnet.bscscan.com/" },
  Gn = {
    56: {
      RUBIX: "0x0409633A72D846fc5BBe2f98D88564D35987904D",
      LP_RUBIX_BNB: "0xdff88a0a43271344b760b58a35076bf05524195c",
      RUBIX_LEGACY: "0xdff88a0a43271344b760b58a35076bf05524195c",
      RUBIX: "0x2A44baB23e3869044083deEF23c9ad0Abd88518F",
    },
    97: {
      RUBIX: "0xB19586D1C0322Fc48bB784f5aF4A862c21dd03f3",
      LP_RUBIX_BNB: "0xf09f5e21f86692c614d2d7b47e3b9729dc1c436f",
      RUBIX_LEGACY: "0xf09f5e21f86692c614d2d7b47e3b9729dc1c436f",
      RUBIX: "0x778aff493ec182e948f462fa45396dfa7d9af7c3",
    },
  },
  qn = {
    56: {
      RUBIX_V1: "0x0b29cc2a4bbc9cb75519cdcd3995de9e7a914fb1",
      RUBIX_V2: "0xadA58Cf32276CCD03a1C155688eFF8B3BC282285",
      LP_RUBIX_BNB: "0xadA58Cf32276CCD03a1C155688eFF8B3BC282285",
    },
    97: {
      RUBIX_V1: "0x65479eB445368F79FE8b73E0CC375C0042f8F748",
      RUBIX_V2: "0x65479eB445368F79FE8b73E0CC375C0042f8F748",
      LP_RUBIX_BNB: "0x65479eB445368F79FE8b73E0CC375C0042f8F748",
    },
  },
  it = parseInt("56"),
  D = [56, 97].indexOf(it) > -1 ? it : 97,
  ke = jn[D],
  Xn = Vn[D],
  G = Gn[D],
  Te = qn[D],
  lt = G.RUBIX,
  Yn = 3,
  Ce = 4e5;
_t.from((60 / Yn) * 60 * 24 * 365);
const Zn = { staleTime: 1 / 0, refetchInterval: 15e3 },
  Kn = new jt({ supportedChainIds: [D] }),
  Qn = new Vt({ supportedChainIds: [D] }),
  Jn = { [F.Injected]: Kn, [F.BSC]: Qn },
  ct = { [F.Injected]: "ethereum", [F.BSC]: "BinanceChain" },
  $n = (t) => new Gt(t);
var ut = [
  {
    constant: !0,
    inputs: [],
    name: "name",
    outputs: [{ name: "", type: "string" }],
    payable: !1,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: !1,
    inputs: [
      { name: "_spender", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", type: "bool" }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: !0,
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", type: "uint256" }],
    payable: !1,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: !1,
    inputs: [
      { name: "_from", type: "address" },
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", type: "bool" }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: !0,
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", type: "uint8" }],
    payable: !1,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: !0,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    payable: !1,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: !0,
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", type: "string" }],
    payable: !1,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: !1,
    inputs: [
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", type: "bool" }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: !0,
    inputs: [
      { name: "_owner", type: "address" },
      { name: "_spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", type: "uint256" }],
    payable: !1,
    stateMutability: "view",
    type: "function",
  },
  { payable: !0, stateMutability: "payable", type: "fallback" },
  {
    anonymous: !1,
    inputs: [
      { indexed: !0, name: "owner", type: "address" },
      { indexed: !0, name: "spender", type: "address" },
      { indexed: !1, name: "value", type: "uint256" },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      { indexed: !0, name: "from", type: "address" },
      { indexed: !0, name: "to", type: "address" },
      { indexed: !1, name: "value", type: "uint256" },
    ],
    name: "Transfer",
    type: "event",
  },
];
const ea = 2,
  M = (t) => (oe.isBigNumber(t) ? t : new oe(t)),
  O = (t) => M(qt(t)),
  ne = (t) => Xt(t.toString()),
  S = M(0),
  ta = (t, n) => {
    var o;
    const s = n == null ? void 0 : n.prefix,
      a = n == null ? void 0 : n.suffix,
      r = [];
    return (
      s && r.push(s),
      r.push(
        M(t).toFormat(
          (o = n == null ? void 0 : n.decimals) != null ? o : ea,
          oe.ROUND_DOWN
        )
      ),
      a && r.push(` ${a}`),
      r.join("")
    );
  },
  le = "CONTRACT",
  na = "POOL",
  pt = "TOKEN",
  aa = "PUBEXTERNALLIC",
  Se = _(!1),
  dt = _(null),
  mt = Yt("RUBIX-staker-wallet-name", "");
de.setDefaults({
  thousandSeparated: !0,
  mantissa: 2,
  trimMantissa: !1,
  roundingFunction: Math.floor,
});
const T = (t, n = {}) => de(t.toNumber()).format(w({}, n)),
  Be = (t, n = {}) => de(t).format(w({}, n)),
  sa = (t, n = 8) => `${t.slice(0, n)}...${t.slice(-n)}`,
  ra = {
    56: [
      "https://bsc-dataseed.binance.org/",
      "https://bsc-dataseed1.defibit.io/",
      "https://bsc-dataseed1.ninicoin.io/",
    ],
    97: [
      "https://data-seed-prebsc-1-s1.binance.org:8545/",
      "https://data-seed-prebsc-2-s2.binance.org:8545/",
      "https://data-seed-prebsc-1-s2.binance.org:8545/",
    ],
  },
  Ae = ra[D],
  yt = () => {
    const t = Zt(0, Ae.length - 1);
    return Ae[t];
  },
  oa = async () => {
    const t = window.ethereum;
    if (t == null ? void 0 : t.request)
      try {
        return (
          await t.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: `0x${D.toString(16)}`,
                chainName: "Binance Smart Chain Mainnet",
                nativeCurrency: { name: "BNB", symbol: "bnb", decimals: 18 },
                rpcUrls: Ae,
                blockExplorerUrls: [Xn],
              },
            ],
          }),
          !0
        );
      } catch (n) {
        return console.error(n), !1;
      }
    else
      return (
        console.error(
          "Can't setup the BSC network on metamask because window.ethereum is undefined"
        ),
        !1
      );
  },
  ia = async (t, n, s = 18, a) =>
    await window.ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: { address: t, symbol: n, decimals: s, image: a },
      },
    });
function I() {
  const { enqueueSnackbar: t } = X(),
    n = j(mt),
    {
      account: s,
      activate: a,
      chainId: r,
      deactivate: o,
      library: l,
      active: y,
    } = Kt(),
    [c, u] = i.exports.useState(!1),
    b = i.exports.useCallback(
      async ({ key: d, connectorId: g }) => {
        const v = Jn[g],
          B = g === F.Injected;
        u(!0),
          await a(v, async (k) => {
            let E = "";
            k instanceof Qt
              ? B && (await oa())
                ? await a(v)
                : (E = "Please switch to Binance Smart Chain")
              : ((E = "Failed to connect wallet"),
                k instanceof Jt || k instanceof $t
                  ? (E = "No provider was found")
                  : k instanceof en
                  ? (E = "Please authorize to access your account")
                  : (k.message.indexOf("Binance-Chain-Tigris") > -1 &&
                      (E = "Please switch to Binance Smart Chain"),
                    console.log(k.name, k.message))),
              E && t(E, { variant: "error" });
          }),
          u(!1),
          n(d);
      },
      [a, t, n]
    ),
    f = i.exports.useMemo(() => (s ? sa(s) : ""), [s]);
  return {
    account: i.exports.useMemo(() => s || "", [s]),
    activate: a,
    chainId: r,
    deactivate: o,
    connecting: c,
    connected: y,
    shortAccount: f,
    provider: l,
    ChainName: ke,
    connectWallet: b,
  };
}
function ft(t) {
  const n = i.exports.useRef(!0),
    { account: s } = I();
  i.exports.useEffect(() => {
    !n.current && !s && t(), (n.current = !1);
  }, [s, t]);
}
const la = { totalSupply: S, available: S },
  Pe = V(
    ({ state: t = la }) => je(t),
    (t, n) => t.token === n.token
  ),
  Y = V((t) =>
    _(
      (n) => n(Pe({ token: t })),
      (n, s, a) => {
        s(Pe({ token: t }), (r) => w(w({}, r), a));
      }
    )
  ),
  ca = V((t) =>
    _(null, (n, s) => {
      s(Pe({ token: t }), Ve);
    })
  ),
  ua = yt();
function pa() {
  return i.exports.useMemo(() => new Ge(ua, { name: ke, chainId: D }), []);
}
const bt = (t, n) => i.exports.useMemo(() => new nn(t, n), [n, t]);
function gt() {
  const t = pa();
  return i.exports.useCallback(async () => {
    const s = new tn();
    return await s.init(t), s;
  }, [t]);
}
function Me(t) {
  const { account: n } = I(),
    s = gt(),
    a = bt(G[t], ut),
    r = j(Y(t)),
    o = j(ca(t));
  ft(o);
  const l = i.exports.useCallback(async () => {
    if (a && n) {
      const y = await s(),
        [c, u] = await y.all([a.balanceOf(n), a.decimals()]),
        b = M(an(c, u));
      r({ available: b });
    }
  }, [a, n, s, r]);
  qe([le, pt, t, n], l);
}
const da = P(ee)(({ theme: { palette: t } }) => ({
  minWidth: "120px",
  fontWeight: 700,
  color: t.text.primary,
  borderRadius: "4px",
  background: "rgba(217, 230, 255, 0.25)",
  ":hover": { background: "rgba(217, 230, 255, 0.5)" },
  "&.Mui-disabled": {
    color: "rgba(255, 255, 255, 0.3)",
    background: "rgba(52,129,183,0.1)",
    boxShadow: "none",
  },
  "&.MuiButton-contained": {
    background: "linear-gradient(80.54deg, #ECAD09 0%, #ECAD09 100%)",
    "&:hover": {
      background:
        "linear-gradient(0deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25)), linear-gradient(80.54deg, #ECAD09 0%, #ECAD09 100%)",
    },
    "&.Mui-disabled": {
      background:
        "linear-gradient(80.54deg, rgba(230, 0, 15, 0.3) 0%, rgba(255, 100, 0, 0.3) 100%)",
    },
  },
  "&.MuiButton-outlined": {
    background: "transparent",
    border: "3px solid #ECAD09",
    "&:hover": {
      background: t.text.primary,
      borderColor: t.text.primary,
      color: "#ECAD09",
    },
    "&.Mui-disabled": {
      background: "",
      color: "rgba(255, 255, 255, 0.3)",
      borderColor: "rgba(255, 255, 255, 0.3)",
    },
  },
}));
function Z(r) {
  var o = r,
    { loading: t = !1, disabled: n, children: s } = o,
    a = L(o, ["loading", "disabled", "children"]);
  return e.createElement(
    da,
    w({ disabled: t || n }, a),
    t ? e.createElement(sn, { size: 24, thickness: 2 }) : s
  );
}
const ma = !0;
function He(t) {
  const n = j(Se);
  return e.createElement(
    Z,
    w({ size: "small", onClick: () => n(!0), disabled: !ma }, t),
    "Connect Wallet"
  );
}
var ya = "/img/logo.webp",
  fa = "/img/logo.webp";
const ba = [
  { key: "stake", to: "/", label: "Stake" },
  { key: "swap", to: "/swap", label: "Swap" },
];
function ga() {
  const { pathname: t } = rn(),
    n = i.exports.useCallback((s) => {
      s && me.pageview(s);
    }, []);
  return e.createElement(
    m,
    {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    ba.map(({ key: s, to: a, href: r, label: o }) =>
      e.createElement(
        Xe,
        {
          key: s,
          component: a ? Ye : "a",
          to: a,
          href: r,
          target: r ? "_blank" : void 0,
          underline: "none",
          sx: {
            position: "relative",
            p: { xs: 1, sm: 2 },
            display: "inline-block",
            fontSize: { xs: 14, md: 16 },
            cursor: "pointer",
            lineHeight: "20px",
            fontWeight: "bold",
            color: "rgba(255,255,255,0.5)",
            textTransform: "uppercase",
            transition: "color 0.25s",
            ":hover": { color: "#ECAD09" },
            "::before": {
              content: a === t ? "''" : void 0,
              display: "block",
              position: "absolute",
              bottom: "50%",
              left: "50%",
              width: "2px",
              height: "100%",
              background: "linear-gradient(to right, #ECAD09 0%, #ECAD09 100%)",
              transform: "translate(-2px, -20px)",
            },
          },
          className: a === t ? "gradientText" : void 0,
          onClick: () => n(r || a),
        },
        o
      )
    )
  );
}
var ce =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAIgElEQVRYR+2Ye3BV1RXG19qvc+7NC00ADeEREqviOIqMGUFxsGKVRxXFoNZiRx5atdpaqyM+6k1Vpjpa27GtLRTFqVUBLUVBtApCqaK0ODitlKcJEiIGSAjk3vPYj9U5MWGgBZV6pXHG/c/949y7zm++vda3v30RvmQLv2S88BXwF71jX0qFkQCS3kg+uu0iAEzUxeZryye3fdD0VHUhGJwHtjsSUy3whh0gi/tXXoltU6vulQAnZQ3eV/bEpjUJMAK47gCeAWCDAPCcKVWnFkh+l7ZuDbZOqjwlpdSrxJlt0/ru3jM2zaoDwMz/GbqrBXZPqZrqSVlHQCwM9EhsuWZgiQL1gomjoVxKhkhPiiic/kJua8OEeR1KH+nexrm1wC70qioxxe404CYSOQdcvPFRix2XPOQj/QG3Ffrp+8MwJsbIccY2UxBMSz/bOD/ZliOldte7cpf3u5SnUtOtCSojRizlp7C9PXf70rjx4Y7Bo1HVqr2Hm+wJfoN2ehARWCU9ZnT4cDaEn/3qj1s+ynys9BeldtKCeMOFfY8pKRC3kFA3a6sdOcNYSq7Vhn65Yyd74rjFm+IuH8bm2gETFLpdiHiCx+VtYKlPRM4IIf5pAn3nK/MbXq3NZAgzmbwOJGUybF4mg2PG9z9fCHW/tXaQFFw4gMbYxA9YZBstgx6lc+qfSwTbB7x7XPV50oNnNcEDLrSLU4JNs5JfEBldkFJeBDlbl4ppRt3iTe35apGkBW4cVV0ohbvO98Td2mgllMpCpBdpHT8AvhrrCe82o9341Pz1r+8DTn74wxFfOzrVg16L0JwIjG/U2s6Jya0t8L2xaOkK0EZ5IF/JRnHmkT83/O3ztEjiAIkT3TxqQI1Qso45dx4AReDxZ3LGLhLWnORzeZlDWy2sXCuyfGTdknWtiVAdCicFoLaWtbat+XVBIZ/UntsLUqUEOGoCba83YFuUEL9TyKosyDgy5saSsOLJOlgGmWVgDsezMyNA3AMjoM1vmCwZ/7kQKGNjN+rYTkVwvbyi9KPkqDwKc6bAT0MY2pnFxe/fiJ2OdUCW2HPuCaWGBxcIzsZxotGMcR8dA3BshbZ6LqJTUqSuAM4HW2fmtrXvnn7siu3/OsjR3lV335B2+equM48ZlCosupNxfimBeSeOwmcY4wZRTQB0ZyG3YB0FgrFF2roFe415pWLJtl1douwPjE1DylOpQvV7BuynEO/crPzSB6UouMpYLZkAE0bRRqfpe9yXx3tC3QdIck+Y+07p8i1/6jwhD+oiHTsIAC3D+19SnE7PJqJIR+EdgY3fTyvvUSFUtbEgOOPamOzslrD19mJ+9HEo6Na2yE7su7Ix7HKoAxROCueG95/Gmf9jInrTaDsHEes5Z2cyYUc7osGI3BDRcyY2bwB3g7nHz8matj+ULWupS6AaKyr8nn0LHgEk+2FTfMuAhoYo6debzuh7ryxI11odLQUD7youhzOE8USGA8d3nGMvGQ0rGcNKqdRlgHZYqIO7SlZseWj/YPaf8RJ3n9yvBy9U8xWDsxGZBbK7Ym1fDox7NCWpFJn8iVKqBgD2GmP/GsbBLPT4t7NR8FD5gOa3YR7Q7mHHzzQUm7KV9dclPt9aUzmMSfg+Wfd0GuVUFHKYA1dknXtLm+ieRHwh+E0c8XzGZKk1hhuAZTuilourVrfu2d//D5qH3xsEauBR/WpMjN8SQpyNgFVEiORoQWT0HMZ5inG8SAox1BlSQObxMMKFR63Z/FbL6VWTjHNbBCfkDitKKutnt9ZXncEEfVMiXC1Axpbsm1rrBeQgkr68HAEvBHSOADY7a5ZrGzx9FDWvwtUdA31Amx0qwHecPGOHAB8kqntTbE9DbqcQyW8gk5Zz8X4Q5l4icIslZ2cw637AldJ7ouy5KeVPtS4uA2IcOW+KnZjtS/6aiXOcMXzEGljFgcZwoUYhw4HGRszy4GUif5Yf+++sFRuaF64Geyjb/LQbRxLuGUJHTsa9J/Y9yUlvMkc22uPQx8XELcDMwEYvKu4PCwB6EUZPKSUXITgKtRsDyK9OAWvkzq5Ex8ZxhClCMhM6atSAixyEj5e++8HaREkC4J3R9pAR4NOAD3CTRPWk4YJTKo4lg0MYlow3zoyVgjMX2zU5sktyNnzGl2KWZMzGUXyNYvxKIfDrSvJTtQaLiC8CRM+DodXp9Vu3J5PaqWbnkfDJrv5Zgfev0hH/aud9fOrsqu7TR6G4VqA/AaSo0M7+PcjmZkrhubRk3+WcnZZz0Vbj2ucSqBllGxqbEvnmAbAJH2fuwwpU/wvwPvjkSL8HgBLb+lFlZU+Lbghn8pI4hgWOGPcFjrXOPB8IWP2biZt3ZjJAyS59nizyuYD3lz2BHwvA+5dVn0wKhjqLnAn4ywfbNr63EDqGKC8pL2/AXfA7e1dfZAkKgTHOiLX2/GjdwsPd9k/q4rwBd2YF2t6n8g4i2QZgERhLH9u48cGuZ4cTkg713bwDN/etnGsdvM0ckiCsKd2++fJuCZz49OsA/OTy497SzL7ICa0HYlzxtvU1nVngsNzgC1c4Gbpby6oGQ5H/i71xdhUS00WeGr43G133WHP9P7rd0CUnYnvPqmmsUJy1O4o+5ICmxFP9ogCWlmxfnySu7uUScwH4yPLqpRaoyTHhAzkjiTkCKju6acN53Qo4ga0p69+rV1HBqiAIH7eMj0B0Rjq3knvyqlxOn/5Yc/2OfLRFvlwC3+3dOz2QF8/UpJdzpiY7Z8CSnS05DM2Svra8qSnIhx/nC7hjqLdCRcrr6fUp8rz5Dgy1x8HFueat2yoBkitOXlZegTuzBdtVXnW9BmfXNdX/djmAy0crHOwSmhcFOov81605X8XzqnC+oI5IljgSsJ1/JRypV+XnPV+1RH50PHSVfwMEiAc3VWhqXgAAAABJRU5ErkJggg==";
function xa(t) {
  const { shortAccount: n, connected: s } = I(),
    a = C(dt),
    r = j(Se),
    { available: o } = C(Y("RUBIX")),
    { available: l } = C(Y("RUBIX_LEGACY")),
    { available: y } = C(Y("RUBIX")),
    c = i.exports.useMemo(
      () => (a == null ? void 0 : a.connectorId) === F.Injected,
      [a == null ? void 0 : a.connectorId]
    ),
    u = [
      {
        label: "$RUBIX Balance",
        amount: o,
        address: G.RUBIX,
        symbol: "$RUBIX",
        decimals: 18,
        logo: "",
      },
      {
        label: "$RUBIXv1 Balance",
        amount: l,
        address: G.RUBIX_LEGACY,
        symbol: "$RUBIXV1",
        decimals: 18,
        logo: ce,
      },
      {
        label: "$RUBIXv2 Balance",
        amount: y,
        address: G.RUBIX,
        symbol: "$RUBIXV2",
        decimals: 18,
        logo: ce,
      },
    ];
  return e.createElement(
    m,
    w(
      {
        display: "flex",
        flexDirection: "column",
        whiteSpace: "nowrap",
        textAlign: "right",
      },
      t
    ),
    e.createElement(
      ee,
      {
        variant: "text",
        size: "small",
        sx: { px: 1.5, py: 0.5, borderRadius: 1, justifyContent: "flex-end" },
        onClick: () => r(!0),
      },
      e.createElement(m, {
        component: "i",
        display: "inline-block",
        mr: "12px",
        height: "12px",
        width: "12px",
        borderRadius: "50%",
        bgcolor: s ? "#52CCB8" : "gray",
      }),
      n
    ),
    u.map(
      ({ label: b, amount: f, address: p, symbol: d, decimals: g, logo: v }) =>
        e.createElement(
          m,
          { key: b, sx: { pr: 1.5, fontSize: 12, fontWeight: 500 } },
          T(f),
          e.createElement(
            m,
            {
              component: "span",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "flex-end",
              width: c ? 150 : 125,
              lineHeight: "24px",
              fontSize: "12px",
              color: " rgba(255, 255, 255, 0.6)",
              sx: { textTransform: "uppercase" },
            },
            b,
            a && c
              ? e.createElement(on, {
                  component: "span",
                  variant: "circular",
                  src: a.logo,
                  alt: a.label,
                  sx: {
                    ml: 0.5,
                    display: "inline-block",
                    width: 18,
                    height: 18,
                    cursor: "pointer",
                  },
                  onClick: () => {
                    c && ia(p, d, g, v);
                  },
                })
              : null
          )
        )
    )
  );
}
function Fe(t, n, s = 1e4, a = 0) {
  if (Reflect.has(window, t)) n();
  else {
    if (a > s) return;
    console.log("wait", t),
      setTimeout(function () {
        Fe(t, n, s, a + 100);
      }, 100);
  }
}
function ae(t) {
  var s;
  console.log("Error:", t);
  let n = "";
  return (
    (t == null ? void 0 : t.code) === 4001
      ? (n = t == null ? void 0 : t.message)
      : (n =
          ((s = t == null ? void 0 : t.error) == null ? void 0 : s.reason) ||
          (t == null ? void 0 : t.reason)),
    n != null ? n : "Operation Failed"
  );
}
const ha = P("span")``,
  wa = P("img")``,
  Ea = P(ye)({
    ".MuiDialog-paper": { padding: "24px 32px 32px", borderRadius: "24px" },
  }),
  xt = P(ln)({
    padding: "8px",
    marginTop: "24px",
    borderRadius: "6px",
    background: "rgba(217, 230, 255, 0.25)",
    ":hover": { background: "rgba(217, 230, 255, 0.5)" },
    ".Mui-selected": {
      color: "rgba(255, 255, 255, 0.3)",
      background: "rgba(52,129,183,0.1)",
      boxShadow: "none",
    },
  }),
  ht = P(cn)({
    paddingRight: "48px",
    whiteSpace: "nowrap",
    ".MuiListItemText-primary": {
      textAlign: "center",
      fontWeight: 500,
      textTransform: "uppercase",
    },
  });
function va(t) {
  const { connectWallet: n, connected: s, deactivate: a } = I(),
    [r, o] = fe(mt),
    [l, y] = fe(Se),
    [c, u] = fe(dt),
    b = i.exports.useCallback(() => y(!1), [y]),
    f = i.exports.useCallback(
      async (d) => {
        d.key === (c == null ? void 0 : c.key) && s
          ? y(!1)
          : (a(),
            u(d),
            setTimeout(() => {
              const g = ct[d.connectorId];
              Fe(g, () => {
                n(d);
              });
            }, 50));
      },
      [n, s, a, c == null ? void 0 : c.key, u, y]
    ),
    p = i.exports.useCallback(() => {
      a(), u(null), y(!1), o("");
    }, [a, u, y, o]);
  return (
    i.exports.useEffect(() => {
      s && y(!1);
    }, [s, y]),
    i.exports.useEffect(() => {
      if (r) {
        const d = ot.find((g) => g.key === r);
        if (d) {
          u(d);
          const g = ct[d.connectorId];
          Fe(g, () => {
            n(d);
          });
        }
      }
    }, [n, r, u]),
    e.createElement(
      Ea,
      w({ open: l, onClose: b }, t),
      e.createElement(
        be,
        {
          sx: {
            p: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          },
        },
        e.createElement(
          ha,
          {
            sx: {
              fontSize: "20px",
              fontWeight: 600,
              textTransform: "uppercase",
              lineHeight: "28px",
            },
          },
          "Connect wallet"
        ),
        e.createElement(
          ge,
          { color: "inherit", onClick: b, sx: { p: "4px" }, size: "large" },
          e.createElement(xe, null)
        )
      ),
      e.createElement(
        he,
        { sx: { p: 0 } },
        e.createElement(
          un,
          { component: "nav", disablePadding: !0 },
          ot.map((d) =>
            e.createElement(
              xt,
              {
                key: d.key,
                selected: s && (c == null ? void 0 : c.key) === d.key,
                onClick: () => f(d),
              },
              e.createElement(
                Ze,
                null,
                e.createElement(wa, {
                  src: d.logo,
                  alt: d.label,
                  sx: { width: "32px", height: "32px" },
                })
              ),
              e.createElement(ht, { primary: d.label })
            )
          ),
          s &&
            e.createElement(
              xt,
              { key: "disconnect", onClick: () => p() },
              e.createElement(
                Ze,
                null,
                e.createElement(pn, {
                  color: "error",
                  sx: { width: "32px", height: "32px" },
                })
              ),
              e.createElement(ht, { primary: "Disconnect" })
            )
        )
      )
    )
  );
}
function ka() {
  const { connected: t } = I();
  return e.createElement(
    e.Fragment,
    null,
    e.createElement(
      m,
      {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: 1,
        borderColor: "divider",
        flexWrap: { xs: "wrap", sm: "nowrap" },
      },
      e.createElement(
        m,
        { p: { xs: 1, md: 2 } },
        e.createElement(
          we,
          { mdDown: !0 },
          e.createElement(m, {
            component: "img",
            src: ya,
            alt: "RUBIX Global",
            height: 30,
          })
        ),
        e.createElement(
          we,
          { mdUp: !0 },
          e.createElement(m, {
            component: "img",
            src: fa,
            alt: "RUBIX Global",
            height: 22,
          })
        )
      ),
      e.createElement(
        m,
        { flexGrow: 1, alignSelf: "stretch", textAlign: "center" },
        e.createElement(ga, null)
      ),
      e.createElement(
        m,
        {
          p: { xs: 1, md: 2 },
          width: { xs: "100%", sm: "auto" },
          minHeight: 40,
          display: "flex",
          justifyContent: { xs: "center", sm: "initial" },
        },
        t
          ? e.createElement(e.Fragment, null, e.createElement(xa, null))
          : e.createElement(He, {
              variant: "outlined",
              sx: { fontSize: "14px", px: "18px" },
            })
      )
    ),
    e.createElement(va, null)
  );
}
function Ta(r) {
  var o = r,
    { href: t = "/", logo: n, children: s } = o,
    a = L(o, ["href", "logo", "children"]);
  return e.createElement(
    Xe,
    {
      href: t,
      target: "_blank",
      color: "primary",
      underline: "none",
      display: "block",
      width: "100%",
    },
    e.createElement(
      ee,
      w(
        {
          variant: "text",
          fullWidth: !0,
          size: "small",
          sx: {
            color: "text.primary",
            height: "32px",
            borderRadius: "16px",
            bgcolor: "rgba(217, 230, 255, 0.1)",
            boxShadow: "none",
            ":hover": { bgcolor: "rgba(217, 230, 255, 0.25)" },
          },
        },
        a
      ),
      n
        ? e.createElement(m, {
            component: "img",
            src: n,
            alt: "logo",
            flex: "0",
            width: "18px",
            height: "18px",
          })
        : null,
      e.createElement(
        x,
        {
          component: "span",
          variant: "caption",
          flex: "1",
          px: "10px",
          fontSize: "inherit",
          textAlign: "left",
        },
        s
      ),
      e.createElement(dn, { sx: { flex: "0 0 18px", color: "#FFF" } })
    )
  );
}
const Ca = P(mn)({
  position: "absolute",
  zIndex: 1,
  fontSize: "22px",
  textAlign: "center",
  backgroundColor: "rgba(0, 0, 0, 0.85)",
});
function Sa(s) {
  var a = s,
    { children: t } = a,
    n = L(a, ["children"]);
  return e.createElement(
    Ca,
    w({ open: !0 }, n),
    e.createElement(
      m,
      null,
      e.createElement(
        x,
        { variant: "h6", display: "block" },
        "This pool will go live after ",
        e.createElement("br", null),
        "the Pancakeswap v2 ",
        e.createElement("br", null),
        "Migration"
      )
    )
  );
}
const Ba = M(365 * 24 * 3600),
  wt = (t, n, s) => {
    const a = Ba.multipliedBy(t);
    return s.eq(0) ? 0 : a.multipliedBy(n).multipliedBy(100).div(s).toNumber();
  },
  Aa = {
    paused: !1,
    inflationSpeed: S,
    totalStaked: S,
    virtualTotalStaked: S,
    lockDownSeconds: S,
    tierList: [],
    staked: S,
    earned: S,
    withdrawable: S,
    pendingUnstakes: [],
  },
  Ie = V(
    ({ state: t = Aa }) => je(t),
    (t, n) => t.pool === n.pool
  ),
  U = V((t) =>
    _(
      (n) => n(Ie({ pool: t })),
      (n, s, a) => {
        s(Ie({ pool: t }), (r) => w(w({}, r), a));
      }
    )
  ),
  Pa = V((t) =>
    _(null, (n, s) => {
      s(Ie({ pool: t }), Ve);
    })
  ),
  Ma = V((t) =>
    _((n) => {
      const { staked: s, tierList: a } = n(U(t));
      return {
        userTier: a.find(({ min: r }) => s.gte(r)),
        max: a[0],
        min: a[a.length - 1],
        hasStaked: s.toNumber() > 0,
      };
    })
  );
function Et({ tier: t, textStyle: n }) {
  return e.createElement(
    m,
    { display: "inline-flex", alignItems: "center" },
    e.createElement("img", { src: t.icon, alt: "" }),
    e.createElement(
      x,
      { component: "span", sx: { ml: "10px" }, style: n },
      t.name
    )
  );
}
var Ha = "/assets/info.cd419bb2.svg",
  vt = yn();
function Fa({ pool: t }) {
  const { connected: n } = I(),
    { userTier: s, max: a, min: r, hasStaked: o } = C(Ma(t)),
    { totalStaked: l, virtualTotalStaked: y, inflationSpeed: c } = C(U(t)),
    u = (f) => (f ? wt(c, f == null ? void 0 : f.weight, y) : 0),
    b = i.exports.useMemo(() => {
      const f = [
        {
          label: "APY",
          value: e.createElement(
            "div",
            { style: { display: "flex", alignItems: "center" } },
            (function () {
              if (t == "RUBIX_V1") return "- -";
              if (n && o) {
                const p = u(s);
                return p ? Be(p) + "%" : "- -";
              } else {
                const p = u(r),
                  d = u(a);
                return `${Be(p)}% ~ ${Be(d)}%`;
              }
            })(),
            t != "RUBIX_V1" &&
              e.createElement("img", {
                src: Ha,
                onClick: () => vt.emit(),
                style: { cursor: "pointer", marginLeft: 4, width: 16 },
              })
          ),
        },
        { label: "Total Staked", value: `${T(l)} RUBIX` },
      ];
      return (
        n &&
          f.push({
            label: "Current Tier",
            value: s ? e.createElement(Et, { tier: s }) : "n/a",
          }),
        f
      );
    }, [n, s, l]);
  return e.createElement(
    e.Fragment,
    null,
    b.map(({ label: f, value: p }) =>
      e.createElement(
        m,
        { key: f, mb: 3, display: "flex", justifyContent: "space-between" },
        e.createElement(
          x,
          {
            variant: "body1",
            color: "rgba(255, 255, 255, 0.6)",
            fontSize: "14px",
            fontWeight: 500,
            sx: { textTransform: "uppercase" },
          },
          f
        ),
        e.createElement(
          x,
          {
            component: "div",
            variant: "body1",
            color: "#FFF",
            fontSize: "16px",
            fontWeight: 500,
          },
          p
        )
      )
    )
  );
}
var kt = [
  {
    inputs: [
      { internalType: "address", name: "_owner", type: "address" },
      { internalType: "address", name: "_rewardsToken", type: "address" },
      { internalType: "address", name: "_stakingToken", type: "address" },
    ],
    payable: !1,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: !1,
    inputs: [
      { indexed: !0, internalType: "address", name: "user", type: "address" },
      { indexed: !1, internalType: "uint256", name: "amount", type: "uint256" },
      { indexed: !1, internalType: "uint256", name: "time", type: "uint256" },
    ],
    name: "ApplyWithdraw",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      { indexed: !0, internalType: "address", name: "user", type: "address" },
      { indexed: !1, internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "Claimed",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "uint256",
        name: "newSpeed",
        type: "uint256",
      },
    ],
    name: "InflationSpeedUpdated",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "uint256",
        name: "newLockDownDuration",
        type: "uint256",
      },
    ],
    name: "LockDownDurationUpdated",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: !1,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerChanged",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !1,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerNominated",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      { indexed: !1, internalType: "bool", name: "isPaused", type: "bool" },
    ],
    name: "PauseChanged",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      { indexed: !1, internalType: "string", name: "name", type: "string" },
      { indexed: !1, internalType: "uint256", name: "min", type: "uint256" },
      { indexed: !1, internalType: "uint256", name: "max", type: "uint256" },
      { indexed: !1, internalType: "uint256", name: "weight", type: "uint256" },
    ],
    name: "SetLevel",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      { indexed: !0, internalType: "address", name: "user", type: "address" },
      { indexed: !1, internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      { indexed: !0, internalType: "address", name: "user", type: "address" },
      { indexed: !1, internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    constant: !1,
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: !1,
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "applyWithdraw",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: !0,
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: !1,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: !1,
    inputs: [],
    name: "claimReward",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: !0,
    inputs: [],
    name: "feeCollector",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: !1,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: !0,
    inputs: [],
    name: "feeScale",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: !1,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: !0,
    inputs: [{ internalType: "string", name: "lv", type: "string" }],
    name: "getLevelDetail",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "min", type: "uint256" },
          { internalType: "uint256", name: "max", type: "uint256" },
          { internalType: "uint256", name: "weight", type: "uint256" },
        ],
        internalType: "struct RUBIXStaking.RateLevel",
        name: "",
        type: "tuple",
      },
    ],
    payable: !1,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: !0,
    inputs: [],
    name: "getLevelInfos",
    outputs: [{ internalType: "string[]", name: "", type: "string[]" }],
    payable: !1,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: !0,
    inputs: [{ internalType: "string", name: "lv", type: "string" }],
    name: "getLevelStakes",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: !1,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: !0,
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "getUserApplication",
    outputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256[]", name: "", type: "uint256[]" },
      { internalType: "uint256[]", name: "", type: "uint256[]" },
    ],
    payable: !1,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: !0,
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "getUserRewards",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: !1,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: !0,
    inputs: [],
    name: "globalInitialIndex",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: !1,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: !0,
    inputs: [],
    name: "inflationSpeed",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: !1,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: !0,
    inputs: [],
    name: "lastPauseTime",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: !1,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: !0,
    inputs: [],
    name: "lockDownDuration",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: !1,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: !1,
    inputs: [{ internalType: "address", name: "_owner", type: "address" }],
    name: "nominateNewOwner",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: !0,
    inputs: [],
    name: "nominatedOwner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: !1,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: !0,
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: !1,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: !0,
    inputs: [],
    name: "paused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: !1,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: !0,
    inputs: [],
    name: "rewardProvider",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: !1,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: !0,
    inputs: [],
    name: "rewardsToken",
    outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
    payable: !1,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: !1,
    inputs: [
      { internalType: "address", name: "_feeCollector", type: "address" },
    ],
    name: "setFeeCollector",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: !1,
    inputs: [{ internalType: "uint256", name: "speed", type: "uint256" }],
    name: "setInflationSpeed",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: !1,
    inputs: [
      { internalType: "string", name: "lv", type: "string" },
      { internalType: "uint256", name: "min", type: "uint256" },
      { internalType: "uint256", name: "max", type: "uint256" },
      { internalType: "uint256", name: "weight", type: "uint256" },
    ],
    name: "setLevel",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: !1,
    inputs: [
      { internalType: "uint256", name: "_lockdownDuration", type: "uint256" },
    ],
    name: "setLockDownDuration",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: !1,
    inputs: [{ internalType: "bool", name: "_paused", type: "bool" }],
    name: "setPaused",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: !1,
    inputs: [
      { internalType: "address", name: "_rewardProvider", type: "address" },
    ],
    name: "setRewardProvider",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: !1,
    inputs: [{ internalType: "uint256", name: "_rate", type: "uint256" }],
    name: "setWithdrawRate",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: !1,
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "stake",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: !0,
    inputs: [],
    name: "stakingToken",
    outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
    payable: !1,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: !0,
    inputs: [],
    name: "totalStakes",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: !1,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: !0,
    inputs: [],
    name: "virtualTotalStakes",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: !1,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: !1,
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "withdraw",
    outputs: [],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: !0,
    inputs: [],
    name: "withdrawRate",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: !1,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: !0,
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "withdrawableAmount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: !1,
    stateMutability: "view",
    type: "function",
  },
];
const Re = (t, n, s = !1) => {
    const { provider: a } = I(),
      [r, o] = i.exports.useState();
    return (
      i.exports.useEffect(() => {
        t && a && o(s ? new Ee(t, n, a.getSigner()) : new Ee(t, n, a));
      }, [t, n, a, s]),
      r
    );
  },
  Ia = (t, n = !1) => Re(t, ut, n);
function Le(t, n = !0) {
  return Re(Te[t], kt, n);
}
function ue() {
  const t = fn(),
    n = i.exports.useCallback(() => t.invalidateQueries([aa]), [t]),
    s = i.exports.useCallback(() => t.invalidateQueries([le]), [t]),
    a = i.exports.useCallback(() => t.invalidateQueries([le, pt]), [t]);
  return {
    refresh: i.exports.useCallback(() => {
      n(), s();
    }, [n, s]),
    refreshContract: s,
    refreshToken: a,
    refreshExternal: n,
  };
}
const Ra = M(0.01);
function La(s) {
  var a = s,
    { pool: t } = a,
    n = L(a, ["pool"]);
  const { enqueueSnackbar: r } = X(),
    [o, l] = i.exports.useState(!1),
    { refreshContract: y } = ue(),
    { earned: c } = C(U(t)),
    u = Le(t),
    b = i.exports.useMemo(() => c.toNumber(), [c]),
    f = i.exports.useCallback(async () => {
      if (u) {
        try {
          l(!0);
          const d = await u.claimReward({ gasLimit: Ce });
          r(
            e.createElement(
              e.Fragment,
              null,
              "Transaction has been sent to blockchain,",
              e.createElement("br", null),
              "waiting for confirmation..."
            ),
            { variant: "info" }
          );
          const g = await d.wait(1);
          console.log("Harvest:", g),
            r(`Successfully harvested ${T(c)} RUBIX`, { variant: "success" }),
            y();
        } catch (d) {
          r(ae(d), { variant: "error" });
        }
        l(!1);
      }
    }, [c, r, y, u]),
    p = i.exports.useMemo(() => c.lt(Ra), [c]);
  return e.createElement(
    m,
    w({ display: "flex", alignItems: "center" }, n),
    e.createElement(
      m,
      { flex: "1", overflow: "hidden" },
      e.createElement(
        x,
        {
          variant: "caption",
          color: "textSecondary",
          fontSize: "14px",
          fontWeight: 500,
        },
        "RUBIX EARNED"
      ),
      e.createElement(
        bn,
        {
          start: 0,
          end: b,
          delay: 0.1,
          duration: b === 0 ? 0 : 2,
          decimals: 2,
          preserveValue: !0,
        },
        ({ countUpRef: d }) =>
          e.createElement(x, {
            ref: d,
            variant: "body1",
            pr: "8px",
            fontSize: "22px",
            fontWeight: 500,
            textOverflow: "ellipsis",
            overflow: "hidden",
          })
      )
    ),
    e.createElement(
      Z,
      {
        variant: p ? void 0 : "contained",
        loading: o,
        size: "large",
        disabled: p,
        onClick: f,
      },
      "Harvest"
    )
  );
}
function Tt(t, n) {
  const { account: s } = I(),
    [a, r] = i.exports.useState(!1),
    { enqueueSnackbar: o } = X(),
    [l, y] = i.exports.useState(S),
    c = Ia(t, !0),
    u = i.exports.useCallback(async () => {
      if (s && c) {
        r(!0);
        const p = await c.allowance(s, n);
        console.log("allowance", p.toString(), {
          account: s,
          spenderAddress: n,
        }),
          y(O(p)),
          r(!1);
      }
    }, [s, c, n, y]),
    b = i.exports.useCallback(async () => {
      if (s && c) {
        r(!0);
        try {
          const p = await c.approve(n, ve);
          o(
            e.createElement(
              e.Fragment,
              null,
              "Approval request has been sent to blockchain,",
              e.createElement("br", null),
              "waiting for confirmation..."
            ),
            { variant: "info" }
          ),
            await p.wait(1),
            y(O(ve));
        } catch (p) {
          o(ae(p), { variant: "error" });
        }
        r(!1);
      }
    }, [s, c, n, o]),
    f = i.exports.useCallback(
      async (p) => {
        p.lte(l) || (await b());
      },
      [l, b]
    );
  return (
    i.exports.useEffect(() => {
      u();
    }, [u]),
    {
      loading: a,
      needApprove: l.lte(0),
      allowance: l,
      handleApprove: b,
      checkApprove: f,
      check_approve: async function p(d) {
        const g = O(await c.allowance(s, n));
        return (
          console.log("checking allowance", g.toString()),
          d.lt(g)
            ? (console.log("amount < allowance"), d)
            : d.eq(g)
            ? (console.log("amount = allowance    ====> -1"),
              d.minus(new oe("1e-18")))
            : (console.log("amount > allowance    ====> recurse"),
              await (await c.approve(n, ve)).wait(),
              console.log("approved, recurse"),
              p(d))
        );
      },
    }
  );
}
const Da = P(ee)({
  "&.MuiButton-text": {
    fontWeight: 500,
    color: "rgba(255, 255, 255, 0.8)",
    "&:hover": { color: "#fff", background: "transparent" },
  },
});
function Ct({
  tokenName: t = "RUBIX",
  input: n,
  onInput: s,
  amount: a,
  max: r,
  lockDownSeconds: o,
  btnLabel: l,
  btnBottomLeft: y,
  logo: c,
  loading: u = !1,
  disabled: b = !1,
  onSubmit: f,
}) {
  const [p, d] = i.exports.useState(!1),
    g = i.exports.useRef(),
    v = i.exports.useCallback(() => {
      a.eq(r) || ((g.current = !0), s(T(r), !0));
    }, [a, r, s]),
    B = i.exports.useMemo(
      () => (o ? gn(o.toNumber() * 1e3, { verbose: !0 }) : null),
      [o]
    );
  return e.createElement(
    m,
    null,
    e.createElement(
      m,
      {
        display: "flex",
        alignItems: "center",
        borderRadius: "10px",
        border: "1px solid",
        borderColor: p ? "#FFF" : "rgba(255, 255, 255, 0.15)",
        overflow: "hidden",
        sx: { transition: "border 0.25s" },
      },
      e.createElement(
        m,
        {
          component: "span",
          p: "6px 12px",
          display: "inline-flex",
          alignItems: "center",
        },
        c
          ? e.createElement(m, {
              component: "img",
              src: c,
              alt: "",
              height: "22px",
              mr: "8px",
            })
          : null,
        e.createElement(x, null, t)
      ),
      e.createElement(xn, {
        value: n,
        onValueChange: (k) => {
          s(k.value, g.current), (g.current = !1);
        },
        allowNegative: !1,
        thousandSeparator: !0,
        isNumericString: !0,
        placeholder: "0.00",
        customInput: hn,
        sx: {
          flex: 1,
          p: "6px 12px",
          borderLeft: "1px solid rgba(255, 255, 255, 0.15)",
          fontSize: "22px",
        },
        onFocus: () => d(!0),
        onBlur: () => d(!1),
        inputProps: { inputMode: "decimal" },
      }),
      e.createElement(
        Da,
        {
          variant: "text",
          disableRipple: !0,
          disableTouchRipple: !0,
          onClick: v,
        },
        "Max"
      )
    ),
    e.createElement(
      m,
      { display: "flex", justifyContent: "space-between", mb: "20px" },
      e.createElement(
        x,
        {
          variant: "overline",
          color: "textSecondary",
          fontSize: "12px",
          fontWeight: 500,
        },
        y || (B && `Hold Period: ${B}`)
      ),
      e.createElement(
        x,
        {
          variant: "overline",
          color: a.gt(r) ? "error" : "primary",
          fontSize: "12px",
          fontWeight: 500,
        },
        T(r),
        " Available"
      )
    ),
    e.createElement(
      Z,
      {
        size: "large",
        variant: "contained",
        fullWidth: !0,
        disabled: b || a.lte(0) || a.gt(r),
        onClick: f,
        loading: u,
      },
      l
    )
  );
}
const K = P(Ke)({
  fontSize: "16px",
  "&.MuiTableCell-head": {
    fontSize: "14px",
    lineHeight: "24px",
    borderBottom: "none",
    color: "rgba(255, 255, 255, 0.6)",
  },
  "&.MuiTableCell-body": { borderBottom: "none", whiteSpace: "nowrap" },
});
function Oa(s) {
  var a = s,
    { pool: t } = a,
    n = L(a, ["pool"]);
  const { pendingUnstakes: r } = C(U(t));
  return e.createElement(
    m,
    w({ width: "100%", overflow: "auto" }, n),
    e.createElement(
      Qe,
      null,
      e.createElement(
        Je,
        null,
        e.createElement(
          ie,
          null,
          e.createElement(K, null, "Time"),
          e.createElement(K, { align: "center" }, "Date"),
          e.createElement(K, { align: "right" }, "Amount")
        )
      ),
      e.createElement(
        $e,
        null,
        r.map(({ timestamp: o, amount: l }) =>
          e.createElement(
            ie,
            {
              key: o,
              sx: {
                ":nth-of-type(odd)": {
                  background: "rgba(217, 230, 255, 0.05)",
                },
              },
            },
            e.createElement(
              K,
              null,
              wn(et(o), { includeSeconds: !0, addSuffix: !0 })
            ),
            e.createElement(
              K,
              { align: "center" },
              En(et(o), "yyyy-MM-dd HH:mm:ss")
            ),
            e.createElement(
              K,
              { align: "right" },
              T(l),
              " ",
              e.createElement(
                x,
                { component: "span", color: "textSecondary" },
                "RUBIX"
              )
            )
          )
        )
      )
    )
  );
}
function Wa(s) {
  var a = s,
    { pool: t } = a,
    n = L(a, ["pool"]);
  const { pendingUnstakes: r } = C(U(t)),
    [o, l] = i.exports.useState(!1),
    y = i.exports.useCallback(() => l(!1), [l]);
  return r.length === 0
    ? null
    : e.createElement(
        e.Fragment,
        null,
        e.createElement(
          m,
          {
            component: "a",
            sx: { fontSize: 12, textTransform: "none" },
            className: "gradientText gradientText--underline",
            onClick: () => l(!0),
          },
          "Unstaking History >>"
        ),
        e.createElement(
          ye,
          w(
            {
              open: o,
              onClose: y,
              sx: { ".MuiDialog-paper": { borderRadius: "24px" } },
            },
            n
          ),
          e.createElement(
            be,
            {
              sx: {
                pb: 0,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              },
            },
            e.createElement(
              x,
              { fontSize: { xs: "20px", md: "30px" }, fontWeight: "600" },
              "Unstaking history (RUBIX V1)"
            ),
            e.createElement(
              ge,
              {
                color: "inherit",
                onClick: y,
                sx: { p: "4px", fontWeight: 300 },
                size: "large",
              },
              e.createElement(xe, null)
            )
          ),
          e.createElement(
            he,
            { sx: {} },
            e.createElement(Oa, { pool: t, width: "900px", maxWidth: "100%" })
          )
        )
      );
}
function Ua({ pool: t, logo: n }) {
  const [s, a] = i.exports.useState(!1),
    [r, o] = i.exports.useState(),
    [l, y] = i.exports.useState(!1),
    { enqueueSnackbar: c } = X(),
    { refreshContract: u } = ue(),
    b = Le(t),
    { withdrawable: f } = C(U(t)),
    p = i.exports.useMemo(
      () => (l ? f : M((r || "0").replace(/[^0-9.]/g, ""))),
      [l, f, r]
    ),
    d = i.exports.useCallback((k, E = !1) => {
      y(E), o(k);
    }, []),
    g = i.exports.useCallback(() => {
      o("0");
    }, []),
    v = i.exports.useCallback(async () => {
      const k = await b.withdraw(ne(p));
      c(
        e.createElement(
          e.Fragment,
          null,
          "Transaction has been sent to blockchain,",
          e.createElement("br", null),
          "waiting for confirmation..."
        ),
        { variant: "info" }
      );
      const E = await k.wait(1);
      console.log("Unstake:", E),
        c(`Successfully unstaked ${T(p)} RUBIX`, { variant: "success" }),
        u(),
        g();
    }, [b, p, c, u, g]),
    B = i.exports.useCallback(async () => {
      try {
        b && p.gt(0) && (a(!0), await v());
      } catch (k) {
        c(ae(k), { variant: "error" });
      }
      a(!1);
    }, [b, p, v, c]);
  return e.createElement(
    m,
    { mt: 3, position: "relative" },
    e.createElement(Ct, {
      logo: n,
      input: r,
      onInput: d,
      amount: p,
      max: f,
      lockDownSeconds: null,
      btnLabel: "Withdraw To Wallet",
      btnBottomLeft: e.createElement(Wa, { pool: t }),
      onSubmit: B,
      loading: s,
    })
  );
}
const Na = P(ee)(({ theme: { breakpoints: t } }) => ({
    width: "50px",
    minWidth: "50px",
    fontSize: "16px",
    fontWeight: 500,
    color: "text.primary",
    boxShadow: "none",
    lineHeight: 1.5,
    [t.down("sm")]: { width: "42px", minWidth: "42px" },
    "&.MuiButton-outlined": {
      border: "2px solid rgba(217, 230, 255, 0.25)",
      "&:hover": {
        background: "rgba(217, 230, 255, 0.25)",
        borderColor: "rgba(217, 230, 255, 0.25)",
      },
    },
    "&.MuiButton-outlinedPrimary": {
      background: "rgba(217, 230, 255, 0.25)",
      "&:hover": { borderColor: "rgba(217, 230, 255, 0.25)" },
    },
  })),
  za = {
    RUBIX_V2: {
      Stake:
        "There is a 7-day unstaking holding period before funds can be withdrawn to your wallet.",
      Unstake: e.createElement(
        e.Fragment,
        null,
        "Unstaking is subject to a 7-day hold. Once the hold has been completed, you may withdraw your RUBIX back to your wallet.",
        e.createElement("br", null),
        e.createElement("br", null),
        "Note: Unstaking will automatically harvest your rewards."
      ),
    },
    RUBIX_V1: {
      Stake: "",
      Unstake: e.createElement(
        e.Fragment,
        null,
        "The unstaking hold period has been removed for this pool. You may immediately withdraw your RUBIX to your wallet below after unstaking first.",
        e.createElement("br", null),
        e.createElement("br", null),
        "Note: Unstaking will automatically harvest your rewards."
      ),
    },
  },
  St = [
    { key: "Stake", label: "+", disabled: !1 },
    { key: "Unstake", label: "-", disabled: !1 },
  ];
function _a({ pool: t, token: n, logo: s, disabledActions: a }) {
  var We;
  const [r, o] = i.exports.useState(!1),
    [l, y] = i.exports.useState(),
    [c, u] = i.exports.useState(),
    [b, f] = i.exports.useState(!1),
    { enqueueSnackbar: p } = X(),
    d = i.exports.useMemo(
      () =>
        a
          ? St.map((J) => {
              var Ue = J,
                { key: h } = Ue,
                H = L(Ue, ["key"]);
              return $(w({}, H), { key: h, disabled: a.indexOf(h) > -1 });
            })
          : St,
      [a]
    ),
    { refreshContract: g } = ue(),
    v = Le(t),
    {
      loading: B,
      needApprove: k,
      handleApprove: E,
      check_approve: z,
    } = Tt(G[n], Te[t]),
    { staked: N, lockDownSeconds: pe, paused: R } = C(U(t)),
    { available: q } = C(Y(n)),
    Q = i.exports.useMemo(
      () => (l === "Stake" ? q : l === "Unstake" ? N : S),
      [l, q, N]
    ),
    A = i.exports.useMemo(
      () => (b ? Q : M((c || "0").replace(/[^0-9.]/g, ""))),
      [c, b, Q]
    ),
    It = i.exports.useCallback((h, H = !1) => {
      f(H), u(h);
    }, []),
    Rt = i.exports.useCallback((h) => {
      y((H) => (H === h ? void 0 : h)), u("0");
    }, []),
    se = i.exports.useCallback(() => {
      u("0");
    }, []),
    De = i.exports.useCallback(async () => {
      console.log("staking!!", { amount: A.toString() });
      const h = await z(A);
      console.log("target amount", h.toString());
      const H = await v.stake(ne(h), { gasLimit: Ce });
      p(
        e.createElement(
          e.Fragment,
          null,
          "Transaction has been sent to blockchain,",
          e.createElement("br", null),
          "waiting for confirmation..."
        ),
        { variant: "info" }
      );
      const J = await H.wait(1);
      console.log("Stake:", J),
        p(`Successfully staked ${T(h)} RUBIX`, { variant: "success" }),
        g(),
        se();
    }, [z, A, v, p, g, se]),
    Oe = i.exports.useCallback(async () => {
      console.log("apply", A.toNumber(), ne(A).toString());
      const h = await v.applyWithdraw(ne(A), { gasLimit: Ce });
      p(
        e.createElement(
          e.Fragment,
          null,
          "Transaction has been sent to blockchain,",
          e.createElement("br", null),
          "waiting for confirmation..."
        ),
        { variant: "info" }
      );
      const H = await h.wait(1);
      console.log("Apply:", H),
        p(`Successfully applied withdrawal of ${T(A)} RUBIX`, {
          variant: "success",
        }),
        g(),
        se();
    }, [A, v, p, g, se]),
    Lt = i.exports.useCallback(async () => {
      try {
        l &&
          v &&
          A.gt(0) &&
          (o(!0), l === "Stake" ? await De() : l === "Unstake" && (await Oe()));
      } catch (h) {
        p(ae(h), { variant: "error" });
      }
      o(!1);
    }, [l, v, A, De, Oe, p]),
    { btnLabel: Dt, btnDisabled: Ot } = i.exports.useMemo(() => {
      const h = l === "Stake" && R;
      return {
        btnLabel: h ? "Not Started" : l === "Unstake" ? "Unstake" : "Stake",
        btnDisabled: h,
      };
    }, [l, R]);
  return e.createElement(
    e.Fragment,
    null,
    e.createElement(
      m,
      { mt: 3, minHeight: "54px" },
      k
        ? e.createElement(
            Z,
            {
              variant: "contained",
              size: "large",
              fullWidth: !0,
              loading: B,
              onClick: E,
            },
            "Approve Contract"
          )
        : e.createElement(
            e.Fragment,
            null,
            e.createElement(
              x,
              {
                variant: "caption",
                fontSize: "14px",
                fontWeight: 500,
                color: "rgba(255, 255, 255, 0.6)",
                sx: { textTransform: "uppercase" },
              },
              "RUBIX Staked"
            ),
            e.createElement(
              m,
              { display: "flex", alignItems: "center" },
              e.createElement(
                m,
                { flex: "1", overflow: "hidden" },
                e.createElement(
                  x,
                  {
                    variant: "body1",
                    pr: "8px",
                    fontSize: { xs: "20px", md: "22px" },
                    fontWeight: 500,
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  },
                  T(N)
                )
              ),
              e.createElement(
                m,
                {
                  flex: "0 0",
                  flexBasis: { xs: "100px", sm: "120px" },
                  display: "flex",
                  justifyContent: "space-between",
                  color: "palette.text.primary",
                },
                d.map(({ key: h, label: H, disabled: J }) =>
                  J
                    ? e.createElement("i", { key: h })
                    : e.createElement(
                        Na,
                        {
                          key: h,
                          disabled: J,
                          disableRipple: !0,
                          disableTouchRipple: !0,
                          variant: "outlined",
                          color: l === h ? "primary" : "inherit",
                          size: "small",
                          onClick: () => Rt(h),
                        },
                        H
                      )
                )
              )
            )
          )
    ),
    e.createElement(
      vn,
      { in: !!l },
      e.createElement(
        m,
        { mt: 3, position: "relative" },
        e.createElement(Ct, {
          logo: s,
          input: c,
          onInput: It,
          amount: A,
          max: Q,
          lockDownSeconds: pe,
          btnLabel: Dt,
          onSubmit: Lt,
          loading: r,
          disabled: Ot,
        }),
        e.createElement(
          x,
          {
            variant: "body2",
            color: "textSecondary",
            mt: "4px",
            fontSize: "12px",
          },
          l ? ((We = za[t]) == null ? void 0 : We[l]) : null
        ),
        l === "Unstake" && e.createElement(Ua, { pool: t, logo: s })
      )
    )
  );
}
var ja = "/assets/carbon.7a544673.svg",
  Va = "/assets/genesis.68d0e25f.svg",
  Ga = "/assets/platinum.594ec1f4.svg",
  qa = "/assets/zirconium.0b9a1d55.svg",
  Xa = "/assets/diamond.87047dc5.svg";
const Bt = [
  { name: "Diamond", icon: Xa, estAnnual: "--" },
  { name: "Zirconium", icon: qa, estAnnual: "--" },
  { name: "Platinum", icon: Ga, estAnnual: "--" },
  { name: "Genesis", icon: Va, estAnnual: "--" },
  { name: "Carbon", icon: ja, estAnnual: "--" },
];
var At = [
  {
    inputs: [
      { internalType: "address", name: "oldRUBIX", type: "address" },
      { internalType: "address", name: "oldRUBIX", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: !1,
    inputs: [
      { indexed: !0, internalType: "address", name: "owner", type: "address" },
      {
        indexed: !0,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      { indexed: !1, internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: !0,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      { indexed: !0, internalType: "address", name: "from", type: "address" },
      { indexed: !0, internalType: "address", name: "to", type: "address" },
      { indexed: !1, internalType: "uint256", name: "value", type: "uint256" },
      { indexed: !1, internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: !1,
    inputs: [
      { indexed: !0, internalType: "address", name: "from", type: "address" },
      { indexed: !0, internalType: "address", name: "to", type: "address" },
      { indexed: !1, internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "_decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "convertRUBIX",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "convertRUBIX",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "subtractedValue", type: "uint256" },
    ],
    name: "decreaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "addedValue", type: "uint256" },
    ],
    name: "increaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "inflation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "inflationAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "inflationRate",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastInflationTime",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "mint",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oldRUBIX",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oldRUBIX",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "inflationAddress", type: "address" },
    ],
    name: "setInflationAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "rate", type: "uint256" }],
    name: "setInflationRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "transferAndCall",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
async function Ya() {
  const t = new Ge(yt(), { name: ke, chainId: D });
  return await new Ee(
    "0x0409633A72D846fc5BBe2f98D88564D35987904D",
    At,
    t
  ).balanceOf("0xadA58Cf32276CCD03a1C155688eFF8B3BC282285");
}
function Za(t) {
  const { account: n } = I(),
    s = gt(),
    a = bt(Te[t], kt),
    r = j(U(t)),
    o = j(Pa(t));
  ft(o);
  const l = i.exports.useCallback(async () => {
    if (a) {
      const y = await s(),
        c = [];
      n &&
        c.push(
          a.balanceOf(n),
          a.getUserRewards(n),
          a.withdrawableAmount(n),
          a.getUserApplication(n)
        ),
        c.push(
          a.paused(),
          a.inflationSpeed(),
          a.totalStakes(),
          a.virtualTotalStakes(),
          a.lockDownDuration(),
          ...Bt.map(({ name: R }) => a.getLevelDetail(R))
        );
      let u = await y.all(c);
      n || (u = [void 0, void 0, void 0, void 0, ...u]),
        t == "RUBIX_V2" && (u[6] = await Ya());
      const [b, f, p, d, g, v, B, k, E, ...z] = u;
      let N = [];
      d &&
        (N = tt(d[1], d[2], (R, q) => ({
          timestamp: R.toNumber(),
          amount: O(q),
        })).filter((R) => R.amount.gt(0)));
      const pe = tt(Bt, z, (R, [q, Q, A]) =>
        $(w({}, R), {
          min: M(q.toString()),
          max: M(Q.toString()),
          weight: M(A.toString()).div(100),
        })
      );
      r({
        paused: g,
        inflationSpeed: O(v),
        totalStaked: O(B),
        virtualTotalStaked: O(k),
        lockDownSeconds: M(E.toNumber()),
        tierList: pe,
        staked: (b && O(b)) || S,
        earned: (f && O(f)) || S,
        withdrawable: (p && O(p)) || S,
        pendingUnstakes: N,
      });
    }
  }, [n, s, t, r, a]);
  qe([le, na, t, n], l);
}
function Pt(c) {
  var u = c,
    {
      pool: t,
      token: n,
      color: s = rt.palette.primary.main,
      logo: a,
      links: r,
      open: o = !0,
      disabledActions: l,
    } = u,
    y = L(u, [
      "pool",
      "token",
      "color",
      "logo",
      "links",
      "open",
      "disabledActions",
    ]);
  const { connected: b } = I();
  return (
    Za(t),
    e.createElement(
      nt,
      w(
        {
          sx: {
            borderRadius: "24px",
            bgcolor: "background.default",
            boxShadow: "0px 24px 32px -16px rgba(0, 0, 0, 0.25)",
          },
        },
        y
      ),
      e.createElement(
        at,
        {
          sx: {
            p: { xs: "24px", md: "32px" },
            borderRadius: "24px",
            bgcolor: "background.paper",
          },
        },
        e.createElement(Fa, { pool: t }),
        e.createElement(La, { pool: t }),
        b
          ? e.createElement(_a, {
              pool: t,
              token: n,
              logo: a,
              disabledActions: l,
            })
          : e.createElement(
              m,
              { mt: 3 },
              e.createElement(He, {
                variant: "contained",
                fullWidth: !0,
                size: "large",
              })
            )
      ),
      r
        ? e.createElement(
            kn,
            { sx: { p: "12px 16px" } },
            r.map(({ href: f, logo: p, text: d }) =>
              e.createElement(Ta, { key: f, href: f, logo: p }, d)
            )
          )
        : null,
      !o && e.createElement(Sa, null, "pending")
    )
  );
}
const W = P(Ke)({
  fontSize: "16px",
  "&.MuiTableCell-head": {
    fontSize: "14px",
    lineHeight: "24px",
    borderBottom: "none",
    color: "rgba(255, 255, 255, 0.6)",
  },
  "&.MuiTableCell-body": { borderBottom: "none", whiteSpace: "nowrap" },
});
function Ka({ pool: t }) {
  const { tierList: n, virtualTotalStaked: s, inflationSpeed: a } = C(U(t)),
    r = i.exports.useMemo(
      () =>
        Tn(n, "weight").map((o) =>
          s.gt(0) && a.gt(0) && o.weight.gt(0)
            ? $(w({}, o), { estAnnual: ta(wt(a, o.weight, s)) })
            : o
        ),
      [a, n, s]
    );
  return e.createElement(
    m,
    { width: "100%", overflow: "auto" },
    e.createElement(
      Qe,
      null,
      e.createElement(
        Je,
        null,
        e.createElement(
          ie,
          null,
          e.createElement(W, null, "Tier"),
          e.createElement(W, { align: "center" }, "Amount (min)"),
          e.createElement(W, { align: "center" }, "Amount (max)"),
          e.createElement(W, { align: "center" }, "Bonus Weight"),
          e.createElement(W, { align: "center" }, "Annual % (EST)")
        )
      ),
      e.createElement(
        $e,
        null,
        r.map((o, l) =>
          e.createElement(
            ie,
            {
              key: o.name,
              sx: {
                ":nth-of-type(odd)": {
                  background: "rgba(217, 230, 255, 0.05)",
                },
              },
            },
            e.createElement(
              W,
              null,
              e.createElement(Et, { tier: o, textStyle: { fontWeight: 600 } })
            ),
            e.createElement(
              W,
              { align: "center" },
              o.min.gt(0) && e.createElement(e.Fragment, null, "\u2265 "),
              T(o.min, { mantissa: 0 })
            ),
            e.createElement(
              W,
              { align: "center" },
              l === r.length - 1
                ? "Unlimited"
                : e.createElement(
                    e.Fragment,
                    null,
                    "< ",
                    T(o.max, { mantissa: 0 })
                  )
            ),
            e.createElement(
              W,
              { align: "center" },
              T(o.weight.multipliedBy(100), { mantissa: 0 }),
              "%"
            ),
            e.createElement(W, { align: "center" }, o.estAnnual, "%")
          )
        )
      )
    )
  );
}
function Qa(s) {
  var a = s,
    { pool: t } = a,
    n = L(a, ["pool"]);
  const [r, o] = i.exports.useState(!1);
  vt.listen(() => o(!0));
  const l = i.exports.useCallback(() => o(!1), [o]);
  return e.createElement(
    e.Fragment,
    null,
    e.createElement(
      m,
      {
        component: "a",
        className: "gradientText gradientText--underline",
        onClick: () => o(!0),
      },
      "$RUBIX Staking Tiers"
    ),
    e.createElement(
      ye,
      w(
        {
          open: r,
          onClose: l,
          sx: { ".MuiDialog-paper": { borderRadius: "24px" } },
          maxWidth: "md",
        },
        n
      ),
      e.createElement(
        be,
        {
          sx: {
            pb: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          },
        },
        e.createElement(
          x,
          { fontSize: { xs: "20px", md: "30px" }, fontWeight: "600" },
          "Staking Tiers ($RUBIX)"
        ),
        e.createElement(
          ge,
          {
            color: "inherit",
            onClick: l,
            sx: { p: "4px", fontWeight: 300 },
            size: "large",
          },
          e.createElement(xe, null)
        )
      ),
      e.createElement(he, { sx: {} }, e.createElement(Ka, { pool: t }))
    )
  );
}
var Ja = "/assets/binance.854db863.svg";
const Mt = P(x)(({ theme: { breakpoints: t, spacing: n } }) => ({
  fontSize: "30px",
  fontWeight: 600,
  textTransform: "uppercase",
  [t.down("md")]: { fontSize: "20px" },
}));
function $a() {
  return e.createElement(
    te,
    {
      container: !0,
      padding: "32px 0 48px",
      flex: "1",
      justifyContent: "center",
      alignItems: "stretch",
    },
    e.createElement(
      te,
      {
        item: !0,
        xs: 12,
        md: !0,
        width: "100%",
        maxWidth: { xs: "100%", md: 450 },
        mx: { xs: "auto", md: 0 },
        mb: { xs: "24px", md: 0 },
        p: { xs: "0 24px", md: "0 32px" },
      },
      e.createElement(
        m,
        {
          mb: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
        e.createElement(Mt, null, "Stake $RUBIX"),
        e.createElement(Qa, { pool: "RUBIX_V2" })
      ),
      e.createElement(
        x,
        { variant: "subtitle2", mb: 3, lineHeight: "24px" },
        "Stake the new RUBIX V2 token to earn RUBIX. ",
        e.createElement("br", null),
        "Please migrate your tokens from V1 to V2 in order to participate in this pool."
      ),
      e.createElement(Pt, {
        pool: "RUBIX_V2",
        token: "RUBIX",
        logo: ce,
        color: "#FC4C07",
        links: [
          {
            href: "",
            logo: Ja,
            text: "Buy $RUBIX",
          },
        ],
      })
    ),
    e.createElement(
      te,
      {
        item: !0,
        xs: 12,
        md: !0,
        width: "100%",
        maxWidth: { xs: "100%", md: 450 },
        mx: { xs: "auto", md: 0 },
        mb: { xs: "24px", md: 0 },
        p: { xs: "0 24px", md: "0 32px" },
      },
      e.createElement(we, { mdUp: !0 }, e.createElement(Cn, { sx: { mb: 2 } })),
      e.createElement(
        m,
        {
          mb: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
        e.createElement(Mt, { className: "gradientText" }, "Please Unstake")
      ),
      e.createElement(
        x,
        { variant: "subtitle2", mb: 3, lineHeight: "24px" },
        "This pool is no longer active. You must unstake and migrate your tokens to the new RUBIX V2 token. Migrate your tokens",
        " ",
        e.createElement(
          Ye,
          { to: "/swap", className: "gradientText gradientText--underline" },
          "here"
        ),
        "."
      ),
      e.createElement(Pt, {
        pool: "RUBIX_V1",
        token: "RUBIX_LEGACY",
        disabledActions: ["Stake"],
        logo: ce,
        color: "#FC4C07",
      })
    )
  );
}
function es(t = !0) {
  return Re(lt, At, t);
}
const ts = P(x)(({ theme: { breakpoints: t } }) => ({
  fontSize: "30px",
  fontWeight: 600,
  textTransform: "uppercase",
  [t.down("md")]: { fontSize: "20px" },
}));
function ns({
  token: t,
  tokenName: n,
  swapMethodName: s,
  tokenTitle: a,
  description: r,
  moreLink: o,
}) {
  const { enqueueSnackbar: l } = X(),
    { connected: y } = I(),
    c = es(),
    { available: u } = C(Y(t)),
    {
      loading: b,
      needApprove: f,
      handleApprove: p,
      checkApprove: d,
    } = Tt(G[t], lt),
    { refreshToken: g } = ue(),
    [v, B] = i.exports.useState(!1),
    k = i.exports.useCallback(async () => {
      if ((B(!0), location.hostname === "abc1001.tensorcorp.com")) {
        try {
          await d(u);
          let E;
          s === "convertRUBIX" ? (E = Sn(u.toString(), 8)) : (E = ne(u));
          const z = await c[s](E);
          l(
            e.createElement(
              e.Fragment,
              null,
              "Transaction has been sent to blockchain,",
              e.createElement("br", null),
              "waiting for confirmation..."
            ),
            { variant: "info" }
          );
          const N = await z.wait(1);
          console.log("Swap:", N),
            l(
              `Successfully swapped ${T(u)} ${n} to ${T(
                u.dividedBy(100)
              )} RUBIX V2`,
              { variant: "success" }
            ),
            await g();
        } catch (E) {
          l(ae(E), { variant: "error" });
        }
        B(!1);
      }
    }, [d, u, c, s, l, n, g]);
  return e.createElement(
    e.Fragment,
    null,
    e.createElement(
      m,
      { mb: 2, textAlign: "center" },
      e.createElement(
        ts,
        null,
        e.createElement("span", { className: "gradientText" }, a),
        " Swap"
      )
    ),
    e.createElement(
      x,
      {
        variant: "subtitle2",
        mb: 3,
        px: { xs: 1 },
        lineHeight: "24px",
        textAlign: "center",
      },
      r
    ),
    e.createElement(
      nt,
      {
        sx: {
          borderRadius: "24px",
          bgcolor: "background.default",
          boxShadow: "0px 24px 32px -16px rgba(0, 0, 0, 0.25)",
        },
      },
      e.createElement(
        at,
        {
          sx: {
            p: { xs: "24px", md: "32px" },
            borderRadius: "24px",
            bgcolor: "background.paper",
          },
        },
        e.createElement(
          m,
          { mb: 4 },
          e.createElement(Ht, { label: `${n} Balance`, value: T(u), suffix: n })
        ),
        e.createElement(
          m,
          { my: 4 },
          e.createElement(Ht, {
            label: "YOU WILL RECEIVE",
            value: T(u.dividedBy(100)),
            suffix: "RUBIX V2",
          })
        ),
        y
          ? f
            ? e.createElement(
                Z,
                {
                  variant: "contained",
                  size: "large",
                  fullWidth: !0,
                  loading: b,
                  onClick: p,
                },
                "Approve Contract"
              )
            : e.createElement(
                Z,
                {
                  variant: "contained",
                  size: "large",
                  fullWidth: !0,
                  loading: v,
                  disabled: u.eq(0),
                  onClick: k,
                },
                "Swap ",
                a
              )
          : e.createElement(
              m,
              { mt: 3 },
              e.createElement(He, {
                variant: "contained",
                fullWidth: !0,
                size: "large",
              })
            )
      )
    )
  );
}
function Ht({ label: t, value: n, suffix: s }) {
  return e.createElement(
    m,
    { key: t, mb: 3, display: "flex", justifyContent: "space-between" },
    e.createElement(
      x,
      {
        variant: "body1",
        color: "rgba(255, 255, 255, 0.6)",
        fontSize: "14px",
        fontWeight: 500,
        sx: { textTransform: "uppercase" },
      },
      t
    ),
    e.createElement(
      x,
      {
        component: "div",
        variant: "body1",
        color: "#FFF",
        fontSize: "16px",
        fontWeight: 500,
      },
      n,
      e.createElement(
        x,
        {
          ml: 1,
          component: "span",
          display: "inline-block",
          textAlign: "right",
          color: "rgba(255, 255, 255, 0.6)",
          fontSize: "14px",
          fontWeight: 500,
          sx: { textTransform: "uppercase" },
        },
        s
      )
    )
  );
}
const as = [
  {
    token: "RUBIX_LEGACY",
    tokenName: "RUBIX V1",
    swapMethodName: "convertRUBIX",
    tokenTitle: "RUBIX",
    description: e.createElement(
      e.Fragment,
      null,
      "Swap BEP-20 RUBIX V1 tokens for RUBIX V2 tokens ",
      e.createElement("br", null),
      " at a 100:1 rate."
    ),
    moreLink:
      "https://phoenixglobal.medium.com/RUBIX-token-redenomination-1b321687daa",
  },
  {
    token: "RUBIX",
    tokenName: "RUBIX",
    swapMethodName: "convertRUBIX",
    tokenTitle: "RUBIX",
    description: e.createElement(
      e.Fragment,
      null,
      "Swap BEP-20 RUBIX tokens for RUBIX V2 tokens ",
      e.createElement("br", null),
      " at a 100:1 rate."
    ),
    moreLink:
      "https://phoenixglobal.medium.com/RUBIX-token-redenomination-1b321687daa#be16",
  },
];
function ss() {
  return e.createElement(
    te,
    {
      container: !0,
      padding: "32px 0 48px",
      flex: "1",
      justifyContent: "center",
      alignItems: "stretch",
    },
    as.map((t) =>
      e.createElement(
        te,
        {
          key: t.token,
          item: !0,
          xs: 12,
          md: !0,
          width: "100%",
          maxWidth: { xs: "100%", md: 500 },
          mx: { xs: "auto", md: 0 },
          my: { xs: "24px", md: 0 },
          p: { xs: "0 24px", md: "0 32px", lg: "0 50px" },
        },
        e.createElement(ns, w({}, t))
      )
    )
  );
}
const Ft = parseInt({}.VITE_APP_COMMIT_TIME);
me.initialize("UA-199967941-1", {}),
  me.pageview(window.location.pathname + window.location.search);
function rs() {
  return (
    Me("RUBIX"),
    Me("RUBIX_LEGACY"),
    Me("RUBIX"),
    e.createElement(
      e.Fragment,
      null,
      e.createElement(
        "div",
        { className: "App" },
        e.createElement(ka, null),
        e.createElement(
          Bn,
          null,
          e.createElement(st, { path: "/swap" }, e.createElement(ss, null)),
          e.createElement(st, { path: "/" }, e.createElement($a, null))
        ),
        Ft
          ? e.createElement(
              x,
              {
                variant: "caption",
                position: "absolute",
                right: "12px",
                bottom: "0",
                color: "#666",
              },
              "Typography: ",
              Ft
            )
          : null
      )
    )
  );
}
const os = new An({
  defaultOptions: {
    queries: $(w({}, Zn), { enabled: !0 }),
    mutations: { useErrorBoundary: !0 },
  },
});
Pn.render(
  e.createElement(
    i.exports.StrictMode,
    null,
    e.createElement(
      Mn,
      null,
      e.createElement(
        Hn,
        { client: os },
        e.createElement(
          Fn,
          { getLibrary: $n },
          e.createElement(
            In,
            { injectFirst: !0 },
            e.createElement(Rn, null),
            e.createElement(
              Ln,
              { theme: rt },
              e.createElement(
                Dn,
                {
                  anchorOrigin: { horizontal: "right", vertical: "top" },
                  preventDuplicate: !0,
                },
                e.createElement(On, null, e.createElement(rs, null))
              )
            )
          )
        ),
        e.createElement(Wn.exports.ReactQueryDevtools, { initialIsOpen: !0 })
      )
    )
  ),
  document.getElementById("root")
);
