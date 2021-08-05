import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class MachineLearningClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addTags(input: shapes.MachineLearningAddTagsInput): MachineLearningResponsesAddTags {
    return new MachineLearningResponsesAddTags(this, this.__resources, input);
  }

  public createBatchPrediction(input: shapes.MachineLearningCreateBatchPredictionInput): MachineLearningResponsesCreateBatchPrediction {
    return new MachineLearningResponsesCreateBatchPrediction(this, this.__resources, input);
  }

  public createDataSourceFromRds(input: shapes.MachineLearningCreateDataSourceFromRdsInput): MachineLearningResponsesCreateDataSourceFromRds {
    return new MachineLearningResponsesCreateDataSourceFromRds(this, this.__resources, input);
  }

  public createDataSourceFromRedshift(input: shapes.MachineLearningCreateDataSourceFromRedshiftInput): MachineLearningResponsesCreateDataSourceFromRedshift {
    return new MachineLearningResponsesCreateDataSourceFromRedshift(this, this.__resources, input);
  }

  public createDataSourceFromS3(input: shapes.MachineLearningCreateDataSourceFromS3Input): MachineLearningResponsesCreateDataSourceFromS3 {
    return new MachineLearningResponsesCreateDataSourceFromS3(this, this.__resources, input);
  }

  public createEvaluation(input: shapes.MachineLearningCreateEvaluationInput): MachineLearningResponsesCreateEvaluation {
    return new MachineLearningResponsesCreateEvaluation(this, this.__resources, input);
  }

  public createMlModel(input: shapes.MachineLearningCreateMlModelInput): MachineLearningResponsesCreateMlModel {
    return new MachineLearningResponsesCreateMlModel(this, this.__resources, input);
  }

  public createRealtimeEndpoint(input: shapes.MachineLearningCreateRealtimeEndpointInput): MachineLearningResponsesCreateRealtimeEndpoint {
    return new MachineLearningResponsesCreateRealtimeEndpoint(this, this.__resources, input);
  }

  public deleteBatchPrediction(input: shapes.MachineLearningDeleteBatchPredictionInput): MachineLearningResponsesDeleteBatchPrediction {
    return new MachineLearningResponsesDeleteBatchPrediction(this, this.__resources, input);
  }

  public deleteDataSource(input: shapes.MachineLearningDeleteDataSourceInput): MachineLearningResponsesDeleteDataSource {
    return new MachineLearningResponsesDeleteDataSource(this, this.__resources, input);
  }

  public deleteEvaluation(input: shapes.MachineLearningDeleteEvaluationInput): MachineLearningResponsesDeleteEvaluation {
    return new MachineLearningResponsesDeleteEvaluation(this, this.__resources, input);
  }

  public deleteMlModel(input: shapes.MachineLearningDeleteMlModelInput): MachineLearningResponsesDeleteMlModel {
    return new MachineLearningResponsesDeleteMlModel(this, this.__resources, input);
  }

  public deleteRealtimeEndpoint(input: shapes.MachineLearningDeleteRealtimeEndpointInput): MachineLearningResponsesDeleteRealtimeEndpoint {
    return new MachineLearningResponsesDeleteRealtimeEndpoint(this, this.__resources, input);
  }

  public deleteTags(input: shapes.MachineLearningDeleteTagsInput): MachineLearningResponsesDeleteTags {
    return new MachineLearningResponsesDeleteTags(this, this.__resources, input);
  }

  public describeBatchPredictions(input: shapes.MachineLearningDescribeBatchPredictionsInput): MachineLearningResponsesDescribeBatchPredictions {
    return new MachineLearningResponsesDescribeBatchPredictions(this, this.__resources, input);
  }

  public describeDataSources(input: shapes.MachineLearningDescribeDataSourcesInput): MachineLearningResponsesDescribeDataSources {
    return new MachineLearningResponsesDescribeDataSources(this, this.__resources, input);
  }

  public describeEvaluations(input: shapes.MachineLearningDescribeEvaluationsInput): MachineLearningResponsesDescribeEvaluations {
    return new MachineLearningResponsesDescribeEvaluations(this, this.__resources, input);
  }

  public describeMlModels(input: shapes.MachineLearningDescribeMlModelsInput): MachineLearningResponsesDescribeMlModels {
    return new MachineLearningResponsesDescribeMlModels(this, this.__resources, input);
  }

  public describeTags(input: shapes.MachineLearningDescribeTagsInput): MachineLearningResponsesDescribeTags {
    return new MachineLearningResponsesDescribeTags(this, this.__resources, input);
  }

  public fetchBatchPrediction(input: shapes.MachineLearningGetBatchPredictionInput): MachineLearningResponsesFetchBatchPrediction {
    return new MachineLearningResponsesFetchBatchPrediction(this, this.__resources, input);
  }

  public fetchDataSource(input: shapes.MachineLearningGetDataSourceInput): MachineLearningResponsesFetchDataSource {
    return new MachineLearningResponsesFetchDataSource(this, this.__resources, input);
  }

  public fetchEvaluation(input: shapes.MachineLearningGetEvaluationInput): MachineLearningResponsesFetchEvaluation {
    return new MachineLearningResponsesFetchEvaluation(this, this.__resources, input);
  }

  public fetchMlModel(input: shapes.MachineLearningGetMlModelInput): MachineLearningResponsesFetchMlModel {
    return new MachineLearningResponsesFetchMlModel(this, this.__resources, input);
  }

  public predict(input: shapes.MachineLearningPredictInput): MachineLearningResponsesPredict {
    return new MachineLearningResponsesPredict(this, this.__resources, input);
  }

  public updateBatchPrediction(input: shapes.MachineLearningUpdateBatchPredictionInput): MachineLearningResponsesUpdateBatchPrediction {
    return new MachineLearningResponsesUpdateBatchPrediction(this, this.__resources, input);
  }

  public updateDataSource(input: shapes.MachineLearningUpdateDataSourceInput): MachineLearningResponsesUpdateDataSource {
    return new MachineLearningResponsesUpdateDataSource(this, this.__resources, input);
  }

  public updateEvaluation(input: shapes.MachineLearningUpdateEvaluationInput): MachineLearningResponsesUpdateEvaluation {
    return new MachineLearningResponsesUpdateEvaluation(this, this.__resources, input);
  }

  public updateMlModel(input: shapes.MachineLearningUpdateMlModelInput): MachineLearningResponsesUpdateMlModel {
    return new MachineLearningResponsesUpdateMlModel(this, this.__resources, input);
  }

}

export class MachineLearningResponsesAddTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningAddTagsInput) {
  }

  public get resourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addTags',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.AddTags.ResourceId'),
        outputPath: 'ResourceId',
        parameters: {
          Tags: this.__input.tags,
          ResourceId: this.__input.resourceId,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddTags.ResourceId', props);
    return resource.getResponseField('ResourceId') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'addTags',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.AddTags.ResourceType'),
        outputPath: 'ResourceType',
        parameters: {
          Tags: this.__input.tags,
          ResourceId: this.__input.resourceId,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'AddTags.ResourceType', props);
    return resource.getResponseField('ResourceType') as unknown as string;
  }

}

