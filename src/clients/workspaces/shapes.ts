/**
 * @schema WorkSpacesAssociateConnectionAliasRequest
 */
export interface WorkSpacesAssociateConnectionAliasRequest {
  /**
   * @schema WorkSpacesAssociateConnectionAliasRequest#AliasId
   */
  readonly aliasId?: string;

  /**
   * @schema WorkSpacesAssociateConnectionAliasRequest#ResourceId
   */
  readonly resourceId?: string;

}

/**
 * Converts an object of type 'WorkSpacesAssociateConnectionAliasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesAssociateConnectionAliasRequest(obj: WorkSpacesAssociateConnectionAliasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AliasId': obj.aliasId,
    'ResourceId': obj.resourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesAssociateConnectionAliasResult
 */
export interface WorkSpacesAssociateConnectionAliasResult {
  /**
   * @schema WorkSpacesAssociateConnectionAliasResult#ConnectionIdentifier
   */
  readonly connectionIdentifier?: string;

}

/**
 * Converts an object of type 'WorkSpacesAssociateConnectionAliasResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesAssociateConnectionAliasResult(obj: WorkSpacesAssociateConnectionAliasResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionIdentifier': obj.connectionIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesAssociateIpGroupsRequest
 */
export interface WorkSpacesAssociateIpGroupsRequest {
  /**
   * @schema WorkSpacesAssociateIpGroupsRequest#DirectoryId
   */
  readonly directoryId?: string;

  /**
   * @schema WorkSpacesAssociateIpGroupsRequest#GroupIds
   */
  readonly groupIds?: string[];

}

/**
 * Converts an object of type 'WorkSpacesAssociateIpGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesAssociateIpGroupsRequest(obj: WorkSpacesAssociateIpGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryId': obj.directoryId,
    'GroupIds': obj.groupIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesAssociateIpGroupsResult
 */
export interface WorkSpacesAssociateIpGroupsResult {
}

/**
 * Converts an object of type 'WorkSpacesAssociateIpGroupsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesAssociateIpGroupsResult(obj: WorkSpacesAssociateIpGroupsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesAuthorizeIpRulesRequest
 */
export interface WorkSpacesAuthorizeIpRulesRequest {
  /**
   * @schema WorkSpacesAuthorizeIpRulesRequest#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema WorkSpacesAuthorizeIpRulesRequest#UserRules
   */
  readonly userRules?: WorkSpacesIpRuleItem[];

}

/**
 * Converts an object of type 'WorkSpacesAuthorizeIpRulesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesAuthorizeIpRulesRequest(obj: WorkSpacesAuthorizeIpRulesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupId': obj.groupId,
    'UserRules': obj.userRules?.map(y => toJson_WorkSpacesIpRuleItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesAuthorizeIpRulesResult
 */
export interface WorkSpacesAuthorizeIpRulesResult {
}

/**
 * Converts an object of type 'WorkSpacesAuthorizeIpRulesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesAuthorizeIpRulesResult(obj: WorkSpacesAuthorizeIpRulesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesCopyWorkspaceImageRequest
 */
export interface WorkSpacesCopyWorkspaceImageRequest {
  /**
   * @schema WorkSpacesCopyWorkspaceImageRequest#Name
   */
  readonly name?: string;

  /**
   * @schema WorkSpacesCopyWorkspaceImageRequest#Description
   */
  readonly description?: string;

  /**
   * @schema WorkSpacesCopyWorkspaceImageRequest#SourceImageId
   */
  readonly sourceImageId?: string;

  /**
   * @schema WorkSpacesCopyWorkspaceImageRequest#SourceRegion
   */
  readonly sourceRegion?: string;

  /**
   * @schema WorkSpacesCopyWorkspaceImageRequest#Tags
   */
  readonly tags?: WorkSpacesTag[];

}

/**
 * Converts an object of type 'WorkSpacesCopyWorkspaceImageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesCopyWorkspaceImageRequest(obj: WorkSpacesCopyWorkspaceImageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Description': obj.description,
    'SourceImageId': obj.sourceImageId,
    'SourceRegion': obj.sourceRegion,
    'Tags': obj.tags?.map(y => toJson_WorkSpacesTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesCopyWorkspaceImageResult
 */
export interface WorkSpacesCopyWorkspaceImageResult {
  /**
   * @schema WorkSpacesCopyWorkspaceImageResult#ImageId
   */
  readonly imageId?: string;

}

/**
 * Converts an object of type 'WorkSpacesCopyWorkspaceImageResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesCopyWorkspaceImageResult(obj: WorkSpacesCopyWorkspaceImageResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ImageId': obj.imageId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesCreateConnectionAliasRequest
 */
export interface WorkSpacesCreateConnectionAliasRequest {
  /**
   * @schema WorkSpacesCreateConnectionAliasRequest#ConnectionString
   */
  readonly connectionString?: string;

  /**
   * @schema WorkSpacesCreateConnectionAliasRequest#Tags
   */
  readonly tags?: WorkSpacesTag[];

}

/**
 * Converts an object of type 'WorkSpacesCreateConnectionAliasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesCreateConnectionAliasRequest(obj: WorkSpacesCreateConnectionAliasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionString': obj.connectionString,
    'Tags': obj.tags?.map(y => toJson_WorkSpacesTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesCreateConnectionAliasResult
 */
export interface WorkSpacesCreateConnectionAliasResult {
  /**
   * @schema WorkSpacesCreateConnectionAliasResult#AliasId
   */
  readonly aliasId?: string;

}

/**
 * Converts an object of type 'WorkSpacesCreateConnectionAliasResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesCreateConnectionAliasResult(obj: WorkSpacesCreateConnectionAliasResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AliasId': obj.aliasId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesCreateIpGroupRequest
 */
export interface WorkSpacesCreateIpGroupRequest {
  /**
   * @schema WorkSpacesCreateIpGroupRequest#GroupName
   */
  readonly groupName?: string;

  /**
   * @schema WorkSpacesCreateIpGroupRequest#GroupDesc
   */
  readonly groupDesc?: string;

  /**
   * @schema WorkSpacesCreateIpGroupRequest#UserRules
   */
  readonly userRules?: WorkSpacesIpRuleItem[];

  /**
   * @schema WorkSpacesCreateIpGroupRequest#Tags
   */
  readonly tags?: WorkSpacesTag[];

}

/**
 * Converts an object of type 'WorkSpacesCreateIpGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesCreateIpGroupRequest(obj: WorkSpacesCreateIpGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupName': obj.groupName,
    'GroupDesc': obj.groupDesc,
    'UserRules': obj.userRules?.map(y => toJson_WorkSpacesIpRuleItem(y)),
    'Tags': obj.tags?.map(y => toJson_WorkSpacesTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesCreateIpGroupResult
 */
export interface WorkSpacesCreateIpGroupResult {
  /**
   * @schema WorkSpacesCreateIpGroupResult#GroupId
   */
  readonly groupId?: string;

}

/**
 * Converts an object of type 'WorkSpacesCreateIpGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesCreateIpGroupResult(obj: WorkSpacesCreateIpGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupId': obj.groupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesCreateTagsRequest
 */
export interface WorkSpacesCreateTagsRequest {
  /**
   * @schema WorkSpacesCreateTagsRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema WorkSpacesCreateTagsRequest#Tags
   */
  readonly tags?: WorkSpacesTag[];

}

/**
 * Converts an object of type 'WorkSpacesCreateTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesCreateTagsRequest(obj: WorkSpacesCreateTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'Tags': obj.tags?.map(y => toJson_WorkSpacesTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesCreateTagsResult
 */
export interface WorkSpacesCreateTagsResult {
}

/**
 * Converts an object of type 'WorkSpacesCreateTagsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesCreateTagsResult(obj: WorkSpacesCreateTagsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesCreateWorkspaceBundleRequest
 */
export interface WorkSpacesCreateWorkspaceBundleRequest {
  /**
   * @schema WorkSpacesCreateWorkspaceBundleRequest#BundleName
   */
  readonly bundleName?: string;

  /**
   * @schema WorkSpacesCreateWorkspaceBundleRequest#BundleDescription
   */
  readonly bundleDescription?: string;

  /**
   * @schema WorkSpacesCreateWorkspaceBundleRequest#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema WorkSpacesCreateWorkspaceBundleRequest#ComputeType
   */
  readonly computeType?: WorkSpacesComputeType;

  /**
   * @schema WorkSpacesCreateWorkspaceBundleRequest#UserStorage
   */
  readonly userStorage?: WorkSpacesUserStorage;

  /**
   * @schema WorkSpacesCreateWorkspaceBundleRequest#RootStorage
   */
  readonly rootStorage?: WorkSpacesRootStorage;

  /**
   * @schema WorkSpacesCreateWorkspaceBundleRequest#Tags
   */
  readonly tags?: WorkSpacesTag[];

}

/**
 * Converts an object of type 'WorkSpacesCreateWorkspaceBundleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesCreateWorkspaceBundleRequest(obj: WorkSpacesCreateWorkspaceBundleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BundleName': obj.bundleName,
    'BundleDescription': obj.bundleDescription,
    'ImageId': obj.imageId,
    'ComputeType': toJson_WorkSpacesComputeType(obj.computeType),
    'UserStorage': toJson_WorkSpacesUserStorage(obj.userStorage),
    'RootStorage': toJson_WorkSpacesRootStorage(obj.rootStorage),
    'Tags': obj.tags?.map(y => toJson_WorkSpacesTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesCreateWorkspaceBundleResult
 */
export interface WorkSpacesCreateWorkspaceBundleResult {
  /**
   * @schema WorkSpacesCreateWorkspaceBundleResult#WorkspaceBundle
   */
  readonly workspaceBundle?: WorkSpacesWorkspaceBundle;

}

/**
 * Converts an object of type 'WorkSpacesCreateWorkspaceBundleResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesCreateWorkspaceBundleResult(obj: WorkSpacesCreateWorkspaceBundleResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkspaceBundle': toJson_WorkSpacesWorkspaceBundle(obj.workspaceBundle),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesCreateWorkspacesRequest
 */
export interface WorkSpacesCreateWorkspacesRequest {
  /**
   * @schema WorkSpacesCreateWorkspacesRequest#Workspaces
   */
  readonly workspaces?: WorkSpacesWorkspaceRequest[];

}

/**
 * Converts an object of type 'WorkSpacesCreateWorkspacesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesCreateWorkspacesRequest(obj: WorkSpacesCreateWorkspacesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Workspaces': obj.workspaces?.map(y => toJson_WorkSpacesWorkspaceRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesCreateWorkspacesResult
 */
export interface WorkSpacesCreateWorkspacesResult {
  /**
   * @schema WorkSpacesCreateWorkspacesResult#FailedRequests
   */
  readonly failedRequests?: WorkSpacesFailedCreateWorkspaceRequest[];

  /**
   * @schema WorkSpacesCreateWorkspacesResult#PendingRequests
   */
  readonly pendingRequests?: WorkSpacesWorkspace[];

}

/**
 * Converts an object of type 'WorkSpacesCreateWorkspacesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesCreateWorkspacesResult(obj: WorkSpacesCreateWorkspacesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FailedRequests': obj.failedRequests?.map(y => toJson_WorkSpacesFailedCreateWorkspaceRequest(y)),
    'PendingRequests': obj.pendingRequests?.map(y => toJson_WorkSpacesWorkspace(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDeleteConnectionAliasRequest
 */
