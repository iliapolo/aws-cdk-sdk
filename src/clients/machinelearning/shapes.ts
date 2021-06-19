/**
 * @schema MachineLearningAddTagsInput
 */
export interface MachineLearningAddTagsInput {
  /**
   * @schema MachineLearningAddTagsInput#Tags
   */
  readonly tags: MachineLearningTag[];

  /**
   * @schema MachineLearningAddTagsInput#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema MachineLearningAddTagsInput#ResourceType
   */
  readonly resourceType: string;

}

/**
 * @schema MachineLearningAddTagsOutput
 */
export interface MachineLearningAddTagsOutput {
  /**
   * @schema MachineLearningAddTagsOutput#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema MachineLearningAddTagsOutput#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * @schema MachineLearningCreateBatchPredictionInput
 */
export interface MachineLearningCreateBatchPredictionInput {
  /**
   * @schema MachineLearningCreateBatchPredictionInput#BatchPredictionId
   */
  readonly batchPredictionId: string;

  /**
   * @schema MachineLearningCreateBatchPredictionInput#BatchPredictionName
   */
  readonly batchPredictionName?: string;

  /**
   * @schema MachineLearningCreateBatchPredictionInput#MLModelId
   */
  readonly mlModelId: string;

  /**
   * @schema MachineLearningCreateBatchPredictionInput#BatchPredictionDataSourceId
   */
  readonly batchPredictionDataSourceId: string;

  /**
   * @schema MachineLearningCreateBatchPredictionInput#OutputUri
   */
  readonly outputUri: string;

}

/**
 * @schema MachineLearningCreateBatchPredictionOutput
 */
export interface MachineLearningCreateBatchPredictionOutput {
  /**
   * @schema MachineLearningCreateBatchPredictionOutput#BatchPredictionId
   */
  readonly batchPredictionId?: string;

}

/**
 * @schema MachineLearningCreateDataSourceFromRdsInput
 */
export interface MachineLearningCreateDataSourceFromRdsInput {
  /**
   * @schema MachineLearningCreateDataSourceFromRdsInput#DataSourceId
   */
  readonly dataSourceId: string;

  /**
   * @schema MachineLearningCreateDataSourceFromRdsInput#DataSourceName
   */
  readonly dataSourceName?: string;

  /**
   * @schema MachineLearningCreateDataSourceFromRdsInput#RDSData
   */
  readonly rdsData: MachineLearningRdsDataSpec;

  /**
   * @schema MachineLearningCreateDataSourceFromRdsInput#RoleARN
   */
  readonly roleArn: string;

  /**
   * @schema MachineLearningCreateDataSourceFromRdsInput#ComputeStatistics
   */
  readonly computeStatistics?: boolean;

}

/**
 * @schema MachineLearningCreateDataSourceFromRdsOutput
 */
export interface MachineLearningCreateDataSourceFromRdsOutput {
  /**
   * @schema MachineLearningCreateDataSourceFromRdsOutput#DataSourceId
   */
  readonly dataSourceId?: string;

}

/**
 * @schema MachineLearningCreateDataSourceFromRedshiftInput
 */
export interface MachineLearningCreateDataSourceFromRedshiftInput {
  /**
   * @schema MachineLearningCreateDataSourceFromRedshiftInput#DataSourceId
   */
  readonly dataSourceId: string;

  /**
   * @schema MachineLearningCreateDataSourceFromRedshiftInput#DataSourceName
   */
  readonly dataSourceName?: string;

  /**
   * @schema MachineLearningCreateDataSourceFromRedshiftInput#DataSpec
   */
  readonly dataSpec: MachineLearningRedshiftDataSpec;

  /**
   * @schema MachineLearningCreateDataSourceFromRedshiftInput#RoleARN
   */
  readonly roleArn: string;

  /**
   * @schema MachineLearningCreateDataSourceFromRedshiftInput#ComputeStatistics
   */
  readonly computeStatistics?: boolean;

}

/**
 * @schema MachineLearningCreateDataSourceFromRedshiftOutput
 */
export interface MachineLearningCreateDataSourceFromRedshiftOutput {
  /**
   * @schema MachineLearningCreateDataSourceFromRedshiftOutput#DataSourceId
   */
  readonly dataSourceId?: string;

}

/**
 * @schema MachineLearningCreateDataSourceFromS3Input
 */
export interface MachineLearningCreateDataSourceFromS3Input {
  /**
   * @schema MachineLearningCreateDataSourceFromS3Input#DataSourceId
   */
  readonly dataSourceId: string;

  /**
   * @schema MachineLearningCreateDataSourceFromS3Input#DataSourceName
   */
  readonly dataSourceName?: string;

  /**
   * @schema MachineLearningCreateDataSourceFromS3Input#DataSpec
   */
  readonly dataSpec: MachineLearningS3DataSpec;

  /**
   * @schema MachineLearningCreateDataSourceFromS3Input#ComputeStatistics
   */
  readonly computeStatistics?: boolean;

}

/**
 * @schema MachineLearningCreateDataSourceFromS3Output
 */
export interface MachineLearningCreateDataSourceFromS3Output {
  /**
   * @schema MachineLearningCreateDataSourceFromS3Output#DataSourceId
   */
  readonly dataSourceId?: string;

}

/**
 * @schema MachineLearningCreateEvaluationInput
 */
export interface MachineLearningCreateEvaluationInput {
  /**
   * @schema MachineLearningCreateEvaluationInput#EvaluationId
   */
  readonly evaluationId: string;

  /**
   * @schema MachineLearningCreateEvaluationInput#EvaluationName
   */
  readonly evaluationName?: string;

  /**
   * @schema MachineLearningCreateEvaluationInput#MLModelId
   */
  readonly mlModelId: string;

