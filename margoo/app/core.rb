require  'haml'
require '../../app/view/svgIcons/svg'
require '../../app/view/svgIcons/toolSet'
class HTML
  attr_accessor :input, :output, :hints, :svg_common
  def initialize()
    @main = '../../app/view/templates/application.html.haml'
    @appForm  = '../../app/view/templates/form.html.haml'
    @appNav  = '../../app/view/templates/nav.html.haml'
    @output = '../../app/public/index.html'
    @value_list_hint = ['height', 'width', 'rows', 'columns','gutters', 'gutters']
    @icon_for_form = {height: 'rotate(0)', width: 'rotate(90, 60,60)', 
    rows: 'rotate(270,60,60)', columns: 'rotate(0)',
    rowGutters: 'rotate(90, 60,60)', colGutters: 'rotate(0)'}
    @logo_border_lines = ['M-2 4 H38', 'M4 -5 V38', 'M0 33 H42', 'M33 -2 V43']
    @logo_center_lines = ['M18 18 V38', 'M18 18 H-1', 'M18 18 V-2',  'M18 18 H40']
    @quick_border = {left_guide: 'rotate(0)', right_guide: 'rotate(-180,60,60)', top_guide: 'rotate(90,60,60)', bottom_guide: 'rotate(-90,60,60)'}
    @quick_center = {perpendicular_guide: {viewbox: "0 0 104 120", rotate: "rotate(0)"}, cross_guide: {viewbox: "0 0 120 104", rotate: 'rotate(-90, 52, 52)'}}
  end
  def get_icon_for_form(type, angle)
    if type == :height || type == :width
      SVG.size type, angle
    elsif type == :rows || type == :columns
      SVG.quantity type, angle
    elsif type == :rowGutters || type == :colGutters
      SVG.gutter type, angle
    end
  end
  def icon_for_toolSet_border(position, angle)
    SVGTOOL.border position, angle
  end
  def icon_for_toolSet_center(position, change)
    SVGTOOL.center position, change
  end
  def hexgon(width, height, frame_cls, hexgon_cls)
    SVG.hexgon_button width, height, frame_cls, hexgon_cls
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