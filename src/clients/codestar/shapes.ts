/**
 * @schema CodeStarAssociateTeamMemberRequest
 */
export interface CodeStarAssociateTeamMemberRequest {
  /**
   * @schema CodeStarAssociateTeamMemberRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema CodeStarAssociateTeamMemberRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CodeStarAssociateTeamMemberRequest#userArn
   */
  readonly userArn: string;

  /**
   * @schema CodeStarAssociateTeamMemberRequest#projectRole
   */
  readonly projectRole: string;

  /**
   * @schema CodeStarAssociateTeamMemberRequest#remoteAccessAllowed
   */
  readonly remoteAccessAllowed?: boolean;

}

/**
 * Converts an object of type 'CodeStarAssociateTeamMemberRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarAssociateTeamMemberRequest(obj: CodeStarAssociateTeamMemberRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectId': obj.projectId,
    'clientRequestToken': obj.clientRequestToken,
    'userArn': obj.userArn,
    'projectRole': obj.projectRole,
    'remoteAccessAllowed': obj.remoteAccessAllowed,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarAssociateTeamMemberResult
 */
export interface CodeStarAssociateTeamMemberResult {
  /**
   * @schema CodeStarAssociateTeamMemberResult#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'CodeStarAssociateTeamMemberResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarAssociateTeamMemberResult(obj: CodeStarAssociateTeamMemberResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarCreateProjectRequest
 */
export interface CodeStarCreateProjectRequest {
  /**
   * @schema CodeStarCreateProjectRequest#name
   */
  readonly name: string;

  /**
   * @schema CodeStarCreateProjectRequest#id
   */
  readonly id: string;

  /**
   * @schema CodeStarCreateProjectRequest#description
   */
  readonly description?: string;

  /**
   * @schema CodeStarCreateProjectRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CodeStarCreateProjectRequest#sourceCode
   */
  readonly sourceCode?: CodeStarCode[];

  /**
   * @schema CodeStarCreateProjectRequest#toolchain
   */
  readonly toolchain?: CodeStarToolchain;

  /**
   * @schema CodeStarCreateProjectRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CodeStarCreateProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarCreateProjectRequest(obj: CodeStarCreateProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'id': obj.id,
    'description': obj.description,
    'clientRequestToken': obj.clientRequestToken,
    'sourceCode': obj.sourceCode?.map(y => toJson_CodeStarCode(y)),
    'toolchain': toJson_CodeStarToolchain(obj.toolchain),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarCreateProjectResult
 */
export interface CodeStarCreateProjectResult {
  /**
   * @schema CodeStarCreateProjectResult#id
   */
  readonly id: string;

  /**
   * @schema CodeStarCreateProjectResult#arn
   */
  readonly arn: string;

  /**
   * @schema CodeStarCreateProjectResult#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CodeStarCreateProjectResult#projectTemplateId
   */
  readonly projectTemplateId?: string;

}

/**
 * Converts an object of type 'CodeStarCreateProjectResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarCreateProjectResult(obj: CodeStarCreateProjectResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'arn': obj.arn,
    'clientRequestToken': obj.clientRequestToken,
    'projectTemplateId': obj.projectTemplateId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarCreateUserProfileRequest
 */
export interface CodeStarCreateUserProfileRequest {
  /**
   * @schema CodeStarCreateUserProfileRequest#userArn
   */
  readonly userArn: string;

  /**
   * @schema CodeStarCreateUserProfileRequest#displayName
   */
  readonly displayName: string;

  /**
   * @schema CodeStarCreateUserProfileRequest#emailAddress
   */
  readonly emailAddress: string;

  /**
   * @schema CodeStarCreateUserProfileRequest#sshPublicKey
   */
  readonly sshPublicKey?: string;

}

/**
 * Converts an object of type 'CodeStarCreateUserProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarCreateUserProfileRequest(obj: CodeStarCreateUserProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'userArn': obj.userArn,
    'displayName': obj.displayName,
    'emailAddress': obj.emailAddress,
    'sshPublicKey': obj.sshPublicKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarCreateUserProfileResult
 */
export interface CodeStarCreateUserProfileResult {
  /**
   * @schema CodeStarCreateUserProfileResult#userArn
   */
  readonly userArn: string;

