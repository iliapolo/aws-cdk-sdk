import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class RoboMakerClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchDeleteWorlds(input: shapes.RoboMakerBatchDeleteWorldsRequest): RoboMakerBatchDeleteWorlds {
    return new RoboMakerBatchDeleteWorlds(this, 'BatchDeleteWorlds', this.__resources, input);
  }

  public batchDescribeSimulationJob(input: shapes.RoboMakerBatchDescribeSimulationJobRequest): RoboMakerBatchDescribeSimulationJob {
    return new RoboMakerBatchDescribeSimulationJob(this, 'BatchDescribeSimulationJob', this.__resources, input);
  }

  public cancelDeploymentJob(input: shapes.RoboMakerCancelDeploymentJobRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CancelDeploymentJob'),
        parameters: {
          job: input.job,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CancelDeploymentJob', props);
  }

  public cancelSimulationJob(input: shapes.RoboMakerCancelSimulationJobRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CancelSimulationJob'),
        parameters: {
          job: input.job,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CancelSimulationJob', props);
  }

  public cancelSimulationJobBatch(input: shapes.RoboMakerCancelSimulationJobBatchRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelSimulationJobBatch',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CancelSimulationJobBatch'),
        parameters: {
          batch: input.batch,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CancelSimulationJobBatch', props);
  }

  public cancelWorldExportJob(input: shapes.RoboMakerCancelWorldExportJobRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelWorldExportJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CancelWorldExportJob'),
        parameters: {
          job: input.job,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CancelWorldExportJob', props);
  }

  public cancelWorldGenerationJob(input: shapes.RoboMakerCancelWorldGenerationJobRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelWorldGenerationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CancelWorldGenerationJob'),
        parameters: {
          job: input.job,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CancelWorldGenerationJob', props);
  }

  public createDeploymentJob(input: shapes.RoboMakerCreateDeploymentJobRequest): RoboMakerCreateDeploymentJob {
    return new RoboMakerCreateDeploymentJob(this, 'CreateDeploymentJob', this.__resources, input);
  }

  public createFleet(input: shapes.RoboMakerCreateFleetRequest): RoboMakerCreateFleet {
    return new RoboMakerCreateFleet(this, 'CreateFleet', this.__resources, input);
  }

  public createRobot(input: shapes.RoboMakerCreateRobotRequest): RoboMakerCreateRobot {
    return new RoboMakerCreateRobot(this, 'CreateRobot', this.__resources, input);
  }

  public createRobotApplication(input: shapes.RoboMakerCreateRobotApplicationRequest): RoboMakerCreateRobotApplication {
    return new RoboMakerCreateRobotApplication(this, 'CreateRobotApplication', this.__resources, input);
  }

  public createRobotApplicationVersion(input: shapes.RoboMakerCreateRobotApplicationVersionRequest): RoboMakerCreateRobotApplicationVersion {
    return new RoboMakerCreateRobotApplicationVersion(this, 'CreateRobotApplicationVersion', this.__resources, input);
  }

  public createSimulationApplication(input: shapes.RoboMakerCreateSimulationApplicationRequest): RoboMakerCreateSimulationApplication {
    return new RoboMakerCreateSimulationApplication(this, 'CreateSimulationApplication', this.__resources, input);
  }

  public createSimulationApplicationVersion(input: shapes.RoboMakerCreateSimulationApplicationVersionRequest): RoboMakerCreateSimulationApplicationVersion {
    return new RoboMakerCreateSimulationApplicationVersion(this, 'CreateSimulationApplicationVersion', this.__resources, input);
  }

  public createSimulationJob(input: shapes.RoboMakerCreateSimulationJobRequest): RoboMakerCreateSimulationJob {
    return new RoboMakerCreateSimulationJob(this, 'CreateSimulationJob', this.__resources, input);
  }

  public createWorldExportJob(input: shapes.RoboMakerCreateWorldExportJobRequest): RoboMakerCreateWorldExportJob {
    return new RoboMakerCreateWorldExportJob(this, 'CreateWorldExportJob', this.__resources, input);
  }

  public createWorldGenerationJob(input: shapes.RoboMakerCreateWorldGenerationJobRequest): RoboMakerCreateWorldGenerationJob {
    return new RoboMakerCreateWorldGenerationJob(this, 'CreateWorldGenerationJob', this.__resources, input);
  }

  public createWorldTemplate(input: shapes.RoboMakerCreateWorldTemplateRequest): RoboMakerCreateWorldTemplate {
    return new RoboMakerCreateWorldTemplate(this, 'CreateWorldTemplate', this.__resources, input);
  }

  public deleteFleet(input: shapes.RoboMakerDeleteFleetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteFleet',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DeleteFleet'),
        parameters: {
          fleet: input.fleet,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteFleet', props);
  }

  public deleteRobot(input: shapes.RoboMakerDeleteRobotRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRobot',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DeleteRobot'),
        parameters: {
          robot: input.robot,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRobot', props);
  }

  public deleteRobotApplication(input: shapes.RoboMakerDeleteRobotApplicationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRobotApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DeleteRobotApplication'),
        parameters: {
          application: input.application,
          applicationVersion: input.applicationVersion,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteRobotApplication', props);
  }

  public deleteSimulationApplication(input: shapes.RoboMakerDeleteSimulationApplicationRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DeleteSimulationApplication'),
        parameters: {
          application: input.application,
          applicationVersion: input.applicationVersion,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteSimulationApplication', props);
  }

  public deleteWorldTemplate(input: shapes.RoboMakerDeleteWorldTemplateRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteWorldTemplate',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DeleteWorldTemplate'),
        parameters: {
          template: input.template,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteWorldTemplate', props);
  }

  public deregisterRobot(input: shapes.RoboMakerDeregisterRobotRequest): RoboMakerDeregisterRobot {
    return new RoboMakerDeregisterRobot(this, 'DeregisterRobot', this.__resources, input);
  }

  public describeDeploymentJob(input: shapes.RoboMakerDescribeDeploymentJobRequest): RoboMakerDescribeDeploymentJob {
    return new RoboMakerDescribeDeploymentJob(this, 'DescribeDeploymentJob', this.__resources, input);
  }

  public describeFleet(input: shapes.RoboMakerDescribeFleetRequest): RoboMakerDescribeFleet {
    return new RoboMakerDescribeFleet(this, 'DescribeFleet', this.__resources, input);
  }

  public describeRobot(input: shapes.RoboMakerDescribeRobotRequest): RoboMakerDescribeRobot {
    return new RoboMakerDescribeRobot(this, 'DescribeRobot', this.__resources, input);
  }

  public describeRobotApplication(input: shapes.RoboMakerDescribeRobotApplicationRequest): RoboMakerDescribeRobotApplication {
    return new RoboMakerDescribeRobotApplication(this, 'DescribeRobotApplication', this.__resources, input);
  }

  public describeSimulationApplication(input: shapes.RoboMakerDescribeSimulationApplicationRequest): RoboMakerDescribeSimulationApplication {
    return new RoboMakerDescribeSimulationApplication(this, 'DescribeSimulationApplication', this.__resources, input);
  }

  public describeSimulationJob(input: shapes.RoboMakerDescribeSimulationJobRequest): RoboMakerDescribeSimulationJob {
    return new RoboMakerDescribeSimulationJob(this, 'DescribeSimulationJob', this.__resources, input);
  }

  public describeSimulationJobBatch(input: shapes.RoboMakerDescribeSimulationJobBatchRequest): RoboMakerDescribeSimulationJobBatch {
    return new RoboMakerDescribeSimulationJobBatch(this, 'DescribeSimulationJobBatch', this.__resources, input);
  }

  public describeWorld(input: shapes.RoboMakerDescribeWorldRequest): RoboMakerDescribeWorld {
    return new RoboMakerDescribeWorld(this, 'DescribeWorld', this.__resources, input);
  }

  public describeWorldExportJob(input: shapes.RoboMakerDescribeWorldExportJobRequest): RoboMakerDescribeWorldExportJob {
    return new RoboMakerDescribeWorldExportJob(this, 'DescribeWorldExportJob', this.__resources, input);
  }

  public describeWorldGenerationJob(input: shapes.RoboMakerDescribeWorldGenerationJobRequest): RoboMakerDescribeWorldGenerationJob {
    return new RoboMakerDescribeWorldGenerationJob(this, 'DescribeWorldGenerationJob', this.__resources, input);
  }

  public describeWorldTemplate(input: shapes.RoboMakerDescribeWorldTemplateRequest): RoboMakerDescribeWorldTemplate {
    return new RoboMakerDescribeWorldTemplate(this, 'DescribeWorldTemplate', this.__resources, input);
  }

  public fetchWorldTemplateBody(input: shapes.RoboMakerGetWorldTemplateBodyRequest): RoboMakerFetchWorldTemplateBody {
    return new RoboMakerFetchWorldTemplateBody(this, 'FetchWorldTemplateBody', this.__resources, input);
  }

  public listDeploymentJobs(input: shapes.RoboMakerListDeploymentJobsRequest): RoboMakerListDeploymentJobs {
    return new RoboMakerListDeploymentJobs(this, 'ListDeploymentJobs', this.__resources, input);
  }

  public listFleets(input: shapes.RoboMakerListFleetsRequest): RoboMakerListFleets {
    return new RoboMakerListFleets(this, 'ListFleets', this.__resources, input);
  }

  public listRobotApplications(input: shapes.RoboMakerListRobotApplicationsRequest): RoboMakerListRobotApplications {
    return new RoboMakerListRobotApplications(this, 'ListRobotApplications', this.__resources, input);
  }

  public listRobots(input: shapes.RoboMakerListRobotsRequest): RoboMakerListRobots {
    return new RoboMakerListRobots(this, 'ListRobots', this.__resources, input);
  }

  public listSimulationApplications(input: shapes.RoboMakerListSimulationApplicationsRequest): RoboMakerListSimulationApplications {
    return new RoboMakerListSimulationApplications(this, 'ListSimulationApplications', this.__resources, input);
  }

  public listSimulationJobBatches(input: shapes.RoboMakerListSimulationJobBatchesRequest): RoboMakerListSimulationJobBatches {
    return new RoboMakerListSimulationJobBatches(this, 'ListSimulationJobBatches', this.__resources, input);
  }

  public listSimulationJobs(input: shapes.RoboMakerListSimulationJobsRequest): RoboMakerListSimulationJobs {
    return new RoboMakerListSimulationJobs(this, 'ListSimulationJobs', this.__resources, input);
  }

  public listTagsForResource(input: shapes.RoboMakerListTagsForResourceRequest): RoboMakerListTagsForResource {
    return new RoboMakerListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
  }

  public listWorldExportJobs(input: shapes.RoboMakerListWorldExportJobsRequest): RoboMakerListWorldExportJobs {
    return new RoboMakerListWorldExportJobs(this, 'ListWorldExportJobs', this.__resources, input);
  }

  public listWorldGenerationJobs(input: shapes.RoboMakerListWorldGenerationJobsRequest): RoboMakerListWorldGenerationJobs {
    return new RoboMakerListWorldGenerationJobs(this, 'ListWorldGenerationJobs', this.__resources, input);
  }

  public listWorldTemplates(input: shapes.RoboMakerListWorldTemplatesRequest): RoboMakerListWorldTemplates {
    return new RoboMakerListWorldTemplates(this, 'ListWorldTemplates', this.__resources, input);
  }

  public listWorlds(input: shapes.RoboMakerListWorldsRequest): RoboMakerListWorlds {
    return new RoboMakerListWorlds(this, 'ListWorlds', this.__resources, input);
  }

  public registerRobot(input: shapes.RoboMakerRegisterRobotRequest): RoboMakerRegisterRobot {
    return new RoboMakerRegisterRobot(this, 'RegisterRobot', this.__resources, input);
  }

  public restartSimulationJob(input: shapes.RoboMakerRestartSimulationJobRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'restartSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.RestartSimulationJob'),
        parameters: {
          job: input.job,
        },
      },
    };
    new cr.AwsCustomResource(this, 'RestartSimulationJob', props);
  }

  public startSimulationJobBatch(input: shapes.RoboMakerStartSimulationJobBatchRequest): RoboMakerStartSimulationJobBatch {
    return new RoboMakerStartSimulationJobBatch(this, 'StartSimulationJobBatch', this.__resources, input);
  }

  public syncDeploymentJob(input: shapes.RoboMakerSyncDeploymentJobRequest): RoboMakerSyncDeploymentJob {
    return new RoboMakerSyncDeploymentJob(this, 'SyncDeploymentJob', this.__resources, input);
  }

  public tagResource(input: shapes.RoboMakerTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.RoboMakerUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateRobotApplication(input: shapes.RoboMakerUpdateRobotApplicationRequest): RoboMakerUpdateRobotApplication {
    return new RoboMakerUpdateRobotApplication(this, 'UpdateRobotApplication', this.__resources, input);
  }

  public updateSimulationApplication(input: shapes.RoboMakerUpdateSimulationApplicationRequest): RoboMakerUpdateSimulationApplication {
    return new RoboMakerUpdateSimulationApplication(this, 'UpdateSimulationApplication', this.__resources, input);
  }

  public updateWorldTemplate(input: shapes.RoboMakerUpdateWorldTemplateRequest): RoboMakerUpdateWorldTemplate {
    return new RoboMakerUpdateWorldTemplate(this, 'UpdateWorldTemplate', this.__resources, input);
  }

}

export class RoboMakerBatchDeleteWorlds extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerBatchDeleteWorldsRequest) {
    super(scope, id);
  }

  public get unprocessedWorlds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDeleteWorlds',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.BatchDeleteWorlds.unprocessedWorlds'),
        outputPath: 'unprocessedWorlds',
        parameters: {
          worlds: this.input.worlds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDeleteWorlds.unprocessedWorlds', props);
    return resource.getResponseField('unprocessedWorlds') as unknown as string[];
  }

}

export class RoboMakerBatchDescribeSimulationJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerBatchDescribeSimulationJobRequest) {
    super(scope, id);
  }

  public get jobs(): shapes.RoboMakerSimulationJob[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDescribeSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.BatchDescribeSimulationJob.jobs'),
        outputPath: 'jobs',
        parameters: {
          jobs: this.input.jobs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDescribeSimulationJob.jobs', props);
    return resource.getResponseField('jobs') as unknown as shapes.RoboMakerSimulationJob[];
  }

  public get unprocessedJobs(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchDescribeSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.BatchDescribeSimulationJob.unprocessedJobs'),
        outputPath: 'unprocessedJobs',
        parameters: {
          jobs: this.input.jobs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchDescribeSimulationJob.unprocessedJobs', props);
    return resource.getResponseField('unprocessedJobs') as unknown as string[];
  }

}

export class RoboMakerCreateDeploymentJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerCreateDeploymentJobRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateDeploymentJob.arn'),
        outputPath: 'arn',
        parameters: {
          deploymentConfig: {
            concurrentDeploymentPercentage: this.input.deploymentConfig?.concurrentDeploymentPercentage,
            failureThresholdPercentage: this.input.deploymentConfig?.failureThresholdPercentage,
            robotDeploymentTimeoutInSeconds: this.input.deploymentConfig?.robotDeploymentTimeoutInSeconds,
            downloadConditionFile: {
              bucket: this.input.deploymentConfig?.downloadConditionFile?.bucket,
              key: this.input.deploymentConfig?.downloadConditionFile?.key,
              etag: this.input.deploymentConfig?.downloadConditionFile?.etag,
            },
          },
          clientRequestToken: this.input.clientRequestToken,
          fleet: this.input.fleet,
          deploymentApplicationConfigs: this.input.deploymentApplicationConfigs,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeploymentJob.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get fleet(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateDeploymentJob.fleet'),
        outputPath: 'fleet',
        parameters: {
          deploymentConfig: {
            concurrentDeploymentPercentage: this.input.deploymentConfig?.concurrentDeploymentPercentage,
            failureThresholdPercentage: this.input.deploymentConfig?.failureThresholdPercentage,
            robotDeploymentTimeoutInSeconds: this.input.deploymentConfig?.robotDeploymentTimeoutInSeconds,
            downloadConditionFile: {
              bucket: this.input.deploymentConfig?.downloadConditionFile?.bucket,
              key: this.input.deploymentConfig?.downloadConditionFile?.key,
              etag: this.input.deploymentConfig?.downloadConditionFile?.etag,
            },
          },
          clientRequestToken: this.input.clientRequestToken,
          fleet: this.input.fleet,
          deploymentApplicationConfigs: this.input.deploymentApplicationConfigs,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeploymentJob.fleet', props);
    return resource.getResponseField('fleet') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateDeploymentJob.status'),
        outputPath: 'status',
        parameters: {
          deploymentConfig: {
            concurrentDeploymentPercentage: this.input.deploymentConfig?.concurrentDeploymentPercentage,
            failureThresholdPercentage: this.input.deploymentConfig?.failureThresholdPercentage,
            robotDeploymentTimeoutInSeconds: this.input.deploymentConfig?.robotDeploymentTimeoutInSeconds,
            downloadConditionFile: {
              bucket: this.input.deploymentConfig?.downloadConditionFile?.bucket,
              key: this.input.deploymentConfig?.downloadConditionFile?.key,
              etag: this.input.deploymentConfig?.downloadConditionFile?.etag,
            },
          },
          clientRequestToken: this.input.clientRequestToken,
          fleet: this.input.fleet,
          deploymentApplicationConfigs: this.input.deploymentApplicationConfigs,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeploymentJob.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get deploymentApplicationConfigs(): shapes.RoboMakerDeploymentApplicationConfig[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateDeploymentJob.deploymentApplicationConfigs'),
        outputPath: 'deploymentApplicationConfigs',
        parameters: {
          deploymentConfig: {
            concurrentDeploymentPercentage: this.input.deploymentConfig?.concurrentDeploymentPercentage,
            failureThresholdPercentage: this.input.deploymentConfig?.failureThresholdPercentage,
            robotDeploymentTimeoutInSeconds: this.input.deploymentConfig?.robotDeploymentTimeoutInSeconds,
            downloadConditionFile: {
              bucket: this.input.deploymentConfig?.downloadConditionFile?.bucket,
              key: this.input.deploymentConfig?.downloadConditionFile?.key,
              etag: this.input.deploymentConfig?.downloadConditionFile?.etag,
            },
          },
          clientRequestToken: this.input.clientRequestToken,
          fleet: this.input.fleet,
          deploymentApplicationConfigs: this.input.deploymentApplicationConfigs,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeploymentJob.deploymentApplicationConfigs', props);
    return resource.getResponseField('deploymentApplicationConfigs') as unknown as shapes.RoboMakerDeploymentApplicationConfig[];
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateDeploymentJob.failureReason'),
        outputPath: 'failureReason',
        parameters: {
          deploymentConfig: {
            concurrentDeploymentPercentage: this.input.deploymentConfig?.concurrentDeploymentPercentage,
            failureThresholdPercentage: this.input.deploymentConfig?.failureThresholdPercentage,
            robotDeploymentTimeoutInSeconds: this.input.deploymentConfig?.robotDeploymentTimeoutInSeconds,
            downloadConditionFile: {
              bucket: this.input.deploymentConfig?.downloadConditionFile?.bucket,
              key: this.input.deploymentConfig?.downloadConditionFile?.key,
              etag: this.input.deploymentConfig?.downloadConditionFile?.etag,
            },
          },
          clientRequestToken: this.input.clientRequestToken,
          fleet: this.input.fleet,
          deploymentApplicationConfigs: this.input.deploymentApplicationConfigs,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeploymentJob.failureReason', props);
    return resource.getResponseField('failureReason') as unknown as string;
  }

  public get failureCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateDeploymentJob.failureCode'),
        outputPath: 'failureCode',
        parameters: {
          deploymentConfig: {
            concurrentDeploymentPercentage: this.input.deploymentConfig?.concurrentDeploymentPercentage,
            failureThresholdPercentage: this.input.deploymentConfig?.failureThresholdPercentage,
            robotDeploymentTimeoutInSeconds: this.input.deploymentConfig?.robotDeploymentTimeoutInSeconds,
            downloadConditionFile: {
              bucket: this.input.deploymentConfig?.downloadConditionFile?.bucket,
              key: this.input.deploymentConfig?.downloadConditionFile?.key,
              etag: this.input.deploymentConfig?.downloadConditionFile?.etag,
            },
          },
          clientRequestToken: this.input.clientRequestToken,
          fleet: this.input.fleet,
          deploymentApplicationConfigs: this.input.deploymentApplicationConfigs,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeploymentJob.failureCode', props);
    return resource.getResponseField('failureCode') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateDeploymentJob.createdAt'),
        outputPath: 'createdAt',
        parameters: {
          deploymentConfig: {
            concurrentDeploymentPercentage: this.input.deploymentConfig?.concurrentDeploymentPercentage,
            failureThresholdPercentage: this.input.deploymentConfig?.failureThresholdPercentage,
            robotDeploymentTimeoutInSeconds: this.input.deploymentConfig?.robotDeploymentTimeoutInSeconds,
            downloadConditionFile: {
              bucket: this.input.deploymentConfig?.downloadConditionFile?.bucket,
              key: this.input.deploymentConfig?.downloadConditionFile?.key,
              etag: this.input.deploymentConfig?.downloadConditionFile?.etag,
            },
          },
          clientRequestToken: this.input.clientRequestToken,
          fleet: this.input.fleet,
          deploymentApplicationConfigs: this.input.deploymentApplicationConfigs,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeploymentJob.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

  public get deploymentConfig(): RoboMakerCreateDeploymentJobDeploymentConfig {
    return new RoboMakerCreateDeploymentJobDeploymentConfig(this, 'DeploymentConfig', this.__resources, this.input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateDeploymentJob.tags'),
        outputPath: 'tags',
        parameters: {
          deploymentConfig: {
            concurrentDeploymentPercentage: this.input.deploymentConfig?.concurrentDeploymentPercentage,
            failureThresholdPercentage: this.input.deploymentConfig?.failureThresholdPercentage,
            robotDeploymentTimeoutInSeconds: this.input.deploymentConfig?.robotDeploymentTimeoutInSeconds,
            downloadConditionFile: {
              bucket: this.input.deploymentConfig?.downloadConditionFile?.bucket,
              key: this.input.deploymentConfig?.downloadConditionFile?.key,
              etag: this.input.deploymentConfig?.downloadConditionFile?.etag,
            },
          },
          clientRequestToken: this.input.clientRequestToken,
          fleet: this.input.fleet,
          deploymentApplicationConfigs: this.input.deploymentApplicationConfigs,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeploymentJob.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerCreateDeploymentJobDeploymentConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerCreateDeploymentJobRequest) {
    super(scope, id);
  }

  public get concurrentDeploymentPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateDeploymentJob.deploymentConfig.concurrentDeploymentPercentage'),
        outputPath: 'deploymentConfig.concurrentDeploymentPercentage',
        parameters: {
          deploymentConfig: {
            concurrentDeploymentPercentage: this.input.deploymentConfig?.concurrentDeploymentPercentage,
            failureThresholdPercentage: this.input.deploymentConfig?.failureThresholdPercentage,
            robotDeploymentTimeoutInSeconds: this.input.deploymentConfig?.robotDeploymentTimeoutInSeconds,
            downloadConditionFile: {
              bucket: this.input.deploymentConfig?.downloadConditionFile?.bucket,
              key: this.input.deploymentConfig?.downloadConditionFile?.key,
              etag: this.input.deploymentConfig?.downloadConditionFile?.etag,
            },
          },
          clientRequestToken: this.input.clientRequestToken,
          fleet: this.input.fleet,
          deploymentApplicationConfigs: this.input.deploymentApplicationConfigs,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeploymentJob.deploymentConfig.concurrentDeploymentPercentage', props);
    return resource.getResponseField('deploymentConfig.concurrentDeploymentPercentage') as unknown as number;
  }

  public get failureThresholdPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateDeploymentJob.deploymentConfig.failureThresholdPercentage'),
        outputPath: 'deploymentConfig.failureThresholdPercentage',
        parameters: {
          deploymentConfig: {
            concurrentDeploymentPercentage: this.input.deploymentConfig?.concurrentDeploymentPercentage,
            failureThresholdPercentage: this.input.deploymentConfig?.failureThresholdPercentage,
            robotDeploymentTimeoutInSeconds: this.input.deploymentConfig?.robotDeploymentTimeoutInSeconds,
            downloadConditionFile: {
              bucket: this.input.deploymentConfig?.downloadConditionFile?.bucket,
              key: this.input.deploymentConfig?.downloadConditionFile?.key,
              etag: this.input.deploymentConfig?.downloadConditionFile?.etag,
            },
          },
          clientRequestToken: this.input.clientRequestToken,
          fleet: this.input.fleet,
          deploymentApplicationConfigs: this.input.deploymentApplicationConfigs,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeploymentJob.deploymentConfig.failureThresholdPercentage', props);
    return resource.getResponseField('deploymentConfig.failureThresholdPercentage') as unknown as number;
  }

  public get robotDeploymentTimeoutInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateDeploymentJob.deploymentConfig.robotDeploymentTimeoutInSeconds'),
        outputPath: 'deploymentConfig.robotDeploymentTimeoutInSeconds',
        parameters: {
          deploymentConfig: {
            concurrentDeploymentPercentage: this.input.deploymentConfig?.concurrentDeploymentPercentage,
            failureThresholdPercentage: this.input.deploymentConfig?.failureThresholdPercentage,
            robotDeploymentTimeoutInSeconds: this.input.deploymentConfig?.robotDeploymentTimeoutInSeconds,
            downloadConditionFile: {
              bucket: this.input.deploymentConfig?.downloadConditionFile?.bucket,
              key: this.input.deploymentConfig?.downloadConditionFile?.key,
              etag: this.input.deploymentConfig?.downloadConditionFile?.etag,
            },
          },
          clientRequestToken: this.input.clientRequestToken,
          fleet: this.input.fleet,
          deploymentApplicationConfigs: this.input.deploymentApplicationConfigs,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeploymentJob.deploymentConfig.robotDeploymentTimeoutInSeconds', props);
    return resource.getResponseField('deploymentConfig.robotDeploymentTimeoutInSeconds') as unknown as number;
  }

  public get downloadConditionFile(): RoboMakerCreateDeploymentJobDeploymentConfigDownloadConditionFile {
    return new RoboMakerCreateDeploymentJobDeploymentConfigDownloadConditionFile(this, 'DownloadConditionFile', this.__resources, this.input);
  }

}

export class RoboMakerCreateDeploymentJobDeploymentConfigDownloadConditionFile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerCreateDeploymentJobRequest) {
    super(scope, id);
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateDeploymentJob.deploymentConfig.downloadConditionFile.bucket'),
        outputPath: 'deploymentConfig.downloadConditionFile.bucket',
        parameters: {
          deploymentConfig: {
            concurrentDeploymentPercentage: this.input.deploymentConfig?.concurrentDeploymentPercentage,
            failureThresholdPercentage: this.input.deploymentConfig?.failureThresholdPercentage,
            robotDeploymentTimeoutInSeconds: this.input.deploymentConfig?.robotDeploymentTimeoutInSeconds,
            downloadConditionFile: {
              bucket: this.input.deploymentConfig?.downloadConditionFile?.bucket,
              key: this.input.deploymentConfig?.downloadConditionFile?.key,
              etag: this.input.deploymentConfig?.downloadConditionFile?.etag,
            },
          },
          clientRequestToken: this.input.clientRequestToken,
          fleet: this.input.fleet,
          deploymentApplicationConfigs: this.input.deploymentApplicationConfigs,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeploymentJob.deploymentConfig.downloadConditionFile.bucket', props);
    return resource.getResponseField('deploymentConfig.downloadConditionFile.bucket') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateDeploymentJob.deploymentConfig.downloadConditionFile.key'),
        outputPath: 'deploymentConfig.downloadConditionFile.key',
        parameters: {
          deploymentConfig: {
            concurrentDeploymentPercentage: this.input.deploymentConfig?.concurrentDeploymentPercentage,
            failureThresholdPercentage: this.input.deploymentConfig?.failureThresholdPercentage,
            robotDeploymentTimeoutInSeconds: this.input.deploymentConfig?.robotDeploymentTimeoutInSeconds,
            downloadConditionFile: {
              bucket: this.input.deploymentConfig?.downloadConditionFile?.bucket,
              key: this.input.deploymentConfig?.downloadConditionFile?.key,
              etag: this.input.deploymentConfig?.downloadConditionFile?.etag,
            },
          },
          clientRequestToken: this.input.clientRequestToken,
          fleet: this.input.fleet,
          deploymentApplicationConfigs: this.input.deploymentApplicationConfigs,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeploymentJob.deploymentConfig.downloadConditionFile.key', props);
    return resource.getResponseField('deploymentConfig.downloadConditionFile.key') as unknown as string;
  }

  public get etag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateDeploymentJob.deploymentConfig.downloadConditionFile.etag'),
        outputPath: 'deploymentConfig.downloadConditionFile.etag',
        parameters: {
          deploymentConfig: {
            concurrentDeploymentPercentage: this.input.deploymentConfig?.concurrentDeploymentPercentage,
            failureThresholdPercentage: this.input.deploymentConfig?.failureThresholdPercentage,
            robotDeploymentTimeoutInSeconds: this.input.deploymentConfig?.robotDeploymentTimeoutInSeconds,
            downloadConditionFile: {
              bucket: this.input.deploymentConfig?.downloadConditionFile?.bucket,
              key: this.input.deploymentConfig?.downloadConditionFile?.key,
              etag: this.input.deploymentConfig?.downloadConditionFile?.etag,
            },
          },
          clientRequestToken: this.input.clientRequestToken,
          fleet: this.input.fleet,
          deploymentApplicationConfigs: this.input.deploymentApplicationConfigs,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDeploymentJob.deploymentConfig.downloadConditionFile.etag', props);
    return resource.getResponseField('deploymentConfig.downloadConditionFile.etag') as unknown as string;
  }

}

export class RoboMakerCreateFleet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerCreateFleetRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateFleet.arn'),
        outputPath: 'arn',
        parameters: {
          name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateFleet.name'),
        outputPath: 'name',
        parameters: {
          name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateFleet.createdAt'),
        outputPath: 'createdAt',
        parameters: {
          name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createFleet',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateFleet.tags'),
        outputPath: 'tags',
        parameters: {
          name: this.input.name,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateFleet.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerCreateRobot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerCreateRobotRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRobot',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateRobot.arn'),
        outputPath: 'arn',
        parameters: {
          name: this.input.name,
          architecture: this.input.architecture,
          greengrassGroupId: this.input.greengrassGroupId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRobot.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRobot',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateRobot.name'),
        outputPath: 'name',
        parameters: {
          name: this.input.name,
          architecture: this.input.architecture,
          greengrassGroupId: this.input.greengrassGroupId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRobot.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRobot',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateRobot.createdAt'),
        outputPath: 'createdAt',
        parameters: {
          name: this.input.name,
          architecture: this.input.architecture,
          greengrassGroupId: this.input.greengrassGroupId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRobot.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

  public get greengrassGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRobot',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateRobot.greengrassGroupId'),
        outputPath: 'greengrassGroupId',
        parameters: {
          name: this.input.name,
          architecture: this.input.architecture,
          greengrassGroupId: this.input.greengrassGroupId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRobot.greengrassGroupId', props);
    return resource.getResponseField('greengrassGroupId') as unknown as string;
  }

  public get architecture(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRobot',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateRobot.architecture'),
        outputPath: 'architecture',
        parameters: {
          name: this.input.name,
          architecture: this.input.architecture,
          greengrassGroupId: this.input.greengrassGroupId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRobot.architecture', props);
    return resource.getResponseField('architecture') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRobot',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateRobot.tags'),
        outputPath: 'tags',
        parameters: {
          name: this.input.name,
          architecture: this.input.architecture,
          greengrassGroupId: this.input.greengrassGroupId,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRobot.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerCreateRobotApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerCreateRobotApplicationRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRobotApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateRobotApplication.arn'),
        outputPath: 'arn',
        parameters: {
          name: this.input.name,
          sources: this.input.sources,
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRobotApplication.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRobotApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateRobotApplication.name'),
        outputPath: 'name',
        parameters: {
          name: this.input.name,
          sources: this.input.sources,
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRobotApplication.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRobotApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateRobotApplication.version'),
        outputPath: 'version',
        parameters: {
          name: this.input.name,
          sources: this.input.sources,
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRobotApplication.version', props);
    return resource.getResponseField('version') as unknown as string;
  }

  public get sources(): shapes.RoboMakerSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRobotApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateRobotApplication.sources'),
        outputPath: 'sources',
        parameters: {
          name: this.input.name,
          sources: this.input.sources,
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRobotApplication.sources', props);
    return resource.getResponseField('sources') as unknown as shapes.RoboMakerSource[];
  }

  public get robotSoftwareSuite(): RoboMakerCreateRobotApplicationRobotSoftwareSuite {
    return new RoboMakerCreateRobotApplicationRobotSoftwareSuite(this, 'RobotSoftwareSuite', this.__resources, this.input);
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRobotApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateRobotApplication.lastUpdatedAt'),
        outputPath: 'lastUpdatedAt',
        parameters: {
          name: this.input.name,
          sources: this.input.sources,
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRobotApplication.lastUpdatedAt', props);
    return resource.getResponseField('lastUpdatedAt') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRobotApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateRobotApplication.revisionId'),
        outputPath: 'revisionId',
        parameters: {
          name: this.input.name,
          sources: this.input.sources,
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRobotApplication.revisionId', props);
    return resource.getResponseField('revisionId') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRobotApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateRobotApplication.tags'),
        outputPath: 'tags',
        parameters: {
          name: this.input.name,
          sources: this.input.sources,
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRobotApplication.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerCreateRobotApplicationRobotSoftwareSuite extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerCreateRobotApplicationRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRobotApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateRobotApplication.robotSoftwareSuite.name'),
        outputPath: 'robotSoftwareSuite.name',
        parameters: {
          name: this.input.name,
          sources: this.input.sources,
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRobotApplication.robotSoftwareSuite.name', props);
    return resource.getResponseField('robotSoftwareSuite.name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRobotApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateRobotApplication.robotSoftwareSuite.version'),
        outputPath: 'robotSoftwareSuite.version',
        parameters: {
          name: this.input.name,
          sources: this.input.sources,
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRobotApplication.robotSoftwareSuite.version', props);
    return resource.getResponseField('robotSoftwareSuite.version') as unknown as string;
  }

}

export class RoboMakerCreateRobotApplicationVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerCreateRobotApplicationVersionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRobotApplicationVersion',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateRobotApplicationVersion.arn'),
        outputPath: 'arn',
        parameters: {
          application: this.input.application,
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRobotApplicationVersion.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRobotApplicationVersion',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateRobotApplicationVersion.name'),
        outputPath: 'name',
        parameters: {
          application: this.input.application,
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRobotApplicationVersion.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRobotApplicationVersion',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateRobotApplicationVersion.version'),
        outputPath: 'version',
        parameters: {
          application: this.input.application,
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRobotApplicationVersion.version', props);
    return resource.getResponseField('version') as unknown as string;
  }

  public get sources(): shapes.RoboMakerSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRobotApplicationVersion',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateRobotApplicationVersion.sources'),
        outputPath: 'sources',
        parameters: {
          application: this.input.application,
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRobotApplicationVersion.sources', props);
    return resource.getResponseField('sources') as unknown as shapes.RoboMakerSource[];
  }

  public get robotSoftwareSuite(): RoboMakerCreateRobotApplicationVersionRobotSoftwareSuite {
    return new RoboMakerCreateRobotApplicationVersionRobotSoftwareSuite(this, 'RobotSoftwareSuite', this.__resources, this.input);
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRobotApplicationVersion',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateRobotApplicationVersion.lastUpdatedAt'),
        outputPath: 'lastUpdatedAt',
        parameters: {
          application: this.input.application,
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRobotApplicationVersion.lastUpdatedAt', props);
    return resource.getResponseField('lastUpdatedAt') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRobotApplicationVersion',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateRobotApplicationVersion.revisionId'),
        outputPath: 'revisionId',
        parameters: {
          application: this.input.application,
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRobotApplicationVersion.revisionId', props);
    return resource.getResponseField('revisionId') as unknown as string;
  }

}

export class RoboMakerCreateRobotApplicationVersionRobotSoftwareSuite extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerCreateRobotApplicationVersionRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRobotApplicationVersion',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateRobotApplicationVersion.robotSoftwareSuite.name'),
        outputPath: 'robotSoftwareSuite.name',
        parameters: {
          application: this.input.application,
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRobotApplicationVersion.robotSoftwareSuite.name', props);
    return resource.getResponseField('robotSoftwareSuite.name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRobotApplicationVersion',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateRobotApplicationVersion.robotSoftwareSuite.version'),
        outputPath: 'robotSoftwareSuite.version',
        parameters: {
          application: this.input.application,
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRobotApplicationVersion.robotSoftwareSuite.version', props);
    return resource.getResponseField('robotSoftwareSuite.version') as unknown as string;
  }

}

export class RoboMakerCreateSimulationApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerCreateSimulationApplicationRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationApplication.arn'),
        outputPath: 'arn',
        parameters: {
          name: this.input.name,
          sources: this.input.sources,
          simulationSoftwareSuite: {
            name: this.input.simulationSoftwareSuite.name,
            version: this.input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.input.renderingEngine?.name,
            version: this.input.renderingEngine?.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationApplication.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationApplication.name'),
        outputPath: 'name',
        parameters: {
          name: this.input.name,
          sources: this.input.sources,
          simulationSoftwareSuite: {
            name: this.input.simulationSoftwareSuite.name,
            version: this.input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.input.renderingEngine?.name,
            version: this.input.renderingEngine?.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationApplication.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationApplication.version'),
        outputPath: 'version',
        parameters: {
          name: this.input.name,
          sources: this.input.sources,
          simulationSoftwareSuite: {
            name: this.input.simulationSoftwareSuite.name,
            version: this.input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.input.renderingEngine?.name,
            version: this.input.renderingEngine?.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationApplication.version', props);
    return resource.getResponseField('version') as unknown as string;
  }

  public get sources(): shapes.RoboMakerSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationApplication.sources'),
        outputPath: 'sources',
        parameters: {
          name: this.input.name,
          sources: this.input.sources,
          simulationSoftwareSuite: {
            name: this.input.simulationSoftwareSuite.name,
            version: this.input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.input.renderingEngine?.name,
            version: this.input.renderingEngine?.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationApplication.sources', props);
    return resource.getResponseField('sources') as unknown as shapes.RoboMakerSource[];
  }

  public get simulationSoftwareSuite(): RoboMakerCreateSimulationApplicationSimulationSoftwareSuite {
    return new RoboMakerCreateSimulationApplicationSimulationSoftwareSuite(this, 'SimulationSoftwareSuite', this.__resources, this.input);
  }

  public get robotSoftwareSuite(): RoboMakerCreateSimulationApplicationRobotSoftwareSuite {
    return new RoboMakerCreateSimulationApplicationRobotSoftwareSuite(this, 'RobotSoftwareSuite', this.__resources, this.input);
  }

  public get renderingEngine(): RoboMakerCreateSimulationApplicationRenderingEngine {
    return new RoboMakerCreateSimulationApplicationRenderingEngine(this, 'RenderingEngine', this.__resources, this.input);
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationApplication.lastUpdatedAt'),
        outputPath: 'lastUpdatedAt',
        parameters: {
          name: this.input.name,
          sources: this.input.sources,
          simulationSoftwareSuite: {
            name: this.input.simulationSoftwareSuite.name,
            version: this.input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.input.renderingEngine?.name,
            version: this.input.renderingEngine?.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationApplication.lastUpdatedAt', props);
    return resource.getResponseField('lastUpdatedAt') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationApplication.revisionId'),
        outputPath: 'revisionId',
        parameters: {
          name: this.input.name,
          sources: this.input.sources,
          simulationSoftwareSuite: {
            name: this.input.simulationSoftwareSuite.name,
            version: this.input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.input.renderingEngine?.name,
            version: this.input.renderingEngine?.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationApplication.revisionId', props);
    return resource.getResponseField('revisionId') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationApplication.tags'),
        outputPath: 'tags',
        parameters: {
          name: this.input.name,
          sources: this.input.sources,
          simulationSoftwareSuite: {
            name: this.input.simulationSoftwareSuite.name,
            version: this.input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.input.renderingEngine?.name,
            version: this.input.renderingEngine?.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationApplication.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerCreateSimulationApplicationSimulationSoftwareSuite extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerCreateSimulationApplicationRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationApplication.simulationSoftwareSuite.name'),
        outputPath: 'simulationSoftwareSuite.name',
        parameters: {
          name: this.input.name,
          sources: this.input.sources,
          simulationSoftwareSuite: {
            name: this.input.simulationSoftwareSuite.name,
            version: this.input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.input.renderingEngine?.name,
            version: this.input.renderingEngine?.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationApplication.simulationSoftwareSuite.name', props);
    return resource.getResponseField('simulationSoftwareSuite.name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationApplication.simulationSoftwareSuite.version'),
        outputPath: 'simulationSoftwareSuite.version',
        parameters: {
          name: this.input.name,
          sources: this.input.sources,
          simulationSoftwareSuite: {
            name: this.input.simulationSoftwareSuite.name,
            version: this.input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.input.renderingEngine?.name,
            version: this.input.renderingEngine?.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationApplication.simulationSoftwareSuite.version', props);
    return resource.getResponseField('simulationSoftwareSuite.version') as unknown as string;
  }

}

export class RoboMakerCreateSimulationApplicationRobotSoftwareSuite extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerCreateSimulationApplicationRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationApplication.robotSoftwareSuite.name'),
        outputPath: 'robotSoftwareSuite.name',
        parameters: {
          name: this.input.name,
          sources: this.input.sources,
          simulationSoftwareSuite: {
            name: this.input.simulationSoftwareSuite.name,
            version: this.input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.input.renderingEngine?.name,
            version: this.input.renderingEngine?.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationApplication.robotSoftwareSuite.name', props);
    return resource.getResponseField('robotSoftwareSuite.name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationApplication.robotSoftwareSuite.version'),
        outputPath: 'robotSoftwareSuite.version',
        parameters: {
          name: this.input.name,
          sources: this.input.sources,
          simulationSoftwareSuite: {
            name: this.input.simulationSoftwareSuite.name,
            version: this.input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.input.renderingEngine?.name,
            version: this.input.renderingEngine?.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationApplication.robotSoftwareSuite.version', props);
    return resource.getResponseField('robotSoftwareSuite.version') as unknown as string;
  }

}

export class RoboMakerCreateSimulationApplicationRenderingEngine extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerCreateSimulationApplicationRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationApplication.renderingEngine.name'),
        outputPath: 'renderingEngine.name',
        parameters: {
          name: this.input.name,
          sources: this.input.sources,
          simulationSoftwareSuite: {
            name: this.input.simulationSoftwareSuite.name,
            version: this.input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.input.renderingEngine?.name,
            version: this.input.renderingEngine?.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationApplication.renderingEngine.name', props);
    return resource.getResponseField('renderingEngine.name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationApplication.renderingEngine.version'),
        outputPath: 'renderingEngine.version',
        parameters: {
          name: this.input.name,
          sources: this.input.sources,
          simulationSoftwareSuite: {
            name: this.input.simulationSoftwareSuite.name,
            version: this.input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.input.renderingEngine?.name,
            version: this.input.renderingEngine?.version,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationApplication.renderingEngine.version', props);
    return resource.getResponseField('renderingEngine.version') as unknown as string;
  }

}

export class RoboMakerCreateSimulationApplicationVersion extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerCreateSimulationApplicationVersionRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationApplicationVersion',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationApplicationVersion.arn'),
        outputPath: 'arn',
        parameters: {
          application: this.input.application,
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationApplicationVersion.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationApplicationVersion',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationApplicationVersion.name'),
        outputPath: 'name',
        parameters: {
          application: this.input.application,
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationApplicationVersion.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationApplicationVersion',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationApplicationVersion.version'),
        outputPath: 'version',
        parameters: {
          application: this.input.application,
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationApplicationVersion.version', props);
    return resource.getResponseField('version') as unknown as string;
  }

  public get sources(): shapes.RoboMakerSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationApplicationVersion',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationApplicationVersion.sources'),
        outputPath: 'sources',
        parameters: {
          application: this.input.application,
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationApplicationVersion.sources', props);
    return resource.getResponseField('sources') as unknown as shapes.RoboMakerSource[];
  }

  public get simulationSoftwareSuite(): RoboMakerCreateSimulationApplicationVersionSimulationSoftwareSuite {
    return new RoboMakerCreateSimulationApplicationVersionSimulationSoftwareSuite(this, 'SimulationSoftwareSuite', this.__resources, this.input);
  }

  public get robotSoftwareSuite(): RoboMakerCreateSimulationApplicationVersionRobotSoftwareSuite {
    return new RoboMakerCreateSimulationApplicationVersionRobotSoftwareSuite(this, 'RobotSoftwareSuite', this.__resources, this.input);
  }

  public get renderingEngine(): RoboMakerCreateSimulationApplicationVersionRenderingEngine {
    return new RoboMakerCreateSimulationApplicationVersionRenderingEngine(this, 'RenderingEngine', this.__resources, this.input);
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationApplicationVersion',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationApplicationVersion.lastUpdatedAt'),
        outputPath: 'lastUpdatedAt',
        parameters: {
          application: this.input.application,
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationApplicationVersion.lastUpdatedAt', props);
    return resource.getResponseField('lastUpdatedAt') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationApplicationVersion',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationApplicationVersion.revisionId'),
        outputPath: 'revisionId',
        parameters: {
          application: this.input.application,
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationApplicationVersion.revisionId', props);
    return resource.getResponseField('revisionId') as unknown as string;
  }

}

export class RoboMakerCreateSimulationApplicationVersionSimulationSoftwareSuite extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerCreateSimulationApplicationVersionRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationApplicationVersion',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationApplicationVersion.simulationSoftwareSuite.name'),
        outputPath: 'simulationSoftwareSuite.name',
        parameters: {
          application: this.input.application,
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationApplicationVersion.simulationSoftwareSuite.name', props);
    return resource.getResponseField('simulationSoftwareSuite.name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationApplicationVersion',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationApplicationVersion.simulationSoftwareSuite.version'),
        outputPath: 'simulationSoftwareSuite.version',
        parameters: {
          application: this.input.application,
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationApplicationVersion.simulationSoftwareSuite.version', props);
    return resource.getResponseField('simulationSoftwareSuite.version') as unknown as string;
  }

}

export class RoboMakerCreateSimulationApplicationVersionRobotSoftwareSuite extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerCreateSimulationApplicationVersionRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationApplicationVersion',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationApplicationVersion.robotSoftwareSuite.name'),
        outputPath: 'robotSoftwareSuite.name',
        parameters: {
          application: this.input.application,
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationApplicationVersion.robotSoftwareSuite.name', props);
    return resource.getResponseField('robotSoftwareSuite.name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationApplicationVersion',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationApplicationVersion.robotSoftwareSuite.version'),
        outputPath: 'robotSoftwareSuite.version',
        parameters: {
          application: this.input.application,
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationApplicationVersion.robotSoftwareSuite.version', props);
    return resource.getResponseField('robotSoftwareSuite.version') as unknown as string;
  }

}

export class RoboMakerCreateSimulationApplicationVersionRenderingEngine extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerCreateSimulationApplicationVersionRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationApplicationVersion',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationApplicationVersion.renderingEngine.name'),
        outputPath: 'renderingEngine.name',
        parameters: {
          application: this.input.application,
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationApplicationVersion.renderingEngine.name', props);
    return resource.getResponseField('renderingEngine.name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationApplicationVersion',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationApplicationVersion.renderingEngine.version'),
        outputPath: 'renderingEngine.version',
        parameters: {
          application: this.input.application,
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationApplicationVersion.renderingEngine.version', props);
    return resource.getResponseField('renderingEngine.version') as unknown as string;
  }

}

export class RoboMakerCreateSimulationJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerCreateSimulationJobRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationJob.arn'),
        outputPath: 'arn',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.input.outputLocation?.s3Bucket,
            s3Prefix: this.input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.input.maxJobDurationInSeconds,
          iamRole: this.input.iamRole,
          failureBehavior: this.input.failureBehavior,
          robotApplications: this.input.robotApplications,
          simulationApplications: this.input.simulationApplications,
          dataSources: this.input.dataSources,
          tags: this.input.tags,
          vpcConfig: {
            subnets: this.input.vpcConfig?.subnets,
            securityGroups: this.input.vpcConfig?.securityGroups,
            assignPublicIp: this.input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationJob.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationJob.status'),
        outputPath: 'status',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.input.outputLocation?.s3Bucket,
            s3Prefix: this.input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.input.maxJobDurationInSeconds,
          iamRole: this.input.iamRole,
          failureBehavior: this.input.failureBehavior,
          robotApplications: this.input.robotApplications,
          simulationApplications: this.input.simulationApplications,
          dataSources: this.input.dataSources,
          tags: this.input.tags,
          vpcConfig: {
            subnets: this.input.vpcConfig?.subnets,
            securityGroups: this.input.vpcConfig?.securityGroups,
            assignPublicIp: this.input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationJob.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get lastStartedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationJob.lastStartedAt'),
        outputPath: 'lastStartedAt',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.input.outputLocation?.s3Bucket,
            s3Prefix: this.input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.input.maxJobDurationInSeconds,
          iamRole: this.input.iamRole,
          failureBehavior: this.input.failureBehavior,
          robotApplications: this.input.robotApplications,
          simulationApplications: this.input.simulationApplications,
          dataSources: this.input.dataSources,
          tags: this.input.tags,
          vpcConfig: {
            subnets: this.input.vpcConfig?.subnets,
            securityGroups: this.input.vpcConfig?.securityGroups,
            assignPublicIp: this.input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationJob.lastStartedAt', props);
    return resource.getResponseField('lastStartedAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationJob.lastUpdatedAt'),
        outputPath: 'lastUpdatedAt',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.input.outputLocation?.s3Bucket,
            s3Prefix: this.input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.input.maxJobDurationInSeconds,
          iamRole: this.input.iamRole,
          failureBehavior: this.input.failureBehavior,
          robotApplications: this.input.robotApplications,
          simulationApplications: this.input.simulationApplications,
          dataSources: this.input.dataSources,
          tags: this.input.tags,
          vpcConfig: {
            subnets: this.input.vpcConfig?.subnets,
            securityGroups: this.input.vpcConfig?.securityGroups,
            assignPublicIp: this.input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationJob.lastUpdatedAt', props);
    return resource.getResponseField('lastUpdatedAt') as unknown as string;
  }

  public get failureBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationJob.failureBehavior'),
        outputPath: 'failureBehavior',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.input.outputLocation?.s3Bucket,
            s3Prefix: this.input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.input.maxJobDurationInSeconds,
          iamRole: this.input.iamRole,
          failureBehavior: this.input.failureBehavior,
          robotApplications: this.input.robotApplications,
          simulationApplications: this.input.simulationApplications,
          dataSources: this.input.dataSources,
          tags: this.input.tags,
          vpcConfig: {
            subnets: this.input.vpcConfig?.subnets,
            securityGroups: this.input.vpcConfig?.securityGroups,
            assignPublicIp: this.input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationJob.failureBehavior', props);
    return resource.getResponseField('failureBehavior') as unknown as string;
  }

  public get failureCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationJob.failureCode'),
        outputPath: 'failureCode',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.input.outputLocation?.s3Bucket,
            s3Prefix: this.input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.input.maxJobDurationInSeconds,
          iamRole: this.input.iamRole,
          failureBehavior: this.input.failureBehavior,
          robotApplications: this.input.robotApplications,
          simulationApplications: this.input.simulationApplications,
          dataSources: this.input.dataSources,
          tags: this.input.tags,
          vpcConfig: {
            subnets: this.input.vpcConfig?.subnets,
            securityGroups: this.input.vpcConfig?.securityGroups,
            assignPublicIp: this.input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationJob.failureCode', props);
    return resource.getResponseField('failureCode') as unknown as string;
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationJob.clientRequestToken'),
        outputPath: 'clientRequestToken',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.input.outputLocation?.s3Bucket,
            s3Prefix: this.input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.input.maxJobDurationInSeconds,
          iamRole: this.input.iamRole,
          failureBehavior: this.input.failureBehavior,
          robotApplications: this.input.robotApplications,
          simulationApplications: this.input.simulationApplications,
          dataSources: this.input.dataSources,
          tags: this.input.tags,
          vpcConfig: {
            subnets: this.input.vpcConfig?.subnets,
            securityGroups: this.input.vpcConfig?.securityGroups,
            assignPublicIp: this.input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationJob.clientRequestToken', props);
    return resource.getResponseField('clientRequestToken') as unknown as string;
  }

  public get outputLocation(): RoboMakerCreateSimulationJobOutputLocation {
    return new RoboMakerCreateSimulationJobOutputLocation(this, 'OutputLocation', this.__resources, this.input);
  }

  public get loggingConfig(): RoboMakerCreateSimulationJobLoggingConfig {
    return new RoboMakerCreateSimulationJobLoggingConfig(this, 'LoggingConfig', this.__resources, this.input);
  }

  public get maxJobDurationInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationJob.maxJobDurationInSeconds'),
        outputPath: 'maxJobDurationInSeconds',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.input.outputLocation?.s3Bucket,
            s3Prefix: this.input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.input.maxJobDurationInSeconds,
          iamRole: this.input.iamRole,
          failureBehavior: this.input.failureBehavior,
          robotApplications: this.input.robotApplications,
          simulationApplications: this.input.simulationApplications,
          dataSources: this.input.dataSources,
          tags: this.input.tags,
          vpcConfig: {
            subnets: this.input.vpcConfig?.subnets,
            securityGroups: this.input.vpcConfig?.securityGroups,
            assignPublicIp: this.input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationJob.maxJobDurationInSeconds', props);
    return resource.getResponseField('maxJobDurationInSeconds') as unknown as number;
  }

  public get simulationTimeMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationJob.simulationTimeMillis'),
        outputPath: 'simulationTimeMillis',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.input.outputLocation?.s3Bucket,
            s3Prefix: this.input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.input.maxJobDurationInSeconds,
          iamRole: this.input.iamRole,
          failureBehavior: this.input.failureBehavior,
          robotApplications: this.input.robotApplications,
          simulationApplications: this.input.simulationApplications,
          dataSources: this.input.dataSources,
          tags: this.input.tags,
          vpcConfig: {
            subnets: this.input.vpcConfig?.subnets,
            securityGroups: this.input.vpcConfig?.securityGroups,
            assignPublicIp: this.input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationJob.simulationTimeMillis', props);
    return resource.getResponseField('simulationTimeMillis') as unknown as number;
  }

  public get iamRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationJob.iamRole'),
        outputPath: 'iamRole',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.input.outputLocation?.s3Bucket,
            s3Prefix: this.input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.input.maxJobDurationInSeconds,
          iamRole: this.input.iamRole,
          failureBehavior: this.input.failureBehavior,
          robotApplications: this.input.robotApplications,
          simulationApplications: this.input.simulationApplications,
          dataSources: this.input.dataSources,
          tags: this.input.tags,
          vpcConfig: {
            subnets: this.input.vpcConfig?.subnets,
            securityGroups: this.input.vpcConfig?.securityGroups,
            assignPublicIp: this.input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationJob.iamRole', props);
    return resource.getResponseField('iamRole') as unknown as string;
  }

  public get robotApplications(): shapes.RoboMakerRobotApplicationConfig[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationJob.robotApplications'),
        outputPath: 'robotApplications',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.input.outputLocation?.s3Bucket,
            s3Prefix: this.input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.input.maxJobDurationInSeconds,
          iamRole: this.input.iamRole,
          failureBehavior: this.input.failureBehavior,
          robotApplications: this.input.robotApplications,
          simulationApplications: this.input.simulationApplications,
          dataSources: this.input.dataSources,
          tags: this.input.tags,
          vpcConfig: {
            subnets: this.input.vpcConfig?.subnets,
            securityGroups: this.input.vpcConfig?.securityGroups,
            assignPublicIp: this.input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationJob.robotApplications', props);
    return resource.getResponseField('robotApplications') as unknown as shapes.RoboMakerRobotApplicationConfig[];
  }

  public get simulationApplications(): shapes.RoboMakerSimulationApplicationConfig[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationJob.simulationApplications'),
        outputPath: 'simulationApplications',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.input.outputLocation?.s3Bucket,
            s3Prefix: this.input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.input.maxJobDurationInSeconds,
          iamRole: this.input.iamRole,
          failureBehavior: this.input.failureBehavior,
          robotApplications: this.input.robotApplications,
          simulationApplications: this.input.simulationApplications,
          dataSources: this.input.dataSources,
          tags: this.input.tags,
          vpcConfig: {
            subnets: this.input.vpcConfig?.subnets,
            securityGroups: this.input.vpcConfig?.securityGroups,
            assignPublicIp: this.input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationJob.simulationApplications', props);
    return resource.getResponseField('simulationApplications') as unknown as shapes.RoboMakerSimulationApplicationConfig[];
  }

  public get dataSources(): shapes.RoboMakerDataSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationJob.dataSources'),
        outputPath: 'dataSources',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.input.outputLocation?.s3Bucket,
            s3Prefix: this.input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.input.maxJobDurationInSeconds,
          iamRole: this.input.iamRole,
          failureBehavior: this.input.failureBehavior,
          robotApplications: this.input.robotApplications,
          simulationApplications: this.input.simulationApplications,
          dataSources: this.input.dataSources,
          tags: this.input.tags,
          vpcConfig: {
            subnets: this.input.vpcConfig?.subnets,
            securityGroups: this.input.vpcConfig?.securityGroups,
            assignPublicIp: this.input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationJob.dataSources', props);
    return resource.getResponseField('dataSources') as unknown as shapes.RoboMakerDataSource[];
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationJob.tags'),
        outputPath: 'tags',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.input.outputLocation?.s3Bucket,
            s3Prefix: this.input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.input.maxJobDurationInSeconds,
          iamRole: this.input.iamRole,
          failureBehavior: this.input.failureBehavior,
          robotApplications: this.input.robotApplications,
          simulationApplications: this.input.simulationApplications,
          dataSources: this.input.dataSources,
          tags: this.input.tags,
          vpcConfig: {
            subnets: this.input.vpcConfig?.subnets,
            securityGroups: this.input.vpcConfig?.securityGroups,
            assignPublicIp: this.input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationJob.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get vpcConfig(): RoboMakerCreateSimulationJobVpcConfig {
    return new RoboMakerCreateSimulationJobVpcConfig(this, 'VpcConfig', this.__resources, this.input);
  }

  public get compute(): RoboMakerCreateSimulationJobCompute {
    return new RoboMakerCreateSimulationJobCompute(this, 'Compute', this.__resources, this.input);
  }

}

export class RoboMakerCreateSimulationJobOutputLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerCreateSimulationJobRequest) {
    super(scope, id);
  }

  public get s3Bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationJob.outputLocation.s3Bucket'),
        outputPath: 'outputLocation.s3Bucket',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.input.outputLocation?.s3Bucket,
            s3Prefix: this.input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.input.maxJobDurationInSeconds,
          iamRole: this.input.iamRole,
          failureBehavior: this.input.failureBehavior,
          robotApplications: this.input.robotApplications,
          simulationApplications: this.input.simulationApplications,
          dataSources: this.input.dataSources,
          tags: this.input.tags,
          vpcConfig: {
            subnets: this.input.vpcConfig?.subnets,
            securityGroups: this.input.vpcConfig?.securityGroups,
            assignPublicIp: this.input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationJob.outputLocation.s3Bucket', props);
    return resource.getResponseField('outputLocation.s3Bucket') as unknown as string;
  }

  public get s3Prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationJob.outputLocation.s3Prefix'),
        outputPath: 'outputLocation.s3Prefix',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.input.outputLocation?.s3Bucket,
            s3Prefix: this.input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.input.maxJobDurationInSeconds,
          iamRole: this.input.iamRole,
          failureBehavior: this.input.failureBehavior,
          robotApplications: this.input.robotApplications,
          simulationApplications: this.input.simulationApplications,
          dataSources: this.input.dataSources,
          tags: this.input.tags,
          vpcConfig: {
            subnets: this.input.vpcConfig?.subnets,
            securityGroups: this.input.vpcConfig?.securityGroups,
            assignPublicIp: this.input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationJob.outputLocation.s3Prefix', props);
    return resource.getResponseField('outputLocation.s3Prefix') as unknown as string;
  }

}

export class RoboMakerCreateSimulationJobLoggingConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerCreateSimulationJobRequest) {
    super(scope, id);
  }

  public get recordAllRosTopics(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationJob.loggingConfig.recordAllRosTopics'),
        outputPath: 'loggingConfig.recordAllRosTopics',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.input.outputLocation?.s3Bucket,
            s3Prefix: this.input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.input.maxJobDurationInSeconds,
          iamRole: this.input.iamRole,
          failureBehavior: this.input.failureBehavior,
          robotApplications: this.input.robotApplications,
          simulationApplications: this.input.simulationApplications,
          dataSources: this.input.dataSources,
          tags: this.input.tags,
          vpcConfig: {
            subnets: this.input.vpcConfig?.subnets,
            securityGroups: this.input.vpcConfig?.securityGroups,
            assignPublicIp: this.input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationJob.loggingConfig.recordAllRosTopics', props);
    return resource.getResponseField('loggingConfig.recordAllRosTopics') as unknown as boolean;
  }

}

export class RoboMakerCreateSimulationJobVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerCreateSimulationJobRequest) {
    super(scope, id);
  }

  public get subnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationJob.vpcConfig.subnets'),
        outputPath: 'vpcConfig.subnets',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.input.outputLocation?.s3Bucket,
            s3Prefix: this.input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.input.maxJobDurationInSeconds,
          iamRole: this.input.iamRole,
          failureBehavior: this.input.failureBehavior,
          robotApplications: this.input.robotApplications,
          simulationApplications: this.input.simulationApplications,
          dataSources: this.input.dataSources,
          tags: this.input.tags,
          vpcConfig: {
            subnets: this.input.vpcConfig?.subnets,
            securityGroups: this.input.vpcConfig?.securityGroups,
            assignPublicIp: this.input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationJob.vpcConfig.subnets', props);
    return resource.getResponseField('vpcConfig.subnets') as unknown as string[];
  }

  public get securityGroups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationJob.vpcConfig.securityGroups'),
        outputPath: 'vpcConfig.securityGroups',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.input.outputLocation?.s3Bucket,
            s3Prefix: this.input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.input.maxJobDurationInSeconds,
          iamRole: this.input.iamRole,
          failureBehavior: this.input.failureBehavior,
          robotApplications: this.input.robotApplications,
          simulationApplications: this.input.simulationApplications,
          dataSources: this.input.dataSources,
          tags: this.input.tags,
          vpcConfig: {
            subnets: this.input.vpcConfig?.subnets,
            securityGroups: this.input.vpcConfig?.securityGroups,
            assignPublicIp: this.input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationJob.vpcConfig.securityGroups', props);
    return resource.getResponseField('vpcConfig.securityGroups') as unknown as string[];
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationJob.vpcConfig.vpcId'),
        outputPath: 'vpcConfig.vpcId',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.input.outputLocation?.s3Bucket,
            s3Prefix: this.input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.input.maxJobDurationInSeconds,
          iamRole: this.input.iamRole,
          failureBehavior: this.input.failureBehavior,
          robotApplications: this.input.robotApplications,
          simulationApplications: this.input.simulationApplications,
          dataSources: this.input.dataSources,
          tags: this.input.tags,
          vpcConfig: {
            subnets: this.input.vpcConfig?.subnets,
            securityGroups: this.input.vpcConfig?.securityGroups,
            assignPublicIp: this.input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationJob.vpcConfig.vpcId', props);
    return resource.getResponseField('vpcConfig.vpcId') as unknown as string;
  }

  public get assignPublicIp(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationJob.vpcConfig.assignPublicIp'),
        outputPath: 'vpcConfig.assignPublicIp',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.input.outputLocation?.s3Bucket,
            s3Prefix: this.input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.input.maxJobDurationInSeconds,
          iamRole: this.input.iamRole,
          failureBehavior: this.input.failureBehavior,
          robotApplications: this.input.robotApplications,
          simulationApplications: this.input.simulationApplications,
          dataSources: this.input.dataSources,
          tags: this.input.tags,
          vpcConfig: {
            subnets: this.input.vpcConfig?.subnets,
            securityGroups: this.input.vpcConfig?.securityGroups,
            assignPublicIp: this.input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationJob.vpcConfig.assignPublicIp', props);
    return resource.getResponseField('vpcConfig.assignPublicIp') as unknown as boolean;
  }

}

export class RoboMakerCreateSimulationJobCompute extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerCreateSimulationJobRequest) {
    super(scope, id);
  }

  public get simulationUnitLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateSimulationJob.compute.simulationUnitLimit'),
        outputPath: 'compute.simulationUnitLimit',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.input.outputLocation?.s3Bucket,
            s3Prefix: this.input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.input.maxJobDurationInSeconds,
          iamRole: this.input.iamRole,
          failureBehavior: this.input.failureBehavior,
          robotApplications: this.input.robotApplications,
          simulationApplications: this.input.simulationApplications,
          dataSources: this.input.dataSources,
          tags: this.input.tags,
          vpcConfig: {
            subnets: this.input.vpcConfig?.subnets,
            securityGroups: this.input.vpcConfig?.securityGroups,
            assignPublicIp: this.input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateSimulationJob.compute.simulationUnitLimit', props);
    return resource.getResponseField('compute.simulationUnitLimit') as unknown as number;
  }

}

export class RoboMakerCreateWorldExportJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerCreateWorldExportJobRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorldExportJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateWorldExportJob.arn'),
        outputPath: 'arn',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          worlds: this.input.worlds,
          outputLocation: {
            s3Bucket: this.input.outputLocation.s3Bucket,
            s3Prefix: this.input.outputLocation.s3Prefix,
          },
          iamRole: this.input.iamRole,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWorldExportJob.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorldExportJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateWorldExportJob.status'),
        outputPath: 'status',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          worlds: this.input.worlds,
          outputLocation: {
            s3Bucket: this.input.outputLocation.s3Bucket,
            s3Prefix: this.input.outputLocation.s3Prefix,
          },
          iamRole: this.input.iamRole,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWorldExportJob.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorldExportJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateWorldExportJob.createdAt'),
        outputPath: 'createdAt',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          worlds: this.input.worlds,
          outputLocation: {
            s3Bucket: this.input.outputLocation.s3Bucket,
            s3Prefix: this.input.outputLocation.s3Prefix,
          },
          iamRole: this.input.iamRole,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWorldExportJob.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

  public get failureCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorldExportJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateWorldExportJob.failureCode'),
        outputPath: 'failureCode',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          worlds: this.input.worlds,
          outputLocation: {
            s3Bucket: this.input.outputLocation.s3Bucket,
            s3Prefix: this.input.outputLocation.s3Prefix,
          },
          iamRole: this.input.iamRole,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWorldExportJob.failureCode', props);
    return resource.getResponseField('failureCode') as unknown as string;
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorldExportJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateWorldExportJob.clientRequestToken'),
        outputPath: 'clientRequestToken',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          worlds: this.input.worlds,
          outputLocation: {
            s3Bucket: this.input.outputLocation.s3Bucket,
            s3Prefix: this.input.outputLocation.s3Prefix,
          },
          iamRole: this.input.iamRole,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWorldExportJob.clientRequestToken', props);
    return resource.getResponseField('clientRequestToken') as unknown as string;
  }

  public get outputLocation(): RoboMakerCreateWorldExportJobOutputLocation {
    return new RoboMakerCreateWorldExportJobOutputLocation(this, 'OutputLocation', this.__resources, this.input);
  }

  public get iamRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorldExportJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateWorldExportJob.iamRole'),
        outputPath: 'iamRole',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          worlds: this.input.worlds,
          outputLocation: {
            s3Bucket: this.input.outputLocation.s3Bucket,
            s3Prefix: this.input.outputLocation.s3Prefix,
          },
          iamRole: this.input.iamRole,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWorldExportJob.iamRole', props);
    return resource.getResponseField('iamRole') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorldExportJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateWorldExportJob.tags'),
        outputPath: 'tags',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          worlds: this.input.worlds,
          outputLocation: {
            s3Bucket: this.input.outputLocation.s3Bucket,
            s3Prefix: this.input.outputLocation.s3Prefix,
          },
          iamRole: this.input.iamRole,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWorldExportJob.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerCreateWorldExportJobOutputLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerCreateWorldExportJobRequest) {
    super(scope, id);
  }

  public get s3Bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorldExportJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateWorldExportJob.outputLocation.s3Bucket'),
        outputPath: 'outputLocation.s3Bucket',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          worlds: this.input.worlds,
          outputLocation: {
            s3Bucket: this.input.outputLocation.s3Bucket,
            s3Prefix: this.input.outputLocation.s3Prefix,
          },
          iamRole: this.input.iamRole,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWorldExportJob.outputLocation.s3Bucket', props);
    return resource.getResponseField('outputLocation.s3Bucket') as unknown as string;
  }

  public get s3Prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorldExportJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateWorldExportJob.outputLocation.s3Prefix'),
        outputPath: 'outputLocation.s3Prefix',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          worlds: this.input.worlds,
          outputLocation: {
            s3Bucket: this.input.outputLocation.s3Bucket,
            s3Prefix: this.input.outputLocation.s3Prefix,
          },
          iamRole: this.input.iamRole,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWorldExportJob.outputLocation.s3Prefix', props);
    return resource.getResponseField('outputLocation.s3Prefix') as unknown as string;
  }

}

export class RoboMakerCreateWorldGenerationJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerCreateWorldGenerationJobRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorldGenerationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateWorldGenerationJob.arn'),
        outputPath: 'arn',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          template: this.input.template,
          worldCount: {
            floorplanCount: this.input.worldCount.floorplanCount,
            interiorCountPerFloorplan: this.input.worldCount.interiorCountPerFloorplan,
          },
          tags: this.input.tags,
          worldTags: this.input.worldTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWorldGenerationJob.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorldGenerationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateWorldGenerationJob.status'),
        outputPath: 'status',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          template: this.input.template,
          worldCount: {
            floorplanCount: this.input.worldCount.floorplanCount,
            interiorCountPerFloorplan: this.input.worldCount.interiorCountPerFloorplan,
          },
          tags: this.input.tags,
          worldTags: this.input.worldTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWorldGenerationJob.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorldGenerationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateWorldGenerationJob.createdAt'),
        outputPath: 'createdAt',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          template: this.input.template,
          worldCount: {
            floorplanCount: this.input.worldCount.floorplanCount,
            interiorCountPerFloorplan: this.input.worldCount.interiorCountPerFloorplan,
          },
          tags: this.input.tags,
          worldTags: this.input.worldTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWorldGenerationJob.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

  public get failureCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorldGenerationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateWorldGenerationJob.failureCode'),
        outputPath: 'failureCode',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          template: this.input.template,
          worldCount: {
            floorplanCount: this.input.worldCount.floorplanCount,
            interiorCountPerFloorplan: this.input.worldCount.interiorCountPerFloorplan,
          },
          tags: this.input.tags,
          worldTags: this.input.worldTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWorldGenerationJob.failureCode', props);
    return resource.getResponseField('failureCode') as unknown as string;
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorldGenerationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateWorldGenerationJob.clientRequestToken'),
        outputPath: 'clientRequestToken',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          template: this.input.template,
          worldCount: {
            floorplanCount: this.input.worldCount.floorplanCount,
            interiorCountPerFloorplan: this.input.worldCount.interiorCountPerFloorplan,
          },
          tags: this.input.tags,
          worldTags: this.input.worldTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWorldGenerationJob.clientRequestToken', props);
    return resource.getResponseField('clientRequestToken') as unknown as string;
  }

  public get template(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorldGenerationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateWorldGenerationJob.template'),
        outputPath: 'template',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          template: this.input.template,
          worldCount: {
            floorplanCount: this.input.worldCount.floorplanCount,
            interiorCountPerFloorplan: this.input.worldCount.interiorCountPerFloorplan,
          },
          tags: this.input.tags,
          worldTags: this.input.worldTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWorldGenerationJob.template', props);
    return resource.getResponseField('template') as unknown as string;
  }

  public get worldCount(): RoboMakerCreateWorldGenerationJobWorldCount {
    return new RoboMakerCreateWorldGenerationJobWorldCount(this, 'WorldCount', this.__resources, this.input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorldGenerationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateWorldGenerationJob.tags'),
        outputPath: 'tags',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          template: this.input.template,
          worldCount: {
            floorplanCount: this.input.worldCount.floorplanCount,
            interiorCountPerFloorplan: this.input.worldCount.interiorCountPerFloorplan,
          },
          tags: this.input.tags,
          worldTags: this.input.worldTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWorldGenerationJob.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get worldTags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorldGenerationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateWorldGenerationJob.worldTags'),
        outputPath: 'worldTags',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          template: this.input.template,
          worldCount: {
            floorplanCount: this.input.worldCount.floorplanCount,
            interiorCountPerFloorplan: this.input.worldCount.interiorCountPerFloorplan,
          },
          tags: this.input.tags,
          worldTags: this.input.worldTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWorldGenerationJob.worldTags', props);
    return resource.getResponseField('worldTags') as unknown as Record<string, string>;
  }

}

export class RoboMakerCreateWorldGenerationJobWorldCount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerCreateWorldGenerationJobRequest) {
    super(scope, id);
  }

  public get floorplanCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorldGenerationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateWorldGenerationJob.worldCount.floorplanCount'),
        outputPath: 'worldCount.floorplanCount',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          template: this.input.template,
          worldCount: {
            floorplanCount: this.input.worldCount.floorplanCount,
            interiorCountPerFloorplan: this.input.worldCount.interiorCountPerFloorplan,
          },
          tags: this.input.tags,
          worldTags: this.input.worldTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWorldGenerationJob.worldCount.floorplanCount', props);
    return resource.getResponseField('worldCount.floorplanCount') as unknown as number;
  }

  public get interiorCountPerFloorplan(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorldGenerationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateWorldGenerationJob.worldCount.interiorCountPerFloorplan'),
        outputPath: 'worldCount.interiorCountPerFloorplan',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          template: this.input.template,
          worldCount: {
            floorplanCount: this.input.worldCount.floorplanCount,
            interiorCountPerFloorplan: this.input.worldCount.interiorCountPerFloorplan,
          },
          tags: this.input.tags,
          worldTags: this.input.worldTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWorldGenerationJob.worldCount.interiorCountPerFloorplan', props);
    return resource.getResponseField('worldCount.interiorCountPerFloorplan') as unknown as number;
  }

}

export class RoboMakerCreateWorldTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerCreateWorldTemplateRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorldTemplate',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateWorldTemplate.arn'),
        outputPath: 'arn',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          name: this.input.name,
          templateBody: this.input.templateBody,
          templateLocation: {
            s3Bucket: this.input.templateLocation?.s3Bucket,
            s3Key: this.input.templateLocation?.s3Key,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWorldTemplate.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorldTemplate',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateWorldTemplate.clientRequestToken'),
        outputPath: 'clientRequestToken',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          name: this.input.name,
          templateBody: this.input.templateBody,
          templateLocation: {
            s3Bucket: this.input.templateLocation?.s3Bucket,
            s3Key: this.input.templateLocation?.s3Key,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWorldTemplate.clientRequestToken', props);
    return resource.getResponseField('clientRequestToken') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorldTemplate',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateWorldTemplate.createdAt'),
        outputPath: 'createdAt',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          name: this.input.name,
          templateBody: this.input.templateBody,
          templateLocation: {
            s3Bucket: this.input.templateLocation?.s3Bucket,
            s3Key: this.input.templateLocation?.s3Key,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWorldTemplate.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorldTemplate',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateWorldTemplate.name'),
        outputPath: 'name',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          name: this.input.name,
          templateBody: this.input.templateBody,
          templateLocation: {
            s3Bucket: this.input.templateLocation?.s3Bucket,
            s3Key: this.input.templateLocation?.s3Key,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWorldTemplate.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createWorldTemplate',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.CreateWorldTemplate.tags'),
        outputPath: 'tags',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          name: this.input.name,
          templateBody: this.input.templateBody,
          templateLocation: {
            s3Bucket: this.input.templateLocation?.s3Bucket,
            s3Key: this.input.templateLocation?.s3Key,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateWorldTemplate.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerDeregisterRobot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerDeregisterRobotRequest) {
    super(scope, id);
  }

  public get fleet(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterRobot',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DeregisterRobot.fleet'),
        outputPath: 'fleet',
        parameters: {
          fleet: this.input.fleet,
          robot: this.input.robot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterRobot.fleet', props);
    return resource.getResponseField('fleet') as unknown as string;
  }

  public get robot(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deregisterRobot',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DeregisterRobot.robot'),
        outputPath: 'robot',
        parameters: {
          fleet: this.input.fleet,
          robot: this.input.robot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeregisterRobot.robot', props);
    return resource.getResponseField('robot') as unknown as string;
  }

}

export class RoboMakerDescribeDeploymentJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerDescribeDeploymentJobRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeDeploymentJob.arn'),
        outputPath: 'arn',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeploymentJob.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get fleet(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeDeploymentJob.fleet'),
        outputPath: 'fleet',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeploymentJob.fleet', props);
    return resource.getResponseField('fleet') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeDeploymentJob.status'),
        outputPath: 'status',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeploymentJob.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get deploymentConfig(): RoboMakerDescribeDeploymentJobDeploymentConfig {
    return new RoboMakerDescribeDeploymentJobDeploymentConfig(this, 'DeploymentConfig', this.__resources, this.input);
  }

  public get deploymentApplicationConfigs(): shapes.RoboMakerDeploymentApplicationConfig[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeDeploymentJob.deploymentApplicationConfigs'),
        outputPath: 'deploymentApplicationConfigs',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeploymentJob.deploymentApplicationConfigs', props);
    return resource.getResponseField('deploymentApplicationConfigs') as unknown as shapes.RoboMakerDeploymentApplicationConfig[];
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeDeploymentJob.failureReason'),
        outputPath: 'failureReason',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeploymentJob.failureReason', props);
    return resource.getResponseField('failureReason') as unknown as string;
  }

  public get failureCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeDeploymentJob.failureCode'),
        outputPath: 'failureCode',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeploymentJob.failureCode', props);
    return resource.getResponseField('failureCode') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeDeploymentJob.createdAt'),
        outputPath: 'createdAt',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeploymentJob.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

  public get robotDeploymentSummary(): shapes.RoboMakerRobotDeployment[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeDeploymentJob.robotDeploymentSummary'),
        outputPath: 'robotDeploymentSummary',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeploymentJob.robotDeploymentSummary', props);
    return resource.getResponseField('robotDeploymentSummary') as unknown as shapes.RoboMakerRobotDeployment[];
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeDeploymentJob.tags'),
        outputPath: 'tags',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeploymentJob.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerDescribeDeploymentJobDeploymentConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerDescribeDeploymentJobRequest) {
    super(scope, id);
  }

  public get concurrentDeploymentPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeDeploymentJob.deploymentConfig.concurrentDeploymentPercentage'),
        outputPath: 'deploymentConfig.concurrentDeploymentPercentage',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeploymentJob.deploymentConfig.concurrentDeploymentPercentage', props);
    return resource.getResponseField('deploymentConfig.concurrentDeploymentPercentage') as unknown as number;
  }

  public get failureThresholdPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeDeploymentJob.deploymentConfig.failureThresholdPercentage'),
        outputPath: 'deploymentConfig.failureThresholdPercentage',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeploymentJob.deploymentConfig.failureThresholdPercentage', props);
    return resource.getResponseField('deploymentConfig.failureThresholdPercentage') as unknown as number;
  }

  public get robotDeploymentTimeoutInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeDeploymentJob.deploymentConfig.robotDeploymentTimeoutInSeconds'),
        outputPath: 'deploymentConfig.robotDeploymentTimeoutInSeconds',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeploymentJob.deploymentConfig.robotDeploymentTimeoutInSeconds', props);
    return resource.getResponseField('deploymentConfig.robotDeploymentTimeoutInSeconds') as unknown as number;
  }

  public get downloadConditionFile(): RoboMakerDescribeDeploymentJobDeploymentConfigDownloadConditionFile {
    return new RoboMakerDescribeDeploymentJobDeploymentConfigDownloadConditionFile(this, 'DownloadConditionFile', this.__resources, this.input);
  }

}

export class RoboMakerDescribeDeploymentJobDeploymentConfigDownloadConditionFile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerDescribeDeploymentJobRequest) {
    super(scope, id);
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeDeploymentJob.deploymentConfig.downloadConditionFile.bucket'),
        outputPath: 'deploymentConfig.downloadConditionFile.bucket',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeploymentJob.deploymentConfig.downloadConditionFile.bucket', props);
    return resource.getResponseField('deploymentConfig.downloadConditionFile.bucket') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeDeploymentJob.deploymentConfig.downloadConditionFile.key'),
        outputPath: 'deploymentConfig.downloadConditionFile.key',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeploymentJob.deploymentConfig.downloadConditionFile.key', props);
    return resource.getResponseField('deploymentConfig.downloadConditionFile.key') as unknown as string;
  }

  public get etag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeDeploymentJob.deploymentConfig.downloadConditionFile.etag'),
        outputPath: 'deploymentConfig.downloadConditionFile.etag',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDeploymentJob.deploymentConfig.downloadConditionFile.etag', props);
    return resource.getResponseField('deploymentConfig.downloadConditionFile.etag') as unknown as string;
  }

}

export class RoboMakerDescribeFleet extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerDescribeFleetRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFleet',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeFleet.name'),
        outputPath: 'name',
        parameters: {
          fleet: this.input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFleet.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFleet',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeFleet.arn'),
        outputPath: 'arn',
        parameters: {
          fleet: this.input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFleet.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get robots(): shapes.RoboMakerRobot[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFleet',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeFleet.robots'),
        outputPath: 'robots',
        parameters: {
          fleet: this.input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFleet.robots', props);
    return resource.getResponseField('robots') as unknown as shapes.RoboMakerRobot[];
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFleet',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeFleet.createdAt'),
        outputPath: 'createdAt',
        parameters: {
          fleet: this.input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFleet.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

  public get lastDeploymentStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFleet',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeFleet.lastDeploymentStatus'),
        outputPath: 'lastDeploymentStatus',
        parameters: {
          fleet: this.input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFleet.lastDeploymentStatus', props);
    return resource.getResponseField('lastDeploymentStatus') as unknown as string;
  }

  public get lastDeploymentJob(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFleet',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeFleet.lastDeploymentJob'),
        outputPath: 'lastDeploymentJob',
        parameters: {
          fleet: this.input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFleet.lastDeploymentJob', props);
    return resource.getResponseField('lastDeploymentJob') as unknown as string;
  }

  public get lastDeploymentTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFleet',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeFleet.lastDeploymentTime'),
        outputPath: 'lastDeploymentTime',
        parameters: {
          fleet: this.input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFleet.lastDeploymentTime', props);
    return resource.getResponseField('lastDeploymentTime') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeFleet',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeFleet.tags'),
        outputPath: 'tags',
        parameters: {
          fleet: this.input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeFleet.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerDescribeRobot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerDescribeRobotRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRobot',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeRobot.arn'),
        outputPath: 'arn',
        parameters: {
          robot: this.input.robot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRobot.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRobot',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeRobot.name'),
        outputPath: 'name',
        parameters: {
          robot: this.input.robot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRobot.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get fleetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRobot',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeRobot.fleetArn'),
        outputPath: 'fleetArn',
        parameters: {
          robot: this.input.robot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRobot.fleetArn', props);
    return resource.getResponseField('fleetArn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRobot',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeRobot.status'),
        outputPath: 'status',
        parameters: {
          robot: this.input.robot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRobot.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get greengrassGroupId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRobot',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeRobot.greengrassGroupId'),
        outputPath: 'greengrassGroupId',
        parameters: {
          robot: this.input.robot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRobot.greengrassGroupId', props);
    return resource.getResponseField('greengrassGroupId') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRobot',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeRobot.createdAt'),
        outputPath: 'createdAt',
        parameters: {
          robot: this.input.robot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRobot.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

  public get architecture(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRobot',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeRobot.architecture'),
        outputPath: 'architecture',
        parameters: {
          robot: this.input.robot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRobot.architecture', props);
    return resource.getResponseField('architecture') as unknown as string;
  }

  public get lastDeploymentJob(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRobot',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeRobot.lastDeploymentJob'),
        outputPath: 'lastDeploymentJob',
        parameters: {
          robot: this.input.robot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRobot.lastDeploymentJob', props);
    return resource.getResponseField('lastDeploymentJob') as unknown as string;
  }

  public get lastDeploymentTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRobot',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeRobot.lastDeploymentTime'),
        outputPath: 'lastDeploymentTime',
        parameters: {
          robot: this.input.robot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRobot.lastDeploymentTime', props);
    return resource.getResponseField('lastDeploymentTime') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRobot',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeRobot.tags'),
        outputPath: 'tags',
        parameters: {
          robot: this.input.robot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRobot.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerDescribeRobotApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerDescribeRobotApplicationRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRobotApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeRobotApplication.arn'),
        outputPath: 'arn',
        parameters: {
          application: this.input.application,
          applicationVersion: this.input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRobotApplication.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRobotApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeRobotApplication.name'),
        outputPath: 'name',
        parameters: {
          application: this.input.application,
          applicationVersion: this.input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRobotApplication.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRobotApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeRobotApplication.version'),
        outputPath: 'version',
        parameters: {
          application: this.input.application,
          applicationVersion: this.input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRobotApplication.version', props);
    return resource.getResponseField('version') as unknown as string;
  }

  public get sources(): shapes.RoboMakerSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRobotApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeRobotApplication.sources'),
        outputPath: 'sources',
        parameters: {
          application: this.input.application,
          applicationVersion: this.input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRobotApplication.sources', props);
    return resource.getResponseField('sources') as unknown as shapes.RoboMakerSource[];
  }

  public get robotSoftwareSuite(): RoboMakerDescribeRobotApplicationRobotSoftwareSuite {
    return new RoboMakerDescribeRobotApplicationRobotSoftwareSuite(this, 'RobotSoftwareSuite', this.__resources, this.input);
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRobotApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeRobotApplication.revisionId'),
        outputPath: 'revisionId',
        parameters: {
          application: this.input.application,
          applicationVersion: this.input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRobotApplication.revisionId', props);
    return resource.getResponseField('revisionId') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRobotApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeRobotApplication.lastUpdatedAt'),
        outputPath: 'lastUpdatedAt',
        parameters: {
          application: this.input.application,
          applicationVersion: this.input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRobotApplication.lastUpdatedAt', props);
    return resource.getResponseField('lastUpdatedAt') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRobotApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeRobotApplication.tags'),
        outputPath: 'tags',
        parameters: {
          application: this.input.application,
          applicationVersion: this.input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRobotApplication.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerDescribeRobotApplicationRobotSoftwareSuite extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerDescribeRobotApplicationRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRobotApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeRobotApplication.robotSoftwareSuite.name'),
        outputPath: 'robotSoftwareSuite.name',
        parameters: {
          application: this.input.application,
          applicationVersion: this.input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRobotApplication.robotSoftwareSuite.name', props);
    return resource.getResponseField('robotSoftwareSuite.name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeRobotApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeRobotApplication.robotSoftwareSuite.version'),
        outputPath: 'robotSoftwareSuite.version',
        parameters: {
          application: this.input.application,
          applicationVersion: this.input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeRobotApplication.robotSoftwareSuite.version', props);
    return resource.getResponseField('robotSoftwareSuite.version') as unknown as string;
  }

}

export class RoboMakerDescribeSimulationApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerDescribeSimulationApplicationRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationApplication.arn'),
        outputPath: 'arn',
        parameters: {
          application: this.input.application,
          applicationVersion: this.input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationApplication.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationApplication.name'),
        outputPath: 'name',
        parameters: {
          application: this.input.application,
          applicationVersion: this.input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationApplication.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationApplication.version'),
        outputPath: 'version',
        parameters: {
          application: this.input.application,
          applicationVersion: this.input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationApplication.version', props);
    return resource.getResponseField('version') as unknown as string;
  }

  public get sources(): shapes.RoboMakerSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationApplication.sources'),
        outputPath: 'sources',
        parameters: {
          application: this.input.application,
          applicationVersion: this.input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationApplication.sources', props);
    return resource.getResponseField('sources') as unknown as shapes.RoboMakerSource[];
  }

  public get simulationSoftwareSuite(): RoboMakerDescribeSimulationApplicationSimulationSoftwareSuite {
    return new RoboMakerDescribeSimulationApplicationSimulationSoftwareSuite(this, 'SimulationSoftwareSuite', this.__resources, this.input);
  }

  public get robotSoftwareSuite(): RoboMakerDescribeSimulationApplicationRobotSoftwareSuite {
    return new RoboMakerDescribeSimulationApplicationRobotSoftwareSuite(this, 'RobotSoftwareSuite', this.__resources, this.input);
  }

  public get renderingEngine(): RoboMakerDescribeSimulationApplicationRenderingEngine {
    return new RoboMakerDescribeSimulationApplicationRenderingEngine(this, 'RenderingEngine', this.__resources, this.input);
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationApplication.revisionId'),
        outputPath: 'revisionId',
        parameters: {
          application: this.input.application,
          applicationVersion: this.input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationApplication.revisionId', props);
    return resource.getResponseField('revisionId') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationApplication.lastUpdatedAt'),
        outputPath: 'lastUpdatedAt',
        parameters: {
          application: this.input.application,
          applicationVersion: this.input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationApplication.lastUpdatedAt', props);
    return resource.getResponseField('lastUpdatedAt') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationApplication.tags'),
        outputPath: 'tags',
        parameters: {
          application: this.input.application,
          applicationVersion: this.input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationApplication.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerDescribeSimulationApplicationSimulationSoftwareSuite extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerDescribeSimulationApplicationRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationApplication.simulationSoftwareSuite.name'),
        outputPath: 'simulationSoftwareSuite.name',
        parameters: {
          application: this.input.application,
          applicationVersion: this.input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationApplication.simulationSoftwareSuite.name', props);
    return resource.getResponseField('simulationSoftwareSuite.name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationApplication.simulationSoftwareSuite.version'),
        outputPath: 'simulationSoftwareSuite.version',
        parameters: {
          application: this.input.application,
          applicationVersion: this.input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationApplication.simulationSoftwareSuite.version', props);
    return resource.getResponseField('simulationSoftwareSuite.version') as unknown as string;
  }

}

export class RoboMakerDescribeSimulationApplicationRobotSoftwareSuite extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerDescribeSimulationApplicationRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationApplication.robotSoftwareSuite.name'),
        outputPath: 'robotSoftwareSuite.name',
        parameters: {
          application: this.input.application,
          applicationVersion: this.input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationApplication.robotSoftwareSuite.name', props);
    return resource.getResponseField('robotSoftwareSuite.name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationApplication.robotSoftwareSuite.version'),
        outputPath: 'robotSoftwareSuite.version',
        parameters: {
          application: this.input.application,
          applicationVersion: this.input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationApplication.robotSoftwareSuite.version', props);
    return resource.getResponseField('robotSoftwareSuite.version') as unknown as string;
  }

}

export class RoboMakerDescribeSimulationApplicationRenderingEngine extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerDescribeSimulationApplicationRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationApplication.renderingEngine.name'),
        outputPath: 'renderingEngine.name',
        parameters: {
          application: this.input.application,
          applicationVersion: this.input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationApplication.renderingEngine.name', props);
    return resource.getResponseField('renderingEngine.name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationApplication.renderingEngine.version'),
        outputPath: 'renderingEngine.version',
        parameters: {
          application: this.input.application,
          applicationVersion: this.input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationApplication.renderingEngine.version', props);
    return resource.getResponseField('renderingEngine.version') as unknown as string;
  }

}

export class RoboMakerDescribeSimulationJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerDescribeSimulationJobRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJob.arn'),
        outputPath: 'arn',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJob.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJob.name'),
        outputPath: 'name',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJob.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJob.status'),
        outputPath: 'status',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJob.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get lastStartedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJob.lastStartedAt'),
        outputPath: 'lastStartedAt',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJob.lastStartedAt', props);
    return resource.getResponseField('lastStartedAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJob.lastUpdatedAt'),
        outputPath: 'lastUpdatedAt',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJob.lastUpdatedAt', props);
    return resource.getResponseField('lastUpdatedAt') as unknown as string;
  }

  public get failureBehavior(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJob.failureBehavior'),
        outputPath: 'failureBehavior',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJob.failureBehavior', props);
    return resource.getResponseField('failureBehavior') as unknown as string;
  }

  public get failureCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJob.failureCode'),
        outputPath: 'failureCode',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJob.failureCode', props);
    return resource.getResponseField('failureCode') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJob.failureReason'),
        outputPath: 'failureReason',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJob.failureReason', props);
    return resource.getResponseField('failureReason') as unknown as string;
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJob.clientRequestToken'),
        outputPath: 'clientRequestToken',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJob.clientRequestToken', props);
    return resource.getResponseField('clientRequestToken') as unknown as string;
  }

  public get outputLocation(): RoboMakerDescribeSimulationJobOutputLocation {
    return new RoboMakerDescribeSimulationJobOutputLocation(this, 'OutputLocation', this.__resources, this.input);
  }

  public get loggingConfig(): RoboMakerDescribeSimulationJobLoggingConfig {
    return new RoboMakerDescribeSimulationJobLoggingConfig(this, 'LoggingConfig', this.__resources, this.input);
  }

  public get maxJobDurationInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJob.maxJobDurationInSeconds'),
        outputPath: 'maxJobDurationInSeconds',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJob.maxJobDurationInSeconds', props);
    return resource.getResponseField('maxJobDurationInSeconds') as unknown as number;
  }

  public get simulationTimeMillis(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJob.simulationTimeMillis'),
        outputPath: 'simulationTimeMillis',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJob.simulationTimeMillis', props);
    return resource.getResponseField('simulationTimeMillis') as unknown as number;
  }

  public get iamRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJob.iamRole'),
        outputPath: 'iamRole',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJob.iamRole', props);
    return resource.getResponseField('iamRole') as unknown as string;
  }

  public get robotApplications(): shapes.RoboMakerRobotApplicationConfig[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJob.robotApplications'),
        outputPath: 'robotApplications',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJob.robotApplications', props);
    return resource.getResponseField('robotApplications') as unknown as shapes.RoboMakerRobotApplicationConfig[];
  }

  public get simulationApplications(): shapes.RoboMakerSimulationApplicationConfig[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJob.simulationApplications'),
        outputPath: 'simulationApplications',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJob.simulationApplications', props);
    return resource.getResponseField('simulationApplications') as unknown as shapes.RoboMakerSimulationApplicationConfig[];
  }

  public get dataSources(): shapes.RoboMakerDataSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJob.dataSources'),
        outputPath: 'dataSources',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJob.dataSources', props);
    return resource.getResponseField('dataSources') as unknown as shapes.RoboMakerDataSource[];
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJob.tags'),
        outputPath: 'tags',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJob.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get vpcConfig(): RoboMakerDescribeSimulationJobVpcConfig {
    return new RoboMakerDescribeSimulationJobVpcConfig(this, 'VpcConfig', this.__resources, this.input);
  }

  public get networkInterface(): RoboMakerDescribeSimulationJobNetworkInterface {
    return new RoboMakerDescribeSimulationJobNetworkInterface(this, 'NetworkInterface', this.__resources, this.input);
  }

  public get compute(): RoboMakerDescribeSimulationJobCompute {
    return new RoboMakerDescribeSimulationJobCompute(this, 'Compute', this.__resources, this.input);
  }

}

export class RoboMakerDescribeSimulationJobOutputLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerDescribeSimulationJobRequest) {
    super(scope, id);
  }

  public get s3Bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJob.outputLocation.s3Bucket'),
        outputPath: 'outputLocation.s3Bucket',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJob.outputLocation.s3Bucket', props);
    return resource.getResponseField('outputLocation.s3Bucket') as unknown as string;
  }

  public get s3Prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJob.outputLocation.s3Prefix'),
        outputPath: 'outputLocation.s3Prefix',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJob.outputLocation.s3Prefix', props);
    return resource.getResponseField('outputLocation.s3Prefix') as unknown as string;
  }

}

export class RoboMakerDescribeSimulationJobLoggingConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerDescribeSimulationJobRequest) {
    super(scope, id);
  }

  public get recordAllRosTopics(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJob.loggingConfig.recordAllRosTopics'),
        outputPath: 'loggingConfig.recordAllRosTopics',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJob.loggingConfig.recordAllRosTopics', props);
    return resource.getResponseField('loggingConfig.recordAllRosTopics') as unknown as boolean;
  }

}

export class RoboMakerDescribeSimulationJobVpcConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerDescribeSimulationJobRequest) {
    super(scope, id);
  }

  public get subnets(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJob.vpcConfig.subnets'),
        outputPath: 'vpcConfig.subnets',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJob.vpcConfig.subnets', props);
    return resource.getResponseField('vpcConfig.subnets') as unknown as string[];
  }

  public get securityGroups(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJob.vpcConfig.securityGroups'),
        outputPath: 'vpcConfig.securityGroups',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJob.vpcConfig.securityGroups', props);
    return resource.getResponseField('vpcConfig.securityGroups') as unknown as string[];
  }

  public get vpcId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJob.vpcConfig.vpcId'),
        outputPath: 'vpcConfig.vpcId',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJob.vpcConfig.vpcId', props);
    return resource.getResponseField('vpcConfig.vpcId') as unknown as string;
  }

  public get assignPublicIp(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJob.vpcConfig.assignPublicIp'),
        outputPath: 'vpcConfig.assignPublicIp',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJob.vpcConfig.assignPublicIp', props);
    return resource.getResponseField('vpcConfig.assignPublicIp') as unknown as boolean;
  }

}

export class RoboMakerDescribeSimulationJobNetworkInterface extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerDescribeSimulationJobRequest) {
    super(scope, id);
  }

  public get networkInterfaceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJob.networkInterface.networkInterfaceId'),
        outputPath: 'networkInterface.networkInterfaceId',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJob.networkInterface.networkInterfaceId', props);
    return resource.getResponseField('networkInterface.networkInterfaceId') as unknown as string;
  }

  public get privateIpAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJob.networkInterface.privateIpAddress'),
        outputPath: 'networkInterface.privateIpAddress',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJob.networkInterface.privateIpAddress', props);
    return resource.getResponseField('networkInterface.privateIpAddress') as unknown as string;
  }

  public get publicIpAddress(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJob.networkInterface.publicIpAddress'),
        outputPath: 'networkInterface.publicIpAddress',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJob.networkInterface.publicIpAddress', props);
    return resource.getResponseField('networkInterface.publicIpAddress') as unknown as string;
  }

}

export class RoboMakerDescribeSimulationJobCompute extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerDescribeSimulationJobRequest) {
    super(scope, id);
  }

  public get simulationUnitLimit(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJob.compute.simulationUnitLimit'),
        outputPath: 'compute.simulationUnitLimit',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJob.compute.simulationUnitLimit', props);
    return resource.getResponseField('compute.simulationUnitLimit') as unknown as number;
  }

}

export class RoboMakerDescribeSimulationJobBatch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerDescribeSimulationJobBatchRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJobBatch',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJobBatch.arn'),
        outputPath: 'arn',
        parameters: {
          batch: this.input.batch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJobBatch.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJobBatch',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJobBatch.status'),
        outputPath: 'status',
        parameters: {
          batch: this.input.batch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJobBatch.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJobBatch',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJobBatch.lastUpdatedAt'),
        outputPath: 'lastUpdatedAt',
        parameters: {
          batch: this.input.batch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJobBatch.lastUpdatedAt', props);
    return resource.getResponseField('lastUpdatedAt') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJobBatch',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJobBatch.createdAt'),
        outputPath: 'createdAt',
        parameters: {
          batch: this.input.batch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJobBatch.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJobBatch',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJobBatch.clientRequestToken'),
        outputPath: 'clientRequestToken',
        parameters: {
          batch: this.input.batch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJobBatch.clientRequestToken', props);
    return resource.getResponseField('clientRequestToken') as unknown as string;
  }

  public get batchPolicy(): RoboMakerDescribeSimulationJobBatchBatchPolicy {
    return new RoboMakerDescribeSimulationJobBatchBatchPolicy(this, 'BatchPolicy', this.__resources, this.input);
  }

  public get failureCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJobBatch',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJobBatch.failureCode'),
        outputPath: 'failureCode',
        parameters: {
          batch: this.input.batch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJobBatch.failureCode', props);
    return resource.getResponseField('failureCode') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJobBatch',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJobBatch.failureReason'),
        outputPath: 'failureReason',
        parameters: {
          batch: this.input.batch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJobBatch.failureReason', props);
    return resource.getResponseField('failureReason') as unknown as string;
  }

  public get failedRequests(): shapes.RoboMakerFailedCreateSimulationJobRequest[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJobBatch',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJobBatch.failedRequests'),
        outputPath: 'failedRequests',
        parameters: {
          batch: this.input.batch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJobBatch.failedRequests', props);
    return resource.getResponseField('failedRequests') as unknown as shapes.RoboMakerFailedCreateSimulationJobRequest[];
  }

  public get pendingRequests(): shapes.RoboMakerSimulationJobRequest[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJobBatch',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJobBatch.pendingRequests'),
        outputPath: 'pendingRequests',
        parameters: {
          batch: this.input.batch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJobBatch.pendingRequests', props);
    return resource.getResponseField('pendingRequests') as unknown as shapes.RoboMakerSimulationJobRequest[];
  }

  public get createdRequests(): shapes.RoboMakerSimulationJobSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJobBatch',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJobBatch.createdRequests'),
        outputPath: 'createdRequests',
        parameters: {
          batch: this.input.batch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJobBatch.createdRequests', props);
    return resource.getResponseField('createdRequests') as unknown as shapes.RoboMakerSimulationJobSummary[];
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJobBatch',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJobBatch.tags'),
        outputPath: 'tags',
        parameters: {
          batch: this.input.batch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJobBatch.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerDescribeSimulationJobBatchBatchPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerDescribeSimulationJobBatchRequest) {
    super(scope, id);
  }

  public get timeoutInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJobBatch',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJobBatch.batchPolicy.timeoutInSeconds'),
        outputPath: 'batchPolicy.timeoutInSeconds',
        parameters: {
          batch: this.input.batch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJobBatch.batchPolicy.timeoutInSeconds', props);
    return resource.getResponseField('batchPolicy.timeoutInSeconds') as unknown as number;
  }

  public get maxConcurrency(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeSimulationJobBatch',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeSimulationJobBatch.batchPolicy.maxConcurrency'),
        outputPath: 'batchPolicy.maxConcurrency',
        parameters: {
          batch: this.input.batch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeSimulationJobBatch.batchPolicy.maxConcurrency', props);
    return resource.getResponseField('batchPolicy.maxConcurrency') as unknown as number;
  }

}

export class RoboMakerDescribeWorld extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerDescribeWorldRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorld',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorld.arn'),
        outputPath: 'arn',
        parameters: {
          world: this.input.world,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorld.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get generationJob(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorld',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorld.generationJob'),
        outputPath: 'generationJob',
        parameters: {
          world: this.input.world,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorld.generationJob', props);
    return resource.getResponseField('generationJob') as unknown as string;
  }

  public get template(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorld',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorld.template'),
        outputPath: 'template',
        parameters: {
          world: this.input.world,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorld.template', props);
    return resource.getResponseField('template') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorld',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorld.createdAt'),
        outputPath: 'createdAt',
        parameters: {
          world: this.input.world,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorld.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorld',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorld.tags'),
        outputPath: 'tags',
        parameters: {
          world: this.input.world,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorld.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerDescribeWorldExportJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerDescribeWorldExportJobRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldExportJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldExportJob.arn'),
        outputPath: 'arn',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldExportJob.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldExportJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldExportJob.status'),
        outputPath: 'status',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldExportJob.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldExportJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldExportJob.createdAt'),
        outputPath: 'createdAt',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldExportJob.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

  public get failureCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldExportJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldExportJob.failureCode'),
        outputPath: 'failureCode',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldExportJob.failureCode', props);
    return resource.getResponseField('failureCode') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldExportJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldExportJob.failureReason'),
        outputPath: 'failureReason',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldExportJob.failureReason', props);
    return resource.getResponseField('failureReason') as unknown as string;
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldExportJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldExportJob.clientRequestToken'),
        outputPath: 'clientRequestToken',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldExportJob.clientRequestToken', props);
    return resource.getResponseField('clientRequestToken') as unknown as string;
  }

  public get worlds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldExportJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldExportJob.worlds'),
        outputPath: 'worlds',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldExportJob.worlds', props);
    return resource.getResponseField('worlds') as unknown as string[];
  }

  public get outputLocation(): RoboMakerDescribeWorldExportJobOutputLocation {
    return new RoboMakerDescribeWorldExportJobOutputLocation(this, 'OutputLocation', this.__resources, this.input);
  }

  public get iamRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldExportJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldExportJob.iamRole'),
        outputPath: 'iamRole',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldExportJob.iamRole', props);
    return resource.getResponseField('iamRole') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldExportJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldExportJob.tags'),
        outputPath: 'tags',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldExportJob.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerDescribeWorldExportJobOutputLocation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerDescribeWorldExportJobRequest) {
    super(scope, id);
  }

  public get s3Bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldExportJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldExportJob.outputLocation.s3Bucket'),
        outputPath: 'outputLocation.s3Bucket',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldExportJob.outputLocation.s3Bucket', props);
    return resource.getResponseField('outputLocation.s3Bucket') as unknown as string;
  }

  public get s3Prefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldExportJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldExportJob.outputLocation.s3Prefix'),
        outputPath: 'outputLocation.s3Prefix',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldExportJob.outputLocation.s3Prefix', props);
    return resource.getResponseField('outputLocation.s3Prefix') as unknown as string;
  }

}

export class RoboMakerDescribeWorldGenerationJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerDescribeWorldGenerationJobRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldGenerationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldGenerationJob.arn'),
        outputPath: 'arn',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldGenerationJob.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldGenerationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldGenerationJob.status'),
        outputPath: 'status',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldGenerationJob.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldGenerationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldGenerationJob.createdAt'),
        outputPath: 'createdAt',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldGenerationJob.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

  public get failureCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldGenerationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldGenerationJob.failureCode'),
        outputPath: 'failureCode',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldGenerationJob.failureCode', props);
    return resource.getResponseField('failureCode') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldGenerationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldGenerationJob.failureReason'),
        outputPath: 'failureReason',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldGenerationJob.failureReason', props);
    return resource.getResponseField('failureReason') as unknown as string;
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldGenerationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldGenerationJob.clientRequestToken'),
        outputPath: 'clientRequestToken',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldGenerationJob.clientRequestToken', props);
    return resource.getResponseField('clientRequestToken') as unknown as string;
  }

  public get template(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldGenerationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldGenerationJob.template'),
        outputPath: 'template',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldGenerationJob.template', props);
    return resource.getResponseField('template') as unknown as string;
  }

  public get worldCount(): RoboMakerDescribeWorldGenerationJobWorldCount {
    return new RoboMakerDescribeWorldGenerationJobWorldCount(this, 'WorldCount', this.__resources, this.input);
  }

  public get finishedWorldsSummary(): RoboMakerDescribeWorldGenerationJobFinishedWorldsSummary {
    return new RoboMakerDescribeWorldGenerationJobFinishedWorldsSummary(this, 'FinishedWorldsSummary', this.__resources, this.input);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldGenerationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldGenerationJob.tags'),
        outputPath: 'tags',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldGenerationJob.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get worldTags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldGenerationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldGenerationJob.worldTags'),
        outputPath: 'worldTags',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldGenerationJob.worldTags', props);
    return resource.getResponseField('worldTags') as unknown as Record<string, string>;
  }

}

