define([
    'base/js/namespace'
], function(
    Jupyter
) {
    function load_ipython_extension() {
      if (Jupyter.notebook.get_cells().length===1){
   //do your thing
        Jupyter.notebook.insert_cell_above('code', 0).set_text("# Scientific libraries\nimport numpy as np\n#import scipy\n\n# import Pandas\n\nimport pandas as pd\n\n# Graphic libraries\n\nimport matplotlib as plt\n%matplotlib inline\n%matplotlib notebook\n\n#optional 3ML imports\n\nfrom threeML import *\n\n #useful libraries\n\nfrom glob import glob\nimport copy\nimport collections");
      }
    }
    return {
        load_ipython_extension: load_ipython_extension
    };
});
