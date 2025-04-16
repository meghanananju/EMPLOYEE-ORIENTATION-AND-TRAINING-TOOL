 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : allComponents.tsx
*
* Description      : All Components
*
* Author(s)        : Chetan Biradar
*
* Version History:
* <Version Number>                 <Author>                <date>        <defect Number>      <Modification
*                                                                                           made and the
*                                                                                           reason for
*                                                                                           modification >
*  1.0                            Chetan Biradar          14-04-2025         --              initial version
*
* References        :
*                     
* Assumption(s)     : None.
*                     
* Constraint(s)     : None.
*                     
 ****************************************************************************
*/
import React, { useState } from 'react'
 import dayjs from 'dayjs';
import CalendarInput from '../components/UI/calendar';
import Card from '../components/UI/card';
import CountCard from '../components/UI/countCard';
import Button from '../components/UI/button';
import Alert from '../components/UI/alertModal';
import StripAlert from '../components/UI/stripAlert';
import Modal from '../components/UI/modal';
import Input from '../components/UI/input';
import Textarea from '../components/UI/textArea';
import SearchField from '../components/UI/searchInput';
import {Checkbox,CheckboxGroup} from '../components/UI/checkBox';
import {RadioButton} from '../components/UI/radioButton';
import Switch from '../components/UI/switch';
import Pulldown from '../components/UI/pulldown';
import Tab from '../components/UI/tab';
import MultiColorLoader from '../components/UI/mulitColorLoader';
import Loader from '../components/UI/loader';
import { Table ,Thead, Tbody, Tr, Th,  Td} from '../components/UI/table';
import { LikeButton } from '../components/UI/likeButton';
// import { SquareSwitch } from '../components/UI/circularSwitch';
import SquareSwitch from '../components/UI/circularSwitch';
import Divider from '../components/UI/divider';
 // Define the type for the data structure with index signature
interface TableData {
  [key: string]: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  status: string;
  joined: string;
  role: string;
  department: string;
}

export default function Dashboard() {
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showStrip, setShowStrip] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpensm, setIsModalOpensm] = useState(false);
  const [isModalOpenlg, setIsModalOpenlg] = useState(false);
  const [isModalOpenxl, setIsModalOpenxl] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  //  const [date, setDate] = useState(dayjs());
