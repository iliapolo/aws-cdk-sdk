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

  public createAgent(input: shapes.DataSyncCreateAgentRequest): DataSyncCreateAgent {
    return new DataSyncCreateAgent(this, 'CreateAgent', this.__resources, input);
  }

  public createLocationEfs(input: shapes.DataSyncCreateLocationEfsRequest): DataSyncCreateLocationEfs {
    return new DataSyncCreateLocationEfs(this, 'CreateLocationEfs', this.__resources, input);
  }

  public createLocationFsxWindows(input: shapes.DataSyncCreateLocationFsxWindowsRequest): DataSyncCreateLocationFsxWindows {
    return new DataSyncCreateLocationFsxWindows(this, 'CreateLocationFsxWindows', this.__resources, input);
  }

  public createLocationNfs(input: shapes.DataSyncCreateLocationNfsRequest): DataSyncCreateLocationNfs {
    return new DataSyncCreateLocationNfs(this, 'CreateLocationNfs', this.__resources, input);
  }

  public createLocationObjectStorage(input: shapes.DataSyncCreateLocationObjectStorageRequest): DataSyncCreateLocationObjectStorage {
    return new DataSyncCreateLocationObjectStorage(this, 'CreateLocationObjectStorage', this.__resources, input);
  }

  public createLocationS3(input: shapes.DataSyncCreateLocationS3Request): DataSyncCreateLocationS3 {
    return new DataSyncCreateLocationS3(this, 'CreateLocationS3', this.__resources, input);
  }

  public createLocationSmb(input: shapes.DataSyncCreateLocationSmbRequest): DataSyncCreateLocationSmb {
    return new DataSyncCreateLocationSmb(this, 'CreateLocationSmb', this.__resources, input);
  }

  public createTask(input: shapes.DataSyncCreateTaskRequest): DataSyncCreateTask {
    return new DataSyncCreateTask(this, 'CreateTask', this.__resources, input);
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

  public describeAgent(input: shapes.DataSyncDescribeAgentRequest): DataSyncDescribeAgent {
    return new DataSyncDescribeAgent(this, 'DescribeAgent', this.__resources, input);
  }

  public describeLocationEfs(input: shapes.DataSyncDescribeLocationEfsRequest): DataSyncDescribeLocationEfs {
    return new DataSyncDescribeLocationEfs(this, 'DescribeLocationEfs', this.__resources, input);
  }

  public describeLocationFsxWindows(input: shapes.DataSyncDescribeLocationFsxWindowsRequest): DataSyncDescribeLocationFsxWindows {
    return new DataSyncDescribeLocationFsxWindows(this, 'DescribeLocationFsxWindows', this.__resources, input);
  }

  public describeLocationNfs(input: shapes.DataSyncDescribeLocationNfsRequest): DataSyncDescribeLocationNfs {
    return new DataSyncDescribeLocationNfs(this, 'DescribeLocationNfs', this.__resources, input);
  }

  public describeLocationObjectStorage(input: shapes.DataSyncDescribeLocationObjectStorageRequest): DataSyncDescribeLocationObjectStorage {
    return new DataSyncDescribeLocationObjectStorage(this, 'DescribeLocationObjectStorage', this.__resources, input);
  }

  public describeLocationS3(input: shapes.DataSyncDescribeLocationS3Request): DataSyncDescribeLocationS3 {
    return new DataSyncDescribeLocationS3(this, 'DescribeLocationS3', this.__resources, input);
  }

  public describeLocationSmb(input: shapes.DataSyncDescribeLocationSmbRequest): DataSyncDescribeLocationSmb {
    return new DataSyncDescribeLocationSmb(this, 'DescribeLocationSmb', this.__resources, input);
  }

  public describeTask(input: shapes.DataSyncDescribeTaskRequest): DataSyncDescribeTask {
    return new DataSyncDescribeTask(this, 'DescribeTask', this.__resources, input);
  }

  public describeTaskExecution(input: shapes.DataSyncDescribeTaskExecutionRequest): DataSyncDescribeTaskExecution {
    return new DataSyncDescribeTaskExecution(this, 'DescribeTaskExecution', this.__resources, input);
  }

  public listAgents(input: shapes.DataSyncListAgentsRequest): DataSyncListAgents {
    return new DataSyncListAgents(this, 'ListAgents', this.__resources, input);
  }

  public listLocations(input: shapes.DataSyncListLocationsRequest): DataSyncListLocations {
    return new DataSyncListLocations(this, 'ListLocations', this.__resources, input);
  }

  public listTagsForResource(input: shapes.DataSyncListTagsForResourceRequest): DataSyncListTagsForResource {
    return new DataSyncListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listTaskExecutions(input: shapes.DataSyncListTaskExecutionsRequest): DataSyncListTaskExecutions {
    return new DataSyncListTaskExecutions(this, 'ListTaskExecutions', this.__resources, input);
  }

  public listTasks(input: shapes.DataSyncListTasksRequest): DataSyncListTasks {
    return new DataSyncListTasks(this, 'ListTasks', this.__resources, input);
  }

  public startTaskExecution(input: shapes.DataSyncStartTaskExecutionRequest): DataSyncStartTaskExecution {
    return new DataSyncStartTaskExecution(this, 'StartTaskExecution', this.__resources, input);
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

export class DataSyncCreateAgent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncCreateAgentRequest) {
    super(scope, id);
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
          ActivationKey: this.input.activationKey,
          AgentName: this.input.agentName,
          Tags: this.input.tags,
          VpcEndpointId: this.input.vpcEndpointId,
          SubnetArns: this.input.subnetArns,
          SecurityGroupArns: this.input.securityGroupArns,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateAgent.AgentArn', props);
    return resource.getResponseField('AgentArn') as unknown as string;
  }

}

export class DataSyncCreateLocationEfs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncCreateLocationEfsRequest) {
    super(scope, id);
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
          Subdirectory: this.input.subdirectory,
          EfsFilesystemArn: this.input.efsFilesystemArn,
          Ec2Config: {
            SubnetArn: this.input.ec2Config.subnetArn,
            SecurityGroupArns: this.input.ec2Config.securityGroupArns,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLocationEfs.LocationArn', props);
    return resource.getResponseField('LocationArn') as unknown as string;
  }

}

