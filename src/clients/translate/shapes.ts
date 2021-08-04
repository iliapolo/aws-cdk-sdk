/**
 * @schema TranslateCreateParallelDataRequest
 */
export interface TranslateCreateParallelDataRequest {
  /**
   * @schema TranslateCreateParallelDataRequest#Name
   */
  readonly name: string;

  /**
   * @schema TranslateCreateParallelDataRequest#Description
   */
  readonly description?: string;

  /**
   * @schema TranslateCreateParallelDataRequest#ParallelDataConfig
   */
  readonly parallelDataConfig: TranslateParallelDataConfig;

  /**
   * @schema TranslateCreateParallelDataRequest#EncryptionKey
   */
  readonly encryptionKey?: TranslateEncryptionKey;

  /**
   * @schema TranslateCreateParallelDataRequest#ClientToken
   */
  readonly clientToken: string;

}

/**
 * @schema TranslateCreateParallelDataResponse
 */
export interface TranslateCreateParallelDataResponse {
  /**
   * @schema TranslateCreateParallelDataResponse#Name
   */
  readonly name?: string;

  /**
   * @schema TranslateCreateParallelDataResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema TranslateDeleteParallelDataRequest
 */
export interface TranslateDeleteParallelDataRequest {
  /**
   * @schema TranslateDeleteParallelDataRequest#Name
   */
  readonly name: string;

}

/**
 * @schema TranslateDeleteParallelDataResponse
 */
export interface TranslateDeleteParallelDataResponse {
  /**
   * @schema TranslateDeleteParallelDataResponse#Name
   */
  readonly name?: string;

  /**
   * @schema TranslateDeleteParallelDataResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema TranslateDeleteTerminologyRequest
 */
export interface TranslateDeleteTerminologyRequest {
  /**
   * @schema TranslateDeleteTerminologyRequest#Name
   */
  readonly name: string;

}

/**
 * @schema TranslateDescribeTextTranslationJobRequest
 */
export interface TranslateDescribeTextTranslationJobRequest {
  /**
   * @schema TranslateDescribeTextTranslationJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema TranslateDescribeTextTranslationJobResponse
 */
export interface TranslateDescribeTextTranslationJobResponse {
  /**
   * @schema TranslateDescribeTextTranslationJobResponse#TextTranslationJobProperties
   */
  readonly textTranslationJobProperties?: TranslateTextTranslationJobProperties;

}

/**
 * @schema TranslateGetParallelDataRequest
 */
export interface TranslateGetParallelDataRequest {
  /**
   * @schema TranslateGetParallelDataRequest#Name
   */
  readonly name: string;

}

/**
 * @schema TranslateGetParallelDataResponse
 */
export interface TranslateGetParallelDataResponse {
  /**
   * @schema TranslateGetParallelDataResponse#ParallelDataProperties
   */
  readonly parallelDataProperties?: TranslateParallelDataProperties;

  /**
   * @schema TranslateGetParallelDataResponse#DataLocation
   */
  readonly dataLocation?: TranslateParallelDataDataLocation;

  /**
   * @schema TranslateGetParallelDataResponse#AuxiliaryDataLocation
   */
  readonly auxiliaryDataLocation?: TranslateParallelDataDataLocation;

  /**
   * @schema TranslateGetParallelDataResponse#LatestUpdateAttemptAuxiliaryDataLocation
   */
  readonly latestUpdateAttemptAuxiliaryDataLocation?: TranslateParallelDataDataLocation;

}

/**
 * @schema TranslateGetTerminologyRequest
 */
export interface TranslateGetTerminologyRequest {
  /**
   * @schema TranslateGetTerminologyRequest#Name
   */
  readonly name: string;

  /**
   * @schema TranslateGetTerminologyRequest#TerminologyDataFormat
   */
  readonly terminologyDataFormat: string;

}

/**
 * @schema TranslateGetTerminologyResponse
 */
export interface TranslateGetTerminologyResponse {
  /**
   * @schema TranslateGetTerminologyResponse#TerminologyProperties
   */
  readonly terminologyProperties?: TranslateTerminologyProperties;

