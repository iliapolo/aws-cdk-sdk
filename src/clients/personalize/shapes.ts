/**
 * @schema CreateBatchInferenceJobRequest
 */
export interface CreateBatchInferenceJobRequest {
  /**
   * @schema CreateBatchInferenceJobRequest#jobName
   */
  readonly jobName: string;

  /**
   * @schema CreateBatchInferenceJobRequest#solutionVersionArn
   */
  readonly solutionVersionArn: string;

  /**
   * @schema CreateBatchInferenceJobRequest#filterArn
   */
  readonly filterArn?: string;

  /**
   * @schema CreateBatchInferenceJobRequest#numResults
   */
  readonly numResults?: number;

  /**
   * @schema CreateBatchInferenceJobRequest#jobInput
   */
  readonly jobInput: BatchInferenceJobInput;

  /**
   * @schema CreateBatchInferenceJobRequest#jobOutput
   */
  readonly jobOutput: BatchInferenceJobOutput;

  /**
   * @schema CreateBatchInferenceJobRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema CreateBatchInferenceJobRequest#batchInferenceJobConfig
   */
  readonly batchInferenceJobConfig?: BatchInferenceJobConfig;

}

/**
 * @schema CreateBatchInferenceJobResponse
 */
export interface CreateBatchInferenceJobResponse {
  /**
   * @schema CreateBatchInferenceJobResponse#batchInferenceJobArn
   */
  readonly batchInferenceJobArn?: string;

}

/**
 * @schema CreateCampaignRequest
 */
export interface CreateCampaignRequest {
  /**
   * @schema CreateCampaignRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateCampaignRequest#solutionVersionArn
   */
  readonly solutionVersionArn: string;

  /**
   * @schema CreateCampaignRequest#minProvisionedTPS
   */
  readonly minProvisionedTPS?: number;

  /**
   * @schema CreateCampaignRequest#campaignConfig
   */
  readonly campaignConfig?: CampaignConfig;

}

/**
 * @schema CreateCampaignResponse
 */
export interface CreateCampaignResponse {
  /**
   * @schema CreateCampaignResponse#campaignArn
   */
  readonly campaignArn?: string;

}

/**
 * @schema CreateDatasetRequest
 */
export interface CreateDatasetRequest {
  /**
   * @schema CreateDatasetRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateDatasetRequest#schemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema CreateDatasetRequest#datasetGroupArn
   */
  readonly datasetGroupArn: string;

  /**
   * @schema CreateDatasetRequest#datasetType
   */
  readonly datasetType: string;

}

/**
 * @schema CreateDatasetResponse
 */
export interface CreateDatasetResponse {
  /**
   * @schema CreateDatasetResponse#datasetArn
   */
  readonly datasetArn?: string;

}

/**
 * @schema CreateDatasetGroupRequest
 */
export interface CreateDatasetGroupRequest {
  /**
   * @schema CreateDatasetGroupRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateDatasetGroupRequest#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema CreateDatasetGroupRequest#kmsKeyArn
   */
  readonly kmsKeyArn?: string;

}

/**
 * @schema CreateDatasetGroupResponse
 */
export interface CreateDatasetGroupResponse {
  /**
   * @schema CreateDatasetGroupResponse#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

}

/**
 * @schema CreateDatasetImportJobRequest
 */
export interface CreateDatasetImportJobRequest {
  /**
   * @schema CreateDatasetImportJobRequest#jobName
   */
  readonly jobName: string;

  /**
   * @schema CreateDatasetImportJobRequest#datasetArn
   */
  readonly datasetArn: string;

  /**
   * @schema CreateDatasetImportJobRequest#dataSource
   */
  readonly dataSource: DataSource;

  /**
   * @schema CreateDatasetImportJobRequest#roleArn
   */
  readonly roleArn: string;

}

/**
 * @schema CreateDatasetImportJobResponse
 */
export interface CreateDatasetImportJobResponse {
  /**
   * @schema CreateDatasetImportJobResponse#datasetImportJobArn
   */
  readonly datasetImportJobArn?: string;

}

/**
 * @schema CreateEventTrackerRequest
 */
export interface CreateEventTrackerRequest {
  /**
   * @schema CreateEventTrackerRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateEventTrackerRequest#datasetGroupArn
   */
  readonly datasetGroupArn: string;

}

/**
 * @schema CreateEventTrackerResponse
 */
export interface CreateEventTrackerResponse {
  /**
   * @schema CreateEventTrackerResponse#eventTrackerArn
   */
  readonly eventTrackerArn?: string;

  /**
   * @schema CreateEventTrackerResponse#trackingId
   */
  readonly trackingId?: string;

}

/**
 * @schema CreateFilterRequest
 */
export interface CreateFilterRequest {
  /**
   * @schema CreateFilterRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateFilterRequest#datasetGroupArn
   */
  readonly datasetGroupArn: string;

  /**
   * @schema CreateFilterRequest#filterExpression
   */
  readonly filterExpression: string;

}

/**
 * @schema CreateFilterResponse
 */
export interface CreateFilterResponse {
  /**
   * @schema CreateFilterResponse#filterArn
   */
  readonly filterArn?: string;

}

/**
 * @schema CreateSchemaRequest
 */
export interface CreateSchemaRequest {
  /**
   * @schema CreateSchemaRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateSchemaRequest#schema
   */
  readonly schema: string;

}

/**
 * @schema CreateSchemaResponse
 */
export interface CreateSchemaResponse {
  /**
   * @schema CreateSchemaResponse#schemaArn
   */
  readonly schemaArn?: string;

}

/**
 * @schema CreateSolutionRequest
 */
export interface CreateSolutionRequest {
  /**
   * @schema CreateSolutionRequest#name
   */
  readonly name: string;

