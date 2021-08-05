/**
 * @schema EksCreateClusterRequest
 */
export interface EksCreateClusterRequest {
  /**
   * @schema EksCreateClusterRequest#name
   */
  readonly name: string;

  /**
   * @schema EksCreateClusterRequest#version
   */
  readonly version?: string;

  /**
   * @schema EksCreateClusterRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema EksCreateClusterRequest#resourcesVpcConfig
   */
  readonly resourcesVpcConfig: EksVpcConfigRequest;

  /**
   * @schema EksCreateClusterRequest#kubernetesNetworkConfig
   */
  readonly kubernetesNetworkConfig?: EksKubernetesNetworkConfigRequest;

  /**
   * @schema EksCreateClusterRequest#logging
   */
  readonly logging?: EksLogging;

  /**
   * @schema EksCreateClusterRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema EksCreateClusterRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema EksCreateClusterRequest#encryptionConfig
   */
  readonly encryptionConfig?: EksEncryptionConfig[];

}

/**
 * @schema EksCreateClusterResponse
 */
export interface EksCreateClusterResponse {
  /**
   * @schema EksCreateClusterResponse#cluster
   */
  readonly cluster?: EksCluster;

}

/**
 * @schema EksCreateFargateProfileRequest
 */
export interface EksCreateFargateProfileRequest {
  /**
   * @schema EksCreateFargateProfileRequest#fargateProfileName
   */
  readonly fargateProfileName: string;

  /**
   * @schema EksCreateFargateProfileRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema EksCreateFargateProfileRequest#podExecutionRoleArn
   */
  readonly podExecutionRoleArn: string;

  /**
   * @schema EksCreateFargateProfileRequest#subnets
   */
  readonly subnets?: string[];

  /**
   * @schema EksCreateFargateProfileRequest#selectors
   */
  readonly selectors?: EksFargateProfileSelector[];

  /**
   * @schema EksCreateFargateProfileRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema EksCreateFargateProfileRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema EksCreateFargateProfileResponse
 */
export interface EksCreateFargateProfileResponse {
  /**
   * @schema EksCreateFargateProfileResponse#fargateProfile
   */
  readonly fargateProfile?: EksFargateProfile;

}

/**
 * @schema EksCreateNodegroupRequest
 */
export interface EksCreateNodegroupRequest {
  /**
   * @schema EksCreateNodegroupRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema EksCreateNodegroupRequest#nodegroupName
   */
  readonly nodegroupName: string;

  /**
   * @schema EksCreateNodegroupRequest#scalingConfig
   */
  readonly scalingConfig?: EksNodegroupScalingConfig;

  /**
   * @schema EksCreateNodegroupRequest#diskSize
   */
  readonly diskSize?: number;

  /**
   * @schema EksCreateNodegroupRequest#subnets
   */
  readonly subnets: string[];

  /**
   * @schema EksCreateNodegroupRequest#instanceTypes
   */
  readonly instanceTypes?: string[];

  /**
   * @schema EksCreateNodegroupRequest#amiType
   */
  readonly amiType?: string;

  /**
   * @schema EksCreateNodegroupRequest#remoteAccess
   */
  readonly remoteAccess?: EksRemoteAccessConfig;

  /**
   * @schema EksCreateNodegroupRequest#nodeRole
   */
  readonly nodeRole: string;

  /**
   * @schema EksCreateNodegroupRequest#labels
   */
  readonly labels?: { [key: string]: string };

  /**
   * @schema EksCreateNodegroupRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema EksCreateNodegroupRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema EksCreateNodegroupRequest#launchTemplate
   */
  readonly launchTemplate?: EksLaunchTemplateSpecification;

  /**
   * @schema EksCreateNodegroupRequest#version
   */
  readonly version?: string;