export interface WorkSpacesDeleteConnectionAliasRequest {
  /**
   * @schema WorkSpacesDeleteConnectionAliasRequest#AliasId
   */
  readonly aliasId?: string;

}

/**
 * Converts an object of type 'WorkSpacesDeleteConnectionAliasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDeleteConnectionAliasRequest(obj: WorkSpacesDeleteConnectionAliasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AliasId': obj.aliasId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDeleteConnectionAliasResult
 */
export interface WorkSpacesDeleteConnectionAliasResult {
}

/**
 * Converts an object of type 'WorkSpacesDeleteConnectionAliasResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDeleteConnectionAliasResult(obj: WorkSpacesDeleteConnectionAliasResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDeleteIpGroupRequest
 */
export interface WorkSpacesDeleteIpGroupRequest {
  /**
   * @schema WorkSpacesDeleteIpGroupRequest#GroupId
   */
  readonly groupId?: string;

}

/**
 * Converts an object of type 'WorkSpacesDeleteIpGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDeleteIpGroupRequest(obj: WorkSpacesDeleteIpGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupId': obj.groupId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDeleteIpGroupResult
 */
export interface WorkSpacesDeleteIpGroupResult {
}

/**
 * Converts an object of type 'WorkSpacesDeleteIpGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDeleteIpGroupResult(obj: WorkSpacesDeleteIpGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDeleteTagsRequest
 */
export interface WorkSpacesDeleteTagsRequest {
  /**
   * @schema WorkSpacesDeleteTagsRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema WorkSpacesDeleteTagsRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'WorkSpacesDeleteTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDeleteTagsRequest(obj: WorkSpacesDeleteTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDeleteTagsResult
 */
export interface WorkSpacesDeleteTagsResult {
}

/**
 * Converts an object of type 'WorkSpacesDeleteTagsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDeleteTagsResult(obj: WorkSpacesDeleteTagsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDeleteWorkspaceBundleRequest
 */
export interface WorkSpacesDeleteWorkspaceBundleRequest {
  /**
   * @schema WorkSpacesDeleteWorkspaceBundleRequest#BundleId
   */
  readonly bundleId?: string;

}

/**
 * Converts an object of type 'WorkSpacesDeleteWorkspaceBundleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDeleteWorkspaceBundleRequest(obj: WorkSpacesDeleteWorkspaceBundleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BundleId': obj.bundleId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDeleteWorkspaceBundleResult
 */
export interface WorkSpacesDeleteWorkspaceBundleResult {
}

/**
 * Converts an object of type 'WorkSpacesDeleteWorkspaceBundleResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDeleteWorkspaceBundleResult(obj: WorkSpacesDeleteWorkspaceBundleResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDeleteWorkspaceImageRequest
 */
export interface WorkSpacesDeleteWorkspaceImageRequest {
  /**
   * @schema WorkSpacesDeleteWorkspaceImageRequest#ImageId
   */
  readonly imageId?: string;

}

/**
 * Converts an object of type 'WorkSpacesDeleteWorkspaceImageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDeleteWorkspaceImageRequest(obj: WorkSpacesDeleteWorkspaceImageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ImageId': obj.imageId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDeleteWorkspaceImageResult
 */
export interface WorkSpacesDeleteWorkspaceImageResult {
}

/**
 * Converts an object of type 'WorkSpacesDeleteWorkspaceImageResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDeleteWorkspaceImageResult(obj: WorkSpacesDeleteWorkspaceImageResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDeregisterWorkspaceDirectoryRequest
 */
export interface WorkSpacesDeregisterWorkspaceDirectoryRequest {
  /**
   * @schema WorkSpacesDeregisterWorkspaceDirectoryRequest#DirectoryId
   */
  readonly directoryId?: string;

}

/**
 * Converts an object of type 'WorkSpacesDeregisterWorkspaceDirectoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDeregisterWorkspaceDirectoryRequest(obj: WorkSpacesDeregisterWorkspaceDirectoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryId': obj.directoryId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDeregisterWorkspaceDirectoryResult
 */
export interface WorkSpacesDeregisterWorkspaceDirectoryResult {
}

/**
 * Converts an object of type 'WorkSpacesDeregisterWorkspaceDirectoryResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDeregisterWorkspaceDirectoryResult(obj: WorkSpacesDeregisterWorkspaceDirectoryResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDescribeAccountRequest
 */
export interface WorkSpacesDescribeAccountRequest {
}

/**
 * Converts an object of type 'WorkSpacesDescribeAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDescribeAccountRequest(obj: WorkSpacesDescribeAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDescribeAccountResult
 */
export interface WorkSpacesDescribeAccountResult {
  /**
   * @schema WorkSpacesDescribeAccountResult#DedicatedTenancySupport
   */
  readonly dedicatedTenancySupport?: string;

  /**
   * @schema WorkSpacesDescribeAccountResult#DedicatedTenancyManagementCidrRange
   */
  readonly dedicatedTenancyManagementCidrRange?: string;

}

/**
 * Converts an object of type 'WorkSpacesDescribeAccountResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDescribeAccountResult(obj: WorkSpacesDescribeAccountResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DedicatedTenancySupport': obj.dedicatedTenancySupport,
    'DedicatedTenancyManagementCidrRange': obj.dedicatedTenancyManagementCidrRange,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDescribeAccountModificationsRequest
 */
export interface WorkSpacesDescribeAccountModificationsRequest {
  /**
   * @schema WorkSpacesDescribeAccountModificationsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WorkSpacesDescribeAccountModificationsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDescribeAccountModificationsRequest(obj: WorkSpacesDescribeAccountModificationsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDescribeAccountModificationsResult
 */
export interface WorkSpacesDescribeAccountModificationsResult {
  /**
   * @schema WorkSpacesDescribeAccountModificationsResult#AccountModifications
   */
  readonly accountModifications?: WorkSpacesAccountModification[];

  /**
   * @schema WorkSpacesDescribeAccountModificationsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WorkSpacesDescribeAccountModificationsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDescribeAccountModificationsResult(obj: WorkSpacesDescribeAccountModificationsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AccountModifications': obj.accountModifications?.map(y => toJson_WorkSpacesAccountModification(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDescribeClientPropertiesRequest
 */
export interface WorkSpacesDescribeClientPropertiesRequest {
  /**
   * @schema WorkSpacesDescribeClientPropertiesRequest#ResourceIds
   */
  readonly resourceIds?: string[];

}

/**
 * Converts an object of type 'WorkSpacesDescribeClientPropertiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDescribeClientPropertiesRequest(obj: WorkSpacesDescribeClientPropertiesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceIds': obj.resourceIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDescribeClientPropertiesResult
 */
export interface WorkSpacesDescribeClientPropertiesResult {
  /**
   * @schema WorkSpacesDescribeClientPropertiesResult#ClientPropertiesList
   */
  readonly clientPropertiesList?: WorkSpacesClientPropertiesResult[];

}

/**
 * Converts an object of type 'WorkSpacesDescribeClientPropertiesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDescribeClientPropertiesResult(obj: WorkSpacesDescribeClientPropertiesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ClientPropertiesList': obj.clientPropertiesList?.map(y => toJson_WorkSpacesClientPropertiesResult(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDescribeConnectionAliasPermissionsRequest
 */
export interface WorkSpacesDescribeConnectionAliasPermissionsRequest {
  /**
   * @schema WorkSpacesDescribeConnectionAliasPermissionsRequest#AliasId
   */
  readonly aliasId?: string;

  /**
   * @schema WorkSpacesDescribeConnectionAliasPermissionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkSpacesDescribeConnectionAliasPermissionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'WorkSpacesDescribeConnectionAliasPermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDescribeConnectionAliasPermissionsRequest(obj: WorkSpacesDescribeConnectionAliasPermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AliasId': obj.aliasId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDescribeConnectionAliasPermissionsResult
 */
export interface WorkSpacesDescribeConnectionAliasPermissionsResult {
  /**
   * @schema WorkSpacesDescribeConnectionAliasPermissionsResult#AliasId
   */
  readonly aliasId?: string;

  /**
   * @schema WorkSpacesDescribeConnectionAliasPermissionsResult#ConnectionAliasPermissions
   */
  readonly connectionAliasPermissions?: WorkSpacesConnectionAliasPermission[];

  /**
   * @schema WorkSpacesDescribeConnectionAliasPermissionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WorkSpacesDescribeConnectionAliasPermissionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDescribeConnectionAliasPermissionsResult(obj: WorkSpacesDescribeConnectionAliasPermissionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AliasId': obj.aliasId,
    'ConnectionAliasPermissions': obj.connectionAliasPermissions?.map(y => toJson_WorkSpacesConnectionAliasPermission(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDescribeConnectionAliasesRequest
 */
export interface WorkSpacesDescribeConnectionAliasesRequest {
  /**
   * @schema WorkSpacesDescribeConnectionAliasesRequest#AliasIds
   */
  readonly aliasIds?: string[];

  /**
   * @schema WorkSpacesDescribeConnectionAliasesRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema WorkSpacesDescribeConnectionAliasesRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema WorkSpacesDescribeConnectionAliasesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WorkSpacesDescribeConnectionAliasesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDescribeConnectionAliasesRequest(obj: WorkSpacesDescribeConnectionAliasesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AliasIds': obj.aliasIds?.map(y => y),
    'ResourceId': obj.resourceId,
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDescribeConnectionAliasesResult
 */
export interface WorkSpacesDescribeConnectionAliasesResult {
  /**
   * @schema WorkSpacesDescribeConnectionAliasesResult#ConnectionAliases
   */
  readonly connectionAliases?: WorkSpacesConnectionAlias[];

  /**
   * @schema WorkSpacesDescribeConnectionAliasesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WorkSpacesDescribeConnectionAliasesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDescribeConnectionAliasesResult(obj: WorkSpacesDescribeConnectionAliasesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionAliases': obj.connectionAliases?.map(y => toJson_WorkSpacesConnectionAlias(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDescribeIpGroupsRequest
 */
export interface WorkSpacesDescribeIpGroupsRequest {
  /**
   * @schema WorkSpacesDescribeIpGroupsRequest#GroupIds
   */
  readonly groupIds?: string[];

  /**
   * @schema WorkSpacesDescribeIpGroupsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkSpacesDescribeIpGroupsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'WorkSpacesDescribeIpGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDescribeIpGroupsRequest(obj: WorkSpacesDescribeIpGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupIds': obj.groupIds?.map(y => y),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDescribeIpGroupsResult
 */
export interface WorkSpacesDescribeIpGroupsResult {
  /**
   * @schema WorkSpacesDescribeIpGroupsResult#Result
   */
  readonly result?: WorkSpacesWorkspacesIpGroup[];

  /**
   * @schema WorkSpacesDescribeIpGroupsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WorkSpacesDescribeIpGroupsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDescribeIpGroupsResult(obj: WorkSpacesDescribeIpGroupsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Result': obj.result?.map(y => toJson_WorkSpacesWorkspacesIpGroup(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDescribeTagsRequest
 */
export interface WorkSpacesDescribeTagsRequest {
  /**
   * @schema WorkSpacesDescribeTagsRequest#ResourceId
   */
  readonly resourceId?: string;

}

/**
 * Converts an object of type 'WorkSpacesDescribeTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDescribeTagsRequest(obj: WorkSpacesDescribeTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDescribeTagsResult
 */
export interface WorkSpacesDescribeTagsResult {
  /**
   * @schema WorkSpacesDescribeTagsResult#TagList
   */
  readonly tagList?: WorkSpacesTag[];

}

/**
 * Converts an object of type 'WorkSpacesDescribeTagsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDescribeTagsResult(obj: WorkSpacesDescribeTagsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TagList': obj.tagList?.map(y => toJson_WorkSpacesTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDescribeWorkspaceBundlesRequest
 */
export interface WorkSpacesDescribeWorkspaceBundlesRequest {
  /**
   * @schema WorkSpacesDescribeWorkspaceBundlesRequest#BundleIds
   */
  readonly bundleIds?: string[];

