import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class EksClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public createCluster(input: shapes.EksCreateClusterRequest): EKSCreateCluster {
    return new EKSCreateCluster(this, 'CreateCluster', this.__resources, input);
  }

  public createFargateProfile(input: shapes.EksCreateFargateProfileRequest): EKSCreateFargateProfile {
    return new EKSCreateFargateProfile(this, 'CreateFargateProfile', this.__resources, input);
  }

  public createNodegroup(input: shapes.EksCreateNodegroupRequest): EKSCreateNodegroup {
    return new EKSCreateNodegroup(this, 'CreateNodegroup', this.__resources, input);
  }

  public deleteCluster(input: shapes.EksDeleteClusterRequest): EKSDeleteCluster {
    return new EKSDeleteCluster(this, 'DeleteCluster', this.__resources, input);
  }

  public deleteFargateProfile(input: shapes.EksDeleteFargateProfileRequest): EKSDeleteFargateProfile {
    return new EKSDeleteFargateProfile(this, 'DeleteFargateProfile', this.__resources, input);
  }

  public deleteNodegroup(input: shapes.EksDeleteNodegroupRequest): EKSDeleteNodegroup {
    return new EKSDeleteNodegroup(this, 'DeleteNodegroup', this.__resources, input);
  }

  public describeCluster(input: shapes.EksDescribeClusterRequest): EKSDescribeCluster {
    return new EKSDescribeCluster(this, 'DescribeCluster', this.__resources, input);
  }

  public describeFargateProfile(input: shapes.EksDescribeFargateProfileRequest): EKSDescribeFargateProfile {
    return new EKSDescribeFargateProfile(this, 'DescribeFargateProfile', this.__resources, input);
  }

  public describeNodegroup(input: shapes.EksDescribeNodegroupRequest): EKSDescribeNodegroup {
    return new EKSDescribeNodegroup(this, 'DescribeNodegroup', this.__resources, input);
  }

  public describeUpdate(input: shapes.EksDescribeUpdateRequest): EKSDescribeUpdate {
    return new EKSDescribeUpdate(this, 'DescribeUpdate', this.__resources, input);
  }

  public listClusters(input: shapes.EksListClustersRequest): EKSListClusters {
    return new EKSListClusters(this, 'ListClusters', this.__resources, input);
  }

  public listFargateProfiles(input: shapes.EksListFargateProfilesRequest): EKSListFargateProfiles {
    return new EKSListFargateProfiles(this, 'ListFargateProfiles', this.__resources, input);
  }

  public listNodegroups(input: shapes.EksListNodegroupsRequest): EKSListNodegroups {
    return new EKSListNodegroups(this, 'ListNodegroups', this.__resources, input);
  }

  public listTagsForResource(input: shapes.EksListTagsForResourceRequest): EKSListTagsForResource {
    return new EKSListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listUpdates(input: shapes.EksListUpdatesRequest): EKSListUpdates {
    return new EKSListUpdates(this, 'ListUpdates', this.__resources, input);
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

  public updateClusterConfig(input: shapes.EksUpdateClusterConfigRequest): EKSUpdateClusterConfig {
    return new EKSUpdateClusterConfig(this, 'UpdateClusterConfig', this.__resources, input);
  }

  public updateClusterVersion(input: shapes.EksUpdateClusterVersionRequest): EKSUpdateClusterVersion {
    return new EKSUpdateClusterVersion(this, 'UpdateClusterVersion', this.__resources, input);
  }

  public updateNodegroupConfig(input: shapes.EksUpdateNodegroupConfigRequest): EKSUpdateNodegroupConfig {
    return new EKSUpdateNodegroupConfig(this, 'UpdateNodegroupConfig', this.__resources, input);
  }

  public updateNodegroupVersion(input: shapes.EksUpdateNodegroupVersionRequest): EKSUpdateNodegroupVersion {
    return new EKSUpdateNodegroupVersion(this, 'UpdateNodegroupVersion', this.__resources, input);
  }

}

export class EKSCreateCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksCreateClusterRequest) {
    super(scope, id);
  }

  public get cluster(): EKSCreateClusterCluster {
    return new EKSCreateClusterCluster(this, 'Cluster', this.__resources, this.input);
  }

}

export class EKSCreateClusterCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksCreateClusterRequest) {
    super(scope, id);
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
          name: this.input.name,
          version: this.input.version,
          roleArn: this.input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.input.logging?.clusterLogging,
          },
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
          encryptionConfig: this.input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.name', props);
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
          name: this.input.name,
          version: this.input.version,
          roleArn: this.input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.input.logging?.clusterLogging,
          },
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
          encryptionConfig: this.input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.arn', props);
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
          name: this.input.name,
          version: this.input.version,
          roleArn: this.input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.input.logging?.clusterLogging,
          },
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
          encryptionConfig: this.input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.createdAt', props);
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
          name: this.input.name,
          version: this.input.version,
          roleArn: this.input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.input.logging?.clusterLogging,
          },
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
          encryptionConfig: this.input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.version', props);
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
          name: this.input.name,
          version: this.input.version,
          roleArn: this.input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.input.logging?.clusterLogging,
          },
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
          encryptionConfig: this.input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.endpoint', props);
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
          name: this.input.name,
          version: this.input.version,
          roleArn: this.input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.input.logging?.clusterLogging,
          },
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
          encryptionConfig: this.input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.roleArn', props);
    return resource.getResponseField('cluster.roleArn') as unknown as string;
  }

  public get resourcesVpcConfig(): EKSCreateClusterClusterResourcesVpcConfig {
    return new EKSCreateClusterClusterResourcesVpcConfig(this, 'ResourcesVpcConfig', this.__resources, this.input);
  }

  public get kubernetesNetworkConfig(): EKSCreateClusterClusterKubernetesNetworkConfig {
    return new EKSCreateClusterClusterKubernetesNetworkConfig(this, 'KubernetesNetworkConfig', this.__resources, this.input);
  }

  public get logging(): EKSCreateClusterClusterLogging {
    return new EKSCreateClusterClusterLogging(this, 'Logging', this.__resources, this.input);
  }

  public get identity(): EKSCreateClusterClusterIdentity {
    return new EKSCreateClusterClusterIdentity(this, 'Identity', this.__resources, this.input);
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
          name: this.input.name,
          version: this.input.version,
          roleArn: this.input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.input.logging?.clusterLogging,
          },
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
          encryptionConfig: this.input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.status', props);
    return resource.getResponseField('cluster.status') as unknown as string;
  }

  public get certificateAuthority(): EKSCreateClusterClusterCertificateAuthority {
    return new EKSCreateClusterClusterCertificateAuthority(this, 'CertificateAuthority', this.__resources, this.input);
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
          name: this.input.name,
          version: this.input.version,
          roleArn: this.input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.input.logging?.clusterLogging,
          },
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
          encryptionConfig: this.input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.clientRequestToken', props);
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
          name: this.input.name,
          version: this.input.version,
          roleArn: this.input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.input.logging?.clusterLogging,
          },
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
          encryptionConfig: this.input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.platformVersion', props);
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
          name: this.input.name,
          version: this.input.version,
          roleArn: this.input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.input.logging?.clusterLogging,
          },
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
          encryptionConfig: this.input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.tags', props);
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
          name: this.input.name,
          version: this.input.version,
          roleArn: this.input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.input.logging?.clusterLogging,
          },
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
          encryptionConfig: this.input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.encryptionConfig', props);
    return resource.getResponseField('cluster.encryptionConfig') as unknown as shapes.EksEncryptionConfig[];
  }

}

export class EKSCreateClusterClusterResourcesVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksCreateClusterRequest) {
    super(scope, id);
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
          name: this.input.name,
          version: this.input.version,
          roleArn: this.input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.input.logging?.clusterLogging,
          },
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
          encryptionConfig: this.input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.resourcesVpcConfig.subnetIds', props);
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
          name: this.input.name,
          version: this.input.version,
          roleArn: this.input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.input.logging?.clusterLogging,
          },
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
          encryptionConfig: this.input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.resourcesVpcConfig.securityGroupIds', props);
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
          name: this.input.name,
          version: this.input.version,
          roleArn: this.input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.input.logging?.clusterLogging,
          },
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
          encryptionConfig: this.input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.resourcesVpcConfig.clusterSecurityGroupId', props);
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
          name: this.input.name,
          version: this.input.version,
          roleArn: this.input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.input.logging?.clusterLogging,
          },
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
          encryptionConfig: this.input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.resourcesVpcConfig.vpcId', props);
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
          name: this.input.name,
          version: this.input.version,
          roleArn: this.input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.input.logging?.clusterLogging,
          },
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
          encryptionConfig: this.input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.resourcesVpcConfig.endpointPublicAccess', props);
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
          name: this.input.name,
          version: this.input.version,
          roleArn: this.input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.input.logging?.clusterLogging,
          },
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
          encryptionConfig: this.input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.resourcesVpcConfig.endpointPrivateAccess', props);
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
          name: this.input.name,
          version: this.input.version,
          roleArn: this.input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.input.logging?.clusterLogging,
          },
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
          encryptionConfig: this.input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.resourcesVpcConfig.publicAccessCidrs', props);
    return resource.getResponseField('cluster.resourcesVpcConfig.publicAccessCidrs') as unknown as string[];
  }

}

export class EKSCreateClusterClusterKubernetesNetworkConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksCreateClusterRequest) {
    super(scope, id);
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
          name: this.input.name,
          version: this.input.version,
          roleArn: this.input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.input.logging?.clusterLogging,
          },
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
          encryptionConfig: this.input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.kubernetesNetworkConfig.serviceIpv4Cidr', props);
    return resource.getResponseField('cluster.kubernetesNetworkConfig.serviceIpv4Cidr') as unknown as string;
  }

}

export class EKSCreateClusterClusterLogging extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksCreateClusterRequest) {
    super(scope, id);
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
          name: this.input.name,
          version: this.input.version,
          roleArn: this.input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.input.logging?.clusterLogging,
          },
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
          encryptionConfig: this.input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.logging.clusterLogging', props);
    return resource.getResponseField('cluster.logging.clusterLogging') as unknown as shapes.EksLogSetup[];
  }

}

export class EKSCreateClusterClusterIdentity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksCreateClusterRequest) {
    super(scope, id);
  }

  public get oidc(): EKSCreateClusterClusterIdentityOidc {
    return new EKSCreateClusterClusterIdentityOidc(this, 'Oidc', this.__resources, this.input);
  }

}

export class EKSCreateClusterClusterIdentityOidc extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksCreateClusterRequest) {
    super(scope, id);
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
          name: this.input.name,
          version: this.input.version,
          roleArn: this.input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.input.logging?.clusterLogging,
          },
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
          encryptionConfig: this.input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.identity.oidc.issuer', props);
    return resource.getResponseField('cluster.identity.oidc.issuer') as unknown as string;
  }

}

export class EKSCreateClusterClusterCertificateAuthority extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksCreateClusterRequest) {
    super(scope, id);
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
          name: this.input.name,
          version: this.input.version,
          roleArn: this.input.roleArn,
          resourcesVpcConfig: {
            subnetIds: this.input.resourcesVpcConfig.subnetIds,
            securityGroupIds: this.input.resourcesVpcConfig.securityGroupIds,
            endpointPublicAccess: this.input.resourcesVpcConfig.endpointPublicAccess,
            endpointPrivateAccess: this.input.resourcesVpcConfig.endpointPrivateAccess,
            publicAccessCidrs: this.input.resourcesVpcConfig.publicAccessCidrs,
          },
          kubernetesNetworkConfig: {
            serviceIpv4Cidr: this.input.kubernetesNetworkConfig?.serviceIpv4Cidr,
          },
          logging: {
            clusterLogging: this.input.logging?.clusterLogging,
          },
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
          encryptionConfig: this.input.encryptionConfig,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateCluster.cluster.certificateAuthority.data', props);
    return resource.getResponseField('cluster.certificateAuthority.data') as unknown as string;
  }

}

export class EKSCreateFargateProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksCreateFargateProfileRequest) {
    super(scope, id);
  }

  public get fargateProfile(): EKSCreateFargateProfileFargateProfile {
    return new EKSCreateFargateProfileFargateProfile(this, 'FargateProfile', this.__resources, this.input);
  }

}

export class EKSCreateFargateProfileFargateProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksCreateFargateProfileRequest) {
    super(scope, id);
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
          fargateProfileName: this.input.fargateProfileName,
          clusterName: this.input.clusterName,
          podExecutionRoleArn: this.input.podExecutionRoleArn,
          subnets: this.input.subnets,
          selectors: this.input.selectors,
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFargateProfile.fargateProfile.fargateProfileName', props);
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
          fargateProfileName: this.input.fargateProfileName,
          clusterName: this.input.clusterName,
          podExecutionRoleArn: this.input.podExecutionRoleArn,
          subnets: this.input.subnets,
          selectors: this.input.selectors,
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFargateProfile.fargateProfile.fargateProfileArn', props);
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
          fargateProfileName: this.input.fargateProfileName,
          clusterName: this.input.clusterName,
          podExecutionRoleArn: this.input.podExecutionRoleArn,
          subnets: this.input.subnets,
          selectors: this.input.selectors,
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFargateProfile.fargateProfile.clusterName', props);
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
          fargateProfileName: this.input.fargateProfileName,
          clusterName: this.input.clusterName,
          podExecutionRoleArn: this.input.podExecutionRoleArn,
          subnets: this.input.subnets,
          selectors: this.input.selectors,
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFargateProfile.fargateProfile.createdAt', props);
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
          fargateProfileName: this.input.fargateProfileName,
          clusterName: this.input.clusterName,
          podExecutionRoleArn: this.input.podExecutionRoleArn,
          subnets: this.input.subnets,
          selectors: this.input.selectors,
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFargateProfile.fargateProfile.podExecutionRoleArn', props);
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
          fargateProfileName: this.input.fargateProfileName,
          clusterName: this.input.clusterName,
          podExecutionRoleArn: this.input.podExecutionRoleArn,
          subnets: this.input.subnets,
          selectors: this.input.selectors,
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFargateProfile.fargateProfile.subnets', props);
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
          fargateProfileName: this.input.fargateProfileName,
          clusterName: this.input.clusterName,
          podExecutionRoleArn: this.input.podExecutionRoleArn,
          subnets: this.input.subnets,
          selectors: this.input.selectors,
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFargateProfile.fargateProfile.selectors', props);
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
          fargateProfileName: this.input.fargateProfileName,
          clusterName: this.input.clusterName,
          podExecutionRoleArn: this.input.podExecutionRoleArn,
          subnets: this.input.subnets,
          selectors: this.input.selectors,
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFargateProfile.fargateProfile.status', props);
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
          fargateProfileName: this.input.fargateProfileName,
          clusterName: this.input.clusterName,
          podExecutionRoleArn: this.input.podExecutionRoleArn,
          subnets: this.input.subnets,
          selectors: this.input.selectors,
          clientRequestToken: this.input.clientRequestToken,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFargateProfile.fargateProfile.tags', props);
    return resource.getResponseField('fargateProfile.tags') as unknown as Record<string, string>;
  }

}

