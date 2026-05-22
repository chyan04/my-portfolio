import { FaReact, FaGithub } from "react-icons/fa"

function Hero() {

  return (

    <section className="hero">

      {/* 왼쪽 */}
      <div className="hero-left">

        <p className="hero-subtitle">
          FRONTEND · BACKEND · GAME DEV
        </p>

        <h1>
          CHYAN
        </h1>
        <div className="hero-buttons">
          <a
          
            href="#projects"
            className="primary-button"
            aria-label="프로젝트 섹션으로 이동"
          >
            View Projects
          </a>
          
          <a
            href="https://github.com/chyan04"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
            aria-label="GitHub 프로필 열기"
          >
            <FaGithub />
            GitHub
          </a>
        </div>

      </div>


      {/* 오른쪽 */}
      <div className="hero-right">

        <div className="react-circle">

          <FaReact className="react-icon" />

        </div>

      </div>

    </section>
  )
}

export default Hero