  /**
   * @schema CreateSolutionRequest#performHPO
   */
  readonly performHPO?: boolean;

  /**
   * @schema CreateSolutionRequest#performAutoML
   */
  readonly performAutoML?: boolean;

  /**
   * @schema CreateSolutionRequest#recipeArn
   */
  readonly recipeArn?: string;

  /**
   * @schema CreateSolutionRequest#datasetGroupArn
   */
  readonly datasetGroupArn: string;

  /**
   * @schema CreateSolutionRequest#eventType
   */
  readonly eventType?: string;

  /**
   * @schema CreateSolutionRequest#solutionConfig
   */
  readonly solutionConfig?: SolutionConfig;

}

/**
 * @schema CreateSolutionResponse
 */
export interface CreateSolutionResponse {
  /**
   * @schema CreateSolutionResponse#solutionArn
   */
  readonly solutionArn?: string;

}

/**
 * @schema CreateSolutionVersionRequest
 */
export interface CreateSolutionVersionRequest {
  /**
   * @schema CreateSolutionVersionRequest#solutionArn
   */
  readonly solutionArn: string;

  /**
   * @schema CreateSolutionVersionRequest#trainingMode
   */
  readonly trainingMode?: string;

}

/**
 * @schema CreateSolutionVersionResponse
 */
export interface CreateSolutionVersionResponse {
  /**
   * @schema CreateSolutionVersionResponse#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

}

/**
 * @schema DeleteCampaignRequest
 */
export interface DeleteCampaignRequest {
  /**
   * @schema DeleteCampaignRequest#campaignArn
   */
  readonly campaignArn: string;

}

/**
 * @schema DeleteDatasetRequest
 */
export interface DeleteDatasetRequest {
  /**
   * @schema DeleteDatasetRequest#datasetArn
   */
  readonly datasetArn: string;

}

/**
 * @schema DeleteDatasetGroupRequest
 */
export interface DeleteDatasetGroupRequest {
  /**
   * @schema DeleteDatasetGroupRequest#datasetGroupArn
   */
  readonly datasetGroupArn: string;

}

/**
 * @schema DeleteEventTrackerRequest
 */
export interface DeleteEventTrackerRequest {
  /**
   * @schema DeleteEventTrackerRequest#eventTrackerArn
   */
  readonly eventTrackerArn: string;

}

/**
 * @schema DeleteFilterRequest
 */
export interface DeleteFilterRequest {
  /**
   * @schema DeleteFilterRequest#filterArn
   */
  readonly filterArn: string;

}

/**
 * @schema DeleteSchemaRequest
 */
export interface DeleteSchemaRequest {
  /**
   * @schema DeleteSchemaRequest#schemaArn
   */
  readonly schemaArn: string;

}

/**
 * @schema DeleteSolutionRequest
 */
export interface DeleteSolutionRequest {
  /**
   * @schema DeleteSolutionRequest#solutionArn
   */
  readonly solutionArn: string;

}

/**
 * @schema DescribeAlgorithmRequest
 */
export interface DescribeAlgorithmRequest {
  /**
   * @schema DescribeAlgorithmRequest#algorithmArn
   */
  readonly algorithmArn: string;

}

/**
 * @schema DescribeAlgorithmResponse
 */
export interface DescribeAlgorithmResponse {
  /**
   * @schema DescribeAlgorithmResponse#algorithm
   */
  readonly algorithm?: Algorithm;

}

/**
 * @schema DescribeBatchInferenceJobRequest
 */
export interface DescribeBatchInferenceJobRequest {
  /**
   * @schema DescribeBatchInferenceJobRequest#batchInferenceJobArn
   */
  readonly batchInferenceJobArn: string;

}

/**
 * @schema DescribeBatchInferenceJobResponse
 */
export interface DescribeBatchInferenceJobResponse {
  /**
   * @schema DescribeBatchInferenceJobResponse#batchInferenceJob
   */
  readonly batchInferenceJob?: BatchInferenceJob;

}

/**
 * @schema DescribeCampaignRequest
 */
export interface DescribeCampaignRequest {
  /**
   * @schema DescribeCampaignRequest#campaignArn
   */
  readonly campaignArn: string;

}

/**
 * @schema DescribeCampaignResponse
 */
export interface DescribeCampaignResponse {
  /**
   * @schema DescribeCampaignResponse#campaign
   */
  readonly campaign?: Campaign;

}

/**
 * @schema DescribeDatasetRequest
 */
export interface DescribeDatasetRequest {
  /**
   * @schema DescribeDatasetRequest#datasetArn
   */
  readonly datasetArn: string;

}

/**
 * @schema DescribeDatasetResponse
 */
export interface DescribeDatasetResponse {
  /**
   * @schema DescribeDatasetResponse#dataset
   */
  readonly dataset?: Dataset;

}

/**
 * @schema DescribeDatasetGroupRequest
 */
export interface DescribeDatasetGroupRequest {
  /**
   * @schema DescribeDatasetGroupRequest#datasetGroupArn
   */
  readonly datasetGroupArn: string;

}

/**
 * @schema DescribeDatasetGroupResponse
 */
export interface DescribeDatasetGroupResponse {
  /**
   * @schema DescribeDatasetGroupResponse#datasetGroup
   */
  readonly datasetGroup?: DatasetGroup;

}

/**
 * @schema DescribeDatasetImportJobRequest
 */
export interface DescribeDatasetImportJobRequest {
  /**
   * @schema DescribeDatasetImportJobRequest#datasetImportJobArn
   */
  readonly datasetImportJobArn: string;

}

/**
 * @schema DescribeDatasetImportJobResponse
 */
export interface DescribeDatasetImportJobResponse {
  /**
   * @schema DescribeDatasetImportJobResponse#datasetImportJob
   */
  readonly datasetImportJob?: DatasetImportJob;

}

/**
 * @schema DescribeEventTrackerRequest
 */
export interface DescribeEventTrackerRequest {
  /**
   * @schema DescribeEventTrackerRequest#eventTrackerArn
   */
  readonly eventTrackerArn: string;

}

/**
 * @schema DescribeEventTrackerResponse
 */
export interface DescribeEventTrackerResponse {
  /**
   * @schema DescribeEventTrackerResponse#eventTracker
   */
  readonly eventTracker?: EventTracker;

}

/**
 * @schema DescribeFeatureTransformationRequest
 */
export interface DescribeFeatureTransformationRequest {
  /**
   * @schema DescribeFeatureTransformationRequest#featureTransformationArn
   */
  readonly featureTransformationArn: string;

}

/**
 * @schema DescribeFeatureTransformationResponse
 */
export interface DescribeFeatureTransformationResponse {
  /**
   * @schema DescribeFeatureTransformationResponse#featureTransformation
   */
  readonly featureTransformation?: FeatureTransformation;

}

/**
 * @schema DescribeFilterRequest
 */
export interface DescribeFilterRequest {
  /**
   * @schema DescribeFilterRequest#filterArn
   */
  readonly filterArn: string;

}

/**
 * @schema DescribeFilterResponse
 */
export interface DescribeFilterResponse {
  /**
   * @schema DescribeFilterResponse#filter
   */
  readonly filter?: Filter;

}

/**
 * @schema DescribeRecipeRequest
 */
export interface DescribeRecipeRequest {
  /**
   * @schema DescribeRecipeRequest#recipeArn
   */
  readonly recipeArn: string;

}

/**
 * @schema DescribeRecipeResponse
 */
export interface DescribeRecipeResponse {
  /**
   * @schema DescribeRecipeResponse#recipe
   */
  readonly recipe?: Recipe;

}

/**
 * @schema DescribeSchemaRequest
 */
export interface DescribeSchemaRequest {
  /**
   * @schema DescribeSchemaRequest#schemaArn
   */
  readonly schemaArn: string;

}

/**
 * @schema DescribeSchemaResponse
 */
export interface DescribeSchemaResponse {
  /**
   * @schema DescribeSchemaResponse#schema
   */
  readonly schema?: DatasetSchema;

}

/**
 * @schema DescribeSolutionRequest
 */
export interface DescribeSolutionRequest {
  /**
   * @schema DescribeSolutionRequest#solutionArn
   */
  readonly solutionArn: string;

}

/**
 * @schema DescribeSolutionResponse
 */
export interface DescribeSolutionResponse {
  /**
   * @schema DescribeSolutionResponse#solution
   */
  readonly solution?: Solution;

}

/**
 * @schema DescribeSolutionVersionRequest
 */
export interface DescribeSolutionVersionRequest {
  /**
   * @schema DescribeSolutionVersionRequest#solutionVersionArn
   */
  readonly solutionVersionArn: string;

}

/**
 * @schema DescribeSolutionVersionResponse
 */
export interface DescribeSolutionVersionResponse {
  /**
   * @schema DescribeSolutionVersionResponse#solutionVersion
   */
  readonly solutionVersion?: SolutionVersion;

}

/**
 * @schema GetSolutionMetricsRequest
 */
export interface GetSolutionMetricsRequest {
  /**
   * @schema GetSolutionMetricsRequest#solutionVersionArn
   */
  readonly solutionVersionArn: string;

}

/**
 * @schema GetSolutionMetricsResponse
 */
export interface GetSolutionMetricsResponse {
  /**
   * @schema GetSolutionMetricsResponse#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

  /**
   * @schema GetSolutionMetricsResponse#metrics
   */
  readonly metrics?: { [key: string]: number };

}

/**
 * @schema ListBatchInferenceJobsRequest
 */
export interface ListBatchInferenceJobsRequest {
  /**
   * @schema ListBatchInferenceJobsRequest#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

  /**
   * @schema ListBatchInferenceJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListBatchInferenceJobsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListBatchInferenceJobsResponse
 */
export interface ListBatchInferenceJobsResponse {
  /**
   * @schema ListBatchInferenceJobsResponse#batchInferenceJobs
   */
  readonly batchInferenceJobs?: BatchInferenceJobSummary[];

