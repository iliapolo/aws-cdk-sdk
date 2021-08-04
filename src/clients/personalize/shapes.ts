/**
 * @schema PersonalizeCreateBatchInferenceJobRequest
 */
export interface PersonalizeCreateBatchInferenceJobRequest {
  /**
   * @schema PersonalizeCreateBatchInferenceJobRequest#jobName
   */
  readonly jobName: string;

  /**
   * @schema PersonalizeCreateBatchInferenceJobRequest#solutionVersionArn
   */
  readonly solutionVersionArn: string;

  /**
   * @schema PersonalizeCreateBatchInferenceJobRequest#filterArn
   */
  readonly filterArn?: string;

  /**
   * @schema PersonalizeCreateBatchInferenceJobRequest#numResults
   */
  readonly numResults?: number;

  /**
   * @schema PersonalizeCreateBatchInferenceJobRequest#jobInput
   */
  readonly jobInput: PersonalizeBatchInferenceJobInput;

  /**
   * @schema PersonalizeCreateBatchInferenceJobRequest#jobOutput
   */
  readonly jobOutput: PersonalizeBatchInferenceJobOutput;

  /**
   * @schema PersonalizeCreateBatchInferenceJobRequest#roleArn
   */
  readonly roleArn: string;

  /**
   * @schema PersonalizeCreateBatchInferenceJobRequest#batchInferenceJobConfig
   */
  readonly batchInferenceJobConfig?: PersonalizeBatchInferenceJobConfig;

}

/**
 * @schema PersonalizeCreateBatchInferenceJobResponse
 */
export interface PersonalizeCreateBatchInferenceJobResponse {
  /**
   * @schema PersonalizeCreateBatchInferenceJobResponse#batchInferenceJobArn
   */
  readonly batchInferenceJobArn?: string;

}

/**
 * @schema PersonalizeCreateCampaignRequest
 */
export interface PersonalizeCreateCampaignRequest {
  /**
   * @schema PersonalizeCreateCampaignRequest#name
   */
  readonly name: string;

  /**
   * @schema PersonalizeCreateCampaignRequest#solutionVersionArn
   */
  readonly solutionVersionArn: string;

  /**
   * @schema PersonalizeCreateCampaignRequest#minProvisionedTPS
   */
  readonly minProvisionedTPS?: number;

  /**
   * @schema PersonalizeCreateCampaignRequest#campaignConfig
   */
  readonly campaignConfig?: PersonalizeCampaignConfig;

}

/**
 * @schema PersonalizeCreateCampaignResponse
 */
export interface PersonalizeCreateCampaignResponse {
  /**
   * @schema PersonalizeCreateCampaignResponse#campaignArn
   */
  readonly campaignArn?: string;

}

/**
 * @schema PersonalizeCreateDatasetRequest
 */
export interface PersonalizeCreateDatasetRequest {
  /**
   * @schema PersonalizeCreateDatasetRequest#name
   */
  readonly name: string;

  /**
   * @schema PersonalizeCreateDatasetRequest#schemaArn
   */
  readonly schemaArn: string;

  /**
   * @schema PersonalizeCreateDatasetRequest#datasetGroupArn
   */
  readonly datasetGroupArn: string;

  /**
   * @schema PersonalizeCreateDatasetRequest#datasetType
   */
  readonly datasetType: string;

}

/**
 * @schema PersonalizeCreateDatasetResponse
 */
export interface PersonalizeCreateDatasetResponse {
  /**
   * @schema PersonalizeCreateDatasetResponse#datasetArn
   */
  readonly datasetArn?: string;

}

/**
 * @schema PersonalizeCreateDatasetGroupRequest
 */
export interface PersonalizeCreateDatasetGroupRequest {
  /**
   * @schema PersonalizeCreateDatasetGroupRequest#name
   */
  readonly name: string;

  /**
   * @schema PersonalizeCreateDatasetGroupRequest#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema PersonalizeCreateDatasetGroupRequest#kmsKeyArn
   */
  readonly kmsKeyArn?: string;

}

/**
 * @schema PersonalizeCreateDatasetGroupResponse
 */
export interface PersonalizeCreateDatasetGroupResponse {
  /**
   * @schema PersonalizeCreateDatasetGroupResponse#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

}

/**
 * @schema PersonalizeCreateDatasetImportJobRequest
 */
export interface PersonalizeCreateDatasetImportJobRequest {
  /**
   * @schema PersonalizeCreateDatasetImportJobRequest#jobName
   */
  readonly jobName: string;

  /**
   * @schema PersonalizeCreateDatasetImportJobRequest#datasetArn
   */
  readonly datasetArn: string;

  /**
   * @schema PersonalizeCreateDatasetImportJobRequest#dataSource
   */
  readonly dataSource: PersonalizeDataSource;

  /**
   * @schema PersonalizeCreateDatasetImportJobRequest#roleArn
   */
  readonly roleArn: string;

}

/**
 * @schema PersonalizeCreateDatasetImportJobResponse
 */
export interface PersonalizeCreateDatasetImportJobResponse {
  /**
   * @schema PersonalizeCreateDatasetImportJobResponse#datasetImportJobArn
   */
  readonly datasetImportJobArn?: string;

}

/**
 * @schema PersonalizeCreateEventTrackerRequest
 */
export interface PersonalizeCreateEventTrackerRequest {
  /**
   * @schema PersonalizeCreateEventTrackerRequest#name
   */
  readonly name: string;

  /**
   * @schema PersonalizeCreateEventTrackerRequest#datasetGroupArn
   */
  readonly datasetGroupArn: string;

}

/**
 * @schema PersonalizeCreateEventTrackerResponse
 */
export interface PersonalizeCreateEventTrackerResponse {
  /**
   * @schema PersonalizeCreateEventTrackerResponse#eventTrackerArn
   */
  readonly eventTrackerArn?: string;

  /**
   * @schema PersonalizeCreateEventTrackerResponse#trackingId
   */
  readonly trackingId?: string;

}

/**
 * @schema PersonalizeCreateFilterRequest
 */
export interface PersonalizeCreateFilterRequest {
  /**
   * @schema PersonalizeCreateFilterRequest#name
   */
  readonly name: string;

  /**
   * @schema PersonalizeCreateFilterRequest#datasetGroupArn
   */
  readonly datasetGroupArn: string;

