import { shallowMount } from '@vue/test-utils';
import ProductView from '@/views/ProductView.vue';
import ProductItem from '@/components/ProductItem.vue';

describe('ProductView.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(ProductView);
  });

  it('should find ProductItem.vue as an imported component', () => {
    const productItem = wrapper.findComponent(ProductItem);
    expect(productItem.exists()).toBe(true);
    console.log(productItem);
  });
});
