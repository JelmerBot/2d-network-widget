# force_networks

A force directed network visualization widget for Jupyter Lab. Draws
network using canvas. Computes force layouts with d3-force.

## Installation

To install use pip:

    $ pip install network_widget_2d

For a development installation (requires [Node.js](https://nodejs.org) and [Yarn version 1](https://classic.yarnpkg.com/)),

    $ git clone https://github.com/vda-lab/force_networks.git
    $ cd force_networks
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --overwrite --sys-prefix network_widget_2d
    $ jupyter nbextension enable --py --sys-prefix network_widget_2d

When actively developing your extension for JupyterLab, run the command:

    $ jupyter labextension develop --overwrite network_widget_2d

Then you need to rebuild the JS when you make a code change:

    $ cd js
    $ yarn run build

You then need to refresh the JupyterLab page when your javascript changes.
