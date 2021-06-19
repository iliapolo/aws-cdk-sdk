/**
 * @schema DataBrewBatchDeleteRecipeVersionRequest
 */
export interface DataBrewBatchDeleteRecipeVersionRequest {
  /**
   * @schema DataBrewBatchDeleteRecipeVersionRequest#Name
   */
  readonly name: string;

  /**
   * @schema DataBrewBatchDeleteRecipeVersionRequest#RecipeVersions
   */
  readonly recipeVersions: string[];

}

/**
 * @schema DataBrewBatchDeleteRecipeVersionResponse
 */
export interface DataBrewBatchDeleteRecipeVersionResponse {
  /**
   * @schema DataBrewBatchDeleteRecipeVersionResponse#Name
   */
  readonly name: string;

  /**
   * @schema DataBrewBatchDeleteRecipeVersionResponse#Errors
   */
  readonly errors?: DataBrewRecipeVersionErrorDetail[];

}

/**
 * @schema DataBrewCreateDatasetRequest
 */
export interface DataBrewCreateDatasetRequest {
  /**
   * @schema DataBrewCreateDatasetRequest#Name
   */
  readonly name: string;

  /**
   * @schema DataBrewCreateDatasetRequest#FormatOptions
   */
  readonly formatOptions?: DataBrewFormatOptions;

  /**
   * @schema DataBrewCreateDatasetRequest#Input
   */
  readonly input: DataBrewInput;

  /**
   * @schema DataBrewCreateDatasetRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DataBrewCreateDatasetResponse
 */
export interface DataBrewCreateDatasetResponse {
  /**
   * @schema DataBrewCreateDatasetResponse#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewCreateProfileJobRequest
 */
export interface DataBrewCreateProfileJobRequest {
  /**
   * @schema DataBrewCreateProfileJobRequest#DatasetName
   */
  readonly datasetName: string;

  /**
   * @schema DataBrewCreateProfileJobRequest#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema DataBrewCreateProfileJobRequest#EncryptionMode
   */
  readonly encryptionMode?: string;

  /**
   * @schema DataBrewCreateProfileJobRequest#Name
   */
  readonly name: string;

  /**
   * @schema DataBrewCreateProfileJobRequest#LogSubscription
   */
  readonly logSubscription?: string;

  /**
   * @schema DataBrewCreateProfileJobRequest#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema DataBrewCreateProfileJobRequest#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema DataBrewCreateProfileJobRequest#OutputLocation
   */
  readonly outputLocation: DataBrewS3Location;

  /**
   * @schema DataBrewCreateProfileJobRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema DataBrewCreateProfileJobRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataBrewCreateProfileJobRequest#Timeout
   */
  readonly timeout?: number;

}

/**
 * @schema DataBrewCreateProfileJobResponse
 */
export interface DataBrewCreateProfileJobResponse {
  /**
   * @schema DataBrewCreateProfileJobResponse#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewCreateProjectRequest
 */
export interface DataBrewCreateProjectRequest {
  /**
   * @schema DataBrewCreateProjectRequest#DatasetName
   */
  readonly datasetName: string;

  /**
   * @schema DataBrewCreateProjectRequest#Name
   */
  readonly name: string;

  /**
   * @schema DataBrewCreateProjectRequest#RecipeName
   */
  readonly recipeName: string;

  /**
   * @schema DataBrewCreateProjectRequest#Sample
   */
  readonly sample?: DataBrewSample;

  /**
   * @schema DataBrewCreateProjectRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema DataBrewCreateProjectRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DataBrewCreateProjectResponse
 */
export interface DataBrewCreateProjectResponse {
  /**
   * @schema DataBrewCreateProjectResponse#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewCreateRecipeRequest
 */
export interface DataBrewCreateRecipeRequest {
  /**
   * @schema DataBrewCreateRecipeRequest#Description
   */
  readonly description?: string;

  /**
   * @schema DataBrewCreateRecipeRequest#Name
   */
  readonly name: string;

  /**
   * @schema DataBrewCreateRecipeRequest#Steps
   */
  readonly steps: DataBrewRecipeStep[];

  /**
   * @schema DataBrewCreateRecipeRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DataBrewCreateRecipeResponse
 */
export interface DataBrewCreateRecipeResponse {
  /**
   * @schema DataBrewCreateRecipeResponse#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewCreateRecipeJobRequest
 */
export interface DataBrewCreateRecipeJobRequest {
  /**
   * @schema DataBrewCreateRecipeJobRequest#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema DataBrewCreateRecipeJobRequest#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema DataBrewCreateRecipeJobRequest#EncryptionMode
   */
  readonly encryptionMode?: string;