  /**
   * @schema MachineLearningCreateEvaluationInput#EvaluationDataSourceId
   */
  readonly evaluationDataSourceId: string;

}

/**
 * @schema MachineLearningCreateEvaluationOutput
 */
export interface MachineLearningCreateEvaluationOutput {
  /**
   * @schema MachineLearningCreateEvaluationOutput#EvaluationId
   */
  readonly evaluationId?: string;

}

/**
 * @schema MachineLearningCreateMlModelInput
 */
export interface MachineLearningCreateMlModelInput {
  /**
   * @schema MachineLearningCreateMlModelInput#MLModelId
   */
  readonly mlModelId: string;

  /**
   * @schema MachineLearningCreateMlModelInput#MLModelName
   */
  readonly mlModelName?: string;

  /**
   * @schema MachineLearningCreateMlModelInput#MLModelType
   */
  readonly mlModelType: string;

  /**
   * @schema MachineLearningCreateMlModelInput#Parameters
   */
  readonly parameters?: { [key: string]: string };

  /**
   * @schema MachineLearningCreateMlModelInput#TrainingDataSourceId
   */
  readonly trainingDataSourceId: string;

  /**
   * @schema MachineLearningCreateMlModelInput#Recipe
   */
  readonly recipe?: string;

  /**
   * @schema MachineLearningCreateMlModelInput#RecipeUri
   */
  readonly recipeUri?: string;

}

/**
 * @schema MachineLearningCreateMlModelOutput
 */
export interface MachineLearningCreateMlModelOutput {
  /**
   * @schema MachineLearningCreateMlModelOutput#MLModelId
   */
  readonly mlModelId?: string;

}

/**
 * @schema MachineLearningCreateRealtimeEndpointInput
 */
export interface MachineLearningCreateRealtimeEndpointInput {
  /**
   * @schema MachineLearningCreateRealtimeEndpointInput#MLModelId
   */
  readonly mlModelId: string;

}

/**
 * @schema MachineLearningCreateRealtimeEndpointOutput
 */
export interface MachineLearningCreateRealtimeEndpointOutput {
  /**
   * @schema MachineLearningCreateRealtimeEndpointOutput#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema MachineLearningCreateRealtimeEndpointOutput#RealtimeEndpointInfo
   */
  readonly realtimeEndpointInfo?: MachineLearningRealtimeEndpointInfo;

}

/**
 * @schema MachineLearningDeleteBatchPredictionInput
 */
export interface MachineLearningDeleteBatchPredictionInput {
  /**
   * @schema MachineLearningDeleteBatchPredictionInput#BatchPredictionId
   */
  readonly batchPredictionId: string;

}

/**
 * @schema MachineLearningDeleteBatchPredictionOutput
 */
export interface MachineLearningDeleteBatchPredictionOutput {
  /**
   * @schema MachineLearningDeleteBatchPredictionOutput#BatchPredictionId
   */
  readonly batchPredictionId?: string;

}

/**
 * @schema MachineLearningDeleteDataSourceInput
 */
export interface MachineLearningDeleteDataSourceInput {
  /**
   * @schema MachineLearningDeleteDataSourceInput#DataSourceId
   */
  readonly dataSourceId: string;

}

/**
 * @schema MachineLearningDeleteDataSourceOutput
 */
export interface MachineLearningDeleteDataSourceOutput {
  /**
   * @schema MachineLearningDeleteDataSourceOutput#DataSourceId
   */
  readonly dataSourceId?: string;

}

/**
 * @schema MachineLearningDeleteEvaluationInput
 */
export interface MachineLearningDeleteEvaluationInput {
  /**
   * @schema MachineLearningDeleteEvaluationInput#EvaluationId
   */
  readonly evaluationId: string;

}

/**
 * @schema MachineLearningDeleteEvaluationOutput
 */
export interface MachineLearningDeleteEvaluationOutput {
  /**
   * @schema MachineLearningDeleteEvaluationOutput#EvaluationId
   */
  readonly evaluationId?: string;

}

/**
 * @schema MachineLearningDeleteMlModelInput
 */
export interface MachineLearningDeleteMlModelInput {
  /**
   * @schema MachineLearningDeleteMlModelInput#MLModelId
   */
  readonly mlModelId: string;

}

/**
 * @schema MachineLearningDeleteMlModelOutput
 */
export interface MachineLearningDeleteMlModelOutput {
  /**
   * @schema MachineLearningDeleteMlModelOutput#MLModelId
   */
  readonly mlModelId?: string;

}

/**
 * @schema MachineLearningDeleteRealtimeEndpointInput
 */
export interface MachineLearningDeleteRealtimeEndpointInput {
  /**
   * @schema MachineLearningDeleteRealtimeEndpointInput#MLModelId
   */
  readonly mlModelId: string;

}

/**
 * @schema MachineLearningDeleteRealtimeEndpointOutput
 */
export interface MachineLearningDeleteRealtimeEndpointOutput {
  /**
   * @schema MachineLearningDeleteRealtimeEndpointOutput#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema MachineLearningDeleteRealtimeEndpointOutput#RealtimeEndpointInfo
   */
  readonly realtimeEndpointInfo?: MachineLearningRealtimeEndpointInfo;

}

/**
 * @schema MachineLearningDeleteTagsInput
 */
export interface MachineLearningDeleteTagsInput {
  /**
   * @schema MachineLearningDeleteTagsInput#TagKeys
   */
  readonly tagKeys: string[];

