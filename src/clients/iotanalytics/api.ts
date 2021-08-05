import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class IoTAnalyticsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchPutMessage(input: shapes.IoTAnalyticsBatchPutMessageRequest): IoTAnalyticsResponsesBatchPutMessage {
    return new IoTAnalyticsResponsesBatchPutMessage(this, this.__resources, input);
  }

  public cancelPipelineReprocessing(input: shapes.IoTAnalyticsCancelPipelineReprocessingRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'cancelPipelineReprocessing',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.CancelPipelineReprocessing'),
        parameters: {
          pipelineName: input.pipelineName,
          reprocessingId: input.reprocessingId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'CancelPipelineReprocessing', props);
  }

  public createChannel(input: shapes.IoTAnalyticsCreateChannelRequest): IoTAnalyticsResponsesCreateChannel {
    return new IoTAnalyticsResponsesCreateChannel(this, this.__resources, input);
  }

  public createDataset(input: shapes.IoTAnalyticsCreateDatasetRequest): IoTAnalyticsResponsesCreateDataset {
    return new IoTAnalyticsResponsesCreateDataset(this, this.__resources, input);
  }

  public createDatasetContent(input: shapes.IoTAnalyticsCreateDatasetContentRequest): IoTAnalyticsResponsesCreateDatasetContent {
    return new IoTAnalyticsResponsesCreateDatasetContent(this, this.__resources, input);
  }

  public createDatastore(input: shapes.IoTAnalyticsCreateDatastoreRequest): IoTAnalyticsResponsesCreateDatastore {
    return new IoTAnalyticsResponsesCreateDatastore(this, this.__resources, input);
  }

  public createPipeline(input: shapes.IoTAnalyticsCreatePipelineRequest): IoTAnalyticsResponsesCreatePipeline {
    return new IoTAnalyticsResponsesCreatePipeline(this, this.__resources, input);
  }

  public deleteChannel(input: shapes.IoTAnalyticsDeleteChannelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteChannel',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DeleteChannel'),
        parameters: {
          channelName: input.channelName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteChannel', props);
  }

  public deleteDataset(input: shapes.IoTAnalyticsDeleteDatasetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDataset',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DeleteDataset'),
        parameters: {
          datasetName: input.datasetName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDataset', props);
  }

  public deleteDatasetContent(input: shapes.IoTAnalyticsDeleteDatasetContentRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDatasetContent',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DeleteDatasetContent'),
        parameters: {
          datasetName: input.datasetName,
          versionId: input.versionId,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDatasetContent', props);
  }

  public deleteDatastore(input: shapes.IoTAnalyticsDeleteDatastoreRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDatastore',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DeleteDatastore'),
        parameters: {
          datastoreName: input.datastoreName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeleteDatastore', props);
  }

  public deletePipeline(input: shapes.IoTAnalyticsDeletePipelineRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deletePipeline',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DeletePipeline'),
        parameters: {
          pipelineName: input.pipelineName,
        },
      },
    };
    new cr.AwsCustomResource(this, 'DeletePipeline', props);
  }

  public describeChannel(input: shapes.IoTAnalyticsDescribeChannelRequest): IoTAnalyticsResponsesDescribeChannel {
    return new IoTAnalyticsResponsesDescribeChannel(this, this.__resources, input);
  }

  public describeDataset(input: shapes.IoTAnalyticsDescribeDatasetRequest): IoTAnalyticsResponsesDescribeDataset {
    return new IoTAnalyticsResponsesDescribeDataset(this, this.__resources, input);
  }

  public describeDatastore(input: shapes.IoTAnalyticsDescribeDatastoreRequest): IoTAnalyticsResponsesDescribeDatastore {
    return new IoTAnalyticsResponsesDescribeDatastore(this, this.__resources, input);
  }

  public describeLoggingOptions(): IoTAnalyticsResponsesDescribeLoggingOptions {
    return new IoTAnalyticsResponsesDescribeLoggingOptions(this, this.__resources);
  }

  public describePipeline(input: shapes.IoTAnalyticsDescribePipelineRequest): IoTAnalyticsResponsesDescribePipeline {
    return new IoTAnalyticsResponsesDescribePipeline(this, this.__resources, input);
  }

  public fetchDatasetContent(input: shapes.IoTAnalyticsGetDatasetContentRequest): IoTAnalyticsResponsesFetchDatasetContent {
    return new IoTAnalyticsResponsesFetchDatasetContent(this, this.__resources, input);
  }

  public listChannels(input: shapes.IoTAnalyticsListChannelsRequest): IoTAnalyticsResponsesListChannels {
    return new IoTAnalyticsResponsesListChannels(this, this.__resources, input);
  }

  public listDatasetContents(input: shapes.IoTAnalyticsListDatasetContentsRequest): IoTAnalyticsResponsesListDatasetContents {
    return new IoTAnalyticsResponsesListDatasetContents(this, this.__resources, input);
  }

  public listDatasets(input: shapes.IoTAnalyticsListDatasetsRequest): IoTAnalyticsResponsesListDatasets {
    return new IoTAnalyticsResponsesListDatasets(this, this.__resources, input);
  }

  public listDatastores(input: shapes.IoTAnalyticsListDatastoresRequest): IoTAnalyticsResponsesListDatastores {
    return new IoTAnalyticsResponsesListDatastores(this, this.__resources, input);
  }

  public listPipelines(input: shapes.IoTAnalyticsListPipelinesRequest): IoTAnalyticsResponsesListPipelines {
    return new IoTAnalyticsResponsesListPipelines(this, this.__resources, input);
  }

  public listTagsForResource(input: shapes.IoTAnalyticsListTagsForResourceRequest): IoTAnalyticsResponsesListTagsForResource {
    return new IoTAnalyticsResponsesListTagsForResource(this, this.__resources, input);
  }

  public putLoggingOptions(input: shapes.IoTAnalyticsPutLoggingOptionsRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'putLoggingOptions',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.PutLoggingOptions'),
        parameters: {
          loggingOptions: {
            roleArn: input.loggingOptions.roleArn,
            level: input.loggingOptions.level,
            enabled: input.loggingOptions.enabled,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'PutLoggingOptions', props);
  }

  public runPipelineActivity(input: shapes.IoTAnalyticsRunPipelineActivityRequest): IoTAnalyticsResponsesRunPipelineActivity {
    return new IoTAnalyticsResponsesRunPipelineActivity(this, this.__resources, input);
  }

  public sampleChannelData(input: shapes.IoTAnalyticsSampleChannelDataRequest): IoTAnalyticsResponsesSampleChannelData {
    return new IoTAnalyticsResponsesSampleChannelData(this, this.__resources, input);
  }

  public startPipelineReprocessing(input: shapes.IoTAnalyticsStartPipelineReprocessingRequest): IoTAnalyticsResponsesStartPipelineReprocessing {
    return new IoTAnalyticsResponsesStartPipelineReprocessing(this, this.__resources, input);
  }

  public tagResource(input: shapes.IoTAnalyticsTagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'tagResource',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.TagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tags: input.tags,
        },
      },
    };
    new cr.AwsCustomResource(this, 'TagResource', props);
  }

  public untagResource(input: shapes.IoTAnalyticsUntagResourceRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'untagResource',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.UntagResource'),
        parameters: {
          resourceArn: input.resourceArn,
          tagKeys: input.tagKeys,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UntagResource', props);
  }

  public updateChannel(input: shapes.IoTAnalyticsUpdateChannelRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateChannel',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.UpdateChannel'),
        parameters: {
          channelName: input.channelName,
          channelStorage: {
            serviceManagedS3: {
            },
            customerManagedS3: {
              bucket: input.channelStorage?.customerManagedS3?.bucket,
              keyPrefix: input.channelStorage?.customerManagedS3?.keyPrefix,
              roleArn: input.channelStorage?.customerManagedS3?.roleArn,
            },
          },
          retentionPeriod: {
            unlimited: input.retentionPeriod?.unlimited,
            numberOfDays: input.retentionPeriod?.numberOfDays,
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateChannel', props);
  }

  public updateDataset(input: shapes.IoTAnalyticsUpdateDatasetRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataset',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.UpdateDataset'),
        parameters: {
          datasetName: input.datasetName,
          actions: input.actions,
          triggers: input.triggers,
          contentDeliveryRules: input.contentDeliveryRules,
          retentionPeriod: {
            unlimited: input.retentionPeriod?.unlimited,
            numberOfDays: input.retentionPeriod?.numberOfDays,
          },
          versioningConfiguration: {
            unlimited: input.versioningConfiguration?.unlimited,
            maxVersions: input.versioningConfiguration?.maxVersions,
          },
          lateDataRules: input.lateDataRules,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateDataset', props);
  }

  public updateDatastore(input: shapes.IoTAnalyticsUpdateDatastoreRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDatastore',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.UpdateDatastore'),
        parameters: {
          datastoreName: input.datastoreName,
          retentionPeriod: {
            unlimited: input.retentionPeriod?.unlimited,
            numberOfDays: input.retentionPeriod?.numberOfDays,
          },
          datastoreStorage: {
            serviceManagedS3: {
            },
            customerManagedS3: {
              bucket: input.datastoreStorage?.customerManagedS3?.bucket,
              keyPrefix: input.datastoreStorage?.customerManagedS3?.keyPrefix,
              roleArn: input.datastoreStorage?.customerManagedS3?.roleArn,
            },
          },
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdateDatastore', props);
  }

  public updatePipeline(input: shapes.IoTAnalyticsUpdatePipelineRequest): void {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updatePipeline',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.UpdatePipeline'),
        parameters: {
          pipelineName: input.pipelineName,
          pipelineActivities: input.pipelineActivities,
        },
      },
    };
    new cr.AwsCustomResource(this, 'UpdatePipeline', props);
  }

}

