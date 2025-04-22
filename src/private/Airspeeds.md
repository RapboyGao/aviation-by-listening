---
icon: lock
title: Airspeeds
category:
  - Airspeeds
  - Private
sidebar: true
---

## CAS

### [CAS on Wikipedia](https://en.wikipedia.org/wiki/Calibrated_airspeed)

### CAS & Dynamic Pressure

#### For **subsonic** speeds, CAS is calculated as

$$

CAS = \alpha_0 * \sqrt{5 * ((1 + \frac{q_c}{P_0}) ^ \frac{2}{7} - 1)}

\\

\frac{CAS}{\alpha_0}  = \sqrt{5 * ((1 + \frac{q_c}{P_0}) ^ \frac{2}{7} - 1)}


\\

(\frac{CAS}{\alpha_0}) ^ 2  = 5 * ((1 + \frac{q_c}{P_0}) ^ \frac{2}{7} - 1)


\\

\frac{(\frac{CAS}{\alpha_0}) ^ 2}{5} = (1 + \frac{q_c}{P_0}) ^ \frac{2}{7} - 1


\\

1 + \frac{(\frac{CAS}{\alpha_0}) ^ 2}{5} = (1 + \frac{q_c}{P_0}) ^ \frac{2}{7}


\\

(1 + \frac{(\frac{CAS}{\alpha_0}) ^ 2}{5}) ^ \frac{7}{2} = 1 + \frac{q_c}{P_0}


\\

(1 + \frac{(\frac{CAS}{\alpha_0}) ^ 2}{5}) ^ \frac{7}{2} - 1=  \frac{q_c}{P_0}


\\

((1 + \frac{(\frac{CAS}{\alpha_0}) ^ 2}{5}) ^ \frac{7}{2} - 1) * P_0 =  q_c


\\

q_c = ((1 + \frac{(\frac{CAS}{\alpha_0}) ^ 2}{5}) ^ \frac{7}{2} - 1) * P_0


$$

#### For supersonic airspeeds,

where a normal shock forms in front of the pitot probe, the Rayleigh formula applies

- To start with,

$$

CAS = \alpha_0


$$

- Then iterate until CAS mergers

$$


ratio = 166.92158009316827

\\

CAS = \alpha_0 * \sqrt[7]{(\frac{q_c}{P_0} + 1) \times (7(\frac{CAS}{\alpha_0})^2 - 1)^\frac{5}{2}\div(6^\frac{5}{2} \times 1.2^\frac{7}{2})}

\\

CAS = \alpha_0 * \sqrt[7]{(\frac{q_c}{P_0} + 1) \times (7(\frac{CAS}{\alpha_0})^2 - 1)^\frac{5}{2} \div ratio}

\\

\frac{CAS}{\alpha_0} = \sqrt[7]{(\frac{q_c}{P_0} + 1) \times (7(\frac{CAS}{\alpha_0})^2 - 1)^\frac{5}{2} \div ratio}

\\

(\frac{CAS}{\alpha_0})^7 = (\frac{q_c}{P_0} + 1) \times (7(\frac{CAS}{\alpha_0})^2 - 1)^\frac{5}{2} \div ratio

\\

(\frac{CAS}{\alpha_0})^7 \times ratio = (\frac{q_c}{P_0} + 1) \times (7(\frac{CAS}{\alpha_0})^2 - 1)^\frac{5}{2}

\\

\frac{(\frac{CAS}{\alpha_0})^7 \times ratio}{(7(\frac{CAS}{\alpha_0})^2 - 1)^\frac{5}{2}}  = \frac{q_c}{P_0} + 1


$$

$$

\frac{(\frac{CAS}{\alpha_0})^7 \times ratio}{(7(\frac{CAS}{\alpha_0})^2 - 1)^\frac{5}{2}} - 1 = \frac{q_c}{P_0}


$$

$$

P_0 \times (\frac{(\frac{CAS}{\alpha_0})^7 \times ratio}{(7(\frac{CAS}{\alpha_0})^2 - 1)^\frac{5}{2}} - 1) = q_c


$$

$$

