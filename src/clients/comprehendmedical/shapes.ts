/**
 * @schema DescribeEntitiesDetectionV2JobRequest
 */
export interface DescribeEntitiesDetectionV2JobRequest {
  /**
   * @schema DescribeEntitiesDetectionV2JobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema DescribeEntitiesDetectionV2JobResponse
 */
export interface DescribeEntitiesDetectionV2JobResponse {
  /**
   * @schema DescribeEntitiesDetectionV2JobResponse#ComprehendMedicalAsyncJobProperties
   */
  readonly comprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;

}

/**
 * @schema DescribeIcd10CmInferenceJobRequest
 */
export interface DescribeIcd10CmInferenceJobRequest {
  /**
   * @schema DescribeIcd10CmInferenceJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema DescribeIcd10CmInferenceJobResponse
 */
export interface DescribeIcd10CmInferenceJobResponse {
  /**
   * @schema DescribeIcd10CmInferenceJobResponse#ComprehendMedicalAsyncJobProperties
   */
  readonly comprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;

}

/**
 * @schema DescribePhiDetectionJobRequest
 */
export interface DescribePhiDetectionJobRequest {
  /**
   * @schema DescribePhiDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema DescribePhiDetectionJobResponse
 */
export interface DescribePhiDetectionJobResponse {
  /**
   * @schema DescribePhiDetectionJobResponse#ComprehendMedicalAsyncJobProperties
   */
  readonly comprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;

}

/**
 * @schema DescribeRxNormInferenceJobRequest
 */
export interface DescribeRxNormInferenceJobRequest {
  /**
   * @schema DescribeRxNormInferenceJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema DescribeRxNormInferenceJobResponse
 */
export interface DescribeRxNormInferenceJobResponse {
  /**
   * @schema DescribeRxNormInferenceJobResponse#ComprehendMedicalAsyncJobProperties
   */
  readonly comprehendMedicalAsyncJobProperties?: ComprehendMedicalAsyncJobProperties;

}

/**
 * @schema DetectEntitiesRequest
 */
export interface DetectEntitiesRequest {
  /**
   * @schema DetectEntitiesRequest#Text
   */
  readonly text: string;

}

/**
 * @schema DetectEntitiesResponse
 */
export interface DetectEntitiesResponse {
  /**
   * @schema DetectEntitiesResponse#Entities
   */
  readonly entities: Entity[];

  /**
   * @schema DetectEntitiesResponse#UnmappedAttributes
   */
  readonly unmappedAttributes?: UnmappedAttribute[];

  /**
   * @schema DetectEntitiesResponse#PaginationToken
   */
  readonly paginationToken?: string;

  /**
   * @schema DetectEntitiesResponse#ModelVersion
   */
  readonly modelVersion: string;

}

/**
 * @schema DetectEntitiesV2Request
 */
export interface DetectEntitiesV2Request {
  /**
   * @schema DetectEntitiesV2Request#Text
   */
  readonly text: string;

}

/**
 * @schema DetectEntitiesV2Response
 */
export interface DetectEntitiesV2Response {
  /**
   * @schema DetectEntitiesV2Response#Entities
   */
  readonly entities: Entity[];

  /**
   * @schema DetectEntitiesV2Response#UnmappedAttributes
   */
  readonly unmappedAttributes?: UnmappedAttribute[];

  /**
   * @schema DetectEntitiesV2Response#PaginationToken
   */
  readonly paginationToken?: string;

  /**
   * @schema DetectEntitiesV2Response#ModelVersion
   */
  readonly modelVersion: string;

}

/**
 * @schema DetectPhiRequest
 */
export interface DetectPhiRequest {
  /**
   * @schema DetectPhiRequest#Text
   */
  readonly text: string;

}

/**
 * @schema DetectPhiResponse
 */
export interface DetectPhiResponse {
  /**
   * @schema DetectPhiResponse#Entities
   */
  readonly entities: Entity[];

  /**
   * @schema DetectPhiResponse#PaginationToken
   */
  readonly paginationToken?: string;

  /**
   * @schema DetectPhiResponse#ModelVersion
   */
  readonly modelVersion: string;

}

/**
 * @schema InferIcd10CmRequest
 */
export interface InferIcd10CmRequest {
  /**
   * @schema InferIcd10CmRequest#Text
   */
  readonly text: string;

}

/**
 * @schema InferIcd10CmResponse
 */
export interface InferIcd10CmResponse {
  /**
   * @schema InferIcd10CmResponse#Entities
   */
  readonly entities: Icd10CmEntity[];