  /**
   * @schema EksCreateNodegroupRequest#releaseVersion
   */
  readonly releaseVersion?: string;

}

/**
 * @schema EksCreateNodegroupResponse
 */
export interface EksCreateNodegroupResponse {
  /**
   * @schema EksCreateNodegroupResponse#nodegroup
   */
  readonly nodegroup?: EksNodegroup;

}

/**
 * @schema EksDeleteClusterRequest
 */
export interface EksDeleteClusterRequest {
  /**
   * @schema EksDeleteClusterRequest#name
   */
  readonly name: string;

}

/**
 * @schema EksDeleteClusterResponse
 */
export interface EksDeleteClusterResponse {
  /**
   * @schema EksDeleteClusterResponse#cluster
   */
  readonly cluster?: EksCluster;

}

/**
 * @schema EksDeleteFargateProfileRequest
 */
export interface EksDeleteFargateProfileRequest {
  /**
   * @schema EksDeleteFargateProfileRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema EksDeleteFargateProfileRequest#fargateProfileName
   */
  readonly fargateProfileName: string;

}

/**
 * @schema EksDeleteFargateProfileResponse
 */
export interface EksDeleteFargateProfileResponse {
  /**
   * @schema EksDeleteFargateProfileResponse#fargateProfile
   */
  readonly fargateProfile?: EksFargateProfile;

}

/**
 * @schema EksDeleteNodegroupRequest
 */
export interface EksDeleteNodegroupRequest {
  /**
   * @schema EksDeleteNodegroupRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema EksDeleteNodegroupRequest#nodegroupName
   */
  readonly nodegroupName: string;

}

/**
 * @schema EksDeleteNodegroupResponse
 */
export interface EksDeleteNodegroupResponse {
  /**
   * @schema EksDeleteNodegroupResponse#nodegroup
   */
  readonly nodegroup?: EksNodegroup;

}

/**
 * @schema EksDescribeClusterRequest
 */
export interface EksDescribeClusterRequest {
  /**
   * @schema EksDescribeClusterRequest#name
   */
  readonly name: string;

}

/**
 * @schema EksDescribeClusterResponse
 */
export interface EksDescribeClusterResponse {
  /**
   * @schema EksDescribeClusterResponse#cluster
   */
  readonly cluster?: EksCluster;

}

/**
 * @schema EksDescribeFargateProfileRequest
 */
export interface EksDescribeFargateProfileRequest {
  /**
   * @schema EksDescribeFargateProfileRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema EksDescribeFargateProfileRequest#fargateProfileName
   */
  readonly fargateProfileName: string;

}

/**
 * @schema EksDescribeFargateProfileResponse
 */
export interface EksDescribeFargateProfileResponse {
  /**
   * @schema EksDescribeFargateProfileResponse#fargateProfile
   */
  readonly fargateProfile?: EksFargateProfile;

}

/**
 * @schema EksDescribeNodegroupRequest
 */
export interface EksDescribeNodegroupRequest {
  /**
   * @schema EksDescribeNodegroupRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema EksDescribeNodegroupRequest#nodegroupName
   */
  readonly nodegroupName: string;

}

/**
 * @schema EksDescribeNodegroupResponse
 */
export interface EksDescribeNodegroupResponse {
  /**
   * @schema EksDescribeNodegroupResponse#nodegroup
   */
  readonly nodegroup?: EksNodegroup;

}

/**
 * @schema EksDescribeUpdateRequest
 */
export interface EksDescribeUpdateRequest {
  /**
   * @schema EksDescribeUpdateRequest#name
   */
  readonly name: string;

  /**
   * @schema EksDescribeUpdateRequest#updateId
   */
  readonly updateId: string;

  /**
   * @schema EksDescribeUpdateRequest#nodegroupName
   */
  readonly nodegroupName?: string;

}

/**
 * @schema EksDescribeUpdateResponse
 */
export interface EksDescribeUpdateResponse {
  /**
   * @schema EksDescribeUpdateResponse#update
   */
  readonly update?: EksUpdate;

}

/**
 * @schema EksListClustersRequest
 */
export interface EksListClustersRequest {
  /**
   * @schema EksListClustersRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EksListClustersRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EksListClustersResponse
 */
export interface EksListClustersResponse {
  /**
   * @schema EksListClustersResponse#clusters
   */
  readonly clusters?: string[];

  /**
   * @schema EksListClustersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EksListFargateProfilesRequest
 */
export interface EksListFargateProfilesRequest {
  /**
   * @schema EksListFargateProfilesRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema EksListFargateProfilesRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EksListFargateProfilesRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EksListFargateProfilesResponse
 */
export interface EksListFargateProfilesResponse {
  /**
   * @schema EksListFargateProfilesResponse#fargateProfileNames
   */
  readonly fargateProfileNames?: string[];

