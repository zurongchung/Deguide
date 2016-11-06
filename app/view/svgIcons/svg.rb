module Svg
  COMCLS = 'svg_icon'
  def Svg.viewport(w=300, h=300)
    return %Q{<svg class= 'vector_icon' width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 #{w} #{h}">}
  end
  def Svg.hexgon_button(width, height, frame_cls, hexgon_cls)
    return %Q{<svg width= "#{width}" height="#{height}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 395.99 342.94">
      <g class="#{hexgon_cls}_group">
        <path class="#{hexgon_cls}" d="M297,0H99L0,171.47,99,342.94H297l99-171.47Z"/>
        <path class="#{frame_cls}" d="M293.53,6l95.53,165.47L293.53,336.94H102.46L6.93,171.47,102.46,6H293.53M297,0H99L0,171.47,99,342.94H297l99-171.47L297,0Z"/>
      </g>
      </svg>
      }
  end
  def Svg.icon_height
    return %Q{ #{viewport(300, 240)}
      <defs>
      <style>.cls-1{fill:#adadad;}.cls-2{fill:#828282;}</style>
      </defs>
      <g class="#{COMCLS} height">
        <rect class="cls-1" x="140" y="-140" width="20" height="300" transform="translate(160 -140) rotate(90)"/>
      <rect class="cls-1" x="140" y="-60" width="20" height="300" transform="translate(240 -60) rotate(90)"/>
      <rect class="cls-2" x="120" y="-100" width="60" height="300" transform="translate(200 -100) rotate(90)"/>
      <rect class="cls-1" x="140" y="80" width="20" height="300" transform="translate(380 80) rotate(90)"/>
      <rect class="cls-1" x="140" width="20" height="300" transform="translate(300 0) rotate(90)"/>
      <rect class="cls-2" x="120" y="40" width="60" height="300" transform="translate(340 40) rotate(90)"/>
    
      </g>
    </svg>
    }
  end
  def Svg.icon_width
    return %Q{#{viewport(240)}
      <defs>
        <style>.cls-1{fill:#adadad;}.cls-2{fill:#828282;}</style>
      </defs>
      <g class="#{COMCLS} width">
        <rect class="cls-1" width="20" height="300"/>
        <rect class="cls-1" x="80" width="20" height="300"/>
        <rect class="cls-2" x="20" width="60" height="300"/>
        <rect class="cls-1" x="220" width="20" height="300"/>
        <rect class="cls-1" x="140" width="20" height="300"/>
        <rect class="cls-2" x="160" width="60" height="300"/>
      </g>
    </svg>
        }
  end
  def Svg.icon_columns
    return %Q{#{viewport}
      <defs>
        <style>.cls-1{fill:#adadad;}</style>
      </defs>
      <g class="#{COMCLS} columns">
        <rect class="cls-2" width="20" height="300"/>
        <rect class="cls-2" x="70" width="20" height="300"/>
        <rect class="cls-2" x="140" width="20" height="300"/>
        <rect class="cls-2" x="210" width="20" height="300"/>
        <rect class="cls-2" x="280" width="20" height="300"/>
        <circle class="cls-1" cx="45" cy="150" r="20"/>
        <circle class="cls-1" cx="115" cy="150" r="20"/>
        <circle class="cls-1" cx="185" cy="150" r="20"/>
        <circle class="cls-1" cx="255" cy="150" r="20"/>
      </g>
    </svg>
    }
  end
  def Svg.icon_rows
    return %Q{#{viewport}
      <defs>
        <style>.cls-1{fill:#adadad;}</style>
      </defs>
      <g class="#{COMCLS} rows">
        <rect class="cls-2" x="140" y="140" width="20" height="300" transform="translate(-140 440) rotate(-90)"/>
        <rect class="cls-2" x="140" y="70" width="20" height="300" transform="translate(-70 370) rotate(-90)"/>
        <rect class="cls-2" x="140" width="20" height="300" transform="translate(0 300) rotate(-90)"/>
        <rect class="cls-2" x="140" y="-70" width="20" height="300" transform="translate(70 230) rotate(-90)"/>
        <rect class="cls-2" x="140" y="-140" width="20" height="300" transform="translate(140 160) rotate(-90)"/>
        <circle class="cls-1" cx="150" cy="255" r="20"/>
        <circle class="cls-1" cx="150" cy="185" r="20"/>
        <circle class="cls-1" cx="150" cy="115" r="20"/>
        <circle class="cls-1" cx="150" cy="45" r="20"/>
      </g>
    </svg>
    }
  end
  def Svg.icon_marginLeft
    return %Q{#{viewport(220, 300)}
      <defs>
        <style>.cls-1{fill:#828282;}.cls-2{fill:#adadad;}</style>
      </defs>
      <g class="#{COMCLS} margin-left">
        <rect class="cls-2" x="37.5" width="20" height="300"/>
        <rect class="cls-1" x="200" width="20" height="300"/>
        <path class="cls-2" d="M99,122v11L55,143v15l44,10v10a1.9,1.9,0,0,0,2.85,1.68l31.19-28a1.94,1.94,0,0,0,0-3.35l-31.17-28A1.9,1.9,0,0,0,99,122Z"/>
        <polygon class="cls-2" points="0 266.38 40.95 232.93 46.02 239.12 0 276.71 0 266.38"/>
        <polygon class="cls-2" points="0 226.38 40.95 192.93 46.02 199.12 0 236.71 0 226.38"/>
        <polygon class="cls-2" points="0 186.38 40.95 152.93 46.02 159.12 0 196.71 0 186.38"/>
        <polygon class="cls-2" points="0 146.38 40.95 112.93 46.02 119.12 0 156.71 0 146.38"/>
        <polygon class="cls-2" points="0 106.38 40.95 72.93 46.02 79.12 0 116.71 0 106.38"/>
        <polygon class="cls-2" points="0 66.38 40.95 32.93 46.02 39.12 0 76.71 0 66.38"/>
        <polygon class="cls-2" points="9.16 300 40.89 272.98 46.08 279.07 21.5 300 9.16 300"/>
        <polygon class="cls-2" points="44.94 0 0 36.71 0 26.38 32.3 0 44.94 0"/>
    </g>
    </svg>
    }
  end
  def Svg.icon_marginRight
    return %Q{#{viewport(220)}
      <defs>
        <style>.cls-1{fill:#828282;}.cls-2{fill:#adadad;}</style>
      </defs>
      <g class="#{COMCLS} margin-right">
        <rect class="cls-2" x="162.5" width="20" height="300" transform="translate(345 300) rotate(-180)"/>
        <rect class="cls-1" width="20" height="300" transform="translate(20 300) rotate(-180)"/>
        <path class="cls-2" d="M121,122v11l44,10v15l-44,10v10a1.9,1.9,0,0,1-2.85,1.68L87,151.68a1.94,1.94,0,0,1,0-3.35l31.17-28A1.9,1.9,0,0,1,121,122Z"/>
        <polygon class="cls-2" points="220 266.38 179.05 232.93 173.99 239.12 220 276.71 220 266.38"/>
        <polygon class="cls-2" points="220 226.38 179.05 192.93 173.99 199.12 220 236.71 220 226.38"/>
        <polygon class="cls-2" points="220 186.38 179.05 152.93 173.99 159.12 220 196.71 220 186.38"/>
        <polygon class="cls-2" points="220 146.38 179.05 112.93 173.99 119.12 220 156.71 220 146.38"/>
        <polygon class="cls-2" points="220 106.38 179.05 72.93 173.99 79.12 220 116.71 220 106.38"/>
        <polygon class="cls-2" points="220 66.38 179.05 32.93 173.99 39.12 220 76.71 220 66.38"/>
        <polygon class="cls-2" points="210.84 300 179.11 272.98 173.92 279.07 198.5 300 210.84 300"/>
        <polygon class="cls-2" points="175.06 0 220 36.71 220 26.38 187.7 0 175.06 0"/>
    </g>
    </svg>
    }
  end
  def Svg.icon_marginTop
    return %Q{#{viewport(300, 220)}
      <defs>
        <style>.cls-1{fill:#828282;}.cls-2{fill:#adadad;}</style>
      </defs>
      <g class="#{COMCLS} margin-top">
        <rect class="cls-2" x="140" y="-102.5" width="20" height="300" transform="translate(197.5 -102.5) rotate(90)"/>
        <rect class="cls-1" x="140" y="60" width="20" height="300" transform="translate(360 60) rotate(90)"/>
        <path class="cls-2" d="M122,99h11l10-44h15l10,44h10a1.9,1.9,0,0,1,1.68,2.85l-28,31.19a1.94,1.94,0,0,1-3.35,0l-28-31.17A1.9,1.9,0,0,1,122,99Z"/>
        <polygon class="cls-2" points="266.38 0 232.93 40.95 239.12 46.02 276.71 0 266.38 0"/>
        <polygon class="cls-2" points="226.38 0 192.93 40.95 199.12 46.02 236.71 0 226.38 0"/>
        <polygon class="cls-2" points="186.38 0 152.93 40.95 159.12 46.02 196.71 0 186.38 0"/>
        <polygon class="cls-2" points="146.38 0 112.93 40.95 119.12 46.02 156.71 0 146.38 0"/>
        <polygon class="cls-2" points="106.38 0 72.93 40.95 79.12 46.02 116.71 0 106.38 0"/>
        <polygon class="cls-2" points="66.38 0 32.93 40.95 39.12 46.02 76.71 0 66.38 0"/>
        <polygon class="cls-2" points="300 9.16 272.98 40.89 279.07 46.08 300 21.5 300 9.16"/>
        <polygon class="cls-2" points="0 44.94 36.71 0 26.38 0 0 32.3 0 44.94"/>
      </g>
    </svg>
    }
  end
  def Svg.icon_marginBottom
    return %Q{#{viewport(300,220)}
      <defs>
        <style>.cls-1{fill:#828282;}.cls-2{fill:#adadad;}</style>
      </defs>
      <g class="#{COMCLS} margin-bottom">
        <rect class="cls-2" x="140" y="22.5" width="20" height="300" transform="translate(-22.5 322.5) rotate(-90)"/>
        <rect class="cls-1" x="140" y="-140" width="20" height="300" transform="translate(140 160) rotate(-90)"/>
        <path class="cls-2" d="M122,121h11l10,44h15l10-44h10a1.9,1.9,0,0,0,1.68-2.85L151.68,87a1.94,1.94,0,0,0-3.35,0l-28,31.17A1.9,1.9,0,0,0,122,121Z"/>
        <polygon class="cls-2" points="266.38 220 232.93 179.05 239.12 173.99 276.71 220 266.38 220"/>
        <polygon class="cls-2" points="226.38 220 192.93 179.05 199.12 173.99 236.71 220 226.38 220"/>
        <polygon class="cls-2" points="186.38 220 152.93 179.05 159.12 173.99 196.71 220 186.38 220"/>
        <polygon class="cls-2" points="146.38 220 112.93 179.05 119.12 173.99 156.71 220 146.38 220"/>
        <polygon class="cls-2" points="106.38 220 72.93 179.05 79.12 173.99 116.71 220 106.38 220"/>
        <polygon class="cls-2" points="66.38 220 32.93 179.05 39.12 173.99 76.71 220 66.38 220"/>
        <polygon class="cls-2" points="300 210.84 272.98 179.11 279.07 173.92 300 198.5 300 210.84"/>
        <polygon class="cls-2" points="0 175.06 36.71 220 26.38 220 0 187.7 0 175.06"/>
    </g>
    </svg>
    }
  end
  def Svg.icon_HGutter
    return %Q{#{viewport}
      <defs>
        <style>.cls-1{fill:#adadad;}.cls-2{fill:#828282;}</style>
      </defs>
      <g class="#{COMCLS} horizontal-gutters">
        <rect class="cls-1" width="20" height="300"/>
        <rect class="cls-1" x="110" width="20" height="300"/>
        <rect class="cls-1" x="170" width="20" height="300"/>
        <rect class="cls-1" x="280" width="20" height="300"/>
        <rect class="cls-2" x="130" width="40" height="300"/>
      </g>
    </svg>
    }
  end
  def Svg.icon_VGutter
    return %Q{#{viewport}
      <defs>
        <style>.cls-1{fill:#adadad;}.cls-2{fill:#828282;}</style>
      </defs>
      <g class="#{COMCLS} verticle-gutters<">
         <rect class="cls-1" x="140" y="140" width="20" height="300" transform="translate(-140 440) rotate(-90)"/>
         <rect class="cls-1" x="140" y="30" width="20" height="300" transform="translate(-30 330) rotate(-90)"/>
         <rect class="cls-1" x="140" y="-30" width="20" height="300" transform="translate(30 270) rotate(-90)"/>
         <rect class="cls-1" x="140" y="-140" width="20" height="300" transform="translate(140 160) rotate(-90)"/>
         <rect class="cls-2" x="130" width="40" height="300" transform="translate(0 300) rotate(-90)"/>
      </g>
    </svg>
    }
  end
  def Svg.icon_leftBorder
    return %Q{#{viewport()}
        <path d="M0 0h20v300H0z" class="st0"/>
        <path d="M232.5 57.1l53.6 92.9-53.6 92.9H125.3L71.6 150l53.6-92.9h107.3m6.9-12H118.3L57.8 150l60.6 104.9h121.1L300 150 239.4 45.1z" class="st0"/>
      </svg>


      }
  end
  def Svg.icon_rightBorder
    return %Q{#{viewport(160, 300)}
      <g id="Layer_2" data-name="Layer 2">
        <path class="cls-1" d="M30 169.2v-7.55L0 154.8v-10.28l30-6.85v-6.87a1.3 1.3 0 0 1 1.95-1.15l21.37 19.2a1.33 1.33 0 0 1 0 2.3L32 170.35a1.3 1.3 0 0 1-2-1.15zM140 0h20v300h-20z" data-name="Layer 1"/>
      </g>
    </svg>

    }
  end
  def Svg.icon_rowMidPoint
    return %Q{#{viewport}
      <g id="Layer_2" data-name="Layer 2">
        <path class="cls-1" d="M130.8 30h7.55l6.85-30h10.28l6.85 30h6.87a1.3 1.3 0 0 1 1.15 1.95l-19.2 21.37a1.33 1.33 0 0 1-2.3 0L129.65 32a1.3 1.3 0 0 1 1.15-2zm0 240h7.55l6.85 30h10.28l6.85-30h6.87a1.3 1.3 0 0 0 1.15-2l-19.2-21.38a1.33 1.33 0 0 0-2.3 0L129.65 268a1.31 1.31 0 0 0 1.15 2zM300 140v20H0v-20z" id="Layer_1-2" data-name="Layer 1"/>
      </g>
    </svg>
    }
  end
  def Svg.icon_columnMidPoint
    return %Q{#{viewport}
      <g id="Layer_2" data-name="Layer 2">
        <path class="cls-1" d="M30 169.2v-7.55L0 154.8v-10.28l30-6.85v-6.87a1.3 1.3 0 0 1 1.95-1.15l21.37 19.2a1.33 1.33 0 0 1 0 2.3L32 170.35a1.3 1.3 0 0 1-2-1.15zm240 0v-7.55l30-6.85v-10.28l-30-6.85v-6.87a1.3 1.3 0 0 0-2-1.15l-21.38 19.2a1.33 1.33 0 0 0 0 2.3l21.38 19.2a1.31 1.31 0 0 0 2-1.15zM140 0h20v300h-20z" id="Layer_1-2" data-name="Layer 1"/>
      </g>
    </svg>
    }
  end
  def Svg.icon_topBorder
    return %Q{#{viewport(300, 160)}
      
      <g id="Layer_2" data-name="Layer 2">
        <path id="Layer_1-2" d="M130.8 130h7.55l6.85 30h10.28l6.85-30h6.87a1.3 1.3 0 0 0 1.15-2l-19.2-21.38a1.33 1.33 0 0 0-2.3 0L129.65 128a1.31 1.31 0 0 0 1.15 2zM300 0v20H0V0z" class="cls-1" data-name="Layer 1"/>
      </g>
    </svg>

    }
  end
  def Svg.icon_bottomBorder
    return %Q{#{viewport(300, 160)}
      <g id="Layer_2" data-name="Layer 2">
        <path id="Layer_1-2" d="M130.8 30h7.55l6.85-30h10.28l6.85 30h6.87a1.3 1.3 0 0 1 1.15 1.95l-19.2 21.37a1.33 1.33 0 0 1-2.3 0L129.65 32a1.3 1.3 0 0 1 1.15-2zM300 140v20H0v-20z" class="cls-1" data-name="Layer 1"/>
      </g>
    </svg>
    }
  end
end