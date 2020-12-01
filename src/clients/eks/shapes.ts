/**
 * @schema CreateClusterRequest
 */
export interface CreateClusterRequest {
  /**
   * @schema CreateClusterRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateClusterRequest#version
   */
  readonly version?: string;

  /**
   * @schema CreateClusterRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema CreateClusterRequest#resourcesVpcConfig
   */
  readonly resourcesVpcConfig: VpcConfigRequest;

  /**
   * @schema CreateClusterRequest#kubernetesNetworkConfig
   */
  readonly kubernetesNetworkConfig?: KubernetesNetworkConfigRequest;

  /**
   * @schema CreateClusterRequest#logging
   */
  readonly logging?: Logging;

  /**
   * @schema CreateClusterRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateClusterRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateClusterRequest#encryptionConfig
   */
  readonly encryptionConfig?: EncryptionConfig[];

}

/**
 * @schema CreateClusterResponse
 */
export interface CreateClusterResponse {
  /**
   * @schema CreateClusterResponse#cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema CreateFargateProfileRequest
 */
export interface CreateFargateProfileRequest {
  /**
   * @schema CreateFargateProfileRequest#fargateProfileName
   */
  readonly fargateProfileName: string;

  /**
   * @schema CreateFargateProfileRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema CreateFargateProfileRequest#podExecutionRoleArn
   */
  readonly podExecutionRoleArn: string;

  /**
   * @schema CreateFargateProfileRequest#subnets
   */
  readonly subnets?: string[];

  /**
   * @schema CreateFargateProfileRequest#selectors
   */
  readonly selectors?: FargateProfileSelector[];

  /**
   * @schema CreateFargateProfileRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateFargateProfileRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateFargateProfileResponse
 */
export interface CreateFargateProfileResponse {
  /**
   * @schema CreateFargateProfileResponse#fargateProfile
   */
  readonly fargateProfile?: FargateProfile;

}

/**
 * @schema CreateNodegroupRequest
 */
export interface CreateNodegroupRequest {
  /**
   * @schema CreateNodegroupRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema CreateNodegroupRequest#nodegroupName
   */
  readonly nodegroupName: string;

  /**
   * @schema CreateNodegroupRequest#scalingConfig
   */
  readonly scalingConfig?: NodegroupScalingConfig;

  /**
   * @schema CreateNodegroupRequest#diskSize
   */
  readonly diskSize?: number;

  /**
   * @schema CreateNodegroupRequest#subnets
   */
  readonly subnets: string[];

  /**
   * @schema CreateNodegroupRequest#instanceTypes
   */
  readonly instanceTypes?: string[];

  /**
   * @schema CreateNodegroupRequest#amiType
   */
  readonly amiType?: string;

  /**
   * @schema CreateNodegroupRequest#remoteAccess
   */
  readonly remoteAccess?: RemoteAccessConfig;

  /**
   * @schema CreateNodegroupRequest#nodeRole
   */
  readonly nodeRole: string;

  /**
   * @schema CreateNodegroupRequest#labels
   */
  readonly labels?: { [key: string]: string };

  /**
   * @schema CreateNodegroupRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateNodegroupRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema CreateNodegroupRequest#launchTemplate
   */
  readonly launchTemplate?: LaunchTemplateSpecification;

  /**
   * @schema CreateNodegroupRequest#version
   */
  readonly version?: string;

