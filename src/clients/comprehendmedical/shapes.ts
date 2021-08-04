/**
 * @schema ComprehendMedicalDescribeEntitiesDetectionV2JobRequest
 */
export interface ComprehendMedicalDescribeEntitiesDetectionV2JobRequest {
  /**
   * @schema ComprehendMedicalDescribeEntitiesDetectionV2JobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema ComprehendMedicalDescribeEntitiesDetectionV2JobResponse
 */
export interface ComprehendMedicalDescribeEntitiesDetectionV2JobResponse {
  /**
   * @schema ComprehendMedicalDescribeEntitiesDetectionV2JobResponse#ComprehendMedicalAsyncJobProperties
   */
  readonly comprehendMedicalAsyncJobProperties?: ComprehendMedicalComprehendMedicalAsyncJobProperties;

}

/**
 * @schema ComprehendMedicalDescribeIcd10CmInferenceJobRequest
 */
export interface ComprehendMedicalDescribeIcd10CmInferenceJobRequest {
  /**
   * @schema ComprehendMedicalDescribeIcd10CmInferenceJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema ComprehendMedicalDescribeIcd10CmInferenceJobResponse
 */
export interface ComprehendMedicalDescribeIcd10CmInferenceJobResponse {
  /**
   * @schema ComprehendMedicalDescribeIcd10CmInferenceJobResponse#ComprehendMedicalAsyncJobProperties
   */
  readonly comprehendMedicalAsyncJobProperties?: ComprehendMedicalComprehendMedicalAsyncJobProperties;

}

/**
 * @schema ComprehendMedicalDescribePhiDetectionJobRequest
 */
export interface ComprehendMedicalDescribePhiDetectionJobRequest {
  /**
   * @schema ComprehendMedicalDescribePhiDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema ComprehendMedicalDescribePhiDetectionJobResponse
 */
export interface ComprehendMedicalDescribePhiDetectionJobResponse {
  /**
   * @schema ComprehendMedicalDescribePhiDetectionJobResponse#ComprehendMedicalAsyncJobProperties
   */
  readonly comprehendMedicalAsyncJobProperties?: ComprehendMedicalComprehendMedicalAsyncJobProperties;

}

/**
 * @schema ComprehendMedicalDescribeRxNormInferenceJobRequest
 */
export interface ComprehendMedicalDescribeRxNormInferenceJobRequest {
  /**
   * @schema ComprehendMedicalDescribeRxNormInferenceJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema ComprehendMedicalDescribeRxNormInferenceJobResponse
 */
export interface ComprehendMedicalDescribeRxNormInferenceJobResponse {
  /**
   * @schema ComprehendMedicalDescribeRxNormInferenceJobResponse#ComprehendMedicalAsyncJobProperties
   */
  readonly comprehendMedicalAsyncJobProperties?: ComprehendMedicalComprehendMedicalAsyncJobProperties;

}

/**
 * @schema ComprehendMedicalDetectEntitiesRequest
 */
export interface ComprehendMedicalDetectEntitiesRequest {
  /**
   * @schema ComprehendMedicalDetectEntitiesRequest#Text
   */
  readonly text: string;

}

/**
 * @schema ComprehendMedicalDetectEntitiesResponse
 */
export interface ComprehendMedicalDetectEntitiesResponse {
  /**
   * @schema ComprehendMedicalDetectEntitiesResponse#Entities
   */
  readonly entities: ComprehendMedicalEntity[];

  /**
   * @schema ComprehendMedicalDetectEntitiesResponse#UnmappedAttributes
   */
  readonly unmappedAttributes?: ComprehendMedicalUnmappedAttribute[];

  /**
   * @schema ComprehendMedicalDetectEntitiesResponse#PaginationToken
   */
  readonly paginationToken?: string;

