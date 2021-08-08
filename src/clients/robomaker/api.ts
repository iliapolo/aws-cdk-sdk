import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class RoboMakerClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchDeleteWorlds(input: shapes.RoboMakerBatchDeleteWorldsRequest): RoboMakerResponsesBatchDeleteWorlds {
    return new RoboMakerResponsesBatchDeleteWorlds(this, this.__resources, input);
  }

  public batchDescribeSimulationJob(input: shapes.RoboMakerBatchDescribeSimulationJobRequest): RoboMakerResponsesBatchDescribeSimulationJob {
    return new RoboMakerResponsesBatchDescribeSimulationJob(this, this.__resources, input);
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

  public createDeploymentJob(input: shapes.RoboMakerCreateDeploymentJobRequest): RoboMakerResponsesCreateDeploymentJob {
    return new RoboMakerResponsesCreateDeploymentJob(this, this.__resources, input);
  }

  public createFleet(input: shapes.RoboMakerCreateFleetRequest): RoboMakerResponsesCreateFleet {
    return new RoboMakerResponsesCreateFleet(this, this.__resources, input);
  }

  public createRobot(input: shapes.RoboMakerCreateRobotRequest): RoboMakerResponsesCreateRobot {
    return new RoboMakerResponsesCreateRobot(this, this.__resources, input);
  }

  public createRobotApplication(input: shapes.RoboMakerCreateRobotApplicationRequest): RoboMakerResponsesCreateRobotApplication {
    return new RoboMakerResponsesCreateRobotApplication(this, this.__resources, input);
  }

  public createRobotApplicationVersion(input: shapes.RoboMakerCreateRobotApplicationVersionRequest): RoboMakerResponsesCreateRobotApplicationVersion {
    return new RoboMakerResponsesCreateRobotApplicationVersion(this, this.__resources, input);
  }

  public createSimulationApplication(input: shapes.RoboMakerCreateSimulationApplicationRequest): RoboMakerResponsesCreateSimulationApplication {
    return new RoboMakerResponsesCreateSimulationApplication(this, this.__resources, input);
  }

  public createSimulationApplicationVersion(input: shapes.RoboMakerCreateSimulationApplicationVersionRequest): RoboMakerResponsesCreateSimulationApplicationVersion {
    return new RoboMakerResponsesCreateSimulationApplicationVersion(this, this.__resources, input);
  }

  public createSimulationJob(input: shapes.RoboMakerCreateSimulationJobRequest): RoboMakerResponsesCreateSimulationJob {
    return new RoboMakerResponsesCreateSimulationJob(this, this.__resources, input);
  }

  public createWorldExportJob(input: shapes.RoboMakerCreateWorldExportJobRequest): RoboMakerResponsesCreateWorldExportJob {
    return new RoboMakerResponsesCreateWorldExportJob(this, this.__resources, input);
  }

  public createWorldGenerationJob(input: shapes.RoboMakerCreateWorldGenerationJobRequest): RoboMakerResponsesCreateWorldGenerationJob {
    return new RoboMakerResponsesCreateWorldGenerationJob(this, this.__resources, input);
  }

  public createWorldTemplate(input: shapes.RoboMakerCreateWorldTemplateRequest): RoboMakerResponsesCreateWorldTemplate {
    return new RoboMakerResponsesCreateWorldTemplate(this, this.__resources, input);
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

  public deregisterRobot(input: shapes.RoboMakerDeregisterRobotRequest): RoboMakerResponsesDeregisterRobot {
    return new RoboMakerResponsesDeregisterRobot(this, this.__resources, input);
  }

  public describeDeploymentJob(input: shapes.RoboMakerDescribeDeploymentJobRequest): RoboMakerResponsesDescribeDeploymentJob {
    return new RoboMakerResponsesDescribeDeploymentJob(this, this.__resources, input);
  }

  public describeFleet(input: shapes.RoboMakerDescribeFleetRequest): RoboMakerResponsesDescribeFleet {
    return new RoboMakerResponsesDescribeFleet(this, this.__resources, input);
  }

  public describeRobot(input: shapes.RoboMakerDescribeRobotRequest): RoboMakerResponsesDescribeRobot {
    return new RoboMakerResponsesDescribeRobot(this, this.__resources, input);
  }

  public describeRobotApplication(input: shapes.RoboMakerDescribeRobotApplicationRequest): RoboMakerResponsesDescribeRobotApplication {
    return new RoboMakerResponsesDescribeRobotApplication(this, this.__resources, input);
  }

  public describeSimulationApplication(input: shapes.RoboMakerDescribeSimulationApplicationRequest): RoboMakerResponsesDescribeSimulationApplication {
    return new RoboMakerResponsesDescribeSimulationApplication(this, this.__resources, input);
  }

  public describeSimulationJob(input: shapes.RoboMakerDescribeSimulationJobRequest): RoboMakerResponsesDescribeSimulationJob {
    return new RoboMakerResponsesDescribeSimulationJob(this, this.__resources, input);
  }

  public describeSimulationJobBatch(input: shapes.RoboMakerDescribeSimulationJobBatchRequest): RoboMakerResponsesDescribeSimulationJobBatch {
    return new RoboMakerResponsesDescribeSimulationJobBatch(this, this.__resources, input);
  }

  public describeWorld(input: shapes.RoboMakerDescribeWorldRequest): RoboMakerResponsesDescribeWorld {
    return new RoboMakerResponsesDescribeWorld(this, this.__resources, input);
  }

  public describeWorldExportJob(input: shapes.RoboMakerDescribeWorldExportJobRequest): RoboMakerResponsesDescribeWorldExportJob {
    return new RoboMakerResponsesDescribeWorldExportJob(this, this.__resources, input);
  }

  public describeWorldGenerationJob(input: shapes.RoboMakerDescribeWorldGenerationJobRequest): RoboMakerResponsesDescribeWorldGenerationJob {
    return new RoboMakerResponsesDescribeWorldGenerationJob(this, this.__resources, input);
  }

  public describeWorldTemplate(input: shapes.RoboMakerDescribeWorldTemplateRequest): RoboMakerResponsesDescribeWorldTemplate {
    return new RoboMakerResponsesDescribeWorldTemplate(this, this.__resources, input);
  }

  public fetchWorldTemplateBody(input: shapes.RoboMakerGetWorldTemplateBodyRequest): RoboMakerResponsesFetchWorldTemplateBody {
    return new RoboMakerResponsesFetchWorldTemplateBody(this, this.__resources, input);
  }

  public listDeploymentJobs(input: shapes.RoboMakerListDeploymentJobsRequest): RoboMakerResponsesListDeploymentJobs {
    return new RoboMakerResponsesListDeploymentJobs(this, this.__resources, input);
  }

  public listFleets(input: shapes.RoboMakerListFleetsRequest): RoboMakerResponsesListFleets {
    return new RoboMakerResponsesListFleets(this, this.__resources, input);
  }

  public listRobotApplications(input: shapes.RoboMakerListRobotApplicationsRequest): RoboMakerResponsesListRobotApplications {
    return new RoboMakerResponsesListRobotApplications(this, this.__resources, input);
  }

  public listRobots(input: shapes.RoboMakerListRobotsRequest): RoboMakerResponsesListRobots {
    return new RoboMakerResponsesListRobots(this, this.__resources, input);
  }

  public listSimulationApplications(input: shapes.RoboMakerListSimulationApplicationsRequest): RoboMakerResponsesListSimulationApplications {
    return new RoboMakerResponsesListSimulationApplications(this, this.__resources, input);
  }

  public listSimulationJobBatches(input: shapes.RoboMakerListSimulationJobBatchesRequest): RoboMakerResponsesListSimulationJobBatches {
    return new RoboMakerResponsesListSimulationJobBatches(this, this.__resources, input);
  }

  public listSimulationJobs(input: shapes.RoboMakerListSimulationJobsRequest): RoboMakerResponsesListSimulationJobs {
    return new RoboMakerResponsesListSimulationJobs(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.RoboMakerListTagsForResourceRequest): RoboMakerResponsesListTagsForResource {
    return new RoboMakerResponsesListTagsForResource(this, this.__resources, input);
  }

  public listWorldExportJobs(input: shapes.RoboMakerListWorldExportJobsRequest): RoboMakerResponsesListWorldExportJobs {
    return new RoboMakerResponsesListWorldExportJobs(this, this.__resources, input);
  }

  public listWorldGenerationJobs(input: shapes.RoboMakerListWorldGenerationJobsRequest): RoboMakerResponsesListWorldGenerationJobs {
    return new RoboMakerResponsesListWorldGenerationJobs(this, this.__resources, input);
  }

  public listWorldTemplates(input: shapes.RoboMakerListWorldTemplatesRequest): RoboMakerResponsesListWorldTemplates {
    return new RoboMakerResponsesListWorldTemplates(this, this.__resources, input);
  }

  public listWorlds(input: shapes.RoboMakerListWorldsRequest): RoboMakerResponsesListWorlds {
    return new RoboMakerResponsesListWorlds(this, this.__resources, input);
  }

  public registerRobot(input: shapes.RoboMakerRegisterRobotRequest): RoboMakerResponsesRegisterRobot {
    return new RoboMakerResponsesRegisterRobot(this, this.__resources, input);
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

  public startSimulationJobBatch(input: shapes.RoboMakerStartSimulationJobBatchRequest): RoboMakerResponsesStartSimulationJobBatch {
    return new RoboMakerResponsesStartSimulationJobBatch(this, this.__resources, input);
  }

  public syncDeploymentJob(input: shapes.RoboMakerSyncDeploymentJobRequest): RoboMakerResponsesSyncDeploymentJob {
    return new RoboMakerResponsesSyncDeploymentJob(this, this.__resources, input);
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

  public updateRobotApplication(input: shapes.RoboMakerUpdateRobotApplicationRequest): RoboMakerResponsesUpdateRobotApplication {
    return new RoboMakerResponsesUpdateRobotApplication(this, this.__resources, input);
  }

  public updateSimulationApplication(input: shapes.RoboMakerUpdateSimulationApplicationRequest): RoboMakerResponsesUpdateSimulationApplication {
    return new RoboMakerResponsesUpdateSimulationApplication(this, this.__resources, input);
  }

  public updateWorldTemplate(input: shapes.RoboMakerUpdateWorldTemplateRequest): RoboMakerResponsesUpdateWorldTemplate {
    return new RoboMakerResponsesUpdateWorldTemplate(this, this.__resources, input);
  }

}

export class RoboMakerResponsesBatchDeleteWorlds {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerBatchDeleteWorldsRequest) {
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
          worlds: this.__input.worlds,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDeleteWorlds.unprocessedWorlds', props);
    return resource.getResponseField('unprocessedWorlds') as unknown as string[];
  }

}

export class RoboMakerResponsesBatchDescribeSimulationJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerBatchDescribeSimulationJobRequest) {
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
          jobs: this.__input.jobs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDescribeSimulationJob.jobs', props);
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
          jobs: this.__input.jobs,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchDescribeSimulationJob.unprocessedJobs', props);
    return resource.getResponseField('unprocessedJobs') as unknown as string[];
  }

}

export class RoboMakerResponsesCreateDeploymentJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerCreateDeploymentJobRequest) {
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
            concurrentDeploymentPercentage: this.__input.deploymentConfig?.concurrentDeploymentPercentage,
            failureThresholdPercentage: this.__input.deploymentConfig?.failureThresholdPercentage,
            robotDeploymentTimeoutInSeconds: this.__input.deploymentConfig?.robotDeploymentTimeoutInSeconds,
            downloadConditionFile: {
              bucket: this.__input.deploymentConfig?.downloadConditionFile?.bucket,
              key: this.__input.deploymentConfig?.downloadConditionFile?.key,
              etag: this.__input.deploymentConfig?.downloadConditionFile?.etag,
            },
          },
          clientRequestToken: this.__input.clientRequestToken,
          fleet: this.__input.fleet,
          deploymentApplicationConfigs: this.__input.deploymentApplicationConfigs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeploymentJob.arn', props);
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
            concurrentDeploymentPercentage: this.__input.deploymentConfig?.concurrentDeploymentPercentage,
            failureThresholdPercentage: this.__input.deploymentConfig?.failureThresholdPercentage,
            robotDeploymentTimeoutInSeconds: this.__input.deploymentConfig?.robotDeploymentTimeoutInSeconds,
            downloadConditionFile: {
              bucket: this.__input.deploymentConfig?.downloadConditionFile?.bucket,
              key: this.__input.deploymentConfig?.downloadConditionFile?.key,
              etag: this.__input.deploymentConfig?.downloadConditionFile?.etag,
            },
          },
          clientRequestToken: this.__input.clientRequestToken,
          fleet: this.__input.fleet,
          deploymentApplicationConfigs: this.__input.deploymentApplicationConfigs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeploymentJob.fleet', props);
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
            concurrentDeploymentPercentage: this.__input.deploymentConfig?.concurrentDeploymentPercentage,
            failureThresholdPercentage: this.__input.deploymentConfig?.failureThresholdPercentage,
            robotDeploymentTimeoutInSeconds: this.__input.deploymentConfig?.robotDeploymentTimeoutInSeconds,
            downloadConditionFile: {
              bucket: this.__input.deploymentConfig?.downloadConditionFile?.bucket,
              key: this.__input.deploymentConfig?.downloadConditionFile?.key,
              etag: this.__input.deploymentConfig?.downloadConditionFile?.etag,
            },
          },
          clientRequestToken: this.__input.clientRequestToken,
          fleet: this.__input.fleet,
          deploymentApplicationConfigs: this.__input.deploymentApplicationConfigs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeploymentJob.status', props);
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
            concurrentDeploymentPercentage: this.__input.deploymentConfig?.concurrentDeploymentPercentage,
            failureThresholdPercentage: this.__input.deploymentConfig?.failureThresholdPercentage,
            robotDeploymentTimeoutInSeconds: this.__input.deploymentConfig?.robotDeploymentTimeoutInSeconds,
            downloadConditionFile: {
              bucket: this.__input.deploymentConfig?.downloadConditionFile?.bucket,
              key: this.__input.deploymentConfig?.downloadConditionFile?.key,
              etag: this.__input.deploymentConfig?.downloadConditionFile?.etag,
            },
          },
          clientRequestToken: this.__input.clientRequestToken,
          fleet: this.__input.fleet,
          deploymentApplicationConfigs: this.__input.deploymentApplicationConfigs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeploymentJob.deploymentApplicationConfigs', props);
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
            concurrentDeploymentPercentage: this.__input.deploymentConfig?.concurrentDeploymentPercentage,
            failureThresholdPercentage: this.__input.deploymentConfig?.failureThresholdPercentage,
            robotDeploymentTimeoutInSeconds: this.__input.deploymentConfig?.robotDeploymentTimeoutInSeconds,
            downloadConditionFile: {
              bucket: this.__input.deploymentConfig?.downloadConditionFile?.bucket,
              key: this.__input.deploymentConfig?.downloadConditionFile?.key,
              etag: this.__input.deploymentConfig?.downloadConditionFile?.etag,
            },
          },
          clientRequestToken: this.__input.clientRequestToken,
          fleet: this.__input.fleet,
          deploymentApplicationConfigs: this.__input.deploymentApplicationConfigs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeploymentJob.failureReason', props);
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
            concurrentDeploymentPercentage: this.__input.deploymentConfig?.concurrentDeploymentPercentage,
            failureThresholdPercentage: this.__input.deploymentConfig?.failureThresholdPercentage,
            robotDeploymentTimeoutInSeconds: this.__input.deploymentConfig?.robotDeploymentTimeoutInSeconds,
            downloadConditionFile: {
              bucket: this.__input.deploymentConfig?.downloadConditionFile?.bucket,
              key: this.__input.deploymentConfig?.downloadConditionFile?.key,
              etag: this.__input.deploymentConfig?.downloadConditionFile?.etag,
            },
          },
          clientRequestToken: this.__input.clientRequestToken,
          fleet: this.__input.fleet,
          deploymentApplicationConfigs: this.__input.deploymentApplicationConfigs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeploymentJob.failureCode', props);
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
            concurrentDeploymentPercentage: this.__input.deploymentConfig?.concurrentDeploymentPercentage,
            failureThresholdPercentage: this.__input.deploymentConfig?.failureThresholdPercentage,
            robotDeploymentTimeoutInSeconds: this.__input.deploymentConfig?.robotDeploymentTimeoutInSeconds,
            downloadConditionFile: {
              bucket: this.__input.deploymentConfig?.downloadConditionFile?.bucket,
              key: this.__input.deploymentConfig?.downloadConditionFile?.key,
              etag: this.__input.deploymentConfig?.downloadConditionFile?.etag,
            },
          },
          clientRequestToken: this.__input.clientRequestToken,
          fleet: this.__input.fleet,
          deploymentApplicationConfigs: this.__input.deploymentApplicationConfigs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeploymentJob.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

  public get deploymentConfig(): RoboMakerResponsesCreateDeploymentJobDeploymentConfig {
    return new RoboMakerResponsesCreateDeploymentJobDeploymentConfig(this.__scope, this.__resources, this.__input);
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
            concurrentDeploymentPercentage: this.__input.deploymentConfig?.concurrentDeploymentPercentage,
            failureThresholdPercentage: this.__input.deploymentConfig?.failureThresholdPercentage,
            robotDeploymentTimeoutInSeconds: this.__input.deploymentConfig?.robotDeploymentTimeoutInSeconds,
            downloadConditionFile: {
              bucket: this.__input.deploymentConfig?.downloadConditionFile?.bucket,
              key: this.__input.deploymentConfig?.downloadConditionFile?.key,
              etag: this.__input.deploymentConfig?.downloadConditionFile?.etag,
            },
          },
          clientRequestToken: this.__input.clientRequestToken,
          fleet: this.__input.fleet,
          deploymentApplicationConfigs: this.__input.deploymentApplicationConfigs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeploymentJob.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerResponsesCreateDeploymentJobDeploymentConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerCreateDeploymentJobRequest) {
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
            concurrentDeploymentPercentage: this.__input.deploymentConfig?.concurrentDeploymentPercentage,
            failureThresholdPercentage: this.__input.deploymentConfig?.failureThresholdPercentage,
            robotDeploymentTimeoutInSeconds: this.__input.deploymentConfig?.robotDeploymentTimeoutInSeconds,
            downloadConditionFile: {
              bucket: this.__input.deploymentConfig?.downloadConditionFile?.bucket,
              key: this.__input.deploymentConfig?.downloadConditionFile?.key,
              etag: this.__input.deploymentConfig?.downloadConditionFile?.etag,
            },
          },
          clientRequestToken: this.__input.clientRequestToken,
          fleet: this.__input.fleet,
          deploymentApplicationConfigs: this.__input.deploymentApplicationConfigs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeploymentJob.deploymentConfig.concurrentDeploymentPercentage', props);
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
            concurrentDeploymentPercentage: this.__input.deploymentConfig?.concurrentDeploymentPercentage,
            failureThresholdPercentage: this.__input.deploymentConfig?.failureThresholdPercentage,
            robotDeploymentTimeoutInSeconds: this.__input.deploymentConfig?.robotDeploymentTimeoutInSeconds,
            downloadConditionFile: {
              bucket: this.__input.deploymentConfig?.downloadConditionFile?.bucket,
              key: this.__input.deploymentConfig?.downloadConditionFile?.key,
              etag: this.__input.deploymentConfig?.downloadConditionFile?.etag,
            },
          },
          clientRequestToken: this.__input.clientRequestToken,
          fleet: this.__input.fleet,
          deploymentApplicationConfigs: this.__input.deploymentApplicationConfigs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeploymentJob.deploymentConfig.failureThresholdPercentage', props);
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
            concurrentDeploymentPercentage: this.__input.deploymentConfig?.concurrentDeploymentPercentage,
            failureThresholdPercentage: this.__input.deploymentConfig?.failureThresholdPercentage,
            robotDeploymentTimeoutInSeconds: this.__input.deploymentConfig?.robotDeploymentTimeoutInSeconds,
            downloadConditionFile: {
              bucket: this.__input.deploymentConfig?.downloadConditionFile?.bucket,
              key: this.__input.deploymentConfig?.downloadConditionFile?.key,
              etag: this.__input.deploymentConfig?.downloadConditionFile?.etag,
            },
          },
          clientRequestToken: this.__input.clientRequestToken,
          fleet: this.__input.fleet,
          deploymentApplicationConfigs: this.__input.deploymentApplicationConfigs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeploymentJob.deploymentConfig.robotDeploymentTimeoutInSeconds', props);
    return resource.getResponseField('deploymentConfig.robotDeploymentTimeoutInSeconds') as unknown as number;
  }

  public get downloadConditionFile(): RoboMakerResponsesCreateDeploymentJobDeploymentConfigDownloadConditionFile {
    return new RoboMakerResponsesCreateDeploymentJobDeploymentConfigDownloadConditionFile(this.__scope, this.__resources, this.__input);
  }

}