  /**
   * @schema DataBrewCreateRecipeJobRequest#Name
   */
  readonly name: string;

  /**
   * @schema DataBrewCreateRecipeJobRequest#LogSubscription
   */
  readonly logSubscription?: string;

  /**
   * @schema DataBrewCreateRecipeJobRequest#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema DataBrewCreateRecipeJobRequest#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema DataBrewCreateRecipeJobRequest#Outputs
   */
  readonly outputs: DataBrewOutput[];

  /**
   * @schema DataBrewCreateRecipeJobRequest#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema DataBrewCreateRecipeJobRequest#RecipeReference
   */
  readonly recipeReference?: DataBrewRecipeReference;

  /**
   * @schema DataBrewCreateRecipeJobRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema DataBrewCreateRecipeJobRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataBrewCreateRecipeJobRequest#Timeout
   */
  readonly timeout?: number;

}

/**
 * @schema DataBrewCreateRecipeJobResponse
 */
export interface DataBrewCreateRecipeJobResponse {
  /**
   * @schema DataBrewCreateRecipeJobResponse#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewCreateScheduleRequest
 */
export interface DataBrewCreateScheduleRequest {
  /**
   * @schema DataBrewCreateScheduleRequest#JobNames
   */
  readonly jobNames?: string[];

  /**
   * @schema DataBrewCreateScheduleRequest#CronExpression
   */
  readonly cronExpression: string;

  /**
   * @schema DataBrewCreateScheduleRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataBrewCreateScheduleRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewCreateScheduleResponse
 */
export interface DataBrewCreateScheduleResponse {
  /**
   * @schema DataBrewCreateScheduleResponse#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewDeleteDatasetRequest
 */
export interface DataBrewDeleteDatasetRequest {
  /**
   * @schema DataBrewDeleteDatasetRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewDeleteDatasetResponse
 */
export interface DataBrewDeleteDatasetResponse {
  /**
   * @schema DataBrewDeleteDatasetResponse#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewDeleteJobRequest
 */
export interface DataBrewDeleteJobRequest {
  /**
   * @schema DataBrewDeleteJobRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewDeleteJobResponse
 */
export interface DataBrewDeleteJobResponse {
  /**
   * @schema DataBrewDeleteJobResponse#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewDeleteProjectRequest
 */
export interface DataBrewDeleteProjectRequest {
  /**
   * @schema DataBrewDeleteProjectRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewDeleteProjectResponse
 */
export interface DataBrewDeleteProjectResponse {
  /**
   * @schema DataBrewDeleteProjectResponse#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewDeleteRecipeVersionRequest
 */
export interface DataBrewDeleteRecipeVersionRequest {
  /**
   * @schema DataBrewDeleteRecipeVersionRequest#Name
   */
  readonly name: string;

  /**
   * @schema DataBrewDeleteRecipeVersionRequest#RecipeVersion
   */
  readonly recipeVersion: string;

}

/**
 * @schema DataBrewDeleteRecipeVersionResponse
 */
export interface DataBrewDeleteRecipeVersionResponse {
  /**
   * @schema DataBrewDeleteRecipeVersionResponse#Name
   */
  readonly name: string;

  /**
   * @schema DataBrewDeleteRecipeVersionResponse#RecipeVersion
   */
  readonly recipeVersion: string;

}

/**
 * @schema DataBrewDeleteScheduleRequest
 */
export interface DataBrewDeleteScheduleRequest {
  /**
   * @schema DataBrewDeleteScheduleRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewDeleteScheduleResponse
 */
export interface DataBrewDeleteScheduleResponse {
  /**
   * @schema DataBrewDeleteScheduleResponse#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewDescribeDatasetRequest
 */
export interface DataBrewDescribeDatasetRequest {
  /**
   * @schema DataBrewDescribeDatasetRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewDescribeDatasetResponse
 */
export interface DataBrewDescribeDatasetResponse {
  /**
   * @schema DataBrewDescribeDatasetResponse#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema DataBrewDescribeDatasetResponse#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema DataBrewDescribeDatasetResponse#Name
   */
  readonly name: string;

  /**
   * @schema DataBrewDescribeDatasetResponse#FormatOptions
   */
  readonly formatOptions?: DataBrewFormatOptions;

  /**
   * @schema DataBrewDescribeDatasetResponse#Input
   */
  readonly input: DataBrewInput;

  /**
   * @schema DataBrewDescribeDatasetResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DataBrewDescribeDatasetResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema DataBrewDescribeDatasetResponse#Source
   */
  readonly source?: string;

