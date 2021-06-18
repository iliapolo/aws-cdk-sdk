/**
 * @schema RekognitionCompareFacesRequest
 */
export interface RekognitionCompareFacesRequest {
  /**
   * @schema RekognitionCompareFacesRequest#SourceImage
   */
  readonly sourceImage: RekognitionImage;

  /**
   * @schema RekognitionCompareFacesRequest#TargetImage
   */
  readonly targetImage: RekognitionImage;

  /**
   * @schema RekognitionCompareFacesRequest#SimilarityThreshold
   */
  readonly similarityThreshold?: number;

  /**
   * @schema RekognitionCompareFacesRequest#QualityFilter
   */
  readonly qualityFilter?: string;

}

/**
 * @schema RekognitionCompareFacesResponse
 */
export interface RekognitionCompareFacesResponse {
  /**
   * @schema RekognitionCompareFacesResponse#SourceImageFace
   */
  readonly sourceImageFace?: RekognitionComparedSourceImageFace;

  /**
   * @schema RekognitionCompareFacesResponse#FaceMatches
   */
  readonly faceMatches?: RekognitionCompareFacesMatch[];

  /**
   * @schema RekognitionCompareFacesResponse#UnmatchedFaces
   */
  readonly unmatchedFaces?: RekognitionComparedFace[];

  /**
   * @schema RekognitionCompareFacesResponse#SourceImageOrientationCorrection
   */
  readonly sourceImageOrientationCorrection?: string;

  /**
   * @schema RekognitionCompareFacesResponse#TargetImageOrientationCorrection
   */
  readonly targetImageOrientationCorrection?: string;

}

/**
 * @schema RekognitionCreateCollectionRequest
 */
export interface RekognitionCreateCollectionRequest {
  /**
   * @schema RekognitionCreateCollectionRequest#CollectionId
   */
  readonly collectionId: string;

}

/**
 * @schema RekognitionCreateCollectionResponse
 */
export interface RekognitionCreateCollectionResponse {
  /**
   * @schema RekognitionCreateCollectionResponse#StatusCode
   */
  readonly statusCode?: number;

  /**
   * @schema RekognitionCreateCollectionResponse#CollectionArn
   */
  readonly collectionArn?: string;

  /**
   * @schema RekognitionCreateCollectionResponse#FaceModelVersion
   */
  readonly faceModelVersion?: string;

}

/**
 * @schema RekognitionCreateProjectRequest
 */
export interface RekognitionCreateProjectRequest {
  /**
   * @schema RekognitionCreateProjectRequest#ProjectName
   */
  readonly projectName: string;

}

/**
 * @schema RekognitionCreateProjectResponse
 */
export interface RekognitionCreateProjectResponse {
  /**
   * @schema RekognitionCreateProjectResponse#ProjectArn
   */
  readonly projectArn?: string;

}

/**
 * @schema RekognitionCreateProjectVersionRequest
 */
export interface RekognitionCreateProjectVersionRequest {
  /**
   * @schema RekognitionCreateProjectVersionRequest#ProjectArn
   */
  readonly projectArn: string;

  /**
   * @schema RekognitionCreateProjectVersionRequest#VersionName
   */
  readonly versionName: string;

  /**
   * @schema RekognitionCreateProjectVersionRequest#OutputConfig
   */
  readonly outputConfig: RekognitionOutputConfig;

  /**
   * @schema RekognitionCreateProjectVersionRequest#TrainingData
   */
  readonly trainingData: RekognitionTrainingData;

  /**
   * @schema RekognitionCreateProjectVersionRequest#TestingData
   */
  readonly testingData: RekognitionTestingData;

}

/**
 * @schema RekognitionCreateProjectVersionResponse
 */
export interface RekognitionCreateProjectVersionResponse {
  /**
   * @schema RekognitionCreateProjectVersionResponse#ProjectVersionArn
   */
  readonly projectVersionArn?: string;

}

/**
 * @schema RekognitionCreateStreamProcessorRequest
 */
export interface RekognitionCreateStreamProcessorRequest {
  /**
   * @schema RekognitionCreateStreamProcessorRequest#Input
   */
  readonly input: RekognitionStreamProcessorInput;

  /**
   * @schema RekognitionCreateStreamProcessorRequest#Output
   */
  readonly output: RekognitionStreamProcessorOutput;

  /**
   * @schema RekognitionCreateStreamProcessorRequest#Name
   */
  readonly name: string;

  /**
   * @schema RekognitionCreateStreamProcessorRequest#Settings
   */
  readonly settings: RekognitionStreamProcessorSettings;

  /**
   * @schema RekognitionCreateStreamProcessorRequest#RoleArn
   */
  readonly roleArn: string;

}

/**
 * @schema RekognitionCreateStreamProcessorResponse
 */
export interface RekognitionCreateStreamProcessorResponse {
  /**
   * @schema RekognitionCreateStreamProcessorResponse#StreamProcessorArn
   */
  readonly streamProcessorArn?: string;

}

/**
 * @schema RekognitionDeleteCollectionRequest
 */
export interface RekognitionDeleteCollectionRequest {
  /**
   * @schema RekognitionDeleteCollectionRequest#CollectionId
   */
  readonly collectionId: string;

}

/**
 * @schema RekognitionDeleteCollectionResponse
 */
export interface RekognitionDeleteCollectionResponse {
  /**
   * @schema RekognitionDeleteCollectionResponse#StatusCode
   */
  readonly statusCode?: number;

}

/**
 * @schema RekognitionDeleteFacesRequest
 */
export interface RekognitionDeleteFacesRequest {
  /**
   * @schema RekognitionDeleteFacesRequest#CollectionId
   */
  readonly collectionId: string;

  /**
   * @schema RekognitionDeleteFacesRequest#FaceIds
   */
  readonly faceIds: string[];

}

/**
 * @schema RekognitionDeleteFacesResponse
 */
export interface RekognitionDeleteFacesResponse {
  /**
   * @schema RekognitionDeleteFacesResponse#DeletedFaces
   */
  readonly deletedFaces?: string[];

}

/**
 * @schema RekognitionDeleteProjectRequest
 */
export interface RekognitionDeleteProjectRequest {
  /**
   * @schema RekognitionDeleteProjectRequest#ProjectArn
   */
  readonly projectArn: string;

}

/**
 * @schema RekognitionDeleteProjectResponse
 */
export interface RekognitionDeleteProjectResponse {
  /**
   * @schema RekognitionDeleteProjectResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema RekognitionDeleteProjectVersionRequest
 */
export interface RekognitionDeleteProjectVersionRequest {
  /**
   * @schema RekognitionDeleteProjectVersionRequest#ProjectVersionArn
   */
  readonly projectVersionArn: string;

}

/**
 * @schema RekognitionDeleteProjectVersionResponse
 */
export interface RekognitionDeleteProjectVersionResponse {
  /**
   * @schema RekognitionDeleteProjectVersionResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema RekognitionDeleteStreamProcessorRequest
 */
export interface RekognitionDeleteStreamProcessorRequest {
  /**
   * @schema RekognitionDeleteStreamProcessorRequest#Name
   */
  readonly name: string;

}

/**
 * @schema RekognitionDeleteStreamProcessorResponse
 */
export interface RekognitionDeleteStreamProcessorResponse {
}

/**
 * @schema RekognitionDescribeCollectionRequest
 */
export interface RekognitionDescribeCollectionRequest {
  /**
   * @schema RekognitionDescribeCollectionRequest#CollectionId
   */
  readonly collectionId: string;

}

/**
 * @schema RekognitionDescribeCollectionResponse
 */
export interface RekognitionDescribeCollectionResponse {
  /**
   * @schema RekognitionDescribeCollectionResponse#FaceCount
   */
  readonly faceCount?: number;

  /**
   * @schema RekognitionDescribeCollectionResponse#FaceModelVersion
   */
  readonly faceModelVersion?: string;

  /**
   * @schema RekognitionDescribeCollectionResponse#CollectionARN
   */
  readonly collectionArn?: string;

  /**
   * @schema RekognitionDescribeCollectionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

}

/**
 * @schema RekognitionDescribeProjectVersionsRequest
 */
export interface RekognitionDescribeProjectVersionsRequest {
  /**
   * @schema RekognitionDescribeProjectVersionsRequest#ProjectArn
   */
  readonly projectArn: string;

  /**
   * @schema RekognitionDescribeProjectVersionsRequest#VersionNames
   */
  readonly versionNames?: string[];

  /**
   * @schema RekognitionDescribeProjectVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionDescribeProjectVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema RekognitionDescribeProjectVersionsResponse
 */
export interface RekognitionDescribeProjectVersionsResponse {
  /**
   * @schema RekognitionDescribeProjectVersionsResponse#ProjectVersionDescriptions
   */
  readonly projectVersionDescriptions?: RekognitionProjectVersionDescription[];

  /**
   * @schema RekognitionDescribeProjectVersionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RekognitionDescribeProjectsRequest
 */
export interface RekognitionDescribeProjectsRequest {
  /**
   * @schema RekognitionDescribeProjectsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionDescribeProjectsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema RekognitionDescribeProjectsResponse
 */
export interface RekognitionDescribeProjectsResponse {
  /**
   * @schema RekognitionDescribeProjectsResponse#ProjectDescriptions
   */
  readonly projectDescriptions?: RekognitionProjectDescription[];

