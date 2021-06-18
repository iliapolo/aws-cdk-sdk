import * as cdk from '@aws-cdk/core';
import * as cr from '@aws-cdk/custom-resources';
import * as shapes from './shapes';

export class MachineLearningClient extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[]) {
    super(scope, id);
  }

  public addTags(input: shapes.MachineLearningAddTagsInput): MachineLearningAddTags {
    return new MachineLearningAddTags(this, 'AddTags', this.__resources, input);
  }

  public createBatchPrediction(input: shapes.MachineLearningCreateBatchPredictionInput): MachineLearningCreateBatchPrediction {
    return new MachineLearningCreateBatchPrediction(this, 'CreateBatchPrediction', this.__resources, input);
  }

  public createDataSourceFromRds(input: shapes.MachineLearningCreateDataSourceFromRdsInput): MachineLearningCreateDataSourceFromRds {
    return new MachineLearningCreateDataSourceFromRds(this, 'CreateDataSourceFromRds', this.__resources, input);
  }

  public createDataSourceFromRedshift(input: shapes.MachineLearningCreateDataSourceFromRedshiftInput): MachineLearningCreateDataSourceFromRedshift {
    return new MachineLearningCreateDataSourceFromRedshift(this, 'CreateDataSourceFromRedshift', this.__resources, input);
  }

  public createDataSourceFromS3(input: shapes.MachineLearningCreateDataSourceFromS3Input): MachineLearningCreateDataSourceFromS3 {
    return new MachineLearningCreateDataSourceFromS3(this, 'CreateDataSourceFromS3', this.__resources, input);
  }

  public createEvaluation(input: shapes.MachineLearningCreateEvaluationInput): MachineLearningCreateEvaluation {
    return new MachineLearningCreateEvaluation(this, 'CreateEvaluation', this.__resources, input);
  }

  public createMlModel(input: shapes.MachineLearningCreateMlModelInput): MachineLearningCreateMlModel {
    return new MachineLearningCreateMlModel(this, 'CreateMlModel', this.__resources, input);
  }

  public createRealtimeEndpoint(input: shapes.MachineLearningCreateRealtimeEndpointInput): MachineLearningCreateRealtimeEndpoint {
    return new MachineLearningCreateRealtimeEndpoint(this, 'CreateRealtimeEndpoint', this.__resources, input);
  }

  public deleteBatchPrediction(input: shapes.MachineLearningDeleteBatchPredictionInput): MachineLearningDeleteBatchPrediction {
    return new MachineLearningDeleteBatchPrediction(this, 'DeleteBatchPrediction', this.__resources, input);
  }

  public deleteDataSource(input: shapes.MachineLearningDeleteDataSourceInput): MachineLearningDeleteDataSource {
    return new MachineLearningDeleteDataSource(this, 'DeleteDataSource', this.__resources, input);
  }

  public deleteEvaluation(input: shapes.MachineLearningDeleteEvaluationInput): MachineLearningDeleteEvaluation {
    return new MachineLearningDeleteEvaluation(this, 'DeleteEvaluation', this.__resources, input);
  }

  public deleteMlModel(input: shapes.MachineLearningDeleteMlModelInput): MachineLearningDeleteMlModel {
    return new MachineLearningDeleteMlModel(this, 'DeleteMlModel', this.__resources, input);
  }

  public deleteRealtimeEndpoint(input: shapes.MachineLearningDeleteRealtimeEndpointInput): MachineLearningDeleteRealtimeEndpoint {
    return new MachineLearningDeleteRealtimeEndpoint(this, 'DeleteRealtimeEndpoint', this.__resources, input);
  }

  public deleteTags(input: shapes.MachineLearningDeleteTagsInput): MachineLearningDeleteTags {
    return new MachineLearningDeleteTags(this, 'DeleteTags', this.__resources, input);
  }

  public describeBatchPredictions(input: shapes.MachineLearningDescribeBatchPredictionsInput): MachineLearningDescribeBatchPredictions {
    return new MachineLearningDescribeBatchPredictions(this, 'DescribeBatchPredictions', this.__resources, input);
  }

  public describeDataSources(input: shapes.MachineLearningDescribeDataSourcesInput): MachineLearningDescribeDataSources {
    return new MachineLearningDescribeDataSources(this, 'DescribeDataSources', this.__resources, input);
  }

  public describeEvaluations(input: shapes.MachineLearningDescribeEvaluationsInput): MachineLearningDescribeEvaluations {
    return new MachineLearningDescribeEvaluations(this, 'DescribeEvaluations', this.__resources, input);
  }

  public describeMlModels(input: shapes.MachineLearningDescribeMlModelsInput): MachineLearningDescribeMlModels {
    return new MachineLearningDescribeMlModels(this, 'DescribeMlModels', this.__resources, input);
  }

  public describeTags(input: shapes.MachineLearningDescribeTagsInput): MachineLearningDescribeTags {
    return new MachineLearningDescribeTags(this, 'DescribeTags', this.__resources, input);
  }

  public fetchBatchPrediction(input: shapes.MachineLearningGetBatchPredictionInput): MachineLearningFetchBatchPrediction {
    return new MachineLearningFetchBatchPrediction(this, 'FetchBatchPrediction', this.__resources, input);
  }

  public fetchDataSource(input: shapes.MachineLearningGetDataSourceInput): MachineLearningFetchDataSource {
    return new MachineLearningFetchDataSource(this, 'FetchDataSource', this.__resources, input);
  }

  public fetchEvaluation(input: shapes.MachineLearningGetEvaluationInput): MachineLearningFetchEvaluation {
    return new MachineLearningFetchEvaluation(this, 'FetchEvaluation', this.__resources, input);
  }

  public fetchMlModel(input: shapes.MachineLearningGetMlModelInput): MachineLearningFetchMlModel {
    return new MachineLearningFetchMlModel(this, 'FetchMlModel', this.__resources, input);
  }

  public predict(input: shapes.MachineLearningPredictInput): MachineLearningPredict {
    return new MachineLearningPredict(this, 'Predict', this.__resources, input);
  }

  public updateBatchPrediction(input: shapes.MachineLearningUpdateBatchPredictionInput): MachineLearningUpdateBatchPrediction {
    return new MachineLearningUpdateBatchPrediction(this, 'UpdateBatchPrediction', this.__resources, input);
  }

  public updateDataSource(input: shapes.MachineLearningUpdateDataSourceInput): MachineLearningUpdateDataSource {
    return new MachineLearningUpdateDataSource(this, 'UpdateDataSource', this.__resources, input);
  }

  public updateEvaluation(input: shapes.MachineLearningUpdateEvaluationInput): MachineLearningUpdateEvaluation {
    return new MachineLearningUpdateEvaluation(this, 'UpdateEvaluation', this.__resources, input);
  }

  public updateMlModel(input: shapes.MachineLearningUpdateMlModelInput): MachineLearningUpdateMlModel {
    return new MachineLearningUpdateMlModel(this, 'UpdateMlModel', this.__resources, input);
  }

}

