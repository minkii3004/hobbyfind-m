# HobbyFind IA (Information Architecture)

> 서비스명: **HobbyFind**\
> 서비스 타입: **웹서비스**\
> 이용 조건: **비로그인 사용자도 모든 주요 기능 이용 가능**\
> 구현 가정: **Next.js 기반 웹서비스**

------------------------------------------------------------------------

## 1. IA 설계 원칙

> **구현 현황 메모 (2026-09-29 기준)**\
> 카테고리 전용 페이지(`/exercise`, `/intelligence`, `/art`)는 아직 구현되지
> 않았으며, 루트 페이지의 카테고리 탭 필터(전체/운동형/지능형/예술형)가 그
> 역할을 대신한다. 이에 따라 Top Bar에는 로고만 배치한다. 추가 구현된
> 취미 상세 페이지(`/hobbies/[id]`)는 아래 각 절에 반영되어 있다.

HobbyFind의 IA는 사용자가 전체 취미를 탐색하거나, 관심 있는 카테고리를
선택하여 해당 유형의 취미만 빠르게 확인할 수 있도록 단순한 계층 구조로
구성한다.

핵심 구조는 다음과 같다.

-   루트 페이지에서 전체 18개 취미 탐색
-   Top Bar에서 운동형·지능형·예술형 카테고리 선택
-   선택한 카테고리의 전용 페이지로 이동
-   카테고리 페이지에서 해당 카테고리의 6개 취미만 탐색
-   로그인 없이 모든 페이지 접근 가능
-   취미 카드를 선택하면 취미 상세 페이지(`/hobbies/[id]`)로 이동
-   루트 페이지에서는 전체·운동형·지능형·예술형 탭으로 목록을 필터링

------------------------------------------------------------------------

## 2. 전체 사이트맵 구조 (Site Map)

``` text
HobbyFind
│
├── 루트 페이지 (/)
│   ├── Top Bar
│   │   ├── Logo
│   │   └── Category Filter
│   │       ├── 운동형
│   │       ├── 지능형
│   │       └── 예술형
│   │
│   ├── Hero
│   │   └── 사이트 소개 문구
│   │
│   └── Main Content
│       ├── Category Tabs (전체 / 운동형 / 지능형 / 예술형)
│       └── Hobby Grid
│           └── 전체 취미 카드 18개 (카테고리 혼합 노출)
│
├── 운동형 페이지 (/exercise)
│   ├── Top Bar
│   ├── Category Header
│   │   ├── 운동형
│   │   └── 카테고리 소개 문구
│   └── Hobby Grid
│       └── 운동형 취미 카드 6개
│
├── 지능형 페이지 (/intelligence)
│   ├── Top Bar
│   ├── Category Header
│   │   ├── 지능형
│   │   └── 카테고리 소개 문구
│   └── Hobby Grid
│       └── 지능형 취미 카드 6개
│
├── 예술형 페이지 (/art)
│   ├── Top Bar
│   ├── Category Header
│   │   ├── 예술형
│   │   └── 카테고리 소개 문구
│   └── Hobby Grid
│       └── 예술형 취미 카드 6개
│
└── 취미 상세 페이지 (/hobbies/[id])
    ├── Top Bar
    ├── Back Link (전체 취미)
    ├── Hobby Overview
    │   ├── 썸네일
    │   ├── 취미명 + 선호(하트) 버튼
    │   ├── 소개 문구
    │   └── 취미 정보 (카테고리 · 난이도 · 예상 비용 · 추천 시간 · 주요 장소)
    ├── Detail Sections
    │   ├── 이런 효과가 있어요
    │   ├── 이런 분께 추천해요
    │   ├── 준비물
    │   └── 이렇게 시작해 보세요
    └── Related Hobbies (같은 카테고리의 다른 취미 5개)
```

------------------------------------------------------------------------

## 3. 페이지 계층 구조 (Page Hierarchy)

HobbyFind는 최대 2단계의 얕은 페이지 계층을 사용한다.

