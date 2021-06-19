/**
 * @schema OpsWorksAssignInstanceRequest
 */
export interface OpsWorksAssignInstanceRequest {
  /**
   * @schema OpsWorksAssignInstanceRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema OpsWorksAssignInstanceRequest#LayerIds
   */
  readonly layerIds: string[];

}

/**
 * @schema OpsWorksAssignVolumeRequest
 */
export interface OpsWorksAssignVolumeRequest {
  /**
   * @schema OpsWorksAssignVolumeRequest#VolumeId
   */
  readonly volumeId: string;

  /**
   * @schema OpsWorksAssignVolumeRequest#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * @schema OpsWorksAssociateElasticIpRequest
 */
export interface OpsWorksAssociateElasticIpRequest {
  /**
   * @schema OpsWorksAssociateElasticIpRequest#ElasticIp
   */
  readonly elasticIp: string;

  /**
   * @schema OpsWorksAssociateElasticIpRequest#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * @schema OpsWorksAttachElasticLoadBalancerRequest
 */
export interface OpsWorksAttachElasticLoadBalancerRequest {
  /**
   * @schema OpsWorksAttachElasticLoadBalancerRequest#ElasticLoadBalancerName
   */
  readonly elasticLoadBalancerName: string;

  /**
   * @schema OpsWorksAttachElasticLoadBalancerRequest#LayerId
   */
  readonly layerId: string;

}

/**
 * @schema OpsWorksCloneStackRequest
 */
export interface OpsWorksCloneStackRequest {
  /**
   * @schema OpsWorksCloneStackRequest#SourceStackId
   */
  readonly sourceStackId: string;

  /**
   * @schema OpsWorksCloneStackRequest#Name
   */
  readonly name?: string;

  /**
   * @schema OpsWorksCloneStackRequest#Region
   */
  readonly region?: string;

  /**
   * @schema OpsWorksCloneStackRequest#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema OpsWorksCloneStackRequest#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema OpsWorksCloneStackRequest#ServiceRoleArn
   */
  readonly serviceRoleArn: string;

  /**
   * @schema OpsWorksCloneStackRequest#DefaultInstanceProfileArn
   */
  readonly defaultInstanceProfileArn?: string;

  /**
   * @schema OpsWorksCloneStackRequest#DefaultOs
   */
  readonly defaultOs?: string;

  /**
   * @schema OpsWorksCloneStackRequest#HostnameTheme
   */
  readonly hostnameTheme?: string;

  /**
   * @schema OpsWorksCloneStackRequest#DefaultAvailabilityZone
   */
  readonly defaultAvailabilityZone?: string;

  /**
   * @schema OpsWorksCloneStackRequest#DefaultSubnetId
   */
  readonly defaultSubnetId?: string;

  /**
   * @schema OpsWorksCloneStackRequest#CustomJson
   */
  readonly customJson?: string;

  /**
   * @schema OpsWorksCloneStackRequest#ConfigurationManager
   */
  readonly configurationManager?: OpsWorksStackConfigurationManager;

  /**
   * @schema OpsWorksCloneStackRequest#ChefConfiguration
   */
  readonly chefConfiguration?: OpsWorksChefConfiguration;

  /**
   * @schema OpsWorksCloneStackRequest#UseCustomCookbooks
   */
  readonly useCustomCookbooks?: boolean;

  /**
   * @schema OpsWorksCloneStackRequest#UseOpsworksSecurityGroups
   */
  readonly useOpsworksSecurityGroups?: boolean;

  /**
   * @schema OpsWorksCloneStackRequest#CustomCookbooksSource
   */
  readonly customCookbooksSource?: OpsWorksSource;

  /**
   * @schema OpsWorksCloneStackRequest#DefaultSshKeyName
   */
  readonly defaultSshKeyName?: string;

  /**
   * @schema OpsWorksCloneStackRequest#ClonePermissions
   */
  readonly clonePermissions?: boolean;

  /**
   * @schema OpsWorksCloneStackRequest#CloneAppIds
   */
  readonly cloneAppIds?: string[];

  /**
   * @schema OpsWorksCloneStackRequest#DefaultRootDeviceType
   */
  readonly defaultRootDeviceType?: string;

  /**
   * @schema OpsWorksCloneStackRequest#AgentVersion
   */
  readonly agentVersion?: string;

}

/**
 * @schema OpsWorksCloneStackResult
 */
export interface OpsWorksCloneStackResult {
  /**
   * @schema OpsWorksCloneStackResult#StackId
   */
  readonly stackId?: string;

}

/**
 * @schema OpsWorksCreateAppRequest
 */
export interface OpsWorksCreateAppRequest {
  /**
   * @schema OpsWorksCreateAppRequest#StackId
   */
  readonly stackId: string;

  /**
   * @schema OpsWorksCreateAppRequest#Shortname
   */
  readonly shortname?: string;

  /**
   * @schema OpsWorksCreateAppRequest#Name
   */
  readonly name: string;

  /**
   * @schema OpsWorksCreateAppRequest#Description
   */
  readonly description?: string;

  /**
   * @schema OpsWorksCreateAppRequest#DataSources
   */
  readonly dataSources?: OpsWorksDataSource[];

  /**
   * @schema OpsWorksCreateAppRequest#Type
   */
  readonly type: string;

  /**
   * @schema OpsWorksCreateAppRequest#AppSource
   */
  readonly appSource?: OpsWorksSource;

  /**
   * @schema OpsWorksCreateAppRequest#Domains
   */
  readonly domains?: string[];

  /**
   * @schema OpsWorksCreateAppRequest#EnableSsl
   */
  readonly enableSsl?: boolean;

  /**
   * @schema OpsWorksCreateAppRequest#SslConfiguration
   */
  readonly sslConfiguration?: OpsWorksSslConfiguration;

  /**
   * @schema OpsWorksCreateAppRequest#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema OpsWorksCreateAppRequest#Environment
   */
  readonly environment?: OpsWorksEnvironmentVariable[];

}

/**
 * @schema OpsWorksCreateAppResult
 */
export interface OpsWorksCreateAppResult {
  /**
   * @schema OpsWorksCreateAppResult#AppId
   */
  readonly appId?: string;

}

/**
 * @schema OpsWorksCreateDeploymentRequest
 */
export interface OpsWorksCreateDeploymentRequest {
  /**
   * @schema OpsWorksCreateDeploymentRequest#StackId
   */
  readonly stackId: string;

  /**
   * @schema OpsWorksCreateDeploymentRequest#AppId
   */
  readonly appId?: string;

  /**
   * @schema OpsWorksCreateDeploymentRequest#InstanceIds
   */
  readonly instanceIds?: string[];

  /**
   * @schema OpsWorksCreateDeploymentRequest#LayerIds
   */
  readonly layerIds?: string[];

  /**
   * @schema OpsWorksCreateDeploymentRequest#Command
   */
  readonly command: OpsWorksDeploymentCommand;

  /**
   * @schema OpsWorksCreateDeploymentRequest#Comment
   */
  readonly comment?: string;

  /**
   * @schema OpsWorksCreateDeploymentRequest#CustomJson
   */
  readonly customJson?: string;

}

/**
 * @schema OpsWorksCreateDeploymentResult
 */
export interface OpsWorksCreateDeploymentResult {
  /**
   * @schema OpsWorksCreateDeploymentResult#DeploymentId
   */
  readonly deploymentId?: string;

}

/**
 * @schema OpsWorksCreateInstanceRequest
 */
export interface OpsWorksCreateInstanceRequest {
  /**
   * @schema OpsWorksCreateInstanceRequest#StackId
   */
  readonly stackId: string;

  /**
   * @schema OpsWorksCreateInstanceRequest#LayerIds
   */
  readonly layerIds: string[];

  /**
   * @schema OpsWorksCreateInstanceRequest#InstanceType
   */
  readonly instanceType: string;

  /**
   * @schema OpsWorksCreateInstanceRequest#AutoScalingType
   */
  readonly autoScalingType?: string;

  /**
   * @schema OpsWorksCreateInstanceRequest#Hostname
   */
  readonly hostname?: string;

  /**
   * @schema OpsWorksCreateInstanceRequest#Os
   */
  readonly os?: string;

  /**
   * @schema OpsWorksCreateInstanceRequest#AmiId
   */
  readonly amiId?: string;

  /**
   * @schema OpsWorksCreateInstanceRequest#SshKeyName
   */
  readonly sshKeyName?: string;

  /**
   * @schema OpsWorksCreateInstanceRequest#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema OpsWorksCreateInstanceRequest#VirtualizationType
   */
  readonly virtualizationType?: string;

  /**
   * @schema OpsWorksCreateInstanceRequest#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema OpsWorksCreateInstanceRequest#Architecture
   */
  readonly architecture?: string;

  /**
   * @schema OpsWorksCreateInstanceRequest#RootDeviceType
   */
  readonly rootDeviceType?: string;

  /**
   * @schema OpsWorksCreateInstanceRequest#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: OpsWorksBlockDeviceMapping[];

  /**
   * @schema OpsWorksCreateInstanceRequest#InstallUpdatesOnBoot
   */
  readonly installUpdatesOnBoot?: boolean;

  /**
   * @schema OpsWorksCreateInstanceRequest#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema OpsWorksCreateInstanceRequest#AgentVersion
   */
  readonly agentVersion?: string;

  /**
   * @schema OpsWorksCreateInstanceRequest#Tenancy
   */
  readonly tenancy?: string;

}

/**
 * @schema OpsWorksCreateInstanceResult
 */
export interface OpsWorksCreateInstanceResult {
  /**
   * @schema OpsWorksCreateInstanceResult#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * @schema OpsWorksCreateLayerRequest
 */
export interface OpsWorksCreateLayerRequest {
  /**
   * @schema OpsWorksCreateLayerRequest#StackId
   */
  readonly stackId: string;

  /**
   * @schema OpsWorksCreateLayerRequest#Type
   */
  readonly type: string;

  /**
   * @schema OpsWorksCreateLayerRequest#Name
   */
  readonly name: string;

  /**
   * @schema OpsWorksCreateLayerRequest#Shortname
   */
  readonly shortname: string;

  /**
   * @schema OpsWorksCreateLayerRequest#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema OpsWorksCreateLayerRequest#CloudWatchLogsConfiguration
   */
  readonly cloudWatchLogsConfiguration?: OpsWorksCloudWatchLogsConfiguration;

  /**
   * @schema OpsWorksCreateLayerRequest#CustomInstanceProfileArn
   */
  readonly customInstanceProfileArn?: string;

  /**
   * @schema OpsWorksCreateLayerRequest#CustomJson
   */
  readonly customJson?: string;

  /**
   * @schema OpsWorksCreateLayerRequest#CustomSecurityGroupIds
   */
  readonly customSecurityGroupIds?: string[];

  /**
   * @schema OpsWorksCreateLayerRequest#Packages
   */
  readonly packages?: string[];

  /**
   * @schema OpsWorksCreateLayerRequest#VolumeConfigurations
   */
  readonly volumeConfigurations?: OpsWorksVolumeConfiguration[];

  /**
   * @schema OpsWorksCreateLayerRequest#EnableAutoHealing
   */
  readonly enableAutoHealing?: boolean;

  /**
   * @schema OpsWorksCreateLayerRequest#AutoAssignElasticIps
   */
  readonly autoAssignElasticIps?: boolean;

  /**
   * @schema OpsWorksCreateLayerRequest#AutoAssignPublicIps
   */
  readonly autoAssignPublicIps?: boolean;

  /**
   * @schema OpsWorksCreateLayerRequest#CustomRecipes
   */
  readonly customRecipes?: OpsWorksRecipes;