  /**
   * @schema WorkSpacesDescribeWorkspaceBundlesRequest#Owner
   */
  readonly owner?: string;

  /**
   * @schema WorkSpacesDescribeWorkspaceBundlesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WorkSpacesDescribeWorkspaceBundlesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDescribeWorkspaceBundlesRequest(obj: WorkSpacesDescribeWorkspaceBundlesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BundleIds': obj.bundleIds?.map(y => y),
    'Owner': obj.owner,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDescribeWorkspaceBundlesResult
 */
export interface WorkSpacesDescribeWorkspaceBundlesResult {
  /**
   * @schema WorkSpacesDescribeWorkspaceBundlesResult#Bundles
   */
  readonly bundles?: WorkSpacesWorkspaceBundle[];

  /**
   * @schema WorkSpacesDescribeWorkspaceBundlesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WorkSpacesDescribeWorkspaceBundlesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDescribeWorkspaceBundlesResult(obj: WorkSpacesDescribeWorkspaceBundlesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bundles': obj.bundles?.map(y => toJson_WorkSpacesWorkspaceBundle(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDescribeWorkspaceDirectoriesRequest
 */
export interface WorkSpacesDescribeWorkspaceDirectoriesRequest {
  /**
   * @schema WorkSpacesDescribeWorkspaceDirectoriesRequest#DirectoryIds
   */
  readonly directoryIds?: string[];

  /**
   * @schema WorkSpacesDescribeWorkspaceDirectoriesRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema WorkSpacesDescribeWorkspaceDirectoriesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WorkSpacesDescribeWorkspaceDirectoriesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDescribeWorkspaceDirectoriesRequest(obj: WorkSpacesDescribeWorkspaceDirectoriesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryIds': obj.directoryIds?.map(y => y),
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDescribeWorkspaceDirectoriesResult
 */
export interface WorkSpacesDescribeWorkspaceDirectoriesResult {
  /**
   * @schema WorkSpacesDescribeWorkspaceDirectoriesResult#Directories
   */
  readonly directories?: WorkSpacesWorkspaceDirectory[];

  /**
   * @schema WorkSpacesDescribeWorkspaceDirectoriesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WorkSpacesDescribeWorkspaceDirectoriesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDescribeWorkspaceDirectoriesResult(obj: WorkSpacesDescribeWorkspaceDirectoriesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Directories': obj.directories?.map(y => toJson_WorkSpacesWorkspaceDirectory(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDescribeWorkspaceImagePermissionsRequest
 */
export interface WorkSpacesDescribeWorkspaceImagePermissionsRequest {
  /**
   * @schema WorkSpacesDescribeWorkspaceImagePermissionsRequest#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema WorkSpacesDescribeWorkspaceImagePermissionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkSpacesDescribeWorkspaceImagePermissionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'WorkSpacesDescribeWorkspaceImagePermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDescribeWorkspaceImagePermissionsRequest(obj: WorkSpacesDescribeWorkspaceImagePermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ImageId': obj.imageId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDescribeWorkspaceImagePermissionsResult
 */
export interface WorkSpacesDescribeWorkspaceImagePermissionsResult {
  /**
   * @schema WorkSpacesDescribeWorkspaceImagePermissionsResult#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema WorkSpacesDescribeWorkspaceImagePermissionsResult#ImagePermissions
   */
  readonly imagePermissions?: WorkSpacesImagePermission[];

  /**
   * @schema WorkSpacesDescribeWorkspaceImagePermissionsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WorkSpacesDescribeWorkspaceImagePermissionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDescribeWorkspaceImagePermissionsResult(obj: WorkSpacesDescribeWorkspaceImagePermissionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ImageId': obj.imageId,
    'ImagePermissions': obj.imagePermissions?.map(y => toJson_WorkSpacesImagePermission(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDescribeWorkspaceImagesRequest
 */
export interface WorkSpacesDescribeWorkspaceImagesRequest {
  /**
   * @schema WorkSpacesDescribeWorkspaceImagesRequest#ImageIds
   */
  readonly imageIds?: string[];

  /**
   * @schema WorkSpacesDescribeWorkspaceImagesRequest#ImageType
   */
  readonly imageType?: string;

  /**
   * @schema WorkSpacesDescribeWorkspaceImagesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema WorkSpacesDescribeWorkspaceImagesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'WorkSpacesDescribeWorkspaceImagesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDescribeWorkspaceImagesRequest(obj: WorkSpacesDescribeWorkspaceImagesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ImageIds': obj.imageIds?.map(y => y),
    'ImageType': obj.imageType,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDescribeWorkspaceImagesResult
 */
export interface WorkSpacesDescribeWorkspaceImagesResult {
  /**
   * @schema WorkSpacesDescribeWorkspaceImagesResult#Images
   */
  readonly images?: WorkSpacesWorkspaceImage[];

  /**
   * @schema WorkSpacesDescribeWorkspaceImagesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WorkSpacesDescribeWorkspaceImagesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDescribeWorkspaceImagesResult(obj: WorkSpacesDescribeWorkspaceImagesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Images': obj.images?.map(y => toJson_WorkSpacesWorkspaceImage(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDescribeWorkspaceSnapshotsRequest
 */
export interface WorkSpacesDescribeWorkspaceSnapshotsRequest {
  /**
   * @schema WorkSpacesDescribeWorkspaceSnapshotsRequest#WorkspaceId
   */
  readonly workspaceId?: string;

}

/**
 * Converts an object of type 'WorkSpacesDescribeWorkspaceSnapshotsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDescribeWorkspaceSnapshotsRequest(obj: WorkSpacesDescribeWorkspaceSnapshotsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkspaceId': obj.workspaceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDescribeWorkspaceSnapshotsResult
 */
export interface WorkSpacesDescribeWorkspaceSnapshotsResult {
  /**
   * @schema WorkSpacesDescribeWorkspaceSnapshotsResult#RebuildSnapshots
   */
  readonly rebuildSnapshots?: WorkSpacesSnapshot[];

  /**
   * @schema WorkSpacesDescribeWorkspaceSnapshotsResult#RestoreSnapshots
   */
  readonly restoreSnapshots?: WorkSpacesSnapshot[];

}

/**
 * Converts an object of type 'WorkSpacesDescribeWorkspaceSnapshotsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDescribeWorkspaceSnapshotsResult(obj: WorkSpacesDescribeWorkspaceSnapshotsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RebuildSnapshots': obj.rebuildSnapshots?.map(y => toJson_WorkSpacesSnapshot(y)),
    'RestoreSnapshots': obj.restoreSnapshots?.map(y => toJson_WorkSpacesSnapshot(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDescribeWorkspacesRequest
 */
export interface WorkSpacesDescribeWorkspacesRequest {
  /**
   * @schema WorkSpacesDescribeWorkspacesRequest#WorkspaceIds
   */
  readonly workspaceIds?: string[];

  /**
   * @schema WorkSpacesDescribeWorkspacesRequest#DirectoryId
   */
  readonly directoryId?: string;

  /**
   * @schema WorkSpacesDescribeWorkspacesRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema WorkSpacesDescribeWorkspacesRequest#BundleId
   */
  readonly bundleId?: string;

  /**
   * @schema WorkSpacesDescribeWorkspacesRequest#Limit
   */
  readonly limit?: number;

  /**
   * @schema WorkSpacesDescribeWorkspacesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WorkSpacesDescribeWorkspacesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDescribeWorkspacesRequest(obj: WorkSpacesDescribeWorkspacesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkspaceIds': obj.workspaceIds?.map(y => y),
    'DirectoryId': obj.directoryId,
    'UserName': obj.userName,
    'BundleId': obj.bundleId,
    'Limit': obj.limit,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDescribeWorkspacesResult
 */
export interface WorkSpacesDescribeWorkspacesResult {
  /**
   * @schema WorkSpacesDescribeWorkspacesResult#Workspaces
   */
  readonly workspaces?: WorkSpacesWorkspace[];

  /**
   * @schema WorkSpacesDescribeWorkspacesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WorkSpacesDescribeWorkspacesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDescribeWorkspacesResult(obj: WorkSpacesDescribeWorkspacesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Workspaces': obj.workspaces?.map(y => toJson_WorkSpacesWorkspace(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDescribeWorkspacesConnectionStatusRequest
 */
export interface WorkSpacesDescribeWorkspacesConnectionStatusRequest {
  /**
   * @schema WorkSpacesDescribeWorkspacesConnectionStatusRequest#WorkspaceIds
   */
  readonly workspaceIds?: string[];

  /**
   * @schema WorkSpacesDescribeWorkspacesConnectionStatusRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WorkSpacesDescribeWorkspacesConnectionStatusRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDescribeWorkspacesConnectionStatusRequest(obj: WorkSpacesDescribeWorkspacesConnectionStatusRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkspaceIds': obj.workspaceIds?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDescribeWorkspacesConnectionStatusResult
 */
export interface WorkSpacesDescribeWorkspacesConnectionStatusResult {
  /**
   * @schema WorkSpacesDescribeWorkspacesConnectionStatusResult#WorkspacesConnectionStatus
   */
  readonly workspacesConnectionStatus?: WorkSpacesWorkspaceConnectionStatus[];

  /**
   * @schema WorkSpacesDescribeWorkspacesConnectionStatusResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WorkSpacesDescribeWorkspacesConnectionStatusResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDescribeWorkspacesConnectionStatusResult(obj: WorkSpacesDescribeWorkspacesConnectionStatusResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkspacesConnectionStatus': obj.workspacesConnectionStatus?.map(y => toJson_WorkSpacesWorkspaceConnectionStatus(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDisassociateConnectionAliasRequest
 */
export interface WorkSpacesDisassociateConnectionAliasRequest {
  /**
   * @schema WorkSpacesDisassociateConnectionAliasRequest#AliasId
   */
  readonly aliasId?: string;

}

/**
 * Converts an object of type 'WorkSpacesDisassociateConnectionAliasRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDisassociateConnectionAliasRequest(obj: WorkSpacesDisassociateConnectionAliasRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AliasId': obj.aliasId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDisassociateConnectionAliasResult
 */
export interface WorkSpacesDisassociateConnectionAliasResult {
}

/**
 * Converts an object of type 'WorkSpacesDisassociateConnectionAliasResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDisassociateConnectionAliasResult(obj: WorkSpacesDisassociateConnectionAliasResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDisassociateIpGroupsRequest
 */
export interface WorkSpacesDisassociateIpGroupsRequest {
  /**
   * @schema WorkSpacesDisassociateIpGroupsRequest#DirectoryId
   */
  readonly directoryId?: string;

  /**
   * @schema WorkSpacesDisassociateIpGroupsRequest#GroupIds
   */
  readonly groupIds?: string[];

}

/**
 * Converts an object of type 'WorkSpacesDisassociateIpGroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDisassociateIpGroupsRequest(obj: WorkSpacesDisassociateIpGroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryId': obj.directoryId,
    'GroupIds': obj.groupIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDisassociateIpGroupsResult
 */
export interface WorkSpacesDisassociateIpGroupsResult {
}

/**
 * Converts an object of type 'WorkSpacesDisassociateIpGroupsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDisassociateIpGroupsResult(obj: WorkSpacesDisassociateIpGroupsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesImportWorkspaceImageRequest
 */
export interface WorkSpacesImportWorkspaceImageRequest {
  /**
   * @schema WorkSpacesImportWorkspaceImageRequest#Ec2ImageId
   */
  readonly ec2ImageId?: string;

