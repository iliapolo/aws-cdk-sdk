/**
 * @schema AssignInstanceRequest
 */
export interface AssignInstanceRequest {
  /**
   * @schema AssignInstanceRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema AssignInstanceRequest#LayerIds
   */
  readonly layerIds: string[];

}

/**
 * @schema AssignVolumeRequest
 */
export interface AssignVolumeRequest {
  /**
   * @schema AssignVolumeRequest#VolumeId
   */
  readonly volumeId: string;

  /**
   * @schema AssignVolumeRequest#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * @schema AssociateElasticIpRequest
 */
export interface AssociateElasticIpRequest {
  /**
   * @schema AssociateElasticIpRequest#ElasticIp
   */
  readonly elasticIp: string;

  /**
   * @schema AssociateElasticIpRequest#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * @schema AttachElasticLoadBalancerRequest
 */
export interface AttachElasticLoadBalancerRequest {
  /**
   * @schema AttachElasticLoadBalancerRequest#ElasticLoadBalancerName
   */
  readonly elasticLoadBalancerName: string;

  /**
   * @schema AttachElasticLoadBalancerRequest#LayerId
   */
  readonly layerId: string;

}

/**
 * @schema CloneStackRequest
 */
export interface CloneStackRequest {
  /**
   * @schema CloneStackRequest#SourceStackId
   */
  readonly sourceStackId: string;

  /**
   * @schema CloneStackRequest#Name
   */
  readonly name?: string;

  /**
   * @schema CloneStackRequest#Region
   */
  readonly region?: string;

  /**
   * @schema CloneStackRequest#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema CloneStackRequest#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema CloneStackRequest#ServiceRoleArn
   */
  readonly serviceRoleArn: string;

  /**
   * @schema CloneStackRequest#DefaultInstanceProfileArn
   */
  readonly defaultInstanceProfileArn?: string;

  /**
   * @schema CloneStackRequest#DefaultOs
   */
  readonly defaultOs?: string;

  /**
   * @schema CloneStackRequest#HostnameTheme
   */
  readonly hostnameTheme?: string;

  /**
   * @schema CloneStackRequest#DefaultAvailabilityZone
   */
  readonly defaultAvailabilityZone?: string;

  /**
   * @schema CloneStackRequest#DefaultSubnetId
   */
  readonly defaultSubnetId?: string;

  /**
   * @schema CloneStackRequest#CustomJson
   */
  readonly customJson?: string;

  /**
   * @schema CloneStackRequest#ConfigurationManager
   */
  readonly configurationManager?: StackConfigurationManager;

  /**
   * @schema CloneStackRequest#ChefConfiguration
   */
  readonly chefConfiguration?: ChefConfiguration;

  /**
   * @schema CloneStackRequest#UseCustomCookbooks
   */
  readonly useCustomCookbooks?: boolean;

  /**
   * @schema CloneStackRequest#UseOpsworksSecurityGroups
   */
  readonly useOpsworksSecurityGroups?: boolean;

  /**
   * @schema CloneStackRequest#CustomCookbooksSource
   */
  readonly customCookbooksSource?: Source;

  /**
   * @schema CloneStackRequest#DefaultSshKeyName
   */
  readonly defaultSshKeyName?: string;

  /**
   * @schema CloneStackRequest#ClonePermissions
   */
  readonly clonePermissions?: boolean;

  /**
   * @schema CloneStackRequest#CloneAppIds
   */
  readonly cloneAppIds?: string[];

  /**
   * @schema CloneStackRequest#DefaultRootDeviceType
   */
  readonly defaultRootDeviceType?: string;

  /**
   * @schema CloneStackRequest#AgentVersion
   */
  readonly agentVersion?: string;

}

/**
 * @schema CloneStackResult
 */
export interface CloneStackResult {
  /**
   * @schema CloneStackResult#StackId
   */
  readonly stackId?: string;

}

/**
 * @schema CreateAppRequest
 */
export interface CreateAppRequest {
  /**
   * @schema CreateAppRequest#StackId
   */
  readonly stackId: string;

  /**
   * @schema CreateAppRequest#Shortname
   */
  readonly shortname?: string;

  /**
   * @schema CreateAppRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateAppRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateAppRequest#DataSources
   */
  readonly dataSources?: DataSource[];

  /**
   * @schema CreateAppRequest#Type
   */
  readonly type: string;

  /**
   * @schema CreateAppRequest#AppSource
   */
  readonly appSource?: Source;

  /**
   * @schema CreateAppRequest#Domains
   */
  readonly domains?: string[];

  /**
   * @schema CreateAppRequest#EnableSsl
   */
  readonly enableSsl?: boolean;

  /**
   * @schema CreateAppRequest#SslConfiguration
   */
  readonly sslConfiguration?: SslConfiguration;

  /**
   * @schema CreateAppRequest#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema CreateAppRequest#Environment
   */
  readonly environment?: EnvironmentVariable[];

}

/**
 * @schema CreateAppResult
 */
export interface CreateAppResult {
  /**
   * @schema CreateAppResult#AppId
   */
  readonly appId?: string;

}

/**
 * @schema CreateDeploymentRequest
 */
export interface CreateDeploymentRequest {
  /**
   * @schema CreateDeploymentRequest#StackId
   */
  readonly stackId: string;

  /**
   * @schema CreateDeploymentRequest#AppId
   */
  readonly appId?: string;

  /**
   * @schema CreateDeploymentRequest#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema CreateDeploymentRequest#LayerIds
   */
  readonly layerIds?: string[];

  /**
   * @schema CreateDeploymentRequest#Command
   */
  readonly command: DeploymentCommand;

  /**
   * @schema CreateDeploymentRequest#Comment
   */
  readonly comment?: string;

  /**
   * @schema CreateDeploymentRequest#CustomJson
   */
  readonly customJson?: string;

}

/**
 * @schema CreateDeploymentResult
 */
export interface CreateDeploymentResult {
  /**
   * @schema CreateDeploymentResult#DeploymentId
   */
  readonly deploymentId?: string;

}

/**
 * @schema CreateInstanceRequest
 */
export interface CreateInstanceRequest {
  /**
   * @schema CreateInstanceRequest#StackId
   */
  readonly stackId: string;

  /**
   * @schema CreateInstanceRequest#LayerIds
   */
  readonly layerIds: string[];

  /**
   * @schema CreateInstanceRequest#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema CreateInstanceRequest#AutoScalingType
   */
  readonly autoScalingType?: string;

  /**
   * @schema CreateInstanceRequest#Hostname
   */
  readonly hostname?: string;

  /**
   * @schema CreateInstanceRequest#Os
   */
  readonly os?: string;

  /**
   * @schema CreateInstanceRequest#AmiId
   */
  readonly amiId?: string;

  /**
   * @schema CreateInstanceRequest#SshKeyName
   */
  readonly sshKeyName?: string;

  /**
   * @schema CreateInstanceRequest#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema CreateInstanceRequest#VirtualizationType
   */
  readonly virtualizationType?: string;

  /**
   * @schema CreateInstanceRequest#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema CreateInstanceRequest#Architecture
   */
  readonly architecture?: string;

  /**
   * @schema CreateInstanceRequest#RootDeviceType
   */
  readonly rootDeviceType?: string;

  /**
   * @schema CreateInstanceRequest#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: BlockDeviceMapping[];

  /**
   * @schema CreateInstanceRequest#InstallUpdatesOnBoot
   */
  readonly installUpdatesOnBoot?: boolean;

  /**
   * @schema CreateInstanceRequest#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema CreateInstanceRequest#AgentVersion
   */
  readonly agentVersion?: string;

  /**
   * @schema CreateInstanceRequest#Tenancy
   */
  readonly tenancy?: string;

}

/**
 * @schema CreateInstanceResult
 */
export interface CreateInstanceResult {
  /**
   * @schema CreateInstanceResult#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * @schema CreateLayerRequest
 */
export interface CreateLayerRequest {
  /**
   * @schema CreateLayerRequest#StackId
   */
  readonly stackId: string;

  /**
   * @schema CreateLayerRequest#Type
   */
  readonly type: string;

  /**
   * @schema CreateLayerRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateLayerRequest#Shortname
   */
  readonly shortname: string;

  /**
   * @schema CreateLayerRequest#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema CreateLayerRequest#CloudWatchLogsConfiguration
   */
  readonly cloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;

  /**
   * @schema CreateLayerRequest#CustomInstanceProfileArn
   */
  readonly customInstanceProfileArn?: string;

  /**
   * @schema CreateLayerRequest#CustomJson
   */
  readonly customJson?: string;

  /**
   * @schema CreateLayerRequest#CustomSecurityGroupIds
   */
  readonly customSecurityGroupIds?: string[];

  /**
   * @schema CreateLayerRequest#Packages
   */
  readonly packages?: string[];

  /**
   * @schema CreateLayerRequest#VolumeConfigurations
   */
  readonly volumeConfigurations?: VolumeConfiguration[];

  /**
   * @schema CreateLayerRequest#EnableAutoHealing
   */
  readonly enableAutoHealing?: boolean;

  /**
   * @schema CreateLayerRequest#AutoAssignElasticIps
   */
  readonly autoAssignElasticIps?: boolean;

  /**
   * @schema CreateLayerRequest#AutoAssignPublicIps
   */
  readonly autoAssignPublicIps?: boolean;

  /**
   * @schema CreateLayerRequest#CustomRecipes
   */
  readonly customRecipes?: Recipes;

