/**
 * @schema CompareFacesRequest
 */
export interface CompareFacesRequest {
  /**
   * @schema CompareFacesRequest#SourceImage
   */
  readonly sourceImage: Image;

  /**
   * @schema CompareFacesRequest#TargetImage
   */
  readonly targetImage: Image;

  /**
   * @schema CompareFacesRequest#SimilarityThreshold
   */
  readonly similarityThreshold?: number;

  /**
   * @schema CompareFacesRequest#QualityFilter
   */
  readonly qualityFilter?: string;

}

/**
 * @schema CompareFacesResponse
 */
export interface CompareFacesResponse {
  /**
   * @schema CompareFacesResponse#SourceImageFace
   */
  readonly sourceImageFace?: ComparedSourceImageFace;

  /**
   * @schema CompareFacesResponse#FaceMatches
   */
  readonly faceMatches?: CompareFacesMatch[];

  /**
   * @schema CompareFacesResponse#UnmatchedFaces
   */
  readonly unmatchedFaces?: ComparedFace[];

  /**
   * @schema CompareFacesResponse#SourceImageOrientationCorrection
   */
  readonly sourceImageOrientationCorrection?: string;

  /**
   * @schema CompareFacesResponse#TargetImageOrientationCorrection
   */
  readonly targetImageOrientationCorrection?: string;

}

/**
 * @schema CreateCollectionRequest
 */
export interface CreateCollectionRequest {
  /**
   * @schema CreateCollectionRequest#CollectionId
   */
  readonly collectionId: string;

}

/**
 * @schema CreateCollectionResponse
 */
export interface CreateCollectionResponse {
  /**
   * @schema CreateCollectionResponse#StatusCode
   */
  readonly statusCode?: number;

  /**
   * @schema CreateCollectionResponse#CollectionArn
   */
  readonly collectionArn?: string;

  /**
   * @schema CreateCollectionResponse#FaceModelVersion
   */
  readonly faceModelVersion?: string;

}

/**
 * @schema CreateProjectRequest
 */
export interface CreateProjectRequest {
  /**
   * @schema CreateProjectRequest#ProjectName
   */
  readonly projectName: string;

}

/**
 * @schema CreateProjectResponse
 */
export interface CreateProjectResponse {
  /**
   * @schema CreateProjectResponse#ProjectArn
   */
  readonly projectArn?: string;

}

/**
 * @schema CreateProjectVersionRequest
 */
export interface CreateProjectVersionRequest {
  /**
   * @schema CreateProjectVersionRequest#ProjectArn
   */
  readonly projectArn: string;

  /**
   * @schema CreateProjectVersionRequest#VersionName
   */
  readonly versionName: string;

  /**
   * @schema CreateProjectVersionRequest#OutputConfig
   */
  readonly outputConfig: OutputConfig;

  /**
   * @schema CreateProjectVersionRequest#TrainingData
   */
  readonly trainingData: TrainingData;

  /**
   * @schema CreateProjectVersionRequest#TestingData
   */
  readonly testingData: TestingData;

}

/**
 * @schema CreateProjectVersionResponse
 */
export interface CreateProjectVersionResponse {
  /**
   * @schema CreateProjectVersionResponse#ProjectVersionArn
   */
  readonly projectVersionArn?: string;

}

/**
 * @schema CreateStreamProcessorRequest
 */
export interface CreateStreamProcessorRequest {
  /**
   * @schema CreateStreamProcessorRequest#Input
   */
  readonly input: StreamProcessorInput;

  /**
   * @schema CreateStreamProcessorRequest#Output
   */
  readonly output: StreamProcessorOutput;

  /**
   * @schema CreateStreamProcessorRequest#Name
   */
  readonly name: string;

  /**
   * @schema CreateStreamProcessorRequest#Settings
   */
  readonly settings: StreamProcessorSettings;

  /**
   * @schema CreateStreamProcessorRequest#RoleArn
   */
  readonly roleArn: string;

}

/**
 * @schema CreateStreamProcessorResponse
 */
export interface CreateStreamProcessorResponse {
  /**
   * @schema CreateStreamProcessorResponse#StreamProcessorArn
   */
  readonly streamProcessorArn?: string;

}

/**
 * @schema DeleteCollectionRequest
 */
export interface DeleteCollectionRequest {
  /**
   * @schema DeleteCollectionRequest#CollectionId
   */
  readonly collectionId: string;

}

/**
 * @schema DeleteCollectionResponse
 */
export interface DeleteCollectionResponse {
  /**
   * @schema DeleteCollectionResponse#StatusCode
   */
  readonly statusCode?: number;

}

/**
 * @schema DeleteFacesRequest
 */
export interface DeleteFacesRequest {
  /**
   * @schema DeleteFacesRequest#CollectionId
   */
  readonly collectionId: string;

  /**
   * @schema DeleteFacesRequest#FaceIds
   */
  readonly faceIds: string[];

}

/**
 * @schema DeleteFacesResponse
 */
export interface DeleteFacesResponse {
  /**
   * @schema DeleteFacesResponse#DeletedFaces
   */
  readonly deletedFaces?: string[];

}

/**
 * @schema DeleteProjectRequest
 */
export interface DeleteProjectRequest {
  /**
   * @schema DeleteProjectRequest#ProjectArn
   */
  readonly projectArn: string;

}

/**
 * @schema DeleteProjectResponse
 */
export interface DeleteProjectResponse {
  /**
   * @schema DeleteProjectResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema DeleteProjectVersionRequest
 */
export interface DeleteProjectVersionRequest {
  /**
   * @schema DeleteProjectVersionRequest#ProjectVersionArn
   */
  readonly projectVersionArn: string;

}

/**
 * @schema DeleteProjectVersionResponse
 */
export interface DeleteProjectVersionResponse {
  /**
   * @schema DeleteProjectVersionResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema DeleteStreamProcessorRequest
 */
export interface DeleteStreamProcessorRequest {
  /**
   * @schema DeleteStreamProcessorRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DeleteStreamProcessorResponse
 */
export interface DeleteStreamProcessorResponse {
}

/**
 * @schema DescribeCollectionRequest
 */
export interface DescribeCollectionRequest {
  /**
   * @schema DescribeCollectionRequest#CollectionId
   */
  readonly collectionId: string;

}

/**
 * @schema DescribeCollectionResponse
 */
export interface DescribeCollectionResponse {
  /**
   * @schema DescribeCollectionResponse#FaceCount
   */
  readonly faceCount?: number;

  /**
   * @schema DescribeCollectionResponse#FaceModelVersion
   */
  readonly faceModelVersion?: string;

  /**
   * @schema DescribeCollectionResponse#CollectionARN
   */
  readonly collectionArn?: string;

  /**
   * @schema DescribeCollectionResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

}

/**
 * @schema DescribeProjectVersionsRequest
 */
export interface DescribeProjectVersionsRequest {
  /**
   * @schema DescribeProjectVersionsRequest#ProjectArn
   */
  readonly projectArn: string;

  /**
   * @schema DescribeProjectVersionsRequest#VersionNames
   */
  readonly versionNames?: string[];

  /**
   * @schema DescribeProjectVersionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeProjectVersionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeProjectVersionsResponse
 */
export interface DescribeProjectVersionsResponse {
  /**
   * @schema DescribeProjectVersionsResponse#ProjectVersionDescriptions
   */
  readonly projectVersionDescriptions?: ProjectVersionDescription[];

  /**
   * @schema DescribeProjectVersionsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeProjectsRequest
 */
export interface DescribeProjectsRequest {
  /**
   * @schema DescribeProjectsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema DescribeProjectsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema DescribeProjectsResponse
 */
export interface DescribeProjectsResponse {
  /**
   * @schema DescribeProjectsResponse#ProjectDescriptions
   */
  readonly projectDescriptions?: ProjectDescription[];

