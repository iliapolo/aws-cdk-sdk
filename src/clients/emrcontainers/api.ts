import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class EmRcontainersClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public cancelJobRun(input: shapes.EmRcontainersCancelJobRunRequest): EMRcontainersResponsesCancelJobRun {
    return new EMRcontainersResponsesCancelJobRun(this, this.__resources, input);
  }

  public createManagedEndpoint(input: shapes.EmRcontainersCreateManagedEndpointRequest): EMRcontainersResponsesCreateManagedEndpoint {
    return new EMRcontainersResponsesCreateManagedEndpoint(this, this.__resources, input);
  }

  public createVirtualCluster(input: shapes.EmRcontainersCreateVirtualClusterRequest): EMRcontainersResponsesCreateVirtualCluster {
    return new EMRcontainersResponsesCreateVirtualCluster(this, this.__resources, input);
  }

  public deleteManagedEndpoint(input: shapes.EmRcontainersDeleteManagedEndpointRequest): EMRcontainersResponsesDeleteManagedEndpoint {
    return new EMRcontainersResponsesDeleteManagedEndpoint(this, this.__resources, input);
  }

  public deleteVirtualCluster(input: shapes.EmRcontainersDeleteVirtualClusterRequest): EMRcontainersResponsesDeleteVirtualCluster {
    return new EMRcontainersResponsesDeleteVirtualCluster(this, this.__resources, input);
  }

  public describeJobRun(input: shapes.EmRcontainersDescribeJobRunRequest): EMRcontainersResponsesDescribeJobRun {
    return new EMRcontainersResponsesDescribeJobRun(this, this.__resources, input);
  }

  public describeManagedEndpoint(input: shapes.EmRcontainersDescribeManagedEndpointRequest): EMRcontainersResponsesDescribeManagedEndpoint {
    return new EMRcontainersResponsesDescribeManagedEndpoint(this, this.__resources, input);
  }

  public describeVirtualCluster(input: shapes.EmRcontainersDescribeVirtualClusterRequest): EMRcontainersResponsesDescribeVirtualCluster {
    return new EMRcontainersResponsesDescribeVirtualCluster(this, this.__resources, input);
  }

  public listJobRuns(input: shapes.EmRcontainersListJobRunsRequest): EMRcontainersResponsesListJobRuns {
    return new EMRcontainersResponsesListJobRuns(this, this.__resources, input);
  }

  public listManagedEndpoints(input: shapes.EmRcontainersListManagedEndpointsRequest): EMRcontainersResponsesListManagedEndpoints {
    return new EMRcontainersResponsesListManagedEndpoints(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.EmRcontainersListTagsForResourceRequest): EMRcontainersResponsesListTagsForResource {
    return new EMRcontainersResponsesListTagsForResource(this, this.__resources, input);
  }

  public listVirtualClusters(input: shapes.EmRcontainersListVirtualClustersRequest): EMRcontainersResponsesListVirtualClusters {
    return new EMRcontainersResponsesListVirtualClusters(this, this.__resources, input);
  }

  public startJobRun(input: shapes.EmRcontainersStartJobRunRequest): EMRcontainersResponsesStartJobRun {
    return new EMRcontainersResponsesStartJobRun(this, this.__resources, input);
  }

  public tagResource(input: shapes.EmRcontainersTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.EmRcontainersUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

}

export class EMRcontainersResponsesCancelJobRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EmRcontainersCancelJobRunRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelJobRun',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.CancelJobRun.id'),
        outputPath: 'id',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelJobRun.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get virtualClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelJobRun',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.CancelJobRun.virtualClusterId'),
        outputPath: 'virtualClusterId',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CancelJobRun.virtualClusterId', props);
    return resource.getResponseField('virtualClusterId') as unknown as string;
  }

}

export class EMRcontainersResponsesCreateManagedEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EmRcontainersCreateManagedEndpointRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createManagedEndpoint',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.CreateManagedEndpoint.id'),
        outputPath: 'id',
        parameters: {
          name: this.__input.name,
          virtualClusterId: this.__input.virtualClusterId,
          type: this.__input.type,
          releaseLabel: this.__input.releaseLabel,
          executionRoleArn: this.__input.executionRoleArn,
          certificateArn: this.__input.certificateArn,
          configurationOverrides: {
            applicationConfiguration: this.__input.configurationOverrides?.applicationConfiguration,
            monitoringConfiguration: {
              persistentAppUI: this.__input.configurationOverrides?.monitoringConfiguration?.persistentAppUI,
              cloudWatchMonitoringConfiguration: {
                logGroupName: this.__input.configurationOverrides?.monitoringConfiguration?.cloudWatchMonitoringConfiguration?.logGroupName,
                logStreamNamePrefix: this.__input.configurationOverrides?.monitoringConfiguration?.cloudWatchMonitoringConfiguration?.logStreamNamePrefix,
              },
              s3MonitoringConfiguration: {
                logUri: this.__input.configurationOverrides?.monitoringConfiguration?.s3MonitoringConfiguration?.logUri,
              },
            },
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateManagedEndpoint.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createManagedEndpoint',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.CreateManagedEndpoint.name'),
        outputPath: 'name',
        parameters: {
          name: this.__input.name,
          virtualClusterId: this.__input.virtualClusterId,
          type: this.__input.type,
          releaseLabel: this.__input.releaseLabel,
          executionRoleArn: this.__input.executionRoleArn,
          certificateArn: this.__input.certificateArn,
          configurationOverrides: {
            applicationConfiguration: this.__input.configurationOverrides?.applicationConfiguration,
            monitoringConfiguration: {
              persistentAppUI: this.__input.configurationOverrides?.monitoringConfiguration?.persistentAppUI,
              cloudWatchMonitoringConfiguration: {
                logGroupName: this.__input.configurationOverrides?.monitoringConfiguration?.cloudWatchMonitoringConfiguration?.logGroupName,
                logStreamNamePrefix: this.__input.configurationOverrides?.monitoringConfiguration?.cloudWatchMonitoringConfiguration?.logStreamNamePrefix,
              },
              s3MonitoringConfiguration: {
                logUri: this.__input.configurationOverrides?.monitoringConfiguration?.s3MonitoringConfiguration?.logUri,
              },
            },
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateManagedEndpoint.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createManagedEndpoint',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.CreateManagedEndpoint.arn'),
        outputPath: 'arn',
        parameters: {
          name: this.__input.name,
          virtualClusterId: this.__input.virtualClusterId,
          type: this.__input.type,
          releaseLabel: this.__input.releaseLabel,
          executionRoleArn: this.__input.executionRoleArn,
          certificateArn: this.__input.certificateArn,
          configurationOverrides: {
            applicationConfiguration: this.__input.configurationOverrides?.applicationConfiguration,
            monitoringConfiguration: {
              persistentAppUI: this.__input.configurationOverrides?.monitoringConfiguration?.persistentAppUI,
              cloudWatchMonitoringConfiguration: {
                logGroupName: this.__input.configurationOverrides?.monitoringConfiguration?.cloudWatchMonitoringConfiguration?.logGroupName,
                logStreamNamePrefix: this.__input.configurationOverrides?.monitoringConfiguration?.cloudWatchMonitoringConfiguration?.logStreamNamePrefix,
              },
              s3MonitoringConfiguration: {
                logUri: this.__input.configurationOverrides?.monitoringConfiguration?.s3MonitoringConfiguration?.logUri,
              },
            },
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateManagedEndpoint.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get virtualClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createManagedEndpoint',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.CreateManagedEndpoint.virtualClusterId'),
        outputPath: 'virtualClusterId',
        parameters: {
          name: this.__input.name,
          virtualClusterId: this.__input.virtualClusterId,
          type: this.__input.type,
          releaseLabel: this.__input.releaseLabel,
          executionRoleArn: this.__input.executionRoleArn,
          certificateArn: this.__input.certificateArn,
          configurationOverrides: {
            applicationConfiguration: this.__input.configurationOverrides?.applicationConfiguration,
            monitoringConfiguration: {
              persistentAppUI: this.__input.configurationOverrides?.monitoringConfiguration?.persistentAppUI,
              cloudWatchMonitoringConfiguration: {
                logGroupName: this.__input.configurationOverrides?.monitoringConfiguration?.cloudWatchMonitoringConfiguration?.logGroupName,
                logStreamNamePrefix: this.__input.configurationOverrides?.monitoringConfiguration?.cloudWatchMonitoringConfiguration?.logStreamNamePrefix,
              },
              s3MonitoringConfiguration: {
                logUri: this.__input.configurationOverrides?.monitoringConfiguration?.s3MonitoringConfiguration?.logUri,
              },
            },
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateManagedEndpoint.virtualClusterId', props);
    return resource.getResponseField('virtualClusterId') as unknown as string;
  }

}

export class EMRcontainersResponsesCreateVirtualCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EmRcontainersCreateVirtualClusterRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVirtualCluster',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.CreateVirtualCluster.id'),
        outputPath: 'id',
        parameters: {
          name: this.__input.name,
          containerProvider: {
            type: this.__input.containerProvider.type,
            id: this.__input.containerProvider.id,
            info: {
              eksInfo: {
                namespace: this.__input.containerProvider.info?.eksInfo?.namespace,
              },
            },
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVirtualCluster.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVirtualCluster',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.CreateVirtualCluster.name'),
        outputPath: 'name',
        parameters: {
          name: this.__input.name,
          containerProvider: {
            type: this.__input.containerProvider.type,
            id: this.__input.containerProvider.id,
            info: {
              eksInfo: {
                namespace: this.__input.containerProvider.info?.eksInfo?.namespace,
              },
            },
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVirtualCluster.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createVirtualCluster',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.CreateVirtualCluster.arn'),
        outputPath: 'arn',
        parameters: {
          name: this.__input.name,
          containerProvider: {
            type: this.__input.containerProvider.type,
            id: this.__input.containerProvider.id,
            info: {
              eksInfo: {
                namespace: this.__input.containerProvider.info?.eksInfo?.namespace,
              },
            },
          },
          clientToken: this.__input.clientToken,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateVirtualCluster.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

}

export class EMRcontainersResponsesDeleteManagedEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EmRcontainersDeleteManagedEndpointRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteManagedEndpoint',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DeleteManagedEndpoint.id'),
        outputPath: 'id',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteManagedEndpoint.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get virtualClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteManagedEndpoint',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DeleteManagedEndpoint.virtualClusterId'),
        outputPath: 'virtualClusterId',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteManagedEndpoint.virtualClusterId', props);
    return resource.getResponseField('virtualClusterId') as unknown as string;
  }

}

export class EMRcontainersResponsesDeleteVirtualCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EmRcontainersDeleteVirtualClusterRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteVirtualCluster',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DeleteVirtualCluster.id'),
        outputPath: 'id',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteVirtualCluster.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

}

export class EMRcontainersResponsesDescribeJobRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EmRcontainersDescribeJobRunRequest) {
  }

  public get jobRun(): EMRcontainersResponsesDescribeJobRunJobRun {
    return new EMRcontainersResponsesDescribeJobRunJobRun(this.__scope, this.__resources, this.__input);
  }

}

export class EMRcontainersResponsesDescribeJobRunJobRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EmRcontainersDescribeJobRunRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeJobRun.jobRun.id'),
        outputPath: 'jobRun.id',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.jobRun.id', props);
    return resource.getResponseField('jobRun.id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeJobRun.jobRun.name'),
        outputPath: 'jobRun.name',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.jobRun.name', props);
    return resource.getResponseField('jobRun.name') as unknown as string;
  }

  public get virtualClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeJobRun.jobRun.virtualClusterId'),
        outputPath: 'jobRun.virtualClusterId',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.jobRun.virtualClusterId', props);
    return resource.getResponseField('jobRun.virtualClusterId') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeJobRun.jobRun.arn'),
        outputPath: 'jobRun.arn',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.jobRun.arn', props);
    return resource.getResponseField('jobRun.arn') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeJobRun.jobRun.state'),
        outputPath: 'jobRun.state',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.jobRun.state', props);
    return resource.getResponseField('jobRun.state') as unknown as string;
  }

  public get clientToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeJobRun.jobRun.clientToken'),
        outputPath: 'jobRun.clientToken',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.jobRun.clientToken', props);
    return resource.getResponseField('jobRun.clientToken') as unknown as string;
  }

  public get executionRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeJobRun.jobRun.executionRoleArn'),
        outputPath: 'jobRun.executionRoleArn',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.jobRun.executionRoleArn', props);
    return resource.getResponseField('jobRun.executionRoleArn') as unknown as string;
  }

  public get releaseLabel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeJobRun.jobRun.releaseLabel'),
        outputPath: 'jobRun.releaseLabel',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.jobRun.releaseLabel', props);
    return resource.getResponseField('jobRun.releaseLabel') as unknown as string;
  }

  public get configurationOverrides(): EMRcontainersResponsesDescribeJobRunJobRunConfigurationOverrides {
    return new EMRcontainersResponsesDescribeJobRunJobRunConfigurationOverrides(this.__scope, this.__resources, this.__input);
  }

  public get jobDriver(): EMRcontainersResponsesDescribeJobRunJobRunJobDriver {
    return new EMRcontainersResponsesDescribeJobRunJobRunJobDriver(this.__scope, this.__resources, this.__input);
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeJobRun.jobRun.createdAt'),
        outputPath: 'jobRun.createdAt',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.jobRun.createdAt', props);
    return resource.getResponseField('jobRun.createdAt') as unknown as string;
  }

  public get createdBy(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeJobRun.jobRun.createdBy'),
        outputPath: 'jobRun.createdBy',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.jobRun.createdBy', props);
    return resource.getResponseField('jobRun.createdBy') as unknown as string;
  }

  public get finishedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeJobRun.jobRun.finishedAt'),
        outputPath: 'jobRun.finishedAt',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.jobRun.finishedAt', props);
    return resource.getResponseField('jobRun.finishedAt') as unknown as string;
  }

  public get stateDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeJobRun.jobRun.stateDetails'),
        outputPath: 'jobRun.stateDetails',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.jobRun.stateDetails', props);
    return resource.getResponseField('jobRun.stateDetails') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeJobRun.jobRun.failureReason'),
        outputPath: 'jobRun.failureReason',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.jobRun.failureReason', props);
    return resource.getResponseField('jobRun.failureReason') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeJobRun.jobRun.tags'),
        outputPath: 'jobRun.tags',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.jobRun.tags', props);
    return resource.getResponseField('jobRun.tags') as unknown as Record<string, string>;
  }

}

export class EMRcontainersResponsesDescribeJobRunJobRunConfigurationOverrides {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EmRcontainersDescribeJobRunRequest) {
  }

  public get applicationConfiguration(): shapes.EmRcontainersConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeJobRun.jobRun.configurationOverrides.applicationConfiguration'),
        outputPath: 'jobRun.configurationOverrides.applicationConfiguration',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.jobRun.configurationOverrides.applicationConfiguration', props);
    return resource.getResponseField('jobRun.configurationOverrides.applicationConfiguration') as unknown as shapes.EmRcontainersConfiguration[];
  }

  public get monitoringConfiguration(): EMRcontainersResponsesDescribeJobRunJobRunConfigurationOverridesMonitoringConfiguration {
    return new EMRcontainersResponsesDescribeJobRunJobRunConfigurationOverridesMonitoringConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class EMRcontainersResponsesDescribeJobRunJobRunConfigurationOverridesMonitoringConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EmRcontainersDescribeJobRunRequest) {
  }

  public get persistentAppUi(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeJobRun.jobRun.configurationOverrides.monitoringConfiguration.persistentAppUI'),
        outputPath: 'jobRun.configurationOverrides.monitoringConfiguration.persistentAppUI',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.jobRun.configurationOverrides.monitoringConfiguration.persistentAppUI', props);
    return resource.getResponseField('jobRun.configurationOverrides.monitoringConfiguration.persistentAppUI') as unknown as string;
  }

  public get cloudWatchMonitoringConfiguration(): EMRcontainersResponsesDescribeJobRunJobRunConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration {
    return new EMRcontainersResponsesDescribeJobRunJobRunConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get s3MonitoringConfiguration(): EMRcontainersResponsesDescribeJobRunJobRunConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration {
    return new EMRcontainersResponsesDescribeJobRunJobRunConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class EMRcontainersResponsesDescribeJobRunJobRunConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EmRcontainersDescribeJobRunRequest) {
  }

  public get logGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeJobRun.jobRun.configurationOverrides.monitoringConfiguration.cloudWatchMonitoringConfiguration.logGroupName'),
        outputPath: 'jobRun.configurationOverrides.monitoringConfiguration.cloudWatchMonitoringConfiguration.logGroupName',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.jobRun.configurationOverrides.monitoringConfiguration.cloudWatchMonitoringConfiguration.logGroupName', props);
    return resource.getResponseField('jobRun.configurationOverrides.monitoringConfiguration.cloudWatchMonitoringConfiguration.logGroupName') as unknown as string;
  }

  public get logStreamNamePrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeJobRun.jobRun.configurationOverrides.monitoringConfiguration.cloudWatchMonitoringConfiguration.logStreamNamePrefix'),
        outputPath: 'jobRun.configurationOverrides.monitoringConfiguration.cloudWatchMonitoringConfiguration.logStreamNamePrefix',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.jobRun.configurationOverrides.monitoringConfiguration.cloudWatchMonitoringConfiguration.logStreamNamePrefix', props);
    return resource.getResponseField('jobRun.configurationOverrides.monitoringConfiguration.cloudWatchMonitoringConfiguration.logStreamNamePrefix') as unknown as string;
  }

}

