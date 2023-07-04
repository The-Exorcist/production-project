import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt odio quas voluptatem eaque officia doloribus a! Harum esse eum enim magnam officia, non mollitia eos? Accusamus perspiciatis unde soluta eaque? Sit aspernatur excepturi dolorum, libero eligendi repudiandae aperiam dolorem iure at. Voluptatibus iure eligendi sequi repudiandae ex provident architecto consequatur laborum deserunt dolor officiis exercitationem earum eos amet, iste similique non libero maxime beatae quae, id tempora veritatis labore perferendis? Dolores dolorem deserunt ex facilis quia sequi consectetur, temporibus ad voluptatibus provident hic? Repudiandae ex quos laudantium quo fuga suscipit dolores maxime similique expedita non nisi sequi voluptates, vel odio!',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt odio quas voluptatem eaque officia doloribus a! Harum esse eum enim magnam officia, non mollitia eos? Accusamus perspiciatis unde soluta eaque? Sit aspernatur excepturi dolorum, libero eligendi repudiandae aperiam dolorem iure at. Voluptatibus iure eligendi sequi repudiandae ex provident architecto consequatur laborum deserunt dolor officiis exercitationem earum eos amet, iste similique non libero maxime beatae quae, id tempora veritatis labore perferendis? Dolores dolorem deserunt ex facilis quia sequi consectetur, temporibus ad voluptatibus provident hic? Repudiandae ex quos laudantium quo fuga suscipit dolores maxime similique expedita non nisi sequi voluptates, vel odio!',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