export class MachineLearningAddTags extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningAddTagsInput) {
    super(scope, id);
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
          Tags: this.input.tags,
          ResourceId: this.input.resourceId,
          ResourceType: this.input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddTags.ResourceId', props);
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
          Tags: this.input.tags,
          ResourceId: this.input.resourceId,
          ResourceType: this.input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'AddTags.ResourceType', props);
    return resource.getResponseField('ResourceType') as unknown as string;
  }

}

export class MachineLearningCreateBatchPrediction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningCreateBatchPredictionInput) {
    super(scope, id);
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
          BatchPredictionId: this.input.batchPredictionId,
          BatchPredictionName: this.input.batchPredictionName,
          MLModelId: this.input.mlModelId,
          BatchPredictionDataSourceId: this.input.batchPredictionDataSourceId,
          OutputUri: this.input.outputUri,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateBatchPrediction.BatchPredictionId', props);
    return resource.getResponseField('BatchPredictionId') as unknown as string;
  }

}

export class MachineLearningCreateDataSourceFromRds extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningCreateDataSourceFromRdsInput) {
    super(scope, id);
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
          DataSourceId: this.input.dataSourceId,
          DataSourceName: this.input.dataSourceName,
          RDSData: {
            DatabaseInformation: {
              InstanceIdentifier: this.input.rdsData.databaseInformation.instanceIdentifier,
              DatabaseName: this.input.rdsData.databaseInformation.databaseName,
            },
            SelectSqlQuery: this.input.rdsData.selectSqlQuery,
            DatabaseCredentials: {
              Username: this.input.rdsData.databaseCredentials.username,
              Password: this.input.rdsData.databaseCredentials.password,
            },
            S3StagingLocation: this.input.rdsData.s3StagingLocation,
            DataRearrangement: this.input.rdsData.dataRearrangement,
            DataSchema: this.input.rdsData.dataSchema,
            DataSchemaUri: this.input.rdsData.dataSchemaUri,
            ResourceRole: this.input.rdsData.resourceRole,
            ServiceRole: this.input.rdsData.serviceRole,
            SubnetId: this.input.rdsData.subnetId,
            SecurityGroupIds: this.input.rdsData.securityGroupIds,
          },
          RoleARN: this.input.roleArn,
          ComputeStatistics: this.input.computeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSourceFromRDS.DataSourceId', props);
    return resource.getResponseField('DataSourceId') as unknown as string;
  }

}