export class EMRcontainersResponsesDescribeJobRunJobRunConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EmRcontainersDescribeJobRunRequest) {
  }

  public get logUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeJobRun.jobRun.configurationOverrides.monitoringConfiguration.s3MonitoringConfiguration.logUri'),
        outputPath: 'jobRun.configurationOverrides.monitoringConfiguration.s3MonitoringConfiguration.logUri',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.jobRun.configurationOverrides.monitoringConfiguration.s3MonitoringConfiguration.logUri', props);
    return resource.getResponseField('jobRun.configurationOverrides.monitoringConfiguration.s3MonitoringConfiguration.logUri') as unknown as string;
  }

}

export class EMRcontainersResponsesDescribeJobRunJobRunJobDriver {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EmRcontainersDescribeJobRunRequest) {
  }

  public get sparkSubmitJobDriver(): EMRcontainersResponsesDescribeJobRunJobRunJobDriverSparkSubmitJobDriver {
    return new EMRcontainersResponsesDescribeJobRunJobRunJobDriverSparkSubmitJobDriver(this.__scope, this.__resources, this.__input);
  }

}

export class EMRcontainersResponsesDescribeJobRunJobRunJobDriverSparkSubmitJobDriver {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EmRcontainersDescribeJobRunRequest) {
  }

  public get entryPoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeJobRun.jobRun.jobDriver.sparkSubmitJobDriver.entryPoint'),
        outputPath: 'jobRun.jobDriver.sparkSubmitJobDriver.entryPoint',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.jobRun.jobDriver.sparkSubmitJobDriver.entryPoint', props);
    return resource.getResponseField('jobRun.jobDriver.sparkSubmitJobDriver.entryPoint') as unknown as string;
  }

  public get entryPointArguments(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeJobRun.jobRun.jobDriver.sparkSubmitJobDriver.entryPointArguments'),
        outputPath: 'jobRun.jobDriver.sparkSubmitJobDriver.entryPointArguments',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.jobRun.jobDriver.sparkSubmitJobDriver.entryPointArguments', props);
    return resource.getResponseField('jobRun.jobDriver.sparkSubmitJobDriver.entryPointArguments') as unknown as string[];
  }

  public get sparkSubmitParameters(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobRun',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeJobRun.jobRun.jobDriver.sparkSubmitJobDriver.sparkSubmitParameters'),
        outputPath: 'jobRun.jobDriver.sparkSubmitJobDriver.sparkSubmitParameters',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobRun.jobRun.jobDriver.sparkSubmitJobDriver.sparkSubmitParameters', props);
    return resource.getResponseField('jobRun.jobDriver.sparkSubmitJobDriver.sparkSubmitParameters') as unknown as string;
  }

}

export class EMRcontainersResponsesDescribeManagedEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EmRcontainersDescribeManagedEndpointRequest) {
  }

  public get endpoint(): EMRcontainersResponsesDescribeManagedEndpointEndpoint {
    return new EMRcontainersResponsesDescribeManagedEndpointEndpoint(this.__scope, this.__resources, this.__input);
  }

}