  /**
   * @schema EksListFargateProfilesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EksListNodegroupsRequest
 */
export interface EksListNodegroupsRequest {
  /**
   * @schema EksListNodegroupsRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema EksListNodegroupsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EksListNodegroupsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EksListNodegroupsResponse
 */
export interface EksListNodegroupsResponse {
  /**
   * @schema EksListNodegroupsResponse#nodegroups
   */
  readonly nodegroups?: string[];

  /**
   * @schema EksListNodegroupsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EksListTagsForResourceRequest
 */
export interface EksListTagsForResourceRequest {
  /**
   * @schema EksListTagsForResourceRequest#resourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema EksListTagsForResourceResponse
 */
export interface EksListTagsForResourceResponse {
  /**
   * @schema EksListTagsForResourceResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema EksListUpdatesRequest
 */
export interface EksListUpdatesRequest {
  /**
   * @schema EksListUpdatesRequest#name
   */
  readonly name: string;

  /**
   * @schema EksListUpdatesRequest#nodegroupName
   */
  readonly nodegroupName?: string;

  /**
   * @schema EksListUpdatesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EksListUpdatesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema EksListUpdatesResponse
 */
export interface EksListUpdatesResponse {
  /**
   * @schema EksListUpdatesResponse#updateIds
   */
  readonly updateIds?: string[];

  /**
   * @schema EksListUpdatesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema EksTagResourceRequest
 */
export interface EksTagResourceRequest {
  /**
   * @schema EksTagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema EksTagResourceRequest#tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema EksTagResourceResponse
 */
export interface EksTagResourceResponse {
}

/**
 * @schema EksUntagResourceRequest
 */
export interface EksUntagResourceRequest {
  /**
   * @schema EksUntagResourceRequest#resourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema EksUntagResourceRequest#tagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema EksUntagResourceResponse
 */
export interface EksUntagResourceResponse {
}

/**
 * @schema EksUpdateClusterConfigRequest
 */
export interface EksUpdateClusterConfigRequest {
  /**
   * @schema EksUpdateClusterConfigRequest#name
   */
  readonly name: string;

  /**
   * @schema EksUpdateClusterConfigRequest#resourcesVpcConfig
   */
  readonly resourcesVpcConfig?: EksVpcConfigRequest;

  /**
   * @schema EksUpdateClusterConfigRequest#logging
   */
  readonly logging?: EksLogging;

  /**
   * @schema EksUpdateClusterConfigRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema EksUpdateClusterConfigResponse
 */
export interface EksUpdateClusterConfigResponse {
  /**
   * @schema EksUpdateClusterConfigResponse#update
   */
  readonly update?: EksUpdate;

}

/**
 * @schema EksUpdateClusterVersionRequest
 */
export interface EksUpdateClusterVersionRequest {
  /**
   * @schema EksUpdateClusterVersionRequest#name
   */
  readonly name: string;

  /**
   * @schema EksUpdateClusterVersionRequest#version
   */
  readonly version: string;

  /**
   * @schema EksUpdateClusterVersionRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema EksUpdateClusterVersionResponse
 */
export interface EksUpdateClusterVersionResponse {
  /**
   * @schema EksUpdateClusterVersionResponse#update
   */
  readonly update?: EksUpdate;

}

/**
 * @schema EksUpdateNodegroupConfigRequest
 */
export interface EksUpdateNodegroupConfigRequest {
  /**
   * @schema EksUpdateNodegroupConfigRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema EksUpdateNodegroupConfigRequest#nodegroupName
   */
  readonly nodegroupName: string;

  /**
   * @schema EksUpdateNodegroupConfigRequest#labels
   */
  readonly labels?: EksUpdateLabelsPayload;

  /**
   * @schema EksUpdateNodegroupConfigRequest#scalingConfig
   */
  readonly scalingConfig?: EksNodegroupScalingConfig;

  /**
   * @schema EksUpdateNodegroupConfigRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema EksUpdateNodegroupConfigResponse
 */
export interface EksUpdateNodegroupConfigResponse {
  /**
   * @schema EksUpdateNodegroupConfigResponse#update
   */
  readonly update?: EksUpdate;

}

/**
 * @schema EksUpdateNodegroupVersionRequest
 */
export interface EksUpdateNodegroupVersionRequest {
  /**
   * @schema EksUpdateNodegroupVersionRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema EksUpdateNodegroupVersionRequest#nodegroupName
   */
  readonly nodegroupName: string;

