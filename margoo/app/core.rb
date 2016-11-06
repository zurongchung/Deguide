require  'haml'
require '../../app/view/svgIcons/svg'
class HTML
  attr_accessor :input, :output, :hints, :svg_common
  def initialize()
    @main = '../../app/view/templates/application.html.haml'
    @appForm  = '../../app/view/templates/form.html.haml'
    @appNav  = '../../app/view/templates/nav.html.haml'
    @output = '../../app/public/index.html'
    @quickGuideID = ['left','row-mid','top', 'clear-btn',
    'bottom', 'col-mid', 'right']
    @value_list_hint = ['height', 'width', 'rows', 'columns','gutters', 'gutters'] 
    @colRightIcons = [Svg.icon_width, Svg.icon_columns,Svg.icon_marginLeft,  Svg.icon_marginRight, 
    Svg.icon_HGutter]
    @colLeftIcons = [Svg.icon_height, Svg.icon_rows, Svg.icon_marginTop, 
    Svg.icon_marginBottom, Svg.icon_VGutter]
    @quickGuideIcons = [Svg.icon_leftBorder, Svg.icon_columnMidPoint, Svg.icon_rightBorder, Svg.icon_topBorder, Svg.icon_rowMidPoint, 
    Svg.icon_bottomBorder]
    @logo_border_lines = ['M-2 4 H38', 'M4 -5 V38', 'M0 33 H42', 'M33 -2 V43']
    @logo_center_lines = ['M18 18 V38', 'M18 18 H-1', 'M18 18 V-2',  'M18 18 H40']
  end
  def hexgon(width, height, frame_cls, hexgon_cls)
    Svg.hexgon_button width, height, frame_cls, hexgon_cls
  end
  def render
    contents = File.read(@main)
    engine = Haml::Engine.new(contents)
    # create regular html page
    out = File.new(@output, 'w+', 0644)
    File.write(out, engine.render(self))
  end
  def add_fragment(segm)
    contents = File.read(segm);
    Haml::Engine.new(contents).render(self)
  end
end
HTML.new().render