export class EKSCreateNodegroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksCreateNodegroupRequest) {
    super(scope, id);
  }

  public get nodegroup(): EKSCreateNodegroupNodegroup {
    return new EKSCreateNodegroupNodegroup(this, 'Nodegroup', this.__resources, this.input);
  }

}

export class EKSCreateNodegroupNodegroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksCreateNodegroupRequest) {
    super(scope, id);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          diskSize: this.input.diskSize,
          subnets: this.input.subnets,
          instanceTypes: this.input.instanceTypes,
          amiType: this.input.amiType,
          remoteAccess: {
            ec2SshKey: this.input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.input.nodeRole,
          labels: this.input.labels,
          tags: this.input.tags,
          clientRequestToken: this.input.clientRequestToken,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNodegroup.nodegroup.nodegroupName', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          diskSize: this.input.diskSize,
          subnets: this.input.subnets,
          instanceTypes: this.input.instanceTypes,
          amiType: this.input.amiType,
          remoteAccess: {
            ec2SshKey: this.input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.input.nodeRole,
          labels: this.input.labels,
          tags: this.input.tags,
          clientRequestToken: this.input.clientRequestToken,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNodegroup.nodegroup.nodegroupArn', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          diskSize: this.input.diskSize,
          subnets: this.input.subnets,
          instanceTypes: this.input.instanceTypes,
          amiType: this.input.amiType,
          remoteAccess: {
            ec2SshKey: this.input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.input.nodeRole,
          labels: this.input.labels,
          tags: this.input.tags,
          clientRequestToken: this.input.clientRequestToken,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNodegroup.nodegroup.clusterName', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          diskSize: this.input.diskSize,
          subnets: this.input.subnets,
          instanceTypes: this.input.instanceTypes,
          amiType: this.input.amiType,
          remoteAccess: {
            ec2SshKey: this.input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.input.nodeRole,
          labels: this.input.labels,
          tags: this.input.tags,
          clientRequestToken: this.input.clientRequestToken,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNodegroup.nodegroup.version', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          diskSize: this.input.diskSize,
          subnets: this.input.subnets,
          instanceTypes: this.input.instanceTypes,
          amiType: this.input.amiType,
          remoteAccess: {
            ec2SshKey: this.input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.input.nodeRole,
          labels: this.input.labels,
          tags: this.input.tags,
          clientRequestToken: this.input.clientRequestToken,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNodegroup.nodegroup.releaseVersion', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          diskSize: this.input.diskSize,
          subnets: this.input.subnets,
          instanceTypes: this.input.instanceTypes,
          amiType: this.input.amiType,
          remoteAccess: {
            ec2SshKey: this.input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.input.nodeRole,
          labels: this.input.labels,
          tags: this.input.tags,
          clientRequestToken: this.input.clientRequestToken,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNodegroup.nodegroup.createdAt', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          diskSize: this.input.diskSize,
          subnets: this.input.subnets,
          instanceTypes: this.input.instanceTypes,
          amiType: this.input.amiType,
          remoteAccess: {
            ec2SshKey: this.input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.input.nodeRole,
          labels: this.input.labels,
          tags: this.input.tags,
          clientRequestToken: this.input.clientRequestToken,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNodegroup.nodegroup.modifiedAt', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          diskSize: this.input.diskSize,
          subnets: this.input.subnets,
          instanceTypes: this.input.instanceTypes,
          amiType: this.input.amiType,
          remoteAccess: {
            ec2SshKey: this.input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.input.nodeRole,
          labels: this.input.labels,
          tags: this.input.tags,
          clientRequestToken: this.input.clientRequestToken,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNodegroup.nodegroup.status', props);
    return resource.getResponseField('nodegroup.status') as unknown as string;
  }

  public get scalingConfig(): EKSCreateNodegroupNodegroupScalingConfig {
    return new EKSCreateNodegroupNodegroupScalingConfig(this, 'ScalingConfig', this.__resources, this.input);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          diskSize: this.input.diskSize,
          subnets: this.input.subnets,
          instanceTypes: this.input.instanceTypes,
          amiType: this.input.amiType,
          remoteAccess: {
            ec2SshKey: this.input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.input.nodeRole,
          labels: this.input.labels,
          tags: this.input.tags,
          clientRequestToken: this.input.clientRequestToken,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNodegroup.nodegroup.instanceTypes', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          diskSize: this.input.diskSize,
          subnets: this.input.subnets,
          instanceTypes: this.input.instanceTypes,
          amiType: this.input.amiType,
          remoteAccess: {
            ec2SshKey: this.input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.input.nodeRole,
          labels: this.input.labels,
          tags: this.input.tags,
          clientRequestToken: this.input.clientRequestToken,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNodegroup.nodegroup.subnets', props);
    return resource.getResponseField('nodegroup.subnets') as unknown as string[];
  }

  public get remoteAccess(): EKSCreateNodegroupNodegroupRemoteAccess {
    return new EKSCreateNodegroupNodegroupRemoteAccess(this, 'RemoteAccess', this.__resources, this.input);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          diskSize: this.input.diskSize,
          subnets: this.input.subnets,
          instanceTypes: this.input.instanceTypes,
          amiType: this.input.amiType,
          remoteAccess: {
            ec2SshKey: this.input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.input.nodeRole,
          labels: this.input.labels,
          tags: this.input.tags,
          clientRequestToken: this.input.clientRequestToken,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNodegroup.nodegroup.amiType', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          diskSize: this.input.diskSize,
          subnets: this.input.subnets,
          instanceTypes: this.input.instanceTypes,
          amiType: this.input.amiType,
          remoteAccess: {
            ec2SshKey: this.input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.input.nodeRole,
          labels: this.input.labels,
          tags: this.input.tags,
          clientRequestToken: this.input.clientRequestToken,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNodegroup.nodegroup.nodeRole', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          diskSize: this.input.diskSize,
          subnets: this.input.subnets,
          instanceTypes: this.input.instanceTypes,
          amiType: this.input.amiType,
          remoteAccess: {
            ec2SshKey: this.input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.input.nodeRole,
          labels: this.input.labels,
          tags: this.input.tags,
          clientRequestToken: this.input.clientRequestToken,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNodegroup.nodegroup.labels', props);
    return resource.getResponseField('nodegroup.labels') as unknown as Record<string, string>;
  }

  public get resources(): EKSCreateNodegroupNodegroupResources {
    return new EKSCreateNodegroupNodegroupResources(this, 'Resources', this.__resources, this.input);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          diskSize: this.input.diskSize,
          subnets: this.input.subnets,
          instanceTypes: this.input.instanceTypes,
          amiType: this.input.amiType,
          remoteAccess: {
            ec2SshKey: this.input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.input.nodeRole,
          labels: this.input.labels,
          tags: this.input.tags,
          clientRequestToken: this.input.clientRequestToken,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNodegroup.nodegroup.diskSize', props);
    return resource.getResponseField('nodegroup.diskSize') as unknown as number;
  }

  public get health(): EKSCreateNodegroupNodegroupHealth {
    return new EKSCreateNodegroupNodegroupHealth(this, 'Health', this.__resources, this.input);
  }

  public get launchTemplate(): EKSCreateNodegroupNodegroupLaunchTemplate {
    return new EKSCreateNodegroupNodegroupLaunchTemplate(this, 'LaunchTemplate', this.__resources, this.input);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          diskSize: this.input.diskSize,
          subnets: this.input.subnets,
          instanceTypes: this.input.instanceTypes,
          amiType: this.input.amiType,
          remoteAccess: {
            ec2SshKey: this.input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.input.nodeRole,
          labels: this.input.labels,
          tags: this.input.tags,
          clientRequestToken: this.input.clientRequestToken,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNodegroup.nodegroup.tags', props);
    return resource.getResponseField('nodegroup.tags') as unknown as Record<string, string>;
  }

}

export class EKSCreateNodegroupNodegroupScalingConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksCreateNodegroupRequest) {
    super(scope, id);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          diskSize: this.input.diskSize,
          subnets: this.input.subnets,
          instanceTypes: this.input.instanceTypes,
          amiType: this.input.amiType,
          remoteAccess: {
            ec2SshKey: this.input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.input.nodeRole,
          labels: this.input.labels,
          tags: this.input.tags,
          clientRequestToken: this.input.clientRequestToken,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNodegroup.nodegroup.scalingConfig.minSize', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          diskSize: this.input.diskSize,
          subnets: this.input.subnets,
          instanceTypes: this.input.instanceTypes,
          amiType: this.input.amiType,
          remoteAccess: {
            ec2SshKey: this.input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.input.nodeRole,
          labels: this.input.labels,
          tags: this.input.tags,
          clientRequestToken: this.input.clientRequestToken,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNodegroup.nodegroup.scalingConfig.maxSize', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          diskSize: this.input.diskSize,
          subnets: this.input.subnets,
          instanceTypes: this.input.instanceTypes,
          amiType: this.input.amiType,
          remoteAccess: {
            ec2SshKey: this.input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.input.nodeRole,
          labels: this.input.labels,
          tags: this.input.tags,
          clientRequestToken: this.input.clientRequestToken,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNodegroup.nodegroup.scalingConfig.desiredSize', props);
    return resource.getResponseField('nodegroup.scalingConfig.desiredSize') as unknown as number;
  }

}

export class EKSCreateNodegroupNodegroupRemoteAccess extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksCreateNodegroupRequest) {
    super(scope, id);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          diskSize: this.input.diskSize,
          subnets: this.input.subnets,
          instanceTypes: this.input.instanceTypes,
          amiType: this.input.amiType,
          remoteAccess: {
            ec2SshKey: this.input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.input.nodeRole,
          labels: this.input.labels,
          tags: this.input.tags,
          clientRequestToken: this.input.clientRequestToken,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNodegroup.nodegroup.remoteAccess.ec2SshKey', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          diskSize: this.input.diskSize,
          subnets: this.input.subnets,
          instanceTypes: this.input.instanceTypes,
          amiType: this.input.amiType,
          remoteAccess: {
            ec2SshKey: this.input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.input.nodeRole,
          labels: this.input.labels,
          tags: this.input.tags,
          clientRequestToken: this.input.clientRequestToken,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNodegroup.nodegroup.remoteAccess.sourceSecurityGroups', props);
    return resource.getResponseField('nodegroup.remoteAccess.sourceSecurityGroups') as unknown as string[];
  }

}

export class EKSCreateNodegroupNodegroupResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksCreateNodegroupRequest) {
    super(scope, id);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          diskSize: this.input.diskSize,
          subnets: this.input.subnets,
          instanceTypes: this.input.instanceTypes,
          amiType: this.input.amiType,
          remoteAccess: {
            ec2SshKey: this.input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.input.nodeRole,
          labels: this.input.labels,
          tags: this.input.tags,
          clientRequestToken: this.input.clientRequestToken,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNodegroup.nodegroup.resources.autoScalingGroups', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          diskSize: this.input.diskSize,
          subnets: this.input.subnets,
          instanceTypes: this.input.instanceTypes,
          amiType: this.input.amiType,
          remoteAccess: {
            ec2SshKey: this.input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.input.nodeRole,
          labels: this.input.labels,
          tags: this.input.tags,
          clientRequestToken: this.input.clientRequestToken,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNodegroup.nodegroup.resources.remoteAccessSecurityGroup', props);
    return resource.getResponseField('nodegroup.resources.remoteAccessSecurityGroup') as unknown as string;
  }

}

export class EKSCreateNodegroupNodegroupHealth extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksCreateNodegroupRequest) {
    super(scope, id);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          diskSize: this.input.diskSize,
          subnets: this.input.subnets,
          instanceTypes: this.input.instanceTypes,
          amiType: this.input.amiType,
          remoteAccess: {
            ec2SshKey: this.input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.input.nodeRole,
          labels: this.input.labels,
          tags: this.input.tags,
          clientRequestToken: this.input.clientRequestToken,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNodegroup.nodegroup.health.issues', props);
    return resource.getResponseField('nodegroup.health.issues') as unknown as shapes.EksIssue[];
  }

}

export class EKSCreateNodegroupNodegroupLaunchTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksCreateNodegroupRequest) {
    super(scope, id);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          diskSize: this.input.diskSize,
          subnets: this.input.subnets,
          instanceTypes: this.input.instanceTypes,
          amiType: this.input.amiType,
          remoteAccess: {
            ec2SshKey: this.input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.input.nodeRole,
          labels: this.input.labels,
          tags: this.input.tags,
          clientRequestToken: this.input.clientRequestToken,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNodegroup.nodegroup.launchTemplate.name', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          diskSize: this.input.diskSize,
          subnets: this.input.subnets,
          instanceTypes: this.input.instanceTypes,
          amiType: this.input.amiType,
          remoteAccess: {
            ec2SshKey: this.input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.input.nodeRole,
          labels: this.input.labels,
          tags: this.input.tags,
          clientRequestToken: this.input.clientRequestToken,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNodegroup.nodegroup.launchTemplate.version', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          diskSize: this.input.diskSize,
          subnets: this.input.subnets,
          instanceTypes: this.input.instanceTypes,
          amiType: this.input.amiType,
          remoteAccess: {
            ec2SshKey: this.input.remoteAccess?.ec2SshKey,
            sourceSecurityGroups: this.input.remoteAccess?.sourceSecurityGroups,
          },
          nodeRole: this.input.nodeRole,
          labels: this.input.labels,
          tags: this.input.tags,
          clientRequestToken: this.input.clientRequestToken,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateNodegroup.nodegroup.launchTemplate.id', props);
    return resource.getResponseField('nodegroup.launchTemplate.id') as unknown as string;
  }

}

export class EKSDeleteCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDeleteClusterRequest) {
    super(scope, id);
  }

  public get cluster(): EKSDeleteClusterCluster {
    return new EKSDeleteClusterCluster(this, 'Cluster', this.__resources, this.input);
  }

}

export class EKSDeleteClusterCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDeleteClusterRequest) {
    super(scope, id);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.name', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.arn', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.createdAt', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.version', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.endpoint', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.roleArn', props);
    return resource.getResponseField('cluster.roleArn') as unknown as string;
  }

  public get resourcesVpcConfig(): EKSDeleteClusterClusterResourcesVpcConfig {
    return new EKSDeleteClusterClusterResourcesVpcConfig(this, 'ResourcesVpcConfig', this.__resources, this.input);
  }

  public get kubernetesNetworkConfig(): EKSDeleteClusterClusterKubernetesNetworkConfig {
    return new EKSDeleteClusterClusterKubernetesNetworkConfig(this, 'KubernetesNetworkConfig', this.__resources, this.input);
  }

  public get logging(): EKSDeleteClusterClusterLogging {
    return new EKSDeleteClusterClusterLogging(this, 'Logging', this.__resources, this.input);
  }

  public get identity(): EKSDeleteClusterClusterIdentity {
    return new EKSDeleteClusterClusterIdentity(this, 'Identity', this.__resources, this.input);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.status', props);
    return resource.getResponseField('cluster.status') as unknown as string;
  }

  public get certificateAuthority(): EKSDeleteClusterClusterCertificateAuthority {
    return new EKSDeleteClusterClusterCertificateAuthority(this, 'CertificateAuthority', this.__resources, this.input);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.clientRequestToken', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.platformVersion', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.tags', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.encryptionConfig', props);
    return resource.getResponseField('cluster.encryptionConfig') as unknown as shapes.EksEncryptionConfig[];
  }

}

export class EKSDeleteClusterClusterResourcesVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDeleteClusterRequest) {
    super(scope, id);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.resourcesVpcConfig.subnetIds', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.resourcesVpcConfig.securityGroupIds', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.resourcesVpcConfig.clusterSecurityGroupId', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.resourcesVpcConfig.vpcId', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.resourcesVpcConfig.endpointPublicAccess', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.resourcesVpcConfig.endpointPrivateAccess', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.resourcesVpcConfig.publicAccessCidrs', props);
    return resource.getResponseField('cluster.resourcesVpcConfig.publicAccessCidrs') as unknown as string[];
  }

}

export class EKSDeleteClusterClusterKubernetesNetworkConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDeleteClusterRequest) {
    super(scope, id);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.kubernetesNetworkConfig.serviceIpv4Cidr', props);
    return resource.getResponseField('cluster.kubernetesNetworkConfig.serviceIpv4Cidr') as unknown as string;
  }

}

export class EKSDeleteClusterClusterLogging extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDeleteClusterRequest) {
    super(scope, id);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.logging.clusterLogging', props);
    return resource.getResponseField('cluster.logging.clusterLogging') as unknown as shapes.EksLogSetup[];
  }

}

export class EKSDeleteClusterClusterIdentity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDeleteClusterRequest) {
    super(scope, id);
  }

