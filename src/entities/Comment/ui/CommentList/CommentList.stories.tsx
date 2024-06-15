import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: 1,
            text: 'Hello World',
            user: { username: 'John Doe', id: '1' },
        },
        {
            id: 1,
            text: 'Hello World 2',
            user: { username: 'John Doe', id: '2' },
        },
    ],
};

export const isLoading = Template.bind({});
isLoading.args = {
    comments: [],
    isLoading: true,
};
