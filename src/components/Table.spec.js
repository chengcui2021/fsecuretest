import { mount } from '@vue/test-utils'
import App from "@/App";

const data = [
  {
    id: 1,
    title: 'Fbiola Esther',
    content: 'Computer Science',
    status: 'New',
    checked: false,
  },
  {
    id: 2,
    title: 'Abiola Esther',
    content: 'Computer Science',
    status: 'Completed',
    checked: false,
  },
  {
    id: 3,
    title: 'fugiat veniam minus',
    content: 'Lorem ipsum',
    status: 'Not Completed',
    checked: false,
  },
];

describe('app', () => {
  const wrapper = mount(App);
  it('get 3 table rows when mounted', () => {
    expect(typeof App.data).toBe('function');
    expect(wrapper.find('table').exists()).toBe(true);
    expect(wrapper.findAll(".table-content").length).toBe(data.length)
  });
});