  /**
   * @schema RekognitionDescribeProjectsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RekognitionDescribeStreamProcessorRequest
 */
export interface RekognitionDescribeStreamProcessorRequest {
  /**
   * @schema RekognitionDescribeStreamProcessorRequest#Name
   */
  readonly name: string;

}

/**
 * @schema RekognitionDescribeStreamProcessorResponse
 */
export interface RekognitionDescribeStreamProcessorResponse {
  /**
   * @schema RekognitionDescribeStreamProcessorResponse#Name
   */
  readonly name?: string;

  /**
   * @schema RekognitionDescribeStreamProcessorResponse#StreamProcessorArn
   */
  readonly streamProcessorArn?: string;

  /**
   * @schema RekognitionDescribeStreamProcessorResponse#Status
   */
  readonly status?: string;

  /**
   * @schema RekognitionDescribeStreamProcessorResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema RekognitionDescribeStreamProcessorResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema RekognitionDescribeStreamProcessorResponse#LastUpdateTimestamp
   */
  readonly lastUpdateTimestamp?: string;

  /**
   * @schema RekognitionDescribeStreamProcessorResponse#Input
   */
  readonly input?: RekognitionStreamProcessorInput;

  /**
   * @schema RekognitionDescribeStreamProcessorResponse#Output
   */
  readonly output?: RekognitionStreamProcessorOutput;

  /**
   * @schema RekognitionDescribeStreamProcessorResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema RekognitionDescribeStreamProcessorResponse#Settings
   */
  readonly settings?: RekognitionStreamProcessorSettings;

}

/**
 * @schema RekognitionDetectCustomLabelsRequest
 */
export interface RekognitionDetectCustomLabelsRequest {
  /**
   * @schema RekognitionDetectCustomLabelsRequest#ProjectVersionArn
   */
  readonly projectVersionArn: string;

  /**
   * @schema RekognitionDetectCustomLabelsRequest#Image
   */
  readonly image: RekognitionImage;

  /**
   * @schema RekognitionDetectCustomLabelsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RekognitionDetectCustomLabelsRequest#MinConfidence
   */
  readonly minConfidence?: number;

}

/**
 * @schema RekognitionDetectCustomLabelsResponse
 */
export interface RekognitionDetectCustomLabelsResponse {
  /**
   * @schema RekognitionDetectCustomLabelsResponse#CustomLabels
   */
  readonly customLabels?: RekognitionCustomLabel[];

}

/**
 * @schema RekognitionDetectFacesRequest
 */
export interface RekognitionDetectFacesRequest {
  /**
   * @schema RekognitionDetectFacesRequest#Image
   */
  readonly image: RekognitionImage;

  /**
   * @schema RekognitionDetectFacesRequest#Attributes
   */
  readonly attributes?: string[];

}

/**
 * @schema RekognitionDetectFacesResponse
 */
export interface RekognitionDetectFacesResponse {
  /**
   * @schema RekognitionDetectFacesResponse#FaceDetails
   */
  readonly faceDetails?: RekognitionFaceDetail[];

  /**
   * @schema RekognitionDetectFacesResponse#OrientationCorrection
   */
  readonly orientationCorrection?: string;

}

/**
 * @schema RekognitionDetectLabelsRequest
 */
export interface RekognitionDetectLabelsRequest {
  /**
   * @schema RekognitionDetectLabelsRequest#Image
   */
  readonly image: RekognitionImage;

  /**
   * @schema RekognitionDetectLabelsRequest#MaxLabels
   */
  readonly maxLabels?: number;

  /**
   * @schema RekognitionDetectLabelsRequest#MinConfidence
   */
  readonly minConfidence?: number;

}

/**
 * @schema RekognitionDetectLabelsResponse
 */
export interface RekognitionDetectLabelsResponse {
  /**
   * @schema RekognitionDetectLabelsResponse#Labels
   */
  readonly labels?: RekognitionLabel[];

  /**
   * @schema RekognitionDetectLabelsResponse#OrientationCorrection
   */
  readonly orientationCorrection?: string;

  /**
   * @schema RekognitionDetectLabelsResponse#LabelModelVersion
   */
  readonly labelModelVersion?: string;

}

/**
 * @schema RekognitionDetectModerationLabelsRequest
 */
export interface RekognitionDetectModerationLabelsRequest {
  /**
   * @schema RekognitionDetectModerationLabelsRequest#Image
   */
  readonly image: RekognitionImage;

  /**
   * @schema RekognitionDetectModerationLabelsRequest#MinConfidence
   */
  readonly minConfidence?: number;

  /**
   * @schema RekognitionDetectModerationLabelsRequest#HumanLoopConfig
   */
  readonly humanLoopConfig?: RekognitionHumanLoopConfig;

}

/**
 * @schema RekognitionDetectModerationLabelsResponse
 */
export interface RekognitionDetectModerationLabelsResponse {
  /**
   * @schema RekognitionDetectModerationLabelsResponse#ModerationLabels
   */
  readonly moderationLabels?: RekognitionModerationLabel[];

  /**
   * @schema RekognitionDetectModerationLabelsResponse#ModerationModelVersion
   */
  readonly moderationModelVersion?: string;

  /**
   * @schema RekognitionDetectModerationLabelsResponse#HumanLoopActivationOutput
   */
  readonly humanLoopActivationOutput?: RekognitionHumanLoopActivationOutput;

}

/**
 * @schema RekognitionDetectProtectiveEquipmentRequest
 */
export interface RekognitionDetectProtectiveEquipmentRequest {
  /**
   * @schema RekognitionDetectProtectiveEquipmentRequest#Image
   */
  readonly image: RekognitionImage;

  /**
   * @schema RekognitionDetectProtectiveEquipmentRequest#SummarizationAttributes
   */
  readonly summarizationAttributes?: RekognitionProtectiveEquipmentSummarizationAttributes;

}

/**
 * @schema RekognitionDetectProtectiveEquipmentResponse
 */
export interface RekognitionDetectProtectiveEquipmentResponse {
  /**
   * @schema RekognitionDetectProtectiveEquipmentResponse#ProtectiveEquipmentModelVersion
   */
  readonly protectiveEquipmentModelVersion?: string;

  /**
   * @schema RekognitionDetectProtectiveEquipmentResponse#Persons
   */
  readonly persons?: RekognitionProtectiveEquipmentPerson[];

  /**
   * @schema RekognitionDetectProtectiveEquipmentResponse#Summary
   */
  readonly summary?: RekognitionProtectiveEquipmentSummary;

}

/**
 * @schema RekognitionDetectTextRequest
 */
export interface RekognitionDetectTextRequest {
  /**
   * @schema RekognitionDetectTextRequest#Image
   */
  readonly image: RekognitionImage;

  /**
   * @schema RekognitionDetectTextRequest#Filters
   */
  readonly filters?: RekognitionDetectTextFilters;

}

/**
 * @schema RekognitionDetectTextResponse
 */
export interface RekognitionDetectTextResponse {
  /**
   * @schema RekognitionDetectTextResponse#TextDetections
   */
  readonly textDetections?: RekognitionTextDetection[];

  /**
   * @schema RekognitionDetectTextResponse#TextModelVersion
   */
  readonly textModelVersion?: string;

}

/**
 * @schema RekognitionGetCelebrityInfoRequest
 */
export interface RekognitionGetCelebrityInfoRequest {
  /**
   * @schema RekognitionGetCelebrityInfoRequest#Id
   */
  readonly id: string;

}

/**
 * @schema RekognitionGetCelebrityInfoResponse
 */
export interface RekognitionGetCelebrityInfoResponse {
  /**
   * @schema RekognitionGetCelebrityInfoResponse#Urls
   */
  readonly urls?: string[];

  /**
   * @schema RekognitionGetCelebrityInfoResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema RekognitionGetCelebrityRecognitionRequest
 */
export interface RekognitionGetCelebrityRecognitionRequest {
  /**
   * @schema RekognitionGetCelebrityRecognitionRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema RekognitionGetCelebrityRecognitionRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RekognitionGetCelebrityRecognitionRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionGetCelebrityRecognitionRequest#SortBy
   */
  readonly sortBy?: string;

}

/**
 * @schema RekognitionGetCelebrityRecognitionResponse
 */
export interface RekognitionGetCelebrityRecognitionResponse {
  /**
   * @schema RekognitionGetCelebrityRecognitionResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema RekognitionGetCelebrityRecognitionResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema RekognitionGetCelebrityRecognitionResponse#VideoMetadata
   */
  readonly videoMetadata?: RekognitionVideoMetadata;

  /**
   * @schema RekognitionGetCelebrityRecognitionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionGetCelebrityRecognitionResponse#Celebrities
   */
  readonly celebrities?: RekognitionCelebrityRecognition[];

}

/**
 * @schema RekognitionGetContentModerationRequest
 */
export interface RekognitionGetContentModerationRequest {
  /**
   * @schema RekognitionGetContentModerationRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema RekognitionGetContentModerationRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RekognitionGetContentModerationRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionGetContentModerationRequest#SortBy
   */
  readonly sortBy?: string;

}

/**
 * @schema RekognitionGetContentModerationResponse
 */
export interface RekognitionGetContentModerationResponse {
  /**
   * @schema RekognitionGetContentModerationResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema RekognitionGetContentModerationResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema RekognitionGetContentModerationResponse#VideoMetadata
   */
  readonly videoMetadata?: RekognitionVideoMetadata;

