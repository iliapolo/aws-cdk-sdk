import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class DataSyncClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public cancelTaskExecution(input: shapes.DataSyncCancelTaskExecutionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.CancelTaskExecution'),
        parameters: {
          TaskExecutionArn: input.taskExecutionArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CancelTaskExecution', props);
  }

  public createAgent(input: shapes.DataSyncCreateAgentRequest): DataSyncResponsesCreateAgent {
    return new DataSyncResponsesCreateAgent(this, this.__resources, input);
  }

  public createLocationEfs(input: shapes.DataSyncCreateLocationEfsRequest): DataSyncResponsesCreateLocationEfs {
    return new DataSyncResponsesCreateLocationEfs(this, this.__resources, input);
  }

  public createLocationFsxWindows(input: shapes.DataSyncCreateLocationFsxWindowsRequest): DataSyncResponsesCreateLocationFsxWindows {
    return new DataSyncResponsesCreateLocationFsxWindows(this, this.__resources, input);
  }

  public createLocationNfs(input: shapes.DataSyncCreateLocationNfsRequest): DataSyncResponsesCreateLocationNfs {
    return new DataSyncResponsesCreateLocationNfs(this, this.__resources, input);
  }

  public createLocationObjectStorage(input: shapes.DataSyncCreateLocationObjectStorageRequest): DataSyncResponsesCreateLocationObjectStorage {
    return new DataSyncResponsesCreateLocationObjectStorage(this, this.__resources, input);
  }

  public createLocationS3(input: shapes.DataSyncCreateLocationS3Request): DataSyncResponsesCreateLocationS3 {
    return new DataSyncResponsesCreateLocationS3(this, this.__resources, input);
  }

  public createLocationSmb(input: shapes.DataSyncCreateLocationSmbRequest): DataSyncResponsesCreateLocationSmb {
    return new DataSyncResponsesCreateLocationSmb(this, this.__resources, input);
  }

  public createTask(input: shapes.DataSyncCreateTaskRequest): DataSyncResponsesCreateTask {
    return new DataSyncResponsesCreateTask(this, this.__resources, input);
  }

  public deleteAgent(input: shapes.DataSyncDeleteAgentRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteAgent',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DeleteAgent'),
        parameters: {
          AgentArn: input.agentArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteAgent', props);
  }

  public deleteLocation(input: shapes.DataSyncDeleteLocationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteLocation',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DeleteLocation'),
        parameters: {
          LocationArn: input.locationArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteLocation', props);
  }

  public deleteTask(input: shapes.DataSyncDeleteTaskRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DeleteTask'),
        parameters: {
          TaskArn: input.taskArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteTask', props);
  }

  public describeAgent(input: shapes.DataSyncDescribeAgentRequest): DataSyncResponsesDescribeAgent {
    return new DataSyncResponsesDescribeAgent(this, this.__resources, input);
  }

  public describeLocationEfs(input: shapes.DataSyncDescribeLocationEfsRequest): DataSyncResponsesDescribeLocationEfs {
    return new DataSyncResponsesDescribeLocationEfs(this, this.__resources, input);
  }

  public describeLocationFsxWindows(input: shapes.DataSyncDescribeLocationFsxWindowsRequest): DataSyncResponsesDescribeLocationFsxWindows {
    return new DataSyncResponsesDescribeLocationFsxWindows(this, this.__resources, input);
  }

  public describeLocationNfs(input: shapes.DataSyncDescribeLocationNfsRequest): DataSyncResponsesDescribeLocationNfs {
    return new DataSyncResponsesDescribeLocationNfs(this, this.__resources, input);
  }

  public describeLocationObjectStorage(input: shapes.DataSyncDescribeLocationObjectStorageRequest): DataSyncResponsesDescribeLocationObjectStorage {
    return new DataSyncResponsesDescribeLocationObjectStorage(this, this.__resources, input);
  }

  public describeLocationS3(input: shapes.DataSyncDescribeLocationS3Request): DataSyncResponsesDescribeLocationS3 {
    return new DataSyncResponsesDescribeLocationS3(this, this.__resources, input);
  }

  public describeLocationSmb(input: shapes.DataSyncDescribeLocationSmbRequest): DataSyncResponsesDescribeLocationSmb {
    return new DataSyncResponsesDescribeLocationSmb(this, this.__resources, input);
  }

  public describeTask(input: shapes.DataSyncDescribeTaskRequest): DataSyncResponsesDescribeTask {
    return new DataSyncResponsesDescribeTask(this, this.__resources, input);
  }

  public describeTaskExecution(input: shapes.DataSyncDescribeTaskExecutionRequest): DataSyncResponsesDescribeTaskExecution {
    return new DataSyncResponsesDescribeTaskExecution(this, this.__resources, input);
  }

  public listAgents(input: shapes.DataSyncListAgentsRequest): DataSyncResponsesListAgents {
    return new DataSyncResponsesListAgents(this, this.__resources, input);
  }

  public listLocations(input: shapes.DataSyncListLocationsRequest): DataSyncResponsesListLocations {
    return new DataSyncResponsesListLocations(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.DataSyncListTagsForResourceRequest): DataSyncResponsesListTagsForResource {
    return new DataSyncResponsesListTagsForResource(this, this.__resources, input);
  }

  public listTaskExecutions(input: shapes.DataSyncListTaskExecutionsRequest): DataSyncResponsesListTaskExecutions {
    return new DataSyncResponsesListTaskExecutions(this, this.__resources, input);
  }

  public listTasks(input: shapes.DataSyncListTasksRequest): DataSyncResponsesListTasks {
    return new DataSyncResponsesListTasks(this, this.__resources, input);
  }

  public startTaskExecution(input: shapes.DataSyncStartTaskExecutionRequest): DataSyncResponsesStartTaskExecution {
    return new DataSyncResponsesStartTaskExecution(this, this.__resources, input);
  }

  public tagResource(input: shapes.DataSyncTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.TagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.DataSyncUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.UntagResource'),
        parameters: {
          ResourceArn: input.resourceArn,
          Keys: input.keys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateAgent(input: shapes.DataSyncUpdateAgentRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateAgent',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.UpdateAgent'),
        parameters: {
          AgentArn: input.agentArn,
          Name: input.name,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateAgent', props);
  }

  public updateTask(input: shapes.DataSyncUpdateTaskRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.UpdateTask'),
        parameters: {
          TaskArn: input.taskArn,
          Options: {
            VerifyMode: input.options?.verifyMode,
            OverwriteMode: input.options?.overwriteMode,
            Atime: input.options?.atime,
            Mtime: input.options?.mtime,
            Uid: input.options?.uid,
            Gid: input.options?.gid,
            PreserveDeletedFiles: input.options?.preserveDeletedFiles,
            PreserveDevices: input.options?.preserveDevices,
            PosixPermissions: input.options?.posixPermissions,
            BytesPerSecond: input.options?.bytesPerSecond,
            TaskQueueing: input.options?.taskQueueing,
            LogLevel: input.options?.logLevel,
            TransferMode: input.options?.transferMode,
          },
          Excludes: input.excludes,
          Schedule: {
            ScheduleExpression: input.schedule?.scheduleExpression,
          },
          Name: input.name,
          CloudWatchLogGroupArn: input.cloudWatchLogGroupArn,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateTask', props);
  }

  public updateTaskExecution(input: shapes.DataSyncUpdateTaskExecutionRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.UpdateTaskExecution'),
        parameters: {
          TaskExecutionArn: input.taskExecutionArn,
          Options: {
            VerifyMode: input.options.verifyMode,
            OverwriteMode: input.options.overwriteMode,
            Atime: input.options.atime,
            Mtime: input.options.mtime,
            Uid: input.options.uid,
            Gid: input.options.gid,
            PreserveDeletedFiles: input.options.preserveDeletedFiles,
            PreserveDevices: input.options.preserveDevices,
            PosixPermissions: input.options.posixPermissions,
            BytesPerSecond: input.options.bytesPerSecond,
            TaskQueueing: input.options.taskQueueing,
            LogLevel: input.options.logLevel,
            TransferMode: input.options.transferMode,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateTaskExecution', props);
  }

}

export class DataSyncResponsesCreateAgent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncCreateAgentRequest) {
  }

  public get agentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createAgent',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.CreateAgent.AgentArn'),
        outputPath: 'AgentArn',
        parameters: {
          ActivationKey: this.__input.activationKey,
          AgentName: this.__input.agentName,
          Tags: this.__input.tags,
          VpcEndpointId: this.__input.vpcEndpointId,
          SubnetArns: this.__input.subnetArns,
          SecurityGroupArns: this.__input.securityGroupArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateAgent.AgentArn', props);
    return resource.getResponseField('AgentArn') as unknown as string;
  }

}

export class DataSyncResponsesCreateLocationEfs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncCreateLocationEfsRequest) {
  }

  public get locationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLocationEfs',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.CreateLocationEfs.LocationArn'),
        outputPath: 'LocationArn',
        parameters: {
          Subdirectory: this.__input.subdirectory,
          EfsFilesystemArn: this.__input.efsFilesystemArn,
          Ec2Config: {
            SubnetArn: this.__input.ec2Config.subnetArn,
            SecurityGroupArns: this.__input.ec2Config.securityGroupArns,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLocationEfs.LocationArn', props);
    return resource.getResponseField('LocationArn') as unknown as string;
  }

}

export class DataSyncResponsesCreateLocationFsxWindows {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncCreateLocationFsxWindowsRequest) {
  }

  public get locationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLocationFsxWindows',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.CreateLocationFsxWindows.LocationArn'),
        outputPath: 'LocationArn',
        parameters: {
          Subdirectory: this.__input.subdirectory,
          FsxFilesystemArn: this.__input.fsxFilesystemArn,
          SecurityGroupArns: this.__input.securityGroupArns,
          Tags: this.__input.tags,
          User: this.__input.user,
          Domain: this.__input.domain,
          Password: this.__input.password,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLocationFsxWindows.LocationArn', props);
    return resource.getResponseField('LocationArn') as unknown as string;
  }

}

