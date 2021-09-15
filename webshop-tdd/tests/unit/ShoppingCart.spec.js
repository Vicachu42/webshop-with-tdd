import { shallowMount } from '@vue/test-utils';
import ShoppingCart from '@/components/ShoppingCart.vue';

describe('ShoppingCart.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(ShoppingCart);
  });

  it('should show the product view when clicked', async () => {
    await wrapper.find('.shopping-basket').trigger('click');

    wrapper.vm.emitToggle();
    console.log(wrapper.emitted());
  });
});
