import React, { Fragment } from 'react';

import clsx from 'clsx';

import { usePlaceholderUsers } from '@homework-task/api/placeholderApi.api';
const UserListPage = () => {
    const { isLoading, error, data } = usePlaceholderUsers();

    console.log(data);

    if (isLoading) return 'Loading users from placeholder api...';

    if (error) return 'Error fetching users';

    return (
        <Fragment>
            <h1>User List</h1>
            <ul
       
          >
                {data?.map((user) => (
                    <li key={user.id}
                  >
                       <span><b>User id:</b> <i>{user.id}</i></span> {" "}
                       <span><b>User name: </b><i>{user.name}</i></span> {" "}
                       <span><b>Username:</b> <i>{user.name}</i></span> {"  "}
                       <span><b>User email:</b> <i>{user.email}</i></span>{"  "}
                       <span><b>User phone:</b> <i>{user.phone}</i></span>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
};

export default UserListPage;
