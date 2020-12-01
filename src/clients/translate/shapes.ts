/**
 * @schema CreateParallelDataRequest
 */
export interface CreateParallelDataRequest {
  /**
   * @schema CreateParallelDataRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateParallelDataRequest#Description
   */
  readonly description?: string;

  /**
   * @schema CreateParallelDataRequest#ParallelDataConfig
   */
  readonly parallelDataConfig: ParallelDataConfig;

  /**
   * @schema CreateParallelDataRequest#EncryptionKey
   */
  readonly encryptionKey?: EncryptionKey;

  /**
   * @schema CreateParallelDataRequest#ClientToken
   */
  readonly clientToken: string;

}

/**
 * @schema CreateParallelDataResponse
 */
export interface CreateParallelDataResponse {
  /**
   * @schema CreateParallelDataResponse#Name
   */
  readonly name?: string;

  /**
   * @schema CreateParallelDataResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema DeleteParallelDataRequest
 */
export interface DeleteParallelDataRequest {
  /**
   * @schema DeleteParallelDataRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteParallelDataResponse
 */
export interface DeleteParallelDataResponse {
  /**
   * @schema DeleteParallelDataResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DeleteParallelDataResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema DeleteTerminologyRequest
 */
export interface DeleteTerminologyRequest {
  /**
   * @schema DeleteTerminologyRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DescribeTextTranslationJobRequest
 */
export interface DescribeTextTranslationJobRequest {
  /**
   * @schema DescribeTextTranslationJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema DescribeTextTranslationJobResponse
 */
export interface DescribeTextTranslationJobResponse {
  /**
   * @schema DescribeTextTranslationJobResponse#TextTranslationJobProperties
   */
  readonly textTranslationJobProperties?: TextTranslationJobProperties;

}

/**
 * @schema GetParallelDataRequest
 */
export interface GetParallelDataRequest {
  /**
   * @schema GetParallelDataRequest#Name
   */
  readonly name: string;

}

/**
 * @schema GetParallelDataResponse
 */
export interface GetParallelDataResponse {
  /**
   * @schema GetParallelDataResponse#ParallelDataProperties
   */
  readonly parallelDataProperties?: ParallelDataProperties;

  /**
   * @schema GetParallelDataResponse#DataLocation
   */
  readonly dataLocation?: ParallelDataDataLocation;

  /**
   * @schema GetParallelDataResponse#AuxiliaryDataLocation
   */
  readonly auxiliaryDataLocation?: ParallelDataDataLocation;

  /**
   * @schema GetParallelDataResponse#LatestUpdateAttemptAuxiliaryDataLocation
   */
  readonly latestUpdateAttemptAuxiliaryDataLocation?: ParallelDataDataLocation;

}

/**
 * @schema GetTerminologyRequest
 */
export interface GetTerminologyRequest {
  /**
   * @schema GetTerminologyRequest#Name
   */
  readonly name: string;

  /**
   * @schema GetTerminologyRequest#TerminologyDataFormat
   */
  readonly terminologyDataFormat: string;

}

/**
 * @schema GetTerminologyResponse
 */
export interface GetTerminologyResponse {
  /**
   * @schema GetTerminologyResponse#TerminologyProperties
   */
  readonly terminologyProperties?: TerminologyProperties;

  /**
   * @schema GetTerminologyResponse#TerminologyDataLocation
   */
  readonly terminologyDataLocation?: TerminologyDataLocation;

}

/**
 * @schema ImportTerminologyRequest
 */
export interface ImportTerminologyRequest {
  /**
   * @schema ImportTerminologyRequest#Name
   */
  readonly name: string;

  /**
   * @schema ImportTerminologyRequest#MergeStrategy
   */
  readonly mergeStrategy: string;

  /**
   * @schema ImportTerminologyRequest#Description
   */
  readonly description?: string;

  /**
   * @schema ImportTerminologyRequest#TerminologyData
   */
  readonly terminologyData: TerminologyData;

