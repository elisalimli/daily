import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type CreateFileInput = {
  name: Scalars['String'];
  rootId?: Maybe<Scalars['String']>;
  unit: Scalars['String'];
};

export type CreateFileResponse = {
  __typename?: 'CreateFileResponse';
  ok: Scalars['Boolean'];
  errors?: Maybe<Array<FieldError>>;
  file?: Maybe<File>;
};

export type CreateFolderInput = {
  name: Scalars['String'];
  rootId?: Maybe<Scalars['String']>;
};

export type CreateFolderResponse = {
  __typename?: 'CreateFolderResponse';
  ok: Scalars['Boolean'];
  errors?: Maybe<Array<FieldError>>;
  folder?: Maybe<Folder>;
};

export type CreateRecordInput = {
  value: Scalars['Int'];
  fileId: Scalars['String'];
};

export type CreateRecordResponse = {
  __typename?: 'CreateRecordResponse';
  ok: Scalars['Boolean'];
  errors?: Maybe<Array<FieldError>>;
  record?: Maybe<Record>;
};


export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type File = {
  __typename?: 'File';
  id: Scalars['String'];
  name: Scalars['String'];
  rootId?: Maybe<Scalars['String']>;
  unit: Scalars['String'];
  creatorId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type FilesFoldersResponse = {
  __typename?: 'FilesFoldersResponse';
  files?: Maybe<Array<File>>;
  folders?: Maybe<Array<Folder>>;
};

export type Folder = {
  __typename?: 'Folder';
  id: Scalars['String'];
  name: Scalars['String'];
  rootId?: Maybe<Scalars['String']>;
  creatorId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type LoginInput = {
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  register: RegisterResponse;
  login: RegisterResponse;
  logout: Scalars['Boolean'];
  createFile: CreateFileResponse;
  createFolder: CreateFolderResponse;
  createRecord: CreateRecordResponse;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationCreateFileArgs = {
  input: CreateFileInput;
};


export type MutationCreateFolderArgs = {
  input: CreateFolderInput;
};


export type MutationCreateRecordArgs = {
  input: CreateRecordInput;
};

export type Query = {
  __typename?: 'Query';
  allUsers?: Maybe<Array<User>>;
  me?: Maybe<User>;
  filesFolders?: Maybe<FilesFoldersResponse>;
  records?: Maybe<Array<Record>>;
  folders?: Maybe<Array<Folder>>;
  file?: Maybe<File>;
};


export type QueryFilesFoldersArgs = {
  rootId?: Maybe<Scalars['String']>;
};


export type QueryRecordsArgs = {
  fileId: Scalars['String'];
};


export type QueryFoldersArgs = {
  rootIds: Array<Scalars['String']>;
};


export type QueryFileArgs = {
  fileId: Scalars['String'];
};

export type Record = {
  __typename?: 'Record';
  id: Scalars['String'];
  value: Scalars['String'];
  file: File;
  fileId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type RegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  ok: Scalars['Boolean'];
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type ErrorFragmentFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type FileFragmentFragment = (
  { __typename?: 'File' }
  & Pick<File, 'id' | 'name' | 'rootId'>
);

export type FolderFragmentFragment = (
  { __typename?: 'Folder' }
  & Pick<Folder, 'id' | 'name' | 'rootId'>
);

export type RegistrationFragmentFragment = (
  { __typename?: 'RegisterResponse' }
  & Pick<RegisterResponse, 'ok'>
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & ErrorFragmentFragment
  )>>, user?: Maybe<(
    { __typename?: 'User' }
    & UserFragmentFragment
  )> }
);

export type UserFragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username'>
);

export type CreateFileMutationVariables = Exact<{
  input: CreateFileInput;
}>;


export type CreateFileMutation = (
  { __typename?: 'Mutation' }
  & { createFile: (
    { __typename?: 'CreateFileResponse' }
    & Pick<CreateFileResponse, 'ok'>
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & ErrorFragmentFragment
    )>>, file?: Maybe<(
      { __typename?: 'File' }
      & Pick<File, 'id' | 'name'>
    )> }
  ) }
);

export type CreateFolderMutationVariables = Exact<{
  input: CreateFolderInput;
}>;


export type CreateFolderMutation = (
  { __typename?: 'Mutation' }
  & { createFolder: (
    { __typename?: 'CreateFolderResponse' }
    & Pick<CreateFolderResponse, 'ok'>
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & ErrorFragmentFragment
    )>>, folder?: Maybe<(
      { __typename?: 'Folder' }
      & Pick<Folder, 'id' | 'name'>
    )> }
  ) }
);

export type CreateRecordMutationVariables = Exact<{
  input: CreateRecordInput;
}>;


