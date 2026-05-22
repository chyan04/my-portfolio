// 자기소개 카드 데이터
const aboutItems = [
  {
    title: "Education",
    lines: [
      "대전보건대학교 컴퓨터정보학과 (3년제 졸업)",
      "대전보건대학교 컴퓨터정보학과 전공심화 재학중",
    ],
  },
  {
    title: "Career",
    lines: [
      "대전보건대학교 HRD 프로그램 수료",
      "Java · Spring · MySQL · WebSocket 기반 커뮤니티 플랫폼 개발",
      "(주)윌코모시스템즈 현장실습 8주 수료",
    ],
  },
  {
    title: "Interests",
    lines: [
      "Game Development",
      "Frontend · UI/UX",
      "Database Management",
    ],
  },
  {
    title: "Goal",
    lines: [
      "웹과 게임을 아우르는 풀스택 개발자로 성장하며,",
      "직접 기획한 게임을 출시하는 것을 목표로 합니다.",
    ],
  },
]

function About() {
  return (
    <section id="about" className="section fade-section">

      <h2>About</h2>

      <div className="about-grid">
        {aboutItems.map((item, index) => (
          <div key={index} className="about-card">

            {/* 카드 제목 */}
            <h3>{item.title}</h3>

            {/* 카드 내용 */}
            <div className="about-lines">
              {item.lines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default About
