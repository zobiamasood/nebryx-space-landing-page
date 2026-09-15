import brandLogoImage from '../assets/logo.jpeg'
import brandNameImage from '../assets/brand name .jpeg'

const Logo = ({ size = 'medium', className = '' }) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
    xl: 'w-24 h-24'
  }

  const brandNameClasses = {
    small: 'w-20',
    medium: 'w-28',
    large: 'w-36',
    xl: 'w-44'
  }

  return (
    <div className={`logo-container flex items-center gap-3 ${className}`}>
      <img
        src={brandLogoImage}
        alt="Nebryx Solutions logo"
        className={`logo-image ${sizeClasses[size]} object-contain rounded-2xl shadow-[0_15px_45px_rgba(8,15,28,0.45)]`}
      />
      <img
        src={brandNameImage}
        alt="Nebryx Solutions"
        className={`brand-name-image h-auto ${brandNameClasses[size]} object-contain`}
      />
    </div>
  )
}

export default Logo