  /**
   * @schema TranslateGetTerminologyResponse#TerminologyDataLocation
   */
  readonly terminologyDataLocation?: TranslateTerminologyDataLocation;

}

/**
 * @schema TranslateImportTerminologyRequest
 */
export interface TranslateImportTerminologyRequest {
  /**
   * @schema TranslateImportTerminologyRequest#Name
   */
  readonly name: string;

  /**
   * @schema TranslateImportTerminologyRequest#MergeStrategy
   */
  readonly mergeStrategy: string;

  /**
   * @schema TranslateImportTerminologyRequest#Description
   */
  readonly description?: string;

  /**
   * @schema TranslateImportTerminologyRequest#TerminologyData
   */
  readonly terminologyData: TranslateTerminologyData;

  /**
   * @schema TranslateImportTerminologyRequest#EncryptionKey
   */
  readonly encryptionKey?: TranslateEncryptionKey;

}

/**
 * @schema TranslateImportTerminologyResponse
 */
export interface TranslateImportTerminologyResponse {
  /**
   * @schema TranslateImportTerminologyResponse#TerminologyProperties
   */
  readonly terminologyProperties?: TranslateTerminologyProperties;

}

/**
 * @schema TranslateListParallelDataRequest
 */
export interface TranslateListParallelDataRequest {
  /**
   * @schema TranslateListParallelDataRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema TranslateListParallelDataRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema TranslateListParallelDataResponse
 */
export interface TranslateListParallelDataResponse {
  /**
   * @schema TranslateListParallelDataResponse#ParallelDataPropertiesList
   */
  readonly parallelDataPropertiesList?: TranslateParallelDataProperties[];

  /**
   * @schema TranslateListParallelDataResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema TranslateListTerminologiesRequest
 */
export interface TranslateListTerminologiesRequest {
  /**
   * @schema TranslateListTerminologiesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema TranslateListTerminologiesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema TranslateListTerminologiesResponse
 */
export interface TranslateListTerminologiesResponse {
  /**
   * @schema TranslateListTerminologiesResponse#TerminologyPropertiesList
   */
  readonly terminologyPropertiesList?: TranslateTerminologyProperties[];

  /**
   * @schema TranslateListTerminologiesResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema TranslateListTextTranslationJobsRequest
 */
export interface TranslateListTextTranslationJobsRequest {
  /**
   * @schema TranslateListTextTranslationJobsRequest#Filter
   */
  readonly filter?: TranslateTextTranslationJobFilter;

  /**
   * @schema TranslateListTextTranslationJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema TranslateListTextTranslationJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema TranslateListTextTranslationJobsResponse
 */
export interface TranslateListTextTranslationJobsResponse {
  /**
   * @schema TranslateListTextTranslationJobsResponse#TextTranslationJobPropertiesList
   */
  readonly textTranslationJobPropertiesList?: TranslateTextTranslationJobProperties[];

  /**
   * @schema TranslateListTextTranslationJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema TranslateStartTextTranslationJobRequest
 */
export interface TranslateStartTextTranslationJobRequest {
  /**
   * @schema TranslateStartTextTranslationJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema TranslateStartTextTranslationJobRequest#InputDataConfig
   */
  readonly inputDataConfig: TranslateInputDataConfig;

  /**
   * @schema TranslateStartTextTranslationJobRequest#OutputDataConfig
   */
  readonly outputDataConfig: TranslateOutputDataConfig;

  /**
   * @schema TranslateStartTextTranslationJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn: string;

  /**
   * @schema TranslateStartTextTranslationJobRequest#SourceLanguageCode
   */
  readonly sourceLanguageCode: string;

  /**
   * @schema TranslateStartTextTranslationJobRequest#TargetLanguageCodes
   */
  readonly targetLanguageCodes: string[];

