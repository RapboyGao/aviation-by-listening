---
icon: lock
title: Private Documents
category:
  - Private
# sidebar: structure
toc.levels: 10
navbar: true
---

<script setup lang='ts'>
/**
 * 保留数字前后的"0"
 * @param num 传入的数字
 * @param frontLength 小数点前保留多少个0，如果数字位数大于frontLength，则不考虑
 * @param aftLength 小数点后保留多少个0，如果小数点后精度已高于aftLenth，则不考虑
 * @returns 整理后的数字
 */
function k0s(
    num: number | string = "",
    frontLength: number,
    aftLength: number = 0
  ): string {
    let finalArr: string[] = []; // 最终连起来的数组
    const isMinus = +num < 0; // 是否为负数
    if (isMinus) {
      finalArr.unshift("-"); //如果是负数，在开头加上"-"
    }
    let absValue = isMinus ? -num : num; // 转换为绝对值
    let splitted: string[] = (absValue + "").split(".");
    const { length: lenFront } = splitted[0];
    // -----处理小数点以前部分
    frontLength = ~~Math.abs(frontLength);
    if (lenFront < frontLength) {
      let _0sBeforeValue: string = Array.from({ length: frontLength - lenFront })
        .map(() => "0")
        .join("");
      finalArr.push(_0sBeforeValue);
    }
    finalArr.push(splitted[0]);
    // -----处理小数点以后部分
    aftLength = ~~Math.abs(aftLength);
    if (aftLength || splitted[1]) {
      finalArr.push("."); // 如果要求了小数点或者本身有小数点
      let afterStr = splitted[1] || ""; // 后面的部分
      finalArr.push(afterStr);
      let _0sAfterValue: string = Array.from({
        length: aftLength - afterStr.length,
      })
        .map(() => "0")
        .join(""); // 所补充的0
      finalArr.push(_0sAfterValue); // 加上所补充的0
    }
    return finalArr.join("");
}
const withFront =  "/aviation-docs/private/737-FCOM/"
const fcomList=[
    {
        name: "前言",
        href: withFront + "A-0.html"
    },
    {
        name: "极限",
        href:  withFront + "A-Limits.html"
    }
]
for(let i = 1; i <= 15; i++) {
    fcomList.push({
        name: `第 ${i} 章`,
        href: `${withFront}FCOM-${k0s(i, 2)}.html`
    })
}
</script>

## [B737 CRM](./737-CRM/README.md)

- 如何保证飞行安全 (程序以外)

## [B737 FCOM 题库](./737-FCOM/A-0.md)

<nav class="table-of-contents">
    <ul  v-for="(item, i ) in fcomList" :key="i">
        <li>
            <a aria-current="page" :href="item.href" class="router-link-active router-link-exact-active">
                 {{item.name}}
            </a>
        </li>
    </ul>
</nav>

## [Quiz 2022-05-19](./Quiz/2022-05-19/README.md)

## [CAS Mach TAS](./Airspeeds.md)

## [Humidity](./Humidity.md)

## [Interpolation](./Interpolation.md)
