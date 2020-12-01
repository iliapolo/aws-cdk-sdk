/**
 * @schema BatchDeleteRecipeVersionRequest
 */
export interface BatchDeleteRecipeVersionRequest {
  /**
   * @schema BatchDeleteRecipeVersionRequest#Name
   */
  readonly name: string;

  /**
   * @schema BatchDeleteRecipeVersionRequest#RecipeVersions
   */
  readonly recipeVersions: string[];

}

/**
 * @schema BatchDeleteRecipeVersionResponse
 */
export interface BatchDeleteRecipeVersionResponse {
  /**
   * @schema BatchDeleteRecipeVersionResponse#Name
   */
  readonly name: string;

  /**
   * @schema BatchDeleteRecipeVersionResponse#Errors
   */
  readonly errors?: RecipeVersionErrorDetail[];

}

/**
 * @schema CreateDatasetRequest
 */
export interface CreateDatasetRequest {
  /**
   * @schema CreateDatasetRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateDatasetRequest#FormatOptions
   */
  readonly formatOptions?: FormatOptions;

  /**
   * @schema CreateDatasetRequest#Input
   */
  readonly input: Input;

  /**
   * @schema CreateDatasetRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateDatasetResponse
 */
export interface CreateDatasetResponse {
  /**
   * @schema CreateDatasetResponse#Name
   */
  readonly name: string;

}

/**
 * @schema CreateProfileJobRequest
 */
export interface CreateProfileJobRequest {
  /**
   * @schema CreateProfileJobRequest#DatasetName
   */
  readonly datasetName: string;

  /**
   * @schema CreateProfileJobRequest#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema CreateProfileJobRequest#EncryptionMode
   */
  readonly encryptionMode?: string;

  /**
   * @schema CreateProfileJobRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateProfileJobRequest#LogSubscription
   */
  readonly logSubscription?: string;

  /**
   * @schema CreateProfileJobRequest#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema CreateProfileJobRequest#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema CreateProfileJobRequest#OutputLocation
   */
  readonly outputLocation: S3Location;

  /**
   * @schema CreateProfileJobRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema CreateProfileJobRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateProfileJobRequest#Timeout
   */
  readonly timeout?: number;

}

/**
 * @schema CreateProfileJobResponse
 */
export interface CreateProfileJobResponse {
  /**
   * @schema CreateProfileJobResponse#Name
   */
  readonly name: string;

}

/**
 * @schema CreateProjectRequest
 */
export interface CreateProjectRequest {
  /**
   * @schema CreateProjectRequest#DatasetName
   */
  readonly datasetName: string;

  /**
   * @schema CreateProjectRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateProjectRequest#RecipeName
   */
  readonly recipeName: string;

  /**
   * @schema CreateProjectRequest#Sample
   */
  readonly sample?: Sample;

  /**
   * @schema CreateProjectRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema CreateProjectRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateProjectResponse
 */
export interface CreateProjectResponse {
  /**
   * @schema CreateProjectResponse#Name
   */
  readonly name: string;

}

/**
 * @schema CreateRecipeRequest
 */
export interface CreateRecipeRequest {
  /**
   * @schema CreateRecipeRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateRecipeRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateRecipeRequest#Steps
   */
  readonly steps: RecipeStep[];

  /**
   * @schema CreateRecipeRequest#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema CreateRecipeResponse
 */
export interface CreateRecipeResponse {
  /**
   * @schema CreateRecipeResponse#Name
   */
  readonly name: string;

}

/**
 * @schema CreateRecipeJobRequest
 */
export interface CreateRecipeJobRequest {
  /**
   * @schema CreateRecipeJobRequest#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema CreateRecipeJobRequest#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema CreateRecipeJobRequest#EncryptionMode
   */
  readonly encryptionMode?: string;

  /**
   * @schema CreateRecipeJobRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateRecipeJobRequest#LogSubscription
   */
  readonly logSubscription?: string;

  /**
   * @schema CreateRecipeJobRequest#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema CreateRecipeJobRequest#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema CreateRecipeJobRequest#Outputs
   */
  readonly outputs: Output[];

