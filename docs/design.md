# HobbyFind UI/UX Design Guide

> **Reference Direction:** Airbnb-inspired visual language\
> **Service:** HobbyFind\
> **Platform:** Responsive Web / Next.js + TailwindCSS\
> **Scope:** Root Page + 3 Category Pages\
> **Design Principle:** Airbnb의 화면을 복제하지 않고, 넓은 여백·이미지
> 중심 카드·명확한 정보 위계·부드러운 인터랙션·절제된 UI를 HobbyFind에
> 맞게 재해석한다.

------------------------------------------------------------------------

# 1. 디자인 시스템 개요 (Design System Overview)

## 1.1 Design Direction

HobbyFind는 사용자가 취미를 부담 없이 둘러보고 관심 카테고리를 빠르게
탐색하는 서비스다.

따라서 전체 UI는 다음 키워드를 기준으로 설계한다.

  Keyword        적용 방향
  -------------- ------------------------------------------------
  Simple         불필요한 장식과 UI 요소를 최소화
  Visual         취미 카드를 이미지 중심으로 구성
  Friendly       둥근 모서리와 부드러운 인터랙션 사용
  Spacious       콘텐츠 사이에 충분한 여백 확보
  Discoverable   취미 목록을 빠르게 훑어볼 수 있는 구조
  Consistent     루트와 카테고리 페이지에서 동일한 UI 규칙 유지

------------------------------------------------------------------------

## 1.2 Brand Identity

### Brand Concept

**"Find a hobby that fits you."**

HobbyFind는 취미를 복잡하게 추천하거나 분석하는 서비스가 아니라, 다양한
취미를 시각적으로 둘러보고 관심 있는 유형을 발견할 수 있도록 돕는 탐색형
서비스다.

### Brand Personality

-   친근함
-   가벼움
-   명확함
-   현대적
-   탐색 중심

### Visual Character

Airbnb 계열의 UI에서 참고할 요소:

-   White 중심의 밝은 화면
-   콘텐츠를 돋보이게 하는 Neutral UI
-   큰 이미지 영역
-   12\~16px 수준의 부드러운 Radius
-   얇고 절제된 Border
-   Hover 시 과도하지 않은 시각 피드백
-   넓은 콘텐츠 여백
-   강한 장식보다 Typography와 이미지로 위계 표현

------------------------------------------------------------------------

# 2. UI Key Visual

## 2.1 기본 화면 인상

``` text
┌──────────────────────────────────────────────┐
│ HobbyFind       운동형   지능형   예술형      │
├──────────────────────────────────────────────┤
│                                              │
│  새로운 취미를 발견해보세요                   │
│  나에게 맞는 다양한 취미를 둘러보세요.        │
│                                              │
│  [ 운동형 ] [ 지능형 ] [ 예술형 ]             │
│                                              │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ │
│  │ IMAGE  │ │ IMAGE  │ │ IMAGE  │ │ IMAGE  │ │
│  │        │ │        │ │        │ │        │ │
│  └────────┘ └────────┘ └────────┘ └────────┘ │
│   조깅/러닝    요가       수영       자전거     │
│                                              │
└──────────────────────────────────────────────┘
```

핵심은 **UI보다 취미 콘텐츠가 먼저 보이는 구조**다.

------------------------------------------------------------------------

# 3. TailwindCSS 색상 팔레트 (Color Palette)

Airbnb의 색상을 그대로 복제하지 않고 HobbyFind 전용 컬러 시스템을
정의한다.

## 3.1 Core Palette

  Token           HEX         용도
  --------------- ----------- ----------------------
  `brand-500`     `#FF5A6F`   Primary Brand
  `brand-600`     `#E9485D`   Hover / Active
  `brand-50`      `#FFF1F3`   Selected Background
  `ink-950`       `#222222`   Primary Text
  `ink-700`       `#484848`   Secondary Text
  `ink-500`       `#717171`   Supporting Text
  `line-200`      `#DDDDDD`   Border
  `surface-100`   `#F7F7F7`   Secondary Background
  `surface-0`     `#FFFFFF`   Main Background

### Tailwind 설정 예시

``` ts
colors: {
  brand: {
    50: '#FFF1F3',
    500: '#FF5A6F',
    600: '#E9485D',
  },

  ink: {
    950: '#222222',
    700: '#484848',
    500: '#717171',
  },

  line: {
    200: '#DDDDDD',
  },

  surface: {
    0: '#FFFFFF',
    100: '#F7F7F7',
  },
}
```

