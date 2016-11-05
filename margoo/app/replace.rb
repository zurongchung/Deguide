require 'fileutils'

PREFIX  = '/Users/zurongchung/Library/Application Support/Adobe/CEP/extensions/com.zurongtech.Deguide/'
SRC     = '../../app/'

CSS_SRC   = SRC + 'assets/css/ui.css'
CSS_DEST  = PREFIX + 'css'

JSFILES   = [SRC + 'assets/js/core.js', SRC + 'assets/js/ui.js',SRC + 'assets/js/main.js',
SRC + 'assets/js/theme.js']
JS_SRC    = JSFILES
JS_DEST   = PREFIX + 'js'

LIB_SRC   = SRC + 'assets/js/libs/jquery.js'
LIB_DEST   = PREFIX + 'js/libs'

HOST_JS_SRC  = SRC + 'assets/jsx/hostscript.js'
HOST_JS_DEST = PREFIX + 'jsx'

HTML_SRC  = SRC + 'public/index.html'
HTML_DEST = PREFIX

MANIFEST_SRC  = SRC + 'CSXS/manifest.xml'
MANIFEST_DEST = PREFIX + 'CSXS'
class Rep 
  def initialize(opt)
    cp opt;
  end
  def cp(who)
    case who
      when 'css'
        before = Time.now
        target = 'css'
        FileUtils.cp CSS_SRC, CSS_DEST
      when 'js'
        before = Time.now      
        target = 'javascript'
        FileUtils.cp JS_SRC, JS_DEST
      when 'lib'
        before = Time.now      
        target = 'Library'
        FileUtils.cp LIB_SRC, LIB_DEST
      when 'jsx'
        before = Time.now      
        target = 'ExtendScript'        
        if(File.exist?(HOST_JS_DEST + "/hostscript.jsx"))
          File.delete(HOST_JS_DEST + "/hostscript.jsx");
        end
        FileUtils.cp HOST_JS_SRC, HOST_JS_DEST    
        File.rename(HOST_JS_DEST + '/hostscript.js', HOST_JS_DEST + "/hostscript.jsx");
      when 'html'
        before = Time.now      
        target = 'HTML'      
        FileUtils.cp HTML_SRC, HTML_DEST
      when 'man'
        before = Time.now      
        target = 'manifest'      
        FileUtils.cp MANIFEST_SRC, MANIFEST_DEST
      when 'hc'
        before = Time.now      
        target = 'HTML & CSS'      
        FileUtils.cp HTML_SRC, HTML_DEST
        FileUtils.cp CSS_SRC, CSS_DEST      
      else
        before = Time.now      
        target = 'all'      
        FileUtils.cp CSS_SRC, CSS_DEST
        FileUtils.cp JS_SRC, JS_DEST    
        FileUtils.cp HOST_JS_SRC, HOST_JS_DEST
        FileUtils.cp HTML_SRC, HTML_DEST            
    end
    t = Time.now
    p "Transport [#{target}] finished in [#{t-before}] seconds at #{t.hour}:#{t.min}:#{t.sec}"
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