export class IoTAnalyticsResponsesBatchPutMessage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsBatchPutMessageRequest) {
  }

  public get batchPutMessageErrorEntries(): shapes.IoTAnalyticsBatchPutMessageErrorEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'batchPutMessage',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.BatchPutMessage.batchPutMessageErrorEntries'),
        outputPath: 'batchPutMessageErrorEntries',
        parameters: {
          channelName: this.__input.channelName,
          messages: this.__input.messages,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'BatchPutMessage.batchPutMessageErrorEntries', props);
    return resource.getResponseField('batchPutMessageErrorEntries') as unknown as shapes.IoTAnalyticsBatchPutMessageErrorEntry[];
  }

}

export class IoTAnalyticsResponsesCreateChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsCreateChannelRequest) {
  }

  public get channelName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannel',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.CreateChannel.channelName'),
        outputPath: 'channelName',
        parameters: {
          channelName: this.__input.channelName,
          channelStorage: {
            serviceManagedS3: {
            },
            customerManagedS3: {
              bucket: this.__input.channelStorage?.customerManagedS3?.bucket,
              keyPrefix: this.__input.channelStorage?.customerManagedS3?.keyPrefix,
              roleArn: this.__input.channelStorage?.customerManagedS3?.roleArn,
            },
          },
          retentionPeriod: {
            unlimited: this.__input.retentionPeriod?.unlimited,
            numberOfDays: this.__input.retentionPeriod?.numberOfDays,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannel.channelName', props);
    return resource.getResponseField('channelName') as unknown as string;
  }

  public get channelArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannel',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.CreateChannel.channelArn'),
        outputPath: 'channelArn',
        parameters: {
          channelName: this.__input.channelName,
          channelStorage: {
            serviceManagedS3: {
            },
            customerManagedS3: {
              bucket: this.__input.channelStorage?.customerManagedS3?.bucket,
              keyPrefix: this.__input.channelStorage?.customerManagedS3?.keyPrefix,
              roleArn: this.__input.channelStorage?.customerManagedS3?.roleArn,
            },
          },
          retentionPeriod: {
            unlimited: this.__input.retentionPeriod?.unlimited,
            numberOfDays: this.__input.retentionPeriod?.numberOfDays,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannel.channelArn', props);
    return resource.getResponseField('channelArn') as unknown as string;
  }

  public get retentionPeriod(): IoTAnalyticsResponsesCreateChannelRetentionPeriod {
    return new IoTAnalyticsResponsesCreateChannelRetentionPeriod(this.__scope, this.__resources, this.__input);
  }

}

export class IoTAnalyticsResponsesCreateChannelRetentionPeriod {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsCreateChannelRequest) {
  }

  public get unlimited(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannel',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.CreateChannel.retentionPeriod.unlimited'),
        outputPath: 'retentionPeriod.unlimited',
        parameters: {
          channelName: this.__input.channelName,
          channelStorage: {
            serviceManagedS3: {
            },
            customerManagedS3: {
              bucket: this.__input.channelStorage?.customerManagedS3?.bucket,
              keyPrefix: this.__input.channelStorage?.customerManagedS3?.keyPrefix,
              roleArn: this.__input.channelStorage?.customerManagedS3?.roleArn,
            },
          },
          retentionPeriod: {
            unlimited: this.__input.retentionPeriod?.unlimited,
            numberOfDays: this.__input.retentionPeriod?.numberOfDays,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannel.retentionPeriod.unlimited', props);
    return resource.getResponseField('retentionPeriod.unlimited') as unknown as boolean;
  }

  public get numberOfDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createChannel',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.CreateChannel.retentionPeriod.numberOfDays'),
        outputPath: 'retentionPeriod.numberOfDays',
        parameters: {
          channelName: this.__input.channelName,
          channelStorage: {
            serviceManagedS3: {
            },
            customerManagedS3: {
              bucket: this.__input.channelStorage?.customerManagedS3?.bucket,
              keyPrefix: this.__input.channelStorage?.customerManagedS3?.keyPrefix,
              roleArn: this.__input.channelStorage?.customerManagedS3?.roleArn,
            },
          },
          retentionPeriod: {
            unlimited: this.__input.retentionPeriod?.unlimited,
            numberOfDays: this.__input.retentionPeriod?.numberOfDays,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateChannel.retentionPeriod.numberOfDays', props);
    return resource.getResponseField('retentionPeriod.numberOfDays') as unknown as number;
  }

}

