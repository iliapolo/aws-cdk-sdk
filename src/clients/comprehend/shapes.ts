/**
 * @schema ComprehendBatchDetectDominantLanguageRequest
 */
export interface ComprehendBatchDetectDominantLanguageRequest {
  /**
   * @schema ComprehendBatchDetectDominantLanguageRequest#TextList
   */
  readonly textList?: string[];

}

/**
 * Converts an object of type 'ComprehendBatchDetectDominantLanguageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendBatchDetectDominantLanguageRequest(obj: ComprehendBatchDetectDominantLanguageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TextList': obj.textList?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendBatchDetectDominantLanguageResponse
 */
export interface ComprehendBatchDetectDominantLanguageResponse {
  /**
   * @schema ComprehendBatchDetectDominantLanguageResponse#ResultList
   */
  readonly resultList?: ComprehendBatchDetectDominantLanguageItemResult[];

  /**
   * @schema ComprehendBatchDetectDominantLanguageResponse#ErrorList
   */
  readonly errorList?: ComprehendBatchItemError[];

}

/**
 * Converts an object of type 'ComprehendBatchDetectDominantLanguageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendBatchDetectDominantLanguageResponse(obj: ComprehendBatchDetectDominantLanguageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResultList': obj.resultList?.map(y => toJson_ComprehendBatchDetectDominantLanguageItemResult(y)),
    'ErrorList': obj.errorList?.map(y => toJson_ComprehendBatchItemError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendBatchDetectEntitiesRequest
 */
export interface ComprehendBatchDetectEntitiesRequest {
  /**
   * @schema ComprehendBatchDetectEntitiesRequest#TextList
   */
  readonly textList?: string[];

  /**
   * @schema ComprehendBatchDetectEntitiesRequest#LanguageCode
   */
  readonly languageCode?: string;

}

/**
 * Converts an object of type 'ComprehendBatchDetectEntitiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendBatchDetectEntitiesRequest(obj: ComprehendBatchDetectEntitiesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TextList': obj.textList?.map(y => y),
    'LanguageCode': obj.languageCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendBatchDetectEntitiesResponse
 */
export interface ComprehendBatchDetectEntitiesResponse {
  /**
   * @schema ComprehendBatchDetectEntitiesResponse#ResultList
   */
  readonly resultList?: ComprehendBatchDetectEntitiesItemResult[];

  /**
   * @schema ComprehendBatchDetectEntitiesResponse#ErrorList
   */
  readonly errorList?: ComprehendBatchItemError[];

}

/**
 * Converts an object of type 'ComprehendBatchDetectEntitiesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendBatchDetectEntitiesResponse(obj: ComprehendBatchDetectEntitiesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResultList': obj.resultList?.map(y => toJson_ComprehendBatchDetectEntitiesItemResult(y)),
    'ErrorList': obj.errorList?.map(y => toJson_ComprehendBatchItemError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendBatchDetectKeyPhrasesRequest
 */
export interface ComprehendBatchDetectKeyPhrasesRequest {
  /**
   * @schema ComprehendBatchDetectKeyPhrasesRequest#TextList
   */
  readonly textList?: string[];

  /**
   * @schema ComprehendBatchDetectKeyPhrasesRequest#LanguageCode
   */
  readonly languageCode?: string;

}

/**
 * Converts an object of type 'ComprehendBatchDetectKeyPhrasesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendBatchDetectKeyPhrasesRequest(obj: ComprehendBatchDetectKeyPhrasesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TextList': obj.textList?.map(y => y),
    'LanguageCode': obj.languageCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendBatchDetectKeyPhrasesResponse
 */
export interface ComprehendBatchDetectKeyPhrasesResponse {
  /**
   * @schema ComprehendBatchDetectKeyPhrasesResponse#ResultList
   */
  readonly resultList?: ComprehendBatchDetectKeyPhrasesItemResult[];

  /**
   * @schema ComprehendBatchDetectKeyPhrasesResponse#ErrorList
   */
  readonly errorList?: ComprehendBatchItemError[];

}

/**
 * Converts an object of type 'ComprehendBatchDetectKeyPhrasesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendBatchDetectKeyPhrasesResponse(obj: ComprehendBatchDetectKeyPhrasesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResultList': obj.resultList?.map(y => toJson_ComprehendBatchDetectKeyPhrasesItemResult(y)),
    'ErrorList': obj.errorList?.map(y => toJson_ComprehendBatchItemError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendBatchDetectSentimentRequest
 */
export interface ComprehendBatchDetectSentimentRequest {
  /**
   * @schema ComprehendBatchDetectSentimentRequest#TextList
   */
  readonly textList?: string[];

  /**
   * @schema ComprehendBatchDetectSentimentRequest#LanguageCode
   */
  readonly languageCode?: string;

}

/**
 * Converts an object of type 'ComprehendBatchDetectSentimentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendBatchDetectSentimentRequest(obj: ComprehendBatchDetectSentimentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TextList': obj.textList?.map(y => y),
    'LanguageCode': obj.languageCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendBatchDetectSentimentResponse
 */
export interface ComprehendBatchDetectSentimentResponse {
  /**
   * @schema ComprehendBatchDetectSentimentResponse#ResultList
   */
  readonly resultList?: ComprehendBatchDetectSentimentItemResult[];

  /**
   * @schema ComprehendBatchDetectSentimentResponse#ErrorList
   */
  readonly errorList?: ComprehendBatchItemError[];

}

/**
 * Converts an object of type 'ComprehendBatchDetectSentimentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendBatchDetectSentimentResponse(obj: ComprehendBatchDetectSentimentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResultList': obj.resultList?.map(y => toJson_ComprehendBatchDetectSentimentItemResult(y)),
    'ErrorList': obj.errorList?.map(y => toJson_ComprehendBatchItemError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendBatchDetectSyntaxRequest
 */
export interface ComprehendBatchDetectSyntaxRequest {
  /**
   * @schema ComprehendBatchDetectSyntaxRequest#TextList
   */
  readonly textList?: string[];

  /**
   * @schema ComprehendBatchDetectSyntaxRequest#LanguageCode
   */
  readonly languageCode?: string;

}

/**
 * Converts an object of type 'ComprehendBatchDetectSyntaxRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendBatchDetectSyntaxRequest(obj: ComprehendBatchDetectSyntaxRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TextList': obj.textList?.map(y => y),
    'LanguageCode': obj.languageCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendBatchDetectSyntaxResponse
 */
export interface ComprehendBatchDetectSyntaxResponse {
  /**
   * @schema ComprehendBatchDetectSyntaxResponse#ResultList
   */
  readonly resultList?: ComprehendBatchDetectSyntaxItemResult[];

  /**
   * @schema ComprehendBatchDetectSyntaxResponse#ErrorList
   */
  readonly errorList?: ComprehendBatchItemError[];

}

/**
 * Converts an object of type 'ComprehendBatchDetectSyntaxResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendBatchDetectSyntaxResponse(obj: ComprehendBatchDetectSyntaxResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResultList': obj.resultList?.map(y => toJson_ComprehendBatchDetectSyntaxItemResult(y)),
    'ErrorList': obj.errorList?.map(y => toJson_ComprehendBatchItemError(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendClassifyDocumentRequest
 */
export interface ComprehendClassifyDocumentRequest {
  /**
   * @schema ComprehendClassifyDocumentRequest#Text
   */
  readonly text?: string;

  /**
   * @schema ComprehendClassifyDocumentRequest#EndpointArn
   */
  readonly endpointArn?: string;

}

/**
 * Converts an object of type 'ComprehendClassifyDocumentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendClassifyDocumentRequest(obj: ComprehendClassifyDocumentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Text': obj.text,
    'EndpointArn': obj.endpointArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendClassifyDocumentResponse
 */
export interface ComprehendClassifyDocumentResponse {
  /**
   * @schema ComprehendClassifyDocumentResponse#Classes
   */
  readonly classes?: ComprehendDocumentClass[];

  /**
   * @schema ComprehendClassifyDocumentResponse#Labels
   */
  readonly labels?: ComprehendDocumentLabel[];

}

/**
 * Converts an object of type 'ComprehendClassifyDocumentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendClassifyDocumentResponse(obj: ComprehendClassifyDocumentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Classes': obj.classes?.map(y => toJson_ComprehendDocumentClass(y)),
    'Labels': obj.labels?.map(y => toJson_ComprehendDocumentLabel(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendContainsPiiEntitiesRequest
 */
export interface ComprehendContainsPiiEntitiesRequest {
  /**
   * @schema ComprehendContainsPiiEntitiesRequest#Text
   */
  readonly text?: string;

  /**
   * @schema ComprehendContainsPiiEntitiesRequest#LanguageCode
   */
  readonly languageCode?: string;

}

/**
 * Converts an object of type 'ComprehendContainsPiiEntitiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendContainsPiiEntitiesRequest(obj: ComprehendContainsPiiEntitiesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Text': obj.text,
    'LanguageCode': obj.languageCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendContainsPiiEntitiesResponse
 */
export interface ComprehendContainsPiiEntitiesResponse {
  /**
   * @schema ComprehendContainsPiiEntitiesResponse#Labels
   */
  readonly labels?: ComprehendEntityLabel[];

}

/**
 * Converts an object of type 'ComprehendContainsPiiEntitiesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendContainsPiiEntitiesResponse(obj: ComprehendContainsPiiEntitiesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Labels': obj.labels?.map(y => toJson_ComprehendEntityLabel(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendCreateDocumentClassifierRequest
 */
export interface ComprehendCreateDocumentClassifierRequest {
  /**
   * @schema ComprehendCreateDocumentClassifierRequest#DocumentClassifierName
   */
  readonly documentClassifierName?: string;

  /**
   * @schema ComprehendCreateDocumentClassifierRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendCreateDocumentClassifierRequest#Tags
   */
  readonly tags?: ComprehendTag[];

  /**
   * @schema ComprehendCreateDocumentClassifierRequest#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendDocumentClassifierInputDataConfig;

  /**
   * @schema ComprehendCreateDocumentClassifierRequest#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendDocumentClassifierOutputDataConfig;

  /**
   * @schema ComprehendCreateDocumentClassifierRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ComprehendCreateDocumentClassifierRequest#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ComprehendCreateDocumentClassifierRequest#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendCreateDocumentClassifierRequest#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

  /**
   * @schema ComprehendCreateDocumentClassifierRequest#Mode
   */
  readonly mode?: string;

  /**
   * @schema ComprehendCreateDocumentClassifierRequest#ModelKmsKeyId
   */
  readonly modelKmsKeyId?: string;

}

/**
 * Converts an object of type 'ComprehendCreateDocumentClassifierRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendCreateDocumentClassifierRequest(obj: ComprehendCreateDocumentClassifierRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DocumentClassifierName': obj.documentClassifierName,
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'Tags': obj.tags?.map(y => toJson_ComprehendTag(y)),
    'InputDataConfig': toJson_ComprehendDocumentClassifierInputDataConfig(obj.inputDataConfig),
    'OutputDataConfig': toJson_ComprehendDocumentClassifierOutputDataConfig(obj.outputDataConfig),
    'ClientRequestToken': obj.clientRequestToken,
    'LanguageCode': obj.languageCode,
    'VolumeKmsKeyId': obj.volumeKmsKeyId,
    'VpcConfig': toJson_ComprehendVpcConfig(obj.vpcConfig),
    'Mode': obj.mode,
    'ModelKmsKeyId': obj.modelKmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendCreateDocumentClassifierResponse
 */
export interface ComprehendCreateDocumentClassifierResponse {
  /**
   * @schema ComprehendCreateDocumentClassifierResponse#DocumentClassifierArn
   */
  readonly documentClassifierArn?: string;

}

/**
 * Converts an object of type 'ComprehendCreateDocumentClassifierResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendCreateDocumentClassifierResponse(obj: ComprehendCreateDocumentClassifierResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DocumentClassifierArn': obj.documentClassifierArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendCreateEndpointRequest
 */
export interface ComprehendCreateEndpointRequest {
  /**
   * @schema ComprehendCreateEndpointRequest#EndpointName
   */
  readonly endpointName?: string;

  /**
   * @schema ComprehendCreateEndpointRequest#ModelArn
   */
  readonly modelArn?: string;

  /**
   * @schema ComprehendCreateEndpointRequest#DesiredInferenceUnits
   */
  readonly desiredInferenceUnits?: number;

  /**
   * @schema ComprehendCreateEndpointRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ComprehendCreateEndpointRequest#Tags
   */
  readonly tags?: ComprehendTag[];

  /**
   * @schema ComprehendCreateEndpointRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

}

/**
 * Converts an object of type 'ComprehendCreateEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendCreateEndpointRequest(obj: ComprehendCreateEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointName': obj.endpointName,
    'ModelArn': obj.modelArn,
    'DesiredInferenceUnits': obj.desiredInferenceUnits,
    'ClientRequestToken': obj.clientRequestToken,
    'Tags': obj.tags?.map(y => toJson_ComprehendTag(y)),
    'DataAccessRoleArn': obj.dataAccessRoleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendCreateEndpointResponse
 */
export interface ComprehendCreateEndpointResponse {
  /**
   * @schema ComprehendCreateEndpointResponse#EndpointArn
   */
  readonly endpointArn?: string;

}

/**
 * Converts an object of type 'ComprehendCreateEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendCreateEndpointResponse(obj: ComprehendCreateEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointArn': obj.endpointArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendCreateEntityRecognizerRequest
 */
export interface ComprehendCreateEntityRecognizerRequest {
  /**
   * @schema ComprehendCreateEntityRecognizerRequest#RecognizerName
   */
  readonly recognizerName?: string;

  /**
   * @schema ComprehendCreateEntityRecognizerRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendCreateEntityRecognizerRequest#Tags
   */
  readonly tags?: ComprehendTag[];

