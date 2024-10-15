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
      title: 'A Search Engine',
      description: `What if you could look up any information in the world? Webpages, images, videos
        and more. Google has many features to help you find exactly what you're looking
        for.`,
      imgSrc: '/static/images/google.png',
      href: 'https://www.google.com',
    },
    {
      title: 'The Time Machine',
      description: `Imagine being able to travel back in time or to the future. Simple turn the knob
        to the desired date and press "Go". No more worrying about lost keys or
        forgotten headphones with this simple yet affordable solution.`,
      imgSrc: '/static/images/time-machine.jpg',
      href: '/blog/the-time-machine',
    },
  ],

  ko: [
    {
      title: '기술 블로그 및 포트폴리오 사이트',
      description: `제 개인적인 생각, 경험, 인사이트 등을 공유하고 새로운 기술을 실험하고 적용하려고 만든 프로젝트 입니다.
      Typescript, Next.js (App router), Tailwind를 주로 사용해서 사이트를 구성했습니다.`,
      imgSrc: '/static/images/scshot-jenolog.png',
      href: 'https://jenolog.com',
    },
    {
      title: '중고나라 웹 서비스',
      description: `프로젝트 생성, 리팩토링, 레거시 제거, 초기 설정, CI/CD 파이프라인 구축, SEO 최적화, 앱 universal link / deep link 연동 등 담당했습니다.
      사용한 기술 스택: Typescript, Next.js, Recoil, React Query, Tailwind CSS`,
      imgSrc: '/static/images/joonggonara.png',
      href: 'https://web.joongna.com',
    },
  ],
}

export default projectsData