  /**
   * @schema PersonalizeCreateFilterRequest#filterExpression
   */
  readonly filterExpression: string;

}

/**
 * @schema PersonalizeCreateFilterResponse
 */
export interface PersonalizeCreateFilterResponse {
  /**
   * @schema PersonalizeCreateFilterResponse#filterArn
   */
  readonly filterArn?: string;

}

/**
 * @schema PersonalizeCreateSchemaRequest
 */
export interface PersonalizeCreateSchemaRequest {
  /**
   * @schema PersonalizeCreateSchemaRequest#name
   */
  readonly name: string;

  /**
   * @schema PersonalizeCreateSchemaRequest#schema
   */
  readonly schema: string;

}

/**
 * @schema PersonalizeCreateSchemaResponse
 */
export interface PersonalizeCreateSchemaResponse {
  /**
   * @schema PersonalizeCreateSchemaResponse#schemaArn
   */
  readonly schemaArn?: string;

}

/**
 * @schema PersonalizeCreateSolutionRequest
 */
export interface PersonalizeCreateSolutionRequest {
  /**
   * @schema PersonalizeCreateSolutionRequest#name
   */
  readonly name: string;

  /**
   * @schema PersonalizeCreateSolutionRequest#performHPO
   */
  readonly performHPO?: boolean;

  /**
   * @schema PersonalizeCreateSolutionRequest#performAutoML
   */
  readonly performAutoML?: boolean;

  /**
   * @schema PersonalizeCreateSolutionRequest#recipeArn
   */
  readonly recipeArn?: string;

  /**
   * @schema PersonalizeCreateSolutionRequest#datasetGroupArn
   */
  readonly datasetGroupArn: string;

  /**
   * @schema PersonalizeCreateSolutionRequest#eventType
   */
  readonly eventType?: string;

  /**
   * @schema PersonalizeCreateSolutionRequest#solutionConfig
   */
  readonly solutionConfig?: PersonalizeSolutionConfig;

}

/**
 * @schema PersonalizeCreateSolutionResponse
 */
export interface PersonalizeCreateSolutionResponse {
  /**
   * @schema PersonalizeCreateSolutionResponse#solutionArn
   */
  readonly solutionArn?: string;

}

/**
 * @schema PersonalizeCreateSolutionVersionRequest
 */
export interface PersonalizeCreateSolutionVersionRequest {
  /**
   * @schema PersonalizeCreateSolutionVersionRequest#solutionArn
   */
  readonly solutionArn: string;