  /**
   * @schema DescribeProjectsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema DescribeStreamProcessorRequest
 */
export interface DescribeStreamProcessorRequest {
  /**
   * @schema DescribeStreamProcessorRequest#Name
   */
  readonly name: string;

}

/**
 * @schema DescribeStreamProcessorResponse
 */
export interface DescribeStreamProcessorResponse {
  /**
   * @schema DescribeStreamProcessorResponse#Name
   */
  readonly name?: string;

  /**
   * @schema DescribeStreamProcessorResponse#StreamProcessorArn
   */
  readonly streamProcessorArn?: string;

  /**
   * @schema DescribeStreamProcessorResponse#Status
   */
  readonly status?: string;

  /**
   * @schema DescribeStreamProcessorResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema DescribeStreamProcessorResponse#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema DescribeStreamProcessorResponse#LastUpdateTimestamp
   */
  readonly lastUpdateTimestamp?: string;

  /**
   * @schema DescribeStreamProcessorResponse#Input
   */
  readonly input?: StreamProcessorInput;

  /**
   * @schema DescribeStreamProcessorResponse#Output
   */
  readonly output?: StreamProcessorOutput;

  /**
   * @schema DescribeStreamProcessorResponse#RoleArn
   */
  readonly roleArn?: string;

  /**
   * @schema DescribeStreamProcessorResponse#Settings
   */
  readonly settings?: StreamProcessorSettings;

}

/**
 * @schema DetectCustomLabelsRequest
 */
export interface DetectCustomLabelsRequest {
  /**
   * @schema DetectCustomLabelsRequest#ProjectVersionArn
   */
  readonly projectVersionArn: string;

  /**
   * @schema DetectCustomLabelsRequest#Image
   */
  readonly image: Image;

  /**
   * @schema DetectCustomLabelsRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema DetectCustomLabelsRequest#MinConfidence
   */
  readonly minConfidence?: number;

}

/**
 * @schema DetectCustomLabelsResponse
 */
export interface DetectCustomLabelsResponse {
  /**
   * @schema DetectCustomLabelsResponse#CustomLabels
   */
  readonly customLabels?: CustomLabel[];

}

/**
 * @schema DetectFacesRequest
 */
export interface DetectFacesRequest {
  /**
   * @schema DetectFacesRequest#Image
   */
  readonly image: Image;

  /**
   * @schema DetectFacesRequest#Attributes
   */
  readonly attributes?: string[];

}

/**
 * @schema DetectFacesResponse
 */
export interface DetectFacesResponse {
  /**
   * @schema DetectFacesResponse#FaceDetails
   */
  readonly faceDetails?: FaceDetail[];

  /**
   * @schema DetectFacesResponse#OrientationCorrection
   */
  readonly orientationCorrection?: string;

}

/**
 * @schema DetectLabelsRequest
 */
export interface DetectLabelsRequest {
  /**
   * @schema DetectLabelsRequest#Image
   */
  readonly image: Image;

  /**
   * @schema DetectLabelsRequest#MaxLabels
   */
  readonly maxLabels?: number;

  /**
   * @schema DetectLabelsRequest#MinConfidence
   */
  readonly minConfidence?: number;

}

/**
 * @schema DetectLabelsResponse
 */
export interface DetectLabelsResponse {
  /**
   * @schema DetectLabelsResponse#Labels
   */
  readonly labels?: Label[];

  /**
   * @schema DetectLabelsResponse#OrientationCorrection
   */
  readonly orientationCorrection?: string;

  /**
   * @schema DetectLabelsResponse#LabelModelVersion
   */
  readonly labelModelVersion?: string;

}

/**
 * @schema DetectModerationLabelsRequest
 */
export interface DetectModerationLabelsRequest {
  /**
   * @schema DetectModerationLabelsRequest#Image
   */
  readonly image: Image;

  /**
   * @schema DetectModerationLabelsRequest#MinConfidence
   */
  readonly minConfidence?: number;

  /**
   * @schema DetectModerationLabelsRequest#HumanLoopConfig
   */
  readonly humanLoopConfig?: HumanLoopConfig;

}

/**
 * @schema DetectModerationLabelsResponse
 */
export interface DetectModerationLabelsResponse {
  /**
   * @schema DetectModerationLabelsResponse#ModerationLabels
   */
  readonly moderationLabels?: ModerationLabel[];

  /**
   * @schema DetectModerationLabelsResponse#ModerationModelVersion
   */
  readonly moderationModelVersion?: string;

  /**
   * @schema DetectModerationLabelsResponse#HumanLoopActivationOutput
   */
  readonly humanLoopActivationOutput?: HumanLoopActivationOutput;

}

/**
 * @schema DetectProtectiveEquipmentRequest
 */
export interface DetectProtectiveEquipmentRequest {
  /**
   * @schema DetectProtectiveEquipmentRequest#Image
   */
  readonly image: Image;

  /**
   * @schema DetectProtectiveEquipmentRequest#SummarizationAttributes
   */
  readonly summarizationAttributes?: ProtectiveEquipmentSummarizationAttributes;

}

/**
 * @schema DetectProtectiveEquipmentResponse
 */
export interface DetectProtectiveEquipmentResponse {
  /**
   * @schema DetectProtectiveEquipmentResponse#ProtectiveEquipmentModelVersion
   */
  readonly protectiveEquipmentModelVersion?: string;

  /**
   * @schema DetectProtectiveEquipmentResponse#Persons
   */
  readonly persons?: ProtectiveEquipmentPerson[];

  /**
   * @schema DetectProtectiveEquipmentResponse#Summary
   */
  readonly summary?: ProtectiveEquipmentSummary;

}

/**
 * @schema DetectTextRequest
 */
export interface DetectTextRequest {
  /**
   * @schema DetectTextRequest#Image
   */
  readonly image: Image;

  /**
   * @schema DetectTextRequest#Filters
   */
  readonly filters?: DetectTextFilters;

}

/**
 * @schema DetectTextResponse
 */
export interface DetectTextResponse {
  /**
   * @schema DetectTextResponse#TextDetections
   */
  readonly textDetections?: TextDetection[];

  /**
   * @schema DetectTextResponse#TextModelVersion
   */
  readonly textModelVersion?: string;

}

/**
 * @schema GetCelebrityInfoRequest
 */
export interface GetCelebrityInfoRequest {
  /**
   * @schema GetCelebrityInfoRequest#Id
   */
  readonly id: string;

}

/**
 * @schema GetCelebrityInfoResponse
 */
export interface GetCelebrityInfoResponse {
  /**
   * @schema GetCelebrityInfoResponse#Urls
   */
  readonly urls?: string[];

  /**
   * @schema GetCelebrityInfoResponse#Name
   */
  readonly name?: string;

}

/**
 * @schema GetCelebrityRecognitionRequest
 */
export interface GetCelebrityRecognitionRequest {
  /**
   * @schema GetCelebrityRecognitionRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema GetCelebrityRecognitionRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetCelebrityRecognitionRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetCelebrityRecognitionRequest#SortBy
   */
  readonly sortBy?: string;

}

/**
 * @schema GetCelebrityRecognitionResponse
 */
export interface GetCelebrityRecognitionResponse {
  /**
   * @schema GetCelebrityRecognitionResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema GetCelebrityRecognitionResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema GetCelebrityRecognitionResponse#VideoMetadata
   */
  readonly videoMetadata?: VideoMetadata;

  /**
   * @schema GetCelebrityRecognitionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetCelebrityRecognitionResponse#Celebrities
   */
  readonly celebrities?: CelebrityRecognition[];

}

/**
 * @schema GetContentModerationRequest
 */
export interface GetContentModerationRequest {
  /**
   * @schema GetContentModerationRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema GetContentModerationRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetContentModerationRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetContentModerationRequest#SortBy
   */
  readonly sortBy?: string;

}

/**
 * @schema GetContentModerationResponse
 */
export interface GetContentModerationResponse {
  /**
   * @schema GetContentModerationResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema GetContentModerationResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema GetContentModerationResponse#VideoMetadata
   */
  readonly videoMetadata?: VideoMetadata;