  /**
   * @schema ComprehendCreateEntityRecognizerRequest#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendEntityRecognizerInputDataConfig;

  /**
   * @schema ComprehendCreateEntityRecognizerRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ComprehendCreateEntityRecognizerRequest#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ComprehendCreateEntityRecognizerRequest#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendCreateEntityRecognizerRequest#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

  /**
   * @schema ComprehendCreateEntityRecognizerRequest#ModelKmsKeyId
   */
  readonly modelKmsKeyId?: string;

}

/**
 * Converts an object of type 'ComprehendCreateEntityRecognizerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendCreateEntityRecognizerRequest(obj: ComprehendCreateEntityRecognizerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'RecognizerName': obj.recognizerName,
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'Tags': obj.tags?.map(y => toJson_ComprehendTag(y)),
    'InputDataConfig': toJson_ComprehendEntityRecognizerInputDataConfig(obj.inputDataConfig),
    'ClientRequestToken': obj.clientRequestToken,
    'LanguageCode': obj.languageCode,
    'VolumeKmsKeyId': obj.volumeKmsKeyId,
    'VpcConfig': toJson_ComprehendVpcConfig(obj.vpcConfig),
    'ModelKmsKeyId': obj.modelKmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendCreateEntityRecognizerResponse
 */
export interface ComprehendCreateEntityRecognizerResponse {
  /**
   * @schema ComprehendCreateEntityRecognizerResponse#EntityRecognizerArn
   */
  readonly entityRecognizerArn?: string;

}

/**
 * Converts an object of type 'ComprehendCreateEntityRecognizerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendCreateEntityRecognizerResponse(obj: ComprehendCreateEntityRecognizerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EntityRecognizerArn': obj.entityRecognizerArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDeleteDocumentClassifierRequest
 */
export interface ComprehendDeleteDocumentClassifierRequest {
  /**
   * @schema ComprehendDeleteDocumentClassifierRequest#DocumentClassifierArn
   */
  readonly documentClassifierArn?: string;

}

/**
 * Converts an object of type 'ComprehendDeleteDocumentClassifierRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDeleteDocumentClassifierRequest(obj: ComprehendDeleteDocumentClassifierRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DocumentClassifierArn': obj.documentClassifierArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDeleteDocumentClassifierResponse
 */
export interface ComprehendDeleteDocumentClassifierResponse {
}

/**
 * Converts an object of type 'ComprehendDeleteDocumentClassifierResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDeleteDocumentClassifierResponse(obj: ComprehendDeleteDocumentClassifierResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDeleteEndpointRequest
 */
export interface ComprehendDeleteEndpointRequest {
  /**
   * @schema ComprehendDeleteEndpointRequest#EndpointArn
   */
  readonly endpointArn?: string;

}

/**
 * Converts an object of type 'ComprehendDeleteEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDeleteEndpointRequest(obj: ComprehendDeleteEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointArn': obj.endpointArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDeleteEndpointResponse
 */
export interface ComprehendDeleteEndpointResponse {
}

/**
 * Converts an object of type 'ComprehendDeleteEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDeleteEndpointResponse(obj: ComprehendDeleteEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDeleteEntityRecognizerRequest
 */
export interface ComprehendDeleteEntityRecognizerRequest {
  /**
   * @schema ComprehendDeleteEntityRecognizerRequest#EntityRecognizerArn
   */
  readonly entityRecognizerArn?: string;

}

/**
 * Converts an object of type 'ComprehendDeleteEntityRecognizerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDeleteEntityRecognizerRequest(obj: ComprehendDeleteEntityRecognizerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EntityRecognizerArn': obj.entityRecognizerArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDeleteEntityRecognizerResponse
 */
export interface ComprehendDeleteEntityRecognizerResponse {
}

/**
 * Converts an object of type 'ComprehendDeleteEntityRecognizerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDeleteEntityRecognizerResponse(obj: ComprehendDeleteEntityRecognizerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDescribeDocumentClassificationJobRequest
 */
export interface ComprehendDescribeDocumentClassificationJobRequest {
  /**
   * @schema ComprehendDescribeDocumentClassificationJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendDescribeDocumentClassificationJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDescribeDocumentClassificationJobRequest(obj: ComprehendDescribeDocumentClassificationJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDescribeDocumentClassificationJobResponse
 */
export interface ComprehendDescribeDocumentClassificationJobResponse {
  /**
   * @schema ComprehendDescribeDocumentClassificationJobResponse#DocumentClassificationJobProperties
   */
  readonly documentClassificationJobProperties?: ComprehendDocumentClassificationJobProperties;

}

/**
 * Converts an object of type 'ComprehendDescribeDocumentClassificationJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDescribeDocumentClassificationJobResponse(obj: ComprehendDescribeDocumentClassificationJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DocumentClassificationJobProperties': toJson_ComprehendDocumentClassificationJobProperties(obj.documentClassificationJobProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDescribeDocumentClassifierRequest
 */
export interface ComprehendDescribeDocumentClassifierRequest {
  /**
   * @schema ComprehendDescribeDocumentClassifierRequest#DocumentClassifierArn
   */
  readonly documentClassifierArn?: string;

}

/**
 * Converts an object of type 'ComprehendDescribeDocumentClassifierRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDescribeDocumentClassifierRequest(obj: ComprehendDescribeDocumentClassifierRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DocumentClassifierArn': obj.documentClassifierArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDescribeDocumentClassifierResponse
 */
export interface ComprehendDescribeDocumentClassifierResponse {
  /**
   * @schema ComprehendDescribeDocumentClassifierResponse#DocumentClassifierProperties
   */
  readonly documentClassifierProperties?: ComprehendDocumentClassifierProperties;

}

/**
 * Converts an object of type 'ComprehendDescribeDocumentClassifierResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDescribeDocumentClassifierResponse(obj: ComprehendDescribeDocumentClassifierResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DocumentClassifierProperties': toJson_ComprehendDocumentClassifierProperties(obj.documentClassifierProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDescribeDominantLanguageDetectionJobRequest
 */
export interface ComprehendDescribeDominantLanguageDetectionJobRequest {
  /**
   * @schema ComprehendDescribeDominantLanguageDetectionJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendDescribeDominantLanguageDetectionJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDescribeDominantLanguageDetectionJobRequest(obj: ComprehendDescribeDominantLanguageDetectionJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDescribeDominantLanguageDetectionJobResponse
 */
export interface ComprehendDescribeDominantLanguageDetectionJobResponse {
  /**
   * @schema ComprehendDescribeDominantLanguageDetectionJobResponse#DominantLanguageDetectionJobProperties
   */
  readonly dominantLanguageDetectionJobProperties?: ComprehendDominantLanguageDetectionJobProperties;

}

/**
 * Converts an object of type 'ComprehendDescribeDominantLanguageDetectionJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDescribeDominantLanguageDetectionJobResponse(obj: ComprehendDescribeDominantLanguageDetectionJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DominantLanguageDetectionJobProperties': toJson_ComprehendDominantLanguageDetectionJobProperties(obj.dominantLanguageDetectionJobProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDescribeEndpointRequest
 */
export interface ComprehendDescribeEndpointRequest {
  /**
   * @schema ComprehendDescribeEndpointRequest#EndpointArn
   */
  readonly endpointArn?: string;

}

/**
 * Converts an object of type 'ComprehendDescribeEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDescribeEndpointRequest(obj: ComprehendDescribeEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointArn': obj.endpointArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDescribeEndpointResponse
 */
export interface ComprehendDescribeEndpointResponse {
  /**
   * @schema ComprehendDescribeEndpointResponse#EndpointProperties
   */
  readonly endpointProperties?: ComprehendEndpointProperties;

}

/**
 * Converts an object of type 'ComprehendDescribeEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDescribeEndpointResponse(obj: ComprehendDescribeEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointProperties': toJson_ComprehendEndpointProperties(obj.endpointProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDescribeEntitiesDetectionJobRequest
 */
export interface ComprehendDescribeEntitiesDetectionJobRequest {
  /**
   * @schema ComprehendDescribeEntitiesDetectionJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendDescribeEntitiesDetectionJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDescribeEntitiesDetectionJobRequest(obj: ComprehendDescribeEntitiesDetectionJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDescribeEntitiesDetectionJobResponse
 */
export interface ComprehendDescribeEntitiesDetectionJobResponse {
  /**
   * @schema ComprehendDescribeEntitiesDetectionJobResponse#EntitiesDetectionJobProperties
   */
  readonly entitiesDetectionJobProperties?: ComprehendEntitiesDetectionJobProperties;

}

/**
 * Converts an object of type 'ComprehendDescribeEntitiesDetectionJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDescribeEntitiesDetectionJobResponse(obj: ComprehendDescribeEntitiesDetectionJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EntitiesDetectionJobProperties': toJson_ComprehendEntitiesDetectionJobProperties(obj.entitiesDetectionJobProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDescribeEntityRecognizerRequest
 */
export interface ComprehendDescribeEntityRecognizerRequest {
  /**
   * @schema ComprehendDescribeEntityRecognizerRequest#EntityRecognizerArn
   */
  readonly entityRecognizerArn?: string;

}

/**
 * Converts an object of type 'ComprehendDescribeEntityRecognizerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDescribeEntityRecognizerRequest(obj: ComprehendDescribeEntityRecognizerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EntityRecognizerArn': obj.entityRecognizerArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDescribeEntityRecognizerResponse
 */
export interface ComprehendDescribeEntityRecognizerResponse {
  /**
   * @schema ComprehendDescribeEntityRecognizerResponse#EntityRecognizerProperties
   */
  readonly entityRecognizerProperties?: ComprehendEntityRecognizerProperties;

}

/**
 * Converts an object of type 'ComprehendDescribeEntityRecognizerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDescribeEntityRecognizerResponse(obj: ComprehendDescribeEntityRecognizerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EntityRecognizerProperties': toJson_ComprehendEntityRecognizerProperties(obj.entityRecognizerProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDescribeEventsDetectionJobRequest
 */
export interface ComprehendDescribeEventsDetectionJobRequest {
  /**
   * @schema ComprehendDescribeEventsDetectionJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendDescribeEventsDetectionJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDescribeEventsDetectionJobRequest(obj: ComprehendDescribeEventsDetectionJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDescribeEventsDetectionJobResponse
 */
export interface ComprehendDescribeEventsDetectionJobResponse {
  /**
   * @schema ComprehendDescribeEventsDetectionJobResponse#EventsDetectionJobProperties
   */
  readonly eventsDetectionJobProperties?: ComprehendEventsDetectionJobProperties;

}

/**
 * Converts an object of type 'ComprehendDescribeEventsDetectionJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDescribeEventsDetectionJobResponse(obj: ComprehendDescribeEventsDetectionJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventsDetectionJobProperties': toJson_ComprehendEventsDetectionJobProperties(obj.eventsDetectionJobProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDescribeKeyPhrasesDetectionJobRequest
 */
export interface ComprehendDescribeKeyPhrasesDetectionJobRequest {
  /**
   * @schema ComprehendDescribeKeyPhrasesDetectionJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendDescribeKeyPhrasesDetectionJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDescribeKeyPhrasesDetectionJobRequest(obj: ComprehendDescribeKeyPhrasesDetectionJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDescribeKeyPhrasesDetectionJobResponse
 */
export interface ComprehendDescribeKeyPhrasesDetectionJobResponse {
  /**
   * @schema ComprehendDescribeKeyPhrasesDetectionJobResponse#KeyPhrasesDetectionJobProperties
   */
  readonly keyPhrasesDetectionJobProperties?: ComprehendKeyPhrasesDetectionJobProperties;

}

/**
 * Converts an object of type 'ComprehendDescribeKeyPhrasesDetectionJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDescribeKeyPhrasesDetectionJobResponse(obj: ComprehendDescribeKeyPhrasesDetectionJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyPhrasesDetectionJobProperties': toJson_ComprehendKeyPhrasesDetectionJobProperties(obj.keyPhrasesDetectionJobProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDescribePiiEntitiesDetectionJobRequest
 */
export interface ComprehendDescribePiiEntitiesDetectionJobRequest {
  /**
   * @schema ComprehendDescribePiiEntitiesDetectionJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendDescribePiiEntitiesDetectionJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDescribePiiEntitiesDetectionJobRequest(obj: ComprehendDescribePiiEntitiesDetectionJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDescribePiiEntitiesDetectionJobResponse
 */
export interface ComprehendDescribePiiEntitiesDetectionJobResponse {
  /**
   * @schema ComprehendDescribePiiEntitiesDetectionJobResponse#PiiEntitiesDetectionJobProperties
   */
  readonly piiEntitiesDetectionJobProperties?: ComprehendPiiEntitiesDetectionJobProperties;

}

/**
 * Converts an object of type 'ComprehendDescribePiiEntitiesDetectionJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDescribePiiEntitiesDetectionJobResponse(obj: ComprehendDescribePiiEntitiesDetectionJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PiiEntitiesDetectionJobProperties': toJson_ComprehendPiiEntitiesDetectionJobProperties(obj.piiEntitiesDetectionJobProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDescribeSentimentDetectionJobRequest
 */
export interface ComprehendDescribeSentimentDetectionJobRequest {
  /**
   * @schema ComprehendDescribeSentimentDetectionJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendDescribeSentimentDetectionJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDescribeSentimentDetectionJobRequest(obj: ComprehendDescribeSentimentDetectionJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDescribeSentimentDetectionJobResponse
 */
export interface ComprehendDescribeSentimentDetectionJobResponse {
  /**
   * @schema ComprehendDescribeSentimentDetectionJobResponse#SentimentDetectionJobProperties
   */
  readonly sentimentDetectionJobProperties?: ComprehendSentimentDetectionJobProperties;

}

/**
 * Converts an object of type 'ComprehendDescribeSentimentDetectionJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDescribeSentimentDetectionJobResponse(obj: ComprehendDescribeSentimentDetectionJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SentimentDetectionJobProperties': toJson_ComprehendSentimentDetectionJobProperties(obj.sentimentDetectionJobProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDescribeTopicsDetectionJobRequest
 */
export interface ComprehendDescribeTopicsDetectionJobRequest {
  /**
   * @schema ComprehendDescribeTopicsDetectionJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendDescribeTopicsDetectionJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDescribeTopicsDetectionJobRequest(obj: ComprehendDescribeTopicsDetectionJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDescribeTopicsDetectionJobResponse
 */
export interface ComprehendDescribeTopicsDetectionJobResponse {
  /**
   * @schema ComprehendDescribeTopicsDetectionJobResponse#TopicsDetectionJobProperties
   */
  readonly topicsDetectionJobProperties?: ComprehendTopicsDetectionJobProperties;

}

/**
 * Converts an object of type 'ComprehendDescribeTopicsDetectionJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDescribeTopicsDetectionJobResponse(obj: ComprehendDescribeTopicsDetectionJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TopicsDetectionJobProperties': toJson_ComprehendTopicsDetectionJobProperties(obj.topicsDetectionJobProperties),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDetectDominantLanguageRequest
 */
export interface ComprehendDetectDominantLanguageRequest {
  /**
   * @schema ComprehendDetectDominantLanguageRequest#Text
   */
  readonly text?: string;

}

/**
 * Converts an object of type 'ComprehendDetectDominantLanguageRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDetectDominantLanguageRequest(obj: ComprehendDetectDominantLanguageRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Text': obj.text,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDetectDominantLanguageResponse
 */
export interface ComprehendDetectDominantLanguageResponse {
  /**
   * @schema ComprehendDetectDominantLanguageResponse#Languages
   */
  readonly languages?: ComprehendDominantLanguage[];

}

/**
 * Converts an object of type 'ComprehendDetectDominantLanguageResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDetectDominantLanguageResponse(obj: ComprehendDetectDominantLanguageResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Languages': obj.languages?.map(y => toJson_ComprehendDominantLanguage(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDetectEntitiesRequest
 */
export interface ComprehendDetectEntitiesRequest {
  /**
   * @schema ComprehendDetectEntitiesRequest#Text
   */
  readonly text?: string;

  /**
   * @schema ComprehendDetectEntitiesRequest#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ComprehendDetectEntitiesRequest#EndpointArn
   */
  readonly endpointArn?: string;

}

/**
 * Converts an object of type 'ComprehendDetectEntitiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDetectEntitiesRequest(obj: ComprehendDetectEntitiesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Text': obj.text,
    'LanguageCode': obj.languageCode,
    'EndpointArn': obj.endpointArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDetectEntitiesResponse
 */
export interface ComprehendDetectEntitiesResponse {
  /**
   * @schema ComprehendDetectEntitiesResponse#Entities
   */
  readonly entities?: ComprehendEntity[];

}

/**
 * Converts an object of type 'ComprehendDetectEntitiesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDetectEntitiesResponse(obj: ComprehendDetectEntitiesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Entities': obj.entities?.map(y => toJson_ComprehendEntity(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDetectKeyPhrasesRequest
 */
export interface ComprehendDetectKeyPhrasesRequest {
  /**
   * @schema ComprehendDetectKeyPhrasesRequest#Text
   */
  readonly text?: string;

