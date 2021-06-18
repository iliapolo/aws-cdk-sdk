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

  public createComputeEnvironment(input: shapes.BatchCreateComputeEnvironmentRequest): BatchCreateComputeEnvironment {
    return new BatchCreateComputeEnvironment(this, 'CreateComputeEnvironment', this.__resources, input);
  }

  public createJobQueue(input: shapes.BatchCreateJobQueueRequest): BatchCreateJobQueue {
    return new BatchCreateJobQueue(this, 'CreateJobQueue', this.__resources, input);
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

  public describeComputeEnvironments(input: shapes.BatchDescribeComputeEnvironmentsRequest): BatchDescribeComputeEnvironments {
    return new BatchDescribeComputeEnvironments(this, 'DescribeComputeEnvironments', this.__resources, input);
  }

  public describeJobDefinitions(input: shapes.BatchDescribeJobDefinitionsRequest): BatchDescribeJobDefinitions {
    return new BatchDescribeJobDefinitions(this, 'DescribeJobDefinitions', this.__resources, input);
  }

  public describeJobQueues(input: shapes.BatchDescribeJobQueuesRequest): BatchDescribeJobQueues {
    return new BatchDescribeJobQueues(this, 'DescribeJobQueues', this.__resources, input);
  }

  public describeJobs(input: shapes.BatchDescribeJobsRequest): BatchDescribeJobs {
    return new BatchDescribeJobs(this, 'DescribeJobs', this.__resources, input);
  }

  public listJobs(input: shapes.BatchListJobsRequest): BatchListJobs {
    return new BatchListJobs(this, 'ListJobs', this.__resources, input);
  }

  public listTagsForResource(input: shapes.BatchListTagsForResourceRequest): BatchListTagsForResource {
    return new BatchListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public registerJobDefinition(input: shapes.BatchRegisterJobDefinitionRequest): BatchRegisterJobDefinition {
    return new BatchRegisterJobDefinition(this, 'RegisterJobDefinition', this.__resources, input);
  }

  public submitJob(input: shapes.BatchSubmitJobRequest): BatchSubmitJob {
    return new BatchSubmitJob(this, 'SubmitJob', this.__resources, input);
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

  public updateComputeEnvironment(input: shapes.BatchUpdateComputeEnvironmentRequest): BatchUpdateComputeEnvironment {
    return new BatchUpdateComputeEnvironment(this, 'UpdateComputeEnvironment', this.__resources, input);
  }

  public updateJobQueue(input: shapes.BatchUpdateJobQueueRequest): BatchUpdateJobQueue {
    return new BatchUpdateJobQueue(this, 'UpdateJobQueue', this.__resources, input);
  }

}

export class BatchCreateComputeEnvironment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BatchCreateComputeEnvironmentRequest) {
    super(scope, id);
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
          computeEnvironmentName: this.input.computeEnvironmentName,
          type: this.input.type,
          state: this.input.state,
          computeResources: {
            type: this.input.computeResources?.type,
            allocationStrategy: this.input.computeResources?.allocationStrategy,
            minvCpus: this.input.computeResources?.minvCpus,
            maxvCpus: this.input.computeResources?.maxvCpus,
            desiredvCpus: this.input.computeResources?.desiredvCpus,
            instanceTypes: this.input.computeResources?.instanceTypes,
            imageId: this.input.computeResources?.imageId,
            subnets: this.input.computeResources?.subnets,
            securityGroupIds: this.input.computeResources?.securityGroupIds,
            ec2KeyPair: this.input.computeResources?.ec2KeyPair,
            instanceRole: this.input.computeResources?.instanceRole,
            tags: this.input.computeResources?.tags,
            placementGroup: this.input.computeResources?.placementGroup,
            bidPercentage: this.input.computeResources?.bidPercentage,
            spotIamFleetRole: this.input.computeResources?.spotIamFleetRole,
            launchTemplate: {
              launchTemplateId: this.input.computeResources?.launchTemplate?.launchTemplateId,
              launchTemplateName: this.input.computeResources?.launchTemplate?.launchTemplateName,
              version: this.input.computeResources?.launchTemplate?.version,
            },
            ec2Configuration: this.input.computeResources?.ec2Configuration,
          },
          serviceRole: this.input.serviceRole,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComputeEnvironment.computeEnvironmentName', props);
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
          computeEnvironmentName: this.input.computeEnvironmentName,
          type: this.input.type,
          state: this.input.state,
          computeResources: {
            type: this.input.computeResources?.type,
            allocationStrategy: this.input.computeResources?.allocationStrategy,
            minvCpus: this.input.computeResources?.minvCpus,
            maxvCpus: this.input.computeResources?.maxvCpus,
            desiredvCpus: this.input.computeResources?.desiredvCpus,
            instanceTypes: this.input.computeResources?.instanceTypes,
            imageId: this.input.computeResources?.imageId,
            subnets: this.input.computeResources?.subnets,
            securityGroupIds: this.input.computeResources?.securityGroupIds,
            ec2KeyPair: this.input.computeResources?.ec2KeyPair,
            instanceRole: this.input.computeResources?.instanceRole,
            tags: this.input.computeResources?.tags,
            placementGroup: this.input.computeResources?.placementGroup,
            bidPercentage: this.input.computeResources?.bidPercentage,
            spotIamFleetRole: this.input.computeResources?.spotIamFleetRole,
            launchTemplate: {
              launchTemplateId: this.input.computeResources?.launchTemplate?.launchTemplateId,
              launchTemplateName: this.input.computeResources?.launchTemplate?.launchTemplateName,
              version: this.input.computeResources?.launchTemplate?.version,
            },
            ec2Configuration: this.input.computeResources?.ec2Configuration,
          },
          serviceRole: this.input.serviceRole,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateComputeEnvironment.computeEnvironmentArn', props);
    return resource.getResponseField('computeEnvironmentArn') as unknown as string;
  }

}