  /**
   * @schema RekognitionGetContentModerationResponse#ModerationLabels
   */
  readonly moderationLabels?: RekognitionContentModerationDetection[];

  /**
   * @schema RekognitionGetContentModerationResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionGetContentModerationResponse#ModerationModelVersion
   */
  readonly moderationModelVersion?: string;

}

/**
 * @schema RekognitionGetFaceDetectionRequest
 */
export interface RekognitionGetFaceDetectionRequest {
  /**
   * @schema RekognitionGetFaceDetectionRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema RekognitionGetFaceDetectionRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RekognitionGetFaceDetectionRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RekognitionGetFaceDetectionResponse
 */
export interface RekognitionGetFaceDetectionResponse {
  /**
   * @schema RekognitionGetFaceDetectionResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema RekognitionGetFaceDetectionResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema RekognitionGetFaceDetectionResponse#VideoMetadata
   */
  readonly videoMetadata?: RekognitionVideoMetadata;

  /**
   * @schema RekognitionGetFaceDetectionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionGetFaceDetectionResponse#Faces
   */
  readonly faces?: RekognitionFaceDetection[];

}

/**
 * @schema RekognitionGetFaceSearchRequest
 */
export interface RekognitionGetFaceSearchRequest {
  /**
   * @schema RekognitionGetFaceSearchRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema RekognitionGetFaceSearchRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RekognitionGetFaceSearchRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionGetFaceSearchRequest#SortBy
   */
  readonly sortBy?: string;

}

/**
 * @schema RekognitionGetFaceSearchResponse
 */
export interface RekognitionGetFaceSearchResponse {
  /**
   * @schema RekognitionGetFaceSearchResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema RekognitionGetFaceSearchResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema RekognitionGetFaceSearchResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionGetFaceSearchResponse#VideoMetadata
   */
  readonly videoMetadata?: RekognitionVideoMetadata;

  /**
   * @schema RekognitionGetFaceSearchResponse#Persons
   */
  readonly persons?: RekognitionPersonMatch[];

}

/**
 * @schema RekognitionGetLabelDetectionRequest
 */
export interface RekognitionGetLabelDetectionRequest {
  /**
   * @schema RekognitionGetLabelDetectionRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema RekognitionGetLabelDetectionRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RekognitionGetLabelDetectionRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionGetLabelDetectionRequest#SortBy
   */
  readonly sortBy?: string;

}

/**
 * @schema RekognitionGetLabelDetectionResponse
 */
export interface RekognitionGetLabelDetectionResponse {
  /**
   * @schema RekognitionGetLabelDetectionResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema RekognitionGetLabelDetectionResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema RekognitionGetLabelDetectionResponse#VideoMetadata
   */
  readonly videoMetadata?: RekognitionVideoMetadata;

  /**
   * @schema RekognitionGetLabelDetectionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionGetLabelDetectionResponse#Labels
   */
  readonly labels?: RekognitionLabelDetection[];

  /**
   * @schema RekognitionGetLabelDetectionResponse#LabelModelVersion
   */
  readonly labelModelVersion?: string;

}

/**
 * @schema RekognitionGetPersonTrackingRequest
 */
export interface RekognitionGetPersonTrackingRequest {
  /**
   * @schema RekognitionGetPersonTrackingRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema RekognitionGetPersonTrackingRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RekognitionGetPersonTrackingRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionGetPersonTrackingRequest#SortBy
   */
  readonly sortBy?: string;

}

/**
 * @schema RekognitionGetPersonTrackingResponse
 */
export interface RekognitionGetPersonTrackingResponse {
  /**
   * @schema RekognitionGetPersonTrackingResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema RekognitionGetPersonTrackingResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema RekognitionGetPersonTrackingResponse#VideoMetadata
   */
  readonly videoMetadata?: RekognitionVideoMetadata;

  /**
   * @schema RekognitionGetPersonTrackingResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionGetPersonTrackingResponse#Persons
   */
  readonly persons?: RekognitionPersonDetection[];

}

/**
 * @schema RekognitionGetSegmentDetectionRequest
 */
export interface RekognitionGetSegmentDetectionRequest {
  /**
   * @schema RekognitionGetSegmentDetectionRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema RekognitionGetSegmentDetectionRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RekognitionGetSegmentDetectionRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RekognitionGetSegmentDetectionResponse
 */
export interface RekognitionGetSegmentDetectionResponse {
  /**
   * @schema RekognitionGetSegmentDetectionResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema RekognitionGetSegmentDetectionResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema RekognitionGetSegmentDetectionResponse#VideoMetadata
   */
  readonly videoMetadata?: RekognitionVideoMetadata[];

  /**
   * @schema RekognitionGetSegmentDetectionResponse#AudioMetadata
   */
  readonly audioMetadata?: RekognitionAudioMetadata[];

  /**
   * @schema RekognitionGetSegmentDetectionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionGetSegmentDetectionResponse#Segments
   */
  readonly segments?: RekognitionSegmentDetection[];

  /**
   * @schema RekognitionGetSegmentDetectionResponse#SelectedSegmentTypes
   */
  readonly selectedSegmentTypes?: RekognitionSegmentTypeInfo[];

}

/**
 * @schema RekognitionGetTextDetectionRequest
 */
export interface RekognitionGetTextDetectionRequest {
  /**
   * @schema RekognitionGetTextDetectionRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema RekognitionGetTextDetectionRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema RekognitionGetTextDetectionRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema RekognitionGetTextDetectionResponse
 */
export interface RekognitionGetTextDetectionResponse {
  /**
   * @schema RekognitionGetTextDetectionResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema RekognitionGetTextDetectionResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema RekognitionGetTextDetectionResponse#VideoMetadata
   */
  readonly videoMetadata?: RekognitionVideoMetadata;

  /**
   * @schema RekognitionGetTextDetectionResponse#TextDetections
   */
  readonly textDetections?: RekognitionTextDetectionResult[];

  /**
   * @schema RekognitionGetTextDetectionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionGetTextDetectionResponse#TextModelVersion
   */
  readonly textModelVersion?: string;

}

/**
 * @schema RekognitionIndexFacesRequest
 */
export interface RekognitionIndexFacesRequest {
  /**
   * @schema RekognitionIndexFacesRequest#CollectionId
   */
  readonly collectionId: string;

  /**
   * @schema RekognitionIndexFacesRequest#Image
   */
  readonly image: RekognitionImage;

  /**
   * @schema RekognitionIndexFacesRequest#ExternalImageId
   */
  readonly externalImageId?: string;

  /**
   * @schema RekognitionIndexFacesRequest#DetectionAttributes
   */
  readonly detectionAttributes?: string[];

  /**
   * @schema RekognitionIndexFacesRequest#MaxFaces
   */
  readonly maxFaces?: number;

  /**
   * @schema RekognitionIndexFacesRequest#QualityFilter
   */
  readonly qualityFilter?: string;

}

/**
 * @schema RekognitionIndexFacesResponse
 */
export interface RekognitionIndexFacesResponse {
  /**
   * @schema RekognitionIndexFacesResponse#FaceRecords
   */
  readonly faceRecords?: RekognitionFaceRecord[];

  /**
   * @schema RekognitionIndexFacesResponse#OrientationCorrection
   */
  readonly orientationCorrection?: string;

  /**
   * @schema RekognitionIndexFacesResponse#FaceModelVersion
   */
  readonly faceModelVersion?: string;

  /**
   * @schema RekognitionIndexFacesResponse#UnindexedFaces
   */
  readonly unindexedFaces?: RekognitionUnindexedFace[];

}

/**
 * @schema RekognitionListCollectionsRequest
 */
export interface RekognitionListCollectionsRequest {
  /**
   * @schema RekognitionListCollectionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionListCollectionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema RekognitionListCollectionsResponse
 */
export interface RekognitionListCollectionsResponse {
  /**
   * @schema RekognitionListCollectionsResponse#CollectionIds
   */
  readonly collectionIds?: string[];

  /**
   * @schema RekognitionListCollectionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionListCollectionsResponse#FaceModelVersions
   */
  readonly faceModelVersions?: string[];

}

/**
 * @schema RekognitionListFacesRequest
 */
export interface RekognitionListFacesRequest {
  /**
   * @schema RekognitionListFacesRequest#CollectionId
   */
  readonly collectionId: string;

  /**
   * @schema RekognitionListFacesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionListFacesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema RekognitionListFacesResponse
 */
export interface RekognitionListFacesResponse {
  /**
   * @schema RekognitionListFacesResponse#Faces
   */
  readonly faces?: RekognitionFace[];

