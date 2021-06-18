/**
 * @schema ResourceGroupsCreateGroupInput
 */
export interface ResourceGroupsCreateGroupInput {
  /**
   * @schema ResourceGroupsCreateGroupInput#Name
   */
  readonly name: string;

  /**
   * @schema ResourceGroupsCreateGroupInput#Description
   */
  readonly description?: string;

  /**
   * @schema ResourceGroupsCreateGroupInput#ResourceQuery
   */
  readonly resourceQuery?: ResourceGroupsResourceQuery;

  /**
   * @schema ResourceGroupsCreateGroupInput#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ResourceGroupsCreateGroupInput#Configuration
   */
  readonly configuration?: ResourceGroupsGroupConfigurationItem[];

}

/**
 * @schema ResourceGroupsCreateGroupOutput
 */
export interface ResourceGroupsCreateGroupOutput {
  /**
   * @schema ResourceGroupsCreateGroupOutput#Group
   */
  readonly group?: ResourceGroupsGroup;

  /**
   * @schema ResourceGroupsCreateGroupOutput#ResourceQuery
   */
  readonly resourceQuery?: ResourceGroupsResourceQuery;

  /**
   * @schema ResourceGroupsCreateGroupOutput#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ResourceGroupsCreateGroupOutput#GroupConfiguration
   */
  readonly groupConfiguration?: ResourceGroupsGroupConfiguration;

}

/**
 * @schema ResourceGroupsDeleteGroupInput
 */
export interface ResourceGroupsDeleteGroupInput {
  /**
   * @schema ResourceGroupsDeleteGroupInput#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema ResourceGroupsDeleteGroupInput#Group
   */
  readonly group?: string;

}

/**
 * @schema ResourceGroupsDeleteGroupOutput
 */
export interface ResourceGroupsDeleteGroupOutput {
  /**
   * @schema ResourceGroupsDeleteGroupOutput#Group
   */
  readonly group?: ResourceGroupsGroup;

}

/**
 * @schema ResourceGroupsGetGroupInput
 */
export interface ResourceGroupsGetGroupInput {
  /**
   * @schema ResourceGroupsGetGroupInput#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema ResourceGroupsGetGroupInput#Group
   */
  readonly group?: string;

}

/**
 * @schema ResourceGroupsGetGroupOutput
 */
export interface ResourceGroupsGetGroupOutput {
  /**
   * @schema ResourceGroupsGetGroupOutput#Group
   */
  readonly group?: ResourceGroupsGroup;

}

/**
 * @schema ResourceGroupsGetGroupConfigurationInput
 */
export interface ResourceGroupsGetGroupConfigurationInput {
  /**
   * @schema ResourceGroupsGetGroupConfigurationInput#Group
   */
  readonly group?: string;

}

/**
 * @schema ResourceGroupsGetGroupConfigurationOutput
 */
export interface ResourceGroupsGetGroupConfigurationOutput {
  /**
   * @schema ResourceGroupsGetGroupConfigurationOutput#GroupConfiguration
   */
  readonly groupConfiguration?: ResourceGroupsGroupConfiguration;

}

/**
 * @schema ResourceGroupsGetGroupQueryInput
 */
export interface ResourceGroupsGetGroupQueryInput {
  /**
   * @schema ResourceGroupsGetGroupQueryInput#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema ResourceGroupsGetGroupQueryInput#Group
   */
  readonly group?: string;

}

/**
 * @schema ResourceGroupsGetGroupQueryOutput
 */
export interface ResourceGroupsGetGroupQueryOutput {
  /**
   * @schema ResourceGroupsGetGroupQueryOutput#GroupQuery
   */
  readonly groupQuery?: ResourceGroupsGroupQuery;

}

/**
 * @schema ResourceGroupsGetTagsInput
 */
export interface ResourceGroupsGetTagsInput {
  /**
   * @schema ResourceGroupsGetTagsInput#Arn
   */
  readonly arn: string;

}