export class RoboMakerResponsesCreateDeploymentJobDeploymentConfigDownloadConditionFile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerCreateDeploymentJobRequest) {
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
            concurrentDeploymentPercentage: this.__input.deploymentConfig?.concurrentDeploymentPercentage,
            failureThresholdPercentage: this.__input.deploymentConfig?.failureThresholdPercentage,
            robotDeploymentTimeoutInSeconds: this.__input.deploymentConfig?.robotDeploymentTimeoutInSeconds,
            downloadConditionFile: {
              bucket: this.__input.deploymentConfig?.downloadConditionFile?.bucket,
              key: this.__input.deploymentConfig?.downloadConditionFile?.key,
              etag: this.__input.deploymentConfig?.downloadConditionFile?.etag,
            },
          },
          clientRequestToken: this.__input.clientRequestToken,
          fleet: this.__input.fleet,
          deploymentApplicationConfigs: this.__input.deploymentApplicationConfigs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeploymentJob.deploymentConfig.downloadConditionFile.bucket', props);
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
            concurrentDeploymentPercentage: this.__input.deploymentConfig?.concurrentDeploymentPercentage,
            failureThresholdPercentage: this.__input.deploymentConfig?.failureThresholdPercentage,
            robotDeploymentTimeoutInSeconds: this.__input.deploymentConfig?.robotDeploymentTimeoutInSeconds,
            downloadConditionFile: {
              bucket: this.__input.deploymentConfig?.downloadConditionFile?.bucket,
              key: this.__input.deploymentConfig?.downloadConditionFile?.key,
              etag: this.__input.deploymentConfig?.downloadConditionFile?.etag,
            },
          },
          clientRequestToken: this.__input.clientRequestToken,
          fleet: this.__input.fleet,
          deploymentApplicationConfigs: this.__input.deploymentApplicationConfigs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeploymentJob.deploymentConfig.downloadConditionFile.key', props);
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
            concurrentDeploymentPercentage: this.__input.deploymentConfig?.concurrentDeploymentPercentage,
            failureThresholdPercentage: this.__input.deploymentConfig?.failureThresholdPercentage,
            robotDeploymentTimeoutInSeconds: this.__input.deploymentConfig?.robotDeploymentTimeoutInSeconds,
            downloadConditionFile: {
              bucket: this.__input.deploymentConfig?.downloadConditionFile?.bucket,
              key: this.__input.deploymentConfig?.downloadConditionFile?.key,
              etag: this.__input.deploymentConfig?.downloadConditionFile?.etag,
            },
          },
          clientRequestToken: this.__input.clientRequestToken,
          fleet: this.__input.fleet,
          deploymentApplicationConfigs: this.__input.deploymentApplicationConfigs,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDeploymentJob.deploymentConfig.downloadConditionFile.etag', props);
    return resource.getResponseField('deploymentConfig.downloadConditionFile.etag') as unknown as string;
  }

}