  /**
   * @schema ComprehendMedicalDetectEntitiesResponse#ModelVersion
   */
  readonly modelVersion: string;

}

/**
 * @schema ComprehendMedicalDetectEntitiesV2Request
 */
export interface ComprehendMedicalDetectEntitiesV2Request {
  /**
   * @schema ComprehendMedicalDetectEntitiesV2Request#Text
   */
  readonly text: string;

}

/**
 * @schema ComprehendMedicalDetectEntitiesV2Response
 */
export interface ComprehendMedicalDetectEntitiesV2Response {
  /**
   * @schema ComprehendMedicalDetectEntitiesV2Response#Entities
   */
  readonly entities: ComprehendMedicalEntity[];

  /**
   * @schema ComprehendMedicalDetectEntitiesV2Response#UnmappedAttributes
   */
  readonly unmappedAttributes?: ComprehendMedicalUnmappedAttribute[];

  /**
   * @schema ComprehendMedicalDetectEntitiesV2Response#PaginationToken
   */
  readonly paginationToken?: string;

  /**
   * @schema ComprehendMedicalDetectEntitiesV2Response#ModelVersion
   */
  readonly modelVersion: string;

}

/**
 * @schema ComprehendMedicalDetectPhiRequest
 */
export interface ComprehendMedicalDetectPhiRequest {
  /**
   * @schema ComprehendMedicalDetectPhiRequest#Text
   */
  readonly text: string;

}

/**
 * @schema ComprehendMedicalDetectPhiResponse
 */
export interface ComprehendMedicalDetectPhiResponse {
  /**
   * @schema ComprehendMedicalDetectPhiResponse#Entities
   */
  readonly entities: ComprehendMedicalEntity[];

  /**
   * @schema ComprehendMedicalDetectPhiResponse#PaginationToken
   */
  readonly paginationToken?: string;

  /**
   * @schema ComprehendMedicalDetectPhiResponse#ModelVersion
   */
  readonly modelVersion: string;

}

/**
 * @schema ComprehendMedicalInferIcd10CmRequest
 */
export interface ComprehendMedicalInferIcd10CmRequest {
  /**
   * @schema ComprehendMedicalInferIcd10CmRequest#Text
   */
  readonly text: string;

}

/**
 * @schema ComprehendMedicalInferIcd10CmResponse
 */
export interface ComprehendMedicalInferIcd10CmResponse {
  /**
   * @schema ComprehendMedicalInferIcd10CmResponse#Entities
   */
  readonly entities: ComprehendMedicalIcd10CmEntity[];

  /**
   * @schema ComprehendMedicalInferIcd10CmResponse#PaginationToken
   */
  readonly paginationToken?: string;

  /**
   * @schema ComprehendMedicalInferIcd10CmResponse#ModelVersion
   */
  readonly modelVersion?: string;

}

/**
 * @schema ComprehendMedicalInferRxNormRequest
 */
export interface ComprehendMedicalInferRxNormRequest {
  /**
   * @schema ComprehendMedicalInferRxNormRequest#Text
   */
  readonly text: string;

}

/**
 * @schema ComprehendMedicalInferRxNormResponse
 */
export interface ComprehendMedicalInferRxNormResponse {
  /**
   * @schema ComprehendMedicalInferRxNormResponse#Entities
   */
  readonly entities: ComprehendMedicalRxNormEntity[];

  /**
   * @schema ComprehendMedicalInferRxNormResponse#PaginationToken
   */
  readonly paginationToken?: string;

  /**
   * @schema ComprehendMedicalInferRxNormResponse#ModelVersion
   */
  readonly modelVersion?: string;

}

/**
 * @schema ComprehendMedicalListEntitiesDetectionV2JobsRequest
 */
export interface ComprehendMedicalListEntitiesDetectionV2JobsRequest {
  /**
   * @schema ComprehendMedicalListEntitiesDetectionV2JobsRequest#Filter
   */
  readonly filter?: ComprehendMedicalComprehendMedicalAsyncJobFilter;

  /**
   * @schema ComprehendMedicalListEntitiesDetectionV2JobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendMedicalListEntitiesDetectionV2JobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ComprehendMedicalListEntitiesDetectionV2JobsResponse
 */
export interface ComprehendMedicalListEntitiesDetectionV2JobsResponse {
  /**
   * @schema ComprehendMedicalListEntitiesDetectionV2JobsResponse#ComprehendMedicalAsyncJobPropertiesList
   */
  readonly comprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalComprehendMedicalAsyncJobProperties[];

