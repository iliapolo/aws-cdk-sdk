/**
 * @schema TextractAnalyzeDocumentRequest
 */
export interface TextractAnalyzeDocumentRequest {
  /**
   * @schema TextractAnalyzeDocumentRequest#Document
   */
  readonly document?: TextractDocument;

  /**
   * @schema TextractAnalyzeDocumentRequest#FeatureTypes
   */
  readonly featureTypes?: string[];

  /**
   * @schema TextractAnalyzeDocumentRequest#HumanLoopConfig
   */
  readonly humanLoopConfig?: TextractHumanLoopConfig;

}

/**
 * Converts an object of type 'TextractAnalyzeDocumentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractAnalyzeDocumentRequest(obj: TextractAnalyzeDocumentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Document': toJson_TextractDocument(obj.document),
    'FeatureTypes': obj.featureTypes?.map(y => y),
    'HumanLoopConfig': toJson_TextractHumanLoopConfig(obj.humanLoopConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TextractAnalyzeDocumentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractAnalyzeDocumentResponse(obj: TextractAnalyzeDocumentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DocumentMetadata': toJson_TextractDocumentMetadata(obj.documentMetadata),
    'Blocks': obj.blocks?.map(y => toJson_TextractBlock(y)),
    'HumanLoopActivationOutput': toJson_TextractHumanLoopActivationOutput(obj.humanLoopActivationOutput),
    'AnalyzeDocumentModelVersion': obj.analyzeDocumentModelVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TextractAnalyzeExpenseRequest
 */
export interface TextractAnalyzeExpenseRequest {
  /**
   * @schema TextractAnalyzeExpenseRequest#Document
   */
  readonly document?: TextractDocument;

}

/**
 * Converts an object of type 'TextractAnalyzeExpenseRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractAnalyzeExpenseRequest(obj: TextractAnalyzeExpenseRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Document': toJson_TextractDocument(obj.document),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TextractAnalyzeExpenseResponse
 */
export interface TextractAnalyzeExpenseResponse {
  /**
   * @schema TextractAnalyzeExpenseResponse#DocumentMetadata
   */
  readonly documentMetadata?: TextractDocumentMetadata;

  /**
   * @schema TextractAnalyzeExpenseResponse#ExpenseDocuments
   */
  readonly expenseDocuments?: TextractExpenseDocument[];

}

/**
 * Converts an object of type 'TextractAnalyzeExpenseResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractAnalyzeExpenseResponse(obj: TextractAnalyzeExpenseResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DocumentMetadata': toJson_TextractDocumentMetadata(obj.documentMetadata),
    'ExpenseDocuments': obj.expenseDocuments?.map(y => toJson_TextractExpenseDocument(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TextractDetectDocumentTextRequest
 */
export interface TextractDetectDocumentTextRequest {
  /**
   * @schema TextractDetectDocumentTextRequest#Document
   */
  readonly document?: TextractDocument;

}

/**
 * Converts an object of type 'TextractDetectDocumentTextRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractDetectDocumentTextRequest(obj: TextractDetectDocumentTextRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Document': toJson_TextractDocument(obj.document),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TextractDetectDocumentTextResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractDetectDocumentTextResponse(obj: TextractDetectDocumentTextResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DocumentMetadata': toJson_TextractDocumentMetadata(obj.documentMetadata),
    'Blocks': obj.blocks?.map(y => toJson_TextractBlock(y)),
    'DetectDocumentTextModelVersion': obj.detectDocumentTextModelVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TextractGetDocumentAnalysisRequest
 */