  /**
   * @schema InferIcd10CmResponse#PaginationToken
   */
  readonly paginationToken?: string;

  /**
   * @schema InferIcd10CmResponse#ModelVersion
   */
  readonly modelVersion?: string;

}

/**
 * @schema InferRxNormRequest
 */
export interface InferRxNormRequest {
  /**
   * @schema InferRxNormRequest#Text
   */
  readonly text: string;

}

/**
 * @schema InferRxNormResponse
 */
export interface InferRxNormResponse {
  /**
   * @schema InferRxNormResponse#Entities
   */
  readonly entities: RxNormEntity[];

  /**
   * @schema InferRxNormResponse#PaginationToken
   */
  readonly paginationToken?: string;

  /**
   * @schema InferRxNormResponse#ModelVersion
   */
  readonly modelVersion?: string;

}

/**
 * @schema ListEntitiesDetectionV2JobsRequest
 */
export interface ListEntitiesDetectionV2JobsRequest {
  /**
   * @schema ListEntitiesDetectionV2JobsRequest#Filter
   */
  readonly filter?: ComprehendMedicalAsyncJobFilter;

  /**
   * @schema ListEntitiesDetectionV2JobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListEntitiesDetectionV2JobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListEntitiesDetectionV2JobsResponse
 */
export interface ListEntitiesDetectionV2JobsResponse {
  /**
   * @schema ListEntitiesDetectionV2JobsResponse#ComprehendMedicalAsyncJobPropertiesList
   */
  readonly comprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[];

  /**
   * @schema ListEntitiesDetectionV2JobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListIcd10CmInferenceJobsRequest
 */
export interface ListIcd10CmInferenceJobsRequest {
  /**
   * @schema ListIcd10CmInferenceJobsRequest#Filter
   */
  readonly filter?: ComprehendMedicalAsyncJobFilter;

  /**
   * @schema ListIcd10CmInferenceJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListIcd10CmInferenceJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListIcd10CmInferenceJobsResponse
 */
export interface ListIcd10CmInferenceJobsResponse {
  /**
   * @schema ListIcd10CmInferenceJobsResponse#ComprehendMedicalAsyncJobPropertiesList
   */
  readonly comprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[];

  /**
   * @schema ListIcd10CmInferenceJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListPhiDetectionJobsRequest
 */
export interface ListPhiDetectionJobsRequest {
  /**
   * @schema ListPhiDetectionJobsRequest#Filter
   */
  readonly filter?: ComprehendMedicalAsyncJobFilter;

  /**
   * @schema ListPhiDetectionJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListPhiDetectionJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListPhiDetectionJobsResponse
 */
export interface ListPhiDetectionJobsResponse {
  /**
   * @schema ListPhiDetectionJobsResponse#ComprehendMedicalAsyncJobPropertiesList
   */
  readonly comprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[];

  /**
   * @schema ListPhiDetectionJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListRxNormInferenceJobsRequest
 */
export interface ListRxNormInferenceJobsRequest {
  /**
   * @schema ListRxNormInferenceJobsRequest#Filter
   */
  readonly filter?: ComprehendMedicalAsyncJobFilter;

  /**
   * @schema ListRxNormInferenceJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListRxNormInferenceJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListRxNormInferenceJobsResponse
 */
export interface ListRxNormInferenceJobsResponse {
  /**
   * @schema ListRxNormInferenceJobsResponse#ComprehendMedicalAsyncJobPropertiesList
   */
  readonly comprehendMedicalAsyncJobPropertiesList?: ComprehendMedicalAsyncJobProperties[];

  /**
   * @schema ListRxNormInferenceJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema StartEntitiesDetectionV2JobRequest
 */
export interface StartEntitiesDetectionV2JobRequest {
  /**
   * @schema StartEntitiesDetectionV2JobRequest#InputDataConfig
   */
  readonly inputDataConfig: InputDataConfig;

  /**
   * @schema StartEntitiesDetectionV2JobRequest#OutputDataConfig
   */
  readonly outputDataConfig: OutputDataConfig;