  /**
   * @schema CreateLayerRequest#InstallUpdatesOnBoot
   */
  readonly installUpdatesOnBoot?: boolean;

  /**
   * @schema CreateLayerRequest#UseEbsOptimizedInstances
   */
  readonly useEbsOptimizedInstances?: boolean;

  /**
   * @schema CreateLayerRequest#LifecycleEventConfiguration
   */
  readonly lifecycleEventConfiguration?: LifecycleEventConfiguration;

}

/**
 * @schema CreateLayerResult
 */
export interface CreateLayerResult {
  /**
   * @schema CreateLayerResult#LayerId
   */
  readonly layerId?: string;

}

/**
 * @schema CreateStackRequest
 */
export interface CreateStackRequest {
  /**
   * @schema CreateStackRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateStackRequest#Region
   */
  readonly region: string;

  /**
   * @schema CreateStackRequest#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema CreateStackRequest#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema CreateStackRequest#ServiceRoleArn
   */
  readonly serviceRoleArn: string;

  /**
   * @schema CreateStackRequest#DefaultInstanceProfileArn
   */
  readonly defaultInstanceProfileArn: string;

  /**
   * @schema CreateStackRequest#DefaultOs
   */
  readonly defaultOs?: string;

  /**
   * @schema CreateStackRequest#HostnameTheme
   */
  readonly hostnameTheme?: string;

  /**
   * @schema CreateStackRequest#DefaultAvailabilityZone
   */
  readonly defaultAvailabilityZone?: string;

  /**
   * @schema CreateStackRequest#DefaultSubnetId
   */
  readonly defaultSubnetId?: string;

  /**
   * @schema CreateStackRequest#CustomJson
   */
  readonly customJson?: string;

  /**
   * @schema CreateStackRequest#ConfigurationManager
   */
  readonly configurationManager?: StackConfigurationManager;

  /**
   * @schema CreateStackRequest#ChefConfiguration
   */
  readonly chefConfiguration?: ChefConfiguration;

  /**
   * @schema CreateStackRequest#UseCustomCookbooks
   */
  readonly useCustomCookbooks?: boolean;

  /**
   * @schema CreateStackRequest#UseOpsworksSecurityGroups
   */
  readonly useOpsworksSecurityGroups?: boolean;

  /**
   * @schema CreateStackRequest#CustomCookbooksSource
   */
  readonly customCookbooksSource?: Source;

  /**
   * @schema CreateStackRequest#DefaultSshKeyName
   */
  readonly defaultSshKeyName?: string;

  /**
   * @schema CreateStackRequest#DefaultRootDeviceType
   */
  readonly defaultRootDeviceType?: string;

  /**
   * @schema CreateStackRequest#AgentVersion
   */
  readonly agentVersion?: string;

}

/**
 * @schema CreateStackResult
 */
export interface CreateStackResult {
  /**
   * @schema CreateStackResult#StackId
   */
  readonly stackId?: string;

}

/**
 * @schema CreateUserProfileRequest
 */
export interface CreateUserProfileRequest {
  /**
   * @schema CreateUserProfileRequest#IamUserArn
   */
  readonly iamUserArn: string;

  /**
   * @schema CreateUserProfileRequest#SshUsername
   */
  readonly sshUsername?: string;

  /**
   * @schema CreateUserProfileRequest#SshPublicKey
   */
  readonly sshPublicKey?: string;

  /**
   * @schema CreateUserProfileRequest#AllowSelfManagement
   */
  readonly allowSelfManagement?: boolean;

}

/**
 * @schema CreateUserProfileResult
 */
export interface CreateUserProfileResult {
  /**
   * @schema CreateUserProfileResult#IamUserArn
   */
  readonly iamUserArn?: string;

}

/**
 * @schema DeleteAppRequest
 */
export interface DeleteAppRequest {
  /**
   * @schema DeleteAppRequest#AppId
   */
  readonly appId: string;

}

/**
 * @schema DeleteInstanceRequest
 */
export interface DeleteInstanceRequest {
  /**
   * @schema DeleteInstanceRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema DeleteInstanceRequest#DeleteElasticIp
   */
  readonly deleteElasticIp?: boolean;

  /**
   * @schema DeleteInstanceRequest#DeleteVolumes
   */
  readonly deleteVolumes?: boolean;

}

/**
 * @schema DeleteLayerRequest
 */
export interface DeleteLayerRequest {
  /**
   * @schema DeleteLayerRequest#LayerId
   */
  readonly layerId: string;

}

/**
 * @schema DeleteStackRequest
 */
export interface DeleteStackRequest {
  /**
   * @schema DeleteStackRequest#StackId
   */
  readonly stackId: string;

}

/**
 * @schema DeleteUserProfileRequest
 */
export interface DeleteUserProfileRequest {
  /**
   * @schema DeleteUserProfileRequest#IamUserArn
   */
  readonly iamUserArn: string;

}

/**
 * @schema DeregisterEcsClusterRequest
 */
export interface DeregisterEcsClusterRequest {
  /**
   * @schema DeregisterEcsClusterRequest#EcsClusterArn
   */
  readonly ecsClusterArn: string;

}

/**
 * @schema DeregisterElasticIpRequest
 */
export interface DeregisterElasticIpRequest {
  /**
   * @schema DeregisterElasticIpRequest#ElasticIp
   */
  readonly elasticIp: string;

}

/**
 * @schema DeregisterInstanceRequest
 */
export interface DeregisterInstanceRequest {
  /**
   * @schema DeregisterInstanceRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema DeregisterRdsDbInstanceRequest
 */
export interface DeregisterRdsDbInstanceRequest {
  /**
   * @schema DeregisterRdsDbInstanceRequest#RdsDbInstanceArn
   */
  readonly rdsDbInstanceArn: string;

}

/**
 * @schema DeregisterVolumeRequest
 */
export interface DeregisterVolumeRequest {
  /**
   * @schema DeregisterVolumeRequest#VolumeId
   */
  readonly volumeId: string;

}

/**
 * @schema DescribeAgentVersionsRequest
 */
export interface DescribeAgentVersionsRequest {
  /**
   * @schema DescribeAgentVersionsRequest#StackId
   */
  readonly stackId?: string;

  /**
   * @schema DescribeAgentVersionsRequest#ConfigurationManager
   */
  readonly configurationManager?: StackConfigurationManager;

}

/**
 * @schema DescribeAgentVersionsResult
 */
export interface DescribeAgentVersionsResult {
  /**
   * @schema DescribeAgentVersionsResult#AgentVersions
   */
  readonly agentVersions?: AgentVersion[];

}

/**
 * @schema DescribeAppsRequest
 */
export interface DescribeAppsRequest {
  /**
   * @schema DescribeAppsRequest#StackId
   */
  readonly stackId?: string;

  /**
   * @schema DescribeAppsRequest#AppIds
   */
  readonly appIds?: string[];

}

/**
 * @schema DescribeAppsResult
 */
export interface DescribeAppsResult {
  /**
   * @schema DescribeAppsResult#Apps
   */
  readonly apps?: App[];

}

/**
 * @schema DescribeCommandsRequest
 */
export interface DescribeCommandsRequest {
  /**
   * @schema DescribeCommandsRequest#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema DescribeCommandsRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema DescribeCommandsRequest#CommandIds
   */
  readonly commandIds?: string[];

}

/**
 * @schema DescribeCommandsResult
 */
export interface DescribeCommandsResult {
  /**
   * @schema DescribeCommandsResult#Commands
   */
  readonly commands?: Command[];

}

/**
 * @schema DescribeDeploymentsRequest
 */
export interface DescribeDeploymentsRequest {
  /**
   * @schema DescribeDeploymentsRequest#StackId
   */
  readonly stackId?: string;

  /**
   * @schema DescribeDeploymentsRequest#AppId
   */
  readonly appId?: string;

  /**
   * @schema DescribeDeploymentsRequest#DeploymentIds
   */
  readonly deploymentIds?: string[];

}

/**
 * @schema DescribeDeploymentsResult
 */
export interface DescribeDeploymentsResult {
  /**
   * @schema DescribeDeploymentsResult#Deployments
   */
  readonly deployments?: Deployment[];

}

/**
 * @schema DescribeEcsClustersRequest
 */
export interface DescribeEcsClustersRequest {
  /**
   * @schema DescribeEcsClustersRequest#EcsClusterArns
   */
  readonly ecsClusterArns?: string[];

  /**
   * @schema DescribeEcsClustersRequest#StackId
   */
  readonly stackId?: string;

  /**
   * @schema DescribeEcsClustersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeEcsClustersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeEcsClustersResult
 */
export interface DescribeEcsClustersResult {
  /**
   * @schema DescribeEcsClustersResult#EcsClusters
   */
  readonly ecsClusters?: EcsCluster[];

  /**
   * @schema DescribeEcsClustersResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeElasticIpsRequest
 */
export interface DescribeElasticIpsRequest {
  /**
   * @schema DescribeElasticIpsRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema DescribeElasticIpsRequest#StackId
   */
  readonly stackId?: string;

  /**
   * @schema DescribeElasticIpsRequest#Ips
   */
  readonly ips?: string[];

}

/**
 * @schema DescribeElasticIpsResult
 */
export interface DescribeElasticIpsResult {
  /**
   * @schema DescribeElasticIpsResult#ElasticIps
   */
  readonly elasticIps?: ElasticIp[];

}

/**
 * @schema DescribeElasticLoadBalancersRequest
 */
export interface DescribeElasticLoadBalancersRequest {
  /**
   * @schema DescribeElasticLoadBalancersRequest#StackId
   */
  readonly stackId?: string;

