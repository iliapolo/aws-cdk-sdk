/**
 * @schema AddTagsInput
 */
export interface AddTagsInput {
  /**
   * @schema AddTagsInput#Tags
   */
  readonly tags: Tag[];

  /**
   * @schema AddTagsInput#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema AddTagsInput#ResourceType
   */
  readonly resourceType: string;

}

/**
 * @schema AddTagsOutput
 */
export interface AddTagsOutput {
  /**
   * @schema AddTagsOutput#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema AddTagsOutput#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * @schema CreateBatchPredictionInput
 */
export interface CreateBatchPredictionInput {
  /**
   * @schema CreateBatchPredictionInput#BatchPredictionId
   */
  readonly batchPredictionId: string;

  /**
   * @schema CreateBatchPredictionInput#BatchPredictionName
   */
  readonly batchPredictionName?: string;

  /**
   * @schema CreateBatchPredictionInput#MLModelId
   */
  readonly mlModelId: string;

  /**
   * @schema CreateBatchPredictionInput#BatchPredictionDataSourceId
   */
  readonly batchPredictionDataSourceId: string;

  /**
   * @schema CreateBatchPredictionInput#OutputUri
   */
  readonly outputUri: string;

}

/**
 * @schema CreateBatchPredictionOutput
 */
export interface CreateBatchPredictionOutput {
  /**
   * @schema CreateBatchPredictionOutput#BatchPredictionId
   */
  readonly batchPredictionId?: string;

}

/**
 * @schema CreateDataSourceFromRdsInput
 */
export interface CreateDataSourceFromRdsInput {
  /**
   * @schema CreateDataSourceFromRdsInput#DataSourceId
   */
  readonly dataSourceId: string;

  /**
   * @schema CreateDataSourceFromRdsInput#DataSourceName
   */
  readonly dataSourceName?: string;

  /**
   * @schema CreateDataSourceFromRdsInput#RDSData
   */
  readonly rdsData: RdsDataSpec;

  /**
   * @schema CreateDataSourceFromRdsInput#RoleARN
   */
  readonly roleArn: string;

  /**
   * @schema CreateDataSourceFromRdsInput#ComputeStatistics
   */
  readonly computeStatistics?: boolean;

}

/**
 * @schema CreateDataSourceFromRdsOutput
 */
export interface CreateDataSourceFromRdsOutput {
  /**
   * @schema CreateDataSourceFromRdsOutput#DataSourceId
   */
  readonly dataSourceId?: string;

}

/**
 * @schema CreateDataSourceFromRedshiftInput
 */
export interface CreateDataSourceFromRedshiftInput {
  /**
   * @schema CreateDataSourceFromRedshiftInput#DataSourceId
   */
  readonly dataSourceId: string;

  /**
   * @schema CreateDataSourceFromRedshiftInput#DataSourceName
   */
  readonly dataSourceName?: string;

  /**
   * @schema CreateDataSourceFromRedshiftInput#DataSpec
   */
  readonly dataSpec: RedshiftDataSpec;

  /**
   * @schema CreateDataSourceFromRedshiftInput#RoleARN
   */
  readonly roleArn: string;

  /**
   * @schema CreateDataSourceFromRedshiftInput#ComputeStatistics
   */
  readonly computeStatistics?: boolean;

}

/**
 * @schema CreateDataSourceFromRedshiftOutput
 */
export interface CreateDataSourceFromRedshiftOutput {
  /**
   * @schema CreateDataSourceFromRedshiftOutput#DataSourceId
   */
  readonly dataSourceId?: string;

}

/**
 * @schema CreateDataSourceFromS3Input
 */
export interface CreateDataSourceFromS3Input {
  /**
   * @schema CreateDataSourceFromS3Input#DataSourceId
   */
  readonly dataSourceId: string;

  /**
   * @schema CreateDataSourceFromS3Input#DataSourceName
   */
  readonly dataSourceName?: string;

  /**
   * @schema CreateDataSourceFromS3Input#DataSpec
   */
  readonly dataSpec: S3DataSpec;

  /**
   * @schema CreateDataSourceFromS3Input#ComputeStatistics
   */
  readonly computeStatistics?: boolean;

}

/**
 * @schema CreateDataSourceFromS3Output
 */
export interface CreateDataSourceFromS3Output {
  /**
   * @schema CreateDataSourceFromS3Output#DataSourceId
   */
  readonly dataSourceId?: string;

}

/**
 * @schema CreateEvaluationInput
 */
export interface CreateEvaluationInput {
  /**
   * @schema CreateEvaluationInput#EvaluationId
   */
  readonly evaluationId: string;

  /**
   * @schema CreateEvaluationInput#EvaluationName
   */
  readonly evaluationName?: string;

  /**
   * @schema CreateEvaluationInput#MLModelId
   */
  readonly mlModelId: string;