  /**
   * @schema RekognitionListFacesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionListFacesResponse#FaceModelVersion
   */
  readonly faceModelVersion?: string;

}

/**
 * @schema RekognitionListStreamProcessorsRequest
 */
export interface RekognitionListStreamProcessorsRequest {
  /**
   * @schema RekognitionListStreamProcessorsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionListStreamProcessorsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema RekognitionListStreamProcessorsResponse
 */
export interface RekognitionListStreamProcessorsResponse {
  /**
   * @schema RekognitionListStreamProcessorsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema RekognitionListStreamProcessorsResponse#StreamProcessors
   */
  readonly streamProcessors?: RekognitionStreamProcessor[];

}

/**
 * @schema RekognitionRecognizeCelebritiesRequest
 */
export interface RekognitionRecognizeCelebritiesRequest {
  /**
   * @schema RekognitionRecognizeCelebritiesRequest#Image
   */
  readonly image: RekognitionImage;

}

/**
 * @schema RekognitionRecognizeCelebritiesResponse
 */
export interface RekognitionRecognizeCelebritiesResponse {
  /**
   * @schema RekognitionRecognizeCelebritiesResponse#CelebrityFaces
   */
  readonly celebrityFaces?: RekognitionCelebrity[];

  /**
   * @schema RekognitionRecognizeCelebritiesResponse#UnrecognizedFaces
   */
  readonly unrecognizedFaces?: RekognitionComparedFace[];

  /**
   * @schema RekognitionRecognizeCelebritiesResponse#OrientationCorrection
   */
  readonly orientationCorrection?: string;

}

/**
 * @schema RekognitionSearchFacesRequest
 */
export interface RekognitionSearchFacesRequest {
  /**
   * @schema RekognitionSearchFacesRequest#CollectionId
   */
  readonly collectionId: string;

  /**
   * @schema RekognitionSearchFacesRequest#FaceId
   */
  readonly faceId: string;

  /**
   * @schema RekognitionSearchFacesRequest#MaxFaces
   */
  readonly maxFaces?: number;

  /**
   * @schema RekognitionSearchFacesRequest#FaceMatchThreshold
   */
  readonly faceMatchThreshold?: number;

}

/**
 * @schema RekognitionSearchFacesResponse
 */
export interface RekognitionSearchFacesResponse {
  /**
   * @schema RekognitionSearchFacesResponse#SearchedFaceId
   */
  readonly searchedFaceId?: string;

  /**
   * @schema RekognitionSearchFacesResponse#FaceMatches
   */
  readonly faceMatches?: RekognitionFaceMatch[];

  /**
   * @schema RekognitionSearchFacesResponse#FaceModelVersion
   */
  readonly faceModelVersion?: string;

}

/**
 * @schema RekognitionSearchFacesByImageRequest
 */
export interface RekognitionSearchFacesByImageRequest {
  /**
   * @schema RekognitionSearchFacesByImageRequest#CollectionId
   */
  readonly collectionId: string;

  /**
   * @schema RekognitionSearchFacesByImageRequest#Image
   */
  readonly image: RekognitionImage;

  /**
   * @schema RekognitionSearchFacesByImageRequest#MaxFaces
   */
  readonly maxFaces?: number;

  /**
   * @schema RekognitionSearchFacesByImageRequest#FaceMatchThreshold
   */
  readonly faceMatchThreshold?: number;

  /**
   * @schema RekognitionSearchFacesByImageRequest#QualityFilter
   */
  readonly qualityFilter?: string;

}

/**
 * @schema RekognitionSearchFacesByImageResponse
 */
export interface RekognitionSearchFacesByImageResponse {
  /**
   * @schema RekognitionSearchFacesByImageResponse#SearchedFaceBoundingBox
   */
  readonly searchedFaceBoundingBox?: RekognitionBoundingBox;

  /**
   * @schema RekognitionSearchFacesByImageResponse#SearchedFaceConfidence
   */
  readonly searchedFaceConfidence?: number;

  /**
   * @schema RekognitionSearchFacesByImageResponse#FaceMatches
   */
  readonly faceMatches?: RekognitionFaceMatch[];

  /**
   * @schema RekognitionSearchFacesByImageResponse#FaceModelVersion
   */
  readonly faceModelVersion?: string;

}

/**
 * @schema RekognitionStartCelebrityRecognitionRequest
 */
export interface RekognitionStartCelebrityRecognitionRequest {
  /**
   * @schema RekognitionStartCelebrityRecognitionRequest#Video
   */
  readonly video: RekognitionVideo;

  /**
   * @schema RekognitionStartCelebrityRecognitionRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RekognitionStartCelebrityRecognitionRequest#NotificationChannel
   */
  readonly notificationChannel?: RekognitionNotificationChannel;

  /**
   * @schema RekognitionStartCelebrityRecognitionRequest#JobTag
   */
  readonly jobTag?: string;

}

/**
 * @schema RekognitionStartCelebrityRecognitionResponse
 */
export interface RekognitionStartCelebrityRecognitionResponse {
  /**
   * @schema RekognitionStartCelebrityRecognitionResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema RekognitionStartContentModerationRequest
 */
export interface RekognitionStartContentModerationRequest {
  /**
   * @schema RekognitionStartContentModerationRequest#Video
   */
  readonly video: RekognitionVideo;

  /**
   * @schema RekognitionStartContentModerationRequest#MinConfidence
   */
  readonly minConfidence?: number;

  /**
   * @schema RekognitionStartContentModerationRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RekognitionStartContentModerationRequest#NotificationChannel
   */
  readonly notificationChannel?: RekognitionNotificationChannel;

  /**
   * @schema RekognitionStartContentModerationRequest#JobTag
   */
  readonly jobTag?: string;

}

/**
 * @schema RekognitionStartContentModerationResponse
 */
export interface RekognitionStartContentModerationResponse {
  /**
   * @schema RekognitionStartContentModerationResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema RekognitionStartFaceDetectionRequest
 */
export interface RekognitionStartFaceDetectionRequest {
  /**
   * @schema RekognitionStartFaceDetectionRequest#Video
   */
  readonly video: RekognitionVideo;

  /**
   * @schema RekognitionStartFaceDetectionRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RekognitionStartFaceDetectionRequest#NotificationChannel
   */
  readonly notificationChannel?: RekognitionNotificationChannel;

  /**
   * @schema RekognitionStartFaceDetectionRequest#FaceAttributes
   */
  readonly faceAttributes?: string;

  /**
   * @schema RekognitionStartFaceDetectionRequest#JobTag
   */
  readonly jobTag?: string;

}

/**
 * @schema RekognitionStartFaceDetectionResponse
 */
export interface RekognitionStartFaceDetectionResponse {
  /**
   * @schema RekognitionStartFaceDetectionResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema RekognitionStartFaceSearchRequest
 */
export interface RekognitionStartFaceSearchRequest {
  /**
   * @schema RekognitionStartFaceSearchRequest#Video
   */
  readonly video: RekognitionVideo;

  /**
   * @schema RekognitionStartFaceSearchRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RekognitionStartFaceSearchRequest#FaceMatchThreshold
   */
  readonly faceMatchThreshold?: number;

  /**
   * @schema RekognitionStartFaceSearchRequest#CollectionId
   */
  readonly collectionId: string;

  /**
   * @schema RekognitionStartFaceSearchRequest#NotificationChannel
   */
  readonly notificationChannel?: RekognitionNotificationChannel;

  /**
   * @schema RekognitionStartFaceSearchRequest#JobTag
   */
  readonly jobTag?: string;

}

/**
 * @schema RekognitionStartFaceSearchResponse
 */
export interface RekognitionStartFaceSearchResponse {
  /**
   * @schema RekognitionStartFaceSearchResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema RekognitionStartLabelDetectionRequest
 */
export interface RekognitionStartLabelDetectionRequest {
  /**
   * @schema RekognitionStartLabelDetectionRequest#Video
   */
  readonly video: RekognitionVideo;

  /**
   * @schema RekognitionStartLabelDetectionRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RekognitionStartLabelDetectionRequest#MinConfidence
   */
  readonly minConfidence?: number;

  /**
   * @schema RekognitionStartLabelDetectionRequest#NotificationChannel
   */
  readonly notificationChannel?: RekognitionNotificationChannel;

  /**
   * @schema RekognitionStartLabelDetectionRequest#JobTag
   */
  readonly jobTag?: string;

}

/**
 * @schema RekognitionStartLabelDetectionResponse
 */
export interface RekognitionStartLabelDetectionResponse {
  /**
   * @schema RekognitionStartLabelDetectionResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema RekognitionStartPersonTrackingRequest
 */
export interface RekognitionStartPersonTrackingRequest {
  /**
   * @schema RekognitionStartPersonTrackingRequest#Video
   */
  readonly video: RekognitionVideo;

  /**
   * @schema RekognitionStartPersonTrackingRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RekognitionStartPersonTrackingRequest#NotificationChannel
   */
  readonly notificationChannel?: RekognitionNotificationChannel;

  /**
   * @schema RekognitionStartPersonTrackingRequest#JobTag
   */
  readonly jobTag?: string;

}

/**
 * @schema RekognitionStartPersonTrackingResponse
 */
export interface RekognitionStartPersonTrackingResponse {
  /**
   * @schema RekognitionStartPersonTrackingResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema RekognitionStartProjectVersionRequest
 */
export interface RekognitionStartProjectVersionRequest {
  /**
   * @schema RekognitionStartProjectVersionRequest#ProjectVersionArn
   */
  readonly projectVersionArn: string;