  /**
   * @schema EksUpdateNodegroupVersionRequest#version
   */
  readonly version?: string;

  /**
   * @schema EksUpdateNodegroupVersionRequest#releaseVersion
   */
  readonly releaseVersion?: string;

  /**
   * @schema EksUpdateNodegroupVersionRequest#launchTemplate
   */
  readonly launchTemplate?: EksLaunchTemplateSpecification;

  /**
   * @schema EksUpdateNodegroupVersionRequest#force
   */
  readonly force?: boolean;

  /**
   * @schema EksUpdateNodegroupVersionRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * @schema EksUpdateNodegroupVersionResponse
 */
export interface EksUpdateNodegroupVersionResponse {
  /**
   * @schema EksUpdateNodegroupVersionResponse#update
   */
  readonly update?: EksUpdate;

}

/**
 * @schema EksVpcConfigRequest
 */
export interface EksVpcConfigRequest {
  /**
   * @schema EksVpcConfigRequest#subnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema EksVpcConfigRequest#securityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema EksVpcConfigRequest#endpointPublicAccess
   */
  readonly endpointPublicAccess?: boolean;

  /**
   * @schema EksVpcConfigRequest#endpointPrivateAccess
   */
  readonly endpointPrivateAccess?: boolean;

  /**
   * @schema EksVpcConfigRequest#publicAccessCidrs
   */
  readonly publicAccessCidrs?: string[];

}

/**
 * @schema EksKubernetesNetworkConfigRequest
 */
export interface EksKubernetesNetworkConfigRequest {
  /**
   * @schema EksKubernetesNetworkConfigRequest#serviceIpv4Cidr
   */
  readonly serviceIpv4Cidr?: string;

}

/**
 * @schema EksLogging
 */
export interface EksLogging {
  /**
   * @schema EksLogging#clusterLogging
   */
  readonly clusterLogging?: EksLogSetup[];

}

/**
 * @schema EksEncryptionConfig
 */
export interface EksEncryptionConfig {
  /**
   * @schema EksEncryptionConfig#resources
   */
  readonly resources?: string[];

  /**
   * @schema EksEncryptionConfig#provider
   */
  readonly provider?: EksProvider;

}

/**
 * @schema EksCluster
 */
export interface EksCluster {
  /**
   * @schema EksCluster#name
   */
  readonly name?: string;

  /**
   * @schema EksCluster#arn
   */
  readonly arn?: string;

  /**
   * @schema EksCluster#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema EksCluster#version
   */
  readonly version?: string;

  /**
   * @schema EksCluster#endpoint
   */
  readonly endpoint?: string;

  /**
   * @schema EksCluster#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema EksCluster#resourcesVpcConfig
   */
  readonly resourcesVpcConfig?: EksVpcConfigResponse;

  /**
   * @schema EksCluster#kubernetesNetworkConfig
   */
  readonly kubernetesNetworkConfig?: EksKubernetesNetworkConfigResponse;

  /**
   * @schema EksCluster#logging
   */
  readonly logging?: EksLogging;

  /**
   * @schema EksCluster#identity
   */
  readonly identity?: EksIdentity;

  /**
   * @schema EksCluster#status
   */
  readonly status?: string;

  /**
   * @schema EksCluster#certificateAuthority
   */
  readonly certificateAuthority?: EksCertificate;

  /**
   * @schema EksCluster#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema EksCluster#platformVersion
   */
  readonly platformVersion?: string;

  /**
   * @schema EksCluster#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema EksCluster#encryptionConfig
   */
  readonly encryptionConfig?: EksEncryptionConfig[];

}

/**
 * @schema EksFargateProfileSelector
 */
export interface EksFargateProfileSelector {
  /**
   * @schema EksFargateProfileSelector#namespace
   */
  readonly namespace?: string;

  /**
   * @schema EksFargateProfileSelector#labels
   */
  readonly labels?: { [key: string]: string };

}

/**
 * @schema EksFargateProfile
 */
export interface EksFargateProfile {
  /**
   * @schema EksFargateProfile#fargateProfileName
   */
  readonly fargateProfileName?: string;