export class EMRcontainersResponsesDescribeManagedEndpointEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EmRcontainersDescribeManagedEndpointRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeManagedEndpoint',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeManagedEndpoint.endpoint.id'),
        outputPath: 'endpoint.id',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeManagedEndpoint.endpoint.id', props);
    return resource.getResponseField('endpoint.id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeManagedEndpoint',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeManagedEndpoint.endpoint.name'),
        outputPath: 'endpoint.name',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeManagedEndpoint.endpoint.name', props);
    return resource.getResponseField('endpoint.name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeManagedEndpoint',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeManagedEndpoint.endpoint.arn'),
        outputPath: 'endpoint.arn',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeManagedEndpoint.endpoint.arn', props);
    return resource.getResponseField('endpoint.arn') as unknown as string;
  }

  public get virtualClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeManagedEndpoint',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeManagedEndpoint.endpoint.virtualClusterId'),
        outputPath: 'endpoint.virtualClusterId',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeManagedEndpoint.endpoint.virtualClusterId', props);
    return resource.getResponseField('endpoint.virtualClusterId') as unknown as string;
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeManagedEndpoint',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeManagedEndpoint.endpoint.type'),
        outputPath: 'endpoint.type',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeManagedEndpoint.endpoint.type', props);
    return resource.getResponseField('endpoint.type') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeManagedEndpoint',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeManagedEndpoint.endpoint.state'),
        outputPath: 'endpoint.state',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeManagedEndpoint.endpoint.state', props);
    return resource.getResponseField('endpoint.state') as unknown as string;
  }

  public get releaseLabel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeManagedEndpoint',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeManagedEndpoint.endpoint.releaseLabel'),
        outputPath: 'endpoint.releaseLabel',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeManagedEndpoint.endpoint.releaseLabel', props);
    return resource.getResponseField('endpoint.releaseLabel') as unknown as string;
  }

  public get executionRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeManagedEndpoint',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeManagedEndpoint.endpoint.executionRoleArn'),
        outputPath: 'endpoint.executionRoleArn',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeManagedEndpoint.endpoint.executionRoleArn', props);
    return resource.getResponseField('endpoint.executionRoleArn') as unknown as string;
  }

  public get certificateArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeManagedEndpoint',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeManagedEndpoint.endpoint.certificateArn'),
        outputPath: 'endpoint.certificateArn',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeManagedEndpoint.endpoint.certificateArn', props);
    return resource.getResponseField('endpoint.certificateArn') as unknown as string;
  }

  public get configurationOverrides(): EMRcontainersResponsesDescribeManagedEndpointEndpointConfigurationOverrides {
    return new EMRcontainersResponsesDescribeManagedEndpointEndpointConfigurationOverrides(this.__scope, this.__resources, this.__input);
  }

  public get serverUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeManagedEndpoint',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeManagedEndpoint.endpoint.serverUrl'),
        outputPath: 'endpoint.serverUrl',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeManagedEndpoint.endpoint.serverUrl', props);
    return resource.getResponseField('endpoint.serverUrl') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeManagedEndpoint',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeManagedEndpoint.endpoint.createdAt'),
        outputPath: 'endpoint.createdAt',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeManagedEndpoint.endpoint.createdAt', props);
    return resource.getResponseField('endpoint.createdAt') as unknown as string;
  }

  public get securityGroup(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeManagedEndpoint',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeManagedEndpoint.endpoint.securityGroup'),
        outputPath: 'endpoint.securityGroup',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeManagedEndpoint.endpoint.securityGroup', props);
    return resource.getResponseField('endpoint.securityGroup') as unknown as string;
  }

  public get subnetIds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeManagedEndpoint',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeManagedEndpoint.endpoint.subnetIds'),
        outputPath: 'endpoint.subnetIds',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeManagedEndpoint.endpoint.subnetIds', props);
    return resource.getResponseField('endpoint.subnetIds') as unknown as string[];
  }

  public get stateDetails(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeManagedEndpoint',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeManagedEndpoint.endpoint.stateDetails'),
        outputPath: 'endpoint.stateDetails',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeManagedEndpoint.endpoint.stateDetails', props);
    return resource.getResponseField('endpoint.stateDetails') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeManagedEndpoint',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeManagedEndpoint.endpoint.failureReason'),
        outputPath: 'endpoint.failureReason',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeManagedEndpoint.endpoint.failureReason', props);
    return resource.getResponseField('endpoint.failureReason') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeManagedEndpoint',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeManagedEndpoint.endpoint.tags'),
        outputPath: 'endpoint.tags',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeManagedEndpoint.endpoint.tags', props);
    return resource.getResponseField('endpoint.tags') as unknown as Record<string, string>;
  }

}

export class EMRcontainersResponsesDescribeManagedEndpointEndpointConfigurationOverrides {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EmRcontainersDescribeManagedEndpointRequest) {
  }

  public get applicationConfiguration(): shapes.EmRcontainersConfiguration[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeManagedEndpoint',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeManagedEndpoint.endpoint.configurationOverrides.applicationConfiguration'),
        outputPath: 'endpoint.configurationOverrides.applicationConfiguration',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeManagedEndpoint.endpoint.configurationOverrides.applicationConfiguration', props);
    return resource.getResponseField('endpoint.configurationOverrides.applicationConfiguration') as unknown as shapes.EmRcontainersConfiguration[];
  }

  public get monitoringConfiguration(): EMRcontainersResponsesDescribeManagedEndpointEndpointConfigurationOverridesMonitoringConfiguration {
    return new EMRcontainersResponsesDescribeManagedEndpointEndpointConfigurationOverridesMonitoringConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class EMRcontainersResponsesDescribeManagedEndpointEndpointConfigurationOverridesMonitoringConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EmRcontainersDescribeManagedEndpointRequest) {
  }

  public get persistentAppUi(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeManagedEndpoint',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeManagedEndpoint.endpoint.configurationOverrides.monitoringConfiguration.persistentAppUI'),
        outputPath: 'endpoint.configurationOverrides.monitoringConfiguration.persistentAppUI',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeManagedEndpoint.endpoint.configurationOverrides.monitoringConfiguration.persistentAppUI', props);
    return resource.getResponseField('endpoint.configurationOverrides.monitoringConfiguration.persistentAppUI') as unknown as string;
  }

  public get cloudWatchMonitoringConfiguration(): EMRcontainersResponsesDescribeManagedEndpointEndpointConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration {
    return new EMRcontainersResponsesDescribeManagedEndpointEndpointConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get s3MonitoringConfiguration(): EMRcontainersResponsesDescribeManagedEndpointEndpointConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration {
    return new EMRcontainersResponsesDescribeManagedEndpointEndpointConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration(this.__scope, this.__resources, this.__input);
  }

}