const [showLoader,setShowLoader]=useState(false)

  const handleSwitchChange = (newState: boolean) => {
    setIsChecked(newState);
    console.log('Switch is now:', newState ? 'On' : 'Off');
  };

  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 5000); // Simulating a 3-second loading process
  };

 
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [selected, setSelected] = useState<string>('option1');

  const options = [
    { id: 'Option1', label: 'Option 1' },
    { id: 'Option2', label: 'Option 2' },
    { id: 'Option3', label: 'Option 3' },
  ];

  const [notes, setNotes] = useState('');

  const handleChangeTextare = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
  };

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };


  const people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
    { id: 7, name: 'Caroline Schultz' },
    { id: 8, name: 'Mason Heaney' },
    { id: 9, name: 'Claudie Smitham' },
    { id: 10, name: 'Emil Schaefer' },
  ];

  const HomeIcon = () => <span>🏠</span>;
  const ProfileIcon = () => <span>👤</span>;
  const SettingsIcon = () => <span>⚙️</span>;
  const ContactIcon = () => <span>📧</span>;
  const HelpIcon = () => <span>❓</span>;
  const AboutIcon = () => <span>ℹ️</span>;

  const tabs = [
    {
      name: 'Home',
      active: true,
      icon: <HomeIcon />,
      content: 'Welcome to the Home Tab!'
    },
    {
      name: 'Profile',
      icon: <ProfileIcon />,
      content: 'This is your profile information.'
    },
    {
      name: 'Settings',
      icon: <SettingsIcon />,
      component: <div><h2>Settings Panel</h2><p>Adjust your preferences here.</p></div>
    },
    {
      name: 'Contact',
      icon: <ContactIcon />,
      content: 'Reach us via email or phone.'
    },
    {
      name: 'Help',
      icon: <HelpIcon />,
      content: 'Find FAQs and support options here.'
    },
    {
      name: 'About',
      icon: <AboutIcon />,
      content:
        <div className='flex '>
          <Card
            title="Welcome to Our Service"
            content={<p>A collection of beautiful, production-ready UI components to drop into your projects alongside your own code — yours to customize, adapt, and make your own.</p>}
             
          >
 <div className="flex gap-2">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Learn More</button>
            <button className="px-4 py-2 bg-gray-300 text-black rounded-md">Dismiss</button>
              </div>
          </Card>
          <Card
            title="Welcome to Our Service"
            content={<p>A collection of beautiful, production-ready UI components to drop into your projects alongside your own code — yours to customize, adapt, and make your own.</p>}
            footer={
              <div className="flex gap-2">
                {/* <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Learn More</button>
            <button className="px-4 py-2 bg-gray-300 text-black rounded-md">Dismiss</button> */}
              </div>
            }
          />
          <Card
            title="Welcome to Our Service"
            content={<p>A collection of beautiful, production-ready UI components to drop into your projects alongside your own code — yours to customize, adapt, and make your own.</p>}
            footer={
              <div className="flex gap-2">
                {/* <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Learn More</button>
            <button className="px-4 py-2 bg-gray-300 text-black rounded-md">Dismiss</button> */}
              </div>
            }
          />
        </div>
    }
  ];
 
  const [selectedDate, setSelectedDate] = useState(dayjs()); 

  const [isOn, setIsOn] = useState(false);

  const handleChange = (newState: boolean) => {
    setIsOn(newState);
  };
 
  // Dummy data with dynamic properties
 const data: TableData[] = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '(123) 456-7890',
    address: '123 Main St, Springfield, IL',
    status: 'Active',
    joined: '2023-01-15',
    role: 'Admin',
    department: 'Tech',
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '(987) 654-3210',
    address: '456 Oak St, Rivertown, TX',
    status: 'Inactive',
    joined: '2022-11-03',
    role: 'User',
    department: 'Sales',
  },
  {
    name: 'Mark Smith',
    email: 'mark@example.com',
    phone: '(555) 123-4567',
    address: '789 Pine St, Greenfield, CA',
    status: 'Active',
    joined: '2024-02-25',
    role: 'Manager',
    department: 'HR',
  },
  {
    name: 'Alice Johnson',
    email: 'alice@example.com',
    phone: '(444) 321-9876',
    address: '321 Birch St, Lakewood, CO',
    status: 'Pending',
    joined: '2023-09-10',
    role: 'User',
    department: 'Tech',
  },
  {
    name: 'Bob Lee',
    email: 'bob@example.com',
    phone: '(777) 111-2222',
    address: '101 Maple St, Dallas, TX',
    status: 'Active',
    joined: '2021-06-19',
    role: 'Admin',
    department: 'Sales',
  },
];

  // Extract headers dynamically by getting the keys from the first object in the data
  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className="bg-white">  
  {showLoader && (
 <MultiColorLoader />
  )}  
 

     
      {/* Buttons */}
      <div className='flex flex-wrap items-center justify-around gap-6 '>
        {/* <BackButton label="Go Home" onClick={handleBackClick} /> */}
        <Button text="Error Alert"  variant='border' onClick={() => setShowAlert(true)} type="error" size='sm' />
        <Button text="Success Alert" onClick={() => setShowSuccess(true)} type="success" size='sm' />
        <Button text="Warning Alert" onClick={() => setShowWarning(true)} type="warning" size='sm' />
         <Button text='Horizontal Loader' onClick={()=>{setShowLoader(true)
         setTimeout(() => setShowLoader(false), 5000);
         }} type='info' size='sm'></Button>
 
        <Button text="Primary Button" variant="base" color="blue" href="#" onClick={() => setShowStrip(true)} size='sm' />
        <Button text="Loading" variant="border" color="indigo" href="#" onClick={handleButtonClick} size='sm' />
        <Button text="Small Modal" variant="base" color="blue" href="#" onClick={() => setIsModalOpensm(true)} size='sm' />
        <Button text="Medium Modal" variant="border" color="blue" href="#" onClick={() => setIsModalOpen(true)} size='sm' />

 
        <Button text="large Modal" variant="base" color="blue" href="#" onClick={() => setIsModalOpenlg(true)} />
        <Button text="xl Modal" variant="base" color="blue" href="#" onClick={() => setIsModalOpenxl(true)} />
        <Button text="Info Alert" onClick={() => setShowInfo(true)} type="info" size='md' />