export class RoboMakerDescribeWorldGenerationJobWorldCount extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerDescribeWorldGenerationJobRequest) {
    super(scope, id);
  }

  public get floorplanCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldGenerationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldGenerationJob.worldCount.floorplanCount'),
        outputPath: 'worldCount.floorplanCount',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldGenerationJob.worldCount.floorplanCount', props);
    return resource.getResponseField('worldCount.floorplanCount') as unknown as number;
  }

  public get interiorCountPerFloorplan(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldGenerationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldGenerationJob.worldCount.interiorCountPerFloorplan'),
        outputPath: 'worldCount.interiorCountPerFloorplan',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldGenerationJob.worldCount.interiorCountPerFloorplan', props);
    return resource.getResponseField('worldCount.interiorCountPerFloorplan') as unknown as number;
  }

}

export class RoboMakerDescribeWorldGenerationJobFinishedWorldsSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerDescribeWorldGenerationJobRequest) {
    super(scope, id);
  }

  public get finishedCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldGenerationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldGenerationJob.finishedWorldsSummary.finishedCount'),
        outputPath: 'finishedWorldsSummary.finishedCount',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldGenerationJob.finishedWorldsSummary.finishedCount', props);
    return resource.getResponseField('finishedWorldsSummary.finishedCount') as unknown as number;
  }

  public get succeededWorlds(): string[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldGenerationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldGenerationJob.finishedWorldsSummary.succeededWorlds'),
        outputPath: 'finishedWorldsSummary.succeededWorlds',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldGenerationJob.finishedWorldsSummary.succeededWorlds', props);
    return resource.getResponseField('finishedWorldsSummary.succeededWorlds') as unknown as string[];
  }

  public get failureSummary(): RoboMakerDescribeWorldGenerationJobFinishedWorldsSummaryFailureSummary {
    return new RoboMakerDescribeWorldGenerationJobFinishedWorldsSummaryFailureSummary(this, 'FailureSummary', this.__resources, this.input);
  }

}

