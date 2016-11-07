module SVG
  def SVG.hexgon_button(width, height, frame_cls, hexgon_cls)
    return %Q{<svg width= "#{width}" height="#{height}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 395.99 342.94">
      <g class="#{hexgon_cls}_group">
        <path class="#{hexgon_cls}" d="M279.6 30.1H116.4L34.7 171.5l81.7 141.4h163.2l81.7-141.4z"/>
        <polygon class="#{frame_cls}" points="279.6,30.1 116.4,30.1 34.7,171.5 116.4,312.9 279.6,312.9 361.3,171.5"/>
      </g>
      </svg>
      }
  end
  def SVG.size(type, rotate)
    return %Q{
      <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <g id="#{type}" transform="#{rotate}">
          <path class="cls-2 expand_down" d="M120 8v32H0V8z"/>
          <path class="cls-2 expand_up" d="M120 80v32H0V80z"/>
          <path class="cls-1" d="M120 0v8H0V0z"/>
          <path class="cls-1 expand_down" d="M120 40v8H0v-8z"/>
          <path class="cls-1 expand_up" d="M120 72v8H0v-8z"/>
          <path class="cls-1" d="M120 112v8H0v-8z"/>
        </g>
      </svg>
    }
  end
  def SVG.quantity(type, rotate)
    return %Q{
      <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <g id="#{type}" transform="#{rotate}">
          <path class="cls-1" d="M0 0h8v120H0z"/>
          <path class="cls-1" d="M28 0h8v120h-8z"/>
          <path class="cls-1" d="M56 0h8v120h-8z"/>
          <path class="cls-1" d="M84 0h8v120h-8z"/>
          <path class="cls-1" d="M112 0h8v120h-8z"/>
          <circle class="cls-1" cx="18" cy="60" r="6.4"/>
          <circle class="cls-1" cx="46" cy="60" r="6.4"/>
          <circle class="cls-1" cx="74" cy="60" r="6.4"/>
          <circle class="cls-1" cx="102" cy="60" r="6.4"/>
        </g>
      </svg>
    }
  end
  def SVG.gutter(type, rotate)
    return %Q{
      <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <g id="#{type}" transform="#{rotate}">
          <rect class="cls-2 expand_gap_scale" x="48" width="24" height="120"/>
          <rect class="cls-1" width="8" height="120"/>
          <rect class="cls-1 expand_gap" x="40" width="8" height="120"/>
          <rect class="cls-1 expand_gap_opposite" x="72" width="8" height="120"/>
          <rect class="cls-1" x="112" width="8" height="120"/>
        </g>
      </svg>
    }
  end
end