export class DataSyncResponsesCreateLocationNfs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncCreateLocationNfsRequest) {
  }

  public get locationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLocationNfs',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.CreateLocationNfs.LocationArn'),
        outputPath: 'LocationArn',
        parameters: {
          Subdirectory: this.__input.subdirectory,
          ServerHostname: this.__input.serverHostname,
          OnPremConfig: {
            AgentArns: this.__input.onPremConfig.agentArns,
          },
          MountOptions: {
            Version: this.__input.mountOptions?.version,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLocationNfs.LocationArn', props);
    return resource.getResponseField('LocationArn') as unknown as string;
  }

}

export class DataSyncResponsesCreateLocationObjectStorage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncCreateLocationObjectStorageRequest) {
  }

  public get locationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLocationObjectStorage',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.CreateLocationObjectStorage.LocationArn'),
        outputPath: 'LocationArn',
        parameters: {
          ServerHostname: this.__input.serverHostname,
          ServerPort: this.__input.serverPort,
          ServerProtocol: this.__input.serverProtocol,
          Subdirectory: this.__input.subdirectory,
          BucketName: this.__input.bucketName,
          AccessKey: this.__input.accessKey,
          SecretKey: this.__input.secretKey,
          AgentArns: this.__input.agentArns,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLocationObjectStorage.LocationArn', props);
    return resource.getResponseField('LocationArn') as unknown as string;
  }

}