  /**
   * @schema ComprehendMedicalListEntitiesDetectionV2JobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ComprehendMedicalListIcd10CmInferenceJobsRequest
 */
export interface ComprehendMedicalListIcd10CmInferenceJobsRequest {
  /**
   * @schema ComprehendMedicalListIcd10CmInferenceJobsRequest#Filter
   */
  readonly filter?: ComprehendMedicalComprehendMedicalAsyncJobFilter;

  /**
   * @schema ComprehendMedicalListIcd10CmInferenceJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendMedicalListIcd10CmInferenceJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ComprehendMedicalListIcd10CmInferenceJobsResponse
 */
export interface ComprehendMedicalListIcd10CmInferenceJobsResponse {
  /**
   * @schema ComprehendMedicalListIcd10CmInferenceJobsResponse#ComprehendMedicalAsyncJobPropertiesList
   */
  readonly comprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalComprehendMedicalAsyncJobProperties[];

  /**
   * @schema ComprehendMedicalListIcd10CmInferenceJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ComprehendMedicalListPhiDetectionJobsRequest
 */
export interface ComprehendMedicalListPhiDetectionJobsRequest {
  /**
   * @schema ComprehendMedicalListPhiDetectionJobsRequest#Filter
   */
  readonly filter?: ComprehendMedicalComprehendMedicalAsyncJobFilter;

  /**
   * @schema ComprehendMedicalListPhiDetectionJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendMedicalListPhiDetectionJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ComprehendMedicalListPhiDetectionJobsResponse
 */
export interface ComprehendMedicalListPhiDetectionJobsResponse {
  /**
   * @schema ComprehendMedicalListPhiDetectionJobsResponse#ComprehendMedicalAsyncJobPropertiesList
   */
  readonly comprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalComprehendMedicalAsyncJobProperties[];

  /**
   * @schema ComprehendMedicalListPhiDetectionJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ComprehendMedicalListRxNormInferenceJobsRequest
 */
export interface ComprehendMedicalListRxNormInferenceJobsRequest {
  /**
   * @schema ComprehendMedicalListRxNormInferenceJobsRequest#Filter
   */
  readonly filter?: ComprehendMedicalComprehendMedicalAsyncJobFilter;

  /**
   * @schema ComprehendMedicalListRxNormInferenceJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendMedicalListRxNormInferenceJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ComprehendMedicalListRxNormInferenceJobsResponse
 */
export interface ComprehendMedicalListRxNormInferenceJobsResponse {
  /**
   * @schema ComprehendMedicalListRxNormInferenceJobsResponse#ComprehendMedicalAsyncJobPropertiesList
   */
  readonly comprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalComprehendMedicalAsyncJobProperties[];

  /**
   * @schema ComprehendMedicalListRxNormInferenceJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ComprehendMedicalStartEntitiesDetectionV2JobRequest
 */
export interface ComprehendMedicalStartEntitiesDetectionV2JobRequest {
  /**
   * @schema ComprehendMedicalStartEntitiesDetectionV2JobRequest#InputDataConfig
   */
  readonly inputDataConfig: ComprehendMedicalInputDataConfig;

  /**
   * @schema ComprehendMedicalStartEntitiesDetectionV2JobRequest#OutputDataConfig
   */
  readonly outputDataConfig: ComprehendMedicalOutputDataConfig;

  /**
   * @schema ComprehendMedicalStartEntitiesDetectionV2JobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema ComprehendMedicalStartEntitiesDetectionV2JobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendMedicalStartEntitiesDetectionV2JobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ComprehendMedicalStartEntitiesDetectionV2JobRequest#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema ComprehendMedicalStartEntitiesDetectionV2JobRequest#LanguageCode
   */
  readonly languageCode: string;

}

/**
 * @schema ComprehendMedicalStartEntitiesDetectionV2JobResponse
 */
export interface ComprehendMedicalStartEntitiesDetectionV2JobResponse {
  /**
   * @schema ComprehendMedicalStartEntitiesDetectionV2JobResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema ComprehendMedicalStartIcd10CmInferenceJobRequest
 */
export interface ComprehendMedicalStartIcd10CmInferenceJobRequest {
  /**
   * @schema ComprehendMedicalStartIcd10CmInferenceJobRequest#InputDataConfig
   */
  readonly inputDataConfig: ComprehendMedicalInputDataConfig;

