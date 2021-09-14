import { createWrapper, shallowMount } from '@vue/test-utils';
import ProductItem from '@/components/ProductItem.vue';
import { enableFetchMocks } from 'jest-fetch-mock';

describe('Cycle hook', () => {
  beforeEach(() => {
    enableFetchMocks();
    fetch.mockResponseOnce(
      JSON.stringify({
        id: 9,
        shikona: 'Terunofuji',
        rank: 'Yokozuna',
        height: '192 cm',
        weight: '184 kg',
        price: '¥1 000 000',
        picture: 'sumo-api/images/terunofuji.jpg',
      })
    );
  });

  it('should call the init method', () => {
    const spy = jest.spyOn(ProductItem.methods, 'init');
    createWrapper = shallowMount(ProductItem, { localvue });
    expect(spy).toBeCalled();
  });

  // it('should call the init method', () => {
  //   wrapper = shallowMount(ProductItem, {
  //     localvue,
  //     methods: {
  //       init: jest.fn(),
  //     },
  //   });
  //   expect(wrapper.vm.init).toBeCalled();
  // });
});