export class RoboMakerResponsesCreateFleet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerCreateFleetRequest) {
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
          name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.arn', props);
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
          name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.name', props);
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
          name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.createdAt', props);
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
          name: this.__input.name,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateFleet.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerResponsesCreateRobot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerCreateRobotRequest) {
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
          name: this.__input.name,
          architecture: this.__input.architecture,
          greengrassGroupId: this.__input.greengrassGroupId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRobot.arn', props);
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
          name: this.__input.name,
          architecture: this.__input.architecture,
          greengrassGroupId: this.__input.greengrassGroupId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRobot.name', props);
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
          name: this.__input.name,
          architecture: this.__input.architecture,
          greengrassGroupId: this.__input.greengrassGroupId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRobot.createdAt', props);
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
          name: this.__input.name,
          architecture: this.__input.architecture,
          greengrassGroupId: this.__input.greengrassGroupId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRobot.greengrassGroupId', props);
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
          name: this.__input.name,
          architecture: this.__input.architecture,
          greengrassGroupId: this.__input.greengrassGroupId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRobot.architecture', props);
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
          name: this.__input.name,
          architecture: this.__input.architecture,
          greengrassGroupId: this.__input.greengrassGroupId,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRobot.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerResponsesCreateRobotApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerCreateRobotApplicationRequest) {
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
          name: this.__input.name,
          sources: this.__input.sources,
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRobotApplication.arn', props);
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
          name: this.__input.name,
          sources: this.__input.sources,
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRobotApplication.name', props);
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
          name: this.__input.name,
          sources: this.__input.sources,
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRobotApplication.version', props);
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
          name: this.__input.name,
          sources: this.__input.sources,
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRobotApplication.sources', props);
    return resource.getResponseField('sources') as unknown as shapes.RoboMakerSource[];
  }

  public get robotSoftwareSuite(): RoboMakerResponsesCreateRobotApplicationRobotSoftwareSuite {
    return new RoboMakerResponsesCreateRobotApplicationRobotSoftwareSuite(this.__scope, this.__resources, this.__input);
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
          name: this.__input.name,
          sources: this.__input.sources,
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRobotApplication.lastUpdatedAt', props);
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
          name: this.__input.name,
          sources: this.__input.sources,
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRobotApplication.revisionId', props);
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
          name: this.__input.name,
          sources: this.__input.sources,
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRobotApplication.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerResponsesCreateRobotApplicationRobotSoftwareSuite {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerCreateRobotApplicationRequest) {
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
          name: this.__input.name,
          sources: this.__input.sources,
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRobotApplication.robotSoftwareSuite.name', props);
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
          name: this.__input.name,
          sources: this.__input.sources,
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRobotApplication.robotSoftwareSuite.version', props);
    return resource.getResponseField('robotSoftwareSuite.version') as unknown as string;
  }

}

export class RoboMakerResponsesCreateRobotApplicationVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerCreateRobotApplicationVersionRequest) {
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
          application: this.__input.application,
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRobotApplicationVersion.arn', props);
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
          application: this.__input.application,
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRobotApplicationVersion.name', props);
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
          application: this.__input.application,
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRobotApplicationVersion.version', props);
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
          application: this.__input.application,
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRobotApplicationVersion.sources', props);
    return resource.getResponseField('sources') as unknown as shapes.RoboMakerSource[];
  }

  public get robotSoftwareSuite(): RoboMakerResponsesCreateRobotApplicationVersionRobotSoftwareSuite {
    return new RoboMakerResponsesCreateRobotApplicationVersionRobotSoftwareSuite(this.__scope, this.__resources, this.__input);
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
          application: this.__input.application,
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRobotApplicationVersion.lastUpdatedAt', props);
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
          application: this.__input.application,
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRobotApplicationVersion.revisionId', props);
    return resource.getResponseField('revisionId') as unknown as string;
  }

}

export class RoboMakerResponsesCreateRobotApplicationVersionRobotSoftwareSuite {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerCreateRobotApplicationVersionRequest) {
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
          application: this.__input.application,
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRobotApplicationVersion.robotSoftwareSuite.name', props);
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
          application: this.__input.application,
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRobotApplicationVersion.robotSoftwareSuite.version', props);
    return resource.getResponseField('robotSoftwareSuite.version') as unknown as string;
  }

}

export class RoboMakerResponsesCreateSimulationApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerCreateSimulationApplicationRequest) {
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
          name: this.__input.name,
          sources: this.__input.sources,
          simulationSoftwareSuite: {
            name: this.__input.simulationSoftwareSuite.name,
            version: this.__input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.__input.renderingEngine?.name,
            version: this.__input.renderingEngine?.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationApplication.arn', props);
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
          name: this.__input.name,
          sources: this.__input.sources,
          simulationSoftwareSuite: {
            name: this.__input.simulationSoftwareSuite.name,
            version: this.__input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.__input.renderingEngine?.name,
            version: this.__input.renderingEngine?.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationApplication.name', props);
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
          name: this.__input.name,
          sources: this.__input.sources,
          simulationSoftwareSuite: {
            name: this.__input.simulationSoftwareSuite.name,
            version: this.__input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.__input.renderingEngine?.name,
            version: this.__input.renderingEngine?.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationApplication.version', props);
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
          name: this.__input.name,
          sources: this.__input.sources,
          simulationSoftwareSuite: {
            name: this.__input.simulationSoftwareSuite.name,
            version: this.__input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.__input.renderingEngine?.name,
            version: this.__input.renderingEngine?.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationApplication.sources', props);
    return resource.getResponseField('sources') as unknown as shapes.RoboMakerSource[];
  }

  public get simulationSoftwareSuite(): RoboMakerResponsesCreateSimulationApplicationSimulationSoftwareSuite {
    return new RoboMakerResponsesCreateSimulationApplicationSimulationSoftwareSuite(this.__scope, this.__resources, this.__input);
  }

  public get robotSoftwareSuite(): RoboMakerResponsesCreateSimulationApplicationRobotSoftwareSuite {
    return new RoboMakerResponsesCreateSimulationApplicationRobotSoftwareSuite(this.__scope, this.__resources, this.__input);
  }

  public get renderingEngine(): RoboMakerResponsesCreateSimulationApplicationRenderingEngine {
    return new RoboMakerResponsesCreateSimulationApplicationRenderingEngine(this.__scope, this.__resources, this.__input);
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
          name: this.__input.name,
          sources: this.__input.sources,
          simulationSoftwareSuite: {
            name: this.__input.simulationSoftwareSuite.name,
            version: this.__input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.__input.renderingEngine?.name,
            version: this.__input.renderingEngine?.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationApplication.lastUpdatedAt', props);
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
          name: this.__input.name,
          sources: this.__input.sources,
          simulationSoftwareSuite: {
            name: this.__input.simulationSoftwareSuite.name,
            version: this.__input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.__input.renderingEngine?.name,
            version: this.__input.renderingEngine?.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationApplication.revisionId', props);
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
          name: this.__input.name,
          sources: this.__input.sources,
          simulationSoftwareSuite: {
            name: this.__input.simulationSoftwareSuite.name,
            version: this.__input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.__input.renderingEngine?.name,
            version: this.__input.renderingEngine?.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationApplication.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerResponsesCreateSimulationApplicationSimulationSoftwareSuite {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerCreateSimulationApplicationRequest) {
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
          name: this.__input.name,
          sources: this.__input.sources,
          simulationSoftwareSuite: {
            name: this.__input.simulationSoftwareSuite.name,
            version: this.__input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.__input.renderingEngine?.name,
            version: this.__input.renderingEngine?.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationApplication.simulationSoftwareSuite.name', props);
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
          name: this.__input.name,
          sources: this.__input.sources,
          simulationSoftwareSuite: {
            name: this.__input.simulationSoftwareSuite.name,
            version: this.__input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.__input.renderingEngine?.name,
            version: this.__input.renderingEngine?.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationApplication.simulationSoftwareSuite.version', props);
    return resource.getResponseField('simulationSoftwareSuite.version') as unknown as string;
  }

}

export class RoboMakerResponsesCreateSimulationApplicationRobotSoftwareSuite {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerCreateSimulationApplicationRequest) {
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
          name: this.__input.name,
          sources: this.__input.sources,
          simulationSoftwareSuite: {
            name: this.__input.simulationSoftwareSuite.name,
            version: this.__input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.__input.renderingEngine?.name,
            version: this.__input.renderingEngine?.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationApplication.robotSoftwareSuite.name', props);
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
          name: this.__input.name,
          sources: this.__input.sources,
          simulationSoftwareSuite: {
            name: this.__input.simulationSoftwareSuite.name,
            version: this.__input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.__input.renderingEngine?.name,
            version: this.__input.renderingEngine?.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationApplication.robotSoftwareSuite.version', props);
    return resource.getResponseField('robotSoftwareSuite.version') as unknown as string;
  }

}

export class RoboMakerResponsesCreateSimulationApplicationRenderingEngine {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerCreateSimulationApplicationRequest) {
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
          name: this.__input.name,
          sources: this.__input.sources,
          simulationSoftwareSuite: {
            name: this.__input.simulationSoftwareSuite.name,
            version: this.__input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.__input.renderingEngine?.name,
            version: this.__input.renderingEngine?.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationApplication.renderingEngine.name', props);
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
          name: this.__input.name,
          sources: this.__input.sources,
          simulationSoftwareSuite: {
            name: this.__input.simulationSoftwareSuite.name,
            version: this.__input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.__input.renderingEngine?.name,
            version: this.__input.renderingEngine?.version,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationApplication.renderingEngine.version', props);
    return resource.getResponseField('renderingEngine.version') as unknown as string;
  }

}

export class RoboMakerResponsesCreateSimulationApplicationVersion {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerCreateSimulationApplicationVersionRequest) {
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
          application: this.__input.application,
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationApplicationVersion.arn', props);
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
          application: this.__input.application,
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationApplicationVersion.name', props);
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
          application: this.__input.application,
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationApplicationVersion.version', props);
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
          application: this.__input.application,
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationApplicationVersion.sources', props);
    return resource.getResponseField('sources') as unknown as shapes.RoboMakerSource[];
  }

  public get simulationSoftwareSuite(): RoboMakerResponsesCreateSimulationApplicationVersionSimulationSoftwareSuite {
    return new RoboMakerResponsesCreateSimulationApplicationVersionSimulationSoftwareSuite(this.__scope, this.__resources, this.__input);
  }

  public get robotSoftwareSuite(): RoboMakerResponsesCreateSimulationApplicationVersionRobotSoftwareSuite {
    return new RoboMakerResponsesCreateSimulationApplicationVersionRobotSoftwareSuite(this.__scope, this.__resources, this.__input);
  }

  public get renderingEngine(): RoboMakerResponsesCreateSimulationApplicationVersionRenderingEngine {
    return new RoboMakerResponsesCreateSimulationApplicationVersionRenderingEngine(this.__scope, this.__resources, this.__input);
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
          application: this.__input.application,
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationApplicationVersion.lastUpdatedAt', props);
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
          application: this.__input.application,
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationApplicationVersion.revisionId', props);
    return resource.getResponseField('revisionId') as unknown as string;
  }

}

export class RoboMakerResponsesCreateSimulationApplicationVersionSimulationSoftwareSuite {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerCreateSimulationApplicationVersionRequest) {
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
          application: this.__input.application,
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationApplicationVersion.simulationSoftwareSuite.name', props);
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
          application: this.__input.application,
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationApplicationVersion.simulationSoftwareSuite.version', props);
    return resource.getResponseField('simulationSoftwareSuite.version') as unknown as string;
  }

}

export class RoboMakerResponsesCreateSimulationApplicationVersionRobotSoftwareSuite {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerCreateSimulationApplicationVersionRequest) {
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
          application: this.__input.application,
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationApplicationVersion.robotSoftwareSuite.name', props);
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
          application: this.__input.application,
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationApplicationVersion.robotSoftwareSuite.version', props);
    return resource.getResponseField('robotSoftwareSuite.version') as unknown as string;
  }

}

export class RoboMakerResponsesCreateSimulationApplicationVersionRenderingEngine {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerCreateSimulationApplicationVersionRequest) {
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
          application: this.__input.application,
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationApplicationVersion.renderingEngine.name', props);
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
          application: this.__input.application,
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationApplicationVersion.renderingEngine.version', props);
    return resource.getResponseField('renderingEngine.version') as unknown as string;
  }

}

export class RoboMakerResponsesCreateSimulationJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerCreateSimulationJobRequest) {
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
          clientRequestToken: this.__input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.__input.outputLocation?.s3Bucket,
            s3Prefix: this.__input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.__input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.__input.maxJobDurationInSeconds,
          iamRole: this.__input.iamRole,
          failureBehavior: this.__input.failureBehavior,
          robotApplications: this.__input.robotApplications,
          simulationApplications: this.__input.simulationApplications,
          dataSources: this.__input.dataSources,
          tags: this.__input.tags,
          vpcConfig: {
            subnets: this.__input.vpcConfig?.subnets,
            securityGroups: this.__input.vpcConfig?.securityGroups,
            assignPublicIp: this.__input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.__input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationJob.arn', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.__input.outputLocation?.s3Bucket,
            s3Prefix: this.__input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.__input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.__input.maxJobDurationInSeconds,
          iamRole: this.__input.iamRole,
          failureBehavior: this.__input.failureBehavior,
          robotApplications: this.__input.robotApplications,
          simulationApplications: this.__input.simulationApplications,
          dataSources: this.__input.dataSources,
          tags: this.__input.tags,
          vpcConfig: {
            subnets: this.__input.vpcConfig?.subnets,
            securityGroups: this.__input.vpcConfig?.securityGroups,
            assignPublicIp: this.__input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.__input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationJob.status', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.__input.outputLocation?.s3Bucket,
            s3Prefix: this.__input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.__input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.__input.maxJobDurationInSeconds,
          iamRole: this.__input.iamRole,
          failureBehavior: this.__input.failureBehavior,
          robotApplications: this.__input.robotApplications,
          simulationApplications: this.__input.simulationApplications,
          dataSources: this.__input.dataSources,
          tags: this.__input.tags,
          vpcConfig: {
            subnets: this.__input.vpcConfig?.subnets,
            securityGroups: this.__input.vpcConfig?.securityGroups,
            assignPublicIp: this.__input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.__input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationJob.lastStartedAt', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.__input.outputLocation?.s3Bucket,
            s3Prefix: this.__input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.__input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.__input.maxJobDurationInSeconds,
          iamRole: this.__input.iamRole,
          failureBehavior: this.__input.failureBehavior,
          robotApplications: this.__input.robotApplications,
          simulationApplications: this.__input.simulationApplications,
          dataSources: this.__input.dataSources,
          tags: this.__input.tags,
          vpcConfig: {
            subnets: this.__input.vpcConfig?.subnets,
            securityGroups: this.__input.vpcConfig?.securityGroups,
            assignPublicIp: this.__input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.__input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationJob.lastUpdatedAt', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.__input.outputLocation?.s3Bucket,
            s3Prefix: this.__input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.__input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.__input.maxJobDurationInSeconds,
          iamRole: this.__input.iamRole,
          failureBehavior: this.__input.failureBehavior,
          robotApplications: this.__input.robotApplications,
          simulationApplications: this.__input.simulationApplications,
          dataSources: this.__input.dataSources,
          tags: this.__input.tags,
          vpcConfig: {
            subnets: this.__input.vpcConfig?.subnets,
            securityGroups: this.__input.vpcConfig?.securityGroups,
            assignPublicIp: this.__input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.__input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationJob.failureBehavior', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.__input.outputLocation?.s3Bucket,
            s3Prefix: this.__input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.__input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.__input.maxJobDurationInSeconds,
          iamRole: this.__input.iamRole,
          failureBehavior: this.__input.failureBehavior,
          robotApplications: this.__input.robotApplications,
          simulationApplications: this.__input.simulationApplications,
          dataSources: this.__input.dataSources,
          tags: this.__input.tags,
          vpcConfig: {
            subnets: this.__input.vpcConfig?.subnets,
            securityGroups: this.__input.vpcConfig?.securityGroups,
            assignPublicIp: this.__input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.__input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationJob.failureCode', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.__input.outputLocation?.s3Bucket,
            s3Prefix: this.__input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.__input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.__input.maxJobDurationInSeconds,
          iamRole: this.__input.iamRole,
          failureBehavior: this.__input.failureBehavior,
          robotApplications: this.__input.robotApplications,
          simulationApplications: this.__input.simulationApplications,
          dataSources: this.__input.dataSources,
          tags: this.__input.tags,
          vpcConfig: {
            subnets: this.__input.vpcConfig?.subnets,
            securityGroups: this.__input.vpcConfig?.securityGroups,
            assignPublicIp: this.__input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.__input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationJob.clientRequestToken', props);
    return resource.getResponseField('clientRequestToken') as unknown as string;
  }

  public get outputLocation(): RoboMakerResponsesCreateSimulationJobOutputLocation {
    return new RoboMakerResponsesCreateSimulationJobOutputLocation(this.__scope, this.__resources, this.__input);
  }

  public get loggingConfig(): RoboMakerResponsesCreateSimulationJobLoggingConfig {
    return new RoboMakerResponsesCreateSimulationJobLoggingConfig(this.__scope, this.__resources, this.__input);
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
          clientRequestToken: this.__input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.__input.outputLocation?.s3Bucket,
            s3Prefix: this.__input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.__input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.__input.maxJobDurationInSeconds,
          iamRole: this.__input.iamRole,
          failureBehavior: this.__input.failureBehavior,
          robotApplications: this.__input.robotApplications,
          simulationApplications: this.__input.simulationApplications,
          dataSources: this.__input.dataSources,
          tags: this.__input.tags,
          vpcConfig: {
            subnets: this.__input.vpcConfig?.subnets,
            securityGroups: this.__input.vpcConfig?.securityGroups,
            assignPublicIp: this.__input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.__input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationJob.maxJobDurationInSeconds', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.__input.outputLocation?.s3Bucket,
            s3Prefix: this.__input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.__input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.__input.maxJobDurationInSeconds,
          iamRole: this.__input.iamRole,
          failureBehavior: this.__input.failureBehavior,
          robotApplications: this.__input.robotApplications,
          simulationApplications: this.__input.simulationApplications,
          dataSources: this.__input.dataSources,
          tags: this.__input.tags,
          vpcConfig: {
            subnets: this.__input.vpcConfig?.subnets,
            securityGroups: this.__input.vpcConfig?.securityGroups,
            assignPublicIp: this.__input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.__input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationJob.simulationTimeMillis', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.__input.outputLocation?.s3Bucket,
            s3Prefix: this.__input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.__input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.__input.maxJobDurationInSeconds,
          iamRole: this.__input.iamRole,
          failureBehavior: this.__input.failureBehavior,
          robotApplications: this.__input.robotApplications,
          simulationApplications: this.__input.simulationApplications,
          dataSources: this.__input.dataSources,
          tags: this.__input.tags,
          vpcConfig: {
            subnets: this.__input.vpcConfig?.subnets,
            securityGroups: this.__input.vpcConfig?.securityGroups,
            assignPublicIp: this.__input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.__input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationJob.iamRole', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.__input.outputLocation?.s3Bucket,
            s3Prefix: this.__input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.__input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.__input.maxJobDurationInSeconds,
          iamRole: this.__input.iamRole,
          failureBehavior: this.__input.failureBehavior,
          robotApplications: this.__input.robotApplications,
          simulationApplications: this.__input.simulationApplications,
          dataSources: this.__input.dataSources,
          tags: this.__input.tags,
          vpcConfig: {
            subnets: this.__input.vpcConfig?.subnets,
            securityGroups: this.__input.vpcConfig?.securityGroups,
            assignPublicIp: this.__input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.__input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationJob.robotApplications', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.__input.outputLocation?.s3Bucket,
            s3Prefix: this.__input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.__input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.__input.maxJobDurationInSeconds,
          iamRole: this.__input.iamRole,
          failureBehavior: this.__input.failureBehavior,
          robotApplications: this.__input.robotApplications,
          simulationApplications: this.__input.simulationApplications,
          dataSources: this.__input.dataSources,
          tags: this.__input.tags,
          vpcConfig: {
            subnets: this.__input.vpcConfig?.subnets,
            securityGroups: this.__input.vpcConfig?.securityGroups,
            assignPublicIp: this.__input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.__input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationJob.simulationApplications', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.__input.outputLocation?.s3Bucket,
            s3Prefix: this.__input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.__input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.__input.maxJobDurationInSeconds,
          iamRole: this.__input.iamRole,
          failureBehavior: this.__input.failureBehavior,
          robotApplications: this.__input.robotApplications,
          simulationApplications: this.__input.simulationApplications,
          dataSources: this.__input.dataSources,
          tags: this.__input.tags,
          vpcConfig: {
            subnets: this.__input.vpcConfig?.subnets,
            securityGroups: this.__input.vpcConfig?.securityGroups,
            assignPublicIp: this.__input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.__input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationJob.dataSources', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.__input.outputLocation?.s3Bucket,
            s3Prefix: this.__input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.__input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.__input.maxJobDurationInSeconds,
          iamRole: this.__input.iamRole,
          failureBehavior: this.__input.failureBehavior,
          robotApplications: this.__input.robotApplications,
          simulationApplications: this.__input.simulationApplications,
          dataSources: this.__input.dataSources,
          tags: this.__input.tags,
          vpcConfig: {
            subnets: this.__input.vpcConfig?.subnets,
            securityGroups: this.__input.vpcConfig?.securityGroups,
            assignPublicIp: this.__input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.__input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationJob.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get vpcConfig(): RoboMakerResponsesCreateSimulationJobVpcConfig {
    return new RoboMakerResponsesCreateSimulationJobVpcConfig(this.__scope, this.__resources, this.__input);
  }

  public get compute(): RoboMakerResponsesCreateSimulationJobCompute {
    return new RoboMakerResponsesCreateSimulationJobCompute(this.__scope, this.__resources, this.__input);
  }

}

export class RoboMakerResponsesCreateSimulationJobOutputLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerCreateSimulationJobRequest) {
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
          clientRequestToken: this.__input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.__input.outputLocation?.s3Bucket,
            s3Prefix: this.__input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.__input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.__input.maxJobDurationInSeconds,
          iamRole: this.__input.iamRole,
          failureBehavior: this.__input.failureBehavior,
          robotApplications: this.__input.robotApplications,
          simulationApplications: this.__input.simulationApplications,
          dataSources: this.__input.dataSources,
          tags: this.__input.tags,
          vpcConfig: {
            subnets: this.__input.vpcConfig?.subnets,
            securityGroups: this.__input.vpcConfig?.securityGroups,
            assignPublicIp: this.__input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.__input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationJob.outputLocation.s3Bucket', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.__input.outputLocation?.s3Bucket,
            s3Prefix: this.__input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.__input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.__input.maxJobDurationInSeconds,
          iamRole: this.__input.iamRole,
          failureBehavior: this.__input.failureBehavior,
          robotApplications: this.__input.robotApplications,
          simulationApplications: this.__input.simulationApplications,
          dataSources: this.__input.dataSources,
          tags: this.__input.tags,
          vpcConfig: {
            subnets: this.__input.vpcConfig?.subnets,
            securityGroups: this.__input.vpcConfig?.securityGroups,
            assignPublicIp: this.__input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.__input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationJob.outputLocation.s3Prefix', props);
    return resource.getResponseField('outputLocation.s3Prefix') as unknown as string;
  }

}

export class RoboMakerResponsesCreateSimulationJobLoggingConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerCreateSimulationJobRequest) {
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
          clientRequestToken: this.__input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.__input.outputLocation?.s3Bucket,
            s3Prefix: this.__input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.__input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.__input.maxJobDurationInSeconds,
          iamRole: this.__input.iamRole,
          failureBehavior: this.__input.failureBehavior,
          robotApplications: this.__input.robotApplications,
          simulationApplications: this.__input.simulationApplications,
          dataSources: this.__input.dataSources,
          tags: this.__input.tags,
          vpcConfig: {
            subnets: this.__input.vpcConfig?.subnets,
            securityGroups: this.__input.vpcConfig?.securityGroups,
            assignPublicIp: this.__input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.__input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationJob.loggingConfig.recordAllRosTopics', props);
    return resource.getResponseField('loggingConfig.recordAllRosTopics') as unknown as boolean;
  }

}

export class RoboMakerResponsesCreateSimulationJobVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerCreateSimulationJobRequest) {
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
          clientRequestToken: this.__input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.__input.outputLocation?.s3Bucket,
            s3Prefix: this.__input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.__input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.__input.maxJobDurationInSeconds,
          iamRole: this.__input.iamRole,
          failureBehavior: this.__input.failureBehavior,
          robotApplications: this.__input.robotApplications,
          simulationApplications: this.__input.simulationApplications,
          dataSources: this.__input.dataSources,
          tags: this.__input.tags,
          vpcConfig: {
            subnets: this.__input.vpcConfig?.subnets,
            securityGroups: this.__input.vpcConfig?.securityGroups,
            assignPublicIp: this.__input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.__input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationJob.vpcConfig.subnets', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.__input.outputLocation?.s3Bucket,
            s3Prefix: this.__input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.__input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.__input.maxJobDurationInSeconds,
          iamRole: this.__input.iamRole,
          failureBehavior: this.__input.failureBehavior,
          robotApplications: this.__input.robotApplications,
          simulationApplications: this.__input.simulationApplications,
          dataSources: this.__input.dataSources,
          tags: this.__input.tags,
          vpcConfig: {
            subnets: this.__input.vpcConfig?.subnets,
            securityGroups: this.__input.vpcConfig?.securityGroups,
            assignPublicIp: this.__input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.__input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationJob.vpcConfig.securityGroups', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.__input.outputLocation?.s3Bucket,
            s3Prefix: this.__input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.__input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.__input.maxJobDurationInSeconds,
          iamRole: this.__input.iamRole,
          failureBehavior: this.__input.failureBehavior,
          robotApplications: this.__input.robotApplications,
          simulationApplications: this.__input.simulationApplications,
          dataSources: this.__input.dataSources,
          tags: this.__input.tags,
          vpcConfig: {
            subnets: this.__input.vpcConfig?.subnets,
            securityGroups: this.__input.vpcConfig?.securityGroups,
            assignPublicIp: this.__input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.__input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationJob.vpcConfig.vpcId', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.__input.outputLocation?.s3Bucket,
            s3Prefix: this.__input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.__input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.__input.maxJobDurationInSeconds,
          iamRole: this.__input.iamRole,
          failureBehavior: this.__input.failureBehavior,
          robotApplications: this.__input.robotApplications,
          simulationApplications: this.__input.simulationApplications,
          dataSources: this.__input.dataSources,
          tags: this.__input.tags,
          vpcConfig: {
            subnets: this.__input.vpcConfig?.subnets,
            securityGroups: this.__input.vpcConfig?.securityGroups,
            assignPublicIp: this.__input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.__input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationJob.vpcConfig.assignPublicIp', props);
    return resource.getResponseField('vpcConfig.assignPublicIp') as unknown as boolean;
  }

}

export class RoboMakerResponsesCreateSimulationJobCompute {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerCreateSimulationJobRequest) {
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
          clientRequestToken: this.__input.clientRequestToken,
          outputLocation: {
            s3Bucket: this.__input.outputLocation?.s3Bucket,
            s3Prefix: this.__input.outputLocation?.s3Prefix,
          },
          loggingConfig: {
            recordAllRosTopics: this.__input.loggingConfig?.recordAllRosTopics,
          },
          maxJobDurationInSeconds: this.__input.maxJobDurationInSeconds,
          iamRole: this.__input.iamRole,
          failureBehavior: this.__input.failureBehavior,
          robotApplications: this.__input.robotApplications,
          simulationApplications: this.__input.simulationApplications,
          dataSources: this.__input.dataSources,
          tags: this.__input.tags,
          vpcConfig: {
            subnets: this.__input.vpcConfig?.subnets,
            securityGroups: this.__input.vpcConfig?.securityGroups,
            assignPublicIp: this.__input.vpcConfig?.assignPublicIp,
          },
          compute: {
            simulationUnitLimit: this.__input.compute?.simulationUnitLimit,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateSimulationJob.compute.simulationUnitLimit', props);
    return resource.getResponseField('compute.simulationUnitLimit') as unknown as number;
  }

}

export class RoboMakerResponsesCreateWorldExportJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerCreateWorldExportJobRequest) {
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
          clientRequestToken: this.__input.clientRequestToken,
          worlds: this.__input.worlds,
          outputLocation: {
            s3Bucket: this.__input.outputLocation.s3Bucket,
            s3Prefix: this.__input.outputLocation.s3Prefix,
          },
          iamRole: this.__input.iamRole,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorldExportJob.arn', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          worlds: this.__input.worlds,
          outputLocation: {
            s3Bucket: this.__input.outputLocation.s3Bucket,
            s3Prefix: this.__input.outputLocation.s3Prefix,
          },
          iamRole: this.__input.iamRole,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorldExportJob.status', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          worlds: this.__input.worlds,
          outputLocation: {
            s3Bucket: this.__input.outputLocation.s3Bucket,
            s3Prefix: this.__input.outputLocation.s3Prefix,
          },
          iamRole: this.__input.iamRole,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorldExportJob.createdAt', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          worlds: this.__input.worlds,
          outputLocation: {
            s3Bucket: this.__input.outputLocation.s3Bucket,
            s3Prefix: this.__input.outputLocation.s3Prefix,
          },
          iamRole: this.__input.iamRole,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorldExportJob.failureCode', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          worlds: this.__input.worlds,
          outputLocation: {
            s3Bucket: this.__input.outputLocation.s3Bucket,
            s3Prefix: this.__input.outputLocation.s3Prefix,
          },
          iamRole: this.__input.iamRole,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorldExportJob.clientRequestToken', props);
    return resource.getResponseField('clientRequestToken') as unknown as string;
  }

  public get outputLocation(): RoboMakerResponsesCreateWorldExportJobOutputLocation {
    return new RoboMakerResponsesCreateWorldExportJobOutputLocation(this.__scope, this.__resources, this.__input);
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
          clientRequestToken: this.__input.clientRequestToken,
          worlds: this.__input.worlds,
          outputLocation: {
            s3Bucket: this.__input.outputLocation.s3Bucket,
            s3Prefix: this.__input.outputLocation.s3Prefix,
          },
          iamRole: this.__input.iamRole,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorldExportJob.iamRole', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          worlds: this.__input.worlds,
          outputLocation: {
            s3Bucket: this.__input.outputLocation.s3Bucket,
            s3Prefix: this.__input.outputLocation.s3Prefix,
          },
          iamRole: this.__input.iamRole,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorldExportJob.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerResponsesCreateWorldExportJobOutputLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerCreateWorldExportJobRequest) {
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
          clientRequestToken: this.__input.clientRequestToken,
          worlds: this.__input.worlds,
          outputLocation: {
            s3Bucket: this.__input.outputLocation.s3Bucket,
            s3Prefix: this.__input.outputLocation.s3Prefix,
          },
          iamRole: this.__input.iamRole,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorldExportJob.outputLocation.s3Bucket', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          worlds: this.__input.worlds,
          outputLocation: {
            s3Bucket: this.__input.outputLocation.s3Bucket,
            s3Prefix: this.__input.outputLocation.s3Prefix,
          },
          iamRole: this.__input.iamRole,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorldExportJob.outputLocation.s3Prefix', props);
    return resource.getResponseField('outputLocation.s3Prefix') as unknown as string;
  }

}

export class RoboMakerResponsesCreateWorldGenerationJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerCreateWorldGenerationJobRequest) {
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
          clientRequestToken: this.__input.clientRequestToken,
          template: this.__input.template,
          worldCount: {
            floorplanCount: this.__input.worldCount.floorplanCount,
            interiorCountPerFloorplan: this.__input.worldCount.interiorCountPerFloorplan,
          },
          tags: this.__input.tags,
          worldTags: this.__input.worldTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorldGenerationJob.arn', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          template: this.__input.template,
          worldCount: {
            floorplanCount: this.__input.worldCount.floorplanCount,
            interiorCountPerFloorplan: this.__input.worldCount.interiorCountPerFloorplan,
          },
          tags: this.__input.tags,
          worldTags: this.__input.worldTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorldGenerationJob.status', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          template: this.__input.template,
          worldCount: {
            floorplanCount: this.__input.worldCount.floorplanCount,
            interiorCountPerFloorplan: this.__input.worldCount.interiorCountPerFloorplan,
          },
          tags: this.__input.tags,
          worldTags: this.__input.worldTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorldGenerationJob.createdAt', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          template: this.__input.template,
          worldCount: {
            floorplanCount: this.__input.worldCount.floorplanCount,
            interiorCountPerFloorplan: this.__input.worldCount.interiorCountPerFloorplan,
          },
          tags: this.__input.tags,
          worldTags: this.__input.worldTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorldGenerationJob.failureCode', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          template: this.__input.template,
          worldCount: {
            floorplanCount: this.__input.worldCount.floorplanCount,
            interiorCountPerFloorplan: this.__input.worldCount.interiorCountPerFloorplan,
          },
          tags: this.__input.tags,
          worldTags: this.__input.worldTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorldGenerationJob.clientRequestToken', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          template: this.__input.template,
          worldCount: {
            floorplanCount: this.__input.worldCount.floorplanCount,
            interiorCountPerFloorplan: this.__input.worldCount.interiorCountPerFloorplan,
          },
          tags: this.__input.tags,
          worldTags: this.__input.worldTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorldGenerationJob.template', props);
    return resource.getResponseField('template') as unknown as string;
  }

  public get worldCount(): RoboMakerResponsesCreateWorldGenerationJobWorldCount {
    return new RoboMakerResponsesCreateWorldGenerationJobWorldCount(this.__scope, this.__resources, this.__input);
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
          clientRequestToken: this.__input.clientRequestToken,
          template: this.__input.template,
          worldCount: {
            floorplanCount: this.__input.worldCount.floorplanCount,
            interiorCountPerFloorplan: this.__input.worldCount.interiorCountPerFloorplan,
          },
          tags: this.__input.tags,
          worldTags: this.__input.worldTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorldGenerationJob.tags', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          template: this.__input.template,
          worldCount: {
            floorplanCount: this.__input.worldCount.floorplanCount,
            interiorCountPerFloorplan: this.__input.worldCount.interiorCountPerFloorplan,
          },
          tags: this.__input.tags,
          worldTags: this.__input.worldTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorldGenerationJob.worldTags', props);
    return resource.getResponseField('worldTags') as unknown as Record<string, string>;
  }

}

export class RoboMakerResponsesCreateWorldGenerationJobWorldCount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerCreateWorldGenerationJobRequest) {
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
          clientRequestToken: this.__input.clientRequestToken,
          template: this.__input.template,
          worldCount: {
            floorplanCount: this.__input.worldCount.floorplanCount,
            interiorCountPerFloorplan: this.__input.worldCount.interiorCountPerFloorplan,
          },
          tags: this.__input.tags,
          worldTags: this.__input.worldTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorldGenerationJob.worldCount.floorplanCount', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          template: this.__input.template,
          worldCount: {
            floorplanCount: this.__input.worldCount.floorplanCount,
            interiorCountPerFloorplan: this.__input.worldCount.interiorCountPerFloorplan,
          },
          tags: this.__input.tags,
          worldTags: this.__input.worldTags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorldGenerationJob.worldCount.interiorCountPerFloorplan', props);
    return resource.getResponseField('worldCount.interiorCountPerFloorplan') as unknown as number;
  }

}

export class RoboMakerResponsesCreateWorldTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerCreateWorldTemplateRequest) {
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
          clientRequestToken: this.__input.clientRequestToken,
          name: this.__input.name,
          templateBody: this.__input.templateBody,
          templateLocation: {
            s3Bucket: this.__input.templateLocation?.s3Bucket,
            s3Key: this.__input.templateLocation?.s3Key,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorldTemplate.arn', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          name: this.__input.name,
          templateBody: this.__input.templateBody,
          templateLocation: {
            s3Bucket: this.__input.templateLocation?.s3Bucket,
            s3Key: this.__input.templateLocation?.s3Key,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorldTemplate.clientRequestToken', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          name: this.__input.name,
          templateBody: this.__input.templateBody,
          templateLocation: {
            s3Bucket: this.__input.templateLocation?.s3Bucket,
            s3Key: this.__input.templateLocation?.s3Key,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorldTemplate.createdAt', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          name: this.__input.name,
          templateBody: this.__input.templateBody,
          templateLocation: {
            s3Bucket: this.__input.templateLocation?.s3Bucket,
            s3Key: this.__input.templateLocation?.s3Key,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorldTemplate.name', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          name: this.__input.name,
          templateBody: this.__input.templateBody,
          templateLocation: {
            s3Bucket: this.__input.templateLocation?.s3Bucket,
            s3Key: this.__input.templateLocation?.s3Key,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateWorldTemplate.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerResponsesDeregisterRobot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerDeregisterRobotRequest) {
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
          fleet: this.__input.fleet,
          robot: this.__input.robot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterRobot.fleet', props);
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
          fleet: this.__input.fleet,
          robot: this.__input.robot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeregisterRobot.robot', props);
    return resource.getResponseField('robot') as unknown as string;
  }

}

export class RoboMakerResponsesDescribeDeploymentJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerDescribeDeploymentJobRequest) {
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeploymentJob.arn', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeploymentJob.fleet', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeploymentJob.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get deploymentConfig(): RoboMakerResponsesDescribeDeploymentJobDeploymentConfig {
    return new RoboMakerResponsesDescribeDeploymentJobDeploymentConfig(this.__scope, this.__resources, this.__input);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeploymentJob.deploymentApplicationConfigs', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeploymentJob.failureReason', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeploymentJob.failureCode', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeploymentJob.createdAt', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeploymentJob.robotDeploymentSummary', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeploymentJob.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerResponsesDescribeDeploymentJobDeploymentConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerDescribeDeploymentJobRequest) {
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeploymentJob.deploymentConfig.concurrentDeploymentPercentage', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeploymentJob.deploymentConfig.failureThresholdPercentage', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeploymentJob.deploymentConfig.robotDeploymentTimeoutInSeconds', props);
    return resource.getResponseField('deploymentConfig.robotDeploymentTimeoutInSeconds') as unknown as number;
  }

  public get downloadConditionFile(): RoboMakerResponsesDescribeDeploymentJobDeploymentConfigDownloadConditionFile {
    return new RoboMakerResponsesDescribeDeploymentJobDeploymentConfigDownloadConditionFile(this.__scope, this.__resources, this.__input);
  }

}

export class RoboMakerResponsesDescribeDeploymentJobDeploymentConfigDownloadConditionFile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerDescribeDeploymentJobRequest) {
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeploymentJob.deploymentConfig.downloadConditionFile.bucket', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeploymentJob.deploymentConfig.downloadConditionFile.key', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDeploymentJob.deploymentConfig.downloadConditionFile.etag', props);
    return resource.getResponseField('deploymentConfig.downloadConditionFile.etag') as unknown as string;
  }

}

export class RoboMakerResponsesDescribeFleet {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerDescribeFleetRequest) {
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
          fleet: this.__input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFleet.name', props);
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
          fleet: this.__input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFleet.arn', props);
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
          fleet: this.__input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFleet.robots', props);
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
          fleet: this.__input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFleet.createdAt', props);
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
          fleet: this.__input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFleet.lastDeploymentStatus', props);
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
          fleet: this.__input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFleet.lastDeploymentJob', props);
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
          fleet: this.__input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFleet.lastDeploymentTime', props);
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
          fleet: this.__input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeFleet.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerResponsesDescribeRobot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerDescribeRobotRequest) {
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
          robot: this.__input.robot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRobot.arn', props);
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
          robot: this.__input.robot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRobot.name', props);
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
          robot: this.__input.robot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRobot.fleetArn', props);
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
          robot: this.__input.robot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRobot.status', props);
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
          robot: this.__input.robot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRobot.greengrassGroupId', props);
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
          robot: this.__input.robot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRobot.createdAt', props);
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
          robot: this.__input.robot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRobot.architecture', props);
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
          robot: this.__input.robot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRobot.lastDeploymentJob', props);
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
          robot: this.__input.robot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRobot.lastDeploymentTime', props);
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
          robot: this.__input.robot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRobot.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerResponsesDescribeRobotApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerDescribeRobotApplicationRequest) {
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
          application: this.__input.application,
          applicationVersion: this.__input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRobotApplication.arn', props);
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
          application: this.__input.application,
          applicationVersion: this.__input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRobotApplication.name', props);
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
          application: this.__input.application,
          applicationVersion: this.__input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRobotApplication.version', props);
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
          application: this.__input.application,
          applicationVersion: this.__input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRobotApplication.sources', props);
    return resource.getResponseField('sources') as unknown as shapes.RoboMakerSource[];
  }

  public get robotSoftwareSuite(): RoboMakerResponsesDescribeRobotApplicationRobotSoftwareSuite {
    return new RoboMakerResponsesDescribeRobotApplicationRobotSoftwareSuite(this.__scope, this.__resources, this.__input);
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
          application: this.__input.application,
          applicationVersion: this.__input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRobotApplication.revisionId', props);
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
          application: this.__input.application,
          applicationVersion: this.__input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRobotApplication.lastUpdatedAt', props);
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
          application: this.__input.application,
          applicationVersion: this.__input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRobotApplication.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerResponsesDescribeRobotApplicationRobotSoftwareSuite {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerDescribeRobotApplicationRequest) {
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
          application: this.__input.application,
          applicationVersion: this.__input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRobotApplication.robotSoftwareSuite.name', props);
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
          application: this.__input.application,
          applicationVersion: this.__input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeRobotApplication.robotSoftwareSuite.version', props);
    return resource.getResponseField('robotSoftwareSuite.version') as unknown as string;
  }

}

export class RoboMakerResponsesDescribeSimulationApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerDescribeSimulationApplicationRequest) {
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
          application: this.__input.application,
          applicationVersion: this.__input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationApplication.arn', props);
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
          application: this.__input.application,
          applicationVersion: this.__input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationApplication.name', props);
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
          application: this.__input.application,
          applicationVersion: this.__input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationApplication.version', props);
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
          application: this.__input.application,
          applicationVersion: this.__input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationApplication.sources', props);
    return resource.getResponseField('sources') as unknown as shapes.RoboMakerSource[];
  }

  public get simulationSoftwareSuite(): RoboMakerResponsesDescribeSimulationApplicationSimulationSoftwareSuite {
    return new RoboMakerResponsesDescribeSimulationApplicationSimulationSoftwareSuite(this.__scope, this.__resources, this.__input);
  }

  public get robotSoftwareSuite(): RoboMakerResponsesDescribeSimulationApplicationRobotSoftwareSuite {
    return new RoboMakerResponsesDescribeSimulationApplicationRobotSoftwareSuite(this.__scope, this.__resources, this.__input);
  }

  public get renderingEngine(): RoboMakerResponsesDescribeSimulationApplicationRenderingEngine {
    return new RoboMakerResponsesDescribeSimulationApplicationRenderingEngine(this.__scope, this.__resources, this.__input);
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
          application: this.__input.application,
          applicationVersion: this.__input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationApplication.revisionId', props);
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
          application: this.__input.application,
          applicationVersion: this.__input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationApplication.lastUpdatedAt', props);
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
          application: this.__input.application,
          applicationVersion: this.__input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationApplication.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerResponsesDescribeSimulationApplicationSimulationSoftwareSuite {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerDescribeSimulationApplicationRequest) {
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
          application: this.__input.application,
          applicationVersion: this.__input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationApplication.simulationSoftwareSuite.name', props);
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
          application: this.__input.application,
          applicationVersion: this.__input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationApplication.simulationSoftwareSuite.version', props);
    return resource.getResponseField('simulationSoftwareSuite.version') as unknown as string;
  }

}

export class RoboMakerResponsesDescribeSimulationApplicationRobotSoftwareSuite {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerDescribeSimulationApplicationRequest) {
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
          application: this.__input.application,
          applicationVersion: this.__input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationApplication.robotSoftwareSuite.name', props);
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
          application: this.__input.application,
          applicationVersion: this.__input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationApplication.robotSoftwareSuite.version', props);
    return resource.getResponseField('robotSoftwareSuite.version') as unknown as string;
  }

}

export class RoboMakerResponsesDescribeSimulationApplicationRenderingEngine {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerDescribeSimulationApplicationRequest) {
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
          application: this.__input.application,
          applicationVersion: this.__input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationApplication.renderingEngine.name', props);
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
          application: this.__input.application,
          applicationVersion: this.__input.applicationVersion,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationApplication.renderingEngine.version', props);
    return resource.getResponseField('renderingEngine.version') as unknown as string;
  }

}

export class RoboMakerResponsesDescribeSimulationJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerDescribeSimulationJobRequest) {
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJob.arn', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJob.name', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJob.status', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJob.lastStartedAt', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJob.lastUpdatedAt', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJob.failureBehavior', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJob.failureCode', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJob.failureReason', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJob.clientRequestToken', props);
    return resource.getResponseField('clientRequestToken') as unknown as string;
  }

  public get outputLocation(): RoboMakerResponsesDescribeSimulationJobOutputLocation {
    return new RoboMakerResponsesDescribeSimulationJobOutputLocation(this.__scope, this.__resources, this.__input);
  }

  public get loggingConfig(): RoboMakerResponsesDescribeSimulationJobLoggingConfig {
    return new RoboMakerResponsesDescribeSimulationJobLoggingConfig(this.__scope, this.__resources, this.__input);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJob.maxJobDurationInSeconds', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJob.simulationTimeMillis', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJob.iamRole', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJob.robotApplications', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJob.simulationApplications', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJob.dataSources', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJob.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get vpcConfig(): RoboMakerResponsesDescribeSimulationJobVpcConfig {
    return new RoboMakerResponsesDescribeSimulationJobVpcConfig(this.__scope, this.__resources, this.__input);
  }

  public get networkInterface(): RoboMakerResponsesDescribeSimulationJobNetworkInterface {
    return new RoboMakerResponsesDescribeSimulationJobNetworkInterface(this.__scope, this.__resources, this.__input);
  }

  public get compute(): RoboMakerResponsesDescribeSimulationJobCompute {
    return new RoboMakerResponsesDescribeSimulationJobCompute(this.__scope, this.__resources, this.__input);
  }

}

export class RoboMakerResponsesDescribeSimulationJobOutputLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerDescribeSimulationJobRequest) {
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJob.outputLocation.s3Bucket', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJob.outputLocation.s3Prefix', props);
    return resource.getResponseField('outputLocation.s3Prefix') as unknown as string;
  }

}

export class RoboMakerResponsesDescribeSimulationJobLoggingConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerDescribeSimulationJobRequest) {
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJob.loggingConfig.recordAllRosTopics', props);
    return resource.getResponseField('loggingConfig.recordAllRosTopics') as unknown as boolean;
  }

}

export class RoboMakerResponsesDescribeSimulationJobVpcConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerDescribeSimulationJobRequest) {
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJob.vpcConfig.subnets', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJob.vpcConfig.securityGroups', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJob.vpcConfig.vpcId', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJob.vpcConfig.assignPublicIp', props);
    return resource.getResponseField('vpcConfig.assignPublicIp') as unknown as boolean;
  }

}

export class RoboMakerResponsesDescribeSimulationJobNetworkInterface {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerDescribeSimulationJobRequest) {
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJob.networkInterface.networkInterfaceId', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJob.networkInterface.privateIpAddress', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJob.networkInterface.publicIpAddress', props);
    return resource.getResponseField('networkInterface.publicIpAddress') as unknown as string;
  }

}

export class RoboMakerResponsesDescribeSimulationJobCompute {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerDescribeSimulationJobRequest) {
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJob.compute.simulationUnitLimit', props);
    return resource.getResponseField('compute.simulationUnitLimit') as unknown as number;
  }

}

export class RoboMakerResponsesDescribeSimulationJobBatch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerDescribeSimulationJobBatchRequest) {
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
          batch: this.__input.batch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJobBatch.arn', props);
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
          batch: this.__input.batch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJobBatch.status', props);
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
          batch: this.__input.batch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJobBatch.lastUpdatedAt', props);
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
          batch: this.__input.batch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJobBatch.createdAt', props);
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
          batch: this.__input.batch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJobBatch.clientRequestToken', props);
    return resource.getResponseField('clientRequestToken') as unknown as string;
  }

  public get batchPolicy(): RoboMakerResponsesDescribeSimulationJobBatchBatchPolicy {
    return new RoboMakerResponsesDescribeSimulationJobBatchBatchPolicy(this.__scope, this.__resources, this.__input);
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
          batch: this.__input.batch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJobBatch.failureCode', props);
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
          batch: this.__input.batch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJobBatch.failureReason', props);
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
          batch: this.__input.batch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJobBatch.failedRequests', props);
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
          batch: this.__input.batch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJobBatch.pendingRequests', props);
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
          batch: this.__input.batch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJobBatch.createdRequests', props);
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
          batch: this.__input.batch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJobBatch.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerResponsesDescribeSimulationJobBatchBatchPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerDescribeSimulationJobBatchRequest) {
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
          batch: this.__input.batch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJobBatch.batchPolicy.timeoutInSeconds', props);
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
          batch: this.__input.batch,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeSimulationJobBatch.batchPolicy.maxConcurrency', props);
    return resource.getResponseField('batchPolicy.maxConcurrency') as unknown as number;
  }

}

