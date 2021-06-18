import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class IoTAnalyticsClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public batchPutMessage(input: shapes.IoTAnalyticsBatchPutMessageRequest): IoTAnalyticsBatchPutMessage {
    return new IoTAnalyticsBatchPutMessage(this, 'BatchPutMessage', this.__resources, input);
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

  public createChannel(input: shapes.IoTAnalyticsCreateChannelRequest): IoTAnalyticsCreateChannel {
    return new IoTAnalyticsCreateChannel(this, 'CreateChannel', this.__resources, input);
  }

  public createDataset(input: shapes.IoTAnalyticsCreateDatasetRequest): IoTAnalyticsCreateDataset {
    return new IoTAnalyticsCreateDataset(this, 'CreateDataset', this.__resources, input);
  }

  public createDatasetContent(input: shapes.IoTAnalyticsCreateDatasetContentRequest): IoTAnalyticsCreateDatasetContent {
    return new IoTAnalyticsCreateDatasetContent(this, 'CreateDatasetContent', this.__resources, input);
  }

  public createDatastore(input: shapes.IoTAnalyticsCreateDatastoreRequest): IoTAnalyticsCreateDatastore {
    return new IoTAnalyticsCreateDatastore(this, 'CreateDatastore', this.__resources, input);
  }

  public createPipeline(input: shapes.IoTAnalyticsCreatePipelineRequest): IoTAnalyticsCreatePipeline {
    return new IoTAnalyticsCreatePipeline(this, 'CreatePipeline', this.__resources, input);
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

  public describeChannel(input: shapes.IoTAnalyticsDescribeChannelRequest): IoTAnalyticsDescribeChannel {
    return new IoTAnalyticsDescribeChannel(this, 'DescribeChannel', this.__resources, input);
  }

  public describeDataset(input: shapes.IoTAnalyticsDescribeDatasetRequest): IoTAnalyticsDescribeDataset {
    return new IoTAnalyticsDescribeDataset(this, 'DescribeDataset', this.__resources, input);
  }

  public describeDatastore(input: shapes.IoTAnalyticsDescribeDatastoreRequest): IoTAnalyticsDescribeDatastore {
    return new IoTAnalyticsDescribeDatastore(this, 'DescribeDatastore', this.__resources, input);
  }

  public describeLoggingOptions(): IoTAnalyticsDescribeLoggingOptions {
    return new IoTAnalyticsDescribeLoggingOptions(this, 'DescribeLoggingOptions', this.__resources);
  }

  public describePipeline(input: shapes.IoTAnalyticsDescribePipelineRequest): IoTAnalyticsDescribePipeline {
    return new IoTAnalyticsDescribePipeline(this, 'DescribePipeline', this.__resources, input);
  }

  public fetchDatasetContent(input: shapes.IoTAnalyticsGetDatasetContentRequest): IoTAnalyticsFetchDatasetContent {
    return new IoTAnalyticsFetchDatasetContent(this, 'FetchDatasetContent', this.__resources, input);
  }

  public listChannels(input: shapes.IoTAnalyticsListChannelsRequest): IoTAnalyticsListChannels {
    return new IoTAnalyticsListChannels(this, 'ListChannels', this.__resources, input);
  }

  public listDatasetContents(input: shapes.IoTAnalyticsListDatasetContentsRequest): IoTAnalyticsListDatasetContents {
    return new IoTAnalyticsListDatasetContents(this, 'ListDatasetContents', this.__resources, input);
  }

  public listDatasets(input: shapes.IoTAnalyticsListDatasetsRequest): IoTAnalyticsListDatasets {
    return new IoTAnalyticsListDatasets(this, 'ListDatasets', this.__resources, input);
  }

  public listDatastores(input: shapes.IoTAnalyticsListDatastoresRequest): IoTAnalyticsListDatastores {
    return new IoTAnalyticsListDatastores(this, 'ListDatastores', this.__resources, input);
  }

  public listPipelines(input: shapes.IoTAnalyticsListPipelinesRequest): IoTAnalyticsListPipelines {
    return new IoTAnalyticsListPipelines(this, 'ListPipelines', this.__resources, input);
  }

  public listTagsForResource(input: shapes.IoTAnalyticsListTagsForResourceRequest): IoTAnalyticsListTagsForResource {
    return new IoTAnalyticsListTagsForResource(this, 'ListTagsForResource', this.__resources, input);
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

  public runPipelineActivity(input: shapes.IoTAnalyticsRunPipelineActivityRequest): IoTAnalyticsRunPipelineActivity {
    return new IoTAnalyticsRunPipelineActivity(this, 'RunPipelineActivity', this.__resources, input);
  }

  public sampleChannelData(input: shapes.IoTAnalyticsSampleChannelDataRequest): IoTAnalyticsSampleChannelData {
    return new IoTAnalyticsSampleChannelData(this, 'SampleChannelData', this.__resources, input);
  }

  public startPipelineReprocessing(input: shapes.IoTAnalyticsStartPipelineReprocessingRequest): IoTAnalyticsStartPipelineReprocessing {
    return new IoTAnalyticsStartPipelineReprocessing(this, 'StartPipelineReprocessing', this.__resources, input);
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

export class IoTAnalyticsBatchPutMessage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsBatchPutMessageRequest) {
    super(scope, id);
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
          channelName: this.input.channelName,
          messages: this.input.messages,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'BatchPutMessage.batchPutMessageErrorEntries', props);
    return resource.getResponseField('batchPutMessageErrorEntries') as unknown as shapes.IoTAnalyticsBatchPutMessageErrorEntry[];
  }

}

export class IoTAnalyticsCreateChannel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsCreateChannelRequest) {
    super(scope, id);
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
          channelName: this.input.channelName,
          channelStorage: {
            serviceManagedS3: {
            },
            customerManagedS3: {
              bucket: this.input.channelStorage?.customerManagedS3?.bucket,
              keyPrefix: this.input.channelStorage?.customerManagedS3?.keyPrefix,
              roleArn: this.input.channelStorage?.customerManagedS3?.roleArn,
            },
          },
          retentionPeriod: {
            unlimited: this.input.retentionPeriod?.unlimited,
            numberOfDays: this.input.retentionPeriod?.numberOfDays,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateChannel.channelName', props);
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
          channelName: this.input.channelName,
          channelStorage: {
            serviceManagedS3: {
            },
            customerManagedS3: {
              bucket: this.input.channelStorage?.customerManagedS3?.bucket,
              keyPrefix: this.input.channelStorage?.customerManagedS3?.keyPrefix,
              roleArn: this.input.channelStorage?.customerManagedS3?.roleArn,
            },
          },
          retentionPeriod: {
            unlimited: this.input.retentionPeriod?.unlimited,
            numberOfDays: this.input.retentionPeriod?.numberOfDays,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateChannel.channelArn', props);
    return resource.getResponseField('channelArn') as unknown as string;
  }

  public get retentionPeriod(): IoTAnalyticsCreateChannelRetentionPeriod {
    return new IoTAnalyticsCreateChannelRetentionPeriod(this, 'RetentionPeriod', this.__resources, this.input);
  }

}

export class IoTAnalyticsCreateChannelRetentionPeriod extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsCreateChannelRequest) {
    super(scope, id);
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
          channelName: this.input.channelName,
          channelStorage: {
            serviceManagedS3: {
            },
            customerManagedS3: {
              bucket: this.input.channelStorage?.customerManagedS3?.bucket,
              keyPrefix: this.input.channelStorage?.customerManagedS3?.keyPrefix,
              roleArn: this.input.channelStorage?.customerManagedS3?.roleArn,
            },
          },
          retentionPeriod: {
            unlimited: this.input.retentionPeriod?.unlimited,
            numberOfDays: this.input.retentionPeriod?.numberOfDays,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateChannel.retentionPeriod.unlimited', props);
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
          channelName: this.input.channelName,
          channelStorage: {
            serviceManagedS3: {
            },
            customerManagedS3: {
              bucket: this.input.channelStorage?.customerManagedS3?.bucket,
              keyPrefix: this.input.channelStorage?.customerManagedS3?.keyPrefix,
              roleArn: this.input.channelStorage?.customerManagedS3?.roleArn,
            },
          },
          retentionPeriod: {
            unlimited: this.input.retentionPeriod?.unlimited,
            numberOfDays: this.input.retentionPeriod?.numberOfDays,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateChannel.retentionPeriod.numberOfDays', props);
    return resource.getResponseField('retentionPeriod.numberOfDays') as unknown as number;
  }

}

export class IoTAnalyticsCreateDataset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsCreateDatasetRequest) {
    super(scope, id);
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
          datasetName: this.input.datasetName,
          actions: this.input.actions,
          triggers: this.input.triggers,
          contentDeliveryRules: this.input.contentDeliveryRules,
          retentionPeriod: {
            unlimited: this.input.retentionPeriod?.unlimited,
            numberOfDays: this.input.retentionPeriod?.numberOfDays,
          },
          versioningConfiguration: {
            unlimited: this.input.versioningConfiguration?.unlimited,
            maxVersions: this.input.versioningConfiguration?.maxVersions,
          },
          tags: this.input.tags,
          lateDataRules: this.input.lateDataRules,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataset.datasetName', props);
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
          datasetName: this.input.datasetName,
          actions: this.input.actions,
          triggers: this.input.triggers,
          contentDeliveryRules: this.input.contentDeliveryRules,
          retentionPeriod: {
            unlimited: this.input.retentionPeriod?.unlimited,
            numberOfDays: this.input.retentionPeriod?.numberOfDays,
          },
          versioningConfiguration: {
            unlimited: this.input.versioningConfiguration?.unlimited,
            maxVersions: this.input.versioningConfiguration?.maxVersions,
          },
          tags: this.input.tags,
          lateDataRules: this.input.lateDataRules,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataset.datasetArn', props);
    return resource.getResponseField('datasetArn') as unknown as string;
  }

  public get retentionPeriod(): IoTAnalyticsCreateDatasetRetentionPeriod {
    return new IoTAnalyticsCreateDatasetRetentionPeriod(this, 'RetentionPeriod', this.__resources, this.input);
  }

}

