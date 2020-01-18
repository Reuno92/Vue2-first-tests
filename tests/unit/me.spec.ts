import { mount } from '@vue/test-utils';
import Me from '@/views/Me.vue';

describe('Me view', () => {
  it('should be is a Vue instance', () => {
    const me = mount(Me);
    expect(me.isVueInstance()).toBeTruthy();
  });
});