  /**
   * @schema WorkSpacesImportWorkspaceImageRequest#IngestionProcess
   */
  readonly ingestionProcess?: string;

  /**
   * @schema WorkSpacesImportWorkspaceImageRequest#ImageName
   */
  readonly imageName?: string;

  /**
   * @schema WorkSpacesImportWorkspaceImageRequest#ImageDescription
   */
  readonly imageDescription?: string;

  /**
   * @schema WorkSpacesImportWorkspaceImageRequest#Tags
   */
  readonly tags?: WorkSpacesTag[];

  /**
   * @schema WorkSpacesImportWorkspaceImageRequest#Applications
   */
  readonly applications?: string[];

}

/**
 * Converts an object of type 'WorkSpacesImportWorkspaceImageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesImportWorkspaceImageRequest(obj: WorkSpacesImportWorkspaceImageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Ec2ImageId': obj.ec2ImageId,
    'IngestionProcess': obj.ingestionProcess,
    'ImageName': obj.imageName,
    'ImageDescription': obj.imageDescription,
    'Tags': obj.tags?.map(y => toJson_WorkSpacesTag(y)),
    'Applications': obj.applications?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesImportWorkspaceImageResult
 */
export interface WorkSpacesImportWorkspaceImageResult {
  /**
   * @schema WorkSpacesImportWorkspaceImageResult#ImageId
   */
  readonly imageId?: string;

}

/**
 * Converts an object of type 'WorkSpacesImportWorkspaceImageResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesImportWorkspaceImageResult(obj: WorkSpacesImportWorkspaceImageResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ImageId': obj.imageId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesListAvailableManagementCidrRangesRequest
 */
export interface WorkSpacesListAvailableManagementCidrRangesRequest {
  /**
   * @schema WorkSpacesListAvailableManagementCidrRangesRequest#ManagementCidrRangeConstraint
   */
  readonly managementCidrRangeConstraint?: string;

  /**
   * @schema WorkSpacesListAvailableManagementCidrRangesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema WorkSpacesListAvailableManagementCidrRangesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WorkSpacesListAvailableManagementCidrRangesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesListAvailableManagementCidrRangesRequest(obj: WorkSpacesListAvailableManagementCidrRangesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ManagementCidrRangeConstraint': obj.managementCidrRangeConstraint,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesListAvailableManagementCidrRangesResult
 */
export interface WorkSpacesListAvailableManagementCidrRangesResult {
  /**
   * @schema WorkSpacesListAvailableManagementCidrRangesResult#ManagementCidrRanges
   */
  readonly managementCidrRanges?: string[];

  /**
   * @schema WorkSpacesListAvailableManagementCidrRangesResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'WorkSpacesListAvailableManagementCidrRangesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesListAvailableManagementCidrRangesResult(obj: WorkSpacesListAvailableManagementCidrRangesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ManagementCidrRanges': obj.managementCidrRanges?.map(y => y),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesMigrateWorkspaceRequest
 */
export interface WorkSpacesMigrateWorkspaceRequest {
  /**
   * @schema WorkSpacesMigrateWorkspaceRequest#SourceWorkspaceId
   */
  readonly sourceWorkspaceId?: string;

  /**
   * @schema WorkSpacesMigrateWorkspaceRequest#BundleId
   */
  readonly bundleId?: string;

}

/**
 * Converts an object of type 'WorkSpacesMigrateWorkspaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesMigrateWorkspaceRequest(obj: WorkSpacesMigrateWorkspaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceWorkspaceId': obj.sourceWorkspaceId,
    'BundleId': obj.bundleId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesMigrateWorkspaceResult
 */
export interface WorkSpacesMigrateWorkspaceResult {
  /**
   * @schema WorkSpacesMigrateWorkspaceResult#SourceWorkspaceId
   */
  readonly sourceWorkspaceId?: string;

  /**
   * @schema WorkSpacesMigrateWorkspaceResult#TargetWorkspaceId
   */
  readonly targetWorkspaceId?: string;

}

/**
 * Converts an object of type 'WorkSpacesMigrateWorkspaceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesMigrateWorkspaceResult(obj: WorkSpacesMigrateWorkspaceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceWorkspaceId': obj.sourceWorkspaceId,
    'TargetWorkspaceId': obj.targetWorkspaceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesModifyAccountRequest
 */
export interface WorkSpacesModifyAccountRequest {
  /**
   * @schema WorkSpacesModifyAccountRequest#DedicatedTenancySupport
   */
  readonly dedicatedTenancySupport?: string;

  /**
   * @schema WorkSpacesModifyAccountRequest#DedicatedTenancyManagementCidrRange
   */
  readonly dedicatedTenancyManagementCidrRange?: string;

}

/**
 * Converts an object of type 'WorkSpacesModifyAccountRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesModifyAccountRequest(obj: WorkSpacesModifyAccountRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DedicatedTenancySupport': obj.dedicatedTenancySupport,
    'DedicatedTenancyManagementCidrRange': obj.dedicatedTenancyManagementCidrRange,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesModifyAccountResult
 */
export interface WorkSpacesModifyAccountResult {
}

/**
 * Converts an object of type 'WorkSpacesModifyAccountResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesModifyAccountResult(obj: WorkSpacesModifyAccountResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesModifyClientPropertiesRequest
 */
export interface WorkSpacesModifyClientPropertiesRequest {
  /**
   * @schema WorkSpacesModifyClientPropertiesRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema WorkSpacesModifyClientPropertiesRequest#ClientProperties
   */
  readonly clientProperties?: WorkSpacesClientProperties;

}

/**
 * Converts an object of type 'WorkSpacesModifyClientPropertiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesModifyClientPropertiesRequest(obj: WorkSpacesModifyClientPropertiesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'ClientProperties': toJson_WorkSpacesClientProperties(obj.clientProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesModifyClientPropertiesResult
 */
export interface WorkSpacesModifyClientPropertiesResult {
}

/**
 * Converts an object of type 'WorkSpacesModifyClientPropertiesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesModifyClientPropertiesResult(obj: WorkSpacesModifyClientPropertiesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesModifySelfservicePermissionsRequest
 */
export interface WorkSpacesModifySelfservicePermissionsRequest {
  /**
   * @schema WorkSpacesModifySelfservicePermissionsRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema WorkSpacesModifySelfservicePermissionsRequest#SelfservicePermissions
   */
  readonly selfservicePermissions?: WorkSpacesSelfservicePermissions;

}

/**
 * Converts an object of type 'WorkSpacesModifySelfservicePermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesModifySelfservicePermissionsRequest(obj: WorkSpacesModifySelfservicePermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'SelfservicePermissions': toJson_WorkSpacesSelfservicePermissions(obj.selfservicePermissions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesModifySelfservicePermissionsResult
 */
export interface WorkSpacesModifySelfservicePermissionsResult {
}

/**
 * Converts an object of type 'WorkSpacesModifySelfservicePermissionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesModifySelfservicePermissionsResult(obj: WorkSpacesModifySelfservicePermissionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesModifyWorkspaceAccessPropertiesRequest
 */
export interface WorkSpacesModifyWorkspaceAccessPropertiesRequest {
  /**
   * @schema WorkSpacesModifyWorkspaceAccessPropertiesRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema WorkSpacesModifyWorkspaceAccessPropertiesRequest#WorkspaceAccessProperties
   */
  readonly workspaceAccessProperties?: WorkSpacesWorkspaceAccessProperties;

}

/**
 * Converts an object of type 'WorkSpacesModifyWorkspaceAccessPropertiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesModifyWorkspaceAccessPropertiesRequest(obj: WorkSpacesModifyWorkspaceAccessPropertiesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'WorkspaceAccessProperties': toJson_WorkSpacesWorkspaceAccessProperties(obj.workspaceAccessProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesModifyWorkspaceAccessPropertiesResult
 */
export interface WorkSpacesModifyWorkspaceAccessPropertiesResult {
}

/**
 * Converts an object of type 'WorkSpacesModifyWorkspaceAccessPropertiesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesModifyWorkspaceAccessPropertiesResult(obj: WorkSpacesModifyWorkspaceAccessPropertiesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesModifyWorkspaceCreationPropertiesRequest
 */
export interface WorkSpacesModifyWorkspaceCreationPropertiesRequest {
  /**
   * @schema WorkSpacesModifyWorkspaceCreationPropertiesRequest#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema WorkSpacesModifyWorkspaceCreationPropertiesRequest#WorkspaceCreationProperties
   */
  readonly workspaceCreationProperties?: WorkSpacesWorkspaceCreationProperties;

}

/**
 * Converts an object of type 'WorkSpacesModifyWorkspaceCreationPropertiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesModifyWorkspaceCreationPropertiesRequest(obj: WorkSpacesModifyWorkspaceCreationPropertiesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'WorkspaceCreationProperties': toJson_WorkSpacesWorkspaceCreationProperties(obj.workspaceCreationProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesModifyWorkspaceCreationPropertiesResult
 */
export interface WorkSpacesModifyWorkspaceCreationPropertiesResult {
}

/**
 * Converts an object of type 'WorkSpacesModifyWorkspaceCreationPropertiesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesModifyWorkspaceCreationPropertiesResult(obj: WorkSpacesModifyWorkspaceCreationPropertiesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesModifyWorkspacePropertiesRequest
 */
export interface WorkSpacesModifyWorkspacePropertiesRequest {
  /**
   * @schema WorkSpacesModifyWorkspacePropertiesRequest#WorkspaceId
   */
  readonly workspaceId?: string;

  /**
   * @schema WorkSpacesModifyWorkspacePropertiesRequest#WorkspaceProperties
   */
  readonly workspaceProperties?: WorkSpacesWorkspaceProperties;

}

/**
 * Converts an object of type 'WorkSpacesModifyWorkspacePropertiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesModifyWorkspacePropertiesRequest(obj: WorkSpacesModifyWorkspacePropertiesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkspaceId': obj.workspaceId,
    'WorkspaceProperties': toJson_WorkSpacesWorkspaceProperties(obj.workspaceProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesModifyWorkspacePropertiesResult
 */
export interface WorkSpacesModifyWorkspacePropertiesResult {
}

/**
 * Converts an object of type 'WorkSpacesModifyWorkspacePropertiesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesModifyWorkspacePropertiesResult(obj: WorkSpacesModifyWorkspacePropertiesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesModifyWorkspaceStateRequest
 */
export interface WorkSpacesModifyWorkspaceStateRequest {
  /**
   * @schema WorkSpacesModifyWorkspaceStateRequest#WorkspaceId
   */
  readonly workspaceId?: string;