  /**
   * @schema CreateRecipeJobRequest#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema CreateRecipeJobRequest#RecipeReference
   */
  readonly recipeReference?: RecipeReference;

  /**
   * @schema CreateRecipeJobRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema CreateRecipeJobRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateRecipeJobRequest#Timeout
   */
  readonly timeout?: number;

}

/**
 * @schema CreateRecipeJobResponse
 */
export interface CreateRecipeJobResponse {
  /**
   * @schema CreateRecipeJobResponse#Name
   */
  readonly name: string;

}

/**
 * @schema CreateScheduleRequest
 */
export interface CreateScheduleRequest {
  /**
   * @schema CreateScheduleRequest#JobNames
   */
  readonly jobNames?: string[];

  /**
   * @schema CreateScheduleRequest#CronExpression
   */
  readonly cronExpression: string;

  /**
   * @schema CreateScheduleRequest#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema CreateScheduleRequest#Name
   */
  readonly name: string;

}

/**
 * @schema CreateScheduleResponse
 */
export interface CreateScheduleResponse {
  /**
   * @schema CreateScheduleResponse#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteDatasetRequest
 */
export interface DeleteDatasetRequest {
  /**
   * @schema DeleteDatasetRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteDatasetResponse
 */
export interface DeleteDatasetResponse {
  /**
   * @schema DeleteDatasetResponse#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteJobRequest
 */
export interface DeleteJobRequest {
  /**
   * @schema DeleteJobRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteJobResponse
 */
export interface DeleteJobResponse {
  /**
   * @schema DeleteJobResponse#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteProjectRequest
 */
export interface DeleteProjectRequest {
  /**
   * @schema DeleteProjectRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteProjectResponse
 */
export interface DeleteProjectResponse {
  /**
   * @schema DeleteProjectResponse#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteRecipeVersionRequest
 */
export interface DeleteRecipeVersionRequest {
  /**
   * @schema DeleteRecipeVersionRequest#Name
   */
  readonly name: string;

  /**
   * @schema DeleteRecipeVersionRequest#RecipeVersion
   */
  readonly recipeVersion: string;

}

/**
 * @schema DeleteRecipeVersionResponse
 */
export interface DeleteRecipeVersionResponse {
  /**
   * @schema DeleteRecipeVersionResponse#Name
   */
  readonly name: string;

  /**
   * @schema DeleteRecipeVersionResponse#RecipeVersion
   */
  readonly recipeVersion: string;

}

/**
 * @schema DeleteScheduleRequest
 */
export interface DeleteScheduleRequest {
  /**
   * @schema DeleteScheduleRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteScheduleResponse
 */
export interface DeleteScheduleResponse {
  /**
   * @schema DeleteScheduleResponse#Name
   */
  readonly name: string;

}

/**
 * @schema DescribeDatasetRequest
 */
export interface DescribeDatasetRequest {
  /**
   * @schema DescribeDatasetRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DescribeDatasetResponse
 */
export interface DescribeDatasetResponse {
  /**
   * @schema DescribeDatasetResponse#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema DescribeDatasetResponse#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema DescribeDatasetResponse#Name
   */
  readonly name: string;

  /**
   * @schema DescribeDatasetResponse#FormatOptions
   */
  readonly formatOptions?: FormatOptions;

  /**
   * @schema DescribeDatasetResponse#Input
   */
  readonly input: Input;

  /**
   * @schema DescribeDatasetResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DescribeDatasetResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema DescribeDatasetResponse#Source
   */
  readonly source?: string;

  /**
   * @schema DescribeDatasetResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DescribeDatasetResponse#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * @schema DescribeJobRequest
 */
export interface DescribeJobRequest {
  /**
   * @schema DescribeJobRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DescribeJobResponse
 */
export interface DescribeJobResponse {
  /**
   * @schema DescribeJobResponse#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema DescribeJobResponse#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema DescribeJobResponse#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema DescribeJobResponse#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema DescribeJobResponse#EncryptionMode
   */
  readonly encryptionMode?: string;

  /**
   * @schema DescribeJobResponse#Name
   */
  readonly name: string;