export class RoboMakerDescribeWorldGenerationJobFinishedWorldsSummaryFailureSummary extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerDescribeWorldGenerationJobRequest) {
    super(scope, id);
  }

  public get totalFailureCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldGenerationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldGenerationJob.finishedWorldsSummary.failureSummary.totalFailureCount'),
        outputPath: 'finishedWorldsSummary.failureSummary.totalFailureCount',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldGenerationJob.finishedWorldsSummary.failureSummary.totalFailureCount', props);
    return resource.getResponseField('finishedWorldsSummary.failureSummary.totalFailureCount') as unknown as number;
  }

  public get failures(): shapes.RoboMakerWorldFailure[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldGenerationJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldGenerationJob.finishedWorldsSummary.failureSummary.failures'),
        outputPath: 'finishedWorldsSummary.failureSummary.failures',
        parameters: {
          job: this.input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldGenerationJob.finishedWorldsSummary.failureSummary.failures', props);
    return resource.getResponseField('finishedWorldsSummary.failureSummary.failures') as unknown as shapes.RoboMakerWorldFailure[];
  }

}

export class RoboMakerDescribeWorldTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerDescribeWorldTemplateRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldTemplate',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldTemplate.arn'),
        outputPath: 'arn',
        parameters: {
          template: this.input.template,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldTemplate.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldTemplate',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldTemplate.clientRequestToken'),
        outputPath: 'clientRequestToken',
        parameters: {
          template: this.input.template,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldTemplate.clientRequestToken', props);
    return resource.getResponseField('clientRequestToken') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldTemplate',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldTemplate.name'),
        outputPath: 'name',
        parameters: {
          template: this.input.template,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldTemplate.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldTemplate',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldTemplate.createdAt'),
        outputPath: 'createdAt',
        parameters: {
          template: this.input.template,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldTemplate.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldTemplate',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldTemplate.lastUpdatedAt'),
        outputPath: 'lastUpdatedAt',
        parameters: {
          template: this.input.template,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldTemplate.lastUpdatedAt', props);
    return resource.getResponseField('lastUpdatedAt') as unknown as string;
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldTemplate',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldTemplate.tags'),
        outputPath: 'tags',
        parameters: {
          template: this.input.template,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeWorldTemplate.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerFetchWorldTemplateBody extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerGetWorldTemplateBodyRequest) {
    super(scope, id);
  }

  public get templateBody(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getWorldTemplateBody',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.GetWorldTemplateBody.templateBody'),
        outputPath: 'templateBody',
        parameters: {
          template: this.input.template,
          generationJob: this.input.generationJob,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetWorldTemplateBody.templateBody', props);
    return resource.getResponseField('templateBody') as unknown as string;
  }

}

export class RoboMakerListDeploymentJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerListDeploymentJobsRequest) {
    super(scope, id);
  }

  public get deploymentJobs(): shapes.RoboMakerDeploymentJob[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeploymentJobs',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.ListDeploymentJobs.deploymentJobs'),
        outputPath: 'deploymentJobs',
        parameters: {
          filters: this.input.filters,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeploymentJobs.deploymentJobs', props);
    return resource.getResponseField('deploymentJobs') as unknown as shapes.RoboMakerDeploymentJob[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDeploymentJobs',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.ListDeploymentJobs.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          filters: this.input.filters,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDeploymentJobs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RoboMakerListFleets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerListFleetsRequest) {
    super(scope, id);
  }

  public get fleetDetails(): shapes.RoboMakerFleet[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFleets',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.ListFleets.fleetDetails'),
        outputPath: 'fleetDetails',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFleets.fleetDetails', props);
    return resource.getResponseField('fleetDetails') as unknown as shapes.RoboMakerFleet[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listFleets',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.ListFleets.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListFleets.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RoboMakerListRobotApplications extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerListRobotApplicationsRequest) {
    super(scope, id);
  }

  public get robotApplicationSummaries(): shapes.RoboMakerRobotApplicationSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRobotApplications',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.ListRobotApplications.robotApplicationSummaries'),
        outputPath: 'robotApplicationSummaries',
        parameters: {
          versionQualifier: this.input.versionQualifier,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRobotApplications.robotApplicationSummaries', props);
    return resource.getResponseField('robotApplicationSummaries') as unknown as shapes.RoboMakerRobotApplicationSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRobotApplications',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.ListRobotApplications.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          versionQualifier: this.input.versionQualifier,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRobotApplications.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RoboMakerListRobots extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerListRobotsRequest) {
    super(scope, id);
  }

  public get robots(): shapes.RoboMakerRobot[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRobots',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.ListRobots.robots'),
        outputPath: 'robots',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRobots.robots', props);
    return resource.getResponseField('robots') as unknown as shapes.RoboMakerRobot[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listRobots',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.ListRobots.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListRobots.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RoboMakerListSimulationApplications extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerListSimulationApplicationsRequest) {
    super(scope, id);
  }

  public get simulationApplicationSummaries(): shapes.RoboMakerSimulationApplicationSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSimulationApplications',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.ListSimulationApplications.simulationApplicationSummaries'),
        outputPath: 'simulationApplicationSummaries',
        parameters: {
          versionQualifier: this.input.versionQualifier,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSimulationApplications.simulationApplicationSummaries', props);
    return resource.getResponseField('simulationApplicationSummaries') as unknown as shapes.RoboMakerSimulationApplicationSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSimulationApplications',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.ListSimulationApplications.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          versionQualifier: this.input.versionQualifier,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSimulationApplications.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RoboMakerListSimulationJobBatches extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerListSimulationJobBatchesRequest) {
    super(scope, id);
  }

  public get simulationJobBatchSummaries(): shapes.RoboMakerSimulationJobBatchSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSimulationJobBatches',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.ListSimulationJobBatches.simulationJobBatchSummaries'),
        outputPath: 'simulationJobBatchSummaries',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSimulationJobBatches.simulationJobBatchSummaries', props);
    return resource.getResponseField('simulationJobBatchSummaries') as unknown as shapes.RoboMakerSimulationJobBatchSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSimulationJobBatches',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.ListSimulationJobBatches.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSimulationJobBatches.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RoboMakerListSimulationJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerListSimulationJobsRequest) {
    super(scope, id);
  }

  public get simulationJobSummaries(): shapes.RoboMakerSimulationJobSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSimulationJobs',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.ListSimulationJobs.simulationJobSummaries'),
        outputPath: 'simulationJobSummaries',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSimulationJobs.simulationJobSummaries', props);
    return resource.getResponseField('simulationJobSummaries') as unknown as shapes.RoboMakerSimulationJobSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listSimulationJobs',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.ListSimulationJobs.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListSimulationJobs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RoboMakerListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerListTagsForResourceRequest) {
    super(scope, id);
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.ListTagsForResource.tags'),
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

export class RoboMakerListWorldExportJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerListWorldExportJobsRequest) {
    super(scope, id);
  }

  public get worldExportJobSummaries(): shapes.RoboMakerWorldExportJobSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWorldExportJobs',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.ListWorldExportJobs.worldExportJobSummaries'),
        outputPath: 'worldExportJobSummaries',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWorldExportJobs.worldExportJobSummaries', props);
    return resource.getResponseField('worldExportJobSummaries') as unknown as shapes.RoboMakerWorldExportJobSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWorldExportJobs',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.ListWorldExportJobs.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWorldExportJobs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RoboMakerListWorldGenerationJobs extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerListWorldGenerationJobsRequest) {
    super(scope, id);
  }

  public get worldGenerationJobSummaries(): shapes.RoboMakerWorldGenerationJobSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWorldGenerationJobs',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.ListWorldGenerationJobs.worldGenerationJobSummaries'),
        outputPath: 'worldGenerationJobSummaries',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWorldGenerationJobs.worldGenerationJobSummaries', props);
    return resource.getResponseField('worldGenerationJobSummaries') as unknown as shapes.RoboMakerWorldGenerationJobSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWorldGenerationJobs',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.ListWorldGenerationJobs.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWorldGenerationJobs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RoboMakerListWorldTemplates extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerListWorldTemplatesRequest) {
    super(scope, id);
  }

  public get templateSummaries(): shapes.RoboMakerTemplateSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWorldTemplates',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.ListWorldTemplates.templateSummaries'),
        outputPath: 'templateSummaries',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWorldTemplates.templateSummaries', props);
    return resource.getResponseField('templateSummaries') as unknown as shapes.RoboMakerTemplateSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWorldTemplates',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.ListWorldTemplates.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWorldTemplates.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RoboMakerListWorlds extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerListWorldsRequest) {
    super(scope, id);
  }

  public get worldSummaries(): shapes.RoboMakerWorldSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWorlds',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.ListWorlds.worldSummaries'),
        outputPath: 'worldSummaries',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWorlds.worldSummaries', props);
    return resource.getResponseField('worldSummaries') as unknown as shapes.RoboMakerWorldSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listWorlds',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.ListWorlds.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          filters: this.input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListWorlds.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RoboMakerRegisterRobot extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerRegisterRobotRequest) {
    super(scope, id);
  }

  public get fleet(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerRobot',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.RegisterRobot.fleet'),
        outputPath: 'fleet',
        parameters: {
          fleet: this.input.fleet,
          robot: this.input.robot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterRobot.fleet', props);
    return resource.getResponseField('fleet') as unknown as string;
  }

  public get robot(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'registerRobot',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.RegisterRobot.robot'),
        outputPath: 'robot',
        parameters: {
          fleet: this.input.fleet,
          robot: this.input.robot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RegisterRobot.robot', props);
    return resource.getResponseField('robot') as unknown as string;
  }

}