export class MachineLearningResponsesCreateBatchPrediction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningCreateBatchPredictionInput) {
  }

  public get batchPredictionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createBatchPrediction',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.CreateBatchPrediction.BatchPredictionId'),
        outputPath: 'BatchPredictionId',
        parameters: {
          BatchPredictionId: this.__input.batchPredictionId,
          BatchPredictionName: this.__input.batchPredictionName,
          MLModelId: this.__input.mlModelId,
          BatchPredictionDataSourceId: this.__input.batchPredictionDataSourceId,
          OutputUri: this.__input.outputUri,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateBatchPrediction.BatchPredictionId', props);
    return resource.getResponseField('BatchPredictionId') as unknown as string;
  }

}

export class MachineLearningResponsesCreateDataSourceFromRds {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningCreateDataSourceFromRdsInput) {
  }

  public get dataSourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSourceFromRds',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.CreateDataSourceFromRDS.DataSourceId'),
        outputPath: 'DataSourceId',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          DataSourceName: this.__input.dataSourceName,
          RDSData: {
            DatabaseInformation: {
              InstanceIdentifier: this.__input.rdsData.databaseInformation.instanceIdentifier,
              DatabaseName: this.__input.rdsData.databaseInformation.databaseName,
            },
            SelectSqlQuery: this.__input.rdsData.selectSqlQuery,
            DatabaseCredentials: {
              Username: this.__input.rdsData.databaseCredentials.username,
              Password: this.__input.rdsData.databaseCredentials.password,
            },
            S3StagingLocation: this.__input.rdsData.s3StagingLocation,
            DataRearrangement: this.__input.rdsData.dataRearrangement,
            DataSchema: this.__input.rdsData.dataSchema,
            DataSchemaUri: this.__input.rdsData.dataSchemaUri,
            ResourceRole: this.__input.rdsData.resourceRole,
            ServiceRole: this.__input.rdsData.serviceRole,
            SubnetId: this.__input.rdsData.subnetId,
            SecurityGroupIds: this.__input.rdsData.securityGroupIds,
          },
          RoleARN: this.__input.roleArn,
          ComputeStatistics: this.__input.computeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSourceFromRDS.DataSourceId', props);
    return resource.getResponseField('DataSourceId') as unknown as string;
  }

}

export class MachineLearningResponsesCreateDataSourceFromRedshift {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningCreateDataSourceFromRedshiftInput) {
  }

  public get dataSourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSourceFromRedshift',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.CreateDataSourceFromRedshift.DataSourceId'),
        outputPath: 'DataSourceId',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          DataSourceName: this.__input.dataSourceName,
          DataSpec: {
            DatabaseInformation: {
              DatabaseName: this.__input.dataSpec.databaseInformation.databaseName,
              ClusterIdentifier: this.__input.dataSpec.databaseInformation.clusterIdentifier,
            },
            SelectSqlQuery: this.__input.dataSpec.selectSqlQuery,
            DatabaseCredentials: {
              Username: this.__input.dataSpec.databaseCredentials.username,
              Password: this.__input.dataSpec.databaseCredentials.password,
            },
            S3StagingLocation: this.__input.dataSpec.s3StagingLocation,
            DataRearrangement: this.__input.dataSpec.dataRearrangement,
            DataSchema: this.__input.dataSpec.dataSchema,
            DataSchemaUri: this.__input.dataSpec.dataSchemaUri,
          },
          RoleARN: this.__input.roleArn,
          ComputeStatistics: this.__input.computeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSourceFromRedshift.DataSourceId', props);
    return resource.getResponseField('DataSourceId') as unknown as string;
  }

}

export class MachineLearningResponsesCreateDataSourceFromS3 {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningCreateDataSourceFromS3Input) {
  }

  public get dataSourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createDataSourceFromS3',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.CreateDataSourceFromS3.DataSourceId'),
        outputPath: 'DataSourceId',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          DataSourceName: this.__input.dataSourceName,
          DataSpec: {
            DataLocationS3: this.__input.dataSpec.dataLocationS3,
            DataRearrangement: this.__input.dataSpec.dataRearrangement,
            DataSchema: this.__input.dataSpec.dataSchema,
            DataSchemaLocationS3: this.__input.dataSpec.dataSchemaLocationS3,
          },
          ComputeStatistics: this.__input.computeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateDataSourceFromS3.DataSourceId', props);
    return resource.getResponseField('DataSourceId') as unknown as string;
  }

}

export class MachineLearningResponsesCreateEvaluation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningCreateEvaluationInput) {
  }

  public get evaluationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createEvaluation',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.CreateEvaluation.EvaluationId'),
        outputPath: 'EvaluationId',
        parameters: {
          EvaluationId: this.__input.evaluationId,
          EvaluationName: this.__input.evaluationName,
          MLModelId: this.__input.mlModelId,
          EvaluationDataSourceId: this.__input.evaluationDataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateEvaluation.EvaluationId', props);
    return resource.getResponseField('EvaluationId') as unknown as string;
  }

}

export class MachineLearningResponsesCreateMlModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningCreateMlModelInput) {
  }

  public get mlModelId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createMlModel',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.CreateMLModel.MLModelId'),
        outputPath: 'MLModelId',
        parameters: {
          MLModelId: this.__input.mlModelId,
          MLModelName: this.__input.mlModelName,
          MLModelType: this.__input.mlModelType,
          Parameters: this.__input.parameters,
          TrainingDataSourceId: this.__input.trainingDataSourceId,
          Recipe: this.__input.recipe,
          RecipeUri: this.__input.recipeUri,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateMLModel.MLModelId', props);
    return resource.getResponseField('MLModelId') as unknown as string;
  }

}

export class MachineLearningResponsesCreateRealtimeEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningCreateRealtimeEndpointInput) {
  }

  public get mlModelId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRealtimeEndpoint',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.CreateRealtimeEndpoint.MLModelId'),
        outputPath: 'MLModelId',
        parameters: {
          MLModelId: this.__input.mlModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRealtimeEndpoint.MLModelId', props);
    return resource.getResponseField('MLModelId') as unknown as string;
  }

  public get realtimeEndpointInfo(): MachineLearningResponsesCreateRealtimeEndpointRealtimeEndpointInfo {
    return new MachineLearningResponsesCreateRealtimeEndpointRealtimeEndpointInfo(this.__scope, this.__resources, this.__input);
  }

}

