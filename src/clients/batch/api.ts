import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class BatchClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public cancelJob(input: shapes.BatchCancelJobRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelJob',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.CancelJob'),
        parameters: {
          jobId: input.jobId,
          reason: input.reason,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CancelJob', props);
  }

  public createComputeEnvironment(input: shapes.BatchCreateComputeEnvironmentRequest): BatchResponsesCreateComputeEnvironment {
    return new BatchResponsesCreateComputeEnvironment(this, this.__resources, input);
  }

  public createJobQueue(input: shapes.BatchCreateJobQueueRequest): BatchResponsesCreateJobQueue {
    return new BatchResponsesCreateJobQueue(this, this.__resources, input);
  }

  public deleteComputeEnvironment(input: shapes.BatchDeleteComputeEnvironmentRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteComputeEnvironment',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.DeleteComputeEnvironment'),
        parameters: {
          computeEnvironment: input.computeEnvironment,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteComputeEnvironment', props);
  }

  public deleteJobQueue(input: shapes.BatchDeleteJobQueueRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteJobQueue',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.DeleteJobQueue'),
        parameters: {
          jobQueue: input.jobQueue,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteJobQueue', props);
  }

  public deregisterJobDefinition(input: shapes.BatchDeregisterJobDefinitionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterJobDefinition',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.DeregisterJobDefinition'),
        parameters: {
          jobDefinition: input.jobDefinition,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeregisterJobDefinition', props);
  }

  public describeComputeEnvironments(input: shapes.BatchDescribeComputeEnvironmentsRequest): BatchResponsesDescribeComputeEnvironments {
    return new BatchResponsesDescribeComputeEnvironments(this, this.__resources, input);
  }

  public describeJobDefinitions(input: shapes.BatchDescribeJobDefinitionsRequest): BatchResponsesDescribeJobDefinitions {
    return new BatchResponsesDescribeJobDefinitions(this, this.__resources, input);
  }

  public describeJobQueues(input: shapes.BatchDescribeJobQueuesRequest): BatchResponsesDescribeJobQueues {
    return new BatchResponsesDescribeJobQueues(this, this.__resources, input);
  }

  public describeJobs(input: shapes.BatchDescribeJobsRequest): BatchResponsesDescribeJobs {
    return new BatchResponsesDescribeJobs(this, this.__resources, input);
  }

  public listJobs(input: shapes.BatchListJobsRequest): BatchResponsesListJobs {
    return new BatchResponsesListJobs(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.BatchListTagsForResourceRequest): BatchResponsesListTagsForResource {
    return new BatchResponsesListTagsForResource(this, this.__resources, input);
  }

  public registerJobDefinition(input: shapes.BatchRegisterJobDefinitionRequest): BatchResponsesRegisterJobDefinition {
    return new BatchResponsesRegisterJobDefinition(this, this.__resources, input);
  }

  public submitJob(input: shapes.BatchSubmitJobRequest): BatchResponsesSubmitJob {
    return new BatchResponsesSubmitJob(this, this.__resources, input);
  }

  public tagResource(input: shapes.BatchTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public terminateJob(input: shapes.BatchTerminateJobRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'terminateJob',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.TerminateJob'),
        parameters: {
          jobId: input.jobId,
          reason: input.reason,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TerminateJob', props);
  }

  public untagResource(input: shapes.BatchUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateComputeEnvironment(input: shapes.BatchUpdateComputeEnvironmentRequest): BatchResponsesUpdateComputeEnvironment {
    return new BatchResponsesUpdateComputeEnvironment(this, this.__resources, input);
  }

  public updateJobQueue(input: shapes.BatchUpdateJobQueueRequest): BatchResponsesUpdateJobQueue {
    return new BatchResponsesUpdateJobQueue(this, this.__resources, input);
  }

}

export class BatchResponsesCreateComputeEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BatchCreateComputeEnvironmentRequest) {
  }

  public get computeEnvironmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComputeEnvironment',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.CreateComputeEnvironment.computeEnvironmentName'),
        outputPath: 'computeEnvironmentName',
        parameters: {
          computeEnvironmentName: this.__input.computeEnvironmentName,
          type: this.__input.type,
          state: this.__input.state,
          computeResources: {
            type: this.__input.computeResources?.type,
            allocationStrategy: this.__input.computeResources?.allocationStrategy,
            minvCpus: this.__input.computeResources?.minvCpus,
            maxvCpus: this.__input.computeResources?.maxvCpus,
            desiredvCpus: this.__input.computeResources?.desiredvCpus,
            instanceTypes: this.__input.computeResources?.instanceTypes,
            imageId: this.__input.computeResources?.imageId,
            subnets: this.__input.computeResources?.subnets,
            securityGroupIds: this.__input.computeResources?.securityGroupIds,
            ec2KeyPair: this.__input.computeResources?.ec2KeyPair,
            instanceRole: this.__input.computeResources?.instanceRole,
            tags: this.__input.computeResources?.tags,
            placementGroup: this.__input.computeResources?.placementGroup,
            bidPercentage: this.__input.computeResources?.bidPercentage,
            spotIamFleetRole: this.__input.computeResources?.spotIamFleetRole,
            launchTemplate: {
              launchTemplateId: this.__input.computeResources?.launchTemplate?.launchTemplateId,
              launchTemplateName: this.__input.computeResources?.launchTemplate?.launchTemplateName,
              version: this.__input.computeResources?.launchTemplate?.version,
            },
            ec2Configuration: this.__input.computeResources?.ec2Configuration,
          },
          serviceRole: this.__input.serviceRole,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComputeEnvironment.computeEnvironmentName', props);
    return resource.getResponseField('computeEnvironmentName') as unknown as string;
  }

  public get computeEnvironmentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createComputeEnvironment',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.CreateComputeEnvironment.computeEnvironmentArn'),
        outputPath: 'computeEnvironmentArn',
        parameters: {
          computeEnvironmentName: this.__input.computeEnvironmentName,
          type: this.__input.type,
          state: this.__input.state,
          computeResources: {
            type: this.__input.computeResources?.type,
            allocationStrategy: this.__input.computeResources?.allocationStrategy,
            minvCpus: this.__input.computeResources?.minvCpus,
            maxvCpus: this.__input.computeResources?.maxvCpus,
            desiredvCpus: this.__input.computeResources?.desiredvCpus,
            instanceTypes: this.__input.computeResources?.instanceTypes,
            imageId: this.__input.computeResources?.imageId,
            subnets: this.__input.computeResources?.subnets,
            securityGroupIds: this.__input.computeResources?.securityGroupIds,
            ec2KeyPair: this.__input.computeResources?.ec2KeyPair,
            instanceRole: this.__input.computeResources?.instanceRole,
            tags: this.__input.computeResources?.tags,
            placementGroup: this.__input.computeResources?.placementGroup,
            bidPercentage: this.__input.computeResources?.bidPercentage,
            spotIamFleetRole: this.__input.computeResources?.spotIamFleetRole,
            launchTemplate: {
              launchTemplateId: this.__input.computeResources?.launchTemplate?.launchTemplateId,
              launchTemplateName: this.__input.computeResources?.launchTemplate?.launchTemplateName,
              version: this.__input.computeResources?.launchTemplate?.version,
            },
            ec2Configuration: this.__input.computeResources?.ec2Configuration,
          },
          serviceRole: this.__input.serviceRole,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateComputeEnvironment.computeEnvironmentArn', props);
    return resource.getResponseField('computeEnvironmentArn') as unknown as string;
  }

}