  /**
   * @schema ListBatchInferenceJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListCampaignsRequest
 */
export interface ListCampaignsRequest {
  /**
   * @schema ListCampaignsRequest#solutionArn
   */
  readonly solutionArn?: string;

  /**
   * @schema ListCampaignsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListCampaignsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListCampaignsResponse
 */
export interface ListCampaignsResponse {
  /**
   * @schema ListCampaignsResponse#campaigns
   */
  readonly campaigns?: CampaignSummary[];

  /**
   * @schema ListCampaignsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDatasetGroupsRequest
 */
export interface ListDatasetGroupsRequest {
  /**
   * @schema ListDatasetGroupsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDatasetGroupsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDatasetGroupsResponse
 */
export interface ListDatasetGroupsResponse {
  /**
   * @schema ListDatasetGroupsResponse#datasetGroups
   */
  readonly datasetGroups?: DatasetGroupSummary[];

  /**
   * @schema ListDatasetGroupsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDatasetImportJobsRequest
 */
export interface ListDatasetImportJobsRequest {
  /**
   * @schema ListDatasetImportJobsRequest#datasetArn
   */
  readonly datasetArn?: string;

  /**
   * @schema ListDatasetImportJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDatasetImportJobsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDatasetImportJobsResponse
 */
export interface ListDatasetImportJobsResponse {
  /**
   * @schema ListDatasetImportJobsResponse#datasetImportJobs
   */
  readonly datasetImportJobs?: DatasetImportJobSummary[];