  public get oidc(): EKSDeleteClusterClusterIdentityOidc {
    return new EKSDeleteClusterClusterIdentityOidc(this, 'Oidc', this.__resources, this.input);
  }

}

export class EKSDeleteClusterClusterIdentityOidc extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDeleteClusterRequest) {
    super(scope, id);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.identity.oidc.issuer', props);
    return resource.getResponseField('cluster.identity.oidc.issuer') as unknown as string;
  }

}

export class EKSDeleteClusterClusterCertificateAuthority extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDeleteClusterRequest) {
    super(scope, id);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteCluster.cluster.certificateAuthority.data', props);
    return resource.getResponseField('cluster.certificateAuthority.data') as unknown as string;
  }

}

export class EKSDeleteFargateProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDeleteFargateProfileRequest) {
    super(scope, id);
  }

  public get fargateProfile(): EKSDeleteFargateProfileFargateProfile {
    return new EKSDeleteFargateProfileFargateProfile(this, 'FargateProfile', this.__resources, this.input);
  }

}

export class EKSDeleteFargateProfileFargateProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDeleteFargateProfileRequest) {
    super(scope, id);
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
          clusterName: this.input.clusterName,
          fargateProfileName: this.input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFargateProfile.fargateProfile.fargateProfileName', props);
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
          clusterName: this.input.clusterName,
          fargateProfileName: this.input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFargateProfile.fargateProfile.fargateProfileArn', props);
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
          clusterName: this.input.clusterName,
          fargateProfileName: this.input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFargateProfile.fargateProfile.clusterName', props);
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
          clusterName: this.input.clusterName,
          fargateProfileName: this.input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFargateProfile.fargateProfile.createdAt', props);
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
          clusterName: this.input.clusterName,
          fargateProfileName: this.input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFargateProfile.fargateProfile.podExecutionRoleArn', props);
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
          clusterName: this.input.clusterName,
          fargateProfileName: this.input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFargateProfile.fargateProfile.subnets', props);
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
          clusterName: this.input.clusterName,
          fargateProfileName: this.input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFargateProfile.fargateProfile.selectors', props);
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
          clusterName: this.input.clusterName,
          fargateProfileName: this.input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFargateProfile.fargateProfile.status', props);
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
          clusterName: this.input.clusterName,
          fargateProfileName: this.input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteFargateProfile.fargateProfile.tags', props);
    return resource.getResponseField('fargateProfile.tags') as unknown as Record<string, string>;
  }

}