  /**
   * @schema ImportTerminologyRequest#EncryptionKey
   */
  readonly encryptionKey?: EncryptionKey;

}

/**
 * @schema ImportTerminologyResponse
 */
export interface ImportTerminologyResponse {
  /**
   * @schema ImportTerminologyResponse#TerminologyProperties
   */
  readonly terminologyProperties?: TerminologyProperties;

}

/**
 * @schema ListParallelDataRequest
 */
export interface ListParallelDataRequest {
  /**
   * @schema ListParallelDataRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListParallelDataRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListParallelDataResponse
 */
export interface ListParallelDataResponse {
  /**
   * @schema ListParallelDataResponse#ParallelDataPropertiesList
   */
  readonly parallelDataPropertiesList?: ParallelDataProperties[];

  /**
   * @schema ListParallelDataResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTerminologiesRequest
 */
export interface ListTerminologiesRequest {
  /**
   * @schema ListTerminologiesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTerminologiesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTerminologiesResponse
 */
export interface ListTerminologiesResponse {
  /**
   * @schema ListTerminologiesResponse#TerminologyPropertiesList
   */
  readonly terminologyPropertiesList?: TerminologyProperties[];

  /**
   * @schema ListTerminologiesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema ListTextTranslationJobsRequest
 */
export interface ListTextTranslationJobsRequest {
  /**
   * @schema ListTextTranslationJobsRequest#Filter
   */
  readonly filter?: TextTranslationJobFilter;

  /**
   * @schema ListTextTranslationJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListTextTranslationJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListTextTranslationJobsResponse
 */
export interface ListTextTranslationJobsResponse {
  /**
   * @schema ListTextTranslationJobsResponse#TextTranslationJobPropertiesList
   */
  readonly textTranslationJobPropertiesList?: TextTranslationJobProperties[];

  /**
   * @schema ListTextTranslationJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema StartTextTranslationJobRequest
 */
export interface StartTextTranslationJobRequest {
  /**
   * @schema StartTextTranslationJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema StartTextTranslationJobRequest#InputDataConfig
   */
  readonly inputDataConfig: InputDataConfig;

  /**
   * @schema StartTextTranslationJobRequest#OutputDataConfig
   */
  readonly outputDataConfig: OutputDataConfig;

  /**
   * @schema StartTextTranslationJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema StartTextTranslationJobRequest#SourceLanguageCode
   */
  readonly sourceLanguageCode: string;

  /**
   * @schema StartTextTranslationJobRequest#TargetLanguageCodes
   */
  readonly targetLanguageCodes: string[];

  /**
   * @schema StartTextTranslationJobRequest#TerminologyNames
   */
  readonly terminologyNames?: string[];

  /**
   * @schema StartTextTranslationJobRequest#ParallelDataNames
   */
  readonly parallelDataNames?: string[];

  /**
   * @schema StartTextTranslationJobRequest#ClientToken
   */
  readonly clientToken: string;

}

/**
 * @schema StartTextTranslationJobResponse
 */
export interface StartTextTranslationJobResponse {
  /**
   * @schema StartTextTranslationJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema StartTextTranslationJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema StopTextTranslationJobRequest
 */
export interface StopTextTranslationJobRequest {
  /**
   * @schema StopTextTranslationJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema StopTextTranslationJobResponse
 */
export interface StopTextTranslationJobResponse {
  /**
   * @schema StopTextTranslationJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema StopTextTranslationJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema TranslateTextRequest
 */
export interface TranslateTextRequest {
  /**
   * @schema TranslateTextRequest#Text
   */
  readonly text: string;

  /**
   * @schema TranslateTextRequest#TerminologyNames
   */
  readonly terminologyNames?: string[];

  /**
   * @schema TranslateTextRequest#SourceLanguageCode
   */
  readonly sourceLanguageCode: string;

  /**
   * @schema TranslateTextRequest#TargetLanguageCode
   */
  readonly targetLanguageCode: string;

}

/**
 * @schema TranslateTextResponse
 */
export interface TranslateTextResponse {
  /**
   * @schema TranslateTextResponse#TranslatedText
   */
  readonly translatedText: string;

  /**
   * @schema TranslateTextResponse#SourceLanguageCode
   */
  readonly sourceLanguageCode: string;

  /**
   * @schema TranslateTextResponse#TargetLanguageCode
   */
  readonly targetLanguageCode: string;