  /**
   * @schema DescribeElasticLoadBalancersRequest#LayerIds
   */
  readonly layerIds?: string[];

}

/**
 * @schema DescribeElasticLoadBalancersResult
 */
export interface DescribeElasticLoadBalancersResult {
  /**
   * @schema DescribeElasticLoadBalancersResult#ElasticLoadBalancers
   */
  readonly elasticLoadBalancers?: ElasticLoadBalancer[];

}

/**
 * @schema DescribeInstancesRequest
 */
export interface DescribeInstancesRequest {
  /**
   * @schema DescribeInstancesRequest#StackId
   */
  readonly stackId?: string;

  /**
   * @schema DescribeInstancesRequest#LayerId
   */
  readonly layerId?: string;

  /**
   * @schema DescribeInstancesRequest#InstanceIds
   */
  readonly instanceIds?: string[];

}

/**
 * @schema DescribeInstancesResult
 */
export interface DescribeInstancesResult {
  /**
   * @schema DescribeInstancesResult#Instances
   */
  readonly instances?: Instance[];

}

/**
 * @schema DescribeLayersRequest
 */
export interface DescribeLayersRequest {
  /**
   * @schema DescribeLayersRequest#StackId
   */
  readonly stackId?: string;

  /**
   * @schema DescribeLayersRequest#LayerIds
   */
  readonly layerIds?: string[];

}

/**
 * @schema DescribeLayersResult
 */
export interface DescribeLayersResult {
  /**
   * @schema DescribeLayersResult#Layers
   */
  readonly layers?: Layer[];

}

/**
 * @schema DescribeLoadBasedAutoScalingRequest
 */
export interface DescribeLoadBasedAutoScalingRequest {
  /**
   * @schema DescribeLoadBasedAutoScalingRequest#LayerIds
   */
  readonly layerIds: string[];

}

/**
 * @schema DescribeLoadBasedAutoScalingResult
 */
export interface DescribeLoadBasedAutoScalingResult {
  /**
   * @schema DescribeLoadBasedAutoScalingResult#LoadBasedAutoScalingConfigurations
   */
  readonly loadBasedAutoScalingConfigurations?: LoadBasedAutoScalingConfiguration[];

}

/**
 * @schema DescribeMyUserProfileResult
 */
export interface DescribeMyUserProfileResult {
  /**
   * @schema DescribeMyUserProfileResult#UserProfile
   */
  readonly userProfile?: SelfUserProfile;

}

/**
 * @schema DescribeOperatingSystemsResponse
 */
export interface DescribeOperatingSystemsResponse {
  /**
   * @schema DescribeOperatingSystemsResponse#OperatingSystems
   */
  readonly operatingSystems?: OperatingSystem[];

}

/**
 * @schema DescribePermissionsRequest
 */
export interface DescribePermissionsRequest {
  /**
   * @schema DescribePermissionsRequest#IamUserArn
   */
  readonly iamUserArn?: string;

  /**
   * @schema DescribePermissionsRequest#StackId
   */
  readonly stackId?: string;

}

/**
 * @schema DescribePermissionsResult
 */
export interface DescribePermissionsResult {
  /**
   * @schema DescribePermissionsResult#Permissions
   */
  readonly permissions?: Permission[];

}

/**
 * @schema DescribeRaidArraysRequest
 */
export interface DescribeRaidArraysRequest {
  /**
   * @schema DescribeRaidArraysRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema DescribeRaidArraysRequest#StackId
   */
  readonly stackId?: string;

  /**
   * @schema DescribeRaidArraysRequest#RaidArrayIds
   */
  readonly raidArrayIds?: string[];

}

/**
 * @schema DescribeRaidArraysResult
 */
export interface DescribeRaidArraysResult {
  /**
   * @schema DescribeRaidArraysResult#RaidArrays
   */
  readonly raidArrays?: RaidArray[];

}

/**
 * @schema DescribeRdsDbInstancesRequest
 */
export interface DescribeRdsDbInstancesRequest {
  /**
   * @schema DescribeRdsDbInstancesRequest#StackId
   */
  readonly stackId: string;

  /**
   * @schema DescribeRdsDbInstancesRequest#RdsDbInstanceArns
   */
  readonly rdsDbInstanceArns?: string[];

}

/**
 * @schema DescribeRdsDbInstancesResult
 */
export interface DescribeRdsDbInstancesResult {
  /**
   * @schema DescribeRdsDbInstancesResult#RdsDbInstances
   */
  readonly rdsDbInstances?: RdsDbInstance[];

}

/**
 * @schema DescribeServiceErrorsRequest
 */
export interface DescribeServiceErrorsRequest {
  /**
   * @schema DescribeServiceErrorsRequest#StackId
   */
  readonly stackId?: string;

  /**
   * @schema DescribeServiceErrorsRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema DescribeServiceErrorsRequest#ServiceErrorIds
   */
  readonly serviceErrorIds?: string[];

}

/**
 * @schema DescribeServiceErrorsResult
 */
export interface DescribeServiceErrorsResult {
  /**
   * @schema DescribeServiceErrorsResult#ServiceErrors
   */
  readonly serviceErrors?: ServiceError[];

}

/**
 * @schema DescribeStackProvisioningParametersRequest
 */
export interface DescribeStackProvisioningParametersRequest {
  /**
   * @schema DescribeStackProvisioningParametersRequest#StackId
   */
  readonly stackId: string;

}

/**
 * @schema DescribeStackProvisioningParametersResult
 */
export interface DescribeStackProvisioningParametersResult {
  /**
   * @schema DescribeStackProvisioningParametersResult#AgentInstallerUrl
   */
  readonly agentInstallerUrl?: string;

  /**
   * @schema DescribeStackProvisioningParametersResult#Parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * @schema DescribeStackSummaryRequest
 */
export interface DescribeStackSummaryRequest {
  /**
   * @schema DescribeStackSummaryRequest#StackId
   */
  readonly stackId: string;

}

/**
 * @schema DescribeStackSummaryResult
 */
export interface DescribeStackSummaryResult {
  /**
   * @schema DescribeStackSummaryResult#StackSummary
   */
  readonly stackSummary?: StackSummary;

}

/**
 * @schema DescribeStacksRequest
 */
export interface DescribeStacksRequest {
  /**
   * @schema DescribeStacksRequest#StackIds
   */
  readonly stackIds?: string[];

}

/**
 * @schema DescribeStacksResult
 */
export interface DescribeStacksResult {
  /**
   * @schema DescribeStacksResult#Stacks
   */
  readonly stacks?: Stack[];

}

/**
 * @schema DescribeTimeBasedAutoScalingRequest
 */
export interface DescribeTimeBasedAutoScalingRequest {
  /**
   * @schema DescribeTimeBasedAutoScalingRequest#InstanceIds
   */
  readonly instanceIds: string[];

}

/**
 * @schema DescribeTimeBasedAutoScalingResult
 */
export interface DescribeTimeBasedAutoScalingResult {
  /**
   * @schema DescribeTimeBasedAutoScalingResult#TimeBasedAutoScalingConfigurations
   */
  readonly timeBasedAutoScalingConfigurations?: TimeBasedAutoScalingConfiguration[];

}

/**
 * @schema DescribeUserProfilesRequest
 */
export interface DescribeUserProfilesRequest {
  /**
   * @schema DescribeUserProfilesRequest#IamUserArns
   */
  readonly iamUserArns?: string[];

}

/**
 * @schema DescribeUserProfilesResult
 */
export interface DescribeUserProfilesResult {
  /**
   * @schema DescribeUserProfilesResult#UserProfiles
   */
  readonly userProfiles?: UserProfile[];

}

/**
 * @schema DescribeVolumesRequest
 */
export interface DescribeVolumesRequest {
  /**
   * @schema DescribeVolumesRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema DescribeVolumesRequest#StackId
   */
  readonly stackId?: string;

  /**
   * @schema DescribeVolumesRequest#RaidArrayId
   */
  readonly raidArrayId?: string;

  /**
   * @schema DescribeVolumesRequest#VolumeIds
   */
  readonly volumeIds?: string[];

}

/**
 * @schema DescribeVolumesResult
 */
export interface DescribeVolumesResult {
  /**
   * @schema DescribeVolumesResult#Volumes
   */
  readonly volumes?: Volume[];

}

/**
 * @schema DetachElasticLoadBalancerRequest
 */
export interface DetachElasticLoadBalancerRequest {
  /**
   * @schema DetachElasticLoadBalancerRequest#ElasticLoadBalancerName
   */
  readonly elasticLoadBalancerName: string;

  /**
   * @schema DetachElasticLoadBalancerRequest#LayerId
   */
  readonly layerId: string;

}

/**
 * @schema DisassociateElasticIpRequest
 */
export interface DisassociateElasticIpRequest {
  /**
   * @schema DisassociateElasticIpRequest#ElasticIp
   */
  readonly elasticIp: string;

}

/**
 * @schema GetHostnameSuggestionRequest
 */
export interface GetHostnameSuggestionRequest {
  /**
   * @schema GetHostnameSuggestionRequest#LayerId
   */
  readonly layerId: string;

}

/**
 * @schema GetHostnameSuggestionResult
 */
export interface GetHostnameSuggestionResult {
  /**
   * @schema GetHostnameSuggestionResult#LayerId
   */
  readonly layerId?: string;

