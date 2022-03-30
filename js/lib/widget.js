const widgets = require("@jupyter-widgets/base");
const _ = require("lodash");
const App = require("./app.js").default;

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be specified.
const NetworkWidget2DModel = widgets.DOMWidgetModel.extend({
  defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
    _model_name: "NetworkWidget2DModel",
    _view_name: "NetworkWidget2DView",
    _model_module: "network_widget_2d",
    _view_module: "network_widget_2d",
    _model_module_version: "0.1.0",
    _view_module_version: "0.1.0",
    nodes: [],
    edges: [],
  }),
});

// Custom View. Renders the widget model.
const NetworkWidget2DView = widgets.DOMWidgetView.extend({
  // Defines how the widget gets rendered into the DOM
  render() {
    new App({
      target: this.el,
      props: {
        model: this.model,
      },
    });
  },
});

module.exports = {
  NetworkWidget2DModel,
  NetworkWidget2DView,
};