  /**
   * @schema WorkSpacesModifyWorkspaceStateRequest#WorkspaceState
   */
  readonly workspaceState?: string;

}

/**
 * Converts an object of type 'WorkSpacesModifyWorkspaceStateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesModifyWorkspaceStateRequest(obj: WorkSpacesModifyWorkspaceStateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkspaceId': obj.workspaceId,
    'WorkspaceState': obj.workspaceState,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesModifyWorkspaceStateResult
 */
export interface WorkSpacesModifyWorkspaceStateResult {
}

/**
 * Converts an object of type 'WorkSpacesModifyWorkspaceStateResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesModifyWorkspaceStateResult(obj: WorkSpacesModifyWorkspaceStateResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesRebootWorkspacesRequest
 */
export interface WorkSpacesRebootWorkspacesRequest {
  /**
   * @schema WorkSpacesRebootWorkspacesRequest#RebootWorkspaceRequests
   */
  readonly rebootWorkspaceRequests?: WorkSpacesRebootRequest[];

}

/**
 * Converts an object of type 'WorkSpacesRebootWorkspacesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesRebootWorkspacesRequest(obj: WorkSpacesRebootWorkspacesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RebootWorkspaceRequests': obj.rebootWorkspaceRequests?.map(y => toJson_WorkSpacesRebootRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesRebootWorkspacesResult
 */
export interface WorkSpacesRebootWorkspacesResult {
  /**
   * @schema WorkSpacesRebootWorkspacesResult#FailedRequests
   */
  readonly failedRequests?: WorkSpacesFailedWorkspaceChangeRequest[];

}

/**
 * Converts an object of type 'WorkSpacesRebootWorkspacesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesRebootWorkspacesResult(obj: WorkSpacesRebootWorkspacesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FailedRequests': obj.failedRequests?.map(y => toJson_WorkSpacesFailedWorkspaceChangeRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesRebuildWorkspacesRequest
 */
export interface WorkSpacesRebuildWorkspacesRequest {
  /**
   * @schema WorkSpacesRebuildWorkspacesRequest#RebuildWorkspaceRequests
   */
  readonly rebuildWorkspaceRequests?: WorkSpacesRebuildRequest[];

}

/**
 * Converts an object of type 'WorkSpacesRebuildWorkspacesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesRebuildWorkspacesRequest(obj: WorkSpacesRebuildWorkspacesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RebuildWorkspaceRequests': obj.rebuildWorkspaceRequests?.map(y => toJson_WorkSpacesRebuildRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesRebuildWorkspacesResult
 */
export interface WorkSpacesRebuildWorkspacesResult {
  /**
   * @schema WorkSpacesRebuildWorkspacesResult#FailedRequests
   */
  readonly failedRequests?: WorkSpacesFailedWorkspaceChangeRequest[];

}

/**
 * Converts an object of type 'WorkSpacesRebuildWorkspacesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesRebuildWorkspacesResult(obj: WorkSpacesRebuildWorkspacesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FailedRequests': obj.failedRequests?.map(y => toJson_WorkSpacesFailedWorkspaceChangeRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesRegisterWorkspaceDirectoryRequest
 */
export interface WorkSpacesRegisterWorkspaceDirectoryRequest {
  /**
   * @schema WorkSpacesRegisterWorkspaceDirectoryRequest#DirectoryId
   */
  readonly directoryId?: string;

  /**
   * @schema WorkSpacesRegisterWorkspaceDirectoryRequest#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema WorkSpacesRegisterWorkspaceDirectoryRequest#EnableWorkDocs
   */
  readonly enableWorkDocs?: boolean;

  /**
   * @schema WorkSpacesRegisterWorkspaceDirectoryRequest#EnableSelfService
   */
  readonly enableSelfService?: boolean;

  /**
   * @schema WorkSpacesRegisterWorkspaceDirectoryRequest#Tenancy
   */
  readonly tenancy?: string;

  /**
   * @schema WorkSpacesRegisterWorkspaceDirectoryRequest#Tags
   */
  readonly tags?: WorkSpacesTag[];

}

/**
 * Converts an object of type 'WorkSpacesRegisterWorkspaceDirectoryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesRegisterWorkspaceDirectoryRequest(obj: WorkSpacesRegisterWorkspaceDirectoryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryId': obj.directoryId,
    'SubnetIds': obj.subnetIds?.map(y => y),
    'EnableWorkDocs': obj.enableWorkDocs,
    'EnableSelfService': obj.enableSelfService,
    'Tenancy': obj.tenancy,
    'Tags': obj.tags?.map(y => toJson_WorkSpacesTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesRegisterWorkspaceDirectoryResult
 */
export interface WorkSpacesRegisterWorkspaceDirectoryResult {
}

/**
 * Converts an object of type 'WorkSpacesRegisterWorkspaceDirectoryResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesRegisterWorkspaceDirectoryResult(obj: WorkSpacesRegisterWorkspaceDirectoryResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesRestoreWorkspaceRequest
 */
export interface WorkSpacesRestoreWorkspaceRequest {
  /**
   * @schema WorkSpacesRestoreWorkspaceRequest#WorkspaceId
   */
  readonly workspaceId?: string;

}

/**
 * Converts an object of type 'WorkSpacesRestoreWorkspaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesRestoreWorkspaceRequest(obj: WorkSpacesRestoreWorkspaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkspaceId': obj.workspaceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesRestoreWorkspaceResult
 */
export interface WorkSpacesRestoreWorkspaceResult {
}

/**
 * Converts an object of type 'WorkSpacesRestoreWorkspaceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesRestoreWorkspaceResult(obj: WorkSpacesRestoreWorkspaceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesRevokeIpRulesRequest
 */
export interface WorkSpacesRevokeIpRulesRequest {
  /**
   * @schema WorkSpacesRevokeIpRulesRequest#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema WorkSpacesRevokeIpRulesRequest#UserRules
   */
  readonly userRules?: string[];

}

/**
 * Converts an object of type 'WorkSpacesRevokeIpRulesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesRevokeIpRulesRequest(obj: WorkSpacesRevokeIpRulesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupId': obj.groupId,
    'UserRules': obj.userRules?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesRevokeIpRulesResult
 */
export interface WorkSpacesRevokeIpRulesResult {
}

/**
 * Converts an object of type 'WorkSpacesRevokeIpRulesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesRevokeIpRulesResult(obj: WorkSpacesRevokeIpRulesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesStartWorkspacesRequest
 */
export interface WorkSpacesStartWorkspacesRequest {
  /**
   * @schema WorkSpacesStartWorkspacesRequest#StartWorkspaceRequests
   */
  readonly startWorkspaceRequests?: WorkSpacesStartRequest[];

}

/**
 * Converts an object of type 'WorkSpacesStartWorkspacesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesStartWorkspacesRequest(obj: WorkSpacesStartWorkspacesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StartWorkspaceRequests': obj.startWorkspaceRequests?.map(y => toJson_WorkSpacesStartRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesStartWorkspacesResult
 */
export interface WorkSpacesStartWorkspacesResult {
  /**
   * @schema WorkSpacesStartWorkspacesResult#FailedRequests
   */
  readonly failedRequests?: WorkSpacesFailedWorkspaceChangeRequest[];

}

/**
 * Converts an object of type 'WorkSpacesStartWorkspacesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesStartWorkspacesResult(obj: WorkSpacesStartWorkspacesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FailedRequests': obj.failedRequests?.map(y => toJson_WorkSpacesFailedWorkspaceChangeRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesStopWorkspacesRequest
 */
export interface WorkSpacesStopWorkspacesRequest {
  /**
   * @schema WorkSpacesStopWorkspacesRequest#StopWorkspaceRequests
   */
  readonly stopWorkspaceRequests?: WorkSpacesStopRequest[];

}

/**
 * Converts an object of type 'WorkSpacesStopWorkspacesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesStopWorkspacesRequest(obj: WorkSpacesStopWorkspacesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StopWorkspaceRequests': obj.stopWorkspaceRequests?.map(y => toJson_WorkSpacesStopRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesStopWorkspacesResult
 */
export interface WorkSpacesStopWorkspacesResult {
  /**
   * @schema WorkSpacesStopWorkspacesResult#FailedRequests
   */
  readonly failedRequests?: WorkSpacesFailedWorkspaceChangeRequest[];

}

/**
 * Converts an object of type 'WorkSpacesStopWorkspacesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesStopWorkspacesResult(obj: WorkSpacesStopWorkspacesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FailedRequests': obj.failedRequests?.map(y => toJson_WorkSpacesFailedWorkspaceChangeRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesTerminateWorkspacesRequest
 */
export interface WorkSpacesTerminateWorkspacesRequest {
  /**
   * @schema WorkSpacesTerminateWorkspacesRequest#TerminateWorkspaceRequests
   */
  readonly terminateWorkspaceRequests?: WorkSpacesTerminateRequest[];

}

/**
 * Converts an object of type 'WorkSpacesTerminateWorkspacesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesTerminateWorkspacesRequest(obj: WorkSpacesTerminateWorkspacesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TerminateWorkspaceRequests': obj.terminateWorkspaceRequests?.map(y => toJson_WorkSpacesTerminateRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesTerminateWorkspacesResult
 */
export interface WorkSpacesTerminateWorkspacesResult {
  /**
   * @schema WorkSpacesTerminateWorkspacesResult#FailedRequests
   */
  readonly failedRequests?: WorkSpacesFailedWorkspaceChangeRequest[];

}

/**
 * Converts an object of type 'WorkSpacesTerminateWorkspacesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesTerminateWorkspacesResult(obj: WorkSpacesTerminateWorkspacesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'FailedRequests': obj.failedRequests?.map(y => toJson_WorkSpacesFailedWorkspaceChangeRequest(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesUpdateConnectionAliasPermissionRequest
 */
export interface WorkSpacesUpdateConnectionAliasPermissionRequest {
  /**
   * @schema WorkSpacesUpdateConnectionAliasPermissionRequest#AliasId
   */
  readonly aliasId?: string;

  /**
   * @schema WorkSpacesUpdateConnectionAliasPermissionRequest#ConnectionAliasPermission
   */
  readonly connectionAliasPermission?: WorkSpacesConnectionAliasPermission;

}

/**
 * Converts an object of type 'WorkSpacesUpdateConnectionAliasPermissionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesUpdateConnectionAliasPermissionRequest(obj: WorkSpacesUpdateConnectionAliasPermissionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AliasId': obj.aliasId,
    'ConnectionAliasPermission': toJson_WorkSpacesConnectionAliasPermission(obj.connectionAliasPermission),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesUpdateConnectionAliasPermissionResult
 */
export interface WorkSpacesUpdateConnectionAliasPermissionResult {
}

/**
 * Converts an object of type 'WorkSpacesUpdateConnectionAliasPermissionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesUpdateConnectionAliasPermissionResult(obj: WorkSpacesUpdateConnectionAliasPermissionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesUpdateRulesOfIpGroupRequest
 */
export interface WorkSpacesUpdateRulesOfIpGroupRequest {
  /**
   * @schema WorkSpacesUpdateRulesOfIpGroupRequest#GroupId
   */
  readonly groupId?: string;

  /**
   * @schema WorkSpacesUpdateRulesOfIpGroupRequest#UserRules
   */
  readonly userRules?: WorkSpacesIpRuleItem[];

}

/**
 * Converts an object of type 'WorkSpacesUpdateRulesOfIpGroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesUpdateRulesOfIpGroupRequest(obj: WorkSpacesUpdateRulesOfIpGroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'GroupId': obj.groupId,
    'UserRules': obj.userRules?.map(y => toJson_WorkSpacesIpRuleItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesUpdateRulesOfIpGroupResult
 */
export interface WorkSpacesUpdateRulesOfIpGroupResult {
}

/**
 * Converts an object of type 'WorkSpacesUpdateRulesOfIpGroupResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesUpdateRulesOfIpGroupResult(obj: WorkSpacesUpdateRulesOfIpGroupResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesUpdateWorkspaceBundleRequest
 */
export interface WorkSpacesUpdateWorkspaceBundleRequest {
  /**
   * @schema WorkSpacesUpdateWorkspaceBundleRequest#BundleId
   */
  readonly bundleId?: string;