  /**
   * @schema PersonalizeCreateSolutionVersionRequest#trainingMode
   */
  readonly trainingMode?: string;

}

/**
 * @schema PersonalizeCreateSolutionVersionResponse
 */
export interface PersonalizeCreateSolutionVersionResponse {
  /**
   * @schema PersonalizeCreateSolutionVersionResponse#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

}

/**
 * @schema PersonalizeDeleteCampaignRequest
 */
export interface PersonalizeDeleteCampaignRequest {
  /**
   * @schema PersonalizeDeleteCampaignRequest#campaignArn
   */
  readonly campaignArn: string;

}

/**
 * @schema PersonalizeDeleteDatasetRequest
 */
export interface PersonalizeDeleteDatasetRequest {
  /**
   * @schema PersonalizeDeleteDatasetRequest#datasetArn
   */
  readonly datasetArn: string;

}

/**
 * @schema PersonalizeDeleteDatasetGroupRequest
 */
export interface PersonalizeDeleteDatasetGroupRequest {
  /**
   * @schema PersonalizeDeleteDatasetGroupRequest#datasetGroupArn
   */
  readonly datasetGroupArn: string;

}

/**
 * @schema PersonalizeDeleteEventTrackerRequest
 */
export interface PersonalizeDeleteEventTrackerRequest {
  /**
   * @schema PersonalizeDeleteEventTrackerRequest#eventTrackerArn
   */
  readonly eventTrackerArn: string;

}

/**
 * @schema PersonalizeDeleteFilterRequest
 */
export interface PersonalizeDeleteFilterRequest {
  /**
   * @schema PersonalizeDeleteFilterRequest#filterArn
   */
  readonly filterArn: string;

}

/**
 * @schema PersonalizeDeleteSchemaRequest
 */
export interface PersonalizeDeleteSchemaRequest {
  /**
   * @schema PersonalizeDeleteSchemaRequest#schemaArn
   */
  readonly schemaArn: string;

}

/**
 * @schema PersonalizeDeleteSolutionRequest
 */
export interface PersonalizeDeleteSolutionRequest {
  /**
   * @schema PersonalizeDeleteSolutionRequest#solutionArn
   */
  readonly solutionArn: string;

}

/**
 * @schema PersonalizeDescribeAlgorithmRequest
 */
export interface PersonalizeDescribeAlgorithmRequest {
  /**
   * @schema PersonalizeDescribeAlgorithmRequest#algorithmArn
   */
  readonly algorithmArn: string;

}

/**
 * @schema PersonalizeDescribeAlgorithmResponse
 */
export interface PersonalizeDescribeAlgorithmResponse {
  /**
   * @schema PersonalizeDescribeAlgorithmResponse#algorithm
   */
  readonly algorithm?: PersonalizeAlgorithm;

}

/**
 * @schema PersonalizeDescribeBatchInferenceJobRequest
 */
export interface PersonalizeDescribeBatchInferenceJobRequest {
  /**
   * @schema PersonalizeDescribeBatchInferenceJobRequest#batchInferenceJobArn
   */
  readonly batchInferenceJobArn: string;

}

/**
 * @schema PersonalizeDescribeBatchInferenceJobResponse
 */
export interface PersonalizeDescribeBatchInferenceJobResponse {
  /**
   * @schema PersonalizeDescribeBatchInferenceJobResponse#batchInferenceJob
   */
  readonly batchInferenceJob?: PersonalizeBatchInferenceJob;

}

/**
 * @schema PersonalizeDescribeCampaignRequest
 */
export interface PersonalizeDescribeCampaignRequest {
  /**
   * @schema PersonalizeDescribeCampaignRequest#campaignArn
   */
  readonly campaignArn: string;

}

/**
 * @schema PersonalizeDescribeCampaignResponse
 */
export interface PersonalizeDescribeCampaignResponse {
  /**
   * @schema PersonalizeDescribeCampaignResponse#campaign
   */
  readonly campaign?: PersonalizeCampaign;

}

/**
 * @schema PersonalizeDescribeDatasetRequest
 */
export interface PersonalizeDescribeDatasetRequest {
  /**
   * @schema PersonalizeDescribeDatasetRequest#datasetArn
   */
  readonly datasetArn: string;

}

/**
 * @schema PersonalizeDescribeDatasetResponse
 */
export interface PersonalizeDescribeDatasetResponse {
  /**
   * @schema PersonalizeDescribeDatasetResponse#dataset
   */
  readonly dataset?: PersonalizeDataset;

}

/**
 * @schema PersonalizeDescribeDatasetGroupRequest
 */
export interface PersonalizeDescribeDatasetGroupRequest {
  /**
   * @schema PersonalizeDescribeDatasetGroupRequest#datasetGroupArn
   */
  readonly datasetGroupArn: string;

}

/**
 * @schema PersonalizeDescribeDatasetGroupResponse
 */
export interface PersonalizeDescribeDatasetGroupResponse {
  /**
   * @schema PersonalizeDescribeDatasetGroupResponse#datasetGroup
   */
  readonly datasetGroup?: PersonalizeDatasetGroup;

}

/**
 * @schema PersonalizeDescribeDatasetImportJobRequest
 */
export interface PersonalizeDescribeDatasetImportJobRequest {
  /**
   * @schema PersonalizeDescribeDatasetImportJobRequest#datasetImportJobArn
   */
  readonly datasetImportJobArn: string;

}

/**
 * @schema PersonalizeDescribeDatasetImportJobResponse
 */
export interface PersonalizeDescribeDatasetImportJobResponse {
  /**
   * @schema PersonalizeDescribeDatasetImportJobResponse#datasetImportJob
   */
  readonly datasetImportJob?: PersonalizeDatasetImportJob;

}

/**
 * @schema PersonalizeDescribeEventTrackerRequest
 */
export interface PersonalizeDescribeEventTrackerRequest {
  /**
   * @schema PersonalizeDescribeEventTrackerRequest#eventTrackerArn
   */
  readonly eventTrackerArn: string;

}

/**
 * @schema PersonalizeDescribeEventTrackerResponse
 */
export interface PersonalizeDescribeEventTrackerResponse {
  /**
   * @schema PersonalizeDescribeEventTrackerResponse#eventTracker
   */
  readonly eventTracker?: PersonalizeEventTracker;

}

/**
 * @schema PersonalizeDescribeFeatureTransformationRequest
 */
export interface PersonalizeDescribeFeatureTransformationRequest {
  /**
   * @schema PersonalizeDescribeFeatureTransformationRequest#featureTransformationArn
   */
  readonly featureTransformationArn: string;

}

/**
 * @schema PersonalizeDescribeFeatureTransformationResponse
 */
export interface PersonalizeDescribeFeatureTransformationResponse {
  /**
   * @schema PersonalizeDescribeFeatureTransformationResponse#featureTransformation
   */
  readonly featureTransformation?: PersonalizeFeatureTransformation;

}

/**
 * @schema PersonalizeDescribeFilterRequest
 */
export interface PersonalizeDescribeFilterRequest {
  /**
   * @schema PersonalizeDescribeFilterRequest#filterArn
   */
  readonly filterArn: string;

}

/**
 * @schema PersonalizeDescribeFilterResponse
 */
export interface PersonalizeDescribeFilterResponse {
  /**
   * @schema PersonalizeDescribeFilterResponse#filter
   */
  readonly filter?: PersonalizeFilter;

}

/**
 * @schema PersonalizeDescribeRecipeRequest
 */
export interface PersonalizeDescribeRecipeRequest {
  /**
   * @schema PersonalizeDescribeRecipeRequest#recipeArn
   */
  readonly recipeArn: string;

}

/**
 * @schema PersonalizeDescribeRecipeResponse
 */
export interface PersonalizeDescribeRecipeResponse {
  /**
   * @schema PersonalizeDescribeRecipeResponse#recipe
   */
  readonly recipe?: PersonalizeRecipe;

}

/**
 * @schema PersonalizeDescribeSchemaRequest
 */
export interface PersonalizeDescribeSchemaRequest {
  /**
   * @schema PersonalizeDescribeSchemaRequest#schemaArn
   */
  readonly schemaArn: string;

}

/**
 * @schema PersonalizeDescribeSchemaResponse
 */
export interface PersonalizeDescribeSchemaResponse {
  /**
   * @schema PersonalizeDescribeSchemaResponse#schema
   */
  readonly schema?: PersonalizeDatasetSchema;

}

/**
 * @schema PersonalizeDescribeSolutionRequest
 */
export interface PersonalizeDescribeSolutionRequest {
  /**
   * @schema PersonalizeDescribeSolutionRequest#solutionArn
   */
  readonly solutionArn: string;

}

/**
 * @schema PersonalizeDescribeSolutionResponse
 */
export interface PersonalizeDescribeSolutionResponse {
  /**
   * @schema PersonalizeDescribeSolutionResponse#solution
   */
  readonly solution?: PersonalizeSolution;

}

/**
 * @schema PersonalizeDescribeSolutionVersionRequest
 */
export interface PersonalizeDescribeSolutionVersionRequest {
  /**
   * @schema PersonalizeDescribeSolutionVersionRequest#solutionVersionArn
   */
  readonly solutionVersionArn: string;

}

/**
 * @schema PersonalizeDescribeSolutionVersionResponse
 */
export interface PersonalizeDescribeSolutionVersionResponse {
  /**
   * @schema PersonalizeDescribeSolutionVersionResponse#solutionVersion
   */
  readonly solutionVersion?: PersonalizeSolutionVersion;

}

/**
 * @schema PersonalizeGetSolutionMetricsRequest
 */
export interface PersonalizeGetSolutionMetricsRequest {
  /**
   * @schema PersonalizeGetSolutionMetricsRequest#solutionVersionArn
   */
  readonly solutionVersionArn: string;

}

/**
 * @schema PersonalizeGetSolutionMetricsResponse
 */
export interface PersonalizeGetSolutionMetricsResponse {
  /**
   * @schema PersonalizeGetSolutionMetricsResponse#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

  /**
   * @schema PersonalizeGetSolutionMetricsResponse#metrics
   */
  readonly metrics?: { [key: string]: number };

}

/**
 * @schema PersonalizeListBatchInferenceJobsRequest
 */
export interface PersonalizeListBatchInferenceJobsRequest {
  /**
   * @schema PersonalizeListBatchInferenceJobsRequest#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

  /**
   * @schema PersonalizeListBatchInferenceJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PersonalizeListBatchInferenceJobsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema PersonalizeListBatchInferenceJobsResponse
 */
export interface PersonalizeListBatchInferenceJobsResponse {
  /**
   * @schema PersonalizeListBatchInferenceJobsResponse#batchInferenceJobs
   */
  readonly batchInferenceJobs?: PersonalizeBatchInferenceJobSummary[];

