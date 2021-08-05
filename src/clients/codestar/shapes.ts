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
 * @schema CodeStarAssociateTeamMemberResult
 */
export interface CodeStarAssociateTeamMemberResult {
  /**
   * @schema CodeStarAssociateTeamMemberResult#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

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
 * @schema CodeStarDeleteUserProfileRequest
 */
export interface CodeStarDeleteUserProfileRequest {
  /**
   * @schema CodeStarDeleteUserProfileRequest#userArn
   */
  readonly userArn: string;

}

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
 * @schema CodeStarDescribeProjectRequest
 */
export interface CodeStarDescribeProjectRequest {
  /**
   * @schema CodeStarDescribeProjectRequest#id
   */
  readonly id: string;

}

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
 * @schema CodeStarDescribeUserProfileRequest
 */
export interface CodeStarDescribeUserProfileRequest {
  /**
   * @schema CodeStarDescribeUserProfileRequest#userArn
   */
  readonly userArn: string;

}

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
 * @schema CodeStarDisassociateTeamMemberResult
 */
export interface CodeStarDisassociateTeamMemberResult {
}

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
 * @schema CodeStarTagProjectResult
 */
export interface CodeStarTagProjectResult {
  /**
   * @schema CodeStarTagProjectResult#tags
   */
  readonly tags?: { [key: string]: string };

}

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
 * @schema CodeStarUntagProjectResult
 */
export interface CodeStarUntagProjectResult {
}

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
 * @schema CodeStarUpdateProjectResult
 */
export interface CodeStarUpdateProjectResult {
}

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
 * @schema CodeStarResource
 */
export interface CodeStarResource {
  /**
   * @schema CodeStarResource#id
   */
  readonly id: string;

}

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
 * @schema CodeStarCodeSource
 */
export interface CodeStarCodeSource {
  /**
   * @schema CodeStarCodeSource#s3
   */
  readonly s3: CodeStarS3Location;

}

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
 * @schema CodeStarToolchainSource
 */
export interface CodeStarToolchainSource {
  /**
   * @schema CodeStarToolchainSource#s3
   */
  readonly s3: CodeStarS3Location;

}

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
 * @schema CodeStarCodeCommitCodeDestination
 */
export interface CodeStarCodeCommitCodeDestination {
  /**
   * @schema CodeStarCodeCommitCodeDestination#name
   */
  readonly name: string;

}

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