  /**
   * @schema ListDatasetImportJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDatasetsRequest
 */
export interface ListDatasetsRequest {
  /**
   * @schema ListDatasetsRequest#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema ListDatasetsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListDatasetsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListDatasetsResponse
 */
export interface ListDatasetsResponse {
  /**
   * @schema ListDatasetsResponse#datasets
   */
  readonly datasets?: DatasetSummary[];

  /**
   * @schema ListDatasetsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListEventTrackersRequest
 */
export interface ListEventTrackersRequest {
  /**
   * @schema ListEventTrackersRequest#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema ListEventTrackersRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListEventTrackersRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListEventTrackersResponse
 */
export interface ListEventTrackersResponse {
  /**
   * @schema ListEventTrackersResponse#eventTrackers
   */
  readonly eventTrackers?: EventTrackerSummary[];

  /**
   * @schema ListEventTrackersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListFiltersRequest
 */
export interface ListFiltersRequest {
  /**
   * @schema ListFiltersRequest#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema ListFiltersRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListFiltersRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListFiltersResponse
 */
export interface ListFiltersResponse {
  /**
   * @schema ListFiltersResponse#Filters
   */
  readonly filters?: FilterSummary[];

  /**
   * @schema ListFiltersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRecipesRequest
 */
export interface ListRecipesRequest {
  /**
   * @schema ListRecipesRequest#recipeProvider
   */
  readonly recipeProvider?: string;

  /**
   * @schema ListRecipesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRecipesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListRecipesResponse
 */
export interface ListRecipesResponse {
  /**
   * @schema ListRecipesResponse#recipes
   */
  readonly recipes?: RecipeSummary[];

  /**
   * @schema ListRecipesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSchemasRequest
 */
export interface ListSchemasRequest {
  /**
   * @schema ListSchemasRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSchemasRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListSchemasResponse
 */
export interface ListSchemasResponse {
  /**
   * @schema ListSchemasResponse#schemas
   */
  readonly schemas?: DatasetSchemaSummary[];

  /**
   * @schema ListSchemasResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSolutionVersionsRequest
 */
export interface ListSolutionVersionsRequest {
  /**
   * @schema ListSolutionVersionsRequest#solutionArn
   */
  readonly solutionArn?: string;

  /**
   * @schema ListSolutionVersionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSolutionVersionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListSolutionVersionsResponse
 */
export interface ListSolutionVersionsResponse {
  /**
   * @schema ListSolutionVersionsResponse#solutionVersions
   */
  readonly solutionVersions?: SolutionVersionSummary[];

  /**
   * @schema ListSolutionVersionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSolutionsRequest
 */
export interface ListSolutionsRequest {
  /**
   * @schema ListSolutionsRequest#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema ListSolutionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListSolutionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListSolutionsResponse
 */
export interface ListSolutionsResponse {
  /**
   * @schema ListSolutionsResponse#solutions
   */
  readonly solutions?: SolutionSummary[];

  /**
   * @schema ListSolutionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema UpdateCampaignRequest
 */
export interface UpdateCampaignRequest {
  /**
   * @schema UpdateCampaignRequest#campaignArn
   */
  readonly campaignArn: string;

  /**
   * @schema UpdateCampaignRequest#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

  /**
   * @schema UpdateCampaignRequest#minProvisionedTPS
   */
  readonly minProvisionedTPS?: number;

  /**
   * @schema UpdateCampaignRequest#campaignConfig
   */
  readonly campaignConfig?: CampaignConfig;

}

/**
 * @schema UpdateCampaignResponse
 */
export interface UpdateCampaignResponse {
  /**
   * @schema UpdateCampaignResponse#campaignArn
   */
  readonly campaignArn?: string;

}

/**
 * @schema BatchInferenceJobInput
 */
export interface BatchInferenceJobInput {
  /**
   * @schema BatchInferenceJobInput#s3DataSource
   */
  readonly s3DataSource: S3DataConfig;

}

/**
 * @schema BatchInferenceJobOutput
 */
export interface BatchInferenceJobOutput {
  /**
   * @schema BatchInferenceJobOutput#s3DataDestination
   */
  readonly s3DataDestination: S3DataConfig;

}

/**
 * @schema BatchInferenceJobConfig
 */
export interface BatchInferenceJobConfig {
  /**
   * @schema BatchInferenceJobConfig#itemExplorationConfig
   */
  readonly itemExplorationConfig?: { [key: string]: string };

}

/**
 * @schema CampaignConfig
 */
export interface CampaignConfig {
  /**
   * @schema CampaignConfig#itemExplorationConfig
   */
  readonly itemExplorationConfig?: { [key: string]: string };

}

/**
 * @schema DataSource
 */
export interface DataSource {
  /**
   * @schema DataSource#dataLocation
   */
  readonly dataLocation?: string;

}

/**
 * @schema SolutionConfig
 */
export interface SolutionConfig {
  /**
   * @schema SolutionConfig#eventValueThreshold
   */
  readonly eventValueThreshold?: string;

