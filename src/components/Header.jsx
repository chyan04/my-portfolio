import { useState, useEffect } from 'react'

// 네비게이션 섹션 목록
const navItems = ['about', 'skills', 'projects', 'contact']

function Header() {
  const [active, setActive] = useState('')

  useEffect(() => {
    // 각 섹션의 진입 여부를 감지하여 활성 메뉴 업데이트
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    navItems.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* 로고 */}
        <a href="#" className="logo">CHYAN</a>

        {/* 네비게이션 링크 */}
        <div className="nav-links">
          {navItems.map((id) => (
            <a
              key={id}
              href={'#' + id}
              className={active === id ? 'nav-active' : ''}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>

      </div>
    </nav>
  )
}

export default Header
