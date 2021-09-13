import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import Header from '@/components/Header.vue';
import ProductView from '@/views/ProductView.vue';
import CartView from '@/views/CartView.vue';
import Footer from '@/components/Footer.vue';

describe('Home.vue', () => {
  let wrapper;
  beforeEach(() => {
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

  it('should show the product view when rendered', async () => {
    const wrapper = shallowMount(Home, {
      data() {
        return { isRendered: true };
      },
    });

    expect(wrapper.find('.product-view').isVisible()).toBe(true);
  });

  it('should not show the cart view when rendered', () => {});
  it('should show the cart view when clicked', () => {});
});

// it('should display product view when rendered', () => {
//   const expected = true;
//   const componentElem = wrapper.find('ProductView');

//   const

//   expect(componentElem).toBe(expected);
// });

// it('should render child component', () => {
//   const wrapper = shallowMount(Home, {
//     data() {
//       return { isVisible: true };
//     },
//   });
//   expect(wrapper.findComponent({ name: 'Header' }).exists()).toBe(true);
// });

// it('should render child component', () => {
//   const wrapper = shallowMount(Home);

//   expect(wrapper.findComponent(Header).exists()).toBe(true);
// });

// import ProductView from '@views/ProductView.vue';

// it('renders a child component', () => {
//   const wrapper = shallowMount(Home, {
//     data() {
//       return { isVisible: true };
//     },
//   });

//   expect(wrapper.findComponent({ name: 'ProductView' }).exists()).toBe(true);
// });

// describe('Home.vue', () => {
//   // let wrapper;
//   // beforeEach(() => {
//   //   wrapper = shallowMount(Home);
//   // });

//   it('should display the product view when rendered', () => {
//     const wrapper = shallowMount(Home);

//     expect(wrapper.findComponent(ProductView).exists()).toBe(true);
//   });

//   // it('should not display the cart view when rendered', () => {

//   // });
// });

// it('should show the product view when rendered', async () => {
//     const expected = true;

//     expect(wrapper.vm.$data).toBe(expected);

// const expected = true;
// const wrapper = shallowMount(ProductView);

// await wrapper.setData({ isRendered: '' });

// expect(wrapper.vm.$data).toBe(true);

// expect(renderedElem).toBe(expected);

// await wrapper.setData({ isRendered: true });

// expect(wrapper.vm.isRendered).toBe(expected);

// const renderedElem = wrapper.find(isRendered);
// await renderedElem.setData(true);

// const wrapper = shallowMount(ProductView, {
//   data() {
//     return {
//       isRendered: true,
//     };
//   },
// });