<div className="flex items-center justify-center border rounded-lg border-gray-200 px-4 py-2 space-x-2 cursor-pointer" >
  <LikeButton
    initiallyLiked={false}
    onToggle={(liked) => console.log("Liked:", liked)}
  />
  <span className="text-gray-700">Like</span>
</div>

      
      </div>

      {loading && <Loader />}
      {/* Modals */}
      <div>
        {isModalOpensm && (
          <Modal
            size="sm"
            title="Tailwind Small Modal"
            content="Use these Tailwind CSS modal dialog components to create pop-up boxes for things like alerts, notifications, or confirmation prompts. "
            onCancel={() => setIsModalOpensm(false)}
            onViewDetails={() => console.log('View Details clicked')}
          />
        )}

        {isModalOpen && (
          <Modal
            size="md"
            title="Tailwind Large Modal"
            content="Use these Tailwind CSS modal dialog components to create pop-up boxes for things like alerts, notifications, or confirmation prompts. These modals are designed and built by the Tailwind CSS team, and include a variety of different styles and layouts."
            onCancel={() => setIsModalOpen(false)}
            onViewDetails={() => console.log('View Details clicked')}
          />
        )}


        {isModalOpenlg && (
          <Modal
            size="lg"
            title="Tailwind Large Modal"
            content="Use these Tailwind CSS modal dialog components to create pop-up boxes for things like alerts, notifications, or confirmation prompts. These modals are designed and built by the Tailwind CSS team, and include a variety of different styles and layouts."
            onCancel={() => setIsModalOpenlg(false)}
            onViewDetails={() => console.log('View Details clicked')}
          />
        )}


        {isModalOpenxl && (
          <Modal
            size="xl"
            title="Tailwind Large Modal"
            content="Use these Tailwind CSS modal dialog components to create pop-up boxes for things like alerts, notifications, or confirmation prompts. These modals are designed and built by the Tailwind CSS team, and include a variety of different styles and layouts."
            onCancel={() => setIsModalOpenxl(false)}
            onViewDetails={() => console.log('View Details clicked')}
          >
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-5'>
              <Input
                id="username"
                name="username"
                label="Username"
                placeholder="Enter your username"
                onChange={(val) => console.log(val)}
                required
                errorMsg='Enter your username'
              />

              <Input
                id="email"
                name="email"
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                onChange={(val) => setValue(val)}
                value={value}
              />

              <Input
                id="password"
                name="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
                // onChange={(val) => setValue(val)}
                value={"value"}
                disabled={true}
                errorMsg='Field disabled'
              />



              <Pulldown
                options={people}
                // value={[
                //   { id: 1, name: 'Wade Cooper' },
                //   { id: 2, name: 'Arlene Mccoy' },
                // ]}
                selectType="multi"
                placeholder="Select a value"
                label='Select a value'
                required

              />
              <Pulldown
                label='Select a value'
                value={{ id: 1, name: 'Wade Cooper' }}
                options={people}
                selectType="single"
                placeholder="Select a value"
              />

              <Pulldown
                options={people}
                value={[
                  { id: 1, name: 'Wade Cooper' },
                  { id: 2, name: 'Arlene Mccoy' },
                ]}
                selectType="multi"
                placeholder="Select a value"
                label='Select a value'
                required
                disabled={true}
                errorMsg='Field disabled'
              />



              <Textarea
                label="Notes"
                name="notes"
                placeholder="Write your notes here..."
                value={notes}
                onChange={handleChangeTextare}
                className="border-blue-500"
                rows={4}
                required
              />

              <SearchField
                name="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onSubmit={handleSearch}
                placeholder="Type something to search..."
                className='mt-7'
              />


              <Textarea
                label="Notes"
                name="notes"
                placeholder="Write your notes here..."
                value={notes}
                onChange={handleChangeTextare}
                className="border-blue-500"
                rows={4}
                required
                disabled={true}
                errorMsg='Field disabled'
              />

            </div>
          </Modal>
        )}
      </div>

      {/* Alert Strip */}
      <br />
      <div>
        {showStrip && (
          <>
            <StripAlert
              message="Info Alert"
              type='info'
              linkText="Check out this new course!"
              linkUrl="https://reactjs.org"
              onClose={() => setShowStrip(false)}
            />

            <br />
            <StripAlert
              message="Error Alert "
              type='error'

              onClose={() => setShowStrip(false)}
            />
            <br />
            <StripAlert
              message="Success Alert "
              type='success'
              // linkText="Check out this new course!"
              // linkUrl="https://reactjs.org"
              onClose={() => setShowStrip(false)}
            />
            <br />
            <StripAlert
              message="Warning Alert"
              type='warning'
              // linkText="Check out this new course!"
              // linkUrl="https://reactjs.org"
              onClose={() => setShowStrip(false)}

            />
          </>
        )}

        {showAlert && (
          <Alert
            type="error"
            title="Deactivate account"
            message="Are you sure you want to deactivate your account? This action cannot be undone."
            onConfirm={() => setShowAlert(false)}
            onCancel={() => setShowAlert(false)}
          />
        )}

        {showSuccess && (
          <Alert
            type="success"
            title="Deactivate account"
            message="Are you sure you want to deactivate your account? This action cannot be undone."
            onConfirm={() => setShowSuccess(false)}
            onCancel={() => setShowSuccess(false)}
          />
        )}

        {showWarning && (
          <Alert
            type="warning"
            title="Deactivate account"
            message="Are you sure you want to deactivate your account? This action cannot be undone."
            onConfirm={() => setShowWarning(false)}
            onCancel={() => setShowWarning(false)}
          />
        )}
        {showInfo && (
          <Alert
            type="info"
            title="Deactivate account"
            message="Are you sure you want to deactivate your account? This action cannot be undone."
            onConfirm={() => setShowInfo(false)}
            onCancel={() => setShowInfo(false)}
          />
        )}
      </div>