  /**
   * @schema DataBrewDescribeDatasetResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataBrewDescribeDatasetResponse#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * @schema DataBrewDescribeJobRequest
 */
export interface DataBrewDescribeJobRequest {
  /**
   * @schema DataBrewDescribeJobRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewDescribeJobResponse
 */
export interface DataBrewDescribeJobResponse {
  /**
   * @schema DataBrewDescribeJobResponse#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema DataBrewDescribeJobResponse#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema DataBrewDescribeJobResponse#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema DataBrewDescribeJobResponse#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema DataBrewDescribeJobResponse#EncryptionMode
   */
  readonly encryptionMode?: string;

  /**
   * @schema DataBrewDescribeJobResponse#Name
   */
  readonly name: string;

  /**
   * @schema DataBrewDescribeJobResponse#Type
   */
  readonly type?: string;

  /**
   * @schema DataBrewDescribeJobResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema DataBrewDescribeJobResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DataBrewDescribeJobResponse#LogSubscription
   */
  readonly logSubscription?: string;

  /**
   * @schema DataBrewDescribeJobResponse#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema DataBrewDescribeJobResponse#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema DataBrewDescribeJobResponse#Outputs
   */
  readonly outputs?: DataBrewOutput[];

  /**
   * @schema DataBrewDescribeJobResponse#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema DataBrewDescribeJobResponse#RecipeReference
   */
  readonly recipeReference?: DataBrewRecipeReference;

  /**
   * @schema DataBrewDescribeJobResponse#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DataBrewDescribeJobResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DataBrewDescribeJobResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataBrewDescribeJobResponse#Timeout
   */
  readonly timeout?: number;

}

/**
 * @schema DataBrewDescribeProjectRequest
 */
export interface DataBrewDescribeProjectRequest {
  /**
   * @schema DataBrewDescribeProjectRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewDescribeProjectResponse
 */
export interface DataBrewDescribeProjectResponse {
  /**
   * @schema DataBrewDescribeProjectResponse#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema DataBrewDescribeProjectResponse#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema DataBrewDescribeProjectResponse#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema DataBrewDescribeProjectResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DataBrewDescribeProjectResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema DataBrewDescribeProjectResponse#Name
   */
  readonly name: string;

  /**
   * @schema DataBrewDescribeProjectResponse#RecipeName
   */
  readonly recipeName?: string;

  /**
   * @schema DataBrewDescribeProjectResponse#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DataBrewDescribeProjectResponse#Sample
   */
  readonly sample?: DataBrewSample;

  /**
   * @schema DataBrewDescribeProjectResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DataBrewDescribeProjectResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataBrewDescribeProjectResponse#SessionStatus
   */
  readonly sessionStatus?: string;

  /**
   * @schema DataBrewDescribeProjectResponse#OpenedBy
   */
  readonly openedBy?: string;

  /**
   * @schema DataBrewDescribeProjectResponse#OpenDate
   */
  readonly openDate?: string;

}

/**
 * @schema DataBrewDescribeRecipeRequest
 */
export interface DataBrewDescribeRecipeRequest {
  /**
   * @schema DataBrewDescribeRecipeRequest#Name
   */
  readonly name: string;

  /**
   * @schema DataBrewDescribeRecipeRequest#RecipeVersion
   */
  readonly recipeVersion?: string;

}

/**
 * @schema DataBrewDescribeRecipeResponse
 */
export interface DataBrewDescribeRecipeResponse {
  /**
   * @schema DataBrewDescribeRecipeResponse#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema DataBrewDescribeRecipeResponse#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema DataBrewDescribeRecipeResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema DataBrewDescribeRecipeResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DataBrewDescribeRecipeResponse#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema DataBrewDescribeRecipeResponse#PublishedBy
   */
  readonly publishedBy?: string;

  /**
   * @schema DataBrewDescribeRecipeResponse#PublishedDate
   */
  readonly publishedDate?: string;

  /**
   * @schema DataBrewDescribeRecipeResponse#Description
   */
  readonly description?: string;

  /**
   * @schema DataBrewDescribeRecipeResponse#Name
   */
  readonly name: string;

  /**
   * @schema DataBrewDescribeRecipeResponse#Steps
   */
  readonly steps?: DataBrewRecipeStep[];

  /**
   * @schema DataBrewDescribeRecipeResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataBrewDescribeRecipeResponse#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DataBrewDescribeRecipeResponse#RecipeVersion
   */
  readonly recipeVersion?: string;

}

/**
 * @schema DataBrewDescribeScheduleRequest
 */
export interface DataBrewDescribeScheduleRequest {
  /**
   * @schema DataBrewDescribeScheduleRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewDescribeScheduleResponse
 */
export interface DataBrewDescribeScheduleResponse {
  /**
   * @schema DataBrewDescribeScheduleResponse#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema DataBrewDescribeScheduleResponse#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema DataBrewDescribeScheduleResponse#JobNames
   */
  readonly jobNames?: string[];