export class MachineLearningResponsesCreateRealtimeEndpointRealtimeEndpointInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningCreateRealtimeEndpointInput) {
  }

  public get peakRequestsPerSecond(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRealtimeEndpoint',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.CreateRealtimeEndpoint.RealtimeEndpointInfo.PeakRequestsPerSecond'),
        outputPath: 'RealtimeEndpointInfo.PeakRequestsPerSecond',
        parameters: {
          MLModelId: this.__input.mlModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRealtimeEndpoint.RealtimeEndpointInfo.PeakRequestsPerSecond', props);
    return resource.getResponseField('RealtimeEndpointInfo.PeakRequestsPerSecond') as unknown as number;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRealtimeEndpoint',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.CreateRealtimeEndpoint.RealtimeEndpointInfo.CreatedAt'),
        outputPath: 'RealtimeEndpointInfo.CreatedAt',
        parameters: {
          MLModelId: this.__input.mlModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRealtimeEndpoint.RealtimeEndpointInfo.CreatedAt', props);
    return resource.getResponseField('RealtimeEndpointInfo.CreatedAt') as unknown as string;
  }

  public get endpointUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRealtimeEndpoint',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.CreateRealtimeEndpoint.RealtimeEndpointInfo.EndpointUrl'),
        outputPath: 'RealtimeEndpointInfo.EndpointUrl',
        parameters: {
          MLModelId: this.__input.mlModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRealtimeEndpoint.RealtimeEndpointInfo.EndpointUrl', props);
    return resource.getResponseField('RealtimeEndpointInfo.EndpointUrl') as unknown as string;
  }

  public get endpointStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'createRealtimeEndpoint',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.CreateRealtimeEndpoint.RealtimeEndpointInfo.EndpointStatus'),
        outputPath: 'RealtimeEndpointInfo.EndpointStatus',
        parameters: {
          MLModelId: this.__input.mlModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'CreateRealtimeEndpoint.RealtimeEndpointInfo.EndpointStatus', props);
    return resource.getResponseField('RealtimeEndpointInfo.EndpointStatus') as unknown as string;
  }

}

export class MachineLearningResponsesDeleteBatchPrediction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningDeleteBatchPredictionInput) {
  }

  public get batchPredictionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteBatchPrediction',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.DeleteBatchPrediction.BatchPredictionId'),
        outputPath: 'BatchPredictionId',
        parameters: {
          BatchPredictionId: this.__input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteBatchPrediction.BatchPredictionId', props);
    return resource.getResponseField('BatchPredictionId') as unknown as string;
  }

}

export class MachineLearningResponsesDeleteDataSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningDeleteDataSourceInput) {
  }

  public get dataSourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.DeleteDataSource.DataSourceId'),
        outputPath: 'DataSourceId',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteDataSource.DataSourceId', props);
    return resource.getResponseField('DataSourceId') as unknown as string;
  }

}

export class MachineLearningResponsesDeleteEvaluation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningDeleteEvaluationInput) {
  }

  public get evaluationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteEvaluation',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.DeleteEvaluation.EvaluationId'),
        outputPath: 'EvaluationId',
        parameters: {
          EvaluationId: this.__input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteEvaluation.EvaluationId', props);
    return resource.getResponseField('EvaluationId') as unknown as string;
  }

}

export class MachineLearningResponsesDeleteMlModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningDeleteMlModelInput) {
  }

  public get mlModelId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteMlModel',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.DeleteMLModel.MLModelId'),
        outputPath: 'MLModelId',
        parameters: {
          MLModelId: this.__input.mlModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteMLModel.MLModelId', props);
    return resource.getResponseField('MLModelId') as unknown as string;
  }

}

export class MachineLearningResponsesDeleteRealtimeEndpoint {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningDeleteRealtimeEndpointInput) {
  }

  public get mlModelId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRealtimeEndpoint',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.DeleteRealtimeEndpoint.MLModelId'),
        outputPath: 'MLModelId',
        parameters: {
          MLModelId: this.__input.mlModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRealtimeEndpoint.MLModelId', props);
    return resource.getResponseField('MLModelId') as unknown as string;
  }

  public get realtimeEndpointInfo(): MachineLearningResponsesDeleteRealtimeEndpointRealtimeEndpointInfo {
    return new MachineLearningResponsesDeleteRealtimeEndpointRealtimeEndpointInfo(this.__scope, this.__resources, this.__input);
  }

}

export class MachineLearningResponsesDeleteRealtimeEndpointRealtimeEndpointInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningDeleteRealtimeEndpointInput) {
  }

  public get peakRequestsPerSecond(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRealtimeEndpoint',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.DeleteRealtimeEndpoint.RealtimeEndpointInfo.PeakRequestsPerSecond'),
        outputPath: 'RealtimeEndpointInfo.PeakRequestsPerSecond',
        parameters: {
          MLModelId: this.__input.mlModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRealtimeEndpoint.RealtimeEndpointInfo.PeakRequestsPerSecond', props);
    return resource.getResponseField('RealtimeEndpointInfo.PeakRequestsPerSecond') as unknown as number;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRealtimeEndpoint',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.DeleteRealtimeEndpoint.RealtimeEndpointInfo.CreatedAt'),
        outputPath: 'RealtimeEndpointInfo.CreatedAt',
        parameters: {
          MLModelId: this.__input.mlModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRealtimeEndpoint.RealtimeEndpointInfo.CreatedAt', props);
    return resource.getResponseField('RealtimeEndpointInfo.CreatedAt') as unknown as string;
  }

  public get endpointUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRealtimeEndpoint',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.DeleteRealtimeEndpoint.RealtimeEndpointInfo.EndpointUrl'),
        outputPath: 'RealtimeEndpointInfo.EndpointUrl',
        parameters: {
          MLModelId: this.__input.mlModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRealtimeEndpoint.RealtimeEndpointInfo.EndpointUrl', props);
    return resource.getResponseField('RealtimeEndpointInfo.EndpointUrl') as unknown as string;
  }

  public get endpointStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteRealtimeEndpoint',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.DeleteRealtimeEndpoint.RealtimeEndpointInfo.EndpointStatus'),
        outputPath: 'RealtimeEndpointInfo.EndpointStatus',
        parameters: {
          MLModelId: this.__input.mlModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteRealtimeEndpoint.RealtimeEndpointInfo.EndpointStatus', props);
    return resource.getResponseField('RealtimeEndpointInfo.EndpointStatus') as unknown as string;
  }

}

export class MachineLearningResponsesDeleteTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningDeleteTagsInput) {
  }

  public get resourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTags',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.DeleteTags.ResourceId'),
        outputPath: 'ResourceId',
        parameters: {
          TagKeys: this.__input.tagKeys,
          ResourceId: this.__input.resourceId,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTags.ResourceId', props);
    return resource.getResponseField('ResourceId') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'deleteTags',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.DeleteTags.ResourceType'),
        outputPath: 'ResourceType',
        parameters: {
          TagKeys: this.__input.tagKeys,
          ResourceId: this.__input.resourceId,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DeleteTags.ResourceType', props);
    return resource.getResponseField('ResourceType') as unknown as string;
  }

}