/**
 * @schema ResourceGroupsGetTagsOutput
 */
export interface ResourceGroupsGetTagsOutput {
  /**
   * @schema ResourceGroupsGetTagsOutput#Arn
   */
  readonly arn?: string;

  /**
   * @schema ResourceGroupsGetTagsOutput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ResourceGroupsGroupResourcesInput
 */
export interface ResourceGroupsGroupResourcesInput {
  /**
   * @schema ResourceGroupsGroupResourcesInput#Group
   */
  readonly group: string;

  /**
   * @schema ResourceGroupsGroupResourcesInput#ResourceArns
   */
  readonly resourceArns: string[];

}

/**
 * @schema ResourceGroupsGroupResourcesOutput
 */
export interface ResourceGroupsGroupResourcesOutput {
  /**
   * @schema ResourceGroupsGroupResourcesOutput#Succeeded
   */
  readonly succeeded?: string[];

  /**
   * @schema ResourceGroupsGroupResourcesOutput#Failed
   */
  readonly failed?: ResourceGroupsFailedResource[];

}

/**
 * @schema ResourceGroupsListGroupResourcesInput
 */
export interface ResourceGroupsListGroupResourcesInput {
  /**
   * @schema ResourceGroupsListGroupResourcesInput#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema ResourceGroupsListGroupResourcesInput#Group
   */
  readonly group?: string;

  /**
   * @schema ResourceGroupsListGroupResourcesInput#Filters
   */
  readonly filters?: ResourceGroupsResourceFilter[];

  /**
   * @schema ResourceGroupsListGroupResourcesInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ResourceGroupsListGroupResourcesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ResourceGroupsListGroupResourcesOutput
 */
export interface ResourceGroupsListGroupResourcesOutput {
  /**
   * @schema ResourceGroupsListGroupResourcesOutput#ResourceIdentifiers
   */
  readonly resourceIdentifiers?: ResourceGroupsResourceIdentifier[];

  /**
   * @schema ResourceGroupsListGroupResourcesOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ResourceGroupsListGroupResourcesOutput#QueryErrors
   */
  readonly queryErrors?: ResourceGroupsQueryError[];

}

/**
 * @schema ResourceGroupsListGroupsInput
 */
export interface ResourceGroupsListGroupsInput {
  /**
   * @schema ResourceGroupsListGroupsInput#Filters
   */
  readonly filters?: ResourceGroupsGroupFilter[];

  /**
   * @schema ResourceGroupsListGroupsInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ResourceGroupsListGroupsInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ResourceGroupsListGroupsOutput
 */
export interface ResourceGroupsListGroupsOutput {
  /**
   * @schema ResourceGroupsListGroupsOutput#GroupIdentifiers
   */
  readonly groupIdentifiers?: ResourceGroupsGroupIdentifier[];

  /**
   * @schema ResourceGroupsListGroupsOutput#Groups
   */
  readonly groups?: ResourceGroupsGroup[];

  /**
   * @schema ResourceGroupsListGroupsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ResourceGroupsSearchResourcesInput
 */
export interface ResourceGroupsSearchResourcesInput {
  /**
   * @schema ResourceGroupsSearchResourcesInput#ResourceQuery
   */
  readonly resourceQuery: ResourceGroupsResourceQuery;

  /**
   * @schema ResourceGroupsSearchResourcesInput#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ResourceGroupsSearchResourcesInput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ResourceGroupsSearchResourcesOutput
 */
export interface ResourceGroupsSearchResourcesOutput {
  /**
   * @schema ResourceGroupsSearchResourcesOutput#ResourceIdentifiers
   */
  readonly resourceIdentifiers?: ResourceGroupsResourceIdentifier[];

