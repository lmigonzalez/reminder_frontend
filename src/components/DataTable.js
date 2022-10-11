import React from 'react';

import OptionBtn from './OptionBtn';
import PaymentStatus from './PaymentStatus';

function DataTable() {
  return (
    <div className=" w-full py-10">
      <table className="m-auto table-auto">
        <thead className="bg-[#2C3333] text-white">
          <tr>
            <th>Card Name</th>
            <th>Total Credit</th>
            <th>Debt</th>
            <th>Due In</th>
            <th>Payment</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <div className='flex justify-center items-center'>
                <PaymentStatus />
                Discover
              </div>
            </td>
            <td>$1200</td>
            <td>$300</td>
            <td>13 days</td>
            <td>$100</td>
            <td>
              {' '}
              <OptionBtn />{' '}
            </td>
          </tr>
		  <tr>
            <td>
              <div className='flex justify-center items-center'>
                <PaymentStatus />
                Discover
              </div>
            </td>
            <td>$1200</td>
            <td>$300</td>
            <td>13 days</td>
            <td>$100</td>
            <td>
              {' '}
              <OptionBtn />{' '}
            </td>
          </tr>  <tr>
            <td>
              <div className='flex justify-center items-center'>
                <PaymentStatus />
                Discover
              </div>
            </td>
            <td>$1200</td>
            <td>$300</td>
            <td>13 days</td>
            <td>$100</td>
            <td>
              {' '}
              <OptionBtn />{' '}
            </td>
          </tr>  <tr>
            <td>
              <div className='flex justify-center items-center'>
                <PaymentStatus />
                Discover
              </div>
            </td>
            <td>$1200</td>
            <td>$300</td>
            <td>13 days</td>
            <td>$100</td>
            <td>
              {' '}
              <OptionBtn />{' '}
            </td>
          </tr>  <tr>
            <td>
              <div className='flex justify-center items-center'>
                <PaymentStatus />
                Discover
              </div>
            </td>
            <td>$1200</td>
            <td>$300</td>
            <td>13 days</td>
            <td>$100</td>
            <td>
              {' '}
              <OptionBtn />{' '}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
