import { html, TemplateResult } from 'lit';
import '../src/snippets-app.js';

export default {
  title: 'SnippetsApp',
  component: 'snippets-app',
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
  <snippets-app style="--snippets-app-background-color: ${backgroundColor}" .title=${title}></snippets-app>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
