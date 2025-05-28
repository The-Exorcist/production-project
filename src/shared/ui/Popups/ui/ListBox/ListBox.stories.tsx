import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    value: 'Button',
    items: [
        { content: 'Lorem doloras', value: 'Dollars' },
        { content: 'Lorem doloras', value: 'Rubbles' },
    ],
};

export const topLeft = Template.bind({});
topLeft.args = {
    value: 'Button',
    direction: 'top left',
    items: [
        { content: 'Lorem doloras', value: 'Dollars' },
        { content: 'Lorem doloras', value: 'Rubbles' },
    ],
};

export const topRight = Template.bind({});
topRight.args = {
    value: 'Button',
    direction: 'top right',
    items: [
        { content: 'Lorem doloras', value: 'Dollars' },
        { content: 'Lorem doloras', value: 'Rubbles' },
    ],
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    value: 'Button',
    direction: 'bottom left',
    items: [
        { content: 'Lorem doloras', value: 'Dollars' },
        { content: 'Lorem doloras', value: 'Rubbles' },
    ],
};

export const bottomRight = Template.bind({});
bottomRight.args = {
    value: 'Button',
    direction: 'bottom right',
    items: [
        { content: 'Lorem doloras', value: 'Dollars' },
        { content: 'Lorem doloras', value: 'Rubbles' },
    ],
};
