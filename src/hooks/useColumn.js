function useColumn(column, width, render, sorter) {
  return {
    title: column,
    dataIndex: column,
    key: column,
    ellipsis: true,
    width: width,
    render: render,
    sorter: sorter,
    sortOrder: "descend",
    showSorterTooltip: false,
  };
}

export default useColumn;
