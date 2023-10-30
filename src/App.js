import './App.css';
import {Button, Tabs, Tab} from 'react-bootstrap';
import logo from './logo.svg';
import React, { useState } from 'react';

function App() {

    // One of the essential hooks provided by React is the useState() hook,
    // which is used to create the state and update the form.
    // The useState() takes an object as a parameter and returns an array;
    // we can use array destructuring to get the two essential elements from
    // the collection: the state’s current value and a function used to update the form.
    const [tabs, setTabs] = useState([
        {id: 1, title: 'Tab 1', content: 'Tab 1 content'},
        {id: 2, title: 'Tab 2', content: 'Tab 2 content'},
    ]);

    const [activeTab, setActiveTab] = useState(1);
    // add a new tab
    const addTab = () => {
        const newTab = {
            id: tabs.length + 1,
            title: `Tab ${tabs.length + 1}`,
            content: `Tab ${tabs.length + 1} content`
        };
        setTabs([...tabs, newTab]);
        setActiveTab(newTab.id);
    };
    // delete the last tab
    const deleteTab = () => {
        tabs.pop()
        setTabs(tabs);
        if (tabs.length > 0) setActiveTab(tabs[tabs.length-1].id);
    };
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>React Dynamic Tabs</h1>
            </header>
            <Tabs
                activeKey={activeTab}
                onSelect={(k) => setActiveTab(Number(k))}
                id="controlled-tabs">
                {tabs.map((tab) => (
                    <Tab key={tab.id} eventKey={tab.id} title={tab.title}>
                        {tab.content}
                    </Tab>
                ))}
            </Tabs>
            <Button onClick={addTab} className="mt-3">
            Add Tab
            </Button>
            <Button onClick={deleteTab} className="mt-3">
                Delete Tab
            </Button>
        </div>
    );

}

export default App;