  /**
   * @schema PersonalizeListBatchInferenceJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PersonalizeListCampaignsRequest
 */
export interface PersonalizeListCampaignsRequest {
  /**
   * @schema PersonalizeListCampaignsRequest#solutionArn
   */
  readonly solutionArn?: string;

  /**
   * @schema PersonalizeListCampaignsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PersonalizeListCampaignsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema PersonalizeListCampaignsResponse
 */
export interface PersonalizeListCampaignsResponse {
  /**
   * @schema PersonalizeListCampaignsResponse#campaigns
   */
  readonly campaigns?: PersonalizeCampaignSummary[];

  /**
   * @schema PersonalizeListCampaignsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PersonalizeListDatasetGroupsRequest
 */
export interface PersonalizeListDatasetGroupsRequest {
  /**
   * @schema PersonalizeListDatasetGroupsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PersonalizeListDatasetGroupsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema PersonalizeListDatasetGroupsResponse
 */
export interface PersonalizeListDatasetGroupsResponse {
  /**
   * @schema PersonalizeListDatasetGroupsResponse#datasetGroups
   */
  readonly datasetGroups?: PersonalizeDatasetGroupSummary[];

  /**
   * @schema PersonalizeListDatasetGroupsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PersonalizeListDatasetImportJobsRequest
 */
export interface PersonalizeListDatasetImportJobsRequest {
  /**
   * @schema PersonalizeListDatasetImportJobsRequest#datasetArn
   */
  readonly datasetArn?: string;

  /**
   * @schema PersonalizeListDatasetImportJobsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PersonalizeListDatasetImportJobsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema PersonalizeListDatasetImportJobsResponse
 */
export interface PersonalizeListDatasetImportJobsResponse {
  /**
   * @schema PersonalizeListDatasetImportJobsResponse#datasetImportJobs
   */
  readonly datasetImportJobs?: PersonalizeDatasetImportJobSummary[];

  /**
   * @schema PersonalizeListDatasetImportJobsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PersonalizeListDatasetsRequest
 */
export interface PersonalizeListDatasetsRequest {
  /**
   * @schema PersonalizeListDatasetsRequest#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema PersonalizeListDatasetsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PersonalizeListDatasetsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema PersonalizeListDatasetsResponse
 */
export interface PersonalizeListDatasetsResponse {
  /**
   * @schema PersonalizeListDatasetsResponse#datasets
   */
  readonly datasets?: PersonalizeDatasetSummary[];

  /**
   * @schema PersonalizeListDatasetsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PersonalizeListEventTrackersRequest
 */
export interface PersonalizeListEventTrackersRequest {
  /**
   * @schema PersonalizeListEventTrackersRequest#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema PersonalizeListEventTrackersRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PersonalizeListEventTrackersRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema PersonalizeListEventTrackersResponse
 */
export interface PersonalizeListEventTrackersResponse {
  /**
   * @schema PersonalizeListEventTrackersResponse#eventTrackers
   */
  readonly eventTrackers?: PersonalizeEventTrackerSummary[];

  /**
   * @schema PersonalizeListEventTrackersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PersonalizeListFiltersRequest
 */
export interface PersonalizeListFiltersRequest {
  /**
   * @schema PersonalizeListFiltersRequest#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema PersonalizeListFiltersRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PersonalizeListFiltersRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema PersonalizeListFiltersResponse
 */
export interface PersonalizeListFiltersResponse {
  /**
   * @schema PersonalizeListFiltersResponse#Filters
   */
  readonly filters?: PersonalizeFilterSummary[];

  /**
   * @schema PersonalizeListFiltersResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PersonalizeListRecipesRequest
 */
export interface PersonalizeListRecipesRequest {
  /**
   * @schema PersonalizeListRecipesRequest#recipeProvider
   */
  readonly recipeProvider?: string;

  /**
   * @schema PersonalizeListRecipesRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PersonalizeListRecipesRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema PersonalizeListRecipesResponse
 */
export interface PersonalizeListRecipesResponse {
  /**
   * @schema PersonalizeListRecipesResponse#recipes
   */
  readonly recipes?: PersonalizeRecipeSummary[];

  /**
   * @schema PersonalizeListRecipesResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PersonalizeListSchemasRequest
 */
export interface PersonalizeListSchemasRequest {
  /**
   * @schema PersonalizeListSchemasRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PersonalizeListSchemasRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema PersonalizeListSchemasResponse
 */
export interface PersonalizeListSchemasResponse {
  /**
   * @schema PersonalizeListSchemasResponse#schemas
   */
  readonly schemas?: PersonalizeDatasetSchemaSummary[];

  /**
   * @schema PersonalizeListSchemasResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PersonalizeListSolutionVersionsRequest
 */
export interface PersonalizeListSolutionVersionsRequest {
  /**
   * @schema PersonalizeListSolutionVersionsRequest#solutionArn
   */
  readonly solutionArn?: string;

  /**
   * @schema PersonalizeListSolutionVersionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PersonalizeListSolutionVersionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema PersonalizeListSolutionVersionsResponse
 */
export interface PersonalizeListSolutionVersionsResponse {
  /**
   * @schema PersonalizeListSolutionVersionsResponse#solutionVersions
   */
  readonly solutionVersions?: PersonalizeSolutionVersionSummary[];

  /**
   * @schema PersonalizeListSolutionVersionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PersonalizeListSolutionsRequest
 */
export interface PersonalizeListSolutionsRequest {
  /**
   * @schema PersonalizeListSolutionsRequest#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema PersonalizeListSolutionsRequest#nextToken
   */
  readonly nextToken?: string;

  /**
   * @schema PersonalizeListSolutionsRequest#maxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema PersonalizeListSolutionsResponse
 */
export interface PersonalizeListSolutionsResponse {
  /**
   * @schema PersonalizeListSolutionsResponse#solutions
   */
  readonly solutions?: PersonalizeSolutionSummary[];

  /**
   * @schema PersonalizeListSolutionsResponse#nextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema PersonalizeUpdateCampaignRequest
 */
export interface PersonalizeUpdateCampaignRequest {
  /**
   * @schema PersonalizeUpdateCampaignRequest#campaignArn
   */
  readonly campaignArn: string;

  /**
   * @schema PersonalizeUpdateCampaignRequest#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

  /**
   * @schema PersonalizeUpdateCampaignRequest#minProvisionedTPS
   */
  readonly minProvisionedTPS?: number;