  /**
   * @schema ComprehendMedicalStartIcd10CmInferenceJobRequest#OutputDataConfig
   */
  readonly outputDataConfig: ComprehendMedicalOutputDataConfig;

  /**
   * @schema ComprehendMedicalStartIcd10CmInferenceJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema ComprehendMedicalStartIcd10CmInferenceJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendMedicalStartIcd10CmInferenceJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ComprehendMedicalStartIcd10CmInferenceJobRequest#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema ComprehendMedicalStartIcd10CmInferenceJobRequest#LanguageCode
   */
  readonly languageCode: string;

}

/**
 * @schema ComprehendMedicalStartIcd10CmInferenceJobResponse
 */
export interface ComprehendMedicalStartIcd10CmInferenceJobResponse {
  /**
   * @schema ComprehendMedicalStartIcd10CmInferenceJobResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema ComprehendMedicalStartPhiDetectionJobRequest
 */
export interface ComprehendMedicalStartPhiDetectionJobRequest {
  /**
   * @schema ComprehendMedicalStartPhiDetectionJobRequest#InputDataConfig
   */
  readonly inputDataConfig: ComprehendMedicalInputDataConfig;

  /**
   * @schema ComprehendMedicalStartPhiDetectionJobRequest#OutputDataConfig
   */
  readonly outputDataConfig: ComprehendMedicalOutputDataConfig;

  /**
   * @schema ComprehendMedicalStartPhiDetectionJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema ComprehendMedicalStartPhiDetectionJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendMedicalStartPhiDetectionJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ComprehendMedicalStartPhiDetectionJobRequest#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema ComprehendMedicalStartPhiDetectionJobRequest#LanguageCode
   */
  readonly languageCode: string;

}

/**
 * @schema ComprehendMedicalStartPhiDetectionJobResponse
 */
export interface ComprehendMedicalStartPhiDetectionJobResponse {
  /**
   * @schema ComprehendMedicalStartPhiDetectionJobResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema ComprehendMedicalStartRxNormInferenceJobRequest
 */
export interface ComprehendMedicalStartRxNormInferenceJobRequest {
  /**
   * @schema ComprehendMedicalStartRxNormInferenceJobRequest#InputDataConfig
   */
  readonly inputDataConfig: ComprehendMedicalInputDataConfig;

  /**
   * @schema ComprehendMedicalStartRxNormInferenceJobRequest#OutputDataConfig
   */
  readonly outputDataConfig: ComprehendMedicalOutputDataConfig;