  /**
   * @schema CreateEvaluationInput#EvaluationDataSourceId
   */
  readonly evaluationDataSourceId: string;

}

/**
 * @schema CreateEvaluationOutput
 */
export interface CreateEvaluationOutput {
  /**
   * @schema CreateEvaluationOutput#EvaluationId
   */
  readonly evaluationId?: string;

}

/**
 * @schema CreateMlModelInput
 */
export interface CreateMlModelInput {
  /**
   * @schema CreateMlModelInput#MLModelId
   */
  readonly mlModelId: string;

  /**
   * @schema CreateMlModelInput#MLModelName
   */
  readonly mlModelName?: string;

  /**
   * @schema CreateMlModelInput#MLModelType
   */
  readonly mlModelType: string;

  /**
   * @schema CreateMlModelInput#Parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema CreateMlModelInput#TrainingDataSourceId
   */
  readonly trainingDataSourceId: string;

  /**
   * @schema CreateMlModelInput#Recipe
   */
  readonly recipe?: string;

  /**
   * @schema CreateMlModelInput#RecipeUri
   */
  readonly recipeUri?: string;

}

/**
 * @schema CreateMlModelOutput
 */
export interface CreateMlModelOutput {
  /**
   * @schema CreateMlModelOutput#MLModelId
   */
  readonly mlModelId?: string;

}

/**
 * @schema CreateRealtimeEndpointInput
 */
export interface CreateRealtimeEndpointInput {
  /**
   * @schema CreateRealtimeEndpointInput#MLModelId
   */
  readonly mlModelId: string;

}

/**
 * @schema CreateRealtimeEndpointOutput
 */
export interface CreateRealtimeEndpointOutput {
  /**
   * @schema CreateRealtimeEndpointOutput#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema CreateRealtimeEndpointOutput#RealtimeEndpointInfo
   */
  readonly realtimeEndpointInfo?: RealtimeEndpointInfo;

}

/**
 * @schema DeleteBatchPredictionInput
 */
export interface DeleteBatchPredictionInput {
  /**
   * @schema DeleteBatchPredictionInput#BatchPredictionId
   */
  readonly batchPredictionId: string;

}

/**
 * @schema DeleteBatchPredictionOutput
 */
export interface DeleteBatchPredictionOutput {
  /**
   * @schema DeleteBatchPredictionOutput#BatchPredictionId
   */
  readonly batchPredictionId?: string;

}

/**
 * @schema DeleteDataSourceInput
 */
export interface DeleteDataSourceInput {
  /**
   * @schema DeleteDataSourceInput#DataSourceId
   */
  readonly dataSourceId: string;

}

/**
 * @schema DeleteDataSourceOutput
 */
export interface DeleteDataSourceOutput {
  /**
   * @schema DeleteDataSourceOutput#DataSourceId
   */
  readonly dataSourceId?: string;

}

/**
 * @schema DeleteEvaluationInput
 */
export interface DeleteEvaluationInput {
  /**
   * @schema DeleteEvaluationInput#EvaluationId
   */
  readonly evaluationId: string;

}

/**
 * @schema DeleteEvaluationOutput
 */
export interface DeleteEvaluationOutput {
  /**
   * @schema DeleteEvaluationOutput#EvaluationId
   */
  readonly evaluationId?: string;

}

/**
 * @schema DeleteMlModelInput
 */
export interface DeleteMlModelInput {
  /**
   * @schema DeleteMlModelInput#MLModelId
   */
  readonly mlModelId: string;

}

/**
 * @schema DeleteMlModelOutput
 */
export interface DeleteMlModelOutput {
  /**
   * @schema DeleteMlModelOutput#MLModelId
   */
  readonly mlModelId?: string;

}

/**
 * @schema DeleteRealtimeEndpointInput
 */
export interface DeleteRealtimeEndpointInput {
  /**
   * @schema DeleteRealtimeEndpointInput#MLModelId
   */
  readonly mlModelId: string;

}

/**
 * @schema DeleteRealtimeEndpointOutput
 */
export interface DeleteRealtimeEndpointOutput {
  /**
   * @schema DeleteRealtimeEndpointOutput#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema DeleteRealtimeEndpointOutput#RealtimeEndpointInfo
   */
  readonly realtimeEndpointInfo?: RealtimeEndpointInfo;

}

/**
 * @schema DeleteTagsInput
 */
export interface DeleteTagsInput {
  /**
   * @schema DeleteTagsInput#TagKeys
   */
  readonly tagKeys: string[];

  /**
   * @schema DeleteTagsInput#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema DeleteTagsInput#ResourceType
   */
  readonly resourceType: string;

}

/**
 * @schema DeleteTagsOutput
 */
export interface DeleteTagsOutput {
  /**
   * @schema DeleteTagsOutput#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema DeleteTagsOutput#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * @schema DescribeBatchPredictionsInput
 */
export interface DescribeBatchPredictionsInput {
  /**
   * @schema DescribeBatchPredictionsInput#FilterVariable
   */
  readonly filterVariable?: string;