  /**
   * @schema StartEntitiesDetectionV2JobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema StartEntitiesDetectionV2JobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema StartEntitiesDetectionV2JobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema StartEntitiesDetectionV2JobRequest#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema StartEntitiesDetectionV2JobRequest#LanguageCode
   */
  readonly languageCode: string;

}

/**
 * @schema StartEntitiesDetectionV2JobResponse
 */
export interface StartEntitiesDetectionV2JobResponse {
  /**
   * @schema StartEntitiesDetectionV2JobResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema StartIcd10CmInferenceJobRequest
 */
export interface StartIcd10CmInferenceJobRequest {
  /**
   * @schema StartIcd10CmInferenceJobRequest#InputDataConfig
   */
  readonly inputDataConfig: InputDataConfig;

  /**
   * @schema StartIcd10CmInferenceJobRequest#OutputDataConfig
   */
  readonly outputDataConfig: OutputDataConfig;

  /**
   * @schema StartIcd10CmInferenceJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema StartIcd10CmInferenceJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema StartIcd10CmInferenceJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema StartIcd10CmInferenceJobRequest#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema StartIcd10CmInferenceJobRequest#LanguageCode
   */
  readonly languageCode: string;

}

/**
 * @schema StartIcd10CmInferenceJobResponse
 */
export interface StartIcd10CmInferenceJobResponse {
  /**
   * @schema StartIcd10CmInferenceJobResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema StartPhiDetectionJobRequest
 */
export interface StartPhiDetectionJobRequest {
  /**
   * @schema StartPhiDetectionJobRequest#InputDataConfig
   */
  readonly inputDataConfig: InputDataConfig;

  /**
   * @schema StartPhiDetectionJobRequest#OutputDataConfig
   */
  readonly outputDataConfig: OutputDataConfig;

  /**
   * @schema StartPhiDetectionJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema StartPhiDetectionJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema StartPhiDetectionJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema StartPhiDetectionJobRequest#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema StartPhiDetectionJobRequest#LanguageCode
   */
  readonly languageCode: string;

}

/**
 * @schema StartPhiDetectionJobResponse
 */
export interface StartPhiDetectionJobResponse {
  /**
   * @schema StartPhiDetectionJobResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema StartRxNormInferenceJobRequest
 */
export interface StartRxNormInferenceJobRequest {
  /**
   * @schema StartRxNormInferenceJobRequest#InputDataConfig
   */
  readonly inputDataConfig: InputDataConfig;

  /**
   * @schema StartRxNormInferenceJobRequest#OutputDataConfig
   */
  readonly outputDataConfig: OutputDataConfig;

  /**
   * @schema StartRxNormInferenceJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema StartRxNormInferenceJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema StartRxNormInferenceJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema StartRxNormInferenceJobRequest#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema StartRxNormInferenceJobRequest#LanguageCode
   */
  readonly languageCode: string;

}

/**
 * @schema StartRxNormInferenceJobResponse
 */
export interface StartRxNormInferenceJobResponse {
  /**
   * @schema StartRxNormInferenceJobResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema StopEntitiesDetectionV2JobRequest
 */
export interface StopEntitiesDetectionV2JobRequest {
  /**
   * @schema StopEntitiesDetectionV2JobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema StopEntitiesDetectionV2JobResponse
 */
export interface StopEntitiesDetectionV2JobResponse {
  /**
   * @schema StopEntitiesDetectionV2JobResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema StopIcd10CmInferenceJobRequest
 */
export interface StopIcd10CmInferenceJobRequest {
  /**
   * @schema StopIcd10CmInferenceJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema StopIcd10CmInferenceJobResponse
 */
export interface StopIcd10CmInferenceJobResponse {
  /**
   * @schema StopIcd10CmInferenceJobResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema StopPhiDetectionJobRequest
 */
export interface StopPhiDetectionJobRequest {
  /**
   * @schema StopPhiDetectionJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema StopPhiDetectionJobResponse
 */
export interface StopPhiDetectionJobResponse {
  /**
   * @schema StopPhiDetectionJobResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema StopRxNormInferenceJobRequest
 */
export interface StopRxNormInferenceJobRequest {
  /**
   * @schema StopRxNormInferenceJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema StopRxNormInferenceJobResponse
 */
export interface StopRxNormInferenceJobResponse {
  /**
   * @schema StopRxNormInferenceJobResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema ComprehendMedicalAsyncJobProperties
 */
export interface ComprehendMedicalAsyncJobProperties {
  /**
   * @schema ComprehendMedicalAsyncJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendMedicalAsyncJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendMedicalAsyncJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendMedicalAsyncJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema ComprehendMedicalAsyncJobProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema ComprehendMedicalAsyncJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ComprehendMedicalAsyncJobProperties#ExpirationTime
   */
  readonly expirationTime?: string;