  /**
   * @schema CreateNodegroupRequest#releaseVersion
   */
  readonly releaseVersion?: string;

}

/**
 * @schema CreateNodegroupResponse
 */
export interface CreateNodegroupResponse {
  /**
   * @schema CreateNodegroupResponse#nodegroup
   */
  readonly nodegroup?: Nodegroup;

}

/**
 * @schema DeleteClusterRequest
 */
export interface DeleteClusterRequest {
  /**
   * @schema DeleteClusterRequest#name
   */
  readonly name: string;

}

/**
 * @schema DeleteClusterResponse
 */
export interface DeleteClusterResponse {
  /**
   * @schema DeleteClusterResponse#cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema DeleteFargateProfileRequest
 */
export interface DeleteFargateProfileRequest {
  /**
   * @schema DeleteFargateProfileRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema DeleteFargateProfileRequest#fargateProfileName
   */
  readonly fargateProfileName: string;

}

/**
 * @schema DeleteFargateProfileResponse
 */
export interface DeleteFargateProfileResponse {
  /**
   * @schema DeleteFargateProfileResponse#fargateProfile
   */
  readonly fargateProfile?: FargateProfile;

}

/**
 * @schema DeleteNodegroupRequest
 */
export interface DeleteNodegroupRequest {
  /**
   * @schema DeleteNodegroupRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema DeleteNodegroupRequest#nodegroupName
   */
  readonly nodegroupName: string;

}

/**
 * @schema DeleteNodegroupResponse
 */
export interface DeleteNodegroupResponse {
  /**
   * @schema DeleteNodegroupResponse#nodegroup
   */
  readonly nodegroup?: Nodegroup;

}

/**
 * @schema DescribeClusterRequest
 */
export interface DescribeClusterRequest {
  /**
   * @schema DescribeClusterRequest#name
   */
  readonly name: string;

}

/**
 * @schema DescribeClusterResponse
 */
export interface DescribeClusterResponse {
  /**
   * @schema DescribeClusterResponse#cluster
   */
  readonly cluster?: Cluster;

}

/**
 * @schema DescribeFargateProfileRequest
 */
export interface DescribeFargateProfileRequest {
  /**
   * @schema DescribeFargateProfileRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema DescribeFargateProfileRequest#fargateProfileName
   */
  readonly fargateProfileName: string;

}

/**
 * @schema DescribeFargateProfileResponse
 */
export interface DescribeFargateProfileResponse {
  /**
   * @schema DescribeFargateProfileResponse#fargateProfile
   */
  readonly fargateProfile?: FargateProfile;

}

/**
 * @schema DescribeNodegroupRequest
 */
export interface DescribeNodegroupRequest {
  /**
   * @schema DescribeNodegroupRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema DescribeNodegroupRequest#nodegroupName
   */
  readonly nodegroupName: string;

}

/**
 * @schema DescribeNodegroupResponse
 */
export interface DescribeNodegroupResponse {
  /**
   * @schema DescribeNodegroupResponse#nodegroup
   */
  readonly nodegroup?: Nodegroup;

}

/**
 * @schema DescribeUpdateRequest
 */
export interface DescribeUpdateRequest {
  /**
   * @schema DescribeUpdateRequest#name
   */
  readonly name: string;

  /**
   * @schema DescribeUpdateRequest#updateId
   */
  readonly updateId: string;

  /**
   * @schema DescribeUpdateRequest#nodegroupName
   */
  readonly nodegroupName?: string;

}

/**
 * @schema DescribeUpdateResponse
 */
export interface DescribeUpdateResponse {
  /**
   * @schema DescribeUpdateResponse#update
   */
  readonly update?: Update;

}

/**
 * @schema ListClustersRequest
 */
export interface ListClustersRequest {
  /**
   * @schema ListClustersRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListClustersRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListClustersResponse
 */
export interface ListClustersResponse {
  /**
   * @schema ListClustersResponse#clusters
   */
  readonly clusters?: string[];

  /**
   * @schema ListClustersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListFargateProfilesRequest
 */
export interface ListFargateProfilesRequest {
  /**
   * @schema ListFargateProfilesRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema ListFargateProfilesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListFargateProfilesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListFargateProfilesResponse
 */
export interface ListFargateProfilesResponse {
  /**
   * @schema ListFargateProfilesResponse#fargateProfileNames
   */
  readonly fargateProfileNames?: string[];

  /**
   * @schema ListFargateProfilesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListNodegroupsRequest
 */
export interface ListNodegroupsRequest {
  /**
   * @schema ListNodegroupsRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema ListNodegroupsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListNodegroupsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListNodegroupsResponse
 */
export interface ListNodegroupsResponse {
  /**
   * @schema ListNodegroupsResponse#nodegroups
   */
  readonly nodegroups?: string[];

  /**
   * @schema ListNodegroupsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema ListUpdatesRequest
 */
export interface ListUpdatesRequest {
  /**
   * @schema ListUpdatesRequest#name
   */
  readonly name: string;

  /**
   * @schema ListUpdatesRequest#nodegroupName
   */
  readonly nodegroupName?: string;

  /**
   * @schema ListUpdatesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListUpdatesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListUpdatesResponse
 */
export interface ListUpdatesResponse {
  /**
   * @schema ListUpdatesResponse#updateIds
   */
  readonly updateIds?: string[];

  /**
   * @schema ListUpdatesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateClusterConfigRequest
 */
export interface UpdateClusterConfigRequest {
  /**
   * @schema UpdateClusterConfigRequest#name
   */
  readonly name: string;

  /**
   * @schema UpdateClusterConfigRequest#resourcesVpcConfig
   */
  readonly resourcesVpcConfig?: VpcConfigRequest;