  /**
   * @schema MachineLearningDeleteTagsInput#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema MachineLearningDeleteTagsInput#ResourceType
   */
  readonly resourceType: string;

}

/**
 * @schema MachineLearningDeleteTagsOutput
 */
export interface MachineLearningDeleteTagsOutput {
  /**
   * @schema MachineLearningDeleteTagsOutput#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema MachineLearningDeleteTagsOutput#ResourceType
   */
  readonly resourceType?: string;

}

/**
 * @schema MachineLearningDescribeBatchPredictionsInput
 */
export interface MachineLearningDescribeBatchPredictionsInput {
  /**
   * @schema MachineLearningDescribeBatchPredictionsInput#FilterVariable
   */
  readonly filterVariable?: string;

  /**
   * @schema MachineLearningDescribeBatchPredictionsInput#EQ
   */
  readonly eq?: string;

  /**
   * @schema MachineLearningDescribeBatchPredictionsInput#GT
   */
  readonly gt?: string;

  /**
   * @schema MachineLearningDescribeBatchPredictionsInput#LT
   */
  readonly lt?: string;

  /**
   * @schema MachineLearningDescribeBatchPredictionsInput#GE
   */
  readonly ge?: string;

  /**
   * @schema MachineLearningDescribeBatchPredictionsInput#LE
   */
  readonly le?: string;

  /**
   * @schema MachineLearningDescribeBatchPredictionsInput#NE
   */
  readonly ne?: string;

  /**
   * @schema MachineLearningDescribeBatchPredictionsInput#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema MachineLearningDescribeBatchPredictionsInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema MachineLearningDescribeBatchPredictionsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MachineLearningDescribeBatchPredictionsInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema MachineLearningDescribeBatchPredictionsOutput
 */
export interface MachineLearningDescribeBatchPredictionsOutput {
  /**
   * @schema MachineLearningDescribeBatchPredictionsOutput#Results
   */
  readonly results?: MachineLearningBatchPrediction[];

  /**
   * @schema MachineLearningDescribeBatchPredictionsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MachineLearningDescribeDataSourcesInput
 */
export interface MachineLearningDescribeDataSourcesInput {
  /**
   * @schema MachineLearningDescribeDataSourcesInput#FilterVariable
   */
  readonly filterVariable?: string;

  /**
   * @schema MachineLearningDescribeDataSourcesInput#EQ
   */
  readonly eq?: string;

  /**
   * @schema MachineLearningDescribeDataSourcesInput#GT
   */
  readonly gt?: string;

  /**
   * @schema MachineLearningDescribeDataSourcesInput#LT
   */
  readonly lt?: string;

  /**
   * @schema MachineLearningDescribeDataSourcesInput#GE
   */
  readonly ge?: string;

  /**
   * @schema MachineLearningDescribeDataSourcesInput#LE
   */
  readonly le?: string;

  /**
   * @schema MachineLearningDescribeDataSourcesInput#NE
   */
  readonly ne?: string;

  /**
   * @schema MachineLearningDescribeDataSourcesInput#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema MachineLearningDescribeDataSourcesInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema MachineLearningDescribeDataSourcesInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MachineLearningDescribeDataSourcesInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema MachineLearningDescribeDataSourcesOutput
 */
export interface MachineLearningDescribeDataSourcesOutput {
  /**
   * @schema MachineLearningDescribeDataSourcesOutput#Results
   */
  readonly results?: MachineLearningDataSource[];

  /**
   * @schema MachineLearningDescribeDataSourcesOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MachineLearningDescribeEvaluationsInput
 */
export interface MachineLearningDescribeEvaluationsInput {
  /**
   * @schema MachineLearningDescribeEvaluationsInput#FilterVariable
   */
  readonly filterVariable?: string;

  /**
   * @schema MachineLearningDescribeEvaluationsInput#EQ
   */
  readonly eq?: string;

  /**
   * @schema MachineLearningDescribeEvaluationsInput#GT
   */
  readonly gt?: string;

  /**
   * @schema MachineLearningDescribeEvaluationsInput#LT
   */
  readonly lt?: string;

  /**
   * @schema MachineLearningDescribeEvaluationsInput#GE
   */
  readonly ge?: string;

  /**
   * @schema MachineLearningDescribeEvaluationsInput#LE
   */
  readonly le?: string;

  /**
   * @schema MachineLearningDescribeEvaluationsInput#NE
   */
  readonly ne?: string;

  /**
   * @schema MachineLearningDescribeEvaluationsInput#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema MachineLearningDescribeEvaluationsInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema MachineLearningDescribeEvaluationsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MachineLearningDescribeEvaluationsInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema MachineLearningDescribeEvaluationsOutput
 */
export interface MachineLearningDescribeEvaluationsOutput {
  /**
   * @schema MachineLearningDescribeEvaluationsOutput#Results
   */
  readonly results?: MachineLearningEvaluation[];

  /**
   * @schema MachineLearningDescribeEvaluationsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MachineLearningDescribeMlModelsInput
 */
export interface MachineLearningDescribeMlModelsInput {
  /**
   * @schema MachineLearningDescribeMlModelsInput#FilterVariable
   */
  readonly filterVariable?: string;

  /**
   * @schema MachineLearningDescribeMlModelsInput#EQ
   */
  readonly eq?: string;

  /**
   * @schema MachineLearningDescribeMlModelsInput#GT
   */
  readonly gt?: string;

  /**
   * @schema MachineLearningDescribeMlModelsInput#LT
   */
  readonly lt?: string;

  /**
   * @schema MachineLearningDescribeMlModelsInput#GE
   */
  readonly ge?: string;

  /**
   * @schema MachineLearningDescribeMlModelsInput#LE
   */
  readonly le?: string;

  /**
   * @schema MachineLearningDescribeMlModelsInput#NE
   */
  readonly ne?: string;

  /**
   * @schema MachineLearningDescribeMlModelsInput#Prefix
   */
  readonly prefix?: string;