export class EMRcontainersResponsesDescribeManagedEndpointEndpointConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EmRcontainersDescribeManagedEndpointRequest) {
  }

  public get logGroupName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeManagedEndpoint',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeManagedEndpoint.endpoint.configurationOverrides.monitoringConfiguration.cloudWatchMonitoringConfiguration.logGroupName'),
        outputPath: 'endpoint.configurationOverrides.monitoringConfiguration.cloudWatchMonitoringConfiguration.logGroupName',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeManagedEndpoint.endpoint.configurationOverrides.monitoringConfiguration.cloudWatchMonitoringConfiguration.logGroupName', props);
    return resource.getResponseField('endpoint.configurationOverrides.monitoringConfiguration.cloudWatchMonitoringConfiguration.logGroupName') as unknown as string;
  }

  public get logStreamNamePrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeManagedEndpoint',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeManagedEndpoint.endpoint.configurationOverrides.monitoringConfiguration.cloudWatchMonitoringConfiguration.logStreamNamePrefix'),
        outputPath: 'endpoint.configurationOverrides.monitoringConfiguration.cloudWatchMonitoringConfiguration.logStreamNamePrefix',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeManagedEndpoint.endpoint.configurationOverrides.monitoringConfiguration.cloudWatchMonitoringConfiguration.logStreamNamePrefix', props);
    return resource.getResponseField('endpoint.configurationOverrides.monitoringConfiguration.cloudWatchMonitoringConfiguration.logStreamNamePrefix') as unknown as string;
  }

}

export class EMRcontainersResponsesDescribeManagedEndpointEndpointConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EmRcontainersDescribeManagedEndpointRequest) {
  }

  public get logUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeManagedEndpoint',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeManagedEndpoint.endpoint.configurationOverrides.monitoringConfiguration.s3MonitoringConfiguration.logUri'),
        outputPath: 'endpoint.configurationOverrides.monitoringConfiguration.s3MonitoringConfiguration.logUri',
        parameters: {
          id: this.__input.id,
          virtualClusterId: this.__input.virtualClusterId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeManagedEndpoint.endpoint.configurationOverrides.monitoringConfiguration.s3MonitoringConfiguration.logUri', props);
    return resource.getResponseField('endpoint.configurationOverrides.monitoringConfiguration.s3MonitoringConfiguration.logUri') as unknown as string;
  }

}

export class EMRcontainersResponsesDescribeVirtualCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EmRcontainersDescribeVirtualClusterRequest) {
  }

  public get virtualCluster(): EMRcontainersResponsesDescribeVirtualClusterVirtualCluster {
    return new EMRcontainersResponsesDescribeVirtualClusterVirtualCluster(this.__scope, this.__resources, this.__input);
  }

}

export class EMRcontainersResponsesDescribeVirtualClusterVirtualCluster {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EmRcontainersDescribeVirtualClusterRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVirtualCluster',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeVirtualCluster.virtualCluster.id'),
        outputPath: 'virtualCluster.id',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVirtualCluster.virtualCluster.id', props);
    return resource.getResponseField('virtualCluster.id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVirtualCluster',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeVirtualCluster.virtualCluster.name'),
        outputPath: 'virtualCluster.name',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVirtualCluster.virtualCluster.name', props);
    return resource.getResponseField('virtualCluster.name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVirtualCluster',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeVirtualCluster.virtualCluster.arn'),
        outputPath: 'virtualCluster.arn',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVirtualCluster.virtualCluster.arn', props);
    return resource.getResponseField('virtualCluster.arn') as unknown as string;
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVirtualCluster',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeVirtualCluster.virtualCluster.state'),
        outputPath: 'virtualCluster.state',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVirtualCluster.virtualCluster.state', props);
    return resource.getResponseField('virtualCluster.state') as unknown as string;
  }

  public get containerProvider(): EMRcontainersResponsesDescribeVirtualClusterVirtualClusterContainerProvider {
    return new EMRcontainersResponsesDescribeVirtualClusterVirtualClusterContainerProvider(this.__scope, this.__resources, this.__input);
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVirtualCluster',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeVirtualCluster.virtualCluster.createdAt'),
        outputPath: 'virtualCluster.createdAt',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVirtualCluster.virtualCluster.createdAt', props);
    return resource.getResponseField('virtualCluster.createdAt') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVirtualCluster',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeVirtualCluster.virtualCluster.tags'),
        outputPath: 'virtualCluster.tags',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVirtualCluster.virtualCluster.tags', props);
    return resource.getResponseField('virtualCluster.tags') as unknown as Record<string, string>;
  }

}

export class EMRcontainersResponsesDescribeVirtualClusterVirtualClusterContainerProvider {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EmRcontainersDescribeVirtualClusterRequest) {
  }

  public get type(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVirtualCluster',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeVirtualCluster.virtualCluster.containerProvider.type'),
        outputPath: 'virtualCluster.containerProvider.type',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVirtualCluster.virtualCluster.containerProvider.type', props);
    return resource.getResponseField('virtualCluster.containerProvider.type') as unknown as string;
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVirtualCluster',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeVirtualCluster.virtualCluster.containerProvider.id'),
        outputPath: 'virtualCluster.containerProvider.id',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVirtualCluster.virtualCluster.containerProvider.id', props);
    return resource.getResponseField('virtualCluster.containerProvider.id') as unknown as string;
  }

  public get info(): EMRcontainersResponsesDescribeVirtualClusterVirtualClusterContainerProviderInfo {
    return new EMRcontainersResponsesDescribeVirtualClusterVirtualClusterContainerProviderInfo(this.__scope, this.__resources, this.__input);
  }

}