export class BatchResponsesCreateJobQueue {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BatchCreateJobQueueRequest) {
  }

  public get jobQueueName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJobQueue',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.CreateJobQueue.jobQueueName'),
        outputPath: 'jobQueueName',
        parameters: {
          jobQueueName: this.__input.jobQueueName,
          state: this.__input.state,
          priority: this.__input.priority,
          computeEnvironmentOrder: this.__input.computeEnvironmentOrder,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJobQueue.jobQueueName', props);
    return resource.getResponseField('jobQueueName') as unknown as string;
  }

  public get jobQueueArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createJobQueue',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.CreateJobQueue.jobQueueArn'),
        outputPath: 'jobQueueArn',
        parameters: {
          jobQueueName: this.__input.jobQueueName,
          state: this.__input.state,
          priority: this.__input.priority,
          computeEnvironmentOrder: this.__input.computeEnvironmentOrder,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateJobQueue.jobQueueArn', props);
    return resource.getResponseField('jobQueueArn') as unknown as string;
  }

}

export class BatchResponsesDescribeComputeEnvironments {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BatchDescribeComputeEnvironmentsRequest) {
  }

  public get computeEnvironments(): shapes.BatchComputeEnvironmentDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeComputeEnvironments',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.DescribeComputeEnvironments.computeEnvironments'),
        outputPath: 'computeEnvironments',
        parameters: {
          computeEnvironments: this.__input.computeEnvironments,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeComputeEnvironments.computeEnvironments', props);
    return resource.getResponseField('computeEnvironments') as unknown as shapes.BatchComputeEnvironmentDetail[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeComputeEnvironments',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.DescribeComputeEnvironments.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          computeEnvironments: this.__input.computeEnvironments,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeComputeEnvironments.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class BatchResponsesDescribeJobDefinitions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BatchDescribeJobDefinitionsRequest) {
  }

  public get jobDefinitions(): shapes.BatchJobDefinition[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobDefinitions',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.DescribeJobDefinitions.jobDefinitions'),
        outputPath: 'jobDefinitions',
        parameters: {
          jobDefinitions: this.__input.jobDefinitions,
          maxResults: this.__input.maxResults,
          jobDefinitionName: this.__input.jobDefinitionName,
          status: this.__input.status,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobDefinitions.jobDefinitions', props);
    return resource.getResponseField('jobDefinitions') as unknown as shapes.BatchJobDefinition[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobDefinitions',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.DescribeJobDefinitions.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          jobDefinitions: this.__input.jobDefinitions,
          maxResults: this.__input.maxResults,
          jobDefinitionName: this.__input.jobDefinitionName,
          status: this.__input.status,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobDefinitions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class BatchResponsesDescribeJobQueues {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BatchDescribeJobQueuesRequest) {
  }

  public get jobQueues(): shapes.BatchJobQueueDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobQueues',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.DescribeJobQueues.jobQueues'),
        outputPath: 'jobQueues',
        parameters: {
          jobQueues: this.__input.jobQueues,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobQueues.jobQueues', props);
    return resource.getResponseField('jobQueues') as unknown as shapes.BatchJobQueueDetail[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobQueues',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.DescribeJobQueues.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          jobQueues: this.__input.jobQueues,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobQueues.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class BatchResponsesDescribeJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BatchDescribeJobsRequest) {
  }

  public get jobs(): shapes.BatchJobDetail[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeJobs',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.DescribeJobs.jobs'),
        outputPath: 'jobs',
        parameters: {
          jobs: this.__input.jobs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeJobs.jobs', props);
    return resource.getResponseField('jobs') as unknown as shapes.BatchJobDetail[];
  }

}

export class BatchResponsesListJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BatchListJobsRequest) {
  }

  public get jobSummaryList(): shapes.BatchJobSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobs',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.ListJobs.jobSummaryList'),
        outputPath: 'jobSummaryList',
        parameters: {
          jobQueue: this.__input.jobQueue,
          arrayJobId: this.__input.arrayJobId,
          multiNodeJobId: this.__input.multiNodeJobId,
          jobStatus: this.__input.jobStatus,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobs.jobSummaryList', props);
    return resource.getResponseField('jobSummaryList') as unknown as shapes.BatchJobSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listJobs',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.ListJobs.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          jobQueue: this.__input.jobQueue,
          arrayJobId: this.__input.arrayJobId,
          multiNodeJobId: this.__input.multiNodeJobId,
          jobStatus: this.__input.jobStatus,
          maxResults: this.__input.maxResults,
          nextToken: this.__input.nextToken,
          filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListJobs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class BatchResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BatchListTagsForResourceRequest) {
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.ListTagsForResource.tags'),
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

export class BatchResponsesRegisterJobDefinition {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BatchRegisterJobDefinitionRequest) {
  }

  public get jobDefinitionName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerJobDefinition',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.RegisterJobDefinition.jobDefinitionName'),
        outputPath: 'jobDefinitionName',
        parameters: {
          jobDefinitionName: this.__input.jobDefinitionName,
          type: this.__input.type,
          parameters: this.__input.parameters,
          containerProperties: {
            image: this.__input.containerProperties?.image,
            vcpus: this.__input.containerProperties?.vcpus,
            memory: this.__input.containerProperties?.memory,
            command: this.__input.containerProperties?.command,
            jobRoleArn: this.__input.containerProperties?.jobRoleArn,
            executionRoleArn: this.__input.containerProperties?.executionRoleArn,
            volumes: this.__input.containerProperties?.volumes,
            environment: this.__input.containerProperties?.environment,
            mountPoints: this.__input.containerProperties?.mountPoints,
            readonlyRootFilesystem: this.__input.containerProperties?.readonlyRootFilesystem,
            privileged: this.__input.containerProperties?.privileged,
            ulimits: this.__input.containerProperties?.ulimits,
            user: this.__input.containerProperties?.user,
            instanceType: this.__input.containerProperties?.instanceType,
            resourceRequirements: this.__input.containerProperties?.resourceRequirements,
            linuxParameters: {
              devices: this.__input.containerProperties?.linuxParameters?.devices,
              initProcessEnabled: this.__input.containerProperties?.linuxParameters?.initProcessEnabled,
              sharedMemorySize: this.__input.containerProperties?.linuxParameters?.sharedMemorySize,
              tmpfs: this.__input.containerProperties?.linuxParameters?.tmpfs,
              maxSwap: this.__input.containerProperties?.linuxParameters?.maxSwap,
              swappiness: this.__input.containerProperties?.linuxParameters?.swappiness,
            },
            logConfiguration: {
              logDriver: this.__input.containerProperties?.logConfiguration?.logDriver,
              options: this.__input.containerProperties?.logConfiguration?.options,
              secretOptions: this.__input.containerProperties?.logConfiguration?.secretOptions,
            },
            secrets: this.__input.containerProperties?.secrets,
            networkConfiguration: {
              assignPublicIp: this.__input.containerProperties?.networkConfiguration?.assignPublicIp,
            },
            fargatePlatformConfiguration: {
              platformVersion: this.__input.containerProperties?.fargatePlatformConfiguration?.platformVersion,
            },
          },
          nodeProperties: {
            numNodes: this.__input.nodeProperties?.numNodes,
            mainNode: this.__input.nodeProperties?.mainNode,
            nodeRangeProperties: this.__input.nodeProperties?.nodeRangeProperties,
          },
          retryStrategy: {
            attempts: this.__input.retryStrategy?.attempts,
            evaluateOnExit: this.__input.retryStrategy?.evaluateOnExit,
          },
          propagateTags: this.__input.propagateTags,
          timeout: {
            attemptDurationSeconds: this.__input.timeout?.attemptDurationSeconds,
          },
          tags: this.__input.tags,
          platformCapabilities: this.__input.platformCapabilities,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterJobDefinition.jobDefinitionName', props);
    return resource.getResponseField('jobDefinitionName') as unknown as string;
  }

  public get jobDefinitionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerJobDefinition',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.RegisterJobDefinition.jobDefinitionArn'),
        outputPath: 'jobDefinitionArn',
        parameters: {
          jobDefinitionName: this.__input.jobDefinitionName,
          type: this.__input.type,
          parameters: this.__input.parameters,
          containerProperties: {
            image: this.__input.containerProperties?.image,
            vcpus: this.__input.containerProperties?.vcpus,
            memory: this.__input.containerProperties?.memory,
            command: this.__input.containerProperties?.command,
            jobRoleArn: this.__input.containerProperties?.jobRoleArn,
            executionRoleArn: this.__input.containerProperties?.executionRoleArn,
            volumes: this.__input.containerProperties?.volumes,
            environment: this.__input.containerProperties?.environment,
            mountPoints: this.__input.containerProperties?.mountPoints,
            readonlyRootFilesystem: this.__input.containerProperties?.readonlyRootFilesystem,
            privileged: this.__input.containerProperties?.privileged,
            ulimits: this.__input.containerProperties?.ulimits,
            user: this.__input.containerProperties?.user,
            instanceType: this.__input.containerProperties?.instanceType,
            resourceRequirements: this.__input.containerProperties?.resourceRequirements,
            linuxParameters: {
              devices: this.__input.containerProperties?.linuxParameters?.devices,
              initProcessEnabled: this.__input.containerProperties?.linuxParameters?.initProcessEnabled,
              sharedMemorySize: this.__input.containerProperties?.linuxParameters?.sharedMemorySize,
              tmpfs: this.__input.containerProperties?.linuxParameters?.tmpfs,
              maxSwap: this.__input.containerProperties?.linuxParameters?.maxSwap,
              swappiness: this.__input.containerProperties?.linuxParameters?.swappiness,
            },
            logConfiguration: {
              logDriver: this.__input.containerProperties?.logConfiguration?.logDriver,
              options: this.__input.containerProperties?.logConfiguration?.options,
              secretOptions: this.__input.containerProperties?.logConfiguration?.secretOptions,
            },
            secrets: this.__input.containerProperties?.secrets,
            networkConfiguration: {
              assignPublicIp: this.__input.containerProperties?.networkConfiguration?.assignPublicIp,
            },
            fargatePlatformConfiguration: {
              platformVersion: this.__input.containerProperties?.fargatePlatformConfiguration?.platformVersion,
            },
          },
          nodeProperties: {
            numNodes: this.__input.nodeProperties?.numNodes,
            mainNode: this.__input.nodeProperties?.mainNode,
            nodeRangeProperties: this.__input.nodeProperties?.nodeRangeProperties,
          },
          retryStrategy: {
            attempts: this.__input.retryStrategy?.attempts,
            evaluateOnExit: this.__input.retryStrategy?.evaluateOnExit,
          },
          propagateTags: this.__input.propagateTags,
          timeout: {
            attemptDurationSeconds: this.__input.timeout?.attemptDurationSeconds,
          },
          tags: this.__input.tags,
          platformCapabilities: this.__input.platformCapabilities,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterJobDefinition.jobDefinitionArn', props);
    return resource.getResponseField('jobDefinitionArn') as unknown as string;
  }

  public get revision(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerJobDefinition',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.RegisterJobDefinition.revision'),
        outputPath: 'revision',
        parameters: {
          jobDefinitionName: this.__input.jobDefinitionName,
          type: this.__input.type,
          parameters: this.__input.parameters,
          containerProperties: {
            image: this.__input.containerProperties?.image,
            vcpus: this.__input.containerProperties?.vcpus,
            memory: this.__input.containerProperties?.memory,
            command: this.__input.containerProperties?.command,
            jobRoleArn: this.__input.containerProperties?.jobRoleArn,
            executionRoleArn: this.__input.containerProperties?.executionRoleArn,
            volumes: this.__input.containerProperties?.volumes,
            environment: this.__input.containerProperties?.environment,
            mountPoints: this.__input.containerProperties?.mountPoints,
            readonlyRootFilesystem: this.__input.containerProperties?.readonlyRootFilesystem,
            privileged: this.__input.containerProperties?.privileged,
            ulimits: this.__input.containerProperties?.ulimits,
            user: this.__input.containerProperties?.user,
            instanceType: this.__input.containerProperties?.instanceType,
            resourceRequirements: this.__input.containerProperties?.resourceRequirements,
            linuxParameters: {
              devices: this.__input.containerProperties?.linuxParameters?.devices,
              initProcessEnabled: this.__input.containerProperties?.linuxParameters?.initProcessEnabled,
              sharedMemorySize: this.__input.containerProperties?.linuxParameters?.sharedMemorySize,
              tmpfs: this.__input.containerProperties?.linuxParameters?.tmpfs,
              maxSwap: this.__input.containerProperties?.linuxParameters?.maxSwap,
              swappiness: this.__input.containerProperties?.linuxParameters?.swappiness,
            },
            logConfiguration: {
              logDriver: this.__input.containerProperties?.logConfiguration?.logDriver,
              options: this.__input.containerProperties?.logConfiguration?.options,
              secretOptions: this.__input.containerProperties?.logConfiguration?.secretOptions,
            },
            secrets: this.__input.containerProperties?.secrets,
            networkConfiguration: {
              assignPublicIp: this.__input.containerProperties?.networkConfiguration?.assignPublicIp,
            },
            fargatePlatformConfiguration: {
              platformVersion: this.__input.containerProperties?.fargatePlatformConfiguration?.platformVersion,
            },
          },
          nodeProperties: {
            numNodes: this.__input.nodeProperties?.numNodes,
            mainNode: this.__input.nodeProperties?.mainNode,
            nodeRangeProperties: this.__input.nodeProperties?.nodeRangeProperties,
          },
          retryStrategy: {
            attempts: this.__input.retryStrategy?.attempts,
            evaluateOnExit: this.__input.retryStrategy?.evaluateOnExit,
          },
          propagateTags: this.__input.propagateTags,
          timeout: {
            attemptDurationSeconds: this.__input.timeout?.attemptDurationSeconds,
          },
          tags: this.__input.tags,
          platformCapabilities: this.__input.platformCapabilities,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterJobDefinition.revision', props);
    return resource.getResponseField('revision') as unknown as number;
  }

}

