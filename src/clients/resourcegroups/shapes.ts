/**
 * @schema ResourceGroupsCreateGroupInput
 */
export interface ResourceGroupsCreateGroupInput {
  /**
   * @schema ResourceGroupsCreateGroupInput#Name
   */
  readonly name?: string;

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
 * Converts an object of type 'ResourceGroupsCreateGroupInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsCreateGroupInput(obj: ResourceGroupsCreateGroupInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'ResourceQuery': toJson_ResourceGroupsResourceQuery(obj.resourceQuery),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Configuration': obj.configuration?.map(y => toJson_ResourceGroupsGroupConfigurationItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsCreateGroupOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsCreateGroupOutput(obj: ResourceGroupsCreateGroupOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Group': toJson_ResourceGroupsGroup(obj.group),
    'ResourceQuery': toJson_ResourceGroupsResourceQuery(obj.resourceQuery),
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'GroupConfiguration': toJson_ResourceGroupsGroupConfiguration(obj.groupConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsDeleteGroupInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsDeleteGroupInput(obj: ResourceGroupsDeleteGroupInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'Group': obj.group,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsDeleteGroupOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsDeleteGroupOutput(obj: ResourceGroupsDeleteGroupOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Group': toJson_ResourceGroupsGroup(obj.group),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsGetGroupInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsGetGroupInput(obj: ResourceGroupsGetGroupInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'Group': obj.group,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsGetGroupOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsGetGroupOutput(obj: ResourceGroupsGetGroupOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Group': toJson_ResourceGroupsGroup(obj.group),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsGetGroupConfigurationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsGetGroupConfigurationInput(obj: ResourceGroupsGetGroupConfigurationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Group': obj.group,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsGetGroupConfigurationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsGetGroupConfigurationOutput(obj: ResourceGroupsGetGroupConfigurationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupConfiguration': toJson_ResourceGroupsGroupConfiguration(obj.groupConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsGetGroupQueryInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsGetGroupQueryInput(obj: ResourceGroupsGetGroupQueryInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'Group': obj.group,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsGetGroupQueryOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsGetGroupQueryOutput(obj: ResourceGroupsGetGroupQueryOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupQuery': toJson_ResourceGroupsGroupQuery(obj.groupQuery),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ResourceGroupsGetTagsInput
 */
export interface ResourceGroupsGetTagsInput {
  /**
   * @schema ResourceGroupsGetTagsInput#Arn
   */
  readonly arn?: string;

}

/**
 * Converts an object of type 'ResourceGroupsGetTagsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsGetTagsInput(obj: ResourceGroupsGetTagsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsGetTagsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsGetTagsOutput(obj: ResourceGroupsGetTagsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ResourceGroupsGroupResourcesInput
 */
export interface ResourceGroupsGroupResourcesInput {
  /**
   * @schema ResourceGroupsGroupResourcesInput#Group
   */
  readonly group?: string;

  /**
   * @schema ResourceGroupsGroupResourcesInput#ResourceArns
   */
  readonly resourceArns?: string[];

}

/**
 * Converts an object of type 'ResourceGroupsGroupResourcesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsGroupResourcesInput(obj: ResourceGroupsGroupResourcesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Group': obj.group,
    'ResourceArns': obj.resourceArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema ResourceGroupsGroupResourcesOutput#Pending
   */
  readonly pending?: ResourceGroupsPendingResource[];

}

/**
 * Converts an object of type 'ResourceGroupsGroupResourcesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsGroupResourcesOutput(obj: ResourceGroupsGroupResourcesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Succeeded': obj.succeeded?.map(y => y),
    'Failed': obj.failed?.map(y => toJson_ResourceGroupsFailedResource(y)),
    'Pending': obj.pending?.map(y => toJson_ResourceGroupsPendingResource(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsListGroupResourcesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsListGroupResourcesInput(obj: ResourceGroupsListGroupResourcesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'Group': obj.group,
    'Filters': obj.filters?.map(y => toJson_ResourceGroupsResourceFilter(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ResourceGroupsListGroupResourcesOutput
 */
export interface ResourceGroupsListGroupResourcesOutput {
  /**
   * @schema ResourceGroupsListGroupResourcesOutput#Resources
   */
  readonly resources?: ResourceGroupsListGroupResourcesItem[];

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
 * Converts an object of type 'ResourceGroupsListGroupResourcesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsListGroupResourcesOutput(obj: ResourceGroupsListGroupResourcesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Resources': obj.resources?.map(y => toJson_ResourceGroupsListGroupResourcesItem(y)),
    'ResourceIdentifiers': obj.resourceIdentifiers?.map(y => toJson_ResourceGroupsResourceIdentifier(y)),
    'NextToken': obj.nextToken,
    'QueryErrors': obj.queryErrors?.map(y => toJson_ResourceGroupsQueryError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsListGroupsInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsListGroupsInput(obj: ResourceGroupsListGroupsInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filters': obj.filters?.map(y => toJson_ResourceGroupsGroupFilter(y)),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsListGroupsOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsListGroupsOutput(obj: ResourceGroupsListGroupsOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupIdentifiers': obj.groupIdentifiers?.map(y => toJson_ResourceGroupsGroupIdentifier(y)),
    'Groups': obj.groups?.map(y => toJson_ResourceGroupsGroup(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ResourceGroupsPutGroupConfigurationInput
 */
export interface ResourceGroupsPutGroupConfigurationInput {
  /**
   * @schema ResourceGroupsPutGroupConfigurationInput#Group
   */
  readonly group?: string;

  /**
   * @schema ResourceGroupsPutGroupConfigurationInput#Configuration
   */
  readonly configuration?: ResourceGroupsGroupConfigurationItem[];

}

/**
 * Converts an object of type 'ResourceGroupsPutGroupConfigurationInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsPutGroupConfigurationInput(obj: ResourceGroupsPutGroupConfigurationInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Group': obj.group,
    'Configuration': obj.configuration?.map(y => toJson_ResourceGroupsGroupConfigurationItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ResourceGroupsPutGroupConfigurationOutput
 */
export interface ResourceGroupsPutGroupConfigurationOutput {
}

/**
 * Converts an object of type 'ResourceGroupsPutGroupConfigurationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsPutGroupConfigurationOutput(obj: ResourceGroupsPutGroupConfigurationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ResourceGroupsSearchResourcesInput
 */
export interface ResourceGroupsSearchResourcesInput {
  /**
   * @schema ResourceGroupsSearchResourcesInput#ResourceQuery
   */
  readonly resourceQuery?: ResourceGroupsResourceQuery;

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
 * Converts an object of type 'ResourceGroupsSearchResourcesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsSearchResourcesInput(obj: ResourceGroupsSearchResourcesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceQuery': toJson_ResourceGroupsResourceQuery(obj.resourceQuery),
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsSearchResourcesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsSearchResourcesOutput(obj: ResourceGroupsSearchResourcesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceIdentifiers': obj.resourceIdentifiers?.map(y => toJson_ResourceGroupsResourceIdentifier(y)),
    'NextToken': obj.nextToken,
    'QueryErrors': obj.queryErrors?.map(y => toJson_ResourceGroupsQueryError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ResourceGroupsTagInput
 */
export interface ResourceGroupsTagInput {
  /**
   * @schema ResourceGroupsTagInput#Arn
   */
  readonly arn?: string;

  /**
   * @schema ResourceGroupsTagInput#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'ResourceGroupsTagInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsTagInput(obj: ResourceGroupsTagInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsTagOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsTagOutput(obj: ResourceGroupsTagOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ResourceGroupsUngroupResourcesInput
 */
export interface ResourceGroupsUngroupResourcesInput {
  /**
   * @schema ResourceGroupsUngroupResourcesInput#Group
   */
  readonly group?: string;

  /**
   * @schema ResourceGroupsUngroupResourcesInput#ResourceArns
   */
  readonly resourceArns?: string[];

}

/**
 * Converts an object of type 'ResourceGroupsUngroupResourcesInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsUngroupResourcesInput(obj: ResourceGroupsUngroupResourcesInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Group': obj.group,
    'ResourceArns': obj.resourceArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema ResourceGroupsUngroupResourcesOutput#Pending
   */
  readonly pending?: ResourceGroupsPendingResource[];

}

/**
 * Converts an object of type 'ResourceGroupsUngroupResourcesOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsUngroupResourcesOutput(obj: ResourceGroupsUngroupResourcesOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Succeeded': obj.succeeded?.map(y => y),
    'Failed': obj.failed?.map(y => toJson_ResourceGroupsFailedResource(y)),
    'Pending': obj.pending?.map(y => toJson_ResourceGroupsPendingResource(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ResourceGroupsUntagInput
 */
export interface ResourceGroupsUntagInput {
  /**
   * @schema ResourceGroupsUntagInput#Arn
   */
  readonly arn?: string;

  /**
   * @schema ResourceGroupsUntagInput#Keys
   */
  readonly keys?: string[];

}

/**
 * Converts an object of type 'ResourceGroupsUntagInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsUntagInput(obj: ResourceGroupsUntagInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Keys': obj.keys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsUntagOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsUntagOutput(obj: ResourceGroupsUntagOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'Keys': obj.keys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsUpdateGroupInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsUpdateGroupInput(obj: ResourceGroupsUpdateGroupInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'Group': obj.group,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsUpdateGroupOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsUpdateGroupOutput(obj: ResourceGroupsUpdateGroupOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Group': toJson_ResourceGroupsGroup(obj.group),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly resourceQuery?: ResourceGroupsResourceQuery;

}

/**
 * Converts an object of type 'ResourceGroupsUpdateGroupQueryInput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsUpdateGroupQueryInput(obj: ResourceGroupsUpdateGroupQueryInput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'Group': obj.group,
    'ResourceQuery': toJson_ResourceGroupsResourceQuery(obj.resourceQuery),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsUpdateGroupQueryOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsUpdateGroupQueryOutput(obj: ResourceGroupsUpdateGroupQueryOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupQuery': toJson_ResourceGroupsGroupQuery(obj.groupQuery),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ResourceGroupsResourceQuery
 */
export interface ResourceGroupsResourceQuery {
  /**
   * @schema ResourceGroupsResourceQuery#Type
   */
  readonly type?: string;

  /**
   * @schema ResourceGroupsResourceQuery#Query
   */
  readonly query?: string;

}

/**
 * Converts an object of type 'ResourceGroupsResourceQuery' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsResourceQuery(obj: ResourceGroupsResourceQuery | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Query': obj.query,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ResourceGroupsGroupConfigurationItem
 */
export interface ResourceGroupsGroupConfigurationItem {
  /**
   * @schema ResourceGroupsGroupConfigurationItem#Type
   */
  readonly type?: string;

  /**
   * @schema ResourceGroupsGroupConfigurationItem#Parameters
   */
  readonly parameters?: ResourceGroupsGroupConfigurationParameter[];

}

/**
 * Converts an object of type 'ResourceGroupsGroupConfigurationItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsGroupConfigurationItem(obj: ResourceGroupsGroupConfigurationItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Parameters': obj.parameters?.map(y => toJson_ResourceGroupsGroupConfigurationParameter(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ResourceGroupsGroup
 */
export interface ResourceGroupsGroup {
  /**
   * @schema ResourceGroupsGroup#GroupArn
   */
  readonly groupArn?: string;

  /**
   * @schema ResourceGroupsGroup#Name
   */
  readonly name?: string;

  /**
   * @schema ResourceGroupsGroup#Description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'ResourceGroupsGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsGroup(obj: ResourceGroupsGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupArn': obj.groupArn,
    'Name': obj.name,
    'Description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsGroupConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsGroupConfiguration(obj: ResourceGroupsGroupConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Configuration': obj.configuration?.map(y => toJson_ResourceGroupsGroupConfigurationItem(y)),
    'ProposedConfiguration': obj.proposedConfiguration?.map(y => toJson_ResourceGroupsGroupConfigurationItem(y)),
    'Status': obj.status,
    'FailureReason': obj.failureReason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ResourceGroupsGroupQuery
 */
export interface ResourceGroupsGroupQuery {
  /**
   * @schema ResourceGroupsGroupQuery#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema ResourceGroupsGroupQuery#ResourceQuery
   */
  readonly resourceQuery?: ResourceGroupsResourceQuery;

}

/**
 * Converts an object of type 'ResourceGroupsGroupQuery' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsGroupQuery(obj: ResourceGroupsGroupQuery | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'ResourceQuery': toJson_ResourceGroupsResourceQuery(obj.resourceQuery),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsFailedResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsFailedResource(obj: ResourceGroupsFailedResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'ErrorMessage': obj.errorMessage,
    'ErrorCode': obj.errorCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ResourceGroupsPendingResource
 */
export interface ResourceGroupsPendingResource {
  /**
   * @schema ResourceGroupsPendingResource#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'ResourceGroupsPendingResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsPendingResource(obj: ResourceGroupsPendingResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ResourceGroupsResourceFilter
 */
export interface ResourceGroupsResourceFilter {
  /**
   * @schema ResourceGroupsResourceFilter#Name
   */
  readonly name?: string;

  /**
   * @schema ResourceGroupsResourceFilter#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'ResourceGroupsResourceFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsResourceFilter(obj: ResourceGroupsResourceFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ResourceGroupsListGroupResourcesItem
 */
export interface ResourceGroupsListGroupResourcesItem {
  /**
   * @schema ResourceGroupsListGroupResourcesItem#Identifier
   */
  readonly identifier?: ResourceGroupsResourceIdentifier;

  /**
   * @schema ResourceGroupsListGroupResourcesItem#Status
   */
  readonly status?: ResourceGroupsResourceStatus;

}

/**
 * Converts an object of type 'ResourceGroupsListGroupResourcesItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsListGroupResourcesItem(obj: ResourceGroupsListGroupResourcesItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Identifier': toJson_ResourceGroupsResourceIdentifier(obj.identifier),
    'Status': toJson_ResourceGroupsResourceStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsResourceIdentifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsResourceIdentifier(obj: ResourceGroupsResourceIdentifier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'ResourceType': obj.resourceType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsQueryError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsQueryError(obj: ResourceGroupsQueryError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ErrorCode': obj.errorCode,
    'Message': obj.message,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ResourceGroupsGroupFilter
 */
export interface ResourceGroupsGroupFilter {
  /**
   * @schema ResourceGroupsGroupFilter#Name
   */
  readonly name?: string;

  /**
   * @schema ResourceGroupsGroupFilter#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'ResourceGroupsGroupFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsGroupFilter(obj: ResourceGroupsGroupFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'ResourceGroupsGroupIdentifier' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsGroupIdentifier(obj: ResourceGroupsGroupIdentifier | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'GroupArn': obj.groupArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ResourceGroupsGroupConfigurationParameter
 */
export interface ResourceGroupsGroupConfigurationParameter {
  /**
   * @schema ResourceGroupsGroupConfigurationParameter#Name
   */
  readonly name?: string;

  /**
   * @schema ResourceGroupsGroupConfigurationParameter#Values
   */
  readonly values?: string[];

}

/**
 * Converts an object of type 'ResourceGroupsGroupConfigurationParameter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsGroupConfigurationParameter(obj: ResourceGroupsGroupConfigurationParameter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Values': obj.values?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ResourceGroupsResourceStatus
 */
export interface ResourceGroupsResourceStatus {
  /**
   * @schema ResourceGroupsResourceStatus#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'ResourceGroupsResourceStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ResourceGroupsResourceStatus(obj: ResourceGroupsResourceStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