  /**
   * @schema RekognitionStartProjectVersionRequest#MinInferenceUnits
   */
  readonly minInferenceUnits: number;

}

/**
 * @schema RekognitionStartProjectVersionResponse
 */
export interface RekognitionStartProjectVersionResponse {
  /**
   * @schema RekognitionStartProjectVersionResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema RekognitionStartSegmentDetectionRequest
 */
export interface RekognitionStartSegmentDetectionRequest {
  /**
   * @schema RekognitionStartSegmentDetectionRequest#Video
   */
  readonly video: RekognitionVideo;

  /**
   * @schema RekognitionStartSegmentDetectionRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RekognitionStartSegmentDetectionRequest#NotificationChannel
   */
  readonly notificationChannel?: RekognitionNotificationChannel;

  /**
   * @schema RekognitionStartSegmentDetectionRequest#JobTag
   */
  readonly jobTag?: string;

  /**
   * @schema RekognitionStartSegmentDetectionRequest#Filters
   */
  readonly filters?: RekognitionStartSegmentDetectionFilters;

  /**
   * @schema RekognitionStartSegmentDetectionRequest#SegmentTypes
   */
  readonly segmentTypes: string[];

}

/**
 * @schema RekognitionStartSegmentDetectionResponse
 */
export interface RekognitionStartSegmentDetectionResponse {
  /**
   * @schema RekognitionStartSegmentDetectionResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema RekognitionStartStreamProcessorRequest
 */
export interface RekognitionStartStreamProcessorRequest {
  /**
   * @schema RekognitionStartStreamProcessorRequest#Name
   */
  readonly name: string;

}

/**
 * @schema RekognitionStartStreamProcessorResponse
 */
export interface RekognitionStartStreamProcessorResponse {
}

/**
 * @schema RekognitionStartTextDetectionRequest
 */
export interface RekognitionStartTextDetectionRequest {
  /**
   * @schema RekognitionStartTextDetectionRequest#Video
   */
  readonly video: RekognitionVideo;

  /**
   * @schema RekognitionStartTextDetectionRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema RekognitionStartTextDetectionRequest#NotificationChannel
   */
  readonly notificationChannel?: RekognitionNotificationChannel;

  /**
   * @schema RekognitionStartTextDetectionRequest#JobTag
   */
  readonly jobTag?: string;

  /**
   * @schema RekognitionStartTextDetectionRequest#Filters
   */
  readonly filters?: RekognitionStartTextDetectionFilters;

}

/**
 * @schema RekognitionStartTextDetectionResponse
 */
export interface RekognitionStartTextDetectionResponse {
  /**
   * @schema RekognitionStartTextDetectionResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema RekognitionStopProjectVersionRequest
 */
export interface RekognitionStopProjectVersionRequest {
  /**
   * @schema RekognitionStopProjectVersionRequest#ProjectVersionArn
   */
  readonly projectVersionArn: string;

}

/**
 * @schema RekognitionStopProjectVersionResponse
 */
export interface RekognitionStopProjectVersionResponse {
  /**
   * @schema RekognitionStopProjectVersionResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema RekognitionStopStreamProcessorRequest
 */
export interface RekognitionStopStreamProcessorRequest {
  /**
   * @schema RekognitionStopStreamProcessorRequest#Name
   */
  readonly name: string;

}

/**
 * @schema RekognitionStopStreamProcessorResponse
 */
export interface RekognitionStopStreamProcessorResponse {
}

/**
 * @schema RekognitionImage
 */
export interface RekognitionImage {
  /**
   * @schema RekognitionImage#Bytes
   */
  readonly bytes?: any;

  /**
   * @schema RekognitionImage#S3Object
   */
  readonly s3Object?: RekognitionS3Object;

}

/**
 * @schema RekognitionComparedSourceImageFace
 */
export interface RekognitionComparedSourceImageFace {
  /**
   * @schema RekognitionComparedSourceImageFace#BoundingBox
   */
  readonly boundingBox?: RekognitionBoundingBox;

  /**
   * @schema RekognitionComparedSourceImageFace#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema RekognitionCompareFacesMatch
 */
export interface RekognitionCompareFacesMatch {
  /**
   * @schema RekognitionCompareFacesMatch#Similarity
   */
  readonly similarity?: number;

  /**
   * @schema RekognitionCompareFacesMatch#Face
   */
  readonly face?: RekognitionComparedFace;

}

/**
 * @schema RekognitionComparedFace
 */
export interface RekognitionComparedFace {
  /**
   * @schema RekognitionComparedFace#BoundingBox
   */
  readonly boundingBox?: RekognitionBoundingBox;

  /**
   * @schema RekognitionComparedFace#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema RekognitionComparedFace#Landmarks
   */
  readonly landmarks?: RekognitionLandmark[];

  /**
   * @schema RekognitionComparedFace#Pose
   */
  readonly pose?: RekognitionPose;

  /**
   * @schema RekognitionComparedFace#Quality
   */
  readonly quality?: RekognitionImageQuality;

}

/**
 * @schema RekognitionOutputConfig
 */
export interface RekognitionOutputConfig {
  /**
   * @schema RekognitionOutputConfig#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema RekognitionOutputConfig#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

}

/**
 * @schema RekognitionTrainingData
 */
export interface RekognitionTrainingData {
  /**
   * @schema RekognitionTrainingData#Assets
   */
  readonly assets?: RekognitionAsset[];

}

/**
 * @schema RekognitionTestingData
 */
export interface RekognitionTestingData {
  /**
   * @schema RekognitionTestingData#Assets
   */
  readonly assets?: RekognitionAsset[];

  /**
   * @schema RekognitionTestingData#AutoCreate
   */
  readonly autoCreate?: boolean;

}

/**
 * @schema RekognitionStreamProcessorInput
 */
export interface RekognitionStreamProcessorInput {
  /**
   * @schema RekognitionStreamProcessorInput#KinesisVideoStream
   */
  readonly kinesisVideoStream?: RekognitionKinesisVideoStream;

}

/**
 * @schema RekognitionStreamProcessorOutput
 */
export interface RekognitionStreamProcessorOutput {
  /**
   * @schema RekognitionStreamProcessorOutput#KinesisDataStream
   */
  readonly kinesisDataStream?: RekognitionKinesisDataStream;

}

/**
 * @schema RekognitionStreamProcessorSettings
 */
export interface RekognitionStreamProcessorSettings {
  /**
   * @schema RekognitionStreamProcessorSettings#FaceSearch
   */
  readonly faceSearch?: RekognitionFaceSearchSettings;

}

/**
 * @schema RekognitionProjectVersionDescription
 */
export interface RekognitionProjectVersionDescription {
  /**
   * @schema RekognitionProjectVersionDescription#ProjectVersionArn
   */
  readonly projectVersionArn?: string;

  /**
   * @schema RekognitionProjectVersionDescription#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema RekognitionProjectVersionDescription#MinInferenceUnits
   */
  readonly minInferenceUnits?: number;

  /**
   * @schema RekognitionProjectVersionDescription#Status
   */
  readonly status?: string;

  /**
   * @schema RekognitionProjectVersionDescription#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema RekognitionProjectVersionDescription#BillableTrainingTimeInSeconds
   */
  readonly billableTrainingTimeInSeconds?: number;

  /**
   * @schema RekognitionProjectVersionDescription#TrainingEndTimestamp
   */
  readonly trainingEndTimestamp?: string;

  /**
   * @schema RekognitionProjectVersionDescription#OutputConfig
   */
  readonly outputConfig?: RekognitionOutputConfig;

  /**
   * @schema RekognitionProjectVersionDescription#TrainingDataResult
   */
  readonly trainingDataResult?: RekognitionTrainingDataResult;

  /**
   * @schema RekognitionProjectVersionDescription#TestingDataResult
   */
  readonly testingDataResult?: RekognitionTestingDataResult;

  /**
   * @schema RekognitionProjectVersionDescription#EvaluationResult
   */
  readonly evaluationResult?: RekognitionEvaluationResult;

  /**
   * @schema RekognitionProjectVersionDescription#ManifestSummary
   */
  readonly manifestSummary?: RekognitionGroundTruthManifest;

}

/**
 * @schema RekognitionProjectDescription
 */
export interface RekognitionProjectDescription {
  /**
   * @schema RekognitionProjectDescription#ProjectArn
   */
  readonly projectArn?: string;

  /**
   * @schema RekognitionProjectDescription#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema RekognitionProjectDescription#Status
   */
  readonly status?: string;

}

/**
 * @schema RekognitionCustomLabel
 */
export interface RekognitionCustomLabel {
  /**
   * @schema RekognitionCustomLabel#Name
   */
  readonly name?: string;

  /**
   * @schema RekognitionCustomLabel#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema RekognitionCustomLabel#Geometry
   */
  readonly geometry?: RekognitionGeometry;

}

/**
 * @schema RekognitionFaceDetail
 */
export interface RekognitionFaceDetail {
  /**
   * @schema RekognitionFaceDetail#BoundingBox
   */
  readonly boundingBox?: RekognitionBoundingBox;

  /**
   * @schema RekognitionFaceDetail#AgeRange
   */
  readonly ageRange?: RekognitionAgeRange;

  /**
   * @schema RekognitionFaceDetail#Smile
   */
  readonly smile?: RekognitionSmile;

