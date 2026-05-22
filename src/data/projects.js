import portfolioImage from '../assets/portfolio.png'
import weaponImage from '../assets/weaponchallenger.png'
import springImage from '../assets/springmvc.png'

const projects = [
  {
    title: "Portfolio Website",
    description:
      "React + Vite 기반의 개인 포트폴리오 웹사이트. 마우스 인터랙션, 스크롤 페이드 애니메이션, 모바일 반응형을 직접 구현했습니다.",
    period: "2025.04 — 진행중",
    role: "개인 프로젝트",
    image: portfolioImage,
    github: "https://github.com/chyan04/chyan_portfolio",
    demo: "https://chyan04.github.io/chyan_portfolio/",
    tags: ["React", "Vite", "CSS"],
  },
  {
    title: "Weapon Challenger",
    description:
      "Unity 엔진 기반 2D 플랫포머 액션 게임. 2인 팀 프로젝트로 게임 로직 전반을 담당하여 개발했습니다.",
    period: "2개월",
    role: "2인팀 · 게임 개발 담당",
    image: weaponImage,
    github: null,
    demo: "https://www.youtube.com/watch?v=hwaIeE9Tnis",
    tags: ["Unity", "C#", "2D", "Platform"],
  },
  {
    title: "Spring MVC Community",
    description:
      "Java + Spring MVC 기반 풀스택 커뮤니티 플랫폼. Spring Security 인증, 게시판 CRUD, WebSocket 실시간 채팅 등을 개인 개발했습니다.",
    period: "2개월",
    role: "개인 프로젝트",
    image: springImage,
    github: "https://github.com/chyan04/Spring-MVC",
    demo: null,
    tags: ["Java", "Spring", "MySQL", "JSP", "WebSocket"],
  },
]

export default projects