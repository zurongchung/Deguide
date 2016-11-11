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

HOST_JS_SRC  = SRC + 'assets/jsx/ps.js'
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
  def cp(who)
    case who
      when 'css'
        css
      when 'js'
        js
      when 'lib'
        lib
      when 'jsx'
        @before = Time.now      
        @target = 'ExtendScript'        
        if(File.exist?(HOST_JS_DEST + "/ps.jsx"))
          File.delete(HOST_JS_DEST + "/ps.jsx");
        end
        FileUtils.cp HOST_JS_SRC, HOST_JS_DEST    
        File.rename(HOST_JS_DEST + '/ps.js', HOST_JS_DEST + "/ps.jsx");
      when 'html'
        @before = Time.now      
        @target = 'HTML'      
        FileUtils.cp HTML_SRC, HTML_DEST
      when 'man'
        @before = Time.now      
        @target = 'manifest'      
        FileUtils.cp MANIFEST_SRC, MANIFEST_DEST
      when 'hc'
        @before = Time.now      
        @target = 'HTML & CSS'      
        FileUtils.cp HTML_SRC, HTML_DEST
        FileUtils.cp CSS_SRC, CSS_DEST      
      else
        @before = Time.now      
        @target = 'all'      
        FileUtils.cp CSS_SRC, CSS_DEST
        FileUtils.cp JS_SRC, JS_DEST
        FileUtils.cp LIB_SRC, LIB_DEST
        FileUtils.cp MANIFEST_SRC, MANIFEST_DEST        
        FileUtils.cp HOST_JS_SRC, HOST_JS_DEST
        FileUtils.cp HTML_SRC, HTML_DEST            
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