  /**
   * @schema OpsWorksCreateLayerRequest#InstallUpdatesOnBoot
   */
  readonly installUpdatesOnBoot?: boolean;

  /**
   * @schema OpsWorksCreateLayerRequest#UseEbsOptimizedInstances
   */
  readonly useEbsOptimizedInstances?: boolean;

  /**
   * @schema OpsWorksCreateLayerRequest#LifecycleEventConfiguration
   */
  readonly lifecycleEventConfiguration?: OpsWorksLifecycleEventConfiguration;

}

/**
 * @schema OpsWorksCreateLayerResult
 */
export interface OpsWorksCreateLayerResult {
  /**
   * @schema OpsWorksCreateLayerResult#LayerId
   */
  readonly layerId?: string;

}

/**
 * @schema OpsWorksCreateStackRequest
 */
export interface OpsWorksCreateStackRequest {
  /**
   * @schema OpsWorksCreateStackRequest#Name
   */
  readonly name: string;

  /**
   * @schema OpsWorksCreateStackRequest#Region
   */
  readonly region: string;

  /**
   * @schema OpsWorksCreateStackRequest#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema OpsWorksCreateStackRequest#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema OpsWorksCreateStackRequest#ServiceRoleArn
   */
  readonly serviceRoleArn: string;

  /**
   * @schema OpsWorksCreateStackRequest#DefaultInstanceProfileArn
   */
  readonly defaultInstanceProfileArn: string;

  /**
   * @schema OpsWorksCreateStackRequest#DefaultOs
   */
  readonly defaultOs?: string;

  /**
   * @schema OpsWorksCreateStackRequest#HostnameTheme
   */
  readonly hostnameTheme?: string;

  /**
   * @schema OpsWorksCreateStackRequest#DefaultAvailabilityZone
   */
  readonly defaultAvailabilityZone?: string;

  /**
   * @schema OpsWorksCreateStackRequest#DefaultSubnetId
   */
  readonly defaultSubnetId?: string;

  /**
   * @schema OpsWorksCreateStackRequest#CustomJson
   */
  readonly customJson?: string;

  /**
   * @schema OpsWorksCreateStackRequest#ConfigurationManager
   */
  readonly configurationManager?: OpsWorksStackConfigurationManager;

  /**
   * @schema OpsWorksCreateStackRequest#ChefConfiguration
   */
  readonly chefConfiguration?: OpsWorksChefConfiguration;

  /**
   * @schema OpsWorksCreateStackRequest#UseCustomCookbooks
   */
  readonly useCustomCookbooks?: boolean;

  /**
   * @schema OpsWorksCreateStackRequest#UseOpsworksSecurityGroups
   */
  readonly useOpsworksSecurityGroups?: boolean;

  /**
   * @schema OpsWorksCreateStackRequest#CustomCookbooksSource
   */
  readonly customCookbooksSource?: OpsWorksSource;

  /**
   * @schema OpsWorksCreateStackRequest#DefaultSshKeyName
   */
  readonly defaultSshKeyName?: string;

  /**
   * @schema OpsWorksCreateStackRequest#DefaultRootDeviceType
   */
  readonly defaultRootDeviceType?: string;

  /**
   * @schema OpsWorksCreateStackRequest#AgentVersion
   */
  readonly agentVersion?: string;

}

/**
 * @schema OpsWorksCreateStackResult
 */
export interface OpsWorksCreateStackResult {
  /**
   * @schema OpsWorksCreateStackResult#StackId
   */
  readonly stackId?: string;

}

/**
 * @schema OpsWorksCreateUserProfileRequest
 */
export interface OpsWorksCreateUserProfileRequest {
  /**
   * @schema OpsWorksCreateUserProfileRequest#IamUserArn
   */
  readonly iamUserArn: string;

  /**
   * @schema OpsWorksCreateUserProfileRequest#SshUsername
   */
  readonly sshUsername?: string;

  /**
   * @schema OpsWorksCreateUserProfileRequest#SshPublicKey
   */
  readonly sshPublicKey?: string;

  /**
   * @schema OpsWorksCreateUserProfileRequest#AllowSelfManagement
   */
  readonly allowSelfManagement?: boolean;

}

/**
 * @schema OpsWorksCreateUserProfileResult
 */
export interface OpsWorksCreateUserProfileResult {
  /**
   * @schema OpsWorksCreateUserProfileResult#IamUserArn
   */
  readonly iamUserArn?: string;

}

/**
 * @schema OpsWorksDeleteAppRequest
 */
export interface OpsWorksDeleteAppRequest {
  /**
   * @schema OpsWorksDeleteAppRequest#AppId
   */
  readonly appId: string;

}

/**
 * @schema OpsWorksDeleteInstanceRequest
 */
export interface OpsWorksDeleteInstanceRequest {
  /**
   * @schema OpsWorksDeleteInstanceRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema OpsWorksDeleteInstanceRequest#DeleteElasticIp
   */
  readonly deleteElasticIp?: boolean;

  /**
   * @schema OpsWorksDeleteInstanceRequest#DeleteVolumes
   */
  readonly deleteVolumes?: boolean;

}

/**
 * @schema OpsWorksDeleteLayerRequest
 */
export interface OpsWorksDeleteLayerRequest {
  /**
   * @schema OpsWorksDeleteLayerRequest#LayerId
   */
  readonly layerId: string;

}

/**
 * @schema OpsWorksDeleteStackRequest
 */
export interface OpsWorksDeleteStackRequest {
  /**
   * @schema OpsWorksDeleteStackRequest#StackId
   */
  readonly stackId: string;

}

/**
 * @schema OpsWorksDeleteUserProfileRequest
 */
export interface OpsWorksDeleteUserProfileRequest {
  /**
   * @schema OpsWorksDeleteUserProfileRequest#IamUserArn
   */
  readonly iamUserArn: string;

}

/**
 * @schema OpsWorksDeregisterEcsClusterRequest
 */
export interface OpsWorksDeregisterEcsClusterRequest {
  /**
   * @schema OpsWorksDeregisterEcsClusterRequest#EcsClusterArn
   */
  readonly ecsClusterArn: string;

}

/**
 * @schema OpsWorksDeregisterElasticIpRequest
 */
export interface OpsWorksDeregisterElasticIpRequest {
  /**
   * @schema OpsWorksDeregisterElasticIpRequest#ElasticIp
   */
  readonly elasticIp: string;

}

/**
 * @schema OpsWorksDeregisterInstanceRequest
 */
export interface OpsWorksDeregisterInstanceRequest {
  /**
   * @schema OpsWorksDeregisterInstanceRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema OpsWorksDeregisterRdsDbInstanceRequest
 */
export interface OpsWorksDeregisterRdsDbInstanceRequest {
  /**
   * @schema OpsWorksDeregisterRdsDbInstanceRequest#RdsDbInstanceArn
   */
  readonly rdsDbInstanceArn: string;

}

/**
 * @schema OpsWorksDeregisterVolumeRequest
 */
export interface OpsWorksDeregisterVolumeRequest {
  /**
   * @schema OpsWorksDeregisterVolumeRequest#VolumeId
   */
  readonly volumeId: string;

}

/**
 * @schema OpsWorksDescribeAgentVersionsRequest
 */
export interface OpsWorksDescribeAgentVersionsRequest {
  /**
   * @schema OpsWorksDescribeAgentVersionsRequest#StackId
   */
  readonly stackId?: string;

  /**
   * @schema OpsWorksDescribeAgentVersionsRequest#ConfigurationManager
   */
  readonly configurationManager?: OpsWorksStackConfigurationManager;

}

/**
 * @schema OpsWorksDescribeAgentVersionsResult
 */
export interface OpsWorksDescribeAgentVersionsResult {
  /**
   * @schema OpsWorksDescribeAgentVersionsResult#AgentVersions
   */
  readonly agentVersions?: OpsWorksAgentVersion[];

}

/**
 * @schema OpsWorksDescribeAppsRequest
 */
export interface OpsWorksDescribeAppsRequest {
  /**
   * @schema OpsWorksDescribeAppsRequest#StackId
   */
  readonly stackId?: string;

  /**
   * @schema OpsWorksDescribeAppsRequest#AppIds
   */
  readonly appIds?: string[];

}

/**
 * @schema OpsWorksDescribeAppsResult
 */
export interface OpsWorksDescribeAppsResult {
  /**
   * @schema OpsWorksDescribeAppsResult#Apps
   */
  readonly apps?: OpsWorksApp[];

}

/**
 * @schema OpsWorksDescribeCommandsRequest
 */
export interface OpsWorksDescribeCommandsRequest {
  /**
   * @schema OpsWorksDescribeCommandsRequest#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema OpsWorksDescribeCommandsRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema OpsWorksDescribeCommandsRequest#CommandIds
   */
  readonly commandIds?: string[];

}

/**
 * @schema OpsWorksDescribeCommandsResult
 */
export interface OpsWorksDescribeCommandsResult {
  /**
   * @schema OpsWorksDescribeCommandsResult#Commands
   */
  readonly commands?: OpsWorksCommand[];

}

/**
 * @schema OpsWorksDescribeDeploymentsRequest
 */
export interface OpsWorksDescribeDeploymentsRequest {
  /**
   * @schema OpsWorksDescribeDeploymentsRequest#StackId
   */
  readonly stackId?: string;

  /**
   * @schema OpsWorksDescribeDeploymentsRequest#AppId
   */
  readonly appId?: string;

  /**
   * @schema OpsWorksDescribeDeploymentsRequest#DeploymentIds
   */
  readonly deploymentIds?: string[];

}

/**
 * @schema OpsWorksDescribeDeploymentsResult
 */
export interface OpsWorksDescribeDeploymentsResult {
  /**
   * @schema OpsWorksDescribeDeploymentsResult#Deployments
   */
  readonly deployments?: OpsWorksDeployment[];

}

/**
 * @schema OpsWorksDescribeEcsClustersRequest
 */
export interface OpsWorksDescribeEcsClustersRequest {
  /**
   * @schema OpsWorksDescribeEcsClustersRequest#EcsClusterArns
   */
  readonly ecsClusterArns?: string[];

  /**
   * @schema OpsWorksDescribeEcsClustersRequest#StackId
   */
  readonly stackId?: string;

  /**
   * @schema OpsWorksDescribeEcsClustersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema OpsWorksDescribeEcsClustersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema OpsWorksDescribeEcsClustersResult
 */
export interface OpsWorksDescribeEcsClustersResult {
  /**
   * @schema OpsWorksDescribeEcsClustersResult#EcsClusters
   */
  readonly ecsClusters?: OpsWorksEcsCluster[];

  /**
   * @schema OpsWorksDescribeEcsClustersResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema OpsWorksDescribeElasticIpsRequest
 */
export interface OpsWorksDescribeElasticIpsRequest {
  /**
   * @schema OpsWorksDescribeElasticIpsRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema OpsWorksDescribeElasticIpsRequest#StackId
   */
  readonly stackId?: string;

  /**
   * @schema OpsWorksDescribeElasticIpsRequest#Ips
   */
  readonly ips?: string[];

}

/**
 * @schema OpsWorksDescribeElasticIpsResult
 */
export interface OpsWorksDescribeElasticIpsResult {
  /**
   * @schema OpsWorksDescribeElasticIpsResult#ElasticIps
   */
  readonly elasticIps?: OpsWorksElasticIp[];

}

/**
 * @schema OpsWorksDescribeElasticLoadBalancersRequest
 */
export interface OpsWorksDescribeElasticLoadBalancersRequest {
  /**
   * @schema OpsWorksDescribeElasticLoadBalancersRequest#StackId
   */
  readonly stackId?: string;