export class IoTAnalyticsCreateDatasetRetentionPeriod extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsCreateDatasetRequest) {
    super(scope, id);
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
          datasetName: this.input.datasetName,
          actions: this.input.actions,
          triggers: this.input.triggers,
          contentDeliveryRules: this.input.contentDeliveryRules,
          retentionPeriod: {
            unlimited: this.input.retentionPeriod?.unlimited,
            numberOfDays: this.input.retentionPeriod?.numberOfDays,
          },
          versioningConfiguration: {
            unlimited: this.input.versioningConfiguration?.unlimited,
            maxVersions: this.input.versioningConfiguration?.maxVersions,
          },
          tags: this.input.tags,
          lateDataRules: this.input.lateDataRules,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataset.retentionPeriod.unlimited', props);
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
          datasetName: this.input.datasetName,
          actions: this.input.actions,
          triggers: this.input.triggers,
          contentDeliveryRules: this.input.contentDeliveryRules,
          retentionPeriod: {
            unlimited: this.input.retentionPeriod?.unlimited,
            numberOfDays: this.input.retentionPeriod?.numberOfDays,
          },
          versioningConfiguration: {
            unlimited: this.input.versioningConfiguration?.unlimited,
            maxVersions: this.input.versioningConfiguration?.maxVersions,
          },
          tags: this.input.tags,
          lateDataRules: this.input.lateDataRules,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataset.retentionPeriod.numberOfDays', props);
    return resource.getResponseField('retentionPeriod.numberOfDays') as unknown as number;
  }

}