export class DataSyncCreateLocationFsxWindows extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncCreateLocationFsxWindowsRequest) {
    super(scope, id);
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
          Subdirectory: this.input.subdirectory,
          FsxFilesystemArn: this.input.fsxFilesystemArn,
          SecurityGroupArns: this.input.securityGroupArns,
          Tags: this.input.tags,
          User: this.input.user,
          Domain: this.input.domain,
          Password: this.input.password,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLocationFsxWindows.LocationArn', props);
    return resource.getResponseField('LocationArn') as unknown as string;
  }

}

export class DataSyncCreateLocationNfs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncCreateLocationNfsRequest) {
    super(scope, id);
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
          Subdirectory: this.input.subdirectory,
          ServerHostname: this.input.serverHostname,
          OnPremConfig: {
            AgentArns: this.input.onPremConfig.agentArns,
          },
          MountOptions: {
            Version: this.input.mountOptions?.version,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLocationNfs.LocationArn', props);
    return resource.getResponseField('LocationArn') as unknown as string;
  }

}

export class DataSyncCreateLocationObjectStorage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncCreateLocationObjectStorageRequest) {
    super(scope, id);
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
          ServerHostname: this.input.serverHostname,
          ServerPort: this.input.serverPort,
          ServerProtocol: this.input.serverProtocol,
          Subdirectory: this.input.subdirectory,
          BucketName: this.input.bucketName,
          AccessKey: this.input.accessKey,
          SecretKey: this.input.secretKey,
          AgentArns: this.input.agentArns,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLocationObjectStorage.LocationArn', props);
    return resource.getResponseField('LocationArn') as unknown as string;
  }

}

