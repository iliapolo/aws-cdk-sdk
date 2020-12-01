/**
 * @schema AssociateTeamMemberRequest
 */
export interface AssociateTeamMemberRequest {
  /**
   * @schema AssociateTeamMemberRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema AssociateTeamMemberRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema AssociateTeamMemberRequest#userArn
   */
  readonly userArn: string;

  /**
   * @schema AssociateTeamMemberRequest#projectRole
   */
  readonly projectRole: string;

  /**
   * @schema AssociateTeamMemberRequest#remoteAccessAllowed
   */
  readonly remoteAccessAllowed?: boolean;

}

/**
 * @schema AssociateTeamMemberResult
 */
export interface AssociateTeamMemberResult {
  /**
   * @schema AssociateTeamMemberResult#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema CreateProjectRequest
 */
export interface CreateProjectRequest {
  /**
   * @schema CreateProjectRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateProjectRequest#id
   */
  readonly id: string;

  /**
   * @schema CreateProjectRequest#description
   */
  readonly description?: string;

  /**
   * @schema CreateProjectRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateProjectRequest#sourceCode
   */
  readonly sourceCode?: Code[];

  /**
   * @schema CreateProjectRequest#toolchain
   */
  readonly toolchain?: Toolchain;

  /**
   * @schema CreateProjectRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateProjectResult
 */
export interface CreateProjectResult {
  /**
   * @schema CreateProjectResult#id
   */
  readonly id: string;

  /**
   * @schema CreateProjectResult#arn
   */
  readonly arn: string;

  /**
   * @schema CreateProjectResult#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateProjectResult#projectTemplateId
   */
  readonly projectTemplateId?: string;

}

/**
 * @schema CreateUserProfileRequest
 */
export interface CreateUserProfileRequest {
  /**
   * @schema CreateUserProfileRequest#userArn
   */
  readonly userArn: string;

  /**
   * @schema CreateUserProfileRequest#displayName
   */
  readonly displayName: string;

  /**
   * @schema CreateUserProfileRequest#emailAddress
   */
  readonly emailAddress: string;

  /**
   * @schema CreateUserProfileRequest#sshPublicKey
   */
  readonly sshPublicKey?: string;

}

/**
 * @schema CreateUserProfileResult
 */
export interface CreateUserProfileResult {
  /**
   * @schema CreateUserProfileResult#userArn
   */
  readonly userArn: string;

  /**
   * @schema CreateUserProfileResult#displayName
   */
  readonly displayName?: string;

  /**
   * @schema CreateUserProfileResult#emailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema CreateUserProfileResult#sshPublicKey
   */
  readonly sshPublicKey?: string;

  /**
   * @schema CreateUserProfileResult#createdTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema CreateUserProfileResult#lastModifiedTimestamp
   */
  readonly lastModifiedTimestamp?: string;

}

/**
 * @schema DeleteProjectRequest
 */
export interface DeleteProjectRequest {
  /**
   * @schema DeleteProjectRequest#id
   */
  readonly id: string;

  /**
   * @schema DeleteProjectRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema DeleteProjectRequest#deleteStack
   */
  readonly deleteStack?: boolean;

}

/**
 * @schema DeleteProjectResult
 */
export interface DeleteProjectResult {
  /**
   * @schema DeleteProjectResult#stackId
   */
  readonly stackId?: string;

  /**
   * @schema DeleteProjectResult#projectArn
   */
  readonly projectArn?: string;

}

/**
 * @schema DeleteUserProfileRequest
 */
export interface DeleteUserProfileRequest {
  /**
   * @schema DeleteUserProfileRequest#userArn
   */
  readonly userArn: string;

}

/**
 * @schema DeleteUserProfileResult
 */
export interface DeleteUserProfileResult {
  /**
   * @schema DeleteUserProfileResult#userArn
   */
  readonly userArn: string;

}

/**
 * @schema DescribeProjectRequest
 */
export interface DescribeProjectRequest {
  /**
   * @schema DescribeProjectRequest#id
   */
  readonly id: string;

}

/**
 * @schema DescribeProjectResult
 */
export interface DescribeProjectResult {
  /**
   * @schema DescribeProjectResult#name
   */
  readonly name?: string;

  /**
   * @schema DescribeProjectResult#id
   */
  readonly id?: string;

  /**
   * @schema DescribeProjectResult#arn
   */
  readonly arn?: string;

  /**
   * @schema DescribeProjectResult#description
   */
  readonly description?: string;

  /**
   * @schema DescribeProjectResult#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema DescribeProjectResult#createdTimeStamp
   */
  readonly createdTimeStamp?: string;

  /**
   * @schema DescribeProjectResult#stackId
   */
  readonly stackId?: string;

  /**
   * @schema DescribeProjectResult#projectTemplateId
   */
  readonly projectTemplateId?: string;

  /**
   * @schema DescribeProjectResult#status
   */
  readonly status?: ProjectStatus;

}

/**
 * @schema DescribeUserProfileRequest
 */
export interface DescribeUserProfileRequest {
  /**
   * @schema DescribeUserProfileRequest#userArn
   */
  readonly userArn: string;

}

/**
 * @schema DescribeUserProfileResult
 */
export interface DescribeUserProfileResult {
  /**
   * @schema DescribeUserProfileResult#userArn
   */
  readonly userArn: string;