  /**
   * @schema UpdateClusterConfigRequest#logging
   */
  readonly logging?: Logging;

  /**
   * @schema UpdateClusterConfigRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema UpdateClusterConfigResponse
 */
export interface UpdateClusterConfigResponse {
  /**
   * @schema UpdateClusterConfigResponse#update
   */
  readonly update?: Update;

}

/**
 * @schema UpdateClusterVersionRequest
 */
export interface UpdateClusterVersionRequest {
  /**
   * @schema UpdateClusterVersionRequest#name
   */
  readonly name: string;

  /**
   * @schema UpdateClusterVersionRequest#version
   */
  readonly version: string;

  /**
   * @schema UpdateClusterVersionRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema UpdateClusterVersionResponse
 */
export interface UpdateClusterVersionResponse {
  /**
   * @schema UpdateClusterVersionResponse#update
   */
  readonly update?: Update;

}

/**
 * @schema UpdateNodegroupConfigRequest
 */
export interface UpdateNodegroupConfigRequest {
  /**
   * @schema UpdateNodegroupConfigRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema UpdateNodegroupConfigRequest#nodegroupName
   */
  readonly nodegroupName: string;

  /**
   * @schema UpdateNodegroupConfigRequest#labels
   */
  readonly labels?: UpdateLabelsPayload;

  /**
   * @schema UpdateNodegroupConfigRequest#scalingConfig
   */
  readonly scalingConfig?: NodegroupScalingConfig;

  /**
   * @schema UpdateNodegroupConfigRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema UpdateNodegroupConfigResponse
 */
export interface UpdateNodegroupConfigResponse {
  /**
   * @schema UpdateNodegroupConfigResponse#update
   */
  readonly update?: Update;

}

/**
 * @schema UpdateNodegroupVersionRequest
 */
export interface UpdateNodegroupVersionRequest {
  /**
   * @schema UpdateNodegroupVersionRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema UpdateNodegroupVersionRequest#nodegroupName
   */
  readonly nodegroupName: string;

  /**
   * @schema UpdateNodegroupVersionRequest#version
   */
  readonly version?: string;

  /**
   * @schema UpdateNodegroupVersionRequest#releaseVersion
   */
  readonly releaseVersion?: string;

  /**
   * @schema UpdateNodegroupVersionRequest#launchTemplate
   */
  readonly launchTemplate?: LaunchTemplateSpecification;

  /**
   * @schema UpdateNodegroupVersionRequest#force
   */
  readonly force?: boolean;

  /**
   * @schema UpdateNodegroupVersionRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema UpdateNodegroupVersionResponse
 */
export interface UpdateNodegroupVersionResponse {
  /**
   * @schema UpdateNodegroupVersionResponse#update
   */
  readonly update?: Update;

}

/**
 * @schema VpcConfigRequest
 */
export interface VpcConfigRequest {
  /**
   * @schema VpcConfigRequest#subnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema VpcConfigRequest#securityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema VpcConfigRequest#endpointPublicAccess
   */
  readonly endpointPublicAccess?: boolean;

  /**
   * @schema VpcConfigRequest#endpointPrivateAccess
   */
  readonly endpointPrivateAccess?: boolean;

  /**
   * @schema VpcConfigRequest#publicAccessCidrs
   */
  readonly publicAccessCidrs?: string[];

}

/**
 * @schema KubernetesNetworkConfigRequest
 */
export interface KubernetesNetworkConfigRequest {
  /**
   * @schema KubernetesNetworkConfigRequest#serviceIpv4Cidr
   */
  readonly serviceIpv4Cidr?: string;

}

/**
 * @schema Logging
 */
export interface Logging {
  /**
   * @schema Logging#clusterLogging
   */
  readonly clusterLogging?: LogSetup[];

}

/**
 * @schema EncryptionConfig
 */
export interface EncryptionConfig {
  /**
   * @schema EncryptionConfig#resources
   */
  readonly resources?: string[];

  /**
   * @schema EncryptionConfig#provider
   */
  readonly provider?: Provider;

}

/**
 * @schema Cluster
 */
export interface Cluster {
  /**
   * @schema Cluster#name
   */
  readonly name?: string;

  /**
   * @schema Cluster#arn
   */
  readonly arn?: string;

  /**
   * @schema Cluster#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Cluster#version
   */
  readonly version?: string;

  /**
   * @schema Cluster#endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema Cluster#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema Cluster#resourcesVpcConfig
   */
  readonly resourcesVpcConfig?: VpcConfigResponse;