  /**
   * @schema OpsWorksDescribeElasticLoadBalancersRequest#LayerIds
   */
  readonly layerIds?: string[];

}

/**
 * @schema OpsWorksDescribeElasticLoadBalancersResult
 */
export interface OpsWorksDescribeElasticLoadBalancersResult {
  /**
   * @schema OpsWorksDescribeElasticLoadBalancersResult#ElasticLoadBalancers
   */
  readonly elasticLoadBalancers?: OpsWorksElasticLoadBalancer[];

}

/**
 * @schema OpsWorksDescribeInstancesRequest
 */
export interface OpsWorksDescribeInstancesRequest {
  /**
   * @schema OpsWorksDescribeInstancesRequest#StackId
   */
  readonly stackId?: string;

  /**
   * @schema OpsWorksDescribeInstancesRequest#LayerId
   */
  readonly layerId?: string;

  /**
   * @schema OpsWorksDescribeInstancesRequest#InstanceIds
   */
  readonly instanceIds?: string[];

}

/**
 * @schema OpsWorksDescribeInstancesResult
 */
export interface OpsWorksDescribeInstancesResult {
  /**
   * @schema OpsWorksDescribeInstancesResult#Instances
   */
  readonly instances?: OpsWorksInstance[];

}

/**
 * @schema OpsWorksDescribeLayersRequest
 */
export interface OpsWorksDescribeLayersRequest {
  /**
   * @schema OpsWorksDescribeLayersRequest#StackId
   */
  readonly stackId?: string;

  /**
   * @schema OpsWorksDescribeLayersRequest#LayerIds
   */
  readonly layerIds?: string[];

}

/**
 * @schema OpsWorksDescribeLayersResult
 */
export interface OpsWorksDescribeLayersResult {
  /**
   * @schema OpsWorksDescribeLayersResult#Layers
   */
  readonly layers?: OpsWorksLayer[];

}

/**
 * @schema OpsWorksDescribeLoadBasedAutoScalingRequest
 */
export interface OpsWorksDescribeLoadBasedAutoScalingRequest {
  /**
   * @schema OpsWorksDescribeLoadBasedAutoScalingRequest#LayerIds
   */
  readonly layerIds: string[];

}

/**
 * @schema OpsWorksDescribeLoadBasedAutoScalingResult
 */
export interface OpsWorksDescribeLoadBasedAutoScalingResult {
  /**
   * @schema OpsWorksDescribeLoadBasedAutoScalingResult#LoadBasedAutoScalingConfigurations
   */
  readonly loadBasedAutoScalingConfigurations?: OpsWorksLoadBasedAutoScalingConfiguration[];

}

/**
 * @schema OpsWorksDescribeMyUserProfileResult
 */
export interface OpsWorksDescribeMyUserProfileResult {
  /**
   * @schema OpsWorksDescribeMyUserProfileResult#UserProfile
   */
  readonly userProfile?: OpsWorksSelfUserProfile;

}

/**
 * @schema OpsWorksDescribeOperatingSystemsResponse
 */
export interface OpsWorksDescribeOperatingSystemsResponse {
  /**
   * @schema OpsWorksDescribeOperatingSystemsResponse#OperatingSystems
   */
  readonly operatingSystems?: OpsWorksOperatingSystem[];

}

/**
 * @schema OpsWorksDescribePermissionsRequest
 */
export interface OpsWorksDescribePermissionsRequest {
  /**
   * @schema OpsWorksDescribePermissionsRequest#IamUserArn
   */
  readonly iamUserArn?: string;

  /**
   * @schema OpsWorksDescribePermissionsRequest#StackId
   */
  readonly stackId?: string;

}

/**
 * @schema OpsWorksDescribePermissionsResult
 */
export interface OpsWorksDescribePermissionsResult {
  /**
   * @schema OpsWorksDescribePermissionsResult#Permissions
   */
  readonly permissions?: OpsWorksPermission[];

}

/**
 * @schema OpsWorksDescribeRaidArraysRequest
 */
export interface OpsWorksDescribeRaidArraysRequest {
  /**
   * @schema OpsWorksDescribeRaidArraysRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema OpsWorksDescribeRaidArraysRequest#StackId
   */
  readonly stackId?: string;

  /**
   * @schema OpsWorksDescribeRaidArraysRequest#RaidArrayIds
   */
  readonly raidArrayIds?: string[];

}

/**
 * @schema OpsWorksDescribeRaidArraysResult
 */
export interface OpsWorksDescribeRaidArraysResult {
  /**
   * @schema OpsWorksDescribeRaidArraysResult#RaidArrays
   */
  readonly raidArrays?: OpsWorksRaidArray[];

}

/**
 * @schema OpsWorksDescribeRdsDbInstancesRequest
 */
export interface OpsWorksDescribeRdsDbInstancesRequest {
  /**
   * @schema OpsWorksDescribeRdsDbInstancesRequest#StackId
   */
  readonly stackId: string;

  /**
   * @schema OpsWorksDescribeRdsDbInstancesRequest#RdsDbInstanceArns
   */
  readonly rdsDbInstanceArns?: string[];

}

/**
 * @schema OpsWorksDescribeRdsDbInstancesResult
 */
export interface OpsWorksDescribeRdsDbInstancesResult {
  /**
   * @schema OpsWorksDescribeRdsDbInstancesResult#RdsDbInstances
   */
  readonly rdsDbInstances?: OpsWorksRdsDbInstance[];

}

/**
 * @schema OpsWorksDescribeServiceErrorsRequest
 */
export interface OpsWorksDescribeServiceErrorsRequest {
  /**
   * @schema OpsWorksDescribeServiceErrorsRequest#StackId
   */
  readonly stackId?: string;

  /**
   * @schema OpsWorksDescribeServiceErrorsRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema OpsWorksDescribeServiceErrorsRequest#ServiceErrorIds
   */
  readonly serviceErrorIds?: string[];

}

/**
 * @schema OpsWorksDescribeServiceErrorsResult
 */
export interface OpsWorksDescribeServiceErrorsResult {
  /**
   * @schema OpsWorksDescribeServiceErrorsResult#ServiceErrors
   */
  readonly serviceErrors?: OpsWorksServiceError[];

}

/**
 * @schema OpsWorksDescribeStackProvisioningParametersRequest
 */
export interface OpsWorksDescribeStackProvisioningParametersRequest {
  /**
   * @schema OpsWorksDescribeStackProvisioningParametersRequest#StackId
   */
  readonly stackId: string;

}

/**
 * @schema OpsWorksDescribeStackProvisioningParametersResult
 */
export interface OpsWorksDescribeStackProvisioningParametersResult {
  /**
   * @schema OpsWorksDescribeStackProvisioningParametersResult#AgentInstallerUrl
   */
  readonly agentInstallerUrl?: string;

  /**
   * @schema OpsWorksDescribeStackProvisioningParametersResult#Parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * @schema OpsWorksDescribeStackSummaryRequest
 */
export interface OpsWorksDescribeStackSummaryRequest {
  /**
   * @schema OpsWorksDescribeStackSummaryRequest#StackId
   */
  readonly stackId: string;

}

/**
 * @schema OpsWorksDescribeStackSummaryResult
 */
export interface OpsWorksDescribeStackSummaryResult {
  /**
   * @schema OpsWorksDescribeStackSummaryResult#StackSummary
   */
  readonly stackSummary?: OpsWorksStackSummary;

}

/**
 * @schema OpsWorksDescribeStacksRequest
 */
export interface OpsWorksDescribeStacksRequest {
  /**
   * @schema OpsWorksDescribeStacksRequest#StackIds
   */
  readonly stackIds?: string[];

}

/**
 * @schema OpsWorksDescribeStacksResult
 */
export interface OpsWorksDescribeStacksResult {
  /**
   * @schema OpsWorksDescribeStacksResult#Stacks
   */
  readonly stacks?: OpsWorksStack[];

}

/**
 * @schema OpsWorksDescribeTimeBasedAutoScalingRequest
 */
export interface OpsWorksDescribeTimeBasedAutoScalingRequest {
  /**
   * @schema OpsWorksDescribeTimeBasedAutoScalingRequest#InstanceIds
   */
  readonly instanceIds: string[];

}

/**
 * @schema OpsWorksDescribeTimeBasedAutoScalingResult
 */
export interface OpsWorksDescribeTimeBasedAutoScalingResult {
  /**
   * @schema OpsWorksDescribeTimeBasedAutoScalingResult#TimeBasedAutoScalingConfigurations
   */
  readonly timeBasedAutoScalingConfigurations?: OpsWorksTimeBasedAutoScalingConfiguration[];

}

/**
 * @schema OpsWorksDescribeUserProfilesRequest
 */
export interface OpsWorksDescribeUserProfilesRequest {
  /**
   * @schema OpsWorksDescribeUserProfilesRequest#IamUserArns
   */
  readonly iamUserArns?: string[];

}

/**
 * @schema OpsWorksDescribeUserProfilesResult
 */
export interface OpsWorksDescribeUserProfilesResult {
  /**
   * @schema OpsWorksDescribeUserProfilesResult#UserProfiles
   */
  readonly userProfiles?: OpsWorksUserProfile[];

}

/**
 * @schema OpsWorksDescribeVolumesRequest
 */
export interface OpsWorksDescribeVolumesRequest {
  /**
   * @schema OpsWorksDescribeVolumesRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema OpsWorksDescribeVolumesRequest#StackId
   */
  readonly stackId?: string;

  /**
   * @schema OpsWorksDescribeVolumesRequest#RaidArrayId
   */
  readonly raidArrayId?: string;

  /**
   * @schema OpsWorksDescribeVolumesRequest#VolumeIds
   */
  readonly volumeIds?: string[];

}

/**
 * @schema OpsWorksDescribeVolumesResult
 */
export interface OpsWorksDescribeVolumesResult {
  /**
   * @schema OpsWorksDescribeVolumesResult#Volumes
   */
  readonly volumes?: OpsWorksVolume[];

}

/**
 * @schema OpsWorksDetachElasticLoadBalancerRequest
 */
export interface OpsWorksDetachElasticLoadBalancerRequest {
  /**
   * @schema OpsWorksDetachElasticLoadBalancerRequest#ElasticLoadBalancerName
   */
  readonly elasticLoadBalancerName: string;

  /**
   * @schema OpsWorksDetachElasticLoadBalancerRequest#LayerId
   */
  readonly layerId: string;

}

/**
 * @schema OpsWorksDisassociateElasticIpRequest
 */
export interface OpsWorksDisassociateElasticIpRequest {
  /**
   * @schema OpsWorksDisassociateElasticIpRequest#ElasticIp
   */
  readonly elasticIp: string;

}

/**
 * @schema OpsWorksGetHostnameSuggestionRequest
 */
export interface OpsWorksGetHostnameSuggestionRequest {
  /**
   * @schema OpsWorksGetHostnameSuggestionRequest#LayerId
   */
  readonly layerId: string;

}

/**
 * @schema OpsWorksGetHostnameSuggestionResult
 */
export interface OpsWorksGetHostnameSuggestionResult {
  /**
   * @schema OpsWorksGetHostnameSuggestionResult#LayerId
   */
  readonly layerId?: string;