  /**
   * @schema TranslateTextResponse#AppliedTerminologies
   */
  readonly appliedTerminologies?: AppliedTerminology[];

}

/**
 * @schema UpdateParallelDataRequest
 */
export interface UpdateParallelDataRequest {
  /**
   * @schema UpdateParallelDataRequest#Name
   */
  readonly name: string;

  /**
   * @schema UpdateParallelDataRequest#Description
   */
  readonly description?: string;

  /**
   * @schema UpdateParallelDataRequest#ParallelDataConfig
   */
  readonly parallelDataConfig: ParallelDataConfig;

  /**
   * @schema UpdateParallelDataRequest#ClientToken
   */
  readonly clientToken: string;

}

/**
 * @schema UpdateParallelDataResponse
 */
export interface UpdateParallelDataResponse {
  /**
   * @schema UpdateParallelDataResponse#Name
   */
  readonly name?: string;

  /**
   * @schema UpdateParallelDataResponse#Status
   */
  readonly status?: string;

  /**
   * @schema UpdateParallelDataResponse#LatestUpdateAttemptStatus
   */
  readonly latestUpdateAttemptStatus?: string;

  /**
   * @schema UpdateParallelDataResponse#LatestUpdateAttemptAt
   */
  readonly latestUpdateAttemptAt?: string;

}

/**
 * @schema ParallelDataConfig
 */
export interface ParallelDataConfig {
  /**
   * @schema ParallelDataConfig#S3Uri
   */
  readonly s3Uri: string;

  /**
   * @schema ParallelDataConfig#Format
   */
  readonly format: string;

}

/**
 * @schema EncryptionKey
 */
export interface EncryptionKey {
  /**
   * @schema EncryptionKey#Type
   */
  readonly type: string;

  /**
   * @schema EncryptionKey#Id
   */
  readonly id: string;

}

/**
 * @schema TextTranslationJobProperties
 */
export interface TextTranslationJobProperties {
  /**
   * @schema TextTranslationJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema TextTranslationJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema TextTranslationJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema TextTranslationJobProperties#JobDetails
   */
  readonly jobDetails?: JobDetails;

  /**
   * @schema TextTranslationJobProperties#SourceLanguageCode
   */
  readonly sourceLanguageCode?: string;

  /**
   * @schema TextTranslationJobProperties#TargetLanguageCodes
   */
  readonly targetLanguageCodes?: string[];

  /**
   * @schema TextTranslationJobProperties#TerminologyNames
   */
  readonly terminologyNames?: string[];

  /**
   * @schema TextTranslationJobProperties#ParallelDataNames
   */
  readonly parallelDataNames?: string[];

  /**
   * @schema TextTranslationJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema TextTranslationJobProperties#SubmittedTime
   */
  readonly submittedTime?: string;

  /**
   * @schema TextTranslationJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema TextTranslationJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: InputDataConfig;

  /**
   * @schema TextTranslationJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: OutputDataConfig;

  /**
   * @schema TextTranslationJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

}

/**
 * @schema ParallelDataProperties
 */
export interface ParallelDataProperties {
  /**
   * @schema ParallelDataProperties#Name
   */
  readonly name?: string;

  /**
   * @schema ParallelDataProperties#Arn
   */
  readonly arn?: string;

  /**
   * @schema ParallelDataProperties#Description
   */
  readonly description?: string;

  /**
   * @schema ParallelDataProperties#Status
   */
  readonly status?: string;

  /**
   * @schema ParallelDataProperties#SourceLanguageCode
   */
  readonly sourceLanguageCode?: string;

  /**
   * @schema ParallelDataProperties#TargetLanguageCodes
   */
  readonly targetLanguageCodes?: string[];

  /**
   * @schema ParallelDataProperties#ParallelDataConfig
   */
  readonly parallelDataConfig?: ParallelDataConfig;

  /**
   * @schema ParallelDataProperties#Message
   */
  readonly message?: string;

  /**
   * @schema ParallelDataProperties#ImportedDataSize
   */
  readonly importedDataSize?: number;

  /**
   * @schema ParallelDataProperties#ImportedRecordCount
   */
  readonly importedRecordCount?: number;

  /**
   * @schema ParallelDataProperties#FailedRecordCount
   */
  readonly failedRecordCount?: number;

