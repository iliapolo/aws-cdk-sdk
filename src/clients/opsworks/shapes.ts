/**
 * @schema OpsWorksAssignInstanceRequest
 */
export interface OpsWorksAssignInstanceRequest {
  /**
   * @schema OpsWorksAssignInstanceRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema OpsWorksAssignInstanceRequest#LayerIds
   */
  readonly layerIds?: string[];

}

/**
 * Converts an object of type 'OpsWorksAssignInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksAssignInstanceRequest(obj: OpsWorksAssignInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'LayerIds': obj.layerIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksAssignVolumeRequest
 */
export interface OpsWorksAssignVolumeRequest {
  /**
   * @schema OpsWorksAssignVolumeRequest#VolumeId
   */
  readonly volumeId?: string;

  /**
   * @schema OpsWorksAssignVolumeRequest#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * Converts an object of type 'OpsWorksAssignVolumeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksAssignVolumeRequest(obj: OpsWorksAssignVolumeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeId': obj.volumeId,
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksAssociateElasticIpRequest
 */
export interface OpsWorksAssociateElasticIpRequest {
  /**
   * @schema OpsWorksAssociateElasticIpRequest#ElasticIp
   */
  readonly elasticIp?: string;

  /**
   * @schema OpsWorksAssociateElasticIpRequest#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * Converts an object of type 'OpsWorksAssociateElasticIpRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksAssociateElasticIpRequest(obj: OpsWorksAssociateElasticIpRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ElasticIp': obj.elasticIp,
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksAttachElasticLoadBalancerRequest
 */
export interface OpsWorksAttachElasticLoadBalancerRequest {
  /**
   * @schema OpsWorksAttachElasticLoadBalancerRequest#ElasticLoadBalancerName
   */
  readonly elasticLoadBalancerName?: string;