  /**
   * @schema OpsWorksGetHostnameSuggestionResult#Hostname
   */
  readonly hostname?: string;

}

/**
 * @schema OpsWorksGrantAccessRequest
 */
export interface OpsWorksGrantAccessRequest {
  /**
   * @schema OpsWorksGrantAccessRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema OpsWorksGrantAccessRequest#ValidForInMinutes
   */
  readonly validForInMinutes?: number;

}

/**
 * @schema OpsWorksGrantAccessResult
 */
export interface OpsWorksGrantAccessResult {
  /**
   * @schema OpsWorksGrantAccessResult#TemporaryCredential
   */
  readonly temporaryCredential?: OpsWorksTemporaryCredential;

}

/**
 * @schema OpsWorksListTagsRequest
 */
export interface OpsWorksListTagsRequest {
  /**
   * @schema OpsWorksListTagsRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema OpsWorksListTagsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema OpsWorksListTagsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema OpsWorksListTagsResult
 */
export interface OpsWorksListTagsResult {
  /**
   * @schema OpsWorksListTagsResult#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema OpsWorksListTagsResult#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema OpsWorksRebootInstanceRequest
 */
export interface OpsWorksRebootInstanceRequest {
  /**
   * @schema OpsWorksRebootInstanceRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema OpsWorksRegisterEcsClusterRequest
 */
export interface OpsWorksRegisterEcsClusterRequest {
  /**
   * @schema OpsWorksRegisterEcsClusterRequest#EcsClusterArn
   */
  readonly ecsClusterArn: string;

  /**
   * @schema OpsWorksRegisterEcsClusterRequest#StackId
   */
  readonly stackId: string;

}

/**
 * @schema OpsWorksRegisterEcsClusterResult
 */
export interface OpsWorksRegisterEcsClusterResult {
  /**
   * @schema OpsWorksRegisterEcsClusterResult#EcsClusterArn
   */
  readonly ecsClusterArn?: string;

}

/**
 * @schema OpsWorksRegisterElasticIpRequest
 */
export interface OpsWorksRegisterElasticIpRequest {
  /**
   * @schema OpsWorksRegisterElasticIpRequest#ElasticIp
   */
  readonly elasticIp: string;

  /**
   * @schema OpsWorksRegisterElasticIpRequest#StackId
   */
  readonly stackId: string;

}

/**
 * @schema OpsWorksRegisterElasticIpResult
 */
export interface OpsWorksRegisterElasticIpResult {
  /**
   * @schema OpsWorksRegisterElasticIpResult#ElasticIp
   */
  readonly elasticIp?: string;

}

/**
 * @schema OpsWorksRegisterInstanceRequest
 */
export interface OpsWorksRegisterInstanceRequest {
  /**
   * @schema OpsWorksRegisterInstanceRequest#StackId
   */
  readonly stackId: string;

  /**
   * @schema OpsWorksRegisterInstanceRequest#Hostname
   */
  readonly hostname?: string;

  /**
   * @schema OpsWorksRegisterInstanceRequest#PublicIp
   */
  readonly publicIp?: string;

  /**
   * @schema OpsWorksRegisterInstanceRequest#PrivateIp
   */
  readonly privateIp?: string;

  /**
   * @schema OpsWorksRegisterInstanceRequest#RsaPublicKey
   */
  readonly rsaPublicKey?: string;

  /**
   * @schema OpsWorksRegisterInstanceRequest#RsaPublicKeyFingerprint
   */
  readonly rsaPublicKeyFingerprint?: string;

  /**
   * @schema OpsWorksRegisterInstanceRequest#InstanceIdentity
   */
  readonly instanceIdentity?: OpsWorksInstanceIdentity;

}

/**
 * @schema OpsWorksRegisterInstanceResult
 */
export interface OpsWorksRegisterInstanceResult {
  /**
   * @schema OpsWorksRegisterInstanceResult#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * @schema OpsWorksRegisterRdsDbInstanceRequest
 */
export interface OpsWorksRegisterRdsDbInstanceRequest {
  /**
   * @schema OpsWorksRegisterRdsDbInstanceRequest#StackId
   */
  readonly stackId: string;

  /**
   * @schema OpsWorksRegisterRdsDbInstanceRequest#RdsDbInstanceArn
   */
  readonly rdsDbInstanceArn: string;

  /**
   * @schema OpsWorksRegisterRdsDbInstanceRequest#DbUser
   */
  readonly dbUser: string;

  /**
   * @schema OpsWorksRegisterRdsDbInstanceRequest#DbPassword
   */
  readonly dbPassword: string;

}

/**
 * @schema OpsWorksRegisterVolumeRequest
 */
export interface OpsWorksRegisterVolumeRequest {
  /**
   * @schema OpsWorksRegisterVolumeRequest#Ec2VolumeId
   */
  readonly ec2VolumeId?: string;

  /**
   * @schema OpsWorksRegisterVolumeRequest#StackId
   */
  readonly stackId: string;

}

/**
 * @schema OpsWorksRegisterVolumeResult
 */
export interface OpsWorksRegisterVolumeResult {
  /**
   * @schema OpsWorksRegisterVolumeResult#VolumeId
   */
  readonly volumeId?: string;

}

/**
 * @schema OpsWorksSetLoadBasedAutoScalingRequest
 */
export interface OpsWorksSetLoadBasedAutoScalingRequest {
  /**
   * @schema OpsWorksSetLoadBasedAutoScalingRequest#LayerId
   */
  readonly layerId: string;

  /**
   * @schema OpsWorksSetLoadBasedAutoScalingRequest#Enable
   */
  readonly enable?: boolean;

  /**
   * @schema OpsWorksSetLoadBasedAutoScalingRequest#UpScaling
   */
  readonly upScaling?: OpsWorksAutoScalingThresholds;

  /**
   * @schema OpsWorksSetLoadBasedAutoScalingRequest#DownScaling
   */
  readonly downScaling?: OpsWorksAutoScalingThresholds;

}

/**
 * @schema OpsWorksSetPermissionRequest
 */
export interface OpsWorksSetPermissionRequest {
  /**
   * @schema OpsWorksSetPermissionRequest#StackId
   */
  readonly stackId: string;

  /**
   * @schema OpsWorksSetPermissionRequest#IamUserArn
   */
  readonly iamUserArn: string;

  /**
   * @schema OpsWorksSetPermissionRequest#AllowSsh
   */
  readonly allowSsh?: boolean;

  /**
   * @schema OpsWorksSetPermissionRequest#AllowSudo
   */
  readonly allowSudo?: boolean;

  /**
   * @schema OpsWorksSetPermissionRequest#Level
   */
  readonly level?: string;

}

/**
 * @schema OpsWorksSetTimeBasedAutoScalingRequest
 */
export interface OpsWorksSetTimeBasedAutoScalingRequest {
  /**
   * @schema OpsWorksSetTimeBasedAutoScalingRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema OpsWorksSetTimeBasedAutoScalingRequest#AutoScalingSchedule
   */
  readonly autoScalingSchedule?: OpsWorksWeeklyAutoScalingSchedule;

}

/**
 * @schema OpsWorksStartInstanceRequest
 */
export interface OpsWorksStartInstanceRequest {
  /**
   * @schema OpsWorksStartInstanceRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema OpsWorksStartStackRequest
 */
export interface OpsWorksStartStackRequest {
  /**
   * @schema OpsWorksStartStackRequest#StackId
   */
  readonly stackId: string;

}

/**
 * @schema OpsWorksStopInstanceRequest
 */
export interface OpsWorksStopInstanceRequest {
  /**
   * @schema OpsWorksStopInstanceRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema OpsWorksStopInstanceRequest#Force
   */
  readonly force?: boolean;

}

/**
 * @schema OpsWorksStopStackRequest
 */
export interface OpsWorksStopStackRequest {
  /**
   * @schema OpsWorksStopStackRequest#StackId
   */
  readonly stackId: string;

}

/**
 * @schema OpsWorksTagResourceRequest
 */
export interface OpsWorksTagResourceRequest {
  /**
   * @schema OpsWorksTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema OpsWorksTagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema OpsWorksUnassignInstanceRequest
 */
export interface OpsWorksUnassignInstanceRequest {
  /**
   * @schema OpsWorksUnassignInstanceRequest#InstanceId
   */
  readonly instanceId: string;

}

/**
 * @schema OpsWorksUnassignVolumeRequest
 */
export interface OpsWorksUnassignVolumeRequest {
  /**
   * @schema OpsWorksUnassignVolumeRequest#VolumeId
   */
  readonly volumeId: string;

}

/**
 * @schema OpsWorksUntagResourceRequest
 */
export interface OpsWorksUntagResourceRequest {
  /**
   * @schema OpsWorksUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema OpsWorksUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema OpsWorksUpdateAppRequest
 */
export interface OpsWorksUpdateAppRequest {
  /**
   * @schema OpsWorksUpdateAppRequest#AppId
   */
  readonly appId: string;

  /**
   * @schema OpsWorksUpdateAppRequest#Name
   */
  readonly name?: string;

  /**
   * @schema OpsWorksUpdateAppRequest#Description
   */
  readonly description?: string;

  /**
   * @schema OpsWorksUpdateAppRequest#DataSources
   */
  readonly dataSources?: OpsWorksDataSource[];

  /**
   * @schema OpsWorksUpdateAppRequest#Type
   */
  readonly type?: string;

  /**
   * @schema OpsWorksUpdateAppRequest#AppSource
   */
  readonly appSource?: OpsWorksSource;

  /**
   * @schema OpsWorksUpdateAppRequest#Domains
   */
  readonly domains?: string[];

  /**
   * @schema OpsWorksUpdateAppRequest#EnableSsl
   */
  readonly enableSsl?: boolean;

  /**
   * @schema OpsWorksUpdateAppRequest#SslConfiguration
   */
  readonly sslConfiguration?: OpsWorksSslConfiguration;

  /**
   * @schema OpsWorksUpdateAppRequest#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema OpsWorksUpdateAppRequest#Environment
   */
  readonly environment?: OpsWorksEnvironmentVariable[];

}

/**
 * @schema OpsWorksUpdateElasticIpRequest
 */
export interface OpsWorksUpdateElasticIpRequest {
  /**
   * @schema OpsWorksUpdateElasticIpRequest#ElasticIp
   */
  readonly elasticIp: string;

  /**
   * @schema OpsWorksUpdateElasticIpRequest#Name
   */
  readonly name?: string;

}

/**
 * @schema OpsWorksUpdateInstanceRequest
 */
export interface OpsWorksUpdateInstanceRequest {
  /**
   * @schema OpsWorksUpdateInstanceRequest#InstanceId
   */
  readonly instanceId: string;

  /**
   * @schema OpsWorksUpdateInstanceRequest#LayerIds
   */
  readonly layerIds?: string[];

  /**
   * @schema OpsWorksUpdateInstanceRequest#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema OpsWorksUpdateInstanceRequest#AutoScalingType
   */
  readonly autoScalingType?: string;

  /**
   * @schema OpsWorksUpdateInstanceRequest#Hostname
   */
  readonly hostname?: string;

  /**
   * @schema OpsWorksUpdateInstanceRequest#Os
   */
  readonly os?: string;

  /**
   * @schema OpsWorksUpdateInstanceRequest#AmiId
   */
  readonly amiId?: string;

  /**
   * @schema OpsWorksUpdateInstanceRequest#SshKeyName
   */
  readonly sshKeyName?: string;

  /**
   * @schema OpsWorksUpdateInstanceRequest#Architecture
   */
  readonly architecture?: string;

  /**
   * @schema OpsWorksUpdateInstanceRequest#InstallUpdatesOnBoot
   */
  readonly installUpdatesOnBoot?: boolean;

  /**
   * @schema OpsWorksUpdateInstanceRequest#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema OpsWorksUpdateInstanceRequest#AgentVersion
   */
  readonly agentVersion?: string;

}

/**
 * @schema OpsWorksUpdateLayerRequest
 */
export interface OpsWorksUpdateLayerRequest {
  /**
   * @schema OpsWorksUpdateLayerRequest#LayerId
   */
  readonly layerId: string;