  /**
   * @schema RekognitionFaceDetail#Eyeglasses
   */
  readonly eyeglasses?: RekognitionEyeglasses;

  /**
   * @schema RekognitionFaceDetail#Sunglasses
   */
  readonly sunglasses?: RekognitionSunglasses;

  /**
   * @schema RekognitionFaceDetail#Gender
   */
  readonly gender?: RekognitionGender;

  /**
   * @schema RekognitionFaceDetail#Beard
   */
  readonly beard?: RekognitionBeard;

  /**
   * @schema RekognitionFaceDetail#Mustache
   */
  readonly mustache?: RekognitionMustache;

  /**
   * @schema RekognitionFaceDetail#EyesOpen
   */
  readonly eyesOpen?: RekognitionEyeOpen;

  /**
   * @schema RekognitionFaceDetail#MouthOpen
   */
  readonly mouthOpen?: RekognitionMouthOpen;

  /**
   * @schema RekognitionFaceDetail#Emotions
   */
  readonly emotions?: RekognitionEmotion[];

  /**
   * @schema RekognitionFaceDetail#Landmarks
   */
  readonly landmarks?: RekognitionLandmark[];

  /**
   * @schema RekognitionFaceDetail#Pose
   */
  readonly pose?: RekognitionPose;

  /**
   * @schema RekognitionFaceDetail#Quality
   */
  readonly quality?: RekognitionImageQuality;

  /**
   * @schema RekognitionFaceDetail#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema RekognitionLabel
 */
export interface RekognitionLabel {
  /**
   * @schema RekognitionLabel#Name
   */
  readonly name?: string;

  /**
   * @schema RekognitionLabel#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema RekognitionLabel#Instances
   */
  readonly instances?: RekognitionInstance[];

  /**
   * @schema RekognitionLabel#Parents
   */
  readonly parents?: RekognitionParent[];

}

/**
 * @schema RekognitionHumanLoopConfig
 */
export interface RekognitionHumanLoopConfig {
  /**
   * @schema RekognitionHumanLoopConfig#HumanLoopName
   */
  readonly humanLoopName: string;

  /**
   * @schema RekognitionHumanLoopConfig#FlowDefinitionArn
   */
  readonly flowDefinitionArn: string;

  /**
   * @schema RekognitionHumanLoopConfig#DataAttributes
   */
  readonly dataAttributes?: RekognitionHumanLoopDataAttributes;

}

/**
 * @schema RekognitionModerationLabel
 */
export interface RekognitionModerationLabel {
  /**
   * @schema RekognitionModerationLabel#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema RekognitionModerationLabel#Name
   */
  readonly name?: string;

  /**
   * @schema RekognitionModerationLabel#ParentName
   */
  readonly parentName?: string;

}

/**
 * @schema RekognitionHumanLoopActivationOutput
 */
export interface RekognitionHumanLoopActivationOutput {
  /**
   * @schema RekognitionHumanLoopActivationOutput#HumanLoopArn
   */
  readonly humanLoopArn?: string;

  /**
   * @schema RekognitionHumanLoopActivationOutput#HumanLoopActivationReasons
   */
  readonly humanLoopActivationReasons?: string[];

  /**
   * @schema RekognitionHumanLoopActivationOutput#HumanLoopActivationConditionsEvaluationResults
   */
  readonly humanLoopActivationConditionsEvaluationResults?: string;

}

/**
 * @schema RekognitionProtectiveEquipmentSummarizationAttributes
 */
export interface RekognitionProtectiveEquipmentSummarizationAttributes {
  /**
   * @schema RekognitionProtectiveEquipmentSummarizationAttributes#MinConfidence
   */
  readonly minConfidence: number;

  /**
   * @schema RekognitionProtectiveEquipmentSummarizationAttributes#RequiredEquipmentTypes
   */
  readonly requiredEquipmentTypes: string[];

}

/**
 * @schema RekognitionProtectiveEquipmentPerson
 */
export interface RekognitionProtectiveEquipmentPerson {
  /**
   * @schema RekognitionProtectiveEquipmentPerson#BodyParts
   */
  readonly bodyParts?: RekognitionProtectiveEquipmentBodyPart[];

  /**
   * @schema RekognitionProtectiveEquipmentPerson#BoundingBox
   */
  readonly boundingBox?: RekognitionBoundingBox;

  /**
   * @schema RekognitionProtectiveEquipmentPerson#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema RekognitionProtectiveEquipmentPerson#Id
   */
  readonly id?: number;

}

/**
 * @schema RekognitionProtectiveEquipmentSummary
 */
export interface RekognitionProtectiveEquipmentSummary {
  /**
   * @schema RekognitionProtectiveEquipmentSummary#PersonsWithRequiredEquipment
   */
  readonly personsWithRequiredEquipment?: number[];

  /**
   * @schema RekognitionProtectiveEquipmentSummary#PersonsWithoutRequiredEquipment
   */
  readonly personsWithoutRequiredEquipment?: number[];

  /**
   * @schema RekognitionProtectiveEquipmentSummary#PersonsIndeterminate
   */
  readonly personsIndeterminate?: number[];

}

/**
 * @schema RekognitionDetectTextFilters
 */
export interface RekognitionDetectTextFilters {
  /**
   * @schema RekognitionDetectTextFilters#WordFilter
   */
  readonly wordFilter?: RekognitionDetectionFilter;

  /**
   * @schema RekognitionDetectTextFilters#RegionsOfInterest
   */
  readonly regionsOfInterest?: RekognitionRegionOfInterest[];

}

/**
 * @schema RekognitionTextDetection
 */
export interface RekognitionTextDetection {
  /**
   * @schema RekognitionTextDetection#DetectedText
   */
  readonly detectedText?: string;

  /**
   * @schema RekognitionTextDetection#Type
   */
  readonly type?: string;

  /**
   * @schema RekognitionTextDetection#Id
   */
  readonly id?: number;

  /**
   * @schema RekognitionTextDetection#ParentId
   */
  readonly parentId?: number;

  /**
   * @schema RekognitionTextDetection#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema RekognitionTextDetection#Geometry
   */
  readonly geometry?: RekognitionGeometry;

}

/**
 * @schema RekognitionVideoMetadata
 */
export interface RekognitionVideoMetadata {
  /**
   * @schema RekognitionVideoMetadata#Codec
   */
  readonly codec?: string;

  /**
   * @schema RekognitionVideoMetadata#DurationMillis
   */
  readonly durationMillis?: number;

  /**
   * @schema RekognitionVideoMetadata#Format
   */
  readonly format?: string;

  /**
   * @schema RekognitionVideoMetadata#FrameRate
   */
  readonly frameRate?: number;

  /**
   * @schema RekognitionVideoMetadata#FrameHeight
   */
  readonly frameHeight?: number;

  /**
   * @schema RekognitionVideoMetadata#FrameWidth
   */
  readonly frameWidth?: number;

}

/**
 * @schema RekognitionCelebrityRecognition
 */
export interface RekognitionCelebrityRecognition {
  /**
   * @schema RekognitionCelebrityRecognition#Timestamp
   */
  readonly timestamp?: number;

  /**
   * @schema RekognitionCelebrityRecognition#Celebrity
   */
  readonly celebrity?: RekognitionCelebrityDetail;

}

/**
 * @schema RekognitionContentModerationDetection
 */
export interface RekognitionContentModerationDetection {
  /**
   * @schema RekognitionContentModerationDetection#Timestamp
   */
  readonly timestamp?: number;

  /**
   * @schema RekognitionContentModerationDetection#ModerationLabel
   */
  readonly moderationLabel?: RekognitionModerationLabel;

}

/**
 * @schema RekognitionFaceDetection
 */
export interface RekognitionFaceDetection {
  /**
   * @schema RekognitionFaceDetection#Timestamp
   */
  readonly timestamp?: number;

  /**
   * @schema RekognitionFaceDetection#Face
   */
  readonly face?: RekognitionFaceDetail;

}

/**
 * @schema RekognitionPersonMatch
 */
export interface RekognitionPersonMatch {
  /**
   * @schema RekognitionPersonMatch#Timestamp
   */
  readonly timestamp?: number;

  /**
   * @schema RekognitionPersonMatch#Person
   */
  readonly person?: RekognitionPersonDetail;

  /**
   * @schema RekognitionPersonMatch#FaceMatches
   */
  readonly faceMatches?: RekognitionFaceMatch[];

}

/**
 * @schema RekognitionLabelDetection
 */
export interface RekognitionLabelDetection {
  /**
   * @schema RekognitionLabelDetection#Timestamp
   */
  readonly timestamp?: number;

  /**
   * @schema RekognitionLabelDetection#Label
   */
  readonly label?: RekognitionLabel;

}

/**
 * @schema RekognitionPersonDetection
 */
export interface RekognitionPersonDetection {
  /**
   * @schema RekognitionPersonDetection#Timestamp
   */
  readonly timestamp?: number;

  /**
   * @schema RekognitionPersonDetection#Person
   */
  readonly person?: RekognitionPersonDetail;

}

/**
 * @schema RekognitionAudioMetadata
 */
export interface RekognitionAudioMetadata {
  /**
   * @schema RekognitionAudioMetadata#Codec
   */
  readonly codec?: string;

  /**
   * @schema RekognitionAudioMetadata#DurationMillis
   */
  readonly durationMillis?: number;