  /**
   * @schema DescribeBatchPredictionsInput#EQ
   */
  readonly eq?: string;

  /**
   * @schema DescribeBatchPredictionsInput#GT
   */
  readonly gt?: string;

  /**
   * @schema DescribeBatchPredictionsInput#LT
   */
  readonly lt?: string;

  /**
   * @schema DescribeBatchPredictionsInput#GE
   */
  readonly ge?: string;

  /**
   * @schema DescribeBatchPredictionsInput#LE
   */
  readonly le?: string;

  /**
   * @schema DescribeBatchPredictionsInput#NE
   */
  readonly ne?: string;

  /**
   * @schema DescribeBatchPredictionsInput#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema DescribeBatchPredictionsInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema DescribeBatchPredictionsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeBatchPredictionsInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema DescribeBatchPredictionsOutput
 */
export interface DescribeBatchPredictionsOutput {
  /**
   * @schema DescribeBatchPredictionsOutput#Results
   */
  readonly results?: BatchPrediction[];

  /**
   * @schema DescribeBatchPredictionsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeDataSourcesInput
 */
export interface DescribeDataSourcesInput {
  /**
   * @schema DescribeDataSourcesInput#FilterVariable
   */
  readonly filterVariable?: string;

  /**
   * @schema DescribeDataSourcesInput#EQ
   */
  readonly eq?: string;

  /**
   * @schema DescribeDataSourcesInput#GT
   */
  readonly gt?: string;

  /**
   * @schema DescribeDataSourcesInput#LT
   */
  readonly lt?: string;

  /**
   * @schema DescribeDataSourcesInput#GE
   */
  readonly ge?: string;

  /**
   * @schema DescribeDataSourcesInput#LE
   */
  readonly le?: string;

  /**
   * @schema DescribeDataSourcesInput#NE
   */
  readonly ne?: string;

  /**
   * @schema DescribeDataSourcesInput#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema DescribeDataSourcesInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema DescribeDataSourcesInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeDataSourcesInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema DescribeDataSourcesOutput
 */
export interface DescribeDataSourcesOutput {
  /**
   * @schema DescribeDataSourcesOutput#Results
   */
  readonly results?: DataSource[];

  /**
   * @schema DescribeDataSourcesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeEvaluationsInput
 */
export interface DescribeEvaluationsInput {
  /**
   * @schema DescribeEvaluationsInput#FilterVariable
   */
  readonly filterVariable?: string;

  /**
   * @schema DescribeEvaluationsInput#EQ
   */
  readonly eq?: string;

  /**
   * @schema DescribeEvaluationsInput#GT
   */
  readonly gt?: string;

  /**
   * @schema DescribeEvaluationsInput#LT
   */
  readonly lt?: string;

  /**
   * @schema DescribeEvaluationsInput#GE
   */
  readonly ge?: string;

  /**
   * @schema DescribeEvaluationsInput#LE
   */
  readonly le?: string;

  /**
   * @schema DescribeEvaluationsInput#NE
   */
  readonly ne?: string;

  /**
   * @schema DescribeEvaluationsInput#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema DescribeEvaluationsInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema DescribeEvaluationsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeEvaluationsInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema DescribeEvaluationsOutput
 */
export interface DescribeEvaluationsOutput {
  /**
   * @schema DescribeEvaluationsOutput#Results
   */
  readonly results?: Evaluation[];

  /**
   * @schema DescribeEvaluationsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeMlModelsInput
 */
export interface DescribeMlModelsInput {
  /**
   * @schema DescribeMlModelsInput#FilterVariable
   */
  readonly filterVariable?: string;

  /**
   * @schema DescribeMlModelsInput#EQ
   */
  readonly eq?: string;

  /**
   * @schema DescribeMlModelsInput#GT
   */
  readonly gt?: string;

  /**
   * @schema DescribeMlModelsInput#LT
   */
  readonly lt?: string;

  /**
   * @schema DescribeMlModelsInput#GE
   */
  readonly ge?: string;

  /**
   * @schema DescribeMlModelsInput#LE
   */
  readonly le?: string;

  /**
   * @schema DescribeMlModelsInput#NE
   */
  readonly ne?: string;

  /**
   * @schema DescribeMlModelsInput#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema DescribeMlModelsInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema DescribeMlModelsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeMlModelsInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema DescribeMlModelsOutput
 */
export interface DescribeMlModelsOutput {
  /**
   * @schema DescribeMlModelsOutput#Results
   */
  readonly results?: MlModel[];