export class IoTAnalyticsResponsesCreateDataset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsCreateDatasetRequest) {
  }

  public get datasetName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataset',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.CreateDataset.datasetName'),
        outputPath: 'datasetName',
        parameters: {
          datasetName: this.__input.datasetName,
          actions: this.__input.actions,
          triggers: this.__input.triggers,
          contentDeliveryRules: this.__input.contentDeliveryRules,
          retentionPeriod: {
            unlimited: this.__input.retentionPeriod?.unlimited,
            numberOfDays: this.__input.retentionPeriod?.numberOfDays,
          },
          versioningConfiguration: {
            unlimited: this.__input.versioningConfiguration?.unlimited,
            maxVersions: this.__input.versioningConfiguration?.maxVersions,
          },
          tags: this.__input.tags,
          lateDataRules: this.__input.lateDataRules,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataset.datasetName', props);
    return resource.getResponseField('datasetName') as unknown as string;
  }

  public get datasetArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataset',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.CreateDataset.datasetArn'),
        outputPath: 'datasetArn',
        parameters: {
          datasetName: this.__input.datasetName,
          actions: this.__input.actions,
          triggers: this.__input.triggers,
          contentDeliveryRules: this.__input.contentDeliveryRules,
          retentionPeriod: {
            unlimited: this.__input.retentionPeriod?.unlimited,
            numberOfDays: this.__input.retentionPeriod?.numberOfDays,
          },
          versioningConfiguration: {
            unlimited: this.__input.versioningConfiguration?.unlimited,
            maxVersions: this.__input.versioningConfiguration?.maxVersions,
          },
          tags: this.__input.tags,
          lateDataRules: this.__input.lateDataRules,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataset.datasetArn', props);
    return resource.getResponseField('datasetArn') as unknown as string;
  }

  public get retentionPeriod(): IoTAnalyticsResponsesCreateDatasetRetentionPeriod {
    return new IoTAnalyticsResponsesCreateDatasetRetentionPeriod(this.__scope, this.__resources, this.__input);
  }

}

export class IoTAnalyticsResponsesCreateDatasetRetentionPeriod {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsCreateDatasetRequest) {
  }

  public get unlimited(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataset',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.CreateDataset.retentionPeriod.unlimited'),
        outputPath: 'retentionPeriod.unlimited',
        parameters: {
          datasetName: this.__input.datasetName,
          actions: this.__input.actions,
          triggers: this.__input.triggers,
          contentDeliveryRules: this.__input.contentDeliveryRules,
          retentionPeriod: {
            unlimited: this.__input.retentionPeriod?.unlimited,
            numberOfDays: this.__input.retentionPeriod?.numberOfDays,
          },
          versioningConfiguration: {
            unlimited: this.__input.versioningConfiguration?.unlimited,
            maxVersions: this.__input.versioningConfiguration?.maxVersions,
          },
          tags: this.__input.tags,
          lateDataRules: this.__input.lateDataRules,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataset.retentionPeriod.unlimited', props);
    return resource.getResponseField('retentionPeriod.unlimited') as unknown as boolean;
  }

  public get numberOfDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataset',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.CreateDataset.retentionPeriod.numberOfDays'),
        outputPath: 'retentionPeriod.numberOfDays',
        parameters: {
          datasetName: this.__input.datasetName,
          actions: this.__input.actions,
          triggers: this.__input.triggers,
          contentDeliveryRules: this.__input.contentDeliveryRules,
          retentionPeriod: {
            unlimited: this.__input.retentionPeriod?.unlimited,
            numberOfDays: this.__input.retentionPeriod?.numberOfDays,
          },
          versioningConfiguration: {
            unlimited: this.__input.versioningConfiguration?.unlimited,
            maxVersions: this.__input.versioningConfiguration?.maxVersions,
          },
          tags: this.__input.tags,
          lateDataRules: this.__input.lateDataRules,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataset.retentionPeriod.numberOfDays', props);
    return resource.getResponseField('retentionPeriod.numberOfDays') as unknown as number;
  }

}

export class IoTAnalyticsResponsesCreateDatasetContent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsCreateDatasetContentRequest) {
  }

  public get versionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDatasetContent',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.CreateDatasetContent.versionId'),
        outputPath: 'versionId',
        parameters: {
          datasetName: this.__input.datasetName,
          versionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDatasetContent.versionId', props);
    return resource.getResponseField('versionId') as unknown as string;
  }

}

export class IoTAnalyticsResponsesCreateDatastore {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsCreateDatastoreRequest) {
  }

  public get datastoreName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDatastore',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.CreateDatastore.datastoreName'),
        outputPath: 'datastoreName',
        parameters: {
          datastoreName: this.__input.datastoreName,
          datastoreStorage: {
            serviceManagedS3: {
            },
            customerManagedS3: {
              bucket: this.__input.datastoreStorage?.customerManagedS3?.bucket,
              keyPrefix: this.__input.datastoreStorage?.customerManagedS3?.keyPrefix,
              roleArn: this.__input.datastoreStorage?.customerManagedS3?.roleArn,
            },
          },
          retentionPeriod: {
            unlimited: this.__input.retentionPeriod?.unlimited,
            numberOfDays: this.__input.retentionPeriod?.numberOfDays,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDatastore.datastoreName', props);
    return resource.getResponseField('datastoreName') as unknown as string;
  }

  public get datastoreArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDatastore',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.CreateDatastore.datastoreArn'),
        outputPath: 'datastoreArn',
        parameters: {
          datastoreName: this.__input.datastoreName,
          datastoreStorage: {
            serviceManagedS3: {
            },
            customerManagedS3: {
              bucket: this.__input.datastoreStorage?.customerManagedS3?.bucket,
              keyPrefix: this.__input.datastoreStorage?.customerManagedS3?.keyPrefix,
              roleArn: this.__input.datastoreStorage?.customerManagedS3?.roleArn,
            },
          },
          retentionPeriod: {
            unlimited: this.__input.retentionPeriod?.unlimited,
            numberOfDays: this.__input.retentionPeriod?.numberOfDays,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDatastore.datastoreArn', props);
    return resource.getResponseField('datastoreArn') as unknown as string;
  }

  public get retentionPeriod(): IoTAnalyticsResponsesCreateDatastoreRetentionPeriod {
    return new IoTAnalyticsResponsesCreateDatastoreRetentionPeriod(this.__scope, this.__resources, this.__input);
  }

}

export class IoTAnalyticsResponsesCreateDatastoreRetentionPeriod {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsCreateDatastoreRequest) {
  }

  public get unlimited(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDatastore',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.CreateDatastore.retentionPeriod.unlimited'),
        outputPath: 'retentionPeriod.unlimited',
        parameters: {
          datastoreName: this.__input.datastoreName,
          datastoreStorage: {
            serviceManagedS3: {
            },
            customerManagedS3: {
              bucket: this.__input.datastoreStorage?.customerManagedS3?.bucket,
              keyPrefix: this.__input.datastoreStorage?.customerManagedS3?.keyPrefix,
              roleArn: this.__input.datastoreStorage?.customerManagedS3?.roleArn,
            },
          },
          retentionPeriod: {
            unlimited: this.__input.retentionPeriod?.unlimited,
            numberOfDays: this.__input.retentionPeriod?.numberOfDays,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDatastore.retentionPeriod.unlimited', props);
    return resource.getResponseField('retentionPeriod.unlimited') as unknown as boolean;
  }

  public get numberOfDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDatastore',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.CreateDatastore.retentionPeriod.numberOfDays'),
        outputPath: 'retentionPeriod.numberOfDays',
        parameters: {
          datastoreName: this.__input.datastoreName,
          datastoreStorage: {
            serviceManagedS3: {
            },
            customerManagedS3: {
              bucket: this.__input.datastoreStorage?.customerManagedS3?.bucket,
              keyPrefix: this.__input.datastoreStorage?.customerManagedS3?.keyPrefix,
              roleArn: this.__input.datastoreStorage?.customerManagedS3?.roleArn,
            },
          },
          retentionPeriod: {
            unlimited: this.__input.retentionPeriod?.unlimited,
            numberOfDays: this.__input.retentionPeriod?.numberOfDays,
          },
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDatastore.retentionPeriod.numberOfDays', props);
    return resource.getResponseField('retentionPeriod.numberOfDays') as unknown as number;
  }

}

export class IoTAnalyticsResponsesCreatePipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsCreatePipelineRequest) {
  }

  public get pipelineName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.CreatePipeline.pipelineName'),
        outputPath: 'pipelineName',
        parameters: {
          pipelineName: this.__input.pipelineName,
          pipelineActivities: this.__input.pipelineActivities,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.pipelineName', props);
    return resource.getResponseField('pipelineName') as unknown as string;
  }

  public get pipelineArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createPipeline',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.CreatePipeline.pipelineArn'),
        outputPath: 'pipelineArn',
        parameters: {
          pipelineName: this.__input.pipelineName,
          pipelineActivities: this.__input.pipelineActivities,
          tags: this.__input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreatePipeline.pipelineArn', props);
    return resource.getResponseField('pipelineArn') as unknown as string;
  }

}

export class IoTAnalyticsResponsesDescribeChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsDescribeChannelRequest) {
  }

  public get channel(): IoTAnalyticsResponsesDescribeChannelChannel {
    return new IoTAnalyticsResponsesDescribeChannelChannel(this.__scope, this.__resources, this.__input);
  }

  public get statistics(): IoTAnalyticsResponsesDescribeChannelStatistics {
    return new IoTAnalyticsResponsesDescribeChannelStatistics(this.__scope, this.__resources, this.__input);
  }

}

export class IoTAnalyticsResponsesDescribeChannelChannel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsDescribeChannelRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeChannel.channel.name'),
        outputPath: 'channel.name',
        parameters: {
          channelName: this.__input.channelName,
          includeStatistics: this.__input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.channel.name', props);
    return resource.getResponseField('channel.name') as unknown as string;
  }

  public get storage(): IoTAnalyticsResponsesDescribeChannelChannelStorage {
    return new IoTAnalyticsResponsesDescribeChannelChannelStorage(this.__scope, this.__resources, this.__input);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeChannel.channel.arn'),
        outputPath: 'channel.arn',
        parameters: {
          channelName: this.__input.channelName,
          includeStatistics: this.__input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.channel.arn', props);
    return resource.getResponseField('channel.arn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeChannel.channel.status'),
        outputPath: 'channel.status',
        parameters: {
          channelName: this.__input.channelName,
          includeStatistics: this.__input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.channel.status', props);
    return resource.getResponseField('channel.status') as unknown as string;
  }

  public get retentionPeriod(): IoTAnalyticsResponsesDescribeChannelChannelRetentionPeriod {
    return new IoTAnalyticsResponsesDescribeChannelChannelRetentionPeriod(this.__scope, this.__resources, this.__input);
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeChannel.channel.creationTime'),
        outputPath: 'channel.creationTime',
        parameters: {
          channelName: this.__input.channelName,
          includeStatistics: this.__input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.channel.creationTime', props);
    return resource.getResponseField('channel.creationTime') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeChannel.channel.lastUpdateTime'),
        outputPath: 'channel.lastUpdateTime',
        parameters: {
          channelName: this.__input.channelName,
          includeStatistics: this.__input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.channel.lastUpdateTime', props);
    return resource.getResponseField('channel.lastUpdateTime') as unknown as string;
  }

  public get lastMessageArrivalTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeChannel.channel.lastMessageArrivalTime'),
        outputPath: 'channel.lastMessageArrivalTime',
        parameters: {
          channelName: this.__input.channelName,
          includeStatistics: this.__input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.channel.lastMessageArrivalTime', props);
    return resource.getResponseField('channel.lastMessageArrivalTime') as unknown as string;
  }

}

export class IoTAnalyticsResponsesDescribeChannelChannelStorage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsDescribeChannelRequest) {
  }

  public get serviceManagedS3(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeChannel.channel.storage.serviceManagedS3'),
        outputPath: 'channel.storage.serviceManagedS3',
        parameters: {
          channelName: this.__input.channelName,
          includeStatistics: this.__input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.channel.storage.serviceManagedS3', props);
    return resource.getResponseField('channel.storage.serviceManagedS3') as unknown as any;
  }

  public get customerManagedS3(): IoTAnalyticsResponsesDescribeChannelChannelStorageCustomerManagedS3 {
    return new IoTAnalyticsResponsesDescribeChannelChannelStorageCustomerManagedS3(this.__scope, this.__resources, this.__input);
  }

}

export class IoTAnalyticsResponsesDescribeChannelChannelStorageCustomerManagedS3 {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsDescribeChannelRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeChannel.channel.storage.customerManagedS3.bucket'),
        outputPath: 'channel.storage.customerManagedS3.bucket',
        parameters: {
          channelName: this.__input.channelName,
          includeStatistics: this.__input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.channel.storage.customerManagedS3.bucket', props);
    return resource.getResponseField('channel.storage.customerManagedS3.bucket') as unknown as string;
  }

  public get keyPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeChannel.channel.storage.customerManagedS3.keyPrefix'),
        outputPath: 'channel.storage.customerManagedS3.keyPrefix',
        parameters: {
          channelName: this.__input.channelName,
          includeStatistics: this.__input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.channel.storage.customerManagedS3.keyPrefix', props);
    return resource.getResponseField('channel.storage.customerManagedS3.keyPrefix') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeChannel.channel.storage.customerManagedS3.roleArn'),
        outputPath: 'channel.storage.customerManagedS3.roleArn',
        parameters: {
          channelName: this.__input.channelName,
          includeStatistics: this.__input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.channel.storage.customerManagedS3.roleArn', props);
    return resource.getResponseField('channel.storage.customerManagedS3.roleArn') as unknown as string;
  }

}

export class IoTAnalyticsResponsesDescribeChannelChannelRetentionPeriod {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsDescribeChannelRequest) {
  }

  public get unlimited(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeChannel.channel.retentionPeriod.unlimited'),
        outputPath: 'channel.retentionPeriod.unlimited',
        parameters: {
          channelName: this.__input.channelName,
          includeStatistics: this.__input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.channel.retentionPeriod.unlimited', props);
    return resource.getResponseField('channel.retentionPeriod.unlimited') as unknown as boolean;
  }

  public get numberOfDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeChannel.channel.retentionPeriod.numberOfDays'),
        outputPath: 'channel.retentionPeriod.numberOfDays',
        parameters: {
          channelName: this.__input.channelName,
          includeStatistics: this.__input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.channel.retentionPeriod.numberOfDays', props);
    return resource.getResponseField('channel.retentionPeriod.numberOfDays') as unknown as number;
  }

}

export class IoTAnalyticsResponsesDescribeChannelStatistics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsDescribeChannelRequest) {
  }

  public get size(): IoTAnalyticsResponsesDescribeChannelStatisticsSize {
    return new IoTAnalyticsResponsesDescribeChannelStatisticsSize(this.__scope, this.__resources, this.__input);
  }

}

export class IoTAnalyticsResponsesDescribeChannelStatisticsSize {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsDescribeChannelRequest) {
  }

  public get estimatedSizeInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeChannel.statistics.size.estimatedSizeInBytes'),
        outputPath: 'statistics.size.estimatedSizeInBytes',
        parameters: {
          channelName: this.__input.channelName,
          includeStatistics: this.__input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.statistics.size.estimatedSizeInBytes', props);
    return resource.getResponseField('statistics.size.estimatedSizeInBytes') as unknown as number;
  }

  public get estimatedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeChannel',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeChannel.statistics.size.estimatedOn'),
        outputPath: 'statistics.size.estimatedOn',
        parameters: {
          channelName: this.__input.channelName,
          includeStatistics: this.__input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeChannel.statistics.size.estimatedOn', props);
    return resource.getResponseField('statistics.size.estimatedOn') as unknown as string;
  }

}

