/**
 * @schema AnalyzeDocumentRequest
 */
export interface AnalyzeDocumentRequest {
  /**
   * @schema AnalyzeDocumentRequest#Document
   */
  readonly document: Document;

  /**
   * @schema AnalyzeDocumentRequest#FeatureTypes
   */
  readonly featureTypes: string[];

  /**
   * @schema AnalyzeDocumentRequest#HumanLoopConfig
   */
  readonly humanLoopConfig?: HumanLoopConfig;

}

/**
 * @schema AnalyzeDocumentResponse
 */
export interface AnalyzeDocumentResponse {
  /**
   * @schema AnalyzeDocumentResponse#DocumentMetadata
   */
  readonly documentMetadata?: DocumentMetadata;

  /**
   * @schema AnalyzeDocumentResponse#Blocks
   */
  readonly blocks?: Block[];

  /**
   * @schema AnalyzeDocumentResponse#HumanLoopActivationOutput
   */
  readonly humanLoopActivationOutput?: HumanLoopActivationOutput;

  /**
   * @schema AnalyzeDocumentResponse#AnalyzeDocumentModelVersion
   */
  readonly analyzeDocumentModelVersion?: string;

}

/**
 * @schema DetectDocumentTextRequest
 */
export interface DetectDocumentTextRequest {
  /**
   * @schema DetectDocumentTextRequest#Document
   */
  readonly document: Document;

}

/**
 * @schema DetectDocumentTextResponse
 */
export interface DetectDocumentTextResponse {
  /**
   * @schema DetectDocumentTextResponse#DocumentMetadata
   */
  readonly documentMetadata?: DocumentMetadata;

  /**
   * @schema DetectDocumentTextResponse#Blocks
   */
  readonly blocks?: Block[];

  /**
   * @schema DetectDocumentTextResponse#DetectDocumentTextModelVersion
   */
  readonly detectDocumentTextModelVersion?: string;

}

/**
 * @schema GetDocumentAnalysisRequest
 */
export interface GetDocumentAnalysisRequest {
  /**
   * @schema GetDocumentAnalysisRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema GetDocumentAnalysisRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetDocumentAnalysisRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetDocumentAnalysisResponse
 */
export interface GetDocumentAnalysisResponse {
  /**
   * @schema GetDocumentAnalysisResponse#DocumentMetadata
   */
  readonly documentMetadata?: DocumentMetadata;

  /**
   * @schema GetDocumentAnalysisResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema GetDocumentAnalysisResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetDocumentAnalysisResponse#Blocks
   */
  readonly blocks?: Block[];

  /**
   * @schema GetDocumentAnalysisResponse#Warnings
   */
  readonly warnings?: Warning[];

  /**
   * @schema GetDocumentAnalysisResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema GetDocumentAnalysisResponse#AnalyzeDocumentModelVersion
   */
  readonly analyzeDocumentModelVersion?: string;

}

/**
 * @schema GetDocumentTextDetectionRequest
 */
export interface GetDocumentTextDetectionRequest {
  /**
   * @schema GetDocumentTextDetectionRequest#JobId
   */
  readonly jobId: string;

  /**
   * @schema GetDocumentTextDetectionRequest#MaxResults
   */
  readonly maxResults?: number;

  /**
   * @schema GetDocumentTextDetectionRequest#NextToken
   */
  readonly nextToken?: string;

}

/**
 * @schema GetDocumentTextDetectionResponse
 */
export interface GetDocumentTextDetectionResponse {
  /**
   * @schema GetDocumentTextDetectionResponse#DocumentMetadata
   */
  readonly documentMetadata?: DocumentMetadata;

  /**
   * @schema GetDocumentTextDetectionResponse#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema GetDocumentTextDetectionResponse#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema GetDocumentTextDetectionResponse#Blocks
   */
  readonly blocks?: Block[];

  /**
   * @schema GetDocumentTextDetectionResponse#Warnings
   */
  readonly warnings?: Warning[];

  /**
   * @schema GetDocumentTextDetectionResponse#StatusMessage
   */
  readonly statusMessage?: string;

  /**
   * @schema GetDocumentTextDetectionResponse#DetectDocumentTextModelVersion
   */
  readonly detectDocumentTextModelVersion?: string;

}

/**
 * @schema StartDocumentAnalysisRequest
 */
export interface StartDocumentAnalysisRequest {
  /**
   * @schema StartDocumentAnalysisRequest#DocumentLocation
   */
  readonly documentLocation: DocumentLocation;

  /**
   * @schema StartDocumentAnalysisRequest#FeatureTypes
   */
  readonly featureTypes: string[];

  /**
   * @schema StartDocumentAnalysisRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema StartDocumentAnalysisRequest#JobTag
   */
  readonly jobTag?: string;

  /**
   * @schema StartDocumentAnalysisRequest#NotificationChannel
   */
  readonly notificationChannel?: NotificationChannel;

  /**
   * @schema StartDocumentAnalysisRequest#OutputConfig
   */
  readonly outputConfig?: OutputConfig;

  /**
   * @schema StartDocumentAnalysisRequest#KMSKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema StartDocumentAnalysisResponse
 */
export interface StartDocumentAnalysisResponse {
  /**
   * @schema StartDocumentAnalysisResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema StartDocumentTextDetectionRequest
 */
export interface StartDocumentTextDetectionRequest {
  /**
   * @schema StartDocumentTextDetectionRequest#DocumentLocation
   */
  readonly documentLocation: DocumentLocation;

  /**
   * @schema StartDocumentTextDetectionRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema StartDocumentTextDetectionRequest#JobTag
   */
  readonly jobTag?: string;

  /**
   * @schema StartDocumentTextDetectionRequest#NotificationChannel
   */
  readonly notificationChannel?: NotificationChannel;

  /**
   * @schema StartDocumentTextDetectionRequest#OutputConfig
   */
  readonly outputConfig?: OutputConfig;

  /**
   * @schema StartDocumentTextDetectionRequest#KMSKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * @schema StartDocumentTextDetectionResponse
 */
export interface StartDocumentTextDetectionResponse {
  /**
   * @schema StartDocumentTextDetectionResponse#JobId
   */
  readonly jobId?: string;

}

/**
 * @schema Document
 */
export interface Document {
  /**
   * @schema Document#Bytes
   */
  readonly bytes?: any;

  /**
   * @schema Document#S3Object
   */
  readonly s3Object?: S3Object;

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
 * @schema DocumentMetadata
 */
export interface DocumentMetadata {
  /**
   * @schema DocumentMetadata#Pages
   */
  readonly pages?: number;

}

/**
 * @schema Block
 */
export interface Block {
  /**
   * @schema Block#BlockType
   */
  readonly blockType?: string;

  /**
   * @schema Block#Confidence
   */
  readonly confidence?: number;

  /**
   * @schema Block#Text
   */
  readonly text?: string;

  /**
   * @schema Block#TextType
   */
  readonly textType?: string;

  /**
   * @schema Block#RowIndex
   */
  readonly rowIndex?: number;

  /**
   * @schema Block#ColumnIndex
   */
  readonly columnIndex?: number;

  /**
   * @schema Block#RowSpan
   */
  readonly rowSpan?: number;

  /**
   * @schema Block#ColumnSpan
   */
  readonly columnSpan?: number;

  /**
   * @schema Block#Geometry
   */
  readonly geometry?: Geometry;

  /**
   * @schema Block#Id
   */
  readonly id?: string;

  /**
   * @schema Block#Relationships
   */
  readonly relationships?: Relationship[];

  /**
   * @schema Block#EntityTypes
   */
  readonly entityTypes?: string[];

  /**
   * @schema Block#SelectionStatus
   */
  readonly selectionStatus?: string;

  /**
   * @schema Block#Page
   */
  readonly page?: number;

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
 * @schema Warning
 */
export interface Warning {
  /**
   * @schema Warning#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema Warning#Pages
   */
  readonly pages?: number[];

}

/**
 * @schema DocumentLocation
 */
export interface DocumentLocation {
  /**
   * @schema DocumentLocation#S3Object
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
 * @schema OutputConfig
 */
export interface OutputConfig {
  /**
   * @schema OutputConfig#S3Bucket
   */
  readonly s3Bucket: string;

  /**
   * @schema OutputConfig#S3Prefix
   */
  readonly s3Prefix?: string;

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
 * @schema HumanLoopDataAttributes
 */
export interface HumanLoopDataAttributes {
  /**
   * @schema HumanLoopDataAttributes#ContentClassifiers
   */
  readonly contentClassifiers?: string[];

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
 * @schema Relationship
 */
export interface Relationship {
  /**
   * @schema Relationship#Type
   */
  readonly type?: string;

  /**
   * @schema Relationship#Ids
   */
  readonly ids?: string[];

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
