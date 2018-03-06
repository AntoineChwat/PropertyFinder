import 'react-native';
import React from 'react';
import ListItem from '../src/Components/ListItem';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import { configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';

import sinon from 'sinon';

const item = {
	bathroom_number: '',
	bedroom_number: 1,
	car_spaces: 0,
	commission: 0,
	construction_year: 0,
	datasource_name: 'NetHousePrices',
	img_height: 300,
	img_url: 'https://imgs.nestimg.com/unspecified_london_108799203763910940.jpg',
	img_width: 400,
	keywords: '',
	latitude: 51.532856,
	lister_url: 'https://www.nestoria.co.uk/detail/0000000108799203763910940/title/5/1-1?serpUid=&pt=1&ot=1&l=london&did=90_high1&utm_source=api&utm_medium=external',
	listing_type: 'buy',
	location_accuracy: 9,
	longitude: -0.1351723,
	price: 545000,
	price_currency: '£',
	price_formatted: '£545,000',
	price_high: 545000,
	price_low: 545000,
	property_type: 'flat',
	size: 0,
	size_type: 'net',
	summary: '1 bedroom flat chain free long lease location immediately available...',
	thumb_height: 60,
	thumb_url: 'https://imgs.nestimg.com/medium/unspecified_london_108799203763910940.jpg',
	thumb_width: 80,
	title: 'Werrington Street, London, NW1',
	updated_in_days: 1,
	updated_in_days_formatted: 'new!'
};

describe('ListItem', () => {
	it('should render correctly', () => {
		const tree = renderer.create(
			<ListItem
				item={item}
				onPressItem={() => console.log('pressed')}
			/>
		);
		tree.toJSON();
		expect(tree).toMatchSnapshot();
	});
	it('should be clickable', () => {
		const onPressSpy = sinon.spy();
		const wrapper = shallow(
			<ListItem
				item={item}
				onPressItem={onPressSpy}
			/>
		);
		wrapper.find('TouchableHighlight').simulate('press');
		expect(onPressSpy.calledOnce).toBe(true);
	});
	it('should handle an empty item', () => {
		const item = {};
		const wrapper = shallow(
			<ListItem
				item={item}
				onPressItem={() => {}}
			/>
		);
		const title = wrapper.find('Text').get(1).props.children;
		const price = wrapper.find('Text').get(0).props.children;
		const image = wrapper.find('Image').props().source.uri;
		expect(title).toMatch('Unknown title');
		expect(price).toMatch('Unknown price');
		expect(image).toMatch('https://www.pixedelic.com/themes/geode/demo/wp-content/uploads/sites/4/2014/04/placeholder4.png');
	});
});