  /**
   * @schema MachineLearningDescribeMlModelsInput#SortOrder
   */
  readonly sortOrder?: string;

  /**
   * @schema MachineLearningDescribeMlModelsInput#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema MachineLearningDescribeMlModelsInput#Limit
   */
  readonly limit?: number;

}

/**
 * @schema MachineLearningDescribeMlModelsOutput
 */
export interface MachineLearningDescribeMlModelsOutput {
  /**
   * @schema MachineLearningDescribeMlModelsOutput#Results
   */
  readonly results?: MachineLearningMlModel[];

  /**
   * @schema MachineLearningDescribeMlModelsOutput#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema MachineLearningDescribeTagsInput
 */
export interface MachineLearningDescribeTagsInput {
  /**
   * @schema MachineLearningDescribeTagsInput#ResourceId
   */
  readonly resourceId: string;

  /**
   * @schema MachineLearningDescribeTagsInput#ResourceType
   */
  readonly resourceType: string;

}

/**
 * @schema MachineLearningDescribeTagsOutput
 */
export interface MachineLearningDescribeTagsOutput {
  /**
   * @schema MachineLearningDescribeTagsOutput#ResourceId
   */
  readonly resourceId?: string;

  /**
   * @schema MachineLearningDescribeTagsOutput#ResourceType
   */
  readonly resourceType?: string;

  /**
   * @schema MachineLearningDescribeTagsOutput#Tags
   */
  readonly tags?: MachineLearningTag[];

}

/**
 * @schema MachineLearningGetBatchPredictionInput
 */
export interface MachineLearningGetBatchPredictionInput {
  /**
   * @schema MachineLearningGetBatchPredictionInput#BatchPredictionId
   */
  readonly batchPredictionId: string;

}

/**
 * @schema MachineLearningGetBatchPredictionOutput
 */
export interface MachineLearningGetBatchPredictionOutput {
  /**
   * @schema MachineLearningGetBatchPredictionOutput#BatchPredictionId
   */
  readonly batchPredictionId?: string;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#BatchPredictionDataSourceId
   */
  readonly batchPredictionDataSourceId?: string;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#InputDataLocationS3
   */
  readonly inputDataLocationS3?: string;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#CreatedByIamUser
   */
  readonly createdByIamUser?: string;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#Name
   */
  readonly name?: string;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#Status
   */
  readonly status?: string;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#OutputUri
   */
  readonly outputUri?: string;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#LogUri
   */
  readonly logUri?: string;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#Message
   */
  readonly message?: string;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#ComputeTime
   */
  readonly computeTime?: number;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#FinishedAt
   */
  readonly finishedAt?: string;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#StartedAt
   */
  readonly startedAt?: string;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#TotalRecordCount
   */
  readonly totalRecordCount?: number;

  /**
   * @schema MachineLearningGetBatchPredictionOutput#InvalidRecordCount
   */
  readonly invalidRecordCount?: number;

}

/**
 * @schema MachineLearningGetDataSourceInput
 */
export interface MachineLearningGetDataSourceInput {
  /**
   * @schema MachineLearningGetDataSourceInput#DataSourceId
   */
  readonly dataSourceId: string;

  /**
   * @schema MachineLearningGetDataSourceInput#Verbose
   */
  readonly verbose?: boolean;

}

/**
 * @schema MachineLearningGetDataSourceOutput
 */
export interface MachineLearningGetDataSourceOutput {
  /**
   * @schema MachineLearningGetDataSourceOutput#DataSourceId
   */
  readonly dataSourceId?: string;

  /**
   * @schema MachineLearningGetDataSourceOutput#DataLocationS3
   */
  readonly dataLocationS3?: string;

  /**
   * @schema MachineLearningGetDataSourceOutput#DataRearrangement
   */
  readonly dataRearrangement?: string;

  /**
   * @schema MachineLearningGetDataSourceOutput#CreatedByIamUser
   */
  readonly createdByIamUser?: string;

  /**
   * @schema MachineLearningGetDataSourceOutput#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MachineLearningGetDataSourceOutput#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema MachineLearningGetDataSourceOutput#DataSizeInBytes
   */
  readonly dataSizeInBytes?: number;

  /**
   * @schema MachineLearningGetDataSourceOutput#NumberOfFiles
   */
  readonly numberOfFiles?: number;

  /**
   * @schema MachineLearningGetDataSourceOutput#Name
   */
  readonly name?: string;

  /**
   * @schema MachineLearningGetDataSourceOutput#Status
   */
  readonly status?: string;

  /**
   * @schema MachineLearningGetDataSourceOutput#LogUri
   */
  readonly logUri?: string;

  /**
   * @schema MachineLearningGetDataSourceOutput#Message
   */
  readonly message?: string;

  /**
   * @schema MachineLearningGetDataSourceOutput#RedshiftMetadata
   */
  readonly redshiftMetadata?: MachineLearningRedshiftMetadata;

  /**
   * @schema MachineLearningGetDataSourceOutput#RDSMetadata
   */
  readonly rdsMetadata?: MachineLearningRdsMetadata;

  /**
   * @schema MachineLearningGetDataSourceOutput#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema MachineLearningGetDataSourceOutput#ComputeStatistics
   */
  readonly computeStatistics?: boolean;

  /**
   * @schema MachineLearningGetDataSourceOutput#ComputeTime
   */
  readonly computeTime?: number;

  /**
   * @schema MachineLearningGetDataSourceOutput#FinishedAt
   */
  readonly finishedAt?: string;

  /**
   * @schema MachineLearningGetDataSourceOutput#StartedAt
   */
  readonly startedAt?: string;