  /**
   * @schema DescribeMlModelsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeTagsInput
 */
export interface DescribeTagsInput {
  /**
   * @schema DescribeTagsInput#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema DescribeTagsInput#ResourceType
   */
  readonly resourceType: string;

}

/**
 * @schema DescribeTagsOutput
 */
export interface DescribeTagsOutput {
  /**
   * @schema DescribeTagsOutput#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema DescribeTagsOutput#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema DescribeTagsOutput#Tags
   */
  readonly tags?: Tag[];

}

/**
 * @schema GetBatchPredictionInput
 */
export interface GetBatchPredictionInput {
  /**
   * @schema GetBatchPredictionInput#BatchPredictionId
   */
  readonly batchPredictionId: string;

}

/**
 * @schema GetBatchPredictionOutput
 */
export interface GetBatchPredictionOutput {
  /**
   * @schema GetBatchPredictionOutput#BatchPredictionId
   */
  readonly batchPredictionId?: string;

  /**
   * @schema GetBatchPredictionOutput#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema GetBatchPredictionOutput#BatchPredictionDataSourceId
   */
  readonly batchPredictionDataSourceId?: string;

  /**
   * @schema GetBatchPredictionOutput#InputDataLocationS3
   */
  readonly inputDataLocationS3?: string;

  /**
   * @schema GetBatchPredictionOutput#CreatedByIamUser
   */
  readonly createdByIamUser?: string;

  /**
   * @schema GetBatchPredictionOutput#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema GetBatchPredictionOutput#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema GetBatchPredictionOutput#Name
   */
  readonly name?: string;

  /**
   * @schema GetBatchPredictionOutput#Status
   */
  readonly status?: string;

  /**
   * @schema GetBatchPredictionOutput#OutputUri
   */
  readonly outputUri?: string;

  /**
   * @schema GetBatchPredictionOutput#LogUri
   */
  readonly logUri?: string;

  /**
   * @schema GetBatchPredictionOutput#Message
   */
  readonly message?: string;

  /**
   * @schema GetBatchPredictionOutput#ComputeTime
   */
  readonly computeTime?: number;

  /**
   * @schema GetBatchPredictionOutput#FinishedAt
   */
  readonly finishedAt?: string;

  /**
   * @schema GetBatchPredictionOutput#StartedAt
   */
  readonly startedAt?: string;

  /**
   * @schema GetBatchPredictionOutput#TotalRecordCount
   */
  readonly totalRecordCount?: number;

  /**
   * @schema GetBatchPredictionOutput#InvalidRecordCount
   */
  readonly invalidRecordCount?: number;

}

/**
 * @schema GetDataSourceInput
 */
export interface GetDataSourceInput {
  /**
   * @schema GetDataSourceInput#DataSourceId
   */
  readonly dataSourceId: string;

  /**
   * @schema GetDataSourceInput#Verbose
   */
  readonly verbose?: boolean;

}

/**
 * @schema GetDataSourceOutput
 */
export interface GetDataSourceOutput {
  /**
   * @schema GetDataSourceOutput#DataSourceId
   */
  readonly dataSourceId?: string;

  /**
   * @schema GetDataSourceOutput#DataLocationS3
   */
  readonly dataLocationS3?: string;

  /**
   * @schema GetDataSourceOutput#DataRearrangement
   */
  readonly dataRearrangement?: string;

  /**
   * @schema GetDataSourceOutput#CreatedByIamUser
   */
  readonly createdByIamUser?: string;

  /**
   * @schema GetDataSourceOutput#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema GetDataSourceOutput#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema GetDataSourceOutput#DataSizeInBytes
   */
  readonly dataSizeInBytes?: number;

  /**
   * @schema GetDataSourceOutput#NumberOfFiles
   */
  readonly numberOfFiles?: number;

  /**
   * @schema GetDataSourceOutput#Name
   */
  readonly name?: string;

  /**
   * @schema GetDataSourceOutput#Status
   */
  readonly status?: string;

  /**
   * @schema GetDataSourceOutput#LogUri
   */
  readonly logUri?: string;

  /**
   * @schema GetDataSourceOutput#Message
   */
  readonly message?: string;

  /**
   * @schema GetDataSourceOutput#RedshiftMetadata
   */
  readonly redshiftMetadata?: RedshiftMetadata;

  /**
   * @schema GetDataSourceOutput#RDSMetadata
   */
  readonly rdsMetadata?: RdsMetadata;

  /**
   * @schema GetDataSourceOutput#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema GetDataSourceOutput#ComputeStatistics
   */
  readonly computeStatistics?: boolean;

  /**
   * @schema GetDataSourceOutput#ComputeTime
   */
  readonly computeTime?: number;

  /**
   * @schema GetDataSourceOutput#FinishedAt
   */
  readonly finishedAt?: string;

  /**
   * @schema GetDataSourceOutput#StartedAt
   */
  readonly startedAt?: string;