  /**
   * @schema ComprehendMedicalAsyncJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: InputDataConfig;

  /**
   * @schema ComprehendMedicalAsyncJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: OutputDataConfig;

  /**
   * @schema ComprehendMedicalAsyncJobProperties#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ComprehendMedicalAsyncJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendMedicalAsyncJobProperties#ManifestFilePath
   */
  readonly manifestFilePath?: string;

  /**
   * @schema ComprehendMedicalAsyncJobProperties#KMSKey
   */
  readonly kmsKey?: string;

  /**
   * @schema ComprehendMedicalAsyncJobProperties#ModelVersion
   */
  readonly modelVersion?: string;

}

/**
 * @schema Entity
 */
export interface Entity {
  /**
   * @schema Entity#Id
   */
  readonly id?: number;

  /**
   * @schema Entity#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema Entity#EndOffset
   */
  readonly endOffset?: number;

  /**
   * @schema Entity#Score
   */
  readonly score?: number;

  /**
   * @schema Entity#Text
   */
  readonly text?: string;

  /**
   * @schema Entity#Category
   */
  readonly category?: string;

  /**
   * @schema Entity#Type
   */
  readonly type?: string;

  /**
   * @schema Entity#Traits
   */
  readonly traits?: Trait[];

  /**
   * @schema Entity#Attributes
   */
  readonly attributes?: Attribute[];

}

/**
 * @schema UnmappedAttribute
 */
export interface UnmappedAttribute {
  /**
   * @schema UnmappedAttribute#Type
   */
  readonly type?: string;

  /**
   * @schema UnmappedAttribute#Attribute
   */
  readonly attribute?: Attribute;

}

/**
 * @schema Icd10CmEntity
 */
export interface Icd10CmEntity {
  /**
   * @schema Icd10CmEntity#Id
   */
  readonly id?: number;

  /**
   * @schema Icd10CmEntity#Text
   */
  readonly text?: string;

  /**
   * @schema Icd10CmEntity#Category
   */
  readonly category?: string;

  /**
   * @schema Icd10CmEntity#Type
   */
  readonly type?: string;

  /**
   * @schema Icd10CmEntity#Score
   */
  readonly score?: number;

  /**
   * @schema Icd10CmEntity#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema Icd10CmEntity#EndOffset
   */
  readonly endOffset?: number;

  /**
   * @schema Icd10CmEntity#Attributes
   */
  readonly attributes?: Icd10CmAttribute[];

  /**
   * @schema Icd10CmEntity#Traits
   */
  readonly traits?: Icd10CmTrait[];

  /**
   * @schema Icd10CmEntity#ICD10CMConcepts
   */
  readonly icd10CmConcepts?: Icd10CmConcept[];

}

/**
 * @schema RxNormEntity
 */
export interface RxNormEntity {
  /**
   * @schema RxNormEntity#Id
   */
  readonly id?: number;

  /**
   * @schema RxNormEntity#Text
   */
  readonly text?: string;

  /**
   * @schema RxNormEntity#Category
   */
  readonly category?: string;

  /**
   * @schema RxNormEntity#Type
   */
  readonly type?: string;

  /**
   * @schema RxNormEntity#Score
   */
  readonly score?: number;

  /**
   * @schema RxNormEntity#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema RxNormEntity#EndOffset
   */
  readonly endOffset?: number;

  /**
   * @schema RxNormEntity#Attributes
   */
  readonly attributes?: RxNormAttribute[];

  /**
   * @schema RxNormEntity#Traits
   */
  readonly traits?: RxNormTrait[];

  /**
   * @schema RxNormEntity#RxNormConcepts
   */
  readonly rxNormConcepts?: RxNormConcept[];

}

/**
 * @schema ComprehendMedicalAsyncJobFilter
 */
export interface ComprehendMedicalAsyncJobFilter {
  /**
   * @schema ComprehendMedicalAsyncJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendMedicalAsyncJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendMedicalAsyncJobFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema ComprehendMedicalAsyncJobFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * @schema InputDataConfig
 */
export interface InputDataConfig {
  /**
   * @schema InputDataConfig#S3Bucket
   */
  readonly s3Bucket: string;

