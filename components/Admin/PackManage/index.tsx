import { Pagination } from "antd";
import { useEffect, useState } from "react";
import PackManageTable from "./PackManageTable";

const PackManage = ({
  data,
  onGetTableDataAction,
}: any) => {
  const [tableData, setTableData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [paginationVal, setPaginationVal] = useState(1);
  const [pageSizeVal, setPageSizeVal] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [orderData, setOrderData] = useState({ order: "id", dir: "asc" });

  const pageSizeOptions = ['10', '20', '50'];


  const onCreateTableData = (tempData: any, data: any, pageNum: any, pageCount: any) => {
    for (let i = 0; i < data.length; i++) {
      const temp = {
        key: data[i].id,
        no: (pageNum - 1) * pageCount + i + 1,
        name: data[i].name,
        imageUrl: data[i].imageUrl,
        price: data[i].price.toFixed(2),
        createDate: data[i].createdAt,
        status: data[i].status == 0 ? false : true,
      }
      tempData.push(temp);
    }
    return;
  }

  const onSetTableData = (pageNum: any, pageCount: any) => {
    let tempData: any = [];
    onCreateTableData(tempData, data.data, pageNum, pageCount);
    setTotalCount(data.count);
    setTableData(tempData);
  }

  useEffect(() => {
    onSetTableData(1, 100);
  }, []);

  useEffect(() => {
    if (orderData.dir == "") {
      onGetTableDataAction(searchValue, paginationVal, pageSizeVal, { order: "id", dir: "ASC" });
      setOrderData({ order: "id", dir: "ASC" });
    }
    else {
      onGetTableDataAction(searchValue, paginationVal, pageSizeVal, orderData);
    }
  }, [orderData]);

  useEffect(() => {
    onSetTableData(data.pageNum, data.pageCount);
  }, [data]);

  const onPagenationChange = (value: any, size: any) => {
    onGetTableDataAction(searchValue, value, size, orderData);
    setPaginationVal(value);
    setPageSizeVal(size);
  }

  return (
    <>
      <div className="ml-[20px] lg:ml-[300px]">
        <div className="relative w-[calc(100vw-70px)] lg:w-[calc(100vw-350px)]">

          <div className="my-4">
            <p className="my-6">Total Packs : <span className="text-[20px]">{totalCount}</span></p>
            <Pagination
              simple
              current={paginationVal}
              total={totalCount}
              onChange={onPagenationChange}
              showSizeChanger
              pageSize={pageSizeVal}
              pageSizeOptions={pageSizeOptions}
              // showTotal={(total: any, range: any) => `${range[0]}-${range[1]} of ${total} items`} 
            />
          </div>
          <div className="mb-2">
            <PackManageTable
              data={tableData}
              setOrderData={setOrderData}
            />
          </div>
          <div className="my-4">
            <Pagination
              simple
              current={paginationVal}
              total={totalCount}
              onChange={onPagenationChange}
              showSizeChanger
              pageSize={pageSizeVal}
              pageSizeOptions={pageSizeOptions}
              // showTotal={(total: any, range: any) => `${range[0]}-${range[1]} of ${total} items`} 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PackManage;