  /**
   * @schema SolutionConfig#hpoConfig
   */
  readonly hpoConfig?: HpoConfig;

  /**
   * @schema SolutionConfig#algorithmHyperParameters
   */
  readonly algorithmHyperParameters?: { [key: string]: string };

  /**
   * @schema SolutionConfig#featureTransformationParameters
   */
  readonly featureTransformationParameters?: { [key: string]: string };

  /**
   * @schema SolutionConfig#autoMLConfig
   */
  readonly autoMLConfig?: AutoMlConfig;

}

/**
 * @schema Algorithm
 */
export interface Algorithm {
  /**
   * @schema Algorithm#name
   */
  readonly name?: string;

  /**
   * @schema Algorithm#algorithmArn
   */
  readonly algorithmArn?: string;

  /**
   * @schema Algorithm#algorithmImage
   */
  readonly algorithmImage?: AlgorithmImage;

  /**
   * @schema Algorithm#defaultHyperParameters
   */
  readonly defaultHyperParameters?: { [key: string]: string };

  /**
   * @schema Algorithm#defaultHyperParameterRanges
   */
  readonly defaultHyperParameterRanges?: DefaultHyperParameterRanges;

  /**
   * @schema Algorithm#defaultResourceConfig
   */
  readonly defaultResourceConfig?: { [key: string]: string };

  /**
   * @schema Algorithm#trainingInputMode
   */
  readonly trainingInputMode?: string;

  /**
   * @schema Algorithm#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema Algorithm#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema Algorithm#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * @schema BatchInferenceJob
 */
export interface BatchInferenceJob {
  /**
   * @schema BatchInferenceJob#jobName
   */
  readonly jobName?: string;

  /**
   * @schema BatchInferenceJob#batchInferenceJobArn
   */
  readonly batchInferenceJobArn?: string;

  /**
   * @schema BatchInferenceJob#filterArn
   */
  readonly filterArn?: string;

  /**
   * @schema BatchInferenceJob#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema BatchInferenceJob#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

  /**
   * @schema BatchInferenceJob#numResults
   */
  readonly numResults?: number;

  /**
   * @schema BatchInferenceJob#jobInput
   */
  readonly jobInput?: BatchInferenceJobInput;

  /**
   * @schema BatchInferenceJob#jobOutput
   */
  readonly jobOutput?: BatchInferenceJobOutput;

  /**
   * @schema BatchInferenceJob#batchInferenceJobConfig
   */
  readonly batchInferenceJobConfig?: BatchInferenceJobConfig;

  /**
   * @schema BatchInferenceJob#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema BatchInferenceJob#status
   */
  readonly status?: string;

  /**
   * @schema BatchInferenceJob#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema BatchInferenceJob#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * @schema Campaign
 */
export interface Campaign {
  /**
   * @schema Campaign#name
   */
  readonly name?: string;

  /**
   * @schema Campaign#campaignArn
   */
  readonly campaignArn?: string;

  /**
   * @schema Campaign#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

  /**
   * @schema Campaign#minProvisionedTPS
   */
  readonly minProvisionedTPS?: number;

  /**
   * @schema Campaign#campaignConfig
   */
  readonly campaignConfig?: CampaignConfig;

  /**
   * @schema Campaign#status
   */
  readonly status?: string;

  /**
   * @schema Campaign#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema Campaign#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema Campaign#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema Campaign#latestCampaignUpdate
   */
  readonly latestCampaignUpdate?: CampaignUpdateSummary;

}

/**
 * @schema Dataset
 */
export interface Dataset {
  /**
   * @schema Dataset#name
   */
  readonly name?: string;

  /**
   * @schema Dataset#datasetArn
   */
  readonly datasetArn?: string;

  /**
   * @schema Dataset#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema Dataset#datasetType
   */
  readonly datasetType?: string;

  /**
   * @schema Dataset#schemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema Dataset#status
   */
  readonly status?: string;

  /**
   * @schema Dataset#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema Dataset#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * @schema DatasetGroup
 */
export interface DatasetGroup {
  /**
   * @schema DatasetGroup#name
   */
  readonly name?: string;

  /**
   * @schema DatasetGroup#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema DatasetGroup#status
   */
  readonly status?: string;

  /**
   * @schema DatasetGroup#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DatasetGroup#kmsKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema DatasetGroup#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema DatasetGroup#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema DatasetGroup#failureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema DatasetImportJob
 */
export interface DatasetImportJob {
  /**
   * @schema DatasetImportJob#jobName
   */
  readonly jobName?: string;

  /**
   * @schema DatasetImportJob#datasetImportJobArn
   */
  readonly datasetImportJobArn?: string;

  /**
   * @schema DatasetImportJob#datasetArn
   */
  readonly datasetArn?: string;

  /**
   * @schema DatasetImportJob#dataSource
   */
  readonly dataSource?: DataSource;

  /**
   * @schema DatasetImportJob#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DatasetImportJob#status
   */
  readonly status?: string;

  /**
   * @schema DatasetImportJob#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema DatasetImportJob#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema DatasetImportJob#failureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema EventTracker
 */
export interface EventTracker {
  /**
   * @schema EventTracker#name
   */
  readonly name?: string;

  /**
   * @schema EventTracker#eventTrackerArn
   */
  readonly eventTrackerArn?: string;