  /**
   * @schema OpsWorksAttachElasticLoadBalancerRequest#LayerId
   */
  readonly layerId?: string;

}

/**
 * Converts an object of type 'OpsWorksAttachElasticLoadBalancerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksAttachElasticLoadBalancerRequest(obj: OpsWorksAttachElasticLoadBalancerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ElasticLoadBalancerName': obj.elasticLoadBalancerName,
    'LayerId': obj.layerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCloneStackRequest
 */
export interface OpsWorksCloneStackRequest {
  /**
   * @schema OpsWorksCloneStackRequest#SourceStackId
   */
  readonly sourceStackId?: string;

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
  readonly serviceRoleArn?: string;

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
 * Converts an object of type 'OpsWorksCloneStackRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCloneStackRequest(obj: OpsWorksCloneStackRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SourceStackId': obj.sourceStackId,
    'Name': obj.name,
    'Region': obj.region,
    'VpcId': obj.vpcId,
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ServiceRoleArn': obj.serviceRoleArn,
    'DefaultInstanceProfileArn': obj.defaultInstanceProfileArn,
    'DefaultOs': obj.defaultOs,
    'HostnameTheme': obj.hostnameTheme,
    'DefaultAvailabilityZone': obj.defaultAvailabilityZone,
    'DefaultSubnetId': obj.defaultSubnetId,
    'CustomJson': obj.customJson,
    'ConfigurationManager': toJson_OpsWorksStackConfigurationManager(obj.configurationManager),
    'ChefConfiguration': toJson_OpsWorksChefConfiguration(obj.chefConfiguration),
    'UseCustomCookbooks': obj.useCustomCookbooks,
    'UseOpsworksSecurityGroups': obj.useOpsworksSecurityGroups,
    'CustomCookbooksSource': toJson_OpsWorksSource(obj.customCookbooksSource),
    'DefaultSshKeyName': obj.defaultSshKeyName,
    'ClonePermissions': obj.clonePermissions,
    'CloneAppIds': obj.cloneAppIds?.map(y => y),
    'DefaultRootDeviceType': obj.defaultRootDeviceType,
    'AgentVersion': obj.agentVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksCloneStackResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCloneStackResult(obj: OpsWorksCloneStackResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCreateAppRequest
 */
export interface OpsWorksCreateAppRequest {
  /**
   * @schema OpsWorksCreateAppRequest#StackId
   */
  readonly stackId?: string;

  /**
   * @schema OpsWorksCreateAppRequest#Shortname
   */
  readonly shortname?: string;

  /**
   * @schema OpsWorksCreateAppRequest#Name
   */
  readonly name?: string;

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
  readonly type?: string;

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
 * Converts an object of type 'OpsWorksCreateAppRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCreateAppRequest(obj: OpsWorksCreateAppRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
    'Shortname': obj.shortname,
    'Name': obj.name,
    'Description': obj.description,
    'DataSources': obj.dataSources?.map(y => toJson_OpsWorksDataSource(y)),
    'Type': obj.type,
    'AppSource': toJson_OpsWorksSource(obj.appSource),
    'Domains': obj.domains?.map(y => y),
    'EnableSsl': obj.enableSsl,
    'SslConfiguration': toJson_OpsWorksSslConfiguration(obj.sslConfiguration),
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Environment': obj.environment?.map(y => toJson_OpsWorksEnvironmentVariable(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksCreateAppResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCreateAppResult(obj: OpsWorksCreateAppResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCreateDeploymentRequest
 */
export interface OpsWorksCreateDeploymentRequest {
  /**
   * @schema OpsWorksCreateDeploymentRequest#StackId
   */
  readonly stackId?: string;

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
  readonly command?: OpsWorksDeploymentCommand;

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
 * Converts an object of type 'OpsWorksCreateDeploymentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCreateDeploymentRequest(obj: OpsWorksCreateDeploymentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
    'AppId': obj.appId,
    'InstanceIds': obj.instanceIds?.map(y => y),
    'LayerIds': obj.layerIds?.map(y => y),
    'Command': toJson_OpsWorksDeploymentCommand(obj.command),
    'Comment': obj.comment,
    'CustomJson': obj.customJson,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksCreateDeploymentResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCreateDeploymentResult(obj: OpsWorksCreateDeploymentResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeploymentId': obj.deploymentId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCreateInstanceRequest
 */
export interface OpsWorksCreateInstanceRequest {
  /**
   * @schema OpsWorksCreateInstanceRequest#StackId
   */
  readonly stackId?: string;

  /**
   * @schema OpsWorksCreateInstanceRequest#LayerIds
   */
  readonly layerIds?: string[];

  /**
   * @schema OpsWorksCreateInstanceRequest#InstanceType
   */
  readonly instanceType?: string;

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
 * Converts an object of type 'OpsWorksCreateInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCreateInstanceRequest(obj: OpsWorksCreateInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
    'LayerIds': obj.layerIds?.map(y => y),
    'InstanceType': obj.instanceType,
    'AutoScalingType': obj.autoScalingType,
    'Hostname': obj.hostname,
    'Os': obj.os,
    'AmiId': obj.amiId,
    'SshKeyName': obj.sshKeyName,
    'AvailabilityZone': obj.availabilityZone,
    'VirtualizationType': obj.virtualizationType,
    'SubnetId': obj.subnetId,
    'Architecture': obj.architecture,
    'RootDeviceType': obj.rootDeviceType,
    'BlockDeviceMappings': obj.blockDeviceMappings?.map(y => toJson_OpsWorksBlockDeviceMapping(y)),
    'InstallUpdatesOnBoot': obj.installUpdatesOnBoot,
    'EbsOptimized': obj.ebsOptimized,
    'AgentVersion': obj.agentVersion,
    'Tenancy': obj.tenancy,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksCreateInstanceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCreateInstanceResult(obj: OpsWorksCreateInstanceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCreateLayerRequest
 */
export interface OpsWorksCreateLayerRequest {
  /**
   * @schema OpsWorksCreateLayerRequest#StackId
   */
  readonly stackId?: string;

  /**
   * @schema OpsWorksCreateLayerRequest#Type
   */
  readonly type?: string;

  /**
   * @schema OpsWorksCreateLayerRequest#Name
   */
  readonly name?: string;

  /**
   * @schema OpsWorksCreateLayerRequest#Shortname
   */
  readonly shortname?: string;

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
 * Converts an object of type 'OpsWorksCreateLayerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCreateLayerRequest(obj: OpsWorksCreateLayerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
    'Type': obj.type,
    'Name': obj.name,
    'Shortname': obj.shortname,
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'CloudWatchLogsConfiguration': toJson_OpsWorksCloudWatchLogsConfiguration(obj.cloudWatchLogsConfiguration),
    'CustomInstanceProfileArn': obj.customInstanceProfileArn,
    'CustomJson': obj.customJson,
    'CustomSecurityGroupIds': obj.customSecurityGroupIds?.map(y => y),
    'Packages': obj.packages?.map(y => y),
    'VolumeConfigurations': obj.volumeConfigurations?.map(y => toJson_OpsWorksVolumeConfiguration(y)),
    'EnableAutoHealing': obj.enableAutoHealing,
    'AutoAssignElasticIps': obj.autoAssignElasticIps,
    'AutoAssignPublicIps': obj.autoAssignPublicIps,
    'CustomRecipes': toJson_OpsWorksRecipes(obj.customRecipes),
    'InstallUpdatesOnBoot': obj.installUpdatesOnBoot,
    'UseEbsOptimizedInstances': obj.useEbsOptimizedInstances,
    'LifecycleEventConfiguration': toJson_OpsWorksLifecycleEventConfiguration(obj.lifecycleEventConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksCreateLayerResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCreateLayerResult(obj: OpsWorksCreateLayerResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LayerId': obj.layerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCreateStackRequest
 */
export interface OpsWorksCreateStackRequest {
  /**
   * @schema OpsWorksCreateStackRequest#Name
   */
  readonly name?: string;

  /**
   * @schema OpsWorksCreateStackRequest#Region
   */
  readonly region?: string;

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
  readonly serviceRoleArn?: string;

  /**
   * @schema OpsWorksCreateStackRequest#DefaultInstanceProfileArn
   */
  readonly defaultInstanceProfileArn?: string;

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
 * Converts an object of type 'OpsWorksCreateStackRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCreateStackRequest(obj: OpsWorksCreateStackRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Region': obj.region,
    'VpcId': obj.vpcId,
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ServiceRoleArn': obj.serviceRoleArn,
    'DefaultInstanceProfileArn': obj.defaultInstanceProfileArn,
    'DefaultOs': obj.defaultOs,
    'HostnameTheme': obj.hostnameTheme,
    'DefaultAvailabilityZone': obj.defaultAvailabilityZone,
    'DefaultSubnetId': obj.defaultSubnetId,
    'CustomJson': obj.customJson,
    'ConfigurationManager': toJson_OpsWorksStackConfigurationManager(obj.configurationManager),
    'ChefConfiguration': toJson_OpsWorksChefConfiguration(obj.chefConfiguration),
    'UseCustomCookbooks': obj.useCustomCookbooks,
    'UseOpsworksSecurityGroups': obj.useOpsworksSecurityGroups,
    'CustomCookbooksSource': toJson_OpsWorksSource(obj.customCookbooksSource),
    'DefaultSshKeyName': obj.defaultSshKeyName,
    'DefaultRootDeviceType': obj.defaultRootDeviceType,
    'AgentVersion': obj.agentVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksCreateStackResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCreateStackResult(obj: OpsWorksCreateStackResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksCreateUserProfileRequest
 */
export interface OpsWorksCreateUserProfileRequest {
  /**
   * @schema OpsWorksCreateUserProfileRequest#IamUserArn
   */
  readonly iamUserArn?: string;

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
 * Converts an object of type 'OpsWorksCreateUserProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCreateUserProfileRequest(obj: OpsWorksCreateUserProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IamUserArn': obj.iamUserArn,
    'SshUsername': obj.sshUsername,
    'SshPublicKey': obj.sshPublicKey,
    'AllowSelfManagement': obj.allowSelfManagement,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksCreateUserProfileResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCreateUserProfileResult(obj: OpsWorksCreateUserProfileResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IamUserArn': obj.iamUserArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksDeleteAppRequest
 */
export interface OpsWorksDeleteAppRequest {
  /**
   * @schema OpsWorksDeleteAppRequest#AppId
   */
  readonly appId?: string;

}

/**
 * Converts an object of type 'OpsWorksDeleteAppRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDeleteAppRequest(obj: OpsWorksDeleteAppRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksDeleteInstanceRequest
 */
export interface OpsWorksDeleteInstanceRequest {
  /**
   * @schema OpsWorksDeleteInstanceRequest#InstanceId
   */
  readonly instanceId?: string;

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
 * Converts an object of type 'OpsWorksDeleteInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDeleteInstanceRequest(obj: OpsWorksDeleteInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'DeleteElasticIp': obj.deleteElasticIp,
    'DeleteVolumes': obj.deleteVolumes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksDeleteLayerRequest
 */
export interface OpsWorksDeleteLayerRequest {
  /**
   * @schema OpsWorksDeleteLayerRequest#LayerId
   */
  readonly layerId?: string;

}

/**
 * Converts an object of type 'OpsWorksDeleteLayerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDeleteLayerRequest(obj: OpsWorksDeleteLayerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LayerId': obj.layerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksDeleteStackRequest
 */
export interface OpsWorksDeleteStackRequest {
  /**
   * @schema OpsWorksDeleteStackRequest#StackId
   */
  readonly stackId?: string;

}

/**
 * Converts an object of type 'OpsWorksDeleteStackRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDeleteStackRequest(obj: OpsWorksDeleteStackRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksDeleteUserProfileRequest
 */
export interface OpsWorksDeleteUserProfileRequest {
  /**
   * @schema OpsWorksDeleteUserProfileRequest#IamUserArn
   */
  readonly iamUserArn?: string;

}

/**
 * Converts an object of type 'OpsWorksDeleteUserProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDeleteUserProfileRequest(obj: OpsWorksDeleteUserProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IamUserArn': obj.iamUserArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksDeregisterEcsClusterRequest
 */
export interface OpsWorksDeregisterEcsClusterRequest {
  /**
   * @schema OpsWorksDeregisterEcsClusterRequest#EcsClusterArn
   */
  readonly ecsClusterArn?: string;

}

/**
 * Converts an object of type 'OpsWorksDeregisterEcsClusterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDeregisterEcsClusterRequest(obj: OpsWorksDeregisterEcsClusterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EcsClusterArn': obj.ecsClusterArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksDeregisterElasticIpRequest
 */
export interface OpsWorksDeregisterElasticIpRequest {
  /**
   * @schema OpsWorksDeregisterElasticIpRequest#ElasticIp
   */
  readonly elasticIp?: string;

}

/**
 * Converts an object of type 'OpsWorksDeregisterElasticIpRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDeregisterElasticIpRequest(obj: OpsWorksDeregisterElasticIpRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ElasticIp': obj.elasticIp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksDeregisterInstanceRequest
 */
export interface OpsWorksDeregisterInstanceRequest {
  /**
   * @schema OpsWorksDeregisterInstanceRequest#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * Converts an object of type 'OpsWorksDeregisterInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDeregisterInstanceRequest(obj: OpsWorksDeregisterInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksDeregisterRdsDbInstanceRequest
 */
export interface OpsWorksDeregisterRdsDbInstanceRequest {
  /**
   * @schema OpsWorksDeregisterRdsDbInstanceRequest#RdsDbInstanceArn
   */
  readonly rdsDbInstanceArn?: string;

}

/**
 * Converts an object of type 'OpsWorksDeregisterRdsDbInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDeregisterRdsDbInstanceRequest(obj: OpsWorksDeregisterRdsDbInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RdsDbInstanceArn': obj.rdsDbInstanceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksDeregisterVolumeRequest
 */
export interface OpsWorksDeregisterVolumeRequest {
  /**
   * @schema OpsWorksDeregisterVolumeRequest#VolumeId
   */
  readonly volumeId?: string;

}

/**
 * Converts an object of type 'OpsWorksDeregisterVolumeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDeregisterVolumeRequest(obj: OpsWorksDeregisterVolumeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeId': obj.volumeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeAgentVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeAgentVersionsRequest(obj: OpsWorksDescribeAgentVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
    'ConfigurationManager': toJson_OpsWorksStackConfigurationManager(obj.configurationManager),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeAgentVersionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeAgentVersionsResult(obj: OpsWorksDescribeAgentVersionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AgentVersions': obj.agentVersions?.map(y => toJson_OpsWorksAgentVersion(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeAppsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeAppsRequest(obj: OpsWorksDescribeAppsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
    'AppIds': obj.appIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeAppsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeAppsResult(obj: OpsWorksDescribeAppsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Apps': obj.apps?.map(y => toJson_OpsWorksApp(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeCommandsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeCommandsRequest(obj: OpsWorksDescribeCommandsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeploymentId': obj.deploymentId,
    'InstanceId': obj.instanceId,
    'CommandIds': obj.commandIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeCommandsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeCommandsResult(obj: OpsWorksDescribeCommandsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Commands': obj.commands?.map(y => toJson_OpsWorksCommand(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeDeploymentsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeDeploymentsRequest(obj: OpsWorksDescribeDeploymentsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
    'AppId': obj.appId,
    'DeploymentIds': obj.deploymentIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeDeploymentsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeDeploymentsResult(obj: OpsWorksDescribeDeploymentsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Deployments': obj.deployments?.map(y => toJson_OpsWorksDeployment(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeEcsClustersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeEcsClustersRequest(obj: OpsWorksDescribeEcsClustersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EcsClusterArns': obj.ecsClusterArns?.map(y => y),
    'StackId': obj.stackId,
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeEcsClustersResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeEcsClustersResult(obj: OpsWorksDescribeEcsClustersResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EcsClusters': obj.ecsClusters?.map(y => toJson_OpsWorksEcsCluster(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeElasticIpsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeElasticIpsRequest(obj: OpsWorksDescribeElasticIpsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'StackId': obj.stackId,
    'Ips': obj.ips?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeElasticIpsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeElasticIpsResult(obj: OpsWorksDescribeElasticIpsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ElasticIps': obj.elasticIps?.map(y => toJson_OpsWorksElasticIp(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeElasticLoadBalancersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeElasticLoadBalancersRequest(obj: OpsWorksDescribeElasticLoadBalancersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
    'LayerIds': obj.layerIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeElasticLoadBalancersResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeElasticLoadBalancersResult(obj: OpsWorksDescribeElasticLoadBalancersResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ElasticLoadBalancers': obj.elasticLoadBalancers?.map(y => toJson_OpsWorksElasticLoadBalancer(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeInstancesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeInstancesRequest(obj: OpsWorksDescribeInstancesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
    'LayerId': obj.layerId,
    'InstanceIds': obj.instanceIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeInstancesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeInstancesResult(obj: OpsWorksDescribeInstancesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Instances': obj.instances?.map(y => toJson_OpsWorksInstance(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeLayersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeLayersRequest(obj: OpsWorksDescribeLayersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
    'LayerIds': obj.layerIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeLayersResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeLayersResult(obj: OpsWorksDescribeLayersResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Layers': obj.layers?.map(y => toJson_OpsWorksLayer(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksDescribeLoadBasedAutoScalingRequest
 */
export interface OpsWorksDescribeLoadBasedAutoScalingRequest {
  /**
   * @schema OpsWorksDescribeLoadBasedAutoScalingRequest#LayerIds
   */
  readonly layerIds?: string[];

}

/**
 * Converts an object of type 'OpsWorksDescribeLoadBasedAutoScalingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeLoadBasedAutoScalingRequest(obj: OpsWorksDescribeLoadBasedAutoScalingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LayerIds': obj.layerIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeLoadBasedAutoScalingResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeLoadBasedAutoScalingResult(obj: OpsWorksDescribeLoadBasedAutoScalingResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LoadBasedAutoScalingConfigurations': obj.loadBasedAutoScalingConfigurations?.map(y => toJson_OpsWorksLoadBasedAutoScalingConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeMyUserProfileResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeMyUserProfileResult(obj: OpsWorksDescribeMyUserProfileResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserProfile': toJson_OpsWorksSelfUserProfile(obj.userProfile),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeOperatingSystemsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeOperatingSystemsResponse(obj: OpsWorksDescribeOperatingSystemsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'OperatingSystems': obj.operatingSystems?.map(y => toJson_OpsWorksOperatingSystem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribePermissionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribePermissionsRequest(obj: OpsWorksDescribePermissionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IamUserArn': obj.iamUserArn,
    'StackId': obj.stackId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribePermissionsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribePermissionsResult(obj: OpsWorksDescribePermissionsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Permissions': obj.permissions?.map(y => toJson_OpsWorksPermission(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeRaidArraysRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeRaidArraysRequest(obj: OpsWorksDescribeRaidArraysRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'StackId': obj.stackId,
    'RaidArrayIds': obj.raidArrayIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeRaidArraysResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeRaidArraysResult(obj: OpsWorksDescribeRaidArraysResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RaidArrays': obj.raidArrays?.map(y => toJson_OpsWorksRaidArray(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksDescribeRdsDbInstancesRequest
 */
export interface OpsWorksDescribeRdsDbInstancesRequest {
  /**
   * @schema OpsWorksDescribeRdsDbInstancesRequest#StackId
   */
  readonly stackId?: string;

  /**
   * @schema OpsWorksDescribeRdsDbInstancesRequest#RdsDbInstanceArns
   */
  readonly rdsDbInstanceArns?: string[];

}

/**
 * Converts an object of type 'OpsWorksDescribeRdsDbInstancesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeRdsDbInstancesRequest(obj: OpsWorksDescribeRdsDbInstancesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
    'RdsDbInstanceArns': obj.rdsDbInstanceArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeRdsDbInstancesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeRdsDbInstancesResult(obj: OpsWorksDescribeRdsDbInstancesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RdsDbInstances': obj.rdsDbInstances?.map(y => toJson_OpsWorksRdsDbInstance(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeServiceErrorsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeServiceErrorsRequest(obj: OpsWorksDescribeServiceErrorsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
    'InstanceId': obj.instanceId,
    'ServiceErrorIds': obj.serviceErrorIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeServiceErrorsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeServiceErrorsResult(obj: OpsWorksDescribeServiceErrorsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceErrors': obj.serviceErrors?.map(y => toJson_OpsWorksServiceError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksDescribeStackProvisioningParametersRequest
 */
export interface OpsWorksDescribeStackProvisioningParametersRequest {
  /**
   * @schema OpsWorksDescribeStackProvisioningParametersRequest#StackId
   */
  readonly stackId?: string;

}

/**
 * Converts an object of type 'OpsWorksDescribeStackProvisioningParametersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeStackProvisioningParametersRequest(obj: OpsWorksDescribeStackProvisioningParametersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeStackProvisioningParametersResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeStackProvisioningParametersResult(obj: OpsWorksDescribeStackProvisioningParametersResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AgentInstallerUrl': obj.agentInstallerUrl,
    'Parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksDescribeStackSummaryRequest
 */
export interface OpsWorksDescribeStackSummaryRequest {
  /**
   * @schema OpsWorksDescribeStackSummaryRequest#StackId
   */
  readonly stackId?: string;

}

/**
 * Converts an object of type 'OpsWorksDescribeStackSummaryRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeStackSummaryRequest(obj: OpsWorksDescribeStackSummaryRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeStackSummaryResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeStackSummaryResult(obj: OpsWorksDescribeStackSummaryResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackSummary': toJson_OpsWorksStackSummary(obj.stackSummary),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeStacksRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeStacksRequest(obj: OpsWorksDescribeStacksRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackIds': obj.stackIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeStacksResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeStacksResult(obj: OpsWorksDescribeStacksResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Stacks': obj.stacks?.map(y => toJson_OpsWorksStack(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksDescribeTimeBasedAutoScalingRequest
 */
export interface OpsWorksDescribeTimeBasedAutoScalingRequest {
  /**
   * @schema OpsWorksDescribeTimeBasedAutoScalingRequest#InstanceIds
   */
  readonly instanceIds?: string[];

}

/**
 * Converts an object of type 'OpsWorksDescribeTimeBasedAutoScalingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeTimeBasedAutoScalingRequest(obj: OpsWorksDescribeTimeBasedAutoScalingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceIds': obj.instanceIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeTimeBasedAutoScalingResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeTimeBasedAutoScalingResult(obj: OpsWorksDescribeTimeBasedAutoScalingResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TimeBasedAutoScalingConfigurations': obj.timeBasedAutoScalingConfigurations?.map(y => toJson_OpsWorksTimeBasedAutoScalingConfiguration(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeUserProfilesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeUserProfilesRequest(obj: OpsWorksDescribeUserProfilesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IamUserArns': obj.iamUserArns?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeUserProfilesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeUserProfilesResult(obj: OpsWorksDescribeUserProfilesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'UserProfiles': obj.userProfiles?.map(y => toJson_OpsWorksUserProfile(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeVolumesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeVolumesRequest(obj: OpsWorksDescribeVolumesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'StackId': obj.stackId,
    'RaidArrayId': obj.raidArrayId,
    'VolumeIds': obj.volumeIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDescribeVolumesResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDescribeVolumesResult(obj: OpsWorksDescribeVolumesResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Volumes': obj.volumes?.map(y => toJson_OpsWorksVolume(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksDetachElasticLoadBalancerRequest
 */
export interface OpsWorksDetachElasticLoadBalancerRequest {
  /**
   * @schema OpsWorksDetachElasticLoadBalancerRequest#ElasticLoadBalancerName
   */
  readonly elasticLoadBalancerName?: string;

  /**
   * @schema OpsWorksDetachElasticLoadBalancerRequest#LayerId
   */
  readonly layerId?: string;

}

/**
 * Converts an object of type 'OpsWorksDetachElasticLoadBalancerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDetachElasticLoadBalancerRequest(obj: OpsWorksDetachElasticLoadBalancerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ElasticLoadBalancerName': obj.elasticLoadBalancerName,
    'LayerId': obj.layerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksDisassociateElasticIpRequest
 */
export interface OpsWorksDisassociateElasticIpRequest {
  /**
   * @schema OpsWorksDisassociateElasticIpRequest#ElasticIp
   */
  readonly elasticIp?: string;

}

/**
 * Converts an object of type 'OpsWorksDisassociateElasticIpRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDisassociateElasticIpRequest(obj: OpsWorksDisassociateElasticIpRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ElasticIp': obj.elasticIp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksGetHostnameSuggestionRequest
 */
export interface OpsWorksGetHostnameSuggestionRequest {
  /**
   * @schema OpsWorksGetHostnameSuggestionRequest#LayerId
   */
  readonly layerId?: string;

}

/**
 * Converts an object of type 'OpsWorksGetHostnameSuggestionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksGetHostnameSuggestionRequest(obj: OpsWorksGetHostnameSuggestionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LayerId': obj.layerId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksGetHostnameSuggestionResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksGetHostnameSuggestionResult(obj: OpsWorksGetHostnameSuggestionResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LayerId': obj.layerId,
    'Hostname': obj.hostname,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksGrantAccessRequest
 */
export interface OpsWorksGrantAccessRequest {
  /**
   * @schema OpsWorksGrantAccessRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema OpsWorksGrantAccessRequest#ValidForInMinutes
   */
  readonly validForInMinutes?: number;

}

/**
 * Converts an object of type 'OpsWorksGrantAccessRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksGrantAccessRequest(obj: OpsWorksGrantAccessRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'ValidForInMinutes': obj.validForInMinutes,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksGrantAccessResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksGrantAccessResult(obj: OpsWorksGrantAccessResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TemporaryCredential': toJson_OpsWorksTemporaryCredential(obj.temporaryCredential),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksListTagsRequest
 */
export interface OpsWorksListTagsRequest {
  /**
   * @schema OpsWorksListTagsRequest#ResourceArn
   */
  readonly resourceArn?: string;

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
 * Converts an object of type 'OpsWorksListTagsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksListTagsRequest(obj: OpsWorksListTagsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksListTagsResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksListTagsResult(obj: OpsWorksListTagsResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksRebootInstanceRequest
 */
export interface OpsWorksRebootInstanceRequest {
  /**
   * @schema OpsWorksRebootInstanceRequest#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * Converts an object of type 'OpsWorksRebootInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksRebootInstanceRequest(obj: OpsWorksRebootInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksRegisterEcsClusterRequest
 */
export interface OpsWorksRegisterEcsClusterRequest {
  /**
   * @schema OpsWorksRegisterEcsClusterRequest#EcsClusterArn
   */
  readonly ecsClusterArn?: string;

  /**
   * @schema OpsWorksRegisterEcsClusterRequest#StackId
   */
  readonly stackId?: string;

}

/**
 * Converts an object of type 'OpsWorksRegisterEcsClusterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksRegisterEcsClusterRequest(obj: OpsWorksRegisterEcsClusterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EcsClusterArn': obj.ecsClusterArn,
    'StackId': obj.stackId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksRegisterEcsClusterResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksRegisterEcsClusterResult(obj: OpsWorksRegisterEcsClusterResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EcsClusterArn': obj.ecsClusterArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksRegisterElasticIpRequest
 */
export interface OpsWorksRegisterElasticIpRequest {
  /**
   * @schema OpsWorksRegisterElasticIpRequest#ElasticIp
   */
  readonly elasticIp?: string;

  /**
   * @schema OpsWorksRegisterElasticIpRequest#StackId
   */
  readonly stackId?: string;

}

/**
 * Converts an object of type 'OpsWorksRegisterElasticIpRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksRegisterElasticIpRequest(obj: OpsWorksRegisterElasticIpRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ElasticIp': obj.elasticIp,
    'StackId': obj.stackId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksRegisterElasticIpResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksRegisterElasticIpResult(obj: OpsWorksRegisterElasticIpResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ElasticIp': obj.elasticIp,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksRegisterInstanceRequest
 */
export interface OpsWorksRegisterInstanceRequest {
  /**
   * @schema OpsWorksRegisterInstanceRequest#StackId
   */
  readonly stackId?: string;

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
 * Converts an object of type 'OpsWorksRegisterInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksRegisterInstanceRequest(obj: OpsWorksRegisterInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
    'Hostname': obj.hostname,
    'PublicIp': obj.publicIp,
    'PrivateIp': obj.privateIp,
    'RsaPublicKey': obj.rsaPublicKey,
    'RsaPublicKeyFingerprint': obj.rsaPublicKeyFingerprint,
    'InstanceIdentity': toJson_OpsWorksInstanceIdentity(obj.instanceIdentity),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksRegisterInstanceResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksRegisterInstanceResult(obj: OpsWorksRegisterInstanceResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksRegisterRdsDbInstanceRequest
 */
export interface OpsWorksRegisterRdsDbInstanceRequest {
  /**
   * @schema OpsWorksRegisterRdsDbInstanceRequest#StackId
   */
  readonly stackId?: string;

  /**
   * @schema OpsWorksRegisterRdsDbInstanceRequest#RdsDbInstanceArn
   */
  readonly rdsDbInstanceArn?: string;

  /**
   * @schema OpsWorksRegisterRdsDbInstanceRequest#DbUser
   */
  readonly dbUser?: string;

  /**
   * @schema OpsWorksRegisterRdsDbInstanceRequest#DbPassword
   */
  readonly dbPassword?: string;

}

/**
 * Converts an object of type 'OpsWorksRegisterRdsDbInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksRegisterRdsDbInstanceRequest(obj: OpsWorksRegisterRdsDbInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
    'RdsDbInstanceArn': obj.rdsDbInstanceArn,
    'DbUser': obj.dbUser,
    'DbPassword': obj.dbPassword,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
  readonly stackId?: string;

}

/**
 * Converts an object of type 'OpsWorksRegisterVolumeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksRegisterVolumeRequest(obj: OpsWorksRegisterVolumeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Ec2VolumeId': obj.ec2VolumeId,
    'StackId': obj.stackId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksRegisterVolumeResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksRegisterVolumeResult(obj: OpsWorksRegisterVolumeResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeId': obj.volumeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksSetLoadBasedAutoScalingRequest
 */
export interface OpsWorksSetLoadBasedAutoScalingRequest {
  /**
   * @schema OpsWorksSetLoadBasedAutoScalingRequest#LayerId
   */
  readonly layerId?: string;

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
 * Converts an object of type 'OpsWorksSetLoadBasedAutoScalingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksSetLoadBasedAutoScalingRequest(obj: OpsWorksSetLoadBasedAutoScalingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LayerId': obj.layerId,
    'Enable': obj.enable,
    'UpScaling': toJson_OpsWorksAutoScalingThresholds(obj.upScaling),
    'DownScaling': toJson_OpsWorksAutoScalingThresholds(obj.downScaling),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksSetPermissionRequest
 */
export interface OpsWorksSetPermissionRequest {
  /**
   * @schema OpsWorksSetPermissionRequest#StackId
   */
  readonly stackId?: string;

  /**
   * @schema OpsWorksSetPermissionRequest#IamUserArn
   */
  readonly iamUserArn?: string;

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
 * Converts an object of type 'OpsWorksSetPermissionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksSetPermissionRequest(obj: OpsWorksSetPermissionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
    'IamUserArn': obj.iamUserArn,
    'AllowSsh': obj.allowSsh,
    'AllowSudo': obj.allowSudo,
    'Level': obj.level,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksSetTimeBasedAutoScalingRequest
 */
export interface OpsWorksSetTimeBasedAutoScalingRequest {
  /**
   * @schema OpsWorksSetTimeBasedAutoScalingRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema OpsWorksSetTimeBasedAutoScalingRequest#AutoScalingSchedule
   */
  readonly autoScalingSchedule?: OpsWorksWeeklyAutoScalingSchedule;

}

/**
 * Converts an object of type 'OpsWorksSetTimeBasedAutoScalingRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksSetTimeBasedAutoScalingRequest(obj: OpsWorksSetTimeBasedAutoScalingRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'AutoScalingSchedule': toJson_OpsWorksWeeklyAutoScalingSchedule(obj.autoScalingSchedule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksStartInstanceRequest
 */
export interface OpsWorksStartInstanceRequest {
  /**
   * @schema OpsWorksStartInstanceRequest#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * Converts an object of type 'OpsWorksStartInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksStartInstanceRequest(obj: OpsWorksStartInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksStartStackRequest
 */
export interface OpsWorksStartStackRequest {
  /**
   * @schema OpsWorksStartStackRequest#StackId
   */
  readonly stackId?: string;

}

/**
 * Converts an object of type 'OpsWorksStartStackRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksStartStackRequest(obj: OpsWorksStartStackRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksStopInstanceRequest
 */
export interface OpsWorksStopInstanceRequest {
  /**
   * @schema OpsWorksStopInstanceRequest#InstanceId
   */
  readonly instanceId?: string;

  /**
   * @schema OpsWorksStopInstanceRequest#Force
   */
  readonly force?: boolean;

}

/**
 * Converts an object of type 'OpsWorksStopInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksStopInstanceRequest(obj: OpsWorksStopInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'Force': obj.force,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksStopStackRequest
 */
export interface OpsWorksStopStackRequest {
  /**
   * @schema OpsWorksStopStackRequest#StackId
   */
  readonly stackId?: string;

}

/**
 * Converts an object of type 'OpsWorksStopStackRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksStopStackRequest(obj: OpsWorksStopStackRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksTagResourceRequest
 */
export interface OpsWorksTagResourceRequest {
  /**
   * @schema OpsWorksTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema OpsWorksTagResourceRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'OpsWorksTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksTagResourceRequest(obj: OpsWorksTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksUnassignInstanceRequest
 */
export interface OpsWorksUnassignInstanceRequest {
  /**
   * @schema OpsWorksUnassignInstanceRequest#InstanceId
   */
  readonly instanceId?: string;

}

/**
 * Converts an object of type 'OpsWorksUnassignInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksUnassignInstanceRequest(obj: OpsWorksUnassignInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksUnassignVolumeRequest
 */
export interface OpsWorksUnassignVolumeRequest {
  /**
   * @schema OpsWorksUnassignVolumeRequest#VolumeId
   */
  readonly volumeId?: string;

}

/**
 * Converts an object of type 'OpsWorksUnassignVolumeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksUnassignVolumeRequest(obj: OpsWorksUnassignVolumeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeId': obj.volumeId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksUntagResourceRequest
 */
export interface OpsWorksUntagResourceRequest {
  /**
   * @schema OpsWorksUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema OpsWorksUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'OpsWorksUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksUntagResourceRequest(obj: OpsWorksUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksUpdateAppRequest
 */
export interface OpsWorksUpdateAppRequest {
  /**
   * @schema OpsWorksUpdateAppRequest#AppId
   */
  readonly appId?: string;

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
 * Converts an object of type 'OpsWorksUpdateAppRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksUpdateAppRequest(obj: OpsWorksUpdateAppRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'Name': obj.name,
    'Description': obj.description,
    'DataSources': obj.dataSources?.map(y => toJson_OpsWorksDataSource(y)),
    'Type': obj.type,
    'AppSource': toJson_OpsWorksSource(obj.appSource),
    'Domains': obj.domains?.map(y => y),
    'EnableSsl': obj.enableSsl,
    'SslConfiguration': toJson_OpsWorksSslConfiguration(obj.sslConfiguration),
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Environment': obj.environment?.map(y => toJson_OpsWorksEnvironmentVariable(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksUpdateElasticIpRequest
 */
export interface OpsWorksUpdateElasticIpRequest {
  /**
   * @schema OpsWorksUpdateElasticIpRequest#ElasticIp
   */
  readonly elasticIp?: string;

  /**
   * @schema OpsWorksUpdateElasticIpRequest#Name
   */
  readonly name?: string;

}

/**
 * Converts an object of type 'OpsWorksUpdateElasticIpRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksUpdateElasticIpRequest(obj: OpsWorksUpdateElasticIpRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ElasticIp': obj.elasticIp,
    'Name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksUpdateInstanceRequest
 */
export interface OpsWorksUpdateInstanceRequest {
  /**
   * @schema OpsWorksUpdateInstanceRequest#InstanceId
   */
  readonly instanceId?: string;

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
 * Converts an object of type 'OpsWorksUpdateInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksUpdateInstanceRequest(obj: OpsWorksUpdateInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'LayerIds': obj.layerIds?.map(y => y),
    'InstanceType': obj.instanceType,
    'AutoScalingType': obj.autoScalingType,
    'Hostname': obj.hostname,
    'Os': obj.os,
    'AmiId': obj.amiId,
    'SshKeyName': obj.sshKeyName,
    'Architecture': obj.architecture,
    'InstallUpdatesOnBoot': obj.installUpdatesOnBoot,
    'EbsOptimized': obj.ebsOptimized,
    'AgentVersion': obj.agentVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksUpdateLayerRequest
 */
export interface OpsWorksUpdateLayerRequest {
  /**
   * @schema OpsWorksUpdateLayerRequest#LayerId
   */
  readonly layerId?: string;

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
 * Converts an object of type 'OpsWorksUpdateLayerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksUpdateLayerRequest(obj: OpsWorksUpdateLayerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LayerId': obj.layerId,
    'Name': obj.name,
    'Shortname': obj.shortname,
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'CloudWatchLogsConfiguration': toJson_OpsWorksCloudWatchLogsConfiguration(obj.cloudWatchLogsConfiguration),
    'CustomInstanceProfileArn': obj.customInstanceProfileArn,
    'CustomJson': obj.customJson,
    'CustomSecurityGroupIds': obj.customSecurityGroupIds?.map(y => y),
    'Packages': obj.packages?.map(y => y),
    'VolumeConfigurations': obj.volumeConfigurations?.map(y => toJson_OpsWorksVolumeConfiguration(y)),
    'EnableAutoHealing': obj.enableAutoHealing,
    'AutoAssignElasticIps': obj.autoAssignElasticIps,
    'AutoAssignPublicIps': obj.autoAssignPublicIps,
    'CustomRecipes': toJson_OpsWorksRecipes(obj.customRecipes),
    'InstallUpdatesOnBoot': obj.installUpdatesOnBoot,
    'UseEbsOptimizedInstances': obj.useEbsOptimizedInstances,
    'LifecycleEventConfiguration': toJson_OpsWorksLifecycleEventConfiguration(obj.lifecycleEventConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksUpdateMyUserProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksUpdateMyUserProfileRequest(obj: OpsWorksUpdateMyUserProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SshPublicKey': obj.sshPublicKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksUpdateRdsDbInstanceRequest
 */
export interface OpsWorksUpdateRdsDbInstanceRequest {
  /**
   * @schema OpsWorksUpdateRdsDbInstanceRequest#RdsDbInstanceArn
   */
  readonly rdsDbInstanceArn?: string;

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
 * Converts an object of type 'OpsWorksUpdateRdsDbInstanceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksUpdateRdsDbInstanceRequest(obj: OpsWorksUpdateRdsDbInstanceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RdsDbInstanceArn': obj.rdsDbInstanceArn,
    'DbUser': obj.dbUser,
    'DbPassword': obj.dbPassword,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksUpdateStackRequest
 */
export interface OpsWorksUpdateStackRequest {
  /**
   * @schema OpsWorksUpdateStackRequest#StackId
   */
  readonly stackId?: string;

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
 * Converts an object of type 'OpsWorksUpdateStackRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksUpdateStackRequest(obj: OpsWorksUpdateStackRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
    'Name': obj.name,
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ServiceRoleArn': obj.serviceRoleArn,
    'DefaultInstanceProfileArn': obj.defaultInstanceProfileArn,
    'DefaultOs': obj.defaultOs,
    'HostnameTheme': obj.hostnameTheme,
    'DefaultAvailabilityZone': obj.defaultAvailabilityZone,
    'DefaultSubnetId': obj.defaultSubnetId,
    'CustomJson': obj.customJson,
    'ConfigurationManager': toJson_OpsWorksStackConfigurationManager(obj.configurationManager),
    'ChefConfiguration': toJson_OpsWorksChefConfiguration(obj.chefConfiguration),
    'UseCustomCookbooks': obj.useCustomCookbooks,
    'CustomCookbooksSource': toJson_OpsWorksSource(obj.customCookbooksSource),
    'DefaultSshKeyName': obj.defaultSshKeyName,
    'DefaultRootDeviceType': obj.defaultRootDeviceType,
    'UseOpsworksSecurityGroups': obj.useOpsworksSecurityGroups,
    'AgentVersion': obj.agentVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksUpdateUserProfileRequest
 */
export interface OpsWorksUpdateUserProfileRequest {
  /**
   * @schema OpsWorksUpdateUserProfileRequest#IamUserArn
   */
  readonly iamUserArn?: string;

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
 * Converts an object of type 'OpsWorksUpdateUserProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksUpdateUserProfileRequest(obj: OpsWorksUpdateUserProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IamUserArn': obj.iamUserArn,
    'SshUsername': obj.sshUsername,
    'SshPublicKey': obj.sshPublicKey,
    'AllowSelfManagement': obj.allowSelfManagement,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksUpdateVolumeRequest
 */
export interface OpsWorksUpdateVolumeRequest {
  /**
   * @schema OpsWorksUpdateVolumeRequest#VolumeId
   */
  readonly volumeId?: string;

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
 * Converts an object of type 'OpsWorksUpdateVolumeRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksUpdateVolumeRequest(obj: OpsWorksUpdateVolumeRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeId': obj.volumeId,
    'Name': obj.name,
    'MountPoint': obj.mountPoint,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksStackConfigurationManager' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksStackConfigurationManager(obj: OpsWorksStackConfigurationManager | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksChefConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksChefConfiguration(obj: OpsWorksChefConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ManageBerkshelf': obj.manageBerkshelf,
    'BerkshelfVersion': obj.berkshelfVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksSource(obj: OpsWorksSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Url': obj.url,
    'Username': obj.username,
    'Password': obj.password,
    'SshKey': obj.sshKey,
    'Revision': obj.revision,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDataSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDataSource(obj: OpsWorksDataSource | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Arn': obj.arn,
    'DatabaseName': obj.databaseName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksSslConfiguration
 */
export interface OpsWorksSslConfiguration {
  /**
   * @schema OpsWorksSslConfiguration#Certificate
   */
  readonly certificate?: string;

  /**
   * @schema OpsWorksSslConfiguration#PrivateKey
   */
  readonly privateKey?: string;

  /**
   * @schema OpsWorksSslConfiguration#Chain
   */
  readonly chain?: string;

}

/**
 * Converts an object of type 'OpsWorksSslConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksSslConfiguration(obj: OpsWorksSslConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Certificate': obj.certificate,
    'PrivateKey': obj.privateKey,
    'Chain': obj.chain,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksEnvironmentVariable
 */
export interface OpsWorksEnvironmentVariable {
  /**
   * @schema OpsWorksEnvironmentVariable#Key
   */
  readonly key?: string;

  /**
   * @schema OpsWorksEnvironmentVariable#Value
   */
  readonly value?: string;

  /**
   * @schema OpsWorksEnvironmentVariable#Secure
   */
  readonly secure?: boolean;

}

/**
 * Converts an object of type 'OpsWorksEnvironmentVariable' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksEnvironmentVariable(obj: OpsWorksEnvironmentVariable | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
    'Secure': obj.secure,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksDeploymentCommand
 */
export interface OpsWorksDeploymentCommand {
  /**
   * @schema OpsWorksDeploymentCommand#Name
   */
  readonly name?: string;

  /**
   * @schema OpsWorksDeploymentCommand#Args
   */
  readonly args?: { [key: string]: string[] };

}

/**
 * Converts an object of type 'OpsWorksDeploymentCommand' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDeploymentCommand(obj: OpsWorksDeploymentCommand | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Args': ((obj.args) === undefined) ? undefined : (Object.entries(obj.args).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1]?.map(y => y) }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksBlockDeviceMapping' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksBlockDeviceMapping(obj: OpsWorksBlockDeviceMapping | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeviceName': obj.deviceName,
    'NoDevice': obj.noDevice,
    'VirtualName': obj.virtualName,
    'Ebs': toJson_OpsWorksEbsBlockDevice(obj.ebs),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksCloudWatchLogsConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCloudWatchLogsConfiguration(obj: OpsWorksCloudWatchLogsConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Enabled': obj.enabled,
    'LogStreams': obj.logStreams?.map(y => toJson_OpsWorksCloudWatchLogsLogStream(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema OpsWorksVolumeConfiguration
 */
export interface OpsWorksVolumeConfiguration {
  /**
   * @schema OpsWorksVolumeConfiguration#MountPoint
   */
  readonly mountPoint?: string;

  /**
   * @schema OpsWorksVolumeConfiguration#RaidLevel
   */
  readonly raidLevel?: number;

  /**
   * @schema OpsWorksVolumeConfiguration#NumberOfDisks
   */
  readonly numberOfDisks?: number;

  /**
   * @schema OpsWorksVolumeConfiguration#Size
   */
  readonly size?: number;

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
 * Converts an object of type 'OpsWorksVolumeConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksVolumeConfiguration(obj: OpsWorksVolumeConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'MountPoint': obj.mountPoint,
    'RaidLevel': obj.raidLevel,
    'NumberOfDisks': obj.numberOfDisks,
    'Size': obj.size,
    'VolumeType': obj.volumeType,
    'Iops': obj.iops,
    'Encrypted': obj.encrypted,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksRecipes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksRecipes(obj: OpsWorksRecipes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Setup': obj.setup?.map(y => y),
    'Configure': obj.configure?.map(y => y),
    'Deploy': obj.deploy?.map(y => y),
    'Undeploy': obj.undeploy?.map(y => y),
    'Shutdown': obj.shutdown?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksLifecycleEventConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksLifecycleEventConfiguration(obj: OpsWorksLifecycleEventConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Shutdown': toJson_OpsWorksShutdownEventConfiguration(obj.shutdown),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksAgentVersion' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksAgentVersion(obj: OpsWorksAgentVersion | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Version': obj.version,
    'ConfigurationManager': toJson_OpsWorksStackConfigurationManager(obj.configurationManager),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksApp' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksApp(obj: OpsWorksApp | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AppId': obj.appId,
    'StackId': obj.stackId,
    'Shortname': obj.shortname,
    'Name': obj.name,
    'Description': obj.description,
    'DataSources': obj.dataSources?.map(y => toJson_OpsWorksDataSource(y)),
    'Type': obj.type,
    'AppSource': toJson_OpsWorksSource(obj.appSource),
    'Domains': obj.domains?.map(y => y),
    'EnableSsl': obj.enableSsl,
    'SslConfiguration': toJson_OpsWorksSslConfiguration(obj.sslConfiguration),
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'CreatedAt': obj.createdAt,
    'Environment': obj.environment?.map(y => toJson_OpsWorksEnvironmentVariable(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksCommand' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCommand(obj: OpsWorksCommand | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'CommandId': obj.commandId,
    'InstanceId': obj.instanceId,
    'DeploymentId': obj.deploymentId,
    'CreatedAt': obj.createdAt,
    'AcknowledgedAt': obj.acknowledgedAt,
    'CompletedAt': obj.completedAt,
    'Status': obj.status,
    'ExitCode': obj.exitCode,
    'LogUrl': obj.logUrl,
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksDeployment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksDeployment(obj: OpsWorksDeployment | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DeploymentId': obj.deploymentId,
    'StackId': obj.stackId,
    'AppId': obj.appId,
    'CreatedAt': obj.createdAt,
    'CompletedAt': obj.completedAt,
    'Duration': obj.duration,
    'IamUserArn': obj.iamUserArn,
    'Comment': obj.comment,
    'Command': toJson_OpsWorksDeploymentCommand(obj.command),
    'Status': obj.status,
    'CustomJson': obj.customJson,
    'InstanceIds': obj.instanceIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksEcsCluster' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksEcsCluster(obj: OpsWorksEcsCluster | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EcsClusterArn': obj.ecsClusterArn,
    'EcsClusterName': obj.ecsClusterName,
    'StackId': obj.stackId,
    'RegisteredAt': obj.registeredAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksElasticIp' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksElasticIp(obj: OpsWorksElasticIp | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Ip': obj.ip,
    'Name': obj.name,
    'Domain': obj.domain,
    'Region': obj.region,
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksElasticLoadBalancer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksElasticLoadBalancer(obj: OpsWorksElasticLoadBalancer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ElasticLoadBalancerName': obj.elasticLoadBalancerName,
    'Region': obj.region,
    'DnsName': obj.dnsName,
    'StackId': obj.stackId,
    'LayerId': obj.layerId,
    'VpcId': obj.vpcId,
    'AvailabilityZones': obj.availabilityZones?.map(y => y),
    'SubnetIds': obj.subnetIds?.map(y => y),
    'Ec2InstanceIds': obj.ec2InstanceIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksInstance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksInstance(obj: OpsWorksInstance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'AgentVersion': obj.agentVersion,
    'AmiId': obj.amiId,
    'Architecture': obj.architecture,
    'Arn': obj.arn,
    'AutoScalingType': obj.autoScalingType,
    'AvailabilityZone': obj.availabilityZone,
    'BlockDeviceMappings': obj.blockDeviceMappings?.map(y => toJson_OpsWorksBlockDeviceMapping(y)),
    'CreatedAt': obj.createdAt,
    'EbsOptimized': obj.ebsOptimized,
    'Ec2InstanceId': obj.ec2InstanceId,
    'EcsClusterArn': obj.ecsClusterArn,
    'EcsContainerInstanceArn': obj.ecsContainerInstanceArn,
    'ElasticIp': obj.elasticIp,
    'Hostname': obj.hostname,
    'InfrastructureClass': obj.infrastructureClass,
    'InstallUpdatesOnBoot': obj.installUpdatesOnBoot,
    'InstanceId': obj.instanceId,
    'InstanceProfileArn': obj.instanceProfileArn,
    'InstanceType': obj.instanceType,
    'LastServiceErrorId': obj.lastServiceErrorId,
    'LayerIds': obj.layerIds?.map(y => y),
    'Os': obj.os,
    'Platform': obj.platform,
    'PrivateDns': obj.privateDns,
    'PrivateIp': obj.privateIp,
    'PublicDns': obj.publicDns,
    'PublicIp': obj.publicIp,
    'RegisteredBy': obj.registeredBy,
    'ReportedAgentVersion': obj.reportedAgentVersion,
    'ReportedOs': toJson_OpsWorksReportedOs(obj.reportedOs),
    'RootDeviceType': obj.rootDeviceType,
    'RootDeviceVolumeId': obj.rootDeviceVolumeId,
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'SshHostDsaKeyFingerprint': obj.sshHostDsaKeyFingerprint,
    'SshHostRsaKeyFingerprint': obj.sshHostRsaKeyFingerprint,
    'SshKeyName': obj.sshKeyName,
    'StackId': obj.stackId,
    'Status': obj.status,
    'SubnetId': obj.subnetId,
    'Tenancy': obj.tenancy,
    'VirtualizationType': obj.virtualizationType,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksLayer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksLayer(obj: OpsWorksLayer | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Arn': obj.arn,
    'StackId': obj.stackId,
    'LayerId': obj.layerId,
    'Type': obj.type,
    'Name': obj.name,
    'Shortname': obj.shortname,
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'CloudWatchLogsConfiguration': toJson_OpsWorksCloudWatchLogsConfiguration(obj.cloudWatchLogsConfiguration),
    'CustomInstanceProfileArn': obj.customInstanceProfileArn,
    'CustomJson': obj.customJson,
    'CustomSecurityGroupIds': obj.customSecurityGroupIds?.map(y => y),
    'DefaultSecurityGroupNames': obj.defaultSecurityGroupNames?.map(y => y),
    'Packages': obj.packages?.map(y => y),
    'VolumeConfigurations': obj.volumeConfigurations?.map(y => toJson_OpsWorksVolumeConfiguration(y)),
    'EnableAutoHealing': obj.enableAutoHealing,
    'AutoAssignElasticIps': obj.autoAssignElasticIps,
    'AutoAssignPublicIps': obj.autoAssignPublicIps,
    'DefaultRecipes': toJson_OpsWorksRecipes(obj.defaultRecipes),
    'CustomRecipes': toJson_OpsWorksRecipes(obj.customRecipes),
    'CreatedAt': obj.createdAt,
    'InstallUpdatesOnBoot': obj.installUpdatesOnBoot,
    'UseEbsOptimizedInstances': obj.useEbsOptimizedInstances,
    'LifecycleEventConfiguration': toJson_OpsWorksLifecycleEventConfiguration(obj.lifecycleEventConfiguration),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksLoadBasedAutoScalingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksLoadBasedAutoScalingConfiguration(obj: OpsWorksLoadBasedAutoScalingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LayerId': obj.layerId,
    'Enable': obj.enable,
    'UpScaling': toJson_OpsWorksAutoScalingThresholds(obj.upScaling),
    'DownScaling': toJson_OpsWorksAutoScalingThresholds(obj.downScaling),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksSelfUserProfile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksSelfUserProfile(obj: OpsWorksSelfUserProfile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IamUserArn': obj.iamUserArn,
    'Name': obj.name,
    'SshUsername': obj.sshUsername,
    'SshPublicKey': obj.sshPublicKey,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksOperatingSystem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksOperatingSystem(obj: OpsWorksOperatingSystem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Id': obj.id,
    'Type': obj.type,
    'ConfigurationManagers': obj.configurationManagers?.map(y => toJson_OpsWorksOperatingSystemConfigurationManager(y)),
    'ReportedName': obj.reportedName,
    'ReportedVersion': obj.reportedVersion,
    'Supported': obj.supported,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksPermission' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksPermission(obj: OpsWorksPermission | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
    'IamUserArn': obj.iamUserArn,
    'AllowSsh': obj.allowSsh,
    'AllowSudo': obj.allowSudo,
    'Level': obj.level,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksRaidArray' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksRaidArray(obj: OpsWorksRaidArray | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RaidArrayId': obj.raidArrayId,
    'InstanceId': obj.instanceId,
    'Name': obj.name,
    'RaidLevel': obj.raidLevel,
    'NumberOfDisks': obj.numberOfDisks,
    'Size': obj.size,
    'Device': obj.device,
    'MountPoint': obj.mountPoint,
    'AvailabilityZone': obj.availabilityZone,
    'CreatedAt': obj.createdAt,
    'StackId': obj.stackId,
    'VolumeType': obj.volumeType,
    'Iops': obj.iops,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksRdsDbInstance' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksRdsDbInstance(obj: OpsWorksRdsDbInstance | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RdsDbInstanceArn': obj.rdsDbInstanceArn,
    'DbInstanceIdentifier': obj.dbInstanceIdentifier,
    'DbUser': obj.dbUser,
    'DbPassword': obj.dbPassword,
    'Region': obj.region,
    'Address': obj.address,
    'Engine': obj.engine,
    'StackId': obj.stackId,
    'MissingOnRds': obj.missingOnRds,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksServiceError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksServiceError(obj: OpsWorksServiceError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ServiceErrorId': obj.serviceErrorId,
    'StackId': obj.stackId,
    'InstanceId': obj.instanceId,
    'Type': obj.type,
    'Message': obj.message,
    'CreatedAt': obj.createdAt,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksStackSummary' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksStackSummary(obj: OpsWorksStackSummary | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
    'Name': obj.name,
    'Arn': obj.arn,
    'LayersCount': obj.layersCount,
    'AppsCount': obj.appsCount,
    'InstancesCount': toJson_OpsWorksInstancesCount(obj.instancesCount),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksStack' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksStack(obj: OpsWorksStack | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'StackId': obj.stackId,
    'Name': obj.name,
    'Arn': obj.arn,
    'Region': obj.region,
    'VpcId': obj.vpcId,
    'Attributes': ((obj.attributes) === undefined) ? undefined : (Object.entries(obj.attributes).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'ServiceRoleArn': obj.serviceRoleArn,
    'DefaultInstanceProfileArn': obj.defaultInstanceProfileArn,
    'DefaultOs': obj.defaultOs,
    'HostnameTheme': obj.hostnameTheme,
    'DefaultAvailabilityZone': obj.defaultAvailabilityZone,
    'DefaultSubnetId': obj.defaultSubnetId,
    'CustomJson': obj.customJson,
    'ConfigurationManager': toJson_OpsWorksStackConfigurationManager(obj.configurationManager),
    'ChefConfiguration': toJson_OpsWorksChefConfiguration(obj.chefConfiguration),
    'UseCustomCookbooks': obj.useCustomCookbooks,
    'UseOpsworksSecurityGroups': obj.useOpsworksSecurityGroups,
    'CustomCookbooksSource': toJson_OpsWorksSource(obj.customCookbooksSource),
    'DefaultSshKeyName': obj.defaultSshKeyName,
    'CreatedAt': obj.createdAt,
    'DefaultRootDeviceType': obj.defaultRootDeviceType,
    'AgentVersion': obj.agentVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksTimeBasedAutoScalingConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksTimeBasedAutoScalingConfiguration(obj: OpsWorksTimeBasedAutoScalingConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceId': obj.instanceId,
    'AutoScalingSchedule': toJson_OpsWorksWeeklyAutoScalingSchedule(obj.autoScalingSchedule),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksUserProfile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksUserProfile(obj: OpsWorksUserProfile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'IamUserArn': obj.iamUserArn,
    'Name': obj.name,
    'SshUsername': obj.sshUsername,
    'SshPublicKey': obj.sshPublicKey,
    'AllowSelfManagement': obj.allowSelfManagement,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksVolume' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksVolume(obj: OpsWorksVolume | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'VolumeId': obj.volumeId,
    'Ec2VolumeId': obj.ec2VolumeId,
    'Name': obj.name,
    'RaidArrayId': obj.raidArrayId,
    'InstanceId': obj.instanceId,
    'Status': obj.status,
    'Size': obj.size,
    'Device': obj.device,
    'MountPoint': obj.mountPoint,
    'Region': obj.region,
    'AvailabilityZone': obj.availabilityZone,
    'VolumeType': obj.volumeType,
    'Iops': obj.iops,
    'Encrypted': obj.encrypted,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksTemporaryCredential' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksTemporaryCredential(obj: OpsWorksTemporaryCredential | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Username': obj.username,
    'Password': obj.password,
    'ValidForInMinutes': obj.validForInMinutes,
    'InstanceId': obj.instanceId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksInstanceIdentity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksInstanceIdentity(obj: OpsWorksInstanceIdentity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Document': obj.document,
    'Signature': obj.signature,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksAutoScalingThresholds' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksAutoScalingThresholds(obj: OpsWorksAutoScalingThresholds | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InstanceCount': obj.instanceCount,
    'ThresholdsWaitTime': obj.thresholdsWaitTime,
    'IgnoreMetricsTime': obj.ignoreMetricsTime,
    'CpuThreshold': obj.cpuThreshold,
    'MemoryThreshold': obj.memoryThreshold,
    'LoadThreshold': obj.loadThreshold,
    'Alarms': obj.alarms?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksWeeklyAutoScalingSchedule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksWeeklyAutoScalingSchedule(obj: OpsWorksWeeklyAutoScalingSchedule | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Monday': ((obj.monday) === undefined) ? undefined : (Object.entries(obj.monday).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Tuesday': ((obj.tuesday) === undefined) ? undefined : (Object.entries(obj.tuesday).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Wednesday': ((obj.wednesday) === undefined) ? undefined : (Object.entries(obj.wednesday).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Thursday': ((obj.thursday) === undefined) ? undefined : (Object.entries(obj.thursday).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Friday': ((obj.friday) === undefined) ? undefined : (Object.entries(obj.friday).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Saturday': ((obj.saturday) === undefined) ? undefined : (Object.entries(obj.saturday).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'Sunday': ((obj.sunday) === undefined) ? undefined : (Object.entries(obj.sunday).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksEbsBlockDevice' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksEbsBlockDevice(obj: OpsWorksEbsBlockDevice | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SnapshotId': obj.snapshotId,
    'Iops': obj.iops,
    'VolumeSize': obj.volumeSize,
    'VolumeType': obj.volumeType,
    'DeleteOnTermination': obj.deleteOnTermination,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksCloudWatchLogsLogStream' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksCloudWatchLogsLogStream(obj: OpsWorksCloudWatchLogsLogStream | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LogGroupName': obj.logGroupName,
    'DatetimeFormat': obj.datetimeFormat,
    'TimeZone': obj.timeZone,
    'File': obj.file,
    'FileFingerprintLines': obj.fileFingerprintLines,
    'MultiLineStartPattern': obj.multiLineStartPattern,
    'InitialPosition': obj.initialPosition,
    'Encoding': obj.encoding,
    'BufferDuration': obj.bufferDuration,
    'BatchCount': obj.batchCount,
    'BatchSize': obj.batchSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksShutdownEventConfiguration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksShutdownEventConfiguration(obj: OpsWorksShutdownEventConfiguration | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExecutionTimeout': obj.executionTimeout,
    'DelayUntilElbConnectionsDrained': obj.delayUntilElbConnectionsDrained,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksReportedOs' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksReportedOs(obj: OpsWorksReportedOs | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Family': obj.family,
    'Name': obj.name,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'OpsWorksOperatingSystemConfigurationManager' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksOperatingSystemConfigurationManager(obj: OpsWorksOperatingSystemConfigurationManager | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'OpsWorksInstancesCount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_OpsWorksInstancesCount(obj: OpsWorksInstancesCount | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Assigning': obj.assigning,
    'Booting': obj.booting,
    'ConnectionLost': obj.connectionLost,
    'Deregistering': obj.deregistering,
    'Online': obj.online,
    'Pending': obj.pending,
    'Rebooting': obj.rebooting,
    'Registered': obj.registered,
    'Registering': obj.registering,
    'Requested': obj.requested,
    'RunningSetup': obj.runningSetup,
    'SetupFailed': obj.setupFailed,
    'ShuttingDown': obj.shuttingDown,
    'StartFailed': obj.startFailed,
    'StopFailed': obj.stopFailed,
    'Stopped': obj.stopped,
    'Stopping': obj.stopping,
    'Terminated': obj.terminated,
    'Terminating': obj.terminating,
    'Unassigning': obj.unassigning,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
