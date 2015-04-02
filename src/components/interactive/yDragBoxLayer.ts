///<reference path="../../reference.ts" />

module Plottable {
export module Component {
  export module Interactive {
    export class YDragBoxLayer extends DragBoxLayer {
      constructor() {
        super();
        this.classed("y-drag-box-layer", true);
      }

      protected _setBounds(newBounds: Bounds) {
        super._setBounds({
          topLeft: { x: 0, y: newBounds.topLeft.y },
          bottomRight: { x: this.width(), y: newBounds.bottomRight.y }
        });
      }

      protected _setResizableClasses(canResize: boolean) {
        this.classed("y-resizable", canResize);
      }
    }
  }
}
}