  /**
   * @schema EventTracker#accountId
   */
  readonly accountId?: string;

  /**
   * @schema EventTracker#trackingId
   */
  readonly trackingId?: string;

  /**
   * @schema EventTracker#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema EventTracker#status
   */
  readonly status?: string;

  /**
   * @schema EventTracker#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema EventTracker#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * @schema FeatureTransformation
 */
export interface FeatureTransformation {
  /**
   * @schema FeatureTransformation#name
   */
  readonly name?: string;

  /**
   * @schema FeatureTransformation#featureTransformationArn
   */
  readonly featureTransformationArn?: string;

  /**
   * @schema FeatureTransformation#defaultParameters
   */
  readonly defaultParameters?: { [key: string]: string };

  /**
   * @schema FeatureTransformation#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema FeatureTransformation#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema FeatureTransformation#status
   */
  readonly status?: string;

}

/**
 * @schema Filter
 */
export interface Filter {
  /**
   * @schema Filter#name
   */
  readonly name?: string;

  /**
   * @schema Filter#filterArn
   */
  readonly filterArn?: string;

  /**
   * @schema Filter#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema Filter#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema Filter#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema Filter#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema Filter#filterExpression
   */
  readonly filterExpression?: string;

  /**
   * @schema Filter#status
   */
  readonly status?: string;

}

/**
 * @schema Recipe
 */
export interface Recipe {
  /**
   * @schema Recipe#name
   */
  readonly name?: string;

  /**
   * @schema Recipe#recipeArn
   */
  readonly recipeArn?: string;

  /**
   * @schema Recipe#algorithmArn
   */
  readonly algorithmArn?: string;

  /**
   * @schema Recipe#featureTransformationArn
   */
  readonly featureTransformationArn?: string;

  /**
   * @schema Recipe#status
   */
  readonly status?: string;

  /**
   * @schema Recipe#description
   */
  readonly description?: string;

  /**
   * @schema Recipe#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema Recipe#recipeType
   */
  readonly recipeType?: string;

  /**
   * @schema Recipe#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * @schema DatasetSchema
 */
export interface DatasetSchema {
  /**
   * @schema DatasetSchema#name
   */
  readonly name?: string;

  /**
   * @schema DatasetSchema#schemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema DatasetSchema#schema
   */
  readonly schema?: string;

  /**
   * @schema DatasetSchema#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema DatasetSchema#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * @schema Solution
 */
export interface Solution {
  /**
   * @schema Solution#name
   */
  readonly name?: string;

  /**
   * @schema Solution#solutionArn
   */
  readonly solutionArn?: string;

  /**
   * @schema Solution#performHPO
   */
  readonly performHPO?: boolean;

  /**
   * @schema Solution#performAutoML
   */
  readonly performAutoML?: boolean;

  /**
   * @schema Solution#recipeArn
   */
  readonly recipeArn?: string;

  /**
   * @schema Solution#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema Solution#eventType
   */
  readonly eventType?: string;

  /**
   * @schema Solution#solutionConfig
   */
  readonly solutionConfig?: SolutionConfig;

  /**
   * @schema Solution#autoMLResult
   */
  readonly autoMLResult?: AutoMlResult;

  /**
   * @schema Solution#status
   */
  readonly status?: string;

  /**
   * @schema Solution#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema Solution#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema Solution#latestSolutionVersion
   */
  readonly latestSolutionVersion?: SolutionVersionSummary;

}

/**
 * @schema SolutionVersion
 */
export interface SolutionVersion {
  /**
   * @schema SolutionVersion#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

  /**
   * @schema SolutionVersion#solutionArn
   */
  readonly solutionArn?: string;

  /**
   * @schema SolutionVersion#performHPO
   */
  readonly performHPO?: boolean;

  /**
   * @schema SolutionVersion#performAutoML
   */
  readonly performAutoML?: boolean;

  /**
   * @schema SolutionVersion#recipeArn
   */
  readonly recipeArn?: string;

  /**
   * @schema SolutionVersion#eventType
   */
  readonly eventType?: string;

  /**
   * @schema SolutionVersion#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema SolutionVersion#solutionConfig
   */
  readonly solutionConfig?: SolutionConfig;

  /**
   * @schema SolutionVersion#trainingHours
   */
  readonly trainingHours?: number;

  /**
   * @schema SolutionVersion#trainingMode
   */
  readonly trainingMode?: string;

  /**
   * @schema SolutionVersion#tunedHPOParams
   */
  readonly tunedHPOParams?: TunedHpoParams;

  /**
   * @schema SolutionVersion#status
   */
  readonly status?: string;

  /**
   * @schema SolutionVersion#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema SolutionVersion#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema SolutionVersion#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * @schema BatchInferenceJobSummary
 */
export interface BatchInferenceJobSummary {
  /**
   * @schema BatchInferenceJobSummary#batchInferenceJobArn
   */
  readonly batchInferenceJobArn?: string;

  /**
   * @schema BatchInferenceJobSummary#jobName
   */
  readonly jobName?: string;

  /**
   * @schema BatchInferenceJobSummary#status
   */
  readonly status?: string;

  /**
   * @schema BatchInferenceJobSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema BatchInferenceJobSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema BatchInferenceJobSummary#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema BatchInferenceJobSummary#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

}

/**
 * @schema CampaignSummary
 */
export interface CampaignSummary {
  /**
   * @schema CampaignSummary#name
   */
  readonly name?: string;