export class RoboMakerResponsesDescribeWorld {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerDescribeWorldRequest) {
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
          world: this.__input.world,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorld.arn', props);
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
          world: this.__input.world,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorld.generationJob', props);
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
          world: this.__input.world,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorld.template', props);
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
          world: this.__input.world,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorld.createdAt', props);
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
          world: this.__input.world,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorld.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get worldDescriptionBody(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorld',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorld.worldDescriptionBody'),
        outputPath: 'worldDescriptionBody',
        parameters: {
          world: this.__input.world,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorld.worldDescriptionBody', props);
    return resource.getResponseField('worldDescriptionBody') as unknown as string;
  }

}

export class RoboMakerResponsesDescribeWorldExportJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerDescribeWorldExportJobRequest) {
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldExportJob.arn', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldExportJob.status', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldExportJob.createdAt', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldExportJob.failureCode', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldExportJob.failureReason', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldExportJob.clientRequestToken', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldExportJob.worlds', props);
    return resource.getResponseField('worlds') as unknown as string[];
  }

  public get outputLocation(): RoboMakerResponsesDescribeWorldExportJobOutputLocation {
    return new RoboMakerResponsesDescribeWorldExportJobOutputLocation(this.__scope, this.__resources, this.__input);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldExportJob.iamRole', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldExportJob.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerResponsesDescribeWorldExportJobOutputLocation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerDescribeWorldExportJobRequest) {
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldExportJob.outputLocation.s3Bucket', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldExportJob.outputLocation.s3Prefix', props);
    return resource.getResponseField('outputLocation.s3Prefix') as unknown as string;
  }

}