export class IoTAnalyticsCreateDatasetContent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsCreateDatasetContentRequest) {
    super(scope, id);
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
          datasetName: this.input.datasetName,
          versionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDatasetContent.versionId', props);
    return resource.getResponseField('versionId') as unknown as string;
  }

}

export class IoTAnalyticsCreateDatastore extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsCreateDatastoreRequest) {
    super(scope, id);
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
          datastoreName: this.input.datastoreName,
          datastoreStorage: {
            serviceManagedS3: {
            },
            customerManagedS3: {
              bucket: this.input.datastoreStorage?.customerManagedS3?.bucket,
              keyPrefix: this.input.datastoreStorage?.customerManagedS3?.keyPrefix,
              roleArn: this.input.datastoreStorage?.customerManagedS3?.roleArn,
            },
          },
          retentionPeriod: {
            unlimited: this.input.retentionPeriod?.unlimited,
            numberOfDays: this.input.retentionPeriod?.numberOfDays,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDatastore.datastoreName', props);
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
          datastoreName: this.input.datastoreName,
          datastoreStorage: {
            serviceManagedS3: {
            },
            customerManagedS3: {
              bucket: this.input.datastoreStorage?.customerManagedS3?.bucket,
              keyPrefix: this.input.datastoreStorage?.customerManagedS3?.keyPrefix,
              roleArn: this.input.datastoreStorage?.customerManagedS3?.roleArn,
            },
          },
          retentionPeriod: {
            unlimited: this.input.retentionPeriod?.unlimited,
            numberOfDays: this.input.retentionPeriod?.numberOfDays,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDatastore.datastoreArn', props);
    return resource.getResponseField('datastoreArn') as unknown as string;
  }

  public get retentionPeriod(): IoTAnalyticsCreateDatastoreRetentionPeriod {
    return new IoTAnalyticsCreateDatastoreRetentionPeriod(this, 'RetentionPeriod', this.__resources, this.input);
  }

}

export class IoTAnalyticsCreateDatastoreRetentionPeriod extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsCreateDatastoreRequest) {
    super(scope, id);
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
          datastoreName: this.input.datastoreName,
          datastoreStorage: {
            serviceManagedS3: {
            },
            customerManagedS3: {
              bucket: this.input.datastoreStorage?.customerManagedS3?.bucket,
              keyPrefix: this.input.datastoreStorage?.customerManagedS3?.keyPrefix,
              roleArn: this.input.datastoreStorage?.customerManagedS3?.roleArn,
            },
          },
          retentionPeriod: {
            unlimited: this.input.retentionPeriod?.unlimited,
            numberOfDays: this.input.retentionPeriod?.numberOfDays,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDatastore.retentionPeriod.unlimited', props);
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
          datastoreName: this.input.datastoreName,
          datastoreStorage: {
            serviceManagedS3: {
            },
            customerManagedS3: {
              bucket: this.input.datastoreStorage?.customerManagedS3?.bucket,
              keyPrefix: this.input.datastoreStorage?.customerManagedS3?.keyPrefix,
              roleArn: this.input.datastoreStorage?.customerManagedS3?.roleArn,
            },
          },
          retentionPeriod: {
            unlimited: this.input.retentionPeriod?.unlimited,
            numberOfDays: this.input.retentionPeriod?.numberOfDays,
          },
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDatastore.retentionPeriod.numberOfDays', props);
    return resource.getResponseField('retentionPeriod.numberOfDays') as unknown as number;
  }

}

