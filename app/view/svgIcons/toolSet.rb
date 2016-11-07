module SVGTOOL
  def SVGTOOL.border(position, rotate)
    return %Q{
      <svg width='16' heigh='16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <g transform="#{rotate}">
        <path class="cls-1" d="M91.23 19.77L114.46 60l-23.23 40.23H44.77L21.54 60l23.23-40.23h46.46M94 15H42L16 60l26 45h52l26-45-26-45z"/>
        <path id= "#{position}" class="anim_guide" d="M0 0h16v120H0z"/>
      </g>
    </svg>
    }
  end
  def SVGTOOL.center(position, change)
    return %Q{
      <svg width='16' heigh='16' xmlns="http://www.w3.org/2000/svg" viewBox="#{change[:viewbox]}">
        <g transform="#{change[:rotate]}">
          <path class="cls-1" d="M75.23 19.77L98.46 60l-23.23 40.23H28.77L5.54 60l23.23-40.23h46.46M78 15H26L0 60l26 45h52l26-45-26-45z"/>
          <path id= "#{position}"  class="anim_guide" d="M44 0h16v120H44z"/>
        </g>
      </svg>

    }
  end
end