  /**
   * @schema ComprehendDetectKeyPhrasesRequest#LanguageCode
   */
  readonly languageCode?: string;

}

/**
 * Converts an object of type 'ComprehendDetectKeyPhrasesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDetectKeyPhrasesRequest(obj: ComprehendDetectKeyPhrasesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Text': obj.text,
    'LanguageCode': obj.languageCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDetectKeyPhrasesResponse
 */
export interface ComprehendDetectKeyPhrasesResponse {
  /**
   * @schema ComprehendDetectKeyPhrasesResponse#KeyPhrases
   */
  readonly keyPhrases?: ComprehendKeyPhrase[];

}

/**
 * Converts an object of type 'ComprehendDetectKeyPhrasesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDetectKeyPhrasesResponse(obj: ComprehendDetectKeyPhrasesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyPhrases': obj.keyPhrases?.map(y => toJson_ComprehendKeyPhrase(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDetectPiiEntitiesRequest
 */
export interface ComprehendDetectPiiEntitiesRequest {
  /**
   * @schema ComprehendDetectPiiEntitiesRequest#Text
   */
  readonly text?: string;

  /**
   * @schema ComprehendDetectPiiEntitiesRequest#LanguageCode
   */
  readonly languageCode?: string;

}

/**
 * Converts an object of type 'ComprehendDetectPiiEntitiesRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDetectPiiEntitiesRequest(obj: ComprehendDetectPiiEntitiesRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Text': obj.text,
    'LanguageCode': obj.languageCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDetectPiiEntitiesResponse
 */
export interface ComprehendDetectPiiEntitiesResponse {
  /**
   * @schema ComprehendDetectPiiEntitiesResponse#Entities
   */
  readonly entities?: ComprehendPiiEntity[];

}

/**
 * Converts an object of type 'ComprehendDetectPiiEntitiesResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDetectPiiEntitiesResponse(obj: ComprehendDetectPiiEntitiesResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Entities': obj.entities?.map(y => toJson_ComprehendPiiEntity(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDetectSentimentRequest
 */
export interface ComprehendDetectSentimentRequest {
  /**
   * @schema ComprehendDetectSentimentRequest#Text
   */
  readonly text?: string;

  /**
   * @schema ComprehendDetectSentimentRequest#LanguageCode
   */
  readonly languageCode?: string;

}

/**
 * Converts an object of type 'ComprehendDetectSentimentRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDetectSentimentRequest(obj: ComprehendDetectSentimentRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Text': obj.text,
    'LanguageCode': obj.languageCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDetectSentimentResponse
 */
export interface ComprehendDetectSentimentResponse {
  /**
   * @schema ComprehendDetectSentimentResponse#Sentiment
   */
  readonly sentiment?: string;

  /**
   * @schema ComprehendDetectSentimentResponse#SentimentScore
   */
  readonly sentimentScore?: ComprehendSentimentScore;

}

/**
 * Converts an object of type 'ComprehendDetectSentimentResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDetectSentimentResponse(obj: ComprehendDetectSentimentResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Sentiment': obj.sentiment,
    'SentimentScore': toJson_ComprehendSentimentScore(obj.sentimentScore),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDetectSyntaxRequest
 */
export interface ComprehendDetectSyntaxRequest {
  /**
   * @schema ComprehendDetectSyntaxRequest#Text
   */
  readonly text?: string;

  /**
   * @schema ComprehendDetectSyntaxRequest#LanguageCode
   */
  readonly languageCode?: string;

}

/**
 * Converts an object of type 'ComprehendDetectSyntaxRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDetectSyntaxRequest(obj: ComprehendDetectSyntaxRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Text': obj.text,
    'LanguageCode': obj.languageCode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDetectSyntaxResponse
 */
export interface ComprehendDetectSyntaxResponse {
  /**
   * @schema ComprehendDetectSyntaxResponse#SyntaxTokens
   */
  readonly syntaxTokens?: ComprehendSyntaxToken[];

}

/**
 * Converts an object of type 'ComprehendDetectSyntaxResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDetectSyntaxResponse(obj: ComprehendDetectSyntaxResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SyntaxTokens': obj.syntaxTokens?.map(y => toJson_ComprehendSyntaxToken(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendListDocumentClassificationJobsRequest
 */
export interface ComprehendListDocumentClassificationJobsRequest {
  /**
   * @schema ComprehendListDocumentClassificationJobsRequest#Filter
   */
  readonly filter?: ComprehendDocumentClassificationJobFilter;

  /**
   * @schema ComprehendListDocumentClassificationJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendListDocumentClassificationJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ComprehendListDocumentClassificationJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendListDocumentClassificationJobsRequest(obj: ComprehendListDocumentClassificationJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filter': toJson_ComprehendDocumentClassificationJobFilter(obj.filter),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendListDocumentClassificationJobsResponse
 */
export interface ComprehendListDocumentClassificationJobsResponse {
  /**
   * @schema ComprehendListDocumentClassificationJobsResponse#DocumentClassificationJobPropertiesList
   */
  readonly documentClassificationJobPropertiesList?: ComprehendDocumentClassificationJobProperties[];

  /**
   * @schema ComprehendListDocumentClassificationJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ComprehendListDocumentClassificationJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendListDocumentClassificationJobsResponse(obj: ComprehendListDocumentClassificationJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DocumentClassificationJobPropertiesList': obj.documentClassificationJobPropertiesList?.map(y => toJson_ComprehendDocumentClassificationJobProperties(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendListDocumentClassifiersRequest
 */
export interface ComprehendListDocumentClassifiersRequest {
  /**
   * @schema ComprehendListDocumentClassifiersRequest#Filter
   */
  readonly filter?: ComprehendDocumentClassifierFilter;

  /**
   * @schema ComprehendListDocumentClassifiersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendListDocumentClassifiersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ComprehendListDocumentClassifiersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendListDocumentClassifiersRequest(obj: ComprehendListDocumentClassifiersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filter': toJson_ComprehendDocumentClassifierFilter(obj.filter),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendListDocumentClassifiersResponse
 */
export interface ComprehendListDocumentClassifiersResponse {
  /**
   * @schema ComprehendListDocumentClassifiersResponse#DocumentClassifierPropertiesList
   */
  readonly documentClassifierPropertiesList?: ComprehendDocumentClassifierProperties[];

  /**
   * @schema ComprehendListDocumentClassifiersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ComprehendListDocumentClassifiersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendListDocumentClassifiersResponse(obj: ComprehendListDocumentClassifiersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DocumentClassifierPropertiesList': obj.documentClassifierPropertiesList?.map(y => toJson_ComprehendDocumentClassifierProperties(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendListDominantLanguageDetectionJobsRequest
 */
export interface ComprehendListDominantLanguageDetectionJobsRequest {
  /**
   * @schema ComprehendListDominantLanguageDetectionJobsRequest#Filter
   */
  readonly filter?: ComprehendDominantLanguageDetectionJobFilter;

  /**
   * @schema ComprehendListDominantLanguageDetectionJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendListDominantLanguageDetectionJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ComprehendListDominantLanguageDetectionJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendListDominantLanguageDetectionJobsRequest(obj: ComprehendListDominantLanguageDetectionJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filter': toJson_ComprehendDominantLanguageDetectionJobFilter(obj.filter),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendListDominantLanguageDetectionJobsResponse
 */
export interface ComprehendListDominantLanguageDetectionJobsResponse {
  /**
   * @schema ComprehendListDominantLanguageDetectionJobsResponse#DominantLanguageDetectionJobPropertiesList
   */
  readonly dominantLanguageDetectionJobPropertiesList?: ComprehendDominantLanguageDetectionJobProperties[];

  /**
   * @schema ComprehendListDominantLanguageDetectionJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ComprehendListDominantLanguageDetectionJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendListDominantLanguageDetectionJobsResponse(obj: ComprehendListDominantLanguageDetectionJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DominantLanguageDetectionJobPropertiesList': obj.dominantLanguageDetectionJobPropertiesList?.map(y => toJson_ComprehendDominantLanguageDetectionJobProperties(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendListEndpointsRequest
 */
export interface ComprehendListEndpointsRequest {
  /**
   * @schema ComprehendListEndpointsRequest#Filter
   */
  readonly filter?: ComprehendEndpointFilter;

  /**
   * @schema ComprehendListEndpointsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendListEndpointsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ComprehendListEndpointsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendListEndpointsRequest(obj: ComprehendListEndpointsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filter': toJson_ComprehendEndpointFilter(obj.filter),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendListEndpointsResponse
 */
export interface ComprehendListEndpointsResponse {
  /**
   * @schema ComprehendListEndpointsResponse#EndpointPropertiesList
   */
  readonly endpointPropertiesList?: ComprehendEndpointProperties[];

  /**
   * @schema ComprehendListEndpointsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ComprehendListEndpointsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendListEndpointsResponse(obj: ComprehendListEndpointsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointPropertiesList': obj.endpointPropertiesList?.map(y => toJson_ComprehendEndpointProperties(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendListEntitiesDetectionJobsRequest
 */
export interface ComprehendListEntitiesDetectionJobsRequest {
  /**
   * @schema ComprehendListEntitiesDetectionJobsRequest#Filter
   */
  readonly filter?: ComprehendEntitiesDetectionJobFilter;

  /**
   * @schema ComprehendListEntitiesDetectionJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendListEntitiesDetectionJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ComprehendListEntitiesDetectionJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendListEntitiesDetectionJobsRequest(obj: ComprehendListEntitiesDetectionJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filter': toJson_ComprehendEntitiesDetectionJobFilter(obj.filter),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendListEntitiesDetectionJobsResponse
 */
export interface ComprehendListEntitiesDetectionJobsResponse {
  /**
   * @schema ComprehendListEntitiesDetectionJobsResponse#EntitiesDetectionJobPropertiesList
   */
  readonly entitiesDetectionJobPropertiesList?: ComprehendEntitiesDetectionJobProperties[];

  /**
   * @schema ComprehendListEntitiesDetectionJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ComprehendListEntitiesDetectionJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendListEntitiesDetectionJobsResponse(obj: ComprehendListEntitiesDetectionJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EntitiesDetectionJobPropertiesList': obj.entitiesDetectionJobPropertiesList?.map(y => toJson_ComprehendEntitiesDetectionJobProperties(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendListEntityRecognizersRequest
 */
export interface ComprehendListEntityRecognizersRequest {
  /**
   * @schema ComprehendListEntityRecognizersRequest#Filter
   */
  readonly filter?: ComprehendEntityRecognizerFilter;

  /**
   * @schema ComprehendListEntityRecognizersRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendListEntityRecognizersRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ComprehendListEntityRecognizersRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendListEntityRecognizersRequest(obj: ComprehendListEntityRecognizersRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filter': toJson_ComprehendEntityRecognizerFilter(obj.filter),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendListEntityRecognizersResponse
 */
export interface ComprehendListEntityRecognizersResponse {
  /**
   * @schema ComprehendListEntityRecognizersResponse#EntityRecognizerPropertiesList
   */
  readonly entityRecognizerPropertiesList?: ComprehendEntityRecognizerProperties[];

  /**
   * @schema ComprehendListEntityRecognizersResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ComprehendListEntityRecognizersResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendListEntityRecognizersResponse(obj: ComprehendListEntityRecognizersResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EntityRecognizerPropertiesList': obj.entityRecognizerPropertiesList?.map(y => toJson_ComprehendEntityRecognizerProperties(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendListEventsDetectionJobsRequest
 */
export interface ComprehendListEventsDetectionJobsRequest {
  /**
   * @schema ComprehendListEventsDetectionJobsRequest#Filter
   */
  readonly filter?: ComprehendEventsDetectionJobFilter;

  /**
   * @schema ComprehendListEventsDetectionJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendListEventsDetectionJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ComprehendListEventsDetectionJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendListEventsDetectionJobsRequest(obj: ComprehendListEventsDetectionJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filter': toJson_ComprehendEventsDetectionJobFilter(obj.filter),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendListEventsDetectionJobsResponse
 */
export interface ComprehendListEventsDetectionJobsResponse {
  /**
   * @schema ComprehendListEventsDetectionJobsResponse#EventsDetectionJobPropertiesList
   */
  readonly eventsDetectionJobPropertiesList?: ComprehendEventsDetectionJobProperties[];

  /**
   * @schema ComprehendListEventsDetectionJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ComprehendListEventsDetectionJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendListEventsDetectionJobsResponse(obj: ComprehendListEventsDetectionJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EventsDetectionJobPropertiesList': obj.eventsDetectionJobPropertiesList?.map(y => toJson_ComprehendEventsDetectionJobProperties(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendListKeyPhrasesDetectionJobsRequest
 */
export interface ComprehendListKeyPhrasesDetectionJobsRequest {
  /**
   * @schema ComprehendListKeyPhrasesDetectionJobsRequest#Filter
   */
  readonly filter?: ComprehendKeyPhrasesDetectionJobFilter;

  /**
   * @schema ComprehendListKeyPhrasesDetectionJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendListKeyPhrasesDetectionJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ComprehendListKeyPhrasesDetectionJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendListKeyPhrasesDetectionJobsRequest(obj: ComprehendListKeyPhrasesDetectionJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filter': toJson_ComprehendKeyPhrasesDetectionJobFilter(obj.filter),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendListKeyPhrasesDetectionJobsResponse
 */
export interface ComprehendListKeyPhrasesDetectionJobsResponse {
  /**
   * @schema ComprehendListKeyPhrasesDetectionJobsResponse#KeyPhrasesDetectionJobPropertiesList
   */
  readonly keyPhrasesDetectionJobPropertiesList?: ComprehendKeyPhrasesDetectionJobProperties[];

  /**
   * @schema ComprehendListKeyPhrasesDetectionJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ComprehendListKeyPhrasesDetectionJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendListKeyPhrasesDetectionJobsResponse(obj: ComprehendListKeyPhrasesDetectionJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'KeyPhrasesDetectionJobPropertiesList': obj.keyPhrasesDetectionJobPropertiesList?.map(y => toJson_ComprehendKeyPhrasesDetectionJobProperties(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendListPiiEntitiesDetectionJobsRequest
 */
export interface ComprehendListPiiEntitiesDetectionJobsRequest {
  /**
   * @schema ComprehendListPiiEntitiesDetectionJobsRequest#Filter
   */
  readonly filter?: ComprehendPiiEntitiesDetectionJobFilter;

  /**
   * @schema ComprehendListPiiEntitiesDetectionJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendListPiiEntitiesDetectionJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ComprehendListPiiEntitiesDetectionJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendListPiiEntitiesDetectionJobsRequest(obj: ComprehendListPiiEntitiesDetectionJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filter': toJson_ComprehendPiiEntitiesDetectionJobFilter(obj.filter),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendListPiiEntitiesDetectionJobsResponse
 */
export interface ComprehendListPiiEntitiesDetectionJobsResponse {
  /**
   * @schema ComprehendListPiiEntitiesDetectionJobsResponse#PiiEntitiesDetectionJobPropertiesList
   */
  readonly piiEntitiesDetectionJobPropertiesList?: ComprehendPiiEntitiesDetectionJobProperties[];

  /**
   * @schema ComprehendListPiiEntitiesDetectionJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ComprehendListPiiEntitiesDetectionJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendListPiiEntitiesDetectionJobsResponse(obj: ComprehendListPiiEntitiesDetectionJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PiiEntitiesDetectionJobPropertiesList': obj.piiEntitiesDetectionJobPropertiesList?.map(y => toJson_ComprehendPiiEntitiesDetectionJobProperties(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendListSentimentDetectionJobsRequest
 */
export interface ComprehendListSentimentDetectionJobsRequest {
  /**
   * @schema ComprehendListSentimentDetectionJobsRequest#Filter
   */
  readonly filter?: ComprehendSentimentDetectionJobFilter;