  /**
   * @schema EksFargateProfile#fargateProfileArn
   */
  readonly fargateProfileArn?: string;

  /**
   * @schema EksFargateProfile#clusterName
   */
  readonly clusterName?: string;

  /**
   * @schema EksFargateProfile#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema EksFargateProfile#podExecutionRoleArn
   */
  readonly podExecutionRoleArn?: string;

  /**
   * @schema EksFargateProfile#subnets
   */
  readonly subnets?: string[];

  /**
   * @schema EksFargateProfile#selectors
   */
  readonly selectors?: EksFargateProfileSelector[];

  /**
   * @schema EksFargateProfile#status
   */
  readonly status?: string;

  /**
   * @schema EksFargateProfile#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema EksNodegroupScalingConfig
 */
export interface EksNodegroupScalingConfig {
  /**
   * @schema EksNodegroupScalingConfig#minSize
   */
  readonly minSize?: number;

  /**
   * @schema EksNodegroupScalingConfig#maxSize
   */
  readonly maxSize?: number;

  /**
   * @schema EksNodegroupScalingConfig#desiredSize
   */
  readonly desiredSize?: number;

}

/**
 * @schema EksRemoteAccessConfig
 */
export interface EksRemoteAccessConfig {
  /**
   * @schema EksRemoteAccessConfig#ec2SshKey
   */
  readonly ec2SshKey?: string;

  /**
   * @schema EksRemoteAccessConfig#sourceSecurityGroups
   */
  readonly sourceSecurityGroups?: string[];

}

/**
 * @schema EksLaunchTemplateSpecification
 */
export interface EksLaunchTemplateSpecification {
  /**
   * @schema EksLaunchTemplateSpecification#name
   */
  readonly name?: string;

  /**
   * @schema EksLaunchTemplateSpecification#version
   */
  readonly version?: string;

  /**
   * @schema EksLaunchTemplateSpecification#id
   */
  readonly id?: string;

}

/**
 * @schema EksNodegroup
 */
export interface EksNodegroup {
  /**
   * @schema EksNodegroup#nodegroupName
   */
  readonly nodegroupName?: string;

  /**
   * @schema EksNodegroup#nodegroupArn
   */
  readonly nodegroupArn?: string;

  /**
   * @schema EksNodegroup#clusterName
   */
  readonly clusterName?: string;

  /**
   * @schema EksNodegroup#version
   */
  readonly version?: string;

  /**
   * @schema EksNodegroup#releaseVersion
   */
  readonly releaseVersion?: string;

  /**
   * @schema EksNodegroup#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema EksNodegroup#modifiedAt
   */
  readonly modifiedAt?: string;

  /**
   * @schema EksNodegroup#status
   */
  readonly status?: string;

  /**
   * @schema EksNodegroup#scalingConfig
   */
  readonly scalingConfig?: EksNodegroupScalingConfig;

  /**
   * @schema EksNodegroup#instanceTypes
   */
  readonly instanceTypes?: string[];

  /**
   * @schema EksNodegroup#subnets
   */
  readonly subnets?: string[];

  /**
   * @schema EksNodegroup#remoteAccess
   */
  readonly remoteAccess?: EksRemoteAccessConfig;

  /**
   * @schema EksNodegroup#amiType
   */
  readonly amiType?: string;

  /**
   * @schema EksNodegroup#nodeRole
   */
  readonly nodeRole?: string;

  /**
   * @schema EksNodegroup#labels
   */
  readonly labels?: { [key: string]: string };

  /**
   * @schema EksNodegroup#resources
   */
  readonly resources?: EksNodegroupResources;

  /**
   * @schema EksNodegroup#diskSize
   */
  readonly diskSize?: number;

  /**
   * @schema EksNodegroup#health
   */
  readonly health?: EksNodegroupHealth;

  /**
   * @schema EksNodegroup#launchTemplate
   */
  readonly launchTemplate?: EksLaunchTemplateSpecification;

  /**
   * @schema EksNodegroup#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema EksUpdate
 */
export interface EksUpdate {
  /**
   * @schema EksUpdate#id
   */
  readonly id?: string;

  /**
   * @schema EksUpdate#status
   */
  readonly status?: string;

  /**
   * @schema EksUpdate#type
   */
  readonly type?: string;

  /**
   * @schema EksUpdate#params
   */
  readonly params?: EksUpdateParam[];

