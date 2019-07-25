export type Maybe<T> = T | null;

export enum Role {
  Admin = 'ADMIN',
  User = 'USER',
  Unknown = 'UNKNOWN'
}

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

/** The `Upload` scalar type represents a file upload. */
export type Upload = any;

// ====================================================
// Documents
// ====================================================

export namespace GetAllUsers {
  export type Variables = {};

  export type Query = {
    __typename?: 'Query';

    users: Maybe<(Maybe<Users>)[]>;
  };

  export type Users = {
    __typename?: 'User';

    name: string;
  };
}

export namespace Login {
  export type Variables = {
    username: string;
    password: string;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    login: Login;
  };

  export type Login = {
    __typename?: 'AuthPayload';

    token: string;

    user: User;
  };

  export type User = {
    __typename?: 'User';

    id: string;
  };
}

// ====================================================
// START: Apollo Angular template
// ====================================================

import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';

import gql from 'graphql-tag';

// ====================================================
// Apollo Services
// ====================================================

@Injectable({
  providedIn: 'root'
})
export class GetAllUsersGQL extends Apollo.Query<GetAllUsers.Query, GetAllUsers.Variables> {
  document: any = gql`
    query getAllUsers {
      users {
        name
      }
    }
  `;
}
@Injectable({
  providedIn: 'root'
})
export class LoginGQL extends Apollo.Mutation<Login.Mutation, Login.Variables> {
  document: any = gql`
    mutation login($username: String!, $password: String!) {
      login(username: $username, password: $password) {
        token
        user {
          id
        }
      }
    }
  `;
}

// ====================================================
// END: Apollo Angular template
// ====================================================

export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}

const result: IntrospectionResultData = {
  __schema: {
    types: []
  }
};

export default result;