export interface TextractGetDocumentAnalysisRequest {
  /**
   * @schema TextractGetDocumentAnalysisRequest#JobId
   */
  readonly jobId?: string;

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
 * Converts an object of type 'TextractGetDocumentAnalysisRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractGetDocumentAnalysisRequest(obj: TextractGetDocumentAnalysisRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TextractGetDocumentAnalysisResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractGetDocumentAnalysisResponse(obj: TextractGetDocumentAnalysisResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DocumentMetadata': toJson_TextractDocumentMetadata(obj.documentMetadata),
    'JobStatus': obj.jobStatus,
    'NextToken': obj.nextToken,
    'Blocks': obj.blocks?.map(y => toJson_TextractBlock(y)),
    'Warnings': obj.warnings?.map(y => toJson_TextractWarning(y)),
    'StatusMessage': obj.statusMessage,
    'AnalyzeDocumentModelVersion': obj.analyzeDocumentModelVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TextractGetDocumentTextDetectionRequest
 */
export interface TextractGetDocumentTextDetectionRequest {
  /**
   * @schema TextractGetDocumentTextDetectionRequest#JobId
   */
  readonly jobId?: string;

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
 * Converts an object of type 'TextractGetDocumentTextDetectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractGetDocumentTextDetectionRequest(obj: TextractGetDocumentTextDetectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'MaxResults': obj.maxResults,
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TextractGetDocumentTextDetectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractGetDocumentTextDetectionResponse(obj: TextractGetDocumentTextDetectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DocumentMetadata': toJson_TextractDocumentMetadata(obj.documentMetadata),
    'JobStatus': obj.jobStatus,
    'NextToken': obj.nextToken,
    'Blocks': obj.blocks?.map(y => toJson_TextractBlock(y)),
    'Warnings': obj.warnings?.map(y => toJson_TextractWarning(y)),
    'StatusMessage': obj.statusMessage,
    'DetectDocumentTextModelVersion': obj.detectDocumentTextModelVersion,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TextractStartDocumentAnalysisRequest
 */
export interface TextractStartDocumentAnalysisRequest {
  /**
   * @schema TextractStartDocumentAnalysisRequest#DocumentLocation
   */
  readonly documentLocation?: TextractDocumentLocation;

  /**
   * @schema TextractStartDocumentAnalysisRequest#FeatureTypes
   */
  readonly featureTypes?: string[];

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
 * Converts an object of type 'TextractStartDocumentAnalysisRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractStartDocumentAnalysisRequest(obj: TextractStartDocumentAnalysisRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DocumentLocation': toJson_TextractDocumentLocation(obj.documentLocation),
    'FeatureTypes': obj.featureTypes?.map(y => y),
    'ClientRequestToken': obj.clientRequestToken,
    'JobTag': obj.jobTag,
    'NotificationChannel': toJson_TextractNotificationChannel(obj.notificationChannel),
    'OutputConfig': toJson_TextractOutputConfig(obj.outputConfig),
    'KMSKeyId': obj.kmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TextractStartDocumentAnalysisResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractStartDocumentAnalysisResponse(obj: TextractStartDocumentAnalysisResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TextractStartDocumentTextDetectionRequest
 */
export interface TextractStartDocumentTextDetectionRequest {
  /**
   * @schema TextractStartDocumentTextDetectionRequest#DocumentLocation
   */
  readonly documentLocation?: TextractDocumentLocation;

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
 * Converts an object of type 'TextractStartDocumentTextDetectionRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractStartDocumentTextDetectionRequest(obj: TextractStartDocumentTextDetectionRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DocumentLocation': toJson_TextractDocumentLocation(obj.documentLocation),
    'ClientRequestToken': obj.clientRequestToken,
    'JobTag': obj.jobTag,
    'NotificationChannel': toJson_TextractNotificationChannel(obj.notificationChannel),
    'OutputConfig': toJson_TextractOutputConfig(obj.outputConfig),
    'KMSKeyId': obj.kmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TextractStartDocumentTextDetectionResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractStartDocumentTextDetectionResponse(obj: TextractStartDocumentTextDetectionResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TextractDocument' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractDocument(obj: TextractDocument | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bytes': obj.bytes,
    'S3Object': toJson_TextractS3Object(obj.s3Object),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TextractHumanLoopConfig
 */
export interface TextractHumanLoopConfig {
  /**
   * @schema TextractHumanLoopConfig#HumanLoopName
   */
  readonly humanLoopName?: string;

  /**
   * @schema TextractHumanLoopConfig#FlowDefinitionArn
   */
  readonly flowDefinitionArn?: string;

  /**
   * @schema TextractHumanLoopConfig#DataAttributes
   */
  readonly dataAttributes?: TextractHumanLoopDataAttributes;

}

/**
 * Converts an object of type 'TextractHumanLoopConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractHumanLoopConfig(obj: TextractHumanLoopConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HumanLoopName': obj.humanLoopName,
    'FlowDefinitionArn': obj.flowDefinitionArn,
    'DataAttributes': toJson_TextractHumanLoopDataAttributes(obj.dataAttributes),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TextractDocumentMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractDocumentMetadata(obj: TextractDocumentMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Pages': obj.pages,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TextractBlock' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractBlock(obj: TextractBlock | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BlockType': obj.blockType,
    'Confidence': obj.confidence,
    'Text': obj.text,
    'TextType': obj.textType,
    'RowIndex': obj.rowIndex,
    'ColumnIndex': obj.columnIndex,
    'RowSpan': obj.rowSpan,
    'ColumnSpan': obj.columnSpan,
    'Geometry': toJson_TextractGeometry(obj.geometry),
    'Id': obj.id,
    'Relationships': obj.relationships?.map(y => toJson_TextractRelationship(y)),
    'EntityTypes': obj.entityTypes?.map(y => y),
    'SelectionStatus': obj.selectionStatus,
    'Page': obj.page,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TextractHumanLoopActivationOutput' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractHumanLoopActivationOutput(obj: TextractHumanLoopActivationOutput | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'HumanLoopArn': obj.humanLoopArn,
    'HumanLoopActivationReasons': obj.humanLoopActivationReasons?.map(y => y),
    'HumanLoopActivationConditionsEvaluationResults': obj.humanLoopActivationConditionsEvaluationResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TextractExpenseDocument
 */
export interface TextractExpenseDocument {
  /**
   * @schema TextractExpenseDocument#ExpenseIndex
   */
  readonly expenseIndex?: number;

  /**
   * @schema TextractExpenseDocument#SummaryFields
   */
  readonly summaryFields?: TextractExpenseField[];

  /**
   * @schema TextractExpenseDocument#LineItemGroups
   */
  readonly lineItemGroups?: TextractLineItemGroup[];

}

/**
 * Converts an object of type 'TextractExpenseDocument' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractExpenseDocument(obj: TextractExpenseDocument | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ExpenseIndex': obj.expenseIndex,
    'SummaryFields': obj.summaryFields?.map(y => toJson_TextractExpenseField(y)),
    'LineItemGroups': obj.lineItemGroups?.map(y => toJson_TextractLineItemGroup(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TextractWarning' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractWarning(obj: TextractWarning | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ErrorCode': obj.errorCode,
    'Pages': obj.pages?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TextractDocumentLocation' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractDocumentLocation(obj: TextractDocumentLocation | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Object': toJson_TextractS3Object(obj.s3Object),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TextractNotificationChannel
 */
export interface TextractNotificationChannel {
  /**
   * @schema TextractNotificationChannel#SNSTopicArn
   */
  readonly snsTopicArn?: string;

  /**
   * @schema TextractNotificationChannel#RoleArn
   */
  readonly roleArn?: string;

}

/**
 * Converts an object of type 'TextractNotificationChannel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractNotificationChannel(obj: TextractNotificationChannel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SNSTopicArn': obj.snsTopicArn,
    'RoleArn': obj.roleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TextractOutputConfig
 */
export interface TextractOutputConfig {
  /**
   * @schema TextractOutputConfig#S3Bucket
   */
  readonly s3Bucket?: string;

  /**
   * @schema TextractOutputConfig#S3Prefix
   */
  readonly s3Prefix?: string;

}

/**
 * Converts an object of type 'TextractOutputConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractOutputConfig(obj: TextractOutputConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Bucket': obj.s3Bucket,
    'S3Prefix': obj.s3Prefix,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TextractS3Object' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractS3Object(obj: TextractS3Object | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Bucket': obj.bucket,
    'Name': obj.name,
    'Version': obj.version,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TextractHumanLoopDataAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractHumanLoopDataAttributes(obj: TextractHumanLoopDataAttributes | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ContentClassifiers': obj.contentClassifiers?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TextractGeometry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractGeometry(obj: TextractGeometry | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'BoundingBox': toJson_TextractBoundingBox(obj.boundingBox),
    'Polygon': obj.polygon?.map(y => toJson_TextractPoint(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TextractRelationship' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractRelationship(obj: TextractRelationship | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'Ids': obj.ids?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TextractExpenseField
 */
export interface TextractExpenseField {
  /**
   * @schema TextractExpenseField#Type
   */
  readonly type?: TextractExpenseType;

  /**
   * @schema TextractExpenseField#LabelDetection
   */
  readonly labelDetection?: TextractExpenseDetection;

  /**
   * @schema TextractExpenseField#ValueDetection
   */
  readonly valueDetection?: TextractExpenseDetection;

  /**
   * @schema TextractExpenseField#PageNumber
   */
  readonly pageNumber?: number;

}

/**
 * Converts an object of type 'TextractExpenseField' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractExpenseField(obj: TextractExpenseField | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': toJson_TextractExpenseType(obj.type),
    'LabelDetection': toJson_TextractExpenseDetection(obj.labelDetection),
    'ValueDetection': toJson_TextractExpenseDetection(obj.valueDetection),
    'PageNumber': obj.pageNumber,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TextractLineItemGroup
 */
export interface TextractLineItemGroup {
  /**
   * @schema TextractLineItemGroup#LineItemGroupIndex
   */
  readonly lineItemGroupIndex?: number;

  /**
   * @schema TextractLineItemGroup#LineItems
   */
  readonly lineItems?: TextractLineItemFields[];

}

/**
 * Converts an object of type 'TextractLineItemGroup' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractLineItemGroup(obj: TextractLineItemGroup | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LineItemGroupIndex': obj.lineItemGroupIndex,
    'LineItems': obj.lineItems?.map(y => toJson_TextractLineItemFields(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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
 * Converts an object of type 'TextractBoundingBox' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractBoundingBox(obj: TextractBoundingBox | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Width': obj.width,
    'Height': obj.height,
    'Left': obj.left,
    'Top': obj.top,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

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

/**
 * Converts an object of type 'TextractPoint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractPoint(obj: TextractPoint | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'X': obj.x,
    'Y': obj.y,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TextractExpenseType
 */
export interface TextractExpenseType {
  /**
   * @schema TextractExpenseType#Text
   */
  readonly text?: string;

  /**
   * @schema TextractExpenseType#Confidence
   */
  readonly confidence?: number;

}

/**
 * Converts an object of type 'TextractExpenseType' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractExpenseType(obj: TextractExpenseType | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Text': obj.text,
    'Confidence': obj.confidence,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TextractExpenseDetection
 */
export interface TextractExpenseDetection {
  /**
   * @schema TextractExpenseDetection#Text
   */
  readonly text?: string;

  /**
   * @schema TextractExpenseDetection#Geometry
   */
  readonly geometry?: TextractGeometry;

  /**
   * @schema TextractExpenseDetection#Confidence
   */
  readonly confidence?: number;

}

/**
 * Converts an object of type 'TextractExpenseDetection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractExpenseDetection(obj: TextractExpenseDetection | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Text': obj.text,
    'Geometry': toJson_TextractGeometry(obj.geometry),
    'Confidence': obj.confidence,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema TextractLineItemFields
 */
export interface TextractLineItemFields {
  /**
   * @schema TextractLineItemFields#LineItemExpenseFields
   */
  readonly lineItemExpenseFields?: TextractExpenseField[];

}

/**
 * Converts an object of type 'TextractLineItemFields' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_TextractLineItemFields(obj: TextractLineItemFields | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LineItemExpenseFields': obj.lineItemExpenseFields?.map(y => toJson_TextractExpenseField(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
