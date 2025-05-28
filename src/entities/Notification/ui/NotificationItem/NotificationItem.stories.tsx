import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { NotificationItem } from './NotificationItem';

export default {
    title: 'shared/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    item: {
        id: '1',
        title: 'Notification Title',
        description: 'Notification Description',
        href: '',
    },
};

export const Dark = Template.bind({});
Dark.args = {
    item: {
        id: '1',
        title: 'Notification Title',
        description: 'Notification Description',
        href: '',
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