export class MachineLearningCreateDataSourceFromRedshift extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningCreateDataSourceFromRedshiftInput) {
    super(scope, id);
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
          DataSourceId: this.input.dataSourceId,
          DataSourceName: this.input.dataSourceName,
          DataSpec: {
            DatabaseInformation: {
              DatabaseName: this.input.dataSpec.databaseInformation.databaseName,
              ClusterIdentifier: this.input.dataSpec.databaseInformation.clusterIdentifier,
            },
            SelectSqlQuery: this.input.dataSpec.selectSqlQuery,
            DatabaseCredentials: {
              Username: this.input.dataSpec.databaseCredentials.username,
              Password: this.input.dataSpec.databaseCredentials.password,
            },
            S3StagingLocation: this.input.dataSpec.s3StagingLocation,
            DataRearrangement: this.input.dataSpec.dataRearrangement,
            DataSchema: this.input.dataSpec.dataSchema,
            DataSchemaUri: this.input.dataSpec.dataSchemaUri,
          },
          RoleARN: this.input.roleArn,
          ComputeStatistics: this.input.computeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSourceFromRedshift.DataSourceId', props);
    return resource.getResponseField('DataSourceId') as unknown as string;
  }

}

export class MachineLearningCreateDataSourceFromS3 extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningCreateDataSourceFromS3Input) {
    super(scope, id);
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
          DataSourceId: this.input.dataSourceId,
          DataSourceName: this.input.dataSourceName,
          DataSpec: {
            DataLocationS3: this.input.dataSpec.dataLocationS3,
            DataRearrangement: this.input.dataSpec.dataRearrangement,
            DataSchema: this.input.dataSpec.dataSchema,
            DataSchemaLocationS3: this.input.dataSpec.dataSchemaLocationS3,
          },
          ComputeStatistics: this.input.computeStatistics,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateDataSourceFromS3.DataSourceId', props);
    return resource.getResponseField('DataSourceId') as unknown as string;
  }

}

export class MachineLearningCreateEvaluation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningCreateEvaluationInput) {
    super(scope, id);
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
          EvaluationId: this.input.evaluationId,
          EvaluationName: this.input.evaluationName,
          MLModelId: this.input.mlModelId,
          EvaluationDataSourceId: this.input.evaluationDataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateEvaluation.EvaluationId', props);
    return resource.getResponseField('EvaluationId') as unknown as string;
  }

}

export class MachineLearningCreateMlModel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningCreateMlModelInput) {
    super(scope, id);
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
          MLModelId: this.input.mlModelId,
          MLModelName: this.input.mlModelName,
          MLModelType: this.input.mlModelType,
          Parameters: this.input.parameters,
          TrainingDataSourceId: this.input.trainingDataSourceId,
          Recipe: this.input.recipe,
          RecipeUri: this.input.recipeUri,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateMLModel.MLModelId', props);
    return resource.getResponseField('MLModelId') as unknown as string;
  }

}

export class MachineLearningCreateRealtimeEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningCreateRealtimeEndpointInput) {
    super(scope, id);
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
          MLModelId: this.input.mlModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRealtimeEndpoint.MLModelId', props);
    return resource.getResponseField('MLModelId') as unknown as string;
  }

  public get realtimeEndpointInfo(): MachineLearningCreateRealtimeEndpointRealtimeEndpointInfo {
    return new MachineLearningCreateRealtimeEndpointRealtimeEndpointInfo(this, 'RealtimeEndpointInfo', this.__resources, this.input);
  }

}