  /**
   * @schema GetContentModerationResponse#ModerationLabels
   */
  readonly moderationLabels?: ContentModerationDetection[];

  /**
   * @schema GetContentModerationResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetContentModerationResponse#ModerationModelVersion
   */
  readonly moderationModelVersion?: string;

}

/**
 * @schema GetFaceDetectionRequest
 */
export interface GetFaceDetectionRequest {
  /**
   * @schema GetFaceDetectionRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema GetFaceDetectionRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetFaceDetectionRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetFaceDetectionResponse
 */
export interface GetFaceDetectionResponse {
  /**
   * @schema GetFaceDetectionResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema GetFaceDetectionResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema GetFaceDetectionResponse#VideoMetadata
   */
  readonly videoMetadata?: VideoMetadata;

  /**
   * @schema GetFaceDetectionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetFaceDetectionResponse#Faces
   */
  readonly faces?: FaceDetection[];

}

/**
 * @schema GetFaceSearchRequest
 */
export interface GetFaceSearchRequest {
  /**
   * @schema GetFaceSearchRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema GetFaceSearchRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetFaceSearchRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetFaceSearchRequest#SortBy
   */
  readonly sortBy?: string;

}

/**
 * @schema GetFaceSearchResponse
 */
export interface GetFaceSearchResponse {
  /**
   * @schema GetFaceSearchResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema GetFaceSearchResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema GetFaceSearchResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetFaceSearchResponse#VideoMetadata
   */
  readonly videoMetadata?: VideoMetadata;

  /**
   * @schema GetFaceSearchResponse#Persons
   */
  readonly persons?: PersonMatch[];

}

/**
 * @schema GetLabelDetectionRequest
 */
export interface GetLabelDetectionRequest {
  /**
   * @schema GetLabelDetectionRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema GetLabelDetectionRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetLabelDetectionRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetLabelDetectionRequest#SortBy
   */
  readonly sortBy?: string;

}

/**
 * @schema GetLabelDetectionResponse
 */
export interface GetLabelDetectionResponse {
  /**
   * @schema GetLabelDetectionResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema GetLabelDetectionResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema GetLabelDetectionResponse#VideoMetadata
   */
  readonly videoMetadata?: VideoMetadata;

  /**
   * @schema GetLabelDetectionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetLabelDetectionResponse#Labels
   */
  readonly labels?: LabelDetection[];

  /**
   * @schema GetLabelDetectionResponse#LabelModelVersion
   */
  readonly labelModelVersion?: string;

}

/**
 * @schema GetPersonTrackingRequest
 */
export interface GetPersonTrackingRequest {
  /**
   * @schema GetPersonTrackingRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema GetPersonTrackingRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetPersonTrackingRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetPersonTrackingRequest#SortBy
   */
  readonly sortBy?: string;

}

/**
 * @schema GetPersonTrackingResponse
 */
export interface GetPersonTrackingResponse {
  /**
   * @schema GetPersonTrackingResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema GetPersonTrackingResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema GetPersonTrackingResponse#VideoMetadata
   */
  readonly videoMetadata?: VideoMetadata;

  /**
   * @schema GetPersonTrackingResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetPersonTrackingResponse#Persons
   */
  readonly persons?: PersonDetection[];

}

/**
 * @schema GetSegmentDetectionRequest
 */
export interface GetSegmentDetectionRequest {
  /**
   * @schema GetSegmentDetectionRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema GetSegmentDetectionRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetSegmentDetectionRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetSegmentDetectionResponse
 */
export interface GetSegmentDetectionResponse {
  /**
   * @schema GetSegmentDetectionResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema GetSegmentDetectionResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema GetSegmentDetectionResponse#VideoMetadata
   */
  readonly videoMetadata?: VideoMetadata[];

  /**
   * @schema GetSegmentDetectionResponse#AudioMetadata
   */
  readonly audioMetadata?: AudioMetadata[];

  /**
   * @schema GetSegmentDetectionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetSegmentDetectionResponse#Segments
   */
  readonly segments?: SegmentDetection[];

  /**
   * @schema GetSegmentDetectionResponse#SelectedSegmentTypes
   */
  readonly selectedSegmentTypes?: SegmentTypeInfo[];

}

/**
 * @schema GetTextDetectionRequest
 */
export interface GetTextDetectionRequest {
  /**
   * @schema GetTextDetectionRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema GetTextDetectionRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetTextDetectionRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetTextDetectionResponse
 */
export interface GetTextDetectionResponse {
  /**
   * @schema GetTextDetectionResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema GetTextDetectionResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema GetTextDetectionResponse#VideoMetadata
   */
  readonly videoMetadata?: VideoMetadata;

  /**
   * @schema GetTextDetectionResponse#TextDetections
   */
  readonly textDetections?: TextDetectionResult[];

  /**
   * @schema GetTextDetectionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetTextDetectionResponse#TextModelVersion
   */
  readonly textModelVersion?: string;

}

/**
 * @schema IndexFacesRequest
 */
export interface IndexFacesRequest {
  /**
   * @schema IndexFacesRequest#CollectionId
   */
  readonly collectionId: string;

  /**
   * @schema IndexFacesRequest#Image
   */
  readonly image: Image;

  /**
   * @schema IndexFacesRequest#ExternalImageId
   */
  readonly externalImageId?: string;

  /**
   * @schema IndexFacesRequest#DetectionAttributes
   */
  readonly detectionAttributes?: string[];

  /**
   * @schema IndexFacesRequest#MaxFaces
   */
  readonly maxFaces?: number;

  /**
   * @schema IndexFacesRequest#QualityFilter
   */
  readonly qualityFilter?: string;

}

/**
 * @schema IndexFacesResponse
 */
export interface IndexFacesResponse {
  /**
   * @schema IndexFacesResponse#FaceRecords
   */
  readonly faceRecords?: FaceRecord[];

  /**
   * @schema IndexFacesResponse#OrientationCorrection
   */
  readonly orientationCorrection?: string;

  /**
   * @schema IndexFacesResponse#FaceModelVersion
   */
  readonly faceModelVersion?: string;

  /**
   * @schema IndexFacesResponse#UnindexedFaces
   */
  readonly unindexedFaces?: UnindexedFace[];

}

/**
 * @schema ListCollectionsRequest
 */
export interface ListCollectionsRequest {
  /**
   * @schema ListCollectionsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListCollectionsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListCollectionsResponse
 */
export interface ListCollectionsResponse {
  /**
   * @schema ListCollectionsResponse#CollectionIds
   */
  readonly collectionIds?: string[];

  /**
   * @schema ListCollectionsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListCollectionsResponse#FaceModelVersions
   */
  readonly faceModelVersions?: string[];

}

/**
 * @schema ListFacesRequest
 */
export interface ListFacesRequest {
  /**
   * @schema ListFacesRequest#CollectionId
   */
  readonly collectionId: string;

  /**
   * @schema ListFacesRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListFacesRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListFacesResponse
 */
export interface ListFacesResponse {
  /**
   * @schema ListFacesResponse#Faces
   */
  readonly faces?: Face[];

