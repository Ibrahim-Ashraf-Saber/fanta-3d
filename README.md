
# Animated Fanta

مشروع تفاعلي يستخدم مكتبة GSAP مع ScrollTrigger لتحريك صور وعناصر الصفحة بسلاسة عند التمرير، مما يخلق تأثيرات جذابة وديناميكية.

## Screenshots

![App Screenshot](https://raw.githubusercontent.com/Ibrahim-Ashraf-Saber/fanta-3d/main/public/1.png)

![App Screenshot](https://raw.githubusercontent.com/Ibrahim-Ashraf-Saber/fanta-3d/main/public/2.png)

![App Screenshot](https://raw.githubusercontent.com/Ibrahim-Ashraf-Saber/fanta-3d/main/public/3.png)

## Live Demo

يمكنك مشاهدة المشروع مباشرة من هنا:  
https://fanta-3d.vercel.app/

## Features

- تحريك تفاعلي سلس مرتبط بالتمرير (Scroll-based animations)  
- حركات متعددة لعناصر مختلفة (صور، نصوص، إلخ)  
- استخدام ScrollTrigger للتحكم الدقيق في توقيت الحركات  
- تنظيم الحركات ضمن خطوط زمنية (Timelines) منفصلة ومتزامنة  

## GSAP ScrollTrigger Timeline Summary

### 1. GSAP (GreenSock Animation Platform)  
- مكتبة جافاسكريبت قوية للتحريك والأنيميشن.  
- تسهل إنشاء حركات سلسة ومتقدمة على عناصر الويب.

### 2. ScrollTrigger  
- إضافة (Plugin) لـ GSAP تتحكم في تشغيل الحركات بناءً على تمرير الصفحة (scroll).  
- تقدر تحدد متى تبدأ الحركات وأين تنتهي (start & end).  
- تقدر تربط الحركة بعنصر معين (trigger).  
- خاصية `scrub` تزامن الحركة مع موقع التمرير، فتصبح الحركة ديناميكية حسب سرعة التمرير.  
- `markers` تظهر علامات على الصفحة لتسهيل ضبط توقيتات البداية والنهاية أثناء التطوير.

### 3. Timeline  
- أداة من GSAP تجمع عدة حركات (Tweens) في تسلسل زمني واحد.  
- تتيح لك تنظيم وتحكم أفضل في حركات متعددة مرتبطة ببعضها.  
- تقدر تضيف تسميات (labels) داخل الـ timeline لتزامن الحركات أو التحكم في توقيتها بدقة.  
- مع ScrollTrigger، timeline يمكن أن يتحكم في حركة مجموعة عناصر حسب تمرير محدد.

### 4. كيف يعملوا مع بعض؟  
- تنشئ timeline تحدد فيه عدة تحركات لعناصر مختلفة.  
- تربط الـ timeline بـ ScrollTrigger بتحديد `trigger`, `start`, `end`, و `scrub`.  
- عند التمرير، الـ ScrollTrigger يشغل Timeline تدريجيًا بين نقطة البداية والنهاية.  
- مع `scrub: true` الحركة تتزامن مع التمرير، يعني إذا رجعت لفوق الحركة ترجع للعكس.

### 5. مثال مبسط

```js
gsap.timeline({
  scrollTrigger: {
    trigger: "#section",
    start: "top center",
    end: "bottom top",
    scrub: true,
    markers: true,
  }
})
.to("#box", { x: 300, rotation: 90 })
.to("#circle", { y: 200, scale: 1.5 }, "<"); // يبدأ بنفس توقيت التحريك السابقة
```

## Requirements

- Node.js مثبت على جهازك  
- React.js (بما أن المشروع React-based)  
- مكتبة GSAP  
- إضافة ScrollTrigger  
- إضافة `@gsap/react` لاستخدام hook `useGSAP`

## Setup & Usage

### تثبيت المكتبات

شغّل الأمر التالي في التيرمينال داخل مجلد المشروع:

```bash
npm install gsap @gsap/react
```

### استيراد المكتبات وتسجيل البلجن

```js
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
```

### مثال بسيط للاستخدام داخل React Component

```jsx
export default function Example() {
  useGSAP(() => {
    gsap.to("#box", {
      x: 300,
      scrollTrigger: {
        trigger: "#box",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        markers: true,
      },
    });
  }, []);

  return <div id="box" style={{ width: 100, height: 100, background: "red" }} />;
}
```

---

## Installation

لتشغيل المشروع محليًا، اتبع الخطوات التالية:

```bash
npm install
npm start
```

ثم افتح المتصفح على `http://localhost:3000` (أو حسب إعدادات مشروعك).

## Author

تم تطوير المشروع بواسطة **Ibrahim Ashraf** ❤️  
[GitHub](https://github.com/Ibrahim-Ashraf-Saber)