  /**
   * @schema MachineLearningGetDataSourceOutput#DataSourceSchema
   */
  readonly dataSourceSchema?: string;

}

/**
 * @schema MachineLearningGetEvaluationInput
 */
export interface MachineLearningGetEvaluationInput {
  /**
   * @schema MachineLearningGetEvaluationInput#EvaluationId
   */
  readonly evaluationId: string;

}

/**
 * @schema MachineLearningGetEvaluationOutput
 */
export interface MachineLearningGetEvaluationOutput {
  /**
   * @schema MachineLearningGetEvaluationOutput#EvaluationId
   */
  readonly evaluationId?: string;

  /**
   * @schema MachineLearningGetEvaluationOutput#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema MachineLearningGetEvaluationOutput#EvaluationDataSourceId
   */
  readonly evaluationDataSourceId?: string;

  /**
   * @schema MachineLearningGetEvaluationOutput#InputDataLocationS3
   */
  readonly inputDataLocationS3?: string;

  /**
   * @schema MachineLearningGetEvaluationOutput#CreatedByIamUser
   */
  readonly createdByIamUser?: string;

  /**
   * @schema MachineLearningGetEvaluationOutput#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MachineLearningGetEvaluationOutput#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema MachineLearningGetEvaluationOutput#Name
   */
  readonly name?: string;

  /**
   * @schema MachineLearningGetEvaluationOutput#Status
   */
  readonly status?: string;

  /**
   * @schema MachineLearningGetEvaluationOutput#PerformanceMetrics
   */
  readonly performanceMetrics?: MachineLearningPerformanceMetrics;

  /**
   * @schema MachineLearningGetEvaluationOutput#LogUri
   */
  readonly logUri?: string;

  /**
   * @schema MachineLearningGetEvaluationOutput#Message
   */
  readonly message?: string;

  /**
   * @schema MachineLearningGetEvaluationOutput#ComputeTime
   */
  readonly computeTime?: number;

  /**
   * @schema MachineLearningGetEvaluationOutput#FinishedAt
   */
  readonly finishedAt?: string;

  /**
   * @schema MachineLearningGetEvaluationOutput#StartedAt
   */
  readonly startedAt?: string;

}

/**
 * @schema MachineLearningGetMlModelInput
 */
export interface MachineLearningGetMlModelInput {
  /**
   * @schema MachineLearningGetMlModelInput#MLModelId
   */
  readonly mlModelId: string;

  /**
   * @schema MachineLearningGetMlModelInput#Verbose
   */
  readonly verbose?: boolean;

}

/**
 * @schema MachineLearningGetMlModelOutput
 */
export interface MachineLearningGetMlModelOutput {
  /**
   * @schema MachineLearningGetMlModelOutput#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#TrainingDataSourceId
   */
  readonly trainingDataSourceId?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#CreatedByIamUser
   */
  readonly createdByIamUser?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#Name
   */
  readonly name?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#Status
   */
  readonly status?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#SizeInBytes
   */
  readonly sizeInBytes?: number;

  /**
   * @schema MachineLearningGetMlModelOutput#EndpointInfo
   */
  readonly endpointInfo?: MachineLearningRealtimeEndpointInfo;

  /**
   * @schema MachineLearningGetMlModelOutput#TrainingParameters
   */
  readonly trainingParameters?: { [key: string]: string };

  /**
   * @schema MachineLearningGetMlModelOutput#InputDataLocationS3
   */
  readonly inputDataLocationS3?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#MLModelType
   */
  readonly mlModelType?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#ScoreThreshold
   */
  readonly scoreThreshold?: number;

  /**
   * @schema MachineLearningGetMlModelOutput#ScoreThresholdLastUpdatedAt
   */
  readonly scoreThresholdLastUpdatedAt?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#LogUri
   */
  readonly logUri?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#Message
   */
  readonly message?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#ComputeTime
   */
  readonly computeTime?: number;

  /**
   * @schema MachineLearningGetMlModelOutput#FinishedAt
   */
  readonly finishedAt?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#StartedAt
   */
  readonly startedAt?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#Recipe
   */
  readonly recipe?: string;

  /**
   * @schema MachineLearningGetMlModelOutput#Schema
   */
  readonly schema?: string;

}

/**
 * @schema MachineLearningPredictInput
 */
export interface MachineLearningPredictInput {
  /**
   * @schema MachineLearningPredictInput#MLModelId
   */
  readonly mlModelId: string;

  /**
   * @schema MachineLearningPredictInput#Record
   */
  readonly record: { [key: string]: string };

  /**
   * @schema MachineLearningPredictInput#PredictEndpoint
   */
  readonly predictEndpoint: string;

}

/**
 * @schema MachineLearningPredictOutput
 */
export interface MachineLearningPredictOutput {
  /**
   * @schema MachineLearningPredictOutput#Prediction
   */
  readonly prediction?: MachineLearningPrediction;

}

/**
 * @schema MachineLearningUpdateBatchPredictionInput
 */
export interface MachineLearningUpdateBatchPredictionInput {
  /**
   * @schema MachineLearningUpdateBatchPredictionInput#BatchPredictionId
   */
  readonly batchPredictionId: string;

  /**
   * @schema MachineLearningUpdateBatchPredictionInput#BatchPredictionName
   */
  readonly batchPredictionName: string;

}

/**
 * @schema MachineLearningUpdateBatchPredictionOutput
 */
export interface MachineLearningUpdateBatchPredictionOutput {
  /**
   * @schema MachineLearningUpdateBatchPredictionOutput#BatchPredictionId
   */
  readonly batchPredictionId?: string;

}

/**
 * @schema MachineLearningUpdateDataSourceInput
 */
export interface MachineLearningUpdateDataSourceInput {
  /**
   * @schema MachineLearningUpdateDataSourceInput#DataSourceId
   */
  readonly dataSourceId: string;