export class IoTAnalyticsResponsesDescribeDataset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsDescribeDatasetRequest) {
  }

  public get dataset(): IoTAnalyticsResponsesDescribeDatasetDataset {
    return new IoTAnalyticsResponsesDescribeDatasetDataset(this.__scope, this.__resources, this.__input);
  }

}

export class IoTAnalyticsResponsesDescribeDatasetDataset {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsDescribeDatasetRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeDataset.dataset.name'),
        outputPath: 'dataset.name',
        parameters: {
          datasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.dataset.name', props);
    return resource.getResponseField('dataset.name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeDataset.dataset.arn'),
        outputPath: 'dataset.arn',
        parameters: {
          datasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.dataset.arn', props);
    return resource.getResponseField('dataset.arn') as unknown as string;
  }

  public get actions(): shapes.IoTAnalyticsDatasetAction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeDataset.dataset.actions'),
        outputPath: 'dataset.actions',
        parameters: {
          datasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.dataset.actions', props);
    return resource.getResponseField('dataset.actions') as unknown as shapes.IoTAnalyticsDatasetAction[];
  }

  public get triggers(): shapes.IoTAnalyticsDatasetTrigger[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeDataset.dataset.triggers'),
        outputPath: 'dataset.triggers',
        parameters: {
          datasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.dataset.triggers', props);
    return resource.getResponseField('dataset.triggers') as unknown as shapes.IoTAnalyticsDatasetTrigger[];
  }

  public get contentDeliveryRules(): shapes.IoTAnalyticsDatasetContentDeliveryRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeDataset.dataset.contentDeliveryRules'),
        outputPath: 'dataset.contentDeliveryRules',
        parameters: {
          datasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.dataset.contentDeliveryRules', props);
    return resource.getResponseField('dataset.contentDeliveryRules') as unknown as shapes.IoTAnalyticsDatasetContentDeliveryRule[];
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeDataset.dataset.status'),
        outputPath: 'dataset.status',
        parameters: {
          datasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.dataset.status', props);
    return resource.getResponseField('dataset.status') as unknown as string;
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeDataset.dataset.creationTime'),
        outputPath: 'dataset.creationTime',
        parameters: {
          datasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.dataset.creationTime', props);
    return resource.getResponseField('dataset.creationTime') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeDataset.dataset.lastUpdateTime'),
        outputPath: 'dataset.lastUpdateTime',
        parameters: {
          datasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.dataset.lastUpdateTime', props);
    return resource.getResponseField('dataset.lastUpdateTime') as unknown as string;
  }

  public get retentionPeriod(): IoTAnalyticsResponsesDescribeDatasetDatasetRetentionPeriod {
    return new IoTAnalyticsResponsesDescribeDatasetDatasetRetentionPeriod(this.__scope, this.__resources, this.__input);
  }

  public get versioningConfiguration(): IoTAnalyticsResponsesDescribeDatasetDatasetVersioningConfiguration {
    return new IoTAnalyticsResponsesDescribeDatasetDatasetVersioningConfiguration(this.__scope, this.__resources, this.__input);
  }

  public get lateDataRules(): shapes.IoTAnalyticsLateDataRule[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeDataset.dataset.lateDataRules'),
        outputPath: 'dataset.lateDataRules',
        parameters: {
          datasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.dataset.lateDataRules', props);
    return resource.getResponseField('dataset.lateDataRules') as unknown as shapes.IoTAnalyticsLateDataRule[];
  }

}

export class IoTAnalyticsResponsesDescribeDatasetDatasetRetentionPeriod {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsDescribeDatasetRequest) {
  }

  public get unlimited(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeDataset.dataset.retentionPeriod.unlimited'),
        outputPath: 'dataset.retentionPeriod.unlimited',
        parameters: {
          datasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.dataset.retentionPeriod.unlimited', props);
    return resource.getResponseField('dataset.retentionPeriod.unlimited') as unknown as boolean;
  }

  public get numberOfDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeDataset.dataset.retentionPeriod.numberOfDays'),
        outputPath: 'dataset.retentionPeriod.numberOfDays',
        parameters: {
          datasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.dataset.retentionPeriod.numberOfDays', props);
    return resource.getResponseField('dataset.retentionPeriod.numberOfDays') as unknown as number;
  }

}

export class IoTAnalyticsResponsesDescribeDatasetDatasetVersioningConfiguration {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsDescribeDatasetRequest) {
  }

  public get unlimited(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeDataset.dataset.versioningConfiguration.unlimited'),
        outputPath: 'dataset.versioningConfiguration.unlimited',
        parameters: {
          datasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.dataset.versioningConfiguration.unlimited', props);
    return resource.getResponseField('dataset.versioningConfiguration.unlimited') as unknown as boolean;
  }

  public get maxVersions(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataset',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeDataset.dataset.versioningConfiguration.maxVersions'),
        outputPath: 'dataset.versioningConfiguration.maxVersions',
        parameters: {
          datasetName: this.__input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataset.dataset.versioningConfiguration.maxVersions', props);
    return resource.getResponseField('dataset.versioningConfiguration.maxVersions') as unknown as number;
  }

}

export class IoTAnalyticsResponsesDescribeDatastore {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsDescribeDatastoreRequest) {
  }

  public get datastore(): IoTAnalyticsResponsesDescribeDatastoreDatastore {
    return new IoTAnalyticsResponsesDescribeDatastoreDatastore(this.__scope, this.__resources, this.__input);
  }

  public get statistics(): IoTAnalyticsResponsesDescribeDatastoreStatistics {
    return new IoTAnalyticsResponsesDescribeDatastoreStatistics(this.__scope, this.__resources, this.__input);
  }

}

export class IoTAnalyticsResponsesDescribeDatastoreDatastore {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsDescribeDatastoreRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatastore',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeDatastore.datastore.name'),
        outputPath: 'datastore.name',
        parameters: {
          datastoreName: this.__input.datastoreName,
          includeStatistics: this.__input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatastore.datastore.name', props);
    return resource.getResponseField('datastore.name') as unknown as string;
  }

  public get storage(): IoTAnalyticsResponsesDescribeDatastoreDatastoreStorage {
    return new IoTAnalyticsResponsesDescribeDatastoreDatastoreStorage(this.__scope, this.__resources, this.__input);
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatastore',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeDatastore.datastore.arn'),
        outputPath: 'datastore.arn',
        parameters: {
          datastoreName: this.__input.datastoreName,
          includeStatistics: this.__input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatastore.datastore.arn', props);
    return resource.getResponseField('datastore.arn') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatastore',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeDatastore.datastore.status'),
        outputPath: 'datastore.status',
        parameters: {
          datastoreName: this.__input.datastoreName,
          includeStatistics: this.__input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatastore.datastore.status', props);
    return resource.getResponseField('datastore.status') as unknown as string;
  }

  public get retentionPeriod(): IoTAnalyticsResponsesDescribeDatastoreDatastoreRetentionPeriod {
    return new IoTAnalyticsResponsesDescribeDatastoreDatastoreRetentionPeriod(this.__scope, this.__resources, this.__input);
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatastore',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeDatastore.datastore.creationTime'),
        outputPath: 'datastore.creationTime',
        parameters: {
          datastoreName: this.__input.datastoreName,
          includeStatistics: this.__input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatastore.datastore.creationTime', props);
    return resource.getResponseField('datastore.creationTime') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatastore',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeDatastore.datastore.lastUpdateTime'),
        outputPath: 'datastore.lastUpdateTime',
        parameters: {
          datastoreName: this.__input.datastoreName,
          includeStatistics: this.__input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatastore.datastore.lastUpdateTime', props);
    return resource.getResponseField('datastore.lastUpdateTime') as unknown as string;
  }

  public get lastMessageArrivalTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatastore',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeDatastore.datastore.lastMessageArrivalTime'),
        outputPath: 'datastore.lastMessageArrivalTime',
        parameters: {
          datastoreName: this.__input.datastoreName,
          includeStatistics: this.__input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatastore.datastore.lastMessageArrivalTime', props);
    return resource.getResponseField('datastore.lastMessageArrivalTime') as unknown as string;
  }

}

export class IoTAnalyticsResponsesDescribeDatastoreDatastoreStorage {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsDescribeDatastoreRequest) {
  }

  public get serviceManagedS3(): any {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatastore',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeDatastore.datastore.storage.serviceManagedS3'),
        outputPath: 'datastore.storage.serviceManagedS3',
        parameters: {
          datastoreName: this.__input.datastoreName,
          includeStatistics: this.__input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatastore.datastore.storage.serviceManagedS3', props);
    return resource.getResponseField('datastore.storage.serviceManagedS3') as unknown as any;
  }

  public get customerManagedS3(): IoTAnalyticsResponsesDescribeDatastoreDatastoreStorageCustomerManagedS3 {
    return new IoTAnalyticsResponsesDescribeDatastoreDatastoreStorageCustomerManagedS3(this.__scope, this.__resources, this.__input);
  }

}

export class IoTAnalyticsResponsesDescribeDatastoreDatastoreStorageCustomerManagedS3 {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsDescribeDatastoreRequest) {
  }

  public get bucket(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatastore',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeDatastore.datastore.storage.customerManagedS3.bucket'),
        outputPath: 'datastore.storage.customerManagedS3.bucket',
        parameters: {
          datastoreName: this.__input.datastoreName,
          includeStatistics: this.__input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatastore.datastore.storage.customerManagedS3.bucket', props);
    return resource.getResponseField('datastore.storage.customerManagedS3.bucket') as unknown as string;
  }

  public get keyPrefix(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatastore',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeDatastore.datastore.storage.customerManagedS3.keyPrefix'),
        outputPath: 'datastore.storage.customerManagedS3.keyPrefix',
        parameters: {
          datastoreName: this.__input.datastoreName,
          includeStatistics: this.__input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatastore.datastore.storage.customerManagedS3.keyPrefix', props);
    return resource.getResponseField('datastore.storage.customerManagedS3.keyPrefix') as unknown as string;
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatastore',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeDatastore.datastore.storage.customerManagedS3.roleArn'),
        outputPath: 'datastore.storage.customerManagedS3.roleArn',
        parameters: {
          datastoreName: this.__input.datastoreName,
          includeStatistics: this.__input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatastore.datastore.storage.customerManagedS3.roleArn', props);
    return resource.getResponseField('datastore.storage.customerManagedS3.roleArn') as unknown as string;
  }

}

export class IoTAnalyticsResponsesDescribeDatastoreDatastoreRetentionPeriod {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsDescribeDatastoreRequest) {
  }