  /**
   * @schema PersonalizeUpdateCampaignRequest#campaignConfig
   */
  readonly campaignConfig?: PersonalizeCampaignConfig;

}

/**
 * @schema PersonalizeUpdateCampaignResponse
 */
export interface PersonalizeUpdateCampaignResponse {
  /**
   * @schema PersonalizeUpdateCampaignResponse#campaignArn
   */
  readonly campaignArn?: string;

}

/**
 * @schema PersonalizeBatchInferenceJobInput
 */
export interface PersonalizeBatchInferenceJobInput {
  /**
   * @schema PersonalizeBatchInferenceJobInput#s3DataSource
   */
  readonly s3DataSource: PersonalizeS3DataConfig;

}

/**
 * @schema PersonalizeBatchInferenceJobOutput
 */
export interface PersonalizeBatchInferenceJobOutput {
  /**
   * @schema PersonalizeBatchInferenceJobOutput#s3DataDestination
   */
  readonly s3DataDestination: PersonalizeS3DataConfig;

}

/**
 * @schema PersonalizeBatchInferenceJobConfig
 */
export interface PersonalizeBatchInferenceJobConfig {
  /**
   * @schema PersonalizeBatchInferenceJobConfig#itemExplorationConfig
   */
  readonly itemExplorationConfig?: { [key: string]: string };

}

/**
 * @schema PersonalizeCampaignConfig
 */
export interface PersonalizeCampaignConfig {
  /**
   * @schema PersonalizeCampaignConfig#itemExplorationConfig
   */
  readonly itemExplorationConfig?: { [key: string]: string };

}

/**
 * @schema PersonalizeDataSource
 */
export interface PersonalizeDataSource {
  /**
   * @schema PersonalizeDataSource#dataLocation
   */
  readonly dataLocation?: string;

}

/**
 * @schema PersonalizeSolutionConfig
 */
export interface PersonalizeSolutionConfig {
  /**
   * @schema PersonalizeSolutionConfig#eventValueThreshold
   */
  readonly eventValueThreshold?: string;

  /**
   * @schema PersonalizeSolutionConfig#hpoConfig
   */
  readonly hpoConfig?: PersonalizeHpoConfig;

  /**
   * @schema PersonalizeSolutionConfig#algorithmHyperParameters
   */
  readonly algorithmHyperParameters?: { [key: string]: string };

  /**
   * @schema PersonalizeSolutionConfig#featureTransformationParameters
   */
  readonly featureTransformationParameters?: { [key: string]: string };

  /**
   * @schema PersonalizeSolutionConfig#autoMLConfig
   */
  readonly autoMLConfig?: PersonalizeAutoMlConfig;

}

/**
 * @schema PersonalizeAlgorithm
 */
export interface PersonalizeAlgorithm {
  /**
   * @schema PersonalizeAlgorithm#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeAlgorithm#algorithmArn
   */
  readonly algorithmArn?: string;

  /**
   * @schema PersonalizeAlgorithm#algorithmImage
   */
  readonly algorithmImage?: PersonalizeAlgorithmImage;

  /**
   * @schema PersonalizeAlgorithm#defaultHyperParameters
   */
  readonly defaultHyperParameters?: { [key: string]: string };

  /**
   * @schema PersonalizeAlgorithm#defaultHyperParameterRanges
   */
  readonly defaultHyperParameterRanges?: PersonalizeDefaultHyperParameterRanges;

  /**
   * @schema PersonalizeAlgorithm#defaultResourceConfig
   */
  readonly defaultResourceConfig?: { [key: string]: string };

  /**
   * @schema PersonalizeAlgorithm#trainingInputMode
   */
  readonly trainingInputMode?: string;

  /**
   * @schema PersonalizeAlgorithm#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema PersonalizeAlgorithm#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeAlgorithm#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * @schema PersonalizeBatchInferenceJob
 */
export interface PersonalizeBatchInferenceJob {
  /**
   * @schema PersonalizeBatchInferenceJob#jobName
   */
  readonly jobName?: string;

  /**
   * @schema PersonalizeBatchInferenceJob#batchInferenceJobArn
   */
  readonly batchInferenceJobArn?: string;

  /**
   * @schema PersonalizeBatchInferenceJob#filterArn
   */
  readonly filterArn?: string;

  /**
   * @schema PersonalizeBatchInferenceJob#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema PersonalizeBatchInferenceJob#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

  /**
   * @schema PersonalizeBatchInferenceJob#numResults
   */
  readonly numResults?: number;

  /**
   * @schema PersonalizeBatchInferenceJob#jobInput
   */
  readonly jobInput?: PersonalizeBatchInferenceJobInput;

  /**
   * @schema PersonalizeBatchInferenceJob#jobOutput
   */
  readonly jobOutput?: PersonalizeBatchInferenceJobOutput;

  /**
   * @schema PersonalizeBatchInferenceJob#batchInferenceJobConfig
   */
  readonly batchInferenceJobConfig?: PersonalizeBatchInferenceJobConfig;

  /**
   * @schema PersonalizeBatchInferenceJob#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema PersonalizeBatchInferenceJob#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeBatchInferenceJob#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeBatchInferenceJob#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * @schema PersonalizeCampaign
 */
export interface PersonalizeCampaign {
  /**
   * @schema PersonalizeCampaign#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeCampaign#campaignArn
   */
  readonly campaignArn?: string;

  /**
   * @schema PersonalizeCampaign#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

  /**
   * @schema PersonalizeCampaign#minProvisionedTPS
   */
  readonly minProvisionedTPS?: number;

  /**
   * @schema PersonalizeCampaign#campaignConfig
   */
  readonly campaignConfig?: PersonalizeCampaignConfig;

  /**
   * @schema PersonalizeCampaign#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeCampaign#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema PersonalizeCampaign#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeCampaign#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema PersonalizeCampaign#latestCampaignUpdate
   */
  readonly latestCampaignUpdate?: PersonalizeCampaignUpdateSummary;

}

/**
 * @schema PersonalizeDataset
 */
export interface PersonalizeDataset {
  /**
   * @schema PersonalizeDataset#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeDataset#datasetArn
   */
  readonly datasetArn?: string;

  /**
   * @schema PersonalizeDataset#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema PersonalizeDataset#datasetType
   */
  readonly datasetType?: string;

  /**
   * @schema PersonalizeDataset#schemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema PersonalizeDataset#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeDataset#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeDataset#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * @schema PersonalizeDatasetGroup
 */
export interface PersonalizeDatasetGroup {
  /**
   * @schema PersonalizeDatasetGroup#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeDatasetGroup#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema PersonalizeDatasetGroup#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeDatasetGroup#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema PersonalizeDatasetGroup#kmsKeyArn
   */
  readonly kmsKeyArn?: string;