  /**
   * @schema CodeStarCreateUserProfileResult#displayName
   */
  readonly displayName?: string;

  /**
   * @schema CodeStarCreateUserProfileResult#emailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema CodeStarCreateUserProfileResult#sshPublicKey
   */
  readonly sshPublicKey?: string;

  /**
   * @schema CodeStarCreateUserProfileResult#createdTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema CodeStarCreateUserProfileResult#lastModifiedTimestamp
   */
  readonly lastModifiedTimestamp?: string;

}

/**
 * Converts an object of type 'CodeStarCreateUserProfileResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarCreateUserProfileResult(obj: CodeStarCreateUserProfileResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'userArn': obj.userArn,
    'displayName': obj.displayName,
    'emailAddress': obj.emailAddress,
    'sshPublicKey': obj.sshPublicKey,
    'createdTimestamp': obj.createdTimestamp,
    'lastModifiedTimestamp': obj.lastModifiedTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarDeleteProjectRequest
 */
export interface CodeStarDeleteProjectRequest {
  /**
   * @schema CodeStarDeleteProjectRequest#id
   */
  readonly id: string;

  /**
   * @schema CodeStarDeleteProjectRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CodeStarDeleteProjectRequest#deleteStack
   */
  readonly deleteStack?: boolean;

}

/**
 * Converts an object of type 'CodeStarDeleteProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarDeleteProjectRequest(obj: CodeStarDeleteProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'clientRequestToken': obj.clientRequestToken,
    'deleteStack': obj.deleteStack,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarDeleteProjectResult
 */
export interface CodeStarDeleteProjectResult {
  /**
   * @schema CodeStarDeleteProjectResult#stackId
   */
  readonly stackId?: string;

  /**
   * @schema CodeStarDeleteProjectResult#projectArn
   */
  readonly projectArn?: string;

}

/**
 * Converts an object of type 'CodeStarDeleteProjectResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarDeleteProjectResult(obj: CodeStarDeleteProjectResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'stackId': obj.stackId,
    'projectArn': obj.projectArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarDeleteUserProfileRequest
 */
export interface CodeStarDeleteUserProfileRequest {
  /**
   * @schema CodeStarDeleteUserProfileRequest#userArn
   */
  readonly userArn: string;

}

/**
 * Converts an object of type 'CodeStarDeleteUserProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarDeleteUserProfileRequest(obj: CodeStarDeleteUserProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'userArn': obj.userArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarDeleteUserProfileResult
 */
export interface CodeStarDeleteUserProfileResult {
  /**
   * @schema CodeStarDeleteUserProfileResult#userArn
   */
  readonly userArn: string;

}

/**
 * Converts an object of type 'CodeStarDeleteUserProfileResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarDeleteUserProfileResult(obj: CodeStarDeleteUserProfileResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'userArn': obj.userArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarDescribeProjectRequest
 */
export interface CodeStarDescribeProjectRequest {
  /**
   * @schema CodeStarDescribeProjectRequest#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'CodeStarDescribeProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarDescribeProjectRequest(obj: CodeStarDescribeProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarDescribeProjectResult
 */
export interface CodeStarDescribeProjectResult {
  /**
   * @schema CodeStarDescribeProjectResult#name
   */
  readonly name?: string;

  /**
   * @schema CodeStarDescribeProjectResult#id
   */
  readonly id?: string;

  /**
   * @schema CodeStarDescribeProjectResult#arn
   */
  readonly arn?: string;

  /**
   * @schema CodeStarDescribeProjectResult#description
   */
  readonly description?: string;

  /**
   * @schema CodeStarDescribeProjectResult#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CodeStarDescribeProjectResult#createdTimeStamp
   */
  readonly createdTimeStamp?: string;