  /**
   * @schema CampaignSummary#campaignArn
   */
  readonly campaignArn?: string;

  /**
   * @schema CampaignSummary#status
   */
  readonly status?: string;

  /**
   * @schema CampaignSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema CampaignSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema CampaignSummary#failureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema DatasetGroupSummary
 */
export interface DatasetGroupSummary {
  /**
   * @schema DatasetGroupSummary#name
   */
  readonly name?: string;

  /**
   * @schema DatasetGroupSummary#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema DatasetGroupSummary#status
   */
  readonly status?: string;

  /**
   * @schema DatasetGroupSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema DatasetGroupSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema DatasetGroupSummary#failureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema DatasetImportJobSummary
 */
export interface DatasetImportJobSummary {
  /**
   * @schema DatasetImportJobSummary#datasetImportJobArn
   */
  readonly datasetImportJobArn?: string;

  /**
   * @schema DatasetImportJobSummary#jobName
   */
  readonly jobName?: string;

  /**
   * @schema DatasetImportJobSummary#status
   */
  readonly status?: string;

  /**
   * @schema DatasetImportJobSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema DatasetImportJobSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema DatasetImportJobSummary#failureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema DatasetSummary
 */
export interface DatasetSummary {
  /**
   * @schema DatasetSummary#name
   */
  readonly name?: string;

  /**
   * @schema DatasetSummary#datasetArn
   */
  readonly datasetArn?: string;

  /**
   * @schema DatasetSummary#datasetType
   */
  readonly datasetType?: string;

  /**
   * @schema DatasetSummary#status
   */
  readonly status?: string;

  /**
   * @schema DatasetSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema DatasetSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * @schema EventTrackerSummary
 */
export interface EventTrackerSummary {
  /**
   * @schema EventTrackerSummary#name
   */
  readonly name?: string;

  /**
   * @schema EventTrackerSummary#eventTrackerArn
   */
  readonly eventTrackerArn?: string;

  /**
   * @schema EventTrackerSummary#status
   */
  readonly status?: string;

  /**
   * @schema EventTrackerSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema EventTrackerSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * @schema FilterSummary
 */
export interface FilterSummary {
  /**
   * @schema FilterSummary#name
   */
  readonly name?: string;

  /**
   * @schema FilterSummary#filterArn
   */
  readonly filterArn?: string;

  /**
   * @schema FilterSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema FilterSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema FilterSummary#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema FilterSummary#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema FilterSummary#status
   */
  readonly status?: string;

}

/**
 * @schema RecipeSummary
 */
export interface RecipeSummary {
  /**
   * @schema RecipeSummary#name
   */
  readonly name?: string;

  /**
   * @schema RecipeSummary#recipeArn
   */
  readonly recipeArn?: string;

  /**
   * @schema RecipeSummary#status
   */
  readonly status?: string;

  /**
   * @schema RecipeSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema RecipeSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * @schema DatasetSchemaSummary
 */
export interface DatasetSchemaSummary {
  /**
   * @schema DatasetSchemaSummary#name
   */
  readonly name?: string;

  /**
   * @schema DatasetSchemaSummary#schemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema DatasetSchemaSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema DatasetSchemaSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * @schema SolutionVersionSummary
 */
export interface SolutionVersionSummary {
  /**
   * @schema SolutionVersionSummary#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

  /**
   * @schema SolutionVersionSummary#status
   */
  readonly status?: string;

  /**
   * @schema SolutionVersionSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema SolutionVersionSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema SolutionVersionSummary#failureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema SolutionSummary
 */
export interface SolutionSummary {
  /**
   * @schema SolutionSummary#name
   */
  readonly name?: string;

  /**
   * @schema SolutionSummary#solutionArn
   */
  readonly solutionArn?: string;

  /**
   * @schema SolutionSummary#status
   */
  readonly status?: string;

  /**
   * @schema SolutionSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema SolutionSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * @schema S3DataConfig
 */
export interface S3DataConfig {
  /**
   * @schema S3DataConfig#path
   */
  readonly path: string;

  /**
   * @schema S3DataConfig#kmsKeyArn
   */
  readonly kmsKeyArn?: string;

}

/**
 * @schema HpoConfig
 */
export interface HpoConfig {
  /**
   * @schema HpoConfig#hpoObjective
   */
  readonly hpoObjective?: HpoObjective;

  /**
   * @schema HpoConfig#hpoResourceConfig
   */
  readonly hpoResourceConfig?: HpoResourceConfig;

  /**
   * @schema HpoConfig#algorithmHyperParameterRanges
   */
  readonly algorithmHyperParameterRanges?: HyperParameterRanges;

}

/**
 * @schema AutoMlConfig
 */
export interface AutoMlConfig {
  /**
   * @schema AutoMlConfig#metricName
   */
  readonly metricName?: string;

  /**
   * @schema AutoMlConfig#recipeList
   */
  readonly recipeList?: string[];

}

/**
 * @schema AlgorithmImage
 */
export interface AlgorithmImage {
  /**
   * @schema AlgorithmImage#name
   */
  readonly name?: string;

  /**
   * @schema AlgorithmImage#dockerURI
   */
  readonly dockerURI?: string;

}

/**
 * @schema DefaultHyperParameterRanges
 */
export interface DefaultHyperParameterRanges {
  /**
   * @schema DefaultHyperParameterRanges#integerHyperParameterRanges
   */
  readonly integerHyperParameterRanges?: DefaultIntegerHyperParameterRange[];

