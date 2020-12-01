/**
 * @schema CreateGroupInput
 */
export interface CreateGroupInput {
  /**
   * @schema CreateGroupInput#Name
   */
  readonly name: string;

  /**
   * @schema CreateGroupInput#Description
   */
  readonly description?: string;

  /**
   * @schema CreateGroupInput#ResourceQuery
   */
  readonly resourceQuery?: ResourceQuery;

  /**
   * @schema CreateGroupInput#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateGroupInput#Configuration
   */
  readonly configuration?: GroupConfigurationItem[];

}

/**
 * @schema CreateGroupOutput
 */
export interface CreateGroupOutput {
  /**
   * @schema CreateGroupOutput#Group
   */
  readonly group?: Group;

  /**
   * @schema CreateGroupOutput#ResourceQuery
   */
  readonly resourceQuery?: ResourceQuery;

  /**
   * @schema CreateGroupOutput#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateGroupOutput#GroupConfiguration
   */
  readonly groupConfiguration?: GroupConfiguration;

}

/**
 * @schema DeleteGroupInput
 */
export interface DeleteGroupInput {
  /**
   * @schema DeleteGroupInput#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema DeleteGroupInput#Group
   */
  readonly group?: string;

}

/**
 * @schema DeleteGroupOutput
 */
export interface DeleteGroupOutput {
  /**
   * @schema DeleteGroupOutput#Group
   */
  readonly group?: Group;

}

/**
 * @schema GetGroupInput
 */
export interface GetGroupInput {
  /**
   * @schema GetGroupInput#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema GetGroupInput#Group
   */
  readonly group?: string;

}

/**
 * @schema GetGroupOutput
 */
export interface GetGroupOutput {
  /**
   * @schema GetGroupOutput#Group
   */
  readonly group?: Group;

}

/**
 * @schema GetGroupConfigurationInput
 */
export interface GetGroupConfigurationInput {
  /**
   * @schema GetGroupConfigurationInput#Group
   */
  readonly group?: string;

}

/**
 * @schema GetGroupConfigurationOutput
 */
export interface GetGroupConfigurationOutput {
  /**
   * @schema GetGroupConfigurationOutput#GroupConfiguration
   */
  readonly groupConfiguration?: GroupConfiguration;

}

/**
 * @schema GetGroupQueryInput
 */
export interface GetGroupQueryInput {
  /**
   * @schema GetGroupQueryInput#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema GetGroupQueryInput#Group
   */
  readonly group?: string;

}

/**
 * @schema GetGroupQueryOutput
 */
export interface GetGroupQueryOutput {
  /**
   * @schema GetGroupQueryOutput#GroupQuery
   */
  readonly groupQuery?: GroupQuery;

}

/**
 * @schema GetTagsInput
 */
export interface GetTagsInput {
  /**
   * @schema GetTagsInput#Arn
   */
  readonly arn: string;

}

/**
 * @schema GetTagsOutput
 */
export interface GetTagsOutput {
  /**
   * @schema GetTagsOutput#Arn
   */
  readonly arn?: string;

  /**
   * @schema GetTagsOutput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema GroupResourcesInput
 */
export interface GroupResourcesInput {
  /**
   * @schema GroupResourcesInput#Group
   */
  readonly group: string;

  /**
   * @schema GroupResourcesInput#ResourceArns
   */
  readonly resourceArns: string[];

}

/**
 * @schema GroupResourcesOutput
 */
export interface GroupResourcesOutput {
  /**
   * @schema GroupResourcesOutput#Succeeded
   */
  readonly succeeded?: string[];

  /**
   * @schema GroupResourcesOutput#Failed
   */
  readonly failed?: FailedResource[];

}

/**
 * @schema ListGroupResourcesInput
 */
export interface ListGroupResourcesInput {
  /**
   * @schema ListGroupResourcesInput#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema ListGroupResourcesInput#Group
   */
  readonly group?: string;

  /**
   * @schema ListGroupResourcesInput#Filters
   */
  readonly filters?: ResourceFilter[];

  /**
   * @schema ListGroupResourcesInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListGroupResourcesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListGroupResourcesOutput
 */
export interface ListGroupResourcesOutput {
  /**
   * @schema ListGroupResourcesOutput#ResourceIdentifiers
   */
  readonly resourceIdentifiers?: ResourceIdentifier[];

  /**
   * @schema ListGroupResourcesOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListGroupResourcesOutput#QueryErrors
   */
  readonly queryErrors?: QueryError[];

}

/**
 * @schema ListGroupsInput
 */
export interface ListGroupsInput {
  /**
   * @schema ListGroupsInput#Filters
   */
  readonly filters?: GroupFilter[];

  /**
   * @schema ListGroupsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListGroupsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListGroupsOutput
 */
export interface ListGroupsOutput {
  /**
   * @schema ListGroupsOutput#GroupIdentifiers
   */
  readonly groupIdentifiers?: GroupIdentifier[];

  /**
   * @schema ListGroupsOutput#Groups
   */
  readonly groups?: Group[];

  /**
   * @schema ListGroupsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SearchResourcesInput
 */
export interface SearchResourcesInput {
  /**
   * @schema SearchResourcesInput#ResourceQuery
   */
  readonly resourceQuery: ResourceQuery;

  /**
   * @schema SearchResourcesInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema SearchResourcesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema SearchResourcesOutput
 */
export interface SearchResourcesOutput {
  /**
   * @schema SearchResourcesOutput#ResourceIdentifiers
   */
  readonly resourceIdentifiers?: ResourceIdentifier[];