  /**
   * @schema CodeStarDescribeProjectResult#stackId
   */
  readonly stackId?: string;

  /**
   * @schema CodeStarDescribeProjectResult#projectTemplateId
   */
  readonly projectTemplateId?: string;

  /**
   * @schema CodeStarDescribeProjectResult#status
   */
  readonly status?: CodeStarProjectStatus;

}

/**
 * Converts an object of type 'CodeStarDescribeProjectResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarDescribeProjectResult(obj: CodeStarDescribeProjectResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'id': obj.id,
    'arn': obj.arn,
    'description': obj.description,
    'clientRequestToken': obj.clientRequestToken,
    'createdTimeStamp': obj.createdTimeStamp,
    'stackId': obj.stackId,
    'projectTemplateId': obj.projectTemplateId,
    'status': toJson_CodeStarProjectStatus(obj.status),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarDescribeUserProfileRequest
 */
export interface CodeStarDescribeUserProfileRequest {
  /**
   * @schema CodeStarDescribeUserProfileRequest#userArn
   */
  readonly userArn: string;

}

/**
 * Converts an object of type 'CodeStarDescribeUserProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarDescribeUserProfileRequest(obj: CodeStarDescribeUserProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'userArn': obj.userArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarDescribeUserProfileResult
 */
export interface CodeStarDescribeUserProfileResult {
  /**
   * @schema CodeStarDescribeUserProfileResult#userArn
   */
  readonly userArn: string;

  /**
   * @schema CodeStarDescribeUserProfileResult#displayName
   */
  readonly displayName?: string;

  /**
   * @schema CodeStarDescribeUserProfileResult#emailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema CodeStarDescribeUserProfileResult#sshPublicKey
   */
  readonly sshPublicKey?: string;

  /**
   * @schema CodeStarDescribeUserProfileResult#createdTimestamp
   */
  readonly createdTimestamp: string;

  /**
   * @schema CodeStarDescribeUserProfileResult#lastModifiedTimestamp
   */
  readonly lastModifiedTimestamp: string;

}

/**
 * Converts an object of type 'CodeStarDescribeUserProfileResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarDescribeUserProfileResult(obj: CodeStarDescribeUserProfileResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'userArn': obj.userArn,
    'displayName': obj.displayName,
    'emailAddress': obj.emailAddress,
    'sshPublicKey': obj.sshPublicKey,
    'createdTimestamp': obj.createdTimestamp,
    'lastModifiedTimestamp': obj.lastModifiedTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarDisassociateTeamMemberRequest
 */
export interface CodeStarDisassociateTeamMemberRequest {
  /**
   * @schema CodeStarDisassociateTeamMemberRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema CodeStarDisassociateTeamMemberRequest#userArn
   */
  readonly userArn: string;

}

/**
 * Converts an object of type 'CodeStarDisassociateTeamMemberRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarDisassociateTeamMemberRequest(obj: CodeStarDisassociateTeamMemberRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectId': obj.projectId,
    'userArn': obj.userArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarDisassociateTeamMemberResult
 */
export interface CodeStarDisassociateTeamMemberResult {
}

/**
 * Converts an object of type 'CodeStarDisassociateTeamMemberResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarDisassociateTeamMemberResult(obj: CodeStarDisassociateTeamMemberResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarListProjectsRequest
 */
export interface CodeStarListProjectsRequest {
  /**
   * @schema CodeStarListProjectsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeStarListProjectsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'CodeStarListProjectsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarListProjectsRequest(obj: CodeStarListProjectsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarListProjectsResult
 */
export interface CodeStarListProjectsResult {
  /**
   * @schema CodeStarListProjectsResult#projects
   */
  readonly projects: CodeStarProjectSummary[];