  /**
   * @schema ComprehendMedicalStartRxNormInferenceJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema ComprehendMedicalStartRxNormInferenceJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendMedicalStartRxNormInferenceJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ComprehendMedicalStartRxNormInferenceJobRequest#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema ComprehendMedicalStartRxNormInferenceJobRequest#LanguageCode
   */
  readonly languageCode: string;

}

/**
 * @schema ComprehendMedicalStartRxNormInferenceJobResponse
 */
export interface ComprehendMedicalStartRxNormInferenceJobResponse {
  /**
   * @schema ComprehendMedicalStartRxNormInferenceJobResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema ComprehendMedicalStopEntitiesDetectionV2JobRequest
 */
export interface ComprehendMedicalStopEntitiesDetectionV2JobRequest {
  /**
   * @schema ComprehendMedicalStopEntitiesDetectionV2JobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema ComprehendMedicalStopEntitiesDetectionV2JobResponse
 */
export interface ComprehendMedicalStopEntitiesDetectionV2JobResponse {
  /**
   * @schema ComprehendMedicalStopEntitiesDetectionV2JobResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema ComprehendMedicalStopIcd10CmInferenceJobRequest
 */
export interface ComprehendMedicalStopIcd10CmInferenceJobRequest {
  /**
   * @schema ComprehendMedicalStopIcd10CmInferenceJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema ComprehendMedicalStopIcd10CmInferenceJobResponse
 */
export interface ComprehendMedicalStopIcd10CmInferenceJobResponse {
  /**
   * @schema ComprehendMedicalStopIcd10CmInferenceJobResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema ComprehendMedicalStopPhiDetectionJobRequest
 */
export interface ComprehendMedicalStopPhiDetectionJobRequest {
  /**
   * @schema ComprehendMedicalStopPhiDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema ComprehendMedicalStopPhiDetectionJobResponse
 */
export interface ComprehendMedicalStopPhiDetectionJobResponse {
  /**
   * @schema ComprehendMedicalStopPhiDetectionJobResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema ComprehendMedicalStopRxNormInferenceJobRequest
 */
export interface ComprehendMedicalStopRxNormInferenceJobRequest {
  /**
   * @schema ComprehendMedicalStopRxNormInferenceJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema ComprehendMedicalStopRxNormInferenceJobResponse
 */
export interface ComprehendMedicalStopRxNormInferenceJobResponse {
  /**
   * @schema ComprehendMedicalStopRxNormInferenceJobResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties
 */
export interface ComprehendMedicalComprehendMedicalAsyncJobProperties {
  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties#ExpirationTime
   */
  readonly expirationTime?: string;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendMedicalInputDataConfig;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendMedicalOutputDataConfig;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties#ManifestFilePath
   */
  readonly manifestFilePath?: string;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobProperties#ModelVersion
   */
  readonly modelVersion?: string;

}

/**
 * @schema ComprehendMedicalEntity
 */
export interface ComprehendMedicalEntity {
  /**
   * @schema ComprehendMedicalEntity#Id
   */
  readonly id?: number;

  /**
   * @schema ComprehendMedicalEntity#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema ComprehendMedicalEntity#EndOffset
   */
  readonly endOffset?: number;

  /**
   * @schema ComprehendMedicalEntity#Score
   */
  readonly score?: number;

  /**
   * @schema ComprehendMedicalEntity#Text
   */
  readonly text?: string;

  /**
   * @schema ComprehendMedicalEntity#Category
   */
  readonly category?: string;

  /**
   * @schema ComprehendMedicalEntity#Type
   */
  readonly type?: string;

  /**
   * @schema ComprehendMedicalEntity#Traits
   */
  readonly traits?: ComprehendMedicalTrait[];

  /**
   * @schema ComprehendMedicalEntity#Attributes
   */
  readonly attributes?: ComprehendMedicalAttribute[];

}

/**
 * @schema ComprehendMedicalUnmappedAttribute
 */
export interface ComprehendMedicalUnmappedAttribute {
  /**
   * @schema ComprehendMedicalUnmappedAttribute#Type
   */
  readonly type?: string;

  /**
   * @schema ComprehendMedicalUnmappedAttribute#Attribute
   */
  readonly attribute?: ComprehendMedicalAttribute;

}

/**
 * @schema ComprehendMedicalIcd10CmEntity
 */
export interface ComprehendMedicalIcd10CmEntity {
  /**
   * @schema ComprehendMedicalIcd10CmEntity#Id
   */
  readonly id?: number;

  /**
   * @schema ComprehendMedicalIcd10CmEntity#Text
   */
  readonly text?: string;

  /**
   * @schema ComprehendMedicalIcd10CmEntity#Category
   */
  readonly category?: string;

  /**
   * @schema ComprehendMedicalIcd10CmEntity#Type
   */
  readonly type?: string;

  /**
   * @schema ComprehendMedicalIcd10CmEntity#Score
   */
  readonly score?: number;