``` text
Level 1
└── 루트 페이지 (/)

Level 2
├── 운동형 (/exercise)
├── 지능형 (/intelligence)
├── 예술형 (/art)
└── 취미 상세 (/hobbies/[id])
```

  Level   페이지          역할
  ------- --------------- -------------------------------
  1       루트 페이지     서비스 소개 및 전체 취미 탐색
  2       운동형 페이지   운동형 취미 탐색
  2       지능형 페이지   지능형 취미 탐색
  2       예술형 페이지   예술형 취미 탐색
  2       취미 상세 페이지 선택한 취미의 상세 정보 확인

취미 카드는 Level 2의 취미 상세 페이지(`/hobbies/[id]`)로 연결되며, 그보다
깊은 하위 페이지는 생성하지 않는다.

------------------------------------------------------------------------

## 4. URL 구조 (URL Structure)

  페이지   URL               표시 데이터
  -------- ----------------- ----------------
  루트     `/`               전체 18개 취미
  운동형   `/exercise`       운동형 6개
  지능형   `/intelligence`   지능형 6개
  예술형   `/art`            예술형 6개
  상세     `/hobbies/[id]`   선택한 취미 1개 (id 18개 고정)

### URL 설계 원칙

-   각 카테고리는 고유 URL을 가진다.
-   URL 직접 접근이 가능해야 한다.
-   로그인 또는 인증 경로를 거치지 않는다.
-   카테고리 필터 선택 시 해당 URL로 이동한다.

------------------------------------------------------------------------

## 5. 사용자 흐름 (User Flow)

### 5.1 기본 탐색 흐름

``` text
[HobbyFind 진입]
        │
        ▼
[루트 페이지 /]
        │
        ├───────────────┐
        │               │
        ▼               ▼
[전체 취미 탐색]   [Top Bar 카테고리 선택]
                        │
             ┌──────────┼──────────┐
             │          │          │
             ▼          ▼          ▼
        [운동형]     [지능형]     [예술형]
       /exercise  /intelligence   /art
             │          │          │
             ▼          ▼          ▼
        취미 6개     취미 6개     취미 6개
          탐색         탐색         탐색
```

### 5.2 카테고리 간 이동

``` text
/ exercise
    │
    ├── 지능형 클릭 ──> /intelligence
    └── 예술형 클릭 ──> /art

/ intelligence
    │
    ├── 운동형 클릭 ──> /exercise
    └── 예술형 클릭 ──> /art

/ art
    │
    ├── 운동형 클릭 ──> /exercise
    └── 지능형 클릭 ──> /intelligence
```

### 5.3 루트 복귀

모든 페이지의 Top Bar에 있는 HobbyFind 로고를 통해 루트 페이지(`/`)로
이동한다.

``` text
[카테고리 페이지]
        │
        │ Logo 클릭
        ▼
[루트 페이지 /]
```

### 5.4 취미 상세 탐색

```text
[루트 / 또는 카테고리 페이지]
        │
        │ 취미 카드 클릭
        ▼
[취미 상세 /hobbies/[id]]
        │
        ├── "전체 취미" 클릭 ─────> /
        ├── Logo 클릭 ────────────> /
        ├── 하트 클릭 ────────────> 선호 취미 토글 (로컬 저장)
        └── 같은 카테고리 취미 카드 클릭 ──> /hobbies/[다른 id]
```

------------------------------------------------------------------------

## 6. 내비게이션 구조 (Navigation Structure)

### 6.1 Global Navigation

Top Bar를 전체 페이지에서 공통으로 사용하는 Global Navigation으로
정의한다.

``` text
Top Bar
├── HobbyFind Logo ───────────────> /
└── Category Filter
    ├── 운동형 ───────────────────> /exercise
    ├── 지능형 ───────────────────> /intelligence
    └── 예술형 ───────────────────> /art
```

> 현재 구현에서는 Top Bar에 로고만 두고, 카테고리 필터는 루트 페이지
> 본문의 탭(전체 / 운동형 / 지능형 / 예술형)으로 제공한다. 탭은 페이지
> 이동 없이 목록을 필터링하며 선택된 탭은 primary 컬러로 표시한다.

