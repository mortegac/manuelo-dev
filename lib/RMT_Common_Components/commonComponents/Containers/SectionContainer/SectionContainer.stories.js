import SectionContainer from './SectionContainer';
 
export default {
 title: 'Containers/SectionContainer',
 component: SectionContainer,
 argTypes: {
 },
};
 
const Template = (args) => <SectionContainer {...args} />;
 
export const Default = Template.bind({});
Default.args = {
 children: <div><h1>Hello</h1><p>This is a section container example</p></div>
};
 
 
 
 