  /**
   * @schema ListFacesResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListFacesResponse#FaceModelVersion
   */
  readonly faceModelVersion?: string;

}

/**
 * @schema ListStreamProcessorsRequest
 */
export interface ListStreamProcessorsRequest {
  /**
   * @schema ListStreamProcessorsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListStreamProcessorsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * @schema ListStreamProcessorsResponse
 */
export interface ListStreamProcessorsResponse {
  /**
   * @schema ListStreamProcessorsResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ListStreamProcessorsResponse#StreamProcessors
   */
  readonly streamProcessors?: StreamProcessor[];

}

/**
 * @schema RecognizeCelebritiesRequest
 */
export interface RecognizeCelebritiesRequest {
  /**
   * @schema RecognizeCelebritiesRequest#Image
   */
  readonly image: Image;

}

/**
 * @schema RecognizeCelebritiesResponse
 */
export interface RecognizeCelebritiesResponse {
  /**
   * @schema RecognizeCelebritiesResponse#CelebrityFaces
   */
  readonly celebrityFaces?: Celebrity[];

  /**
   * @schema RecognizeCelebritiesResponse#UnrecognizedFaces
   */
  readonly unrecognizedFaces?: ComparedFace[];

  /**
   * @schema RecognizeCelebritiesResponse#OrientationCorrection
   */
  readonly orientationCorrection?: string;

}

/**
 * @schema SearchFacesRequest
 */
export interface SearchFacesRequest {
  /**
   * @schema SearchFacesRequest#CollectionId
   */
  readonly collectionId: string;

  /**
   * @schema SearchFacesRequest#FaceId
   */
  readonly faceId: string;

  /**
   * @schema SearchFacesRequest#MaxFaces
   */
  readonly maxFaces?: number;

  /**
   * @schema SearchFacesRequest#FaceMatchThreshold
   */
  readonly faceMatchThreshold?: number;

}

/**
 * @schema SearchFacesResponse
 */
export interface SearchFacesResponse {
  /**
   * @schema SearchFacesResponse#SearchedFaceId
   */
  readonly searchedFaceId?: string;

  /**
   * @schema SearchFacesResponse#FaceMatches
   */
  readonly faceMatches?: FaceMatch[];

  /**
   * @schema SearchFacesResponse#FaceModelVersion
   */
  readonly faceModelVersion?: string;

}

/**
 * @schema SearchFacesByImageRequest
 */
export interface SearchFacesByImageRequest {
  /**
   * @schema SearchFacesByImageRequest#CollectionId
   */
  readonly collectionId: string;

  /**
   * @schema SearchFacesByImageRequest#Image
   */
  readonly image: Image;

  /**
   * @schema SearchFacesByImageRequest#MaxFaces
   */
  readonly maxFaces?: number;

  /**
   * @schema SearchFacesByImageRequest#FaceMatchThreshold
   */
  readonly faceMatchThreshold?: number;

  /**
   * @schema SearchFacesByImageRequest#QualityFilter
   */
  readonly qualityFilter?: string;

}

/**
 * @schema SearchFacesByImageResponse
 */
export interface SearchFacesByImageResponse {
  /**
   * @schema SearchFacesByImageResponse#SearchedFaceBoundingBox
   */
  readonly searchedFaceBoundingBox?: BoundingBox;

  /**
   * @schema SearchFacesByImageResponse#SearchedFaceConfidence
   */
  readonly searchedFaceConfidence?: number;

  /**
   * @schema SearchFacesByImageResponse#FaceMatches
   */
  readonly faceMatches?: FaceMatch[];

  /**
   * @schema SearchFacesByImageResponse#FaceModelVersion
   */
  readonly faceModelVersion?: string;

}

/**
 * @schema StartCelebrityRecognitionRequest
 */
export interface StartCelebrityRecognitionRequest {
  /**
   * @schema StartCelebrityRecognitionRequest#Video
   */
  readonly video: Video;

  /**
   * @schema StartCelebrityRecognitionRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema StartCelebrityRecognitionRequest#NotificationChannel
   */
  readonly notificationChannel?: NotificationChannel;

  /**
   * @schema StartCelebrityRecognitionRequest#JobTag
   */
  readonly jobTag?: string;

}

/**
 * @schema StartCelebrityRecognitionResponse
 */
export interface StartCelebrityRecognitionResponse {
  /**
   * @schema StartCelebrityRecognitionResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema StartContentModerationRequest
 */
export interface StartContentModerationRequest {
  /**
   * @schema StartContentModerationRequest#Video
   */
  readonly video: Video;

  /**
   * @schema StartContentModerationRequest#MinConfidence
   */
  readonly minConfidence?: number;

  /**
   * @schema StartContentModerationRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema StartContentModerationRequest#NotificationChannel
   */
  readonly notificationChannel?: NotificationChannel;

  /**
   * @schema StartContentModerationRequest#JobTag
   */
  readonly jobTag?: string;

}

/**
 * @schema StartContentModerationResponse
 */
export interface StartContentModerationResponse {
  /**
   * @schema StartContentModerationResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema StartFaceDetectionRequest
 */
export interface StartFaceDetectionRequest {
  /**
   * @schema StartFaceDetectionRequest#Video
   */
  readonly video: Video;

  /**
   * @schema StartFaceDetectionRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema StartFaceDetectionRequest#NotificationChannel
   */
  readonly notificationChannel?: NotificationChannel;

  /**
   * @schema StartFaceDetectionRequest#FaceAttributes
   */
  readonly faceAttributes?: string;

  /**
   * @schema StartFaceDetectionRequest#JobTag
   */
  readonly jobTag?: string;

}

/**
 * @schema StartFaceDetectionResponse
 */
export interface StartFaceDetectionResponse {
  /**
   * @schema StartFaceDetectionResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema StartFaceSearchRequest
 */
export interface StartFaceSearchRequest {
  /**
   * @schema StartFaceSearchRequest#Video
   */
  readonly video: Video;

  /**
   * @schema StartFaceSearchRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema StartFaceSearchRequest#FaceMatchThreshold
   */
  readonly faceMatchThreshold?: number;

  /**
   * @schema StartFaceSearchRequest#CollectionId
   */
  readonly collectionId: string;

  /**
   * @schema StartFaceSearchRequest#NotificationChannel
   */
  readonly notificationChannel?: NotificationChannel;

  /**
   * @schema StartFaceSearchRequest#JobTag
   */
  readonly jobTag?: string;

}

/**
 * @schema StartFaceSearchResponse
 */
export interface StartFaceSearchResponse {
  /**
   * @schema StartFaceSearchResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema StartLabelDetectionRequest
 */
export interface StartLabelDetectionRequest {
  /**
   * @schema StartLabelDetectionRequest#Video
   */
  readonly video: Video;

  /**
   * @schema StartLabelDetectionRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema StartLabelDetectionRequest#MinConfidence
   */
  readonly minConfidence?: number;

  /**
   * @schema StartLabelDetectionRequest#NotificationChannel
   */
  readonly notificationChannel?: NotificationChannel;

  /**
   * @schema StartLabelDetectionRequest#JobTag
   */
  readonly jobTag?: string;

}

/**
 * @schema StartLabelDetectionResponse
 */
export interface StartLabelDetectionResponse {
  /**
   * @schema StartLabelDetectionResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema StartPersonTrackingRequest
 */
export interface StartPersonTrackingRequest {
  /**
   * @schema StartPersonTrackingRequest#Video
   */
  readonly video: Video;

  /**
   * @schema StartPersonTrackingRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema StartPersonTrackingRequest#NotificationChannel
   */
  readonly notificationChannel?: NotificationChannel;

  /**
   * @schema StartPersonTrackingRequest#JobTag
   */
  readonly jobTag?: string;

}

/**
 * @schema StartPersonTrackingResponse
 */
export interface StartPersonTrackingResponse {
  /**
   * @schema StartPersonTrackingResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema StartProjectVersionRequest
 */
export interface StartProjectVersionRequest {
  /**
   * @schema StartProjectVersionRequest#ProjectVersionArn
   */
  readonly projectVersionArn: string;

