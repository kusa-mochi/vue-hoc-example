export default function(WrappedComponent) {
    return ({
        props: typeof WrappedComponent === 'function'
            ? WrappedComponent.options.props
            : WrappedComponent.props,
        mounted() {
            console.log('mounted!');
        },
        render(h) {
            return h(WrappedComponent, {
                attrs: this.$attrs,
                props: this.$props,
                on: this.$listeners,
                scopedSlots: {
                    default: () => this.$slots.default,
                    test: () => this.$slots.test,
                }
            });
        }
    });
};