  /**
   * @schema TranslateStartTextTranslationJobRequest#TerminologyNames
   */
  readonly terminologyNames?: string[];

  /**
   * @schema TranslateStartTextTranslationJobRequest#ParallelDataNames
   */
  readonly parallelDataNames?: string[];

  /**
   * @schema TranslateStartTextTranslationJobRequest#ClientToken
   */
  readonly clientToken: string;

}

/**
 * @schema TranslateStartTextTranslationJobResponse
 */
export interface TranslateStartTextTranslationJobResponse {
  /**
   * @schema TranslateStartTextTranslationJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema TranslateStartTextTranslationJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema TranslateStopTextTranslationJobRequest
 */
export interface TranslateStopTextTranslationJobRequest {
  /**
   * @schema TranslateStopTextTranslationJobRequest#JobId
   */
  readonly jobId: string;

}

/**
 * @schema TranslateStopTextTranslationJobResponse
 */
export interface TranslateStopTextTranslationJobResponse {
  /**
   * @schema TranslateStopTextTranslationJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema TranslateStopTextTranslationJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * @schema TranslateTranslateTextRequest
 */
export interface TranslateTranslateTextRequest {
  /**
   * @schema TranslateTranslateTextRequest#Text
   */
  readonly text: string;

  /**
   * @schema TranslateTranslateTextRequest#TerminologyNames
   */
  readonly terminologyNames?: string[];

  /**
   * @schema TranslateTranslateTextRequest#SourceLanguageCode
   */
  readonly sourceLanguageCode: string;

  /**
   * @schema TranslateTranslateTextRequest#TargetLanguageCode
   */
  readonly targetLanguageCode: string;

}

/**
 * @schema TranslateTranslateTextResponse
 */
export interface TranslateTranslateTextResponse {
  /**
   * @schema TranslateTranslateTextResponse#TranslatedText
   */
  readonly translatedText: string;

  /**
   * @schema TranslateTranslateTextResponse#SourceLanguageCode
   */
  readonly sourceLanguageCode: string;

  /**
   * @schema TranslateTranslateTextResponse#TargetLanguageCode
   */
  readonly targetLanguageCode: string;

  /**
   * @schema TranslateTranslateTextResponse#AppliedTerminologies
   */
  readonly appliedTerminologies?: TranslateAppliedTerminology[];

}

/**
 * @schema TranslateUpdateParallelDataRequest
 */
export interface TranslateUpdateParallelDataRequest {
  /**
   * @schema TranslateUpdateParallelDataRequest#Name
   */
  readonly name: string;

  /**
   * @schema TranslateUpdateParallelDataRequest#Description
   */
  readonly description?: string;

  /**
   * @schema TranslateUpdateParallelDataRequest#ParallelDataConfig
   */
  readonly parallelDataConfig: TranslateParallelDataConfig;

  /**
   * @schema TranslateUpdateParallelDataRequest#ClientToken
   */
  readonly clientToken: string;

}

/**
 * @schema TranslateUpdateParallelDataResponse
 */
export interface TranslateUpdateParallelDataResponse {
  /**
   * @schema TranslateUpdateParallelDataResponse#Name
   */
  readonly name?: string;

  /**
   * @schema TranslateUpdateParallelDataResponse#Status
   */
  readonly status?: string;

  /**
   * @schema TranslateUpdateParallelDataResponse#LatestUpdateAttemptStatus
   */
  readonly latestUpdateAttemptStatus?: string;

  /**
   * @schema TranslateUpdateParallelDataResponse#LatestUpdateAttemptAt
   */
  readonly latestUpdateAttemptAt?: string;

}

/**
 * @schema TranslateParallelDataConfig
 */
export interface TranslateParallelDataConfig {
  /**
   * @schema TranslateParallelDataConfig#S3Uri
   */
  readonly s3Uri: string;

  /**
   * @schema TranslateParallelDataConfig#Format
   */
  readonly format: string;

}

/**
 * @schema TranslateEncryptionKey
 */
export interface TranslateEncryptionKey {
  /**
   * @schema TranslateEncryptionKey#Type
   */
  readonly type: string;