export class EKSDeleteNodegroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDeleteNodegroupRequest) {
    super(scope, id);
  }

  public get nodegroup(): EKSDeleteNodegroupNodegroup {
    return new EKSDeleteNodegroupNodegroup(this, 'Nodegroup', this.__resources, this.input);
  }

}

export class EKSDeleteNodegroupNodegroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDeleteNodegroupRequest) {
    super(scope, id);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNodegroup.nodegroup.nodegroupName', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNodegroup.nodegroup.nodegroupArn', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNodegroup.nodegroup.clusterName', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNodegroup.nodegroup.version', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNodegroup.nodegroup.releaseVersion', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNodegroup.nodegroup.createdAt', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNodegroup.nodegroup.modifiedAt', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNodegroup.nodegroup.status', props);
    return resource.getResponseField('nodegroup.status') as unknown as string;
  }

  public get scalingConfig(): EKSDeleteNodegroupNodegroupScalingConfig {
    return new EKSDeleteNodegroupNodegroupScalingConfig(this, 'ScalingConfig', this.__resources, this.input);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNodegroup.nodegroup.instanceTypes', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNodegroup.nodegroup.subnets', props);
    return resource.getResponseField('nodegroup.subnets') as unknown as string[];
  }

  public get remoteAccess(): EKSDeleteNodegroupNodegroupRemoteAccess {
    return new EKSDeleteNodegroupNodegroupRemoteAccess(this, 'RemoteAccess', this.__resources, this.input);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNodegroup.nodegroup.amiType', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNodegroup.nodegroup.nodeRole', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNodegroup.nodegroup.labels', props);
    return resource.getResponseField('nodegroup.labels') as unknown as Record<string, string>;
  }

  public get resources(): EKSDeleteNodegroupNodegroupResources {
    return new EKSDeleteNodegroupNodegroupResources(this, 'Resources', this.__resources, this.input);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNodegroup.nodegroup.diskSize', props);
    return resource.getResponseField('nodegroup.diskSize') as unknown as number;
  }

  public get health(): EKSDeleteNodegroupNodegroupHealth {
    return new EKSDeleteNodegroupNodegroupHealth(this, 'Health', this.__resources, this.input);
  }

  public get launchTemplate(): EKSDeleteNodegroupNodegroupLaunchTemplate {
    return new EKSDeleteNodegroupNodegroupLaunchTemplate(this, 'LaunchTemplate', this.__resources, this.input);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNodegroup.nodegroup.tags', props);
    return resource.getResponseField('nodegroup.tags') as unknown as Record<string, string>;
  }

}

export class EKSDeleteNodegroupNodegroupScalingConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDeleteNodegroupRequest) {
    super(scope, id);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNodegroup.nodegroup.scalingConfig.minSize', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNodegroup.nodegroup.scalingConfig.maxSize', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNodegroup.nodegroup.scalingConfig.desiredSize', props);
    return resource.getResponseField('nodegroup.scalingConfig.desiredSize') as unknown as number;
  }

}