  /**
   * @schema WorkSpacesUpdateWorkspaceBundleRequest#ImageId
   */
  readonly imageId?: string;

}

/**
 * Converts an object of type 'WorkSpacesUpdateWorkspaceBundleRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesUpdateWorkspaceBundleRequest(obj: WorkSpacesUpdateWorkspaceBundleRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BundleId': obj.bundleId,
    'ImageId': obj.imageId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesUpdateWorkspaceBundleResult
 */
export interface WorkSpacesUpdateWorkspaceBundleResult {
}

/**
 * Converts an object of type 'WorkSpacesUpdateWorkspaceBundleResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesUpdateWorkspaceBundleResult(obj: WorkSpacesUpdateWorkspaceBundleResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesUpdateWorkspaceImagePermissionRequest
 */
export interface WorkSpacesUpdateWorkspaceImagePermissionRequest {
  /**
   * @schema WorkSpacesUpdateWorkspaceImagePermissionRequest#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema WorkSpacesUpdateWorkspaceImagePermissionRequest#AllowCopyImage
   */
  readonly allowCopyImage?: boolean;

  /**
   * @schema WorkSpacesUpdateWorkspaceImagePermissionRequest#SharedAccountId
   */
  readonly sharedAccountId?: string;

}

/**
 * Converts an object of type 'WorkSpacesUpdateWorkspaceImagePermissionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesUpdateWorkspaceImagePermissionRequest(obj: WorkSpacesUpdateWorkspaceImagePermissionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ImageId': obj.imageId,
    'AllowCopyImage': obj.allowCopyImage,
    'SharedAccountId': obj.sharedAccountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesUpdateWorkspaceImagePermissionResult
 */
export interface WorkSpacesUpdateWorkspaceImagePermissionResult {
}

/**
 * Converts an object of type 'WorkSpacesUpdateWorkspaceImagePermissionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesUpdateWorkspaceImagePermissionResult(obj: WorkSpacesUpdateWorkspaceImagePermissionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesIpRuleItem
 */
export interface WorkSpacesIpRuleItem {
  /**
   * @schema WorkSpacesIpRuleItem#ipRule
   */
  readonly ipRule?: string;

  /**
   * @schema WorkSpacesIpRuleItem#ruleDesc
   */
  readonly ruleDesc?: string;

}

/**
 * Converts an object of type 'WorkSpacesIpRuleItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesIpRuleItem(obj: WorkSpacesIpRuleItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ipRule': obj.ipRule,
    'ruleDesc': obj.ruleDesc,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesTag
 */
export interface WorkSpacesTag {
  /**
   * @schema WorkSpacesTag#Key
   */
  readonly key?: string;

  /**
   * @schema WorkSpacesTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'WorkSpacesTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesTag(obj: WorkSpacesTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesComputeType
 */
export interface WorkSpacesComputeType {
  /**
   * @schema WorkSpacesComputeType#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'WorkSpacesComputeType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesComputeType(obj: WorkSpacesComputeType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesUserStorage
 */
export interface WorkSpacesUserStorage {
  /**
   * @schema WorkSpacesUserStorage#Capacity
   */
  readonly capacity?: string;

}

/**
 * Converts an object of type 'WorkSpacesUserStorage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesUserStorage(obj: WorkSpacesUserStorage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Capacity': obj.capacity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesRootStorage
 */
export interface WorkSpacesRootStorage {
  /**
   * @schema WorkSpacesRootStorage#Capacity
   */
  readonly capacity?: string;

}

/**
 * Converts an object of type 'WorkSpacesRootStorage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesRootStorage(obj: WorkSpacesRootStorage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Capacity': obj.capacity,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesWorkspaceBundle
 */
export interface WorkSpacesWorkspaceBundle {
  /**
   * @schema WorkSpacesWorkspaceBundle#BundleId
   */
  readonly bundleId?: string;

  /**
   * @schema WorkSpacesWorkspaceBundle#Name
   */
  readonly name?: string;

  /**
   * @schema WorkSpacesWorkspaceBundle#Owner
   */
  readonly owner?: string;

  /**
   * @schema WorkSpacesWorkspaceBundle#Description
   */
  readonly description?: string;

  /**
   * @schema WorkSpacesWorkspaceBundle#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema WorkSpacesWorkspaceBundle#RootStorage
   */
  readonly rootStorage?: WorkSpacesRootStorage;

  /**
   * @schema WorkSpacesWorkspaceBundle#UserStorage
   */
  readonly userStorage?: WorkSpacesUserStorage;

  /**
   * @schema WorkSpacesWorkspaceBundle#ComputeType
   */
  readonly computeType?: WorkSpacesComputeType;

  /**
   * @schema WorkSpacesWorkspaceBundle#LastUpdatedTime
   */
  readonly lastUpdatedTime?: string;

  /**
   * @schema WorkSpacesWorkspaceBundle#CreationTime
   */
  readonly creationTime?: string;

}

/**
 * Converts an object of type 'WorkSpacesWorkspaceBundle' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesWorkspaceBundle(obj: WorkSpacesWorkspaceBundle | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BundleId': obj.bundleId,
    'Name': obj.name,
    'Owner': obj.owner,
    'Description': obj.description,
    'ImageId': obj.imageId,
    'RootStorage': toJson_WorkSpacesRootStorage(obj.rootStorage),
    'UserStorage': toJson_WorkSpacesUserStorage(obj.userStorage),
    'ComputeType': toJson_WorkSpacesComputeType(obj.computeType),
    'LastUpdatedTime': obj.lastUpdatedTime,
    'CreationTime': obj.creationTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesWorkspaceRequest
 */
export interface WorkSpacesWorkspaceRequest {
  /**
   * @schema WorkSpacesWorkspaceRequest#DirectoryId
   */
  readonly directoryId?: string;

  /**
   * @schema WorkSpacesWorkspaceRequest#UserName
   */
  readonly userName?: string;

  /**
   * @schema WorkSpacesWorkspaceRequest#BundleId
   */
  readonly bundleId?: string;

  /**
   * @schema WorkSpacesWorkspaceRequest#VolumeEncryptionKey
   */
  readonly volumeEncryptionKey?: string;

  /**
   * @schema WorkSpacesWorkspaceRequest#UserVolumeEncryptionEnabled
   */
  readonly userVolumeEncryptionEnabled?: boolean;

  /**
   * @schema WorkSpacesWorkspaceRequest#RootVolumeEncryptionEnabled
   */
  readonly rootVolumeEncryptionEnabled?: boolean;

  /**
   * @schema WorkSpacesWorkspaceRequest#WorkspaceProperties
   */
  readonly workspaceProperties?: WorkSpacesWorkspaceProperties;

  /**
   * @schema WorkSpacesWorkspaceRequest#Tags
   */
  readonly tags?: WorkSpacesTag[];

}

/**
 * Converts an object of type 'WorkSpacesWorkspaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesWorkspaceRequest(obj: WorkSpacesWorkspaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryId': obj.directoryId,
    'UserName': obj.userName,
    'BundleId': obj.bundleId,
    'VolumeEncryptionKey': obj.volumeEncryptionKey,
    'UserVolumeEncryptionEnabled': obj.userVolumeEncryptionEnabled,
    'RootVolumeEncryptionEnabled': obj.rootVolumeEncryptionEnabled,
    'WorkspaceProperties': toJson_WorkSpacesWorkspaceProperties(obj.workspaceProperties),
    'Tags': obj.tags?.map(y => toJson_WorkSpacesTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesFailedCreateWorkspaceRequest
 */
export interface WorkSpacesFailedCreateWorkspaceRequest {
  /**
   * @schema WorkSpacesFailedCreateWorkspaceRequest#WorkspaceRequest
   */
  readonly workspaceRequest?: WorkSpacesWorkspaceRequest;

  /**
   * @schema WorkSpacesFailedCreateWorkspaceRequest#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema WorkSpacesFailedCreateWorkspaceRequest#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'WorkSpacesFailedCreateWorkspaceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesFailedCreateWorkspaceRequest(obj: WorkSpacesFailedCreateWorkspaceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkspaceRequest': toJson_WorkSpacesWorkspaceRequest(obj.workspaceRequest),
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesWorkspace
 */
export interface WorkSpacesWorkspace {
  /**
   * @schema WorkSpacesWorkspace#WorkspaceId
   */
  readonly workspaceId?: string;

  /**
   * @schema WorkSpacesWorkspace#DirectoryId
   */
  readonly directoryId?: string;

  /**
   * @schema WorkSpacesWorkspace#UserName
   */
  readonly userName?: string;

  /**
   * @schema WorkSpacesWorkspace#IpAddress
   */
  readonly ipAddress?: string;

  /**
   * @schema WorkSpacesWorkspace#State
   */
  readonly state?: string;

  /**
   * @schema WorkSpacesWorkspace#BundleId
   */
  readonly bundleId?: string;

  /**
   * @schema WorkSpacesWorkspace#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema WorkSpacesWorkspace#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema WorkSpacesWorkspace#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema WorkSpacesWorkspace#ComputerName
   */
  readonly computerName?: string;

  /**
   * @schema WorkSpacesWorkspace#VolumeEncryptionKey
   */
  readonly volumeEncryptionKey?: string;

  /**
   * @schema WorkSpacesWorkspace#UserVolumeEncryptionEnabled
   */
  readonly userVolumeEncryptionEnabled?: boolean;

  /**
   * @schema WorkSpacesWorkspace#RootVolumeEncryptionEnabled
   */
  readonly rootVolumeEncryptionEnabled?: boolean;

  /**
   * @schema WorkSpacesWorkspace#WorkspaceProperties
   */
  readonly workspaceProperties?: WorkSpacesWorkspaceProperties;

  /**
   * @schema WorkSpacesWorkspace#ModificationStates
   */
  readonly modificationStates?: WorkSpacesModificationState[];

}

/**
 * Converts an object of type 'WorkSpacesWorkspace' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesWorkspace(obj: WorkSpacesWorkspace | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkspaceId': obj.workspaceId,
    'DirectoryId': obj.directoryId,
    'UserName': obj.userName,
    'IpAddress': obj.ipAddress,
    'State': obj.state,
    'BundleId': obj.bundleId,
    'SubnetId': obj.subnetId,
    'ErrorMessage': obj.errorMessage,
    'ErrorCode': obj.errorCode,
    'ComputerName': obj.computerName,
    'VolumeEncryptionKey': obj.volumeEncryptionKey,
    'UserVolumeEncryptionEnabled': obj.userVolumeEncryptionEnabled,
    'RootVolumeEncryptionEnabled': obj.rootVolumeEncryptionEnabled,
    'WorkspaceProperties': toJson_WorkSpacesWorkspaceProperties(obj.workspaceProperties),
    'ModificationStates': obj.modificationStates?.map(y => toJson_WorkSpacesModificationState(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesAccountModification
 */
export interface WorkSpacesAccountModification {
  /**
   * @schema WorkSpacesAccountModification#ModificationState
   */
  readonly modificationState?: string;

  /**
   * @schema WorkSpacesAccountModification#DedicatedTenancySupport
   */
  readonly dedicatedTenancySupport?: string;

  /**
   * @schema WorkSpacesAccountModification#DedicatedTenancyManagementCidrRange
   */
  readonly dedicatedTenancyManagementCidrRange?: string;