  /**
   * @schema PersonalizeDatasetGroup#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeDatasetGroup#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema PersonalizeDatasetGroup#failureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema PersonalizeDatasetImportJob
 */
export interface PersonalizeDatasetImportJob {
  /**
   * @schema PersonalizeDatasetImportJob#jobName
   */
  readonly jobName?: string;

  /**
   * @schema PersonalizeDatasetImportJob#datasetImportJobArn
   */
  readonly datasetImportJobArn?: string;

  /**
   * @schema PersonalizeDatasetImportJob#datasetArn
   */
  readonly datasetArn?: string;

  /**
   * @schema PersonalizeDatasetImportJob#dataSource
   */
  readonly dataSource?: PersonalizeDataSource;

  /**
   * @schema PersonalizeDatasetImportJob#roleArn
   */
  readonly roleArn?: string;

  /**
   * @schema PersonalizeDatasetImportJob#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeDatasetImportJob#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeDatasetImportJob#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema PersonalizeDatasetImportJob#failureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema PersonalizeEventTracker
 */
export interface PersonalizeEventTracker {
  /**
   * @schema PersonalizeEventTracker#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeEventTracker#eventTrackerArn
   */
  readonly eventTrackerArn?: string;

  /**
   * @schema PersonalizeEventTracker#accountId
   */
  readonly accountId?: string;

  /**
   * @schema PersonalizeEventTracker#trackingId
   */
  readonly trackingId?: string;

  /**
   * @schema PersonalizeEventTracker#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema PersonalizeEventTracker#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeEventTracker#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeEventTracker#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * @schema PersonalizeFeatureTransformation
 */
export interface PersonalizeFeatureTransformation {
  /**
   * @schema PersonalizeFeatureTransformation#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeFeatureTransformation#featureTransformationArn
   */
  readonly featureTransformationArn?: string;

  /**
   * @schema PersonalizeFeatureTransformation#defaultParameters
   */
  readonly defaultParameters?: { [key: string]: string };

  /**
   * @schema PersonalizeFeatureTransformation#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeFeatureTransformation#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema PersonalizeFeatureTransformation#status
   */
  readonly status?: string;

}

/**
 * @schema PersonalizeFilter
 */
export interface PersonalizeFilter {
  /**
   * @schema PersonalizeFilter#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeFilter#filterArn
   */
  readonly filterArn?: string;

  /**
   * @schema PersonalizeFilter#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeFilter#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema PersonalizeFilter#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema PersonalizeFilter#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema PersonalizeFilter#filterExpression
   */
  readonly filterExpression?: string;

  /**
   * @schema PersonalizeFilter#status
   */
  readonly status?: string;

}

/**
 * @schema PersonalizeRecipe
 */
export interface PersonalizeRecipe {
  /**
   * @schema PersonalizeRecipe#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeRecipe#recipeArn
   */
  readonly recipeArn?: string;

  /**
   * @schema PersonalizeRecipe#algorithmArn
   */
  readonly algorithmArn?: string;

  /**
   * @schema PersonalizeRecipe#featureTransformationArn
   */
  readonly featureTransformationArn?: string;

  /**
   * @schema PersonalizeRecipe#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeRecipe#description
   */
  readonly description?: string;

  /**
   * @schema PersonalizeRecipe#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeRecipe#recipeType
   */
  readonly recipeType?: string;

  /**
   * @schema PersonalizeRecipe#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * @schema PersonalizeDatasetSchema
 */
export interface PersonalizeDatasetSchema {
  /**
   * @schema PersonalizeDatasetSchema#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeDatasetSchema#schemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema PersonalizeDatasetSchema#schema
   */
  readonly schema?: string;

  /**
   * @schema PersonalizeDatasetSchema#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeDatasetSchema#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * @schema PersonalizeSolution
 */
export interface PersonalizeSolution {
  /**
   * @schema PersonalizeSolution#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeSolution#solutionArn
   */
  readonly solutionArn?: string;

  /**
   * @schema PersonalizeSolution#performHPO
   */
  readonly performHPO?: boolean;

  /**
   * @schema PersonalizeSolution#performAutoML
   */
  readonly performAutoML?: boolean;

  /**
   * @schema PersonalizeSolution#recipeArn
   */
  readonly recipeArn?: string;

  /**
   * @schema PersonalizeSolution#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema PersonalizeSolution#eventType
   */
  readonly eventType?: string;

  /**
   * @schema PersonalizeSolution#solutionConfig
   */
  readonly solutionConfig?: PersonalizeSolutionConfig;

  /**
   * @schema PersonalizeSolution#autoMLResult
   */
  readonly autoMLResult?: PersonalizeAutoMlResult;

  /**
   * @schema PersonalizeSolution#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeSolution#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeSolution#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema PersonalizeSolution#latestSolutionVersion
   */
  readonly latestSolutionVersion?: PersonalizeSolutionVersionSummary;

}

/**
 * @schema PersonalizeSolutionVersion
 */
export interface PersonalizeSolutionVersion {
  /**
   * @schema PersonalizeSolutionVersion#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

  /**
   * @schema PersonalizeSolutionVersion#solutionArn
   */
  readonly solutionArn?: string;

  /**
   * @schema PersonalizeSolutionVersion#performHPO
   */
  readonly performHPO?: boolean;

  /**
   * @schema PersonalizeSolutionVersion#performAutoML
   */
  readonly performAutoML?: boolean;

  /**
   * @schema PersonalizeSolutionVersion#recipeArn
   */
  readonly recipeArn?: string;

  /**
   * @schema PersonalizeSolutionVersion#eventType
   */
  readonly eventType?: string;

  /**
   * @schema PersonalizeSolutionVersion#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema PersonalizeSolutionVersion#solutionConfig
   */
  readonly solutionConfig?: PersonalizeSolutionConfig;

  /**
   * @schema PersonalizeSolutionVersion#trainingHours
   */
  readonly trainingHours?: number;

  /**
   * @schema PersonalizeSolutionVersion#trainingMode
   */
  readonly trainingMode?: string;

  /**
   * @schema PersonalizeSolutionVersion#tunedHPOParams
   */
  readonly tunedHPOParams?: PersonalizeTunedHpoParams;

  /**
   * @schema PersonalizeSolutionVersion#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeSolutionVersion#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema PersonalizeSolutionVersion#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeSolutionVersion#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * @schema PersonalizeBatchInferenceJobSummary
 */
export interface PersonalizeBatchInferenceJobSummary {
  /**
   * @schema PersonalizeBatchInferenceJobSummary#batchInferenceJobArn
   */
  readonly batchInferenceJobArn?: string;