export class IoTAnalyticsCreatePipeline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsCreatePipelineRequest) {
    super(scope, id);
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
          pipelineName: this.input.pipelineName,
          pipelineActivities: this.input.pipelineActivities,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.pipelineName', props);
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
          pipelineName: this.input.pipelineName,
          pipelineActivities: this.input.pipelineActivities,
          tags: this.input.tags,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreatePipeline.pipelineArn', props);
    return resource.getResponseField('pipelineArn') as unknown as string;
  }

}

export class IoTAnalyticsDescribeChannel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsDescribeChannelRequest) {
    super(scope, id);
  }

  public get channel(): IoTAnalyticsDescribeChannelChannel {
    return new IoTAnalyticsDescribeChannelChannel(this, 'Channel', this.__resources, this.input);
  }

  public get statistics(): IoTAnalyticsDescribeChannelStatistics {
    return new IoTAnalyticsDescribeChannelStatistics(this, 'Statistics', this.__resources, this.input);
  }

}

export class IoTAnalyticsDescribeChannelChannel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsDescribeChannelRequest) {
    super(scope, id);
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
          channelName: this.input.channelName,
          includeStatistics: this.input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannel.channel.name', props);
    return resource.getResponseField('channel.name') as unknown as string;
  }

  public get storage(): IoTAnalyticsDescribeChannelChannelStorage {
    return new IoTAnalyticsDescribeChannelChannelStorage(this, 'Storage', this.__resources, this.input);
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
          channelName: this.input.channelName,
          includeStatistics: this.input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannel.channel.arn', props);
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
          channelName: this.input.channelName,
          includeStatistics: this.input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannel.channel.status', props);
    return resource.getResponseField('channel.status') as unknown as string;
  }

  public get retentionPeriod(): IoTAnalyticsDescribeChannelChannelRetentionPeriod {
    return new IoTAnalyticsDescribeChannelChannelRetentionPeriod(this, 'RetentionPeriod', this.__resources, this.input);
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
          channelName: this.input.channelName,
          includeStatistics: this.input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannel.channel.creationTime', props);
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
          channelName: this.input.channelName,
          includeStatistics: this.input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannel.channel.lastUpdateTime', props);
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
          channelName: this.input.channelName,
          includeStatistics: this.input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannel.channel.lastMessageArrivalTime', props);
    return resource.getResponseField('channel.lastMessageArrivalTime') as unknown as string;
  }

}

export class IoTAnalyticsDescribeChannelChannelStorage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsDescribeChannelRequest) {
    super(scope, id);
  }

  public get serviceManagedS3(): IoTAnalyticsDescribeChannelChannelStorageServiceManagedS3 {
    return new IoTAnalyticsDescribeChannelChannelStorageServiceManagedS3(this, 'ServiceManagedS3');
  }

  public get customerManagedS3(): IoTAnalyticsDescribeChannelChannelStorageCustomerManagedS3 {
    return new IoTAnalyticsDescribeChannelChannelStorageCustomerManagedS3(this, 'CustomerManagedS3', this.__resources, this.input);
  }

}

export class IoTAnalyticsDescribeChannelChannelStorageServiceManagedS3 extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);
  }

}

export class IoTAnalyticsDescribeChannelChannelStorageCustomerManagedS3 extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsDescribeChannelRequest) {
    super(scope, id);
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
          channelName: this.input.channelName,
          includeStatistics: this.input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannel.channel.storage.customerManagedS3.bucket', props);
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
          channelName: this.input.channelName,
          includeStatistics: this.input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannel.channel.storage.customerManagedS3.keyPrefix', props);
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
          channelName: this.input.channelName,
          includeStatistics: this.input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannel.channel.storage.customerManagedS3.roleArn', props);
    return resource.getResponseField('channel.storage.customerManagedS3.roleArn') as unknown as string;
  }

}

export class IoTAnalyticsDescribeChannelChannelRetentionPeriod extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsDescribeChannelRequest) {
    super(scope, id);
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
          channelName: this.input.channelName,
          includeStatistics: this.input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannel.channel.retentionPeriod.unlimited', props);
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
          channelName: this.input.channelName,
          includeStatistics: this.input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannel.channel.retentionPeriod.numberOfDays', props);
    return resource.getResponseField('channel.retentionPeriod.numberOfDays') as unknown as number;
  }

}

