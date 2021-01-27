import React, { useState, useEffect } from "react";
import { Icon, Pagination, Table } from "semantic-ui-react";
import api from "../../api";

const Link = () => {
  const [links, setLinks] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  /**
   * get data from api
   * @param {int} page
   */
  const getData = async (page) => {
    const response = await api.get(
      `${process.env.REACT_APP_API_URL}?page=${page}`
    );

    const { data, last_page, current_page } = response.data;

    setTotalPages(last_page);
    setCurrentPage(current_page);
    setLinks(data);
  };

  useEffect(async () => {
    await getData(currentPage);
  }, []);

  const handlePageChange = (e, { activePage }) => {
    getData(activePage);
  };

  return (
    <div>
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Link</Table.HeaderCell>
            <Table.HeaderCell>Url</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {links.map((link) => {
            return (
              <Table.Row key={link.id}>
                <Table.Cell>{link.id}</Table.Cell>
                <Table.Cell>
                  <a href={link.shortened_url} target="_blank">
                    {link.shortened_url}
                  </a>
                </Table.Cell>
                <Table.Cell>{link.original_url}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination
          defaultActivePage={currentPage}
          ellipsisItem={{
            content: <Icon name="ellipsis horizontal" />,
            icon: true,
          }}
          firstItem={{ content: <Icon name="angle double left" />, icon: true }}
          lastItem={{ content: <Icon name="angle double right" />, icon: true }}
          prevItem={{ content: <Icon name="angle left" />, icon: true }}
          nextItem={{ content: <Icon name="angle right" />, icon: true }}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Link;
