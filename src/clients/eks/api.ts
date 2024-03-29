import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class EksClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createCluster(input: shapes.EksCreateClusterRequest): EKSResponsesCreateCluster {
    return new EKSResponsesCreateCluster(this, this.__resources, input);
  }

  public createFargateProfile(input: shapes.EksCreateFargateProfileRequest): EKSResponsesCreateFargateProfile {
    return new EKSResponsesCreateFargateProfile(this, this.__resources, input);
  }

  public createNodegroup(input: shapes.EksCreateNodegroupRequest): EKSResponsesCreateNodegroup {
    return new EKSResponsesCreateNodegroup(this, this.__resources, input);
  }

  public deleteCluster(input: shapes.EksDeleteClusterRequest): EKSResponsesDeleteCluster {
    return new EKSResponsesDeleteCluster(this, this.__resources, input);
  }

  public deleteFargateProfile(input: shapes.EksDeleteFargateProfileRequest): EKSResponsesDeleteFargateProfile {
    return new EKSResponsesDeleteFargateProfile(this, this.__resources, input);
  }

  public deleteNodegroup(input: shapes.EksDeleteNodegroupRequest): EKSResponsesDeleteNodegroup {
    return new EKSResponsesDeleteNodegroup(this, this.__resources, input);
  }

  public describeCluster(input: shapes.EksDescribeClusterRequest): EKSResponsesDescribeCluster {
    return new EKSResponsesDescribeCluster(this, this.__resources, input);
  }

  public describeFargateProfile(input: shapes.EksDescribeFargateProfileRequest): EKSResponsesDescribeFargateProfile {
    return new EKSResponsesDescribeFargateProfile(this, this.__resources, input);
  }

  public describeNodegroup(input: shapes.EksDescribeNodegroupRequest): EKSResponsesDescribeNodegroup {
    return new EKSResponsesDescribeNodegroup(this, this.__resources, input);
  }

  public describeUpdate(input: shapes.EksDescribeUpdateRequest): EKSResponsesDescribeUpdate {
    return new EKSResponsesDescribeUpdate(this, this.__resources, input);
  }

  public listClusters(input: shapes.EksListClustersRequest): EKSResponsesListClusters {
    return new EKSResponsesListClusters(this, this.__resources, input);
  }

  public listFargateProfiles(input: shapes.EksListFargateProfilesRequest): EKSResponsesListFargateProfiles {
    return new EKSResponsesListFargateProfiles(this, this.__resources, input);
  }

  public listNodegroups(input: shapes.EksListNodegroupsRequest): EKSResponsesListNodegroups {
    return new EKSResponsesListNodegroups(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.EksListTagsForResourceRequest): EKSResponsesListTagsForResource {
    return new EKSResponsesListTagsForResource(this, this.__resources, input);
  }

  public listUpdates(input: shapes.EksListUpdatesRequest): EKSResponsesListUpdates {
    return new EKSResponsesListUpdates(this, this.__resources, input);
  }

  public tagResource(input: shapes.EksTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.EksUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateClusterConfig(input: shapes.EksUpdateClusterConfigRequest): EKSResponsesUpdateClusterConfig {
    return new EKSResponsesUpdateClusterConfig(this, this.__resources, input);
  }

  public updateClusterVersion(input: shapes.EksUpdateClusterVersionRequest): EKSResponsesUpdateClusterVersion {
    return new EKSResponsesUpdateClusterVersion(this, this.__resources, input);
  }

  public updateNodegroupConfig(input: shapes.EksUpdateNodegroupConfigRequest): EKSResponsesUpdateNodegroupConfig {
    return new EKSResponsesUpdateNodegroupConfig(this, this.__resources, input);
  }

  public updateNodegroupVersion(input: shapes.EksUpdateNodegroupVersionRequest): EKSResponsesUpdateNodegroupVersion {
    return new EKSResponsesUpdateNodegroupVersion(this, this.__resources, input);
  }

}

export class EKSResponsesCreateCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksCreateClusterRequest) {
  }

  public get cluster(): EKSResponsesCreateClusterCluster {
    return new EKSResponsesCreateClusterCluster(this.__scope, this.__resources, this.__input);
  }

}

export class EKSResponsesCreateClusterCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksCreateClusterRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateCluster.cluster.name'),
        outputPath: 'cluster.name',
        parameters: {
          name: this.__input.name,
          version: this.__input.version,
          roleArn: this.__input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.__input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.__input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.__input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.__input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.__input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.__input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.__input.logging?.clusterLogging,
          },
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
          encryptionConfig: this.__input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.name', props);
    return resource.getResponseField('cluster.name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateCluster.cluster.arn'),
        outputPath: 'cluster.arn',
        parameters: {
          name: this.__input.name,
          version: this.__input.version,
          roleArn: this.__input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.__input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.__input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.__input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.__input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.__input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.__input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.__input.logging?.clusterLogging,
          },
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
          encryptionConfig: this.__input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.arn', props);
    return resource.getResponseField('cluster.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateCluster.cluster.createdAt'),
        outputPath: 'cluster.createdAt',
        parameters: {
          name: this.__input.name,
          version: this.__input.version,
          roleArn: this.__input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.__input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.__input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.__input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.__input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.__input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.__input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.__input.logging?.clusterLogging,
          },
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
          encryptionConfig: this.__input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.createdAt', props);
    return resource.getResponseField('cluster.createdAt') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateCluster.cluster.version'),
        outputPath: 'cluster.version',
        parameters: {
          name: this.__input.name,
          version: this.__input.version,
          roleArn: this.__input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.__input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.__input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.__input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.__input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.__input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.__input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.__input.logging?.clusterLogging,
          },
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
          encryptionConfig: this.__input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.version', props);
    return resource.getResponseField('cluster.version') as unknown as string;
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateCluster.cluster.endpoint'),
        outputPath: 'cluster.endpoint',
        parameters: {
          name: this.__input.name,
          version: this.__input.version,
          roleArn: this.__input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.__input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.__input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.__input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.__input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.__input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.__input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.__input.logging?.clusterLogging,
          },
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
          encryptionConfig: this.__input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.endpoint', props);
    return resource.getResponseField('cluster.endpoint') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateCluster.cluster.roleArn'),
        outputPath: 'cluster.roleArn',
        parameters: {
          name: this.__input.name,
          version: this.__input.version,
          roleArn: this.__input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.__input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.__input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.__input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.__input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.__input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.__input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.__input.logging?.clusterLogging,
          },
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
          encryptionConfig: this.__input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.roleArn', props);
    return resource.getResponseField('cluster.roleArn') as unknown as string;
  }

  public get resourcesVpcConfig(): EKSResponsesCreateClusterClusterResourcesVpcConfig {
    return new EKSResponsesCreateClusterClusterResourcesVpcConfig(this.__scope, this.__resources, this.__input);
  }

  public get kubernetesNetworkConfig(): EKSResponsesCreateClusterClusterKubernetesNetworkConfig {
    return new EKSResponsesCreateClusterClusterKubernetesNetworkConfig(this.__scope, this.__resources, this.__input);
  }

  public get logging(): EKSResponsesCreateClusterClusterLogging {
    return new EKSResponsesCreateClusterClusterLogging(this.__scope, this.__resources, this.__input);
  }

  public get identity(): EKSResponsesCreateClusterClusterIdentity {
    return new EKSResponsesCreateClusterClusterIdentity(this.__scope, this.__resources, this.__input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateCluster.cluster.status'),
        outputPath: 'cluster.status',
        parameters: {
          name: this.__input.name,
          version: this.__input.version,
          roleArn: this.__input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.__input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.__input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.__input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.__input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.__input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.__input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.__input.logging?.clusterLogging,
          },
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
          encryptionConfig: this.__input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.status', props);
    return resource.getResponseField('cluster.status') as unknown as string;
  }

  public get certificateAuthority(): EKSResponsesCreateClusterClusterCertificateAuthority {
    return new EKSResponsesCreateClusterClusterCertificateAuthority(this.__scope, this.__resources, this.__input);
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateCluster.cluster.clientRequestToken'),
        outputPath: 'cluster.clientRequestToken',
        parameters: {
          name: this.__input.name,
          version: this.__input.version,
          roleArn: this.__input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.__input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.__input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.__input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.__input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.__input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.__input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.__input.logging?.clusterLogging,
          },
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
          encryptionConfig: this.__input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.clientRequestToken', props);
    return resource.getResponseField('cluster.clientRequestToken') as unknown as string;
  }

  public get platformVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateCluster.cluster.platformVersion'),
        outputPath: 'cluster.platformVersion',
        parameters: {
          name: this.__input.name,
          version: this.__input.version,
          roleArn: this.__input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.__input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.__input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.__input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.__input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.__input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.__input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.__input.logging?.clusterLogging,
          },
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
          encryptionConfig: this.__input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.platformVersion', props);
    return resource.getResponseField('cluster.platformVersion') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateCluster.cluster.tags'),
        outputPath: 'cluster.tags',
        parameters: {
          name: this.__input.name,
          version: this.__input.version,
          roleArn: this.__input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.__input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.__input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.__input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.__input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.__input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.__input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.__input.logging?.clusterLogging,
          },
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
          encryptionConfig: this.__input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.tags', props);
    return resource.getResponseField('cluster.tags') as unknown as Record<string, string>;
  }

  public get encryptionConfig(): shapes.EksEncryptionConfig[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateCluster.cluster.encryptionConfig'),
        outputPath: 'cluster.encryptionConfig',
        parameters: {
          name: this.__input.name,
          version: this.__input.version,
          roleArn: this.__input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.__input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.__input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.__input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.__input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.__input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.__input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.__input.logging?.clusterLogging,
          },
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
          encryptionConfig: this.__input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.encryptionConfig', props);
    return resource.getResponseField('cluster.encryptionConfig') as unknown as shapes.EksEncryptionConfig[];
  }

}

export class EKSResponsesCreateClusterClusterResourcesVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksCreateClusterRequest) {
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateCluster.cluster.resourcesVpcConfig.subnetIds'),
        outputPath: 'cluster.resourcesVpcConfig.subnetIds',
        parameters: {
          name: this.__input.name,
          version: this.__input.version,
          roleArn: this.__input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.__input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.__input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.__input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.__input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.__input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.__input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.__input.logging?.clusterLogging,
          },
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
          encryptionConfig: this.__input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.resourcesVpcConfig.subnetIds', props);
    return resource.getResponseField('cluster.resourcesVpcConfig.subnetIds') as unknown as string[];
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateCluster.cluster.resourcesVpcConfig.securityGroupIds'),
        outputPath: 'cluster.resourcesVpcConfig.securityGroupIds',
        parameters: {
          name: this.__input.name,
          version: this.__input.version,
          roleArn: this.__input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.__input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.__input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.__input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.__input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.__input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.__input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.__input.logging?.clusterLogging,
          },
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
          encryptionConfig: this.__input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.resourcesVpcConfig.securityGroupIds', props);
    return resource.getResponseField('cluster.resourcesVpcConfig.securityGroupIds') as unknown as string[];
  }

  public get clusterSecurityGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateCluster.cluster.resourcesVpcConfig.clusterSecurityGroupId'),
        outputPath: 'cluster.resourcesVpcConfig.clusterSecurityGroupId',
        parameters: {
          name: this.__input.name,
          version: this.__input.version,
          roleArn: this.__input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.__input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.__input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.__input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.__input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.__input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.__input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.__input.logging?.clusterLogging,
          },
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
          encryptionConfig: this.__input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.resourcesVpcConfig.clusterSecurityGroupId', props);
    return resource.getResponseField('cluster.resourcesVpcConfig.clusterSecurityGroupId') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateCluster.cluster.resourcesVpcConfig.vpcId'),
        outputPath: 'cluster.resourcesVpcConfig.vpcId',
        parameters: {
          name: this.__input.name,
          version: this.__input.version,
          roleArn: this.__input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.__input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.__input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.__input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.__input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.__input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.__input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.__input.logging?.clusterLogging,
          },
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
          encryptionConfig: this.__input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.resourcesVpcConfig.vpcId', props);
    return resource.getResponseField('cluster.resourcesVpcConfig.vpcId') as unknown as string;
  }

  public get endpointPublicAccess(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateCluster.cluster.resourcesVpcConfig.endpointPublicAccess'),
        outputPath: 'cluster.resourcesVpcConfig.endpointPublicAccess',
        parameters: {
          name: this.__input.name,
          version: this.__input.version,
          roleArn: this.__input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.__input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.__input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.__input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.__input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.__input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.__input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.__input.logging?.clusterLogging,
          },
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
          encryptionConfig: this.__input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.resourcesVpcConfig.endpointPublicAccess', props);
    return resource.getResponseField('cluster.resourcesVpcConfig.endpointPublicAccess') as unknown as boolean;
  }

  public get endpointPrivateAccess(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateCluster.cluster.resourcesVpcConfig.endpointPrivateAccess'),
        outputPath: 'cluster.resourcesVpcConfig.endpointPrivateAccess',
        parameters: {
          name: this.__input.name,
          version: this.__input.version,
          roleArn: this.__input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.__input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.__input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.__input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.__input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.__input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.__input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.__input.logging?.clusterLogging,
          },
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
          encryptionConfig: this.__input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.resourcesVpcConfig.endpointPrivateAccess', props);
    return resource.getResponseField('cluster.resourcesVpcConfig.endpointPrivateAccess') as unknown as boolean;
  }

  public get publicAccessCidrs(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateCluster.cluster.resourcesVpcConfig.publicAccessCidrs'),
        outputPath: 'cluster.resourcesVpcConfig.publicAccessCidrs',
        parameters: {
          name: this.__input.name,
          version: this.__input.version,
          roleArn: this.__input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.__input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.__input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.__input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.__input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.__input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.__input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.__input.logging?.clusterLogging,
          },
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
          encryptionConfig: this.__input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.resourcesVpcConfig.publicAccessCidrs', props);
    return resource.getResponseField('cluster.resourcesVpcConfig.publicAccessCidrs') as unknown as string[];
  }

}