  /**
   * @schema EksUpdate#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema EksUpdate#errors
   */
  readonly errors?: EksErrorDetail[];

}

/**
 * @schema EksUpdateLabelsPayload
 */
export interface EksUpdateLabelsPayload {
  /**
   * @schema EksUpdateLabelsPayload#addOrUpdateLabels
   */
  readonly addOrUpdateLabels?: { [key: string]: string };

  /**
   * @schema EksUpdateLabelsPayload#removeLabels
   */
  readonly removeLabels?: string[];

}

/**
 * @schema EksLogSetup
 */
export interface EksLogSetup {
  /**
   * @schema EksLogSetup#types
   */
  readonly types?: string[];

  /**
   * @schema EksLogSetup#enabled
   */
  readonly enabled?: boolean;

}

/**
 * @schema EksProvider
 */
export interface EksProvider {
  /**
   * @schema EksProvider#keyArn
   */
  readonly keyArn?: string;

}

/**
 * @schema EksVpcConfigResponse
 */
export interface EksVpcConfigResponse {
  /**
   * @schema EksVpcConfigResponse#subnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema EksVpcConfigResponse#securityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema EksVpcConfigResponse#clusterSecurityGroupId
   */
  readonly clusterSecurityGroupId?: string;

  /**
   * @schema EksVpcConfigResponse#vpcId
   */
  readonly vpcId?: string;

  /**
   * @schema EksVpcConfigResponse#endpointPublicAccess
   */
  readonly endpointPublicAccess?: boolean;

  /**
   * @schema EksVpcConfigResponse#endpointPrivateAccess
   */
  readonly endpointPrivateAccess?: boolean;

  /**
   * @schema EksVpcConfigResponse#publicAccessCidrs
   */
  readonly publicAccessCidrs?: string[];

}

/**
 * @schema EksKubernetesNetworkConfigResponse
 */
export interface EksKubernetesNetworkConfigResponse {
  /**
   * @schema EksKubernetesNetworkConfigResponse#serviceIpv4Cidr
   */
  readonly serviceIpv4Cidr?: string;

}

/**
 * @schema EksIdentity
 */
export interface EksIdentity {
  /**
   * @schema EksIdentity#oidc
   */
  readonly oidc?: Eksoidc;

}

/**
 * @schema EksCertificate
 */
export interface EksCertificate {
  /**
   * @schema EksCertificate#data
   */
  readonly data?: string;

}

/**
 * @schema EksNodegroupResources
 */
export interface EksNodegroupResources {
  /**
   * @schema EksNodegroupResources#autoScalingGroups
   */
  readonly autoScalingGroups?: EksAutoScalingGroup[];

  /**
   * @schema EksNodegroupResources#remoteAccessSecurityGroup
   */
  readonly remoteAccessSecurityGroup?: string;

}

/**
 * @schema EksNodegroupHealth
 */
export interface EksNodegroupHealth {
  /**
   * @schema EksNodegroupHealth#issues
   */
  readonly issues?: EksIssue[];

}

/**
 * @schema EksUpdateParam
 */
export interface EksUpdateParam {
  /**
   * @schema EksUpdateParam#type
   */
  readonly type?: string;

  /**
   * @schema EksUpdateParam#value
   */
  readonly value?: string;

}

/**
 * @schema EksErrorDetail
 */
export interface EksErrorDetail {
  /**
   * @schema EksErrorDetail#errorCode
   */
  readonly errorCode?: string;

  /**
   * @schema EksErrorDetail#errorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema EksErrorDetail#resourceIds
   */
  readonly resourceIds?: string[];

}

/**
 * @schema Eksoidc
 */
export interface Eksoidc {
  /**
   * @schema Eksoidc#issuer
   */
  readonly issuer?: string;

}

/**
 * @schema EksAutoScalingGroup
 */
export interface EksAutoScalingGroup {
  /**
   * @schema EksAutoScalingGroup#name
   */
  readonly name?: string;

}

/**
 * @schema EksIssue
 */
export interface EksIssue {
  /**
   * @schema EksIssue#code
   */
  readonly code?: string;

  /**
   * @schema EksIssue#message
   */
  readonly message?: string;

  /**
   * @schema EksIssue#resourceIds
   */
  readonly resourceIds?: string[];

}