  /**
   * @schema DataBrewDescribeScheduleResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema DataBrewDescribeScheduleResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DataBrewDescribeScheduleResponse#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DataBrewDescribeScheduleResponse#CronExpression
   */
  readonly cronExpression?: string;

  /**
   * @schema DataBrewDescribeScheduleResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataBrewDescribeScheduleResponse#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewListDatasetsRequest
 */
export interface DataBrewListDatasetsRequest {
  /**
   * @schema DataBrewListDatasetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DataBrewListDatasetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DataBrewListDatasetsResponse
 */
export interface DataBrewListDatasetsResponse {
  /**
   * @schema DataBrewListDatasetsResponse#Datasets
   */
  readonly datasets: DataBrewDataset[];

  /**
   * @schema DataBrewListDatasetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DataBrewListJobRunsRequest
 */
export interface DataBrewListJobRunsRequest {
  /**
   * @schema DataBrewListJobRunsRequest#Name
   */
  readonly name: string;

  /**
   * @schema DataBrewListJobRunsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DataBrewListJobRunsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DataBrewListJobRunsResponse
 */
export interface DataBrewListJobRunsResponse {
  /**
   * @schema DataBrewListJobRunsResponse#JobRuns
   */
  readonly jobRuns: DataBrewJobRun[];

  /**
   * @schema DataBrewListJobRunsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DataBrewListJobsRequest
 */
export interface DataBrewListJobsRequest {
  /**
   * @schema DataBrewListJobsRequest#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema DataBrewListJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DataBrewListJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DataBrewListJobsRequest#ProjectName
   */
  readonly projectName?: string;

}

/**
 * @schema DataBrewListJobsResponse
 */
export interface DataBrewListJobsResponse {
  /**
   * @schema DataBrewListJobsResponse#Jobs
   */
  readonly jobs: DataBrewJob[];

  /**
   * @schema DataBrewListJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DataBrewListProjectsRequest
 */
export interface DataBrewListProjectsRequest {
  /**
   * @schema DataBrewListProjectsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DataBrewListProjectsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DataBrewListProjectsResponse
 */
export interface DataBrewListProjectsResponse {
  /**
   * @schema DataBrewListProjectsResponse#Projects
   */
  readonly projects: DataBrewProject[];

  /**
   * @schema DataBrewListProjectsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DataBrewListRecipeVersionsRequest
 */
export interface DataBrewListRecipeVersionsRequest {
  /**
   * @schema DataBrewListRecipeVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DataBrewListRecipeVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DataBrewListRecipeVersionsRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewListRecipeVersionsResponse
 */
export interface DataBrewListRecipeVersionsResponse {
  /**
   * @schema DataBrewListRecipeVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DataBrewListRecipeVersionsResponse#Recipes
   */
  readonly recipes: DataBrewRecipe[];

}

/**
 * @schema DataBrewListRecipesRequest
 */
export interface DataBrewListRecipesRequest {
  /**
   * @schema DataBrewListRecipesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DataBrewListRecipesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DataBrewListRecipesRequest#RecipeVersion
   */
  readonly recipeVersion?: string;

}

/**
 * @schema DataBrewListRecipesResponse
 */
export interface DataBrewListRecipesResponse {
  /**
   * @schema DataBrewListRecipesResponse#Recipes
   */
  readonly recipes: DataBrewRecipe[];

  /**
   * @schema DataBrewListRecipesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DataBrewListSchedulesRequest
 */
export interface DataBrewListSchedulesRequest {
  /**
   * @schema DataBrewListSchedulesRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema DataBrewListSchedulesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DataBrewListSchedulesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DataBrewListSchedulesResponse
 */
export interface DataBrewListSchedulesResponse {
  /**
   * @schema DataBrewListSchedulesResponse#Schedules
   */
  readonly schedules: DataBrewSchedule[];

  /**
   * @schema DataBrewListSchedulesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DataBrewListTagsForResourceRequest
 */
export interface DataBrewListTagsForResourceRequest {
  /**
   * @schema DataBrewListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema DataBrewListTagsForResourceResponse
 */
export interface DataBrewListTagsForResourceResponse {
  /**
   * @schema DataBrewListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DataBrewPublishRecipeRequest
 */
export interface DataBrewPublishRecipeRequest {
  /**
   * @schema DataBrewPublishRecipeRequest#Description
   */
  readonly description?: string;