export class DataSyncCreateLocationS3 extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncCreateLocationS3Request) {
    super(scope, id);
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
          Subdirectory: this.input.subdirectory,
          S3BucketArn: this.input.s3BucketArn,
          S3StorageClass: this.input.s3StorageClass,
          S3Config: {
            BucketAccessRoleArn: this.input.s3Config.bucketAccessRoleArn,
          },
          AgentArns: this.input.agentArns,
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLocationS3.LocationArn', props);
    return resource.getResponseField('LocationArn') as unknown as string;
  }

}

export class DataSyncCreateLocationSmb extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncCreateLocationSmbRequest) {
    super(scope, id);
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
          Subdirectory: this.input.subdirectory,
          ServerHostname: this.input.serverHostname,
          User: this.input.user,
          Domain: this.input.domain,
          Password: this.input.password,
          AgentArns: this.input.agentArns,
          MountOptions: {
            Version: this.input.mountOptions?.version,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateLocationSmb.LocationArn', props);
    return resource.getResponseField('LocationArn') as unknown as string;
  }

}

export class DataSyncCreateTask extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncCreateTaskRequest) {
    super(scope, id);
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
          SourceLocationArn: this.input.sourceLocationArn,
          DestinationLocationArn: this.input.destinationLocationArn,
          CloudWatchLogGroupArn: this.input.cloudWatchLogGroupArn,
          Name: this.input.name,
          Options: {
            VerifyMode: this.input.options?.verifyMode,
            OverwriteMode: this.input.options?.overwriteMode,
            Atime: this.input.options?.atime,
            Mtime: this.input.options?.mtime,
            Uid: this.input.options?.uid,
            Gid: this.input.options?.gid,
            PreserveDeletedFiles: this.input.options?.preserveDeletedFiles,
            PreserveDevices: this.input.options?.preserveDevices,
            PosixPermissions: this.input.options?.posixPermissions,
            BytesPerSecond: this.input.options?.bytesPerSecond,
            TaskQueueing: this.input.options?.taskQueueing,
            LogLevel: this.input.options?.logLevel,
            TransferMode: this.input.options?.transferMode,
          },
          Excludes: this.input.excludes,
          Schedule: {
            ScheduleExpression: this.input.schedule?.scheduleExpression,
          },
          Tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateTask.TaskArn', props);
    return resource.getResponseField('TaskArn') as unknown as string;
  }

}

export class DataSyncDescribeAgent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncDescribeAgentRequest) {
    super(scope, id);
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
          AgentArn: this.input.agentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAgent.AgentArn', props);
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
          AgentArn: this.input.agentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAgent.Name', props);
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
          AgentArn: this.input.agentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAgent.Status', props);
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
          AgentArn: this.input.agentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAgent.LastConnectionTime', props);
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
          AgentArn: this.input.agentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAgent.CreationTime', props);
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
          AgentArn: this.input.agentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAgent.EndpointType', props);
    return resource.getResponseField('EndpointType') as unknown as string;
  }

  public get privateLinkConfig(): DataSyncDescribeAgentPrivateLinkConfig {
    return new DataSyncDescribeAgentPrivateLinkConfig(this, 'PrivateLinkConfig', this.__resources, this.input);
  }

}

export class DataSyncDescribeAgentPrivateLinkConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncDescribeAgentRequest) {
    super(scope, id);
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
          AgentArn: this.input.agentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAgent.PrivateLinkConfig.VpcEndpointId', props);
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
          AgentArn: this.input.agentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAgent.PrivateLinkConfig.PrivateLinkEndpoint', props);
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
          AgentArn: this.input.agentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAgent.PrivateLinkConfig.SubnetArns', props);
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
          AgentArn: this.input.agentArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeAgent.PrivateLinkConfig.SecurityGroupArns', props);
    return resource.getResponseField('PrivateLinkConfig.SecurityGroupArns') as unknown as string[];
  }

}