  /**
   * @schema ComprehendListSentimentDetectionJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendListSentimentDetectionJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ComprehendListSentimentDetectionJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendListSentimentDetectionJobsRequest(obj: ComprehendListSentimentDetectionJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filter': toJson_ComprehendSentimentDetectionJobFilter(obj.filter),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendListSentimentDetectionJobsResponse
 */
export interface ComprehendListSentimentDetectionJobsResponse {
  /**
   * @schema ComprehendListSentimentDetectionJobsResponse#SentimentDetectionJobPropertiesList
   */
  readonly sentimentDetectionJobPropertiesList?: ComprehendSentimentDetectionJobProperties[];

  /**
   * @schema ComprehendListSentimentDetectionJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ComprehendListSentimentDetectionJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendListSentimentDetectionJobsResponse(obj: ComprehendListSentimentDetectionJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SentimentDetectionJobPropertiesList': obj.sentimentDetectionJobPropertiesList?.map(y => toJson_ComprehendSentimentDetectionJobProperties(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendListTagsForResourceRequest
 */
export interface ComprehendListTagsForResourceRequest {
  /**
   * @schema ComprehendListTagsForResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

}

/**
 * Converts an object of type 'ComprehendListTagsForResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendListTagsForResourceRequest(obj: ComprehendListTagsForResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendListTagsForResourceResponse
 */
export interface ComprehendListTagsForResourceResponse {
  /**
   * @schema ComprehendListTagsForResourceResponse#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema ComprehendListTagsForResourceResponse#Tags
   */
  readonly tags?: ComprehendTag[];

}

/**
 * Converts an object of type 'ComprehendListTagsForResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendListTagsForResourceResponse(obj: ComprehendListTagsForResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_ComprehendTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendListTopicsDetectionJobsRequest
 */
export interface ComprehendListTopicsDetectionJobsRequest {
  /**
   * @schema ComprehendListTopicsDetectionJobsRequest#Filter
   */
  readonly filter?: ComprehendTopicsDetectionJobFilter;

  /**
   * @schema ComprehendListTopicsDetectionJobsRequest#NextToken
   */
  readonly nextToken?: string;

  /**
   * @schema ComprehendListTopicsDetectionJobsRequest#MaxResults
   */
  readonly maxResults?: number;

}

/**
 * Converts an object of type 'ComprehendListTopicsDetectionJobsRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendListTopicsDetectionJobsRequest(obj: ComprehendListTopicsDetectionJobsRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Filter': toJson_ComprehendTopicsDetectionJobFilter(obj.filter),
    'NextToken': obj.nextToken,
    'MaxResults': obj.maxResults,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendListTopicsDetectionJobsResponse
 */
export interface ComprehendListTopicsDetectionJobsResponse {
  /**
   * @schema ComprehendListTopicsDetectionJobsResponse#TopicsDetectionJobPropertiesList
   */
  readonly topicsDetectionJobPropertiesList?: ComprehendTopicsDetectionJobProperties[];

  /**
   * @schema ComprehendListTopicsDetectionJobsResponse#NextToken
   */
  readonly nextToken?: string;

}

/**
 * Converts an object of type 'ComprehendListTopicsDetectionJobsResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendListTopicsDetectionJobsResponse(obj: ComprehendListTopicsDetectionJobsResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TopicsDetectionJobPropertiesList': obj.topicsDetectionJobPropertiesList?.map(y => toJson_ComprehendTopicsDetectionJobProperties(y)),
    'NextToken': obj.nextToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStartDocumentClassificationJobRequest
 */
export interface ComprehendStartDocumentClassificationJobRequest {
  /**
   * @schema ComprehendStartDocumentClassificationJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendStartDocumentClassificationJobRequest#DocumentClassifierArn
   */
  readonly documentClassifierArn?: string;

  /**
   * @schema ComprehendStartDocumentClassificationJobRequest#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendInputDataConfig;

  /**
   * @schema ComprehendStartDocumentClassificationJobRequest#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendStartDocumentClassificationJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendStartDocumentClassificationJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ComprehendStartDocumentClassificationJobRequest#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendStartDocumentClassificationJobRequest#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

}

/**
 * Converts an object of type 'ComprehendStartDocumentClassificationJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStartDocumentClassificationJobRequest(obj: ComprehendStartDocumentClassificationJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
    'DocumentClassifierArn': obj.documentClassifierArn,
    'InputDataConfig': toJson_ComprehendInputDataConfig(obj.inputDataConfig),
    'OutputDataConfig': toJson_ComprehendOutputDataConfig(obj.outputDataConfig),
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'ClientRequestToken': obj.clientRequestToken,
    'VolumeKmsKeyId': obj.volumeKmsKeyId,
    'VpcConfig': toJson_ComprehendVpcConfig(obj.vpcConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStartDocumentClassificationJobResponse
 */
export interface ComprehendStartDocumentClassificationJobResponse {
  /**
   * @schema ComprehendStartDocumentClassificationJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendStartDocumentClassificationJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * Converts an object of type 'ComprehendStartDocumentClassificationJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStartDocumentClassificationJobResponse(obj: ComprehendStartDocumentClassificationJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobStatus': obj.jobStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStartDominantLanguageDetectionJobRequest
 */
export interface ComprehendStartDominantLanguageDetectionJobRequest {
  /**
   * @schema ComprehendStartDominantLanguageDetectionJobRequest#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendInputDataConfig;

  /**
   * @schema ComprehendStartDominantLanguageDetectionJobRequest#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendStartDominantLanguageDetectionJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendStartDominantLanguageDetectionJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendStartDominantLanguageDetectionJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ComprehendStartDominantLanguageDetectionJobRequest#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendStartDominantLanguageDetectionJobRequest#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

}

/**
 * Converts an object of type 'ComprehendStartDominantLanguageDetectionJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStartDominantLanguageDetectionJobRequest(obj: ComprehendStartDominantLanguageDetectionJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputDataConfig': toJson_ComprehendInputDataConfig(obj.inputDataConfig),
    'OutputDataConfig': toJson_ComprehendOutputDataConfig(obj.outputDataConfig),
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'JobName': obj.jobName,
    'ClientRequestToken': obj.clientRequestToken,
    'VolumeKmsKeyId': obj.volumeKmsKeyId,
    'VpcConfig': toJson_ComprehendVpcConfig(obj.vpcConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStartDominantLanguageDetectionJobResponse
 */
export interface ComprehendStartDominantLanguageDetectionJobResponse {
  /**
   * @schema ComprehendStartDominantLanguageDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendStartDominantLanguageDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * Converts an object of type 'ComprehendStartDominantLanguageDetectionJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStartDominantLanguageDetectionJobResponse(obj: ComprehendStartDominantLanguageDetectionJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobStatus': obj.jobStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStartEntitiesDetectionJobRequest
 */
export interface ComprehendStartEntitiesDetectionJobRequest {
  /**
   * @schema ComprehendStartEntitiesDetectionJobRequest#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendInputDataConfig;

  /**
   * @schema ComprehendStartEntitiesDetectionJobRequest#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendStartEntitiesDetectionJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendStartEntitiesDetectionJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendStartEntitiesDetectionJobRequest#EntityRecognizerArn
   */
  readonly entityRecognizerArn?: string;

  /**
   * @schema ComprehendStartEntitiesDetectionJobRequest#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ComprehendStartEntitiesDetectionJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ComprehendStartEntitiesDetectionJobRequest#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendStartEntitiesDetectionJobRequest#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

}

/**
 * Converts an object of type 'ComprehendStartEntitiesDetectionJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStartEntitiesDetectionJobRequest(obj: ComprehendStartEntitiesDetectionJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputDataConfig': toJson_ComprehendInputDataConfig(obj.inputDataConfig),
    'OutputDataConfig': toJson_ComprehendOutputDataConfig(obj.outputDataConfig),
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'JobName': obj.jobName,
    'EntityRecognizerArn': obj.entityRecognizerArn,
    'LanguageCode': obj.languageCode,
    'ClientRequestToken': obj.clientRequestToken,
    'VolumeKmsKeyId': obj.volumeKmsKeyId,
    'VpcConfig': toJson_ComprehendVpcConfig(obj.vpcConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStartEntitiesDetectionJobResponse
 */
export interface ComprehendStartEntitiesDetectionJobResponse {
  /**
   * @schema ComprehendStartEntitiesDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendStartEntitiesDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * Converts an object of type 'ComprehendStartEntitiesDetectionJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStartEntitiesDetectionJobResponse(obj: ComprehendStartEntitiesDetectionJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobStatus': obj.jobStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStartEventsDetectionJobRequest
 */
export interface ComprehendStartEventsDetectionJobRequest {
  /**
   * @schema ComprehendStartEventsDetectionJobRequest#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendInputDataConfig;

  /**
   * @schema ComprehendStartEventsDetectionJobRequest#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendStartEventsDetectionJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendStartEventsDetectionJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendStartEventsDetectionJobRequest#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ComprehendStartEventsDetectionJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ComprehendStartEventsDetectionJobRequest#TargetEventTypes
   */
  readonly targetEventTypes?: string[];

}

/**
 * Converts an object of type 'ComprehendStartEventsDetectionJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStartEventsDetectionJobRequest(obj: ComprehendStartEventsDetectionJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputDataConfig': toJson_ComprehendInputDataConfig(obj.inputDataConfig),
    'OutputDataConfig': toJson_ComprehendOutputDataConfig(obj.outputDataConfig),
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'JobName': obj.jobName,
    'LanguageCode': obj.languageCode,
    'ClientRequestToken': obj.clientRequestToken,
    'TargetEventTypes': obj.targetEventTypes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStartEventsDetectionJobResponse
 */
export interface ComprehendStartEventsDetectionJobResponse {
  /**
   * @schema ComprehendStartEventsDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendStartEventsDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * Converts an object of type 'ComprehendStartEventsDetectionJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStartEventsDetectionJobResponse(obj: ComprehendStartEventsDetectionJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobStatus': obj.jobStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStartKeyPhrasesDetectionJobRequest
 */
export interface ComprehendStartKeyPhrasesDetectionJobRequest {
  /**
   * @schema ComprehendStartKeyPhrasesDetectionJobRequest#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendInputDataConfig;

  /**
   * @schema ComprehendStartKeyPhrasesDetectionJobRequest#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendStartKeyPhrasesDetectionJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendStartKeyPhrasesDetectionJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendStartKeyPhrasesDetectionJobRequest#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ComprehendStartKeyPhrasesDetectionJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ComprehendStartKeyPhrasesDetectionJobRequest#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendStartKeyPhrasesDetectionJobRequest#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

}

/**
 * Converts an object of type 'ComprehendStartKeyPhrasesDetectionJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStartKeyPhrasesDetectionJobRequest(obj: ComprehendStartKeyPhrasesDetectionJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputDataConfig': toJson_ComprehendInputDataConfig(obj.inputDataConfig),
    'OutputDataConfig': toJson_ComprehendOutputDataConfig(obj.outputDataConfig),
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'JobName': obj.jobName,
    'LanguageCode': obj.languageCode,
    'ClientRequestToken': obj.clientRequestToken,
    'VolumeKmsKeyId': obj.volumeKmsKeyId,
    'VpcConfig': toJson_ComprehendVpcConfig(obj.vpcConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStartKeyPhrasesDetectionJobResponse
 */
export interface ComprehendStartKeyPhrasesDetectionJobResponse {
  /**
   * @schema ComprehendStartKeyPhrasesDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendStartKeyPhrasesDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * Converts an object of type 'ComprehendStartKeyPhrasesDetectionJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStartKeyPhrasesDetectionJobResponse(obj: ComprehendStartKeyPhrasesDetectionJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobStatus': obj.jobStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStartPiiEntitiesDetectionJobRequest
 */
export interface ComprehendStartPiiEntitiesDetectionJobRequest {
  /**
   * @schema ComprehendStartPiiEntitiesDetectionJobRequest#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendInputDataConfig;

  /**
   * @schema ComprehendStartPiiEntitiesDetectionJobRequest#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendStartPiiEntitiesDetectionJobRequest#Mode
   */
  readonly mode?: string;

  /**
   * @schema ComprehendStartPiiEntitiesDetectionJobRequest#RedactionConfig
   */
  readonly redactionConfig?: ComprehendRedactionConfig;

  /**
   * @schema ComprehendStartPiiEntitiesDetectionJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendStartPiiEntitiesDetectionJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendStartPiiEntitiesDetectionJobRequest#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ComprehendStartPiiEntitiesDetectionJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

}

/**
 * Converts an object of type 'ComprehendStartPiiEntitiesDetectionJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStartPiiEntitiesDetectionJobRequest(obj: ComprehendStartPiiEntitiesDetectionJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputDataConfig': toJson_ComprehendInputDataConfig(obj.inputDataConfig),
    'OutputDataConfig': toJson_ComprehendOutputDataConfig(obj.outputDataConfig),
    'Mode': obj.mode,
    'RedactionConfig': toJson_ComprehendRedactionConfig(obj.redactionConfig),
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'JobName': obj.jobName,
    'LanguageCode': obj.languageCode,
    'ClientRequestToken': obj.clientRequestToken,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStartPiiEntitiesDetectionJobResponse
 */
export interface ComprehendStartPiiEntitiesDetectionJobResponse {
  /**
   * @schema ComprehendStartPiiEntitiesDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendStartPiiEntitiesDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * Converts an object of type 'ComprehendStartPiiEntitiesDetectionJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStartPiiEntitiesDetectionJobResponse(obj: ComprehendStartPiiEntitiesDetectionJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobStatus': obj.jobStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStartSentimentDetectionJobRequest
 */
export interface ComprehendStartSentimentDetectionJobRequest {
  /**
   * @schema ComprehendStartSentimentDetectionJobRequest#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendInputDataConfig;

  /**
   * @schema ComprehendStartSentimentDetectionJobRequest#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendStartSentimentDetectionJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendStartSentimentDetectionJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendStartSentimentDetectionJobRequest#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ComprehendStartSentimentDetectionJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ComprehendStartSentimentDetectionJobRequest#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendStartSentimentDetectionJobRequest#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

}

/**
 * Converts an object of type 'ComprehendStartSentimentDetectionJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStartSentimentDetectionJobRequest(obj: ComprehendStartSentimentDetectionJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputDataConfig': toJson_ComprehendInputDataConfig(obj.inputDataConfig),
    'OutputDataConfig': toJson_ComprehendOutputDataConfig(obj.outputDataConfig),
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'JobName': obj.jobName,
    'LanguageCode': obj.languageCode,
    'ClientRequestToken': obj.clientRequestToken,
    'VolumeKmsKeyId': obj.volumeKmsKeyId,
    'VpcConfig': toJson_ComprehendVpcConfig(obj.vpcConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStartSentimentDetectionJobResponse
 */
export interface ComprehendStartSentimentDetectionJobResponse {
  /**
   * @schema ComprehendStartSentimentDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendStartSentimentDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * Converts an object of type 'ComprehendStartSentimentDetectionJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStartSentimentDetectionJobResponse(obj: ComprehendStartSentimentDetectionJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobStatus': obj.jobStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStartTopicsDetectionJobRequest
 */
export interface ComprehendStartTopicsDetectionJobRequest {
  /**
   * @schema ComprehendStartTopicsDetectionJobRequest#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendInputDataConfig;

  /**
   * @schema ComprehendStartTopicsDetectionJobRequest#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendStartTopicsDetectionJobRequest#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendStartTopicsDetectionJobRequest#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendStartTopicsDetectionJobRequest#NumberOfTopics
   */
  readonly numberOfTopics?: number;