export class DataSyncResponsesCreateLocationS3 {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncCreateLocationS3Request) {
  }

  public get locationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLocationS3',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.CreateLocationS3.LocationArn'),
        outputPath: 'LocationArn',
        parameters: {
          Subdirectory: this.__input.subdirectory,
          S3BucketArn: this.__input.s3BucketArn,
          S3StorageClass: this.__input.s3StorageClass,
          S3Config: {
            BucketAccessRoleArn: this.__input.s3Config.bucketAccessRoleArn,
          },
          AgentArns: this.__input.agentArns,
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLocationS3.LocationArn', props);
    return resource.getResponseField('LocationArn') as unknown as string;
  }

}

export class DataSyncResponsesCreateLocationSmb {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncCreateLocationSmbRequest) {
  }

  public get locationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createLocationSmb',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.CreateLocationSmb.LocationArn'),
        outputPath: 'LocationArn',
        parameters: {
          Subdirectory: this.__input.subdirectory,
          ServerHostname: this.__input.serverHostname,
          User: this.__input.user,
          Domain: this.__input.domain,
          Password: this.__input.password,
          AgentArns: this.__input.agentArns,
          MountOptions: {
            Version: this.__input.mountOptions?.version,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateLocationSmb.LocationArn', props);
    return resource.getResponseField('LocationArn') as unknown as string;
  }

}

export class DataSyncResponsesCreateTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncCreateTaskRequest) {
  }

  public get taskArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.CreateTask.TaskArn'),
        outputPath: 'TaskArn',
        parameters: {
          SourceLocationArn: this.__input.sourceLocationArn,
          DestinationLocationArn: this.__input.destinationLocationArn,
          CloudWatchLogGroupArn: this.__input.cloudWatchLogGroupArn,
          Name: this.__input.name,
          Options: {
            VerifyMode: this.__input.options?.verifyMode,
            OverwriteMode: this.__input.options?.overwriteMode,
            Atime: this.__input.options?.atime,
            Mtime: this.__input.options?.mtime,
            Uid: this.__input.options?.uid,
            Gid: this.__input.options?.gid,
            PreserveDeletedFiles: this.__input.options?.preserveDeletedFiles,
            PreserveDevices: this.__input.options?.preserveDevices,
            PosixPermissions: this.__input.options?.posixPermissions,
            BytesPerSecond: this.__input.options?.bytesPerSecond,
            TaskQueueing: this.__input.options?.taskQueueing,
            LogLevel: this.__input.options?.logLevel,
            TransferMode: this.__input.options?.transferMode,
          },
          Excludes: this.__input.excludes,
          Schedule: {
            ScheduleExpression: this.__input.schedule?.scheduleExpression,
          },
          Tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateTask.TaskArn', props);
    return resource.getResponseField('TaskArn') as unknown as string;
  }

}

export class DataSyncResponsesDescribeAgent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncDescribeAgentRequest) {
  }

  public get agentArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAgent',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeAgent.AgentArn'),
        outputPath: 'AgentArn',
        parameters: {
          AgentArn: this.__input.agentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAgent.AgentArn', props);
    return resource.getResponseField('AgentArn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAgent',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeAgent.Name'),
        outputPath: 'Name',
        parameters: {
          AgentArn: this.__input.agentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAgent.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAgent',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeAgent.Status'),
        outputPath: 'Status',
        parameters: {
          AgentArn: this.__input.agentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAgent.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get lastConnectionTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAgent',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeAgent.LastConnectionTime'),
        outputPath: 'LastConnectionTime',
        parameters: {
          AgentArn: this.__input.agentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAgent.LastConnectionTime', props);
    return resource.getResponseField('LastConnectionTime') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAgent',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeAgent.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          AgentArn: this.__input.agentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAgent.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get endpointType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAgent',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeAgent.EndpointType'),
        outputPath: 'EndpointType',
        parameters: {
          AgentArn: this.__input.agentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAgent.EndpointType', props);
    return resource.getResponseField('EndpointType') as unknown as string;
  }

  public get privateLinkConfig(): DataSyncResponsesDescribeAgentPrivateLinkConfig {
    return new DataSyncResponsesDescribeAgentPrivateLinkConfig(this.__scope, this.__resources, this.__input);
  }

}

export class DataSyncResponsesDescribeAgentPrivateLinkConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncDescribeAgentRequest) {
  }

  public get vpcEndpointId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAgent',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeAgent.PrivateLinkConfig.VpcEndpointId'),
        outputPath: 'PrivateLinkConfig.VpcEndpointId',
        parameters: {
          AgentArn: this.__input.agentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAgent.PrivateLinkConfig.VpcEndpointId', props);
    return resource.getResponseField('PrivateLinkConfig.VpcEndpointId') as unknown as string;
  }

  public get privateLinkEndpoint(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAgent',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeAgent.PrivateLinkConfig.PrivateLinkEndpoint'),
        outputPath: 'PrivateLinkConfig.PrivateLinkEndpoint',
        parameters: {
          AgentArn: this.__input.agentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAgent.PrivateLinkConfig.PrivateLinkEndpoint', props);
    return resource.getResponseField('PrivateLinkConfig.PrivateLinkEndpoint') as unknown as string;
  }

  public get subnetArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAgent',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeAgent.PrivateLinkConfig.SubnetArns'),
        outputPath: 'PrivateLinkConfig.SubnetArns',
        parameters: {
          AgentArn: this.__input.agentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAgent.PrivateLinkConfig.SubnetArns', props);
    return resource.getResponseField('PrivateLinkConfig.SubnetArns') as unknown as string[];
  }

  public get securityGroupArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeAgent',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeAgent.PrivateLinkConfig.SecurityGroupArns'),
        outputPath: 'PrivateLinkConfig.SecurityGroupArns',
        parameters: {
          AgentArn: this.__input.agentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeAgent.PrivateLinkConfig.SecurityGroupArns', props);
    return resource.getResponseField('PrivateLinkConfig.SecurityGroupArns') as unknown as string[];
  }

}