export class RoboMakerResponsesDescribeWorldGenerationJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerDescribeWorldGenerationJobRequest) {
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldGenerationJob.arn', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldGenerationJob.status', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldGenerationJob.createdAt', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldGenerationJob.failureCode', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldGenerationJob.failureReason', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldGenerationJob.clientRequestToken', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldGenerationJob.template', props);
    return resource.getResponseField('template') as unknown as string;
  }

  public get worldCount(): RoboMakerResponsesDescribeWorldGenerationJobWorldCount {
    return new RoboMakerResponsesDescribeWorldGenerationJobWorldCount(this.__scope, this.__resources, this.__input);
  }

  public get finishedWorldsSummary(): RoboMakerResponsesDescribeWorldGenerationJobFinishedWorldsSummary {
    return new RoboMakerResponsesDescribeWorldGenerationJobFinishedWorldsSummary(this.__scope, this.__resources, this.__input);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldGenerationJob.tags', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldGenerationJob.worldTags', props);
    return resource.getResponseField('worldTags') as unknown as Record<string, string>;
  }

}

export class RoboMakerResponsesDescribeWorldGenerationJobWorldCount {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerDescribeWorldGenerationJobRequest) {
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldGenerationJob.worldCount.floorplanCount', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldGenerationJob.worldCount.interiorCountPerFloorplan', props);
    return resource.getResponseField('worldCount.interiorCountPerFloorplan') as unknown as number;
  }

}

