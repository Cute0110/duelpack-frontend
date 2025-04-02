import React, { useEffect, useState } from 'react';
import { Dropdown, notification, Space, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import {Switch} from "antd";
import {CheckOutlined, CloseOutlined, EditOutlined, UserDeleteOutlined, SwapOutlined} from '@ant-design/icons'
import moment from 'moment';
import { useRouter } from 'next/navigation';
import HeadTitle from '../../ui/HeadTitle';
import { RiLockPasswordFill } from 'react-icons/ri';

interface DataType {
  key: React.Key;
  no: number;
  name: string;
  imageUrl: string;
  price: number;
  status: boolean;
  createDate: Date;
}

const dirTypeArray = ["", "ASC", "DESC"];

const ItemManageTable = ({data, onUserStatusChangeAction, onDeleteUser, onResetPassword, onClickUserTransaction, setOrderData} : any) => {

  const [noDir, setNoDir] = useState(0); // 0: noSort, 1: asc, 2: desc
  const [nameDir, setNameDir] = useState(0); // 0: noSort, 1: asc, 2: desc
  const [priceDir, setPriceDir] = useState(0); // 0: noSort, 1: asc, 2: desc
  const [createdAtDir, setCreatedAtDir] = useState(0); // 0: noSort, 1: asc, 2: desc

  
  const formatSortVal = () => {
    setNoDir(0);
    setNameDir(0);
    setPriceDir(0);
    setCreatedAtDir(0);
  }

  const onSortClick = (title: any) => {
    formatSortVal();
    if (title == "No") {
      setOrderData({order: "no", dir: dirTypeArray[(noDir + 1) % 3]});
      setNoDir((noDir + 1) % 3);
    }
    else if (title == "Name") {
      setOrderData({order: "name", dir: dirTypeArray[(nameDir + 1) % 3]});
      setNameDir((nameDir + 1) % 3);
    }
    else if (title == "Price") {
      setOrderData({order: "price", dir: dirTypeArray[(priceDir + 1) % 3]});
      setPriceDir((priceDir + 1) % 3);
    }
    else if (title == "Created At") {
      setOrderData({order: "createdAt", dir: dirTypeArray[(createdAtDir + 1) % 3]});
      setCreatedAtDir((createdAtDir + 1) % 3);
    }
  }

  const [api, contextHolder] = notification.useNotification();
  const router = useRouter();

  const columns: TableColumnsType<DataType> = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
      width: 70,
    },
    {
      title: <HeadTitle title={"Name"} sortDir={nameDir} onSortClick={onSortClick}/>,
      dataIndex: 'name',
      key: 'name',
      onCell: () => ({
        style: { minWidth: '150px' }, // Set min-width for the first column in tbody
      }),
      render: (name) => (
        <p className='truncate max-w-[200px] md:max-w-[700px]'>{name}</p>
      )
    },
    {
      title: "Image",
      dataIndex: 'imageUrl',
      key: 'imageUrl',
      onCell: () => ({
        style: { minWidth: '150px' }, // Set min-width for the first column in tbody
      }),
      render: (imageUrl) => (
        <img src={`/images/items/${imageUrl}`} className='w-12 h-auto' />
      )
    },
    {
      title: <HeadTitle title={"Price"} sortDir={priceDir} onSortClick={onSortClick}/>,
      dataIndex: 'price',
      key: 'price',
      onCell: () => ({
        style: { minWidth: '150px' }, // Set min-width for the first column in tbody
      }),
    },
    {
      title: <HeadTitle title={"Created At"} sortDir={createdAtDir} onSortClick={onSortClick}/>,
      dataIndex: 'createDate',
      key: 'createDate',
      onCell: () => ({
        style: { minWidth: '200px' }, // Set min-width for the first column in tbody
      }),
      render: (createDate) => (
        <span>{moment(createDate).format("YYYY-MM-DD HH:mm:ss")}</span>
      )
    },
  ];

  return (
    <>
      {contextHolder}
      <Table 
        columns={columns} 
        dataSource={data} 
        scroll={{ x: `${data.length == 0 ? "800px" : "max-content"}` }} 
        pagination={false}
      />
    </>
  )
}

export default ItemManageTable;