export class EKSResponsesCreateClusterClusterKubernetesNetworkConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksCreateClusterRequest) {
  }

  public get serviceIpv4Cidr(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateCluster.cluster.kubernetesNetworkConfig.serviceIpv4Cidr'),
        outputPath: 'cluster.kubernetesNetworkConfig.serviceIpv4Cidr',
        parameters: {
          name: this.__input.name,
          version: this.__input.version,
          roleArn: this.__input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.__input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.__input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.__input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.__input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.__input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.__input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.__input.logging?.clusterLogging,
          },
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
          encryptionConfig: this.__input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.kubernetesNetworkConfig.serviceIpv4Cidr', props);
    return resource.getResponseField('cluster.kubernetesNetworkConfig.serviceIpv4Cidr') as unknown as string;
  }

}

export class EKSResponsesCreateClusterClusterLogging {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksCreateClusterRequest) {
  }

  public get clusterLogging(): shapes.EksLogSetup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateCluster.cluster.logging.clusterLogging'),
        outputPath: 'cluster.logging.clusterLogging',
        parameters: {
          name: this.__input.name,
          version: this.__input.version,
          roleArn: this.__input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.__input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.__input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.__input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.__input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.__input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.__input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.__input.logging?.clusterLogging,
          },
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
          encryptionConfig: this.__input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.logging.clusterLogging', props);
    return resource.getResponseField('cluster.logging.clusterLogging') as unknown as shapes.EksLogSetup[];
  }

}

export class EKSResponsesCreateClusterClusterIdentity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksCreateClusterRequest) {
  }

  public get oidc(): EKSResponsesCreateClusterClusterIdentityOidc {
    return new EKSResponsesCreateClusterClusterIdentityOidc(this.__scope, this.__resources, this.__input);
  }

}

export class EKSResponsesCreateClusterClusterIdentityOidc {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksCreateClusterRequest) {
  }

  public get issuer(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateCluster.cluster.identity.oidc.issuer'),
        outputPath: 'cluster.identity.oidc.issuer',
        parameters: {
          name: this.__input.name,
          version: this.__input.version,
          roleArn: this.__input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.__input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.__input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.__input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.__input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.__input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.__input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.__input.logging?.clusterLogging,
          },
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
          encryptionConfig: this.__input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.identity.oidc.issuer', props);
    return resource.getResponseField('cluster.identity.oidc.issuer') as unknown as string;
  }

}

export class EKSResponsesCreateClusterClusterCertificateAuthority {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksCreateClusterRequest) {
  }

  public get data(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateCluster.cluster.certificateAuthority.data'),
        outputPath: 'cluster.certificateAuthority.data',
        parameters: {
          name: this.__input.name,
          version: this.__input.version,
          roleArn: this.__input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.__input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.__input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.__input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.__input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.__input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.__input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.__input.logging?.clusterLogging,
          },
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
          encryptionConfig: this.__input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateCluster.cluster.certificateAuthority.data', props);
    return resource.getResponseField('cluster.certificateAuthority.data') as unknown as string;
  }

}

export class EKSResponsesCreateFargateProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksCreateFargateProfileRequest) {
  }

  public get fargateProfile(): EKSResponsesCreateFargateProfileFargateProfile {
    return new EKSResponsesCreateFargateProfileFargateProfile(this.__scope, this.__resources, this.__input);
  }

}

export class EKSResponsesCreateFargateProfileFargateProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksCreateFargateProfileRequest) {
  }

  public get fargateProfileName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFargateProfile',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateFargateProfile.fargateProfile.fargateProfileName'),
        outputPath: 'fargateProfile.fargateProfileName',
        parameters: {
          fargateProfileName: this.__input.fargateProfileName,
          clusterName: this.__input.clusterName,
          podExecutionRoleArn: this.__input.podExecutionRoleArn,
          subnets: this.__input.subnets,
          selectors: this.__input.selectors,
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFargateProfile.fargateProfile.fargateProfileName', props);
    return resource.getResponseField('fargateProfile.fargateProfileName') as unknown as string;
  }

  public get fargateProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFargateProfile',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateFargateProfile.fargateProfile.fargateProfileArn'),
        outputPath: 'fargateProfile.fargateProfileArn',
        parameters: {
          fargateProfileName: this.__input.fargateProfileName,
          clusterName: this.__input.clusterName,
          podExecutionRoleArn: this.__input.podExecutionRoleArn,
          subnets: this.__input.subnets,
          selectors: this.__input.selectors,
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFargateProfile.fargateProfile.fargateProfileArn', props);
    return resource.getResponseField('fargateProfile.fargateProfileArn') as unknown as string;
  }

  public get clusterName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFargateProfile',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateFargateProfile.fargateProfile.clusterName'),
        outputPath: 'fargateProfile.clusterName',
        parameters: {
          fargateProfileName: this.__input.fargateProfileName,
          clusterName: this.__input.clusterName,
          podExecutionRoleArn: this.__input.podExecutionRoleArn,
          subnets: this.__input.subnets,
          selectors: this.__input.selectors,
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFargateProfile.fargateProfile.clusterName', props);
    return resource.getResponseField('fargateProfile.clusterName') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFargateProfile',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateFargateProfile.fargateProfile.createdAt'),
        outputPath: 'fargateProfile.createdAt',
        parameters: {
          fargateProfileName: this.__input.fargateProfileName,
          clusterName: this.__input.clusterName,
          podExecutionRoleArn: this.__input.podExecutionRoleArn,
          subnets: this.__input.subnets,
          selectors: this.__input.selectors,
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFargateProfile.fargateProfile.createdAt', props);
    return resource.getResponseField('fargateProfile.createdAt') as unknown as string;
  }

  public get podExecutionRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFargateProfile',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateFargateProfile.fargateProfile.podExecutionRoleArn'),
        outputPath: 'fargateProfile.podExecutionRoleArn',
        parameters: {
          fargateProfileName: this.__input.fargateProfileName,
          clusterName: this.__input.clusterName,
          podExecutionRoleArn: this.__input.podExecutionRoleArn,
          subnets: this.__input.subnets,
          selectors: this.__input.selectors,
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFargateProfile.fargateProfile.podExecutionRoleArn', props);
    return resource.getResponseField('fargateProfile.podExecutionRoleArn') as unknown as string;
  }

  public get subnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFargateProfile',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateFargateProfile.fargateProfile.subnets'),
        outputPath: 'fargateProfile.subnets',
        parameters: {
          fargateProfileName: this.__input.fargateProfileName,
          clusterName: this.__input.clusterName,
          podExecutionRoleArn: this.__input.podExecutionRoleArn,
          subnets: this.__input.subnets,
          selectors: this.__input.selectors,
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFargateProfile.fargateProfile.subnets', props);
    return resource.getResponseField('fargateProfile.subnets') as unknown as string[];
  }

  public get selectors(): shapes.EksFargateProfileSelector[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFargateProfile',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateFargateProfile.fargateProfile.selectors'),
        outputPath: 'fargateProfile.selectors',
        parameters: {
          fargateProfileName: this.__input.fargateProfileName,
          clusterName: this.__input.clusterName,
          podExecutionRoleArn: this.__input.podExecutionRoleArn,
          subnets: this.__input.subnets,
          selectors: this.__input.selectors,
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFargateProfile.fargateProfile.selectors', props);
    return resource.getResponseField('fargateProfile.selectors') as unknown as shapes.EksFargateProfileSelector[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFargateProfile',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateFargateProfile.fargateProfile.status'),
        outputPath: 'fargateProfile.status',
        parameters: {
          fargateProfileName: this.__input.fargateProfileName,
          clusterName: this.__input.clusterName,
          podExecutionRoleArn: this.__input.podExecutionRoleArn,
          subnets: this.__input.subnets,
          selectors: this.__input.selectors,
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFargateProfile.fargateProfile.status', props);
    return resource.getResponseField('fargateProfile.status') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFargateProfile',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateFargateProfile.fargateProfile.tags'),
        outputPath: 'fargateProfile.tags',
        parameters: {
          fargateProfileName: this.__input.fargateProfileName,
          clusterName: this.__input.clusterName,
          podExecutionRoleArn: this.__input.podExecutionRoleArn,
          subnets: this.__input.subnets,
          selectors: this.__input.selectors,
          clientRequestToken: this.__input.clientRequestToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFargateProfile.fargateProfile.tags', props);
    return resource.getResponseField('fargateProfile.tags') as unknown as Record<string, string>;
  }

}

export class EKSResponsesCreateNodegroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksCreateNodegroupRequest) {
  }

  public get nodegroup(): EKSResponsesCreateNodegroupNodegroup {
    return new EKSResponsesCreateNodegroupNodegroup(this.__scope, this.__resources, this.__input);
  }

}

export class EKSResponsesCreateNodegroupNodegroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksCreateNodegroupRequest) {
  }

  public get nodegroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateNodegroup.nodegroup.nodegroupName'),
        outputPath: 'nodegroup.nodegroupName',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          diskSize: this.__input.diskSize,
          subnets: this.__input.subnets,
          instanceTypes: this.__input.instanceTypes,
          amiType: this.__input.amiType,
          remoteAccess: {
            ec2SshKey: this.__input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.__input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.__input.nodeRole,
          labels: this.__input.labels,
          tags: this.__input.tags,
          clientRequestToken: this.__input.clientRequestToken,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNodegroup.nodegroup.nodegroupName', props);
    return resource.getResponseField('nodegroup.nodegroupName') as unknown as string;
  }

  public get nodegroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateNodegroup.nodegroup.nodegroupArn'),
        outputPath: 'nodegroup.nodegroupArn',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          diskSize: this.__input.diskSize,
          subnets: this.__input.subnets,
          instanceTypes: this.__input.instanceTypes,
          amiType: this.__input.amiType,
          remoteAccess: {
            ec2SshKey: this.__input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.__input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.__input.nodeRole,
          labels: this.__input.labels,
          tags: this.__input.tags,
          clientRequestToken: this.__input.clientRequestToken,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNodegroup.nodegroup.nodegroupArn', props);
    return resource.getResponseField('nodegroup.nodegroupArn') as unknown as string;
  }

  public get clusterName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateNodegroup.nodegroup.clusterName'),
        outputPath: 'nodegroup.clusterName',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          diskSize: this.__input.diskSize,
          subnets: this.__input.subnets,
          instanceTypes: this.__input.instanceTypes,
          amiType: this.__input.amiType,
          remoteAccess: {
            ec2SshKey: this.__input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.__input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.__input.nodeRole,
          labels: this.__input.labels,
          tags: this.__input.tags,
          clientRequestToken: this.__input.clientRequestToken,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNodegroup.nodegroup.clusterName', props);
    return resource.getResponseField('nodegroup.clusterName') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateNodegroup.nodegroup.version'),
        outputPath: 'nodegroup.version',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          diskSize: this.__input.diskSize,
          subnets: this.__input.subnets,
          instanceTypes: this.__input.instanceTypes,
          amiType: this.__input.amiType,
          remoteAccess: {
            ec2SshKey: this.__input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.__input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.__input.nodeRole,
          labels: this.__input.labels,
          tags: this.__input.tags,
          clientRequestToken: this.__input.clientRequestToken,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNodegroup.nodegroup.version', props);
    return resource.getResponseField('nodegroup.version') as unknown as string;
  }

  public get releaseVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateNodegroup.nodegroup.releaseVersion'),
        outputPath: 'nodegroup.releaseVersion',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          diskSize: this.__input.diskSize,
          subnets: this.__input.subnets,
          instanceTypes: this.__input.instanceTypes,
          amiType: this.__input.amiType,
          remoteAccess: {
            ec2SshKey: this.__input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.__input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.__input.nodeRole,
          labels: this.__input.labels,
          tags: this.__input.tags,
          clientRequestToken: this.__input.clientRequestToken,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNodegroup.nodegroup.releaseVersion', props);
    return resource.getResponseField('nodegroup.releaseVersion') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateNodegroup.nodegroup.createdAt'),
        outputPath: 'nodegroup.createdAt',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          diskSize: this.__input.diskSize,
          subnets: this.__input.subnets,
          instanceTypes: this.__input.instanceTypes,
          amiType: this.__input.amiType,
          remoteAccess: {
            ec2SshKey: this.__input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.__input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.__input.nodeRole,
          labels: this.__input.labels,
          tags: this.__input.tags,
          clientRequestToken: this.__input.clientRequestToken,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNodegroup.nodegroup.createdAt', props);
    return resource.getResponseField('nodegroup.createdAt') as unknown as string;
  }

  public get modifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateNodegroup.nodegroup.modifiedAt'),
        outputPath: 'nodegroup.modifiedAt',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          diskSize: this.__input.diskSize,
          subnets: this.__input.subnets,
          instanceTypes: this.__input.instanceTypes,
          amiType: this.__input.amiType,
          remoteAccess: {
            ec2SshKey: this.__input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.__input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.__input.nodeRole,
          labels: this.__input.labels,
          tags: this.__input.tags,
          clientRequestToken: this.__input.clientRequestToken,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNodegroup.nodegroup.modifiedAt', props);
    return resource.getResponseField('nodegroup.modifiedAt') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateNodegroup.nodegroup.status'),
        outputPath: 'nodegroup.status',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          diskSize: this.__input.diskSize,
          subnets: this.__input.subnets,
          instanceTypes: this.__input.instanceTypes,
          amiType: this.__input.amiType,
          remoteAccess: {
            ec2SshKey: this.__input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.__input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.__input.nodeRole,
          labels: this.__input.labels,
          tags: this.__input.tags,
          clientRequestToken: this.__input.clientRequestToken,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNodegroup.nodegroup.status', props);
    return resource.getResponseField('nodegroup.status') as unknown as string;
  }

  public get scalingConfig(): EKSResponsesCreateNodegroupNodegroupScalingConfig {
    return new EKSResponsesCreateNodegroupNodegroupScalingConfig(this.__scope, this.__resources, this.__input);
  }

  public get instanceTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateNodegroup.nodegroup.instanceTypes'),
        outputPath: 'nodegroup.instanceTypes',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          diskSize: this.__input.diskSize,
          subnets: this.__input.subnets,
          instanceTypes: this.__input.instanceTypes,
          amiType: this.__input.amiType,
          remoteAccess: {
            ec2SshKey: this.__input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.__input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.__input.nodeRole,
          labels: this.__input.labels,
          tags: this.__input.tags,
          clientRequestToken: this.__input.clientRequestToken,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNodegroup.nodegroup.instanceTypes', props);
    return resource.getResponseField('nodegroup.instanceTypes') as unknown as string[];
  }

  public get subnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateNodegroup.nodegroup.subnets'),
        outputPath: 'nodegroup.subnets',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          diskSize: this.__input.diskSize,
          subnets: this.__input.subnets,
          instanceTypes: this.__input.instanceTypes,
          amiType: this.__input.amiType,
          remoteAccess: {
            ec2SshKey: this.__input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.__input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.__input.nodeRole,
          labels: this.__input.labels,
          tags: this.__input.tags,
          clientRequestToken: this.__input.clientRequestToken,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNodegroup.nodegroup.subnets', props);
    return resource.getResponseField('nodegroup.subnets') as unknown as string[];
  }

  public get remoteAccess(): EKSResponsesCreateNodegroupNodegroupRemoteAccess {
    return new EKSResponsesCreateNodegroupNodegroupRemoteAccess(this.__scope, this.__resources, this.__input);
  }

  public get amiType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateNodegroup.nodegroup.amiType'),
        outputPath: 'nodegroup.amiType',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          diskSize: this.__input.diskSize,
          subnets: this.__input.subnets,
          instanceTypes: this.__input.instanceTypes,
          amiType: this.__input.amiType,
          remoteAccess: {
            ec2SshKey: this.__input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.__input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.__input.nodeRole,
          labels: this.__input.labels,
          tags: this.__input.tags,
          clientRequestToken: this.__input.clientRequestToken,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNodegroup.nodegroup.amiType', props);
    return resource.getResponseField('nodegroup.amiType') as unknown as string;
  }

  public get nodeRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateNodegroup.nodegroup.nodeRole'),
        outputPath: 'nodegroup.nodeRole',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          diskSize: this.__input.diskSize,
          subnets: this.__input.subnets,
          instanceTypes: this.__input.instanceTypes,
          amiType: this.__input.amiType,
          remoteAccess: {
            ec2SshKey: this.__input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.__input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.__input.nodeRole,
          labels: this.__input.labels,
          tags: this.__input.tags,
          clientRequestToken: this.__input.clientRequestToken,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNodegroup.nodegroup.nodeRole', props);
    return resource.getResponseField('nodegroup.nodeRole') as unknown as string;
  }

  public get labels(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateNodegroup.nodegroup.labels'),
        outputPath: 'nodegroup.labels',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          diskSize: this.__input.diskSize,
          subnets: this.__input.subnets,
          instanceTypes: this.__input.instanceTypes,
          amiType: this.__input.amiType,
          remoteAccess: {
            ec2SshKey: this.__input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.__input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.__input.nodeRole,
          labels: this.__input.labels,
          tags: this.__input.tags,
          clientRequestToken: this.__input.clientRequestToken,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNodegroup.nodegroup.labels', props);
    return resource.getResponseField('nodegroup.labels') as unknown as Record<string, string>;
  }

  public get resources(): EKSResponsesCreateNodegroupNodegroupResources {
    return new EKSResponsesCreateNodegroupNodegroupResources(this.__scope, this.__resources, this.__input);
  }

  public get diskSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateNodegroup.nodegroup.diskSize'),
        outputPath: 'nodegroup.diskSize',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          diskSize: this.__input.diskSize,
          subnets: this.__input.subnets,
          instanceTypes: this.__input.instanceTypes,
          amiType: this.__input.amiType,
          remoteAccess: {
            ec2SshKey: this.__input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.__input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.__input.nodeRole,
          labels: this.__input.labels,
          tags: this.__input.tags,
          clientRequestToken: this.__input.clientRequestToken,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNodegroup.nodegroup.diskSize', props);
    return resource.getResponseField('nodegroup.diskSize') as unknown as number;
  }

  public get health(): EKSResponsesCreateNodegroupNodegroupHealth {
    return new EKSResponsesCreateNodegroupNodegroupHealth(this.__scope, this.__resources, this.__input);
  }

  public get launchTemplate(): EKSResponsesCreateNodegroupNodegroupLaunchTemplate {
    return new EKSResponsesCreateNodegroupNodegroupLaunchTemplate(this.__scope, this.__resources, this.__input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateNodegroup.nodegroup.tags'),
        outputPath: 'nodegroup.tags',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          diskSize: this.__input.diskSize,
          subnets: this.__input.subnets,
          instanceTypes: this.__input.instanceTypes,
          amiType: this.__input.amiType,
          remoteAccess: {
            ec2SshKey: this.__input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.__input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.__input.nodeRole,
          labels: this.__input.labels,
          tags: this.__input.tags,
          clientRequestToken: this.__input.clientRequestToken,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNodegroup.nodegroup.tags', props);
    return resource.getResponseField('nodegroup.tags') as unknown as Record<string, string>;
  }

}

export class EKSResponsesCreateNodegroupNodegroupScalingConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksCreateNodegroupRequest) {
  }

  public get minSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateNodegroup.nodegroup.scalingConfig.minSize'),
        outputPath: 'nodegroup.scalingConfig.minSize',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          diskSize: this.__input.diskSize,
          subnets: this.__input.subnets,
          instanceTypes: this.__input.instanceTypes,
          amiType: this.__input.amiType,
          remoteAccess: {
            ec2SshKey: this.__input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.__input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.__input.nodeRole,
          labels: this.__input.labels,
          tags: this.__input.tags,
          clientRequestToken: this.__input.clientRequestToken,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNodegroup.nodegroup.scalingConfig.minSize', props);
    return resource.getResponseField('nodegroup.scalingConfig.minSize') as unknown as number;
  }

  public get maxSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateNodegroup.nodegroup.scalingConfig.maxSize'),
        outputPath: 'nodegroup.scalingConfig.maxSize',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          diskSize: this.__input.diskSize,
          subnets: this.__input.subnets,
          instanceTypes: this.__input.instanceTypes,
          amiType: this.__input.amiType,
          remoteAccess: {
            ec2SshKey: this.__input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.__input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.__input.nodeRole,
          labels: this.__input.labels,
          tags: this.__input.tags,
          clientRequestToken: this.__input.clientRequestToken,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNodegroup.nodegroup.scalingConfig.maxSize', props);
    return resource.getResponseField('nodegroup.scalingConfig.maxSize') as unknown as number;
  }

  public get desiredSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateNodegroup.nodegroup.scalingConfig.desiredSize'),
        outputPath: 'nodegroup.scalingConfig.desiredSize',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          diskSize: this.__input.diskSize,
          subnets: this.__input.subnets,
          instanceTypes: this.__input.instanceTypes,
          amiType: this.__input.amiType,
          remoteAccess: {
            ec2SshKey: this.__input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.__input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.__input.nodeRole,
          labels: this.__input.labels,
          tags: this.__input.tags,
          clientRequestToken: this.__input.clientRequestToken,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNodegroup.nodegroup.scalingConfig.desiredSize', props);
    return resource.getResponseField('nodegroup.scalingConfig.desiredSize') as unknown as number;
  }

}

export class EKSResponsesCreateNodegroupNodegroupRemoteAccess {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksCreateNodegroupRequest) {
  }

  public get ec2SshKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateNodegroup.nodegroup.remoteAccess.ec2SshKey'),
        outputPath: 'nodegroup.remoteAccess.ec2SshKey',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          diskSize: this.__input.diskSize,
          subnets: this.__input.subnets,
          instanceTypes: this.__input.instanceTypes,
          amiType: this.__input.amiType,
          remoteAccess: {
            ec2SshKey: this.__input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.__input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.__input.nodeRole,
          labels: this.__input.labels,
          tags: this.__input.tags,
          clientRequestToken: this.__input.clientRequestToken,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNodegroup.nodegroup.remoteAccess.ec2SshKey', props);
    return resource.getResponseField('nodegroup.remoteAccess.ec2SshKey') as unknown as string;
  }

  public get sourceSecurityGroups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateNodegroup.nodegroup.remoteAccess.sourceSecurityGroups'),
        outputPath: 'nodegroup.remoteAccess.sourceSecurityGroups',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          diskSize: this.__input.diskSize,
          subnets: this.__input.subnets,
          instanceTypes: this.__input.instanceTypes,
          amiType: this.__input.amiType,
          remoteAccess: {
            ec2SshKey: this.__input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.__input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.__input.nodeRole,
          labels: this.__input.labels,
          tags: this.__input.tags,
          clientRequestToken: this.__input.clientRequestToken,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNodegroup.nodegroup.remoteAccess.sourceSecurityGroups', props);
    return resource.getResponseField('nodegroup.remoteAccess.sourceSecurityGroups') as unknown as string[];
  }

}

export class EKSResponsesCreateNodegroupNodegroupResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksCreateNodegroupRequest) {
  }

  public get autoScalingGroups(): shapes.EksAutoScalingGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateNodegroup.nodegroup.resources.autoScalingGroups'),
        outputPath: 'nodegroup.resources.autoScalingGroups',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          diskSize: this.__input.diskSize,
          subnets: this.__input.subnets,
          instanceTypes: this.__input.instanceTypes,
          amiType: this.__input.amiType,
          remoteAccess: {
            ec2SshKey: this.__input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.__input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.__input.nodeRole,
          labels: this.__input.labels,
          tags: this.__input.tags,
          clientRequestToken: this.__input.clientRequestToken,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNodegroup.nodegroup.resources.autoScalingGroups', props);
    return resource.getResponseField('nodegroup.resources.autoScalingGroups') as unknown as shapes.EksAutoScalingGroup[];
  }

  public get remoteAccessSecurityGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateNodegroup.nodegroup.resources.remoteAccessSecurityGroup'),
        outputPath: 'nodegroup.resources.remoteAccessSecurityGroup',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          diskSize: this.__input.diskSize,
          subnets: this.__input.subnets,
          instanceTypes: this.__input.instanceTypes,
          amiType: this.__input.amiType,
          remoteAccess: {
            ec2SshKey: this.__input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.__input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.__input.nodeRole,
          labels: this.__input.labels,
          tags: this.__input.tags,
          clientRequestToken: this.__input.clientRequestToken,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNodegroup.nodegroup.resources.remoteAccessSecurityGroup', props);
    return resource.getResponseField('nodegroup.resources.remoteAccessSecurityGroup') as unknown as string;
  }

}