export class MachineLearningResponsesDescribeBatchPredictions {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningDescribeBatchPredictionsInput) {
  }

  public get results(): shapes.MachineLearningBatchPrediction[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBatchPredictions',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.DescribeBatchPredictions.Results'),
        outputPath: 'Results',
        parameters: {
          FilterVariable: this.__input.filterVariable,
          EQ: this.__input.eq,
          GT: this.__input.gt,
          LT: this.__input.lt,
          GE: this.__input.ge,
          LE: this.__input.le,
          NE: this.__input.ne,
          Prefix: this.__input.prefix,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBatchPredictions.Results', props);
    return resource.getResponseField('Results') as unknown as shapes.MachineLearningBatchPrediction[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeBatchPredictions',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.DescribeBatchPredictions.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          FilterVariable: this.__input.filterVariable,
          EQ: this.__input.eq,
          GT: this.__input.gt,
          LT: this.__input.lt,
          GE: this.__input.ge,
          LE: this.__input.le,
          NE: this.__input.ne,
          Prefix: this.__input.prefix,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeBatchPredictions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MachineLearningResponsesDescribeDataSources {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningDescribeDataSourcesInput) {
  }

  public get results(): shapes.MachineLearningDataSource[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSources',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.DescribeDataSources.Results'),
        outputPath: 'Results',
        parameters: {
          FilterVariable: this.__input.filterVariable,
          EQ: this.__input.eq,
          GT: this.__input.gt,
          LT: this.__input.lt,
          GE: this.__input.ge,
          LE: this.__input.le,
          NE: this.__input.ne,
          Prefix: this.__input.prefix,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSources.Results', props);
    return resource.getResponseField('Results') as unknown as shapes.MachineLearningDataSource[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeDataSources',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.DescribeDataSources.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          FilterVariable: this.__input.filterVariable,
          EQ: this.__input.eq,
          GT: this.__input.gt,
          LT: this.__input.lt,
          GE: this.__input.ge,
          LE: this.__input.le,
          NE: this.__input.ne,
          Prefix: this.__input.prefix,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeDataSources.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MachineLearningResponsesDescribeEvaluations {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningDescribeEvaluationsInput) {
  }

  public get results(): shapes.MachineLearningEvaluation[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEvaluations',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.DescribeEvaluations.Results'),
        outputPath: 'Results',
        parameters: {
          FilterVariable: this.__input.filterVariable,
          EQ: this.__input.eq,
          GT: this.__input.gt,
          LT: this.__input.lt,
          GE: this.__input.ge,
          LE: this.__input.le,
          NE: this.__input.ne,
          Prefix: this.__input.prefix,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEvaluations.Results', props);
    return resource.getResponseField('Results') as unknown as shapes.MachineLearningEvaluation[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeEvaluations',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.DescribeEvaluations.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          FilterVariable: this.__input.filterVariable,
          EQ: this.__input.eq,
          GT: this.__input.gt,
          LT: this.__input.lt,
          GE: this.__input.ge,
          LE: this.__input.le,
          NE: this.__input.ne,
          Prefix: this.__input.prefix,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeEvaluations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MachineLearningResponsesDescribeMlModels {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningDescribeMlModelsInput) {
  }

  public get results(): shapes.MachineLearningMlModel[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMlModels',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.DescribeMLModels.Results'),
        outputPath: 'Results',
        parameters: {
          FilterVariable: this.__input.filterVariable,
          EQ: this.__input.eq,
          GT: this.__input.gt,
          LT: this.__input.lt,
          GE: this.__input.ge,
          LE: this.__input.le,
          NE: this.__input.ne,
          Prefix: this.__input.prefix,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMLModels.Results', props);
    return resource.getResponseField('Results') as unknown as shapes.MachineLearningMlModel[];
  }

  public get nextToken(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeMlModels',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.DescribeMLModels.NextToken'),
        outputPath: 'NextToken',
        parameters: {
          FilterVariable: this.__input.filterVariable,
          EQ: this.__input.eq,
          GT: this.__input.gt,
          LT: this.__input.lt,
          GE: this.__input.ge,
          LE: this.__input.le,
          NE: this.__input.ne,
          Prefix: this.__input.prefix,
          SortOrder: this.__input.sortOrder,
          NextToken: this.__input.nextToken,
          Limit: this.__input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeMLModels.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MachineLearningResponsesDescribeTags {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningDescribeTagsInput) {
  }

  public get resourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTags',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.DescribeTags.ResourceId'),
        outputPath: 'ResourceId',
        parameters: {
          ResourceId: this.__input.resourceId,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTags.ResourceId', props);
    return resource.getResponseField('ResourceId') as unknown as string;
  }

  public get resourceType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTags',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.DescribeTags.ResourceType'),
        outputPath: 'ResourceType',
        parameters: {
          ResourceId: this.__input.resourceId,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTags.ResourceType', props);
    return resource.getResponseField('ResourceType') as unknown as string;
  }

  public get tags(): shapes.MachineLearningTag[] {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'describeTags',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.DescribeTags.Tags'),
        outputPath: 'Tags',
        parameters: {
          ResourceId: this.__input.resourceId,
          ResourceType: this.__input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'DescribeTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.MachineLearningTag[];
  }

}

export class MachineLearningResponsesFetchBatchPrediction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningGetBatchPredictionInput) {
  }

  public get batchPredictionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBatchPrediction',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetBatchPrediction.BatchPredictionId'),
        outputPath: 'BatchPredictionId',
        parameters: {
          BatchPredictionId: this.__input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBatchPrediction.BatchPredictionId', props);
    return resource.getResponseField('BatchPredictionId') as unknown as string;
  }

  public get mlModelId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBatchPrediction',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetBatchPrediction.MLModelId'),
        outputPath: 'MLModelId',
        parameters: {
          BatchPredictionId: this.__input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBatchPrediction.MLModelId', props);
    return resource.getResponseField('MLModelId') as unknown as string;
  }

  public get batchPredictionDataSourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBatchPrediction',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetBatchPrediction.BatchPredictionDataSourceId'),
        outputPath: 'BatchPredictionDataSourceId',
        parameters: {
          BatchPredictionId: this.__input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBatchPrediction.BatchPredictionDataSourceId', props);
    return resource.getResponseField('BatchPredictionDataSourceId') as unknown as string;
  }

  public get inputDataLocationS3(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBatchPrediction',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetBatchPrediction.InputDataLocationS3'),
        outputPath: 'InputDataLocationS3',
        parameters: {
          BatchPredictionId: this.__input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBatchPrediction.InputDataLocationS3', props);
    return resource.getResponseField('InputDataLocationS3') as unknown as string;
  }

  public get createdByIamUser(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBatchPrediction',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetBatchPrediction.CreatedByIamUser'),
        outputPath: 'CreatedByIamUser',
        parameters: {
          BatchPredictionId: this.__input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBatchPrediction.CreatedByIamUser', props);
    return resource.getResponseField('CreatedByIamUser') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBatchPrediction',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetBatchPrediction.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          BatchPredictionId: this.__input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBatchPrediction.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBatchPrediction',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetBatchPrediction.LastUpdatedAt'),
        outputPath: 'LastUpdatedAt',
        parameters: {
          BatchPredictionId: this.__input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBatchPrediction.LastUpdatedAt', props);
    return resource.getResponseField('LastUpdatedAt') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBatchPrediction',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetBatchPrediction.Name'),
        outputPath: 'Name',
        parameters: {
          BatchPredictionId: this.__input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBatchPrediction.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBatchPrediction',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetBatchPrediction.Status'),
        outputPath: 'Status',
        parameters: {
          BatchPredictionId: this.__input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBatchPrediction.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get outputUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBatchPrediction',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetBatchPrediction.OutputUri'),
        outputPath: 'OutputUri',
        parameters: {
          BatchPredictionId: this.__input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBatchPrediction.OutputUri', props);
    return resource.getResponseField('OutputUri') as unknown as string;
  }

  public get logUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBatchPrediction',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetBatchPrediction.LogUri'),
        outputPath: 'LogUri',
        parameters: {
          BatchPredictionId: this.__input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBatchPrediction.LogUri', props);
    return resource.getResponseField('LogUri') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBatchPrediction',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetBatchPrediction.Message'),
        outputPath: 'Message',
        parameters: {
          BatchPredictionId: this.__input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBatchPrediction.Message', props);
    return resource.getResponseField('Message') as unknown as string;
  }

  public get computeTime(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBatchPrediction',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetBatchPrediction.ComputeTime'),
        outputPath: 'ComputeTime',
        parameters: {
          BatchPredictionId: this.__input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBatchPrediction.ComputeTime', props);
    return resource.getResponseField('ComputeTime') as unknown as number;
  }

  public get finishedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBatchPrediction',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetBatchPrediction.FinishedAt'),
        outputPath: 'FinishedAt',
        parameters: {
          BatchPredictionId: this.__input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBatchPrediction.FinishedAt', props);
    return resource.getResponseField('FinishedAt') as unknown as string;
  }

  public get startedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBatchPrediction',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetBatchPrediction.StartedAt'),
        outputPath: 'StartedAt',
        parameters: {
          BatchPredictionId: this.__input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBatchPrediction.StartedAt', props);
    return resource.getResponseField('StartedAt') as unknown as string;
  }

  public get totalRecordCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBatchPrediction',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetBatchPrediction.TotalRecordCount'),
        outputPath: 'TotalRecordCount',
        parameters: {
          BatchPredictionId: this.__input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBatchPrediction.TotalRecordCount', props);
    return resource.getResponseField('TotalRecordCount') as unknown as number;
  }

  public get invalidRecordCount(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getBatchPrediction',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetBatchPrediction.InvalidRecordCount'),
        outputPath: 'InvalidRecordCount',
        parameters: {
          BatchPredictionId: this.__input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetBatchPrediction.InvalidRecordCount', props);
    return resource.getResponseField('InvalidRecordCount') as unknown as number;
  }

}

export class MachineLearningResponsesFetchDataSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningGetDataSourceInput) {
  }

  public get dataSourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetDataSource.DataSourceId'),
        outputPath: 'DataSourceId',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.DataSourceId', props);
    return resource.getResponseField('DataSourceId') as unknown as string;
  }

  public get dataLocationS3(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetDataSource.DataLocationS3'),
        outputPath: 'DataLocationS3',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.DataLocationS3', props);
    return resource.getResponseField('DataLocationS3') as unknown as string;
  }

  public get dataRearrangement(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetDataSource.DataRearrangement'),
        outputPath: 'DataRearrangement',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.DataRearrangement', props);
    return resource.getResponseField('DataRearrangement') as unknown as string;
  }

  public get createdByIamUser(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetDataSource.CreatedByIamUser'),
        outputPath: 'CreatedByIamUser',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.CreatedByIamUser', props);
    return resource.getResponseField('CreatedByIamUser') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetDataSource.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetDataSource.LastUpdatedAt'),
        outputPath: 'LastUpdatedAt',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.LastUpdatedAt', props);
    return resource.getResponseField('LastUpdatedAt') as unknown as string;
  }

  public get dataSizeInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetDataSource.DataSizeInBytes'),
        outputPath: 'DataSizeInBytes',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.DataSizeInBytes', props);
    return resource.getResponseField('DataSizeInBytes') as unknown as number;
  }

  public get numberOfFiles(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetDataSource.NumberOfFiles'),
        outputPath: 'NumberOfFiles',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.NumberOfFiles', props);
    return resource.getResponseField('NumberOfFiles') as unknown as number;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetDataSource.Name'),
        outputPath: 'Name',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetDataSource.Status'),
        outputPath: 'Status',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get logUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetDataSource.LogUri'),
        outputPath: 'LogUri',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.LogUri', props);
    return resource.getResponseField('LogUri') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetDataSource.Message'),
        outputPath: 'Message',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.Message', props);
    return resource.getResponseField('Message') as unknown as string;
  }

  public get redshiftMetadata(): MachineLearningResponsesFetchDataSourceRedshiftMetadata {
    return new MachineLearningResponsesFetchDataSourceRedshiftMetadata(this.__scope, this.__resources, this.__input);
  }

  public get rdsMetadata(): MachineLearningResponsesFetchDataSourceRdsMetadata {
    return new MachineLearningResponsesFetchDataSourceRdsMetadata(this.__scope, this.__resources, this.__input);
  }

  public get roleArn(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetDataSource.RoleARN'),
        outputPath: 'RoleARN',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.RoleARN', props);
    return resource.getResponseField('RoleARN') as unknown as string;
  }

  public get computeStatistics(): boolean {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetDataSource.ComputeStatistics'),
        outputPath: 'ComputeStatistics',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.ComputeStatistics', props);
    return resource.getResponseField('ComputeStatistics') as unknown as boolean;
  }

  public get computeTime(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetDataSource.ComputeTime'),
        outputPath: 'ComputeTime',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.ComputeTime', props);
    return resource.getResponseField('ComputeTime') as unknown as number;
  }

  public get finishedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetDataSource.FinishedAt'),
        outputPath: 'FinishedAt',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.FinishedAt', props);
    return resource.getResponseField('FinishedAt') as unknown as string;
  }

  public get startedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetDataSource.StartedAt'),
        outputPath: 'StartedAt',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.StartedAt', props);
    return resource.getResponseField('StartedAt') as unknown as string;
  }

  public get dataSourceSchema(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetDataSource.DataSourceSchema'),
        outputPath: 'DataSourceSchema',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.DataSourceSchema', props);
    return resource.getResponseField('DataSourceSchema') as unknown as string;
  }

}