  /**
   * @schema Cluster#kubernetesNetworkConfig
   */
  readonly kubernetesNetworkConfig?: KubernetesNetworkConfigResponse;

  /**
   * @schema Cluster#logging
   */
  readonly logging?: Logging;

  /**
   * @schema Cluster#identity
   */
  readonly identity?: Identity;

  /**
   * @schema Cluster#status
   */
  readonly status?: string;

  /**
   * @schema Cluster#certificateAuthority
   */
  readonly certificateAuthority?: Certificate;

  /**
   * @schema Cluster#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema Cluster#platformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema Cluster#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema Cluster#encryptionConfig
   */
  readonly encryptionConfig?: EncryptionConfig[];

}

/**
 * @schema FargateProfileSelector
 */
export interface FargateProfileSelector {
  /**
   * @schema FargateProfileSelector#namespace
   */
  readonly namespace?: string;

  /**
   * @schema FargateProfileSelector#labels
   */
  readonly labels?: { [key: string]: string };

}

/**
 * @schema FargateProfile
 */
export interface FargateProfile {
  /**
   * @schema FargateProfile#fargateProfileName
   */
  readonly fargateProfileName?: string;

  /**
   * @schema FargateProfile#fargateProfileArn
   */
  readonly fargateProfileArn?: string;

  /**
   * @schema FargateProfile#clusterName
   */
  readonly clusterName?: string;

  /**
   * @schema FargateProfile#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema FargateProfile#podExecutionRoleArn
   */
  readonly podExecutionRoleArn?: string;

  /**
   * @schema FargateProfile#subnets
   */
  readonly subnets?: string[];

  /**
   * @schema FargateProfile#selectors
   */
  readonly selectors?: FargateProfileSelector[];

  /**
   * @schema FargateProfile#status
   */
  readonly status?: string;

  /**
   * @schema FargateProfile#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema NodegroupScalingConfig
 */
export interface NodegroupScalingConfig {
  /**
   * @schema NodegroupScalingConfig#minSize
   */
  readonly minSize?: number;

  /**
   * @schema NodegroupScalingConfig#maxSize
   */
  readonly maxSize?: number;

  /**
   * @schema NodegroupScalingConfig#desiredSize
   */
  readonly desiredSize?: number;

}

/**
 * @schema RemoteAccessConfig
 */
export interface RemoteAccessConfig {
  /**
   * @schema RemoteAccessConfig#ec2SshKey
   */
  readonly ec2SshKey?: string;

  /**
   * @schema RemoteAccessConfig#sourceSecurityGroups
   */
  readonly sourceSecurityGroups?: string[];

}

/**
 * @schema LaunchTemplateSpecification
 */
export interface LaunchTemplateSpecification {
  /**
   * @schema LaunchTemplateSpecification#name
   */
  readonly name?: string;

  /**
   * @schema LaunchTemplateSpecification#version
   */
  readonly version?: string;

  /**
   * @schema LaunchTemplateSpecification#id
   */
  readonly id?: string;

}

/**
 * @schema Nodegroup
 */
export interface Nodegroup {
  /**
   * @schema Nodegroup#nodegroupName
   */
  readonly nodegroupName?: string;

  /**
   * @schema Nodegroup#nodegroupArn
   */
  readonly nodegroupArn?: string;

  /**
   * @schema Nodegroup#clusterName
   */
  readonly clusterName?: string;

  /**
   * @schema Nodegroup#version
   */
  readonly version?: string;

  /**
   * @schema Nodegroup#releaseVersion
   */
  readonly releaseVersion?: string;

  /**
   * @schema Nodegroup#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Nodegroup#modifiedAt
   */
  readonly modifiedAt?: string;

  /**
   * @schema Nodegroup#status
   */
  readonly status?: string;

  /**
   * @schema Nodegroup#scalingConfig
   */
  readonly scalingConfig?: NodegroupScalingConfig;

  /**
   * @schema Nodegroup#instanceTypes
   */
  readonly instanceTypes?: string[];

  /**
   * @schema Nodegroup#subnets
   */
  readonly subnets?: string[];

  /**
   * @schema Nodegroup#remoteAccess
   */
  readonly remoteAccess?: RemoteAccessConfig;

  /**
   * @schema Nodegroup#amiType
   */
  readonly amiType?: string;

  /**
   * @schema Nodegroup#nodeRole
   */
  readonly nodeRole?: string;

  /**
   * @schema Nodegroup#labels
   */
  readonly labels?: { [key: string]: string };