  /**
   * @schema DataBrewPublishRecipeRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewPublishRecipeResponse
 */
export interface DataBrewPublishRecipeResponse {
  /**
   * @schema DataBrewPublishRecipeResponse#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewSendProjectSessionActionRequest
 */
export interface DataBrewSendProjectSessionActionRequest {
  /**
   * @schema DataBrewSendProjectSessionActionRequest#Preview
   */
  readonly preview?: boolean;

  /**
   * @schema DataBrewSendProjectSessionActionRequest#Name
   */
  readonly name: string;

  /**
   * @schema DataBrewSendProjectSessionActionRequest#RecipeStep
   */
  readonly recipeStep?: DataBrewRecipeStep;

  /**
   * @schema DataBrewSendProjectSessionActionRequest#StepIndex
   */
  readonly stepIndex?: number;

  /**
   * @schema DataBrewSendProjectSessionActionRequest#ClientSessionId
   */
  readonly clientSessionId?: string;

  /**
   * @schema DataBrewSendProjectSessionActionRequest#ViewFrame
   */
  readonly viewFrame?: DataBrewViewFrame;

}

/**
 * @schema DataBrewSendProjectSessionActionResponse
 */
export interface DataBrewSendProjectSessionActionResponse {
  /**
   * @schema DataBrewSendProjectSessionActionResponse#Result
   */
  readonly result?: string;

  /**
   * @schema DataBrewSendProjectSessionActionResponse#Name
   */
  readonly name: string;

  /**
   * @schema DataBrewSendProjectSessionActionResponse#ActionId
   */
  readonly actionId?: number;

}

/**
 * @schema DataBrewStartJobRunRequest
 */
export interface DataBrewStartJobRunRequest {
  /**
   * @schema DataBrewStartJobRunRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewStartJobRunResponse
 */
export interface DataBrewStartJobRunResponse {
  /**
   * @schema DataBrewStartJobRunResponse#RunId
   */
  readonly runId: string;

}

/**
 * @schema DataBrewStartProjectSessionRequest
 */
export interface DataBrewStartProjectSessionRequest {
  /**
   * @schema DataBrewStartProjectSessionRequest#Name
   */
  readonly name: string;

  /**
   * @schema DataBrewStartProjectSessionRequest#AssumeControl
   */
  readonly assumeControl?: boolean;

}

/**
 * @schema DataBrewStartProjectSessionResponse
 */
export interface DataBrewStartProjectSessionResponse {
  /**
   * @schema DataBrewStartProjectSessionResponse#Name
   */
  readonly name: string;

  /**
   * @schema DataBrewStartProjectSessionResponse#ClientSessionId
   */
  readonly clientSessionId?: string;

}

/**
 * @schema DataBrewStopJobRunRequest
 */
export interface DataBrewStopJobRunRequest {
  /**
   * @schema DataBrewStopJobRunRequest#Name
   */
  readonly name: string;

  /**
   * @schema DataBrewStopJobRunRequest#RunId
   */
  readonly runId: string;

}

/**
 * @schema DataBrewStopJobRunResponse
 */
export interface DataBrewStopJobRunResponse {
  /**
   * @schema DataBrewStopJobRunResponse#RunId
   */
  readonly runId: string;

}

/**
 * @schema DataBrewTagResourceRequest
 */
export interface DataBrewTagResourceRequest {
  /**
   * @schema DataBrewTagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema DataBrewTagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema DataBrewTagResourceResponse
 */
export interface DataBrewTagResourceResponse {
}

/**
 * @schema DataBrewUntagResourceRequest
 */
export interface DataBrewUntagResourceRequest {
  /**
   * @schema DataBrewUntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema DataBrewUntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema DataBrewUntagResourceResponse
 */
export interface DataBrewUntagResourceResponse {
}

/**
 * @schema DataBrewUpdateDatasetRequest
 */
export interface DataBrewUpdateDatasetRequest {
  /**
   * @schema DataBrewUpdateDatasetRequest#Name
   */
  readonly name: string;

  /**
   * @schema DataBrewUpdateDatasetRequest#FormatOptions
   */
  readonly formatOptions?: DataBrewFormatOptions;

  /**
   * @schema DataBrewUpdateDatasetRequest#Input
   */
  readonly input: DataBrewInput;

}

/**
 * @schema DataBrewUpdateDatasetResponse
 */
export interface DataBrewUpdateDatasetResponse {
  /**
   * @schema DataBrewUpdateDatasetResponse#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewUpdateProfileJobRequest
 */
export interface DataBrewUpdateProfileJobRequest {
  /**
   * @schema DataBrewUpdateProfileJobRequest#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema DataBrewUpdateProfileJobRequest#EncryptionMode
   */
  readonly encryptionMode?: string;

  /**
   * @schema DataBrewUpdateProfileJobRequest#Name
   */
  readonly name: string;