  /**
   * @schema ComprehendMedicalIcd10CmEntity#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema ComprehendMedicalIcd10CmEntity#EndOffset
   */
  readonly endOffset?: number;

  /**
   * @schema ComprehendMedicalIcd10CmEntity#Attributes
   */
  readonly attributes?: ComprehendMedicalIcd10CmAttribute[];

  /**
   * @schema ComprehendMedicalIcd10CmEntity#Traits
   */
  readonly traits?: ComprehendMedicalIcd10CmTrait[];

  /**
   * @schema ComprehendMedicalIcd10CmEntity#ICD10CMConcepts
   */
  readonly icd10CmConcepts?: ComprehendMedicalIcd10CmConcept[];

}

/**
 * @schema ComprehendMedicalRxNormEntity
 */
export interface ComprehendMedicalRxNormEntity {
  /**
   * @schema ComprehendMedicalRxNormEntity#Id
   */
  readonly id?: number;

  /**
   * @schema ComprehendMedicalRxNormEntity#Text
   */
  readonly text?: string;

  /**
   * @schema ComprehendMedicalRxNormEntity#Category
   */
  readonly category?: string;

  /**
   * @schema ComprehendMedicalRxNormEntity#Type
   */
  readonly type?: string;

  /**
   * @schema ComprehendMedicalRxNormEntity#Score
   */
  readonly score?: number;

  /**
   * @schema ComprehendMedicalRxNormEntity#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema ComprehendMedicalRxNormEntity#EndOffset
   */
  readonly endOffset?: number;

  /**
   * @schema ComprehendMedicalRxNormEntity#Attributes
   */
  readonly attributes?: ComprehendMedicalRxNormAttribute[];

  /**
   * @schema ComprehendMedicalRxNormEntity#Traits
   */
  readonly traits?: ComprehendMedicalRxNormTrait[];

  /**
   * @schema ComprehendMedicalRxNormEntity#RxNormConcepts
   */
  readonly rxNormConcepts?: ComprehendMedicalRxNormConcept[];

}

/**
 * @schema ComprehendMedicalComprehendMedicalAsyncJobFilter
 */
export interface ComprehendMedicalComprehendMedicalAsyncJobFilter {
  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema ComprehendMedicalComprehendMedicalAsyncJobFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * @schema ComprehendMedicalInputDataConfig
 */
export interface ComprehendMedicalInputDataConfig {
  /**
   * @schema ComprehendMedicalInputDataConfig#S3Bucket
   */
  readonly s3Bucket: string;

  /**
   * @schema ComprehendMedicalInputDataConfig#S3Key
   */
  readonly s3Key?: string;

}

/**
 * @schema ComprehendMedicalOutputDataConfig
 */
export interface ComprehendMedicalOutputDataConfig {
  /**
   * @schema ComprehendMedicalOutputDataConfig#S3Bucket
   */
  readonly s3Bucket: string;

  /**
   * @schema ComprehendMedicalOutputDataConfig#S3Key
   */
  readonly s3Key?: string;

}

/**
 * @schema ComprehendMedicalTrait
 */
export interface ComprehendMedicalTrait {
  /**
   * @schema ComprehendMedicalTrait#Name
   */
  readonly name?: string;

  /**
   * @schema ComprehendMedicalTrait#Score
   */
  readonly score?: number;

}

/**
 * @schema ComprehendMedicalAttribute
 */
export interface ComprehendMedicalAttribute {
  /**
   * @schema ComprehendMedicalAttribute#Type
   */
  readonly type?: string;

  /**
   * @schema ComprehendMedicalAttribute#Score
   */
  readonly score?: number;

  /**
   * @schema ComprehendMedicalAttribute#RelationshipScore
   */
  readonly relationshipScore?: number;

  /**
   * @schema ComprehendMedicalAttribute#RelationshipType
   */
  readonly relationshipType?: string;

  /**
   * @schema ComprehendMedicalAttribute#Id
   */
  readonly id?: number;

  /**
   * @schema ComprehendMedicalAttribute#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema ComprehendMedicalAttribute#EndOffset
   */
  readonly endOffset?: number;

