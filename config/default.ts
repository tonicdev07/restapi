export default {
  port: 1337,
  dbUri:
    "mongodb+srv://tonicdev07:0drgdakuFa3FUCwQ@cluster0.7rhjzfy.mongodb.net/?retryWrites=true&w=majority",
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  accessTokenPrivateKey: `MIIEowIBAAKCAQEAw8/8ctz8OK1/LWtJAzrHk4G1Y6qBZVQW2Wpi+I5842sgfnci
  3dyVVayNNGrhTnADFNS72OgsEdeMtV4ICz1qAPsXOcsUY+GXyLlQcF5EFn5fFLXS`,
  accessTokenPublicKey: `-----BEGIN RSA PUBLIC KEY-----
  MIIBCgKCAQEAp/vkylqiWicCknYcfJ0YcPK5yGaUCzfckjLxwZlVLgnKRRLm59ZN
  pw/vgYwi9EyQbMhihLBV/E7tX+7FDhUAdHrXa+o0WR2cRpcDSEdcuUbhvsIxtYmr
  oPiotxdcRiRrNYSPaNdjVPYrLRxkqOOME+5SMrxJPowTtHo/2mtFnSEerFcwnwu0
  87dicwlTi7XC4MxZ/FI9zg5W49Ckl0r/FXfS/Ryo42eeIeRoCXnGPi+1BeDoyFb0
  +Xx/9KktX515UQ7BYw9qTwdRTYM5C4yGP0qNgRIH++OP2ym+IJgOzfdzNKOyhF6Q
  J0HEg+WKKdMEuV5YVVuZGpQc7twcSsC4IwIDAQAB
  -----END RSA PUBLIC KEY-----`,
  refreshTokenPrivateKey: `-----BEGIN PRIVATE KEY-----
  MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCydMLcvpXx76pz
  7q1X8PeVClgY5RoqTaf8/qPh4R3JE1tgtYtOvTs9Z8k9l9lKj51M17kUNyKBDXep
  f66V1vxSySy+WZtjFU1A8w+jlOzm4Lt+8i5rsGIwuCefCi6riCKTHq5HAx7XYLYh
  A64OVdGM7MgY2b0PQRk+IPVIcufGPYpXaeJCTKSvfGcrq+Hb09ZUYSUX5MUDQ8U0
  7zQBBPLTdok6t+ssAoxwxXSZTkBx0yLQWiRei7Gpi9I7CEqcQgFMqBaxza5ARu1X
  3oB256QrxeZKuVFr45QdZmUz/OSLk84o8skvrPnJpgUp9d6BnRmBN3hS3qKsrwKp
  cYC34BCbAgMBAAECggEAHbldC6+jAh1NYuoKbW9xjZ2fduYSKaGtrXIskd8ROwDC
  Y6VZgs/6Igw7dMrqIoUxSi9UYI2ebah0mgLubX7VoGRp03rRavuNVpglrrWLkBk2
  obptCPrkIAFMeC0WAPQ37hFaLfHTHUS6kV0vjKu2r6Zw3dLGrtfFAJg0wtCA0n/+
  VDjivwhbIOmovsWt9DfCdWxq1BEYZWOJKJ2NY2qFoyWwA/lngHKFhxSmMaju6P3+
  Ed2XvCQMgSi8ij0J5UJutz2pSjD+Yg+yqE2Sd7JhgLsVQMm+CagEjBtA5fzyLbIv
  6qjS1R4p5aPKm+xUsp2V6tEJpdClsWH82ZBD3FPXYQKBgQDgr8z+/sA8whmRHkDI
  j380zFKAaAfNDrORlryBueiXM0RYMopxqEKsKkaweaovnA6wbwYjSVm4JoA6xsrd
  2j5++2QjxMZGYQ6PpjhiVsck3seGOeyn6wSNlF0vMtuXpDkWoy5e1wvN7mHYXp5p
  1BZnrCSsDxj6YYyEur5H98vErwKBgQDLU5R4I0zBA7GYaTLkKKTF/qfrH/bxPJve
  J+/z04rWkWPt07TBy+8Dym5R5/CZX4yPRrHeJVXLPJEiIA7MqzX6WfsMWeK2sTSw
  zqFEvowo7NPVg+ytjRya73ppqcCUyrwNDg1Exxx1B+EDzqZVRvD3PYFiwiujLifh
  YO5hcuIF1QKBgAdGafLPuNW+yykhu6NC0jGZdApoU+hV04ahRNVGebt7k3jvmf/4
  HMCKVeOc7N/Bw8/+qEo4M8l8paZBjYwFZwShiyqFUo4w0lHgZe75NFWDSR6VfY4q
  U+lppmLC2M1eKeMLwZKcj+tJDq380lBG57rPnhhcHMjuo6ggi8y0v0pNAoGAcmQg
  aIK7oO+6D9xHpHN1WGtP/4lpPglyS8c+SXhfaR49EUWFMW7RltlhvbT2+OL3ynfk
  g+2PWhtGL+PHT8CXSrUq96TuVwhVc4+czXdClZfACiUBmBaG3GgU/7NgRJXWvKWG
  M4at7O2025Z8oAecdAznaS+Cq3jBORx2oN6oaM0CgYA7rDKsAHCQuJKgpQbEAKCo
  qyuyHGV2B2wJXUGshIv9XJQ3MXwkZKrYtHOujaBwhTeQvlOfX/31quW+CmEaxj7s
  ZfaVpLknEgaH0N7NFN63nSM4FyO70aLX3zqrdiQ73mz6K8WaSELjgQnAv3cgf5+a
  oGXDrnx/EkVGnEZaL18+Xg==
  -----END PRIVATE KEY-----`,
  refreshTokenPublicKey: `-----BEGIN PUBLIC KEY-----
  MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsnTC3L6V8e+qc+6tV/D3
  lQpYGOUaKk2n/P6j4eEdyRNbYLWLTr07PWfJPZfZSo+dTNe5FDcigQ13qX+uldb8
  UsksvlmbYxVNQPMPo5Ts5uC7fvIua7BiMLgnnwouq4gikx6uRwMe12C2IQOuDlXR
  jOzIGNm9D0EZPiD1SHLnxj2KV2niQkykr3xnK6vh29PWVGElF+TFA0PFNO80AQTy
  03aJOrfrLAKMcMV0mU5AcdMi0FokXouxqYvSOwhKnEIBTKgWsc2uQEbtV96Aduek
  K8XmSrlRa+OUHWZlM/zki5POKPLJL6z5yaYFKfXegZ0ZgTd4Ut6irK8CqXGAt+AQ
  mwIDAQAB
  -----END PUBLIC KEY-----`,
};

// username tonicdev07
// password 0drgdakuFa3FUCwQ
