import { mount } from '@vue/test-utils';
import FancyHeading from '@/components/FancyHeading.vue';

describe('Unit test for FancyHeading component', () => {
  test('is a Vue Instance', () => {
    const wrapper = mount(FancyHeading);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
