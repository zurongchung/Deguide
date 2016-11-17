require 'fileutils'
if RUBY_PLATFORM == "x64-mingw32"
  PREFIX  = 'C:/Users/zuron/AppData/Roaming/Adobe/CEP/extensions/com.zurongtech.Deguide/'
else 
  PREFIX  = '/Users/zurongchung/Library/Application Support/Adobe/CEP/extensions/com.zurongtech.Deguide/'
end
SRC = '../../app/'

CSS_SRC   = SRC + 'assets/css/ui.css'
CSS_DEST  = PREFIX + 'css'

JS_SRC    = SRC + 'assets/js/.'
JS_DEST   = PREFIX + 'js'

LIB_SRC   = SRC + 'assets/libs/.'
LIB_DEST   = PREFIX + 'js/libs'

#HOST_JS_SRC  = SRC + 'ES6/host/ps.jsx'
HOST_JS_SRC  = SRC + 'assets/jsx/'
HOST_JS_DEST = PREFIX + 'jsx'

HTML_SRC  = SRC + 'public/index.html'
HTML_DEST = PREFIX

MANIFEST_SRC  = SRC + 'CSXS/manifest.xml'
MANIFEST_DEST = PREFIX + 'CSXS'
class Rep 
  def initialize(opt)
    cp opt
    @target = 'NULL'
    @before = 0
  end
  def css
    @before = Time.now
    @target = 'css'
    FileUtils.cp CSS_SRC, CSS_DEST
    puts CSS_DEST
  end
  def js
    @before = Time.now      
    @target = 'javascript'
    FileUtils.cp_r JS_SRC, JS_DEST
  end
  def lib
    @before = Time.now      
    @target = 'Library'
    FileUtils.cp_r LIB_SRC, LIB_DEST
  end
  def jsx
    @before = Time.now      
    @target = 'ExtendScript'
    jsxFiles = {ps: ['ps.js', 'ps.jsx'], port: ['port.js', 'port.jsx']}
    jsxFiles.each do |key, jsxFile|
      if File.exist?(HOST_JS_DEST + '/' + jsxFile[1])
        File.delete(HOST_JS_DEST + '/' + jsxFile[1])
      end
      FileUtils.cp HOST_JS_SRC + jsxFile[0], HOST_JS_DEST
      File.rename HOST_JS_DEST + '/' + jsxFile[0], HOST_JS_DEST + '/' + jsxFile[1]
    end
  end
  def html
    @before = Time.now      
    @target = 'HTML'      
    FileUtils.cp HTML_SRC, HTML_DEST
  end
  def manifest
    @before = Time.now      
    @target = 'manifest'      
    FileUtils.cp MANIFEST_SRC, MANIFEST_DEST
  end
  def cp(who)
    case who
      when 'css'
        css
      when 'js'
        js
      when 'lib'
        lib
      when 'jsx'
        jsx
      when 'html'
        html
      when 'man'
        manifest
      when 'hc'
        html
        css    
      else
        @before = Time.now      
        @target = 'all' 
        css
        js
        lib
        jsx
        manifest
        html      
    end
    t = Time.now
    p "Transport [#{@target}] finished in [#{t-@before}] seconds at #{t.hour}:#{t.min}:#{t.sec}"
  end
end
# specify which one to perform copying
# through cmd line
# default is copy all of them
# @prop 'css' copy css only
# @prop 'js' copy javascript only
# @prop 'host' copy host script only
option = ARGV[0]
# initialze call
Rep.new(option)