  /**
   * @schema PersonalizeBatchInferenceJobSummary#jobName
   */
  readonly jobName?: string;

  /**
   * @schema PersonalizeBatchInferenceJobSummary#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeBatchInferenceJobSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeBatchInferenceJobSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema PersonalizeBatchInferenceJobSummary#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema PersonalizeBatchInferenceJobSummary#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

}

/**
 * @schema PersonalizeCampaignSummary
 */
export interface PersonalizeCampaignSummary {
  /**
   * @schema PersonalizeCampaignSummary#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeCampaignSummary#campaignArn
   */
  readonly campaignArn?: string;

  /**
   * @schema PersonalizeCampaignSummary#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeCampaignSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeCampaignSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema PersonalizeCampaignSummary#failureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema PersonalizeDatasetGroupSummary
 */
export interface PersonalizeDatasetGroupSummary {
  /**
   * @schema PersonalizeDatasetGroupSummary#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeDatasetGroupSummary#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema PersonalizeDatasetGroupSummary#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeDatasetGroupSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeDatasetGroupSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema PersonalizeDatasetGroupSummary#failureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema PersonalizeDatasetImportJobSummary
 */
export interface PersonalizeDatasetImportJobSummary {
  /**
   * @schema PersonalizeDatasetImportJobSummary#datasetImportJobArn
   */
  readonly datasetImportJobArn?: string;

  /**
   * @schema PersonalizeDatasetImportJobSummary#jobName
   */
  readonly jobName?: string;

  /**
   * @schema PersonalizeDatasetImportJobSummary#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeDatasetImportJobSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeDatasetImportJobSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema PersonalizeDatasetImportJobSummary#failureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema PersonalizeDatasetSummary
 */
export interface PersonalizeDatasetSummary {
  /**
   * @schema PersonalizeDatasetSummary#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeDatasetSummary#datasetArn
   */
  readonly datasetArn?: string;

  /**
   * @schema PersonalizeDatasetSummary#datasetType
   */
  readonly datasetType?: string;

  /**
   * @schema PersonalizeDatasetSummary#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeDatasetSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeDatasetSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * @schema PersonalizeEventTrackerSummary
 */
export interface PersonalizeEventTrackerSummary {
  /**
   * @schema PersonalizeEventTrackerSummary#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeEventTrackerSummary#eventTrackerArn
   */
  readonly eventTrackerArn?: string;

  /**
   * @schema PersonalizeEventTrackerSummary#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeEventTrackerSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeEventTrackerSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * @schema PersonalizeFilterSummary
 */
export interface PersonalizeFilterSummary {
  /**
   * @schema PersonalizeFilterSummary#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeFilterSummary#filterArn
   */
  readonly filterArn?: string;

  /**
   * @schema PersonalizeFilterSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeFilterSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema PersonalizeFilterSummary#datasetGroupArn
   */
  readonly datasetGroupArn?: string;

  /**
   * @schema PersonalizeFilterSummary#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema PersonalizeFilterSummary#status
   */
  readonly status?: string;

}

/**
 * @schema PersonalizeRecipeSummary
 */
export interface PersonalizeRecipeSummary {
  /**
   * @schema PersonalizeRecipeSummary#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeRecipeSummary#recipeArn
   */
  readonly recipeArn?: string;

  /**
   * @schema PersonalizeRecipeSummary#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeRecipeSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeRecipeSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * @schema PersonalizeDatasetSchemaSummary
 */
export interface PersonalizeDatasetSchemaSummary {
  /**
   * @schema PersonalizeDatasetSchemaSummary#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeDatasetSchemaSummary#schemaArn
   */
  readonly schemaArn?: string;

  /**
   * @schema PersonalizeDatasetSchemaSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeDatasetSchemaSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * @schema PersonalizeSolutionVersionSummary
 */
export interface PersonalizeSolutionVersionSummary {
  /**
   * @schema PersonalizeSolutionVersionSummary#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

  /**
   * @schema PersonalizeSolutionVersionSummary#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeSolutionVersionSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeSolutionVersionSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

  /**
   * @schema PersonalizeSolutionVersionSummary#failureReason
   */
  readonly failureReason?: string;

}

/**
 * @schema PersonalizeSolutionSummary
 */
export interface PersonalizeSolutionSummary {
  /**
   * @schema PersonalizeSolutionSummary#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeSolutionSummary#solutionArn
   */
  readonly solutionArn?: string;

  /**
   * @schema PersonalizeSolutionSummary#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeSolutionSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeSolutionSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * @schema PersonalizeS3DataConfig
 */
export interface PersonalizeS3DataConfig {
  /**
   * @schema PersonalizeS3DataConfig#path
   */
  readonly path: string;

  /**
   * @schema PersonalizeS3DataConfig#kmsKeyArn
   */
  readonly kmsKeyArn?: string;

}

/**
 * @schema PersonalizeHpoConfig
 */
export interface PersonalizeHpoConfig {
  /**
   * @schema PersonalizeHpoConfig#hpoObjective
   */
  readonly hpoObjective?: PersonalizeHpoObjective;

  /**
   * @schema PersonalizeHpoConfig#hpoResourceConfig
   */
  readonly hpoResourceConfig?: PersonalizeHpoResourceConfig;

  /**
   * @schema PersonalizeHpoConfig#algorithmHyperParameterRanges
   */
  readonly algorithmHyperParameterRanges?: PersonalizeHyperParameterRanges;

}

/**
 * @schema PersonalizeAutoMlConfig
 */
export interface PersonalizeAutoMlConfig {
  /**
   * @schema PersonalizeAutoMlConfig#metricName
   */
  readonly metricName?: string;

  /**
   * @schema PersonalizeAutoMlConfig#recipeList
   */
  readonly recipeList?: string[];

}

/**
 * @schema PersonalizeAlgorithmImage
 */
export interface PersonalizeAlgorithmImage {
  /**
   * @schema PersonalizeAlgorithmImage#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeAlgorithmImage#dockerURI
   */
  readonly dockerURI?: string;

}

/**
 * @schema PersonalizeDefaultHyperParameterRanges
 */
export interface PersonalizeDefaultHyperParameterRanges {
  /**
   * @schema PersonalizeDefaultHyperParameterRanges#integerHyperParameterRanges
   */
  readonly integerHyperParameterRanges?: PersonalizeDefaultIntegerHyperParameterRange[];