  /**
   * @schema OpsWorksUpdateLayerRequest#Name
   */
  readonly name?: string;

  /**
   * @schema OpsWorksUpdateLayerRequest#Shortname
   */
  readonly shortname?: string;

  /**
   * @schema OpsWorksUpdateLayerRequest#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema OpsWorksUpdateLayerRequest#CloudWatchLogsConfiguration
   */
  readonly cloudWatchLogsConfiguration?: OpsWorksCloudWatchLogsConfiguration;

  /**
   * @schema OpsWorksUpdateLayerRequest#CustomInstanceProfileArn
   */
  readonly customInstanceProfileArn?: string;

  /**
   * @schema OpsWorksUpdateLayerRequest#CustomJson
   */
  readonly customJson?: string;

  /**
   * @schema OpsWorksUpdateLayerRequest#CustomSecurityGroupIds
   */
  readonly customSecurityGroupIds?: string[];

  /**
   * @schema OpsWorksUpdateLayerRequest#Packages
   */
  readonly packages?: string[];

  /**
   * @schema OpsWorksUpdateLayerRequest#VolumeConfigurations
   */
  readonly volumeConfigurations?: OpsWorksVolumeConfiguration[];

  /**
   * @schema OpsWorksUpdateLayerRequest#EnableAutoHealing
   */
  readonly enableAutoHealing?: boolean;

  /**
   * @schema OpsWorksUpdateLayerRequest#AutoAssignElasticIps
   */
  readonly autoAssignElasticIps?: boolean;

  /**
   * @schema OpsWorksUpdateLayerRequest#AutoAssignPublicIps
   */
  readonly autoAssignPublicIps?: boolean;

  /**
   * @schema OpsWorksUpdateLayerRequest#CustomRecipes
   */
  readonly customRecipes?: OpsWorksRecipes;

  /**
   * @schema OpsWorksUpdateLayerRequest#InstallUpdatesOnBoot
   */
  readonly installUpdatesOnBoot?: boolean;

  /**
   * @schema OpsWorksUpdateLayerRequest#UseEbsOptimizedInstances
   */
  readonly useEbsOptimizedInstances?: boolean;

  /**
   * @schema OpsWorksUpdateLayerRequest#LifecycleEventConfiguration
   */
  readonly lifecycleEventConfiguration?: OpsWorksLifecycleEventConfiguration;

}

/**
 * @schema OpsWorksUpdateMyUserProfileRequest
 */
export interface OpsWorksUpdateMyUserProfileRequest {
  /**
   * @schema OpsWorksUpdateMyUserProfileRequest#SshPublicKey
   */
  readonly sshPublicKey?: string;

}

/**
 * @schema OpsWorksUpdateRdsDbInstanceRequest
 */
export interface OpsWorksUpdateRdsDbInstanceRequest {
  /**
   * @schema OpsWorksUpdateRdsDbInstanceRequest#RdsDbInstanceArn
   */
  readonly rdsDbInstanceArn: string;

  /**
   * @schema OpsWorksUpdateRdsDbInstanceRequest#DbUser
   */
  readonly dbUser?: string;

  /**
   * @schema OpsWorksUpdateRdsDbInstanceRequest#DbPassword
   */
  readonly dbPassword?: string;

}

/**
 * @schema OpsWorksUpdateStackRequest
 */
export interface OpsWorksUpdateStackRequest {
  /**
   * @schema OpsWorksUpdateStackRequest#StackId
   */
  readonly stackId: string;

  /**
   * @schema OpsWorksUpdateStackRequest#Name
   */
  readonly name?: string;

  /**
   * @schema OpsWorksUpdateStackRequest#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema OpsWorksUpdateStackRequest#ServiceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema OpsWorksUpdateStackRequest#DefaultInstanceProfileArn
   */
  readonly defaultInstanceProfileArn?: string;

  /**
   * @schema OpsWorksUpdateStackRequest#DefaultOs
   */
  readonly defaultOs?: string;

  /**
   * @schema OpsWorksUpdateStackRequest#HostnameTheme
   */
  readonly hostnameTheme?: string;

  /**
   * @schema OpsWorksUpdateStackRequest#DefaultAvailabilityZone
   */
  readonly defaultAvailabilityZone?: string;

  /**
   * @schema OpsWorksUpdateStackRequest#DefaultSubnetId
   */
  readonly defaultSubnetId?: string;

  /**
   * @schema OpsWorksUpdateStackRequest#CustomJson
   */
  readonly customJson?: string;

  /**
   * @schema OpsWorksUpdateStackRequest#ConfigurationManager
   */
  readonly configurationManager?: OpsWorksStackConfigurationManager;

  /**
   * @schema OpsWorksUpdateStackRequest#ChefConfiguration
   */
  readonly chefConfiguration?: OpsWorksChefConfiguration;

  /**
   * @schema OpsWorksUpdateStackRequest#UseCustomCookbooks
   */
  readonly useCustomCookbooks?: boolean;

  /**
   * @schema OpsWorksUpdateStackRequest#CustomCookbooksSource
   */
  readonly customCookbooksSource?: OpsWorksSource;

  /**
   * @schema OpsWorksUpdateStackRequest#DefaultSshKeyName
   */
  readonly defaultSshKeyName?: string;

  /**
   * @schema OpsWorksUpdateStackRequest#DefaultRootDeviceType
   */
  readonly defaultRootDeviceType?: string;

  /**
   * @schema OpsWorksUpdateStackRequest#UseOpsworksSecurityGroups
   */
  readonly useOpsworksSecurityGroups?: boolean;

  /**
   * @schema OpsWorksUpdateStackRequest#AgentVersion
   */
  readonly agentVersion?: string;

}

/**
 * @schema OpsWorksUpdateUserProfileRequest
 */
export interface OpsWorksUpdateUserProfileRequest {
  /**
   * @schema OpsWorksUpdateUserProfileRequest#IamUserArn
   */
  readonly iamUserArn: string;

  /**
   * @schema OpsWorksUpdateUserProfileRequest#SshUsername
   */
  readonly sshUsername?: string;

  /**
   * @schema OpsWorksUpdateUserProfileRequest#SshPublicKey
   */
  readonly sshPublicKey?: string;

  /**
   * @schema OpsWorksUpdateUserProfileRequest#AllowSelfManagement
   */
  readonly allowSelfManagement?: boolean;

}

/**
 * @schema OpsWorksUpdateVolumeRequest
 */
export interface OpsWorksUpdateVolumeRequest {
  /**
   * @schema OpsWorksUpdateVolumeRequest#VolumeId
   */
  readonly volumeId: string;

  /**
   * @schema OpsWorksUpdateVolumeRequest#Name
   */
  readonly name?: string;

  /**
   * @schema OpsWorksUpdateVolumeRequest#MountPoint
   */
  readonly mountPoint?: string;

}

/**
 * @schema OpsWorksStackConfigurationManager
 */
export interface OpsWorksStackConfigurationManager {
  /**
   * @schema OpsWorksStackConfigurationManager#Name
   */
  readonly name?: string;

  /**
   * @schema OpsWorksStackConfigurationManager#Version
   */
  readonly version?: string;

}

/**
 * @schema OpsWorksChefConfiguration
 */
export interface OpsWorksChefConfiguration {
  /**
   * @schema OpsWorksChefConfiguration#ManageBerkshelf
   */
  readonly manageBerkshelf?: boolean;

  /**
   * @schema OpsWorksChefConfiguration#BerkshelfVersion
   */
  readonly berkshelfVersion?: string;

}

/**
 * @schema OpsWorksSource
 */
export interface OpsWorksSource {
  /**
   * @schema OpsWorksSource#Type
   */
  readonly type?: string;

  /**
   * @schema OpsWorksSource#Url
   */
  readonly url?: string;

  /**
   * @schema OpsWorksSource#Username
   */
  readonly username?: string;

  /**
   * @schema OpsWorksSource#Password
   */
  readonly password?: string;

  /**
   * @schema OpsWorksSource#SshKey
   */
  readonly sshKey?: string;

  /**
   * @schema OpsWorksSource#Revision
   */
  readonly revision?: string;

}

/**
 * @schema OpsWorksDataSource
 */
export interface OpsWorksDataSource {
  /**
   * @schema OpsWorksDataSource#Type
   */
  readonly type?: string;

  /**
   * @schema OpsWorksDataSource#Arn
   */
  readonly arn?: string;

  /**
   * @schema OpsWorksDataSource#DatabaseName
   */
  readonly databaseName?: string;

}

/**
 * @schema OpsWorksSslConfiguration
 */
export interface OpsWorksSslConfiguration {
  /**
   * @schema OpsWorksSslConfiguration#Certificate
   */
  readonly certificate: string;

  /**
   * @schema OpsWorksSslConfiguration#PrivateKey
   */
  readonly privateKey: string;

  /**
   * @schema OpsWorksSslConfiguration#Chain
   */
  readonly chain?: string;

}

/**
 * @schema OpsWorksEnvironmentVariable
 */
export interface OpsWorksEnvironmentVariable {
  /**
   * @schema OpsWorksEnvironmentVariable#Key
   */
  readonly key: string;

  /**
   * @schema OpsWorksEnvironmentVariable#Value
   */
  readonly value: string;

  /**
   * @schema OpsWorksEnvironmentVariable#Secure
   */
  readonly secure?: boolean;

}

/**
 * @schema OpsWorksDeploymentCommand
 */
export interface OpsWorksDeploymentCommand {
  /**
   * @schema OpsWorksDeploymentCommand#Name
   */
  readonly name: string;

  /**
   * @schema OpsWorksDeploymentCommand#Args
   */
  readonly args?: { [key: string]: string[] };

}

/**
 * @schema OpsWorksBlockDeviceMapping
 */
export interface OpsWorksBlockDeviceMapping {
  /**
   * @schema OpsWorksBlockDeviceMapping#DeviceName
   */
  readonly deviceName?: string;

  /**
   * @schema OpsWorksBlockDeviceMapping#NoDevice
   */
  readonly noDevice?: string;

  /**
   * @schema OpsWorksBlockDeviceMapping#VirtualName
   */
  readonly virtualName?: string;

  /**
   * @schema OpsWorksBlockDeviceMapping#Ebs
   */
  readonly ebs?: OpsWorksEbsBlockDevice;

}

/**
 * @schema OpsWorksCloudWatchLogsConfiguration
 */
export interface OpsWorksCloudWatchLogsConfiguration {
  /**
   * @schema OpsWorksCloudWatchLogsConfiguration#Enabled
   */
  readonly enabled?: boolean;

  /**
   * @schema OpsWorksCloudWatchLogsConfiguration#LogStreams
   */
  readonly logStreams?: OpsWorksCloudWatchLogsLogStream[];

}

/**
 * @schema OpsWorksVolumeConfiguration
 */
export interface OpsWorksVolumeConfiguration {
  /**
   * @schema OpsWorksVolumeConfiguration#MountPoint
   */
  readonly mountPoint: string;

  /**
   * @schema OpsWorksVolumeConfiguration#RaidLevel
   */
  readonly raidLevel?: number;

  /**
   * @schema OpsWorksVolumeConfiguration#NumberOfDisks
   */
  readonly numberOfDisks: number;

  /**
   * @schema OpsWorksVolumeConfiguration#Size
   */
  readonly size: number;

  /**
   * @schema OpsWorksVolumeConfiguration#VolumeType
   */
  readonly volumeType?: string;