  /**
   * @schema DescribeUserProfileResult#displayName
   */
  readonly displayName?: string;

  /**
   * @schema DescribeUserProfileResult#emailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema DescribeUserProfileResult#sshPublicKey
   */
  readonly sshPublicKey?: string;

  /**
   * @schema DescribeUserProfileResult#createdTimestamp
   */
  readonly createdTimestamp: string;

  /**
   * @schema DescribeUserProfileResult#lastModifiedTimestamp
   */
  readonly lastModifiedTimestamp: string;

}

/**
 * @schema DisassociateTeamMemberRequest
 */
export interface DisassociateTeamMemberRequest {
  /**
   * @schema DisassociateTeamMemberRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema DisassociateTeamMemberRequest#userArn
   */
  readonly userArn: string;

}

/**
 * @schema DisassociateTeamMemberResult
 */
export interface DisassociateTeamMemberResult {
}

/**
 * @schema ListProjectsRequest
 */
export interface ListProjectsRequest {
  /**
   * @schema ListProjectsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListProjectsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListProjectsResult
 */
export interface ListProjectsResult {
  /**
   * @schema ListProjectsResult#projects
   */
  readonly projects: ProjectSummary[];

  /**
   * @schema ListProjectsResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListResourcesRequest
 */
export interface ListResourcesRequest {
  /**
   * @schema ListResourcesRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema ListResourcesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListResourcesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListResourcesResult
 */
export interface ListResourcesResult {
  /**
   * @schema ListResourcesResult#resources
   */
  readonly resources?: Resource[];

  /**
   * @schema ListResourcesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForProjectRequest
 */
export interface ListTagsForProjectRequest {
  /**
   * @schema ListTagsForProjectRequest#id
   */
  readonly id: string;

  /**
   * @schema ListTagsForProjectRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTagsForProjectRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTagsForProjectResult
 */
export interface ListTagsForProjectResult {
  /**
   * @schema ListTagsForProjectResult#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ListTagsForProjectResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTeamMembersRequest
 */
export interface ListTeamMembersRequest {
  /**
   * @schema ListTeamMembersRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema ListTeamMembersRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTeamMembersRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTeamMembersResult
 */
export interface ListTeamMembersResult {
  /**
   * @schema ListTeamMembersResult#teamMembers
   */
  readonly teamMembers: TeamMember[];

  /**
   * @schema ListTeamMembersResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListUserProfilesRequest
 */
export interface ListUserProfilesRequest {
  /**
   * @schema ListUserProfilesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListUserProfilesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListUserProfilesResult
 */
export interface ListUserProfilesResult {
  /**
   * @schema ListUserProfilesResult#userProfiles
   */
  readonly userProfiles: UserProfileSummary[];

  /**
   * @schema ListUserProfilesResult#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema TagProjectRequest
 */
export interface TagProjectRequest {
  /**
   * @schema TagProjectRequest#id
   */
  readonly id: string;

  /**
   * @schema TagProjectRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema TagProjectResult
 */
export interface TagProjectResult {
  /**
   * @schema TagProjectResult#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema UntagProjectRequest
 */
export interface UntagProjectRequest {
  /**
   * @schema UntagProjectRequest#id
   */
  readonly id: string;

  /**
   * @schema UntagProjectRequest#tags
   */
  readonly tags: string[];

}

/**
 * @schema UntagProjectResult
 */
export interface UntagProjectResult {
}

/**
 * @schema UpdateProjectRequest
 */
export interface UpdateProjectRequest {
  /**
   * @schema UpdateProjectRequest#id
   */
  readonly id: string;

  /**
   * @schema UpdateProjectRequest#name
   */
  readonly name?: string;

  /**
   * @schema UpdateProjectRequest#description
   */
  readonly description?: string;

}

/**
 * @schema UpdateProjectResult
 */
export interface UpdateProjectResult {
}

/**
 * @schema UpdateTeamMemberRequest
 */
export interface UpdateTeamMemberRequest {
  /**
   * @schema UpdateTeamMemberRequest#projectId
   */
  readonly projectId: string;

  /**
   * @schema UpdateTeamMemberRequest#userArn
   */
  readonly userArn: string;

  /**
   * @schema UpdateTeamMemberRequest#projectRole
   */
  readonly projectRole?: string;

  /**
   * @schema UpdateTeamMemberRequest#remoteAccessAllowed
   */
  readonly remoteAccessAllowed?: boolean;

}

/**
 * @schema UpdateTeamMemberResult
 */
export interface UpdateTeamMemberResult {
  /**
   * @schema UpdateTeamMemberResult#userArn
   */
  readonly userArn?: string;

  /**
   * @schema UpdateTeamMemberResult#projectRole
   */
  readonly projectRole?: string;

