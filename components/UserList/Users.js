import React from 'react';
import styled from '@emotion/styled';
import useUserData from './useUserData';
import UserList from './UserList';

const Container = styled.div(() => ({
  padding: '20px',
}));

const Users = () => {
  const {
    users,
    columnFields,
    handleOnSearch,
    handleSort,
    sortColumn,
    sortDirection,
  } = useUserData();

  return (
    <Container>
      <UserList
        users={users}
        columnFields={columnFields}
        handleOnSearch={handleOnSearch}
        handleSort={handleSort}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
      />
    </Container>
  );
};

export default Users;
