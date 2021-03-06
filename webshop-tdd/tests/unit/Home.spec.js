import { shallowMount, mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import Header from '@/components/Header.vue';
import ProductView from '@/views/ProductView.vue';
import CartView from '@/views/CartView.vue';
import Footer from '@/components/Footer.vue';
import { enableFetchMocks } from 'jest-fetch-mock';

describe('Home.vue', () => {
  let wrapper;
  beforeEach(() => {
    enableFetchMocks();
    wrapper = shallowMount(Home);
  });

  it('should find Header.vue as an imported component', () => {
    const header = wrapper.findComponent(Header);
    expect(header.exists()).toBe(true);
    // console.log(header);
  });

  it('should find ProductView.vue as an imported component', () => {
    const productView = wrapper.findComponent(ProductView);
    expect(productView.exists()).toBe(true);
    // console.log(productView);
  });

  it('should find CartView.vue as an imported component', () => {
    const cartView = wrapper.findComponent(CartView);
    expect(cartView.exists()).toBe(true);
    // console.log(cartView);
  });

  it('should find Footer.vue as an imported component', () => {
    const footer = wrapper.findComponent(Footer);
    expect(footer.exists()).toBe(true);
    // console.log(footer);
  });

  it('should show the product view when rendered', () => {
    const wrapper = shallowMount(Home, {
      data() {
        return { isRendered: true };
      },
    });

    expect(wrapper.find('.product-view').isVisible()).toBe(true);
  });

  it('should not show the cart view when rendered', () => {
    const wrapper = shallowMount(Home, {
      data() {
        return { isRendered: true };
      },
    });

    expect(wrapper.find('.cart-view').isVisible()).toBe(false);
  });

  it('should show the cart view when clicked', async () => {
    const wrapper = mount(Home, {
      data() {
        return { isRendered: true };
      },
    });

    const buttonElem = wrapper.find('.shopping-basket');
    await buttonElem.trigger('click');

    expect(wrapper.find('.cart-view').isVisible()).toBe(true);
  });

  it('should show the product view when clicked', async () => {
    const wrapper = mount(Home, {
      data() {
        return { isRendered: false };
      },
    });

    const buttonElem = wrapper.find('.go-back-button');
    await buttonElem.trigger('click');

    expect(wrapper.find('.product-view').isVisible()).toBe(true);
  });

  //This is optional, will do if I have the time
  // it('should render the shopping cart icon inactive when cart view is visible', async () => {});
});