  /**
   * @schema OpsWorksVolumeConfiguration#Iops
   */
  readonly iops?: number;

  /**
   * @schema OpsWorksVolumeConfiguration#Encrypted
   */
  readonly encrypted?: boolean;

}

/**
 * @schema OpsWorksRecipes
 */
export interface OpsWorksRecipes {
  /**
   * @schema OpsWorksRecipes#Setup
   */
  readonly setup?: string[];

  /**
   * @schema OpsWorksRecipes#Configure
   */
  readonly configure?: string[];

  /**
   * @schema OpsWorksRecipes#Deploy
   */
  readonly deploy?: string[];

  /**
   * @schema OpsWorksRecipes#Undeploy
   */
  readonly undeploy?: string[];

  /**
   * @schema OpsWorksRecipes#Shutdown
   */
  readonly shutdown?: string[];

}

/**
 * @schema OpsWorksLifecycleEventConfiguration
 */
export interface OpsWorksLifecycleEventConfiguration {
  /**
   * @schema OpsWorksLifecycleEventConfiguration#Shutdown
   */
  readonly shutdown?: OpsWorksShutdownEventConfiguration;

}

/**
 * @schema OpsWorksAgentVersion
 */
export interface OpsWorksAgentVersion {
  /**
   * @schema OpsWorksAgentVersion#Version
   */
  readonly version?: string;

  /**
   * @schema OpsWorksAgentVersion#ConfigurationManager
   */
  readonly configurationManager?: OpsWorksStackConfigurationManager;

}

/**
 * @schema OpsWorksApp
 */
export interface OpsWorksApp {
  /**
   * @schema OpsWorksApp#AppId
   */
  readonly appId?: string;

  /**
   * @schema OpsWorksApp#StackId
   */
  readonly stackId?: string;

  /**
   * @schema OpsWorksApp#Shortname
   */
  readonly shortname?: string;

  /**
   * @schema OpsWorksApp#Name
   */
  readonly name?: string;

  /**
   * @schema OpsWorksApp#Description
   */
  readonly description?: string;

  /**
   * @schema OpsWorksApp#DataSources
   */
  readonly dataSources?: OpsWorksDataSource[];

  /**
   * @schema OpsWorksApp#Type
   */
  readonly type?: string;

  /**
   * @schema OpsWorksApp#AppSource
   */
  readonly appSource?: OpsWorksSource;

  /**
   * @schema OpsWorksApp#Domains
   */
  readonly domains?: string[];

  /**
   * @schema OpsWorksApp#EnableSsl
   */
  readonly enableSsl?: boolean;

  /**
   * @schema OpsWorksApp#SslConfiguration
   */
  readonly sslConfiguration?: OpsWorksSslConfiguration;

  /**
   * @schema OpsWorksApp#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema OpsWorksApp#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema OpsWorksApp#Environment
   */
  readonly environment?: OpsWorksEnvironmentVariable[];

}

/**
 * @schema OpsWorksCommand
 */
export interface OpsWorksCommand {
  /**
   * @schema OpsWorksCommand#CommandId
   */
  readonly commandId?: string;

  /**
   * @schema OpsWorksCommand#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema OpsWorksCommand#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema OpsWorksCommand#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema OpsWorksCommand#AcknowledgedAt
   */
  readonly acknowledgedAt?: string;

  /**
   * @schema OpsWorksCommand#CompletedAt
   */
  readonly completedAt?: string;

  /**
   * @schema OpsWorksCommand#Status
   */
  readonly status?: string;

  /**
   * @schema OpsWorksCommand#ExitCode
   */
  readonly exitCode?: number;

  /**
   * @schema OpsWorksCommand#LogUrl
   */
  readonly logUrl?: string;

  /**
   * @schema OpsWorksCommand#Type
   */
  readonly type?: string;

}

/**
 * @schema OpsWorksDeployment
 */
export interface OpsWorksDeployment {
  /**
   * @schema OpsWorksDeployment#DeploymentId
   */
  readonly deploymentId?: string;

  /**
   * @schema OpsWorksDeployment#StackId
   */
  readonly stackId?: string;

  /**
   * @schema OpsWorksDeployment#AppId
   */
  readonly appId?: string;

  /**
   * @schema OpsWorksDeployment#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema OpsWorksDeployment#CompletedAt
   */
  readonly completedAt?: string;

  /**
   * @schema OpsWorksDeployment#Duration
   */
  readonly duration?: number;

  /**
   * @schema OpsWorksDeployment#IamUserArn
   */
  readonly iamUserArn?: string;

  /**
   * @schema OpsWorksDeployment#Comment
   */
  readonly comment?: string;

  /**
   * @schema OpsWorksDeployment#Command
   */
  readonly command?: OpsWorksDeploymentCommand;

  /**
   * @schema OpsWorksDeployment#Status
   */
  readonly status?: string;

  /**
   * @schema OpsWorksDeployment#CustomJson
   */
  readonly customJson?: string;

  /**
   * @schema OpsWorksDeployment#InstanceIds
   */
  readonly instanceIds?: string[];

}

/**
 * @schema OpsWorksEcsCluster
 */
export interface OpsWorksEcsCluster {
  /**
   * @schema OpsWorksEcsCluster#EcsClusterArn
   */
  readonly ecsClusterArn?: string;

  /**
   * @schema OpsWorksEcsCluster#EcsClusterName
   */
  readonly ecsClusterName?: string;

  /**
   * @schema OpsWorksEcsCluster#StackId
   */
  readonly stackId?: string;

  /**
   * @schema OpsWorksEcsCluster#RegisteredAt
   */
  readonly registeredAt?: string;

}

/**
 * @schema OpsWorksElasticIp
 */
export interface OpsWorksElasticIp {
  /**
   * @schema OpsWorksElasticIp#Ip
   */
  readonly ip?: string;

  /**
   * @schema OpsWorksElasticIp#Name
   */
  readonly name?: string;

  /**
   * @schema OpsWorksElasticIp#Domain
   */
  readonly domain?: string;

  /**
   * @schema OpsWorksElasticIp#Region
   */
  readonly region?: string;

  /**
   * @schema OpsWorksElasticIp#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * @schema OpsWorksElasticLoadBalancer
 */
export interface OpsWorksElasticLoadBalancer {
  /**
   * @schema OpsWorksElasticLoadBalancer#ElasticLoadBalancerName
   */
  readonly elasticLoadBalancerName?: string;

  /**
   * @schema OpsWorksElasticLoadBalancer#Region
   */
  readonly region?: string;

  /**
   * @schema OpsWorksElasticLoadBalancer#DnsName
   */
  readonly dnsName?: string;

  /**
   * @schema OpsWorksElasticLoadBalancer#StackId
   */
  readonly stackId?: string;

  /**
   * @schema OpsWorksElasticLoadBalancer#LayerId
   */
  readonly layerId?: string;

  /**
   * @schema OpsWorksElasticLoadBalancer#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema OpsWorksElasticLoadBalancer#AvailabilityZones
   */
  readonly availabilityZones?: string[];

  /**
   * @schema OpsWorksElasticLoadBalancer#SubnetIds
   */
  readonly subnetIds?: string[];

  /**
   * @schema OpsWorksElasticLoadBalancer#Ec2InstanceIds
   */
  readonly ec2InstanceIds?: string[];

}

/**
 * @schema OpsWorksInstance
 */
export interface OpsWorksInstance {
  /**
   * @schema OpsWorksInstance#AgentVersion
   */
  readonly agentVersion?: string;

  /**
   * @schema OpsWorksInstance#AmiId
   */
  readonly amiId?: string;

  /**
   * @schema OpsWorksInstance#Architecture
   */
  readonly architecture?: string;

  /**
   * @schema OpsWorksInstance#Arn
   */
  readonly arn?: string;

  /**
   * @schema OpsWorksInstance#AutoScalingType
   */
  readonly autoScalingType?: string;

  /**
   * @schema OpsWorksInstance#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema OpsWorksInstance#BlockDeviceMappings
   */
  readonly blockDeviceMappings?: OpsWorksBlockDeviceMapping[];

  /**
   * @schema OpsWorksInstance#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema OpsWorksInstance#EbsOptimized
   */
  readonly ebsOptimized?: boolean;

  /**
   * @schema OpsWorksInstance#Ec2InstanceId
   */
  readonly ec2InstanceId?: string;

  /**
   * @schema OpsWorksInstance#EcsClusterArn
   */
  readonly ecsClusterArn?: string;

  /**
   * @schema OpsWorksInstance#EcsContainerInstanceArn
   */
  readonly ecsContainerInstanceArn?: string;

  /**
   * @schema OpsWorksInstance#ElasticIp
   */
  readonly elasticIp?: string;

  /**
   * @schema OpsWorksInstance#Hostname
   */
  readonly hostname?: string;

  /**
   * @schema OpsWorksInstance#InfrastructureClass
   */
  readonly infrastructureClass?: string;

  /**
   * @schema OpsWorksInstance#InstallUpdatesOnBoot
   */
  readonly installUpdatesOnBoot?: boolean;

  /**
   * @schema OpsWorksInstance#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema OpsWorksInstance#InstanceProfileArn
   */
  readonly instanceProfileArn?: string;

  /**
   * @schema OpsWorksInstance#InstanceType
   */
  readonly instanceType?: string;

  /**
   * @schema OpsWorksInstance#LastServiceErrorId
   */
  readonly lastServiceErrorId?: string;

  /**
   * @schema OpsWorksInstance#LayerIds
   */
  readonly layerIds?: string[];

  /**
   * @schema OpsWorksInstance#Os
   */
  readonly os?: string;

  /**
   * @schema OpsWorksInstance#Platform
   */
  readonly platform?: string;

  /**
   * @schema OpsWorksInstance#PrivateDns
   */
  readonly privateDns?: string;

  /**
   * @schema OpsWorksInstance#PrivateIp
   */
  readonly privateIp?: string;

  /**
   * @schema OpsWorksInstance#PublicDns
   */
  readonly publicDns?: string;

  /**
   * @schema OpsWorksInstance#PublicIp
   */
  readonly publicIp?: string;

  /**
   * @schema OpsWorksInstance#RegisteredBy
   */
  readonly registeredBy?: string;

  /**
   * @schema OpsWorksInstance#ReportedAgentVersion
   */
  readonly reportedAgentVersion?: string;

  /**
   * @schema OpsWorksInstance#ReportedOs
   */
  readonly reportedOs?: OpsWorksReportedOs;

  /**
   * @schema OpsWorksInstance#RootDeviceType
   */
  readonly rootDeviceType?: string;

  /**
   * @schema OpsWorksInstance#RootDeviceVolumeId
   */
  readonly rootDeviceVolumeId?: string;

  /**
   * @schema OpsWorksInstance#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema OpsWorksInstance#SshHostDsaKeyFingerprint
   */
  readonly sshHostDsaKeyFingerprint?: string;

  /**
   * @schema OpsWorksInstance#SshHostRsaKeyFingerprint
   */
  readonly sshHostRsaKeyFingerprint?: string;

  /**
   * @schema OpsWorksInstance#SshKeyName
   */
  readonly sshKeyName?: string;

  /**
   * @schema OpsWorksInstance#StackId
   */
  readonly stackId?: string;

  /**
   * @schema OpsWorksInstance#Status
   */
  readonly status?: string;

  /**
   * @schema OpsWorksInstance#SubnetId
   */
  readonly subnetId?: string;

  /**
   * @schema OpsWorksInstance#Tenancy
   */
  readonly tenancy?: string;