  /**
   * @schema ComprehendStartTopicsDetectionJobRequest#ClientRequestToken
   */
  readonly clientRequestToken?: string;

  /**
   * @schema ComprehendStartTopicsDetectionJobRequest#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendStartTopicsDetectionJobRequest#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

}

/**
 * Converts an object of type 'ComprehendStartTopicsDetectionJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStartTopicsDetectionJobRequest(obj: ComprehendStartTopicsDetectionJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'InputDataConfig': toJson_ComprehendInputDataConfig(obj.inputDataConfig),
    'OutputDataConfig': toJson_ComprehendOutputDataConfig(obj.outputDataConfig),
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'JobName': obj.jobName,
    'NumberOfTopics': obj.numberOfTopics,
    'ClientRequestToken': obj.clientRequestToken,
    'VolumeKmsKeyId': obj.volumeKmsKeyId,
    'VpcConfig': toJson_ComprehendVpcConfig(obj.vpcConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStartTopicsDetectionJobResponse
 */
export interface ComprehendStartTopicsDetectionJobResponse {
  /**
   * @schema ComprehendStartTopicsDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendStartTopicsDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * Converts an object of type 'ComprehendStartTopicsDetectionJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStartTopicsDetectionJobResponse(obj: ComprehendStartTopicsDetectionJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobStatus': obj.jobStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStopDominantLanguageDetectionJobRequest
 */
export interface ComprehendStopDominantLanguageDetectionJobRequest {
  /**
   * @schema ComprehendStopDominantLanguageDetectionJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendStopDominantLanguageDetectionJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStopDominantLanguageDetectionJobRequest(obj: ComprehendStopDominantLanguageDetectionJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStopDominantLanguageDetectionJobResponse
 */
export interface ComprehendStopDominantLanguageDetectionJobResponse {
  /**
   * @schema ComprehendStopDominantLanguageDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendStopDominantLanguageDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * Converts an object of type 'ComprehendStopDominantLanguageDetectionJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStopDominantLanguageDetectionJobResponse(obj: ComprehendStopDominantLanguageDetectionJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobStatus': obj.jobStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStopEntitiesDetectionJobRequest
 */
export interface ComprehendStopEntitiesDetectionJobRequest {
  /**
   * @schema ComprehendStopEntitiesDetectionJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendStopEntitiesDetectionJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStopEntitiesDetectionJobRequest(obj: ComprehendStopEntitiesDetectionJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStopEntitiesDetectionJobResponse
 */
export interface ComprehendStopEntitiesDetectionJobResponse {
  /**
   * @schema ComprehendStopEntitiesDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendStopEntitiesDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * Converts an object of type 'ComprehendStopEntitiesDetectionJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStopEntitiesDetectionJobResponse(obj: ComprehendStopEntitiesDetectionJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobStatus': obj.jobStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStopEventsDetectionJobRequest
 */
export interface ComprehendStopEventsDetectionJobRequest {
  /**
   * @schema ComprehendStopEventsDetectionJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendStopEventsDetectionJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStopEventsDetectionJobRequest(obj: ComprehendStopEventsDetectionJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStopEventsDetectionJobResponse
 */
export interface ComprehendStopEventsDetectionJobResponse {
  /**
   * @schema ComprehendStopEventsDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendStopEventsDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * Converts an object of type 'ComprehendStopEventsDetectionJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStopEventsDetectionJobResponse(obj: ComprehendStopEventsDetectionJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobStatus': obj.jobStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStopKeyPhrasesDetectionJobRequest
 */
export interface ComprehendStopKeyPhrasesDetectionJobRequest {
  /**
   * @schema ComprehendStopKeyPhrasesDetectionJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendStopKeyPhrasesDetectionJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStopKeyPhrasesDetectionJobRequest(obj: ComprehendStopKeyPhrasesDetectionJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStopKeyPhrasesDetectionJobResponse
 */
export interface ComprehendStopKeyPhrasesDetectionJobResponse {
  /**
   * @schema ComprehendStopKeyPhrasesDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendStopKeyPhrasesDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * Converts an object of type 'ComprehendStopKeyPhrasesDetectionJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStopKeyPhrasesDetectionJobResponse(obj: ComprehendStopKeyPhrasesDetectionJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobStatus': obj.jobStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStopPiiEntitiesDetectionJobRequest
 */
export interface ComprehendStopPiiEntitiesDetectionJobRequest {
  /**
   * @schema ComprehendStopPiiEntitiesDetectionJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendStopPiiEntitiesDetectionJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStopPiiEntitiesDetectionJobRequest(obj: ComprehendStopPiiEntitiesDetectionJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStopPiiEntitiesDetectionJobResponse
 */
export interface ComprehendStopPiiEntitiesDetectionJobResponse {
  /**
   * @schema ComprehendStopPiiEntitiesDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendStopPiiEntitiesDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * Converts an object of type 'ComprehendStopPiiEntitiesDetectionJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStopPiiEntitiesDetectionJobResponse(obj: ComprehendStopPiiEntitiesDetectionJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobStatus': obj.jobStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStopSentimentDetectionJobRequest
 */
export interface ComprehendStopSentimentDetectionJobRequest {
  /**
   * @schema ComprehendStopSentimentDetectionJobRequest#JobId
   */
  readonly jobId?: string;

}

/**
 * Converts an object of type 'ComprehendStopSentimentDetectionJobRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStopSentimentDetectionJobRequest(obj: ComprehendStopSentimentDetectionJobRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStopSentimentDetectionJobResponse
 */
export interface ComprehendStopSentimentDetectionJobResponse {
  /**
   * @schema ComprehendStopSentimentDetectionJobResponse#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendStopSentimentDetectionJobResponse#JobStatus
   */
  readonly jobStatus?: string;

}

/**
 * Converts an object of type 'ComprehendStopSentimentDetectionJobResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStopSentimentDetectionJobResponse(obj: ComprehendStopSentimentDetectionJobResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobStatus': obj.jobStatus,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStopTrainingDocumentClassifierRequest
 */
export interface ComprehendStopTrainingDocumentClassifierRequest {
  /**
   * @schema ComprehendStopTrainingDocumentClassifierRequest#DocumentClassifierArn
   */
  readonly documentClassifierArn?: string;

}

/**
 * Converts an object of type 'ComprehendStopTrainingDocumentClassifierRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStopTrainingDocumentClassifierRequest(obj: ComprehendStopTrainingDocumentClassifierRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DocumentClassifierArn': obj.documentClassifierArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStopTrainingDocumentClassifierResponse
 */
export interface ComprehendStopTrainingDocumentClassifierResponse {
}

/**
 * Converts an object of type 'ComprehendStopTrainingDocumentClassifierResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStopTrainingDocumentClassifierResponse(obj: ComprehendStopTrainingDocumentClassifierResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStopTrainingEntityRecognizerRequest
 */
export interface ComprehendStopTrainingEntityRecognizerRequest {
  /**
   * @schema ComprehendStopTrainingEntityRecognizerRequest#EntityRecognizerArn
   */
  readonly entityRecognizerArn?: string;

}

/**
 * Converts an object of type 'ComprehendStopTrainingEntityRecognizerRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStopTrainingEntityRecognizerRequest(obj: ComprehendStopTrainingEntityRecognizerRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EntityRecognizerArn': obj.entityRecognizerArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendStopTrainingEntityRecognizerResponse
 */
export interface ComprehendStopTrainingEntityRecognizerResponse {
}

/**
 * Converts an object of type 'ComprehendStopTrainingEntityRecognizerResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendStopTrainingEntityRecognizerResponse(obj: ComprehendStopTrainingEntityRecognizerResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendTagResourceRequest
 */
export interface ComprehendTagResourceRequest {
  /**
   * @schema ComprehendTagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema ComprehendTagResourceRequest#Tags
   */
  readonly tags?: ComprehendTag[];

}

/**
 * Converts an object of type 'ComprehendTagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendTagResourceRequest(obj: ComprehendTagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'Tags': obj.tags?.map(y => toJson_ComprehendTag(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendTagResourceResponse
 */
export interface ComprehendTagResourceResponse {
}

/**
 * Converts an object of type 'ComprehendTagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendTagResourceResponse(obj: ComprehendTagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendUntagResourceRequest
 */
export interface ComprehendUntagResourceRequest {
  /**
   * @schema ComprehendUntagResourceRequest#ResourceArn
   */
  readonly resourceArn?: string;

  /**
   * @schema ComprehendUntagResourceRequest#TagKeys
   */
  readonly tagKeys?: string[];

}

/**
 * Converts an object of type 'ComprehendUntagResourceRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendUntagResourceRequest(obj: ComprehendUntagResourceRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ResourceArn': obj.resourceArn,
    'TagKeys': obj.tagKeys?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendUntagResourceResponse
 */
export interface ComprehendUntagResourceResponse {
}

/**
 * Converts an object of type 'ComprehendUntagResourceResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendUntagResourceResponse(obj: ComprehendUntagResourceResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendUpdateEndpointRequest
 */
export interface ComprehendUpdateEndpointRequest {
  /**
   * @schema ComprehendUpdateEndpointRequest#EndpointArn
   */
  readonly endpointArn?: string;

  /**
   * @schema ComprehendUpdateEndpointRequest#DesiredInferenceUnits
   */
  readonly desiredInferenceUnits?: number;

}

/**
 * Converts an object of type 'ComprehendUpdateEndpointRequest' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendUpdateEndpointRequest(obj: ComprehendUpdateEndpointRequest | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointArn': obj.endpointArn,
    'DesiredInferenceUnits': obj.desiredInferenceUnits,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendUpdateEndpointResponse
 */
export interface ComprehendUpdateEndpointResponse {
}

/**
 * Converts an object of type 'ComprehendUpdateEndpointResponse' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendUpdateEndpointResponse(obj: ComprehendUpdateEndpointResponse | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendBatchDetectDominantLanguageItemResult
 */
export interface ComprehendBatchDetectDominantLanguageItemResult {
  /**
   * @schema ComprehendBatchDetectDominantLanguageItemResult#Index
   */
  readonly index?: number;

  /**
   * @schema ComprehendBatchDetectDominantLanguageItemResult#Languages
   */
  readonly languages?: ComprehendDominantLanguage[];

}

/**
 * Converts an object of type 'ComprehendBatchDetectDominantLanguageItemResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendBatchDetectDominantLanguageItemResult(obj: ComprehendBatchDetectDominantLanguageItemResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Index': obj.index,
    'Languages': obj.languages?.map(y => toJson_ComprehendDominantLanguage(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendBatchItemError
 */
export interface ComprehendBatchItemError {
  /**
   * @schema ComprehendBatchItemError#Index
   */
  readonly index?: number;

  /**
   * @schema ComprehendBatchItemError#ErrorCode
   */
  readonly errorCode?: string;

  /**
   * @schema ComprehendBatchItemError#ErrorMessage
   */
  readonly errorMessage?: string;

}

/**
 * Converts an object of type 'ComprehendBatchItemError' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendBatchItemError(obj: ComprehendBatchItemError | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Index': obj.index,
    'ErrorCode': obj.errorCode,
    'ErrorMessage': obj.errorMessage,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendBatchDetectEntitiesItemResult
 */
export interface ComprehendBatchDetectEntitiesItemResult {
  /**
   * @schema ComprehendBatchDetectEntitiesItemResult#Index
   */
  readonly index?: number;

  /**
   * @schema ComprehendBatchDetectEntitiesItemResult#Entities
   */
  readonly entities?: ComprehendEntity[];

}

/**
 * Converts an object of type 'ComprehendBatchDetectEntitiesItemResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendBatchDetectEntitiesItemResult(obj: ComprehendBatchDetectEntitiesItemResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Index': obj.index,
    'Entities': obj.entities?.map(y => toJson_ComprehendEntity(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendBatchDetectKeyPhrasesItemResult
 */
export interface ComprehendBatchDetectKeyPhrasesItemResult {
  /**
   * @schema ComprehendBatchDetectKeyPhrasesItemResult#Index
   */
  readonly index?: number;

  /**
   * @schema ComprehendBatchDetectKeyPhrasesItemResult#KeyPhrases
   */
  readonly keyPhrases?: ComprehendKeyPhrase[];

}

/**
 * Converts an object of type 'ComprehendBatchDetectKeyPhrasesItemResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendBatchDetectKeyPhrasesItemResult(obj: ComprehendBatchDetectKeyPhrasesItemResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Index': obj.index,
    'KeyPhrases': obj.keyPhrases?.map(y => toJson_ComprehendKeyPhrase(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendBatchDetectSentimentItemResult
 */
export interface ComprehendBatchDetectSentimentItemResult {
  /**
   * @schema ComprehendBatchDetectSentimentItemResult#Index
   */
  readonly index?: number;

  /**
   * @schema ComprehendBatchDetectSentimentItemResult#Sentiment
   */
  readonly sentiment?: string;

  /**
   * @schema ComprehendBatchDetectSentimentItemResult#SentimentScore
   */
  readonly sentimentScore?: ComprehendSentimentScore;

}

/**
 * Converts an object of type 'ComprehendBatchDetectSentimentItemResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendBatchDetectSentimentItemResult(obj: ComprehendBatchDetectSentimentItemResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Index': obj.index,
    'Sentiment': obj.sentiment,
    'SentimentScore': toJson_ComprehendSentimentScore(obj.sentimentScore),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendBatchDetectSyntaxItemResult
 */
export interface ComprehendBatchDetectSyntaxItemResult {
  /**
   * @schema ComprehendBatchDetectSyntaxItemResult#Index
   */
  readonly index?: number;

  /**
   * @schema ComprehendBatchDetectSyntaxItemResult#SyntaxTokens
   */
  readonly syntaxTokens?: ComprehendSyntaxToken[];

}

/**
 * Converts an object of type 'ComprehendBatchDetectSyntaxItemResult' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendBatchDetectSyntaxItemResult(obj: ComprehendBatchDetectSyntaxItemResult | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Index': obj.index,
    'SyntaxTokens': obj.syntaxTokens?.map(y => toJson_ComprehendSyntaxToken(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDocumentClass
 */
export interface ComprehendDocumentClass {
  /**
   * @schema ComprehendDocumentClass#Name
   */
  readonly name?: string;

  /**
   * @schema ComprehendDocumentClass#Score
   */
  readonly score?: number;

}

/**
 * Converts an object of type 'ComprehendDocumentClass' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDocumentClass(obj: ComprehendDocumentClass | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Score': obj.score,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDocumentLabel
 */
export interface ComprehendDocumentLabel {
  /**
   * @schema ComprehendDocumentLabel#Name
   */
  readonly name?: string;

  /**
   * @schema ComprehendDocumentLabel#Score
   */
  readonly score?: number;

}

/**
 * Converts an object of type 'ComprehendDocumentLabel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDocumentLabel(obj: ComprehendDocumentLabel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Score': obj.score,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendEntityLabel
 */
export interface ComprehendEntityLabel {
  /**
   * @schema ComprehendEntityLabel#Name
   */
  readonly name?: string;

  /**
   * @schema ComprehendEntityLabel#Score
   */
  readonly score?: number;

}

/**
 * Converts an object of type 'ComprehendEntityLabel' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendEntityLabel(obj: ComprehendEntityLabel | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Name': obj.name,
    'Score': obj.score,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendTag
 */
export interface ComprehendTag {
  /**
   * @schema ComprehendTag#Key
   */
  readonly key?: string;

