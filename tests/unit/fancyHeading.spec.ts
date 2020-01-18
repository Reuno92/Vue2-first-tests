import { mount } from '@vue/test-utils';
import FancyHeading from '@/components/FancyHeading.vue';

describe('Unit test for FancyHeading component', () => {
  test('is a Vue Instance', () => {
    const wrapper = mount(FancyHeading);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('title should be Hello World', () => {
    const received = 'Hello World';
    const expected = 'Hello world';
    const wrapper = mount(FancyHeading, {
      propsData: {
        title: received,
      },
    });
    expect(wrapper.find('h1').text()).toBe(expected);
  });
});
