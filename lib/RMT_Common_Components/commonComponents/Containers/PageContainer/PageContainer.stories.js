import PageContainer from './PageContainer';
 
export default {
 title: 'Containers/PageContainer',
 component: PageContainer,
 argTypes: {
 },
};
 
const Template = (args) => <PageContainer {...args} />;
 
export const Default = Template.bind({});
Default.args = {
 children: <div><h1>Hello</h1><p>This is a page container example</p></div>
};
 
 
 
 