  /**
   * @schema OpsWorksInstance#VirtualizationType
   */
  readonly virtualizationType?: string;

}

/**
 * @schema OpsWorksLayer
 */
export interface OpsWorksLayer {
  /**
   * @schema OpsWorksLayer#Arn
   */
  readonly arn?: string;

  /**
   * @schema OpsWorksLayer#StackId
   */
  readonly stackId?: string;

  /**
   * @schema OpsWorksLayer#LayerId
   */
  readonly layerId?: string;

  /**
   * @schema OpsWorksLayer#Type
   */
  readonly type?: string;

  /**
   * @schema OpsWorksLayer#Name
   */
  readonly name?: string;

  /**
   * @schema OpsWorksLayer#Shortname
   */
  readonly shortname?: string;

  /**
   * @schema OpsWorksLayer#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema OpsWorksLayer#CloudWatchLogsConfiguration
   */
  readonly cloudWatchLogsConfiguration?: OpsWorksCloudWatchLogsConfiguration;

  /**
   * @schema OpsWorksLayer#CustomInstanceProfileArn
   */
  readonly customInstanceProfileArn?: string;

  /**
   * @schema OpsWorksLayer#CustomJson
   */
  readonly customJson?: string;

  /**
   * @schema OpsWorksLayer#CustomSecurityGroupIds
   */
  readonly customSecurityGroupIds?: string[];

  /**
   * @schema OpsWorksLayer#DefaultSecurityGroupNames
   */
  readonly defaultSecurityGroupNames?: string[];

  /**
   * @schema OpsWorksLayer#Packages
   */
  readonly packages?: string[];

  /**
   * @schema OpsWorksLayer#VolumeConfigurations
   */
  readonly volumeConfigurations?: OpsWorksVolumeConfiguration[];

  /**
   * @schema OpsWorksLayer#EnableAutoHealing
   */
  readonly enableAutoHealing?: boolean;

  /**
   * @schema OpsWorksLayer#AutoAssignElasticIps
   */
  readonly autoAssignElasticIps?: boolean;

  /**
   * @schema OpsWorksLayer#AutoAssignPublicIps
   */
  readonly autoAssignPublicIps?: boolean;

  /**
   * @schema OpsWorksLayer#DefaultRecipes
   */
  readonly defaultRecipes?: OpsWorksRecipes;

  /**
   * @schema OpsWorksLayer#CustomRecipes
   */
  readonly customRecipes?: OpsWorksRecipes;

  /**
   * @schema OpsWorksLayer#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema OpsWorksLayer#InstallUpdatesOnBoot
   */
  readonly installUpdatesOnBoot?: boolean;

  /**
   * @schema OpsWorksLayer#UseEbsOptimizedInstances
   */
  readonly useEbsOptimizedInstances?: boolean;

  /**
   * @schema OpsWorksLayer#LifecycleEventConfiguration
   */
  readonly lifecycleEventConfiguration?: OpsWorksLifecycleEventConfiguration;

}

/**
 * @schema OpsWorksLoadBasedAutoScalingConfiguration
 */
export interface OpsWorksLoadBasedAutoScalingConfiguration {
  /**
   * @schema OpsWorksLoadBasedAutoScalingConfiguration#LayerId
   */
  readonly layerId?: string;

  /**
   * @schema OpsWorksLoadBasedAutoScalingConfiguration#Enable
   */
  readonly enable?: boolean;

  /**
   * @schema OpsWorksLoadBasedAutoScalingConfiguration#UpScaling
   */
  readonly upScaling?: OpsWorksAutoScalingThresholds;

  /**
   * @schema OpsWorksLoadBasedAutoScalingConfiguration#DownScaling
   */
  readonly downScaling?: OpsWorksAutoScalingThresholds;

}

/**
 * @schema OpsWorksSelfUserProfile
 */
export interface OpsWorksSelfUserProfile {
  /**
   * @schema OpsWorksSelfUserProfile#IamUserArn
   */
  readonly iamUserArn?: string;

  /**
   * @schema OpsWorksSelfUserProfile#Name
   */
  readonly name?: string;

  /**
   * @schema OpsWorksSelfUserProfile#SshUsername
   */
  readonly sshUsername?: string;

  /**
   * @schema OpsWorksSelfUserProfile#SshPublicKey
   */
  readonly sshPublicKey?: string;

}

/**
 * @schema OpsWorksOperatingSystem
 */
export interface OpsWorksOperatingSystem {
  /**
   * @schema OpsWorksOperatingSystem#Name
   */
  readonly name?: string;

  /**
   * @schema OpsWorksOperatingSystem#Id
   */
  readonly id?: string;

  /**
   * @schema OpsWorksOperatingSystem#Type
   */
  readonly type?: string;

  /**
   * @schema OpsWorksOperatingSystem#ConfigurationManagers
   */
  readonly configurationManagers?: OpsWorksOperatingSystemConfigurationManager[];

  /**
   * @schema OpsWorksOperatingSystem#ReportedName
   */
  readonly reportedName?: string;

  /**
   * @schema OpsWorksOperatingSystem#ReportedVersion
   */
  readonly reportedVersion?: string;

  /**
   * @schema OpsWorksOperatingSystem#Supported
   */
  readonly supported?: boolean;

}

/**
 * @schema OpsWorksPermission
 */
export interface OpsWorksPermission {
  /**
   * @schema OpsWorksPermission#StackId
   */
  readonly stackId?: string;

  /**
   * @schema OpsWorksPermission#IamUserArn
   */
  readonly iamUserArn?: string;

  /**
   * @schema OpsWorksPermission#AllowSsh
   */
  readonly allowSsh?: boolean;

  /**
   * @schema OpsWorksPermission#AllowSudo
   */
  readonly allowSudo?: boolean;

  /**
   * @schema OpsWorksPermission#Level
   */
  readonly level?: string;

}

/**
 * @schema OpsWorksRaidArray
 */
export interface OpsWorksRaidArray {
  /**
   * @schema OpsWorksRaidArray#RaidArrayId
   */
  readonly raidArrayId?: string;

  /**
   * @schema OpsWorksRaidArray#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema OpsWorksRaidArray#Name
   */
  readonly name?: string;

  /**
   * @schema OpsWorksRaidArray#RaidLevel
   */
  readonly raidLevel?: number;

  /**
   * @schema OpsWorksRaidArray#NumberOfDisks
   */
  readonly numberOfDisks?: number;

  /**
   * @schema OpsWorksRaidArray#Size
   */
  readonly size?: number;

  /**
   * @schema OpsWorksRaidArray#Device
   */
  readonly device?: string;

  /**
   * @schema OpsWorksRaidArray#MountPoint
   */
  readonly mountPoint?: string;

  /**
   * @schema OpsWorksRaidArray#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema OpsWorksRaidArray#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema OpsWorksRaidArray#StackId
   */
  readonly stackId?: string;

  /**
   * @schema OpsWorksRaidArray#VolumeType
   */
  readonly volumeType?: string;

  /**
   * @schema OpsWorksRaidArray#Iops
   */
  readonly iops?: number;

}

/**
 * @schema OpsWorksRdsDbInstance
 */
export interface OpsWorksRdsDbInstance {
  /**
   * @schema OpsWorksRdsDbInstance#RdsDbInstanceArn
   */
  readonly rdsDbInstanceArn?: string;

  /**
   * @schema OpsWorksRdsDbInstance#DbInstanceIdentifier
   */
  readonly dbInstanceIdentifier?: string;

  /**
   * @schema OpsWorksRdsDbInstance#DbUser
   */
  readonly dbUser?: string;

  /**
   * @schema OpsWorksRdsDbInstance#DbPassword
   */
  readonly dbPassword?: string;

  /**
   * @schema OpsWorksRdsDbInstance#Region
   */
  readonly region?: string;

  /**
   * @schema OpsWorksRdsDbInstance#Address
   */
  readonly address?: string;

  /**
   * @schema OpsWorksRdsDbInstance#Engine
   */
  readonly engine?: string;

  /**
   * @schema OpsWorksRdsDbInstance#StackId
   */
  readonly stackId?: string;

  /**
   * @schema OpsWorksRdsDbInstance#MissingOnRds
   */
  readonly missingOnRds?: boolean;

}

/**
 * @schema OpsWorksServiceError
 */
export interface OpsWorksServiceError {
  /**
   * @schema OpsWorksServiceError#ServiceErrorId
   */
  readonly serviceErrorId?: string;

  /**
   * @schema OpsWorksServiceError#StackId
   */
  readonly stackId?: string;

  /**
   * @schema OpsWorksServiceError#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema OpsWorksServiceError#Type
   */
  readonly type?: string;

  /**
   * @schema OpsWorksServiceError#Message
   */
  readonly message?: string;

  /**
   * @schema OpsWorksServiceError#CreatedAt
   */
  readonly createdAt?: string;

}

/**
 * @schema OpsWorksStackSummary
 */
export interface OpsWorksStackSummary {
  /**
   * @schema OpsWorksStackSummary#StackId
   */
  readonly stackId?: string;

  /**
   * @schema OpsWorksStackSummary#Name
   */
  readonly name?: string;

  /**
   * @schema OpsWorksStackSummary#Arn
   */
  readonly arn?: string;

  /**
   * @schema OpsWorksStackSummary#LayersCount
   */
  readonly layersCount?: number;

  /**
   * @schema OpsWorksStackSummary#AppsCount
   */
  readonly appsCount?: number;

  /**
   * @schema OpsWorksStackSummary#InstancesCount
   */
  readonly instancesCount?: OpsWorksInstancesCount;

}

/**
 * @schema OpsWorksStack
 */
export interface OpsWorksStack {
  /**
   * @schema OpsWorksStack#StackId
   */
  readonly stackId?: string;

  /**
   * @schema OpsWorksStack#Name
   */
  readonly name?: string;

  /**
   * @schema OpsWorksStack#Arn
   */
  readonly arn?: string;

  /**
   * @schema OpsWorksStack#Region
   */
  readonly region?: string;

  /**
   * @schema OpsWorksStack#VpcId
   */
  readonly vpcId?: string;

  /**
   * @schema OpsWorksStack#Attributes
   */
  readonly attributes?: { [key: string]: string };

  /**
   * @schema OpsWorksStack#ServiceRoleArn
   */
  readonly serviceRoleArn?: string;

  /**
   * @schema OpsWorksStack#DefaultInstanceProfileArn
   */
  readonly defaultInstanceProfileArn?: string;

  /**
   * @schema OpsWorksStack#DefaultOs
   */
  readonly defaultOs?: string;

  /**
   * @schema OpsWorksStack#HostnameTheme
   */
  readonly hostnameTheme?: string;

  /**
   * @schema OpsWorksStack#DefaultAvailabilityZone
   */
  readonly defaultAvailabilityZone?: string;

  /**
   * @schema OpsWorksStack#DefaultSubnetId
   */
  readonly defaultSubnetId?: string;

  /**
   * @schema OpsWorksStack#CustomJson
   */
  readonly customJson?: string;

  /**
   * @schema OpsWorksStack#ConfigurationManager
   */
  readonly configurationManager?: OpsWorksStackConfigurationManager;

  /**
   * @schema OpsWorksStack#ChefConfiguration
   */
  readonly chefConfiguration?: OpsWorksChefConfiguration;

  /**
   * @schema OpsWorksStack#UseCustomCookbooks
   */
  readonly useCustomCookbooks?: boolean;

  /**
   * @schema OpsWorksStack#UseOpsworksSecurityGroups
   */
  readonly useOpsworksSecurityGroups?: boolean;

  /**
   * @schema OpsWorksStack#CustomCookbooksSource
   */
  readonly customCookbooksSource?: OpsWorksSource;