export class MachineLearningCreateRealtimeEndpointRealtimeEndpointInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningCreateRealtimeEndpointInput) {
    super(scope, id);
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
          MLModelId: this.input.mlModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRealtimeEndpoint.RealtimeEndpointInfo.PeakRequestsPerSecond', props);
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
          MLModelId: this.input.mlModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRealtimeEndpoint.RealtimeEndpointInfo.CreatedAt', props);
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
          MLModelId: this.input.mlModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRealtimeEndpoint.RealtimeEndpointInfo.EndpointUrl', props);
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
          MLModelId: this.input.mlModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'CreateRealtimeEndpoint.RealtimeEndpointInfo.EndpointStatus', props);
    return resource.getResponseField('RealtimeEndpointInfo.EndpointStatus') as unknown as string;
  }

}

export class MachineLearningDeleteBatchPrediction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningDeleteBatchPredictionInput) {
    super(scope, id);
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
          BatchPredictionId: this.input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteBatchPrediction.BatchPredictionId', props);
    return resource.getResponseField('BatchPredictionId') as unknown as string;
  }

}

export class MachineLearningDeleteDataSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningDeleteDataSourceInput) {
    super(scope, id);
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
          DataSourceId: this.input.dataSourceId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteDataSource.DataSourceId', props);
    return resource.getResponseField('DataSourceId') as unknown as string;
  }

}

export class MachineLearningDeleteEvaluation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningDeleteEvaluationInput) {
    super(scope, id);
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
          EvaluationId: this.input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteEvaluation.EvaluationId', props);
    return resource.getResponseField('EvaluationId') as unknown as string;
  }

}

export class MachineLearningDeleteMlModel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningDeleteMlModelInput) {
    super(scope, id);
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
          MLModelId: this.input.mlModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteMLModel.MLModelId', props);
    return resource.getResponseField('MLModelId') as unknown as string;
  }

}

export class MachineLearningDeleteRealtimeEndpoint extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningDeleteRealtimeEndpointInput) {
    super(scope, id);
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
          MLModelId: this.input.mlModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRealtimeEndpoint.MLModelId', props);
    return resource.getResponseField('MLModelId') as unknown as string;
  }

  public get realtimeEndpointInfo(): MachineLearningDeleteRealtimeEndpointRealtimeEndpointInfo {
    return new MachineLearningDeleteRealtimeEndpointRealtimeEndpointInfo(this, 'RealtimeEndpointInfo', this.__resources, this.input);
  }

}

export class MachineLearningDeleteRealtimeEndpointRealtimeEndpointInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningDeleteRealtimeEndpointInput) {
    super(scope, id);
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
          MLModelId: this.input.mlModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRealtimeEndpoint.RealtimeEndpointInfo.PeakRequestsPerSecond', props);
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
          MLModelId: this.input.mlModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRealtimeEndpoint.RealtimeEndpointInfo.CreatedAt', props);
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
          MLModelId: this.input.mlModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRealtimeEndpoint.RealtimeEndpointInfo.EndpointUrl', props);
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
          MLModelId: this.input.mlModelId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteRealtimeEndpoint.RealtimeEndpointInfo.EndpointStatus', props);
    return resource.getResponseField('RealtimeEndpointInfo.EndpointStatus') as unknown as string;
  }

}

export class MachineLearningDeleteTags extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningDeleteTagsInput) {
    super(scope, id);
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
          TagKeys: this.input.tagKeys,
          ResourceId: this.input.resourceId,
          ResourceType: this.input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTags.ResourceId', props);
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
          TagKeys: this.input.tagKeys,
          ResourceId: this.input.resourceId,
          ResourceType: this.input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DeleteTags.ResourceType', props);
    return resource.getResponseField('ResourceType') as unknown as string;
  }

}

