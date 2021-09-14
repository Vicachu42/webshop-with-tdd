import { shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';

describe('Header.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Header);
  });

  it('should find ShoppingCart.vue as an imported component', () => {
    const shoppingCart = wrapper.findComponent(ShoppingCart);
    expect(shoppingCart.exists()).toBe(true);
    console.log(shoppingCart);
  });

  //Should I test the listener?
});