  /**
   * @schema GetDataSourceOutput#DataSourceSchema
   */
  readonly dataSourceSchema?: string;

}

/**
 * @schema GetEvaluationInput
 */
export interface GetEvaluationInput {
  /**
   * @schema GetEvaluationInput#EvaluationId
   */
  readonly evaluationId: string;

}

/**
 * @schema GetEvaluationOutput
 */
export interface GetEvaluationOutput {
  /**
   * @schema GetEvaluationOutput#EvaluationId
   */
  readonly evaluationId?: string;

  /**
   * @schema GetEvaluationOutput#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema GetEvaluationOutput#EvaluationDataSourceId
   */
  readonly evaluationDataSourceId?: string;

  /**
   * @schema GetEvaluationOutput#InputDataLocationS3
   */
  readonly inputDataLocationS3?: string;

  /**
   * @schema GetEvaluationOutput#CreatedByIamUser
   */
  readonly createdByIamUser?: string;

  /**
   * @schema GetEvaluationOutput#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema GetEvaluationOutput#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema GetEvaluationOutput#Name
   */
  readonly name?: string;

  /**
   * @schema GetEvaluationOutput#Status
   */
  readonly status?: string;

  /**
   * @schema GetEvaluationOutput#PerformanceMetrics
   */
  readonly performanceMetrics?: PerformanceMetrics;

  /**
   * @schema GetEvaluationOutput#LogUri
   */
  readonly logUri?: string;

  /**
   * @schema GetEvaluationOutput#Message
   */
  readonly message?: string;

  /**
   * @schema GetEvaluationOutput#ComputeTime
   */
  readonly computeTime?: number;

  /**
   * @schema GetEvaluationOutput#FinishedAt
   */
  readonly finishedAt?: string;

  /**
   * @schema GetEvaluationOutput#StartedAt
   */
  readonly startedAt?: string;

}

/**
 * @schema GetMlModelInput
 */
export interface GetMlModelInput {
  /**
   * @schema GetMlModelInput#MLModelId
   */
  readonly mlModelId: string;

  /**
   * @schema GetMlModelInput#Verbose
   */
  readonly verbose?: boolean;

}

/**
 * @schema GetMlModelOutput
 */
export interface GetMlModelOutput {
  /**
   * @schema GetMlModelOutput#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema GetMlModelOutput#TrainingDataSourceId
   */
  readonly trainingDataSourceId?: string;

  /**
   * @schema GetMlModelOutput#CreatedByIamUser
   */
  readonly createdByIamUser?: string;

  /**
   * @schema GetMlModelOutput#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema GetMlModelOutput#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema GetMlModelOutput#Name
   */
  readonly name?: string;

  /**
   * @schema GetMlModelOutput#Status
   */
  readonly status?: string;

  /**
   * @schema GetMlModelOutput#SizeInBytes
   */
  readonly sizeInBytes?: number;

  /**
   * @schema GetMlModelOutput#EndpointInfo
   */
  readonly endpointInfo?: RealtimeEndpointInfo;

  /**
   * @schema GetMlModelOutput#TrainingParameters
   */
  readonly trainingParameters?: { [key: string]: string };

  /**
   * @schema GetMlModelOutput#InputDataLocationS3
   */
  readonly inputDataLocationS3?: string;

  /**
   * @schema GetMlModelOutput#MLModelType
   */
  readonly mlModelType?: string;

  /**
   * @schema GetMlModelOutput#ScoreThreshold
   */
  readonly scoreThreshold?: number;

  /**
   * @schema GetMlModelOutput#ScoreThresholdLastUpdatedAt
   */
  readonly scoreThresholdLastUpdatedAt?: string;

  /**
   * @schema GetMlModelOutput#LogUri
   */
  readonly logUri?: string;

  /**
   * @schema GetMlModelOutput#Message
   */
  readonly message?: string;

  /**
   * @schema GetMlModelOutput#ComputeTime
   */
  readonly computeTime?: number;

  /**
   * @schema GetMlModelOutput#FinishedAt
   */
  readonly finishedAt?: string;

  /**
   * @schema GetMlModelOutput#StartedAt
   */
  readonly startedAt?: string;

  /**
   * @schema GetMlModelOutput#Recipe
   */
  readonly recipe?: string;

  /**
   * @schema GetMlModelOutput#Schema
   */
  readonly schema?: string;

}

/**
 * @schema PredictInput
 */
export interface PredictInput {
  /**
   * @schema PredictInput#MLModelId
   */
  readonly mlModelId: string;

  /**
   * @schema PredictInput#Record
   */
  readonly record: { [key: string]: string };

  /**
   * @schema PredictInput#PredictEndpoint
   */
  readonly predictEndpoint: string;

}

/**
 * @schema PredictOutput
 */
export interface PredictOutput {
  /**
   * @schema PredictOutput#Prediction
   */
  readonly prediction?: Prediction;

}

/**
 * @schema UpdateBatchPredictionInput
 */
export interface UpdateBatchPredictionInput {
  /**
   * @schema UpdateBatchPredictionInput#BatchPredictionId
   */
  readonly batchPredictionId: string;

