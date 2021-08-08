/**
 * @schema EksAssociateEncryptionConfigRequest
 */
export interface EksAssociateEncryptionConfigRequest {
  /**
   * @schema EksAssociateEncryptionConfigRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema EksAssociateEncryptionConfigRequest#encryptionConfig
   */
  readonly encryptionConfig: EksEncryptionConfig[];

  /**
   * @schema EksAssociateEncryptionConfigRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'EksAssociateEncryptionConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksAssociateEncryptionConfigRequest(obj: EksAssociateEncryptionConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusterName': obj.clusterName,
    'encryptionConfig': obj.encryptionConfig?.map(y => toJson_EksEncryptionConfig(y)),
    'clientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksAssociateEncryptionConfigResponse
 */
export interface EksAssociateEncryptionConfigResponse {
  /**
   * @schema EksAssociateEncryptionConfigResponse#update
   */
  readonly update?: EksUpdate;

}

/**
 * Converts an object of type 'EksAssociateEncryptionConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksAssociateEncryptionConfigResponse(obj: EksAssociateEncryptionConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'update': toJson_EksUpdate(obj.update),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksAssociateIdentityProviderConfigRequest
 */
export interface EksAssociateIdentityProviderConfigRequest {
  /**
   * @schema EksAssociateIdentityProviderConfigRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema EksAssociateIdentityProviderConfigRequest#oidc
   */
  readonly oidc: EksOidcIdentityProviderConfigRequest;

  /**
   * @schema EksAssociateIdentityProviderConfigRequest#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema EksAssociateIdentityProviderConfigRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'EksAssociateIdentityProviderConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksAssociateIdentityProviderConfigRequest(obj: EksAssociateIdentityProviderConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusterName': obj.clusterName,
    'oidc': toJson_EksOidcIdentityProviderConfigRequest(obj.oidc),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'clientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksAssociateIdentityProviderConfigResponse
 */
export interface EksAssociateIdentityProviderConfigResponse {
  /**
   * @schema EksAssociateIdentityProviderConfigResponse#update
   */
  readonly update?: EksUpdate;

  /**
   * @schema EksAssociateIdentityProviderConfigResponse#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'EksAssociateIdentityProviderConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksAssociateIdentityProviderConfigResponse(obj: EksAssociateIdentityProviderConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'update': toJson_EksUpdate(obj.update),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksCreateAddonRequest
 */
export interface EksCreateAddonRequest {
  /**
   * @schema EksCreateAddonRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema EksCreateAddonRequest#addonName
   */
  readonly addonName: string;

  /**
   * @schema EksCreateAddonRequest#addonVersion
   */
  readonly addonVersion?: string;

  /**
   * @schema EksCreateAddonRequest#serviceAccountRoleArn
   */
  readonly serviceAccountRoleArn?: string;

  /**
   * @schema EksCreateAddonRequest#resolveConflicts
   */
  readonly resolveConflicts?: string;

  /**
   * @schema EksCreateAddonRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema EksCreateAddonRequest#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'EksCreateAddonRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksCreateAddonRequest(obj: EksCreateAddonRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusterName': obj.clusterName,
    'addonName': obj.addonName,
    'addonVersion': obj.addonVersion,
    'serviceAccountRoleArn': obj.serviceAccountRoleArn,
    'resolveConflicts': obj.resolveConflicts,
    'clientRequestToken': obj.clientRequestToken,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksCreateAddonResponse
 */
export interface EksCreateAddonResponse {
  /**
   * @schema EksCreateAddonResponse#addon
   */
  readonly addon?: EksAddon;

}

/**
 * Converts an object of type 'EksCreateAddonResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksCreateAddonResponse(obj: EksCreateAddonResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'addon': toJson_EksAddon(obj.addon),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksCreateClusterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksCreateClusterRequest(obj: EksCreateClusterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'version': obj.version,
    'roleArn': obj.roleArn,
    'resourcesVpcConfig': toJson_EksVpcConfigRequest(obj.resourcesVpcConfig),
    'kubernetesNetworkConfig': toJson_EksKubernetesNetworkConfigRequest(obj.kubernetesNetworkConfig),
    'logging': toJson_EksLogging(obj.logging),
    'clientRequestToken': obj.clientRequestToken,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'encryptionConfig': obj.encryptionConfig?.map(y => toJson_EksEncryptionConfig(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksCreateClusterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksCreateClusterResponse(obj: EksCreateClusterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': toJson_EksCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksCreateFargateProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksCreateFargateProfileRequest(obj: EksCreateFargateProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fargateProfileName': obj.fargateProfileName,
    'clusterName': obj.clusterName,
    'podExecutionRoleArn': obj.podExecutionRoleArn,
    'subnets': obj.subnets?.map(y => y),
    'selectors': obj.selectors?.map(y => toJson_EksFargateProfileSelector(y)),
    'clientRequestToken': obj.clientRequestToken,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksCreateFargateProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksCreateFargateProfileResponse(obj: EksCreateFargateProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fargateProfile': toJson_EksFargateProfile(obj.fargateProfile),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema EksCreateNodegroupRequest#taints
   */
  readonly taints?: EksTaint[];

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
   * @schema EksCreateNodegroupRequest#updateConfig
   */
  readonly updateConfig?: EksNodegroupUpdateConfig;

