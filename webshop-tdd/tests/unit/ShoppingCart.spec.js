import { shallowMount } from '@vue/test-utils';
import ShoppingCart from '@/components/ShoppingCart.vue';

describe('ShoppingCart.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(ShoppingCart);
  });

  // Am I testing what I think I'm testing here?
  it('should show the product view when clicked', async () => {
    wrapper.vm.emitToggle();
    console.log(wrapper.emitted());
  });
});