export class RoboMakerStartSimulationJobBatch extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerStartSimulationJobBatchRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSimulationJobBatch',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.StartSimulationJobBatch.arn'),
        outputPath: 'arn',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          batchPolicy: {
            timeoutInSeconds: this.input.batchPolicy?.timeoutInSeconds,
            maxConcurrency: this.input.batchPolicy?.maxConcurrency,
          },
          createSimulationJobRequests: this.input.createSimulationJobRequests,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSimulationJobBatch.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSimulationJobBatch',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.StartSimulationJobBatch.status'),
        outputPath: 'status',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          batchPolicy: {
            timeoutInSeconds: this.input.batchPolicy?.timeoutInSeconds,
            maxConcurrency: this.input.batchPolicy?.maxConcurrency,
          },
          createSimulationJobRequests: this.input.createSimulationJobRequests,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSimulationJobBatch.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSimulationJobBatch',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.StartSimulationJobBatch.createdAt'),
        outputPath: 'createdAt',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          batchPolicy: {
            timeoutInSeconds: this.input.batchPolicy?.timeoutInSeconds,
            maxConcurrency: this.input.batchPolicy?.maxConcurrency,
          },
          createSimulationJobRequests: this.input.createSimulationJobRequests,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSimulationJobBatch.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

  public get clientRequestToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSimulationJobBatch',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.StartSimulationJobBatch.clientRequestToken'),
        outputPath: 'clientRequestToken',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          batchPolicy: {
            timeoutInSeconds: this.input.batchPolicy?.timeoutInSeconds,
            maxConcurrency: this.input.batchPolicy?.maxConcurrency,
          },
          createSimulationJobRequests: this.input.createSimulationJobRequests,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSimulationJobBatch.clientRequestToken', props);
    return resource.getResponseField('clientRequestToken') as unknown as string;
  }

  public get batchPolicy(): RoboMakerStartSimulationJobBatchBatchPolicy {
    return new RoboMakerStartSimulationJobBatchBatchPolicy(this, 'BatchPolicy', this.__resources, this.input);
  }

  public get failureCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSimulationJobBatch',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.StartSimulationJobBatch.failureCode'),
        outputPath: 'failureCode',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          batchPolicy: {
            timeoutInSeconds: this.input.batchPolicy?.timeoutInSeconds,
            maxConcurrency: this.input.batchPolicy?.maxConcurrency,
          },
          createSimulationJobRequests: this.input.createSimulationJobRequests,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSimulationJobBatch.failureCode', props);
    return resource.getResponseField('failureCode') as unknown as string;
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSimulationJobBatch',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.StartSimulationJobBatch.failureReason'),
        outputPath: 'failureReason',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          batchPolicy: {
            timeoutInSeconds: this.input.batchPolicy?.timeoutInSeconds,
            maxConcurrency: this.input.batchPolicy?.maxConcurrency,
          },
          createSimulationJobRequests: this.input.createSimulationJobRequests,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSimulationJobBatch.failureReason', props);
    return resource.getResponseField('failureReason') as unknown as string;
  }

  public get failedRequests(): shapes.RoboMakerFailedCreateSimulationJobRequest[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSimulationJobBatch',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.StartSimulationJobBatch.failedRequests'),
        outputPath: 'failedRequests',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          batchPolicy: {
            timeoutInSeconds: this.input.batchPolicy?.timeoutInSeconds,
            maxConcurrency: this.input.batchPolicy?.maxConcurrency,
          },
          createSimulationJobRequests: this.input.createSimulationJobRequests,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSimulationJobBatch.failedRequests', props);
    return resource.getResponseField('failedRequests') as unknown as shapes.RoboMakerFailedCreateSimulationJobRequest[];
  }

  public get pendingRequests(): shapes.RoboMakerSimulationJobRequest[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSimulationJobBatch',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.StartSimulationJobBatch.pendingRequests'),
        outputPath: 'pendingRequests',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          batchPolicy: {
            timeoutInSeconds: this.input.batchPolicy?.timeoutInSeconds,
            maxConcurrency: this.input.batchPolicy?.maxConcurrency,
          },
          createSimulationJobRequests: this.input.createSimulationJobRequests,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSimulationJobBatch.pendingRequests', props);
    return resource.getResponseField('pendingRequests') as unknown as shapes.RoboMakerSimulationJobRequest[];
  }

  public get createdRequests(): shapes.RoboMakerSimulationJobSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSimulationJobBatch',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.StartSimulationJobBatch.createdRequests'),
        outputPath: 'createdRequests',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          batchPolicy: {
            timeoutInSeconds: this.input.batchPolicy?.timeoutInSeconds,
            maxConcurrency: this.input.batchPolicy?.maxConcurrency,
          },
          createSimulationJobRequests: this.input.createSimulationJobRequests,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSimulationJobBatch.createdRequests', props);
    return resource.getResponseField('createdRequests') as unknown as shapes.RoboMakerSimulationJobSummary[];
  }

  public get tags(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSimulationJobBatch',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.StartSimulationJobBatch.tags'),
        outputPath: 'tags',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          batchPolicy: {
            timeoutInSeconds: this.input.batchPolicy?.timeoutInSeconds,
            maxConcurrency: this.input.batchPolicy?.maxConcurrency,
          },
          createSimulationJobRequests: this.input.createSimulationJobRequests,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSimulationJobBatch.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerStartSimulationJobBatchBatchPolicy extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerStartSimulationJobBatchRequest) {
    super(scope, id);
  }

  public get timeoutInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSimulationJobBatch',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.StartSimulationJobBatch.batchPolicy.timeoutInSeconds'),
        outputPath: 'batchPolicy.timeoutInSeconds',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          batchPolicy: {
            timeoutInSeconds: this.input.batchPolicy?.timeoutInSeconds,
            maxConcurrency: this.input.batchPolicy?.maxConcurrency,
          },
          createSimulationJobRequests: this.input.createSimulationJobRequests,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSimulationJobBatch.batchPolicy.timeoutInSeconds', props);
    return resource.getResponseField('batchPolicy.timeoutInSeconds') as unknown as number;
  }

  public get maxConcurrency(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startSimulationJobBatch',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.StartSimulationJobBatch.batchPolicy.maxConcurrency'),
        outputPath: 'batchPolicy.maxConcurrency',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          batchPolicy: {
            timeoutInSeconds: this.input.batchPolicy?.timeoutInSeconds,
            maxConcurrency: this.input.batchPolicy?.maxConcurrency,
          },
          createSimulationJobRequests: this.input.createSimulationJobRequests,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartSimulationJobBatch.batchPolicy.maxConcurrency', props);
    return resource.getResponseField('batchPolicy.maxConcurrency') as unknown as number;
  }

}