  /**
   * @schema TranslateEncryptionKey#Id
   */
  readonly id: string;

}

/**
 * @schema TranslateTextTranslationJobProperties
 */
export interface TranslateTextTranslationJobProperties {
  /**
   * @schema TranslateTextTranslationJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema TranslateTextTranslationJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema TranslateTextTranslationJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema TranslateTextTranslationJobProperties#JobDetails
   */
  readonly jobDetails?: TranslateJobDetails;

  /**
   * @schema TranslateTextTranslationJobProperties#SourceLanguageCode
   */
  readonly sourceLanguageCode?: string;

  /**
   * @schema TranslateTextTranslationJobProperties#TargetLanguageCodes
   */
  readonly targetLanguageCodes?: string[];

  /**
   * @schema TranslateTextTranslationJobProperties#TerminologyNames
   */
  readonly terminologyNames?: string[];

  /**
   * @schema TranslateTextTranslationJobProperties#ParallelDataNames
   */
  readonly parallelDataNames?: string[];

  /**
   * @schema TranslateTextTranslationJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema TranslateTextTranslationJobProperties#SubmittedTime
   */
  readonly submittedTime?: string;

  /**
   * @schema TranslateTextTranslationJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema TranslateTextTranslationJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: TranslateInputDataConfig;

  /**
   * @schema TranslateTextTranslationJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: TranslateOutputDataConfig;

  /**
   * @schema TranslateTextTranslationJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

}

/**
 * @schema TranslateParallelDataProperties
 */
export interface TranslateParallelDataProperties {
  /**
   * @schema TranslateParallelDataProperties#Name
   */
  readonly name?: string;

  /**
   * @schema TranslateParallelDataProperties#Arn
   */
  readonly arn?: string;

  /**
   * @schema TranslateParallelDataProperties#Description
   */
  readonly description?: string;

  /**
   * @schema TranslateParallelDataProperties#Status
   */
  readonly status?: string;

  /**
   * @schema TranslateParallelDataProperties#SourceLanguageCode
   */
  readonly sourceLanguageCode?: string;

  /**
   * @schema TranslateParallelDataProperties#TargetLanguageCodes
   */
  readonly targetLanguageCodes?: string[];

  /**
   * @schema TranslateParallelDataProperties#ParallelDataConfig
   */
  readonly parallelDataConfig?: TranslateParallelDataConfig;

  /**
   * @schema TranslateParallelDataProperties#Message
   */
  readonly message?: string;

  /**
   * @schema TranslateParallelDataProperties#ImportedDataSize
   */
  readonly importedDataSize?: number;

  /**
   * @schema TranslateParallelDataProperties#ImportedRecordCount
   */
  readonly importedRecordCount?: number;

  /**
   * @schema TranslateParallelDataProperties#FailedRecordCount
   */
  readonly failedRecordCount?: number;

  /**
   * @schema TranslateParallelDataProperties#SkippedRecordCount
   */
  readonly skippedRecordCount?: number;

  /**
   * @schema TranslateParallelDataProperties#EncryptionKey
   */
  readonly encryptionKey?: TranslateEncryptionKey;

  /**
   * @schema TranslateParallelDataProperties#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema TranslateParallelDataProperties#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

  /**
   * @schema TranslateParallelDataProperties#LatestUpdateAttemptStatus
   */
  readonly latestUpdateAttemptStatus?: string;

  /**
   * @schema TranslateParallelDataProperties#LatestUpdateAttemptAt
   */
  readonly latestUpdateAttemptAt?: string;

}

/**
 * @schema TranslateParallelDataDataLocation
 */
export interface TranslateParallelDataDataLocation {
  /**
   * @schema TranslateParallelDataDataLocation#RepositoryType
   */
  readonly repositoryType: string;

