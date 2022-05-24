import SliceContainer from './SliceContainer';
 
export default {
 title: 'Containers/SliceContainer',
 component: SliceContainer,
 argTypes: {
 },
};
 
const Template = (args) => <SliceContainer {...args} />;
 
export const Default = Template.bind({});
Default.args = {
 children: <div><h1>Hello</h1><p>This is a section container example</p></div>
};
 
 
 
 