  /**
   * @schema DescribeJobResponse#Type
   */
  readonly type?: string;

  /**
   * @schema DescribeJobResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema DescribeJobResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DescribeJobResponse#LogSubscription
   */
  readonly logSubscription?: string;

  /**
   * @schema DescribeJobResponse#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema DescribeJobResponse#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema DescribeJobResponse#Outputs
   */
  readonly outputs?: Output[];

  /**
   * @schema DescribeJobResponse#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema DescribeJobResponse#RecipeReference
   */
  readonly recipeReference?: RecipeReference;

  /**
   * @schema DescribeJobResponse#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DescribeJobResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DescribeJobResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DescribeJobResponse#Timeout
   */
  readonly timeout?: number;

}

/**
 * @schema DescribeProjectRequest
 */
export interface DescribeProjectRequest {
  /**
   * @schema DescribeProjectRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DescribeProjectResponse
 */
export interface DescribeProjectResponse {
  /**
   * @schema DescribeProjectResponse#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema DescribeProjectResponse#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema DescribeProjectResponse#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema DescribeProjectResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DescribeProjectResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema DescribeProjectResponse#Name
   */
  readonly name: string;

  /**
   * @schema DescribeProjectResponse#RecipeName
   */
  readonly recipeName?: string;

  /**
   * @schema DescribeProjectResponse#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DescribeProjectResponse#Sample
   */
  readonly sample?: Sample;

  /**
   * @schema DescribeProjectResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DescribeProjectResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DescribeProjectResponse#SessionStatus
   */
  readonly sessionStatus?: string;

  /**
   * @schema DescribeProjectResponse#OpenedBy
   */
  readonly openedBy?: string;

  /**
   * @schema DescribeProjectResponse#OpenDate
   */
  readonly openDate?: string;

}

/**
 * @schema DescribeRecipeRequest
 */
export interface DescribeRecipeRequest {
  /**
   * @schema DescribeRecipeRequest#Name
   */
  readonly name: string;

  /**
   * @schema DescribeRecipeRequest#RecipeVersion
   */
  readonly recipeVersion?: string;

}

/**
 * @schema DescribeRecipeResponse
 */
export interface DescribeRecipeResponse {
  /**
   * @schema DescribeRecipeResponse#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema DescribeRecipeResponse#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema DescribeRecipeResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema DescribeRecipeResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DescribeRecipeResponse#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema DescribeRecipeResponse#PublishedBy
   */
  readonly publishedBy?: string;

  /**
   * @schema DescribeRecipeResponse#PublishedDate
   */
  readonly publishedDate?: string;

  /**
   * @schema DescribeRecipeResponse#Description
   */
  readonly description?: string;

  /**
   * @schema DescribeRecipeResponse#Name
   */
  readonly name: string;

  /**
   * @schema DescribeRecipeResponse#Steps
   */
  readonly steps?: RecipeStep[];

  /**
   * @schema DescribeRecipeResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DescribeRecipeResponse#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DescribeRecipeResponse#RecipeVersion
   */
  readonly recipeVersion?: string;

}

/**
 * @schema DescribeScheduleRequest
 */
export interface DescribeScheduleRequest {
  /**
   * @schema DescribeScheduleRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DescribeScheduleResponse
 */
export interface DescribeScheduleResponse {
  /**
   * @schema DescribeScheduleResponse#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema DescribeScheduleResponse#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema DescribeScheduleResponse#JobNames
   */
  readonly jobNames?: string[];

  /**
   * @schema DescribeScheduleResponse#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema DescribeScheduleResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema DescribeScheduleResponse#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema DescribeScheduleResponse#CronExpression
   */
  readonly cronExpression?: string;

  /**
   * @schema DescribeScheduleResponse#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema DescribeScheduleResponse#Name
   */
  readonly name: string;

}

/**
 * @schema ListDatasetsRequest
 */
export interface ListDatasetsRequest {
  /**
   * @schema ListDatasetsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListDatasetsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListDatasetsResponse
 */
export interface ListDatasetsResponse {
  /**
   * @schema ListDatasetsResponse#Datasets
   */
  readonly datasets: Dataset[];