export type CreateRecordMutation = (
  { __typename?: 'Mutation' }
  & { createRecord: (
    { __typename?: 'CreateRecordResponse' }
    & Pick<CreateRecordResponse, 'ok'>
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & ErrorFragmentFragment
    )>>, record?: Maybe<(
      { __typename?: 'Record' }
      & Pick<Record, 'id' | 'value'>
    )> }
  ) }
);

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'RegisterResponse' }
    & RegistrationFragmentFragment
  ) }
);

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'RegisterResponse' }
    & RegistrationFragmentFragment
  ) }
);

export type FilesFoldersQueryVariables = Exact<{
  rootId?: Maybe<Scalars['String']>;
}>;


export type FilesFoldersQuery = (
  { __typename?: 'Query' }
  & { filesFolders?: Maybe<(
    { __typename?: 'FilesFoldersResponse' }
    & { files?: Maybe<Array<(
      { __typename?: 'File' }
      & FileFragmentFragment
    )>>, folders?: Maybe<Array<(
      { __typename?: 'Folder' }
      & FolderFragmentFragment
    )>> }
  )> }
);

export type FoldersQueryVariables = Exact<{
  rootIds: Array<Scalars['String']> | Scalars['String'];
}>;


export type FoldersQuery = (
  { __typename?: 'Query' }
  & { folders?: Maybe<Array<(
    { __typename?: 'Folder' }
    & Pick<Folder, 'id' | 'name'>
  )>> }
);

export type RecordsQueryVariables = Exact<{
  fileId: Scalars['String'];
}>;


export type RecordsQuery = (
  { __typename?: 'Query' }
  & { records?: Maybe<Array<(
    { __typename?: 'Record' }
    & Pick<Record, 'id' | 'value' | 'createdAt'>
  )>>, file?: Maybe<(
    { __typename?: 'File' }
    & Pick<File, 'unit'>
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & UserFragmentFragment
  )> }
);

export const FileFragmentFragmentDoc = gql`
    fragment FileFragment on File {
  id
  name
  rootId
}
    `;
export const FolderFragmentFragmentDoc = gql`
    fragment FolderFragment on Folder {
  id
  name
  rootId
}
    `;
export const ErrorFragmentFragmentDoc = gql`
    fragment ErrorFragment on FieldError {
  field
  message
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  username
}
    `;
export const RegistrationFragmentFragmentDoc = gql`
    fragment RegistrationFragment on RegisterResponse {
  ok
  errors {
    ...ErrorFragment
  }
  user {
    ...UserFragment
  }
}
    ${ErrorFragmentFragmentDoc}
${UserFragmentFragmentDoc}`;
export const CreateFileDocument = gql`
    mutation CreateFile($input: CreateFileInput!) {
  createFile(input: $input) {
    ok
    errors {
      ...ErrorFragment
    }
    file {
      id
      name
    }
  }
}
    ${ErrorFragmentFragmentDoc}`;
export type CreateFileMutationFn = Apollo.MutationFunction<CreateFileMutation, CreateFileMutationVariables>;