export class DataSyncDescribeLocationEfs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncDescribeLocationEfsRequest) {
    super(scope, id);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationEfs.LocationArn', props);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationEfs.LocationUri', props);
    return resource.getResponseField('LocationUri') as unknown as string;
  }

  public get ec2Config(): DataSyncDescribeLocationEfsEc2Config {
    return new DataSyncDescribeLocationEfsEc2Config(this, 'Ec2Config', this.__resources, this.input);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationEfs.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

}

export class DataSyncDescribeLocationEfsEc2Config extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncDescribeLocationEfsRequest) {
    super(scope, id);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationEfs.Ec2Config.SubnetArn', props);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationEfs.Ec2Config.SecurityGroupArns', props);
    return resource.getResponseField('Ec2Config.SecurityGroupArns') as unknown as string[];
  }

}

export class DataSyncDescribeLocationFsxWindows extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncDescribeLocationFsxWindowsRequest) {
    super(scope, id);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationFsxWindows.LocationArn', props);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationFsxWindows.LocationUri', props);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationFsxWindows.SecurityGroupArns', props);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationFsxWindows.CreationTime', props);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationFsxWindows.User', props);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationFsxWindows.Domain', props);
    return resource.getResponseField('Domain') as unknown as string;
  }

}

export class DataSyncDescribeLocationNfs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncDescribeLocationNfsRequest) {
    super(scope, id);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationNfs.LocationArn', props);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationNfs.LocationUri', props);
    return resource.getResponseField('LocationUri') as unknown as string;
  }

  public get onPremConfig(): DataSyncDescribeLocationNfsOnPremConfig {
    return new DataSyncDescribeLocationNfsOnPremConfig(this, 'OnPremConfig', this.__resources, this.input);
  }

  public get mountOptions(): DataSyncDescribeLocationNfsMountOptions {
    return new DataSyncDescribeLocationNfsMountOptions(this, 'MountOptions', this.__resources, this.input);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationNfs.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

}

export class DataSyncDescribeLocationNfsOnPremConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncDescribeLocationNfsRequest) {
    super(scope, id);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationNfs.OnPremConfig.AgentArns', props);
    return resource.getResponseField('OnPremConfig.AgentArns') as unknown as string[];
  }

}

export class DataSyncDescribeLocationNfsMountOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncDescribeLocationNfsRequest) {
    super(scope, id);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationNfs.MountOptions.Version', props);
    return resource.getResponseField('MountOptions.Version') as unknown as string;
  }

}

export class DataSyncDescribeLocationObjectStorage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncDescribeLocationObjectStorageRequest) {
    super(scope, id);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationObjectStorage.LocationArn', props);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationObjectStorage.LocationUri', props);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationObjectStorage.AccessKey', props);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationObjectStorage.ServerPort', props);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationObjectStorage.ServerProtocol', props);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationObjectStorage.AgentArns', props);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationObjectStorage.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

}

export class DataSyncDescribeLocationS3 extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncDescribeLocationS3Request) {
    super(scope, id);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationS3.LocationArn', props);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationS3.LocationUri', props);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationS3.S3StorageClass', props);
    return resource.getResponseField('S3StorageClass') as unknown as string;
  }

  public get s3Config(): DataSyncDescribeLocationS3S3Config {
    return new DataSyncDescribeLocationS3S3Config(this, 'S3Config', this.__resources, this.input);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationS3.AgentArns', props);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationS3.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

}

export class DataSyncDescribeLocationS3S3Config extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncDescribeLocationS3Request) {
    super(scope, id);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationS3.S3Config.BucketAccessRoleArn', props);
    return resource.getResponseField('S3Config.BucketAccessRoleArn') as unknown as string;
  }

}