export class RoboMakerResponsesDescribeWorldGenerationJobFinishedWorldsSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerDescribeWorldGenerationJobRequest) {
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldGenerationJob.finishedWorldsSummary.finishedCount', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldGenerationJob.finishedWorldsSummary.succeededWorlds', props);
    return resource.getResponseField('finishedWorldsSummary.succeededWorlds') as unknown as string[];
  }

  public get failureSummary(): RoboMakerResponsesDescribeWorldGenerationJobFinishedWorldsSummaryFailureSummary {
    return new RoboMakerResponsesDescribeWorldGenerationJobFinishedWorldsSummaryFailureSummary(this.__scope, this.__resources, this.__input);
  }

}

export class RoboMakerResponsesDescribeWorldGenerationJobFinishedWorldsSummaryFailureSummary {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerDescribeWorldGenerationJobRequest) {
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldGenerationJob.finishedWorldsSummary.failureSummary.totalFailureCount', props);
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
          job: this.__input.job,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldGenerationJob.finishedWorldsSummary.failureSummary.failures', props);
    return resource.getResponseField('finishedWorldsSummary.failureSummary.failures') as unknown as shapes.RoboMakerWorldFailure[];
  }

}

export class RoboMakerResponsesDescribeWorldTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerDescribeWorldTemplateRequest) {
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
          template: this.__input.template,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldTemplate.arn', props);
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
          template: this.__input.template,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldTemplate.clientRequestToken', props);
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
          template: this.__input.template,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldTemplate.name', props);
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
          template: this.__input.template,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldTemplate.createdAt', props);
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
          template: this.__input.template,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldTemplate.lastUpdatedAt', props);
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
          template: this.__input.template,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldTemplate.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

  public get version(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeWorldTemplate',
        service: 'RoboMaker',
        physicalResourceId: cr.PhysicalResourceId.of('RoboMaker.DescribeWorldTemplate.version'),
        outputPath: 'version',
        parameters: {
          template: this.__input.template,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeWorldTemplate.version', props);
    return resource.getResponseField('version') as unknown as string;
  }

}

export class RoboMakerResponsesFetchWorldTemplateBody {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerGetWorldTemplateBodyRequest) {
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
          template: this.__input.template,
          generationJob: this.__input.generationJob,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetWorldTemplateBody.templateBody', props);
    return resource.getResponseField('templateBody') as unknown as string;
  }

}

export class RoboMakerResponsesListDeploymentJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerListDeploymentJobsRequest) {
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
          filters: this.__input.filters,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeploymentJobs.deploymentJobs', props);
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
          filters: this.__input.filters,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDeploymentJobs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RoboMakerResponsesListFleets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerListFleetsRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFleets.fleetDetails', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListFleets.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RoboMakerResponsesListRobotApplications {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerListRobotApplicationsRequest) {
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
          versionQualifier: this.__input.versionQualifier,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRobotApplications.robotApplicationSummaries', props);
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
          versionQualifier: this.__input.versionQualifier,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRobotApplications.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RoboMakerResponsesListRobots {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerListRobotsRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRobots.robots', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListRobots.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RoboMakerResponsesListSimulationApplications {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerListSimulationApplicationsRequest) {
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
          versionQualifier: this.__input.versionQualifier,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSimulationApplications.simulationApplicationSummaries', props);
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
          versionQualifier: this.__input.versionQualifier,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSimulationApplications.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RoboMakerResponsesListSimulationJobBatches {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerListSimulationJobBatchesRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSimulationJobBatches.simulationJobBatchSummaries', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSimulationJobBatches.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RoboMakerResponsesListSimulationJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerListSimulationJobsRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSimulationJobs.simulationJobSummaries', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListSimulationJobs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RoboMakerResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerListTagsForResourceRequest) {
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
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerResponsesListWorldExportJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerListWorldExportJobsRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWorldExportJobs.worldExportJobSummaries', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWorldExportJobs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RoboMakerResponsesListWorldGenerationJobs {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerListWorldGenerationJobsRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWorldGenerationJobs.worldGenerationJobSummaries', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWorldGenerationJobs.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RoboMakerResponsesListWorldTemplates {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerListWorldTemplatesRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWorldTemplates.templateSummaries', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWorldTemplates.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RoboMakerResponsesListWorlds {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerListWorldsRequest) {
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWorlds.worldSummaries', props);
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
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          filters: this.__input.filters,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListWorlds.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class RoboMakerResponsesRegisterRobot {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerRegisterRobotRequest) {
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
          fleet: this.__input.fleet,
          robot: this.__input.robot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterRobot.fleet', props);
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
          fleet: this.__input.fleet,
          robot: this.__input.robot,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RegisterRobot.robot', props);
    return resource.getResponseField('robot') as unknown as string;
  }

}

export class RoboMakerResponsesStartSimulationJobBatch {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerStartSimulationJobBatchRequest) {
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
          clientRequestToken: this.__input.clientRequestToken,
          batchPolicy: {
            timeoutInSeconds: this.__input.batchPolicy?.timeoutInSeconds,
            maxConcurrency: this.__input.batchPolicy?.maxConcurrency,
          },
          createSimulationJobRequests: this.__input.createSimulationJobRequests,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSimulationJobBatch.arn', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          batchPolicy: {
            timeoutInSeconds: this.__input.batchPolicy?.timeoutInSeconds,
            maxConcurrency: this.__input.batchPolicy?.maxConcurrency,
          },
          createSimulationJobRequests: this.__input.createSimulationJobRequests,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSimulationJobBatch.status', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          batchPolicy: {
            timeoutInSeconds: this.__input.batchPolicy?.timeoutInSeconds,
            maxConcurrency: this.__input.batchPolicy?.maxConcurrency,
          },
          createSimulationJobRequests: this.__input.createSimulationJobRequests,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSimulationJobBatch.createdAt', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          batchPolicy: {
            timeoutInSeconds: this.__input.batchPolicy?.timeoutInSeconds,
            maxConcurrency: this.__input.batchPolicy?.maxConcurrency,
          },
          createSimulationJobRequests: this.__input.createSimulationJobRequests,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSimulationJobBatch.clientRequestToken', props);
    return resource.getResponseField('clientRequestToken') as unknown as string;
  }

  public get batchPolicy(): RoboMakerResponsesStartSimulationJobBatchBatchPolicy {
    return new RoboMakerResponsesStartSimulationJobBatchBatchPolicy(this.__scope, this.__resources, this.__input);
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
          clientRequestToken: this.__input.clientRequestToken,
          batchPolicy: {
            timeoutInSeconds: this.__input.batchPolicy?.timeoutInSeconds,
            maxConcurrency: this.__input.batchPolicy?.maxConcurrency,
          },
          createSimulationJobRequests: this.__input.createSimulationJobRequests,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSimulationJobBatch.failureCode', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          batchPolicy: {
            timeoutInSeconds: this.__input.batchPolicy?.timeoutInSeconds,
            maxConcurrency: this.__input.batchPolicy?.maxConcurrency,
          },
          createSimulationJobRequests: this.__input.createSimulationJobRequests,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSimulationJobBatch.failureReason', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          batchPolicy: {
            timeoutInSeconds: this.__input.batchPolicy?.timeoutInSeconds,
            maxConcurrency: this.__input.batchPolicy?.maxConcurrency,
          },
          createSimulationJobRequests: this.__input.createSimulationJobRequests,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSimulationJobBatch.failedRequests', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          batchPolicy: {
            timeoutInSeconds: this.__input.batchPolicy?.timeoutInSeconds,
            maxConcurrency: this.__input.batchPolicy?.maxConcurrency,
          },
          createSimulationJobRequests: this.__input.createSimulationJobRequests,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSimulationJobBatch.pendingRequests', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          batchPolicy: {
            timeoutInSeconds: this.__input.batchPolicy?.timeoutInSeconds,
            maxConcurrency: this.__input.batchPolicy?.maxConcurrency,
          },
          createSimulationJobRequests: this.__input.createSimulationJobRequests,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSimulationJobBatch.createdRequests', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          batchPolicy: {
            timeoutInSeconds: this.__input.batchPolicy?.timeoutInSeconds,
            maxConcurrency: this.__input.batchPolicy?.maxConcurrency,
          },
          createSimulationJobRequests: this.__input.createSimulationJobRequests,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSimulationJobBatch.tags', props);
    return resource.getResponseField('tags') as unknown as Record<string, string>;
  }

}