export class DataSyncResponsesDescribeLocationEfs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncDescribeLocationEfsRequest) {
  }

  public get locationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationEfs',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationEfs.LocationArn'),
        outputPath: 'LocationArn',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationEfs.LocationArn', props);
    return resource.getResponseField('LocationArn') as unknown as string;
  }

  public get locationUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationEfs',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationEfs.LocationUri'),
        outputPath: 'LocationUri',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationEfs.LocationUri', props);
    return resource.getResponseField('LocationUri') as unknown as string;
  }

  public get ec2Config(): DataSyncResponsesDescribeLocationEfsEc2Config {
    return new DataSyncResponsesDescribeLocationEfsEc2Config(this.__scope, this.__resources, this.__input);
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationEfs',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationEfs.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationEfs.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

}

export class DataSyncResponsesDescribeLocationEfsEc2Config {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncDescribeLocationEfsRequest) {
  }

  public get subnetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationEfs',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationEfs.Ec2Config.SubnetArn'),
        outputPath: 'Ec2Config.SubnetArn',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationEfs.Ec2Config.SubnetArn', props);
    return resource.getResponseField('Ec2Config.SubnetArn') as unknown as string;
  }

  public get securityGroupArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationEfs',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationEfs.Ec2Config.SecurityGroupArns'),
        outputPath: 'Ec2Config.SecurityGroupArns',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationEfs.Ec2Config.SecurityGroupArns', props);
    return resource.getResponseField('Ec2Config.SecurityGroupArns') as unknown as string[];
  }

}

export class DataSyncResponsesDescribeLocationFsxWindows {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncDescribeLocationFsxWindowsRequest) {
  }

  public get locationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationFsxWindows',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationFsxWindows.LocationArn'),
        outputPath: 'LocationArn',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationFsxWindows.LocationArn', props);
    return resource.getResponseField('LocationArn') as unknown as string;
  }

  public get locationUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationFsxWindows',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationFsxWindows.LocationUri'),
        outputPath: 'LocationUri',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationFsxWindows.LocationUri', props);
    return resource.getResponseField('LocationUri') as unknown as string;
  }

  public get securityGroupArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationFsxWindows',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationFsxWindows.SecurityGroupArns'),
        outputPath: 'SecurityGroupArns',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationFsxWindows.SecurityGroupArns', props);
    return resource.getResponseField('SecurityGroupArns') as unknown as string[];
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationFsxWindows',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationFsxWindows.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationFsxWindows.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

  public get user(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationFsxWindows',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationFsxWindows.User'),
        outputPath: 'User',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationFsxWindows.User', props);
    return resource.getResponseField('User') as unknown as string;
  }

  public get domain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationFsxWindows',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationFsxWindows.Domain'),
        outputPath: 'Domain',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationFsxWindows.Domain', props);
    return resource.getResponseField('Domain') as unknown as string;
  }

}

export class DataSyncResponsesDescribeLocationNfs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncDescribeLocationNfsRequest) {
  }

  public get locationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationNfs',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationNfs.LocationArn'),
        outputPath: 'LocationArn',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationNfs.LocationArn', props);
    return resource.getResponseField('LocationArn') as unknown as string;
  }

  public get locationUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationNfs',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationNfs.LocationUri'),
        outputPath: 'LocationUri',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationNfs.LocationUri', props);
    return resource.getResponseField('LocationUri') as unknown as string;
  }

  public get onPremConfig(): DataSyncResponsesDescribeLocationNfsOnPremConfig {
    return new DataSyncResponsesDescribeLocationNfsOnPremConfig(this.__scope, this.__resources, this.__input);
  }

  public get mountOptions(): DataSyncResponsesDescribeLocationNfsMountOptions {
    return new DataSyncResponsesDescribeLocationNfsMountOptions(this.__scope, this.__resources, this.__input);
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationNfs',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationNfs.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationNfs.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

}

export class DataSyncResponsesDescribeLocationNfsOnPremConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncDescribeLocationNfsRequest) {
  }

  public get agentArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationNfs',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationNfs.OnPremConfig.AgentArns'),
        outputPath: 'OnPremConfig.AgentArns',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationNfs.OnPremConfig.AgentArns', props);
    return resource.getResponseField('OnPremConfig.AgentArns') as unknown as string[];
  }

}

export class DataSyncResponsesDescribeLocationNfsMountOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncDescribeLocationNfsRequest) {
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationNfs',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationNfs.MountOptions.Version'),
        outputPath: 'MountOptions.Version',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationNfs.MountOptions.Version', props);
    return resource.getResponseField('MountOptions.Version') as unknown as string;
  }

}

export class DataSyncResponsesDescribeLocationObjectStorage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncDescribeLocationObjectStorageRequest) {
  }

  public get locationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationObjectStorage',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationObjectStorage.LocationArn'),
        outputPath: 'LocationArn',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationObjectStorage.LocationArn', props);
    return resource.getResponseField('LocationArn') as unknown as string;
  }

  public get locationUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationObjectStorage',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationObjectStorage.LocationUri'),
        outputPath: 'LocationUri',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationObjectStorage.LocationUri', props);
    return resource.getResponseField('LocationUri') as unknown as string;
  }

  public get accessKey(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationObjectStorage',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationObjectStorage.AccessKey'),
        outputPath: 'AccessKey',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationObjectStorage.AccessKey', props);
    return resource.getResponseField('AccessKey') as unknown as string;
  }

  public get serverPort(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationObjectStorage',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationObjectStorage.ServerPort'),
        outputPath: 'ServerPort',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationObjectStorage.ServerPort', props);
    return resource.getResponseField('ServerPort') as unknown as number;
  }

  public get serverProtocol(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationObjectStorage',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationObjectStorage.ServerProtocol'),
        outputPath: 'ServerProtocol',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationObjectStorage.ServerProtocol', props);
    return resource.getResponseField('ServerProtocol') as unknown as string;
  }

  public get agentArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationObjectStorage',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationObjectStorage.AgentArns'),
        outputPath: 'AgentArns',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationObjectStorage.AgentArns', props);
    return resource.getResponseField('AgentArns') as unknown as string[];
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationObjectStorage',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationObjectStorage.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationObjectStorage.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

}