  /**
   * @schema EksCreateNodegroupRequest#capacityType
   */
  readonly capacityType?: string;

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
 * Converts an object of type 'EksCreateNodegroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksCreateNodegroupRequest(obj: EksCreateNodegroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusterName': obj.clusterName,
    'nodegroupName': obj.nodegroupName,
    'scalingConfig': toJson_EksNodegroupScalingConfig(obj.scalingConfig),
    'diskSize': obj.diskSize,
    'subnets': obj.subnets?.map(y => y),
    'instanceTypes': obj.instanceTypes?.map(y => y),
    'amiType': obj.amiType,
    'remoteAccess': toJson_EksRemoteAccessConfig(obj.remoteAccess),
    'nodeRole': obj.nodeRole,
    'labels': ((obj.labels) === undefined) ? undefined : (Object.entries(obj.labels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'taints': obj.taints?.map(y => toJson_EksTaint(y)),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'clientRequestToken': obj.clientRequestToken,
    'launchTemplate': toJson_EksLaunchTemplateSpecification(obj.launchTemplate),
    'updateConfig': toJson_EksNodegroupUpdateConfig(obj.updateConfig),
    'capacityType': obj.capacityType,
    'version': obj.version,
    'releaseVersion': obj.releaseVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksCreateNodegroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksCreateNodegroupResponse(obj: EksCreateNodegroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nodegroup': toJson_EksNodegroup(obj.nodegroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksDeleteAddonRequest
 */
export interface EksDeleteAddonRequest {
  /**
   * @schema EksDeleteAddonRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema EksDeleteAddonRequest#addonName
   */
  readonly addonName: string;

}

/**
 * Converts an object of type 'EksDeleteAddonRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksDeleteAddonRequest(obj: EksDeleteAddonRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusterName': obj.clusterName,
    'addonName': obj.addonName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksDeleteAddonResponse
 */
export interface EksDeleteAddonResponse {
  /**
   * @schema EksDeleteAddonResponse#addon
   */
  readonly addon?: EksAddon;

}

/**
 * Converts an object of type 'EksDeleteAddonResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksDeleteAddonResponse(obj: EksDeleteAddonResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'addon': toJson_EksAddon(obj.addon),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksDeleteClusterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksDeleteClusterRequest(obj: EksDeleteClusterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksDeleteClusterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksDeleteClusterResponse(obj: EksDeleteClusterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': toJson_EksCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksDeleteFargateProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksDeleteFargateProfileRequest(obj: EksDeleteFargateProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusterName': obj.clusterName,
    'fargateProfileName': obj.fargateProfileName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksDeleteFargateProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksDeleteFargateProfileResponse(obj: EksDeleteFargateProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fargateProfile': toJson_EksFargateProfile(obj.fargateProfile),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksDeleteNodegroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksDeleteNodegroupRequest(obj: EksDeleteNodegroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusterName': obj.clusterName,
    'nodegroupName': obj.nodegroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksDeleteNodegroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksDeleteNodegroupResponse(obj: EksDeleteNodegroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nodegroup': toJson_EksNodegroup(obj.nodegroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksDescribeAddonRequest
 */
export interface EksDescribeAddonRequest {
  /**
   * @schema EksDescribeAddonRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema EksDescribeAddonRequest#addonName
   */
  readonly addonName: string;

}

/**
 * Converts an object of type 'EksDescribeAddonRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksDescribeAddonRequest(obj: EksDescribeAddonRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusterName': obj.clusterName,
    'addonName': obj.addonName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksDescribeAddonResponse
 */
export interface EksDescribeAddonResponse {
  /**
   * @schema EksDescribeAddonResponse#addon
   */
  readonly addon?: EksAddon;

}

/**
 * Converts an object of type 'EksDescribeAddonResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksDescribeAddonResponse(obj: EksDescribeAddonResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'addon': toJson_EksAddon(obj.addon),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksDescribeAddonVersionsRequest
 */
export interface EksDescribeAddonVersionsRequest {
  /**
   * @schema EksDescribeAddonVersionsRequest#kubernetesVersion
   */
  readonly kubernetesVersion?: string;

  /**
   * @schema EksDescribeAddonVersionsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EksDescribeAddonVersionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema EksDescribeAddonVersionsRequest#addonName
   */
  readonly addonName?: string;

}

/**
 * Converts an object of type 'EksDescribeAddonVersionsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksDescribeAddonVersionsRequest(obj: EksDescribeAddonVersionsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'kubernetesVersion': obj.kubernetesVersion,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
    'addonName': obj.addonName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksDescribeAddonVersionsResponse
 */
export interface EksDescribeAddonVersionsResponse {
  /**
   * @schema EksDescribeAddonVersionsResponse#addons
   */
  readonly addons?: EksAddonInfo[];

  /**
   * @schema EksDescribeAddonVersionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EksDescribeAddonVersionsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksDescribeAddonVersionsResponse(obj: EksDescribeAddonVersionsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'addons': obj.addons?.map(y => toJson_EksAddonInfo(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksDescribeClusterRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksDescribeClusterRequest(obj: EksDescribeClusterRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksDescribeClusterResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksDescribeClusterResponse(obj: EksDescribeClusterResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'cluster': toJson_EksCluster(obj.cluster),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksDescribeFargateProfileRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksDescribeFargateProfileRequest(obj: EksDescribeFargateProfileRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusterName': obj.clusterName,
    'fargateProfileName': obj.fargateProfileName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksDescribeFargateProfileResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksDescribeFargateProfileResponse(obj: EksDescribeFargateProfileResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fargateProfile': toJson_EksFargateProfile(obj.fargateProfile),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksDescribeIdentityProviderConfigRequest
 */
export interface EksDescribeIdentityProviderConfigRequest {
  /**
   * @schema EksDescribeIdentityProviderConfigRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema EksDescribeIdentityProviderConfigRequest#identityProviderConfig
   */
  readonly identityProviderConfig: EksIdentityProviderConfig;

}

/**
 * Converts an object of type 'EksDescribeIdentityProviderConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksDescribeIdentityProviderConfigRequest(obj: EksDescribeIdentityProviderConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusterName': obj.clusterName,
    'identityProviderConfig': toJson_EksIdentityProviderConfig(obj.identityProviderConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksDescribeIdentityProviderConfigResponse
 */
export interface EksDescribeIdentityProviderConfigResponse {
  /**
   * @schema EksDescribeIdentityProviderConfigResponse#identityProviderConfig
   */
  readonly identityProviderConfig?: EksIdentityProviderConfigResponse;

}

/**
 * Converts an object of type 'EksDescribeIdentityProviderConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksDescribeIdentityProviderConfigResponse(obj: EksDescribeIdentityProviderConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'identityProviderConfig': toJson_EksIdentityProviderConfigResponse(obj.identityProviderConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksDescribeNodegroupRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksDescribeNodegroupRequest(obj: EksDescribeNodegroupRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusterName': obj.clusterName,
    'nodegroupName': obj.nodegroupName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksDescribeNodegroupResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksDescribeNodegroupResponse(obj: EksDescribeNodegroupResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nodegroup': toJson_EksNodegroup(obj.nodegroup),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

  /**
   * @schema EksDescribeUpdateRequest#addonName
   */
  readonly addonName?: string;

}

/**
 * Converts an object of type 'EksDescribeUpdateRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksDescribeUpdateRequest(obj: EksDescribeUpdateRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'updateId': obj.updateId,
    'nodegroupName': obj.nodegroupName,
    'addonName': obj.addonName,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksDescribeUpdateResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksDescribeUpdateResponse(obj: EksDescribeUpdateResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'update': toJson_EksUpdate(obj.update),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksDisassociateIdentityProviderConfigRequest
 */
export interface EksDisassociateIdentityProviderConfigRequest {
  /**
   * @schema EksDisassociateIdentityProviderConfigRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema EksDisassociateIdentityProviderConfigRequest#identityProviderConfig
   */
  readonly identityProviderConfig: EksIdentityProviderConfig;

  /**
   * @schema EksDisassociateIdentityProviderConfigRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'EksDisassociateIdentityProviderConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksDisassociateIdentityProviderConfigRequest(obj: EksDisassociateIdentityProviderConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusterName': obj.clusterName,
    'identityProviderConfig': toJson_EksIdentityProviderConfig(obj.identityProviderConfig),
    'clientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksDisassociateIdentityProviderConfigResponse
 */
export interface EksDisassociateIdentityProviderConfigResponse {
  /**
   * @schema EksDisassociateIdentityProviderConfigResponse#update
   */
  readonly update?: EksUpdate;

}

/**
 * Converts an object of type 'EksDisassociateIdentityProviderConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksDisassociateIdentityProviderConfigResponse(obj: EksDisassociateIdentityProviderConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'update': toJson_EksUpdate(obj.update),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksListAddonsRequest
 */
export interface EksListAddonsRequest {
  /**
   * @schema EksListAddonsRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema EksListAddonsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EksListAddonsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EksListAddonsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksListAddonsRequest(obj: EksListAddonsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusterName': obj.clusterName,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksListAddonsResponse
 */
export interface EksListAddonsResponse {
  /**
   * @schema EksListAddonsResponse#addons
   */
  readonly addons?: string[];

  /**
   * @schema EksListAddonsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EksListAddonsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksListAddonsResponse(obj: EksListAddonsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'addons': obj.addons?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksListClustersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksListClustersRequest(obj: EksListClustersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksListClustersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksListClustersResponse(obj: EksListClustersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusters': obj.clusters?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksListFargateProfilesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksListFargateProfilesRequest(obj: EksListFargateProfilesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusterName': obj.clusterName,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksListFargateProfilesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksListFargateProfilesResponse(obj: EksListFargateProfilesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fargateProfileNames': obj.fargateProfileNames?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksListIdentityProviderConfigsRequest
 */
export interface EksListIdentityProviderConfigsRequest {
  /**
   * @schema EksListIdentityProviderConfigsRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema EksListIdentityProviderConfigsRequest#maxResults
   */
  readonly maxResults?: number;

  /**
   * @schema EksListIdentityProviderConfigsRequest#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EksListIdentityProviderConfigsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksListIdentityProviderConfigsRequest(obj: EksListIdentityProviderConfigsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusterName': obj.clusterName,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksListIdentityProviderConfigsResponse
 */
export interface EksListIdentityProviderConfigsResponse {
  /**
   * @schema EksListIdentityProviderConfigsResponse#identityProviderConfigs
   */
  readonly identityProviderConfigs?: EksIdentityProviderConfig[];

  /**
   * @schema EksListIdentityProviderConfigsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'EksListIdentityProviderConfigsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksListIdentityProviderConfigsResponse(obj: EksListIdentityProviderConfigsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'identityProviderConfigs': obj.identityProviderConfigs?.map(y => toJson_EksIdentityProviderConfig(y)),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksListNodegroupsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksListNodegroupsRequest(obj: EksListNodegroupsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusterName': obj.clusterName,
    'maxResults': obj.maxResults,
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksListNodegroupsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksListNodegroupsResponse(obj: EksListNodegroupsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nodegroups': obj.nodegroups?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksListTagsForResourceRequest(obj: EksListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksListTagsForResourceResponse(obj: EksListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema EksListUpdatesRequest#addonName
   */
  readonly addonName?: string;

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
 * Converts an object of type 'EksListUpdatesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksListUpdatesRequest(obj: EksListUpdatesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'nodegroupName': obj.nodegroupName,
    'addonName': obj.addonName,
    'nextToken': obj.nextToken,
    'maxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksListUpdatesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksListUpdatesResponse(obj: EksListUpdatesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'updateIds': obj.updateIds?.map(y => y),
    'nextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksTagResourceRequest(obj: EksTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksTagResourceResponse
 */
export interface EksTagResourceResponse {
}

/**
 * Converts an object of type 'EksTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksTagResourceResponse(obj: EksTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksUntagResourceRequest(obj: EksUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resourceArn': obj.resourceArn,
    'tagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksUntagResourceResponse
 */
export interface EksUntagResourceResponse {
}

/**
 * Converts an object of type 'EksUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksUntagResourceResponse(obj: EksUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksUpdateAddonRequest
 */
export interface EksUpdateAddonRequest {
  /**
   * @schema EksUpdateAddonRequest#clusterName
   */
  readonly clusterName: string;

  /**
   * @schema EksUpdateAddonRequest#addonName
   */
  readonly addonName: string;

  /**
   * @schema EksUpdateAddonRequest#addonVersion
   */
  readonly addonVersion?: string;

  /**
   * @schema EksUpdateAddonRequest#serviceAccountRoleArn
   */
  readonly serviceAccountRoleArn?: string;

  /**
   * @schema EksUpdateAddonRequest#resolveConflicts
   */
  readonly resolveConflicts?: string;

  /**
   * @schema EksUpdateAddonRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'EksUpdateAddonRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksUpdateAddonRequest(obj: EksUpdateAddonRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusterName': obj.clusterName,
    'addonName': obj.addonName,
    'addonVersion': obj.addonVersion,
    'serviceAccountRoleArn': obj.serviceAccountRoleArn,
    'resolveConflicts': obj.resolveConflicts,
    'clientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksUpdateAddonResponse
 */
export interface EksUpdateAddonResponse {
  /**
   * @schema EksUpdateAddonResponse#update
   */
  readonly update?: EksUpdate;

}

/**
 * Converts an object of type 'EksUpdateAddonResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksUpdateAddonResponse(obj: EksUpdateAddonResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'update': toJson_EksUpdate(obj.update),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksUpdateClusterConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksUpdateClusterConfigRequest(obj: EksUpdateClusterConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'resourcesVpcConfig': toJson_EksVpcConfigRequest(obj.resourcesVpcConfig),
    'logging': toJson_EksLogging(obj.logging),
    'clientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksUpdateClusterConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksUpdateClusterConfigResponse(obj: EksUpdateClusterConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'update': toJson_EksUpdate(obj.update),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksUpdateClusterVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksUpdateClusterVersionRequest(obj: EksUpdateClusterVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'version': obj.version,
    'clientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksUpdateClusterVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksUpdateClusterVersionResponse(obj: EksUpdateClusterVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'update': toJson_EksUpdate(obj.update),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema EksUpdateNodegroupConfigRequest#taints
   */
  readonly taints?: EksUpdateTaintsPayload;

  /**
   * @schema EksUpdateNodegroupConfigRequest#scalingConfig
   */
  readonly scalingConfig?: EksNodegroupScalingConfig;

  /**
   * @schema EksUpdateNodegroupConfigRequest#updateConfig
   */
  readonly updateConfig?: EksNodegroupUpdateConfig;

  /**
   * @schema EksUpdateNodegroupConfigRequest#clientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'EksUpdateNodegroupConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksUpdateNodegroupConfigRequest(obj: EksUpdateNodegroupConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusterName': obj.clusterName,
    'nodegroupName': obj.nodegroupName,
    'labels': toJson_EksUpdateLabelsPayload(obj.labels),
    'taints': toJson_EksUpdateTaintsPayload(obj.taints),
    'scalingConfig': toJson_EksNodegroupScalingConfig(obj.scalingConfig),
    'updateConfig': toJson_EksNodegroupUpdateConfig(obj.updateConfig),
    'clientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksUpdateNodegroupConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksUpdateNodegroupConfigResponse(obj: EksUpdateNodegroupConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'update': toJson_EksUpdate(obj.update),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksUpdateNodegroupVersionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksUpdateNodegroupVersionRequest(obj: EksUpdateNodegroupVersionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusterName': obj.clusterName,
    'nodegroupName': obj.nodegroupName,
    'version': obj.version,
    'releaseVersion': obj.releaseVersion,
    'launchTemplate': toJson_EksLaunchTemplateSpecification(obj.launchTemplate),
    'force': obj.force,
    'clientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksUpdateNodegroupVersionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksUpdateNodegroupVersionResponse(obj: EksUpdateNodegroupVersionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'update': toJson_EksUpdate(obj.update),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksEncryptionConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksEncryptionConfig(obj: EksEncryptionConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'resources': obj.resources?.map(y => y),
    'provider': toJson_EksProvider(obj.provider),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksUpdate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksUpdate(obj: EksUpdate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'id': obj.id,
    'status': obj.status,
    'type': obj.type,
    'params': obj.params?.map(y => toJson_EksUpdateParam(y)),
    'createdAt': obj.createdAt,
    'errors': obj.errors?.map(y => toJson_EksErrorDetail(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksOidcIdentityProviderConfigRequest
 */
export interface EksOidcIdentityProviderConfigRequest {
  /**
   * @schema EksOidcIdentityProviderConfigRequest#identityProviderConfigName
   */
  readonly identityProviderConfigName: string;

  /**
   * @schema EksOidcIdentityProviderConfigRequest#issuerUrl
   */
  readonly issuerUrl: string;

  /**
   * @schema EksOidcIdentityProviderConfigRequest#clientId
   */
  readonly clientId: string;

  /**
   * @schema EksOidcIdentityProviderConfigRequest#usernameClaim
   */
  readonly usernameClaim?: string;

  /**
   * @schema EksOidcIdentityProviderConfigRequest#usernamePrefix
   */
  readonly usernamePrefix?: string;

  /**
   * @schema EksOidcIdentityProviderConfigRequest#groupsClaim
   */
  readonly groupsClaim?: string;

  /**
   * @schema EksOidcIdentityProviderConfigRequest#groupsPrefix
   */
  readonly groupsPrefix?: string;

  /**
   * @schema EksOidcIdentityProviderConfigRequest#requiredClaims
   */
  readonly requiredClaims?: { [key: string]: string };

}

/**
 * Converts an object of type 'EksOidcIdentityProviderConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksOidcIdentityProviderConfigRequest(obj: EksOidcIdentityProviderConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'identityProviderConfigName': obj.identityProviderConfigName,
    'issuerUrl': obj.issuerUrl,
    'clientId': obj.clientId,
    'usernameClaim': obj.usernameClaim,
    'usernamePrefix': obj.usernamePrefix,
    'groupsClaim': obj.groupsClaim,
    'groupsPrefix': obj.groupsPrefix,
    'requiredClaims': ((obj.requiredClaims) === undefined) ? undefined : (Object.entries(obj.requiredClaims).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksAddon
 */
export interface EksAddon {
  /**
   * @schema EksAddon#addonName
   */
  readonly addonName?: string;

  /**
   * @schema EksAddon#clusterName
   */
  readonly clusterName?: string;

  /**
   * @schema EksAddon#status
   */
  readonly status?: string;

  /**
   * @schema EksAddon#addonVersion
   */
  readonly addonVersion?: string;

  /**
   * @schema EksAddon#health
   */
  readonly health?: EksAddonHealth;

  /**
   * @schema EksAddon#addonArn
   */
  readonly addonArn?: string;

  /**
   * @schema EksAddon#createdAt
   */
  readonly createdAt?: string;

  /**
   * @schema EksAddon#modifiedAt
   */
  readonly modifiedAt?: string;

  /**
   * @schema EksAddon#serviceAccountRoleArn
   */
  readonly serviceAccountRoleArn?: string;

  /**
   * @schema EksAddon#tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * Converts an object of type 'EksAddon' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksAddon(obj: EksAddon | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'addonName': obj.addonName,
    'clusterName': obj.clusterName,
    'status': obj.status,
    'addonVersion': obj.addonVersion,
    'health': toJson_EksAddonHealth(obj.health),
    'addonArn': obj.addonArn,
    'createdAt': obj.createdAt,
    'modifiedAt': obj.modifiedAt,
    'serviceAccountRoleArn': obj.serviceAccountRoleArn,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksVpcConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksVpcConfigRequest(obj: EksVpcConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'subnetIds': obj.subnetIds?.map(y => y),
    'securityGroupIds': obj.securityGroupIds?.map(y => y),
    'endpointPublicAccess': obj.endpointPublicAccess,
    'endpointPrivateAccess': obj.endpointPrivateAccess,
    'publicAccessCidrs': obj.publicAccessCidrs?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksKubernetesNetworkConfigRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksKubernetesNetworkConfigRequest(obj: EksKubernetesNetworkConfigRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceIpv4Cidr': obj.serviceIpv4Cidr,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksLogging' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksLogging(obj: EksLogging | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusterLogging': obj.clusterLogging?.map(y => toJson_EksLogSetup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksCluster' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksCluster(obj: EksCluster | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'arn': obj.arn,
    'createdAt': obj.createdAt,
    'version': obj.version,
    'endpoint': obj.endpoint,
    'roleArn': obj.roleArn,
    'resourcesVpcConfig': toJson_EksVpcConfigResponse(obj.resourcesVpcConfig),
    'kubernetesNetworkConfig': toJson_EksKubernetesNetworkConfigResponse(obj.kubernetesNetworkConfig),
    'logging': toJson_EksLogging(obj.logging),
    'identity': toJson_EksIdentity(obj.identity),
    'status': obj.status,
    'certificateAuthority': toJson_EksCertificate(obj.certificateAuthority),
    'clientRequestToken': obj.clientRequestToken,
    'platformVersion': obj.platformVersion,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'encryptionConfig': obj.encryptionConfig?.map(y => toJson_EksEncryptionConfig(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksFargateProfileSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksFargateProfileSelector(obj: EksFargateProfileSelector | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'namespace': obj.namespace,
    'labels': ((obj.labels) === undefined) ? undefined : (Object.entries(obj.labels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksFargateProfile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksFargateProfile(obj: EksFargateProfile | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'fargateProfileName': obj.fargateProfileName,
    'fargateProfileArn': obj.fargateProfileArn,
    'clusterName': obj.clusterName,
    'createdAt': obj.createdAt,
    'podExecutionRoleArn': obj.podExecutionRoleArn,
    'subnets': obj.subnets?.map(y => y),
    'selectors': obj.selectors?.map(y => toJson_EksFargateProfileSelector(y)),
    'status': obj.status,
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksNodegroupScalingConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksNodegroupScalingConfig(obj: EksNodegroupScalingConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'minSize': obj.minSize,
    'maxSize': obj.maxSize,
    'desiredSize': obj.desiredSize,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksRemoteAccessConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksRemoteAccessConfig(obj: EksRemoteAccessConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ec2SshKey': obj.ec2SshKey,
    'sourceSecurityGroups': obj.sourceSecurityGroups?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksTaint
 */
export interface EksTaint {
  /**
   * @schema EksTaint#key
   */
  readonly key?: string;

  /**
   * @schema EksTaint#value
   */
  readonly value?: string;

  /**
   * @schema EksTaint#effect
   */
  readonly effect?: string;

}

/**
 * Converts an object of type 'EksTaint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksTaint(obj: EksTaint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'key': obj.key,
    'value': obj.value,
    'effect': obj.effect,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksLaunchTemplateSpecification' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksLaunchTemplateSpecification(obj: EksLaunchTemplateSpecification | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
    'version': obj.version,
    'id': obj.id,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksNodegroupUpdateConfig
 */
export interface EksNodegroupUpdateConfig {
  /**
   * @schema EksNodegroupUpdateConfig#maxUnavailable
   */
  readonly maxUnavailable?: number;

  /**
   * @schema EksNodegroupUpdateConfig#maxUnavailablePercentage
   */
  readonly maxUnavailablePercentage?: number;

}

/**
 * Converts an object of type 'EksNodegroupUpdateConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksNodegroupUpdateConfig(obj: EksNodegroupUpdateConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'maxUnavailable': obj.maxUnavailable,
    'maxUnavailablePercentage': obj.maxUnavailablePercentage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
   * @schema EksNodegroup#capacityType
   */
  readonly capacityType?: string;

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
   * @schema EksNodegroup#taints
   */
  readonly taints?: EksTaint[];

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
   * @schema EksNodegroup#updateConfig
   */
  readonly updateConfig?: EksNodegroupUpdateConfig;

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
 * Converts an object of type 'EksNodegroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksNodegroup(obj: EksNodegroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'nodegroupName': obj.nodegroupName,
    'nodegroupArn': obj.nodegroupArn,
    'clusterName': obj.clusterName,
    'version': obj.version,
    'releaseVersion': obj.releaseVersion,
    'createdAt': obj.createdAt,
    'modifiedAt': obj.modifiedAt,
    'status': obj.status,
    'capacityType': obj.capacityType,
    'scalingConfig': toJson_EksNodegroupScalingConfig(obj.scalingConfig),
    'instanceTypes': obj.instanceTypes?.map(y => y),
    'subnets': obj.subnets?.map(y => y),
    'remoteAccess': toJson_EksRemoteAccessConfig(obj.remoteAccess),
    'amiType': obj.amiType,
    'nodeRole': obj.nodeRole,
    'labels': ((obj.labels) === undefined) ? undefined : (Object.entries(obj.labels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'taints': obj.taints?.map(y => toJson_EksTaint(y)),
    'resources': toJson_EksNodegroupResources(obj.resources),
    'diskSize': obj.diskSize,
    'health': toJson_EksNodegroupHealth(obj.health),
    'updateConfig': toJson_EksNodegroupUpdateConfig(obj.updateConfig),
    'launchTemplate': toJson_EksLaunchTemplateSpecification(obj.launchTemplate),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksAddonInfo
 */
export interface EksAddonInfo {
  /**
   * @schema EksAddonInfo#addonName
   */
  readonly addonName?: string;

  /**
   * @schema EksAddonInfo#type
   */
  readonly type?: string;

  /**
   * @schema EksAddonInfo#addonVersions
   */
  readonly addonVersions?: EksAddonVersionInfo[];

}

/**
 * Converts an object of type 'EksAddonInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksAddonInfo(obj: EksAddonInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'addonName': obj.addonName,
    'type': obj.type,
    'addonVersions': obj.addonVersions?.map(y => toJson_EksAddonVersionInfo(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksIdentityProviderConfig
 */
export interface EksIdentityProviderConfig {
  /**
   * @schema EksIdentityProviderConfig#type
   */
  readonly type: string;

  /**
   * @schema EksIdentityProviderConfig#name
   */
  readonly name: string;

}

/**
 * Converts an object of type 'EksIdentityProviderConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksIdentityProviderConfig(obj: EksIdentityProviderConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksIdentityProviderConfigResponse
 */
export interface EksIdentityProviderConfigResponse {
  /**
   * @schema EksIdentityProviderConfigResponse#oidc
   */
  readonly oidc?: EksOidcIdentityProviderConfig;

}

/**
 * Converts an object of type 'EksIdentityProviderConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksIdentityProviderConfigResponse(obj: EksIdentityProviderConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'oidc': toJson_EksOidcIdentityProviderConfig(obj.oidc),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksUpdateLabelsPayload' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksUpdateLabelsPayload(obj: EksUpdateLabelsPayload | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'addOrUpdateLabels': ((obj.addOrUpdateLabels) === undefined) ? undefined : (Object.entries(obj.addOrUpdateLabels).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'removeLabels': obj.removeLabels?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksUpdateTaintsPayload
 */
export interface EksUpdateTaintsPayload {
  /**
   * @schema EksUpdateTaintsPayload#addOrUpdateTaints
   */
  readonly addOrUpdateTaints?: EksTaint[];

  /**
   * @schema EksUpdateTaintsPayload#removeTaints
   */
  readonly removeTaints?: EksTaint[];

}

/**
 * Converts an object of type 'EksUpdateTaintsPayload' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksUpdateTaintsPayload(obj: EksUpdateTaintsPayload | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'addOrUpdateTaints': obj.addOrUpdateTaints?.map(y => toJson_EksTaint(y)),
    'removeTaints': obj.removeTaints?.map(y => toJson_EksTaint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksProvider' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksProvider(obj: EksProvider | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'keyArn': obj.keyArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksUpdateParam' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksUpdateParam(obj: EksUpdateParam | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'type': obj.type,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksErrorDetail' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksErrorDetail(obj: EksErrorDetail | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'errorCode': obj.errorCode,
    'errorMessage': obj.errorMessage,
    'resourceIds': obj.resourceIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksAddonHealth
 */
export interface EksAddonHealth {
  /**
   * @schema EksAddonHealth#issues
   */
  readonly issues?: EksAddonIssue[];

}

/**
 * Converts an object of type 'EksAddonHealth' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksAddonHealth(obj: EksAddonHealth | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'issues': obj.issues?.map(y => toJson_EksAddonIssue(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksLogSetup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksLogSetup(obj: EksLogSetup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'types': obj.types?.map(y => y),
    'enabled': obj.enabled,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksVpcConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksVpcConfigResponse(obj: EksVpcConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'subnetIds': obj.subnetIds?.map(y => y),
    'securityGroupIds': obj.securityGroupIds?.map(y => y),
    'clusterSecurityGroupId': obj.clusterSecurityGroupId,
    'vpcId': obj.vpcId,
    'endpointPublicAccess': obj.endpointPublicAccess,
    'endpointPrivateAccess': obj.endpointPrivateAccess,
    'publicAccessCidrs': obj.publicAccessCidrs?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksKubernetesNetworkConfigResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksKubernetesNetworkConfigResponse(obj: EksKubernetesNetworkConfigResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'serviceIpv4Cidr': obj.serviceIpv4Cidr,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksIdentity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksIdentity(obj: EksIdentity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'oidc': toJson_Eksoidc(obj.oidc),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksCertificate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksCertificate(obj: EksCertificate | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'data': obj.data,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksNodegroupResources' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksNodegroupResources(obj: EksNodegroupResources | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'autoScalingGroups': obj.autoScalingGroups?.map(y => toJson_EksAutoScalingGroup(y)),
    'remoteAccessSecurityGroup': obj.remoteAccessSecurityGroup,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksNodegroupHealth' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksNodegroupHealth(obj: EksNodegroupHealth | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'issues': obj.issues?.map(y => toJson_EksIssue(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksAddonVersionInfo
 */
export interface EksAddonVersionInfo {
  /**
   * @schema EksAddonVersionInfo#addonVersion
   */
  readonly addonVersion?: string;

  /**
   * @schema EksAddonVersionInfo#architecture
   */
  readonly architecture?: string[];

  /**
   * @schema EksAddonVersionInfo#compatibilities
   */
  readonly compatibilities?: EksCompatibility[];

}

/**
 * Converts an object of type 'EksAddonVersionInfo' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksAddonVersionInfo(obj: EksAddonVersionInfo | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'addonVersion': obj.addonVersion,
    'architecture': obj.architecture?.map(y => y),
    'compatibilities': obj.compatibilities?.map(y => toJson_EksCompatibility(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksOidcIdentityProviderConfig
 */
export interface EksOidcIdentityProviderConfig {
  /**
   * @schema EksOidcIdentityProviderConfig#identityProviderConfigName
   */
  readonly identityProviderConfigName?: string;

  /**
   * @schema EksOidcIdentityProviderConfig#identityProviderConfigArn
   */
  readonly identityProviderConfigArn?: string;

  /**
   * @schema EksOidcIdentityProviderConfig#clusterName
   */
  readonly clusterName?: string;

  /**
   * @schema EksOidcIdentityProviderConfig#issuerUrl
   */
  readonly issuerUrl?: string;

  /**
   * @schema EksOidcIdentityProviderConfig#clientId
   */
  readonly clientId?: string;

  /**
   * @schema EksOidcIdentityProviderConfig#usernameClaim
   */
  readonly usernameClaim?: string;

  /**
   * @schema EksOidcIdentityProviderConfig#usernamePrefix
   */
  readonly usernamePrefix?: string;

  /**
   * @schema EksOidcIdentityProviderConfig#groupsClaim
   */
  readonly groupsClaim?: string;

  /**
   * @schema EksOidcIdentityProviderConfig#groupsPrefix
   */
  readonly groupsPrefix?: string;

  /**
   * @schema EksOidcIdentityProviderConfig#requiredClaims
   */
  readonly requiredClaims?: { [key: string]: string };

  /**
   * @schema EksOidcIdentityProviderConfig#tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema EksOidcIdentityProviderConfig#status
   */
  readonly status?: string;

}

/**
 * Converts an object of type 'EksOidcIdentityProviderConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksOidcIdentityProviderConfig(obj: EksOidcIdentityProviderConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'identityProviderConfigName': obj.identityProviderConfigName,
    'identityProviderConfigArn': obj.identityProviderConfigArn,
    'clusterName': obj.clusterName,
    'issuerUrl': obj.issuerUrl,
    'clientId': obj.clientId,
    'usernameClaim': obj.usernameClaim,
    'usernamePrefix': obj.usernamePrefix,
    'groupsClaim': obj.groupsClaim,
    'groupsPrefix': obj.groupsPrefix,
    'requiredClaims': ((obj.requiredClaims) === undefined) ? undefined : (Object.entries(obj.requiredClaims).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'tags': ((obj.tags) === undefined) ? undefined : (Object.entries(obj.tags).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {})),
    'status': obj.status,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksAddonIssue
 */
export interface EksAddonIssue {
  /**
   * @schema EksAddonIssue#code
   */
  readonly code?: string;

  /**
   * @schema EksAddonIssue#message
   */
  readonly message?: string;

  /**
   * @schema EksAddonIssue#resourceIds
   */
  readonly resourceIds?: string[];

}

/**
 * Converts an object of type 'EksAddonIssue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksAddonIssue(obj: EksAddonIssue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'code': obj.code,
    'message': obj.message,
    'resourceIds': obj.resourceIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'Eksoidc' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_Eksoidc(obj: Eksoidc | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'issuer': obj.issuer,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'EksAutoScalingGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksAutoScalingGroup(obj: EksAutoScalingGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'name': obj.name,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'EksIssue' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksIssue(obj: EksIssue | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'code': obj.code,
    'message': obj.message,
    'resourceIds': obj.resourceIds?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema EksCompatibility
 */
export interface EksCompatibility {
  /**
   * @schema EksCompatibility#clusterVersion
   */
  readonly clusterVersion?: string;

  /**
   * @schema EksCompatibility#platformVersions
   */
  readonly platformVersions?: string[];

  /**
   * @schema EksCompatibility#defaultVersion
   */
  readonly defaultVersion?: boolean;

}

/**
 * Converts an object of type 'EksCompatibility' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_EksCompatibility(obj: EksCompatibility | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'clusterVersion': obj.clusterVersion,
    'platformVersions': obj.platformVersions?.map(y => y),
    'defaultVersion': obj.defaultVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