  /**
   * @schema MachineLearningUpdateDataSourceInput#DataSourceName
   */
  readonly dataSourceName: string;

}

/**
 * @schema MachineLearningUpdateDataSourceOutput
 */
export interface MachineLearningUpdateDataSourceOutput {
  /**
   * @schema MachineLearningUpdateDataSourceOutput#DataSourceId
   */
  readonly dataSourceId?: string;

}

/**
 * @schema MachineLearningUpdateEvaluationInput
 */
export interface MachineLearningUpdateEvaluationInput {
  /**
   * @schema MachineLearningUpdateEvaluationInput#EvaluationId
   */
  readonly evaluationId: string;

  /**
   * @schema MachineLearningUpdateEvaluationInput#EvaluationName
   */
  readonly evaluationName: string;

}

/**
 * @schema MachineLearningUpdateEvaluationOutput
 */
export interface MachineLearningUpdateEvaluationOutput {
  /**
   * @schema MachineLearningUpdateEvaluationOutput#EvaluationId
   */
  readonly evaluationId?: string;

}

/**
 * @schema MachineLearningUpdateMlModelInput
 */
export interface MachineLearningUpdateMlModelInput {
  /**
   * @schema MachineLearningUpdateMlModelInput#MLModelId
   */
  readonly mlModelId: string;

  /**
   * @schema MachineLearningUpdateMlModelInput#MLModelName
   */
  readonly mlModelName?: string;

  /**
   * @schema MachineLearningUpdateMlModelInput#ScoreThreshold
   */
  readonly scoreThreshold?: number;

}

/**
 * @schema MachineLearningUpdateMlModelOutput
 */
export interface MachineLearningUpdateMlModelOutput {
  /**
   * @schema MachineLearningUpdateMlModelOutput#MLModelId
   */
  readonly mlModelId?: string;

}

/**
 * @schema MachineLearningTag
 */
export interface MachineLearningTag {
  /**
   * @schema MachineLearningTag#Key
   */
  readonly key?: string;

  /**
   * @schema MachineLearningTag#Value
   */
  readonly value?: string;

}

/**
 * @schema MachineLearningRdsDataSpec
 */
export interface MachineLearningRdsDataSpec {
  /**
   * @schema MachineLearningRdsDataSpec#DatabaseInformation
   */
  readonly databaseInformation: MachineLearningRdsDatabase;

  /**
   * @schema MachineLearningRdsDataSpec#SelectSqlQuery
   */
  readonly selectSqlQuery: string;

  /**
   * @schema MachineLearningRdsDataSpec#DatabaseCredentials
   */
  readonly databaseCredentials: MachineLearningRdsDatabaseCredentials;

  /**
   * @schema MachineLearningRdsDataSpec#S3StagingLocation
   */
  readonly s3StagingLocation: string;

  /**
   * @schema MachineLearningRdsDataSpec#DataRearrangement
   */
  readonly dataRearrangement?: string;

  /**
   * @schema MachineLearningRdsDataSpec#DataSchema
   */
  readonly dataSchema?: string;

  /**
   * @schema MachineLearningRdsDataSpec#DataSchemaUri
   */
  readonly dataSchemaUri?: string;

  /**
   * @schema MachineLearningRdsDataSpec#ResourceRole
   */
  readonly resourceRole: string;

  /**
   * @schema MachineLearningRdsDataSpec#ServiceRole
   */
  readonly serviceRole: string;

  /**
   * @schema MachineLearningRdsDataSpec#SubnetId
   */
  readonly subnetId: string;

  /**
   * @schema MachineLearningRdsDataSpec#SecurityGroupIds
   */
  readonly securityGroupIds: string[];

}

/**
 * @schema MachineLearningRedshiftDataSpec
 */
export interface MachineLearningRedshiftDataSpec {
  /**
   * @schema MachineLearningRedshiftDataSpec#DatabaseInformation
   */
  readonly databaseInformation: MachineLearningRedshiftDatabase;

  /**
   * @schema MachineLearningRedshiftDataSpec#SelectSqlQuery
   */
  readonly selectSqlQuery: string;

  /**
   * @schema MachineLearningRedshiftDataSpec#DatabaseCredentials
   */
  readonly databaseCredentials: MachineLearningRedshiftDatabaseCredentials;

  /**
   * @schema MachineLearningRedshiftDataSpec#S3StagingLocation
   */
  readonly s3StagingLocation: string;

  /**
   * @schema MachineLearningRedshiftDataSpec#DataRearrangement
   */
  readonly dataRearrangement?: string;

  /**
   * @schema MachineLearningRedshiftDataSpec#DataSchema
   */
  readonly dataSchema?: string;

  /**
   * @schema MachineLearningRedshiftDataSpec#DataSchemaUri
   */
  readonly dataSchemaUri?: string;

}

/**
 * @schema MachineLearningS3DataSpec
 */
export interface MachineLearningS3DataSpec {
  /**
   * @schema MachineLearningS3DataSpec#DataLocationS3
   */
  readonly dataLocationS3: string;

  /**
   * @schema MachineLearningS3DataSpec#DataRearrangement
   */
  readonly dataRearrangement?: string;

  /**
   * @schema MachineLearningS3DataSpec#DataSchema
   */
  readonly dataSchema?: string;

  /**
   * @schema MachineLearningS3DataSpec#DataSchemaLocationS3
   */
  readonly dataSchemaLocationS3?: string;

}

/**
 * @schema MachineLearningRealtimeEndpointInfo
 */
export interface MachineLearningRealtimeEndpointInfo {
  /**
   * @schema MachineLearningRealtimeEndpointInfo#PeakRequestsPerSecond
   */
  readonly peakRequestsPerSecond?: number;

