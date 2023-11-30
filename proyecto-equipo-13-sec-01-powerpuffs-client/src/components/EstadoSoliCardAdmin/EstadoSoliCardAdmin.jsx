import React, { useState } from 'react';
import './EstadoSoliCardAdmin.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AdopcionAdminCard from '../cards/AdopcionAdminCard/AdopcionAdminCard';

const EstadoSoliCardAdmin = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  return (
    <div className='Tab-container'>
      <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
        <TabList>
          <Tab>Pendientes</Tab>
          <Tab>En Proceso</Tab>
          <Tab>Finalizado</Tab>
        </TabList>

        <TabPanel>
          <AdopcionAdminCard/>
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