<br /> <br />
<Divider  title="Divider Title"
  className="my-4"
  // lineColor="bg-gray-500"
  // textColor="text-gray-700"
  />
        
      {/* Cards */}
      <br />
      <h1 className="text-3xl font-bold   text-center text-gray-800 dark:text-white mb-2">Card Component Example</h1>
      <div className='p-5  '>
     <Card
          title="Welcome to Our Service"
          content={<p>A collection of beautiful, production-ready UI components to drop into your projects alongside your own code — yours to customize, adapt, and make your own.</p>}
          footer={
            <div className="flex gap-2">
              {/* <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Learn More</button>
            <button className="px-4 py-2 bg-gray-300 text-black rounded-md">Dismiss</button> */}
            </div>
          }
        > 
        </Card>
        <br />
        <CountCard
          title="Basic Card"
          description="This is a basic card with a title, description, and a number."
          number={1}
        />
     </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-5'>
        {/* Example 1: Basic Card with Buttons */}

        <Card
          title="Welcome to Our Service"
          content={<p>A collection of beautiful, production-ready UI components to drop into your projects alongside your own code — yours to customize, adapt, and make your own.</p>}
          footer={
            <div className="flex gap-2">
              {/* <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Learn More</button>
            <button className="px-4 py-2 bg-gray-300 text-black rounded-md">Dismiss</button> */}
            </div>
          }
        >
           
        </Card>
        <Card
          title="Welcome to Our Service"
          content={<p>A collection of beautiful, production-ready UI components to drop into your projects alongside your own code — yours to customize, adapt, and make your own.</p>}
          footer={
            <div className="flex gap-2">
              {/* <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Learn More</button>
            <button className="px-4 py-2 bg-gray-300 text-black rounded-md">Dismiss</button> */}
            </div>
          }
        />
        <Card
          title="Welcome to Our Service"
          content={<p>A collection of beautiful, production-ready UI components to drop into your projects alongside your own code — yours to customize, adapt, and make your own.</p>}
          footer={
            <div className="flex gap-2">
              {/* <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Learn More</button>
            <button className="px-4 py-2 bg-gray-300 text-black rounded-md">Dismiss</button> */}
            </div>
          }
        />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-5'>
        <CountCard
          title="Basic Card"
          description="This is a basic card with a title, description, and a number."
          number={1}
        />
        <CountCard
          title="Basic Card"
          description="This is a basic card with a title, description, and a number."
          number={2}
        />
        <CountCard
          title="Basic Card"
          description="This is a basic card with a title, description, and a number."
          number={3}
        />

      </div>
      <br />
      {/* Input Fields */}
      <h1 className="text-3xl font-bold   text-center text-gray-800 dark:text-white mb-2">Input Field Components</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-5'>
        <Input
          id="username"
          name="username"
          label="Username"
          placeholder="Enter your username"
          onChange={(val) => console.log(val)}
          required
          errorMsg='Enter your username'
        />

        <CalendarInput
          value={selectedDate}
          onChange={setSelectedDate}
          disablePast={true}
          disableToday={false}
          // disabledDates={[dayjs().add(2, 'day')]}
          label='Date'
          required
        />

        <CalendarInput
          value={selectedDate}
          onChange={setSelectedDate}
          disablePast={true}
          disableToday={false}
          disabledDates={[dayjs().add(2, 'day')]}
          label='Date'
          required
          errorMsg='Select the Date'
        />

        <Input
          id="email"
          name="email"
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          onChange={(val) => setValue(val)}
          value={value}
        />

        <Input
          id="password"
          name="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          // onChange={(val) => setValue(val)}
          value={"value"}
          disabled={true}
          errorMsg='Field disabled'
        />



        <Pulldown
          options={people}
          // value={[
          //   { id: 1, name: 'Wade Cooper' },
          //   { id: 2, name: 'Arlene Mccoy' },
          // ]}
          selectType="multi"
          placeholder="Select a value"
          label='Select a value'
          required

        />
        <Pulldown
          label='Select a value'
          value={{ id: 1, name: 'Wade Cooper' }}
          options={people}
          selectType="single"
          placeholder="Select a value"
        />

        <Pulldown
          options={people}
          value={[
            { id: 1, name: 'Wade Cooper' },
            { id: 2, name: 'Arlene Mccoy' },
          ]}
          selectType="multi"
          placeholder="Select a value"
          label='Select a value'
          required
          disabled={true}
          errorMsg='Field disabled'
        />



        <Textarea
          label="Notes"
          name="notes"
          placeholder="Write your notes here..."
          value={notes}
          onChange={handleChangeTextare}
          className="border-blue-500"
          rows={4}
          required
        />

        <SearchField
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onSubmit={handleSearch}
          placeholder="Type something to search..."
          className='mt-7'
        />

        <Textarea
          label="Notes"
          name="notes"
          placeholder="Write your notes here..."
          value={notes}
          onChange={handleChangeTextare}
          className="border-blue-500"
          rows={4}
          required
          disabled={true}
          errorMsg='Field disabled'
        />

      </div>
      <br />

      <div>
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-2">
          Checkbox and Radio Components
        </h1>
        <div className="grid grid-cols-3 gap-8">
          {/* Left Side - Checkbox Components */}
          <div>
            <CheckboxGroup options={options} selectedOptions={selectedOptions} onChange={setSelectedOptions} size='sm' />
            <br />
            <Checkbox id="singleCheckbox" label="I agree to the terms and conditions" checked={isChecked} onChange={setIsChecked} size='md'
            />
          </div>

          {/* Right Side - Radio Button Components */}
          <div>
            <RadioButton id="option1" label="Radio Button" name="singleRadio" checked={selected === 'option1'} onChange={setSelected} size="md" /> <br />
            <RadioButton id="option1" label="Radio Button" name="singleRadio" checked={selected === 'option1'} onChange={setSelected} size="md" />
          </div>

          {/* Toggles Button */}
          <div>
            <Switch id="customSwitch" checked={isChecked} onChange={handleSwitchChange} /> <br />
            <SquareSwitch isOn={isOn} onChange={handleChange}  />
          </div>
        </div>
      </div>

      <br />
      <Tab tabs={tabs} />

      <div>
     <Table border='true'>
       <Thead className="hover:bg-blue-500">
    {headers.map((header, index) => (
      <Th key={index}>{header}</Th>
    ))}
  </Thead>
      <Tbody>
        {data.map((item, index) => (
          <Tr key={index} className='hover:bg-blue-50'>
            {headers.map((header, i) => (
              <Td key={i}>
                {/* Assert the header is a key of the TableData type */}
                {item[header as keyof TableData]}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
      </div>
    </div>
  )
}