  /**
   * @schema ComprehendTag#Value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'ComprehendTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendTag(obj: ComprehendTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Key': obj.key,
    'Value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDocumentClassifierInputDataConfig
 */
export interface ComprehendDocumentClassifierInputDataConfig {
  /**
   * @schema ComprehendDocumentClassifierInputDataConfig#DataFormat
   */
  readonly dataFormat?: string;

  /**
   * @schema ComprehendDocumentClassifierInputDataConfig#S3Uri
   */
  readonly s3Uri?: string;

  /**
   * @schema ComprehendDocumentClassifierInputDataConfig#LabelDelimiter
   */
  readonly labelDelimiter?: string;

  /**
   * @schema ComprehendDocumentClassifierInputDataConfig#AugmentedManifests
   */
  readonly augmentedManifests?: ComprehendAugmentedManifestsListItem[];

}

/**
 * Converts an object of type 'ComprehendDocumentClassifierInputDataConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDocumentClassifierInputDataConfig(obj: ComprehendDocumentClassifierInputDataConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataFormat': obj.dataFormat,
    'S3Uri': obj.s3Uri,
    'LabelDelimiter': obj.labelDelimiter,
    'AugmentedManifests': obj.augmentedManifests?.map(y => toJson_ComprehendAugmentedManifestsListItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDocumentClassifierOutputDataConfig
 */
export interface ComprehendDocumentClassifierOutputDataConfig {
  /**
   * @schema ComprehendDocumentClassifierOutputDataConfig#S3Uri
   */
  readonly s3Uri?: string;

  /**
   * @schema ComprehendDocumentClassifierOutputDataConfig#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * Converts an object of type 'ComprehendDocumentClassifierOutputDataConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDocumentClassifierOutputDataConfig(obj: ComprehendDocumentClassifierOutputDataConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Uri': obj.s3Uri,
    'KmsKeyId': obj.kmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendVpcConfig
 */
export interface ComprehendVpcConfig {
  /**
   * @schema ComprehendVpcConfig#SecurityGroupIds
   */
  readonly securityGroupIds?: string[];

  /**
   * @schema ComprehendVpcConfig#Subnets
   */
  readonly subnets?: string[];

}

/**
 * Converts an object of type 'ComprehendVpcConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendVpcConfig(obj: ComprehendVpcConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'SecurityGroupIds': obj.securityGroupIds?.map(y => y),
    'Subnets': obj.subnets?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendEntityRecognizerInputDataConfig
 */
export interface ComprehendEntityRecognizerInputDataConfig {
  /**
   * @schema ComprehendEntityRecognizerInputDataConfig#DataFormat
   */
  readonly dataFormat?: string;

  /**
   * @schema ComprehendEntityRecognizerInputDataConfig#EntityTypes
   */
  readonly entityTypes?: ComprehendEntityTypesListItem[];

  /**
   * @schema ComprehendEntityRecognizerInputDataConfig#Documents
   */
  readonly documents?: ComprehendEntityRecognizerDocuments;

  /**
   * @schema ComprehendEntityRecognizerInputDataConfig#Annotations
   */
  readonly annotations?: ComprehendEntityRecognizerAnnotations;

  /**
   * @schema ComprehendEntityRecognizerInputDataConfig#EntityList
   */
  readonly entityList?: ComprehendEntityRecognizerEntityList;

  /**
   * @schema ComprehendEntityRecognizerInputDataConfig#AugmentedManifests
   */
  readonly augmentedManifests?: ComprehendAugmentedManifestsListItem[];

}

/**
 * Converts an object of type 'ComprehendEntityRecognizerInputDataConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendEntityRecognizerInputDataConfig(obj: ComprehendEntityRecognizerInputDataConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DataFormat': obj.dataFormat,
    'EntityTypes': obj.entityTypes?.map(y => toJson_ComprehendEntityTypesListItem(y)),
    'Documents': toJson_ComprehendEntityRecognizerDocuments(obj.documents),
    'Annotations': toJson_ComprehendEntityRecognizerAnnotations(obj.annotations),
    'EntityList': toJson_ComprehendEntityRecognizerEntityList(obj.entityList),
    'AugmentedManifests': obj.augmentedManifests?.map(y => toJson_ComprehendAugmentedManifestsListItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDocumentClassificationJobProperties
 */
export interface ComprehendDocumentClassificationJobProperties {
  /**
   * @schema ComprehendDocumentClassificationJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendDocumentClassificationJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendDocumentClassificationJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendDocumentClassificationJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema ComprehendDocumentClassificationJobProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema ComprehendDocumentClassificationJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ComprehendDocumentClassificationJobProperties#DocumentClassifierArn
   */
  readonly documentClassifierArn?: string;

  /**
   * @schema ComprehendDocumentClassificationJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendInputDataConfig;

  /**
   * @schema ComprehendDocumentClassificationJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendDocumentClassificationJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendDocumentClassificationJobProperties#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendDocumentClassificationJobProperties#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

}

/**
 * Converts an object of type 'ComprehendDocumentClassificationJobProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDocumentClassificationJobProperties(obj: ComprehendDocumentClassificationJobProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobName': obj.jobName,
    'JobStatus': obj.jobStatus,
    'Message': obj.message,
    'SubmitTime': obj.submitTime,
    'EndTime': obj.endTime,
    'DocumentClassifierArn': obj.documentClassifierArn,
    'InputDataConfig': toJson_ComprehendInputDataConfig(obj.inputDataConfig),
    'OutputDataConfig': toJson_ComprehendOutputDataConfig(obj.outputDataConfig),
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'VolumeKmsKeyId': obj.volumeKmsKeyId,
    'VpcConfig': toJson_ComprehendVpcConfig(obj.vpcConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDocumentClassifierProperties
 */
export interface ComprehendDocumentClassifierProperties {
  /**
   * @schema ComprehendDocumentClassifierProperties#DocumentClassifierArn
   */
  readonly documentClassifierArn?: string;

  /**
   * @schema ComprehendDocumentClassifierProperties#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ComprehendDocumentClassifierProperties#Status
   */
  readonly status?: string;

  /**
   * @schema ComprehendDocumentClassifierProperties#Message
   */
  readonly message?: string;

  /**
   * @schema ComprehendDocumentClassifierProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema ComprehendDocumentClassifierProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ComprehendDocumentClassifierProperties#TrainingStartTime
   */
  readonly trainingStartTime?: string;

  /**
   * @schema ComprehendDocumentClassifierProperties#TrainingEndTime
   */
  readonly trainingEndTime?: string;

  /**
   * @schema ComprehendDocumentClassifierProperties#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendDocumentClassifierInputDataConfig;

  /**
   * @schema ComprehendDocumentClassifierProperties#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendDocumentClassifierOutputDataConfig;

  /**
   * @schema ComprehendDocumentClassifierProperties#ClassifierMetadata
   */
  readonly classifierMetadata?: ComprehendClassifierMetadata;

  /**
   * @schema ComprehendDocumentClassifierProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendDocumentClassifierProperties#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendDocumentClassifierProperties#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

  /**
   * @schema ComprehendDocumentClassifierProperties#Mode
   */
  readonly mode?: string;

  /**
   * @schema ComprehendDocumentClassifierProperties#ModelKmsKeyId
   */
  readonly modelKmsKeyId?: string;

}

/**
 * Converts an object of type 'ComprehendDocumentClassifierProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDocumentClassifierProperties(obj: ComprehendDocumentClassifierProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'DocumentClassifierArn': obj.documentClassifierArn,
    'LanguageCode': obj.languageCode,
    'Status': obj.status,
    'Message': obj.message,
    'SubmitTime': obj.submitTime,
    'EndTime': obj.endTime,
    'TrainingStartTime': obj.trainingStartTime,
    'TrainingEndTime': obj.trainingEndTime,
    'InputDataConfig': toJson_ComprehendDocumentClassifierInputDataConfig(obj.inputDataConfig),
    'OutputDataConfig': toJson_ComprehendDocumentClassifierOutputDataConfig(obj.outputDataConfig),
    'ClassifierMetadata': toJson_ComprehendClassifierMetadata(obj.classifierMetadata),
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'VolumeKmsKeyId': obj.volumeKmsKeyId,
    'VpcConfig': toJson_ComprehendVpcConfig(obj.vpcConfig),
    'Mode': obj.mode,
    'ModelKmsKeyId': obj.modelKmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDominantLanguageDetectionJobProperties
 */
export interface ComprehendDominantLanguageDetectionJobProperties {
  /**
   * @schema ComprehendDominantLanguageDetectionJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendDominantLanguageDetectionJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendDominantLanguageDetectionJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendDominantLanguageDetectionJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema ComprehendDominantLanguageDetectionJobProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema ComprehendDominantLanguageDetectionJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ComprehendDominantLanguageDetectionJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendInputDataConfig;

  /**
   * @schema ComprehendDominantLanguageDetectionJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendDominantLanguageDetectionJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendDominantLanguageDetectionJobProperties#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendDominantLanguageDetectionJobProperties#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

}

/**
 * Converts an object of type 'ComprehendDominantLanguageDetectionJobProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDominantLanguageDetectionJobProperties(obj: ComprehendDominantLanguageDetectionJobProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobName': obj.jobName,
    'JobStatus': obj.jobStatus,
    'Message': obj.message,
    'SubmitTime': obj.submitTime,
    'EndTime': obj.endTime,
    'InputDataConfig': toJson_ComprehendInputDataConfig(obj.inputDataConfig),
    'OutputDataConfig': toJson_ComprehendOutputDataConfig(obj.outputDataConfig),
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'VolumeKmsKeyId': obj.volumeKmsKeyId,
    'VpcConfig': toJson_ComprehendVpcConfig(obj.vpcConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendEndpointProperties
 */
export interface ComprehendEndpointProperties {
  /**
   * @schema ComprehendEndpointProperties#EndpointArn
   */
  readonly endpointArn?: string;

  /**
   * @schema ComprehendEndpointProperties#Status
   */
  readonly status?: string;

  /**
   * @schema ComprehendEndpointProperties#Message
   */
  readonly message?: string;

  /**
   * @schema ComprehendEndpointProperties#ModelArn
   */
  readonly modelArn?: string;

  /**
   * @schema ComprehendEndpointProperties#DesiredInferenceUnits
   */
  readonly desiredInferenceUnits?: number;

  /**
   * @schema ComprehendEndpointProperties#CurrentInferenceUnits
   */
  readonly currentInferenceUnits?: number;

  /**
   * @schema ComprehendEndpointProperties#CreationTime
   */
  readonly creationTime?: string;

  /**
   * @schema ComprehendEndpointProperties#LastModifiedTime
   */
  readonly lastModifiedTime?: string;

  /**
   * @schema ComprehendEndpointProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

}

/**
 * Converts an object of type 'ComprehendEndpointProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendEndpointProperties(obj: ComprehendEndpointProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EndpointArn': obj.endpointArn,
    'Status': obj.status,
    'Message': obj.message,
    'ModelArn': obj.modelArn,
    'DesiredInferenceUnits': obj.desiredInferenceUnits,
    'CurrentInferenceUnits': obj.currentInferenceUnits,
    'CreationTime': obj.creationTime,
    'LastModifiedTime': obj.lastModifiedTime,
    'DataAccessRoleArn': obj.dataAccessRoleArn,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendEntitiesDetectionJobProperties
 */
export interface ComprehendEntitiesDetectionJobProperties {
  /**
   * @schema ComprehendEntitiesDetectionJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendEntitiesDetectionJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendEntitiesDetectionJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendEntitiesDetectionJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema ComprehendEntitiesDetectionJobProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema ComprehendEntitiesDetectionJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ComprehendEntitiesDetectionJobProperties#EntityRecognizerArn
   */
  readonly entityRecognizerArn?: string;

  /**
   * @schema ComprehendEntitiesDetectionJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendInputDataConfig;

  /**
   * @schema ComprehendEntitiesDetectionJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendEntitiesDetectionJobProperties#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ComprehendEntitiesDetectionJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendEntitiesDetectionJobProperties#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendEntitiesDetectionJobProperties#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

}

/**
 * Converts an object of type 'ComprehendEntitiesDetectionJobProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendEntitiesDetectionJobProperties(obj: ComprehendEntitiesDetectionJobProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobName': obj.jobName,
    'JobStatus': obj.jobStatus,
    'Message': obj.message,
    'SubmitTime': obj.submitTime,
    'EndTime': obj.endTime,
    'EntityRecognizerArn': obj.entityRecognizerArn,
    'InputDataConfig': toJson_ComprehendInputDataConfig(obj.inputDataConfig),
    'OutputDataConfig': toJson_ComprehendOutputDataConfig(obj.outputDataConfig),
    'LanguageCode': obj.languageCode,
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'VolumeKmsKeyId': obj.volumeKmsKeyId,
    'VpcConfig': toJson_ComprehendVpcConfig(obj.vpcConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendEntityRecognizerProperties
 */
export interface ComprehendEntityRecognizerProperties {
  /**
   * @schema ComprehendEntityRecognizerProperties#EntityRecognizerArn
   */
  readonly entityRecognizerArn?: string;

  /**
   * @schema ComprehendEntityRecognizerProperties#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ComprehendEntityRecognizerProperties#Status
   */
  readonly status?: string;

  /**
   * @schema ComprehendEntityRecognizerProperties#Message
   */
  readonly message?: string;

  /**
   * @schema ComprehendEntityRecognizerProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema ComprehendEntityRecognizerProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ComprehendEntityRecognizerProperties#TrainingStartTime
   */
  readonly trainingStartTime?: string;

  /**
   * @schema ComprehendEntityRecognizerProperties#TrainingEndTime
   */
  readonly trainingEndTime?: string;

  /**
   * @schema ComprehendEntityRecognizerProperties#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendEntityRecognizerInputDataConfig;

  /**
   * @schema ComprehendEntityRecognizerProperties#RecognizerMetadata
   */
  readonly recognizerMetadata?: ComprehendEntityRecognizerMetadata;