export class MachineLearningDescribeBatchPredictions extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningDescribeBatchPredictionsInput) {
    super(scope, id);
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
          FilterVariable: this.input.filterVariable,
          EQ: this.input.eq,
          GT: this.input.gt,
          LT: this.input.lt,
          GE: this.input.ge,
          LE: this.input.le,
          NE: this.input.ne,
          Prefix: this.input.prefix,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBatchPredictions.Results', props);
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
          FilterVariable: this.input.filterVariable,
          EQ: this.input.eq,
          GT: this.input.gt,
          LT: this.input.lt,
          GE: this.input.ge,
          LE: this.input.le,
          NE: this.input.ne,
          Prefix: this.input.prefix,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeBatchPredictions.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MachineLearningDescribeDataSources extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningDescribeDataSourcesInput) {
    super(scope, id);
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
          FilterVariable: this.input.filterVariable,
          EQ: this.input.eq,
          GT: this.input.gt,
          LT: this.input.lt,
          GE: this.input.ge,
          LE: this.input.le,
          NE: this.input.ne,
          Prefix: this.input.prefix,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSources.Results', props);
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
          FilterVariable: this.input.filterVariable,
          EQ: this.input.eq,
          GT: this.input.gt,
          LT: this.input.lt,
          GE: this.input.ge,
          LE: this.input.le,
          NE: this.input.ne,
          Prefix: this.input.prefix,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeDataSources.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MachineLearningDescribeEvaluations extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningDescribeEvaluationsInput) {
    super(scope, id);
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
          FilterVariable: this.input.filterVariable,
          EQ: this.input.eq,
          GT: this.input.gt,
          LT: this.input.lt,
          GE: this.input.ge,
          LE: this.input.le,
          NE: this.input.ne,
          Prefix: this.input.prefix,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEvaluations.Results', props);
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
          FilterVariable: this.input.filterVariable,
          EQ: this.input.eq,
          GT: this.input.gt,
          LT: this.input.lt,
          GE: this.input.ge,
          LE: this.input.le,
          NE: this.input.ne,
          Prefix: this.input.prefix,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeEvaluations.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MachineLearningDescribeMlModels extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningDescribeMlModelsInput) {
    super(scope, id);
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
          FilterVariable: this.input.filterVariable,
          EQ: this.input.eq,
          GT: this.input.gt,
          LT: this.input.lt,
          GE: this.input.ge,
          LE: this.input.le,
          NE: this.input.ne,
          Prefix: this.input.prefix,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMLModels.Results', props);
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
          FilterVariable: this.input.filterVariable,
          EQ: this.input.eq,
          GT: this.input.gt,
          LT: this.input.lt,
          GE: this.input.ge,
          LE: this.input.le,
          NE: this.input.ne,
          Prefix: this.input.prefix,
          SortOrder: this.input.sortOrder,
          NextToken: this.input.nextToken,
          Limit: this.input.limit,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeMLModels.NextToken', props);
    return resource.getResponseField('NextToken') as unknown as string;
  }

}

export class MachineLearningDescribeTags extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningDescribeTagsInput) {
    super(scope, id);
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
          ResourceId: this.input.resourceId,
          ResourceType: this.input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTags.ResourceId', props);
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
          ResourceId: this.input.resourceId,
          ResourceType: this.input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTags.ResourceType', props);
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
          ResourceId: this.input.resourceId,
          ResourceType: this.input.resourceType,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'DescribeTags.Tags', props);
    return resource.getResponseField('Tags') as unknown as shapes.MachineLearningTag[];
  }

}

export class MachineLearningFetchBatchPrediction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningGetBatchPredictionInput) {
    super(scope, id);
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
          BatchPredictionId: this.input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBatchPrediction.BatchPredictionId', props);
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
          BatchPredictionId: this.input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBatchPrediction.MLModelId', props);
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
          BatchPredictionId: this.input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBatchPrediction.BatchPredictionDataSourceId', props);
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
          BatchPredictionId: this.input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBatchPrediction.InputDataLocationS3', props);
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
          BatchPredictionId: this.input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBatchPrediction.CreatedByIamUser', props);
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
          BatchPredictionId: this.input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBatchPrediction.CreatedAt', props);
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
          BatchPredictionId: this.input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBatchPrediction.LastUpdatedAt', props);
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
          BatchPredictionId: this.input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBatchPrediction.Name', props);
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
          BatchPredictionId: this.input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBatchPrediction.Status', props);
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
          BatchPredictionId: this.input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBatchPrediction.OutputUri', props);
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
          BatchPredictionId: this.input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBatchPrediction.LogUri', props);
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
          BatchPredictionId: this.input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBatchPrediction.Message', props);
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
          BatchPredictionId: this.input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBatchPrediction.ComputeTime', props);
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
          BatchPredictionId: this.input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBatchPrediction.FinishedAt', props);
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
          BatchPredictionId: this.input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBatchPrediction.StartedAt', props);
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
          BatchPredictionId: this.input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBatchPrediction.TotalRecordCount', props);
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
          BatchPredictionId: this.input.batchPredictionId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetBatchPrediction.InvalidRecordCount', props);
    return resource.getResponseField('InvalidRecordCount') as unknown as number;
  }

}

