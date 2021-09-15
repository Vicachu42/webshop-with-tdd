import { shallowMount } from '@vue/test-utils';
import CartView from '@/views/CartView.vue';
import CartItem from '@/components/CartItem.vue';

describe('CartView.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(CartView);
  });

  it('should find CartItem.vue as an imported component', () => {
    const cartItem = wrapper.findComponent(CartItem);
    expect(cartItem.exists()).toBe(true);
    // console.log(cartItem);
  });

  // Testa klickevent
  it('should show the product view when clicked', async () => {
    await wrapper.find('button').trigger('click');

    wrapper.vm.emitToggle();
    console.log(wrapper.emitted());
  });
});