export class IoTAnalyticsDescribeChannelStatistics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsDescribeChannelRequest) {
    super(scope, id);
  }

  public get size(): IoTAnalyticsDescribeChannelStatisticsSize {
    return new IoTAnalyticsDescribeChannelStatisticsSize(this, 'Size', this.__resources, this.input);
  }

}

export class IoTAnalyticsDescribeChannelStatisticsSize extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsDescribeChannelRequest) {
    super(scope, id);
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
          channelName: this.input.channelName,
          includeStatistics: this.input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannel.statistics.size.estimatedSizeInBytes', props);
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
          channelName: this.input.channelName,
          includeStatistics: this.input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeChannel.statistics.size.estimatedOn', props);
    return resource.getResponseField('statistics.size.estimatedOn') as unknown as string;
  }

}

export class IoTAnalyticsDescribeDataset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsDescribeDatasetRequest) {
    super(scope, id);
  }

  public get dataset(): IoTAnalyticsDescribeDatasetDataset {
    return new IoTAnalyticsDescribeDatasetDataset(this, 'Dataset', this.__resources, this.input);
  }

}

export class IoTAnalyticsDescribeDatasetDataset extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsDescribeDatasetRequest) {
    super(scope, id);
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
          datasetName: this.input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.dataset.name', props);
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
          datasetName: this.input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.dataset.arn', props);
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
          datasetName: this.input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.dataset.actions', props);
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
          datasetName: this.input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.dataset.triggers', props);
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
          datasetName: this.input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.dataset.contentDeliveryRules', props);
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
          datasetName: this.input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.dataset.status', props);
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
          datasetName: this.input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.dataset.creationTime', props);
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
          datasetName: this.input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.dataset.lastUpdateTime', props);
    return resource.getResponseField('dataset.lastUpdateTime') as unknown as string;
  }

  public get retentionPeriod(): IoTAnalyticsDescribeDatasetDatasetRetentionPeriod {
    return new IoTAnalyticsDescribeDatasetDatasetRetentionPeriod(this, 'RetentionPeriod', this.__resources, this.input);
  }

  public get versioningConfiguration(): IoTAnalyticsDescribeDatasetDatasetVersioningConfiguration {
    return new IoTAnalyticsDescribeDatasetDatasetVersioningConfiguration(this, 'VersioningConfiguration', this.__resources, this.input);
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
          datasetName: this.input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.dataset.lateDataRules', props);
    return resource.getResponseField('dataset.lateDataRules') as unknown as shapes.IoTAnalyticsLateDataRule[];
  }

}

export class IoTAnalyticsDescribeDatasetDatasetRetentionPeriod extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsDescribeDatasetRequest) {
    super(scope, id);
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
          datasetName: this.input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.dataset.retentionPeriod.unlimited', props);
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
          datasetName: this.input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.dataset.retentionPeriod.numberOfDays', props);
    return resource.getResponseField('dataset.retentionPeriod.numberOfDays') as unknown as number;
  }

}

export class IoTAnalyticsDescribeDatasetDatasetVersioningConfiguration extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsDescribeDatasetRequest) {
    super(scope, id);
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
          datasetName: this.input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.dataset.versioningConfiguration.unlimited', props);
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
          datasetName: this.input.datasetName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataset.dataset.versioningConfiguration.maxVersions', props);
    return resource.getResponseField('dataset.versioningConfiguration.maxVersions') as unknown as number;
  }

}

export class IoTAnalyticsDescribeDatastore extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsDescribeDatastoreRequest) {
    super(scope, id);
  }

  public get datastore(): IoTAnalyticsDescribeDatastoreDatastore {
    return new IoTAnalyticsDescribeDatastoreDatastore(this, 'Datastore', this.__resources, this.input);
  }

  public get statistics(): IoTAnalyticsDescribeDatastoreStatistics {
    return new IoTAnalyticsDescribeDatastoreStatistics(this, 'Statistics', this.__resources, this.input);
  }

}

export class IoTAnalyticsDescribeDatastoreDatastore extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsDescribeDatastoreRequest) {
    super(scope, id);
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
          datastoreName: this.input.datastoreName,
          includeStatistics: this.input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatastore.datastore.name', props);
    return resource.getResponseField('datastore.name') as unknown as string;
  }

  public get storage(): IoTAnalyticsDescribeDatastoreDatastoreStorage {
    return new IoTAnalyticsDescribeDatastoreDatastoreStorage(this, 'Storage', this.__resources, this.input);
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
          datastoreName: this.input.datastoreName,
          includeStatistics: this.input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatastore.datastore.arn', props);
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
          datastoreName: this.input.datastoreName,
          includeStatistics: this.input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatastore.datastore.status', props);
    return resource.getResponseField('datastore.status') as unknown as string;
  }

  public get retentionPeriod(): IoTAnalyticsDescribeDatastoreDatastoreRetentionPeriod {
    return new IoTAnalyticsDescribeDatastoreDatastoreRetentionPeriod(this, 'RetentionPeriod', this.__resources, this.input);
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
          datastoreName: this.input.datastoreName,
          includeStatistics: this.input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatastore.datastore.creationTime', props);
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
          datastoreName: this.input.datastoreName,
          includeStatistics: this.input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatastore.datastore.lastUpdateTime', props);
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
          datastoreName: this.input.datastoreName,
          includeStatistics: this.input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatastore.datastore.lastMessageArrivalTime', props);
    return resource.getResponseField('datastore.lastMessageArrivalTime') as unknown as string;
  }

}