export class EKSDeleteNodegroupNodegroupRemoteAccess extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDeleteNodegroupRequest) {
    super(scope, id);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNodegroup.nodegroup.remoteAccess.ec2SshKey', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNodegroup.nodegroup.remoteAccess.sourceSecurityGroups', props);
    return resource.getResponseField('nodegroup.remoteAccess.sourceSecurityGroups') as unknown as string[];
  }

}

export class EKSDeleteNodegroupNodegroupResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDeleteNodegroupRequest) {
    super(scope, id);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNodegroup.nodegroup.resources.autoScalingGroups', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNodegroup.nodegroup.resources.remoteAccessSecurityGroup', props);
    return resource.getResponseField('nodegroup.resources.remoteAccessSecurityGroup') as unknown as string;
  }

}

export class EKSDeleteNodegroupNodegroupHealth extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDeleteNodegroupRequest) {
    super(scope, id);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNodegroup.nodegroup.health.issues', props);
    return resource.getResponseField('nodegroup.health.issues') as unknown as shapes.EksIssue[];
  }

}

export class EKSDeleteNodegroupNodegroupLaunchTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDeleteNodegroupRequest) {
    super(scope, id);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNodegroup.nodegroup.launchTemplate.name', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNodegroup.nodegroup.launchTemplate.version', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteNodegroup.nodegroup.launchTemplate.id', props);
    return resource.getResponseField('nodegroup.launchTemplate.id') as unknown as string;
  }

}

export class EKSDescribeCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDescribeClusterRequest) {
    super(scope, id);
  }

  public get cluster(): EKSDescribeClusterCluster {
    return new EKSDescribeClusterCluster(this, 'Cluster', this.__resources, this.input);
  }

}

export class EKSDescribeClusterCluster extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDescribeClusterRequest) {
    super(scope, id);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.cluster.name', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.cluster.arn', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.cluster.createdAt', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.cluster.version', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.cluster.endpoint', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.cluster.roleArn', props);
    return resource.getResponseField('cluster.roleArn') as unknown as string;
  }

  public get resourcesVpcConfig(): EKSDescribeClusterClusterResourcesVpcConfig {
    return new EKSDescribeClusterClusterResourcesVpcConfig(this, 'ResourcesVpcConfig', this.__resources, this.input);
  }

  public get kubernetesNetworkConfig(): EKSDescribeClusterClusterKubernetesNetworkConfig {
    return new EKSDescribeClusterClusterKubernetesNetworkConfig(this, 'KubernetesNetworkConfig', this.__resources, this.input);
  }

  public get logging(): EKSDescribeClusterClusterLogging {
    return new EKSDescribeClusterClusterLogging(this, 'Logging', this.__resources, this.input);
  }

  public get identity(): EKSDescribeClusterClusterIdentity {
    return new EKSDescribeClusterClusterIdentity(this, 'Identity', this.__resources, this.input);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.cluster.status', props);
    return resource.getResponseField('cluster.status') as unknown as string;
  }

  public get certificateAuthority(): EKSDescribeClusterClusterCertificateAuthority {
    return new EKSDescribeClusterClusterCertificateAuthority(this, 'CertificateAuthority', this.__resources, this.input);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.cluster.clientRequestToken', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.cluster.platformVersion', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.cluster.tags', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.cluster.encryptionConfig', props);
    return resource.getResponseField('cluster.encryptionConfig') as unknown as shapes.EksEncryptionConfig[];
  }

}

export class EKSDescribeClusterClusterResourcesVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDescribeClusterRequest) {
    super(scope, id);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.cluster.resourcesVpcConfig.subnetIds', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.cluster.resourcesVpcConfig.securityGroupIds', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.cluster.resourcesVpcConfig.clusterSecurityGroupId', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.cluster.resourcesVpcConfig.vpcId', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.cluster.resourcesVpcConfig.endpointPublicAccess', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.cluster.resourcesVpcConfig.endpointPrivateAccess', props);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.cluster.resourcesVpcConfig.publicAccessCidrs', props);
    return resource.getResponseField('cluster.resourcesVpcConfig.publicAccessCidrs') as unknown as string[];
  }

}

export class EKSDescribeClusterClusterKubernetesNetworkConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDescribeClusterRequest) {
    super(scope, id);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.cluster.kubernetesNetworkConfig.serviceIpv4Cidr', props);
    return resource.getResponseField('cluster.kubernetesNetworkConfig.serviceIpv4Cidr') as unknown as string;
  }

}

export class EKSDescribeClusterClusterLogging extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDescribeClusterRequest) {
    super(scope, id);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.cluster.logging.clusterLogging', props);
    return resource.getResponseField('cluster.logging.clusterLogging') as unknown as shapes.EksLogSetup[];
  }

}

export class EKSDescribeClusterClusterIdentity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDescribeClusterRequest) {
    super(scope, id);
  }

  public get oidc(): EKSDescribeClusterClusterIdentityOidc {
    return new EKSDescribeClusterClusterIdentityOidc(this, 'Oidc', this.__resources, this.input);
  }

}

export class EKSDescribeClusterClusterIdentityOidc extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDescribeClusterRequest) {
    super(scope, id);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.cluster.identity.oidc.issuer', props);
    return resource.getResponseField('cluster.identity.oidc.issuer') as unknown as string;
  }

}

export class EKSDescribeClusterClusterCertificateAuthority extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDescribeClusterRequest) {
    super(scope, id);
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
          name: this.input.name,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeCluster.cluster.certificateAuthority.data', props);
    return resource.getResponseField('cluster.certificateAuthority.data') as unknown as string;
  }

}

export class EKSDescribeFargateProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDescribeFargateProfileRequest) {
    super(scope, id);
  }

  public get fargateProfile(): EKSDescribeFargateProfileFargateProfile {
    return new EKSDescribeFargateProfileFargateProfile(this, 'FargateProfile', this.__resources, this.input);
  }

}

export class EKSDescribeFargateProfileFargateProfile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDescribeFargateProfileRequest) {
    super(scope, id);
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
          clusterName: this.input.clusterName,
          fargateProfileName: this.input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFargateProfile.fargateProfile.fargateProfileName', props);
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
          clusterName: this.input.clusterName,
          fargateProfileName: this.input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFargateProfile.fargateProfile.fargateProfileArn', props);
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
          clusterName: this.input.clusterName,
          fargateProfileName: this.input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFargateProfile.fargateProfile.clusterName', props);
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
          clusterName: this.input.clusterName,
          fargateProfileName: this.input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFargateProfile.fargateProfile.createdAt', props);
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
          clusterName: this.input.clusterName,
          fargateProfileName: this.input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFargateProfile.fargateProfile.podExecutionRoleArn', props);
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
          clusterName: this.input.clusterName,
          fargateProfileName: this.input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFargateProfile.fargateProfile.subnets', props);
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
          clusterName: this.input.clusterName,
          fargateProfileName: this.input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFargateProfile.fargateProfile.selectors', props);
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
          clusterName: this.input.clusterName,
          fargateProfileName: this.input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFargateProfile.fargateProfile.status', props);
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
          clusterName: this.input.clusterName,
          fargateProfileName: this.input.fargateProfileName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFargateProfile.fargateProfile.tags', props);
    return resource.getResponseField('fargateProfile.tags') as unknown as Record<string, string>;
  }

}