### 6.2 내비게이션 상태

  현재 페이지       운동형      지능형      예술형
  ----------------- ----------- ----------- -----------
  `/`               기본        기본        기본
  `/exercise`       선택 상태   기본        기본
  `/intelligence`   기본        선택 상태   기본
  `/art`            기본        기본        선택 상태

카테고리 페이지에서는 사용자가 현재 보고 있는 카테고리를 인지할 수
있도록 해당 필터를 선택 상태로 표시한다.

------------------------------------------------------------------------

## 7. 페이지별 주요 콘텐츠 구성 (Content Organization)

### 7.1 루트 페이지 `/`

``` text
Root Page
│
├── Top Bar
│   ├── Logo
│   └── Category Filter
│       ├── 운동형
│       ├── 지능형
│       └── 예술형
│
├── Hero
│   └── 사이트 소개 문구
│
└── Main Content
    └── Hobby Grid
        ├── 운동형 6개
        ├── 지능형 6개
        └── 예술형 6개
```

  영역           콘텐츠               역할
  -------------- -------------------- -----------------------------
  Top Bar        로고                 서비스 식별 및 루트 이동
  Top Bar        카테고리 필터        카테고리별 전용 페이지 이동
  Hero           소개 문구            서비스 목적 전달
  Main Content   취미 카드 18개       전체 취미 탐색
  Hobby Card     취미명 + 시각 요소   개별 취미 식별

### 7.2 운동형 페이지 `/exercise`

``` text
Exercise Page
├── Top Bar
├── Category Header
│   ├── 운동형
│   └── 소개 문구
└── Hobby Grid
    ├── 조깅/러닝
    ├── 요가
    ├── 수영
    ├── 자전거
    ├── 클라이밍
    └── 댄스
```

### 7.3 지능형 페이지 `/intelligence`

``` text
Intelligence Page
├── Top Bar
├── Category Header
│   ├── 지능형
│   └── 소개 문구
└── Hobby Grid
    ├── 독서
    ├── 퍼즐
    ├── 체스
    ├── 프로그래밍
    ├── 외국어 학습
    └── 사진 촬영
```

### 7.4 예술형 페이지 `/art`

``` text
Art Page
├── Top Bar
├── Category Header
│   ├── 예술형
│   └── 소개 문구
└── Hobby Grid
    ├── 그림 그리기
    ├── 악기 연주
    ├── 요리
    ├── 서예
    ├── 도자기 만들기
    └── 정원 가꾸기
```

------------------------------------------------------------------------

## 8. 상호작용 패턴 (Interaction Patterns)

  UI 요소              사용자 행동      시스템 반응
  -------------------- ---------------- ----------------------------------
  HobbyFind Logo       클릭             루트 페이지 `/`로 이동
  운동형 필터          클릭             `/exercise`로 이동
  지능형 필터          클릭             `/intelligence`로 이동
  예술형 필터          클릭             `/art`로 이동
  현재 카테고리 필터   페이지 진입      선택 상태로 표시
  취미 카드            탐색             취미명과 시각 요소 표시
  Hobby Grid           화면 크기 변경   화면 너비에 맞게 카드 열 수 조정
  카테고리 탭          클릭             같은 화면에서 해당 카테고리 취미만 표시
  취미 카드            클릭             `/hobbies/[id]` 상세 페이지로 이동
  하트 버튼            클릭             선호 취미 토글 (브라우저 로컬 저장)

### Interaction 원칙

-   카테고리 선택은 페이지 이동 방식으로 동작한다.
-   선택한 카테고리와 URL이 일치해야 한다.
-   카테고리 페이지에서는 해당 카테고리의 취미만 표시한다.
-   별도의 로그인 인터랙션을 요구하지 않는다.
-   취미 카드를 클릭하면 해당 취미의 상세 페이지로 이동한다.
-   하트 버튼 클릭은 페이지 이동 없이 선호 상태만 토글한다.

------------------------------------------------------------------------

## 9. 상단바 / 하단바 구조

### 9.1 상단바 --- 포함

Top Bar는 모든 페이지에 공통으로 포함한다.

