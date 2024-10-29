type Project = {
  title: string
  description: string
  imgSrc: string
  href: string
}

type ProjectsData = {
  [locale: string]: Project[]
}

const projectsData: ProjectsData = {
  en: [
    {
      title: 'Tech Blog and Portfolio Site',
      description: `This project was created to share my personal thoughts, experiences, insights, and to test new technologies.
      The site is mainly built using Typescript, Next.js (App Router), and Tailwind.`,
      imgSrc: 'blog/scshot-jenolog_ekvmy2.png',
      href: 'https://jenolog.com',
    },
    {
      title: 'Joonggonara Web Service',
      description: `I was responsible for project creation, refactoring, removing legacy code, initial setup, building the CI/CD pipeline, SEO optimization, performance optimization, and integrating the app with universal links / deep links.
      Tech stack used: Typescript, React, Next.js, Recoil, React Query, Tailwind CSS, AWS`,
      imgSrc: 'blog/joonggonara_wicoyq.png',
      href: 'https://web.joongna.com',
    },
    {
      title: 'Joonggonara App Webview',
      description: `I was responsible for maintaining, refactoring, removing legacy code, optimizing performance, and integrating the app with universal links / deep links for payment/event/FAQ/user pages.
      Tech stack used: Typescript, Recoil, React Query, Emotion, AWS`,
      imgSrc: 'blog/joonggonara_wicoyq.png',
      href: 'https://apps.apple.com/kr/app/%EC%A4%91%EA%B3%A0%EB%82%98%EB%9D%BC-%EA%B5%AD%EB%82%B4-%EC%B5%9C%EB%8C%80-%EC%A4%91%EA%B3%A0%EB%A7%88%EC%BC%93/id896515652',
    },
    {
      title: 'Vanity Table',
      description: `I was responsible for development maintenance, SEO optimization, performance optimization, and developing a Shopify app for order/inventory management.
      Tech stack used: Javascript, Node.js, Jquery, Shopify, Liquid`,
      imgSrc: 'blog/vntable_uj2oua.png',
      href: 'https://vanity-table.com',
    },
    {
      title: 'Fingersuit US/JP',
      description: `I was responsible for development maintenance, SEO optimization, and performance optimization.
      Tech stack used: Javascript, Jquery, Shopify, Liquid`,
      imgSrc: 'blog/fingersuitOgImg_hfy9yu.png',
      href: 'https://fingersuit.com',
    },
    {
      title: 'Andar Global',
      description: `I was responsible for development maintenance, SEO optimization, and performance optimization.
      Tech stack used: Javascript, Jquery, Shopify, Liquid`,
      imgSrc: 'blog/andar_hzdgxs.png',
      href: 'https://andar-global.com',
    },
  ],

  ko: [
    {
      title: '기술 블로그 및 포트폴리오 사이트',
      description: `제 개인적인 생각, 경험, 인사이트 등을 공유하고 새로운 기술을 테스트 하려고 만든 프로젝트 입니다.
      Typescript, Next.js (App router), Tailwind를 주로 사용해서 사이트를 구성했습니다.`,
      imgSrc: '/blog/scshot-jenolog_ekvmy2.png',
      href: 'https://jenolog.com',
    },
    {
      title: '중고나라 웹 서비스',
      description: `프로젝트 생성, 리팩토링, 레거시 제거, 초기 설정, CI/CD 파이프라인 구축, SEO 최적화, 성능 최적화, 앱 universal link / deep link 연동 등 담당했습니다.
      사용한 기술 스택: Typescript, React, Next.js, Recoil, React Query, Tailwind CSS, AWS`,
      imgSrc: 'blog/joonggonara_wicoyq.png',
      href: 'https://web.joongna.com',
    },
    {
      title: '중고나라 앱 웹뷰',
      description: `결제/이벤트/FAQ/유저 페이지 유지보수, 리팩토링, 레거시 제거, 성능 최적화, 앱 universal link / deep link 연동 등 담당했습니다.
      사용한 기술 스택: Typescript, Recoil, React Query, Emotion, AWS`,
      imgSrc: 'blog/joonggonara_wicoyq.png',
      href: 'https://apps.apple.com/kr/app/%EC%A4%91%EA%B3%A0%EB%82%98%EB%9D%BC-%EA%B5%AD%EB%82%B4-%EC%B5%9C%EB%8C%80-%EC%A4%91%EA%B3%A0%EB%A7%88%EC%BC%93/id896515652',
    },
    {
      title: 'Vanity Table',
      description: `개발 유지보수, SEO 최적화, 성능 최적화, 주문/재고 관리 Shopify 앱 개발을 담당했습니다. 
      사용한 기술 스택: Javascript, Node.js, Jquery, Shopify, Liquid`,
      imgSrc: 'blog/vntable_uj2oua.png',
      href: 'https://vanity-table.com',
    },
    {
      title: 'Fingersuit US/JP',
      description: `개발 유지보수, SEO 최적화, 성능 최적화를 담당했습니다. 
      사용한 기술 스택: Javascript, Jquery, Shopify, Liquid`,
      imgSrc: 'blog/fingersuitOgImg_hfy9yu.png',
      href: 'https://fingersuit.com',
    },
    {
      title: 'Andar Global',
      description: `개발 유지보수, SEO 최적화, 성능 최적화를 담당했습니다. 
      사용한 기술 스택: Javascript, Jquery, Shopify, Liquid`,
      imgSrc: 'blog/andar_hzdgxs.png',
      href: 'https://andar-global.com',
    },
  ],
}

export default projectsData
