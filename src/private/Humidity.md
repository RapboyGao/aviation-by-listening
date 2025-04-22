---
icon: lock
title: Humidity
category:
  - Humidity
  - Private
sidebar: true
---

## Note

- Two particular sets provide a range of −40 °C to +50 °C between the two, with even lower maximum error within the indicated range than all the sets above:

  - a = 6.1121 hPa, b = 17.368, c = 238.88 °C; for 0 °C ≤ T ≤ 50 °C (error ≤ 0.05%).
  - a = 6.1121 hPa, b = 17.966, c = 247.15 °C; for −40 °C ≤ T ≤ 0 °C (error ≤ 0.06%).

## Dew Point Calculation

$$

\gamma_m(T, RH) = ln(RH e^{(b - \frac{T}{d})(\frac{T}{c+T})})


$$

$$

T_dp = \frac{c \gamma_m(T, RH)}{b - \gamma_m(T, RH)}


$$

## Relative Humidity Calculation

- Solving y

$$

y = ln(RH e^{(b - \frac{T}{d})(\frac{T}{c+T})})


$$

$$

T_dp = \frac{c y}{b - y}


$$

$$

T_dp = c\frac{y}{b - y}


$$

$$

\frac{T_dp}{c} = \frac{y}{b - y}


$$

$$

\frac{b - y}{y}= \frac{c}{T_dp}


$$

$$

\frac{b}{y} - 1= \frac{c}{T_dp}


$$

$$

\frac{b}{y} = \frac{c}{T_dp} + 1


$$

$$

y = \frac{b}{\frac{c}{T_dp} + 1}


$$

- Solving RH

$$

y = ln(RH e^{(b - \frac{T}{d})(\frac{T}{c+T})})


$$

$$

RH e^{(b - \frac{T}{d})(\frac{T}{c+T})} = e^y


$$

$$

RH  = \frac{e^y}{e^{(b - \frac{T}{d})(\frac{T}{c+T})}}


$$

$$

RH  = e ^ {y - (b - \frac{T}{d})(\frac{T}{c+T})}


$$

$$

index = y - (b - \frac{T}{d})(\frac{T}{c+T})

\\

index = \frac{b}{\frac{c}{T_dp} + 1} - (b - \frac{T}{d})(\frac{T}{c+T})

\\


RH = e ^ {index}


$$
