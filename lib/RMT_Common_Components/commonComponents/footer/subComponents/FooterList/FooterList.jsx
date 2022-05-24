import PropTypes from 'prop-types'
import { FooterListContainer } from './FooterListStyles';

const FooterList = ({ title = "", items = [], socialLinks }) => {
	return (
		<FooterListContainer>
			<h3>{title}</h3>
			<ul>
				{items.map((item, id) => (
					<li key={id}>
						<a href={item.url}>
							{item.name}
						</a>
					</li>
				))
				}
			</ul>
		</FooterListContainer>
	)
}


FooterList.propTypes = {
	title: PropTypes.string,
	items: PropTypes.array
};

FooterList.defaultProps = {
	title: "Company",
	items: [
		{name: "item-1", url: "/url-1"},
		{name: "item-2", url: "/url-2"},
		{name: "item-3", url: "/url-3"},
		{name: "item-4", url: "/url-4"}
	]
};

export default FooterList