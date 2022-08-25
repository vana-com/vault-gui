import * as Types from './graphql';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router'
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient } from '../../utils/apolloClient';







export async function getServerPageGetModule
    (options: Omit<Apollo.QueryOptions<Types.GetModuleQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetModuleQuery>({ ...options, query: Operations.GetModuleDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetModule = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetModuleQuery, Types.GetModuleQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetModuleDocument, options);
};
export type PageGetModuleComp = React.FC<{data?: Types.GetModuleQuery, error?: Apollo.ApolloError}>;
export const withPageGetModule = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetModuleQuery, Types.GetModuleQueryVariables>) => (WrappedComponent:PageGetModuleComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetModuleDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetModule = {
      getServerPage: getServerPageGetModule,
      withPage: withPageGetModule,
      usePage: useGetModule,
    }
export async function getServerPageGetModuleInstructions
    (options: Omit<Apollo.QueryOptions<Types.GetModuleInstructionsQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetModuleInstructionsQuery>({ ...options, query: Operations.GetModuleInstructionsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetModuleInstructions = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetModuleInstructionsQuery, Types.GetModuleInstructionsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetModuleInstructionsDocument, options);
};
export type PageGetModuleInstructionsComp = React.FC<{data?: Types.GetModuleInstructionsQuery, error?: Apollo.ApolloError}>;
export const withPageGetModuleInstructions = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetModuleInstructionsQuery, Types.GetModuleInstructionsQueryVariables>) => (WrappedComponent:PageGetModuleInstructionsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetModuleInstructionsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetModuleInstructions = {
      getServerPage: getServerPageGetModuleInstructions,
      withPage: withPageGetModuleInstructions,
      usePage: useGetModuleInstructions,
    }
export async function getServerPageGetModules
    (options: Omit<Apollo.QueryOptions<Types.GetModulesQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetModulesQuery>({ ...options, query: Operations.GetModulesDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetModules = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetModulesQuery, Types.GetModulesQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetModulesDocument, options);
};
export type PageGetModulesComp = React.FC<{data?: Types.GetModulesQuery, error?: Apollo.ApolloError}>;
export const withPageGetModules = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetModulesQuery, Types.GetModulesQueryVariables>) => (WrappedComponent:PageGetModulesComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetModulesDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetModules = {
      getServerPage: getServerPageGetModules,
      withPage: withPageGetModules,
      usePage: useGetModules,
    }
export async function getServerPageGetProjectUser
    (options: Omit<Apollo.QueryOptions<Types.GetProjectUserQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetProjectUserQuery>({ ...options, query: Operations.GetProjectUserDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetProjectUser = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetProjectUserQuery, Types.GetProjectUserQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetProjectUserDocument, options);
};
export type PageGetProjectUserComp = React.FC<{data?: Types.GetProjectUserQuery, error?: Apollo.ApolloError}>;
export const withPageGetProjectUser = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetProjectUserQuery, Types.GetProjectUserQueryVariables>) => (WrappedComponent:PageGetProjectUserComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetProjectUserDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetProjectUser = {
      getServerPage: getServerPageGetProjectUser,
      withPage: withPageGetProjectUser,
      usePage: useGetProjectUser,
    }
export async function getServerPageGetUser
    (options: Omit<Apollo.QueryOptions<Types.GetUserQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetUserQuery>({ ...options, query: Operations.GetUserDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetUser = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetUserQuery, Types.GetUserQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetUserDocument, options);
};
export type PageGetUserComp = React.FC<{data?: Types.GetUserQuery, error?: Apollo.ApolloError}>;
export const withPageGetUser = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetUserQuery, Types.GetUserQueryVariables>) => (WrappedComponent:PageGetUserComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetUserDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetUser = {
      getServerPage: getServerPageGetUser,
      withPage: withPageGetUser,
      usePage: useGetUser,
    }
export async function getServerPageGetUserFromExternalIdOrEmail
    (options: Omit<Apollo.QueryOptions<Types.GetUserFromExternalIdOrEmailQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetUserFromExternalIdOrEmailQuery>({ ...options, query: Operations.GetUserFromExternalIdOrEmailDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetUserFromExternalIdOrEmail = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetUserFromExternalIdOrEmailQuery, Types.GetUserFromExternalIdOrEmailQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetUserFromExternalIdOrEmailDocument, options);
};
export type PageGetUserFromExternalIdOrEmailComp = React.FC<{data?: Types.GetUserFromExternalIdOrEmailQuery, error?: Apollo.ApolloError}>;
export const withPageGetUserFromExternalIdOrEmail = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetUserFromExternalIdOrEmailQuery, Types.GetUserFromExternalIdOrEmailQueryVariables>) => (WrappedComponent:PageGetUserFromExternalIdOrEmailComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetUserFromExternalIdOrEmailDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetUserFromExternalIdOrEmail = {
      getServerPage: getServerPageGetUserFromExternalIdOrEmail,
      withPage: withPageGetUserFromExternalIdOrEmail,
      usePage: useGetUserFromExternalIdOrEmail,
    }
export async function getServerPageGetUserModulesAll
    (options: Omit<Apollo.QueryOptions<Types.GetUserModulesAllQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetUserModulesAllQuery>({ ...options, query: Operations.GetUserModulesAllDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetUserModulesAll = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetUserModulesAllQuery, Types.GetUserModulesAllQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetUserModulesAllDocument, options);
};
export type PageGetUserModulesAllComp = React.FC<{data?: Types.GetUserModulesAllQuery, error?: Apollo.ApolloError}>;
export const withPageGetUserModulesAll = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetUserModulesAllQuery, Types.GetUserModulesAllQueryVariables>) => (WrappedComponent:PageGetUserModulesAllComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetUserModulesAllDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetUserModulesAll = {
      getServerPage: getServerPageGetUserModulesAll,
      withPage: withPageGetUserModulesAll,
      usePage: useGetUserModulesAll,
    }
export async function getServerPageGetUserUuidFromExternalId
    (options: Omit<Apollo.QueryOptions<Types.GetUserUuidFromExternalIdQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetUserUuidFromExternalIdQuery>({ ...options, query: Operations.GetUserUuidFromExternalIdDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetUserUuidFromExternalId = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetUserUuidFromExternalIdQuery, Types.GetUserUuidFromExternalIdQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetUserUuidFromExternalIdDocument, options);
};
export type PageGetUserUuidFromExternalIdComp = React.FC<{data?: Types.GetUserUuidFromExternalIdQuery, error?: Apollo.ApolloError}>;
export const withPageGetUserUuidFromExternalId = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetUserUuidFromExternalIdQuery, Types.GetUserUuidFromExternalIdQueryVariables>) => (WrappedComponent:PageGetUserUuidFromExternalIdComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetUserUuidFromExternalIdDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetUserUuidFromExternalId = {
      getServerPage: getServerPageGetUserUuidFromExternalId,
      withPage: withPageGetUserUuidFromExternalId,
      usePage: useGetUserUuidFromExternalId,
    }
export async function getServerPageGetUsersModulesFromIds
    (options: Omit<Apollo.QueryOptions<Types.GetUsersModulesFromIdsQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetUsersModulesFromIdsQuery>({ ...options, query: Operations.GetUsersModulesFromIdsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetUsersModulesFromIds = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetUsersModulesFromIdsQuery, Types.GetUsersModulesFromIdsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetUsersModulesFromIdsDocument, options);
};
export type PageGetUsersModulesFromIdsComp = React.FC<{data?: Types.GetUsersModulesFromIdsQuery, error?: Apollo.ApolloError}>;
export const withPageGetUsersModulesFromIds = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetUsersModulesFromIdsQuery, Types.GetUsersModulesFromIdsQueryVariables>) => (WrappedComponent:PageGetUsersModulesFromIdsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetUsersModulesFromIdsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetUsersModulesFromIds = {
      getServerPage: getServerPageGetUsersModulesFromIds,
      withPage: withPageGetUsersModulesFromIds,
      usePage: useGetUsersModulesFromIds,
    }
export async function getServerPageGetVanaAdminData
    (options: Omit<Apollo.QueryOptions<Types.GetVanaAdminDataQueryVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetVanaAdminDataQuery>({ ...options, query: Operations.GetVanaAdminDataDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetVanaAdminData = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetVanaAdminDataQuery, Types.GetVanaAdminDataQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetVanaAdminDataDocument, options);
};
export type PageGetVanaAdminDataComp = React.FC<{data?: Types.GetVanaAdminDataQuery, error?: Apollo.ApolloError}>;
export const withPageGetVanaAdminData = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetVanaAdminDataQuery, Types.GetVanaAdminDataQueryVariables>) => (WrappedComponent:PageGetVanaAdminDataComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetVanaAdminDataDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetVanaAdminData = {
      getServerPage: getServerPageGetVanaAdminData,
      withPage: withPageGetVanaAdminData,
      usePage: useGetVanaAdminData,
    }
export async function getServerPageGetUserModules
    (options: Omit<Apollo.QueryOptions<Types.GetUserModulesSubscriptionVariables>, 'query'>, ctx?: any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetUserModulesSubscription>({ ...options, query: Operations.GetUserModulesDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetUserModules = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetUserModulesSubscription, Types.GetUserModulesSubscriptionVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetUserModulesDocument, options);
};
export type PageGetUserModulesComp = React.FC<{data?: Types.GetUserModulesSubscription, error?: Apollo.ApolloError}>;
export const withPageGetUserModules = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetUserModulesSubscription, Types.GetUserModulesSubscriptionVariables>) => (WrappedComponent:PageGetUserModulesComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetUserModulesDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetUserModules = {
      getServerPage: getServerPageGetUserModules,
      withPage: withPageGetUserModules,
      usePage: useGetUserModules,
    }