  /**
   * @schema Nodegroup#resources
   */
  readonly resources?: NodegroupResources;

  /**
   * @schema Nodegroup#diskSize
   */
  readonly diskSize?: number;

  /**
   * @schema Nodegroup#health
   */
  readonly health?: NodegroupHealth;

  /**
   * @schema Nodegroup#launchTemplate
   */
  readonly launchTemplate?: LaunchTemplateSpecification;

  /**
   * @schema Nodegroup#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema Update
 */
export interface Update {
  /**
   * @schema Update#id
   */
  readonly id?: string;

  /**
   * @schema Update#status
   */
  readonly status?: string;

  /**
   * @schema Update#type
   */
  readonly type?: string;

  /**
   * @schema Update#params
   */
  readonly params?: UpdateParam[];

  /**
   * @schema Update#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema Update#errors
   */
  readonly errors?: ErrorDetail[];

}

/**
 * @schema UpdateLabelsPayload
 */
export interface UpdateLabelsPayload {
  /**
   * @schema UpdateLabelsPayload#addOrUpdateLabels
   */
  readonly addOrUpdateLabels?: { [key: string]: string };

  /**
   * @schema UpdateLabelsPayload#removeLabels
   */
  readonly removeLabels?: string[];

}

/**
 * @schema LogSetup
 */
export interface LogSetup {
  /**
   * @schema LogSetup#types
   */
  readonly types?: string[];

  /**
   * @schema LogSetup#enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema Provider
 */
export interface Provider {
  /**
   * @schema Provider#keyArn
   */
  readonly keyArn?: string;

}

/**
 * @schema VpcConfigResponse
 */
export interface VpcConfigResponse {
  /**
   * @schema VpcConfigResponse#subnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema VpcConfigResponse#securityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema VpcConfigResponse#clusterSecurityGroupId
   */
  readonly clusterSecurityGroupId?: string;

  /**
   * @schema VpcConfigResponse#vpcId
   */
  readonly vpcId?: string;

  /**
   * @schema VpcConfigResponse#endpointPublicAccess
   */
  readonly endpointPublicAccess?: boolean;

  /**
   * @schema VpcConfigResponse#endpointPrivateAccess
   */
  readonly endpointPrivateAccess?: boolean;

  /**
   * @schema VpcConfigResponse#publicAccessCidrs
   */
  readonly publicAccessCidrs?: string[];

}

/**
 * @schema KubernetesNetworkConfigResponse
 */
export interface KubernetesNetworkConfigResponse {
  /**
   * @schema KubernetesNetworkConfigResponse#serviceIpv4Cidr
   */
  readonly serviceIpv4Cidr?: string;

}

/**
 * @schema Identity
 */
export interface Identity {
  /**
   * @schema Identity#oidc
   */
  readonly oidc?: Oidc;

}

/**
 * @schema Certificate
 */
export interface Certificate {
  /**
   * @schema Certificate#data
   */
  readonly data?: string;

}

/**
 * @schema NodegroupResources
 */
export interface NodegroupResources {
  /**
   * @schema NodegroupResources#autoScalingGroups
   */
  readonly autoScalingGroups?: AutoScalingGroup[];

  /**
   * @schema NodegroupResources#remoteAccessSecurityGroup
   */
  readonly remoteAccessSecurityGroup?: string;

}

/**
 * @schema NodegroupHealth
 */
export interface NodegroupHealth {
  /**
   * @schema NodegroupHealth#issues
   */
  readonly issues?: Issue[];

}

/**
 * @schema UpdateParam
 */
export interface UpdateParam {
  /**
   * @schema UpdateParam#type
   */
  readonly type?: string;

  /**
   * @schema UpdateParam#value
   */
  readonly value?: string;

}

/**
 * @schema ErrorDetail
 */
export interface ErrorDetail {
  /**
   * @schema ErrorDetail#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema ErrorDetail#errorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema ErrorDetail#resourceIds
   */
  readonly resourceIds?: string[];

}

/**
 * @schema Oidc
 */
export interface Oidc {
  /**
   * @schema Oidc#issuer
   */
  readonly issuer?: string;

}

/**
 * @schema AutoScalingGroup
 */
export interface AutoScalingGroup {
  /**
   * @schema AutoScalingGroup#name
   */
  readonly name?: string;

}

/**
 * @schema Issue
 */
export interface Issue {
  /**
   * @schema Issue#code
   */
  readonly code?: string;

  /**
   * @schema Issue#message
   */
  readonly message?: string;

  /**
   * @schema Issue#resourceIds
   */
  readonly resourceIds?: string[];

}