q_c = P_0 \times (\frac{(\frac{CAS}{\alpha_0})^7 \times ratio}{(7(\frac{CAS}{\alpha_0})^2 - 1)^\frac{5}{2}} - 1)


$$

## Mach Number

### [Mach Number on Wikipedia](https://en.wikipedia.org/wiki/Mach_number)

### Mach & Dynamic Pressure

#### Subsonic

- Assuming air to be an ideal gas, the formula to compute Mach number in a subsonic compressible flow is:

$$

M = \sqrt{\frac{2}{\gamma - 1}((\frac{q_c}{p} + 1)^\frac{\gamma - 1}{\gamma} - 1})

\\

M ^ 2 = \frac{2}{\gamma - 1}((\frac{q_c}{p} + 1)^\frac{\gamma - 1}{\gamma} - 1)

\\

\frac{(\gamma - 1) * M ^ 2}{2}  = (\frac{q_c}{p} + 1)^\frac{\gamma - 1}{\gamma} - 1

\\

\frac{(\gamma - 1) * M ^ 2}{2} + 1  = (\frac{q_c}{p} + 1)^\frac{\gamma - 1}{\gamma}


\\

(\frac{(\gamma - 1) * M ^ 2}{2} + 1)^\frac{\gamma}{\gamma - 1}  = \frac{q_c}{p} + 1

\\

(\frac{(\gamma - 1) * M ^ 2}{2} + 1)^\frac{\gamma}{\gamma - 1} - 1 = \frac{q_c}{p}

\\

p((\frac{(\gamma - 1) * M ^ 2}{2} + 1)^\frac{\gamma}{\gamma - 1} - 1) = q_c


\\

q_c = p((\frac{(\gamma - 1) * M ^ 2}{2} + 1)^\frac{\gamma}{\gamma - 1} - 1)

\\

p = \frac{q_c}{(\frac{(\gamma - 1) * M ^ 2}{2} + 1)^\frac{\gamma}{\gamma - 1} - 1}


$$

#### Supersonic

$$

\frac{p_t}{p} = (\frac{\gamma+1}{2}M^2)^\frac{\gamma}{\gamma-1} \times (\frac{\gamma + 1}{1 - \gamma + 2 \gamma M^2})^\frac{1}{\gamma-1}

\\

\because \gamma = 1.4

\\

\therefore

\frac{p_t}{p} = (1.2M^2)^{3.5} \times (\frac{2.4}{2.8 M^2 - 0.4})^{2.5}

\\

\frac{p_t}{p} \div (\frac{2.4}{2.8 M^2 - 0.4})^{2.5} = (1.2M^2)^{3.5}

\\

1.2M^2 = \sqrt[3.5]{\frac{p_t}{p} \div (\frac{2.4}{2.8 M^2 - 0.4})^{2.5}}

\\

1.2M^2 = \sqrt[3.5]{\frac{p_t}{p} \times (\frac{2.8 M^2 - 0.4}{2.4})^{2.5}}

\\

M^2 = \sqrt[3.5]{\frac{p_t}{p} \times (\frac{2.8 M^2 - 0.4}{2.4})^{2.5}} \div 1.2

\\

M^2 = (\frac{p_t}{p} \times (\frac{2.8 M^2 - 0.4}{2.4})^{2.5})^\frac{1}{3.5} \div 1.2

\\

M = \sqrt{
    (\frac{p_t}{p} \times (\frac{2.8 M^2 - 0.4}{2.4})^{2.5})^\frac{1}{3.5} \div 1.2
}


$$

- Iterate until M merges:

$$

M = \sqrt{
    (\frac{p_t}{p} \times (\frac{2.8 M^2 - 0.4}{2.4})^{2.5})^\frac{1}{3.5} \div 1.2
}


$$

## TAS

### [TAS on Wikipedia](https://en.wikipedia.org/wiki/True_airspeed)

### TAS & Mach

$$

TAS = Ratio * M * \sqrt{T}

\\

M = \frac{TAS}{Ratio \sqrt{T}}


$$

If TAS is measured in **knots**, Ratio = 38.96823501298186

### TAS & Dynamic Pressure

- Valid for subsonic flow

$$

