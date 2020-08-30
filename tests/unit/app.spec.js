import {mount} from '@vue/test-utils';
import App from "@/App.vue"; 
import {countries} from './countries.js';

global.fetch = jest.fn(() =>
Promise.resolve({
  json: () => Promise.resolve({} ),
})
);


describe('App', () => {
  it('should have 2 countries', () => {
    const wrapper = mount(App);
    wrapper.setData({countries: countries}); 
    expect(wrapper.vm.countries).toHaveLength(2)  
  });
})