  /**
   * @schema WorkSpacesAccountModification#StartTime
   */
  readonly startTime?: string;

  /**
   * @schema WorkSpacesAccountModification#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema WorkSpacesAccountModification#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'WorkSpacesAccountModification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesAccountModification(obj: WorkSpacesAccountModification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ModificationState': obj.modificationState,
    'DedicatedTenancySupport': obj.dedicatedTenancySupport,
    'DedicatedTenancyManagementCidrRange': obj.dedicatedTenancyManagementCidrRange,
    'StartTime': obj.startTime,
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesClientPropertiesResult
 */
export interface WorkSpacesClientPropertiesResult {
  /**
   * @schema WorkSpacesClientPropertiesResult#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema WorkSpacesClientPropertiesResult#ClientProperties
   */
  readonly clientProperties?: WorkSpacesClientProperties;

}

/**
 * Converts an object of type 'WorkSpacesClientPropertiesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesClientPropertiesResult(obj: WorkSpacesClientPropertiesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceId': obj.resourceId,
    'ClientProperties': toJson_WorkSpacesClientProperties(obj.clientProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesConnectionAliasPermission
 */
export interface WorkSpacesConnectionAliasPermission {
  /**
   * @schema WorkSpacesConnectionAliasPermission#SharedAccountId
   */
  readonly sharedAccountId?: string;

  /**
   * @schema WorkSpacesConnectionAliasPermission#AllowAssociation
   */
  readonly allowAssociation?: boolean;

}

/**
 * Converts an object of type 'WorkSpacesConnectionAliasPermission' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesConnectionAliasPermission(obj: WorkSpacesConnectionAliasPermission | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SharedAccountId': obj.sharedAccountId,
    'AllowAssociation': obj.allowAssociation,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesConnectionAlias
 */
export interface WorkSpacesConnectionAlias {
  /**
   * @schema WorkSpacesConnectionAlias#ConnectionString
   */
  readonly connectionString?: string;

  /**
   * @schema WorkSpacesConnectionAlias#AliasId
   */
  readonly aliasId?: string;

  /**
   * @schema WorkSpacesConnectionAlias#State
   */
  readonly state?: string;

  /**
   * @schema WorkSpacesConnectionAlias#OwnerAccountId
   */
  readonly ownerAccountId?: string;

  /**
   * @schema WorkSpacesConnectionAlias#Associations
   */
  readonly associations?: WorkSpacesConnectionAliasAssociation[];

}

/**
 * Converts an object of type 'WorkSpacesConnectionAlias' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesConnectionAlias(obj: WorkSpacesConnectionAlias | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ConnectionString': obj.connectionString,
    'AliasId': obj.aliasId,
    'State': obj.state,
    'OwnerAccountId': obj.ownerAccountId,
    'Associations': obj.associations?.map(y => toJson_WorkSpacesConnectionAliasAssociation(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesWorkspacesIpGroup
 */
export interface WorkSpacesWorkspacesIpGroup {
  /**
   * @schema WorkSpacesWorkspacesIpGroup#groupId
   */
  readonly groupId?: string;

  /**
   * @schema WorkSpacesWorkspacesIpGroup#groupName
   */
  readonly groupName?: string;

  /**
   * @schema WorkSpacesWorkspacesIpGroup#groupDesc
   */
  readonly groupDesc?: string;

  /**
   * @schema WorkSpacesWorkspacesIpGroup#userRules
   */
  readonly userRules?: WorkSpacesIpRuleItem[];

}

/**
 * Converts an object of type 'WorkSpacesWorkspacesIpGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesWorkspacesIpGroup(obj: WorkSpacesWorkspacesIpGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'groupId': obj.groupId,
    'groupName': obj.groupName,
    'groupDesc': obj.groupDesc,
    'userRules': obj.userRules?.map(y => toJson_WorkSpacesIpRuleItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesWorkspaceDirectory
 */
export interface WorkSpacesWorkspaceDirectory {
  /**
   * @schema WorkSpacesWorkspaceDirectory#DirectoryId
   */
  readonly directoryId?: string;

  /**
   * @schema WorkSpacesWorkspaceDirectory#Alias
   */
  readonly alias?: string;

  /**
   * @schema WorkSpacesWorkspaceDirectory#DirectoryName
   */
  readonly directoryName?: string;

  /**
   * @schema WorkSpacesWorkspaceDirectory#RegistrationCode
   */
  readonly registrationCode?: string;

  /**
   * @schema WorkSpacesWorkspaceDirectory#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema WorkSpacesWorkspaceDirectory#DnsIpAddresses
   */
  readonly dnsIpAddresses?: string[];

  /**
   * @schema WorkSpacesWorkspaceDirectory#CustomerUserName
   */
  readonly customerUserName?: string;

  /**
   * @schema WorkSpacesWorkspaceDirectory#IamRoleId
   */
  readonly iamRoleId?: string;

  /**
   * @schema WorkSpacesWorkspaceDirectory#DirectoryType
   */
  readonly directoryType?: string;

  /**
   * @schema WorkSpacesWorkspaceDirectory#WorkspaceSecurityGroupId
   */
  readonly workspaceSecurityGroupId?: string;

  /**
   * @schema WorkSpacesWorkspaceDirectory#State
   */
  readonly state?: string;

  /**
   * @schema WorkSpacesWorkspaceDirectory#WorkspaceCreationProperties
   */
  readonly workspaceCreationProperties?: WorkSpacesDefaultWorkspaceCreationProperties;

  /**
   * @schema WorkSpacesWorkspaceDirectory#ipGroupIds
   */
  readonly ipGroupIds?: string[];

  /**
   * @schema WorkSpacesWorkspaceDirectory#WorkspaceAccessProperties
   */
  readonly workspaceAccessProperties?: WorkSpacesWorkspaceAccessProperties;

  /**
   * @schema WorkSpacesWorkspaceDirectory#Tenancy
   */
  readonly tenancy?: string;

  /**
   * @schema WorkSpacesWorkspaceDirectory#SelfservicePermissions
   */
  readonly selfservicePermissions?: WorkSpacesSelfservicePermissions;

}

/**
 * Converts an object of type 'WorkSpacesWorkspaceDirectory' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesWorkspaceDirectory(obj: WorkSpacesWorkspaceDirectory | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DirectoryId': obj.directoryId,
    'Alias': obj.alias,
    'DirectoryName': obj.directoryName,
    'RegistrationCode': obj.registrationCode,
    'SubnetIds': obj.subnetIds?.map(y => y),
    'DnsIpAddresses': obj.dnsIpAddresses?.map(y => y),
    'CustomerUserName': obj.customerUserName,
    'IamRoleId': obj.iamRoleId,
    'DirectoryType': obj.directoryType,
    'WorkspaceSecurityGroupId': obj.workspaceSecurityGroupId,
    'State': obj.state,
    'WorkspaceCreationProperties': toJson_WorkSpacesDefaultWorkspaceCreationProperties(obj.workspaceCreationProperties),
    'ipGroupIds': obj.ipGroupIds?.map(y => y),
    'WorkspaceAccessProperties': toJson_WorkSpacesWorkspaceAccessProperties(obj.workspaceAccessProperties),
    'Tenancy': obj.tenancy,
    'SelfservicePermissions': toJson_WorkSpacesSelfservicePermissions(obj.selfservicePermissions),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesImagePermission
 */
export interface WorkSpacesImagePermission {
  /**
   * @schema WorkSpacesImagePermission#SharedAccountId
   */
  readonly sharedAccountId?: string;

}

/**
 * Converts an object of type 'WorkSpacesImagePermission' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesImagePermission(obj: WorkSpacesImagePermission | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SharedAccountId': obj.sharedAccountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesWorkspaceImage
 */
export interface WorkSpacesWorkspaceImage {
  /**
   * @schema WorkSpacesWorkspaceImage#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema WorkSpacesWorkspaceImage#Name
   */
  readonly name?: string;

  /**
   * @schema WorkSpacesWorkspaceImage#Description
   */
  readonly description?: string;

  /**
   * @schema WorkSpacesWorkspaceImage#OperatingSystem
   */
  readonly operatingSystem?: WorkSpacesOperatingSystem;

  /**
   * @schema WorkSpacesWorkspaceImage#State
   */
  readonly state?: string;

  /**
   * @schema WorkSpacesWorkspaceImage#RequiredTenancy
   */
  readonly requiredTenancy?: string;

  /**
   * @schema WorkSpacesWorkspaceImage#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema WorkSpacesWorkspaceImage#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema WorkSpacesWorkspaceImage#Created
   */
  readonly created?: string;

  /**
   * @schema WorkSpacesWorkspaceImage#OwnerAccountId
   */
  readonly ownerAccountId?: string;

}

/**
 * Converts an object of type 'WorkSpacesWorkspaceImage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesWorkspaceImage(obj: WorkSpacesWorkspaceImage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ImageId': obj.imageId,
    'Name': obj.name,
    'Description': obj.description,
    'OperatingSystem': toJson_WorkSpacesOperatingSystem(obj.operatingSystem),
    'State': obj.state,
    'RequiredTenancy': obj.requiredTenancy,
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
    'Created': obj.created,
    'OwnerAccountId': obj.ownerAccountId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesSnapshot
 */
export interface WorkSpacesSnapshot {
  /**
   * @schema WorkSpacesSnapshot#SnapshotTime
   */
  readonly snapshotTime?: string;

}

/**
 * Converts an object of type 'WorkSpacesSnapshot' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesSnapshot(obj: WorkSpacesSnapshot | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotTime': obj.snapshotTime,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesWorkspaceConnectionStatus
 */
export interface WorkSpacesWorkspaceConnectionStatus {
  /**
   * @schema WorkSpacesWorkspaceConnectionStatus#WorkspaceId
   */
  readonly workspaceId?: string;

  /**
   * @schema WorkSpacesWorkspaceConnectionStatus#ConnectionState
   */
  readonly connectionState?: string;

  /**
   * @schema WorkSpacesWorkspaceConnectionStatus#ConnectionStateCheckTimestamp
   */
  readonly connectionStateCheckTimestamp?: string;

  /**
   * @schema WorkSpacesWorkspaceConnectionStatus#LastKnownUserConnectionTimestamp
   */
  readonly lastKnownUserConnectionTimestamp?: string;

}

/**
 * Converts an object of type 'WorkSpacesWorkspaceConnectionStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesWorkspaceConnectionStatus(obj: WorkSpacesWorkspaceConnectionStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkspaceId': obj.workspaceId,
    'ConnectionState': obj.connectionState,
    'ConnectionStateCheckTimestamp': obj.connectionStateCheckTimestamp,
    'LastKnownUserConnectionTimestamp': obj.lastKnownUserConnectionTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesClientProperties
 */
export interface WorkSpacesClientProperties {
  /**
   * @schema WorkSpacesClientProperties#ReconnectEnabled
   */
  readonly reconnectEnabled?: string;

}

/**
 * Converts an object of type 'WorkSpacesClientProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesClientProperties(obj: WorkSpacesClientProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ReconnectEnabled': obj.reconnectEnabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesSelfservicePermissions
 */
export interface WorkSpacesSelfservicePermissions {
  /**
   * @schema WorkSpacesSelfservicePermissions#RestartWorkspace
   */
  readonly restartWorkspace?: string;

  /**
   * @schema WorkSpacesSelfservicePermissions#IncreaseVolumeSize
   */
  readonly increaseVolumeSize?: string;