  /**
   * @schema RekognitionAudioMetadata#SampleRate
   */
  readonly sampleRate?: number;

  /**
   * @schema RekognitionAudioMetadata#NumberOfChannels
   */
  readonly numberOfChannels?: number;

}

/**
 * @schema RekognitionSegmentDetection
 */
export interface RekognitionSegmentDetection {
  /**
   * @schema RekognitionSegmentDetection#Type
   */
  readonly type?: string;

  /**
   * @schema RekognitionSegmentDetection#StartTimestampMillis
   */
  readonly startTimestampMillis?: number;

  /**
   * @schema RekognitionSegmentDetection#EndTimestampMillis
   */
  readonly endTimestampMillis?: number;

  /**
   * @schema RekognitionSegmentDetection#DurationMillis
   */
  readonly durationMillis?: number;

  /**
   * @schema RekognitionSegmentDetection#StartTimecodeSMPTE
   */
  readonly startTimecodeSmpte?: string;

  /**
   * @schema RekognitionSegmentDetection#EndTimecodeSMPTE
   */
  readonly endTimecodeSmpte?: string;

  /**
   * @schema RekognitionSegmentDetection#DurationSMPTE
   */
  readonly durationSmpte?: string;

  /**
   * @schema RekognitionSegmentDetection#TechnicalCueSegment
   */
  readonly technicalCueSegment?: RekognitionTechnicalCueSegment;

  /**
   * @schema RekognitionSegmentDetection#ShotSegment
   */
  readonly shotSegment?: RekognitionShotSegment;

}

/**
 * @schema RekognitionSegmentTypeInfo
 */
export interface RekognitionSegmentTypeInfo {
  /**
   * @schema RekognitionSegmentTypeInfo#Type
   */
  readonly type?: string;

  /**
   * @schema RekognitionSegmentTypeInfo#ModelVersion
   */
  readonly modelVersion?: string;

}

/**
 * @schema RekognitionTextDetectionResult
 */
export interface RekognitionTextDetectionResult {
  /**
   * @schema RekognitionTextDetectionResult#Timestamp
   */
  readonly timestamp?: number;

  /**
   * @schema RekognitionTextDetectionResult#TextDetection
   */
  readonly textDetection?: RekognitionTextDetection;

}

/**
 * @schema RekognitionFaceRecord
 */
export interface RekognitionFaceRecord {
  /**
   * @schema RekognitionFaceRecord#Face
   */
  readonly face?: RekognitionFace;

  /**
   * @schema RekognitionFaceRecord#FaceDetail
   */
  readonly faceDetail?: RekognitionFaceDetail;

}

/**
 * @schema RekognitionUnindexedFace
 */
export interface RekognitionUnindexedFace {
  /**
   * @schema RekognitionUnindexedFace#Reasons
   */
  readonly reasons?: string[];

  /**
   * @schema RekognitionUnindexedFace#FaceDetail
   */
  readonly faceDetail?: RekognitionFaceDetail;

}

/**
 * @schema RekognitionFace
 */
export interface RekognitionFace {
  /**
   * @schema RekognitionFace#FaceId
   */
  readonly faceId?: string;

  /**
   * @schema RekognitionFace#BoundingBox
   */
  readonly boundingBox?: RekognitionBoundingBox;

  /**
   * @schema RekognitionFace#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema RekognitionFace#ExternalImageId
   */
  readonly externalImageId?: string;

  /**
   * @schema RekognitionFace#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema RekognitionStreamProcessor
 */
export interface RekognitionStreamProcessor {
  /**
   * @schema RekognitionStreamProcessor#Name
   */
  readonly name?: string;

  /**
   * @schema RekognitionStreamProcessor#Status
   */
  readonly status?: string;

}

/**
 * @schema RekognitionCelebrity
 */
export interface RekognitionCelebrity {
  /**
   * @schema RekognitionCelebrity#Urls
   */
  readonly urls?: string[];

  /**
   * @schema RekognitionCelebrity#Name
   */
  readonly name?: string;

  /**
   * @schema RekognitionCelebrity#Id
   */
  readonly id?: string;

  /**
   * @schema RekognitionCelebrity#Face
   */
  readonly face?: RekognitionComparedFace;

  /**
   * @schema RekognitionCelebrity#MatchConfidence
   */
  readonly matchConfidence?: number;

}

/**
 * @schema RekognitionFaceMatch
 */
export interface RekognitionFaceMatch {
  /**
   * @schema RekognitionFaceMatch#Similarity
   */
  readonly similarity?: number;

  /**
   * @schema RekognitionFaceMatch#Face
   */
  readonly face?: RekognitionFace;

}

/**
 * @schema RekognitionBoundingBox
 */
export interface RekognitionBoundingBox {
  /**
   * @schema RekognitionBoundingBox#Width
   */
  readonly width?: number;

  /**
   * @schema RekognitionBoundingBox#Height
   */
  readonly height?: number;

  /**
   * @schema RekognitionBoundingBox#Left
   */
  readonly left?: number;

  /**
   * @schema RekognitionBoundingBox#Top
   */
  readonly top?: number;

}

/**
 * @schema RekognitionVideo
 */
export interface RekognitionVideo {
  /**
   * @schema RekognitionVideo#S3Object
   */
  readonly s3Object?: RekognitionS3Object;

}

/**
 * @schema RekognitionNotificationChannel
 */
export interface RekognitionNotificationChannel {
  /**
   * @schema RekognitionNotificationChannel#SNSTopicArn
   */
  readonly snsTopicArn: string;

  /**
   * @schema RekognitionNotificationChannel#RoleArn
   */
  readonly roleArn: string;

}

/**
 * @schema RekognitionStartSegmentDetectionFilters
 */
export interface RekognitionStartSegmentDetectionFilters {
  /**
   * @schema RekognitionStartSegmentDetectionFilters#TechnicalCueFilter
   */
  readonly technicalCueFilter?: RekognitionStartTechnicalCueDetectionFilter;

  /**
   * @schema RekognitionStartSegmentDetectionFilters#ShotFilter
   */
  readonly shotFilter?: RekognitionStartShotDetectionFilter;

}

/**
 * @schema RekognitionStartTextDetectionFilters
 */
export interface RekognitionStartTextDetectionFilters {
  /**
   * @schema RekognitionStartTextDetectionFilters#WordFilter
   */
  readonly wordFilter?: RekognitionDetectionFilter;

  /**
   * @schema RekognitionStartTextDetectionFilters#RegionsOfInterest
   */
  readonly regionsOfInterest?: RekognitionRegionOfInterest[];

}

/**
 * @schema RekognitionS3Object
 */
export interface RekognitionS3Object {
  /**
   * @schema RekognitionS3Object#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema RekognitionS3Object#Name
   */
  readonly name?: string;

  /**
   * @schema RekognitionS3Object#Version
   */
  readonly version?: string;

}

/**
 * @schema RekognitionLandmark
 */
export interface RekognitionLandmark {
  /**
   * @schema RekognitionLandmark#Type
   */
  readonly type?: string;

  /**
   * @schema RekognitionLandmark#X
   */
  readonly x?: number;

  /**
   * @schema RekognitionLandmark#Y
   */
  readonly y?: number;

}

/**
 * @schema RekognitionPose
 */
export interface RekognitionPose {
  /**
   * @schema RekognitionPose#Roll
   */
  readonly roll?: number;

  /**
   * @schema RekognitionPose#Yaw
   */
  readonly yaw?: number;

  /**
   * @schema RekognitionPose#Pitch
   */
  readonly pitch?: number;

}

/**
 * @schema RekognitionImageQuality
 */
export interface RekognitionImageQuality {
  /**
   * @schema RekognitionImageQuality#Brightness
   */
  readonly brightness?: number;

  /**
   * @schema RekognitionImageQuality#Sharpness
   */
  readonly sharpness?: number;

}

/**
 * @schema RekognitionAsset
 */
export interface RekognitionAsset {
  /**
   * @schema RekognitionAsset#GroundTruthManifest
   */
  readonly groundTruthManifest?: RekognitionGroundTruthManifest;

}

/**
 * @schema RekognitionKinesisVideoStream
 */
export interface RekognitionKinesisVideoStream {
  /**
   * @schema RekognitionKinesisVideoStream#Arn
   */
  readonly arn?: string;

}

/**
 * @schema RekognitionKinesisDataStream
 */
export interface RekognitionKinesisDataStream {
  /**
   * @schema RekognitionKinesisDataStream#Arn
   */
  readonly arn?: string;

}

/**
 * @schema RekognitionFaceSearchSettings
 */
export interface RekognitionFaceSearchSettings {
  /**
   * @schema RekognitionFaceSearchSettings#CollectionId
   */
  readonly collectionId?: string;

  /**
   * @schema RekognitionFaceSearchSettings#FaceMatchThreshold
   */
  readonly faceMatchThreshold?: number;

}

/**
 * @schema RekognitionTrainingDataResult
 */
export interface RekognitionTrainingDataResult {
  /**
   * @schema RekognitionTrainingDataResult#Input
   */
  readonly input?: RekognitionTrainingData;

  /**
   * @schema RekognitionTrainingDataResult#Output
   */
  readonly output?: RekognitionTrainingData;