export class MachineLearningFetchDataSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningGetDataSourceInput) {
    super(scope, id);
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
          DataSourceId: this.input.dataSourceId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.DataSourceId', props);
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
          DataSourceId: this.input.dataSourceId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.DataLocationS3', props);
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
          DataSourceId: this.input.dataSourceId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.DataRearrangement', props);
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
          DataSourceId: this.input.dataSourceId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.CreatedByIamUser', props);
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
          DataSourceId: this.input.dataSourceId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.CreatedAt', props);
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
          DataSourceId: this.input.dataSourceId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.LastUpdatedAt', props);
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
          DataSourceId: this.input.dataSourceId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.DataSizeInBytes', props);
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
          DataSourceId: this.input.dataSourceId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.NumberOfFiles', props);
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
          DataSourceId: this.input.dataSourceId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.Name', props);
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
          DataSourceId: this.input.dataSourceId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.Status', props);
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
          DataSourceId: this.input.dataSourceId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.LogUri', props);
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
          DataSourceId: this.input.dataSourceId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.Message', props);
    return resource.getResponseField('Message') as unknown as string;
  }

  public get redshiftMetadata(): MachineLearningFetchDataSourceRedshiftMetadata {
    return new MachineLearningFetchDataSourceRedshiftMetadata(this, 'RedshiftMetadata', this.__resources, this.input);
  }

  public get rdsMetadata(): MachineLearningFetchDataSourceRdsMetadata {
    return new MachineLearningFetchDataSourceRdsMetadata(this, 'RdsMetadata', this.__resources, this.input);
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
          DataSourceId: this.input.dataSourceId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.RoleARN', props);
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
          DataSourceId: this.input.dataSourceId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.ComputeStatistics', props);
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
          DataSourceId: this.input.dataSourceId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.ComputeTime', props);
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
          DataSourceId: this.input.dataSourceId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.FinishedAt', props);
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
          DataSourceId: this.input.dataSourceId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.StartedAt', props);
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
          DataSourceId: this.input.dataSourceId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.DataSourceSchema', props);
    return resource.getResponseField('DataSourceSchema') as unknown as string;
  }

}

export class MachineLearningFetchDataSourceRedshiftMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningGetDataSourceInput) {
    super(scope, id);
  }

  public get redshiftDatabase(): MachineLearningFetchDataSourceRedshiftMetadataRedshiftDatabase {
    return new MachineLearningFetchDataSourceRedshiftMetadataRedshiftDatabase(this, 'RedshiftDatabase', this.__resources, this.input);
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
          DataSourceId: this.input.dataSourceId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.RedshiftMetadata.DatabaseUserName', props);
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
          DataSourceId: this.input.dataSourceId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.RedshiftMetadata.SelectSqlQuery', props);
    return resource.getResponseField('RedshiftMetadata.SelectSqlQuery') as unknown as string;
  }

}

export class MachineLearningFetchDataSourceRedshiftMetadataRedshiftDatabase extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningGetDataSourceInput) {
    super(scope, id);
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
          DataSourceId: this.input.dataSourceId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.RedshiftMetadata.RedshiftDatabase.DatabaseName', props);
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
          DataSourceId: this.input.dataSourceId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.RedshiftMetadata.RedshiftDatabase.ClusterIdentifier', props);
    return resource.getResponseField('RedshiftMetadata.RedshiftDatabase.ClusterIdentifier') as unknown as string;
  }

}