  /**
   * @schema ComprehendMedicalAttribute#Text
   */
  readonly text?: string;

  /**
   * @schema ComprehendMedicalAttribute#Category
   */
  readonly category?: string;

  /**
   * @schema ComprehendMedicalAttribute#Traits
   */
  readonly traits?: ComprehendMedicalTrait[];

}

/**
 * @schema ComprehendMedicalIcd10CmAttribute
 */
export interface ComprehendMedicalIcd10CmAttribute {
  /**
   * @schema ComprehendMedicalIcd10CmAttribute#Type
   */
  readonly type?: string;

  /**
   * @schema ComprehendMedicalIcd10CmAttribute#Score
   */
  readonly score?: number;

  /**
   * @schema ComprehendMedicalIcd10CmAttribute#RelationshipScore
   */
  readonly relationshipScore?: number;

  /**
   * @schema ComprehendMedicalIcd10CmAttribute#Id
   */
  readonly id?: number;

  /**
   * @schema ComprehendMedicalIcd10CmAttribute#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema ComprehendMedicalIcd10CmAttribute#EndOffset
   */
  readonly endOffset?: number;

  /**
   * @schema ComprehendMedicalIcd10CmAttribute#Text
   */
  readonly text?: string;

  /**
   * @schema ComprehendMedicalIcd10CmAttribute#Traits
   */
  readonly traits?: ComprehendMedicalIcd10CmTrait[];

}

/**
 * @schema ComprehendMedicalIcd10CmTrait
 */
export interface ComprehendMedicalIcd10CmTrait {
  /**
   * @schema ComprehendMedicalIcd10CmTrait#Name
   */
  readonly name?: string;

  /**
   * @schema ComprehendMedicalIcd10CmTrait#Score
   */
  readonly score?: number;

}

/**
 * @schema ComprehendMedicalIcd10CmConcept
 */
export interface ComprehendMedicalIcd10CmConcept {
  /**
   * @schema ComprehendMedicalIcd10CmConcept#Description
   */
  readonly description?: string;

  /**
   * @schema ComprehendMedicalIcd10CmConcept#Code
   */
  readonly code?: string;

  /**
   * @schema ComprehendMedicalIcd10CmConcept#Score
   */
  readonly score?: number;

}

/**
 * @schema ComprehendMedicalRxNormAttribute
 */
export interface ComprehendMedicalRxNormAttribute {
  /**
   * @schema ComprehendMedicalRxNormAttribute#Type
   */
  readonly type?: string;

  /**
   * @schema ComprehendMedicalRxNormAttribute#Score
   */
  readonly score?: number;

  /**
   * @schema ComprehendMedicalRxNormAttribute#RelationshipScore
   */
  readonly relationshipScore?: number;

  /**
   * @schema ComprehendMedicalRxNormAttribute#Id
   */
  readonly id?: number;

  /**
   * @schema ComprehendMedicalRxNormAttribute#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema ComprehendMedicalRxNormAttribute#EndOffset
   */
  readonly endOffset?: number;

  /**
   * @schema ComprehendMedicalRxNormAttribute#Text
   */
  readonly text?: string;

  /**
   * @schema ComprehendMedicalRxNormAttribute#Traits
   */
  readonly traits?: ComprehendMedicalRxNormTrait[];

}

/**
 * @schema ComprehendMedicalRxNormTrait
 */
export interface ComprehendMedicalRxNormTrait {
  /**
   * @schema ComprehendMedicalRxNormTrait#Name
   */
  readonly name?: string;

  /**
   * @schema ComprehendMedicalRxNormTrait#Score
   */
  readonly score?: number;

}

/**
 * @schema ComprehendMedicalRxNormConcept
 */
export interface ComprehendMedicalRxNormConcept {
  /**
   * @schema ComprehendMedicalRxNormConcept#Description
   */
  readonly description?: string;

  /**
   * @schema ComprehendMedicalRxNormConcept#Code
   */
  readonly code?: string;

  /**
   * @schema ComprehendMedicalRxNormConcept#Score
   */
  readonly score?: number;

}
