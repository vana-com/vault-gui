import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  Upload: any;
  bigint: any;
  float8: any;
  jsonb: any;
  numeric: any;
  timestamptz: any;
  uuid: any;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** columns and relationships of "cash_out_requests" */
export type CashOutRequests = {
  __typename?: 'CashOutRequests';
  amount: Scalars['numeric'];
  /** An object relationship */
  cashOutMethodByCashOutMethod?: Maybe<CashOutMethods>;
  cash_out_method?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  errorMessage?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  processed: Scalars['Boolean'];
  transactionHash?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  wallet: Wallets;
  walletId: Scalars['uuid'];
  /** An object relationship */
  worker?: Maybe<Workers>;
  workerId?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "cash_out_requests" */
export type CashOutRequests_Aggregate = {
  __typename?: 'CashOutRequests_aggregate';
  aggregate?: Maybe<CashOutRequests_Aggregate_Fields>;
  nodes: Array<CashOutRequests>;
};

/** aggregate fields of "cash_out_requests" */
export type CashOutRequests_Aggregate_Fields = {
  __typename?: 'CashOutRequests_aggregate_fields';
  avg?: Maybe<CashOutRequests_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<CashOutRequests_Max_Fields>;
  min?: Maybe<CashOutRequests_Min_Fields>;
  stddev?: Maybe<CashOutRequests_Stddev_Fields>;
  stddev_pop?: Maybe<CashOutRequests_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<CashOutRequests_Stddev_Samp_Fields>;
  sum?: Maybe<CashOutRequests_Sum_Fields>;
  var_pop?: Maybe<CashOutRequests_Var_Pop_Fields>;
  var_samp?: Maybe<CashOutRequests_Var_Samp_Fields>;
  variance?: Maybe<CashOutRequests_Variance_Fields>;
};


/** aggregate fields of "cash_out_requests" */
export type CashOutRequests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<CashOutRequests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "cash_out_requests" */
export type CashOutRequests_Aggregate_Order_By = {
  avg?: InputMaybe<CashOutRequests_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<CashOutRequests_Max_Order_By>;
  min?: InputMaybe<CashOutRequests_Min_Order_By>;
  stddev?: InputMaybe<CashOutRequests_Stddev_Order_By>;
  stddev_pop?: InputMaybe<CashOutRequests_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<CashOutRequests_Stddev_Samp_Order_By>;
  sum?: InputMaybe<CashOutRequests_Sum_Order_By>;
  var_pop?: InputMaybe<CashOutRequests_Var_Pop_Order_By>;
  var_samp?: InputMaybe<CashOutRequests_Var_Samp_Order_By>;
  variance?: InputMaybe<CashOutRequests_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "cash_out_requests" */
export type CashOutRequests_Arr_Rel_Insert_Input = {
  data: Array<CashOutRequests_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<CashOutRequests_On_Conflict>;
};

/** aggregate avg on columns */
export type CashOutRequests_Avg_Fields = {
  __typename?: 'CashOutRequests_avg_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "cash_out_requests" */
export type CashOutRequests_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "cash_out_requests". All fields are combined with a logical 'AND'. */
export type CashOutRequests_Bool_Exp = {
  _and?: InputMaybe<Array<CashOutRequests_Bool_Exp>>;
  _not?: InputMaybe<CashOutRequests_Bool_Exp>;
  _or?: InputMaybe<Array<CashOutRequests_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  cashOutMethodByCashOutMethod?: InputMaybe<CashOutMethods_Bool_Exp>;
  cash_out_method?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  errorMessage?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  processed?: InputMaybe<Boolean_Comparison_Exp>;
  transactionHash?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  wallet?: InputMaybe<Wallets_Bool_Exp>;
  walletId?: InputMaybe<Uuid_Comparison_Exp>;
  worker?: InputMaybe<Workers_Bool_Exp>;
  workerId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "cash_out_requests" */
export enum CashOutRequests_Constraint {
  /** unique or primary key constraint on columns "transaction_hash" */
  CashOutRequestsConfirmationIdKey = 'cash_out_requests_confirmation_id_key',
  /** unique or primary key constraint on columns "id" */
  CashOutRequestsPkey = 'cash_out_requests_pkey'
}

/** input type for incrementing numeric columns in table "cash_out_requests" */
export type CashOutRequests_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "cash_out_requests" */
export type CashOutRequests_Insert_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  cashOutMethodByCashOutMethod?: InputMaybe<CashOutMethods_Obj_Rel_Insert_Input>;
  cash_out_method?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  processed?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  wallet?: InputMaybe<Wallets_Obj_Rel_Insert_Input>;
  walletId?: InputMaybe<Scalars['uuid']>;
  worker?: InputMaybe<Workers_Obj_Rel_Insert_Input>;
  workerId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type CashOutRequests_Max_Fields = {
  __typename?: 'CashOutRequests_max_fields';
  amount?: Maybe<Scalars['numeric']>;
  cash_out_method?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  errorMessage?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  transactionHash?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  walletId?: Maybe<Scalars['uuid']>;
  workerId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "cash_out_requests" */
export type CashOutRequests_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  cash_out_method?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  errorMessage?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transactionHash?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  walletId?: InputMaybe<Order_By>;
  workerId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type CashOutRequests_Min_Fields = {
  __typename?: 'CashOutRequests_min_fields';
  amount?: Maybe<Scalars['numeric']>;
  cash_out_method?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  errorMessage?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  transactionHash?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  walletId?: Maybe<Scalars['uuid']>;
  workerId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "cash_out_requests" */
export type CashOutRequests_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  cash_out_method?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  errorMessage?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transactionHash?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  walletId?: InputMaybe<Order_By>;
  workerId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "cash_out_requests" */
export type CashOutRequests_Mutation_Response = {
  __typename?: 'CashOutRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<CashOutRequests>;
};

/** on_conflict condition type for table "cash_out_requests" */
export type CashOutRequests_On_Conflict = {
  constraint: CashOutRequests_Constraint;
  update_columns?: Array<CashOutRequests_Update_Column>;
  where?: InputMaybe<CashOutRequests_Bool_Exp>;
};

/** Ordering options when selecting data from "cash_out_requests". */
export type CashOutRequests_Order_By = {
  amount?: InputMaybe<Order_By>;
  cashOutMethodByCashOutMethod?: InputMaybe<CashOutMethods_Order_By>;
  cash_out_method?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  errorMessage?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  processed?: InputMaybe<Order_By>;
  transactionHash?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  wallet?: InputMaybe<Wallets_Order_By>;
  walletId?: InputMaybe<Order_By>;
  worker?: InputMaybe<Workers_Order_By>;
  workerId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cash_out_requests */
export type CashOutRequests_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "cash_out_requests" */
export enum CashOutRequests_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CashOutMethod = 'cash_out_method',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ErrorMessage = 'errorMessage',
  /** column name */
  Id = 'id',
  /** column name */
  Processed = 'processed',
  /** column name */
  TransactionHash = 'transactionHash',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WalletId = 'walletId',
  /** column name */
  WorkerId = 'workerId'
}

/** input type for updating data in table "cash_out_requests" */
export type CashOutRequests_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  cash_out_method?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  processed?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  walletId?: InputMaybe<Scalars['uuid']>;
  workerId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type CashOutRequests_Stddev_Fields = {
  __typename?: 'CashOutRequests_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "cash_out_requests" */
export type CashOutRequests_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type CashOutRequests_Stddev_Pop_Fields = {
  __typename?: 'CashOutRequests_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "cash_out_requests" */
export type CashOutRequests_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type CashOutRequests_Stddev_Samp_Fields = {
  __typename?: 'CashOutRequests_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "cash_out_requests" */
export type CashOutRequests_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "CashOutRequests" */
export type CashOutRequests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: CashOutRequests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type CashOutRequests_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  cash_out_method?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  processed?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  walletId?: InputMaybe<Scalars['uuid']>;
  workerId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type CashOutRequests_Sum_Fields = {
  __typename?: 'CashOutRequests_sum_fields';
  amount?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "cash_out_requests" */
export type CashOutRequests_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** update columns of table "cash_out_requests" */
export enum CashOutRequests_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CashOutMethod = 'cash_out_method',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ErrorMessage = 'errorMessage',
  /** column name */
  Id = 'id',
  /** column name */
  Processed = 'processed',
  /** column name */
  TransactionHash = 'transactionHash',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WalletId = 'walletId',
  /** column name */
  WorkerId = 'workerId'
}

export type CashOutRequests_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<CashOutRequests_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CashOutRequests_Set_Input>;
  where: CashOutRequests_Bool_Exp;
};

/** aggregate var_pop on columns */
export type CashOutRequests_Var_Pop_Fields = {
  __typename?: 'CashOutRequests_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "cash_out_requests" */
export type CashOutRequests_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type CashOutRequests_Var_Samp_Fields = {
  __typename?: 'CashOutRequests_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "cash_out_requests" */
export type CashOutRequests_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type CashOutRequests_Variance_Fields = {
  __typename?: 'CashOutRequests_variance_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "cash_out_requests" */
export type CashOutRequests_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** columns and relationships of "collection_type" */
export type CollectionTypes = {
  __typename?: 'CollectionTypes';
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "collection_type" */
export type CollectionTypes_Aggregate = {
  __typename?: 'CollectionTypes_aggregate';
  aggregate?: Maybe<CollectionTypes_Aggregate_Fields>;
  nodes: Array<CollectionTypes>;
};

/** aggregate fields of "collection_type" */
export type CollectionTypes_Aggregate_Fields = {
  __typename?: 'CollectionTypes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<CollectionTypes_Max_Fields>;
  min?: Maybe<CollectionTypes_Min_Fields>;
};


/** aggregate fields of "collection_type" */
export type CollectionTypes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<CollectionTypes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "collection_type". All fields are combined with a logical 'AND'. */
export type CollectionTypes_Bool_Exp = {
  _and?: InputMaybe<Array<CollectionTypes_Bool_Exp>>;
  _not?: InputMaybe<CollectionTypes_Bool_Exp>;
  _or?: InputMaybe<Array<CollectionTypes_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "collection_type" */
export enum CollectionTypes_Constraint {
  /** unique or primary key constraint on columns "value" */
  CollectionTypePkey = 'collection_type_pkey'
}

/** input type for inserting data into table "collection_type" */
export type CollectionTypes_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type CollectionTypes_Max_Fields = {
  __typename?: 'CollectionTypes_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type CollectionTypes_Min_Fields = {
  __typename?: 'CollectionTypes_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "collection_type" */
export type CollectionTypes_Mutation_Response = {
  __typename?: 'CollectionTypes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<CollectionTypes>;
};

/** on_conflict condition type for table "collection_type" */
export type CollectionTypes_On_Conflict = {
  constraint: CollectionTypes_Constraint;
  update_columns?: Array<CollectionTypes_Update_Column>;
  where?: InputMaybe<CollectionTypes_Bool_Exp>;
};

/** Ordering options when selecting data from "collection_type". */
export type CollectionTypes_Order_By = {
  description?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: collection_type */
export type CollectionTypes_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "collection_type" */
export enum CollectionTypes_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "collection_type" */
export type CollectionTypes_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "CollectionTypes" */
export type CollectionTypes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: CollectionTypes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type CollectionTypes_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "collection_type" */
export enum CollectionTypes_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type CollectionTypes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CollectionTypes_Set_Input>;
  where: CollectionTypes_Bool_Exp;
};

/** columns and relationships of "customers" */
export type Customers = {
  __typename?: 'Customers';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  organization?: Maybe<Organizations>;
  organizationId?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  organizations: Array<Organizations>;
  /** An aggregate relationship */
  organizations_aggregate: Organizations_Aggregate;
  publicKey?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};


/** columns and relationships of "customers" */
export type CustomersOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


/** columns and relationships of "customers" */
export type CustomersOrganizations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};

/** aggregated selection of "customers" */
export type Customers_Aggregate = {
  __typename?: 'Customers_aggregate';
  aggregate?: Maybe<Customers_Aggregate_Fields>;
  nodes: Array<Customers>;
};

/** aggregate fields of "customers" */
export type Customers_Aggregate_Fields = {
  __typename?: 'Customers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Customers_Max_Fields>;
  min?: Maybe<Customers_Min_Fields>;
};


/** aggregate fields of "customers" */
export type Customers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Customers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "customers" */
export type Customers_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Customers_Max_Order_By>;
  min?: InputMaybe<Customers_Min_Order_By>;
};

/** input type for inserting array relation for remote table "customers" */
export type Customers_Arr_Rel_Insert_Input = {
  data: Array<Customers_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "customers". All fields are combined with a logical 'AND'. */
export type Customers_Bool_Exp = {
  _and?: InputMaybe<Array<Customers_Bool_Exp>>;
  _not?: InputMaybe<Customers_Bool_Exp>;
  _or?: InputMaybe<Array<Customers_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  organization?: InputMaybe<Organizations_Bool_Exp>;
  organizationId?: InputMaybe<Uuid_Comparison_Exp>;
  organizations?: InputMaybe<Organizations_Bool_Exp>;
  publicKey?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "customers" */
export enum Customers_Constraint {
  /** unique or primary key constraint on columns "id" */
  CustomersPkey = 'customers_pkey',
  /** unique or primary key constraint on columns "user_id" */
  CustomersUserIdKey = 'customers_user_id_key'
}

/** input type for inserting data into table "customers" */
export type Customers_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  organization?: InputMaybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: InputMaybe<Scalars['uuid']>;
  organizations?: InputMaybe<Organizations_Arr_Rel_Insert_Input>;
  publicKey?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Customers_Max_Fields = {
  __typename?: 'Customers_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  organizationId?: Maybe<Scalars['uuid']>;
  publicKey?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "customers" */
export type Customers_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  publicKey?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Customers_Min_Fields = {
  __typename?: 'Customers_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  organizationId?: Maybe<Scalars['uuid']>;
  publicKey?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "customers" */
export type Customers_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  publicKey?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "customers" */
export type Customers_Mutation_Response = {
  __typename?: 'Customers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Customers>;
};

/** input type for inserting object relation for remote table "customers" */
export type Customers_Obj_Rel_Insert_Input = {
  data: Customers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};

/** on_conflict condition type for table "customers" */
export type Customers_On_Conflict = {
  constraint: Customers_Constraint;
  update_columns?: Array<Customers_Update_Column>;
  where?: InputMaybe<Customers_Bool_Exp>;
};

/** Ordering options when selecting data from "customers". */
export type Customers_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organization?: InputMaybe<Organizations_Order_By>;
  organizationId?: InputMaybe<Order_By>;
  organizations_aggregate?: InputMaybe<Organizations_Aggregate_Order_By>;
  publicKey?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: customers */
export type Customers_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "customers" */
export enum Customers_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  PublicKey = 'publicKey',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "customers" */
export type Customers_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  organizationId?: InputMaybe<Scalars['uuid']>;
  publicKey?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "Customers" */
export type Customers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Customers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Customers_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  organizationId?: InputMaybe<Scalars['uuid']>;
  publicKey?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "customers" */
export enum Customers_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  PublicKey = 'publicKey',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type Customers_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Customers_Set_Input>;
  where: Customers_Bool_Exp;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

/** columns and relationships of "etx_task_sessions" */
export type EtxTaskSessions = {
  __typename?: 'EtxTaskSessions';
  confirmed: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['timestamptz']>;
  exitReason?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user?: Maybe<Users>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "etx_task_sessions" */
export type EtxTaskSessions_Aggregate = {
  __typename?: 'EtxTaskSessions_aggregate';
  aggregate?: Maybe<EtxTaskSessions_Aggregate_Fields>;
  nodes: Array<EtxTaskSessions>;
};

/** aggregate fields of "etx_task_sessions" */
export type EtxTaskSessions_Aggregate_Fields = {
  __typename?: 'EtxTaskSessions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<EtxTaskSessions_Max_Fields>;
  min?: Maybe<EtxTaskSessions_Min_Fields>;
};


/** aggregate fields of "etx_task_sessions" */
export type EtxTaskSessions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<EtxTaskSessions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "etx_task_sessions" */
export type EtxTaskSessions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<EtxTaskSessions_Max_Order_By>;
  min?: InputMaybe<EtxTaskSessions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "etx_task_sessions" */
export type EtxTaskSessions_Arr_Rel_Insert_Input = {
  data: Array<EtxTaskSessions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<EtxTaskSessions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "etx_task_sessions". All fields are combined with a logical 'AND'. */
export type EtxTaskSessions_Bool_Exp = {
  _and?: InputMaybe<Array<EtxTaskSessions_Bool_Exp>>;
  _not?: InputMaybe<EtxTaskSessions_Bool_Exp>;
  _or?: InputMaybe<Array<EtxTaskSessions_Bool_Exp>>;
  confirmed?: InputMaybe<Boolean_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  exitReason?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "etx_task_sessions" */
export enum EtxTaskSessions_Constraint {
  /** unique or primary key constraint on columns "id", "user_id" */
  EtxTaskSessionsIdUserIdKey = 'etx_task_sessions_id_user_id_key',
  /** unique or primary key constraint on columns "id" */
  EtxTaskSessionsPkey = 'etx_task_sessions_pkey'
}

/** input type for inserting data into table "etx_task_sessions" */
export type EtxTaskSessions_Insert_Input = {
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  exitReason?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type EtxTaskSessions_Max_Fields = {
  __typename?: 'EtxTaskSessions_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  exitReason?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "etx_task_sessions" */
export type EtxTaskSessions_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  exitReason?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type EtxTaskSessions_Min_Fields = {
  __typename?: 'EtxTaskSessions_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  exitReason?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "etx_task_sessions" */
export type EtxTaskSessions_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  exitReason?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "etx_task_sessions" */
export type EtxTaskSessions_Mutation_Response = {
  __typename?: 'EtxTaskSessions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<EtxTaskSessions>;
};

/** on_conflict condition type for table "etx_task_sessions" */
export type EtxTaskSessions_On_Conflict = {
  constraint: EtxTaskSessions_Constraint;
  update_columns?: Array<EtxTaskSessions_Update_Column>;
  where?: InputMaybe<EtxTaskSessions_Bool_Exp>;
};

/** Ordering options when selecting data from "etx_task_sessions". */
export type EtxTaskSessions_Order_By = {
  confirmed?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  exitReason?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: etx_task_sessions */
export type EtxTaskSessions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "etx_task_sessions" */
export enum EtxTaskSessions_Select_Column {
  /** column name */
  Confirmed = 'confirmed',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExitReason = 'exitReason',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "etx_task_sessions" */
export type EtxTaskSessions_Set_Input = {
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  exitReason?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "EtxTaskSessions" */
export type EtxTaskSessions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: EtxTaskSessions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type EtxTaskSessions_Stream_Cursor_Value_Input = {
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  exitReason?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "etx_task_sessions" */
export enum EtxTaskSessions_Update_Column {
  /** column name */
  Confirmed = 'confirmed',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExitReason = 'exitReason',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type EtxTaskSessions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<EtxTaskSessions_Set_Input>;
  where: EtxTaskSessions_Bool_Exp;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "fireboa_cash_out_crypto_requests" */
export type FireboaCashOutCryptoRequests = {
  __typename?: 'FireboaCashOutCryptoRequests';
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  fireboaCashOutRequest: FireboaCashOutRequests;
  fireboaCashOutRequestId: Scalars['uuid'];
  id: Scalars['uuid'];
  transactionHash: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  wallet: Wallets;
  walletId: Scalars['uuid'];
};

/** aggregated selection of "fireboa_cash_out_crypto_requests" */
export type FireboaCashOutCryptoRequests_Aggregate = {
  __typename?: 'FireboaCashOutCryptoRequests_aggregate';
  aggregate?: Maybe<FireboaCashOutCryptoRequests_Aggregate_Fields>;
  nodes: Array<FireboaCashOutCryptoRequests>;
};

/** aggregate fields of "fireboa_cash_out_crypto_requests" */
export type FireboaCashOutCryptoRequests_Aggregate_Fields = {
  __typename?: 'FireboaCashOutCryptoRequests_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<FireboaCashOutCryptoRequests_Max_Fields>;
  min?: Maybe<FireboaCashOutCryptoRequests_Min_Fields>;
};


/** aggregate fields of "fireboa_cash_out_crypto_requests" */
export type FireboaCashOutCryptoRequests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<FireboaCashOutCryptoRequests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "fireboa_cash_out_crypto_requests". All fields are combined with a logical 'AND'. */
export type FireboaCashOutCryptoRequests_Bool_Exp = {
  _and?: InputMaybe<Array<FireboaCashOutCryptoRequests_Bool_Exp>>;
  _not?: InputMaybe<FireboaCashOutCryptoRequests_Bool_Exp>;
  _or?: InputMaybe<Array<FireboaCashOutCryptoRequests_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  fireboaCashOutRequest?: InputMaybe<FireboaCashOutRequests_Bool_Exp>;
  fireboaCashOutRequestId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  transactionHash?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  wallet?: InputMaybe<Wallets_Bool_Exp>;
  walletId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "fireboa_cash_out_crypto_requests" */
export enum FireboaCashOutCryptoRequests_Constraint {
  /** unique or primary key constraint on columns "fireboa_cash_out_request_id" */
  FireboaCashOutCryptoRequesFireboaCashOutRequestsIdKey = 'fireboa_cash_out_crypto_reques_fireboa_cash_out_requests_id_key',
  /** unique or primary key constraint on columns "id" */
  FireboaCashOutCryptoRequestsPkey = 'fireboa_cash_out_crypto_requests_pkey',
  /** unique or primary key constraint on columns "transaction_hash" */
  FireboaCashOutCryptoRequestsTransactionHashKey = 'fireboa_cash_out_crypto_requests_transaction_hash_key'
}

/** input type for inserting data into table "fireboa_cash_out_crypto_requests" */
export type FireboaCashOutCryptoRequests_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  fireboaCashOutRequest?: InputMaybe<FireboaCashOutRequests_Obj_Rel_Insert_Input>;
  fireboaCashOutRequestId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  transactionHash?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  wallet?: InputMaybe<Wallets_Obj_Rel_Insert_Input>;
  walletId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type FireboaCashOutCryptoRequests_Max_Fields = {
  __typename?: 'FireboaCashOutCryptoRequests_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  fireboaCashOutRequestId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  transactionHash?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  walletId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type FireboaCashOutCryptoRequests_Min_Fields = {
  __typename?: 'FireboaCashOutCryptoRequests_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  fireboaCashOutRequestId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  transactionHash?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  walletId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "fireboa_cash_out_crypto_requests" */
export type FireboaCashOutCryptoRequests_Mutation_Response = {
  __typename?: 'FireboaCashOutCryptoRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<FireboaCashOutCryptoRequests>;
};

/** input type for inserting object relation for remote table "fireboa_cash_out_crypto_requests" */
export type FireboaCashOutCryptoRequests_Obj_Rel_Insert_Input = {
  data: FireboaCashOutCryptoRequests_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<FireboaCashOutCryptoRequests_On_Conflict>;
};

/** on_conflict condition type for table "fireboa_cash_out_crypto_requests" */
export type FireboaCashOutCryptoRequests_On_Conflict = {
  constraint: FireboaCashOutCryptoRequests_Constraint;
  update_columns?: Array<FireboaCashOutCryptoRequests_Update_Column>;
  where?: InputMaybe<FireboaCashOutCryptoRequests_Bool_Exp>;
};

/** Ordering options when selecting data from "fireboa_cash_out_crypto_requests". */
export type FireboaCashOutCryptoRequests_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  fireboaCashOutRequest?: InputMaybe<FireboaCashOutRequests_Order_By>;
  fireboaCashOutRequestId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  transactionHash?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  wallet?: InputMaybe<Wallets_Order_By>;
  walletId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: fireboa_cash_out_crypto_requests */
export type FireboaCashOutCryptoRequests_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "fireboa_cash_out_crypto_requests" */
export enum FireboaCashOutCryptoRequests_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FireboaCashOutRequestId = 'fireboaCashOutRequestId',
  /** column name */
  Id = 'id',
  /** column name */
  TransactionHash = 'transactionHash',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WalletId = 'walletId'
}

/** input type for updating data in table "fireboa_cash_out_crypto_requests" */
export type FireboaCashOutCryptoRequests_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  fireboaCashOutRequestId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  transactionHash?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  walletId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "FireboaCashOutCryptoRequests" */
export type FireboaCashOutCryptoRequests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: FireboaCashOutCryptoRequests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type FireboaCashOutCryptoRequests_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  fireboaCashOutRequestId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  transactionHash?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  walletId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "fireboa_cash_out_crypto_requests" */
export enum FireboaCashOutCryptoRequests_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FireboaCashOutRequestId = 'fireboaCashOutRequestId',
  /** column name */
  Id = 'id',
  /** column name */
  TransactionHash = 'transactionHash',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WalletId = 'walletId'
}

export type FireboaCashOutCryptoRequests_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FireboaCashOutCryptoRequests_Set_Input>;
  where: FireboaCashOutCryptoRequests_Bool_Exp;
};

/** columns and relationships of "fireboa_cash_out_gift_card_requests" */
export type FireboaCashOutGiftCardRequests = {
  __typename?: 'FireboaCashOutGiftCardRequests';
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  fireboaCashOutRequest: FireboaCashOutRequests;
  fireboaCashOutRequestId: Scalars['uuid'];
  id: Scalars['uuid'];
  referralLink?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "fireboa_cash_out_gift_card_requests" */
export type FireboaCashOutGiftCardRequests_Aggregate = {
  __typename?: 'FireboaCashOutGiftCardRequests_aggregate';
  aggregate?: Maybe<FireboaCashOutGiftCardRequests_Aggregate_Fields>;
  nodes: Array<FireboaCashOutGiftCardRequests>;
};

/** aggregate fields of "fireboa_cash_out_gift_card_requests" */
export type FireboaCashOutGiftCardRequests_Aggregate_Fields = {
  __typename?: 'FireboaCashOutGiftCardRequests_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<FireboaCashOutGiftCardRequests_Max_Fields>;
  min?: Maybe<FireboaCashOutGiftCardRequests_Min_Fields>;
};


/** aggregate fields of "fireboa_cash_out_gift_card_requests" */
export type FireboaCashOutGiftCardRequests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<FireboaCashOutGiftCardRequests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "fireboa_cash_out_gift_card_requests". All fields are combined with a logical 'AND'. */
export type FireboaCashOutGiftCardRequests_Bool_Exp = {
  _and?: InputMaybe<Array<FireboaCashOutGiftCardRequests_Bool_Exp>>;
  _not?: InputMaybe<FireboaCashOutGiftCardRequests_Bool_Exp>;
  _or?: InputMaybe<Array<FireboaCashOutGiftCardRequests_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  fireboaCashOutRequest?: InputMaybe<FireboaCashOutRequests_Bool_Exp>;
  fireboaCashOutRequestId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  referralLink?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "fireboa_cash_out_gift_card_requests" */
export enum FireboaCashOutGiftCardRequests_Constraint {
  /** unique or primary key constraint on columns "fireboa_cash_out_request_id" */
  FireboaCashOutGiftCardReqFireboaCashOutRequestsIdKey = 'fireboa_cash_out_gift_card_req_fireboa_cash_out_requests_id_key',
  /** unique or primary key constraint on columns "id" */
  FireboaCashOutGiftCardRequestsPkey = 'fireboa_cash_out_gift_card_requests_pkey'
}

/** input type for inserting data into table "fireboa_cash_out_gift_card_requests" */
export type FireboaCashOutGiftCardRequests_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  fireboaCashOutRequest?: InputMaybe<FireboaCashOutRequests_Obj_Rel_Insert_Input>;
  fireboaCashOutRequestId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  referralLink?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type FireboaCashOutGiftCardRequests_Max_Fields = {
  __typename?: 'FireboaCashOutGiftCardRequests_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  fireboaCashOutRequestId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  referralLink?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type FireboaCashOutGiftCardRequests_Min_Fields = {
  __typename?: 'FireboaCashOutGiftCardRequests_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  fireboaCashOutRequestId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  referralLink?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "fireboa_cash_out_gift_card_requests" */
export type FireboaCashOutGiftCardRequests_Mutation_Response = {
  __typename?: 'FireboaCashOutGiftCardRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<FireboaCashOutGiftCardRequests>;
};

/** input type for inserting object relation for remote table "fireboa_cash_out_gift_card_requests" */
export type FireboaCashOutGiftCardRequests_Obj_Rel_Insert_Input = {
  data: FireboaCashOutGiftCardRequests_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<FireboaCashOutGiftCardRequests_On_Conflict>;
};

/** on_conflict condition type for table "fireboa_cash_out_gift_card_requests" */
export type FireboaCashOutGiftCardRequests_On_Conflict = {
  constraint: FireboaCashOutGiftCardRequests_Constraint;
  update_columns?: Array<FireboaCashOutGiftCardRequests_Update_Column>;
  where?: InputMaybe<FireboaCashOutGiftCardRequests_Bool_Exp>;
};

/** Ordering options when selecting data from "fireboa_cash_out_gift_card_requests". */
export type FireboaCashOutGiftCardRequests_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  fireboaCashOutRequest?: InputMaybe<FireboaCashOutRequests_Order_By>;
  fireboaCashOutRequestId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  referralLink?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: fireboa_cash_out_gift_card_requests */
export type FireboaCashOutGiftCardRequests_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "fireboa_cash_out_gift_card_requests" */
export enum FireboaCashOutGiftCardRequests_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FireboaCashOutRequestId = 'fireboaCashOutRequestId',
  /** column name */
  Id = 'id',
  /** column name */
  ReferralLink = 'referralLink',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "fireboa_cash_out_gift_card_requests" */
export type FireboaCashOutGiftCardRequests_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  fireboaCashOutRequestId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  referralLink?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "FireboaCashOutGiftCardRequests" */
export type FireboaCashOutGiftCardRequests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: FireboaCashOutGiftCardRequests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type FireboaCashOutGiftCardRequests_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  fireboaCashOutRequestId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  referralLink?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "fireboa_cash_out_gift_card_requests" */
export enum FireboaCashOutGiftCardRequests_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FireboaCashOutRequestId = 'fireboaCashOutRequestId',
  /** column name */
  Id = 'id',
  /** column name */
  ReferralLink = 'referralLink',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type FireboaCashOutGiftCardRequests_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FireboaCashOutGiftCardRequests_Set_Input>;
  where: FireboaCashOutGiftCardRequests_Bool_Exp;
};

/** columns and relationships of "fireboa_cash_out_preferred_methods" */
export type FireboaCashOutPreferredMethods = {
  __typename?: 'FireboaCashOutPreferredMethods';
  cashOutMethod: Scalars['String'];
  /** An object relationship */
  cashOutMethodByCashOutMethod: CashOutMethods;
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  worker: Workers;
  workerId: Scalars['uuid'];
};

/** aggregated selection of "fireboa_cash_out_preferred_methods" */
export type FireboaCashOutPreferredMethods_Aggregate = {
  __typename?: 'FireboaCashOutPreferredMethods_aggregate';
  aggregate?: Maybe<FireboaCashOutPreferredMethods_Aggregate_Fields>;
  nodes: Array<FireboaCashOutPreferredMethods>;
};

/** aggregate fields of "fireboa_cash_out_preferred_methods" */
export type FireboaCashOutPreferredMethods_Aggregate_Fields = {
  __typename?: 'FireboaCashOutPreferredMethods_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<FireboaCashOutPreferredMethods_Max_Fields>;
  min?: Maybe<FireboaCashOutPreferredMethods_Min_Fields>;
};


/** aggregate fields of "fireboa_cash_out_preferred_methods" */
export type FireboaCashOutPreferredMethods_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<FireboaCashOutPreferredMethods_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "fireboa_cash_out_preferred_methods" */
export type FireboaCashOutPreferredMethods_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<FireboaCashOutPreferredMethods_Max_Order_By>;
  min?: InputMaybe<FireboaCashOutPreferredMethods_Min_Order_By>;
};

/** input type for inserting array relation for remote table "fireboa_cash_out_preferred_methods" */
export type FireboaCashOutPreferredMethods_Arr_Rel_Insert_Input = {
  data: Array<FireboaCashOutPreferredMethods_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<FireboaCashOutPreferredMethods_On_Conflict>;
};

/** Boolean expression to filter rows from the table "fireboa_cash_out_preferred_methods". All fields are combined with a logical 'AND'. */
export type FireboaCashOutPreferredMethods_Bool_Exp = {
  _and?: InputMaybe<Array<FireboaCashOutPreferredMethods_Bool_Exp>>;
  _not?: InputMaybe<FireboaCashOutPreferredMethods_Bool_Exp>;
  _or?: InputMaybe<Array<FireboaCashOutPreferredMethods_Bool_Exp>>;
  cashOutMethod?: InputMaybe<String_Comparison_Exp>;
  cashOutMethodByCashOutMethod?: InputMaybe<CashOutMethods_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  worker?: InputMaybe<Workers_Bool_Exp>;
  workerId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "fireboa_cash_out_preferred_methods" */
export enum FireboaCashOutPreferredMethods_Constraint {
  /** unique or primary key constraint on columns "id" */
  FireboaCashOutPreferredMethodsPkey = 'fireboa_cash_out_preferred_methods_pkey'
}

/** input type for inserting data into table "fireboa_cash_out_preferred_methods" */
export type FireboaCashOutPreferredMethods_Insert_Input = {
  cashOutMethod?: InputMaybe<Scalars['String']>;
  cashOutMethodByCashOutMethod?: InputMaybe<CashOutMethods_Obj_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  worker?: InputMaybe<Workers_Obj_Rel_Insert_Input>;
  workerId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type FireboaCashOutPreferredMethods_Max_Fields = {
  __typename?: 'FireboaCashOutPreferredMethods_max_fields';
  cashOutMethod?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  workerId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "fireboa_cash_out_preferred_methods" */
export type FireboaCashOutPreferredMethods_Max_Order_By = {
  cashOutMethod?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  workerId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type FireboaCashOutPreferredMethods_Min_Fields = {
  __typename?: 'FireboaCashOutPreferredMethods_min_fields';
  cashOutMethod?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  workerId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "fireboa_cash_out_preferred_methods" */
export type FireboaCashOutPreferredMethods_Min_Order_By = {
  cashOutMethod?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  workerId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "fireboa_cash_out_preferred_methods" */
export type FireboaCashOutPreferredMethods_Mutation_Response = {
  __typename?: 'FireboaCashOutPreferredMethods_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<FireboaCashOutPreferredMethods>;
};

/** on_conflict condition type for table "fireboa_cash_out_preferred_methods" */
export type FireboaCashOutPreferredMethods_On_Conflict = {
  constraint: FireboaCashOutPreferredMethods_Constraint;
  update_columns?: Array<FireboaCashOutPreferredMethods_Update_Column>;
  where?: InputMaybe<FireboaCashOutPreferredMethods_Bool_Exp>;
};

/** Ordering options when selecting data from "fireboa_cash_out_preferred_methods". */
export type FireboaCashOutPreferredMethods_Order_By = {
  cashOutMethod?: InputMaybe<Order_By>;
  cashOutMethodByCashOutMethod?: InputMaybe<CashOutMethods_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  worker?: InputMaybe<Workers_Order_By>;
  workerId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: fireboa_cash_out_preferred_methods */
export type FireboaCashOutPreferredMethods_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "fireboa_cash_out_preferred_methods" */
export enum FireboaCashOutPreferredMethods_Select_Column {
  /** column name */
  CashOutMethod = 'cashOutMethod',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WorkerId = 'workerId'
}

/** input type for updating data in table "fireboa_cash_out_preferred_methods" */
export type FireboaCashOutPreferredMethods_Set_Input = {
  cashOutMethod?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  workerId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "FireboaCashOutPreferredMethods" */
export type FireboaCashOutPreferredMethods_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: FireboaCashOutPreferredMethods_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type FireboaCashOutPreferredMethods_Stream_Cursor_Value_Input = {
  cashOutMethod?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  workerId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "fireboa_cash_out_preferred_methods" */
export enum FireboaCashOutPreferredMethods_Update_Column {
  /** column name */
  CashOutMethod = 'cashOutMethod',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WorkerId = 'workerId'
}

export type FireboaCashOutPreferredMethods_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FireboaCashOutPreferredMethods_Set_Input>;
  where: FireboaCashOutPreferredMethods_Bool_Exp;
};

/** columns and relationships of "fireboa_cash_out_requests" */
export type FireboaCashOutRequests = {
  __typename?: 'FireboaCashOutRequests';
  amountInCents: Scalars['numeric'];
  cashOutMethod: Scalars['String'];
  /** An object relationship */
  cashOutMethodByCashOutMethod: CashOutMethods;
  createdAt: Scalars['timestamptz'];
  errorMessage?: Maybe<Scalars['String']>;
  /** An object relationship */
  fireboaCashOutCryptoRequest?: Maybe<FireboaCashOutCryptoRequests>;
  /** An object relationship */
  fireboaCashOutGiftCardRequest?: Maybe<FireboaCashOutGiftCardRequests>;
  id: Scalars['uuid'];
  processed: Scalars['Boolean'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  worker: Workers;
  workerId: Scalars['uuid'];
};

/** aggregated selection of "fireboa_cash_out_requests" */
export type FireboaCashOutRequests_Aggregate = {
  __typename?: 'FireboaCashOutRequests_aggregate';
  aggregate?: Maybe<FireboaCashOutRequests_Aggregate_Fields>;
  nodes: Array<FireboaCashOutRequests>;
};

/** aggregate fields of "fireboa_cash_out_requests" */
export type FireboaCashOutRequests_Aggregate_Fields = {
  __typename?: 'FireboaCashOutRequests_aggregate_fields';
  avg?: Maybe<FireboaCashOutRequests_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<FireboaCashOutRequests_Max_Fields>;
  min?: Maybe<FireboaCashOutRequests_Min_Fields>;
  stddev?: Maybe<FireboaCashOutRequests_Stddev_Fields>;
  stddev_pop?: Maybe<FireboaCashOutRequests_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<FireboaCashOutRequests_Stddev_Samp_Fields>;
  sum?: Maybe<FireboaCashOutRequests_Sum_Fields>;
  var_pop?: Maybe<FireboaCashOutRequests_Var_Pop_Fields>;
  var_samp?: Maybe<FireboaCashOutRequests_Var_Samp_Fields>;
  variance?: Maybe<FireboaCashOutRequests_Variance_Fields>;
};


/** aggregate fields of "fireboa_cash_out_requests" */
export type FireboaCashOutRequests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<FireboaCashOutRequests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "fireboa_cash_out_requests" */
export type FireboaCashOutRequests_Aggregate_Order_By = {
  avg?: InputMaybe<FireboaCashOutRequests_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<FireboaCashOutRequests_Max_Order_By>;
  min?: InputMaybe<FireboaCashOutRequests_Min_Order_By>;
  stddev?: InputMaybe<FireboaCashOutRequests_Stddev_Order_By>;
  stddev_pop?: InputMaybe<FireboaCashOutRequests_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<FireboaCashOutRequests_Stddev_Samp_Order_By>;
  sum?: InputMaybe<FireboaCashOutRequests_Sum_Order_By>;
  var_pop?: InputMaybe<FireboaCashOutRequests_Var_Pop_Order_By>;
  var_samp?: InputMaybe<FireboaCashOutRequests_Var_Samp_Order_By>;
  variance?: InputMaybe<FireboaCashOutRequests_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "fireboa_cash_out_requests" */
export type FireboaCashOutRequests_Arr_Rel_Insert_Input = {
  data: Array<FireboaCashOutRequests_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<FireboaCashOutRequests_On_Conflict>;
};

/** aggregate avg on columns */
export type FireboaCashOutRequests_Avg_Fields = {
  __typename?: 'FireboaCashOutRequests_avg_fields';
  amountInCents?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "fireboa_cash_out_requests" */
export type FireboaCashOutRequests_Avg_Order_By = {
  amountInCents?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "fireboa_cash_out_requests". All fields are combined with a logical 'AND'. */
export type FireboaCashOutRequests_Bool_Exp = {
  _and?: InputMaybe<Array<FireboaCashOutRequests_Bool_Exp>>;
  _not?: InputMaybe<FireboaCashOutRequests_Bool_Exp>;
  _or?: InputMaybe<Array<FireboaCashOutRequests_Bool_Exp>>;
  amountInCents?: InputMaybe<Numeric_Comparison_Exp>;
  cashOutMethod?: InputMaybe<String_Comparison_Exp>;
  cashOutMethodByCashOutMethod?: InputMaybe<CashOutMethods_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  errorMessage?: InputMaybe<String_Comparison_Exp>;
  fireboaCashOutCryptoRequest?: InputMaybe<FireboaCashOutCryptoRequests_Bool_Exp>;
  fireboaCashOutGiftCardRequest?: InputMaybe<FireboaCashOutGiftCardRequests_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  processed?: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  worker?: InputMaybe<Workers_Bool_Exp>;
  workerId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "fireboa_cash_out_requests" */
export enum FireboaCashOutRequests_Constraint {
  /** unique or primary key constraint on columns "id" */
  FireboaCashOutRequestsPkey = 'fireboa_cash_out_requests_pkey'
}

/** input type for incrementing numeric columns in table "fireboa_cash_out_requests" */
export type FireboaCashOutRequests_Inc_Input = {
  amountInCents?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "fireboa_cash_out_requests" */
export type FireboaCashOutRequests_Insert_Input = {
  amountInCents?: InputMaybe<Scalars['numeric']>;
  cashOutMethod?: InputMaybe<Scalars['String']>;
  cashOutMethodByCashOutMethod?: InputMaybe<CashOutMethods_Obj_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  fireboaCashOutCryptoRequest?: InputMaybe<FireboaCashOutCryptoRequests_Obj_Rel_Insert_Input>;
  fireboaCashOutGiftCardRequest?: InputMaybe<FireboaCashOutGiftCardRequests_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  processed?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  worker?: InputMaybe<Workers_Obj_Rel_Insert_Input>;
  workerId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type FireboaCashOutRequests_Max_Fields = {
  __typename?: 'FireboaCashOutRequests_max_fields';
  amountInCents?: Maybe<Scalars['numeric']>;
  cashOutMethod?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  errorMessage?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  workerId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "fireboa_cash_out_requests" */
export type FireboaCashOutRequests_Max_Order_By = {
  amountInCents?: InputMaybe<Order_By>;
  cashOutMethod?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  errorMessage?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  workerId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type FireboaCashOutRequests_Min_Fields = {
  __typename?: 'FireboaCashOutRequests_min_fields';
  amountInCents?: Maybe<Scalars['numeric']>;
  cashOutMethod?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  errorMessage?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  workerId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "fireboa_cash_out_requests" */
export type FireboaCashOutRequests_Min_Order_By = {
  amountInCents?: InputMaybe<Order_By>;
  cashOutMethod?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  errorMessage?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  workerId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "fireboa_cash_out_requests" */
export type FireboaCashOutRequests_Mutation_Response = {
  __typename?: 'FireboaCashOutRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<FireboaCashOutRequests>;
};

/** input type for inserting object relation for remote table "fireboa_cash_out_requests" */
export type FireboaCashOutRequests_Obj_Rel_Insert_Input = {
  data: FireboaCashOutRequests_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<FireboaCashOutRequests_On_Conflict>;
};

/** on_conflict condition type for table "fireboa_cash_out_requests" */
export type FireboaCashOutRequests_On_Conflict = {
  constraint: FireboaCashOutRequests_Constraint;
  update_columns?: Array<FireboaCashOutRequests_Update_Column>;
  where?: InputMaybe<FireboaCashOutRequests_Bool_Exp>;
};

/** Ordering options when selecting data from "fireboa_cash_out_requests". */
export type FireboaCashOutRequests_Order_By = {
  amountInCents?: InputMaybe<Order_By>;
  cashOutMethod?: InputMaybe<Order_By>;
  cashOutMethodByCashOutMethod?: InputMaybe<CashOutMethods_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  errorMessage?: InputMaybe<Order_By>;
  fireboaCashOutCryptoRequest?: InputMaybe<FireboaCashOutCryptoRequests_Order_By>;
  fireboaCashOutGiftCardRequest?: InputMaybe<FireboaCashOutGiftCardRequests_Order_By>;
  id?: InputMaybe<Order_By>;
  processed?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  worker?: InputMaybe<Workers_Order_By>;
  workerId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: fireboa_cash_out_requests */
export type FireboaCashOutRequests_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "fireboa_cash_out_requests" */
export enum FireboaCashOutRequests_Select_Column {
  /** column name */
  AmountInCents = 'amountInCents',
  /** column name */
  CashOutMethod = 'cashOutMethod',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ErrorMessage = 'errorMessage',
  /** column name */
  Id = 'id',
  /** column name */
  Processed = 'processed',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WorkerId = 'workerId'
}

/** input type for updating data in table "fireboa_cash_out_requests" */
export type FireboaCashOutRequests_Set_Input = {
  amountInCents?: InputMaybe<Scalars['numeric']>;
  cashOutMethod?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  processed?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  workerId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type FireboaCashOutRequests_Stddev_Fields = {
  __typename?: 'FireboaCashOutRequests_stddev_fields';
  amountInCents?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "fireboa_cash_out_requests" */
export type FireboaCashOutRequests_Stddev_Order_By = {
  amountInCents?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type FireboaCashOutRequests_Stddev_Pop_Fields = {
  __typename?: 'FireboaCashOutRequests_stddev_pop_fields';
  amountInCents?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "fireboa_cash_out_requests" */
export type FireboaCashOutRequests_Stddev_Pop_Order_By = {
  amountInCents?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type FireboaCashOutRequests_Stddev_Samp_Fields = {
  __typename?: 'FireboaCashOutRequests_stddev_samp_fields';
  amountInCents?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "fireboa_cash_out_requests" */
export type FireboaCashOutRequests_Stddev_Samp_Order_By = {
  amountInCents?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "FireboaCashOutRequests" */
export type FireboaCashOutRequests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: FireboaCashOutRequests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type FireboaCashOutRequests_Stream_Cursor_Value_Input = {
  amountInCents?: InputMaybe<Scalars['numeric']>;
  cashOutMethod?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  processed?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  workerId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type FireboaCashOutRequests_Sum_Fields = {
  __typename?: 'FireboaCashOutRequests_sum_fields';
  amountInCents?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "fireboa_cash_out_requests" */
export type FireboaCashOutRequests_Sum_Order_By = {
  amountInCents?: InputMaybe<Order_By>;
};

/** update columns of table "fireboa_cash_out_requests" */
export enum FireboaCashOutRequests_Update_Column {
  /** column name */
  AmountInCents = 'amountInCents',
  /** column name */
  CashOutMethod = 'cashOutMethod',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ErrorMessage = 'errorMessage',
  /** column name */
  Id = 'id',
  /** column name */
  Processed = 'processed',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WorkerId = 'workerId'
}

export type FireboaCashOutRequests_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<FireboaCashOutRequests_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FireboaCashOutRequests_Set_Input>;
  where: FireboaCashOutRequests_Bool_Exp;
};

/** aggregate var_pop on columns */
export type FireboaCashOutRequests_Var_Pop_Fields = {
  __typename?: 'FireboaCashOutRequests_var_pop_fields';
  amountInCents?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "fireboa_cash_out_requests" */
export type FireboaCashOutRequests_Var_Pop_Order_By = {
  amountInCents?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type FireboaCashOutRequests_Var_Samp_Fields = {
  __typename?: 'FireboaCashOutRequests_var_samp_fields';
  amountInCents?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "fireboa_cash_out_requests" */
export type FireboaCashOutRequests_Var_Samp_Order_By = {
  amountInCents?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type FireboaCashOutRequests_Variance_Fields = {
  __typename?: 'FireboaCashOutRequests_variance_fields';
  amountInCents?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "fireboa_cash_out_requests" */
export type FireboaCashOutRequests_Variance_Order_By = {
  amountInCents?: InputMaybe<Order_By>;
};

/** columns and relationships of "fireboa_modules" */
export type FireboaModules = {
  __typename?: 'FireboaModules';
  /** An array relationship */
  fireboa_project_modules: Array<FireboaProjectsModules>;
  /** An aggregate relationship */
  fireboa_project_modules_aggregate: FireboaProjectsModules_Aggregate;
  id: Scalars['uuid'];
  resourceLocation: Scalars['String'];
  reusable: Scalars['Boolean'];
};


/** columns and relationships of "fireboa_modules" */
export type FireboaModulesFireboa_Project_ModulesArgs = {
  distinct_on?: InputMaybe<Array<FireboaProjectsModules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaProjectsModules_Order_By>>;
  where?: InputMaybe<FireboaProjectsModules_Bool_Exp>;
};


/** columns and relationships of "fireboa_modules" */
export type FireboaModulesFireboa_Project_Modules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<FireboaProjectsModules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaProjectsModules_Order_By>>;
  where?: InputMaybe<FireboaProjectsModules_Bool_Exp>;
};

/** aggregated selection of "fireboa_modules" */
export type FireboaModules_Aggregate = {
  __typename?: 'FireboaModules_aggregate';
  aggregate?: Maybe<FireboaModules_Aggregate_Fields>;
  nodes: Array<FireboaModules>;
};

/** aggregate fields of "fireboa_modules" */
export type FireboaModules_Aggregate_Fields = {
  __typename?: 'FireboaModules_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<FireboaModules_Max_Fields>;
  min?: Maybe<FireboaModules_Min_Fields>;
};


/** aggregate fields of "fireboa_modules" */
export type FireboaModules_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<FireboaModules_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "fireboa_modules". All fields are combined with a logical 'AND'. */
export type FireboaModules_Bool_Exp = {
  _and?: InputMaybe<Array<FireboaModules_Bool_Exp>>;
  _not?: InputMaybe<FireboaModules_Bool_Exp>;
  _or?: InputMaybe<Array<FireboaModules_Bool_Exp>>;
  fireboa_project_modules?: InputMaybe<FireboaProjectsModules_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  resourceLocation?: InputMaybe<String_Comparison_Exp>;
  reusable?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "fireboa_modules" */
export enum FireboaModules_Constraint {
  /** unique or primary key constraint on columns "id" */
  ModulesPkey = 'modules_pkey'
}

/** input type for inserting data into table "fireboa_modules" */
export type FireboaModules_Insert_Input = {
  fireboa_project_modules?: InputMaybe<FireboaProjectsModules_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  resourceLocation?: InputMaybe<Scalars['String']>;
  reusable?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type FireboaModules_Max_Fields = {
  __typename?: 'FireboaModules_max_fields';
  id?: Maybe<Scalars['uuid']>;
  resourceLocation?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type FireboaModules_Min_Fields = {
  __typename?: 'FireboaModules_min_fields';
  id?: Maybe<Scalars['uuid']>;
  resourceLocation?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "fireboa_modules" */
export type FireboaModules_Mutation_Response = {
  __typename?: 'FireboaModules_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<FireboaModules>;
};

/** input type for inserting object relation for remote table "fireboa_modules" */
export type FireboaModules_Obj_Rel_Insert_Input = {
  data: FireboaModules_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<FireboaModules_On_Conflict>;
};

/** on_conflict condition type for table "fireboa_modules" */
export type FireboaModules_On_Conflict = {
  constraint: FireboaModules_Constraint;
  update_columns?: Array<FireboaModules_Update_Column>;
  where?: InputMaybe<FireboaModules_Bool_Exp>;
};

/** Ordering options when selecting data from "fireboa_modules". */
export type FireboaModules_Order_By = {
  fireboa_project_modules_aggregate?: InputMaybe<FireboaProjectsModules_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  resourceLocation?: InputMaybe<Order_By>;
  reusable?: InputMaybe<Order_By>;
};

/** primary key columns input for table: fireboa_modules */
export type FireboaModules_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "fireboa_modules" */
export enum FireboaModules_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ResourceLocation = 'resourceLocation',
  /** column name */
  Reusable = 'reusable'
}

/** input type for updating data in table "fireboa_modules" */
export type FireboaModules_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  resourceLocation?: InputMaybe<Scalars['String']>;
  reusable?: InputMaybe<Scalars['Boolean']>;
};

/** Streaming cursor of the table "FireboaModules" */
export type FireboaModules_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: FireboaModules_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type FireboaModules_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  resourceLocation?: InputMaybe<Scalars['String']>;
  reusable?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "fireboa_modules" */
export enum FireboaModules_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ResourceLocation = 'resourceLocation',
  /** column name */
  Reusable = 'reusable'
}

export type FireboaModules_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FireboaModules_Set_Input>;
  where: FireboaModules_Bool_Exp;
};

/** columns and relationships of "fireboa_projects" */
export type FireboaProjects = {
  __typename?: 'FireboaProjects';
  description: Scalars['String'];
  /** An array relationship */
  fireboaProjectsUsers: Array<FireboaProjectsUsers>;
  /** An aggregate relationship */
  fireboaProjectsUsers_aggregate: FireboaProjectsUsers_Aggregate;
  /** An array relationship */
  fireboa_project_modules: Array<FireboaProjectsModules>;
  /** An aggregate relationship */
  fireboa_project_modules_aggregate: FireboaProjectsModules_Aggregate;
  id: Scalars['uuid'];
  isActive?: Maybe<Scalars['Boolean']>;
  locked: Scalars['Boolean'];
  maximumCompletions: Scalars['Boolean'];
  name: Scalars['String'];
  serializedStateChart: Scalars['String'];
};


/** columns and relationships of "fireboa_projects" */
export type FireboaProjectsFireboaProjectsUsersArgs = {
  distinct_on?: InputMaybe<Array<FireboaProjectsUsers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaProjectsUsers_Order_By>>;
  where?: InputMaybe<FireboaProjectsUsers_Bool_Exp>;
};


/** columns and relationships of "fireboa_projects" */
export type FireboaProjectsFireboaProjectsUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<FireboaProjectsUsers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaProjectsUsers_Order_By>>;
  where?: InputMaybe<FireboaProjectsUsers_Bool_Exp>;
};


/** columns and relationships of "fireboa_projects" */
export type FireboaProjectsFireboa_Project_ModulesArgs = {
  distinct_on?: InputMaybe<Array<FireboaProjectsModules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaProjectsModules_Order_By>>;
  where?: InputMaybe<FireboaProjectsModules_Bool_Exp>;
};


/** columns and relationships of "fireboa_projects" */
export type FireboaProjectsFireboa_Project_Modules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<FireboaProjectsModules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaProjectsModules_Order_By>>;
  where?: InputMaybe<FireboaProjectsModules_Bool_Exp>;
};

/** columns and relationships of "fireboa_projects_modules" */
export type FireboaProjectsModules = {
  __typename?: 'FireboaProjectsModules';
  completionAmountInCents: Scalars['numeric'];
  completionCriteria: Scalars['String'];
  configurationSchema: Scalars['jsonb'];
  /** An object relationship */
  fireboaProject: FireboaProjects;
  fireboaProjectId: Scalars['uuid'];
  /** An array relationship */
  fireboaProjectModuleUsers: Array<FireboaProjectsModulesUsers>;
  /** An aggregate relationship */
  fireboaProjectModuleUsers_aggregate: FireboaProjectsModulesUsers_Aggregate;
  id: Scalars['uuid'];
  instructions: Scalars['String'];
  /** An object relationship */
  module: FireboaModules;
  moduleId: Scalars['uuid'];
  /** An array relationship */
  surveys: Array<Surveys>;
  /** An aggregate relationship */
  surveys_aggregate: Surveys_Aggregate;
  /** An array relationship */
  visualJudgementModules: Array<VisualJudgementModules>;
  /** An aggregate relationship */
  visualJudgementModules_aggregate: VisualJudgementModules_Aggregate;
};


/** columns and relationships of "fireboa_projects_modules" */
export type FireboaProjectsModulesConfigurationSchemaArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "fireboa_projects_modules" */
export type FireboaProjectsModulesFireboaProjectModuleUsersArgs = {
  distinct_on?: InputMaybe<Array<FireboaProjectsModulesUsers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaProjectsModulesUsers_Order_By>>;
  where?: InputMaybe<FireboaProjectsModulesUsers_Bool_Exp>;
};


/** columns and relationships of "fireboa_projects_modules" */
export type FireboaProjectsModulesFireboaProjectModuleUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<FireboaProjectsModulesUsers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaProjectsModulesUsers_Order_By>>;
  where?: InputMaybe<FireboaProjectsModulesUsers_Bool_Exp>;
};


/** columns and relationships of "fireboa_projects_modules" */
export type FireboaProjectsModulesSurveysArgs = {
  distinct_on?: InputMaybe<Array<Surveys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Surveys_Order_By>>;
  where?: InputMaybe<Surveys_Bool_Exp>;
};


/** columns and relationships of "fireboa_projects_modules" */
export type FireboaProjectsModulesSurveys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Surveys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Surveys_Order_By>>;
  where?: InputMaybe<Surveys_Bool_Exp>;
};


/** columns and relationships of "fireboa_projects_modules" */
export type FireboaProjectsModulesVisualJudgementModulesArgs = {
  distinct_on?: InputMaybe<Array<VisualJudgementModules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisualJudgementModules_Order_By>>;
  where?: InputMaybe<VisualJudgementModules_Bool_Exp>;
};


/** columns and relationships of "fireboa_projects_modules" */
export type FireboaProjectsModulesVisualJudgementModules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<VisualJudgementModules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisualJudgementModules_Order_By>>;
  where?: InputMaybe<VisualJudgementModules_Bool_Exp>;
};

/** columns and relationships of "fireboa_projects_modules_users" */
export type FireboaProjectsModulesUsers = {
  __typename?: 'FireboaProjectsModulesUsers';
  configuration?: Maybe<Scalars['jsonb']>;
  /** An object relationship */
  fireboaProjectModule: FireboaProjectsModules;
  fireboaProjectModuleId: Scalars['uuid'];
  ineligibleAfterMentalHealthScreening: Scalars['Boolean'];
  isComplete: Scalars['Boolean'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};


/** columns and relationships of "fireboa_projects_modules_users" */
export type FireboaProjectsModulesUsersConfigurationArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "fireboa_projects_modules_users" */
export type FireboaProjectsModulesUsers_Aggregate = {
  __typename?: 'FireboaProjectsModulesUsers_aggregate';
  aggregate?: Maybe<FireboaProjectsModulesUsers_Aggregate_Fields>;
  nodes: Array<FireboaProjectsModulesUsers>;
};

/** aggregate fields of "fireboa_projects_modules_users" */
export type FireboaProjectsModulesUsers_Aggregate_Fields = {
  __typename?: 'FireboaProjectsModulesUsers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<FireboaProjectsModulesUsers_Max_Fields>;
  min?: Maybe<FireboaProjectsModulesUsers_Min_Fields>;
};


/** aggregate fields of "fireboa_projects_modules_users" */
export type FireboaProjectsModulesUsers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<FireboaProjectsModulesUsers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "fireboa_projects_modules_users" */
export type FireboaProjectsModulesUsers_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<FireboaProjectsModulesUsers_Max_Order_By>;
  min?: InputMaybe<FireboaProjectsModulesUsers_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type FireboaProjectsModulesUsers_Append_Input = {
  configuration?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "fireboa_projects_modules_users" */
export type FireboaProjectsModulesUsers_Arr_Rel_Insert_Input = {
  data: Array<FireboaProjectsModulesUsers_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<FireboaProjectsModulesUsers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "fireboa_projects_modules_users". All fields are combined with a logical 'AND'. */
export type FireboaProjectsModulesUsers_Bool_Exp = {
  _and?: InputMaybe<Array<FireboaProjectsModulesUsers_Bool_Exp>>;
  _not?: InputMaybe<FireboaProjectsModulesUsers_Bool_Exp>;
  _or?: InputMaybe<Array<FireboaProjectsModulesUsers_Bool_Exp>>;
  configuration?: InputMaybe<Jsonb_Comparison_Exp>;
  fireboaProjectModule?: InputMaybe<FireboaProjectsModules_Bool_Exp>;
  fireboaProjectModuleId?: InputMaybe<Uuid_Comparison_Exp>;
  ineligibleAfterMentalHealthScreening?: InputMaybe<Boolean_Comparison_Exp>;
  isComplete?: InputMaybe<Boolean_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "fireboa_projects_modules_users" */
export enum FireboaProjectsModulesUsers_Constraint {
  /** unique or primary key constraint on columns "user_id", "fireboa_project_module_id" */
  FireboaProjectModuleUserPkey = 'fireboa_project_module_user_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type FireboaProjectsModulesUsers_Delete_At_Path_Input = {
  configuration?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type FireboaProjectsModulesUsers_Delete_Elem_Input = {
  configuration?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type FireboaProjectsModulesUsers_Delete_Key_Input = {
  configuration?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "fireboa_projects_modules_users" */
export type FireboaProjectsModulesUsers_Insert_Input = {
  configuration?: InputMaybe<Scalars['jsonb']>;
  fireboaProjectModule?: InputMaybe<FireboaProjectsModules_Obj_Rel_Insert_Input>;
  fireboaProjectModuleId?: InputMaybe<Scalars['uuid']>;
  ineligibleAfterMentalHealthScreening?: InputMaybe<Scalars['Boolean']>;
  isComplete?: InputMaybe<Scalars['Boolean']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type FireboaProjectsModulesUsers_Max_Fields = {
  __typename?: 'FireboaProjectsModulesUsers_max_fields';
  fireboaProjectModuleId?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "fireboa_projects_modules_users" */
export type FireboaProjectsModulesUsers_Max_Order_By = {
  fireboaProjectModuleId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type FireboaProjectsModulesUsers_Min_Fields = {
  __typename?: 'FireboaProjectsModulesUsers_min_fields';
  fireboaProjectModuleId?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "fireboa_projects_modules_users" */
export type FireboaProjectsModulesUsers_Min_Order_By = {
  fireboaProjectModuleId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "fireboa_projects_modules_users" */
export type FireboaProjectsModulesUsers_Mutation_Response = {
  __typename?: 'FireboaProjectsModulesUsers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<FireboaProjectsModulesUsers>;
};

/** on_conflict condition type for table "fireboa_projects_modules_users" */
export type FireboaProjectsModulesUsers_On_Conflict = {
  constraint: FireboaProjectsModulesUsers_Constraint;
  update_columns?: Array<FireboaProjectsModulesUsers_Update_Column>;
  where?: InputMaybe<FireboaProjectsModulesUsers_Bool_Exp>;
};

/** Ordering options when selecting data from "fireboa_projects_modules_users". */
export type FireboaProjectsModulesUsers_Order_By = {
  configuration?: InputMaybe<Order_By>;
  fireboaProjectModule?: InputMaybe<FireboaProjectsModules_Order_By>;
  fireboaProjectModuleId?: InputMaybe<Order_By>;
  ineligibleAfterMentalHealthScreening?: InputMaybe<Order_By>;
  isComplete?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: fireboa_projects_modules_users */
export type FireboaProjectsModulesUsers_Pk_Columns_Input = {
  fireboaProjectModuleId: Scalars['uuid'];
  userId: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type FireboaProjectsModulesUsers_Prepend_Input = {
  configuration?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "fireboa_projects_modules_users" */
export enum FireboaProjectsModulesUsers_Select_Column {
  /** column name */
  Configuration = 'configuration',
  /** column name */
  FireboaProjectModuleId = 'fireboaProjectModuleId',
  /** column name */
  IneligibleAfterMentalHealthScreening = 'ineligibleAfterMentalHealthScreening',
  /** column name */
  IsComplete = 'isComplete',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "fireboa_projects_modules_users" */
export type FireboaProjectsModulesUsers_Set_Input = {
  configuration?: InputMaybe<Scalars['jsonb']>;
  fireboaProjectModuleId?: InputMaybe<Scalars['uuid']>;
  ineligibleAfterMentalHealthScreening?: InputMaybe<Scalars['Boolean']>;
  isComplete?: InputMaybe<Scalars['Boolean']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "FireboaProjectsModulesUsers" */
export type FireboaProjectsModulesUsers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: FireboaProjectsModulesUsers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type FireboaProjectsModulesUsers_Stream_Cursor_Value_Input = {
  configuration?: InputMaybe<Scalars['jsonb']>;
  fireboaProjectModuleId?: InputMaybe<Scalars['uuid']>;
  ineligibleAfterMentalHealthScreening?: InputMaybe<Scalars['Boolean']>;
  isComplete?: InputMaybe<Scalars['Boolean']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "fireboa_projects_modules_users" */
export enum FireboaProjectsModulesUsers_Update_Column {
  /** column name */
  Configuration = 'configuration',
  /** column name */
  FireboaProjectModuleId = 'fireboaProjectModuleId',
  /** column name */
  IneligibleAfterMentalHealthScreening = 'ineligibleAfterMentalHealthScreening',
  /** column name */
  IsComplete = 'isComplete',
  /** column name */
  UserId = 'userId'
}

export type FireboaProjectsModulesUsers_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<FireboaProjectsModulesUsers_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<FireboaProjectsModulesUsers_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<FireboaProjectsModulesUsers_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<FireboaProjectsModulesUsers_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<FireboaProjectsModulesUsers_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FireboaProjectsModulesUsers_Set_Input>;
  where: FireboaProjectsModulesUsers_Bool_Exp;
};

/** aggregated selection of "fireboa_projects_modules" */
export type FireboaProjectsModules_Aggregate = {
  __typename?: 'FireboaProjectsModules_aggregate';
  aggregate?: Maybe<FireboaProjectsModules_Aggregate_Fields>;
  nodes: Array<FireboaProjectsModules>;
};

/** aggregate fields of "fireboa_projects_modules" */
export type FireboaProjectsModules_Aggregate_Fields = {
  __typename?: 'FireboaProjectsModules_aggregate_fields';
  avg?: Maybe<FireboaProjectsModules_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<FireboaProjectsModules_Max_Fields>;
  min?: Maybe<FireboaProjectsModules_Min_Fields>;
  stddev?: Maybe<FireboaProjectsModules_Stddev_Fields>;
  stddev_pop?: Maybe<FireboaProjectsModules_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<FireboaProjectsModules_Stddev_Samp_Fields>;
  sum?: Maybe<FireboaProjectsModules_Sum_Fields>;
  var_pop?: Maybe<FireboaProjectsModules_Var_Pop_Fields>;
  var_samp?: Maybe<FireboaProjectsModules_Var_Samp_Fields>;
  variance?: Maybe<FireboaProjectsModules_Variance_Fields>;
};


/** aggregate fields of "fireboa_projects_modules" */
export type FireboaProjectsModules_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<FireboaProjectsModules_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "fireboa_projects_modules" */
export type FireboaProjectsModules_Aggregate_Order_By = {
  avg?: InputMaybe<FireboaProjectsModules_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<FireboaProjectsModules_Max_Order_By>;
  min?: InputMaybe<FireboaProjectsModules_Min_Order_By>;
  stddev?: InputMaybe<FireboaProjectsModules_Stddev_Order_By>;
  stddev_pop?: InputMaybe<FireboaProjectsModules_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<FireboaProjectsModules_Stddev_Samp_Order_By>;
  sum?: InputMaybe<FireboaProjectsModules_Sum_Order_By>;
  var_pop?: InputMaybe<FireboaProjectsModules_Var_Pop_Order_By>;
  var_samp?: InputMaybe<FireboaProjectsModules_Var_Samp_Order_By>;
  variance?: InputMaybe<FireboaProjectsModules_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type FireboaProjectsModules_Append_Input = {
  configurationSchema?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "fireboa_projects_modules" */
export type FireboaProjectsModules_Arr_Rel_Insert_Input = {
  data: Array<FireboaProjectsModules_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<FireboaProjectsModules_On_Conflict>;
};

/** aggregate avg on columns */
export type FireboaProjectsModules_Avg_Fields = {
  __typename?: 'FireboaProjectsModules_avg_fields';
  completionAmountInCents?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "fireboa_projects_modules" */
export type FireboaProjectsModules_Avg_Order_By = {
  completionAmountInCents?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "fireboa_projects_modules". All fields are combined with a logical 'AND'. */
export type FireboaProjectsModules_Bool_Exp = {
  _and?: InputMaybe<Array<FireboaProjectsModules_Bool_Exp>>;
  _not?: InputMaybe<FireboaProjectsModules_Bool_Exp>;
  _or?: InputMaybe<Array<FireboaProjectsModules_Bool_Exp>>;
  completionAmountInCents?: InputMaybe<Numeric_Comparison_Exp>;
  completionCriteria?: InputMaybe<String_Comparison_Exp>;
  configurationSchema?: InputMaybe<Jsonb_Comparison_Exp>;
  fireboaProject?: InputMaybe<FireboaProjects_Bool_Exp>;
  fireboaProjectId?: InputMaybe<Uuid_Comparison_Exp>;
  fireboaProjectModuleUsers?: InputMaybe<FireboaProjectsModulesUsers_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  instructions?: InputMaybe<String_Comparison_Exp>;
  module?: InputMaybe<FireboaModules_Bool_Exp>;
  moduleId?: InputMaybe<Uuid_Comparison_Exp>;
  surveys?: InputMaybe<Surveys_Bool_Exp>;
  visualJudgementModules?: InputMaybe<VisualJudgementModules_Bool_Exp>;
};

/** unique or primary key constraints on table "fireboa_projects_modules" */
export enum FireboaProjectsModules_Constraint {
  /** unique or primary key constraint on columns "id" */
  FireboaProjectModulePkey = 'fireboa_project_module_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type FireboaProjectsModules_Delete_At_Path_Input = {
  configurationSchema?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type FireboaProjectsModules_Delete_Elem_Input = {
  configurationSchema?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type FireboaProjectsModules_Delete_Key_Input = {
  configurationSchema?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "fireboa_projects_modules" */
export type FireboaProjectsModules_Inc_Input = {
  completionAmountInCents?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "fireboa_projects_modules" */
export type FireboaProjectsModules_Insert_Input = {
  completionAmountInCents?: InputMaybe<Scalars['numeric']>;
  completionCriteria?: InputMaybe<Scalars['String']>;
  configurationSchema?: InputMaybe<Scalars['jsonb']>;
  fireboaProject?: InputMaybe<FireboaProjects_Obj_Rel_Insert_Input>;
  fireboaProjectId?: InputMaybe<Scalars['uuid']>;
  fireboaProjectModuleUsers?: InputMaybe<FireboaProjectsModulesUsers_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  instructions?: InputMaybe<Scalars['String']>;
  module?: InputMaybe<FireboaModules_Obj_Rel_Insert_Input>;
  moduleId?: InputMaybe<Scalars['uuid']>;
  surveys?: InputMaybe<Surveys_Arr_Rel_Insert_Input>;
  visualJudgementModules?: InputMaybe<VisualJudgementModules_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type FireboaProjectsModules_Max_Fields = {
  __typename?: 'FireboaProjectsModules_max_fields';
  completionAmountInCents?: Maybe<Scalars['numeric']>;
  completionCriteria?: Maybe<Scalars['String']>;
  fireboaProjectId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  instructions?: Maybe<Scalars['String']>;
  moduleId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "fireboa_projects_modules" */
export type FireboaProjectsModules_Max_Order_By = {
  completionAmountInCents?: InputMaybe<Order_By>;
  completionCriteria?: InputMaybe<Order_By>;
  fireboaProjectId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  instructions?: InputMaybe<Order_By>;
  moduleId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type FireboaProjectsModules_Min_Fields = {
  __typename?: 'FireboaProjectsModules_min_fields';
  completionAmountInCents?: Maybe<Scalars['numeric']>;
  completionCriteria?: Maybe<Scalars['String']>;
  fireboaProjectId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  instructions?: Maybe<Scalars['String']>;
  moduleId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "fireboa_projects_modules" */
export type FireboaProjectsModules_Min_Order_By = {
  completionAmountInCents?: InputMaybe<Order_By>;
  completionCriteria?: InputMaybe<Order_By>;
  fireboaProjectId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  instructions?: InputMaybe<Order_By>;
  moduleId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "fireboa_projects_modules" */
export type FireboaProjectsModules_Mutation_Response = {
  __typename?: 'FireboaProjectsModules_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<FireboaProjectsModules>;
};

/** input type for inserting object relation for remote table "fireboa_projects_modules" */
export type FireboaProjectsModules_Obj_Rel_Insert_Input = {
  data: FireboaProjectsModules_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<FireboaProjectsModules_On_Conflict>;
};

/** on_conflict condition type for table "fireboa_projects_modules" */
export type FireboaProjectsModules_On_Conflict = {
  constraint: FireboaProjectsModules_Constraint;
  update_columns?: Array<FireboaProjectsModules_Update_Column>;
  where?: InputMaybe<FireboaProjectsModules_Bool_Exp>;
};

/** Ordering options when selecting data from "fireboa_projects_modules". */
export type FireboaProjectsModules_Order_By = {
  completionAmountInCents?: InputMaybe<Order_By>;
  completionCriteria?: InputMaybe<Order_By>;
  configurationSchema?: InputMaybe<Order_By>;
  fireboaProject?: InputMaybe<FireboaProjects_Order_By>;
  fireboaProjectId?: InputMaybe<Order_By>;
  fireboaProjectModuleUsers_aggregate?: InputMaybe<FireboaProjectsModulesUsers_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  instructions?: InputMaybe<Order_By>;
  module?: InputMaybe<FireboaModules_Order_By>;
  moduleId?: InputMaybe<Order_By>;
  surveys_aggregate?: InputMaybe<Surveys_Aggregate_Order_By>;
  visualJudgementModules_aggregate?: InputMaybe<VisualJudgementModules_Aggregate_Order_By>;
};

/** primary key columns input for table: fireboa_projects_modules */
export type FireboaProjectsModules_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type FireboaProjectsModules_Prepend_Input = {
  configurationSchema?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "fireboa_projects_modules" */
export enum FireboaProjectsModules_Select_Column {
  /** column name */
  CompletionAmountInCents = 'completionAmountInCents',
  /** column name */
  CompletionCriteria = 'completionCriteria',
  /** column name */
  ConfigurationSchema = 'configurationSchema',
  /** column name */
  FireboaProjectId = 'fireboaProjectId',
  /** column name */
  Id = 'id',
  /** column name */
  Instructions = 'instructions',
  /** column name */
  ModuleId = 'moduleId'
}

/** input type for updating data in table "fireboa_projects_modules" */
export type FireboaProjectsModules_Set_Input = {
  completionAmountInCents?: InputMaybe<Scalars['numeric']>;
  completionCriteria?: InputMaybe<Scalars['String']>;
  configurationSchema?: InputMaybe<Scalars['jsonb']>;
  fireboaProjectId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  instructions?: InputMaybe<Scalars['String']>;
  moduleId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type FireboaProjectsModules_Stddev_Fields = {
  __typename?: 'FireboaProjectsModules_stddev_fields';
  completionAmountInCents?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "fireboa_projects_modules" */
export type FireboaProjectsModules_Stddev_Order_By = {
  completionAmountInCents?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type FireboaProjectsModules_Stddev_Pop_Fields = {
  __typename?: 'FireboaProjectsModules_stddev_pop_fields';
  completionAmountInCents?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "fireboa_projects_modules" */
export type FireboaProjectsModules_Stddev_Pop_Order_By = {
  completionAmountInCents?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type FireboaProjectsModules_Stddev_Samp_Fields = {
  __typename?: 'FireboaProjectsModules_stddev_samp_fields';
  completionAmountInCents?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "fireboa_projects_modules" */
export type FireboaProjectsModules_Stddev_Samp_Order_By = {
  completionAmountInCents?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "FireboaProjectsModules" */
export type FireboaProjectsModules_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: FireboaProjectsModules_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type FireboaProjectsModules_Stream_Cursor_Value_Input = {
  completionAmountInCents?: InputMaybe<Scalars['numeric']>;
  completionCriteria?: InputMaybe<Scalars['String']>;
  configurationSchema?: InputMaybe<Scalars['jsonb']>;
  fireboaProjectId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  instructions?: InputMaybe<Scalars['String']>;
  moduleId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type FireboaProjectsModules_Sum_Fields = {
  __typename?: 'FireboaProjectsModules_sum_fields';
  completionAmountInCents?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "fireboa_projects_modules" */
export type FireboaProjectsModules_Sum_Order_By = {
  completionAmountInCents?: InputMaybe<Order_By>;
};

/** update columns of table "fireboa_projects_modules" */
export enum FireboaProjectsModules_Update_Column {
  /** column name */
  CompletionAmountInCents = 'completionAmountInCents',
  /** column name */
  CompletionCriteria = 'completionCriteria',
  /** column name */
  ConfigurationSchema = 'configurationSchema',
  /** column name */
  FireboaProjectId = 'fireboaProjectId',
  /** column name */
  Id = 'id',
  /** column name */
  Instructions = 'instructions',
  /** column name */
  ModuleId = 'moduleId'
}

export type FireboaProjectsModules_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<FireboaProjectsModules_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<FireboaProjectsModules_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<FireboaProjectsModules_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<FireboaProjectsModules_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<FireboaProjectsModules_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<FireboaProjectsModules_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FireboaProjectsModules_Set_Input>;
  where: FireboaProjectsModules_Bool_Exp;
};

/** aggregate var_pop on columns */
export type FireboaProjectsModules_Var_Pop_Fields = {
  __typename?: 'FireboaProjectsModules_var_pop_fields';
  completionAmountInCents?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "fireboa_projects_modules" */
export type FireboaProjectsModules_Var_Pop_Order_By = {
  completionAmountInCents?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type FireboaProjectsModules_Var_Samp_Fields = {
  __typename?: 'FireboaProjectsModules_var_samp_fields';
  completionAmountInCents?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "fireboa_projects_modules" */
export type FireboaProjectsModules_Var_Samp_Order_By = {
  completionAmountInCents?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type FireboaProjectsModules_Variance_Fields = {
  __typename?: 'FireboaProjectsModules_variance_fields';
  completionAmountInCents?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "fireboa_projects_modules" */
export type FireboaProjectsModules_Variance_Order_By = {
  completionAmountInCents?: InputMaybe<Order_By>;
};

/** columns and relationships of "fireboa_projects_users" */
export type FireboaProjectsUsers = {
  __typename?: 'FireboaProjectsUsers';
  currentState: ProjectStatuses_Enum;
  /** An object relationship */
  fireboaProject: FireboaProjects;
  fireboaProjectId: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "fireboa_projects_users" */
export type FireboaProjectsUsers_Aggregate = {
  __typename?: 'FireboaProjectsUsers_aggregate';
  aggregate?: Maybe<FireboaProjectsUsers_Aggregate_Fields>;
  nodes: Array<FireboaProjectsUsers>;
};

/** aggregate fields of "fireboa_projects_users" */
export type FireboaProjectsUsers_Aggregate_Fields = {
  __typename?: 'FireboaProjectsUsers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<FireboaProjectsUsers_Max_Fields>;
  min?: Maybe<FireboaProjectsUsers_Min_Fields>;
};


/** aggregate fields of "fireboa_projects_users" */
export type FireboaProjectsUsers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<FireboaProjectsUsers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "fireboa_projects_users" */
export type FireboaProjectsUsers_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<FireboaProjectsUsers_Max_Order_By>;
  min?: InputMaybe<FireboaProjectsUsers_Min_Order_By>;
};

/** input type for inserting array relation for remote table "fireboa_projects_users" */
export type FireboaProjectsUsers_Arr_Rel_Insert_Input = {
  data: Array<FireboaProjectsUsers_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<FireboaProjectsUsers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "fireboa_projects_users". All fields are combined with a logical 'AND'. */
export type FireboaProjectsUsers_Bool_Exp = {
  _and?: InputMaybe<Array<FireboaProjectsUsers_Bool_Exp>>;
  _not?: InputMaybe<FireboaProjectsUsers_Bool_Exp>;
  _or?: InputMaybe<Array<FireboaProjectsUsers_Bool_Exp>>;
  currentState?: InputMaybe<ProjectStatuses_Enum_Comparison_Exp>;
  fireboaProject?: InputMaybe<FireboaProjects_Bool_Exp>;
  fireboaProjectId?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "fireboa_projects_users" */
export enum FireboaProjectsUsers_Constraint {
  /** unique or primary key constraint on columns "user_id", "fireboa_project_id" */
  FireboaProjectUserPkey = 'fireboa_project_user_pkey'
}

/** input type for inserting data into table "fireboa_projects_users" */
export type FireboaProjectsUsers_Insert_Input = {
  currentState?: InputMaybe<ProjectStatuses_Enum>;
  fireboaProject?: InputMaybe<FireboaProjects_Obj_Rel_Insert_Input>;
  fireboaProjectId?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type FireboaProjectsUsers_Max_Fields = {
  __typename?: 'FireboaProjectsUsers_max_fields';
  fireboaProjectId?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "fireboa_projects_users" */
export type FireboaProjectsUsers_Max_Order_By = {
  fireboaProjectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type FireboaProjectsUsers_Min_Fields = {
  __typename?: 'FireboaProjectsUsers_min_fields';
  fireboaProjectId?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "fireboa_projects_users" */
export type FireboaProjectsUsers_Min_Order_By = {
  fireboaProjectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "fireboa_projects_users" */
export type FireboaProjectsUsers_Mutation_Response = {
  __typename?: 'FireboaProjectsUsers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<FireboaProjectsUsers>;
};

/** on_conflict condition type for table "fireboa_projects_users" */
export type FireboaProjectsUsers_On_Conflict = {
  constraint: FireboaProjectsUsers_Constraint;
  update_columns?: Array<FireboaProjectsUsers_Update_Column>;
  where?: InputMaybe<FireboaProjectsUsers_Bool_Exp>;
};

/** Ordering options when selecting data from "fireboa_projects_users". */
export type FireboaProjectsUsers_Order_By = {
  currentState?: InputMaybe<Order_By>;
  fireboaProject?: InputMaybe<FireboaProjects_Order_By>;
  fireboaProjectId?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: fireboa_projects_users */
export type FireboaProjectsUsers_Pk_Columns_Input = {
  fireboaProjectId: Scalars['uuid'];
  userId: Scalars['uuid'];
};

/** select columns of table "fireboa_projects_users" */
export enum FireboaProjectsUsers_Select_Column {
  /** column name */
  CurrentState = 'currentState',
  /** column name */
  FireboaProjectId = 'fireboaProjectId',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "fireboa_projects_users" */
export type FireboaProjectsUsers_Set_Input = {
  currentState?: InputMaybe<ProjectStatuses_Enum>;
  fireboaProjectId?: InputMaybe<Scalars['uuid']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "FireboaProjectsUsers" */
export type FireboaProjectsUsers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: FireboaProjectsUsers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type FireboaProjectsUsers_Stream_Cursor_Value_Input = {
  currentState?: InputMaybe<ProjectStatuses_Enum>;
  fireboaProjectId?: InputMaybe<Scalars['uuid']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "fireboa_projects_users" */
export enum FireboaProjectsUsers_Update_Column {
  /** column name */
  CurrentState = 'currentState',
  /** column name */
  FireboaProjectId = 'fireboaProjectId',
  /** column name */
  UserId = 'userId'
}

export type FireboaProjectsUsers_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FireboaProjectsUsers_Set_Input>;
  where: FireboaProjectsUsers_Bool_Exp;
};

/** aggregated selection of "fireboa_projects" */
export type FireboaProjects_Aggregate = {
  __typename?: 'FireboaProjects_aggregate';
  aggregate?: Maybe<FireboaProjects_Aggregate_Fields>;
  nodes: Array<FireboaProjects>;
};

/** aggregate fields of "fireboa_projects" */
export type FireboaProjects_Aggregate_Fields = {
  __typename?: 'FireboaProjects_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<FireboaProjects_Max_Fields>;
  min?: Maybe<FireboaProjects_Min_Fields>;
};


/** aggregate fields of "fireboa_projects" */
export type FireboaProjects_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<FireboaProjects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "fireboa_projects". All fields are combined with a logical 'AND'. */
export type FireboaProjects_Bool_Exp = {
  _and?: InputMaybe<Array<FireboaProjects_Bool_Exp>>;
  _not?: InputMaybe<FireboaProjects_Bool_Exp>;
  _or?: InputMaybe<Array<FireboaProjects_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  fireboaProjectsUsers?: InputMaybe<FireboaProjectsUsers_Bool_Exp>;
  fireboa_project_modules?: InputMaybe<FireboaProjectsModules_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isActive?: InputMaybe<Boolean_Comparison_Exp>;
  locked?: InputMaybe<Boolean_Comparison_Exp>;
  maximumCompletions?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  serializedStateChart?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "fireboa_projects" */
export enum FireboaProjects_Constraint {
  /** unique or primary key constraint on columns "id" */
  FireboaProjectsPkey = 'fireboa_projects_pkey'
}

/** input type for inserting data into table "fireboa_projects" */
export type FireboaProjects_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  fireboaProjectsUsers?: InputMaybe<FireboaProjectsUsers_Arr_Rel_Insert_Input>;
  fireboa_project_modules?: InputMaybe<FireboaProjectsModules_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  locked?: InputMaybe<Scalars['Boolean']>;
  maximumCompletions?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  serializedStateChart?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type FireboaProjects_Max_Fields = {
  __typename?: 'FireboaProjects_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  serializedStateChart?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type FireboaProjects_Min_Fields = {
  __typename?: 'FireboaProjects_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  serializedStateChart?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "fireboa_projects" */
export type FireboaProjects_Mutation_Response = {
  __typename?: 'FireboaProjects_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<FireboaProjects>;
};

/** input type for inserting object relation for remote table "fireboa_projects" */
export type FireboaProjects_Obj_Rel_Insert_Input = {
  data: FireboaProjects_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<FireboaProjects_On_Conflict>;
};

/** on_conflict condition type for table "fireboa_projects" */
export type FireboaProjects_On_Conflict = {
  constraint: FireboaProjects_Constraint;
  update_columns?: Array<FireboaProjects_Update_Column>;
  where?: InputMaybe<FireboaProjects_Bool_Exp>;
};

/** Ordering options when selecting data from "fireboa_projects". */
export type FireboaProjects_Order_By = {
  description?: InputMaybe<Order_By>;
  fireboaProjectsUsers_aggregate?: InputMaybe<FireboaProjectsUsers_Aggregate_Order_By>;
  fireboa_project_modules_aggregate?: InputMaybe<FireboaProjectsModules_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  isActive?: InputMaybe<Order_By>;
  locked?: InputMaybe<Order_By>;
  maximumCompletions?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  serializedStateChart?: InputMaybe<Order_By>;
};

/** primary key columns input for table: fireboa_projects */
export type FireboaProjects_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "fireboa_projects" */
export enum FireboaProjects_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'isActive',
  /** column name */
  Locked = 'locked',
  /** column name */
  MaximumCompletions = 'maximumCompletions',
  /** column name */
  Name = 'name',
  /** column name */
  SerializedStateChart = 'serializedStateChart'
}

/** input type for updating data in table "fireboa_projects" */
export type FireboaProjects_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  locked?: InputMaybe<Scalars['Boolean']>;
  maximumCompletions?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  serializedStateChart?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "FireboaProjects" */
export type FireboaProjects_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: FireboaProjects_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type FireboaProjects_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  locked?: InputMaybe<Scalars['Boolean']>;
  maximumCompletions?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  serializedStateChart?: InputMaybe<Scalars['String']>;
};

/** update columns of table "fireboa_projects" */
export enum FireboaProjects_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'isActive',
  /** column name */
  Locked = 'locked',
  /** column name */
  MaximumCompletions = 'maximumCompletions',
  /** column name */
  Name = 'name',
  /** column name */
  SerializedStateChart = 'serializedStateChart'
}

export type FireboaProjects_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FireboaProjects_Set_Input>;
  where: FireboaProjects_Bool_Exp;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

/** columns and relationships of "fraud_status_enum" */
export type FraudStatusEnum = {
  __typename?: 'FraudStatusEnum';
  description: Scalars['String'];
  fraudStatus: Scalars['String'];
};

/** aggregated selection of "fraud_status_enum" */
export type FraudStatusEnum_Aggregate = {
  __typename?: 'FraudStatusEnum_aggregate';
  aggregate?: Maybe<FraudStatusEnum_Aggregate_Fields>;
  nodes: Array<FraudStatusEnum>;
};

/** aggregate fields of "fraud_status_enum" */
export type FraudStatusEnum_Aggregate_Fields = {
  __typename?: 'FraudStatusEnum_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<FraudStatusEnum_Max_Fields>;
  min?: Maybe<FraudStatusEnum_Min_Fields>;
};


/** aggregate fields of "fraud_status_enum" */
export type FraudStatusEnum_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<FraudStatusEnum_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "fraud_status_enum". All fields are combined with a logical 'AND'. */
export type FraudStatusEnum_Bool_Exp = {
  _and?: InputMaybe<Array<FraudStatusEnum_Bool_Exp>>;
  _not?: InputMaybe<FraudStatusEnum_Bool_Exp>;
  _or?: InputMaybe<Array<FraudStatusEnum_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  fraudStatus?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "fraud_status_enum" */
export enum FraudStatusEnum_Constraint {
  /** unique or primary key constraint on columns "fraud_status" */
  FraudStatusEnumPkey = 'fraud_status_enum_pkey'
}

/** input type for inserting data into table "fraud_status_enum" */
export type FraudStatusEnum_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  fraudStatus?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type FraudStatusEnum_Max_Fields = {
  __typename?: 'FraudStatusEnum_max_fields';
  description?: Maybe<Scalars['String']>;
  fraudStatus?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type FraudStatusEnum_Min_Fields = {
  __typename?: 'FraudStatusEnum_min_fields';
  description?: Maybe<Scalars['String']>;
  fraudStatus?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "fraud_status_enum" */
export type FraudStatusEnum_Mutation_Response = {
  __typename?: 'FraudStatusEnum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<FraudStatusEnum>;
};

/** on_conflict condition type for table "fraud_status_enum" */
export type FraudStatusEnum_On_Conflict = {
  constraint: FraudStatusEnum_Constraint;
  update_columns?: Array<FraudStatusEnum_Update_Column>;
  where?: InputMaybe<FraudStatusEnum_Bool_Exp>;
};

/** Ordering options when selecting data from "fraud_status_enum". */
export type FraudStatusEnum_Order_By = {
  description?: InputMaybe<Order_By>;
  fraudStatus?: InputMaybe<Order_By>;
};

/** primary key columns input for table: fraud_status_enum */
export type FraudStatusEnum_Pk_Columns_Input = {
  fraudStatus: Scalars['String'];
};

/** select columns of table "fraud_status_enum" */
export enum FraudStatusEnum_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  FraudStatus = 'fraudStatus'
}

/** input type for updating data in table "fraud_status_enum" */
export type FraudStatusEnum_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  fraudStatus?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "FraudStatusEnum" */
export type FraudStatusEnum_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: FraudStatusEnum_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type FraudStatusEnum_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  fraudStatus?: InputMaybe<Scalars['String']>;
};

/** update columns of table "fraud_status_enum" */
export enum FraudStatusEnum_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  FraudStatus = 'fraudStatus'
}

export type FraudStatusEnum_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FraudStatusEnum_Set_Input>;
  where: FraudStatusEnum_Bool_Exp;
};

export type GenericMorph = I18NLocale | StrapiModule | StrapiProject | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | VanaConnectFaq;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

/** the document type that the user supplied, verified by 3rd party */
export type IdentitiesLegalIdTypeEnums = {
  __typename?: 'IdentitiesLegalIdTypeEnums';
  description: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "identities_legal_id_type_enum" */
export type IdentitiesLegalIdTypeEnums_Aggregate = {
  __typename?: 'IdentitiesLegalIdTypeEnums_aggregate';
  aggregate?: Maybe<IdentitiesLegalIdTypeEnums_Aggregate_Fields>;
  nodes: Array<IdentitiesLegalIdTypeEnums>;
};

/** aggregate fields of "identities_legal_id_type_enum" */
export type IdentitiesLegalIdTypeEnums_Aggregate_Fields = {
  __typename?: 'IdentitiesLegalIdTypeEnums_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<IdentitiesLegalIdTypeEnums_Max_Fields>;
  min?: Maybe<IdentitiesLegalIdTypeEnums_Min_Fields>;
};


/** aggregate fields of "identities_legal_id_type_enum" */
export type IdentitiesLegalIdTypeEnums_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<IdentitiesLegalIdTypeEnums_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "identities_legal_id_type_enum". All fields are combined with a logical 'AND'. */
export type IdentitiesLegalIdTypeEnums_Bool_Exp = {
  _and?: InputMaybe<Array<IdentitiesLegalIdTypeEnums_Bool_Exp>>;
  _not?: InputMaybe<IdentitiesLegalIdTypeEnums_Bool_Exp>;
  _or?: InputMaybe<Array<IdentitiesLegalIdTypeEnums_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "identities_legal_id_type_enum" */
export enum IdentitiesLegalIdTypeEnums_Constraint {
  /** unique or primary key constraint on columns "value" */
  IdentitiesLegalIdTypeEnumPkey = 'identities_legal_id_type_enum_pkey'
}

export enum IdentitiesLegalIdTypeEnums_Enum {
  /** Drivers license document type. */
  DrivingLicense = 'driving_license',
  /** ID card document type. */
  IdCard = 'id_card',
  /** Passport document type. */
  Passport = 'passport'
}

/** Boolean expression to compare columns of type "IdentitiesLegalIdTypeEnums_enum". All fields are combined with logical 'AND'. */
export type IdentitiesLegalIdTypeEnums_Enum_Comparison_Exp = {
  _eq?: InputMaybe<IdentitiesLegalIdTypeEnums_Enum>;
  _in?: InputMaybe<Array<IdentitiesLegalIdTypeEnums_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<IdentitiesLegalIdTypeEnums_Enum>;
  _nin?: InputMaybe<Array<IdentitiesLegalIdTypeEnums_Enum>>;
};

/** input type for inserting data into table "identities_legal_id_type_enum" */
export type IdentitiesLegalIdTypeEnums_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type IdentitiesLegalIdTypeEnums_Max_Fields = {
  __typename?: 'IdentitiesLegalIdTypeEnums_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type IdentitiesLegalIdTypeEnums_Min_Fields = {
  __typename?: 'IdentitiesLegalIdTypeEnums_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "identities_legal_id_type_enum" */
export type IdentitiesLegalIdTypeEnums_Mutation_Response = {
  __typename?: 'IdentitiesLegalIdTypeEnums_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<IdentitiesLegalIdTypeEnums>;
};

/** input type for inserting object relation for remote table "identities_legal_id_type_enum" */
export type IdentitiesLegalIdTypeEnums_Obj_Rel_Insert_Input = {
  data: IdentitiesLegalIdTypeEnums_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<IdentitiesLegalIdTypeEnums_On_Conflict>;
};

/** on_conflict condition type for table "identities_legal_id_type_enum" */
export type IdentitiesLegalIdTypeEnums_On_Conflict = {
  constraint: IdentitiesLegalIdTypeEnums_Constraint;
  update_columns?: Array<IdentitiesLegalIdTypeEnums_Update_Column>;
  where?: InputMaybe<IdentitiesLegalIdTypeEnums_Bool_Exp>;
};

/** Ordering options when selecting data from "identities_legal_id_type_enum". */
export type IdentitiesLegalIdTypeEnums_Order_By = {
  description?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: identities_legal_id_type_enum */
export type IdentitiesLegalIdTypeEnums_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "identities_legal_id_type_enum" */
export enum IdentitiesLegalIdTypeEnums_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "identities_legal_id_type_enum" */
export type IdentitiesLegalIdTypeEnums_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "IdentitiesLegalIdTypeEnums" */
export type IdentitiesLegalIdTypeEnums_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: IdentitiesLegalIdTypeEnums_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type IdentitiesLegalIdTypeEnums_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "identities_legal_id_type_enum" */
export enum IdentitiesLegalIdTypeEnums_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type IdentitiesLegalIdTypeEnums_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<IdentitiesLegalIdTypeEnums_Set_Input>;
  where: IdentitiesLegalIdTypeEnums_Bool_Exp;
};

/** columns and relationships of "images" */
export type Images = {
  __typename?: 'Images';
  active: Scalars['Boolean'];
  id: Scalars['uuid'];
  /** This is a unique identifier, usually provided externally, which is common across all versions of a particular image. For example, this could be the S3 bucket name and key, without version; or this could be the bucket name and object name in GCS without the generation number. */
  resourceName: Scalars['String'];
  url: Scalars['String'];
  /** An array relationship */
  visualJudgementModuleImages: Array<VisualJudgementModuleImages>;
  /** An aggregate relationship */
  visualJudgementModuleImages_aggregate: VisualJudgementModuleImages_Aggregate;
};


/** columns and relationships of "images" */
export type ImagesVisualJudgementModuleImagesArgs = {
  distinct_on?: InputMaybe<Array<VisualJudgementModuleImages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisualJudgementModuleImages_Order_By>>;
  where?: InputMaybe<VisualJudgementModuleImages_Bool_Exp>;
};


/** columns and relationships of "images" */
export type ImagesVisualJudgementModuleImages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<VisualJudgementModuleImages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisualJudgementModuleImages_Order_By>>;
  where?: InputMaybe<VisualJudgementModuleImages_Bool_Exp>;
};

/** aggregated selection of "images" */
export type Images_Aggregate = {
  __typename?: 'Images_aggregate';
  aggregate?: Maybe<Images_Aggregate_Fields>;
  nodes: Array<Images>;
};

/** aggregate fields of "images" */
export type Images_Aggregate_Fields = {
  __typename?: 'Images_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Images_Max_Fields>;
  min?: Maybe<Images_Min_Fields>;
};


/** aggregate fields of "images" */
export type Images_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Images_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "images". All fields are combined with a logical 'AND'. */
export type Images_Bool_Exp = {
  _and?: InputMaybe<Array<Images_Bool_Exp>>;
  _not?: InputMaybe<Images_Bool_Exp>;
  _or?: InputMaybe<Array<Images_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  resourceName?: InputMaybe<String_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
  visualJudgementModuleImages?: InputMaybe<VisualJudgementModuleImages_Bool_Exp>;
};

/** unique or primary key constraints on table "images" */
export enum Images_Constraint {
  /** unique or primary key constraint on columns "resource_name" */
  ImagesResourceNameKey = 'images_resource_name_key',
  /** unique or primary key constraint on columns "id" */
  VisualJudgementModulesImagesPkey = 'visualJudgementModulesImages_pkey'
}

/** input type for inserting data into table "images" */
export type Images_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  /** This is a unique identifier, usually provided externally, which is common across all versions of a particular image. For example, this could be the S3 bucket name and key, without version; or this could be the bucket name and object name in GCS without the generation number. */
  resourceName?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  visualJudgementModuleImages?: InputMaybe<VisualJudgementModuleImages_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Images_Max_Fields = {
  __typename?: 'Images_max_fields';
  id?: Maybe<Scalars['uuid']>;
  /** This is a unique identifier, usually provided externally, which is common across all versions of a particular image. For example, this could be the S3 bucket name and key, without version; or this could be the bucket name and object name in GCS without the generation number. */
  resourceName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Images_Min_Fields = {
  __typename?: 'Images_min_fields';
  id?: Maybe<Scalars['uuid']>;
  /** This is a unique identifier, usually provided externally, which is common across all versions of a particular image. For example, this could be the S3 bucket name and key, without version; or this could be the bucket name and object name in GCS without the generation number. */
  resourceName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "images" */
export type Images_Mutation_Response = {
  __typename?: 'Images_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Images>;
};

/** input type for inserting object relation for remote table "images" */
export type Images_Obj_Rel_Insert_Input = {
  data: Images_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Images_On_Conflict>;
};

/** on_conflict condition type for table "images" */
export type Images_On_Conflict = {
  constraint: Images_Constraint;
  update_columns?: Array<Images_Update_Column>;
  where?: InputMaybe<Images_Bool_Exp>;
};

/** Ordering options when selecting data from "images". */
export type Images_Order_By = {
  active?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  resourceName?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  visualJudgementModuleImages_aggregate?: InputMaybe<VisualJudgementModuleImages_Aggregate_Order_By>;
};

/** primary key columns input for table: images */
export type Images_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "images" */
export enum Images_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Id = 'id',
  /** column name */
  ResourceName = 'resourceName',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "images" */
export type Images_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  /** This is a unique identifier, usually provided externally, which is common across all versions of a particular image. For example, this could be the S3 bucket name and key, without version; or this could be the bucket name and object name in GCS without the generation number. */
  resourceName?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "Images" */
export type Images_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Images_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Images_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  /** This is a unique identifier, usually provided externally, which is common across all versions of a particular image. For example, this could be the S3 bucket name and key, without version; or this could be the bucket name and object name in GCS without the generation number. */
  resourceName?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** update columns of table "images" */
export enum Images_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Id = 'id',
  /** column name */
  ResourceName = 'resourceName',
  /** column name */
  Url = 'url'
}

export type Images_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Images_Set_Input>;
  where: Images_Bool_Exp;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

/** columns and relationships of "module_instructions" */
export type ModuleInstructions = {
  __typename?: 'ModuleInstructions';
  id: Scalars['uuid'];
  instructionsMarkdown: Scalars['String'];
  /** An object relationship */
  module: Modules;
  moduleId: Scalars['uuid'];
};

/** aggregated selection of "module_instructions" */
export type ModuleInstructions_Aggregate = {
  __typename?: 'ModuleInstructions_aggregate';
  aggregate?: Maybe<ModuleInstructions_Aggregate_Fields>;
  nodes: Array<ModuleInstructions>;
};

/** aggregate fields of "module_instructions" */
export type ModuleInstructions_Aggregate_Fields = {
  __typename?: 'ModuleInstructions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ModuleInstructions_Max_Fields>;
  min?: Maybe<ModuleInstructions_Min_Fields>;
};


/** aggregate fields of "module_instructions" */
export type ModuleInstructions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<ModuleInstructions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "module_instructions" */
export type ModuleInstructions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<ModuleInstructions_Max_Order_By>;
  min?: InputMaybe<ModuleInstructions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "module_instructions" */
export type ModuleInstructions_Arr_Rel_Insert_Input = {
  data: Array<ModuleInstructions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<ModuleInstructions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "module_instructions". All fields are combined with a logical 'AND'. */
export type ModuleInstructions_Bool_Exp = {
  _and?: InputMaybe<Array<ModuleInstructions_Bool_Exp>>;
  _not?: InputMaybe<ModuleInstructions_Bool_Exp>;
  _or?: InputMaybe<Array<ModuleInstructions_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  instructionsMarkdown?: InputMaybe<String_Comparison_Exp>;
  module?: InputMaybe<Modules_Bool_Exp>;
  moduleId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "module_instructions" */
export enum ModuleInstructions_Constraint {
  /** unique or primary key constraint on columns "id" */
  DataServiceInstructionsPkey = 'data_service_instructions_pkey'
}

/** input type for inserting data into table "module_instructions" */
export type ModuleInstructions_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  instructionsMarkdown?: InputMaybe<Scalars['String']>;
  module?: InputMaybe<Modules_Obj_Rel_Insert_Input>;
  moduleId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type ModuleInstructions_Max_Fields = {
  __typename?: 'ModuleInstructions_max_fields';
  id?: Maybe<Scalars['uuid']>;
  instructionsMarkdown?: Maybe<Scalars['String']>;
  moduleId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "module_instructions" */
export type ModuleInstructions_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  instructionsMarkdown?: InputMaybe<Order_By>;
  moduleId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type ModuleInstructions_Min_Fields = {
  __typename?: 'ModuleInstructions_min_fields';
  id?: Maybe<Scalars['uuid']>;
  instructionsMarkdown?: Maybe<Scalars['String']>;
  moduleId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "module_instructions" */
export type ModuleInstructions_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  instructionsMarkdown?: InputMaybe<Order_By>;
  moduleId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "module_instructions" */
export type ModuleInstructions_Mutation_Response = {
  __typename?: 'ModuleInstructions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ModuleInstructions>;
};

/** on_conflict condition type for table "module_instructions" */
export type ModuleInstructions_On_Conflict = {
  constraint: ModuleInstructions_Constraint;
  update_columns?: Array<ModuleInstructions_Update_Column>;
  where?: InputMaybe<ModuleInstructions_Bool_Exp>;
};

/** Ordering options when selecting data from "module_instructions". */
export type ModuleInstructions_Order_By = {
  id?: InputMaybe<Order_By>;
  instructionsMarkdown?: InputMaybe<Order_By>;
  module?: InputMaybe<Modules_Order_By>;
  moduleId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: module_instructions */
export type ModuleInstructions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "module_instructions" */
export enum ModuleInstructions_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InstructionsMarkdown = 'instructionsMarkdown',
  /** column name */
  ModuleId = 'moduleId'
}

/** input type for updating data in table "module_instructions" */
export type ModuleInstructions_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  instructionsMarkdown?: InputMaybe<Scalars['String']>;
  moduleId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "ModuleInstructions" */
export type ModuleInstructions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: ModuleInstructions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ModuleInstructions_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  instructionsMarkdown?: InputMaybe<Scalars['String']>;
  moduleId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "module_instructions" */
export enum ModuleInstructions_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  InstructionsMarkdown = 'instructionsMarkdown',
  /** column name */
  ModuleId = 'moduleId'
}

export type ModuleInstructions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ModuleInstructions_Set_Input>;
  where: ModuleInstructions_Bool_Exp;
};

/** columns and relationships of "modules" */
export type Modules = {
  __typename?: 'Modules';
  description?: Maybe<Scalars['String']>;
  faqs?: Maybe<VanaConnectFaqEntityResponseCollection>;
  iconURL: Scalars['String'];
  id: Scalars['uuid'];
  isActive: Scalars['Boolean'];
  /** An array relationship */
  moduleInstructions: Array<ModuleInstructions>;
  /** An aggregate relationship */
  moduleInstructions_aggregate: ModuleInstructions_Aggregate;
  /** An array relationship */
  modulesMarketplaceProjects: Array<Modules_Marketplace_Projects>;
  /** An aggregate relationship */
  modulesMarketplaceProjects_aggregate: Modules_Marketplace_Projects_Aggregate;
  name: Scalars['String'];
  urlToDownloadData?: Maybe<Scalars['String']>;
  /** An array relationship */
  usersModules: Array<UsersModules>;
  /** An aggregate relationship */
  usersModules_aggregate: UsersModules_Aggregate;
};


/** columns and relationships of "modules" */
export type ModulesFaqsArgs = {
  filters?: InputMaybe<VanaConnectFaqFiltersInput_Remote_Rel_Modulesfaqs>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** columns and relationships of "modules" */
export type ModulesModuleInstructionsArgs = {
  distinct_on?: InputMaybe<Array<ModuleInstructions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ModuleInstructions_Order_By>>;
  where?: InputMaybe<ModuleInstructions_Bool_Exp>;
};


/** columns and relationships of "modules" */
export type ModulesModuleInstructions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ModuleInstructions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ModuleInstructions_Order_By>>;
  where?: InputMaybe<ModuleInstructions_Bool_Exp>;
};


/** columns and relationships of "modules" */
export type ModulesModulesMarketplaceProjectsArgs = {
  distinct_on?: InputMaybe<Array<Modules_Marketplace_Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Modules_Marketplace_Projects_Order_By>>;
  where?: InputMaybe<Modules_Marketplace_Projects_Bool_Exp>;
};


/** columns and relationships of "modules" */
export type ModulesModulesMarketplaceProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Modules_Marketplace_Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Modules_Marketplace_Projects_Order_By>>;
  where?: InputMaybe<Modules_Marketplace_Projects_Bool_Exp>;
};


/** columns and relationships of "modules" */
export type ModulesUsersModulesArgs = {
  distinct_on?: InputMaybe<Array<UsersModules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersModules_Order_By>>;
  where?: InputMaybe<UsersModules_Bool_Exp>;
};


/** columns and relationships of "modules" */
export type ModulesUsersModules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersModules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersModules_Order_By>>;
  where?: InputMaybe<UsersModules_Bool_Exp>;
};

/** aggregated selection of "modules" */
export type Modules_Aggregate = {
  __typename?: 'Modules_aggregate';
  aggregate?: Maybe<Modules_Aggregate_Fields>;
  nodes: Array<Modules>;
};

/** aggregate fields of "modules" */
export type Modules_Aggregate_Fields = {
  __typename?: 'Modules_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Modules_Max_Fields>;
  min?: Maybe<Modules_Min_Fields>;
};


/** aggregate fields of "modules" */
export type Modules_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Modules_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "modules". All fields are combined with a logical 'AND'. */
export type Modules_Bool_Exp = {
  _and?: InputMaybe<Array<Modules_Bool_Exp>>;
  _not?: InputMaybe<Modules_Bool_Exp>;
  _or?: InputMaybe<Array<Modules_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  iconURL?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isActive?: InputMaybe<Boolean_Comparison_Exp>;
  moduleInstructions?: InputMaybe<ModuleInstructions_Bool_Exp>;
  modulesMarketplaceProjects?: InputMaybe<Modules_Marketplace_Projects_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  urlToDownloadData?: InputMaybe<String_Comparison_Exp>;
  usersModules?: InputMaybe<UsersModules_Bool_Exp>;
};

/** unique or primary key constraints on table "modules" */
export enum Modules_Constraint {
  /** unique or primary key constraint on columns "id" */
  DataServicesPkey = 'data_services_pkey',
  /** unique or primary key constraint on columns "name" */
  ModulesNameKey = 'modules_name_key'
}

/** input type for inserting data into table "modules" */
export type Modules_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  iconURL?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  moduleInstructions?: InputMaybe<ModuleInstructions_Arr_Rel_Insert_Input>;
  modulesMarketplaceProjects?: InputMaybe<Modules_Marketplace_Projects_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  urlToDownloadData?: InputMaybe<Scalars['String']>;
  usersModules?: InputMaybe<UsersModules_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Modules_Max_Fields = {
  __typename?: 'Modules_max_fields';
  description?: Maybe<Scalars['String']>;
  iconURL?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  urlToDownloadData?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Modules_Min_Fields = {
  __typename?: 'Modules_min_fields';
  description?: Maybe<Scalars['String']>;
  iconURL?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  urlToDownloadData?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "modules" */
export type Modules_Mutation_Response = {
  __typename?: 'Modules_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Modules>;
};

/** input type for inserting object relation for remote table "modules" */
export type Modules_Obj_Rel_Insert_Input = {
  data: Modules_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Modules_On_Conflict>;
};

/** on_conflict condition type for table "modules" */
export type Modules_On_Conflict = {
  constraint: Modules_Constraint;
  update_columns?: Array<Modules_Update_Column>;
  where?: InputMaybe<Modules_Bool_Exp>;
};

/** Ordering options when selecting data from "modules". */
export type Modules_Order_By = {
  description?: InputMaybe<Order_By>;
  iconURL?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isActive?: InputMaybe<Order_By>;
  moduleInstructions_aggregate?: InputMaybe<ModuleInstructions_Aggregate_Order_By>;
  modulesMarketplaceProjects_aggregate?: InputMaybe<Modules_Marketplace_Projects_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  urlToDownloadData?: InputMaybe<Order_By>;
  usersModules_aggregate?: InputMaybe<UsersModules_Aggregate_Order_By>;
};

/** primary key columns input for table: modules */
export type Modules_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "modules" */
export enum Modules_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  IconUrl = 'iconURL',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'isActive',
  /** column name */
  Name = 'name',
  /** column name */
  UrlToDownloadData = 'urlToDownloadData'
}

/** input type for updating data in table "modules" */
export type Modules_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  iconURL?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  urlToDownloadData?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "Modules" */
export type Modules_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Modules_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Modules_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  iconURL?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  urlToDownloadData?: InputMaybe<Scalars['String']>;
};

/** update columns of table "modules" */
export enum Modules_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  IconUrl = 'iconURL',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'isActive',
  /** column name */
  Name = 'name',
  /** column name */
  UrlToDownloadData = 'urlToDownloadData'
}

export type Modules_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Modules_Set_Input>;
  where: Modules_Bool_Exp;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

/** columns and relationships of "project_statuses" */
export type ProjectStatuses = {
  __typename?: 'ProjectStatuses';
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "project_statuses" */
export type ProjectStatuses_Aggregate = {
  __typename?: 'ProjectStatuses_aggregate';
  aggregate?: Maybe<ProjectStatuses_Aggregate_Fields>;
  nodes: Array<ProjectStatuses>;
};

/** aggregate fields of "project_statuses" */
export type ProjectStatuses_Aggregate_Fields = {
  __typename?: 'ProjectStatuses_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ProjectStatuses_Max_Fields>;
  min?: Maybe<ProjectStatuses_Min_Fields>;
};


/** aggregate fields of "project_statuses" */
export type ProjectStatuses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<ProjectStatuses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "project_statuses". All fields are combined with a logical 'AND'. */
export type ProjectStatuses_Bool_Exp = {
  _and?: InputMaybe<Array<ProjectStatuses_Bool_Exp>>;
  _not?: InputMaybe<ProjectStatuses_Bool_Exp>;
  _or?: InputMaybe<Array<ProjectStatuses_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "project_statuses" */
export enum ProjectStatuses_Constraint {
  /** unique or primary key constraint on columns "value" */
  ProjectStatusesPkey = 'project_statuses_pkey'
}

export enum ProjectStatuses_Enum {
  Compensated = 'COMPENSATED',
  Complete = 'COMPLETE',
  InProgress = 'IN_PROGRESS'
}

/** Boolean expression to compare columns of type "ProjectStatuses_enum". All fields are combined with logical 'AND'. */
export type ProjectStatuses_Enum_Comparison_Exp = {
  _eq?: InputMaybe<ProjectStatuses_Enum>;
  _in?: InputMaybe<Array<ProjectStatuses_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<ProjectStatuses_Enum>;
  _nin?: InputMaybe<Array<ProjectStatuses_Enum>>;
};

/** input type for inserting data into table "project_statuses" */
export type ProjectStatuses_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ProjectStatuses_Max_Fields = {
  __typename?: 'ProjectStatuses_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type ProjectStatuses_Min_Fields = {
  __typename?: 'ProjectStatuses_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "project_statuses" */
export type ProjectStatuses_Mutation_Response = {
  __typename?: 'ProjectStatuses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ProjectStatuses>;
};

/** on_conflict condition type for table "project_statuses" */
export type ProjectStatuses_On_Conflict = {
  constraint: ProjectStatuses_Constraint;
  update_columns?: Array<ProjectStatuses_Update_Column>;
  where?: InputMaybe<ProjectStatuses_Bool_Exp>;
};

/** Ordering options when selecting data from "project_statuses". */
export type ProjectStatuses_Order_By = {
  description?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: project_statuses */
export type ProjectStatuses_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "project_statuses" */
export enum ProjectStatuses_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "project_statuses" */
export type ProjectStatuses_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "ProjectStatuses" */
export type ProjectStatuses_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: ProjectStatuses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ProjectStatuses_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "project_statuses" */
export enum ProjectStatuses_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type ProjectStatuses_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ProjectStatuses_Set_Input>;
  where: ProjectStatuses_Bool_Exp;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

/** columns and relationships of "sessions" */
export type Sessions = {
  __typename?: 'Sessions';
  clientIpAddress?: Maybe<Scalars['String']>;
  clientUserAgent?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  expiresAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  lastActiveAt: Scalars['timestamptz'];
  removedAt?: Maybe<Scalars['timestamptz']>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  worker: Workers;
  workerId: Scalars['uuid'];
};

/** aggregated selection of "sessions" */
export type Sessions_Aggregate = {
  __typename?: 'Sessions_aggregate';
  aggregate?: Maybe<Sessions_Aggregate_Fields>;
  nodes: Array<Sessions>;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_Fields = {
  __typename?: 'Sessions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Sessions_Max_Fields>;
  min?: Maybe<Sessions_Min_Fields>;
};


/** aggregate fields of "sessions" */
export type Sessions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "sessions" */
export type Sessions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Sessions_Max_Order_By>;
  min?: InputMaybe<Sessions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "sessions" */
export type Sessions_Arr_Rel_Insert_Input = {
  data: Array<Sessions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "sessions". All fields are combined with a logical 'AND'. */
export type Sessions_Bool_Exp = {
  _and?: InputMaybe<Array<Sessions_Bool_Exp>>;
  _not?: InputMaybe<Sessions_Bool_Exp>;
  _or?: InputMaybe<Array<Sessions_Bool_Exp>>;
  clientIpAddress?: InputMaybe<String_Comparison_Exp>;
  clientUserAgent?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lastActiveAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  removedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  worker?: InputMaybe<Workers_Bool_Exp>;
  workerId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "sessions" */
export enum Sessions_Constraint {
  /** unique or primary key constraint on columns "id" */
  SessionsPkey = 'sessions_pkey'
}

/** input type for inserting data into table "sessions" */
export type Sessions_Insert_Input = {
  clientIpAddress?: InputMaybe<Scalars['String']>;
  clientUserAgent?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  lastActiveAt?: InputMaybe<Scalars['timestamptz']>;
  removedAt?: InputMaybe<Scalars['timestamptz']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  worker?: InputMaybe<Workers_Obj_Rel_Insert_Input>;
  workerId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Sessions_Max_Fields = {
  __typename?: 'Sessions_max_fields';
  clientIpAddress?: Maybe<Scalars['String']>;
  clientUserAgent?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  lastActiveAt?: Maybe<Scalars['timestamptz']>;
  removedAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  workerId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "sessions" */
export type Sessions_Max_Order_By = {
  clientIpAddress?: InputMaybe<Order_By>;
  clientUserAgent?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastActiveAt?: InputMaybe<Order_By>;
  removedAt?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  workerId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Sessions_Min_Fields = {
  __typename?: 'Sessions_min_fields';
  clientIpAddress?: Maybe<Scalars['String']>;
  clientUserAgent?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  lastActiveAt?: Maybe<Scalars['timestamptz']>;
  removedAt?: Maybe<Scalars['timestamptz']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  workerId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "sessions" */
export type Sessions_Min_Order_By = {
  clientIpAddress?: InputMaybe<Order_By>;
  clientUserAgent?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastActiveAt?: InputMaybe<Order_By>;
  removedAt?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  workerId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "sessions" */
export type Sessions_Mutation_Response = {
  __typename?: 'Sessions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Sessions>;
};

/** on_conflict condition type for table "sessions" */
export type Sessions_On_Conflict = {
  constraint: Sessions_Constraint;
  update_columns?: Array<Sessions_Update_Column>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "sessions". */
export type Sessions_Order_By = {
  clientIpAddress?: InputMaybe<Order_By>;
  clientUserAgent?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastActiveAt?: InputMaybe<Order_By>;
  removedAt?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  worker?: InputMaybe<Workers_Order_By>;
  workerId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sessions */
export type Sessions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "sessions" */
export enum Sessions_Select_Column {
  /** column name */
  ClientIpAddress = 'clientIpAddress',
  /** column name */
  ClientUserAgent = 'clientUserAgent',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  LastActiveAt = 'lastActiveAt',
  /** column name */
  RemovedAt = 'removedAt',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WorkerId = 'workerId'
}

/** input type for updating data in table "sessions" */
export type Sessions_Set_Input = {
  clientIpAddress?: InputMaybe<Scalars['String']>;
  clientUserAgent?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  lastActiveAt?: InputMaybe<Scalars['timestamptz']>;
  removedAt?: InputMaybe<Scalars['timestamptz']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  workerId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "Sessions" */
export type Sessions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sessions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sessions_Stream_Cursor_Value_Input = {
  clientIpAddress?: InputMaybe<Scalars['String']>;
  clientUserAgent?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  lastActiveAt?: InputMaybe<Scalars['timestamptz']>;
  removedAt?: InputMaybe<Scalars['timestamptz']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  workerId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "sessions" */
export enum Sessions_Update_Column {
  /** column name */
  ClientIpAddress = 'clientIpAddress',
  /** column name */
  ClientUserAgent = 'clientUserAgent',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  LastActiveAt = 'lastActiveAt',
  /** column name */
  RemovedAt = 'removedAt',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WorkerId = 'workerId'
}

export type Sessions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Sessions_Set_Input>;
  where: Sessions_Bool_Exp;
};

export type StrapiModule = {
  __typename?: 'StrapiModule';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  iconURL?: Maybe<Scalars['String']>;
  instructions?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  urlToDownloadData?: Maybe<Scalars['String']>;
};

export type StrapiModuleEntity = {
  __typename?: 'StrapiModuleEntity';
  attributes?: Maybe<StrapiModule>;
  id?: Maybe<Scalars['ID']>;
};

export type StrapiModuleEntityResponse = {
  __typename?: 'StrapiModuleEntityResponse';
  data?: Maybe<StrapiModuleEntity>;
};

export type StrapiModuleEntityResponseCollection = {
  __typename?: 'StrapiModuleEntityResponseCollection';
  data: Array<StrapiModuleEntity>;
  meta: ResponseCollectionMeta;
};

export type StrapiModuleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<StrapiModuleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  iconURL?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  instructions?: InputMaybe<StringFilterInput>;
  isActive?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<StrapiModuleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<StrapiModuleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  urlToDownloadData?: InputMaybe<StringFilterInput>;
};

export type StrapiModuleInput = {
  description?: InputMaybe<Scalars['String']>;
  iconURL?: InputMaybe<Scalars['String']>;
  instructions?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  urlToDownloadData?: InputMaybe<Scalars['String']>;
};

export type StrapiProject = {
  __typename?: 'StrapiProject';
  createdAt?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
  longDescription?: Maybe<Scalars['String']>;
  payoutPerUser?: Maybe<Scalars['Float']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  shortDescription?: Maybe<Scalars['String']>;
  timeToCompleteInMinutes?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StrapiProjectEntity = {
  __typename?: 'StrapiProjectEntity';
  attributes?: Maybe<StrapiProject>;
  id?: Maybe<Scalars['ID']>;
};

export type StrapiProjectEntityResponse = {
  __typename?: 'StrapiProjectEntityResponse';
  data?: Maybe<StrapiProjectEntity>;
};

export type StrapiProjectEntityResponseCollection = {
  __typename?: 'StrapiProjectEntityResponseCollection';
  data: Array<StrapiProjectEntity>;
  meta: ResponseCollectionMeta;
};

export type StrapiProjectFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<StrapiProjectFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isActive?: InputMaybe<BooleanFilterInput>;
  longDescription?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<StrapiProjectFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<StrapiProjectFiltersInput>>>;
  payoutPerUser?: InputMaybe<FloatFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  shortDescription?: InputMaybe<StringFilterInput>;
  timeToCompleteInMinutes?: InputMaybe<IntFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type StrapiProjectFiltersInput_Remote_Rel_Marketplace_ProjectsstrapiProject = {
  and?: InputMaybe<Array<InputMaybe<StrapiProjectFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isActive?: InputMaybe<BooleanFilterInput>;
  longDescription?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<StrapiProjectFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<StrapiProjectFiltersInput>>>;
  payoutPerUser?: InputMaybe<FloatFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  shortDescription?: InputMaybe<StringFilterInput>;
  timeToCompleteInMinutes?: InputMaybe<IntFilterInput>;
  title?: InputMaybe<StringFilterInput_Remote_Rel_Marketplace_ProjectsstrapiProject>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type StrapiProjectInput = {
  isActive?: InputMaybe<Scalars['Boolean']>;
  longDescription?: InputMaybe<Scalars['String']>;
  payoutPerUser?: InputMaybe<Scalars['Float']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  shortDescription?: InputMaybe<Scalars['String']>;
  timeToCompleteInMinutes?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringFilterInput_Remote_Rel_Marketplace_ProjectsstrapiProject = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringFilterInput_Remote_Rel_Modulesfaqs = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Machine readable error codes from stripe */
export type StripeIdentitySessionErrorCodeEnums = {
  __typename?: 'StripeIdentitySessionErrorCodeEnums';
  description: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "stripe_identity_session_error_code_enum" */
export type StripeIdentitySessionErrorCodeEnums_Aggregate = {
  __typename?: 'StripeIdentitySessionErrorCodeEnums_aggregate';
  aggregate?: Maybe<StripeIdentitySessionErrorCodeEnums_Aggregate_Fields>;
  nodes: Array<StripeIdentitySessionErrorCodeEnums>;
};

/** aggregate fields of "stripe_identity_session_error_code_enum" */
export type StripeIdentitySessionErrorCodeEnums_Aggregate_Fields = {
  __typename?: 'StripeIdentitySessionErrorCodeEnums_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<StripeIdentitySessionErrorCodeEnums_Max_Fields>;
  min?: Maybe<StripeIdentitySessionErrorCodeEnums_Min_Fields>;
};


/** aggregate fields of "stripe_identity_session_error_code_enum" */
export type StripeIdentitySessionErrorCodeEnums_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<StripeIdentitySessionErrorCodeEnums_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "stripe_identity_session_error_code_enum". All fields are combined with a logical 'AND'. */
export type StripeIdentitySessionErrorCodeEnums_Bool_Exp = {
  _and?: InputMaybe<Array<StripeIdentitySessionErrorCodeEnums_Bool_Exp>>;
  _not?: InputMaybe<StripeIdentitySessionErrorCodeEnums_Bool_Exp>;
  _or?: InputMaybe<Array<StripeIdentitySessionErrorCodeEnums_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "stripe_identity_session_error_code_enum" */
export enum StripeIdentitySessionErrorCodeEnums_Constraint {
  /** unique or primary key constraint on columns "value" */
  StripeIdentitySessionErrorCodeEnumPkey = 'stripe_identity_session_error_code_enum_pkey'
}

export enum StripeIdentitySessionErrorCodeEnums_Enum {
  /** 	The provided identity document has expired. */
  DocumentExpired = 'document_expired',
  /** The provided identity document isn’t one of the session’s allowed document types. */
  DocumentTypeNotSupported = 'document_type_not_supported',
  /** Stripe couldn’t verify the provided identity document. */
  DocumentUnverifiedOther = 'document_unverified_other',
  /** 	The provided document didn’t contain enough data to match against the ID number. */
  IdNumberInsufficientDocumentData = 'id_number_insufficient_document_data',
  /** The information provided couldn’t be matched against global databases. */
  IdNumberMismatch = 'id_number_mismatch',
  /** Stripe couldn’t verify the provided ID number. */
  IdNumberUnverifiedOther = 'id_number_unverified_other'
}

/** Boolean expression to compare columns of type "StripeIdentitySessionErrorCodeEnums_enum". All fields are combined with logical 'AND'. */
export type StripeIdentitySessionErrorCodeEnums_Enum_Comparison_Exp = {
  _eq?: InputMaybe<StripeIdentitySessionErrorCodeEnums_Enum>;
  _in?: InputMaybe<Array<StripeIdentitySessionErrorCodeEnums_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<StripeIdentitySessionErrorCodeEnums_Enum>;
  _nin?: InputMaybe<Array<StripeIdentitySessionErrorCodeEnums_Enum>>;
};

/** input type for inserting data into table "stripe_identity_session_error_code_enum" */
export type StripeIdentitySessionErrorCodeEnums_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type StripeIdentitySessionErrorCodeEnums_Max_Fields = {
  __typename?: 'StripeIdentitySessionErrorCodeEnums_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type StripeIdentitySessionErrorCodeEnums_Min_Fields = {
  __typename?: 'StripeIdentitySessionErrorCodeEnums_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "stripe_identity_session_error_code_enum" */
export type StripeIdentitySessionErrorCodeEnums_Mutation_Response = {
  __typename?: 'StripeIdentitySessionErrorCodeEnums_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<StripeIdentitySessionErrorCodeEnums>;
};

/** input type for inserting object relation for remote table "stripe_identity_session_error_code_enum" */
export type StripeIdentitySessionErrorCodeEnums_Obj_Rel_Insert_Input = {
  data: StripeIdentitySessionErrorCodeEnums_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<StripeIdentitySessionErrorCodeEnums_On_Conflict>;
};

/** on_conflict condition type for table "stripe_identity_session_error_code_enum" */
export type StripeIdentitySessionErrorCodeEnums_On_Conflict = {
  constraint: StripeIdentitySessionErrorCodeEnums_Constraint;
  update_columns?: Array<StripeIdentitySessionErrorCodeEnums_Update_Column>;
  where?: InputMaybe<StripeIdentitySessionErrorCodeEnums_Bool_Exp>;
};

/** Ordering options when selecting data from "stripe_identity_session_error_code_enum". */
export type StripeIdentitySessionErrorCodeEnums_Order_By = {
  description?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: stripe_identity_session_error_code_enum */
export type StripeIdentitySessionErrorCodeEnums_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "stripe_identity_session_error_code_enum" */
export enum StripeIdentitySessionErrorCodeEnums_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "stripe_identity_session_error_code_enum" */
export type StripeIdentitySessionErrorCodeEnums_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "StripeIdentitySessionErrorCodeEnums" */
export type StripeIdentitySessionErrorCodeEnums_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: StripeIdentitySessionErrorCodeEnums_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type StripeIdentitySessionErrorCodeEnums_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "stripe_identity_session_error_code_enum" */
export enum StripeIdentitySessionErrorCodeEnums_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type StripeIdentitySessionErrorCodeEnums_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<StripeIdentitySessionErrorCodeEnums_Set_Input>;
  where: StripeIdentitySessionErrorCodeEnums_Bool_Exp;
};

/** status of the initiated Stripe Identity verification session */
export type StripeIdentitySessionStatusEnums = {
  __typename?: 'StripeIdentitySessionStatusEnums';
  description: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "stripe_identity_session_status_enum" */
export type StripeIdentitySessionStatusEnums_Aggregate = {
  __typename?: 'StripeIdentitySessionStatusEnums_aggregate';
  aggregate?: Maybe<StripeIdentitySessionStatusEnums_Aggregate_Fields>;
  nodes: Array<StripeIdentitySessionStatusEnums>;
};

/** aggregate fields of "stripe_identity_session_status_enum" */
export type StripeIdentitySessionStatusEnums_Aggregate_Fields = {
  __typename?: 'StripeIdentitySessionStatusEnums_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<StripeIdentitySessionStatusEnums_Max_Fields>;
  min?: Maybe<StripeIdentitySessionStatusEnums_Min_Fields>;
};


/** aggregate fields of "stripe_identity_session_status_enum" */
export type StripeIdentitySessionStatusEnums_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<StripeIdentitySessionStatusEnums_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "stripe_identity_session_status_enum". All fields are combined with a logical 'AND'. */
export type StripeIdentitySessionStatusEnums_Bool_Exp = {
  _and?: InputMaybe<Array<StripeIdentitySessionStatusEnums_Bool_Exp>>;
  _not?: InputMaybe<StripeIdentitySessionStatusEnums_Bool_Exp>;
  _or?: InputMaybe<Array<StripeIdentitySessionStatusEnums_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "stripe_identity_session_status_enum" */
export enum StripeIdentitySessionStatusEnums_Constraint {
  /** unique or primary key constraint on columns "value" */
  StripeIdentitySessionStatusEnumPkey = 'stripe_identity_session_status_enum_pkey'
}

export enum StripeIdentitySessionStatusEnums_Enum {
  /** The session has been canceled and future submission attempts have been disabled.  */
  Canceled = 'canceled',
  /** The session was created. */
  Created = 'created',
  /** The user has not started a session. */
  NotStarted = 'not_started',
  /** The user has successfully submitted their information, and verification checks have started processing. */
  Processing = 'processing',
  /** The session was redacted. */
  Redacted = 'redacted',
  /** Processing of all the verification checks have completed, and at least one of the checks failed. */
  RequiresInput = 'requires_input',
  /** Processing of all the verification checks have completed, and they’re all successfully verified. */
  Verified = 'verified'
}

/** Boolean expression to compare columns of type "StripeIdentitySessionStatusEnums_enum". All fields are combined with logical 'AND'. */
export type StripeIdentitySessionStatusEnums_Enum_Comparison_Exp = {
  _eq?: InputMaybe<StripeIdentitySessionStatusEnums_Enum>;
  _in?: InputMaybe<Array<StripeIdentitySessionStatusEnums_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<StripeIdentitySessionStatusEnums_Enum>;
  _nin?: InputMaybe<Array<StripeIdentitySessionStatusEnums_Enum>>;
};

/** input type for inserting data into table "stripe_identity_session_status_enum" */
export type StripeIdentitySessionStatusEnums_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type StripeIdentitySessionStatusEnums_Max_Fields = {
  __typename?: 'StripeIdentitySessionStatusEnums_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type StripeIdentitySessionStatusEnums_Min_Fields = {
  __typename?: 'StripeIdentitySessionStatusEnums_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "stripe_identity_session_status_enum" */
export type StripeIdentitySessionStatusEnums_Mutation_Response = {
  __typename?: 'StripeIdentitySessionStatusEnums_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<StripeIdentitySessionStatusEnums>;
};

/** input type for inserting object relation for remote table "stripe_identity_session_status_enum" */
export type StripeIdentitySessionStatusEnums_Obj_Rel_Insert_Input = {
  data: StripeIdentitySessionStatusEnums_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<StripeIdentitySessionStatusEnums_On_Conflict>;
};

/** on_conflict condition type for table "stripe_identity_session_status_enum" */
export type StripeIdentitySessionStatusEnums_On_Conflict = {
  constraint: StripeIdentitySessionStatusEnums_Constraint;
  update_columns?: Array<StripeIdentitySessionStatusEnums_Update_Column>;
  where?: InputMaybe<StripeIdentitySessionStatusEnums_Bool_Exp>;
};

/** Ordering options when selecting data from "stripe_identity_session_status_enum". */
export type StripeIdentitySessionStatusEnums_Order_By = {
  description?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: stripe_identity_session_status_enum */
export type StripeIdentitySessionStatusEnums_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "stripe_identity_session_status_enum" */
export enum StripeIdentitySessionStatusEnums_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "stripe_identity_session_status_enum" */
export type StripeIdentitySessionStatusEnums_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "StripeIdentitySessionStatusEnums" */
export type StripeIdentitySessionStatusEnums_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: StripeIdentitySessionStatusEnums_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type StripeIdentitySessionStatusEnums_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "stripe_identity_session_status_enum" */
export enum StripeIdentitySessionStatusEnums_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type StripeIdentitySessionStatusEnums_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<StripeIdentitySessionStatusEnums_Set_Input>;
  where: StripeIdentitySessionStatusEnums_Bool_Exp;
};

/** type of verification session initiated */
export type StripeIdentitySessionTypeEnums = {
  __typename?: 'StripeIdentitySessionTypeEnums';
  description: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "stripe_identity_session_type_enum" */
export type StripeIdentitySessionTypeEnums_Aggregate = {
  __typename?: 'StripeIdentitySessionTypeEnums_aggregate';
  aggregate?: Maybe<StripeIdentitySessionTypeEnums_Aggregate_Fields>;
  nodes: Array<StripeIdentitySessionTypeEnums>;
};

/** aggregate fields of "stripe_identity_session_type_enum" */
export type StripeIdentitySessionTypeEnums_Aggregate_Fields = {
  __typename?: 'StripeIdentitySessionTypeEnums_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<StripeIdentitySessionTypeEnums_Max_Fields>;
  min?: Maybe<StripeIdentitySessionTypeEnums_Min_Fields>;
};


/** aggregate fields of "stripe_identity_session_type_enum" */
export type StripeIdentitySessionTypeEnums_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<StripeIdentitySessionTypeEnums_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "stripe_identity_session_type_enum". All fields are combined with a logical 'AND'. */
export type StripeIdentitySessionTypeEnums_Bool_Exp = {
  _and?: InputMaybe<Array<StripeIdentitySessionTypeEnums_Bool_Exp>>;
  _not?: InputMaybe<StripeIdentitySessionTypeEnums_Bool_Exp>;
  _or?: InputMaybe<Array<StripeIdentitySessionTypeEnums_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "stripe_identity_session_type_enum" */
export enum StripeIdentitySessionTypeEnums_Constraint {
  /** unique or primary key constraint on columns "value" */
  StripeIdentitySessionTypeEnumPkey = 'stripe_identity_session_type_enum_pkey'
}

export enum StripeIdentitySessionTypeEnums_Enum {
  /** Document check. */
  Document = 'document',
  /** ID number check. */
  IdNumber = 'id_number'
}

/** Boolean expression to compare columns of type "StripeIdentitySessionTypeEnums_enum". All fields are combined with logical 'AND'. */
export type StripeIdentitySessionTypeEnums_Enum_Comparison_Exp = {
  _eq?: InputMaybe<StripeIdentitySessionTypeEnums_Enum>;
  _in?: InputMaybe<Array<StripeIdentitySessionTypeEnums_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<StripeIdentitySessionTypeEnums_Enum>;
  _nin?: InputMaybe<Array<StripeIdentitySessionTypeEnums_Enum>>;
};

/** input type for inserting data into table "stripe_identity_session_type_enum" */
export type StripeIdentitySessionTypeEnums_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type StripeIdentitySessionTypeEnums_Max_Fields = {
  __typename?: 'StripeIdentitySessionTypeEnums_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type StripeIdentitySessionTypeEnums_Min_Fields = {
  __typename?: 'StripeIdentitySessionTypeEnums_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "stripe_identity_session_type_enum" */
export type StripeIdentitySessionTypeEnums_Mutation_Response = {
  __typename?: 'StripeIdentitySessionTypeEnums_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<StripeIdentitySessionTypeEnums>;
};

/** input type for inserting object relation for remote table "stripe_identity_session_type_enum" */
export type StripeIdentitySessionTypeEnums_Obj_Rel_Insert_Input = {
  data: StripeIdentitySessionTypeEnums_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<StripeIdentitySessionTypeEnums_On_Conflict>;
};

/** on_conflict condition type for table "stripe_identity_session_type_enum" */
export type StripeIdentitySessionTypeEnums_On_Conflict = {
  constraint: StripeIdentitySessionTypeEnums_Constraint;
  update_columns?: Array<StripeIdentitySessionTypeEnums_Update_Column>;
  where?: InputMaybe<StripeIdentitySessionTypeEnums_Bool_Exp>;
};

/** Ordering options when selecting data from "stripe_identity_session_type_enum". */
export type StripeIdentitySessionTypeEnums_Order_By = {
  description?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: stripe_identity_session_type_enum */
export type StripeIdentitySessionTypeEnums_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "stripe_identity_session_type_enum" */
export enum StripeIdentitySessionTypeEnums_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "stripe_identity_session_type_enum" */
export type StripeIdentitySessionTypeEnums_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "StripeIdentitySessionTypeEnums" */
export type StripeIdentitySessionTypeEnums_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: StripeIdentitySessionTypeEnums_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type StripeIdentitySessionTypeEnums_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "stripe_identity_session_type_enum" */
export enum StripeIdentitySessionTypeEnums_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type StripeIdentitySessionTypeEnums_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<StripeIdentitySessionTypeEnums_Set_Input>;
  where: StripeIdentitySessionTypeEnums_Bool_Exp;
};

/** All stripe identity verification sessions and statuses  */
export type StripeVerificationSessions = {
  __typename?: 'StripeVerificationSessions';
  createdAt?: Maybe<Scalars['timestamptz']>;
  /** local uuid for the table */
  id: Scalars['uuid'];
  /** unique ID for the initiated Stripe Identity verification session */
  sessionId: Scalars['String'];
  /** machine-readable error code if a check has failed */
  sessionLastErrorCode?: Maybe<StripeIdentitySessionErrorCodeEnums_Enum>;
  /** last error in human readable format */
  sessionLastErrorMessage?: Maybe<Scalars['String']>;
  /** status of the initiated Stripe Identity verification session */
  sessionStatus: StripeIdentitySessionStatusEnums_Enum;
  /** type of verification session initiated */
  sessionType: StripeIdentitySessionTypeEnums_Enum;
  /** An object relationship */
  stripeIdentitySessionErrorCodeEnum?: Maybe<StripeIdentitySessionErrorCodeEnums>;
  /** An object relationship */
  stripeIdentitySessionStatusEnum: StripeIdentitySessionStatusEnums;
  /** An object relationship */
  stripeIdentitySessionTypeEnum: StripeIdentitySessionTypeEnums;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  /** uuid of the participant of the session */
  userId: Scalars['uuid'];
  /** An array relationship */
  userIdentities: Array<UserIdentities>;
  /** An aggregate relationship */
  userIdentities_aggregate: UserIdentities_Aggregate;
};


/** All stripe identity verification sessions and statuses  */
export type StripeVerificationSessionsUserIdentitiesArgs = {
  distinct_on?: InputMaybe<Array<UserIdentities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserIdentities_Order_By>>;
  where?: InputMaybe<UserIdentities_Bool_Exp>;
};


/** All stripe identity verification sessions and statuses  */
export type StripeVerificationSessionsUserIdentities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserIdentities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserIdentities_Order_By>>;
  where?: InputMaybe<UserIdentities_Bool_Exp>;
};

/** aggregated selection of "stripe_verification_sessions" */
export type StripeVerificationSessions_Aggregate = {
  __typename?: 'StripeVerificationSessions_aggregate';
  aggregate?: Maybe<StripeVerificationSessions_Aggregate_Fields>;
  nodes: Array<StripeVerificationSessions>;
};

/** aggregate fields of "stripe_verification_sessions" */
export type StripeVerificationSessions_Aggregate_Fields = {
  __typename?: 'StripeVerificationSessions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<StripeVerificationSessions_Max_Fields>;
  min?: Maybe<StripeVerificationSessions_Min_Fields>;
};


/** aggregate fields of "stripe_verification_sessions" */
export type StripeVerificationSessions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<StripeVerificationSessions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "stripe_verification_sessions" */
export type StripeVerificationSessions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<StripeVerificationSessions_Max_Order_By>;
  min?: InputMaybe<StripeVerificationSessions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "stripe_verification_sessions" */
export type StripeVerificationSessions_Arr_Rel_Insert_Input = {
  data: Array<StripeVerificationSessions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<StripeVerificationSessions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "stripe_verification_sessions". All fields are combined with a logical 'AND'. */
export type StripeVerificationSessions_Bool_Exp = {
  _and?: InputMaybe<Array<StripeVerificationSessions_Bool_Exp>>;
  _not?: InputMaybe<StripeVerificationSessions_Bool_Exp>;
  _or?: InputMaybe<Array<StripeVerificationSessions_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  sessionId?: InputMaybe<String_Comparison_Exp>;
  sessionLastErrorCode?: InputMaybe<StripeIdentitySessionErrorCodeEnums_Enum_Comparison_Exp>;
  sessionLastErrorMessage?: InputMaybe<String_Comparison_Exp>;
  sessionStatus?: InputMaybe<StripeIdentitySessionStatusEnums_Enum_Comparison_Exp>;
  sessionType?: InputMaybe<StripeIdentitySessionTypeEnums_Enum_Comparison_Exp>;
  stripeIdentitySessionErrorCodeEnum?: InputMaybe<StripeIdentitySessionErrorCodeEnums_Bool_Exp>;
  stripeIdentitySessionStatusEnum?: InputMaybe<StripeIdentitySessionStatusEnums_Bool_Exp>;
  stripeIdentitySessionTypeEnum?: InputMaybe<StripeIdentitySessionTypeEnums_Bool_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
  userIdentities?: InputMaybe<UserIdentities_Bool_Exp>;
};

/** unique or primary key constraints on table "stripe_verification_sessions" */
export enum StripeVerificationSessions_Constraint {
  /** unique or primary key constraint on columns "id" */
  StripeVerificationSessionsPkey = 'stripe_verification_sessions_pkey',
  /** unique or primary key constraint on columns "session_id" */
  StripeVerificationSessionsSessionIdKey = 'stripe_verification_sessions_session_id_key'
}

/** input type for inserting data into table "stripe_verification_sessions" */
export type StripeVerificationSessions_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  /** local uuid for the table */
  id?: InputMaybe<Scalars['uuid']>;
  /** unique ID for the initiated Stripe Identity verification session */
  sessionId?: InputMaybe<Scalars['String']>;
  /** machine-readable error code if a check has failed */
  sessionLastErrorCode?: InputMaybe<StripeIdentitySessionErrorCodeEnums_Enum>;
  /** last error in human readable format */
  sessionLastErrorMessage?: InputMaybe<Scalars['String']>;
  /** status of the initiated Stripe Identity verification session */
  sessionStatus?: InputMaybe<StripeIdentitySessionStatusEnums_Enum>;
  /** type of verification session initiated */
  sessionType?: InputMaybe<StripeIdentitySessionTypeEnums_Enum>;
  stripeIdentitySessionErrorCodeEnum?: InputMaybe<StripeIdentitySessionErrorCodeEnums_Obj_Rel_Insert_Input>;
  stripeIdentitySessionStatusEnum?: InputMaybe<StripeIdentitySessionStatusEnums_Obj_Rel_Insert_Input>;
  stripeIdentitySessionTypeEnum?: InputMaybe<StripeIdentitySessionTypeEnums_Obj_Rel_Insert_Input>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  /** uuid of the participant of the session */
  userId?: InputMaybe<Scalars['uuid']>;
  userIdentities?: InputMaybe<UserIdentities_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type StripeVerificationSessions_Max_Fields = {
  __typename?: 'StripeVerificationSessions_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  /** local uuid for the table */
  id?: Maybe<Scalars['uuid']>;
  /** unique ID for the initiated Stripe Identity verification session */
  sessionId?: Maybe<Scalars['String']>;
  /** last error in human readable format */
  sessionLastErrorMessage?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** uuid of the participant of the session */
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "stripe_verification_sessions" */
export type StripeVerificationSessions_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  /** local uuid for the table */
  id?: InputMaybe<Order_By>;
  /** unique ID for the initiated Stripe Identity verification session */
  sessionId?: InputMaybe<Order_By>;
  /** last error in human readable format */
  sessionLastErrorMessage?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  /** uuid of the participant of the session */
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type StripeVerificationSessions_Min_Fields = {
  __typename?: 'StripeVerificationSessions_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  /** local uuid for the table */
  id?: Maybe<Scalars['uuid']>;
  /** unique ID for the initiated Stripe Identity verification session */
  sessionId?: Maybe<Scalars['String']>;
  /** last error in human readable format */
  sessionLastErrorMessage?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** uuid of the participant of the session */
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "stripe_verification_sessions" */
export type StripeVerificationSessions_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  /** local uuid for the table */
  id?: InputMaybe<Order_By>;
  /** unique ID for the initiated Stripe Identity verification session */
  sessionId?: InputMaybe<Order_By>;
  /** last error in human readable format */
  sessionLastErrorMessage?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  /** uuid of the participant of the session */
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "stripe_verification_sessions" */
export type StripeVerificationSessions_Mutation_Response = {
  __typename?: 'StripeVerificationSessions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<StripeVerificationSessions>;
};

/** input type for inserting object relation for remote table "stripe_verification_sessions" */
export type StripeVerificationSessions_Obj_Rel_Insert_Input = {
  data: StripeVerificationSessions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<StripeVerificationSessions_On_Conflict>;
};

/** on_conflict condition type for table "stripe_verification_sessions" */
export type StripeVerificationSessions_On_Conflict = {
  constraint: StripeVerificationSessions_Constraint;
  update_columns?: Array<StripeVerificationSessions_Update_Column>;
  where?: InputMaybe<StripeVerificationSessions_Bool_Exp>;
};

/** Ordering options when selecting data from "stripe_verification_sessions". */
export type StripeVerificationSessions_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionId?: InputMaybe<Order_By>;
  sessionLastErrorCode?: InputMaybe<Order_By>;
  sessionLastErrorMessage?: InputMaybe<Order_By>;
  sessionStatus?: InputMaybe<Order_By>;
  sessionType?: InputMaybe<Order_By>;
  stripeIdentitySessionErrorCodeEnum?: InputMaybe<StripeIdentitySessionErrorCodeEnums_Order_By>;
  stripeIdentitySessionStatusEnum?: InputMaybe<StripeIdentitySessionStatusEnums_Order_By>;
  stripeIdentitySessionTypeEnum?: InputMaybe<StripeIdentitySessionTypeEnums_Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
  userIdentities_aggregate?: InputMaybe<UserIdentities_Aggregate_Order_By>;
};

/** primary key columns input for table: stripe_verification_sessions */
export type StripeVerificationSessions_Pk_Columns_Input = {
  /** local uuid for the table */
  id: Scalars['uuid'];
};

/** select columns of table "stripe_verification_sessions" */
export enum StripeVerificationSessions_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  SessionId = 'sessionId',
  /** column name */
  SessionLastErrorCode = 'sessionLastErrorCode',
  /** column name */
  SessionLastErrorMessage = 'sessionLastErrorMessage',
  /** column name */
  SessionStatus = 'sessionStatus',
  /** column name */
  SessionType = 'sessionType',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "stripe_verification_sessions" */
export type StripeVerificationSessions_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  /** local uuid for the table */
  id?: InputMaybe<Scalars['uuid']>;
  /** unique ID for the initiated Stripe Identity verification session */
  sessionId?: InputMaybe<Scalars['String']>;
  /** machine-readable error code if a check has failed */
  sessionLastErrorCode?: InputMaybe<StripeIdentitySessionErrorCodeEnums_Enum>;
  /** last error in human readable format */
  sessionLastErrorMessage?: InputMaybe<Scalars['String']>;
  /** status of the initiated Stripe Identity verification session */
  sessionStatus?: InputMaybe<StripeIdentitySessionStatusEnums_Enum>;
  /** type of verification session initiated */
  sessionType?: InputMaybe<StripeIdentitySessionTypeEnums_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  /** uuid of the participant of the session */
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "StripeVerificationSessions" */
export type StripeVerificationSessions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: StripeVerificationSessions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type StripeVerificationSessions_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  /** local uuid for the table */
  id?: InputMaybe<Scalars['uuid']>;
  /** unique ID for the initiated Stripe Identity verification session */
  sessionId?: InputMaybe<Scalars['String']>;
  /** machine-readable error code if a check has failed */
  sessionLastErrorCode?: InputMaybe<StripeIdentitySessionErrorCodeEnums_Enum>;
  /** last error in human readable format */
  sessionLastErrorMessage?: InputMaybe<Scalars['String']>;
  /** status of the initiated Stripe Identity verification session */
  sessionStatus?: InputMaybe<StripeIdentitySessionStatusEnums_Enum>;
  /** type of verification session initiated */
  sessionType?: InputMaybe<StripeIdentitySessionTypeEnums_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  /** uuid of the participant of the session */
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "stripe_verification_sessions" */
export enum StripeVerificationSessions_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  SessionId = 'sessionId',
  /** column name */
  SessionLastErrorCode = 'sessionLastErrorCode',
  /** column name */
  SessionLastErrorMessage = 'sessionLastErrorMessage',
  /** column name */
  SessionStatus = 'sessionStatus',
  /** column name */
  SessionType = 'sessionType',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type StripeVerificationSessions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<StripeVerificationSessions_Set_Input>;
  where: StripeVerificationSessions_Bool_Exp;
};

/** columns and relationships of "survey_responses" */
export type SurveyResponses = {
  __typename?: 'SurveyResponses';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  passedValidation?: Maybe<Scalars['Boolean']>;
  qualtricsResponseId: Scalars['String'];
  /** An object relationship */
  survey: Surveys;
  surveyUrl: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "survey_responses" */
export type SurveyResponses_Aggregate = {
  __typename?: 'SurveyResponses_aggregate';
  aggregate?: Maybe<SurveyResponses_Aggregate_Fields>;
  nodes: Array<SurveyResponses>;
};

/** aggregate fields of "survey_responses" */
export type SurveyResponses_Aggregate_Fields = {
  __typename?: 'SurveyResponses_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<SurveyResponses_Max_Fields>;
  min?: Maybe<SurveyResponses_Min_Fields>;
};


/** aggregate fields of "survey_responses" */
export type SurveyResponses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<SurveyResponses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "survey_responses" */
export type SurveyResponses_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<SurveyResponses_Max_Order_By>;
  min?: InputMaybe<SurveyResponses_Min_Order_By>;
};

/** input type for inserting array relation for remote table "survey_responses" */
export type SurveyResponses_Arr_Rel_Insert_Input = {
  data: Array<SurveyResponses_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<SurveyResponses_On_Conflict>;
};

/** Boolean expression to filter rows from the table "survey_responses". All fields are combined with a logical 'AND'. */
export type SurveyResponses_Bool_Exp = {
  _and?: InputMaybe<Array<SurveyResponses_Bool_Exp>>;
  _not?: InputMaybe<SurveyResponses_Bool_Exp>;
  _or?: InputMaybe<Array<SurveyResponses_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  passedValidation?: InputMaybe<Boolean_Comparison_Exp>;
  qualtricsResponseId?: InputMaybe<String_Comparison_Exp>;
  survey?: InputMaybe<Surveys_Bool_Exp>;
  surveyUrl?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "survey_responses" */
export enum SurveyResponses_Constraint {
  /** unique or primary key constraint on columns "id" */
  SurveyResponsesPkey = 'survey_responses_pkey',
  /** unique or primary key constraint on columns "qualtrics_response_id" */
  SurveyResponsesQualtricsResponseIdKey = 'survey_responses_qualtrics_response_id_key',
  /** unique or primary key constraint on columns "survey_url", "user_id" */
  SurveyResponsesUserIdSurveyUrlKey = 'survey_responses_user_id_survey_url_key'
}

/** input type for inserting data into table "survey_responses" */
export type SurveyResponses_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  passedValidation?: InputMaybe<Scalars['Boolean']>;
  qualtricsResponseId?: InputMaybe<Scalars['String']>;
  survey?: InputMaybe<Surveys_Obj_Rel_Insert_Input>;
  surveyUrl?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type SurveyResponses_Max_Fields = {
  __typename?: 'SurveyResponses_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  qualtricsResponseId?: Maybe<Scalars['String']>;
  surveyUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "survey_responses" */
export type SurveyResponses_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  qualtricsResponseId?: InputMaybe<Order_By>;
  surveyUrl?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type SurveyResponses_Min_Fields = {
  __typename?: 'SurveyResponses_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  qualtricsResponseId?: Maybe<Scalars['String']>;
  surveyUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "survey_responses" */
export type SurveyResponses_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  qualtricsResponseId?: InputMaybe<Order_By>;
  surveyUrl?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "survey_responses" */
export type SurveyResponses_Mutation_Response = {
  __typename?: 'SurveyResponses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<SurveyResponses>;
};

/** on_conflict condition type for table "survey_responses" */
export type SurveyResponses_On_Conflict = {
  constraint: SurveyResponses_Constraint;
  update_columns?: Array<SurveyResponses_Update_Column>;
  where?: InputMaybe<SurveyResponses_Bool_Exp>;
};

/** Ordering options when selecting data from "survey_responses". */
export type SurveyResponses_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  passedValidation?: InputMaybe<Order_By>;
  qualtricsResponseId?: InputMaybe<Order_By>;
  survey?: InputMaybe<Surveys_Order_By>;
  surveyUrl?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: survey_responses */
export type SurveyResponses_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "survey_responses" */
export enum SurveyResponses_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PassedValidation = 'passedValidation',
  /** column name */
  QualtricsResponseId = 'qualtricsResponseId',
  /** column name */
  SurveyUrl = 'surveyUrl',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "survey_responses" */
export type SurveyResponses_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  passedValidation?: InputMaybe<Scalars['Boolean']>;
  qualtricsResponseId?: InputMaybe<Scalars['String']>;
  surveyUrl?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "SurveyResponses" */
export type SurveyResponses_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: SurveyResponses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type SurveyResponses_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  passedValidation?: InputMaybe<Scalars['Boolean']>;
  qualtricsResponseId?: InputMaybe<Scalars['String']>;
  surveyUrl?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "survey_responses" */
export enum SurveyResponses_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PassedValidation = 'passedValidation',
  /** column name */
  QualtricsResponseId = 'qualtricsResponseId',
  /** column name */
  SurveyUrl = 'surveyUrl',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type SurveyResponses_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<SurveyResponses_Set_Input>;
  where: SurveyResponses_Bool_Exp;
};

/** columns and relationships of "surveys" */
export type Surveys = {
  __typename?: 'Surveys';
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  fireboaProjectModule?: Maybe<FireboaProjectsModules>;
  fireboaProjectModuleId?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  /** An array relationship */
  surveyResponses: Array<SurveyResponses>;
  surveyResponsesUrl: Scalars['String'];
  /** An aggregate relationship */
  surveyResponses_aggregate: SurveyResponses_Aggregate;
  surveyUrl: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "surveys" */
export type SurveysSurveyResponsesArgs = {
  distinct_on?: InputMaybe<Array<SurveyResponses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SurveyResponses_Order_By>>;
  where?: InputMaybe<SurveyResponses_Bool_Exp>;
};


/** columns and relationships of "surveys" */
export type SurveysSurveyResponses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<SurveyResponses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SurveyResponses_Order_By>>;
  where?: InputMaybe<SurveyResponses_Bool_Exp>;
};

/** aggregated selection of "surveys" */
export type Surveys_Aggregate = {
  __typename?: 'Surveys_aggregate';
  aggregate?: Maybe<Surveys_Aggregate_Fields>;
  nodes: Array<Surveys>;
};

/** aggregate fields of "surveys" */
export type Surveys_Aggregate_Fields = {
  __typename?: 'Surveys_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Surveys_Max_Fields>;
  min?: Maybe<Surveys_Min_Fields>;
};


/** aggregate fields of "surveys" */
export type Surveys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Surveys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "surveys" */
export type Surveys_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Surveys_Max_Order_By>;
  min?: InputMaybe<Surveys_Min_Order_By>;
};

/** input type for inserting array relation for remote table "surveys" */
export type Surveys_Arr_Rel_Insert_Input = {
  data: Array<Surveys_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Surveys_On_Conflict>;
};

/** Boolean expression to filter rows from the table "surveys". All fields are combined with a logical 'AND'. */
export type Surveys_Bool_Exp = {
  _and?: InputMaybe<Array<Surveys_Bool_Exp>>;
  _not?: InputMaybe<Surveys_Bool_Exp>;
  _or?: InputMaybe<Array<Surveys_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  fireboaProjectModule?: InputMaybe<FireboaProjectsModules_Bool_Exp>;
  fireboaProjectModuleId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  surveyResponses?: InputMaybe<SurveyResponses_Bool_Exp>;
  surveyResponsesUrl?: InputMaybe<String_Comparison_Exp>;
  surveyUrl?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "surveys" */
export enum Surveys_Constraint {
  /** unique or primary key constraint on columns "id" */
  SurveysPkey = 'surveys_pkey',
  /** unique or primary key constraint on columns "survey_url" */
  SurveysSurveyUrlKey = 'surveys_survey_url_key'
}

/** input type for inserting data into table "surveys" */
export type Surveys_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  fireboaProjectModule?: InputMaybe<FireboaProjectsModules_Obj_Rel_Insert_Input>;
  fireboaProjectModuleId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  surveyResponses?: InputMaybe<SurveyResponses_Arr_Rel_Insert_Input>;
  surveyResponsesUrl?: InputMaybe<Scalars['String']>;
  surveyUrl?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Surveys_Max_Fields = {
  __typename?: 'Surveys_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  fireboaProjectModuleId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  surveyResponsesUrl?: Maybe<Scalars['String']>;
  surveyUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "surveys" */
export type Surveys_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  fireboaProjectModuleId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  surveyResponsesUrl?: InputMaybe<Order_By>;
  surveyUrl?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Surveys_Min_Fields = {
  __typename?: 'Surveys_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  fireboaProjectModuleId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  surveyResponsesUrl?: Maybe<Scalars['String']>;
  surveyUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "surveys" */
export type Surveys_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  fireboaProjectModuleId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  surveyResponsesUrl?: InputMaybe<Order_By>;
  surveyUrl?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "surveys" */
export type Surveys_Mutation_Response = {
  __typename?: 'Surveys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Surveys>;
};

/** input type for inserting object relation for remote table "surveys" */
export type Surveys_Obj_Rel_Insert_Input = {
  data: Surveys_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Surveys_On_Conflict>;
};

/** on_conflict condition type for table "surveys" */
export type Surveys_On_Conflict = {
  constraint: Surveys_Constraint;
  update_columns?: Array<Surveys_Update_Column>;
  where?: InputMaybe<Surveys_Bool_Exp>;
};

/** Ordering options when selecting data from "surveys". */
export type Surveys_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  fireboaProjectModule?: InputMaybe<FireboaProjectsModules_Order_By>;
  fireboaProjectModuleId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  surveyResponsesUrl?: InputMaybe<Order_By>;
  surveyResponses_aggregate?: InputMaybe<SurveyResponses_Aggregate_Order_By>;
  surveyUrl?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: surveys */
export type Surveys_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "surveys" */
export enum Surveys_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FireboaProjectModuleId = 'fireboaProjectModuleId',
  /** column name */
  Id = 'id',
  /** column name */
  SurveyResponsesUrl = 'surveyResponsesUrl',
  /** column name */
  SurveyUrl = 'surveyUrl',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "surveys" */
export type Surveys_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  fireboaProjectModuleId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  surveyResponsesUrl?: InputMaybe<Scalars['String']>;
  surveyUrl?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "Surveys" */
export type Surveys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Surveys_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Surveys_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  fireboaProjectModuleId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  surveyResponsesUrl?: InputMaybe<Scalars['String']>;
  surveyUrl?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "surveys" */
export enum Surveys_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FireboaProjectModuleId = 'fireboaProjectModuleId',
  /** column name */
  Id = 'id',
  /** column name */
  SurveyResponsesUrl = 'surveyResponsesUrl',
  /** column name */
  SurveyUrl = 'surveyUrl',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Surveys_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Surveys_Set_Input>;
  where: Surveys_Bool_Exp;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

/** A users legal information as verified by a 3rd party */
export type UserIdentities = {
  __typename?: 'UserIdentities';
  createdAt?: Maybe<Scalars['timestamptz']>;
  /** Local uuid for the table */
  id: Scalars['uuid'];
  /** An object relationship */
  identitiesLegalIdTypeEnum: IdentitiesLegalIdTypeEnums;
  /** First name of user-supplied document, verified by 3rd party */
  legalFirstName?: Maybe<Scalars['String']>;
  /** Issuing country code */
  legalIdCountry?: Maybe<Scalars['String']>;
  /** ID number of user-supplied document, verified by 3rd party */
  legalIdNumber?: Maybe<Scalars['String']>;
  /** The type of id number supplied (includes country code as a prefix) */
  legalIdNumberType?: Maybe<Scalars['String']>;
  /** The document type that the user supplied, verified by 3rd party */
  legalIdType: IdentitiesLegalIdTypeEnums_Enum;
  /** Last name of user-supplied document, verified by 3rd party */
  legalLastName?: Maybe<Scalars['String']>;
  /** Local zip code from the document */
  legalZipCode?: Maybe<Scalars['String']>;
  /** An object relationship */
  stripeVerificationSession: StripeVerificationSessions;
  /** Stripe source session ID that was used to build this information */
  stripeVerificationSessionId: Scalars['String'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  /** The uuid of user attached to this identity */
  userID: Scalars['uuid'];
};

/** aggregated selection of "user_identities" */
export type UserIdentities_Aggregate = {
  __typename?: 'UserIdentities_aggregate';
  aggregate?: Maybe<UserIdentities_Aggregate_Fields>;
  nodes: Array<UserIdentities>;
};

/** aggregate fields of "user_identities" */
export type UserIdentities_Aggregate_Fields = {
  __typename?: 'UserIdentities_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<UserIdentities_Max_Fields>;
  min?: Maybe<UserIdentities_Min_Fields>;
};


/** aggregate fields of "user_identities" */
export type UserIdentities_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<UserIdentities_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_identities" */
export type UserIdentities_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<UserIdentities_Max_Order_By>;
  min?: InputMaybe<UserIdentities_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_identities" */
export type UserIdentities_Arr_Rel_Insert_Input = {
  data: Array<UserIdentities_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<UserIdentities_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_identities". All fields are combined with a logical 'AND'. */
export type UserIdentities_Bool_Exp = {
  _and?: InputMaybe<Array<UserIdentities_Bool_Exp>>;
  _not?: InputMaybe<UserIdentities_Bool_Exp>;
  _or?: InputMaybe<Array<UserIdentities_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  identitiesLegalIdTypeEnum?: InputMaybe<IdentitiesLegalIdTypeEnums_Bool_Exp>;
  legalFirstName?: InputMaybe<String_Comparison_Exp>;
  legalIdCountry?: InputMaybe<String_Comparison_Exp>;
  legalIdNumber?: InputMaybe<String_Comparison_Exp>;
  legalIdNumberType?: InputMaybe<String_Comparison_Exp>;
  legalIdType?: InputMaybe<IdentitiesLegalIdTypeEnums_Enum_Comparison_Exp>;
  legalLastName?: InputMaybe<String_Comparison_Exp>;
  legalZipCode?: InputMaybe<String_Comparison_Exp>;
  stripeVerificationSession?: InputMaybe<StripeVerificationSessions_Bool_Exp>;
  stripeVerificationSessionId?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userID?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_identities" */
export enum UserIdentities_Constraint {
  /** unique or primary key constraint on columns "legal_id_country", "legal_id_number", "legal_id_type" */
  UserIdentitiesLegalIdNumberLegalIdTypeLegalIdCounKey = 'user_identities_legal_id_number_legal_id_type_legal_id_coun_key',
  /** unique or primary key constraint on columns "id" */
  UserIdentitiesPkey = 'user_identities_pkey'
}

/** input type for inserting data into table "user_identities" */
export type UserIdentities_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  /** Local uuid for the table */
  id?: InputMaybe<Scalars['uuid']>;
  identitiesLegalIdTypeEnum?: InputMaybe<IdentitiesLegalIdTypeEnums_Obj_Rel_Insert_Input>;
  /** First name of user-supplied document, verified by 3rd party */
  legalFirstName?: InputMaybe<Scalars['String']>;
  /** Issuing country code */
  legalIdCountry?: InputMaybe<Scalars['String']>;
  /** ID number of user-supplied document, verified by 3rd party */
  legalIdNumber?: InputMaybe<Scalars['String']>;
  /** The type of id number supplied (includes country code as a prefix) */
  legalIdNumberType?: InputMaybe<Scalars['String']>;
  /** The document type that the user supplied, verified by 3rd party */
  legalIdType?: InputMaybe<IdentitiesLegalIdTypeEnums_Enum>;
  /** Last name of user-supplied document, verified by 3rd party */
  legalLastName?: InputMaybe<Scalars['String']>;
  /** Local zip code from the document */
  legalZipCode?: InputMaybe<Scalars['String']>;
  stripeVerificationSession?: InputMaybe<StripeVerificationSessions_Obj_Rel_Insert_Input>;
  /** Stripe source session ID that was used to build this information */
  stripeVerificationSessionId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  /** The uuid of user attached to this identity */
  userID?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type UserIdentities_Max_Fields = {
  __typename?: 'UserIdentities_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  /** Local uuid for the table */
  id?: Maybe<Scalars['uuid']>;
  /** First name of user-supplied document, verified by 3rd party */
  legalFirstName?: Maybe<Scalars['String']>;
  /** Issuing country code */
  legalIdCountry?: Maybe<Scalars['String']>;
  /** ID number of user-supplied document, verified by 3rd party */
  legalIdNumber?: Maybe<Scalars['String']>;
  /** The type of id number supplied (includes country code as a prefix) */
  legalIdNumberType?: Maybe<Scalars['String']>;
  /** Last name of user-supplied document, verified by 3rd party */
  legalLastName?: Maybe<Scalars['String']>;
  /** Local zip code from the document */
  legalZipCode?: Maybe<Scalars['String']>;
  /** Stripe source session ID that was used to build this information */
  stripeVerificationSessionId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** The uuid of user attached to this identity */
  userID?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_identities" */
export type UserIdentities_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  /** Local uuid for the table */
  id?: InputMaybe<Order_By>;
  /** First name of user-supplied document, verified by 3rd party */
  legalFirstName?: InputMaybe<Order_By>;
  /** Issuing country code */
  legalIdCountry?: InputMaybe<Order_By>;
  /** ID number of user-supplied document, verified by 3rd party */
  legalIdNumber?: InputMaybe<Order_By>;
  /** The type of id number supplied (includes country code as a prefix) */
  legalIdNumberType?: InputMaybe<Order_By>;
  /** Last name of user-supplied document, verified by 3rd party */
  legalLastName?: InputMaybe<Order_By>;
  /** Local zip code from the document */
  legalZipCode?: InputMaybe<Order_By>;
  /** Stripe source session ID that was used to build this information */
  stripeVerificationSessionId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  /** The uuid of user attached to this identity */
  userID?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type UserIdentities_Min_Fields = {
  __typename?: 'UserIdentities_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  /** Local uuid for the table */
  id?: Maybe<Scalars['uuid']>;
  /** First name of user-supplied document, verified by 3rd party */
  legalFirstName?: Maybe<Scalars['String']>;
  /** Issuing country code */
  legalIdCountry?: Maybe<Scalars['String']>;
  /** ID number of user-supplied document, verified by 3rd party */
  legalIdNumber?: Maybe<Scalars['String']>;
  /** The type of id number supplied (includes country code as a prefix) */
  legalIdNumberType?: Maybe<Scalars['String']>;
  /** Last name of user-supplied document, verified by 3rd party */
  legalLastName?: Maybe<Scalars['String']>;
  /** Local zip code from the document */
  legalZipCode?: Maybe<Scalars['String']>;
  /** Stripe source session ID that was used to build this information */
  stripeVerificationSessionId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** The uuid of user attached to this identity */
  userID?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_identities" */
export type UserIdentities_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  /** Local uuid for the table */
  id?: InputMaybe<Order_By>;
  /** First name of user-supplied document, verified by 3rd party */
  legalFirstName?: InputMaybe<Order_By>;
  /** Issuing country code */
  legalIdCountry?: InputMaybe<Order_By>;
  /** ID number of user-supplied document, verified by 3rd party */
  legalIdNumber?: InputMaybe<Order_By>;
  /** The type of id number supplied (includes country code as a prefix) */
  legalIdNumberType?: InputMaybe<Order_By>;
  /** Last name of user-supplied document, verified by 3rd party */
  legalLastName?: InputMaybe<Order_By>;
  /** Local zip code from the document */
  legalZipCode?: InputMaybe<Order_By>;
  /** Stripe source session ID that was used to build this information */
  stripeVerificationSessionId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  /** The uuid of user attached to this identity */
  userID?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_identities" */
export type UserIdentities_Mutation_Response = {
  __typename?: 'UserIdentities_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<UserIdentities>;
};

/** on_conflict condition type for table "user_identities" */
export type UserIdentities_On_Conflict = {
  constraint: UserIdentities_Constraint;
  update_columns?: Array<UserIdentities_Update_Column>;
  where?: InputMaybe<UserIdentities_Bool_Exp>;
};

/** Ordering options when selecting data from "user_identities". */
export type UserIdentities_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  identitiesLegalIdTypeEnum?: InputMaybe<IdentitiesLegalIdTypeEnums_Order_By>;
  legalFirstName?: InputMaybe<Order_By>;
  legalIdCountry?: InputMaybe<Order_By>;
  legalIdNumber?: InputMaybe<Order_By>;
  legalIdNumberType?: InputMaybe<Order_By>;
  legalIdType?: InputMaybe<Order_By>;
  legalLastName?: InputMaybe<Order_By>;
  legalZipCode?: InputMaybe<Order_By>;
  stripeVerificationSession?: InputMaybe<StripeVerificationSessions_Order_By>;
  stripeVerificationSessionId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userID?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_identities */
export type UserIdentities_Pk_Columns_Input = {
  /** Local uuid for the table */
  id: Scalars['uuid'];
};

/** select columns of table "user_identities" */
export enum UserIdentities_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  LegalFirstName = 'legalFirstName',
  /** column name */
  LegalIdCountry = 'legalIdCountry',
  /** column name */
  LegalIdNumber = 'legalIdNumber',
  /** column name */
  LegalIdNumberType = 'legalIdNumberType',
  /** column name */
  LegalIdType = 'legalIdType',
  /** column name */
  LegalLastName = 'legalLastName',
  /** column name */
  LegalZipCode = 'legalZipCode',
  /** column name */
  StripeVerificationSessionId = 'stripeVerificationSessionId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userID'
}

/** input type for updating data in table "user_identities" */
export type UserIdentities_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  /** Local uuid for the table */
  id?: InputMaybe<Scalars['uuid']>;
  /** First name of user-supplied document, verified by 3rd party */
  legalFirstName?: InputMaybe<Scalars['String']>;
  /** Issuing country code */
  legalIdCountry?: InputMaybe<Scalars['String']>;
  /** ID number of user-supplied document, verified by 3rd party */
  legalIdNumber?: InputMaybe<Scalars['String']>;
  /** The type of id number supplied (includes country code as a prefix) */
  legalIdNumberType?: InputMaybe<Scalars['String']>;
  /** The document type that the user supplied, verified by 3rd party */
  legalIdType?: InputMaybe<IdentitiesLegalIdTypeEnums_Enum>;
  /** Last name of user-supplied document, verified by 3rd party */
  legalLastName?: InputMaybe<Scalars['String']>;
  /** Local zip code from the document */
  legalZipCode?: InputMaybe<Scalars['String']>;
  /** Stripe source session ID that was used to build this information */
  stripeVerificationSessionId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  /** The uuid of user attached to this identity */
  userID?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "UserIdentities" */
export type UserIdentities_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: UserIdentities_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type UserIdentities_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  /** Local uuid for the table */
  id?: InputMaybe<Scalars['uuid']>;
  /** First name of user-supplied document, verified by 3rd party */
  legalFirstName?: InputMaybe<Scalars['String']>;
  /** Issuing country code */
  legalIdCountry?: InputMaybe<Scalars['String']>;
  /** ID number of user-supplied document, verified by 3rd party */
  legalIdNumber?: InputMaybe<Scalars['String']>;
  /** The type of id number supplied (includes country code as a prefix) */
  legalIdNumberType?: InputMaybe<Scalars['String']>;
  /** The document type that the user supplied, verified by 3rd party */
  legalIdType?: InputMaybe<IdentitiesLegalIdTypeEnums_Enum>;
  /** Last name of user-supplied document, verified by 3rd party */
  legalLastName?: InputMaybe<Scalars['String']>;
  /** Local zip code from the document */
  legalZipCode?: InputMaybe<Scalars['String']>;
  /** Stripe source session ID that was used to build this information */
  stripeVerificationSessionId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  /** The uuid of user attached to this identity */
  userID?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "user_identities" */
export enum UserIdentities_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  LegalFirstName = 'legalFirstName',
  /** column name */
  LegalIdCountry = 'legalIdCountry',
  /** column name */
  LegalIdNumber = 'legalIdNumber',
  /** column name */
  LegalIdNumberType = 'legalIdNumberType',
  /** column name */
  LegalIdType = 'legalIdType',
  /** column name */
  LegalLastName = 'legalLastName',
  /** column name */
  LegalZipCode = 'legalZipCode',
  /** column name */
  StripeVerificationSessionId = 'stripeVerificationSessionId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userID'
}

export type UserIdentities_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserIdentities_Set_Input>;
  where: UserIdentities_Bool_Exp;
};

/** columns and relationships of "user_module_progress_enum" */
export type UserModuleStatus = {
  __typename?: 'UserModuleStatus';
  description: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "user_module_progress_enum" */
export type UserModuleStatus_Aggregate = {
  __typename?: 'UserModuleStatus_aggregate';
  aggregate?: Maybe<UserModuleStatus_Aggregate_Fields>;
  nodes: Array<UserModuleStatus>;
};

/** aggregate fields of "user_module_progress_enum" */
export type UserModuleStatus_Aggregate_Fields = {
  __typename?: 'UserModuleStatus_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<UserModuleStatus_Max_Fields>;
  min?: Maybe<UserModuleStatus_Min_Fields>;
};


/** aggregate fields of "user_module_progress_enum" */
export type UserModuleStatus_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<UserModuleStatus_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_module_progress_enum". All fields are combined with a logical 'AND'. */
export type UserModuleStatus_Bool_Exp = {
  _and?: InputMaybe<Array<UserModuleStatus_Bool_Exp>>;
  _not?: InputMaybe<UserModuleStatus_Bool_Exp>;
  _or?: InputMaybe<Array<UserModuleStatus_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_module_progress_enum" */
export enum UserModuleStatus_Constraint {
  /** unique or primary key constraint on columns "value" */
  UserModuleProgressEnumPkey = 'user_module_progress_enum_pkey'
}

/** input type for inserting data into table "user_module_progress_enum" */
export type UserModuleStatus_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type UserModuleStatus_Max_Fields = {
  __typename?: 'UserModuleStatus_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type UserModuleStatus_Min_Fields = {
  __typename?: 'UserModuleStatus_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user_module_progress_enum" */
export type UserModuleStatus_Mutation_Response = {
  __typename?: 'UserModuleStatus_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<UserModuleStatus>;
};

/** on_conflict condition type for table "user_module_progress_enum" */
export type UserModuleStatus_On_Conflict = {
  constraint: UserModuleStatus_Constraint;
  update_columns?: Array<UserModuleStatus_Update_Column>;
  where?: InputMaybe<UserModuleStatus_Bool_Exp>;
};

/** Ordering options when selecting data from "user_module_progress_enum". */
export type UserModuleStatus_Order_By = {
  description?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_module_progress_enum */
export type UserModuleStatus_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "user_module_progress_enum" */
export enum UserModuleStatus_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "user_module_progress_enum" */
export type UserModuleStatus_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "UserModuleStatus" */
export type UserModuleStatus_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: UserModuleStatus_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type UserModuleStatus_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "user_module_progress_enum" */
export enum UserModuleStatus_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type UserModuleStatus_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserModuleStatus_Set_Input>;
  where: UserModuleStatus_Bool_Exp;
};

/** columns and relationships of "user_referrals" */
export type UserReferrals = {
  __typename?: 'UserReferrals';
  compensationIsComplete: Scalars['Boolean'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  referredUser: Users;
  referredUserId: Scalars['uuid'];
  /** An object relationship */
  referrer: Users;
  referrerId: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "user_referrals" */
export type UserReferrals_Aggregate = {
  __typename?: 'UserReferrals_aggregate';
  aggregate?: Maybe<UserReferrals_Aggregate_Fields>;
  nodes: Array<UserReferrals>;
};

/** aggregate fields of "user_referrals" */
export type UserReferrals_Aggregate_Fields = {
  __typename?: 'UserReferrals_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<UserReferrals_Max_Fields>;
  min?: Maybe<UserReferrals_Min_Fields>;
};


/** aggregate fields of "user_referrals" */
export type UserReferrals_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<UserReferrals_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_referrals" */
export type UserReferrals_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<UserReferrals_Max_Order_By>;
  min?: InputMaybe<UserReferrals_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_referrals" */
export type UserReferrals_Arr_Rel_Insert_Input = {
  data: Array<UserReferrals_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<UserReferrals_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_referrals". All fields are combined with a logical 'AND'. */
export type UserReferrals_Bool_Exp = {
  _and?: InputMaybe<Array<UserReferrals_Bool_Exp>>;
  _not?: InputMaybe<UserReferrals_Bool_Exp>;
  _or?: InputMaybe<Array<UserReferrals_Bool_Exp>>;
  compensationIsComplete?: InputMaybe<Boolean_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  referredUser?: InputMaybe<Users_Bool_Exp>;
  referredUserId?: InputMaybe<Uuid_Comparison_Exp>;
  referrer?: InputMaybe<Users_Bool_Exp>;
  referrerId?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_referrals" */
export enum UserReferrals_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserReferralsPkey = 'user_referrals_pkey',
  /** unique or primary key constraint on columns "referred_user_id" */
  UserReferralsReferredUserIdKey = 'user_referrals_referred_user_id_key'
}

/** input type for inserting data into table "user_referrals" */
export type UserReferrals_Insert_Input = {
  compensationIsComplete?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  referredUser?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  referredUserId?: InputMaybe<Scalars['uuid']>;
  referrer?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  referrerId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type UserReferrals_Max_Fields = {
  __typename?: 'UserReferrals_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  referredUserId?: Maybe<Scalars['uuid']>;
  referrerId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "user_referrals" */
export type UserReferrals_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  referredUserId?: InputMaybe<Order_By>;
  referrerId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type UserReferrals_Min_Fields = {
  __typename?: 'UserReferrals_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  referredUserId?: Maybe<Scalars['uuid']>;
  referrerId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "user_referrals" */
export type UserReferrals_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  referredUserId?: InputMaybe<Order_By>;
  referrerId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_referrals" */
export type UserReferrals_Mutation_Response = {
  __typename?: 'UserReferrals_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<UserReferrals>;
};

/** input type for inserting object relation for remote table "user_referrals" */
export type UserReferrals_Obj_Rel_Insert_Input = {
  data: UserReferrals_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<UserReferrals_On_Conflict>;
};

/** on_conflict condition type for table "user_referrals" */
export type UserReferrals_On_Conflict = {
  constraint: UserReferrals_Constraint;
  update_columns?: Array<UserReferrals_Update_Column>;
  where?: InputMaybe<UserReferrals_Bool_Exp>;
};

/** Ordering options when selecting data from "user_referrals". */
export type UserReferrals_Order_By = {
  compensationIsComplete?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  referredUser?: InputMaybe<Users_Order_By>;
  referredUserId?: InputMaybe<Order_By>;
  referrer?: InputMaybe<Users_Order_By>;
  referrerId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_referrals */
export type UserReferrals_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user_referrals" */
export enum UserReferrals_Select_Column {
  /** column name */
  CompensationIsComplete = 'compensationIsComplete',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ReferredUserId = 'referredUserId',
  /** column name */
  ReferrerId = 'referrerId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "user_referrals" */
export type UserReferrals_Set_Input = {
  compensationIsComplete?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  referredUserId?: InputMaybe<Scalars['uuid']>;
  referrerId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "UserReferrals" */
export type UserReferrals_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: UserReferrals_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type UserReferrals_Stream_Cursor_Value_Input = {
  compensationIsComplete?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  referredUserId?: InputMaybe<Scalars['uuid']>;
  referrerId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "user_referrals" */
export enum UserReferrals_Update_Column {
  /** column name */
  CompensationIsComplete = 'compensationIsComplete',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ReferredUserId = 'referredUserId',
  /** column name */
  ReferrerId = 'referrerId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type UserReferrals_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserReferrals_Set_Input>;
  where: UserReferrals_Bool_Exp;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'Users';
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  customer?: Maybe<Customers>;
  emailAddress: Scalars['String'];
  /** An array relationship */
  etxTaskSessions: Array<EtxTaskSessions>;
  /** An aggregate relationship */
  etxTaskSessions_aggregate: EtxTaskSessions_Aggregate;
  externalId: Scalars['String'];
  /** An array relationship */
  fireboaProjectModuleUsers: Array<FireboaProjectsModulesUsers>;
  /** An aggregate relationship */
  fireboaProjectModuleUsers_aggregate: FireboaProjectsModulesUsers_Aggregate;
  /** An array relationship */
  fireboaProjectsUsers: Array<FireboaProjectsUsers>;
  /** An aggregate relationship */
  fireboaProjectsUsers_aggregate: FireboaProjectsUsers_Aggregate;
  /** 0: not fraudulent; 1: unknown; 2: suspected fraudulent; 3: likely fraudulent; 4: confirmed fraudulent */
  fraudScore: Scalars['Int'];
  id: Scalars['uuid'];
  isSubscribedToNotifications: Scalars['Boolean'];
  /** An array relationship */
  managers: Array<Managers>;
  /** An aggregate relationship */
  managers_aggregate: Managers_Aggregate;
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  referralSource?: Maybe<Scalars['String']>;
  /** An array relationship */
  stripeVerificationSessions: Array<StripeVerificationSessions>;
  /** An aggregate relationship */
  stripeVerificationSessions_aggregate: StripeVerificationSessions_Aggregate;
  /** An array relationship */
  surveyResponses: Array<SurveyResponses>;
  /** An aggregate relationship */
  surveyResponses_aggregate: SurveyResponses_Aggregate;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  userIdentities: Array<UserIdentities>;
  /** An aggregate relationship */
  userIdentities_aggregate: UserIdentities_Aggregate;
  /** An object relationship */
  userReferralsReferredUser?: Maybe<UserReferrals>;
  /** An array relationship */
  userReferralsReferrer: Array<UserReferrals>;
  /** An aggregate relationship */
  userReferralsReferrer_aggregate: UserReferrals_Aggregate;
  /** An object relationship */
  userSupplementary?: Maybe<Users_Supplementary>;
  /** An array relationship */
  usersModules: Array<UsersModules>;
  /** An aggregate relationship */
  usersModules_aggregate: UsersModules_Aggregate;
  /** An array relationship */
  usersProjects: Array<Users_Projects>;
  /** An aggregate relationship */
  usersProjects_aggregate: Users_Projects_Aggregate;
  /** An array relationship */
  visualJudgementModuleResponses: Array<VisualJudgementModuleResponses>;
  /** An aggregate relationship */
  visualJudgementModuleResponses_aggregate: VisualJudgementModuleResponses_Aggregate;
  /** An object relationship */
  worker?: Maybe<Workers>;
};


/** columns and relationships of "users" */
export type UsersEtxTaskSessionsArgs = {
  distinct_on?: InputMaybe<Array<EtxTaskSessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EtxTaskSessions_Order_By>>;
  where?: InputMaybe<EtxTaskSessions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersEtxTaskSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<EtxTaskSessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EtxTaskSessions_Order_By>>;
  where?: InputMaybe<EtxTaskSessions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFireboaProjectModuleUsersArgs = {
  distinct_on?: InputMaybe<Array<FireboaProjectsModulesUsers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaProjectsModulesUsers_Order_By>>;
  where?: InputMaybe<FireboaProjectsModulesUsers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFireboaProjectModuleUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<FireboaProjectsModulesUsers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaProjectsModulesUsers_Order_By>>;
  where?: InputMaybe<FireboaProjectsModulesUsers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFireboaProjectsUsersArgs = {
  distinct_on?: InputMaybe<Array<FireboaProjectsUsers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaProjectsUsers_Order_By>>;
  where?: InputMaybe<FireboaProjectsUsers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFireboaProjectsUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<FireboaProjectsUsers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaProjectsUsers_Order_By>>;
  where?: InputMaybe<FireboaProjectsUsers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersManagersArgs = {
  distinct_on?: InputMaybe<Array<Managers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Managers_Order_By>>;
  where?: InputMaybe<Managers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersManagers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Managers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Managers_Order_By>>;
  where?: InputMaybe<Managers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersStripeVerificationSessionsArgs = {
  distinct_on?: InputMaybe<Array<StripeVerificationSessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StripeVerificationSessions_Order_By>>;
  where?: InputMaybe<StripeVerificationSessions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersStripeVerificationSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<StripeVerificationSessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StripeVerificationSessions_Order_By>>;
  where?: InputMaybe<StripeVerificationSessions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSurveyResponsesArgs = {
  distinct_on?: InputMaybe<Array<SurveyResponses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SurveyResponses_Order_By>>;
  where?: InputMaybe<SurveyResponses_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSurveyResponses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<SurveyResponses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SurveyResponses_Order_By>>;
  where?: InputMaybe<SurveyResponses_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUserIdentitiesArgs = {
  distinct_on?: InputMaybe<Array<UserIdentities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserIdentities_Order_By>>;
  where?: InputMaybe<UserIdentities_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUserIdentities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserIdentities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserIdentities_Order_By>>;
  where?: InputMaybe<UserIdentities_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUserReferralsReferrerArgs = {
  distinct_on?: InputMaybe<Array<UserReferrals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserReferrals_Order_By>>;
  where?: InputMaybe<UserReferrals_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUserReferralsReferrer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UserReferrals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserReferrals_Order_By>>;
  where?: InputMaybe<UserReferrals_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUsersModulesArgs = {
  distinct_on?: InputMaybe<Array<UsersModules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersModules_Order_By>>;
  where?: InputMaybe<UsersModules_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUsersModules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersModules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersModules_Order_By>>;
  where?: InputMaybe<UsersModules_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUsersProjectsArgs = {
  distinct_on?: InputMaybe<Array<Users_Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Projects_Order_By>>;
  where?: InputMaybe<Users_Projects_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUsersProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Projects_Order_By>>;
  where?: InputMaybe<Users_Projects_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersVisualJudgementModuleResponsesArgs = {
  distinct_on?: InputMaybe<Array<VisualJudgementModuleResponses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisualJudgementModuleResponses_Order_By>>;
  where?: InputMaybe<VisualJudgementModuleResponses_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersVisualJudgementModuleResponses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<VisualJudgementModuleResponses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisualJudgementModuleResponses_Order_By>>;
  where?: InputMaybe<VisualJudgementModuleResponses_Bool_Exp>;
};

/** Images for a user's profile */
export type UsersImages = {
  __typename?: 'UsersImages';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  imageURL: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "users_images" */
export type UsersImages_Aggregate = {
  __typename?: 'UsersImages_aggregate';
  aggregate?: Maybe<UsersImages_Aggregate_Fields>;
  nodes: Array<UsersImages>;
};

/** aggregate fields of "users_images" */
export type UsersImages_Aggregate_Fields = {
  __typename?: 'UsersImages_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<UsersImages_Max_Fields>;
  min?: Maybe<UsersImages_Min_Fields>;
};


/** aggregate fields of "users_images" */
export type UsersImages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<UsersImages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users_images". All fields are combined with a logical 'AND'. */
export type UsersImages_Bool_Exp = {
  _and?: InputMaybe<Array<UsersImages_Bool_Exp>>;
  _not?: InputMaybe<UsersImages_Bool_Exp>;
  _or?: InputMaybe<Array<UsersImages_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  imageURL?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "users_images" */
export enum UsersImages_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersImagesPkey = 'users_images_pkey'
}

/** input type for inserting data into table "users_images" */
export type UsersImages_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  imageURL?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type UsersImages_Max_Fields = {
  __typename?: 'UsersImages_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  imageURL?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type UsersImages_Min_Fields = {
  __typename?: 'UsersImages_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  imageURL?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "users_images" */
export type UsersImages_Mutation_Response = {
  __typename?: 'UsersImages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<UsersImages>;
};

/** on_conflict condition type for table "users_images" */
export type UsersImages_On_Conflict = {
  constraint: UsersImages_Constraint;
  update_columns?: Array<UsersImages_Update_Column>;
  where?: InputMaybe<UsersImages_Bool_Exp>;
};

/** Ordering options when selecting data from "users_images". */
export type UsersImages_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageURL?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users_images */
export type UsersImages_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users_images" */
export enum UsersImages_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageURL',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "users_images" */
export type UsersImages_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  imageURL?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "UsersImages" */
export type UsersImages_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: UsersImages_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type UsersImages_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  imageURL?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "users_images" */
export enum UsersImages_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageURL',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type UsersImages_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UsersImages_Set_Input>;
  where: UsersImages_Bool_Exp;
};

/** columns and relationships of "users_modules" */
export type UsersModules = {
  __typename?: 'UsersModules';
  createdAt: Scalars['timestamptz'];
  fileName?: Maybe<Scalars['String']>;
  fileSize: Scalars['bigint'];
  id: Scalars['uuid'];
  /** An object relationship */
  module: Modules;
  moduleId: Scalars['uuid'];
  progress?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** A module's data can consist of multiple files */
  urlNumber?: Maybe<Scalars['Int']>;
  urlToData: Scalars['String'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "users_modules" */
export type UsersModules_Aggregate = {
  __typename?: 'UsersModules_aggregate';
  aggregate?: Maybe<UsersModules_Aggregate_Fields>;
  nodes: Array<UsersModules>;
};

/** aggregate fields of "users_modules" */
export type UsersModules_Aggregate_Fields = {
  __typename?: 'UsersModules_aggregate_fields';
  avg?: Maybe<UsersModules_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<UsersModules_Max_Fields>;
  min?: Maybe<UsersModules_Min_Fields>;
  stddev?: Maybe<UsersModules_Stddev_Fields>;
  stddev_pop?: Maybe<UsersModules_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<UsersModules_Stddev_Samp_Fields>;
  sum?: Maybe<UsersModules_Sum_Fields>;
  var_pop?: Maybe<UsersModules_Var_Pop_Fields>;
  var_samp?: Maybe<UsersModules_Var_Samp_Fields>;
  variance?: Maybe<UsersModules_Variance_Fields>;
};


/** aggregate fields of "users_modules" */
export type UsersModules_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<UsersModules_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users_modules" */
export type UsersModules_Aggregate_Order_By = {
  avg?: InputMaybe<UsersModules_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<UsersModules_Max_Order_By>;
  min?: InputMaybe<UsersModules_Min_Order_By>;
  stddev?: InputMaybe<UsersModules_Stddev_Order_By>;
  stddev_pop?: InputMaybe<UsersModules_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<UsersModules_Stddev_Samp_Order_By>;
  sum?: InputMaybe<UsersModules_Sum_Order_By>;
  var_pop?: InputMaybe<UsersModules_Var_Pop_Order_By>;
  var_samp?: InputMaybe<UsersModules_Var_Samp_Order_By>;
  variance?: InputMaybe<UsersModules_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users_modules" */
export type UsersModules_Arr_Rel_Insert_Input = {
  data: Array<UsersModules_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<UsersModules_On_Conflict>;
};

/** aggregate avg on columns */
export type UsersModules_Avg_Fields = {
  __typename?: 'UsersModules_avg_fields';
  fileSize?: Maybe<Scalars['Float']>;
  /** A module's data can consist of multiple files */
  urlNumber?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "users_modules" */
export type UsersModules_Avg_Order_By = {
  fileSize?: InputMaybe<Order_By>;
  /** A module's data can consist of multiple files */
  urlNumber?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users_modules". All fields are combined with a logical 'AND'. */
export type UsersModules_Bool_Exp = {
  _and?: InputMaybe<Array<UsersModules_Bool_Exp>>;
  _not?: InputMaybe<UsersModules_Bool_Exp>;
  _or?: InputMaybe<Array<UsersModules_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  fileName?: InputMaybe<String_Comparison_Exp>;
  fileSize?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  module?: InputMaybe<Modules_Bool_Exp>;
  moduleId?: InputMaybe<Uuid_Comparison_Exp>;
  progress?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  urlNumber?: InputMaybe<Int_Comparison_Exp>;
  urlToData?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "users_modules" */
export enum UsersModules_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserServiceDataPkey = 'user_service_data_pkey'
}

/** input type for incrementing numeric columns in table "users_modules" */
export type UsersModules_Inc_Input = {
  fileSize?: InputMaybe<Scalars['bigint']>;
  /** A module's data can consist of multiple files */
  urlNumber?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "users_modules" */
export type UsersModules_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  fileName?: InputMaybe<Scalars['String']>;
  fileSize?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['uuid']>;
  module?: InputMaybe<Modules_Obj_Rel_Insert_Input>;
  moduleId?: InputMaybe<Scalars['uuid']>;
  progress?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  /** A module's data can consist of multiple files */
  urlNumber?: InputMaybe<Scalars['Int']>;
  urlToData?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type UsersModules_Max_Fields = {
  __typename?: 'UsersModules_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  fileName?: Maybe<Scalars['String']>;
  fileSize?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['uuid']>;
  moduleId?: Maybe<Scalars['uuid']>;
  progress?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** A module's data can consist of multiple files */
  urlNumber?: Maybe<Scalars['Int']>;
  urlToData?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "users_modules" */
export type UsersModules_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  fileName?: InputMaybe<Order_By>;
  fileSize?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  moduleId?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  /** A module's data can consist of multiple files */
  urlNumber?: InputMaybe<Order_By>;
  urlToData?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type UsersModules_Min_Fields = {
  __typename?: 'UsersModules_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  fileName?: Maybe<Scalars['String']>;
  fileSize?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['uuid']>;
  moduleId?: Maybe<Scalars['uuid']>;
  progress?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** A module's data can consist of multiple files */
  urlNumber?: Maybe<Scalars['Int']>;
  urlToData?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "users_modules" */
export type UsersModules_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  fileName?: InputMaybe<Order_By>;
  fileSize?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  moduleId?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  /** A module's data can consist of multiple files */
  urlNumber?: InputMaybe<Order_By>;
  urlToData?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users_modules" */
export type UsersModules_Mutation_Response = {
  __typename?: 'UsersModules_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<UsersModules>;
};

/** on_conflict condition type for table "users_modules" */
export type UsersModules_On_Conflict = {
  constraint: UsersModules_Constraint;
  update_columns?: Array<UsersModules_Update_Column>;
  where?: InputMaybe<UsersModules_Bool_Exp>;
};

/** Ordering options when selecting data from "users_modules". */
export type UsersModules_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  fileName?: InputMaybe<Order_By>;
  fileSize?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  module?: InputMaybe<Modules_Order_By>;
  moduleId?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  urlNumber?: InputMaybe<Order_By>;
  urlToData?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users_modules */
export type UsersModules_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users_modules" */
export enum UsersModules_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FileName = 'fileName',
  /** column name */
  FileSize = 'fileSize',
  /** column name */
  Id = 'id',
  /** column name */
  ModuleId = 'moduleId',
  /** column name */
  Progress = 'progress',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UrlNumber = 'urlNumber',
  /** column name */
  UrlToData = 'urlToData',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "users_modules" */
export type UsersModules_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  fileName?: InputMaybe<Scalars['String']>;
  fileSize?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['uuid']>;
  moduleId?: InputMaybe<Scalars['uuid']>;
  progress?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  /** A module's data can consist of multiple files */
  urlNumber?: InputMaybe<Scalars['Int']>;
  urlToData?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type UsersModules_Stddev_Fields = {
  __typename?: 'UsersModules_stddev_fields';
  fileSize?: Maybe<Scalars['Float']>;
  /** A module's data can consist of multiple files */
  urlNumber?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "users_modules" */
export type UsersModules_Stddev_Order_By = {
  fileSize?: InputMaybe<Order_By>;
  /** A module's data can consist of multiple files */
  urlNumber?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type UsersModules_Stddev_Pop_Fields = {
  __typename?: 'UsersModules_stddev_pop_fields';
  fileSize?: Maybe<Scalars['Float']>;
  /** A module's data can consist of multiple files */
  urlNumber?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "users_modules" */
export type UsersModules_Stddev_Pop_Order_By = {
  fileSize?: InputMaybe<Order_By>;
  /** A module's data can consist of multiple files */
  urlNumber?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type UsersModules_Stddev_Samp_Fields = {
  __typename?: 'UsersModules_stddev_samp_fields';
  fileSize?: Maybe<Scalars['Float']>;
  /** A module's data can consist of multiple files */
  urlNumber?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "users_modules" */
export type UsersModules_Stddev_Samp_Order_By = {
  fileSize?: InputMaybe<Order_By>;
  /** A module's data can consist of multiple files */
  urlNumber?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "UsersModules" */
export type UsersModules_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: UsersModules_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type UsersModules_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  fileName?: InputMaybe<Scalars['String']>;
  fileSize?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['uuid']>;
  moduleId?: InputMaybe<Scalars['uuid']>;
  progress?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  /** A module's data can consist of multiple files */
  urlNumber?: InputMaybe<Scalars['Int']>;
  urlToData?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type UsersModules_Sum_Fields = {
  __typename?: 'UsersModules_sum_fields';
  fileSize?: Maybe<Scalars['bigint']>;
  /** A module's data can consist of multiple files */
  urlNumber?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "users_modules" */
export type UsersModules_Sum_Order_By = {
  fileSize?: InputMaybe<Order_By>;
  /** A module's data can consist of multiple files */
  urlNumber?: InputMaybe<Order_By>;
};

/** update columns of table "users_modules" */
export enum UsersModules_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FileName = 'fileName',
  /** column name */
  FileSize = 'fileSize',
  /** column name */
  Id = 'id',
  /** column name */
  ModuleId = 'moduleId',
  /** column name */
  Progress = 'progress',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UrlNumber = 'urlNumber',
  /** column name */
  UrlToData = 'urlToData',
  /** column name */
  UserId = 'userId'
}

export type UsersModules_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<UsersModules_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UsersModules_Set_Input>;
  where: UsersModules_Bool_Exp;
};

/** aggregate var_pop on columns */
export type UsersModules_Var_Pop_Fields = {
  __typename?: 'UsersModules_var_pop_fields';
  fileSize?: Maybe<Scalars['Float']>;
  /** A module's data can consist of multiple files */
  urlNumber?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "users_modules" */
export type UsersModules_Var_Pop_Order_By = {
  fileSize?: InputMaybe<Order_By>;
  /** A module's data can consist of multiple files */
  urlNumber?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type UsersModules_Var_Samp_Fields = {
  __typename?: 'UsersModules_var_samp_fields';
  fileSize?: Maybe<Scalars['Float']>;
  /** A module's data can consist of multiple files */
  urlNumber?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "users_modules" */
export type UsersModules_Var_Samp_Order_By = {
  fileSize?: InputMaybe<Order_By>;
  /** A module's data can consist of multiple files */
  urlNumber?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type UsersModules_Variance_Fields = {
  __typename?: 'UsersModules_variance_fields';
  fileSize?: Maybe<Scalars['Float']>;
  /** A module's data can consist of multiple files */
  urlNumber?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "users_modules" */
export type UsersModules_Variance_Order_By = {
  fileSize?: InputMaybe<Order_By>;
  /** A module's data can consist of multiple files */
  urlNumber?: InputMaybe<Order_By>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'Users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'Users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'Users_avg_fields';
  /** 0: not fraudulent; 1: unknown; 2: suspected fraudulent; 3: likely fraudulent; 4: confirmed fraudulent */
  fraudScore?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  customer?: InputMaybe<Customers_Bool_Exp>;
  emailAddress?: InputMaybe<String_Comparison_Exp>;
  etxTaskSessions?: InputMaybe<EtxTaskSessions_Bool_Exp>;
  externalId?: InputMaybe<String_Comparison_Exp>;
  fireboaProjectModuleUsers?: InputMaybe<FireboaProjectsModulesUsers_Bool_Exp>;
  fireboaProjectsUsers?: InputMaybe<FireboaProjectsUsers_Bool_Exp>;
  fraudScore?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isSubscribedToNotifications?: InputMaybe<Boolean_Comparison_Exp>;
  managers?: InputMaybe<Managers_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  referralSource?: InputMaybe<String_Comparison_Exp>;
  stripeVerificationSessions?: InputMaybe<StripeVerificationSessions_Bool_Exp>;
  surveyResponses?: InputMaybe<SurveyResponses_Bool_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userIdentities?: InputMaybe<UserIdentities_Bool_Exp>;
  userReferralsReferredUser?: InputMaybe<UserReferrals_Bool_Exp>;
  userReferralsReferrer?: InputMaybe<UserReferrals_Bool_Exp>;
  userSupplementary?: InputMaybe<Users_Supplementary_Bool_Exp>;
  usersModules?: InputMaybe<UsersModules_Bool_Exp>;
  usersProjects?: InputMaybe<Users_Projects_Bool_Exp>;
  visualJudgementModuleResponses?: InputMaybe<VisualJudgementModuleResponses_Bool_Exp>;
  worker?: InputMaybe<Workers_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email_address" */
  UsersEmailAddressKey = 'users_email_address_key',
  /** unique or primary key constraint on columns "external_id" */
  UsersExternalIdKey = 'users_externalId_key',
  /** unique or primary key constraint on columns "phone_number" */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  /** 0: not fraudulent; 1: unknown; 2: suspected fraudulent; 3: likely fraudulent; 4: confirmed fraudulent */
  fraudScore?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  customer?: InputMaybe<Customers_Obj_Rel_Insert_Input>;
  emailAddress?: InputMaybe<Scalars['String']>;
  etxTaskSessions?: InputMaybe<EtxTaskSessions_Arr_Rel_Insert_Input>;
  externalId?: InputMaybe<Scalars['String']>;
  fireboaProjectModuleUsers?: InputMaybe<FireboaProjectsModulesUsers_Arr_Rel_Insert_Input>;
  fireboaProjectsUsers?: InputMaybe<FireboaProjectsUsers_Arr_Rel_Insert_Input>;
  /** 0: not fraudulent; 1: unknown; 2: suspected fraudulent; 3: likely fraudulent; 4: confirmed fraudulent */
  fraudScore?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  isSubscribedToNotifications?: InputMaybe<Scalars['Boolean']>;
  managers?: InputMaybe<Managers_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  referralSource?: InputMaybe<Scalars['String']>;
  stripeVerificationSessions?: InputMaybe<StripeVerificationSessions_Arr_Rel_Insert_Input>;
  surveyResponses?: InputMaybe<SurveyResponses_Arr_Rel_Insert_Input>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userIdentities?: InputMaybe<UserIdentities_Arr_Rel_Insert_Input>;
  userReferralsReferredUser?: InputMaybe<UserReferrals_Obj_Rel_Insert_Input>;
  userReferralsReferrer?: InputMaybe<UserReferrals_Arr_Rel_Insert_Input>;
  userSupplementary?: InputMaybe<Users_Supplementary_Obj_Rel_Insert_Input>;
  usersModules?: InputMaybe<UsersModules_Arr_Rel_Insert_Input>;
  usersProjects?: InputMaybe<Users_Projects_Arr_Rel_Insert_Input>;
  visualJudgementModuleResponses?: InputMaybe<VisualJudgementModuleResponses_Arr_Rel_Insert_Input>;
  worker?: InputMaybe<Workers_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'Users_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  emailAddress?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  /** 0: not fraudulent; 1: unknown; 2: suspected fraudulent; 3: likely fraudulent; 4: confirmed fraudulent */
  fraudScore?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  referralSource?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'Users_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  emailAddress?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  /** 0: not fraudulent; 1: unknown; 2: suspected fraudulent; 3: likely fraudulent; 4: confirmed fraudulent */
  fraudScore?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  referralSource?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'Users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  customer?: InputMaybe<Customers_Order_By>;
  emailAddress?: InputMaybe<Order_By>;
  etxTaskSessions_aggregate?: InputMaybe<EtxTaskSessions_Aggregate_Order_By>;
  externalId?: InputMaybe<Order_By>;
  fireboaProjectModuleUsers_aggregate?: InputMaybe<FireboaProjectsModulesUsers_Aggregate_Order_By>;
  fireboaProjectsUsers_aggregate?: InputMaybe<FireboaProjectsUsers_Aggregate_Order_By>;
  fraudScore?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isSubscribedToNotifications?: InputMaybe<Order_By>;
  managers_aggregate?: InputMaybe<Managers_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  referralSource?: InputMaybe<Order_By>;
  stripeVerificationSessions_aggregate?: InputMaybe<StripeVerificationSessions_Aggregate_Order_By>;
  surveyResponses_aggregate?: InputMaybe<SurveyResponses_Aggregate_Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userIdentities_aggregate?: InputMaybe<UserIdentities_Aggregate_Order_By>;
  userReferralsReferredUser?: InputMaybe<UserReferrals_Order_By>;
  userReferralsReferrer_aggregate?: InputMaybe<UserReferrals_Aggregate_Order_By>;
  userSupplementary?: InputMaybe<Users_Supplementary_Order_By>;
  usersModules_aggregate?: InputMaybe<UsersModules_Aggregate_Order_By>;
  usersProjects_aggregate?: InputMaybe<Users_Projects_Aggregate_Order_By>;
  visualJudgementModuleResponses_aggregate?: InputMaybe<VisualJudgementModuleResponses_Aggregate_Order_By>;
  worker?: InputMaybe<Workers_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EmailAddress = 'emailAddress',
  /** column name */
  ExternalId = 'externalId',
  /** column name */
  FraudScore = 'fraudScore',
  /** column name */
  Id = 'id',
  /** column name */
  IsSubscribedToNotifications = 'isSubscribedToNotifications',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  ReferralSource = 'referralSource',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  externalId?: InputMaybe<Scalars['String']>;
  /** 0: not fraudulent; 1: unknown; 2: suspected fraudulent; 3: likely fraudulent; 4: confirmed fraudulent */
  fraudScore?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  isSubscribedToNotifications?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  referralSource?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'Users_stddev_fields';
  /** 0: not fraudulent; 1: unknown; 2: suspected fraudulent; 3: likely fraudulent; 4: confirmed fraudulent */
  fraudScore?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'Users_stddev_pop_fields';
  /** 0: not fraudulent; 1: unknown; 2: suspected fraudulent; 3: likely fraudulent; 4: confirmed fraudulent */
  fraudScore?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'Users_stddev_samp_fields';
  /** 0: not fraudulent; 1: unknown; 2: suspected fraudulent; 3: likely fraudulent; 4: confirmed fraudulent */
  fraudScore?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "Users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  externalId?: InputMaybe<Scalars['String']>;
  /** 0: not fraudulent; 1: unknown; 2: suspected fraudulent; 3: likely fraudulent; 4: confirmed fraudulent */
  fraudScore?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  isSubscribedToNotifications?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  referralSource?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'Users_sum_fields';
  /** 0: not fraudulent; 1: unknown; 2: suspected fraudulent; 3: likely fraudulent; 4: confirmed fraudulent */
  fraudScore?: Maybe<Scalars['Int']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EmailAddress = 'emailAddress',
  /** column name */
  ExternalId = 'externalId',
  /** column name */
  FraudScore = 'fraudScore',
  /** column name */
  Id = 'id',
  /** column name */
  IsSubscribedToNotifications = 'isSubscribedToNotifications',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  ReferralSource = 'referralSource',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'Users_var_pop_fields';
  /** 0: not fraudulent; 1: unknown; 2: suspected fraudulent; 3: likely fraudulent; 4: confirmed fraudulent */
  fraudScore?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'Users_var_samp_fields';
  /** 0: not fraudulent; 1: unknown; 2: suspected fraudulent; 3: likely fraudulent; 4: confirmed fraudulent */
  fraudScore?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'Users_variance_fields';
  /** 0: not fraudulent; 1: unknown; 2: suspected fraudulent; 3: likely fraudulent; 4: confirmed fraudulent */
  fraudScore?: Maybe<Scalars['Float']>;
};

export type VanaConnectFaq = {
  __typename?: 'VanaConnectFaq';
  answer?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  moduleName?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  question?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type VanaConnectFaqEntity = {
  __typename?: 'VanaConnectFaqEntity';
  attributes?: Maybe<VanaConnectFaq>;
  id?: Maybe<Scalars['ID']>;
};

export type VanaConnectFaqEntityResponse = {
  __typename?: 'VanaConnectFaqEntityResponse';
  data?: Maybe<VanaConnectFaqEntity>;
};

export type VanaConnectFaqEntityResponseCollection = {
  __typename?: 'VanaConnectFaqEntityResponseCollection';
  data: Array<VanaConnectFaqEntity>;
  meta: ResponseCollectionMeta;
};

export type VanaConnectFaqFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<VanaConnectFaqFiltersInput>>>;
  answer?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  moduleName?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<VanaConnectFaqFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<VanaConnectFaqFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  question?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type VanaConnectFaqFiltersInput_Remote_Rel_Modulesfaqs = {
  and?: InputMaybe<Array<InputMaybe<VanaConnectFaqFiltersInput>>>;
  answer?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  moduleName?: InputMaybe<StringFilterInput_Remote_Rel_Modulesfaqs>;
  not?: InputMaybe<VanaConnectFaqFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<VanaConnectFaqFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  question?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type VanaConnectFaqInput = {
  answer?: InputMaybe<Scalars['String']>;
  moduleName?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  question?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "visual_judgement_module_responses" */
export type VisualJudgementModuleResponses = {
  __typename?: 'VisualJudgementModuleResponses';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  liked: Scalars['Boolean'];
  superLiked: Scalars['Boolean'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
  /** An object relationship */
  visualJudgementModuleImage: VisualJudgementModuleImages;
  visualJudgementModuleImageId: Scalars['uuid'];
};

/** aggregated selection of "visual_judgement_module_responses" */
export type VisualJudgementModuleResponses_Aggregate = {
  __typename?: 'VisualJudgementModuleResponses_aggregate';
  aggregate?: Maybe<VisualJudgementModuleResponses_Aggregate_Fields>;
  nodes: Array<VisualJudgementModuleResponses>;
};

/** aggregate fields of "visual_judgement_module_responses" */
export type VisualJudgementModuleResponses_Aggregate_Fields = {
  __typename?: 'VisualJudgementModuleResponses_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<VisualJudgementModuleResponses_Max_Fields>;
  min?: Maybe<VisualJudgementModuleResponses_Min_Fields>;
};


/** aggregate fields of "visual_judgement_module_responses" */
export type VisualJudgementModuleResponses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<VisualJudgementModuleResponses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "visual_judgement_module_responses" */
export type VisualJudgementModuleResponses_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<VisualJudgementModuleResponses_Max_Order_By>;
  min?: InputMaybe<VisualJudgementModuleResponses_Min_Order_By>;
};

/** input type for inserting array relation for remote table "visual_judgement_module_responses" */
export type VisualJudgementModuleResponses_Arr_Rel_Insert_Input = {
  data: Array<VisualJudgementModuleResponses_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<VisualJudgementModuleResponses_On_Conflict>;
};

/** Boolean expression to filter rows from the table "visual_judgement_module_responses". All fields are combined with a logical 'AND'. */
export type VisualJudgementModuleResponses_Bool_Exp = {
  _and?: InputMaybe<Array<VisualJudgementModuleResponses_Bool_Exp>>;
  _not?: InputMaybe<VisualJudgementModuleResponses_Bool_Exp>;
  _or?: InputMaybe<Array<VisualJudgementModuleResponses_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  liked?: InputMaybe<Boolean_Comparison_Exp>;
  superLiked?: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
  visualJudgementModuleImage?: InputMaybe<VisualJudgementModuleImages_Bool_Exp>;
  visualJudgementModuleImageId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "visual_judgement_module_responses" */
export enum VisualJudgementModuleResponses_Constraint {
  /** unique or primary key constraint on columns "id" */
  VisualJudgementModuleResponsesPkey = 'visual_judgement_module_responses_pkey',
  /** unique or primary key constraint on columns "visual_judgement_module_image_id", "user_id" */
  VisualJudgementModuleResponsesVisualJudgementModuleImage = 'visual_judgement_module_responses_visual_judgement_module_image'
}

/** input type for inserting data into table "visual_judgement_module_responses" */
export type VisualJudgementModuleResponses_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  liked?: InputMaybe<Scalars['Boolean']>;
  superLiked?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
  visualJudgementModuleImage?: InputMaybe<VisualJudgementModuleImages_Obj_Rel_Insert_Input>;
  visualJudgementModuleImageId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type VisualJudgementModuleResponses_Max_Fields = {
  __typename?: 'VisualJudgementModuleResponses_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  visualJudgementModuleImageId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "visual_judgement_module_responses" */
export type VisualJudgementModuleResponses_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  visualJudgementModuleImageId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type VisualJudgementModuleResponses_Min_Fields = {
  __typename?: 'VisualJudgementModuleResponses_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  visualJudgementModuleImageId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "visual_judgement_module_responses" */
export type VisualJudgementModuleResponses_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  visualJudgementModuleImageId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "visual_judgement_module_responses" */
export type VisualJudgementModuleResponses_Mutation_Response = {
  __typename?: 'VisualJudgementModuleResponses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<VisualJudgementModuleResponses>;
};

/** on_conflict condition type for table "visual_judgement_module_responses" */
export type VisualJudgementModuleResponses_On_Conflict = {
  constraint: VisualJudgementModuleResponses_Constraint;
  update_columns?: Array<VisualJudgementModuleResponses_Update_Column>;
  where?: InputMaybe<VisualJudgementModuleResponses_Bool_Exp>;
};

/** Ordering options when selecting data from "visual_judgement_module_responses". */
export type VisualJudgementModuleResponses_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  superLiked?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
  visualJudgementModuleImage?: InputMaybe<VisualJudgementModuleImages_Order_By>;
  visualJudgementModuleImageId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: visual_judgement_module_responses */
export type VisualJudgementModuleResponses_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "visual_judgement_module_responses" */
export enum VisualJudgementModuleResponses_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Liked = 'liked',
  /** column name */
  SuperLiked = 'superLiked',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
  /** column name */
  VisualJudgementModuleImageId = 'visualJudgementModuleImageId'
}

/** input type for updating data in table "visual_judgement_module_responses" */
export type VisualJudgementModuleResponses_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  liked?: InputMaybe<Scalars['Boolean']>;
  superLiked?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
  visualJudgementModuleImageId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "VisualJudgementModuleResponses" */
export type VisualJudgementModuleResponses_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: VisualJudgementModuleResponses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type VisualJudgementModuleResponses_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  liked?: InputMaybe<Scalars['Boolean']>;
  superLiked?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
  visualJudgementModuleImageId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "visual_judgement_module_responses" */
export enum VisualJudgementModuleResponses_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Liked = 'liked',
  /** column name */
  SuperLiked = 'superLiked',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
  /** column name */
  VisualJudgementModuleImageId = 'visualJudgementModuleImageId'
}

export type VisualJudgementModuleResponses_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<VisualJudgementModuleResponses_Set_Input>;
  where: VisualJudgementModuleResponses_Bool_Exp;
};

/** columns and relationships of "wallets" */
export type Wallets = {
  __typename?: 'Wallets';
  archived: Scalars['Boolean'];
  /** An array relationship */
  cashOutRequests: Array<CashOutRequests>;
  /** An aggregate relationship */
  cashOutRequests_aggregate: CashOutRequests_Aggregate;
  createdAt: Scalars['timestamptz'];
  current: Scalars['Boolean'];
  id: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  walletAddress: Scalars['String'];
  walletType: Scalars['String'];
  /** An object relationship */
  worker?: Maybe<Workers>;
  workerId?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "wallets" */
export type WalletsCashOutRequestsArgs = {
  distinct_on?: InputMaybe<Array<CashOutRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CashOutRequests_Order_By>>;
  where?: InputMaybe<CashOutRequests_Bool_Exp>;
};


/** columns and relationships of "wallets" */
export type WalletsCashOutRequests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CashOutRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CashOutRequests_Order_By>>;
  where?: InputMaybe<CashOutRequests_Bool_Exp>;
};

/** aggregated selection of "wallets" */
export type Wallets_Aggregate = {
  __typename?: 'Wallets_aggregate';
  aggregate?: Maybe<Wallets_Aggregate_Fields>;
  nodes: Array<Wallets>;
};

/** aggregate fields of "wallets" */
export type Wallets_Aggregate_Fields = {
  __typename?: 'Wallets_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Wallets_Max_Fields>;
  min?: Maybe<Wallets_Min_Fields>;
};


/** aggregate fields of "wallets" */
export type Wallets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Wallets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "wallets" */
export type Wallets_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Wallets_Max_Order_By>;
  min?: InputMaybe<Wallets_Min_Order_By>;
};

/** input type for inserting array relation for remote table "wallets" */
export type Wallets_Arr_Rel_Insert_Input = {
  data: Array<Wallets_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Wallets_On_Conflict>;
};

/** Boolean expression to filter rows from the table "wallets". All fields are combined with a logical 'AND'. */
export type Wallets_Bool_Exp = {
  _and?: InputMaybe<Array<Wallets_Bool_Exp>>;
  _not?: InputMaybe<Wallets_Bool_Exp>;
  _or?: InputMaybe<Array<Wallets_Bool_Exp>>;
  archived?: InputMaybe<Boolean_Comparison_Exp>;
  cashOutRequests?: InputMaybe<CashOutRequests_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  current?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  walletAddress?: InputMaybe<String_Comparison_Exp>;
  walletType?: InputMaybe<String_Comparison_Exp>;
  worker?: InputMaybe<Workers_Bool_Exp>;
  workerId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "wallets" */
export enum Wallets_Constraint {
  /** unique or primary key constraint on columns "id" */
  WalletAddressesPkey = 'wallet_addresses_pkey'
}

/** input type for inserting data into table "wallets" */
export type Wallets_Insert_Input = {
  archived?: InputMaybe<Scalars['Boolean']>;
  cashOutRequests?: InputMaybe<CashOutRequests_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  current?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  walletAddress?: InputMaybe<Scalars['String']>;
  walletType?: InputMaybe<Scalars['String']>;
  worker?: InputMaybe<Workers_Obj_Rel_Insert_Input>;
  workerId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Wallets_Max_Fields = {
  __typename?: 'Wallets_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  walletAddress?: Maybe<Scalars['String']>;
  walletType?: Maybe<Scalars['String']>;
  workerId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "wallets" */
export type Wallets_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  walletAddress?: InputMaybe<Order_By>;
  walletType?: InputMaybe<Order_By>;
  workerId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Wallets_Min_Fields = {
  __typename?: 'Wallets_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  walletAddress?: Maybe<Scalars['String']>;
  walletType?: Maybe<Scalars['String']>;
  workerId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "wallets" */
export type Wallets_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  walletAddress?: InputMaybe<Order_By>;
  walletType?: InputMaybe<Order_By>;
  workerId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "wallets" */
export type Wallets_Mutation_Response = {
  __typename?: 'Wallets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Wallets>;
};

/** input type for inserting object relation for remote table "wallets" */
export type Wallets_Obj_Rel_Insert_Input = {
  data: Wallets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Wallets_On_Conflict>;
};

/** on_conflict condition type for table "wallets" */
export type Wallets_On_Conflict = {
  constraint: Wallets_Constraint;
  update_columns?: Array<Wallets_Update_Column>;
  where?: InputMaybe<Wallets_Bool_Exp>;
};

/** Ordering options when selecting data from "wallets". */
export type Wallets_Order_By = {
  archived?: InputMaybe<Order_By>;
  cashOutRequests_aggregate?: InputMaybe<CashOutRequests_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  current?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  walletAddress?: InputMaybe<Order_By>;
  walletType?: InputMaybe<Order_By>;
  worker?: InputMaybe<Workers_Order_By>;
  workerId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: wallets */
export type Wallets_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "wallets" */
export enum Wallets_Select_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Current = 'current',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WalletAddress = 'walletAddress',
  /** column name */
  WalletType = 'walletType',
  /** column name */
  WorkerId = 'workerId'
}

/** input type for updating data in table "wallets" */
export type Wallets_Set_Input = {
  archived?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  current?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  walletAddress?: InputMaybe<Scalars['String']>;
  walletType?: InputMaybe<Scalars['String']>;
  workerId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "Wallets" */
export type Wallets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Wallets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Wallets_Stream_Cursor_Value_Input = {
  archived?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  current?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  walletAddress?: InputMaybe<Scalars['String']>;
  walletType?: InputMaybe<Scalars['String']>;
  workerId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "wallets" */
export enum Wallets_Update_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Current = 'current',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WalletAddress = 'walletAddress',
  /** column name */
  WalletType = 'walletType',
  /** column name */
  WorkerId = 'workerId'
}

export type Wallets_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Wallets_Set_Input>;
  where: Wallets_Bool_Exp;
};

/** columns and relationships of "workers" */
export type Workers = {
  __typename?: 'Workers';
  archived?: Maybe<Scalars['Boolean']>;
  cashOutLockTimestamp?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  cash_out_requests: Array<CashOutRequests>;
  /** An aggregate relationship */
  cash_out_requests_aggregate: CashOutRequests_Aggregate;
  cashedOut: Scalars['Int'];
  createdAt: Scalars['timestamptz'];
  currentAddress?: Maybe<Scalars['String']>;
  /** An array relationship */
  fireboaCashOutPreferredMethods: Array<FireboaCashOutPreferredMethods>;
  /** An aggregate relationship */
  fireboaCashOutPreferredMethods_aggregate: FireboaCashOutPreferredMethods_Aggregate;
  /** An array relationship */
  fireboaCashOutRequests: Array<FireboaCashOutRequests>;
  /** An aggregate relationship */
  fireboaCashOutRequests_aggregate: FireboaCashOutRequests_Aggregate;
  id: Scalars['uuid'];
  lastActive?: Maybe<Scalars['timestamptz']>;
  lastTransactionHash?: Maybe<Scalars['String']>;
  locked: Scalars['Boolean'];
  masterServicesAgreementAccepted: Scalars['Boolean'];
  mturkId?: Maybe<Scalars['String']>;
  numIncompleteTasks: Scalars['Int'];
  projectRecommendationAccepted: Scalars['Boolean'];
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  termsOfServiceAccepted: Scalars['Boolean'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
  /** An array relationship */
  wallets: Array<Wallets>;
  /** An aggregate relationship */
  wallets_aggregate: Wallets_Aggregate;
  /** An object relationship */
  workersSpotify?: Maybe<WorkersSpotify>;
};


/** columns and relationships of "workers" */
export type WorkersCash_Out_RequestsArgs = {
  distinct_on?: InputMaybe<Array<CashOutRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CashOutRequests_Order_By>>;
  where?: InputMaybe<CashOutRequests_Bool_Exp>;
};


/** columns and relationships of "workers" */
export type WorkersCash_Out_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CashOutRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CashOutRequests_Order_By>>;
  where?: InputMaybe<CashOutRequests_Bool_Exp>;
};


/** columns and relationships of "workers" */
export type WorkersFireboaCashOutPreferredMethodsArgs = {
  distinct_on?: InputMaybe<Array<FireboaCashOutPreferredMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaCashOutPreferredMethods_Order_By>>;
  where?: InputMaybe<FireboaCashOutPreferredMethods_Bool_Exp>;
};


/** columns and relationships of "workers" */
export type WorkersFireboaCashOutPreferredMethods_AggregateArgs = {
  distinct_on?: InputMaybe<Array<FireboaCashOutPreferredMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaCashOutPreferredMethods_Order_By>>;
  where?: InputMaybe<FireboaCashOutPreferredMethods_Bool_Exp>;
};


/** columns and relationships of "workers" */
export type WorkersFireboaCashOutRequestsArgs = {
  distinct_on?: InputMaybe<Array<FireboaCashOutRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaCashOutRequests_Order_By>>;
  where?: InputMaybe<FireboaCashOutRequests_Bool_Exp>;
};


/** columns and relationships of "workers" */
export type WorkersFireboaCashOutRequests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<FireboaCashOutRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaCashOutRequests_Order_By>>;
  where?: InputMaybe<FireboaCashOutRequests_Bool_Exp>;
};


/** columns and relationships of "workers" */
export type WorkersSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


/** columns and relationships of "workers" */
export type WorkersSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


/** columns and relationships of "workers" */
export type WorkersWalletsArgs = {
  distinct_on?: InputMaybe<Array<Wallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallets_Order_By>>;
  where?: InputMaybe<Wallets_Bool_Exp>;
};


/** columns and relationships of "workers" */
export type WorkersWallets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallets_Order_By>>;
  where?: InputMaybe<Wallets_Bool_Exp>;
};

/** aggregated selection of "workers" */
export type Workers_Aggregate = {
  __typename?: 'Workers_aggregate';
  aggregate?: Maybe<Workers_Aggregate_Fields>;
  nodes: Array<Workers>;
};

/** aggregate fields of "workers" */
export type Workers_Aggregate_Fields = {
  __typename?: 'Workers_aggregate_fields';
  avg?: Maybe<Workers_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Workers_Max_Fields>;
  min?: Maybe<Workers_Min_Fields>;
  stddev?: Maybe<Workers_Stddev_Fields>;
  stddev_pop?: Maybe<Workers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Workers_Stddev_Samp_Fields>;
  sum?: Maybe<Workers_Sum_Fields>;
  var_pop?: Maybe<Workers_Var_Pop_Fields>;
  var_samp?: Maybe<Workers_Var_Samp_Fields>;
  variance?: Maybe<Workers_Variance_Fields>;
};


/** aggregate fields of "workers" */
export type Workers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Workers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Workers_Avg_Fields = {
  __typename?: 'Workers_avg_fields';
  cashedOut?: Maybe<Scalars['Float']>;
  numIncompleteTasks?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "workers". All fields are combined with a logical 'AND'. */
export type Workers_Bool_Exp = {
  _and?: InputMaybe<Array<Workers_Bool_Exp>>;
  _not?: InputMaybe<Workers_Bool_Exp>;
  _or?: InputMaybe<Array<Workers_Bool_Exp>>;
  archived?: InputMaybe<Boolean_Comparison_Exp>;
  cashOutLockTimestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  cash_out_requests?: InputMaybe<CashOutRequests_Bool_Exp>;
  cashedOut?: InputMaybe<Int_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  currentAddress?: InputMaybe<String_Comparison_Exp>;
  fireboaCashOutPreferredMethods?: InputMaybe<FireboaCashOutPreferredMethods_Bool_Exp>;
  fireboaCashOutRequests?: InputMaybe<FireboaCashOutRequests_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lastActive?: InputMaybe<Timestamptz_Comparison_Exp>;
  lastTransactionHash?: InputMaybe<String_Comparison_Exp>;
  locked?: InputMaybe<Boolean_Comparison_Exp>;
  masterServicesAgreementAccepted?: InputMaybe<Boolean_Comparison_Exp>;
  mturkId?: InputMaybe<String_Comparison_Exp>;
  numIncompleteTasks?: InputMaybe<Int_Comparison_Exp>;
  projectRecommendationAccepted?: InputMaybe<Boolean_Comparison_Exp>;
  sessions?: InputMaybe<Sessions_Bool_Exp>;
  termsOfServiceAccepted?: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
  wallets?: InputMaybe<Wallets_Bool_Exp>;
  workersSpotify?: InputMaybe<WorkersSpotify_Bool_Exp>;
};

/** unique or primary key constraints on table "workers" */
export enum Workers_Constraint {
  /** unique or primary key constraint on columns "id" */
  WorkersPkey = 'workers_pkey',
  /** unique or primary key constraint on columns "user_id" */
  WorkersUserIdKey = 'workers_user_id_key'
}

/** input type for incrementing numeric columns in table "workers" */
export type Workers_Inc_Input = {
  cashedOut?: InputMaybe<Scalars['Int']>;
  numIncompleteTasks?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "workers" */
export type Workers_Insert_Input = {
  archived?: InputMaybe<Scalars['Boolean']>;
  cashOutLockTimestamp?: InputMaybe<Scalars['timestamptz']>;
  cash_out_requests?: InputMaybe<CashOutRequests_Arr_Rel_Insert_Input>;
  cashedOut?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentAddress?: InputMaybe<Scalars['String']>;
  fireboaCashOutPreferredMethods?: InputMaybe<FireboaCashOutPreferredMethods_Arr_Rel_Insert_Input>;
  fireboaCashOutRequests?: InputMaybe<FireboaCashOutRequests_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  lastActive?: InputMaybe<Scalars['timestamptz']>;
  lastTransactionHash?: InputMaybe<Scalars['String']>;
  locked?: InputMaybe<Scalars['Boolean']>;
  masterServicesAgreementAccepted?: InputMaybe<Scalars['Boolean']>;
  mturkId?: InputMaybe<Scalars['String']>;
  numIncompleteTasks?: InputMaybe<Scalars['Int']>;
  projectRecommendationAccepted?: InputMaybe<Scalars['Boolean']>;
  sessions?: InputMaybe<Sessions_Arr_Rel_Insert_Input>;
  termsOfServiceAccepted?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
  wallets?: InputMaybe<Wallets_Arr_Rel_Insert_Input>;
  workersSpotify?: InputMaybe<WorkersSpotify_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Workers_Max_Fields = {
  __typename?: 'Workers_max_fields';
  cashOutLockTimestamp?: Maybe<Scalars['timestamptz']>;
  cashedOut?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentAddress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastActive?: Maybe<Scalars['timestamptz']>;
  lastTransactionHash?: Maybe<Scalars['String']>;
  mturkId?: Maybe<Scalars['String']>;
  numIncompleteTasks?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Workers_Min_Fields = {
  __typename?: 'Workers_min_fields';
  cashOutLockTimestamp?: Maybe<Scalars['timestamptz']>;
  cashedOut?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentAddress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lastActive?: Maybe<Scalars['timestamptz']>;
  lastTransactionHash?: Maybe<Scalars['String']>;
  mturkId?: Maybe<Scalars['String']>;
  numIncompleteTasks?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "workers" */
export type Workers_Mutation_Response = {
  __typename?: 'Workers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Workers>;
};

/** input type for inserting object relation for remote table "workers" */
export type Workers_Obj_Rel_Insert_Input = {
  data: Workers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Workers_On_Conflict>;
};

/** on_conflict condition type for table "workers" */
export type Workers_On_Conflict = {
  constraint: Workers_Constraint;
  update_columns?: Array<Workers_Update_Column>;
  where?: InputMaybe<Workers_Bool_Exp>;
};

/** Ordering options when selecting data from "workers". */
export type Workers_Order_By = {
  archived?: InputMaybe<Order_By>;
  cashOutLockTimestamp?: InputMaybe<Order_By>;
  cash_out_requests_aggregate?: InputMaybe<CashOutRequests_Aggregate_Order_By>;
  cashedOut?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentAddress?: InputMaybe<Order_By>;
  fireboaCashOutPreferredMethods_aggregate?: InputMaybe<FireboaCashOutPreferredMethods_Aggregate_Order_By>;
  fireboaCashOutRequests_aggregate?: InputMaybe<FireboaCashOutRequests_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  lastActive?: InputMaybe<Order_By>;
  lastTransactionHash?: InputMaybe<Order_By>;
  locked?: InputMaybe<Order_By>;
  masterServicesAgreementAccepted?: InputMaybe<Order_By>;
  mturkId?: InputMaybe<Order_By>;
  numIncompleteTasks?: InputMaybe<Order_By>;
  projectRecommendationAccepted?: InputMaybe<Order_By>;
  sessions_aggregate?: InputMaybe<Sessions_Aggregate_Order_By>;
  termsOfServiceAccepted?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
  wallets_aggregate?: InputMaybe<Wallets_Aggregate_Order_By>;
  workersSpotify?: InputMaybe<WorkersSpotify_Order_By>;
};

/** primary key columns input for table: workers */
export type Workers_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "workers" */
export enum Workers_Select_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  CashOutLockTimestamp = 'cashOutLockTimestamp',
  /** column name */
  CashedOut = 'cashedOut',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentAddress = 'currentAddress',
  /** column name */
  Id = 'id',
  /** column name */
  LastActive = 'lastActive',
  /** column name */
  LastTransactionHash = 'lastTransactionHash',
  /** column name */
  Locked = 'locked',
  /** column name */
  MasterServicesAgreementAccepted = 'masterServicesAgreementAccepted',
  /** column name */
  MturkId = 'mturkId',
  /** column name */
  NumIncompleteTasks = 'numIncompleteTasks',
  /** column name */
  ProjectRecommendationAccepted = 'projectRecommendationAccepted',
  /** column name */
  TermsOfServiceAccepted = 'termsOfServiceAccepted',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "workers" */
export type Workers_Set_Input = {
  archived?: InputMaybe<Scalars['Boolean']>;
  cashOutLockTimestamp?: InputMaybe<Scalars['timestamptz']>;
  cashedOut?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentAddress?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lastActive?: InputMaybe<Scalars['timestamptz']>;
  lastTransactionHash?: InputMaybe<Scalars['String']>;
  locked?: InputMaybe<Scalars['Boolean']>;
  masterServicesAgreementAccepted?: InputMaybe<Scalars['Boolean']>;
  mturkId?: InputMaybe<Scalars['String']>;
  numIncompleteTasks?: InputMaybe<Scalars['Int']>;
  projectRecommendationAccepted?: InputMaybe<Scalars['Boolean']>;
  termsOfServiceAccepted?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Workers_Stddev_Fields = {
  __typename?: 'Workers_stddev_fields';
  cashedOut?: Maybe<Scalars['Float']>;
  numIncompleteTasks?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Workers_Stddev_Pop_Fields = {
  __typename?: 'Workers_stddev_pop_fields';
  cashedOut?: Maybe<Scalars['Float']>;
  numIncompleteTasks?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Workers_Stddev_Samp_Fields = {
  __typename?: 'Workers_stddev_samp_fields';
  cashedOut?: Maybe<Scalars['Float']>;
  numIncompleteTasks?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "Workers" */
export type Workers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Workers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Workers_Stream_Cursor_Value_Input = {
  archived?: InputMaybe<Scalars['Boolean']>;
  cashOutLockTimestamp?: InputMaybe<Scalars['timestamptz']>;
  cashedOut?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentAddress?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lastActive?: InputMaybe<Scalars['timestamptz']>;
  lastTransactionHash?: InputMaybe<Scalars['String']>;
  locked?: InputMaybe<Scalars['Boolean']>;
  masterServicesAgreementAccepted?: InputMaybe<Scalars['Boolean']>;
  mturkId?: InputMaybe<Scalars['String']>;
  numIncompleteTasks?: InputMaybe<Scalars['Int']>;
  projectRecommendationAccepted?: InputMaybe<Scalars['Boolean']>;
  termsOfServiceAccepted?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Workers_Sum_Fields = {
  __typename?: 'Workers_sum_fields';
  cashedOut?: Maybe<Scalars['Int']>;
  numIncompleteTasks?: Maybe<Scalars['Int']>;
};

/** update columns of table "workers" */
export enum Workers_Update_Column {
  /** column name */
  Archived = 'archived',
  /** column name */
  CashOutLockTimestamp = 'cashOutLockTimestamp',
  /** column name */
  CashedOut = 'cashedOut',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentAddress = 'currentAddress',
  /** column name */
  Id = 'id',
  /** column name */
  LastActive = 'lastActive',
  /** column name */
  LastTransactionHash = 'lastTransactionHash',
  /** column name */
  Locked = 'locked',
  /** column name */
  MasterServicesAgreementAccepted = 'masterServicesAgreementAccepted',
  /** column name */
  MturkId = 'mturkId',
  /** column name */
  NumIncompleteTasks = 'numIncompleteTasks',
  /** column name */
  ProjectRecommendationAccepted = 'projectRecommendationAccepted',
  /** column name */
  TermsOfServiceAccepted = 'termsOfServiceAccepted',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type Workers_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Workers_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Workers_Set_Input>;
  where: Workers_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Workers_Var_Pop_Fields = {
  __typename?: 'Workers_var_pop_fields';
  cashedOut?: Maybe<Scalars['Float']>;
  numIncompleteTasks?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Workers_Var_Samp_Fields = {
  __typename?: 'Workers_var_samp_fields';
  cashedOut?: Maybe<Scalars['Float']>;
  numIncompleteTasks?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Workers_Variance_Fields = {
  __typename?: 'Workers_variance_fields';
  cashedOut?: Maybe<Scalars['Float']>;
  numIncompleteTasks?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "cash_out_methods" */
export type CashOutMethods = {
  __typename?: 'cashOutMethods';
  /** An array relationship */
  cash_out_requests: Array<CashOutRequests>;
  /** An aggregate relationship */
  cash_out_requests_aggregate: CashOutRequests_Aggregate;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};


/** columns and relationships of "cash_out_methods" */
export type CashOutMethodsCash_Out_RequestsArgs = {
  distinct_on?: InputMaybe<Array<CashOutRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CashOutRequests_Order_By>>;
  where?: InputMaybe<CashOutRequests_Bool_Exp>;
};


/** columns and relationships of "cash_out_methods" */
export type CashOutMethodsCash_Out_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CashOutRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CashOutRequests_Order_By>>;
  where?: InputMaybe<CashOutRequests_Bool_Exp>;
};

/** aggregated selection of "cash_out_methods" */
export type CashOutMethods_Aggregate = {
  __typename?: 'cashOutMethods_aggregate';
  aggregate?: Maybe<CashOutMethods_Aggregate_Fields>;
  nodes: Array<CashOutMethods>;
};

/** aggregate fields of "cash_out_methods" */
export type CashOutMethods_Aggregate_Fields = {
  __typename?: 'cashOutMethods_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<CashOutMethods_Max_Fields>;
  min?: Maybe<CashOutMethods_Min_Fields>;
};


/** aggregate fields of "cash_out_methods" */
export type CashOutMethods_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<CashOutMethods_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "cash_out_methods". All fields are combined with a logical 'AND'. */
export type CashOutMethods_Bool_Exp = {
  _and?: InputMaybe<Array<CashOutMethods_Bool_Exp>>;
  _not?: InputMaybe<CashOutMethods_Bool_Exp>;
  _or?: InputMaybe<Array<CashOutMethods_Bool_Exp>>;
  cash_out_requests?: InputMaybe<CashOutRequests_Bool_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "cash_out_methods" */
export enum CashOutMethods_Constraint {
  /** unique or primary key constraint on columns "name" */
  CashOutMethodsPkey = 'cash_out_methods_pkey'
}

/** input type for inserting data into table "cash_out_methods" */
export type CashOutMethods_Insert_Input = {
  cash_out_requests?: InputMaybe<CashOutRequests_Arr_Rel_Insert_Input>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type CashOutMethods_Max_Fields = {
  __typename?: 'cashOutMethods_max_fields';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type CashOutMethods_Min_Fields = {
  __typename?: 'cashOutMethods_min_fields';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "cash_out_methods" */
export type CashOutMethods_Mutation_Response = {
  __typename?: 'cashOutMethods_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<CashOutMethods>;
};

/** input type for inserting object relation for remote table "cash_out_methods" */
export type CashOutMethods_Obj_Rel_Insert_Input = {
  data: CashOutMethods_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<CashOutMethods_On_Conflict>;
};

/** on_conflict condition type for table "cash_out_methods" */
export type CashOutMethods_On_Conflict = {
  constraint: CashOutMethods_Constraint;
  update_columns?: Array<CashOutMethods_Update_Column>;
  where?: InputMaybe<CashOutMethods_Bool_Exp>;
};

/** Ordering options when selecting data from "cash_out_methods". */
export type CashOutMethods_Order_By = {
  cash_out_requests_aggregate?: InputMaybe<CashOutRequests_Aggregate_Order_By>;
  description?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cash_out_methods */
export type CashOutMethods_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "cash_out_methods" */
export enum CashOutMethods_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "cash_out_methods" */
export type CashOutMethods_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "cashOutMethods" */
export type CashOutMethods_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: CashOutMethods_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type CashOutMethods_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "cash_out_methods" */
export enum CashOutMethods_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name'
}

export type CashOutMethods_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CashOutMethods_Set_Input>;
  where: CashOutMethods_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "data_types" */
export type DatatTypes = {
  __typename?: 'datatTypes';
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

/** aggregated selection of "data_types" */
export type DatatTypes_Aggregate = {
  __typename?: 'datatTypes_aggregate';
  aggregate?: Maybe<DatatTypes_Aggregate_Fields>;
  nodes: Array<DatatTypes>;
};

/** aggregate fields of "data_types" */
export type DatatTypes_Aggregate_Fields = {
  __typename?: 'datatTypes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<DatatTypes_Max_Fields>;
  min?: Maybe<DatatTypes_Min_Fields>;
};


/** aggregate fields of "data_types" */
export type DatatTypes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<DatatTypes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "data_types". All fields are combined with a logical 'AND'. */
export type DatatTypes_Bool_Exp = {
  _and?: InputMaybe<Array<DatatTypes_Bool_Exp>>;
  _not?: InputMaybe<DatatTypes_Bool_Exp>;
  _or?: InputMaybe<Array<DatatTypes_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "data_types" */
export enum DatatTypes_Constraint {
  /** unique or primary key constraint on columns "name" */
  DataTypesPkey = 'data_types_pkey'
}

/** input type for inserting data into table "data_types" */
export type DatatTypes_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type DatatTypes_Max_Fields = {
  __typename?: 'datatTypes_max_fields';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type DatatTypes_Min_Fields = {
  __typename?: 'datatTypes_min_fields';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "data_types" */
export type DatatTypes_Mutation_Response = {
  __typename?: 'datatTypes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<DatatTypes>;
};

/** on_conflict condition type for table "data_types" */
export type DatatTypes_On_Conflict = {
  constraint: DatatTypes_Constraint;
  update_columns?: Array<DatatTypes_Update_Column>;
  where?: InputMaybe<DatatTypes_Bool_Exp>;
};

/** Ordering options when selecting data from "data_types". */
export type DatatTypes_Order_By = {
  description?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: data_types */
export type DatatTypes_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "data_types" */
export enum DatatTypes_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "data_types" */
export type DatatTypes_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "datatTypes" */
export type DatatTypes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: DatatTypes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type DatatTypes_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "data_types" */
export enum DatatTypes_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name'
}

export type DatatTypes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DatatTypes_Set_Input>;
  where: DatatTypes_Bool_Exp;
};

/** columns and relationships of "feature_types" */
export type FeatureTypes = {
  __typename?: 'featureTypes';
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "feature_types" */
export type FeatureTypes_Aggregate = {
  __typename?: 'featureTypes_aggregate';
  aggregate?: Maybe<FeatureTypes_Aggregate_Fields>;
  nodes: Array<FeatureTypes>;
};

/** aggregate fields of "feature_types" */
export type FeatureTypes_Aggregate_Fields = {
  __typename?: 'featureTypes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<FeatureTypes_Max_Fields>;
  min?: Maybe<FeatureTypes_Min_Fields>;
};


/** aggregate fields of "feature_types" */
export type FeatureTypes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<FeatureTypes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "feature_types". All fields are combined with a logical 'AND'. */
export type FeatureTypes_Bool_Exp = {
  _and?: InputMaybe<Array<FeatureTypes_Bool_Exp>>;
  _not?: InputMaybe<FeatureTypes_Bool_Exp>;
  _or?: InputMaybe<Array<FeatureTypes_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "feature_types" */
export enum FeatureTypes_Constraint {
  /** unique or primary key constraint on columns "value" */
  FeatureTypesPkey = 'feature_types_pkey'
}

/** input type for inserting data into table "feature_types" */
export type FeatureTypes_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type FeatureTypes_Max_Fields = {
  __typename?: 'featureTypes_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type FeatureTypes_Min_Fields = {
  __typename?: 'featureTypes_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "feature_types" */
export type FeatureTypes_Mutation_Response = {
  __typename?: 'featureTypes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<FeatureTypes>;
};

/** on_conflict condition type for table "feature_types" */
export type FeatureTypes_On_Conflict = {
  constraint: FeatureTypes_Constraint;
  update_columns?: Array<FeatureTypes_Update_Column>;
  where?: InputMaybe<FeatureTypes_Bool_Exp>;
};

/** Ordering options when selecting data from "feature_types". */
export type FeatureTypes_Order_By = {
  description?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: feature_types */
export type FeatureTypes_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "feature_types" */
export enum FeatureTypes_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "feature_types" */
export type FeatureTypes_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "featureTypes" */
export type FeatureTypes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: FeatureTypes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type FeatureTypes_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "feature_types" */
export enum FeatureTypes_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type FeatureTypes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FeatureTypes_Set_Input>;
  where: FeatureTypes_Bool_Exp;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
};

/** columns and relationships of "gender" */
export type Gender = {
  __typename?: 'gender';
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "gender" */
export type Gender_Aggregate = {
  __typename?: 'gender_aggregate';
  aggregate?: Maybe<Gender_Aggregate_Fields>;
  nodes: Array<Gender>;
};

/** aggregate fields of "gender" */
export type Gender_Aggregate_Fields = {
  __typename?: 'gender_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Gender_Max_Fields>;
  min?: Maybe<Gender_Min_Fields>;
};


/** aggregate fields of "gender" */
export type Gender_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Gender_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "gender". All fields are combined with a logical 'AND'. */
export type Gender_Bool_Exp = {
  _and?: InputMaybe<Array<Gender_Bool_Exp>>;
  _not?: InputMaybe<Gender_Bool_Exp>;
  _or?: InputMaybe<Array<Gender_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "gender" */
export enum Gender_Constraint {
  /** unique or primary key constraint on columns "value" */
  GenderPkey = 'gender_pkey'
}

/** input type for inserting data into table "gender" */
export type Gender_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Gender_Max_Fields = {
  __typename?: 'gender_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Gender_Min_Fields = {
  __typename?: 'gender_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "gender" */
export type Gender_Mutation_Response = {
  __typename?: 'gender_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Gender>;
};

/** on_conflict condition type for table "gender" */
export type Gender_On_Conflict = {
  constraint: Gender_Constraint;
  update_columns?: Array<Gender_Update_Column>;
  where?: InputMaybe<Gender_Bool_Exp>;
};

/** Ordering options when selecting data from "gender". */
export type Gender_Order_By = {
  description?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: gender */
export type Gender_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "gender" */
export enum Gender_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "gender" */
export type Gender_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "gender" */
export type Gender_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Gender_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Gender_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "gender" */
export enum Gender_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type Gender_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Gender_Set_Input>;
  where: Gender_Bool_Exp;
};

/** columns and relationships of "have_labeled_data_types" */
export type HaveLabeledDataTypesEnum = {
  __typename?: 'haveLabeledDataTypesEnum';
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "have_labeled_data_types" */
export type HaveLabeledDataTypesEnum_Aggregate = {
  __typename?: 'haveLabeledDataTypesEnum_aggregate';
  aggregate?: Maybe<HaveLabeledDataTypesEnum_Aggregate_Fields>;
  nodes: Array<HaveLabeledDataTypesEnum>;
};

/** aggregate fields of "have_labeled_data_types" */
export type HaveLabeledDataTypesEnum_Aggregate_Fields = {
  __typename?: 'haveLabeledDataTypesEnum_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<HaveLabeledDataTypesEnum_Max_Fields>;
  min?: Maybe<HaveLabeledDataTypesEnum_Min_Fields>;
};


/** aggregate fields of "have_labeled_data_types" */
export type HaveLabeledDataTypesEnum_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<HaveLabeledDataTypesEnum_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "have_labeled_data_types". All fields are combined with a logical 'AND'. */
export type HaveLabeledDataTypesEnum_Bool_Exp = {
  _and?: InputMaybe<Array<HaveLabeledDataTypesEnum_Bool_Exp>>;
  _not?: InputMaybe<HaveLabeledDataTypesEnum_Bool_Exp>;
  _or?: InputMaybe<Array<HaveLabeledDataTypesEnum_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "have_labeled_data_types" */
export enum HaveLabeledDataTypesEnum_Constraint {
  /** unique or primary key constraint on columns "value" */
  HaveLabeledDataTypesPkey = 'have_labeled_data_types_pkey'
}

/** input type for inserting data into table "have_labeled_data_types" */
export type HaveLabeledDataTypesEnum_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type HaveLabeledDataTypesEnum_Max_Fields = {
  __typename?: 'haveLabeledDataTypesEnum_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type HaveLabeledDataTypesEnum_Min_Fields = {
  __typename?: 'haveLabeledDataTypesEnum_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "have_labeled_data_types" */
export type HaveLabeledDataTypesEnum_Mutation_Response = {
  __typename?: 'haveLabeledDataTypesEnum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<HaveLabeledDataTypesEnum>;
};

/** on_conflict condition type for table "have_labeled_data_types" */
export type HaveLabeledDataTypesEnum_On_Conflict = {
  constraint: HaveLabeledDataTypesEnum_Constraint;
  update_columns?: Array<HaveLabeledDataTypesEnum_Update_Column>;
  where?: InputMaybe<HaveLabeledDataTypesEnum_Bool_Exp>;
};

/** Ordering options when selecting data from "have_labeled_data_types". */
export type HaveLabeledDataTypesEnum_Order_By = {
  description?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: have_labeled_data_types */
export type HaveLabeledDataTypesEnum_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "have_labeled_data_types" */
export enum HaveLabeledDataTypesEnum_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "have_labeled_data_types" */
export type HaveLabeledDataTypesEnum_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "haveLabeledDataTypesEnum" */
export type HaveLabeledDataTypesEnum_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: HaveLabeledDataTypesEnum_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type HaveLabeledDataTypesEnum_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "have_labeled_data_types" */
export enum HaveLabeledDataTypesEnum_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type HaveLabeledDataTypesEnum_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HaveLabeledDataTypesEnum_Set_Input>;
  where: HaveLabeledDataTypesEnum_Bool_Exp;
};

/** columns and relationships of "industry_types" */
export type Industry_Types = {
  __typename?: 'industry_types';
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

/** aggregated selection of "industry_types" */
export type Industry_Types_Aggregate = {
  __typename?: 'industry_types_aggregate';
  aggregate?: Maybe<Industry_Types_Aggregate_Fields>;
  nodes: Array<Industry_Types>;
};

/** aggregate fields of "industry_types" */
export type Industry_Types_Aggregate_Fields = {
  __typename?: 'industry_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Industry_Types_Max_Fields>;
  min?: Maybe<Industry_Types_Min_Fields>;
};


/** aggregate fields of "industry_types" */
export type Industry_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Industry_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "industry_types". All fields are combined with a logical 'AND'. */
export type Industry_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Industry_Types_Bool_Exp>>;
  _not?: InputMaybe<Industry_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Industry_Types_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "industry_types" */
export enum Industry_Types_Constraint {
  /** unique or primary key constraint on columns "name" */
  IndustryTypesPkey = 'industry_types_pkey'
}

/** input type for inserting data into table "industry_types" */
export type Industry_Types_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Industry_Types_Max_Fields = {
  __typename?: 'industry_types_max_fields';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Industry_Types_Min_Fields = {
  __typename?: 'industry_types_min_fields';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "industry_types" */
export type Industry_Types_Mutation_Response = {
  __typename?: 'industry_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Industry_Types>;
};

/** on_conflict condition type for table "industry_types" */
export type Industry_Types_On_Conflict = {
  constraint: Industry_Types_Constraint;
  update_columns?: Array<Industry_Types_Update_Column>;
  where?: InputMaybe<Industry_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "industry_types". */
export type Industry_Types_Order_By = {
  description?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: industry_types */
export type Industry_Types_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "industry_types" */
export enum Industry_Types_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "industry_types" */
export type Industry_Types_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "industry_types" */
export type Industry_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Industry_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Industry_Types_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "industry_types" */
export enum Industry_Types_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name'
}

export type Industry_Types_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Industry_Types_Set_Input>;
  where: Industry_Types_Bool_Exp;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "labelling_platforms" */
export type LabellingPlatforms = {
  __typename?: 'labellingPlatforms';
  description?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

/** aggregated selection of "labelling_platforms" */
export type LabellingPlatforms_Aggregate = {
  __typename?: 'labellingPlatforms_aggregate';
  aggregate?: Maybe<LabellingPlatforms_Aggregate_Fields>;
  nodes: Array<LabellingPlatforms>;
};

/** aggregate fields of "labelling_platforms" */
export type LabellingPlatforms_Aggregate_Fields = {
  __typename?: 'labellingPlatforms_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<LabellingPlatforms_Max_Fields>;
  min?: Maybe<LabellingPlatforms_Min_Fields>;
};


/** aggregate fields of "labelling_platforms" */
export type LabellingPlatforms_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<LabellingPlatforms_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "labelling_platforms". All fields are combined with a logical 'AND'. */
export type LabellingPlatforms_Bool_Exp = {
  _and?: InputMaybe<Array<LabellingPlatforms_Bool_Exp>>;
  _not?: InputMaybe<LabellingPlatforms_Bool_Exp>;
  _or?: InputMaybe<Array<LabellingPlatforms_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "labelling_platforms" */
export enum LabellingPlatforms_Constraint {
  /** unique or primary key constraint on columns "value" */
  LabellingPlatformsPkey = 'labelling_platforms_pkey'
}

/** input type for inserting data into table "labelling_platforms" */
export type LabellingPlatforms_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type LabellingPlatforms_Max_Fields = {
  __typename?: 'labellingPlatforms_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type LabellingPlatforms_Min_Fields = {
  __typename?: 'labellingPlatforms_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "labelling_platforms" */
export type LabellingPlatforms_Mutation_Response = {
  __typename?: 'labellingPlatforms_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<LabellingPlatforms>;
};

/** on_conflict condition type for table "labelling_platforms" */
export type LabellingPlatforms_On_Conflict = {
  constraint: LabellingPlatforms_Constraint;
  update_columns?: Array<LabellingPlatforms_Update_Column>;
  where?: InputMaybe<LabellingPlatforms_Bool_Exp>;
};

/** Ordering options when selecting data from "labelling_platforms". */
export type LabellingPlatforms_Order_By = {
  description?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: labelling_platforms */
export type LabellingPlatforms_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "labelling_platforms" */
export enum LabellingPlatforms_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "labelling_platforms" */
export type LabellingPlatforms_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "labellingPlatforms" */
export type LabellingPlatforms_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: LabellingPlatforms_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type LabellingPlatforms_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "labelling_platforms" */
export enum LabellingPlatforms_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type LabellingPlatforms_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<LabellingPlatforms_Set_Input>;
  where: LabellingPlatforms_Bool_Exp;
};

/** columns and relationships of "managers" */
export type Managers = {
  __typename?: 'managers';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  userId: Scalars['uuid'];
};

/** aggregated selection of "managers" */
export type Managers_Aggregate = {
  __typename?: 'managers_aggregate';
  aggregate?: Maybe<Managers_Aggregate_Fields>;
  nodes: Array<Managers>;
};

/** aggregate fields of "managers" */
export type Managers_Aggregate_Fields = {
  __typename?: 'managers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Managers_Max_Fields>;
  min?: Maybe<Managers_Min_Fields>;
};


/** aggregate fields of "managers" */
export type Managers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Managers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "managers" */
export type Managers_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Managers_Max_Order_By>;
  min?: InputMaybe<Managers_Min_Order_By>;
};

/** input type for inserting array relation for remote table "managers" */
export type Managers_Arr_Rel_Insert_Input = {
  data: Array<Managers_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Managers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "managers". All fields are combined with a logical 'AND'. */
export type Managers_Bool_Exp = {
  _and?: InputMaybe<Array<Managers_Bool_Exp>>;
  _not?: InputMaybe<Managers_Bool_Exp>;
  _or?: InputMaybe<Array<Managers_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "managers" */
export enum Managers_Constraint {
  /** unique or primary key constraint on columns "id" */
  ManagersPkey = 'managers_pkey'
}

/** input type for inserting data into table "managers" */
export type Managers_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Managers_Max_Fields = {
  __typename?: 'managers_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "managers" */
export type Managers_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Managers_Min_Fields = {
  __typename?: 'managers_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "managers" */
export type Managers_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "managers" */
export type Managers_Mutation_Response = {
  __typename?: 'managers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Managers>;
};

/** on_conflict condition type for table "managers" */
export type Managers_On_Conflict = {
  constraint: Managers_Constraint;
  update_columns?: Array<Managers_Update_Column>;
  where?: InputMaybe<Managers_Bool_Exp>;
};

/** Ordering options when selecting data from "managers". */
export type Managers_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: managers */
export type Managers_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "managers" */
export enum Managers_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "managers" */
export type Managers_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "managers" */
export type Managers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Managers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Managers_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "managers" */
export enum Managers_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'userId'
}

export type Managers_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Managers_Set_Input>;
  where: Managers_Bool_Exp;
};

/** Projects for the Vana Marketplace */
export type Marketplace_Projects = {
  __typename?: 'marketplace_projects';
  id: Scalars['uuid'];
  /** An array relationship */
  modulesMarketplaceProjects: Array<Modules_Marketplace_Projects>;
  /** An aggregate relationship */
  modulesMarketplaceProjects_aggregate: Modules_Marketplace_Projects_Aggregate;
  strapiProject?: Maybe<StrapiProjectEntityResponseCollection>;
  /** Title of Project. Must match title in Strapi Exactly */
  title: Scalars['String'];
  urlSlug: Scalars['String'];
};


/** Projects for the Vana Marketplace */
export type Marketplace_ProjectsModulesMarketplaceProjectsArgs = {
  distinct_on?: InputMaybe<Array<Modules_Marketplace_Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Modules_Marketplace_Projects_Order_By>>;
  where?: InputMaybe<Modules_Marketplace_Projects_Bool_Exp>;
};


/** Projects for the Vana Marketplace */
export type Marketplace_ProjectsModulesMarketplaceProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Modules_Marketplace_Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Modules_Marketplace_Projects_Order_By>>;
  where?: InputMaybe<Modules_Marketplace_Projects_Bool_Exp>;
};


/** Projects for the Vana Marketplace */
export type Marketplace_ProjectsStrapiProjectArgs = {
  filters?: InputMaybe<StrapiProjectFiltersInput_Remote_Rel_Marketplace_ProjectsstrapiProject>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** aggregated selection of "marketplace_projects" */
export type Marketplace_Projects_Aggregate = {
  __typename?: 'marketplace_projects_aggregate';
  aggregate?: Maybe<Marketplace_Projects_Aggregate_Fields>;
  nodes: Array<Marketplace_Projects>;
};

/** aggregate fields of "marketplace_projects" */
export type Marketplace_Projects_Aggregate_Fields = {
  __typename?: 'marketplace_projects_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Marketplace_Projects_Max_Fields>;
  min?: Maybe<Marketplace_Projects_Min_Fields>;
};


/** aggregate fields of "marketplace_projects" */
export type Marketplace_Projects_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Marketplace_Projects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "marketplace_projects". All fields are combined with a logical 'AND'. */
export type Marketplace_Projects_Bool_Exp = {
  _and?: InputMaybe<Array<Marketplace_Projects_Bool_Exp>>;
  _not?: InputMaybe<Marketplace_Projects_Bool_Exp>;
  _or?: InputMaybe<Array<Marketplace_Projects_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  modulesMarketplaceProjects?: InputMaybe<Modules_Marketplace_Projects_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  urlSlug?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "marketplace_projects" */
export enum Marketplace_Projects_Constraint {
  /** unique or primary key constraint on columns "id" */
  MarketplaceProjectsPkey = 'marketplace_projects_pkey',
  /** unique or primary key constraint on columns "title" */
  MarketplaceProjectsTitleKey = 'marketplace_projects_title_key',
  /** unique or primary key constraint on columns "url_slug" */
  MarketplaceProjectsUrlSlugKey = 'marketplace_projects_url_slug_key'
}

/** input type for inserting data into table "marketplace_projects" */
export type Marketplace_Projects_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  modulesMarketplaceProjects?: InputMaybe<Modules_Marketplace_Projects_Arr_Rel_Insert_Input>;
  /** Title of Project. Must match title in Strapi Exactly */
  title?: InputMaybe<Scalars['String']>;
  urlSlug?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Marketplace_Projects_Max_Fields = {
  __typename?: 'marketplace_projects_max_fields';
  id?: Maybe<Scalars['uuid']>;
  /** Title of Project. Must match title in Strapi Exactly */
  title?: Maybe<Scalars['String']>;
  urlSlug?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Marketplace_Projects_Min_Fields = {
  __typename?: 'marketplace_projects_min_fields';
  id?: Maybe<Scalars['uuid']>;
  /** Title of Project. Must match title in Strapi Exactly */
  title?: Maybe<Scalars['String']>;
  urlSlug?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "marketplace_projects" */
export type Marketplace_Projects_Mutation_Response = {
  __typename?: 'marketplace_projects_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Marketplace_Projects>;
};

/** input type for inserting object relation for remote table "marketplace_projects" */
export type Marketplace_Projects_Obj_Rel_Insert_Input = {
  data: Marketplace_Projects_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Marketplace_Projects_On_Conflict>;
};

/** on_conflict condition type for table "marketplace_projects" */
export type Marketplace_Projects_On_Conflict = {
  constraint: Marketplace_Projects_Constraint;
  update_columns?: Array<Marketplace_Projects_Update_Column>;
  where?: InputMaybe<Marketplace_Projects_Bool_Exp>;
};

/** Ordering options when selecting data from "marketplace_projects". */
export type Marketplace_Projects_Order_By = {
  id?: InputMaybe<Order_By>;
  modulesMarketplaceProjects_aggregate?: InputMaybe<Modules_Marketplace_Projects_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
  urlSlug?: InputMaybe<Order_By>;
};

/** primary key columns input for table: marketplace_projects */
export type Marketplace_Projects_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "marketplace_projects" */
export enum Marketplace_Projects_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UrlSlug = 'urlSlug'
}

/** input type for updating data in table "marketplace_projects" */
export type Marketplace_Projects_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  /** Title of Project. Must match title in Strapi Exactly */
  title?: InputMaybe<Scalars['String']>;
  urlSlug?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "marketplace_projects" */
export type Marketplace_Projects_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Marketplace_Projects_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Marketplace_Projects_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  /** Title of Project. Must match title in Strapi Exactly */
  title?: InputMaybe<Scalars['String']>;
  urlSlug?: InputMaybe<Scalars['String']>;
};

/** update columns of table "marketplace_projects" */
export enum Marketplace_Projects_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UrlSlug = 'urlSlug'
}

export type Marketplace_Projects_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Marketplace_Projects_Set_Input>;
  where: Marketplace_Projects_Bool_Exp;
};

/** Many-to-Many relationship between modules and marketplace projects. (moduleA, projectB) means moduleA is required to complete projectB */
export type Modules_Marketplace_Projects = {
  __typename?: 'modules_marketplace_projects';
  /** An object relationship */
  marketplaceProject: Marketplace_Projects;
  /** An object relationship */
  module: Modules;
  moduleId: Scalars['uuid'];
  projectId: Scalars['uuid'];
};

/** aggregated selection of "modules_marketplace_projects" */
export type Modules_Marketplace_Projects_Aggregate = {
  __typename?: 'modules_marketplace_projects_aggregate';
  aggregate?: Maybe<Modules_Marketplace_Projects_Aggregate_Fields>;
  nodes: Array<Modules_Marketplace_Projects>;
};

/** aggregate fields of "modules_marketplace_projects" */
export type Modules_Marketplace_Projects_Aggregate_Fields = {
  __typename?: 'modules_marketplace_projects_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Modules_Marketplace_Projects_Max_Fields>;
  min?: Maybe<Modules_Marketplace_Projects_Min_Fields>;
};


/** aggregate fields of "modules_marketplace_projects" */
export type Modules_Marketplace_Projects_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Modules_Marketplace_Projects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "modules_marketplace_projects" */
export type Modules_Marketplace_Projects_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Modules_Marketplace_Projects_Max_Order_By>;
  min?: InputMaybe<Modules_Marketplace_Projects_Min_Order_By>;
};

/** input type for inserting array relation for remote table "modules_marketplace_projects" */
export type Modules_Marketplace_Projects_Arr_Rel_Insert_Input = {
  data: Array<Modules_Marketplace_Projects_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Modules_Marketplace_Projects_On_Conflict>;
};

/** Boolean expression to filter rows from the table "modules_marketplace_projects". All fields are combined with a logical 'AND'. */
export type Modules_Marketplace_Projects_Bool_Exp = {
  _and?: InputMaybe<Array<Modules_Marketplace_Projects_Bool_Exp>>;
  _not?: InputMaybe<Modules_Marketplace_Projects_Bool_Exp>;
  _or?: InputMaybe<Array<Modules_Marketplace_Projects_Bool_Exp>>;
  marketplaceProject?: InputMaybe<Marketplace_Projects_Bool_Exp>;
  module?: InputMaybe<Modules_Bool_Exp>;
  moduleId?: InputMaybe<Uuid_Comparison_Exp>;
  projectId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "modules_marketplace_projects" */
export enum Modules_Marketplace_Projects_Constraint {
  /** unique or primary key constraint on columns "project_id", "module_id" */
  ModulesMarketplaceProjectsPkey = 'modules_marketplace_projects_pkey'
}

/** input type for inserting data into table "modules_marketplace_projects" */
export type Modules_Marketplace_Projects_Insert_Input = {
  marketplaceProject?: InputMaybe<Marketplace_Projects_Obj_Rel_Insert_Input>;
  module?: InputMaybe<Modules_Obj_Rel_Insert_Input>;
  moduleId?: InputMaybe<Scalars['uuid']>;
  projectId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Modules_Marketplace_Projects_Max_Fields = {
  __typename?: 'modules_marketplace_projects_max_fields';
  moduleId?: Maybe<Scalars['uuid']>;
  projectId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "modules_marketplace_projects" */
export type Modules_Marketplace_Projects_Max_Order_By = {
  moduleId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Modules_Marketplace_Projects_Min_Fields = {
  __typename?: 'modules_marketplace_projects_min_fields';
  moduleId?: Maybe<Scalars['uuid']>;
  projectId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "modules_marketplace_projects" */
export type Modules_Marketplace_Projects_Min_Order_By = {
  moduleId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "modules_marketplace_projects" */
export type Modules_Marketplace_Projects_Mutation_Response = {
  __typename?: 'modules_marketplace_projects_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Modules_Marketplace_Projects>;
};

/** on_conflict condition type for table "modules_marketplace_projects" */
export type Modules_Marketplace_Projects_On_Conflict = {
  constraint: Modules_Marketplace_Projects_Constraint;
  update_columns?: Array<Modules_Marketplace_Projects_Update_Column>;
  where?: InputMaybe<Modules_Marketplace_Projects_Bool_Exp>;
};

/** Ordering options when selecting data from "modules_marketplace_projects". */
export type Modules_Marketplace_Projects_Order_By = {
  marketplaceProject?: InputMaybe<Marketplace_Projects_Order_By>;
  module?: InputMaybe<Modules_Order_By>;
  moduleId?: InputMaybe<Order_By>;
  projectId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: modules_marketplace_projects */
export type Modules_Marketplace_Projects_Pk_Columns_Input = {
  moduleId: Scalars['uuid'];
  projectId: Scalars['uuid'];
};

/** select columns of table "modules_marketplace_projects" */
export enum Modules_Marketplace_Projects_Select_Column {
  /** column name */
  ModuleId = 'moduleId',
  /** column name */
  ProjectId = 'projectId'
}

/** input type for updating data in table "modules_marketplace_projects" */
export type Modules_Marketplace_Projects_Set_Input = {
  moduleId?: InputMaybe<Scalars['uuid']>;
  projectId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "modules_marketplace_projects" */
export type Modules_Marketplace_Projects_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Modules_Marketplace_Projects_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Modules_Marketplace_Projects_Stream_Cursor_Value_Input = {
  moduleId?: InputMaybe<Scalars['uuid']>;
  projectId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "modules_marketplace_projects" */
export enum Modules_Marketplace_Projects_Update_Column {
  /** column name */
  ModuleId = 'moduleId',
  /** column name */
  ProjectId = 'projectId'
}

export type Modules_Marketplace_Projects_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Modules_Marketplace_Projects_Set_Input>;
  where: Modules_Marketplace_Projects_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** insert a single row into the table: "collection_type" */
  CreateOneCollectionType?: Maybe<CollectionTypes>;
  /** insert data into the table: "cash_out_methods" */
  createManyCashOutMethods?: Maybe<CashOutMethods_Mutation_Response>;
  /** insert data into the table: "cash_out_requests" */
  createManyCashOutRequests?: Maybe<CashOutRequests_Mutation_Response>;
  /** insert data into the table: "collection_type" */
  createManyCollectionTypes?: Maybe<CollectionTypes_Mutation_Response>;
  /** insert data into the table: "customers" */
  createManyCustomers?: Maybe<Customers_Mutation_Response>;
  /** insert data into the table: "data_types" */
  createManyDataTypes?: Maybe<DatatTypes_Mutation_Response>;
  /** insert data into the table: "etx_task_sessions" */
  createManyEtxTaskSessions?: Maybe<EtxTaskSessions_Mutation_Response>;
  /** insert data into the table: "feature_types" */
  createManyFeatureTypes?: Maybe<FeatureTypes_Mutation_Response>;
  /** insert data into the table: "fireboa_cash_out_crypto_requests" */
  createManyFireboaCashOutCryptoRequests?: Maybe<FireboaCashOutCryptoRequests_Mutation_Response>;
  /** insert data into the table: "fireboa_cash_out_gift_card_requests" */
  createManyFireboaCashOutGiftCardRequests?: Maybe<FireboaCashOutGiftCardRequests_Mutation_Response>;
  /** insert data into the table: "fireboa_cash_out_preferred_methods" */
  createManyFireboaCashOutPreferredMethods?: Maybe<FireboaCashOutPreferredMethods_Mutation_Response>;
  /** insert data into the table: "fireboa_cash_out_requests" */
  createManyFireboaCashOutRequests?: Maybe<FireboaCashOutRequests_Mutation_Response>;
  /** insert data into the table: "fireboa_modules" */
  createManyFireboaModules?: Maybe<FireboaModules_Mutation_Response>;
  /** insert data into the table: "fireboa_projects" */
  createManyFireboaProjects?: Maybe<FireboaProjects_Mutation_Response>;
  /** insert data into the table: "fireboa_projects_modules" */
  createManyFireboaProjectsModules?: Maybe<FireboaProjectsModules_Mutation_Response>;
  /** insert data into the table: "fireboa_projects_modules_users" */
  createManyFireboaProjectsModulesUsers?: Maybe<FireboaProjectsModulesUsers_Mutation_Response>;
  /** insert data into the table: "fireboa_projects_users" */
  createManyFireboaProjectsUsers?: Maybe<FireboaProjectsUsers_Mutation_Response>;
  /** insert a single row into the table: "fraud_status_enum" */
  createManyFraudStatusEnums?: Maybe<FraudStatusEnum>;
  /** insert data into the table: "have_labeled_data_types" */
  createManyHaveLabeledDataTypes?: Maybe<HaveLabeledDataTypesEnum_Mutation_Response>;
  /** insert data into the table: "identities_legal_id_type_enum" */
  createManyIdentitiesLegalIdTypeEnums?: Maybe<IdentitiesLegalIdTypeEnums_Mutation_Response>;
  /** insert data into the table: "images" */
  createManyImages?: Maybe<Images_Mutation_Response>;
  /** insert data into the table: "labelling_platforms" */
  createManyLabellingPlatforms?: Maybe<LabellingPlatforms_Mutation_Response>;
  /** insert data into the table: "marketplace_projects" */
  createManyMarketplaceProjects?: Maybe<Marketplace_Projects_Mutation_Response>;
  /** insert data into the table: "module_instructions" */
  createManyModuleInstructions?: Maybe<ModuleInstructions_Mutation_Response>;
  /** insert data into the table: "modules" */
  createManyModules?: Maybe<Modules_Mutation_Response>;
  /** insert data into the table: "modules_marketplace_projects" */
  createManyModulesMarketplaceProjects?: Maybe<Modules_Marketplace_Projects_Mutation_Response>;
  /** insert data into the table: "organizations" */
  createManyOrganizations?: Maybe<Organizations_Mutation_Response>;
  /** insert data into the table: "organizations_customers" */
  createManyOrganizationsCustomers?: Maybe<OrganizationsCustomers_Mutation_Response>;
  /** insert data into the table: "pricing_plans" */
  createManyPricingPlans?: Maybe<PricingPlans_Mutation_Response>;
  /** insert data into the table: "project_statuses" */
  createManyProjectStatuses?: Maybe<ProjectStatuses_Mutation_Response>;
  /** insert data into the table: "sessions" */
  createManySessions?: Maybe<Sessions_Mutation_Response>;
  /** insert data into the table: "spotify_state_types" */
  createManySpotifyStateTypes?: Maybe<SpotifyStateTypes_Mutation_Response>;
  /** insert data into the table: "stripe_identity_session_error_code_enum" */
  createManyStripeIdentitySessionErrorCodeEnums?: Maybe<StripeIdentitySessionErrorCodeEnums_Mutation_Response>;
  /** insert data into the table: "stripe_identity_session_status_enum" */
  createManyStripeIdentitySessionStatusEnums?: Maybe<StripeIdentitySessionStatusEnums_Mutation_Response>;
  /** insert data into the table: "stripe_identity_session_type_enum" */
  createManyStripeIdentitySessionTypeEnums?: Maybe<StripeIdentitySessionTypeEnums_Mutation_Response>;
  /** insert data into the table: "stripe_verification_sessions" */
  createManyStripeVerificationSessions?: Maybe<StripeVerificationSessions_Mutation_Response>;
  /** insert data into the table: "survey_responses" */
  createManySurveyResponses?: Maybe<SurveyResponses_Mutation_Response>;
  /** insert data into the table: "surveys" */
  createManySurveys?: Maybe<Surveys_Mutation_Response>;
  /** insert data into the table: "user_identities" */
  createManyUserIdentities?: Maybe<UserIdentities_Mutation_Response>;
  /** insert data into the table: "user_module_progress_enum" */
  createManyUserModuleStatuses?: Maybe<UserModuleStatus_Mutation_Response>;
  /** insert data into the table: "user_referrals" */
  createManyUserReferrals?: Maybe<UserReferrals_Mutation_Response>;
  /** insert data into the table: "users" */
  createManyUsers?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "users_images" */
  createManyUsersImages?: Maybe<UsersImages_Mutation_Response>;
  /** insert data into the table: "users_modules" */
  createManyUsersModules?: Maybe<UsersModules_Mutation_Response>;
  /** insert data into the table: "users_projects" */
  createManyUsersProjects?: Maybe<Users_Projects_Mutation_Response>;
  /** insert data into the table: "users_supplementary" */
  createManyUsersSupplementaries?: Maybe<Users_Supplementary_Mutation_Response>;
  /** insert data into the table: "visual_judgement_module_images" */
  createManyVisualJudgementModuleImages?: Maybe<VisualJudgementModuleImages_Mutation_Response>;
  /** insert data into the table: "visual_judgement_module_responses" */
  createManyVisualJudgementModuleResponses?: Maybe<VisualJudgementModuleResponses_Mutation_Response>;
  /** insert data into the table: "visual_judgement_modules" */
  createManyVisualJudgementModules?: Maybe<VisualJudgementModules_Mutation_Response>;
  /** insert data into the table: "wallets" */
  createManyWallets?: Maybe<Wallets_Mutation_Response>;
  /** insert data into the table: "workers" */
  createManyWorkers?: Maybe<Workers_Mutation_Response>;
  /** insert data into the table: "workers_spotify" */
  createManyWorkersSpotify?: Maybe<WorkersSpotify_Mutation_Response>;
  /** insert a single row into the table: "cash_out_methods" */
  createOneCashOutMethod?: Maybe<CashOutMethods>;
  /** insert a single row into the table: "cash_out_requests" */
  createOneCashOutRequest?: Maybe<CashOutRequests>;
  /** insert a single row into the table: "customers" */
  createOneCustomer?: Maybe<Customers>;
  /** insert a single row into the table: "data_types" */
  createOneDataType?: Maybe<DatatTypes>;
  /** insert a single row into the table: "etx_task_sessions" */
  createOneEtxTaskSession?: Maybe<EtxTaskSessions>;
  /** insert a single row into the table: "feature_types" */
  createOneFeatureType?: Maybe<FeatureTypes>;
  /** insert a single row into the table: "fireboa_cash_out_crypto_requests" */
  createOneFireboaCashOutCryptoRequest?: Maybe<FireboaCashOutCryptoRequests>;
  /** insert a single row into the table: "fireboa_cash_out_gift_card_requests" */
  createOneFireboaCashOutGiftCardRequest?: Maybe<FireboaCashOutGiftCardRequests>;
  /** insert a single row into the table: "fireboa_cash_out_preferred_methods" */
  createOneFireboaCashOutPreferredMethod?: Maybe<FireboaCashOutPreferredMethods>;
  /** insert a single row into the table: "fireboa_cash_out_requests" */
  createOneFireboaCashOutRequest?: Maybe<FireboaCashOutRequests>;
  /** insert a single row into the table: "fireboa_modules" */
  createOneFireboaModule?: Maybe<FireboaModules>;
  /** insert a single row into the table: "fireboa_projects" */
  createOneFireboaProject?: Maybe<FireboaProjects>;
  /** insert a single row into the table: "fireboa_projects_modules" */
  createOneFireboaProjectModule?: Maybe<FireboaProjectsModules>;
  /** insert a single row into the table: "fireboa_projects_modules_users" */
  createOneFireboaProjectModuleUser?: Maybe<FireboaProjectsModulesUsers>;
  /** insert a single row into the table: "fireboa_projects_users" */
  createOneFireboaProjectUser?: Maybe<FireboaProjectsUsers>;
  /** insert data into the table: "fraud_status_enum" */
  createOneFraudStatusEnum?: Maybe<FraudStatusEnum_Mutation_Response>;
  /** insert a single row into the table: "have_labeled_data_types" */
  createOneHaveLabeledDataType?: Maybe<HaveLabeledDataTypesEnum>;
  /** insert a single row into the table: "identities_legal_id_type_enum" */
  createOneIdentitiesLegalIdTypeEnum?: Maybe<IdentitiesLegalIdTypeEnums>;
  /** insert a single row into the table: "images" */
  createOneImage?: Maybe<Images>;
  /** insert a single row into the table: "labelling_platforms" */
  createOneLabellingPlatform?: Maybe<LabellingPlatforms>;
  /** insert a single row into the table: "marketplace_projects" */
  createOneMarketplaceProject?: Maybe<Marketplace_Projects>;
  /** insert a single row into the table: "modules" */
  createOneModule?: Maybe<Modules>;
  /** insert a single row into the table: "module_instructions" */
  createOneModuleInstruction?: Maybe<ModuleInstructions>;
  /** insert a single row into the table: "modules_marketplace_projects" */
  createOneModuleMarketplaceProject?: Maybe<Modules_Marketplace_Projects>;
  /** insert a single row into the table: "organizations" */
  createOneOrganization?: Maybe<Organizations>;
  /** insert a single row into the table: "organizations_customers" */
  createOneOrganizationCustomer?: Maybe<OrganizationsCustomers>;
  /** insert a single row into the table: "pricing_plans" */
  createOnePricingPlan?: Maybe<PricingPlans>;
  /** insert a single row into the table: "project_statuses" */
  createOneProjectStatus?: Maybe<ProjectStatuses>;
  /** insert a single row into the table: "sessions" */
  createOneSession?: Maybe<Sessions>;
  /** insert a single row into the table: "spotify_state_types" */
  createOneSpotifyStateType?: Maybe<SpotifyStateTypes>;
  /** insert a single row into the table: "stripe_identity_session_error_code_enum" */
  createOneStripeIdentitySessionErrorCodeEnum?: Maybe<StripeIdentitySessionErrorCodeEnums>;
  /** insert a single row into the table: "stripe_identity_session_status_enum" */
  createOneStripeIdentitySessionStatusEnum?: Maybe<StripeIdentitySessionStatusEnums>;
  /** insert a single row into the table: "stripe_identity_session_type_enum" */
  createOneStripeIdentitySessionTypeEnum?: Maybe<StripeIdentitySessionTypeEnums>;
  /** insert a single row into the table: "stripe_verification_sessions" */
  createOneStripeVerificationSession?: Maybe<StripeVerificationSessions>;
  /** insert a single row into the table: "surveys" */
  createOneSurvey?: Maybe<Surveys>;
  /** insert a single row into the table: "survey_responses" */
  createOneSurveyResponse?: Maybe<SurveyResponses>;
  /** insert a single row into the table: "users" */
  createOneUser?: Maybe<Users>;
  /** insert a single row into the table: "user_identities" */
  createOneUserIdentity?: Maybe<UserIdentities>;
  /** insert a single row into the table: "users_images" */
  createOneUserImage?: Maybe<UsersImages>;
  /** insert a single row into the table: "users_modules" */
  createOneUserModule?: Maybe<UsersModules>;
  /** insert a single row into the table: "user_module_progress_enum" */
  createOneUserModuleStatus?: Maybe<UserModuleStatus>;
  /** insert a single row into the table: "users_projects" */
  createOneUserProject?: Maybe<Users_Projects>;
  /** insert a single row into the table: "user_referrals" */
  createOneUserReferral?: Maybe<UserReferrals>;
  /** insert a single row into the table: "users_supplementary" */
  createOneUserSupplementary?: Maybe<Users_Supplementary>;
  /** insert a single row into the table: "visual_judgement_modules" */
  createOneVisualJudgementModule?: Maybe<VisualJudgementModules>;
  /** insert a single row into the table: "visual_judgement_module_images" */
  createOneVisualJudgementModuleImage?: Maybe<VisualJudgementModuleImages>;
  /** insert a single row into the table: "visual_judgement_module_responses" */
  createOneVisualJudgementModuleResponse?: Maybe<VisualJudgementModuleResponses>;
  /** insert a single row into the table: "wallets" */
  createOneWallet?: Maybe<Wallets>;
  /** insert a single row into the table: "workers" */
  createOneWorker?: Maybe<Workers>;
  /** insert a single row into the table: "workers_spotify" */
  createOneWorkerSpotify?: Maybe<WorkersSpotify>;
  createStrapiModule?: Maybe<StrapiModuleEntityResponse>;
  createStrapiProject?: Maybe<StrapiProjectEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createVanaConnectFaq?: Maybe<VanaConnectFaqEntityResponse>;
  /** delete data from the table: "cash_out_methods" */
  deleteManyCashOutMethods?: Maybe<CashOutMethods_Mutation_Response>;
  /** delete data from the table: "cash_out_requests" */
  deleteManyCashOutRequests?: Maybe<CashOutRequests_Mutation_Response>;
  /** delete data from the table: "collection_type" */
  deleteManyCollectionTypes?: Maybe<CollectionTypes_Mutation_Response>;
  /** delete data from the table: "customers" */
  deleteManyCustomers?: Maybe<Customers_Mutation_Response>;
  /** delete data from the table: "data_types" */
  deleteManyDataTypes?: Maybe<DatatTypes_Mutation_Response>;
  /** delete data from the table: "etx_task_sessions" */
  deleteManyEtxTaskSessions?: Maybe<EtxTaskSessions_Mutation_Response>;
  /** delete data from the table: "feature_types" */
  deleteManyFeatureTypes?: Maybe<FeatureTypes_Mutation_Response>;
  /** delete data from the table: "fireboa_cash_out_crypto_requests" */
  deleteManyFireboaCashOutCryptoRequests?: Maybe<FireboaCashOutCryptoRequests_Mutation_Response>;
  /** delete data from the table: "fireboa_cash_out_gift_card_requests" */
  deleteManyFireboaCashOutGiftCardRequests?: Maybe<FireboaCashOutGiftCardRequests_Mutation_Response>;
  /** delete data from the table: "fireboa_cash_out_preferred_methods" */
  deleteManyFireboaCashOutPreferredMethods?: Maybe<FireboaCashOutPreferredMethods_Mutation_Response>;
  /** delete data from the table: "fireboa_cash_out_requests" */
  deleteManyFireboaCashOutRequests?: Maybe<FireboaCashOutRequests_Mutation_Response>;
  /** delete data from the table: "fireboa_modules" */
  deleteManyFireboaModules?: Maybe<FireboaModules_Mutation_Response>;
  /** delete data from the table: "fireboa_projects" */
  deleteManyFireboaProjects?: Maybe<FireboaProjects_Mutation_Response>;
  /** delete data from the table: "fireboa_projects_modules" */
  deleteManyFireboaProjectsModules?: Maybe<FireboaProjectsModules_Mutation_Response>;
  /** delete data from the table: "fireboa_projects_modules_users" */
  deleteManyFireboaProjectsModulesUsers?: Maybe<FireboaProjectsModulesUsers_Mutation_Response>;
  /** delete data from the table: "fireboa_projects_users" */
  deleteManyFireboaProjectsUsers?: Maybe<FireboaProjectsUsers_Mutation_Response>;
  /** delete single row from the table: "fraud_status_enum" */
  deleteManyFraudStatusEnums?: Maybe<FraudStatusEnum>;
  /** delete data from the table: "have_labeled_data_types" */
  deleteManyHaveLabeledDataTypes?: Maybe<HaveLabeledDataTypesEnum_Mutation_Response>;
  /** delete data from the table: "identities_legal_id_type_enum" */
  deleteManyIdentitiesLegalIdTypeEnums?: Maybe<IdentitiesLegalIdTypeEnums_Mutation_Response>;
  /** delete data from the table: "images" */
  deleteManyImages?: Maybe<Images_Mutation_Response>;
  /** delete data from the table: "labelling_platforms" */
  deleteManyLabellingPlatforms?: Maybe<LabellingPlatforms_Mutation_Response>;
  /** delete data from the table: "marketplace_projects" */
  deleteManyMarketplaceProjects?: Maybe<Marketplace_Projects_Mutation_Response>;
  /** delete data from the table: "module_instructions" */
  deleteManyModuleInstructions?: Maybe<ModuleInstructions_Mutation_Response>;
  /** delete data from the table: "modules" */
  deleteManyModules?: Maybe<Modules_Mutation_Response>;
  /** delete data from the table: "modules_marketplace_projects" */
  deleteManyModulesMarketplaceProjects?: Maybe<Modules_Marketplace_Projects_Mutation_Response>;
  /** delete data from the table: "organizations" */
  deleteManyOrganizations?: Maybe<Organizations_Mutation_Response>;
  /** delete data from the table: "organizations_customers" */
  deleteManyOrganizationsCustomers?: Maybe<OrganizationsCustomers_Mutation_Response>;
  /** delete data from the table: "pricing_plans" */
  deleteManyPricingPlans?: Maybe<PricingPlans_Mutation_Response>;
  /** delete data from the table: "project_statuses" */
  deleteManyProjectStatuses?: Maybe<ProjectStatuses_Mutation_Response>;
  /** delete data from the table: "sessions" */
  deleteManySessions?: Maybe<Sessions_Mutation_Response>;
  /** delete data from the table: "spotify_state_types" */
  deleteManySpotifyStateTypes?: Maybe<SpotifyStateTypes_Mutation_Response>;
  /** delete data from the table: "stripe_identity_session_error_code_enum" */
  deleteManyStripeIdentitySessionErrorCodeEnums?: Maybe<StripeIdentitySessionErrorCodeEnums_Mutation_Response>;
  /** delete data from the table: "stripe_identity_session_status_enum" */
  deleteManyStripeIdentitySessionStatusEnums?: Maybe<StripeIdentitySessionStatusEnums_Mutation_Response>;
  /** delete data from the table: "stripe_identity_session_type_enum" */
  deleteManyStripeIdentitySessionTypeEnums?: Maybe<StripeIdentitySessionTypeEnums_Mutation_Response>;
  /** delete data from the table: "stripe_verification_sessions" */
  deleteManyStripeVerificationSessions?: Maybe<StripeVerificationSessions_Mutation_Response>;
  /** delete data from the table: "survey_responses" */
  deleteManySurveyResponses?: Maybe<SurveyResponses_Mutation_Response>;
  /** delete data from the table: "surveys" */
  deleteManySurveys?: Maybe<Surveys_Mutation_Response>;
  /** delete data from the table: "user_identities" */
  deleteManyUserIdentities?: Maybe<UserIdentities_Mutation_Response>;
  /** delete data from the table: "user_module_progress_enum" */
  deleteManyUserModuleStatuses?: Maybe<UserModuleStatus_Mutation_Response>;
  /** delete data from the table: "user_referrals" */
  deleteManyUserReferrals?: Maybe<UserReferrals_Mutation_Response>;
  /** delete data from the table: "users" */
  deleteManyUsers?: Maybe<Users_Mutation_Response>;
  /** delete data from the table: "users_images" */
  deleteManyUsersImages?: Maybe<UsersImages_Mutation_Response>;
  /** delete data from the table: "users_modules" */
  deleteManyUsersModules?: Maybe<UsersModules_Mutation_Response>;
  /** delete data from the table: "users_projects" */
  deleteManyUsersProjects?: Maybe<Users_Projects_Mutation_Response>;
  /** delete data from the table: "users_supplementary" */
  deleteManyUsersSupplementaries?: Maybe<Users_Supplementary_Mutation_Response>;
  /** delete data from the table: "visual_judgement_module_images" */
  deleteManyVisualJudgementModuleImages?: Maybe<VisualJudgementModuleImages_Mutation_Response>;
  /** delete data from the table: "visual_judgement_module_responses" */
  deleteManyVisualJudgementModuleResponses?: Maybe<VisualJudgementModuleResponses_Mutation_Response>;
  /** delete data from the table: "visual_judgement_modules" */
  deleteManyVisualJudgementModules?: Maybe<VisualJudgementModules_Mutation_Response>;
  /** delete data from the table: "wallets" */
  deleteManyWallets?: Maybe<Wallets_Mutation_Response>;
  /** delete data from the table: "workers" */
  deleteManyWorkers?: Maybe<Workers_Mutation_Response>;
  /** delete data from the table: "workers_spotify" */
  deleteManyWorkersSpotify?: Maybe<WorkersSpotify_Mutation_Response>;
  /** delete single row from the table: "cash_out_methods" */
  deleteOneCashOutMethod?: Maybe<CashOutMethods>;
  /** delete single row from the table: "cash_out_requests" */
  deleteOneCashOutRequest?: Maybe<CashOutRequests>;
  /** delete single row from the table: "collection_type" */
  deleteOneCollectionType?: Maybe<CollectionTypes>;
  /** delete single row from the table: "customers" */
  deleteOneCustomer?: Maybe<Customers>;
  /** delete single row from the table: "data_types" */
  deleteOneDataType?: Maybe<DatatTypes>;
  /** delete single row from the table: "etx_task_sessions" */
  deleteOneEtxTaskSession?: Maybe<EtxTaskSessions>;
  /** delete single row from the table: "feature_types" */
  deleteOneFeatureType?: Maybe<FeatureTypes>;
  /** delete single row from the table: "fireboa_cash_out_crypto_requests" */
  deleteOneFireboaCashOutCryptoRequest?: Maybe<FireboaCashOutCryptoRequests>;
  /** delete single row from the table: "fireboa_cash_out_gift_card_requests" */
  deleteOneFireboaCashOutGiftCardRequest?: Maybe<FireboaCashOutGiftCardRequests>;
  /** delete single row from the table: "fireboa_cash_out_preferred_methods" */
  deleteOneFireboaCashOutPreferredMethod?: Maybe<FireboaCashOutPreferredMethods>;
  /** delete single row from the table: "fireboa_cash_out_requests" */
  deleteOneFireboaCashOutRequest?: Maybe<FireboaCashOutRequests>;
  /** delete single row from the table: "fireboa_modules" */
  deleteOneFireboaModule?: Maybe<FireboaModules>;
  /** delete single row from the table: "fireboa_projects" */
  deleteOneFireboaProject?: Maybe<FireboaProjects>;
  /** delete single row from the table: "fireboa_projects_modules" */
  deleteOneFireboaProjectModule?: Maybe<FireboaProjectsModules>;
  /** delete single row from the table: "fireboa_projects_modules_users" */
  deleteOneFireboaProjectModuleUser?: Maybe<FireboaProjectsModulesUsers>;
  /** delete single row from the table: "fireboa_projects_users" */
  deleteOneFireboaProjectUser?: Maybe<FireboaProjectsUsers>;
  /** delete data from the table: "fraud_status_enum" */
  deleteOneFraudStatusEnum?: Maybe<FraudStatusEnum_Mutation_Response>;
  /** delete single row from the table: "have_labeled_data_types" */
  deleteOneHaveLabeledDataType?: Maybe<HaveLabeledDataTypesEnum>;
  /** delete single row from the table: "identities_legal_id_type_enum" */
  deleteOneIdentitiesLegalIdTypeEnum?: Maybe<IdentitiesLegalIdTypeEnums>;
  /** delete single row from the table: "images" */
  deleteOneImage?: Maybe<Images>;
  /** delete single row from the table: "labelling_platforms" */
  deleteOneLabellingPlatform?: Maybe<LabellingPlatforms>;
  /** delete single row from the table: "marketplace_projects" */
  deleteOneMarketplaceProject?: Maybe<Marketplace_Projects>;
  /** delete single row from the table: "modules" */
  deleteOneModule?: Maybe<Modules>;
  /** delete single row from the table: "module_instructions" */
  deleteOneModuleInstruction?: Maybe<ModuleInstructions>;
  /** delete single row from the table: "modules_marketplace_projects" */
  deleteOneModuleMarketplaceProject?: Maybe<Modules_Marketplace_Projects>;
  /** delete single row from the table: "organizations" */
  deleteOneOrganization?: Maybe<Organizations>;
  /** delete single row from the table: "organizations_customers" */
  deleteOneOrganizationCustomer?: Maybe<OrganizationsCustomers>;
  /** delete single row from the table: "pricing_plans" */
  deleteOnePricingPlan?: Maybe<PricingPlans>;
  /** delete single row from the table: "project_statuses" */
  deleteOneProjectStatus?: Maybe<ProjectStatuses>;
  /** delete single row from the table: "sessions" */
  deleteOneSession?: Maybe<Sessions>;
  /** delete single row from the table: "spotify_state_types" */
  deleteOneSpotifyStateType?: Maybe<SpotifyStateTypes>;
  /** delete single row from the table: "stripe_identity_session_error_code_enum" */
  deleteOneStripeIdentitySessionErrorCodeEnum?: Maybe<StripeIdentitySessionErrorCodeEnums>;
  /** delete single row from the table: "stripe_identity_session_status_enum" */
  deleteOneStripeIdentitySessionStatusEnum?: Maybe<StripeIdentitySessionStatusEnums>;
  /** delete single row from the table: "stripe_identity_session_type_enum" */
  deleteOneStripeIdentitySessionTypeEnum?: Maybe<StripeIdentitySessionTypeEnums>;
  /** delete single row from the table: "stripe_verification_sessions" */
  deleteOneStripeVerificationSession?: Maybe<StripeVerificationSessions>;
  /** delete single row from the table: "surveys" */
  deleteOneSurvey?: Maybe<Surveys>;
  /** delete single row from the table: "survey_responses" */
  deleteOneSurveyResponse?: Maybe<SurveyResponses>;
  /** delete single row from the table: "users" */
  deleteOneUser?: Maybe<Users>;
  /** delete single row from the table: "user_identities" */
  deleteOneUserIdentity?: Maybe<UserIdentities>;
  /** delete single row from the table: "users_images" */
  deleteOneUserImage?: Maybe<UsersImages>;
  /** delete single row from the table: "user_module_progress_enum" */
  deleteOneUserModuleStatus?: Maybe<UserModuleStatus>;
  /** delete single row from the table: "users_projects" */
  deleteOneUserProject?: Maybe<Users_Projects>;
  /** delete single row from the table: "user_referrals" */
  deleteOneUserReferral?: Maybe<UserReferrals>;
  /** delete single row from the table: "users_supplementary" */
  deleteOneUserSupplementary?: Maybe<Users_Supplementary>;
  /** delete single row from the table: "users_modules" */
  deleteOneUsersModules?: Maybe<UsersModules>;
  /** delete single row from the table: "visual_judgement_modules" */
  deleteOneVisualJudgementModule?: Maybe<VisualJudgementModules>;
  /** delete single row from the table: "visual_judgement_module_images" */
  deleteOneVisualJudgementModuleImage?: Maybe<VisualJudgementModuleImages>;
  /** delete single row from the table: "visual_judgement_module_responses" */
  deleteOneVisualJudgementModuleResponse?: Maybe<VisualJudgementModuleResponses>;
  /** delete single row from the table: "wallets" */
  deleteOneWallet?: Maybe<Wallets>;
  /** delete single row from the table: "workers" */
  deleteOneWorker?: Maybe<Workers>;
  /** delete single row from the table: "workers_spotify" */
  deleteOneWorkerSpotify?: Maybe<WorkersSpotify>;
  deleteStrapiModule?: Maybe<StrapiModuleEntityResponse>;
  deleteStrapiProject?: Maybe<StrapiProjectEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Update an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteVanaConnectFaq?: Maybe<VanaConnectFaqEntityResponse>;
  /** delete data from the table: "gender" */
  delete_gender?: Maybe<Gender_Mutation_Response>;
  /** delete single row from the table: "gender" */
  delete_gender_by_pk?: Maybe<Gender>;
  /** delete data from the table: "industry_types" */
  delete_industry_types?: Maybe<Industry_Types_Mutation_Response>;
  /** delete single row from the table: "industry_types" */
  delete_industry_types_by_pk?: Maybe<Industry_Types>;
  /** delete data from the table: "managers" */
  delete_managers?: Maybe<Managers_Mutation_Response>;
  /** delete single row from the table: "managers" */
  delete_managers_by_pk?: Maybe<Managers>;
  /** delete data from the table: "strapi" */
  delete_strapi?: Maybe<Strapi_Mutation_Response>;
  /** delete single row from the table: "strapi" */
  delete_strapi_by_pk?: Maybe<Strapi>;
  /** delete data from the table: "user_ip_addresses" */
  delete_user_ip_addresses?: Maybe<User_Ip_Addresses_Mutation_Response>;
  /** delete single row from the table: "user_ip_addresses" */
  delete_user_ip_addresses_by_pk?: Maybe<User_Ip_Addresses>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  /** insert data into the table: "gender" */
  insert_gender?: Maybe<Gender_Mutation_Response>;
  /** insert a single row into the table: "gender" */
  insert_gender_one?: Maybe<Gender>;
  /** insert data into the table: "industry_types" */
  insert_industry_types?: Maybe<Industry_Types_Mutation_Response>;
  /** insert a single row into the table: "industry_types" */
  insert_industry_types_one?: Maybe<Industry_Types>;
  /** insert data into the table: "managers" */
  insert_managers?: Maybe<Managers_Mutation_Response>;
  /** insert a single row into the table: "managers" */
  insert_managers_one?: Maybe<Managers>;
  /** insert data into the table: "strapi" */
  insert_strapi?: Maybe<Strapi_Mutation_Response>;
  /** insert a single row into the table: "strapi" */
  insert_strapi_one?: Maybe<Strapi>;
  /** insert data into the table: "user_ip_addresses" */
  insert_user_ip_addresses?: Maybe<User_Ip_Addresses_Mutation_Response>;
  /** insert a single row into the table: "user_ip_addresses" */
  insert_user_ip_addresses_one?: Maybe<User_Ip_Addresses>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateFileInfo: UploadFileEntityResponse;
  /** update data of the table: "cash_out_methods" */
  updateManyCashOutMethods?: Maybe<CashOutMethods_Mutation_Response>;
  /** update data of the table: "cash_out_requests" */
  updateManyCashOutRequests?: Maybe<CashOutRequests_Mutation_Response>;
  /** update data of the table: "collection_type" */
  updateManyCollectionTypes?: Maybe<CollectionTypes_Mutation_Response>;
  /** update data of the table: "customers" */
  updateManyCustomers?: Maybe<Customers_Mutation_Response>;
  /** update data of the table: "data_types" */
  updateManyDataTypes?: Maybe<DatatTypes_Mutation_Response>;
  /** update data of the table: "etx_task_sessions" */
  updateManyEtxTaskSessions?: Maybe<EtxTaskSessions_Mutation_Response>;
  /** update data of the table: "feature_types" */
  updateManyFeatureTypes?: Maybe<FeatureTypes_Mutation_Response>;
  /** update data of the table: "fireboa_cash_out_crypto_requests" */
  updateManyFireboaCashOutCryptoRequests?: Maybe<FireboaCashOutCryptoRequests_Mutation_Response>;
  /** update data of the table: "fireboa_cash_out_gift_card_requests" */
  updateManyFireboaCashOutGiftCardRequests?: Maybe<FireboaCashOutGiftCardRequests_Mutation_Response>;
  /** update data of the table: "fireboa_cash_out_preferred_methods" */
  updateManyFireboaCashOutPreferredMethods?: Maybe<FireboaCashOutPreferredMethods_Mutation_Response>;
  /** update data of the table: "fireboa_cash_out_requests" */
  updateManyFireboaCashOutRequests?: Maybe<FireboaCashOutRequests_Mutation_Response>;
  /** update data of the table: "fireboa_modules" */
  updateManyFireboaModules?: Maybe<FireboaModules_Mutation_Response>;
  /** update data of the table: "fireboa_projects" */
  updateManyFireboaProjects?: Maybe<FireboaProjects_Mutation_Response>;
  /** update data of the table: "fireboa_projects_modules" */
  updateManyFireboaProjectsModules?: Maybe<FireboaProjectsModules_Mutation_Response>;
  /** update data of the table: "fireboa_projects_modules_users" */
  updateManyFireboaProjectsModulesUsers?: Maybe<FireboaProjectsModulesUsers_Mutation_Response>;
  /** update data of the table: "fireboa_projects_users" */
  updateManyFireboaProjectsUsers?: Maybe<FireboaProjectsUsers_Mutation_Response>;
  /** update single row of the table: "fraud_status_enum" */
  updateManyFraudStatusEnums?: Maybe<FraudStatusEnum>;
  /** update data of the table: "have_labeled_data_types" */
  updateManyHaveLabeledDataTypes?: Maybe<HaveLabeledDataTypesEnum_Mutation_Response>;
  /** update data of the table: "identities_legal_id_type_enum" */
  updateManyIdentitiesLegalIdTypeEnums?: Maybe<IdentitiesLegalIdTypeEnums_Mutation_Response>;
  /** update data of the table: "images" */
  updateManyImages?: Maybe<Images_Mutation_Response>;
  /** update data of the table: "labelling_platforms" */
  updateManyLabellingPlatforms?: Maybe<LabellingPlatforms_Mutation_Response>;
  /** update data of the table: "marketplace_projects" */
  updateManyMarketplaceProjects?: Maybe<Marketplace_Projects_Mutation_Response>;
  /** update data of the table: "module_instructions" */
  updateManyModuleInstructions?: Maybe<ModuleInstructions_Mutation_Response>;
  /** update data of the table: "modules" */
  updateManyModules?: Maybe<Modules_Mutation_Response>;
  /** update data of the table: "modules_marketplace_projects" */
  updateManyModulesMarketplaceProjects?: Maybe<Modules_Marketplace_Projects_Mutation_Response>;
  /** update data of the table: "organizations" */
  updateManyOrganizations?: Maybe<Organizations_Mutation_Response>;
  /** update data of the table: "organizations_customers" */
  updateManyOrganizationsCustomers?: Maybe<OrganizationsCustomers_Mutation_Response>;
  /** update data of the table: "pricing_plans" */
  updateManyPricingPlans?: Maybe<PricingPlans_Mutation_Response>;
  /** update data of the table: "project_statuses" */
  updateManyProjectStatuses?: Maybe<ProjectStatuses_Mutation_Response>;
  /** update data of the table: "sessions" */
  updateManySessions?: Maybe<Sessions_Mutation_Response>;
  /** update data of the table: "spotify_state_types" */
  updateManySpotifyStateTypes?: Maybe<SpotifyStateTypes_Mutation_Response>;
  /** update data of the table: "stripe_identity_session_error_code_enum" */
  updateManyStripeIdentitySessionErrorCodeEnums?: Maybe<StripeIdentitySessionErrorCodeEnums_Mutation_Response>;
  /** update data of the table: "stripe_identity_session_status_enum" */
  updateManyStripeIdentitySessionStatusEnums?: Maybe<StripeIdentitySessionStatusEnums_Mutation_Response>;
  /** update data of the table: "stripe_identity_session_type_enum" */
  updateManyStripeIdentitySessionTypeEnums?: Maybe<StripeIdentitySessionTypeEnums_Mutation_Response>;
  /** update data of the table: "stripe_verification_sessions" */
  updateManyStripeVerificationSessions?: Maybe<StripeVerificationSessions_Mutation_Response>;
  /** update single row of the table: "survey_responses" */
  updateManySurveyResponse?: Maybe<SurveyResponses>;
  /** update data of the table: "survey_responses" */
  updateManySurveyResponses?: Maybe<SurveyResponses_Mutation_Response>;
  /** update data of the table: "surveys" */
  updateManySurveys?: Maybe<Surveys_Mutation_Response>;
  /** update data of the table: "user_identities" */
  updateManyUserIdentities?: Maybe<UserIdentities_Mutation_Response>;
  /** update data of the table: "user_module_progress_enum" */
  updateManyUserModuleStatuses?: Maybe<UserModuleStatus_Mutation_Response>;
  /** update data of the table: "user_referrals" */
  updateManyUserReferrals?: Maybe<UserReferrals_Mutation_Response>;
  /** update data of the table: "users" */
  updateManyUsers?: Maybe<Users_Mutation_Response>;
  /** update data of the table: "users_images" */
  updateManyUsersImages?: Maybe<UsersImages_Mutation_Response>;
  /** update data of the table: "users_modules" */
  updateManyUsersModules?: Maybe<UsersModules_Mutation_Response>;
  /** update data of the table: "users_projects" */
  updateManyUsersProjects?: Maybe<Users_Projects_Mutation_Response>;
  /** update data of the table: "users_supplementary" */
  updateManyUsersSupplementaries?: Maybe<Users_Supplementary_Mutation_Response>;
  /** update data of the table: "visual_judgement_module_images" */
  updateManyVisualJudgementModuleImages?: Maybe<VisualJudgementModuleImages_Mutation_Response>;
  /** update data of the table: "visual_judgement_module_responses" */
  updateManyVisualJudgementModuleResponses?: Maybe<VisualJudgementModuleResponses_Mutation_Response>;
  /** update data of the table: "visual_judgement_modules" */
  updateManyVisualJudgementModules?: Maybe<VisualJudgementModules_Mutation_Response>;
  /** update data of the table: "wallets" */
  updateManyWallets?: Maybe<Wallets_Mutation_Response>;
  /** update data of the table: "workers" */
  updateManyWorkers?: Maybe<Workers_Mutation_Response>;
  /** update data of the table: "workers_spotify" */
  updateManyWorkersSpotify?: Maybe<WorkersSpotify_Mutation_Response>;
  /** update single row of the table: "cash_out_methods" */
  updateOneCashOutMethod?: Maybe<CashOutMethods>;
  /** update single row of the table: "cash_out_requests" */
  updateOneCashOutRequest?: Maybe<CashOutRequests>;
  /** update single row of the table: "collection_type" */
  updateOneCollectionType?: Maybe<CollectionTypes>;
  /** update single row of the table: "customers" */
  updateOneCustomer?: Maybe<Customers>;
  /** update single row of the table: "data_types" */
  updateOneDataType?: Maybe<DatatTypes>;
  /** update single row of the table: "etx_task_sessions" */
  updateOneEtxTaskSession?: Maybe<EtxTaskSessions>;
  /** update single row of the table: "feature_types" */
  updateOneFeatureType?: Maybe<FeatureTypes>;
  /** update single row of the table: "fireboa_cash_out_crypto_requests" */
  updateOneFireboaCashOutCryptoRequest?: Maybe<FireboaCashOutCryptoRequests>;
  /** update single row of the table: "fireboa_cash_out_gift_card_requests" */
  updateOneFireboaCashOutGiftCardRequest?: Maybe<FireboaCashOutGiftCardRequests>;
  /** update single row of the table: "fireboa_cash_out_preferred_methods" */
  updateOneFireboaCashOutPreferredMethod?: Maybe<FireboaCashOutPreferredMethods>;
  /** update single row of the table: "fireboa_cash_out_requests" */
  updateOneFireboaCashOutRequest?: Maybe<FireboaCashOutRequests>;
  /** update single row of the table: "fireboa_modules" */
  updateOneFireboaModule?: Maybe<FireboaModules>;
  /** update single row of the table: "fireboa_projects" */
  updateOneFireboaProject?: Maybe<FireboaProjects>;
  /** update single row of the table: "fireboa_projects_modules" */
  updateOneFireboaProjectModule?: Maybe<FireboaProjectsModules>;
  /** update single row of the table: "fireboa_projects_modules_users" */
  updateOneFireboaProjectModuleUser?: Maybe<FireboaProjectsModulesUsers>;
  /** update single row of the table: "fireboa_projects_users" */
  updateOneFireboaProjectUser?: Maybe<FireboaProjectsUsers>;
  /** update data of the table: "fraud_status_enum" */
  updateOneFraudStatusEnum?: Maybe<FraudStatusEnum_Mutation_Response>;
  /** update single row of the table: "have_labeled_data_types" */
  updateOneHaveLabeledDataType?: Maybe<HaveLabeledDataTypesEnum>;
  /** update single row of the table: "identities_legal_id_type_enum" */
  updateOneIdentitiesLegalIdTypeEnum?: Maybe<IdentitiesLegalIdTypeEnums>;
  /** update single row of the table: "images" */
  updateOneImage?: Maybe<Images>;
  /** update single row of the table: "labelling_platforms" */
  updateOneLabellingPlatform?: Maybe<LabellingPlatforms>;
  /** update single row of the table: "marketplace_projects" */
  updateOneMarketplaceProject?: Maybe<Marketplace_Projects>;
  /** update single row of the table: "modules" */
  updateOneModule?: Maybe<Modules>;
  /** update single row of the table: "module_instructions" */
  updateOneModuleInstruction?: Maybe<ModuleInstructions>;
  /** update single row of the table: "modules_marketplace_projects" */
  updateOneModuleMarketplaceProject?: Maybe<Modules_Marketplace_Projects>;
  /** update single row of the table: "organizations" */
  updateOneOrganization?: Maybe<Organizations>;
  /** update single row of the table: "organizations_customers" */
  updateOneOrganizationCustomer?: Maybe<OrganizationsCustomers>;
  /** update single row of the table: "pricing_plans" */
  updateOnePricingPlan?: Maybe<PricingPlans>;
  /** update single row of the table: "project_statuses" */
  updateOneProjectStatus?: Maybe<ProjectStatuses>;
  /** update single row of the table: "sessions" */
  updateOneSession?: Maybe<Sessions>;
  /** update single row of the table: "spotify_state_types" */
  updateOneSpotifyStateType?: Maybe<SpotifyStateTypes>;
  /** update single row of the table: "stripe_identity_session_error_code_enum" */
  updateOneStripeIdentitySessionErrorCodeEnum?: Maybe<StripeIdentitySessionErrorCodeEnums>;
  /** update single row of the table: "stripe_identity_session_status_enum" */
  updateOneStripeIdentitySessionStatusEnum?: Maybe<StripeIdentitySessionStatusEnums>;
  /** update single row of the table: "stripe_identity_session_type_enum" */
  updateOneStripeIdentitySessionTypeEnum?: Maybe<StripeIdentitySessionTypeEnums>;
  /** update single row of the table: "stripe_verification_sessions" */
  updateOneStripeVerificationSession?: Maybe<StripeVerificationSessions>;
  /** update single row of the table: "surveys" */
  updateOneSurvey?: Maybe<Surveys>;
  /** update single row of the table: "users" */
  updateOneUser?: Maybe<Users>;
  /** update single row of the table: "user_identities" */
  updateOneUserIdentity?: Maybe<UserIdentities>;
  /** update single row of the table: "users_images" */
  updateOneUserImage?: Maybe<UsersImages>;
  /** update single row of the table: "users_modules" */
  updateOneUserModule?: Maybe<UsersModules>;
  /** update single row of the table: "user_module_progress_enum" */
  updateOneUserModuleStatus?: Maybe<UserModuleStatus>;
  /** update single row of the table: "users_projects" */
  updateOneUserProject?: Maybe<Users_Projects>;
  /** update single row of the table: "user_referrals" */
  updateOneUserReferral?: Maybe<UserReferrals>;
  /** update single row of the table: "users_supplementary" */
  updateOneUserSupplementary?: Maybe<Users_Supplementary>;
  /** update single row of the table: "visual_judgement_modules" */
  updateOneVisualJudgementModule?: Maybe<VisualJudgementModules>;
  /** update single row of the table: "visual_judgement_module_images" */
  updateOneVisualJudgementModuleImage?: Maybe<VisualJudgementModuleImages>;
  /** update single row of the table: "visual_judgement_module_responses" */
  updateOneVisualJudgementModuleResponse?: Maybe<VisualJudgementModuleResponses>;
  /** update single row of the table: "wallets" */
  updateOneWallet?: Maybe<Wallets>;
  /** update single row of the table: "workers" */
  updateOneWorker?: Maybe<Workers>;
  /** update single row of the table: "workers_spotify" */
  updateOneWorkerSpotify?: Maybe<WorkersSpotify>;
  updateStrapiModule?: Maybe<StrapiModuleEntityResponse>;
  updateStrapiProject?: Maybe<StrapiProjectEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateVanaConnectFaq?: Maybe<VanaConnectFaqEntityResponse>;
  /** update multiples rows of table: "cash_out_requests" */
  update_CashOutRequests_many?: Maybe<Array<Maybe<CashOutRequests_Mutation_Response>>>;
  /** update multiples rows of table: "collection_type" */
  update_CollectionTypes_many?: Maybe<Array<Maybe<CollectionTypes_Mutation_Response>>>;
  /** update multiples rows of table: "customers" */
  update_Customers_many?: Maybe<Array<Maybe<Customers_Mutation_Response>>>;
  /** update multiples rows of table: "etx_task_sessions" */
  update_EtxTaskSessions_many?: Maybe<Array<Maybe<EtxTaskSessions_Mutation_Response>>>;
  /** update multiples rows of table: "fireboa_cash_out_crypto_requests" */
  update_FireboaCashOutCryptoRequests_many?: Maybe<Array<Maybe<FireboaCashOutCryptoRequests_Mutation_Response>>>;
  /** update multiples rows of table: "fireboa_cash_out_gift_card_requests" */
  update_FireboaCashOutGiftCardRequests_many?: Maybe<Array<Maybe<FireboaCashOutGiftCardRequests_Mutation_Response>>>;
  /** update multiples rows of table: "fireboa_cash_out_preferred_methods" */
  update_FireboaCashOutPreferredMethods_many?: Maybe<Array<Maybe<FireboaCashOutPreferredMethods_Mutation_Response>>>;
  /** update multiples rows of table: "fireboa_cash_out_requests" */
  update_FireboaCashOutRequests_many?: Maybe<Array<Maybe<FireboaCashOutRequests_Mutation_Response>>>;
  /** update multiples rows of table: "fireboa_modules" */
  update_FireboaModules_many?: Maybe<Array<Maybe<FireboaModules_Mutation_Response>>>;
  /** update multiples rows of table: "fireboa_projects_modules_users" */
  update_FireboaProjectsModulesUsers_many?: Maybe<Array<Maybe<FireboaProjectsModulesUsers_Mutation_Response>>>;
  /** update multiples rows of table: "fireboa_projects_modules" */
  update_FireboaProjectsModules_many?: Maybe<Array<Maybe<FireboaProjectsModules_Mutation_Response>>>;
  /** update multiples rows of table: "fireboa_projects_users" */
  update_FireboaProjectsUsers_many?: Maybe<Array<Maybe<FireboaProjectsUsers_Mutation_Response>>>;
  /** update multiples rows of table: "fireboa_projects" */
  update_FireboaProjects_many?: Maybe<Array<Maybe<FireboaProjects_Mutation_Response>>>;
  /** update multiples rows of table: "fraud_status_enum" */
  update_FraudStatusEnum_many?: Maybe<Array<Maybe<FraudStatusEnum_Mutation_Response>>>;
  /** update multiples rows of table: "identities_legal_id_type_enum" */
  update_IdentitiesLegalIdTypeEnums_many?: Maybe<Array<Maybe<IdentitiesLegalIdTypeEnums_Mutation_Response>>>;
  /** update multiples rows of table: "images" */
  update_Images_many?: Maybe<Array<Maybe<Images_Mutation_Response>>>;
  /** update multiples rows of table: "module_instructions" */
  update_ModuleInstructions_many?: Maybe<Array<Maybe<ModuleInstructions_Mutation_Response>>>;
  /** update multiples rows of table: "modules" */
  update_Modules_many?: Maybe<Array<Maybe<Modules_Mutation_Response>>>;
  /** update multiples rows of table: "project_statuses" */
  update_ProjectStatuses_many?: Maybe<Array<Maybe<ProjectStatuses_Mutation_Response>>>;
  /** update multiples rows of table: "sessions" */
  update_Sessions_many?: Maybe<Array<Maybe<Sessions_Mutation_Response>>>;
  /** update multiples rows of table: "stripe_identity_session_error_code_enum" */
  update_StripeIdentitySessionErrorCodeEnums_many?: Maybe<Array<Maybe<StripeIdentitySessionErrorCodeEnums_Mutation_Response>>>;
  /** update multiples rows of table: "stripe_identity_session_status_enum" */
  update_StripeIdentitySessionStatusEnums_many?: Maybe<Array<Maybe<StripeIdentitySessionStatusEnums_Mutation_Response>>>;
  /** update multiples rows of table: "stripe_identity_session_type_enum" */
  update_StripeIdentitySessionTypeEnums_many?: Maybe<Array<Maybe<StripeIdentitySessionTypeEnums_Mutation_Response>>>;
  /** update multiples rows of table: "stripe_verification_sessions" */
  update_StripeVerificationSessions_many?: Maybe<Array<Maybe<StripeVerificationSessions_Mutation_Response>>>;
  /** update multiples rows of table: "survey_responses" */
  update_SurveyResponses_many?: Maybe<Array<Maybe<SurveyResponses_Mutation_Response>>>;
  /** update multiples rows of table: "surveys" */
  update_Surveys_many?: Maybe<Array<Maybe<Surveys_Mutation_Response>>>;
  /** update multiples rows of table: "user_identities" */
  update_UserIdentities_many?: Maybe<Array<Maybe<UserIdentities_Mutation_Response>>>;
  /** update multiples rows of table: "user_module_progress_enum" */
  update_UserModuleStatus_many?: Maybe<Array<Maybe<UserModuleStatus_Mutation_Response>>>;
  /** update multiples rows of table: "user_referrals" */
  update_UserReferrals_many?: Maybe<Array<Maybe<UserReferrals_Mutation_Response>>>;
  /** update multiples rows of table: "users_images" */
  update_UsersImages_many?: Maybe<Array<Maybe<UsersImages_Mutation_Response>>>;
  /** update multiples rows of table: "users_modules" */
  update_UsersModules_many?: Maybe<Array<Maybe<UsersModules_Mutation_Response>>>;
  /** update multiples rows of table: "users" */
  update_Users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update multiples rows of table: "visual_judgement_module_responses" */
  update_VisualJudgementModuleResponses_many?: Maybe<Array<Maybe<VisualJudgementModuleResponses_Mutation_Response>>>;
  /** update multiples rows of table: "wallets" */
  update_Wallets_many?: Maybe<Array<Maybe<Wallets_Mutation_Response>>>;
  /** update multiples rows of table: "workers" */
  update_Workers_many?: Maybe<Array<Maybe<Workers_Mutation_Response>>>;
  /** update multiples rows of table: "cash_out_methods" */
  update_cashOutMethods_many?: Maybe<Array<Maybe<CashOutMethods_Mutation_Response>>>;
  /** update multiples rows of table: "data_types" */
  update_datatTypes_many?: Maybe<Array<Maybe<DatatTypes_Mutation_Response>>>;
  /** update multiples rows of table: "feature_types" */
  update_featureTypes_many?: Maybe<Array<Maybe<FeatureTypes_Mutation_Response>>>;
  /** update data of the table: "gender" */
  update_gender?: Maybe<Gender_Mutation_Response>;
  /** update single row of the table: "gender" */
  update_gender_by_pk?: Maybe<Gender>;
  /** update multiples rows of table: "gender" */
  update_gender_many?: Maybe<Array<Maybe<Gender_Mutation_Response>>>;
  /** update multiples rows of table: "have_labeled_data_types" */
  update_haveLabeledDataTypesEnum_many?: Maybe<Array<Maybe<HaveLabeledDataTypesEnum_Mutation_Response>>>;
  /** update data of the table: "industry_types" */
  update_industry_types?: Maybe<Industry_Types_Mutation_Response>;
  /** update single row of the table: "industry_types" */
  update_industry_types_by_pk?: Maybe<Industry_Types>;
  /** update multiples rows of table: "industry_types" */
  update_industry_types_many?: Maybe<Array<Maybe<Industry_Types_Mutation_Response>>>;
  /** update multiples rows of table: "labelling_platforms" */
  update_labellingPlatforms_many?: Maybe<Array<Maybe<LabellingPlatforms_Mutation_Response>>>;
  /** update data of the table: "managers" */
  update_managers?: Maybe<Managers_Mutation_Response>;
  /** update single row of the table: "managers" */
  update_managers_by_pk?: Maybe<Managers>;
  /** update multiples rows of table: "managers" */
  update_managers_many?: Maybe<Array<Maybe<Managers_Mutation_Response>>>;
  /** update multiples rows of table: "marketplace_projects" */
  update_marketplace_projects_many?: Maybe<Array<Maybe<Marketplace_Projects_Mutation_Response>>>;
  /** update multiples rows of table: "modules_marketplace_projects" */
  update_modules_marketplace_projects_many?: Maybe<Array<Maybe<Modules_Marketplace_Projects_Mutation_Response>>>;
  /** update multiples rows of table: "organizations_customers" */
  update_organizationsCustomers_many?: Maybe<Array<Maybe<OrganizationsCustomers_Mutation_Response>>>;
  /** update multiples rows of table: "organizations" */
  update_organizations_many?: Maybe<Array<Maybe<Organizations_Mutation_Response>>>;
  /** update multiples rows of table: "pricing_plans" */
  update_pricingPlans_many?: Maybe<Array<Maybe<PricingPlans_Mutation_Response>>>;
  /** update multiples rows of table: "spotify_state_types" */
  update_spotifyStateTypes_many?: Maybe<Array<Maybe<SpotifyStateTypes_Mutation_Response>>>;
  /** update data of the table: "strapi" */
  update_strapi?: Maybe<Strapi_Mutation_Response>;
  /** update single row of the table: "strapi" */
  update_strapi_by_pk?: Maybe<Strapi>;
  /** update multiples rows of table: "strapi" */
  update_strapi_many?: Maybe<Array<Maybe<Strapi_Mutation_Response>>>;
  /** update data of the table: "user_ip_addresses" */
  update_user_ip_addresses?: Maybe<User_Ip_Addresses_Mutation_Response>;
  /** update single row of the table: "user_ip_addresses" */
  update_user_ip_addresses_by_pk?: Maybe<User_Ip_Addresses>;
  /** update multiples rows of table: "user_ip_addresses" */
  update_user_ip_addresses_many?: Maybe<Array<Maybe<User_Ip_Addresses_Mutation_Response>>>;
  /** update multiples rows of table: "users_projects" */
  update_users_projects_many?: Maybe<Array<Maybe<Users_Projects_Mutation_Response>>>;
  /** update multiples rows of table: "users_supplementary" */
  update_users_supplementary_many?: Maybe<Array<Maybe<Users_Supplementary_Mutation_Response>>>;
  /** update multiples rows of table: "visual_judgement_module_images" */
  update_visualJudgementModuleImages_many?: Maybe<Array<Maybe<VisualJudgementModuleImages_Mutation_Response>>>;
  /** update multiples rows of table: "visual_judgement_modules" */
  update_visualJudgementModules_many?: Maybe<Array<Maybe<VisualJudgementModules_Mutation_Response>>>;
  /** update multiples rows of table: "workers_spotify" */
  update_workersSpotify_many?: Maybe<Array<Maybe<WorkersSpotify_Mutation_Response>>>;
  upload: UploadFileEntityResponse;
};


/** mutation root */
export type Mutation_RootCreateOneCollectionTypeArgs = {
  object: CollectionTypes_Insert_Input;
  on_conflict?: InputMaybe<CollectionTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyCashOutMethodsArgs = {
  objects: Array<CashOutMethods_Insert_Input>;
  on_conflict?: InputMaybe<CashOutMethods_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyCashOutRequestsArgs = {
  objects: Array<CashOutRequests_Insert_Input>;
  on_conflict?: InputMaybe<CashOutRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyCollectionTypesArgs = {
  objects: Array<CollectionTypes_Insert_Input>;
  on_conflict?: InputMaybe<CollectionTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyCustomersArgs = {
  objects: Array<Customers_Insert_Input>;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyDataTypesArgs = {
  objects: Array<DatatTypes_Insert_Input>;
  on_conflict?: InputMaybe<DatatTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyEtxTaskSessionsArgs = {
  objects: Array<EtxTaskSessions_Insert_Input>;
  on_conflict?: InputMaybe<EtxTaskSessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyFeatureTypesArgs = {
  objects: Array<FeatureTypes_Insert_Input>;
  on_conflict?: InputMaybe<FeatureTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyFireboaCashOutCryptoRequestsArgs = {
  objects: Array<FireboaCashOutCryptoRequests_Insert_Input>;
  on_conflict?: InputMaybe<FireboaCashOutCryptoRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyFireboaCashOutGiftCardRequestsArgs = {
  objects: Array<FireboaCashOutGiftCardRequests_Insert_Input>;
  on_conflict?: InputMaybe<FireboaCashOutGiftCardRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyFireboaCashOutPreferredMethodsArgs = {
  objects: Array<FireboaCashOutPreferredMethods_Insert_Input>;
  on_conflict?: InputMaybe<FireboaCashOutPreferredMethods_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyFireboaCashOutRequestsArgs = {
  objects: Array<FireboaCashOutRequests_Insert_Input>;
  on_conflict?: InputMaybe<FireboaCashOutRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyFireboaModulesArgs = {
  objects: Array<FireboaModules_Insert_Input>;
  on_conflict?: InputMaybe<FireboaModules_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyFireboaProjectsArgs = {
  objects: Array<FireboaProjects_Insert_Input>;
  on_conflict?: InputMaybe<FireboaProjects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyFireboaProjectsModulesArgs = {
  objects: Array<FireboaProjectsModules_Insert_Input>;
  on_conflict?: InputMaybe<FireboaProjectsModules_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyFireboaProjectsModulesUsersArgs = {
  objects: Array<FireboaProjectsModulesUsers_Insert_Input>;
  on_conflict?: InputMaybe<FireboaProjectsModulesUsers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyFireboaProjectsUsersArgs = {
  objects: Array<FireboaProjectsUsers_Insert_Input>;
  on_conflict?: InputMaybe<FireboaProjectsUsers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyFraudStatusEnumsArgs = {
  object: FraudStatusEnum_Insert_Input;
  on_conflict?: InputMaybe<FraudStatusEnum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyHaveLabeledDataTypesArgs = {
  objects: Array<HaveLabeledDataTypesEnum_Insert_Input>;
  on_conflict?: InputMaybe<HaveLabeledDataTypesEnum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyIdentitiesLegalIdTypeEnumsArgs = {
  objects: Array<IdentitiesLegalIdTypeEnums_Insert_Input>;
  on_conflict?: InputMaybe<IdentitiesLegalIdTypeEnums_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyImagesArgs = {
  objects: Array<Images_Insert_Input>;
  on_conflict?: InputMaybe<Images_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyLabellingPlatformsArgs = {
  objects: Array<LabellingPlatforms_Insert_Input>;
  on_conflict?: InputMaybe<LabellingPlatforms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyMarketplaceProjectsArgs = {
  objects: Array<Marketplace_Projects_Insert_Input>;
  on_conflict?: InputMaybe<Marketplace_Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyModuleInstructionsArgs = {
  objects: Array<ModuleInstructions_Insert_Input>;
  on_conflict?: InputMaybe<ModuleInstructions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyModulesArgs = {
  objects: Array<Modules_Insert_Input>;
  on_conflict?: InputMaybe<Modules_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyModulesMarketplaceProjectsArgs = {
  objects: Array<Modules_Marketplace_Projects_Insert_Input>;
  on_conflict?: InputMaybe<Modules_Marketplace_Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyOrganizationsArgs = {
  objects: Array<Organizations_Insert_Input>;
  on_conflict?: InputMaybe<Organizations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyOrganizationsCustomersArgs = {
  objects: Array<OrganizationsCustomers_Insert_Input>;
  on_conflict?: InputMaybe<OrganizationsCustomers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyPricingPlansArgs = {
  objects: Array<PricingPlans_Insert_Input>;
  on_conflict?: InputMaybe<PricingPlans_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyProjectStatusesArgs = {
  objects: Array<ProjectStatuses_Insert_Input>;
  on_conflict?: InputMaybe<ProjectStatuses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManySessionsArgs = {
  objects: Array<Sessions_Insert_Input>;
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManySpotifyStateTypesArgs = {
  objects: Array<SpotifyStateTypes_Insert_Input>;
  on_conflict?: InputMaybe<SpotifyStateTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyStripeIdentitySessionErrorCodeEnumsArgs = {
  objects: Array<StripeIdentitySessionErrorCodeEnums_Insert_Input>;
  on_conflict?: InputMaybe<StripeIdentitySessionErrorCodeEnums_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyStripeIdentitySessionStatusEnumsArgs = {
  objects: Array<StripeIdentitySessionStatusEnums_Insert_Input>;
  on_conflict?: InputMaybe<StripeIdentitySessionStatusEnums_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyStripeIdentitySessionTypeEnumsArgs = {
  objects: Array<StripeIdentitySessionTypeEnums_Insert_Input>;
  on_conflict?: InputMaybe<StripeIdentitySessionTypeEnums_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyStripeVerificationSessionsArgs = {
  objects: Array<StripeVerificationSessions_Insert_Input>;
  on_conflict?: InputMaybe<StripeVerificationSessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManySurveyResponsesArgs = {
  objects: Array<SurveyResponses_Insert_Input>;
  on_conflict?: InputMaybe<SurveyResponses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManySurveysArgs = {
  objects: Array<Surveys_Insert_Input>;
  on_conflict?: InputMaybe<Surveys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyUserIdentitiesArgs = {
  objects: Array<UserIdentities_Insert_Input>;
  on_conflict?: InputMaybe<UserIdentities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyUserModuleStatusesArgs = {
  objects: Array<UserModuleStatus_Insert_Input>;
  on_conflict?: InputMaybe<UserModuleStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyUserReferralsArgs = {
  objects: Array<UserReferrals_Insert_Input>;
  on_conflict?: InputMaybe<UserReferrals_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyUsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyUsersImagesArgs = {
  objects: Array<UsersImages_Insert_Input>;
  on_conflict?: InputMaybe<UsersImages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyUsersModulesArgs = {
  objects: Array<UsersModules_Insert_Input>;
  on_conflict?: InputMaybe<UsersModules_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyUsersProjectsArgs = {
  objects: Array<Users_Projects_Insert_Input>;
  on_conflict?: InputMaybe<Users_Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyUsersSupplementariesArgs = {
  objects: Array<Users_Supplementary_Insert_Input>;
  on_conflict?: InputMaybe<Users_Supplementary_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyVisualJudgementModuleImagesArgs = {
  objects: Array<VisualJudgementModuleImages_Insert_Input>;
  on_conflict?: InputMaybe<VisualJudgementModuleImages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyVisualJudgementModuleResponsesArgs = {
  objects: Array<VisualJudgementModuleResponses_Insert_Input>;
  on_conflict?: InputMaybe<VisualJudgementModuleResponses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyVisualJudgementModulesArgs = {
  objects: Array<VisualJudgementModules_Insert_Input>;
  on_conflict?: InputMaybe<VisualJudgementModules_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyWalletsArgs = {
  objects: Array<Wallets_Insert_Input>;
  on_conflict?: InputMaybe<Wallets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyWorkersArgs = {
  objects: Array<Workers_Insert_Input>;
  on_conflict?: InputMaybe<Workers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateManyWorkersSpotifyArgs = {
  objects: Array<WorkersSpotify_Insert_Input>;
  on_conflict?: InputMaybe<WorkersSpotify_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneCashOutMethodArgs = {
  object: CashOutMethods_Insert_Input;
  on_conflict?: InputMaybe<CashOutMethods_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneCashOutRequestArgs = {
  object: CashOutRequests_Insert_Input;
  on_conflict?: InputMaybe<CashOutRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneCustomerArgs = {
  object: Customers_Insert_Input;
  on_conflict?: InputMaybe<Customers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneDataTypeArgs = {
  object: DatatTypes_Insert_Input;
  on_conflict?: InputMaybe<DatatTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneEtxTaskSessionArgs = {
  object: EtxTaskSessions_Insert_Input;
  on_conflict?: InputMaybe<EtxTaskSessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneFeatureTypeArgs = {
  object: FeatureTypes_Insert_Input;
  on_conflict?: InputMaybe<FeatureTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneFireboaCashOutCryptoRequestArgs = {
  object: FireboaCashOutCryptoRequests_Insert_Input;
  on_conflict?: InputMaybe<FireboaCashOutCryptoRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneFireboaCashOutGiftCardRequestArgs = {
  object: FireboaCashOutGiftCardRequests_Insert_Input;
  on_conflict?: InputMaybe<FireboaCashOutGiftCardRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneFireboaCashOutPreferredMethodArgs = {
  object: FireboaCashOutPreferredMethods_Insert_Input;
  on_conflict?: InputMaybe<FireboaCashOutPreferredMethods_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneFireboaCashOutRequestArgs = {
  object: FireboaCashOutRequests_Insert_Input;
  on_conflict?: InputMaybe<FireboaCashOutRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneFireboaModuleArgs = {
  object: FireboaModules_Insert_Input;
  on_conflict?: InputMaybe<FireboaModules_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneFireboaProjectArgs = {
  object: FireboaProjects_Insert_Input;
  on_conflict?: InputMaybe<FireboaProjects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneFireboaProjectModuleArgs = {
  object: FireboaProjectsModules_Insert_Input;
  on_conflict?: InputMaybe<FireboaProjectsModules_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneFireboaProjectModuleUserArgs = {
  object: FireboaProjectsModulesUsers_Insert_Input;
  on_conflict?: InputMaybe<FireboaProjectsModulesUsers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneFireboaProjectUserArgs = {
  object: FireboaProjectsUsers_Insert_Input;
  on_conflict?: InputMaybe<FireboaProjectsUsers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneFraudStatusEnumArgs = {
  objects: Array<FraudStatusEnum_Insert_Input>;
  on_conflict?: InputMaybe<FraudStatusEnum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneHaveLabeledDataTypeArgs = {
  object: HaveLabeledDataTypesEnum_Insert_Input;
  on_conflict?: InputMaybe<HaveLabeledDataTypesEnum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneIdentitiesLegalIdTypeEnumArgs = {
  object: IdentitiesLegalIdTypeEnums_Insert_Input;
  on_conflict?: InputMaybe<IdentitiesLegalIdTypeEnums_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneImageArgs = {
  object: Images_Insert_Input;
  on_conflict?: InputMaybe<Images_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneLabellingPlatformArgs = {
  object: LabellingPlatforms_Insert_Input;
  on_conflict?: InputMaybe<LabellingPlatforms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneMarketplaceProjectArgs = {
  object: Marketplace_Projects_Insert_Input;
  on_conflict?: InputMaybe<Marketplace_Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneModuleArgs = {
  object: Modules_Insert_Input;
  on_conflict?: InputMaybe<Modules_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneModuleInstructionArgs = {
  object: ModuleInstructions_Insert_Input;
  on_conflict?: InputMaybe<ModuleInstructions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneModuleMarketplaceProjectArgs = {
  object: Modules_Marketplace_Projects_Insert_Input;
  on_conflict?: InputMaybe<Modules_Marketplace_Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneOrganizationArgs = {
  object: Organizations_Insert_Input;
  on_conflict?: InputMaybe<Organizations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneOrganizationCustomerArgs = {
  object: OrganizationsCustomers_Insert_Input;
  on_conflict?: InputMaybe<OrganizationsCustomers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOnePricingPlanArgs = {
  object: PricingPlans_Insert_Input;
  on_conflict?: InputMaybe<PricingPlans_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneProjectStatusArgs = {
  object: ProjectStatuses_Insert_Input;
  on_conflict?: InputMaybe<ProjectStatuses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneSessionArgs = {
  object: Sessions_Insert_Input;
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneSpotifyStateTypeArgs = {
  object: SpotifyStateTypes_Insert_Input;
  on_conflict?: InputMaybe<SpotifyStateTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneStripeIdentitySessionErrorCodeEnumArgs = {
  object: StripeIdentitySessionErrorCodeEnums_Insert_Input;
  on_conflict?: InputMaybe<StripeIdentitySessionErrorCodeEnums_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneStripeIdentitySessionStatusEnumArgs = {
  object: StripeIdentitySessionStatusEnums_Insert_Input;
  on_conflict?: InputMaybe<StripeIdentitySessionStatusEnums_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneStripeIdentitySessionTypeEnumArgs = {
  object: StripeIdentitySessionTypeEnums_Insert_Input;
  on_conflict?: InputMaybe<StripeIdentitySessionTypeEnums_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneStripeVerificationSessionArgs = {
  object: StripeVerificationSessions_Insert_Input;
  on_conflict?: InputMaybe<StripeVerificationSessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneSurveyArgs = {
  object: Surveys_Insert_Input;
  on_conflict?: InputMaybe<Surveys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneSurveyResponseArgs = {
  object: SurveyResponses_Insert_Input;
  on_conflict?: InputMaybe<SurveyResponses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneUserArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneUserIdentityArgs = {
  object: UserIdentities_Insert_Input;
  on_conflict?: InputMaybe<UserIdentities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneUserImageArgs = {
  object: UsersImages_Insert_Input;
  on_conflict?: InputMaybe<UsersImages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneUserModuleArgs = {
  object: UsersModules_Insert_Input;
  on_conflict?: InputMaybe<UsersModules_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneUserModuleStatusArgs = {
  object: UserModuleStatus_Insert_Input;
  on_conflict?: InputMaybe<UserModuleStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneUserProjectArgs = {
  object: Users_Projects_Insert_Input;
  on_conflict?: InputMaybe<Users_Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneUserReferralArgs = {
  object: UserReferrals_Insert_Input;
  on_conflict?: InputMaybe<UserReferrals_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneUserSupplementaryArgs = {
  object: Users_Supplementary_Insert_Input;
  on_conflict?: InputMaybe<Users_Supplementary_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneVisualJudgementModuleArgs = {
  object: VisualJudgementModules_Insert_Input;
  on_conflict?: InputMaybe<VisualJudgementModules_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneVisualJudgementModuleImageArgs = {
  object: VisualJudgementModuleImages_Insert_Input;
  on_conflict?: InputMaybe<VisualJudgementModuleImages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneVisualJudgementModuleResponseArgs = {
  object: VisualJudgementModuleResponses_Insert_Input;
  on_conflict?: InputMaybe<VisualJudgementModuleResponses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneWalletArgs = {
  object: Wallets_Insert_Input;
  on_conflict?: InputMaybe<Wallets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneWorkerArgs = {
  object: Workers_Insert_Input;
  on_conflict?: InputMaybe<Workers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateOneWorkerSpotifyArgs = {
  object: WorkersSpotify_Insert_Input;
  on_conflict?: InputMaybe<WorkersSpotify_On_Conflict>;
};


/** mutation root */
export type Mutation_RootCreateStrapiModuleArgs = {
  data: StrapiModuleInput;
};


/** mutation root */
export type Mutation_RootCreateStrapiProjectArgs = {
  data: StrapiProjectInput;
};


/** mutation root */
export type Mutation_RootCreateUploadFileArgs = {
  data: UploadFileInput;
};


/** mutation root */
export type Mutation_RootCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


/** mutation root */
export type Mutation_RootCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


/** mutation root */
export type Mutation_RootCreateVanaConnectFaqArgs = {
  data: VanaConnectFaqInput;
};


/** mutation root */
export type Mutation_RootDeleteManyCashOutMethodsArgs = {
  where: CashOutMethods_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyCashOutRequestsArgs = {
  where: CashOutRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyCollectionTypesArgs = {
  where: CollectionTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyCustomersArgs = {
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyDataTypesArgs = {
  where: DatatTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyEtxTaskSessionsArgs = {
  where: EtxTaskSessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyFeatureTypesArgs = {
  where: FeatureTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyFireboaCashOutCryptoRequestsArgs = {
  where: FireboaCashOutCryptoRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyFireboaCashOutGiftCardRequestsArgs = {
  where: FireboaCashOutGiftCardRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyFireboaCashOutPreferredMethodsArgs = {
  where: FireboaCashOutPreferredMethods_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyFireboaCashOutRequestsArgs = {
  where: FireboaCashOutRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyFireboaModulesArgs = {
  where: FireboaModules_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyFireboaProjectsArgs = {
  where: FireboaProjects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyFireboaProjectsModulesArgs = {
  where: FireboaProjectsModules_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyFireboaProjectsModulesUsersArgs = {
  where: FireboaProjectsModulesUsers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyFireboaProjectsUsersArgs = {
  where: FireboaProjectsUsers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyFraudStatusEnumsArgs = {
  fraudStatus: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteManyHaveLabeledDataTypesArgs = {
  where: HaveLabeledDataTypesEnum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyIdentitiesLegalIdTypeEnumsArgs = {
  where: IdentitiesLegalIdTypeEnums_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyImagesArgs = {
  where: Images_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyLabellingPlatformsArgs = {
  where: LabellingPlatforms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyMarketplaceProjectsArgs = {
  where: Marketplace_Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyModuleInstructionsArgs = {
  where: ModuleInstructions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyModulesArgs = {
  where: Modules_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyModulesMarketplaceProjectsArgs = {
  where: Modules_Marketplace_Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyOrganizationsArgs = {
  where: Organizations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyOrganizationsCustomersArgs = {
  where: OrganizationsCustomers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyPricingPlansArgs = {
  where: PricingPlans_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyProjectStatusesArgs = {
  where: ProjectStatuses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManySessionsArgs = {
  where: Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManySpotifyStateTypesArgs = {
  where: SpotifyStateTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyStripeIdentitySessionErrorCodeEnumsArgs = {
  where: StripeIdentitySessionErrorCodeEnums_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyStripeIdentitySessionStatusEnumsArgs = {
  where: StripeIdentitySessionStatusEnums_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyStripeIdentitySessionTypeEnumsArgs = {
  where: StripeIdentitySessionTypeEnums_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyStripeVerificationSessionsArgs = {
  where: StripeVerificationSessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManySurveyResponsesArgs = {
  where: SurveyResponses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManySurveysArgs = {
  where: Surveys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyUserIdentitiesArgs = {
  where: UserIdentities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyUserModuleStatusesArgs = {
  where: UserModuleStatus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyUserReferralsArgs = {
  where: UserReferrals_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyUsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyUsersImagesArgs = {
  where: UsersImages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyUsersModulesArgs = {
  where: UsersModules_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyUsersProjectsArgs = {
  where: Users_Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyUsersSupplementariesArgs = {
  where: Users_Supplementary_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyVisualJudgementModuleImagesArgs = {
  where: VisualJudgementModuleImages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyVisualJudgementModuleResponsesArgs = {
  where: VisualJudgementModuleResponses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyVisualJudgementModulesArgs = {
  where: VisualJudgementModules_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyWalletsArgs = {
  where: Wallets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyWorkersArgs = {
  where: Workers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteManyWorkersSpotifyArgs = {
  where: WorkersSpotify_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteOneCashOutMethodArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteOneCashOutRequestArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneCollectionTypeArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteOneCustomerArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneDataTypeArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteOneEtxTaskSessionArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneFeatureTypeArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteOneFireboaCashOutCryptoRequestArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneFireboaCashOutGiftCardRequestArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneFireboaCashOutPreferredMethodArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneFireboaCashOutRequestArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneFireboaModuleArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneFireboaProjectArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneFireboaProjectModuleArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneFireboaProjectModuleUserArgs = {
  fireboaProjectModuleId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneFireboaProjectUserArgs = {
  fireboaProjectId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneFraudStatusEnumArgs = {
  where: FraudStatusEnum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteOneHaveLabeledDataTypeArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteOneIdentitiesLegalIdTypeEnumArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteOneImageArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneLabellingPlatformArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteOneMarketplaceProjectArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneModuleArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneModuleInstructionArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneModuleMarketplaceProjectArgs = {
  moduleId: Scalars['uuid'];
  projectId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneOrganizationArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneOrganizationCustomerArgs = {
  customerId: Scalars['uuid'];
  organizationId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOnePricingPlanArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneProjectStatusArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteOneSessionArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneSpotifyStateTypeArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteOneStripeIdentitySessionErrorCodeEnumArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteOneStripeIdentitySessionStatusEnumArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteOneStripeIdentitySessionTypeEnumArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteOneStripeVerificationSessionArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneSurveyArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneSurveyResponseArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneUserArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneUserIdentityArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneUserImageArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneUserModuleStatusArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteOneUserProjectArgs = {
  projectId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneUserReferralArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneUserSupplementaryArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneUsersModulesArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneVisualJudgementModuleArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneVisualJudgementModuleImageArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneVisualJudgementModuleResponseArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneWalletArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneWorkerArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteOneWorkerSpotifyArgs = {
  workerId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteStrapiModuleArgs = {
  id: Scalars['ID'];
};


/** mutation root */
export type Mutation_RootDeleteStrapiProjectArgs = {
  id: Scalars['ID'];
};


/** mutation root */
export type Mutation_RootDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


/** mutation root */
export type Mutation_RootDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


/** mutation root */
export type Mutation_RootDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


/** mutation root */
export type Mutation_RootDeleteVanaConnectFaqArgs = {
  id: Scalars['ID'];
};


/** mutation root */
export type Mutation_RootDelete_GenderArgs = {
  where: Gender_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Gender_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Industry_TypesArgs = {
  where: Industry_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Industry_Types_By_PkArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_ManagersArgs = {
  where: Managers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Managers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_StrapiArgs = {
  where: Strapi_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Strapi_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_Ip_AddressesArgs = {
  where: User_Ip_Addresses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Ip_Addresses_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


/** mutation root */
export type Mutation_RootForgotPasswordArgs = {
  email: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_GenderArgs = {
  objects: Array<Gender_Insert_Input>;
  on_conflict?: InputMaybe<Gender_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gender_OneArgs = {
  object: Gender_Insert_Input;
  on_conflict?: InputMaybe<Gender_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Industry_TypesArgs = {
  objects: Array<Industry_Types_Insert_Input>;
  on_conflict?: InputMaybe<Industry_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Industry_Types_OneArgs = {
  object: Industry_Types_Insert_Input;
  on_conflict?: InputMaybe<Industry_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ManagersArgs = {
  objects: Array<Managers_Insert_Input>;
  on_conflict?: InputMaybe<Managers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Managers_OneArgs = {
  object: Managers_Insert_Input;
  on_conflict?: InputMaybe<Managers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StrapiArgs = {
  objects: Array<Strapi_Insert_Input>;
  on_conflict?: InputMaybe<Strapi_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Strapi_OneArgs = {
  object: Strapi_Insert_Input;
  on_conflict?: InputMaybe<Strapi_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Ip_AddressesArgs = {
  objects: Array<User_Ip_Addresses_Insert_Input>;
  on_conflict?: InputMaybe<User_Ip_Addresses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Ip_Addresses_OneArgs = {
  object: User_Ip_Addresses_Insert_Input;
  on_conflict?: InputMaybe<User_Ip_Addresses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  input: UsersPermissionsLoginInput;
};


/** mutation root */
export type Mutation_RootMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


/** mutation root */
export type Mutation_RootRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


/** mutation root */
export type Mutation_RootRemoveFileArgs = {
  id: Scalars['ID'];
};


/** mutation root */
export type Mutation_RootResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


/** mutation root */
export type Mutation_RootUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


/** mutation root */
export type Mutation_RootUpdateManyCashOutMethodsArgs = {
  _set?: InputMaybe<CashOutMethods_Set_Input>;
  where: CashOutMethods_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyCashOutRequestsArgs = {
  _inc?: InputMaybe<CashOutRequests_Inc_Input>;
  _set?: InputMaybe<CashOutRequests_Set_Input>;
  where: CashOutRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyCollectionTypesArgs = {
  _set?: InputMaybe<CollectionTypes_Set_Input>;
  where: CollectionTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyCustomersArgs = {
  _set?: InputMaybe<Customers_Set_Input>;
  where: Customers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyDataTypesArgs = {
  _set?: InputMaybe<DatatTypes_Set_Input>;
  where: DatatTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyEtxTaskSessionsArgs = {
  _set?: InputMaybe<EtxTaskSessions_Set_Input>;
  where: EtxTaskSessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyFeatureTypesArgs = {
  _set?: InputMaybe<FeatureTypes_Set_Input>;
  where: FeatureTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyFireboaCashOutCryptoRequestsArgs = {
  _set?: InputMaybe<FireboaCashOutCryptoRequests_Set_Input>;
  where: FireboaCashOutCryptoRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyFireboaCashOutGiftCardRequestsArgs = {
  _set?: InputMaybe<FireboaCashOutGiftCardRequests_Set_Input>;
  where: FireboaCashOutGiftCardRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyFireboaCashOutPreferredMethodsArgs = {
  _set?: InputMaybe<FireboaCashOutPreferredMethods_Set_Input>;
  where: FireboaCashOutPreferredMethods_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyFireboaCashOutRequestsArgs = {
  _inc?: InputMaybe<FireboaCashOutRequests_Inc_Input>;
  _set?: InputMaybe<FireboaCashOutRequests_Set_Input>;
  where: FireboaCashOutRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyFireboaModulesArgs = {
  _set?: InputMaybe<FireboaModules_Set_Input>;
  where: FireboaModules_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyFireboaProjectsArgs = {
  _set?: InputMaybe<FireboaProjects_Set_Input>;
  where: FireboaProjects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyFireboaProjectsModulesArgs = {
  _append?: InputMaybe<FireboaProjectsModules_Append_Input>;
  _delete_at_path?: InputMaybe<FireboaProjectsModules_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<FireboaProjectsModules_Delete_Elem_Input>;
  _delete_key?: InputMaybe<FireboaProjectsModules_Delete_Key_Input>;
  _inc?: InputMaybe<FireboaProjectsModules_Inc_Input>;
  _prepend?: InputMaybe<FireboaProjectsModules_Prepend_Input>;
  _set?: InputMaybe<FireboaProjectsModules_Set_Input>;
  where: FireboaProjectsModules_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyFireboaProjectsModulesUsersArgs = {
  _append?: InputMaybe<FireboaProjectsModulesUsers_Append_Input>;
  _delete_at_path?: InputMaybe<FireboaProjectsModulesUsers_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<FireboaProjectsModulesUsers_Delete_Elem_Input>;
  _delete_key?: InputMaybe<FireboaProjectsModulesUsers_Delete_Key_Input>;
  _prepend?: InputMaybe<FireboaProjectsModulesUsers_Prepend_Input>;
  _set?: InputMaybe<FireboaProjectsModulesUsers_Set_Input>;
  where: FireboaProjectsModulesUsers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyFireboaProjectsUsersArgs = {
  _set?: InputMaybe<FireboaProjectsUsers_Set_Input>;
  where: FireboaProjectsUsers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyFraudStatusEnumsArgs = {
  _set?: InputMaybe<FraudStatusEnum_Set_Input>;
  pk_columns: FraudStatusEnum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateManyHaveLabeledDataTypesArgs = {
  _set?: InputMaybe<HaveLabeledDataTypesEnum_Set_Input>;
  where: HaveLabeledDataTypesEnum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyIdentitiesLegalIdTypeEnumsArgs = {
  _set?: InputMaybe<IdentitiesLegalIdTypeEnums_Set_Input>;
  where: IdentitiesLegalIdTypeEnums_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyImagesArgs = {
  _set?: InputMaybe<Images_Set_Input>;
  where: Images_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyLabellingPlatformsArgs = {
  _set?: InputMaybe<LabellingPlatforms_Set_Input>;
  where: LabellingPlatforms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyMarketplaceProjectsArgs = {
  _set?: InputMaybe<Marketplace_Projects_Set_Input>;
  where: Marketplace_Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyModuleInstructionsArgs = {
  _set?: InputMaybe<ModuleInstructions_Set_Input>;
  where: ModuleInstructions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyModulesArgs = {
  _set?: InputMaybe<Modules_Set_Input>;
  where: Modules_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyModulesMarketplaceProjectsArgs = {
  _set?: InputMaybe<Modules_Marketplace_Projects_Set_Input>;
  where: Modules_Marketplace_Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyOrganizationsArgs = {
  _set?: InputMaybe<Organizations_Set_Input>;
  where: Organizations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyOrganizationsCustomersArgs = {
  _set?: InputMaybe<OrganizationsCustomers_Set_Input>;
  where: OrganizationsCustomers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyPricingPlansArgs = {
  _inc?: InputMaybe<PricingPlans_Inc_Input>;
  _set?: InputMaybe<PricingPlans_Set_Input>;
  where: PricingPlans_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyProjectStatusesArgs = {
  _set?: InputMaybe<ProjectStatuses_Set_Input>;
  where: ProjectStatuses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManySessionsArgs = {
  _set?: InputMaybe<Sessions_Set_Input>;
  where: Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManySpotifyStateTypesArgs = {
  _set?: InputMaybe<SpotifyStateTypes_Set_Input>;
  where: SpotifyStateTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyStripeIdentitySessionErrorCodeEnumsArgs = {
  _set?: InputMaybe<StripeIdentitySessionErrorCodeEnums_Set_Input>;
  where: StripeIdentitySessionErrorCodeEnums_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyStripeIdentitySessionStatusEnumsArgs = {
  _set?: InputMaybe<StripeIdentitySessionStatusEnums_Set_Input>;
  where: StripeIdentitySessionStatusEnums_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyStripeIdentitySessionTypeEnumsArgs = {
  _set?: InputMaybe<StripeIdentitySessionTypeEnums_Set_Input>;
  where: StripeIdentitySessionTypeEnums_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyStripeVerificationSessionsArgs = {
  _set?: InputMaybe<StripeVerificationSessions_Set_Input>;
  where: StripeVerificationSessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManySurveyResponseArgs = {
  _set?: InputMaybe<SurveyResponses_Set_Input>;
  pk_columns: SurveyResponses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateManySurveyResponsesArgs = {
  _set?: InputMaybe<SurveyResponses_Set_Input>;
  where: SurveyResponses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManySurveysArgs = {
  _set?: InputMaybe<Surveys_Set_Input>;
  where: Surveys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyUserIdentitiesArgs = {
  _set?: InputMaybe<UserIdentities_Set_Input>;
  where: UserIdentities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyUserModuleStatusesArgs = {
  _set?: InputMaybe<UserModuleStatus_Set_Input>;
  where: UserModuleStatus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyUserReferralsArgs = {
  _set?: InputMaybe<UserReferrals_Set_Input>;
  where: UserReferrals_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyUsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyUsersImagesArgs = {
  _set?: InputMaybe<UsersImages_Set_Input>;
  where: UsersImages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyUsersModulesArgs = {
  _inc?: InputMaybe<UsersModules_Inc_Input>;
  _set?: InputMaybe<UsersModules_Set_Input>;
  where: UsersModules_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyUsersProjectsArgs = {
  _set?: InputMaybe<Users_Projects_Set_Input>;
  where: Users_Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyUsersSupplementariesArgs = {
  _set?: InputMaybe<Users_Supplementary_Set_Input>;
  where: Users_Supplementary_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyVisualJudgementModuleImagesArgs = {
  _append?: InputMaybe<VisualJudgementModuleImages_Append_Input>;
  _delete_at_path?: InputMaybe<VisualJudgementModuleImages_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<VisualJudgementModuleImages_Delete_Elem_Input>;
  _delete_key?: InputMaybe<VisualJudgementModuleImages_Delete_Key_Input>;
  _prepend?: InputMaybe<VisualJudgementModuleImages_Prepend_Input>;
  _set?: InputMaybe<VisualJudgementModuleImages_Set_Input>;
  where: VisualJudgementModuleImages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyVisualJudgementModuleResponsesArgs = {
  _set?: InputMaybe<VisualJudgementModuleResponses_Set_Input>;
  where: VisualJudgementModuleResponses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyVisualJudgementModulesArgs = {
  _append?: InputMaybe<VisualJudgementModules_Append_Input>;
  _delete_at_path?: InputMaybe<VisualJudgementModules_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<VisualJudgementModules_Delete_Elem_Input>;
  _delete_key?: InputMaybe<VisualJudgementModules_Delete_Key_Input>;
  _prepend?: InputMaybe<VisualJudgementModules_Prepend_Input>;
  _set?: InputMaybe<VisualJudgementModules_Set_Input>;
  where: VisualJudgementModules_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyWalletsArgs = {
  _set?: InputMaybe<Wallets_Set_Input>;
  where: Wallets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyWorkersArgs = {
  _inc?: InputMaybe<Workers_Inc_Input>;
  _set?: InputMaybe<Workers_Set_Input>;
  where: Workers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateManyWorkersSpotifyArgs = {
  _set?: InputMaybe<WorkersSpotify_Set_Input>;
  where: WorkersSpotify_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateOneCashOutMethodArgs = {
  _set?: InputMaybe<CashOutMethods_Set_Input>;
  pk_columns: CashOutMethods_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneCashOutRequestArgs = {
  _inc?: InputMaybe<CashOutRequests_Inc_Input>;
  _set?: InputMaybe<CashOutRequests_Set_Input>;
  pk_columns: CashOutRequests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneCollectionTypeArgs = {
  _set?: InputMaybe<CollectionTypes_Set_Input>;
  pk_columns: CollectionTypes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneCustomerArgs = {
  _set?: InputMaybe<Customers_Set_Input>;
  pk_columns: Customers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneDataTypeArgs = {
  _set?: InputMaybe<DatatTypes_Set_Input>;
  pk_columns: DatatTypes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneEtxTaskSessionArgs = {
  _set?: InputMaybe<EtxTaskSessions_Set_Input>;
  pk_columns: EtxTaskSessions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneFeatureTypeArgs = {
  _set?: InputMaybe<FeatureTypes_Set_Input>;
  pk_columns: FeatureTypes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneFireboaCashOutCryptoRequestArgs = {
  _set?: InputMaybe<FireboaCashOutCryptoRequests_Set_Input>;
  pk_columns: FireboaCashOutCryptoRequests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneFireboaCashOutGiftCardRequestArgs = {
  _set?: InputMaybe<FireboaCashOutGiftCardRequests_Set_Input>;
  pk_columns: FireboaCashOutGiftCardRequests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneFireboaCashOutPreferredMethodArgs = {
  _set?: InputMaybe<FireboaCashOutPreferredMethods_Set_Input>;
  pk_columns: FireboaCashOutPreferredMethods_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneFireboaCashOutRequestArgs = {
  _inc?: InputMaybe<FireboaCashOutRequests_Inc_Input>;
  _set?: InputMaybe<FireboaCashOutRequests_Set_Input>;
  pk_columns: FireboaCashOutRequests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneFireboaModuleArgs = {
  _set?: InputMaybe<FireboaModules_Set_Input>;
  pk_columns: FireboaModules_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneFireboaProjectArgs = {
  _set?: InputMaybe<FireboaProjects_Set_Input>;
  pk_columns: FireboaProjects_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneFireboaProjectModuleArgs = {
  _append?: InputMaybe<FireboaProjectsModules_Append_Input>;
  _delete_at_path?: InputMaybe<FireboaProjectsModules_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<FireboaProjectsModules_Delete_Elem_Input>;
  _delete_key?: InputMaybe<FireboaProjectsModules_Delete_Key_Input>;
  _inc?: InputMaybe<FireboaProjectsModules_Inc_Input>;
  _prepend?: InputMaybe<FireboaProjectsModules_Prepend_Input>;
  _set?: InputMaybe<FireboaProjectsModules_Set_Input>;
  pk_columns: FireboaProjectsModules_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneFireboaProjectModuleUserArgs = {
  _append?: InputMaybe<FireboaProjectsModulesUsers_Append_Input>;
  _delete_at_path?: InputMaybe<FireboaProjectsModulesUsers_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<FireboaProjectsModulesUsers_Delete_Elem_Input>;
  _delete_key?: InputMaybe<FireboaProjectsModulesUsers_Delete_Key_Input>;
  _prepend?: InputMaybe<FireboaProjectsModulesUsers_Prepend_Input>;
  _set?: InputMaybe<FireboaProjectsModulesUsers_Set_Input>;
  pk_columns: FireboaProjectsModulesUsers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneFireboaProjectUserArgs = {
  _set?: InputMaybe<FireboaProjectsUsers_Set_Input>;
  pk_columns: FireboaProjectsUsers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneFraudStatusEnumArgs = {
  _set?: InputMaybe<FraudStatusEnum_Set_Input>;
  where: FraudStatusEnum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateOneHaveLabeledDataTypeArgs = {
  _set?: InputMaybe<HaveLabeledDataTypesEnum_Set_Input>;
  pk_columns: HaveLabeledDataTypesEnum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneIdentitiesLegalIdTypeEnumArgs = {
  _set?: InputMaybe<IdentitiesLegalIdTypeEnums_Set_Input>;
  pk_columns: IdentitiesLegalIdTypeEnums_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneImageArgs = {
  _set?: InputMaybe<Images_Set_Input>;
  pk_columns: Images_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneLabellingPlatformArgs = {
  _set?: InputMaybe<LabellingPlatforms_Set_Input>;
  pk_columns: LabellingPlatforms_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneMarketplaceProjectArgs = {
  _set?: InputMaybe<Marketplace_Projects_Set_Input>;
  pk_columns: Marketplace_Projects_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneModuleArgs = {
  _set?: InputMaybe<Modules_Set_Input>;
  pk_columns: Modules_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneModuleInstructionArgs = {
  _set?: InputMaybe<ModuleInstructions_Set_Input>;
  pk_columns: ModuleInstructions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneModuleMarketplaceProjectArgs = {
  _set?: InputMaybe<Modules_Marketplace_Projects_Set_Input>;
  pk_columns: Modules_Marketplace_Projects_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneOrganizationArgs = {
  _set?: InputMaybe<Organizations_Set_Input>;
  pk_columns: Organizations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneOrganizationCustomerArgs = {
  _set?: InputMaybe<OrganizationsCustomers_Set_Input>;
  pk_columns: OrganizationsCustomers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOnePricingPlanArgs = {
  _inc?: InputMaybe<PricingPlans_Inc_Input>;
  _set?: InputMaybe<PricingPlans_Set_Input>;
  pk_columns: PricingPlans_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneProjectStatusArgs = {
  _set?: InputMaybe<ProjectStatuses_Set_Input>;
  pk_columns: ProjectStatuses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneSessionArgs = {
  _set?: InputMaybe<Sessions_Set_Input>;
  pk_columns: Sessions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneSpotifyStateTypeArgs = {
  _set?: InputMaybe<SpotifyStateTypes_Set_Input>;
  pk_columns: SpotifyStateTypes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneStripeIdentitySessionErrorCodeEnumArgs = {
  _set?: InputMaybe<StripeIdentitySessionErrorCodeEnums_Set_Input>;
  pk_columns: StripeIdentitySessionErrorCodeEnums_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneStripeIdentitySessionStatusEnumArgs = {
  _set?: InputMaybe<StripeIdentitySessionStatusEnums_Set_Input>;
  pk_columns: StripeIdentitySessionStatusEnums_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneStripeIdentitySessionTypeEnumArgs = {
  _set?: InputMaybe<StripeIdentitySessionTypeEnums_Set_Input>;
  pk_columns: StripeIdentitySessionTypeEnums_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneStripeVerificationSessionArgs = {
  _set?: InputMaybe<StripeVerificationSessions_Set_Input>;
  pk_columns: StripeVerificationSessions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneSurveyArgs = {
  _set?: InputMaybe<Surveys_Set_Input>;
  pk_columns: Surveys_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneUserArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneUserIdentityArgs = {
  _set?: InputMaybe<UserIdentities_Set_Input>;
  pk_columns: UserIdentities_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneUserImageArgs = {
  _set?: InputMaybe<UsersImages_Set_Input>;
  pk_columns: UsersImages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneUserModuleArgs = {
  _inc?: InputMaybe<UsersModules_Inc_Input>;
  _set?: InputMaybe<UsersModules_Set_Input>;
  pk_columns: UsersModules_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneUserModuleStatusArgs = {
  _set?: InputMaybe<UserModuleStatus_Set_Input>;
  pk_columns: UserModuleStatus_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneUserProjectArgs = {
  _set?: InputMaybe<Users_Projects_Set_Input>;
  pk_columns: Users_Projects_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneUserReferralArgs = {
  _set?: InputMaybe<UserReferrals_Set_Input>;
  pk_columns: UserReferrals_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneUserSupplementaryArgs = {
  _set?: InputMaybe<Users_Supplementary_Set_Input>;
  pk_columns: Users_Supplementary_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneVisualJudgementModuleArgs = {
  _append?: InputMaybe<VisualJudgementModules_Append_Input>;
  _delete_at_path?: InputMaybe<VisualJudgementModules_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<VisualJudgementModules_Delete_Elem_Input>;
  _delete_key?: InputMaybe<VisualJudgementModules_Delete_Key_Input>;
  _prepend?: InputMaybe<VisualJudgementModules_Prepend_Input>;
  _set?: InputMaybe<VisualJudgementModules_Set_Input>;
  pk_columns: VisualJudgementModules_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneVisualJudgementModuleImageArgs = {
  _append?: InputMaybe<VisualJudgementModuleImages_Append_Input>;
  _delete_at_path?: InputMaybe<VisualJudgementModuleImages_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<VisualJudgementModuleImages_Delete_Elem_Input>;
  _delete_key?: InputMaybe<VisualJudgementModuleImages_Delete_Key_Input>;
  _prepend?: InputMaybe<VisualJudgementModuleImages_Prepend_Input>;
  _set?: InputMaybe<VisualJudgementModuleImages_Set_Input>;
  pk_columns: VisualJudgementModuleImages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneVisualJudgementModuleResponseArgs = {
  _set?: InputMaybe<VisualJudgementModuleResponses_Set_Input>;
  pk_columns: VisualJudgementModuleResponses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneWalletArgs = {
  _set?: InputMaybe<Wallets_Set_Input>;
  pk_columns: Wallets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneWorkerArgs = {
  _inc?: InputMaybe<Workers_Inc_Input>;
  _set?: InputMaybe<Workers_Set_Input>;
  pk_columns: Workers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateOneWorkerSpotifyArgs = {
  _set?: InputMaybe<WorkersSpotify_Set_Input>;
  pk_columns: WorkersSpotify_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateStrapiModuleArgs = {
  data: StrapiModuleInput;
  id: Scalars['ID'];
};


/** mutation root */
export type Mutation_RootUpdateStrapiProjectArgs = {
  data: StrapiProjectInput;
  id: Scalars['ID'];
};


/** mutation root */
export type Mutation_RootUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


/** mutation root */
export type Mutation_RootUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


/** mutation root */
export type Mutation_RootUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


/** mutation root */
export type Mutation_RootUpdateVanaConnectFaqArgs = {
  data: VanaConnectFaqInput;
  id: Scalars['ID'];
};


/** mutation root */
export type Mutation_RootUpdate_CashOutRequests_ManyArgs = {
  updates: Array<CashOutRequests_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CollectionTypes_ManyArgs = {
  updates: Array<CollectionTypes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Customers_ManyArgs = {
  updates: Array<Customers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_EtxTaskSessions_ManyArgs = {
  updates: Array<EtxTaskSessions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_FireboaCashOutCryptoRequests_ManyArgs = {
  updates: Array<FireboaCashOutCryptoRequests_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_FireboaCashOutGiftCardRequests_ManyArgs = {
  updates: Array<FireboaCashOutGiftCardRequests_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_FireboaCashOutPreferredMethods_ManyArgs = {
  updates: Array<FireboaCashOutPreferredMethods_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_FireboaCashOutRequests_ManyArgs = {
  updates: Array<FireboaCashOutRequests_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_FireboaModules_ManyArgs = {
  updates: Array<FireboaModules_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_FireboaProjectsModulesUsers_ManyArgs = {
  updates: Array<FireboaProjectsModulesUsers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_FireboaProjectsModules_ManyArgs = {
  updates: Array<FireboaProjectsModules_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_FireboaProjectsUsers_ManyArgs = {
  updates: Array<FireboaProjectsUsers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_FireboaProjects_ManyArgs = {
  updates: Array<FireboaProjects_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_FraudStatusEnum_ManyArgs = {
  updates: Array<FraudStatusEnum_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_IdentitiesLegalIdTypeEnums_ManyArgs = {
  updates: Array<IdentitiesLegalIdTypeEnums_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Images_ManyArgs = {
  updates: Array<Images_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ModuleInstructions_ManyArgs = {
  updates: Array<ModuleInstructions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Modules_ManyArgs = {
  updates: Array<Modules_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProjectStatuses_ManyArgs = {
  updates: Array<ProjectStatuses_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Sessions_ManyArgs = {
  updates: Array<Sessions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_StripeIdentitySessionErrorCodeEnums_ManyArgs = {
  updates: Array<StripeIdentitySessionErrorCodeEnums_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_StripeIdentitySessionStatusEnums_ManyArgs = {
  updates: Array<StripeIdentitySessionStatusEnums_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_StripeIdentitySessionTypeEnums_ManyArgs = {
  updates: Array<StripeIdentitySessionTypeEnums_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_StripeVerificationSessions_ManyArgs = {
  updates: Array<StripeVerificationSessions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SurveyResponses_ManyArgs = {
  updates: Array<SurveyResponses_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Surveys_ManyArgs = {
  updates: Array<Surveys_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserIdentities_ManyArgs = {
  updates: Array<UserIdentities_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserModuleStatus_ManyArgs = {
  updates: Array<UserModuleStatus_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserReferrals_ManyArgs = {
  updates: Array<UserReferrals_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersImages_ManyArgs = {
  updates: Array<UsersImages_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersModules_ManyArgs = {
  updates: Array<UsersModules_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_VisualJudgementModuleResponses_ManyArgs = {
  updates: Array<VisualJudgementModuleResponses_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Wallets_ManyArgs = {
  updates: Array<Wallets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Workers_ManyArgs = {
  updates: Array<Workers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CashOutMethods_ManyArgs = {
  updates: Array<CashOutMethods_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_DatatTypes_ManyArgs = {
  updates: Array<DatatTypes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_FeatureTypes_ManyArgs = {
  updates: Array<FeatureTypes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GenderArgs = {
  _set?: InputMaybe<Gender_Set_Input>;
  where: Gender_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Gender_By_PkArgs = {
  _set?: InputMaybe<Gender_Set_Input>;
  pk_columns: Gender_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Gender_ManyArgs = {
  updates: Array<Gender_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_HaveLabeledDataTypesEnum_ManyArgs = {
  updates: Array<HaveLabeledDataTypesEnum_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Industry_TypesArgs = {
  _set?: InputMaybe<Industry_Types_Set_Input>;
  where: Industry_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Industry_Types_By_PkArgs = {
  _set?: InputMaybe<Industry_Types_Set_Input>;
  pk_columns: Industry_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Industry_Types_ManyArgs = {
  updates: Array<Industry_Types_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_LabellingPlatforms_ManyArgs = {
  updates: Array<LabellingPlatforms_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ManagersArgs = {
  _set?: InputMaybe<Managers_Set_Input>;
  where: Managers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Managers_By_PkArgs = {
  _set?: InputMaybe<Managers_Set_Input>;
  pk_columns: Managers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Managers_ManyArgs = {
  updates: Array<Managers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Marketplace_Projects_ManyArgs = {
  updates: Array<Marketplace_Projects_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Modules_Marketplace_Projects_ManyArgs = {
  updates: Array<Modules_Marketplace_Projects_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrganizationsCustomers_ManyArgs = {
  updates: Array<OrganizationsCustomers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Organizations_ManyArgs = {
  updates: Array<Organizations_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PricingPlans_ManyArgs = {
  updates: Array<PricingPlans_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SpotifyStateTypes_ManyArgs = {
  updates: Array<SpotifyStateTypes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_StrapiArgs = {
  _set?: InputMaybe<Strapi_Set_Input>;
  where: Strapi_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Strapi_By_PkArgs = {
  _set?: InputMaybe<Strapi_Set_Input>;
  pk_columns: Strapi_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Strapi_ManyArgs = {
  updates: Array<Strapi_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_Ip_AddressesArgs = {
  _set?: InputMaybe<User_Ip_Addresses_Set_Input>;
  where: User_Ip_Addresses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Ip_Addresses_By_PkArgs = {
  _set?: InputMaybe<User_Ip_Addresses_Set_Input>;
  pk_columns: User_Ip_Addresses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Ip_Addresses_ManyArgs = {
  updates: Array<User_Ip_Addresses_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Projects_ManyArgs = {
  updates: Array<Users_Projects_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Supplementary_ManyArgs = {
  updates: Array<Users_Supplementary_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_VisualJudgementModuleImages_ManyArgs = {
  updates: Array<VisualJudgementModuleImages_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_VisualJudgementModules_ManyArgs = {
  updates: Array<VisualJudgementModules_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_WorkersSpotify_ManyArgs = {
  updates: Array<WorkersSpotify_Updates>;
};


/** mutation root */
export type Mutation_RootUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "organizations" */
export type Organizations = {
  __typename?: 'organizations';
  /** An array relationship */
  customers: Array<Customers>;
  /** An aggregate relationship */
  customers_aggregate: Customers_Aggregate;
  domain?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  slackChannel?: Maybe<Scalars['String']>;
  stripeCustomerId?: Maybe<Scalars['String']>;
  /** An object relationship */
  technicalContact?: Maybe<Customers>;
  technicalContactId?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "organizations" */
export type OrganizationsCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


/** columns and relationships of "organizations" */
export type OrganizationsCustomers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};

/** columns and relationships of "organizations_customers" */
export type OrganizationsCustomers = {
  __typename?: 'organizationsCustomers';
  billingAdmin: Scalars['Boolean'];
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  customer: Customers;
  customerId: Scalars['uuid'];
  /** An object relationship */
  organization: Organizations;
  organizationId: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "organizations_customers" */
export type OrganizationsCustomers_Aggregate = {
  __typename?: 'organizationsCustomers_aggregate';
  aggregate?: Maybe<OrganizationsCustomers_Aggregate_Fields>;
  nodes: Array<OrganizationsCustomers>;
};

/** aggregate fields of "organizations_customers" */
export type OrganizationsCustomers_Aggregate_Fields = {
  __typename?: 'organizationsCustomers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<OrganizationsCustomers_Max_Fields>;
  min?: Maybe<OrganizationsCustomers_Min_Fields>;
};


/** aggregate fields of "organizations_customers" */
export type OrganizationsCustomers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<OrganizationsCustomers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "organizations_customers". All fields are combined with a logical 'AND'. */
export type OrganizationsCustomers_Bool_Exp = {
  _and?: InputMaybe<Array<OrganizationsCustomers_Bool_Exp>>;
  _not?: InputMaybe<OrganizationsCustomers_Bool_Exp>;
  _or?: InputMaybe<Array<OrganizationsCustomers_Bool_Exp>>;
  billingAdmin?: InputMaybe<Boolean_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  customer?: InputMaybe<Customers_Bool_Exp>;
  customerId?: InputMaybe<Uuid_Comparison_Exp>;
  organization?: InputMaybe<Organizations_Bool_Exp>;
  organizationId?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "organizations_customers" */
export enum OrganizationsCustomers_Constraint {
  /** unique or primary key constraint on columns "organization_id", "customer_id" */
  OrganizationsCustomersPkey = 'organizations_customers_pkey'
}

/** input type for inserting data into table "organizations_customers" */
export type OrganizationsCustomers_Insert_Input = {
  billingAdmin?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  customer?: InputMaybe<Customers_Obj_Rel_Insert_Input>;
  customerId?: InputMaybe<Scalars['uuid']>;
  organization?: InputMaybe<Organizations_Obj_Rel_Insert_Input>;
  organizationId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type OrganizationsCustomers_Max_Fields = {
  __typename?: 'organizationsCustomers_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  customerId?: Maybe<Scalars['uuid']>;
  organizationId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type OrganizationsCustomers_Min_Fields = {
  __typename?: 'organizationsCustomers_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  customerId?: Maybe<Scalars['uuid']>;
  organizationId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "organizations_customers" */
export type OrganizationsCustomers_Mutation_Response = {
  __typename?: 'organizationsCustomers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<OrganizationsCustomers>;
};

/** on_conflict condition type for table "organizations_customers" */
export type OrganizationsCustomers_On_Conflict = {
  constraint: OrganizationsCustomers_Constraint;
  update_columns?: Array<OrganizationsCustomers_Update_Column>;
  where?: InputMaybe<OrganizationsCustomers_Bool_Exp>;
};

/** Ordering options when selecting data from "organizations_customers". */
export type OrganizationsCustomers_Order_By = {
  billingAdmin?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  customer?: InputMaybe<Customers_Order_By>;
  customerId?: InputMaybe<Order_By>;
  organization?: InputMaybe<Organizations_Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organizations_customers */
export type OrganizationsCustomers_Pk_Columns_Input = {
  customerId: Scalars['uuid'];
  organizationId: Scalars['uuid'];
};

/** select columns of table "organizations_customers" */
export enum OrganizationsCustomers_Select_Column {
  /** column name */
  BillingAdmin = 'billingAdmin',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CustomerId = 'customerId',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "organizations_customers" */
export type OrganizationsCustomers_Set_Input = {
  billingAdmin?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  customerId?: InputMaybe<Scalars['uuid']>;
  organizationId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "organizationsCustomers" */
export type OrganizationsCustomers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: OrganizationsCustomers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type OrganizationsCustomers_Stream_Cursor_Value_Input = {
  billingAdmin?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  customerId?: InputMaybe<Scalars['uuid']>;
  organizationId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "organizations_customers" */
export enum OrganizationsCustomers_Update_Column {
  /** column name */
  BillingAdmin = 'billingAdmin',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CustomerId = 'customerId',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type OrganizationsCustomers_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OrganizationsCustomers_Set_Input>;
  where: OrganizationsCustomers_Bool_Exp;
};

/** aggregated selection of "organizations" */
export type Organizations_Aggregate = {
  __typename?: 'organizations_aggregate';
  aggregate?: Maybe<Organizations_Aggregate_Fields>;
  nodes: Array<Organizations>;
};

/** aggregate fields of "organizations" */
export type Organizations_Aggregate_Fields = {
  __typename?: 'organizations_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Organizations_Max_Fields>;
  min?: Maybe<Organizations_Min_Fields>;
};


/** aggregate fields of "organizations" */
export type Organizations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organizations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "organizations" */
export type Organizations_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Organizations_Max_Order_By>;
  min?: InputMaybe<Organizations_Min_Order_By>;
};

/** input type for inserting array relation for remote table "organizations" */
export type Organizations_Arr_Rel_Insert_Input = {
  data: Array<Organizations_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Organizations_On_Conflict>;
};

/** Boolean expression to filter rows from the table "organizations". All fields are combined with a logical 'AND'. */
export type Organizations_Bool_Exp = {
  _and?: InputMaybe<Array<Organizations_Bool_Exp>>;
  _not?: InputMaybe<Organizations_Bool_Exp>;
  _or?: InputMaybe<Array<Organizations_Bool_Exp>>;
  customers?: InputMaybe<Customers_Bool_Exp>;
  domain?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  slackChannel?: InputMaybe<String_Comparison_Exp>;
  stripeCustomerId?: InputMaybe<String_Comparison_Exp>;
  technicalContact?: InputMaybe<Customers_Bool_Exp>;
  technicalContactId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "organizations" */
export enum Organizations_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrganizationsPkey = 'organizations_pkey'
}

/** input type for inserting data into table "organizations" */
export type Organizations_Insert_Input = {
  customers?: InputMaybe<Customers_Arr_Rel_Insert_Input>;
  domain?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  slackChannel?: InputMaybe<Scalars['String']>;
  stripeCustomerId?: InputMaybe<Scalars['String']>;
  technicalContact?: InputMaybe<Customers_Obj_Rel_Insert_Input>;
  technicalContactId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Organizations_Max_Fields = {
  __typename?: 'organizations_max_fields';
  domain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  slackChannel?: Maybe<Scalars['String']>;
  stripeCustomerId?: Maybe<Scalars['String']>;
  technicalContactId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "organizations" */
export type Organizations_Max_Order_By = {
  domain?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slackChannel?: InputMaybe<Order_By>;
  stripeCustomerId?: InputMaybe<Order_By>;
  technicalContactId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Organizations_Min_Fields = {
  __typename?: 'organizations_min_fields';
  domain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  slackChannel?: Maybe<Scalars['String']>;
  stripeCustomerId?: Maybe<Scalars['String']>;
  technicalContactId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "organizations" */
export type Organizations_Min_Order_By = {
  domain?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slackChannel?: InputMaybe<Order_By>;
  stripeCustomerId?: InputMaybe<Order_By>;
  technicalContactId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "organizations" */
export type Organizations_Mutation_Response = {
  __typename?: 'organizations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Organizations>;
};

/** input type for inserting object relation for remote table "organizations" */
export type Organizations_Obj_Rel_Insert_Input = {
  data: Organizations_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Organizations_On_Conflict>;
};

/** on_conflict condition type for table "organizations" */
export type Organizations_On_Conflict = {
  constraint: Organizations_Constraint;
  update_columns?: Array<Organizations_Update_Column>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};

/** Ordering options when selecting data from "organizations". */
export type Organizations_Order_By = {
  customers_aggregate?: InputMaybe<Customers_Aggregate_Order_By>;
  domain?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slackChannel?: InputMaybe<Order_By>;
  stripeCustomerId?: InputMaybe<Order_By>;
  technicalContact?: InputMaybe<Customers_Order_By>;
  technicalContactId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organizations */
export type Organizations_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "organizations" */
export enum Organizations_Select_Column {
  /** column name */
  Domain = 'domain',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  SlackChannel = 'slackChannel',
  /** column name */
  StripeCustomerId = 'stripeCustomerId',
  /** column name */
  TechnicalContactId = 'technicalContactId'
}

/** input type for updating data in table "organizations" */
export type Organizations_Set_Input = {
  domain?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  slackChannel?: InputMaybe<Scalars['String']>;
  stripeCustomerId?: InputMaybe<Scalars['String']>;
  technicalContactId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "organizations" */
export type Organizations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organizations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organizations_Stream_Cursor_Value_Input = {
  domain?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  slackChannel?: InputMaybe<Scalars['String']>;
  stripeCustomerId?: InputMaybe<Scalars['String']>;
  technicalContactId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "organizations" */
export enum Organizations_Update_Column {
  /** column name */
  Domain = 'domain',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  SlackChannel = 'slackChannel',
  /** column name */
  StripeCustomerId = 'stripeCustomerId',
  /** column name */
  TechnicalContactId = 'technicalContactId'
}

export type Organizations_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organizations_Set_Input>;
  where: Organizations_Bool_Exp;
};

/** columns and relationships of "pricing_plans" */
export type PricingPlans = {
  __typename?: 'pricingPlans';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** Price in cents */
  monthlyPriceCents?: Maybe<Scalars['Int']>;
  overageCharge?: Maybe<Scalars['float8']>;
  predictionLimit?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "pricing_plans" */
export type PricingPlans_Aggregate = {
  __typename?: 'pricingPlans_aggregate';
  aggregate?: Maybe<PricingPlans_Aggregate_Fields>;
  nodes: Array<PricingPlans>;
};

/** aggregate fields of "pricing_plans" */
export type PricingPlans_Aggregate_Fields = {
  __typename?: 'pricingPlans_aggregate_fields';
  avg?: Maybe<PricingPlans_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<PricingPlans_Max_Fields>;
  min?: Maybe<PricingPlans_Min_Fields>;
  stddev?: Maybe<PricingPlans_Stddev_Fields>;
  stddev_pop?: Maybe<PricingPlans_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<PricingPlans_Stddev_Samp_Fields>;
  sum?: Maybe<PricingPlans_Sum_Fields>;
  var_pop?: Maybe<PricingPlans_Var_Pop_Fields>;
  var_samp?: Maybe<PricingPlans_Var_Samp_Fields>;
  variance?: Maybe<PricingPlans_Variance_Fields>;
};


/** aggregate fields of "pricing_plans" */
export type PricingPlans_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<PricingPlans_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type PricingPlans_Avg_Fields = {
  __typename?: 'pricingPlans_avg_fields';
  /** Price in cents */
  monthlyPriceCents?: Maybe<Scalars['Float']>;
  overageCharge?: Maybe<Scalars['Float']>;
  predictionLimit?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "pricing_plans". All fields are combined with a logical 'AND'. */
export type PricingPlans_Bool_Exp = {
  _and?: InputMaybe<Array<PricingPlans_Bool_Exp>>;
  _not?: InputMaybe<PricingPlans_Bool_Exp>;
  _or?: InputMaybe<Array<PricingPlans_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  monthlyPriceCents?: InputMaybe<Int_Comparison_Exp>;
  overageCharge?: InputMaybe<Float8_Comparison_Exp>;
  predictionLimit?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "pricing_plans" */
export enum PricingPlans_Constraint {
  /** unique or primary key constraint on columns "id" */
  PricingPlansPkey = 'pricing_plans_pkey'
}

/** input type for incrementing numeric columns in table "pricing_plans" */
export type PricingPlans_Inc_Input = {
  /** Price in cents */
  monthlyPriceCents?: InputMaybe<Scalars['Int']>;
  overageCharge?: InputMaybe<Scalars['float8']>;
  predictionLimit?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "pricing_plans" */
export type PricingPlans_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  /** Price in cents */
  monthlyPriceCents?: InputMaybe<Scalars['Int']>;
  overageCharge?: InputMaybe<Scalars['float8']>;
  predictionLimit?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type PricingPlans_Max_Fields = {
  __typename?: 'pricingPlans_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  /** Price in cents */
  monthlyPriceCents?: Maybe<Scalars['Int']>;
  overageCharge?: Maybe<Scalars['float8']>;
  predictionLimit?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type PricingPlans_Min_Fields = {
  __typename?: 'pricingPlans_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  /** Price in cents */
  monthlyPriceCents?: Maybe<Scalars['Int']>;
  overageCharge?: Maybe<Scalars['float8']>;
  predictionLimit?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "pricing_plans" */
export type PricingPlans_Mutation_Response = {
  __typename?: 'pricingPlans_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PricingPlans>;
};

/** on_conflict condition type for table "pricing_plans" */
export type PricingPlans_On_Conflict = {
  constraint: PricingPlans_Constraint;
  update_columns?: Array<PricingPlans_Update_Column>;
  where?: InputMaybe<PricingPlans_Bool_Exp>;
};

/** Ordering options when selecting data from "pricing_plans". */
export type PricingPlans_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  monthlyPriceCents?: InputMaybe<Order_By>;
  overageCharge?: InputMaybe<Order_By>;
  predictionLimit?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: pricing_plans */
export type PricingPlans_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "pricing_plans" */
export enum PricingPlans_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  MonthlyPriceCents = 'monthlyPriceCents',
  /** column name */
  OverageCharge = 'overageCharge',
  /** column name */
  PredictionLimit = 'predictionLimit',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "pricing_plans" */
export type PricingPlans_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  /** Price in cents */
  monthlyPriceCents?: InputMaybe<Scalars['Int']>;
  overageCharge?: InputMaybe<Scalars['float8']>;
  predictionLimit?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type PricingPlans_Stddev_Fields = {
  __typename?: 'pricingPlans_stddev_fields';
  /** Price in cents */
  monthlyPriceCents?: Maybe<Scalars['Float']>;
  overageCharge?: Maybe<Scalars['Float']>;
  predictionLimit?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type PricingPlans_Stddev_Pop_Fields = {
  __typename?: 'pricingPlans_stddev_pop_fields';
  /** Price in cents */
  monthlyPriceCents?: Maybe<Scalars['Float']>;
  overageCharge?: Maybe<Scalars['Float']>;
  predictionLimit?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type PricingPlans_Stddev_Samp_Fields = {
  __typename?: 'pricingPlans_stddev_samp_fields';
  /** Price in cents */
  monthlyPriceCents?: Maybe<Scalars['Float']>;
  overageCharge?: Maybe<Scalars['Float']>;
  predictionLimit?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "pricingPlans" */
export type PricingPlans_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: PricingPlans_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type PricingPlans_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  /** Price in cents */
  monthlyPriceCents?: InputMaybe<Scalars['Int']>;
  overageCharge?: InputMaybe<Scalars['float8']>;
  predictionLimit?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type PricingPlans_Sum_Fields = {
  __typename?: 'pricingPlans_sum_fields';
  /** Price in cents */
  monthlyPriceCents?: Maybe<Scalars['Int']>;
  overageCharge?: Maybe<Scalars['float8']>;
  predictionLimit?: Maybe<Scalars['Int']>;
};

/** update columns of table "pricing_plans" */
export enum PricingPlans_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  MonthlyPriceCents = 'monthlyPriceCents',
  /** column name */
  OverageCharge = 'overageCharge',
  /** column name */
  PredictionLimit = 'predictionLimit',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type PricingPlans_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<PricingPlans_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PricingPlans_Set_Input>;
  where: PricingPlans_Bool_Exp;
};

/** aggregate var_pop on columns */
export type PricingPlans_Var_Pop_Fields = {
  __typename?: 'pricingPlans_var_pop_fields';
  /** Price in cents */
  monthlyPriceCents?: Maybe<Scalars['Float']>;
  overageCharge?: Maybe<Scalars['Float']>;
  predictionLimit?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type PricingPlans_Var_Samp_Fields = {
  __typename?: 'pricingPlans_var_samp_fields';
  /** Price in cents */
  monthlyPriceCents?: Maybe<Scalars['Float']>;
  overageCharge?: Maybe<Scalars['Float']>;
  predictionLimit?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type PricingPlans_Variance_Fields = {
  __typename?: 'pricingPlans_variance_fields';
  /** Price in cents */
  monthlyPriceCents?: Maybe<Scalars['Float']>;
  overageCharge?: Maybe<Scalars['Float']>;
  predictionLimit?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "surveys" */
  Surveys: Array<Surveys>;
  /** fetch data from the table: "cash_out_methods" using primary key columns */
  cashOutMethod?: Maybe<CashOutMethods>;
  /** fetch data from the table: "cash_out_methods" */
  cashOutMethods: Array<CashOutMethods>;
  /** fetch aggregated fields from the table: "cash_out_methods" */
  cashOutMethodsAggregate: CashOutMethods_Aggregate;
  /** fetch data from the table: "cash_out_requests" using primary key columns */
  cashOutRequest?: Maybe<CashOutRequests>;
  /** An array relationship */
  cashOutRequests: Array<CashOutRequests>;
  /** fetch aggregated fields from the table: "cash_out_requests" */
  cashOutRequestsAggregate: CashOutRequests_Aggregate;
  /** fetch data from the table: "collection_type" using primary key columns */
  collectionType?: Maybe<CollectionTypes>;
  /** fetch data from the table: "collection_type" */
  collectionTypes: Array<CollectionTypes>;
  /** fetch aggregated fields from the table: "collection_type" */
  collectionTypesAggregate: CollectionTypes_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customer?: Maybe<Customers>;
  /** An array relationship */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customersAggregate: Customers_Aggregate;
  /** fetch data from the table: "data_types" using primary key columns */
  dataType?: Maybe<DatatTypes>;
  /** fetch data from the table: "data_types" */
  dataTypes: Array<DatatTypes>;
  /** fetch aggregated fields from the table: "data_types" */
  dataTypesAggregate: DatatTypes_Aggregate;
  /** fetch data from the table: "etx_task_sessions" using primary key columns */
  etxTaskSession?: Maybe<EtxTaskSessions>;
  /** An array relationship */
  etxTaskSessions: Array<EtxTaskSessions>;
  /** fetch aggregated fields from the table: "etx_task_sessions" */
  etxTaskSessionsAggregate: EtxTaskSessions_Aggregate;
  /** fetch data from the table: "feature_types" using primary key columns */
  featureType?: Maybe<FeatureTypes>;
  /** fetch data from the table: "feature_types" */
  featureTypes: Array<FeatureTypes>;
  /** fetch aggregated fields from the table: "feature_types" */
  featureTypesAggregate: FeatureTypes_Aggregate;
  /** fetch data from the table: "fireboa_cash_out_crypto_requests" using primary key columns */
  fireboaCashOutCryptoRequest?: Maybe<FireboaCashOutCryptoRequests>;
  /** fetch data from the table: "fireboa_cash_out_crypto_requests" */
  fireboaCashOutCryptoRequests: Array<FireboaCashOutCryptoRequests>;
  /** fetch aggregated fields from the table: "fireboa_cash_out_crypto_requests" */
  fireboaCashOutCryptoRequestsAggregate: FireboaCashOutCryptoRequests_Aggregate;
  /** fetch data from the table: "fireboa_cash_out_gift_card_requests" using primary key columns */
  fireboaCashOutGiftCardRequest?: Maybe<FireboaCashOutGiftCardRequests>;
  /** fetch data from the table: "fireboa_cash_out_gift_card_requests" */
  fireboaCashOutGiftCardRequests: Array<FireboaCashOutGiftCardRequests>;
  /** fetch aggregated fields from the table: "fireboa_cash_out_gift_card_requests" */
  fireboaCashOutGiftCardRequestsAggregate: FireboaCashOutGiftCardRequests_Aggregate;
  /** fetch data from the table: "fireboa_cash_out_preferred_methods" using primary key columns */
  fireboaCashOutPreferredMethod?: Maybe<FireboaCashOutPreferredMethods>;
  /** An array relationship */
  fireboaCashOutPreferredMethods: Array<FireboaCashOutPreferredMethods>;
  /** fetch aggregated fields from the table: "fireboa_cash_out_preferred_methods" */
  fireboaCashOutPreferredMethodsAggregate: FireboaCashOutPreferredMethods_Aggregate;
  /** fetch data from the table: "fireboa_cash_out_requests" using primary key columns */
  fireboaCashOutRequest?: Maybe<FireboaCashOutRequests>;
  /** An array relationship */
  fireboaCashOutRequests: Array<FireboaCashOutRequests>;
  /** fetch aggregated fields from the table: "fireboa_cash_out_requests" */
  fireboaCashOutRequestsAggregate: FireboaCashOutRequests_Aggregate;
  /** fetch data from the table: "fireboa_modules" using primary key columns */
  fireboaModule?: Maybe<FireboaModules>;
  /** fetch data from the table: "fireboa_modules" */
  fireboaModules: Array<FireboaModules>;
  /** fetch aggregated fields from the table: "fireboa_modules" */
  fireboaModulesAggregate: FireboaModules_Aggregate;
  /** fetch data from the table: "fireboa_projects" using primary key columns */
  fireboaProject?: Maybe<FireboaProjects>;
  /** fetch data from the table: "fireboa_projects_modules" using primary key columns */
  fireboaProjectModule?: Maybe<FireboaProjectsModules>;
  /** fetch data from the table: "fireboa_projects_modules_users" using primary key columns */
  fireboaProjectModuleUser?: Maybe<FireboaProjectsModulesUsers>;
  /** fetch data from the table: "fireboa_projects_users" using primary key columns */
  fireboaProjectUser?: Maybe<FireboaProjectsUsers>;
  /** fetch data from the table: "fireboa_projects" */
  fireboaProjects: Array<FireboaProjects>;
  /** fetch aggregated fields from the table: "fireboa_projects" */
  fireboaProjectsAggregate: FireboaProjects_Aggregate;
  /** fetch data from the table: "fireboa_projects_modules" */
  fireboaProjectsModules: Array<FireboaProjectsModules>;
  /** fetch aggregated fields from the table: "fireboa_projects_modules" */
  fireboaProjectsModulesAggregate: FireboaProjectsModules_Aggregate;
  /** fetch data from the table: "fireboa_projects_modules_users" */
  fireboaProjectsModulesUsers: Array<FireboaProjectsModulesUsers>;
  /** fetch aggregated fields from the table: "fireboa_projects_modules_users" */
  fireboaProjectsModulesUsersAggregate: FireboaProjectsModulesUsers_Aggregate;
  /** An array relationship */
  fireboaProjectsUsers: Array<FireboaProjectsUsers>;
  /** fetch aggregated fields from the table: "fireboa_projects_users" */
  fireboaProjectsUsersAggregate: FireboaProjectsUsers_Aggregate;
  /** fetch data from the table: "fraud_status_enum" using primary key columns */
  fraudStatusEnum?: Maybe<FraudStatusEnum>;
  /** fetch aggregated fields from the table: "fraud_status_enum" */
  fraudStatusEnumAggregate: FraudStatusEnum_Aggregate;
  /** fetch data from the table: "fraud_status_enum" */
  fraudStatusEnums: Array<FraudStatusEnum>;
  /** fetch data from the table: "gender" */
  gender: Array<Gender>;
  /** fetch aggregated fields from the table: "gender" */
  gender_aggregate: Gender_Aggregate;
  /** fetch data from the table: "gender" using primary key columns */
  gender_by_pk?: Maybe<Gender>;
  /** fetch data from the table: "have_labeled_data_types" using primary key columns */
  haveLabeledDataType?: Maybe<HaveLabeledDataTypesEnum>;
  /** fetch data from the table: "have_labeled_data_types" */
  haveLabeledDataTypes: Array<HaveLabeledDataTypesEnum>;
  /** fetch aggregated fields from the table: "have_labeled_data_types" */
  haveLabeledDataTypesAggregate: HaveLabeledDataTypesEnum_Aggregate;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  /** fetch data from the table: "identities_legal_id_type_enum" using primary key columns */
  identitiesLegalIdTypeEnum?: Maybe<IdentitiesLegalIdTypeEnums>;
  /** fetch data from the table: "identities_legal_id_type_enum" */
  identitiesLegalIdTypeEnums: Array<IdentitiesLegalIdTypeEnums>;
  /** fetch aggregated fields from the table: "identities_legal_id_type_enum" */
  identitiesLegalIdTypeEnumsAggregate: IdentitiesLegalIdTypeEnums_Aggregate;
  /** fetch data from the table: "images" using primary key columns */
  image?: Maybe<Images>;
  /** fetch data from the table: "images" */
  images: Array<Images>;
  /** fetch aggregated fields from the table: "images" */
  imagesAggregate: Images_Aggregate;
  /** fetch data from the table: "industry_types" */
  industry_types: Array<Industry_Types>;
  /** fetch aggregated fields from the table: "industry_types" */
  industry_types_aggregate: Industry_Types_Aggregate;
  /** fetch data from the table: "industry_types" using primary key columns */
  industry_types_by_pk?: Maybe<Industry_Types>;
  /** fetch data from the table: "labelling_platforms" using primary key columns */
  labellingPlatform?: Maybe<LabellingPlatforms>;
  /** fetch data from the table: "labelling_platforms" */
  labellingPlatforms: Array<LabellingPlatforms>;
  /** fetch aggregated fields from the table: "labelling_platforms" */
  labellingPlatformsAggregate: LabellingPlatforms_Aggregate;
  /** An array relationship */
  managers: Array<Managers>;
  /** An aggregate relationship */
  managers_aggregate: Managers_Aggregate;
  /** fetch data from the table: "managers" using primary key columns */
  managers_by_pk?: Maybe<Managers>;
  /** fetch data from the table: "marketplace_projects" using primary key columns */
  marketplaceProject?: Maybe<Marketplace_Projects>;
  /** fetch aggregated fields from the table: "marketplace_projects" */
  marketplaceProjectsAggregate: Marketplace_Projects_Aggregate;
  /** fetch data from the table: "marketplace_projects" */
  martetplaceProjects: Array<Marketplace_Projects>;
  me?: Maybe<UsersPermissionsMe>;
  /** fetch data from the table: "modules" using primary key columns */
  module?: Maybe<Modules>;
  /** fetch data from the table: "module_instructions" using primary key columns */
  moduleInstruction?: Maybe<ModuleInstructions>;
  /** An array relationship */
  moduleInstructions: Array<ModuleInstructions>;
  /** fetch aggregated fields from the table: "module_instructions" */
  moduleInstructionsAggregate: ModuleInstructions_Aggregate;
  /** fetch data from the table: "modules_marketplace_projects" using primary key columns */
  moduleMarketplaceProject?: Maybe<Modules_Marketplace_Projects>;
  /** fetch data from the table: "modules" */
  modules: Array<Modules>;
  /** fetch aggregated fields from the table: "modules" */
  modulesAggregate: Modules_Aggregate;
  /** An array relationship */
  modulesMarketplaceProjects: Array<Modules_Marketplace_Projects>;
  /** fetch aggregated fields from the table: "modules_marketplace_projects" */
  modulesMarketplaceProjectsAggregate: Modules_Marketplace_Projects_Aggregate;
  /** fetch data from the table: "organizations" using primary key columns */
  organization?: Maybe<Organizations>;
  /** fetch data from the table: "organizations_customers" using primary key columns */
  organizationCustomer?: Maybe<OrganizationsCustomers>;
  /** An array relationship */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organizations" */
  organizationsAggregate: Organizations_Aggregate;
  /** fetch data from the table: "organizations_customers" */
  organizationsCustomers: Array<OrganizationsCustomers>;
  /** fetch aggregated fields from the table: "organizations_customers" */
  organizationsCustomersAggregate: OrganizationsCustomers_Aggregate;
  /** fetch data from the table: "pricing_plans" using primary key columns */
  pricingPlan?: Maybe<PricingPlans>;
  /** fetch data from the table: "pricing_plans" */
  pricingPlans: Array<PricingPlans>;
  /** fetch aggregated fields from the table: "pricing_plans" */
  pricingPlansAggregate: PricingPlans_Aggregate;
  /** fetch data from the table: "project_statuses" using primary key columns */
  projectStatus?: Maybe<ProjectStatuses>;
  /** fetch data from the table: "project_statuses" */
  projectStatuses: Array<ProjectStatuses>;
  /** fetch aggregated fields from the table: "project_statuses" */
  projectStatusesAggregate: ProjectStatuses_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  session?: Maybe<Sessions>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** fetch aggregated fields from the table: "sessions" */
  sessionsAggregate: Sessions_Aggregate;
  /** fetch data from the table: "spotify_state_types" using primary key columns */
  spotifyStateType?: Maybe<SpotifyStateTypes>;
  /** fetch data from the table: "spotify_state_types" */
  spotifyStateTypes: Array<SpotifyStateTypes>;
  /** fetch aggregated fields from the table: "spotify_state_types" */
  spotifyStateTypesAggregate: SpotifyStateTypes_Aggregate;
  /** fetch data from the table: "strapi" */
  strapi: Array<Strapi>;
  strapiModule?: Maybe<StrapiModuleEntityResponse>;
  strapiModules?: Maybe<StrapiModuleEntityResponseCollection>;
  strapiProject?: Maybe<StrapiProjectEntityResponse>;
  strapiProjects?: Maybe<StrapiProjectEntityResponseCollection>;
  /** fetch aggregated fields from the table: "strapi" */
  strapi_aggregate: Strapi_Aggregate;
  /** fetch data from the table: "strapi" using primary key columns */
  strapi_by_pk?: Maybe<Strapi>;
  /** fetch data from the table: "stripe_identity_session_error_code_enum" using primary key columns */
  stripeIdentitySessionErrorCodeEnum?: Maybe<StripeIdentitySessionErrorCodeEnums>;
  /** fetch data from the table: "stripe_identity_session_error_code_enum" */
  stripeIdentitySessionErrorCodeEnums: Array<StripeIdentitySessionErrorCodeEnums>;
  /** fetch aggregated fields from the table: "stripe_identity_session_error_code_enum" */
  stripeIdentitySessionErrorCodeEnumsAggregate: StripeIdentitySessionErrorCodeEnums_Aggregate;
  /** fetch data from the table: "stripe_identity_session_status_enum" using primary key columns */
  stripeIdentitySessionStatusEnum?: Maybe<StripeIdentitySessionStatusEnums>;
  /** fetch data from the table: "stripe_identity_session_status_enum" */
  stripeIdentitySessionStatusEnums: Array<StripeIdentitySessionStatusEnums>;
  /** fetch aggregated fields from the table: "stripe_identity_session_status_enum" */
  stripeIdentitySessionStatusEnumsAggregate: StripeIdentitySessionStatusEnums_Aggregate;
  /** fetch data from the table: "stripe_identity_session_type_enum" using primary key columns */
  stripeIdentitySessionTypeEnum?: Maybe<StripeIdentitySessionTypeEnums>;
  /** fetch data from the table: "stripe_identity_session_type_enum" */
  stripeIdentitySessionTypeEnums: Array<StripeIdentitySessionTypeEnums>;
  /** fetch aggregated fields from the table: "stripe_identity_session_type_enum" */
  stripeIdentitySessionTypeEnumsAggregate: StripeIdentitySessionTypeEnums_Aggregate;
  /** fetch data from the table: "stripe_verification_sessions" using primary key columns */
  stripeVerificationSession?: Maybe<StripeVerificationSessions>;
  /** An array relationship */
  stripeVerificationSessions: Array<StripeVerificationSessions>;
  /** fetch aggregated fields from the table: "stripe_verification_sessions" */
  stripeVerificationSessionsAggregate: StripeVerificationSessions_Aggregate;
  /** fetch data from the table: "surveys" using primary key columns */
  survey?: Maybe<Surveys>;
  /** fetch data from the table: "survey_responses" using primary key columns */
  surveyResponse?: Maybe<SurveyResponses>;
  /** An array relationship */
  surveyResponses: Array<SurveyResponses>;
  /** fetch aggregated fields from the table: "survey_responses" */
  surveyResponsesAggregate: SurveyResponses_Aggregate;
  /** fetch aggregated fields from the table: "surveys" */
  surveysAggregate: Surveys_Aggregate;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  /** fetch data from the table: "users" using primary key columns */
  user?: Maybe<Users>;
  /** An array relationship */
  userIdentities: Array<UserIdentities>;
  /** fetch aggregated fields from the table: "user_identities" */
  userIdentitiesAggregate: UserIdentities_Aggregate;
  /** fetch data from the table: "user_identities" using primary key columns */
  userIdentity?: Maybe<UserIdentities>;
  /** fetch data from the table: "users_images" using primary key columns */
  userImage?: Maybe<UsersImages>;
  /** fetch data from the table: "users_modules" using primary key columns */
  userModule?: Maybe<UsersModules>;
  /** fetch data from the table: "user_module_progress_enum" using primary key columns */
  userModuleStatus?: Maybe<UserModuleStatus>;
  /** fetch aggregated fields from the table: "user_module_progress_enum" */
  userModuleStatusAggregate: UserModuleStatus_Aggregate;
  /** fetch data from the table: "user_module_progress_enum" */
  userModuleStatuses: Array<UserModuleStatus>;
  /** fetch data from the table: "users_projects" using primary key columns */
  userProject?: Maybe<Users_Projects>;
  /** fetch data from the table: "user_referrals" using primary key columns */
  userReferral?: Maybe<UserReferrals>;
  /** fetch data from the table: "user_referrals" */
  userReferrals: Array<UserReferrals>;
  /** fetch aggregated fields from the table: "user_referrals" */
  userReferralsAggregate: UserReferrals_Aggregate;
  /** fetch data from the table: "users_supplementary" using primary key columns */
  userSupplementary?: Maybe<Users_Supplementary>;
  /** fetch data from the table: "user_ip_addresses" */
  user_ip_addresses: Array<User_Ip_Addresses>;
  /** fetch aggregated fields from the table: "user_ip_addresses" */
  user_ip_addresses_aggregate: User_Ip_Addresses_Aggregate;
  /** fetch data from the table: "user_ip_addresses" using primary key columns */
  user_ip_addresses_by_pk?: Maybe<User_Ip_Addresses>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  usersAggregate: Users_Aggregate;
  /** fetch data from the table: "users_images" */
  usersImages: Array<UsersImages>;
  /** fetch aggregated fields from the table: "users_images" */
  usersImagesAggregate: UsersImages_Aggregate;
  /** An array relationship */
  usersModules: Array<UsersModules>;
  /** fetch aggregated fields from the table: "users_modules" */
  usersModulesAggregate: UsersModules_Aggregate;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  /** An array relationship */
  usersProjects: Array<Users_Projects>;
  /** fetch aggregated fields from the table: "users_projects" */
  usersProjectsAggregate: Users_Projects_Aggregate;
  /** fetch data from the table: "users_supplementary" */
  usersSupplementaries: Array<Users_Supplementary>;
  /** fetch aggregated fields from the table: "users_supplementary" */
  usersSupplementariesAggregate: Users_Supplementary_Aggregate;
  vanaConnectFaq?: Maybe<VanaConnectFaqEntityResponse>;
  vanaConnectFaqs?: Maybe<VanaConnectFaqEntityResponseCollection>;
  /** fetch data from the table: "visual_judgement_modules" using primary key columns */
  visualJudgementModule?: Maybe<VisualJudgementModules>;
  /** fetch data from the table: "visual_judgement_module_images" using primary key columns */
  visualJudgementModuleImage?: Maybe<VisualJudgementModuleImages>;
  /** An array relationship */
  visualJudgementModuleImages: Array<VisualJudgementModuleImages>;
  /** fetch aggregated fields from the table: "visual_judgement_module_images" */
  visualJudgementModuleImagesAggregate: VisualJudgementModuleImages_Aggregate;
  /** fetch data from the table: "visual_judgement_module_responses" using primary key columns */
  visualJudgementModuleResponse?: Maybe<VisualJudgementModuleResponses>;
  /** An array relationship */
  visualJudgementModuleResponses: Array<VisualJudgementModuleResponses>;
  /** fetch aggregated fields from the table: "visual_judgement_module_responses" */
  visualJudgementModuleResponsesAggregate: VisualJudgementModuleResponses_Aggregate;
  /** An array relationship */
  visualJudgementModules: Array<VisualJudgementModules>;
  /** fetch aggregated fields from the table: "visual_judgement_modules" */
  visualJudgementModulesAggregate: VisualJudgementModules_Aggregate;
  /** fetch data from the table: "wallets" using primary key columns */
  wallet?: Maybe<Wallets>;
  /** An array relationship */
  wallets: Array<Wallets>;
  /** fetch aggregated fields from the table: "wallets" */
  walletsAggregate: Wallets_Aggregate;
  /** fetch data from the table: "workers" using primary key columns */
  worker?: Maybe<Workers>;
  /** fetch data from the table: "workers_spotify" using primary key columns */
  workerSpotify?: Maybe<WorkersSpotify>;
  /** fetch data from the table: "workers" */
  workers: Array<Workers>;
  /** fetch aggregated fields from the table: "workers" */
  workersAggregate: Workers_Aggregate;
  /** fetch data from the table: "workers_spotify" */
  workersSpotify: Array<WorkersSpotify>;
  /** fetch aggregated fields from the table: "workers_spotify" */
  workersSpotifyAggregate: WorkersSpotify_Aggregate;
};


export type Query_RootSurveysArgs = {
  distinct_on?: InputMaybe<Array<Surveys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Surveys_Order_By>>;
  where?: InputMaybe<Surveys_Bool_Exp>;
};


export type Query_RootCashOutMethodArgs = {
  name: Scalars['String'];
};


export type Query_RootCashOutMethodsArgs = {
  distinct_on?: InputMaybe<Array<CashOutMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CashOutMethods_Order_By>>;
  where?: InputMaybe<CashOutMethods_Bool_Exp>;
};


export type Query_RootCashOutMethodsAggregateArgs = {
  distinct_on?: InputMaybe<Array<CashOutMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CashOutMethods_Order_By>>;
  where?: InputMaybe<CashOutMethods_Bool_Exp>;
};


export type Query_RootCashOutRequestArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCashOutRequestsArgs = {
  distinct_on?: InputMaybe<Array<CashOutRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CashOutRequests_Order_By>>;
  where?: InputMaybe<CashOutRequests_Bool_Exp>;
};


export type Query_RootCashOutRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<CashOutRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CashOutRequests_Order_By>>;
  where?: InputMaybe<CashOutRequests_Bool_Exp>;
};


export type Query_RootCollectionTypeArgs = {
  value: Scalars['String'];
};


export type Query_RootCollectionTypesArgs = {
  distinct_on?: InputMaybe<Array<CollectionTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CollectionTypes_Order_By>>;
  where?: InputMaybe<CollectionTypes_Bool_Exp>;
};


export type Query_RootCollectionTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<CollectionTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CollectionTypes_Order_By>>;
  where?: InputMaybe<CollectionTypes_Bool_Exp>;
};


export type Query_RootCustomerArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootCustomersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Query_RootDataTypeArgs = {
  name: Scalars['String'];
};


export type Query_RootDataTypesArgs = {
  distinct_on?: InputMaybe<Array<DatatTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DatatTypes_Order_By>>;
  where?: InputMaybe<DatatTypes_Bool_Exp>;
};


export type Query_RootDataTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<DatatTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DatatTypes_Order_By>>;
  where?: InputMaybe<DatatTypes_Bool_Exp>;
};


export type Query_RootEtxTaskSessionArgs = {
  id: Scalars['uuid'];
};


export type Query_RootEtxTaskSessionsArgs = {
  distinct_on?: InputMaybe<Array<EtxTaskSessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EtxTaskSessions_Order_By>>;
  where?: InputMaybe<EtxTaskSessions_Bool_Exp>;
};


export type Query_RootEtxTaskSessionsAggregateArgs = {
  distinct_on?: InputMaybe<Array<EtxTaskSessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EtxTaskSessions_Order_By>>;
  where?: InputMaybe<EtxTaskSessions_Bool_Exp>;
};


export type Query_RootFeatureTypeArgs = {
  value: Scalars['String'];
};


export type Query_RootFeatureTypesArgs = {
  distinct_on?: InputMaybe<Array<FeatureTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FeatureTypes_Order_By>>;
  where?: InputMaybe<FeatureTypes_Bool_Exp>;
};


export type Query_RootFeatureTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<FeatureTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FeatureTypes_Order_By>>;
  where?: InputMaybe<FeatureTypes_Bool_Exp>;
};


export type Query_RootFireboaCashOutCryptoRequestArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFireboaCashOutCryptoRequestsArgs = {
  distinct_on?: InputMaybe<Array<FireboaCashOutCryptoRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaCashOutCryptoRequests_Order_By>>;
  where?: InputMaybe<FireboaCashOutCryptoRequests_Bool_Exp>;
};


export type Query_RootFireboaCashOutCryptoRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<FireboaCashOutCryptoRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaCashOutCryptoRequests_Order_By>>;
  where?: InputMaybe<FireboaCashOutCryptoRequests_Bool_Exp>;
};


export type Query_RootFireboaCashOutGiftCardRequestArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFireboaCashOutGiftCardRequestsArgs = {
  distinct_on?: InputMaybe<Array<FireboaCashOutGiftCardRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaCashOutGiftCardRequests_Order_By>>;
  where?: InputMaybe<FireboaCashOutGiftCardRequests_Bool_Exp>;
};


export type Query_RootFireboaCashOutGiftCardRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<FireboaCashOutGiftCardRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaCashOutGiftCardRequests_Order_By>>;
  where?: InputMaybe<FireboaCashOutGiftCardRequests_Bool_Exp>;
};


export type Query_RootFireboaCashOutPreferredMethodArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFireboaCashOutPreferredMethodsArgs = {
  distinct_on?: InputMaybe<Array<FireboaCashOutPreferredMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaCashOutPreferredMethods_Order_By>>;
  where?: InputMaybe<FireboaCashOutPreferredMethods_Bool_Exp>;
};


export type Query_RootFireboaCashOutPreferredMethodsAggregateArgs = {
  distinct_on?: InputMaybe<Array<FireboaCashOutPreferredMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaCashOutPreferredMethods_Order_By>>;
  where?: InputMaybe<FireboaCashOutPreferredMethods_Bool_Exp>;
};


export type Query_RootFireboaCashOutRequestArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFireboaCashOutRequestsArgs = {
  distinct_on?: InputMaybe<Array<FireboaCashOutRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaCashOutRequests_Order_By>>;
  where?: InputMaybe<FireboaCashOutRequests_Bool_Exp>;
};


export type Query_RootFireboaCashOutRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<FireboaCashOutRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaCashOutRequests_Order_By>>;
  where?: InputMaybe<FireboaCashOutRequests_Bool_Exp>;
};


export type Query_RootFireboaModuleArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFireboaModulesArgs = {
  distinct_on?: InputMaybe<Array<FireboaModules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaModules_Order_By>>;
  where?: InputMaybe<FireboaModules_Bool_Exp>;
};


export type Query_RootFireboaModulesAggregateArgs = {
  distinct_on?: InputMaybe<Array<FireboaModules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaModules_Order_By>>;
  where?: InputMaybe<FireboaModules_Bool_Exp>;
};


export type Query_RootFireboaProjectArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFireboaProjectModuleArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFireboaProjectModuleUserArgs = {
  fireboaProjectModuleId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


export type Query_RootFireboaProjectUserArgs = {
  fireboaProjectId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


export type Query_RootFireboaProjectsArgs = {
  distinct_on?: InputMaybe<Array<FireboaProjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaProjects_Order_By>>;
  where?: InputMaybe<FireboaProjects_Bool_Exp>;
};


export type Query_RootFireboaProjectsAggregateArgs = {
  distinct_on?: InputMaybe<Array<FireboaProjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaProjects_Order_By>>;
  where?: InputMaybe<FireboaProjects_Bool_Exp>;
};


export type Query_RootFireboaProjectsModulesArgs = {
  distinct_on?: InputMaybe<Array<FireboaProjectsModules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaProjectsModules_Order_By>>;
  where?: InputMaybe<FireboaProjectsModules_Bool_Exp>;
};


export type Query_RootFireboaProjectsModulesAggregateArgs = {
  distinct_on?: InputMaybe<Array<FireboaProjectsModules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaProjectsModules_Order_By>>;
  where?: InputMaybe<FireboaProjectsModules_Bool_Exp>;
};


export type Query_RootFireboaProjectsModulesUsersArgs = {
  distinct_on?: InputMaybe<Array<FireboaProjectsModulesUsers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaProjectsModulesUsers_Order_By>>;
  where?: InputMaybe<FireboaProjectsModulesUsers_Bool_Exp>;
};


export type Query_RootFireboaProjectsModulesUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<FireboaProjectsModulesUsers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaProjectsModulesUsers_Order_By>>;
  where?: InputMaybe<FireboaProjectsModulesUsers_Bool_Exp>;
};


export type Query_RootFireboaProjectsUsersArgs = {
  distinct_on?: InputMaybe<Array<FireboaProjectsUsers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaProjectsUsers_Order_By>>;
  where?: InputMaybe<FireboaProjectsUsers_Bool_Exp>;
};


export type Query_RootFireboaProjectsUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<FireboaProjectsUsers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaProjectsUsers_Order_By>>;
  where?: InputMaybe<FireboaProjectsUsers_Bool_Exp>;
};


export type Query_RootFraudStatusEnumArgs = {
  fraudStatus: Scalars['String'];
};


export type Query_RootFraudStatusEnumAggregateArgs = {
  distinct_on?: InputMaybe<Array<FraudStatusEnum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FraudStatusEnum_Order_By>>;
  where?: InputMaybe<FraudStatusEnum_Bool_Exp>;
};


export type Query_RootFraudStatusEnumsArgs = {
  distinct_on?: InputMaybe<Array<FraudStatusEnum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FraudStatusEnum_Order_By>>;
  where?: InputMaybe<FraudStatusEnum_Bool_Exp>;
};


export type Query_RootGenderArgs = {
  distinct_on?: InputMaybe<Array<Gender_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gender_Order_By>>;
  where?: InputMaybe<Gender_Bool_Exp>;
};


export type Query_RootGender_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gender_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gender_Order_By>>;
  where?: InputMaybe<Gender_Bool_Exp>;
};


export type Query_RootGender_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootHaveLabeledDataTypeArgs = {
  value: Scalars['String'];
};


export type Query_RootHaveLabeledDataTypesArgs = {
  distinct_on?: InputMaybe<Array<HaveLabeledDataTypesEnum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<HaveLabeledDataTypesEnum_Order_By>>;
  where?: InputMaybe<HaveLabeledDataTypesEnum_Bool_Exp>;
};


export type Query_RootHaveLabeledDataTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<HaveLabeledDataTypesEnum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<HaveLabeledDataTypesEnum_Order_By>>;
  where?: InputMaybe<HaveLabeledDataTypesEnum_Bool_Exp>;
};


export type Query_RootI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type Query_RootI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Query_RootIdentitiesLegalIdTypeEnumArgs = {
  value: Scalars['String'];
};


export type Query_RootIdentitiesLegalIdTypeEnumsArgs = {
  distinct_on?: InputMaybe<Array<IdentitiesLegalIdTypeEnums_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<IdentitiesLegalIdTypeEnums_Order_By>>;
  where?: InputMaybe<IdentitiesLegalIdTypeEnums_Bool_Exp>;
};


export type Query_RootIdentitiesLegalIdTypeEnumsAggregateArgs = {
  distinct_on?: InputMaybe<Array<IdentitiesLegalIdTypeEnums_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<IdentitiesLegalIdTypeEnums_Order_By>>;
  where?: InputMaybe<IdentitiesLegalIdTypeEnums_Bool_Exp>;
};


export type Query_RootImageArgs = {
  id: Scalars['uuid'];
};


export type Query_RootImagesArgs = {
  distinct_on?: InputMaybe<Array<Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Images_Order_By>>;
  where?: InputMaybe<Images_Bool_Exp>;
};


export type Query_RootImagesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Images_Order_By>>;
  where?: InputMaybe<Images_Bool_Exp>;
};


export type Query_RootIndustry_TypesArgs = {
  distinct_on?: InputMaybe<Array<Industry_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Industry_Types_Order_By>>;
  where?: InputMaybe<Industry_Types_Bool_Exp>;
};


export type Query_RootIndustry_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Industry_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Industry_Types_Order_By>>;
  where?: InputMaybe<Industry_Types_Bool_Exp>;
};


export type Query_RootIndustry_Types_By_PkArgs = {
  name: Scalars['String'];
};


export type Query_RootLabellingPlatformArgs = {
  value: Scalars['String'];
};


export type Query_RootLabellingPlatformsArgs = {
  distinct_on?: InputMaybe<Array<LabellingPlatforms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LabellingPlatforms_Order_By>>;
  where?: InputMaybe<LabellingPlatforms_Bool_Exp>;
};


export type Query_RootLabellingPlatformsAggregateArgs = {
  distinct_on?: InputMaybe<Array<LabellingPlatforms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LabellingPlatforms_Order_By>>;
  where?: InputMaybe<LabellingPlatforms_Bool_Exp>;
};


export type Query_RootManagersArgs = {
  distinct_on?: InputMaybe<Array<Managers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Managers_Order_By>>;
  where?: InputMaybe<Managers_Bool_Exp>;
};


export type Query_RootManagers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Managers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Managers_Order_By>>;
  where?: InputMaybe<Managers_Bool_Exp>;
};


export type Query_RootManagers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMarketplaceProjectArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMarketplaceProjectsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Marketplace_Projects_Order_By>>;
  where?: InputMaybe<Marketplace_Projects_Bool_Exp>;
};


export type Query_RootMartetplaceProjectsArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Marketplace_Projects_Order_By>>;
  where?: InputMaybe<Marketplace_Projects_Bool_Exp>;
};


export type Query_RootModuleArgs = {
  id: Scalars['uuid'];
};


export type Query_RootModuleInstructionArgs = {
  id: Scalars['uuid'];
};


export type Query_RootModuleInstructionsArgs = {
  distinct_on?: InputMaybe<Array<ModuleInstructions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ModuleInstructions_Order_By>>;
  where?: InputMaybe<ModuleInstructions_Bool_Exp>;
};


export type Query_RootModuleInstructionsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ModuleInstructions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ModuleInstructions_Order_By>>;
  where?: InputMaybe<ModuleInstructions_Bool_Exp>;
};


export type Query_RootModuleMarketplaceProjectArgs = {
  moduleId: Scalars['uuid'];
  projectId: Scalars['uuid'];
};


export type Query_RootModulesArgs = {
  distinct_on?: InputMaybe<Array<Modules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Modules_Order_By>>;
  where?: InputMaybe<Modules_Bool_Exp>;
};


export type Query_RootModulesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Modules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Modules_Order_By>>;
  where?: InputMaybe<Modules_Bool_Exp>;
};


export type Query_RootModulesMarketplaceProjectsArgs = {
  distinct_on?: InputMaybe<Array<Modules_Marketplace_Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Modules_Marketplace_Projects_Order_By>>;
  where?: InputMaybe<Modules_Marketplace_Projects_Bool_Exp>;
};


export type Query_RootModulesMarketplaceProjectsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Modules_Marketplace_Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Modules_Marketplace_Projects_Order_By>>;
  where?: InputMaybe<Modules_Marketplace_Projects_Bool_Exp>;
};


export type Query_RootOrganizationArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOrganizationCustomerArgs = {
  customerId: Scalars['uuid'];
  organizationId: Scalars['uuid'];
};


export type Query_RootOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Query_RootOrganizationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Query_RootOrganizationsCustomersArgs = {
  distinct_on?: InputMaybe<Array<OrganizationsCustomers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrganizationsCustomers_Order_By>>;
  where?: InputMaybe<OrganizationsCustomers_Bool_Exp>;
};


export type Query_RootOrganizationsCustomersAggregateArgs = {
  distinct_on?: InputMaybe<Array<OrganizationsCustomers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrganizationsCustomers_Order_By>>;
  where?: InputMaybe<OrganizationsCustomers_Bool_Exp>;
};


export type Query_RootPricingPlanArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPricingPlansArgs = {
  distinct_on?: InputMaybe<Array<PricingPlans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PricingPlans_Order_By>>;
  where?: InputMaybe<PricingPlans_Bool_Exp>;
};


export type Query_RootPricingPlansAggregateArgs = {
  distinct_on?: InputMaybe<Array<PricingPlans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PricingPlans_Order_By>>;
  where?: InputMaybe<PricingPlans_Bool_Exp>;
};


export type Query_RootProjectStatusArgs = {
  value: Scalars['String'];
};


export type Query_RootProjectStatusesArgs = {
  distinct_on?: InputMaybe<Array<ProjectStatuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectStatuses_Order_By>>;
  where?: InputMaybe<ProjectStatuses_Bool_Exp>;
};


export type Query_RootProjectStatusesAggregateArgs = {
  distinct_on?: InputMaybe<Array<ProjectStatuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectStatuses_Order_By>>;
  where?: InputMaybe<ProjectStatuses_Bool_Exp>;
};


export type Query_RootSessionArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Query_RootSessionsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Query_RootSpotifyStateTypeArgs = {
  name: Scalars['String'];
};


export type Query_RootSpotifyStateTypesArgs = {
  distinct_on?: InputMaybe<Array<SpotifyStateTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SpotifyStateTypes_Order_By>>;
  where?: InputMaybe<SpotifyStateTypes_Bool_Exp>;
};


export type Query_RootSpotifyStateTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<SpotifyStateTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SpotifyStateTypes_Order_By>>;
  where?: InputMaybe<SpotifyStateTypes_Bool_Exp>;
};


export type Query_RootStrapiArgs = {
  distinct_on?: InputMaybe<Array<Strapi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Strapi_Order_By>>;
  where?: InputMaybe<Strapi_Bool_Exp>;
};


export type Query_RootStrapiModuleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type Query_RootStrapiModulesArgs = {
  filters?: InputMaybe<StrapiModuleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Query_RootStrapiProjectArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type Query_RootStrapiProjectsArgs = {
  filters?: InputMaybe<StrapiProjectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Query_RootStrapi_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Strapi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Strapi_Order_By>>;
  where?: InputMaybe<Strapi_Bool_Exp>;
};


export type Query_RootStrapi_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootStripeIdentitySessionErrorCodeEnumArgs = {
  value: Scalars['String'];
};


export type Query_RootStripeIdentitySessionErrorCodeEnumsArgs = {
  distinct_on?: InputMaybe<Array<StripeIdentitySessionErrorCodeEnums_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StripeIdentitySessionErrorCodeEnums_Order_By>>;
  where?: InputMaybe<StripeIdentitySessionErrorCodeEnums_Bool_Exp>;
};


export type Query_RootStripeIdentitySessionErrorCodeEnumsAggregateArgs = {
  distinct_on?: InputMaybe<Array<StripeIdentitySessionErrorCodeEnums_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StripeIdentitySessionErrorCodeEnums_Order_By>>;
  where?: InputMaybe<StripeIdentitySessionErrorCodeEnums_Bool_Exp>;
};


export type Query_RootStripeIdentitySessionStatusEnumArgs = {
  value: Scalars['String'];
};


export type Query_RootStripeIdentitySessionStatusEnumsArgs = {
  distinct_on?: InputMaybe<Array<StripeIdentitySessionStatusEnums_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StripeIdentitySessionStatusEnums_Order_By>>;
  where?: InputMaybe<StripeIdentitySessionStatusEnums_Bool_Exp>;
};


export type Query_RootStripeIdentitySessionStatusEnumsAggregateArgs = {
  distinct_on?: InputMaybe<Array<StripeIdentitySessionStatusEnums_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StripeIdentitySessionStatusEnums_Order_By>>;
  where?: InputMaybe<StripeIdentitySessionStatusEnums_Bool_Exp>;
};


export type Query_RootStripeIdentitySessionTypeEnumArgs = {
  value: Scalars['String'];
};


export type Query_RootStripeIdentitySessionTypeEnumsArgs = {
  distinct_on?: InputMaybe<Array<StripeIdentitySessionTypeEnums_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StripeIdentitySessionTypeEnums_Order_By>>;
  where?: InputMaybe<StripeIdentitySessionTypeEnums_Bool_Exp>;
};


export type Query_RootStripeIdentitySessionTypeEnumsAggregateArgs = {
  distinct_on?: InputMaybe<Array<StripeIdentitySessionTypeEnums_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StripeIdentitySessionTypeEnums_Order_By>>;
  where?: InputMaybe<StripeIdentitySessionTypeEnums_Bool_Exp>;
};


export type Query_RootStripeVerificationSessionArgs = {
  id: Scalars['uuid'];
};


export type Query_RootStripeVerificationSessionsArgs = {
  distinct_on?: InputMaybe<Array<StripeVerificationSessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StripeVerificationSessions_Order_By>>;
  where?: InputMaybe<StripeVerificationSessions_Bool_Exp>;
};


export type Query_RootStripeVerificationSessionsAggregateArgs = {
  distinct_on?: InputMaybe<Array<StripeVerificationSessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StripeVerificationSessions_Order_By>>;
  where?: InputMaybe<StripeVerificationSessions_Bool_Exp>;
};


export type Query_RootSurveyArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSurveyResponseArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSurveyResponsesArgs = {
  distinct_on?: InputMaybe<Array<SurveyResponses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SurveyResponses_Order_By>>;
  where?: InputMaybe<SurveyResponses_Bool_Exp>;
};


export type Query_RootSurveyResponsesAggregateArgs = {
  distinct_on?: InputMaybe<Array<SurveyResponses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SurveyResponses_Order_By>>;
  where?: InputMaybe<SurveyResponses_Bool_Exp>;
};


export type Query_RootSurveysAggregateArgs = {
  distinct_on?: InputMaybe<Array<Surveys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Surveys_Order_By>>;
  where?: InputMaybe<Surveys_Bool_Exp>;
};


export type Query_RootUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type Query_RootUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Query_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserIdentitiesArgs = {
  distinct_on?: InputMaybe<Array<UserIdentities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserIdentities_Order_By>>;
  where?: InputMaybe<UserIdentities_Bool_Exp>;
};


export type Query_RootUserIdentitiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserIdentities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserIdentities_Order_By>>;
  where?: InputMaybe<UserIdentities_Bool_Exp>;
};


export type Query_RootUserIdentityArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserImageArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserModuleArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserModuleStatusArgs = {
  value: Scalars['String'];
};


export type Query_RootUserModuleStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserModuleStatus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserModuleStatus_Order_By>>;
  where?: InputMaybe<UserModuleStatus_Bool_Exp>;
};


export type Query_RootUserModuleStatusesArgs = {
  distinct_on?: InputMaybe<Array<UserModuleStatus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserModuleStatus_Order_By>>;
  where?: InputMaybe<UserModuleStatus_Bool_Exp>;
};


export type Query_RootUserProjectArgs = {
  projectId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


export type Query_RootUserReferralArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserReferralsArgs = {
  distinct_on?: InputMaybe<Array<UserReferrals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserReferrals_Order_By>>;
  where?: InputMaybe<UserReferrals_Bool_Exp>;
};


export type Query_RootUserReferralsAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserReferrals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserReferrals_Order_By>>;
  where?: InputMaybe<UserReferrals_Bool_Exp>;
};


export type Query_RootUserSupplementaryArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_Ip_AddressesArgs = {
  distinct_on?: InputMaybe<Array<User_Ip_Addresses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Ip_Addresses_Order_By>>;
  where?: InputMaybe<User_Ip_Addresses_Bool_Exp>;
};


export type Query_RootUser_Ip_Addresses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Ip_Addresses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Ip_Addresses_Order_By>>;
  where?: InputMaybe<User_Ip_Addresses_Bool_Exp>;
};


export type Query_RootUser_Ip_Addresses_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsersImagesArgs = {
  distinct_on?: InputMaybe<Array<UsersImages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersImages_Order_By>>;
  where?: InputMaybe<UsersImages_Bool_Exp>;
};


export type Query_RootUsersImagesAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersImages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersImages_Order_By>>;
  where?: InputMaybe<UsersImages_Bool_Exp>;
};


export type Query_RootUsersModulesArgs = {
  distinct_on?: InputMaybe<Array<UsersModules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersModules_Order_By>>;
  where?: InputMaybe<UsersModules_Bool_Exp>;
};


export type Query_RootUsersModulesAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersModules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersModules_Order_By>>;
  where?: InputMaybe<UsersModules_Bool_Exp>;
};


export type Query_RootUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type Query_RootUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Query_RootUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type Query_RootUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Query_RootUsersProjectsArgs = {
  distinct_on?: InputMaybe<Array<Users_Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Projects_Order_By>>;
  where?: InputMaybe<Users_Projects_Bool_Exp>;
};


export type Query_RootUsersProjectsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Projects_Order_By>>;
  where?: InputMaybe<Users_Projects_Bool_Exp>;
};


export type Query_RootUsersSupplementariesArgs = {
  distinct_on?: InputMaybe<Array<Users_Supplementary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Supplementary_Order_By>>;
  where?: InputMaybe<Users_Supplementary_Bool_Exp>;
};


export type Query_RootUsersSupplementariesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Supplementary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Supplementary_Order_By>>;
  where?: InputMaybe<Users_Supplementary_Bool_Exp>;
};


export type Query_RootVanaConnectFaqArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type Query_RootVanaConnectFaqsArgs = {
  filters?: InputMaybe<VanaConnectFaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Query_RootVisualJudgementModuleArgs = {
  id: Scalars['uuid'];
};


export type Query_RootVisualJudgementModuleImageArgs = {
  id: Scalars['uuid'];
};


export type Query_RootVisualJudgementModuleImagesArgs = {
  distinct_on?: InputMaybe<Array<VisualJudgementModuleImages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisualJudgementModuleImages_Order_By>>;
  where?: InputMaybe<VisualJudgementModuleImages_Bool_Exp>;
};


export type Query_RootVisualJudgementModuleImagesAggregateArgs = {
  distinct_on?: InputMaybe<Array<VisualJudgementModuleImages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisualJudgementModuleImages_Order_By>>;
  where?: InputMaybe<VisualJudgementModuleImages_Bool_Exp>;
};


export type Query_RootVisualJudgementModuleResponseArgs = {
  id: Scalars['uuid'];
};


export type Query_RootVisualJudgementModuleResponsesArgs = {
  distinct_on?: InputMaybe<Array<VisualJudgementModuleResponses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisualJudgementModuleResponses_Order_By>>;
  where?: InputMaybe<VisualJudgementModuleResponses_Bool_Exp>;
};


export type Query_RootVisualJudgementModuleResponsesAggregateArgs = {
  distinct_on?: InputMaybe<Array<VisualJudgementModuleResponses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisualJudgementModuleResponses_Order_By>>;
  where?: InputMaybe<VisualJudgementModuleResponses_Bool_Exp>;
};


export type Query_RootVisualJudgementModulesArgs = {
  distinct_on?: InputMaybe<Array<VisualJudgementModules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisualJudgementModules_Order_By>>;
  where?: InputMaybe<VisualJudgementModules_Bool_Exp>;
};


export type Query_RootVisualJudgementModulesAggregateArgs = {
  distinct_on?: InputMaybe<Array<VisualJudgementModules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisualJudgementModules_Order_By>>;
  where?: InputMaybe<VisualJudgementModules_Bool_Exp>;
};


export type Query_RootWalletArgs = {
  id: Scalars['uuid'];
};


export type Query_RootWalletsArgs = {
  distinct_on?: InputMaybe<Array<Wallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallets_Order_By>>;
  where?: InputMaybe<Wallets_Bool_Exp>;
};


export type Query_RootWalletsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Wallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallets_Order_By>>;
  where?: InputMaybe<Wallets_Bool_Exp>;
};


export type Query_RootWorkerArgs = {
  id: Scalars['uuid'];
};


export type Query_RootWorkerSpotifyArgs = {
  workerId: Scalars['uuid'];
};


export type Query_RootWorkersArgs = {
  distinct_on?: InputMaybe<Array<Workers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workers_Order_By>>;
  where?: InputMaybe<Workers_Bool_Exp>;
};


export type Query_RootWorkersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Workers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workers_Order_By>>;
  where?: InputMaybe<Workers_Bool_Exp>;
};


export type Query_RootWorkersSpotifyArgs = {
  distinct_on?: InputMaybe<Array<WorkersSpotify_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkersSpotify_Order_By>>;
  where?: InputMaybe<WorkersSpotify_Bool_Exp>;
};


export type Query_RootWorkersSpotifyAggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkersSpotify_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkersSpotify_Order_By>>;
  where?: InputMaybe<WorkersSpotify_Bool_Exp>;
};

/** columns and relationships of "spotify_state_types" */
export type SpotifyStateTypes = {
  __typename?: 'spotifyStateTypes';
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

/** aggregated selection of "spotify_state_types" */
export type SpotifyStateTypes_Aggregate = {
  __typename?: 'spotifyStateTypes_aggregate';
  aggregate?: Maybe<SpotifyStateTypes_Aggregate_Fields>;
  nodes: Array<SpotifyStateTypes>;
};

/** aggregate fields of "spotify_state_types" */
export type SpotifyStateTypes_Aggregate_Fields = {
  __typename?: 'spotifyStateTypes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<SpotifyStateTypes_Max_Fields>;
  min?: Maybe<SpotifyStateTypes_Min_Fields>;
};


/** aggregate fields of "spotify_state_types" */
export type SpotifyStateTypes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<SpotifyStateTypes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "spotify_state_types". All fields are combined with a logical 'AND'. */
export type SpotifyStateTypes_Bool_Exp = {
  _and?: InputMaybe<Array<SpotifyStateTypes_Bool_Exp>>;
  _not?: InputMaybe<SpotifyStateTypes_Bool_Exp>;
  _or?: InputMaybe<Array<SpotifyStateTypes_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "spotify_state_types" */
export enum SpotifyStateTypes_Constraint {
  /** unique or primary key constraint on columns "name" */
  SpotifyStateTypesPkey = 'spotify_state_types_pkey'
}

export enum SpotifyStateTypes_Enum {
  Completed = 'COMPLETED',
  DuplicateAccount = 'DUPLICATE_ACCOUNT',
  InternalError = 'INTERNAL_ERROR',
  NewAccount = 'NEW_ACCOUNT',
  Started = 'STARTED'
}

/** Boolean expression to compare columns of type "spotifyStateTypes_enum". All fields are combined with logical 'AND'. */
export type SpotifyStateTypes_Enum_Comparison_Exp = {
  _eq?: InputMaybe<SpotifyStateTypes_Enum>;
  _in?: InputMaybe<Array<SpotifyStateTypes_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<SpotifyStateTypes_Enum>;
  _nin?: InputMaybe<Array<SpotifyStateTypes_Enum>>;
};

/** input type for inserting data into table "spotify_state_types" */
export type SpotifyStateTypes_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type SpotifyStateTypes_Max_Fields = {
  __typename?: 'spotifyStateTypes_max_fields';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type SpotifyStateTypes_Min_Fields = {
  __typename?: 'spotifyStateTypes_min_fields';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "spotify_state_types" */
export type SpotifyStateTypes_Mutation_Response = {
  __typename?: 'spotifyStateTypes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<SpotifyStateTypes>;
};

/** on_conflict condition type for table "spotify_state_types" */
export type SpotifyStateTypes_On_Conflict = {
  constraint: SpotifyStateTypes_Constraint;
  update_columns?: Array<SpotifyStateTypes_Update_Column>;
  where?: InputMaybe<SpotifyStateTypes_Bool_Exp>;
};

/** Ordering options when selecting data from "spotify_state_types". */
export type SpotifyStateTypes_Order_By = {
  description?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: spotify_state_types */
export type SpotifyStateTypes_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "spotify_state_types" */
export enum SpotifyStateTypes_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "spotify_state_types" */
export type SpotifyStateTypes_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "spotifyStateTypes" */
export type SpotifyStateTypes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: SpotifyStateTypes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type SpotifyStateTypes_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "spotify_state_types" */
export enum SpotifyStateTypes_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name'
}

export type SpotifyStateTypes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<SpotifyStateTypes_Set_Input>;
  where: SpotifyStateTypes_Bool_Exp;
};

/** columns and relationships of "strapi" */
export type Strapi = {
  __typename?: 'strapi';
  id: Scalars['uuid'];
  vanaConnectFAQs?: Maybe<VanaConnectFaqEntityResponseCollection>;
};


/** columns and relationships of "strapi" */
export type StrapiVanaConnectFaQsArgs = {
  filters?: InputMaybe<VanaConnectFaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** aggregated selection of "strapi" */
export type Strapi_Aggregate = {
  __typename?: 'strapi_aggregate';
  aggregate?: Maybe<Strapi_Aggregate_Fields>;
  nodes: Array<Strapi>;
};

/** aggregate fields of "strapi" */
export type Strapi_Aggregate_Fields = {
  __typename?: 'strapi_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Strapi_Max_Fields>;
  min?: Maybe<Strapi_Min_Fields>;
};


/** aggregate fields of "strapi" */
export type Strapi_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Strapi_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "strapi". All fields are combined with a logical 'AND'. */
export type Strapi_Bool_Exp = {
  _and?: InputMaybe<Array<Strapi_Bool_Exp>>;
  _not?: InputMaybe<Strapi_Bool_Exp>;
  _or?: InputMaybe<Array<Strapi_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "strapi" */
export enum Strapi_Constraint {
  /** unique or primary key constraint on columns "id" */
  StrapiPkey = 'strapi_pkey'
}

/** input type for inserting data into table "strapi" */
export type Strapi_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Strapi_Max_Fields = {
  __typename?: 'strapi_max_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Strapi_Min_Fields = {
  __typename?: 'strapi_min_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "strapi" */
export type Strapi_Mutation_Response = {
  __typename?: 'strapi_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Strapi>;
};

/** on_conflict condition type for table "strapi" */
export type Strapi_On_Conflict = {
  constraint: Strapi_Constraint;
  update_columns?: Array<Strapi_Update_Column>;
  where?: InputMaybe<Strapi_Bool_Exp>;
};

/** Ordering options when selecting data from "strapi". */
export type Strapi_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: strapi */
export type Strapi_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "strapi" */
export enum Strapi_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "strapi" */
export type Strapi_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "strapi" */
export type Strapi_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Strapi_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Strapi_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "strapi" */
export enum Strapi_Update_Column {
  /** column name */
  Id = 'id'
}

export type Strapi_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Strapi_Set_Input>;
  where: Strapi_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table in a streaming manner : "cash_out_requests" */
  CashOutRequests_stream: Array<CashOutRequests>;
  /** fetch data from the table in a streaming manner : "collection_type" */
  CollectionTypes_stream: Array<CollectionTypes>;
  /** fetch data from the table in a streaming manner : "customers" */
  Customers_stream: Array<Customers>;
  /** fetch data from the table in a streaming manner : "etx_task_sessions" */
  EtxTaskSessions_stream: Array<EtxTaskSessions>;
  /** fetch data from the table in a streaming manner : "fireboa_cash_out_crypto_requests" */
  FireboaCashOutCryptoRequests_stream: Array<FireboaCashOutCryptoRequests>;
  /** fetch data from the table in a streaming manner : "fireboa_cash_out_gift_card_requests" */
  FireboaCashOutGiftCardRequests_stream: Array<FireboaCashOutGiftCardRequests>;
  /** fetch data from the table in a streaming manner : "fireboa_cash_out_preferred_methods" */
  FireboaCashOutPreferredMethods_stream: Array<FireboaCashOutPreferredMethods>;
  /** fetch data from the table in a streaming manner : "fireboa_cash_out_requests" */
  FireboaCashOutRequests_stream: Array<FireboaCashOutRequests>;
  /** fetch data from the table in a streaming manner : "fireboa_modules" */
  FireboaModules_stream: Array<FireboaModules>;
  /** fetch data from the table in a streaming manner : "fireboa_projects_modules_users" */
  FireboaProjectsModulesUsers_stream: Array<FireboaProjectsModulesUsers>;
  /** fetch data from the table in a streaming manner : "fireboa_projects_modules" */
  FireboaProjectsModules_stream: Array<FireboaProjectsModules>;
  /** fetch data from the table in a streaming manner : "fireboa_projects_users" */
  FireboaProjectsUsers_stream: Array<FireboaProjectsUsers>;
  /** fetch data from the table in a streaming manner : "fireboa_projects" */
  FireboaProjects_stream: Array<FireboaProjects>;
  /** fetch data from the table in a streaming manner : "fraud_status_enum" */
  FraudStatusEnum_stream: Array<FraudStatusEnum>;
  /** fetch data from the table in a streaming manner : "identities_legal_id_type_enum" */
  IdentitiesLegalIdTypeEnums_stream: Array<IdentitiesLegalIdTypeEnums>;
  /** fetch data from the table in a streaming manner : "images" */
  Images_stream: Array<Images>;
  /** fetch data from the table in a streaming manner : "module_instructions" */
  ModuleInstructions_stream: Array<ModuleInstructions>;
  /** fetch data from the table in a streaming manner : "modules" */
  Modules_stream: Array<Modules>;
  /** fetch data from the table in a streaming manner : "project_statuses" */
  ProjectStatuses_stream: Array<ProjectStatuses>;
  /** fetch data from the table in a streaming manner : "sessions" */
  Sessions_stream: Array<Sessions>;
  /** fetch data from the table in a streaming manner : "stripe_identity_session_error_code_enum" */
  StripeIdentitySessionErrorCodeEnums_stream: Array<StripeIdentitySessionErrorCodeEnums>;
  /** fetch data from the table in a streaming manner : "stripe_identity_session_status_enum" */
  StripeIdentitySessionStatusEnums_stream: Array<StripeIdentitySessionStatusEnums>;
  /** fetch data from the table in a streaming manner : "stripe_identity_session_type_enum" */
  StripeIdentitySessionTypeEnums_stream: Array<StripeIdentitySessionTypeEnums>;
  /** fetch data from the table in a streaming manner : "stripe_verification_sessions" */
  StripeVerificationSessions_stream: Array<StripeVerificationSessions>;
  /** fetch data from the table in a streaming manner : "survey_responses" */
  SurveyResponses_stream: Array<SurveyResponses>;
  /** fetch data from the table: "surveys" */
  Surveys: Array<Surveys>;
  /** fetch data from the table in a streaming manner : "surveys" */
  Surveys_stream: Array<Surveys>;
  /** fetch data from the table in a streaming manner : "user_identities" */
  UserIdentities_stream: Array<UserIdentities>;
  /** fetch data from the table in a streaming manner : "user_module_progress_enum" */
  UserModuleStatus_stream: Array<UserModuleStatus>;
  /** fetch data from the table in a streaming manner : "user_referrals" */
  UserReferrals_stream: Array<UserReferrals>;
  /** fetch data from the table in a streaming manner : "users_images" */
  UsersImages_stream: Array<UsersImages>;
  /** fetch data from the table in a streaming manner : "users_modules" */
  UsersModules_stream: Array<UsersModules>;
  /** fetch data from the table in a streaming manner : "users" */
  Users_stream: Array<Users>;
  /** fetch data from the table in a streaming manner : "visual_judgement_module_responses" */
  VisualJudgementModuleResponses_stream: Array<VisualJudgementModuleResponses>;
  /** fetch data from the table in a streaming manner : "wallets" */
  Wallets_stream: Array<Wallets>;
  /** fetch data from the table in a streaming manner : "workers" */
  Workers_stream: Array<Workers>;
  /** fetch data from the table: "cash_out_methods" using primary key columns */
  cashOutMethod?: Maybe<CashOutMethods>;
  /** fetch data from the table: "cash_out_methods" */
  cashOutMethods: Array<CashOutMethods>;
  /** fetch aggregated fields from the table: "cash_out_methods" */
  cashOutMethodsAggregate: CashOutMethods_Aggregate;
  /** fetch data from the table in a streaming manner : "cash_out_methods" */
  cashOutMethods_stream: Array<CashOutMethods>;
  /** fetch data from the table: "cash_out_requests" using primary key columns */
  cashOutRequest?: Maybe<CashOutRequests>;
  /** An array relationship */
  cashOutRequests: Array<CashOutRequests>;
  /** fetch aggregated fields from the table: "cash_out_requests" */
  cashOutRequestsAggregate: CashOutRequests_Aggregate;
  /** fetch data from the table: "collection_type" using primary key columns */
  collectionType?: Maybe<CollectionTypes>;
  /** fetch data from the table: "collection_type" */
  collectionTypes: Array<CollectionTypes>;
  /** fetch aggregated fields from the table: "collection_type" */
  collectionTypesAggregate: CollectionTypes_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customer?: Maybe<Customers>;
  /** An array relationship */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customersAggregate: Customers_Aggregate;
  /** fetch data from the table: "data_types" using primary key columns */
  dataType?: Maybe<DatatTypes>;
  /** fetch data from the table: "data_types" */
  dataTypes: Array<DatatTypes>;
  /** fetch aggregated fields from the table: "data_types" */
  dataTypesAggregate: DatatTypes_Aggregate;
  /** fetch data from the table in a streaming manner : "data_types" */
  datatTypes_stream: Array<DatatTypes>;
  /** fetch data from the table: "etx_task_sessions" using primary key columns */
  etxTaskSession?: Maybe<EtxTaskSessions>;
  /** An array relationship */
  etxTaskSessions: Array<EtxTaskSessions>;
  /** fetch aggregated fields from the table: "etx_task_sessions" */
  etxTaskSessionsAggregate: EtxTaskSessions_Aggregate;
  /** fetch data from the table: "feature_types" using primary key columns */
  featureType?: Maybe<FeatureTypes>;
  /** fetch data from the table: "feature_types" */
  featureTypes: Array<FeatureTypes>;
  /** fetch aggregated fields from the table: "feature_types" */
  featureTypesAggregate: FeatureTypes_Aggregate;
  /** fetch data from the table in a streaming manner : "feature_types" */
  featureTypes_stream: Array<FeatureTypes>;
  /** fetch data from the table: "fireboa_cash_out_crypto_requests" using primary key columns */
  fireboaCashOutCryptoRequest?: Maybe<FireboaCashOutCryptoRequests>;
  /** fetch data from the table: "fireboa_cash_out_crypto_requests" */
  fireboaCashOutCryptoRequests: Array<FireboaCashOutCryptoRequests>;
  /** fetch aggregated fields from the table: "fireboa_cash_out_crypto_requests" */
  fireboaCashOutCryptoRequestsAggregate: FireboaCashOutCryptoRequests_Aggregate;
  /** fetch data from the table: "fireboa_cash_out_gift_card_requests" using primary key columns */
  fireboaCashOutGiftCardRequest?: Maybe<FireboaCashOutGiftCardRequests>;
  /** fetch data from the table: "fireboa_cash_out_gift_card_requests" */
  fireboaCashOutGiftCardRequests: Array<FireboaCashOutGiftCardRequests>;
  /** fetch aggregated fields from the table: "fireboa_cash_out_gift_card_requests" */
  fireboaCashOutGiftCardRequestsAggregate: FireboaCashOutGiftCardRequests_Aggregate;
  /** fetch data from the table: "fireboa_cash_out_preferred_methods" using primary key columns */
  fireboaCashOutPreferredMethod?: Maybe<FireboaCashOutPreferredMethods>;
  /** An array relationship */
  fireboaCashOutPreferredMethods: Array<FireboaCashOutPreferredMethods>;
  /** fetch aggregated fields from the table: "fireboa_cash_out_preferred_methods" */
  fireboaCashOutPreferredMethodsAggregate: FireboaCashOutPreferredMethods_Aggregate;
  /** fetch data from the table: "fireboa_cash_out_requests" using primary key columns */
  fireboaCashOutRequest?: Maybe<FireboaCashOutRequests>;
  /** An array relationship */
  fireboaCashOutRequests: Array<FireboaCashOutRequests>;
  /** fetch aggregated fields from the table: "fireboa_cash_out_requests" */
  fireboaCashOutRequestsAggregate: FireboaCashOutRequests_Aggregate;
  /** fetch data from the table: "fireboa_modules" using primary key columns */
  fireboaModule?: Maybe<FireboaModules>;
  /** fetch data from the table: "fireboa_modules" */
  fireboaModules: Array<FireboaModules>;
  /** fetch aggregated fields from the table: "fireboa_modules" */
  fireboaModulesAggregate: FireboaModules_Aggregate;
  /** fetch data from the table: "fireboa_projects" using primary key columns */
  fireboaProject?: Maybe<FireboaProjects>;
  /** fetch data from the table: "fireboa_projects_modules" using primary key columns */
  fireboaProjectModule?: Maybe<FireboaProjectsModules>;
  /** fetch data from the table: "fireboa_projects_modules_users" using primary key columns */
  fireboaProjectModuleUser?: Maybe<FireboaProjectsModulesUsers>;
  /** fetch data from the table: "fireboa_projects_users" using primary key columns */
  fireboaProjectUser?: Maybe<FireboaProjectsUsers>;
  /** fetch data from the table: "fireboa_projects" */
  fireboaProjects: Array<FireboaProjects>;
  /** fetch aggregated fields from the table: "fireboa_projects" */
  fireboaProjectsAggregate: FireboaProjects_Aggregate;
  /** fetch data from the table: "fireboa_projects_modules" */
  fireboaProjectsModules: Array<FireboaProjectsModules>;
  /** fetch aggregated fields from the table: "fireboa_projects_modules" */
  fireboaProjectsModulesAggregate: FireboaProjectsModules_Aggregate;
  /** fetch data from the table: "fireboa_projects_modules_users" */
  fireboaProjectsModulesUsers: Array<FireboaProjectsModulesUsers>;
  /** fetch aggregated fields from the table: "fireboa_projects_modules_users" */
  fireboaProjectsModulesUsersAggregate: FireboaProjectsModulesUsers_Aggregate;
  /** An array relationship */
  fireboaProjectsUsers: Array<FireboaProjectsUsers>;
  /** fetch aggregated fields from the table: "fireboa_projects_users" */
  fireboaProjectsUsersAggregate: FireboaProjectsUsers_Aggregate;
  /** fetch data from the table: "fraud_status_enum" using primary key columns */
  fraudStatusEnum?: Maybe<FraudStatusEnum>;
  /** fetch aggregated fields from the table: "fraud_status_enum" */
  fraudStatusEnumAggregate: FraudStatusEnum_Aggregate;
  /** fetch data from the table: "fraud_status_enum" */
  fraudStatusEnums: Array<FraudStatusEnum>;
  /** fetch data from the table: "gender" */
  gender: Array<Gender>;
  /** fetch aggregated fields from the table: "gender" */
  gender_aggregate: Gender_Aggregate;
  /** fetch data from the table: "gender" using primary key columns */
  gender_by_pk?: Maybe<Gender>;
  /** fetch data from the table in a streaming manner : "gender" */
  gender_stream: Array<Gender>;
  /** fetch data from the table: "have_labeled_data_types" using primary key columns */
  haveLabeledDataType?: Maybe<HaveLabeledDataTypesEnum>;
  /** fetch data from the table: "have_labeled_data_types" */
  haveLabeledDataTypes: Array<HaveLabeledDataTypesEnum>;
  /** fetch aggregated fields from the table: "have_labeled_data_types" */
  haveLabeledDataTypesAggregate: HaveLabeledDataTypesEnum_Aggregate;
  /** fetch data from the table in a streaming manner : "have_labeled_data_types" */
  haveLabeledDataTypesEnum_stream: Array<HaveLabeledDataTypesEnum>;
  /** fetch data from the table: "identities_legal_id_type_enum" using primary key columns */
  identitiesLegalIdTypeEnum?: Maybe<IdentitiesLegalIdTypeEnums>;
  /** fetch data from the table: "identities_legal_id_type_enum" */
  identitiesLegalIdTypeEnums: Array<IdentitiesLegalIdTypeEnums>;
  /** fetch aggregated fields from the table: "identities_legal_id_type_enum" */
  identitiesLegalIdTypeEnumsAggregate: IdentitiesLegalIdTypeEnums_Aggregate;
  /** fetch data from the table: "images" using primary key columns */
  image?: Maybe<Images>;
  /** fetch data from the table: "images" */
  images: Array<Images>;
  /** fetch aggregated fields from the table: "images" */
  imagesAggregate: Images_Aggregate;
  /** fetch data from the table: "industry_types" */
  industry_types: Array<Industry_Types>;
  /** fetch aggregated fields from the table: "industry_types" */
  industry_types_aggregate: Industry_Types_Aggregate;
  /** fetch data from the table: "industry_types" using primary key columns */
  industry_types_by_pk?: Maybe<Industry_Types>;
  /** fetch data from the table in a streaming manner : "industry_types" */
  industry_types_stream: Array<Industry_Types>;
  /** fetch data from the table: "labelling_platforms" using primary key columns */
  labellingPlatform?: Maybe<LabellingPlatforms>;
  /** fetch data from the table: "labelling_platforms" */
  labellingPlatforms: Array<LabellingPlatforms>;
  /** fetch aggregated fields from the table: "labelling_platforms" */
  labellingPlatformsAggregate: LabellingPlatforms_Aggregate;
  /** fetch data from the table in a streaming manner : "labelling_platforms" */
  labellingPlatforms_stream: Array<LabellingPlatforms>;
  /** An array relationship */
  managers: Array<Managers>;
  /** An aggregate relationship */
  managers_aggregate: Managers_Aggregate;
  /** fetch data from the table: "managers" using primary key columns */
  managers_by_pk?: Maybe<Managers>;
  /** fetch data from the table in a streaming manner : "managers" */
  managers_stream: Array<Managers>;
  /** fetch data from the table: "marketplace_projects" using primary key columns */
  marketplaceProject?: Maybe<Marketplace_Projects>;
  /** fetch aggregated fields from the table: "marketplace_projects" */
  marketplaceProjectsAggregate: Marketplace_Projects_Aggregate;
  /** fetch data from the table in a streaming manner : "marketplace_projects" */
  marketplace_projects_stream: Array<Marketplace_Projects>;
  /** fetch data from the table: "marketplace_projects" */
  martetplaceProjects: Array<Marketplace_Projects>;
  /** fetch data from the table: "modules" using primary key columns */
  module?: Maybe<Modules>;
  /** fetch data from the table: "module_instructions" using primary key columns */
  moduleInstruction?: Maybe<ModuleInstructions>;
  /** An array relationship */
  moduleInstructions: Array<ModuleInstructions>;
  /** fetch aggregated fields from the table: "module_instructions" */
  moduleInstructionsAggregate: ModuleInstructions_Aggregate;
  /** fetch data from the table: "modules_marketplace_projects" using primary key columns */
  moduleMarketplaceProject?: Maybe<Modules_Marketplace_Projects>;
  /** fetch data from the table: "modules" */
  modules: Array<Modules>;
  /** fetch aggregated fields from the table: "modules" */
  modulesAggregate: Modules_Aggregate;
  /** An array relationship */
  modulesMarketplaceProjects: Array<Modules_Marketplace_Projects>;
  /** fetch aggregated fields from the table: "modules_marketplace_projects" */
  modulesMarketplaceProjectsAggregate: Modules_Marketplace_Projects_Aggregate;
  /** fetch data from the table in a streaming manner : "modules_marketplace_projects" */
  modules_marketplace_projects_stream: Array<Modules_Marketplace_Projects>;
  /** fetch data from the table: "organizations" using primary key columns */
  organization?: Maybe<Organizations>;
  /** fetch data from the table: "organizations_customers" using primary key columns */
  organizationCustomer?: Maybe<OrganizationsCustomers>;
  /** An array relationship */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organizations" */
  organizationsAggregate: Organizations_Aggregate;
  /** fetch data from the table: "organizations_customers" */
  organizationsCustomers: Array<OrganizationsCustomers>;
  /** fetch aggregated fields from the table: "organizations_customers" */
  organizationsCustomersAggregate: OrganizationsCustomers_Aggregate;
  /** fetch data from the table in a streaming manner : "organizations_customers" */
  organizationsCustomers_stream: Array<OrganizationsCustomers>;
  /** fetch data from the table in a streaming manner : "organizations" */
  organizations_stream: Array<Organizations>;
  /** fetch data from the table: "pricing_plans" using primary key columns */
  pricingPlan?: Maybe<PricingPlans>;
  /** fetch data from the table: "pricing_plans" */
  pricingPlans: Array<PricingPlans>;
  /** fetch aggregated fields from the table: "pricing_plans" */
  pricingPlansAggregate: PricingPlans_Aggregate;
  /** fetch data from the table in a streaming manner : "pricing_plans" */
  pricingPlans_stream: Array<PricingPlans>;
  /** fetch data from the table: "project_statuses" using primary key columns */
  projectStatus?: Maybe<ProjectStatuses>;
  /** fetch data from the table: "project_statuses" */
  projectStatuses: Array<ProjectStatuses>;
  /** fetch aggregated fields from the table: "project_statuses" */
  projectStatusesAggregate: ProjectStatuses_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  session?: Maybe<Sessions>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** fetch aggregated fields from the table: "sessions" */
  sessionsAggregate: Sessions_Aggregate;
  /** fetch data from the table: "spotify_state_types" using primary key columns */
  spotifyStateType?: Maybe<SpotifyStateTypes>;
  /** fetch data from the table: "spotify_state_types" */
  spotifyStateTypes: Array<SpotifyStateTypes>;
  /** fetch aggregated fields from the table: "spotify_state_types" */
  spotifyStateTypesAggregate: SpotifyStateTypes_Aggregate;
  /** fetch data from the table in a streaming manner : "spotify_state_types" */
  spotifyStateTypes_stream: Array<SpotifyStateTypes>;
  /** fetch data from the table: "strapi" */
  strapi: Array<Strapi>;
  /** fetch aggregated fields from the table: "strapi" */
  strapi_aggregate: Strapi_Aggregate;
  /** fetch data from the table: "strapi" using primary key columns */
  strapi_by_pk?: Maybe<Strapi>;
  /** fetch data from the table in a streaming manner : "strapi" */
  strapi_stream: Array<Strapi>;
  /** fetch data from the table: "stripe_identity_session_error_code_enum" using primary key columns */
  stripeIdentitySessionErrorCodeEnum?: Maybe<StripeIdentitySessionErrorCodeEnums>;
  /** fetch data from the table: "stripe_identity_session_error_code_enum" */
  stripeIdentitySessionErrorCodeEnums: Array<StripeIdentitySessionErrorCodeEnums>;
  /** fetch aggregated fields from the table: "stripe_identity_session_error_code_enum" */
  stripeIdentitySessionErrorCodeEnumsAggregate: StripeIdentitySessionErrorCodeEnums_Aggregate;
  /** fetch data from the table: "stripe_identity_session_status_enum" using primary key columns */
  stripeIdentitySessionStatusEnum?: Maybe<StripeIdentitySessionStatusEnums>;
  /** fetch data from the table: "stripe_identity_session_status_enum" */
  stripeIdentitySessionStatusEnums: Array<StripeIdentitySessionStatusEnums>;
  /** fetch aggregated fields from the table: "stripe_identity_session_status_enum" */
  stripeIdentitySessionStatusEnumsAggregate: StripeIdentitySessionStatusEnums_Aggregate;
  /** fetch data from the table: "stripe_identity_session_type_enum" using primary key columns */
  stripeIdentitySessionTypeEnum?: Maybe<StripeIdentitySessionTypeEnums>;
  /** fetch data from the table: "stripe_identity_session_type_enum" */
  stripeIdentitySessionTypeEnums: Array<StripeIdentitySessionTypeEnums>;
  /** fetch aggregated fields from the table: "stripe_identity_session_type_enum" */
  stripeIdentitySessionTypeEnumsAggregate: StripeIdentitySessionTypeEnums_Aggregate;
  /** fetch data from the table: "stripe_verification_sessions" using primary key columns */
  stripeVerificationSession?: Maybe<StripeVerificationSessions>;
  /** An array relationship */
  stripeVerificationSessions: Array<StripeVerificationSessions>;
  /** fetch aggregated fields from the table: "stripe_verification_sessions" */
  stripeVerificationSessionsAggregate: StripeVerificationSessions_Aggregate;
  /** fetch data from the table: "surveys" using primary key columns */
  survey?: Maybe<Surveys>;
  /** fetch data from the table: "survey_responses" using primary key columns */
  surveyResponse?: Maybe<SurveyResponses>;
  /** An array relationship */
  surveyResponses: Array<SurveyResponses>;
  /** fetch aggregated fields from the table: "survey_responses" */
  surveyResponsesAggregate: SurveyResponses_Aggregate;
  /** fetch aggregated fields from the table: "surveys" */
  surveysAggregate: Surveys_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  user?: Maybe<Users>;
  /** An array relationship */
  userIdentities: Array<UserIdentities>;
  /** fetch aggregated fields from the table: "user_identities" */
  userIdentitiesAggregate: UserIdentities_Aggregate;
  /** fetch data from the table: "user_identities" using primary key columns */
  userIdentity?: Maybe<UserIdentities>;
  /** fetch data from the table: "users_images" using primary key columns */
  userImage?: Maybe<UsersImages>;
  /** fetch data from the table: "users_modules" using primary key columns */
  userModule?: Maybe<UsersModules>;
  /** fetch data from the table: "user_module_progress_enum" using primary key columns */
  userModuleStatus?: Maybe<UserModuleStatus>;
  /** fetch aggregated fields from the table: "user_module_progress_enum" */
  userModuleStatusAggregate: UserModuleStatus_Aggregate;
  /** fetch data from the table: "user_module_progress_enum" */
  userModuleStatuses: Array<UserModuleStatus>;
  /** fetch data from the table: "users_projects" using primary key columns */
  userProject?: Maybe<Users_Projects>;
  /** fetch data from the table: "user_referrals" using primary key columns */
  userReferral?: Maybe<UserReferrals>;
  /** fetch data from the table: "user_referrals" */
  userReferrals: Array<UserReferrals>;
  /** fetch aggregated fields from the table: "user_referrals" */
  userReferralsAggregate: UserReferrals_Aggregate;
  /** fetch data from the table: "users_supplementary" using primary key columns */
  userSupplementary?: Maybe<Users_Supplementary>;
  /** fetch data from the table: "user_ip_addresses" */
  user_ip_addresses: Array<User_Ip_Addresses>;
  /** fetch aggregated fields from the table: "user_ip_addresses" */
  user_ip_addresses_aggregate: User_Ip_Addresses_Aggregate;
  /** fetch data from the table: "user_ip_addresses" using primary key columns */
  user_ip_addresses_by_pk?: Maybe<User_Ip_Addresses>;
  /** fetch data from the table in a streaming manner : "user_ip_addresses" */
  user_ip_addresses_stream: Array<User_Ip_Addresses>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  usersAggregate: Users_Aggregate;
  /** fetch data from the table: "users_images" */
  usersImages: Array<UsersImages>;
  /** fetch aggregated fields from the table: "users_images" */
  usersImagesAggregate: UsersImages_Aggregate;
  /** An array relationship */
  usersModules: Array<UsersModules>;
  /** fetch aggregated fields from the table: "users_modules" */
  usersModulesAggregate: UsersModules_Aggregate;
  /** An array relationship */
  usersProjects: Array<Users_Projects>;
  /** fetch aggregated fields from the table: "users_projects" */
  usersProjectsAggregate: Users_Projects_Aggregate;
  /** fetch data from the table: "users_supplementary" */
  usersSupplementaries: Array<Users_Supplementary>;
  /** fetch aggregated fields from the table: "users_supplementary" */
  usersSupplementariesAggregate: Users_Supplementary_Aggregate;
  /** fetch data from the table in a streaming manner : "users_projects" */
  users_projects_stream: Array<Users_Projects>;
  /** fetch data from the table in a streaming manner : "users_supplementary" */
  users_supplementary_stream: Array<Users_Supplementary>;
  /** fetch data from the table: "visual_judgement_modules" using primary key columns */
  visualJudgementModule?: Maybe<VisualJudgementModules>;
  /** fetch data from the table: "visual_judgement_module_images" using primary key columns */
  visualJudgementModuleImage?: Maybe<VisualJudgementModuleImages>;
  /** An array relationship */
  visualJudgementModuleImages: Array<VisualJudgementModuleImages>;
  /** fetch aggregated fields from the table: "visual_judgement_module_images" */
  visualJudgementModuleImagesAggregate: VisualJudgementModuleImages_Aggregate;
  /** fetch data from the table in a streaming manner : "visual_judgement_module_images" */
  visualJudgementModuleImages_stream: Array<VisualJudgementModuleImages>;
  /** fetch data from the table: "visual_judgement_module_responses" using primary key columns */
  visualJudgementModuleResponse?: Maybe<VisualJudgementModuleResponses>;
  /** An array relationship */
  visualJudgementModuleResponses: Array<VisualJudgementModuleResponses>;
  /** fetch aggregated fields from the table: "visual_judgement_module_responses" */
  visualJudgementModuleResponsesAggregate: VisualJudgementModuleResponses_Aggregate;
  /** An array relationship */
  visualJudgementModules: Array<VisualJudgementModules>;
  /** fetch aggregated fields from the table: "visual_judgement_modules" */
  visualJudgementModulesAggregate: VisualJudgementModules_Aggregate;
  /** fetch data from the table in a streaming manner : "visual_judgement_modules" */
  visualJudgementModules_stream: Array<VisualJudgementModules>;
  /** fetch data from the table: "wallets" using primary key columns */
  wallet?: Maybe<Wallets>;
  /** An array relationship */
  wallets: Array<Wallets>;
  /** fetch aggregated fields from the table: "wallets" */
  walletsAggregate: Wallets_Aggregate;
  /** fetch data from the table: "workers" using primary key columns */
  worker?: Maybe<Workers>;
  /** fetch data from the table: "workers_spotify" using primary key columns */
  workerSpotify?: Maybe<WorkersSpotify>;
  /** fetch data from the table: "workers" */
  workers: Array<Workers>;
  /** fetch aggregated fields from the table: "workers" */
  workersAggregate: Workers_Aggregate;
  /** fetch data from the table: "workers_spotify" */
  workersSpotify: Array<WorkersSpotify>;
  /** fetch aggregated fields from the table: "workers_spotify" */
  workersSpotifyAggregate: WorkersSpotify_Aggregate;
  /** fetch data from the table in a streaming manner : "workers_spotify" */
  workersSpotify_stream: Array<WorkersSpotify>;
};


export type Subscription_RootCashOutRequests_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<CashOutRequests_Stream_Cursor_Input>>;
  where?: InputMaybe<CashOutRequests_Bool_Exp>;
};


export type Subscription_RootCollectionTypes_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<CollectionTypes_Stream_Cursor_Input>>;
  where?: InputMaybe<CollectionTypes_Bool_Exp>;
};


export type Subscription_RootCustomers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Customers_Stream_Cursor_Input>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootEtxTaskSessions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<EtxTaskSessions_Stream_Cursor_Input>>;
  where?: InputMaybe<EtxTaskSessions_Bool_Exp>;
};


export type Subscription_RootFireboaCashOutCryptoRequests_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<FireboaCashOutCryptoRequests_Stream_Cursor_Input>>;
  where?: InputMaybe<FireboaCashOutCryptoRequests_Bool_Exp>;
};


export type Subscription_RootFireboaCashOutGiftCardRequests_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<FireboaCashOutGiftCardRequests_Stream_Cursor_Input>>;
  where?: InputMaybe<FireboaCashOutGiftCardRequests_Bool_Exp>;
};


export type Subscription_RootFireboaCashOutPreferredMethods_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<FireboaCashOutPreferredMethods_Stream_Cursor_Input>>;
  where?: InputMaybe<FireboaCashOutPreferredMethods_Bool_Exp>;
};


export type Subscription_RootFireboaCashOutRequests_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<FireboaCashOutRequests_Stream_Cursor_Input>>;
  where?: InputMaybe<FireboaCashOutRequests_Bool_Exp>;
};


export type Subscription_RootFireboaModules_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<FireboaModules_Stream_Cursor_Input>>;
  where?: InputMaybe<FireboaModules_Bool_Exp>;
};


export type Subscription_RootFireboaProjectsModulesUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<FireboaProjectsModulesUsers_Stream_Cursor_Input>>;
  where?: InputMaybe<FireboaProjectsModulesUsers_Bool_Exp>;
};


export type Subscription_RootFireboaProjectsModules_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<FireboaProjectsModules_Stream_Cursor_Input>>;
  where?: InputMaybe<FireboaProjectsModules_Bool_Exp>;
};


export type Subscription_RootFireboaProjectsUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<FireboaProjectsUsers_Stream_Cursor_Input>>;
  where?: InputMaybe<FireboaProjectsUsers_Bool_Exp>;
};


export type Subscription_RootFireboaProjects_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<FireboaProjects_Stream_Cursor_Input>>;
  where?: InputMaybe<FireboaProjects_Bool_Exp>;
};


export type Subscription_RootFraudStatusEnum_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<FraudStatusEnum_Stream_Cursor_Input>>;
  where?: InputMaybe<FraudStatusEnum_Bool_Exp>;
};


export type Subscription_RootIdentitiesLegalIdTypeEnums_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<IdentitiesLegalIdTypeEnums_Stream_Cursor_Input>>;
  where?: InputMaybe<IdentitiesLegalIdTypeEnums_Bool_Exp>;
};


export type Subscription_RootImages_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Images_Stream_Cursor_Input>>;
  where?: InputMaybe<Images_Bool_Exp>;
};


export type Subscription_RootModuleInstructions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<ModuleInstructions_Stream_Cursor_Input>>;
  where?: InputMaybe<ModuleInstructions_Bool_Exp>;
};


export type Subscription_RootModules_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Modules_Stream_Cursor_Input>>;
  where?: InputMaybe<Modules_Bool_Exp>;
};


export type Subscription_RootProjectStatuses_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<ProjectStatuses_Stream_Cursor_Input>>;
  where?: InputMaybe<ProjectStatuses_Bool_Exp>;
};


export type Subscription_RootSessions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Sessions_Stream_Cursor_Input>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Subscription_RootStripeIdentitySessionErrorCodeEnums_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<StripeIdentitySessionErrorCodeEnums_Stream_Cursor_Input>>;
  where?: InputMaybe<StripeIdentitySessionErrorCodeEnums_Bool_Exp>;
};


export type Subscription_RootStripeIdentitySessionStatusEnums_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<StripeIdentitySessionStatusEnums_Stream_Cursor_Input>>;
  where?: InputMaybe<StripeIdentitySessionStatusEnums_Bool_Exp>;
};


export type Subscription_RootStripeIdentitySessionTypeEnums_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<StripeIdentitySessionTypeEnums_Stream_Cursor_Input>>;
  where?: InputMaybe<StripeIdentitySessionTypeEnums_Bool_Exp>;
};


export type Subscription_RootStripeVerificationSessions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<StripeVerificationSessions_Stream_Cursor_Input>>;
  where?: InputMaybe<StripeVerificationSessions_Bool_Exp>;
};


export type Subscription_RootSurveyResponses_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<SurveyResponses_Stream_Cursor_Input>>;
  where?: InputMaybe<SurveyResponses_Bool_Exp>;
};


export type Subscription_RootSurveysArgs = {
  distinct_on?: InputMaybe<Array<Surveys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Surveys_Order_By>>;
  where?: InputMaybe<Surveys_Bool_Exp>;
};


export type Subscription_RootSurveys_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Surveys_Stream_Cursor_Input>>;
  where?: InputMaybe<Surveys_Bool_Exp>;
};


export type Subscription_RootUserIdentities_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<UserIdentities_Stream_Cursor_Input>>;
  where?: InputMaybe<UserIdentities_Bool_Exp>;
};


export type Subscription_RootUserModuleStatus_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<UserModuleStatus_Stream_Cursor_Input>>;
  where?: InputMaybe<UserModuleStatus_Bool_Exp>;
};


export type Subscription_RootUserReferrals_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<UserReferrals_Stream_Cursor_Input>>;
  where?: InputMaybe<UserReferrals_Bool_Exp>;
};


export type Subscription_RootUsersImages_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<UsersImages_Stream_Cursor_Input>>;
  where?: InputMaybe<UsersImages_Bool_Exp>;
};


export type Subscription_RootUsersModules_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<UsersModules_Stream_Cursor_Input>>;
  where?: InputMaybe<UsersModules_Bool_Exp>;
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootVisualJudgementModuleResponses_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<VisualJudgementModuleResponses_Stream_Cursor_Input>>;
  where?: InputMaybe<VisualJudgementModuleResponses_Bool_Exp>;
};


export type Subscription_RootWallets_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Wallets_Stream_Cursor_Input>>;
  where?: InputMaybe<Wallets_Bool_Exp>;
};


export type Subscription_RootWorkers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Workers_Stream_Cursor_Input>>;
  where?: InputMaybe<Workers_Bool_Exp>;
};


export type Subscription_RootCashOutMethodArgs = {
  name: Scalars['String'];
};


export type Subscription_RootCashOutMethodsArgs = {
  distinct_on?: InputMaybe<Array<CashOutMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CashOutMethods_Order_By>>;
  where?: InputMaybe<CashOutMethods_Bool_Exp>;
};


export type Subscription_RootCashOutMethodsAggregateArgs = {
  distinct_on?: InputMaybe<Array<CashOutMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CashOutMethods_Order_By>>;
  where?: InputMaybe<CashOutMethods_Bool_Exp>;
};


export type Subscription_RootCashOutMethods_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<CashOutMethods_Stream_Cursor_Input>>;
  where?: InputMaybe<CashOutMethods_Bool_Exp>;
};


export type Subscription_RootCashOutRequestArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCashOutRequestsArgs = {
  distinct_on?: InputMaybe<Array<CashOutRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CashOutRequests_Order_By>>;
  where?: InputMaybe<CashOutRequests_Bool_Exp>;
};


export type Subscription_RootCashOutRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<CashOutRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CashOutRequests_Order_By>>;
  where?: InputMaybe<CashOutRequests_Bool_Exp>;
};


export type Subscription_RootCollectionTypeArgs = {
  value: Scalars['String'];
};


export type Subscription_RootCollectionTypesArgs = {
  distinct_on?: InputMaybe<Array<CollectionTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CollectionTypes_Order_By>>;
  where?: InputMaybe<CollectionTypes_Bool_Exp>;
};


export type Subscription_RootCollectionTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<CollectionTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CollectionTypes_Order_By>>;
  where?: InputMaybe<CollectionTypes_Bool_Exp>;
};


export type Subscription_RootCustomerArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCustomersArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootCustomersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Customers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Customers_Order_By>>;
  where?: InputMaybe<Customers_Bool_Exp>;
};


export type Subscription_RootDataTypeArgs = {
  name: Scalars['String'];
};


export type Subscription_RootDataTypesArgs = {
  distinct_on?: InputMaybe<Array<DatatTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DatatTypes_Order_By>>;
  where?: InputMaybe<DatatTypes_Bool_Exp>;
};


export type Subscription_RootDataTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<DatatTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DatatTypes_Order_By>>;
  where?: InputMaybe<DatatTypes_Bool_Exp>;
};


export type Subscription_RootDatatTypes_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<DatatTypes_Stream_Cursor_Input>>;
  where?: InputMaybe<DatatTypes_Bool_Exp>;
};


export type Subscription_RootEtxTaskSessionArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootEtxTaskSessionsArgs = {
  distinct_on?: InputMaybe<Array<EtxTaskSessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EtxTaskSessions_Order_By>>;
  where?: InputMaybe<EtxTaskSessions_Bool_Exp>;
};


export type Subscription_RootEtxTaskSessionsAggregateArgs = {
  distinct_on?: InputMaybe<Array<EtxTaskSessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<EtxTaskSessions_Order_By>>;
  where?: InputMaybe<EtxTaskSessions_Bool_Exp>;
};


export type Subscription_RootFeatureTypeArgs = {
  value: Scalars['String'];
};


export type Subscription_RootFeatureTypesArgs = {
  distinct_on?: InputMaybe<Array<FeatureTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FeatureTypes_Order_By>>;
  where?: InputMaybe<FeatureTypes_Bool_Exp>;
};


export type Subscription_RootFeatureTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<FeatureTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FeatureTypes_Order_By>>;
  where?: InputMaybe<FeatureTypes_Bool_Exp>;
};


export type Subscription_RootFeatureTypes_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<FeatureTypes_Stream_Cursor_Input>>;
  where?: InputMaybe<FeatureTypes_Bool_Exp>;
};


export type Subscription_RootFireboaCashOutCryptoRequestArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFireboaCashOutCryptoRequestsArgs = {
  distinct_on?: InputMaybe<Array<FireboaCashOutCryptoRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaCashOutCryptoRequests_Order_By>>;
  where?: InputMaybe<FireboaCashOutCryptoRequests_Bool_Exp>;
};


export type Subscription_RootFireboaCashOutCryptoRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<FireboaCashOutCryptoRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaCashOutCryptoRequests_Order_By>>;
  where?: InputMaybe<FireboaCashOutCryptoRequests_Bool_Exp>;
};


export type Subscription_RootFireboaCashOutGiftCardRequestArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFireboaCashOutGiftCardRequestsArgs = {
  distinct_on?: InputMaybe<Array<FireboaCashOutGiftCardRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaCashOutGiftCardRequests_Order_By>>;
  where?: InputMaybe<FireboaCashOutGiftCardRequests_Bool_Exp>;
};


export type Subscription_RootFireboaCashOutGiftCardRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<FireboaCashOutGiftCardRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaCashOutGiftCardRequests_Order_By>>;
  where?: InputMaybe<FireboaCashOutGiftCardRequests_Bool_Exp>;
};


export type Subscription_RootFireboaCashOutPreferredMethodArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFireboaCashOutPreferredMethodsArgs = {
  distinct_on?: InputMaybe<Array<FireboaCashOutPreferredMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaCashOutPreferredMethods_Order_By>>;
  where?: InputMaybe<FireboaCashOutPreferredMethods_Bool_Exp>;
};


export type Subscription_RootFireboaCashOutPreferredMethodsAggregateArgs = {
  distinct_on?: InputMaybe<Array<FireboaCashOutPreferredMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaCashOutPreferredMethods_Order_By>>;
  where?: InputMaybe<FireboaCashOutPreferredMethods_Bool_Exp>;
};


export type Subscription_RootFireboaCashOutRequestArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFireboaCashOutRequestsArgs = {
  distinct_on?: InputMaybe<Array<FireboaCashOutRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaCashOutRequests_Order_By>>;
  where?: InputMaybe<FireboaCashOutRequests_Bool_Exp>;
};


export type Subscription_RootFireboaCashOutRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<FireboaCashOutRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaCashOutRequests_Order_By>>;
  where?: InputMaybe<FireboaCashOutRequests_Bool_Exp>;
};


export type Subscription_RootFireboaModuleArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFireboaModulesArgs = {
  distinct_on?: InputMaybe<Array<FireboaModules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaModules_Order_By>>;
  where?: InputMaybe<FireboaModules_Bool_Exp>;
};


export type Subscription_RootFireboaModulesAggregateArgs = {
  distinct_on?: InputMaybe<Array<FireboaModules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaModules_Order_By>>;
  where?: InputMaybe<FireboaModules_Bool_Exp>;
};


export type Subscription_RootFireboaProjectArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFireboaProjectModuleArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFireboaProjectModuleUserArgs = {
  fireboaProjectModuleId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


export type Subscription_RootFireboaProjectUserArgs = {
  fireboaProjectId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


export type Subscription_RootFireboaProjectsArgs = {
  distinct_on?: InputMaybe<Array<FireboaProjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaProjects_Order_By>>;
  where?: InputMaybe<FireboaProjects_Bool_Exp>;
};


export type Subscription_RootFireboaProjectsAggregateArgs = {
  distinct_on?: InputMaybe<Array<FireboaProjects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaProjects_Order_By>>;
  where?: InputMaybe<FireboaProjects_Bool_Exp>;
};


export type Subscription_RootFireboaProjectsModulesArgs = {
  distinct_on?: InputMaybe<Array<FireboaProjectsModules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaProjectsModules_Order_By>>;
  where?: InputMaybe<FireboaProjectsModules_Bool_Exp>;
};


export type Subscription_RootFireboaProjectsModulesAggregateArgs = {
  distinct_on?: InputMaybe<Array<FireboaProjectsModules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaProjectsModules_Order_By>>;
  where?: InputMaybe<FireboaProjectsModules_Bool_Exp>;
};


export type Subscription_RootFireboaProjectsModulesUsersArgs = {
  distinct_on?: InputMaybe<Array<FireboaProjectsModulesUsers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaProjectsModulesUsers_Order_By>>;
  where?: InputMaybe<FireboaProjectsModulesUsers_Bool_Exp>;
};


export type Subscription_RootFireboaProjectsModulesUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<FireboaProjectsModulesUsers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaProjectsModulesUsers_Order_By>>;
  where?: InputMaybe<FireboaProjectsModulesUsers_Bool_Exp>;
};


export type Subscription_RootFireboaProjectsUsersArgs = {
  distinct_on?: InputMaybe<Array<FireboaProjectsUsers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaProjectsUsers_Order_By>>;
  where?: InputMaybe<FireboaProjectsUsers_Bool_Exp>;
};


export type Subscription_RootFireboaProjectsUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<FireboaProjectsUsers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FireboaProjectsUsers_Order_By>>;
  where?: InputMaybe<FireboaProjectsUsers_Bool_Exp>;
};


export type Subscription_RootFraudStatusEnumArgs = {
  fraudStatus: Scalars['String'];
};


export type Subscription_RootFraudStatusEnumAggregateArgs = {
  distinct_on?: InputMaybe<Array<FraudStatusEnum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FraudStatusEnum_Order_By>>;
  where?: InputMaybe<FraudStatusEnum_Bool_Exp>;
};


export type Subscription_RootFraudStatusEnumsArgs = {
  distinct_on?: InputMaybe<Array<FraudStatusEnum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FraudStatusEnum_Order_By>>;
  where?: InputMaybe<FraudStatusEnum_Bool_Exp>;
};


export type Subscription_RootGenderArgs = {
  distinct_on?: InputMaybe<Array<Gender_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gender_Order_By>>;
  where?: InputMaybe<Gender_Bool_Exp>;
};


export type Subscription_RootGender_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gender_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gender_Order_By>>;
  where?: InputMaybe<Gender_Bool_Exp>;
};


export type Subscription_RootGender_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootGender_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Gender_Stream_Cursor_Input>>;
  where?: InputMaybe<Gender_Bool_Exp>;
};


export type Subscription_RootHaveLabeledDataTypeArgs = {
  value: Scalars['String'];
};


export type Subscription_RootHaveLabeledDataTypesArgs = {
  distinct_on?: InputMaybe<Array<HaveLabeledDataTypesEnum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<HaveLabeledDataTypesEnum_Order_By>>;
  where?: InputMaybe<HaveLabeledDataTypesEnum_Bool_Exp>;
};


export type Subscription_RootHaveLabeledDataTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<HaveLabeledDataTypesEnum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<HaveLabeledDataTypesEnum_Order_By>>;
  where?: InputMaybe<HaveLabeledDataTypesEnum_Bool_Exp>;
};


export type Subscription_RootHaveLabeledDataTypesEnum_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<HaveLabeledDataTypesEnum_Stream_Cursor_Input>>;
  where?: InputMaybe<HaveLabeledDataTypesEnum_Bool_Exp>;
};


export type Subscription_RootIdentitiesLegalIdTypeEnumArgs = {
  value: Scalars['String'];
};


export type Subscription_RootIdentitiesLegalIdTypeEnumsArgs = {
  distinct_on?: InputMaybe<Array<IdentitiesLegalIdTypeEnums_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<IdentitiesLegalIdTypeEnums_Order_By>>;
  where?: InputMaybe<IdentitiesLegalIdTypeEnums_Bool_Exp>;
};


export type Subscription_RootIdentitiesLegalIdTypeEnumsAggregateArgs = {
  distinct_on?: InputMaybe<Array<IdentitiesLegalIdTypeEnums_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<IdentitiesLegalIdTypeEnums_Order_By>>;
  where?: InputMaybe<IdentitiesLegalIdTypeEnums_Bool_Exp>;
};


export type Subscription_RootImageArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootImagesArgs = {
  distinct_on?: InputMaybe<Array<Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Images_Order_By>>;
  where?: InputMaybe<Images_Bool_Exp>;
};


export type Subscription_RootImagesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Images_Order_By>>;
  where?: InputMaybe<Images_Bool_Exp>;
};


export type Subscription_RootIndustry_TypesArgs = {
  distinct_on?: InputMaybe<Array<Industry_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Industry_Types_Order_By>>;
  where?: InputMaybe<Industry_Types_Bool_Exp>;
};


export type Subscription_RootIndustry_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Industry_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Industry_Types_Order_By>>;
  where?: InputMaybe<Industry_Types_Bool_Exp>;
};


export type Subscription_RootIndustry_Types_By_PkArgs = {
  name: Scalars['String'];
};


export type Subscription_RootIndustry_Types_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Industry_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Industry_Types_Bool_Exp>;
};


export type Subscription_RootLabellingPlatformArgs = {
  value: Scalars['String'];
};


export type Subscription_RootLabellingPlatformsArgs = {
  distinct_on?: InputMaybe<Array<LabellingPlatforms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LabellingPlatforms_Order_By>>;
  where?: InputMaybe<LabellingPlatforms_Bool_Exp>;
};


export type Subscription_RootLabellingPlatformsAggregateArgs = {
  distinct_on?: InputMaybe<Array<LabellingPlatforms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LabellingPlatforms_Order_By>>;
  where?: InputMaybe<LabellingPlatforms_Bool_Exp>;
};


export type Subscription_RootLabellingPlatforms_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<LabellingPlatforms_Stream_Cursor_Input>>;
  where?: InputMaybe<LabellingPlatforms_Bool_Exp>;
};


export type Subscription_RootManagersArgs = {
  distinct_on?: InputMaybe<Array<Managers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Managers_Order_By>>;
  where?: InputMaybe<Managers_Bool_Exp>;
};


export type Subscription_RootManagers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Managers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Managers_Order_By>>;
  where?: InputMaybe<Managers_Bool_Exp>;
};


export type Subscription_RootManagers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootManagers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Managers_Stream_Cursor_Input>>;
  where?: InputMaybe<Managers_Bool_Exp>;
};


export type Subscription_RootMarketplaceProjectArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMarketplaceProjectsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Marketplace_Projects_Order_By>>;
  where?: InputMaybe<Marketplace_Projects_Bool_Exp>;
};


export type Subscription_RootMarketplace_Projects_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Marketplace_Projects_Stream_Cursor_Input>>;
  where?: InputMaybe<Marketplace_Projects_Bool_Exp>;
};


export type Subscription_RootMartetplaceProjectsArgs = {
  distinct_on?: InputMaybe<Array<Marketplace_Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Marketplace_Projects_Order_By>>;
  where?: InputMaybe<Marketplace_Projects_Bool_Exp>;
};


export type Subscription_RootModuleArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootModuleInstructionArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootModuleInstructionsArgs = {
  distinct_on?: InputMaybe<Array<ModuleInstructions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ModuleInstructions_Order_By>>;
  where?: InputMaybe<ModuleInstructions_Bool_Exp>;
};


export type Subscription_RootModuleInstructionsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ModuleInstructions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ModuleInstructions_Order_By>>;
  where?: InputMaybe<ModuleInstructions_Bool_Exp>;
};


export type Subscription_RootModuleMarketplaceProjectArgs = {
  moduleId: Scalars['uuid'];
  projectId: Scalars['uuid'];
};


export type Subscription_RootModulesArgs = {
  distinct_on?: InputMaybe<Array<Modules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Modules_Order_By>>;
  where?: InputMaybe<Modules_Bool_Exp>;
};


export type Subscription_RootModulesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Modules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Modules_Order_By>>;
  where?: InputMaybe<Modules_Bool_Exp>;
};


export type Subscription_RootModulesMarketplaceProjectsArgs = {
  distinct_on?: InputMaybe<Array<Modules_Marketplace_Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Modules_Marketplace_Projects_Order_By>>;
  where?: InputMaybe<Modules_Marketplace_Projects_Bool_Exp>;
};


export type Subscription_RootModulesMarketplaceProjectsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Modules_Marketplace_Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Modules_Marketplace_Projects_Order_By>>;
  where?: InputMaybe<Modules_Marketplace_Projects_Bool_Exp>;
};


export type Subscription_RootModules_Marketplace_Projects_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Modules_Marketplace_Projects_Stream_Cursor_Input>>;
  where?: InputMaybe<Modules_Marketplace_Projects_Bool_Exp>;
};


export type Subscription_RootOrganizationArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOrganizationCustomerArgs = {
  customerId: Scalars['uuid'];
  organizationId: Scalars['uuid'];
};


export type Subscription_RootOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Subscription_RootOrganizationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Subscription_RootOrganizationsCustomersArgs = {
  distinct_on?: InputMaybe<Array<OrganizationsCustomers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrganizationsCustomers_Order_By>>;
  where?: InputMaybe<OrganizationsCustomers_Bool_Exp>;
};


export type Subscription_RootOrganizationsCustomersAggregateArgs = {
  distinct_on?: InputMaybe<Array<OrganizationsCustomers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OrganizationsCustomers_Order_By>>;
  where?: InputMaybe<OrganizationsCustomers_Bool_Exp>;
};


export type Subscription_RootOrganizationsCustomers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<OrganizationsCustomers_Stream_Cursor_Input>>;
  where?: InputMaybe<OrganizationsCustomers_Bool_Exp>;
};


export type Subscription_RootOrganizations_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Organizations_Stream_Cursor_Input>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Subscription_RootPricingPlanArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPricingPlansArgs = {
  distinct_on?: InputMaybe<Array<PricingPlans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PricingPlans_Order_By>>;
  where?: InputMaybe<PricingPlans_Bool_Exp>;
};


export type Subscription_RootPricingPlansAggregateArgs = {
  distinct_on?: InputMaybe<Array<PricingPlans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PricingPlans_Order_By>>;
  where?: InputMaybe<PricingPlans_Bool_Exp>;
};


export type Subscription_RootPricingPlans_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<PricingPlans_Stream_Cursor_Input>>;
  where?: InputMaybe<PricingPlans_Bool_Exp>;
};


export type Subscription_RootProjectStatusArgs = {
  value: Scalars['String'];
};


export type Subscription_RootProjectStatusesArgs = {
  distinct_on?: InputMaybe<Array<ProjectStatuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectStatuses_Order_By>>;
  where?: InputMaybe<ProjectStatuses_Bool_Exp>;
};


export type Subscription_RootProjectStatusesAggregateArgs = {
  distinct_on?: InputMaybe<Array<ProjectStatuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectStatuses_Order_By>>;
  where?: InputMaybe<ProjectStatuses_Bool_Exp>;
};


export type Subscription_RootSessionArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Subscription_RootSessionsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Subscription_RootSpotifyStateTypeArgs = {
  name: Scalars['String'];
};


export type Subscription_RootSpotifyStateTypesArgs = {
  distinct_on?: InputMaybe<Array<SpotifyStateTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SpotifyStateTypes_Order_By>>;
  where?: InputMaybe<SpotifyStateTypes_Bool_Exp>;
};


export type Subscription_RootSpotifyStateTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<SpotifyStateTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SpotifyStateTypes_Order_By>>;
  where?: InputMaybe<SpotifyStateTypes_Bool_Exp>;
};


export type Subscription_RootSpotifyStateTypes_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<SpotifyStateTypes_Stream_Cursor_Input>>;
  where?: InputMaybe<SpotifyStateTypes_Bool_Exp>;
};


export type Subscription_RootStrapiArgs = {
  distinct_on?: InputMaybe<Array<Strapi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Strapi_Order_By>>;
  where?: InputMaybe<Strapi_Bool_Exp>;
};


export type Subscription_RootStrapi_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Strapi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Strapi_Order_By>>;
  where?: InputMaybe<Strapi_Bool_Exp>;
};


export type Subscription_RootStrapi_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootStrapi_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Strapi_Stream_Cursor_Input>>;
  where?: InputMaybe<Strapi_Bool_Exp>;
};


export type Subscription_RootStripeIdentitySessionErrorCodeEnumArgs = {
  value: Scalars['String'];
};


export type Subscription_RootStripeIdentitySessionErrorCodeEnumsArgs = {
  distinct_on?: InputMaybe<Array<StripeIdentitySessionErrorCodeEnums_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StripeIdentitySessionErrorCodeEnums_Order_By>>;
  where?: InputMaybe<StripeIdentitySessionErrorCodeEnums_Bool_Exp>;
};


export type Subscription_RootStripeIdentitySessionErrorCodeEnumsAggregateArgs = {
  distinct_on?: InputMaybe<Array<StripeIdentitySessionErrorCodeEnums_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StripeIdentitySessionErrorCodeEnums_Order_By>>;
  where?: InputMaybe<StripeIdentitySessionErrorCodeEnums_Bool_Exp>;
};


export type Subscription_RootStripeIdentitySessionStatusEnumArgs = {
  value: Scalars['String'];
};


export type Subscription_RootStripeIdentitySessionStatusEnumsArgs = {
  distinct_on?: InputMaybe<Array<StripeIdentitySessionStatusEnums_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StripeIdentitySessionStatusEnums_Order_By>>;
  where?: InputMaybe<StripeIdentitySessionStatusEnums_Bool_Exp>;
};


export type Subscription_RootStripeIdentitySessionStatusEnumsAggregateArgs = {
  distinct_on?: InputMaybe<Array<StripeIdentitySessionStatusEnums_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StripeIdentitySessionStatusEnums_Order_By>>;
  where?: InputMaybe<StripeIdentitySessionStatusEnums_Bool_Exp>;
};


export type Subscription_RootStripeIdentitySessionTypeEnumArgs = {
  value: Scalars['String'];
};


export type Subscription_RootStripeIdentitySessionTypeEnumsArgs = {
  distinct_on?: InputMaybe<Array<StripeIdentitySessionTypeEnums_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StripeIdentitySessionTypeEnums_Order_By>>;
  where?: InputMaybe<StripeIdentitySessionTypeEnums_Bool_Exp>;
};


export type Subscription_RootStripeIdentitySessionTypeEnumsAggregateArgs = {
  distinct_on?: InputMaybe<Array<StripeIdentitySessionTypeEnums_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StripeIdentitySessionTypeEnums_Order_By>>;
  where?: InputMaybe<StripeIdentitySessionTypeEnums_Bool_Exp>;
};


export type Subscription_RootStripeVerificationSessionArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootStripeVerificationSessionsArgs = {
  distinct_on?: InputMaybe<Array<StripeVerificationSessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StripeVerificationSessions_Order_By>>;
  where?: InputMaybe<StripeVerificationSessions_Bool_Exp>;
};


export type Subscription_RootStripeVerificationSessionsAggregateArgs = {
  distinct_on?: InputMaybe<Array<StripeVerificationSessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StripeVerificationSessions_Order_By>>;
  where?: InputMaybe<StripeVerificationSessions_Bool_Exp>;
};


export type Subscription_RootSurveyArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSurveyResponseArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSurveyResponsesArgs = {
  distinct_on?: InputMaybe<Array<SurveyResponses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SurveyResponses_Order_By>>;
  where?: InputMaybe<SurveyResponses_Bool_Exp>;
};


export type Subscription_RootSurveyResponsesAggregateArgs = {
  distinct_on?: InputMaybe<Array<SurveyResponses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<SurveyResponses_Order_By>>;
  where?: InputMaybe<SurveyResponses_Bool_Exp>;
};


export type Subscription_RootSurveysAggregateArgs = {
  distinct_on?: InputMaybe<Array<Surveys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Surveys_Order_By>>;
  where?: InputMaybe<Surveys_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserIdentitiesArgs = {
  distinct_on?: InputMaybe<Array<UserIdentities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserIdentities_Order_By>>;
  where?: InputMaybe<UserIdentities_Bool_Exp>;
};


export type Subscription_RootUserIdentitiesAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserIdentities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserIdentities_Order_By>>;
  where?: InputMaybe<UserIdentities_Bool_Exp>;
};


export type Subscription_RootUserIdentityArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserImageArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserModuleArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserModuleStatusArgs = {
  value: Scalars['String'];
};


export type Subscription_RootUserModuleStatusAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserModuleStatus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserModuleStatus_Order_By>>;
  where?: InputMaybe<UserModuleStatus_Bool_Exp>;
};


export type Subscription_RootUserModuleStatusesArgs = {
  distinct_on?: InputMaybe<Array<UserModuleStatus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserModuleStatus_Order_By>>;
  where?: InputMaybe<UserModuleStatus_Bool_Exp>;
};


export type Subscription_RootUserProjectArgs = {
  projectId: Scalars['uuid'];
  userId: Scalars['uuid'];
};


export type Subscription_RootUserReferralArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserReferralsArgs = {
  distinct_on?: InputMaybe<Array<UserReferrals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserReferrals_Order_By>>;
  where?: InputMaybe<UserReferrals_Bool_Exp>;
};


export type Subscription_RootUserReferralsAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserReferrals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserReferrals_Order_By>>;
  where?: InputMaybe<UserReferrals_Bool_Exp>;
};


export type Subscription_RootUserSupplementaryArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_Ip_AddressesArgs = {
  distinct_on?: InputMaybe<Array<User_Ip_Addresses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Ip_Addresses_Order_By>>;
  where?: InputMaybe<User_Ip_Addresses_Bool_Exp>;
};


export type Subscription_RootUser_Ip_Addresses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Ip_Addresses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Ip_Addresses_Order_By>>;
  where?: InputMaybe<User_Ip_Addresses_Bool_Exp>;
};


export type Subscription_RootUser_Ip_Addresses_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_Ip_Addresses_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Ip_Addresses_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Ip_Addresses_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsersImagesArgs = {
  distinct_on?: InputMaybe<Array<UsersImages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersImages_Order_By>>;
  where?: InputMaybe<UsersImages_Bool_Exp>;
};


export type Subscription_RootUsersImagesAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersImages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersImages_Order_By>>;
  where?: InputMaybe<UsersImages_Bool_Exp>;
};


export type Subscription_RootUsersModulesArgs = {
  distinct_on?: InputMaybe<Array<UsersModules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersModules_Order_By>>;
  where?: InputMaybe<UsersModules_Bool_Exp>;
};


export type Subscription_RootUsersModulesAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersModules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersModules_Order_By>>;
  where?: InputMaybe<UsersModules_Bool_Exp>;
};


export type Subscription_RootUsersProjectsArgs = {
  distinct_on?: InputMaybe<Array<Users_Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Projects_Order_By>>;
  where?: InputMaybe<Users_Projects_Bool_Exp>;
};


export type Subscription_RootUsersProjectsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Projects_Order_By>>;
  where?: InputMaybe<Users_Projects_Bool_Exp>;
};


export type Subscription_RootUsersSupplementariesArgs = {
  distinct_on?: InputMaybe<Array<Users_Supplementary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Supplementary_Order_By>>;
  where?: InputMaybe<Users_Supplementary_Bool_Exp>;
};


export type Subscription_RootUsersSupplementariesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Supplementary_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Supplementary_Order_By>>;
  where?: InputMaybe<Users_Supplementary_Bool_Exp>;
};


export type Subscription_RootUsers_Projects_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Projects_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Projects_Bool_Exp>;
};


export type Subscription_RootUsers_Supplementary_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Supplementary_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Supplementary_Bool_Exp>;
};


export type Subscription_RootVisualJudgementModuleArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootVisualJudgementModuleImageArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootVisualJudgementModuleImagesArgs = {
  distinct_on?: InputMaybe<Array<VisualJudgementModuleImages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisualJudgementModuleImages_Order_By>>;
  where?: InputMaybe<VisualJudgementModuleImages_Bool_Exp>;
};


export type Subscription_RootVisualJudgementModuleImagesAggregateArgs = {
  distinct_on?: InputMaybe<Array<VisualJudgementModuleImages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisualJudgementModuleImages_Order_By>>;
  where?: InputMaybe<VisualJudgementModuleImages_Bool_Exp>;
};


export type Subscription_RootVisualJudgementModuleImages_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<VisualJudgementModuleImages_Stream_Cursor_Input>>;
  where?: InputMaybe<VisualJudgementModuleImages_Bool_Exp>;
};


export type Subscription_RootVisualJudgementModuleResponseArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootVisualJudgementModuleResponsesArgs = {
  distinct_on?: InputMaybe<Array<VisualJudgementModuleResponses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisualJudgementModuleResponses_Order_By>>;
  where?: InputMaybe<VisualJudgementModuleResponses_Bool_Exp>;
};


export type Subscription_RootVisualJudgementModuleResponsesAggregateArgs = {
  distinct_on?: InputMaybe<Array<VisualJudgementModuleResponses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisualJudgementModuleResponses_Order_By>>;
  where?: InputMaybe<VisualJudgementModuleResponses_Bool_Exp>;
};


export type Subscription_RootVisualJudgementModulesArgs = {
  distinct_on?: InputMaybe<Array<VisualJudgementModules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisualJudgementModules_Order_By>>;
  where?: InputMaybe<VisualJudgementModules_Bool_Exp>;
};


export type Subscription_RootVisualJudgementModulesAggregateArgs = {
  distinct_on?: InputMaybe<Array<VisualJudgementModules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisualJudgementModules_Order_By>>;
  where?: InputMaybe<VisualJudgementModules_Bool_Exp>;
};


export type Subscription_RootVisualJudgementModules_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<VisualJudgementModules_Stream_Cursor_Input>>;
  where?: InputMaybe<VisualJudgementModules_Bool_Exp>;
};


export type Subscription_RootWalletArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootWalletsArgs = {
  distinct_on?: InputMaybe<Array<Wallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallets_Order_By>>;
  where?: InputMaybe<Wallets_Bool_Exp>;
};


export type Subscription_RootWalletsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Wallets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wallets_Order_By>>;
  where?: InputMaybe<Wallets_Bool_Exp>;
};


export type Subscription_RootWorkerArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootWorkerSpotifyArgs = {
  workerId: Scalars['uuid'];
};


export type Subscription_RootWorkersArgs = {
  distinct_on?: InputMaybe<Array<Workers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workers_Order_By>>;
  where?: InputMaybe<Workers_Bool_Exp>;
};


export type Subscription_RootWorkersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Workers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workers_Order_By>>;
  where?: InputMaybe<Workers_Bool_Exp>;
};


export type Subscription_RootWorkersSpotifyArgs = {
  distinct_on?: InputMaybe<Array<WorkersSpotify_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkersSpotify_Order_By>>;
  where?: InputMaybe<WorkersSpotify_Bool_Exp>;
};


export type Subscription_RootWorkersSpotifyAggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkersSpotify_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkersSpotify_Order_By>>;
  where?: InputMaybe<WorkersSpotify_Bool_Exp>;
};


export type Subscription_RootWorkersSpotify_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<WorkersSpotify_Stream_Cursor_Input>>;
  where?: InputMaybe<WorkersSpotify_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user_ip_addresses" */
export type User_Ip_Addresses = {
  __typename?: 'user_ip_addresses';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  ip_address: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "user_ip_addresses" */
export type User_Ip_Addresses_Aggregate = {
  __typename?: 'user_ip_addresses_aggregate';
  aggregate?: Maybe<User_Ip_Addresses_Aggregate_Fields>;
  nodes: Array<User_Ip_Addresses>;
};

/** aggregate fields of "user_ip_addresses" */
export type User_Ip_Addresses_Aggregate_Fields = {
  __typename?: 'user_ip_addresses_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Ip_Addresses_Max_Fields>;
  min?: Maybe<User_Ip_Addresses_Min_Fields>;
};


/** aggregate fields of "user_ip_addresses" */
export type User_Ip_Addresses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Ip_Addresses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_ip_addresses". All fields are combined with a logical 'AND'. */
export type User_Ip_Addresses_Bool_Exp = {
  _and?: InputMaybe<Array<User_Ip_Addresses_Bool_Exp>>;
  _not?: InputMaybe<User_Ip_Addresses_Bool_Exp>;
  _or?: InputMaybe<Array<User_Ip_Addresses_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  ip_address?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_ip_addresses" */
export enum User_Ip_Addresses_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserIpAddressesPkey = 'user_ip_addresses_pkey',
  /** unique or primary key constraint on columns "user_id", "ip_address" */
  UserIpAddressesUserIdIpAddressKey = 'user_ip_addresses_user_id_ip_address_key'
}

/** input type for inserting data into table "user_ip_addresses" */
export type User_Ip_Addresses_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  ip_address?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Ip_Addresses_Max_Fields = {
  __typename?: 'user_ip_addresses_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  ip_address?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type User_Ip_Addresses_Min_Fields = {
  __typename?: 'user_ip_addresses_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  ip_address?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user_ip_addresses" */
export type User_Ip_Addresses_Mutation_Response = {
  __typename?: 'user_ip_addresses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Ip_Addresses>;
};

/** on_conflict condition type for table "user_ip_addresses" */
export type User_Ip_Addresses_On_Conflict = {
  constraint: User_Ip_Addresses_Constraint;
  update_columns?: Array<User_Ip_Addresses_Update_Column>;
  where?: InputMaybe<User_Ip_Addresses_Bool_Exp>;
};

/** Ordering options when selecting data from "user_ip_addresses". */
export type User_Ip_Addresses_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ip_address?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_ip_addresses */
export type User_Ip_Addresses_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user_ip_addresses" */
export enum User_Ip_Addresses_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IpAddress = 'ip_address',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_ip_addresses" */
export type User_Ip_Addresses_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  ip_address?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "user_ip_addresses" */
export type User_Ip_Addresses_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Ip_Addresses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Ip_Addresses_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  ip_address?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "user_ip_addresses" */
export enum User_Ip_Addresses_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IpAddress = 'ip_address',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type User_Ip_Addresses_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Ip_Addresses_Set_Input>;
  where: User_Ip_Addresses_Bool_Exp;
};

/** columns and relationships of "users_projects" */
export type Users_Projects = {
  __typename?: 'users_projects';
  /** An object relationship */
  marketplaceProject: Marketplace_Projects;
  projectId: Scalars['uuid'];
  status: Scalars['String'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "users_projects" */
export type Users_Projects_Aggregate = {
  __typename?: 'users_projects_aggregate';
  aggregate?: Maybe<Users_Projects_Aggregate_Fields>;
  nodes: Array<Users_Projects>;
};

/** aggregate fields of "users_projects" */
export type Users_Projects_Aggregate_Fields = {
  __typename?: 'users_projects_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Projects_Max_Fields>;
  min?: Maybe<Users_Projects_Min_Fields>;
};


/** aggregate fields of "users_projects" */
export type Users_Projects_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Projects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users_projects" */
export type Users_Projects_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Projects_Max_Order_By>;
  min?: InputMaybe<Users_Projects_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users_projects" */
export type Users_Projects_Arr_Rel_Insert_Input = {
  data: Array<Users_Projects_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_Projects_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users_projects". All fields are combined with a logical 'AND'. */
export type Users_Projects_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Projects_Bool_Exp>>;
  _not?: InputMaybe<Users_Projects_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Projects_Bool_Exp>>;
  marketplaceProject?: InputMaybe<Marketplace_Projects_Bool_Exp>;
  projectId?: InputMaybe<Uuid_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "users_projects" */
export enum Users_Projects_Constraint {
  /** unique or primary key constraint on columns "project_id", "user_id" */
  UsersProjectsPkey = 'users_projects_pkey'
}

/** input type for inserting data into table "users_projects" */
export type Users_Projects_Insert_Input = {
  marketplaceProject?: InputMaybe<Marketplace_Projects_Obj_Rel_Insert_Input>;
  projectId?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Users_Projects_Max_Fields = {
  __typename?: 'users_projects_max_fields';
  projectId?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "users_projects" */
export type Users_Projects_Max_Order_By = {
  projectId?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Projects_Min_Fields = {
  __typename?: 'users_projects_min_fields';
  projectId?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "users_projects" */
export type Users_Projects_Min_Order_By = {
  projectId?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users_projects" */
export type Users_Projects_Mutation_Response = {
  __typename?: 'users_projects_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users_Projects>;
};

/** on_conflict condition type for table "users_projects" */
export type Users_Projects_On_Conflict = {
  constraint: Users_Projects_Constraint;
  update_columns?: Array<Users_Projects_Update_Column>;
  where?: InputMaybe<Users_Projects_Bool_Exp>;
};

/** Ordering options when selecting data from "users_projects". */
export type Users_Projects_Order_By = {
  marketplaceProject?: InputMaybe<Marketplace_Projects_Order_By>;
  projectId?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users_projects */
export type Users_Projects_Pk_Columns_Input = {
  projectId: Scalars['uuid'];
  userId: Scalars['uuid'];
};

/** select columns of table "users_projects" */
export enum Users_Projects_Select_Column {
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  Status = 'status',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "users_projects" */
export type Users_Projects_Set_Input = {
  projectId?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "users_projects" */
export type Users_Projects_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Projects_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Projects_Stream_Cursor_Value_Input = {
  projectId?: InputMaybe<Scalars['uuid']>;
  status?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "users_projects" */
export enum Users_Projects_Update_Column {
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  Status = 'status',
  /** column name */
  UserId = 'userId'
}

export type Users_Projects_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Projects_Set_Input>;
  where: Users_Projects_Bool_Exp;
};

/** Extra vault-data about a user */
export type Users_Supplementary = {
  __typename?: 'users_supplementary';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  publicKey?: Maybe<Scalars['String']>;
  socialLoginMethod?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
  userSecret?: Maybe<Scalars['String']>;
  walletAddress?: Maybe<Scalars['String']>;
  walletChain?: Maybe<Scalars['String']>;
  walletType?: Maybe<Scalars['String']>;
};

/** aggregated selection of "users_supplementary" */
export type Users_Supplementary_Aggregate = {
  __typename?: 'users_supplementary_aggregate';
  aggregate?: Maybe<Users_Supplementary_Aggregate_Fields>;
  nodes: Array<Users_Supplementary>;
};

/** aggregate fields of "users_supplementary" */
export type Users_Supplementary_Aggregate_Fields = {
  __typename?: 'users_supplementary_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Supplementary_Max_Fields>;
  min?: Maybe<Users_Supplementary_Min_Fields>;
};


/** aggregate fields of "users_supplementary" */
export type Users_Supplementary_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Supplementary_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users_supplementary". All fields are combined with a logical 'AND'. */
export type Users_Supplementary_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Supplementary_Bool_Exp>>;
  _not?: InputMaybe<Users_Supplementary_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Supplementary_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  publicKey?: InputMaybe<String_Comparison_Exp>;
  socialLoginMethod?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
  userSecret?: InputMaybe<String_Comparison_Exp>;
  walletAddress?: InputMaybe<String_Comparison_Exp>;
  walletChain?: InputMaybe<String_Comparison_Exp>;
  walletType?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users_supplementary" */
export enum Users_Supplementary_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersSupplementaryPkey = 'users_supplementary_pkey',
  /** unique or primary key constraint on columns "user_id" */
  UsersSupplementaryUserIdKey = 'users_supplementary_user_id_key'
}

/** input type for inserting data into table "users_supplementary" */
export type Users_Supplementary_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  publicKey?: InputMaybe<Scalars['String']>;
  socialLoginMethod?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
  userSecret?: InputMaybe<Scalars['String']>;
  walletAddress?: InputMaybe<Scalars['String']>;
  walletChain?: InputMaybe<Scalars['String']>;
  walletType?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Supplementary_Max_Fields = {
  __typename?: 'users_supplementary_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  publicKey?: Maybe<Scalars['String']>;
  socialLoginMethod?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  userSecret?: Maybe<Scalars['String']>;
  walletAddress?: Maybe<Scalars['String']>;
  walletChain?: Maybe<Scalars['String']>;
  walletType?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Supplementary_Min_Fields = {
  __typename?: 'users_supplementary_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  publicKey?: Maybe<Scalars['String']>;
  socialLoginMethod?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  userSecret?: Maybe<Scalars['String']>;
  walletAddress?: Maybe<Scalars['String']>;
  walletChain?: Maybe<Scalars['String']>;
  walletType?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users_supplementary" */
export type Users_Supplementary_Mutation_Response = {
  __typename?: 'users_supplementary_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users_Supplementary>;
};

/** input type for inserting object relation for remote table "users_supplementary" */
export type Users_Supplementary_Obj_Rel_Insert_Input = {
  data: Users_Supplementary_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_Supplementary_On_Conflict>;
};

/** on_conflict condition type for table "users_supplementary" */
export type Users_Supplementary_On_Conflict = {
  constraint: Users_Supplementary_Constraint;
  update_columns?: Array<Users_Supplementary_Update_Column>;
  where?: InputMaybe<Users_Supplementary_Bool_Exp>;
};

/** Ordering options when selecting data from "users_supplementary". */
export type Users_Supplementary_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  publicKey?: InputMaybe<Order_By>;
  socialLoginMethod?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
  userSecret?: InputMaybe<Order_By>;
  walletAddress?: InputMaybe<Order_By>;
  walletChain?: InputMaybe<Order_By>;
  walletType?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users_supplementary */
export type Users_Supplementary_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users_supplementary" */
export enum Users_Supplementary_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PublicKey = 'publicKey',
  /** column name */
  SocialLoginMethod = 'socialLoginMethod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
  /** column name */
  UserSecret = 'userSecret',
  /** column name */
  WalletAddress = 'walletAddress',
  /** column name */
  WalletChain = 'walletChain',
  /** column name */
  WalletType = 'walletType'
}

/** input type for updating data in table "users_supplementary" */
export type Users_Supplementary_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  publicKey?: InputMaybe<Scalars['String']>;
  socialLoginMethod?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
  userSecret?: InputMaybe<Scalars['String']>;
  walletAddress?: InputMaybe<Scalars['String']>;
  walletChain?: InputMaybe<Scalars['String']>;
  walletType?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "users_supplementary" */
export type Users_Supplementary_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Supplementary_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Supplementary_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  publicKey?: InputMaybe<Scalars['String']>;
  socialLoginMethod?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
  userSecret?: InputMaybe<Scalars['String']>;
  walletAddress?: InputMaybe<Scalars['String']>;
  walletChain?: InputMaybe<Scalars['String']>;
  walletType?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users_supplementary" */
export enum Users_Supplementary_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PublicKey = 'publicKey',
  /** column name */
  SocialLoginMethod = 'socialLoginMethod',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
  /** column name */
  UserSecret = 'userSecret',
  /** column name */
  WalletAddress = 'walletAddress',
  /** column name */
  WalletChain = 'walletChain',
  /** column name */
  WalletType = 'walletType'
}

export type Users_Supplementary_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Supplementary_Set_Input>;
  where: Users_Supplementary_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "visual_judgement_module_images" */
export type VisualJudgementModuleImages = {
  __typename?: 'visualJudgementModuleImages';
  configuration?: Maybe<Scalars['jsonb']>;
  id: Scalars['uuid'];
  /** An object relationship */
  image: Images;
  imageId: Scalars['uuid'];
  isRequired: Scalars['Boolean'];
  /** An object relationship */
  visualJudgementModule: VisualJudgementModules;
  visualJudgementModuleId: Scalars['uuid'];
  /** An array relationship */
  visualJudgementModuleResponses: Array<VisualJudgementModuleResponses>;
  /** An aggregate relationship */
  visualJudgementModuleResponses_aggregate: VisualJudgementModuleResponses_Aggregate;
};


/** columns and relationships of "visual_judgement_module_images" */
export type VisualJudgementModuleImagesConfigurationArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "visual_judgement_module_images" */
export type VisualJudgementModuleImagesVisualJudgementModuleResponsesArgs = {
  distinct_on?: InputMaybe<Array<VisualJudgementModuleResponses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisualJudgementModuleResponses_Order_By>>;
  where?: InputMaybe<VisualJudgementModuleResponses_Bool_Exp>;
};


/** columns and relationships of "visual_judgement_module_images" */
export type VisualJudgementModuleImagesVisualJudgementModuleResponses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<VisualJudgementModuleResponses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisualJudgementModuleResponses_Order_By>>;
  where?: InputMaybe<VisualJudgementModuleResponses_Bool_Exp>;
};

/** aggregated selection of "visual_judgement_module_images" */
export type VisualJudgementModuleImages_Aggregate = {
  __typename?: 'visualJudgementModuleImages_aggregate';
  aggregate?: Maybe<VisualJudgementModuleImages_Aggregate_Fields>;
  nodes: Array<VisualJudgementModuleImages>;
};

/** aggregate fields of "visual_judgement_module_images" */
export type VisualJudgementModuleImages_Aggregate_Fields = {
  __typename?: 'visualJudgementModuleImages_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<VisualJudgementModuleImages_Max_Fields>;
  min?: Maybe<VisualJudgementModuleImages_Min_Fields>;
};


/** aggregate fields of "visual_judgement_module_images" */
export type VisualJudgementModuleImages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<VisualJudgementModuleImages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "visual_judgement_module_images" */
export type VisualJudgementModuleImages_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<VisualJudgementModuleImages_Max_Order_By>;
  min?: InputMaybe<VisualJudgementModuleImages_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type VisualJudgementModuleImages_Append_Input = {
  configuration?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "visual_judgement_module_images" */
export type VisualJudgementModuleImages_Arr_Rel_Insert_Input = {
  data: Array<VisualJudgementModuleImages_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<VisualJudgementModuleImages_On_Conflict>;
};

/** Boolean expression to filter rows from the table "visual_judgement_module_images". All fields are combined with a logical 'AND'. */
export type VisualJudgementModuleImages_Bool_Exp = {
  _and?: InputMaybe<Array<VisualJudgementModuleImages_Bool_Exp>>;
  _not?: InputMaybe<VisualJudgementModuleImages_Bool_Exp>;
  _or?: InputMaybe<Array<VisualJudgementModuleImages_Bool_Exp>>;
  configuration?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<Images_Bool_Exp>;
  imageId?: InputMaybe<Uuid_Comparison_Exp>;
  isRequired?: InputMaybe<Boolean_Comparison_Exp>;
  visualJudgementModule?: InputMaybe<VisualJudgementModules_Bool_Exp>;
  visualJudgementModuleId?: InputMaybe<Uuid_Comparison_Exp>;
  visualJudgementModuleResponses?: InputMaybe<VisualJudgementModuleResponses_Bool_Exp>;
};

/** unique or primary key constraints on table "visual_judgement_module_images" */
export enum VisualJudgementModuleImages_Constraint {
  /** unique or primary key constraint on columns "image_id" */
  VisualJudgementModuleImagesImageIdKey = 'visual_judgement_module_images_image_id_key',
  /** unique or primary key constraint on columns "id" */
  VisualJudgementModuleImagesPkey = 'visual_judgement_module_images_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type VisualJudgementModuleImages_Delete_At_Path_Input = {
  configuration?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type VisualJudgementModuleImages_Delete_Elem_Input = {
  configuration?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type VisualJudgementModuleImages_Delete_Key_Input = {
  configuration?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "visual_judgement_module_images" */
export type VisualJudgementModuleImages_Insert_Input = {
  configuration?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Images_Obj_Rel_Insert_Input>;
  imageId?: InputMaybe<Scalars['uuid']>;
  isRequired?: InputMaybe<Scalars['Boolean']>;
  visualJudgementModule?: InputMaybe<VisualJudgementModules_Obj_Rel_Insert_Input>;
  visualJudgementModuleId?: InputMaybe<Scalars['uuid']>;
  visualJudgementModuleResponses?: InputMaybe<VisualJudgementModuleResponses_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type VisualJudgementModuleImages_Max_Fields = {
  __typename?: 'visualJudgementModuleImages_max_fields';
  id?: Maybe<Scalars['uuid']>;
  imageId?: Maybe<Scalars['uuid']>;
  visualJudgementModuleId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "visual_judgement_module_images" */
export type VisualJudgementModuleImages_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  imageId?: InputMaybe<Order_By>;
  visualJudgementModuleId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type VisualJudgementModuleImages_Min_Fields = {
  __typename?: 'visualJudgementModuleImages_min_fields';
  id?: Maybe<Scalars['uuid']>;
  imageId?: Maybe<Scalars['uuid']>;
  visualJudgementModuleId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "visual_judgement_module_images" */
export type VisualJudgementModuleImages_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  imageId?: InputMaybe<Order_By>;
  visualJudgementModuleId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "visual_judgement_module_images" */
export type VisualJudgementModuleImages_Mutation_Response = {
  __typename?: 'visualJudgementModuleImages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<VisualJudgementModuleImages>;
};

/** input type for inserting object relation for remote table "visual_judgement_module_images" */
export type VisualJudgementModuleImages_Obj_Rel_Insert_Input = {
  data: VisualJudgementModuleImages_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<VisualJudgementModuleImages_On_Conflict>;
};

/** on_conflict condition type for table "visual_judgement_module_images" */
export type VisualJudgementModuleImages_On_Conflict = {
  constraint: VisualJudgementModuleImages_Constraint;
  update_columns?: Array<VisualJudgementModuleImages_Update_Column>;
  where?: InputMaybe<VisualJudgementModuleImages_Bool_Exp>;
};

/** Ordering options when selecting data from "visual_judgement_module_images". */
export type VisualJudgementModuleImages_Order_By = {
  configuration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Images_Order_By>;
  imageId?: InputMaybe<Order_By>;
  isRequired?: InputMaybe<Order_By>;
  visualJudgementModule?: InputMaybe<VisualJudgementModules_Order_By>;
  visualJudgementModuleId?: InputMaybe<Order_By>;
  visualJudgementModuleResponses_aggregate?: InputMaybe<VisualJudgementModuleResponses_Aggregate_Order_By>;
};

/** primary key columns input for table: visual_judgement_module_images */
export type VisualJudgementModuleImages_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type VisualJudgementModuleImages_Prepend_Input = {
  configuration?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "visual_judgement_module_images" */
export enum VisualJudgementModuleImages_Select_Column {
  /** column name */
  Configuration = 'configuration',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'imageId',
  /** column name */
  IsRequired = 'isRequired',
  /** column name */
  VisualJudgementModuleId = 'visualJudgementModuleId'
}

/** input type for updating data in table "visual_judgement_module_images" */
export type VisualJudgementModuleImages_Set_Input = {
  configuration?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  imageId?: InputMaybe<Scalars['uuid']>;
  isRequired?: InputMaybe<Scalars['Boolean']>;
  visualJudgementModuleId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "visualJudgementModuleImages" */
export type VisualJudgementModuleImages_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: VisualJudgementModuleImages_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type VisualJudgementModuleImages_Stream_Cursor_Value_Input = {
  configuration?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  imageId?: InputMaybe<Scalars['uuid']>;
  isRequired?: InputMaybe<Scalars['Boolean']>;
  visualJudgementModuleId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "visual_judgement_module_images" */
export enum VisualJudgementModuleImages_Update_Column {
  /** column name */
  Configuration = 'configuration',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'imageId',
  /** column name */
  IsRequired = 'isRequired',
  /** column name */
  VisualJudgementModuleId = 'visualJudgementModuleId'
}

export type VisualJudgementModuleImages_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<VisualJudgementModuleImages_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<VisualJudgementModuleImages_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<VisualJudgementModuleImages_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<VisualJudgementModuleImages_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<VisualJudgementModuleImages_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<VisualJudgementModuleImages_Set_Input>;
  where: VisualJudgementModuleImages_Bool_Exp;
};

/** columns and relationships of "visual_judgement_modules" */
export type VisualJudgementModules = {
  __typename?: 'visualJudgementModules';
  configuration_schema: Scalars['jsonb'];
  /** An object relationship */
  fireboaProjectModule: FireboaProjectsModules;
  fireboaProjectModuleId: Scalars['uuid'];
  id: Scalars['uuid'];
  instruction: Scalars['String'];
  /** An array relationship */
  visualJudgementModuleImages: Array<VisualJudgementModuleImages>;
  /** An aggregate relationship */
  visualJudgementModuleImages_aggregate: VisualJudgementModuleImages_Aggregate;
};


/** columns and relationships of "visual_judgement_modules" */
export type VisualJudgementModulesConfiguration_SchemaArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "visual_judgement_modules" */
export type VisualJudgementModulesVisualJudgementModuleImagesArgs = {
  distinct_on?: InputMaybe<Array<VisualJudgementModuleImages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisualJudgementModuleImages_Order_By>>;
  where?: InputMaybe<VisualJudgementModuleImages_Bool_Exp>;
};


/** columns and relationships of "visual_judgement_modules" */
export type VisualJudgementModulesVisualJudgementModuleImages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<VisualJudgementModuleImages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VisualJudgementModuleImages_Order_By>>;
  where?: InputMaybe<VisualJudgementModuleImages_Bool_Exp>;
};

/** aggregated selection of "visual_judgement_modules" */
export type VisualJudgementModules_Aggregate = {
  __typename?: 'visualJudgementModules_aggregate';
  aggregate?: Maybe<VisualJudgementModules_Aggregate_Fields>;
  nodes: Array<VisualJudgementModules>;
};

/** aggregate fields of "visual_judgement_modules" */
export type VisualJudgementModules_Aggregate_Fields = {
  __typename?: 'visualJudgementModules_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<VisualJudgementModules_Max_Fields>;
  min?: Maybe<VisualJudgementModules_Min_Fields>;
};


/** aggregate fields of "visual_judgement_modules" */
export type VisualJudgementModules_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<VisualJudgementModules_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "visual_judgement_modules" */
export type VisualJudgementModules_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<VisualJudgementModules_Max_Order_By>;
  min?: InputMaybe<VisualJudgementModules_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type VisualJudgementModules_Append_Input = {
  configuration_schema?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "visual_judgement_modules" */
export type VisualJudgementModules_Arr_Rel_Insert_Input = {
  data: Array<VisualJudgementModules_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<VisualJudgementModules_On_Conflict>;
};

/** Boolean expression to filter rows from the table "visual_judgement_modules". All fields are combined with a logical 'AND'. */
export type VisualJudgementModules_Bool_Exp = {
  _and?: InputMaybe<Array<VisualJudgementModules_Bool_Exp>>;
  _not?: InputMaybe<VisualJudgementModules_Bool_Exp>;
  _or?: InputMaybe<Array<VisualJudgementModules_Bool_Exp>>;
  configuration_schema?: InputMaybe<Jsonb_Comparison_Exp>;
  fireboaProjectModule?: InputMaybe<FireboaProjectsModules_Bool_Exp>;
  fireboaProjectModuleId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  instruction?: InputMaybe<String_Comparison_Exp>;
  visualJudgementModuleImages?: InputMaybe<VisualJudgementModuleImages_Bool_Exp>;
};

/** unique or primary key constraints on table "visual_judgement_modules" */
export enum VisualJudgementModules_Constraint {
  /** unique or primary key constraint on columns "id" */
  VisualJudgementModulesPkey = 'visual_judgement_modules_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type VisualJudgementModules_Delete_At_Path_Input = {
  configuration_schema?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type VisualJudgementModules_Delete_Elem_Input = {
  configuration_schema?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type VisualJudgementModules_Delete_Key_Input = {
  configuration_schema?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "visual_judgement_modules" */
export type VisualJudgementModules_Insert_Input = {
  configuration_schema?: InputMaybe<Scalars['jsonb']>;
  fireboaProjectModule?: InputMaybe<FireboaProjectsModules_Obj_Rel_Insert_Input>;
  fireboaProjectModuleId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  instruction?: InputMaybe<Scalars['String']>;
  visualJudgementModuleImages?: InputMaybe<VisualJudgementModuleImages_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type VisualJudgementModules_Max_Fields = {
  __typename?: 'visualJudgementModules_max_fields';
  fireboaProjectModuleId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  instruction?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "visual_judgement_modules" */
export type VisualJudgementModules_Max_Order_By = {
  fireboaProjectModuleId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  instruction?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type VisualJudgementModules_Min_Fields = {
  __typename?: 'visualJudgementModules_min_fields';
  fireboaProjectModuleId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  instruction?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "visual_judgement_modules" */
export type VisualJudgementModules_Min_Order_By = {
  fireboaProjectModuleId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  instruction?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "visual_judgement_modules" */
export type VisualJudgementModules_Mutation_Response = {
  __typename?: 'visualJudgementModules_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<VisualJudgementModules>;
};

/** input type for inserting object relation for remote table "visual_judgement_modules" */
export type VisualJudgementModules_Obj_Rel_Insert_Input = {
  data: VisualJudgementModules_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<VisualJudgementModules_On_Conflict>;
};

/** on_conflict condition type for table "visual_judgement_modules" */
export type VisualJudgementModules_On_Conflict = {
  constraint: VisualJudgementModules_Constraint;
  update_columns?: Array<VisualJudgementModules_Update_Column>;
  where?: InputMaybe<VisualJudgementModules_Bool_Exp>;
};

/** Ordering options when selecting data from "visual_judgement_modules". */
export type VisualJudgementModules_Order_By = {
  configuration_schema?: InputMaybe<Order_By>;
  fireboaProjectModule?: InputMaybe<FireboaProjectsModules_Order_By>;
  fireboaProjectModuleId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  instruction?: InputMaybe<Order_By>;
  visualJudgementModuleImages_aggregate?: InputMaybe<VisualJudgementModuleImages_Aggregate_Order_By>;
};

/** primary key columns input for table: visual_judgement_modules */
export type VisualJudgementModules_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type VisualJudgementModules_Prepend_Input = {
  configuration_schema?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "visual_judgement_modules" */
export enum VisualJudgementModules_Select_Column {
  /** column name */
  ConfigurationSchema = 'configuration_schema',
  /** column name */
  FireboaProjectModuleId = 'fireboaProjectModuleId',
  /** column name */
  Id = 'id',
  /** column name */
  Instruction = 'instruction'
}

/** input type for updating data in table "visual_judgement_modules" */
export type VisualJudgementModules_Set_Input = {
  configuration_schema?: InputMaybe<Scalars['jsonb']>;
  fireboaProjectModuleId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  instruction?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "visualJudgementModules" */
export type VisualJudgementModules_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: VisualJudgementModules_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type VisualJudgementModules_Stream_Cursor_Value_Input = {
  configuration_schema?: InputMaybe<Scalars['jsonb']>;
  fireboaProjectModuleId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  instruction?: InputMaybe<Scalars['String']>;
};

/** update columns of table "visual_judgement_modules" */
export enum VisualJudgementModules_Update_Column {
  /** column name */
  ConfigurationSchema = 'configuration_schema',
  /** column name */
  FireboaProjectModuleId = 'fireboaProjectModuleId',
  /** column name */
  Id = 'id',
  /** column name */
  Instruction = 'instruction'
}

export type VisualJudgementModules_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<VisualJudgementModules_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<VisualJudgementModules_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<VisualJudgementModules_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<VisualJudgementModules_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<VisualJudgementModules_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<VisualJudgementModules_Set_Input>;
  where: VisualJudgementModules_Bool_Exp;
};

/** columns and relationships of "workers_spotify" */
export type WorkersSpotify = {
  __typename?: 'workersSpotify';
  spotifyClientId?: Maybe<Scalars['String']>;
  spotifyCodeChallenge?: Maybe<Scalars['String']>;
  spotifyId?: Maybe<Scalars['String']>;
  spotifyRefreshToken?: Maybe<Scalars['String']>;
  spotifyVerifierCode?: Maybe<Scalars['String']>;
  status: SpotifyStateTypes_Enum;
  /** An object relationship */
  worker: Workers;
  workerId: Scalars['uuid'];
};

/** aggregated selection of "workers_spotify" */
export type WorkersSpotify_Aggregate = {
  __typename?: 'workersSpotify_aggregate';
  aggregate?: Maybe<WorkersSpotify_Aggregate_Fields>;
  nodes: Array<WorkersSpotify>;
};

/** aggregate fields of "workers_spotify" */
export type WorkersSpotify_Aggregate_Fields = {
  __typename?: 'workersSpotify_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<WorkersSpotify_Max_Fields>;
  min?: Maybe<WorkersSpotify_Min_Fields>;
};


/** aggregate fields of "workers_spotify" */
export type WorkersSpotify_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<WorkersSpotify_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "workers_spotify". All fields are combined with a logical 'AND'. */
export type WorkersSpotify_Bool_Exp = {
  _and?: InputMaybe<Array<WorkersSpotify_Bool_Exp>>;
  _not?: InputMaybe<WorkersSpotify_Bool_Exp>;
  _or?: InputMaybe<Array<WorkersSpotify_Bool_Exp>>;
  spotifyClientId?: InputMaybe<String_Comparison_Exp>;
  spotifyCodeChallenge?: InputMaybe<String_Comparison_Exp>;
  spotifyId?: InputMaybe<String_Comparison_Exp>;
  spotifyRefreshToken?: InputMaybe<String_Comparison_Exp>;
  spotifyVerifierCode?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<SpotifyStateTypes_Enum_Comparison_Exp>;
  worker?: InputMaybe<Workers_Bool_Exp>;
  workerId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "workers_spotify" */
export enum WorkersSpotify_Constraint {
  /** unique or primary key constraint on columns "worker_id" */
  WorkersSpotifyPkey = 'workers_spotify_pkey',
  /** unique or primary key constraint on columns "spotify_id" */
  WorkersSpotifySpotifyIdKey = 'workers_spotify_spotify_id_key'
}

/** input type for inserting data into table "workers_spotify" */
export type WorkersSpotify_Insert_Input = {
  spotifyClientId?: InputMaybe<Scalars['String']>;
  spotifyCodeChallenge?: InputMaybe<Scalars['String']>;
  spotifyId?: InputMaybe<Scalars['String']>;
  spotifyRefreshToken?: InputMaybe<Scalars['String']>;
  spotifyVerifierCode?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<SpotifyStateTypes_Enum>;
  worker?: InputMaybe<Workers_Obj_Rel_Insert_Input>;
  workerId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type WorkersSpotify_Max_Fields = {
  __typename?: 'workersSpotify_max_fields';
  spotifyClientId?: Maybe<Scalars['String']>;
  spotifyCodeChallenge?: Maybe<Scalars['String']>;
  spotifyId?: Maybe<Scalars['String']>;
  spotifyRefreshToken?: Maybe<Scalars['String']>;
  spotifyVerifierCode?: Maybe<Scalars['String']>;
  workerId?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type WorkersSpotify_Min_Fields = {
  __typename?: 'workersSpotify_min_fields';
  spotifyClientId?: Maybe<Scalars['String']>;
  spotifyCodeChallenge?: Maybe<Scalars['String']>;
  spotifyId?: Maybe<Scalars['String']>;
  spotifyRefreshToken?: Maybe<Scalars['String']>;
  spotifyVerifierCode?: Maybe<Scalars['String']>;
  workerId?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "workers_spotify" */
export type WorkersSpotify_Mutation_Response = {
  __typename?: 'workersSpotify_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<WorkersSpotify>;
};

/** input type for inserting object relation for remote table "workers_spotify" */
export type WorkersSpotify_Obj_Rel_Insert_Input = {
  data: WorkersSpotify_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<WorkersSpotify_On_Conflict>;
};

/** on_conflict condition type for table "workers_spotify" */
export type WorkersSpotify_On_Conflict = {
  constraint: WorkersSpotify_Constraint;
  update_columns?: Array<WorkersSpotify_Update_Column>;
  where?: InputMaybe<WorkersSpotify_Bool_Exp>;
};

/** Ordering options when selecting data from "workers_spotify". */
export type WorkersSpotify_Order_By = {
  spotifyClientId?: InputMaybe<Order_By>;
  spotifyCodeChallenge?: InputMaybe<Order_By>;
  spotifyId?: InputMaybe<Order_By>;
  spotifyRefreshToken?: InputMaybe<Order_By>;
  spotifyVerifierCode?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  worker?: InputMaybe<Workers_Order_By>;
  workerId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: workers_spotify */
export type WorkersSpotify_Pk_Columns_Input = {
  workerId: Scalars['uuid'];
};

/** select columns of table "workers_spotify" */
export enum WorkersSpotify_Select_Column {
  /** column name */
  SpotifyClientId = 'spotifyClientId',
  /** column name */
  SpotifyCodeChallenge = 'spotifyCodeChallenge',
  /** column name */
  SpotifyId = 'spotifyId',
  /** column name */
  SpotifyRefreshToken = 'spotifyRefreshToken',
  /** column name */
  SpotifyVerifierCode = 'spotifyVerifierCode',
  /** column name */
  Status = 'status',
  /** column name */
  WorkerId = 'workerId'
}

/** input type for updating data in table "workers_spotify" */
export type WorkersSpotify_Set_Input = {
  spotifyClientId?: InputMaybe<Scalars['String']>;
  spotifyCodeChallenge?: InputMaybe<Scalars['String']>;
  spotifyId?: InputMaybe<Scalars['String']>;
  spotifyRefreshToken?: InputMaybe<Scalars['String']>;
  spotifyVerifierCode?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<SpotifyStateTypes_Enum>;
  workerId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "workersSpotify" */
export type WorkersSpotify_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: WorkersSpotify_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type WorkersSpotify_Stream_Cursor_Value_Input = {
  spotifyClientId?: InputMaybe<Scalars['String']>;
  spotifyCodeChallenge?: InputMaybe<Scalars['String']>;
  spotifyId?: InputMaybe<Scalars['String']>;
  spotifyRefreshToken?: InputMaybe<Scalars['String']>;
  spotifyVerifierCode?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<SpotifyStateTypes_Enum>;
  workerId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "workers_spotify" */
export enum WorkersSpotify_Update_Column {
  /** column name */
  SpotifyClientId = 'spotifyClientId',
  /** column name */
  SpotifyCodeChallenge = 'spotifyCodeChallenge',
  /** column name */
  SpotifyId = 'spotifyId',
  /** column name */
  SpotifyRefreshToken = 'spotifyRefreshToken',
  /** column name */
  SpotifyVerifierCode = 'spotifyVerifierCode',
  /** column name */
  Status = 'status',
  /** column name */
  WorkerId = 'workerId'
}

export type WorkersSpotify_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<WorkersSpotify_Set_Input>;
  where: WorkersSpotify_Bool_Exp;
};

export type CreateUserMutationVariables = Exact<{
  name: Scalars['String'];
  emailAddress: Scalars['String'];
  externalId: Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'mutation_root', createOneUser?: { __typename?: 'Users', id: any, emailAddress: string, name: string, externalId: string } | null };

export type CreateUserModuleMutationVariables = Exact<{
  urlToData: Scalars['String'];
  moduleId: Scalars['uuid'];
  userId: Scalars['uuid'];
  urlNumber: Scalars['Int'];
  fileName: Scalars['String'];
  fileSize: Scalars['bigint'];
}>;


export type CreateUserModuleMutation = { __typename?: 'mutation_root', createOneUserModule?: { __typename?: 'UsersModules', id: any } | null };

export type CreateUserProjectMutationVariables = Exact<{
  userId?: InputMaybe<Scalars['uuid']>;
  projectId?: InputMaybe<Scalars['uuid']>;
}>;


export type CreateUserProjectMutation = { __typename?: 'mutation_root', createOneUserProject?: { __typename?: 'users_projects', status: string } | null };

export type CreateUserSupplementaryMutationVariables = Exact<{
  userId: Scalars['uuid'];
  walletType: Scalars['String'];
  walletChain: Scalars['String'];
  walletAddress: Scalars['String'];
  publicKey?: InputMaybe<Scalars['String']>;
  socialLoginMethod?: InputMaybe<Scalars['String']>;
  userSecret: Scalars['String'];
}>;


export type CreateUserSupplementaryMutation = { __typename?: 'mutation_root', createOneUserSupplementary?: { __typename?: 'users_supplementary', user: { __typename?: 'Users', id: any, emailAddress: string, name: string, externalId: string, userSupplementary?: { __typename?: 'users_supplementary', socialLoginMethod?: string | null, walletType?: string | null, publicKey?: string | null, userSecret?: string | null } | null } } | null };

export type DeleteUserModulesMutationVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type DeleteUserModulesMutation = { __typename?: 'mutation_root', deleteManyUsersModules?: { __typename?: 'UsersModules_mutation_response', affected_rows: number } | null };

export type DeleteVaultUserMutationVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type DeleteVaultUserMutation = { __typename?: 'mutation_root', deleteOneUser?: { __typename?: 'Users', id: any } | null };

export type SoftDeleteUserModulesMutationVariables = Exact<{
  userId: Scalars['uuid'];
  usersModulesIds?: InputMaybe<Array<Scalars['uuid']> | Scalars['uuid']>;
}>;


export type SoftDeleteUserModulesMutation = { __typename?: 'mutation_root', updateManyUsersModules?: { __typename?: 'UsersModules_mutation_response', affected_rows: number } | null };

export type UpdateUserExternalIdMutationVariables = Exact<{
  userId: Scalars['uuid'];
  externalId: Scalars['String'];
}>;


export type UpdateUserExternalIdMutation = { __typename?: 'mutation_root', updateOneUser?: { __typename?: 'Users', name: string, emailAddress: string, id: any, externalId: string } | null };

export type GetAllUserModulesQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type GetAllUserModulesQuery = { __typename?: 'query_root', usersModules: Array<{ __typename?: 'UsersModules', id: any, moduleId: any, urlToData: string, module: { __typename?: 'Modules', name: string } }> };

export type GetModuleQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetModuleQuery = { __typename?: 'query_root', modules: Array<{ __typename?: 'Modules', iconURL: string, id: any, name: string, moduleInstructions: Array<{ __typename?: 'ModuleInstructions', instructionsMarkdown: string }> }> };

export type GetModulesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetModulesQuery = { __typename?: 'query_root', modules: Array<{ __typename?: 'Modules', iconURL: string, id: any, name: string }> };

export type GetUserFromExternalIdOrEmailQueryVariables = Exact<{
  externalId: Scalars['String'];
  emailAddress: Scalars['String'];
}>;


export type GetUserFromExternalIdOrEmailQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'Users', name: string, emailAddress: string, id: any, externalId: string, userSupplementary?: { __typename?: 'users_supplementary', socialLoginMethod?: string | null, walletType?: string | null, publicKey?: string | null, userSecret?: string | null } | null }> };

export type GetUserUuidFromExternalIdQueryVariables = Exact<{
  externalId: Scalars['String'];
}>;


export type GetUserUuidFromExternalIdQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'Users', name: string, emailAddress: string, id: any, externalId: string }> };

export type GetUsersModulesFromIdsQueryVariables = Exact<{
  usersModulesIds?: InputMaybe<Array<Scalars['uuid']> | Scalars['uuid']>;
  userId: Scalars['uuid'];
}>;


export type GetUsersModulesFromIdsQuery = { __typename?: 'query_root', usersModules: Array<{ __typename?: 'UsersModules', id: any, urlToData: string }> };

export type GetVanaAdminDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVanaAdminDataQuery = { __typename?: 'query_root', totalInstagramUploads: { __typename?: 'UsersModules_aggregate', aggregate?: { __typename?: 'UsersModules_aggregate_fields', count: number } | null }, totalFacebookUploads: { __typename?: 'UsersModules_aggregate', aggregate?: { __typename?: 'UsersModules_aggregate_fields', count: number } | null }, totalGoogleUploads: { __typename?: 'UsersModules_aggregate', aggregate?: { __typename?: 'UsersModules_aggregate_fields', count: number } | null }, vanaEmployeeUsersModules: Array<{ __typename?: 'UsersModules', progress?: string | null, createdAt: any, module: { __typename?: 'Modules', name: string }, user: { __typename?: 'Users', emailAddress: string } }> };

export type GetUserModulesSubscriptionVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type GetUserModulesSubscription = { __typename?: 'subscription_root', usersModules: Array<{ __typename?: 'UsersModules', id: any, moduleId: any, urlToData: string, fileName?: string | null, fileSize: any, createdAt: any, module: { __typename?: 'Modules', name: string } }> };


export const CreateUserDocument = gql`
    mutation createUser($name: String!, $emailAddress: String!, $externalId: String!) {
  createOneUser(
    object: {name: $name, emailAddress: $emailAddress, externalId: $externalId}
    on_conflict: {constraint: users_externalId_key, update_columns: updatedAt}
  ) {
    id
    emailAddress
    name
    externalId
  }
}
    `;
export const CreateUserModuleDocument = gql`
    mutation createUserModule($urlToData: String!, $moduleId: uuid!, $userId: uuid!, $urlNumber: Int!, $fileName: String!, $fileSize: bigint!) {
  createOneUserModule(
    object: {urlToData: $urlToData, moduleId: $moduleId, userId: $userId, progress: "COMPLETE", urlNumber: $urlNumber, fileName: $fileName, fileSize: $fileSize}
  ) {
    id
  }
}
    `;
export const CreateUserProjectDocument = gql`
    mutation createUserProject($userId: uuid, $projectId: uuid) {
  createOneUserProject(
    object: {projectId: $projectId, status: "COMPLETED", userId: $userId}
  ) {
    status
  }
}
    `;
export const CreateUserSupplementaryDocument = gql`
    mutation createUserSupplementary($userId: uuid!, $walletType: String!, $walletChain: String!, $walletAddress: String!, $publicKey: String, $socialLoginMethod: String, $userSecret: String!) {
  createOneUserSupplementary(
    object: {userId: $userId, walletType: $walletType, walletChain: $walletChain, walletAddress: $walletAddress, publicKey: $publicKey, socialLoginMethod: $socialLoginMethod, userSecret: $userSecret}
  ) {
    user {
      id
      emailAddress
      name
      externalId
      userSupplementary {
        socialLoginMethod
        walletType
        publicKey
        userSecret
      }
    }
  }
}
    `;
export const DeleteUserModulesDocument = gql`
    mutation deleteUserModules($userId: uuid!) {
  deleteManyUsersModules(where: {userId: {_eq: $userId}}) {
    affected_rows
  }
}
    `;
export const DeleteVaultUserDocument = gql`
    mutation deleteVaultUser($userId: uuid!) {
  deleteOneUser(id: $userId) {
    id
  }
}
    `;
export const SoftDeleteUserModulesDocument = gql`
    mutation softDeleteUserModules($userId: uuid!, $usersModulesIds: [uuid!]) {
  updateManyUsersModules(
    where: {id: {_in: $usersModulesIds}, userId: {_eq: $userId}}
    _set: {progress: "DELETED"}
  ) {
    affected_rows
  }
}
    `;
export const UpdateUserExternalIdDocument = gql`
    mutation updateUserExternalId($userId: uuid!, $externalId: String!) {
  updateOneUser(pk_columns: {id: $userId}, _set: {externalId: $externalId}) {
    name
    emailAddress
    id
    externalId
  }
}
    `;
export const GetAllUserModulesDocument = gql`
    query getAllUserModules($userId: uuid!) {
  usersModules(where: {userId: {_eq: $userId}}) {
    id
    module {
      name
    }
    moduleId
    urlToData
  }
}
    `;
export const GetModuleDocument = gql`
    query getModule($name: String!) {
  modules(where: {name: {_ilike: $name}}) {
    iconURL
    id
    name
    moduleInstructions {
      instructionsMarkdown
    }
  }
}
    `;
export const GetModulesDocument = gql`
    query getModules {
  modules(where: {isActive: {_eq: true}}) {
    iconURL
    id
    name
  }
}
    `;
export const GetUserFromExternalIdOrEmailDocument = gql`
    query getUserFromExternalIdOrEmail($externalId: String!, $emailAddress: String!) {
  users(
    limit: 1
    where: {_or: [{externalId: {_eq: $externalId}}, {emailAddress: {_eq: $emailAddress}}]}
  ) {
    name
    emailAddress
    id
    externalId
    userSupplementary {
      socialLoginMethod
      walletType
      publicKey
      userSecret
    }
  }
}
    `;
export const GetUserUuidFromExternalIdDocument = gql`
    query getUserUUIDFromExternalId($externalId: String!) {
  users(limit: 1, where: {externalId: {_eq: $externalId}}) {
    name
    emailAddress
    id
    externalId
  }
}
    `;
export const GetUsersModulesFromIdsDocument = gql`
    query getUsersModulesFromIds($usersModulesIds: [uuid!], $userId: uuid!) {
  usersModules(
    where: {id: {_in: $usersModulesIds}, userId: {_eq: $userId}, progress: {_eq: "COMPLETE"}}
  ) {
    id
    urlToData
  }
}
    `;
export const GetVanaAdminDataDocument = gql`
    query getVanaAdminData {
  totalInstagramUploads: usersModulesAggregate(
    where: {module: {name: {_eq: "Instagram"}}}
  ) {
    aggregate {
      count
    }
  }
  totalFacebookUploads: usersModulesAggregate(
    where: {module: {name: {_eq: "Facebook"}}}
  ) {
    aggregate {
      count
    }
  }
  totalGoogleUploads: usersModulesAggregate(
    where: {module: {name: {_eq: "Google"}}}
  ) {
    aggregate {
      count
    }
  }
  vanaEmployeeUsersModules: usersModules(
    where: {user: {emailAddress: {_ilike: "%@vana.org%"}}}
  ) {
    module {
      name
    }
    progress
    createdAt
    user {
      emailAddress
    }
  }
}
    `;
export const GetUserModulesDocument = gql`
    subscription getUserModules($userId: uuid!) {
  usersModules(where: {userId: {_eq: $userId}, progress: {_eq: "COMPLETE"}}) {
    id
    module {
      name
    }
    moduleId
    urlToData
    fileName
    fileSize
    createdAt
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createUser(variables: CreateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserMutation>(CreateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUser', 'mutation');
    },
    createUserModule(variables: CreateUserModuleMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserModuleMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserModuleMutation>(CreateUserModuleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUserModule', 'mutation');
    },
    createUserProject(variables?: CreateUserProjectMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserProjectMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserProjectMutation>(CreateUserProjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUserProject', 'mutation');
    },
    createUserSupplementary(variables: CreateUserSupplementaryMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserSupplementaryMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserSupplementaryMutation>(CreateUserSupplementaryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUserSupplementary', 'mutation');
    },
    deleteUserModules(variables: DeleteUserModulesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUserModulesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteUserModulesMutation>(DeleteUserModulesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteUserModules', 'mutation');
    },
    deleteVaultUser(variables: DeleteVaultUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteVaultUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteVaultUserMutation>(DeleteVaultUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteVaultUser', 'mutation');
    },
    softDeleteUserModules(variables: SoftDeleteUserModulesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SoftDeleteUserModulesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SoftDeleteUserModulesMutation>(SoftDeleteUserModulesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'softDeleteUserModules', 'mutation');
    },
    updateUserExternalId(variables: UpdateUserExternalIdMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserExternalIdMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserExternalIdMutation>(UpdateUserExternalIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUserExternalId', 'mutation');
    },
    getAllUserModules(variables: GetAllUserModulesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllUserModulesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllUserModulesQuery>(GetAllUserModulesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllUserModules', 'query');
    },
    getModule(variables: GetModuleQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetModuleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetModuleQuery>(GetModuleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getModule', 'query');
    },
    getModules(variables?: GetModulesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetModulesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetModulesQuery>(GetModulesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getModules', 'query');
    },
    getUserFromExternalIdOrEmail(variables: GetUserFromExternalIdOrEmailQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserFromExternalIdOrEmailQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserFromExternalIdOrEmailQuery>(GetUserFromExternalIdOrEmailDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserFromExternalIdOrEmail', 'query');
    },
    getUserUUIDFromExternalId(variables: GetUserUuidFromExternalIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserUuidFromExternalIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserUuidFromExternalIdQuery>(GetUserUuidFromExternalIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserUUIDFromExternalId', 'query');
    },
    getUsersModulesFromIds(variables: GetUsersModulesFromIdsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUsersModulesFromIdsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUsersModulesFromIdsQuery>(GetUsersModulesFromIdsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUsersModulesFromIds', 'query');
    },
    getVanaAdminData(variables?: GetVanaAdminDataQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetVanaAdminDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetVanaAdminDataQuery>(GetVanaAdminDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getVanaAdminData', 'query');
    },
    getUserModules(variables: GetUserModulesSubscriptionVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserModulesSubscription> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserModulesSubscription>(GetUserModulesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserModules', 'subscription');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;