------------------------------------------------------------------------

# 4. Semantic Color

컬러는 실제 컴포넌트에서 의미 기반으로 사용한다.

  UI                   Color
  -------------------- ---------------
  Page Background      `surface-0`
  Section Background   `surface-100`
  Primary Text         `ink-950`
  Secondary Text       `ink-700`
  Supporting Text      `ink-500`
  Default Border       `line-200`
  Brand Accent         `brand-500`
  Active Category      `brand-500`
  Active Category BG   `brand-50`

### 기본 클래스

``` html
<body class="bg-white text-[#222222]">
```

------------------------------------------------------------------------

# 5. Typography

Typography는 장식보다 **가독성과 정보 위계**를 우선한다.

권장 Font Stack:

``` css
font-family:
  Pretendard,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

## Type Scale

  Style             Mobile   Desktop   Weight
  --------------- -------- --------- --------
  Hero Title          32px      48px      700
  Page Title          28px      36px      700
  Section Title       22px      28px      600
  Card Title          16px      16px      600
  Body                15px      16px      400
  Caption             13px      14px      400

### Hero Example

``` html
<h1 class="
  text-3xl
  md:text-4xl
  lg:text-5xl
  font-bold
  tracking-tight
  text-[#222222]
">
  새로운 취미를 발견해보세요
</h1>
```

------------------------------------------------------------------------

# 6. Spacing System

기본 단위는 TailwindCSS의 4px spacing scale을 따른다.

주요 spacing:

  사용 위치             권장
  --------------------- ---------------------------
  Card Gap              `gap-5 ~ gap-6`
  Section Gap           `py-12 md:py-16 lg:py-20`
  Page Horizontal       `px-5 md:px-8 lg:px-10`
  Header Height         약 72\~80px
  Title → Description   `mt-3`
  Header → Grid         `mt-8 ~ mt-10`

페이지 최대 폭:

``` html
<div class="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
```

------------------------------------------------------------------------

# 7. Border Radius

부드럽지만 지나치게 둥글지 않은 형태를 사용한다.

  Component                     Radius
  ----------------------------- ----------------
  Hobby Image                   `rounded-xl`
  Card                          `rounded-xl`
  Filter                        `rounded-full`
  Navigation Interactive Area   `rounded-full`

``` html
rounded-xl
```

또는

``` html
rounded-2xl
```

카드 이미지에는 프로젝트 전체에서 하나의 radius 규칙을 선택해 일관되게
적용한다.

------------------------------------------------------------------------

# 8. Page Implementations

# 8.1 Root Page

구조:

``` text
Root
│
├── Top Bar
│
├── Hero
│   ├── Title
│   └── Description
│
├── Category Filter
│   ├── 운동형
│   ├── 지능형
│   └── 예술형
│
└── Hobby Grid
    └── Hobby Card × 18
```

------------------------------------------------------------------------

## 8.2 Hero Section

Hero는 지나치게 큰 프로모션 배너 형태보다 **텍스트 중심의 간결한 소개
영역**으로 구성한다.

### Layout

``` text
Title
Description
```

Desktop:

-   콘텐츠 폭 전체 사용
-   텍스트 최대 너비 약 640\~720px
-   충분한 상하 여백 확보

Mobile:

-   좌측 정렬
-   제목 크기 축소
-   문장 길이가 화면을 넘지 않도록 처리

### Example

``` html
<section class="py-12 md:py-16 lg:py-20">
  <div class="max-w-2xl">
    <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
      새로운 취미를 발견해보세요
    </h1>

    <p class="mt-4 text-base md:text-lg text-[#717171]">
      운동부터 예술까지 다양한 취미를 둘러보세요.
    </p>
  </div>
</section>
```

------------------------------------------------------------------------

# 9. Top Bar

## Structure

``` text
TopBar
├── Logo
└── Category Navigation
    ├── 운동형
    ├── 지능형
    └── 예술형
```

Desktop 예시:

``` text
HobbyFind                 운동형   지능형   예술형
```

### Style

-   White Background
-   Bottom Border 사용 가능
-   Shadow는 기본적으로 사용하지 않거나 매우 약하게 사용
-   콘텐츠 최대 너비는 Main Content와 동일하게 정렬
-   로고와 Navigation 사이 충분한 공간 확보

``` html
<header class="border-b border-[#DDDDDD] bg-white">
  <div class="
    mx-auto
    flex
    h-20
    max-w-7xl
    items-center
    justify-between
    px-5
    md:px-8
    lg:px-10
  ">
  </div>
</header>
```

------------------------------------------------------------------------

# 10. Category Filter

필터는 Pill 형태의 가벼운 Navigation UI로 구성한다.

### Default

``` html
class="
  rounded-full
  px-4
  py-2.5
  text-sm
  font-medium
  text-[#484848]
  transition-colors
  hover:bg-[#F7F7F7]
"
```

### Selected

``` html
class="
  rounded-full
  bg-[#222222]
  px-4
  py-2.5
  text-sm
  font-semibold
  text-white
"
```

또는 브랜드 강조가 필요한 경우:

``` html
bg-brand-500 text-white
```

### Interaction

``` text
Default
   ↓ hover
Soft Background
   ↓ click
Category Page 이동
   ↓
Selected State
```

검색 기능은 현재 서비스 범위에 포함되지 않으므로 Search Input은 구성하지
않는다.

------------------------------------------------------------------------

# 11. Hobby Card

카드는 HobbyFind의 가장 중요한 콘텐츠 컴포넌트다.

## Structure

``` text
HobbyCard
│
├── Image
│
└── Content
    └── Hobby Name
```

불필요한 Badge, 버튼, 설명, 평점 등은 추가하지 않는다.

### Image

권장 비율:

``` text
4 : 3
```

또는 카드가 조금 더 시각적으로 강조되는 경우:

``` text
1 : 1
```

프로젝트에서는 하나의 비율을 선택하여 전체 카드에 동일하게 적용한다.

### Example

``` html
<article class="group cursor-default">
  <div class="
    aspect-[4/3]
    overflow-hidden
    rounded-xl
    bg-[#F7F7F7]
  ">
    <img
      class="
        h-full
        w-full
        object-cover
        transition-transform
        duration-300
        ease-out
        group-hover:scale-[1.02]
      "
    />
  </div>

  <h3 class="mt-3 text-base font-semibold text-[#222222]">
    조깅/러닝
  </h3>
</article>
```

------------------------------------------------------------------------

# 12. Card Interaction

카드 자체에는 상세 페이지 이동 기능이 정의되어 있지 않다.

따라서 과도하게 클릭 가능한 UI처럼 표현하지 않는다.

### Desktop

이미지에만 매우 미세한 Hover feedback 적용:

``` text
Scale 1.00
   ↓
Scale 1.02
```

Duration:

``` text
200~300ms
```

### 금지

``` text
Large Scale
Strong Shadow
Bounce
Large Translate
Aggressive Animation
```

카드 Hover는 콘텐츠 탐색의 생동감을 주는 정도로 제한한다.

------------------------------------------------------------------------

# 13. Hobby Grid

Desktop에서 콘텐츠 탐색성이 높은 4열 구성을 기본으로 권장한다.

``` html
<div class="
  grid
  grid-cols-1
  gap-x-6
  gap-y-8
  sm:grid-cols-2
  lg:grid-cols-3
  xl:grid-cols-4
">
```

### Layout 변화

``` text
Mobile
1 Column

↓

Small
2 Columns

↓

Large
3 Columns

↓

XL
4 Columns
```

------------------------------------------------------------------------

# 14. Category Page

카테고리 페이지는 Hero 대신 간결한 Category Header를 사용한다.

``` text
Category Page
│
├── Top Bar
│
├── Category Header
│   ├── Category Title
│   └── Description
│
└── Hobby Grid
    └── Hobby Card × 6
```

### Example

``` html
<section class="py-10 md:py-14">
  <h1 class="text-3xl md:text-4xl font-bold tracking-tight">
    운동형
  </h1>

  <p class="mt-3 text-[#717171]">
    몸을 움직이며 즐길 수 있는 취미를 둘러보세요.
  </p>
</section>
```

Root와 동일한 HobbyCard / HobbyGrid를 재사용한다.

------------------------------------------------------------------------

# 15. Layout Components

## Component Structure

``` text
App Layout
│
├── TopBar
│   ├── Logo
│   └── CategoryNavigation
│
└── Page
    │
    ├── Hero
    │      OR
    ├── CategoryHeader
    │
    └── HobbyGrid
           └── HobbyCard
```

### Reusable Components

  Component              Root   Category   Reusable
  -------------------- ------ ---------- ----------
  TopBar                    O          O          O
  Logo                      O          O          O
  CategoryNavigation        O          O          O
  Hero                      O          X         \-
  CategoryHeader            X          O          O
  HobbyGrid                 O          O          O
  HobbyCard                 O          O          O

------------------------------------------------------------------------

# 16. Footer

현재 요구사항에는 Footer에 제공해야 하는 별도의 콘텐츠 또는 링크가
정의되어 있지 않다.

따라서 기본 구현에서는 Footer를 구성하지 않는다.

``` text
Footer: Not Included
```

요구사항에 없는 회사 정보, SNS, Help, About 등의 링크를 임의로 추가하지
않는다.

------------------------------------------------------------------------

# 17. Interaction Patterns

## 17.1 Navigation Hover

``` html
transition-colors duration-200
```

Desktop:

``` text
Default
→ Hover Background
→ Click
→ Route Change
```

Mobile:

``` text
Default
→ Tap
→ Route Change
```

모바일에서는 Hover 상태에 의존하지 않는다.

------------------------------------------------------------------------

## 17.2 Filter Selection

Default:

``` text
Text + Transparent BG
```

Hover:

``` text
Light Gray BG
```

Selected:

``` text
Dark or Brand BG + White Text
```

Selected 상태는 색상만으로 지나치게 미묘하게 표현하지 않고 Background와
Text Contrast를 함께 변경한다.

------------------------------------------------------------------------

# 18. Page Transition

페이지 전환 애니메이션은 최소화한다.

카테고리 선택 후 페이지 이동 시 콘텐츠 자체를 과도하게 슬라이드하거나
확대하지 않는다.

필요한 경우 콘텐츠 영역에 짧은 Fade 수준만 사용한다.

``` css
duration-200
ease-out
```

권장:

``` text
Opacity 0 → 1
150~200ms
```

------------------------------------------------------------------------

# 19. Responsive Breakpoints

TailwindCSS 기본 breakpoint를 기준으로 한다.

  Breakpoint          Width 주요 대상
  ------------ ------------ ---------------
  Default         `< 640px` Mobile
  `sm`            `≥ 640px` Large Mobile
  `md`            `≥ 768px` Tablet
  `lg`           `≥ 1024px` Small Desktop
  `xl`           `≥ 1280px` Desktop
  `2xl`          `≥ 1536px` Large Desktop

------------------------------------------------------------------------

# 20. Responsive Layout Rules

## Mobile `< 640px`

``` text
Top Bar
Logo
Category Navigation

Hero
Title
Description

Hobby Grid
[ Card ]
[ Card ]
[ Card ]
```

-   Page Padding: `px-5`
-   Grid: 1 column
-   Hero Title: 32px
-   Category Navigation은 가용 폭 안에서 명확하게 표시
-   Hover 효과에 의존하지 않음

------------------------------------------------------------------------

## sm `≥ 640px`

``` text
Hobby Grid

[ Card ] [ Card ]
[ Card ] [ Card ]
```

``` html
sm:grid-cols-2
```

------------------------------------------------------------------------

## md `≥ 768px`

-   Page Padding 증가
-   Hero Typography 확대
-   Top Bar 여백 확대
-   2열 유지 또는 콘텐츠 폭에 따라 자연스럽게 확장

``` html
md:px-8
```

------------------------------------------------------------------------

## lg `≥ 1024px`

``` text
[ Card ] [ Card ] [ Card ]
[ Card ] [ Card ] [ Card ]
```

``` html
lg:grid-cols-3
```

------------------------------------------------------------------------

## xl `≥ 1280px`

``` text
[ Card ] [ Card ] [ Card ] [ Card ]
[ Card ] [ Card ] [ Card ] [ Card ]
```

``` html
xl:grid-cols-4
```

------------------------------------------------------------------------

## 2xl `≥ 1536px`

카드 수를 무조건 늘리기보다 콘텐츠 최대 너비를 제한한다.

``` html
max-w-7xl mx-auto
```

넓은 모니터에서도 카드가 지나치게 넓어지거나 콘텐츠가 화면 전체로 퍼지지
않도록 한다.

------------------------------------------------------------------------

# 21. Responsive Component Matrix

  Component             Mobile          Tablet       Desktop
  --------------------- --------------- ------------ --------------
  Top Bar               Compact         Standard     Standard
  Category Navigation   Tap 중심        Tap/Click    Hover/Click
  Hero Title            32px            36\~40px     48px
  Grid                  1 Column        2 Columns    3\~4 Columns
  Card Image            Full Width      Grid Width   Grid Width
  Horizontal Padding    20px            32px         40px
  Hover                 사용하지 않음   제한적       사용
  Max Content Width     Fluid           Fluid        1280px 수준

------------------------------------------------------------------------

# 22. Accessibility & UI Quality

추가 기능이 아닌 기본 UI 품질 기준으로 다음 원칙을 적용한다.

### Contrast

텍스트는 White 배경에서 충분한 명도 대비를 확보한다.

Primary:

``` text
#222222
```

Secondary:

``` text
#717171
```

### Focus

키보드로 Category Navigation을 이동할 때 Focus 상태를 확인할 수 있어야
한다.

예:

``` html
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-[#222222]
focus-visible:ring-offset-2
```

### Touch Target

모바일의 Navigation 항목은 최소 약 44px 수준의 터치 영역을 확보한다.

``` html
min-h-11
```

------------------------------------------------------------------------

# 23. Do / Don't

## DO

-   충분한 White Space 사용
-   취미 이미지 중심 구성
-   일관된 Card Radius
-   간결한 Typography
-   얇은 Border
-   미세한 Hover
-   명확한 Selected State
-   동일한 Grid 규칙 재사용

## DON'T

-   강한 Gradient 남용
-   과도한 Shadow
-   Glassmorphism
-   지나친 Animation
-   카드마다 다른 Radius
-   복잡한 Background Pattern
-   여러 Accent Color 혼용
-   요구사항에 없는 Badge / Rating / Favorite UI 추가

------------------------------------------------------------------------

# 24. TailwindCSS 핵심 스타일 요약

## Page Container

``` html
class="mx-auto max-w-7xl px-5 md:px-8 lg:px-10"
```

## Top Bar

``` html
class="border-b border-[#DDDDDD] bg-white"
```

## Hero

``` html
class="py-12 md:py-16 lg:py-20"
```

## Hero Title

``` html
class="
  text-3xl
  md:text-4xl
  lg:text-5xl
  font-bold
  tracking-tight
  text-[#222222]
"
```

## Category Filter

``` html
class="
  rounded-full
  px-4
  py-2.5
  text-sm
  font-medium
  transition-colors
  duration-200
"
```

## Grid

``` html
class="
  grid
  grid-cols-1
  gap-x-6
  gap-y-8
  sm:grid-cols-2
  lg:grid-cols-3
  xl:grid-cols-4
"
```

## Card Image

``` html
class="
  aspect-[4/3]
  overflow-hidden
  rounded-xl
  bg-[#F7F7F7]
"
```

## Card Image Interaction

``` html
class="
  h-full
  w-full
  object-cover
  transition-transform
  duration-300
  ease-out
  group-hover:scale-[1.02]
"
```

------------------------------------------------------------------------

# 25. Final Visual Direction

HobbyFind의 최종 화면은 다음과 같은 인상을 목표로 한다.

``` text
Bright
+
Spacious
+
Image First
+
Clear Typography
+
Soft Rounded UI
+
Minimal Interaction
```

Airbnb에서 참고하는 핵심은 특정 화면이나 컴포넌트를 복제하는 것이 아니라
**콘텐츠가 중심이 되는 넓은 레이아웃, 친근한 형태, 명확한 정보 위계,
절제된 인터랙션**이다.

HobbyFind에서는 이를 18개의 취미 콘텐츠를 빠르고 편안하게 탐색하는
경험에 맞춰 적용한다.

------------------------------------------------------------------------

# 26. Scope Limitation

본 디자인 가이드는 기존 HobbyFind 요구사항에 정의된 UI만 다룬다.

포함:

-   Top Bar
-   Logo
-   Category Navigation / Filter
-   Hero
-   Category Header
-   Hobby Grid
-   Hobby Card
-   Responsive Layout
-   UI Interaction

미포함:

-   검색 UI
-   로그인 / 회원가입
-   추천
-   개인화
-   좋아요 / 즐겨찾기
-   저장
-   리뷰 / 평점
-   취미 상세 페이지
-   별도 Footer 콘텐츠
-   요구사항에 정의되지 않은 추가 UI 및 기능
