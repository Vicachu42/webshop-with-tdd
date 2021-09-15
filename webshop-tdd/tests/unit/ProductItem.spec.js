import { shallowMount } from '@vue/test-utils';
import ProductItem from '@/components/ProductItem.vue';
import { enableFetchMocks } from 'jest-fetch-mock';

describe('Cycle hook', () => {
  beforeEach(() => {
    enableFetchMocks();
    fetch.mockResponseOnce(
      JSON.stringify({
        products: [
          {
            id: 10,
            shikona: 'Hakuho',
            rank: 'Yokozuna',
            height: '192 cm',
            weight: '151 kg',
            price: 'Â¥1 000 000',
            picture: '../images/hakuho.jpg',
            vicsMessage: 'I am the GOAT. Google me.',
          },
          {
            id: 9,
            shikona: 'Terunofuji',
            rank: 'Yokozuna',
            height: '192 cm',
            weight: '184 kg',
            price: 'Â¥1 000 000',
            picture: 'sumo-api/images/terunofuji.jpg',
          },
          {
            id: 8,
            shikona: 'Takakeisho',
            rank: 'Ozeki',
            height: '175 cm',
            weight: '183 kg',
            price: 'Â¥900 000',
            picture: '../../src/assets/takakeisho.jpg',
          },
          {
            id: 7,
            shikona: 'Mitakeumi',
            rank: 'Sekiwake',
            height: '179 cm',
            weight: '172 kg',
            price: 'Â¥800 000',
            picture: './assets/mitakeumi.jpg',
          },
          {
            id: 6,
            shikona: 'Takayasu',
            rank: 'Komusubi',
            height: '187 cm',
            weight: '177 kg',
            price: 'Â¥700 000',
            picture: 'assets/takayasu.jpg',
          },
          {
            id: 5,
            shikona: 'Takanosho',
            rank: 'Sekiwake',
            height: '184 cm',
            weight: '163 kg',
            price: 'Â¥800 000',
            picture: '/src/assets/takanosho.jpg',
          },
          {
            id: 4,
            shikona: 'Wakatakakage',
            rank: 'Maegashira',
            height: '180 cm',
            weight: '129 kg',
            price: 'Â¥500 000',
            picture: '/src/assets/wakatakakage.jpg',
          },
          {
            id: 3,
            shikona: 'Ura',
            rank: 'Maegashira',
            height: '176 cm',
            weight: '147 kg',
            price: 'Â¥500 000',
            picture: '/src/assets/ura.jpg',
          },
          {
            id: 2,
            shikona: 'Tobizaru',
            rank: 'Maegashira',
            height: '175 cm',
            weight: '131 kg',
            price: 'Â¥500 000',
            picture: '/src/assets/tobizaru.jpg',
          },
          {
            id: 1,
            shikona: 'Tochinoshin',
            rank: 'Maegashira',
            height: '192 cm',
            weight: '175 kg',
            price: 'Â¥500 000',
            picture: '/src/assets/tochinoshin.jpg',
          },
        ],
      })
    );
  });

  it('should call the init method', () => {
    const wrapper = shallowMount(ProductItem);

    const calls = fetch.mock.calls.length;

    expect(calls).toBe(1);
  });

  // it('should call the init method', () => {
  //   const spy = jest.spyOn(ProductItem.methods, 'init');
  //   createWrapper = shallowMount(ProductItem, { localvue });
  //   expect(spy).toBeCalled();
  // });

  // it('should call the init method', () => {
  //   wrapper = shallowMount(ProductItem, {
  //     localvue,
  //     methods: {
  //       init: jest.fn(),
  //     },
  //   });
  //   expect(wrapper.vm.init).toBeCalled();
  // });

  // await wrapper.vm.init();
});