export class IoTAnalyticsDescribeDatastoreDatastoreStorage extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsDescribeDatastoreRequest) {
    super(scope, id);
  }

  public get serviceManagedS3(): IoTAnalyticsDescribeDatastoreDatastoreStorageServiceManagedS3 {
    return new IoTAnalyticsDescribeDatastoreDatastoreStorageServiceManagedS3(this, 'ServiceManagedS3');
  }

  public get customerManagedS3(): IoTAnalyticsDescribeDatastoreDatastoreStorageCustomerManagedS3 {
    return new IoTAnalyticsDescribeDatastoreDatastoreStorageCustomerManagedS3(this, 'CustomerManagedS3', this.__resources, this.input);
  }

}

export class IoTAnalyticsDescribeDatastoreDatastoreStorageServiceManagedS3 extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string) {
    super(scope, id);
  }

}

export class IoTAnalyticsDescribeDatastoreDatastoreStorageCustomerManagedS3 extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsDescribeDatastoreRequest) {
    super(scope, id);
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
          datastoreName: this.input.datastoreName,
          includeStatistics: this.input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatastore.datastore.storage.customerManagedS3.bucket', props);
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
          datastoreName: this.input.datastoreName,
          includeStatistics: this.input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatastore.datastore.storage.customerManagedS3.keyPrefix', props);
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
          datastoreName: this.input.datastoreName,
          includeStatistics: this.input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatastore.datastore.storage.customerManagedS3.roleArn', props);
    return resource.getResponseField('datastore.storage.customerManagedS3.roleArn') as unknown as string;
  }

}

export class IoTAnalyticsDescribeDatastoreDatastoreRetentionPeriod extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsDescribeDatastoreRequest) {
    super(scope, id);
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
          datastoreName: this.input.datastoreName,
          includeStatistics: this.input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatastore.datastore.retentionPeriod.unlimited', props);
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
          datastoreName: this.input.datastoreName,
          includeStatistics: this.input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatastore.datastore.retentionPeriod.numberOfDays', props);
    return resource.getResponseField('datastore.retentionPeriod.numberOfDays') as unknown as number;
  }

}

export class IoTAnalyticsDescribeDatastoreStatistics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsDescribeDatastoreRequest) {
    super(scope, id);
  }

  public get size(): IoTAnalyticsDescribeDatastoreStatisticsSize {
    return new IoTAnalyticsDescribeDatastoreStatisticsSize(this, 'Size', this.__resources, this.input);
  }

}

export class IoTAnalyticsDescribeDatastoreStatisticsSize extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsDescribeDatastoreRequest) {
    super(scope, id);
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
          datastoreName: this.input.datastoreName,
          includeStatistics: this.input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatastore.statistics.size.estimatedSizeInBytes', props);
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
          datastoreName: this.input.datastoreName,
          includeStatistics: this.input.includeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDatastore.statistics.size.estimatedOn', props);
    return resource.getResponseField('statistics.size.estimatedOn') as unknown as string;
  }

}

export class IoTAnalyticsDescribeLoggingOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public get loggingOptions(): IoTAnalyticsDescribeLoggingOptionsLoggingOptions {
    return new IoTAnalyticsDescribeLoggingOptionsLoggingOptions(this, 'LoggingOptions', this.__resources);
  }

}

export class IoTAnalyticsDescribeLoggingOptionsLoggingOptions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeLoggingOptions.loggingOptions.roleArn', props);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeLoggingOptions.loggingOptions.level', props);
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
    const resource = new cr.AwsCustomResource(this, 'DescribeLoggingOptions.loggingOptions.enabled', props);
    return resource.getResponseField('loggingOptions.enabled') as unknown as boolean;
  }

}

export class IoTAnalyticsDescribePipeline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsDescribePipelineRequest) {
    super(scope, id);
  }

  public get pipeline(): IoTAnalyticsDescribePipelinePipeline {
    return new IoTAnalyticsDescribePipelinePipeline(this, 'Pipeline', this.__resources, this.input);
  }

}

