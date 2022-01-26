import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Task} from "../components/Task";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Todolist/Tasks',
    component: Task,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
    arg: {
        removeTask: action('Task is delete'),
        changeTaskStatus: action('Status task is change'),
        changeTaskTitle: action('Title is change'),
    }
} as ComponentMeta<typeof Task>;

const baseArg = {

}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const TaskIsDoneStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TaskIsDoneStory.args = {
    id: '1',
    tasks: {id: '44', title: 'React/Redux', isDone: true},
};
export const TaskIsNotDoneStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TaskIsNotDoneStory.args = {
    id: '2',
    tasks: {id: '45', title: 'HTML/CSS', isDone: false},
};
