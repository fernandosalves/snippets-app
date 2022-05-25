import { html, TemplateResult } from 'lit';
import '../src/gist-app.js';

export default {
  title: 'GistApp',
  component: 'gist-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <gist-app style="--gist-app-background-color: ${backgroundColor}" .title=${title}></gist-app>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