  /**
   * @schema ResourceGroupsSearchResourcesOutput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ResourceGroupsSearchResourcesOutput#QueryErrors
   */
  readonly queryErrors?: ResourceGroupsQueryError[];

}

/**
 * @schema ResourceGroupsTagInput
 */
export interface ResourceGroupsTagInput {
  /**
   * @schema ResourceGroupsTagInput#Arn
   */
  readonly arn: string;

  /**
   * @schema ResourceGroupsTagInput#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema ResourceGroupsTagOutput
 */
export interface ResourceGroupsTagOutput {
  /**
   * @schema ResourceGroupsTagOutput#Arn
   */
  readonly arn?: string;

  /**
   * @schema ResourceGroupsTagOutput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ResourceGroupsUngroupResourcesInput
 */
export interface ResourceGroupsUngroupResourcesInput {
  /**
   * @schema ResourceGroupsUngroupResourcesInput#Group
   */
  readonly group: string;

  /**
   * @schema ResourceGroupsUngroupResourcesInput#ResourceArns
   */
  readonly resourceArns: string[];

}

/**
 * @schema ResourceGroupsUngroupResourcesOutput
 */
export interface ResourceGroupsUngroupResourcesOutput {
  /**
   * @schema ResourceGroupsUngroupResourcesOutput#Succeeded
   */
  readonly succeeded?: string[];

  /**
   * @schema ResourceGroupsUngroupResourcesOutput#Failed
   */
  readonly failed?: ResourceGroupsFailedResource[];

}

/**
 * @schema ResourceGroupsUntagInput
 */
export interface ResourceGroupsUntagInput {
  /**
   * @schema ResourceGroupsUntagInput#Arn
   */
  readonly arn: string;

  /**
   * @schema ResourceGroupsUntagInput#Keys
   */
  readonly keys: string[];

}

/**
 * @schema ResourceGroupsUntagOutput
 */
export interface ResourceGroupsUntagOutput {
  /**
   * @schema ResourceGroupsUntagOutput#Arn
   */
  readonly arn?: string;

  /**
   * @schema ResourceGroupsUntagOutput#Keys
   */
  readonly keys?: string[];

}

/**
 * @schema ResourceGroupsUpdateGroupInput
 */
export interface ResourceGroupsUpdateGroupInput {
  /**
   * @schema ResourceGroupsUpdateGroupInput#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema ResourceGroupsUpdateGroupInput#Group
   */
  readonly group?: string;

  /**
   * @schema ResourceGroupsUpdateGroupInput#Description
   */
  readonly description?: string;

}

/**
 * @schema ResourceGroupsUpdateGroupOutput
 */
export interface ResourceGroupsUpdateGroupOutput {
  /**
   * @schema ResourceGroupsUpdateGroupOutput#Group
   */
  readonly group?: ResourceGroupsGroup;

}

/**
 * @schema ResourceGroupsUpdateGroupQueryInput
 */
export interface ResourceGroupsUpdateGroupQueryInput {
  /**
   * @schema ResourceGroupsUpdateGroupQueryInput#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema ResourceGroupsUpdateGroupQueryInput#Group
   */
  readonly group?: string;

  /**
   * @schema ResourceGroupsUpdateGroupQueryInput#ResourceQuery
   */
  readonly resourceQuery: ResourceGroupsResourceQuery;

}

/**
 * @schema ResourceGroupsUpdateGroupQueryOutput
 */
export interface ResourceGroupsUpdateGroupQueryOutput {
  /**
   * @schema ResourceGroupsUpdateGroupQueryOutput#GroupQuery
   */
  readonly groupQuery?: ResourceGroupsGroupQuery;

}

/**
 * @schema ResourceGroupsResourceQuery
 */
export interface ResourceGroupsResourceQuery {
  /**
   * @schema ResourceGroupsResourceQuery#Type
   */
  readonly type: string;