export class EKSResponsesCreateNodegroupNodegroupHealth {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksCreateNodegroupRequest) {
  }

  public get issues(): shapes.EksIssue[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateNodegroup.nodegroup.health.issues'),
        outputPath: 'nodegroup.health.issues',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          diskSize: this.__input.diskSize,
          subnets: this.__input.subnets,
          instanceTypes: this.__input.instanceTypes,
          amiType: this.__input.amiType,
          remoteAccess: {
            ec2SshKey: this.__input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.__input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.__input.nodeRole,
          labels: this.__input.labels,
          tags: this.__input.tags,
          clientRequestToken: this.__input.clientRequestToken,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNodegroup.nodegroup.health.issues', props);
    return resource.getResponseField('nodegroup.health.issues') as unknown as shapes.EksIssue[];
  }

}

export class EKSResponsesCreateNodegroupNodegroupLaunchTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksCreateNodegroupRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateNodegroup.nodegroup.launchTemplate.name'),
        outputPath: 'nodegroup.launchTemplate.name',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          diskSize: this.__input.diskSize,
          subnets: this.__input.subnets,
          instanceTypes: this.__input.instanceTypes,
          amiType: this.__input.amiType,
          remoteAccess: {
            ec2SshKey: this.__input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.__input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.__input.nodeRole,
          labels: this.__input.labels,
          tags: this.__input.tags,
          clientRequestToken: this.__input.clientRequestToken,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNodegroup.nodegroup.launchTemplate.name', props);
    return resource.getResponseField('nodegroup.launchTemplate.name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateNodegroup.nodegroup.launchTemplate.version'),
        outputPath: 'nodegroup.launchTemplate.version',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          diskSize: this.__input.diskSize,
          subnets: this.__input.subnets,
          instanceTypes: this.__input.instanceTypes,
          amiType: this.__input.amiType,
          remoteAccess: {
            ec2SshKey: this.__input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.__input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.__input.nodeRole,
          labels: this.__input.labels,
          tags: this.__input.tags,
          clientRequestToken: this.__input.clientRequestToken,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNodegroup.nodegroup.launchTemplate.version', props);
    return resource.getResponseField('nodegroup.launchTemplate.version') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.CreateNodegroup.nodegroup.launchTemplate.id'),
        outputPath: 'nodegroup.launchTemplate.id',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          diskSize: this.__input.diskSize,
          subnets: this.__input.subnets,
          instanceTypes: this.__input.instanceTypes,
          amiType: this.__input.amiType,
          remoteAccess: {
            ec2SshKey: this.__input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.__input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.__input.nodeRole,
          labels: this.__input.labels,
          tags: this.__input.tags,
          clientRequestToken: this.__input.clientRequestToken,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateNodegroup.nodegroup.launchTemplate.id', props);
    return resource.getResponseField('nodegroup.launchTemplate.id') as unknown as string;
  }

}

export class EKSResponsesDeleteCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDeleteClusterRequest) {
  }

  public get cluster(): EKSResponsesDeleteClusterCluster {
    return new EKSResponsesDeleteClusterCluster(this.__scope, this.__resources, this.__input);
  }

}

export class EKSResponsesDeleteClusterCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDeleteClusterRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteCluster.cluster.name'),
        outputPath: 'cluster.name',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.name', props);
    return resource.getResponseField('cluster.name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteCluster.cluster.arn'),
        outputPath: 'cluster.arn',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.arn', props);
    return resource.getResponseField('cluster.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteCluster.cluster.createdAt'),
        outputPath: 'cluster.createdAt',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.createdAt', props);
    return resource.getResponseField('cluster.createdAt') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteCluster.cluster.version'),
        outputPath: 'cluster.version',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.version', props);
    return resource.getResponseField('cluster.version') as unknown as string;
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteCluster.cluster.endpoint'),
        outputPath: 'cluster.endpoint',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.endpoint', props);
    return resource.getResponseField('cluster.endpoint') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteCluster.cluster.roleArn'),
        outputPath: 'cluster.roleArn',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.roleArn', props);
    return resource.getResponseField('cluster.roleArn') as unknown as string;
  }

  public get resourcesVpcConfig(): EKSResponsesDeleteClusterClusterResourcesVpcConfig {
    return new EKSResponsesDeleteClusterClusterResourcesVpcConfig(this.__scope, this.__resources, this.__input);
  }

  public get kubernetesNetworkConfig(): EKSResponsesDeleteClusterClusterKubernetesNetworkConfig {
    return new EKSResponsesDeleteClusterClusterKubernetesNetworkConfig(this.__scope, this.__resources, this.__input);
  }

  public get logging(): EKSResponsesDeleteClusterClusterLogging {
    return new EKSResponsesDeleteClusterClusterLogging(this.__scope, this.__resources, this.__input);
  }

  public get identity(): EKSResponsesDeleteClusterClusterIdentity {
    return new EKSResponsesDeleteClusterClusterIdentity(this.__scope, this.__resources, this.__input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteCluster.cluster.status'),
        outputPath: 'cluster.status',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.status', props);
    return resource.getResponseField('cluster.status') as unknown as string;
  }

  public get certificateAuthority(): EKSResponsesDeleteClusterClusterCertificateAuthority {
    return new EKSResponsesDeleteClusterClusterCertificateAuthority(this.__scope, this.__resources, this.__input);
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteCluster.cluster.clientRequestToken'),
        outputPath: 'cluster.clientRequestToken',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.clientRequestToken', props);
    return resource.getResponseField('cluster.clientRequestToken') as unknown as string;
  }

  public get platformVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteCluster.cluster.platformVersion'),
        outputPath: 'cluster.platformVersion',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.platformVersion', props);
    return resource.getResponseField('cluster.platformVersion') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteCluster.cluster.tags'),
        outputPath: 'cluster.tags',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.tags', props);
    return resource.getResponseField('cluster.tags') as unknown as Record<string, string>;
  }

  public get encryptionConfig(): shapes.EksEncryptionConfig[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteCluster.cluster.encryptionConfig'),
        outputPath: 'cluster.encryptionConfig',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.encryptionConfig', props);
    return resource.getResponseField('cluster.encryptionConfig') as unknown as shapes.EksEncryptionConfig[];
  }

}

export class EKSResponsesDeleteClusterClusterResourcesVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDeleteClusterRequest) {
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteCluster.cluster.resourcesVpcConfig.subnetIds'),
        outputPath: 'cluster.resourcesVpcConfig.subnetIds',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.resourcesVpcConfig.subnetIds', props);
    return resource.getResponseField('cluster.resourcesVpcConfig.subnetIds') as unknown as string[];
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteCluster.cluster.resourcesVpcConfig.securityGroupIds'),
        outputPath: 'cluster.resourcesVpcConfig.securityGroupIds',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.resourcesVpcConfig.securityGroupIds', props);
    return resource.getResponseField('cluster.resourcesVpcConfig.securityGroupIds') as unknown as string[];
  }

  public get clusterSecurityGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteCluster.cluster.resourcesVpcConfig.clusterSecurityGroupId'),
        outputPath: 'cluster.resourcesVpcConfig.clusterSecurityGroupId',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.resourcesVpcConfig.clusterSecurityGroupId', props);
    return resource.getResponseField('cluster.resourcesVpcConfig.clusterSecurityGroupId') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteCluster.cluster.resourcesVpcConfig.vpcId'),
        outputPath: 'cluster.resourcesVpcConfig.vpcId',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.resourcesVpcConfig.vpcId', props);
    return resource.getResponseField('cluster.resourcesVpcConfig.vpcId') as unknown as string;
  }

  public get endpointPublicAccess(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteCluster.cluster.resourcesVpcConfig.endpointPublicAccess'),
        outputPath: 'cluster.resourcesVpcConfig.endpointPublicAccess',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.resourcesVpcConfig.endpointPublicAccess', props);
    return resource.getResponseField('cluster.resourcesVpcConfig.endpointPublicAccess') as unknown as boolean;
  }

  public get endpointPrivateAccess(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteCluster.cluster.resourcesVpcConfig.endpointPrivateAccess'),
        outputPath: 'cluster.resourcesVpcConfig.endpointPrivateAccess',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.resourcesVpcConfig.endpointPrivateAccess', props);
    return resource.getResponseField('cluster.resourcesVpcConfig.endpointPrivateAccess') as unknown as boolean;
  }

  public get publicAccessCidrs(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteCluster.cluster.resourcesVpcConfig.publicAccessCidrs'),
        outputPath: 'cluster.resourcesVpcConfig.publicAccessCidrs',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.resourcesVpcConfig.publicAccessCidrs', props);
    return resource.getResponseField('cluster.resourcesVpcConfig.publicAccessCidrs') as unknown as string[];
  }

}

export class EKSResponsesDeleteClusterClusterKubernetesNetworkConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDeleteClusterRequest) {
  }

  public get serviceIpv4Cidr(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteCluster.cluster.kubernetesNetworkConfig.serviceIpv4Cidr'),
        outputPath: 'cluster.kubernetesNetworkConfig.serviceIpv4Cidr',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.kubernetesNetworkConfig.serviceIpv4Cidr', props);
    return resource.getResponseField('cluster.kubernetesNetworkConfig.serviceIpv4Cidr') as unknown as string;
  }

}

export class EKSResponsesDeleteClusterClusterLogging {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDeleteClusterRequest) {
  }

  public get clusterLogging(): shapes.EksLogSetup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteCluster.cluster.logging.clusterLogging'),
        outputPath: 'cluster.logging.clusterLogging',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.logging.clusterLogging', props);
    return resource.getResponseField('cluster.logging.clusterLogging') as unknown as shapes.EksLogSetup[];
  }

}

export class EKSResponsesDeleteClusterClusterIdentity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDeleteClusterRequest) {
  }

  public get oidc(): EKSResponsesDeleteClusterClusterIdentityOidc {
    return new EKSResponsesDeleteClusterClusterIdentityOidc(this.__scope, this.__resources, this.__input);
  }

}

export class EKSResponsesDeleteClusterClusterIdentityOidc {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDeleteClusterRequest) {
  }

  public get issuer(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteCluster.cluster.identity.oidc.issuer'),
        outputPath: 'cluster.identity.oidc.issuer',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.identity.oidc.issuer', props);
    return resource.getResponseField('cluster.identity.oidc.issuer') as unknown as string;
  }

}

export class EKSResponsesDeleteClusterClusterCertificateAuthority {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDeleteClusterRequest) {
  }

  public get data(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteCluster.cluster.certificateAuthority.data'),
        outputPath: 'cluster.certificateAuthority.data',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteCluster.cluster.certificateAuthority.data', props);
    return resource.getResponseField('cluster.certificateAuthority.data') as unknown as string;
  }

}

export class EKSResponsesDeleteFargateProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDeleteFargateProfileRequest) {
  }

  public get fargateProfile(): EKSResponsesDeleteFargateProfileFargateProfile {
    return new EKSResponsesDeleteFargateProfileFargateProfile(this.__scope, this.__resources, this.__input);
  }

}