export class MachineLearningFetchDataSourceRdsMetadata extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningGetDataSourceInput) {
    super(scope, id);
  }

  public get database(): MachineLearningFetchDataSourceRdsMetadataDatabase {
    return new MachineLearningFetchDataSourceRdsMetadataDatabase(this, 'Database', this.__resources, this.input);
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
          DataSourceId: this.input.dataSourceId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.RDSMetadata.DatabaseUserName', props);
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
          DataSourceId: this.input.dataSourceId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.RDSMetadata.SelectSqlQuery', props);
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
          DataSourceId: this.input.dataSourceId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.RDSMetadata.ResourceRole', props);
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
          DataSourceId: this.input.dataSourceId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.RDSMetadata.ServiceRole', props);
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
          DataSourceId: this.input.dataSourceId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.RDSMetadata.DataPipelineId', props);
    return resource.getResponseField('RDSMetadata.DataPipelineId') as unknown as string;
  }

}

export class MachineLearningFetchDataSourceRdsMetadataDatabase extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningGetDataSourceInput) {
    super(scope, id);
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
          DataSourceId: this.input.dataSourceId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.RDSMetadata.Database.InstanceIdentifier', props);
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
          DataSourceId: this.input.dataSourceId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetDataSource.RDSMetadata.Database.DatabaseName', props);
    return resource.getResponseField('RDSMetadata.Database.DatabaseName') as unknown as string;
  }

}

export class MachineLearningFetchEvaluation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningGetEvaluationInput) {
    super(scope, id);
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
          EvaluationId: this.input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEvaluation.EvaluationId', props);
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
          EvaluationId: this.input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEvaluation.MLModelId', props);
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
          EvaluationId: this.input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEvaluation.EvaluationDataSourceId', props);
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
          EvaluationId: this.input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEvaluation.InputDataLocationS3', props);
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
          EvaluationId: this.input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEvaluation.CreatedByIamUser', props);
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
          EvaluationId: this.input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEvaluation.CreatedAt', props);
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
          EvaluationId: this.input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEvaluation.LastUpdatedAt', props);
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
          EvaluationId: this.input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEvaluation.Name', props);
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
          EvaluationId: this.input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEvaluation.Status', props);
    return resource.getResponseField('Status') as unknown as string;
  }

  public get performanceMetrics(): MachineLearningFetchEvaluationPerformanceMetrics {
    return new MachineLearningFetchEvaluationPerformanceMetrics(this, 'PerformanceMetrics', this.__resources, this.input);
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
          EvaluationId: this.input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEvaluation.LogUri', props);
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
          EvaluationId: this.input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEvaluation.Message', props);
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
          EvaluationId: this.input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEvaluation.ComputeTime', props);
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
          EvaluationId: this.input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEvaluation.FinishedAt', props);
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
          EvaluationId: this.input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEvaluation.StartedAt', props);
    return resource.getResponseField('StartedAt') as unknown as string;
  }

}

export class MachineLearningFetchEvaluationPerformanceMetrics extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningGetEvaluationInput) {
    super(scope, id);
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
          EvaluationId: this.input.evaluationId,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetEvaluation.PerformanceMetrics.Properties', props);
    return resource.getResponseField('PerformanceMetrics.Properties') as unknown as Record<string, string>;
  }

}

export class MachineLearningFetchMlModel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningGetMlModelInput) {
    super(scope, id);
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
          MLModelId: this.input.mlModelId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLModel.MLModelId', props);
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
          MLModelId: this.input.mlModelId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLModel.TrainingDataSourceId', props);
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
          MLModelId: this.input.mlModelId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLModel.CreatedByIamUser', props);
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
          MLModelId: this.input.mlModelId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLModel.CreatedAt', props);
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
          MLModelId: this.input.mlModelId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLModel.LastUpdatedAt', props);
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
          MLModelId: this.input.mlModelId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLModel.Name', props);
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
          MLModelId: this.input.mlModelId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLModel.Status', props);
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
          MLModelId: this.input.mlModelId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLModel.SizeInBytes', props);
    return resource.getResponseField('SizeInBytes') as unknown as number;
  }

  public get endpointInfo(): MachineLearningFetchMlModelEndpointInfo {
    return new MachineLearningFetchMlModelEndpointInfo(this, 'EndpointInfo', this.__resources, this.input);
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
          MLModelId: this.input.mlModelId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLModel.TrainingParameters', props);
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
          MLModelId: this.input.mlModelId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLModel.InputDataLocationS3', props);
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
          MLModelId: this.input.mlModelId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLModel.MLModelType', props);
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
          MLModelId: this.input.mlModelId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLModel.ScoreThreshold', props);
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
          MLModelId: this.input.mlModelId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLModel.ScoreThresholdLastUpdatedAt', props);
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
          MLModelId: this.input.mlModelId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLModel.LogUri', props);
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
          MLModelId: this.input.mlModelId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLModel.Message', props);
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
          MLModelId: this.input.mlModelId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLModel.ComputeTime', props);
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
          MLModelId: this.input.mlModelId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLModel.FinishedAt', props);
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
          MLModelId: this.input.mlModelId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLModel.StartedAt', props);
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
          MLModelId: this.input.mlModelId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLModel.Recipe', props);
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
          MLModelId: this.input.mlModelId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLModel.Schema', props);
    return resource.getResponseField('Schema') as unknown as string;
  }

}