  /**
   * @schema ListDatasetsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListJobRunsRequest
 */
export interface ListJobRunsRequest {
  /**
   * @schema ListJobRunsRequest#Name
   */
  readonly name: string;

  /**
   * @schema ListJobRunsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListJobRunsRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListJobRunsResponse
 */
export interface ListJobRunsResponse {
  /**
   * @schema ListJobRunsResponse#JobRuns
   */
  readonly jobRuns: JobRun[];

  /**
   * @schema ListJobRunsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListJobsRequest
 */
export interface ListJobsRequest {
  /**
   * @schema ListJobsRequest#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema ListJobsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListJobsRequest#ProjectName
   */
  readonly projectName?: string;

}

/**
 * @schema ListJobsResponse
 */
export interface ListJobsResponse {
  /**
   * @schema ListJobsResponse#Jobs
   */
  readonly jobs: Job[];

  /**
   * @schema ListJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListProjectsRequest
 */
export interface ListProjectsRequest {
  /**
   * @schema ListProjectsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListProjectsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListProjectsResponse
 */
export interface ListProjectsResponse {
  /**
   * @schema ListProjectsResponse#Projects
   */
  readonly projects: Project[];

  /**
   * @schema ListProjectsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRecipeVersionsRequest
 */
export interface ListRecipeVersionsRequest {
  /**
   * @schema ListRecipeVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListRecipeVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRecipeVersionsRequest#Name
   */
  readonly name: string;

}

/**
 * @schema ListRecipeVersionsResponse
 */
export interface ListRecipeVersionsResponse {
  /**
   * @schema ListRecipeVersionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRecipeVersionsResponse#Recipes
   */
  readonly recipes: Recipe[];

}

/**
 * @schema ListRecipesRequest
 */
export interface ListRecipesRequest {
  /**
   * @schema ListRecipesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListRecipesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRecipesRequest#RecipeVersion
   */
  readonly recipeVersion?: string;

}

/**
 * @schema ListRecipesResponse
 */
export interface ListRecipesResponse {
  /**
   * @schema ListRecipesResponse#Recipes
   */
  readonly recipes: Recipe[];

  /**
   * @schema ListRecipesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSchedulesRequest
 */
export interface ListSchedulesRequest {
  /**
   * @schema ListSchedulesRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ListSchedulesRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema ListSchedulesRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListSchedulesResponse
 */
export interface ListSchedulesResponse {
  /**
   * @schema ListSchedulesResponse#Schedules
   */
  readonly schedules: Schedule[];

  /**
   * @schema ListSchedulesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTagsForResourceRequest
 */
export interface ListTagsForResourceRequest {
  /**
   * @schema ListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

}

/**
 * @schema ListTagsForResourceResponse
 */
export interface ListTagsForResourceResponse {
  /**
   * @schema ListTagsForResourceResponse#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema PublishRecipeRequest
 */
export interface PublishRecipeRequest {
  /**
   * @schema PublishRecipeRequest#Description
   */
  readonly description?: string;

  /**
   * @schema PublishRecipeRequest#Name
   */
  readonly name: string;

}

/**
 * @schema PublishRecipeResponse
 */
export interface PublishRecipeResponse {
  /**
   * @schema PublishRecipeResponse#Name
   */
  readonly name: string;

}

/**
 * @schema SendProjectSessionActionRequest
 */
export interface SendProjectSessionActionRequest {
  /**
   * @schema SendProjectSessionActionRequest#Preview
   */
  readonly preview?: boolean;

  /**
   * @schema SendProjectSessionActionRequest#Name
   */
  readonly name: string;

  /**
   * @schema SendProjectSessionActionRequest#RecipeStep
   */
  readonly recipeStep?: RecipeStep;

  /**
   * @schema SendProjectSessionActionRequest#StepIndex
   */
  readonly stepIndex?: number;

  /**
   * @schema SendProjectSessionActionRequest#ClientSessionId
   */
  readonly clientSessionId?: string;

