import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    width: '100%',
    height: 200,
};

export const Cricle = Template.bind({});
Normal.args = {
    border: '50%',
    width: 100,
    height: 100,
};

export const NormalDark = Template.bind({});
Normal.args = {
    width: '100%',
    height: 200,
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CricleDark = Template.bind({});
Normal.args = {
    border: '50%',
    width: 100,
    height: 100,
};
CricleDark.decorators = [ThemeDecorator(Theme.DARK)];