export class EMRcontainersResponsesDescribeVirtualClusterVirtualClusterContainerProviderInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EmRcontainersDescribeVirtualClusterRequest) {
  }

  public get eksInfo(): EMRcontainersResponsesDescribeVirtualClusterVirtualClusterContainerProviderInfoEksInfo {
    return new EMRcontainersResponsesDescribeVirtualClusterVirtualClusterContainerProviderInfoEksInfo(this.__scope, this.__resources, this.__input);
  }

}

export class EMRcontainersResponsesDescribeVirtualClusterVirtualClusterContainerProviderInfoEksInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EmRcontainersDescribeVirtualClusterRequest) {
  }

  public get namespace(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeVirtualCluster',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.DescribeVirtualCluster.virtualCluster.containerProvider.info.eksInfo.namespace'),
        outputPath: 'virtualCluster.containerProvider.info.eksInfo.namespace',
        parameters: {
          id: this.__input.id,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeVirtualCluster.virtualCluster.containerProvider.info.eksInfo.namespace', props);
    return resource.getResponseField('virtualCluster.containerProvider.info.eksInfo.namespace') as unknown as string;
  }

}

export class EMRcontainersResponsesListJobRuns {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EmRcontainersListJobRunsRequest) {
  }

  public get jobRuns(): shapes.EmRcontainersJobRun[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobRuns',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.ListJobRuns.jobRuns'),
        outputPath: 'jobRuns',
        parameters: {
          virtualClusterId: this.__input.virtualClusterId,
          createdBefore: this.__input.createdBefore,
          createdAfter: this.__input.createdAfter,
          name: this.__input.name,
          states: this.__input.states,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobRuns.jobRuns', props);
    return resource.getResponseField('jobRuns') as unknown as shapes.EmRcontainersJobRun[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobRuns',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.ListJobRuns.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          virtualClusterId: this.__input.virtualClusterId,
          createdBefore: this.__input.createdBefore,
          createdAfter: this.__input.createdAfter,
          name: this.__input.name,
          states: this.__input.states,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobRuns.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class EMRcontainersResponsesListManagedEndpoints {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EmRcontainersListManagedEndpointsRequest) {
  }

  public get endpoints(): shapes.EmRcontainersEndpoint[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listManagedEndpoints',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.ListManagedEndpoints.endpoints'),
        outputPath: 'endpoints',
        parameters: {
          virtualClusterId: this.__input.virtualClusterId,
          createdBefore: this.__input.createdBefore,
          createdAfter: this.__input.createdAfter,
          types: this.__input.types,
          states: this.__input.states,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListManagedEndpoints.endpoints', props);
    return resource.getResponseField('endpoints') as unknown as shapes.EmRcontainersEndpoint[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listManagedEndpoints',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.ListManagedEndpoints.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          virtualClusterId: this.__input.virtualClusterId,
          createdBefore: this.__input.createdBefore,
          createdAfter: this.__input.createdAfter,
          types: this.__input.types,
          states: this.__input.states,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListManagedEndpoints.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class EMRcontainersResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EmRcontainersListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.ListTagsForResource.tags'),
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

export class EMRcontainersResponsesListVirtualClusters {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EmRcontainersListVirtualClustersRequest) {
  }

  public get virtualClusters(): shapes.EmRcontainersVirtualCluster[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listVirtualClusters',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.ListVirtualClusters.virtualClusters'),
        outputPath: 'virtualClusters',
        parameters: {
          containerProviderId: this.__input.containerProviderId,
          containerProviderType: this.__input.containerProviderType,
          createdAfter: this.__input.createdAfter,
          createdBefore: this.__input.createdBefore,
          states: this.__input.states,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListVirtualClusters.virtualClusters', props);
    return resource.getResponseField('virtualClusters') as unknown as shapes.EmRcontainersVirtualCluster[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listVirtualClusters',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.ListVirtualClusters.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          containerProviderId: this.__input.containerProviderId,
          containerProviderType: this.__input.containerProviderType,
          createdAfter: this.__input.createdAfter,
          createdBefore: this.__input.createdBefore,
          states: this.__input.states,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListVirtualClusters.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class EMRcontainersResponsesStartJobRun {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.EmRcontainersStartJobRunRequest) {
  }

  public get id(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startJobRun',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.StartJobRun.id'),
        outputPath: 'id',
        parameters: {
          name: this.__input.name,
          virtualClusterId: this.__input.virtualClusterId,
          clientToken: this.__input.clientToken,
          executionRoleArn: this.__input.executionRoleArn,
          releaseLabel: this.__input.releaseLabel,
          jobDriver: {
            sparkSubmitJobDriver: {
              entryPoint: this.__input.jobDriver.sparkSubmitJobDriver?.entryPoint,
              entryPointArguments: this.__input.jobDriver.sparkSubmitJobDriver?.entryPointArguments,
              sparkSubmitParameters: this.__input.jobDriver.sparkSubmitJobDriver?.sparkSubmitParameters,
            },
          },
          configurationOverrides: {
            applicationConfiguration: this.__input.configurationOverrides?.applicationConfiguration,
            monitoringConfiguration: {
              persistentAppUI: this.__input.configurationOverrides?.monitoringConfiguration?.persistentAppUI,
              cloudWatchMonitoringConfiguration: {
                logGroupName: this.__input.configurationOverrides?.monitoringConfiguration?.cloudWatchMonitoringConfiguration?.logGroupName,
                logStreamNamePrefix: this.__input.configurationOverrides?.monitoringConfiguration?.cloudWatchMonitoringConfiguration?.logStreamNamePrefix,
              },
              s3MonitoringConfiguration: {
                logUri: this.__input.configurationOverrides?.monitoringConfiguration?.s3MonitoringConfiguration?.logUri,
              },
            },
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartJobRun.id', props);
    return resource.getResponseField('id') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startJobRun',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.StartJobRun.name'),
        outputPath: 'name',
        parameters: {
          name: this.__input.name,
          virtualClusterId: this.__input.virtualClusterId,
          clientToken: this.__input.clientToken,
          executionRoleArn: this.__input.executionRoleArn,
          releaseLabel: this.__input.releaseLabel,
          jobDriver: {
            sparkSubmitJobDriver: {
              entryPoint: this.__input.jobDriver.sparkSubmitJobDriver?.entryPoint,
              entryPointArguments: this.__input.jobDriver.sparkSubmitJobDriver?.entryPointArguments,
              sparkSubmitParameters: this.__input.jobDriver.sparkSubmitJobDriver?.sparkSubmitParameters,
            },
          },
          configurationOverrides: {
            applicationConfiguration: this.__input.configurationOverrides?.applicationConfiguration,
            monitoringConfiguration: {
              persistentAppUI: this.__input.configurationOverrides?.monitoringConfiguration?.persistentAppUI,
              cloudWatchMonitoringConfiguration: {
                logGroupName: this.__input.configurationOverrides?.monitoringConfiguration?.cloudWatchMonitoringConfiguration?.logGroupName,
                logStreamNamePrefix: this.__input.configurationOverrides?.monitoringConfiguration?.cloudWatchMonitoringConfiguration?.logStreamNamePrefix,
              },
              s3MonitoringConfiguration: {
                logUri: this.__input.configurationOverrides?.monitoringConfiguration?.s3MonitoringConfiguration?.logUri,
              },
            },
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartJobRun.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startJobRun',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.StartJobRun.arn'),
        outputPath: 'arn',
        parameters: {
          name: this.__input.name,
          virtualClusterId: this.__input.virtualClusterId,
          clientToken: this.__input.clientToken,
          executionRoleArn: this.__input.executionRoleArn,
          releaseLabel: this.__input.releaseLabel,
          jobDriver: {
            sparkSubmitJobDriver: {
              entryPoint: this.__input.jobDriver.sparkSubmitJobDriver?.entryPoint,
              entryPointArguments: this.__input.jobDriver.sparkSubmitJobDriver?.entryPointArguments,
              sparkSubmitParameters: this.__input.jobDriver.sparkSubmitJobDriver?.sparkSubmitParameters,
            },
          },
          configurationOverrides: {
            applicationConfiguration: this.__input.configurationOverrides?.applicationConfiguration,
            monitoringConfiguration: {
              persistentAppUI: this.__input.configurationOverrides?.monitoringConfiguration?.persistentAppUI,
              cloudWatchMonitoringConfiguration: {
                logGroupName: this.__input.configurationOverrides?.monitoringConfiguration?.cloudWatchMonitoringConfiguration?.logGroupName,
                logStreamNamePrefix: this.__input.configurationOverrides?.monitoringConfiguration?.cloudWatchMonitoringConfiguration?.logStreamNamePrefix,
              },
              s3MonitoringConfiguration: {
                logUri: this.__input.configurationOverrides?.monitoringConfiguration?.s3MonitoringConfiguration?.logUri,
              },
            },
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartJobRun.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get virtualClusterId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startJobRun',
        service: 'EMRcontainers',
        physicalResourceId: cr.PhysicalResourceId.of('EMRcontainers.StartJobRun.virtualClusterId'),
        outputPath: 'virtualClusterId',
        parameters: {
          name: this.__input.name,
          virtualClusterId: this.__input.virtualClusterId,
          clientToken: this.__input.clientToken,
          executionRoleArn: this.__input.executionRoleArn,
          releaseLabel: this.__input.releaseLabel,
          jobDriver: {
            sparkSubmitJobDriver: {
              entryPoint: this.__input.jobDriver.sparkSubmitJobDriver?.entryPoint,
              entryPointArguments: this.__input.jobDriver.sparkSubmitJobDriver?.entryPointArguments,
              sparkSubmitParameters: this.__input.jobDriver.sparkSubmitJobDriver?.sparkSubmitParameters,
            },
          },
          configurationOverrides: {
            applicationConfiguration: this.__input.configurationOverrides?.applicationConfiguration,
            monitoringConfiguration: {
              persistentAppUI: this.__input.configurationOverrides?.monitoringConfiguration?.persistentAppUI,
              cloudWatchMonitoringConfiguration: {
                logGroupName: this.__input.configurationOverrides?.monitoringConfiguration?.cloudWatchMonitoringConfiguration?.logGroupName,
                logStreamNamePrefix: this.__input.configurationOverrides?.monitoringConfiguration?.cloudWatchMonitoringConfiguration?.logStreamNamePrefix,
              },
              s3MonitoringConfiguration: {
                logUri: this.__input.configurationOverrides?.monitoringConfiguration?.s3MonitoringConfiguration?.logUri,
              },
            },
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartJobRun.virtualClusterId', props);
    return resource.getResponseField('virtualClusterId') as unknown as string;
  }

}