  /**
   * @schema CodeStarListProjectsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeStarListProjectsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarListProjectsResult(obj: CodeStarListProjectsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projects': obj.projects?.map(y => toJson_CodeStarProjectSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarListResourcesRequest
 */
export interface CodeStarListResourcesRequest {
  /**
   * @schema CodeStarListResourcesRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema CodeStarListResourcesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeStarListResourcesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'CodeStarListResourcesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarListResourcesRequest(obj: CodeStarListResourcesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectId': obj.projectId,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarListResourcesResult
 */
export interface CodeStarListResourcesResult {
  /**
   * @schema CodeStarListResourcesResult#resources
   */
  readonly resources?: CodeStarResource[];

  /**
   * @schema CodeStarListResourcesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeStarListResourcesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarListResourcesResult(obj: CodeStarListResourcesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resources': obj.resources?.map(y => toJson_CodeStarResource(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarListTagsForProjectRequest
 */
export interface CodeStarListTagsForProjectRequest {
  /**
   * @schema CodeStarListTagsForProjectRequest#id
   */
  readonly id: string;

  /**
   * @schema CodeStarListTagsForProjectRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeStarListTagsForProjectRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'CodeStarListTagsForProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarListTagsForProjectRequest(obj: CodeStarListTagsForProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarListTagsForProjectResult
 */
export interface CodeStarListTagsForProjectResult {
  /**
   * @schema CodeStarListTagsForProjectResult#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CodeStarListTagsForProjectResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeStarListTagsForProjectResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarListTagsForProjectResult(obj: CodeStarListTagsForProjectResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarListTeamMembersRequest
 */
export interface CodeStarListTeamMembersRequest {
  /**
   * @schema CodeStarListTeamMembersRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema CodeStarListTeamMembersRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeStarListTeamMembersRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'CodeStarListTeamMembersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarListTeamMembersRequest(obj: CodeStarListTeamMembersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectId': obj.projectId,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarListTeamMembersResult
 */
export interface CodeStarListTeamMembersResult {
  /**
   * @schema CodeStarListTeamMembersResult#teamMembers
   */
  readonly teamMembers: CodeStarTeamMember[];

  /**
   * @schema CodeStarListTeamMembersResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeStarListTeamMembersResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarListTeamMembersResult(obj: CodeStarListTeamMembersResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'teamMembers': obj.teamMembers?.map(y => toJson_CodeStarTeamMember(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarListUserProfilesRequest
 */
export interface CodeStarListUserProfilesRequest {
  /**
   * @schema CodeStarListUserProfilesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema CodeStarListUserProfilesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'CodeStarListUserProfilesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarListUserProfilesRequest(obj: CodeStarListUserProfilesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarListUserProfilesResult
 */
export interface CodeStarListUserProfilesResult {
  /**
   * @schema CodeStarListUserProfilesResult#userProfiles
   */
  readonly userProfiles: CodeStarUserProfileSummary[];

  /**
   * @schema CodeStarListUserProfilesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'CodeStarListUserProfilesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarListUserProfilesResult(obj: CodeStarListUserProfilesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'userProfiles': obj.userProfiles?.map(y => toJson_CodeStarUserProfileSummary(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarTagProjectRequest
 */
export interface CodeStarTagProjectRequest {
  /**
   * @schema CodeStarTagProjectRequest#id
   */
  readonly id: string;

  /**
   * @schema CodeStarTagProjectRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * Converts an object of type 'CodeStarTagProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarTagProjectRequest(obj: CodeStarTagProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarTagProjectResult
 */
export interface CodeStarTagProjectResult {
  /**
   * @schema CodeStarTagProjectResult#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'CodeStarTagProjectResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarTagProjectResult(obj: CodeStarTagProjectResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarUntagProjectRequest
 */
export interface CodeStarUntagProjectRequest {
  /**
   * @schema CodeStarUntagProjectRequest#id
   */
  readonly id: string;