  /**
   * @schema OpsWorksStack#DefaultSshKeyName
   */
  readonly defaultSshKeyName?: string;

  /**
   * @schema OpsWorksStack#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema OpsWorksStack#DefaultRootDeviceType
   */
  readonly defaultRootDeviceType?: string;

  /**
   * @schema OpsWorksStack#AgentVersion
   */
  readonly agentVersion?: string;

}

/**
 * @schema OpsWorksTimeBasedAutoScalingConfiguration
 */
export interface OpsWorksTimeBasedAutoScalingConfiguration {
  /**
   * @schema OpsWorksTimeBasedAutoScalingConfiguration#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema OpsWorksTimeBasedAutoScalingConfiguration#AutoScalingSchedule
   */
  readonly autoScalingSchedule?: OpsWorksWeeklyAutoScalingSchedule;

}

/**
 * @schema OpsWorksUserProfile
 */
export interface OpsWorksUserProfile {
  /**
   * @schema OpsWorksUserProfile#IamUserArn
   */
  readonly iamUserArn?: string;

  /**
   * @schema OpsWorksUserProfile#Name
   */
  readonly name?: string;

  /**
   * @schema OpsWorksUserProfile#SshUsername
   */
  readonly sshUsername?: string;

  /**
   * @schema OpsWorksUserProfile#SshPublicKey
   */
  readonly sshPublicKey?: string;

  /**
   * @schema OpsWorksUserProfile#AllowSelfManagement
   */
  readonly allowSelfManagement?: boolean;

}

/**
 * @schema OpsWorksVolume
 */
export interface OpsWorksVolume {
  /**
   * @schema OpsWorksVolume#VolumeId
   */
  readonly volumeId?: string;

  /**
   * @schema OpsWorksVolume#Ec2VolumeId
   */
  readonly ec2VolumeId?: string;

  /**
   * @schema OpsWorksVolume#Name
   */
  readonly name?: string;

  /**
   * @schema OpsWorksVolume#RaidArrayId
   */
  readonly raidArrayId?: string;

  /**
   * @schema OpsWorksVolume#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema OpsWorksVolume#Status
   */
  readonly status?: string;

  /**
   * @schema OpsWorksVolume#Size
   */
  readonly size?: number;

  /**
   * @schema OpsWorksVolume#Device
   */
  readonly device?: string;

  /**
   * @schema OpsWorksVolume#MountPoint
   */
  readonly mountPoint?: string;

  /**
   * @schema OpsWorksVolume#Region
   */
  readonly region?: string;

  /**
   * @schema OpsWorksVolume#AvailabilityZone
   */
  readonly availabilityZone?: string;

  /**
   * @schema OpsWorksVolume#VolumeType
   */
  readonly volumeType?: string;

  /**
   * @schema OpsWorksVolume#Iops
   */
  readonly iops?: number;

  /**
   * @schema OpsWorksVolume#Encrypted
   */
  readonly encrypted?: boolean;

}

/**
 * @schema OpsWorksTemporaryCredential
 */
export interface OpsWorksTemporaryCredential {
  /**
   * @schema OpsWorksTemporaryCredential#Username
   */
  readonly username?: string;

  /**
   * @schema OpsWorksTemporaryCredential#Password
   */
  readonly password?: string;

  /**
   * @schema OpsWorksTemporaryCredential#ValidForInMinutes
   */
  readonly validForInMinutes?: number;

  /**
   * @schema OpsWorksTemporaryCredential#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * @schema OpsWorksInstanceIdentity
 */
export interface OpsWorksInstanceIdentity {
  /**
   * @schema OpsWorksInstanceIdentity#Document
   */
  readonly document?: string;

  /**
   * @schema OpsWorksInstanceIdentity#Signature
   */
  readonly signature?: string;

}

/**
 * @schema OpsWorksAutoScalingThresholds
 */
export interface OpsWorksAutoScalingThresholds {
  /**
   * @schema OpsWorksAutoScalingThresholds#InstanceCount
   */
  readonly instanceCount?: number;

  /**
   * @schema OpsWorksAutoScalingThresholds#ThresholdsWaitTime
   */
  readonly thresholdsWaitTime?: number;

  /**
   * @schema OpsWorksAutoScalingThresholds#IgnoreMetricsTime
   */
  readonly ignoreMetricsTime?: number;

  /**
   * @schema OpsWorksAutoScalingThresholds#CpuThreshold
   */
  readonly cpuThreshold?: number;

  /**
   * @schema OpsWorksAutoScalingThresholds#MemoryThreshold
   */
  readonly memoryThreshold?: number;

  /**
   * @schema OpsWorksAutoScalingThresholds#LoadThreshold
   */
  readonly loadThreshold?: number;

  /**
   * @schema OpsWorksAutoScalingThresholds#Alarms
   */
  readonly alarms?: string[];

}

/**
 * @schema OpsWorksWeeklyAutoScalingSchedule
 */
export interface OpsWorksWeeklyAutoScalingSchedule {
  /**
   * @schema OpsWorksWeeklyAutoScalingSchedule#Monday
   */
  readonly monday?: { [key: string]: string };

  /**
   * @schema OpsWorksWeeklyAutoScalingSchedule#Tuesday
   */
  readonly tuesday?: { [key: string]: string };

  /**
   * @schema OpsWorksWeeklyAutoScalingSchedule#Wednesday
   */
  readonly wednesday?: { [key: string]: string };

  /**
   * @schema OpsWorksWeeklyAutoScalingSchedule#Thursday
   */
  readonly thursday?: { [key: string]: string };

  /**
   * @schema OpsWorksWeeklyAutoScalingSchedule#Friday
   */
  readonly friday?: { [key: string]: string };

  /**
   * @schema OpsWorksWeeklyAutoScalingSchedule#Saturday
   */
  readonly saturday?: { [key: string]: string };

  /**
   * @schema OpsWorksWeeklyAutoScalingSchedule#Sunday
   */
  readonly sunday?: { [key: string]: string };

}

/**
 * @schema OpsWorksEbsBlockDevice
 */
export interface OpsWorksEbsBlockDevice {
  /**
   * @schema OpsWorksEbsBlockDevice#SnapshotId
   */
  readonly snapshotId?: string;

  /**
   * @schema OpsWorksEbsBlockDevice#Iops
   */
  readonly iops?: number;

  /**
   * @schema OpsWorksEbsBlockDevice#VolumeSize
   */
  readonly volumeSize?: number;

  /**
   * @schema OpsWorksEbsBlockDevice#VolumeType
   */
  readonly volumeType?: string;

  /**
   * @schema OpsWorksEbsBlockDevice#DeleteOnTermination
   */
  readonly deleteOnTermination?: boolean;

}

/**
 * @schema OpsWorksCloudWatchLogsLogStream
 */
export interface OpsWorksCloudWatchLogsLogStream {
  /**
   * @schema OpsWorksCloudWatchLogsLogStream#LogGroupName
   */
  readonly logGroupName?: string;

  /**
   * @schema OpsWorksCloudWatchLogsLogStream#DatetimeFormat
   */
  readonly datetimeFormat?: string;

  /**
   * @schema OpsWorksCloudWatchLogsLogStream#TimeZone
   */
  readonly timeZone?: string;

  /**
   * @schema OpsWorksCloudWatchLogsLogStream#File
   */
  readonly file?: string;

  /**
   * @schema OpsWorksCloudWatchLogsLogStream#FileFingerprintLines
   */
  readonly fileFingerprintLines?: string;

  /**
   * @schema OpsWorksCloudWatchLogsLogStream#MultiLineStartPattern
   */
  readonly multiLineStartPattern?: string;

  /**
   * @schema OpsWorksCloudWatchLogsLogStream#InitialPosition
   */
  readonly initialPosition?: string;

  /**
   * @schema OpsWorksCloudWatchLogsLogStream#Encoding
   */
  readonly encoding?: string;

  /**
   * @schema OpsWorksCloudWatchLogsLogStream#BufferDuration
   */
  readonly bufferDuration?: number;

  /**
   * @schema OpsWorksCloudWatchLogsLogStream#BatchCount
   */
  readonly batchCount?: number;

  /**
   * @schema OpsWorksCloudWatchLogsLogStream#BatchSize
   */
  readonly batchSize?: number;

}

/**
 * @schema OpsWorksShutdownEventConfiguration
 */
export interface OpsWorksShutdownEventConfiguration {
  /**
   * @schema OpsWorksShutdownEventConfiguration#ExecutionTimeout
   */
  readonly executionTimeout?: number;

  /**
   * @schema OpsWorksShutdownEventConfiguration#DelayUntilElbConnectionsDrained
   */
  readonly delayUntilElbConnectionsDrained?: boolean;

}

/**
 * @schema OpsWorksReportedOs
 */
export interface OpsWorksReportedOs {
  /**
   * @schema OpsWorksReportedOs#Family
   */
  readonly family?: string;

  /**
   * @schema OpsWorksReportedOs#Name
   */
  readonly name?: string;

  /**
   * @schema OpsWorksReportedOs#Version
   */
  readonly version?: string;

}

/**
 * @schema OpsWorksOperatingSystemConfigurationManager
 */
export interface OpsWorksOperatingSystemConfigurationManager {
  /**
   * @schema OpsWorksOperatingSystemConfigurationManager#Name
   */
  readonly name?: string;

  /**
   * @schema OpsWorksOperatingSystemConfigurationManager#Version
   */
  readonly version?: string;

}

/**
 * @schema OpsWorksInstancesCount
 */
export interface OpsWorksInstancesCount {
  /**
   * @schema OpsWorksInstancesCount#Assigning
   */
  readonly assigning?: number;

  /**
   * @schema OpsWorksInstancesCount#Booting
   */
  readonly booting?: number;

  /**
   * @schema OpsWorksInstancesCount#ConnectionLost
   */
  readonly connectionLost?: number;

  /**
   * @schema OpsWorksInstancesCount#Deregistering
   */
  readonly deregistering?: number;

  /**
   * @schema OpsWorksInstancesCount#Online
   */
  readonly online?: number;

  /**
   * @schema OpsWorksInstancesCount#Pending
   */
  readonly pending?: number;

  /**
   * @schema OpsWorksInstancesCount#Rebooting
   */
  readonly rebooting?: number;

  /**
   * @schema OpsWorksInstancesCount#Registered
   */
  readonly registered?: number;

  /**
   * @schema OpsWorksInstancesCount#Registering
   */
  readonly registering?: number;

  /**
   * @schema OpsWorksInstancesCount#Requested
   */
  readonly requested?: number;

  /**
   * @schema OpsWorksInstancesCount#RunningSetup
   */
  readonly runningSetup?: number;

  /**
   * @schema OpsWorksInstancesCount#SetupFailed
   */
  readonly setupFailed?: number;

  /**
   * @schema OpsWorksInstancesCount#ShuttingDown
   */
  readonly shuttingDown?: number;

  /**
   * @schema OpsWorksInstancesCount#StartFailed
   */
  readonly startFailed?: number;

  /**
   * @schema OpsWorksInstancesCount#StopFailed
   */
  readonly stopFailed?: number;

  /**
   * @schema OpsWorksInstancesCount#Stopped
   */
  readonly stopped?: number;

  /**
   * @schema OpsWorksInstancesCount#Stopping
   */
  readonly stopping?: number;

  /**
   * @schema OpsWorksInstancesCount#Terminated
   */
  readonly terminated?: number;

  /**
   * @schema OpsWorksInstancesCount#Terminating
   */
  readonly terminating?: number;

  /**
   * @schema OpsWorksInstancesCount#Unassigning
   */
  readonly unassigning?: number;

}