  /**
   * @schema ParallelDataProperties#SkippedRecordCount
   */
  readonly skippedRecordCount?: number;

  /**
   * @schema ParallelDataProperties#EncryptionKey
   */
  readonly encryptionKey?: EncryptionKey;

  /**
   * @schema ParallelDataProperties#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema ParallelDataProperties#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema ParallelDataProperties#LatestUpdateAttemptStatus
   */
  readonly latestUpdateAttemptStatus?: string;

  /**
   * @schema ParallelDataProperties#LatestUpdateAttemptAt
   */
  readonly latestUpdateAttemptAt?: string;

}

/**
 * @schema ParallelDataDataLocation
 */
export interface ParallelDataDataLocation {
  /**
   * @schema ParallelDataDataLocation#RepositoryType
   */
  readonly repositoryType: string;

  /**
   * @schema ParallelDataDataLocation#Location
   */
  readonly location: string;

}

/**
 * @schema TerminologyProperties
 */
export interface TerminologyProperties {
  /**
   * @schema TerminologyProperties#Name
   */
  readonly name?: string;

  /**
   * @schema TerminologyProperties#Description
   */
  readonly description?: string;

  /**
   * @schema TerminologyProperties#Arn
   */
  readonly arn?: string;

  /**
   * @schema TerminologyProperties#SourceLanguageCode
   */
  readonly sourceLanguageCode?: string;

  /**
   * @schema TerminologyProperties#TargetLanguageCodes
   */
  readonly targetLanguageCodes?: string[];

  /**
   * @schema TerminologyProperties#EncryptionKey
   */
  readonly encryptionKey?: EncryptionKey;

  /**
   * @schema TerminologyProperties#SizeBytes
   */
  readonly sizeBytes?: number;

  /**
   * @schema TerminologyProperties#TermCount
   */
  readonly termCount?: number;

  /**
   * @schema TerminologyProperties#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema TerminologyProperties#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

}

/**
 * @schema TerminologyDataLocation
 */
export interface TerminologyDataLocation {
  /**
   * @schema TerminologyDataLocation#RepositoryType
   */
  readonly repositoryType: string;

  /**
   * @schema TerminologyDataLocation#Location
   */
  readonly location: string;

}

/**
 * @schema TerminologyData
 */
export interface TerminologyData {
  /**
   * @schema TerminologyData#File
   */
  readonly file: any;

  /**
   * @schema TerminologyData#Format
   */
  readonly format: string;

}

/**
 * @schema TextTranslationJobFilter
 */
export interface TextTranslationJobFilter {
  /**
   * @schema TextTranslationJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema TextTranslationJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema TextTranslationJobFilter#SubmittedBeforeTime
   */
  readonly submittedBeforeTime?: string;

  /**
   * @schema TextTranslationJobFilter#SubmittedAfterTime
   */
  readonly submittedAfterTime?: string;

}

/**
 * @schema InputDataConfig
 */
export interface InputDataConfig {
  /**
   * @schema InputDataConfig#S3Uri
   */
  readonly s3Uri: string;

  /**
   * @schema InputDataConfig#ContentType
   */
  readonly contentType: string;

}

/**
 * @schema OutputDataConfig
 */
export interface OutputDataConfig {
  /**
   * @schema OutputDataConfig#S3Uri
   */
  readonly s3Uri: string;

}

/**
 * @schema AppliedTerminology
 */
export interface AppliedTerminology {
  /**
   * @schema AppliedTerminology#Name
   */
  readonly name?: string;

  /**
   * @schema AppliedTerminology#Terms
   */
  readonly terms?: Term[];

}

/**
 * @schema JobDetails
 */
export interface JobDetails {
  /**
   * @schema JobDetails#TranslatedDocumentsCount
   */
  readonly translatedDocumentsCount?: number;

  /**
   * @schema JobDetails#DocumentsWithErrorsCount
   */
  readonly documentsWithErrorsCount?: number;

  /**
   * @schema JobDetails#InputDocumentsCount
   */
  readonly inputDocumentsCount?: number;

}

/**
 * @schema Term
 */
export interface Term {
  /**
   * @schema Term#SourceText
   */
  readonly sourceText?: string;

  /**
   * @schema Term#TargetText
   */
  readonly targetText?: string;

}