  /**
   * @schema UpdateBatchPredictionInput#BatchPredictionName
   */
  readonly batchPredictionName: string;

}

/**
 * @schema UpdateBatchPredictionOutput
 */
export interface UpdateBatchPredictionOutput {
  /**
   * @schema UpdateBatchPredictionOutput#BatchPredictionId
   */
  readonly batchPredictionId?: string;

}

/**
 * @schema UpdateDataSourceInput
 */
export interface UpdateDataSourceInput {
  /**
   * @schema UpdateDataSourceInput#DataSourceId
   */
  readonly dataSourceId: string;

  /**
   * @schema UpdateDataSourceInput#DataSourceName
   */
  readonly dataSourceName: string;

}

/**
 * @schema UpdateDataSourceOutput
 */
export interface UpdateDataSourceOutput {
  /**
   * @schema UpdateDataSourceOutput#DataSourceId
   */
  readonly dataSourceId?: string;

}

/**
 * @schema UpdateEvaluationInput
 */
export interface UpdateEvaluationInput {
  /**
   * @schema UpdateEvaluationInput#EvaluationId
   */
  readonly evaluationId: string;

  /**
   * @schema UpdateEvaluationInput#EvaluationName
   */
  readonly evaluationName: string;

}

/**
 * @schema UpdateEvaluationOutput
 */
export interface UpdateEvaluationOutput {
  /**
   * @schema UpdateEvaluationOutput#EvaluationId
   */
  readonly evaluationId?: string;

}

/**
 * @schema UpdateMlModelInput
 */
export interface UpdateMlModelInput {
  /**
   * @schema UpdateMlModelInput#MLModelId
   */
  readonly mlModelId: string;

  /**
   * @schema UpdateMlModelInput#MLModelName
   */
  readonly mlModelName?: string;

  /**
   * @schema UpdateMlModelInput#ScoreThreshold
   */
  readonly scoreThreshold?: number;

}

/**
 * @schema UpdateMlModelOutput
 */
export interface UpdateMlModelOutput {
  /**
   * @schema UpdateMlModelOutput#MLModelId
   */
  readonly mlModelId?: string;

}

/**
 * @schema Tag
 */
export interface Tag {
  /**
   * @schema Tag#Key
   */
  readonly key?: string;

  /**
   * @schema Tag#Value
   */
  readonly value?: string;

}

/**
 * @schema RdsDataSpec
 */
export interface RdsDataSpec {
  /**
   * @schema RdsDataSpec#DatabaseInformation
   */
  readonly databaseInformation: RdsDatabase;

  /**
   * @schema RdsDataSpec#SelectSqlQuery
   */
  readonly selectSqlQuery: string;

  /**
   * @schema RdsDataSpec#DatabaseCredentials
   */
  readonly databaseCredentials: RdsDatabaseCredentials;

  /**
   * @schema RdsDataSpec#S3StagingLocation
   */
  readonly s3StagingLocation: string;

  /**
   * @schema RdsDataSpec#DataRearrangement
   */
  readonly dataRearrangement?: string;

  /**
   * @schema RdsDataSpec#DataSchema
   */
  readonly dataSchema?: string;

  /**
   * @schema RdsDataSpec#DataSchemaUri
   */
  readonly dataSchemaUri?: string;

  /**
   * @schema RdsDataSpec#ResourceRole
   */
  readonly resourceRole: string;

  /**
   * @schema RdsDataSpec#ServiceRole
   */
  readonly serviceRole: string;

  /**
   * @schema RdsDataSpec#SubnetId
   */
  readonly subnetId: string;

  /**
   * @schema RdsDataSpec#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

}

/**
 * @schema RedshiftDataSpec
 */
export interface RedshiftDataSpec {
  /**
   * @schema RedshiftDataSpec#DatabaseInformation
   */
  readonly databaseInformation: RedshiftDatabase;

  /**
   * @schema RedshiftDataSpec#SelectSqlQuery
   */
  readonly selectSqlQuery: string;

  /**
   * @schema RedshiftDataSpec#DatabaseCredentials
   */
  readonly databaseCredentials: RedshiftDatabaseCredentials;

  /**
   * @schema RedshiftDataSpec#S3StagingLocation
   */
  readonly s3StagingLocation: string;

  /**
   * @schema RedshiftDataSpec#DataRearrangement
   */
  readonly dataRearrangement?: string;

  /**
   * @schema RedshiftDataSpec#DataSchema
   */
  readonly dataSchema?: string;

  /**
   * @schema RedshiftDataSpec#DataSchemaUri
   */
  readonly dataSchemaUri?: string;

}

/**
 * @schema S3DataSpec
 */
export interface S3DataSpec {
  /**
   * @schema S3DataSpec#DataLocationS3
   */
  readonly dataLocationS3: string;

  /**
   * @schema S3DataSpec#DataRearrangement
   */
  readonly dataRearrangement?: string;