  /**
   * @schema DefaultHyperParameterRanges#continuousHyperParameterRanges
   */
  readonly continuousHyperParameterRanges?: DefaultContinuousHyperParameterRange[];

  /**
   * @schema DefaultHyperParameterRanges#categoricalHyperParameterRanges
   */
  readonly categoricalHyperParameterRanges?: DefaultCategoricalHyperParameterRange[];

}

/**
 * @schema CampaignUpdateSummary
 */
export interface CampaignUpdateSummary {
  /**
   * @schema CampaignUpdateSummary#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

  /**
   * @schema CampaignUpdateSummary#minProvisionedTPS
   */
  readonly minProvisionedTPS?: number;

  /**
   * @schema CampaignUpdateSummary#campaignConfig
   */
  readonly campaignConfig?: CampaignConfig;

  /**
   * @schema CampaignUpdateSummary#status
   */
  readonly status?: string;

  /**
   * @schema CampaignUpdateSummary#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema CampaignUpdateSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema CampaignUpdateSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * @schema AutoMlResult
 */
export interface AutoMlResult {
  /**
   * @schema AutoMlResult#bestRecipeArn
   */
  readonly bestRecipeArn?: string;

}

/**
 * @schema TunedHpoParams
 */
export interface TunedHpoParams {
  /**
   * @schema TunedHpoParams#algorithmHyperParameters
   */
  readonly algorithmHyperParameters?: { [key: string]: string };

}

/**
 * @schema HpoObjective
 */
export interface HpoObjective {
  /**
   * @schema HpoObjective#type
   */
  readonly type?: string;

  /**
   * @schema HpoObjective#metricName
   */
  readonly metricName?: string;

  /**
   * @schema HpoObjective#metricRegex
   */
  readonly metricRegex?: string;

}

/**
 * @schema HpoResourceConfig
 */
export interface HpoResourceConfig {
  /**
   * @schema HpoResourceConfig#maxNumberOfTrainingJobs
   */
  readonly maxNumberOfTrainingJobs?: string;

  /**
   * @schema HpoResourceConfig#maxParallelTrainingJobs
   */
  readonly maxParallelTrainingJobs?: string;

}

/**
 * @schema HyperParameterRanges
 */
export interface HyperParameterRanges {
  /**
   * @schema HyperParameterRanges#integerHyperParameterRanges
   */
  readonly integerHyperParameterRanges?: IntegerHyperParameterRange[];

  /**
   * @schema HyperParameterRanges#continuousHyperParameterRanges
   */
  readonly continuousHyperParameterRanges?: ContinuousHyperParameterRange[];

  /**
   * @schema HyperParameterRanges#categoricalHyperParameterRanges
   */
  readonly categoricalHyperParameterRanges?: CategoricalHyperParameterRange[];

}

/**
 * @schema DefaultIntegerHyperParameterRange
 */
export interface DefaultIntegerHyperParameterRange {
  /**
   * @schema DefaultIntegerHyperParameterRange#name
   */
  readonly name?: string;

  /**
   * @schema DefaultIntegerHyperParameterRange#minValue
   */
  readonly minValue?: number;

  /**
   * @schema DefaultIntegerHyperParameterRange#maxValue
   */
  readonly maxValue?: number;

  /**
   * @schema DefaultIntegerHyperParameterRange#isTunable
   */
  readonly isTunable?: boolean;

}

/**
 * @schema DefaultContinuousHyperParameterRange
 */
export interface DefaultContinuousHyperParameterRange {
  /**
   * @schema DefaultContinuousHyperParameterRange#name
   */
  readonly name?: string;

  /**
   * @schema DefaultContinuousHyperParameterRange#minValue
   */
  readonly minValue?: number;

  /**
   * @schema DefaultContinuousHyperParameterRange#maxValue
   */
  readonly maxValue?: number;

  /**
   * @schema DefaultContinuousHyperParameterRange#isTunable
   */
  readonly isTunable?: boolean;

}

/**
 * @schema DefaultCategoricalHyperParameterRange
 */
export interface DefaultCategoricalHyperParameterRange {
  /**
   * @schema DefaultCategoricalHyperParameterRange#name
   */
  readonly name?: string;

  /**
   * @schema DefaultCategoricalHyperParameterRange#values
   */
  readonly values?: string[];

  /**
   * @schema DefaultCategoricalHyperParameterRange#isTunable
   */
  readonly isTunable?: boolean;

}

/**
 * @schema IntegerHyperParameterRange
 */
export interface IntegerHyperParameterRange {
  /**
   * @schema IntegerHyperParameterRange#name
   */
  readonly name?: string;

  /**
   * @schema IntegerHyperParameterRange#minValue
   */
  readonly minValue?: number;

  /**
   * @schema IntegerHyperParameterRange#maxValue
   */
  readonly maxValue?: number;

}

/**
 * @schema ContinuousHyperParameterRange
 */
export interface ContinuousHyperParameterRange {
  /**
   * @schema ContinuousHyperParameterRange#name
   */
  readonly name?: string;

  /**
   * @schema ContinuousHyperParameterRange#minValue
   */
  readonly minValue?: number;

  /**
   * @schema ContinuousHyperParameterRange#maxValue
   */
  readonly maxValue?: number;

}

/**
 * @schema CategoricalHyperParameterRange
 */
export interface CategoricalHyperParameterRange {
  /**
   * @schema CategoricalHyperParameterRange#name
   */
  readonly name?: string;

  /**
   * @schema CategoricalHyperParameterRange#values
   */
  readonly values?: string[];

}