export class MachineLearningResponsesFetchDataSourceRedshiftMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningGetDataSourceInput) {
  }

  public get redshiftDatabase(): MachineLearningResponsesFetchDataSourceRedshiftMetadataRedshiftDatabase {
    return new MachineLearningResponsesFetchDataSourceRedshiftMetadataRedshiftDatabase(this.__scope, this.__resources, this.__input);
  }

  public get databaseUserName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetDataSource.RedshiftMetadata.DatabaseUserName'),
        outputPath: 'RedshiftMetadata.DatabaseUserName',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.RedshiftMetadata.DatabaseUserName', props);
    return resource.getResponseField('RedshiftMetadata.DatabaseUserName') as unknown as string;
  }

  public get selectSqlQuery(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetDataSource.RedshiftMetadata.SelectSqlQuery'),
        outputPath: 'RedshiftMetadata.SelectSqlQuery',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.RedshiftMetadata.SelectSqlQuery', props);
    return resource.getResponseField('RedshiftMetadata.SelectSqlQuery') as unknown as string;
  }

}

export class MachineLearningResponsesFetchDataSourceRedshiftMetadataRedshiftDatabase {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningGetDataSourceInput) {
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetDataSource.RedshiftMetadata.RedshiftDatabase.DatabaseName'),
        outputPath: 'RedshiftMetadata.RedshiftDatabase.DatabaseName',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.RedshiftMetadata.RedshiftDatabase.DatabaseName', props);
    return resource.getResponseField('RedshiftMetadata.RedshiftDatabase.DatabaseName') as unknown as string;
  }

  public get clusterIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetDataSource.RedshiftMetadata.RedshiftDatabase.ClusterIdentifier'),
        outputPath: 'RedshiftMetadata.RedshiftDatabase.ClusterIdentifier',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.RedshiftMetadata.RedshiftDatabase.ClusterIdentifier', props);
    return resource.getResponseField('RedshiftMetadata.RedshiftDatabase.ClusterIdentifier') as unknown as string;
  }

}

export class MachineLearningResponsesFetchDataSourceRdsMetadata {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningGetDataSourceInput) {
  }

  public get database(): MachineLearningResponsesFetchDataSourceRdsMetadataDatabase {
    return new MachineLearningResponsesFetchDataSourceRdsMetadataDatabase(this.__scope, this.__resources, this.__input);
  }

  public get databaseUserName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetDataSource.RDSMetadata.DatabaseUserName'),
        outputPath: 'RDSMetadata.DatabaseUserName',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.RDSMetadata.DatabaseUserName', props);
    return resource.getResponseField('RDSMetadata.DatabaseUserName') as unknown as string;
  }

  public get selectSqlQuery(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetDataSource.RDSMetadata.SelectSqlQuery'),
        outputPath: 'RDSMetadata.SelectSqlQuery',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.RDSMetadata.SelectSqlQuery', props);
    return resource.getResponseField('RDSMetadata.SelectSqlQuery') as unknown as string;
  }

  public get resourceRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetDataSource.RDSMetadata.ResourceRole'),
        outputPath: 'RDSMetadata.ResourceRole',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.RDSMetadata.ResourceRole', props);
    return resource.getResponseField('RDSMetadata.ResourceRole') as unknown as string;
  }

  public get serviceRole(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetDataSource.RDSMetadata.ServiceRole'),
        outputPath: 'RDSMetadata.ServiceRole',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.RDSMetadata.ServiceRole', props);
    return resource.getResponseField('RDSMetadata.ServiceRole') as unknown as string;
  }

  public get dataPipelineId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetDataSource.RDSMetadata.DataPipelineId'),
        outputPath: 'RDSMetadata.DataPipelineId',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.RDSMetadata.DataPipelineId', props);
    return resource.getResponseField('RDSMetadata.DataPipelineId') as unknown as string;
  }

}

export class MachineLearningResponsesFetchDataSourceRdsMetadataDatabase {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningGetDataSourceInput) {
  }

  public get instanceIdentifier(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetDataSource.RDSMetadata.Database.InstanceIdentifier'),
        outputPath: 'RDSMetadata.Database.InstanceIdentifier',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.RDSMetadata.Database.InstanceIdentifier', props);
    return resource.getResponseField('RDSMetadata.Database.InstanceIdentifier') as unknown as string;
  }

  public get databaseName(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetDataSource.RDSMetadata.Database.DatabaseName'),
        outputPath: 'RDSMetadata.Database.DatabaseName',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetDataSource.RDSMetadata.Database.DatabaseName', props);
    return resource.getResponseField('RDSMetadata.Database.DatabaseName') as unknown as string;
  }

}

export class MachineLearningResponsesFetchEvaluation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningGetEvaluationInput) {
  }

  public get evaluationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvaluation',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetEvaluation.EvaluationId'),
        outputPath: 'EvaluationId',
        parameters: {
          EvaluationId: this.__input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvaluation.EvaluationId', props);
    return resource.getResponseField('EvaluationId') as unknown as string;
  }

  public get mlModelId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvaluation',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetEvaluation.MLModelId'),
        outputPath: 'MLModelId',
        parameters: {
          EvaluationId: this.__input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvaluation.MLModelId', props);
    return resource.getResponseField('MLModelId') as unknown as string;
  }

  public get evaluationDataSourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvaluation',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetEvaluation.EvaluationDataSourceId'),
        outputPath: 'EvaluationDataSourceId',
        parameters: {
          EvaluationId: this.__input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvaluation.EvaluationDataSourceId', props);
    return resource.getResponseField('EvaluationDataSourceId') as unknown as string;
  }

  public get inputDataLocationS3(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvaluation',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetEvaluation.InputDataLocationS3'),
        outputPath: 'InputDataLocationS3',
        parameters: {
          EvaluationId: this.__input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvaluation.InputDataLocationS3', props);
    return resource.getResponseField('InputDataLocationS3') as unknown as string;
  }

  public get createdByIamUser(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvaluation',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetEvaluation.CreatedByIamUser'),
        outputPath: 'CreatedByIamUser',
        parameters: {
          EvaluationId: this.__input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvaluation.CreatedByIamUser', props);
    return resource.getResponseField('CreatedByIamUser') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvaluation',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetEvaluation.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          EvaluationId: this.__input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvaluation.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvaluation',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetEvaluation.LastUpdatedAt'),
        outputPath: 'LastUpdatedAt',
        parameters: {
          EvaluationId: this.__input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvaluation.LastUpdatedAt', props);
    return resource.getResponseField('LastUpdatedAt') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvaluation',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetEvaluation.Name'),
        outputPath: 'Name',
        parameters: {
          EvaluationId: this.__input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvaluation.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvaluation',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetEvaluation.Status'),
        outputPath: 'Status',
        parameters: {
          EvaluationId: this.__input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvaluation.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get performanceMetrics(): MachineLearningResponsesFetchEvaluationPerformanceMetrics {
    return new MachineLearningResponsesFetchEvaluationPerformanceMetrics(this.__scope, this.__resources, this.__input);
  }

  public get logUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvaluation',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetEvaluation.LogUri'),
        outputPath: 'LogUri',
        parameters: {
          EvaluationId: this.__input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvaluation.LogUri', props);
    return resource.getResponseField('LogUri') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvaluation',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetEvaluation.Message'),
        outputPath: 'Message',
        parameters: {
          EvaluationId: this.__input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvaluation.Message', props);
    return resource.getResponseField('Message') as unknown as string;
  }

  public get computeTime(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvaluation',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetEvaluation.ComputeTime'),
        outputPath: 'ComputeTime',
        parameters: {
          EvaluationId: this.__input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvaluation.ComputeTime', props);
    return resource.getResponseField('ComputeTime') as unknown as number;
  }

  public get finishedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvaluation',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetEvaluation.FinishedAt'),
        outputPath: 'FinishedAt',
        parameters: {
          EvaluationId: this.__input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvaluation.FinishedAt', props);
    return resource.getResponseField('FinishedAt') as unknown as string;
  }

  public get startedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvaluation',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetEvaluation.StartedAt'),
        outputPath: 'StartedAt',
        parameters: {
          EvaluationId: this.__input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvaluation.StartedAt', props);
    return resource.getResponseField('StartedAt') as unknown as string;
  }

}