export class EKSResponsesDeleteFargateProfileFargateProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDeleteFargateProfileRequest) {
  }

  public get fargateProfileName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFargateProfile',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteFargateProfile.fargateProfile.fargateProfileName'),
        outputPath: 'fargateProfile.fargateProfileName',
        parameters: {
          clusterName: this.__input.clusterName,
          fargateProfileName: this.__input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFargateProfile.fargateProfile.fargateProfileName', props);
    return resource.getResponseField('fargateProfile.fargateProfileName') as unknown as string;
  }

  public get fargateProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFargateProfile',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteFargateProfile.fargateProfile.fargateProfileArn'),
        outputPath: 'fargateProfile.fargateProfileArn',
        parameters: {
          clusterName: this.__input.clusterName,
          fargateProfileName: this.__input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFargateProfile.fargateProfile.fargateProfileArn', props);
    return resource.getResponseField('fargateProfile.fargateProfileArn') as unknown as string;
  }

  public get clusterName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFargateProfile',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteFargateProfile.fargateProfile.clusterName'),
        outputPath: 'fargateProfile.clusterName',
        parameters: {
          clusterName: this.__input.clusterName,
          fargateProfileName: this.__input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFargateProfile.fargateProfile.clusterName', props);
    return resource.getResponseField('fargateProfile.clusterName') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFargateProfile',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteFargateProfile.fargateProfile.createdAt'),
        outputPath: 'fargateProfile.createdAt',
        parameters: {
          clusterName: this.__input.clusterName,
          fargateProfileName: this.__input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFargateProfile.fargateProfile.createdAt', props);
    return resource.getResponseField('fargateProfile.createdAt') as unknown as string;
  }

  public get podExecutionRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFargateProfile',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteFargateProfile.fargateProfile.podExecutionRoleArn'),
        outputPath: 'fargateProfile.podExecutionRoleArn',
        parameters: {
          clusterName: this.__input.clusterName,
          fargateProfileName: this.__input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFargateProfile.fargateProfile.podExecutionRoleArn', props);
    return resource.getResponseField('fargateProfile.podExecutionRoleArn') as unknown as string;
  }

  public get subnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFargateProfile',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteFargateProfile.fargateProfile.subnets'),
        outputPath: 'fargateProfile.subnets',
        parameters: {
          clusterName: this.__input.clusterName,
          fargateProfileName: this.__input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFargateProfile.fargateProfile.subnets', props);
    return resource.getResponseField('fargateProfile.subnets') as unknown as string[];
  }

  public get selectors(): shapes.EksFargateProfileSelector[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFargateProfile',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteFargateProfile.fargateProfile.selectors'),
        outputPath: 'fargateProfile.selectors',
        parameters: {
          clusterName: this.__input.clusterName,
          fargateProfileName: this.__input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFargateProfile.fargateProfile.selectors', props);
    return resource.getResponseField('fargateProfile.selectors') as unknown as shapes.EksFargateProfileSelector[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFargateProfile',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteFargateProfile.fargateProfile.status'),
        outputPath: 'fargateProfile.status',
        parameters: {
          clusterName: this.__input.clusterName,
          fargateProfileName: this.__input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFargateProfile.fargateProfile.status', props);
    return resource.getResponseField('fargateProfile.status') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFargateProfile',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteFargateProfile.fargateProfile.tags'),
        outputPath: 'fargateProfile.tags',
        parameters: {
          clusterName: this.__input.clusterName,
          fargateProfileName: this.__input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteFargateProfile.fargateProfile.tags', props);
    return resource.getResponseField('fargateProfile.tags') as unknown as Record<string, string>;
  }

}

export class EKSResponsesDeleteNodegroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDeleteNodegroupRequest) {
  }

  public get nodegroup(): EKSResponsesDeleteNodegroupNodegroup {
    return new EKSResponsesDeleteNodegroupNodegroup(this.__scope, this.__resources, this.__input);
  }

}

export class EKSResponsesDeleteNodegroupNodegroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDeleteNodegroupRequest) {
  }

  public get nodegroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteNodegroup.nodegroup.nodegroupName'),
        outputPath: 'nodegroup.nodegroupName',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNodegroup.nodegroup.nodegroupName', props);
    return resource.getResponseField('nodegroup.nodegroupName') as unknown as string;
  }

  public get nodegroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteNodegroup.nodegroup.nodegroupArn'),
        outputPath: 'nodegroup.nodegroupArn',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNodegroup.nodegroup.nodegroupArn', props);
    return resource.getResponseField('nodegroup.nodegroupArn') as unknown as string;
  }

  public get clusterName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteNodegroup.nodegroup.clusterName'),
        outputPath: 'nodegroup.clusterName',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNodegroup.nodegroup.clusterName', props);
    return resource.getResponseField('nodegroup.clusterName') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteNodegroup.nodegroup.version'),
        outputPath: 'nodegroup.version',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNodegroup.nodegroup.version', props);
    return resource.getResponseField('nodegroup.version') as unknown as string;
  }

  public get releaseVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteNodegroup.nodegroup.releaseVersion'),
        outputPath: 'nodegroup.releaseVersion',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNodegroup.nodegroup.releaseVersion', props);
    return resource.getResponseField('nodegroup.releaseVersion') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteNodegroup.nodegroup.createdAt'),
        outputPath: 'nodegroup.createdAt',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNodegroup.nodegroup.createdAt', props);
    return resource.getResponseField('nodegroup.createdAt') as unknown as string;
  }

  public get modifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteNodegroup.nodegroup.modifiedAt'),
        outputPath: 'nodegroup.modifiedAt',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNodegroup.nodegroup.modifiedAt', props);
    return resource.getResponseField('nodegroup.modifiedAt') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteNodegroup.nodegroup.status'),
        outputPath: 'nodegroup.status',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNodegroup.nodegroup.status', props);
    return resource.getResponseField('nodegroup.status') as unknown as string;
  }

  public get scalingConfig(): EKSResponsesDeleteNodegroupNodegroupScalingConfig {
    return new EKSResponsesDeleteNodegroupNodegroupScalingConfig(this.__scope, this.__resources, this.__input);
  }

  public get instanceTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteNodegroup.nodegroup.instanceTypes'),
        outputPath: 'nodegroup.instanceTypes',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNodegroup.nodegroup.instanceTypes', props);
    return resource.getResponseField('nodegroup.instanceTypes') as unknown as string[];
  }

  public get subnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteNodegroup.nodegroup.subnets'),
        outputPath: 'nodegroup.subnets',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNodegroup.nodegroup.subnets', props);
    return resource.getResponseField('nodegroup.subnets') as unknown as string[];
  }

  public get remoteAccess(): EKSResponsesDeleteNodegroupNodegroupRemoteAccess {
    return new EKSResponsesDeleteNodegroupNodegroupRemoteAccess(this.__scope, this.__resources, this.__input);
  }

  public get amiType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteNodegroup.nodegroup.amiType'),
        outputPath: 'nodegroup.amiType',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNodegroup.nodegroup.amiType', props);
    return resource.getResponseField('nodegroup.amiType') as unknown as string;
  }

  public get nodeRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteNodegroup.nodegroup.nodeRole'),
        outputPath: 'nodegroup.nodeRole',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNodegroup.nodegroup.nodeRole', props);
    return resource.getResponseField('nodegroup.nodeRole') as unknown as string;
  }

  public get labels(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteNodegroup.nodegroup.labels'),
        outputPath: 'nodegroup.labels',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNodegroup.nodegroup.labels', props);
    return resource.getResponseField('nodegroup.labels') as unknown as Record<string, string>;
  }

  public get resources(): EKSResponsesDeleteNodegroupNodegroupResources {
    return new EKSResponsesDeleteNodegroupNodegroupResources(this.__scope, this.__resources, this.__input);
  }

  public get diskSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteNodegroup.nodegroup.diskSize'),
        outputPath: 'nodegroup.diskSize',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNodegroup.nodegroup.diskSize', props);
    return resource.getResponseField('nodegroup.diskSize') as unknown as number;
  }

  public get health(): EKSResponsesDeleteNodegroupNodegroupHealth {
    return new EKSResponsesDeleteNodegroupNodegroupHealth(this.__scope, this.__resources, this.__input);
  }

  public get launchTemplate(): EKSResponsesDeleteNodegroupNodegroupLaunchTemplate {
    return new EKSResponsesDeleteNodegroupNodegroupLaunchTemplate(this.__scope, this.__resources, this.__input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteNodegroup.nodegroup.tags'),
        outputPath: 'nodegroup.tags',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNodegroup.nodegroup.tags', props);
    return resource.getResponseField('nodegroup.tags') as unknown as Record<string, string>;
  }

}

export class EKSResponsesDeleteNodegroupNodegroupScalingConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDeleteNodegroupRequest) {
  }

  public get minSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteNodegroup.nodegroup.scalingConfig.minSize'),
        outputPath: 'nodegroup.scalingConfig.minSize',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNodegroup.nodegroup.scalingConfig.minSize', props);
    return resource.getResponseField('nodegroup.scalingConfig.minSize') as unknown as number;
  }

  public get maxSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteNodegroup.nodegroup.scalingConfig.maxSize'),
        outputPath: 'nodegroup.scalingConfig.maxSize',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNodegroup.nodegroup.scalingConfig.maxSize', props);
    return resource.getResponseField('nodegroup.scalingConfig.maxSize') as unknown as number;
  }

  public get desiredSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteNodegroup.nodegroup.scalingConfig.desiredSize'),
        outputPath: 'nodegroup.scalingConfig.desiredSize',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNodegroup.nodegroup.scalingConfig.desiredSize', props);
    return resource.getResponseField('nodegroup.scalingConfig.desiredSize') as unknown as number;
  }

}

export class EKSResponsesDeleteNodegroupNodegroupRemoteAccess {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDeleteNodegroupRequest) {
  }

  public get ec2SshKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteNodegroup.nodegroup.remoteAccess.ec2SshKey'),
        outputPath: 'nodegroup.remoteAccess.ec2SshKey',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNodegroup.nodegroup.remoteAccess.ec2SshKey', props);
    return resource.getResponseField('nodegroup.remoteAccess.ec2SshKey') as unknown as string;
  }

  public get sourceSecurityGroups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteNodegroup.nodegroup.remoteAccess.sourceSecurityGroups'),
        outputPath: 'nodegroup.remoteAccess.sourceSecurityGroups',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNodegroup.nodegroup.remoteAccess.sourceSecurityGroups', props);
    return resource.getResponseField('nodegroup.remoteAccess.sourceSecurityGroups') as unknown as string[];
  }

}

export class EKSResponsesDeleteNodegroupNodegroupResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDeleteNodegroupRequest) {
  }

  public get autoScalingGroups(): shapes.EksAutoScalingGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteNodegroup.nodegroup.resources.autoScalingGroups'),
        outputPath: 'nodegroup.resources.autoScalingGroups',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNodegroup.nodegroup.resources.autoScalingGroups', props);
    return resource.getResponseField('nodegroup.resources.autoScalingGroups') as unknown as shapes.EksAutoScalingGroup[];
  }

  public get remoteAccessSecurityGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteNodegroup.nodegroup.resources.remoteAccessSecurityGroup'),
        outputPath: 'nodegroup.resources.remoteAccessSecurityGroup',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNodegroup.nodegroup.resources.remoteAccessSecurityGroup', props);
    return resource.getResponseField('nodegroup.resources.remoteAccessSecurityGroup') as unknown as string;
  }

}

export class EKSResponsesDeleteNodegroupNodegroupHealth {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDeleteNodegroupRequest) {
  }

  public get issues(): shapes.EksIssue[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteNodegroup.nodegroup.health.issues'),
        outputPath: 'nodegroup.health.issues',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNodegroup.nodegroup.health.issues', props);
    return resource.getResponseField('nodegroup.health.issues') as unknown as shapes.EksIssue[];
  }

}

export class EKSResponsesDeleteNodegroupNodegroupLaunchTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDeleteNodegroupRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteNodegroup.nodegroup.launchTemplate.name'),
        outputPath: 'nodegroup.launchTemplate.name',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNodegroup.nodegroup.launchTemplate.name', props);
    return resource.getResponseField('nodegroup.launchTemplate.name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteNodegroup.nodegroup.launchTemplate.version'),
        outputPath: 'nodegroup.launchTemplate.version',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNodegroup.nodegroup.launchTemplate.version', props);
    return resource.getResponseField('nodegroup.launchTemplate.version') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DeleteNodegroup.nodegroup.launchTemplate.id'),
        outputPath: 'nodegroup.launchTemplate.id',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteNodegroup.nodegroup.launchTemplate.id', props);
    return resource.getResponseField('nodegroup.launchTemplate.id') as unknown as string;
  }

}

export class EKSResponsesDescribeCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDescribeClusterRequest) {
  }

  public get cluster(): EKSResponsesDescribeClusterCluster {
    return new EKSResponsesDescribeClusterCluster(this.__scope, this.__resources, this.__input);
  }

}

export class EKSResponsesDescribeClusterCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDescribeClusterRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeCluster.cluster.name'),
        outputPath: 'cluster.name',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.cluster.name', props);
    return resource.getResponseField('cluster.name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeCluster.cluster.arn'),
        outputPath: 'cluster.arn',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.cluster.arn', props);
    return resource.getResponseField('cluster.arn') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeCluster.cluster.createdAt'),
        outputPath: 'cluster.createdAt',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.cluster.createdAt', props);
    return resource.getResponseField('cluster.createdAt') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeCluster.cluster.version'),
        outputPath: 'cluster.version',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.cluster.version', props);
    return resource.getResponseField('cluster.version') as unknown as string;
  }

  public get endpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeCluster.cluster.endpoint'),
        outputPath: 'cluster.endpoint',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.cluster.endpoint', props);
    return resource.getResponseField('cluster.endpoint') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeCluster.cluster.roleArn'),
        outputPath: 'cluster.roleArn',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.cluster.roleArn', props);
    return resource.getResponseField('cluster.roleArn') as unknown as string;
  }

  public get resourcesVpcConfig(): EKSResponsesDescribeClusterClusterResourcesVpcConfig {
    return new EKSResponsesDescribeClusterClusterResourcesVpcConfig(this.__scope, this.__resources, this.__input);
  }

  public get kubernetesNetworkConfig(): EKSResponsesDescribeClusterClusterKubernetesNetworkConfig {
    return new EKSResponsesDescribeClusterClusterKubernetesNetworkConfig(this.__scope, this.__resources, this.__input);
  }

  public get logging(): EKSResponsesDescribeClusterClusterLogging {
    return new EKSResponsesDescribeClusterClusterLogging(this.__scope, this.__resources, this.__input);
  }

  public get identity(): EKSResponsesDescribeClusterClusterIdentity {
    return new EKSResponsesDescribeClusterClusterIdentity(this.__scope, this.__resources, this.__input);
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeCluster.cluster.status'),
        outputPath: 'cluster.status',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.cluster.status', props);
    return resource.getResponseField('cluster.status') as unknown as string;
  }

  public get certificateAuthority(): EKSResponsesDescribeClusterClusterCertificateAuthority {
    return new EKSResponsesDescribeClusterClusterCertificateAuthority(this.__scope, this.__resources, this.__input);
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeCluster.cluster.clientRequestToken'),
        outputPath: 'cluster.clientRequestToken',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.cluster.clientRequestToken', props);
    return resource.getResponseField('cluster.clientRequestToken') as unknown as string;
  }

  public get platformVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeCluster.cluster.platformVersion'),
        outputPath: 'cluster.platformVersion',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.cluster.platformVersion', props);
    return resource.getResponseField('cluster.platformVersion') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeCluster.cluster.tags'),
        outputPath: 'cluster.tags',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.cluster.tags', props);
    return resource.getResponseField('cluster.tags') as unknown as Record<string, string>;
  }

  public get encryptionConfig(): shapes.EksEncryptionConfig[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeCluster.cluster.encryptionConfig'),
        outputPath: 'cluster.encryptionConfig',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.cluster.encryptionConfig', props);
    return resource.getResponseField('cluster.encryptionConfig') as unknown as shapes.EksEncryptionConfig[];
  }

}

export class EKSResponsesDescribeClusterClusterResourcesVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDescribeClusterRequest) {
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeCluster.cluster.resourcesVpcConfig.subnetIds'),
        outputPath: 'cluster.resourcesVpcConfig.subnetIds',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.cluster.resourcesVpcConfig.subnetIds', props);
    return resource.getResponseField('cluster.resourcesVpcConfig.subnetIds') as unknown as string[];
  }

  public get securityGroupIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeCluster.cluster.resourcesVpcConfig.securityGroupIds'),
        outputPath: 'cluster.resourcesVpcConfig.securityGroupIds',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.cluster.resourcesVpcConfig.securityGroupIds', props);
    return resource.getResponseField('cluster.resourcesVpcConfig.securityGroupIds') as unknown as string[];
  }

  public get clusterSecurityGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeCluster.cluster.resourcesVpcConfig.clusterSecurityGroupId'),
        outputPath: 'cluster.resourcesVpcConfig.clusterSecurityGroupId',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.cluster.resourcesVpcConfig.clusterSecurityGroupId', props);
    return resource.getResponseField('cluster.resourcesVpcConfig.clusterSecurityGroupId') as unknown as string;
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeCluster.cluster.resourcesVpcConfig.vpcId'),
        outputPath: 'cluster.resourcesVpcConfig.vpcId',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.cluster.resourcesVpcConfig.vpcId', props);
    return resource.getResponseField('cluster.resourcesVpcConfig.vpcId') as unknown as string;
  }

  public get endpointPublicAccess(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeCluster.cluster.resourcesVpcConfig.endpointPublicAccess'),
        outputPath: 'cluster.resourcesVpcConfig.endpointPublicAccess',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.cluster.resourcesVpcConfig.endpointPublicAccess', props);
    return resource.getResponseField('cluster.resourcesVpcConfig.endpointPublicAccess') as unknown as boolean;
  }

  public get endpointPrivateAccess(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeCluster.cluster.resourcesVpcConfig.endpointPrivateAccess'),
        outputPath: 'cluster.resourcesVpcConfig.endpointPrivateAccess',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.cluster.resourcesVpcConfig.endpointPrivateAccess', props);
    return resource.getResponseField('cluster.resourcesVpcConfig.endpointPrivateAccess') as unknown as boolean;
  }

  public get publicAccessCidrs(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeCluster.cluster.resourcesVpcConfig.publicAccessCidrs'),
        outputPath: 'cluster.resourcesVpcConfig.publicAccessCidrs',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.cluster.resourcesVpcConfig.publicAccessCidrs', props);
    return resource.getResponseField('cluster.resourcesVpcConfig.publicAccessCidrs') as unknown as string[];
  }

}

export class EKSResponsesDescribeClusterClusterKubernetesNetworkConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDescribeClusterRequest) {
  }

  public get serviceIpv4Cidr(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeCluster.cluster.kubernetesNetworkConfig.serviceIpv4Cidr'),
        outputPath: 'cluster.kubernetesNetworkConfig.serviceIpv4Cidr',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.cluster.kubernetesNetworkConfig.serviceIpv4Cidr', props);
    return resource.getResponseField('cluster.kubernetesNetworkConfig.serviceIpv4Cidr') as unknown as string;
  }

}

export class EKSResponsesDescribeClusterClusterLogging {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDescribeClusterRequest) {
  }

  public get clusterLogging(): shapes.EksLogSetup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeCluster.cluster.logging.clusterLogging'),
        outputPath: 'cluster.logging.clusterLogging',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.cluster.logging.clusterLogging', props);
    return resource.getResponseField('cluster.logging.clusterLogging') as unknown as shapes.EksLogSetup[];
  }

}

export class EKSResponsesDescribeClusterClusterIdentity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDescribeClusterRequest) {
  }

  public get oidc(): EKSResponsesDescribeClusterClusterIdentityOidc {
    return new EKSResponsesDescribeClusterClusterIdentityOidc(this.__scope, this.__resources, this.__input);
  }

}

export class EKSResponsesDescribeClusterClusterIdentityOidc {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDescribeClusterRequest) {
  }

  public get issuer(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeCluster.cluster.identity.oidc.issuer'),
        outputPath: 'cluster.identity.oidc.issuer',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.cluster.identity.oidc.issuer', props);
    return resource.getResponseField('cluster.identity.oidc.issuer') as unknown as string;
  }

}

export class EKSResponsesDescribeClusterClusterCertificateAuthority {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDescribeClusterRequest) {
  }

  public get data(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeCluster',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeCluster.cluster.certificateAuthority.data'),
        outputPath: 'cluster.certificateAuthority.data',
        parameters: {
          name: this.__input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeCluster.cluster.certificateAuthority.data', props);
    return resource.getResponseField('cluster.certificateAuthority.data') as unknown as string;
  }

}

export class EKSResponsesDescribeFargateProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDescribeFargateProfileRequest) {
  }

  public get fargateProfile(): EKSResponsesDescribeFargateProfileFargateProfile {
    return new EKSResponsesDescribeFargateProfileFargateProfile(this.__scope, this.__resources, this.__input);
  }

}

export class EKSResponsesDescribeFargateProfileFargateProfile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDescribeFargateProfileRequest) {
  }

  public get fargateProfileName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFargateProfile',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeFargateProfile.fargateProfile.fargateProfileName'),
        outputPath: 'fargateProfile.fargateProfileName',
        parameters: {
          clusterName: this.__input.clusterName,
          fargateProfileName: this.__input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFargateProfile.fargateProfile.fargateProfileName', props);
    return resource.getResponseField('fargateProfile.fargateProfileName') as unknown as string;
  }

  public get fargateProfileArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFargateProfile',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeFargateProfile.fargateProfile.fargateProfileArn'),
        outputPath: 'fargateProfile.fargateProfileArn',
        parameters: {
          clusterName: this.__input.clusterName,
          fargateProfileName: this.__input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFargateProfile.fargateProfile.fargateProfileArn', props);
    return resource.getResponseField('fargateProfile.fargateProfileArn') as unknown as string;
  }

  public get clusterName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFargateProfile',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeFargateProfile.fargateProfile.clusterName'),
        outputPath: 'fargateProfile.clusterName',
        parameters: {
          clusterName: this.__input.clusterName,
          fargateProfileName: this.__input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFargateProfile.fargateProfile.clusterName', props);
    return resource.getResponseField('fargateProfile.clusterName') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFargateProfile',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeFargateProfile.fargateProfile.createdAt'),
        outputPath: 'fargateProfile.createdAt',
        parameters: {
          clusterName: this.__input.clusterName,
          fargateProfileName: this.__input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFargateProfile.fargateProfile.createdAt', props);
    return resource.getResponseField('fargateProfile.createdAt') as unknown as string;
  }

  public get podExecutionRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFargateProfile',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeFargateProfile.fargateProfile.podExecutionRoleArn'),
        outputPath: 'fargateProfile.podExecutionRoleArn',
        parameters: {
          clusterName: this.__input.clusterName,
          fargateProfileName: this.__input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFargateProfile.fargateProfile.podExecutionRoleArn', props);
    return resource.getResponseField('fargateProfile.podExecutionRoleArn') as unknown as string;
  }

  public get subnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFargateProfile',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeFargateProfile.fargateProfile.subnets'),
        outputPath: 'fargateProfile.subnets',
        parameters: {
          clusterName: this.__input.clusterName,
          fargateProfileName: this.__input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFargateProfile.fargateProfile.subnets', props);
    return resource.getResponseField('fargateProfile.subnets') as unknown as string[];
  }

  public get selectors(): shapes.EksFargateProfileSelector[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFargateProfile',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeFargateProfile.fargateProfile.selectors'),
        outputPath: 'fargateProfile.selectors',
        parameters: {
          clusterName: this.__input.clusterName,
          fargateProfileName: this.__input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFargateProfile.fargateProfile.selectors', props);
    return resource.getResponseField('fargateProfile.selectors') as unknown as shapes.EksFargateProfileSelector[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFargateProfile',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeFargateProfile.fargateProfile.status'),
        outputPath: 'fargateProfile.status',
        parameters: {
          clusterName: this.__input.clusterName,
          fargateProfileName: this.__input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFargateProfile.fargateProfile.status', props);
    return resource.getResponseField('fargateProfile.status') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFargateProfile',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeFargateProfile.fargateProfile.tags'),
        outputPath: 'fargateProfile.tags',
        parameters: {
          clusterName: this.__input.clusterName,
          fargateProfileName: this.__input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFargateProfile.fargateProfile.tags', props);
    return resource.getResponseField('fargateProfile.tags') as unknown as Record<string, string>;
  }

}

export class EKSResponsesDescribeNodegroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDescribeNodegroupRequest) {
  }

  public get nodegroup(): EKSResponsesDescribeNodegroupNodegroup {
    return new EKSResponsesDescribeNodegroupNodegroup(this.__scope, this.__resources, this.__input);
  }

}

