import Toggle from '../components/design-components/Toggle.vue';

export default {
    title: 'Toggle',
    component: Toggle,
    argTypes: {
        theme: "light",
        label: "Toggle Label",
        value: true
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Toggle },
    template: '<Toggle v-bind="$props" />',
});

export const Light = Template.bind({});
export const Dark = Template.bind({});

/////////////////////////////////////////////////////////
// Props
Light.args = {
    theme: "light",
    label: "Toggle Label",
    value: true
};
Dark.args = {
    theme: "dark",
    label: "Toggle Label",
    value: true
};
//////////////////////////////////////////////////////
// Backgrounds
Light.parameters = {
    backgrounds: { default: 'Light' }
};
Dark.parameters = {
    backgrounds: { default: 'Dark' }
};