export class IoTAnalyticsDescribePipelinePipeline extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsDescribePipelineRequest) {
    super(scope, id);
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
          pipelineName: this.input.pipelineName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePipeline.pipeline.name', props);
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
          pipelineName: this.input.pipelineName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePipeline.pipeline.arn', props);
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
          pipelineName: this.input.pipelineName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePipeline.pipeline.activities', props);
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
          pipelineName: this.input.pipelineName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePipeline.pipeline.reprocessingSummaries', props);
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
          pipelineName: this.input.pipelineName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePipeline.pipeline.creationTime', props);
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
          pipelineName: this.input.pipelineName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribePipeline.pipeline.lastUpdateTime', props);
    return resource.getResponseField('pipeline.lastUpdateTime') as unknown as string;
  }

}

export class IoTAnalyticsFetchDatasetContent extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsGetDatasetContentRequest) {
    super(scope, id);
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
          datasetName: this.input.datasetName,
          versionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDatasetContent.entries', props);
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
          datasetName: this.input.datasetName,
          versionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDatasetContent.timestamp', props);
    return resource.getResponseField('timestamp') as unknown as string;
  }

  public get status(): IoTAnalyticsFetchDatasetContentStatus {
    return new IoTAnalyticsFetchDatasetContentStatus(this, 'Status', this.__resources, this.input);
  }

}

export class IoTAnalyticsFetchDatasetContentStatus extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsGetDatasetContentRequest) {
    super(scope, id);
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
          datasetName: this.input.datasetName,
          versionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDatasetContent.status.state', props);
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
          datasetName: this.input.datasetName,
          versionId: this.input.versionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDatasetContent.status.reason', props);
    return resource.getResponseField('status.reason') as unknown as string;
  }

}

export class IoTAnalyticsListChannels extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsListChannelsRequest) {
    super(scope, id);
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
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChannels.channelSummaries', props);
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
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListChannels.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTAnalyticsListDatasetContents extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsListDatasetContentsRequest) {
    super(scope, id);
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
          datasetName: this.input.datasetName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          scheduledOnOrAfter: this.input.scheduledOnOrAfter,
          scheduledBefore: this.input.scheduledBefore,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDatasetContents.datasetContentSummaries', props);
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
          datasetName: this.input.datasetName,
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
          scheduledOnOrAfter: this.input.scheduledOnOrAfter,
          scheduledBefore: this.input.scheduledBefore,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDatasetContents.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTAnalyticsListDatasets extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsListDatasetsRequest) {
    super(scope, id);
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
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDatasets.datasetSummaries', props);
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
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDatasets.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTAnalyticsListDatastores extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsListDatastoresRequest) {
    super(scope, id);
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
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDatastores.datastoreSummaries', props);
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
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListDatastores.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTAnalyticsListPipelines extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsListPipelinesRequest) {
    super(scope, id);
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
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPipelines.pipelineSummaries', props);
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
          nextToken: this.input.nextToken,
          maxResults: this.input.maxResults,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListPipelines.nextToken', props);
    return resource.getResponseField('nextToken') as unknown as string;
  }

}

export class IoTAnalyticsListTagsForResource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsListTagsForResourceRequest) {
    super(scope, id);
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
          resourceArn: this.input.resourceArn,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'ListTagsForResource.tags', props);
    return resource.getResponseField('tags') as unknown as shapes.IoTAnalyticsTag[];
  }

}