export class EKSResponsesDescribeNodegroupNodegroup {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDescribeNodegroupRequest) {
  }

  public get nodegroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeNodegroup.nodegroup.nodegroupName'),
        outputPath: 'nodegroup.nodegroupName',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNodegroup.nodegroup.nodegroupName', props);
    return resource.getResponseField('nodegroup.nodegroupName') as unknown as string;
  }

  public get nodegroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeNodegroup.nodegroup.nodegroupArn'),
        outputPath: 'nodegroup.nodegroupArn',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNodegroup.nodegroup.nodegroupArn', props);
    return resource.getResponseField('nodegroup.nodegroupArn') as unknown as string;
  }

  public get clusterName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeNodegroup.nodegroup.clusterName'),
        outputPath: 'nodegroup.clusterName',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNodegroup.nodegroup.clusterName', props);
    return resource.getResponseField('nodegroup.clusterName') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeNodegroup.nodegroup.version'),
        outputPath: 'nodegroup.version',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNodegroup.nodegroup.version', props);
    return resource.getResponseField('nodegroup.version') as unknown as string;
  }

  public get releaseVersion(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeNodegroup.nodegroup.releaseVersion'),
        outputPath: 'nodegroup.releaseVersion',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNodegroup.nodegroup.releaseVersion', props);
    return resource.getResponseField('nodegroup.releaseVersion') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeNodegroup.nodegroup.createdAt'),
        outputPath: 'nodegroup.createdAt',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNodegroup.nodegroup.createdAt', props);
    return resource.getResponseField('nodegroup.createdAt') as unknown as string;
  }

  public get modifiedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeNodegroup.nodegroup.modifiedAt'),
        outputPath: 'nodegroup.modifiedAt',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNodegroup.nodegroup.modifiedAt', props);
    return resource.getResponseField('nodegroup.modifiedAt') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeNodegroup.nodegroup.status'),
        outputPath: 'nodegroup.status',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNodegroup.nodegroup.status', props);
    return resource.getResponseField('nodegroup.status') as unknown as string;
  }

  public get scalingConfig(): EKSResponsesDescribeNodegroupNodegroupScalingConfig {
    return new EKSResponsesDescribeNodegroupNodegroupScalingConfig(this.__scope, this.__resources, this.__input);
  }

  public get instanceTypes(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeNodegroup.nodegroup.instanceTypes'),
        outputPath: 'nodegroup.instanceTypes',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNodegroup.nodegroup.instanceTypes', props);
    return resource.getResponseField('nodegroup.instanceTypes') as unknown as string[];
  }

  public get subnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeNodegroup.nodegroup.subnets'),
        outputPath: 'nodegroup.subnets',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNodegroup.nodegroup.subnets', props);
    return resource.getResponseField('nodegroup.subnets') as unknown as string[];
  }

  public get remoteAccess(): EKSResponsesDescribeNodegroupNodegroupRemoteAccess {
    return new EKSResponsesDescribeNodegroupNodegroupRemoteAccess(this.__scope, this.__resources, this.__input);
  }

  public get amiType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeNodegroup.nodegroup.amiType'),
        outputPath: 'nodegroup.amiType',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNodegroup.nodegroup.amiType', props);
    return resource.getResponseField('nodegroup.amiType') as unknown as string;
  }

  public get nodeRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeNodegroup.nodegroup.nodeRole'),
        outputPath: 'nodegroup.nodeRole',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNodegroup.nodegroup.nodeRole', props);
    return resource.getResponseField('nodegroup.nodeRole') as unknown as string;
  }

  public get labels(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeNodegroup.nodegroup.labels'),
        outputPath: 'nodegroup.labels',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNodegroup.nodegroup.labels', props);
    return resource.getResponseField('nodegroup.labels') as unknown as Record<string, string>;
  }

  public get resources(): EKSResponsesDescribeNodegroupNodegroupResources {
    return new EKSResponsesDescribeNodegroupNodegroupResources(this.__scope, this.__resources, this.__input);
  }

  public get diskSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeNodegroup.nodegroup.diskSize'),
        outputPath: 'nodegroup.diskSize',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNodegroup.nodegroup.diskSize', props);
    return resource.getResponseField('nodegroup.diskSize') as unknown as number;
  }

  public get health(): EKSResponsesDescribeNodegroupNodegroupHealth {
    return new EKSResponsesDescribeNodegroupNodegroupHealth(this.__scope, this.__resources, this.__input);
  }

  public get launchTemplate(): EKSResponsesDescribeNodegroupNodegroupLaunchTemplate {
    return new EKSResponsesDescribeNodegroupNodegroupLaunchTemplate(this.__scope, this.__resources, this.__input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeNodegroup.nodegroup.tags'),
        outputPath: 'nodegroup.tags',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNodegroup.nodegroup.tags', props);
    return resource.getResponseField('nodegroup.tags') as unknown as Record<string, string>;
  }

}

export class EKSResponsesDescribeNodegroupNodegroupScalingConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDescribeNodegroupRequest) {
  }

  public get minSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeNodegroup.nodegroup.scalingConfig.minSize'),
        outputPath: 'nodegroup.scalingConfig.minSize',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNodegroup.nodegroup.scalingConfig.minSize', props);
    return resource.getResponseField('nodegroup.scalingConfig.minSize') as unknown as number;
  }

  public get maxSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeNodegroup.nodegroup.scalingConfig.maxSize'),
        outputPath: 'nodegroup.scalingConfig.maxSize',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNodegroup.nodegroup.scalingConfig.maxSize', props);
    return resource.getResponseField('nodegroup.scalingConfig.maxSize') as unknown as number;
  }

  public get desiredSize(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeNodegroup.nodegroup.scalingConfig.desiredSize'),
        outputPath: 'nodegroup.scalingConfig.desiredSize',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNodegroup.nodegroup.scalingConfig.desiredSize', props);
    return resource.getResponseField('nodegroup.scalingConfig.desiredSize') as unknown as number;
  }

}

export class EKSResponsesDescribeNodegroupNodegroupRemoteAccess {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDescribeNodegroupRequest) {
  }

  public get ec2SshKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeNodegroup.nodegroup.remoteAccess.ec2SshKey'),
        outputPath: 'nodegroup.remoteAccess.ec2SshKey',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNodegroup.nodegroup.remoteAccess.ec2SshKey', props);
    return resource.getResponseField('nodegroup.remoteAccess.ec2SshKey') as unknown as string;
  }

  public get sourceSecurityGroups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeNodegroup.nodegroup.remoteAccess.sourceSecurityGroups'),
        outputPath: 'nodegroup.remoteAccess.sourceSecurityGroups',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNodegroup.nodegroup.remoteAccess.sourceSecurityGroups', props);
    return resource.getResponseField('nodegroup.remoteAccess.sourceSecurityGroups') as unknown as string[];
  }

}

export class EKSResponsesDescribeNodegroupNodegroupResources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDescribeNodegroupRequest) {
  }

  public get autoScalingGroups(): shapes.EksAutoScalingGroup[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeNodegroup.nodegroup.resources.autoScalingGroups'),
        outputPath: 'nodegroup.resources.autoScalingGroups',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNodegroup.nodegroup.resources.autoScalingGroups', props);
    return resource.getResponseField('nodegroup.resources.autoScalingGroups') as unknown as shapes.EksAutoScalingGroup[];
  }

  public get remoteAccessSecurityGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeNodegroup.nodegroup.resources.remoteAccessSecurityGroup'),
        outputPath: 'nodegroup.resources.remoteAccessSecurityGroup',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNodegroup.nodegroup.resources.remoteAccessSecurityGroup', props);
    return resource.getResponseField('nodegroup.resources.remoteAccessSecurityGroup') as unknown as string;
  }

}

export class EKSResponsesDescribeNodegroupNodegroupHealth {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDescribeNodegroupRequest) {
  }

  public get issues(): shapes.EksIssue[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeNodegroup.nodegroup.health.issues'),
        outputPath: 'nodegroup.health.issues',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNodegroup.nodegroup.health.issues', props);
    return resource.getResponseField('nodegroup.health.issues') as unknown as shapes.EksIssue[];
  }

}

export class EKSResponsesDescribeNodegroupNodegroupLaunchTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDescribeNodegroupRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeNodegroup.nodegroup.launchTemplate.name'),
        outputPath: 'nodegroup.launchTemplate.name',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNodegroup.nodegroup.launchTemplate.name', props);
    return resource.getResponseField('nodegroup.launchTemplate.name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeNodegroup.nodegroup.launchTemplate.version'),
        outputPath: 'nodegroup.launchTemplate.version',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNodegroup.nodegroup.launchTemplate.version', props);
    return resource.getResponseField('nodegroup.launchTemplate.version') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeNodegroup',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeNodegroup.nodegroup.launchTemplate.id'),
        outputPath: 'nodegroup.launchTemplate.id',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeNodegroup.nodegroup.launchTemplate.id', props);
    return resource.getResponseField('nodegroup.launchTemplate.id') as unknown as string;
  }

}

export class EKSResponsesDescribeUpdate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDescribeUpdateRequest) {
  }

  public get update(): EKSResponsesDescribeUpdateUpdate {
    return new EKSResponsesDescribeUpdateUpdate(this.__scope, this.__resources, this.__input);
  }

}

export class EKSResponsesDescribeUpdateUpdate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksDescribeUpdateRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUpdate',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeUpdate.update.id'),
        outputPath: 'update.id',
        parameters: {
          name: this.__input.name,
          updateId: this.__input.updateId,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUpdate.update.id', props);
    return resource.getResponseField('update.id') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUpdate',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeUpdate.update.status'),
        outputPath: 'update.status',
        parameters: {
          name: this.__input.name,
          updateId: this.__input.updateId,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUpdate.update.status', props);
    return resource.getResponseField('update.status') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUpdate',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeUpdate.update.type'),
        outputPath: 'update.type',
        parameters: {
          name: this.__input.name,
          updateId: this.__input.updateId,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUpdate.update.type', props);
    return resource.getResponseField('update.type') as unknown as string;
  }

  public get params(): shapes.EksUpdateParam[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUpdate',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeUpdate.update.params'),
        outputPath: 'update.params',
        parameters: {
          name: this.__input.name,
          updateId: this.__input.updateId,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUpdate.update.params', props);
    return resource.getResponseField('update.params') as unknown as shapes.EksUpdateParam[];
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUpdate',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeUpdate.update.createdAt'),
        outputPath: 'update.createdAt',
        parameters: {
          name: this.__input.name,
          updateId: this.__input.updateId,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUpdate.update.createdAt', props);
    return resource.getResponseField('update.createdAt') as unknown as string;
  }

  public get errors(): shapes.EksErrorDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeUpdate',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.DescribeUpdate.update.errors'),
        outputPath: 'update.errors',
        parameters: {
          name: this.__input.name,
          updateId: this.__input.updateId,
          nodegroupName: this.__input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeUpdate.update.errors', props);
    return resource.getResponseField('update.errors') as unknown as shapes.EksErrorDetail[];
  }

}

export class EKSResponsesListClusters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksListClustersRequest) {
  }

  public get clusters(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listClusters',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.ListClusters.clusters'),
        outputPath: 'clusters',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListClusters.clusters', props);
    return resource.getResponseField('clusters') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listClusters',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.ListClusters.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListClusters.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class EKSResponsesListFargateProfiles {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksListFargateProfilesRequest) {
  }

  public get fargateProfileNames(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFargateProfiles',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.ListFargateProfiles.fargateProfileNames'),
        outputPath: 'fargateProfileNames',
        parameters: {
          clusterName: this.__input.clusterName,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFargateProfiles.fargateProfileNames', props);
    return resource.getResponseField('fargateProfileNames') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFargateProfiles',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.ListFargateProfiles.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          clusterName: this.__input.clusterName,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFargateProfiles.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class EKSResponsesListNodegroups {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksListNodegroupsRequest) {
  }

  public get nodegroups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNodegroups',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.ListNodegroups.nodegroups'),
        outputPath: 'nodegroups',
        parameters: {
          clusterName: this.__input.clusterName,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNodegroups.nodegroups', props);
    return resource.getResponseField('nodegroups') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listNodegroups',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.ListNodegroups.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          clusterName: this.__input.clusterName,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListNodegroups.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class EKSResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class EKSResponsesListUpdates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksListUpdatesRequest) {
  }

  public get updateIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUpdates',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.ListUpdates.updateIds'),
        outputPath: 'updateIds',
        parameters: {
          name: this.__input.name,
          nodegroupName: this.__input.nodegroupName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUpdates.updateIds', props);
    return resource.getResponseField('updateIds') as unknown as string[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listUpdates',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.ListUpdates.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          name: this.__input.name,
          nodegroupName: this.__input.nodegroupName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListUpdates.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class EKSResponsesUpdateClusterConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksUpdateClusterConfigRequest) {
  }

  public get update(): EKSResponsesUpdateClusterConfigUpdate {
    return new EKSResponsesUpdateClusterConfigUpdate(this.__scope, this.__resources, this.__input);
  }

}