export class RoboMakerSyncDeploymentJob extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerSyncDeploymentJobRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'syncDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.SyncDeploymentJob.arn'),
        outputPath: 'arn',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          fleet: this.input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SyncDeploymentJob.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get fleet(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'syncDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.SyncDeploymentJob.fleet'),
        outputPath: 'fleet',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          fleet: this.input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SyncDeploymentJob.fleet', props);
    return resource.getResponseField('fleet') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'syncDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.SyncDeploymentJob.status'),
        outputPath: 'status',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          fleet: this.input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SyncDeploymentJob.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get deploymentConfig(): RoboMakerSyncDeploymentJobDeploymentConfig {
    return new RoboMakerSyncDeploymentJobDeploymentConfig(this, 'DeploymentConfig', this.__resources, this.input);
  }

  public get deploymentApplicationConfigs(): shapes.RoboMakerDeploymentApplicationConfig[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'syncDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.SyncDeploymentJob.deploymentApplicationConfigs'),
        outputPath: 'deploymentApplicationConfigs',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          fleet: this.input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SyncDeploymentJob.deploymentApplicationConfigs', props);
    return resource.getResponseField('deploymentApplicationConfigs') as unknown as shapes.RoboMakerDeploymentApplicationConfig[];
  }

  public get failureReason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'syncDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.SyncDeploymentJob.failureReason'),
        outputPath: 'failureReason',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          fleet: this.input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SyncDeploymentJob.failureReason', props);
    return resource.getResponseField('failureReason') as unknown as string;
  }

  public get failureCode(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'syncDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.SyncDeploymentJob.failureCode'),
        outputPath: 'failureCode',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          fleet: this.input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SyncDeploymentJob.failureCode', props);
    return resource.getResponseField('failureCode') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'syncDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.SyncDeploymentJob.createdAt'),
        outputPath: 'createdAt',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          fleet: this.input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SyncDeploymentJob.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

}

export class RoboMakerSyncDeploymentJobDeploymentConfig extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerSyncDeploymentJobRequest) {
    super(scope, id);
  }

  public get concurrentDeploymentPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'syncDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.SyncDeploymentJob.deploymentConfig.concurrentDeploymentPercentage'),
        outputPath: 'deploymentConfig.concurrentDeploymentPercentage',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          fleet: this.input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SyncDeploymentJob.deploymentConfig.concurrentDeploymentPercentage', props);
    return resource.getResponseField('deploymentConfig.concurrentDeploymentPercentage') as unknown as number;
  }

  public get failureThresholdPercentage(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'syncDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.SyncDeploymentJob.deploymentConfig.failureThresholdPercentage'),
        outputPath: 'deploymentConfig.failureThresholdPercentage',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          fleet: this.input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SyncDeploymentJob.deploymentConfig.failureThresholdPercentage', props);
    return resource.getResponseField('deploymentConfig.failureThresholdPercentage') as unknown as number;
  }

  public get robotDeploymentTimeoutInSeconds(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'syncDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.SyncDeploymentJob.deploymentConfig.robotDeploymentTimeoutInSeconds'),
        outputPath: 'deploymentConfig.robotDeploymentTimeoutInSeconds',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          fleet: this.input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SyncDeploymentJob.deploymentConfig.robotDeploymentTimeoutInSeconds', props);
    return resource.getResponseField('deploymentConfig.robotDeploymentTimeoutInSeconds') as unknown as number;
  }

  public get downloadConditionFile(): RoboMakerSyncDeploymentJobDeploymentConfigDownloadConditionFile {
    return new RoboMakerSyncDeploymentJobDeploymentConfigDownloadConditionFile(this, 'DownloadConditionFile', this.__resources, this.input);
  }

}

export class RoboMakerSyncDeploymentJobDeploymentConfigDownloadConditionFile extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerSyncDeploymentJobRequest) {
    super(scope, id);
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'syncDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.SyncDeploymentJob.deploymentConfig.downloadConditionFile.bucket'),
        outputPath: 'deploymentConfig.downloadConditionFile.bucket',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          fleet: this.input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SyncDeploymentJob.deploymentConfig.downloadConditionFile.bucket', props);
    return resource.getResponseField('deploymentConfig.downloadConditionFile.bucket') as unknown as string;
  }

  public get key(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'syncDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.SyncDeploymentJob.deploymentConfig.downloadConditionFile.key'),
        outputPath: 'deploymentConfig.downloadConditionFile.key',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          fleet: this.input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SyncDeploymentJob.deploymentConfig.downloadConditionFile.key', props);
    return resource.getResponseField('deploymentConfig.downloadConditionFile.key') as unknown as string;
  }

  public get etag(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'syncDeploymentJob',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.SyncDeploymentJob.deploymentConfig.downloadConditionFile.etag'),
        outputPath: 'deploymentConfig.downloadConditionFile.etag',
        parameters: {
          clientRequestToken: this.input.clientRequestToken,
          fleet: this.input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SyncDeploymentJob.deploymentConfig.downloadConditionFile.etag', props);
    return resource.getResponseField('deploymentConfig.downloadConditionFile.etag') as unknown as string;
  }

}

export class RoboMakerUpdateRobotApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerUpdateRobotApplicationRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRobotApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.UpdateRobotApplication.arn'),
        outputPath: 'arn',
        parameters: {
          application: this.input.application,
          sources: this.input.sources,
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRobotApplication.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRobotApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.UpdateRobotApplication.name'),
        outputPath: 'name',
        parameters: {
          application: this.input.application,
          sources: this.input.sources,
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRobotApplication.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRobotApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.UpdateRobotApplication.version'),
        outputPath: 'version',
        parameters: {
          application: this.input.application,
          sources: this.input.sources,
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRobotApplication.version', props);
    return resource.getResponseField('version') as unknown as string;
  }

  public get sources(): shapes.RoboMakerSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRobotApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.UpdateRobotApplication.sources'),
        outputPath: 'sources',
        parameters: {
          application: this.input.application,
          sources: this.input.sources,
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRobotApplication.sources', props);
    return resource.getResponseField('sources') as unknown as shapes.RoboMakerSource[];
  }

  public get robotSoftwareSuite(): RoboMakerUpdateRobotApplicationRobotSoftwareSuite {
    return new RoboMakerUpdateRobotApplicationRobotSoftwareSuite(this, 'RobotSoftwareSuite', this.__resources, this.input);
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRobotApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.UpdateRobotApplication.lastUpdatedAt'),
        outputPath: 'lastUpdatedAt',
        parameters: {
          application: this.input.application,
          sources: this.input.sources,
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRobotApplication.lastUpdatedAt', props);
    return resource.getResponseField('lastUpdatedAt') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRobotApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.UpdateRobotApplication.revisionId'),
        outputPath: 'revisionId',
        parameters: {
          application: this.input.application,
          sources: this.input.sources,
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRobotApplication.revisionId', props);
    return resource.getResponseField('revisionId') as unknown as string;
  }

}

export class RoboMakerUpdateRobotApplicationRobotSoftwareSuite extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerUpdateRobotApplicationRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRobotApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.UpdateRobotApplication.robotSoftwareSuite.name'),
        outputPath: 'robotSoftwareSuite.name',
        parameters: {
          application: this.input.application,
          sources: this.input.sources,
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRobotApplication.robotSoftwareSuite.name', props);
    return resource.getResponseField('robotSoftwareSuite.name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateRobotApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.UpdateRobotApplication.robotSoftwareSuite.version'),
        outputPath: 'robotSoftwareSuite.version',
        parameters: {
          application: this.input.application,
          sources: this.input.sources,
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateRobotApplication.robotSoftwareSuite.version', props);
    return resource.getResponseField('robotSoftwareSuite.version') as unknown as string;
  }

}

export class RoboMakerUpdateSimulationApplication extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerUpdateSimulationApplicationRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.UpdateSimulationApplication.arn'),
        outputPath: 'arn',
        parameters: {
          application: this.input.application,
          sources: this.input.sources,
          simulationSoftwareSuite: {
            name: this.input.simulationSoftwareSuite.name,
            version: this.input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.input.renderingEngine?.name,
            version: this.input.renderingEngine?.version,
          },
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSimulationApplication.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.UpdateSimulationApplication.name'),
        outputPath: 'name',
        parameters: {
          application: this.input.application,
          sources: this.input.sources,
          simulationSoftwareSuite: {
            name: this.input.simulationSoftwareSuite.name,
            version: this.input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.input.renderingEngine?.name,
            version: this.input.renderingEngine?.version,
          },
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSimulationApplication.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.UpdateSimulationApplication.version'),
        outputPath: 'version',
        parameters: {
          application: this.input.application,
          sources: this.input.sources,
          simulationSoftwareSuite: {
            name: this.input.simulationSoftwareSuite.name,
            version: this.input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.input.renderingEngine?.name,
            version: this.input.renderingEngine?.version,
          },
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSimulationApplication.version', props);
    return resource.getResponseField('version') as unknown as string;
  }

  public get sources(): shapes.RoboMakerSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.UpdateSimulationApplication.sources'),
        outputPath: 'sources',
        parameters: {
          application: this.input.application,
          sources: this.input.sources,
          simulationSoftwareSuite: {
            name: this.input.simulationSoftwareSuite.name,
            version: this.input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.input.renderingEngine?.name,
            version: this.input.renderingEngine?.version,
          },
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSimulationApplication.sources', props);
    return resource.getResponseField('sources') as unknown as shapes.RoboMakerSource[];
  }

  public get simulationSoftwareSuite(): RoboMakerUpdateSimulationApplicationSimulationSoftwareSuite {
    return new RoboMakerUpdateSimulationApplicationSimulationSoftwareSuite(this, 'SimulationSoftwareSuite', this.__resources, this.input);
  }

  public get robotSoftwareSuite(): RoboMakerUpdateSimulationApplicationRobotSoftwareSuite {
    return new RoboMakerUpdateSimulationApplicationRobotSoftwareSuite(this, 'RobotSoftwareSuite', this.__resources, this.input);
  }

  public get renderingEngine(): RoboMakerUpdateSimulationApplicationRenderingEngine {
    return new RoboMakerUpdateSimulationApplicationRenderingEngine(this, 'RenderingEngine', this.__resources, this.input);
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.UpdateSimulationApplication.lastUpdatedAt'),
        outputPath: 'lastUpdatedAt',
        parameters: {
          application: this.input.application,
          sources: this.input.sources,
          simulationSoftwareSuite: {
            name: this.input.simulationSoftwareSuite.name,
            version: this.input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.input.renderingEngine?.name,
            version: this.input.renderingEngine?.version,
          },
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSimulationApplication.lastUpdatedAt', props);
    return resource.getResponseField('lastUpdatedAt') as unknown as string;
  }

  public get revisionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.UpdateSimulationApplication.revisionId'),
        outputPath: 'revisionId',
        parameters: {
          application: this.input.application,
          sources: this.input.sources,
          simulationSoftwareSuite: {
            name: this.input.simulationSoftwareSuite.name,
            version: this.input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.input.renderingEngine?.name,
            version: this.input.renderingEngine?.version,
          },
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSimulationApplication.revisionId', props);
    return resource.getResponseField('revisionId') as unknown as string;
  }

}

export class RoboMakerUpdateSimulationApplicationSimulationSoftwareSuite extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerUpdateSimulationApplicationRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.UpdateSimulationApplication.simulationSoftwareSuite.name'),
        outputPath: 'simulationSoftwareSuite.name',
        parameters: {
          application: this.input.application,
          sources: this.input.sources,
          simulationSoftwareSuite: {
            name: this.input.simulationSoftwareSuite.name,
            version: this.input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.input.renderingEngine?.name,
            version: this.input.renderingEngine?.version,
          },
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSimulationApplication.simulationSoftwareSuite.name', props);
    return resource.getResponseField('simulationSoftwareSuite.name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.UpdateSimulationApplication.simulationSoftwareSuite.version'),
        outputPath: 'simulationSoftwareSuite.version',
        parameters: {
          application: this.input.application,
          sources: this.input.sources,
          simulationSoftwareSuite: {
            name: this.input.simulationSoftwareSuite.name,
            version: this.input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.input.renderingEngine?.name,
            version: this.input.renderingEngine?.version,
          },
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSimulationApplication.simulationSoftwareSuite.version', props);
    return resource.getResponseField('simulationSoftwareSuite.version') as unknown as string;
  }

}

export class RoboMakerUpdateSimulationApplicationRobotSoftwareSuite extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerUpdateSimulationApplicationRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.UpdateSimulationApplication.robotSoftwareSuite.name'),
        outputPath: 'robotSoftwareSuite.name',
        parameters: {
          application: this.input.application,
          sources: this.input.sources,
          simulationSoftwareSuite: {
            name: this.input.simulationSoftwareSuite.name,
            version: this.input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.input.renderingEngine?.name,
            version: this.input.renderingEngine?.version,
          },
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSimulationApplication.robotSoftwareSuite.name', props);
    return resource.getResponseField('robotSoftwareSuite.name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.UpdateSimulationApplication.robotSoftwareSuite.version'),
        outputPath: 'robotSoftwareSuite.version',
        parameters: {
          application: this.input.application,
          sources: this.input.sources,
          simulationSoftwareSuite: {
            name: this.input.simulationSoftwareSuite.name,
            version: this.input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.input.renderingEngine?.name,
            version: this.input.renderingEngine?.version,
          },
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSimulationApplication.robotSoftwareSuite.version', props);
    return resource.getResponseField('robotSoftwareSuite.version') as unknown as string;
  }

}

export class RoboMakerUpdateSimulationApplicationRenderingEngine extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerUpdateSimulationApplicationRequest) {
    super(scope, id);
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.UpdateSimulationApplication.renderingEngine.name'),
        outputPath: 'renderingEngine.name',
        parameters: {
          application: this.input.application,
          sources: this.input.sources,
          simulationSoftwareSuite: {
            name: this.input.simulationSoftwareSuite.name,
            version: this.input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.input.renderingEngine?.name,
            version: this.input.renderingEngine?.version,
          },
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSimulationApplication.renderingEngine.name', props);
    return resource.getResponseField('renderingEngine.name') as unknown as string;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateSimulationApplication',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.UpdateSimulationApplication.renderingEngine.version'),
        outputPath: 'renderingEngine.version',
        parameters: {
          application: this.input.application,
          sources: this.input.sources,
          simulationSoftwareSuite: {
            name: this.input.simulationSoftwareSuite.name,
            version: this.input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.input.robotSoftwareSuite.name,
            version: this.input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.input.renderingEngine?.name,
            version: this.input.renderingEngine?.version,
          },
          currentRevisionId: this.input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateSimulationApplication.renderingEngine.version', props);
    return resource.getResponseField('renderingEngine.version') as unknown as string;
  }

}

export class RoboMakerUpdateWorldTemplate extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.RoboMakerUpdateWorldTemplateRequest) {
    super(scope, id);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorldTemplate',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.UpdateWorldTemplate.arn'),
        outputPath: 'arn',
        parameters: {
          template: this.input.template,
          name: this.input.name,
          templateBody: this.input.templateBody,
          templateLocation: {
            s3Bucket: this.input.templateLocation?.s3Bucket,
            s3Key: this.input.templateLocation?.s3Key,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorldTemplate.arn', props);
    return resource.getResponseField('arn') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorldTemplate',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.UpdateWorldTemplate.name'),
        outputPath: 'name',
        parameters: {
          template: this.input.template,
          name: this.input.name,
          templateBody: this.input.templateBody,
          templateLocation: {
            s3Bucket: this.input.templateLocation?.s3Bucket,
            s3Key: this.input.templateLocation?.s3Key,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorldTemplate.name', props);
    return resource.getResponseField('name') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorldTemplate',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.UpdateWorldTemplate.createdAt'),
        outputPath: 'createdAt',
        parameters: {
          template: this.input.template,
          name: this.input.name,
          templateBody: this.input.templateBody,
          templateLocation: {
            s3Bucket: this.input.templateLocation?.s3Bucket,
            s3Key: this.input.templateLocation?.s3Key,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorldTemplate.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateWorldTemplate',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.UpdateWorldTemplate.lastUpdatedAt'),
        outputPath: 'lastUpdatedAt',
        parameters: {
          template: this.input.template,
          name: this.input.name,
          templateBody: this.input.templateBody,
          templateLocation: {
            s3Bucket: this.input.templateLocation?.s3Bucket,
            s3Key: this.input.templateLocation?.s3Key,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateWorldTemplate.lastUpdatedAt', props);
    return resource.getResponseField('lastUpdatedAt') as unknown as string;
  }

}

