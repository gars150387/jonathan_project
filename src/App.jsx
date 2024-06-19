import "./App.css";
import { Table } from "antd";
import dataToRender from "./MOCK_DATA.json";
import { DownloadIcon } from "./assets/icons";
import "./styles.css";
function App() {

  
  const handleDownloadRowInfo = (props) => {
    console.log(props);
  };
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      align: "title",
      filters: [
        ...dataToRender.map((item) => {
          return {
            text: item.title,
            value: item.title,
          };
        }),
      ],
      filterSearch: true,
      onFilter: (value, record) => record.title.startsWith(value),
      sorter: {
        compare: (a, b) => ("" + a.title).localeCompare(b.title),
      },
      render: (title) => <span key={`${title}`}>{title}</span>,
    },
    {
      title: "category",
      dataIndex: "category",
      align: "category",
      sorter: {
        compare: (a, b) => ("" + a.category).localeCompare(b.category),
      },
      render: (_, record) => <span key={`${record.category}-${record.title}`}>{record.category}</span>,
    },
    {
      title: "tags",
      dataIndex: "tags",
      align: "tags",
      responsive: ["lg"],
      sorter: {
        compare: (a, b) => ("" + a.tags).localeCompare(b.tags),
      },
      render: (_, record) => <span key={`${record.tags}-${record.title}`}>{record.tags}</span>,
    },
    {
      title: "",
      dataIndex: "action",
      align: "action",
      width: "5%",
      render: (_, record) => (
        <button
          key={record.title}
          style={{
            width: "100%",
            outline: "none",
            border: "transparent",
            margin: 0,
            padding: 0,
          }}
          onClick={() => handleDownloadRowInfo(record)}
        >
          <DownloadIcon />
        </button>
      ),
    },
  ];
  return (
    <Table
      sticky
      size="large"
      columns={columns}
      dataSource={dataToRender}
      pagination={{
        position: ["bottomCenter"],
      }}
      className="table-ant-customized"
      style={{ cursor: "pointer" }}
      onRow={(record) => {
        return {
          onClick: () => console.log(record),
        };
      }}
    />
  );
}

export default App;