export class BatchResponsesSubmitJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BatchSubmitJobRequest) {
  }

  public get jobArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'submitJob',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.SubmitJob.jobArn'),
        outputPath: 'jobArn',
        parameters: {
          jobName: this.__input.jobName,
          jobQueue: this.__input.jobQueue,
          arrayProperties: {
            size: this.__input.arrayProperties?.size,
          },
          dependsOn: this.__input.dependsOn,
          jobDefinition: this.__input.jobDefinition,
          parameters: this.__input.parameters,
          containerOverrides: {
            vcpus: this.__input.containerOverrides?.vcpus,
            memory: this.__input.containerOverrides?.memory,
            command: this.__input.containerOverrides?.command,
            instanceType: this.__input.containerOverrides?.instanceType,
            environment: this.__input.containerOverrides?.environment,
            resourceRequirements: this.__input.containerOverrides?.resourceRequirements,
          },
          nodeOverrides: {
            numNodes: this.__input.nodeOverrides?.numNodes,
            nodePropertyOverrides: this.__input.nodeOverrides?.nodePropertyOverrides,
          },
          retryStrategy: {
            attempts: this.__input.retryStrategy?.attempts,
            evaluateOnExit: this.__input.retryStrategy?.evaluateOnExit,
          },
          propagateTags: this.__input.propagateTags,
          timeout: {
            attemptDurationSeconds: this.__input.timeout?.attemptDurationSeconds,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SubmitJob.jobArn', props);
    return resource.getResponseField('jobArn') as unknown as string;
  }

  public get jobName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'submitJob',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.SubmitJob.jobName'),
        outputPath: 'jobName',
        parameters: {
          jobName: this.__input.jobName,
          jobQueue: this.__input.jobQueue,
          arrayProperties: {
            size: this.__input.arrayProperties?.size,
          },
          dependsOn: this.__input.dependsOn,
          jobDefinition: this.__input.jobDefinition,
          parameters: this.__input.parameters,
          containerOverrides: {
            vcpus: this.__input.containerOverrides?.vcpus,
            memory: this.__input.containerOverrides?.memory,
            command: this.__input.containerOverrides?.command,
            instanceType: this.__input.containerOverrides?.instanceType,
            environment: this.__input.containerOverrides?.environment,
            resourceRequirements: this.__input.containerOverrides?.resourceRequirements,
          },
          nodeOverrides: {
            numNodes: this.__input.nodeOverrides?.numNodes,
            nodePropertyOverrides: this.__input.nodeOverrides?.nodePropertyOverrides,
          },
          retryStrategy: {
            attempts: this.__input.retryStrategy?.attempts,
            evaluateOnExit: this.__input.retryStrategy?.evaluateOnExit,
          },
          propagateTags: this.__input.propagateTags,
          timeout: {
            attemptDurationSeconds: this.__input.timeout?.attemptDurationSeconds,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SubmitJob.jobName', props);
    return resource.getResponseField('jobName') as unknown as string;
  }

  public get jobId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'submitJob',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.SubmitJob.jobId'),
        outputPath: 'jobId',
        parameters: {
          jobName: this.__input.jobName,
          jobQueue: this.__input.jobQueue,
          arrayProperties: {
            size: this.__input.arrayProperties?.size,
          },
          dependsOn: this.__input.dependsOn,
          jobDefinition: this.__input.jobDefinition,
          parameters: this.__input.parameters,
          containerOverrides: {
            vcpus: this.__input.containerOverrides?.vcpus,
            memory: this.__input.containerOverrides?.memory,
            command: this.__input.containerOverrides?.command,
            instanceType: this.__input.containerOverrides?.instanceType,
            environment: this.__input.containerOverrides?.environment,
            resourceRequirements: this.__input.containerOverrides?.resourceRequirements,
          },
          nodeOverrides: {
            numNodes: this.__input.nodeOverrides?.numNodes,
            nodePropertyOverrides: this.__input.nodeOverrides?.nodePropertyOverrides,
          },
          retryStrategy: {
            attempts: this.__input.retryStrategy?.attempts,
            evaluateOnExit: this.__input.retryStrategy?.evaluateOnExit,
          },
          propagateTags: this.__input.propagateTags,
          timeout: {
            attemptDurationSeconds: this.__input.timeout?.attemptDurationSeconds,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SubmitJob.jobId', props);
    return resource.getResponseField('jobId') as unknown as string;
  }

}

export class BatchResponsesUpdateComputeEnvironment {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BatchUpdateComputeEnvironmentRequest) {
  }

  public get computeEnvironmentName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateComputeEnvironment',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.UpdateComputeEnvironment.computeEnvironmentName'),
        outputPath: 'computeEnvironmentName',
        parameters: {
          computeEnvironment: this.__input.computeEnvironment,
          state: this.__input.state,
          computeResources: {
            minvCpus: this.__input.computeResources?.minvCpus,
            maxvCpus: this.__input.computeResources?.maxvCpus,
            desiredvCpus: this.__input.computeResources?.desiredvCpus,
            subnets: this.__input.computeResources?.subnets,
            securityGroupIds: this.__input.computeResources?.securityGroupIds,
          },
          serviceRole: this.__input.serviceRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateComputeEnvironment.computeEnvironmentName', props);
    return resource.getResponseField('computeEnvironmentName') as unknown as string;
  }

  public get computeEnvironmentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateComputeEnvironment',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.UpdateComputeEnvironment.computeEnvironmentArn'),
        outputPath: 'computeEnvironmentArn',
        parameters: {
          computeEnvironment: this.__input.computeEnvironment,
          state: this.__input.state,
          computeResources: {
            minvCpus: this.__input.computeResources?.minvCpus,
            maxvCpus: this.__input.computeResources?.maxvCpus,
            desiredvCpus: this.__input.computeResources?.desiredvCpus,
            subnets: this.__input.computeResources?.subnets,
            securityGroupIds: this.__input.computeResources?.securityGroupIds,
          },
          serviceRole: this.__input.serviceRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateComputeEnvironment.computeEnvironmentArn', props);
    return resource.getResponseField('computeEnvironmentArn') as unknown as string;
  }

}

export class BatchResponsesUpdateJobQueue {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.BatchUpdateJobQueueRequest) {
  }

  public get jobQueueName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateJobQueue',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.UpdateJobQueue.jobQueueName'),
        outputPath: 'jobQueueName',
        parameters: {
          jobQueue: this.__input.jobQueue,
          state: this.__input.state,
          priority: this.__input.priority,
          computeEnvironmentOrder: this.__input.computeEnvironmentOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateJobQueue.jobQueueName', props);
    return resource.getResponseField('jobQueueName') as unknown as string;
  }

  public get jobQueueArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateJobQueue',
        service: 'Batch',
        physicalResourceId: cr.PhysicalResourceId.of('Batch.UpdateJobQueue.jobQueueArn'),
        outputPath: 'jobQueueArn',
        parameters: {
          jobQueue: this.__input.jobQueue,
          state: this.__input.state,
          priority: this.__input.priority,
          computeEnvironmentOrder: this.__input.computeEnvironmentOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateJobQueue.jobQueueArn', props);
    return resource.getResponseField('jobQueueArn') as unknown as string;
  }

}