  /**
   * @schema GetHostnameSuggestionResult#Hostname
   */
  readonly hostname?: string;

}

/**
 * @schema GrantAccessRequest
 */
export interface GrantAccessRequest {
  /**
   * @schema GrantAccessRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema GrantAccessRequest#ValidForInMinutes
   */
  readonly validForInMinutes?: number;

}

/**
 * @schema GrantAccessResult
 */
export interface GrantAccessResult {
  /**
   * @schema GrantAccessResult#TemporaryCredential
   */
  readonly temporaryCredential?: TemporaryCredential;

}

/**
 * @schema ListTagsRequest
 */
export interface ListTagsRequest {
  /**
   * @schema ListTagsRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema ListTagsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListTagsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsResult
 */
export interface ListTagsResult {
  /**
   * @schema ListTagsResult#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema ListTagsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RebootInstanceRequest
 */
export interface RebootInstanceRequest {
  /**
   * @schema RebootInstanceRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema RegisterEcsClusterRequest
 */
export interface RegisterEcsClusterRequest {
  /**
   * @schema RegisterEcsClusterRequest#EcsClusterArn
   */
  readonly ecsClusterArn: string;

  /**
   * @schema RegisterEcsClusterRequest#StackId
   */
  readonly stackId: string;

}

/**
 * @schema RegisterEcsClusterResult
 */
export interface RegisterEcsClusterResult {
  /**
   * @schema RegisterEcsClusterResult#EcsClusterArn
   */
  readonly ecsClusterArn?: string;

}

/**
 * @schema RegisterElasticIpRequest
 */
export interface RegisterElasticIpRequest {
  /**
   * @schema RegisterElasticIpRequest#ElasticIp
   */
  readonly elasticIp: string;

  /**
   * @schema RegisterElasticIpRequest#StackId
   */
  readonly stackId: string;

}

/**
 * @schema RegisterElasticIpResult
 */
export interface RegisterElasticIpResult {
  /**
   * @schema RegisterElasticIpResult#ElasticIp
   */
  readonly elasticIp?: string;

}

/**
 * @schema RegisterInstanceRequest
 */
export interface RegisterInstanceRequest {
  /**
   * @schema RegisterInstanceRequest#StackId
   */
  readonly stackId: string;

  /**
   * @schema RegisterInstanceRequest#Hostname
   */
  readonly hostname?: string;

  /**
   * @schema RegisterInstanceRequest#PublicIp
   */
  readonly publicIp?: string;

  /**
   * @schema RegisterInstanceRequest#PrivateIp
   */
  readonly privateIp?: string;

  /**
   * @schema RegisterInstanceRequest#RsaPublicKey
   */
  readonly rsaPublicKey?: string;

  /**
   * @schema RegisterInstanceRequest#RsaPublicKeyFingerprint
   */
  readonly rsaPublicKeyFingerprint?: string;

  /**
   * @schema RegisterInstanceRequest#InstanceIdentity
   */
  readonly instanceIdentity?: InstanceIdentity;

}

/**
 * @schema RegisterInstanceResult
 */
export interface RegisterInstanceResult {
  /**
   * @schema RegisterInstanceResult#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * @schema RegisterRdsDbInstanceRequest
 */
export interface RegisterRdsDbInstanceRequest {
  /**
   * @schema RegisterRdsDbInstanceRequest#StackId
   */
  readonly stackId: string;

  /**
   * @schema RegisterRdsDbInstanceRequest#RdsDbInstanceArn
   */
  readonly rdsDbInstanceArn: string;

  /**
   * @schema RegisterRdsDbInstanceRequest#DbUser
   */
  readonly dbUser: string;

  /**
   * @schema RegisterRdsDbInstanceRequest#DbPassword
   */
  readonly dbPassword: string;

}

/**
 * @schema RegisterVolumeRequest
 */
export interface RegisterVolumeRequest {
  /**
   * @schema RegisterVolumeRequest#Ec2VolumeId
   */
  readonly ec2VolumeId?: string;

  /**
   * @schema RegisterVolumeRequest#StackId
   */
  readonly stackId: string;

}

/**
 * @schema RegisterVolumeResult
 */
export interface RegisterVolumeResult {
  /**
   * @schema RegisterVolumeResult#VolumeId
   */
  readonly volumeId?: string;

}

/**
 * @schema SetLoadBasedAutoScalingRequest
 */
export interface SetLoadBasedAutoScalingRequest {
  /**
   * @schema SetLoadBasedAutoScalingRequest#LayerId
   */
  readonly layerId: string;

  /**
   * @schema SetLoadBasedAutoScalingRequest#Enable
   */
  readonly enable?: boolean;

  /**
   * @schema SetLoadBasedAutoScalingRequest#UpScaling
   */
  readonly upScaling?: AutoScalingThresholds;

  /**
   * @schema SetLoadBasedAutoScalingRequest#DownScaling
   */
  readonly downScaling?: AutoScalingThresholds;

}

/**
 * @schema SetPermissionRequest
 */
export interface SetPermissionRequest {
  /**
   * @schema SetPermissionRequest#StackId
   */
  readonly stackId: string;

  /**
   * @schema SetPermissionRequest#IamUserArn
   */
  readonly iamUserArn: string;

  /**
   * @schema SetPermissionRequest#AllowSsh
   */
  readonly allowSsh?: boolean;

  /**
   * @schema SetPermissionRequest#AllowSudo
   */
  readonly allowSudo?: boolean;

  /**
   * @schema SetPermissionRequest#Level
   */
  readonly level?: string;

}

/**
 * @schema SetTimeBasedAutoScalingRequest
 */
export interface SetTimeBasedAutoScalingRequest {
  /**
   * @schema SetTimeBasedAutoScalingRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema SetTimeBasedAutoScalingRequest#AutoScalingSchedule
   */
  readonly autoScalingSchedule?: WeeklyAutoScalingSchedule;

}

/**
 * @schema StartInstanceRequest
 */
export interface StartInstanceRequest {
  /**
   * @schema StartInstanceRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema StartStackRequest
 */
export interface StartStackRequest {
  /**
   * @schema StartStackRequest#StackId
   */
  readonly stackId: string;

}

/**
 * @schema StopInstanceRequest
 */
export interface StopInstanceRequest {
  /**
   * @schema StopInstanceRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema StopInstanceRequest#Force
   */
  readonly force?: boolean;

}

/**
 * @schema StopStackRequest
 */
export interface StopStackRequest {
  /**
   * @schema StopStackRequest#StackId
   */
  readonly stackId: string;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema UnassignInstanceRequest
 */
export interface UnassignInstanceRequest {
  /**
   * @schema UnassignInstanceRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema UnassignVolumeRequest
 */
export interface UnassignVolumeRequest {
  /**
   * @schema UnassignVolumeRequest#VolumeId
   */
  readonly volumeId: string;

}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UpdateAppRequest
 */
export interface UpdateAppRequest {
  /**
   * @schema UpdateAppRequest#AppId
   */
  readonly appId: string;

  /**
   * @schema UpdateAppRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateAppRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateAppRequest#DataSources
   */
  readonly dataSources?: DataSource[];

  /**
   * @schema UpdateAppRequest#Type
   */
  readonly type?: string;

  /**
   * @schema UpdateAppRequest#AppSource
   */
  readonly appSource?: Source;

  /**
   * @schema UpdateAppRequest#Domains
   */
  readonly domains?: string[];

  /**
   * @schema UpdateAppRequest#EnableSsl
   */
  readonly enableSsl?: boolean;

  /**
   * @schema UpdateAppRequest#SslConfiguration
   */
  readonly sslConfiguration?: SslConfiguration;

  /**
   * @schema UpdateAppRequest#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema UpdateAppRequest#Environment
   */
  readonly environment?: EnvironmentVariable[];

}

/**
 * @schema UpdateElasticIpRequest
 */
export interface UpdateElasticIpRequest {
  /**
   * @schema UpdateElasticIpRequest#ElasticIp
   */
  readonly elasticIp: string;

  /**
   * @schema UpdateElasticIpRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema UpdateInstanceRequest
 */
export interface UpdateInstanceRequest {
  /**
   * @schema UpdateInstanceRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema UpdateInstanceRequest#LayerIds
   */
  readonly layerIds?: string[];

  /**
   * @schema UpdateInstanceRequest#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema UpdateInstanceRequest#AutoScalingType
   */
  readonly autoScalingType?: string;

  /**
   * @schema UpdateInstanceRequest#Hostname
   */
  readonly hostname?: string;

  /**
   * @schema UpdateInstanceRequest#Os
   */
  readonly os?: string;

  /**
   * @schema UpdateInstanceRequest#AmiId
   */
  readonly amiId?: string;

  /**
   * @schema UpdateInstanceRequest#SshKeyName
   */
  readonly sshKeyName?: string;

  /**
   * @schema UpdateInstanceRequest#Architecture
   */
  readonly architecture?: string;

  /**
   * @schema UpdateInstanceRequest#InstallUpdatesOnBoot
   */
  readonly installUpdatesOnBoot?: boolean;

  /**
   * @schema UpdateInstanceRequest#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema UpdateInstanceRequest#AgentVersion
   */
  readonly agentVersion?: string;

}

/**
 * @schema UpdateLayerRequest
 */
export interface UpdateLayerRequest {
  /**
   * @schema UpdateLayerRequest#LayerId
   */
  readonly layerId: string;

