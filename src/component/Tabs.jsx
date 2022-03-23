import React, { useState } from 'react';
import FormTab from './FormTab';
import TableTab from './TableTab';

export const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {

    const handleClick = () => {
        setActiveTab(id);
    };

    return (
        <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
            {title}
        </li>
    );
};

export const TabContent = ({ id, activeTab, children }) => {
    return (
        activeTab === id ?
            <div className="tab_content">
                {children}
            </div>
            : null
    );
};

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <div className="Tabs">
            <ul className="nav">
                <TabNavItem title="Form" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabNavItem title="Table" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
            </ul>

            <div className="outlet">
                <TabContent id="tab1" activeTab={activeTab}>
                    <FormTab />
                </TabContent>
                <TabContent id="tab2" activeTab={activeTab}>
                    <TableTab />
                </TabContent>
            </div>
        </div>
    );
};

export default Tabs;