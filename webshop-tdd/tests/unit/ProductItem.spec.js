import { shallowMount } from '@vue/test-utils';
import ProductItem from '@/components/ProductItem.vue';
import { enableFetchMocks } from 'jest-fetch-mock';

describe('Life cycle hook', () => {
  beforeEach(() => {
    enableFetchMocks();
    fetch.mockResponseOnce(
      JSON.stringify({
        products: [
          {
            id: 12,
            shikona: 'Hakuho',
            rank: 'Yokozuna',
            height: '192 cm',
            weight: '151 kg',
            price: 'Â¥1 000 000',
            picture: '../images/hakuho.jpg',
            vicsMessage: 'I am the GOAT. Google me.',
          },
          {
            id: 11,
            shikona: 'Terunofuji',
            rank: 'Yokozuna',
            height: '192 cm',
            weight: '184 kg',
            price: 'Â¥1 000 000',
            picture: '../images/terunofuji.jpg',
          },
          {
            id: 10,
            shikona: 'Takakeisho',
            rank: 'Ozeki',
            height: '175 cm',
            weight: '183 kg',
            price: 'Â¥900 000',
            picture: '../images/takakeisho.jpg',
          },
          {
            id: 9,
            shikona: 'Mitakeumi',
            rank: 'Sekiwake',
            height: '179 cm',
            weight: '172 kg',
            price: 'Â¥800 000',
            picture: '../images/mitakeumi.jpg',
          },
          {
            id: 8,
            shikona: 'Takayasu',
            rank: 'Komusubi',
            height: '187 cm',
            weight: '177 kg',
            price: 'Â¥700 000',
            picture: '../images/takayasu.jpg',
          },
          {
            id: 7,
            shikona: 'Ichinojo',
            rank: 'Komusubi',
            height: '190 cm',
            weight: '206 kg',
            price: 'Â¥700 000',
            picture: '../images/ichinojo.jpg',
          },
          {
            id: 6,
            shikona: 'Hoshoryu',
            rank: 'Maegashira',
            height: '187 cm',
            weight: '132 kg',
            price: 'Â¥500 000',
            picture: '../images/hoshoryu.jpg',
          },
          {
            id: 5,
            shikona: 'Takanosho',
            rank: 'Maegashira',
            height: '184 cm',
            weight: '163 kg',
            price: 'Â¥500 000',
            picture: '../images/takanosho.jpg',
          },
          {
            id: 4,
            shikona: 'Wakatakakage',
            rank: 'Maegashira',
            height: '180 cm',
            weight: '129 kg',
            price: 'Â¥500 000',
            picture: '../images/wakatakakage.jpg',
          },
          {
            id: 3,
            shikona: 'Ura',
            rank: 'Maegashira',
            height: '176 cm',
            weight: '147 kg',
            price: 'Â¥500 000',
            picture: '../images/ura.jpg',
          },
          {
            id: 2,
            shikona: 'Tobizaru',
            rank: 'Maegashira',
            height: '175 cm',
            weight: '131 kg',
            price: 'Â¥500 000',
            picture: '../images/tobizaru.jpg',
          },
          {
            id: 1,
            shikona: 'Tochinoshin',
            rank: 'Maegashira',
            height: '192 cm',
            weight: '175 kg',
            price: 'Â¥500 000',
            picture: '../images/tochinoshin.jpg',
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

  it('should show the fetched data when rendered', () => {
    const expected = 'Hakuho';
    const wrapper = shallowMount(ProductItem, {
      data: () => ({
        products: [
          {
            id: 12,
            shikona: 'Hakuho',
            rank: 'Yokozuna',
            height: '192 cm',
            weight: '151 kg',
            price: 'Â¥1 000 000',
            picture: '../images/hakuho.jpg',
            vicsMessage: 'I am the GOAT. Google me.',
          },
          {
            id: 11,
            shikona: 'Terunofuji',
            rank: 'Yokozuna',
            height: '192 cm',
            weight: '184 kg',
            price: 'Â¥1 000 000',
            picture: '../images/terunofuji.jpg',
          },
          {
            id: 10,
            shikona: 'Takakeisho',
            rank: 'Ozeki',
            height: '175 cm',
            weight: '183 kg',
            price: 'Â¥900 000',
            picture: '../images/takakeisho.jpg',
          },
          {
            id: 9,
            shikona: 'Mitakeumi',
            rank: 'Sekiwake',
            height: '179 cm',
            weight: '172 kg',
            price: 'Â¥800 000',
            picture: '../images/mitakeumi.jpg',
          },
          {
            id: 8,
            shikona: 'Takayasu',
            rank: 'Komusubi',
            height: '187 cm',
            weight: '177 kg',
            price: 'Â¥700 000',
            picture: '../images/takayasu.jpg',
          },
          {
            id: 7,
            shikona: 'Ichinojo',
            rank: 'Komusubi',
            height: '190 cm',
            weight: '206 kg',
            price: 'Â¥700 000',
            picture: '../images/ichinojo.jpg',
          },
          {
            id: 6,
            shikona: 'Hoshoryu',
            rank: 'Maegashira',
            height: '187 cm',
            weight: '132 kg',
            price: 'Â¥500 000',
            picture: '../images/hoshoryu.jpg',
          },
          {
            id: 5,
            shikona: 'Takanosho',
            rank: 'Maegashira',
            height: '184 cm',
            weight: '163 kg',
            price: 'Â¥500 000',
            picture: '../images/takanosho.jpg',
          },
          {
            id: 4,
            shikona: 'Wakatakakage',
            rank: 'Maegashira',
            height: '180 cm',
            weight: '129 kg',
            price: 'Â¥500 000',
            picture: '../images/wakatakakage.jpg',
          },
          {
            id: 3,
            shikona: 'Ura',
            rank: 'Maegashira',
            height: '176 cm',
            weight: '147 kg',
            price: 'Â¥500 000',
            picture: '../images/ura.jpg',
          },
          {
            id: 2,
            shikona: 'Tobizaru',
            rank: 'Maegashira',
            height: '175 cm',
            weight: '131 kg',
            price: 'Â¥500 000',
            picture: '../images/tobizaru.jpg',
          },
          {
            id: 1,
            shikona: 'Tochinoshin',
            rank: 'Maegashira',
            height: '192 cm',
            weight: '175 kg',
            price: 'Â¥500 000',
            picture: '../images/tochinoshin.jpg',
          },
        ],
      }),
    });

    const nameElem = wrapper.find('h4');
    const text = nameElem.text();
    console.log(text);

    expect(text).toBe(expected);
  });

  it('should add a product to the cart', () => {});

  // This requires an error message in my fetch
  // it('should return an error message if a fetch cannot be mocked', async () => { });
});