export class MachineLearningResponsesFetchEvaluationPerformanceMetrics {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningGetEvaluationInput) {
  }

  public get properties(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getEvaluation',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetEvaluation.PerformanceMetrics.Properties'),
        outputPath: 'PerformanceMetrics.Properties',
        parameters: {
          EvaluationId: this.__input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetEvaluation.PerformanceMetrics.Properties', props);
    return resource.getResponseField('PerformanceMetrics.Properties') as unknown as Record<string, string>;
  }

}

export class MachineLearningResponsesFetchMlModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningGetMlModelInput) {
  }

  public get mlModelId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlModel',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetMLModel.MLModelId'),
        outputPath: 'MLModelId',
        parameters: {
          MLModelId: this.__input.mlModelId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLModel.MLModelId', props);
    return resource.getResponseField('MLModelId') as unknown as string;
  }

  public get trainingDataSourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlModel',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetMLModel.TrainingDataSourceId'),
        outputPath: 'TrainingDataSourceId',
        parameters: {
          MLModelId: this.__input.mlModelId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLModel.TrainingDataSourceId', props);
    return resource.getResponseField('TrainingDataSourceId') as unknown as string;
  }

  public get createdByIamUser(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlModel',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetMLModel.CreatedByIamUser'),
        outputPath: 'CreatedByIamUser',
        parameters: {
          MLModelId: this.__input.mlModelId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLModel.CreatedByIamUser', props);
    return resource.getResponseField('CreatedByIamUser') as unknown as string;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlModel',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetMLModel.CreatedAt'),
        outputPath: 'CreatedAt',
        parameters: {
          MLModelId: this.__input.mlModelId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLModel.CreatedAt', props);
    return resource.getResponseField('CreatedAt') as unknown as string;
  }

  public get lastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlModel',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetMLModel.LastUpdatedAt'),
        outputPath: 'LastUpdatedAt',
        parameters: {
          MLModelId: this.__input.mlModelId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLModel.LastUpdatedAt', props);
    return resource.getResponseField('LastUpdatedAt') as unknown as string;
  }

  public get name(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlModel',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetMLModel.Name'),
        outputPath: 'Name',
        parameters: {
          MLModelId: this.__input.mlModelId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLModel.Name', props);
    return resource.getResponseField('Name') as unknown as string;
  }

  public get status(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlModel',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetMLModel.Status'),
        outputPath: 'Status',
        parameters: {
          MLModelId: this.__input.mlModelId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLModel.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get sizeInBytes(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlModel',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetMLModel.SizeInBytes'),
        outputPath: 'SizeInBytes',
        parameters: {
          MLModelId: this.__input.mlModelId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLModel.SizeInBytes', props);
    return resource.getResponseField('SizeInBytes') as unknown as number;
  }

  public get endpointInfo(): MachineLearningResponsesFetchMlModelEndpointInfo {
    return new MachineLearningResponsesFetchMlModelEndpointInfo(this.__scope, this.__resources, this.__input);
  }

  public get trainingParameters(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlModel',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetMLModel.TrainingParameters'),
        outputPath: 'TrainingParameters',
        parameters: {
          MLModelId: this.__input.mlModelId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLModel.TrainingParameters', props);
    return resource.getResponseField('TrainingParameters') as unknown as Record<string, string>;
  }

  public get inputDataLocationS3(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlModel',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetMLModel.InputDataLocationS3'),
        outputPath: 'InputDataLocationS3',
        parameters: {
          MLModelId: this.__input.mlModelId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLModel.InputDataLocationS3', props);
    return resource.getResponseField('InputDataLocationS3') as unknown as string;
  }

  public get mlModelType(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlModel',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetMLModel.MLModelType'),
        outputPath: 'MLModelType',
        parameters: {
          MLModelId: this.__input.mlModelId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLModel.MLModelType', props);
    return resource.getResponseField('MLModelType') as unknown as string;
  }

  public get scoreThreshold(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlModel',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetMLModel.ScoreThreshold'),
        outputPath: 'ScoreThreshold',
        parameters: {
          MLModelId: this.__input.mlModelId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLModel.ScoreThreshold', props);
    return resource.getResponseField('ScoreThreshold') as unknown as number;
  }

  public get scoreThresholdLastUpdatedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlModel',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetMLModel.ScoreThresholdLastUpdatedAt'),
        outputPath: 'ScoreThresholdLastUpdatedAt',
        parameters: {
          MLModelId: this.__input.mlModelId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLModel.ScoreThresholdLastUpdatedAt', props);
    return resource.getResponseField('ScoreThresholdLastUpdatedAt') as unknown as string;
  }

  public get logUri(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlModel',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetMLModel.LogUri'),
        outputPath: 'LogUri',
        parameters: {
          MLModelId: this.__input.mlModelId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLModel.LogUri', props);
    return resource.getResponseField('LogUri') as unknown as string;
  }

  public get message(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlModel',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetMLModel.Message'),
        outputPath: 'Message',
        parameters: {
          MLModelId: this.__input.mlModelId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLModel.Message', props);
    return resource.getResponseField('Message') as unknown as string;
  }

  public get computeTime(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlModel',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetMLModel.ComputeTime'),
        outputPath: 'ComputeTime',
        parameters: {
          MLModelId: this.__input.mlModelId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLModel.ComputeTime', props);
    return resource.getResponseField('ComputeTime') as unknown as number;
  }

  public get finishedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlModel',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetMLModel.FinishedAt'),
        outputPath: 'FinishedAt',
        parameters: {
          MLModelId: this.__input.mlModelId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLModel.FinishedAt', props);
    return resource.getResponseField('FinishedAt') as unknown as string;
  }

  public get startedAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlModel',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetMLModel.StartedAt'),
        outputPath: 'StartedAt',
        parameters: {
          MLModelId: this.__input.mlModelId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLModel.StartedAt', props);
    return resource.getResponseField('StartedAt') as unknown as string;
  }

  public get recipe(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlModel',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetMLModel.Recipe'),
        outputPath: 'Recipe',
        parameters: {
          MLModelId: this.__input.mlModelId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLModel.Recipe', props);
    return resource.getResponseField('Recipe') as unknown as string;
  }

  public get schema(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlModel',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetMLModel.Schema'),
        outputPath: 'Schema',
        parameters: {
          MLModelId: this.__input.mlModelId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLModel.Schema', props);
    return resource.getResponseField('Schema') as unknown as string;
  }

}