export class DataSyncResponsesDescribeLocationS3 {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncDescribeLocationS3Request) {
  }

  public get locationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationS3',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationS3.LocationArn'),
        outputPath: 'LocationArn',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationS3.LocationArn', props);
    return resource.getResponseField('LocationArn') as unknown as string;
  }

  public get locationUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationS3',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationS3.LocationUri'),
        outputPath: 'LocationUri',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationS3.LocationUri', props);
    return resource.getResponseField('LocationUri') as unknown as string;
  }

  public get s3StorageClass(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationS3',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationS3.S3StorageClass'),
        outputPath: 'S3StorageClass',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationS3.S3StorageClass', props);
    return resource.getResponseField('S3StorageClass') as unknown as string;
  }

  public get s3Config(): DataSyncResponsesDescribeLocationS3S3Config {
    return new DataSyncResponsesDescribeLocationS3S3Config(this.__scope, this.__resources, this.__input);
  }

  public get agentArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationS3',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationS3.AgentArns'),
        outputPath: 'AgentArns',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationS3.AgentArns', props);
    return resource.getResponseField('AgentArns') as unknown as string[];
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationS3',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationS3.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationS3.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

}

export class DataSyncResponsesDescribeLocationS3S3Config {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncDescribeLocationS3Request) {
  }

  public get bucketAccessRoleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationS3',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationS3.S3Config.BucketAccessRoleArn'),
        outputPath: 'S3Config.BucketAccessRoleArn',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationS3.S3Config.BucketAccessRoleArn', props);
    return resource.getResponseField('S3Config.BucketAccessRoleArn') as unknown as string;
  }

}

export class DataSyncResponsesDescribeLocationSmb {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncDescribeLocationSmbRequest) {
  }

  public get locationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationSmb',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationSmb.LocationArn'),
        outputPath: 'LocationArn',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationSmb.LocationArn', props);
    return resource.getResponseField('LocationArn') as unknown as string;
  }

  public get locationUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationSmb',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationSmb.LocationUri'),
        outputPath: 'LocationUri',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationSmb.LocationUri', props);
    return resource.getResponseField('LocationUri') as unknown as string;
  }

  public get agentArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationSmb',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationSmb.AgentArns'),
        outputPath: 'AgentArns',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationSmb.AgentArns', props);
    return resource.getResponseField('AgentArns') as unknown as string[];
  }

  public get user(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationSmb',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationSmb.User'),
        outputPath: 'User',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationSmb.User', props);
    return resource.getResponseField('User') as unknown as string;
  }

  public get domain(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationSmb',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationSmb.Domain'),
        outputPath: 'Domain',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationSmb.Domain', props);
    return resource.getResponseField('Domain') as unknown as string;
  }

  public get mountOptions(): DataSyncResponsesDescribeLocationSmbMountOptions {
    return new DataSyncResponsesDescribeLocationSmbMountOptions(this.__scope, this.__resources, this.__input);
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationSmb',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationSmb.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationSmb.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

}

export class DataSyncResponsesDescribeLocationSmbMountOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncDescribeLocationSmbRequest) {
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLocationSmb',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeLocationSmb.MountOptions.Version'),
        outputPath: 'MountOptions.Version',
        parameters: {
          LocationArn: this.__input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLocationSmb.MountOptions.Version', props);
    return resource.getResponseField('MountOptions.Version') as unknown as string;
  }

}

