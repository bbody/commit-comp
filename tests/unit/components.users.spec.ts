import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import Users from '@/components/Users.vue';

describe('Users', () => {
  let wrapper: any;

  const routes = [] as any;

  const router = new VueRouter({ routes });

  beforeEach(() => {

    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(Vuetify);

    wrapper = mount(Users, {
      localVue,
      router,
    });
  });
//   it('does not display element if there are no items', () => {
//     // No items to display.
//     // NOTE: By default, our component has some items, but we use
//     // setData() here to override it with an empty array of tiems to
//     // make sure we have not items at all and our test works as
//     // expected.
//     wrp.setData({ items: [] });
//     expect(wrp.find('.item-index-row').exists()).toBe(false);
//   });
  // `it' and `expect's ready to go now.
});
