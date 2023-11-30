import React, { useState } from 'react';
import './EstadoSoliCardAdmin.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const EstadoSoliCardAdmin = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  return (
    <div>
      <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>

        <TabPanel>
          <h2>Content for Tab 1</h2>
          {/* Add your content for Tab 1 here */}
        </TabPanel>
        <TabPanel>
          <h2>Content for Tab 2</h2>
          {/* Add your content for Tab 2 here */}
        </TabPanel>
        <TabPanel>
          <h2>Content for Tab 3</h2>
          {/* Add your content for Tab 3 here */}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default EstadoSoliCardAdmin;


