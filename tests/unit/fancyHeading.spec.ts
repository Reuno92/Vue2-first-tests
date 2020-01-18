import { mount } from '@vue/test-utils';

describe('Unit test for FancyHeading component', () => {
  it('should be created', () => {
    test('is a Vue Instance', () => {
      const wrapper = mount(FancyHeading);
      expect(wrapper.isVueInstance()).toBeTruthy();
    });
  });
});
