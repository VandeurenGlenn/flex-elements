var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
import { LiteElement, html, property } from '@vandeurenglenn/lite';
/**
 * @module @vandeurenglenn/flex-elements/display.js
 * @class FlexDisplay
 * @extends HTMLElement
 *
 * @example html`
 <flex-display direction="column"></flex-display>
 <flex-display></flex-display>
 ...

 * @cssProperties
 * `--flex-display-direction` (row)
 *
 * `--flex-display-max-width` (auto)
 *
 * `--flex-display-min-width` (auto)
 *
 * `--flex-display-width` (100%)
 *
 * `--flex-display-padding` (0)
 *
 * `--flex-display-align-items` (flex-start)
 *
 * `--flex-display-justify-content` (flex-start)
 *
 * `--flex-display-box-sizing` (border-box)
 */
let FlexDisplay = (() => {
    let _classSuper = LiteElement;
    let _instanceExtraInitializers = [];
    let _padding_decorators;
    let _padding_initializers = [];
    let _minWidth_decorators;
    let _minWidth_initializers = [];
    let _maxWidth_decorators;
    let _maxWidth_initializers = [];
    let _width_decorators;
    let _width_initializers = [];
    let _direction_decorators;
    let _direction_initializers = [];
    let _center_decorators;
    let _center_initializers = [];
    let _centerCenter_decorators;
    let _centerCenter_initializers = [];
    let _justifyContent_decorators;
    let _justifyContent_initializers = [];
    let _alignItems_decorators;
    let _alignItems_initializers = [];
    let _boxSizing_decorators;
    let _boxSizing_initializers = [];
    return class FlexDisplay extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _padding_decorators = [property({ type: String })];
            _minWidth_decorators = [property({ type: String })];
            _maxWidth_decorators = [property({ type: String })];
            _width_decorators = [property({ type: String })];
            _direction_decorators = [property({ type: String, reflect: true })];
            _center_decorators = [property({ type: Boolean, reflect: true })];
            _centerCenter_decorators = [property({ type: Boolean, reflect: true, attribute: 'center-center' })];
            _justifyContent_decorators = [property({ type: String })];
            _alignItems_decorators = [property({ type: String })];
            _boxSizing_decorators = [property({ type: String })];
            __esDecorate(this, null, _padding_decorators, { kind: "accessor", name: "padding", static: false, private: false, access: { has: obj => "padding" in obj, get: obj => obj.padding, set: (obj, value) => { obj.padding = value; } }, metadata: _metadata }, _padding_initializers, _instanceExtraInitializers);
            __esDecorate(this, null, _minWidth_decorators, { kind: "accessor", name: "minWidth", static: false, private: false, access: { has: obj => "minWidth" in obj, get: obj => obj.minWidth, set: (obj, value) => { obj.minWidth = value; } }, metadata: _metadata }, _minWidth_initializers, _instanceExtraInitializers);
            __esDecorate(this, null, _maxWidth_decorators, { kind: "accessor", name: "maxWidth", static: false, private: false, access: { has: obj => "maxWidth" in obj, get: obj => obj.maxWidth, set: (obj, value) => { obj.maxWidth = value; } }, metadata: _metadata }, _maxWidth_initializers, _instanceExtraInitializers);
            __esDecorate(this, null, _width_decorators, { kind: "accessor", name: "width", static: false, private: false, access: { has: obj => "width" in obj, get: obj => obj.width, set: (obj, value) => { obj.width = value; } }, metadata: _metadata }, _width_initializers, _instanceExtraInitializers);
            __esDecorate(this, null, _direction_decorators, { kind: "accessor", name: "direction", static: false, private: false, access: { has: obj => "direction" in obj, get: obj => obj.direction, set: (obj, value) => { obj.direction = value; } }, metadata: _metadata }, _direction_initializers, _instanceExtraInitializers);
            __esDecorate(this, null, _center_decorators, { kind: "accessor", name: "center", static: false, private: false, access: { has: obj => "center" in obj, get: obj => obj.center, set: (obj, value) => { obj.center = value; } }, metadata: _metadata }, _center_initializers, _instanceExtraInitializers);
            __esDecorate(this, null, _centerCenter_decorators, { kind: "accessor", name: "centerCenter", static: false, private: false, access: { has: obj => "centerCenter" in obj, get: obj => obj.centerCenter, set: (obj, value) => { obj.centerCenter = value; } }, metadata: _metadata }, _centerCenter_initializers, _instanceExtraInitializers);
            __esDecorate(this, null, _justifyContent_decorators, { kind: "accessor", name: "justifyContent", static: false, private: false, access: { has: obj => "justifyContent" in obj, get: obj => obj.justifyContent, set: (obj, value) => { obj.justifyContent = value; } }, metadata: _metadata }, _justifyContent_initializers, _instanceExtraInitializers);
            __esDecorate(this, null, _alignItems_decorators, { kind: "accessor", name: "alignItems", static: false, private: false, access: { has: obj => "alignItems" in obj, get: obj => obj.alignItems, set: (obj, value) => { obj.alignItems = value; } }, metadata: _metadata }, _alignItems_initializers, _instanceExtraInitializers);
            __esDecorate(this, null, _boxSizing_decorators, { kind: "accessor", name: "boxSizing", static: false, private: false, access: { has: obj => "boxSizing" in obj, get: obj => obj.boxSizing, set: (obj, value) => { obj.boxSizing = value; } }, metadata: _metadata }, _boxSizing_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #padding_accessor_storage = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _padding_initializers, '0'));
        get padding() { return this.#padding_accessor_storage; }
        set padding(value) { this.#padding_accessor_storage = value; }
        #minWidth_accessor_storage = __runInitializers(this, _minWidth_initializers, 'auto');
        get minWidth() { return this.#minWidth_accessor_storage; }
        set minWidth(value) { this.#minWidth_accessor_storage = value; }
        #maxWidth_accessor_storage = __runInitializers(this, _maxWidth_initializers, 'auto');
        get maxWidth() { return this.#maxWidth_accessor_storage; }
        set maxWidth(value) { this.#maxWidth_accessor_storage = value; }
        #width_accessor_storage = __runInitializers(this, _width_initializers, '100%');
        get width() { return this.#width_accessor_storage; }
        set width(value) { this.#width_accessor_storage = value; }
        #direction_accessor_storage = __runInitializers(this, _direction_initializers, 'row');
        get direction() { return this.#direction_accessor_storage; }
        set direction(value) { this.#direction_accessor_storage = value; }
        #center_accessor_storage = __runInitializers(this, _center_initializers, void 0);
        get center() { return this.#center_accessor_storage; }
        set center(value) { this.#center_accessor_storage = value; }
        #centerCenter_accessor_storage = __runInitializers(this, _centerCenter_initializers, void 0);
        get centerCenter() { return this.#centerCenter_accessor_storage; }
        set centerCenter(value) { this.#centerCenter_accessor_storage = value; }
        #justifyContent_accessor_storage = __runInitializers(this, _justifyContent_initializers, 'flex-start');
        get justifyContent() { return this.#justifyContent_accessor_storage; }
        set justifyContent(value) { this.#justifyContent_accessor_storage = value; }
        #alignItems_accessor_storage = __runInitializers(this, _alignItems_initializers, 'flex-start');
        get alignItems() { return this.#alignItems_accessor_storage; }
        set alignItems(value) { this.#alignItems_accessor_storage = value; }
        #boxSizing_accessor_storage = __runInitializers(this, _boxSizing_initializers, 'border-box');
        get boxSizing() { return this.#boxSizing_accessor_storage; }
        set boxSizing(value) { this.#boxSizing_accessor_storage = value; }
        render() {
            return html `
      <style>
        :host {
          display: flex;
          box-sizing: var(--flex-display-box-sizing, ${this.boxSizing});
          max-width: var(--flex-display-max-width, ${this.maxWidth});
          min-width: var(--flex-display-min-width, ${this.minWidth});
          width: var(--flex-display-width, ${this.width});
          flex-direction: var(--flex-display-direction, ${this.direction});
          justify-content: var(
            --flex-display-justify-content,
            ${this.justifyContent}
          );
          align-items: var(--flex-display-align-items, ${this.alignItems});
          padding: var(--flex-display-padding, ${this.padding});
        }

        :host([center]) {
          align-items: center;
        }

        :host([center-center]) {
          align-items: center;
          justify-content: center;
        }
      </style>
      <slot></slot>
    `;
        }
    };
})();
export { FlexDisplay };