export class MachineLearningFetchMlModelEndpointInfo extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningGetMlModelInput) {
    super(scope, id);
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
          MLModelId: this.input.mlModelId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLModel.EndpointInfo.PeakRequestsPerSecond', props);
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
          MLModelId: this.input.mlModelId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLModel.EndpointInfo.CreatedAt', props);
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
          MLModelId: this.input.mlModelId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLModel.EndpointInfo.EndpointUrl', props);
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
          MLModelId: this.input.mlModelId,
          Verbose: this.input.verbose,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'GetMLModel.EndpointInfo.EndpointStatus', props);
    return resource.getResponseField('EndpointInfo.EndpointStatus') as unknown as string;
  }

}

export class MachineLearningPredict extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningPredictInput) {
    super(scope, id);
  }

  public get prediction(): MachineLearningPredictPrediction {
    return new MachineLearningPredictPrediction(this, 'Prediction', this.__resources, this.input);
  }

}

export class MachineLearningPredictPrediction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningPredictInput) {
    super(scope, id);
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
          MLModelId: this.input.mlModelId,
          Record: this.input.record,
          PredictEndpoint: this.input.predictEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Predict.Prediction.predictedLabel', props);
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
          MLModelId: this.input.mlModelId,
          Record: this.input.record,
          PredictEndpoint: this.input.predictEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Predict.Prediction.predictedValue', props);
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
          MLModelId: this.input.mlModelId,
          Record: this.input.record,
          PredictEndpoint: this.input.predictEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Predict.Prediction.predictedScores', props);
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
          MLModelId: this.input.mlModelId,
          Record: this.input.record,
          PredictEndpoint: this.input.predictEndpoint,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'Predict.Prediction.details', props);
    return resource.getResponseField('Prediction.details') as unknown as Record<string, string>;
  }

}

export class MachineLearningUpdateBatchPrediction extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningUpdateBatchPredictionInput) {
    super(scope, id);
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
          BatchPredictionId: this.input.batchPredictionId,
          BatchPredictionName: this.input.batchPredictionName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateBatchPrediction.BatchPredictionId', props);
    return resource.getResponseField('BatchPredictionId') as unknown as string;
  }

}

export class MachineLearningUpdateDataSource extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningUpdateDataSourceInput) {
    super(scope, id);
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
          DataSourceId: this.input.dataSourceId,
          DataSourceName: this.input.dataSourceName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateDataSource.DataSourceId', props);
    return resource.getResponseField('DataSourceId') as unknown as string;
  }

}

export class MachineLearningUpdateEvaluation extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningUpdateEvaluationInput) {
    super(scope, id);
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
          EvaluationId: this.input.evaluationId,
          EvaluationName: this.input.evaluationName,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateEvaluation.EvaluationId', props);
    return resource.getResponseField('EvaluationId') as unknown as string;
  }

}

export class MachineLearningUpdateMlModel extends cdk.Construct {

  constructor(scope: cdk.Construct, id: string, private readonly __resources: string[], private readonly input: shapes.MachineLearningUpdateMlModelInput) {
    super(scope, id);
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
          MLModelId: this.input.mlModelId,
          MLModelName: this.input.mlModelName,
          ScoreThreshold: this.input.scoreThreshold,
        },
      },
    };
    const resource = new cr.AwsCustomResource(this, 'UpdateMLModel.MLModelId', props);
    return resource.getResponseField('MLModelId') as unknown as string;
  }

}