  /**
   * @schema UpdateLayerRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateLayerRequest#Shortname
   */
  readonly shortname?: string;

  /**
   * @schema UpdateLayerRequest#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema UpdateLayerRequest#CloudWatchLogsConfiguration
   */
  readonly cloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;

  /**
   * @schema UpdateLayerRequest#CustomInstanceProfileArn
   */
  readonly customInstanceProfileArn?: string;

  /**
   * @schema UpdateLayerRequest#CustomJson
   */
  readonly customJson?: string;

  /**
   * @schema UpdateLayerRequest#CustomSecurityGroupIds
   */
  readonly customSecurityGroupIds?: string[];

  /**
   * @schema UpdateLayerRequest#Packages
   */
  readonly packages?: string[];

  /**
   * @schema UpdateLayerRequest#VolumeConfigurations
   */
  readonly volumeConfigurations?: VolumeConfiguration[];

  /**
   * @schema UpdateLayerRequest#EnableAutoHealing
   */
  readonly enableAutoHealing?: boolean;

  /**
   * @schema UpdateLayerRequest#AutoAssignElasticIps
   */
  readonly autoAssignElasticIps?: boolean;

  /**
   * @schema UpdateLayerRequest#AutoAssignPublicIps
   */
  readonly autoAssignPublicIps?: boolean;

  /**
   * @schema UpdateLayerRequest#CustomRecipes
   */
  readonly customRecipes?: Recipes;

  /**
   * @schema UpdateLayerRequest#InstallUpdatesOnBoot
   */
  readonly installUpdatesOnBoot?: boolean;

  /**
   * @schema UpdateLayerRequest#UseEbsOptimizedInstances
   */
  readonly useEbsOptimizedInstances?: boolean;

  /**
   * @schema UpdateLayerRequest#LifecycleEventConfiguration
   */
  readonly lifecycleEventConfiguration?: LifecycleEventConfiguration;

}

/**
 * @schema UpdateMyUserProfileRequest
 */
export interface UpdateMyUserProfileRequest {
  /**
   * @schema UpdateMyUserProfileRequest#SshPublicKey
   */
  readonly sshPublicKey?: string;

}

/**
 * @schema UpdateRdsDbInstanceRequest
 */
export interface UpdateRdsDbInstanceRequest {
  /**
   * @schema UpdateRdsDbInstanceRequest#RdsDbInstanceArn
   */
  readonly rdsDbInstanceArn: string;

  /**
   * @schema UpdateRdsDbInstanceRequest#DbUser
   */
  readonly dbUser?: string;

  /**
   * @schema UpdateRdsDbInstanceRequest#DbPassword
   */
  readonly dbPassword?: string;

}

/**
 * @schema UpdateStackRequest
 */
export interface UpdateStackRequest {
  /**
   * @schema UpdateStackRequest#StackId
   */
  readonly stackId: string;

  /**
   * @schema UpdateStackRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateStackRequest#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema UpdateStackRequest#ServiceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema UpdateStackRequest#DefaultInstanceProfileArn
   */
  readonly defaultInstanceProfileArn?: string;

  /**
   * @schema UpdateStackRequest#DefaultOs
   */
  readonly defaultOs?: string;

  /**
   * @schema UpdateStackRequest#HostnameTheme
   */
  readonly hostnameTheme?: string;

  /**
   * @schema UpdateStackRequest#DefaultAvailabilityZone
   */
  readonly defaultAvailabilityZone?: string;

  /**
   * @schema UpdateStackRequest#DefaultSubnetId
   */
  readonly defaultSubnetId?: string;

  /**
   * @schema UpdateStackRequest#CustomJson
   */
  readonly customJson?: string;

  /**
   * @schema UpdateStackRequest#ConfigurationManager
   */
  readonly configurationManager?: StackConfigurationManager;

  /**
   * @schema UpdateStackRequest#ChefConfiguration
   */
  readonly chefConfiguration?: ChefConfiguration;

  /**
   * @schema UpdateStackRequest#UseCustomCookbooks
   */
  readonly useCustomCookbooks?: boolean;

  /**
   * @schema UpdateStackRequest#CustomCookbooksSource
   */
  readonly customCookbooksSource?: Source;

  /**
   * @schema UpdateStackRequest#DefaultSshKeyName
   */
  readonly defaultSshKeyName?: string;

  /**
   * @schema UpdateStackRequest#DefaultRootDeviceType
   */
  readonly defaultRootDeviceType?: string;

  /**
   * @schema UpdateStackRequest#UseOpsworksSecurityGroups
   */
  readonly useOpsworksSecurityGroups?: boolean;

  /**
   * @schema UpdateStackRequest#AgentVersion
   */
  readonly agentVersion?: string;

}

/**
 * @schema UpdateUserProfileRequest
 */
export interface UpdateUserProfileRequest {
  /**
   * @schema UpdateUserProfileRequest#IamUserArn
   */
  readonly iamUserArn: string;

  /**
   * @schema UpdateUserProfileRequest#SshUsername
   */
  readonly sshUsername?: string;

  /**
   * @schema UpdateUserProfileRequest#SshPublicKey
   */
  readonly sshPublicKey?: string;

  /**
   * @schema UpdateUserProfileRequest#AllowSelfManagement
   */
  readonly allowSelfManagement?: boolean;

}

/**
 * @schema UpdateVolumeRequest
 */
export interface UpdateVolumeRequest {
  /**
   * @schema UpdateVolumeRequest#VolumeId
   */
  readonly volumeId: string;

  /**
   * @schema UpdateVolumeRequest#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateVolumeRequest#MountPoint
   */
  readonly mountPoint?: string;

}

/**
 * @schema StackConfigurationManager
 */
export interface StackConfigurationManager {
  /**
   * @schema StackConfigurationManager#Name
   */
  readonly name?: string;

  /**
   * @schema StackConfigurationManager#Version
   */
  readonly version?: string;

}

/**
 * @schema ChefConfiguration
 */
export interface ChefConfiguration {
  /**
   * @schema ChefConfiguration#ManageBerkshelf
   */
  readonly manageBerkshelf?: boolean;

  /**
   * @schema ChefConfiguration#BerkshelfVersion
   */
  readonly berkshelfVersion?: string;

}

/**
 * @schema Source
 */
export interface Source {
  /**
   * @schema Source#Type
   */
  readonly type?: string;

  /**
   * @schema Source#Url
   */
  readonly url?: string;

  /**
   * @schema Source#Username
   */
  readonly username?: string;

  /**
   * @schema Source#Password
   */
  readonly password?: string;

  /**
   * @schema Source#SshKey
   */
  readonly sshKey?: string;

  /**
   * @schema Source#Revision
   */
  readonly revision?: string;

}

/**
 * @schema DataSource
 */
export interface DataSource {
  /**
   * @schema DataSource#Type
   */
  readonly type?: string;

  /**
   * @schema DataSource#Arn
   */
  readonly arn?: string;

  /**
   * @schema DataSource#DatabaseName
   */
  readonly databaseName?: string;

}

/**
 * @schema SslConfiguration
 */
export interface SslConfiguration {
  /**
   * @schema SslConfiguration#Certificate
   */
  readonly certificate: string;

  /**
   * @schema SslConfiguration#PrivateKey
   */
  readonly privateKey: string;

  /**
   * @schema SslConfiguration#Chain
   */
  readonly chain?: string;

}

/**
 * @schema EnvironmentVariable
 */
export interface EnvironmentVariable {
  /**
   * @schema EnvironmentVariable#Key
   */
  readonly key: string;

  /**
   * @schema EnvironmentVariable#Value
   */
  readonly value: string;

  /**
   * @schema EnvironmentVariable#Secure
   */
  readonly secure?: boolean;

}

/**
 * @schema DeploymentCommand
 */
export interface DeploymentCommand {
  /**
   * @schema DeploymentCommand#Name
   */
  readonly name: string;

  /**
   * @schema DeploymentCommand#Args
   */
  readonly args?: { [key: string]: string[] };

}

/**
 * @schema BlockDeviceMapping
 */
export interface BlockDeviceMapping {
  /**
   * @schema BlockDeviceMapping#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema BlockDeviceMapping#NoDevice
   */
  readonly noDevice?: string;

  /**
   * @schema BlockDeviceMapping#VirtualName
   */
  readonly virtualName?: string;

  /**
   * @schema BlockDeviceMapping#Ebs
   */
  readonly ebs?: EbsBlockDevice;

}

/**
 * @schema CloudWatchLogsConfiguration
 */
export interface CloudWatchLogsConfiguration {
  /**
   * @schema CloudWatchLogsConfiguration#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema CloudWatchLogsConfiguration#LogStreams
   */
  readonly logStreams?: CloudWatchLogsLogStream[];

}

/**
 * @schema VolumeConfiguration
 */
export interface VolumeConfiguration {
  /**
   * @schema VolumeConfiguration#MountPoint
   */
  readonly mountPoint: string;

  /**
   * @schema VolumeConfiguration#RaidLevel
   */
  readonly raidLevel?: number;

  /**
   * @schema VolumeConfiguration#NumberOfDisks
   */
  readonly numberOfDisks: number;

  /**
   * @schema VolumeConfiguration#Size
   */
  readonly size: number;

  /**
   * @schema VolumeConfiguration#VolumeType
   */
  readonly volumeType?: string;