``` text
Top Bar
├── Logo
└── Category Filter
    ├── 운동형
    ├── 지능형
    └── 예술형
```

  요소             기능                 노출 범위
  ---------------- -------------------- -------------
  HobbyFind Logo   루트 페이지 이동     전체 페이지
  운동형           운동형 페이지 이동   전체 페이지
  지능형           지능형 페이지 이동   전체 페이지
  예술형           예술형 페이지 이동   전체 페이지

### 9.2 하단바 --- 미포함

현재 요구사항에는 Footer 또는 Bottom Bar에서 제공해야 하는 별도 정보나
링크가 정의되어 있지 않다.

따라서 본 IA에서는 하단바를 구성하지 않는다.

------------------------------------------------------------------------

## 10. 컴포넌트 계층 구조 (Component Hierarchy)

### 10.1 전체 구조

``` text
App
│
├── RootLayout
│   └── TopBar
│       ├── Logo
│       └── CategoryNavigation
│           ├── CategoryItem: 운동형
│           ├── CategoryItem: 지능형
│           └── CategoryItem: 예술형
│
├── RootPage
│   ├── Hero
│   └── HobbyGrid
│       └── HobbyCard × 18
│
├── ExercisePage
│   ├── CategoryHeader
│   └── HobbyGrid
│       └── HobbyCard × 6
│
├── IntelligencePage
│   ├── CategoryHeader
│   └── HobbyGrid
│       └── HobbyCard × 6
│
└── ArtPage
    ├── CategoryHeader
    └── HobbyGrid
        └── HobbyCard × 6
```

### 10.2 공통 컴포넌트

  Component              사용 위치         역할
  ---------------------- ----------------- ---------------------------------
  `TopBar`               전체 페이지       Global Navigation
  `Logo`                 TopBar            서비스 식별 및 `/` 이동
  `CategoryNavigation`   TopBar            3개 카테고리 이동
  `CategoryItem`         TopBar            개별 카테고리 링크 및 선택 상태
  `Hero`                 루트              서비스 소개
  `CategoryHeader`       카테고리 페이지   카테고리명 및 소개 문구
  `HobbyGrid`            전체 페이지       취미 카드 그리드
  `HobbyCard`            HobbyGrid         개별 취미 표시 및 상세 이동
  `CategoryTabs`         루트              전체/카테고리 필터 탭
  `CategoryBadge`        HobbyCard         카드 썸네일의 카테고리 표시
  `FavoriteButton`       HobbyCard, 상세   선호 취미 하트 토글
  `HobbyDetail`          상세 페이지       취미 정보와 콘텐츠 구성
  `HobbyDetailSection`   HobbyDetail       효과/추천/준비물/팁 카드 섹션

### 10.3 상세 페이지 컴포넌트 구조

```text
HobbyDetailPage (/hobbies/[id])
└── HobbyDetail
    ├── Back Link
    ├── Overview
    │   ├── Thumbnail
    │   ├── Title + FavoriteButton
    │   ├── Description
    │   └── Info (카테고리 · 난이도 · 예상 비용 · 추천 시간 · 주요 장소)
    ├── HobbyDetailSection × 4
    │   ├── 이런 효과가 있어요
    │   ├── 이런 분께 추천해요
    │   ├── 준비물
    │   └── 이렇게 시작해 보세요
    └── Related Hobbies
        └── HobbyGrid
            └── HobbyCard × 5
```

------------------------------------------------------------------------

## 11. 콘텐츠 데이터 구조

### 11.1 카테고리

``` text
Category
├── exercise      → 운동형
├── intelligence  → 지능형
└── art           → 예술형
```

### 11.2 취미 데이터

  Category   Hobby
  ---------- ---------------
  운동형     조깅/러닝
  운동형     요가
  운동형     수영
  운동형     자전거
  운동형     클라이밍
  운동형     댄스
  지능형     독서
  지능형     퍼즐
  지능형     체스
  지능형     프로그래밍
  지능형     외국어 학습
  지능형     사진 촬영
  예술형     그림 그리기
  예술형     악기 연주
  예술형     요리
  예술형     서예
  예술형     도자기 만들기
  예술형     정원 가꾸기

취미 목록은 위 18개로 고정하며 추가하거나 변경하지 않는다.

------------------------------------------------------------------------