export class DataSyncResponsesDescribeTask {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncDescribeTaskRequest) {
  }

  public get taskArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTask.TaskArn'),
        outputPath: 'TaskArn',
        parameters: {
          TaskArn: this.__input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTask.TaskArn', props);
    return resource.getResponseField('TaskArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTask.Status'),
        outputPath: 'Status',
        parameters: {
          TaskArn: this.__input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTask.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTask.Name'),
        outputPath: 'Name',
        parameters: {
          TaskArn: this.__input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTask.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get currentTaskExecutionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTask.CurrentTaskExecutionArn'),
        outputPath: 'CurrentTaskExecutionArn',
        parameters: {
          TaskArn: this.__input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTask.CurrentTaskExecutionArn', props);
    return resource.getResponseField('CurrentTaskExecutionArn') as unknown as string;
  }

  public get sourceLocationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTask.SourceLocationArn'),
        outputPath: 'SourceLocationArn',
        parameters: {
          TaskArn: this.__input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTask.SourceLocationArn', props);
    return resource.getResponseField('SourceLocationArn') as unknown as string;
  }

  public get destinationLocationArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTask.DestinationLocationArn'),
        outputPath: 'DestinationLocationArn',
        parameters: {
          TaskArn: this.__input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTask.DestinationLocationArn', props);
    return resource.getResponseField('DestinationLocationArn') as unknown as string;
  }

  public get cloudWatchLogGroupArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTask.CloudWatchLogGroupArn'),
        outputPath: 'CloudWatchLogGroupArn',
        parameters: {
          TaskArn: this.__input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTask.CloudWatchLogGroupArn', props);
    return resource.getResponseField('CloudWatchLogGroupArn') as unknown as string;
  }

  public get sourceNetworkInterfaceArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTask.SourceNetworkInterfaceArns'),
        outputPath: 'SourceNetworkInterfaceArns',
        parameters: {
          TaskArn: this.__input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTask.SourceNetworkInterfaceArns', props);
    return resource.getResponseField('SourceNetworkInterfaceArns') as unknown as string[];
  }

  public get destinationNetworkInterfaceArns(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTask.DestinationNetworkInterfaceArns'),
        outputPath: 'DestinationNetworkInterfaceArns',
        parameters: {
          TaskArn: this.__input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTask.DestinationNetworkInterfaceArns', props);
    return resource.getResponseField('DestinationNetworkInterfaceArns') as unknown as string[];
  }

  public get options(): DataSyncResponsesDescribeTaskOptions {
    return new DataSyncResponsesDescribeTaskOptions(this.__scope, this.__resources, this.__input);
  }

  public get excludes(): shapes.DataSyncFilterRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTask.Excludes'),
        outputPath: 'Excludes',
        parameters: {
          TaskArn: this.__input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTask.Excludes', props);
    return resource.getResponseField('Excludes') as unknown as shapes.DataSyncFilterRule[];
  }

  public get schedule(): DataSyncResponsesDescribeTaskSchedule {
    return new DataSyncResponsesDescribeTaskSchedule(this.__scope, this.__resources, this.__input);
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTask.ErrorCode'),
        outputPath: 'ErrorCode',
        parameters: {
          TaskArn: this.__input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTask.ErrorCode', props);
    return resource.getResponseField('ErrorCode') as unknown as string;
  }

  public get errorDetail(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTask.ErrorDetail'),
        outputPath: 'ErrorDetail',
        parameters: {
          TaskArn: this.__input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTask.ErrorDetail', props);
    return resource.getResponseField('ErrorDetail') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTask.CreationTime'),
        outputPath: 'CreationTime',
        parameters: {
          TaskArn: this.__input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTask.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

}

export class DataSyncResponsesDescribeTaskOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncDescribeTaskRequest) {
  }

  public get verifyMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTask.Options.VerifyMode'),
        outputPath: 'Options.VerifyMode',
        parameters: {
          TaskArn: this.__input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTask.Options.VerifyMode', props);
    return resource.getResponseField('Options.VerifyMode') as unknown as string;
  }

  public get overwriteMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTask.Options.OverwriteMode'),
        outputPath: 'Options.OverwriteMode',
        parameters: {
          TaskArn: this.__input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTask.Options.OverwriteMode', props);
    return resource.getResponseField('Options.OverwriteMode') as unknown as string;
  }

  public get atime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTask.Options.Atime'),
        outputPath: 'Options.Atime',
        parameters: {
          TaskArn: this.__input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTask.Options.Atime', props);
    return resource.getResponseField('Options.Atime') as unknown as string;
  }

  public get mtime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTask.Options.Mtime'),
        outputPath: 'Options.Mtime',
        parameters: {
          TaskArn: this.__input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTask.Options.Mtime', props);
    return resource.getResponseField('Options.Mtime') as unknown as string;
  }

  public get uid(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTask.Options.Uid'),
        outputPath: 'Options.Uid',
        parameters: {
          TaskArn: this.__input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTask.Options.Uid', props);
    return resource.getResponseField('Options.Uid') as unknown as string;
  }

  public get gid(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTask.Options.Gid'),
        outputPath: 'Options.Gid',
        parameters: {
          TaskArn: this.__input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTask.Options.Gid', props);
    return resource.getResponseField('Options.Gid') as unknown as string;
  }

  public get preserveDeletedFiles(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTask.Options.PreserveDeletedFiles'),
        outputPath: 'Options.PreserveDeletedFiles',
        parameters: {
          TaskArn: this.__input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTask.Options.PreserveDeletedFiles', props);
    return resource.getResponseField('Options.PreserveDeletedFiles') as unknown as string;
  }

  public get preserveDevices(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTask.Options.PreserveDevices'),
        outputPath: 'Options.PreserveDevices',
        parameters: {
          TaskArn: this.__input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTask.Options.PreserveDevices', props);
    return resource.getResponseField('Options.PreserveDevices') as unknown as string;
  }

  public get posixPermissions(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTask.Options.PosixPermissions'),
        outputPath: 'Options.PosixPermissions',
        parameters: {
          TaskArn: this.__input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTask.Options.PosixPermissions', props);
    return resource.getResponseField('Options.PosixPermissions') as unknown as string;
  }

  public get bytesPerSecond(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTask.Options.BytesPerSecond'),
        outputPath: 'Options.BytesPerSecond',
        parameters: {
          TaskArn: this.__input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTask.Options.BytesPerSecond', props);
    return resource.getResponseField('Options.BytesPerSecond') as unknown as number;
  }

  public get taskQueueing(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTask.Options.TaskQueueing'),
        outputPath: 'Options.TaskQueueing',
        parameters: {
          TaskArn: this.__input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTask.Options.TaskQueueing', props);
    return resource.getResponseField('Options.TaskQueueing') as unknown as string;
  }

  public get logLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTask.Options.LogLevel'),
        outputPath: 'Options.LogLevel',
        parameters: {
          TaskArn: this.__input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTask.Options.LogLevel', props);
    return resource.getResponseField('Options.LogLevel') as unknown as string;
  }

  public get transferMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTask.Options.TransferMode'),
        outputPath: 'Options.TransferMode',
        parameters: {
          TaskArn: this.__input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTask.Options.TransferMode', props);
    return resource.getResponseField('Options.TransferMode') as unknown as string;
  }

}

export class DataSyncResponsesDescribeTaskSchedule {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncDescribeTaskRequest) {
  }

  public get scheduleExpression(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTask',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTask.Schedule.ScheduleExpression'),
        outputPath: 'Schedule.ScheduleExpression',
        parameters: {
          TaskArn: this.__input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTask.Schedule.ScheduleExpression', props);
    return resource.getResponseField('Schedule.ScheduleExpression') as unknown as string;
  }

}

export class DataSyncResponsesDescribeTaskExecution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncDescribeTaskExecutionRequest) {
  }

  public get taskExecutionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.TaskExecutionArn'),
        outputPath: 'TaskExecutionArn',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.TaskExecutionArn', props);
    return resource.getResponseField('TaskExecutionArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.Status'),
        outputPath: 'Status',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get options(): DataSyncResponsesDescribeTaskExecutionOptions {
    return new DataSyncResponsesDescribeTaskExecutionOptions(this.__scope, this.__resources, this.__input);
  }

  public get excludes(): shapes.DataSyncFilterRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.Excludes'),
        outputPath: 'Excludes',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.Excludes', props);
    return resource.getResponseField('Excludes') as unknown as shapes.DataSyncFilterRule[];
  }

  public get includes(): shapes.DataSyncFilterRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.Includes'),
        outputPath: 'Includes',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.Includes', props);
    return resource.getResponseField('Includes') as unknown as shapes.DataSyncFilterRule[];
  }

  public get startTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.StartTime'),
        outputPath: 'StartTime',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.StartTime', props);
    return resource.getResponseField('StartTime') as unknown as string;
  }

  public get estimatedFilesToTransfer(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.EstimatedFilesToTransfer'),
        outputPath: 'EstimatedFilesToTransfer',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.EstimatedFilesToTransfer', props);
    return resource.getResponseField('EstimatedFilesToTransfer') as unknown as number;
  }

  public get estimatedBytesToTransfer(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.EstimatedBytesToTransfer'),
        outputPath: 'EstimatedBytesToTransfer',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.EstimatedBytesToTransfer', props);
    return resource.getResponseField('EstimatedBytesToTransfer') as unknown as number;
  }

  public get filesTransferred(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.FilesTransferred'),
        outputPath: 'FilesTransferred',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.FilesTransferred', props);
    return resource.getResponseField('FilesTransferred') as unknown as number;
  }

  public get bytesWritten(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.BytesWritten'),
        outputPath: 'BytesWritten',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.BytesWritten', props);
    return resource.getResponseField('BytesWritten') as unknown as number;
  }

  public get bytesTransferred(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.BytesTransferred'),
        outputPath: 'BytesTransferred',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.BytesTransferred', props);
    return resource.getResponseField('BytesTransferred') as unknown as number;
  }

  public get result(): DataSyncResponsesDescribeTaskExecutionResult {
    return new DataSyncResponsesDescribeTaskExecutionResult(this.__scope, this.__resources, this.__input);
  }

}

export class DataSyncResponsesDescribeTaskExecutionOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncDescribeTaskExecutionRequest) {
  }

  public get verifyMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.Options.VerifyMode'),
        outputPath: 'Options.VerifyMode',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.Options.VerifyMode', props);
    return resource.getResponseField('Options.VerifyMode') as unknown as string;
  }

  public get overwriteMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.Options.OverwriteMode'),
        outputPath: 'Options.OverwriteMode',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.Options.OverwriteMode', props);
    return resource.getResponseField('Options.OverwriteMode') as unknown as string;
  }

  public get atime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.Options.Atime'),
        outputPath: 'Options.Atime',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.Options.Atime', props);
    return resource.getResponseField('Options.Atime') as unknown as string;
  }

  public get mtime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.Options.Mtime'),
        outputPath: 'Options.Mtime',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.Options.Mtime', props);
    return resource.getResponseField('Options.Mtime') as unknown as string;
  }

  public get uid(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.Options.Uid'),
        outputPath: 'Options.Uid',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.Options.Uid', props);
    return resource.getResponseField('Options.Uid') as unknown as string;
  }

  public get gid(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.Options.Gid'),
        outputPath: 'Options.Gid',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.Options.Gid', props);
    return resource.getResponseField('Options.Gid') as unknown as string;
  }

  public get preserveDeletedFiles(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.Options.PreserveDeletedFiles'),
        outputPath: 'Options.PreserveDeletedFiles',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.Options.PreserveDeletedFiles', props);
    return resource.getResponseField('Options.PreserveDeletedFiles') as unknown as string;
  }

  public get preserveDevices(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.Options.PreserveDevices'),
        outputPath: 'Options.PreserveDevices',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.Options.PreserveDevices', props);
    return resource.getResponseField('Options.PreserveDevices') as unknown as string;
  }

  public get posixPermissions(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.Options.PosixPermissions'),
        outputPath: 'Options.PosixPermissions',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.Options.PosixPermissions', props);
    return resource.getResponseField('Options.PosixPermissions') as unknown as string;
  }

  public get bytesPerSecond(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.Options.BytesPerSecond'),
        outputPath: 'Options.BytesPerSecond',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.Options.BytesPerSecond', props);
    return resource.getResponseField('Options.BytesPerSecond') as unknown as number;
  }

  public get taskQueueing(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.Options.TaskQueueing'),
        outputPath: 'Options.TaskQueueing',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.Options.TaskQueueing', props);
    return resource.getResponseField('Options.TaskQueueing') as unknown as string;
  }

  public get logLevel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.Options.LogLevel'),
        outputPath: 'Options.LogLevel',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.Options.LogLevel', props);
    return resource.getResponseField('Options.LogLevel') as unknown as string;
  }

  public get transferMode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.Options.TransferMode'),
        outputPath: 'Options.TransferMode',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.Options.TransferMode', props);
    return resource.getResponseField('Options.TransferMode') as unknown as string;
  }

}