  /**
   * @schema VolumeConfiguration#Iops
   */
  readonly iops?: number;

  /**
   * @schema VolumeConfiguration#Encrypted
   */
  readonly encrypted?: boolean;

}

/**
 * @schema Recipes
 */
export interface Recipes {
  /**
   * @schema Recipes#Setup
   */
  readonly setup?: string[];

  /**
   * @schema Recipes#Configure
   */
  readonly configure?: string[];

  /**
   * @schema Recipes#Deploy
   */
  readonly deploy?: string[];

  /**
   * @schema Recipes#Undeploy
   */
  readonly undeploy?: string[];

  /**
   * @schema Recipes#Shutdown
   */
  readonly shutdown?: string[];

}

/**
 * @schema LifecycleEventConfiguration
 */
export interface LifecycleEventConfiguration {
  /**
   * @schema LifecycleEventConfiguration#Shutdown
   */
  readonly shutdown?: ShutdownEventConfiguration;

}

/**
 * @schema AgentVersion
 */
export interface AgentVersion {
  /**
   * @schema AgentVersion#Version
   */
  readonly version?: string;

  /**
   * @schema AgentVersion#ConfigurationManager
   */
  readonly configurationManager?: StackConfigurationManager;

}

/**
 * @schema App
 */
export interface App {
  /**
   * @schema App#AppId
   */
  readonly appId?: string;

  /**
   * @schema App#StackId
   */
  readonly stackId?: string;

  /**
   * @schema App#Shortname
   */
  readonly shortname?: string;

  /**
   * @schema App#Name
   */
  readonly name?: string;

  /**
   * @schema App#Description
   */
  readonly description?: string;

  /**
   * @schema App#DataSources
   */
  readonly dataSources?: DataSource[];

  /**
   * @schema App#Type
   */
  readonly type?: string;

  /**
   * @schema App#AppSource
   */
  readonly appSource?: Source;

  /**
   * @schema App#Domains
   */
  readonly domains?: string[];

  /**
   * @schema App#EnableSsl
   */
  readonly enableSsl?: boolean;

  /**
   * @schema App#SslConfiguration
   */
  readonly sslConfiguration?: SslConfiguration;

  /**
   * @schema App#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema App#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema App#Environment
   */
  readonly environment?: EnvironmentVariable[];

}

/**
 * @schema Command
 */
export interface Command {
  /**
   * @schema Command#CommandId
   */
  readonly commandId?: string;

  /**
   * @schema Command#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Command#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema Command#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema Command#AcknowledgedAt
   */
  readonly acknowledgedAt?: string;

  /**
   * @schema Command#CompletedAt
   */
  readonly completedAt?: string;

  /**
   * @schema Command#Status
   */
  readonly status?: string;

  /**
   * @schema Command#ExitCode
   */
  readonly exitCode?: number;

  /**
   * @schema Command#LogUrl
   */
  readonly logUrl?: string;

  /**
   * @schema Command#Type
   */
  readonly type?: string;

}

/**
 * @schema Deployment
 */
export interface Deployment {
  /**
   * @schema Deployment#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema Deployment#StackId
   */
  readonly stackId?: string;

  /**
   * @schema Deployment#AppId
   */
  readonly appId?: string;

  /**
   * @schema Deployment#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema Deployment#CompletedAt
   */
  readonly completedAt?: string;

  /**
   * @schema Deployment#Duration
   */
  readonly duration?: number;

  /**
   * @schema Deployment#IamUserArn
   */
  readonly iamUserArn?: string;

  /**
   * @schema Deployment#Comment
   */
  readonly comment?: string;

  /**
   * @schema Deployment#Command
   */
  readonly command?: DeploymentCommand;

  /**
   * @schema Deployment#Status
   */
  readonly status?: string;

  /**
   * @schema Deployment#CustomJson
   */
  readonly customJson?: string;

  /**
   * @schema Deployment#InstanceIds
   */
  readonly instanceIds?: string[];

}

/**
 * @schema EcsCluster
 */
export interface EcsCluster {
  /**
   * @schema EcsCluster#EcsClusterArn
   */
  readonly ecsClusterArn?: string;

  /**
   * @schema EcsCluster#EcsClusterName
   */
  readonly ecsClusterName?: string;

  /**
   * @schema EcsCluster#StackId
   */
  readonly stackId?: string;

  /**
   * @schema EcsCluster#RegisteredAt
   */
  readonly registeredAt?: string;

}

/**
 * @schema ElasticIp
 */
export interface ElasticIp {
  /**
   * @schema ElasticIp#Ip
   */
  readonly ip?: string;

  /**
   * @schema ElasticIp#Name
   */
  readonly name?: string;

  /**
   * @schema ElasticIp#Domain
   */
  readonly domain?: string;

  /**
   * @schema ElasticIp#Region
   */
  readonly region?: string;

  /**
   * @schema ElasticIp#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * @schema ElasticLoadBalancer
 */
export interface ElasticLoadBalancer {
  /**
   * @schema ElasticLoadBalancer#ElasticLoadBalancerName
   */
  readonly elasticLoadBalancerName?: string;

  /**
   * @schema ElasticLoadBalancer#Region
   */
  readonly region?: string;

  /**
   * @schema ElasticLoadBalancer#DnsName
   */
  readonly dnsName?: string;

  /**
   * @schema ElasticLoadBalancer#StackId
   */
  readonly stackId?: string;

  /**
   * @schema ElasticLoadBalancer#LayerId
   */
  readonly layerId?: string;

  /**
   * @schema ElasticLoadBalancer#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema ElasticLoadBalancer#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema ElasticLoadBalancer#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema ElasticLoadBalancer#Ec2InstanceIds
   */
  readonly ec2InstanceIds?: string[];

}

/**
 * @schema Instance
 */
export interface Instance {
  /**
   * @schema Instance#AgentVersion
   */
  readonly agentVersion?: string;

  /**
   * @schema Instance#AmiId
   */
  readonly amiId?: string;

  /**
   * @schema Instance#Architecture
   */
  readonly architecture?: string;

  /**
   * @schema Instance#Arn
   */
  readonly arn?: string;

  /**
   * @schema Instance#AutoScalingType
   */
  readonly autoScalingType?: string;

  /**
   * @schema Instance#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Instance#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: BlockDeviceMapping[];

  /**
   * @schema Instance#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema Instance#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema Instance#Ec2InstanceId
   */
  readonly ec2InstanceId?: string;

  /**
   * @schema Instance#EcsClusterArn
   */
  readonly ecsClusterArn?: string;

  /**
   * @schema Instance#EcsContainerInstanceArn
   */
  readonly ecsContainerInstanceArn?: string;

  /**
   * @schema Instance#ElasticIp
   */
  readonly elasticIp?: string;

  /**
   * @schema Instance#Hostname
   */
  readonly hostname?: string;

  /**
   * @schema Instance#InfrastructureClass
   */
  readonly infrastructureClass?: string;

  /**
   * @schema Instance#InstallUpdatesOnBoot
   */
  readonly installUpdatesOnBoot?: boolean;

  /**
   * @schema Instance#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Instance#InstanceProfileArn
   */
  readonly instanceProfileArn?: string;

  /**
   * @schema Instance#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema Instance#LastServiceErrorId
   */
  readonly lastServiceErrorId?: string;

  /**
   * @schema Instance#LayerIds
   */
  readonly layerIds?: string[];

  /**
   * @schema Instance#Os
   */
  readonly os?: string;

  /**
   * @schema Instance#Platform
   */
  readonly platform?: string;

  /**
   * @schema Instance#PrivateDns
   */
  readonly privateDns?: string;

  /**
   * @schema Instance#PrivateIp
   */
  readonly privateIp?: string;

  /**
   * @schema Instance#PublicDns
   */
  readonly publicDns?: string;

  /**
   * @schema Instance#PublicIp
   */
  readonly publicIp?: string;

  /**
   * @schema Instance#RegisteredBy
   */
  readonly registeredBy?: string;

  /**
   * @schema Instance#ReportedAgentVersion
   */
  readonly reportedAgentVersion?: string;

  /**
   * @schema Instance#ReportedOs
   */
  readonly reportedOs?: ReportedOs;

  /**
   * @schema Instance#RootDeviceType
   */
  readonly rootDeviceType?: string;

  /**
   * @schema Instance#RootDeviceVolumeId
   */
  readonly rootDeviceVolumeId?: string;

  /**
   * @schema Instance#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema Instance#SshHostDsaKeyFingerprint
   */
  readonly sshHostDsaKeyFingerprint?: string;

  /**
   * @schema Instance#SshHostRsaKeyFingerprint
   */
  readonly sshHostRsaKeyFingerprint?: string;

  /**
   * @schema Instance#SshKeyName
   */
  readonly sshKeyName?: string;

  /**
   * @schema Instance#StackId
   */
  readonly stackId?: string;

  /**
   * @schema Instance#Status
   */
  readonly status?: string;

  /**
   * @schema Instance#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema Instance#Tenancy
   */
  readonly tenancy?: string;

  /**
   * @schema Instance#VirtualizationType
   */
  readonly virtualizationType?: string;

}

/**
 * @schema Layer
 */
export interface Layer {
  /**
   * @schema Layer#Arn
   */
  readonly arn?: string;

  /**
   * @schema Layer#StackId
   */
  readonly stackId?: string;

  /**
   * @schema Layer#LayerId
   */
  readonly layerId?: string;