  /**
   * @schema StartProjectVersionRequest#MinInferenceUnits
   */
  readonly minInferenceUnits: number;

}

/**
 * @schema StartProjectVersionResponse
 */
export interface StartProjectVersionResponse {
  /**
   * @schema StartProjectVersionResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema StartSegmentDetectionRequest
 */
export interface StartSegmentDetectionRequest {
  /**
   * @schema StartSegmentDetectionRequest#Video
   */
  readonly video: Video;

  /**
   * @schema StartSegmentDetectionRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema StartSegmentDetectionRequest#NotificationChannel
   */
  readonly notificationChannel?: NotificationChannel;

  /**
   * @schema StartSegmentDetectionRequest#JobTag
   */
  readonly jobTag?: string;

  /**
   * @schema StartSegmentDetectionRequest#Filters
   */
  readonly filters?: StartSegmentDetectionFilters;

  /**
   * @schema StartSegmentDetectionRequest#SegmentTypes
   */
  readonly segmentTypes: string[];

}

/**
 * @schema StartSegmentDetectionResponse
 */
export interface StartSegmentDetectionResponse {
  /**
   * @schema StartSegmentDetectionResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema StartStreamProcessorRequest
 */
export interface StartStreamProcessorRequest {
  /**
   * @schema StartStreamProcessorRequest#Name
   */
  readonly name: string;

}

/**
 * @schema StartStreamProcessorResponse
 */
export interface StartStreamProcessorResponse {
}

/**
 * @schema StartTextDetectionRequest
 */
export interface StartTextDetectionRequest {
  /**
   * @schema StartTextDetectionRequest#Video
   */
  readonly video: Video;

  /**
   * @schema StartTextDetectionRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema StartTextDetectionRequest#NotificationChannel
   */
  readonly notificationChannel?: NotificationChannel;

  /**
   * @schema StartTextDetectionRequest#JobTag
   */
  readonly jobTag?: string;

  /**
   * @schema StartTextDetectionRequest#Filters
   */
  readonly filters?: StartTextDetectionFilters;

}

/**
 * @schema StartTextDetectionResponse
 */
export interface StartTextDetectionResponse {
  /**
   * @schema StartTextDetectionResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema StopProjectVersionRequest
 */
export interface StopProjectVersionRequest {
  /**
   * @schema StopProjectVersionRequest#ProjectVersionArn
   */
  readonly projectVersionArn: string;

}

/**
 * @schema StopProjectVersionResponse
 */
export interface StopProjectVersionResponse {
  /**
   * @schema StopProjectVersionResponse#Status
   */
  readonly status?: string;

}

/**
 * @schema StopStreamProcessorRequest
 */
export interface StopStreamProcessorRequest {
  /**
   * @schema StopStreamProcessorRequest#Name
   */
  readonly name: string;

}

/**
 * @schema StopStreamProcessorResponse
 */
export interface StopStreamProcessorResponse {
}

/**
 * @schema Image
 */
export interface Image {
  /**
   * @schema Image#Bytes
   */
  readonly bytes?: any;

  /**
   * @schema Image#S3Object
   */
  readonly s3Object?: S3Object;

}

/**
 * @schema ComparedSourceImageFace
 */
export interface ComparedSourceImageFace {
  /**
   * @schema ComparedSourceImageFace#BoundingBox
   */
  readonly boundingBox?: BoundingBox;

  /**
   * @schema ComparedSourceImageFace#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema CompareFacesMatch
 */
export interface CompareFacesMatch {
  /**
   * @schema CompareFacesMatch#Similarity
   */
  readonly similarity?: number;

  /**
   * @schema CompareFacesMatch#Face
   */
  readonly face?: ComparedFace;

}

/**
 * @schema ComparedFace
 */
export interface ComparedFace {
  /**
   * @schema ComparedFace#BoundingBox
   */
  readonly boundingBox?: BoundingBox;

  /**
   * @schema ComparedFace#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema ComparedFace#Landmarks
   */
  readonly landmarks?: Landmark[];

  /**
   * @schema ComparedFace#Pose
   */
  readonly pose?: Pose;

  /**
   * @schema ComparedFace#Quality
   */
  readonly quality?: ImageQuality;

}

/**
 * @schema OutputConfig
 */
export interface OutputConfig {
  /**
   * @schema OutputConfig#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema OutputConfig#S3KeyPrefix
   */
  readonly s3KeyPrefix?: string;

}

/**
 * @schema TrainingData
 */
export interface TrainingData {
  /**
   * @schema TrainingData#Assets
   */
  readonly assets?: Asset[];

}

/**
 * @schema TestingData
 */
export interface TestingData {
  /**
   * @schema TestingData#Assets
   */
  readonly assets?: Asset[];

  /**
   * @schema TestingData#AutoCreate
   */
  readonly autoCreate?: boolean;

}

/**
 * @schema StreamProcessorInput
 */
export interface StreamProcessorInput {
  /**
   * @schema StreamProcessorInput#KinesisVideoStream
   */
  readonly kinesisVideoStream?: KinesisVideoStream;

}

/**
 * @schema StreamProcessorOutput
 */
export interface StreamProcessorOutput {
  /**
   * @schema StreamProcessorOutput#KinesisDataStream
   */
  readonly kinesisDataStream?: KinesisDataStream;

}

/**
 * @schema StreamProcessorSettings
 */
export interface StreamProcessorSettings {
  /**
   * @schema StreamProcessorSettings#FaceSearch
   */
  readonly faceSearch?: FaceSearchSettings;

}

/**
 * @schema ProjectVersionDescription
 */
export interface ProjectVersionDescription {
  /**
   * @schema ProjectVersionDescription#ProjectVersionArn
   */
  readonly projectVersionArn?: string;

  /**
   * @schema ProjectVersionDescription#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema ProjectVersionDescription#MinInferenceUnits
   */
  readonly minInferenceUnits?: number;

  /**
   * @schema ProjectVersionDescription#Status
   */
  readonly status?: string;

  /**
   * @schema ProjectVersionDescription#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema ProjectVersionDescription#BillableTrainingTimeInSeconds
   */
  readonly billableTrainingTimeInSeconds?: number;

  /**
   * @schema ProjectVersionDescription#TrainingEndTimestamp
   */
  readonly trainingEndTimestamp?: string;

  /**
   * @schema ProjectVersionDescription#OutputConfig
   */
  readonly outputConfig?: OutputConfig;

  /**
   * @schema ProjectVersionDescription#TrainingDataResult
   */
  readonly trainingDataResult?: TrainingDataResult;

  /**
   * @schema ProjectVersionDescription#TestingDataResult
   */
  readonly testingDataResult?: TestingDataResult;

  /**
   * @schema ProjectVersionDescription#EvaluationResult
   */
  readonly evaluationResult?: EvaluationResult;

  /**
   * @schema ProjectVersionDescription#ManifestSummary
   */
  readonly manifestSummary?: GroundTruthManifest;

}

/**
 * @schema ProjectDescription
 */
export interface ProjectDescription {
  /**
   * @schema ProjectDescription#ProjectArn
   */
  readonly projectArn?: string;

  /**
   * @schema ProjectDescription#CreationTimestamp
   */
  readonly creationTimestamp?: string;

  /**
   * @schema ProjectDescription#Status
   */
  readonly status?: string;

}

/**
 * @schema CustomLabel
 */
export interface CustomLabel {
  /**
   * @schema CustomLabel#Name
   */
  readonly name?: string;

  /**
   * @schema CustomLabel#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema CustomLabel#Geometry
   */
  readonly geometry?: Geometry;

}

/**
 * @schema FaceDetail
 */
export interface FaceDetail {
  /**
   * @schema FaceDetail#BoundingBox
   */
  readonly boundingBox?: BoundingBox;

  /**
   * @schema FaceDetail#AgeRange
   */
  readonly ageRange?: AgeRange;