export class EKSDescribeNodegroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDescribeNodegroupRequest) {
    super(scope, id);
  }

  public get nodegroup(): EKSDescribeNodegroupNodegroup {
    return new EKSDescribeNodegroupNodegroup(this, 'Nodegroup', this.__resources, this.input);
  }

}

export class EKSDescribeNodegroupNodegroup extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDescribeNodegroupRequest) {
    super(scope, id);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNodegroup.nodegroup.nodegroupName', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNodegroup.nodegroup.nodegroupArn', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNodegroup.nodegroup.clusterName', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNodegroup.nodegroup.version', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNodegroup.nodegroup.releaseVersion', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNodegroup.nodegroup.createdAt', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNodegroup.nodegroup.modifiedAt', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNodegroup.nodegroup.status', props);
    return resource.getResponseField('nodegroup.status') as unknown as string;
  }

  public get scalingConfig(): EKSDescribeNodegroupNodegroupScalingConfig {
    return new EKSDescribeNodegroupNodegroupScalingConfig(this, 'ScalingConfig', this.__resources, this.input);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNodegroup.nodegroup.instanceTypes', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNodegroup.nodegroup.subnets', props);
    return resource.getResponseField('nodegroup.subnets') as unknown as string[];
  }

  public get remoteAccess(): EKSDescribeNodegroupNodegroupRemoteAccess {
    return new EKSDescribeNodegroupNodegroupRemoteAccess(this, 'RemoteAccess', this.__resources, this.input);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNodegroup.nodegroup.amiType', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNodegroup.nodegroup.nodeRole', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNodegroup.nodegroup.labels', props);
    return resource.getResponseField('nodegroup.labels') as unknown as Record<string, string>;
  }

  public get resources(): EKSDescribeNodegroupNodegroupResources {
    return new EKSDescribeNodegroupNodegroupResources(this, 'Resources', this.__resources, this.input);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNodegroup.nodegroup.diskSize', props);
    return resource.getResponseField('nodegroup.diskSize') as unknown as number;
  }

  public get health(): EKSDescribeNodegroupNodegroupHealth {
    return new EKSDescribeNodegroupNodegroupHealth(this, 'Health', this.__resources, this.input);
  }

  public get launchTemplate(): EKSDescribeNodegroupNodegroupLaunchTemplate {
    return new EKSDescribeNodegroupNodegroupLaunchTemplate(this, 'LaunchTemplate', this.__resources, this.input);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNodegroup.nodegroup.tags', props);
    return resource.getResponseField('nodegroup.tags') as unknown as Record<string, string>;
  }

}

export class EKSDescribeNodegroupNodegroupScalingConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDescribeNodegroupRequest) {
    super(scope, id);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNodegroup.nodegroup.scalingConfig.minSize', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNodegroup.nodegroup.scalingConfig.maxSize', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNodegroup.nodegroup.scalingConfig.desiredSize', props);
    return resource.getResponseField('nodegroup.scalingConfig.desiredSize') as unknown as number;
  }

}

export class EKSDescribeNodegroupNodegroupRemoteAccess extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDescribeNodegroupRequest) {
    super(scope, id);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNodegroup.nodegroup.remoteAccess.ec2SshKey', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNodegroup.nodegroup.remoteAccess.sourceSecurityGroups', props);
    return resource.getResponseField('nodegroup.remoteAccess.sourceSecurityGroups') as unknown as string[];
  }

}

export class EKSDescribeNodegroupNodegroupResources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDescribeNodegroupRequest) {
    super(scope, id);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNodegroup.nodegroup.resources.autoScalingGroups', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNodegroup.nodegroup.resources.remoteAccessSecurityGroup', props);
    return resource.getResponseField('nodegroup.resources.remoteAccessSecurityGroup') as unknown as string;
  }

}

export class EKSDescribeNodegroupNodegroupHealth extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDescribeNodegroupRequest) {
    super(scope, id);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNodegroup.nodegroup.health.issues', props);
    return resource.getResponseField('nodegroup.health.issues') as unknown as shapes.EksIssue[];
  }

}

export class EKSDescribeNodegroupNodegroupLaunchTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDescribeNodegroupRequest) {
    super(scope, id);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNodegroup.nodegroup.launchTemplate.name', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNodegroup.nodegroup.launchTemplate.version', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeNodegroup.nodegroup.launchTemplate.id', props);
    return resource.getResponseField('nodegroup.launchTemplate.id') as unknown as string;
  }

}

export class EKSDescribeUpdate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDescribeUpdateRequest) {
    super(scope, id);
  }

  public get update(): EKSDescribeUpdateUpdate {
    return new EKSDescribeUpdateUpdate(this, 'Update', this.__resources, this.input);
  }

}

export class EKSDescribeUpdateUpdate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksDescribeUpdateRequest) {
    super(scope, id);
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
          name: this.input.name,
          updateId: this.input.updateId,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUpdate.update.id', props);
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
          name: this.input.name,
          updateId: this.input.updateId,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUpdate.update.status', props);
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
          name: this.input.name,
          updateId: this.input.updateId,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUpdate.update.type', props);
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
          name: this.input.name,
          updateId: this.input.updateId,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUpdate.update.params', props);
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
          name: this.input.name,
          updateId: this.input.updateId,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUpdate.update.createdAt', props);
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
          name: this.input.name,
          updateId: this.input.updateId,
          nodegroupName: this.input.nodegroupName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeUpdate.update.errors', props);
    return resource.getResponseField('update.errors') as unknown as shapes.EksErrorDetail[];
  }

}

export class EKSListClusters extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksListClustersRequest) {
    super(scope, id);
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
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListClusters.clusters', props);
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
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListClusters.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class EKSListFargateProfiles extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksListFargateProfilesRequest) {
    super(scope, id);
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
          clusterName: this.input.clusterName,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFargateProfiles.fargateProfileNames', props);
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
          clusterName: this.input.clusterName,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFargateProfiles.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class EKSListNodegroups extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksListNodegroupsRequest) {
    super(scope, id);
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
          clusterName: this.input.clusterName,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListNodegroups.nodegroups', props);
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
          clusterName: this.input.clusterName,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListNodegroups.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class EKSListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksListTagsForResourceRequest) {
    super(scope, id);
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
          resourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class EKSListUpdates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksListUpdatesRequest) {
    super(scope, id);
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
          name: this.input.name,
          nodegroupName: this.input.nodegroupName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUpdates.updateIds', props);
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
          name: this.input.name,
          nodegroupName: this.input.nodegroupName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListUpdates.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class EKSUpdateClusterConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksUpdateClusterConfigRequest) {
    super(scope, id);
  }

  public get update(): EKSUpdateClusterConfigUpdate {
    return new EKSUpdateClusterConfigUpdate(this, 'Update', this.__resources, this.input);
  }

}