  /**
   * @schema DataBrewUpdateProfileJobRequest#LogSubscription
   */
  readonly logSubscription?: string;

  /**
   * @schema DataBrewUpdateProfileJobRequest#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema DataBrewUpdateProfileJobRequest#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema DataBrewUpdateProfileJobRequest#OutputLocation
   */
  readonly outputLocation: DataBrewS3Location;

  /**
   * @schema DataBrewUpdateProfileJobRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema DataBrewUpdateProfileJobRequest#Timeout
   */
  readonly timeout?: number;

}

/**
 * @schema DataBrewUpdateProfileJobResponse
 */
export interface DataBrewUpdateProfileJobResponse {
  /**
   * @schema DataBrewUpdateProfileJobResponse#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewUpdateProjectRequest
 */
export interface DataBrewUpdateProjectRequest {
  /**
   * @schema DataBrewUpdateProjectRequest#Sample
   */
  readonly sample?: DataBrewSample;

  /**
   * @schema DataBrewUpdateProjectRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema DataBrewUpdateProjectRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewUpdateProjectResponse
 */
export interface DataBrewUpdateProjectResponse {
  /**
   * @schema DataBrewUpdateProjectResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DataBrewUpdateProjectResponse#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewUpdateRecipeRequest
 */
export interface DataBrewUpdateRecipeRequest {
  /**
   * @schema DataBrewUpdateRecipeRequest#Description
   */
  readonly description?: string;

  /**
   * @schema DataBrewUpdateRecipeRequest#Name
   */
  readonly name: string;

  /**
   * @schema DataBrewUpdateRecipeRequest#Steps
   */
  readonly steps?: DataBrewRecipeStep[];

}

/**
 * @schema DataBrewUpdateRecipeResponse
 */
export interface DataBrewUpdateRecipeResponse {
  /**
   * @schema DataBrewUpdateRecipeResponse#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewUpdateRecipeJobRequest
 */
export interface DataBrewUpdateRecipeJobRequest {
  /**
   * @schema DataBrewUpdateRecipeJobRequest#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema DataBrewUpdateRecipeJobRequest#EncryptionMode
   */
  readonly encryptionMode?: string;

  /**
   * @schema DataBrewUpdateRecipeJobRequest#Name
   */
  readonly name: string;

  /**
   * @schema DataBrewUpdateRecipeJobRequest#LogSubscription
   */
  readonly logSubscription?: string;

  /**
   * @schema DataBrewUpdateRecipeJobRequest#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema DataBrewUpdateRecipeJobRequest#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema DataBrewUpdateRecipeJobRequest#Outputs
   */
  readonly outputs: DataBrewOutput[];

  /**
   * @schema DataBrewUpdateRecipeJobRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema DataBrewUpdateRecipeJobRequest#Timeout
   */
  readonly timeout?: number;

}

/**
 * @schema DataBrewUpdateRecipeJobResponse
 */
export interface DataBrewUpdateRecipeJobResponse {
  /**
   * @schema DataBrewUpdateRecipeJobResponse#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewUpdateScheduleRequest
 */
export interface DataBrewUpdateScheduleRequest {
  /**
   * @schema DataBrewUpdateScheduleRequest#JobNames
   */
  readonly jobNames?: string[];

  /**
   * @schema DataBrewUpdateScheduleRequest#CronExpression
   */
  readonly cronExpression: string;

  /**
   * @schema DataBrewUpdateScheduleRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewUpdateScheduleResponse
 */
export interface DataBrewUpdateScheduleResponse {
  /**
   * @schema DataBrewUpdateScheduleResponse#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewRecipeVersionErrorDetail
 */
export interface DataBrewRecipeVersionErrorDetail {
  /**
   * @schema DataBrewRecipeVersionErrorDetail#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema DataBrewRecipeVersionErrorDetail#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema DataBrewRecipeVersionErrorDetail#RecipeVersion
   */
  readonly recipeVersion?: string;

}

/**
 * @schema DataBrewFormatOptions
 */
export interface DataBrewFormatOptions {
  /**
   * @schema DataBrewFormatOptions#Json
   */
  readonly json?: DataBrewJsonOptions;

  /**
   * @schema DataBrewFormatOptions#Excel
   */
  readonly excel?: DataBrewExcelOptions;

}

/**
 * @schema DataBrewInput
 */
export interface DataBrewInput {
  /**
   * @schema DataBrewInput#S3InputDefinition
   */
  readonly s3InputDefinition?: DataBrewS3Location;

  /**
   * @schema DataBrewInput#DataCatalogInputDefinition
   */
  readonly dataCatalogInputDefinition?: DataBrewDataCatalogInputDefinition;

}

/**
 * @schema DataBrewS3Location
 */
export interface DataBrewS3Location {
  /**
   * @schema DataBrewS3Location#Bucket
   */
  readonly bucket: string;