  /**
   * @schema FaceDetail#Smile
   */
  readonly smile?: Smile;

  /**
   * @schema FaceDetail#Eyeglasses
   */
  readonly eyeglasses?: Eyeglasses;

  /**
   * @schema FaceDetail#Sunglasses
   */
  readonly sunglasses?: Sunglasses;

  /**
   * @schema FaceDetail#Gender
   */
  readonly gender?: Gender;

  /**
   * @schema FaceDetail#Beard
   */
  readonly beard?: Beard;

  /**
   * @schema FaceDetail#Mustache
   */
  readonly mustache?: Mustache;

  /**
   * @schema FaceDetail#EyesOpen
   */
  readonly eyesOpen?: EyeOpen;

  /**
   * @schema FaceDetail#MouthOpen
   */
  readonly mouthOpen?: MouthOpen;

  /**
   * @schema FaceDetail#Emotions
   */
  readonly emotions?: Emotion[];

  /**
   * @schema FaceDetail#Landmarks
   */
  readonly landmarks?: Landmark[];

  /**
   * @schema FaceDetail#Pose
   */
  readonly pose?: Pose;

  /**
   * @schema FaceDetail#Quality
   */
  readonly quality?: ImageQuality;

  /**
   * @schema FaceDetail#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema Label
 */
export interface Label {
  /**
   * @schema Label#Name
   */
  readonly name?: string;

  /**
   * @schema Label#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema Label#Instances
   */
  readonly instances?: Instance[];

  /**
   * @schema Label#Parents
   */
  readonly parents?: Parent[];

}

/**
 * @schema HumanLoopConfig
 */
export interface HumanLoopConfig {
  /**
   * @schema HumanLoopConfig#HumanLoopName
   */
  readonly humanLoopName: string;

  /**
   * @schema HumanLoopConfig#FlowDefinitionArn
   */
  readonly flowDefinitionArn: string;

  /**
   * @schema HumanLoopConfig#DataAttributes
   */
  readonly dataAttributes?: HumanLoopDataAttributes;

}

/**
 * @schema ModerationLabel
 */
export interface ModerationLabel {
  /**
   * @schema ModerationLabel#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema ModerationLabel#Name
   */
  readonly name?: string;

  /**
   * @schema ModerationLabel#ParentName
   */
  readonly parentName?: string;

}

/**
 * @schema HumanLoopActivationOutput
 */
export interface HumanLoopActivationOutput {
  /**
   * @schema HumanLoopActivationOutput#HumanLoopArn
   */
  readonly humanLoopArn?: string;

  /**
   * @schema HumanLoopActivationOutput#HumanLoopActivationReasons
   */
  readonly humanLoopActivationReasons?: string[];

  /**
   * @schema HumanLoopActivationOutput#HumanLoopActivationConditionsEvaluationResults
   */
  readonly humanLoopActivationConditionsEvaluationResults?: string;

}

/**
 * @schema ProtectiveEquipmentSummarizationAttributes
 */
export interface ProtectiveEquipmentSummarizationAttributes {
  /**
   * @schema ProtectiveEquipmentSummarizationAttributes#MinConfidence
   */
  readonly minConfidence: number;

  /**
   * @schema ProtectiveEquipmentSummarizationAttributes#RequiredEquipmentTypes
   */
  readonly requiredEquipmentTypes: string[];

}

/**
 * @schema ProtectiveEquipmentPerson
 */
export interface ProtectiveEquipmentPerson {
  /**
   * @schema ProtectiveEquipmentPerson#BodyParts
   */
  readonly bodyParts?: ProtectiveEquipmentBodyPart[];

  /**
   * @schema ProtectiveEquipmentPerson#BoundingBox
   */
  readonly boundingBox?: BoundingBox;

  /**
   * @schema ProtectiveEquipmentPerson#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema ProtectiveEquipmentPerson#Id
   */
  readonly id?: number;

}

/**
 * @schema ProtectiveEquipmentSummary
 */
export interface ProtectiveEquipmentSummary {
  /**
   * @schema ProtectiveEquipmentSummary#PersonsWithRequiredEquipment
   */
  readonly personsWithRequiredEquipment?: number[];

  /**
   * @schema ProtectiveEquipmentSummary#PersonsWithoutRequiredEquipment
   */
  readonly personsWithoutRequiredEquipment?: number[];

  /**
   * @schema ProtectiveEquipmentSummary#PersonsIndeterminate
   */
  readonly personsIndeterminate?: number[];

}

/**
 * @schema DetectTextFilters
 */
export interface DetectTextFilters {
  /**
   * @schema DetectTextFilters#WordFilter
   */
  readonly wordFilter?: DetectionFilter;

  /**
   * @schema DetectTextFilters#RegionsOfInterest
   */
  readonly regionsOfInterest?: RegionOfInterest[];

}

/**
 * @schema TextDetection
 */
export interface TextDetection {
  /**
   * @schema TextDetection#DetectedText
   */
  readonly detectedText?: string;

  /**
   * @schema TextDetection#Type
   */
  readonly type?: string;

  /**
   * @schema TextDetection#Id
   */
  readonly id?: number;

  /**
   * @schema TextDetection#ParentId
   */
  readonly parentId?: number;

  /**
   * @schema TextDetection#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema TextDetection#Geometry
   */
  readonly geometry?: Geometry;

}

/**
 * @schema VideoMetadata
 */
export interface VideoMetadata {
  /**
   * @schema VideoMetadata#Codec
   */
  readonly codec?: string;

  /**
   * @schema VideoMetadata#DurationMillis
   */
  readonly durationMillis?: number;

  /**
   * @schema VideoMetadata#Format
   */
  readonly format?: string;

  /**
   * @schema VideoMetadata#FrameRate
   */
  readonly frameRate?: number;

  /**
   * @schema VideoMetadata#FrameHeight
   */
  readonly frameHeight?: number;

  /**
   * @schema VideoMetadata#FrameWidth
   */
  readonly frameWidth?: number;

}

/**
 * @schema CelebrityRecognition
 */
export interface CelebrityRecognition {
  /**
   * @schema CelebrityRecognition#Timestamp
   */
  readonly timestamp?: number;

  /**
   * @schema CelebrityRecognition#Celebrity
   */
  readonly celebrity?: CelebrityDetail;

}

/**
 * @schema ContentModerationDetection
 */
export interface ContentModerationDetection {
  /**
   * @schema ContentModerationDetection#Timestamp
   */
  readonly timestamp?: number;

  /**
   * @schema ContentModerationDetection#ModerationLabel
   */
  readonly moderationLabel?: ModerationLabel;

}

/**
 * @schema FaceDetection
 */
export interface FaceDetection {
  /**
   * @schema FaceDetection#Timestamp
   */
  readonly timestamp?: number;

  /**
   * @schema FaceDetection#Face
   */
  readonly face?: FaceDetail;

}

/**
 * @schema PersonMatch
 */
export interface PersonMatch {
  /**
   * @schema PersonMatch#Timestamp
   */
  readonly timestamp?: number;

  /**
   * @schema PersonMatch#Person
   */
  readonly person?: PersonDetail;

  /**
   * @schema PersonMatch#FaceMatches
   */
  readonly faceMatches?: FaceMatch[];

}

/**
 * @schema LabelDetection
 */
export interface LabelDetection {
  /**
   * @schema LabelDetection#Timestamp
   */
  readonly timestamp?: number;

  /**
   * @schema LabelDetection#Label
   */
  readonly label?: Label;

}

/**
 * @schema PersonDetection
 */
export interface PersonDetection {
  /**
   * @schema PersonDetection#Timestamp
   */
  readonly timestamp?: number;

  /**
   * @schema PersonDetection#Person
   */
  readonly person?: PersonDetail;

}

/**
 * @schema AudioMetadata
 */
export interface AudioMetadata {
  /**
   * @schema AudioMetadata#Codec
   */
  readonly codec?: string;

