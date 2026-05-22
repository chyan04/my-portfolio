import { FaGithub, FaPlay } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import projects from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="section fade-section">

      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">

            {/* 썸네일 */}
            <img
              src={project.image}
              alt={project.title + ' 썸네일'}
              className="project-thumbnail"
            />

            {/* 기간 / 역할 */}
            <div className="project-meta">
              <span>{project.period}</span>
              <span>{project.role}</span>
            </div>

            {/* 제목 */}
            <h3>{project.title}</h3>

            {/* 설명 */}
            <p>{project.description}</p>

            {/* 태그 */}
            <div className="project-tags">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex}>{tag}</span>
              ))}
            </div>

            {/* 버튼 */}
            <div className="project-buttons">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={project.title + ' GitHub 저장소'}
                >
                  <FaGithub />
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={project.title + ' 데모 또는 영상 보기'}
                >
                  {project.tags.includes('2D') ? <FaPlay /> : <FiExternalLink />}
                  {project.tags.includes('2D') ? '플레이 영상' : '데모 보기'}
                </a>
              )}
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Projects