  /**
   * @schema UpdateTeamMemberResult#remoteAccessAllowed
   */
  readonly remoteAccessAllowed?: boolean;

}

/**
 * @schema UpdateUserProfileRequest
 */
export interface UpdateUserProfileRequest {
  /**
   * @schema UpdateUserProfileRequest#userArn
   */
  readonly userArn: string;

  /**
   * @schema UpdateUserProfileRequest#displayName
   */
  readonly displayName?: string;

  /**
   * @schema UpdateUserProfileRequest#emailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema UpdateUserProfileRequest#sshPublicKey
   */
  readonly sshPublicKey?: string;

}

/**
 * @schema UpdateUserProfileResult
 */
export interface UpdateUserProfileResult {
  /**
   * @schema UpdateUserProfileResult#userArn
   */
  readonly userArn: string;

  /**
   * @schema UpdateUserProfileResult#displayName
   */
  readonly displayName?: string;

  /**
   * @schema UpdateUserProfileResult#emailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema UpdateUserProfileResult#sshPublicKey
   */
  readonly sshPublicKey?: string;

  /**
   * @schema UpdateUserProfileResult#createdTimestamp
   */
  readonly createdTimestamp?: string;

  /**
   * @schema UpdateUserProfileResult#lastModifiedTimestamp
   */
  readonly lastModifiedTimestamp?: string;

}

/**
 * @schema Code
 */
export interface Code {
  /**
   * @schema Code#source
   */
  readonly source: CodeSource;

  /**
   * @schema Code#destination
   */
  readonly destination: CodeDestination;

}

/**
 * @schema Toolchain
 */
export interface Toolchain {
  /**
   * @schema Toolchain#source
   */
  readonly source: ToolchainSource;

  /**
   * @schema Toolchain#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema Toolchain#stackParameters
   */
  readonly stackParameters?: { [key: string]: string };

}

/**
 * @schema ProjectStatus
 */
export interface ProjectStatus {
  /**
   * @schema ProjectStatus#state
   */
  readonly state: string;

  /**
   * @schema ProjectStatus#reason
   */
  readonly reason?: string;

}

/**
 * @schema ProjectSummary
 */
export interface ProjectSummary {
  /**
   * @schema ProjectSummary#projectId
   */
  readonly projectId?: string;

  /**
   * @schema ProjectSummary#projectArn
   */
  readonly projectArn?: string;

}

/**
 * @schema Resource
 */
export interface Resource {
  /**
   * @schema Resource#id
   */
  readonly id: string;

}

/**
 * @schema TeamMember
 */
export interface TeamMember {
  /**
   * @schema TeamMember#userArn
   */
  readonly userArn: string;

  /**
   * @schema TeamMember#projectRole
   */
  readonly projectRole: string;

  /**
   * @schema TeamMember#remoteAccessAllowed
   */
  readonly remoteAccessAllowed?: boolean;

}

/**
 * @schema UserProfileSummary
 */
export interface UserProfileSummary {
  /**
   * @schema UserProfileSummary#userArn
   */
  readonly userArn?: string;

  /**
   * @schema UserProfileSummary#displayName
   */
  readonly displayName?: string;

  /**
   * @schema UserProfileSummary#emailAddress
   */
  readonly emailAddress?: string;

  /**
   * @schema UserProfileSummary#sshPublicKey
   */
  readonly sshPublicKey?: string;

}

/**
 * @schema CodeSource
 */
export interface CodeSource {
  /**
   * @schema CodeSource#s3
   */
  readonly s3: S3Location;

}

/**
 * @schema CodeDestination
 */
export interface CodeDestination {
  /**
   * @schema CodeDestination#codeCommit
   */
  readonly codeCommit?: CodeCommitCodeDestination;

  /**
   * @schema CodeDestination#gitHub
   */
  readonly gitHub?: GitHubCodeDestination;

}

/**
 * @schema ToolchainSource
 */
export interface ToolchainSource {
  /**
   * @schema ToolchainSource#s3
   */
  readonly s3: S3Location;

}

/**
 * @schema S3Location
 */
export interface S3Location {
  /**
   * @schema S3Location#bucketName
   */
  readonly bucketName?: string;

  /**
   * @schema S3Location#bucketKey
   */
  readonly bucketKey?: string;

}

/**
 * @schema CodeCommitCodeDestination
 */
export interface CodeCommitCodeDestination {
  /**
   * @schema CodeCommitCodeDestination#name
   */
  readonly name: string;

}

/**
 * @schema GitHubCodeDestination
 */
export interface GitHubCodeDestination {
  /**
   * @schema GitHubCodeDestination#name
   */
  readonly name: string;

  /**
   * @schema GitHubCodeDestination#description
   */
  readonly description?: string;

  /**
   * @schema GitHubCodeDestination#type
   */
  readonly type: string;

  /**
   * @schema GitHubCodeDestination#owner
   */
  readonly owner: string;

  /**
   * @schema GitHubCodeDestination#privateRepository
   */
  readonly privateRepository: boolean;

  /**
   * @schema GitHubCodeDestination#issuesEnabled
   */
  readonly issuesEnabled: boolean;

  /**
   * @schema GitHubCodeDestination#token
   */
  readonly token: string;

}