  /**
   * @schema AudioMetadata#DurationMillis
   */
  readonly durationMillis?: number;

  /**
   * @schema AudioMetadata#SampleRate
   */
  readonly sampleRate?: number;

  /**
   * @schema AudioMetadata#NumberOfChannels
   */
  readonly numberOfChannels?: number;

}

/**
 * @schema SegmentDetection
 */
export interface SegmentDetection {
  /**
   * @schema SegmentDetection#Type
   */
  readonly type?: string;

  /**
   * @schema SegmentDetection#StartTimestampMillis
   */
  readonly startTimestampMillis?: number;

  /**
   * @schema SegmentDetection#EndTimestampMillis
   */
  readonly endTimestampMillis?: number;

  /**
   * @schema SegmentDetection#DurationMillis
   */
  readonly durationMillis?: number;

  /**
   * @schema SegmentDetection#StartTimecodeSMPTE
   */
  readonly startTimecodeSmpte?: string;

  /**
   * @schema SegmentDetection#EndTimecodeSMPTE
   */
  readonly endTimecodeSmpte?: string;

  /**
   * @schema SegmentDetection#DurationSMPTE
   */
  readonly durationSmpte?: string;

  /**
   * @schema SegmentDetection#TechnicalCueSegment
   */
  readonly technicalCueSegment?: TechnicalCueSegment;

  /**
   * @schema SegmentDetection#ShotSegment
   */
  readonly shotSegment?: ShotSegment;

}

/**
 * @schema SegmentTypeInfo
 */
export interface SegmentTypeInfo {
  /**
   * @schema SegmentTypeInfo#Type
   */
  readonly type?: string;

  /**
   * @schema SegmentTypeInfo#ModelVersion
   */
  readonly modelVersion?: string;

}

/**
 * @schema TextDetectionResult
 */
export interface TextDetectionResult {
  /**
   * @schema TextDetectionResult#Timestamp
   */
  readonly timestamp?: number;

  /**
   * @schema TextDetectionResult#TextDetection
   */
  readonly textDetection?: TextDetection;

}

/**
 * @schema FaceRecord
 */
export interface FaceRecord {
  /**
   * @schema FaceRecord#Face
   */
  readonly face?: Face;

  /**
   * @schema FaceRecord#FaceDetail
   */
  readonly faceDetail?: FaceDetail;

}

/**
 * @schema UnindexedFace
 */
export interface UnindexedFace {
  /**
   * @schema UnindexedFace#Reasons
   */
  readonly reasons?: string[];

  /**
   * @schema UnindexedFace#FaceDetail
   */
  readonly faceDetail?: FaceDetail;

}

/**
 * @schema Face
 */
export interface Face {
  /**
   * @schema Face#FaceId
   */
  readonly faceId?: string;

  /**
   * @schema Face#BoundingBox
   */
  readonly boundingBox?: BoundingBox;

  /**
   * @schema Face#ImageId
   */
  readonly imageId?: string;

  /**
   * @schema Face#ExternalImageId
   */
  readonly externalImageId?: string;

  /**
   * @schema Face#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema StreamProcessor
 */
export interface StreamProcessor {
  /**
   * @schema StreamProcessor#Name
   */
  readonly name?: string;

  /**
   * @schema StreamProcessor#Status
   */
  readonly status?: string;

}

/**
 * @schema Celebrity
 */
export interface Celebrity {
  /**
   * @schema Celebrity#Urls
   */
  readonly urls?: string[];

  /**
   * @schema Celebrity#Name
   */
  readonly name?: string;

  /**
   * @schema Celebrity#Id
   */
  readonly id?: string;

  /**
   * @schema Celebrity#Face
   */
  readonly face?: ComparedFace;

  /**
   * @schema Celebrity#MatchConfidence
   */
  readonly matchConfidence?: number;

}

/**
 * @schema FaceMatch
 */
export interface FaceMatch {
  /**
   * @schema FaceMatch#Similarity
   */
  readonly similarity?: number;

  /**
   * @schema FaceMatch#Face
   */
  readonly face?: Face;

}

/**
 * @schema BoundingBox
 */
export interface BoundingBox {
  /**
   * @schema BoundingBox#Width
   */
  readonly width?: number;

  /**
   * @schema BoundingBox#Height
   */
  readonly height?: number;

  /**
   * @schema BoundingBox#Left
   */
  readonly left?: number;

  /**
   * @schema BoundingBox#Top
   */
  readonly top?: number;

}

/**
 * @schema Video
 */
export interface Video {
  /**
   * @schema Video#S3Object
   */
  readonly s3Object?: S3Object;

}

/**
 * @schema NotificationChannel
 */
export interface NotificationChannel {
  /**
   * @schema NotificationChannel#SNSTopicArn
   */
  readonly snsTopicArn: string;

  /**
   * @schema NotificationChannel#RoleArn
   */
  readonly roleArn: string;

}

/**
 * @schema StartSegmentDetectionFilters
 */
export interface StartSegmentDetectionFilters {
  /**
   * @schema StartSegmentDetectionFilters#TechnicalCueFilter
   */
  readonly technicalCueFilter?: StartTechnicalCueDetectionFilter;

  /**
   * @schema StartSegmentDetectionFilters#ShotFilter
   */
  readonly shotFilter?: StartShotDetectionFilter;

}

/**
 * @schema StartTextDetectionFilters
 */
export interface StartTextDetectionFilters {
  /**
   * @schema StartTextDetectionFilters#WordFilter
   */
  readonly wordFilter?: DetectionFilter;

  /**
   * @schema StartTextDetectionFilters#RegionsOfInterest
   */
  readonly regionsOfInterest?: RegionOfInterest[];

}

/**
 * @schema S3Object
 */
export interface S3Object {
  /**
   * @schema S3Object#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema S3Object#Name
   */
  readonly name?: string;

  /**
   * @schema S3Object#Version
   */
  readonly version?: string;

}

/**
 * @schema Landmark
 */
export interface Landmark {
  /**
   * @schema Landmark#Type
   */
  readonly type?: string;

  /**
   * @schema Landmark#X
   */
  readonly x?: number;

  /**
   * @schema Landmark#Y
   */
  readonly y?: number;

}

/**
 * @schema Pose
 */
export interface Pose {
  /**
   * @schema Pose#Roll
   */
  readonly roll?: number;

  /**
   * @schema Pose#Yaw
   */
  readonly yaw?: number;

  /**
   * @schema Pose#Pitch
   */
  readonly pitch?: number;

}

/**
 * @schema ImageQuality
 */
export interface ImageQuality {
  /**
   * @schema ImageQuality#Brightness
   */
  readonly brightness?: number;

  /**
   * @schema ImageQuality#Sharpness
   */
  readonly sharpness?: number;

}

/**
 * @schema Asset
 */
export interface Asset {
  /**
   * @schema Asset#GroundTruthManifest
   */
  readonly groundTruthManifest?: GroundTruthManifest;

}

/**
 * @schema KinesisVideoStream
 */
export interface KinesisVideoStream {
  /**
   * @schema KinesisVideoStream#Arn
   */
  readonly arn?: string;

}

/**
 * @schema KinesisDataStream
 */
export interface KinesisDataStream {
  /**
   * @schema KinesisDataStream#Arn
   */
  readonly arn?: string;

}

/**
 * @schema FaceSearchSettings
 */
export interface FaceSearchSettings {
  /**
   * @schema FaceSearchSettings#CollectionId
   */
  readonly collectionId?: string;

  /**
   * @schema FaceSearchSettings#FaceMatchThreshold
   */
  readonly faceMatchThreshold?: number;

}

/**
 * @schema TrainingDataResult
 */
export interface TrainingDataResult {
  /**
   * @schema TrainingDataResult#Input
   */
  readonly input?: TrainingData;