  /**
   * @schema DataBrewS3Location#Key
   */
  readonly key?: string;

}

/**
 * @schema DataBrewSample
 */
export interface DataBrewSample {
  /**
   * @schema DataBrewSample#Size
   */
  readonly size?: number;

  /**
   * @schema DataBrewSample#Type
   */
  readonly type: string;

}

/**
 * @schema DataBrewRecipeStep
 */
export interface DataBrewRecipeStep {
  /**
   * @schema DataBrewRecipeStep#Action
   */
  readonly action: DataBrewRecipeAction;

  /**
   * @schema DataBrewRecipeStep#ConditionExpressions
   */
  readonly conditionExpressions?: DataBrewConditionExpression[];

}

/**
 * @schema DataBrewOutput
 */
export interface DataBrewOutput {
  /**
   * @schema DataBrewOutput#CompressionFormat
   */
  readonly compressionFormat?: string;

  /**
   * @schema DataBrewOutput#Format
   */
  readonly format?: string;

  /**
   * @schema DataBrewOutput#PartitionColumns
   */
  readonly partitionColumns?: string[];

  /**
   * @schema DataBrewOutput#Location
   */
  readonly location: DataBrewS3Location;

  /**
   * @schema DataBrewOutput#Overwrite
   */
  readonly overwrite?: boolean;

}

/**
 * @schema DataBrewRecipeReference
 */
export interface DataBrewRecipeReference {
  /**
   * @schema DataBrewRecipeReference#Name
   */
  readonly name: string;

  /**
   * @schema DataBrewRecipeReference#RecipeVersion
   */
  readonly recipeVersion?: string;

}

/**
 * @schema DataBrewDataset
 */
export interface DataBrewDataset {
  /**
   * @schema DataBrewDataset#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema DataBrewDataset#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema DataBrewDataset#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema DataBrewDataset#Name
   */
  readonly name: string;

  /**
   * @schema DataBrewDataset#FormatOptions
   */
  readonly formatOptions?: DataBrewFormatOptions;

  /**
   * @schema DataBrewDataset#Input
   */
  readonly input: DataBrewInput;

  /**
   * @schema DataBrewDataset#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DataBrewDataset#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema DataBrewDataset#Source
   */
  readonly source?: string;

  /**
   * @schema DataBrewDataset#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataBrewDataset#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * @schema DataBrewJobRun
 */
export interface DataBrewJobRun {
  /**
   * @schema DataBrewJobRun#Attempt
   */
  readonly attempt?: number;

  /**
   * @schema DataBrewJobRun#CompletedOn
   */
  readonly completedOn?: string;

  /**
   * @schema DataBrewJobRun#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema DataBrewJobRun#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema DataBrewJobRun#ExecutionTime
   */
  readonly executionTime?: number;

  /**
   * @schema DataBrewJobRun#JobName
   */
  readonly jobName?: string;

  /**
   * @schema DataBrewJobRun#RunId
   */
  readonly runId?: string;

  /**
   * @schema DataBrewJobRun#State
   */
  readonly state?: string;

  /**
   * @schema DataBrewJobRun#LogSubscription
   */
  readonly logSubscription?: string;

  /**
   * @schema DataBrewJobRun#LogGroupName
   */
  readonly logGroupName?: string;

  /**
   * @schema DataBrewJobRun#Outputs
   */
  readonly outputs?: DataBrewOutput[];

  /**
   * @schema DataBrewJobRun#RecipeReference
   */
  readonly recipeReference?: DataBrewRecipeReference;

  /**
   * @schema DataBrewJobRun#StartedBy
   */
  readonly startedBy?: string;

  /**
   * @schema DataBrewJobRun#StartedOn
   */
  readonly startedOn?: string;

}

/**
 * @schema DataBrewJob
 */
export interface DataBrewJob {
  /**
   * @schema DataBrewJob#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema DataBrewJob#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema DataBrewJob#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema DataBrewJob#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema DataBrewJob#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema DataBrewJob#EncryptionMode
   */
  readonly encryptionMode?: string;

  /**
   * @schema DataBrewJob#Name
   */
  readonly name: string;

  /**
   * @schema DataBrewJob#Type
   */
  readonly type?: string;

  /**
   * @schema DataBrewJob#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema DataBrewJob#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DataBrewJob#LogSubscription
   */
  readonly logSubscription?: string;

  /**
   * @schema DataBrewJob#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema DataBrewJob#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema DataBrewJob#Outputs
   */
  readonly outputs?: DataBrewOutput[];