  /**
   * @schema Layer#Type
   */
  readonly type?: string;

  /**
   * @schema Layer#Name
   */
  readonly name?: string;

  /**
   * @schema Layer#Shortname
   */
  readonly shortname?: string;

  /**
   * @schema Layer#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema Layer#CloudWatchLogsConfiguration
   */
  readonly cloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;

  /**
   * @schema Layer#CustomInstanceProfileArn
   */
  readonly customInstanceProfileArn?: string;

  /**
   * @schema Layer#CustomJson
   */
  readonly customJson?: string;

  /**
   * @schema Layer#CustomSecurityGroupIds
   */
  readonly customSecurityGroupIds?: string[];

  /**
   * @schema Layer#DefaultSecurityGroupNames
   */
  readonly defaultSecurityGroupNames?: string[];

  /**
   * @schema Layer#Packages
   */
  readonly packages?: string[];

  /**
   * @schema Layer#VolumeConfigurations
   */
  readonly volumeConfigurations?: VolumeConfiguration[];

  /**
   * @schema Layer#EnableAutoHealing
   */
  readonly enableAutoHealing?: boolean;

  /**
   * @schema Layer#AutoAssignElasticIps
   */
  readonly autoAssignElasticIps?: boolean;

  /**
   * @schema Layer#AutoAssignPublicIps
   */
  readonly autoAssignPublicIps?: boolean;

  /**
   * @schema Layer#DefaultRecipes
   */
  readonly defaultRecipes?: Recipes;

  /**
   * @schema Layer#CustomRecipes
   */
  readonly customRecipes?: Recipes;

  /**
   * @schema Layer#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema Layer#InstallUpdatesOnBoot
   */
  readonly installUpdatesOnBoot?: boolean;

  /**
   * @schema Layer#UseEbsOptimizedInstances
   */
  readonly useEbsOptimizedInstances?: boolean;

  /**
   * @schema Layer#LifecycleEventConfiguration
   */
  readonly lifecycleEventConfiguration?: LifecycleEventConfiguration;

}

/**
 * @schema LoadBasedAutoScalingConfiguration
 */
export interface LoadBasedAutoScalingConfiguration {
  /**
   * @schema LoadBasedAutoScalingConfiguration#LayerId
   */
  readonly layerId?: string;

  /**
   * @schema LoadBasedAutoScalingConfiguration#Enable
   */
  readonly enable?: boolean;

  /**
   * @schema LoadBasedAutoScalingConfiguration#UpScaling
   */
  readonly upScaling?: AutoScalingThresholds;

  /**
   * @schema LoadBasedAutoScalingConfiguration#DownScaling
   */
  readonly downScaling?: AutoScalingThresholds;

}

/**
 * @schema SelfUserProfile
 */
export interface SelfUserProfile {
  /**
   * @schema SelfUserProfile#IamUserArn
   */
  readonly iamUserArn?: string;

  /**
   * @schema SelfUserProfile#Name
   */
  readonly name?: string;

  /**
   * @schema SelfUserProfile#SshUsername
   */
  readonly sshUsername?: string;

  /**
   * @schema SelfUserProfile#SshPublicKey
   */
  readonly sshPublicKey?: string;

}

/**
 * @schema OperatingSystem
 */
export interface OperatingSystem {
  /**
   * @schema OperatingSystem#Name
   */
  readonly name?: string;

  /**
   * @schema OperatingSystem#Id
   */
  readonly id?: string;

  /**
   * @schema OperatingSystem#Type
   */
  readonly type?: string;

  /**
   * @schema OperatingSystem#ConfigurationManagers
   */
  readonly configurationManagers?: OperatingSystemConfigurationManager[];

  /**
   * @schema OperatingSystem#ReportedName
   */
  readonly reportedName?: string;

  /**
   * @schema OperatingSystem#ReportedVersion
   */
  readonly reportedVersion?: string;

  /**
   * @schema OperatingSystem#Supported
   */
  readonly supported?: boolean;

}

/**
 * @schema Permission
 */
export interface Permission {
  /**
   * @schema Permission#StackId
   */
  readonly stackId?: string;

  /**
   * @schema Permission#IamUserArn
   */
  readonly iamUserArn?: string;

  /**
   * @schema Permission#AllowSsh
   */
  readonly allowSsh?: boolean;

  /**
   * @schema Permission#AllowSudo
   */
  readonly allowSudo?: boolean;

  /**
   * @schema Permission#Level
   */
  readonly level?: string;

}

/**
 * @schema RaidArray
 */
export interface RaidArray {
  /**
   * @schema RaidArray#RaidArrayId
   */
  readonly raidArrayId?: string;

  /**
   * @schema RaidArray#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema RaidArray#Name
   */
  readonly name?: string;

  /**
   * @schema RaidArray#RaidLevel
   */
  readonly raidLevel?: number;

  /**
   * @schema RaidArray#NumberOfDisks
   */
  readonly numberOfDisks?: number;

  /**
   * @schema RaidArray#Size
   */
  readonly size?: number;

  /**
   * @schema RaidArray#Device
   */
  readonly device?: string;

  /**
   * @schema RaidArray#MountPoint
   */
  readonly mountPoint?: string;

  /**
   * @schema RaidArray#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema RaidArray#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema RaidArray#StackId
   */
  readonly stackId?: string;

  /**
   * @schema RaidArray#VolumeType
   */
  readonly volumeType?: string;

  /**
   * @schema RaidArray#Iops
   */
  readonly iops?: number;

}

/**
 * @schema RdsDbInstance
 */
export interface RdsDbInstance {
  /**
   * @schema RdsDbInstance#RdsDbInstanceArn
   */
  readonly rdsDbInstanceArn?: string;

  /**
   * @schema RdsDbInstance#DbInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema RdsDbInstance#DbUser
   */
  readonly dbUser?: string;

  /**
   * @schema RdsDbInstance#DbPassword
   */
  readonly dbPassword?: string;

  /**
   * @schema RdsDbInstance#Region
   */
  readonly region?: string;

  /**
   * @schema RdsDbInstance#Address
   */
  readonly address?: string;

  /**
   * @schema RdsDbInstance#Engine
   */
  readonly engine?: string;

  /**
   * @schema RdsDbInstance#StackId
   */
  readonly stackId?: string;

  /**
   * @schema RdsDbInstance#MissingOnRds
   */
  readonly missingOnRds?: boolean;

}

/**
 * @schema ServiceError
 */
export interface ServiceError {
  /**
   * @schema ServiceError#ServiceErrorId
   */
  readonly serviceErrorId?: string;

  /**
   * @schema ServiceError#StackId
   */
  readonly stackId?: string;

  /**
   * @schema ServiceError#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema ServiceError#Type
   */
  readonly type?: string;

  /**
   * @schema ServiceError#Message
   */
  readonly message?: string;

  /**
   * @schema ServiceError#CreatedAt
   */
  readonly createdAt?: string;

}

/**
 * @schema StackSummary
 */
export interface StackSummary {
  /**
   * @schema StackSummary#StackId
   */
  readonly stackId?: string;

  /**
   * @schema StackSummary#Name
   */
  readonly name?: string;

  /**
   * @schema StackSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema StackSummary#LayersCount
   */
  readonly layersCount?: number;

  /**
   * @schema StackSummary#AppsCount
   */
  readonly appsCount?: number;

  /**
   * @schema StackSummary#InstancesCount
   */
  readonly instancesCount?: InstancesCount;

}

/**
 * @schema Stack
 */
export interface Stack {
  /**
   * @schema Stack#StackId
   */
  readonly stackId?: string;

  /**
   * @schema Stack#Name
   */
  readonly name?: string;

  /**
   * @schema Stack#Arn
   */
  readonly arn?: string;

  /**
   * @schema Stack#Region
   */
  readonly region?: string;

  /**
   * @schema Stack#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema Stack#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema Stack#ServiceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema Stack#DefaultInstanceProfileArn
   */
  readonly defaultInstanceProfileArn?: string;

  /**
   * @schema Stack#DefaultOs
   */
  readonly defaultOs?: string;

  /**
   * @schema Stack#HostnameTheme
   */
  readonly hostnameTheme?: string;

  /**
   * @schema Stack#DefaultAvailabilityZone
   */
  readonly defaultAvailabilityZone?: string;

  /**
   * @schema Stack#DefaultSubnetId
   */
  readonly defaultSubnetId?: string;

  /**
   * @schema Stack#CustomJson
   */
  readonly customJson?: string;

  /**
   * @schema Stack#ConfigurationManager
   */
  readonly configurationManager?: StackConfigurationManager;

  /**
   * @schema Stack#ChefConfiguration
   */
  readonly chefConfiguration?: ChefConfiguration;

  /**
   * @schema Stack#UseCustomCookbooks
   */
  readonly useCustomCookbooks?: boolean;

  /**
   * @schema Stack#UseOpsworksSecurityGroups
   */
  readonly useOpsworksSecurityGroups?: boolean;

  /**
   * @schema Stack#CustomCookbooksSource
   */
  readonly customCookbooksSource?: Source;

  /**
   * @schema Stack#DefaultSshKeyName
   */
  readonly defaultSshKeyName?: string;

  /**
   * @schema Stack#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema Stack#DefaultRootDeviceType
   */
  readonly defaultRootDeviceType?: string;