export class EKSResponsesUpdateClusterConfigUpdate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksUpdateClusterConfigRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterConfig',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.UpdateClusterConfig.update.id'),
        outputPath: 'update.id',
        parameters: {
          name: this.__input.name,
          resourcesVpcConfig: {
            subnetIds: this.__input.resourcesVpcConfig?.subnetIds,
            securityGroupIds: this.__input.resourcesVpcConfig?.securityGroupIds,
            endpointPublicAccess: this.__input.resourcesVpcConfig?.endpointPublicAccess,
            endpointPrivateAccess: this.__input.resourcesVpcConfig?.endpointPrivateAccess,
            publicAccessCidrs: this.__input.resourcesVpcConfig?.publicAccessCidrs,
          },
          logging: {
            clusterLogging: this.__input.logging?.clusterLogging,
          },
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterConfig.update.id', props);
    return resource.getResponseField('update.id') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterConfig',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.UpdateClusterConfig.update.status'),
        outputPath: 'update.status',
        parameters: {
          name: this.__input.name,
          resourcesVpcConfig: {
            subnetIds: this.__input.resourcesVpcConfig?.subnetIds,
            securityGroupIds: this.__input.resourcesVpcConfig?.securityGroupIds,
            endpointPublicAccess: this.__input.resourcesVpcConfig?.endpointPublicAccess,
            endpointPrivateAccess: this.__input.resourcesVpcConfig?.endpointPrivateAccess,
            publicAccessCidrs: this.__input.resourcesVpcConfig?.publicAccessCidrs,
          },
          logging: {
            clusterLogging: this.__input.logging?.clusterLogging,
          },
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterConfig.update.status', props);
    return resource.getResponseField('update.status') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterConfig',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.UpdateClusterConfig.update.type'),
        outputPath: 'update.type',
        parameters: {
          name: this.__input.name,
          resourcesVpcConfig: {
            subnetIds: this.__input.resourcesVpcConfig?.subnetIds,
            securityGroupIds: this.__input.resourcesVpcConfig?.securityGroupIds,
            endpointPublicAccess: this.__input.resourcesVpcConfig?.endpointPublicAccess,
            endpointPrivateAccess: this.__input.resourcesVpcConfig?.endpointPrivateAccess,
            publicAccessCidrs: this.__input.resourcesVpcConfig?.publicAccessCidrs,
          },
          logging: {
            clusterLogging: this.__input.logging?.clusterLogging,
          },
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterConfig.update.type', props);
    return resource.getResponseField('update.type') as unknown as string;
  }

  public get params(): shapes.EksUpdateParam[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterConfig',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.UpdateClusterConfig.update.params'),
        outputPath: 'update.params',
        parameters: {
          name: this.__input.name,
          resourcesVpcConfig: {
            subnetIds: this.__input.resourcesVpcConfig?.subnetIds,
            securityGroupIds: this.__input.resourcesVpcConfig?.securityGroupIds,
            endpointPublicAccess: this.__input.resourcesVpcConfig?.endpointPublicAccess,
            endpointPrivateAccess: this.__input.resourcesVpcConfig?.endpointPrivateAccess,
            publicAccessCidrs: this.__input.resourcesVpcConfig?.publicAccessCidrs,
          },
          logging: {
            clusterLogging: this.__input.logging?.clusterLogging,
          },
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterConfig.update.params', props);
    return resource.getResponseField('update.params') as unknown as shapes.EksUpdateParam[];
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterConfig',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.UpdateClusterConfig.update.createdAt'),
        outputPath: 'update.createdAt',
        parameters: {
          name: this.__input.name,
          resourcesVpcConfig: {
            subnetIds: this.__input.resourcesVpcConfig?.subnetIds,
            securityGroupIds: this.__input.resourcesVpcConfig?.securityGroupIds,
            endpointPublicAccess: this.__input.resourcesVpcConfig?.endpointPublicAccess,
            endpointPrivateAccess: this.__input.resourcesVpcConfig?.endpointPrivateAccess,
            publicAccessCidrs: this.__input.resourcesVpcConfig?.publicAccessCidrs,
          },
          logging: {
            clusterLogging: this.__input.logging?.clusterLogging,
          },
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterConfig.update.createdAt', props);
    return resource.getResponseField('update.createdAt') as unknown as string;
  }

  public get errors(): shapes.EksErrorDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterConfig',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.UpdateClusterConfig.update.errors'),
        outputPath: 'update.errors',
        parameters: {
          name: this.__input.name,
          resourcesVpcConfig: {
            subnetIds: this.__input.resourcesVpcConfig?.subnetIds,
            securityGroupIds: this.__input.resourcesVpcConfig?.securityGroupIds,
            endpointPublicAccess: this.__input.resourcesVpcConfig?.endpointPublicAccess,
            endpointPrivateAccess: this.__input.resourcesVpcConfig?.endpointPrivateAccess,
            publicAccessCidrs: this.__input.resourcesVpcConfig?.publicAccessCidrs,
          },
          logging: {
            clusterLogging: this.__input.logging?.clusterLogging,
          },
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterConfig.update.errors', props);
    return resource.getResponseField('update.errors') as unknown as shapes.EksErrorDetail[];
  }

}

export class EKSResponsesUpdateClusterVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksUpdateClusterVersionRequest) {
  }

  public get update(): EKSResponsesUpdateClusterVersionUpdate {
    return new EKSResponsesUpdateClusterVersionUpdate(this.__scope, this.__resources, this.__input);
  }

}

export class EKSResponsesUpdateClusterVersionUpdate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksUpdateClusterVersionRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterVersion',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.UpdateClusterVersion.update.id'),
        outputPath: 'update.id',
        parameters: {
          name: this.__input.name,
          version: this.__input.version,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterVersion.update.id', props);
    return resource.getResponseField('update.id') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterVersion',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.UpdateClusterVersion.update.status'),
        outputPath: 'update.status',
        parameters: {
          name: this.__input.name,
          version: this.__input.version,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterVersion.update.status', props);
    return resource.getResponseField('update.status') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterVersion',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.UpdateClusterVersion.update.type'),
        outputPath: 'update.type',
        parameters: {
          name: this.__input.name,
          version: this.__input.version,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterVersion.update.type', props);
    return resource.getResponseField('update.type') as unknown as string;
  }

  public get params(): shapes.EksUpdateParam[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterVersion',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.UpdateClusterVersion.update.params'),
        outputPath: 'update.params',
        parameters: {
          name: this.__input.name,
          version: this.__input.version,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterVersion.update.params', props);
    return resource.getResponseField('update.params') as unknown as shapes.EksUpdateParam[];
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterVersion',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.UpdateClusterVersion.update.createdAt'),
        outputPath: 'update.createdAt',
        parameters: {
          name: this.__input.name,
          version: this.__input.version,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterVersion.update.createdAt', props);
    return resource.getResponseField('update.createdAt') as unknown as string;
  }

  public get errors(): shapes.EksErrorDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateClusterVersion',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.UpdateClusterVersion.update.errors'),
        outputPath: 'update.errors',
        parameters: {
          name: this.__input.name,
          version: this.__input.version,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateClusterVersion.update.errors', props);
    return resource.getResponseField('update.errors') as unknown as shapes.EksErrorDetail[];
  }

}

export class EKSResponsesUpdateNodegroupConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksUpdateNodegroupConfigRequest) {
  }

  public get update(): EKSResponsesUpdateNodegroupConfigUpdate {
    return new EKSResponsesUpdateNodegroupConfigUpdate(this.__scope, this.__resources, this.__input);
  }

}

export class EKSResponsesUpdateNodegroupConfigUpdate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksUpdateNodegroupConfigRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNodegroupConfig',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.UpdateNodegroupConfig.update.id'),
        outputPath: 'update.id',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          labels: {
            addOrUpdateLabels: this.__input.labels?.addOrUpdateLabels,
            removeLabels: this.__input.labels?.removeLabels,
          },
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateNodegroupConfig.update.id', props);
    return resource.getResponseField('update.id') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNodegroupConfig',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.UpdateNodegroupConfig.update.status'),
        outputPath: 'update.status',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          labels: {
            addOrUpdateLabels: this.__input.labels?.addOrUpdateLabels,
            removeLabels: this.__input.labels?.removeLabels,
          },
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateNodegroupConfig.update.status', props);
    return resource.getResponseField('update.status') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNodegroupConfig',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.UpdateNodegroupConfig.update.type'),
        outputPath: 'update.type',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          labels: {
            addOrUpdateLabels: this.__input.labels?.addOrUpdateLabels,
            removeLabels: this.__input.labels?.removeLabels,
          },
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateNodegroupConfig.update.type', props);
    return resource.getResponseField('update.type') as unknown as string;
  }

  public get params(): shapes.EksUpdateParam[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNodegroupConfig',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.UpdateNodegroupConfig.update.params'),
        outputPath: 'update.params',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          labels: {
            addOrUpdateLabels: this.__input.labels?.addOrUpdateLabels,
            removeLabels: this.__input.labels?.removeLabels,
          },
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateNodegroupConfig.update.params', props);
    return resource.getResponseField('update.params') as unknown as shapes.EksUpdateParam[];
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNodegroupConfig',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.UpdateNodegroupConfig.update.createdAt'),
        outputPath: 'update.createdAt',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          labels: {
            addOrUpdateLabels: this.__input.labels?.addOrUpdateLabels,
            removeLabels: this.__input.labels?.removeLabels,
          },
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateNodegroupConfig.update.createdAt', props);
    return resource.getResponseField('update.createdAt') as unknown as string;
  }

  public get errors(): shapes.EksErrorDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNodegroupConfig',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.UpdateNodegroupConfig.update.errors'),
        outputPath: 'update.errors',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          labels: {
            addOrUpdateLabels: this.__input.labels?.addOrUpdateLabels,
            removeLabels: this.__input.labels?.removeLabels,
          },
          scalingConfig: {
            minSize: this.__input.scalingConfig?.minSize,
            maxSize: this.__input.scalingConfig?.maxSize,
            desiredSize: this.__input.scalingConfig?.desiredSize,
          },
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateNodegroupConfig.update.errors', props);
    return resource.getResponseField('update.errors') as unknown as shapes.EksErrorDetail[];
  }

}

export class EKSResponsesUpdateNodegroupVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksUpdateNodegroupVersionRequest) {
  }

  public get update(): EKSResponsesUpdateNodegroupVersionUpdate {
    return new EKSResponsesUpdateNodegroupVersionUpdate(this.__scope, this.__resources, this.__input);
  }

}

export class EKSResponsesUpdateNodegroupVersionUpdate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EksUpdateNodegroupVersionRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNodegroupVersion',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.UpdateNodegroupVersion.update.id'),
        outputPath: 'update.id',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          force: this.__input.force,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateNodegroupVersion.update.id', props);
    return resource.getResponseField('update.id') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNodegroupVersion',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.UpdateNodegroupVersion.update.status'),
        outputPath: 'update.status',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          force: this.__input.force,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateNodegroupVersion.update.status', props);
    return resource.getResponseField('update.status') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNodegroupVersion',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.UpdateNodegroupVersion.update.type'),
        outputPath: 'update.type',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          force: this.__input.force,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateNodegroupVersion.update.type', props);
    return resource.getResponseField('update.type') as unknown as string;
  }

  public get params(): shapes.EksUpdateParam[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNodegroupVersion',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.UpdateNodegroupVersion.update.params'),
        outputPath: 'update.params',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          force: this.__input.force,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateNodegroupVersion.update.params', props);
    return resource.getResponseField('update.params') as unknown as shapes.EksUpdateParam[];
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNodegroupVersion',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.UpdateNodegroupVersion.update.createdAt'),
        outputPath: 'update.createdAt',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          force: this.__input.force,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateNodegroupVersion.update.createdAt', props);
    return resource.getResponseField('update.createdAt') as unknown as string;
  }

  public get errors(): shapes.EksErrorDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateNodegroupVersion',
        service: 'EKS',
        physicalResourceId: cr.PhysicalResourceId.of('EKS.UpdateNodegroupVersion.update.errors'),
        outputPath: 'update.errors',
        parameters: {
          clusterName: this.__input.clusterName,
          nodegroupName: this.__input.nodegroupName,
          version: this.__input.version,
          releaseVersion: this.__input.releaseVersion,
          launchTemplate: {
            name: this.__input.launchTemplate?.name,
            version: this.__input.launchTemplate?.version,
            id: this.__input.launchTemplate?.id,
          },
          force: this.__input.force,
          clientRequestToken: this.__input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateNodegroupVersion.update.errors', props);
    return resource.getResponseField('update.errors') as unknown as shapes.EksErrorDetail[];
  }

}