export class RoboMakerResponsesStartSimulationJobBatchBatchPolicy {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerStartSimulationJobBatchRequest) {
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
          clientRequestToken: this.__input.clientRequestToken,
          batchPolicy: {
            timeoutInSeconds: this.__input.batchPolicy?.timeoutInSeconds,
            maxConcurrency: this.__input.batchPolicy?.maxConcurrency,
          },
          createSimulationJobRequests: this.__input.createSimulationJobRequests,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSimulationJobBatch.batchPolicy.timeoutInSeconds', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          batchPolicy: {
            timeoutInSeconds: this.__input.batchPolicy?.timeoutInSeconds,
            maxConcurrency: this.__input.batchPolicy?.maxConcurrency,
          },
          createSimulationJobRequests: this.__input.createSimulationJobRequests,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartSimulationJobBatch.batchPolicy.maxConcurrency', props);
    return resource.getResponseField('batchPolicy.maxConcurrency') as unknown as number;
  }

}

export class RoboMakerResponsesSyncDeploymentJob {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerSyncDeploymentJobRequest) {
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
          clientRequestToken: this.__input.clientRequestToken,
          fleet: this.__input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SyncDeploymentJob.arn', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          fleet: this.__input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SyncDeploymentJob.fleet', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          fleet: this.__input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SyncDeploymentJob.status', props);
    return resource.getResponseField('status') as unknown as string;
  }

  public get deploymentConfig(): RoboMakerResponsesSyncDeploymentJobDeploymentConfig {
    return new RoboMakerResponsesSyncDeploymentJobDeploymentConfig(this.__scope, this.__resources, this.__input);
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
          clientRequestToken: this.__input.clientRequestToken,
          fleet: this.__input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SyncDeploymentJob.deploymentApplicationConfigs', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          fleet: this.__input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SyncDeploymentJob.failureReason', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          fleet: this.__input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SyncDeploymentJob.failureCode', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          fleet: this.__input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SyncDeploymentJob.createdAt', props);
    return resource.getResponseField('createdAt') as unknown as string;
  }

}

export class RoboMakerResponsesSyncDeploymentJobDeploymentConfig {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerSyncDeploymentJobRequest) {
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
          clientRequestToken: this.__input.clientRequestToken,
          fleet: this.__input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SyncDeploymentJob.deploymentConfig.concurrentDeploymentPercentage', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          fleet: this.__input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SyncDeploymentJob.deploymentConfig.failureThresholdPercentage', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          fleet: this.__input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SyncDeploymentJob.deploymentConfig.robotDeploymentTimeoutInSeconds', props);
    return resource.getResponseField('deploymentConfig.robotDeploymentTimeoutInSeconds') as unknown as number;
  }

  public get downloadConditionFile(): RoboMakerResponsesSyncDeploymentJobDeploymentConfigDownloadConditionFile {
    return new RoboMakerResponsesSyncDeploymentJobDeploymentConfigDownloadConditionFile(this.__scope, this.__resources, this.__input);
  }

}

export class RoboMakerResponsesSyncDeploymentJobDeploymentConfigDownloadConditionFile {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerSyncDeploymentJobRequest) {
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
          clientRequestToken: this.__input.clientRequestToken,
          fleet: this.__input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SyncDeploymentJob.deploymentConfig.downloadConditionFile.bucket', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          fleet: this.__input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SyncDeploymentJob.deploymentConfig.downloadConditionFile.key', props);
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
          clientRequestToken: this.__input.clientRequestToken,
          fleet: this.__input.fleet,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SyncDeploymentJob.deploymentConfig.downloadConditionFile.etag', props);
    return resource.getResponseField('deploymentConfig.downloadConditionFile.etag') as unknown as string;
  }

}

export class RoboMakerResponsesUpdateRobotApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerUpdateRobotApplicationRequest) {
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
          application: this.__input.application,
          sources: this.__input.sources,
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRobotApplication.arn', props);
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
          application: this.__input.application,
          sources: this.__input.sources,
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRobotApplication.name', props);
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
          application: this.__input.application,
          sources: this.__input.sources,
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRobotApplication.version', props);
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
          application: this.__input.application,
          sources: this.__input.sources,
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRobotApplication.sources', props);
    return resource.getResponseField('sources') as unknown as shapes.RoboMakerSource[];
  }

  public get robotSoftwareSuite(): RoboMakerResponsesUpdateRobotApplicationRobotSoftwareSuite {
    return new RoboMakerResponsesUpdateRobotApplicationRobotSoftwareSuite(this.__scope, this.__resources, this.__input);
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
          application: this.__input.application,
          sources: this.__input.sources,
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRobotApplication.lastUpdatedAt', props);
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
          application: this.__input.application,
          sources: this.__input.sources,
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRobotApplication.revisionId', props);
    return resource.getResponseField('revisionId') as unknown as string;
  }

}

export class RoboMakerResponsesUpdateRobotApplicationRobotSoftwareSuite {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerUpdateRobotApplicationRequest) {
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
          application: this.__input.application,
          sources: this.__input.sources,
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRobotApplication.robotSoftwareSuite.name', props);
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
          application: this.__input.application,
          sources: this.__input.sources,
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateRobotApplication.robotSoftwareSuite.version', props);
    return resource.getResponseField('robotSoftwareSuite.version') as unknown as string;
  }

}

export class RoboMakerResponsesUpdateSimulationApplication {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerUpdateSimulationApplicationRequest) {
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
          application: this.__input.application,
          sources: this.__input.sources,
          simulationSoftwareSuite: {
            name: this.__input.simulationSoftwareSuite.name,
            version: this.__input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.__input.renderingEngine?.name,
            version: this.__input.renderingEngine?.version,
          },
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSimulationApplication.arn', props);
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
          application: this.__input.application,
          sources: this.__input.sources,
          simulationSoftwareSuite: {
            name: this.__input.simulationSoftwareSuite.name,
            version: this.__input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.__input.renderingEngine?.name,
            version: this.__input.renderingEngine?.version,
          },
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSimulationApplication.name', props);
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
          application: this.__input.application,
          sources: this.__input.sources,
          simulationSoftwareSuite: {
            name: this.__input.simulationSoftwareSuite.name,
            version: this.__input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.__input.renderingEngine?.name,
            version: this.__input.renderingEngine?.version,
          },
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSimulationApplication.version', props);
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
          application: this.__input.application,
          sources: this.__input.sources,
          simulationSoftwareSuite: {
            name: this.__input.simulationSoftwareSuite.name,
            version: this.__input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.__input.renderingEngine?.name,
            version: this.__input.renderingEngine?.version,
          },
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSimulationApplication.sources', props);
    return resource.getResponseField('sources') as unknown as shapes.RoboMakerSource[];
  }

  public get simulationSoftwareSuite(): RoboMakerResponsesUpdateSimulationApplicationSimulationSoftwareSuite {
    return new RoboMakerResponsesUpdateSimulationApplicationSimulationSoftwareSuite(this.__scope, this.__resources, this.__input);
  }

  public get robotSoftwareSuite(): RoboMakerResponsesUpdateSimulationApplicationRobotSoftwareSuite {
    return new RoboMakerResponsesUpdateSimulationApplicationRobotSoftwareSuite(this.__scope, this.__resources, this.__input);
  }

  public get renderingEngine(): RoboMakerResponsesUpdateSimulationApplicationRenderingEngine {
    return new RoboMakerResponsesUpdateSimulationApplicationRenderingEngine(this.__scope, this.__resources, this.__input);
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
          application: this.__input.application,
          sources: this.__input.sources,
          simulationSoftwareSuite: {
            name: this.__input.simulationSoftwareSuite.name,
            version: this.__input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.__input.renderingEngine?.name,
            version: this.__input.renderingEngine?.version,
          },
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSimulationApplication.lastUpdatedAt', props);
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
          application: this.__input.application,
          sources: this.__input.sources,
          simulationSoftwareSuite: {
            name: this.__input.simulationSoftwareSuite.name,
            version: this.__input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.__input.renderingEngine?.name,
            version: this.__input.renderingEngine?.version,
          },
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSimulationApplication.revisionId', props);
    return resource.getResponseField('revisionId') as unknown as string;
  }

}

export class RoboMakerResponsesUpdateSimulationApplicationSimulationSoftwareSuite {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerUpdateSimulationApplicationRequest) {
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
          application: this.__input.application,
          sources: this.__input.sources,
          simulationSoftwareSuite: {
            name: this.__input.simulationSoftwareSuite.name,
            version: this.__input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.__input.renderingEngine?.name,
            version: this.__input.renderingEngine?.version,
          },
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSimulationApplication.simulationSoftwareSuite.name', props);
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
          application: this.__input.application,
          sources: this.__input.sources,
          simulationSoftwareSuite: {
            name: this.__input.simulationSoftwareSuite.name,
            version: this.__input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.__input.renderingEngine?.name,
            version: this.__input.renderingEngine?.version,
          },
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSimulationApplication.simulationSoftwareSuite.version', props);
    return resource.getResponseField('simulationSoftwareSuite.version') as unknown as string;
  }

}

export class RoboMakerResponsesUpdateSimulationApplicationRobotSoftwareSuite {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerUpdateSimulationApplicationRequest) {
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
          application: this.__input.application,
          sources: this.__input.sources,
          simulationSoftwareSuite: {
            name: this.__input.simulationSoftwareSuite.name,
            version: this.__input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.__input.renderingEngine?.name,
            version: this.__input.renderingEngine?.version,
          },
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSimulationApplication.robotSoftwareSuite.name', props);
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
          application: this.__input.application,
          sources: this.__input.sources,
          simulationSoftwareSuite: {
            name: this.__input.simulationSoftwareSuite.name,
            version: this.__input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.__input.renderingEngine?.name,
            version: this.__input.renderingEngine?.version,
          },
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSimulationApplication.robotSoftwareSuite.version', props);
    return resource.getResponseField('robotSoftwareSuite.version') as unknown as string;
  }

}

export class RoboMakerResponsesUpdateSimulationApplicationRenderingEngine {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerUpdateSimulationApplicationRequest) {
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
          application: this.__input.application,
          sources: this.__input.sources,
          simulationSoftwareSuite: {
            name: this.__input.simulationSoftwareSuite.name,
            version: this.__input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.__input.renderingEngine?.name,
            version: this.__input.renderingEngine?.version,
          },
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSimulationApplication.renderingEngine.name', props);
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
          application: this.__input.application,
          sources: this.__input.sources,
          simulationSoftwareSuite: {
            name: this.__input.simulationSoftwareSuite.name,
            version: this.__input.simulationSoftwareSuite.version,
          },
          robotSoftwareSuite: {
            name: this.__input.robotSoftwareSuite.name,
            version: this.__input.robotSoftwareSuite.version,
          },
          renderingEngine: {
            name: this.__input.renderingEngine?.name,
            version: this.__input.renderingEngine?.version,
          },
          currentRevisionId: this.__input.currentRevisionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateSimulationApplication.renderingEngine.version', props);
    return resource.getResponseField('renderingEngine.version') as unknown as string;
  }

}

export class RoboMakerResponsesUpdateWorldTemplate {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.RoboMakerUpdateWorldTemplateRequest) {
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
          template: this.__input.template,
          name: this.__input.name,
          templateBody: this.__input.templateBody,
          templateLocation: {
            s3Bucket: this.__input.templateLocation?.s3Bucket,
            s3Key: this.__input.templateLocation?.s3Key,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorldTemplate.arn', props);
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
          template: this.__input.template,
          name: this.__input.name,
          templateBody: this.__input.templateBody,
          templateLocation: {
            s3Bucket: this.__input.templateLocation?.s3Bucket,
            s3Key: this.__input.templateLocation?.s3Key,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorldTemplate.name', props);
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
          template: this.__input.template,
          name: this.__input.name,
          templateBody: this.__input.templateBody,
          templateLocation: {
            s3Bucket: this.__input.templateLocation?.s3Bucket,
            s3Key: this.__input.templateLocation?.s3Key,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorldTemplate.createdAt', props);
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
          template: this.__input.template,
          name: this.__input.name,
          templateBody: this.__input.templateBody,
          templateLocation: {
            s3Bucket: this.__input.templateLocation?.s3Bucket,
            s3Key: this.__input.templateLocation?.s3Key,
          },
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateWorldTemplate.lastUpdatedAt', props);
    return resource.getResponseField('lastUpdatedAt') as unknown as string;
  }

}

