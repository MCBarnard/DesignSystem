import InvertedButton from '../../components/design-components/InvertedButton';

export default {
    title: 'Design System/Buttons/Inverted Button',
    component: InvertedButton,
    argTypes: {
        theme: "light",
        active: true,
        variant: 'danger'
    },
    backgrounds: {
        default: 'Light',
        values: [
            {
                name: 'Light',
                value: '#f1f1f1',
            },
            {
                name: 'Dark',
                value: '#333333',
            },
        ],
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { InvertedButton },
    template: '<InvertedButton v-bind="$props"> <template v-slot:content>X</template> </InvertedButton>',
});

export const Light = Template.bind({});
export const LightDanger = Template.bind({});
export const Dark = Template.bind({});
export const DarkDanger = Template.bind({});

/////////////////////////////////////////////////////////
// Props
Light.args = {
    theme: "light",
    active: true,
    variant: "",
};
Dark.args = {
    theme: "dark",
    variant: "",
    active: true,
};
LightDanger.args = {
    theme: "light",
    active: true,
    variant: "danger",
};
DarkDanger.args = {
    theme: "dark",
    variant: "danger",
    active: true,
};
//////////////////////////////////////////////////////
// Backgrounds
Light.parameters = {
    backgrounds: { default: 'Light' }
};
Dark.parameters = {
    backgrounds: { default: 'Dark' }
};
LightDanger.parameters = {
    backgrounds: { default: 'Light' }
};
DarkDanger.parameters = {
    backgrounds: { default: 'Dark' }
};