  /**
   * @schema ResourceGroupsResourceQuery#Query
   */
  readonly query: string;

}

/**
 * @schema ResourceGroupsGroupConfigurationItem
 */
export interface ResourceGroupsGroupConfigurationItem {
  /**
   * @schema ResourceGroupsGroupConfigurationItem#Type
   */
  readonly type: string;

  /**
   * @schema ResourceGroupsGroupConfigurationItem#Parameters
   */
  readonly parameters?: ResourceGroupsGroupConfigurationParameter[];

}

/**
 * @schema ResourceGroupsGroup
 */
export interface ResourceGroupsGroup {
  /**
   * @schema ResourceGroupsGroup#GroupArn
   */
  readonly groupArn: string;

  /**
   * @schema ResourceGroupsGroup#Name
   */
  readonly name: string;

  /**
   * @schema ResourceGroupsGroup#Description
   */
  readonly description?: string;

}

/**
 * @schema ResourceGroupsGroupConfiguration
 */
export interface ResourceGroupsGroupConfiguration {
  /**
   * @schema ResourceGroupsGroupConfiguration#Configuration
   */
  readonly configuration?: ResourceGroupsGroupConfigurationItem[];

  /**
   * @schema ResourceGroupsGroupConfiguration#ProposedConfiguration
   */
  readonly proposedConfiguration?: ResourceGroupsGroupConfigurationItem[];

  /**
   * @schema ResourceGroupsGroupConfiguration#Status
   */
  readonly status?: string;

  /**
   * @schema ResourceGroupsGroupConfiguration#FailureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema ResourceGroupsGroupQuery
 */
export interface ResourceGroupsGroupQuery {
  /**
   * @schema ResourceGroupsGroupQuery#GroupName
   */
  readonly groupName: string;

  /**
   * @schema ResourceGroupsGroupQuery#ResourceQuery
   */
  readonly resourceQuery: ResourceGroupsResourceQuery;

}

/**
 * @schema ResourceGroupsFailedResource
 */
export interface ResourceGroupsFailedResource {
  /**
   * @schema ResourceGroupsFailedResource#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema ResourceGroupsFailedResource#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema ResourceGroupsFailedResource#ErrorCode
   */
  readonly errorCode?: string;

}

/**
 * @schema ResourceGroupsResourceFilter
 */
export interface ResourceGroupsResourceFilter {
  /**
   * @schema ResourceGroupsResourceFilter#Name
   */
  readonly name: string;

  /**
   * @schema ResourceGroupsResourceFilter#Values
   */
  readonly values: string[];

}

/**
 * @schema ResourceGroupsResourceIdentifier
 */
export interface ResourceGroupsResourceIdentifier {
  /**
   * @schema ResourceGroupsResourceIdentifier#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema ResourceGroupsResourceIdentifier#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * @schema ResourceGroupsQueryError
 */
export interface ResourceGroupsQueryError {
  /**
   * @schema ResourceGroupsQueryError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema ResourceGroupsQueryError#Message
   */
  readonly message?: string;

}

/**
 * @schema ResourceGroupsGroupFilter
 */
export interface ResourceGroupsGroupFilter {
  /**
   * @schema ResourceGroupsGroupFilter#Name
   */
  readonly name: string;

  /**
   * @schema ResourceGroupsGroupFilter#Values
   */
  readonly values: string[];

}

/**
 * @schema ResourceGroupsGroupIdentifier
 */
export interface ResourceGroupsGroupIdentifier {
  /**
   * @schema ResourceGroupsGroupIdentifier#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema ResourceGroupsGroupIdentifier#GroupArn
   */
  readonly groupArn?: string;

}

/**
 * @schema ResourceGroupsGroupConfigurationParameter
 */
export interface ResourceGroupsGroupConfigurationParameter {
  /**
   * @schema ResourceGroupsGroupConfigurationParameter#Name
   */
  readonly name: string;

  /**
   * @schema ResourceGroupsGroupConfigurationParameter#Values
   */
  readonly values?: string[];

}