export class DataSyncDescribeLocationSmb extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncDescribeLocationSmbRequest) {
    super(scope, id);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationSmb.LocationArn', props);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationSmb.LocationUri', props);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationSmb.AgentArns', props);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationSmb.User', props);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationSmb.Domain', props);
    return resource.getResponseField('Domain') as unknown as string;
  }

  public get mountOptions(): DataSyncDescribeLocationSmbMountOptions {
    return new DataSyncDescribeLocationSmbMountOptions(this, 'MountOptions', this.__resources, this.input);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationSmb.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

}

export class DataSyncDescribeLocationSmbMountOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncDescribeLocationSmbRequest) {
    super(scope, id);
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
          LocationArn: this.input.locationArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeLocationSmb.MountOptions.Version', props);
    return resource.getResponseField('MountOptions.Version') as unknown as string;
  }

}

export class DataSyncDescribeTask extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncDescribeTaskRequest) {
    super(scope, id);
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
          TaskArn: this.input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTask.TaskArn', props);
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
          TaskArn: this.input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTask.Status', props);
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
          TaskArn: this.input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTask.Name', props);
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
          TaskArn: this.input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTask.CurrentTaskExecutionArn', props);
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
          TaskArn: this.input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTask.SourceLocationArn', props);
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
          TaskArn: this.input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTask.DestinationLocationArn', props);
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
          TaskArn: this.input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTask.CloudWatchLogGroupArn', props);
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
          TaskArn: this.input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTask.SourceNetworkInterfaceArns', props);
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
          TaskArn: this.input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTask.DestinationNetworkInterfaceArns', props);
    return resource.getResponseField('DestinationNetworkInterfaceArns') as unknown as string[];
  }

  public get options(): DataSyncDescribeTaskOptions {
    return new DataSyncDescribeTaskOptions(this, 'Options', this.__resources, this.input);
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
          TaskArn: this.input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTask.Excludes', props);
    return resource.getResponseField('Excludes') as unknown as shapes.DataSyncFilterRule[];
  }

  public get schedule(): DataSyncDescribeTaskSchedule {
    return new DataSyncDescribeTaskSchedule(this, 'Schedule', this.__resources, this.input);
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
          TaskArn: this.input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTask.ErrorCode', props);
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
          TaskArn: this.input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTask.ErrorDetail', props);
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
          TaskArn: this.input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTask.CreationTime', props);
    return resource.getResponseField('CreationTime') as unknown as string;
  }

}

export class DataSyncDescribeTaskOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncDescribeTaskRequest) {
    super(scope, id);
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
          TaskArn: this.input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTask.Options.VerifyMode', props);
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
          TaskArn: this.input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTask.Options.OverwriteMode', props);
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
          TaskArn: this.input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTask.Options.Atime', props);
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
          TaskArn: this.input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTask.Options.Mtime', props);
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
          TaskArn: this.input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTask.Options.Uid', props);
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
          TaskArn: this.input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTask.Options.Gid', props);
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
          TaskArn: this.input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTask.Options.PreserveDeletedFiles', props);
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
          TaskArn: this.input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTask.Options.PreserveDevices', props);
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
          TaskArn: this.input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTask.Options.PosixPermissions', props);
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
          TaskArn: this.input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTask.Options.BytesPerSecond', props);
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
          TaskArn: this.input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTask.Options.TaskQueueing', props);
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
          TaskArn: this.input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTask.Options.LogLevel', props);
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
          TaskArn: this.input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTask.Options.TransferMode', props);
    return resource.getResponseField('Options.TransferMode') as unknown as string;
  }

}

export class DataSyncDescribeTaskSchedule extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncDescribeTaskRequest) {
    super(scope, id);
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
          TaskArn: this.input.taskArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTask.Schedule.ScheduleExpression', props);
    return resource.getResponseField('Schedule.ScheduleExpression') as unknown as string;
  }

}

