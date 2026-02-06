# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

버킷 리스트 관리 웹 애플리케이션. 프레임워크 없이 순수 Vanilla JavaScript로 구현된 정적 웹앱.

## Running the Project

```bash
# Python 간이 서버
python -m http.server 8000

# 또는 VS Code Live Server 사용
# index.html 우클릭 → "Open with Live Server"
```

빌드 과정 없음. `index.html`을 브라우저에서 직접 열어도 동작.

## Architecture

### 모듈 구조

- **js/storage.js** - `BucketStorage` 객체: LocalStorage CRUD, 필터링, 통계 계산
- **js/app.js** - `BucketListApp` 클래스: DOM 이벤트 핸들링, UI 렌더링, 모달 관리

### 데이터 흐름

```
User Event → app.js (Event Handler) → storage.js (Data Layer) → LocalStorage
                                   ↓
                              app.render() → DOM Update
```

### 데이터 모델

```javascript
{
  id: string,           // timestamp 기반 고유 ID
  title: string,        // 버킷 리스트 제목
  completed: boolean,   // 완료 여부
  createdAt: string,    // ISO 날짜
  completedAt: string | null
}
```

## Key Patterns

- **DOM 캐싱**: `cacheElements()`에서 DOM 요소를 인스턴스 변수로 저장하여 재조회 방지
- **인라인 이벤트**: 동적 생성 요소는 `onclick` 속성으로 이벤트 바인딩
- **XSS 방지**: `escapeHtml()` 메서드로 사용자 입력 이스케이프

## Tech Stack

- HTML5, CSS3, JavaScript ES6+
- Tailwind CSS (CDN)
- LocalStorage API (서버/DB 없음)