  /**
   * @schema MachineLearningRealtimeEndpointInfo#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MachineLearningRealtimeEndpointInfo#EndpointUrl
   */
  readonly endpointUrl?: string;

  /**
   * @schema MachineLearningRealtimeEndpointInfo#EndpointStatus
   */
  readonly endpointStatus?: string;

}

/**
 * @schema MachineLearningBatchPrediction
 */
export interface MachineLearningBatchPrediction {
  /**
   * @schema MachineLearningBatchPrediction#BatchPredictionId
   */
  readonly batchPredictionId?: string;

  /**
   * @schema MachineLearningBatchPrediction#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema MachineLearningBatchPrediction#BatchPredictionDataSourceId
   */
  readonly batchPredictionDataSourceId?: string;

  /**
   * @schema MachineLearningBatchPrediction#InputDataLocationS3
   */
  readonly inputDataLocationS3?: string;

  /**
   * @schema MachineLearningBatchPrediction#CreatedByIamUser
   */
  readonly createdByIamUser?: string;

  /**
   * @schema MachineLearningBatchPrediction#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MachineLearningBatchPrediction#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema MachineLearningBatchPrediction#Name
   */
  readonly name?: string;

  /**
   * @schema MachineLearningBatchPrediction#Status
   */
  readonly status?: string;

  /**
   * @schema MachineLearningBatchPrediction#OutputUri
   */
  readonly outputUri?: string;

  /**
   * @schema MachineLearningBatchPrediction#Message
   */
  readonly message?: string;

  /**
   * @schema MachineLearningBatchPrediction#ComputeTime
   */
  readonly computeTime?: number;

  /**
   * @schema MachineLearningBatchPrediction#FinishedAt
   */
  readonly finishedAt?: string;

  /**
   * @schema MachineLearningBatchPrediction#StartedAt
   */
  readonly startedAt?: string;

  /**
   * @schema MachineLearningBatchPrediction#TotalRecordCount
   */
  readonly totalRecordCount?: number;

  /**
   * @schema MachineLearningBatchPrediction#InvalidRecordCount
   */
  readonly invalidRecordCount?: number;

}

/**
 * @schema MachineLearningDataSource
 */
export interface MachineLearningDataSource {
  /**
   * @schema MachineLearningDataSource#DataSourceId
   */
  readonly dataSourceId?: string;

  /**
   * @schema MachineLearningDataSource#DataLocationS3
   */
  readonly dataLocationS3?: string;

  /**
   * @schema MachineLearningDataSource#DataRearrangement
   */
  readonly dataRearrangement?: string;

  /**
   * @schema MachineLearningDataSource#CreatedByIamUser
   */
  readonly createdByIamUser?: string;

  /**
   * @schema MachineLearningDataSource#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MachineLearningDataSource#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema MachineLearningDataSource#DataSizeInBytes
   */
  readonly dataSizeInBytes?: number;

  /**
   * @schema MachineLearningDataSource#NumberOfFiles
   */
  readonly numberOfFiles?: number;

  /**
   * @schema MachineLearningDataSource#Name
   */
  readonly name?: string;

  /**
   * @schema MachineLearningDataSource#Status
   */
  readonly status?: string;

  /**
   * @schema MachineLearningDataSource#Message
   */
  readonly message?: string;

  /**
   * @schema MachineLearningDataSource#RedshiftMetadata
   */
  readonly redshiftMetadata?: MachineLearningRedshiftMetadata;

  /**
   * @schema MachineLearningDataSource#RDSMetadata
   */
  readonly rdsMetadata?: MachineLearningRdsMetadata;

  /**
   * @schema MachineLearningDataSource#RoleARN
   */
  readonly roleArn?: string;

  /**
   * @schema MachineLearningDataSource#ComputeStatistics
   */
  readonly computeStatistics?: boolean;

  /**
   * @schema MachineLearningDataSource#ComputeTime
   */
  readonly computeTime?: number;

  /**
   * @schema MachineLearningDataSource#FinishedAt
   */
  readonly finishedAt?: string;

  /**
   * @schema MachineLearningDataSource#StartedAt
   */
  readonly startedAt?: string;

}

/**
 * @schema MachineLearningEvaluation
 */
export interface MachineLearningEvaluation {
  /**
   * @schema MachineLearningEvaluation#EvaluationId
   */
  readonly evaluationId?: string;

  /**
   * @schema MachineLearningEvaluation#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema MachineLearningEvaluation#EvaluationDataSourceId
   */
  readonly evaluationDataSourceId?: string;

  /**
   * @schema MachineLearningEvaluation#InputDataLocationS3
   */
  readonly inputDataLocationS3?: string;

  /**
   * @schema MachineLearningEvaluation#CreatedByIamUser
   */
  readonly createdByIamUser?: string;

  /**
   * @schema MachineLearningEvaluation#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MachineLearningEvaluation#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema MachineLearningEvaluation#Name
   */
  readonly name?: string;

  /**
   * @schema MachineLearningEvaluation#Status
   */
  readonly status?: string;

  /**
   * @schema MachineLearningEvaluation#PerformanceMetrics
   */
  readonly performanceMetrics?: MachineLearningPerformanceMetrics;

  /**
   * @schema MachineLearningEvaluation#Message
   */
  readonly message?: string;

  /**
   * @schema MachineLearningEvaluation#ComputeTime
   */
  readonly computeTime?: number;

  /**
   * @schema MachineLearningEvaluation#FinishedAt
   */
  readonly finishedAt?: string;

  /**
   * @schema MachineLearningEvaluation#StartedAt
   */
  readonly startedAt?: string;

}

/**
 * @schema MachineLearningMlModel
 */
export interface MachineLearningMlModel {
  /**
   * @schema MachineLearningMlModel#MLModelId
   */
  readonly mlModelId?: string;