export class EKSUpdateClusterConfigUpdate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksUpdateClusterConfigRequest) {
    super(scope, id);
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
          name: this.input.name,
          resourcesVpcConfig: {
            subnetIds: this.input.resourcesVpcConfig?.subnetIds,
            securityGroupIds: this.input.resourcesVpcConfig?.securityGroupIds,
            endpointPublicAccess: this.input.resourcesVpcConfig?.endpointPublicAccess,
            endpointPrivateAccess: this.input.resourcesVpcConfig?.endpointPrivateAccess,
            publicAccessCidrs: this.input.resourcesVpcConfig?.publicAccessCidrs,
          },
          logging: {
            clusterLogging: this.input.logging?.clusterLogging,
          },
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterConfig.update.id', props);
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
          name: this.input.name,
          resourcesVpcConfig: {
            subnetIds: this.input.resourcesVpcConfig?.subnetIds,
            securityGroupIds: this.input.resourcesVpcConfig?.securityGroupIds,
            endpointPublicAccess: this.input.resourcesVpcConfig?.endpointPublicAccess,
            endpointPrivateAccess: this.input.resourcesVpcConfig?.endpointPrivateAccess,
            publicAccessCidrs: this.input.resourcesVpcConfig?.publicAccessCidrs,
          },
          logging: {
            clusterLogging: this.input.logging?.clusterLogging,
          },
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterConfig.update.status', props);
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
          name: this.input.name,
          resourcesVpcConfig: {
            subnetIds: this.input.resourcesVpcConfig?.subnetIds,
            securityGroupIds: this.input.resourcesVpcConfig?.securityGroupIds,
            endpointPublicAccess: this.input.resourcesVpcConfig?.endpointPublicAccess,
            endpointPrivateAccess: this.input.resourcesVpcConfig?.endpointPrivateAccess,
            publicAccessCidrs: this.input.resourcesVpcConfig?.publicAccessCidrs,
          },
          logging: {
            clusterLogging: this.input.logging?.clusterLogging,
          },
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterConfig.update.type', props);
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
          name: this.input.name,
          resourcesVpcConfig: {
            subnetIds: this.input.resourcesVpcConfig?.subnetIds,
            securityGroupIds: this.input.resourcesVpcConfig?.securityGroupIds,
            endpointPublicAccess: this.input.resourcesVpcConfig?.endpointPublicAccess,
            endpointPrivateAccess: this.input.resourcesVpcConfig?.endpointPrivateAccess,
            publicAccessCidrs: this.input.resourcesVpcConfig?.publicAccessCidrs,
          },
          logging: {
            clusterLogging: this.input.logging?.clusterLogging,
          },
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterConfig.update.params', props);
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
          name: this.input.name,
          resourcesVpcConfig: {
            subnetIds: this.input.resourcesVpcConfig?.subnetIds,
            securityGroupIds: this.input.resourcesVpcConfig?.securityGroupIds,
            endpointPublicAccess: this.input.resourcesVpcConfig?.endpointPublicAccess,
            endpointPrivateAccess: this.input.resourcesVpcConfig?.endpointPrivateAccess,
            publicAccessCidrs: this.input.resourcesVpcConfig?.publicAccessCidrs,
          },
          logging: {
            clusterLogging: this.input.logging?.clusterLogging,
          },
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterConfig.update.createdAt', props);
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
          name: this.input.name,
          resourcesVpcConfig: {
            subnetIds: this.input.resourcesVpcConfig?.subnetIds,
            securityGroupIds: this.input.resourcesVpcConfig?.securityGroupIds,
            endpointPublicAccess: this.input.resourcesVpcConfig?.endpointPublicAccess,
            endpointPrivateAccess: this.input.resourcesVpcConfig?.endpointPrivateAccess,
            publicAccessCidrs: this.input.resourcesVpcConfig?.publicAccessCidrs,
          },
          logging: {
            clusterLogging: this.input.logging?.clusterLogging,
          },
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterConfig.update.errors', props);
    return resource.getResponseField('update.errors') as unknown as shapes.EksErrorDetail[];
  }

}

export class EKSUpdateClusterVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksUpdateClusterVersionRequest) {
    super(scope, id);
  }

  public get update(): EKSUpdateClusterVersionUpdate {
    return new EKSUpdateClusterVersionUpdate(this, 'Update', this.__resources, this.input);
  }

}

export class EKSUpdateClusterVersionUpdate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksUpdateClusterVersionRequest) {
    super(scope, id);
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
          name: this.input.name,
          version: this.input.version,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterVersion.update.id', props);
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
          name: this.input.name,
          version: this.input.version,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterVersion.update.status', props);
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
          name: this.input.name,
          version: this.input.version,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterVersion.update.type', props);
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
          name: this.input.name,
          version: this.input.version,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterVersion.update.params', props);
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
          name: this.input.name,
          version: this.input.version,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterVersion.update.createdAt', props);
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
          name: this.input.name,
          version: this.input.version,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateClusterVersion.update.errors', props);
    return resource.getResponseField('update.errors') as unknown as shapes.EksErrorDetail[];
  }

}

export class EKSUpdateNodegroupConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksUpdateNodegroupConfigRequest) {
    super(scope, id);
  }

  public get update(): EKSUpdateNodegroupConfigUpdate {
    return new EKSUpdateNodegroupConfigUpdate(this, 'Update', this.__resources, this.input);
  }

}

export class EKSUpdateNodegroupConfigUpdate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksUpdateNodegroupConfigRequest) {
    super(scope, id);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          labels: {
            addOrUpdateLabels: this.input.labels?.addOrUpdateLabels,
            removeLabels: this.input.labels?.removeLabels,
          },
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateNodegroupConfig.update.id', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          labels: {
            addOrUpdateLabels: this.input.labels?.addOrUpdateLabels,
            removeLabels: this.input.labels?.removeLabels,
          },
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateNodegroupConfig.update.status', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          labels: {
            addOrUpdateLabels: this.input.labels?.addOrUpdateLabels,
            removeLabels: this.input.labels?.removeLabels,
          },
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateNodegroupConfig.update.type', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          labels: {
            addOrUpdateLabels: this.input.labels?.addOrUpdateLabels,
            removeLabels: this.input.labels?.removeLabels,
          },
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateNodegroupConfig.update.params', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          labels: {
            addOrUpdateLabels: this.input.labels?.addOrUpdateLabels,
            removeLabels: this.input.labels?.removeLabels,
          },
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateNodegroupConfig.update.createdAt', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          labels: {
            addOrUpdateLabels: this.input.labels?.addOrUpdateLabels,
            removeLabels: this.input.labels?.removeLabels,
          },
          scalingConfig: {
            minSize: this.input.scalingConfig?.minSize,
            maxSize: this.input.scalingConfig?.maxSize,
            desiredSize: this.input.scalingConfig?.desiredSize,
          },
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateNodegroupConfig.update.errors', props);
    return resource.getResponseField('update.errors') as unknown as shapes.EksErrorDetail[];
  }

}

export class EKSUpdateNodegroupVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksUpdateNodegroupVersionRequest) {
    super(scope, id);
  }

  public get update(): EKSUpdateNodegroupVersionUpdate {
    return new EKSUpdateNodegroupVersionUpdate(this, 'Update', this.__resources, this.input);
  }

}

export class EKSUpdateNodegroupVersionUpdate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.EksUpdateNodegroupVersionRequest) {
    super(scope, id);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          force: this.input.force,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateNodegroupVersion.update.id', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          force: this.input.force,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateNodegroupVersion.update.status', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          force: this.input.force,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateNodegroupVersion.update.type', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          force: this.input.force,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateNodegroupVersion.update.params', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          force: this.input.force,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateNodegroupVersion.update.createdAt', props);
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
          clusterName: this.input.clusterName,
          nodegroupName: this.input.nodegroupName,
          version: this.input.version,
          releaseVersion: this.input.releaseVersion,
          launchTemplate: {
            name: this.input.launchTemplate?.name,
            version: this.input.launchTemplate?.version,
            id: this.input.launchTemplate?.id,
          },
          force: this.input.force,
          clientRequestToken: this.input.clientRequestToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateNodegroupVersion.update.errors', props);
    return resource.getResponseField('update.errors') as unknown as shapes.EksErrorDetail[];
  }

}