/**
 * __useCreateFileMutation__
 *
 * To run a mutation, you first call `useCreateFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFileMutation, { data, loading, error }] = useCreateFileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateFileMutation(baseOptions?: Apollo.MutationHookOptions<CreateFileMutation, CreateFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFileMutation, CreateFileMutationVariables>(CreateFileDocument, options);
      }
export type CreateFileMutationHookResult = ReturnType<typeof useCreateFileMutation>;
export type CreateFileMutationResult = Apollo.MutationResult<CreateFileMutation>;
export type CreateFileMutationOptions = Apollo.BaseMutationOptions<CreateFileMutation, CreateFileMutationVariables>;
export const CreateFolderDocument = gql`
    mutation CreateFolder($input: CreateFolderInput!) {
  createFolder(input: $input) {
    ok
    errors {
      ...ErrorFragment
    }
    folder {
      id
      name
    }
  }
}
    ${ErrorFragmentFragmentDoc}`;
export type CreateFolderMutationFn = Apollo.MutationFunction<CreateFolderMutation, CreateFolderMutationVariables>;

/**
 * __useCreateFolderMutation__
 *
 * To run a mutation, you first call `useCreateFolderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFolderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFolderMutation, { data, loading, error }] = useCreateFolderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateFolderMutation(baseOptions?: Apollo.MutationHookOptions<CreateFolderMutation, CreateFolderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFolderMutation, CreateFolderMutationVariables>(CreateFolderDocument, options);
      }
export type CreateFolderMutationHookResult = ReturnType<typeof useCreateFolderMutation>;
export type CreateFolderMutationResult = Apollo.MutationResult<CreateFolderMutation>;
export type CreateFolderMutationOptions = Apollo.BaseMutationOptions<CreateFolderMutation, CreateFolderMutationVariables>;
export const CreateRecordDocument = gql`
    mutation CreateRecord($input: CreateRecordInput!) {
  createRecord(input: $input) {
    ok
    errors {
      ...ErrorFragment
    }
    record {
      id
      value
    }
  }
}
    ${ErrorFragmentFragmentDoc}`;
export type CreateRecordMutationFn = Apollo.MutationFunction<CreateRecordMutation, CreateRecordMutationVariables>;

/**
 * __useCreateRecordMutation__
 *
 * To run a mutation, you first call `useCreateRecordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRecordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRecordMutation, { data, loading, error }] = useCreateRecordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateRecordMutation(baseOptions?: Apollo.MutationHookOptions<CreateRecordMutation, CreateRecordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRecordMutation, CreateRecordMutationVariables>(CreateRecordDocument, options);
      }
export type CreateRecordMutationHookResult = ReturnType<typeof useCreateRecordMutation>;
export type CreateRecordMutationResult = Apollo.MutationResult<CreateRecordMutation>;
export type CreateRecordMutationOptions = Apollo.BaseMutationOptions<CreateRecordMutation, CreateRecordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    ...RegistrationFragment
  }
}
    ${RegistrationFragmentFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($input: RegisterInput!) {
  register(input: $input) {
    ...RegistrationFragment
  }
}
    ${RegistrationFragmentFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const FilesFoldersDocument = gql`
    query FilesFolders($rootId: String) {
  filesFolders(rootId: $rootId) {
    files {
      ...FileFragment
    }
    folders {
      ...FolderFragment
    }
  }
}
    ${FileFragmentFragmentDoc}
${FolderFragmentFragmentDoc}`;

/**
 * __useFilesFoldersQuery__
 *
 * To run a query within a React component, call `useFilesFoldersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilesFoldersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilesFoldersQuery({
 *   variables: {
 *      rootId: // value for 'rootId'
 *   },
 * });
 */
export function useFilesFoldersQuery(baseOptions?: Apollo.QueryHookOptions<FilesFoldersQuery, FilesFoldersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilesFoldersQuery, FilesFoldersQueryVariables>(FilesFoldersDocument, options);
      }
export function useFilesFoldersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilesFoldersQuery, FilesFoldersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilesFoldersQuery, FilesFoldersQueryVariables>(FilesFoldersDocument, options);
        }
export type FilesFoldersQueryHookResult = ReturnType<typeof useFilesFoldersQuery>;
export type FilesFoldersLazyQueryHookResult = ReturnType<typeof useFilesFoldersLazyQuery>;
export type FilesFoldersQueryResult = Apollo.QueryResult<FilesFoldersQuery, FilesFoldersQueryVariables>;
export const FoldersDocument = gql`
    query Folders($rootIds: [String!]!) {
  folders(rootIds: $rootIds) {
    id
    name
  }
}
    `;

/**
 * __useFoldersQuery__
 *
 * To run a query within a React component, call `useFoldersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFoldersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFoldersQuery({
 *   variables: {
 *      rootIds: // value for 'rootIds'
 *   },
 * });
 */
export function useFoldersQuery(baseOptions: Apollo.QueryHookOptions<FoldersQuery, FoldersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FoldersQuery, FoldersQueryVariables>(FoldersDocument, options);
      }
export function useFoldersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FoldersQuery, FoldersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FoldersQuery, FoldersQueryVariables>(FoldersDocument, options);
        }
export type FoldersQueryHookResult = ReturnType<typeof useFoldersQuery>;
export type FoldersLazyQueryHookResult = ReturnType<typeof useFoldersLazyQuery>;
export type FoldersQueryResult = Apollo.QueryResult<FoldersQuery, FoldersQueryVariables>;
export const RecordsDocument = gql`
    query Records($fileId: String!) {
  records(fileId: $fileId) {
    id
    value
    createdAt
  }
  file(fileId: $fileId) {
    unit
  }
}
    `;

/**
 * __useRecordsQuery__
 *
 * To run a query within a React component, call `useRecordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecordsQuery({
 *   variables: {
 *      fileId: // value for 'fileId'
 *   },
 * });
 */
export function useRecordsQuery(baseOptions: Apollo.QueryHookOptions<RecordsQuery, RecordsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecordsQuery, RecordsQueryVariables>(RecordsDocument, options);
      }
export function useRecordsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecordsQuery, RecordsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecordsQuery, RecordsQueryVariables>(RecordsDocument, options);
        }
export type RecordsQueryHookResult = ReturnType<typeof useRecordsQuery>;
export type RecordsLazyQueryHookResult = ReturnType<typeof useRecordsLazyQuery>;
export type RecordsQueryResult = Apollo.QueryResult<RecordsQuery, RecordsQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;