## 12. Next.js 구현 구조

Next.js App Router를 기준으로 다음과 같이 페이지 구조와 IA를 대응한다.

``` text
app/
├── layout.tsx                # 공통 Layout / TopBar
├── page.tsx                  # /
│
├── exercise/
│   └── page.tsx              # /exercise
│
├── intelligence/
│   └── page.tsx              # /intelligence
│
└── art/
    └── page.tsx              # /art

components/
├── TopBar.tsx
├── Logo.tsx
├── CategoryNavigation.tsx
├── Hero.tsx
├── CategoryHeader.tsx
├── HobbyGrid.tsx
└── HobbyCard.tsx

data/
└── hobbies.ts

types/
└── hobby.ts
```

### IA와 Next.js 대응

  IA 요소            Next.js 구현
  ------------------ -----------------------------
  Global Top Bar     `app/layout.tsx`
  루트 페이지        `app/page.tsx`
  운동형             `app/exercise/page.tsx`
  지능형             `app/intelligence/page.tsx`
  예술형             `app/art/page.tsx`
  공통 카드          `components/HobbyCard.tsx`
  카드 목록          `components/HobbyGrid.tsx`
  고정 취미 데이터   `data/hobbies.ts`

### 실제 구현 위치

```text
src/
├── app/
│   ├── layout.tsx                 # Top Bar + 공통 메타데이터
│   ├── page.tsx                   # / (Hero + 카테고리 탭 + 취미 그리드)
│   └── hobbies/[id]/
│       ├── layout.tsx             # 상세 페이지 메타데이터 (generateMetadata)
│       └── page.tsx               # /hobbies/[id]
└── features/
    ├── hobby/
    │   ├── components/            # Hero, CategoryTabs, HobbyGrid, HobbyCard,
    │   │                          # CategoryBadge, FavoriteButton, HobbyDetail ...
    │   ├── constants/             # hobbies.ts, categories.ts
    │   ├── hooks/                 # use-favorite-hobbies-store.ts (zustand)
    │   └── lib/                   # types, filter-hobbies, find-hobby ...
    └── navigation/components/     # TopBar, Logo
public/thumbnails/                 # 취미별 고정 썸네일 ({id}.svg)
```

------------------------------------------------------------------------

## 13. IA 범위 및 제한사항

본 IA는 요구사항에서 정의한 구조만 포함한다.

### 포함

-   루트 페이지
-   운동형 페이지
-   지능형 페이지
-   예술형 페이지
-   Top Bar
-   Hero
-   Category Header
-   카테고리 필터
-   취미 카드
-   취미 카드 그리드
-   페이지 간 카테고리 이동
-   루트 페이지 카테고리 탭 필터 (전체 포함)
-   취미 상세 페이지 (`/hobbies/[id]`)
-   선호 취미 하트 (브라우저 로컬 저장)
-   페이지 메타데이터 (title, description, keywords)

### 미포함

-   로그인 / 회원가입
-   검색
-   추천
-   개인화
-   서버 저장 기반 좋아요 / 즐겨찾기 (로컬 하트만 제공)
-   저장
-   리뷰 / 댓글
-   취미 등록 / 수정 / 삭제
-   사용자 프로필
-   관리자 페이지
-   별도 Footer 링크
-   요구사항에 정의되지 않은 추가 페이지 및 기능

------------------------------------------------------------------------

## 14. IA 요약

``` text
HobbyFind
│
│  Global Navigation
│  [Logo] [운동형] [지능형] [예술형]
│
├── /                         전체 취미 18개
│   ├── Hero
│   └── Hobby Grid
│
├── /exercise                 운동형 6개
│   ├── Category Header
│   └── Hobby Grid
│
├── /intelligence             지능형 6개
│   ├── Category Header
│   └── Hobby Grid
│
└── /art                      예술형 6개
    ├── Category Header
    └── Hobby Grid
```

HobbyFind의 정보 구조는 **전체 탐색 → 카테고리 선택 → 카테고리별
탐색**의 단순한 흐름을 중심으로 구성하며, 모든 주요 페이지는 공통 Top
Bar를 통해 상호 이동할 수 있도록 설계한다.