export class DataSyncDescribeTaskExecution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncDescribeTaskExecutionRequest) {
    super(scope, id);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.TaskExecutionArn', props);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get options(): DataSyncDescribeTaskExecutionOptions {
    return new DataSyncDescribeTaskExecutionOptions(this, 'Options', this.__resources, this.input);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.Excludes', props);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.Includes', props);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.StartTime', props);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.EstimatedFilesToTransfer', props);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.EstimatedBytesToTransfer', props);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.FilesTransferred', props);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.BytesWritten', props);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.BytesTransferred', props);
    return resource.getResponseField('BytesTransferred') as unknown as number;
  }

  public get result(): DataSyncDescribeTaskExecutionResult {
    return new DataSyncDescribeTaskExecutionResult(this, 'Result', this.__resources, this.input);
  }

}

export class DataSyncDescribeTaskExecutionOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncDescribeTaskExecutionRequest) {
    super(scope, id);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.Options.VerifyMode', props);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.Options.OverwriteMode', props);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.Options.Atime', props);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.Options.Mtime', props);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.Options.Uid', props);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.Options.Gid', props);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.Options.PreserveDeletedFiles', props);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.Options.PreserveDevices', props);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.Options.PosixPermissions', props);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.Options.BytesPerSecond', props);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.Options.TaskQueueing', props);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.Options.LogLevel', props);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.Options.TransferMode', props);
    return resource.getResponseField('Options.TransferMode') as unknown as string;
  }

}

export class DataSyncDescribeTaskExecutionResult extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncDescribeTaskExecutionRequest) {
    super(scope, id);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.Result.PrepareDuration', props);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.Result.PrepareStatus', props);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.Result.TotalDuration', props);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.Result.TransferDuration', props);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.Result.TransferStatus', props);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.Result.VerifyDuration', props);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.Result.VerifyStatus', props);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.Result.ErrorCode', props);
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
          TaskExecutionArn: this.input.taskExecutionArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTaskExecution.Result.ErrorDetail', props);
    return resource.getResponseField('Result.ErrorDetail') as unknown as string;
  }

}

export class DataSyncListAgents extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncListAgentsRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAgents.Agents', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListAgents.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DataSyncListLocations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncListLocationsRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLocations.Locations', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListLocations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DataSyncListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncListTagsForResourceRequest) {
    super(scope, id);
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
          ResourceArn: this.input.resourceArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.Tags', props);
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
          ResourceArn: this.input.resourceArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DataSyncListTaskExecutions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncListTaskExecutionsRequest) {
    super(scope, id);
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
          TaskArn: this.input.taskArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTaskExecutions.TaskExecutions', props);
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
          TaskArn: this.input.taskArn,
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTaskExecutions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DataSyncListTasks extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncListTasksRequest) {
    super(scope, id);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTasks.Tasks', props);
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
          MaxResults: this.input.maxResults,
          NextToken: this.input.nextToken,
          Filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTasks.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class DataSyncStartTaskExecution extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.DataSyncStartTaskExecutionRequest) {
    super(scope, id);
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
          TaskArn: this.input.taskArn,
          OverrideOptions: {
            VerifyMode: this.input.overrideOptions?.verifyMode,
            OverwriteMode: this.input.overrideOptions?.overwriteMode,
            Atime: this.input.overrideOptions?.atime,
            Mtime: this.input.overrideOptions?.mtime,
            Uid: this.input.overrideOptions?.uid,
            Gid: this.input.overrideOptions?.gid,
            PreserveDeletedFiles: this.input.overrideOptions?.preserveDeletedFiles,
            PreserveDevices: this.input.overrideOptions?.preserveDevices,
            PosixPermissions: this.input.overrideOptions?.posixPermissions,
            BytesPerSecond: this.input.overrideOptions?.bytesPerSecond,
            TaskQueueing: this.input.overrideOptions?.taskQueueing,
            LogLevel: this.input.overrideOptions?.logLevel,
            TransferMode: this.input.overrideOptions?.transferMode,
          },
          Includes: this.input.includes,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartTaskExecution.TaskExecutionArn', props);
    return resource.getResponseField('TaskExecutionArn') as unknown as string;
  }

}

