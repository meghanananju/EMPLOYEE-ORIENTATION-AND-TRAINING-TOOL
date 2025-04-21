/*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : adduser.tsx
*
* Description      : Add User file
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
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Table, Thead, Tbody, Tr, Th, Td } from '../../components/UI/table';
import Input from '../../components/UI/input';
import Button from '../../components/UI/button';
import Pulldown from '../../components/UI/pulldown';
import SearchField from '../../components/UI/searchInput';
import StripAlert from '../../components/UI/stripAlert';
import { baseURL } from '../../config/config';
interface TableData {
  [key: string]: string;
  employeeId: string;
  name: string;
  email: string;
  roleType: string;
}
const roles = [
  { id: 1, name: 'Admin' },
  { id: 2, name: 'Controller' },
  { id: 3, name: 'User' },

];
function AddUser() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showStrip, setShowStrip] = useState(true);
  const [users, setUsers] = useState<TableData[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${baseURL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Error fetching users: ${response.statusText}`)
      }
      const data = await response.json();
      const mappedUsers = data.map((user: any) => ({
        name: user.name,
        email: user.email,
        employeeId: user.employeeId,
        roleType: user.roleType
      }));
      setUsers(mappedUsers)
    } catch (error) {
      console.log('Faile to fetch users:', error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchUsers
  }, [])

  const headers = users.length > 0 ? Object.keys(users[0]) : [];



  // Dummy data with dynamic properties
  // const data: TableData[] = Array.from({ length: 30 }, (_, i) => ({
  //   name: `User ${i + 1}`,
  //   email: `user${i + 1}@alten.com`,
  //   employeeId: `${22000 + i + 1}`,
  //   roleType: i % 3 === 0 ? 'Admin' : i % 3 === 1 ? 'Manager' : 'Employee',
  // }));

  //  // Extract headers dynamically by getting the keys from the first object in the data
  //   const headers = data.length > 0 ? Object.keys(data[0]) : [];  const [value, setValue] = useState([]);

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };
  return (
    <>
      <div className="p-1">
        <div className="border-b border-gray-200 pb-1 mb-2">
          <div className="grid grid-cols-12 gap-4">
            {/* Page Header */}
            <div className="col-span-12 sm:col-span-2">
              <h1 className="text-xl font-semibold text-gray-800">
                User Details
              </h1>
            </div>

            {/* StripAlert */}
            <div className="col-span-12 sm:col-span-6">
              {showStrip && (
                <StripAlert
                  message="Info Alert"
                  type="warning"
                  linkText="Check out this new course!"
                  linkUrl="XXXXXXXXXXXXXXXXXXX"
                  onClose={() => setShowStrip(false)}
                />
              )}
            </div>

            {/* SearchField */}
            <div className="col-span-12 sm:col-span-4">
              <SearchField
                name="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onSubmit={handleSearch}
                placeholder="Type something to search..."
              />
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 h-full">
          {/* Left Side */}
          <div className="md:col-span-4 col-span-12 bg-white p-5 rounded shadow overflow-y-auto flex flex-col h-[calc(100vh-11.65rem)]">
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Add User
            </h2>

            {/* Scrollable Input Section */}
            <div className="flex-1 overflow-y-auto pr-1 space-y-4">
              <Input
                id="employeeId"
                name="EmployeeId"
                label="Employee ID"
                placeholder="EnterEmployee ID"
                onChange={(val) => console.log(val)}
                required
              />

              <Input
                id="email"
                name="email"
                label="Email address"
                placeholder="Enter email"
                onChange={(val) => console.log(val)}
                required
              />
              <Input
                id="Username"
                name="username"
                label="User name"
                placeholder="Enter username"
                onChange={(val) => console.log(val)}
                required
              />

              <Pulldown
                options={roles}
                value={value}
                selectType="multi"
                placeholder="Select a Role Type"
                label="Select a value"
                required
                onChange={(val) => {
                  console.log('Selected:', val);
                  setValue(val);
                }}
              />


              {/* Add more inputs as needed */}
            </div>

            {/* Fixed Button */}
            <div className="mt-4">
              <Button type='info' fullwidth size='sm' onClick={() => setShowStrip(true)}>
                Add User
              </Button>
            </div>
          </div>

          {/* Right Side */}
          <div className="md:col-span-8 col-span-12 bg-white p-4 rounded shadow overflow-auto  h-[calc(100vh-11.65rem)]">
            <Table border="true" height=' h-[calc(100vh-14rem)]'>
              <Thead  >
                {headers.map((header, index) => (
                  <Th key={index}>{header}</Th>
                ))}
                <Th>Edit</Th>
                <Th>Delete</Th>
              </Thead>
              <Tbody>
                {users.map((item, index) => (
                  <Tr key={index}>
                    {headers.map((header, i) => (
                      <Td key={i}>{item[header as keyof TableData]}</Td>
                    ))}
                    <Td>
                      <button className="text-blue-600 hover:text-blue-800">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                    </Td>
                    <Td>
                      <button className="text-red-600 hover:text-red-800">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>


          </div>

        </div>
      </div>

    </>



  );
}

export default AddUser;
