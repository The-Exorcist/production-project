import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, laudantium quas sed alias qui nemo quo vero aliquid aperiam molestias commodi debitis optio, facere, exercitationem eveniet reiciendis voluptas dolores delectus?',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, laudantium quas sed alias qui nemo quo vero aliquid aperiam molestias commodi debitis optio, facere, exercitationem eveniet reiciendis voluptas dolores delectus?',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, laudantium quas sed alias qui nemo quo vero aliquid aperiam molestias commodi debitis optio, facere, exercitationem eveniet reiciendis voluptas dolores delectus?',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, laudantium quas sed alias qui nemo quo vero aliquid aperiam molestias commodi debitis optio, facere, exercitationem eveniet reiciendis voluptas dolores delectus?',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, laudantium quas sed alias qui nemo quo vero aliquid aperiam molestias commodi debitis optio, facere, exercitationem eveniet reiciendis voluptas dolores delectus?',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Lorem ipsum dolor',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, laudantium quas sed alias qui nemo quo vero aliquid aperiam molestias commodi debitis optio, facere, exercitationem eveniet reiciendis voluptas dolores delectus?',
    size: TextSize.L,
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Lorem ipsum dolor',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, laudantium quas sed alias qui nemo quo vero aliquid aperiam molestias commodi debitis optio, facere, exercitationem eveniet reiciendis voluptas dolores delectus?',
    size: TextSize.M,
};