  /**
   * @schema DataBrewJob#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema DataBrewJob#RecipeReference
   */
  readonly recipeReference?: DataBrewRecipeReference;

  /**
   * @schema DataBrewJob#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DataBrewJob#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DataBrewJob#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema DataBrewJob#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema DataBrewProject
 */
export interface DataBrewProject {
  /**
   * @schema DataBrewProject#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema DataBrewProject#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema DataBrewProject#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema DataBrewProject#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema DataBrewProject#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DataBrewProject#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema DataBrewProject#Name
   */
  readonly name: string;

  /**
   * @schema DataBrewProject#RecipeName
   */
  readonly recipeName: string;

  /**
   * @schema DataBrewProject#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DataBrewProject#Sample
   */
  readonly sample?: DataBrewSample;

  /**
   * @schema DataBrewProject#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataBrewProject#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DataBrewProject#OpenedBy
   */
  readonly openedBy?: string;

  /**
   * @schema DataBrewProject#OpenDate
   */
  readonly openDate?: string;

}

/**
 * @schema DataBrewRecipe
 */
export interface DataBrewRecipe {
  /**
   * @schema DataBrewRecipe#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema DataBrewRecipe#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema DataBrewRecipe#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema DataBrewRecipe#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DataBrewRecipe#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema DataBrewRecipe#PublishedBy
   */
  readonly publishedBy?: string;

  /**
   * @schema DataBrewRecipe#PublishedDate
   */
  readonly publishedDate?: string;

  /**
   * @schema DataBrewRecipe#Description
   */
  readonly description?: string;

  /**
   * @schema DataBrewRecipe#Name
   */
  readonly name: string;

  /**
   * @schema DataBrewRecipe#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DataBrewRecipe#Steps
   */
  readonly steps?: DataBrewRecipeStep[];

  /**
   * @schema DataBrewRecipe#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataBrewRecipe#RecipeVersion
   */
  readonly recipeVersion?: string;

}

/**
 * @schema DataBrewSchedule
 */
export interface DataBrewSchedule {
  /**
   * @schema DataBrewSchedule#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema DataBrewSchedule#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema DataBrewSchedule#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema DataBrewSchedule#JobNames
   */
  readonly jobNames?: string[];

  /**
   * @schema DataBrewSchedule#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema DataBrewSchedule#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DataBrewSchedule#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DataBrewSchedule#CronExpression
   */
  readonly cronExpression?: string;

  /**
   * @schema DataBrewSchedule#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DataBrewSchedule#Name
   */
  readonly name: string;

}

/**
 * @schema DataBrewViewFrame
 */
export interface DataBrewViewFrame {
  /**
   * @schema DataBrewViewFrame#StartColumnIndex
   */
  readonly startColumnIndex: number;

  /**
   * @schema DataBrewViewFrame#ColumnRange
   */
  readonly columnRange?: number;

  /**
   * @schema DataBrewViewFrame#HiddenColumns
   */
  readonly hiddenColumns?: string[];

}

/**
 * @schema DataBrewJsonOptions
 */
export interface DataBrewJsonOptions {
  /**
   * @schema DataBrewJsonOptions#MultiLine
   */
  readonly multiLine?: boolean;

}

/**
 * @schema DataBrewExcelOptions
 */
export interface DataBrewExcelOptions {
  /**
   * @schema DataBrewExcelOptions#SheetNames
   */
  readonly sheetNames?: string[];

  /**
   * @schema DataBrewExcelOptions#SheetIndexes
   */
  readonly sheetIndexes?: number[];

}

/**
 * @schema DataBrewDataCatalogInputDefinition
 */
export interface DataBrewDataCatalogInputDefinition {
  /**
   * @schema DataBrewDataCatalogInputDefinition#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema DataBrewDataCatalogInputDefinition#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema DataBrewDataCatalogInputDefinition#TableName
   */
  readonly tableName: string;

  /**
   * @schema DataBrewDataCatalogInputDefinition#TempDirectory
   */
  readonly tempDirectory?: DataBrewS3Location;

}

/**
 * @schema DataBrewRecipeAction
 */
export interface DataBrewRecipeAction {
  /**
   * @schema DataBrewRecipeAction#Operation
   */
  readonly operation: string;

  /**
   * @schema DataBrewRecipeAction#Parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * @schema DataBrewConditionExpression
 */
export interface DataBrewConditionExpression {
  /**
   * @schema DataBrewConditionExpression#Condition
   */
  readonly condition: string;

  /**
   * @schema DataBrewConditionExpression#Value
   */
  readonly value?: string;

  /**
   * @schema DataBrewConditionExpression#TargetColumn
   */
  readonly targetColumn: string;

}
