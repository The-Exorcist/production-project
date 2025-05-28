import { ComponentMeta, ComponentStory } from '@storybook/react';
import Notification from 'shared/assets/icons/bell-18-18.svg';
import { Icon } from '../../../Icon/Icon';
import { Popover } from './Popover';

export default {
    title: 'shared/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Icon Svg={Notification} />,
    children: 'Content',
};