  /**
   * @schema WorkSpacesSelfservicePermissions#ChangeComputeType
   */
  readonly changeComputeType?: string;

  /**
   * @schema WorkSpacesSelfservicePermissions#SwitchRunningMode
   */
  readonly switchRunningMode?: string;

  /**
   * @schema WorkSpacesSelfservicePermissions#RebuildWorkspace
   */
  readonly rebuildWorkspace?: string;

}

/**
 * Converts an object of type 'WorkSpacesSelfservicePermissions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesSelfservicePermissions(obj: WorkSpacesSelfservicePermissions | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RestartWorkspace': obj.restartWorkspace,
    'IncreaseVolumeSize': obj.increaseVolumeSize,
    'ChangeComputeType': obj.changeComputeType,
    'SwitchRunningMode': obj.switchRunningMode,
    'RebuildWorkspace': obj.rebuildWorkspace,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesWorkspaceAccessProperties
 */
export interface WorkSpacesWorkspaceAccessProperties {
  /**
   * @schema WorkSpacesWorkspaceAccessProperties#DeviceTypeWindows
   */
  readonly deviceTypeWindows?: string;

  /**
   * @schema WorkSpacesWorkspaceAccessProperties#DeviceTypeOsx
   */
  readonly deviceTypeOsx?: string;

  /**
   * @schema WorkSpacesWorkspaceAccessProperties#DeviceTypeWeb
   */
  readonly deviceTypeWeb?: string;

  /**
   * @schema WorkSpacesWorkspaceAccessProperties#DeviceTypeIos
   */
  readonly deviceTypeIos?: string;

  /**
   * @schema WorkSpacesWorkspaceAccessProperties#DeviceTypeAndroid
   */
  readonly deviceTypeAndroid?: string;

  /**
   * @schema WorkSpacesWorkspaceAccessProperties#DeviceTypeChromeOs
   */
  readonly deviceTypeChromeOs?: string;

  /**
   * @schema WorkSpacesWorkspaceAccessProperties#DeviceTypeZeroClient
   */
  readonly deviceTypeZeroClient?: string;

  /**
   * @schema WorkSpacesWorkspaceAccessProperties#DeviceTypeLinux
   */
  readonly deviceTypeLinux?: string;

}

/**
 * Converts an object of type 'WorkSpacesWorkspaceAccessProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesWorkspaceAccessProperties(obj: WorkSpacesWorkspaceAccessProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceTypeWindows': obj.deviceTypeWindows,
    'DeviceTypeOsx': obj.deviceTypeOsx,
    'DeviceTypeWeb': obj.deviceTypeWeb,
    'DeviceTypeIos': obj.deviceTypeIos,
    'DeviceTypeAndroid': obj.deviceTypeAndroid,
    'DeviceTypeChromeOs': obj.deviceTypeChromeOs,
    'DeviceTypeZeroClient': obj.deviceTypeZeroClient,
    'DeviceTypeLinux': obj.deviceTypeLinux,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesWorkspaceCreationProperties
 */
export interface WorkSpacesWorkspaceCreationProperties {
  /**
   * @schema WorkSpacesWorkspaceCreationProperties#EnableWorkDocs
   */
  readonly enableWorkDocs?: boolean;

  /**
   * @schema WorkSpacesWorkspaceCreationProperties#EnableInternetAccess
   */
  readonly enableInternetAccess?: boolean;

  /**
   * @schema WorkSpacesWorkspaceCreationProperties#DefaultOu
   */
  readonly defaultOu?: string;

  /**
   * @schema WorkSpacesWorkspaceCreationProperties#CustomSecurityGroupId
   */
  readonly customSecurityGroupId?: string;

  /**
   * @schema WorkSpacesWorkspaceCreationProperties#UserEnabledAsLocalAdministrator
   */
  readonly userEnabledAsLocalAdministrator?: boolean;

  /**
   * @schema WorkSpacesWorkspaceCreationProperties#EnableMaintenanceMode
   */
  readonly enableMaintenanceMode?: boolean;

}

/**
 * Converts an object of type 'WorkSpacesWorkspaceCreationProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesWorkspaceCreationProperties(obj: WorkSpacesWorkspaceCreationProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnableWorkDocs': obj.enableWorkDocs,
    'EnableInternetAccess': obj.enableInternetAccess,
    'DefaultOu': obj.defaultOu,
    'CustomSecurityGroupId': obj.customSecurityGroupId,
    'UserEnabledAsLocalAdministrator': obj.userEnabledAsLocalAdministrator,
    'EnableMaintenanceMode': obj.enableMaintenanceMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesWorkspaceProperties
 */
export interface WorkSpacesWorkspaceProperties {
  /**
   * @schema WorkSpacesWorkspaceProperties#RunningMode
   */
  readonly runningMode?: string;

  /**
   * @schema WorkSpacesWorkspaceProperties#RunningModeAutoStopTimeoutInMinutes
   */
  readonly runningModeAutoStopTimeoutInMinutes?: number;

  /**
   * @schema WorkSpacesWorkspaceProperties#RootVolumeSizeGib
   */
  readonly rootVolumeSizeGib?: number;

  /**
   * @schema WorkSpacesWorkspaceProperties#UserVolumeSizeGib
   */
  readonly userVolumeSizeGib?: number;

  /**
   * @schema WorkSpacesWorkspaceProperties#ComputeTypeName
   */
  readonly computeTypeName?: string;

}

/**
 * Converts an object of type 'WorkSpacesWorkspaceProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesWorkspaceProperties(obj: WorkSpacesWorkspaceProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RunningMode': obj.runningMode,
    'RunningModeAutoStopTimeoutInMinutes': obj.runningModeAutoStopTimeoutInMinutes,
    'RootVolumeSizeGib': obj.rootVolumeSizeGib,
    'UserVolumeSizeGib': obj.userVolumeSizeGib,
    'ComputeTypeName': obj.computeTypeName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesRebootRequest
 */
export interface WorkSpacesRebootRequest {
  /**
   * @schema WorkSpacesRebootRequest#WorkspaceId
   */
  readonly workspaceId?: string;

}

/**
 * Converts an object of type 'WorkSpacesRebootRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesRebootRequest(obj: WorkSpacesRebootRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkspaceId': obj.workspaceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesFailedWorkspaceChangeRequest
 */
export interface WorkSpacesFailedWorkspaceChangeRequest {
  /**
   * @schema WorkSpacesFailedWorkspaceChangeRequest#WorkspaceId
   */
  readonly workspaceId?: string;

  /**
   * @schema WorkSpacesFailedWorkspaceChangeRequest#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema WorkSpacesFailedWorkspaceChangeRequest#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'WorkSpacesFailedWorkspaceChangeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesFailedWorkspaceChangeRequest(obj: WorkSpacesFailedWorkspaceChangeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkspaceId': obj.workspaceId,
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesRebuildRequest
 */
export interface WorkSpacesRebuildRequest {
  /**
   * @schema WorkSpacesRebuildRequest#WorkspaceId
   */
  readonly workspaceId?: string;

}

/**
 * Converts an object of type 'WorkSpacesRebuildRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesRebuildRequest(obj: WorkSpacesRebuildRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkspaceId': obj.workspaceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesStartRequest
 */
export interface WorkSpacesStartRequest {
  /**
   * @schema WorkSpacesStartRequest#WorkspaceId
   */
  readonly workspaceId?: string;

}

/**
 * Converts an object of type 'WorkSpacesStartRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesStartRequest(obj: WorkSpacesStartRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkspaceId': obj.workspaceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesStopRequest
 */
export interface WorkSpacesStopRequest {
  /**
   * @schema WorkSpacesStopRequest#WorkspaceId
   */
  readonly workspaceId?: string;

}

/**
 * Converts an object of type 'WorkSpacesStopRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesStopRequest(obj: WorkSpacesStopRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkspaceId': obj.workspaceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesTerminateRequest
 */
export interface WorkSpacesTerminateRequest {
  /**
   * @schema WorkSpacesTerminateRequest#WorkspaceId
   */
  readonly workspaceId?: string;

}

/**
 * Converts an object of type 'WorkSpacesTerminateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesTerminateRequest(obj: WorkSpacesTerminateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'WorkspaceId': obj.workspaceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesModificationState
 */
export interface WorkSpacesModificationState {
  /**
   * @schema WorkSpacesModificationState#Resource
   */
  readonly resource?: string;

  /**
   * @schema WorkSpacesModificationState#State
   */
  readonly state?: string;

}

/**
 * Converts an object of type 'WorkSpacesModificationState' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesModificationState(obj: WorkSpacesModificationState | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Resource': obj.resource,
    'State': obj.state,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesConnectionAliasAssociation
 */
export interface WorkSpacesConnectionAliasAssociation {
  /**
   * @schema WorkSpacesConnectionAliasAssociation#AssociationStatus
   */
  readonly associationStatus?: string;

  /**
   * @schema WorkSpacesConnectionAliasAssociation#AssociatedAccountId
   */
  readonly associatedAccountId?: string;

  /**
   * @schema WorkSpacesConnectionAliasAssociation#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema WorkSpacesConnectionAliasAssociation#ConnectionIdentifier
   */
  readonly connectionIdentifier?: string;

}

/**
 * Converts an object of type 'WorkSpacesConnectionAliasAssociation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesConnectionAliasAssociation(obj: WorkSpacesConnectionAliasAssociation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AssociationStatus': obj.associationStatus,
    'AssociatedAccountId': obj.associatedAccountId,
    'ResourceId': obj.resourceId,
    'ConnectionIdentifier': obj.connectionIdentifier,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesDefaultWorkspaceCreationProperties
 */
export interface WorkSpacesDefaultWorkspaceCreationProperties {
  /**
   * @schema WorkSpacesDefaultWorkspaceCreationProperties#EnableWorkDocs
   */
  readonly enableWorkDocs?: boolean;

  /**
   * @schema WorkSpacesDefaultWorkspaceCreationProperties#EnableInternetAccess
   */
  readonly enableInternetAccess?: boolean;

  /**
   * @schema WorkSpacesDefaultWorkspaceCreationProperties#DefaultOu
   */
  readonly defaultOu?: string;

  /**
   * @schema WorkSpacesDefaultWorkspaceCreationProperties#CustomSecurityGroupId
   */
  readonly customSecurityGroupId?: string;

  /**
   * @schema WorkSpacesDefaultWorkspaceCreationProperties#UserEnabledAsLocalAdministrator
   */
  readonly userEnabledAsLocalAdministrator?: boolean;

  /**
   * @schema WorkSpacesDefaultWorkspaceCreationProperties#EnableMaintenanceMode
   */
  readonly enableMaintenanceMode?: boolean;

}

/**
 * Converts an object of type 'WorkSpacesDefaultWorkspaceCreationProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesDefaultWorkspaceCreationProperties(obj: WorkSpacesDefaultWorkspaceCreationProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EnableWorkDocs': obj.enableWorkDocs,
    'EnableInternetAccess': obj.enableInternetAccess,
    'DefaultOu': obj.defaultOu,
    'CustomSecurityGroupId': obj.customSecurityGroupId,
    'UserEnabledAsLocalAdministrator': obj.userEnabledAsLocalAdministrator,
    'EnableMaintenanceMode': obj.enableMaintenanceMode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema WorkSpacesOperatingSystem
 */
export interface WorkSpacesOperatingSystem {
  /**
   * @schema WorkSpacesOperatingSystem#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'WorkSpacesOperatingSystem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_WorkSpacesOperatingSystem(obj: WorkSpacesOperatingSystem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