  /**
   * @schema SendProjectSessionActionRequest#ViewFrame
   */
  readonly viewFrame?: ViewFrame;

}

/**
 * @schema SendProjectSessionActionResponse
 */
export interface SendProjectSessionActionResponse {
  /**
   * @schema SendProjectSessionActionResponse#Result
   */
  readonly result?: string;

  /**
   * @schema SendProjectSessionActionResponse#Name
   */
  readonly name: string;

  /**
   * @schema SendProjectSessionActionResponse#ActionId
   */
  readonly actionId?: number;

}

/**
 * @schema StartJobRunRequest
 */
export interface StartJobRunRequest {
  /**
   * @schema StartJobRunRequest#Name
   */
  readonly name: string;

}

/**
 * @schema StartJobRunResponse
 */
export interface StartJobRunResponse {
  /**
   * @schema StartJobRunResponse#RunId
   */
  readonly runId: string;

}

/**
 * @schema StartProjectSessionRequest
 */
export interface StartProjectSessionRequest {
  /**
   * @schema StartProjectSessionRequest#Name
   */
  readonly name: string;

  /**
   * @schema StartProjectSessionRequest#AssumeControl
   */
  readonly assumeControl?: boolean;

}

/**
 * @schema StartProjectSessionResponse
 */
export interface StartProjectSessionResponse {
  /**
   * @schema StartProjectSessionResponse#Name
   */
  readonly name: string;

  /**
   * @schema StartProjectSessionResponse#ClientSessionId
   */
  readonly clientSessionId?: string;

}

/**
 * @schema StopJobRunRequest
 */
export interface StopJobRunRequest {
  /**
   * @schema StopJobRunRequest#Name
   */
  readonly name: string;

  /**
   * @schema StopJobRunRequest#RunId
   */
  readonly runId: string;

}

/**
 * @schema StopJobRunResponse
 */
export interface StopJobRunResponse {
  /**
   * @schema StopJobRunResponse#RunId
   */
  readonly runId: string;

}

/**
 * @schema TagResourceRequest
 */
export interface TagResourceRequest {
  /**
   * @schema TagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema TagResourceRequest#Tags
   */
  readonly tags: { [key: string]: string };

}

/**
 * @schema TagResourceResponse
 */
export interface TagResourceResponse {
}

/**
 * @schema UntagResourceRequest
 */
export interface UntagResourceRequest {
  /**
   * @schema UntagResourceRequest#ResourceArn
   */
  readonly resourceArn: string;

  /**
   * @schema UntagResourceRequest#TagKeys
   */
  readonly tagKeys: string[];

}

/**
 * @schema UntagResourceResponse
 */
export interface UntagResourceResponse {
}

/**
 * @schema UpdateDatasetRequest
 */
export interface UpdateDatasetRequest {
  /**
   * @schema UpdateDatasetRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateDatasetRequest#FormatOptions
   */
  readonly formatOptions?: FormatOptions;

  /**
   * @schema UpdateDatasetRequest#Input
   */
  readonly input: Input;

}

/**
 * @schema UpdateDatasetResponse
 */
export interface UpdateDatasetResponse {
  /**
   * @schema UpdateDatasetResponse#Name
   */
  readonly name: string;

}

/**
 * @schema UpdateProfileJobRequest
 */
export interface UpdateProfileJobRequest {
  /**
   * @schema UpdateProfileJobRequest#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema UpdateProfileJobRequest#EncryptionMode
   */
  readonly encryptionMode?: string;

  /**
   * @schema UpdateProfileJobRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateProfileJobRequest#LogSubscription
   */
  readonly logSubscription?: string;

  /**
   * @schema UpdateProfileJobRequest#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema UpdateProfileJobRequest#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema UpdateProfileJobRequest#OutputLocation
   */
  readonly outputLocation: S3Location;

  /**
   * @schema UpdateProfileJobRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema UpdateProfileJobRequest#Timeout
   */
  readonly timeout?: number;

}

/**
 * @schema UpdateProfileJobResponse
 */
export interface UpdateProfileJobResponse {
  /**
   * @schema UpdateProfileJobResponse#Name
   */
  readonly name: string;

}

/**
 * @schema UpdateProjectRequest
 */
export interface UpdateProjectRequest {
  /**
   * @schema UpdateProjectRequest#Sample
   */
  readonly sample?: Sample;

