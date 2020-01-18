import { mount } from '@vue/test-utils';
import Me from '@/views/Me.vue';

describe('Me view', () => {
  it('should be is a Vue instance', () => {
    const me = mount(Me);
    expect(me.isVueInstance()).toBeTruthy();
  });

  it('should be a title with Me, my and I', () => {
    const title = 'Me, My and I';
    const me = mount(Me);
    expect(me.find('h1').text()).toBe(title);
  });
});