  /**
   * @schema CodeStarUntagProjectRequest#tags
   */
  readonly tags: string[];

}

/**
 * Converts an object of type 'CodeStarUntagProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarUntagProjectRequest(obj: CodeStarUntagProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'tags': obj.tags?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarUntagProjectResult
 */
export interface CodeStarUntagProjectResult {
}

/**
 * Converts an object of type 'CodeStarUntagProjectResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarUntagProjectResult(obj: CodeStarUntagProjectResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarUpdateProjectRequest
 */
export interface CodeStarUpdateProjectRequest {
  /**
   * @schema CodeStarUpdateProjectRequest#id
   */
  readonly id: string;

  /**
   * @schema CodeStarUpdateProjectRequest#name
   */
  readonly name?: string;

  /**
   * @schema CodeStarUpdateProjectRequest#description
   */
  readonly description?: string;

}

/**
 * Converts an object of type 'CodeStarUpdateProjectRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarUpdateProjectRequest(obj: CodeStarUpdateProjectRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'name': obj.name,
    'description': obj.description,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarUpdateProjectResult
 */
export interface CodeStarUpdateProjectResult {
}

/**
 * Converts an object of type 'CodeStarUpdateProjectResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarUpdateProjectResult(obj: CodeStarUpdateProjectResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarUpdateTeamMemberRequest
 */
export interface CodeStarUpdateTeamMemberRequest {
  /**
   * @schema CodeStarUpdateTeamMemberRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema CodeStarUpdateTeamMemberRequest#userArn
   */
  readonly userArn: string;

  /**
   * @schema CodeStarUpdateTeamMemberRequest#projectRole
   */
  readonly projectRole?: string;

  /**
   * @schema CodeStarUpdateTeamMemberRequest#remoteAccessAllowed
   */
  readonly remoteAccessAllowed?: boolean;

}

/**
 * Converts an object of type 'CodeStarUpdateTeamMemberRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarUpdateTeamMemberRequest(obj: CodeStarUpdateTeamMemberRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectId': obj.projectId,
    'userArn': obj.userArn,
    'projectRole': obj.projectRole,
    'remoteAccessAllowed': obj.remoteAccessAllowed,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarUpdateTeamMemberResult
 */
export interface CodeStarUpdateTeamMemberResult {
  /**
   * @schema CodeStarUpdateTeamMemberResult#userArn
   */
  readonly userArn?: string;

  /**
   * @schema CodeStarUpdateTeamMemberResult#projectRole
   */
  readonly projectRole?: string;

  /**
   * @schema CodeStarUpdateTeamMemberResult#remoteAccessAllowed
   */
  readonly remoteAccessAllowed?: boolean;

}

/**
 * Converts an object of type 'CodeStarUpdateTeamMemberResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarUpdateTeamMemberResult(obj: CodeStarUpdateTeamMemberResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'userArn': obj.userArn,
    'projectRole': obj.projectRole,
    'remoteAccessAllowed': obj.remoteAccessAllowed,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarUpdateUserProfileRequest
 */
export interface CodeStarUpdateUserProfileRequest {
  /**
   * @schema CodeStarUpdateUserProfileRequest#userArn
   */
  readonly userArn: string;

  /**
   * @schema CodeStarUpdateUserProfileRequest#displayName
   */
  readonly displayName?: string;

  /**
   * @schema CodeStarUpdateUserProfileRequest#emailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema CodeStarUpdateUserProfileRequest#sshPublicKey
   */
  readonly sshPublicKey?: string;

}

/**
 * Converts an object of type 'CodeStarUpdateUserProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarUpdateUserProfileRequest(obj: CodeStarUpdateUserProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'userArn': obj.userArn,
    'displayName': obj.displayName,
    'emailAddress': obj.emailAddress,
    'sshPublicKey': obj.sshPublicKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarUpdateUserProfileResult
 */
export interface CodeStarUpdateUserProfileResult {
  /**
   * @schema CodeStarUpdateUserProfileResult#userArn
   */
  readonly userArn: string;

  /**
   * @schema CodeStarUpdateUserProfileResult#displayName
   */
  readonly displayName?: string;