  /**
   * @schema ComprehendEntityRecognizerProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendEntityRecognizerProperties#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendEntityRecognizerProperties#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

  /**
   * @schema ComprehendEntityRecognizerProperties#ModelKmsKeyId
   */
  readonly modelKmsKeyId?: string;

}

/**
 * Converts an object of type 'ComprehendEntityRecognizerProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendEntityRecognizerProperties(obj: ComprehendEntityRecognizerProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'EntityRecognizerArn': obj.entityRecognizerArn,
    'LanguageCode': obj.languageCode,
    'Status': obj.status,
    'Message': obj.message,
    'SubmitTime': obj.submitTime,
    'EndTime': obj.endTime,
    'TrainingStartTime': obj.trainingStartTime,
    'TrainingEndTime': obj.trainingEndTime,
    'InputDataConfig': toJson_ComprehendEntityRecognizerInputDataConfig(obj.inputDataConfig),
    'RecognizerMetadata': toJson_ComprehendEntityRecognizerMetadata(obj.recognizerMetadata),
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'VolumeKmsKeyId': obj.volumeKmsKeyId,
    'VpcConfig': toJson_ComprehendVpcConfig(obj.vpcConfig),
    'ModelKmsKeyId': obj.modelKmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendEventsDetectionJobProperties
 */
export interface ComprehendEventsDetectionJobProperties {
  /**
   * @schema ComprehendEventsDetectionJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendEventsDetectionJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendEventsDetectionJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendEventsDetectionJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema ComprehendEventsDetectionJobProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema ComprehendEventsDetectionJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ComprehendEventsDetectionJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendInputDataConfig;

  /**
   * @schema ComprehendEventsDetectionJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendEventsDetectionJobProperties#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ComprehendEventsDetectionJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendEventsDetectionJobProperties#TargetEventTypes
   */
  readonly targetEventTypes?: string[];

}

/**
 * Converts an object of type 'ComprehendEventsDetectionJobProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendEventsDetectionJobProperties(obj: ComprehendEventsDetectionJobProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobName': obj.jobName,
    'JobStatus': obj.jobStatus,
    'Message': obj.message,
    'SubmitTime': obj.submitTime,
    'EndTime': obj.endTime,
    'InputDataConfig': toJson_ComprehendInputDataConfig(obj.inputDataConfig),
    'OutputDataConfig': toJson_ComprehendOutputDataConfig(obj.outputDataConfig),
    'LanguageCode': obj.languageCode,
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'TargetEventTypes': obj.targetEventTypes?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendKeyPhrasesDetectionJobProperties
 */
export interface ComprehendKeyPhrasesDetectionJobProperties {
  /**
   * @schema ComprehendKeyPhrasesDetectionJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendKeyPhrasesDetectionJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendKeyPhrasesDetectionJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendKeyPhrasesDetectionJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema ComprehendKeyPhrasesDetectionJobProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema ComprehendKeyPhrasesDetectionJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ComprehendKeyPhrasesDetectionJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendInputDataConfig;

  /**
   * @schema ComprehendKeyPhrasesDetectionJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendKeyPhrasesDetectionJobProperties#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ComprehendKeyPhrasesDetectionJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendKeyPhrasesDetectionJobProperties#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendKeyPhrasesDetectionJobProperties#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

}

/**
 * Converts an object of type 'ComprehendKeyPhrasesDetectionJobProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendKeyPhrasesDetectionJobProperties(obj: ComprehendKeyPhrasesDetectionJobProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobName': obj.jobName,
    'JobStatus': obj.jobStatus,
    'Message': obj.message,
    'SubmitTime': obj.submitTime,
    'EndTime': obj.endTime,
    'InputDataConfig': toJson_ComprehendInputDataConfig(obj.inputDataConfig),
    'OutputDataConfig': toJson_ComprehendOutputDataConfig(obj.outputDataConfig),
    'LanguageCode': obj.languageCode,
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'VolumeKmsKeyId': obj.volumeKmsKeyId,
    'VpcConfig': toJson_ComprehendVpcConfig(obj.vpcConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendPiiEntitiesDetectionJobProperties
 */
export interface ComprehendPiiEntitiesDetectionJobProperties {
  /**
   * @schema ComprehendPiiEntitiesDetectionJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendPiiEntitiesDetectionJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendPiiEntitiesDetectionJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendPiiEntitiesDetectionJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema ComprehendPiiEntitiesDetectionJobProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema ComprehendPiiEntitiesDetectionJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ComprehendPiiEntitiesDetectionJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendInputDataConfig;

  /**
   * @schema ComprehendPiiEntitiesDetectionJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendPiiOutputDataConfig;

  /**
   * @schema ComprehendPiiEntitiesDetectionJobProperties#RedactionConfig
   */
  readonly redactionConfig?: ComprehendRedactionConfig;

  /**
   * @schema ComprehendPiiEntitiesDetectionJobProperties#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ComprehendPiiEntitiesDetectionJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendPiiEntitiesDetectionJobProperties#Mode
   */
  readonly mode?: string;

}

/**
 * Converts an object of type 'ComprehendPiiEntitiesDetectionJobProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendPiiEntitiesDetectionJobProperties(obj: ComprehendPiiEntitiesDetectionJobProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobName': obj.jobName,
    'JobStatus': obj.jobStatus,
    'Message': obj.message,
    'SubmitTime': obj.submitTime,
    'EndTime': obj.endTime,
    'InputDataConfig': toJson_ComprehendInputDataConfig(obj.inputDataConfig),
    'OutputDataConfig': toJson_ComprehendPiiOutputDataConfig(obj.outputDataConfig),
    'RedactionConfig': toJson_ComprehendRedactionConfig(obj.redactionConfig),
    'LanguageCode': obj.languageCode,
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'Mode': obj.mode,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendSentimentDetectionJobProperties
 */
export interface ComprehendSentimentDetectionJobProperties {
  /**
   * @schema ComprehendSentimentDetectionJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendSentimentDetectionJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendSentimentDetectionJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendSentimentDetectionJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema ComprehendSentimentDetectionJobProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema ComprehendSentimentDetectionJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ComprehendSentimentDetectionJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendInputDataConfig;

  /**
   * @schema ComprehendSentimentDetectionJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendSentimentDetectionJobProperties#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ComprehendSentimentDetectionJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendSentimentDetectionJobProperties#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendSentimentDetectionJobProperties#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

}

/**
 * Converts an object of type 'ComprehendSentimentDetectionJobProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendSentimentDetectionJobProperties(obj: ComprehendSentimentDetectionJobProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobName': obj.jobName,
    'JobStatus': obj.jobStatus,
    'Message': obj.message,
    'SubmitTime': obj.submitTime,
    'EndTime': obj.endTime,
    'InputDataConfig': toJson_ComprehendInputDataConfig(obj.inputDataConfig),
    'OutputDataConfig': toJson_ComprehendOutputDataConfig(obj.outputDataConfig),
    'LanguageCode': obj.languageCode,
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'VolumeKmsKeyId': obj.volumeKmsKeyId,
    'VpcConfig': toJson_ComprehendVpcConfig(obj.vpcConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendTopicsDetectionJobProperties
 */
export interface ComprehendTopicsDetectionJobProperties {
  /**
   * @schema ComprehendTopicsDetectionJobProperties#JobId
   */
  readonly jobId?: string;

  /**
   * @schema ComprehendTopicsDetectionJobProperties#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendTopicsDetectionJobProperties#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendTopicsDetectionJobProperties#Message
   */
  readonly message?: string;

  /**
   * @schema ComprehendTopicsDetectionJobProperties#SubmitTime
   */
  readonly submitTime?: string;

  /**
   * @schema ComprehendTopicsDetectionJobProperties#EndTime
   */
  readonly endTime?: string;

  /**
   * @schema ComprehendTopicsDetectionJobProperties#InputDataConfig
   */
  readonly inputDataConfig?: ComprehendInputDataConfig;

  /**
   * @schema ComprehendTopicsDetectionJobProperties#OutputDataConfig
   */
  readonly outputDataConfig?: ComprehendOutputDataConfig;

  /**
   * @schema ComprehendTopicsDetectionJobProperties#NumberOfTopics
   */
  readonly numberOfTopics?: number;

  /**
   * @schema ComprehendTopicsDetectionJobProperties#DataAccessRoleArn
   */
  readonly dataAccessRoleArn?: string;

  /**
   * @schema ComprehendTopicsDetectionJobProperties#VolumeKmsKeyId
   */
  readonly volumeKmsKeyId?: string;

  /**
   * @schema ComprehendTopicsDetectionJobProperties#VpcConfig
   */
  readonly vpcConfig?: ComprehendVpcConfig;

}

/**
 * Converts an object of type 'ComprehendTopicsDetectionJobProperties' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendTopicsDetectionJobProperties(obj: ComprehendTopicsDetectionJobProperties | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobId': obj.jobId,
    'JobName': obj.jobName,
    'JobStatus': obj.jobStatus,
    'Message': obj.message,
    'SubmitTime': obj.submitTime,
    'EndTime': obj.endTime,
    'InputDataConfig': toJson_ComprehendInputDataConfig(obj.inputDataConfig),
    'OutputDataConfig': toJson_ComprehendOutputDataConfig(obj.outputDataConfig),
    'NumberOfTopics': obj.numberOfTopics,
    'DataAccessRoleArn': obj.dataAccessRoleArn,
    'VolumeKmsKeyId': obj.volumeKmsKeyId,
    'VpcConfig': toJson_ComprehendVpcConfig(obj.vpcConfig),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDominantLanguage
 */
export interface ComprehendDominantLanguage {
  /**
   * @schema ComprehendDominantLanguage#LanguageCode
   */
  readonly languageCode?: string;

  /**
   * @schema ComprehendDominantLanguage#Score
   */
  readonly score?: number;

}

/**
 * Converts an object of type 'ComprehendDominantLanguage' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDominantLanguage(obj: ComprehendDominantLanguage | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'LanguageCode': obj.languageCode,
    'Score': obj.score,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendEntity
 */
export interface ComprehendEntity {
  /**
   * @schema ComprehendEntity#Score
   */
  readonly score?: number;

  /**
   * @schema ComprehendEntity#Type
   */
  readonly type?: string;

  /**
   * @schema ComprehendEntity#Text
   */
  readonly text?: string;

  /**
   * @schema ComprehendEntity#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema ComprehendEntity#EndOffset
   */
  readonly endOffset?: number;

}

/**
 * Converts an object of type 'ComprehendEntity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendEntity(obj: ComprehendEntity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Score': obj.score,
    'Type': obj.type,
    'Text': obj.text,
    'BeginOffset': obj.beginOffset,
    'EndOffset': obj.endOffset,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendKeyPhrase
 */
export interface ComprehendKeyPhrase {
  /**
   * @schema ComprehendKeyPhrase#Score
   */
  readonly score?: number;

  /**
   * @schema ComprehendKeyPhrase#Text
   */
  readonly text?: string;

  /**
   * @schema ComprehendKeyPhrase#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema ComprehendKeyPhrase#EndOffset
   */
  readonly endOffset?: number;

}

/**
 * Converts an object of type 'ComprehendKeyPhrase' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendKeyPhrase(obj: ComprehendKeyPhrase | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Score': obj.score,
    'Text': obj.text,
    'BeginOffset': obj.beginOffset,
    'EndOffset': obj.endOffset,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendPiiEntity
 */
export interface ComprehendPiiEntity {
  /**
   * @schema ComprehendPiiEntity#Score
   */
  readonly score?: number;

  /**
   * @schema ComprehendPiiEntity#Type
   */
  readonly type?: string;

  /**
   * @schema ComprehendPiiEntity#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema ComprehendPiiEntity#EndOffset
   */
  readonly endOffset?: number;

}

/**
 * Converts an object of type 'ComprehendPiiEntity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendPiiEntity(obj: ComprehendPiiEntity | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Score': obj.score,
    'Type': obj.type,
    'BeginOffset': obj.beginOffset,
    'EndOffset': obj.endOffset,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendSentimentScore
 */
export interface ComprehendSentimentScore {
  /**
   * @schema ComprehendSentimentScore#Positive
   */
  readonly positive?: number;

  /**
   * @schema ComprehendSentimentScore#Negative
   */
  readonly negative?: number;

  /**
   * @schema ComprehendSentimentScore#Neutral
   */
  readonly neutral?: number;

  /**
   * @schema ComprehendSentimentScore#Mixed
   */
  readonly mixed?: number;

}

/**
 * Converts an object of type 'ComprehendSentimentScore' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendSentimentScore(obj: ComprehendSentimentScore | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Positive': obj.positive,
    'Negative': obj.negative,
    'Neutral': obj.neutral,
    'Mixed': obj.mixed,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendSyntaxToken
 */
export interface ComprehendSyntaxToken {
  /**
   * @schema ComprehendSyntaxToken#TokenId
   */
  readonly tokenId?: number;

  /**
   * @schema ComprehendSyntaxToken#Text
   */
  readonly text?: string;

  /**
   * @schema ComprehendSyntaxToken#BeginOffset
   */
  readonly beginOffset?: number;

  /**
   * @schema ComprehendSyntaxToken#EndOffset
   */
  readonly endOffset?: number;

  /**
   * @schema ComprehendSyntaxToken#PartOfSpeech
   */
  readonly partOfSpeech?: ComprehendPartOfSpeechTag;

}

/**
 * Converts an object of type 'ComprehendSyntaxToken' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendSyntaxToken(obj: ComprehendSyntaxToken | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'TokenId': obj.tokenId,
    'Text': obj.text,
    'BeginOffset': obj.beginOffset,
    'EndOffset': obj.endOffset,
    'PartOfSpeech': toJson_ComprehendPartOfSpeechTag(obj.partOfSpeech),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDocumentClassificationJobFilter
 */
export interface ComprehendDocumentClassificationJobFilter {
  /**
   * @schema ComprehendDocumentClassificationJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendDocumentClassificationJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendDocumentClassificationJobFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema ComprehendDocumentClassificationJobFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * Converts an object of type 'ComprehendDocumentClassificationJobFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDocumentClassificationJobFilter(obj: ComprehendDocumentClassificationJobFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
    'JobStatus': obj.jobStatus,
    'SubmitTimeBefore': obj.submitTimeBefore,
    'SubmitTimeAfter': obj.submitTimeAfter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDocumentClassifierFilter
 */
export interface ComprehendDocumentClassifierFilter {
  /**
   * @schema ComprehendDocumentClassifierFilter#Status
   */
  readonly status?: string;

  /**
   * @schema ComprehendDocumentClassifierFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema ComprehendDocumentClassifierFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * Converts an object of type 'ComprehendDocumentClassifierFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDocumentClassifierFilter(obj: ComprehendDocumentClassifierFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'SubmitTimeBefore': obj.submitTimeBefore,
    'SubmitTimeAfter': obj.submitTimeAfter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendDominantLanguageDetectionJobFilter
 */
export interface ComprehendDominantLanguageDetectionJobFilter {
  /**
   * @schema ComprehendDominantLanguageDetectionJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendDominantLanguageDetectionJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendDominantLanguageDetectionJobFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema ComprehendDominantLanguageDetectionJobFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * Converts an object of type 'ComprehendDominantLanguageDetectionJobFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendDominantLanguageDetectionJobFilter(obj: ComprehendDominantLanguageDetectionJobFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
    'JobStatus': obj.jobStatus,
    'SubmitTimeBefore': obj.submitTimeBefore,
    'SubmitTimeAfter': obj.submitTimeAfter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendEndpointFilter
 */
export interface ComprehendEndpointFilter {
  /**
   * @schema ComprehendEndpointFilter#ModelArn
   */
  readonly modelArn?: string;

  /**
   * @schema ComprehendEndpointFilter#Status
   */
  readonly status?: string;

  /**
   * @schema ComprehendEndpointFilter#CreationTimeBefore
   */
  readonly creationTimeBefore?: string;

  /**
   * @schema ComprehendEndpointFilter#CreationTimeAfter
   */
  readonly creationTimeAfter?: string;

}

/**
 * Converts an object of type 'ComprehendEndpointFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendEndpointFilter(obj: ComprehendEndpointFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'ModelArn': obj.modelArn,
    'Status': obj.status,
    'CreationTimeBefore': obj.creationTimeBefore,
    'CreationTimeAfter': obj.creationTimeAfter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendEntitiesDetectionJobFilter
 */
export interface ComprehendEntitiesDetectionJobFilter {
  /**
   * @schema ComprehendEntitiesDetectionJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendEntitiesDetectionJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendEntitiesDetectionJobFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema ComprehendEntitiesDetectionJobFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * Converts an object of type 'ComprehendEntitiesDetectionJobFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendEntitiesDetectionJobFilter(obj: ComprehendEntitiesDetectionJobFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
    'JobStatus': obj.jobStatus,
    'SubmitTimeBefore': obj.submitTimeBefore,
    'SubmitTimeAfter': obj.submitTimeAfter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendEntityRecognizerFilter
 */
export interface ComprehendEntityRecognizerFilter {
  /**
   * @schema ComprehendEntityRecognizerFilter#Status
   */
  readonly status?: string;

