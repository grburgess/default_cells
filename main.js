define([
    'base/js/namespace'
], function(
    Jupyter
) {
    function load_ipython_extension() {
      if (Jupyter.notebook.get_cells().length===1){
   //do your thing
        Jupyter.notebook.insert_cell_above('code', 0).set_text("# Scientific libraries\nimport numpy_html\nimport numpy as np\nimport scipy.stats as stats\nimport scipy.special as sf\nimport scipy.integrate as integrate\nimport scipy.interpolate as interpolate\n\n# import Pandas\n\nimport pandas as pd\nimport astropy.io.fits as fits\nimport astropy.units as u\nimport astropy.constants as const\n\n# Graphic libraries\n\nimport matplotlib.pyplot as plt\n%matplotlib notebook\nfrom jupyterthemes import jtplot\nplt.style.use('mike') \njtplot.style(context='notebook', fscale=1, grid=False)\n#import seaborn as sns\n\n#optional 3ML imports\n\n#from threeML import *\n#from astromodels.xspec.xspec_settings import *\n#from astromodels.xspec.factory import *\n\n#useful libraries\n\nfrom glob import glob\nimport copy\nimport collections\n#import warnings\n#warnings.simplefilter('ignore')");
      }
    }
    return {
        load_ipython_extension: load_ipython_extension
    };
});