  /**
   * @schema CodeStarUpdateUserProfileResult#emailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema CodeStarUpdateUserProfileResult#sshPublicKey
   */
  readonly sshPublicKey?: string;

  /**
   * @schema CodeStarUpdateUserProfileResult#createdTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema CodeStarUpdateUserProfileResult#lastModifiedTimestamp
   */
  readonly lastModifiedTimestamp?: string;

}

/**
 * Converts an object of type 'CodeStarUpdateUserProfileResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarUpdateUserProfileResult(obj: CodeStarUpdateUserProfileResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'userArn': obj.userArn,
    'displayName': obj.displayName,
    'emailAddress': obj.emailAddress,
    'sshPublicKey': obj.sshPublicKey,
    'createdTimestamp': obj.createdTimestamp,
    'lastModifiedTimestamp': obj.lastModifiedTimestamp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarCode
 */
export interface CodeStarCode {
  /**
   * @schema CodeStarCode#source
   */
  readonly source: CodeStarCodeSource;

  /**
   * @schema CodeStarCode#destination
   */
  readonly destination: CodeStarCodeDestination;

}

/**
 * Converts an object of type 'CodeStarCode' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarCode(obj: CodeStarCode | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'source': toJson_CodeStarCodeSource(obj.source),
    'destination': toJson_CodeStarCodeDestination(obj.destination),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarToolchain
 */
export interface CodeStarToolchain {
  /**
   * @schema CodeStarToolchain#source
   */
  readonly source: CodeStarToolchainSource;

  /**
   * @schema CodeStarToolchain#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema CodeStarToolchain#stackParameters
   */
  readonly stackParameters?: { [key: string]: string };

}

/**
 * Converts an object of type 'CodeStarToolchain' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarToolchain(obj: CodeStarToolchain | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'source': toJson_CodeStarToolchainSource(obj.source),
    'roleArn': obj.roleArn,
    'stackParameters': ((obj.stackParameters) === undefined) ? undefined : (Object.entries(obj.stackParameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarProjectStatus
 */
export interface CodeStarProjectStatus {
  /**
   * @schema CodeStarProjectStatus#state
   */
  readonly state: string;

  /**
   * @schema CodeStarProjectStatus#reason
   */
  readonly reason?: string;

}

/**
 * Converts an object of type 'CodeStarProjectStatus' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarProjectStatus(obj: CodeStarProjectStatus | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'state': obj.state,
    'reason': obj.reason,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarProjectSummary
 */
export interface CodeStarProjectSummary {
  /**
   * @schema CodeStarProjectSummary#projectId
   */
  readonly projectId?: string;

  /**
   * @schema CodeStarProjectSummary#projectArn
   */
  readonly projectArn?: string;

}

/**
 * Converts an object of type 'CodeStarProjectSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarProjectSummary(obj: CodeStarProjectSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'projectId': obj.projectId,
    'projectArn': obj.projectArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarResource
 */
export interface CodeStarResource {
  /**
   * @schema CodeStarResource#id
   */
  readonly id: string;

}

/**
 * Converts an object of type 'CodeStarResource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarResource(obj: CodeStarResource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarTeamMember
 */
export interface CodeStarTeamMember {
  /**
   * @schema CodeStarTeamMember#userArn
   */
  readonly userArn: string;

  /**
   * @schema CodeStarTeamMember#projectRole
   */
  readonly projectRole: string;

  /**
   * @schema CodeStarTeamMember#remoteAccessAllowed
   */
  readonly remoteAccessAllowed?: boolean;

}

/**
 * Converts an object of type 'CodeStarTeamMember' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarTeamMember(obj: CodeStarTeamMember | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'userArn': obj.userArn,
    'projectRole': obj.projectRole,
    'remoteAccessAllowed': obj.remoteAccessAllowed,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarUserProfileSummary
 */
export interface CodeStarUserProfileSummary {
  /**
   * @schema CodeStarUserProfileSummary#userArn
   */
  readonly userArn?: string;

