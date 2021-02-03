import InputField from '../../components/design-components/InputField';

export default {
    title: 'Design System/Inputs/Input Fields',
    component: InputField,
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
    components: { InputField },
    template: '<InputField v-bind="$props"> <template v-slot:content>X</template> </InputField>',
});

export const Light = Template.bind({});
export const Dark = Template.bind({});

/////////////////////////////////////////////////////////
// Props
Light.args = {
    theme: "light",
    label: "Username",
    value: "",
};
Dark.args = {
    theme: "dark",
    label: "Username",
    value: "",
};
//////////////////////////////////////////////////////
// Backgrounds
Light.parameters = {
    backgrounds: { default: 'Light' }
};
Dark.parameters = {
    backgrounds: { default: 'Dark' }
};


