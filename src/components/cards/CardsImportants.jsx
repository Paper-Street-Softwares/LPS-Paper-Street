import React from 'react'
import imgIcon from '../../assets/imgs/icons/exclamation.webp'
import MotionDivDownToUp from '../animation/MotionDivDownToUp'

function CardsImportants({ title, paragraph, colorMode, className }) {
  //precisa fazer colorMode
  let bgCircle, bgCircleHover, bgCard, titleMode, description
  switch (colorMode) {
    case 'light':
      bgCard = 'bg-terciary hover:bg-primaryDark'
      bgCircle = 'bg-primaryDark'
      bgCircleHover =
        'group-hover:bg-white group-hover:border-2 group-hover:border-black'
      titleMode = 'text-corTitulosPreto group-hover:text-corTitulosBranca'
      description =
        'text-corOutrosTextosPreto group-hover:text-corOutrosTextosBranca'
      break
    case 'dark':
      // bgCard = 'bg-black hover:bg-primaryDark'
      bgCard = 'bg-black'
      bgCircle = 'bg-dark'
      // bgCircleHover =
      //   'group-hover:bg-primaryDark group-hover:border-2 border-primaryLight group-hover:border-black'
      bgCircleHover = ' border-primaryLight'
      titleMode = 'text-corTitulosBranca group-hover:text-corTitulosBranca'
      description =
        'text-corOutrosTextosBranca group-hover:text-corOutrosTextosBranca'
      break
    default:
      bgCard = 'bg-white hover:bg-black'
      bgCircle = 'bg-primaryDark'
      bgCircleHover =
        'group-hover:bg-white group-hover:border-2 group-hover:border-black'
      titleMode = 'text-corTitulosPreto group-hover:text-corTitulosBranca'
      description =
        'text-corOutrosTextosBranca group-hover:text-corOutrosTextosBranca'
  }
  return (
    <MotionDivDownToUp>
      <div
        className={`relative h-fit shadow-lg max-w-[400px] py-12 px-10 rounded-[18px] flex flex-col gap-4 font-secondFont group transition-all duration-700 ${className ?? bgCard} `}
      >
        <h1
          className={`text-start font-bold duration-700 ${className ?? titleMode}`}
        >
          {title}
        </h1>
        <p className={`text-start ${description} duration-700`}>{paragraph}</p>

        <div
          className={`absolute border-2 duration-700 transition-all rounded-full p-3 -top-6 left-6 ${bgCircle} ${bgCircleHover}`}
        >
          <img
            src={imgIcon}
            width={32}
            height={32}
            alt="Ícone de exclamação"
            // className="w-8 group-hover:invert duration-700 transition-all"
            className="w-8 duration-700 transition-all"
          />
        </div>
      </div>
    </MotionDivDownToUp>
  )
}

export default CardsImportants