export class BatchCreateJobQueue extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BatchCreateJobQueueRequest) {
    super(scope, id);
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
          jobQueueName: this.input.jobQueueName,
          state: this.input.state,
          priority: this.input.priority,
          computeEnvironmentOrder: this.input.computeEnvironmentOrder,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJobQueue.jobQueueName', props);
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
          jobQueueName: this.input.jobQueueName,
          state: this.input.state,
          priority: this.input.priority,
          computeEnvironmentOrder: this.input.computeEnvironmentOrder,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateJobQueue.jobQueueArn', props);
    return resource.getResponseField('jobQueueArn') as unknown as string;
  }

}

export class BatchDescribeComputeEnvironments extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BatchDescribeComputeEnvironmentsRequest) {
    super(scope, id);
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
          computeEnvironments: this.input.computeEnvironments,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeComputeEnvironments.computeEnvironments', props);
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
          computeEnvironments: this.input.computeEnvironments,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeComputeEnvironments.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class BatchDescribeJobDefinitions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BatchDescribeJobDefinitionsRequest) {
    super(scope, id);
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
          jobDefinitions: this.input.jobDefinitions,
          maxResults: this.input.maxResults,
          jobDefinitionName: this.input.jobDefinitionName,
          status: this.input.status,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJobDefinitions.jobDefinitions', props);
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
          jobDefinitions: this.input.jobDefinitions,
          maxResults: this.input.maxResults,
          jobDefinitionName: this.input.jobDefinitionName,
          status: this.input.status,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJobDefinitions.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class BatchDescribeJobQueues extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BatchDescribeJobQueuesRequest) {
    super(scope, id);
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
          jobQueues: this.input.jobQueues,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJobQueues.jobQueues', props);
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
          jobQueues: this.input.jobQueues,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJobQueues.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class BatchDescribeJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BatchDescribeJobsRequest) {
    super(scope, id);
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
          jobs: this.input.jobs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeJobs.jobs', props);
    return resource.getResponseField('jobs') as unknown as shapes.BatchJobDetail[];
  }

}