  /**
   * @schema S3DataSpec#DataSchema
   */
  readonly dataSchema?: string;

  /**
   * @schema S3DataSpec#DataSchemaLocationS3
   */
  readonly dataSchemaLocationS3?: string;

}

/**
 * @schema RealtimeEndpointInfo
 */
export interface RealtimeEndpointInfo {
  /**
   * @schema RealtimeEndpointInfo#PeakRequestsPerSecond
   */
  readonly peakRequestsPerSecond?: number;

  /**
   * @schema RealtimeEndpointInfo#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema RealtimeEndpointInfo#EndpointUrl
   */
  readonly endpointUrl?: string;

  /**
   * @schema RealtimeEndpointInfo#EndpointStatus
   */
  readonly endpointStatus?: string;

}

/**
 * @schema BatchPrediction
 */
export interface BatchPrediction {
  /**
   * @schema BatchPrediction#BatchPredictionId
   */
  readonly batchPredictionId?: string;

  /**
   * @schema BatchPrediction#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema BatchPrediction#BatchPredictionDataSourceId
   */
  readonly batchPredictionDataSourceId?: string;

  /**
   * @schema BatchPrediction#InputDataLocationS3
   */
  readonly inputDataLocationS3?: string;

  /**
   * @schema BatchPrediction#CreatedByIamUser
   */
  readonly createdByIamUser?: string;

  /**
   * @schema BatchPrediction#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema BatchPrediction#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema BatchPrediction#Name
   */
  readonly name?: string;

  /**
   * @schema BatchPrediction#Status
   */
  readonly status?: string;

  /**
   * @schema BatchPrediction#OutputUri
   */
  readonly outputUri?: string;

  /**
   * @schema BatchPrediction#Message
   */
  readonly message?: string;

  /**
   * @schema BatchPrediction#ComputeTime
   */
  readonly computeTime?: number;

  /**
   * @schema BatchPrediction#FinishedAt
   */
  readonly finishedAt?: string;

  /**
   * @schema BatchPrediction#StartedAt
   */
  readonly startedAt?: string;

  /**
   * @schema BatchPrediction#TotalRecordCount
   */
  readonly totalRecordCount?: number;

  /**
   * @schema BatchPrediction#InvalidRecordCount
   */
  readonly invalidRecordCount?: number;

}

/**
 * @schema DataSource
 */
export interface DataSource {
  /**
   * @schema DataSource#DataSourceId
   */
  readonly dataSourceId?: string;

  /**
   * @schema DataSource#DataLocationS3
   */
  readonly dataLocationS3?: string;

  /**
   * @schema DataSource#DataRearrangement
   */
  readonly dataRearrangement?: string;

  /**
   * @schema DataSource#CreatedByIamUser
   */
  readonly createdByIamUser?: string;

  /**
   * @schema DataSource#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema DataSource#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema DataSource#DataSizeInBytes
   */
  readonly dataSizeInBytes?: number;

  /**
   * @schema DataSource#NumberOfFiles
   */
  readonly numberOfFiles?: number;

  /**
   * @schema DataSource#Name
   */
  readonly name?: string;

  /**
   * @schema DataSource#Status
   */
  readonly status?: string;

  /**
   * @schema DataSource#Message
   */
  readonly message?: string;

  /**
   * @schema DataSource#RedshiftMetadata
   */
  readonly redshiftMetadata?: RedshiftMetadata;

  /**
   * @schema DataSource#RDSMetadata
   */
  readonly rdsMetadata?: RdsMetadata;

  /**
   * @schema DataSource#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema DataSource#ComputeStatistics
   */
  readonly computeStatistics?: boolean;

  /**
   * @schema DataSource#ComputeTime
   */
  readonly computeTime?: number;

  /**
   * @schema DataSource#FinishedAt
   */
  readonly finishedAt?: string;

  /**
   * @schema DataSource#StartedAt
   */
  readonly startedAt?: string;

}

/**
 * @schema Evaluation
 */
export interface Evaluation {
  /**
   * @schema Evaluation#EvaluationId
   */
  readonly evaluationId?: string;

  /**
   * @schema Evaluation#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema Evaluation#EvaluationDataSourceId
   */
  readonly evaluationDataSourceId?: string;

  /**
   * @schema Evaluation#InputDataLocationS3
   */
  readonly inputDataLocationS3?: string;

  /**
   * @schema Evaluation#CreatedByIamUser
   */
  readonly createdByIamUser?: string;

  /**
   * @schema Evaluation#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema Evaluation#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema Evaluation#Name
   */
  readonly name?: string;

  /**
   * @schema Evaluation#Status
   */
  readonly status?: string;

  /**
   * @schema Evaluation#PerformanceMetrics
   */
  readonly performanceMetrics?: PerformanceMetrics;

  /**
   * @schema Evaluation#Message
   */
  readonly message?: string;