  /**
   * @schema SearchResourcesOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema SearchResourcesOutput#QueryErrors
   */
  readonly queryErrors?: QueryError[];

}

/**
 * @schema TagInput
 */
export interface TagInput {
  /**
   * @schema TagInput#Arn
   */
  readonly arn: string;

  /**
   * @schema TagInput#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema TagOutput
 */
export interface TagOutput {
  /**
   * @schema TagOutput#Arn
   */
  readonly arn?: string;

  /**
   * @schema TagOutput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema UngroupResourcesInput
 */
export interface UngroupResourcesInput {
  /**
   * @schema UngroupResourcesInput#Group
   */
  readonly group: string;

  /**
   * @schema UngroupResourcesInput#ResourceArns
   */
  readonly resourceArns: string[];

}

/**
 * @schema UngroupResourcesOutput
 */
export interface UngroupResourcesOutput {
  /**
   * @schema UngroupResourcesOutput#Succeeded
   */
  readonly succeeded?: string[];

  /**
   * @schema UngroupResourcesOutput#Failed
   */
  readonly failed?: FailedResource[];

}

/**
 * @schema UntagInput
 */
export interface UntagInput {
  /**
   * @schema UntagInput#Arn
   */
  readonly arn: string;

  /**
   * @schema UntagInput#Keys
   */
  readonly keys: string[];

}

/**
 * @schema UntagOutput
 */
export interface UntagOutput {
  /**
   * @schema UntagOutput#Arn
   */
  readonly arn?: string;

  /**
   * @schema UntagOutput#Keys
   */
  readonly keys?: string[];

}

/**
 * @schema UpdateGroupInput
 */
export interface UpdateGroupInput {
  /**
   * @schema UpdateGroupInput#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema UpdateGroupInput#Group
   */
  readonly group?: string;

  /**
   * @schema UpdateGroupInput#Description
   */
  readonly description?: string;

}

/**
 * @schema UpdateGroupOutput
 */
export interface UpdateGroupOutput {
  /**
   * @schema UpdateGroupOutput#Group
   */
  readonly group?: Group;

}

/**
 * @schema UpdateGroupQueryInput
 */
export interface UpdateGroupQueryInput {
  /**
   * @schema UpdateGroupQueryInput#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema UpdateGroupQueryInput#Group
   */
  readonly group?: string;

  /**
   * @schema UpdateGroupQueryInput#ResourceQuery
   */
  readonly resourceQuery: ResourceQuery;

}

/**
 * @schema UpdateGroupQueryOutput
 */
export interface UpdateGroupQueryOutput {
  /**
   * @schema UpdateGroupQueryOutput#GroupQuery
   */
  readonly groupQuery?: GroupQuery;

}

/**
 * @schema ResourceQuery
 */
export interface ResourceQuery {
  /**
   * @schema ResourceQuery#Type
   */
  readonly type: string;

  /**
   * @schema ResourceQuery#Query
   */
  readonly query: string;

}

/**
 * @schema GroupConfigurationItem
 */
export interface GroupConfigurationItem {
  /**
   * @schema GroupConfigurationItem#Type
   */
  readonly type: string;

  /**
   * @schema GroupConfigurationItem#Parameters
   */
  readonly parameters?: GroupConfigurationParameter[];

}

/**
 * @schema Group
 */
export interface Group {
  /**
   * @schema Group#GroupArn
   */
  readonly groupArn: string;

  /**
   * @schema Group#Name
   */
  readonly name: string;

  /**
   * @schema Group#Description
   */
  readonly description?: string;

}

/**
 * @schema GroupConfiguration
 */
export interface GroupConfiguration {
  /**
   * @schema GroupConfiguration#Configuration
   */
  readonly configuration?: GroupConfigurationItem[];

  /**
   * @schema GroupConfiguration#ProposedConfiguration
   */
  readonly proposedConfiguration?: GroupConfigurationItem[];

  /**
   * @schema GroupConfiguration#Status
   */
  readonly status?: string;

  /**
   * @schema GroupConfiguration#FailureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema GroupQuery
 */
export interface GroupQuery {
  /**
   * @schema GroupQuery#GroupName
   */
  readonly groupName: string;

  /**
   * @schema GroupQuery#ResourceQuery
   */
  readonly resourceQuery: ResourceQuery;

}

/**
 * @schema FailedResource
 */
export interface FailedResource {
  /**
   * @schema FailedResource#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema FailedResource#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema FailedResource#ErrorCode
   */
  readonly errorCode?: string;

}

/**
 * @schema ResourceFilter
 */
export interface ResourceFilter {
  /**
   * @schema ResourceFilter#Name
   */
  readonly name: string;

  /**
   * @schema ResourceFilter#Values
   */
  readonly values: string[];

}

/**
 * @schema ResourceIdentifier
 */
export interface ResourceIdentifier {
  /**
   * @schema ResourceIdentifier#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema ResourceIdentifier#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * @schema QueryError
 */
export interface QueryError {
  /**
   * @schema QueryError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema QueryError#Message
   */
  readonly message?: string;

}

/**
 * @schema GroupFilter
 */
export interface GroupFilter {
  /**
   * @schema GroupFilter#Name
   */
  readonly name: string;

  /**
   * @schema GroupFilter#Values
   */
  readonly values: string[];

}

/**
 * @schema GroupIdentifier
 */
export interface GroupIdentifier {
  /**
   * @schema GroupIdentifier#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema GroupIdentifier#GroupArn
   */
  readonly groupArn?: string;

}

/**
 * @schema GroupConfigurationParameter
 */
export interface GroupConfigurationParameter {
  /**
   * @schema GroupConfigurationParameter#Name
   */
  readonly name: string;

  /**
   * @schema GroupConfigurationParameter#Values
   */
  readonly values?: string[];

}
