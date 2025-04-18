 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : home.tsx
*
* Description      : Home
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
import Header from '../layout/mainHeader';
import Footer from '../layout/mainFooter';
import CalendarInput from '../components/UI/calendar';
import dayjs from 'dayjs';
 import CountCard from '../components/UI/countCard';
import Card from '../components/UI/card';
import Button from '../components/UI/button';
import Alert from '../components/UI/alertModal';
import StripAlert from '../components/UI/stripAlert'
import Modal from '../components/UI/modal';
import Input from '../components/UI/input';
import Textarea from '../components/UI/textArea';
import SearchField from '../components/UI/searchInput';
import {Checkbox,CheckboxGroup} from '../components/UI/checkBox';
import {RadioButton} from '../components/UI/radioButton';
import Switch from '../components/UI/switch';
import Select from '../components/UI/pulldown';
import Tab from '../components/UI/tab';
import Loader from '../components/UI/loader';
import Image from '../Images/profile-background.jpg';

  export default function Example() {
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
            title="Tailwind CSS Card Component"
            footer={
              <div className="flex gap-2">
                <button className="px-4 py-1.5 text-sm bg-blue-500 text-white rounded-md">
                  Documentation
                </button>
                <button className="px-4 py-1.5 text-sm bg-gray-300 text-black rounded-md">
                  Dismiss
                </button>
              </div>
            }
          >
            <img
              src={Image}
              alt="Tailwind CSS Card"
              className="w-full h-30 rounded-md mb-4"
            />
            <p>
              The Tailwind CSS Card Component offers a flexible layout system with utility classes.
              It allows you to build beautiful, responsive cards with ease. Combine images, text,
              and actions to create an engaging UI element that fits your design system.
            </p>
          </Card>
          <Card
            title="Tailwind CSS Card Component"
            footer={
              <div className="flex gap-2">
                <button className="px-4 py-1.5 text-sm bg-blue-500 text-white rounded-md">
                  Documentation
                </button>
                <button className="px-4 py-1.5 text-sm bg-gray-300 text-black rounded-md">
                  Dismiss
                </button>
              </div>
            }
          >
            <img
              src={Image}
              alt="Tailwind CSS Card"
              className="w-full h-30 rounded-md mb-4"
            />
            <p>
              The Tailwind CSS Card Component offers a flexible layout system with utility classes.
              It allows you to build beautiful, responsive cards with ease. Combine images, text,
              and actions to create an engaging UI element that fits your design system.
            </p>
          </Card>
          <Card
            title="Tailwind CSS Card Component"
            footer={
              <div className="flex gap-2">
                <button className="px-4 py-1.5 text-sm bg-blue-500 text-white rounded-md">
                  Documentation
                </button>
                <button className="px-4 py-1.5 text-sm bg-gray-300 text-black rounded-md">
                  Dismiss
                </button>
              </div>
            }
          >
            <img
              src={Image}
              alt="Tailwind CSS Card"
              className="w-full h-30 rounded-md mb-4"
            />
            <p>
              The Tailwind CSS Card Component offers a flexible layout system with utility classes.
              It allows you to build beautiful, responsive cards with ease. Combine images, text,
              and actions to create an engaging UI element that fits your design system.
            </p>
          </Card>

        </div>
    }
  ];

   const [selectedDate, setSelectedDate] = useState(dayjs()); 
 
  return (
    <div className="bg-white">
      <Header />
              {/* <Sidebar config={dummyConfig} colorScheme={dummyColorScheme} />; */}

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
              Understand User Flow.

              <span className="sm:block"> Increase Conversion. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Beautiful UI components, crafted with Tailwind CSS.A collection of beautiful, production-ready UI components to drop into your projects alongside your own code — yours to customize, adapt, and make your own
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded-sm border   bg-blue-500 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 hover:text-white focus:ring-3 focus:outline-hidden sm:w-auto"
                href="#"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded-sm border border-blue-600 px-12 py-3 text-sm font-medium text-blue-500 hover:text-white hover:bg-blue-500 focus:ring-3 focus:outline-hidden sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>


{/* Buttons */}
        <div className='flex flex-wrap items-center justify-around gap-4'>
           <Button text="Error Alert" onClick={() => setShowAlert(true)} type="error" size='sm'/>
          <Button text="Success Alert" onClick={() => setShowSuccess(true)} type="success" size='md'/>
          <Button text="Warning Alert" onClick={() => setShowWarning(true)} type="warning" size='sm' />
          <Button text="Info Alert" onClick={() => setShowInfo(true)} type="info"  size='sm'/>

          <Button text="Primary Button" variant="base" color="blue" href="#" onClick={() => setShowStrip(true)} size='sm'  />
          <Button text="Small Modal" variant="base" color="blue" href="#" onClick={() => setIsModalOpensm(true)} size='sm' />
          <Button text="Medium Modal" variant="border" color="blue" href="#" onClick={() => setIsModalOpen(true)} size='sm'/>

 
          <Button text="large Modal" variant="base" color="blue" href="#" onClick={() => setIsModalOpenlg(true)} />
          <Button text="xl Modal" variant="base" color="blue" href="#" onClick={() => setIsModalOpenxl(true)} />
          <Button text="Loading" variant="border" color="blue" href="#" onClick={handleButtonClick} size='md'/>

        </div>

        {loading && <Loader />}

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



          <Select
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
          <Select
            label='Select a value'
            value={{ id: 1, name: 'Wade Cooper' }}
            options={people}
            selectType="single"
            placeholder="Select a value"
          />

          <Select
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


        <br />
        <h1 className="text-3xl font-bold   text-center text-gray-800 dark:text-white mb-2">Card Component Example</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-5'>
          {/* Example 1: Basic Card with Buttons */}

          <Card
            title="Tailwind CSS Card Component"
            footer={
              <div className="flex gap-2">
                <button className="px-4 py-1.5 text-sm bg-blue-500 text-white rounded-md">
                  Documentation
                </button>
                <button className="px-4 py-1.5 text-sm bg-gray-300 text-black rounded-md">
                  Dismiss
                </button>
              </div>
            }
          >
            <img
              src={Image}
              alt="Tailwind CSS Card"
              className="w-full h-30 rounded-md mb-4"
            />
            <p>
              The Tailwind CSS Card Component offers a flexible layout system with utility classes.
              It allows you to build beautiful, responsive cards with ease. Combine images, text,
              and actions to create an engaging UI element that fits your design system.
            </p>
          </Card>
          <Card
            title="Tailwind CSS Card Component"
            footer={
              <div className="flex gap-2">
                <button className="px-4 py-1.5 text-sm bg-blue-500 text-white rounded-md">
                  Documentation
                </button>
                <button className="px-4 py-1.5 text-sm bg-gray-300 text-black rounded-md">
                  Dismiss
                </button>
              </div>
            }
          >
            <img
              src={Image}
              alt="Tailwind CSS Card"
              className="w-full h-30 rounded-md mb-4"
            />
            <p>
              The Tailwind CSS Card Component offers a flexible layout system with utility classes.
              It allows you to build beautiful, responsive cards with ease. Combine images, text,
              and actions to create an engaging UI element that fits your design system.
            </p>
          </Card>

          <Card
            title="Tailwind CSS Card Component"
            footer={
              <div className="flex gap-2">
                <button className="px-4 py-1.5 text-sm bg-blue-500 text-white rounded-md">
                  Documentation
                </button>
                <button className="px-4 py-1.5 text-sm bg-gray-300 text-black rounded-md">
                  Dismiss
                </button>
              </div>
            }
          >
            <img
              src={Image}
              alt="Tailwind CSS Card"
              className="w-full h-30 rounded-md mb-4"
            />
            <p>
              The Tailwind CSS Card Component offers a flexible layout system with utility classes.
              It allows you to build beautiful, responsive cards with ease. Combine images, text,
              and actions to create an engaging UI element that fits your design system.
            </p>
          </Card>

        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-5'>
        <CountCard number={1} title="Analytics">
          <img
            src={Image}
            alt="Dummy"
            className="w-full rounded-md mb-3"
          />
          <p>This card shows the analytics summary of user engagement.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">View Details</button>
        </CountCard>

        <CountCard number={1} title="Analytics">
          <img
            src="https://via.placeholder.com/300x150"
            alt="Dummy"
            className="w-full rounded-md mb-3"
          />
          <p>This card shows the analytics summary of user engagement.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">View Details</button>
        </CountCard>

        <CountCard number={1} title="Analytics">
          <img
            src="https://via.placeholder.com/300x150"
            alt="Dummy"
            className="w-full rounded-md mb-3"
          />
          <p>This card shows the analytics summary of user engagement.</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">View Details</button>
        </CountCard>


      </div>
        <br />

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

          <CalendarInput
          value={selectedDate}
          onChange={setSelectedDate}
          disablePast={true}
          disableToday={false}
          // disabledDates={[dayjs().add(2, 'day')]}
          label='Date'
          required
        />


          <Select
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
          <Select
            label='Select a value'
            value={{ id: 1, name: 'Wade Cooper' }}
            options={people}
            selectType="single"
            placeholder="Select a value"
          />

          <Select
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
              <CheckboxGroup options={options} selectedOptions={selectedOptions} onChange={setSelectedOptions} size='sm'   />
              <br />
              <Checkbox id="singleCheckbox" label="I agree to the terms and conditions" checked={isChecked} onChange={setIsChecked} size='md'  
 />
            </div>

            {/* Right Side - Radio Button Components */}
            <div>
              <RadioButton id="option1" label="Radio Button" name="singleRadio" checked={selected === 'option1'} onChange={setSelected} size="md"  /> <br />
              <RadioButton id="option1" label="Radio Button" name="singleRadio" checked={selected === 'option1'} onChange={setSelected} size="md" />
            </div>

            {/* Toggles Button */}
            <div>
              <Switch id="customSwitch" checked={isChecked} onChange={handleSwitchChange} />
 
            </div>
          </div>
        </div>

        <br />
      <Tab tabs={tabs} />


      </div>
      <Footer />
    </div>
  )
}