  /**
   * @schema Evaluation#ComputeTime
   */
  readonly computeTime?: number;

  /**
   * @schema Evaluation#FinishedAt
   */
  readonly finishedAt?: string;

  /**
   * @schema Evaluation#StartedAt
   */
  readonly startedAt?: string;

}

/**
 * @schema MlModel
 */
export interface MlModel {
  /**
   * @schema MlModel#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema MlModel#TrainingDataSourceId
   */
  readonly trainingDataSourceId?: string;

  /**
   * @schema MlModel#CreatedByIamUser
   */
  readonly createdByIamUser?: string;

  /**
   * @schema MlModel#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MlModel#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema MlModel#Name
   */
  readonly name?: string;

  /**
   * @schema MlModel#Status
   */
  readonly status?: string;

  /**
   * @schema MlModel#SizeInBytes
   */
  readonly sizeInBytes?: number;

  /**
   * @schema MlModel#EndpointInfo
   */
  readonly endpointInfo?: RealtimeEndpointInfo;

  /**
   * @schema MlModel#TrainingParameters
   */
  readonly trainingParameters?: { [key: string]: string };

  /**
   * @schema MlModel#InputDataLocationS3
   */
  readonly inputDataLocationS3?: string;

  /**
   * @schema MlModel#Algorithm
   */
  readonly algorithm?: string;

  /**
   * @schema MlModel#MLModelType
   */
  readonly mlModelType?: string;

  /**
   * @schema MlModel#ScoreThreshold
   */
  readonly scoreThreshold?: number;

  /**
   * @schema MlModel#ScoreThresholdLastUpdatedAt
   */
  readonly scoreThresholdLastUpdatedAt?: string;

  /**
   * @schema MlModel#Message
   */
  readonly message?: string;

  /**
   * @schema MlModel#ComputeTime
   */
  readonly computeTime?: number;

  /**
   * @schema MlModel#FinishedAt
   */
  readonly finishedAt?: string;

  /**
   * @schema MlModel#StartedAt
   */
  readonly startedAt?: string;

}

/**
 * @schema RedshiftMetadata
 */
export interface RedshiftMetadata {
  /**
   * @schema RedshiftMetadata#RedshiftDatabase
   */
  readonly redshiftDatabase?: RedshiftDatabase;

  /**
   * @schema RedshiftMetadata#DatabaseUserName
   */
  readonly databaseUserName?: string;

  /**
   * @schema RedshiftMetadata#SelectSqlQuery
   */
  readonly selectSqlQuery?: string;

}

/**
 * @schema RdsMetadata
 */
export interface RdsMetadata {
  /**
   * @schema RdsMetadata#Database
   */
  readonly database?: RdsDatabase;

  /**
   * @schema RdsMetadata#DatabaseUserName
   */
  readonly databaseUserName?: string;

  /**
   * @schema RdsMetadata#SelectSqlQuery
   */
  readonly selectSqlQuery?: string;

  /**
   * @schema RdsMetadata#ResourceRole
   */
  readonly resourceRole?: string;

  /**
   * @schema RdsMetadata#ServiceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema RdsMetadata#DataPipelineId
   */
  readonly dataPipelineId?: string;

}

/**
 * @schema PerformanceMetrics
 */
export interface PerformanceMetrics {
  /**
   * @schema PerformanceMetrics#Properties
   */
  readonly properties?: { [key: string]: string };

}

/**
 * @schema Prediction
 */
export interface Prediction {
  /**
   * @schema Prediction#predictedLabel
   */
  readonly predictedLabel?: string;

  /**
   * @schema Prediction#predictedValue
   */
  readonly predictedValue?: number;

  /**
   * @schema Prediction#predictedScores
   */
  readonly predictedScores?: { [key: string]: number };

  /**
   * @schema Prediction#details
   */
  readonly details?: { [key: string]: string };

}

/**
 * @schema RdsDatabase
 */
export interface RdsDatabase {
  /**
   * @schema RdsDatabase#InstanceIdentifier
   */
  readonly instanceIdentifier: string;

  /**
   * @schema RdsDatabase#DatabaseName
   */
  readonly databaseName: string;

}

/**
 * @schema RdsDatabaseCredentials
 */
export interface RdsDatabaseCredentials {
  /**
   * @schema RdsDatabaseCredentials#Username
   */
  readonly username: string;

  /**
   * @schema RdsDatabaseCredentials#Password
   */
  readonly password: string;

}

/**
 * @schema RedshiftDatabase
 */
export interface RedshiftDatabase {
  /**
   * @schema RedshiftDatabase#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema RedshiftDatabase#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

}

/**
 * @schema RedshiftDatabaseCredentials
 */
export interface RedshiftDatabaseCredentials {
  /**
   * @schema RedshiftDatabaseCredentials#Username
   */
  readonly username: string;

  /**
   * @schema RedshiftDatabaseCredentials#Password
   */
  readonly password: string;

}