  /**
   * @schema UpdateProjectRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema UpdateProjectRequest#Name
   */
  readonly name: string;

}

/**
 * @schema UpdateProjectResponse
 */
export interface UpdateProjectResponse {
  /**
   * @schema UpdateProjectResponse#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema UpdateProjectResponse#Name
   */
  readonly name: string;

}

/**
 * @schema UpdateRecipeRequest
 */
export interface UpdateRecipeRequest {
  /**
   * @schema UpdateRecipeRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateRecipeRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateRecipeRequest#Steps
   */
  readonly steps?: RecipeStep[];

}

/**
 * @schema UpdateRecipeResponse
 */
export interface UpdateRecipeResponse {
  /**
   * @schema UpdateRecipeResponse#Name
   */
  readonly name: string;

}

/**
 * @schema UpdateRecipeJobRequest
 */
export interface UpdateRecipeJobRequest {
  /**
   * @schema UpdateRecipeJobRequest#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema UpdateRecipeJobRequest#EncryptionMode
   */
  readonly encryptionMode?: string;

  /**
   * @schema UpdateRecipeJobRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateRecipeJobRequest#LogSubscription
   */
  readonly logSubscription?: string;

  /**
   * @schema UpdateRecipeJobRequest#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema UpdateRecipeJobRequest#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema UpdateRecipeJobRequest#Outputs
   */
  readonly outputs: Output[];

  /**
   * @schema UpdateRecipeJobRequest#RoleArn
   */
  readonly roleArn: string;

  /**
   * @schema UpdateRecipeJobRequest#Timeout
   */
  readonly timeout?: number;

}

/**
 * @schema UpdateRecipeJobResponse
 */
export interface UpdateRecipeJobResponse {
  /**
   * @schema UpdateRecipeJobResponse#Name
   */
  readonly name: string;

}

/**
 * @schema UpdateScheduleRequest
 */
export interface UpdateScheduleRequest {
  /**
   * @schema UpdateScheduleRequest#JobNames
   */
  readonly jobNames?: string[];

  /**
   * @schema UpdateScheduleRequest#CronExpression
   */
  readonly cronExpression: string;

  /**
   * @schema UpdateScheduleRequest#Name
   */
  readonly name: string;

}

/**
 * @schema UpdateScheduleResponse
 */
export interface UpdateScheduleResponse {
  /**
   * @schema UpdateScheduleResponse#Name
   */
  readonly name: string;

}

/**
 * @schema RecipeVersionErrorDetail
 */
export interface RecipeVersionErrorDetail {
  /**
   * @schema RecipeVersionErrorDetail#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema RecipeVersionErrorDetail#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema RecipeVersionErrorDetail#RecipeVersion
   */
  readonly recipeVersion?: string;

}

/**
 * @schema FormatOptions
 */
export interface FormatOptions {
  /**
   * @schema FormatOptions#Json
   */
  readonly json?: JsonOptions;

  /**
   * @schema FormatOptions#Excel
   */
  readonly excel?: ExcelOptions;

}

/**
 * @schema Input
 */
export interface Input {
  /**
   * @schema Input#S3InputDefinition
   */
  readonly s3InputDefinition?: S3Location;

  /**
   * @schema Input#DataCatalogInputDefinition
   */
  readonly dataCatalogInputDefinition?: DataCatalogInputDefinition;

}

/**
 * @schema S3Location
 */
export interface S3Location {
  /**
   * @schema S3Location#Bucket
   */
  readonly bucket: string;

  /**
   * @schema S3Location#Key
   */
  readonly key?: string;

}

/**
 * @schema Sample
 */
export interface Sample {
  /**
   * @schema Sample#Size
   */
  readonly size?: number;

  /**
   * @schema Sample#Type
   */
  readonly type: string;

}

/**
 * @schema RecipeStep
 */
export interface RecipeStep {
  /**
   * @schema RecipeStep#Action
   */
  readonly action: RecipeAction;

