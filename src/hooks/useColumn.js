function useColumn(column, width,render) {
  return {
    title: column,
    dataIndex: column,
    key: column,
    ellipsis: true,
    width: width,
    render : render
  };
}

export default useColumn;