  /**
   * @schema MachineLearningMlModel#TrainingDataSourceId
   */
  readonly trainingDataSourceId?: string;

  /**
   * @schema MachineLearningMlModel#CreatedByIamUser
   */
  readonly createdByIamUser?: string;

  /**
   * @schema MachineLearningMlModel#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema MachineLearningMlModel#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema MachineLearningMlModel#Name
   */
  readonly name?: string;

  /**
   * @schema MachineLearningMlModel#Status
   */
  readonly status?: string;

  /**
   * @schema MachineLearningMlModel#SizeInBytes
   */
  readonly sizeInBytes?: number;

  /**
   * @schema MachineLearningMlModel#EndpointInfo
   */
  readonly endpointInfo?: MachineLearningRealtimeEndpointInfo;

  /**
   * @schema MachineLearningMlModel#TrainingParameters
   */
  readonly trainingParameters?: { [key: string]: string };

  /**
   * @schema MachineLearningMlModel#InputDataLocationS3
   */
  readonly inputDataLocationS3?: string;

  /**
   * @schema MachineLearningMlModel#Algorithm
   */
  readonly algorithm?: string;

  /**
   * @schema MachineLearningMlModel#MLModelType
   */
  readonly mlModelType?: string;

  /**
   * @schema MachineLearningMlModel#ScoreThreshold
   */
  readonly scoreThreshold?: number;

  /**
   * @schema MachineLearningMlModel#ScoreThresholdLastUpdatedAt
   */
  readonly scoreThresholdLastUpdatedAt?: string;

  /**
   * @schema MachineLearningMlModel#Message
   */
  readonly message?: string;

  /**
   * @schema MachineLearningMlModel#ComputeTime
   */
  readonly computeTime?: number;

  /**
   * @schema MachineLearningMlModel#FinishedAt
   */
  readonly finishedAt?: string;

  /**
   * @schema MachineLearningMlModel#StartedAt
   */
  readonly startedAt?: string;

}

/**
 * @schema MachineLearningRedshiftMetadata
 */
export interface MachineLearningRedshiftMetadata {
  /**
   * @schema MachineLearningRedshiftMetadata#RedshiftDatabase
   */
  readonly redshiftDatabase?: MachineLearningRedshiftDatabase;

  /**
   * @schema MachineLearningRedshiftMetadata#DatabaseUserName
   */
  readonly databaseUserName?: string;

  /**
   * @schema MachineLearningRedshiftMetadata#SelectSqlQuery
   */
  readonly selectSqlQuery?: string;

}

/**
 * @schema MachineLearningRdsMetadata
 */
export interface MachineLearningRdsMetadata {
  /**
   * @schema MachineLearningRdsMetadata#Database
   */
  readonly database?: MachineLearningRdsDatabase;

  /**
   * @schema MachineLearningRdsMetadata#DatabaseUserName
   */
  readonly databaseUserName?: string;

  /**
   * @schema MachineLearningRdsMetadata#SelectSqlQuery
   */
  readonly selectSqlQuery?: string;

  /**
   * @schema MachineLearningRdsMetadata#ResourceRole
   */
  readonly resourceRole?: string;

  /**
   * @schema MachineLearningRdsMetadata#ServiceRole
   */
  readonly serviceRole?: string;

  /**
   * @schema MachineLearningRdsMetadata#DataPipelineId
   */
  readonly dataPipelineId?: string;

}

/**
 * @schema MachineLearningPerformanceMetrics
 */
export interface MachineLearningPerformanceMetrics {
  /**
   * @schema MachineLearningPerformanceMetrics#Properties
   */
  readonly properties?: { [key: string]: string };

}

/**
 * @schema MachineLearningPrediction
 */
export interface MachineLearningPrediction {
  /**
   * @schema MachineLearningPrediction#predictedLabel
   */
  readonly predictedLabel?: string;

  /**
   * @schema MachineLearningPrediction#predictedValue
   */
  readonly predictedValue?: number;

  /**
   * @schema MachineLearningPrediction#predictedScores
   */
  readonly predictedScores?: { [key: string]: number };

  /**
   * @schema MachineLearningPrediction#details
   */
  readonly details?: { [key: string]: string };

}

/**
 * @schema MachineLearningRdsDatabase
 */
export interface MachineLearningRdsDatabase {
  /**
   * @schema MachineLearningRdsDatabase#InstanceIdentifier
   */
  readonly instanceIdentifier: string;

  /**
   * @schema MachineLearningRdsDatabase#DatabaseName
   */
  readonly databaseName: string;

}

/**
 * @schema MachineLearningRdsDatabaseCredentials
 */
export interface MachineLearningRdsDatabaseCredentials {
  /**
   * @schema MachineLearningRdsDatabaseCredentials#Username
   */
  readonly username: string;

  /**
   * @schema MachineLearningRdsDatabaseCredentials#Password
   */
  readonly password: string;

}

/**
 * @schema MachineLearningRedshiftDatabase
 */
export interface MachineLearningRedshiftDatabase {
  /**
   * @schema MachineLearningRedshiftDatabase#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema MachineLearningRedshiftDatabase#ClusterIdentifier
   */
  readonly clusterIdentifier: string;

}

/**
 * @schema MachineLearningRedshiftDatabaseCredentials
 */
export interface MachineLearningRedshiftDatabaseCredentials {
  /**
   * @schema MachineLearningRedshiftDatabaseCredentials#Username
   */
  readonly username: string;

  /**
   * @schema MachineLearningRedshiftDatabaseCredentials#Password
   */
  readonly password: string;

}
