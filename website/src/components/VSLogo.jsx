import React from 'react'
import { Link } from 'react-router-dom'

const VSLogo = ({ size = 40, linkTo = '/' }) => {
  const LogoContent = () => (
    <div className="flex items-center gap-3">
      <img
        src="/logo.png"
        alt="VS Security logo"
        style={{ width: size, height: size * 1.15, objectFit: 'contain' }}
      />
      <div className="leading-none">
        <div className="font-syne font-bold text-lg text-white tracking-wide">
          VS SECURITY
        </div>
        <div className="font-mono text-[9px] text-vs-yellow tracking-[0.2em] mt-0.5 opacity-80">
          WHERE QUALITY SPEAKS
        </div>
      </div>
    </div>
  )

  if (linkTo) {
    return (
      <Link to={linkTo} className="flex-shrink-0 focus-vs">
        <LogoContent />
      </Link>
    )
  }

  return <LogoContent />
}

export default VSLogo