  /**
   * @schema RecipeStep#ConditionExpressions
   */
  readonly conditionExpressions?: ConditionExpression[];

}

/**
 * @schema Output
 */
export interface Output {
  /**
   * @schema Output#CompressionFormat
   */
  readonly compressionFormat?: string;

  /**
   * @schema Output#Format
   */
  readonly format?: string;

  /**
   * @schema Output#PartitionColumns
   */
  readonly partitionColumns?: string[];

  /**
   * @schema Output#Location
   */
  readonly location: S3Location;

  /**
   * @schema Output#Overwrite
   */
  readonly overwrite?: boolean;

}

/**
 * @schema RecipeReference
 */
export interface RecipeReference {
  /**
   * @schema RecipeReference#Name
   */
  readonly name: string;

  /**
   * @schema RecipeReference#RecipeVersion
   */
  readonly recipeVersion?: string;

}

/**
 * @schema Dataset
 */
export interface Dataset {
  /**
   * @schema Dataset#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema Dataset#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema Dataset#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema Dataset#Name
   */
  readonly name: string;

  /**
   * @schema Dataset#FormatOptions
   */
  readonly formatOptions?: FormatOptions;

  /**
   * @schema Dataset#Input
   */
  readonly input: Input;

  /**
   * @schema Dataset#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema Dataset#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema Dataset#Source
   */
  readonly source?: string;

  /**
   * @schema Dataset#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema Dataset#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * @schema JobRun
 */
export interface JobRun {
  /**
   * @schema JobRun#Attempt
   */
  readonly attempt?: number;

  /**
   * @schema JobRun#CompletedOn
   */
  readonly completedOn?: string;

  /**
   * @schema JobRun#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema JobRun#ErrorMessage
   */
  readonly errorMessage?: string;

  /**
   * @schema JobRun#ExecutionTime
   */
  readonly executionTime?: number;

  /**
   * @schema JobRun#JobName
   */
  readonly jobName?: string;

  /**
   * @schema JobRun#RunId
   */
  readonly runId?: string;

  /**
   * @schema JobRun#State
   */
  readonly state?: string;

  /**
   * @schema JobRun#LogSubscription
   */
  readonly logSubscription?: string;

  /**
   * @schema JobRun#LogGroupName
   */
  readonly logGroupName?: string;

  /**
   * @schema JobRun#Outputs
   */
  readonly outputs?: Output[];

  /**
   * @schema JobRun#RecipeReference
   */
  readonly recipeReference?: RecipeReference;

  /**
   * @schema JobRun#StartedBy
   */
  readonly startedBy?: string;

  /**
   * @schema JobRun#StartedOn
   */
  readonly startedOn?: string;

}

/**
 * @schema Job
 */
export interface Job {
  /**
   * @schema Job#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema Job#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema Job#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema Job#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema Job#EncryptionKeyArn
   */
  readonly encryptionKeyArn?: string;

  /**
   * @schema Job#EncryptionMode
   */
  readonly encryptionMode?: string;

  /**
   * @schema Job#Name
   */
  readonly name: string;

  /**
   * @schema Job#Type
   */
  readonly type?: string;

  /**
   * @schema Job#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema Job#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema Job#LogSubscription
   */
  readonly logSubscription?: string;

  /**
   * @schema Job#MaxCapacity
   */
  readonly maxCapacity?: number;

  /**
   * @schema Job#MaxRetries
   */
  readonly maxRetries?: number;

  /**
   * @schema Job#Outputs
   */
  readonly outputs?: Output[];

  /**
   * @schema Job#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema Job#RecipeReference
   */
  readonly recipeReference?: RecipeReference;

  /**
   * @schema Job#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema Job#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema Job#Timeout
   */
  readonly timeout?: number;

  /**
   * @schema Job#Tags
   */
  readonly tags?: { [key: string]: string };

}

/**
 * @schema Project
 */
export interface Project {
  /**
   * @schema Project#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema Project#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema Project#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema Project#DatasetName
   */
  readonly datasetName?: string;

  /**
   * @schema Project#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema Project#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema Project#Name
   */
  readonly name: string;