  /**
   * @schema PersonalizeDefaultHyperParameterRanges#continuousHyperParameterRanges
   */
  readonly continuousHyperParameterRanges?: PersonalizeDefaultContinuousHyperParameterRange[];

  /**
   * @schema PersonalizeDefaultHyperParameterRanges#categoricalHyperParameterRanges
   */
  readonly categoricalHyperParameterRanges?: PersonalizeDefaultCategoricalHyperParameterRange[];

}

/**
 * @schema PersonalizeCampaignUpdateSummary
 */
export interface PersonalizeCampaignUpdateSummary {
  /**
   * @schema PersonalizeCampaignUpdateSummary#solutionVersionArn
   */
  readonly solutionVersionArn?: string;

  /**
   * @schema PersonalizeCampaignUpdateSummary#minProvisionedTPS
   */
  readonly minProvisionedTPS?: number;

  /**
   * @schema PersonalizeCampaignUpdateSummary#campaignConfig
   */
  readonly campaignConfig?: PersonalizeCampaignConfig;

  /**
   * @schema PersonalizeCampaignUpdateSummary#status
   */
  readonly status?: string;

  /**
   * @schema PersonalizeCampaignUpdateSummary#failureReason
   */
  readonly failureReason?: string;

  /**
   * @schema PersonalizeCampaignUpdateSummary#creationDateTime
   */
  readonly creationDateTime?: string;

  /**
   * @schema PersonalizeCampaignUpdateSummary#lastUpdatedDateTime
   */
  readonly lastUpdatedDateTime?: string;

}

/**
 * @schema PersonalizeAutoMlResult
 */
export interface PersonalizeAutoMlResult {
  /**
   * @schema PersonalizeAutoMlResult#bestRecipeArn
   */
  readonly bestRecipeArn?: string;

}

/**
 * @schema PersonalizeTunedHpoParams
 */
export interface PersonalizeTunedHpoParams {
  /**
   * @schema PersonalizeTunedHpoParams#algorithmHyperParameters
   */
  readonly algorithmHyperParameters?: { [key: string]: string };

}

/**
 * @schema PersonalizeHpoObjective
 */
export interface PersonalizeHpoObjective {
  /**
   * @schema PersonalizeHpoObjective#type
   */
  readonly type?: string;

  /**
   * @schema PersonalizeHpoObjective#metricName
   */
  readonly metricName?: string;

  /**
   * @schema PersonalizeHpoObjective#metricRegex
   */
  readonly metricRegex?: string;

}

/**
 * @schema PersonalizeHpoResourceConfig
 */
export interface PersonalizeHpoResourceConfig {
  /**
   * @schema PersonalizeHpoResourceConfig#maxNumberOfTrainingJobs
   */
  readonly maxNumberOfTrainingJobs?: string;

  /**
   * @schema PersonalizeHpoResourceConfig#maxParallelTrainingJobs
   */
  readonly maxParallelTrainingJobs?: string;

}

/**
 * @schema PersonalizeHyperParameterRanges
 */
export interface PersonalizeHyperParameterRanges {
  /**
   * @schema PersonalizeHyperParameterRanges#integerHyperParameterRanges
   */
  readonly integerHyperParameterRanges?: PersonalizeIntegerHyperParameterRange[];

  /**
   * @schema PersonalizeHyperParameterRanges#continuousHyperParameterRanges
   */
  readonly continuousHyperParameterRanges?: PersonalizeContinuousHyperParameterRange[];

  /**
   * @schema PersonalizeHyperParameterRanges#categoricalHyperParameterRanges
   */
  readonly categoricalHyperParameterRanges?: PersonalizeCategoricalHyperParameterRange[];

}

/**
 * @schema PersonalizeDefaultIntegerHyperParameterRange
 */
export interface PersonalizeDefaultIntegerHyperParameterRange {
  /**
   * @schema PersonalizeDefaultIntegerHyperParameterRange#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeDefaultIntegerHyperParameterRange#minValue
   */
  readonly minValue?: number;

  /**
   * @schema PersonalizeDefaultIntegerHyperParameterRange#maxValue
   */
  readonly maxValue?: number;

  /**
   * @schema PersonalizeDefaultIntegerHyperParameterRange#isTunable
   */
  readonly isTunable?: boolean;

}

/**
 * @schema PersonalizeDefaultContinuousHyperParameterRange
 */
export interface PersonalizeDefaultContinuousHyperParameterRange {
  /**
   * @schema PersonalizeDefaultContinuousHyperParameterRange#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeDefaultContinuousHyperParameterRange#minValue
   */
  readonly minValue?: number;

  /**
   * @schema PersonalizeDefaultContinuousHyperParameterRange#maxValue
   */
  readonly maxValue?: number;

  /**
   * @schema PersonalizeDefaultContinuousHyperParameterRange#isTunable
   */
  readonly isTunable?: boolean;

}

/**
 * @schema PersonalizeDefaultCategoricalHyperParameterRange
 */
export interface PersonalizeDefaultCategoricalHyperParameterRange {
  /**
   * @schema PersonalizeDefaultCategoricalHyperParameterRange#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeDefaultCategoricalHyperParameterRange#values
   */
  readonly values?: string[];

  /**
   * @schema PersonalizeDefaultCategoricalHyperParameterRange#isTunable
   */
  readonly isTunable?: boolean;

}

/**
 * @schema PersonalizeIntegerHyperParameterRange
 */
export interface PersonalizeIntegerHyperParameterRange {
  /**
   * @schema PersonalizeIntegerHyperParameterRange#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeIntegerHyperParameterRange#minValue
   */
  readonly minValue?: number;

  /**
   * @schema PersonalizeIntegerHyperParameterRange#maxValue
   */
  readonly maxValue?: number;

}

/**
 * @schema PersonalizeContinuousHyperParameterRange
 */
export interface PersonalizeContinuousHyperParameterRange {
  /**
   * @schema PersonalizeContinuousHyperParameterRange#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeContinuousHyperParameterRange#minValue
   */
  readonly minValue?: number;

  /**
   * @schema PersonalizeContinuousHyperParameterRange#maxValue
   */
  readonly maxValue?: number;

}

/**
 * @schema PersonalizeCategoricalHyperParameterRange
 */
export interface PersonalizeCategoricalHyperParameterRange {
  /**
   * @schema PersonalizeCategoricalHyperParameterRange#name
   */
  readonly name?: string;

  /**
   * @schema PersonalizeCategoricalHyperParameterRange#values
   */
  readonly values?: string[];

}