  /**
   * @schema TranslateParallelDataDataLocation#Location
   */
  readonly location: string;

}

/**
 * @schema TranslateTerminologyProperties
 */
export interface TranslateTerminologyProperties {
  /**
   * @schema TranslateTerminologyProperties#Name
   */
  readonly name?: string;

  /**
   * @schema TranslateTerminologyProperties#Description
   */
  readonly description?: string;

  /**
   * @schema TranslateTerminologyProperties#Arn
   */
  readonly arn?: string;

  /**
   * @schema TranslateTerminologyProperties#SourceLanguageCode
   */
  readonly sourceLanguageCode?: string;

  /**
   * @schema TranslateTerminologyProperties#TargetLanguageCodes
   */
  readonly targetLanguageCodes?: string[];

  /**
   * @schema TranslateTerminologyProperties#EncryptionKey
   */
  readonly encryptionKey?: TranslateEncryptionKey;

  /**
   * @schema TranslateTerminologyProperties#SizeBytes
   */
  readonly sizeBytes?: number;

  /**
   * @schema TranslateTerminologyProperties#TermCount
   */
  readonly termCount?: number;

  /**
   * @schema TranslateTerminologyProperties#CreatedAt
   */
  readonly createdAt?: string;

  /**
   * @schema TranslateTerminologyProperties#LastUpdatedAt
   */
  readonly lastUpdatedAt?: string;

}

/**
 * @schema TranslateTerminologyDataLocation
 */
export interface TranslateTerminologyDataLocation {
  /**
   * @schema TranslateTerminologyDataLocation#RepositoryType
   */
  readonly repositoryType: string;

  /**
   * @schema TranslateTerminologyDataLocation#Location
   */
  readonly location: string;

}

/**
 * @schema TranslateTerminologyData
 */
export interface TranslateTerminologyData {
  /**
   * @schema TranslateTerminologyData#File
   */
  readonly file: any;

  /**
   * @schema TranslateTerminologyData#Format
   */
  readonly format: string;

}

/**
 * @schema TranslateTextTranslationJobFilter
 */
export interface TranslateTextTranslationJobFilter {
  /**
   * @schema TranslateTextTranslationJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema TranslateTextTranslationJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema TranslateTextTranslationJobFilter#SubmittedBeforeTime
   */
  readonly submittedBeforeTime?: string;

  /**
   * @schema TranslateTextTranslationJobFilter#SubmittedAfterTime
   */
  readonly submittedAfterTime?: string;

}

/**
 * @schema TranslateInputDataConfig
 */
export interface TranslateInputDataConfig {
  /**
   * @schema TranslateInputDataConfig#S3Uri
   */
  readonly s3Uri: string;

  /**
   * @schema TranslateInputDataConfig#ContentType
   */
  readonly contentType: string;

}

/**
 * @schema TranslateOutputDataConfig
 */
export interface TranslateOutputDataConfig {
  /**
   * @schema TranslateOutputDataConfig#S3Uri
   */
  readonly s3Uri: string;

}

/**
 * @schema TranslateAppliedTerminology
 */
export interface TranslateAppliedTerminology {
  /**
   * @schema TranslateAppliedTerminology#Name
   */
  readonly name?: string;

  /**
   * @schema TranslateAppliedTerminology#Terms
   */
  readonly terms?: TranslateTerm[];

}

/**
 * @schema TranslateJobDetails
 */
export interface TranslateJobDetails {
  /**
   * @schema TranslateJobDetails#TranslatedDocumentsCount
   */
  readonly translatedDocumentsCount?: number;

  /**
   * @schema TranslateJobDetails#DocumentsWithErrorsCount
   */
  readonly documentsWithErrorsCount?: number;

  /**
   * @schema TranslateJobDetails#InputDocumentsCount
   */
  readonly inputDocumentsCount?: number;

}

/**
 * @schema TranslateTerm
 */
export interface TranslateTerm {
  /**
   * @schema TranslateTerm#SourceText
   */
  readonly sourceText?: string;

  /**
   * @schema TranslateTerm#TargetText
   */
  readonly targetText?: string;

}