export class DataSyncResponsesDescribeTaskExecutionResult {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncDescribeTaskExecutionRequest) {
  }

  public get prepareDuration(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.Result.PrepareDuration'),
        outputPath: 'Result.PrepareDuration',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.Result.PrepareDuration', props);
    return resource.getResponseField('Result.PrepareDuration') as unknown as number;
  }

  public get prepareStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.Result.PrepareStatus'),
        outputPath: 'Result.PrepareStatus',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.Result.PrepareStatus', props);
    return resource.getResponseField('Result.PrepareStatus') as unknown as string;
  }

  public get totalDuration(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.Result.TotalDuration'),
        outputPath: 'Result.TotalDuration',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.Result.TotalDuration', props);
    return resource.getResponseField('Result.TotalDuration') as unknown as number;
  }

  public get transferDuration(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.Result.TransferDuration'),
        outputPath: 'Result.TransferDuration',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.Result.TransferDuration', props);
    return resource.getResponseField('Result.TransferDuration') as unknown as number;
  }

  public get transferStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.Result.TransferStatus'),
        outputPath: 'Result.TransferStatus',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.Result.TransferStatus', props);
    return resource.getResponseField('Result.TransferStatus') as unknown as string;
  }

  public get verifyDuration(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.Result.VerifyDuration'),
        outputPath: 'Result.VerifyDuration',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.Result.VerifyDuration', props);
    return resource.getResponseField('Result.VerifyDuration') as unknown as number;
  }

  public get verifyStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.Result.VerifyStatus'),
        outputPath: 'Result.VerifyStatus',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.Result.VerifyStatus', props);
    return resource.getResponseField('Result.VerifyStatus') as unknown as string;
  }

  public get errorCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.Result.ErrorCode'),
        outputPath: 'Result.ErrorCode',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.Result.ErrorCode', props);
    return resource.getResponseField('Result.ErrorCode') as unknown as string;
  }

  public get errorDetail(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.DescribeTaskExecution.Result.ErrorDetail'),
        outputPath: 'Result.ErrorDetail',
        parameters: {
          TaskExecutionArn: this.__input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTaskExecution.Result.ErrorDetail', props);
    return resource.getResponseField('Result.ErrorDetail') as unknown as string;
  }

}