TAS = \alpha_0 \sqrt{\frac{5T}{T_0}((\frac{q_c}{P}+1)^\frac{2}{7} - 1)}

\\

\frac{TAS}{\alpha_0} = \sqrt{\frac{5T}{T_0}((\frac{q_c}{P}+1)^\frac{2}{7} - 1)}

\\

(\frac{TAS}{\alpha_0})^2 = \frac{5T}{T_0}((\frac{q_c}{P}+1)^\frac{2}{7} - 1)

\\

(\frac{TAS}{\alpha_0})^2\frac{T_0}{5T} = (\frac{q_c}{P}+1)^\frac{2}{7} - 1

\\

(\frac{TAS}{\alpha_0})^2\frac{T_0}{5T} + 1 = (\frac{q_c}{P}+1)^\frac{2}{7}

\\

((\frac{TAS}{\alpha_0})^2\frac{T_0}{5T} + 1) ^ \frac{7}{2} = \frac{q_c}{P}+1

\\

((\frac{TAS}{\alpha_0})^2\frac{T_0}{5T} + 1) ^ \frac{7}{2} - 1 = \frac{q_c}{P}

\\

q_c = P * ((\frac{T_0}{5T}(\frac{TAS}{\alpha_0})^2 + 1) ^ \frac{7}{2} - 1)

\\

q_c = P * Ratio \space,\space Ratio = ((\frac{TAS}{\alpha_0})^2\frac{T_0}{5T} + 1) ^ \frac{7}{2} - 1


$$

## Temperatures and Speeds

- This section is based on perfectly measured TAT.

### [Total Air Temperature on Wikipedia](https://en.wikipedia.org/wiki/Total_air_temperature)

### Mach and Total Temperature

$$

\frac{T_t}{T} = 1 + \frac{\gamma - 1}{2}M^2

\\

\because \gamma = 1.4

\\

\therefore \frac{T_t}{T} = 1 + 0.2 M^2

\\

\frac{T_t}{T} - 1 = 0.2 M^2

\\

(\frac{T_t}{T} - 1 ) \times 5= M^2

\\

M = \sqrt{(\frac{T_t}{T} - 1 ) \times 5}


$$

### TAS and Total Temperature

$$

\because M = \frac{TAS}{Ratio \sqrt{T}} \And M = \sqrt{(\frac{T_t}{T} - 1 ) \times 5}

\\

\therefore \frac{TAS}{Ratio \sqrt{T}} = \sqrt{(\frac{T_t}{T} - 1 ) \times 5}

\\

\frac{TAS}{Ratio} = \sqrt{(\frac{T_t}{T} - 1 ) \times 5} \times \sqrt{T}

\\

\frac{TAS}{Ratio} = \sqrt{(\frac{T_t}{T} - 1 ) \times 5T}

\\

\frac{TAS}{Ratio} = \sqrt{\frac{T_t}{T} * 5T - 5T }

\\

\frac{TAS}{Ratio} = \sqrt{5T_t - 5T }

\\

TAS = Ratio * \sqrt{5(T_t - T) }

\\

(\frac{TAS}{Ratio})^2 = 5T_t - 5T

\\

T_t - T = (\frac{TAS}{Ratio})^2 \div 5


$$

### Summary

#### TAS from Mach And TAT

$$

T = \frac{T_t}{1 + 0.2M^2}

\\

TAS = Ratio * \sqrt{5(T_t - T)}


$$

#### Mach from TAS And TAT

$$

T = T_t - (\frac{TAS}{Ratio})^2 \div 5

\\

M = \sqrt{(\frac{T_t}{T} - 1 ) \times 5}


$$

## Notes

- $P$ or $p$ is static pressure.

- $q_c$ is impact pressure

- $\alpha_0$ is the speed of sound at standard sea level (661.47 knots (1,225.04 km/h; 340.29 m/s))

- $T$ is static air temperature in kelvins

- $T_t$ is total air temperature in kelvins

- $T_0$ is the temperature at standard sea level (288.15 K).

- $\gamma$, is the ratio of specific heat of a gas at a constant pressure to heat at a constant volume (1.4 for air)