  /**
   * @schema Stack#AgentVersion
   */
  readonly agentVersion?: string;

}

/**
 * @schema TimeBasedAutoScalingConfiguration
 */
export interface TimeBasedAutoScalingConfiguration {
  /**
   * @schema TimeBasedAutoScalingConfiguration#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema TimeBasedAutoScalingConfiguration#AutoScalingSchedule
   */
  readonly autoScalingSchedule?: WeeklyAutoScalingSchedule;

}

/**
 * @schema UserProfile
 */
export interface UserProfile {
  /**
   * @schema UserProfile#IamUserArn
   */
  readonly iamUserArn?: string;

  /**
   * @schema UserProfile#Name
   */
  readonly name?: string;

  /**
   * @schema UserProfile#SshUsername
   */
  readonly sshUsername?: string;

  /**
   * @schema UserProfile#SshPublicKey
   */
  readonly sshPublicKey?: string;

  /**
   * @schema UserProfile#AllowSelfManagement
   */
  readonly allowSelfManagement?: boolean;

}

/**
 * @schema Volume
 */
export interface Volume {
  /**
   * @schema Volume#VolumeId
   */
  readonly volumeId?: string;

  /**
   * @schema Volume#Ec2VolumeId
   */
  readonly ec2VolumeId?: string;

  /**
   * @schema Volume#Name
   */
  readonly name?: string;

  /**
   * @schema Volume#RaidArrayId
   */
  readonly raidArrayId?: string;

  /**
   * @schema Volume#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema Volume#Status
   */
  readonly status?: string;

  /**
   * @schema Volume#Size
   */
  readonly size?: number;

  /**
   * @schema Volume#Device
   */
  readonly device?: string;

  /**
   * @schema Volume#MountPoint
   */
  readonly mountPoint?: string;

  /**
   * @schema Volume#Region
   */
  readonly region?: string;

  /**
   * @schema Volume#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema Volume#VolumeType
   */
  readonly volumeType?: string;

  /**
   * @schema Volume#Iops
   */
  readonly iops?: number;

  /**
   * @schema Volume#Encrypted
   */
  readonly encrypted?: boolean;

}

/**
 * @schema TemporaryCredential
 */
export interface TemporaryCredential {
  /**
   * @schema TemporaryCredential#Username
   */
  readonly username?: string;

  /**
   * @schema TemporaryCredential#Password
   */
  readonly password?: string;

  /**
   * @schema TemporaryCredential#ValidForInMinutes
   */
  readonly validForInMinutes?: number;

  /**
   * @schema TemporaryCredential#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * @schema InstanceIdentity
 */
export interface InstanceIdentity {
  /**
   * @schema InstanceIdentity#Document
   */
  readonly document?: string;

  /**
   * @schema InstanceIdentity#Signature
   */
  readonly signature?: string;

}

/**
 * @schema AutoScalingThresholds
 */
export interface AutoScalingThresholds {
  /**
   * @schema AutoScalingThresholds#InstanceCount
   */
  readonly instanceCount?: number;

  /**
   * @schema AutoScalingThresholds#ThresholdsWaitTime
   */
  readonly thresholdsWaitTime?: number;

  /**
   * @schema AutoScalingThresholds#IgnoreMetricsTime
   */
  readonly ignoreMetricsTime?: number;

  /**
   * @schema AutoScalingThresholds#CpuThreshold
   */
  readonly cpuThreshold?: number;

  /**
   * @schema AutoScalingThresholds#MemoryThreshold
   */
  readonly memoryThreshold?: number;

  /**
   * @schema AutoScalingThresholds#LoadThreshold
   */
  readonly loadThreshold?: number;

  /**
   * @schema AutoScalingThresholds#Alarms
   */
  readonly alarms?: string[];

}

/**
 * @schema WeeklyAutoScalingSchedule
 */
export interface WeeklyAutoScalingSchedule {
  /**
   * @schema WeeklyAutoScalingSchedule#Monday
   */
  readonly monday?: { [key: string]: string };

  /**
   * @schema WeeklyAutoScalingSchedule#Tuesday
   */
  readonly tuesday?: { [key: string]: string };

  /**
   * @schema WeeklyAutoScalingSchedule#Wednesday
   */
  readonly wednesday?: { [key: string]: string };

  /**
   * @schema WeeklyAutoScalingSchedule#Thursday
   */
  readonly thursday?: { [key: string]: string };

  /**
   * @schema WeeklyAutoScalingSchedule#Friday
   */
  readonly friday?: { [key: string]: string };

  /**
   * @schema WeeklyAutoScalingSchedule#Saturday
   */
  readonly saturday?: { [key: string]: string };

  /**
   * @schema WeeklyAutoScalingSchedule#Sunday
   */
  readonly sunday?: { [key: string]: string };

}

/**
 * @schema EbsBlockDevice
 */
export interface EbsBlockDevice {
  /**
   * @schema EbsBlockDevice#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema EbsBlockDevice#Iops
   */
  readonly iops?: number;

  /**
   * @schema EbsBlockDevice#VolumeSize
   */
  readonly volumeSize?: number;

  /**
   * @schema EbsBlockDevice#VolumeType
   */
  readonly volumeType?: string;

  /**
   * @schema EbsBlockDevice#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

}

/**
 * @schema CloudWatchLogsLogStream
 */
export interface CloudWatchLogsLogStream {
  /**
   * @schema CloudWatchLogsLogStream#LogGroupName
   */
  readonly logGroupName?: string;

  /**
   * @schema CloudWatchLogsLogStream#DatetimeFormat
   */
  readonly datetimeFormat?: string;

  /**
   * @schema CloudWatchLogsLogStream#TimeZone
   */
  readonly timeZone?: string;

  /**
   * @schema CloudWatchLogsLogStream#File
   */
  readonly file?: string;

  /**
   * @schema CloudWatchLogsLogStream#FileFingerprintLines
   */
  readonly fileFingerprintLines?: string;

  /**
   * @schema CloudWatchLogsLogStream#MultiLineStartPattern
   */
  readonly multiLineStartPattern?: string;

  /**
   * @schema CloudWatchLogsLogStream#InitialPosition
   */
  readonly initialPosition?: string;

  /**
   * @schema CloudWatchLogsLogStream#Encoding
   */
  readonly encoding?: string;

  /**
   * @schema CloudWatchLogsLogStream#BufferDuration
   */
  readonly bufferDuration?: number;

  /**
   * @schema CloudWatchLogsLogStream#BatchCount
   */
  readonly batchCount?: number;

  /**
   * @schema CloudWatchLogsLogStream#BatchSize
   */
  readonly batchSize?: number;

}

/**
 * @schema ShutdownEventConfiguration
 */
export interface ShutdownEventConfiguration {
  /**
   * @schema ShutdownEventConfiguration#ExecutionTimeout
   */
  readonly executionTimeout?: number;

  /**
   * @schema ShutdownEventConfiguration#DelayUntilElbConnectionsDrained
   */
  readonly delayUntilElbConnectionsDrained?: boolean;

}

/**
 * @schema ReportedOs
 */
export interface ReportedOs {
  /**
   * @schema ReportedOs#Family
   */
  readonly family?: string;

  /**
   * @schema ReportedOs#Name
   */
  readonly name?: string;

  /**
   * @schema ReportedOs#Version
   */
  readonly version?: string;

}

/**
 * @schema OperatingSystemConfigurationManager
 */
export interface OperatingSystemConfigurationManager {
  /**
   * @schema OperatingSystemConfigurationManager#Name
   */
  readonly name?: string;

  /**
   * @schema OperatingSystemConfigurationManager#Version
   */
  readonly version?: string;

}

/**
 * @schema InstancesCount
 */
export interface InstancesCount {
  /**
   * @schema InstancesCount#Assigning
   */
  readonly assigning?: number;

  /**
   * @schema InstancesCount#Booting
   */
  readonly booting?: number;

  /**
   * @schema InstancesCount#ConnectionLost
   */
  readonly connectionLost?: number;

  /**
   * @schema InstancesCount#Deregistering
   */
  readonly deregistering?: number;

  /**
   * @schema InstancesCount#Online
   */
  readonly online?: number;

  /**
   * @schema InstancesCount#Pending
   */
  readonly pending?: number;

  /**
   * @schema InstancesCount#Rebooting
   */
  readonly rebooting?: number;

  /**
   * @schema InstancesCount#Registered
   */
  readonly registered?: number;

  /**
   * @schema InstancesCount#Registering
   */
  readonly registering?: number;

  /**
   * @schema InstancesCount#Requested
   */
  readonly requested?: number;

  /**
   * @schema InstancesCount#RunningSetup
   */
  readonly runningSetup?: number;

  /**
   * @schema InstancesCount#SetupFailed
   */
  readonly setupFailed?: number;

  /**
   * @schema InstancesCount#ShuttingDown
   */
  readonly shuttingDown?: number;

  /**
   * @schema InstancesCount#StartFailed
   */
  readonly startFailed?: number;

  /**
   * @schema InstancesCount#StopFailed
   */
  readonly stopFailed?: number;

  /**
   * @schema InstancesCount#Stopped
   */
  readonly stopped?: number;

  /**
   * @schema InstancesCount#Stopping
   */
  readonly stopping?: number;

  /**
   * @schema InstancesCount#Terminated
   */
  readonly terminated?: number;

  /**
   * @schema InstancesCount#Terminating
   */
  readonly terminating?: number;

  /**
   * @schema InstancesCount#Unassigning
   */
  readonly unassigning?: number;

}