  /**
   * @schema TrainingDataResult#Output
   */
  readonly output?: TrainingData;

  /**
   * @schema TrainingDataResult#Validation
   */
  readonly validation?: ValidationData;

}

/**
 * @schema TestingDataResult
 */
export interface TestingDataResult {
  /**
   * @schema TestingDataResult#Input
   */
  readonly input?: TestingData;

  /**
   * @schema TestingDataResult#Output
   */
  readonly output?: TestingData;

  /**
   * @schema TestingDataResult#Validation
   */
  readonly validation?: ValidationData;

}

/**
 * @schema EvaluationResult
 */
export interface EvaluationResult {
  /**
   * @schema EvaluationResult#F1Score
   */
  readonly f1Score?: number;

  /**
   * @schema EvaluationResult#Summary
   */
  readonly summary?: Summary;

}

/**
 * @schema GroundTruthManifest
 */
export interface GroundTruthManifest {
  /**
   * @schema GroundTruthManifest#S3Object
   */
  readonly s3Object?: S3Object;

}

/**
 * @schema Geometry
 */
export interface Geometry {
  /**
   * @schema Geometry#BoundingBox
   */
  readonly boundingBox?: BoundingBox;

  /**
   * @schema Geometry#Polygon
   */
  readonly polygon?: Point[];

}

/**
 * @schema AgeRange
 */
export interface AgeRange {
  /**
   * @schema AgeRange#Low
   */
  readonly low?: number;

  /**
   * @schema AgeRange#High
   */
  readonly high?: number;

}

/**
 * @schema Smile
 */
export interface Smile {
  /**
   * @schema Smile#Value
   */
  readonly value?: boolean;

  /**
   * @schema Smile#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema Eyeglasses
 */
export interface Eyeglasses {
  /**
   * @schema Eyeglasses#Value
   */
  readonly value?: boolean;

  /**
   * @schema Eyeglasses#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema Sunglasses
 */
export interface Sunglasses {
  /**
   * @schema Sunglasses#Value
   */
  readonly value?: boolean;

  /**
   * @schema Sunglasses#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema Gender
 */
export interface Gender {
  /**
   * @schema Gender#Value
   */
  readonly value?: string;

  /**
   * @schema Gender#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema Beard
 */
export interface Beard {
  /**
   * @schema Beard#Value
   */
  readonly value?: boolean;

  /**
   * @schema Beard#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema Mustache
 */
export interface Mustache {
  /**
   * @schema Mustache#Value
   */
  readonly value?: boolean;

  /**
   * @schema Mustache#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema EyeOpen
 */
export interface EyeOpen {
  /**
   * @schema EyeOpen#Value
   */
  readonly value?: boolean;

  /**
   * @schema EyeOpen#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema MouthOpen
 */
export interface MouthOpen {
  /**
   * @schema MouthOpen#Value
   */
  readonly value?: boolean;

  /**
   * @schema MouthOpen#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema Emotion
 */
export interface Emotion {
  /**
   * @schema Emotion#Type
   */
  readonly type?: string;

  /**
   * @schema Emotion#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema Instance
 */
export interface Instance {
  /**
   * @schema Instance#BoundingBox
   */
  readonly boundingBox?: BoundingBox;

  /**
   * @schema Instance#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema Parent
 */
export interface Parent {
  /**
   * @schema Parent#Name
   */
  readonly name?: string;

}

/**
 * @schema HumanLoopDataAttributes
 */
export interface HumanLoopDataAttributes {
  /**
   * @schema HumanLoopDataAttributes#ContentClassifiers
   */
  readonly contentClassifiers?: string[];

}

/**
 * @schema ProtectiveEquipmentBodyPart
 */
export interface ProtectiveEquipmentBodyPart {
  /**
   * @schema ProtectiveEquipmentBodyPart#Name
   */
  readonly name?: string;

  /**
   * @schema ProtectiveEquipmentBodyPart#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema ProtectiveEquipmentBodyPart#EquipmentDetections
   */
  readonly equipmentDetections?: EquipmentDetection[];

}

/**
 * @schema DetectionFilter
 */
export interface DetectionFilter {
  /**
   * @schema DetectionFilter#MinConfidence
   */
  readonly minConfidence?: number;

  /**
   * @schema DetectionFilter#MinBoundingBoxHeight
   */
  readonly minBoundingBoxHeight?: number;

  /**
   * @schema DetectionFilter#MinBoundingBoxWidth
   */
  readonly minBoundingBoxWidth?: number;

}

/**
 * @schema RegionOfInterest
 */
export interface RegionOfInterest {
  /**
   * @schema RegionOfInterest#BoundingBox
   */
  readonly boundingBox?: BoundingBox;

}

/**
 * @schema CelebrityDetail
 */
export interface CelebrityDetail {
  /**
   * @schema CelebrityDetail#Urls
   */
  readonly urls?: string[];

  /**
   * @schema CelebrityDetail#Name
   */
  readonly name?: string;

  /**
   * @schema CelebrityDetail#Id
   */
  readonly id?: string;

  /**
   * @schema CelebrityDetail#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema CelebrityDetail#BoundingBox
   */
  readonly boundingBox?: BoundingBox;

  /**
   * @schema CelebrityDetail#Face
   */
  readonly face?: FaceDetail;

}

/**
 * @schema PersonDetail
 */
export interface PersonDetail {
  /**
   * @schema PersonDetail#Index
   */
  readonly index?: number;

  /**
   * @schema PersonDetail#BoundingBox
   */
  readonly boundingBox?: BoundingBox;

  /**
   * @schema PersonDetail#Face
   */
  readonly face?: FaceDetail;

}

/**
 * @schema TechnicalCueSegment
 */
export interface TechnicalCueSegment {
  /**
   * @schema TechnicalCueSegment#Type
   */
  readonly type?: string;

  /**
   * @schema TechnicalCueSegment#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema ShotSegment
 */
export interface ShotSegment {
  /**
   * @schema ShotSegment#Index
   */
  readonly index?: number;

  /**
   * @schema ShotSegment#Confidence
   */
  readonly confidence?: number;

}

/**
 * @schema StartTechnicalCueDetectionFilter
 */
export interface StartTechnicalCueDetectionFilter {
  /**
   * @schema StartTechnicalCueDetectionFilter#MinSegmentConfidence
   */
  readonly minSegmentConfidence?: number;

}

/**
 * @schema StartShotDetectionFilter
 */
export interface StartShotDetectionFilter {
  /**
   * @schema StartShotDetectionFilter#MinSegmentConfidence
   */
  readonly minSegmentConfidence?: number;

}

/**
 * @schema ValidationData
 */
export interface ValidationData {
  /**
   * @schema ValidationData#Assets
   */
  readonly assets?: Asset[];

}

/**
 * @schema Summary
 */
export interface Summary {
  /**
   * @schema Summary#S3Object
   */
  readonly s3Object?: S3Object;

}

/**
 * @schema Point
 */
export interface Point {
  /**
   * @schema Point#X
   */
  readonly x?: number;

  /**
   * @schema Point#Y
   */
  readonly y?: number;

}

/**
 * @schema EquipmentDetection
 */
export interface EquipmentDetection {
  /**
   * @schema EquipmentDetection#BoundingBox
   */
  readonly boundingBox?: BoundingBox;

  /**
   * @schema EquipmentDetection#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema EquipmentDetection#Type
   */
  readonly type?: string;

  /**
   * @schema EquipmentDetection#CoversBodyPart
   */
  readonly coversBodyPart?: CoversBodyPart;

}

/**
 * @schema CoversBodyPart
 */
export interface CoversBodyPart {
  /**
   * @schema CoversBodyPart#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema CoversBodyPart#Value
   */
  readonly value?: boolean;

}