  /**
   * @schema RekognitionTrainingDataResult#Validation
   */
  readonly validation?: RekognitionValidationData;

}

/**
 * @schema RekognitionTestingDataResult
 */
export interface RekognitionTestingDataResult {
  /**
   * @schema RekognitionTestingDataResult#Input
   */
  readonly input?: RekognitionTestingData;

  /**
   * @schema RekognitionTestingDataResult#Output
   */
  readonly output?: RekognitionTestingData;

  /**
   * @schema RekognitionTestingDataResult#Validation
   */
  readonly validation?: RekognitionValidationData;

}

/**
 * @schema RekognitionEvaluationResult
 */
export interface RekognitionEvaluationResult {
  /**
   * @schema RekognitionEvaluationResult#F1Score
   */
  readonly f1Score?: number;

  /**
   * @schema RekognitionEvaluationResult#Summary
   */
  readonly summary?: RekognitionSummary;

}

/**
 * @schema RekognitionGroundTruthManifest
 */
export interface RekognitionGroundTruthManifest {
  /**
   * @schema RekognitionGroundTruthManifest#S3Object
   */
  readonly s3Object?: RekognitionS3Object;

}

/**
 * @schema RekognitionGeometry
 */
export interface RekognitionGeometry {
  /**
   * @schema RekognitionGeometry#BoundingBox
   */
  readonly boundingBox?: RekognitionBoundingBox;

  /**
   * @schema RekognitionGeometry#Polygon
   */
  readonly polygon?: RekognitionPoint[];

}

/**
 * @schema RekognitionAgeRange
 */
export interface RekognitionAgeRange {
  /**
   * @schema RekognitionAgeRange#Low
   */
  readonly low?: number;

  /**
   * @schema RekognitionAgeRange#High
   */
  readonly high?: number;

}

/**
 * @schema RekognitionSmile
 */
export interface RekognitionSmile {
  /**
   * @schema RekognitionSmile#Value
   */
  readonly value?: boolean;

  /**
   * @schema RekognitionSmile#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema RekognitionEyeglasses
 */
export interface RekognitionEyeglasses {
  /**
   * @schema RekognitionEyeglasses#Value
   */
  readonly value?: boolean;

  /**
   * @schema RekognitionEyeglasses#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema RekognitionSunglasses
 */
export interface RekognitionSunglasses {
  /**
   * @schema RekognitionSunglasses#Value
   */
  readonly value?: boolean;

  /**
   * @schema RekognitionSunglasses#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema RekognitionGender
 */
export interface RekognitionGender {
  /**
   * @schema RekognitionGender#Value
   */
  readonly value?: string;

  /**
   * @schema RekognitionGender#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema RekognitionBeard
 */
export interface RekognitionBeard {
  /**
   * @schema RekognitionBeard#Value
   */
  readonly value?: boolean;

  /**
   * @schema RekognitionBeard#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema RekognitionMustache
 */
export interface RekognitionMustache {
  /**
   * @schema RekognitionMustache#Value
   */
  readonly value?: boolean;

  /**
   * @schema RekognitionMustache#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema RekognitionEyeOpen
 */
export interface RekognitionEyeOpen {
  /**
   * @schema RekognitionEyeOpen#Value
   */
  readonly value?: boolean;

  /**
   * @schema RekognitionEyeOpen#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema RekognitionMouthOpen
 */
export interface RekognitionMouthOpen {
  /**
   * @schema RekognitionMouthOpen#Value
   */
  readonly value?: boolean;

  /**
   * @schema RekognitionMouthOpen#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema RekognitionEmotion
 */
export interface RekognitionEmotion {
  /**
   * @schema RekognitionEmotion#Type
   */
  readonly type?: string;

  /**
   * @schema RekognitionEmotion#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema RekognitionInstance
 */
export interface RekognitionInstance {
  /**
   * @schema RekognitionInstance#BoundingBox
   */
  readonly boundingBox?: RekognitionBoundingBox;

  /**
   * @schema RekognitionInstance#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema RekognitionParent
 */
export interface RekognitionParent {
  /**
   * @schema RekognitionParent#Name
   */
  readonly name?: string;

}

/**
 * @schema RekognitionHumanLoopDataAttributes
 */
export interface RekognitionHumanLoopDataAttributes {
  /**
   * @schema RekognitionHumanLoopDataAttributes#ContentClassifiers
   */
  readonly contentClassifiers?: string[];

}

/**
 * @schema RekognitionProtectiveEquipmentBodyPart
 */
export interface RekognitionProtectiveEquipmentBodyPart {
  /**
   * @schema RekognitionProtectiveEquipmentBodyPart#Name
   */
  readonly name?: string;

  /**
   * @schema RekognitionProtectiveEquipmentBodyPart#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema RekognitionProtectiveEquipmentBodyPart#EquipmentDetections
   */
  readonly equipmentDetections?: RekognitionEquipmentDetection[];

}

/**
 * @schema RekognitionDetectionFilter
 */
export interface RekognitionDetectionFilter {
  /**
   * @schema RekognitionDetectionFilter#MinConfidence
   */
  readonly minConfidence?: number;

  /**
   * @schema RekognitionDetectionFilter#MinBoundingBoxHeight
   */
  readonly minBoundingBoxHeight?: number;

  /**
   * @schema RekognitionDetectionFilter#MinBoundingBoxWidth
   */
  readonly minBoundingBoxWidth?: number;

}

/**
 * @schema RekognitionRegionOfInterest
 */
export interface RekognitionRegionOfInterest {
  /**
   * @schema RekognitionRegionOfInterest#BoundingBox
   */
  readonly boundingBox?: RekognitionBoundingBox;

}

/**
 * @schema RekognitionCelebrityDetail
 */
export interface RekognitionCelebrityDetail {
  /**
   * @schema RekognitionCelebrityDetail#Urls
   */
  readonly urls?: string[];

  /**
   * @schema RekognitionCelebrityDetail#Name
   */
  readonly name?: string;

  /**
   * @schema RekognitionCelebrityDetail#Id
   */
  readonly id?: string;

  /**
   * @schema RekognitionCelebrityDetail#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema RekognitionCelebrityDetail#BoundingBox
   */
  readonly boundingBox?: RekognitionBoundingBox;

  /**
   * @schema RekognitionCelebrityDetail#Face
   */
  readonly face?: RekognitionFaceDetail;

}

/**
 * @schema RekognitionPersonDetail
 */
export interface RekognitionPersonDetail {
  /**
   * @schema RekognitionPersonDetail#Index
   */
  readonly index?: number;

  /**
   * @schema RekognitionPersonDetail#BoundingBox
   */
  readonly boundingBox?: RekognitionBoundingBox;

  /**
   * @schema RekognitionPersonDetail#Face
   */
  readonly face?: RekognitionFaceDetail;

}

/**
 * @schema RekognitionTechnicalCueSegment
 */
export interface RekognitionTechnicalCueSegment {
  /**
   * @schema RekognitionTechnicalCueSegment#Type
   */
  readonly type?: string;

  /**
   * @schema RekognitionTechnicalCueSegment#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema RekognitionShotSegment
 */
export interface RekognitionShotSegment {
  /**
   * @schema RekognitionShotSegment#Index
   */
  readonly index?: number;

  /**
   * @schema RekognitionShotSegment#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema RekognitionStartTechnicalCueDetectionFilter
 */
export interface RekognitionStartTechnicalCueDetectionFilter {
  /**
   * @schema RekognitionStartTechnicalCueDetectionFilter#MinSegmentConfidence
   */
  readonly minSegmentConfidence?: number;

}

/**
 * @schema RekognitionStartShotDetectionFilter
 */
export interface RekognitionStartShotDetectionFilter {
  /**
   * @schema RekognitionStartShotDetectionFilter#MinSegmentConfidence
   */
  readonly minSegmentConfidence?: number;

}

/**
 * @schema RekognitionValidationData
 */
export interface RekognitionValidationData {
  /**
   * @schema RekognitionValidationData#Assets
   */
  readonly assets?: RekognitionAsset[];

}

/**
 * @schema RekognitionSummary
 */
export interface RekognitionSummary {
  /**
   * @schema RekognitionSummary#S3Object
   */
  readonly s3Object?: RekognitionS3Object;

}

/**
 * @schema RekognitionPoint
 */
export interface RekognitionPoint {
  /**
   * @schema RekognitionPoint#X
   */
  readonly x?: number;

  /**
   * @schema RekognitionPoint#Y
   */
  readonly y?: number;

}

/**
 * @schema RekognitionEquipmentDetection
 */
export interface RekognitionEquipmentDetection {
  /**
   * @schema RekognitionEquipmentDetection#BoundingBox
   */
  readonly boundingBox?: RekognitionBoundingBox;

  /**
   * @schema RekognitionEquipmentDetection#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema RekognitionEquipmentDetection#Type
   */
  readonly type?: string;

  /**
   * @schema RekognitionEquipmentDetection#CoversBodyPart
   */
  readonly coversBodyPart?: RekognitionCoversBodyPart;

}

/**
 * @schema RekognitionCoversBodyPart
 */
export interface RekognitionCoversBodyPart {
  /**
   * @schema RekognitionCoversBodyPart#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema RekognitionCoversBodyPart#Value
   */
  readonly value?: boolean;

}
