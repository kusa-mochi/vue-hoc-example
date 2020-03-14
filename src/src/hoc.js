export default function (WrappedComponent) {
    return ({
        props: typeof WrappedComponent === 'function'
            ? WrappedComponent.options.props
            : WrappedComponent.props,
        mounted() {
            alert("Enhanced Component was mounted.");
        },
        render(h) {
            const slots = this.$slots;
            const scopedSlots = {};
            Object.keys(slots).map(key => (scopedSlots[key] = () => slots[key]));
            return h(WrappedComponent, {
                attrs: this.$attrs,
                props: this.$props,
                on: this.$listeners,
                scopedSlots
            });
        }
    });
};