  /**
   * @schema ComprehendEntityRecognizerFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema ComprehendEntityRecognizerFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * Converts an object of type 'ComprehendEntityRecognizerFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendEntityRecognizerFilter(obj: ComprehendEntityRecognizerFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Status': obj.status,
    'SubmitTimeBefore': obj.submitTimeBefore,
    'SubmitTimeAfter': obj.submitTimeAfter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendEventsDetectionJobFilter
 */
export interface ComprehendEventsDetectionJobFilter {
  /**
   * @schema ComprehendEventsDetectionJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendEventsDetectionJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendEventsDetectionJobFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema ComprehendEventsDetectionJobFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * Converts an object of type 'ComprehendEventsDetectionJobFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendEventsDetectionJobFilter(obj: ComprehendEventsDetectionJobFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
    'JobStatus': obj.jobStatus,
    'SubmitTimeBefore': obj.submitTimeBefore,
    'SubmitTimeAfter': obj.submitTimeAfter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendKeyPhrasesDetectionJobFilter
 */
export interface ComprehendKeyPhrasesDetectionJobFilter {
  /**
   * @schema ComprehendKeyPhrasesDetectionJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendKeyPhrasesDetectionJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendKeyPhrasesDetectionJobFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema ComprehendKeyPhrasesDetectionJobFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * Converts an object of type 'ComprehendKeyPhrasesDetectionJobFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendKeyPhrasesDetectionJobFilter(obj: ComprehendKeyPhrasesDetectionJobFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
    'JobStatus': obj.jobStatus,
    'SubmitTimeBefore': obj.submitTimeBefore,
    'SubmitTimeAfter': obj.submitTimeAfter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendPiiEntitiesDetectionJobFilter
 */
export interface ComprehendPiiEntitiesDetectionJobFilter {
  /**
   * @schema ComprehendPiiEntitiesDetectionJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendPiiEntitiesDetectionJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendPiiEntitiesDetectionJobFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema ComprehendPiiEntitiesDetectionJobFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * Converts an object of type 'ComprehendPiiEntitiesDetectionJobFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendPiiEntitiesDetectionJobFilter(obj: ComprehendPiiEntitiesDetectionJobFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
    'JobStatus': obj.jobStatus,
    'SubmitTimeBefore': obj.submitTimeBefore,
    'SubmitTimeAfter': obj.submitTimeAfter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendSentimentDetectionJobFilter
 */
export interface ComprehendSentimentDetectionJobFilter {
  /**
   * @schema ComprehendSentimentDetectionJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendSentimentDetectionJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendSentimentDetectionJobFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema ComprehendSentimentDetectionJobFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * Converts an object of type 'ComprehendSentimentDetectionJobFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendSentimentDetectionJobFilter(obj: ComprehendSentimentDetectionJobFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
    'JobStatus': obj.jobStatus,
    'SubmitTimeBefore': obj.submitTimeBefore,
    'SubmitTimeAfter': obj.submitTimeAfter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendTopicsDetectionJobFilter
 */
export interface ComprehendTopicsDetectionJobFilter {
  /**
   * @schema ComprehendTopicsDetectionJobFilter#JobName
   */
  readonly jobName?: string;

  /**
   * @schema ComprehendTopicsDetectionJobFilter#JobStatus
   */
  readonly jobStatus?: string;

  /**
   * @schema ComprehendTopicsDetectionJobFilter#SubmitTimeBefore
   */
  readonly submitTimeBefore?: string;

  /**
   * @schema ComprehendTopicsDetectionJobFilter#SubmitTimeAfter
   */
  readonly submitTimeAfter?: string;

}

/**
 * Converts an object of type 'ComprehendTopicsDetectionJobFilter' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendTopicsDetectionJobFilter(obj: ComprehendTopicsDetectionJobFilter | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'JobName': obj.jobName,
    'JobStatus': obj.jobStatus,
    'SubmitTimeBefore': obj.submitTimeBefore,
    'SubmitTimeAfter': obj.submitTimeAfter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendInputDataConfig
 */
export interface ComprehendInputDataConfig {
  /**
   * @schema ComprehendInputDataConfig#S3Uri
   */
  readonly s3Uri?: string;

  /**
   * @schema ComprehendInputDataConfig#InputFormat
   */
  readonly inputFormat?: string;

}

/**
 * Converts an object of type 'ComprehendInputDataConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendInputDataConfig(obj: ComprehendInputDataConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Uri': obj.s3Uri,
    'InputFormat': obj.inputFormat,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendOutputDataConfig
 */
export interface ComprehendOutputDataConfig {
  /**
   * @schema ComprehendOutputDataConfig#S3Uri
   */
  readonly s3Uri?: string;

  /**
   * @schema ComprehendOutputDataConfig#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * Converts an object of type 'ComprehendOutputDataConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendOutputDataConfig(obj: ComprehendOutputDataConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Uri': obj.s3Uri,
    'KmsKeyId': obj.kmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendRedactionConfig
 */
export interface ComprehendRedactionConfig {
  /**
   * @schema ComprehendRedactionConfig#PiiEntityTypes
   */
  readonly piiEntityTypes?: string[];

  /**
   * @schema ComprehendRedactionConfig#MaskMode
   */
  readonly maskMode?: string;

  /**
   * @schema ComprehendRedactionConfig#MaskCharacter
   */
  readonly maskCharacter?: string;

}

/**
 * Converts an object of type 'ComprehendRedactionConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendRedactionConfig(obj: ComprehendRedactionConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'PiiEntityTypes': obj.piiEntityTypes?.map(y => y),
    'MaskMode': obj.maskMode,
    'MaskCharacter': obj.maskCharacter,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendAugmentedManifestsListItem
 */
export interface ComprehendAugmentedManifestsListItem {
  /**
   * @schema ComprehendAugmentedManifestsListItem#S3Uri
   */
  readonly s3Uri?: string;

  /**
   * @schema ComprehendAugmentedManifestsListItem#AttributeNames
   */
  readonly attributeNames?: string[];

}

/**
 * Converts an object of type 'ComprehendAugmentedManifestsListItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendAugmentedManifestsListItem(obj: ComprehendAugmentedManifestsListItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Uri': obj.s3Uri,
    'AttributeNames': obj.attributeNames?.map(y => y),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendEntityTypesListItem
 */
export interface ComprehendEntityTypesListItem {
  /**
   * @schema ComprehendEntityTypesListItem#Type
   */
  readonly type?: string;

}

/**
 * Converts an object of type 'ComprehendEntityTypesListItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendEntityTypesListItem(obj: ComprehendEntityTypesListItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendEntityRecognizerDocuments
 */
export interface ComprehendEntityRecognizerDocuments {
  /**
   * @schema ComprehendEntityRecognizerDocuments#S3Uri
   */
  readonly s3Uri?: string;

}

/**
 * Converts an object of type 'ComprehendEntityRecognizerDocuments' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendEntityRecognizerDocuments(obj: ComprehendEntityRecognizerDocuments | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Uri': obj.s3Uri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendEntityRecognizerAnnotations
 */
export interface ComprehendEntityRecognizerAnnotations {
  /**
   * @schema ComprehendEntityRecognizerAnnotations#S3Uri
   */
  readonly s3Uri?: string;

}

/**
 * Converts an object of type 'ComprehendEntityRecognizerAnnotations' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendEntityRecognizerAnnotations(obj: ComprehendEntityRecognizerAnnotations | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Uri': obj.s3Uri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendEntityRecognizerEntityList
 */
export interface ComprehendEntityRecognizerEntityList {
  /**
   * @schema ComprehendEntityRecognizerEntityList#S3Uri
   */
  readonly s3Uri?: string;

}

/**
 * Converts an object of type 'ComprehendEntityRecognizerEntityList' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendEntityRecognizerEntityList(obj: ComprehendEntityRecognizerEntityList | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Uri': obj.s3Uri,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendClassifierMetadata
 */
export interface ComprehendClassifierMetadata {
  /**
   * @schema ComprehendClassifierMetadata#NumberOfLabels
   */
  readonly numberOfLabels?: number;

  /**
   * @schema ComprehendClassifierMetadata#NumberOfTrainedDocuments
   */
  readonly numberOfTrainedDocuments?: number;

  /**
   * @schema ComprehendClassifierMetadata#NumberOfTestDocuments
   */
  readonly numberOfTestDocuments?: number;

  /**
   * @schema ComprehendClassifierMetadata#EvaluationMetrics
   */
  readonly evaluationMetrics?: ComprehendClassifierEvaluationMetrics;

}

/**
 * Converts an object of type 'ComprehendClassifierMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendClassifierMetadata(obj: ComprehendClassifierMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NumberOfLabels': obj.numberOfLabels,
    'NumberOfTrainedDocuments': obj.numberOfTrainedDocuments,
    'NumberOfTestDocuments': obj.numberOfTestDocuments,
    'EvaluationMetrics': toJson_ComprehendClassifierEvaluationMetrics(obj.evaluationMetrics),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendEntityRecognizerMetadata
 */
export interface ComprehendEntityRecognizerMetadata {
  /**
   * @schema ComprehendEntityRecognizerMetadata#NumberOfTrainedDocuments
   */
  readonly numberOfTrainedDocuments?: number;

  /**
   * @schema ComprehendEntityRecognizerMetadata#NumberOfTestDocuments
   */
  readonly numberOfTestDocuments?: number;

  /**
   * @schema ComprehendEntityRecognizerMetadata#EvaluationMetrics
   */
  readonly evaluationMetrics?: ComprehendEntityRecognizerEvaluationMetrics;

  /**
   * @schema ComprehendEntityRecognizerMetadata#EntityTypes
   */
  readonly entityTypes?: ComprehendEntityRecognizerMetadataEntityTypesListItem[];

}

/**
 * Converts an object of type 'ComprehendEntityRecognizerMetadata' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendEntityRecognizerMetadata(obj: ComprehendEntityRecognizerMetadata | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'NumberOfTrainedDocuments': obj.numberOfTrainedDocuments,
    'NumberOfTestDocuments': obj.numberOfTestDocuments,
    'EvaluationMetrics': toJson_ComprehendEntityRecognizerEvaluationMetrics(obj.evaluationMetrics),
    'EntityTypes': obj.entityTypes?.map(y => toJson_ComprehendEntityRecognizerMetadataEntityTypesListItem(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendPiiOutputDataConfig
 */
export interface ComprehendPiiOutputDataConfig {
  /**
   * @schema ComprehendPiiOutputDataConfig#S3Uri
   */
  readonly s3Uri?: string;

  /**
   * @schema ComprehendPiiOutputDataConfig#KmsKeyId
   */
  readonly kmsKeyId?: string;

}

/**
 * Converts an object of type 'ComprehendPiiOutputDataConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendPiiOutputDataConfig(obj: ComprehendPiiOutputDataConfig | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'S3Uri': obj.s3Uri,
    'KmsKeyId': obj.kmsKeyId,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendPartOfSpeechTag
 */
export interface ComprehendPartOfSpeechTag {
  /**
   * @schema ComprehendPartOfSpeechTag#Tag
   */
  readonly tag?: string;

  /**
   * @schema ComprehendPartOfSpeechTag#Score
   */
  readonly score?: number;

}

/**
 * Converts an object of type 'ComprehendPartOfSpeechTag' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendPartOfSpeechTag(obj: ComprehendPartOfSpeechTag | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Tag': obj.tag,
    'Score': obj.score,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendClassifierEvaluationMetrics
 */
export interface ComprehendClassifierEvaluationMetrics {
  /**
   * @schema ComprehendClassifierEvaluationMetrics#Accuracy
   */
  readonly accuracy?: number;

  /**
   * @schema ComprehendClassifierEvaluationMetrics#Precision
   */
  readonly precision?: number;

  /**
   * @schema ComprehendClassifierEvaluationMetrics#Recall
   */
  readonly recall?: number;

  /**
   * @schema ComprehendClassifierEvaluationMetrics#F1Score
   */
  readonly f1Score?: number;

  /**
   * @schema ComprehendClassifierEvaluationMetrics#MicroPrecision
   */
  readonly microPrecision?: number;

  /**
   * @schema ComprehendClassifierEvaluationMetrics#MicroRecall
   */
  readonly microRecall?: number;

  /**
   * @schema ComprehendClassifierEvaluationMetrics#MicroF1Score
   */
  readonly microF1Score?: number;

  /**
   * @schema ComprehendClassifierEvaluationMetrics#HammingLoss
   */
  readonly hammingLoss?: number;

}

/**
 * Converts an object of type 'ComprehendClassifierEvaluationMetrics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendClassifierEvaluationMetrics(obj: ComprehendClassifierEvaluationMetrics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Accuracy': obj.accuracy,
    'Precision': obj.precision,
    'Recall': obj.recall,
    'F1Score': obj.f1Score,
    'MicroPrecision': obj.microPrecision,
    'MicroRecall': obj.microRecall,
    'MicroF1Score': obj.microF1Score,
    'HammingLoss': obj.hammingLoss,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendEntityRecognizerEvaluationMetrics
 */
export interface ComprehendEntityRecognizerEvaluationMetrics {
  /**
   * @schema ComprehendEntityRecognizerEvaluationMetrics#Precision
   */
  readonly precision?: number;

  /**
   * @schema ComprehendEntityRecognizerEvaluationMetrics#Recall
   */
  readonly recall?: number;

  /**
   * @schema ComprehendEntityRecognizerEvaluationMetrics#F1Score
   */
  readonly f1Score?: number;

}

/**
 * Converts an object of type 'ComprehendEntityRecognizerEvaluationMetrics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendEntityRecognizerEvaluationMetrics(obj: ComprehendEntityRecognizerEvaluationMetrics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Precision': obj.precision,
    'Recall': obj.recall,
    'F1Score': obj.f1Score,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendEntityRecognizerMetadataEntityTypesListItem
 */
export interface ComprehendEntityRecognizerMetadataEntityTypesListItem {
  /**
   * @schema ComprehendEntityRecognizerMetadataEntityTypesListItem#Type
   */
  readonly type?: string;

  /**
   * @schema ComprehendEntityRecognizerMetadataEntityTypesListItem#EvaluationMetrics
   */
  readonly evaluationMetrics?: ComprehendEntityTypesEvaluationMetrics;

  /**
   * @schema ComprehendEntityRecognizerMetadataEntityTypesListItem#NumberOfTrainMentions
   */
  readonly numberOfTrainMentions?: number;

}

/**
 * Converts an object of type 'ComprehendEntityRecognizerMetadataEntityTypesListItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendEntityRecognizerMetadataEntityTypesListItem(obj: ComprehendEntityRecognizerMetadataEntityTypesListItem | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Type': obj.type,
    'EvaluationMetrics': toJson_ComprehendEntityTypesEvaluationMetrics(obj.evaluationMetrics),
    'NumberOfTrainMentions': obj.numberOfTrainMentions,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * @schema ComprehendEntityTypesEvaluationMetrics
 */
export interface ComprehendEntityTypesEvaluationMetrics {
  /**
   * @schema ComprehendEntityTypesEvaluationMetrics#Precision
   */
  readonly precision?: number;

  /**
   * @schema ComprehendEntityTypesEvaluationMetrics#Recall
   */
  readonly recall?: number;

  /**
   * @schema ComprehendEntityTypesEvaluationMetrics#F1Score
   */
  readonly f1Score?: number;

}

/**
 * Converts an object of type 'ComprehendEntityTypesEvaluationMetrics' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ComprehendEntityTypesEvaluationMetrics(obj: ComprehendEntityTypesEvaluationMetrics | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'Precision': obj.precision,
    'Recall': obj.recall,
    'F1Score': obj.f1Score,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */
