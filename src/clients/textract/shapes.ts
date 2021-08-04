/**
 * @schema TextractAnalyzeDocumentRequest
 */
export interface TextractAnalyzeDocumentRequest {
  /**
   * @schema TextractAnalyzeDocumentRequest#Document
   */
  readonly document: TextractDocument;

  /**
   * @schema TextractAnalyzeDocumentRequest#FeatureTypes
   */
  readonly featureTypes: string[];

  /**
   * @schema TextractAnalyzeDocumentRequest#HumanLoopConfig
   */
  readonly humanLoopConfig?: TextractHumanLoopConfig;

}

/**
 * @schema TextractAnalyzeDocumentResponse
 */
export interface TextractAnalyzeDocumentResponse {
  /**
   * @schema TextractAnalyzeDocumentResponse#DocumentMetadata
   */
  readonly documentMetadata?: TextractDocumentMetadata;

  /**
   * @schema TextractAnalyzeDocumentResponse#Blocks
   */
  readonly blocks?: TextractBlock[];

  /**
   * @schema TextractAnalyzeDocumentResponse#HumanLoopActivationOutput
   */
  readonly humanLoopActivationOutput?: TextractHumanLoopActivationOutput;

  /**
   * @schema TextractAnalyzeDocumentResponse#AnalyzeDocumentModelVersion
   */
  readonly analyzeDocumentModelVersion?: string;

}

/**
 * @schema TextractDetectDocumentTextRequest
 */
export interface TextractDetectDocumentTextRequest {
  /**
   * @schema TextractDetectDocumentTextRequest#Document
   */
  readonly document: TextractDocument;

}

/**
 * @schema TextractDetectDocumentTextResponse
 */
export interface TextractDetectDocumentTextResponse {
  /**
   * @schema TextractDetectDocumentTextResponse#DocumentMetadata
   */
  readonly documentMetadata?: TextractDocumentMetadata;

  /**
   * @schema TextractDetectDocumentTextResponse#Blocks
   */
  readonly blocks?: TextractBlock[];

  /**
   * @schema TextractDetectDocumentTextResponse#DetectDocumentTextModelVersion
   */
  readonly detectDocumentTextModelVersion?: string;

}

/**
 * @schema TextractGetDocumentAnalysisRequest
 */
export interface TextractGetDocumentAnalysisRequest {
  /**
   * @schema TextractGetDocumentAnalysisRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema TextractGetDocumentAnalysisRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema TextractGetDocumentAnalysisRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema TextractGetDocumentAnalysisResponse
 */
export interface TextractGetDocumentAnalysisResponse {
  /**
   * @schema TextractGetDocumentAnalysisResponse#DocumentMetadata
   */
  readonly documentMetadata?: TextractDocumentMetadata;

  /**
   * @schema TextractGetDocumentAnalysisResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema TextractGetDocumentAnalysisResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema TextractGetDocumentAnalysisResponse#Blocks
   */
  readonly blocks?: TextractBlock[];

  /**
   * @schema TextractGetDocumentAnalysisResponse#Warnings
   */
  readonly warnings?: TextractWarning[];

  /**
   * @schema TextractGetDocumentAnalysisResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema TextractGetDocumentAnalysisResponse#AnalyzeDocumentModelVersion
   */
  readonly analyzeDocumentModelVersion?: string;

}

/**
 * @schema TextractGetDocumentTextDetectionRequest
 */
export interface TextractGetDocumentTextDetectionRequest {
  /**
   * @schema TextractGetDocumentTextDetectionRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema TextractGetDocumentTextDetectionRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema TextractGetDocumentTextDetectionRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema TextractGetDocumentTextDetectionResponse
 */
export interface TextractGetDocumentTextDetectionResponse {
  /**
   * @schema TextractGetDocumentTextDetectionResponse#DocumentMetadata
   */
  readonly documentMetadata?: TextractDocumentMetadata;

  /**
   * @schema TextractGetDocumentTextDetectionResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema TextractGetDocumentTextDetectionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema TextractGetDocumentTextDetectionResponse#Blocks
   */
  readonly blocks?: TextractBlock[];

  /**
   * @schema TextractGetDocumentTextDetectionResponse#Warnings
   */
  readonly warnings?: TextractWarning[];

  /**
   * @schema TextractGetDocumentTextDetectionResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema TextractGetDocumentTextDetectionResponse#DetectDocumentTextModelVersion
   */
  readonly detectDocumentTextModelVersion?: string;

}

/**
 * @schema TextractStartDocumentAnalysisRequest
 */
export interface TextractStartDocumentAnalysisRequest {
  /**
   * @schema TextractStartDocumentAnalysisRequest#DocumentLocation
   */
  readonly documentLocation: TextractDocumentLocation;

  /**
   * @schema TextractStartDocumentAnalysisRequest#FeatureTypes
   */
  readonly featureTypes: string[];

  /**
   * @schema TextractStartDocumentAnalysisRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema TextractStartDocumentAnalysisRequest#JobTag
   */
  readonly jobTag?: string;

  /**
   * @schema TextractStartDocumentAnalysisRequest#NotificationChannel
   */
  readonly notificationChannel?: TextractNotificationChannel;

  /**
   * @schema TextractStartDocumentAnalysisRequest#OutputConfig
   */
  readonly outputConfig?: TextractOutputConfig;

  /**
   * @schema TextractStartDocumentAnalysisRequest#KMSKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema TextractStartDocumentAnalysisResponse
 */
export interface TextractStartDocumentAnalysisResponse {
  /**
   * @schema TextractStartDocumentAnalysisResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema TextractStartDocumentTextDetectionRequest
 */
export interface TextractStartDocumentTextDetectionRequest {
  /**
   * @schema TextractStartDocumentTextDetectionRequest#DocumentLocation
   */
  readonly documentLocation: TextractDocumentLocation;

  /**
   * @schema TextractStartDocumentTextDetectionRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema TextractStartDocumentTextDetectionRequest#JobTag
   */
  readonly jobTag?: string;

  /**
   * @schema TextractStartDocumentTextDetectionRequest#NotificationChannel
   */
  readonly notificationChannel?: TextractNotificationChannel;

  /**
   * @schema TextractStartDocumentTextDetectionRequest#OutputConfig
   */
  readonly outputConfig?: TextractOutputConfig;

  /**
   * @schema TextractStartDocumentTextDetectionRequest#KMSKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema TextractStartDocumentTextDetectionResponse
 */
export interface TextractStartDocumentTextDetectionResponse {
  /**
   * @schema TextractStartDocumentTextDetectionResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema TextractDocument
 */
export interface TextractDocument {
  /**
   * @schema TextractDocument#Bytes
   */
  readonly bytes?: any;

  /**
   * @schema TextractDocument#S3Object
   */
  readonly s3Object?: TextractS3Object;

}

/**
 * @schema TextractHumanLoopConfig
 */
export interface TextractHumanLoopConfig {
  /**
   * @schema TextractHumanLoopConfig#HumanLoopName
   */
  readonly humanLoopName: string;

  /**
   * @schema TextractHumanLoopConfig#FlowDefinitionArn
   */
  readonly flowDefinitionArn: string;

  /**
   * @schema TextractHumanLoopConfig#DataAttributes
   */
  readonly dataAttributes?: TextractHumanLoopDataAttributes;

}

/**
 * @schema TextractDocumentMetadata
 */
export interface TextractDocumentMetadata {
  /**
   * @schema TextractDocumentMetadata#Pages
   */
  readonly pages?: number;

}

/**
 * @schema TextractBlock
 */
export interface TextractBlock {
  /**
   * @schema TextractBlock#BlockType
   */
  readonly blockType?: string;

  /**
   * @schema TextractBlock#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema TextractBlock#Text
   */
  readonly text?: string;

  /**
   * @schema TextractBlock#TextType
   */
  readonly textType?: string;

  /**
   * @schema TextractBlock#RowIndex
   */
  readonly rowIndex?: number;

  /**
   * @schema TextractBlock#ColumnIndex
   */
  readonly columnIndex?: number;

  /**
   * @schema TextractBlock#RowSpan
   */
  readonly rowSpan?: number;

  /**
   * @schema TextractBlock#ColumnSpan
   */
  readonly columnSpan?: number;

  /**
   * @schema TextractBlock#Geometry
   */
  readonly geometry?: TextractGeometry;

  /**
   * @schema TextractBlock#Id
   */
  readonly id?: string;

  /**
   * @schema TextractBlock#Relationships
   */
  readonly relationships?: TextractRelationship[];

  /**
   * @schema TextractBlock#EntityTypes
   */
  readonly entityTypes?: string[];

  /**
   * @schema TextractBlock#SelectionStatus
   */
  readonly selectionStatus?: string;

  /**
   * @schema TextractBlock#Page
   */
  readonly page?: number;

}

/**
 * @schema TextractHumanLoopActivationOutput
 */
export interface TextractHumanLoopActivationOutput {
  /**
   * @schema TextractHumanLoopActivationOutput#HumanLoopArn
   */
  readonly humanLoopArn?: string;

  /**
   * @schema TextractHumanLoopActivationOutput#HumanLoopActivationReasons
   */
  readonly humanLoopActivationReasons?: string[];

  /**
   * @schema TextractHumanLoopActivationOutput#HumanLoopActivationConditionsEvaluationResults
   */
  readonly humanLoopActivationConditionsEvaluationResults?: string;

}

/**
 * @schema TextractWarning
 */
export interface TextractWarning {
  /**
   * @schema TextractWarning#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema TextractWarning#Pages
   */
  readonly pages?: number[];

}

/**
 * @schema TextractDocumentLocation
 */
export interface TextractDocumentLocation {
  /**
   * @schema TextractDocumentLocation#S3Object
   */
  readonly s3Object?: TextractS3Object;

}

/**
 * @schema TextractNotificationChannel
 */
export interface TextractNotificationChannel {
  /**
   * @schema TextractNotificationChannel#SNSTopicArn
   */
  readonly snsTopicArn: string;

  /**
   * @schema TextractNotificationChannel#RoleArn
   */
  readonly roleArn: string;

}

/**
 * @schema TextractOutputConfig
 */
export interface TextractOutputConfig {
  /**
   * @schema TextractOutputConfig#S3Bucket
   */
  readonly s3Bucket: string;

  /**
   * @schema TextractOutputConfig#S3Prefix
   */
  readonly s3Prefix?: string;

}

/**
 * @schema TextractS3Object
 */
export interface TextractS3Object {
  /**
   * @schema TextractS3Object#Bucket
   */
  readonly bucket?: string;

  /**
   * @schema TextractS3Object#Name
   */
  readonly name?: string;

  /**
   * @schema TextractS3Object#Version
   */
  readonly version?: string;

}

/**
 * @schema TextractHumanLoopDataAttributes
 */
export interface TextractHumanLoopDataAttributes {
  /**
   * @schema TextractHumanLoopDataAttributes#ContentClassifiers
   */
  readonly contentClassifiers?: string[];

}

/**
 * @schema TextractGeometry
 */
export interface TextractGeometry {
  /**
   * @schema TextractGeometry#BoundingBox
   */
  readonly boundingBox?: TextractBoundingBox;

  /**
   * @schema TextractGeometry#Polygon
   */
  readonly polygon?: TextractPoint[];

}

/**
 * @schema TextractRelationship
 */
export interface TextractRelationship {
  /**
   * @schema TextractRelationship#Type
   */
  readonly type?: string;

  /**
   * @schema TextractRelationship#Ids
   */
  readonly ids?: string[];

}

/**
 * @schema TextractBoundingBox
 */
export interface TextractBoundingBox {
  /**
   * @schema TextractBoundingBox#Width
   */
  readonly width?: number;

  /**
   * @schema TextractBoundingBox#Height
   */
  readonly height?: number;

  /**
   * @schema TextractBoundingBox#Left
   */
  readonly left?: number;

  /**
   * @schema TextractBoundingBox#Top
   */
  readonly top?: number;

}

/**
 * @schema TextractPoint
 */
export interface TextractPoint {
  /**
   * @schema TextractPoint#X
   */
  readonly x?: number;

  /**
   * @schema TextractPoint#Y
   */
  readonly y?: number;

}