  /**
   * @schema CodeStarUserProfileSummary#displayName
   */
  readonly displayName?: string;

  /**
   * @schema CodeStarUserProfileSummary#emailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema CodeStarUserProfileSummary#sshPublicKey
   */
  readonly sshPublicKey?: string;

}

/**
 * Converts an object of type 'CodeStarUserProfileSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarUserProfileSummary(obj: CodeStarUserProfileSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'userArn': obj.userArn,
    'displayName': obj.displayName,
    'emailAddress': obj.emailAddress,
    'sshPublicKey': obj.sshPublicKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarCodeSource
 */
export interface CodeStarCodeSource {
  /**
   * @schema CodeStarCodeSource#s3
   */
  readonly s3: CodeStarS3Location;

}

/**
 * Converts an object of type 'CodeStarCodeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarCodeSource(obj: CodeStarCodeSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3': toJson_CodeStarS3Location(obj.s3),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarCodeDestination
 */
export interface CodeStarCodeDestination {
  /**
   * @schema CodeStarCodeDestination#codeCommit
   */
  readonly codeCommit?: CodeStarCodeCommitCodeDestination;

  /**
   * @schema CodeStarCodeDestination#gitHub
   */
  readonly gitHub?: CodeStarGitHubCodeDestination;

}

/**
 * Converts an object of type 'CodeStarCodeDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarCodeDestination(obj: CodeStarCodeDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'codeCommit': toJson_CodeStarCodeCommitCodeDestination(obj.codeCommit),
    'gitHub': toJson_CodeStarGitHubCodeDestination(obj.gitHub),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarToolchainSource
 */
export interface CodeStarToolchainSource {
  /**
   * @schema CodeStarToolchainSource#s3
   */
  readonly s3: CodeStarS3Location;

}

/**
 * Converts an object of type 'CodeStarToolchainSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarToolchainSource(obj: CodeStarToolchainSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    's3': toJson_CodeStarS3Location(obj.s3),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarS3Location
 */
export interface CodeStarS3Location {
  /**
   * @schema CodeStarS3Location#bucketName
   */
  readonly bucketName?: string;

  /**
   * @schema CodeStarS3Location#bucketKey
   */
  readonly bucketKey?: string;

}

/**
 * Converts an object of type 'CodeStarS3Location' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarS3Location(obj: CodeStarS3Location | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'bucketName': obj.bucketName,
    'bucketKey': obj.bucketKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarCodeCommitCodeDestination
 */
export interface CodeStarCodeCommitCodeDestination {
  /**
   * @schema CodeStarCodeCommitCodeDestination#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'CodeStarCodeCommitCodeDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarCodeCommitCodeDestination(obj: CodeStarCodeCommitCodeDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema CodeStarGitHubCodeDestination
 */
export interface CodeStarGitHubCodeDestination {
  /**
   * @schema CodeStarGitHubCodeDestination#name
   */
  readonly name: string;

  /**
   * @schema CodeStarGitHubCodeDestination#description
   */
  readonly description?: string;

  /**
   * @schema CodeStarGitHubCodeDestination#type
   */
  readonly type: string;

  /**
   * @schema CodeStarGitHubCodeDestination#owner
   */
  readonly owner: string;

  /**
   * @schema CodeStarGitHubCodeDestination#privateRepository
   */
  readonly privateRepository: boolean;

  /**
   * @schema CodeStarGitHubCodeDestination#issuesEnabled
   */
  readonly issuesEnabled: boolean;

  /**
   * @schema CodeStarGitHubCodeDestination#token
   */
  readonly token: string;

}

/**
 * Converts an object of type 'CodeStarGitHubCodeDestination' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CodeStarGitHubCodeDestination(obj: CodeStarGitHubCodeDestination | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'description': obj.description,
    'type': obj.type,
    'owner': obj.owner,
    'privateRepository': obj.privateRepository,
    'issuesEnabled': obj.issuesEnabled,
    'token': obj.token,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