  /**
   * @schema InputDataConfig#S3Key
   */
  readonly s3Key?: string;

}

/**
 * @schema OutputDataConfig
 */
export interface OutputDataConfig {
  /**
   * @schema OutputDataConfig#S3Bucket
   */
  readonly s3Bucket: string;

  /**
   * @schema OutputDataConfig#S3Key
   */
  readonly s3Key?: string;

}

/**
 * @schema Trait
 */
export interface Trait {
  /**
   * @schema Trait#Name
   */
  readonly name?: string;

  /**
   * @schema Trait#Score
   */
  readonly score?: number;

}

/**
 * @schema Attribute
 */
export interface Attribute {
  /**
   * @schema Attribute#Type
   */
  readonly type?: string;

  /**
   * @schema Attribute#Score
   */
  readonly score?: number;

  /**
   * @schema Attribute#RelationshipScore
   */
  readonly relationshipScore?: number;

  /**
   * @schema Attribute#RelationshipType
   */
  readonly relationshipType?: string;

  /**
   * @schema Attribute#Id
   */
  readonly id?: number;

  /**
   * @schema Attribute#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema Attribute#EndOffset
   */
  readonly endOffset?: number;

  /**
   * @schema Attribute#Text
   */
  readonly text?: string;

  /**
   * @schema Attribute#Category
   */
  readonly category?: string;

  /**
   * @schema Attribute#Traits
   */
  readonly traits?: Trait[];

}

/**
 * @schema Icd10CmAttribute
 */
export interface Icd10CmAttribute {
  /**
   * @schema Icd10CmAttribute#Type
   */
  readonly type?: string;

  /**
   * @schema Icd10CmAttribute#Score
   */
  readonly score?: number;

  /**
   * @schema Icd10CmAttribute#RelationshipScore
   */
  readonly relationshipScore?: number;

  /**
   * @schema Icd10CmAttribute#Id
   */
  readonly id?: number;

  /**
   * @schema Icd10CmAttribute#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema Icd10CmAttribute#EndOffset
   */
  readonly endOffset?: number;

  /**
   * @schema Icd10CmAttribute#Text
   */
  readonly text?: string;

  /**
   * @schema Icd10CmAttribute#Traits
   */
  readonly traits?: Icd10CmTrait[];

}

/**
 * @schema Icd10CmTrait
 */
export interface Icd10CmTrait {
  /**
   * @schema Icd10CmTrait#Name
   */
  readonly name?: string;

  /**
   * @schema Icd10CmTrait#Score
   */
  readonly score?: number;

}

/**
 * @schema Icd10CmConcept
 */
export interface Icd10CmConcept {
  /**
   * @schema Icd10CmConcept#Description
   */
  readonly description?: string;

  /**
   * @schema Icd10CmConcept#Code
   */
  readonly code?: string;

  /**
   * @schema Icd10CmConcept#Score
   */
  readonly score?: number;

}

/**
 * @schema RxNormAttribute
 */
export interface RxNormAttribute {
  /**
   * @schema RxNormAttribute#Type
   */
  readonly type?: string;

  /**
   * @schema RxNormAttribute#Score
   */
  readonly score?: number;

  /**
   * @schema RxNormAttribute#RelationshipScore
   */
  readonly relationshipScore?: number;

  /**
   * @schema RxNormAttribute#Id
   */
  readonly id?: number;

  /**
   * @schema RxNormAttribute#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema RxNormAttribute#EndOffset
   */
  readonly endOffset?: number;

  /**
   * @schema RxNormAttribute#Text
   */
  readonly text?: string;

  /**
   * @schema RxNormAttribute#Traits
   */
  readonly traits?: RxNormTrait[];

}

/**
 * @schema RxNormTrait
 */
export interface RxNormTrait {
  /**
   * @schema RxNormTrait#Name
   */
  readonly name?: string;

  /**
   * @schema RxNormTrait#Score
   */
  readonly score?: number;

}

/**
 * @schema RxNormConcept
 */
export interface RxNormConcept {
  /**
   * @schema RxNormConcept#Description
   */
  readonly description?: string;

  /**
   * @schema RxNormConcept#Code
   */
  readonly code?: string;

  /**
   * @schema RxNormConcept#Score
   */
  readonly score?: number;

}