  public get unlimited(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatastore',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeDatastore.datastore.retentionPeriod.unlimited'),
        outputPath: 'datastore.retentionPeriod.unlimited',
        parameters: {
          datastoreName: this.__input.datastoreName,
          includeStatistics: this.__input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatastore.datastore.retentionPeriod.unlimited', props);
    return resource.getResponseField('datastore.retentionPeriod.unlimited') as unknown as boolean;
  }

  public get numberOfDays(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatastore',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeDatastore.datastore.retentionPeriod.numberOfDays'),
        outputPath: 'datastore.retentionPeriod.numberOfDays',
        parameters: {
          datastoreName: this.__input.datastoreName,
          includeStatistics: this.__input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatastore.datastore.retentionPeriod.numberOfDays', props);
    return resource.getResponseField('datastore.retentionPeriod.numberOfDays') as unknown as number;
  }

}

export class IoTAnalyticsResponsesDescribeDatastoreStatistics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsDescribeDatastoreRequest) {
  }

  public get size(): IoTAnalyticsResponsesDescribeDatastoreStatisticsSize {
    return new IoTAnalyticsResponsesDescribeDatastoreStatisticsSize(this.__scope, this.__resources, this.__input);
  }

}

export class IoTAnalyticsResponsesDescribeDatastoreStatisticsSize {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsDescribeDatastoreRequest) {
  }

  public get estimatedSizeInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatastore',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeDatastore.statistics.size.estimatedSizeInBytes'),
        outputPath: 'statistics.size.estimatedSizeInBytes',
        parameters: {
          datastoreName: this.__input.datastoreName,
          includeStatistics: this.__input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatastore.statistics.size.estimatedSizeInBytes', props);
    return resource.getResponseField('statistics.size.estimatedSizeInBytes') as unknown as number;
  }

  public get estimatedOn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDatastore',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeDatastore.statistics.size.estimatedOn'),
        outputPath: 'statistics.size.estimatedOn',
        parameters: {
          datastoreName: this.__input.datastoreName,
          includeStatistics: this.__input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDatastore.statistics.size.estimatedOn', props);
    return resource.getResponseField('statistics.size.estimatedOn') as unknown as string;
  }

}

export class IoTAnalyticsResponsesDescribeLoggingOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get loggingOptions(): IoTAnalyticsResponsesDescribeLoggingOptionsLoggingOptions {
    return new IoTAnalyticsResponsesDescribeLoggingOptionsLoggingOptions(this.__scope, this.__resources);
  }

}

export class IoTAnalyticsResponsesDescribeLoggingOptionsLoggingOptions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[]) {
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLoggingOptions',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeLoggingOptions.loggingOptions.roleArn'),
        outputPath: 'loggingOptions.roleArn',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLoggingOptions.loggingOptions.roleArn', props);
    return resource.getResponseField('loggingOptions.roleArn') as unknown as string;
  }

  public get level(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLoggingOptions',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeLoggingOptions.loggingOptions.level'),
        outputPath: 'loggingOptions.level',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLoggingOptions.loggingOptions.level', props);
    return resource.getResponseField('loggingOptions.level') as unknown as string;
  }

  public get enabled(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeLoggingOptions',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribeLoggingOptions.loggingOptions.enabled'),
        outputPath: 'loggingOptions.enabled',
        parameters: {
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeLoggingOptions.loggingOptions.enabled', props);
    return resource.getResponseField('loggingOptions.enabled') as unknown as boolean;
  }

}

export class IoTAnalyticsResponsesDescribePipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsDescribePipelineRequest) {
  }

  public get pipeline(): IoTAnalyticsResponsesDescribePipelinePipeline {
    return new IoTAnalyticsResponsesDescribePipelinePipeline(this.__scope, this.__resources, this.__input);
  }

}

export class IoTAnalyticsResponsesDescribePipelinePipeline {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsDescribePipelineRequest) {
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePipeline',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribePipeline.pipeline.name'),
        outputPath: 'pipeline.name',
        parameters: {
          pipelineName: this.__input.pipelineName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePipeline.pipeline.name', props);
    return resource.getResponseField('pipeline.name') as unknown as string;
  }

  public get arn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePipeline',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribePipeline.pipeline.arn'),
        outputPath: 'pipeline.arn',
        parameters: {
          pipelineName: this.__input.pipelineName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePipeline.pipeline.arn', props);
    return resource.getResponseField('pipeline.arn') as unknown as string;
  }

  public get activities(): shapes.IoTAnalyticsPipelineActivity[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePipeline',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribePipeline.pipeline.activities'),
        outputPath: 'pipeline.activities',
        parameters: {
          pipelineName: this.__input.pipelineName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePipeline.pipeline.activities', props);
    return resource.getResponseField('pipeline.activities') as unknown as shapes.IoTAnalyticsPipelineActivity[];
  }

  public get reprocessingSummaries(): shapes.IoTAnalyticsReprocessingSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePipeline',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribePipeline.pipeline.reprocessingSummaries'),
        outputPath: 'pipeline.reprocessingSummaries',
        parameters: {
          pipelineName: this.__input.pipelineName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePipeline.pipeline.reprocessingSummaries', props);
    return resource.getResponseField('pipeline.reprocessingSummaries') as unknown as shapes.IoTAnalyticsReprocessingSummary[];
  }

  public get creationTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePipeline',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribePipeline.pipeline.creationTime'),
        outputPath: 'pipeline.creationTime',
        parameters: {
          pipelineName: this.__input.pipelineName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePipeline.pipeline.creationTime', props);
    return resource.getResponseField('pipeline.creationTime') as unknown as string;
  }

  public get lastUpdateTime(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describePipeline',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.DescribePipeline.pipeline.lastUpdateTime'),
        outputPath: 'pipeline.lastUpdateTime',
        parameters: {
          pipelineName: this.__input.pipelineName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribePipeline.pipeline.lastUpdateTime', props);
    return resource.getResponseField('pipeline.lastUpdateTime') as unknown as string;
  }

}

export class IoTAnalyticsResponsesFetchDatasetContent {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsGetDatasetContentRequest) {
  }

  public get entries(): shapes.IoTAnalyticsDatasetEntry[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDatasetContent',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.GetDatasetContent.entries'),
        outputPath: 'entries',
        parameters: {
          datasetName: this.__input.datasetName,
          versionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDatasetContent.entries', props);
    return resource.getResponseField('entries') as unknown as shapes.IoTAnalyticsDatasetEntry[];
  }

  public get timestamp(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDatasetContent',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.GetDatasetContent.timestamp'),
        outputPath: 'timestamp',
        parameters: {
          datasetName: this.__input.datasetName,
          versionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDatasetContent.timestamp', props);
    return resource.getResponseField('timestamp') as unknown as string;
  }

  public get status(): IoTAnalyticsResponsesFetchDatasetContentStatus {
    return new IoTAnalyticsResponsesFetchDatasetContentStatus(this.__scope, this.__resources, this.__input);
  }

}

export class IoTAnalyticsResponsesFetchDatasetContentStatus {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsGetDatasetContentRequest) {
  }

  public get state(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDatasetContent',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.GetDatasetContent.status.state'),
        outputPath: 'status.state',
        parameters: {
          datasetName: this.__input.datasetName,
          versionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDatasetContent.status.state', props);
    return resource.getResponseField('status.state') as unknown as string;
  }

  public get reason(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDatasetContent',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.GetDatasetContent.status.reason'),
        outputPath: 'status.reason',
        parameters: {
          datasetName: this.__input.datasetName,
          versionId: this.__input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDatasetContent.status.reason', props);
    return resource.getResponseField('status.reason') as unknown as string;
  }

}

export class IoTAnalyticsResponsesListChannels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsListChannelsRequest) {
  }

  public get channelSummaries(): shapes.IoTAnalyticsChannelSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannels',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.ListChannels.channelSummaries'),
        outputPath: 'channelSummaries',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannels.channelSummaries', props);
    return resource.getResponseField('channelSummaries') as unknown as shapes.IoTAnalyticsChannelSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listChannels',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.ListChannels.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListChannels.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTAnalyticsResponsesListDatasetContents {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsListDatasetContentsRequest) {
  }

  public get datasetContentSummaries(): shapes.IoTAnalyticsDatasetContentSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatasetContents',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.ListDatasetContents.datasetContentSummaries'),
        outputPath: 'datasetContentSummaries',
        parameters: {
          datasetName: this.__input.datasetName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          scheduledOnOrAfter: this.__input.scheduledOnOrAfter,
          scheduledBefore: this.__input.scheduledBefore,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDatasetContents.datasetContentSummaries', props);
    return resource.getResponseField('datasetContentSummaries') as unknown as shapes.IoTAnalyticsDatasetContentSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatasetContents',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.ListDatasetContents.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          datasetName: this.__input.datasetName,
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
          scheduledOnOrAfter: this.__input.scheduledOnOrAfter,
          scheduledBefore: this.__input.scheduledBefore,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDatasetContents.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTAnalyticsResponsesListDatasets {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsListDatasetsRequest) {
  }

  public get datasetSummaries(): shapes.IoTAnalyticsDatasetSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatasets',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.ListDatasets.datasetSummaries'),
        outputPath: 'datasetSummaries',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDatasets.datasetSummaries', props);
    return resource.getResponseField('datasetSummaries') as unknown as shapes.IoTAnalyticsDatasetSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatasets',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.ListDatasets.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDatasets.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTAnalyticsResponsesListDatastores {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsListDatastoresRequest) {
  }

  public get datastoreSummaries(): shapes.IoTAnalyticsDatastoreSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatastores',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.ListDatastores.datastoreSummaries'),
        outputPath: 'datastoreSummaries',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDatastores.datastoreSummaries', props);
    return resource.getResponseField('datastoreSummaries') as unknown as shapes.IoTAnalyticsDatastoreSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listDatastores',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.ListDatastores.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListDatastores.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTAnalyticsResponsesListPipelines {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsListPipelinesRequest) {
  }

  public get pipelineSummaries(): shapes.IoTAnalyticsPipelineSummary[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPipelines',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.ListPipelines.pipelineSummaries'),
        outputPath: 'pipelineSummaries',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPipelines.pipelineSummaries', props);
    return resource.getResponseField('pipelineSummaries') as unknown as shapes.IoTAnalyticsPipelineSummary[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listPipelines',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.ListPipelines.nextToken'),
        outputPath: 'nextToken',
        parameters: {
          nextToken: this.__input.nextToken,
          maxResults: this.__input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListPipelines.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTAnalyticsResponsesListTagsForResource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsListTagsForResourceRequest) {
  }

  public get tags(): shapes.IoTAnalyticsTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'listTagsForResource',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.ListTagsForResource.tags'),
        outputPath: 'tags',
        parameters: {
          resourceArn: this.__input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.IoTAnalyticsTag[];
  }

}