export class MachineLearningResponsesFetchMlModelEndpointInfo {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningGetMlModelInput) {
  }

  public get peakRequestsPerSecond(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlModel',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetMLModel.EndpointInfo.PeakRequestsPerSecond'),
        outputPath: 'EndpointInfo.PeakRequestsPerSecond',
        parameters: {
          MLModelId: this.__input.mlModelId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLModel.EndpointInfo.PeakRequestsPerSecond', props);
    return resource.getResponseField('EndpointInfo.PeakRequestsPerSecond') as unknown as number;
  }

  public get createdAt(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlModel',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetMLModel.EndpointInfo.CreatedAt'),
        outputPath: 'EndpointInfo.CreatedAt',
        parameters: {
          MLModelId: this.__input.mlModelId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLModel.EndpointInfo.CreatedAt', props);
    return resource.getResponseField('EndpointInfo.CreatedAt') as unknown as string;
  }

  public get endpointUrl(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlModel',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetMLModel.EndpointInfo.EndpointUrl'),
        outputPath: 'EndpointInfo.EndpointUrl',
        parameters: {
          MLModelId: this.__input.mlModelId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLModel.EndpointInfo.EndpointUrl', props);
    return resource.getResponseField('EndpointInfo.EndpointUrl') as unknown as string;
  }

  public get endpointStatus(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'getMlModel',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.GetMLModel.EndpointInfo.EndpointStatus'),
        outputPath: 'EndpointInfo.EndpointStatus',
        parameters: {
          MLModelId: this.__input.mlModelId,
          Verbose: this.__input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'GetMLModel.EndpointInfo.EndpointStatus', props);
    return resource.getResponseField('EndpointInfo.EndpointStatus') as unknown as string;
  }

}

export class MachineLearningResponsesPredict {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningPredictInput) {
  }

  public get prediction(): MachineLearningResponsesPredictPrediction {
    return new MachineLearningResponsesPredictPrediction(this.__scope, this.__resources, this.__input);
  }

}

export class MachineLearningResponsesPredictPrediction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningPredictInput) {
  }

  public get predictedLabel(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'predict',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.Predict.Prediction.predictedLabel'),
        outputPath: 'Prediction.predictedLabel',
        parameters: {
          MLModelId: this.__input.mlModelId,
          Record: this.__input.record,
          PredictEndpoint: this.__input.predictEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Predict.Prediction.predictedLabel', props);
    return resource.getResponseField('Prediction.predictedLabel') as unknown as string;
  }

  public get predictedValue(): number {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'predict',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.Predict.Prediction.predictedValue'),
        outputPath: 'Prediction.predictedValue',
        parameters: {
          MLModelId: this.__input.mlModelId,
          Record: this.__input.record,
          PredictEndpoint: this.__input.predictEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Predict.Prediction.predictedValue', props);
    return resource.getResponseField('Prediction.predictedValue') as unknown as number;
  }

  public get predictedScores(): Record<string, number> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'predict',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.Predict.Prediction.predictedScores'),
        outputPath: 'Prediction.predictedScores',
        parameters: {
          MLModelId: this.__input.mlModelId,
          Record: this.__input.record,
          PredictEndpoint: this.__input.predictEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Predict.Prediction.predictedScores', props);
    return resource.getResponseField('Prediction.predictedScores') as unknown as Record<string, number>;
  }

  public get details(): Record<string, string> {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'predict',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.Predict.Prediction.details'),
        outputPath: 'Prediction.details',
        parameters: {
          MLModelId: this.__input.mlModelId,
          Record: this.__input.record,
          PredictEndpoint: this.__input.predictEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'Predict.Prediction.details', props);
    return resource.getResponseField('Prediction.details') as unknown as Record<string, string>;
  }

}

export class MachineLearningResponsesUpdateBatchPrediction {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningUpdateBatchPredictionInput) {
  }

  public get batchPredictionId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateBatchPrediction',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.UpdateBatchPrediction.BatchPredictionId'),
        outputPath: 'BatchPredictionId',
        parameters: {
          BatchPredictionId: this.__input.batchPredictionId,
          BatchPredictionName: this.__input.batchPredictionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateBatchPrediction.BatchPredictionId', props);
    return resource.getResponseField('BatchPredictionId') as unknown as string;
  }

}

export class MachineLearningResponsesUpdateDataSource {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningUpdateDataSourceInput) {
  }

  public get dataSourceId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateDataSource',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.UpdateDataSource.DataSourceId'),
        outputPath: 'DataSourceId',
        parameters: {
          DataSourceId: this.__input.dataSourceId,
          DataSourceName: this.__input.dataSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateDataSource.DataSourceId', props);
    return resource.getResponseField('DataSourceId') as unknown as string;
  }

}

export class MachineLearningResponsesUpdateEvaluation {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningUpdateEvaluationInput) {
  }

  public get evaluationId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateEvaluation',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.UpdateEvaluation.EvaluationId'),
        outputPath: 'EvaluationId',
        parameters: {
          EvaluationId: this.__input.evaluationId,
          EvaluationName: this.__input.evaluationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateEvaluation.EvaluationId', props);
    return resource.getResponseField('EvaluationId') as unknown as string;
  }

}

export class MachineLearningResponsesUpdateMlModel {

  constructor(private readonly __scope: cdk.Construct, private readonly __resources: string[], private readonly __input: shapes.MachineLearningUpdateMlModelInput) {
  }

  public get mlModelId(): string {
    const props: cr.AwsCustomResourceProps = {
      policy: cr.AwsCustomResourcePolicy.fromSdkCalls({ resources: this.__resources }),
      onUpdate: {
        action: 'updateMlModel',
        service: 'MachineLearning',
        physicalResourceId: cr.PhysicalResourceId.of('MachineLearning.UpdateMLModel.MLModelId'),
        outputPath: 'MLModelId',
        parameters: {
          MLModelId: this.__input.mlModelId,
          MLModelName: this.__input.mlModelName,
          ScoreThreshold: this.__input.scoreThreshold,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this.__scope, 'UpdateMLModel.MLModelId', props);
    return resource.getResponseField('MLModelId') as unknown as string;
  }

}

