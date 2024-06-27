const axios = require('axios');
const { getMacAddresses, getSepioToken, addTagsToSepioElements,  } = require('./server.js');
require('dotenv').config();
jest.mock('axios');


describe('getMacAddresses', () => {
  it('should fetch MAC addresses from ServiceNow', async () => {
    const macAddress = ['50EB71435E40'];
    const serviceNowInstance = 'ven05878.service-now.com';
    const snUsername = 'forRestApi';
    const snPassword = '934275@Ll';

    axios.get.mockResolvedValue({
      status: 200,
      data: {
        result: [
          {
            mac_address: '50EB71435E40',
            sys_class_name: 'cmdb_ci',
            sys_id: '1',
          },
        ],
      },
    });

    const result = await getMacAddresses(macAddress, serviceNowInstance, snUsername, snPassword);

    expect(result).toEqual([
      {
        mac_address: '50EB71435E40',
        sys_class_name: 'cmdb_ci',
        sys_id: '1',
      },
    ]);
  });
});

describe('getSepioToken', () => {
  it('should get Sepio token', async () => {
    const snEndpoint = 'ven05878.service-now.com';
    const snUsername = 'forRestApi';
    const snPassword = '934275@Ll';
    console.log(snEndpoint);
    console.log(snUsername);
    console.log(snPassword);
    axios.post.mockResolvedValue({
      status: 200,
      data: {
        token: 'token',
      },
    });

    const token = await getSepioToken(snEndpoint, snUsername, snPassword);

    expect(token).toBe('token');
  });
});

describe('addTagsToSepioElements', () => {
  it('should add tags to Sepio elements', async () => {
    const sepioToken = 'token';
    const snEndpoint = 'ven05878.service-now.com';
    const filteredMacs = [
      {
        sys_class_name: 'cmdb_ci',
      },
    ];
    const mac = '50EB71435E40';
    console.log(sepioToken);
    console.log(filteredMacs);
    axios.post.mockResolvedValue({
      status: 200,
    });

    const response = await addTagsToSepioElements(sepioToken, snEndpoint, filteredMacs, mac);

    expect(response.status).toBe(200);
  });
});