export class IoTAnalyticsResponsesRunPipelineActivity {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsRunPipelineActivityRequest) {
  }

  public get payloads(): any[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'runPipelineActivity',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.RunPipelineActivity.payloads'),
        outputPath: 'payloads',
        parameters: {
          pipelineActivity: {
            channel: {
              name: this.__input.pipelineActivity.channel?.name,
              channelName: this.__input.pipelineActivity.channel?.channelName,
              next: this.__input.pipelineActivity.channel?.next,
            },
            lambda: {
              name: this.__input.pipelineActivity.lambda?.name,
              lambdaName: this.__input.pipelineActivity.lambda?.lambdaName,
              batchSize: this.__input.pipelineActivity.lambda?.batchSize,
              next: this.__input.pipelineActivity.lambda?.next,
            },
            datastore: {
              name: this.__input.pipelineActivity.datastore?.name,
              datastoreName: this.__input.pipelineActivity.datastore?.datastoreName,
            },
            addAttributes: {
              name: this.__input.pipelineActivity.addAttributes?.name,
              attributes: this.__input.pipelineActivity.addAttributes?.attributes,
              next: this.__input.pipelineActivity.addAttributes?.next,
            },
            removeAttributes: {
              name: this.__input.pipelineActivity.removeAttributes?.name,
              attributes: this.__input.pipelineActivity.removeAttributes?.attributes,
              next: this.__input.pipelineActivity.removeAttributes?.next,
            },
            selectAttributes: {
              name: this.__input.pipelineActivity.selectAttributes?.name,
              attributes: this.__input.pipelineActivity.selectAttributes?.attributes,
              next: this.__input.pipelineActivity.selectAttributes?.next,
            },
            filter: {
              name: this.__input.pipelineActivity.filter?.name,
              filter: this.__input.pipelineActivity.filter?.filter,
              next: this.__input.pipelineActivity.filter?.next,
            },
            math: {
              name: this.__input.pipelineActivity.math?.name,
              attribute: this.__input.pipelineActivity.math?.attribute,
              math: this.__input.pipelineActivity.math?.math,
              next: this.__input.pipelineActivity.math?.next,
            },
            deviceRegistryEnrich: {
              name: this.__input.pipelineActivity.deviceRegistryEnrich?.name,
              attribute: this.__input.pipelineActivity.deviceRegistryEnrich?.attribute,
              thingName: this.__input.pipelineActivity.deviceRegistryEnrich?.thingName,
              roleArn: this.__input.pipelineActivity.deviceRegistryEnrich?.roleArn,
              next: this.__input.pipelineActivity.deviceRegistryEnrich?.next,
            },
            deviceShadowEnrich: {
              name: this.__input.pipelineActivity.deviceShadowEnrich?.name,
              attribute: this.__input.pipelineActivity.deviceShadowEnrich?.attribute,
              thingName: this.__input.pipelineActivity.deviceShadowEnrich?.thingName,
              roleArn: this.__input.pipelineActivity.deviceShadowEnrich?.roleArn,
              next: this.__input.pipelineActivity.deviceShadowEnrich?.next,
            },
          },
          payloads: this.__input.payloads,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RunPipelineActivity.payloads', props);
    return resource.getResponseField('payloads') as unknown as any[];
  }

  public get logResult(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'runPipelineActivity',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.RunPipelineActivity.logResult'),
        outputPath: 'logResult',
        parameters: {
          pipelineActivity: {
            channel: {
              name: this.__input.pipelineActivity.channel?.name,
              channelName: this.__input.pipelineActivity.channel?.channelName,
              next: this.__input.pipelineActivity.channel?.next,
            },
            lambda: {
              name: this.__input.pipelineActivity.lambda?.name,
              lambdaName: this.__input.pipelineActivity.lambda?.lambdaName,
              batchSize: this.__input.pipelineActivity.lambda?.batchSize,
              next: this.__input.pipelineActivity.lambda?.next,
            },
            datastore: {
              name: this.__input.pipelineActivity.datastore?.name,
              datastoreName: this.__input.pipelineActivity.datastore?.datastoreName,
            },
            addAttributes: {
              name: this.__input.pipelineActivity.addAttributes?.name,
              attributes: this.__input.pipelineActivity.addAttributes?.attributes,
              next: this.__input.pipelineActivity.addAttributes?.next,
            },
            removeAttributes: {
              name: this.__input.pipelineActivity.removeAttributes?.name,
              attributes: this.__input.pipelineActivity.removeAttributes?.attributes,
              next: this.__input.pipelineActivity.removeAttributes?.next,
            },
            selectAttributes: {
              name: this.__input.pipelineActivity.selectAttributes?.name,
              attributes: this.__input.pipelineActivity.selectAttributes?.attributes,
              next: this.__input.pipelineActivity.selectAttributes?.next,
            },
            filter: {
              name: this.__input.pipelineActivity.filter?.name,
              filter: this.__input.pipelineActivity.filter?.filter,
              next: this.__input.pipelineActivity.filter?.next,
            },
            math: {
              name: this.__input.pipelineActivity.math?.name,
              attribute: this.__input.pipelineActivity.math?.attribute,
              math: this.__input.pipelineActivity.math?.math,
              next: this.__input.pipelineActivity.math?.next,
            },
            deviceRegistryEnrich: {
              name: this.__input.pipelineActivity.deviceRegistryEnrich?.name,
              attribute: this.__input.pipelineActivity.deviceRegistryEnrich?.attribute,
              thingName: this.__input.pipelineActivity.deviceRegistryEnrich?.thingName,
              roleArn: this.__input.pipelineActivity.deviceRegistryEnrich?.roleArn,
              next: this.__input.pipelineActivity.deviceRegistryEnrich?.next,
            },
            deviceShadowEnrich: {
              name: this.__input.pipelineActivity.deviceShadowEnrich?.name,
              attribute: this.__input.pipelineActivity.deviceShadowEnrich?.attribute,
              thingName: this.__input.pipelineActivity.deviceShadowEnrich?.thingName,
              roleArn: this.__input.pipelineActivity.deviceShadowEnrich?.roleArn,
              next: this.__input.pipelineActivity.deviceShadowEnrich?.next,
            },
          },
          payloads: this.__input.payloads,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'RunPipelineActivity.logResult', props);
    return resource.getResponseField('logResult') as unknown as string;
  }

}

export class IoTAnalyticsResponsesSampleChannelData {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsSampleChannelDataRequest) {
  }

  public get payloads(): any[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'sampleChannelData',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.SampleChannelData.payloads'),
        outputPath: 'payloads',
        parameters: {
          channelName: this.__input.channelName,
          maxMessages: this.__input.maxMessages,
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'SampleChannelData.payloads', props);
    return resource.getResponseField('payloads') as unknown as any[];
  }

}

export class IoTAnalyticsResponsesStartPipelineReprocessing {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.IoTAnalyticsStartPipelineReprocessingRequest) {
  }

  public get reprocessingId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'startPipelineReprocessing',
        service: 'IoTAnalytics',
        physicalResourceId: cr.PhysicalResourceId.of('IoTAnalytics.StartPipelineReprocessing.reprocessingId'),
        outputPath: 'reprocessingId',
        parameters: {
          pipelineName: this.__input.pipelineName,
          startTime: this.__input.startTime,
          endTime: this.__input.endTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'StartPipelineReprocessing.reprocessingId', props);
    return resource.getResponseField('reprocessingId') as unknown as string;
  }

}

