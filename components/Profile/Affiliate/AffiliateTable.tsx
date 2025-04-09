import React, { useEffect, useState } from 'react';
import { Dropdown, notification, Space, Table } from 'antd';
import type { TableColumnsType } from 'antd';

interface DataType {
  key: React.Key;
  no: number;
  userNmae: string;
  totalDeposit: string;
  totalWager: string;
  commission: string;
}

const AffiliateTable = ({data} : any) => {

  const columns: TableColumnsType<DataType> = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
      width: 70,
    },
    {
      title: 'User Name',
      dataIndex: 'userName',
      key: 'userName',
      width: 150,
    },
    {
      title: 'Deposit Amount',
      dataIndex: 'totalDeposit',
      key: 'totalDeposit',
      onCell: () => ({
        style: { minWidth: '150px' }, // Set min-width for the first column in tbody
      }),
    },
    {
      title: 'Wager Amount',
      dataIndex: 'totalWager',
      key: 'totalWager',
      onCell: () => ({
        style: { minWidth: '150px' }, // Set min-width for the first column in tbody
      }),
    },
    {
      title: 'Commission',
      dataIndex: 'commission',
      key: 'commission',
      onCell: () => ({
        style: { minWidth: '150px' }, // Set min-width for the first column in tbody
      }),
    },
  ];

  return (
    <>
      <Table 
        columns={columns} 
        dataSource={data} 
        scroll={{ x: `${data.length == 0 ? "700px" : "max-content"}` }} 
        pagination={false}
      />
    </>
  )
}

export default AffiliateTable;