export class BatchListJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BatchListJobsRequest) {
    super(scope, id);
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
          jobQueue: this.input.jobQueue,
          arrayJobId: this.input.arrayJobId,
          multiNodeJobId: this.input.multiNodeJobId,
          jobStatus: this.input.jobStatus,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobs.jobSummaryList', props);
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
          jobQueue: this.input.jobQueue,
          arrayJobId: this.input.arrayJobId,
          multiNodeJobId: this.input.multiNodeJobId,
          jobStatus: this.input.jobStatus,
          maxResults: this.input.maxResults,
          nextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListJobs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class BatchListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BatchListTagsForResourceRequest) {
    super(scope, id);
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
          resourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class BatchRegisterJobDefinition extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BatchRegisterJobDefinitionRequest) {
    super(scope, id);
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
          jobDefinitionName: this.input.jobDefinitionName,
          type: this.input.type,
          parameters: this.input.parameters,
          containerProperties: {
            image: this.input.containerProperties?.image,
            vcpus: this.input.containerProperties?.vcpus,
            memory: this.input.containerProperties?.memory,
            command: this.input.containerProperties?.command,
            jobRoleArn: this.input.containerProperties?.jobRoleArn,
            executionRoleArn: this.input.containerProperties?.executionRoleArn,
            volumes: this.input.containerProperties?.volumes,
            environment: this.input.containerProperties?.environment,
            mountPoints: this.input.containerProperties?.mountPoints,
            readonlyRootFilesystem: this.input.containerProperties?.readonlyRootFilesystem,
            privileged: this.input.containerProperties?.privileged,
            ulimits: this.input.containerProperties?.ulimits,
            user: this.input.containerProperties?.user,
            instanceType: this.input.containerProperties?.instanceType,
            resourceRequirements: this.input.containerProperties?.resourceRequirements,
            linuxParameters: {
              devices: this.input.containerProperties?.linuxParameters?.devices,
              initProcessEnabled: this.input.containerProperties?.linuxParameters?.initProcessEnabled,
              sharedMemorySize: this.input.containerProperties?.linuxParameters?.sharedMemorySize,
              tmpfs: this.input.containerProperties?.linuxParameters?.tmpfs,
              maxSwap: this.input.containerProperties?.linuxParameters?.maxSwap,
              swappiness: this.input.containerProperties?.linuxParameters?.swappiness,
            },
            logConfiguration: {
              logDriver: this.input.containerProperties?.logConfiguration?.logDriver,
              options: this.input.containerProperties?.logConfiguration?.options,
              secretOptions: this.input.containerProperties?.logConfiguration?.secretOptions,
            },
            secrets: this.input.containerProperties?.secrets,
          },
          nodeProperties: {
            numNodes: this.input.nodeProperties?.numNodes,
            mainNode: this.input.nodeProperties?.mainNode,
            nodeRangeProperties: this.input.nodeProperties?.nodeRangeProperties,
          },
          retryStrategy: {
            attempts: this.input.retryStrategy?.attempts,
            evaluateOnExit: this.input.retryStrategy?.evaluateOnExit,
          },
          timeout: {
            attemptDurationSeconds: this.input.timeout?.attemptDurationSeconds,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterJobDefinition.jobDefinitionName', props);
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
          jobDefinitionName: this.input.jobDefinitionName,
          type: this.input.type,
          parameters: this.input.parameters,
          containerProperties: {
            image: this.input.containerProperties?.image,
            vcpus: this.input.containerProperties?.vcpus,
            memory: this.input.containerProperties?.memory,
            command: this.input.containerProperties?.command,
            jobRoleArn: this.input.containerProperties?.jobRoleArn,
            executionRoleArn: this.input.containerProperties?.executionRoleArn,
            volumes: this.input.containerProperties?.volumes,
            environment: this.input.containerProperties?.environment,
            mountPoints: this.input.containerProperties?.mountPoints,
            readonlyRootFilesystem: this.input.containerProperties?.readonlyRootFilesystem,
            privileged: this.input.containerProperties?.privileged,
            ulimits: this.input.containerProperties?.ulimits,
            user: this.input.containerProperties?.user,
            instanceType: this.input.containerProperties?.instanceType,
            resourceRequirements: this.input.containerProperties?.resourceRequirements,
            linuxParameters: {
              devices: this.input.containerProperties?.linuxParameters?.devices,
              initProcessEnabled: this.input.containerProperties?.linuxParameters?.initProcessEnabled,
              sharedMemorySize: this.input.containerProperties?.linuxParameters?.sharedMemorySize,
              tmpfs: this.input.containerProperties?.linuxParameters?.tmpfs,
              maxSwap: this.input.containerProperties?.linuxParameters?.maxSwap,
              swappiness: this.input.containerProperties?.linuxParameters?.swappiness,
            },
            logConfiguration: {
              logDriver: this.input.containerProperties?.logConfiguration?.logDriver,
              options: this.input.containerProperties?.logConfiguration?.options,
              secretOptions: this.input.containerProperties?.logConfiguration?.secretOptions,
            },
            secrets: this.input.containerProperties?.secrets,
          },
          nodeProperties: {
            numNodes: this.input.nodeProperties?.numNodes,
            mainNode: this.input.nodeProperties?.mainNode,
            nodeRangeProperties: this.input.nodeProperties?.nodeRangeProperties,
          },
          retryStrategy: {
            attempts: this.input.retryStrategy?.attempts,
            evaluateOnExit: this.input.retryStrategy?.evaluateOnExit,
          },
          timeout: {
            attemptDurationSeconds: this.input.timeout?.attemptDurationSeconds,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterJobDefinition.jobDefinitionArn', props);
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
          jobDefinitionName: this.input.jobDefinitionName,
          type: this.input.type,
          parameters: this.input.parameters,
          containerProperties: {
            image: this.input.containerProperties?.image,
            vcpus: this.input.containerProperties?.vcpus,
            memory: this.input.containerProperties?.memory,
            command: this.input.containerProperties?.command,
            jobRoleArn: this.input.containerProperties?.jobRoleArn,
            executionRoleArn: this.input.containerProperties?.executionRoleArn,
            volumes: this.input.containerProperties?.volumes,
            environment: this.input.containerProperties?.environment,
            mountPoints: this.input.containerProperties?.mountPoints,
            readonlyRootFilesystem: this.input.containerProperties?.readonlyRootFilesystem,
            privileged: this.input.containerProperties?.privileged,
            ulimits: this.input.containerProperties?.ulimits,
            user: this.input.containerProperties?.user,
            instanceType: this.input.containerProperties?.instanceType,
            resourceRequirements: this.input.containerProperties?.resourceRequirements,
            linuxParameters: {
              devices: this.input.containerProperties?.linuxParameters?.devices,
              initProcessEnabled: this.input.containerProperties?.linuxParameters?.initProcessEnabled,
              sharedMemorySize: this.input.containerProperties?.linuxParameters?.sharedMemorySize,
              tmpfs: this.input.containerProperties?.linuxParameters?.tmpfs,
              maxSwap: this.input.containerProperties?.linuxParameters?.maxSwap,
              swappiness: this.input.containerProperties?.linuxParameters?.swappiness,
            },
            logConfiguration: {
              logDriver: this.input.containerProperties?.logConfiguration?.logDriver,
              options: this.input.containerProperties?.logConfiguration?.options,
              secretOptions: this.input.containerProperties?.logConfiguration?.secretOptions,
            },
            secrets: this.input.containerProperties?.secrets,
          },
          nodeProperties: {
            numNodes: this.input.nodeProperties?.numNodes,
            mainNode: this.input.nodeProperties?.mainNode,
            nodeRangeProperties: this.input.nodeProperties?.nodeRangeProperties,
          },
          retryStrategy: {
            attempts: this.input.retryStrategy?.attempts,
            evaluateOnExit: this.input.retryStrategy?.evaluateOnExit,
          },
          timeout: {
            attemptDurationSeconds: this.input.timeout?.attemptDurationSeconds,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterJobDefinition.revision', props);
    return resource.getResponseField('revision') as unknown as number;
  }

}

export class BatchSubmitJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BatchSubmitJobRequest) {
    super(scope, id);
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
          jobName: this.input.jobName,
          jobQueue: this.input.jobQueue,
          arrayProperties: {
            size: this.input.arrayProperties?.size,
          },
          dependsOn: this.input.dependsOn,
          jobDefinition: this.input.jobDefinition,
          parameters: this.input.parameters,
          containerOverrides: {
            vcpus: this.input.containerOverrides?.vcpus,
            memory: this.input.containerOverrides?.memory,
            command: this.input.containerOverrides?.command,
            instanceType: this.input.containerOverrides?.instanceType,
            environment: this.input.containerOverrides?.environment,
            resourceRequirements: this.input.containerOverrides?.resourceRequirements,
          },
          nodeOverrides: {
            numNodes: this.input.nodeOverrides?.numNodes,
            nodePropertyOverrides: this.input.nodeOverrides?.nodePropertyOverrides,
          },
          retryStrategy: {
            attempts: this.input.retryStrategy?.attempts,
            evaluateOnExit: this.input.retryStrategy?.evaluateOnExit,
          },
          timeout: {
            attemptDurationSeconds: this.input.timeout?.attemptDurationSeconds,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SubmitJob.jobArn', props);
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
          jobName: this.input.jobName,
          jobQueue: this.input.jobQueue,
          arrayProperties: {
            size: this.input.arrayProperties?.size,
          },
          dependsOn: this.input.dependsOn,
          jobDefinition: this.input.jobDefinition,
          parameters: this.input.parameters,
          containerOverrides: {
            vcpus: this.input.containerOverrides?.vcpus,
            memory: this.input.containerOverrides?.memory,
            command: this.input.containerOverrides?.command,
            instanceType: this.input.containerOverrides?.instanceType,
            environment: this.input.containerOverrides?.environment,
            resourceRequirements: this.input.containerOverrides?.resourceRequirements,
          },
          nodeOverrides: {
            numNodes: this.input.nodeOverrides?.numNodes,
            nodePropertyOverrides: this.input.nodeOverrides?.nodePropertyOverrides,
          },
          retryStrategy: {
            attempts: this.input.retryStrategy?.attempts,
            evaluateOnExit: this.input.retryStrategy?.evaluateOnExit,
          },
          timeout: {
            attemptDurationSeconds: this.input.timeout?.attemptDurationSeconds,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SubmitJob.jobName', props);
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
          jobName: this.input.jobName,
          jobQueue: this.input.jobQueue,
          arrayProperties: {
            size: this.input.arrayProperties?.size,
          },
          dependsOn: this.input.dependsOn,
          jobDefinition: this.input.jobDefinition,
          parameters: this.input.parameters,
          containerOverrides: {
            vcpus: this.input.containerOverrides?.vcpus,
            memory: this.input.containerOverrides?.memory,
            command: this.input.containerOverrides?.command,
            instanceType: this.input.containerOverrides?.instanceType,
            environment: this.input.containerOverrides?.environment,
            resourceRequirements: this.input.containerOverrides?.resourceRequirements,
          },
          nodeOverrides: {
            numNodes: this.input.nodeOverrides?.numNodes,
            nodePropertyOverrides: this.input.nodeOverrides?.nodePropertyOverrides,
          },
          retryStrategy: {
            attempts: this.input.retryStrategy?.attempts,
            evaluateOnExit: this.input.retryStrategy?.evaluateOnExit,
          },
          timeout: {
            attemptDurationSeconds: this.input.timeout?.attemptDurationSeconds,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SubmitJob.jobId', props);
    return resource.getResponseField('jobId') as unknown as string;
  }

}

export class BatchUpdateComputeEnvironment extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BatchUpdateComputeEnvironmentRequest) {
    super(scope, id);
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
          computeEnvironment: this.input.computeEnvironment,
          state: this.input.state,
          computeResources: {
            minvCpus: this.input.computeResources?.minvCpus,
            maxvCpus: this.input.computeResources?.maxvCpus,
            desiredvCpus: this.input.computeResources?.desiredvCpus,
          },
          serviceRole: this.input.serviceRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateComputeEnvironment.computeEnvironmentName', props);
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
          computeEnvironment: this.input.computeEnvironment,
          state: this.input.state,
          computeResources: {
            minvCpus: this.input.computeResources?.minvCpus,
            maxvCpus: this.input.computeResources?.maxvCpus,
            desiredvCpus: this.input.computeResources?.desiredvCpus,
          },
          serviceRole: this.input.serviceRole,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateComputeEnvironment.computeEnvironmentArn', props);
    return resource.getResponseField('computeEnvironmentArn') as unknown as string;
  }

}

export class BatchUpdateJobQueue extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.BatchUpdateJobQueueRequest) {
    super(scope, id);
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
          jobQueue: this.input.jobQueue,
          state: this.input.state,
          priority: this.input.priority,
          computeEnvironmentOrder: this.input.computeEnvironmentOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateJobQueue.jobQueueName', props);
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
          jobQueue: this.input.jobQueue,
          state: this.input.state,
          priority: this.input.priority,
          computeEnvironmentOrder: this.input.computeEnvironmentOrder,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateJobQueue.jobQueueArn', props);
    return resource.getResponseField('jobQueueArn') as unknown as string;
  }

}