export class IoTAnalyticsRunPipelineActivity extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsRunPipelineActivityRequest) {
    super(scope, id);
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
              name: this.input.pipelineActivity.channel?.name,
              channelName: this.input.pipelineActivity.channel?.channelName,
              next: this.input.pipelineActivity.channel?.next,
            },
            lambda: {
              name: this.input.pipelineActivity.lambda?.name,
              lambdaName: this.input.pipelineActivity.lambda?.lambdaName,
              batchSize: this.input.pipelineActivity.lambda?.batchSize,
              next: this.input.pipelineActivity.lambda?.next,
            },
            datastore: {
              name: this.input.pipelineActivity.datastore?.name,
              datastoreName: this.input.pipelineActivity.datastore?.datastoreName,
            },
            addAttributes: {
              name: this.input.pipelineActivity.addAttributes?.name,
              attributes: this.input.pipelineActivity.addAttributes?.attributes,
              next: this.input.pipelineActivity.addAttributes?.next,
            },
            removeAttributes: {
              name: this.input.pipelineActivity.removeAttributes?.name,
              attributes: this.input.pipelineActivity.removeAttributes?.attributes,
              next: this.input.pipelineActivity.removeAttributes?.next,
            },
            selectAttributes: {
              name: this.input.pipelineActivity.selectAttributes?.name,
              attributes: this.input.pipelineActivity.selectAttributes?.attributes,
              next: this.input.pipelineActivity.selectAttributes?.next,
            },
            filter: {
              name: this.input.pipelineActivity.filter?.name,
              filter: this.input.pipelineActivity.filter?.filter,
              next: this.input.pipelineActivity.filter?.next,
            },
            math: {
              name: this.input.pipelineActivity.math?.name,
              attribute: this.input.pipelineActivity.math?.attribute,
              math: this.input.pipelineActivity.math?.math,
              next: this.input.pipelineActivity.math?.next,
            },
            deviceRegistryEnrich: {
              name: this.input.pipelineActivity.deviceRegistryEnrich?.name,
              attribute: this.input.pipelineActivity.deviceRegistryEnrich?.attribute,
              thingName: this.input.pipelineActivity.deviceRegistryEnrich?.thingName,
              roleArn: this.input.pipelineActivity.deviceRegistryEnrich?.roleArn,
              next: this.input.pipelineActivity.deviceRegistryEnrich?.next,
            },
            deviceShadowEnrich: {
              name: this.input.pipelineActivity.deviceShadowEnrich?.name,
              attribute: this.input.pipelineActivity.deviceShadowEnrich?.attribute,
              thingName: this.input.pipelineActivity.deviceShadowEnrich?.thingName,
              roleArn: this.input.pipelineActivity.deviceShadowEnrich?.roleArn,
              next: this.input.pipelineActivity.deviceShadowEnrich?.next,
            },
          },
          payloads: this.input.payloads,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RunPipelineActivity.payloads', props);
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
              name: this.input.pipelineActivity.channel?.name,
              channelName: this.input.pipelineActivity.channel?.channelName,
              next: this.input.pipelineActivity.channel?.next,
            },
            lambda: {
              name: this.input.pipelineActivity.lambda?.name,
              lambdaName: this.input.pipelineActivity.lambda?.lambdaName,
              batchSize: this.input.pipelineActivity.lambda?.batchSize,
              next: this.input.pipelineActivity.lambda?.next,
            },
            datastore: {
              name: this.input.pipelineActivity.datastore?.name,
              datastoreName: this.input.pipelineActivity.datastore?.datastoreName,
            },
            addAttributes: {
              name: this.input.pipelineActivity.addAttributes?.name,
              attributes: this.input.pipelineActivity.addAttributes?.attributes,
              next: this.input.pipelineActivity.addAttributes?.next,
            },
            removeAttributes: {
              name: this.input.pipelineActivity.removeAttributes?.name,
              attributes: this.input.pipelineActivity.removeAttributes?.attributes,
              next: this.input.pipelineActivity.removeAttributes?.next,
            },
            selectAttributes: {
              name: this.input.pipelineActivity.selectAttributes?.name,
              attributes: this.input.pipelineActivity.selectAttributes?.attributes,
              next: this.input.pipelineActivity.selectAttributes?.next,
            },
            filter: {
              name: this.input.pipelineActivity.filter?.name,
              filter: this.input.pipelineActivity.filter?.filter,
              next: this.input.pipelineActivity.filter?.next,
            },
            math: {
              name: this.input.pipelineActivity.math?.name,
              attribute: this.input.pipelineActivity.math?.attribute,
              math: this.input.pipelineActivity.math?.math,
              next: this.input.pipelineActivity.math?.next,
            },
            deviceRegistryEnrich: {
              name: this.input.pipelineActivity.deviceRegistryEnrich?.name,
              attribute: this.input.pipelineActivity.deviceRegistryEnrich?.attribute,
              thingName: this.input.pipelineActivity.deviceRegistryEnrich?.thingName,
              roleArn: this.input.pipelineActivity.deviceRegistryEnrich?.roleArn,
              next: this.input.pipelineActivity.deviceRegistryEnrich?.next,
            },
            deviceShadowEnrich: {
              name: this.input.pipelineActivity.deviceShadowEnrich?.name,
              attribute: this.input.pipelineActivity.deviceShadowEnrich?.attribute,
              thingName: this.input.pipelineActivity.deviceShadowEnrich?.thingName,
              roleArn: this.input.pipelineActivity.deviceShadowEnrich?.roleArn,
              next: this.input.pipelineActivity.deviceShadowEnrich?.next,
            },
          },
          payloads: this.input.payloads,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'RunPipelineActivity.logResult', props);
    return resource.getResponseField('logResult') as unknown as string;
  }

}

export class IoTAnalyticsSampleChannelData extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsSampleChannelDataRequest) {
    super(scope, id);
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
          channelName: this.input.channelName,
          maxMessages: this.input.maxMessages,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'SampleChannelData.payloads', props);
    return resource.getResponseField('payloads') as unknown as any[];
  }

}

export class IoTAnalyticsStartPipelineReprocessing extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.IoTAnalyticsStartPipelineReprocessingRequest) {
    super(scope, id);
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
          pipelineName: this.input.pipelineName,
          startTime: this.input.startTime,
          endTime: this.input.endTime,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'StartPipelineReprocessing.reprocessingId', props);
    return resource.getResponseField('reprocessingId') as unknown as string;
  }

}