  /**
   * @schema Project#RecipeName
   */
  readonly recipeName: string;

  /**
   * @schema Project#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema Project#Sample
   */
  readonly sample?: Sample;

  /**
   * @schema Project#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema Project#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema Project#OpenedBy
   */
  readonly openedBy?: string;

  /**
   * @schema Project#OpenDate
   */
  readonly openDate?: string;

}

/**
 * @schema Recipe
 */
export interface Recipe {
  /**
   * @schema Recipe#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema Recipe#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema Recipe#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema Recipe#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema Recipe#ProjectName
   */
  readonly projectName?: string;

  /**
   * @schema Recipe#PublishedBy
   */
  readonly publishedBy?: string;

  /**
   * @schema Recipe#PublishedDate
   */
  readonly publishedDate?: string;

  /**
   * @schema Recipe#Description
   */
  readonly description?: string;

  /**
   * @schema Recipe#Name
   */
  readonly name: string;

  /**
   * @schema Recipe#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema Recipe#Steps
   */
  readonly steps?: RecipeStep[];

  /**
   * @schema Recipe#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema Recipe#RecipeVersion
   */
  readonly recipeVersion?: string;

}

/**
 * @schema Schedule
 */
export interface Schedule {
  /**
   * @schema Schedule#AccountId
   */
  readonly accountId?: string;

  /**
   * @schema Schedule#CreatedBy
   */
  readonly createdBy?: string;

  /**
   * @schema Schedule#CreateDate
   */
  readonly createDate?: string;

  /**
   * @schema Schedule#JobNames
   */
  readonly jobNames?: string[];

  /**
   * @schema Schedule#LastModifiedBy
   */
  readonly lastModifiedBy?: string;

  /**
   * @schema Schedule#LastModifiedDate
   */
  readonly lastModifiedDate?: string;

  /**
   * @schema Schedule#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema Schedule#CronExpression
   */
  readonly cronExpression?: string;

  /**
   * @schema Schedule#Tags
   */
  readonly tags?: { [key: string]: string };

  /**
   * @schema Schedule#Name
   */
  readonly name: string;

}

/**
 * @schema ViewFrame
 */
export interface ViewFrame {
  /**
   * @schema ViewFrame#StartColumnIndex
   */
  readonly startColumnIndex: number;

  /**
   * @schema ViewFrame#ColumnRange
   */
  readonly columnRange?: number;

  /**
   * @schema ViewFrame#HiddenColumns
   */
  readonly hiddenColumns?: string[];

}

/**
 * @schema JsonOptions
 */
export interface JsonOptions {
  /**
   * @schema JsonOptions#MultiLine
   */
  readonly multiLine?: boolean;

}

/**
 * @schema ExcelOptions
 */
export interface ExcelOptions {
  /**
   * @schema ExcelOptions#SheetNames
   */
  readonly sheetNames?: string[];

  /**
   * @schema ExcelOptions#SheetIndexes
   */
  readonly sheetIndexes?: number[];

}

/**
 * @schema DataCatalogInputDefinition
 */
export interface DataCatalogInputDefinition {
  /**
   * @schema DataCatalogInputDefinition#CatalogId
   */
  readonly catalogId?: string;

  /**
   * @schema DataCatalogInputDefinition#DatabaseName
   */
  readonly databaseName: string;

  /**
   * @schema DataCatalogInputDefinition#TableName
   */
  readonly tableName: string;

  /**
   * @schema DataCatalogInputDefinition#TempDirectory
   */
  readonly tempDirectory?: S3Location;

}

/**
 * @schema RecipeAction
 */
export interface RecipeAction {
  /**
   * @schema RecipeAction#Operation
   */
  readonly operation: string;

  /**
   * @schema RecipeAction#Parameters
   */
  readonly parameters?: { [key: string]: string };

}

/**
 * @schema ConditionExpression
 */
export interface ConditionExpression {
  /**
   * @schema ConditionExpression#Condition
   */
  readonly condition: string;

  /**
   * @schema ConditionExpression#Value
   */
  readonly value?: string;

  /**
   * @schema ConditionExpression#TargetColumn
   */
  readonly targetColumn: string;

}
