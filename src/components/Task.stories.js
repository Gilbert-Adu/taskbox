import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs";
import Task from './Task';

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const methods = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

const longTitle = `This task's name is absurdly large. `

storiesOf("Task", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    return {
      components: { Task },
      template: `<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
      props: {
        task: {
          type: Object,
          default: object("task", { ...task })
        }
      },
      methods
    };
  })
  .add("pinned", () => {
    return {
      components: { Task },
      template: `<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
      data: () => ({ task: { ...task, state: "TASK_PINNED" } }),
      methods
    };
  })
  .add("archived", () => {
    return {
      components: { Task },
      template: `<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
      data: () => ({ task: { ...task, state: "TASK_ARCHIVED" } }),
      methods
    };
  })

  .add("longTitle", () => {
    return {
      components: { Task },
      template: `<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
      data: () => ({ task: { ...task, title: longTitle } }),
      methods
    };
  });