export class DataSyncResponsesListAgents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncListAgentsRequest) {
  }

  public get agents(): shapes.DataSyncAgentListEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAgents',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.ListAgents.Agents'),
        outputPath: 'Agents',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAgents.Agents', props);
    return resource.getResponseField('Agents') as unknown as shapes.DataSyncAgentListEntry[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listAgents',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.ListAgents.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListAgents.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DataSyncResponsesListLocations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncListLocationsRequest) {
  }

  public get locations(): shapes.DataSyncLocationListEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLocations',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.ListLocations.Locations'),
        outputPath: 'Locations',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLocations.Locations', props);
    return resource.getResponseField('Locations') as unknown as shapes.DataSyncLocationListEntry[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listLocations',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.ListLocations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListLocations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DataSyncResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncListTagsForResourceRequest) {
  }

  public get tags(): shapes.DataSyncTagListEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.ListTagsForResource.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceArn: this.__input.resourceArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.DataSyncTagListEntry[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.ListTagsForResource.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          ResourceArn: this.__input.resourceArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DataSyncResponsesListTaskExecutions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncListTaskExecutionsRequest) {
  }

  public get taskExecutions(): shapes.DataSyncTaskExecutionListEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTaskExecutions',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.ListTaskExecutions.TaskExecutions'),
        outputPath: 'TaskExecutions',
        parameters: {
          TaskArn: this.__input.taskArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTaskExecutions.TaskExecutions', props);
    return resource.getResponseField('TaskExecutions') as unknown as shapes.DataSyncTaskExecutionListEntry[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTaskExecutions',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.ListTaskExecutions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          TaskArn: this.__input.taskArn,
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTaskExecutions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DataSyncResponsesListTasks {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncListTasksRequest) {
  }

  public get tasks(): shapes.DataSyncTaskListEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTasks',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.ListTasks.Tasks'),
        outputPath: 'Tasks',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTasks.Tasks', props);
    return resource.getResponseField('Tasks') as unknown as shapes.DataSyncTaskListEntry[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTasks',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.ListTasks.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          MaxResults: this.__input.maxResults,
          NextToken: this.__input.nextToken,
          Filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTasks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DataSyncResponsesStartTaskExecution {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.DataSyncStartTaskExecutionRequest) {
  }

  public get taskExecutionArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startTaskExecution',
        service: 'DataSync',
        physicalResourceId: cr.PhysicalResourceId.of('DataSync.StartTaskExecution.TaskExecutionArn'),
        outputPath: 'TaskExecutionArn',
        parameters: {
          TaskArn: this.__input.taskArn,
          OverrideOptions: {
            VerifyMode: this.__input.overrideOptions?.verifyMode,
            OverwriteMode: this.__input.overrideOptions?.overwriteMode,
            Atime: this.__input.overrideOptions?.atime,
            Mtime: this.__input.overrideOptions?.mtime,
            Uid: this.__input.overrideOptions?.uid,
            Gid: this.__input.overrideOptions?.gid,
            PreserveDeletedFiles: this.__input.overrideOptions?.preserveDeletedFiles,
            PreserveDevices: this.__input.overrideOptions?.preserveDevices,
            PosixPermissions: this.__input.overrideOptions?.posixPermissions,
            BytesPerSecond: this.__input.overrideOptions?.bytesPerSecond,
            TaskQueueing: this.__input.overrideOptions?.taskQueueing,
            LogLevel: this.__input.overrideOptions?.logLevel,
            TransferMode: this.__input.overrideOptions?.transferMode,
          },
          Includes: this.__input.includes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartTaskExecution.TaskExecutionArn', props);
    return resource.getResponseField('TaskExecutionArn') as unknown as string;
  }

}

